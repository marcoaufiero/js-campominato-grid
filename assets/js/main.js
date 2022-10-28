const grid = document.getElementById('grid');
console.log(grid);

function squareGenerator(){
    const div = document.createElement('div');
    div.classList.add('square');
    return div;
}

for(let i = 0; i < 100; i++){

    let activeSquare = squareGenerator();

    activeSquare.addEventListener('click', function(){
        this.classList.add('active');
    })

    grid.append( activeSquare);

}