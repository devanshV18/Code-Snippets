import React from 'react'

const ObjectDisplay = ({data}) => {
  return (
    <div>
      <h2>Object Display</h2>

      <ul>
        {Object.entries(data).map(([key,value])=> (
            <li key={key}>
                <strong>{key}:</strong>{value}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default ObjectDisplay
