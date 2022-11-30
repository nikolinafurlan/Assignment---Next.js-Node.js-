import { withIronSessionApiRoute } from "iron-session/next";
import { Image } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Card, Text, Row, Button, Grid } from "@nextui-org/react";

export default function Customer() {

 // Handle the submit for the form
  async function handleSubmit(event) {

      alert("The form was submitted");
      event.preventDefault();
    
      // grab the variables from the form.
      const jamQty = document.querySelector('#jamQty').value
      const plainQty = document.querySelector('#plainQty').value

      // Get data from the form.
      const data = {
        jamQty: jamQty,
        plainQty: plainQty,
      }
    
      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(data)
    
      // API endpoint where we send form data.
      const endpoint = '/api/cart'
    
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
    
  }
  
  return (
   <>

      <Image
          width={1600}
          height={320}
          src="https://media.timeout.com/images/105876263/image.jpg"
          alt="Krispy Kream Image"
          objectFit="cover"
        />

      <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
      <br></br>
      <Text h3 size={25} color="#006939" css={{ m: 0 }}>
      Welcome to Customer page! <p></p> </Text>

      <form onSubmit={handleSubmit}>
     
      <Image
          width={100}
          src="https://www.krispykreme.com.au/media/catalog/product/cache/74b3214b9170b1c747e5608babfde43b/s/t/strawberry-jam-sidehalf.jpg"
          alt="Krispy Kream Image"
          objectFit="cover"
        />

        <Text h3 size={17} color="#CC112C" css={{ m: 0 }}>Jam Donut</Text> 
        <Input id="jamQty"placeholder="Update Jam Qty"></Input>
        <br></br>  <p></p>

        <Image
          width={110}
          src="https://www.krispykreme.com.au/media/catalog/product/cache/f763bef00fe330791de13dca87a2c0f0/k/r/krispy-kreme-original-glazed_1.png"
          alt="Krispy Kream Image"
          objectFit="cover"
        />

        <Text h3 size={17} color="#006939" css={{ m: 0 }}>Plain Donut</Text> 
        <Input id="plainQty" placeholder="Update Plain Qty" ></Input>
        <p></p>
        <p></p>
        <Button type="submit" flat color="success" >Place order</Button>
      </form>

      <Link href="/checkout">
      <Button type="submit" flat color="error" >Checkout </Button>
      </Link>
      </div>
   </>    
  );
}
