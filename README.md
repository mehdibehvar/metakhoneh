tips:
1-At Merix, we use Next.js as our preferred tool for when a project needs React, because it comes preloaded with many things we look for when deploying production-ready apps. We also use TypeScript because it helps us write less error-prone code,

2-[onClick={()=>dispatch(increment())}] in onclick we have an arrow function for dispatch

3-for the next Image component adress the src from public:  src={"/cargando-loading.gif"} or  src={"/assets/images/cargando-loading.gif"} so fer giving the src the url should start by /

4-you should invok the createAsyncthunk function in the dispatch:[onClick={()=>dispatch(fetchQoute())}]
5-you can add google fonts link to your document.tsx;just copy the link from {https://fonts.google.com/?selected=Material+Icons}

5-for ::after in a classname in sass .classsample{ &::after{}}

6-json-server :Get a full fake REST API with zero coding in less than 30 seconds (seriously)
Created with <3 for front-end developers who need a quick back-end for prototyping and mocking.
7-we can have isg(increment static generation) without getstaticpaths:just put  :return {props:{ products}, revalidate: 10,}
8-this regex omit  space and other things except [a-z,A-Z,0-9] {  const inputValue = newValue.replace(/\W/g, '')} so it omit persian words
9-in the dispatch we invoke the actions{dispatch(hideSkeleton())} but in the useSelector we don't invoke the selector{useAppSelector(selectStyles)};
10- wrap your getLayout function with Provider otherwise you can't access store in your components that are not childrens of your layout.{ <Provider store={store}> 
{ getLayout(
    <Component {...pageProps} />
  )}
  </Provider>}
11- solve this error in git push:fatal: unable to access 'https://github.com/mehdibehvar/metakhoneh.git/': OpenSSL SSL_connect: Connection was reset in connection to github.com:443 
12.-To inspect the props passed to your page, you can inspect the below element's content in your browser devtools:
document.getElementById("__NEXT_DATA__").text
13-for fix error openssl of git push:{
  1-Switching remote URLs from HTTPS to SSH
  2-ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts
}
14-if your fun not async:[
   useEffect(() => {
      axiosGet("products").then(resp=>{
        setProducts(resp)
      });
    }, [])]