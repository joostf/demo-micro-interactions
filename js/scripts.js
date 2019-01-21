const move = document.querySelector('button:nth-of-type(1)');
const show = document.querySelector('button:nth-of-type(2)');
const article = document.querySelector('article');
const paragraphs = document.querySelectorAll('p');

let totalHeight = 0;
let initial = true;

move.addEventListener('click', () => {
  document.body.classList.toggle('animate');
});

show.addEventListener('click', () => {
  totalHeight = 0;
  initial = true;
  document.body.style.setProperty('--height', totalHeight);
  show.classList.remove('show');
});

paragraphs.forEach(p => {
  p.addEventListener('click', event => {
    let height = event.target.clientHeight;
    let offset = event.target.offsetTop;
    totalHeight = height + offset;
    if (initial) totalHeight = totalHeight - 24;
    document.body.style.setProperty('--height', `-${totalHeight}px`);
    show.classList.add('show');

    initial = false;
  });
});
