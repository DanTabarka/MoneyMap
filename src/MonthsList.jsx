import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


function MonthsList( {months} ) {




    return (
        <div className='months'>
            {months.map(month => {
                return <button className='btn btn-info d-block'>{month}</button>;
            })}
        </div>
    )
}

export default MonthsList;