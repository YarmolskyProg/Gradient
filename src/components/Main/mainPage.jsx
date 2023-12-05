import React from 'react'
import Benefits from './Benefits'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import Partners from './Partners'
import Reserv from './Reserv'

export default function MainPage() {
    return (
        <>
            <div className="mainindex">
                <Header />
                <Main />
            </div>
            <div className="HIW"></div>
            <Benefits />
            <Partners />
            <Reserv />
            <Footer />
        </>
    )
}
