import { useEffect, useState } from 'react';
import { fetchData } from '../../services/api';
import useQuery from '../../hooks/useQuery';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { SET_PAGE, SET_PREV } from '../../redux/actionTypes';

const PaginationComponent = () => {
  const [count, setCount] = useState(0);
  const filter = useSelector((store: RootState) => store.filter);
  const {queryString,propertyString} = useQuery();
  const dispatch = useDispatch();
  console.log(filter.prev,count,propertyString)

  const handlePrev = () => {
    dispatch({ type: SET_PREV, payload: filter.prev - 3 });
    dispatch({ type: SET_PAGE, payload: filter.prev - 1 });
  };

  const handleNext = () => {
    dispatch({ type: SET_PREV, payload: filter.prev + 3 });
    dispatch({ type: SET_PAGE, payload: filter.prev + 3 });
  };

  useEffect(() => {
    const loadProperties = async () => {
      const response = await fetchData(propertyString);
      setCount(response.length);
    };
    loadProperties();
  }, [propertyString]);

  return (
    <div className="d-flex pagination">
      <button disabled={filter.prev == 1} onClick={handlePrev}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button
        disabled={(filter.prev-1)*6 >= count}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
          dispatch({ type: SET_PAGE, payload: filter.prev })
        }}
        style={{
          backgroundColor: filter.page == filter.prev ? 'green' : 'white',
          color: filter.page == filter.prev ? 'white' : 'black',
        }}
      >
        {filter.prev}
      </button>
      <button
        disabled={filter.prev*6 >= count}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
          dispatch({ type: SET_PAGE, payload: filter.prev + 1 })
        }}
        style={{
          backgroundColor: filter.page == filter.prev + 1 ? 'green' : 'white',
          color: filter.page == filter.prev + 1 ? 'white' : 'black',
        }}
      >
        {filter.prev + 1}
      </button>
      <button
        disabled={(filter.prev + 1)*6 >= count}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
          dispatch({ type: SET_PAGE, payload: filter.prev + 2 })
        }}
        style={{
          backgroundColor: filter.page == filter.prev + 2 ? 'green' : 'white',
          color: filter.page == filter.prev + 2 ? 'white' : 'black',
        }}
      >
        {filter.prev + 2}
      </button>
      <button
        disabled={filter.prev + 3 > count / 6 + (count % 6 == 0 ? 0 : 1)}
        onClick={handleNext}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default PaginationComponent;
