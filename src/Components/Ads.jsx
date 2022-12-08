import React, { useEffect } from 'react'
import AdSense from 'react-adsense';
import googleAds from '../Images/googleAds.png'

const Ads = () => {
  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || []
    window.adsbygoogle.push({})
  }, [])

  
  return (
    <div>

  <AdSense
     client="ca-pub-7640562161899788"
     slot="7259870550"
    //  data-adtest="on"
     style={{ width: 500, height: 300 }}
     format=""
  />
    </div>
  )
}

export default Ads

