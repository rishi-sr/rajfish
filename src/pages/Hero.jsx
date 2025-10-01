import React from 'react'
import '../styles/hero.scss'
import '../i18n'
import { useTranslation } from 'react-i18next'
const dish=[
    {
        id:1,
        img:"dish1.jpg"
    },
    {
        id:2,
        img:"dish2.jpg"

    },
    {
        id:3,
        img:"dish3.jpg"
    },
    {
        id:4,
        img:"dish4.jpg"
    }
]


const Hero = () => {
  const { t } = useTranslation()
  return (
    <>
    <div className="hero">
        <div className="hero-details">
            <div className="herodata">
                <p>{t('hero.title')}</p>
                <div className="dish">
                    {dish.map((item,id)=>(
                    <div className="dishimg" key={id}>
                        <img src={item.img} alt="" />
                    </div>
                ))}
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero
