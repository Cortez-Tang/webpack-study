/**
 * @Author: tangzhicheng
 * @Date: 2021-01-24 01:18:19
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-01-24 01:31:51
 * @Description: file content
 */

import React from 'react'
import ReactDOM from 'react-dom'
import banner from './banner.png'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
    }
  }

  inputHandle(e) {
    console.log(e.traget)
  }

  render() {
    return (
      <>
        <div>唐志诚的webpack架构之路</div>
        <img src={banner} />
        <input type="text" onInput={this.inputHandle.bind(this)} />
      </>
    )
  }
}

ReactDOM.render(<Search />, document.getElementById('app'))
