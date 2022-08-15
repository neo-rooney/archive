import Animation from '@/components/home/animation';
import Link from 'next/link';

export default function Hero() {
	return (
		<>
			<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
				<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
					You deserve it
					<br className="hidden lg:inline-block" />
					프론트엔드 개발자 배철훈입니다.
				</h1>
				<p className="mb-8 leading-relaxed text-justify">
					3년 차 개발자로 스타트업에서 웹 서비스를 개발 / 운영 / 배포하였습니다.
					주로 <strong>Vue</strong>, <strong>Nuxt</strong> 를 사용하여 웹
					서비스를 개발하였으며, 일정 기간 <strong>Node.js</strong> 기반의 서버
					개발도 겸한 경험이 있습니다. <strong>Typescript</strong>를 좋아하고,
					<strong>테스트 자동화</strong>에 관심이 많습니다.
				</p>
				<div className="flex justify-center">
					<Link href="/projects">
						<a className="btn-project">프로젝트 보러가기</a>
					</Link>
				</div>
			</div>
			<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
				<Animation />
			</div>
		</>
	);
}
