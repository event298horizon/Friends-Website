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

