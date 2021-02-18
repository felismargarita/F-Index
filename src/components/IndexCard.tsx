import {Card} from 'antd'

interface IndexCardProps {
  img:string
  title:string
  link?:string
}
const IndexCard:React.FC<IndexCardProps> =({img,title,link})=>{
  
  return <Card 
  style={{width:300,margin:8}}
  hoverable
  onClick={()=>{
    link && window.open(link)
  }}
  cover={<img style={{height:150}} alt="blog" src={img}/>} 
  >
    <Card.Meta title={title}/>
  </Card>
}

export default IndexCard