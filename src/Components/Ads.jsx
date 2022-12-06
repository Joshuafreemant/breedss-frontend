import React from 'react'
import googleAds from '../Images/googleAds.png'

const Ads = () => {
  const { currentPath } = props
  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || []
    window.adsbygoogle.push({})
  }, [])
  return (
    <div className='ads-container overflow-hidden hidden lg:flex'>
      <ins class="adsbygoogle"
        style={{ display: "block" }}
        data-ad-format="fluid"
        data-ad-layout-key="-Yo-ur-la-yo-ut-ke-y"
        data-ad-client="Yo-ur-ad-client-id"
        data-ad-slot={props.slot}
        data-full-width-responsive="true">
      </ins>

    </div>
  )
}

export default Ads

