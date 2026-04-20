/* ════════════════════════════════════════
   monkincyber — Cmd+K command palette
════════════════════════════════════════ */
(function(){
  function buildIndex(){
    const items=[];
    CMDK.pages.forEach(p=>items.push({...p,type:'page'}));
    CMDK.actions.forEach(a=>items.push({...a,type:'action'}));
    P.topics?.forEach(t=>items.push({name:t.name,url:`topics/${t.id}.html`,icon:t.icon,cat:'Topics',type:'topic'}));
    P.posts?.forEach(p=>items.push({name:p.title,url:`blog/${p.id}.html`,icon:'✎',cat:'Blog posts',type:'post'}));
    P.certs?.forEach(c=>items.push({name:c.name,url:`certifications/${c.id}.html`,icon:'🏆',cat:'Certifications',type:'cert'}));
    P.projects?.forEach(p=>items.push({name:p.name,url:`index.html#projects`,icon:p.emoji||'📦',cat:'Projects',type:'project'}));
    return items;
  }
  function fixUrl(url){
    if(!url||url.startsWith('http')||url.startsWith('mailto:')||url.startsWith('#'))return url;
    const path=window.location.pathname;
    const segments=path.split('/').filter(Boolean);
    const inSubfolder=segments.length>1&&!path.endsWith('.html')?segments.length-1:segments.length-2;
    const depth=Math.max(0,inSubfolder);
    return '../'.repeat(depth)+url;
  }
  function init(){
    if(typeof CMDK==='undefined'||typeof P==='undefined')return;
    const items=buildIndex();
    let activeIdx=0,filtered=items;
    const overlay=document.createElement('div');
    overlay.className='cmdk-overlay';
    overlay.innerHTML=`<div class="cmdk-modal" onclick="event.stopPropagation()">
      <div class="cmdk-input-wrap">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="6" cy="6" r="4.5" stroke="currentColor" stroke-width="1.3"/>
          <line x1="9.5" y1="9.5" x2="13" y2="13" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
        </svg>
        <input class="cmdk-input" placeholder="Search pages, posts, projects, certs..." autocomplete="off">
      </div>
      <div class="cmdk-results"></div>
      <div class="cmdk-footer">
        <span class="cmdk-key"><kbd>↑↓</kbd> navigate</span>
        <span class="cmdk-key"><kbd>↵</kbd> select</span>
        <span class="cmdk-key"><kbd>esc</kbd> close</span>
      </div>
    </div>`;
    document.body.appendChild(overlay);
    const input=overlay.querySelector('.cmdk-input');
    const results=overlay.querySelector('.cmdk-results');
    function render(){
      if(!filtered.length){results.innerHTML='<div class="cmdk-empty">No results found</div>';return;}
      const grouped={};
      filtered.forEach(item=>{if(!grouped[item.cat])grouped[item.cat]=[];grouped[item.cat].push(item);});
      let html='',idx=0;
      Object.entries(grouped).forEach(([cat,list])=>{
        html+=`<div class="cmdk-section-label">${cat}</div>`;
        list.forEach(item=>{
          html+=`<div class="cmdk-item ${idx===activeIdx?'active':''}" data-idx="${idx}" data-url="${item.url}" data-external="${item.external?'1':''}">
            <span class="cmdk-item-icon">${item.icon}</span><span>${item.name}</span><span class="cmdk-item-meta">${item.type}</span></div>`;
          idx++;
        });
      });
      results.innerHTML=html;
    }
    function filter(q){
      q=q.toLowerCase().trim();
      filtered=!q?items:items.filter(i=>i.name.toLowerCase().includes(q)||i.cat.toLowerCase().includes(q));
      activeIdx=0;render();
    }
    function open(){overlay.classList.add('open');input.value='';filter('');setTimeout(()=>input.focus(),50);}
    function close(){overlay.classList.remove('open');}
    function activate(item){
      const url=item.dataset.url,external=item.dataset.external==='1';
      external?window.open(url,'_blank'):window.location.href=fixUrl(url);
      close();
    }
    document.addEventListener('keydown',e=>{
      if((e.metaKey||e.ctrlKey)&&e.key==='k'){e.preventDefault();overlay.classList.contains('open')?close():open();}
      if(!overlay.classList.contains('open'))return;
      if(e.key==='Escape')close();
      if(e.key==='ArrowDown'){e.preventDefault();activeIdx=Math.min(activeIdx+1,filtered.length-1);render();const el=results.querySelector('.cmdk-item.active');if(el)el.scrollIntoView({block:'nearest'});}
      if(e.key==='ArrowUp'){e.preventDefault();activeIdx=Math.max(activeIdx-1,0);render();const el=results.querySelector('.cmdk-item.active');if(el)el.scrollIntoView({block:'nearest'});}
      if(e.key==='Enter'){e.preventDefault();const el=results.querySelector(`.cmdk-item[data-idx="${activeIdx}"]`);if(el)activate(el);}
    });
    input.addEventListener('input',e=>filter(e.target.value));
    overlay.addEventListener('click',close);
    results.addEventListener('click',e=>{const item=e.target.closest('.cmdk-item');if(item)activate(item);});
    window.openCmdK=open;
    document.querySelectorAll('.cmdk-btn').forEach(btn=>btn.addEventListener('click',open));
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();