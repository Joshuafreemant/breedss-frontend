import React,{useEffect} from 'react'

import googleAds from '../Images/googleAds.png'

const HorizontalAds = ({slot}) => {
  seEffect(() => {
    window.adsbygoogle = window.adsbygoogle || []
    window.adsbygoogle.push({})
  }, [])
  return (
    <div className=' w-full h-[200px] mb-12 flex justify-center items-center '>
      <ins class="adsbygoogle"
        style={{ width: "100%" }}
        data-ad-format="fluid"
        // data-ad-layout-key="-Yo-ur-la-yo-ut-ke-y"
        data-ad-client="ca-pub-8217530327568975"
        data-ad-slot={slot}
        data-full-width-responsive="true">
      </ins>

    </div>
  )
}

export default HorizontalAds