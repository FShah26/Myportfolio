import React, {useEffect} from 'react';
import '../css/App.css';
import {FaUserAlt, FaAddressBook,FaPhoneAlt,FaGraduationCap,FaBriefcase,FaLaptopCode,FaMedal} from "react-icons/fa"; 
import $ from 'jquery';
export default function NavBar()
{

  const MenuTogglerClose = () => {
    $(window).on('load', function(){
      $('#preloader').delay(2050).fadeOut('slow');
      $('body').delay(3850).css({'overflow':'visible'});
  });
    $(".toggler-menu").on('click', function(){
      $('.header-left').stop().toggleClass('menu-open');
      });
  
    $('.header-left a').on('click', function(){
      var toggle = $('.toggler-menu');
      });
  }

  useEffect(()=>{
    MenuTogglerClose();
},[]);
    return(
    <>
      <div className='mob-header'>
        <div className='d-flex'>
          <div className='navbar-brand'>
          </div>
          <button className='toggler-menu'>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <header className="header-left wow slideInLeft" id="navbar-collapse-toggle">
         <div className="top">
             <a href="#">FS</a>
         </div>
         <ul className="nav nav-menu ">               
             <li>
                 <a href="#home" className="nav-link active" data-toggle="tooltip"  data-animation="58" data-goto="1" >
                 <span className="tooltiptext">Home</span>
                     <FaUserAlt size={30}/>
                 </a>
             </li>           
                 
             <li>
                 <a href="#about" className="nav-link" data-toggle="tooltip">
                 <span className="tooltiptext">About Me</span>
                     <FaAddressBook size={30}/>
                 </a>
             </li>
             <li>
                 <a href="#skills" className="nav-link" data-toggle="tooltip">
                   <span className="tooltiptext">Professional Skills</span>
                     <FaMedal size={30}/>
                 </a>
             </li>
  
             <li>
                 <a href="#experience" className="nav-link" data-toggle="tooltip">
                 <span className="tooltiptext">Professional Experience</span>
                     <FaBriefcase size={30}/>
                 </a>
             </li>

             <li>
                 <a href="#education" className="nav-link" data-toggle="tooltip">
                 <span className="tooltiptext">Education</span>
                     <FaGraduationCap size={30}/>
                 </a>
             </li>                 
                   
             <li>
                 <a href="#projects" className="nav-link" data-toggle="tooltip">
                 <span className="tooltiptext">Projects</span>
                     <FaLaptopCode size={30}/>
                 </a>
             </li>          
                      
             <li>
                 <a href="#contact" className="nav-link" data-toggle="tooltip">
                 <span className="tooltiptext">Contact Me</span>
                     <FaPhoneAlt size={30}/>
                 </a>
             </li>             
         </ul>         
     </header>

    </>
    )
}