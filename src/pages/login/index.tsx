import Head from "next/head"
import { LoginBackground, Forms } from "../../components/Components"

export default function Login() {
  return (
    <>
      <Head>
        <title>nintenPASS</title>
      </Head>
      <LoginBackground>
        <Forms/>
      </LoginBackground>
    </>
  )
}