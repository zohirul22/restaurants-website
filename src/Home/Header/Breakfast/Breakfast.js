import React, { useEffect, useState } from 'react';

const Breakfast = () => {
    const [breakfast , setBreakfast] = useState([]);
    useEffect(()=>{
fetch('')
.then(res =>res.json())
.then(data => setBreakfast(data))
    } ,[])
    return (
        <div>
           
        </div>
    );
};

export default Breakfast;