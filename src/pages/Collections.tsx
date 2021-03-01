import React from 'react'
import IndexCard from '@/components/IndexCard'
import ichatImg from '@/assets/imgs/ichat.jpg'
import cloudmusic from '@/assets/imgs/cloudmusic.jpg'

const Collections = ()=>{
  return (
    <div className="index">
      <IndexCard title="wechat" img={ichatImg} type="site" link="/ichat" />
      <IndexCard title="cloud music" img={cloudmusic} type="site" link="/cloudmusic" />
    </div>
  )
}

export default Collections