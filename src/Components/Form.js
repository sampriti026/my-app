import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             topic: 'react'

        }
    }
    handleUsernameChange = (event) => {
            this.setState({
                username: event.target.value
            })
    }

    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })

    }
    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }
    
    render() {
        return (
            <form>
                <div>
                    <label>username</label>
                    <input type='text' value={this.state.  username} onChange={this.handleUsernameChange}/>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value='react'>React</option>
                        <option value='angular'>angular</option>
                        <option value='vue'>vue</option>
                    </select>
                </div>
                <button>Submit</button>

            </form>
        )
    }
}
export default Form