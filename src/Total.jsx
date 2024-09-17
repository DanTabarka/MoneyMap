import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import BalanceBar from './BalanceBar';


function Total( { months } ) {

    let totalIncomes = () => {
        let sum = 0;
        months.map(month => {
            month.incomes.map(item => sum += item.cost)
        })
        return sum;
    };
    let totalExpenses = () => {
        let sum = 0;
        months.map(month => {
            month.expenses.map(item => sum += item.cost)
        })
        return sum;
    };

    console.log(totalExpenses())
    console.log(totalIncomes())




    return (
        <div className='total'>
            <h2>Total</h2>
            <BalanceBar 
                incomes={totalIncomes()} 
                expenses={totalExpenses()} 
                height={8} 
              />
        </div>
    )
}

export default Total;