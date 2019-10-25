function t(e) {
	var t = document.getElementById(e);
	t.play();
}

function i(e) {
	var t = document.getElementById(e),
		i = function () {
			document.removeEventListener("WeixinJSBridgeReady", i), document.removeEventListener("YixinJSBridgeReady", i), t.play(), t.pause()
		};
	document.addEventListener("WeixinJSBridgeReady", i, !1), document.addEventListener("YixinJSBridgeReady", i, !1)
}
function randnum(start, end) {
	return Math.floor(Math.random() * (end - start) + start)
}
let resource = [
	`images/map.jpg`
];




let Loader = new PIXI.loaders.Loader();
// Loader.add('desyrel', 'xml/font.xml');
Loader.add(resource).onProgress.add(function (e) {
	// console.log((Math.round(e.progress)+"%"))
});
Loader.load(function () {
	Mc.run();
});


function SceneOne() {
	PIXI.Container.call(this);
}
SceneOne.prototype = Object.create(PIXI.Container.prototype);
SceneOne.prototype.constructor = SceneOne;
SceneOne.prototype.init = function () {
	this.addChild(this.createSprite('images/map.jpg'));
};
SceneOne.prototype.createSprite = function (url) {
	return new PIXI.Sprite.fromImage(url);
};
!function ($) {
	var t = this;
	var e = e || {};
	e.width = window.innerWidth,
		e.height = window.innerHeight,
		e.run = function (el) {
			console.log(this)
			e.app = new PIXI.Application(e.width, e.height, {
				antialias: true,
				transparent: true
			});
			e.stage = e.app.stage,
				el ? $(el).append(e.renderer.view) : $('body').append(e.app.view);
			e.container = new PIXI.Container;
			e.stage.addChild(e.container);

			e.SceneManager = new e.SceneManager,
				e.SceneManager.stage = e.container;


			var Touchflag = false;
			this.scroller = new Scroller(function (x, y, scale) {
				e.container.position.set(-x, -y);
				e.container.scale.set(scale, scale);
			}, {
				zooming: true,
				animating: true,
				bouncing: false,
				animationDuration: 1e3
			});


			e.container.interactive = !0;
			e.container.buttonMode = !0;

			e.container.on("touchstart", (data) => {
				var a = data.data.originalEvent;

				var point = data.data.getLocalPosition(e.container);
				globalPoint.x = point.x;
				globalPoint.y = point.y;

				Touchflag = !0,
					this.scroller.doTouchStart(a.touches, a.timeStamp)
			})
			e.container.on("touchmove", (e) => {
				if (Touchflag) {
					var a = e.data.originalEvent;
					this.scroller.doTouchMove(a.touches, a.timeStamp, a.scale)
				}
			})
			e.container.on("touchend", (e) => {
				var a = e.data.originalEvent;
				this.scroller.doTouchEnd(a.timeStamp),
					Touchflag = !1
			});
			window.addEventListener("mousewheel", (e) => {
				this.scroller.doMouseZoom(e.wheelDelta, e.timeStamp, e.pageX, e.pageY);
			}, false);

			this.scroller.setDimensions(e.width, e.height, 3000, 3000); //设置最大范围




			e.SceneManager.loadScene("SceneOne");
			e.loop()
		},
		e.loop = function () {
			requestAnimationFrame(e.loop);

		},
		e.SceneManager = function () {
			this.currentScene = null,
				this.senceArray = {}; //
			this.stage = null
		},
		e.SceneManager.prototype.loadScene = function (t) {

			if (this.senceArray[t]) {
				this.currentScene = this.senceArray[t];
			} else {
				this.currentScene = new window[t];
				this.senceArray[t] = this.currentScene;
			}

			this.currentScene.init();
			this.stage.addChild(this.currentScene);
			console.log(t + " add to stage!")
		},
		e.SceneManager.prototype.constructor = e.SceneManager,
		t.Mc = e;
}($);


function createAnimatedSpritejson(name, cutnum) {
	var frameArray = [];
	for (var i = 0; i < cutnum; i++) {
		var num = i < 10 ? "0" + i : i;
		var Texture = PIXI.Texture.fromImage(name + '000' + num + '.png');
		frameArray.push(Texture);
	}
	return new PIXI.extras.AnimatedSprite(frameArray);
}



var krpanoJsonArr = [];
var krpanoJsonIndex = 0;
var globalPoint = {
	x: 0,
	y: 0
}
function createPoint(point) {
	var obj = {
		"x": point.x,
		"y": point.y,
		"krpanoJsonIndex": krpanoJsonIndex
	}
	krpanoJsonArr.push(obj);
	//别名
	let hs_name = "point" + krpanoJsonIndex;

	const graphics = new PIXI.Graphics();
	graphics.name = hs_name;
	graphics.beginFill(0xDE3249, 1);
	graphics.drawCircle(0, 0, 2);
	graphics.endFill();
	graphics.position.set(point.x, point.y);
	krpanoJsonIndex++;
	return graphics;
}


$("body").bind("keypress", function (e) {
	var theEvent = e || window.event;
	var code = theEvent.keyCode || theEvent.which || theEvent.charCode;

	//按Q的时候删除
	if (code == 113) {
		if (krpanoJsonIndex != 0) {
			krpanoJsonArr.pop();
			krpanoJsonIndex -= 1;

			//删除某个热点
			var spotname = "point" + krpanoJsonIndex;

			Mc.container.removeChild(Mc.container.getChildByName(spotname));
		}
	}

	//回车添加
	if (code == 13) {
		e.preventDefault();
		console.log(globalPoint)
		let point = createPoint(globalPoint);
		Mc.container.addChild(point);
	}
});

var eleButton = document.querySelector('input[type="button"]');

// 下载文件方法
var funDownload = function (content, filename) {
	var eleLink = document.createElement('a');
	eleLink.download = filename;
	eleLink.style.display = 'none';
	// 字符内容转变成blob地址
	var blob = new Blob([content]);
	eleLink.href = URL.createObjectURL(blob);
	// 触发点击
	document.body.appendChild(eleLink);
	eleLink.click();
	// 然后移除
	document.body.removeChild(eleLink);
};

// if ('download' in document.createElement('a')) {
// 	// 作为test.html文件下载
// 	eleButton.addEventListener('click', function () {

// 		krpanoJsonData.data = krpanoJsonArr;
// 		krpanoJsonData = JSON.stringify(krpanoJsonData);
// 		console.log(krpanoJsonData)
// 		funDownload(krpanoJsonData, 'data.json');
// 	});
// } else {
// 	eleButton.onclick = function () {
// 		alert('浏览器不支持');
// 	};
// }
