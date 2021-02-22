import {Card} from 'antd'
import {history} from 'umi'
interface IndexCardProps {
  img:string
  title:string
  type?:'route'|'site'
  link?:string
}
const IndexCard:React.FC<IndexCardProps> =({img,title,link,type})=>{
  
  return <Card 
  style={{width:300,margin:8}}
  hoverable
  onClick={()=>{
    if(!link){
      return
    }
    if(type === 'site'){
      window.location.href=link
    }
    if(type === 'route'){
      history.push(link)
    }
  }}
  cover={<img style={{height:150}} alt="blog" src={img}/>} 
  >
    <Card.Meta title={title}/>
  </Card>
}

export default IndexCard