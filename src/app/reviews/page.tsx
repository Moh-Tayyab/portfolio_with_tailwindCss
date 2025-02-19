import SectionHeading from '@/components/Helper/SectionHeading'
import Slider from '@/components/Slider'
import React from 'react'


const Reviews = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
        <SectionHeading 
          title="Client Reviews"
          subtitle="What our clients say about us"
        />
        <div className='w-[90%] sm:w-[80%] m-auto mt-20'>
            {/* Slider */}
            <Slider/>
        </div>
    </div>
  )
}

export default Reviews