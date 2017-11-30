import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';
import './navBar.css'

var Nav = observer(class Nav extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    var successLogin = this.props.userStore.user;
    if (successLogin) { 
      if(this.props.userStore.user.admin === "admin"){
        return(
          <Menu className='navbar'>
            
            <Menu.Menu position='right'>
           
              <Link className="item" to="/admin">Admin</Link>
              <Link className="item" to="/fancyCalendar">Calendar</Link>
              <Link className="item" to="/logout">Log Out</Link>
            </Menu.Menu>
          </Menu>
        ) 
    } else {
      
        return (
                    <Menu className='navbar'>
                      <Menu.Menu position='right'>
                      <Link className="item" to="/fancyCalendar">Calendar</Link>
                        <Link className="item" to="/logout">Log Out</Link>
                      </Menu.Menu>
                    </Menu>
                  )
    
    
    } 
    
  }else {
      return (
        <Menu className='navbar'>
          <Menu.Menu position='right'>
        
            <Link className="item" to="/login"> Login</Link>
            <Link className="item" to="/signup">Sign Up</Link>
          </Menu.Menu>
        </Menu>
      )
  }

  }
});

export default withRouter(inject('userStore')(Nav));
