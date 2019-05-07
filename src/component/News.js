import React,  { Component } from 'react';
import store from '../redux/store';
import {
    addCounter,
    addbanner
} from '../redux/action'
import axios from 'axios';

export default class News extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            banerrList: []
        };
        
    }

    getOwnStates = () => {
        var state= store.getState();
        this.setState({
            count: state.toCountr
        })
    }
    

    componentWillMount(){
        this.getOwnStates();
        this.getHomeSlide('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1');
    }

    getHomeSlide(url){
        axios.get(url).then(result => {
            this.setState({
                banerrList: result.data.result.slide
            });
            store.dispatch(addbanner(result.data.result.slide))
        })
    }
    add = () => {
        var s = this.state.count;
        this.setState({
            count: s+1
        },() => store.dispatch(addCounter(this.state.count)))
       
    }

    reload = () => {
        var state= store.getState();
        console.log(state)
    }

    render(){
        return(
            <div>
                News: {this.state.count}<br />
                <button onClick={this.add}>添加</button>
                <br />
                <button onClick={this.reload}>重新加载</button>
            </div>
        )
    }
}