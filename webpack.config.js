const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin =require('favicons-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const { cleanExten } = require('./webpack-fn/cleanexten.js');
const path = require('path');
const port = process.env.PORT || 3300;
//성능최적화-아직적용안함 https://medium.com/@uk960214/%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94-1-%EB%B2%88%EB%93%A4-%ED%81%AC%EA%B8%B0-%EC%A4%84%EC%9D%B4%EA%B8%B0-react-webpack-minify-code-splitting-e2391e7e5f1b



//https://snupi.tistory.com/197
// module.exports = {
module.exports = (env, argv) => {  //argv.mode 프로덕션 https://stackoverflow.com/questions/49274713/get-current-mode-in-webpack-config-js
  return {
  // development 모드는 개발자 경험에 초점이 맞춰진 모드
  // production모드는 배포에 초점이 맞춰진 모드
  mode: argv.mode==='production'?"production":"development", 
  entry: {
    app: './src/index.tsx',
},
  // filename의 [hash]는 어플리케이션이 수정되어
  // 다시 컴파일될 때마다 Webpack(웹팩)에서 생성된 해시로 변경해 캐싱
	// build 시 확인 가능
  // entry가 하나여야, SPA 임
  // entry:'./src/index.js', 설정 기본값
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "bundle.[fullhash].js",
    publicPath: '/', //새로고침 안되는문제   
    clean: {
      keep: filename => {//*.txt, *.html, *.js만 삭제함
        return cleanExten(filename);
      //   const splitedArr = filename.split('.')
      // if( splitedArr.length < 2) return true
      // const poped = splitedArr.pop()
      // if(!poped) return true
      // const extension = poped.toLowerCase();
      // if (extension === 'txt' || extension === 'html' || extension === 'js') {
      //   console.log('cleanExten.js: ', filename, ' is not deleted')
      //     return false; //삭제
      // } 
      // return true;
      //return filename === "삭제되지*말아야할*파일"
      }
    }, //https://jeonghwan-kim.github.io/2022/08/21/webpack-output-clean
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    fallback: {
      "crypto": false
      },
  },
  module: {
    rules: [
      // { test: /\.html$/, loader: 'raw' },
      // { test: /app.*\.html$/, loader: 'raw' },//https://github.com/jantimon/html-webpack-plugin/issues/747
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      },
      // 첫 번째 룰
      // .babelrc를 babel-loader를 이용해 규칙에 적용
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
        }
    },
      {
        // test: /\.(js|jsx)$/,
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
        // use: {
        //     loader: 'babel-loader',
        //     options: {
        //         presets: ['@babel/preset-env', '@babel/preset-react']
        //     }
        // }
      },
      // {
      //   test: /\.(graphql|gql)$/,
      //   exclude: /node_modules/,
      //   loader: 'graphql-tag/loader',
      // },
      // 두 번째 룰
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader",'postcss-loader'],
        // 각 로더에 옵션 적용 가능
        // 좌 <- 우 순서로 적용되기 때문에 위와 같은 순으로 작성해주어야 함
      },
      {//https://www.robinwieruch.de/webpack-images/
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({ //24.1.4 https://bobbyhadz.com/blog/react-referenceerror-process-not-defined
      // NICE_FEATURE: JSON.stringify(true),
      IS_DEVELOPMENT: JSON.stringify(true), //https://webpack.kr/plugins/define-plugin/
      PROCESS_ENV: JSON.stringify(process.env.NODE_ENV),
      // 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      // 'process.env.TEST_ENV': JSON.stringify(process.env.TEST_ENV),
    }),
    // HtmlWebpackPlugin은 html파일이나 favicon을 번들링과정에 포함
    // 예를들어 번들된 파일 bundle.[hash].js를 index.html에 자동 삽입
    new HtmlWebpackPlugin({
      // template: "public/index.html",
      //https://yamoo9.gitbook.io/webpack/webpack/webpack-plugins/automatic-injection-to-html-document
      //공부해보자
      //https://github.com/giacomoalonzi/webpack-webapp/blob/v2/webpack.config.js#L70
      template: path.join(__dirname, 'public', 'index.html'),
    }),
    // new FaviconsWebpackPlugin({ //모듈 삭제해야함 임시로 주석처리
    //   // logo: 'src/assets/images/logo.png',
    //   logo: path.join(__dirname, 'public', 'favicon.ico'), //https://yujo11.github.io/webpack/webpack%20favicon,%20manifest.json%20%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0/
    //   // manifest: 'public/manifest.json',// path.join(__dirname, 'public', 'manifest.json'),
    // }),
    new CopyPlugin({ //https://stackoverflow.com/questions/57169909/how-to-serve-robots-txt-from-a-javascript-webpack-project
      patterns: [
          { from: "public/robots.txt", to: "robots.txt" },
          // { from: "public/manifest.json", to: "manifest.json" },
          // { from: "public/manifest.webmanifest", to: "manifest.webmanifest" },
      ],
  }),
  ],
 
  // 개발 서버 정의
  devServer: {
    host: "localhost",//'192.168.0.3', //
    port: port,
    // disableHostCheck: true, //webpack 모바일 로컬 접속 https://stackoverflow.com/questions/35412137/how-to-get-access-to-webpack-dev-server-from-devices-in-local-network
    static: {
      directory: path.join(__dirname, 'public'),
  },
    // 서버 실행 시 자동으로 브라우저 열어주는 옵션
    hot: true, // 핫 모듈 교체(HMR) 활성화
    compress: true,
    open: true,
    // 브라우저에서 URL 변경하도록 도와주는 옵션
    historyApiFallback: true,//새로고침 문제 https://bum-developer.tistory.com/entry/React-Webpack-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EA%B0%80-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%9D%B4%EB%8F%99-%EC%8B%9C-404-%EC%97%90%EB%9F%AC%EA%B0%80-%EB%9C%AC%EB%8B%A4
    liveReload: true,
    client: {
      reconnect: 3,
    },
  },
  // stats: { //에러 구체적으로 보여줌
  //   children:true,
  // }
}
};