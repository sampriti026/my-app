import React, {Component} from 'react';

class welcome extends Component {
    render() {
        return (
            <h1>
            Welcome {this.props.name} aka {this.props.heroname}
            </h1>
        )
    }
}

export default welcome
