// Shared helpers for the JS Concepts pages
(function(window){
  function runCode(eid) {
    var el = document.getElementById(eid + '-code');
    if (!el) return;
    var code = el.textContent || el.innerText || '';
    var out = [];
    var orig = console.log;
    console.log = function() {
      out.push(Array.prototype.slice.call(arguments).map(function(x){
        try { return typeof x === 'object' ? JSON.stringify(x) : String(x); }
        catch(e){ return String(x); }
      }).join(' '));
    };
    try { eval(code); }
    catch(e) { out.push('\u274c ' + (e && e.message ? e.message : String(e))); }
    console.log = orig;
    var w = document.getElementById(eid + '-w');
    var o = document.getElementById(eid + '-o');
    if (o) o.textContent = out.length ? out.join('\n') : '(no output)';
    if (w) { w.style.display = 'block'; if (w.className.indexOf('fi') === -1) w.className = (w.className + ' fi').trim(); }
  }
  window.runCode = runCode;
})(window);
