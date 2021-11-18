import React, {useState} from 'react'
import './selectcarslider.css'
import dataSlider from './dataSlider'
import BtnSlider from './BtnSlider'

function SelectCarSlider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }
    
    return (
        <div className='container-slider'>
            {dataSlider.map((obj, index) => {
                return (
                    <div className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'} key={obj.id} >
                        <p>{obj.title}</p>
                        <img src={process.env.PUBLIC_URL + `/images/img${index + 1}.jpg`} alt='caroption' />
                        <p>{obj.price} kr</p>
                        <p>{obj.info}</p>
                        <p>Upp till {obj.passenger} passagerare</p>
                        <p>Tar djur/bilbarnstol: {obj.option}</p>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={'next'} />
            <BtnSlider moveSlide={prevSlide} direction={'prev'} />
            <div className='container-dots'>
                {Array.from({length: 3}).map((item, index) => (
                    <div onClick={() => moveDot(index + 1)} 
                    className={slideIndex === index + 1 ? 'dot active' : 'dot'}></div>
                ))}
            </div>
        </div>
    )
}

export default SelectCarSlider
