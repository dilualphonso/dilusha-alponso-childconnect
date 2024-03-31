import React, { useState } from "react";
import "./DaycareSearch.scss"
import { BASE_URL } from "../../constant-variable";


function DaycareSearch ({completedUrl, setCompletedUrl}){

    const [search, setSearch] = useState('');


    const handleChange = e => {
        const inputValue = e.target.value;
        setSearch(inputValue); // Update 'searchValue' with input value
        console.log(inputValue)
        setCompletedUrl(`${BASE_URL}/daycares?s=${inputValue}`);

    }

    return (
        <section className="location">
 <h1 className="location__title">Discover Quality Childcare Options in Your Area</h1>
 <p className="location__subtitle">Every child is a different kind of flower, and all together, they make this world a beautiful garden</p>
          <div>
<input onChange={handleChange}
                value={search}
                name='searching' className='location__search' type="text" placeholder="Search..." />
                    </div>

        </section>
    )
}
export default DaycareSearch