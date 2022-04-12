import React from 'react'

// Components
import Hero from "./Hero"
import Cards from "./Cards"
import Services from "./Services"
import Features from "./Features"

export default function index() {
    return (
        <>
            <h1>Home Section Starting</h1>
            <Hero />
            <Cards />
            <Services />
            <Features />
            <h1>Home Section Ending</h1>
        </>
    )
}
