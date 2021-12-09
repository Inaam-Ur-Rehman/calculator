import React from 'react'
import "./result.css"

function Result({ data, result }) {
    return (
        <div className="result">
            <p>{data}</p>
            <p>{result ? result : ""}</p>
        </div>
    )
}

export default Result
