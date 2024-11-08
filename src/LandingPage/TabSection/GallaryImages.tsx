import React from 'react'
import { NavBar } from '../TopSection/topSection'
import FooterSection from '../Footer/footerSection'
import { Image } from 'antd';
import "./GallaryImages.css"

const GallaryImages = () => {

    const images = [
        "https://img.freepik.com/free-photo/japanese-house-entrance-trees_23-2149301040.jpg?t=st=1731000262~exp=1731003862~hmac=e96e4bf65be48baa2fabaadb409ebb01f19480dcd1e1e39a3fabfb250b112d0d&w=996",
        "https://img.freepik.com/free-vector/open-closed-white-wooden-doors_1441-4168.jpg?t=st=1730987499~exp=1730991099~hmac=7a4d8b2783461830b4c663ebe52b858a04d4968e75d01ffd6b04fd46fb75d8d7&w=996",
        "https://img.freepik.com/free-vector/realistic-red-sofa_1284-13507.jpg?t=st=1731000480~exp=1731004080~hmac=12fce8f9ecde4af14c7bc37c1d37b14314afa3e0ec6770bc972c7da64bb6f1b6&w=826",
        "https://img.freepik.com/premium-vector/toilet-doors-white-male-female-genders-vector_258787-3913.jpg?w=826",
        "https://img.freepik.com/free-photo/3d-render-open-door-symbol-new-career-opportunities-business-ventures-initiative-business-concept-design_460848-10953.jpg?t=st=1731000586~exp=1731004186~hmac=87abb601faf9eb4fc9bbdeb07112689cda8e0888915010cfe220e8170b8b1817&w=740",

    ]

    return (
        <>
            <NavBar />
            <div className='GallaryContainer' >
                {images.map(image => (
                    <Image
                        width={450}
                        height={320}
                        src={image}
                        className='GallaryImage'
                    />
                ))}
            </div>
            <FooterSection />
        </>
    )
}

export default GallaryImages