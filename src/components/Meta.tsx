import Head from "next/head";
interface IProps {
  title: string;
  description: string;
  keywords: string;
}
export default function Meta({ title, description, keywords }:IProps) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
}

Meta.defaultProps={
    title:'metakhoneh website',
    description:'house rent, host price',
    keywords:'Get the best house in your trip'
}