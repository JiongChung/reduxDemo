import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddName from './component/AddName';
import News from './component/News';

class App extends Component {
    
    render() {
      return (
          <Router>
            <div>           
  
                <header className="title">
                
                  <Link to="/">首页</Link>
  
                  <Link to="/news">新闻</Link>
  
                </header>
  
  
                 <br />
                 <hr />
        
                 <br />
        
        
                <Route exact path="/"component={AddName} />
                <Route path="/news" component={News} />                    
            </div>
        </Router>
      );
    }
  }
  
  export default App;
