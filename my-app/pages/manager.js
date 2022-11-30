import Link from 'next/link'
import { Container, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
import { Image } from "@nextui-org/react";


export default function Orders({data}) {
  return (
    <>
<Image
        width={1600}
        height={320}
        src="https://media.timeout.com/images/105876263/image.jpg"
        alt="Krispy Kream Image"
        objectFit="cover"
/> <br></br>

<div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}>

<Text h3 size={25} color="#006939" css={{ m: 0 }}>
Check all the orders! <p></p> </Text>

{data.map (item=>{


    return(
        <div key={item.id}> 
            <h3> {item.productids}</h3>
            <h3>{item.orderby}</h3>
            <h3>{item.total}</h3>
        </div>
    );
}
    

    )}
    </div>

 



    </>
  )
}

//this gets called on every request

export async function getServerSideProps() {
    //fetch data from external API

    const res = await fetch ('http://localhost:3000/api/orders')
    const data = await res.json ()

    //pass data to the page wia props
    return { props: {data}}
}
