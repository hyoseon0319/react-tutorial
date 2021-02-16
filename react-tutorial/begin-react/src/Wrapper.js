import React from 'react'

function Wrapper({ children }) {
    const style = {
        border: '5px solid purple',
        padding : '16px',
    };
        return (
            <div style ={style}>
                {children} 
            </div>
        )
}

export default Wrapper
