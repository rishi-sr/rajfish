import React from 'react'
import '../styles/seafood.scss'
import fishes from '../fishdata'
import { Link } from 'react-router-dom'
import { IoLogoWhatsapp } from "react-icons/io";

const SeaFood = () => {
  return (
    <>
      <div className="seafood">
        <div className="seafood-header">
          <h1>Sea Food</h1>
          <button>
            <Link to="/sea-food">View More</Link>
          </button>
        </div>
        <hr />
        <div className="seafood-cards">
          {fishes
            .filter(fish => fish.type === "seafood")[0]
            .items.slice(0, 4)
            .map((i, index) => (
              <div className="cards" key={index}>
                <img src={i.URL} alt={i.name} />
                <div className="rate">
                <h2>{i.name}</h2>
                  <span><IoLogoWhatsapp /></span>
                </div>
                  <p>{i.rate}</p>

              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default SeaFood
