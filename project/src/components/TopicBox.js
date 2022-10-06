import React from 'react'
import './topicbox.css'

export default function TopicBox(props) {
const topic = "Hi THis is dynamic Topic";

  return (
    <div>
      <div className="topicbox">
      <span className='topicText'> this is mess {props.language} </span>
      </div>
      
    </div>
  )
}
