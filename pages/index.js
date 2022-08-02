import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Rooney 포트폴리오</title>
        <meta name="description" content="Rooney의 포트폴리오입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>홈</h1>
    </Layout>
  )
}
