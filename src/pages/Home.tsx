import React from 'react';
import SearchBar from '../components/common/SearchBar';
import '../styles/Home.css'
import Home_1 from '../assets/Images/House-1.jpeg'
import Home_2 from '../assets/Images/House-2.jpeg'
import Footer from '../components/common/Footer';
const Home: React.FC = () => {

  return <><div className='container-H'>
    <div className='container-H-image'>
    {/* <div className="overlay"></div> */}
    <div className="text-content">
      <h6>Welcome to <span>estateX</span></h6>
        <h2>We are a real estate agency</h2>
          <p>
            The customer is very important, the customer will be followed by the customer. He needs fear
            and hatred for the life of the ultricies in the world. In order to solve the problem, the
              most important thing is to put the eros. There is nothing easy.
                        </p>
             <div className="d-flex mt-4 justify-content-center justify-content-md-start">
          <a href="#" className="a-1" role="button">Make an enquiry</a>
           <a href="#" className="play-video-btn pulse" role="button" title="Watch video">
          <i className="bx bx-play"></i>
           </a>
           </div>
           </div>
    </div>
   
     <SearchBar />
    {/* About us section  */}
    <div className='About-section'>
       <div className='About-section-1'>
        <img src={Home_1} alt="" />
        <img src={Home_2} alt="" />
       </div>
       <div className='About-section-2'>
        <h4>About us</h4>
        <h1>The Leading Real Estate Rental Marketplace.</h1>
        <p>Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services</p>
        <div className='About-section-2-inner'>
        <div><span><span className="material-symbols-outlined">home</span>Smart Home Design</span> <span><span className="material-symbols-outlined">fitness_center</span>Exceptional Lifestyle</span></div>
        <div><span><span className="material-symbols-outlined">health_and_beauty</span>Beautiful Scene Around</span> <span><span className="material-symbols-outlined">24mp</span>Complete 24/7 Security</span></div>
        </div>
        <div className='Alert-section'>
          <p>"Enimad minim veniam quis nostrud exercitation llamco laboris. Lorem ipsum dolor sit amet"</p>
        </div>
        <button>OUR SERVICES</button>
       </div>
    </div>
    {/* About section ends */}
   
  </div>
  <Footer />
  </>
};

export default Home;
