import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/PostYourProperty.css'
import { Link } from 'react-router-dom';


interface Property {
  description: string;
  title:string
  location: string;
  rent: number;
  maintenance: string;
  area: number;
  furnitureType: 'Semi Furnished' | 'Fully Furnished' | 'Unfurnished';
  flatType: '1 RK' | '1 BHK' | '2 BHK' | '3 BHK' | '4 BHK';
  preferCategory: 'Bachelor' | 'Couple' | 'Family';
  image: string;
}

const PostYourProperty: React.FC = () => {
  const [property, setProperty] = useState<Property>({
    description:'',
    title:'',
    location: '',
    rent: 0,
    maintenance: '',
    area: 0,
    furnitureType: 'Semi Furnished',
    flatType: '1 RK',
    preferCategory: 'Bachelor',
    image: '',
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProperty(prev => ({
      ...prev,
      [name]: name === 'rent' || name === 'area' ? Number(value) : value,
    }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/properties', property);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error posting property:', error);
    }
  };

  return (
    <>
    <div className='Container-h'>
        <h3>Sell or Rent your Property For Free</h3>
        <span>Looking for a property?<Link to={"/properties"}>click here</Link></span>
    </div>
    <div className='Container-p'>
        <div className='container-one'>
      <h5>Why post through us</h5>
       <ul>
        <li><img src="https://assets.nobroker.in/static/img/postYourProperty/Zero_Brokerage.svg" alt="" /><span>Zero Brokerage</span></li>
        <li> <img src="https://assets.nobroker.in/static/img/postYourProperty/Tenant.svg" alt="" /><span>Faster Tenants</span></li>
        <li><img src="https://assets.nobroker.in/static/img/postYourProperty/tenant_buyer_connections.svg" alt="" /><span>10 lac tenants/buyers connections</span></li>
       </ul>

       <div>
        <p>30 Lac+ Home Owners Trust Us</p>
        <span>NoBroker is doing a very good job out there saving us all from the general brokers and from all those extra brokerage expenses. They have a lot of real estate ads and options to choose from, they will be with you until you find your house. They did a great job by helping me throughout the whole process.</span>
       </div>
      </div>
      
      <form onSubmit={handleSubmit} className='form-p'>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={property.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={property.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={property.location}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Rent:</label>
          <input
            type="number"
            name="rent"
            value={property.rent}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Maintenance:</label>
          <input
            type="text"
            name="maintenance"
            value={property.maintenance}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Area (sq ft):</label>
          <input
            type="number"
            name="area"
            value={property.area}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Furniture Type:</label>
          <select
            name="furnitureType"
            value={property.furnitureType}
            onChange={handleChange}
            required
          >
            <option value="Semi Furnished">Semi Furnished</option>
            <option value="Fully Furnished">Fully Furnished</option>
            <option value="Unfurnished">Unfurnished</option>
          </select>
        </div>
        <div>
          <label>Flat Type:</label>
          <select
            name="flatType"
            value={property.flatType}
            onChange={handleChange}
            required
          >
            <option value="1 RK">1 RK</option>
            <option value="1 BHK">1 BHK</option>
            <option value="2 BHK">2 BHK</option>
            <option value="3 BHK">3 BHK</option>
            <option value="4 BHK">4 BHK</option>
          </select>
        </div>
        <div>
          <label>Preferred Category:</label>
          <select
            name="preferCategory"
            value={property.preferCategory}
            onChange={handleChange}
            required
          >
            <option value="Bachelor">Bachelor</option>
            <option value="Couple">Couple</option>
            <option value="Family">Family</option>
          </select>
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={property.image}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Post your property</button>
      </form>
      
    </div>
    </>
  );
};

export default PostYourProperty;