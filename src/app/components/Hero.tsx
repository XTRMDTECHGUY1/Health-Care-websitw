"use client"
import React from 'react'
import Image from 'next/image'
import {Container, Row, Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import mana from '../image/mana.png'
import manb from '../image/manb.png'
import manc from '../image/manc.png'
import mand from '../image/mand.png'
import mane from '../image/mane.png'
import manf from '../image/manf.png'



export const Hero = () => {
  return (
    <Container>
    <Row>
<Col>

<h1 className='heading'><b> Professional AI <br/> Headshots in Minutes </b> </h1>
<p> Elevate your online presence with HD headshoot generated by our <br/>
AI. Ideal for social profiles, resume and professional portfolios. </p>

<Button variant='primary'style={{borderRadius: '12px'}}> Get Your Headshoots </Button> {' '}
<p> <i>Trusted by professional worldwide, Quick and efficent</i></p>
<p> Already a member? <a href=''> Sign in </a></p>
</Col>


<Row className='roll'>
<Col >

<Image src={mana} loading="lazy" alt='' className='image'/><br/>
<Image src={mand} loading="lazy" alt='' className='image'style={{marginTop: '10px',}} />
</Col>

<Col>

<Image src={manc} loading="lazy" alt='' className='image'style={{ marginLeft: '-20px'}}/><br/>
<Image src={manb} loading="lazy" alt='' className='image' style={{marginTop: '10px', marginLeft: '-20px'}}/>
</Col>

<Col>

<Image src={mane} loading="lazy" alt='' className='image'style={{ marginLeft: '-20px'}}/><br/>
<Image src={manf} loading="lazy" alt='' className='image' style={{marginTop: '10px',  marginLeft: '-20px'}}/>


</Col>

</Row>














    </Row>
    </Container>
  )
};