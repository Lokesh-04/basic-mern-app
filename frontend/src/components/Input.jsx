import React from 'react'

const Input = () => {
  return (
    <div>
      <h1>Input</h1>
        <form action="/input" method="post">
            <input type="text" />
            <button type="submit">Submit</button>
        </form>
      
    </div>
  )
}

export default Input
