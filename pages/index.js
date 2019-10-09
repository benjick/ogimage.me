import React from 'react'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../components/Card'

const getDomain = url => {
  const matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)
  return matches && matches[1]
}

export default () => {
  const [link, setLink] = React.useState('http://ogimage.me')
  const imageLink = `https://ogimage.me/api/v1/${link}`
  return (
    <div>
      <Jumbotron>
      <Container>
        <h1>ogimage.me</h1>
        <p>
          Generate images for your meta tags on the fly
        </p>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col md={7}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control placeholder="Page URL" value={link} onChange={e => setLink(e.target.value)} />
              <Form.Text className="text-muted">
                Enter the URL you wish to capture
              </Form.Text>
            </Form.Group>
            <div style={{padding: 10}}>
              <code style={{ display: 'block', fontSize: '0.7em' }}>&lt;meta property="og:image" content="{ imageLink }"&gt;</code>
              <code style={{ display: 'block', fontSize: '0.7em' }}>&lt;meta property="twitter:image" content="{ imageLink }"&gt;</code>
            </div>
            <Alert variant="info">
              Elements with the class <code>hide-for-ogimage</code> won't be rendered
            </Alert>
          </Col>
          <Col md={5}>
            <Card domain={getDomain(link)} image={imageLink} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
