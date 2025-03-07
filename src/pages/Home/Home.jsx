import React from 'react'
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featured/Featured"
import PropertyList from '../../components/propertyList/PropertyList'
import HomeGuest from '../../components/homeGuest/HomeGuest'
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import "./home.css"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home guests love</h1>
        <HomeGuest/>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home
