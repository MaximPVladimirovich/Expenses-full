import React from "react"
import { hot } from "react-hot-loader"


const HelloWorld = function () {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}

export default hot(module)(HelloWorld)