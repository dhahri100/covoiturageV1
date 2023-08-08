import React from 'react'
import Header from '../components/Header'
import covoi from   '../images/covoi.png'
const Home = () => {
  return (
    <div>
        <Header/>
        <div className="flex justify-center my-1">
        <img src={covoi} alt="Covoi Image" className="w-screen h-[400px] " />
        </div>
    </div>
  )
}

export default Home