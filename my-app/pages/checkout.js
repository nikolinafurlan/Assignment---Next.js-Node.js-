import Link from 'next/link'
import { Container, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { withIronSessionApiRoute } from "iron-session/next";
import { withIronSessionSsr } from "iron-session/next";


export default function Checkout({data,temp}) {
  return (
    <>
    <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
    <Image
          width={1600}
          height={320}
          src="https://media.timeout.com/images/105876263/image.jpg"
          alt="Krispy Kream Image"
          objectFit="cover"
    /> <br></br>

    <Text h3 size={25} color="#006939" css={{ m: 0 }}>
    Hello there! <p></p> </Text>
    <Text h3 size={20} color="#006939" css={{ m: 0 }}>
    Thanks for the order! <p></p> </Text>

    <h4>{JSON.stringify(data)}</h4>
    <p></p>
    <h3> Current temp is:  {JSON.stringify(temp)}</h3>
    </div>
    </> 
  )
}

// make a call to the API to get the cart data
// before the page loads

export const getServerSideProps = withIronSessionSsr(
    async function getServerSideProps({ req }) {
    
    console.log("getting data from session..");
    console.log(req.session.cart);
  
    //put in db
    const cart = req.session.cart;

   // get data from the form
    const data =
    {
    cart: cart

    }

    //send data to the server in JSON format
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data
    const endpoint = 'http://localhost:3000/api/savecart'

     //form the request for sending data
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

      // grab the weather from API
      const response2 = await fetch ('https://api.openweathermap.org/data/2.5/forecast?id=2964574&appid=17ff527f8a1426eaf119f0504a2811d4');
      const apidata = await response2.json()
      console.log("output......");

      var temp = apidata.list[0]['main']['temp'];
      console.log(temp);

      return {
        props: {
          data: req.session.cart,
          temp: temp
        },
      };
    }, // -------------------- All boilerplate code for sessions ------------------------------------
    {
      cookieName: "myapp_cookiename",
      password: "complex_password_at_least_32_characters_long",
      // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
      cookieOptions: {
        secure: process.env.NODE_ENV === "production",
      },
    },
  );

  