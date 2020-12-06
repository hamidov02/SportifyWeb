import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent'; 
import StadiumDetail from './StadiumDetail';
import User from './User/User';
import Owner from './Owner/Owner';
import { STADIUM } from '../shared/stadium';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    state = {
        stadiums: STADIUM
    };
    
    render() { 

        const StadiumWithId = ({match}) => {
            return(
                <StadiumDetail stadium={this.state.stadiums.filter((stadium) => stadium.id === parseInt(match.params.stadiumId,10))[0]} />
            );
          };

        return ( 
            <div>
                <Header />
                
                
                <Switch>
                    {/* <Route path='/home' component={HomePage} /> */}
                    <Route exact path='/home' component={() => <Home dishes={this.state.stadiums} />} />
                    {/* <Route path="/signup" component={SignUp} /> */}
                    <Route path="/home/:stadiumId" component={StadiumWithId} />
                    {/* <Route exact path='/contactus' component={Contact} /> */}
                    
                    
                    {/* <Redirect to="/home" /> */}
                </Switch>
                <Footer />
                <Route  path="/user" component={User} />
                <Route  path="/owner" component={Owner} />
            </div>
         );
    }
}
 
export default Main;