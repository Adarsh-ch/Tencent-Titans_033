import React from 'react';
import SearchBar from '../components/common/SearchBar';
import '../styles/Home.css'
import Home_1 from '../assets/Images/House-1.jpeg'
import Home_2 from '../assets/Images/House-2.jpeg'
import Footer from '../components/common/Footer';
import service_icon_1 from '../../src/assets/Images/service_icon_1.png'
import service_icon_2 from '../../src/assets/Images/service_icon_2.png'
import service_icon_3 from '../../src/assets/Images/service_icon_3.png'
import sketch from '../../src/assets/Images/sketch.png'

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

  </div>;

    {/* Our services section starts */}
    <div className='our-services'>
      <p>Our Services</p>
      <h1>Our Main focus</h1>
      <div className='services-box'>
        <div className='box-box'>
          <img src={service_icon_1} alt="" />
          <h2>Buy A Home</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat non ipsam deleniti, ipsa doloribus perferendis.</p>
          <p>Find A Home<i className="fa-solid fa-arrow-right"></i> </p>
        </div>
        <div className='box-box'>
          <img src={service_icon_2} alt="" />
          <h2>Rent A Home</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat non ipsam deleniti, ipsa doloribus perferendis.</p>
          <p>Find A Home <i className="fa-solid fa-arrow-right"></i></p>
        </div>
        <div className='box-box'>
          <img src={service_icon_3} alt="" />
          <h2>Sell A Home</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat non ipsam deleniti, ipsa doloribus perferendis.</p>
          <p>Find A Home <i className="fa-solid fa-arrow-right"></i></p>
        </div>
      </div>


    </div>
    {/* Our services section ends */}


    {/* Our Aminities starts */}
    <div className='Our-aminities'>
      <p className='amenities-heading'>Our Aminities</p>
      <h1 className='amenities-heading'>Building Aminities</h1>
      <div className='amenites-box'>
        <div className='amenities-type'>
          <i className="fa-solid fa-car"></i>
          <p><b>Parking Space</b></p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className='amenities-type'>
          <i className="fa-solid fa-water-ladder"></i>
          <p><b>Swimming Pool</b></p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className='amenities-type'>
          <i className="fa-solid fa-shield-halved"></i>
          <p><b>Private Security</b></p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className='amenities-type'>
          <i className="fa-solid fa-notes-medical"></i>
          <p><b>Medical Center</b></p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className='amenities-type'>
          <i className="fa-solid fa-book"></i>
          <p><b>Library Area</b></p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className='amenities-type'>
          <i className="fa-solid fa-bed"></i>
          <p><b>King Size Beds</b></p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className='amenities-type'>
          <i className="fa-solid fa-house"></i>
          <p><b>Smart Homes</b></p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className='amenities-type'>
          <i className="fa-solid fa-child"></i>
          <p><b>Kid’s Playland</b></p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
    </div>
    {/* Our Aminities ends */}



    {/* testimonial starts */}

    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <p className="heading-testimonial">Our Testimonial</p>
      <h1>Clients Feedback</h1>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="testimonial">
          <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg" alt="" />
            <p className="testimonial-text">"Buying our dream home was a seamless experience with XYZ Realty! Their professionalism and dedication made the process stress-free!"" </p>
            <p className="testimonial-author">- John Doe</p>

          </div>
        </div>
        <div className="carousel-item">
          <div className="testimonial">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqx0dk_uNP23GT8VLdWej-tlkGZbfwUDuT5w&s" alt="" />
            <p className="testimonial-text">XYZ Realty helped us find the perfect investment property. Their market knowledge and attention to detail were exceptional. We couldn't be happier!"</p>
            <p className="testimonial-author">- Jane Smith</p>

          </div>
        </div>
        <div className="carousel-item">
          <div className="testimonial">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1hxgNuO6Rdu5_Skx_l40BBj3qweYneKcLCg&s" alt="" />
            <p className="testimonial-text">"From start to finish, XYZ Realty was fantastic. They listened to our needs and delivered beyond our expectations. Truly a top-notch team!"</p>
            <p className="testimonial-author">- Bob Johnson</p>
            
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
       
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      
      </button>
    </div>


    <Footer />
  </>
};

export default Home;
