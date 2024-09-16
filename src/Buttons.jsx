import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css'
import { useState } from 'react';


function Buttons( {setMonths, months} ) {
    const [year, setYear] = useState(2024);
    const [month, setMonth] = useState(1);

    function addMonth() {
        let newMonths = [...months, getMonthToAdd()];
        let sortedMonths = newMonths.sort();
        setMonths(sortedMonths);
    }

    function getMonthToAdd() {
        return `${year}/${month}`;
    }

    return (
        <div className='buttons'>
            <button className='btn btn-success btn-lg' onClick={addMonth}><i class="bi bi-plus-square"></i> Add month</button>
            <label>
                Year
                <input type='number' value={year} onChange={(e) => setYear(e.target.value)} />
            </label>
            <label>
                Month
                <input type='number' value={month} onChange={(e) => setMonth(e.target.value)} />
            </label>
        </div>
    )
}

export default Buttons;