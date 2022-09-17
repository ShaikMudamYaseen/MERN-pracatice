import React from 'react'
import { Container ,Button} from 'react-bootstrap'

const Banner = () => {
    const style={
        display:"flex" , 
        justifyContent:'center',
        flexDirection:"column",
        alignItems:"center"

    }
  return (
    <>
    <Container className='p-5 mx-auto' style={style} >
        <h1>Album Example</h1>
        <p style={{textAlign: 'center' ,maxWidth:"500px"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, praesentium quod nihil consequatur soluta, labore in facere libero nobis quidem eos iste! Numquam, dignissimos. Officiis enim neque quaerat alias obcaecati!</p>
        <div>
        <Button variant="primary">Main call to action</Button>{' '}
        <Button variant="secondary">Secondary action</Button>{' '}

        </div>
    </Container>
      
    </>
  )
}

export default Banner
