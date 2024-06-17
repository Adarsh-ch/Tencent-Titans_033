import PropertyCard from './PropertyCard';
import { RootState} from '../../redux/store';
import { useSelector } from 'react-redux';

const WishList = () => {
    const {user_wishlist} = useSelector((store:RootState) => store.user);
    console.log(user_wishlist);
    
  return (
    <div>
      <div className="property-list">
          {user_wishlist.map((property:any) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
    </div>
  )
}

export default WishList
