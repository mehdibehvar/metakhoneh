import { useRouter } from 'next/router'
import { encode } from 'querystring'
import React, { ReactElement } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { StringDecoder } from 'string_decoder'
import { IProduct } from '../../../../types'
import { axiosGet } from '../../../../utils/httpclient'
import CardItem from '../../../components/CardItem'
import Layout from '../../../components/layouts/Layout'
import Meta from '../../../components/Meta'
import { NextPageWithLayout } from '../../_app'

const Searched:NextPageWithLayout<{products:IProduct[]}>=({products}) => {
  const router=useRouter();
  const city=router.query.cityName
  return (
    <>
    <Meta 
    title={`اجاره خانه در ${city}`}
    description={`${city}`}
    keywords={`${city}`}
    />
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
Searched.getLayout=function getLayout(page:ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
export default Searched;

export async function getServerSideProps(context:any) {
   const {query}=context;
   const {city,cityName}=query;
   const reversCityName=reverseString(cityName);
   // fetch data at request time and pre-render the result.
  const products= await axiosGet(`/products?address.market=${cityName}`);
  if(!products){
    return {
      notFound:true
    }
  }
  return {
    props:{
  products
    }
  }
}

///the query in the database can be:/products?address.market=${query.cityName}&name=shiraz////this query search get the products that their address.market of them be equal cityName and their name be shiraz for example;
///You should use getServerSideProps only if you need to render a page whose data must be fetched at request time.
function reverseString(str:string) {
  // Step 1. Use the split() method to return a new array
  var splitString = str.split(""); // var splitString = "hello".split("");
  // ["h", "e", "l", "l", "o"]

  // Step 2. Use the reverse() method to reverse the new created array
  var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  // ["o", "l", "l", "e", "h"]

  // Step 3. Use the join() method to join all elements of the array into a string
  var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
  // "olleh"
  
  //Step 4. Return the reversed string
  return joinArray; // "olleh"
}

