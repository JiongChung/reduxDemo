import React, { Component } from 'react';
import CounterItem from './CounterItem';
import store from '../redux/store';

const style = {
    width:'200px',
    backgroundColor:'skyblue',
    margin: '20px'
};
class Counter extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            sum: 0
        };
    }

    getOwnState = () => {
        var state= store.getState();
        this.setState({sum: state.toCountr})
    }
    componentWillMount(){
        this.getOwnState();
    }

    getSearchData = (data) => {
        this.setState({
            sum: data
        })
    }

    render() {
        const sum =this.state.sum;
        return (
            <div style={style}>
                <CounterItem listenSearch={this.getSearchData} props={this.props} store={store}></CounterItem>
                <div>
                    合计：<span>{sum}</span>
                </div>
            </div>
        );
    }
}
export default Counter;