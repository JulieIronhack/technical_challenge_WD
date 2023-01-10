import { Layout } from 'antd';

import { Card } from 'antd';
import { useEffect, useState } from 'react';
import { getAllPhones } from '../services/phonewd';

const { Meta } = Card;
export default function Homepage(){
const [phones, setPhones] = useState([])
const getData = async ()=>{
    try{
const{data:{result},...res} = await getAllPhones()
console.log("oerer",result)
setPhones(result)
    }catch(error){
        console.log(error)
    }
}
    useEffect(()=>{
getData()
    }, [])
    return (
        <Layout style={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-around"
        }}>

        {phones.map((item, index)=>(
              <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={require(`../assets/images/${item.fimageFileName}`)} />}
            >
              <Meta title={`${item.name}`} description="www.instagram.com" />
            </Card>
          )
        )}
        </Layout>
    )
}

