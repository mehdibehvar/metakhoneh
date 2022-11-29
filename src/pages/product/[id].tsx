import { useRouter } from 'next/router';
import  { ReactElement, useEffect, useLayoutEffect, useState } from 'react'
import { IProduct } from '../../../types';
import { dbData } from '../../../utils/db';
import { axiosGet } from '../../../utils/HTTPClient';
import Layout from '../../components/layouts/Layout';
import HomePicturesGallery from '../../components/singleproduct/homePicturesGallery';
import { NextPageWithLayout } from '../_app';

const SingleHome:NextPageWithLayout= () => {
    const {query}=useRouter(); 
    const singleProductId=query.id;
    const [product, setProduct] = useState<IProduct>();
    useLayoutEffect(() => {
      const productData=dbData.filter((prod)=>prod._id===singleProductId);
      setProduct(productData[0])
    }, [singleProductId]);
    
  return (
    <div>
        {product?<HomePicturesGallery images={product.images.picture_url}/>:<>
        <div>
            <h1>مورد مورد نظر موجود نیست</h1>
        </div>
        </>}
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
// export async function getServerSideProps(context:any) {
//     const {query}=context;
//     const {id}=query;
//     const product=await axiosGet(`/products?_id=${id}`);
//     const productObject=product[0];
   
//     if (!product) {
//         return {notFound:true}
//     }
//     return{
//         props:{
//             product:productObject
//         }
//     }
// }