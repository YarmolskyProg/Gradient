import React, { useState } from 'react'
import Footer from '../Main/Footer'
import Header from '../Main/Header'
import Exchange from './ExchangeFirstStep'
import ExchangeSecond from './ExchangeSecondStep'
import OrderDetails from './OrderDetails'

export default function ExchangePage() {
    const [redirect, setredirect] = useState(false);
    return (
        <>
            <div class="exchangepromo">
                <Header />
            </div>
            <main>
                <div className="tradewidget" id="bit_exchange_box">
                    <OrderDetails />
                    {
                        redirect ? <ExchangeSecond /> : <Exchange setredirect={setredirect} />
                    }
                    {/* <Exchange /> */}
                    {/* <ExchangeSecond /> */}
                </div >
            </main >


            <Footer />
        </>
    )
}
