/* Hinoenma — Site intégralement local, sans bibliothèque ni requête réseau. */
(() => {
 'use strict';
 const $ = (selector, root=document) => root.querySelector(selector);
 const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
 // Versions empreintes des fichiers (générées automatiquement par versionner.py).
 // Les fichiers inchangés restent en cache ; un fichier modifié reçoit une nouvelle URL.
 const fileVersion = (url) => {
   const hash = (window.HINO_ASSET_VERSIONS || {})[url];
   return hash ? `${url}?v=${hash}` : url;
 };
 const stillImg = (n) => fileVersion(`assets/images/${String(n).padStart(2,'0')}.webp`);
 const img = (n) => fileVersion(n === 18 ? 'assets/images/18-muzan-HD.webp' : `assets/images/${String(n).padStart(2,'0')}.webp`);
 const chapterBgImg = (chapter) => (chapter && chapter.id === 'muzan' && chapter.images && chapter.images[0] === 18)
   ? stillImg(18)
   : img(chapter.images[0]);
 const artBackdropImg = (chapter) => (chapter && chapter.id === 'muzan' && chapter.images && chapter.images[0] === 18)
   ? stillImg(18)
   : img(chapter.images[0]);
 const story = window.HINO_STORY || [];
 const audios = {
   hino: {name:'I Am — Hitomi', context:'HINO · L’ÂGE DE LA LUMIÈRE', url:'assets/audio/theme-hino.mp3'},
   sesshomaru: {name:'Sesshomaru — InuYasha OST 1', context:'HINO · LA DÉSILLUSION', url:'assets/audio/theme-sesshomaru.mp3'},
   evil: {name:'Evil Spirits — InuYasha OST 1', context:'HINOENMA · LE CARNAGE', url:'assets/audio/theme-evil-spirits.mp3'},
   inst: {name:'CHANGGWI (Instrumental) — AHN YEEUN', context:'HINOENMA · LE DOUTE', url:'assets/audio/theme-changgwi-inst.mp3'},
   song: {name:'CHANGGWI — AHN YEEUN', context:'HINOENMA · LA POSSESSION', url:'assets/audio/theme-changgwi.mp3'}
 };
 const audioKeys = Object.keys(audios);
 const esc = (s) => String(s).replace(/[&<>"']/g, ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
 function inlineFormat(raw) { return esc(raw).replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>'); }
 function paragraph(raw) {
   const p = raw.trim();
   if(!p) return '';
   const voice = p.match(/^\*\*\[(MUZAN|KAGARI|SHIZUKU|TSUBAKI)\]\*\*\s*(.*)$/s);
   if(voice) return `<p class="voice ${voice[1].toLowerCase()}"><span class="speaker">${voice[1]}</span> ${inlineFormat(voice[2])}</p>`;
   if(p.startsWith('[FINAL]')) return `<p class="story-final">${inlineFormat(p.replace(/^\[FINAL\]\s*/,''))}</p>`;
   if(/^[.\s…]+$/.test(p)) return '<p class="silence" aria-hidden="true">❦</p>';
   if(/^\*\*.+\*\*$/.test(p)) return `<p class="spotlight">${inlineFormat(p)}</p>`;
   return `<p>${inlineFormat(p)}</p>`;
 }
 const prose = (text) => text.split(/\n\s*\n/).map(paragraph).join('');
 // Actual image ratios: no brutal square crop for portrait or cinematic compositions.
 const ratios = {1:[2048,1446],2:[2047,1401],3:[1744,1361],4:[2048,1311],5:[2048,1446],6:[2048,1446],7:[1906,2048],8:[2048,782],9:[2048,782],10:[1661,1051],11:[1661,1051],12:[2048,1170],13:[1447,2047],14:[1300,2048],15:[1373,1800],16:[1720,1217],17:[1157,1637],18:[1280,712],19:[1414,1000]};
 function chapterMarkup(c, index){
   const n=c.images[0], ratio=(ratios[n]||[3,2]);
   const aspect=ratio[0]/ratio[1];
   const format=aspect>=2.05?'cinemascope':aspect<.85?'portrait':aspect<1.12?'near-square':'landscape';
   const art = `<div class="art-backdrop" style="background-image:url('${artBackdropImg(c)}')" aria-hidden="true"></div><img class="art-image-main" src="${img(n)}" alt="${esc(c.title)}" loading="lazy">${c.images[1] ? `<img class="image-second" src="${img(c.images[1])}" alt="" loading="lazy">` : ''}<div class="art-grain" aria-hidden="true"></div><div class="art-orbit" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div><span class="art-corner tl" aria-hidden="true"></span><span class="art-corner br" aria-hidden="true"></span>`;
   const prev = index>0 ? `<a href="#${story[index-1].id}">← ${esc(story[index-1].title)}</a>` : '<span></span>';
   const next = index<story.length-1 ? `<a href="#${story[index+1].id}">${esc(story[index+1].title)} →</a>` : '<a href="#fiche">Voir la fiche →</a>';
   return `<section class="chapter kind-${esc(c.kind)} art-${format}" id="${esc(c.id)}" data-track="${c.track}" data-index="${index}">
     <div class="chapter-bg" style="background-image:url('${chapterBgImg(c)}')" aria-hidden="true"></div>
     <div class="chapter-inner"><div class="chapter-head">
       <div class="chapter-heading reveal"><span class="chapter-roman">${esc(c.roman)}</span><span class="chapter-date">${esc(c.period)}</span><h3 class="chapter-title">${esc(c.title)}</h3><p class="chapter-subtitle">${esc(c.subtitle)}</p></div>
       <figure class="chapter-art ${c.transition || ''} reveal" style="--art-aspect:${ratio[0]} / ${ratio[1]}">${art}</figure>
       </div><div class="story-prose">${prose(c.body)}</div>
       <div class="chapter-footer">${prev}<span class="chapter-annotation" aria-hidden="true">❦</span>${next}</div>
     </div></section>`;
 }
 $('#chapters').innerHTML = story.map(chapterMarkup).join('');

 // Cinematic parallax follows the pointer only on fine-pointer devices.
 const pointerFine = matchMedia('(hover:hover) and (pointer:fine)');
 $$('.chapter-art').forEach(art=>{
   if(!pointerFine.matches)return;
   art.addEventListener('pointermove',ev=>{
     const b=art.getBoundingClientRect(); const x=((ev.clientX-b.left)/b.width-.5);const y=((ev.clientY-b.top)/b.height-.5);
     art.style.setProperty('--tilt-x',`${(-y*3.0).toFixed(2)}deg`);
     art.style.setProperty('--tilt-y',`${(x*3.0).toFixed(2)}deg`);
     art.style.setProperty('--shine-x',`${(x+.5)*100}%`);
     art.style.setProperty('--shine-y',`${(y+.5)*100}%`);
   });
   art.addEventListener('pointerleave',()=>{art.style.setProperty('--tilt-x','0deg');art.style.setProperty('--tilt-y','0deg');art.style.setProperty('--shine-x','50%');art.style.setProperty('--shine-y','50%');});
 });

 const abilities = [
  {
    name:'Les Éclaireuses', sub:'Reconnaissance', slots:'1 emplacement · jusqu’à 3 éclaireuses', prep:1,
    text:'Hinoenma fait naître jusqu’à trois petites fleurs de chair de 10 à 15 cm. Elles rampent, grimpent aux surfaces et se glissent dans les passages étroits pour observer sans attirer l’attention. De retour auprès de leur mère, elles lui indiquent une direction, un nombre ou un danger par des gestes de pétales et de petits claquements qu’elle a appris à reconnaître.',
    impact:'Leur intérêt est d’aller là où Hinoenma ne peut pas regarder elle-même. Elles rapportent ce qu’elles ont réellement vu ou entendu, à condition de revenir jusqu’à elle.',
    counter:'Leur discrétion tient surtout à leur petite taille. Une personne attentive peut les remarquer ou les suivre ; elles sont faciles à écraser ou à trancher, et une éclaireuse détruite emporte ses observations avec elle.'
  },
  {
    name:'Les Petites Mains', sub:'Interception', slots:'1 emplacement · une poupée agile', prep:1,
    text:'Cette poupée de 50 cm court, bondit sur les obstacles et se jette au contact. Elle cherche une cheville au moment d’une esquive, un poignet pendant une frappe ou le bras qui tient le sabre. Ses griffes peuvent aussi entailler une cible trop occupée à surveiller Hinoenma.',
    impact:'Sur un mouvement bref, elle peut rivaliser avec la vivacité de sa mère. Une prise réussie perturbe le geste visé et suit le barème d’entrave ; lorsque cette durée s’achève, la poupée reste présente et doit tenter une nouvelle saisie si elle veut retenir la cible à nouveau.',
    counter:'Elle frappe vite mais ne serre pas aussi fort qu’une grande invocation. Un mouvement précis peut lui arracher sa prise ou la repousser ; sa petite carcasse résiste mal à une coupe de Nichirin.'
  },
  {
    name:'Les Deux Sœurs', sub:'Encerclement et harcèlement', slots:'2 emplacements · deux silhouettes', prep:1,
    text:'Deux silhouettes fines de 1,20 m se déplacent à grande vitesse autour de leur cible. L’une attire le regard avec une feinte ou une griffure pendant que l’autre attaque par un angle découvert, puis elles échangent leurs rôles. Hinoenma peut entrer dans cette danse et rendre le combat particulièrement étouffant.',
    impact:'Leur mobilité peut approcher celle d’Hinoenma, et leurs attaques croisées permettent de blesser autant que de préparer une prise. Elles restent toutefois beaucoup moins puissantes en force brute : si l’une attrape son adversaire, le maintien suit le barème commun.',
    counter:'Elles doivent approcher avec leur véritable corps. Un large mouvement de katana peut atteindre les deux si leurs trajectoires se croisent ; séparer le duo ou placer une frappe nette de Nichirin sur l’une d’elles brise leur avantage de coordination.'
  },
  {
    name:'Le Berceau d’Épines', sub:'Entrave', slots:'2 emplacements · une créature volumineuse', prep:2,
    text:'Une poupée de deux mètres avance lentement, les bras ouverts comme une mère prête à enlacer son enfant. Ses membres ramifiés se referment sur une proie déjà ralentie pour la serrer contre son torse. Les excroissances peuvent égratigner dans la lutte, mais le véritable danger vient de la force de cette étreinte.',
    impact:'Sa puissance de serrage peut égaler celle d’Hinoenma. Quand la prise tient, sa mère peut approcher ou faire venir le Cortège du Retour. L’étreinte ne dure toutefois que le temps permis par le barème : au terme de l’effet, le captif retrouve une ouverture pour se dégager, même si le Berceau n’a pas été détruit.',
    counter:'Ses longs bras ont de la force, pas la vitesse des petites poupées. Une esquive avant la fermeture, une coupe de Nichirin sur les bras ou le torse, une force suffisante ou l’intervention d’un allié peuvent rompre l’étreinte.'
  },
  {
    name:'La Grande Sœur', sub:'Protection et riposte', slots:'2 emplacements · une gardienne massive', prep:2,
    text:'Haute d’environ 2,50 m, la Grande Sœur se place entre Hinoenma et le danger. Ses bras épais peuvent retenir un coup de sabre, protéger un captif pendant une retraite ou s’abattre sur un adversaire avec assez de violence pour briser sa garde.',
    impact:'C’est l’une des créations les plus solides de sa mère. De face, sa force et sa résistance peuvent égaler celles d’Hinoenma, voire les dépasser lorsqu’elle s’ancre pour encaisser une frappe. Elle peut ensuite riposter avec ses poings, mais sa masse l’empêche de réagir aussi vite qu’Hinoenma.',
    counter:'Elle protège remarquablement ce qui se trouve devant elle, beaucoup moins ses flancs. Une attaque menée depuis plusieurs angles, une technique puissante visant ses articulations ou des coups de Nichirin répétés peuvent ouvrir sa garde et finir par la détruire.'
  },
  {
    name:'Le Cortège du Retour', sub:'Extraction', slots:'2 emplacements · deux porteuses', prep:1,
    text:'Deux servantes de chair d’environ 1,60 m saisissent ensemble une personne déjà capturée et l’emportent à pied vers l’endroit choisi par Hinoenma. Leur force de portage est impressionnante : elles peuvent soutenir un captif qui se débat ou un objet lourd sans s’effondrer à chaque pas.',
    impact:'Leur mission est de déplacer une proie, pas de la rendre incapable de réagir. La prise qui la retient suit le barème d’entrave ; si elle prend fin en chemin, les porteuses doivent réussir à la rattraper pour poursuivre le transport.',
    counter:'Leurs bras sont occupés et leur marche ralentit avec la charge. Un captif libéré peut les frapper, un allié peut viser leurs membres porteurs, et un passage étroit ou une chute peut rompre le cortège.'
  },
  {
    name:'Les Pétales du Sacrifice', sub:'Protection ou offensive', slots:'1 emplacement · une créature sacrificielle', prep:1,
    text:'Une fleur de chair noire se tient près d’Hinoenma. À son signal, elle éclate en une nuée de pétales aux bords durcis comme des lames. Hinoenma peut les déployer devant elle pour recevoir le choc d’une attaque, ou les lancer dans un cône de deux à trois mètres pour lacérer celui qui s’approche trop.',
    impact:'C’est une réponse brutale et immédiate, aussi utile pour sauver sa mère d’un coup dangereux que pour punir une ouverture. Elle choisit l’un des deux usages au moment de l’éclatement ; la pluie de pétales ne frappe ou ne protège que durant cette action, puis ses fragments retombent, inertes.',
    counter:'L’écran peut être traversé par une frappe suffisamment puissante. À l’attaque, les pétales se dispersent à courte distance : prendre de côté la trajectoire ou couper les fragments avec une Nichirin réduit les blessures. Une fois ouverte, la fleur a sacrifié tout son corps.'
  },
  {
    name:'La Veillée Noire', sub:'Tenue de position et frappe', slots:'3 emplacements · une sentinelle fixe', prep:2,
    text:'Cette sentinelle de 2,70 m plante ses membres dans le sol et veille sur une issue, un couloir ou un captif. Ses bras peuvent atteindre quelqu’un à deux ou trois mètres : elle repousse les intrus d’un coup lourd ou leur barre le chemin en refermant ses membres devant eux.',
    impact:'Sur son poste, sa force de frappe et sa résistance peuvent rivaliser avec celles d’Hinoenma. Elle peut contenir un assaut frontal et punir un adversaire qui force le passage, mais la puissance qu’elle gagne en s’ancrant lui coûte presque toute sa mobilité.',
    counter:'Elle surveille une zone, pas tout le terrain. La contourner, l’attaquer hors de portée, trancher ses membres plantés dans le sol ou atteindre le centre de son corps avec une technique puissante permet de l’affaiblir ou de la détruire.'
  },
  {
    name:'L’Adoption Forcée', sub:'Ultime manœuvre de capture', slots:'4 emplacements · quatre enfants d’élite', prep:2,
    text:'Hinoenma donne naissance à ses quatre plus belles et plus puissantes poupées. Leurs visages, leurs longs cheveux et leurs gestes rappellent si fidèlement leur mère qu’on croirait voir quatre reflets d’elle-même. Elles encerclent la proie avec grâce : deux ferment les voies de fuite et harcèlent au corps à corps, tandis que les deux autres cherchent le moment de saisir ses bras ou ses jambes. À la moindre ouverture, les quatre referment ensemble leur étreinte pour l’amener à Hinoenma.',
    impact:'Ce sont ses créations les plus abouties et les plus équilibrées. Chacune possède une force, une vitesse et une résistance qui se rapprochent dangereusement de celles d’Hinoenma, là où ses autres enfants excellent surtout dans une caractéristique. Ensemble, elles peuvent attaquer de plusieurs côtés, échanger leurs rôles et livrer un combat extrêmement oppressant. L’invocation occupe les quatre emplacements ; toute prise réussie suit le barème général d’entrave.',
    counter:'Ces poupées sont de véritables corps de chair : une lame Nichirin peut les blesser ou les détruire. Un adversaire capable de rompre leur cercle, de les séparer ou d’en abattre une peut perturber leur attaque concertée. Leur puissance vient aussi de leur coordination ; elles ne bénéficient pas de l’expérience personnelle de leur mère.'
  }
 ];
 const eliteArt = `<div class="elite-portraits" aria-label="Apparence des poupées de l’Adoption Forcée">
   <figure><img src="${fileVersion('assets/images/09-1.jpg')}" alt="Poupée ultime aux longs cheveux clairs et fleurs violettes" loading="lazy" decoding="async"></figure>
   <figure><img src="${fileVersion('assets/images/09-2.jpg')}" alt="Poupée ultime à la chevelure noire et cornes ramifiées" loading="lazy" decoding="async"></figure>
 </div>`;
 $('#powers-grid').innerHTML = abilities.map((a,i)=>`<article class="power-card${i===8?' power-card-elite':''}"><div class="power-number">${String(i+1).padStart(2,'0')}</div><span class="power-class">${esc(a.sub)}</span><h3>${esc(a.name)}</h3><p class="summon-time">⏳ Invocation : <b>${a.prep} ${a.prep===1?'tour':'tours'}</b> </p><p>${esc(a.text)}</p>${i===8?eliteArt:''}<div class="power-impact"><b>En combat :</b> ${esc(a.impact)}</div><div class="power-counter"><b>${esc(a.slots)}</b><br><b>Pour lui faire face :</b> ${esc(a.counter)}</div></article>`).join('');
 const phases = [
  ['Repérer','Les Éclaireuses observent les chemins, puis reviennent indiquer à leur mère la direction et les dangers rencontrés. Elles peuvent être repérées ou détruites avant leur retour.'],
  ['Couper les issues','Les Deux Sœurs tournent autour de la cible, griffent et feintent pour lui fermer progressivement les issues. Un large mouvement de katana peut briser leur formation.'],
  ['Tenter l’étreinte','Le Berceau d’Épines cherche une prise physique sur une cible déjà affaiblie. Le maintien est limité par le barème d’entrave et peut être brisé.'],
  ['Emporter','Le Cortège du Retour transporte un captif saisi au préalable : il reste visible, lent et attaquable. La contention ne dépasse pas le barème général.'],
  ['Protéger la retraite','La Grande Sœur peut intercepter une frappe ou riposter au contact, sans parer toutes les attaques. La réussite de l’extraction dépend de la scène RP.']
 ];
 let phase=0;
 function renderPhase(){ $('#gameplay-num').textContent=`${String(phase+1).padStart(2,'0')} / 05`;$('#gameplay-step-title').textContent=phases[phase][0];$('#gameplay-step-body').textContent=phases[phase][1];$('#gameplay-prev').disabled=phase===0;$('#gameplay-next').textContent=phase===4?'Recommencer ↻':'Étape suivante →'; }
 $('#gameplay-prev').addEventListener('click',()=>{phase=Math.max(0,phase-1);renderPhase()});
 $('#gameplay-next').addEventListener('click',()=>{phase=(phase+1)%phases.length;renderPhase()});renderPhase();
 const friteReactions = [
   '🌸 FRITE REPÉRÉE ! Les fleurs s’ouvrent, la porte se ferme… et Hinoenma sourit beaucoup trop.',
   '💌 INVITATION ACCEPTÉE (selon Hinoenma). Le billet de retour est curieusement introuvable. ♡',
   '📦 LIVRAISON EN COURS : le sac en velours gigote. Quelqu’un à l’intérieur exige des explications.',
   '🩸 FRITE S’EST ÉCHAPPÉE ! « Oh ? Alors c’est une partie de cache-cache… Comme c’est adorable. ♡ »',
   '🌙 MESSAGE PRIVÉ : « Frite, mon cœur… La prochaine fois, je fermerai les fenêtres aussi. ♡ »'
 ];
 let friteStep = 0;
 $('#frite-button').addEventListener('click', () => {
   const panel = $('.frite-protocol');
   $('#frite-output').textContent = friteReactions[friteStep++ % friteReactions.length];
   panel.classList.remove('frite-activated');
   void panel.offsetWidth;
   panel.classList.add('frite-activated');
 });

 const captions = {1:'Deux êtres, une obsession',2:'Je te veux',3:'Je vous veux, TOUS !',4:'Mon seigneur ?',5:'Une lumière nouvelle',6:'La naissance de la famille',7:'L’éternité entre les mains',8:'L’éclat d’une âme',9:'L’ombre sous la pluie',10:'Je t’ai retrouvée',11:'Tu ne m’échapperas plus',12:'Deux siècles à conquérir la nuit',13:'Chaînes et souvenirs',14:'La beauté monstrueuse',15:'Automne — Hino',16:'Le sacrifice — Hino',17:'L’insouciance — Hino',18:'La révélation — Muzan',19:'Le seigneur Saionji Takamasa'};
 $('#gallery-grid').innerHTML=Array.from({length:19},(_,index)=>{const i=index+1;return `<figure class="gallery-card" role="button" tabindex="0" data-img="${i}" aria-label="Voir : ${esc(captions[i])}"><img loading="lazy" src="${img(i)}" alt="${esc(captions[i])}"><figcaption><span>${esc(captions[i])}</span></figcaption></figure>`}).join('');
 const lightbox=$('#lightbox');let galleryIndex=1;
 function openLightbox(i){galleryIndex=((i-1+19)%19)+1;$('#lightbox-image').src=img(galleryIndex);$('#lightbox-image').alt=`Souvenir : ${captions[galleryIndex]}`;$('#lightbox-caption').textContent=`${captions[galleryIndex]}`;lightbox.hidden=false;document.body.style.overflow='hidden';$('#lightbox-close').focus();}
 function closeLightbox(){lightbox.hidden=true;document.body.style.overflow='';}
 $$('.gallery-card').forEach(card=>{card.addEventListener('click',()=>openLightbox(+card.dataset.img));card.addEventListener('keydown',ev=>{if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();openLightbox(+card.dataset.img)}})});
 $('#lightbox-close').addEventListener('click',closeLightbox);$('#lightbox-prev').addEventListener('click',()=>openLightbox(galleryIndex-1));$('#lightbox-next').addEventListener('click',()=>openLightbox(galleryIndex+1));lightbox.addEventListener('click',event=>{if(event.target===lightbox)closeLightbox()});
 document.addEventListener('keydown',ev=>{if(lightbox.hidden)return;if(ev.key==='Escape')closeLightbox();if(ev.key==='ArrowLeft')openLightbox(galleryIndex-1);if(ev.key==='ArrowRight')openLightbox(galleryIndex+1)});

 /* Player : une piste persiste entre les scènes similaires. Fondu réel entre deux <audio>. */
 let activeKey='hino', activeAudio=null, fadingFrom=null, playing=false, unlocked=false, desiredVol=.52, fadeTimer=null;
 const state=$('#player-state'),toggle=$('#player-toggle'),vinyl=$('.player-vinyl');
 function currentTrackLabel(){const data=audios[activeKey];$('#player-context').textContent=data.context;$('#player-name').textContent=data.name;}
 function playerUI(){currentTrackLabel();toggle.textContent=playing?'❚❚':'▶';toggle.setAttribute('aria-label',playing?'Mettre en pause':'Lancer la musique');vinyl.classList.toggle('spinning',playing);if(!playing)state.textContent='Musique en pause · Cliquez sur lecture';}
 const safePause = a=>{if(a){try{a.pause()}catch(_){}}};
 const safePlay = a => a.play().catch(()=>{playing=false;playerUI();state.textContent='Lecture bloquée : utilisez le bouton ▶';});
 function fadeTo(key){
   if(!audios[key]) return;
   if(key===activeKey && activeAudio) {currentTrackLabel();return;}
   activeKey=key;currentTrackLabel();
   if(!unlocked || !playing){if(activeAudio){safePause(activeAudio);activeAudio=null}playerUI();return;}
   if(fadeTimer){clearInterval(fadeTimer);fadeTimer=null}
   if(fadingFrom){safePause(fadingFrom);fadingFrom=null}
   const old=activeAudio;fadingFrom=old;const fresh=new Audio(fileVersion(audios[key].url));fresh.loop=true;fresh.preload='auto';fresh.volume=0;activeAudio=fresh;
   safePlay(fresh);
   let start=performance.now();let duration=1500;
   fadeTimer=setInterval(()=>{const k=Math.min(1,(performance.now()-start)/duration);try{fresh.volume=Math.max(0,Math.min(1,k*desiredVol));if(old)old.volume=Math.max(0,Math.min(1,(1-k)*desiredVol));}catch(_){}if(k>=1){clearInterval(fadeTimer);fadeTimer=null;safePause(old);if(fadingFrom===old)fadingFrom=null;}},35);
   state.textContent='Transition cinématographique entre les thèmes';
 }
 function play(){unlocked=true;playing=true;if(!activeAudio){activeAudio=new Audio(fileVersion(audios[activeKey].url));activeAudio.loop=true;activeAudio.preload='auto';activeAudio.volume=desiredVol;}safePlay(activeAudio);playerUI();state.textContent='Lecture continue · Thème lié aux scènes';}
 function pause(){playing=false;safePause(activeAudio);if(fadingFrom){safePause(fadingFrom);fadingFrom=null;}if(fadeTimer){clearInterval(fadeTimer);fadeTimer=null}playerUI();}
 toggle.addEventListener('click',()=>playing?pause():play());
 const useTrack = (key,manual=false)=>{if(manual)$('#auto-scenes').checked=false;fadeTo(key)};
 $('#player-prev').addEventListener('click',()=>useTrack(audioKeys[(audioKeys.indexOf(activeKey)+audioKeys.length-1)%audioKeys.length],true));
 $('#player-next').addEventListener('click',()=>useTrack(audioKeys[(audioKeys.indexOf(activeKey)+1)%audioKeys.length],true));
 $('#player-volume').addEventListener('input',event=>{desiredVol=(+event.target.value)/100;if(activeAudio)activeAudio.volume=desiredVol;});
 $('#player-expand').addEventListener('click',()=>{$('#player-playlist').hidden=!$('#player-playlist').hidden});
 $$('[data-track]', $('#player-playlist')).forEach(b=>b.addEventListener('click',()=>{useTrack(b.dataset.track,true);$('#player-playlist').hidden=true;if(!playing)play()}));
 $('#auto-scenes').addEventListener('change',event=>{if(event.target.checked)updateScene()});
 $('#start-story').addEventListener('click',()=>{if(!playing)play()});
 playerUI();

 let nearestIndex=0, ticking=false;
 function updateScene(){
   const center=innerHeight*.42;let closest=Infinity;let index=0;
   $$('.chapter').forEach((el,i)=>{const r=el.getBoundingClientRect();const dist=r.top>center?r.top-center:(r.bottom<center?center-r.bottom:0);if(dist<closest){closest=dist;index=i;}});
   const storyBounds=$('#histoire').getBoundingClientRect();if(storyBounds.top>innerHeight*.85){index=0;}
   if(index!==nearestIndex || !playing){nearestIndex=index;$('#scene-counter').textContent=story[index].title;}
   if($('#auto-scenes').checked && storyBounds.top<innerHeight*.8 && storyBounds.bottom>innerHeight*.05){fadeTo(story[index].track);}
   const height=document.documentElement.scrollHeight-innerHeight;
   $('#page-progress').style.width=height>0?`${Math.min(100,scrollY/height*100)}%`:'0%';
   $('#topbar').classList.toggle('scrolled',scrollY>40);
 }
 addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(()=>{updateScene();ticking=false});ticking=true}},{passive:true});
 addEventListener('resize',updateScene);
 setTimeout(updateScene,200);
 if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('is-visible')})},{rootMargin:'0px 0px -70px 0px',threshold:0.03});$$('.reveal').forEach(el=>io.observe(el));}else{$$('.reveal').forEach(el=>el.classList.add('is-visible'))}
 $('#toggle-motion').addEventListener('click',()=>{document.body.classList.toggle('motion-off');$('#toggle-motion').textContent=document.body.classList.contains('motion-off')?'Réactiver les effets':'Réduire les effets';});
 $('#toggle-reading-width').addEventListener('click',()=>{const wide=$('.story-prose').classList.contains('read-wide');$$('.story-prose').forEach(el=>el.classList.toggle('read-wide',!wide));$('#toggle-reading-width').textContent=wide?'Élargir le texte ↔':'Largeur normale ↔';});
 $('#menu-toggle').addEventListener('click',()=>{const nav=$('.main-nav');const open=nav.classList.toggle('open');$('#menu-toggle').setAttribute('aria-expanded',String(open));});
 $$('.main-nav a').forEach(a=>a.addEventListener('click',()=>{$('.main-nav').classList.remove('open');$('#menu-toggle').setAttribute('aria-expanded','false')}));
})();
