import { ReactElement } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Layout from '../components/layouts/Layout'
import Meta from '../components/Meta'
import { NextPageWithLayout } from './_app'

import CardItem from '../components/CardItem'

import { IProduct } from '../../types'
import { axiosGet } from '../../utils/httpclient'

const Home: NextPageWithLayout<{products:IProduct[]}> = ({products}) => {
 
  return (
 <>
<Meta title='اجاره خانه در سرتاسر کشور'/>

  <Container>
  <Row className='gx-4 mt-3'>
    {products.map((product)=><Col key={product._id} xs="12" sm="6" md="6" lg="4" xl="3" >
    <CardItem product={product}/>
    </Col>)}
   
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

export async function getStaticProps() {
  // Call an external API endpoint to get products.
  const products=await axiosGet("products");
  return {
    props:{
      products
    },
      // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10,
  }
}

///You should use getStaticProps if:
///The data required to render the page is available at build time ahead of a user’s request
///The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance
////The data can be publicly cached (not user-specific). This condition can be bypassed in certain specific situation by using a Middleware to rewrite the path.
////When combined with Incremental Static Regeneration, getStaticProps will run in the background while the stale page is being revalidated, and the fresh page served to the browser.