import { useState } from 'react';
import './App.css';
import Buttons from './Buttons.jsx'
import MonthsList from './MonthsList.jsx';
import MonthEditor from './MonthEditor.jsx';

function App() {

  let monthsInit = ["2024/3", "2024/4", "2024/5"];
  const [months, setMonths] = useState(monthsInit);





  return (
    <div className="App">
      <Buttons setMonths={setMonths} months={months} />

      <div className='d-flex flex-row align-items-center justify-content-evenly gap-3'>
        <MonthsList months={months} />
        <MonthEditor />
      </div>
      
    </div>
  );
}

export default App;
