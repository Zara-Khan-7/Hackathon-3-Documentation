import Image from 'next/image'
import React from 'react'

export const BannerPage = () => {
  return (
    <div>
        <div>
        <div className="flex justify-center bg-slate-100">
            <Image
              src="/images/unique feature sofa.png"
              alt="banner"
              width={800} 
              height={650} 
              className="object-cover rounded-lg"
            />
          </div>
        </div>
    </div>
  )
}
