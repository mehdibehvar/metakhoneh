import  { ReactElement } from 'react'
import { IProduct } from '../../../types';
import { axiosGet } from '../../../utils/HTTPClient';
import HomeGallery from '../../components/singleproduct/Gallery';
import Layout from '../../components/layouts/Layout';
import { NextPageWithLayout } from '../_app';

const SingleHome:NextPageWithLayout<{product:IProduct}> = ({product}) => {
    const {_id,address,images}=product;
    
  return (
    <div>
        <HomeGallery images={images.picture_url}/>
    </div>
  )
}
SingleHome.getLayout=function getLayout(page:ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
export default SingleHome;
///You should use getServerSideProps only if you need to render a page whose data must be fetched at request time.
export async function getServerSideProps(context:any) {
    const {query}=context;
    const {id}=query;
    const product=await axiosGet(`/products?_id=${id}`);
    const productObject=product[0];
   
    if (!product) {
        return {notFound:true}
    }
    return{
        props:{
            product:productObject
        }
    }
}