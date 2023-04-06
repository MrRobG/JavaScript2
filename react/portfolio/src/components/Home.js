import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import heroImage from '../assets/Imagebs.png';

function Home() {
  return (
    <Container>
      <Row className='flex-lg-row-reverse align-items-center g-5 py-5'>
        <Col xs={10} sm={8} lg={6}>
          <Image src={heroImage} className='d-block mx-lg-auto img-fluid' />
        </Col>
        <Col lg={6}>
          <h1 className='display-5 fw-bold lh-1 mb-3'>
            Welcome, take a look around and have fun!
          </h1>
          <p className='lead'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
            <Button variant='outline-success'>My Projects</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
