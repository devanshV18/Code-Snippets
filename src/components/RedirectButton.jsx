import React from 'react'

const RedirectButton = ({url,name}) => {

    const handleClick = () => {
        window.location.href = url
    }
  return (
    <div>
      <button onClick={handleClick}>
        GO TO {name}
      </button>
    </div>
  )
}

export default RedirectButton
