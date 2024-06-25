'use client'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import { images } from '@/utils/image-sliders'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Slider = () => {
  return (
    <section className='py-12'>
      <div className='container'>
        <Swiper
          navigation
          pagination={{ type: 'fraction' }}
          modules={[Navigation]}
          onSwiper={swiper => console.log(swiper)}
          className='h-[438px] w-[336px] rounded-lg'
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-full w-full items-center justify-center'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  className='block h-full w-full object-cover'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Slider