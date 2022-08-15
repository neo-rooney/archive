import Head from 'next/head';
import Layout from '@/components/layout';
import ProjectItem from '@/components/projects/project-item';

export default function Projects({ projects }) {
	return (
		<Layout>
			<div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
				<Head>
					<title>Rooney 포트폴리오 | Projects</title>
					<meta name="description" content="Rooney의 포트폴리오입니다." />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<h1 className="text-xl font-bold sm:text-3xl">
					총 프로젝트 :
					<span className="pl-4 text-blue-500">{projects.results.length}</span>
				</h1>

				<div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
					{projects.results.map(aProject => (
						<ProjectItem key={aProject.id} data={aProject} />
					))}
				</div>
			</div>
		</Layout>
	);
}

// 빌드 타임에 호출
export async function getStaticProps() {
	const options = {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Notion-Version': '2022-02-22',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
		},
		body: JSON.stringify({
			page_size: 100,
			filter: {
				property: 'Status',
				select: {
					equals: 'Done',
				},
			},
			sorts: [
				{
					timestamp: 'created_time',
					direction: 'descending',
				},
			],
		}),
	};

	const res = await fetch(
		`https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`,
		options,
	);

	const projects = await res.json();

	return {
		props: { projects },
	};
}
