function pad(n){return n<10?'0'+n:''+n}
if(document.getElementById('cd-d')){(function(){function tick(){var now=new Date(),y=now.getFullYear(),xmas=new Date(y,11,25),label='until Christmas',x;
if(now<xmas){x=xmas}else{x=new Date(y+1,0,1);label='until New Year'}
var d=Math.max(0,x-now);
document.getElementById('cd-d').textContent=Math.floor(d/864e5);
document.getElementById('cd-h').textContent=pad(Math.floor(d/36e5)%24);
document.getElementById('cd-m').textContent=pad(Math.floor(d/6e4)%60);
document.getElementById('cd-s').textContent=pad(Math.floor(d/1e3)%60);
document.getElementById('cdlabel').textContent=label;}
tick();setInterval(tick,1000);})();}
// Songs are hosted in the xmasworld-music bucket; edit titles here
var M='https://amp-acc-f3a9e2da18fe-xmasworld-music-d558b1c9.cdn.ample.computer/music/';
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
{album:"Non-Xmas Hits",title:"60s Bollywood Ballad",file:M+'036.mp3'}
];
if(document.getElementById('tracks')){(function(){var g=document.getElementById('tracks'),a=document.getElementById('audio'),now=document.getElementById('now');
document.getElementById('soon').hidden=true;document.getElementById('player').hidden=false;
var last='';TRACKS.forEach(function(t,i){if(t.album!==last){last=t.album;var h=document.createElement('h3');h.className='album';h.textContent=({'Xmas Hits':'🎄 ','Ibiza Anthems for Xmas':'🌴 ','Non-Xmas Hits':'🎉 '}[t.album]||'')+t.album;g.appendChild(h);}var c=document.createElement('div');c.className='card track';c.innerHTML='<h3>▶ '+t.title+'</h3>';
c.onclick=function(){document.querySelectorAll('.track').forEach(function(e){e.classList.remove('on')});c.classList.add('on');a.src=t.file;now.textContent='Now playing: '+t.title;a.play();};g.appendChild(c);});
a.onended=function(){var cs=document.querySelectorAll('.track'),i=[].indexOf.call(cs,document.querySelector('.track.on'));if(i>-1&&i<cs.length-1)cs[i+1].click();};})();}
if(document.getElementById('sotd')){(function(){var day=Math.floor((Date.now()-new Date().getTimezoneOffset()*6e4)/864e5),m=new Date().getMonth(),xm=TRACKS.filter(function(t){return t.album==='Xmas Hits'}),pool=(m===11&&new Date().getDate()<=26)||m===10?xm:TRACKS,pick=pool[day%pool.length],sb=document.getElementById('sotd'),au=new Audio();au.preload='none';
function label(p){sb.innerHTML='🎵 Song of the day: <b>'+pick.title+'</b> '+(p?'⏸':'▶');}
label(false);sb.hidden=false;sb.onclick=function(){if(au.paused){if(!au.src)au.src=pick.file;au.play();label(true);}else{au.pause();label(false);}};au.onended=function(){label(false)};})();}
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
st[2].forEach(function(sh){var area=st[0].split(' & ')[0];h+='<div class="shop"><a href="'+(sh[1]||Q(sh[0]+', '+st[1]))+'" target="_blank" rel="noopener">'+sh[0]+'</a><a class="pin" href="'+Q(sh[0]+', '+area+', '+st[1])+'" target="_blank" rel="noopener" aria-label="Map">📍</a></div>'});
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
d.innerHTML='<h3>'+w[0]+'</h3><p>'+w[1]+'</p><div class="links"><a href="https://www.youtube.com/results?search_query='+encodeURIComponent(w[0]+' Christmas windows')+'" target="_blank" rel="noopener">▶ Watch</a><a href="'+Q(w[0]+', '+w[1])+'" target="_blank" rel="noopener">📍 Map</a><a href="'+w[2]+'" target="_blank" rel="noopener">🌐 Visit</a></div>';g.appendChild(d);});})();
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
if(document.getElementById('fw')){fwRender();setInterval(fwRender,60000);}
var V='https://amp-acc-f3a9e2da18fe-xmasworld-music-d558b1c9.cdn.ample.computer/comedy/';
var CLIPS=[["v03","Di Twits: the intro",1],["v04","The Receipt"],["v05","Market Day"],["v07","£10 Trainers"],["v08","Nan's Gold Watch"],["v02","The Look"],["v06","What's in the Bag?",1],["v01","Live at the Pub",1]];
if(document.getElementById('clips'))(function(){var g=document.getElementById('clips');CLIPS.forEach(function(c){var d=document.createElement('div');d.className='card clip'+(c[2]?' wide':'');
d.innerHTML='<video controls playsinline preload="none" poster="'+V+c[0]+'.jpg" src="'+V+c[0]+'.mp4"></video><h3>'+c[1]+'</h3>';g.appendChild(d);});
})();
document.addEventListener('play',function(e){document.querySelectorAll('video,audio').forEach(function(m){if(m!==e.target)m.pause();});},true);
document.getElementById('share').onclick=function(){var d={title:'Xmasworld',text:'🎄 Christmas & New Year around the world',url:'https://xmas-world.com/'};
if(navigator.share){navigator.share(d).catch(function(){})}else{window.open('https://wa.me/?text='+encodeURIComponent(d.text+' '+d.url),'_blank')}};
for(var i=0,n=innerWidth<600?22:40;i<n;i++){var s=document.createElement('div');s.className='snow';s.textContent='❄';s.style.left=Math.random()*100+'vw';s.style.animationDuration=(6+Math.random()*10)+'s';s.style.animationDelay=(-Math.random()*15)+'s';s.style.fontSize=(8+Math.random()*14)+'px';s.style.opacity=(0.15+Math.random()*0.45).toFixed(2);document.body.appendChild(s);}
(function(){var p=location.pathname.split('/').pop()||'index.html';document.querySelectorAll('nav a').forEach(function(a){if(a.getAttribute('href')===p)a.classList.add('on')});
var R={music:'music.html',comedy:'comedy.html',fireworks:'fireworks.html',world:'world.html',highstreet:'shop.html',luxury:'shop.html#luxury',windows:'shop.html#windows'},h=location.hash.slice(1);
if((p==='index.html')&&R[h])location.replace(R[h]);})();
