import React from 'react'
import { NavBar } from '../TopSection/topSection';
import FooterSection from '../Footer/footerSection';
import './Services.css'
import TabSection from '../TabSection/tabSection';

const Services = () => {
    return (
        <>
            <NavBar />
            <main className='serviceContainer'>
                <TabSection />
            </main>
            <FooterSection />
        </>
    )
}

export default Services;