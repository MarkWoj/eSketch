const gridArea = document.querySelector('#gridArea');

for(i=1; i<257; i++) {
  let square = document.createElement('div');
  square.classList.add('item');
  gridArea.appendChild(square);
}
const items = document.querySelectorAll('.item')
items.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.classList.add('newItem');
  });
});
