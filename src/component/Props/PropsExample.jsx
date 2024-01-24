import React from 'react'
import ChildrenComponent from './ChildrenComponent'

const PropsExample = () => {

  return (
    <div>
      <h1>
        Mengirim props
      </h1>
      <ChildrenComponent message={"Menerima props"} />
    </div>
  )
}

export default PropsExample
