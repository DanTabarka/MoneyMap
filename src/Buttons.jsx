import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css'
import { useState, useEffect } from 'react';


function Buttons( { setMonths, months } ) {
    const [year, setYear] = useState(2024);
    const [month, setMonth] = useState(1);

    function addMonth(y, m) {
        if (y > 2025 || y < 1900 || m > 12 || m < 1) {
            return;
        }
        let newMonths = [...months, getMonthToAdd(y, m)];
        let sortedMonths = newMonths.sort((a, b) => {
            return a.date.localeCompare(b.date)});
        setMonths(sortedMonths);
    }
    
    function getMonthToAdd(y, m) {
        return {
            date: `${y}/${m}`,
            incomes: [],
            expenses: []
          };
    }

    const handleClick = () => {
        const userYear = prompt("Zadejte rok");
        const userMonth = prompt("Zadejte měsíc");
    
        if (userYear !== null && userMonth !== null) { // Ujistí se, že uživatel nezrušil dialog
            setYear(userYear);
            setMonth(userMonth);
            addMonth(userYear, userMonth);
        }
      };


    return (
        <div className='buttons'>
            <button className='add' onClick={handleClick}><i className="bi bi-plus-square"></i> Add month</button>
        </div>
    )
}

export default Buttons;