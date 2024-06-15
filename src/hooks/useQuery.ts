import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const useQuery = () => {
  const filter = useSelector((store: RootState) => store.filter);

  const queryParams: string[] = [];
  if (filter.location) queryParams.push(`location=${filter.location}`);
  if (filter.propertyType)
    queryParams.push(`property_type=${filter.propertyType}`);
  if (filter.flatType) queryParams.push(`flat_type=${filter.flatType}`);
  if (filter.category)
    queryParams.push(`prefer_category_like=${filter.category}`);
  if (filter.order) queryParams.push(`_sort=rent&_order=${filter.order}`);

  const queryString = `/properties?rent_lt=${filter.rent}&area_lt=${filter.area}&_limit=${
    filter.limit
  }&_page=${filter.page}&${queryParams.join('&')}`;

  const propertyString = `/properties?rent_lt=${filter.rent}&area_lt=${filter.area}&${queryParams.join('&')}`;

  return {queryString,propertyString}
};

export default useQuery;
