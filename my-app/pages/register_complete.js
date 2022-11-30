import Link from 'next/link'
import { Image } from "@nextui-org/react";
import {useRouter} from 'next/router';
import { NextUIProvider } from '@nextui-org/react';
import { Container, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Button, Grid } from "@nextui-org/react";

export default function Manager({data}) {
      return (
        <>
        

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

    <br></br>
    <Text h2 size={22} color="green" css={{ m: 0 }}>You sucessfully registered to Krispy Kreme!</Text>                 
    <br></br>
    <Text h3 size={17} color="red" css={{ m: 0 }}>Go back to home page and log into your account!</Text> 
    <Link href="http://localhost:3000/" passHref> <br></br>
        <Button variant="contained" flat color="success" auto>Login Here!</Button>
    </Link>
    <br></br> <br></br>
    </div>
    
    
        </>
      )
    }
    
    