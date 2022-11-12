import React from 'react'
import Basic from './Basic'
import Advance from './Advance'
import {AiOutlineStar} from 'react-icons/ai'
import { NavLink, Route,BrowserRouter as Router, Switch } from 'react-router-dom'



const Membership = () => {
  return (
    <div className='wrap-5'>
      <div className="container">
        <div className="row">
          <p className='membershipHead'>You have applied for Basic membership</p>
           <div className="col-12 centre">
           <Router>
              <NavLink activeStyle={{color:'#fff'}} className='planSize'  to='/b' >Basic <span style={{verticalAlign:'middle',color:'#e8c506'}}><AiOutlineStar/></span></NavLink>
              <NavLink activeStyle={{color:'#fff'}} className='planSize' to='/advance'>Advance <span style={{verticalAlign:'middle',color:'#e8c506'}}><AiOutlineStar/></span></NavLink>
              <Switch>
                <Route path="/b" component={Basic} exact></Route>
                <Route path="/advance" component={Advance}></Route>
              </Switch>
            </Router>
           </div>
          </div>
      </div>
    </div>
  )
}

export default Membership