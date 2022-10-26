const express = require('express');
const app = express();
const arithmeticFunctions = require('./arithmeticFunctions');

app.use(express.urlencoded({ extended: false }));


let operation = [{ id: 1, operator: 'Addition', value_1: 3, value_2: 10}];


app.get('/operation/', function (req, res) {
    res.send(operation);
})


app.post('/operation', function (req, res) {

    let value_1 = operation[0].value_1;
    let value_2 = operation[0].value_2;
    let operator = operation[0].operator;
    if (operator === 'Addition') {
        result = arithmeticFunctions.add(value_1, value_2);
    }
    else if (operator === 'Subtraction') {
        result = arithmeticFunctions.sub(value_1, value_2);
    }
    else if (operator === 'Multiplication') {
        result = arithmeticFunctions.mul(value_1, value_2);
    }
    else if (operator === 'Division') {
        result = arithmeticFunctions.div(value_1, value_2);
    }

    console.log('Operator: ' + operation[0].operator);
    console.log('Value 1: ' + operation[0].value_1);
    console.log('Value 2: ' + operation[0].value_2);
    console.log('Result: ' + result);

    res.redirect('/operation');
})


app.patch('/operation/:operation_id', function(req, res){
    let operation_id = parseInt(req.params.operation_id); 
    
    let index = operation.findIndex((ope) => {
        return ope.id === operation_id;
    });

    operation[index].operator = req.body.operator; 
    operation[index].value_1 = parseInt(req.body.value_1);
    operation[index].value_2 = parseInt(req.body.value_2);

    let value_1 = operation[0].value_1;
    let value_2 = operation[0].value_2;
    let operator = operation[0].operator;
    if (operator === 'Addition') {
        result = arithmeticFunctions.add(value_1, value_2);
    }
    else if (operator === 'Subtraction') {
        result = arithmeticFunctions.sub(value_1, value_2);
    }
    else if (operator === 'Multiplication') {
        result = arithmeticFunctions.mul(value_1, value_2);
    }
    else if (operator === 'Division') {
        result = arithmeticFunctions.div(value_1, value_2);
    }

    console.log('Operator: ' + operation[0].operator);
    console.log('Value 1: ' + operation[0].value_1);
    console.log('Value 2: ' + operation[0].value_2);
    console.log('Result: ' + result);
    res.redirect('/operation');
});


app.listen(3000, function () {
    console.log('Server running on port 3000...');
})