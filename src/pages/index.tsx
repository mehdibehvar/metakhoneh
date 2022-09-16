import Head from 'next/head'
import Link from 'next/link'
import { ReactElement } from 'react'
import Layout from '../components/layouts/Layout'
import Meta from '../components/Meta'
import { NextPageWithLayout } from './_app'


const Home: NextPageWithLayout = () => {
  return (
 <>
<Meta title='اجاره خانه در سرتاسر کشور'/>
<Link href='www.google.com'>
<a style={{fontFamily:"Vazirmatn"}}>سلام دنیای نکست</a>
</Link>
<p>سلام بر شما دوستاناسم  <span style={{fontFamily:'Ms Madi',fontWeight:"900"}}>Font Face</span>
انجام میشه که در 
ادامه قطعه کدی رو در رابطه با ساختار Font Face قرار دادم . برای این که بتونید بهتر این کار رو انجام بدید یکه پوشه به اسم font داخل فایل های سایت ایجاد کنید و تمامی فونت هایی که مد نظرتون هست رو داخل این پوشه قرار بدید تا فایل های سایت مرتب تر و منظم تر بشن . طبق کدی که در ادامه قرار دادم باید به کمک خاصیت font family برای هر فونت اسمی مشخص کنید تا بتونید برای قسمت های مختلف سایت 
از این فونت استفاده</p>
<br/>
<br/>
<br/>
<br/>
<br/>
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
