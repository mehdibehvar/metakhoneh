import { ReactElement } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Layout from '../components/layouts/Layout'
import Meta from '../components/Meta'
import { NextPageWithLayout } from './_app'

import CardItem from '../components/CardItem'

const Home: NextPageWithLayout = () => {
  return (
 <>
<Meta title='اجاره خانه در سرتاسر کشور'/>

  <Container>
  <Row className='gx-4 mt-3'>
    <Col xs="12" sm="6" md="6" lg="4" xl="3" >
    <CardItem/>
    </Col>
    <Col xs="12" sm="6" md="6" lg="4" xl="3" >
    <CardItem/>
    </Col>
    <Col xs="12" sm="6" md="6" lg="4" xl="3" >
    <CardItem/>
    </Col>
    <Col xs="12" sm="6" md="6" lg="4" xl="3" >
    <CardItem/>
    </Col>
    <Col xs="12" sm="6" md="6" lg="4" xl="3" >
    <CardItem/>
    </Col>
    <Col xs="12" sm="6" md="6" lg="4" xl="3" >
    <CardItem/>
    </Col>
    <Col xs="12" sm="6" md="6" lg="4" xl="3" >
    <CardItem/>
    </Col>
    <Col xs="12" sm="6" md="6" lg="4" xl="3" >
    <CardItem/>
    </Col>
    <Col xs="12" sm="6" md="6" lg="4" xl="3" >
    <CardItem/>
    </Col>
    <Col xs="12" sm="6" md="6" lg="4" xl="3" >
    <CardItem/>
    </Col>
    <Col xs="12" sm="6" md="6" lg="4" xl="3" >
    <CardItem/>
    </Col>
    <Col xs="12" sm="6" md="6" lg="4" xl="3" >
    <CardItem/>
    </Col>

 
  </Row>

  </Container>

 </>

  )
}
Home.getLayout=function getLayout(page:ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default Home
