import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

import BalanceBar from './BalanceBar.jsx';



function MonthEditor( { months, setMonths, monthIndex, calculateSum } ) {

    let incomesSum = calculateSum(months[monthIndex].incomes);
    let expensesSum = calculateSum(months[monthIndex].expenses);

    function addExpenses() {
        const n = prompt("Zadej název");
        const c = parseInt(prompt("Zadej cenu"));
        let newMonths = [...months];

        newMonths[monthIndex] = {...newMonths[monthIndex],
        expenses: [
          ...newMonths[monthIndex].expenses,
          { name: n, cost: c }
        ]}

        setMonths(newMonths);
    }

    function addIncome() {
        const n = prompt("Zadej název");
        const c = parseInt(prompt("Zadej cenu"));
        let newMonths = [...months];

        newMonths[monthIndex] = {...newMonths[monthIndex],
        incomes: [
          ...newMonths[monthIndex].incomes,
          { name: n, cost: c }
        ]}

        setMonths(newMonths);
    }

    function removeIncome(indexToRemove) {
        const newIncomes = months[monthIndex].incomes.filter((_, index) => index !== indexToRemove);
    
        const newMonths = [
            ...months.slice(0, monthIndex),
            { ...months[monthIndex], incomes: newIncomes },
            ...months.slice(monthIndex + 1)
        ];
    
        setMonths(newMonths);
    }

    function removeExpense(indexToRemove) {
        const newExpenses = months[monthIndex].expenses.filter((_, index) => index !== indexToRemove);
    
        const newMonths = [
            ...months.slice(0, monthIndex),
            { ...months[monthIndex], expenses: newExpenses },
            ...months.slice(monthIndex + 1)
        ];
    
        setMonths(newMonths);
    }








    return (
        <div className='month-editor'>
            <div className='d-flex flex-row justify-content-around gap-3'>
                <div className='expenses-container'>
                    <h2>Výdaje <button onClick={addExpenses} className='add-btn expense'><i className="bi bi-cart-plus"></i></button> </h2>
                    <table className='month-editor-tbl'>
                    {months[monthIndex].expenses.map( (expense, index) => {
                        return <tr key={index}><td>{expense.name}</td><td>{expense.cost.toLocaleString('cs-CZ')}</td><td><button className='add-btn income' onClick={() => removeExpense(index)}><i className="bi bi-trash"></i></button></td></tr>
                    })}
                    </table>
                    <p style={{ color: 'red', margin: '20px'}}>total: {expensesSum.toLocaleString('cs-CZ')}</p>
                </div>

                <div className={`value ${incomesSum >= expensesSum ? "vertical-line-green" : "vertical-line-red"}`}></div>

                <div className='incomes-container'>
                    <h2>Přijmy <button onClick={addIncome} className='add-btn income'><i className="bi bi-shield-fill-plus"></i></button> </h2>
                    <table className='month-editor-tbl'>
                    {months[monthIndex].incomes.map( (income, index) => {
                        return <tr key={index}><td>{income.name}</td><td>{income.cost.toLocaleString('cs-CZ')}</td><td><button className='add-btn expense' onClick={() => removeIncome(index)}><i className="bi bi-trash"></i></button></td></tr>
                    })}
                    </table>
                    <p style={{color: 'green', margin: '20px'}}>total: {incomesSum.toLocaleString('cs-CZ')}</p>
                </div>
            </div>

            <BalanceBar incomes={incomesSum}
                        expenses={expensesSum} />
        </div>
    )
}

export default MonthEditor;