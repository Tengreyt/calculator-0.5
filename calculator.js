const OPERATIONS = {
    sum: '+',
    substract: '-',
    multiply: '*',
    divison: '/'
};

function calculate ({a, b, operations}){
    let result = null;

    switch(operations){
        case OPERATIONS.sum:
            result = sum(a,b)
            break;
        case OPERATIONS.substract:
            result = substractum(a,b)
            break;
        case OPERATIONS.multiply:
            result = multiply(a,b)
            break;
        case OPERATIONS.divison:
            result = divison(a,b)
            break;
        default:
            break;
    }
    return result;
}