import React from 'react';
import logo from "../assets/mdb-react.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon,MDBAnimation} from 'mdbreact';
import { NavLink } from 'react-router-dom';
import Routes from './route';

const TopNavigation = () => {
    return (<div>
        <div className="sidebar-fixed position-fixed">
            <a href="#!" className="logo-wrapper waves-effect">
            <MDBAnimation type="bounce" infinite>
                <img alt="MDB React Logo" className="img-fluid"  src={logo}/></MDBAnimation>
            </a>
            <MDBListGroup className="list-group-flush">
               
                <NavLink to="/dashbord" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="chart-pie" className="mr-3"/>
                        Dashboard
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/profile" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="user" className="mr-3"/>
                        Profile
                    </MDBListGroupItem>
                </NavLink>
                
                <NavLink to="/all" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="map" className="mr-3"/>
                        My Projects
                    </MDBListGroupItem>
                </NavLink>
               
            </MDBListGroup>
        </div><Routes/></div>
    );
}

export default TopNavigation;