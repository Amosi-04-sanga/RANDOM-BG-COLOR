const items = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E" ];
const itemsLen = items.length;



// element ref.
const color = document.getElementById('color');
const container = document.getElementById('container');
const button = document.getElementById('btn');


button.addEventListener( 'click', changeBgColor, false );


// random numbers.
function randomNumbers() {
    return Math.floor( Math.random() * itemsLen );
}

// changeBgColor func.
function changeBgColor() {
    
    let hex = "#";
    
    for( let count = 0; count < 6; count++ ) {
        
        hex += items[randomNumbers()];
        
    }
    
    container.style.backgroundColor = hex;
    color.innerText = hex;
    
}

