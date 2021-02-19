
import blogImg from '@/assets/imgs/blog.jpg'
import githubImg from '@/assets/imgs/github.jpg'
import '@/styles/style.scss'
import IndexCard from '@/components/IndexCard'
import music from '@/assets/imgs/music.jpg'
import star from '@/assets/imgs/star.jpg'
import antd from '@/assets/imgs/antd.jpg'
export default function IndexPage() {
  return (
    <div className="index">
      <IndexCard img={blogImg} title="Blog"/>
      <IndexCard img={music} title="Music Player"/>
      <IndexCard img={antd} title="Antd More"/>
      <IndexCard img={star} title="Imitation Collections"  type="route" link="/collections"/>
      <IndexCard img={githubImg} title="Github" type="site" link="https://github.com/felismargarita"/>
    </div>
  );
}
