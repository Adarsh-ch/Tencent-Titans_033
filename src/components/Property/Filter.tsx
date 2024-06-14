import React from 'react'

const Filter = () => {
 
  return (
    <div className="filter-section">
          <div className="property-type">
            <p className="type-heading">Property-Type</p>
            <div className="input-box">
              <input type="checkbox" id="buy" />
              <label htmlFor="buy">Buy</label>
            </div>
            <div className="input-box">
              <input type="checkbox" id="sell" />
              <label htmlFor="sell">Sell</label>
            </div>
            <div className="input-box">
              <input type="checkbox" id="rent" />
              <label htmlFor="rent">Rent</label>
            </div>
          </div>

          <div className="funiture-type">
            <p className="type-heading">Funiture-Type</p>
            <div className="input-box">
              <input type="checkbox" id="fully-furnished" />
              <label htmlFor="fully-furnished">Fully Furnished</label>
            </div>
            <div className="input-box">
              <input type="checkbox" id="semi-furnished" />
              <label htmlFor="semi-furnished">Semi Furnished</label>
            </div>
            <div className="input-box">
              <input type="checkbox" id="unfurnished" />
              <label htmlFor="unfurnished">Unfurnished</label>
            </div>
          </div>

          <div className="flat_type">
            <p className="type-heading">Flat-Type</p>
            <div className="input-box">
              <input type="checkbox" id="1bhk" />
              <label htmlFor="1bhk">1 BHK</label>
            </div>
            <div className="input-box">
              <input type="checkbox" id="2bhk" />
              <label htmlFor="2bhk">2 BHK</label>
            </div>
            <div className="input-box">
              <input type="checkbox" id="3bhk" />
              <label htmlFor="3bhk">3 BHK</label>
            </div>
          </div>

          <div className="prefer_category">
            <p className="type-heading">Prefer-Category</p>
            <div className="input-box">
              <input type="checkbox" id="family" />
              <label htmlFor="family">Family</label>
            </div>
            <div className="input-box">
              <input type="checkbox" id="female" />
              <label htmlFor="female">Female</label>
            </div>
            <div className="input-box">
              <input type="checkbox" id="bachelor" />
              <label htmlFor="bachelor">Bachelor</label>
            </div>
          </div>

          <div className="price">
            <p className="type-heading">Price</p>
            <div className="input-box">
              <input type="checkbox" id="low-to-high" />
              <label htmlFor="low-to-high">Low To High</label>
            </div>
            <div className="input-box">
              <input type="checkbox" id="high-to-low" />
              <label htmlFor="high-to-low">High To Low</label>
            </div>
            <div className="input-box">
              <input type="checkbox" id="any" />
              <label htmlFor="any">Any</label>
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
            >
              Remove Filters
            </button>
          </div>
        </div>
  )
}

export default Filter
