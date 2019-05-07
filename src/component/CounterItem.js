import React, { Component } from 'react';
import {
    addCounter
} from '../redux/action'

const style = {
    margin:'10px'
};

class CounterItem extends Component {
    constructor(props) {
        super(props);
        this.state= {
            number: 0
        };
        
    }
    getOwnState = () => {
        var {store}=this.props;
        var state=store.getState();
        this.setState({number: state.toCountr});
    }

    componentWillMount(){
        this.getOwnState();
    }

    addCounter = () => {
        var{store}=this.props;
        var s = this.state.number;
        this.setState({
            number: s+1
        },() => store.dispatch(addCounter(this.state.number)))
        setTimeout(() => {
            this.props.listenSearch(this.state.number);   
        });
        
    }

    render() {
        var num=this.state.number;
        return (
            <div style={style}>
                <button onClick={this.addCounter}> + </button>
                    <span>{num}</span>
                <button onClick={this.removeCounter}> - </button>
            </div>
        );
    }
}
export default CounterItem;