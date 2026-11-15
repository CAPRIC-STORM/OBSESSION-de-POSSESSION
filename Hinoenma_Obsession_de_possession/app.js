/* Hinoenma — Site intégralement local, sans bibliothèque ni requête réseau. */
(() => {
 'use strict';
 const $ = (selector, root=document) => root.querySelector(selector);
 const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
 const img = (n) => `assets/images/${String(n).padStart(2,'0')}.webp`;
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
 const ratios = {1:[2048,1446],2:[2047,1401],3:[1744,1361],4:[2048,1311],5:[2048,1446],6:[2048,1446],7:[1906,2048],8:[2048,782],9:[2048,782],10:[1661,1051],11:[1661,1051],12:[2048,1170],13:[1447,2047],14:[1300,2048],15:[1373,1800],16:[1720,1217],17:[1157,1637],18:[2048,1434],19:[1414,1000]};
 function chapterMarkup(c, index){
   const n=c.images[0], ratio=(ratios[n]||[3,2]);
   const aspect=ratio[0]/ratio[1];
   const format=aspect>=2.05?'cinemascope':aspect<.85?'portrait':aspect<1.12?'near-square':'landscape';
   const art = `<div class="art-backdrop" style="background-image:url('${img(n)}')" aria-hidden="true"></div><img class="art-image-main" src="${img(n)}" alt="${esc(c.title)}" loading="lazy">${c.images[1] ? `<img class="image-second" src="${img(c.images[1])}" alt="" loading="lazy">` : ''}<div class="art-grain" aria-hidden="true"></div><div class="art-orbit" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div><span class="art-corner tl" aria-hidden="true"></span><span class="art-corner br" aria-hidden="true"></span>`;
   const prev = index>0 ? `<a href="#${story[index-1].id}">← ${esc(story[index-1].title)}</a>` : '<span></span>';
   const next = index<story.length-1 ? `<a href="#${story[index+1].id}">${esc(story[index+1].title)} →</a>` : '<a href="#fiche">Voir la fiche →</a>';
   return `<section class="chapter kind-${esc(c.kind)} art-${format}" id="${esc(c.id)}" data-track="${c.track}" data-index="${index}">
     <div class="chapter-bg" style="background-image:url('${img(n)}')" aria-hidden="true"></div>
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
  {name:'Les Éclaireuses',sub:'Reconnaissance',slots:'1 emplacement · petites créatures',text:'De petits êtres de chair en forme de fleurs rampantes s’échappent de ses mains. Ils épient les chemins, repèrent les passages et reviennent lui transmettre ce qu’ils ont physiquement vu ou entendu.',counter:'Aucune vision magique, aucun pistage infaillible : ils peuvent être surpris, écrasés ou repérés.'},
  {name:'Les Petites Mains',sub:'Interception',slots:'1 emplacement · une créature agile',text:'Une poupée de chair se jette sur un poignet, une cheville ou une arme pour gêner un mouvement. Sa tâche est d’ouvrir une occasion de saisie, pas de paralyser automatiquement.',counter:'Force et précision limitées : l’adversaire peut esquiver, arracher l’emprise ou trancher le serviteur.'},
  {name:'Les Deux Sœurs',sub:'Encerclement',slots:'2 emplacements · deux créatures',text:'Deux silhouettes filiformes se déplacent en tandem pour pousser la proie à reculer vers un passage défavorable. Elles alternent feintes corporelles et tentatives de prise.',counter:'Elles doivent courir et se positionner réellement. Une attaque de zone ou un terrain ouvert gêne leur coopération.'},
  {name:'Le Berceau d’Épines',sub:'Entrave',slots:'2 emplacements · une créature volumineuse',text:'Une poupée à bras ramifiés tente d’envelopper une personne dans une étreinte de chair et de ronces organiques. Le « berceau » sert à maintenir une cible déjà affaiblie.',counter:'La capture exige un contact contestable. Des Nichirin peuvent couper les bras ; la créature est lente et vulnérable aux attaques ciblées.'},
  {name:'La Grande Sœur',sub:'Protection',slots:'2 emplacements · gardienne robuste',text:'Une protectrice plus massive apparaît près d’Hinoenma pour intercepter une attaque physique et couvrir sa retraite avec un captif.',counter:'Elle n’encaisse pas indéfiniment. Sa masse la rend lente ; l’invoquer empêche de mobiliser plusieurs autres enfants.'},
  {name:'Le Cortège du Retour',sub:'Extraction',slots:'2 emplacements · deux porteuses',text:'Deux servantes de chair transportent ensemble un captif ou un objet encombrant. Leur rôle est de franchir une courte distance pendant que la mère protège la retraite.',counter:'Aucune téléportation ni vol : transport ralenti, trajectoire visible, poursuite et interruption possibles.'},
  {name:'Les Pétales du Sacrifice',sub:'Diversion physique',slots:'1 emplacement · une créature sacrificielle',text:'Une créature se déchire volontairement en fragments de chair noire et de pétales pour gêner brièvement une trajectoire ou amortir une frappe. Les fragments perdent rapidement toute mobilité.',counter:'Pas d’illusion, de poison ni d’attaque explosive ; un usage ponctuel qui consume entièrement l’invocation.'},
  {name:'La Veillée Noire',sub:'Tenue de position',slots:'3 emplacements · sentinelle fixe',text:'Une grande silhouette à membres ancrés s’installe devant une issue pour la défendre pendant qu’une autre création conduit la proie vers l’extérieur.',counter:'Installation lente, déplacements difficiles et contournement possible. Elle est incapable de modifier la structure du bâtiment.'},
  {name:'L’Adoption Forcée',sub:'Ultime tentative de capture',slots:'4 emplacements · déploiement maximal',text:'Quatre enfants de chair se coordonnent dans une unique manœuvre d’encerclement et de saisie. La mère vise une capture, pas une mise à mort. La manœuvre exige une préparation et une cible atteignable.',counter:'Très coûteux en chair et en concentration : aucune autre invocation en parallèle, interruption possible, aucun résultat imposé.'}
 ];
 $('#powers-grid').innerHTML = abilities.map((a,i)=>`<article class="power-card"><div class="power-number">${String(i+1).padStart(2,'0')}</div><span class="power-class">${esc(a.sub)}</span><h3>${esc(a.name)}</h3><p>${esc(a.text)}</p><div class="power-counter"><b>${esc(a.slots)}</b><br><b>Contre-jeu :</b> ${esc(a.counter)}</div></article>`).join('');
 const phases = [
  ['Repérer','Les Éclaireuses reconnaissent les chemins et transmettent seulement ce qu’elles observent réellement. Un pourfendeur vigilant peut les détruire.'],
  ['Couper les issues','Les Deux Sœurs prennent position pour réduire les chemins de fuite. Rien n’empêche l’adversaire de forcer un passage ou de surprendre Hinoenma.'],
  ['Tenter l’étreinte','Le Berceau d’Épines essaye de saisir une cible. Le joueur adverse garde le droit de réagir, de rompre la prise ou de couper l’invocation.'],
  ['Emporter','Le Cortège du Retour tente une extraction physique. Le groupe est visible, vulnérable, et sa progression ralentit avec le poids du captif.'],
  ['Protéger la retraite','La Grande Sœur peut intercepter une frappe, mais ses limites et le nombre total de créations empêchent de tout faire à la fois. La réussite dépend de la scène RP.']
 ];
 let phase=0;
 function renderPhase(){ $('#gameplay-num').textContent=`${String(phase+1).padStart(2,'0')} / 05`;$('#gameplay-step-title').textContent=phases[phase][0];$('#gameplay-step-body').textContent=phases[phase][1];$('#gameplay-prev').disabled=phase===0;$('#gameplay-next').textContent=phase===4?'Recommencer ↻':'Étape suivante →'; }
 $('#gameplay-prev').addEventListener('click',()=>{phase=Math.max(0,phase-1);renderPhase()});
 $('#gameplay-next').addEventListener('click',()=>{phase=(phase+1)%phases.length;renderPhase()});renderPhase();
 let jokes=['📦 Livraison confirmée : Frite a refusé de signer le bon de réception.','🩸 Hinoenma : « Ce n’est pas un enlèvement, c’est une adoption surprise ! »','🚨 Alerte staff : tentative de kidnapping de Frite détectée. Validation refusée par les lois de la physique RP.','🌸 Frite a fui. Les poupées ont rapporté une frite en carton. Hinoenma est inconsolable.'];let j=0;
 $('#frite-button').addEventListener('click',()=>{$('#frite-output').textContent=jokes[j++%jokes.length]});

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
   const old=activeAudio;fadingFrom=old;const fresh=new Audio(audios[key].url);fresh.loop=true;fresh.preload='auto';fresh.volume=0;activeAudio=fresh;
   safePlay(fresh);
   let start=performance.now();let duration=1500;
   fadeTimer=setInterval(()=>{const k=Math.min(1,(performance.now()-start)/duration);try{fresh.volume=Math.max(0,Math.min(1,k*desiredVol));if(old)old.volume=Math.max(0,Math.min(1,(1-k)*desiredVol));}catch(_){}if(k>=1){clearInterval(fadeTimer);fadeTimer=null;safePause(old);if(fadingFrom===old)fadingFrom=null;}},35);
   state.textContent='Transition cinématographique entre les thèmes';
 }
 function play(){unlocked=true;playing=true;if(!activeAudio){activeAudio=new Audio(audios[activeKey].url);activeAudio.loop=true;activeAudio.preload='auto';activeAudio.volume=desiredVol;}safePlay(activeAudio);playerUI();state.textContent='Lecture continue · Thème lié aux scènes';}
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
