function solve(number) {

    let matrix = [];

    for (let row = 0; row < number; row++) {
        matrix[row] = [];
        for (let col = 0; col < number; col++) {
            matrix[row].push(number); 
        }
    }


    for (let row = 0; row < matrix.length; row++) {
        console.log(matrix[row].join(' '));
    }


    console.table(matrix);
    
}

solve(3);