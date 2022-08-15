export default function Hero() {
	return (
		<section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
			<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
						안녕하세요 Rooney입니다.
						<br className="hidden lg:inline-block" />
						오늘도 빡코딩
					</h1>
					<p className="mb-8 leading-relaxed text-justify">
						사랑의 그것을 피어나기 인생을 위하여 풀이 눈이 때까지 것이다. 이상,
						모래뿐일 주는 위하여서. 내는 바이며, 자신과 곧 있다. 이성은 청춘의
						충분히 찾아다녀도, 자신과 방황하여도, 뿐이다. 우리 있는 바이며, 못할
						끓는 풍부하게 아름다우냐? 구하지 그들의 청춘 피는 찾아 얼음이 그들의
						인생을 얼마나 것이다. 가슴이 같이, 창공에 따뜻한 가지에 할지라도
						우리 풀이 인간에 말이다. 두기 타오르고 살 그들은 창공에 같으며, 같은
						영락과 사막이다. 황금시대의 눈이 천지는 두손을 구하지 역사를 이상은
						가진 봄바람이다. 피가 뜨거운지라, 인생에 싹이 그림자는 가치를
						철환하였는가? 황금시대를 갑 작고 찾아 대고, 할지니, 간에 대중을 수
						있다.
					</p>
					<div className="flex justify-center">
						<button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
							프로젝트 보러가기
						</button>
					</div>
				</div>
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
			</div>
		</section>
	);
}
