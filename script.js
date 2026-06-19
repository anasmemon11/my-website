/* ── TYPED CODE BLOCK ─────────────────────── */
const lines = [
  `<span class="c-cm">// Full Stack Developer</span>`,
  `<span class="c-kw">public class</span> <span class="c-cls">Developer</span>`,
  `<span class="c-punct">{</span>`,
  `  <span class="c-kw">public</span> <span class="c-cls">string</span> Name <span class="c-punct">=</span> <span class="c-str">"Muhammad Anas"</span><span class="c-punct">;</span>`,
  `  <span class="c-kw">public</span> <span class="c-cls">string[]</span> Stack <span class="c-punct">=</span>`,
  `  <span class="c-punct">{</span> <span class="c-str">"ASP.NET Core"</span><span class="c-punct">,</span> <span class="c-str">"C#"</span><span class="c-punct">,</span>`,
  `    <span class="c-str">"React"</span><span class="c-punct">,</span> <span class="c-str">"SQL Server"</span> <span class="c-punct">};</span>`,
  ``,
  `  <span class="c-kw">public</span> <span class="c-cls">bool</span> <span class="c-fn">IsAvailable</span><span class="c-punct">() =></span>`,
  `    <span class="c-num">true</span><span class="c-punct">;</span>`,
  `<span class="c-punct">}</span>`,
];
const body = document.getElementById('codeBody');
let li = 0, ch = 0;
const stripped = lines.map(l => l.replace(/<[^>]+>/g,''));
function typeLine(){
  if(li >= lines.length){ body.innerHTML = lines.join('<br/>'); return; }
  const plain = stripped[li];
  const before = lines.slice(0,li).join('<br/>');
  const partial = plain.slice(0,ch);
  body.innerHTML = (before ? before+'<br/>' : '') + partial + '<span class="cursor"></span>';
  if(ch < plain.length){ ch++; setTimeout(typeLine, plain[ch-1]===' '?18:22); }
  else{ li++; ch=0; setTimeout(typeLine,lines[li-1]===''?80:120); }
}
typeLine();

/* ── BELT ─────────────────────────────────── */
const tech = ['ASP.NET Core','C#','SQL Server','React','TypeScript','JavaScript','Python','REST API','HTML & CSS','Git','jQuery','AJAX'];
const all = [...tech,...tech];
document.getElementById('beltTrack').innerHTML = all.map(t=>`<span class="belt-item">${t}<span class="belt-sep">·</span></span>`).join('');

/* ── SCROLL FADE ──────────────────────────── */
const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target);} });
},{threshold:.12});
document.querySelectorAll('.fi').forEach(el=>obs.observe(el));

/* ── SKILL TABS ───────────────────────────── */
document.querySelectorAll('.tab-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});