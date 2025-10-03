const n = 144;

document.addEventListener('DOMContentLoaded', () => {
  const nodeList = document.querySelectorAll('h1, h2, h3, h4, p, li, a, img, ol, ul');
  const elems = Array.from(nodeList);

  if (elems.length === 0) return;

  elems.forEach((el, i) => {
    const idx = i + 1; 
    el.dataset.idx = String(idx);
    if (!el.id) el.id = `el-${idx}`;
  });

  let t1 = (n % 10) + 1;
  let t2 = t1 + 1;
  const total = elems.length;
  if (t1 > total) t1 = ((t1 - 1) % total) + 1;
  if (t2 > total) t2 = ((t2 - 1) % total) + 1;

  const id1 = `el-${t1}`;
  const sel2 = `[data-idx="${t2}"]`;

  const elem1 = document.getElementById(id1);
  const elem2 = document.querySelector(sel2);

  if (elem1) {
    elem1.addEventListener('click', (e) => {
      if (elem1.tagName.toLowerCase() === 'a') e.preventDefault();
      const current = document.getElementById(id1);
      current.classList.toggle('active-get');
    });
  }

  if (elem2) {
    elem2.addEventListener('click', (e) => {
      if (elem2.tagName.toLowerCase() === 'a') e.preventDefault();
      const found = document.querySelector(sel2);
      if (found) found.classList.toggle('active-query');
    });
  }

});
