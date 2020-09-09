import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
export default function Post() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container py-20">
        <h1>First Post </h1>
        <div>
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </div>
        <Link href="/">Back</Link>
      </div>
      <style jsx>{`
        div {
          padding: 5rem 0;
        }
      `}</style>
    </Layout>
  );
}
