import React, { Component } from 'react'
import '../../styles/Staff/chatBody.css'
import ChatList from './ChatList'
import ChatContent from '../../components/Staff/ChatContent'

export default class ChatBody extends Component {
  render() {
    return (
      <div className="main__chatbody">
        <ChatList />
        <ChatContent />
      </div>
    )
  }
}
