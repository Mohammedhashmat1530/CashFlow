const express = require('express')
const cors = require('cors')
const ConnectDB = require('./db/db')
const User = require('./Models/user')
const {addExpense} = require('./Controller/Expense')
const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
ConnectDB()

app.get('/api/fakeData', (req, res) => {
    const fakeData = [{
        id:4,
        name:"hash",
    },{
        id:6,
        name:"jash"
    }]

    res.send(fakeData);
})


app.post('/api/submit', (req, res) => {
    const { expense, expenseType,occurance,timePeriod } = req.body;
   addExpense(expense,expenseType,occurance,timePeriod)
  });
app.listen(3000,()=>{
    console.log("server is running")
})