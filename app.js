window.addEventListener('load', () => {
    
    var navi = document.querySelectorAll('.nav .element');
    navi.forEach(elem => {
        changeOrder(elem)
    })
    
})

function changeOrder(element){
    let order = Math.floor((Math.random() * 6) + 1);
    element.style = `order: ${order}`;
    console.log(order);
}

function tap() {
    let tap = document.querySelector(".more");
    let show = tap.style.display?"":"block";
    tap.style.display = `${show}`;
  //   console.log(show);
  }

function seasons() {
    let dropdown = document.querySelector(".dropdown-menu");
    let show = dropdown.style.display?"":"block";
    dropdown.style.display = `${show}`;
}


const hiddenButton = document.querySelector('.displayNoneButton');
const wave = document.querySelector('.wave');

hiddenButton.addEventListener('click' , () => {
  wave.style = 'animation-name: window';

})