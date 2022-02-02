window.addEventListener('load', () => {
    
    var navi = document.querySelectorAll('.nav .element');
    // console.log(navi);
    navi.forEach(elem => {
        changeOrder(elem)
    })
    
})

function changeOrder(element){
    let order = Math.floor((Math.random() * 6) + 1);
    element.style = `order: ${order}`;
    console.log(order);
}

const hiddenButton = document.querySelector('.displayNoneButton');
const wave = document.querySelector('.wave');

hiddenButton.addEventListener('click' , () => {
  // hiddenText.style.display = 'block';
  wave.style = 'animation-name: window';

})