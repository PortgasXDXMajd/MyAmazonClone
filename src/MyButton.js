import React from 'react'
import './MyButton.css';

function MyButton({onPress, label}) {
    return (
        <button className="myButton" onClick={onPress}>{label}</button>
    )
}

export default MyButton
