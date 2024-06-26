let btn = document.querySelector('#btn');
let displayCode = document.querySelector('#displayCode');
let color;

const randomColor = () => {
   color = '#';
   let letters = '0123456789ABCDEF';

   for (let i = 0; i < 6; i++) {
      color = color + letters[Math.floor(Math.random() * 16)];
   }

   return color;
};

btn.addEventListener('click', () =>{
   document.body.style.backgroundColor = randomColor();
   displayCode.innerHTML = color;
});