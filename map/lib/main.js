function t(e) {
	var t = document.getElementById(e);
	t.play();
}
function getAtan2(target, obj) {
	return Math.atan2(target.y - obj.y, target.x - obj.x);
};
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

];

for (var i = 1; i < 17; i++) {
	resource.push(`images/map/${i}.jpg`);
}



let Loader = new PIXI.loaders.Loader();
Loader.defaultQueryString = '123'
Loader.add('goblins', 'images/data.json');
Loader.add('left', 'images/left.json');
Loader.add('button', 'images/play.png');
Loader.add('right', 'images/right.json');
Loader.add('top', 'images/top.json');
Loader.add('bottom', 'images/bottom.json');
Loader.add(resource).onProgress.add(function (e) {
	// console.log((Math.round(e.progress)+"%"))
});

Loader.load(function (res) {
	Mc.run(res.resources);

	//重置加载  重置后 可以重新加载
	// Loader.reset();
});

// console.log(Loader)

function SceneOne() {
	PIXI.Container.call(this);
	this.createMap();
}
SceneOne.prototype = Object.create(PIXI.Container.prototype);
SceneOne.prototype.constructor = SceneOne;
SceneOne.prototype.createMap = function () {
	let flagnum = 0;
	let num = 1;
	while (flagnum < 4) {
		for (let i = 0; i < 4; i++) {
			let sprite = new PIXI.Sprite.fromImage(`images/map/${num}.jpg`);
			sprite.position.set(i * 750, flagnum * 750);
			this.addChild(sprite);
			num++;
		}
		flagnum++;
	}
};

!function ($) {
	let isMove = true;
	let mapData = {}; //点信息
	let currentIndex = 0; //默认点信息
	var t = this;
	var e = e || {};
	e.width = window.innerWidth,
		e.height = window.innerHeight,
		e.run = function (resources) {

			e.app = new PIXI.Application(e.width, e.height, {
				antialias: true,
				transparent: true
			});
			e.stage = e.app.stage,
				$('body').append(e.app.view);
			e.container = new PIXI.Container;
			e.stage.addChild(e.container);

			var Touchflag = false;
			this.scroller = new Scroller(function (x, y, scale) {
				e.container.position.set(-x, -y);
			}, {
				zooming: true,
				animating: true,
				bouncing: false,
				animationDuration: 1e3,
				scrollingComplete: function () {
					// console.log('移动结束')
					// isMove = true;
				}
			});


			e.container.interactive = !0;
			e.container.buttonMode = !0;

			e.container.on("touchstart", (data) => {
				var a = data.data.originalEvent;
				Touchflag = !0;
				if (!isMove) return;
				this.scroller.doTouchStart(a.touches, a.timeStamp)
			})
			e.container.on("touchmove", (e) => {
				if (Touchflag) {
					var a = e.data.originalEvent;
					if (!isMove) return;
					this.scroller.doTouchMove(a.touches, a.timeStamp, a.scale)
				}
			})
			e.container.on("touchend", (e) => {
				var a = e.data.originalEvent;
				if (!isMove) return;
				this.scroller.doTouchEnd(a.timeStamp);
				Touchflag = !1;
			});

			this.scroller.setDimensions(e.width, e.height, 3000, 3000);

			//加载map 地图
			let mapSprite = new SceneOne();
			e.container.addChild(mapSprite);

			//添加point 点信息
			for (let i = 0, Points = resources.goblins.data.data; i < Points.length; i++) {
				let point = createPoint(Points[i]);
				//point 数据
				mapData[point.name] = point;
				e.container.addChild(point);
			}

			//开始按钮
			let button = new PIXI.Sprite(resources.button.texture);

			button.scale.set(0.5, 0.5);
			button.anchor.set(0.5, 0.5);
			button.interactive = true;
			button.x = e.width / 2;
			button.y = 100;
			button.interactive = true;
			button.buttonMode = !0;
			button.on('pointerdown', () => {
				if (isMove) {
					isMove = false;
					var steps = randnum(5, 20);

					var Point = mapData['point' + currentIndex];
					var __scrollLeft = _this.scroller.__scrollLeft;
					var __scrollTop = _this.scroller.__scrollTop;
					var left = Point.x - e.width / 2;
					var top = Point.y - e.height / 2;

					console.log('走' + steps + '步数')
					//移动位置
					TweenMax.to({ x: __scrollLeft, y: __scrollTop }, 0.3, {
						x: left, y: top, ease: Linear.easeIn, onUpdate: function () {
							_this.scroller.scrollTo(this.target.x, this.target.y, false);
						}, onComplete: function () {
							this.kill();
							moveTo(steps, e.MoveClip);
						}
					});
				}
			})

			e.stage.addChild(button);

			let startPos = e.container.getChildByName('point0').getGlobalPosition();

			e.MoveClip = new PIXI.extras.AnimatedSprite(switchTextures(resources.left));
			e.MoveClip.x = e.MoveClip.x + (e.MoveClip.width / 2);
			e.MoveClip.y = e.MoveClip.y + (150);
			e.MoveClip.pivot.set((e.MoveClip.width / 2), 150);
			e.MoveClip.animationSpeed = 0.5;
			e.MoveClip.stop();
			e.MoveClip.position.set(startPos.x, startPos.y);
			e.container.addChild(e.MoveClip);


			//开始滚动到指定位置
			let left = startPos.x - e.width / 2;
			let top = startPos.y - e.height / 2;
			let _this = this;
			//首次移动至中心点
			this.scroller.scrollTo(left, top, true);

			function moveTo(moveCount, player) {

				//判断是否到终点
				if (currentIndex >= 99) {
					currentIndex = -1;
					console.log('Game is end')
					// player.stop();
					// return;
				}

				if (moveCount <= 0) {
					isMove = true;
					player.stop();
					console.log('Move is end');
					return
				}
				moveCount--;
				currentIndex++;
				var Point = mapData['point' + currentIndex];
				var angle = getAtan2(Point, player) * 180 / Math.PI;
				var direction = getDirection(angle - 32);
				player.textures = switchTextures(resources[direction]);
				player.play();



				//移动位置
				TweenMax.to(player, 0.3, {
					x: Point.x, y: Point.y, ease: Linear.easeIn, onUpdate: function (obj) {

						let left = this.target.x - e.width / 2;
						let top = this.target.y - e.height / 2;
						_this.scroller.scrollTo(left, top, false);
					}, onComplete: function () {
						this.kill();
						moveTo(moveCount, player);
					}
				});
			}
		},
		t.Mc = e;
}($);




function getDirection(angle) {
	if (angle > 135 || angle < -135) {
		return 'top';
	} else if (angle > 45) {
		return 'left';
	} else if (angle > -45) {
		return 'right';
	} else {
		return 'bottom';
	}
}

/**
 * [switchTextures description]
 * @param  {[type]} resource [description]
 * @return {[type]}          [description]
 */
function switchTextures(resource) {
	var frameArray = [];
	for (key in resource.textures) {
		frameArray.push(resource.textures[key]);
	}
	return frameArray;
}

function createPoint(point) {
	var obj = {
		"x": point.x,
		"y": point.y,
		"pointId": point.pointId
	}

	//别名
	let hs_name = "point" + point.pointId;

	const graphics = new PIXI.Graphics();
	graphics.name = hs_name;
	graphics.beginFill(0xDE3249, 1);
	graphics.drawCircle(0, 0, 20);
	graphics.endFill();
	graphics.position.set(point.x, point.y);
	return graphics;
}
