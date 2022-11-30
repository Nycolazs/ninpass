import Head from "next/head";

export default function Home() {
  return (
    <>
      {/* regirect to login page */}
      <Head>
        <meta httpEquiv="refresh" content="0; url=/login" />
      </Head>
    </>
  )
}
