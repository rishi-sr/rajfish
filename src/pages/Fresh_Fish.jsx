import React from 'react'
import '../styles/fresh_fish.scss'
import fishes from '../fishdata'

const Fresh_Fish = () => {
  return (
    <>
    <div className="fresh_fish">
  <div className="fresh_fish_banner">
    <div className="img">
      <img src="freshfishbanner.jpg" alt="Fresh Fish Banner" />
    </div>
  </div>

  <div className="fresh_fish_content">
    <div className="fresh_fish_header">
      <h1>Fresh Fish</h1>
      <input type="search" placeholder="Search fresh fish..." />
    </div>

    <div className="fresh_fish_list">
      {fishes
        .filter(fish => fish.type === "freshwater")
        .map((ff, index) => (
          <div className="fresh_fish_card" key={index}>
            <div className="fresh_fish_img">
              <img src={ff.URL} alt={ff.name} />
            </div>
            <div className="fresh_fish_info">
              <div className="fresh_fish_data">
                <h3>{ff.name}</h3>
                <p>{ff.description}</p>
                <p className="price">₹{ff.price}</p>
              </div>
              <div className="fresh_fish_order">
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  </div>
</div>
    </>
  )
}

export default Fresh_Fish
