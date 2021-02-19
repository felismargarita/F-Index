import React from 'react'
import IndexCard from '@/components/IndexCard'
import ichatImg from '@/assets/imgs/ichat.jpg'
const Collections = ()=>{
  return (
    <div className="index">
      <IndexCard title="wechat" img={ichatImg} type="site" link="https://felis.top:8000" />
    </div>
  )
}

export default Collections