import Link from 'next/link'
import { Image } from "@nextui-org/react";
import { Input  } from '@nextui-org/react';
import {useRouter} from 'next/router';

export default function Home({data}) {
  const router = useRouter()

  // Handle the submit for the form 
  async function handleSubmit(event) {

      alert("The form was submitted");
      event.preventDefault(); //dont redirect to different page - keep on the same page
    
      //grab variables
      const username = document.querySelector('#username').value;
      console.log(username);

      const pass = document.querySelector('#password').value
      console.log("password is " + pass);

      const telephone = document.querySelector('#telephone').value;
      console.log(telephone);

      const address = document.querySelector('#address').value;
      console.log(address);

      //make json
      const data = {
        username: event.target.username.value,
        telephone: event.target.telephone.value,
        password: event.target.password.value,
        address: event.target.address.value,
      
      }

      //send data to the server in json format
      const JSONdata = JSON.stringify(data);

      //send data to the server side.
      const endpoint = '/api/register'

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
    
      // Get the response data from server as JSON.
      // If server returns the name submitted, that means the form works.
      const result = await response.json()
      alert(`server result: ${result}`)

      // redirect based on the result
      if(result.includes("ok")){
 
        router.push("/register_complete");
      }

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
            backgroundColor: '#C7E7C9',
            }}>

    <Image
          width={320}
          height={180}  
          src="https://logos-world.net/wp-content/uploads/2022/07/Krispy-Kreme-Logo.png"
          alt="Krispy Kream Image"
          objectFit="cover"
    /> 

    <form onSubmit={handleSubmit}> 
   
      
      <h5>Username:  </h5>      
      <input type="text" id="username" name="username" />                    

      <h5>Password:  </h5>      
      <input type="text" id="password" name="password" />                    

      <h5>Address:  </h5>    
      <input type="text" id="address" name="address" />

      <h5>Telephone:  </h5>     
      <input type="text" id="telephone" name="telephone"/>                         
      <br></br>
      <p></p>
      <input type="submit" value="Submit" />
      <br></br>

    </form>
    <br></br>

    </div>
    </>
  )
}
