import './css/App.css';
import React, { useEffect,useState }  from 'react';
import NavBar from './components/NavBar';
import Profile from './sections/Profile';
import Biography from './sections/Biography';
import Skills from './sections/Skills';
import ProfessionalExp from './sections/ProfessionalExp';
import Education from './sections/Education';
import Projects from './sections/Projects';
import ContactMe from './sections/ContactMe';
import Footer from './components/Footer';
import $ from 'jquery';

function App() {
  const [loader,setLoader] = useState(true);

  

  useEffect(() =>
  {
    // showLoader();
    
    setTimeout(()=>hideLoader(),2000);
    $(window).on('load', function(){
      $('#preloader').delay(2050).fadeOut('slow');
      $('body').delay(3850).css({'overflow':'visible'});
  });

},[]);

const hideLoader = () => setLoader(false);

  return (
    <>
      {loader && <div id="preloader">
          <div id="status"></div> 
      </div> 
      }
      <NavBar/>
      <Profile />
      <Biography />
      <Skills/>
      <ProfessionalExp />
      <Education/>
      <Projects />
      <ContactMe />
      <Footer />
      </>
  );
}

export default App;
