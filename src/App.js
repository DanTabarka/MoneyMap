import { useState } from 'react';
import './App.css';
import Buttons from './Buttons.jsx'
import MonthsList from './MonthsList.jsx';
import MonthEditor from './MonthEditor.jsx';
import Total from './Total.jsx';

function App() {

  let monthsInit = [
    {date: "2024/9", incomes: [{name: "vyplata", cost: 30000}, {name: "brigada", cost: 6000}], expenses: [{name: "nájem", cost: 12000}, {name: "jidlo", cost: 8000}, {name: "boty", cost: 3000}, {name: "internet", cost: 500}]}
  ];
  const [months, setMonths] = useState(monthsInit);
  const [monthIndex, setMonthIndex] = useState(0);


  function calculateSum(items) {
    let sum = 0;
    for (const item of items) {
      sum += item.cost;
    }
    return sum;
  }


  return (
    <div className="App">
      <Buttons setMonths={setMonths} months={months} />

      <div className='d-flex flex-row align-items-center justify-content-evenly gap-3'>
        <MonthsList months={months} calculateSum={calculateSum} setMonthIndex={setMonthIndex} />
        <MonthEditor months={months} setMonths={setMonths} monthIndex={monthIndex} calculateSum={calculateSum} />
      </div>

      <Total months={months} />
      
    </div>
  );
}

export default App;
