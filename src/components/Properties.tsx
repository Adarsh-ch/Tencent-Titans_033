// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// interface Property {
//     image: string;
//     title: string;
//     description: string;
//     amenities: string[];
//     rent_per_month: number;
//     for_sell: boolean;
//     tags: string[];
//     like: number;
//     view: number;
//     add_favorites: number;
//     id: string;
// }

// export const Properties: React.FC = () => {
//     const [properties, setProperties] = useState<Property[]>([]);

//     useEffect(() => {
//         axios.get<Property[]>('http://localhost:3000/route')
//             .then(response => {
//                 setProperties(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []);

//     return (
//         <div>
//             <h1 className='heading-cards'>Featured Listings</h1>
//             <div className="properties-list">
//                 {properties.map(property => (
//                     <div key={property.id} className="property-card">
//                         <div className="image-container">
//                             <img src={property.image} alt={property.title} />
//                             <div className="property-icons">
//                                 <span className="material-symbols-outlined">favorite</span>{property.like}{' '}
//                                 <span className="material-symbols-outlined">visibility</span>{property.view}{' '}
//                                 <span className="material-symbols-outlined">star</span>{property.add_favorites}
//                             </div>
//                         </div>
//                         <h4 className='price'>${property.rent_per_month}/month</h4>
//                         <h4>{property.title}</h4>
//                         <h5>{property.description}</h5>
                      
//                         <p><b></b>{property.tags.join(', ')}</p>
//                         <hr></hr>
//                         <div className='amenities'>
//                       <img src="https://via.placeholder.com/48" alt="" />
//                         <p className='text'>{property.amenities.join(', ')}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Property {
    image: string;
    title: string;
    description: string;
    amenities: string[];
    rent_per_month: number;
    for_sell: boolean;
    tags: string[];
    like: number;
    view: number;
    add_favorites: number;
    id: string;
}

export const Properties: React.FC = () => {
    const [properties, setProperties] = useState<Property[]>([]);

    useEffect(() => {
        axios.get<Property[]>('http://localhost:3000/route')
            .then(response => {
                setProperties(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    return (
        <div>
            <h1 className='heading-cards'>Featured Listings</h1>
            <Slider {...settings}>
                {properties.map(property => (
                    <div key={property.id} className="property-card">
                        <div className="image-container">
                            <img src={property.image} alt={property.title} />
                            <div className="property-icons">
                                <span className="material-symbols-outlined">favorite</span>{property.like}{' '}
                                <span className="material-symbols-outlined">visibility</span>{property.view}{' '}
                                <span className="material-symbols-outlined">star</span>{property.add_favorites}
                            </div>
                        </div>
                        <h4 className='price'>${property.rent_per_month}/month</h4>
                        <h4>{property.title}</h4>
                        <h5>{property.description}</h5>
                        <p><b></b>{property.tags.join(', ')}</p>
                        <hr></hr>
                        <div className='amenities'>
                            <img src="https://via.placeholder.com/48" alt="" />
                            <p className='text'>{property.amenities.join(', ')}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};




