import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
import { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }
  render() {
    return (
      <Html lang="fa" dir='rtl'> 
        <Head>
        <link rel="shortcut icon" href="/favicon.png" />
          <link href="https://fonts.googleapis.com/css2?family=Ms+Madi&display=swap" rel="stylesheet"/>

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          
          <link href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-Variable-font-face.css" rel="stylesheet" type="text/css" />
          {/* <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.1/dist/leaflet.css"
          integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
             crossOrigin=""/> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

}

export default MyDocument