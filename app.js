const ASSET = p => `assets/${p}`;
const state = {
  mission: null,
  page: 0,
  answers: JSON.parse(localStorage.getItem('timkenAnswers') || '{}'),
  completed: JSON.parse(localStorage.getItem('timkenCompleted') || '{}')
};

const mission4WordSearch = {
  words:['SHIP','HORSE','HOUSE','CHURCH','BIRD','TREES'],
  grid:[
    'BLIYYSFS',
    'CSESROHL',
    'AHAUMENR',
    'XIUDTSED',
    'KPRRUUZD',
    'WIECCOEG',
    'BEHEQHDJ',
    'SHZRDTLT'
  ]
};

const missions = {
  1: {
    title: 'Mission 1', accent: '#33b9b2', description: 'Fire, stories, still life & landscapes',
    pages: [
      { type:'image', src:ASSET('m1-intro.png'), intro:true },
      { type:'image', src:ASSET('m1-q1.png'), interaction:{kind:'text', key:'m1q1', placeholder:'Type the creature’s name…', pos:[9,81,82,8]}},
      { type:'image', src:ASSET('m1-q2.png'), interaction:{kind:'speech', key:'m1q2', pos:[8,66,84,14]}},
      { type:'image', src:ASSET('m1-q3.png'), interaction:{kind:'choices', key:'m1q3', options:['He is playing cards','He is putting flowers into the hair of the woman','He is dancing'], pos:[8,61,84,22]}},
      { type:'image', src:ASSET('m1-q4.png'), interaction:{kind:'draw', key:'m1q4', pos:[9,56,82,28], toolbar:[31,87]}},
      { type:'image', src:ASSET('m1-q5.png'), interaction:{kind:'choices', key:'m1q5', options:['Narrative (tells a story)','Portrait (shows a person)','Landscape (shows the outdoors)','Still Life (shows things such as plates, bowls, fruits or flowers)'], pos:[8,59,84,27]}},
      { type:'image', src:ASSET('m1-q6.png'), interaction:{kind:'numbers', key:'m1q6', options:['4','6','8'], pos:[18,52,64,10]}},
      { type:'image', src:ASSET('m1-q7.png'), conclusion:true }
    ]
  },
  2: {
    title: 'Mission 2', accent: '#f35d36', description: 'Ships, portraits, drawing & observation',
    pages: [
      { type:'image', src:ASSET('m2-intro.png'), intro:true },
      { type:'image', src:ASSET('m2-q1.png'), interaction:{kind:'singleHotspots', key:'m2q1', ring:true, options:[
        {value:'8',pos:[17,72.4,12,7.5]},{value:'6',pos:[43,72.4,12,7.5]},{value:'2',pos:[70,72.4,12,7.5]}
      ]}},
      { type:'image', src:ASSET('m2-q2.png'), interaction:{kind:'draw', key:'m2q2', pos:[20,27,60,67], toolbar:[28,88]}},
      { type:'image', src:ASSET('m2-q3.png'), interaction:{kind:'textarea', key:'m2q3', placeholder:'What would you like to ask Maria?', pos:[8,58,84,18]}},
      { type:'image', src:ASSET('m2-q4.png'), interaction:{kind:'choices', key:'m2q4', options:['A piece of gum','A cell phone','A letter'], pos:[29,44,63,18], solid:true}},
      { type:'image', src:ASSET('m2-q6.png'), interactions:[
        {kind:'smallText', key:'m2q6count', placeholder:'', pos:[6,27,18,6], inputmode:'numeric'},
        {kind:'multiHotspots', key:'m2q6words', options:[
          {value:'calm',pos:[2,58,15,4]},{value:'stormy',pos:[19,58,17,4]},{value:'still',pos:[42,58,12,4]},{value:'wild',pos:[61,58,12,4]},{value:'quiet',pos:[81,58,16,4]},
          {value:'loud',pos:[2,62,14,4]},{value:'happy',pos:[19,62,16,4]},{value:'busy',pos:[42,62,12,4]},{value:'noisy',pos:[61,62,14,4]},{value:'rowdy',pos:[81,62,16,4]}
        ]}
      ]},
      { type:'image', src:ASSET('m2-q7.png'), interaction:{kind:'textarea', key:'m2q7', placeholder:'What is he doing?', pos:[8,52,84,16]}},
      { type:'image', src:ASSET('m2-q8.png'), interaction:{kind:'text', key:'m2q8', placeholder:'Write his name here…', pos:[8,20,84,9]}},
      { type:'image', src:ASSET('m2-conclusion.png'), conclusion:true }
    ]
  },
  3: {
    title: 'Mission 3', accent: '#26b9ad', description: 'Books, portraits, color & visual clues',
    pages: [
      { type:'image', src:ASSET('m3-intro.png'), intro:true },
      { type:'image', src:ASSET('m3-q1.png'), interaction:{kind:'text', key:'m3q1', placeholder:'What’s your favorite book?', pos:[8,49,84,10]}},
      { type:'image', src:ASSET('m3-q2.png'), interaction:{kind:'textarea', key:'m3q2', placeholder:'What happens ten minutes later?', pos:[45,47,48,20]}},
      { type:'image', src:ASSET('m3-q3.png'), interaction:{kind:'multiHotspots', key:'m3q3', options:[
        {value:'dark',pos:[12,45,19,5]},{value:'sad',pos:[42,45,17,5]},{value:'light',pos:[68,45,20,5]},
        {value:'colorful',pos:[11,51,23,5]},{value:'happy',pos:[42,51,19,5]},{value:'bright',pos:[68,51,20,5]}
      ]}},
      { type:'image', src:ASSET('m3-q4.png'), interaction:{kind:'textarea', key:'m3q4', placeholder:'What might he be thinking?', pos:[25,39,69,22], bubble:true}},
      { type:'image', src:ASSET('m3-q5.png'), interactions:[
        {kind:'draw', key:'m3q5draw', pos:[59,21,35,27], toolbar:[59,49]},
        {kind:'textarea', key:'m3q5', placeholder:'Describe his modern outfit…', pos:[9,62,82,14], soft:true}
      ]},
      { type:'image', src:ASSET('m3-q6.png'), interaction:{kind:'textarea', key:'m3q6', placeholder:'List the colors you see…', pos:[14,52,72,13], soft:true}},
      { type:'image', src:ASSET('m3-q7.png'), interaction:{kind:'checklist', key:'m3q7', options:['MAN SLEEPING','CAGE','LION WITH WINGS','DOG'], pos:[29,40,62,24]}},
      { type:'image', src:ASSET('m3-conclusion.png'), conclusion:true }
    ]
  },
  4: {
    title: 'Mission 4', accent: '#76c8cf', description: 'Landscapes, color, games & a word search',
    pages: [
      { type:'image', src:ASSET('m4-intro.png'), intro:true },
      { type:'image', src:ASSET('m4-q1.png'), interaction:{kind:'draw', key:'m4q1', pos:[7,46,86,22], toolbar:[31,69]}},
      { type:'image', src:ASSET('m4-q2.png'), interaction:{kind:'singleHotspots', key:'m4q2', options:[
        {value:'Red',pos:[34.5,29.1,10,4.6]},{value:'Orange',pos:[23.8,33.0,14.2,4.5]},{value:'Yellow',pos:[24.0,37.9,14.2,4.5]},
        {value:'Green',pos:[34.6,42.0,12.5,4.5]},{value:'Blue',pos:[44.4,37.9,12.4,4.5]},{value:'Purple',pos:[43.7,33.0,14.0,4.5]}
      ]}},
      { type:'image', src:ASSET('m4-q3.png'), interaction:{kind:'text', key:'m4q3', placeholder:'What game do you like to play?', pos:[7,50,86,9]}},
      { type:'image', src:ASSET('m4-q4.png'), interaction:{kind:'textarea', key:'m4q4', placeholder:'List your ideas…', pos:[18,49,64,14], soft:true}},
      { type:'image', src:ASSET('m4-q5.png'), interaction:{kind:'text', key:'m4q5', placeholder:'How many dogs?', pos:[25,50,50,8], inputmode:'numeric'}},
      { type:'image', src:ASSET('m4-q6.png'), interaction:{kind:'wordsearch', key:'m4q6', words:mission4WordSearch.words, grid:mission4WordSearch.grid, pos:[15,47,70,39]}},
      { type:'image', src:ASSET('m4-q7.png'), interaction:{kind:'draw', key:'m4q7', pos:[52,16,43,34], toolbar:[50,53]}},
      { type:'image', src:ASSET('m4-conclusion.png'), conclusion:true }
    ]
  }
};

function save(){ localStorage.setItem('timkenAnswers', JSON.stringify(state.answers)); }
function saveCompleted(){ localStorage.setItem('timkenCompleted', JSON.stringify(state.completed)); }
function setAnswer(key,val){ state.answers[key]=val; save(); }
function esc(s=''){ return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function posStyle(pos){ const [l,t,w,h]=pos; return `left:${l}%;top:${t}%;width:${w}%;height:${h}%;`; }

function renderHome(){
  state.mission=null; state.page=0;
  document.documentElement.style.setProperty('--accent','#33b9b2');
  document.getElementById('app').innerHTML = `
    <section class="home">
      <div class="home-inner">
        <div class="brand"><img class="brand-mark" src="assets/timken-mark.png" alt="Timken Museum of Art logo"> Timken Museum of Art</div>
        <h1 class="hero-title"><span>Be a Secret Art Agent</span></h1>
        <p class="hero-sub">Choose one of four missions, explore the galleries, and complete kid-friendly art detective challenges. Your answers stay on this device while you explore.</p>
        <div class="mission-grid">
          ${Object.entries(missions).map(([id,m])=>`<button class="mission-card m${id} ${state.completed[id]?'completed':''}" onclick="startMission(${id})"><div class="num">${id}</div>${state.completed[id]?'<span class="complete-badge">✓ Completed</span>':''}<h2>${m.title}</h2><p>${m.description}</p><span class="go">${state.completed[id]?'Do again →':'Choose mission →'}</span></button>`).join('')}
        </div>
      </div>
    </section>`;
}

function startMission(id){ state.mission=Number(id); state.page=0; renderTour(); }
function pageCount(){ return missions[state.mission].pages.length; }
function next(){ if(state.page < pageCount()-1){ state.page++; renderTour(); } else renderHome(); }
function back(){ if(state.page>0){ state.page--; renderTour(); } else renderHome(); }
function goHome(){ renderHome(); }

function renderTour(){
  const m=missions[state.mission], p=m.pages[state.page];
  document.documentElement.style.setProperty('--accent',m.accent);
  if(p.conclusion && !state.completed[state.mission]){ state.completed[state.mission]=true; saveCompleted(); }
  document.getElementById('app').innerHTML = `
    <section class="tour">
      <header class="topbar"><button class="icon-btn" onclick="goHome()">☰ Missions</button><div class="progress">${m.title} · ${state.page+1}/${m.pages.length}</div><button class="icon-btn" onclick="resetMission()">Reset</button></header>
      <div class="viewport">
        <div class="slide" id="slide">${renderPage(p,m)}</div>
      </div>
      ${p.intro ? '' : `<nav class="navbar"><button class="nav-btn back" onclick="back()">← Back</button><button class="nav-btn next" onclick="next()">${p.conclusion?'All Missions':'Next →'}</button></nav>`}
    </section>`;
  bindPage(p,m);
  if(p.conclusion) launchConfetti();
}

function renderPage(p,m){
  let html='';
  if(p.type==='image') html += `<img class="slide-bg" src="${p.src}" alt="${m.title} museum activity page" draggable="false">`;
  else html += renderCustom(p,m);
  if(p.intro) html += `<button class="start-btn" onclick="next()">Start Mission</button>`;
  const interactions=p.interactions || (p.interaction?[p.interaction]:[]);
  interactions.forEach(i=> html += renderInteraction(i));
  if(p.conclusion) html += `<div class="confetti-layer" id="confetti"></div>`;
  return html;
}

function renderCustom(p,m){
  if(p.conclusion) return `<div class="custom-slide"><div class="mission-no">★</div><h1>CONGRATULATIONS!</h1><p>You are a true art detective. You completed ${m.title}!</p><div class="big-icon">🏆</div><p>Don’t forget to stop at the guards’ desk to pick up your prize.</p></div>`;
  return `<div class="custom-slide"><div class="mission-no">${state.mission || ''}</div><h1>${esc(p.heading||m.title)}</h1><p>${esc(p.body||'Get ready for your next art-agent mission.')}</p><div class="big-icon">🔎🎨</div></div>`;
}

function renderInteraction(i){
  const v=state.answers[i.key];
  if(i.kind==='text') return `<div class="overlay panel ${i.soft?'soft-panel':''}" style="${posStyle(i.pos)}"><input class="answer-input" data-key="${i.key}" value="${esc(v||'')}" placeholder="${esc(i.placeholder)}" ${i.inputmode?`inputmode="${i.inputmode}"`:''} aria-label="Answer"></div>`;
  if(i.kind==='textarea') return `<div class="overlay panel ${i.bubble?'bubble-panel':''} ${i.soft?'soft-panel':''}" style="${posStyle(i.pos)}"><textarea class="answer-textarea" data-key="${i.key}" placeholder="${esc(i.placeholder)}">${esc(v||'')}</textarea></div>`;
  if(i.kind==='speech'){
    const a=v||['',''];
    return `<div class="overlay panel" style="${posStyle(i.pos)}"><div class="speech-pair"><textarea class="speech" data-key="${i.key}" data-index="0" placeholder="What might the boy say?">${esc(a[0]||'')}</textarea><textarea class="speech" data-key="${i.key}" data-index="1" placeholder="How might his father respond?">${esc(a[1]||'')}</textarea></div></div>`;
  }
  if(i.kind==='choices') return `<div class="overlay panel ${i.compact?'compact-panel':''} ${i.solid?'solid-panel':''}" style="${posStyle(i.pos)}"><div class="choice-list ${i.compact?'choice-grid':''}">${i.options.map(o=>`<button class="choice ${v===o?'selected':''}" data-choice-key="${i.key}" data-value="${esc(o)}">${esc(o)}</button>`).join('')}</div></div>`;
  if(i.kind==='smallText') return `<div class="overlay small-text-wrap" style="${posStyle(i.pos)}"><input class="small-answer-input" data-key="${i.key}" value="${esc(v||'')}" placeholder="${esc(i.placeholder||'')}" ${i.inputmode?`inputmode="${i.inputmode}"`:''} aria-label="Answer"></div>`;
  if(i.kind==='singleHotspots') return i.options.map(o=>`<button class="answer-hotspot ${i.ring?'ring':''} ${v===o.value?'selected':''}" style="${posStyle(o.pos)}" data-choice-key="${i.key}" data-value="${esc(o.value)}" aria-label="${esc(o.value)}"></button>`).join('');
  if(i.kind==='multiHotspots'){
    const selected=new Set(Array.isArray(v)?v:[]);
    return i.options.map(o=>`<button class="answer-hotspot multi ${selected.has(o.value)?'selected':''}" style="${posStyle(o.pos)}" data-multi-key="${i.key}" data-value="${esc(o.value)}" aria-label="${esc(o.value)}"></button>`).join('');
  }
  if(i.kind==='numbers') return `<div class="overlay" style="${posStyle(i.pos)}"><div class="number-row">${i.options.map(o=>`<button class="number-choice ${v===o?'selected':''}" data-choice-key="${i.key}" data-value="${o}">${o}</button>`).join('')}</div></div>`;
  if(i.kind==='multi' || i.kind==='checklist'){
    const selected=new Set(Array.isArray(v)?v:[]);
    return `<div class="overlay panel ${i.compact?'compact-panel':''}" style="${posStyle(i.pos)}"><div class="${i.kind==='checklist'?'check-list':'word-chip-wrap'}">${i.options.map(o=>i.kind==='checklist'?`<button class="check-item ${selected.has(o)?'selected':''}" data-multi-key="${i.key}" data-value="${esc(o)}"><span class="fake-check">${selected.has(o)?'✓':''}</span><span>${esc(o)}</span></button>`:`<button class="word-chip ${selected.has(o)?'selected':''}" data-multi-key="${i.key}" data-value="${esc(o)}">${esc(o)}</button>`).join('')}</div></div>`;
  }
  if(i.kind==='draw') return `<div class="draw-shell ${i.key==='m3q5draw'?'plain-draw':''}" style="${posStyle(i.pos)}"><canvas id="draw-${i.key}" data-draw-key="${i.key}"></canvas></div><div class="draw-toolbar" style="left:${i.toolbar[0]}%;top:${i.toolbar[1]}%;"><button class="tool-btn active" data-tool="pen">✏️ Pen</button><button class="tool-btn" data-tool="eraser">⌫ Eraser</button><button class="tool-btn" data-tool="clear">Clear</button></div>`;
  if(i.kind==='combo'){
    const combo=v||{count:'',words:[]};
    return `<div class="overlay panel" style="${posStyle(i.pos)}"><input class="answer-input" data-combo-count="${i.key}" value="${esc(combo.count||'')}" inputmode="numeric" placeholder="How many boats?"><div class="word-chip-wrap" style="margin-top:8px">${i.words.map(w=>`<button class="word-chip ${(combo.words||[]).includes(w)?'selected':''}" data-combo-word="${i.key}" data-value="${w}">${w}</button>`).join('')}</div></div>`;
  }
  if(i.kind==='wordsearch') return `<div class="overlay panel wordsearch-wrap" style="${posStyle(i.pos)}"><div id="word-grid" class="word-grid"></div><div class="mini-note">Drag across the letters to select a word. Words can go forwards, backwards, up, down, or diagonally.</div></div>`;
  return '';
}

function bindPage(p){
  document.querySelectorAll('[data-key]').forEach(el=>el.addEventListener('input',e=>{
    const key=e.target.dataset.key;
    if(e.target.classList.contains('speech')){
      const arr=Array.isArray(state.answers[key])?[...state.answers[key]]:['','']; arr[Number(e.target.dataset.index)]=e.target.value; setAnswer(key,arr);
    } else setAnswer(key,e.target.value);
  }));
  document.querySelectorAll('[data-choice-key]').forEach(btn=>btn.addEventListener('click',()=>{
    setAnswer(btn.dataset.choiceKey,btn.dataset.value); renderTour();
  }));
  document.querySelectorAll('[data-multi-key]').forEach(btn=>btn.addEventListener('click',()=>{
    const key=btn.dataset.multiKey, selected=new Set(Array.isArray(state.answers[key])?state.answers[key]:[]);
    selected.has(btn.dataset.value)?selected.delete(btn.dataset.value):selected.add(btn.dataset.value);
    setAnswer(key,[...selected]); renderTour();
  }));
  document.querySelectorAll('[data-combo-count]').forEach(el=>el.addEventListener('input',()=>{
    const key=el.dataset.comboCount, cur=state.answers[key]||{count:'',words:[]}; setAnswer(key,{...cur,count:el.value});
  }));
  document.querySelectorAll('[data-combo-word]').forEach(btn=>btn.addEventListener('click',()=>{
    const key=btn.dataset.comboWord, cur=state.answers[key]||{count:'',words:[]}; const words=new Set(cur.words||[]); words.has(btn.dataset.value)?words.delete(btn.dataset.value):words.add(btn.dataset.value); setAnswer(key,{...cur,words:[...words]}); btn.classList.toggle('selected');
  }));
  const interactions=p.interactions || (p.interaction?[p.interaction]:[]);
  interactions.forEach(i=>{
    if(i.kind==='draw') initDrawing(i.key);
    if(i.kind==='wordsearch') initWordSearch(i.key,i.words,i.grid);
  });
}

function resetMission(){
  if(!confirm(`Clear saved answers for ${missions[state.mission].title}?`)) return;
  const prefix=`m${state.mission}`; Object.keys(state.answers).forEach(k=>{ if(k.startsWith(prefix)) delete state.answers[k]; }); delete state.completed[state.mission]; save(); saveCompleted(); state.page=0; renderTour();
}

function initDrawing(key){
  const c=document.getElementById(`draw-${key}`); if(!c) return;
  const rect=c.getBoundingClientRect(), dpr=Math.max(1,window.devicePixelRatio||1);
  c.width=Math.round(rect.width*dpr); c.height=Math.round(rect.height*dpr);
  const ctx=c.getContext('2d'); ctx.scale(dpr,dpr); ctx.lineCap='round';ctx.lineJoin='round';
  let mode='pen', drawing=false, last=null;
  const saved=state.answers[key];
  if(saved && saved.startsWith('data:image')){ const img=new Image(); img.onload=()=>ctx.drawImage(img,0,0,rect.width,rect.height); img.src=saved; }
  const point=e=>{ const r=c.getBoundingClientRect(); return {x:e.clientX-r.left,y:e.clientY-r.top}; };
  const down=e=>{drawing=true;last=point(e);c.setPointerCapture(e.pointerId)};
  const move=e=>{if(!drawing)return; const q=point(e);ctx.save();ctx.globalCompositeOperation=mode==='eraser'?'destination-out':'source-over';ctx.strokeStyle='#242424';ctx.lineWidth=mode==='eraser'?28:4;ctx.beginPath();ctx.moveTo(last.x,last.y);ctx.lineTo(q.x,q.y);ctx.stroke();ctx.restore();last=q;};
  const up=()=>{if(!drawing)return;drawing=false;setAnswer(key,c.toDataURL('image/png'));};
  c.addEventListener('pointerdown',down);c.addEventListener('pointermove',move);c.addEventListener('pointerup',up);c.addEventListener('pointercancel',up);
  c.closest('.slide')?.querySelectorAll('[data-tool]').forEach(b=>b.addEventListener('click',()=>{
    if(b.dataset.tool==='clear'){ctx.clearRect(0,0,rect.width,rect.height);setAnswer(key,'');return;}
    mode=b.dataset.tool; c.closest('.slide').querySelectorAll('[data-tool]').forEach(x=>x.classList.toggle('active',x===b));
  }));
}

function initWordSearch(key,words,rows){
  const grid=document.getElementById('word-grid'), bank=document.getElementById('word-bank'); if(!grid)return;
  grid.style.gridTemplateColumns=`repeat(${rows[0].length},1fr)`;
  const found=new Set((state.answers[key]||[]).map(x=>x.toUpperCase()));
  rows.forEach((row,r)=>[...row].forEach((ch,c)=>{ const b=document.createElement('button');b.className='ws-cell';b.textContent=ch;b.dataset.r=r;b.dataset.c=c;grid.appendChild(b); }));
  if(bank) bank.innerHTML=words.map(w=>`<span data-bank="${w}" class="${found.has(w)?'found':''}">${w}</span>`).join('');
  const cells=()=>[...grid.querySelectorAll('.ws-cell')];
  words.forEach(w=>{
    if(!found.has(w)) return;
    const path=findWordPath(rows,w); path.forEach(([r,c])=>cells().find(x=>+x.dataset.r===r&&+x.dataset.c===c)?.classList.add('found'));
  });
  let start=null,current=null,path=[];
  function getCellAt(x,y){ const el=document.elementFromPoint(x,y); return el?.classList.contains('ws-cell')?el:null; }
  function compute(a,b){ const r1=+a.dataset.r,c1=+a.dataset.c,r2=+b.dataset.r,c2=+b.dataset.c,dr=r2-r1,dc=c2-c1; const sr=Math.sign(dr),sc=Math.sign(dc); if(!(dr===0||dc===0||Math.abs(dr)===Math.abs(dc))) return []; const n=Math.max(Math.abs(dr),Math.abs(dc)); return Array.from({length:n+1},(_,i)=>cells().find(x=>+x.dataset.r===r1+sr*i && +x.dataset.c===c1+sc*i)).filter(Boolean); }
  function paint(){ cells().forEach(x=>x.classList.remove('dragging')); path.forEach(x=>x.classList.add('dragging')); }
  grid.addEventListener('pointerdown',e=>{const cell=e.target.closest('.ws-cell');if(!cell)return;start=current=cell;path=[cell];paint();grid.setPointerCapture(e.pointerId);});
  grid.addEventListener('pointermove',e=>{if(!start)return;const cell=getCellAt(e.clientX,e.clientY);if(cell&&cell!==current){current=cell;path=compute(start,current);paint();}});
  grid.addEventListener('pointerup',()=>{
    if(!start)return;
    const word=path.map(x=>x.textContent).join(''), rev=[...word].reverse().join('');
    const match=words.find(w=>w===word||w===rev);
    if(match){
      found.add(match); path.forEach(x=>x.classList.add('found'));
      const tag=bank?.querySelector(`[data-bank="${match}"]`); if(tag)tag.classList.add('found');
      setAnswer(key,[...found]); if(found.size===words.length) launchConfetti();
    }
    path.forEach(x=>x.classList.remove('dragging')); start=current=null;path=[];
  });
}

function findWordPath(rows,word){
  const dirs=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
  for(let r=0;r<rows.length;r++) for(let c=0;c<rows[r].length;c++) for(const [dr,dc] of dirs){
    const p=[]; let ok=true;
    for(let i=0;i<word.length;i++){
      const rr=r+dr*i,cc=c+dc*i;
      if(rr<0||rr>=rows.length||cc<0||cc>=rows[rr].length||rows[rr][cc]!==word[i]){ok=false;break;}
      p.push([rr,cc]);
    }
    if(ok) return p;
  }
  return [];
}

function launchConfetti(){
  const layer=document.getElementById('confetti') || document.querySelector('.slide'); if(!layer)return;
  const colors=['#ff9720','#35b8b2','#f15a37','#f3cf5a','#6ebc64','#8a72c6'];
  for(let i=0;i<90;i++){
    const s=document.createElement('i');s.className='confetti';s.style.left=`${Math.random()*100}%`;s.style.background=colors[i%colors.length];s.style.setProperty('--drift',`${(Math.random()*2-1)*130}px`);s.style.animationDuration=`${2.6+Math.random()*2.2}s`;s.style.animationDelay=`${Math.random()*.6}s`;layer.appendChild(s);setTimeout(()=>s.remove(),5600);
  }
}

renderHome();
