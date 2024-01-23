import React from 'react'
import ChildrenComponent from './ChildrenComponent'

const PropsExample = () => {
const message = "Hello World!!!"

  return (
    <div>
      <h1>
        {message}
      </h1>
      <ChildrenComponent message={message} />
    </div>
  )
}

export default PropsExample
