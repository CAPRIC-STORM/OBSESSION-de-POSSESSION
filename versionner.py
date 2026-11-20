#!/usr/bin/env python3
"""Prépare le site Hinoenma pour une publication GitHub Pages.

Ajoute une empreinte de contenu ?v=... aux ressources sans modifier leur nom.
Idempotent : un second lancement sans modification ne change rien.
Python 3 standard (aucun module à installer).
"""
from __future__ import annotations

import hashlib
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent
ASSETS = ROOT / "assets"
INDEX = ROOT / "index.html"
CSS = ROOT / "style.css"
JS_FILES = [ROOT / "chapters.js", ROOT / "app.js"]

# Ressources référencées par HTML/CSS/JS et susceptibles d'être mises en cache.
ASSET_RX = re.compile(r"assets/(?:images|audio)/[\w.\-]+\.(?:webp|png|jpg|jpeg|gif|mp3|ogg|wav)(?:\?v=[0-9a-f]+)?", re.I)
VERSION_BLOCK_RX = re.compile(r"\s*<!-- HINO-VERSIONS-START -->.*?<!-- HINO-VERSIONS-END -->\s*", re.S)


def digest(path: Path, length: int = 12) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for block in iter(lambda: f.read(1024 * 1024), b""):
            h.update(block)
    return h.hexdigest()[:length]


def strip_asset_version(text: str) -> str:
    return ASSET_RX.sub(lambda m: m.group(0).split("?v=", 1)[0], text)


def stamp_assets(text: str, hashes: dict[str, str]) -> str:
    def replace(m: re.Match[str]) -> str:
        raw = m.group(0).split("?v=", 1)[0]
        return raw + ("?v=" + hashes[raw] if raw in hashes else "")
    return ASSET_RX.sub(replace, text)


def clean_index(text: str) -> str:
    text = VERSION_BLOCK_RX.sub("\n", text)
    text = re.sub(r'(<meta name="site-version" content=")[^"]*("[^>]*>)', r'\g<1>BUILD\2', text)
    text = re.sub(r'((?:href|src)="(?:style|chapters|app)\.css|(?:href|src)="(?:chapters|app)\.js)\?v=[\da-f]+', r'\1', text)
    # Explicit forms prevent over-broad substitutions.
    for file_name in ("style.css", "chapters.js", "app.js"):
        text = re.sub(rf'((?:href|src)="{re.escape(file_name)})\?v=[0-9a-f]+', r'\1', text)
    return strip_asset_version(text)


def main() -> None:
    for required in [INDEX, CSS, *JS_FILES]:
        if not required.is_file():
            raise SystemExit(f"Fichier manquant : {required.name}")
    files = sorted(p for p in ASSETS.rglob("*") if p.is_file())
    hashes = {p.relative_to(ROOT).as_posix(): digest(p) for p in files}

    # CSS : chaque image de fond obtient une URL versionnée.
    style_source = strip_asset_version(CSS.read_text(encoding="utf-8"))
    style_built = stamp_assets(style_source, hashes)
    CSS.write_text(style_built, encoding="utf-8")

    css_hash = digest(CSS)
    js_hashes = {p.name: digest(p) for p in JS_FILES}
    # Les changements du texte HTML (fiche, blague, etc.) font aussi évoluer
    # la version du site, sans dépendre des anciennes balises de version.
    html = clean_index(INDEX.read_text(encoding="utf-8"))
    html_hash = hashlib.sha256(html.encode("utf-8")).hexdigest()[:12]
    release_material = json.dumps({"assets": hashes, "css": css_hash, "js": js_hashes, "html": html_hash}, sort_keys=True)
    release = hashlib.sha256(release_material.encode()).hexdigest()[:12]

    # L'index est regénéré à partir de sa version normalisée pour éviter
    # de multiplier les ?v= à chaque nouvelle exécution.
    html = stamp_assets(html, hashes)
    for file_name, file_hash in [("style.css", css_hash), *js_hashes.items()]:
        html = html.replace(f'href="{file_name}"', f'href="{file_name}?v={file_hash}"')
        html = html.replace(f'src="{file_name}"', f'src="{file_name}?v={file_hash}"')

    # App.js utilise HINO_ASSET_VERSIONS pour les images et MP3 générés
    # dynamiquement (et donc invisibles dans le HTML).
    manifest = json.dumps(hashes, ensure_ascii=False, separators=(",", ":"), sort_keys=True)
    block = (
        "\n  <!-- HINO-VERSIONS-START -->\n"
        f"  <meta name=\"site-version\" content=\"V7-{release}\">\n"
        "  <script>\n"
        f"    window.HINO_RELEASE = 'V7-{release}';\n"
        f"    window.HINO_ASSET_VERSIONS = {manifest};\n"
        "  </script>\n"
        "  <!-- HINO-VERSIONS-END -->\n"
    )
    html = html.replace("</title>", "</title>" + block, 1)
    INDEX.write_text(html, encoding="utf-8")

    (ROOT / "version.json").write_text(
        json.dumps({"release": f"V7-{release}", "files": {**hashes, "style.css": css_hash, **js_hashes}}, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )
    print(f"Site prêt : V7-{release}")
    print("Les contenus modifiés reçoivent une nouvelle empreinte ; les autres conservent leur cache.")
    print("Publie les fichiers modifiés sur GitHub Pages (GitHub Desktop : Commit puis Push).")


if __name__ == "__main__":
    main()
