"use client"

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
const  EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true },[Autoplay({delay:2000})])


  return (
    <div className="embla mx-auto mt-12 h-56 max-w-lg border " ref={emblaRef}>
      <div className="embla__container h-full">
        <div className="embla__slide flex items-center justify-center">Slide 1</div>
        <div className="embla__slide embla__slide flex items-center justify-center">Slide 2</div>
        <div className="embla__slide embla__slide flex items-center justify-center">Slide 3</div>
      </div>
    </div>
  )
}
export default EmblaCarousel;