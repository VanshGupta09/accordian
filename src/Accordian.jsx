import React, { useState }from "react";

const Accordian = (props) => {
    const [acc, setAcc] = useState(false);

    return (<>
        <div className='main-head'>
            <div className='ques'>
                <h2><span onClick={() => { setAcc(!acc) }}>{acc?"➖":"➕"}</span>{props.ques}</h2>
            </div>
            {acc && <div className='ans'>
                <p>{props.ans}</p>
            </div>}
        </div>
    </>)
}

export default Accordian;