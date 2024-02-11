import React from 'react';
import "./MyModal.css";

const MyModal = (props) => {
    return (
        <>
            <div className='modal-wrapper' onClick={props.passedFunc}/>
            <div className="modal-container">
                <h2>About</h2>
                <p>{props.data()}
                </p>
                <button className='btn btn-outline-light modal-btn' onClick={props.passedFunc}>Close</button>
            </div>
        </>
    )
}

export default MyModal