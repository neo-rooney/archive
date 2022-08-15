import Head from 'next/head';
import Layout from '@/components/layout';
import Hero from '@/components/home/hero';

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Rooney 포트폴리오</title>
				<meta name="description" content="Rooney의 포트폴리오입니다." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero />
		</Layout>
	);
}
