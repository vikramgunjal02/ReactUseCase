import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter,Button,Heading, Text, SimpleGrid } from '@chakra-ui/react'

const Home = () => {
    const navigate = useNavigate();

   

    const handleUseState = () => {
        navigate('/useStateDemo');
      };
  
    return (
    //   <div>
      
    //     <button onClick={handleClick1}>Test</button>
        
    //   </div>

      <>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
  <Card>
    <CardHeader>
      <Heading size='md'> We run on the docker and seee the result</Heading>
    </CardHeader>
    <CardFooter>
      <Button onClick={handleUseState}>Use State Hook</Button>
    </CardFooter>
  </Card>

  <Card>
    <CardHeader>
      <Heading size='md'> Use State Use Case</Heading>
    </CardHeader>
    <CardFooter>
      <Button onClick={handleUseState}>Use State Hook</Button>
    </CardFooter>
  </Card>

  <Card>
    <CardHeader>
      <Heading size='md'> Use State Use Case</Heading>
    </CardHeader>
    <CardFooter>
      <Button onClick={handleUseState}>Use State Hook</Button>
    </CardFooter>
  </Card>

  <Card>
    <CardHeader>
      <Heading size='md'> Use State Use Case</Heading>
    </CardHeader>
    <CardFooter>
      <Button onClick={handleUseState}>Use State Hook</Button>
    </CardFooter>
  </Card>

  <Card>
    <CardHeader>
      <Heading size='md'> Use State Use Case</Heading>
    </CardHeader>
    <CardFooter>
      <Button onClick={handleUseState}>Use State Hook</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> Use State Use Case</Heading>
    </CardHeader>
    <CardFooter>
      <Button onClick={handleUseState}>Use State Hook</Button>
    </CardFooter>
  </Card>
  
</SimpleGrid>
      </>
    );
  }

export default Home