import Link from 'next/link'
import { Image } from "@nextui-org/react";
import {useRouter} from 'next/router';
import { NextUIProvider } from '@nextui-org/react';
import { Container, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Button, Grid } from "@nextui-org/react";

export default function Home({data}) {
  const router = useRouter()

  async function handleSubmit(event) {

    alert("The form was submitted");
    event.preventDefault();

    // grab the variables from the form.
    const name = document.querySelector('#username').value

    console.log("username is " + name);

    const pass = document.querySelector('#password').value

    console.log("password is " + pass);

     // Get data from the form.
     const data = {
       username: event.target.username.value,
       password: event.target.password.value,
     }

     // Send the data to the server in JSON format.
     const JSONdata = JSON.stringify(data)

     // API endpoint where we send form data.
     const endpoint = '/api/login'

     // Form the request for sending data to the server.
     const options = {
       // The method is POST because we are sending data.
       method: 'POST',
       // Tell the server we're sending JSON.
       headers: {
         'Content-Type': 'application/json',
       },
       // Body of the request is the JSON data we created above.
       body: JSONdata,
     }

     // Send the form data to our forms API on Vercel and get a response.
     const response = await fetch(endpoint, options)

     // Get the response data from server as JSON.
     // If server returns the name submitted, that means the form works.
     const result = await response.json()
    
     alert(`server result: ${result}`)

     // redirect based on the result
   if(result.includes("customer")){

     router.push("/customer");
   }
   else if(result.includes("manager")){

     router.push("/manager");
   }

}

  return (

    <NextUIProvider>
     
     <Container gap={0}>
      <Row gap={1}>
        <Col>
          <Card css={{ $$cardColor: 'white' }}>
            <Card.Body>

            <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft:'30px',
            paddingRight:'30px',
            textAlign:'center',
            }}>
            
            <Text h3 size={18} color="#006939" css={{ m: 0 }}>
            <Image
              width={420}
              height={200}  
              src="https://logos-world.net/wp-content/uploads/2022/07/Krispy-Kreme-Logo.png"
              alt="Krispy Kream Image"
              objectFit="cover"
            />              
            
            We're famous for our amazing doughnuts, but did you know that every Krispy Kreme doughnut is hand checked 
            and our decorated range are always hand filled by one of our awesome team? And whether you buy your Krispy Kreme 
            doughnuts from a Krispy Kreme store or buying on the Krispy Kreme website, your doughnuts are always made fresh daily!

            </Text>
            </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Spacer y={1} />
      <Row gap={1}>

        <Col>
          <Card css={{ $$cardColor: 'white' }}>
            <Card.Body>
              <Text h3 size={20} color="#CC112C" css={{ m: 0 }}>

              The Home of the Original Glazed doughnut since 1937! 
            
              <Image
                width={500}
                src="https://www.krispykreme.ie/media/catalog/product/cache/38e0d09d9f0eb4ba006ad4bd437f3ef8/o/r/original_glazed_dozen_hero_2.png"
                alt="Krispy Kream Image"
                objectFit="cover"
              />
              </Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card css={{ $$cardColor: 'white' }}>
            <Card.Body>
              <Text h3 size={20} color="#006939" css={{ m: 0 }}>
                Login
              </Text>

              <Spacer y={1.7}/>
              
              <form onSubmit={handleSubmit}>
              <Input id="username" clearable labelPlaceholder="Username" initialValue="" />
              <Spacer y={1.7}/>
              <Input id="password" clearable labelPlaceholder="Password" initialValue="" />
              <Spacer y={1.6}/> 
              <Button type="submit" flat color="success" auto>
               Login
              </Button>
              </form>
             
            </Card.Body>
          </Card>
        </Col>
        
        <Col>
          <Card css={{ $$cardColor: 'white' }}>
            <Card.Body>
              <Text h3 size={20} color="#CC112C" css={{ m: 0 }}>
              New user? Register here! <p></p>

             <Link href="http://localhost:3000/register" passHref>
             <br></br>
             <Button variant="contained" flat color="success" auto>Register</Button>
             </Link>
          
             <Image
             width={160}
             src="https://www.krispykreme.co.uk/media/wysiwyg/Rewards/Hero_image.png"
             alt="Krispy Kream Image"
             objectFit="cover"
             />
              </Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  
    </NextUIProvider>

  )
}

