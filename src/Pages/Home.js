import React from 'react'
import Hero from '../Components/Hero'
import {Link} from "react-router-dom"
import Banner from '../Components/Banner'
import Services from '../Components/Services'
import FeaturedRooms from '../Components/FeaturedRooms'
export default function Home() {
    return (
       <>
            <Hero hero ="defaultHero">
                <Banner title="Luxurious Rooms" subtitle="deluxe rooms starting at $299">
                <Link to="/rooms" className="btn-primary">Our Rooms</Link>
                </Banner>
            </Hero>
            <Services/>
                <FeaturedRooms/>
            </>
        
    )
}
