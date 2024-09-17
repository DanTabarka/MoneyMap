import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


function BalanceBar( {incomes, expenses, height = 5} ) {

    let percentage = (incomes/(expenses + incomes)) * 100;
    if (expenses + incomes == 0) {
        percentage = 50;
    }




    return (
        <div className="balance-container">
            <div className="balance-fill red" style={{ width: `${100 - percentage}%`, height: `${height}px` }}></div>
            <div className="balance-fill green" style={{ width: `${percentage}%`, height: `${height}px` }}></div>
        </div>
    )
}

export default BalanceBar;