import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
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
  const [link, setLink] = React.useState('ogimage.me')
  const imageLink = `https://ogimage.me/api/v1/${link}`
  return (
    <div>
      <Head>
        <title>OG Image - generate meta images on the fly</title>
        <meta name="title" content="OG Image - generate meta images on the fly" />
        <meta name="description" content="With ogimage you can generate meta images based on your current site" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="OG Image - generate meta images on the fly" />
        <meta property="og:description" content="With ogimage you can generate meta images based on your current site" />
        <meta property="og:image" content="https://ogimage.me/api/v1/ogimage.me" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ogimage.me/" />
        <meta property="twitter:title" content="OG Image - generate meta images on the fly" />
        <meta property="twitter:description" content="With ogimage you can generate meta images based on your current site" />
        <meta property="twitter:image" content="https://ogimage.me/api/v1/ogimage.me" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Jumbotron>
      <Container>
        <h1>ogimage.me</h1>
        <p>
          generate meta images on the fly
        </p>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col md={7}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control placeholder="Page URL" value={link} onChange={e => setLink(e.target.value.replace(/^https?:\/\//,''))} />
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
