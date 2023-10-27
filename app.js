const boxList = document.querySelectorAll('.box');
const boxArr = Array.from(boxList);

let currentIndex;
const MAX = boxArr.length - 1;

boxArr.forEach((el) => {
  el.addEventListener('click', (e) => {
    const index = boxArr.indexOf(e.target);
    const newIndex = index + 1 > MAX ? 0 : index + 1;
    if (newIndex === currentIndex) {
      console.log('current');
      boxArr[currentIndex].classList.remove('active');
      currentIndex = undefined;
      return;
    }
    if (currentIndex !== undefined) {
      boxArr[currentIndex].classList.remove('active');
    }
    currentIndex = newIndex;
    boxArr[currentIndex].classList.add('active');
  });
});

const button = document.querySelector('#area-button');
const area = document.querySelector('#area');

button.addEventListener('click', () => {
  const width = boxArr[currentIndex].offsetWidth;
  //area of circle = pi * r * r
  console.log((width ^ 2) * Math.PI);
  area.textContent = `Area of the circle is ${((width / 2) ^ 2) * Math.PI}px`;
});

// karen.hakobjanyan@ysu.am
