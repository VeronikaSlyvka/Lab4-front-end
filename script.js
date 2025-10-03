//task1
const n = 144;

document.addEventListener('DOMContentLoaded', () => {
  const nodeList = document.querySelectorAll('h1, h2, h3, h4, p, li, a, img');
  const elems = Array.from(nodeList);

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


//task2
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('image-container');
    const addBtn = document.getElementById('add-img');
    const increaseBtn = document.getElementById('increase-img');
    const decreaseBtn = document.getElementById('decrease-img');
    const removeBtn = document.getElementById('remove-img');

    const originalSrc = 'Flam.jpg'; 
    let img = document.getElementById('flam-img');
    let imgWrapper = document.querySelector('#image-container a');


    addBtn.addEventListener('click', () => {
        if (!document.querySelector('#image-container a')) {
            imgWrapper = document.createElement('a');
            imgWrapper.href = "https://en.wikipedia.org/wiki/Fl%C3%A5m";
            imgWrapper.target = "_blank";

            img = document.createElement('img');
            img.src = originalSrc;
            img.alt = "Флом";
            img.id = "flam-img";
            img.width = 800;

            imgWrapper.appendChild(img);
            container.appendChild(imgWrapper);
        }
    });

    increaseBtn.addEventListener('click', () => {
        const imgNow = document.getElementById('flam-img');
        if (imgNow) imgNow.width *= 1.1;   //+10%
    });

    decreaseBtn.addEventListener('click', () => {
        const imgNow = document.getElementById('flam-img');  
        if (imgNow) imgNow.width *= 0.9;  //-10%
    });

    removeBtn.addEventListener('click', () => {
        const imgNow = document.getElementById('flam-img');
        if (imgNow) {
            container.removeChild(imgNow.parentElement); 
        }
    });
});


