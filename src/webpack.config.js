const path = require("path");
const autoprefixer = require("autoprefixer");
const ExtractCSS = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV; //package.json에 쓴 이름과 동일한 이름 쓰기
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js"); //__dirname은 프로젝트의 Root폴더를 의미한다. project폴더/assets/js/main.js를 의미
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
    entry: ["@babel/polyfill", ENTRY_FILE], //'파일들이 어디서 왔는가?'를 의미
    mode: MODE, //@babel/polyfill은 구름 크롬이 아직 async를 어떻게 처리해야하는지 모르기 때문에 설치
    module: {
        rules: [
            {
                test: /\.(js)$/, //정규표현식으로, 그 파일이 js파일인지 알아보는 역할
                use: [
                    {
                        //loader은 webpack에게 파일을 처리하는 방법을 알려주는 역할을 담당한다.
                        loader: "babel-loader"
                    }
                ]
            },
            {
                //webpack은 config파일에서 아래에서 위로 실행한다는 점 주의!
                test: /\.(scss)$/, //1st : scss파일 찾기
                use: ExtractCSS.extract([
                    //5th : CSS부분만 추출
                    {
                        loader: "css-loader" //4th : webpack이 CSS를 이해 할 수 있도록 알려주는 역할
                    },
                    {
                        loader: "postcss-loader", //3rd : sass-loader로 부터 받은 css를 plugin을 사용하여 호환 가능 한 css로 변환(다른 브라우져와의 호환 등)
                        options: {
                            plugins() {
                                return [
                                    autoprefixer({
                                        //브라우저의 인기도를 바탕으로 호환가능하게 만들어 주는 것
                                        overrideBrowserslist: "cover 99.5%"
                                    })
                                ];
                            }
                        }
                    },
                    {
                        loader: "sass-loader" //2nd : sass 또는 css파일을 일반 css로 바꿔주는 역할
                    }
                ])
            }
        ]
    },
    output: {
        //'변환된 파일들을 어디에다가 넣을 것인가?'를 의미
        path: OUTPUT_DIR,
        filename: "[name].js"
    },
    plugins: [new ExtractCSS("styles.css")]
};

module.exports = config;
