const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
function setTheme(theme) {
  root.dataset.theme = theme;
  themeButton?.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
  if (themeButton) themeButton.textContent = theme === 'dark' ? '☼' : '☾';
}
try { setTheme(localStorage.getItem('wisp-theme') === 'light' ? 'light' : 'dark'); } catch { setTheme('dark'); }
themeButton?.addEventListener('click', () => {
  const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(theme);
  try { localStorage.setItem('wisp-theme', theme); } catch { /* Theme still works without storage. */ }
});
const details = {
  params: '<div class="param-head"><span>KEY</span><span>VALUE</span></div><div class="param-row"><span>☑ &nbsp; include</span><span>profile</span></div>',
  headers: '<div class="param-head"><span>HEADER</span><span>VALUE</span></div><div class="param-row"><span>Accept</span><span>application/json</span></div>',
  auth: '<div class="param-head"><span>TYPE</span><span>SOURCE</span></div><div class="param-row"><span>Bearer token</span><span>Inherited from collection</span></div>',
  body: '<div class="param-row"><span>This GET request has no body.</span></div>'
};
const tabs = [...document.querySelectorAll('[data-panel]')];
function selectTab(tab) {
  tabs.forEach(item => { item.setAttribute('aria-selected', String(item === tab)); item.tabIndex = item === tab ? 0 : -1; });
  const panel = document.querySelector('#request-detail');
  panel.innerHTML = details[tab.dataset.panel];
  panel.setAttribute('aria-labelledby', tab.id);
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); selectTab(tabs[next]); tabs[next].focus(); }
  });
});
const send = document.querySelector('#demo-send');
send?.addEventListener('click', () => {
  send.disabled = true;
  send.textContent = 'Sending…';
  document.querySelector('#demo-status').textContent = 'Running local example…';
  setTimeout(() => {
    document.querySelector('#demo-status').innerHTML = '<span class="get">200 OK</span><span>128 ms</span><span>Demo response</span>';
    send.innerHTML = 'Send <span>↗</span>';
    send.disabled = false;
  }, 550);
});
document.querySelectorAll('.copy-button').forEach(button => {
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(button.closest('.code-window').querySelector('pre').textContent);
      button.textContent = 'Copied';
      setTimeout(() => { button.textContent = 'Copy'; }, 1800);
    } catch { button.textContent = 'Select text to copy'; }
  });
});
