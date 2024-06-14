import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const useQuery = () => {
    const filter = useSelector((store: RootState) => store.filter);

    const queryParams: string[] = [];
  if (filter.location) queryParams.push(`location=${filter.location}`);
  if (filter.propertyType)
    queryParams.push(`property_type=${filter.propertyType}`);
  if (filter.category)
    queryParams.push(`prefer_category_like=${filter.category}`);

  const queryString =
    queryParams.length > 0
      ? `?rent_lt=${filter.rent}&area_lt=${filter.area}&_limit=${filter.limit}&_page=${filter.page}&${queryParams.join(
          '&'
        )}`
      : `?rent_lt=${filter.rent}&area_lt=${filter.area}&_limit=${filter.limit}&_page=${filter.page}`;

  return queryString;
}

export default useQuery
