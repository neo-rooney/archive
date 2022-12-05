import { Ball } from "./ball.js";
import { Block } from "./block.js";
class App {
  constructor() {
    //캔버스 엘리먼트 동적 생성
    //캔버스는 우리가 그림을 그리는 도화지라고 생각하자! 
    this.canvas = document.createElement("canvas");
    //캔버스 엘리먼트의 타입을 지정 (2d 그래픽을 그리겠다!)
    this.ctx = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);
    //콜백함수의 this를 App class 객체로 설정하기 위해서 blin를 씀
    window.addEventListener("resize", this.resize.bind(this), false);
    //객체의 메서드에서 this는 해당 객체를 가리키니까 bind 필요없음
    this.resize();
    //새로운 클래스를 생성할 때 new키워드 사용
    this.ball = new Ball(this.stageWidth, this.stageHeight, 70, 20);
    this.block = new Block(700, 30, 300, 450);
    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    //브라우져 화면의 넓이
    this.stageWidth = document.body.clientWidth;
    //브라우 져 화면의 높이
    this.stageHeight = document.body.clientHeight;
    //켄버스의 넓이는 브라우져 화면의 넓이의 2배
    this.canvas.width = this.stageWidth * 2;
    //켄버스의 높이는 브라우져 화면의 높이늬 2배
    this.canvas.height = this.stageHeight * 2;
    //켄버스의 스케일을 2배로 (레티나디스플레이에서 선명하게 보이도록 하기 위함)
    this.ctx.scale(2, 2);
  }

  animate(t) {
    window.requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.block.draw(this.ctx);
    this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.block);
  }
}

window.onload = () => {
  new App();
};
