import React from 'react'
import Kyc from './Kyc';
import Membership from './Membership';
import { CgFileDocument } from "react-icons/cg"
import { TbSquareToggle } from 'react-icons/tb'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';


const Profile = () => {
  return (
    <div className="wrap-3">
      <div className="container">
        <div className="row">
          <Router>
            <div className="col-6 col-p-12 ">
              <NavLink activeStyle={{ color: "white" }} className='profileLink ' to='/' exact>KYC <span style={{ verticalAlign: 'middle' }}><CgFileDocument /></span></NavLink>
              <div className='head'>
                <p className='kycSubhead'>Your information is collected for Legal <br /> and security purposes only.</p>
              </div>
            </div>
            <div className="col-6 col-p-12">
              <NavLink activeStyle={{ color: "white" }} className='profileLink ' to='/membership'>Membership <span style={{ verticalAlign: 'middle', display: 'inline-block' }}><TbSquareToggle /></span></NavLink>
              <div className='head'>
                <p className='memberSubhead'> Please choose your membership.</p>
              </div>
            </div>
            <Switch>
              <Route path="/" component={Kyc} exact></Route>
              <Route path="/membership" component={Membership}></Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  )
}

export default Profile