import { useDispatch } from 'react-redux';
import { RESET_FILTERS, SET_CATEGORY, SET_FLAT_TYPE, SET_FURNITURE_TYPE, SET_ORDER, SET_PROPERTY_TYPE } from '../../redux/actionTypes';
import useQuery from '../../hooks/useQuery';



const Filter = () => {
    const dispatch = useDispatch();
    const {queryString} = useQuery();
   
 
  return (
    <div className="filter-section">
          <div className="property-type">
            <p className="type-heading">Property-Type</p>
            <div className="input-box">
              <input className="form-check-input" type="radio" id="buy" name="property" value='Buy' onChange={(e)=> {
                dispatch({type:SET_PROPERTY_TYPE,payload:e.target.value})
                }
            }/>
              <label htmlFor="buy">Buy</label>
            </div>
            <div className="input-box">
              <input className="form-check-input" type="radio" id="sell" name="property" value='Sell' onChange={(e)=> dispatch({type:SET_PROPERTY_TYPE,payload:e.target.value})}/>
              <label htmlFor="sell">Sell</label>
            </div>
            <div className="input-box">
              <input className="form-check-input" type="radio" id="rent" name="property" value='Rent' onChange={(e)=> dispatch({type:SET_PROPERTY_TYPE,payload:e.target.value})}/>
              <label htmlFor="rent">Rent</label>
            </div>
            <div className="input-box">
              <input className="form-check-input" type="radio" id="anyproperty" name="property" value='' onChange={(e)=> {
                dispatch({type:SET_PROPERTY_TYPE,payload:e.target.value})
                }
            }/>
            <label htmlFor="anyproperty">Any</label>
            </div>
          </div>

          <div className="funiture-type">
            <p className="type-heading">Funiture-Type</p>
            <div className="input-box">
              <input className="form-check-input" type="radio" id="fully-furnished" name="furniture" value='Fully Furnished' onChange={(e)=> dispatch({type:SET_FURNITURE_TYPE,payload:e.target.value})}/>
              <label htmlFor="fully-furnished">Fully Furnished</label>
            </div>
            <div className="input-box">
              <input className="form-check-input" type="radio" id="semi-furnished" name="furniture" value='Semi Furnished' onChange={(e)=> dispatch({type:SET_FURNITURE_TYPE,payload:e.target.value})}/>
              <label htmlFor="semi-furnished">Semi Furnished</label>
            </div>
            <div className="input-box">
              <input className="form-check-input" type="radio" id="unfurnished" name="furniture" value='Unfurnished' onChange={(e)=> dispatch({type:SET_FURNITURE_TYPE,payload:e.target.value})}/>
              <label htmlFor="unfurnished">Unfurnished</label>
            </div>
            <div className="input-box">
              <input className="form-check-input" type="radio" id="anyfurnished" name="furniture" value='' onChange={(e)=> dispatch({type:SET_FURNITURE_TYPE,payload:e.target.value})}/>
              <label htmlFor="anyfurnished">Any</label>
            </div>
          </div>

          <div className="flat_type">
            <p className="type-heading">Flat-Type</p>
            <div className="input-box">
              <input className="form-check-input" type="radio" id="1bhk" name="flat" value='1 BHK' onChange={(e)=> {
                dispatch({type:SET_FLAT_TYPE,payload:e.target.value})
                console.log(queryString)
              }}/>
              <label htmlFor="1bhk">1 BHK</label>
            </div>
            <div className="input-box">
              <input className="form-check-input" type="radio" id="2bhk" name="flat" value='2 BHK' onChange={(e)=> dispatch({type:SET_FLAT_TYPE,payload:e.target.value})}/>
              <label htmlFor="2bhk">2 BHK</label>
            </div>
            <div className="input-box">
              <input className="form-check-input" type="radio" id="3bhk" name="flat" value='3 BHK' onChange={(e)=> dispatch({type:SET_FLAT_TYPE,payload:e.target.value})}/>
              <label htmlFor="3bhk">3 BHK</label>
            </div>
            <div className="input-box">
              <input className="form-check-input" type="radio" id="anybhk" name="flat" value='' onChange={(e)=> dispatch({type:SET_FLAT_TYPE,payload:e.target.value})}/>
              <label htmlFor="anybhk">Any</label>
            </div>
          </div>

          <div className="prefer_category">
            <p className="type-heading">Prefer-Category</p>
            <div className="input-box">
              <input className="form-check-input" type="radio" id="family" name="category" value='Family' onChange={(e)=> dispatch({type:SET_CATEGORY,payload:e.target.value})}/>
              <label htmlFor="family">Family</label>
            </div>
            <div className="input-box">
              <input className="form-check-input" type="radio" id="female" name="category" value='Female' onChange={(e)=> dispatch({type:SET_CATEGORY,payload:e.target.value})}/>
              <label htmlFor="female">Female</label>
            </div>
            <div className="input-box">
              <input className="form-check-input" type="radio" id="bachelor" name="category" value='Bachelor' onChange={(e)=> dispatch({type:SET_CATEGORY,payload:e.target.value})}/>
              <label htmlFor="bachelor">Bachelor</label>
            </div>
            <div className="input-box">
              <input className="form-check-input" type="radio" id="anycategory" name="category" value='' onChange={(e)=> dispatch({type:SET_CATEGORY,payload:e.target.value})}/>
              <label htmlFor="anycategory">Any</label>
            </div>
          </div>

          <div className="price">
            <p className="type-heading">Price</p>
            <div className="input-box">
              <input className="form-check-input" type="radio" id="low-to-high" name="price" value='asc' onChange={(e)=> dispatch({type:SET_ORDER,payload:e.target.value})}/>
              <label htmlFor="low-to-high">Low To High</label>
            </div>
            <div className="input-box">
              <input className="form-check-input" type="radio" id="high-to-low" name="price" value='desc' onChange={(e)=> {
                dispatch({type:SET_ORDER,payload:e.target.value})
                console.log(queryString)
              }}/>
              <label htmlFor="high-to-low">High To Low</label>
            </div>
            <div className="input-box">
              <input className="form-check-input" type="radio" id="anyorder" name="price" value='' onChange={(e)=> dispatch({type:SET_ORDER,payload:e.target.value})}/>
              <label htmlFor="anyorder">Any</label>
            </div>
          </div>

          <div className="my-4 mx-auto">
            <button
              className="p-2"
              style={{
                backgroundColor: 'green',
                color: 'white',
                border: 'none',
              }}
              onClick={()=> {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                dispatch({type:RESET_FILTERS})
              }}
            >
              Remove Filters
            </button>
          </div>
        </div>
  )
}

export default Filter
