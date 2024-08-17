const Expense = require('../Models/Expense')

function addExpense(expense,expenseType,occurance,timePeriod){
    Expense.create({
        expense,
        expenseType,
        occurance,
        timePeriod
    })
}


module.exports = {
    addExpense
}