// The site plays 45-second PREVIEWS only. Full tracks are delivered on the paid download pages.
var M='https://amp-acc-f3a9e2da18fe-xmas-world-social-f7043d43.cdn.ample.computer/previews/';
var TRACKS=[
{album:"Xmas Hits",title:"80s Christmas Chart-Topper",file:M+'001.mp3'},
{album:"Xmas Hits",title:"Christmas Dance Around the World",file:M+'002.mp3'},
{album:"Xmas Hits",title:"Unforgettable Christmas",file:M+'004.mp3'},
{album:"Xmas Hits",title:"Bollywood Afro-House Christmas",file:M+'008.mp3'},
{album:"Xmas Hits",title:"Christmas (Dance Mix)",file:M+'010.mp3'},
{album:"Xmas Hits",title:"UK Jungle Christmas Anthem",file:M+'011.mp3'},
{album:"Xmas Hits",title:"80s Charity Christmas Anthem",file:M+'015.mp3'},
{album:"Xmas Hits",title:"Christmas Pop Anthem",file:M+'019.mp3'},
{album:"Xmas Hits",title:"Bollywood Christmas Dance",file:M+'021.mp3'},
{album:"Xmas Hits",title:"Christmas (Club Mix)",file:M+'022.mp3'},
{album:"Xmas Hits",title:"Bollywood Christmas Pop",file:M+'023.mp3'},
{album:"Xmas Hits",title:"Magical Christmas Pop",file:M+'026.mp3'},
{album:"Xmas Hits",title:"Bollywood House Christmas",file:M+'027.mp3'},
{album:"Xmas Hits",title:"Gujarati Garba Christmas",file:M+'028.mp3'},
{album:"Xmas Hits",title:"Euphoric Christmas Dance Anthem",file:M+'029.mp3'},
{album:"Xmas Hits",title:"Christmas 2026 Party",file:M+'038.mp3'},
{album:"Xmas Hits",title:"Christmas Around the World",file:M+'039.mp3'},
{album:"Xmas Hits",title:"Christmas Bells Carol",file:M+'040.mp3'},
{album:"Xmas Hits",title:"Christmas Glow",file:M+'041.mp3'},
{album:"Xmas Hits",title:"Christmas Glow (Alt Mix)",file:M+'042.mp3'},
{album:"Ibiza Anthems for Xmas",title:"Afro-Latin House",file:M+'003.mp3'},
{album:"Ibiza Anthems for Xmas",title:"Melodic Afro-House",file:M+'007.mp3'},
{album:"Ibiza Anthems for Xmas",title:"Smooth Afro-Latin Nights",file:M+'013.mp3'},
{album:"Ibiza Anthems for Xmas",title:"Ibiza Midnight Trance",file:M+'014.mp3'},
{album:"Ibiza Anthems for Xmas",title:"Afro-Arabic Latin House",file:M+'018.mp3'},
{album:"Ibiza Anthems for Xmas",title:"Latin Afro-House Nights I",file:M+'020.mp3'},
{album:"Ibiza Anthems for Xmas",title:"Latin Tech House",file:M+'025.mp3'},
{album:"Ibiza Anthems for Xmas",title:"Latin Afro-House Nights II",file:M+'031.mp3'},
{album:"Ibiza Anthems for Xmas",title:"Ibiza Sunset",file:M+'032.mp3'},
{album:"Ibiza Anthems for Xmas",title:"Latin Afro-House Nights III",file:M+'034.mp3'},
{album:"Ibiza Anthems for Xmas",title:"Latin Afro-House Nights IV",file:M+'037.mp3'},
{album:"Non-Xmas Hits",title:"International Dance Anthem",file:M+'005.mp3'},
{album:"Non-Xmas Hits",title:"Feel-Good Reggae-Pop",file:M+'006.mp3'},
{album:"Non-Xmas Hits",title:"Bhangra Latin Fusion",file:M+'016.mp3'},
{album:"Non-Xmas Hits",title:"Poker Night Country",file:M+'017.mp3'},
{album:"Non-Xmas Hits",title:"Bollywood Love Song",file:M+'024.mp3'},
{album:"Non-Xmas Hits",title:"90s Ragga Jungle",file:M+'030.mp3'},
{album:"Non-Xmas Hits",title:"Stadium Rock Anthem",file:M+'033.mp3'},
{album:"Non-Xmas Hits",title:"Romantic Dance-Pop",file:M+'035.mp3'},
{album:"Non-Xmas Hits",title:"60s Bollywood Ballad",file:M+'036.mp3'},
{album:"Party Around the World",title:"Island Drums Riddim",file:M+'043.mp3'},
{album:"Party Around the World",title:"Jamaica Bassline",file:M+'044.mp3'},
{album:"Party Around the World",title:"World Drums Party",file:M+'045.mp3'},
{album:"Party Around the World",title:"Global Beat",file:M+'046.mp3'},
{album:"Party Around the World",title:"Fiesta Latina",file:M+'047.mp3'},
{album:"Party Around the World",title:"Ibiza Sunrise",file:M+'048.mp3'},
{album:"Party Around the World",title:"Ibiza Nights",file:M+'049.mp3'}
];

// Site-wide music player: one audio element that lives outside the page content,
// so music keeps playing while visitors move between pages.
var XW=window.XW||(function(){var A=new Audio(),X={i:-1,a:A};A.preload='none';
var bar=document.createElement('div');bar.id='xwbar';bar.hidden=true;
bar.innerHTML='<button id="xwpp" aria-label="Play or pause">⏸</button><span id="xwt"></span><button id="xwnx" aria-label="Next song">⏭</button><button id="xwx" aria-label="Close player">✕</button>';
X.bar=bar;
X.play=function(i){if(i<0||i>=TRACKS.length)return;X.i=i;A.src=TRACKS[i].file;A.play().catch(function(){});X.ui();};
X.toggle=function(){if(A.paused)A.play().catch(function(){});else A.pause();};
X.ui=function(){var t=TRACKS[X.i],on=X.i>-1;bar.hidden=!on;if(on){bar.querySelector('#xwt').textContent='🎵 '+t.title+' (preview)';bar.querySelector('#xwpp').textContent=A.paused?'▶':'⏸';}
document.querySelectorAll('.track').forEach(function(c){c.classList.toggle('on',+c.dataset.i===X.i)});
var now=document.getElementById('now');if(now)now.textContent=on?(A.paused?'Paused: ':'Now playing: ')+t.title:'Pick a track';
var sb=document.getElementById('sotd');if(sb){var p=TRACKS[+sb.dataset.i];if(p)sb.innerHTML='🎵 Song of the day: <b>'+p.title+'</b> '+(X.i===+sb.dataset.i&&!A.paused?'⏸':'▶');}};
bar.querySelector('#xwpp').onclick=X.toggle;bar.querySelector('#xwnx').onclick=function(){X.play((X.i+1)%TRACKS.length)};
bar.querySelector('#xwx').onclick=function(){A.pause();A.removeAttribute('src');X.i=-1;X.ui();try{sessionStorage.xwoff=1}catch(e){}};
// Start a song on the landing page. Browsers block sound until the visitor interacts,
// so if autoplay is refused it starts on their first tap or key press instead.
X.autostart=function(i){try{if(sessionStorage.xwoff)return}catch(e){}if(X.i>-1)return;X.i=i;A.src=TRACKS[i].file;X.ui();
var ev=['touchend','click','keydown'];function g(e){if(e.target.closest&&e.target.closest('#sotd,#xwbar'))return;ev.forEach(function(n){document.removeEventListener(n,g,true)});if(A.paused&&X.i===i)A.play().catch(function(){});}
A.play().catch(function(){ev.forEach(function(n){document.addEventListener(n,g,true)})});};
A.onplay=A.onpause=X.ui;A.onended=function(){X.play((X.i+1)%TRACKS.length)};
A.addEventListener('play',function(){document.querySelectorAll('video,audio').forEach(function(m){m.pause()})});
document.addEventListener('play',function(e){document.querySelectorAll('video,audio').forEach(function(m){if(m!==e.target)m.pause();});if(e.target!==A)A.pause();},true);
// Load other pages in place (instead of a full reload) so the music doesn't stop
var cur=location.pathname;
function go(url,push){fetch(url).then(function(r){if(!r.ok)throw 0;return r.text()}).then(function(html){var d=new DOMParser().parseFromString(html,'text/html');
document.title=d.title;clearInterval(window.__cdT);clearInterval(window.__fwT);bar.remove();document.body.className=d.body.className;document.body.innerHTML=d.body.innerHTML;document.body.appendChild(bar);
if(push)history.pushState({xw:1},'',url);cur=location.pathname;var h=location.hash&&document.getElementById(location.hash.slice(1));if(h)h.scrollIntoView();else scrollTo(0,0);init();})
.catch(function(){location.href=url});}
document.addEventListener('click',function(e){if(X.i<0||e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;var a=e.target.closest&&e.target.closest('a[href]');
if(!a||a.target||a.hasAttribute('download'))return;var u=new URL(a.href,location.href);if(u.origin!==location.origin||!/(\.html|\/)$/.test(u.pathname))return;
if(u.pathname===location.pathname&&u.hash)return;e.preventDefault();go(u.href,true);});
addEventListener('popstate',function(){if(location.pathname!==cur)go(location.href,false);});
return X;})();
window.XW=XW;

function init(){
function pad(n){return n<10?'0'+n:''+n}
if(document.getElementById('cd-d')){(function(){function tick(){var now=new Date(),y=now.getFullYear(),xmas=new Date(y,11,25),label='until Christmas',x;
if(now<xmas){x=xmas}else{x=new Date(y+1,0,1);label='until New Year'}
var d=Math.max(0,x-now);
document.getElementById('cd-d').textContent=Math.floor(d/864e5);
document.getElementById('cd-h').textContent=pad(Math.floor(d/36e5)%24);
document.getElementById('cd-m').textContent=pad(Math.floor(d/6e4)%60);
document.getElementById('cd-s').textContent=pad(Math.floor(d/1e3)%60);
document.getElementById('cdlabel').textContent=label;}
tick();window.__cdT=setInterval(tick,1000);})();}
if(document.getElementById('tracks')){(function(){var g=document.getElementById('tracks'),a=document.getElementById('audio');
document.getElementById('soon').hidden=true;document.getElementById('player').hidden=false;if(a)a.remove();
var BUY={'Xmas Hits':['https://buy.stripe.com/14A4gz5Zw6Gg1mu6oJbMQ04','£2.99'],'Ibiza Anthems for Xmas':['https://buy.stripe.com/3cI6oHcnUfcM1muaEZbMQ02','£2.99'],'Non-Xmas Hits':['https://buy.stripe.com/dRm9AT5Zw9Ss7KSbJ3bMQ01','£2.00']};
var last='';TRACKS.forEach(function(t,i){if(t.album!==last){last=t.album;var h=document.createElement('h3');h.className='album';h.textContent=({'Xmas Hits':'🎄 ','Ibiza Anthems for Xmas':'🌴 ','Non-Xmas Hits':'🎉 ','Party Around the World':'🌍 NEW: '}[t.album]||'')+t.album;g.appendChild(h);var b=BUY[t.album];if(b){var k=document.createElement('a');k.className='btn btn-gold buy';k.href=b[0];k.target='_blank';k.rel='noopener';k.textContent='💳 Buy album – '+b[1];g.appendChild(k);}}var c=document.createElement('div');c.className='card track';c.dataset.i=i;c.innerHTML='<h3>▶ '+t.title+'</h3>';
c.onclick=function(){XW.play(i)};g.appendChild(c);});XW.ui();})();}
if(document.getElementById('sotd')){(function(){var day=Math.floor((Date.now()-new Date().getTimezoneOffset()*6e4)/864e5),m=new Date().getMonth(),xm=TRACKS.filter(function(t){return t.album==='Xmas Hits'}),pool=(m===11&&new Date().getDate()<=26)||m===10?xm:TRACKS,pick=pool[day%pool.length],pi=TRACKS.indexOf(pick),sb=document.getElementById('sotd');
sb.dataset.i=pi;sb.hidden=false;sb.onclick=function(){if(XW.i===pi)XW.toggle();else XW.play(pi);};XW.ui();XW.autostart(pi);})();}
var Q=function(x){return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(x)};
var STREETS=[
["Bond Street","London",[["Louis Vuitton","https://www.louisvuitton.com"],["Chanel","https://www.chanel.com"],["Dior","https://www.dior.com"],["Cartier","https://www.cartier.com"],["Tiffany & Co.","https://www.tiffany.co.uk"],["Hermès","https://www.hermes.com"],["Gucci","https://www.gucci.com"],["Prada","https://www.prada.com"],["Burberry","https://www.burberry.com"],["Sotheby's","https://www.sothebys.com"]]],
["Oxford Street","London",[["Selfridges","https://www.selfridges.com"],["John Lewis","https://www.johnlewis.com"],["Primark","https://www.primark.com"],["Nike","https://www.nike.com"],["Zara","https://www.zara.com"],["H&M","https://www.hm.com"],["Uniqlo","https://www.uniqlo.com"],["HMV","https://hmv.com"],["Boots","https://www.boots.com"]]],
["Regent Street","London",[["Hamleys","https://www.hamleys.com"],["Liberty","https://www.libertylondon.com"],["Apple","https://www.apple.com/uk/"],["Anthropologie","https://www.anthropologie.com"],["Arket","https://www.arket.com"]]],
["Fifth Avenue","New York",[["Saks Fifth Avenue","https://www.saksfifthavenue.com"],["Bergdorf Goodman","https://www.bergdorfgoodman.com"],["Tiffany & Co.","https://www.tiffany.com"],["Apple","https://www.apple.com"],["Louis Vuitton","https://us.louisvuitton.com"],["Cartier","https://www.cartier.com"],["Nike","https://www.nike.com"]]],
["Champs-Élysées","Paris",[["Louis Vuitton","https://www.louisvuitton.com"],["Ladurée","https://www.laduree.com"],["Guerlain","https://www.guerlain.com"],["Sephora","https://www.sephora.fr"],["Apple","https://www.apple.com/fr/"],["Nike","https://www.nike.com"]]],
["Ginza","Tokyo",[["Ginza Six","https://ginza6.tokyo"],["Mitsukoshi","https://mitsukoshi.mistore.jp"],["Matsuya","https://www.matsuya.com"],["Wako","https://www.wako.co.jp"],["Uniqlo","https://www.uniqlo.com"],["Itoya","https://www.ito-ya.co.jp"],["Apple","https://www.apple.com/jp/"],["Dover Street Market","https://ginza.doverstreetmarket.com"]]]
];
function streetPicker(barId,boxId,DATA){var bar=document.getElementById(barId),box=document.getElementById(boxId);
function show(i){var st=DATA[i];bar.querySelectorAll('.chip').forEach(function(c,j){c.classList.toggle('on',i===j)});
var h='<div class="sthead"><h3>'+st[0]+'</h3><p>'+st[1]+' · <a href="'+Q(st[0]+', '+st[1])+'" target="_blank" rel="noopener">🗺️ Walk it</a><a href="https://www.youtube.com/results?search_query='+encodeURIComponent(st[0]+' '+st[1]+' Christmas walk')+'" target="_blank" rel="noopener">▶ Watch</a></p></div><div class="shops">';
st[2].forEach(function(sh){var area=st[0].split(' & ')[0];h+='<div class="shop"><a href="'+(sh[1]||Q(sh[0]+', '+st[1]))+'" target="_blank" rel="noopener">'+sh[0]+'</a></div>'});
box.innerHTML=h+'</div>';}
DATA.forEach(function(st,i){var b=document.createElement('button');b.className='chip';b.textContent=st[0];b.onclick=function(){show(i)};bar.appendChild(b)});show(0);}
if(document.getElementById('streets'))streetPicker('streets','street',STREETS);
var LUXURY=[
["Knightsbridge","London",[["Harrods","https://www.harrods.com"],["Harvey Nichols","https://www.harveynichols.com"],["Hermès","https://www.hermes.com"],["Chanel","https://www.chanel.com"],["Burberry","https://www.burberry.com"]]],
["Bond Street","London",[["Louis Vuitton","https://www.louisvuitton.com"],["Cartier","https://www.cartier.com"],["Tiffany & Co.","https://www.tiffany.co.uk"],["Dior","https://www.dior.com"],["Sotheby's","https://www.sothebys.com"]]],
["Mayfair & Savile Row","London",[["Huntsman","https://www.huntsmansavilerow.com"],["Henry Poole","https://henrypoole.com"],["Burlington Arcade","https://www.burlingtonarcade.com"],["Fortnum & Mason","https://www.fortnumandmason.com"]]],
["Dubai Mall & Downtown","Dubai",[["The Dubai Mall","https://thedubaimall.com"],["Level Shoes","https://www.levelshoes.com"],["Mall of the Emirates","https://www.malloftheemirates.com"],["Gold Souk",""]]],
["Avenue Montaigne","Paris",[["Dior","https://www.dior.com"],["Chanel","https://www.chanel.com"],["Louis Vuitton","https://www.louisvuitton.com"]]],
["Via Montenapoleone","Milan",[["Prada","https://www.prada.com"],["Gucci","https://www.gucci.com"],["Louis Vuitton","https://www.louisvuitton.com"]]],
["Madison Avenue","New York",[["Ralph Lauren","https://www.ralphlauren.com"],["Hermès","https://www.hermes.com"]]],
["Rodeo Drive","Beverly Hills",[["Gucci","https://www.gucci.com"],["Chanel","https://www.chanel.com"],["Louis Vuitton","https://www.louisvuitton.com"],["Hermès","https://www.hermes.com"],["Tiffany & Co.","https://www.tiffany.com"]]],
["Ginza","Tokyo",[["Ginza Six","https://ginza6.tokyo"],["Wako","https://www.wako.co.jp"],["Mitsukoshi","https://mitsukoshi.mistore.jp"]]]
];
if(document.getElementById('lstreets'))streetPicker('lstreets','lstreet',LUXURY);
var WINS=[["Selfridges","London","https://www.selfridges.com"],["Harrods","London","https://www.harrods.com"],["Fortnum & Mason","London","https://www.fortnumandmason.com"],["Liberty","London","https://www.libertylondon.com"],["Macy's Herald Square","New York","https://www.macys.com"],["Saks Fifth Avenue","New York","https://www.saksfifthavenue.com"],["Bergdorf Goodman","New York","https://www.bergdorfgoodman.com"],["Galeries Lafayette Haussmann","Paris","https://haussmann.galerieslafayette.com"],["Printemps Haussmann","Paris","https://www.printemps.com"],["KaDeWe","Berlin","https://www.kadewe.de"]];
if(document.getElementById('wins'))(function(){var g=document.getElementById('wins');WINS.forEach(function(w){var d=document.createElement('div');d.className='card';
d.innerHTML='<h3>'+w[0]+'</h3><p>'+w[1]+'</p><div class="links"><a href="https://www.youtube.com/results?search_query='+encodeURIComponent(w[0]+' Christmas windows')+'" target="_blank" rel="noopener">▶ Watch</a><a href="'+w[2]+'" target="_blank" rel="noopener">🌐 Visit</a></div>';g.appendChild(d);});})();
var YT=function(q){return 'https://www.youtube.com/results?search_query='+encodeURIComponent(q)};
var FW=[["Auckland","Sky Tower",13,[["▶ Watch live",YT("Auckland Sky Tower New Year fireworks live")]]],
["Sydney","Harbour Bridge & Opera House",11,[["▶ Official stream","https://sydneynewyearseve.com/live-stream"],["📺 ABC iview","https://iview.abc.net.au"]]],
["Hong Kong","Victoria Harbour",8,[["▶ Watch live",YT("Hong Kong New Year fireworks Victoria Harbour live")]]],
["Dubai","Burj Khalifa",4,[["▶ Emaar live stream",YT("Burj Khalifa New Year fireworks live Emaar")]]],
["Paris","Champs-Élysées & Arc de Triomphe",1,[["▶ Watch live",YT("Paris New Year Champs Elysees fireworks live")]]],
["Berlin","Brandenburg Gate",1,[["▶ Watch live",YT("Berlin Brandenburg Gate New Year fireworks live")]]],
["London","London Eye & Big Ben",0,[["📺 BBC iPlayer","https://www.bbc.co.uk/iplayer"],["ℹ️ Event info","https://www.london.gov.uk/events/london-new-years-eve-2026"]]],
["Rio de Janeiro","Copacabana Beach",-3,[["▶ Watch live",YT("Copacabana New Year fireworks live")]]],
["New York","Times Square Ball Drop",-5,[["▶ Official webcast","https://www.timessquarenyc.org/webcast"]]]];
function fwRender(){var now=new Date(),y=(now.getMonth()===0&&now.getDate()<=1)?now.getFullYear():now.getFullYear()+1,g=document.getElementById('fw'),h='';
FW.forEach(function(c){var t=Date.UTC(y,0,1)-c[2]*36e5,dt=new Date(t),diff=t-now.getTime();
var when=dt.toLocaleString([],{weekday:'short',hour:'2-digit',minute:'2-digit'});
var badge=(diff<30*6e4&&diff>-30*6e4)?'<span class="live">🔴 LIVE NOW</span>':'';
h+='<div class="card"><h3>'+c[0]+badge+'</h3><p>'+c[1]+'</p><p class="fwt">'+when+'</p><div class="links">'+c[3].map(function(l){return '<a href="'+l[1]+'" target="_blank" rel="noopener">'+l[0]+'</a>'}).join('')+'</div></div>';});g.innerHTML=h;}
if(document.getElementById('fw')){fwRender();window.__fwT=setInterval(fwRender,60000);}
var V='https://amp-acc-f3a9e2da18fe-xmasworld-music-d558b1c9.cdn.ample.computer/comedy/';
var CLIPS=[["v03","Di Twits: the intro",1],["v04","The Receipt"],["v05","Market Day"],["v07","£10 Trainers"],["v08","Nan's Gold Watch"],["v02","The Look"],["v06","What's in the Bag?",1],["v01","Live at the Pub",1]];
if(document.getElementById('clips'))(function(){var g=document.getElementById('clips');CLIPS.forEach(function(c){var d=document.createElement('div');d.className='card clip'+(c[2]?' wide':'');
d.innerHTML='<video controls playsinline preload="none" poster="'+V+c[0]+'.jpg" src="'+V+c[0]+'.mp4"></video><h3>'+c[1]+'</h3>';g.appendChild(d);});
})();
document.getElementById('share').onclick=function(){var d={title:'Xmas-world.com',text:'🎄 Christmas & New Year around the world',url:'https://www.xmas-world.com/'};
if(navigator.share){navigator.share(d).catch(function(){})}else{window.open('https://wa.me/?text='+encodeURIComponent(d.text+' '+d.url),'_blank')}};
for(var i=0,n=innerWidth<600?22:40;i<n;i++){var s=document.createElement('div');s.className='snow';s.textContent='❄';s.style.left=Math.random()*100+'vw';s.style.animationDuration=(6+Math.random()*10)+'s';s.style.animationDelay=(-Math.random()*15)+'s';s.style.fontSize=(8+Math.random()*14)+'px';s.style.opacity=(0.15+Math.random()*0.45).toFixed(2);document.body.appendChild(s);}
(function(){var p=location.pathname.split('/').pop()||'index.html';document.querySelectorAll('nav a').forEach(function(a){if(a.getAttribute('href')===p)a.classList.add('on')});
var R={music:'music.html',comedy:'comedy.html',fireworks:'fireworks.html',world:'world.html',highstreet:'shop.html',luxury:'shop.html#luxury',windows:'shop.html#windows'},h=location.hash.slice(1);
if((p==='index.html')&&R[h])location.replace(R[h]);})();

if(!document.getElementById('menubtn')){var mb=document.createElement('button');mb.id='menubtn';mb.setAttribute('aria-label','Menu');mb.textContent='☰';document.body.insertBefore(mb,document.body.firstChild);var sh=document.createElement('div');sh.id='navshade';document.body.appendChild(sh);}
if(!XW.bar.parentNode)document.body.appendChild(XW.bar);XW.ui();
}
// Phone menu: ☰ opens the side menu; tapping a link or outside closes it
document.addEventListener('click',function(e){var t=e.target;if(!t.closest)return;if(t.closest('#menubtn')){document.body.classList.toggle('menu-open');return;}if(t.id==='navshade'||t.closest('nav a'))document.body.classList.remove('menu-open');});
document.addEventListener('keydown',function(e){if(e.key==='Escape')document.body.classList.remove('menu-open');});
init();
