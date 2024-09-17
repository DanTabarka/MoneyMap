import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import BalanceBar from './BalanceBar';


function MonthsList({ months, calculateSum, setMonthIndex }) {

    
  
    return (
      <div className='months-list'>
        {months.map( (month, index) => {
          return (
            <button className='month month-list' key={month.date} onClick={() => setMonthIndex(index)}
            >
              {month.date}
              <BalanceBar 
                incomes={calculateSum(month.incomes)} 
                expenses={calculateSum(month.expenses)} 
                height={2} 
              />
            </button>
          );
        })}
      </div>
    );
  }

export default MonthsList;