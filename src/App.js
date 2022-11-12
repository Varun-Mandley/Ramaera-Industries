import React from 'react'
import Profile from './Profile';
import Projects from './Projects';
import Finance from './Finance';
import Support from './Support';
import './Main.css'
import logo from './img/logo1.jpeg'
import { FaRegUser } from 'react-icons/fa'
import { VscGraphLine } from 'react-icons/vsc'
import { TbFilePencil } from 'react-icons/tb'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { VscBellDot } from 'react-icons/vsc'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';


const App = () => {
  return (
    <>
      <div className="wrap-1">
        <div className="container">
          <div className="row">
            <div className='col-12 display saprator'>
              <div>
                <img className='logo' src={logo} alt="" />
                <h2 className='logoName' style={{ display: 'inline-block' }}>Ramaera industries</h2>
              </div>
              <div>
                <label >
                  <span className='bellIcon' style={{fontSize:'22px',verticalAlign:'middle'}}><VscBellDot /></span>
                  <select className='lang' name="" id="">
                    <option value="English"> English(UK)</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrap-2">
        <div className="container">
          <div className="row">
            <Router>
              <div className='flexDirection lineBreak col-3 col-i-12' >
                <NavLink activeStyle={{color:"white"}} className='navLink' to='/' exact> <span style={{ verticalAlign: 'middle' }}><FaRegUser /></span> Profile</NavLink>
                <NavLink activeStyle={{color:"white"}} className='navLink navLinkKey' to='/projects'> <span style={{ verticalAlign: 'middle' }}><TbFilePencil /></span> Projects</NavLink>
                <NavLink activeStyle={{color:"white"}} className='navLink navLinkKey' to='/finance'> <span style={{ verticalAlign: 'middle' }}><VscGraphLine /></span> Finance</NavLink>
                <NavLink activeStyle={{color:"white"}} className='navLink navLinkKey' to='/support'> <span style={{ verticalAlign: 'middle' }}><AiOutlineExclamationCircle /></span> Support</NavLink>
              </div>
              <div className='col-9'>
                <Switch>
                  <Route path="/" component={Profile} exact></Route>
                  <Route path="/projects" component={Projects}></Route>
                  <Route path="/finance" component={Finance}></Route>
                  <Route path="/support" component={Support}></Route>
                </Switch>
              </div>
            </Router>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;