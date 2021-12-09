import React from 'react'
import "./result.css"

function Result({ data }) {
    return (
        <div className="result">
            <p>{data}</p>
        </div>
    )
}

export default Result
