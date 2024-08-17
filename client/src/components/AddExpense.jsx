import React, { useState } from 'react'

const AddExpense = () => {

  const initialState = {
    expense: 0,
    expenseType: '',
    occurance: false,
    timePeriod: 0,
  };

  const [formData, setFormData] = useState(initialState);
  const [occurance,setOccurance] = useState(false);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked,
      });
      setOccurance(checked);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("hee is result", result);
      setFormData(initialState)
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <>
      <div className='flex  flex-col items-center'>
        <h1 className='text-2xl font-medium'>Add Expense <span className='text-red-500'>Entry</span></h1>

        <h3 className='text-xl font-normal mt-3'>Track your spending by adding a new expense.</h3>

      </div>

      <div className='mx-6'>
        <form onSubmit={handleSubmit} className='mt-8'>

          <div class="col-span-6 sm:col-span-3 mt-16">
            <label for="expense" class="block text-lg font-medium text-black w-auto">
              Your Expense:
            </label>

            <input
              type="number"
              name="expense"
              value={formData.expense}
              onChange={handleChange}
              className="mt-1 w-full rounded-md h-8 border-2 border-gray-500 focus:border-blue-600 focus:outline-none p-2 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>




          <div className='col-span-6 sm:col-span-3 mt-6'>
            <label for="expenseType" class="block text-lg font-medium text-black w-auto">
              Expense Type:
            </label>
            <input
              type="text"
              name="expenseType"
              value={formData.expenseType}
              onChange={handleChange}
              className="mt-1 w-full rounded-md h-8 border-2 border-gray-500 focus:border-blue-600 focus:outline-none p-2 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <p className='mt-16 text-md font-medium tracking-wide text-red-800'>If this expense is recurring in some particular time period then this particular expense will be automatically added into your expense tracker which makes your life easy😎</p>
          <div className='flex gap-5 mt-8 flex-row'>
            <label for="occurance" class="block text-lg font-medium text-black w-auto">
              Occurances of this particular expense:
            </label>

            <label
              for="AcceptConditions"
              class="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-red-500"
            >
              <input type="checkbox" id="AcceptConditions" class="peer sr-only" name="occurance"
                checked={formData.occurance}
                onChange={handleChange} />

              <span
                class="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6"
              ></span>
            </label>

          </div>

          {occurance ? (
          <div className='col-span-6 sm:col-span-3 mt-12 '>
            <label for="timePeriod" class="block text-lg font-medium text-black w-auto">
              Time Period for this expense to reoccur again:<span className='text-red-600'>(in months)</span>
            </label>

            <input className="mt-1 w-full rounded-md h-8 border-2 border-gray-500 focus:border-blue-600 focus:outline-none p-2 bg-white text-sm text-gray-700 shadow-sm"
              type="number"
              name="timePeriod"
              value={formData.timePeriod}
              onChange={handleChange}
            />
          </div>
          ):(
            <p>No occurrence</p>
          )}
            
          <div className='flex justify-center mt-12'>
            <button type="submit" className='bg-blue-700 w-auto p-2 text-white font-medium rounded-md'>Enter your Expense</button>
          </div>

        </form>
      </div>
    </>
  )
}

export default AddExpense




