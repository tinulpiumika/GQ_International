import React from "react";
import {Link} from 'react-router-dom'
import './Footer.css'
//import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
//import'mdbreact/dist/css/mdb.css';

import GQ1 from '../images/footer-logo.png'

 

const FooterPage = () => {
  return (

    <div className='Footer1'>


 
    <Link to= '/' className='navbar-log'>
                            <img src={GQ1} height='200px' width='200px;' alt="GQ logo" className="gq-logo-footer"/>
                            
      </Link>
      <h2 className= 'gq-footer-title' style={{color:"red"}}>GQ INTERNATIONAL</h2>



      <div >
      <div className = "Social"> 

            <i className='fab fa-facebook' id='fb' style={{color:"#34b7f1"}} ></i>

            <i className='fab fa-whatsapp' id='fb' style={{color:"#25d366"}}></i>

            <i className='fab fa-viber' id='fb' style={{color:"#B026FF"}}></i>
      </div>
      <div>
        <h6 className='GQcontact'>Contact: 072 778 7788</h6><br/>
        <h6 className='GQcontactE'>Email: contactgqintl@gmail.com</h6>
      </div>

      </div>


      <div className="address"> 
      
        <h6 className='address-1'>231/10 2/3</h6><br/>
        <h6 className='address-2'>Panchikawatta Rd,</h6><br/>
        <h6 className='address-3'>Colombo 10</h6><br/>
      
      </div>

      
 


    </div>

  );
}

 

export default FooterPage;