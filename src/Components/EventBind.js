import React, { Component } from 'react'

class EventBind extends Component {

    clickHandler= () => {
        this.setState({
            message: 'Goodbye'
        })
    }
        
    constructor(props) {
        super(props)
      
        this.state = {
           message: 'Hello'
        }
      }
      
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
            <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind