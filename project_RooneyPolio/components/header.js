import Link from 'next/link';
import DarkModeTottleButton from './dark-mode-toggle-button';
import Image from 'next/image';

export default function Header() {
	return (
		<>
			<header className="text-gray-600 body-font">
				<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
					<Link href="/">
						<a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
							<div className="w-10 h-10">
								<Image
									src="/logo.png"
									width="100%"
									height="100%"
									layout="responsive"
									objectFit="cover"
									alt="logo"
								/>
							</div>

							<span className="ml-3 text-xl">Rooney 포트폴리오</span>
						</a>
					</Link>
					<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
						<Link href="/">
							<a className="mr-5 hover:text-gray-900">홈</a>
						</Link>
						<Link href="/projects">
							<a className="mr-5 hover:text-gray-900">프로젝트</a>
						</Link>
						<a
							href="mailto:bch3454@gmail.com"
							className="mr-5 hover:text-gray-900"
						>
							연락하기
						</a>
					</nav>
					{/* 다크모드 토글 버튼 넣기 */}
					<DarkModeTottleButton />
				</div>
			</header>
		</>
	);
}
