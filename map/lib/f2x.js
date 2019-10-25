
function switchTextures(resource) {
	var frameArray = [];
	for (var key in resource.textures) {
		frameArray.push(resource.textures[key]);
	}
	return frameArray;
}
function getAtan2(target, obj) {
	return Math.atan2(target.y - obj.y, target.x - obj.x);
};
function randnum(start, end) {
	return Math.floor(Math.random() * (end - start) + start)
}
function getDistance(target, obj) {
	var dx = target.x - obj.x;
	var dy = target.y - obj.y;
	return Math.sqrt(dx * dx + dy * dy);
}

class GameState {
	constructor(resources) {
		this.resources = resources || null;
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.app = new PIXI.Application(this.width, this.height, {
			antialias: !0,
			transparent: !0
		});
		this.container = new PIXI.Container();
		// 判断前进或后退
		this.symbol = '+';
		this.mapData = {};
		this.currentIndex = 0;
		this.isTouch = false;
		this.isMove = false;
		this.scroller = new Scroller((x, y, s) => {
			this.container.position.set(-x, -y);
		}, {
			zooming: true,
			animating: true,
			bouncing: false,
			animationDuration: 1e3
		});

		this.container.interactive = !0;
		this.container.buttonMode = !0;
		this.container.on("pointerdown", (data) => {
			this.isTouch = !0;
			if (!this.isMove) return;
			let a = data.data.originalEvent;
			if ('ontouchstart' in window) {
				this.scroller.doTouchStart(a.touches, a.timeStamp)
			} else {
				this.scroller.doTouchStart([{
					pageX: a.pageX,
					pageY: a.pageY
				}], a.timeStamp)
			}
		}).on("pointermove", (e) => {
			if (this.isTouch) {
				let a = e.data.originalEvent;
				if (!this.isMove) return;

				if ('ontouchstart' in window) {
					this.scroller.doTouchMove(a.touches, a.timeStamp, a.scale);
				} else {
					this.scroller.doTouchMove([{
						pageX: a.pageX,
						pageY: a.pageY
					}], a.timeStamp, a.scale);
				}
			}
		}).on("pointerup", (e) => {
			this.isTouch = !1;
			if (!this.isMove) return;
			let a = e.data.originalEvent;
			this.scroller.doTouchEnd(a.timeStamp);
		}).on('pointerupoutside', (e) => {
			this.isTouch = !1;
			if (!this.isMove) return;
			let a = e.data.originalEvent;
			this.scroller.doTouchEnd(a.timeStamp);
		})

		this.scroller.setDimensions(this.width, this.height, 3000, 3000);
		this.Textures = {
			left: null,
			right: null,
			top: null,
			bottom: null
		};
		this.app.stage.addChild(this.container);
		this.createMap();
		this.createPoint();

		let startPos = this.container.getChildByName('point0').getGlobalPosition();
		// 人物
		this.Textures.left = switchTextures(this.resources.left); //默认方向
		this.MoveClip = new PIXI.extras.AnimatedSprite(this.Textures.left);
		this.MoveClip.x = this.MoveClip.x + (this.MoveClip.width / 2);
		this.MoveClip.y = this.MoveClip.y + (150);
		this.MoveClip.pivot.set((this.MoveClip.width / 2), 150);
		this.MoveClip.animationSpeed = 0.5;
		this.MoveClip.stop();
		this.MoveClip.position.set(startPos.x, startPos.y);
		this.container.addChild(this.MoveClip);

		// 开始按钮
		this.button = new PIXI.Sprite(this.resources.button.texture);
		this.button.scale.set(0.5, 0.5);
		this.button.anchor.set(0.5, 0.5);
		this.button.interactive = true;
		this.button.x = this.width / 2;
		this.button.y = 100;
		this.button.interactive = true;
		this.button.buttonMode = !0;
		this.button.on('pointerdown', () => {
			if (this.isMove) {
				this.isMove = false;
				// this.isMove --
				// let steps = randnum(1, 2);
				let steps = 3;
				let symbol = Math.random() >= 0.5 ? '+' : '-';
				// 默认每次起步 +
				this.symbol = '+';
				console.log('走' + steps + '步数')
				console.log(this.isMove)
				// 先移动动屏幕中间
				this.moveToCenter().then(() => {
					this.moveTo(steps)
				});
			}
		})
		// 调用行走
		this.app.stage.addChild(this.button);

		// 首次移动
		this.moveToCenter().then(() => {
			this.isMove = true;
		});

		this.app.stage.on('check', (obj) => {
			// console.log(obj.mapData)
			if (obj.mapData.type == 1) {
				Gx.$message({
					'title': '恭喜您',
					'content': '中奖了',
					success: () => {

					}
				});
			} else if (obj.mapData.type == 2) {
				Gx.$message({
					'title': '恭喜您',
					'content': `前进：${obj.mapData.num}步`,
					success: () => {
						this.symbol = '+';
						this.moveToCenter().then(() => {
							this.moveTo(obj.mapData.num)
						});
					}
				});
			} else if (obj.mapData.type == 3) {
				Gx.$message({
					'title': '很遗憾',
					'content': `后退：${obj.mapData.num}步`,
					success: () => {
						this.symbol = '-';
						this.moveToCenter().then(() => {
							this.moveTo(obj.mapData.num)
						});
					}
				});
			}
		})
	}


	moveToCenter(moveCount) {
		let f = this;
		let Point = this.mapData['point' + this.currentIndex];
		let __scrollLeft = this.scroller.__scrollLeft;
		let __scrollTop = this.scroller.__scrollTop;
		let left = Point.x - this.width / 2;
		let top = Point.y - this.height / 2;
		let distance = getDistance({ x: __scrollLeft, y: __scrollTop }, { x: left, y: top });

		//控制移动到中心点时间 最快为0 最慢 0.4; 保留2位小数
		let time = (Math.round((Math.max(0, Math.min(0.4, distance / 2000))) * 100) / 100);

		return new Promise((resolve, reject) => {
			TweenMax.to({ x: __scrollLeft, y: __scrollTop }, time, {
				x: left, y: top, ease: Linear.easeIn, onUpdate: function () {
					f.scroller.scrollTo(this.target.x, this.target.y, false);
				}, onComplete: function () {
					this.kill();
					resolve();
				}
			});
		})
	}

	// 倒退

	moveTo(moveCount) {
		let f = this;
		if (moveCount == 0) {
			// 避免到了拐角处 方向错误
			let currentIndex = this.currentIndex;
			if (this.symbol === '+') {
				currentIndex++
				if (currentIndex > 99) {
					currentIndex = 0;
				}
			} else {
				currentIndex--;
				if (currentIndex < 0) {
					currentIndex = 99;
				}
			}
			let Point = this.mapData['point' + currentIndex];
			let angle = getAtan2(Point, this.MoveClip) * 180 / Math.PI;
			let direction = this.getDirection(angle);
			// 如果不存在 就创建一个
			if (!this.Textures[direction]) {
				this.Textures[direction] = switchTextures(this.resources[direction]); // 重新生成
			}
			this.MoveClip.textures = this.Textures[direction];
			this.MoveClip.stop();
			this.isMove = true;
			// 用于当前停留派发
			this.app.stage.emit('check', this.mapData['point' + this.currentIndex]);
			// console.log('Move is end');
			return
		}

		moveCount--;

		if (this.symbol === '+') {
			// 前进
			this.currentIndex++;
			if (this.currentIndex > 99) {
				this.currentIndex = 0;
			}
		} else {
			// 后退
			this.currentIndex--;
			if (this.currentIndex < 0) {
				this.currentIndex = 99;
			}
		}

		// console.log(this.currentIndex)

		let Point = this.mapData['point' + this.currentIndex];
		let angle = getAtan2(Point, this.MoveClip) * 180 / Math.PI;
		// 将地图旋转正后的角度是27
		let direction = this.getDirection(angle);
		// 如果不存在 就创建一个
		if (!this.Textures[direction]) {
			// 重新生成
			this.Textures[direction] = switchTextures(this.resources[direction]);
		}
		this.MoveClip.textures = this.Textures[direction];
		this.MoveClip.play();

		// 移动位置
		TweenMax.to(this.MoveClip, 0.3, {
			x: Point.x, y: Point.y, ease: Linear.easeIn, onUpdate: function () {
				let left = this.target.x - f.width / 2;
				let top = this.target.y - f.height / 2;
				f.scroller.scrollTo(left, top, false);
			}, onComplete: function () {
				this.kill();
				f.moveTo(moveCount);
			}
		});
	}

	// 判断转角
	getDirection(angle) {
		angle = angle - 27;
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
	// 地图加载信息
	createMap() {
		let mapSprite = new PIXI.Container;
		let flagnum = 0;
		let num = 1;
		while (flagnum < 4) {
			for (let i = 0; i < 4; i++) {
				let sprite = new PIXI.Sprite.fromImage(`images/map/${num}.jpg`);
				sprite.position.set(i * 750, flagnum * 750);
				mapSprite.addChild(sprite);
				num++;
			}
			flagnum++;
		}
		this.container.addChild(mapSprite);
	}

	createPoint() {
		// 添加point 点信息
		for (let i = 0, Points = this.resources.goblins.data.data; i < Points.length; i++) {
			let point = this.createGraphics(Points[i]);
			this.mapData[point.name] = point;
			this.container.addChild(point);
		}
	}

	createGraphics(point) {
		// 别名
		let hs_name = "point" + point.pointId;
		let graphics = new PIXI.Graphics();
		graphics.name = hs_name;
		// 赋值
		graphics.mapData = point;
		// 道路颜色
		if (point.type == 1) {
			// 奖品 颜色
			graphics.beginFill(0x2331e5, 1);
		} else if (point.type == 2) {
			// 前进 颜色
			graphics.beginFill(0x05f844, 1);
		} else if (point.type == 3) {
			// 后退 颜色
			graphics.beginFill(0xea0e0e, 1);
		} else {
			// 正常路线 颜色
			graphics.beginFill(0xe28c99, 1);
		}
		// 道路原点大小
		graphics.drawCircle(0, 0, 9);
		graphics.endFill();
		graphics.position.set(point.x, point.y);
		return graphics;
	}
}

let resource = [];
// 地图加载
for (var i = 1; i < 13; i++) {
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
let sence = null;

Loader.load(function (res) {
	sence = new GameState(res.resources);
	// console.log(sence)
	document.body.appendChild(sence.app.view);
	// 重置加载
	Loader.reset();
});
