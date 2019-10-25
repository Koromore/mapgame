

// 如果物体(x,y)围绕着一个点(x2,y2)旋转，而我们只知道物体的坐标和点的坐标，
// 那如何计算旋转后物体的坐标呢？下面有一个很适合这种场景的公式：

x1 = (x - x2) * cos(rotation) - (y - y2) * sin(rotation);

y1 = (y - y2) * cos(rotation) + (x - x2) * sin(rotation);

// 我们可以认为(x-x2)、(y-y2)是物体相对于旋转点的坐标，
// rotation是旋转角度（旋转量，指当前角度和旋转后的角度的差值），
// x1、y1是物体旋转后的位置坐标。


"use strict";
var PIXI, fgui, __extends = this && this.__extends || function () {
    var t = function (e, i) {
        return (t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(e, i)
    };
    return function (e, i) {
        function n() {
            this.constructor = e
        }
        t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
    }
}();
! function (t) {
    var e = window,
        i = !(!e.PointerEvent && !e.MSPointerEvent),
        n = "ontouchstart" in window && PIXI.utils.isMobile.any,
        s = function () {
            function t() {}
            return t.Down = i ? "pointerdown" : n ? "touchstart" : "mousedown", t.Cancel = i ? "pointercancel" : n ? "touchcancel" : "mousecancel", t.Up = i ? "pointerup" : n ? "touchend" : "mouseup", t.Click = i ? "pointertap" : n ? "tap" : "click", t.UpOutside = i ? "pointerupoutside" : n ? "touchendoutside" : "mouseupoutside", t.Move = i ? "pointermove" : n ? "touchmove" : "mousemove", t.Over = i ? "pointerover" : n ? null : "mouseover", t.Out = i ? "pointerout" : n ? null : "mouseout", t.RightDown = "rightdown", t.RightUp = "rightup", t.RightClick = "rightclick", t.RightUpOutside = "rightupoutside", t
        }();
    t.InteractiveEvents = s, t.GearXMLNodeNameMap = {
        gearDisplay: 0,
        gearXY: 1,
        gearSize: 2,
        gearLook: 3,
        gearColor: 4,
        gearAni: 5,
        gearText: 6,
        gearIcon: 7
    }, t.BlendModeMap = ["Normal", "Add", "Multiply", "Screen", "Overlay", "Darken", "Lighten", "ColorDodge", "ColorBurn", "HardLight", "SoftLight", "Difference", "Exclusion", "Hue", "Saturation", "Color", "Luminosity", "NormalNPM", "AddNPM", "ScreenNPM"], t.ParseOverflowType = function (t) {
        switch (t) {
        case "visible":
            return 0;
        case "hidden":
            return 1;
        case "scroll":
            return 2;
        case "scale":
            return 3;
        case "scaleFree":
            return 4;
        default:
            return 0
        }
    }, t.ParseScrollType = function (t) {
        switch (t) {
        case "horizontal":
            return 0;
        case "vertical":
            return 1;
        case "both":
            return 2;
        default:
            return 1
        }
    }, t.ParseLoaderFillType = function (t) {
        switch (t) {
        case "none":
            return 0;
        case "scale":
            return 1;
        case "scaleMatchHeight":
            return 2;
        case "scaleMatchWidth":
            return 3;
        case "scaleFree":
            return 4;
        case "scaleNoBorder":
            return 5;
        default:
            return 0
        }
    }, t.ParseListLayoutType = function (t) {
        switch (t) {
        case "column":
            return 0;
        case "row":
            return 1;
        case "flow_hz":
            return 2;
        case "flow_vt":
            return 3;
        case "pagination":
            return 4;
        default:
            return 0
        }
    }, t.ParseListSelectionMode = function (t) {
        switch (t) {
        case "single":
            return 0;
        case "multiple":
            return 1;
        case "multipleSingleClick":
            return 2;
        case "none":
            return 3;
        default:
            return 0
        }
    }, t.ParsePackageItemType = function (t) {
        switch (t) {
        case "image":
            return 0;
        case "movieclip":
            return 2;
        case "sound":
            return 3;
        case "component":
            return 4;
        case "swf":
            return 1;
        case "font":
            return 6;
        case "atlas":
            return 7;
        default:
            return 5
        }
    }, t.ParseProgressTitleType = function (t) {
        switch (t) {
        case "percent":
            return 0;
        case "valueAndmax":
            return 1;
        case "value":
            return 2;
        case "max":
            return 3;
        default:
            return 0
        }
    }, t.ParseScrollBarDisplayType = function (t) {
        switch (t) {
        case "default":
            return 0;
        case "visible":
            return 1;
        case "auto":
            return 2;
        case "hidden":
            return 3;
        default:
            return 0
        }
    }, t.ParseFlipType = function (t) {
        switch (t) {
        case "hz":
            return 1;
        case "vt":
            return 2;
        case "both":
            return 3;
        default:
            return 0
        }
    }, t.ParseButtonMode = function (t) {
        switch (t) {
        case "Common":
            return 0;
        case "Check":
            return 1;
        case "Radio":
            return 2;
        default:
            return 0
        }
    }, t.ParseAutoSizeType = function (t) {
        switch (t) {
        case "none":
            return 0;
        case "both":
            return 1;
        case "height":
            return 2;
        case "shrink":
            return 3;
        default:
            return 0
        }
    }, t.ParseAlignType = function (t) {
        switch (t) {
        case "left":
            return "left";
        case "center":
            return "center";
        case "right":
            return "right";
        default:
            return "left"
        }
    }, t.ParseVertAlignType = function (t) {
        switch (t) {
        case "top":
            return 0;
        case "middle":
            return 1;
        case "bottom":
            return 2;
        default:
            return 0
        }
    }, t.ParseListChildrenRenderOrder = function (t) {
        switch (t) {
        case "ascent":
            return 0;
        case "descent":
            return 1;
        case "arch":
            return 2;
        default:
            return 0
        }
    };
    var r = {
        Linear: createjs.Ease.linear,
        "Elastic.In": createjs.Ease.elasticIn,
        "Elastic.Out": createjs.Ease.elasticOut,
        "Elastic.InOut": createjs.Ease.elasticInOut,
        "Quad.In": createjs.Ease.quadIn,
        "Quad.Out": createjs.Ease.quadOut,
        "Quad.InOut": createjs.Ease.quadInOut,
        "Cube.In": createjs.Ease.cubicIn,
        "Cube.Out": createjs.Ease.cubicOut,
        "Cube.InOut": createjs.Ease.cubicInOut,
        "Quart.In": createjs.Ease.quartIn,
        "Quart.Out": createjs.Ease.quartOut,
        "Quart.InOut": createjs.Ease.quartInOut,
        "Quint.In": createjs.Ease.quintIn,
        "Quint.Out": createjs.Ease.quintOut,
        "Quint.InOut": createjs.Ease.quintInOut,
        "Sine.In": createjs.Ease.sineIn,
        "Sine.Out": createjs.Ease.sineOut,
        "Sine.InOut": createjs.Ease.sineInOut,
        "Bounce.In": createjs.Ease.bounceIn,
        "Bounce.Out": createjs.Ease.bounceOut,
        "Bounce.InOut": createjs.Ease.bounceInOut,
        "Circ.In": createjs.Ease.circIn,
        "Circ.Out": createjs.Ease.circOut,
        "Circ.InOut": createjs.Ease.circInOut,
        "Expo.In": createjs.Ease.quartIn,
        "Expo.Out": createjs.Ease.quartOut,
        "Expo.InOut": createjs.Ease.quartInOut,
        "Back.In": createjs.Ease.backIn,
        "Back.Out": createjs.Ease.backOut,
        "Back.InOut": createjs.Ease.backInOut
    };
    t.ParseEaseType = function (t) {
        return r[t] || r.Linear
    }
}(fgui || (fgui = {})),
function (t) {
    var e = function () {
        function e() {
            this.$x = 0, this.$y = 0, this.$width = 0, this.$height = 0, this.$alpha = 1, this.$rotation = 0, this.$visible = !0, this.$touchable = !0, this.$grayed = !1, this.$draggable = !1, this.$scaleX = 1, this.$scaleY = 1, this.$skewX = 0, this.$skewY = 0, this.$pivot = new PIXI.Point, this.$pivotAsAnchor = !1, this.$pivotOffset = new PIXI.Point, this.$sortingOrder = 0, this.$internalVisible = !0, this.$focusable = !1, this.$pixelSnapping = !1, this.$handlingController = !1, this.$lastColorComponents = null, this.$rawWidth = 0, this.$rawHeight = 0, this.$initWidth = 0, this.$initHeight = 0, this.$sourceWidth = 0, this.$sourceHeight = 0, this.$id = "" + e.gInstanceCounter++, this.$name = "", this.createDisplayObject(), this.$relations = new t.Relations(this), this.$gears = []
        }
        return Object.defineProperty(e.prototype, "id", {
            get: function () {
                return this.$id
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "name", {
            get: function () {
                return this.$name
            }, set: function (t) {
                this.$name = t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "x", {
            get: function () {
                return this.$x
            }, set: function (t) {
                this.setXY(t, this.$y)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "y", {
            get: function () {
                return this.$y
            }, set: function (t) {
                this.setXY(this.$x, t)
            }, enumerable: !0,
            configurable: !0
        }), e.prototype.setXY = function (t, i) {
            this.$x == t && this.$y == i || (this.$x = t, this.$y = i, this.handleXYChanged(), this.updateGear(1), this.$parent && (this.$parent.setBoundsChangedFlag(), this.$displayObject.emit("__xyChanged", this)), e.draggingObject != this || e.sUpdatingWhileDragging || this.localToGlobalRect(0, 0, this.width, this.height, e.sGlobalRect))
        }, Object.defineProperty(e.prototype, "pixelSnapping", {
            get: function () {
                return this.$pixelSnapping
            }, set: function (t) {
                this.$pixelSnapping != t && (this.$pixelSnapping = t, this.handleXYChanged())
            }, enumerable: !0,
            configurable: !0
        }), e.prototype.center = function (t) {
            var e;
            void 0 === t && (t = !1), e = null != this.$parent ? this.parent : this.root, this.setXY((e.width - this.width) / 2, (e.height - this.height) / 2), t && (this.addRelation(e, 3), this.addRelation(e, 10))
        }, Object.defineProperty(e.prototype, "width", {
            get: function () {
                return this.ensureSizeCorrect(), this.$relations.sizeDirty && this.$relations.ensureRelationsSizeCorrect(), this.$width
            }, set: function (t) {
                this.setSize(t, this.$rawHeight)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "height", {
            get: function () {
                return this.ensureSizeCorrect(), this.$relations.sizeDirty && this.$relations.ensureRelationsSizeCorrect(), this.$height
            }, set: function (t) {
                this.setSize(this.$rawWidth, t)
            }, enumerable: !0,
            configurable: !0
        }), e.prototype.setSize = function (t, e, i) {
            if (void 0 === i && (i = !1), this.$rawWidth != t || this.$rawHeight != e) {
                this.$rawWidth = t, this.$rawHeight = e, t = Math.max(0, t), e = Math.max(0, e);
                var n = t - this.mapPivotWidth(1),
                    s = e - this.mapPivotHeight(1);
                this.$width = t, this.$height = e, this.handleSizeChanged(), 0 == this.$pivot.x && 0 == this.$pivot.y || (this.$pivotAsAnchor ? this.applyPivot() : (i || this.setXY(this.x - this.$pivot.x * n, this.y - this.$pivot.y * s), this.updatePivotOffset())), this.updateGear(2), this.$parent && (this.$relations.onOwnerSizeChanged(n, s), this.$parent.setBoundsChangedFlag()), this.$displayObject.emit("__sizeChanged", this)
            }
        }, e.prototype.ensureSizeCorrect = function () {}, Object.defineProperty(e.prototype, "sourceHeight", {
            get: function () {
                return this.$sourceHeight
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "sourceWidth", {
            get: function () {
                return this.$sourceWidth
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "initHeight", {
            get: function () {
                return this.$initHeight
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "initWidth", {
            get: function () {
                return this.$initWidth
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "actualWidth", {
            get: function () {
                return this.width * Math.abs(this.$scaleX)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "actualHeight", {
            get: function () {
                return this.height * Math.abs(this.$scaleY)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "scaleX", {
            get: function () {
                return this.$scaleX
            }, set: function (t) {
                this.setScale(t, this.$scaleY)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "scaleY", {
            get: function () {
                return this.$scaleY
            }, set: function (t) {
                this.setScale(this.$scaleX, t)
            }, enumerable: !0,
            configurable: !0
        }), e.prototype.setScale = function (t, e) {
            this.$scaleX == t && this.$scaleY == e || (this.$scaleX = t, this.$scaleY = e, this.handleScaleChanged(), this.applyPivot(), this.updateGear(2))
        }, Object.defineProperty(e.prototype, "skewX", {
            get: function () {
                return this.$skewX
            }, set: function (t) {
                this.setSkew(t, this.$skewY)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "skewY", {
            get: function () {
                return this.$skewY
            }, set: function (t) {
                this.setSkew(this.$skewX, t)
            }, enumerable: !0,
            configurable: !0
        }), e.prototype.setSkew = function (e, i) {
            this.$skewX == e && this.$skewY == i || (this.$skewX = e, this.$skewY = i, this.$displayObject.skew.set(e * -t.utils.NumberUtil.RADIAN, i * t.utils.NumberUtil.RADIAN), this.applyPivot())
        }, e.prototype.mapPivotWidth = function (t) {
            return t * this.$width
        }, e.prototype.mapPivotHeight = function (t) {
            return t * this.$height
        }, Object.defineProperty(e.prototype, "pivotX", {
            get: function () {
                return this.$pivot.x
            }, set: function (t) {
                this.setPivot(t, this.pivotY)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "pivotY", {
            get: function () {
                return this.$pivot.y
            }, set: function (t) {
                this.setPivot(this.pivotX, t)
            }, enumerable: !0,
            configurable: !0
        }), e.prototype.setPivot = function (t, e, i) {
            void 0 === i && (i = !1), this.$pivot.x == t && this.$pivot.y == e && this.$pivotAsAnchor == i || (this.$pivot.set(t, e), this.$pivotAsAnchor = i, this.updatePivotOffset(), this.handleXYChanged())
        }, e.prototype.internalSetPivot = function (t, e, i) {
            this.$pivot.set(t, e), this.$pivotAsAnchor = i, i && this.handleXYChanged()
        }, e.prototype.updatePivotOffset = function () {
            if (0 != this.$pivot.x || 0 != this.$pivot.y && this.$displayObject.transform) {
                var t = this.mapPivotWidth(this.$pivot.x),
                    i = this.mapPivotHeight(this.$pivot.y);
                e.sHelperPoint.set(t, i), this.$displayObject.transform.updateLocalTransform();
                var n = this.$displayObject.localTransform,
                    s = n.apply(e.sHelperPoint, e.sHelperPoint);
                s.x -= n.tx, s.y -= n.ty, this.$pivotOffset.set(this.$pivot.x * this.$width - s.x, this.$pivot.y * this.$height - s.y)
            } else this.$pivotOffset.set(0, 0)
        }, e.prototype.applyPivot = function () {
            0 == this.$pivot.x && 0 == this.$pivot.y || (this.updatePivotOffset(), this.handleXYChanged())
        }, Object.defineProperty(e.prototype, "touchable", {
            get: function () {
                return this.$touchable
            }, set: function (t) {
                this.$touchable = t, this.$displayObject.interactive = this.$touchable
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "grayed", {
            get: function () {
                return this.$grayed
            }, set: function (t) {
                this.$grayed != t && (this.$grayed = t, this.handleGrayedChanged(), this.updateGear(3))
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "enabled", {
            get: function () {
                return !this.$grayed && this.$touchable
            }, set: function (t) {
                this.grayed = !t, this.touchable = t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "rotation", {
            get: function () {
                return this.$rotation
            }, set: function (e) {
                this.$rotation != e && (this.$rotation = e, this.$displayObject && (this.$displayObject.rotation = t.utils.NumberUtil.angleToRadian(this.normalizeRotation)), this.applyPivot(), this.updateGear(3))
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "normalizeRotation", {
            get: function () {
                var t = this.$rotation % 360;
                return t > 180 ? t -= 360 : t < -180 && (t += 360), t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "alpha", {
            get: function () {
                return this.$alpha
            }, set: function (t) {
                this.$alpha != t && (this.$alpha = t, this.updateAlpha())
            }, enumerable: !0,
            configurable: !0
        }), e.prototype.updateAlpha = function () {
            this.$displayObject && (this.$displayObject.alpha = this.$alpha), this.updateGear(3)
        }, Object.defineProperty(e.prototype, "visible", {
            get: function () {
                return this.$visible
            }, set: function (t) {
                this.$visible != t && (this.$visible = t, this.$displayObject && (this.$displayObject.visible = this.$visible), this.$parent && (this.$parent.childStateChanged(this), this.$parent.setBoundsChangedFlag()), this.emit("__visibleChanged", this.$visible, this))
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "internalVisible", {
            get: function () {
                return this.$internalVisible
            }, set: function (t) {
                t != this.$internalVisible && (this.$internalVisible = t, this.$parent && this.$parent.childStateChanged(this))
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "finalVisible", {
            get: function () {
                return this.$visible && this.$internalVisible && (!this.$group || this.$group.finalVisible)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "sortingOrder", {
            get: function () {
                return this.$sortingOrder
            }, set: function (t) {
                if (t < 0 && (t = 0), this.$sortingOrder != t) {
                    var e = this.$sortingOrder;
                    this.$sortingOrder = t, null != this.$parent && this.$parent.childSortingOrderChanged(this, e, this.$sortingOrder)
                }
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "focusable", {
            get: function () {
                return this.$focusable
            }, set: function (t) {
                this.$focusable = t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "focused", {
            get: function () {
                return this.root.focus == this
            }, enumerable: !0,
            configurable: !0
        }), e.prototype.requestFocus = function () {
            for (var t = this; t && !t.$focusable;) t = t.parent;
            null != t && (this.root.focus = t)
        }, Object.defineProperty(e.prototype, "tooltips", {
            get: function () {
                return this.$tooltips
            }, set: function (t) {
                this.$tooltips = t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "blendMode", {
            get: function () {
                return this.$displayObject && this.$displayObject instanceof PIXI.Sprite ? t.BlendModeMap[this.$displayObject.blendMode] || "None" : t.BlendModeMap[0]
            }, set: function (e) {
                if (e && e.length && this.$displayObject && this.$displayObject instanceof PIXI.Sprite)
                    for (var i = 0; i < t.BlendModeMap.length; i++)
                        if (t.BlendModeMap[i].toLowerCase() === e.toLowerCase()) return void(this.$displayObject.blendMode = i)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "filters", {
            get: function () {
                return this.$displayObject.filters
            }, set: function (t) {
                this.$displayObject.filters = t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "inContainer", {
            get: function () {
                return null != this.$displayObject.parent
            }, enumerable: !0,
            configurable: !0
        }), e.isDisplayObjectOnStage = function (e) {
            if (!e || !e.parent) return !1;
            for (var i = e; null != i;) {
                if (i == t.GRoot.inst.nativeStage) return !0;
                i = i.parent
            }
            return !1
        }, Object.defineProperty(e.prototype, "onStage", {
            get: function () {
                return e.isDisplayObjectOnStage(this.$displayObject)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "resourceURL", {
            get: function () {
                return null != this.packageItem ? "ui://" + this.packageItem.owner.id + this.packageItem.id : null
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "group", {
            get: function () {
                return this.$group
            }, set: function (t) {
                this.$group = t
            }, enumerable: !0,
            configurable: !0
        }), e.prototype.getGear = function (e) {
            var i = this.$gears[e];
            if (null == i) {
                switch (e) {
                case 0:
                    i = new t.GearDisplay(this);
                    break;
                case 1:
                    i = new t.GearXY(this);
                    break;
                case 2:
                    i = new t.GearSize(this);
                    break;
                case 3:
                    i = new t.GearLook(this);
                    break;
                case 4:
                    if (!t.isColorGear(this)) throw new Error("Invalid component type to add GearColor feature, please check the component named " + this.$name + " in the Editor.");
                    i = new t.GearColor(this);
                    break;
                case 5:
                    if (!t.isAnimationGear(this)) throw new Error("Invalid component type to add GearAnimation feature, please check the component named " + this.$name + " in the Editor.");
                    i = new t.GearAnimation(this);
                    break;
                case 6:
                    i = new t.GearText(this);
                    break;
                case 7:
                    i = new t.GearIcon(this);
                    break;
                default:
                    throw new Error("FGUI: invalid gear type")
                }
                this.$gears[e] = i
            }
            return i
        }, e.prototype.updateGear = function (t) {
            null != this.$gears[t] && this.$gears[t].updateState()
        }, e.prototype.updateGearFromRelations = function (t, e, i) {
            null != this.$gears[t] && this.$gears[t].updateFromRelations(e, i)
        }, e.prototype.hasGearController = function (t, e) {
            return this.$gears[t] && this.$gears[t].controller == e
        }, e.prototype.lockGearDisplay = function () {
            var t = this.$gears[0];
            if (t && t.controller) {
                var e = t.lock();
                return this.checkGearVisible(), e
            }
            return 0
        }, e.prototype.releaseGearDisplay = function (t) {
            var e = this.$gears[0];
            e && e.controller && (e.release(t), this.checkGearVisible())
        }, e.prototype.checkGearVisible = function () {
            if (!this.$handlingController) {
                var t = this.$gears[0],
                    e = !t || t.connected;
                e != this.$internalVisible && (this.$internalVisible = e, this.$parent && this.$parent.childStateChanged(this))
            }
        }, Object.defineProperty(e.prototype, "gearXY", {
            get: function () {
                return this.getGear(1)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "gearSize", {
            get: function () {
                return this.getGear(2)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "gearLook", {
            get: function () {
                return this.getGear(3)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "relations", {
            get: function () {
                return this.$relations
            }, enumerable: !0,
            configurable: !0
        }), e.prototype.addRelation = function (t, e, i) {
            void 0 === i && (i = !1), this.$relations.add(t, e, i)
        }, e.prototype.removeRelation = function (t, e) {
            void 0 === e && (e = 0), this.$relations.remove(t, e)
        }, Object.defineProperty(e.prototype, "displayObject", {
            get: function () {
                return this.$displayObject
            }, enumerable: !0,
            configurable: !0
        }), e.prototype.createDisplayObject = function () {}, e.prototype.setDisplayObject = function (t) {
            this.$displayObject = t
        }, Object.defineProperty(e.prototype, "parent", {
            get: function () {
                return this.$parent
            }, set: function (t) {
                this.$parent = t
            }, enumerable: !0,
            configurable: !0
        }), e.prototype.removeFromParent = function () {
            this.$parent && this.$parent.removeChild(this)
        }, Object.defineProperty(e.prototype, "root", {
            get: function () {
                if (this instanceof t.GRoot) return this;
                for (var e = this.$parent; e;) {
                    if (e instanceof t.GRoot) return e;
                    e = e.parent
                }
                return t.GRoot.inst
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "text", {
            get: function () {
                return null
            }, set: function (t) {}, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "icon", {
            get: function () {
                return null
            }, set: function (t) {}, enumerable: !0,
            configurable: !0
        }), e.prototype.dispose = function () {
            this.removeFromParent(), this.$relations.dispose(), this.removeAllListeners(), t.GRoot.inst.nativeStage.off(t.InteractiveEvents.Move, this.$moving, this), t.GRoot.inst.nativeStage.off(t.InteractiveEvents.Up, this.$end, this), t.GRoot.inst.nativeStage.off(t.InteractiveEvents.Move, this.$moving2, this), t.GRoot.inst.nativeStage.off(t.InteractiveEvents.Up, this.$end2, this), this.$displayObject.destroy()
        }, e.prototype.click = function (e, i) {
            return this.on(t.InteractiveEvents.Click, e, i)
        }, e.prototype.removeClick = function (e, i) {
            return this.off(t.InteractiveEvents.Click, e, i)
        }, e.prototype.hasClick = function (e) {
            return this.hasListener(t.InteractiveEvents.Click, e)
        }, e.prototype.on = function (t, e, i) {
            return null == t ? this : (this.$displayObject.on(t, e, i), this)
        }, e.prototype.off = function (t, e, i) {
            return null == t ? this : (this.$displayObject.listeners(t, !0) && this.$displayObject.off(t, e, i), this)
        }, e.prototype.once = function (t, e, i) {
            return null == t ? this : (this.$displayObject.once(t, e, i), this)
        }, e.prototype.hasListener = function (t, e) {
            return e ? this.$displayObject.listeners(t).indexOf(e) >= 0 : this.$displayObject.listeners(t, !0)
        }, e.prototype.emit = function (t) {
            for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
            return !e || e.length <= 0 ? e = [t] : e.unshift(t), this.$displayObject.emit.apply(this.$displayObject, e)
        }, e.prototype.removeAllListeners = function (t) {
            this.$displayObject.removeAllListeners(t)
        }, Object.defineProperty(e.prototype, "draggable", {
            get: function () {
                return this.$draggable
            }, set: function (t) {
                this.$draggable != t && (this.$draggable = t, this.initDrag())
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "dragBounds", {
            get: function () {
                return this.$dragBounds
            }, set: function (t) {
                this.$dragBounds = t
            }, enumerable: !0,
            configurable: !0
        }), e.prototype.startDrag = function (t) {
            void 0 === t && (t = -1), this.onStage && this.dragBegin()
        }, e.prototype.stopDrag = function () {
            this.dragEnd()
        }, Object.defineProperty(e.prototype, "dragging", {
            get: function () {
                return e.draggingObject == this
            }, enumerable: !0,
            configurable: !0
        }), e.prototype.localToGlobal = function (t, i, n) {
            return void 0 === t && (t = 0), void 0 === i && (i = 0), this.$pivotAsAnchor && (t += this.$pivot.x * this.$width, i += this.$pivot.y * this.$height), n || (n = e.sHelperPoint), n.x = t, n.y = i, this.$displayObject.toGlobal(n, n)
        }, e.prototype.globalToLocal = function (i, n, s) {
            return void 0 === i && (i = 0), void 0 === n && (n = 0), s || (s = e.sHelperPoint), s.set(i, n), s = this.$displayObject.toLocal(s, t.GRoot.inst.nativeStage), this.$pivotAsAnchor && (s.x -= this.$pivot.x * this.$width, s.y -= this.$pivot.y * this.$height), s
        }, e.prototype.localToRoot = function (e, i, n) {
            void 0 === e && (e = 0), void 0 === i && (i = 0);
            var s = this.localToGlobal(e, i, n);
            return s.x /= t.GRoot.inst.contentScaleFactor, s.y /= t.GRoot.inst.contentScaleFactor, s
        }, e.prototype.rootToLocal = function (e, i, n) {
            return void 0 === e && (e = 0), void 0 === i && (i = 0), e *= t.GRoot.inst.contentScaleFactor, i *= t.GRoot.inst.contentScaleFactor, this.globalToLocal(e, i, n)
        }, e.prototype.localToGlobalRect = function (t, i, n, s, r) {
            void 0 === t && (t = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), void 0 === s && (s = 0), null == r && (r = e.sDragHelperRect);
            var o = this.localToGlobal(t, i);
            return r.x = o.x, r.y = o.y, r.width = n, r.height = s, r
        }, e.prototype.globalToLocalRect = function (t, i, n, s, r) {
            void 0 === t && (t = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), void 0 === s && (s = 0), null == r && (r = e.sDragHelperRect);
            var o = this.globalToLocal(t, i);
            return r.x = o.x, r.y = o.y, r.width = n, r.height = s, r
        }, e.prototype.handleControllerChanged = function (t) {
            this.$handlingController = !0;
            for (var e = 0; e < 8; e++) {
                var i = this.$gears[e];
                null != i && i.controller == t && i.apply()
            }
            this.$handlingController = !1, this.checkGearVisible()
        }, e.prototype.switchDisplayObject = function (t) {
            if (t != this.$displayObject) {
                var e = this.$displayObject;
                if (this.inContainer) {
                    var i = this.$displayObject.parent.getChildIndex(this.$displayObject);
                    this.$displayObject.parent.addChildAt(t, i), this.$displayObject.parent.removeChild(this.$displayObject)
                }
                this.$displayObject = t, this.$displayObject.x = e.x, this.$displayObject.y = e.y, this.$displayObject.rotation = e.rotation, this.$displayObject.alpha = e.alpha, this.$displayObject.visible = e.visible, this.$displayObject.scale.x = e.scale.x, this.$displayObject.scale.y = e.scale.y, this.$displayObject.interactive = e.interactive, this.$displayObject.interactiveChildren = e.interactiveChildren
            }
        }, e.prototype.handleXYChanged = function () {
            if (this.$displayObject) {
                var t = this.$x,
                    e = this.$y;
                this.$pivotAsAnchor && (t -= this.$pivot.x * this.$width, e -= this.$pivot.y * this.$height), this.$pixelSnapping && (t = Math.round(t), e = Math.round(e)), this.$displayObject.position.set(t + this.$pivotOffset.x, e + this.$pivotOffset.y)
            }
        }, e.prototype.handleSizeChanged = function () {}, e.prototype.handleScaleChanged = function () {
            this.$displayObject && this.$displayObject.scale.set(this.$scaleX, this.$scaleY)
        }, Object.defineProperty(e.prototype, "colorFilter", {
            get: function () {
                if (this.$colorFilter) return this.$colorFilter;
                if (this.$colorFilter = new PIXI.filters.ColorMatrixFilter, this.$displayObject) {
                    var t = this.$displayObject.filters || [];
                    t.push(this.$colorFilter), this.$displayObject.filters = t
                }
                return this.$colorFilter
            }, enumerable: !0,
            configurable: !0
        }), e.prototype.updateColorComponents = function (i, n, s, r) {
            e.$colorHelper || (e.$colorHelper = new t.utils.ColorMatrix);
            var o = e.$colorHelper;
            o.setColor(i, 100 * n, 100 * s, 180 * r);
            var h = this.colorFilter;
            h.enabled = !0, h.reset(), h.matrix = o.toArray(), this.$lastColorComponents || (this.$lastColorComponents = []), this.$lastColorComponents.length = 0, this.$lastColorComponents.push(o.brightness, o.contrast, o.saturation, o.hue)
        }, e.prototype.handleGrayedChanged = function () {
            if (this.$displayObject) {
                var t = this.colorFilter;
                t.enabled = !0, this.$grayed ? t.blackAndWhite(!0) : this.$lastColorComponents && this.$lastColorComponents.length >= 4 ? this.updateColorComponents(this.$lastColorComponents[0], this.$lastColorComponents[1], this.$lastColorComponents[2], this.$lastColorComponents[3]) : t.enabled = !1
            }
        }, e.prototype.constructFromResource = function () {}, e.prototype.setupBeforeAdd = function (t) {
            var e, i;
            if (this.$id = t.attributes.id, this.$name = t.attributes.name, i = (e = t.attributes.xy).split(","), this.setXY(parseInt(i[0]), parseInt(i[1])), (e = t.attributes.size) && (i = e.split(","), this.$initWidth = parseInt(i[0]), this.$initHeight = parseInt(i[1]), this.setSize(this.$initWidth, this.$initHeight, !0)), (e = t.attributes.scale) && (i = e.split(","), this.setScale(parseFloat(i[0]), parseFloat(i[1]))), (e = t.attributes.rotation) && (this.rotation = parseInt(e)), (e = t.attributes.skew) && (i = e.split(","), this.setSkew(parseFloat(i[0]), parseFloat(i[1]))), e = t.attributes.pivot) {
                i = e.split(",");
                var n = parseFloat(i[0]),
                    s = parseFloat(i[1]);
                e = t.attributes.anchor, this.setPivot(n, s, "true" == e)
            }
            if ((e = t.attributes.alpha) && (this.alpha = parseFloat(e)), "false" == t.attributes.touchable && (this.touchable = !1), "false" == t.attributes.visible && (this.visible = !1), "true" == t.attributes.grayed && (this.grayed = !0), this.tooltips = t.attributes.tooltips, (e = t.attributes.blend) && (this.blendMode = e), e = t.attributes.filter) switch (e) {
            case "color":
                i = (e = t.attributes.filterData).split(","), this.updateColorComponents(parseFloat(i[0]), parseFloat(i[1]), parseFloat(i[2]), parseFloat(i[3]))
            }
        }, e.prototype.setupAfterAdd = function (e) {
            var i = this,
                n = e.attributes.group;
            n && (this.$group = this.$parent.getChildById(n)), e.children.forEach(function (e) {
                var n = t.GearXMLNodeNameMap[e.nodeName];
                void 0 != n && i.getGear(n).setup(e)
            }, this)
        }, e.castFromNativeObject = function (e) {
            return t.isUIObject(e) ? e.UIOwner : null
        }, e.prototype.initDrag = function () {
            this.$draggable ? this.on(t.InteractiveEvents.Down, this.$touchBegin, this) : this.off(t.InteractiveEvents.Down, this.$touchBegin, this)
        }, e.prototype.dragBegin = function () {
            null != e.draggingObject && e.draggingObject.stopDrag(), e.sGlobalDragStart.x = t.GRoot.globalMouseStatus.mouseX, e.sGlobalDragStart.y = t.GRoot.globalMouseStatus.mouseY, this.localToGlobalRect(0, 0, this.width, this.height, e.sGlobalRect), e.draggingObject = this, t.GRoot.inst.nativeStage.on(t.InteractiveEvents.Move, this.$moving2, this), t.GRoot.inst.nativeStage.on(t.InteractiveEvents.Up, this.$end2, this)
        }, e.prototype.dragEnd = function () {
            e.draggingObject == this && (t.GRoot.inst.nativeStage.off(t.InteractiveEvents.Move, this.$moving2, this), t.GRoot.inst.nativeStage.off(t.InteractiveEvents.Up, this.$end2, this), e.draggingObject = null), e.$dragBeginCancelled = !0
        }, e.prototype.reset = function () {
            t.GRoot.inst.nativeStage.off(t.InteractiveEvents.Move, this.$moving, this), t.GRoot.inst.nativeStage.off(t.InteractiveEvents.Up, this.$end, this)
        }, e.prototype.$touchBegin = function (e) {
            null == this.$touchDownPoint && (this.$touchDownPoint = new PIXI.Point), this.$touchDownPoint.x = e.data.global.x, this.$touchDownPoint.y = e.data.global.y, t.GRoot.inst.nativeStage.on(t.InteractiveEvents.Move, this.$moving, this), t.GRoot.inst.nativeStage.on(t.InteractiveEvents.Up, this.$end, this)
        }, e.prototype.$end = function (t) {
            this.reset()
        }, e.prototype.$moving = function (i) {
            var n = t.UIConfig.touchDragSensitivity;
            null != this.$touchDownPoint && Math.abs(this.$touchDownPoint.x - i.data.global.x) < n && Math.abs(this.$touchDownPoint.y - i.data.global.y) < n || (this.reset(), e.$dragBeginCancelled = !1, i.currentTarget = this.$displayObject, this.$displayObject.emit("__dragStart", i, this), e.$dragBeginCancelled || this.dragBegin())
        }, e.prototype.$moving2 = function (i) {
            var n = i.data.global.x - e.sGlobalDragStart.x + e.sGlobalRect.x,
                s = i.data.global.y - e.sGlobalDragStart.y + e.sGlobalRect.y;
            if (null != this.$dragBounds) {
                var r = t.GRoot.inst.localToGlobalRect(this.$dragBounds.x, this.$dragBounds.y, this.$dragBounds.width, this.$dragBounds.height, e.sDragHelperRect);
                n < r.x ? n = r.x : n + e.sGlobalRect.width > r.right && (n = r.right - e.sGlobalRect.width) < r.x && (n = r.x), s < r.y ? s = r.y : s + e.sGlobalRect.height > r.bottom && (s = r.bottom - e.sGlobalRect.height) < r.y && (s = r.y)
            }
            e.sUpdatingWhileDragging = !0, e.sHelperPoint.x = n, e.sHelperPoint.y = s;
            var o = this.parent.globalToLocal(n, s, e.sHelperPoint);
            this.setXY(Math.round(o.x), Math.round(o.y)), e.sUpdatingWhileDragging = !1, i.currentTarget = this.$displayObject, this.$displayObject.emit("__dragMoving", i, this)
        }, e.prototype.$end2 = function (t) {
            e.draggingObject == this && (this.stopDrag(), t.currentTarget = this.$displayObject, this.$displayObject.emit("__dragEnd", t, this))
        }, e.gInstanceCounter = 0, e.sGlobalDragStart = new PIXI.Point, e.sGlobalRect = new PIXI.Rectangle, e.sHelperPoint = new PIXI.Point, e.sDragHelperRect = new PIXI.Rectangle, e
    }();
    t.GObject = e
}(fgui || (fgui = {})),
function (t) {
    var e = function (e) {
        function i() {
            var i = e.call(this) || this;
            return i.$sortingChildCount = 0, i.$children = [], i.$controllers = [], i.$transitions = [], i.$margin = new t.utils.Margin, i.$alignOffset = new PIXI.Point, i
        }
        return __extends(i, e), i.prototype.createDisplayObject = function () {
            this.$rootContainer = new t.UIContainer(this), this.setDisplayObject(this.$rootContainer), this.$container = this.$rootContainer
        }, i.prototype.dispose = function () {
            t.GTimer.inst.remove(this.$validate, this), this.off("added", this.$added, this), this.off("removed", this.$removed, this), this.$transitions.forEach(function (t) {
                t.dispose()
            });
            for (var i = this.$children.length - 1; i >= 0; --i) {
                var n = this.$children[i];
                n.parent = null, n.dispose()
            }
            this.$boundsChanged = !1, this.$scrollPane && this.$scrollPane.dispose(), e.prototype.dispose.call(this)
        }, Object.defineProperty(i.prototype, "displayListContainer", {
            get: function () {
                return this.$container
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.addChild = function (t) {
            return this.addChildAt(t, this.$children.length), t
        }, i.prototype.addChildAt = function (t, e) {
            if (void 0 === e && (e = 0), !t) throw new Error("Invalid child");
            var i = this.$children.length;
            if (e >= 0 && e <= i) {
                if (t.parent == this) this.setChildIndex(t, e);
                else {
                    t.removeFromParent(), t.parent = this;
                    var n = this.$children.length;
                    0 != t.sortingOrder ? (this.$sortingChildCount++, e = this.getInsertPosForSortingChild(t)) : this.$sortingChildCount > 0 && e > n - this.$sortingChildCount && (e = n - this.$sortingChildCount), e == n ? this.$children.push(t) : this.$children.splice(e, 0, t), this.childStateChanged(t), this.setBoundsChangedFlag()
                }
                return t
            }
            throw new Error("Invalid child index")
        }, i.prototype.getInsertPosForSortingChild = function (t) {
            var e = this.$children.length,
                i = 0;
            for (i = 0; i < e; i++) {
                var n = this.$children[i];
                if (n != t && t.sortingOrder < n.sortingOrder) break
            }
            return i
        }, i.prototype.removeChild = function (t, e) {
            void 0 === e && (e = !1);
            var i = this.$children.indexOf(t);
            return -1 != i && this.removeChildAt(i, e), t
        }, i.prototype.removeChildAt = function (t, e) {
            if (void 0 === e && (e = !1), t >= 0 && t < this.numChildren) {
                var i = this.$children[t];
                return i.parent = null, 0 != i.sortingOrder && this.$sortingChildCount--, this.$children.splice(t, 1), i.inContainer && this.$container.removeChild(i.displayObject), !0 === e && i.dispose(), this.setBoundsChangedFlag(), i
            }
            throw new Error("Invalid child index")
        }, i.prototype.removeChildren = function (t, e, i) {
            void 0 === t && (t = 0), void 0 === e && (e = -1), void 0 === i && (i = !1), (e < 0 || e >= this.numChildren) && (e = this.numChildren - 1);
            for (var n = t; n <= e; ++n) this.removeChildAt(t, i)
        }, i.prototype.getChildAt = function (t) {
            if (void 0 === t && (t = 0), t >= 0 && t < this.numChildren) return this.$children[t];
            throw new Error("Invalid child index")
        }, i.prototype.getChild = function (t) {
            for (var e = this.$children.length, i = 0; i < e; ++i)
                if (this.$children[i].name == t) return this.$children[i];
            return null
        }, i.prototype.getChildInGroup = function (t, e) {
            for (var i = this.$children.length, n = 0; n < i; ++n) {
                var s = this.$children[n];
                if (s.group == e && s.name == t) return s
            }
            return null
        }, i.prototype.getChildById = function (t) {
            for (var e = this.$children.length, i = 0; i < e; ++i)
                if (this.$children[i].id == t) return this.$children[i];
            return null
        }, i.prototype.getChildIndex = function (t) {
            return this.$children.indexOf(t)
        }, i.prototype.setChildIndex = function (t, e) {
            void 0 === e && (e = 0);
            var i = this.$children.indexOf(t);
            if (-1 == i) throw new Error("no such child found");
            if (0 == t.sortingOrder) {
                var n = this.$children.length;
                this.$sortingChildCount > 0 && e > n - this.$sortingChildCount - 1 && (e = n - this.$sortingChildCount - 1), this.$setChildIndex(t, i, e)
            }
        }, i.prototype.setChildIndexBefore = function (t, e) {
            var i = this.$children.indexOf(t);
            if (-1 == i) throw new Error("no such child found");
            if (0 != t.sortingOrder) return i;
            var n = this.$children.length;
            return this.$sortingChildCount > 0 && e > n - this.$sortingChildCount - 1 && (e = n - this.$sortingChildCount - 1), i < e ? this.$setChildIndex(t, i, e - 1) : this.$setChildIndex(t, i, e)
        }, i.prototype.$setChildIndex = function (t, e, i) {
            void 0 === i && (i = 0);
            var n = this.$children.length;
            if (i > n && (i = n), e == i) return e;
            if (this.$children.splice(e, 1), this.$children.splice(i, 0, t), t.inContainer) {
                for (var s = 0, r = this.$container.children.length, o = 0; o < i; o++) {
                    this.$children[o].inContainer && s++
                }
                s == r && s--, this.$container.setChildIndex(t.displayObject, s), this.setBoundsChangedFlag()
            }
            return i
        }, i.prototype.swapChildren = function (t, e) {
            var i = this.$children.indexOf(t),
                n = this.$children.indexOf(e);
            if (-1 == i || -1 == n) throw new Error("no such child found");
            this.swapChildrenAt(i, n)
        }, i.prototype.swapChildrenAt = function (t, e) {
            void 0 === e && (e = 0);
            var i = this.$children[t],
                n = this.$children[e];
            this.setChildIndex(i, e), this.setChildIndex(n, t)
        }, Object.defineProperty(i.prototype, "numChildren", {
            get: function () {
                return this.$children.length
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.isAncestorOf = function (t) {
            if (null == t) return !1;
            for (var e = t.parent; e;) {
                if (e == this) return !0;
                e = e.parent
            }
            return !1
        }, i.prototype.addController = function (t) {
            this.$controllers.push(t), t.$parent = this, this.applyController(t)
        }, i.prototype.getControllerAt = function (t) {
            return this.$controllers[t]
        }, i.prototype.getController = function (t) {
            for (var e = this.$controllers.length, i = 0; i < e; ++i) {
                var n = this.$controllers[i];
                if (n.name == t) return n
            }
            return null
        }, i.prototype.removeController = function (t) {
            var e = this.$controllers.indexOf(t);
            if (-1 == e) throw new Error("controller not exists");
            t.$parent = null, this.$controllers.splice(e, 1), this.$children.forEach(function (e) {
                e.handleControllerChanged(t)
            })
        }, Object.defineProperty(i.prototype, "controllers", {
            get: function () {
                return this.$controllers
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.childStateChanged = function (e) {
            var i = this;
            if (!this.$buildingDisplayList)
                if (e instanceof t.GGroup) this.$children.forEach(function (t) {
                    t.group == e && i.childStateChanged(t)
                }, this);
                else if (e.displayObject)
                if (e.finalVisible) {
                    if (!e.displayObject.parent) {
                        for (var n = 0, s = this.$children.length, r = 0; r < s; r++) {
                            var o = this.$children[r];
                            if (o == e) break;
                            o.displayObject && o.displayObject.parent && n++
                        }
                        this.$container.addChildAt(e.displayObject, n)
                    }
                } else e.displayObject.parent && this.$container.removeChild(e.displayObject)
        }, i.prototype.applyController = function (t) {
            this.$applyingController = t, this.$children.forEach(function (e) {
                e.handleControllerChanged(t)
            }), this.$applyingController = null, t.executeActions()
        }, i.prototype.applyAllControllers = function () {
            var t = this;
            this.$controllers.forEach(function (e) {
                t.applyController(e)
            }, this)
        }, i.prototype.adjustRadioGroupDepth = function (e, i) {
            var n = -1,
                s = -1;
            this.$children.forEach(function (r, o) {
                r == e ? n = o : r instanceof t.GButton && r.relatedController == i && o > s && (s = o)
            }), n < s && (null != this.$applyingController && this.$children[s].handleControllerChanged(this.$applyingController), this.swapChildrenAt(n, s))
        }, i.prototype.getTransitionAt = function (t) {
            return this.$transitions[t]
        }, i.prototype.getTransition = function (t) {
            for (var e = this.$transitions.length, i = 0; i < e; ++i) {
                var n = this.$transitions[i];
                if (n.name == t) return n
            }
            return null
        }, i.prototype.isChildInView = function (t) {
            return null != this.$rootContainer.scrollRect ? t.x + t.width >= 0 && t.x <= this.width && t.y + t.height >= 0 && t.y <= this.height : null == this.$scrollPane || this.$scrollPane.isChildInView(t)
        }, i.prototype.getFirstChildInView = function () {
            for (var t = this.$children.length, e = 0; e < t; ++e) {
                var i = this.$children[e];
                if (this.isChildInView(i)) return e
            }
            return -1
        }, Object.defineProperty(i.prototype, "scrollPane", {
            get: function () {
                return this.$scrollPane
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "opaque", {
            get: function () {
                return this.$opaque
            }, set: function (t) {
                this.$opaque != t && (this.$opaque = t, this.$opaque ? this.updateOpaque() : this.$rootContainer.hitArea && this.$rootContainer.hitArea instanceof PIXI.Rectangle && (this.$rootContainer.hitArea.width = this.$rootContainer.hitArea.height = 0))
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "margin", {
            get: function () {
                return this.$margin
            }, set: function (t) {
                this.$margin.copy(t), null != this.$rootContainer.scrollRect && (this.$container.x = this.$margin.left + this.$alignOffset.x, this.$container.y = this.$margin.top + this.$alignOffset.y), this.handleSizeChanged()
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "mask", {
            get: function () {
                return this.$rootContainer.mask
            }, set: function (t) {
                t && (t.interactive = t.interactiveChildren = !1, t instanceof PIXI.Graphics && (t.isMask = !0), this.$rootContainer.mask = t)
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.updateOpaque = function () {
            this.$rootContainer.hitArea || (this.$rootContainer.hitArea = new PIXI.Rectangle);
            var t = this.$rootContainer.hitArea;
            t.x = t.y = 0, t.width = this.width, t.height = this.height
        }, i.prototype.updateScrollRect = function () {
            var t = this.$rootContainer.scrollRect;
            null == t && (t = new PIXI.Rectangle);
            var e = this.width - this.$margin.right,
                i = this.height - this.$margin.bottom;
            t.x = t.y = 0, t.width = e, t.height = i, this.$rootContainer.scrollRect = t
        }, i.prototype.setupScroll = function (e, i, n, s, r, o, h, a) {
            this.$rootContainer == this.$container && (this.$container = new PIXI.Container, this.$rootContainer.addChild(this.$container)), this.$scrollPane = new t.ScrollPane(this, i, e, n, s, r, o, h, a)
        }, i.prototype.setupOverflow = function (t) {
            1 == t ? (this.$rootContainer == this.$container && (this.$container = new PIXI.Container, this.$rootContainer.addChild(this.$container)), this.updateScrollRect(), this.$container.x = this.$margin.left, this.$container.y = this.$margin.top) : 0 == this.$margin.left && 0 == this.$margin.top || (this.$rootContainer == this.$container && (this.$container = new PIXI.Container, this.$rootContainer.addChild(this.$container)), this.$container.x = this.$margin.left, this.$container.y = this.$margin.top), this.setBoundsChangedFlag()
        }, i.prototype.handleSizeChanged = function () {
            this.$scrollPane ? this.$scrollPane.onOwnerSizeChanged() : null != this.$rootContainer.scrollRect && this.updateScrollRect(), this.$opaque && this.updateOpaque()
        }, i.prototype.handleGrayedChanged = function () {
            var t = this.getController("grayed");
            null != t ? t.selectedIndex = this.grayed ? 1 : 0 : e.prototype.handleGrayedChanged.call(this)
        }, i.prototype.setBoundsChangedFlag = function () {
            (this.$scrollPane || this.$trackBounds) && (this.$boundsChanged || (this.$boundsChanged = !0, t.GTimer.inst.callLater(this.$validate, this)))
        }, i.prototype.$validate = function (t) {
            this.$boundsChanged && this.updateBounds()
        }, i.prototype.ensureBoundsCorrect = function () {
            this.$boundsChanged && this.updateBounds()
        }, i.prototype.updateBounds = function () {
            var t = 0,
                e = 0,
                i = 0,
                n = 0;
            if (this.$children.length > 0) {
                t = Number.POSITIVE_INFINITY, e = Number.POSITIVE_INFINITY;
                var s = Number.NEGATIVE_INFINITY,
                    r = Number.NEGATIVE_INFINITY,
                    o = 0;
                this.$children.forEach(function (i) {
                    i.ensureSizeCorrect(), (o = i.x) < t && (t = o), (o = i.y) < e && (e = o), (o = i.x + i.actualWidth) > s && (s = o), (o = i.y + i.actualHeight) > r && (r = o)
                }), i = s - t, n = r - e
            }
            this.setBounds(t, e, i, n)
        }, i.prototype.setBounds = function (t, e, i, n) {
            void 0 === n && (n = 0), this.$boundsChanged = !1, this.$scrollPane && this.$scrollPane.setContentSize(Math.round(t + i), Math.round(e + n))
        }, Object.defineProperty(i.prototype, "viewWidth", {
            get: function () {
                return null != this.$scrollPane ? this.$scrollPane.viewWidth : this.width - this.$margin.left - this.$margin.right
            }, set: function (t) {
                null != this.$scrollPane ? this.$scrollPane.viewWidth = t : this.width = t + this.$margin.left + this.$margin.right
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "viewHeight", {
            get: function () {
                return null != this.$scrollPane ? this.$scrollPane.viewHeight : this.height - this.$margin.top - this.$margin.bottom
            }, set: function (t) {
                null != this.$scrollPane ? this.$scrollPane.viewHeight = t : this.height = t + this.$margin.top + this.$margin.bottom
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.getSnappingPosition = function (t, e, i) {
            i || (i = new PIXI.Point);
            var n = this.$children.length;
            if (n <= 0) return i.x = 0, i.y = 0, i;
            this.ensureBoundsCorrect();
            var s = null,
                r = null,
                o = 0;
            if (0 != e) {
                for (; o < n; o++)
                    if (e < (s = this.$children[o]).y) {
                        if (0 == o) {
                            e = 0;
                            break
                        }
                        e = e < (r = this.$children[o - 1]).y + r.actualHeight / 2 ? r.y : s.y;
                        break
                    }
                o == n && (e = s.y)
            }
            if (0 != t) {
                for (o > 0 && o--; o < n; o++)
                    if (t < (s = this.$children[o]).x) {
                        if (0 == o) {
                            t = 0;
                            break
                        }
                        t = t < (r = this.$children[o - 1]).x + r.actualWidth / 2 ? r.x : s.x;
                        break
                    }
                o == n && (t = s.x)
            }
            return i.x = t, i.y = e, i
        }, i.prototype.childSortingOrderChanged = function (t, e, i) {
            if (void 0 === i && (i = 0), 0 == i) this.$sortingChildCount--, this.setChildIndex(t, this.$children.length);
            else {
                0 == e && this.$sortingChildCount++;
                var n = this.$children.indexOf(t),
                    s = this.getInsertPosForSortingChild(t);
                n < s ? this.$setChildIndex(t, n, s - 1) : this.$setChildIndex(t, n, s)
            }
        }, i.prototype.constructFromResource = function () {
            this.constructInternal(null, 0)
        }, i.prototype.constructInternal = function (e, i) {
            var n, s, r, o = this,
                h = this.packageItem.owner.getItemAsset(this.packageItem);
            if (this.$inProgressBuilding = !0, s = (n = h.attributes.size).split(","), this.$sourceWidth = parseInt(s[0]), this.$sourceHeight = parseInt(s[1]), this.$initWidth = this.$sourceWidth, this.$initHeight = this.$sourceHeight, this.setSize(this.$sourceWidth, this.$sourceHeight), (n = h.attributes.pivot) && (s = n.split(","), n = h.attributes.anchor, this.internalSetPivot(parseFloat(s[0]), parseFloat(s[1]), "true" == n)), n = h.attributes.opaque, this.opaque = "false" != n, r = (n = h.attributes.overflow) ? t.ParseOverflowType(n) : 0, (n = h.attributes.margin) && this.$margin.parse(n), 2 == r) {
                var a;
                a = (n = h.attributes.scroll) ? t.ParseScrollType(n) : 1;
                var l = void 0;
                l = (n = h.attributes.scrollBar) ? t.ParseScrollBarDisplayType(n) : 0;
                var u = void 0;
                u = (n = h.attributes.scrollBarFlags) ? parseInt(n) : 0;
                var c = new t.utils.Margin;
                (n = h.attributes.scrollBarMargin) && c.parse(n);
                var p = void 0,
                    $ = void 0;
                (n = h.attributes.scrollBarRes) && (p = (s = n.split(","))[0], $ = s[1]);
                var d = void 0,
                    f = void 0;
                (n = h.attributes.ptrRes) && (d = (s = n.split(","))[0], f = s[1]), this.setupScroll(c, a, l, u, p, $, d, f)
            } else this.setupOverflow(r);
            this.$buildingDisplayList = !0;
            var g = h.children;
            g.forEach(function (e) {
                if ("controller" == e.nodeName) {
                    var i = new t.controller.Controller;
                    o.$controllers.push(i), i.$parent = o, i.setup(e)
                }
            });
            var y = this.packageItem.displayList;
            if (y.forEach(function (n, s) {
                var r;
                null != e ? r = e[i + s] : n.packageItem ? ((r = t.UIObjectFactory.newObject(n.packageItem)).packageItem = n.packageItem, r.constructFromResource()) : r = t.UIObjectFactory.newObjectDirectly(n.type), r.$inProgressBuilding = !0, r.setupBeforeAdd(n.desc), r.parent = o, o.$children.push(r)
            }, this), this.relations.setup(h), this.$children.forEach(function (t, e) {
                t.relations.setup(y[e].desc), t.setupAfterAdd(y[e].desc), t.$inProgressBuilding = !1
            }), n = h.attributes.mask) {
                var m = this.getChildById(n).displayObject;
                if (!(m instanceof PIXI.Graphics || m instanceof PIXI.Sprite)) throw new Error("only PIXI.Sprite or PIXI.Graphics can be applied as mask object");
                this.mask = m
            }
            g.forEach(function (e) {
                if ("transition" == e.nodeName) {
                    var i = new t.Transition(o);
                    o.$transitions.push(i), i.setup(e)
                }
            }, this), this.$transitions.length > 0 && (this.on("added", this.$added, this), this.on("removed", this.$removed, this)), this.applyAllControllers(), this.$buildingDisplayList = !1, this.$inProgressBuilding = !1, this.appendChildrenList(), this.setBoundsChangedFlag(), this.constructFromXML(h)
        }, i.prototype.appendChildrenList = function () {
            var t = this;
            this.$children.forEach(function (e) {
                null != e.displayObject && e.finalVisible && t.$container.addChild(e.displayObject)
            }, this)
        }, i.prototype.constructFromXML = function (t) {}, i.prototype.$added = function (t) {
            this.$transitions.forEach(function (t) {
                t.autoPlay && t.play({
                    times: t.autoPlayRepeat,
                    delay: t.autoPlayDelay
                })
            })
        }, i.prototype.$removed = function (t) {
            this.$transitions.forEach(function (t) {
                t.stop(!1, !1)
            })
        }, i
    }(t.GObject);
    t.GComponent = e
}(fgui || (fgui = {})),
function (t) {
    var e = function (e) {
        function i() {
            var i = e.call(this) || this;
            return i.$mode = 0, i.$title = "", i.$icon = "", i.$pageOption = new t.controller.PageOption, i.$changeStateOnClick = !0, i.$downEffect = 0, i.$downEffectValue = .8, i
        }
        return __extends(i, e), i.prototype.setDisplayObject = function (t) {
            e.prototype.setDisplayObject.call(this, t), this.$displayObject.buttonMode = !0
        }, Object.defineProperty(i.prototype, "icon", {
            get: function () {
                return this.$icon
            }, set: function (t) {
                this.$icon = t, t = this.$selected && this.$selectedIcon ? this.$selectedIcon : this.$icon, null != this.$iconObject && (this.$iconObject.icon = t), this.updateGear(7)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "selectedIcon", {
            get: function () {
                return this.$selectedIcon
            }, set: function (t) {
                this.$selectedIcon = t, t = this.$selected && this.$selectedIcon ? this.$selectedIcon : this.$icon, null != this.$iconObject && (this.$iconObject.icon = t)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "title", {
            get: function () {
                return this.$title
            }, set: function (t) {
                this.$title = t, this.$titleObject && (this.$titleObject.text = this.$selected && this.$selectedTitle ? this.$selectedTitle : this.$title), this.updateGear(6)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "text", {
            get: function () {
                return this.title
            }, set: function (t) {
                this.title = t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "selectedTitle", {
            get: function () {
                return this.$selectedTitle
            }, set: function (t) {
                this.$selectedTitle = t, this.$titleObject && (this.$titleObject.text = this.$selected && this.$selectedTitle ? this.$selectedTitle : this.$title)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "titleColor", {
            get: function () {
                return t.isColorableTitle(this.$titleObject) ? this.$titleObject.titleColor : 0
            }, set: function (e) {
                t.isColorableTitle(this.$titleObject) && (this.$titleObject.titleColor = e)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "fontSize", {
            get: function () {
                return t.isColorableTitle(this.$titleObject) ? this.$titleObject.fontSize : 0
            }, set: function (e) {
                t.isColorableTitle(this.$titleObject) && (this.$titleObject.fontSize = e)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "selected", {
            get: function () {
                return this.$selected
            }, set: function (t) {
                if (0 != this.$mode && this.$selected != t) {
                    if (this.$selected = t, this.grayed && this.$buttonController && this.$buttonController.hasPage(i.DISABLED) ? this.$selected ? this.setState(i.SELECTED_DISABLED) : this.setState(i.DISABLED) : this.$selected ? this.setState(this.$over ? i.SELECTED_OVER : i.DOWN) : this.setState(this.$over ? i.OVER : i.UP), this.$selectedTitle && this.$titleObject && (this.$titleObject.text = this.$selected ? this.$selectedTitle : this.$title), this.$selectedIcon) {
                        var e = this.$selected ? this.$selectedIcon : this.$icon;
                        null != this.$iconObject && (this.$iconObject.icon = e)
                    }
                    this.$relatedController && this.$parent && !this.$parent.$buildingDisplayList && (this.$selected ? (this.$relatedController.selectedPageId = this.$pageOption.id, this.$relatedController.$autoRadioGroupDepth && this.$parent.adjustRadioGroupDepth(this, this.$relatedController)) : 1 == this.$mode && this.$relatedController.selectedPageId == this.$pageOption.id && (this.$relatedController.oppositePageId = this.$pageOption.id))
                }
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "mode", {
            get: function () {
                return this.$mode
            }, set: function (t) {
                this.$mode != t && (0 == t && (this.selected = !1), this.$mode = t)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "relatedController", {
            get: function () {
                return this.$relatedController
            }, set: function (t) {
                t != this.$relatedController && (this.$relatedController = t, this.$pageOption.controller = t, this.$pageOption.clear())
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "pageOption", {
            get: function () {
                return this.$pageOption
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "changeStateOnClick", {
            get: function () {
                return this.$changeStateOnClick
            }, set: function (t) {
                this.$changeStateOnClick = t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "linkedPopup", {
            get: function () {
                return this.$linkedPopup
            }, set: function (t) {
                this.$linkedPopup = t
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.addStateListener = function (t, e) {
            this.on("__stateChanged", t, e)
        }, i.prototype.removeStateListener = function (t, e) {
            this.off("__stateChanged", t, e)
        }, i.prototype.fireClick = function (e) {
            void 0 === e && (e = !0), e && 0 == this.$mode && (this.setState(i.OVER), t.GTimer.inst.add(100, 1, this.setState, this, i.DOWN), t.GTimer.inst.add(200, 1, this.setState, this, i.UP)), this.$click(null)
        }, i.prototype.setState = function (e) {
            if (this.$buttonController && (this.$buttonController.selectedPage = e), 1 == this.$downEffect)
                if (e == i.DOWN || e == i.SELECTED_OVER || e == i.SELECTED_DISABLED) {
                    var n = 255 * this.$downEffectValue,
                        s = (n << 16) + (n << 8) + n;
                    this.$children.forEach(function (e) {
                        t.isColorGear(e) && (e.color = s)
                    })
                } else this.$children.forEach(function (e) {
                    t.isColorGear(e) && (e.color = 16777215)
                });
            else 2 == this.$downEffect && (e == i.DOWN || e == i.SELECTED_OVER || e == i.SELECTED_DISABLED ? this.setScale(this.$downEffectValue, this.$downEffectValue) : this.setScale(1, 1))
        }, i.prototype.handleControllerChanged = function (t) {
            e.prototype.handleControllerChanged.call(this, t), this.$relatedController == t && (this.selected = this.$pageOption.id == t.selectedPageId)
        }, i.prototype.handleGrayedChanged = function () {
            this.$buttonController && this.$buttonController.hasPage(i.DISABLED) ? this.grayed ? this.$selected && this.$buttonController.hasPage(i.SELECTED_DISABLED) ? this.setState(i.SELECTED_DISABLED) : this.setState(i.DISABLED) : this.$selected ? this.setState(i.DOWN) : this.setState(i.UP) : e.prototype.handleGrayedChanged.call(this)
        }, i.prototype.constructFromXML = function (n) {
            var s;
            e.prototype.constructFromXML.call(this, n), (s = (n = t.utils.XmlParser.getChildNodes(n, "Button")[0]).attributes.mode) && (this.$mode = t.ParseButtonMode(s)), (s = n.attributes.downEffect) && (this.$downEffect = "dark" == s ? 1 : "scale" == s ? 2 : 0, s = n.attributes.downEffectValue, this.$downEffectValue = parseFloat(s), 2 == this.$downEffect && this.setPivot(.5, .5)), this.$buttonController = this.getController("button"), this.$titleObject = this.getChild("title"), this.$iconObject = this.getChild("icon"), null != this.$titleObject && (this.$title = this.$titleObject.text), null != this.$iconObject && (this.$icon = this.$iconObject.icon), 0 == this.$mode && this.setState(i.UP), this.on(t.InteractiveEvents.Over, this.$rollover, this), this.on(t.InteractiveEvents.Out, this.$rollout, this), this.on(t.InteractiveEvents.Down, this.$mousedown, this), this.on(t.InteractiveEvents.Click, this.$click, this)
        }, i.prototype.setupAfterAdd = function (i) {
            if (e.prototype.setupAfterAdd.call(this, i), i = t.utils.XmlParser.getChildNodes(i, "Button")[0]) {
                var n = void 0;
                (n = i.attributes.title) && (this.title = n), (n = i.attributes.icon) && (this.icon = n), (n = i.attributes.selectedTitle) && (this.selectedTitle = n), (n = i.attributes.selectedIcon) && (this.selectedIcon = n), (n = i.attributes.titleColor) && (this.titleColor = t.utils.StringUtil.convertFromHtmlColor(n)), (n = i.attributes.titleFontSize) && (this.fontSize = parseInt(n)), n = i.attributes.controller, this.$relatedController = n ? this.$parent.getController(n) : null, this.$pageOption.id = i.attributes.page, this.selected = "true" == i.attributes.checked
            }
        }, i.prototype.$rollover = function (t) {
            this.$buttonController && this.$buttonController.hasPage(i.OVER) && (this.$over = !0, this.$down || this.setState(this.$selected ? i.SELECTED_OVER : i.OVER))
        }, i.prototype.$rollout = function (t) {
            this.$buttonController && this.$buttonController.hasPage(i.OVER) && (this.$over = !1, this.$down || this.setState(this.$selected ? i.DOWN : i.UP))
        }, i.prototype.$mousedown = function (e) {
            this.$down = !0, t.GRoot.inst.on(t.InteractiveEvents.Up, this.$mouseup, this), 0 == this.$mode && (this.grayed && this.$buttonController && this.$buttonController.hasPage(i.DISABLED) ? this.setState(i.SELECTED_DISABLED) : this.setState(i.DOWN)), null != this.$linkedPopup && (this.$linkedPopup instanceof t.Window ? this.$linkedPopup.toggleVisible() : this.root.togglePopup(this.$linkedPopup, this))
        }, i.prototype.$mouseup = function (e) {
            this.$down && (t.GRoot.inst.off(t.InteractiveEvents.Up, this.$mouseup, this), this.$down = !1, 0 == this.$mode && (this.grayed && this.$buttonController && this.$buttonController.hasPage(i.DISABLED) ? this.setState(i.DISABLED) : this.$over ? this.setState(i.OVER) : this.setState(i.UP)))
        }, i.prototype.$click = function (t) {
            this.$changeStateOnClick && (1 == this.$mode ? (this.selected = !this.$selected, this.emit("__stateChanged", this)) : 2 == this.$mode && (this.$selected || (this.selected = !0, this.emit("__stateChanged", this))))
        }, i.prototype.dispose = function () {
            t.GTimer.inst.remove(this.setState, this), t.GTimer.inst.remove(this.setState, this), t.GRoot.inst.off(t.InteractiveEvents.Up, this.$mouseup, this), e.prototype.dispose.call(this)
        }, i.UP = "up", i.DOWN = "down", i.OVER = "over", i.SELECTED_OVER = "selectedOver", i.DISABLED = "disabled", i.SELECTED_DISABLED = "selectedDisabled", i
    }(t.GComponent);
    t.GButton = e
}(fgui || (fgui = {})),
function (t) {
    var e = function (e) {
        function i() {
            var i = e.call(this) || this;
            return i.$visibleItemCount = 0, i.$selectedIndex = 0, i.$popupDir = 1, i.$visibleItemCount = t.UIConfig.defaultComboBoxVisibleItemCount, i.$itemsUpdated = !0, i.$selectedIndex = -1, i.$items = [], i.$values = [], i
        }
        return __extends(i, e), Object.defineProperty(i.prototype, "text", {
            get: function () {
                return this.$titleObject ? this.$titleObject.text : null
            }, set: function (t) {
                this.$titleObject && (this.$titleObject.text = t), this.updateGear(6)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "icon", {
            get: function () {
                return this.$iconObject ? this.$iconObject.icon : null
            }, set: function (t) {
                this.$iconObject && (this.$iconObject.icon = t), this.updateGear(7)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "titleColor", {
            get: function () {
                return t.isColorableTitle(this.$titleObject) ? this.$titleObject.titleColor : 0
            }, set: function (e) {
                t.isColorableTitle(this.$titleObject) && (this.$titleObject.titleColor = e)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "visibleItemCount", {
            get: function () {
                return this.$visibleItemCount
            }, set: function (t) {
                this.$visibleItemCount = t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "popupDirection", {
            get: function () {
                return this.$popupDir
            }, set: function (t) {
                this.$popupDir = t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "items", {
            get: function () {
                return this.$items
            }, set: function (t) {
                t ? this.$items = t.concat() : this.$items.length = 0, this.$items.length > 0 ? (this.$selectedIndex >= this.$items.length ? this.$selectedIndex = this.$items.length - 1 : -1 == this.$selectedIndex && (this.$selectedIndex = 0), this.text = this.$items[this.$selectedIndex], null != this.$icons && this.$selectedIndex < this.$icons.length && (this.icon = this.$icons[this.$selectedIndex])) : (this.text = "", null != this.$icons && (this.icon = null), this.$selectedIndex = -1), this.$itemsUpdated = !0
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "icons", {
            get: function () {
                return this.$icons
            }, set: function (t) {
                this.$icons = t, null != this.$icons && -1 != this.$selectedIndex && this.$selectedIndex < this.$icons.length && (this.icon = this.$icons[this.$selectedIndex])
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "values", {
            get: function () {
                return this.$values
            }, set: function (t) {
                t ? this.$values = t.concat() : this.$values.length = 0
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "selectedIndex", {
            get: function () {
                return this.$selectedIndex
            }, set: function (t) {
                this.$selectedIndex != t && (this.$selectedIndex = t, this.selectedIndex >= 0 && this.selectedIndex < this.$items.length ? (this.text = this.$items[this.$selectedIndex], null != this.$icons && this.$selectedIndex < this.$icons.length && (this.icon = this.$icons[this.$selectedIndex])) : (this.text = "", null != this.$icons && (this.icon = null)))
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "value", {
            get: function () {
                return this.$values[this.$selectedIndex]
            }, set: function (t) {
                this.selectedIndex = this.$values.indexOf(t)
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.setState = function (t) {
            this.$buttonController && (this.$buttonController.selectedPage = t)
        }, i.prototype.constructFromXML = function (i) {
            var n;
            if (e.prototype.constructFromXML.call(this, i), i = t.utils.XmlParser.getChildNodes(i, "ComboBox")[0], this.$buttonController = this.getController("button"), this.$titleObject = this.getChild("title"), this.$iconObject = this.getChild("icon"), n = i.attributes.dropdown) {
                if (this.$dropdown = t.UIPackage.createObjectFromURL(n), !this.$dropdown) throw new Error("the 'dropdown' is not specified, it must be a component definied in the package pool");
                if (this.$dropdown.name = "this.dropdown", this.$list = this.$dropdown.getChild("list"), null == this.$list) throw new Error(this.resourceURL + ": the dropdown component must have a GList child and named 'list'.");
                this.$list.on("__itemClick", this.$clickItem, this), this.$list.addRelation(this.$dropdown, 14), this.$list.removeRelation(this.$dropdown, 15), this.$dropdown.addRelation(this.$list, 15), this.$dropdown.removeRelation(this.$list, 14), this.$dropdown.on("removed", this.$popupWinClosed, this)
            }
            PIXI.utils.isMobile.any || (this.on(t.InteractiveEvents.Over, this.$rollover, this), this.on(t.InteractiveEvents.Out, this.$rollout, this)), this.on(t.InteractiveEvents.Down, this.$mousedown, this)
        }, i.prototype.dispose = function () {
            t.GTimer.inst.remove(this.delayedClickItem, this), this.$list.off("__itemClick", this.$clickItem, this), this.$dropdown.off("removed", this.$popupWinClosed, this), t.GRoot.inst.nativeStage.off(t.InteractiveEvents.Up, this.$mouseup, this), this.$popupWinClosed(null), this.$dropdown && (this.$dropdown.dispose(), this.$dropdown = null), e.prototype.dispose.call(this)
        }, i.prototype.setupAfterAdd = function (i) {
            var n = this;
            if (e.prototype.setupAfterAdd.call(this, i), i = t.utils.XmlParser.getChildNodes(i, "ComboBox")[0]) {
                var s;
                (s = i.attributes.titleColor) && (this.titleColor = t.utils.StringUtil.convertFromHtmlColor(s)), (s = i.attributes.visibleItemCount) && (this.$visibleItemCount = parseInt(s));
                var r = i.children;
                r && r.forEach(function (t, e) {
                    "item" == t.nodeName && (n.$items.push(t.attributes.title), n.$values.push(t.attributes.value), (s = t.attributes.icon) && (n.$icons || (n.$icons = new Array(length)), n.$icons[e] = s))
                }), (s = i.attributes.title) ? (this.text = s, this.$selectedIndex = this.$items.indexOf(s)) : this.$items.length > 0 ? (this.$selectedIndex = 0, this.text = this.$items[0]) : this.$selectedIndex = -1, (s = i.attributes.icon) && (this.icon = s), (s = i.attributes.direction) && ("up" == s ? this.$popupDir = 2 : "auto" == s && (this.$popupDir = 0))
            }
        }, i.prototype.showDropdown = function () {
            var e = this;
            this.$itemsUpdated && (this.$itemsUpdated = !1, this.$list.removeChildrenToPool(), this.$items.forEach(function (t, i) {
                var n = e.$list.addItemFromPool();
                n.name = i < e.$values.length ? e.$values[i] : "", n.text = e.$items[i], n.icon = null != e.$icons && i < e.$icons.length ? e.$icons[i] : null
            }, this), this.$list.resizeToFit(this.$visibleItemCount)), this.$list.selectedIndex = -1, this.$dropdown.width = this.width, this.root.togglePopup(this.$dropdown, this, this.$popupDir), this.$dropdown.parent && this.setState(t.GButton.DOWN)
        }, i.prototype.$popupWinClosed = function (e) {
            this.$over ? this.setState(t.GButton.OVER) : this.setState(t.GButton.UP)
        }, i.prototype.$clickItem = function (e, i) {
            t.GTimer.inst.add(100, 1, this.delayedClickItem, this, this.$list.getChildIndex(i))
        }, i.prototype.delayedClickItem = function (e) {
            this.$dropdown.parent instanceof t.GRoot && this.$dropdown.parent.hidePopup(), this.$selectedIndex = e, this.$selectedIndex >= 0 ? this.text = this.$items[this.$selectedIndex] : this.text = "", this.emit("__stateChanged", this)
        }, i.prototype.$rollover = function (e) {
            this.$over = !0, this.$down || this.$dropdown && this.$dropdown.parent || this.setState(t.GButton.OVER)
        }, i.prototype.$rollout = function (e) {
            this.$over = !1, this.$down || this.$dropdown && this.$dropdown.parent || this.setState(t.GButton.UP)
        }, i.prototype.$mousedown = function (e) {
            e.stopPropagation(), t.GRoot.inst.checkPopups(e.target), this.$down = !0, t.GRoot.inst.nativeStage.on(t.InteractiveEvents.Up, this.$mouseup, this), this.$dropdown && this.showDropdown()
        }, i.prototype.$mouseup = function (e) {
            this.$down && (this.$down = !1, t.GRoot.inst.nativeStage.off(t.InteractiveEvents.Up, this.$mouseup, this), this.$dropdown && !this.$dropdown.parent && (this.$over ? this.setState(t.GButton.OVER) : this.setState(t.GButton.UP)))
        }, i
    }(t.GComponent);
    t.GComboBox = e
}(fgui || (fgui = {})),
function (t) {
    var e = function (e) {
        function i() {
            var t = e.call(this) || this;
            return t.$type = 0, t.$lineSize = 0, t.$lineColor = 0, t.$fillColor = 0, t.$lineSize = 1, t.$lineAlpha = 1, t.$fillAlpha = 1, t.$fillColor = 16777215, t
        }
        return __extends(i, e), i.prototype.drawRect = function (t, e, i, n, s, r) {
            void 0 === r && (r = null), this.$type = 1, this.$lineSize = t, this.$lineColor = e, this.$lineAlpha = i, this.$fillColor = n, this.$fillAlpha = s, this.$corner = r, this.drawGraph()
        }, i.prototype.drawEllipse = function (t, e, i, n, s) {
            this.$type = 2, this.$lineSize = t, this.$lineColor = e, this.$lineAlpha = i, this.$fillColor = n, this.$fillAlpha = s, this.$corner = null, this.drawGraph()
        }, Object.defineProperty(i.prototype, "color", {
            get: function () {
                return this.$fillColor
            }, set: function (t) {
                this.$fillColor = t, 0 != this.$type && this.drawGraph()
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.drawGraph = function () {
            var t = this.$displayObject;
            t.interactive = this.touchable, t.clear();
            var e = this.width,
                i = this.height;
            if (0 != e && 0 != i) {
                if (0 == this.$lineSize ? t.lineStyle(0, 0, 0) : t.lineStyle(this.$lineSize, this.$lineColor, this.$lineAlpha), t.beginFill(this.$fillColor, this.$fillAlpha), 1 == this.$type) this.$corner && this.$corner.length >= 1 ? t.drawRoundedRect(0, 0, e, i, this.$corner[0]) : t.drawRect(0, 0, e, i);
                else {
                    var n = .5 * e,
                        s = .5 * i;
                    e == i ? t.drawCircle(n, n, n) : t.drawEllipse(n, s, n, s)
                }
                t.endFill()
            }
        }, i.prototype.replaceMe = function (t) {
            if (!this.$parent) throw new Error("parent not set");
            t.name = this.name, t.alpha = this.alpha, t.rotation = this.rotation, t.visible = this.visible, t.touchable = this.touchable, t.grayed = this.grayed, t.setXY(this.x, this.y), t.setSize(this.width, this.height);
            var e = this.$parent.getChildIndex(this);
            this.$parent.addChildAt(t, e), t.relations.copyFrom(this.relations), this.$parent.removeChild(this, !0)
        }, i.prototype.addBeforeMe = function (t) {
            if (null == this.$parent) throw new Error("parent not set");
            var e = this.$parent.getChildIndex(this);
            this.$parent.addChildAt(t, e)
        }, i.prototype.addAfterMe = function (t) {
            if (null == this.$parent) throw new Error("parent not set");
            var e = this.$parent.getChildIndex(this);
            e++, this.$parent.addChildAt(t, e)
        }, i.prototype.setNativeObject = function (t) {
            this.$type = 0;
            var e = this.$displayObject;
            e.interactive = this.touchable, e.clear(), e.removeChildren(), e.addChild(t)
        }, i.prototype.createDisplayObject = function () {
            this.$displayObject = new t.UISprite(this)
        }, i.prototype.handleSizeChanged = function () {
            0 != this.$type && this.drawGraph()
        }, i.prototype.setupBeforeAdd = function (i) {
            e.prototype.setupBeforeAdd.call(this, i);
            var n = i.attributes.type;
            if (n && "empty" != n) {
                var s = void 0;
                (s = i.attributes.lineSize) && (this.$lineSize = parseInt(s));
                var r = void 0;
                (s = i.attributes.lineColor) && (r = t.utils.StringUtil.convertFromHtmlColor(s, !0), this.$lineColor = 16777215 & r, this.$lineAlpha = (r >> 24 & 255) / 255), (s = i.attributes.fillColor) && (r = t.utils.StringUtil.convertFromHtmlColor(s, !0), this.$fillColor = 16777215 & r, this.$fillAlpha = (r >> 24 & 255) / 255);
                var o = void 0;
                (s = i.attributes.corner) && ((o = s.split(",")).length > 1 ? this.$corner = [parseInt(o[0]), parseInt(o[1]), parseInt(o[2]), parseInt(o[3])] : this.$corner = [parseInt(o[0])]), this.$type = "rect" == n ? 1 : 2, this.drawGraph()
            }
        }, i
    }(t.GObject);
    t.GGraph = e
}(fgui || (fgui = {})),
function (t) {
    var e = function (e) {
        function i() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(i, e), i.prototype.createDisplayObject = function () {
            var e = new t.UIContainer(this);
            e.interactive = !1, this.setDisplayObject(e)
        }, i.prototype.updateBounds = function () {
            if (!this.$updating && this.parent) {
                var t, e = this.$parent.numChildren,
                    i = 0,
                    n = Number.POSITIVE_INFINITY,
                    s = Number.POSITIVE_INFINITY,
                    r = Number.NEGATIVE_INFINITY,
                    o = Number.NEGATIVE_INFINITY;
                this.$empty = !0;
                var h = 0;
                for (i = 0; i < e; i++)(t = this.$parent.getChildAt(i)).group == this && ((h = t.x) < n && (n = h), (h = t.y) < s && (s = h), (h = t.x + t.width) > r && (r = h), (h = t.y + t.height) > o && (o = h), this.$empty = !1);
                this.$updating = !0, this.$empty ? this.setSize(0, 0) : (this.setXY(n, s), this.setSize(r - n, o - s)), this.$updating = !1
            }
        }, i.prototype.setXY = function (t, i) {
            if (this.$x != t || this.$y != i) {
                var n = t - this.$x,
                    s = i - this.$y;
                e.prototype.setXY.call(this, t, i), this.moveChildren(n, s)
            }
        }, i.prototype.moveChildren = function (t, e) {
            if (!this.$updating && this.$parent) {
                this.$updating = !0;
                var i, n = this.$parent.numChildren,
                    s = 0;
                for (s = 0; s < n; s++)(i = this.$parent.getChildAt(s)).group == this && i.setXY(i.x + t, i.y + e);
                this.$updating = !1
            }
        }, i.prototype.updateAlpha = function () {
            if (e.prototype.updateAlpha.call(this), !this.$inProgressBuilding) {
                var t, i, n = this.$parent.numChildren;
                for (t = 0; t < n; t++)(i = this.$parent.getChildAt(t)).group == this && (i.alpha = this.alpha)
            }
        }, i
    }(t.GObject);
    t.GGroup = e
}(fgui || (fgui = {})),
function (t) {
    var e = function (e) {
        function i() {
            return e.call(this) || this
        }
        return __extends(i, e), Object.defineProperty(i.prototype, "touchable", {
            get: function () {
                return !1
            }, set: function (t) {
                this.$touchable = !1
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "color", {
            get: function () {
                return this.$content.tint
            }, set: function (t) {
                this.color != t && (this.updateGear(4), this.$content.tint = t)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "flip", {
            get: function () {
                return this.$flip
            }, set: function (t) {
                if (this.$flip != t) {
                    this.$flip = t;
                    var e = !1,
                        i = !1;
                    1 != this.$flip && 3 != this.$flip || (e = !0), 2 != this.$flip && 3 != this.$flip || (i = !0), this.$content.flipX = e, this.$content.flipY = i
                }
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "texture", {
            get: function () {
                return this.$content.texture
            }, set: function (t) {
                null != t ? (this.$sourceWidth = t.orig.width, this.$sourceHeight = t.orig.height) : this.$sourceWidth = this.$sourceHeight = 0, this.$initWidth = this.$sourceWidth, this.$initHeight = this.$sourceHeight, this.$content.texture = t
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.createDisplayObject = function () {
            this.$content = new t.UIImage(this), this.setDisplayObject(this.$content)
        }, i.prototype.dispose = function () {
            this.$content.destroy(), e.prototype.dispose.call(this)
        }, i.prototype.constructFromResource = function () {
            this.$sourceWidth = this.packageItem.width, this.$sourceHeight = this.packageItem.height, this.$initWidth = this.$sourceWidth, this.$initHeight = this.$sourceHeight, this.$content.$initDisp(this.packageItem), this.setSize(this.$sourceWidth, this.$sourceHeight)
        }, i.prototype.handleXYChanged = function () {
            e.prototype.handleXYChanged.call(this), 0 != this.$flip && (-1 == this.$content.scale.x && (this.$content.x += this.width), -1 == this.$content.scale.y && (this.$content.y += this.height))
        }, i.prototype.handleSizeChanged = function () {
            this.$content.width = this.width, this.$content.height = this.height
        }, i.prototype.setupBeforeAdd = function (i) {
            var n;
            e.prototype.setupBeforeAdd.call(this, i), (n = i.attributes.color) && (this.color = t.utils.StringUtil.convertFromHtmlColor(n)), (n = i.attributes.flip) && (this.flip = t.ParseFlipType(n))
        }, i
    }(t.GObject);
    t.GImage = e
}(fgui || (fgui = {})),
function (t) {
    var e = function (e) {
        function i() {
            return e.call(this) || this
        }
        return __extends(i, e), Object.defineProperty(i.prototype, "icon", {
            get: function () {
                return null != this.$iconObject ? this.$iconObject.icon : null
            }, set: function (t) {
                null != this.$iconObject && (this.$iconObject.icon = t), this.updateGear(7)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "title", {
            get: function () {
                return this.$titleObject ? this.$titleObject.text : null
            }, set: function (t) {
                this.$titleObject && (this.$titleObject.text = t), this.updateGear(6)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "text", {
            get: function () {
                return this.title
            }, set: function (t) {
                this.title = t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "titleColor", {
            get: function () {
                return t.isColorableTitle(this.$titleObject) ? this.$titleObject.titleColor : 0
            }, set: function (e) {
                t.isColorableTitle(this.$titleObject) && (this.$titleObject.titleColor = e)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "fontSize", {
            get: function () {
                return t.isColorableTitle(this.$titleObject) ? this.$titleObject.fontSize : 0
            }, set: function (e) {
                t.isColorableTitle(this.$titleObject) && (this.$titleObject.fontSize = e)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "editable", {
            get: function () {
                return !!(this.$titleObject && this.$titleObject instanceof t.GTextInput) && this.$titleObject.editable
            }, set: function (t) {
                this.$titleObject && (this.$titleObject.editable = t)
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.constructFromXML = function (t) {
            e.prototype.constructFromXML.call(this, t), this.$titleObject = this.getChild("title"), this.$iconObject = this.getChild("icon")
        }, i.prototype.setupAfterAdd = function (i) {
            e.prototype.setupAfterAdd.call(this, i);
            var n = t.utils.XmlParser.getChildNodes(i, "Label");
            if (n && n.length > 0) {
                var s = void 0;
                if ((s = (i = n[0]).attributes.title) && (this.text = s), (s = i.attributes.icon) && (this.icon = s), (s = i.attributes.titleColor) && (this.titleColor = t.utils.StringUtil.convertFromHtmlColor(s)), this.$titleObject instanceof t.GTextInput) {
                    s = i.attributes.prompt;
                    var r = this.$titleObject;
                    s && (r.promptText = s), (s = i.attributes.maxLength) && (r.maxLength = parseInt(s)), (s = i.attributes.restrict) && (r.restrict = s), (s = i.attributes.password) && (r.password = "true" == s)
                }
            }
        }, i
    }(t.GComponent);
    t.GLabel = e
}(fgui || (fgui = {})),
function (t) {
    var e = function () {
            return function () {
                this.width = 0, this.height = 0, this.updateFlag = 0, this.selected = !1
            }
        }(),
        i = function (i) {
            function n() {
                var e = i.call(this) || this;
                return e.$lineCount = 0, e.$columnCount = 0, e.$lineGap = 0, e.$columnGap = 0, e.$lastSelectedIndex = 0, e.$numItems = 0, e.$firstIndex = 0, e.$curLineItemCount = 0, e.$virtualListChanged = 0, e.$apexIndex = 0, e.$childrenRenderOrder = 0, e.$itemInfoVer = 0, e.$enterCounter = 0, e.$trackBounds = !0, e.$pool = new t.utils.GObjectRecycler, e.$layout = 0, e.$autoResizeItem = !0, e.$lastSelectedIndex = -1, e.$selectionMode = 0, e.opaque = !0, e.scrollItemToViewOnClick = !0, e.$align = "left", e.$verticalAlign = 0, e.$container = new PIXI.Container, e.$rootContainer.addChild(e.$container), e
            }
            return __extends(n, i), Object.defineProperty(n.prototype, "childrenRenderOrder", {
                get: function () {
                    return this.$childrenRenderOrder
                }, set: function (t) {
                    this.$childrenRenderOrder != t && (this.$childrenRenderOrder = t, this.appendChildrenList())
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "apexIndex", {
                get: function () {
                    return this.$apexIndex
                }, set: function (t) {
                    this.$apexIndex != t && (this.$apexIndex = t, 2 == this.$childrenRenderOrder && this.appendChildrenList())
                }, enumerable: !0,
                configurable: !0
            }), n.prototype.appendChildrenList = function () {
                var t, e, i = this.$children.length;
                if (0 != i) switch (this.$childrenRenderOrder) {
                case 0:
                    for (t = 0; t < i; t++) null != (e = this.$children[t]).displayObject && e.finalVisible && this.$container.addChild(e.displayObject);
                    break;
                case 1:
                    for (t = i - 1; t >= 0; t--) null != (e = this.$children[t]).displayObject && e.finalVisible && this.$container.addChild(e.displayObject);
                    break;
                case 2:
                    for (t = 0; t < this.$apexIndex; t++) null != (e = this.$children[t]).displayObject && e.finalVisible && this.$container.addChild(e.displayObject);
                    for (t = i - 1; t >= this.$apexIndex; t--) null != (e = this.$children[t]).displayObject && e.finalVisible && this.$container.addChild(e.displayObject)
                }
            }, n.prototype.setXY = function (e, i) {
                this.$x == e && this.$y == i || (this.$x = e, this.$y = i, this.handleXYChanged(), this.updateGear(1), t.GObject.draggingObject != this || t.GObject.sUpdatingWhileDragging || this.localToGlobalRect(0, 0, this.width, this.height, t.GObject.sGlobalRect))
            }, n.prototype.$setChildIndex = function (e, i, n) {
                void 0 === n && (n = 0);
                var s = this.$children.length;
                if (n > s && (n = s), i == n) return i;
                if (this.$children.splice(i, 1), this.$children.splice(n, 0, e), e.inContainer) {
                    var r = 0,
                        o = void 0;
                    if (0 == this.$childrenRenderOrder) {
                        for (o = 0; o < n; o++) this.$children[o].inContainer && r++;
                        r == this.$container.children.length && r--, this.$container.setChildIndex(e.displayObject, r)
                    } else if (1 == this.$childrenRenderOrder) {
                        for (o = s - 1; o > n; o--) this.$children[o].inContainer && r++;
                        r == this.$container.children.length && r--, this.$container.setChildIndex(e.displayObject, r)
                    } else t.GTimer.inst.callLater(this.appendChildrenList, this);
                    this.setBoundsChangedFlag()
                }
                return n
            }, n.prototype.childStateChanged = function (e) {
                var i = this;
                if (!this.$buildingDisplayList)
                    if (e instanceof t.GGroup) this.$children.forEach(function (t) {
                        t.group == e && i.childStateChanged(t)
                    }, this);
                    else if (e.displayObject)
                    if (e.finalVisible) {
                        var n = void 0,
                            s = void 0,
                            r = this.$children.length;
                        if (!e.displayObject.parent) {
                            var o = 0;
                            if (0 == this.$childrenRenderOrder) {
                                for (var h = 0; h < r && (s = this.$children[h]) != e; h++) null != s.displayObject && null != s.displayObject.parent && o++;
                                this.$container.addChildAt(e.displayObject, o)
                            } else if (1 == this.$childrenRenderOrder) {
                                for (n = r - 1; n >= 0 && (s = this.$children[n]) != e; n--) null != s.displayObject && null != s.displayObject.parent && o++;
                                this.$container.addChildAt(e.displayObject, o)
                            } else this.$container.addChild(e.displayObject), t.GTimer.inst.callLater(this.appendChildrenList, this)
                        }
                    } else e.displayObject.parent && this.$container.removeChild(e.displayObject)
            }, n.prototype.dispose = function () {
                t.GTimer.inst.remove(this.$refreshVirtualList, this), this.$pool.clear(), this.$scrollPane && this.$scrollPane.off("__scroll", this.$scrolled, this), i.prototype.dispose.call(this)
            }, Object.defineProperty(n.prototype, "layout", {
                get: function () {
                    return this.$layout
                }, set: function (t) {
                    this.$layout != t && (this.$layout = t, this.setBoundsChangedFlag(), this.$virtual && this.setVirtualListChangedFlag(!0))
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "lineCount", {
                get: function () {
                    return this.$lineCount
                }, set: function (t) {
                    this.$lineCount != t && (this.$lineCount = t, 3 != this.$layout && 4 != this.$layout || (this.setBoundsChangedFlag(), this.$virtual && this.setVirtualListChangedFlag(!0)))
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "columnCount", {
                get: function () {
                    return this.$columnCount
                }, set: function (t) {
                    this.$columnCount != t && (this.$columnCount = t, 2 != this.$layout && 4 != this.$layout || (this.setBoundsChangedFlag(), this.$virtual && this.setVirtualListChangedFlag(!0)))
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "lineGap", {
                get: function () {
                    return this.$lineGap
                }, set: function (t) {
                    this.$lineGap != t && (this.$lineGap = t, this.setBoundsChangedFlag(), this.$virtual && this.setVirtualListChangedFlag(!0))
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "columnGap", {
                get: function () {
                    return this.$columnGap
                }, set: function (t) {
                    this.$columnGap != t && (this.$columnGap = t, this.setBoundsChangedFlag(), this.$virtual && this.setVirtualListChangedFlag(!0))
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "align", {
                get: function () {
                    return this.$align
                }, set: function (t) {
                    this.$align != t && (this.$align = t, this.setBoundsChangedFlag(), this.$virtual && this.setVirtualListChangedFlag(!0))
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "verticalAlign", {
                get: function () {
                    return this.$verticalAlign
                }, set: function (t) {
                    this.$verticalAlign != t && (this.$verticalAlign = t, this.setBoundsChangedFlag(), this.$virtual && this.setVirtualListChangedFlag(!0))
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "virtualItemSize", {
                get: function () {
                    return this.$itemSize
                }, set: function (t) {
                    this.$virtual && (null == this.$itemSize && (this.$itemSize = new PIXI.Point), this.$itemSize.copy(t), this.setVirtualListChangedFlag(!0))
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "defaultItem", {
                get: function () {
                    return this.$defaultItem
                }, set: function (t) {
                    this.$defaultItem = t
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "autoResizeItem", {
                get: function () {
                    return this.$autoResizeItem
                }, set: function (t) {
                    this.$autoResizeItem != t && (this.$autoResizeItem = t, this.setBoundsChangedFlag(), this.$virtual && this.setVirtualListChangedFlag(!0))
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "selectionMode", {
                get: function () {
                    return this.$selectionMode
                }, set: function (t) {
                    this.$selectionMode = t
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "selectionController", {
                get: function () {
                    return this.$selectionController
                }, set: function (t) {
                    this.$selectionController = t
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "itemPool", {
                get: function () {
                    return this.$pool
                }, enumerable: !0,
                configurable: !0
            }), n.prototype.getFromPool = function (t) {
                void 0 === t && (t = null), t || (t = this.$defaultItem);
                var e = this.$pool.get(t);
                return null != e && (e.visible = !0), e
            }, n.prototype.returnToPool = function (t) {
                this.$pool.recycle(t.resourceURL, t)
            }, n.prototype.addChildAt = function (e, n) {
                return void 0 === n && (n = 0), i.prototype.addChildAt.call(this, e, n), e instanceof t.GButton && (e.selected = !1, e.changeStateOnClick = !1), e.click(this.$clickItem, this), e
            }, n.prototype.addItem = function (e) {
                return void 0 === e && (e = null), e || (e = this.$defaultItem), this.addChild(t.UIPackage.createObjectFromURL(e))
            }, n.prototype.addItemFromPool = function (t) {
                return void 0 === t && (t = null), this.addChild(this.getFromPool(t))
            }, n.prototype.removeChildAt = function (e, i) {
                if (void 0 === i && (i = !1), e >= 0 && e < this.numChildren) {
                    var n = this.$children[e];
                    return n.parent = null, 0 != n.sortingOrder && this.$sortingChildCount--, this.$children.splice(e, 1), n.inContainer && (this.$container.removeChild(n.displayObject), 2 == this.$childrenRenderOrder && t.GTimer.inst.callLater(this.appendChildrenList, this)), !0 === i && n.dispose(), this.setBoundsChangedFlag(), n.removeClick(this.$clickItem, this), n
                }
                throw new Error("Invalid child index")
            }, n.prototype.removeChildToPoolAt = function (t) {
                var e = this.removeChildAt(t);
                this.returnToPool(e)
            }, n.prototype.removeChildToPool = function (t) {
                i.prototype.removeChild.call(this, t), this.returnToPool(t)
            }, n.prototype.removeChildrenToPool = function (t, e) {
                void 0 === t && (t = 0), void 0 === e && (e = -1), (e < 0 || e >= this.$children.length) && (e = this.$children.length - 1);
                for (var i = t; i <= e; ++i) this.removeChildToPoolAt(t)
            }, Object.defineProperty(n.prototype, "selectedIndex", {
                get: function () {
                    var e;
                    if (this.$virtual)
                        for (e = 0; e < this.$realNumItems; e++) {
                            var i = this.$virtualItems[e];
                            if (i.obj instanceof t.GButton && i.obj.selected || null == i.obj && i.selected) return this.$loop ? e % this.$numItems : e
                        } else {
                            var n = this.$children.length;
                            for (e = 0; e < n; e++) {
                                var s = this.$children[e];
                                if (null != s && s.selected) return e
                            }
                        }
                    return -1
                }, set: function (t) {
                    t >= 0 && t < this.numItems ? (0 != this.selectionMode && this.clearSelection(), this.addSelection(t)) : this.clearSelection()
                }, enumerable: !0,
                configurable: !0
            }), n.prototype.getSelection = function () {
                var e, i = [];
                if (this.$virtual)
                    for (e = 0; e < this.$realNumItems; e++) {
                        var n = this.$virtualItems[e];
                        if (n.obj instanceof t.GButton && n.obj.selected || null == n.obj && n.selected) {
                            var s = e;
                            if (this.$loop && (s = e % this.$numItems, -1 != i.indexOf(s))) continue;
                            i.push(s)
                        }
                    } else {
                        var r = this.$children.length;
                        for (e = 0; e < r; e++) {
                            var o = this.$children[e];
                            null != o && o.selected && i.push(e)
                        }
                    }
                return i
            }, n.prototype.addSelection = function (t, e) {
                if (void 0 === e && (e = !1), 3 != this.$selectionMode) {
                    this.checkVirtualList(), 0 == this.$selectionMode && this.clearSelection(), e && this.scrollToView(t), this.$lastSelectedIndex = t;
                    var i = null;
                    if (this.$virtual) {
                        var n = this.$virtualItems[t];
                        null != n.obj && (i = n.obj), n.selected = !0
                    } else i = this.getChildAt(t);
                    null == i || i.selected || (i.selected = !0, this.updateSelectionController(t))
                }
            }, n.prototype.removeSelection = function (t) {
                if (3 != this.$selectionMode) {
                    var e = null;
                    if (this.$virtual) {
                        var i = this.$virtualItems[t];
                        null != i.obj && (e = i.obj), i.selected = !1
                    } else e = this.getChildAt(t);
                    null != e && (e.selected = !1)
                }
            }, n.prototype.clearSelection = function () {
                var e;
                if (this.$virtual)
                    for (e = 0; e < this.$realNumItems; e++) {
                        var i = this.$virtualItems[e];
                        i.obj instanceof t.GButton && (i.obj.selected = !1), i.selected = !1
                    } else {
                        var n = this.$children.length;
                        for (e = 0; e < n; e++) {
                            var s = this.$children[e];
                            null != s && (s.selected = !1)
                        }
                    }
            }, n.prototype.clearSelectionExcept = function (e) {
                var i;
                if (this.$virtual)
                    for (i = 0; i < this.$realNumItems; i++) {
                        var n = this.$virtualItems[i];
                        n.obj != e && (n.obj instanceof t.GButton && (n.obj.selected = !1), n.selected = !1)
                    } else {
                        var s = this.$children.length;
                        for (i = 0; i < s; i++) {
                            var r = this.$children[i];
                            null != r && r != e && (r.selected = !1)
                        }
                    }
            }, n.prototype.selectAll = function () {
                this.checkVirtualList();
                var e, i = -1;
                if (this.$virtual)
                    for (e = 0; e < this.$realNumItems; e++) {
                        var n = this.$virtualItems[e];
                        n.obj instanceof t.GButton && !n.obj.selected && (n.obj.selected = !0, i = e), n.selected = !0
                    } else {
                        var s = this.$children.length;
                        for (e = 0; e < s; e++) {
                            var r = this.$children[e];
                            null == r || r.selected || (r.selected = !0, i = e)
                        }
                    } - 1 != i && this.updateSelectionController(i)
            }, n.prototype.selectNone = function () {
                this.clearSelection()
            }, n.prototype.selectReverse = function () {
                this.checkVirtualList();
                var e, i = -1;
                if (this.$virtual)
                    for (e = 0; e < this.$realNumItems; e++) {
                        var n = this.$virtualItems[e];
                        n.obj instanceof t.GButton && (n.obj.selected = !n.obj.selected, n.obj.selected && (i = e)), n.selected = !n.selected
                    } else {
                        var s = this.$children.length;
                        for (e = 0; e < s; e++) {
                            var r = this.$children[e];
                            null != r && (r.selected = !r.selected, r.selected && (i = e))
                        }
                    } - 1 != i && this.updateSelectionController(i)
            }, n.prototype.handleArrowKey = function (t) {
                var e, i, n, s, r = this.selectedIndex;
                if (-1 != r) switch (t) {
                case 38:
                    if (0 == this.$layout || 3 == this.$layout)--r >= 0 && (this.clearSelection(), this.addSelection(r, !0));
                    else if (2 == this.$layout || 4 == this.$layout) {
                        for (e = this.$children[r], i = 0, n = r - 1; n >= 0; n--) {
                            if ((s = this.$children[n]).y != e.y) {
                                e = s;
                                break
                            }
                            i++
                        }
                        for (; n >= 0; n--)
                            if ((s = this.$children[n]).y != e.y) {
                                this.clearSelection(), this.addSelection(n + i + 1, !0);
                                break
                            }
                    }
                    break;
                case 39:
                    if (1 == this.$layout || 2 == this.$layout || 4 == this.$layout)++r < this.$children.length && (this.clearSelection(), this.addSelection(r, !0));
                    else if (3 == this.$layout) {
                        e = this.$children[r], i = 0;
                        var o = this.$children.length;
                        for (n = r + 1; n < o; n++) {
                            if ((s = this.$children[n]).x != e.x) {
                                e = s;
                                break
                            }
                            i++
                        }
                        for (; n < o; n++)
                            if ((s = this.$children[n]).x != e.x) {
                                this.clearSelection(), this.addSelection(n - i - 1, !0);
                                break
                            }
                    }
                    break;
                case 40:
                    if (0 == this.$layout || 3 == this.$layout)++r < this.$children.length && (this.clearSelection(), this.addSelection(r, !0));
                    else if (2 == this.$layout || 4 == this.$layout) {
                        e = this.$children[r], i = 0;
                        o = this.$children.length;
                        for (n = r + 1; n < o; n++) {
                            if ((s = this.$children[n]).y != e.y) {
                                e = s;
                                break
                            }
                            i++
                        }
                        for (; n < o; n++)
                            if ((s = this.$children[n]).y != e.y) {
                                this.clearSelection(), this.addSelection(n - i - 1, !0);
                                break
                            }
                    }
                    break;
                case 37:
                    if (1 == this.$layout || 2 == this.$layout || 4 == this.$layout)--r >= 0 && (this.clearSelection(), this.addSelection(r, !0));
                    else if (3 == this.$layout) {
                        for (e = this.$children[r], i = 0, n = r - 1; n >= 0; n--) {
                            if ((s = this.$children[n]).x != e.x) {
                                e = s;
                                break
                            }
                            i++
                        }
                        for (; n >= 0; n--)
                            if ((s = this.$children[n]).x != e.x) {
                                this.clearSelection(), this.addSelection(n + i + 1, !0);
                                break
                            }
                    }
                }
            }, n.prototype.$clickItem = function (e) {
                if (null == this.$scrollPane || !this.$scrollPane.isDragging) {
                    var i = t.GObject.castFromNativeObject(e.currentTarget);
                    i && (this.setSelectionOnEvent(i), this.$scrollPane && this.scrollItemToViewOnClick && this.$scrollPane.scrollToView(i, !0), this.emit("__itemClick", e, i))
                }
            }, n.prototype.setSelectionOnEvent = function (e) {
                if (e instanceof t.GButton && 3 != this.$selectionMode) {
                    var i = !1,
                        n = this.childIndexToItemIndex(this.getChildIndex(e));
                    if (0 == this.$selectionMode) e.selected || (this.clearSelectionExcept(e), e.selected = !0);
                    else if (t.utils.DOMEventManager.inst.isKeyPressed(16)) {
                        if (!e.selected)
                            if (-1 != this.$lastSelectedIndex) {
                                var s = Math.min(this.$lastSelectedIndex, n),
                                    r = Math.min(Math.max(this.$lastSelectedIndex, n), this.numItems - 1),
                                    o = void 0;
                                if (this.$virtual)
                                    for (o = s; o <= r; o++) {
                                        var h = this.$virtualItems[o];
                                        h.obj instanceof t.GButton && (h.obj.selected = !0), h.selected = !0
                                    } else
                                        for (o = s; o <= r; o++) {
                                            var a = this.getChildAt(o);
                                            null != a && (a.selected = !0)
                                        }
                                i = !0
                            } else e.selected = !0
                    } else t.utils.DOMEventManager.inst.isKeyPressed(17) || 2 == this.$selectionMode ? e.selected = !e.selected : e.selected ? this.clearSelectionExcept(e) : (this.clearSelectionExcept(e), e.selected = !0);
                    i || (this.$lastSelectedIndex = n), e.selected && this.updateSelectionController(n)
                }
            }, n.prototype.resizeToFit = function (t, e) {
                void 0 === t && (t = 1e6), void 0 === e && (e = 0), this.ensureBoundsCorrect();
                var i = this.numItems;
                if (t > i && (t = i), this.$virtual) {
                    var n = Math.ceil(t / this.$curLineItemCount);
                    0 == this.$layout || 2 == this.$layout ? this.viewHeight = n * this.$itemSize.y + Math.max(0, n - 1) * this.$lineGap : this.viewWidth = n * this.$itemSize.x + Math.max(0, n - 1) * this.$columnGap
                } else if (0 == t) 0 == this.$layout || 2 == this.$layout ? this.viewHeight = e : this.viewWidth = e;
                else {
                    for (var s = t - 1, r = void 0; s >= 0 && (r = this.getChildAt(s), this.foldInvisibleItems && !r.visible);) s--;
                    if (s < 0) 0 == this.$layout || 2 == this.$layout ? this.viewHeight = e : this.viewWidth = e;
                    else {
                        var o = 0;
                        0 == this.$layout || 2 == this.$layout ? ((o = r.y + r.height) < e && (o = e), this.viewHeight = o) : ((o = r.x + r.width) < e && (o = e), this.viewWidth = o)
                    }
                }
            }, n.prototype.getMaxItemWidth = function () {
                for (var t = this.$children.length, e = 0, i = 0; i < t; i++) {
                    var n = this.getChildAt(i);
                    n.width > e && (e = n.width)
                }
                return e
            }, n.prototype.handleSizeChanged = function () {
                i.prototype.handleSizeChanged.call(this), this.setBoundsChangedFlag(), this.$virtual && this.setVirtualListChangedFlag(!0)
            }, n.prototype.handleControllerChanged = function (t) {
                i.prototype.handleControllerChanged.call(this, t), this.$selectionController == t && (this.selectedIndex = t.selectedIndex)
            }, n.prototype.updateSelectionController = function (t) {
                if (null != this.$selectionController && !this.$selectionController.$updating && t < this.$selectionController.pageCount) {
                    var e = this.$selectionController;
                    this.$selectionController = null, e.selectedIndex = t, this.$selectionController = e
                }
            }, n.prototype.getSnappingPosition = function (t, e, s) {
                if (void 0 === s && (s = null), this.$virtual) {
                    s || (s = new PIXI.Point);
                    var r = void 0,
                        o = void 0;
                    return 0 == this.$layout || 2 == this.$layout ? (r = e, n.$lastPosHelper = e, o = this.getIndexOnPos1(!1), e = n.$lastPosHelper, o < this.$virtualItems.length && r - e > this.$virtualItems[o].height / 2 && o < this.$realNumItems && (e += this.$virtualItems[o].height + this.$lineGap)) : 1 == this.$layout || 3 == this.$layout ? (r = t, n.$lastPosHelper = t, o = this.getIndexOnPos2(!1), t = n.$lastPosHelper, o < this.$virtualItems.length && r - t > this.$virtualItems[o].width / 2 && o < this.$realNumItems && (t += this.$virtualItems[o].width + this.$columnGap)) : (r = t, n.$lastPosHelper = t, o = this.getIndexOnPos3(!1), t = n.$lastPosHelper, o < this.$virtualItems.length && r - t > this.$virtualItems[o].width / 2 && o < this.$realNumItems && (t += this.$virtualItems[o].width + this.$columnGap)), s.x = t, s.y = e, s
                }
                return i.prototype.getSnappingPosition.call(this, t, e, s)
            }, n.prototype.scrollToView = function (t, e, i) {
                if (void 0 === e && (e = !1), void 0 === i && (i = !1), this.$virtual) {
                    if (0 == this.$numItems) return;
                    if (this.checkVirtualList(), t >= this.$virtualItems.length) throw new Error("Invalid child index: " + t + " is larger than max length: " + this.$virtualItems.length);
                    this.$loop && (t = Math.floor(this.$firstIndex / this.$numItems) * this.$numItems + t);
                    var n = void 0,
                        s = this.$virtualItems[t],
                        r = 0,
                        o = void 0;
                    if (0 == this.$layout || 2 == this.$layout) {
                        for (o = 0; o < t; o += this.$curLineItemCount) r += this.$virtualItems[o].height + this.$lineGap;
                        n = new PIXI.Rectangle(0, r, this.$itemSize.x, s.height)
                    } else if (1 == this.$layout || 3 == this.$layout) {
                        for (o = 0; o < t; o += this.$curLineItemCount) r += this.$virtualItems[o].width + this.$columnGap;
                        n = new PIXI.Rectangle(r, 0, s.width, this.$itemSize.y)
                    } else {
                        var h = t / (this.$curLineItemCount * this.$curLineItemCount2);
                        n = new PIXI.Rectangle(h * this.viewWidth + t % this.$curLineItemCount * (s.width + this.$columnGap), t / this.$curLineItemCount % this.$curLineItemCount2 * (s.height + this.$lineGap), s.width, s.height)
                    }
                    i = !0, null != this.$scrollPane && this.$scrollPane.scrollToView(n, e, i)
                } else {
                    var a = this.getChildAt(t);
                    null != this.$scrollPane ? this.$scrollPane.scrollToView(a, e, i) : null != this.parent && null != this.parent.scrollPane && this.parent.scrollPane.scrollToView(a, e, i)
                }
            }, n.prototype.getFirstChildInView = function () {
                return this.childIndexToItemIndex(i.prototype.getFirstChildInView.call(this))
            }, n.prototype.childIndexToItemIndex = function (t) {
                if (!this.$virtual) return t;
                if (4 == this.$layout) {
                    for (var e = this.$firstIndex; e < this.$realNumItems; e++)
                        if (null != this.$virtualItems[e].obj && --t < 0) return e;
                    return t
                }
                return t += this.$firstIndex, this.$loop && this.$numItems > 0 && (t %= this.$numItems), t
            }, n.prototype.itemIndexToChildIndex = function (t) {
                if (!this.$virtual) return t;
                if (4 == this.$layout) return this.getChildIndex(this.$virtualItems[t].obj);
                if (this.$loop && this.$numItems > 0) {
                    var e = this.$firstIndex % this.$numItems;
                    t = t >= e ? this.$firstIndex + (t - e) : this.$firstIndex + this.$numItems + (e - t)
                } else t -= this.$firstIndex;
                return t
            }, n.prototype.setVirtual = function () {
                this.$setVirtual(!1)
            }, n.prototype.setVirtualAndLoop = function () {
                this.$setVirtual(!0)
            }, n.prototype.$setVirtual = function (t) {
                if (!this.$virtual) {
                    if (null == this.$scrollPane) throw new Error("Virtual list must be scrollable");
                    if (t) {
                        if (2 == this.$layout || 3 == this.$layout) throw new Error("Virtual list with loop mode is not supported for both FlowHorizontal and FlowVertical layout");
                        this.$scrollPane.bouncebackEffect = !1
                    }
                    if (this.$virtual = !0, this.$loop = t, this.$virtualItems = [], this.removeChildrenToPool(), null == this.$itemSize) {
                        this.$itemSize = new PIXI.Point;
                        var e = this.getFromPool(null);
                        if (null == e) throw new Error("Virtual list must have a default list item resource specified through list.defaultItem = resUrl.");
                        this.$itemSize.x = e.width, this.$itemSize.y = e.height, this.returnToPool(e)
                    }
                    0 == this.$layout || 2 == this.$layout ? (this.$scrollPane.scrollSpeed = this.$itemSize.y, this.$loop && (this.$scrollPane.$loop = 2)) : (this.$scrollPane.scrollSpeed = this.$itemSize.x, this.$loop && (this.$scrollPane.$loop = 1)), this.$scrollPane.on("__scroll", this.$scrolled, this), this.setVirtualListChangedFlag(!0)
                }
            }, Object.defineProperty(n.prototype, "numItems", {
                get: function () {
                    return this.$virtual ? this.$numItems : this.$children.length
                }, set: function (i) {
                    var n;
                    if (this.$virtual) {
                        if (null == this.itemRenderer) throw new Error("list.itemRenderer is required");
                        this.$numItems = i, this.$loop ? this.$realNumItems = 6 * this.$numItems : this.$realNumItems = this.$numItems;
                        var s = this.$virtualItems.length;
                        if (this.$realNumItems > s)
                            for (n = s; n < this.$realNumItems; n++) {
                                var r = new e;
                                r.width = this.$itemSize.x, r.height = this.$itemSize.y, this.$virtualItems.push(r)
                            } else
                                for (n = this.$realNumItems; n < s; n++) this.$virtualItems[n].selected = !1;
                        0 != this.$virtualListChanged && t.GTimer.inst.remove(this.$refreshVirtualList, this), this.$refreshVirtualList()
                    } else {
                        var o = this.$children.length;
                        if (i > o)
                            for (n = o; n < i; n++) null == this.itemProvider ? this.addItemFromPool() : this.addItemFromPool(this.itemProvider(n));
                        else this.removeChildrenToPool(i, o); if (null != this.itemRenderer)
                            for (n = 0; n < i; n++) this.itemRenderer(n, this.getChildAt(n))
                    }
                }, enumerable: !0,
                configurable: !0
            }), n.prototype.refreshVirtualList = function () {
                this.setVirtualListChangedFlag(!1)
            }, n.prototype.checkVirtualList = function () {
                0 != this.$virtualListChanged && (this.$refreshVirtualList(), t.GTimer.inst.remove(this.$refreshVirtualList, this))
            }, n.prototype.setVirtualListChangedFlag = function (e) {
                void 0 === e && (e = !1), e ? this.$virtualListChanged = 2 : 0 == this.$virtualListChanged && (this.$virtualListChanged = 1), t.GTimer.inst.callLater(this.$refreshVirtualList, this)
            }, n.prototype.$refreshVirtualList = function () {
                var t = 2 == this.$virtualListChanged;
                this.$virtualListChanged = 0, this.$eventLocked = !0, t && (0 == this.$layout || 1 == this.$layout ? this.$curLineItemCount = 1 : 2 == this.$layout ? this.$columnCount > 0 ? this.$curLineItemCount = this.$columnCount : (this.$curLineItemCount = Math.floor((this.$scrollPane.viewWidth + this.$columnGap) / (this.$itemSize.x + this.$columnGap)), this.$curLineItemCount <= 0 && (this.$curLineItemCount = 1)) : 3 == this.$layout ? this.$lineCount > 0 ? this.$curLineItemCount = this.$lineCount : (this.$curLineItemCount = Math.floor((this.$scrollPane.viewHeight + this.$lineGap) / (this.$itemSize.y + this.$lineGap)), this.$curLineItemCount <= 0 && (this.$curLineItemCount = 1)) : (this.$columnCount > 0 ? this.$curLineItemCount = this.$columnCount : (this.$curLineItemCount = Math.floor((this.$scrollPane.viewWidth + this.$columnGap) / (this.$itemSize.x + this.$columnGap)), this.$curLineItemCount <= 0 && (this.$curLineItemCount = 1)), this.$lineCount > 0 ? this.$curLineItemCount2 = this.$lineCount : (this.$curLineItemCount2 = Math.floor((this.$scrollPane.viewHeight + this.$lineGap) / (this.$itemSize.y + this.$lineGap)), this.$curLineItemCount2 <= 0 && (this.$curLineItemCount2 = 1))));
                var e = 0,
                    i = 0;
                if (this.$realNumItems > 0) {
                    var n = void 0,
                        s = Math.ceil(this.$realNumItems / this.$curLineItemCount) * this.$curLineItemCount,
                        r = Math.min(this.$curLineItemCount, this.$realNumItems);
                    if (0 == this.$layout || 2 == this.$layout) {
                        for (n = 0; n < s; n += this.$curLineItemCount) e += this.$virtualItems[n].height + this.$lineGap;
                        if (e > 0 && (e -= this.$lineGap), this.$autoResizeItem) i = this.$scrollPane.viewWidth;
                        else {
                            for (n = 0; n < r; n++) i += this.$virtualItems[n].width + this.$columnGap;
                            i > 0 && (i -= this.$columnGap)
                        }
                    } else if (1 == this.$layout || 3 == this.$layout) {
                        for (n = 0; n < s; n += this.$curLineItemCount) i += this.$virtualItems[n].width + this.$columnGap;
                        if (i > 0 && (i -= this.$columnGap), this.$autoResizeItem) e = this.$scrollPane.viewHeight;
                        else {
                            for (n = 0; n < r; n++) e += this.$virtualItems[n].height + this.$lineGap;
                            e > 0 && (e -= this.$lineGap)
                        }
                    } else {
                        i = Math.ceil(s / (this.$curLineItemCount * this.$curLineItemCount2)) * this.viewWidth, e = this.viewHeight
                    }
                }
                this.handleAlign(i, e), this.$scrollPane.setContentSize(i, e), this.$eventLocked = !1, this.handleScroll(!0)
            }, n.prototype.$scrolled = function () {
                this.handleScroll(!1)
            }, n.prototype.getIndexOnPos1 = function (t) {
                if (this.$realNumItems < this.$curLineItemCount) return n.$lastPosHelper = 0, 0;
                var e, i, s;
                if (this.numChildren > 0 && !t) {
                    if ((i = this.getChildAt(0).y) > n.$lastPosHelper) {
                        for (e = this.$firstIndex - this.$curLineItemCount; e >= 0; e -= this.$curLineItemCount)
                            if ((i -= this.$virtualItems[e].height + this.$lineGap) <= n.$lastPosHelper) return n.$lastPosHelper = i, e;
                        return n.$lastPosHelper = 0, 0
                    }
                    for (e = this.$firstIndex; e < this.$realNumItems; e += this.$curLineItemCount) {
                        if ((s = i + this.$virtualItems[e].height + this.$lineGap) > n.$lastPosHelper) return n.$lastPosHelper = i, e;
                        i = s
                    }
                    return n.$lastPosHelper = i, this.$realNumItems - this.$curLineItemCount
                }
                for (i = 0, e = 0; e < this.$realNumItems; e += this.$curLineItemCount) {
                    if ((s = i + this.$virtualItems[e].height + this.$lineGap) > n.$lastPosHelper) return n.$lastPosHelper = i, e;
                    i = s
                }
                return n.$lastPosHelper = i, this.$realNumItems - this.$curLineItemCount
            }, n.prototype.getIndexOnPos2 = function (t) {
                if (this.$realNumItems < this.$curLineItemCount) return n.$lastPosHelper = 0, 0;
                var e, i, s;
                if (this.numChildren > 0 && !t) {
                    if ((i = this.getChildAt(0).x) > n.$lastPosHelper) {
                        for (e = this.$firstIndex - this.$curLineItemCount; e >= 0; e -= this.$curLineItemCount)
                            if ((i -= this.$virtualItems[e].width + this.$columnGap) <= n.$lastPosHelper) return n.$lastPosHelper = i, e;
                        return n.$lastPosHelper = 0, 0
                    }
                    for (e = this.$firstIndex; e < this.$realNumItems; e += this.$curLineItemCount) {
                        if ((s = i + this.$virtualItems[e].width + this.$columnGap) > n.$lastPosHelper) return n.$lastPosHelper = i, e;
                        i = s
                    }
                    return n.$lastPosHelper = i, this.$realNumItems - this.$curLineItemCount
                }
                for (i = 0, e = 0; e < this.$realNumItems; e += this.$curLineItemCount) {
                    if ((s = i + this.$virtualItems[e].width + this.$columnGap) > n.$lastPosHelper) return n.$lastPosHelper = i, e;
                    i = s
                }
                return n.$lastPosHelper = i, this.$realNumItems - this.$curLineItemCount
            }, n.prototype.getIndexOnPos3 = function (t) {
                if (this.$realNumItems < this.$curLineItemCount) return n.$lastPosHelper = 0, 0;
                var e, i, s = this.viewWidth,
                    r = Math.floor(n.$lastPosHelper / s),
                    o = r * (this.$curLineItemCount * this.$curLineItemCount2),
                    h = r * s;
                for (e = 0; e < this.$curLineItemCount; e++) {
                    if ((i = h + this.$virtualItems[o + e].width + this.$columnGap) > n.$lastPosHelper) return n.$lastPosHelper = h, o + e;
                    h = i
                }
                return n.$lastPosHelper = h, o + this.$curLineItemCount - 1
            }, n.prototype.handleScroll = function (t) {
                this.$eventLocked || (this.$enterCounter = 0, 0 == this.$layout || 2 == this.$layout ? (this.handleScroll1(t), this.handleArchOrder1()) : 1 == this.$layout || 3 == this.$layout ? (this.handleScroll2(t), this.handleArchOrder2()) : this.handleScroll3(t), this.$boundsChanged = !1)
            }, n.prototype.handleScroll1 = function (e) {
                if (this.$enterCounter++, this.$enterCounter > 3) console.warn("this list view cannot be filled full as the itemRenderer function always returns an item with different size.");
                else {
                    var i = this.$scrollPane.scrollingPosY,
                        s = i + this.$scrollPane.viewHeight,
                        r = s == this.$scrollPane.contentHeight;
                    n.$lastPosHelper = i;
                    var o = this.getIndexOnPos1(e);
                    if (o != this.$firstIndex || e) {
                        i = n.$lastPosHelper;
                        var h = this.$firstIndex;
                        this.$firstIndex = o;
                        var a, l, u, c, p, $ = o,
                            d = h > o,
                            f = this.numChildren,
                            g = h + f - 1,
                            y = d ? g : h,
                            m = 0,
                            b = i,
                            v = 0,
                            w = 0,
                            I = this.defaultItem,
                            x = (this.$scrollPane.viewWidth - this.$columnGap * (this.$curLineItemCount - 1)) / this.$curLineItemCount;
                        for (this.$itemInfoVer++; $ < this.$realNumItems && (r || b < s);) {
                            if ((null == (l = this.$virtualItems[$]).obj || e) && (null != this.itemProvider && (null == (I = this.itemProvider($ % this.$numItems)) && (I = this.$defaultItem), I = t.UIPackage.normalizeURL(I)), null != l.obj && l.obj.resourceURL != I && (l.obj instanceof t.GButton && (l.selected = l.obj.selected), this.removeChildToPool(l.obj), l.obj = null)), null == l.obj) {
                                if (d) {
                                    for (p = y; p >= h; p--)
                                        if (null != (u = this.$virtualItems[p]).obj && u.updateFlag != this.$itemInfoVer && u.obj.resourceURL == I) {
                                            u.obj instanceof t.GButton && (u.selected = u.obj.selected), l.obj = u.obj, u.obj = null, p == y && y--;
                                            break
                                        }
                                } else
                                    for (p = y; p <= g; p++)
                                        if (null != (u = this.$virtualItems[p]).obj && u.updateFlag != this.$itemInfoVer && u.obj.resourceURL == I) {
                                            u.obj instanceof t.GButton && (u.selected = u.obj.selected), l.obj = u.obj, u.obj = null, p == y && y++;
                                            break
                                        }
                                null != l.obj ? this.setChildIndex(l.obj, d ? $ - o : this.numChildren) : (l.obj = this.$pool.get(I), d ? this.addChildAt(l.obj, $ - o) : this.addChild(l.obj)), l.obj instanceof t.GButton && (l.obj.selected = l.selected), a = !0
                            } else a = e;
                            a && (this.$autoResizeItem && (0 == this.$layout || this.$columnCount > 0) && l.obj.setSize(x, l.obj.height, !0), this.itemRenderer($ % this.$numItems, l.obj), $ % this.$curLineItemCount == 0 && (v += Math.ceil(l.obj.height) - l.height, $ == o && h > o && (w = Math.ceil(l.obj.height) - l.height)), l.width = Math.ceil(l.obj.width), l.height = Math.ceil(l.obj.height)), l.updateFlag = this.$itemInfoVer, l.obj.setXY(m, b), $ == o && (s += l.height), m += l.width + this.$columnGap, $ % this.$curLineItemCount == this.$curLineItemCount - 1 && (m = 0, b += l.height + this.$lineGap), $++
                        }
                        for (c = 0; c < f; c++)(l = this.$virtualItems[h + c]).updateFlag != this.$itemInfoVer && null != l.obj && (l.obj instanceof t.GButton && (l.selected = l.obj.selected), this.removeChildToPool(l.obj), l.obj = null);
                        0 == v && 0 == w || this.$scrollPane.changeContentSizeOnScrolling(0, v, 0, w), $ > 0 && this.numChildren > 0 && this.$container.y < 0 && this.getChildAt(0).y > -this.$container.y && this.handleScroll1(!1)
                    }
                }
            }, n.prototype.handleScroll2 = function (e) {
                if (this.$enterCounter++, this.$enterCounter > 3) console.warn("this list view cannot be filled full as the itemRenderer function always returns an item with different size.");
                else {
                    var i = this.$scrollPane.scrollingPosX,
                        s = i + this.$scrollPane.viewWidth,
                        r = i == this.$scrollPane.contentWidth;
                    n.$lastPosHelper = i;
                    var o = this.getIndexOnPos2(e);
                    if (o != this.$firstIndex || e) {
                        i = n.$lastPosHelper;
                        var h = this.$firstIndex;
                        this.$firstIndex = o;
                        var a, l, u, c, p, $ = o,
                            d = h > o,
                            f = this.numChildren,
                            g = h + f - 1,
                            y = d ? g : h,
                            m = i,
                            b = 0,
                            v = 0,
                            w = 0,
                            I = this.defaultItem,
                            x = (this.$scrollPane.viewHeight - this.$lineGap * (this.$curLineItemCount - 1)) / this.$curLineItemCount;
                        for (this.$itemInfoVer++; $ < this.$realNumItems && (r || m < s);) {
                            if ((null == (l = this.$virtualItems[$]).obj || e) && (null != this.itemProvider && (null == (I = this.itemProvider($ % this.$numItems)) && (I = this.$defaultItem), I = t.UIPackage.normalizeURL(I)), null != l.obj && l.obj.resourceURL != I && (l.obj instanceof t.GButton && (l.selected = l.obj.selected), this.removeChildToPool(l.obj), l.obj = null)), null == l.obj) {
                                if (d) {
                                    for (p = y; p >= h; p--)
                                        if (null != (u = this.$virtualItems[p]).obj && u.updateFlag != this.$itemInfoVer && u.obj.resourceURL == I) {
                                            u.obj instanceof t.GButton && (u.selected = u.obj.selected), l.obj = u.obj, u.obj = null, p == y && y--;
                                            break
                                        }
                                } else
                                    for (p = y; p <= g; p++)
                                        if (null != (u = this.$virtualItems[p]).obj && u.updateFlag != this.$itemInfoVer && u.obj.resourceURL == I) {
                                            u.obj instanceof t.GButton && (u.selected = u.obj.selected), l.obj = u.obj, u.obj = null, p == y && y++;
                                            break
                                        }
                                null != l.obj ? this.setChildIndex(l.obj, d ? $ - o : this.numChildren) : (l.obj = this.$pool.get(I), d ? this.addChildAt(l.obj, $ - o) : this.addChild(l.obj)), l.obj instanceof t.GButton && (l.obj.selected = l.selected), a = !0
                            } else a = e;
                            a && (this.$autoResizeItem && (1 == this.$layout || this.$lineCount > 0) && l.obj.setSize(l.obj.width, x, !0), this.itemRenderer($ % this.$numItems, l.obj), $ % this.$curLineItemCount == 0 && (v += Math.ceil(l.obj.width) - l.width, $ == o && h > o && (w = Math.ceil(l.obj.width) - l.width)), l.width = Math.ceil(l.obj.width), l.height = Math.ceil(l.obj.height)), l.updateFlag = this.$itemInfoVer, l.obj.setXY(m, b), $ == o && (s += l.width), b += l.height + this.$lineGap, $ % this.$curLineItemCount == this.$curLineItemCount - 1 && (b = 0, m += l.width + this.$columnGap), $++
                        }
                        for (c = 0; c < f; c++)(l = this.$virtualItems[h + c]).updateFlag != this.$itemInfoVer && null != l.obj && (l.obj instanceof t.GButton && (l.selected = l.obj.selected), this.removeChildToPool(l.obj), l.obj = null);
                        0 == v && 0 == w || this.$scrollPane.changeContentSizeOnScrolling(v, 0, w, 0), $ > 0 && this.numChildren > 0 && this.$container.x < 0 && this.getChildAt(0).x > -this.$container.x && this.handleScroll2(!1)
                    }
                }
            }, n.prototype.handleScroll3 = function (e) {
                var i = this.$scrollPane.scrollingPosX;
                n.$lastPosHelper = i;
                var s = this.getIndexOnPos3(e);
                if (s != this.$firstIndex || e) {
                    i = n.$lastPosHelper;
                    var r = this.$firstIndex;
                    this.$firstIndex = s;
                    var o, h, a, l, u, c = r,
                        p = this.$virtualItems.length,
                        $ = this.$curLineItemCount * this.$curLineItemCount2,
                        d = s % this.$curLineItemCount,
                        f = this.viewWidth,
                        g = Math.floor(s / $) * $,
                        y = g + 2 * $,
                        m = this.$defaultItem,
                        b = (this.$scrollPane.viewWidth - this.$columnGap * (this.$curLineItemCount - 1)) / this.$curLineItemCount,
                        v = (this.$scrollPane.viewHeight - this.$lineGap * (this.$curLineItemCount2 - 1)) / this.$curLineItemCount2;
                    for (this.$itemInfoVer++, h = g; h < y; h++)
                        if (!(h >= this.$realNumItems)) {
                            if (u = h % this.$curLineItemCount, h - g < $) {
                                if (u < d) continue
                            } else if (u > d) continue;
                            (a = this.$virtualItems[h]).updateFlag = this.$itemInfoVer
                        }
                    var w = null,
                        I = 0;
                    for (h = g; h < y; h++)
                        if (!(h >= this.$realNumItems) && (a = this.$virtualItems[h]).updateFlag == this.$itemInfoVer) {
                            if (null == a.obj) {
                                for (; c < p;) {
                                    if (null != (l = this.$virtualItems[c]).obj && l.updateFlag != this.$itemInfoVer) {
                                        l.obj instanceof t.GButton && (l.selected = l.obj.selected), a.obj = l.obj, l.obj = null;
                                        break
                                    }
                                    c++
                                } - 1 == I && (I = this.getChildIndex(w) + 1), null == a.obj ? (null != this.itemProvider && (null == (m = this.itemProvider(h % this.$numItems)) && (m = this.$defaultItem), m = t.UIPackage.normalizeURL(m)), a.obj = this.$pool.get(m), this.addChildAt(a.obj, I)) : I = this.setChildIndexBefore(a.obj, I), I++, a.obj instanceof t.GButton && (a.obj.selected = a.selected), o = !0
                            } else o = e, I = -1, w = a.obj;
                            o && (this.$autoResizeItem && (this.$curLineItemCount == this.$columnCount && this.$curLineItemCount2 == this.$lineCount ? a.obj.setSize(b, v, !0) : this.$curLineItemCount == this.$columnCount ? a.obj.setSize(b, a.obj.height, !0) : this.$curLineItemCount2 == this.$lineCount && a.obj.setSize(a.obj.width, v, !0)), this.itemRenderer(h % this.$numItems, a.obj), a.width = Math.ceil(a.obj.width), a.height = Math.ceil(a.obj.height))
                        }
                    var x = g / $ * f,
                        C = x,
                        P = 0,
                        S = 0;
                    for (h = g; h < y; h++) h >= this.$realNumItems || ((a = this.$virtualItems[h]).updateFlag == this.$itemInfoVer && a.obj.setXY(C, P), a.height > S && (S = a.height), h % this.$curLineItemCount == this.$curLineItemCount - 1 ? (C = x, P += S + this.$lineGap, S = 0, h == g + $ - 1 && (C = x += f, P = 0)) : C += a.width + this.$columnGap);
                    for (h = c; h < p; h++)(a = this.$virtualItems[h]).updateFlag != this.$itemInfoVer && null != a.obj && (a.obj instanceof t.GButton && (a.selected = a.obj.selected), this.removeChildToPool(a.obj), a.obj = null)
                }
            }, n.prototype.handleArchOrder1 = function () {
                if (2 == this.$childrenRenderOrder) {
                    for (var t = this.$scrollPane.posY + this.viewHeight / 2, e = Number.POSITIVE_INFINITY, i = 0, n = 0, s = this.numChildren, r = 0; r < s; r++) {
                        var o = this.getChildAt(r);
                        this.foldInvisibleItems && !o.visible || (i = Math.abs(t - o.y - o.height / 2)) < e && (e = i, n = r)
                    }
                    this.apexIndex = n
                }
            }, n.prototype.handleArchOrder2 = function () {
                if (2 == this.childrenRenderOrder) {
                    for (var t = this.$scrollPane.posX + this.viewWidth / 2, e = Number.POSITIVE_INFINITY, i = 0, n = 0, s = this.numChildren, r = 0; r < s; r++) {
                        var o = this.getChildAt(r);
                        this.foldInvisibleItems && !o.visible || (i = Math.abs(t - o.x - o.width / 2)) < e && (e = i, n = r)
                    }
                    this.apexIndex = n
                }
            }, n.prototype.handleAlign = function (t, e) {
                var i = 0,
                    n = 0;
                e < this.viewHeight && (1 == this.$verticalAlign ? n = Math.floor((this.viewHeight - e) / 2) : 2 == this.$verticalAlign && (n = this.viewHeight - e)), t < this.viewWidth && ("center" == this.$align ? i = Math.floor((this.viewWidth - t) / 2) : "right" == this.$align && (i = this.viewWidth - t)), i == this.$alignOffset.x && n == this.$alignOffset.y || (this.$alignOffset.set(i, n), null != this.$scrollPane ? this.$scrollPane.adjustMaskContainer() : (this.$container.x = this.$margin.left + this.$alignOffset.x, this.$container.y = this.$margin.top + this.$alignOffset.y))
            }, n.prototype.updateBounds = function () {
                if (!this.$virtual) {
                    var t, e, i, n = 0,
                        s = 0,
                        r = 0,
                        o = 0,
                        h = 0,
                        a = 0,
                        l = 0,
                        u = 0,
                        c = 0,
                        p = this.$children.length,
                        $ = this.viewWidth,
                        d = this.viewHeight,
                        f = 0,
                        g = 0;
                    if (0 == this.$layout) {
                        for (t = 0; t < p; t++) e = this.getChildAt(t), this.foldInvisibleItems && !e.visible || (0 != s && (s += this.$lineGap), e.y = s, this.$autoResizeItem && e.setSize($, e.height, !0), s += Math.ceil(e.height), e.width > r && (r = e.width));
                        h = Math.ceil(r), a = s
                    } else if (1 == this.$layout) {
                        for (t = 0; t < p; t++) e = this.getChildAt(t), this.foldInvisibleItems && !e.visible || (0 != n && (n += this.$columnGap), e.x = n, this.$autoResizeItem && e.setSize(e.width, d, !0), n += Math.ceil(e.width), e.height > o && (o = e.height));
                        h = n, a = Math.ceil(o)
                    } else if (2 == this.$layout)
                        if (this.$autoResizeItem && this.$columnCount > 0) {
                            for (t = 0; t < p; t++)
                                if (e = this.getChildAt(t), (!this.foldInvisibleItems || e.visible) && (f += e.sourceWidth, ++l == this.$columnCount || t == p - 1)) {
                                    for (i = ($ - f - (l - 1) * this.$columnGap) / f, n = 0, l = g; l <= t; l++) e = this.getChildAt(l), this.foldInvisibleItems && !e.visible || (e.setXY(n, s), l < t ? (e.setSize(e.sourceWidth + Math.round(e.sourceWidth * i), e.height, !0), n += Math.ceil(e.width) + this.$columnGap) : e.setSize($ - n, e.height, !0), e.height > o && (o = e.height));
                                    s += Math.ceil(o) + this.$lineGap, o = 0, l = 0, g = t + 1, f = 0
                                }
                            a = s + Math.ceil(o), h = $
                        } else {
                            for (t = 0; t < p; t++) e = this.getChildAt(t), this.foldInvisibleItems && !e.visible || (0 != n && (n += this.$columnGap), (0 != this.$columnCount && l >= this.$columnCount || 0 == this.$columnCount && n + e.width > $ && 0 != o) && (n = 0, s += Math.ceil(o) + this.$lineGap, o = 0, l = 0), e.setXY(n, s), (n += Math.ceil(e.width)) > r && (r = n), e.height > o && (o = e.height), l++);
                            a = s + Math.ceil(o), h = Math.ceil(r)
                        } else if (3 == this.$layout)
                        if (this.$autoResizeItem && this.$lineCount > 0) {
                            for (t = 0; t < p; t++)
                                if (e = this.getChildAt(t), (!this.foldInvisibleItems || e.visible) && (f += e.sourceHeight, ++l == this.$lineCount || t == p - 1)) {
                                    for (i = (d - f - (l - 1) * this.$lineGap) / f, s = 0, l = g; l <= t; l++) e = this.getChildAt(l), this.foldInvisibleItems && !e.visible || (e.setXY(n, s), l < t ? (e.setSize(e.width, e.sourceHeight + Math.round(e.sourceHeight * i), !0), s += Math.ceil(e.height) + this.$lineGap) : e.setSize(e.width, d - s, !0), e.width > r && (r = e.width));
                                    n += Math.ceil(r) + this.$columnGap, r = 0, l = 0, g = t + 1, f = 0
                                }
                            h = n + Math.ceil(r), a = d
                        } else {
                            for (t = 0; t < p; t++) e = this.getChildAt(t), this.foldInvisibleItems && !e.visible || (0 != s && (s += this.$lineGap), (0 != this.$lineCount && l >= this.$lineCount || 0 == this.$lineCount && s + e.height > d && 0 != r) && (s = 0, n += Math.ceil(r) + this.$columnGap, r = 0, l = 0), e.setXY(n, s), (s += Math.ceil(e.height)) > o && (o = s), e.width > r && (r = e.width), l++);
                            h = n + Math.ceil(r), a = Math.ceil(o)
                        } else {
                        var y = void 0;
                        if (this.$autoResizeItem && this.$lineCount > 0 && (y = Math.floor((d - (this.$lineCount - 1) * this.$lineGap) / this.$lineCount)), this.$autoResizeItem && this.$columnCount > 0) {
                            for (t = 0; t < p; t++)
                                if (e = this.getChildAt(t), (!this.foldInvisibleItems || e.visible) && (f += e.sourceWidth, ++l == this.$columnCount || t == p - 1)) {
                                    for (i = ($ - f - (l - 1) * this.$columnGap) / f, n = 0, l = g; l <= t; l++) e = this.getChildAt(l), this.foldInvisibleItems && !e.visible || (e.setXY(u * $ + n, s), l < t ? (e.setSize(e.sourceWidth + Math.round(e.sourceWidth * i), this.$lineCount > 0 ? y : e.height, !0), n += Math.ceil(e.width) + this.$columnGap) : e.setSize($ - n, this.$lineCount > 0 ? y : e.height, !0), e.height > o && (o = e.height));
                                    s += Math.ceil(o) + this.$lineGap, o = 0, l = 0, g = t + 1, f = 0, c++, (0 != this.$lineCount && c >= this.$lineCount || 0 == this.$lineCount && s + e.height > d) && (u++, s = 0, c = 0)
                                }
                        } else
                            for (t = 0; t < p; t++) e = this.getChildAt(t), this.foldInvisibleItems && !e.visible || (0 != n && (n += this.$columnGap), this.$autoResizeItem && this.$lineCount > 0 && e.setSize(e.width, y, !0), (0 != this.$columnCount && l >= this.$columnCount || 0 == this.$columnCount && n + e.width > $ && 0 != o) && (n = 0, s += Math.ceil(o) + this.$lineGap, o = 0, l = 0, c++, (0 != this.$lineCount && c >= this.$lineCount || 0 == this.$lineCount && s + e.height > d && 0 != r) && (u++, s = 0, c = 0)), e.setXY(u * $ + n, s), (n += Math.ceil(e.width)) > r && (r = n), e.height > o && (o = e.height), l++);
                        a = u > 0 ? d : s + Math.ceil(o), h = (u + 1) * $
                    }
                    this.handleAlign(h, a), this.setBounds(0, 0, h, a)
                }
            }, n.prototype.setupBeforeAdd = function (e) {
                var n, s, r, o = this;
                if (i.prototype.setupBeforeAdd.call(this, e), (n = e.attributes.layout) && (this.$layout = t.ParseListLayoutType(n)), r = (n = e.attributes.overflow) ? t.ParseOverflowType(n) : 0, (n = e.attributes.margin) && this.$margin.parse(n), (n = e.attributes.align) && (this.$align = t.ParseAlignType(n)), (n = e.attributes.vAlign) && (this.$verticalAlign = t.ParseVertAlignType(n)), 2 == r) {
                    var h;
                    h = (n = e.attributes.scroll) ? t.ParseScrollType(n) : 1;
                    var a = void 0;
                    a = (n = e.attributes.scrollBar) ? t.ParseScrollBarDisplayType(n) : 0;
                    var l = void 0;
                    l = (n = e.attributes.scrollBarFlags) ? parseInt(n) : 0;
                    var u = new t.utils.Margin;
                    (n = e.attributes.scrollBarMargin) && u.parse(n);
                    var c = void 0,
                        p = void 0;
                    (n = e.attributes.scrollBarRes) && (c = (s = n.split(","))[0], p = s[1]);
                    var $ = void 0,
                        d = void 0;
                    (n = e.attributes.ptrRes) && ($ = (s = n.split(","))[0], d = s[1]), this.setupScroll(u, h, a, l, c, p, $, d)
                } else this.setupOverflow(r);
                (n = e.attributes.lineGap) && (this.$lineGap = parseInt(n)), (n = e.attributes.colGap) && (this.$columnGap = parseInt(n)), (n = e.attributes.lineItemCount) && (2 == this.$layout || 4 == this.$layout ? this.$columnCount = parseInt(n) : 3 == this.$layout && (this.$lineCount = parseInt(n))), (n = e.attributes.lineItemCount2) && (this.$lineCount = parseInt(n)), (n = e.attributes.selectionMode) && (this.$selectionMode = t.ParseListSelectionMode(n)), (n = e.attributes.defaultItem) && (this.$defaultItem = n), n = e.attributes.autoItemSize, 1 == this.$layout || 0 == this.$layout ? this.$autoResizeItem = "false" != n : this.$autoResizeItem = "true" == n, (n = e.attributes.renderOrder) && (this.$childrenRenderOrder = t.ParseListChildrenRenderOrder(n), 2 == this.$childrenRenderOrder && (n = e.attributes.apex) && (this.$apexIndex = parseInt(n))), e.children.forEach(function (e) {
                    if ("item" == e.nodeName) {
                        var i = e.attributes.url;
                        if (i || (i = o.$defaultItem), i) {
                            var s = o.getFromPool(i);
                            null != s && (o.addChild(s), (n = e.attributes.title) && (s.text = n), (n = e.attributes.icon) && (s.icon = n), (n = e.attributes.name) && (s.name = n), (n = e.attributes.selectedIcon) && s instanceof t.GButton && (s.selectedIcon = n))
                        }
                    }
                }, this)
            }, n.prototype.setupAfterAdd = function (t) {
                var e;
                i.prototype.setupAfterAdd.call(this, t), (e = t.attributes.selectionController) && (this.$selectionController = this.parent.getController(e))
            }, n.$lastPosHelper = 0, n
        }(t.GComponent);
    t.GList = i
}(fgui || (fgui = {})),
function (t) {
    ! function (t) {
        var e = function () {
            function t() {
                this.$count = 0, this.$pool = {}
            }
            return Object.defineProperty(t.prototype, "count", {
                get: function () {
                    return this.$count
                }, enumerable: !0,
                configurable: !0
            }), t.prototype.clear = function () {
                for (var t in this.$pool) {
                    var e = this.$pool[t];
                    e && (e.length = 0, e = null)
                }
                this.$pool = {}, this.$count = 0
            }, t.prototype.get = function (t) {
                var e = this.$pool[t];
                return null == e && (e = [], this.$pool[t] = e), e.length ? (this.$count--, e.shift()) : this.createObject(t)
            }, t.prototype.recycle = function (t, e) {
                if (t) {
                    var i = this.$pool[t];
                    null == i && (i = [], this.$pool[t] = i), this.$count++, i.push(e)
                }
            }, t
        }();
        t.Recycler = e
    }(t.utils || (t.utils = {}))
}(fgui || (fgui = {})),
function (t) {
    ! function (e) {
        var i = function (e) {
            function i() {
                return e.call(this) || this
            }
            return __extends(i, e), i.prototype.clear = function () {
                for (var t in this.$pool) {
                    var i = this.$pool[t];
                    i && i.forEach(function (t) {
                        t.dispose()
                    })
                }
                e.prototype.clear.call(this)
            }, i.prototype.createObject = function (e) {
                return t.UIPackage.createObjectFromURL(e)
            }, i
        }(e.Recycler);
        e.GObjectRecycler = i
    }(t.utils || (t.utils = {}))
}(fgui || (fgui = {})),
function (t) {
    var e = function (e) {
        function i() {
            var t = e.call(this) || this;
            return t.$frame = 0, t.$color = 0, t.$contentSourceWidth = 0, t.$contentSourceHeight = 0, t.$contentWidth = 0, t.$contentHeight = 0, t.$loadingTexture = null, t.$playing = !0, t.$url = "", t.$fill = 0, t.$align = "left", t.$verticalAlign = 0, t.$showErrorSign = !0, t.$color = 16777215, t
        }
        return __extends(i, e), i.prototype.createDisplayObject = function () {
            this.$container = new t.UIContainer(this), this.$container.hitArea = new PIXI.Rectangle, this.setDisplayObject(this.$container), this.$container.interactiveChildren = !1
        }, i.prototype.dispose = function () {
            this.clearContent(), e.prototype.dispose.call(this)
        }, Object.defineProperty(i.prototype, "url", {
            get: function () {
                return this.$url
            }, set: function (t) {
                this.$url != t && (this.$url = t, this.loadContent(), this.updateGear(7))
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "icon", {
            get: function () {
                return this.$url
            }, set: function (t) {
                this.url = t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "align", {
            get: function () {
                return this.$align
            }, set: function (t) {
                this.$align != t && (this.$align = t, this.updateLayout())
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "verticalAlign", {
            get: function () {
                return this.$verticalAlign
            }, set: function (t) {
                this.$verticalAlign != t && (this.$verticalAlign = t, this.updateLayout())
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "fill", {
            get: function () {
                return this.$fill
            }, set: function (t) {
                this.$fill != t && (this.$fill = t, this.updateLayout())
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "autoSize", {
            get: function () {
                return this.$autoSize
            }, set: function (t) {
                this.$autoSize != t && (this.$autoSize = t, this.updateLayout())
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "playing", {
            get: function () {
                return this.$playing
            }, set: function (e) {
                this.$playing != e && (this.$playing = e, this.$content instanceof t.MovieClip && (this.$content.playing = e), this.updateGear(5))
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "frame", {
            get: function () {
                return this.$frame
            }, set: function (e) {
                this.$frame != e && (this.$frame = e, this.$content instanceof t.MovieClip && (this.$content.currentFrame = e), this.updateGear(5))
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "color", {
            get: function () {
                return this.$color
            }, set: function (t) {
                this.$color != t && (this.$color = t, this.updateGear(4), this.applyColor())
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.applyColor = function () {
            this.$content && (this.$content.tint = this.$color)
        }, Object.defineProperty(i.prototype, "showErrorSign", {
            get: function () {
                return this.$showErrorSign
            }, set: function (t) {
                this.$showErrorSign = t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "content", {
            get: function () {
                return this.$content
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "texture", {
            get: function () {
                return this.$content instanceof t.UIImage ? this.$content.texture : null
            }, set: function (e) {
                this.url = null, this.switchToMovieMode(!1), this.$content instanceof t.UIImage && (this.$content.texture = e), e ? (this.$contentSourceWidth = e.orig.width, this.$contentSourceHeight = e.orig.height) : this.$contentSourceWidth = this.$contentHeight = 0, this.updateLayout()
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.loadContent = function () {
            this.clearContent(), this.$url && (t.utils.StringUtil.startsWith(this.$url, "ui://") ? this.loadFromPackage(this.$url) : this.loadExternal())
        }, i.prototype.loadFromPackage = function (e) {
            if (this.$contentItem = t.UIPackage.getItemByURL(e), this.$contentItem)
                if (this.$contentItem.load(), 0 == this.$contentItem.type) null == this.$contentItem.texture ? this.setErrorState() : (this.switchToMovieMode(!1), this.$content.$initDisp(this.$contentItem), this.$contentSourceWidth = this.$contentItem.width, this.$contentSourceHeight = this.$contentItem.height, this.updateLayout());
                else if (2 == this.$contentItem.type) {
                this.switchToMovieMode(!0), this.$contentSourceWidth = this.$contentItem.width, this.$contentSourceHeight = this.$contentItem.height;
                var i = this.$content;
                i.interval = this.$contentItem.interval, i.swing = this.$contentItem.swing, i.repeatDelay = this.$contentItem.repeatDelay, i.frames = this.$contentItem.frames, i.boundsRect = new PIXI.Rectangle(0, 0, this.$contentSourceWidth, this.$contentSourceHeight), this.updateLayout()
            } else this.setErrorState();
            else this.setErrorState()
        }, i.prototype.switchToMovieMode = function (e) {
            this.$container.removeChildren(), e ? this.$content instanceof t.MovieClip || (this.$content = new t.MovieClip(this)) : this.$content instanceof t.UIImage || (this.$content = new t.UIImage(null)), this.$container.addChild(this.$content)
        }, i.prototype.loadExternal = function () {
            var t = this,
                e = PIXI.Texture.fromImage(this.$url, !0);
            this.$loadingTexture = e, e.once("update", function () {
                e.width && e.height ? t.$loadResCompleted(e) : t.$loadResCompleted(null)
            })
        }, i.prototype.freeExternal = function (t) {
            PIXI.Texture.removeFromCache(t), t.destroy(null != t.baseTexture)
        }, i.prototype.$loadResCompleted = function (t) {
            t ? this.onExternalLoadSuccess(t) : (this.onExternalLoadFailed(), this.$loadingTexture.removeAllListeners(), this.freeExternal(this.$loadingTexture), this.$loadingTexture = null), this.$loadingTexture = null
        }, i.prototype.onExternalLoadSuccess = function (e) {
            this.$container.removeChildren(), this.$content && this.$content instanceof t.UIImage ? this.$container.addChild(this.$content) : (this.$content = new t.UIImage(null), this.$content.$initDisp(), this.$container.addChild(this.$content)), e.frame = new PIXI.Rectangle(0, 0, e.baseTexture.width, e.baseTexture.height), this.$content.texture = e, this.$contentSourceWidth = e.width, this.$contentSourceHeight = e.height, this.updateLayout()
        }, i.prototype.onExternalLoadFailed = function () {
            this.setErrorState()
        }, i.prototype.setErrorState = function () {
            this.$showErrorSign && (null == this.$errorSign && t.UIConfig.loaderErrorSign && (this.$errorSign = i.$errorSignPool.get(t.UIConfig.loaderErrorSign)), this.$errorSign && (this.$errorSign.width = this.width, this.$errorSign.height = this.height, this.$container.addChild(this.$errorSign.displayObject)))
        }, i.prototype.clearErrorState = function () {
            this.$errorSign && (this.$container.removeChild(this.$errorSign.displayObject), i.$errorSignPool.recycle(this.$errorSign.resourceURL, this.$errorSign), this.$errorSign = null)
        }, i.prototype.updateLayout = function () {
            if (null != this.$content)
                if (this.$content.position.set(0, 0), this.$content.scale.set(1, 1), this.$contentWidth = this.$contentSourceWidth, this.$contentHeight = this.$contentSourceHeight, this.$autoSize) this.$updatingLayout = !0, 0 == this.$contentWidth && (this.$contentWidth = 50), 0 == this.$contentHeight && (this.$contentHeight = 30), this.setSize(this.$contentWidth, this.$contentHeight), this.$updatingLayout = !1;
                else {
                    var e = 1,
                        i = 1;
                    0 != this.$fill && (e = this.width / this.$contentSourceWidth, i = this.height / this.$contentSourceHeight, 1 == e && 1 == i || (2 == this.$fill ? e = i : 3 == this.$fill ? i = e : 1 == this.$fill ? e > i ? e = i : i = e : 5 == this.$fill && (e > i ? i = e : e = i), this.$contentWidth = this.$contentSourceWidth * e, this.$contentHeight = this.$contentSourceHeight * i)), this.$content instanceof t.UIImage ? (this.$content.width = this.$contentWidth, this.$content.height = this.$contentHeight) : this.$content.scale.set(e, i), "center" == this.$align ? this.$content.x = Math.floor((this.width - this.$contentWidth) / 2) : "right" == this.$align && (this.$content.x = this.width - this.$contentWidth), 1 == this.$verticalAlign ? this.$content.y = Math.floor((this.height - this.$contentHeight) / 2) : 2 == this.$verticalAlign && (this.$content.y = this.height - this.$contentHeight)
                } else this.$autoSize && (this.$updatingLayout = !0, this.setSize(50, 30), this.$updatingLayout = !1)
        }, i.prototype.clearContent = function () {
            this.clearErrorState(), this.$content && this.$content.parent && this.$container.removeChild(this.$content), this.$loadingTexture && (this.$loadingTexture.removeAllListeners(), this.freeExternal(this.$loadingTexture), this.$loadingTexture = null), null == this.$contentItem && this.$content instanceof t.UIImage && this.freeExternal(this.$content.texture), this.$content && this.$content.destroy(), this.$content = null, this.$contentItem = null
        }, i.prototype.handleSizeChanged = function () {
            this.$updatingLayout || this.updateLayout();
            var t = this.$container.hitArea;
            t.x = t.y = 0, t.width = this.width, t.height = this.height
        }, i.prototype.setupBeforeAdd = function (i) {
            var n;
            e.prototype.setupBeforeAdd.call(this, i), (n = i.attributes.url) && (this.$url = n), (n = i.attributes.align) && (this.$align = t.ParseAlignType(n)), (n = i.attributes.vAlign) && (this.$verticalAlign = t.ParseVertAlignType(n)), (n = i.attributes.fill) && (this.$fill = t.ParseLoaderFillType(n)), this.$autoSize = "true" == i.attributes.autoSize, (n = i.attributes.errorSign) && (this.$showErrorSign = "true" == n), this.$playing = "false" != i.attributes.playing, (n = i.attributes.color) && (this.color = t.utils.StringUtil.convertFromHtmlColor(n)), this.$url && this.loadContent()
        }, i.$errorSignPool = new t.utils.GObjectRecycler, i
    }(t.GObject);
    t.GLoader = e
}(fgui || (fgui = {})),
function (t) {
    var e = function (e) {
        function i() {
            return e.call(this) || this
        }
        return __extends(i, e), i.prototype.mapPivotWidth = function (t) {
            return t * this.$sourceWidth
        }, i.prototype.mapPivotHeight = function (t) {
            return t * this.$sourceHeight
        }, i.prototype.handleSizeChanged = function () {
            null != this.$displayObject && 0 != this.$sourceWidth && 0 != this.$sourceHeight && this.$displayObject.scale.set(this.$width / this.$sourceWidth * this.$scaleX, this.$height / this.$sourceHeight * this.$scaleY)
        }, i.prototype.handleScaleChanged = function () {
            null != this.$displayObject && this.$displayObject.scale.set(this.$width / this.$sourceWidth * this.$scaleX, this.$height / this.$sourceHeight * this.$scaleY)
        }, Object.defineProperty(i.prototype, "touchable", {
            get: function () {
                return !1
            }, set: function (t) {
                this.$touchable = !1
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "color", {
            get: function () {
                return this.$movieClip.tint
            }, set: function (t) {
                this.$movieClip.tint = t
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.createDisplayObject = function () {
            this.$movieClip = new t.MovieClip(this), this.setDisplayObject(this.$movieClip)
        }, Object.defineProperty(i.prototype, "playing", {
            get: function () {
                return this.$movieClip.playing
            }, set: function (t) {
                this.$movieClip.playing != t && (this.$movieClip.playing = t, this.updateGear(5))
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "frame", {
            get: function () {
                return this.$movieClip.currentFrame
            }, set: function (t) {
                this.$movieClip.currentFrame != t && (this.$movieClip.currentFrame = t, this.updateGear(5))
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.setPlaySettings = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            this.$movieClip.setPlaySettings.apply(this.$movieClip, t)
        }, i.prototype.constructFromResource = function () {
            this.$sourceWidth = this.packageItem.width, this.$sourceHeight = this.packageItem.height, this.$initWidth = this.$sourceWidth, this.$initHeight = this.$sourceHeight, this.setSize(this.$sourceWidth, this.$sourceHeight), this.packageItem.load(), this.$movieClip.interval = this.packageItem.interval, this.$movieClip.swing = this.packageItem.swing, this.$movieClip.repeatDelay = this.packageItem.repeatDelay, this.$movieClip.frames = this.packageItem.frames, this.$movieClip.boundsRect = new PIXI.Rectangle(0, 0, this.$sourceWidth, this.$sourceHeight)
        }, i.prototype.setupBeforeAdd = function (i) {
            var n;
            e.prototype.setupBeforeAdd.call(this, i), (n = i.attributes.frame) && (this.$movieClip.currentFrame = parseInt(n)), n = i.attributes.playing, this.$movieClip.playing = "false" != n, (n = i.attributes.color) && (this.color = t.utils.StringUtil.convertFromHtmlColor(n))
        }, i
    }(t.GObject);
    t.GMovieClip = e
}(fgui || (fgui = {})),
function (t) {
    var e = function (e) {
        function i() {
            var t = e.call(this) || this;
            return t.$max = 0, t.$value = 0, t.$barMaxWidth = 0, t.$barMaxHeight = 0, t.$barMaxWidthDelta = 0, t.$barMaxHeightDelta = 0, t.$barStartX = 0, t.$barStartY = 0, t.$tweenValue = 0, t.$titleType = 0, t.$value = 50, t.$max = 100, t
        }
        return __extends(i, e), Object.defineProperty(i.prototype, "titleType", {
            get: function () {
                return this.$titleType
            }, set: function (t) {
                this.$titleType != t && (this.$titleType = t, this.update(this.$value))
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "max", {
            get: function () {
                return this.$max
            }, set: function (t) {
                this.$max != t && (this.$max = t, this.update(this.$value))
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "value", {
            get: function () {
                return this.$value
            }, set: function (t) {
                null != this.$tweener && (this.$tweener.paused = !0, this.$tweener = null), this.$value != t && (this.$value = t, this.update(this.$value))
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.tweenValue = function (e, n) {
            return this.$value != e ? (this.$tweener && (this.$tweener.paused = !0, this.$tweener.removeAllEventListeners(), createjs.Tween.removeTweens(this)), this.$tweenValue = this.$value, this.$value = e, this.$tweener = createjs.Tween.get(this, {
                onChange: t.utils.Binder.create(this.onUpdateTween, this)
            }).to({
                $tweenValue: e
            }, 1e3 * n, i.easeLinear), this.$tweener) : null
        }, i.prototype.onUpdateTween = function () {
            this.update(this.$tweenValue)
        }, i.prototype.update = function (e) {
            var i = 0 != this.$max ? Math.min(e / this.$max, 1) : 0;
            if (this.$titleObject) switch (this.$titleType) {
            case 0:
                this.$titleObject.text = Math.round(100 * i) + "%";
                break;
            case 1:
                this.$titleObject.text = Math.round(e) + "/" + Math.round(this.$max);
                break;
            case 2:
                this.$titleObject.text = "" + Math.round(e);
                break;
            case 3:
                this.$titleObject.text = "" + Math.round(this.$max)
            }
            var n = this.width - this.$barMaxWidthDelta,
                s = this.height - this.$barMaxHeightDelta;
            this.$reverse ? (this.$barObjectH && (this.$barObjectH.width = n * i, this.$barObjectH.x = this.$barStartX + (n - this.$barObjectH.width)), this.$barObjectV && (this.$barObjectV.height = s * i, this.$barObjectV.y = this.$barStartY + (s - this.$barObjectV.height))) : (this.$barObjectH && (this.$barObjectH.width = n * i), this.$barObjectV && (this.$barObjectV.height = s * i)), this.$aniObject instanceof t.GMovieClip && (this.$aniObject.frame = Math.round(100 * i))
        }, i.prototype.constructFromXML = function (i) {
            var n;
            e.prototype.constructFromXML.call(this, i), (n = (i = t.utils.XmlParser.getChildNodes(i, "ProgressBar")[0]).attributes.titleType) && (this.$titleType = t.ParseProgressTitleType(n)), this.$reverse = "true" == i.attributes.reverse, this.$titleObject = this.getChild("title"), this.$barObjectH = this.getChild("bar"), this.$barObjectV = this.getChild("bar_v"), this.$aniObject = this.getChild("ani"), this.$barObjectH && (this.$barMaxWidth = this.$barObjectH.width, this.$barMaxWidthDelta = this.width - this.$barMaxWidth, this.$barStartX = this.$barObjectH.x), this.$barObjectV && (this.$barMaxHeight = this.$barObjectV.height, this.$barMaxHeightDelta = this.height - this.$barMaxHeight, this.$barStartY = this.$barObjectV.y)
        }, i.prototype.handleSizeChanged = function () {
            e.prototype.handleSizeChanged.call(this), this.$barObjectH && (this.$barMaxWidth = this.width - this.$barMaxWidthDelta), this.$barObjectV && (this.$barMaxHeight = this.height - this.$barMaxHeightDelta), this.$inProgressBuilding || this.update(this.$value)
        }, i.prototype.setupAfterAdd = function (i) {
            e.prototype.setupAfterAdd.call(this, i), (i = t.utils.XmlParser.getChildNodes(i, "ProgressBar")[0]) && (this.$value = parseInt(i.attributes.value) || 0, this.$max = parseInt(i.attributes.max) || 0), this.update(this.$value)
        }, i.prototype.dispose = function () {
            this.$tweener && (this.$tweener.paused = !0, this.$tweener.removeAllEventListeners()), createjs.Tween.removeTweens(this), this.$tweener = null, e.prototype.dispose.call(this)
        }, i.easeLinear = t.ParseEaseType("linear"), i
    }(t.GComponent);
    t.GProgressBar = e
}(fgui || (fgui = {})),
function (t) {
    var e = function () {
        function t() {
            this.width = 0, this.height = 0, this.textHeight = 0, this.y = 0
        }
        return t.get = function () {
            if (t.pool.length) {
                var e = t.pool.pop();
                return e.width = 0, e.height = 0, e.textHeight = 0, e.text = null, e.y = 0, e
            }
            return new t
        }, t.recycle = function (e) {
            t.pool.push(e)
        }, t.recycleMany = function (e) {
            e && e.length && e.forEach(function (e) {
                t.pool.push(e)
            }, this), e.length = 0
        }, t.pool = [], t
    }();
    t.LineInfo = e;
    var i = function (i) {
        function n() {
            var e = i.call(this) || this;
            return e.$verticalAlign = 0, e.$offset = new PIXI.Point, e.$singleLine = !0, e.$text = "", e.$textWidth = 0, e.$textHeight = 0, e.$style = new PIXI.TextStyle({
                fontSize: 12,
                fontFamily: t.UIConfig.defaultFont,
                align: "left",
                leading: 3,
                fill: 0
            }), e.$verticalAlign = 0, e.$text = "", e.$autoSize = 1, e.$widthAutoSize = !0, e.$heightAutoSize = !0, e.$bitmapPool = [], e.touchable = !1, e
        }
        return __extends(n, i), n.prototype.createDisplayObject = function () {
            this.$textField = new t.UITextField(this), this.setDisplayObject(this.$textField)
        }, n.prototype.switchBitmapMode = function (e) {
            e && this.displayObject == this.$textField ? (null == this.$btContainer && (this.$btContainer = new t.UIContainer(this)), this.switchDisplayObject(this.$btContainer)) : e || this.displayObject != this.$btContainer || this.switchDisplayObject(this.$textField)
        }, n.prototype.dispose = function () {
            t.GTimer.inst.remove(this.$render, this), this.$bitmapFont = null, this.$bitmapPool.length = 0, this.$bitmapPool = null, this.$style = null, i.prototype.dispose.call(this)
        }, Object.defineProperty(n.prototype, "text", {
            get: function () {
                return this.getText()
            }, set: function (t) {
                this.setText(t)
            }, enumerable: !0,
            configurable: !0
        }), n.prototype.setText = function (t) {
            null == t && (t = ""), this.$text != t && (this.$text = t, this.updateGear(6), this.parent && this.parent.$inProgressBuilding ? this.renderNow() : this.render())
        }, n.prototype.getText = function () {
            return this.$text
        }, Object.defineProperty(n.prototype, "color", {
            get: function () {
                return this.getColor()
            }, set: function (t) {
                this.setColor(t)
            }, enumerable: !0,
            configurable: !0
        }), n.prototype.getColor = function () {
            return this.$color
        }, n.prototype.setColor = function (t) {
            this.$color != t && (this.$color = t, this.updateGear(4), this.$style.fill = this.$color, this.render())
        }, Object.defineProperty(n.prototype, "titleColor", {
            get: function () {
                return this.color
            }, set: function (t) {
                this.color = t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "lineHeight", {
            get: function () {
                return this.$style.lineHeight > 0 ? this.$style.lineHeight : this.$fontProperties ? this.$fontProperties.fontSize + this.$style.strokeThickness + this.$style.leading : +this.$style.fontSize + this.$style.strokeThickness
            }, set: function (t) {
                this.$style.lineHeight = t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "font", {
            get: function () {
                return this.$font || t.UIConfig.defaultFont
            }, set: function (e) {
                this.$font != e && (this.$font = e, this.$font && t.utils.StringUtil.startsWith(this.$font, "ui://") ? this.$bitmapFont = t.UIPackage.getBitmapFontByURL(this.$font) : this.$style.fontFamily = this.$font || t.UIConfig.defaultFont, this.render())
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "fontSize", {
            get: function () {
                return +this.$style.fontSize
            }, set: function (t) {
                t <= 0 || this.$style.fontSize != t && (this.$style.fontSize = t, this.render())
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "align", {
            get: function () {
                return this.$style.align
            }, set: function (t) {
                this.$style.align != t && (this.$style.align = t, this.render())
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "verticalAlign", {
            get: function () {
                return this.$verticalAlign
            }, set: function (t) {
                this.$verticalAlign != t && (this.$verticalAlign = t, this.$inProgressBuilding || this.layoutAlign())
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "leading", {
            get: function () {
                return this.$style.leading
            }, set: function (t) {
                this.$style.leading != t && (this.$style.leading = t, this.render())
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "letterSpacing", {
            get: function () {
                return this.$style.letterSpacing
            }, set: function (t) {
                this.$style.letterSpacing != t && (this.$style.letterSpacing = t, this.render())
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "underline", {
            get: function () {
                return !1
            }, set: function (t) {}, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "bold", {
            get: function () {
                return "bold" == this.$style.fontWeight
            }, set: function (t) {
                var e = !0 === t ? "bold" : "normal";
                this.$style.fontWeight != e && (this.$style.fontWeight = e, this.render())
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "weight", {
            get: function () {
                return this.$style.fontWeight
            }, set: function (t) {
                this.$style.fontWeight != t && (this.$style.fontWeight = t, this.render())
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "variant", {
            get: function () {
                return this.$style.fontVariant
            }, set: function (t) {
                this.$style.fontVariant != t && (this.$style.fontVariant = t, this.render())
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "italic", {
            get: function () {
                return "italic" == this.$style.fontStyle
            }, set: function (t) {
                var e = !0 === t ? "italic" : "normal";
                this.$style.fontStyle != e && (this.$style.fontStyle = e, this.render())
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "multipleLine", {
            get: function () {
                return !this.$singleLine
            }, set: function (t) {
                t = !t, this.$singleLine != t && (this.$singleLine = t, this.render())
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "stroke", {
            get: function () {
                return +this.$style.strokeThickness
            }, set: function (t) {
                this.$style.strokeThickness != t && (this.$style.strokeThickness = t)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "strokeColor", {
            get: function () {
                return this.$style.stroke
            }, set: function (t) {
                this.$style.stroke != t && (this.$style.stroke = t)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "autoSize", {
            get: function () {
                return this.$autoSize
            }, set: function (t) {
                this.$autoSize != t && (this.$autoSize = t, this.$widthAutoSize = 1 == t || 3 == t, this.$heightAutoSize = 1 == t || 2 == t, this.render())
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "textWidth", {
            get: function () {
                return this.$requireRender && this.renderNow(), this.$textWidth
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "textHeight", {
            get: function () {
                return this.$requireRender && this.renderNow(), this.$textHeight
            }, enumerable: !0,
            configurable: !0
        }), n.prototype.ensureSizeCorrect = function () {
            this.$sizeDirty && this.$requireRender && this.renderNow()
        }, n.prototype.render = function () {
            this.$requireRender || (this.$requireRender = !0, t.GTimer.inst.callLater(this.$render, this)), this.$sizeDirty || !this.$widthAutoSize && !this.$heightAutoSize || (this.$sizeDirty = !0, this.emit("__sizeDelayChange", this))
        }, n.prototype.applyStyle = function () {
            this.$textField.style.stroke = this.$style.stroke, this.$textField.style.strokeThickness = this.$style.strokeThickness, this.$textField.style.fontStyle = this.$style.fontStyle, this.$textField.style.fontVariant = this.$style.fontVariant, this.$textField.style.fontWeight = this.$style.fontWeight, this.$textField.style.letterSpacing = this.$style.letterSpacing, this.$textField.style.align = this.$style.align, this.$textField.style.fontSize = this.$style.fontSize, this.$textField.style.fontFamily = this.$style.fontFamily, this.$textField.style.fill = this.$style.fill, this.$textField.style.leading = this.$style.leading
        }, n.prototype.$render = function () {
            this.$requireRender && this.renderNow()
        }, n.prototype.renderNow = function (t) {
            if (void 0 === t && (t = !0), this.$requireRender = !1, this.$sizeDirty = !1, null == this.$bitmapFont) {
                this.switchBitmapMode(!1), this.applyStyle(), this.$textField.$updateMinHeight();
                var e = !this.$widthAutoSize && this.multipleLine;
                this.$textField.width = this.$textField.style.wordWrapWidth = e || 0 == this.autoSize ? Math.ceil(this.width) : 1e4, this.$textField.style.wordWrap = e, this.$textField.style.breakWords = e, this.$textField.text = this.$text, this.$fontProperties = PIXI.TextMetrics.measureFont(this.$style.toFontString()), this.$textWidth = Math.ceil(this.$textField.textWidth), this.$textWidth > 0 && (this.$textWidth += 2 * n.GUTTER_X), this.$textHeight = Math.ceil(this.$textField.textHeight), this.$textHeight > 0 && (this.$textHeight += 2 * n.GUTTER_Y);
                var i = this.width,
                    s = this.height;
                3 == this.autoSize ? this.shrinkTextField() : (this.$textField.scale.set(1, 1), this.$widthAutoSize && (i = this.$textWidth, this.$textField.width = i), this.$heightAutoSize ? (s = this.$textHeight, this.$textField.height != this.$textHeight && (this.$textField.height = this.$textHeight)) : (s = this.height, this.$textHeight > s && (this.$textHeight = s))), t && (this.$updatingSize = !0, this.setSize(i, s), this.$updatingSize = !1), this.layoutAlign()
            } else this.renderWithBitmapFont(t)
        }, n.prototype.renderWithBitmapFont = function (i) {
            var s = this;
            this.switchBitmapMode(!0), this.$btContainer.children.forEach(function (t, e) {
                s.$bitmapPool.push(s.$btContainer.getChildAt(e))
            }, this), this.$btContainer.removeChildren(), this.$lines ? e.recycleMany(this.$lines) : this.$lines = [];
            var r, o, h = this.letterSpacing,
                a = this.leading - 1,
                l = this.width - 2 * n.GUTTER_X,
                u = 0,
                c = 0,
                p = 0,
                $ = 0,
                d = 0,
                f = 0,
                g = 0,
                y = 0,
                m = 0,
                b = "",
                v = n.GUTTER_Y,
                w = !this.$widthAutoSize && this.multipleLine,
                I = this.$bitmapFont.resizable ? this.fontSize / this.$bitmapFont.size : 1;
            this.$textWidth = 0, this.$textHeight = 0;
            for (var x = this.text.length, C = 0; C < x; ++C) {
                var P = this.$text.charAt(C),
                    S = P.charCodeAt(C);
                if ("\n" != P)
                    if (S > 256 || S <= 32 ? (f > 0 && (y = u), f = 0) : (0 == f && (g = u), f++), " " == P ? ($ = Math.ceil(this.fontSize / 2), d = Math.ceil(this.fontSize)) : (o = this.$bitmapFont.glyphs[P]) ? ($ = Math.ceil(o.advance * I), d = Math.ceil(o.lineHeight * I)) : " " == P ? ($ = Math.ceil(this.$bitmapFont.size * I / 2), d = Math.ceil(this.$bitmapFont.size * I)) : ($ = 0, d = 0), d > p && (p = d), d > c && (c = d), 0 != u && (u += h), u += $, !w || u <= l) b += P;
                    else {
                        if ((r = e.get()).height = c, r.textHeight = p, 0 == b.length) r.text = P;
                        else if (f > 0 && y > 0) {
                            var O = (b += P).length - f;
                            r.text = t.utils.StringUtil.trimRight(b.substr(0, O)), r.width = y, b = b.substr(O + 1), u -= g
                        } else r.text = b, r.width = u - ($ + h), b = P, u = $, c = d, p = d;
                        r.y = v, v += r.height + a, r.width > this.$textWidth && (this.$textWidth = r.width), f = 0, g = 0, y = 0, this.$lines.push(r)
                    } else b += P, (r = e.get()).width = u, 0 == p && (0 == m && (m = Math.ceil(this.fontSize * I)), 0 == c && (c = m), p = c), r.height = c, m = c, r.textHeight = p, r.text = b, r.y = v, v += r.height + a, r.width > this.$textWidth && (this.$textWidth = r.width), this.$lines.push(r), b = "", u = 0, c = 0, p = 0, f = 0, g = 0, y = 0
            }(b.length > 0 || this.$lines.length > 0 && t.utils.StringUtil.endsWith(this.$lines[this.$lines.length - 1].text, "\n")) && ((r = e.get()).width = u, 0 == c && (c = m), 0 == p && (p = c), r.height = c, r.textHeight = p, r.text = b, r.y = v, r.width > this.$textWidth && (this.$textWidth = r.width), this.$lines.push(r)), this.$textWidth > 0 && (this.$textWidth += 2 * n.GUTTER_X), 0 == this.$lines.length ? this.$textHeight = 0 : (r = this.$lines[this.$lines.length - 1], this.$textHeight = r.y + r.height + n.GUTTER_Y);
            var j, T = 0;
            j = this.$widthAutoSize ? 0 == this.$textWidth ? 0 : this.$textWidth : this.width, T = this.$heightAutoSize ? 0 == this.$textHeight ? 0 : this.$textHeight : this.height, i && (this.$updatingSize = !0, this.setSize(j, T), this.$updatingSize = !1), 0 != j && 0 != T && (l = this.width - 2 * n.GUTTER_X, this.$lines.forEach(function (t) {
                var e = n.GUTTER_X,
                    i = 0,
                    r = 0;
                i = "center" == s.align ? (l - t.width) / 2 : "right" == s.align ? l - t.width : 0, x = t.text.length;
                for (var a = 0; a < x; a++) {
                    var u = t.text.charAt(a);
                    if (null != (o = s.$bitmapFont.glyphs[u])) {
                        r = (t.height + t.textHeight) / 2 - Math.ceil(o.lineHeight * I);
                        var c = void 0;
                        (c = s.$bitmapPool.length ? s.$bitmapPool.pop() : new PIXI.Sprite).x = e + i + Math.ceil(o.offsetX * I), c.y = t.y + r + Math.ceil(o.offsetY * I), c.texture = o.texture, c.scale.set(I, I), c.tint = !0 === s.$bitmapFont.colorable ? s.$color : 16777215, s.$btContainer.addChild(c), e += h + Math.ceil(o.advance * I)
                    } else e += " " == u ? h + Math.ceil(s.$bitmapFont.size * I / 2) : h
                }
            }))
        }, n.prototype.localToGlobal = function (t, e, n) {
            return void 0 === t && (t = 0), void 0 === e && (e = 0), t -= this.$offset.x, e -= this.$offset.y, i.prototype.localToGlobal.call(this, t, e, n)
        }, n.prototype.globalToLocal = function (t, e, n) {
            void 0 === t && (t = 0), void 0 === e && (e = 0);
            var s = i.prototype.globalToLocal.call(this, t, e, n);
            return s.x -= this.$offset.x, s.y -= this.$offset.y, s
        }, n.prototype.handleSizeChanged = function () {
            this.$updatingSize || (null != this.$bitmapFont ? this.$widthAutoSize || this.render() : this.$inProgressBuilding ? (this.$textField.width = this.width, this.$textField.height = this.height) : 3 == this.$autoSize ? this.shrinkTextField() : this.$widthAutoSize || (this.$heightAutoSize ? this.$textField.width = this.width : (this.$textField.width = this.width, this.$textField.height = this.height)), this.layoutAlign())
        }, n.prototype.shrinkTextField = function () {
            var t = Math.min(1, this.width / this.$textWidth);
            this.$textField.scale.set(t, t)
        }, n.prototype.layoutAlign = function () {
            var t = this.$textWidth,
                e = this.$textHeight;
            if (3 == this.autoSize && (t *= this.displayObject.scale.x, e *= this.displayObject.scale.y), 0 == this.$verticalAlign || 0 == e) this.$offset.y = n.GUTTER_Y;
            else {
                var i = Math.max(0, this.height - e);
                1 == this.$verticalAlign ? this.$offset.y = .5 * i : 2 == this.$verticalAlign && (this.$offset.y = i)
            }
            var s = 0;
            switch (this.$style.align) {
            case "center":
                s = .5 * (this.width - t);
                break;
            case "right":
                s = this.width - t
            }
            this.$offset.x = s, this.updatePosition()
        }, n.prototype.updatePosition = function () {
            this.displayObject.position.set(Math.floor(this.x + this.$offset.x), Math.floor(this.y + this.$offset.y))
        }, n.prototype.handleXYChanged = function () {
            i.prototype.handleXYChanged.call(this), this.$displayObject && this.updatePosition()
        }, n.prototype.setupBeforeAdd = function (e) {
            i.prototype.setupBeforeAdd.call(this, e);
            var n = e.attributes.font;
            n && (this.font = n), (n = e.attributes.vAlign) && (this.verticalAlign = t.ParseVertAlignType(n)), (n = e.attributes.leading) && (this.$style.leading = parseInt(n)), (n = e.attributes.letterSpacing) && (this.$style.letterSpacing = parseInt(n)), (n = e.attributes.fontSize) && (this.$style.fontSize = parseInt(n)), (n = e.attributes.color) && (this.color = t.utils.StringUtil.convertFromHtmlColor(n)), (n = e.attributes.align) && (this.align = t.ParseAlignType(n)), (n = e.attributes.autoSize) && (this.autoSize = t.ParseAutoSizeType(n), this.$widthAutoSize = 1 == this.$autoSize || 3 == this.$autoSize, this.$heightAutoSize = 1 == this.$autoSize || 2 == this.$autoSize), this.underline = "true" == e.attributes.underline, this.italic = "true" == e.attributes.italic, this.bold = "true" == e.attributes.bold, this.multipleLine = "true" != e.attributes.singleLine, (n = e.attributes.strokeColor) && (this.strokeColor = t.utils.StringUtil.convertFromHtmlColor(n), n = e.attributes.strokeSize, this.stroke = n ? parseInt(n) + 1 : 2)
        }, n.prototype.setupAfterAdd = function (t) {
            i.prototype.setupAfterAdd.call(this, t);
            var e = t.attributes.text;
            null != e && e.length > 0 && (this.text = e), this.$sizeDirty = !1
        }, n.GUTTER_X = 2, n.GUTTER_Y = 2, n
    }(t.GObject);
    t.GTextField = i
}(fgui || (fgui = {})),
function (t) {
    var e = function () {
        return function () {}
    }();
    t.TextBlock = e;
    var i = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.$textField.interactive = !0, e.$textField.interactiveChildren = !1, e.on("__linkClick", e.$clickLink, e), e
        }
        return __extends(e, t), Object.defineProperty(e.prototype, "ubbEnabled", {
            get: function () {
                return this.$ubbEnabled
            }, set: function (t) {
                this.$ubbEnabled != t && (this.$ubbEnabled = t, this.render())
            }, enumerable: !0,
            configurable: !0
        }), e.prototype.setupBeforeAdd = function (e) {
            t.prototype.setupBeforeAdd.call(this, e), this.$ubbEnabled = "true" == e.attributes.ubb
        }, Object.defineProperty(e.prototype, "textFlow", {
            set: function (t) {
                this.$textFlow = t, this.render()
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "text", {
            set: function (t) {
                this.$text = t, null == this.$text && (this.$text = ""), this.$textField.width = this.width, this.updateGear(6), this.render()
            }, enumerable: !0,
            configurable: !0
        }), e.prototype.$clickLink = function (t) {
            this.emit("__linkClick", t.text, this)
        }, e.prototype.dispose = function () {
            this.off("__linkClick", this.$clickLink, this), t.prototype.dispose.call(this)
        }, e
    }(t.GTextField);
    t.GRichTextField = i
}(fgui || (fgui = {})),
function (t) {
    var e = function () {
        return function () {
            this.touchDown = !1, this.mouseX = 0, this.mouseY = 0
        }
    }();
    t.GRootMouseStatus = e;
    var i = function (i) {
        function n() {
            var e = i.call(this) || this;
            return null == n.$inst && (n.$inst = e), e.opaque = !1, e.$popupStack = [], e.$justClosedPopups = [], e.$uid = n.uniqueID++, t.utils.DOMEventManager.inst.on("__mouseWheel", e.dispatchMouseWheel, e), e
        }
        return __extends(n, i), Object.defineProperty(n, "inst", {
            get: function () {
                return null == n.$inst && new n, n.$inst
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n, "globalMouseStatus", {
            get: function () {
                return n.$gmStatus
            }, enumerable: !0,
            configurable: !0
        }), n.prototype.attachTo = function (e, i) {
            createjs.Ticker = null, t.GTimer.inst.setTicker(e.ticker), this.$uiStage && (this.$uiStage.off("__sizeChanged", this.$winResize, this), this.$uiStage.nativeStage.off(t.InteractiveEvents.Down, this.$stageDown, this), this.$uiStage.nativeStage.off(t.InteractiveEvents.Up, this.$stageUp, this), this.$uiStage.nativeStage.off(t.InteractiveEvents.Move, this.$stageMove, this), this.$uiStage.nativeStage.removeChild(this.$displayObject), this.$uiStage.dispose()), this.$uiStage = new t.UIStage(e, i), this.$uiStage.on("__sizeChanged", this.$winResize, this), this.$uiStage.nativeStage.on(t.InteractiveEvents.Down, this.$stageDown, this), this.$uiStage.nativeStage.on(t.InteractiveEvents.Up, this.$stageUp, this), this.$uiStage.nativeStage.on(t.InteractiveEvents.Move, this.$stageMove, this), this.$uiStage.nativeStage.addChild(this.$displayObject), this.$winResize(this.$uiStage), this.$modalLayer || (this.$modalLayer = new t.GGraph, this.$modalLayer.setSize(this.width, this.height), this.$modalLayer.drawRect(0, 0, 0, t.UIConfig.modalLayerColor, t.UIConfig.modalLayerAlpha), this.$modalLayer.addRelation(this, 24))
        }, Object.defineProperty(n.prototype, "uniqueID", {
            get: function () {
                return this.$uid
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "stageWidth", {
            get: function () {
                return this.$uiStage.stageWidth
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "stageHeight", {
            get: function () {
                return this.$uiStage.stageHeight
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "contentScaleFactor", {
            get: function () {
                return this.$uiStage.resolution
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "applicationContext", {
            get: function () {
                return this.$uiStage.applicationContext
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "nativeStage", {
            get: function () {
                return this.$uiStage.nativeStage
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "orientation", {
            get: function () {
                return this.$uiStage.orientation
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "stageWrapper", {
            get: function () {
                return this.$uiStage
            }, enumerable: !0,
            configurable: !0
        }), n.prototype.dispatchMouseWheel = function (t) {
            var e = this.getObjectUnderPoint(n.globalMouseStatus.mouseX, n.globalMouseStatus.mouseY);
            if (null != e)
                for (; e.parent && e.parent != this;) e.emit("__mouseWheel", t), e = e.parent
        }, n.prototype.getObjectUnderPoint = function (e, i) {
            n.sHelperPoint.set(e, i);
            var s = this.$uiStage.applicationContext.renderer.plugins.interaction.hitTest(n.sHelperPoint, this.nativeStage);
            return t.GObject.castFromNativeObject(s)
        }, n.prototype.showWindow = function (t) {
            this.addChild(t), t.requestFocus(), t.x > this.width ? t.x = this.width - t.width : t.x + t.width < 0 && (t.x = 0), t.y > this.height ? t.y = this.height - t.height : t.y + t.height < 0 && (t.y = 0), this.adjustModalLayer()
        }, n.prototype.hideWindow = function (t) {
            t.hide()
        }, n.prototype.hideWindowImmediately = function (t) {
            t.parent == this && this.removeChild(t), this.adjustModalLayer()
        }, n.prototype.bringToFront = function (e) {
            var i;
            for (i = null == this.$modalLayer.parent || e.modal ? this.numChildren - 1 : this.getChildIndex(this.$modalLayer) - 1; i >= 0; i--) {
                var n = this.getChildAt(i);
                if (n == e) return;
                if (n instanceof t.Window) break
            }
            i >= 0 && this.setChildIndex(e, i)
        }, n.prototype.showModalWait = function (e) {
            void 0 === e && (e = null), null != t.UIConfig.globalModalWaiting && (null == this.$modalWaitPane && (this.$modalWaitPane = t.UIPackage.createObjectFromURL(t.UIConfig.globalModalWaiting), this.$modalWaitPane.addRelation(this, 24)), this.$modalWaitPane.setSize(this.width, this.height), this.addChild(this.$modalWaitPane), this.$modalWaitPane.text = e)
        }, n.prototype.closeModalWait = function () {
            null != this.$modalWaitPane && null != this.$modalWaitPane.parent && this.removeChild(this.$modalWaitPane)
        }, n.prototype.closeAllExceptModals = function () {
            this.$children.slice().forEach(function (e) {
                e instanceof t.Window && !e.modal && e.hide()
            }, this)
        }, n.prototype.closeAllWindows = function () {
            this.$children.slice().forEach(function (e) {
                e instanceof t.Window && e.hide()
            }, this)
        }, n.prototype.getTopWindow = function () {
            for (var e = this.numChildren - 1; e >= 0; e--) {
                var i = this.getChildAt(e);
                if (i instanceof t.Window) return i
            }
            return null
        }, Object.defineProperty(n.prototype, "hasModalWindow", {
            get: function () {
                return null != this.$modalLayer.parent
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "modalWaiting", {
            get: function () {
                return this.$modalWaitPane && this.$modalWaitPane.inContainer
            }, enumerable: !0,
            configurable: !0
        }), n.prototype.showPopup = function (t, e, i) {
            if (void 0 === e && (e = null), void 0 === i && (i = 0), this.$popupStack.length > 0) {
                var s = this.$popupStack.indexOf(t);
                if (-1 != s)
                    for (var r = this.$popupStack.length - 1; r >= s; r--) this.removeChild(this.$popupStack.pop())
            }
            var o;
            this.$popupStack.push(t), this.addChild(t), this.adjustModalLayer();
            var h, a, l = 0,
                u = 0;
            e ? (o = e.localToRoot(), l = e.width, u = e.height) : o = this.globalToLocal(n.$gmStatus.mouseX, n.$gmStatus.mouseY), (h = o.x) + t.width > this.width && (h = h + l - t.width), a = o.y + u, (0 == i && a + t.height > this.height || 2 == i) && (a = o.y - t.height - 1) < 0 && (a = 0, h += .5 * l), t.x = h, t.y = a
        }, n.prototype.togglePopup = function (t, e, i) {
            void 0 === e && (e = null), -1 == this.$justClosedPopups.indexOf(t) && this.showPopup(t, e, i)
        }, n.prototype.hidePopup = function (t) {
            var e;
            if (void 0 === t && (t = null), null != t) {
                var i = this.$popupStack.indexOf(t);
                if (-1 != i)
                    for (e = this.$popupStack.length - 1; e >= i; e--) this.closePopup(this.$popupStack.pop())
            } else {
                for (e = this.$popupStack.length - 1; e >= 0; e--) this.closePopup(this.$popupStack[e]);
                this.$popupStack.length = 0
            }
        }, Object.defineProperty(n.prototype, "hasAnyPopup", {
            get: function () {
                return 0 != this.$popupStack.length
            }, enumerable: !0,
            configurable: !0
        }), n.prototype.closePopup = function (e) {
            null != e.parent && (e instanceof t.Window ? e.hide() : this.removeChild(e))
        }, n.prototype.showTooltips = function (e) {
            if (null == this.$defaultTooltipWin) {
                var i = t.UIConfig.tooltipsWin;
                if (!i) return void console.error("UIConfig.tooltipsWin not defined");
                this.$defaultTooltipWin = t.UIPackage.createObjectFromURL(i)
            }
            this.$defaultTooltipWin.text = e, this.showTooltipsWin(this.$defaultTooltipWin)
        }, n.prototype.showTooltipsWin = function (t, e) {
            void 0 === e && (e = null), this.hideTooltips(), this.$tooltipWin = t;
            var i = 0,
                s = 0;
            null == e ? (i = n.$gmStatus.mouseX + 10, s = n.$gmStatus.mouseY + 20) : (i = e.x, s = e.y);
            var r = this.globalToLocal(i, s);
            i = r.x, s = r.y, i + this.$tooltipWin.width > this.width && (i = i - this.$tooltipWin.width - 1) < 0 && (i = 10), s + this.$tooltipWin.height > this.height && (s = s - this.$tooltipWin.height - 1, i - this.$tooltipWin.width - 1 > 0 && (i = i - this.$tooltipWin.width - 1), s < 0 && (s = 10)), this.$tooltipWin.x = i, this.$tooltipWin.y = s, this.addChild(this.$tooltipWin)
        }, n.prototype.hideTooltips = function () {
            null != this.$tooltipWin && (this.$tooltipWin.parent && this.removeChild(this.$tooltipWin), this.$tooltipWin = null)
        }, Object.defineProperty(n.prototype, "focus", {
            get: function () {
                return this.$focusedObject && !this.$focusedObject.onStage && (this.$focusedObject = null), this.$focusedObject
            }, set: function (t) {
                if (t && (!t.focusable || !t.onStage)) throw new Error("Invalid target to focus");
                this.setFocus(t)
            }, enumerable: !0,
            configurable: !0
        }), n.prototype.setFocus = function (t) {
            this.$focusedObject != t && (this.$focusedObject = t, this.emit("__focusChanged", this))
        }, n.prototype.adjustModalLayer = function () {
            var e = this.numChildren;
            null != this.$modalWaitPane && null != this.$modalWaitPane.parent && this.setChildIndex(this.$modalWaitPane, e - 1);
            for (var i = e - 1; i >= 0; i--) {
                var n = this.getChildAt(i);
                if (n instanceof t.Window && n.modal) return void(null == this.$modalLayer.parent ? this.addChildAt(this.$modalLayer, i) : this.setChildIndexBefore(this.$modalLayer, i))
            }
            null != this.$modalLayer.parent && this.removeChild(this.$modalLayer)
        }, n.prototype.$stageDown = function (e) {
            n.$gmStatus.mouseX = e.data.global.x, n.$gmStatus.mouseY = e.data.global.y, n.$gmStatus.touchDown = !0;
            for (var i = e.target; i && i != this.nativeStage;) {
                if (t.isUIObject(i)) {
                    var s = i.UIOwner;
                    if (s.touchable && s.focusable) {
                        this.setFocus(s);
                        break
                    }
                }
                i = i.parent
            }
            null != this.$tooltipWin && this.hideTooltips(), this.checkPopups(e.target)
        }, n.prototype.checkPopups = function (e) {
            if (!this.$checkingPopups && (this.$checkingPopups = !0, this.$justClosedPopups.length = 0, this.$popupStack.length > 0)) {
                for (var i = e; i && i != this.nativeStage;) {
                    if (t.isUIObject(i)) {
                        var n = this.$popupStack.indexOf(i.UIOwner);
                        if (-1 != n) {
                            for (var s = void 0, r = this.$popupStack.length - 1; r > n; r--) s = this.$popupStack.pop(), this.closePopup(s), this.$justClosedPopups.push(s);
                            return
                        }
                    }
                    i = i.parent
                }
                var o = void 0;
                for (r = this.$popupStack.length - 1; r >= 0; r--) o = this.$popupStack[r], this.closePopup(o), this.$justClosedPopups.push(o);
                this.$popupStack.length = 0
            }
        }, n.prototype.$stageMove = function (t) {
            n.$gmStatus.mouseX = t.data.global.x, n.$gmStatus.mouseY = t.data.global.y
        }, n.prototype.$stageUp = function (t) {
            n.$gmStatus.touchDown = !1, this.$checkingPopups = !1
        }, n.prototype.$winResize = function (t) {
            this.setSize(t.stageWidth, t.stageHeight)
        }, n.uniqueID = 0, n.$gmStatus = new e, n
    }(t.GComponent);
    t.GRoot = i
}(fgui || (fgui = {})),
function (t) {
    var e = function (e) {
        function i() {
            var t = e.call(this) || this;
            return t.$dragOffset = new PIXI.Point, t.$scrollPerc = 0, t
        }
        return __extends(i, e), i.prototype.setScrollPane = function (t, e) {
            this.$target = t, this.$vertical = e
        }, Object.defineProperty(i.prototype, "displayPerc", {
            set: function (t) {
                this.$vertical ? (this.$fixedGripSize || (this.$grip.height = t * this.$bar.height), this.$grip.y = this.$bar.y + (this.$bar.height - this.$grip.height) * this.$scrollPerc) : (this.$fixedGripSize || (this.$grip.width = t * this.$bar.width), this.$grip.x = this.$bar.x + (this.$bar.width - this.$grip.width) * this.$scrollPerc)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "scrollPerc", {
            get: function () {
                return this.$scrollPerc
            }, set: function (t) {
                this.$scrollPerc = t, this.$vertical ? this.$grip.y = this.$bar.y + (this.$bar.height - this.$grip.height) * this.$scrollPerc : this.$grip.x = this.$bar.x + (this.$bar.width - this.$grip.width) * this.$scrollPerc
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "minSize", {
            get: function () {
                return this.$vertical ? (null != this.$arrowButton1 ? this.$arrowButton1.height : 0) + (null != this.$arrowButton2 ? this.$arrowButton2.height : 0) : (null != this.$arrowButton1 ? this.$arrowButton1.width : 0) + (null != this.$arrowButton2 ? this.$arrowButton2.width : 0)
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.constructFromXML = function (i) {
            e.prototype.constructFromXML.call(this, i), null != (i = t.utils.XmlParser.getChildNodes(i, "ScrollBar")[0]) && (this.$fixedGripSize = "true" == i.attributes.fixedGripSize), this.$grip = this.getChild("grip"), this.$grip ? (this.$bar = this.getChild("bar"), this.$bar ? (this.$arrowButton1 = this.getChild("arrow1"), this.$arrowButton2 = this.getChild("arrow2"), this.$grip.on(t.InteractiveEvents.Down, this.$gripMouseDown, this), this.$arrowButton1 && this.$arrowButton1.on(t.InteractiveEvents.Down, this.$arrowButton1Click, this), this.$arrowButton2 && this.$arrowButton2.on(t.InteractiveEvents.Down, this.$arrowButton2Click, this), this.on(t.InteractiveEvents.Down, this.$barMouseDown, this)) : console.error("please create and define 'bar' in the Editor for the scrollbar")) : console.error("please create and define 'grip' in the Editor for the scrollbar")
        }, i.prototype.$gripMouseDown = function (e) {
            if (this.$bar) {
                e.stopPropagation(), this.$dragOffset = e.data.getLocalPosition(this.displayObject, this.$dragOffset), this.$dragOffset.x -= this.$grip.x, this.$dragOffset.y -= this.$grip.y;
                var i = t.GRoot.inst.nativeStage;
                i.on(t.InteractiveEvents.Move, this.$gripDragging, this), i.on(t.InteractiveEvents.Up, this.$gripDraggingEnd, this)
            }
        }, i.prototype.$gripDragging = function (t) {
            var e = t.data.getLocalPosition(this.displayObject, i.sScrollbarHelperPoint);
            if (this.$vertical) {
                var n = e.y - this.$dragOffset.y;
                this.$target.setPercY((n - this.$bar.y) / (this.$bar.height - this.$grip.height), !1)
            } else {
                var s = e.x - this.$dragOffset.x;
                this.$target.setPercX((s - this.$bar.x) / (this.$bar.width - this.$grip.width), !1)
            }
        }, i.prototype.$gripDraggingEnd = function (e) {
            var i = t.GRoot.inst.nativeStage;
            i.off(t.InteractiveEvents.Move, this.$gripDragging, this), i.off(t.InteractiveEvents.Up, this.$gripDraggingEnd, this)
        }, i.prototype.$arrowButton1Click = function (t) {
            t.stopPropagation(), this.$vertical ? this.$target.scrollUp() : this.$target.scrollLeft()
        }, i.prototype.$arrowButton2Click = function (t) {
            t.stopPropagation(), this.$vertical ? this.$target.scrollDown() : this.$target.scrollRight()
        }, i.prototype.$barMouseDown = function (t) {
            var e = t.data.getLocalPosition(this.$grip.displayObject, i.sScrollbarHelperPoint);
            this.$vertical ? e.y < 0 ? this.$target.scrollUp(4) : this.$target.scrollDown(4) : e.x < 0 ? this.$target.scrollLeft(4) : this.$target.scrollRight(4)
        }, i.prototype.dispose = function () {
            this.off(t.InteractiveEvents.Down, this.$barMouseDown, this), this.$arrowButton1 && this.$arrowButton1.off(t.InteractiveEvents.Down, this.$arrowButton1Click, this), this.$arrowButton2 && this.$arrowButton2.off(t.InteractiveEvents.Down, this.$arrowButton2Click, this), this.$grip.off(t.InteractiveEvents.Down, this.$gripMouseDown, this), this.$gripDraggingEnd(null), e.prototype.dispose.call(this)
        }, i.sScrollbarHelperPoint = new PIXI.Point, i
    }(t.GComponent);
    t.GScrollBar = e
}(fgui || (fgui = {})),
function (t) {
    var e = function (e) {
        function i() {
            var t = e.call(this) || this;
            return t.$max = 0, t.$value = 0, t.$barMaxWidth = 0, t.$barMaxHeight = 0, t.$barMaxWidthDelta = 0, t.$barMaxHeightDelta = 0, t.$titleType = 0, t.$value = 50, t.$max = 100, t.$clickPos = new PIXI.Point, t
        }
        return __extends(i, e), Object.defineProperty(i.prototype, "titleType", {
            get: function () {
                return this.$titleType
            }, set: function (t) {
                this.$titleType = t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "max", {
            get: function () {
                return this.$max
            }, set: function (t) {
                this.$max != t && (this.$max = t, this.update())
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "value", {
            get: function () {
                return this.$value
            }, set: function (t) {
                this.$value != t && (this.$value = t, this.update())
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.update = function () {
            var t = Math.min(this.$value / this.$max, 1);
            this.updateWidthPercent(t)
        }, i.prototype.updateWidthPercent = function (e) {
            if (this.$titleObject) switch (this.$titleType) {
            case 0:
                this.$titleObject.text = Math.round(100 * e) + "%";
                break;
            case 1:
                this.$titleObject.text = this.$value + "/" + this.$max;
                break;
            case 2:
                this.$titleObject.text = "" + this.$value;
                break;
            case 3:
                this.$titleObject.text = "" + this.$max
            }
            this.$barObjectH && (this.$barObjectH.width = (this.width - this.$barMaxWidthDelta) * e), this.$barObjectV && (this.$barObjectV.height = (this.height - this.$barMaxHeightDelta) * e), this.$aniObject instanceof t.GMovieClip && (this.$aniObject.frame = Math.round(100 * e))
        }, i.prototype.handleSizeChanged = function () {
            e.prototype.handleSizeChanged.call(this), this.$barObjectH && (this.$barMaxWidth = this.width - this.$barMaxWidthDelta), this.$barObjectV && (this.$barMaxHeight = this.height - this.$barMaxHeightDelta), this.$inProgressBuilding || this.update()
        }, i.prototype.setupAfterAdd = function (i) {
            e.prototype.setupAfterAdd.call(this, i), (i = t.utils.XmlParser.getChildNodes(i, "Slider")[0]) && (this.$value = parseInt(i.attributes.value), this.$max = parseInt(i.attributes.max)), this.update()
        }, i.prototype.constructFromXML = function (i) {
            var n;
            e.prototype.constructFromXML.call(this, i), (i = t.utils.XmlParser.getChildNodes(i, "Slider")[0]) && (n = i.attributes.titleType) && (this.$titleType = t.ParseProgressTitleType(n)), this.$titleObject = this.getChild("title"), this.$barObjectH = this.getChild("bar"), this.$barObjectV = this.getChild("bar_v"), this.$aniObject = this.getChild("ani"), this.$gripObject = this.getChild("grip"), this.$barObjectH && (this.$barMaxWidth = this.$barObjectH.width, this.$barMaxWidthDelta = this.width - this.$barMaxWidth), this.$barObjectV && (this.$barMaxHeight = this.$barObjectV.height, this.$barMaxHeightDelta = this.height - this.$barMaxHeight), this.$gripObject && this.$gripObject.on(t.InteractiveEvents.Down, this.$gripMouseDown, this)
        }, i.prototype.$gripMouseDown = function (e) {
            this.$clickPos = this.globalToLocal(e.data.global.x, e.data.global.y), this.$clickPercent = this.$value / this.$max, t.GRoot.inst.nativeStage.on(t.InteractiveEvents.Move, this.$gripMouseMove, this), t.GRoot.inst.nativeStage.on(t.InteractiveEvents.Up, this.$gripMouseUp, this)
        }, i.prototype.$gripMouseMove = function (t) {
            var e, n = this.globalToLocal(t.data.global.x, t.data.global.y, i.sSilderHelperPoint),
                s = n.x - this.$clickPos.x,
                r = n.y - this.$clickPos.y;
            (e = this.$barObjectH ? this.$clickPercent + s / this.$barMaxWidth : this.$clickPercent + r / this.$barMaxHeight) > 1 ? e = 1 : e < 0 && (e = 0);
            var o = Math.round(this.$max * e);
            o != this.$value && (this.$value = o, this.emit("__stateChanged", this)), this.updateWidthPercent(e)
        }, i.prototype.$gripMouseUp = function (e) {
            var i = this.$value / this.$max;
            this.updateWidthPercent(i), t.GRoot.inst.nativeStage.off(t.InteractiveEvents.Move, this.$gripMouseMove, this), t.GRoot.inst.nativeStage.off(t.InteractiveEvents.Up, this.$gripMouseUp, this)
        }, i.prototype.dispose = function () {
            this.$gripObject && this.$gripObject.off(t.InteractiveEvents.Down, this.$gripMouseDown, this), t.GRoot.inst.nativeStage.off(t.InteractiveEvents.Move, this.$gripMouseMove, this), t.GRoot.inst.nativeStage.off(t.InteractiveEvents.Up, this.$gripMouseUp, this), e.prototype.dispose.call(this)
        }, i.sSilderHelperPoint = new PIXI.Point, i
    }(t.GComponent);
    t.GSlider = e
}(fgui || (fgui = {})),
function (t) {
    var e = function (e) {
        function i() {
            var t = e.call(this) || this;
            return t.$util = null, t.$isTyping = !1, t.focusable = !0, t.editable = !0, t.type = "text", t.on("removed", t.removed, t), t.on("added", t.added, t), t.$util.initialize(), t
        }
        return __extends(i, e), i.prototype.createDisplayObject = function () {
            e.prototype.createDisplayObject.call(this), this.$displayObject.hitArea = new PIXI.Rectangle
        }, i.prototype.handleSizeChanged = function () {
            e.prototype.handleSizeChanged.call(this);
            var t = this.$displayObject.hitArea;
            t.x = t.y = 0, t.width = this.width, t.height = this.height
        }, i.prototype.removed = function (t) {
            this.$util && this.$util.destroy()
        }, i.prototype.added = function (t) {
            this.$util && this.$util.initialize()
        }, i.prototype.requestFocus = function () {
            this.root.focus = this, this.$util.$onFocus()
        }, Object.defineProperty(i.prototype, "editable", {
            get: function () {
                return this.$editable
            }, set: function (e) {
                e != this.$editable && (this.$editable = e, this.$editable ? (this.$util || (this.$util = new t.utils.InputDelegate(this)), this.$util.initialize()) : this.$util && this.$util.destroy(), this.touchable = this.$editable)
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.changeToPassText = function (t) {
            for (var e = "", i = 0, n = t.length; i < n; i++) switch (t.charAt(i)) {
            case "\n":
                e += "\n";
                break;
            case "\r":
                break;
            default:
                e += "*"
            }
            return e
        }, i.prototype.getText = function () {
            return this.$util.text
        }, i.prototype.setText = function (t) {
            null == t && (t = ""), this.$text != t && (this.$util.text = t, e.prototype.setText.call(this, t))
        }, i.prototype.setColor = function (t) {
            e.prototype.setColor.call(this, t), this.$util.setColor(t)
        }, Object.defineProperty(i.prototype, "promptText", {
            get: function () {
                return this.$util.$getProperty("placeholder")
            }, set: function (t) {
                null == t && (t = ""), this.$util.$setProperty("placeholder", t)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "maxLength", {
            get: function () {
                return parseInt(this.$util.$getProperty("maxlength")) || 0
            }, set: function (t) {
                this.$util.$setProperty("maxlength", String(t))
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "restrict", {
            get: function () {
                return this.$util.$restrict
            }, set: function (t) {
                this.$util.$restrict = t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "password", {
            get: function () {
                return "password" == this.type
            }, set: function (t) {
                this.type = "password"
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "type", {
            get: function () {
                return this.$util.type
            }, set: function (t) {
                this.$util.type = t
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.dispose = function () {
            e.prototype.dispose.call(this), this.off("removed", this.removed, this), this.off("added", this.added, this), this.$util.destroy(), this.$util = null
        }, i.prototype.renderNow = function (t) {
            void 0 === t && (t = !0), this.$requireRender = !1, this.$sizeDirty = !1, this.$util.$updateProperties(), this.$isTyping && this.decorateInputbox();
            var i = this.$text;
            "password" == this.type && (this.$text = this.changeToPassText(this.$text)), e.prototype.renderNow.call(this, t), this.$text = i
        }, i.prototype.decorateInputbox = function () {}, i.prototype.setupBeforeAdd = function (t) {
            e.prototype.setupBeforeAdd.call(this, t);
            var i = t.attributes.maxLength;
            null != i && (this.maxLength = parseInt(i)), null != (i = t.attributes.restrict) && (this.restrict = i), "true" == (i = t.attributes.password) ? this.password = !0 : "4" == (i = t.attributes.keyboardType) ? this.type = "number" : "3" == i ? this.type = "url" : "5" == i ? this.type = "tel" : "6" == i && (this.type = "email")
        }, i
    }(t.GTextField);
    t.GTextInput = e
}(fgui || (fgui = {})),
function (t) {
    var e = function () {
        function t() {
            this.$enumIdx = 0, this.$enumCount = 0, this.$curTime = Date.now(), this.$items = [], this.$itemPool = []
        }
        return t.prototype.getItem = function () {
            return this.$itemPool.length ? this.$itemPool.pop() : new i
        }, t.prototype.findItem = function (t, e) {
            for (var i = this.$items.length, n = 0; n < i; n++) {
                var s = this.$items[n];
                if (s.callback == t && s.thisObj == e) return s
            }
            return null
        }, t.prototype.add = function (t, e, i, n, s) {
            var r = this.findItem(i, n);
            r || ((r = this.getItem()).callback = i, r.thisObj = n, this.$items.push(r)), r.delay = t, r.counter = 0, r.repeat = e, r.param = s, r.end = !1
        }, t.prototype.addLoop = function (t, e, i, n) {
            this.add(t, 0, e, i, n)
        }, t.prototype.callLater = function (t, e, i) {
            this.add(1, 1, t, e, i)
        }, t.prototype.callDelay = function (t, e, i, n) {
            this.add(t, 1, e, i, n)
        }, t.prototype.exists = function (t, e) {
            return null != this.findItem(t, e)
        }, t.prototype.remove = function (t, e) {
            var i = this.findItem(t, e);
            if (i) {
                var n = this.$items.indexOf(i);
                this.$items.splice(n, 1), n < this.$enumIdx && this.$enumIdx--, this.$enumCount--, i.callback = null, i.param = null, this.$itemPool.push(i)
            }
        }, Object.defineProperty(t.prototype, "ticker", {
            get: function () {
                return this.$ticker
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "curTime", {
            get: function () {
                return this.$curTime
            }, enumerable: !0,
            configurable: !0
        }), t.prototype.advance = function () {
            for (this.$enumIdx = 0, this.$enumCount = this.$items.length; this.$enumIdx < this.$enumCount;) {
                var t = this.$items[this.$enumIdx];
                this.$enumIdx++;
                var e = this.$ticker.deltaTime / PIXI.settings.TARGET_FPMS;
                if (this.$curTime += e, t.advance(e)) {
                    if (t.end && (this.$enumIdx--, this.$enumCount--, this.$items.splice(this.$enumIdx, 1), this.$itemPool.push(t)), t.callback) {
                        var i = [e];
                        t.param && t.param instanceof Array ? i = t.param.concat(i) : void 0 !== t.param && i.unshift(t.param), t.callback.apply(t.thisObj, i)
                    }
                    t.end && (t.callback = t.thisObj = t.param = null)
                }
            }
        }, t.prototype.tickTween = function () {
            createjs.Tween.tick(this.$ticker.deltaTime / PIXI.settings.TARGET_FPMS, !this.$ticker.started)
        }, t.prototype.setTicker = function (t) {
            this.$ticker && (this.$ticker.remove(this.advance, this, PIXI.UPDATE_PRIORITY.NORMAL), this.$ticker.remove(this.tickTween, this, PIXI.UPDATE_PRIORITY.HIGH)), this.$ticker = t, this.$ticker.add(this.advance, this, PIXI.UPDATE_PRIORITY.NORMAL), this.$ticker.add(this.tickTween, this, PIXI.UPDATE_PRIORITY.HIGH), this.$ticker.started || this.$ticker.start()
        }, t.inst = new t, t
    }();
    t.GTimer = e;
    var i = function () {
        function t() {
            this.delay = 0, this.counter = 0, this.repeat = 0
        }
        return t.prototype.advance = function (t) {
            return void 0 === t && (t = 0), this.counter += t, this.counter >= this.delay && (this.counter -= this.delay, this.counter > this.delay && (this.counter = this.delay), this.repeat > 0 && (this.repeat--, 0 == this.repeat && (this.end = !0)), !0)
        }, t
    }()
}(fgui || (fgui = {})),
function (t) {
    var e = function () {
        function e(e) {
            this.$lockToken = 0, this.$owner = e, this.$easeType = t.ParseEaseType("Quad.Out"), this.$tweenTime = .3, this.$tweenDelay = 0
        }
        return Object.defineProperty(e.prototype, "controller", {
            get: function () {
                return this.$controller
            }, set: function (t) {
                t != this.$controller && (this.$controller = t, this.$controller && this.init())
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "tween", {
            get: function () {
                return this.$tween
            }, set: function (t) {
                this.$tween = t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "tweenDelay", {
            get: function () {
                return this.$tweenDelay
            }, set: function (t) {
                this.$tweenDelay = t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "tweenTime", {
            get: function () {
                return this.$tweenTime
            }, set: function (t) {
                this.$tweenTime = t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "easeType", {
            get: function () {
                return this.$easeType
            }, set: function (t) {
                this.$easeType = t
            }, enumerable: !0,
            configurable: !0
        }), e.prototype.setup = function (e) {
            var i, n = this;
            if (this.$controller = this.$owner.parent.getController(e.attributes.controller), null != this.$controller)
                if (this.init(), (i = e.attributes.tween) && (this.$tween = !0), (i = e.attributes.ease) && (this.$easeType = t.ParseEaseType(i)), (i = e.attributes.duration) && (this.$tweenTime = parseFloat(i)), (i = e.attributes.delay) && (this.$tweenDelay = parseFloat(i)), this instanceof t.GearDisplay)(i = e.attributes.pages) && (this.pages = i.split(","));
                else {
                    var s, r = void 0;
                    (i = e.attributes.pages) && (s = i.split(",")), (i = e.attributes.values) && (r = i.split("|")), s && r && r.forEach(function (t, e) {
                        n.addStatus(s[e], t)
                    }), (i = e.attributes.default) && this.addStatus(null, i)
                }
        }, e.prototype.updateFromRelations = function (t, e) {}, e.prototype.addStatus = function (t, e) {}, e.prototype.init = function () {}, e.prototype.apply = function () {}, e.prototype.updateState = function () {}, e.disableAllTweenEffect = !1, e
    }();
    t.GearBase = e
}(fgui || (fgui = {})),
function (t) {
    var e = function (t) {
        function e(e) {
            return t.call(this, e) || this
        }
        return __extends(e, t), e.prototype.init = function () {
            this.$default = new i(this.$owner.playing, this.$owner.frame), this.$storage = {}
        }, e.prototype.addStatus = function (t, e) {
            if ("-" != e) {
                var n;
                null == t ? n = this.$default : (n = new i, this.$storage[t] = n);
                var s = e.split(",");
                n.frame = parseInt(s[0]), n.playing = "p" == s[1]
            }
        }, e.prototype.apply = function () {
            this.$owner.$gearLocked = !0;
            var t = this.$storage[this.$controller.selectedPageId];
            t || (t = this.$default), this.$owner.frame = t.frame, this.$owner.playing = t.playing, this.$owner.$gearLocked = !1
        }, e.prototype.updateState = function () {
            if (null != this.$controller && !this.$owner.$gearLocked && !this.$owner.$inProgressBuilding) {
                var t = this.$storage[this.$controller.selectedPageId];
                t || (t = new i, this.$storage[this.$controller.selectedPageId] = t), t.frame = this.$owner.frame, t.playing = this.$owner.playing
            }
        }, e
    }(t.GearBase);
    t.GearAnimation = e;
    var i = function () {
        return function (t, e) {
            void 0 === t && (t = !0), void 0 === e && (e = 0), this.playing = t, this.frame = e
        }
    }()
}(fgui || (fgui = {})),
function (t) {
    var e = function (e) {
        function i(t) {
            var i = e.call(this, t) || this;
            return i.$default = 0, i
        }
        return __extends(i, e), i.prototype.init = function () {
            this.$default = this.$owner.color, this.$storage = {}
        }, i.prototype.addStatus = function (e, i) {
            if ("-" != i) {
                var n = t.utils.StringUtil.convertFromHtmlColor(i);
                null == e ? this.$default = n : this.$storage[e] = n
            }
        }, i.prototype.apply = function () {
            this.$owner.$gearLocked = !0;
            var t = this.$storage[this.$controller.selectedPageId];
            this.$owner.color = void 0 != t ? Math.floor(t) : Math.floor(this.$default), this.$owner.$gearLocked = !1
        }, i.prototype.updateState = function () {
            null == this.$controller || this.$owner.$gearLocked || this.$owner.$inProgressBuilding || (this.$storage[this.$controller.selectedPageId] = this.$owner.color)
        }, i
    }(t.GearBase);
    t.GearColor = e
}(fgui || (fgui = {})),
function (t) {
    var e = function (t) {
        function e(e) {
            var i = t.call(this, e) || this;
            return i.$vid = 0, i.$lockToken = 1, i
        }
        return __extends(e, t), e.prototype.init = function () {
            this.pages = null
        }, e.prototype.lock = function () {
            return this.$vid++, this.$lockToken
        }, e.prototype.release = function (t) {
            t == this.$lockToken && this.$vid--
        }, Object.defineProperty(e.prototype, "connected", {
            get: function () {
                return null == this.controller || this.$vid > 0
            }, enumerable: !0,
            configurable: !0
        }), e.prototype.apply = function () {
            this.$lockToken++, this.$lockToken <= 0 && (this.$lockToken = 1), null == this.pages || 0 == this.pages.length || -1 != this.pages.indexOf(this.$controller.selectedPageId) ? this.$vid = 1 : this.$vid = 0
        }, e
    }(t.GearBase);
    t.GearDisplay = e
}(fgui || (fgui = {})),
function (t) {
    var e = function (t) {
        function e(e) {
            return t.call(this, e) || this
        }
        return __extends(e, t), e.prototype.init = function () {
            this.$default = this.$owner.icon, this.$storage = {}
        }, e.prototype.addStatus = function (t, e) {
            null == t ? this.$default = e : this.$storage[t] = e
        }, e.prototype.apply = function () {
            this.$owner.$gearLocked = !0;
            var t = this.$storage[this.$controller.selectedPageId];
            this.$owner.icon = void 0 != t ? t : this.$default, this.$owner.$gearLocked = !1
        }, e.prototype.updateState = function () {
            null == this.$controller || this.$owner.$gearLocked || this.$owner.$inProgressBuilding || (this.$storage[this.$controller.selectedPageId] = this.$owner.icon)
        }, e
    }(t.GearBase);
    t.GearIcon = e
}(fgui || (fgui = {})),
function (t) {
    var e = function (e) {
        function n(t) {
            return e.call(this, t) || this
        }
        return __extends(n, e), n.prototype.init = function () {
            this.$default = new i(this.$owner.alpha, this.$owner.rotation, this.$owner.grayed), this.$storage = {}
        }, n.prototype.addStatus = function (t, e) {
            if ("-" != e) {
                var n, s = e.split(",");
                null == t ? n = this.$default : (n = new i, this.$storage[t] = n), n.alpha = parseFloat(s[0]), n.rotation = parseInt(s[1]), n.grayed = "1" == s[2]
            }
        }, n.prototype.apply = function () {
            var e = this,
                i = this.$storage[this.$controller.selectedPageId];
            if (i || (i = this.$default), !this.$tween || t.UIPackage.$constructingObjects || t.GearBase.disableAllTweenEffect) this.$owner.$gearLocked = !0, this.$owner.grayed = i.grayed, this.$owner.alpha = i.alpha, this.$owner.rotation = i.rotation, this.$owner.$gearLocked = !1;
            else {
                if (this.$owner.$gearLocked = !0, this.$owner.grayed = i.grayed, this.$owner.$gearLocked = !1, this.$tweener) {
                    if (this.$tweenTarget.alpha === i.alpha && this.$tweenTarget.rotation === i.rotation) return;
                    this.$tweener.gotoAndStop(this.$tweener.duration), this.$tweener = null
                }
                var n = i.alpha != this.$owner.alpha,
                    s = i.rotation != this.$owner.rotation;
                if (n || s) {
                    this.$owner.hasGearController(0, this.$controller) && (this.$lockToken = this.$owner.lockGearDisplay()), this.$tweenTarget = i;
                    var r = {
                        onChange: function () {
                            e.$owner.$gearLocked = !0, n && (e.$owner.alpha = e.$tweenValue.x), s && (e.$owner.rotation = e.$tweenValue.y), e.$owner.$gearLocked = !1
                        }
                    };
                    null == this.$tweenValue && (this.$tweenValue = new PIXI.Point), this.$tweenValue.x = this.$owner.alpha, this.$tweenValue.y = this.$owner.rotation, this.$tweener = createjs.Tween.get(this.$tweenValue, r).wait(1e3 * this.$tweenDelay).to({
                        x: i.alpha,
                        y: i.rotation
                    }, 1e3 * this.$tweenTime, this.$easeType).call(this.tweenComplete, null, this)
                }
            }
        }, n.prototype.tweenComplete = function () {
            0 != this.$lockToken && (this.$owner.releaseGearDisplay(this.$lockToken), this.$lockToken = 0), this.$tweener = null, this.$owner.emit("__gearStop", this)
        }, n.prototype.updateState = function () {
            if (null != this.$controller && !this.$owner.$gearLocked && !this.$owner.$inProgressBuilding) {
                var t = this.$storage[this.$controller.selectedPageId];
                t || (t = new i, this.$storage[this.$controller.selectedPageId] = t), t.alpha = this.$owner.alpha, t.rotation = this.$owner.rotation, t.grayed = this.$owner.grayed
            }
        }, n
    }(t.GearBase);
    t.GearLook = e;
    var i = function () {
        return function (t, e, i) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = !1), this.alpha = t, this.rotation = e, this.grayed = i
        }
    }()
}(fgui || (fgui = {})),
function (t) {
    var e = function (e) {
        function n(t) {
            return e.call(this, t) || this
        }
        return __extends(n, e), n.prototype.init = function () {
            this.$default = new i(this.$owner.width, this.$owner.height, this.$owner.scaleX, this.$owner.scaleY), this.$storage = {}
        }, n.prototype.addStatus = function (t, e) {
            if ("-" != e) {
                var n, s = e.split(",");
                null == t ? n = this.$default : (n = new i, this.$storage[t] = n), n.width = parseInt(s[0]), n.height = parseInt(s[1]), s.length > 2 && (n.scaleX = parseFloat(s[2]), n.scaleY = parseFloat(s[3]))
            }
        }, n.prototype.apply = function () {
            var e = this,
                n = this.$storage[this.$controller.selectedPageId];
            if (n || (n = this.$default), !this.$tween || t.UIPackage.$constructingObjects || t.GearBase.disableAllTweenEffect) this.$owner.$gearLocked = !0, this.$owner.setSize(n.width, n.height, this.$owner.gearXY.controller == this.$controller), this.$owner.setScale(n.scaleX, n.scaleY), this.$owner.$gearLocked = !1;
            else {
                if (this.$tweener) {
                    if (this.$tweenTarget.width == n.width && this.$tweenTarget.height == n.height && this.$tweenTarget.scaleX == n.scaleX && this.$tweenTarget.scaleY == n.scaleY) return;
                    this.$tweener.gotoAndStop(this.$tweener.duration), this.$tweener = null
                }
                var s = n.width != this.$owner.width || n.height != this.$owner.height,
                    r = n.scaleX != this.$owner.scaleX || n.scaleY != this.$owner.scaleY;
                if (s || r) {
                    this.$owner.hasGearController(0, this.$controller) && (this.$lockToken = this.$owner.lockGearDisplay()), this.$tweenTarget = n;
                    var o = {
                        onChange: function () {
                            e.$owner.$gearLocked = !0, s && e.$owner.setSize(e.$tweenValue.width, e.$tweenValue.height, e.$owner.gearXY.controller == e.$controller), r && e.$owner.setScale(e.$tweenValue.scaleX, e.$tweenValue.scaleY), e.$owner.$gearLocked = !1
                        }
                    };
                    null == this.$tweenValue && (this.$tweenValue = new i), this.$tweenValue.width = this.$owner.width, this.$tweenValue.height = this.$owner.height, this.$tweenValue.scaleX = this.$owner.scaleX, this.$tweenValue.scaleY = this.$owner.scaleY, this.$tweener = createjs.Tween.get(this.$tweenValue, o).wait(1e3 * this.$tweenDelay).to({
                        width: n.width,
                        height: n.height,
                        scaleX: n.scaleX,
                        scaleY: n.scaleY
                    }, 1e3 * this.$tweenTime, this.$easeType).call(this.tweenComplete, null, this)
                }
            }
        }, n.prototype.tweenComplete = function () {
            0 != this.$lockToken && (this.$owner.releaseGearDisplay(this.$lockToken), this.$lockToken = 0), this.$tweener = null, this.$owner.emit("__gearStop", this)
        }, n.prototype.updateState = function () {
            if (null != this.$controller && !this.$owner.$gearLocked && !this.$owner.$inProgressBuilding) {
                var t = this.$storage[this.$controller.selectedPageId];
                t || (t = new i, this.$storage[this.$controller.selectedPageId] = t), t.width = this.$owner.width, t.height = this.$owner.height, t.scaleX = this.$owner.scaleX, t.scaleY = this.$owner.scaleY
            }
        }, n.prototype.updateFromRelations = function (t, e) {
            if (null != this.$controller && null != this.$storage) {
                for (var i in this.$storage) {
                    var n = this.$storage[i];
                    n.width += t, n.height += e
                }
                this.$default.width += t, this.$default.height += e, this.updateState()
            }
        }, n
    }(t.GearBase);
    t.GearSize = e;
    var i = function () {
        return function (t, e, i, n) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), this.width = t, this.height = e, this.scaleX = i, this.scaleY = n
        }
    }()
}(fgui || (fgui = {})),
function (t) {
    var e = function (t) {
        function e(e) {
            return t.call(this, e) || this
        }
        return __extends(e, t), e.prototype.init = function () {
            this.$default = this.$owner.text, this.$storage = {}
        }, e.prototype.addStatus = function (t, e) {
            null == t ? this.$default = e : this.$storage[t] = e
        }, e.prototype.apply = function () {
            this.$owner.$gearLocked = !0;
            var t = this.$storage[this.$controller.selectedPageId];
            this.$owner.text = void 0 != t ? t : this.$default, this.$owner.$gearLocked = !1
        }, e.prototype.updateState = function () {
            null == this.$controller || this.$owner.$gearLocked || this.$owner.$inProgressBuilding || (this.$storage[this.$controller.selectedPageId] = this.$owner.text)
        }, e
    }(t.GearBase);
    t.GearText = e
}(fgui || (fgui = {})),
function (t) {
    var e = function (e) {
        function i(t) {
            return e.call(this, t) || this
        }
        return __extends(i, e), i.prototype.init = function () {
            this.$default = new PIXI.Point(this.$owner.x, this.$owner.y), this.$storage = {}
        }, i.prototype.addStatus = function (t, e) {
            if ("-" != e) {
                var i, n = e.split(",");
                null == t ? i = this.$default : (i = new PIXI.Point, this.$storage[t] = i), i.x = parseInt(n[0]), i.y = parseInt(n[1])
            }
        }, i.prototype.apply = function () {
            var e = this,
                i = this.$storage[this.$controller.selectedPageId];
            if (i || (i = this.$default), !this.$tween || t.UIPackage.$constructingObjects || t.GearBase.disableAllTweenEffect) this.$owner.$gearLocked = !0, this.$owner.setXY(i.x, i.y), this.$owner.$gearLocked = !1;
            else {
                if (this.$tweener) {
                    if (this.$tweenTarget.x === i.x && this.$tweenTarget.y === i.y) return;
                    this.$tweener.gotoAndStop(this.$tweener.duration), this.$tweener = null
                }
                if (this.$owner.x != i.x || this.$owner.y != i.y) {
                    this.$owner.hasGearController(0, this.$controller), this.$lockToken = this.$owner.lockGearDisplay(), this.$tweenTarget = i;
                    var n = {
                        onChange: function () {
                            e.$owner.$gearLocked = !0, e.$owner.setXY(e.$tweenValue.x, e.$tweenValue.y), e.$owner.$gearLocked = !1
                        }
                    };
                    null == this.$tweenValue && (this.$tweenValue = new PIXI.Point), this.$tweenValue.x = this.$owner.x, this.$tweenValue.y = this.$owner.y, this.$tweener = createjs.Tween.get(this.$tweenValue, n).wait(1e3 * this.$tweenDelay).to({
                        x: i.x,
                        y: i.y
                    }, 1e3 * this.$tweenTime, this.$easeType).call(this.tweenComplete, null, this)
                }
            }
        }, i.prototype.tweenComplete = function () {
            0 != this.$lockToken && (this.$owner.releaseGearDisplay(this.$lockToken), this.$lockToken = 0), this.$tweener = null, this.$owner.emit("__gearStop", this)
        }, i.prototype.updateState = function () {
            if (null != this.$controller && !this.$owner.$gearLocked && !this.$owner.$inProgressBuilding) {
                var t = this.$storage[this.$controller.selectedPageId];
                t || (t = new PIXI.Point, this.$storage[this.$controller.selectedPageId] = t), t.x = this.$owner.x, t.y = this.$owner.y
            }
        }, i.prototype.updateFromRelations = function (t, e) {
            if (null != this.$controller && null != this.$storage) {
                for (var i in this.$storage) {
                    var n = this.$storage[i];
                    n.x += t, n.y += e
                }
                this.$default.x += t, this.$default.y += e, this.updateState()
            }
        }, i
    }(t.GearBase);
    t.GearXY = e
}(fgui || (fgui = {})),
function (t) {
    t.isAnimationGear = function (t) {
        return t && "playing" in t && "frame" in t
    }
}(fgui || (fgui = {})),
function (t) {
    t.isColorGear = function (t) {
        return t && "color" in t
    }
}(fgui || (fgui = {})),
function (t) {
    t.isColorableTitle = function (t) {
        return t && "titleColor" in t && "fontSize" in t
    }
}(fgui || (fgui = {})),
function (t) {
    var e = function () {
        function e(e) {
            if (void 0 === e && (e = null), !e && !(e = t.UIConfig.popupMenu)) throw new Error("UIConfig.popupMenu not defined");
            this.$contentPane = t.UIPackage.createObjectFromURL(e), this.$contentPane.on("added", this.$addedToStage, this), this.$list = this.$contentPane.getChild("list"), this.$list.removeChildrenToPool(), this.$list.addRelation(this.$contentPane, 14), this.$list.removeRelation(this.$contentPane, 15), this.$contentPane.addRelation(this.$list, 15), this.$list.on("__itemClick", this.$clickItem, this)
        }
        return e.prototype.dispose = function () {
            t.GTimer.inst.remove(this.$delayClickItem, this), this.$list.off("__itemClick", this.$clickItem, this), this.$contentPane.off("added", this.$addedToStage, this), this.$contentPane.dispose()
        }, e.prototype.addItem = function (t, e) {
            var i = this.$list.addItemFromPool();
            i.title = t, i.data = e, i.grayed = !1;
            var n = i.getController("checked");
            return null != n && (n.selectedIndex = 0), i
        }, e.prototype.addItemAt = function (t, e, i) {
            var n = this.$list.getFromPool();
            this.$list.addChildAt(n, e), n.title = t, n.data = i, n.grayed = !1;
            var s = n.getController("checked");
            return null != s && (s.selectedIndex = 0), n
        }, e.prototype.addSeperator = function () {
            if (null == t.UIConfig.popupMenuSeperator) throw new Error("UIConfig.popupMenuSeperator not defined");
            this.$list.addItemFromPool(t.UIConfig.popupMenuSeperator)
        }, e.prototype.getItemName = function (t) {
            return this.$list.getChildAt(t).name
        }, e.prototype.setItemText = function (t, e) {
            this.$list.getChild(t).title = e
        }, e.prototype.setItemVisible = function (t, e) {
            var i = this.$list.getChild(t);
            i.visible != e && (i.visible = e, this.$list.setBoundsChangedFlag())
        }, e.prototype.setItemGrayed = function (t, e) {
            this.$list.getChild(t).grayed = e
        }, e.prototype.setItemCheckable = function (t, e) {
            var i = this.$list.getChild(t).getController("checked");
            null != i && (e ? 0 == i.selectedIndex && (i.selectedIndex = 1) : i.selectedIndex = 0)
        }, e.prototype.setItemChecked = function (t, e) {
            var i = this.$list.getChild(t).getController("checked");
            null != i && (i.selectedIndex = e ? 2 : 1)
        }, e.prototype.isItemChecked = function (t) {
            var e = this.$list.getChild(t).getController("checked");
            return null != e && 2 == e.selectedIndex
        }, e.prototype.removeItem = function (t) {
            var e = this.$list.getChild(t);
            if (null != e) {
                var i = this.$list.getChildIndex(e);
                return this.$list.removeChildToPoolAt(i), !0
            }
            return !1
        }, e.prototype.clearItems = function () {
            this.$list.removeChildrenToPool()
        }, Object.defineProperty(e.prototype, "itemCount", {
            get: function () {
                return this.$list.numChildren
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "contentPane", {
            get: function () {
                return this.$contentPane
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "list", {
            get: function () {
                return this.$list
            }, enumerable: !0,
            configurable: !0
        }), e.prototype.show = function (e, i) {
            void 0 === e && (e = null), (null != e ? e.root : t.GRoot.inst).showPopup(this.contentPane, e instanceof t.GRoot ? null : e, i)
        }, e.prototype.$clickItem = function (e, i) {
            t.GTimer.inst.add(100, 1, this.$delayClickItem, this, i)
        }, e.prototype.$delayClickItem = function (e) {
            if (e instanceof t.GButton)
                if (e.grayed) this.$list.selectedIndex = -1;
                else {
                    var i = e.getController("checked");
                    null != i && 0 != i.selectedIndex && (1 == i.selectedIndex ? i.selectedIndex = 2 : i.selectedIndex = 1);
                    var n = this.$contentPane.parent;
                    n && n.hidePopup(this.contentPane), null != e.data && e.data.call(null), t.GTimer.inst.remove(this.$delayClickItem, this)
                }
        }, e.prototype.$addedToStage = function () {
            this.$list.selectedIndex = -1, this.$list.resizeToFit(1e5, 10)
        }, e
    }();
    t.PopupMenu = e
}(fgui || (fgui = {})),
function (t) {
    var e = function () {
        function t(t) {
            this.$owner = t, this.$defs = []
        }
        return Object.defineProperty(t.prototype, "owner", {
            get: function () {
                return this.$owner
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "target", {
            get: function () {
                return this.$target
            }, set: function (t) {
                this.$target != t && (this.$target && this.releaseRefTarget(this.$target), this.$target = t, this.$target && this.addRefTarget(this.$target))
            }, enumerable: !0,
            configurable: !0
        }), t.prototype.add = function (t, e) {
            if (24 == t) return this.add(14, e), void this.add(15, e);
            for (var i = this.$defs.length, n = 0; n < i; n++) {
                if (this.$defs[n].type == t) return
            }
            this.internalAdd(t, e)
        }, t.prototype.internalAdd = function (t, e) {
            if (24 == t) return this.internalAdd(14, e), void this.internalAdd(15, e);
            var n = new i;
            n.percent = e, n.type = t, this.$defs.push(n), (e || 1 == t || 3 == t || 5 == t || 8 == t || 10 == t || 12 == t) && (this.$owner.pixelSnapping = !0)
        }, t.prototype.remove = function (t) {
            if (void 0 === t && (t = 0), 24 == t) return this.remove(14), void this.remove(15);
            for (var e = this.$defs.length - 1; e >= 0; e--)
                if (this.$defs[e].type == t) {
                    this.$defs.splice(e, 1);
                    break
                }
        }, t.prototype.copyFrom = function (t) {
            var e = this;
            this.target = t.target, this.$defs.length = 0, t.$defs.forEach(function (t) {
                var n = new i;
                n.copyFrom(t), e.$defs.push(n)
            }, this)
        }, t.prototype.dispose = function () {
            null != this.$target && (this.releaseRefTarget(this.$target), this.$target = null)
        }, Object.defineProperty(t.prototype, "isEmpty", {
            get: function () {
                return 0 == this.$defs.length
            }, enumerable: !0,
            configurable: !0
        }), t.prototype.applyOnSelfResized = function (t, e) {
            var i = this,
                n = this.$owner.x,
                s = this.$owner.y;
            this.$defs.forEach(function (n) {
                switch (n.type) {
                case 3:
                case 5:
                    i.$owner.x -= t / 2;
                    break;
                case 4:
                case 6:
                    i.$owner.x -= t;
                    break;
                case 10:
                case 12:
                    i.$owner.y -= e / 2;
                    break;
                case 11:
                case 13:
                    i.$owner.y -= e
                }
            }, this), n == this.$owner.x && s == this.$owner.y || (n = this.$owner.x - n, s = this.$owner.y - s, this.$owner.updateGearFromRelations(1, n, s), null != this.$owner.parent && this.$owner.parent.$transitions.length > 0 && this.$owner.parent.$transitions.forEach(function (t) {
                t.updateFromRelations(i.$owner.id, n, s)
            }, this))
        }, t.prototype.applyOnXYChanged = function (t, e, i) {
            var n;
            switch (t.type) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                this.$owner.x += e;
                break;
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
                this.$owner.y += i;
                break;
            case 14:
            case 15:
                break;
            case 16:
            case 17:
                n = this.$owner.x, this.$owner.x += e, this.$owner.width = this.$owner.$rawWidth - (this.$owner.x - n);
                break;
            case 18:
            case 19:
                this.$owner.width = this.$owner.$rawWidth + e;
                break;
            case 20:
            case 21:
                n = this.$owner.y, this.$owner.y += i, this.$owner.height = this.$owner.$rawHeight - (this.$owner.y - n);
                break;
            case 22:
            case 23:
                this.$owner.height = this.$owner.$rawHeight + i
            }
        }, t.prototype.applyOnSizeChanged = function (t) {
            var e, i, n, s;
            switch (this.$target != this.$owner.parent ? (e = this.$target.x, i = this.$target.y) : (e = 0, i = 0), t.type) {
            case 0:
                break;
            case 1:
                n = this.$owner.x - (e + this.$targetWidth / 2), t.percent && (n = n / this.$targetWidth * this.$target.$rawWidth), this.$owner.x = e + this.$target.$rawWidth / 2 + n;
                break;
            case 2:
                n = this.$owner.x - (e + this.$targetWidth), t.percent && (n = n / this.$targetWidth * this.$target.$rawWidth), this.$owner.x = e + this.$target.$rawWidth + n;
                break;
            case 3:
                n = this.$owner.x + this.$owner.$rawWidth / 2 - (e + this.$targetWidth / 2), t.percent && (n = n / this.$targetWidth * this.$target.$rawWidth), this.$owner.x = e + this.$target.$rawWidth / 2 + n - this.$owner.$rawWidth / 2;
                break;
            case 4:
                n = this.$owner.x + this.$owner.$rawWidth - e, t.percent && (n = n / this.$targetWidth * this.$target.$rawWidth), this.$owner.x = e + n - this.$owner.$rawWidth;
                break;
            case 5:
                n = this.$owner.x + this.$owner.$rawWidth - (e + this.$targetWidth / 2), t.percent && (n = n / this.$targetWidth * this.$target.$rawWidth), this.$owner.x = e + this.$target.$rawWidth / 2 + n - this.$owner.$rawWidth;
                break;
            case 6:
                n = this.$owner.x + this.$owner.$rawWidth - (e + this.$targetWidth), t.percent && (n = n / this.$targetWidth * this.$target.$rawWidth), this.$owner.x = e + this.$target.$rawWidth + n - this.$owner.$rawWidth;
                break;
            case 7:
                break;
            case 8:
                n = this.$owner.y - (i + this.$targetHeight / 2), t.percent && (n = n / this.$targetHeight * this.$target.$rawHeight), this.$owner.y = i + this.$target.$rawHeight / 2 + n;
                break;
            case 9:
                n = this.$owner.y - (i + this.$targetHeight), t.percent && (n = n / this.$targetHeight * this.$target.$rawHeight), this.$owner.y = i + this.$target.$rawHeight + n;
                break;
            case 10:
                n = this.$owner.y + this.$owner.$rawHeight / 2 - (i + this.$targetHeight / 2), t.percent && (n = n / this.$targetHeight * this.$target.$rawHeight), this.$owner.y = i + this.$target.$rawHeight / 2 + n - this.$owner.$rawHeight / 2;
                break;
            case 11:
                n = this.$owner.y + this.$owner.$rawHeight - i, t.percent && (n = n / this.$targetHeight * this.$target.$rawHeight), this.$owner.y = i + n - this.$owner.$rawHeight;
                break;
            case 12:
                n = this.$owner.y + this.$owner.$rawHeight - (i + this.$targetHeight / 2), t.percent && (n = n / this.$targetHeight * this.$target.$rawHeight), this.$owner.y = i + this.$target.$rawHeight / 2 + n - this.$owner.$rawHeight;
                break;
            case 13:
                n = this.$owner.y + this.$owner.$rawHeight - (i + this.$targetHeight), t.percent && (n = n / this.$targetHeight * this.$target.$rawHeight), this.$owner.y = i + this.$target.$rawHeight + n - this.$owner.$rawHeight;
                break;
            case 14:
                n = this.$owner.$inProgressBuilding && this.$owner == this.$target.parent ? this.$owner.sourceWidth - this.$target.$initWidth : this.$owner.$rawWidth - this.$targetWidth, t.percent && (n = n / this.$targetWidth * this.$target.$rawWidth), this.$target == this.$owner.parent ? this.$owner.setSize(this.$target.$rawWidth + n, this.$owner.$rawHeight, !0) : this.$owner.width = this.$target.$rawWidth + n;
                break;
            case 15:
                n = this.$owner.$inProgressBuilding && this.$owner == this.$target.parent ? this.$owner.sourceHeight - this.$target.$initHeight : this.$owner.$rawHeight - this.$targetHeight, t.percent && (n = n / this.$targetHeight * this.$target.$rawHeight), this.$target == this.$owner.parent ? this.$owner.setSize(this.$owner.$rawWidth, this.$target.$rawHeight + n, !0) : this.$owner.height = this.$target.$rawHeight + n;
                break;
            case 16:
                break;
            case 17:
                n = this.$owner.x - (e + this.$targetWidth), t.percent && (n = n / this.$targetWidth * this.$target.$rawWidth), s = this.$owner.x, this.$owner.x = e + this.$target.$rawWidth + n, this.$owner.width = this.$owner.$rawWidth - (this.$owner.x - s);
                break;
            case 18:
                break;
            case 19:
                n = this.$owner.$inProgressBuilding && this.$owner == this.$target.parent ? this.$owner.sourceWidth - (e + this.$target.$initWidth) : this.$owner.width - (e + this.$targetWidth), this.$owner != this.$target.parent && (n += this.$owner.x), t.percent && (n = n / this.$targetWidth * this.$target.$rawWidth), this.$owner != this.$target.parent ? this.$owner.width = e + this.$target.$rawWidth + n - this.$owner.x : this.$owner.width = e + this.$target.$rawWidth + n;
                break;
            case 20:
                break;
            case 21:
                n = this.$owner.y - (i + this.$targetHeight), t.percent && (n = n / this.$targetHeight * this.$target.$rawHeight), s = this.$owner.y, this.$owner.y = i + this.$target.$rawHeight + n, this.$owner.height = this.$owner.$rawHeight - (this.$owner.y - s);
                break;
            case 22:
                break;
            case 23:
                n = this.$owner.$inProgressBuilding && this.$owner == this.$target.parent ? this.$owner.sourceHeight - (i + this.$target.$initHeight) : this.$owner.$rawHeight - (i + this.$targetHeight), this.$owner != this.$target.parent && (n += this.$owner.y), t.percent && (n = n / this.$targetHeight * this.$target.$rawHeight), this.$owner != this.$target.parent ? this.$owner.height = i + this.$target.$rawHeight + n - this.$owner.y : this.$owner.height = i + this.$target.$rawHeight + n
            }
        }, t.prototype.addRefTarget = function (t) {
            t != this.$owner.parent && t.on("__xyChanged", this.$targetXYChanged, this), t.on("__sizeChanged", this.$targetSizeChanged, this), t.on("__sizeDelayChange", this.$targetSizeWillChange, this), this.$targetX = this.$target.x, this.$targetY = this.$target.y, this.$targetWidth = this.$target.$rawWidth, this.$targetHeight = this.$target.$rawHeight
        }, t.prototype.releaseRefTarget = function (t) {
            t.off("__xyChanged", this.$targetXYChanged, this), t.off("__sizeChanged", this.$targetSizeChanged, this), t.off("__sizeDelayChange", this.$targetSizeWillChange, this)
        }, t.prototype.$targetXYChanged = function (t) {
            var e = this;
            if (null != this.$owner.relations.$dealing || null != this.$owner.group && this.$owner.group.$updating) return this.$targetX = this.$target.x, void(this.$targetY = this.$target.y);
            this.$owner.relations.$dealing = this.$target;
            var i = this.$owner.x,
                n = this.$owner.y,
                s = this.$target.x - this.$targetX,
                r = this.$target.y - this.$targetY;
            this.$defs.forEach(function (t) {
                e.applyOnXYChanged(t, s, r)
            }, this), this.$targetX = this.$target.x, this.$targetY = this.$target.y, i == this.$owner.x && n == this.$owner.y || (i = this.$owner.x - i, n = this.$owner.y - n, this.$owner.updateGearFromRelations(1, i, n), null != this.$owner.parent && this.$owner.parent.$transitions.length > 0 && this.$owner.parent.$transitions.forEach(function (t) {
                t.updateFromRelations(e.$owner.id, i, n)
            }, this)), this.$owner.relations.$dealing = null
        }, t.prototype.$targetSizeChanged = function (t) {
            var e = this;
            if (null == this.$owner.relations.$dealing) {
                this.$owner.relations.$dealing = this.$target;
                var i = this.$owner.x,
                    n = this.$owner.y,
                    s = this.$owner.$rawWidth,
                    r = this.$owner.$rawHeight;
                this.$defs.forEach(function (t) {
                    e.applyOnSizeChanged(t)
                }, this), this.$targetWidth = this.$target.$rawWidth, this.$targetHeight = this.$target.$rawHeight, i == this.$owner.x && n == this.$owner.y || (i = this.$owner.x - i, n = this.$owner.y - n, this.$owner.updateGearFromRelations(1, i, n), null != this.$owner.parent && this.$owner.parent.$transitions.length > 0 && this.$owner.parent.$transitions.forEach(function (t) {
                    t.updateFromRelations(e.$owner.id, i, n)
                }, this)), s == this.$owner.$rawWidth && r == this.$owner.$rawHeight || (s = this.$owner.$rawWidth - s, r = this.$owner.$rawHeight - r, this.$owner.updateGearFromRelations(2, s, r)), this.$owner.relations.$dealing = null
            }
        }, t.prototype.$targetSizeWillChange = function (t) {
            this.$owner.relations.sizeDirty = !0
        }, t
    }();
    t.RelationItem = e;
    var i = function () {
        function t() {}
        return t.prototype.copyFrom = function (t) {
            this.percent = t.percent, this.type = t.type
        }, t
    }();
    t.RelationDef = i
}(fgui || (fgui = {})),
function (t) {
    var e = function () {
        function e(t) {
            this.sizeDirty = !1, this.$owner = t, this.$items = []
        }
        return e.prototype.add = function (e, i, n) {
            void 0 === n && (n = !1);
            for (var s = this.$items.length, r = 0; r < s; r++) {
                var o = this.$items[r];
                if (o.target == e) return void o.add(i, n)
            }
            var h = new t.RelationItem(this.$owner);
            h.target = e, h.add(i, n), this.$items.push(h)
        }, e.prototype.addItems = function (t, i) {
            for (var n, s, r = i.split(","), o = 0; o < 2; o++)
                if (n = r[o]) {
                    "%" == n.charAt(n.length - 1) ? (n = n.substr(0, n.length - 1), s = !0) : s = !1, -1 == n.indexOf("-") && (n = n + "-" + n);
                    var h = e.RELATION_NAMES.indexOf(n);
                    if (-1 == h) throw new Error("Invalid relation type");
                    this.add(t, h, s)
                }
        }, e.prototype.remove = function (t, e) {
            void 0 === e && (e = 0);
            for (var i = this.$items.length, n = 0; n < i;) {
                var s = this.$items[n];
                s.target == t ? (s.remove(e), s.isEmpty ? (s.dispose(), this.$items.splice(n, 1), i--) : n++) : n++
            }
        }, e.prototype.contains = function (t) {
            for (var e = this.$items.length, i = 0; i < e; i++)
                if (this.$items[i].target == t) return !0;
            return !1
        }, e.prototype.clearFor = function (t) {
            for (var e = this.$items.length, i = 0; i < e;) {
                var n = this.$items[i];
                n.target == t ? (n.dispose(), this.$items.splice(i, 1), e--) : i++
            }
        }, e.prototype.clearAll = function () {
            this.$items.forEach(function (t) {
                t.dispose()
            }, this), this.$items.length = 0
        }, e.prototype.copyFrom = function (e) {
            var i = this;
            this.clearAll(), e.$items.forEach(function (e) {
                var n = new t.RelationItem(i.$owner);
                n.copyFrom(e), i.$items.push(n)
            }, this)
        }, e.prototype.dispose = function () {
            this.clearAll()
        }, e.prototype.onOwnerSizeChanged = function (t, e) {
            this.$items.length <= 0 || this.$items.forEach(function (i) {
                i.applyOnSelfResized(t, e)
            }, this)
        }, e.prototype.ensureRelationsSizeCorrect = function () {
            0 != this.$items.length && (this.sizeDirty = !1, this.$items.forEach(function (t) {
                t.target.ensureSizeCorrect()
            }, this))
        }, Object.defineProperty(e.prototype, "empty", {
            get: function () {
                return 0 == this.$items.length
            }, enumerable: !0,
            configurable: !0
        }), e.prototype.setup = function (t) {
            var e = this;
            t.children.forEach(function (t) {
                var i, n;
                "relation" == t.nodeName && (i = t.attributes.target, (n = e.$owner.parent ? i ? e.$owner.parent.getChildById(i) : e.$owner.parent : e.$owner.getChildById(i)) && e.addItems(n, t.attributes.sidePair))
            }, this)
        }, e.RELATION_NAMES = ["left-left", "left-center", "left-right", "center-center", "right-left", "right-center", "right-right", "top-top", "top-middle", "top-bottom", "middle-middle", "bottom-top", "bottom-middle", "bottom-bottom", "width-width", "height-height", "leftext-left", "leftext-right", "rightext-left", "rightext-right", "topext-top", "topext-bottom", "bottomext-top", "bottomext-bottom"], e
    }();
    t.Relations = e
}(fgui || (fgui = {})),
function (t) {
    var e = function (e) {
        function i(i, n, s, r, o, h, a, l, u) {
            var c, p = e.call(this) || this;
            if (p.$isDragging = !1, p.$owner = i, p.$maskContainer = new t.UIContainer(null), p.$owner.$rootContainer.addChild(p.$maskContainer), p.$container = p.$owner.$container, p.$container.x = 0, p.$container.y = 0, p.$maskContainer.addChild(p.$container), p.$scrollBarMargin = s, p.$scrollType = n, p.$scrollSpeed = t.UIConfig.defaultScrollSpeed, p.$mouseWheelSpeed = 2 * p.$scrollSpeed, p.$decelerationRate = t.UIConfig.defaultScrollDecelerationRate, p.$displayOnLeft = 0 != (1 & o), p.$snapToItem = 0 != (2 & o), p.$displayOnDemand = 0 != (4 & o), p.$pageMode = 0 != (8 & o), p.$touchEffect = !!(16 & o) || !(32 & o) && t.UIConfig.defaultScrollTouchEffect, p.$bouncebackEffect = !!(64 & o) || !(128 & o) && t.UIConfig.defaultScrollBounceEffect, p.$inertiaDisabled = 0 != (256 & o), 0 == (512 & o) && (p.$maskContainer.scrollRect = new PIXI.Rectangle), p.$scrollBarVisible = !0, p.$mouseWheelEnabled = !0, p.$xPos = 0, p.$yPos = 0, p.$aniFlag = 0, p.$footerLockedSize = 0, p.$headerLockedSize = 0, 0 == r && (r = t.UIConfig.defaultScrollBarDisplay), p.$viewSize = new PIXI.Point, p.$contentSize = new PIXI.Point, p.$pageSize = new PIXI.Point(1, 1), p.$overlapSize = new PIXI.Point, p.$tweening = 0, p.$tweenTime = new PIXI.Point, p.$tweenStart = new PIXI.Point, p.$tweenDuration = new PIXI.Point, p.$tweenChange = new PIXI.Point, p.$velocity = new PIXI.Point, p.$containerPos = new PIXI.Point, p.$beginTouchPos = new PIXI.Point, p.$lastTouchPos = new PIXI.Point, p.$lastTouchGlobalPos = new PIXI.Point, 3 != r) {
                if (2 == p.$scrollType || 1 == p.$scrollType) {
                    var $ = h || t.UIConfig.verticalScrollBar;
                    if ($) {
                        if (p.$vtScrollBar = t.UIPackage.createObjectFromURL($), !p.$vtScrollBar) throw new Error("Cannot create scrollbar from " + $);
                        p.$vtScrollBar.setScrollPane(p, !0), p.$owner.$rootContainer.addChild(p.$vtScrollBar.displayObject)
                    }
                }
                if ((2 == p.$scrollType || 0 == p.$scrollType) && (c = a || t.UIConfig.horizontalScrollBar)) {
                    if (p.$hzScrollBar = t.UIPackage.createObjectFromURL(c), !p.$hzScrollBar) throw new Error("Cannot create scrollbar from " + c);
                    p.$hzScrollBar.setScrollPane(p, !1), p.$owner.$rootContainer.addChild(p.$hzScrollBar.displayObject)
                }
                p.$scrollBarDisplayAuto = 2 == r, p.$scrollBarDisplayAuto && (p.$scrollBarVisible = !1, p.$vtScrollBar && (p.$vtScrollBar.displayObject.visible = !1), p.$hzScrollBar && (p.$hzScrollBar.displayObject.visible = !1))
            } else p.$mouseWheelEnabled = !1; if (l && (p.$header = t.UIPackage.createObjectFromURL(l), null == p.$header)) throw new Error("Cannot create scrollPane.header from " + c);
            if (u && (p.$footer = t.UIPackage.createObjectFromURL(u), null == p.$footer)) throw new Error("Cannot create scrollPane.footer from " + c);
            return null == p.$header && null == p.$footer || (p.$refreshBarAxis = 2 == p.$scrollType || 1 == p.$scrollType ? "y" : "x"), p.setSize(i.width, i.height), p.$owner.on(t.InteractiveEvents.Over, p.$rollOver, p), p.$owner.on(t.InteractiveEvents.Out, p.$rollOut, p), p.$owner.on(t.InteractiveEvents.Down, p.$mouseDown, p), p.$owner.on("__mouseWheel", p.$mouseWheel, p), p
        }
        return __extends(i, e), i.prototype.dispose = function () {
            0 != this.$tweening && t.GTimer.inst.remove(this.tweenUpdate, this), this.$pageController = null, null != this.$hzScrollBar && this.$hzScrollBar.dispose(), null != this.$vtScrollBar && this.$vtScrollBar.dispose(), null != this.$header && this.$header.dispose(), null != this.$footer && this.$footer.dispose(), t.GRoot.inst.nativeStage.off(t.InteractiveEvents.Move, this.$mouseMove, this), t.GRoot.inst.nativeStage.off(t.InteractiveEvents.Up, this.$mouseUp, this), t.GRoot.inst.nativeStage.off(t.InteractiveEvents.Click, this.$click, this), this.$owner.off(t.InteractiveEvents.Over, this.$rollOver, this), this.$owner.off(t.InteractiveEvents.Out, this.$rollOut, this), this.$owner.off(t.InteractiveEvents.Down, this.$mouseDown, this), this.$owner.off("__mouseWheel", this.$mouseWheel, this)
        }, Object.defineProperty(i.prototype, "owner", {
            get: function () {
                return this.$owner
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "horzScrollBar", {
            get: function () {
                return this.$hzScrollBar
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "vertScrollBar", {
            get: function () {
                return this.$vtScrollBar
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "header", {
            get: function () {
                return this.$header
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "footer", {
            get: function () {
                return this.$footer
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "bouncebackEffect", {
            get: function () {
                return this.$bouncebackEffect
            }, set: function (t) {
                this.$bouncebackEffect = t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "touchEffect", {
            get: function () {
                return this.$touchEffect
            }, set: function (t) {
                this.$touchEffect = t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "scrollSpeed", {
            get: function () {
                return this.$scrollSpeed
            }, set: function (e) {
                this.$scrollSpeed = e, 0 == this.$scrollSpeed && (this.$scrollSpeed = t.UIConfig.defaultScrollSpeed), this.$mouseWheelSpeed = 2 * this.$scrollSpeed
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "snapToItem", {
            get: function () {
                return this.$snapToItem
            }, set: function (t) {
                this.$snapToItem = t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "mouseWheelEnabled", {
            get: function () {
                return this.$mouseWheelEnabled
            }, set: function (t) {
                this.$mouseWheelEnabled = t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "decelerationRate", {
            get: function () {
                return this.$decelerationRate
            }, set: function (t) {
                this.$decelerationRate = t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "percX", {
            get: function () {
                return 0 == this.$overlapSize.x ? 0 : this.$xPos / this.$overlapSize.x
            }, set: function (t) {
                this.setPercX(t, !1)
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.setPercX = function (e, i) {
            void 0 === i && (i = !1), this.$owner.ensureBoundsCorrect(), this.setPosX(this.$overlapSize.x * t.utils.NumberUtil.clamp01(e), i)
        }, Object.defineProperty(i.prototype, "percY", {
            get: function () {
                return 0 == this.$overlapSize.y ? 0 : this.$yPos / this.$overlapSize.y
            }, set: function (t) {
                this.setPercY(t, !1)
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.setPercY = function (e, i) {
            void 0 === i && (i = !1), this.$owner.ensureBoundsCorrect(), this.setPosY(this.$overlapSize.y * t.utils.NumberUtil.clamp01(e), i)
        }, Object.defineProperty(i.prototype, "posX", {
            get: function () {
                return this.$xPos
            }, set: function (t) {
                this.setPosX(t, !1)
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.setPosX = function (e, i) {
            void 0 === i && (i = !1), this.$owner.ensureBoundsCorrect(), 1 == this.$loop && (e = this.loopCheckingNewPos(e, "x")), (e = t.utils.NumberUtil.clamp(e, 0, this.$overlapSize.x)) != this.$xPos && (this.$xPos = e, this.posChanged(i))
        }, Object.defineProperty(i.prototype, "posY", {
            get: function () {
                return this.$yPos
            }, set: function (t) {
                this.setPosY(t, !1)
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.setPosY = function (e, i) {
            void 0 === i && (i = !1), this.$owner.ensureBoundsCorrect(), 1 == this.$loop && (e = this.loopCheckingNewPos(e, "y")), (e = t.utils.NumberUtil.clamp(e, 0, this.$overlapSize.y)) != this.$yPos && (this.$yPos = e, this.posChanged(i))
        }, Object.defineProperty(i.prototype, "contentWidth", {
            get: function () {
                return this.$contentSize.x
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "contentHeight", {
            get: function () {
                return this.$contentSize.y
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "viewWidth", {
            get: function () {
                return this.$viewSize.x
            }, set: function (t) {
                t = t + this.$owner.margin.left + this.$owner.margin.right, null != this.$vtScrollBar && (t += this.$vtScrollBar.width), this.$owner.width = t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "viewHeight", {
            get: function () {
                return this.$viewSize.y
            }, set: function (t) {
                t = t + this.$owner.margin.top + this.$owner.margin.bottom, null != this.$hzScrollBar && (t += this.$hzScrollBar.height), this.$owner.height = t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "currentPageX", {
            get: function () {
                if (!this.$pageMode) return 0;
                var t = Math.floor(this.$xPos / this.$pageSize.x);
                return this.$xPos - t * this.$pageSize.x > .5 * this.$pageSize.x && t++, t
            }, set: function (t) {
                this.$pageMode && this.$overlapSize.x > 0 && this.setPosX(t * this.$pageSize.x, !1)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "currentPageY", {
            get: function () {
                if (!this.$pageMode) return 0;
                var t = Math.floor(this.$yPos / this.$pageSize.y);
                return this.$yPos - t * this.$pageSize.y > .5 * this.$pageSize.y && t++, t
            }, set: function (t) {
                this.$pageMode && this.$overlapSize.y > 0 && this.setPosY(t * this.$pageSize.y, !1)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "isBottomMost", {
            get: function () {
                return this.$yPos == this.$overlapSize.y || 0 == this.$overlapSize.y
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "isRightMost", {
            get: function () {
                return this.$xPos == this.$overlapSize.x || 0 == this.$overlapSize.x
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "pageController", {
            get: function () {
                return this.$pageController
            }, set: function (t) {
                this.$pageController = t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "scrollingPosX", {
            get: function () {
                return t.utils.NumberUtil.clamp(-this.$container.x, 0, this.$overlapSize.x)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "scrollingPosY", {
            get: function () {
                return t.utils.NumberUtil.clamp(-this.$container.y, 0, this.$overlapSize.y)
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.scrollTop = function (t) {
            void 0 === t && (t = !1), this.setPercY(0, t)
        }, i.prototype.scrollBottom = function (t) {
            void 0 === t && (t = !1), this.setPercY(1, t)
        }, i.prototype.scrollUp = function (t, e) {
            void 0 === t && (t = 1), void 0 === e && (e = !1), this.$pageMode ? this.setPosY(this.$yPos - this.$pageSize.y * t, e) : this.setPosY(this.$yPos - this.$scrollSpeed * t, e)
        }, i.prototype.scrollDown = function (t, e) {
            void 0 === t && (t = 1), void 0 === e && (e = !1), this.$pageMode ? this.setPosY(this.$yPos + this.$pageSize.y * t, e) : this.setPosY(this.$yPos + this.$scrollSpeed * t, e)
        }, i.prototype.scrollLeft = function (t, e) {
            void 0 === t && (t = 1), void 0 === e && (e = !1), this.$pageMode ? this.setPosX(this.$xPos - this.$pageSize.x * t, e) : this.setPosX(this.$xPos - this.$scrollSpeed * t, e)
        }, i.prototype.scrollRight = function (t, e) {
            void 0 === t && (t = 1), void 0 === e && (e = !1), this.$pageMode ? this.setPosX(this.$xPos + this.$pageSize.x * t, e) : this.setPosX(this.$xPos + this.$scrollSpeed * t, e)
        }, i.prototype.scrollToView = function (e, n, s) {
            var r;
            if (void 0 === n && (n = !1), void 0 === s && (s = !1), this.$owner.ensureBoundsCorrect(), this.$needRefresh && this.refresh(), e instanceof t.GObject ? e.parent != this.$owner ? (e.parent.localToGlobalRect(e.x, e.y, e.width, e.height, i.sHelperRect), r = this.$owner.globalToLocalRect(i.sHelperRect.x, i.sHelperRect.y, i.sHelperRect.width, i.sHelperRect.height, i.sHelperRect)) : ((r = i.sHelperRect).x = e.x, r.y = e.y, r.width = e.width, r.height = e.height) : r = e, this.$overlapSize.y > 0) {
                var o = this.$yPos + this.$viewSize.y;
                s || r.y <= this.$yPos || r.height >= this.$viewSize.y ? this.$pageMode ? this.setPosY(Math.floor(r.y / this.$pageSize.y) * this.$pageSize.y, n) : this.setPosY(r.y, n) : r.y + r.height > o && (this.$pageMode ? this.setPosY(Math.floor(r.y / this.$pageSize.y) * this.$pageSize.y, n) : r.height <= this.$viewSize.y / 2 ? this.setPosY(r.y + 2 * r.height - this.$viewSize.y, n) : this.setPosY(r.y + r.height - this.$viewSize.y, n))
            }
            if (this.$overlapSize.x > 0) {
                var h = this.$xPos + this.$viewSize.x;
                s || r.x <= this.$xPos || r.width >= this.$viewSize.x ? this.$pageMode ? this.setPosX(Math.floor(r.x / this.$pageSize.x) * this.$pageSize.x, n) : this.setPosX(r.x, n) : r.x + r.width > h && (this.$pageMode ? this.setPosX(Math.floor(r.x / this.$pageSize.x) * this.$pageSize.x, n) : r.width <= this.$viewSize.x / 2 ? this.setPosX(r.x + 2 * r.width - this.$viewSize.x, n) : this.setPosX(r.x + r.width - this.$viewSize.x, n))
            }!n && this.$needRefresh && this.refresh()
        }, i.prototype.isChildInView = function (t) {
            if (this.$overlapSize.y > 0) {
                var e = t.y + this.$container.y;
                if (e < -t.height || e > this.$viewSize.y) return !1
            }
            return !(this.$overlapSize.x > 0 && ((e = t.x + this.$container.x) < -t.width || e > this.$viewSize.x))
        }, i.prototype.cancelDragging = function () {
            t.GRoot.inst.nativeStage.off(t.InteractiveEvents.Move, this.$mouseMove, this), t.GRoot.inst.nativeStage.off(t.InteractiveEvents.Up, this.$mouseUp, this), t.GRoot.inst.nativeStage.off(t.InteractiveEvents.Click, this.$click, this), i.draggingPane == this && (i.draggingPane = null), i.$gestureFlag = 0, this.$isDragging = !1, this.$maskContainer.interactive = !0
        }, Object.defineProperty(i.prototype, "isDragging", {
            get: function () {
                return this.$isDragging
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.lockHeader = function (e) {
            this.$headerLockedSize != e && (this.$headerLockedSize = e, !this.$refreshEventDispatching && this.$container[this.$refreshBarAxis] >= 0 && (this.$tweenStart.set(this.$container.x, this.$container.y), this.$tweenChange.set(0, 0), this.$tweenChange[this.$refreshBarAxis] = this.$headerLockedSize - this.$tweenStart[this.$refreshBarAxis], this.$tweenDuration.set(i.TWEEN_DEFAULT_DURATION, i.TWEEN_DEFAULT_DURATION), this.$tweenTime.set(0, 0), this.$tweening = 2, t.GTimer.inst.addLoop(1, this.tweenUpdate, this)))
        }, i.prototype.lockFooter = function (e) {
            if (this.$footerLockedSize != e && (this.$footerLockedSize = e, !this.$refreshEventDispatching && this.$container[this.$refreshBarAxis] <= -this.$overlapSize[this.$refreshBarAxis])) {
                this.$tweenStart.set(this.$container.x, this.$container.y), this.$tweenChange.set(0, 0);
                var n = this.$overlapSize[this.$refreshBarAxis];
                0 == n ? n = Math.max(this.$contentSize[this.$refreshBarAxis] + this.$footerLockedSize - this.$viewSize[this.$refreshBarAxis], 0) : n += this.$footerLockedSize, this.$tweenChange[this.$refreshBarAxis] = -n - this.$tweenStart[this.$refreshBarAxis], this.$tweenDuration.set(i.TWEEN_DEFAULT_DURATION, i.TWEEN_DEFAULT_DURATION), this.$tweenTime.set(0, 0), this.$tweening = 2, t.GTimer.inst.addLoop(1, this.tweenUpdate, this)
            }
        }, i.prototype.onOwnerSizeChanged = function () {
            this.setSize(this.$owner.width, this.$owner.height), this.posChanged(!1)
        }, i.prototype.handleControllerChanged = function (t) {
            this.$pageController == t && (0 == this.$scrollType ? this.currentPageX = t.selectedIndex : this.currentPageY = t.selectedIndex)
        }, i.prototype.updatePageController = function () {
            if (null != this.$pageController && !this.$pageController.$updating) {
                var t = void 0;
                if ((t = 0 == this.$scrollType ? this.currentPageX : this.currentPageY) < this.$pageController.pageCount) {
                    var e = this.$pageController;
                    this.$pageController = null, e.selectedIndex = t, this.$pageController = e
                }
            }
        }, i.prototype.adjustMaskContainer = function () {
            var t, e;
            t = this.$displayOnLeft && null != this.$vtScrollBar ? Math.floor(this.$owner.margin.left + this.$vtScrollBar.width) : Math.floor(this.$owner.margin.left), e = Math.floor(this.$owner.margin.top), this.$maskContainer.position.set(t, e), 0 != this.$owner.$alignOffset.x || 0 != this.$owner.$alignOffset.y ? (null == this.$alignContainer && (this.$alignContainer = new PIXI.Container, this.$maskContainer.addChild(this.$alignContainer), this.$alignContainer.addChild(this.$container)), this.$alignContainer.position.set(this.$owner.$alignOffset.x, this.$owner.$alignOffset.y)) : this.$alignContainer && this.$alignContainer.position.set(0, 0)
        }, i.prototype.setSize = function (t, e) {
            this.adjustMaskContainer(), this.$hzScrollBar && (this.$hzScrollBar.y = e - this.$hzScrollBar.height, this.$vtScrollBar && !this.$vScrollNone ? (this.$hzScrollBar.width = t - this.$vtScrollBar.width - this.$scrollBarMargin.left - this.$scrollBarMargin.right, this.$displayOnLeft ? this.$hzScrollBar.x = this.$scrollBarMargin.left + this.$vtScrollBar.width : this.$hzScrollBar.x = this.$scrollBarMargin.left) : (this.$hzScrollBar.width = t - this.$scrollBarMargin.left - this.$scrollBarMargin.right, this.$hzScrollBar.x = this.$scrollBarMargin.left)), this.$vtScrollBar && (this.$displayOnLeft || (this.$vtScrollBar.x = t - this.$vtScrollBar.width), this.$hzScrollBar ? this.$vtScrollBar.height = e - this.$hzScrollBar.height - this.$scrollBarMargin.top - this.$scrollBarMargin.bottom : this.$vtScrollBar.height = e - this.$scrollBarMargin.top - this.$scrollBarMargin.bottom, this.$vtScrollBar.y = this.$scrollBarMargin.top), this.$viewSize.x = t, this.$viewSize.y = e, this.$hzScrollBar && !this.$hScrollNone && (this.$viewSize.y -= this.$hzScrollBar.height), this.$vtScrollBar && !this.$vScrollNone && (this.$viewSize.x -= this.$vtScrollBar.width), this.$viewSize.x -= this.$owner.margin.left + this.$owner.margin.right, this.$viewSize.y -= this.$owner.margin.top + this.$owner.margin.bottom, this.$viewSize.x = Math.max(1, this.$viewSize.x), this.$viewSize.y = Math.max(1, this.$viewSize.y), this.$pageSize.x = this.$viewSize.x, this.$pageSize.y = this.$viewSize.y, this.handleSizeChanged()
        }, i.prototype.setContentSize = function (t, e) {
            this.$contentSize.x == t && this.$contentSize.y == e || (this.$contentSize.x = t, this.$contentSize.y = e, this.handleSizeChanged())
        }, i.prototype.changeContentSizeOnScrolling = function (t, e, i, n) {
            var s = this.$xPos == this.$overlapSize.x,
                r = this.$yPos == this.$overlapSize.y;
            this.$contentSize.x += t, this.$contentSize.y += e, this.handleSizeChanged(), 1 == this.$tweening ? (0 != t && s && this.$tweenChange.x < 0 && (this.$xPos = this.$overlapSize.x, this.$tweenChange.x = -this.$xPos - this.$tweenStart.x), 0 != e && r && this.$tweenChange.y < 0 && (this.$yPos = this.$overlapSize.y, this.$tweenChange.y = -this.$yPos - this.$tweenStart.y)) : 2 == this.$tweening ? (0 != i && (this.$container.x -= i, this.$tweenStart.x -= i, this.$xPos = -this.$container.x), 0 != n && (this.$container.y -= n, this.$tweenStart.y -= n, this.$yPos = -this.$container.y)) : this.$isDragging ? (0 != i && (this.$container.x -= i, this.$containerPos.x -= i, this.$xPos = -this.$container.x), 0 != n && (this.$container.y -= n, this.$containerPos.y -= n, this.$yPos = -this.$container.y)) : (0 != t && s && (this.$xPos = this.$overlapSize.x, this.$container.x = -this.$xPos), 0 != e && r && (this.$yPos = this.$overlapSize.y, this.$container.y = -this.$yPos)), this.$pageMode && this.updatePageController()
        }, i.prototype.handleSizeChanged = function (e) {
            void 0 === e && (e = !1), this.$displayOnDemand && (this.$vtScrollBar && (this.$contentSize.y <= this.$viewSize.y ? this.$vScrollNone || (this.$vScrollNone = !0, this.$viewSize.x += this.$vtScrollBar.width) : this.$vScrollNone && (this.$vScrollNone = !1, this.$viewSize.x -= this.$vtScrollBar.width)), this.$hzScrollBar && (this.$contentSize.x <= this.$viewSize.x ? this.$hScrollNone || (this.$hScrollNone = !0, this.$viewSize.y += this.$hzScrollBar.height) : this.$hScrollNone && (this.$hScrollNone = !1, this.$viewSize.y -= this.$hzScrollBar.height))), this.$vtScrollBar && (this.$viewSize.y < this.$vtScrollBar.minSize ? this.$vtScrollBar.displayObject.visible = !1 : (this.$vtScrollBar.displayObject.visible = this.$scrollBarVisible && !this.$vScrollNone, 0 == this.$contentSize.y ? this.$vtScrollBar.displayPerc = 0 : this.$vtScrollBar.displayPerc = Math.min(1, this.$viewSize.y / this.$contentSize.y))), this.$hzScrollBar && (this.$viewSize.x < this.$hzScrollBar.minSize ? this.$hzScrollBar.displayObject.visible = !1 : (this.$hzScrollBar.displayObject.visible = this.$scrollBarVisible && !this.$hScrollNone, 0 == this.$contentSize.x ? this.$hzScrollBar.displayPerc = 0 : this.$hzScrollBar.displayPerc = Math.min(1, this.$viewSize.x / this.$contentSize.x)));
            var i = this.$maskContainer.scrollRect;
            if (i && (i.width = this.$viewSize.x, i.height = this.$viewSize.y, this.$maskContainer.scrollRect = i), 0 == this.$scrollType || 2 == this.$scrollType ? this.$overlapSize.x = Math.ceil(Math.max(0, this.$contentSize.x - this.$viewSize.x)) : this.$overlapSize.x = 0, 1 == this.$scrollType || 2 == this.$scrollType ? this.$overlapSize.y = Math.ceil(Math.max(0, this.$contentSize.y - this.$viewSize.y)) : this.$overlapSize.y = 0, this.$xPos = t.utils.NumberUtil.clamp(this.$xPos, 0, this.$overlapSize.x), this.$yPos = t.utils.NumberUtil.clamp(this.$yPos, 0, this.$overlapSize.y), null != this.$refreshBarAxis) {
                var n = this.$overlapSize[this.$refreshBarAxis];
                0 == n ? n = Math.max(this.$contentSize[this.$refreshBarAxis] + this.$footerLockedSize - this.$viewSize[this.$refreshBarAxis], 0) : n += this.$footerLockedSize, "x" == this.$refreshBarAxis ? this.$container.position.set(t.utils.NumberUtil.clamp(this.$container.x, -n, this.$headerLockedSize), t.utils.NumberUtil.clamp(this.$container.y, -this.$overlapSize.y, 0)) : this.$container.position.set(t.utils.NumberUtil.clamp(this.$container.x, -this.$overlapSize.x, 0), t.utils.NumberUtil.clamp(this.$container.y, -n, this.$headerLockedSize)), null != this.$header && ("x" == this.$refreshBarAxis ? this.$header.height = this.$viewSize.y : this.$header.width = this.$viewSize.x), null != this.$footer && ("y" == this.$refreshBarAxis ? this.$footer.height = this.$viewSize.y : this.$footer.width = this.$viewSize.x)
            } else this.$container.position.set(t.utils.NumberUtil.clamp(this.$container.x, -this.$overlapSize.x, 0), t.utils.NumberUtil.clamp(this.$container.y, -this.$overlapSize.y, 0));
            this.syncScrollBar(), this.checkRefreshBar(), this.$pageMode && this.updatePageController()
        }, i.prototype.posChanged = function (e) {
            0 == this.$aniFlag ? this.$aniFlag = e ? 1 : -1 : 1 != this.$aniFlag || e || (this.$aniFlag = -1), this.$needRefresh = !0, t.GTimer.inst.callLater(this.refresh, this)
        }, i.prototype.refresh = function () {
            this.$needRefresh = !1, t.GTimer.inst.remove(this.refresh, this), (this.$pageMode || this.$snapToItem) && (i.sEndPos.set(-this.$xPos, -this.$yPos), this.alignPosition(i.sEndPos, !1), this.$xPos = -i.sEndPos.x, this.$yPos = -i.sEndPos.y), this.refresh2(), this.emit("__scroll", this), this.$needRefresh && (this.$needRefresh = !1, t.GTimer.inst.remove(this.refresh, this), this.refresh2()), this.syncScrollBar(), this.$aniFlag = 0
        }, i.prototype.refresh2 = function () {
            if (1 != this.$aniFlag || this.$isDragging) 0 != this.$tweening && this.killTween(), this.$container.position.set(Math.floor(-this.$xPos), Math.floor(-this.$yPos)), this.loopCheckingCurrent();
            else {
                var e = void 0,
                    n = void 0;
                this.$overlapSize.x > 0 ? e = -Math.floor(this.$xPos) : (0 != this.$container.x && (this.$container.x = 0), e = 0), this.$overlapSize.y > 0 ? n = -Math.floor(this.$yPos) : (0 != this.$container.y && (this.$container.y = 0), n = 0), e != this.$container.x || n != this.$container.y ? (this.$tweening = 1, this.$tweenTime.set(0, 0), this.$tweenDuration.set(i.TWEEN_MANUALLY_SET_DURATION, i.TWEEN_MANUALLY_SET_DURATION), this.$tweenStart.set(this.$container.x, this.$container.y), this.$tweenChange.set(e - this.$tweenStart.x, n - this.$tweenStart.y), t.GTimer.inst.addLoop(1, this.tweenUpdate, this)) : 0 != this.$tweening && this.killTween()
            }
            this.$pageMode && this.updatePageController()
        }, i.prototype.syncScrollBar = function (e) {
            void 0 === e && (e = !1), null != this.$vtScrollBar && (this.$vtScrollBar.scrollPerc = 0 == this.$overlapSize.y ? 0 : t.utils.NumberUtil.clamp(-this.$container.y, 0, this.$overlapSize.y) / this.$overlapSize.y, this.$scrollBarDisplayAuto && this.showScrollBar(!e)), null != this.$hzScrollBar && (this.$hzScrollBar.scrollPerc = 0 == this.$overlapSize.x ? 0 : t.utils.NumberUtil.clamp(-this.$container.x, 0, this.$overlapSize.x) / this.$overlapSize.x, this.$scrollBarDisplayAuto && this.showScrollBar(!e)), e && (this.$maskContainer.interactive = !0)
        }, i.prototype.$mouseDown = function (e) {
            if (this.$touchEffect) {
                0 != this.$tweening ? (this.killTween(), this.$isDragging = !0) : this.$isDragging = !1;
                var n = PIXI.utils.isMobile.any ? this.$owner.globalToLocal(e.data.global.x, e.data.global.y) : this.$owner.globalToLocal(t.GRoot.globalMouseStatus.mouseX, t.GRoot.globalMouseStatus.mouseY, i.sHelperPoint);
                this.$containerPos.set(this.$container.x, this.$container.y), this.$beginTouchPos.copy(n), this.$lastTouchPos.copy(n), this.$lastTouchGlobalPos.copy(n), this.$isHoldAreaDone = !1, this.$velocity.set(0, 0), this.$velocityScale = 1, this.$lastMoveTime = t.GTimer.inst.curTime / 1e3, t.GRoot.inst.nativeStage.on(t.InteractiveEvents.Move, this.$mouseMove, this), t.GRoot.inst.nativeStage.on(t.InteractiveEvents.Up, this.$mouseUp, this), t.GRoot.inst.nativeStage.on(t.InteractiveEvents.Click, this.$click, this)
            }
        }, i.prototype.$mouseMove = function () {
            if (this.$touchEffect && (null == i.draggingPane || i.draggingPane == this) && null == t.GObject.draggingObject) {
                var e, n, s, r = t.UIConfig.touchScrollSensitivity,
                    o = this.$owner.globalToLocal(t.GRoot.globalMouseStatus.mouseX, t.GRoot.globalMouseStatus.mouseY, i.sHelperPoint);
                if (1 == this.$scrollType) {
                    if (!this.$isHoldAreaDone) {
                        if (i.$gestureFlag |= 1, (e = Math.abs(this.$beginTouchPos.y - o.y)) < r) return;
                        if (0 != (2 & i.$gestureFlag) && e < Math.abs(this.$beginTouchPos.x - o.x)) return
                    }
                    n = !0
                } else if (0 == this.$scrollType) {
                    if (!this.$isHoldAreaDone) {
                        if (i.$gestureFlag |= 2, (e = Math.abs(this.$beginTouchPos.x - o.x)) < r) return;
                        if (0 != (1 & i.$gestureFlag) && e < Math.abs(this.$beginTouchPos.y - o.y)) return
                    }
                    s = !0
                } else {
                    if (i.$gestureFlag = 3, !this.$isHoldAreaDone && (e = Math.abs(this.$beginTouchPos.y - o.y)) < r && (e = Math.abs(this.$beginTouchPos.x - o.x)) < r) return;
                    n = s = !0
                }
                var h = Math.floor(this.$containerPos.x + o.x - this.$beginTouchPos.x),
                    a = Math.floor(this.$containerPos.y + o.y - this.$beginTouchPos.y);
                n && (a > 0 ? this.$bouncebackEffect ? null != this.$header && 0 != this.$header.height ? this.$container.y = Math.floor(Math.min(.5 * a, this.$header.height)) : this.$container.y = Math.floor(Math.min(.5 * a, this.$viewSize.y * i.PULL_DIST_RATIO)) : this.$container.y = 0 : a < -this.$overlapSize.y ? this.$bouncebackEffect ? null != this.$footer && this.$footer.height > 0 ? this.$container.y = Math.floor(Math.max(.5 * (a + this.$overlapSize.y), -this.$footer.height) - this.$overlapSize.y) : this.$container.y = Math.floor(Math.max(.5 * (a + this.$overlapSize.y), -this.$viewSize.y * i.PULL_DIST_RATIO) - this.$overlapSize.y) : this.$container.y = -this.$overlapSize.y : this.$container.y = a), s && (h > 0 ? this.$bouncebackEffect ? null != this.$header && 0 != this.$header.width ? this.$container.x = Math.floor(Math.min(.5 * h, this.$header.width)) : this.$container.x = Math.floor(Math.min(.5 * h, this.$viewSize.x * i.PULL_DIST_RATIO)) : this.$container.x = 0 : h < 0 - this.$overlapSize.x ? this.$bouncebackEffect ? null != this.$footer && this.$footer.width > 0 ? this.$container.x = Math.floor(Math.max(.5 * (h + this.$overlapSize.x), -this.$footer.width) - this.$overlapSize.x) : this.$container.x = Math.floor(Math.max(.5 * (h + this.$overlapSize.x), -this.$viewSize.x * i.PULL_DIST_RATIO) - this.$overlapSize.x) : this.$container.x = -this.$overlapSize.x : this.$container.x = h);
                var l = t.GRoot.inst.applicationContext.ticker.FPS,
                    u = t.GTimer.inst.curTime / 1e3,
                    c = Math.max(u - this.$lastMoveTime, 1 / l),
                    p = o.x - this.$lastTouchPos.x,
                    $ = o.y - this.$lastTouchPos.y;
                if (s || (p = 0), n || ($ = 0), 0 != c) {
                    var d = c * l - 1;
                    if (d > 1) {
                        var f = Math.pow(.833, d);
                        this.$velocity.x = this.$velocity.x * f, this.$velocity.y = this.$velocity.y * f
                    }
                    this.$velocity.x = t.utils.NumberUtil.lerp(this.$velocity.x, 60 * p / l / c, 10 * c), this.$velocity.y = t.utils.NumberUtil.lerp(this.$velocity.y, 60 * $ / l / c, 10 * c)
                }
                var g = this.$lastTouchGlobalPos.x - o.x,
                    y = this.$lastTouchGlobalPos.y - o.y;
                0 != p ? this.$velocityScale = Math.abs(g / p) : 0 != $ && (this.$velocityScale = Math.abs(y / $)), this.$lastTouchPos.copy(o), this.$lastTouchGlobalPos.copy(o), this.$lastMoveTime = u, this.$overlapSize.x > 0 && (this.$xPos = t.utils.NumberUtil.clamp(-this.$container.x, 0, this.$overlapSize.x)), this.$overlapSize.y > 0 && (this.$yPos = t.utils.NumberUtil.clamp(-this.$container.y, 0, this.$overlapSize.y)), 0 != this.$loop && (h = this.$container.x, a = this.$container.y, this.loopCheckingCurrent() && (this.$containerPos.x += this.$container.x - h, this.$containerPos.y += this.$container.y - a)), i.draggingPane = this, this.$isHoldAreaDone = !0, this.$isDragging = !0, this.$maskContainer.interactive = !1, this.syncScrollBar(), this.checkRefreshBar(), this.$pageMode && this.updatePageController(), this.emit("__scroll", this)
            }
        }, i.prototype.$mouseUp = function () {
            if (t.GRoot.inst.nativeStage.off(t.InteractiveEvents.Move, this.$mouseMove, this), t.GRoot.inst.nativeStage.off(t.InteractiveEvents.Up, this.$mouseUp, this), t.GRoot.inst.nativeStage.off(t.InteractiveEvents.Click, this.$click, this), i.draggingPane == this && (i.draggingPane = null), i.$gestureFlag = 0, !this.$isDragging || !this.$touchEffect) return this.$isDragging = !1, void(this.$maskContainer.interactive = !0);
            this.$isDragging = !1, this.$maskContainer.interactive = !0, this.$tweenStart.set(this.$container.x, this.$container.y), i.sEndPos.set(this.$tweenStart.x, this.$tweenStart.y);
            var e = !1;
            if (this.$container.x > 0 ? (i.sEndPos.x = 0, e = !0) : this.$container.x < -this.$overlapSize.x && (i.sEndPos.x = -this.$overlapSize.x, e = !0), this.$container.y > 0 ? (i.sEndPos.y = 0, e = !0) : this.$container.y < -this.$overlapSize.y && (i.sEndPos.y = -this.$overlapSize.y, e = !0), e) {
                if (this.$tweenChange.set(i.sEndPos.x - this.$tweenStart.x, i.sEndPos.y - this.$tweenStart.y), this.$tweenChange.x < -t.UIConfig.touchDragSensitivity || this.$tweenChange.y < -t.UIConfig.touchDragSensitivity ? (this.$refreshEventDispatching = !0, this.emit("__pullDownRelease"), this.$refreshEventDispatching = !1) : (this.$tweenChange.x > t.UIConfig.touchDragSensitivity || this.$tweenChange.y > t.UIConfig.touchDragSensitivity) && (this.$refreshEventDispatching = !0, this.emit("__pullUpRelease"), this.$refreshEventDispatching = !1), this.$headerLockedSize > 0 && 0 == i.sEndPos[this.$refreshBarAxis]) i.sEndPos[this.$refreshBarAxis] = this.$headerLockedSize, this.$tweenChange.x = i.sEndPos.x - this.$tweenStart.x, this.$tweenChange.y = i.sEndPos.y - this.$tweenStart.y;
                else if (this.$footerLockedSize > 0 && i.sEndPos[this.$refreshBarAxis] == -this.$overlapSize[this.$refreshBarAxis]) {
                    var n = this.$overlapSize[this.$refreshBarAxis];
                    0 == n ? n = Math.max(this.$contentSize[this.$refreshBarAxis] + this.$footerLockedSize - this.$viewSize[this.$refreshBarAxis], 0) : n += this.$footerLockedSize, i.sEndPos[this.$refreshBarAxis] = -n, this.$tweenChange.x = i.sEndPos.x - this.$tweenStart.x, this.$tweenChange.y = i.sEndPos.y - this.$tweenStart.y
                }
                this.$tweenDuration.set(i.TWEEN_DEFAULT_DURATION, i.TWEEN_DEFAULT_DURATION)
            } else {
                if (this.$inertiaDisabled) this.$tweenDuration.set(i.TWEEN_DEFAULT_DURATION, i.TWEEN_DEFAULT_DURATION);
                else {
                    var s = t.GRoot.inst.applicationContext.ticker.FPS,
                        r = (t.GTimer.inst.curTime / 1e3 - this.$lastMoveTime) * s - 1;
                    if (r > 1) {
                        var o = Math.pow(.833, r);
                        this.$velocity.x = this.$velocity.x * o, this.$velocity.y = this.$velocity.y * o
                    }
                    this.updateTargetAndDuration(this.$tweenStart, i.sEndPos)
                } if (i.sOldChange.set(i.sEndPos.x - this.$tweenStart.x, i.sEndPos.y - this.$tweenStart.y), this.loopCheckingTarget(i.sEndPos), (this.$pageMode || this.$snapToItem) && this.alignPosition(i.sEndPos, !0), this.$tweenChange.x = i.sEndPos.x - this.$tweenStart.x, this.$tweenChange.y = i.sEndPos.y - this.$tweenStart.y, 0 == this.$tweenChange.x && 0 == this.$tweenChange.y) return void(this.$scrollBarDisplayAuto && this.showScrollBar(!1));
                (this.$pageMode || this.$snapToItem) && (this.fixDuration("x", i.sOldChange.x), this.fixDuration("y", i.sOldChange.y))
            }
            this.$tweening = 2, this.$tweenTime.set(0, 0), t.GTimer.inst.addLoop(1, this.tweenUpdate, this)
        }, i.prototype.$click = function () {
            this.$isDragging = !1
        }, i.prototype.$mouseWheel = function (t) {
            if (this.$mouseWheelEnabled) {
                var e = t.delta > 0 ? -1 : t.delta < 0 ? 1 : 0;
                this.$overlapSize.x > 0 && 0 == this.$overlapSize.y ? this.$pageMode ? this.setPosX(this.$xPos + this.$pageSize.x * e, !1) : this.setPosX(this.$xPos + this.$mouseWheelSpeed * e, !1) : this.$pageMode ? this.setPosY(this.$yPos + this.$pageSize.y * e, !1) : this.setPosY(this.$yPos + this.$mouseWheelSpeed * e, !1)
            }
        }, i.prototype.$rollOver = function () {
            this.showScrollBar(!0)
        }, i.prototype.$rollOut = function () {
            this.showScrollBar(!1)
        }, i.prototype.showScrollBar = function (e) {
            e ? (t.GTimer.inst.remove(this.setScrollBarVisible, this), this.setScrollBarVisible(!0)) : t.GTimer.inst.add(500, 1, this.setScrollBarVisible, this, e)
        }, i.prototype.setScrollBarVisible = function (t) {
            this.$scrollBarVisible = t && this.$viewSize.x > 0 && this.$viewSize.y > 0, this.$vtScrollBar && (this.$vtScrollBar.displayObject.visible = this.$scrollBarVisible && !this.$vScrollNone), this.$hzScrollBar && (this.$hzScrollBar.displayObject.visible = this.$scrollBarVisible && !this.$hScrollNone)
        }, i.prototype.getLoopPartSize = function (e, i) {
            var n = 0;
            return this.$owner instanceof t.GList && (n = "x" == i ? this.$owner.columnGap : this.$owner.lineGap), (this.$contentSize[i] + n) / e
        }, i.prototype.loopCheckingCurrent = function () {
            var t = !1;
            return 1 == this.$loop && this.$overlapSize.x > 0 ? this.$xPos < .001 ? (this.$xPos += this.getLoopPartSize(2, "x"), t = !0) : this.$xPos >= this.$overlapSize.x && (this.$xPos -= this.getLoopPartSize(2, "x"), t = !0) : 2 == this.$loop && this.$overlapSize.y > 0 && (this.$yPos < .001 ? (this.$yPos += this.getLoopPartSize(2, "y"), t = !0) : this.$yPos >= this.$overlapSize.y && (this.$yPos -= this.getLoopPartSize(2, "y"), t = !0)), t && this.$container.position.set(Math.floor(-this.$xPos), Math.floor(-this.$yPos)), t
        }, i.prototype.loopCheckingTarget = function (t) {
            1 == this.$loop && this.loopCheckingTarget2(t, "x"), 2 == this.$loop && this.loopCheckingTarget2(t, "y")
        }, i.prototype.loopCheckingTarget2 = function (t, e) {
            var i, n;
            t[e] > 0 ? (i = this.getLoopPartSize(2, e), (n = this.$tweenStart[e] - i) <= 0 && n >= -this.$overlapSize[e] && (t[e] -= i, this.$tweenStart[e] = n)) : t[e] < -this.$overlapSize[e] && (i = this.getLoopPartSize(2, e), (n = this.$tweenStart[e] + i) <= 0 && n >= -this.$overlapSize[e] && (t[e] += i, this.$tweenStart[e] = n))
        }, i.prototype.loopCheckingNewPos = function (e, i) {
            if (0 == this.$overlapSize[i]) return e;
            var n, s = "x" == i ? this.$xPos : this.$yPos,
                r = !1;
            return e < .001 ? (e += this.getLoopPartSize(2, i)) > s && (n = this.getLoopPartSize(6, i), n = Math.ceil((e - s) / n) * n, s = t.utils.NumberUtil.clamp(s + n, 0, this.$overlapSize[i]), r = !0) : e >= this.$overlapSize[i] && (e -= this.getLoopPartSize(2, i)) < s && (n = this.getLoopPartSize(6, i), n = Math.ceil((s - e) / n) * n, s = t.utils.NumberUtil.clamp(s - n, 0, this.$overlapSize[i]), r = !0), r && ("x" == i ? this.$container.x = -Math.floor(s) : this.$container.y = -Math.floor(s)), e
        }, i.prototype.alignPosition = function (t, e) {
            if (this.$pageMode) t.x = this.alignByPage(t.x, "x", e), t.y = this.alignByPage(t.y, "y", e);
            else if (this.$snapToItem) {
                var n = this.$owner.getSnappingPosition(-t.x, -t.y, i.sHelperPoint);
                t.x < 0 && t.x > -this.$overlapSize.x && (t.x = -n.x), t.y < 0 && t.y > -this.$overlapSize.y && (t.y = -n.y)
            }
        }, i.prototype.alignByPage = function (t, e, i) {
            var n;
            if (t > 0) n = 0;
            else if (t < -this.$overlapSize[e]) n = Math.ceil(this.$contentSize[e] / this.$pageSize[e]) - 1;
            else {
                n = Math.floor(-t / this.$pageSize[e]);
                var s = i ? t - this.$containerPos[e] : t - this.$container[e],
                    r = Math.min(this.$pageSize[e], this.$contentSize[e] - (n + 1) * this.$pageSize[e]),
                    o = -t - n * this.$pageSize[e];
                Math.abs(s) > this.$pageSize[e] ? o > .5 * r && n++ : o > r * (s < 0 ? .3 : .7) && n++;
                var h = this.$pageSize[e];
                (t = -n * h) < -h && (t = -h)
            } if (i) {
                var a, l = this.$tweenStart[e];
                a = l > 0 ? 0 : l < -this.$overlapSize[e] ? Math.ceil(this.$contentSize[e] / this.$pageSize[e]) - 1 : Math.floor(-l / this.$pageSize[e]);
                var u = Math.floor(-this.$containerPos[e] / this.$pageSize[e]);
                Math.abs(n - u) > 1 && Math.abs(a - u) <= 1 && (t = -(n = n > u ? u + 1 : u - 1) * this.$pageSize[e])
            }
            return t
        }, i.prototype.updateTargetAndDuration = function (t, e) {
            e.x = this.updateTargetAndDuration2(t.x, "x"), e.y = this.updateTargetAndDuration2(t.y, "y")
        }, i.prototype.updateTargetAndDuration2 = function (e, n) {
            var s = this.$velocity[n],
                r = 0;
            if (e > 0) e = 0;
            else if (e < -this.$overlapSize[n]) e = -this.$overlapSize[n];
            else {
                var o = Math.abs(s) * this.$velocityScale;
                PIXI.utils.isMobile.any && (o *= Math.max(t.GRoot.inst.stageWrapper.designWidth, t.GRoot.inst.stageWrapper.designHeight) / Math.max(t.GRoot.inst.stageWidth, t.GRoot.inst.stageHeight));
                var h = 0;
                if (this.$pageMode || !PIXI.utils.isMobile.any ? o > 500 && (h = Math.pow((o - 500) / 500, 2)) : o > 1e3 && (h = Math.pow((o - 1e3) / 1e3, 2)), 0 != h) h > 1 && (h = 1), o *= h, s *= h, this.$velocity[n] = s, r = Math.log(60 / o) / Math.log(this.$decelerationRate) / 60, e += (s / 60 - 1) / (1 - this.$decelerationRate)
            }
            return r < i.TWEEN_DEFAULT_DURATION && (r = i.TWEEN_DEFAULT_DURATION), this.$tweenDuration[n] = r, e
        }, i.prototype.fixDuration = function (t, e) {
            if (!(0 == this.$tweenChange[t] || Math.abs(this.$tweenChange[t]) >= Math.abs(e))) {
                var n = Math.abs(this.$tweenChange[t] / e) * this.$tweenDuration[t];
                n < i.TWEEN_DEFAULT_DURATION && (n = i.TWEEN_DEFAULT_DURATION), this.$tweenDuration[t] = n
            }
        }, i.prototype.killTween = function () {
            1 == this.$tweening && (this.$container.position.set(this.$tweenStart.x + this.$tweenChange.x, this.$tweenStart.y + this.$tweenChange.y), this.emit("__scroll", this)), this.$tweening = 0, t.GTimer.inst.remove(this.tweenUpdate, this), this.emit("__scrollEnd", this)
        }, i.prototype.checkRefreshBar = function () {
            if (null != this.$header || null != this.$footer) {
                var t = this.$container[this.$refreshBarAxis];
                if (null != this.$header)
                    if (t > 0) null == this.$header.displayObject.parent && this.$maskContainer.addChildAt(this.$header.displayObject, 0), (e = i.sHelperPoint).set(this.$header.width, this.$header.height), e[this.$refreshBarAxis] = t, this.$header.setSize(e.x, e.y);
                    else null != this.$header.displayObject.parent && this.$maskContainer.removeChild(this.$header.displayObject);
                if (null != this.$footer) {
                    var e, n = this.$overlapSize[this.$refreshBarAxis];
                    if (t < -n || 0 == n && this.$footerLockedSize > 0) null == this.$footer.displayObject.parent && this.$maskContainer.addChildAt(this.$footer.displayObject, 0), (e = i.sHelperPoint).set(this.$footer.x, this.$footer.y), e[this.$refreshBarAxis] = n > 0 ? t + this.$contentSize[this.$refreshBarAxis] : Math.max(Math.min(t + this.$viewSize[this.$refreshBarAxis], this.$viewSize[this.$refreshBarAxis] - this.$footerLockedSize), this.$viewSize[this.$refreshBarAxis] - this.$contentSize[this.$refreshBarAxis]), this.$footer.setXY(e.x, e.y), e.set(this.$footer.width, this.$footer.height), e[this.$refreshBarAxis] = n > 0 ? -n - t : this.$viewSize[this.$refreshBarAxis] - this.$footer[this.$refreshBarAxis], this.$footer.setSize(e.x, e.y);
                    else null != this.$footer.displayObject.parent && this.$maskContainer.removeChild(this.$footer.displayObject)
                }
            }
        }, i.prototype.tweenUpdate = function () {
            var e = this.runTween("x"),
                i = this.runTween("y");
            this.$container.position.set(e, i), 2 == this.$tweening && (this.$overlapSize.x > 0 && (this.$xPos = t.utils.NumberUtil.clamp(-e, 0, this.$overlapSize.x)), this.$overlapSize.y > 0 && (this.$yPos = t.utils.NumberUtil.clamp(-i, 0, this.$overlapSize.y)), this.$pageMode && this.updatePageController()), 0 == this.$tweenChange.x && 0 == this.$tweenChange.y ? (this.$tweening = 0, t.GTimer.inst.remove(this.tweenUpdate, this), this.loopCheckingCurrent(), this.syncScrollBar(!0), this.checkRefreshBar(), this.emit("__scroll", this), this.emit("__scrollEnd", this)) : (this.syncScrollBar(!1), this.checkRefreshBar(), this.emit("__scroll", this))
        }, i.prototype.runTween = function (e) {
            var n, s = t.GTimer.inst.ticker.deltaTime;
            if (0 != this.$tweenChange[e]) {
                if (this.$tweenTime[e] += s * PIXI.settings.TARGET_FPMS, this.$tweenTime[e] >= this.$tweenDuration[e]) n = this.$tweenStart[e] + this.$tweenChange[e], this.$tweenChange[e] = 0;
                else {
                    var r = i.$easeTypeFunc(this.$tweenTime[e], this.$tweenDuration[e]);
                    n = this.$tweenStart[e] + Math.floor(this.$tweenChange[e] * r)
                }
                var o = 0,
                    h = -this.$overlapSize[e];
                if (this.$headerLockedSize > 0 && this.$refreshBarAxis == e && (o = this.$headerLockedSize), this.$footerLockedSize > 0 && this.$refreshBarAxis == e) {
                    var a = this.$overlapSize[this.$refreshBarAxis];
                    0 == a ? a = Math.max(this.$contentSize[this.$refreshBarAxis] + this.$footerLockedSize - this.$viewSize[this.$refreshBarAxis], 0) : a += this.$footerLockedSize, h = -a
                }
                2 == this.$tweening && this.$bouncebackEffect ? n > 20 + o && this.$tweenChange[e] > 0 || n > o && 0 == this.$tweenChange[e] ? (this.$tweenTime[e] = 0, this.$tweenDuration[e] = i.TWEEN_DEFAULT_DURATION, this.$tweenChange[e] = -n + o, this.$tweenStart[e] = n) : (n < h - 20 && this.$tweenChange[e] < 0 || n < h && 0 == this.$tweenChange[e]) && (this.$tweenTime[e] = 0, this.$tweenDuration[e] = i.TWEEN_DEFAULT_DURATION, this.$tweenChange[e] = h - n, this.$tweenStart[e] = n) : n > o ? (n = o, this.$tweenChange[e] = 0) : n < h && (n = h, this.$tweenChange[e] = 0)
            } else n = this.$container[e];
            return n
        }, i.$easeTypeFunc = function (t, e) {
            return (t = t / e - 1) * t * t + 1
        }, i.$gestureFlag = 0, i.sHelperPoint = new PIXI.Point, i.sHelperRect = new PIXI.Rectangle, i.sEndPos = new PIXI.Point, i.sOldChange = new PIXI.Point, i.TWEEN_DEFAULT_DURATION = .4, i.TWEEN_MANUALLY_SET_DURATION = .5, i.PULL_DIST_RATIO = .5, i
    }(PIXI.utils.EventEmitter);
    t.ScrollPane = e
}(fgui || (fgui = {})),
function (t) {
    var e = function () {
        function e(t) {
            this.autoPlayRepeat = 1, this.autoPlayDelay = 0, this.$ownerBaseX = 0, this.$ownerBaseY = 0, this.$totalTimes = 0, this.$totalTasks = 0, this.$playing = !1, this.$options = 0, this.$maxTime = 0, this.$owner = t, this.$items = [], this.$owner.on("__visibleChanged", this.$ownerVisibleChanged, this)
        }
        return e.prototype.$ownerVisibleChanged = function (t, i) {
            0 == (this.$options & e.OPTION_AUTO_STOP_DISABLED) && !1 === t && this.stop(0 != (this.$options & e.OPTION_AUTO_STOP_AT_END), !1)
        }, Object.defineProperty(e.prototype, "autoPlay", {
            get: function () {
                return this.$autoPlay
            }, set: function (t) {
                this.$autoPlay != t && (this.$autoPlay = t, this.$autoPlay ? this.$owner.onStage && this.play({
                    times: this.autoPlayRepeat,
                    delay: this.autoPlayDelay
                }) : this.$owner.onStage || this.stop(!1, !0))
            }, enumerable: !0,
            configurable: !0
        }), e.prototype.changeRepeat = function (t) {
            this.$totalTimes = 0 | t
        }, e.prototype.play = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            if (t.length && "object" == typeof t[0]) {
                var i = t[0];
                this.$play(i.onComplete, i.onCompleteObj, i.onCompleteParam, i.times || 1, i.delay || 0, !1)
            } else this.$play(t[0], t[1], t[2], t[3] || 1, t[4] || 0, !1)
        }, e.prototype.playReverse = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            if (t.length && "object" == typeof t[0]) {
                var i = t[0];
                this.$play(i.onComplete, i.onCompleteObj, i.onCompleteParam, i.times || 1, i.delay || 0, !0)
            } else this.$play(t[0], t[1], t[2], t[3] || 1, t[4] || 0, !0)
        }, e.prototype.$play = function (t, i, n, s, r, o) {
            var h = this;
            void 0 === o && (o = !1), this.stop(), 0 == s ? s = 1 : -1 == s && (s = Number.MAX_VALUE), this.$totalTimes = s, this.$reversed = o, this.internalPlay(r), this.$playing = this.$totalTasks > 0, this.$playing ? (this.$onComplete = t, this.$onCompleteParam = n, this.$onCompleteObj = i, 0 != (this.$options & e.OPTION_IGNORE_DISPLAY_CONTROLLER) && this.$items.forEach(function (t) {
                null != t.target && t.target != h.$owner && (t.lockToken = t.target.lockGearDisplay())
            }, this)) : null != t && (n && n.length ? t.apply(i, n) : t.call(i, n))
        }, e.prototype.stop = function (t, e) {
            if (void 0 === t && (t = !0), void 0 === e && (e = !1), this.$playing) {
                this.$playing = !1, this.$totalTasks = 0, this.$totalTimes = 0;
                var i = this.$onComplete,
                    n = this.$onCompleteParam,
                    s = this.$onCompleteObj;
                this.$onComplete = null, this.$onCompleteParam = null, this.$onCompleteObj = null;
                var r = this.$items.length,
                    o = void 0;
                if (this.$reversed)
                    for (var h = r - 1; h >= 0; h--) null != (o = this.$items[h]).target && this.stopItem(o, t);
                else
                    for (h = 0; h < r; h++) null != (o = this.$items[h]).target && this.stopItem(o, t);
                e && null != i && (n && n.length > 0 ? i.apply(s, n) : i.call(s, n))
            }
        }, e.prototype.stopItem = function (e, i) {
            if (0 != e.lockToken && (e.target.releaseGearDisplay(e.lockToken), e.lockToken = 0), 12 == e.type && e.filterCreated && (e.target.filters = null), !e.completed)
                if (this.disposeTween(e), 10 == e.type) {
                    var n = e.target.getTransition(e.value.s);
                    null != n && n.stop(i, !1)
                } else 11 == e.type ? (t.GTimer.inst.remove(e.$shake, e), e.target.$gearLocked = !0, e.target.setXY(e.target.x - e.startValue.f1, e.target.y - e.startValue.f2), e.target.$gearLocked = !1) : i && (e.tween ? e.yoyo && e.repeat % 2 != 0 ? this.applyValue(e, this.$reversed ? e.endValue : e.startValue) : this.applyValue(e, this.$reversed ? e.startValue : e.endValue) : 9 != e.type && this.applyValue(e, e.value))
        }, e.prototype.dispose = function () {
            var e = this;
            t.GTimer.inst.remove(this.internalPlay, this), this.$owner.off("__visibleChanged", this.$ownerVisibleChanged, this), this.$playing = !1, this.$items.forEach(function (i) {
                if (null != i.target && !i.completed)
                    if (e.disposeTween(i), 10 == i.type) {
                        var n = i.target.getTransition(i.value.s);
                        null != n && n.dispose()
                    } else 11 == i.type && t.GTimer.inst.remove(i.$shake, i)
            }, this)
        }, Object.defineProperty(e.prototype, "playing", {
            get: function () {
                return this.$playing
            }, enumerable: !0,
            configurable: !0
        }), e.prototype.setValue = function (t) {
            for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
            this.$items.forEach(function (i) {
                if (null != i.label || null != i.label2) {
                    var n;
                    if (i.label == t) n = i.tween ? i.startValue : i.value;
                    else {
                        if (i.label2 != t) return;
                        n = i.endValue
                    }
                    switch (i.type) {
                    case 0:
                    case 1:
                    case 3:
                    case 2:
                    case 13:
                        n.b1 = !0, n.b2 = !0, n.f1 = parseFloat(e[0]), n.f2 = parseFloat(e[1]);
                        break;
                    case 4:
                        n.f1 = parseFloat(e[0]);
                        break;
                    case 5:
                        n.i = parseInt(e[0]);
                        break;
                    case 6:
                        n.c = parseFloat(e[0]);
                        break;
                    case 7:
                        n.i = parseInt(e[0]), e.length > 1 && (n.b = e[1]);
                        break;
                    case 8:
                        n.b = e[0];
                        break;
                    case 9:
                        n.s = e[0], e.length > 1 && (n.f1 = parseFloat(e[1]));
                        break;
                    case 10:
                        n.s = e[0], e.length > 1 && (n.i = parseInt(e[1]));
                        break;
                    case 11:
                        n.f1 = parseFloat(e[0]), e.length > 1 && (n.f2 = parseFloat(e[1]));
                        break;
                    case 12:
                        n.f1 = parseFloat(e[0]), n.f2 = parseFloat(e[1]), n.f3 = parseFloat(e[2]), n.f4 = parseFloat(e[3])
                    }
                }
            }, this)
        }, e.prototype.setHook = function (t, e, i) {
            for (var n = this.$items.length, s = 0; s < n; s++) {
                var r = this.$items[s];
                if (r.label == t) {
                    r.hook = e, r.hookObj = i;
                    break
                }
                if (r.label2 == t) {
                    r.hook2 = e, r.hook2Obj = i;
                    break
                }
            }
        }, e.prototype.clearHooks = function () {
            this.$items.forEach(function (t) {
                t.hook = null, t.hookObj = null, t.hook2 = null, t.hook2Obj = null
            }, this)
        }, e.prototype.setTarget = function (t, e) {
            this.$items.forEach(function (i) {
                i.label == t && (i.targetId = e.id)
            }, this)
        }, e.prototype.setDuration = function (t, e) {
            this.$items.forEach(function (i) {
                i.tween && i.label == t && (i.duration = e)
            }, this)
        }, e.prototype.updateFromRelations = function (t, e, i) {
            this.$items.forEach(function (n) {
                0 == n.type && n.targetId == t && (n.tween ? (n.startValue.f1 += e, n.startValue.f2 += i, n.endValue.f1 += e, n.endValue.f2 += i) : (n.value.f1 += e, n.value.f2 += i))
            }, this)
        }, e.prototype.internalPlay = function (t) {
            var e = this;
            void 0 === t && (t = 0), this.$ownerBaseX = this.$owner.x, this.$ownerBaseY = this.$owner.y, this.$totalTasks = 0, this.$items.forEach(function (i) {
                var n;
                (i.targetId ? i.target = e.$owner.getChildById(i.targetId) : i.target = e.$owner, null != i.target) && (e.disposeTween(i), i.tween ? (n = e.$reversed ? t + e.$maxTime - i.time - i.duration : t + i.time) > 0 ? (e.$totalTasks++, i.completed = !1, i.tweener = createjs.Tween.get(i.value).wait(1e3 * n).call(e.$delayCall, [i], e)) : e.startTween(i) : (n = e.$reversed ? t + e.$maxTime - i.time : t + i.time) <= 0 ? e.applyValue(i, i.value) : (e.$totalTasks++, i.completed = !1, i.tweener = createjs.Tween.get(i.value).wait(1e3 * n).call(e.$delayCall2, [i], e)))
            }, this)
        }, e.prototype.prepareValue = function (t, e, i) {
            var n, s;
            switch (void 0 === i && (i = !1), i ? (n = t.endValue, s = t.startValue) : (n = t.startValue, s = t.endValue), t.type) {
            case 0:
            case 1:
                0 == t.type ? t.target == this.$owner ? (n.b1 || (n.f1 = 0), n.b2 || (n.f2 = 0)) : (n.b1 || (n.f1 = t.target.x), n.b2 || (n.f2 = t.target.y)) : (n.b1 || (n.f1 = t.target.width), n.b2 || (n.f2 = t.target.height)), t.value.f1 = n.f1, t.value.f2 = n.f2, s.b1 || (s.f1 = t.value.f1), s.b2 || (s.f2 = t.value.f2), t.value.b1 = n.b1 || s.b1, t.value.b2 = n.b2 || s.b2, e.f1 = s.f1, e.f2 = s.f2;
                break;
            case 2:
            case 13:
                t.value.f1 = n.f1, t.value.f2 = n.f2, e.f1 = s.f1, e.f2 = s.f2;
                break;
            case 4:
                t.value.f1 = n.f1, e.f1 = s.f1;
                break;
            case 5:
                t.value.i = n.i, e.i = s.i;
                break;
            case 12:
                t.value.f1 = n.f1, t.value.f2 = n.f2, t.value.f3 = n.f3, t.value.f4 = n.f4, e.f1 = s.f1, e.f2 = s.f2, e.f3 = s.f3, e.f4 = s.f4
            }
        }, e.prototype.startTween = function (e) {
            var i, s = new n;
            this.prepareValue(e, s, this.$reversed), this.applyValue(e, e.value), 0 != e.repeat ? (e.tweenTimes = 0, i = t.utils.Binder.create(this.$tweenRepeatComplete, this, e)) : i = t.utils.Binder.create(this.$tweenComplete, this, e), this.$totalTasks++, e.completed = !1, this.prepareValue(e, s, this.$reversed), e.tweener = createjs.Tween.get(e.value, {
                onChange: t.utils.Binder.create(this.$tweenUpdate, this, e)
            }).to(s, 1e3 * e.duration, e.easeType).call(i), null != e.hook && e.hook.call(e.hookObj)
        }, e.prototype.$delayCall = function (t) {
            this.disposeTween(t), this.$totalTasks--, this.startTween(t)
        }, e.prototype.$delayCall2 = function (t) {
            this.disposeTween(t), this.$totalTasks--, t.completed = !0, this.applyValue(t, t.value), null != t.hook && t.hook.call(t.hookObj), this.checkAllComplete()
        }, e.prototype.$tweenUpdate = function (t, e) {
            this.applyValue(e, e.value)
        }, e.prototype.$tweenComplete = function (t, e) {
            this.disposeTween(e), this.$totalTasks--, e.completed = !0, null != e.hook2 && e.hook2.call(e.hook2Obj), this.checkAllComplete()
        }, e.prototype.$tweenRepeatComplete = function (e, i) {
            if (i.tweenTimes++, -1 == i.repeat || i.tweenTimes < i.repeat + 1) {
                var s = new n,
                    r = void 0;
                r = i.yoyo ? this.$reversed ? i.tweenTimes % 2 == 0 : i.tweenTimes % 2 == 1 : this.$reversed, this.prepareValue(i, s, r), this.disposeTween(i), i.tweener = createjs.Tween.get(i.value, {
                    onChange: t.utils.Binder.create(this.$tweenUpdate, this, i)
                }).to(s, 1e3 * i.duration, i.easeType).call(this.$tweenRepeatComplete, [null, i], this)
            } else this.$tweenComplete(null, i)
        }, e.prototype.disposeTween = function (t) {
            t && t.tweener && (t.tweener.paused = !0, t.tweener.removeAllEventListeners(), createjs.Tween.removeTweens(t.value), t.tweener = null)
        }, e.prototype.$playTransComplete = function (t) {
            this.disposeTween(t), this.$totalTasks--, t.completed = !0, this.checkAllComplete()
        }, e.prototype.checkAllComplete = function () {
            var e = this;
            if (this.$playing && 0 == this.$totalTasks)
                if (this.$totalTimes < 0) t.GTimer.inst.callLater(this.internalPlay, this, 0);
                else if (this.$totalTimes--, this.$totalTimes > 0) t.GTimer.inst.callLater(this.internalPlay, this, 0);
            else if (this.$playing = !1, this.$items.forEach(function (t) {
                null != t.target && (0 != t.lockToken && (t.target.releaseGearDisplay(t.lockToken), t.lockToken = 0), t.filterCreated && (t.filterCreated = !1, t.target.filters = null), e.disposeTween(t))
            }), null != this.$onComplete) {
                var i = this.$onComplete,
                    n = this.$onCompleteParam,
                    s = this.$onCompleteObj;
                this.$onComplete = null, this.$onCompleteParam = null, this.$onCompleteObj = null, n && n.length ? i.apply(s, n) : i.call(s, n)
            }
        }, e.prototype.applyValue = function (e, i) {
            switch (e.target.$gearLocked = !0, e.type) {
            case 0:
                if (e.target == this.$owner) {
                    var n = 0,
                        s = 0;
                    n = i.b1 ? i.f1 + this.$ownerBaseX : e.target.x, s = i.b2 ? i.f2 + this.$ownerBaseY : e.target.y, e.target.setXY(n, s)
                } else i.b1 || (i.f1 = e.target.x), i.b2 || (i.f2 = e.target.y), e.target.setXY(i.f1, i.f2);
                break;
            case 1:
                i.b1 || (i.f1 = e.target.width), i.b2 || (i.f2 = e.target.height), e.target.setSize(i.f1, i.f2);
                break;
            case 3:
                e.target.setPivot(i.f1, i.f2);
                break;
            case 4:
                e.target.alpha = i.f1;
                break;
            case 5:
                e.target.rotation = i.i;
                break;
            case 2:
                e.target.setScale(i.f1, i.f2);
                break;
            case 13:
                e.target.setSkew(i.f1, i.f2);
                break;
            case 6:
                t.isColorGear(e.target) && (e.target.color = i.c);
                break;
            case 7:
                t.isAnimationGear(e.target) && (i.b1 || (i.i = e.target.frame), e.target.frame = i.i, e.target.playing = i.b);
                break;
            case 8:
                e.target.visible = i.b;
                break;
            case 10:
                var r = e.target.getTransition(i.s);
                null != r && (0 == i.i ? r.stop(!1, !0) : r.playing ? r.$totalTimes = -1 == i.i ? Number.MAX_VALUE : i.i : (e.completed = !1, this.$totalTasks++, this.$reversed ? r.playReverse(this.$playTransComplete, this, e, e.value.i) : r.play(this.$playTransComplete, this, e, e.value.i)));
                break;
            case 9:
                break;
            case 11:
                e.startValue.f1 = 0, e.startValue.f2 = 0, e.startValue.f3 = e.value.f2, t.GTimer.inst.add(1, 0, e.$shake, e, [this]), this.$totalTasks++, e.completed = !1;
                break;
            case 12:
                e.target.updateColorComponents(i.f1, i.f2, i.f3, i.f4)
            }
            e.target.$gearLocked = !1
        }, e.prototype.$shakeItem = function (e, i) {
            var n = Math.ceil(e.value.f1 * e.startValue.f3 / e.value.f2),
                s = (2 * Math.random() - 1) * n,
                r = (2 * Math.random() - 1) * n;
            s = s > 0 ? Math.ceil(s) : Math.floor(s), r = r > 0 ? Math.ceil(r) : Math.floor(r), e.target.$gearLocked = !0, e.target.setXY(e.target.x - e.startValue.f1 + s, e.target.y - e.startValue.f2 + r), e.target.$gearLocked = !1, e.startValue.f1 = s, e.startValue.f2 = r, e.startValue.f3 -= i / 1e3, e.startValue.f3 <= 0 && (e.target.$gearLocked = !0, e.target.setXY(e.target.x - e.startValue.f1, e.target.y - e.startValue.f2), e.target.$gearLocked = !1, e.completed = !0, this.$totalTasks--, t.GTimer.inst.remove(e.$shake, e), this.checkAllComplete())
        }, e.prototype.setup = function (n) {
            var s = this;
            this.name = n.attributes.name;
            var r = n.attributes.options;
            r && (this.$options = parseInt(r)), this.$autoPlay = "true" == n.attributes.autoPlay, this.$autoPlay && ((r = n.attributes.autoPlayRepeat) && (this.autoPlayRepeat = parseInt(r)), (r = n.attributes.autoPlayDelay) && (this.autoPlayDelay = parseFloat(r))), n.children.forEach(function (n) {
                if ("item" == n.nodeName) {
                    var o = new i;
                    switch (s.$items.push(o), o.time = parseInt(n.attributes.time) / e.FRAME_RATE, o.targetId = n.attributes.target, r = n.attributes.type) {
                    case "XY":
                        o.type = 0;
                        break;
                    case "Size":
                        o.type = 1;
                        break;
                    case "Scale":
                        o.type = 2;
                        break;
                    case "Pivot":
                        o.type = 3;
                        break;
                    case "Alpha":
                        o.type = 4;
                        break;
                    case "Rotation":
                        o.type = 5;
                        break;
                    case "Color":
                        o.type = 6;
                        break;
                    case "Animation":
                        o.type = 7;
                        break;
                    case "Visible":
                        o.type = 8;
                        break;
                    case "Sound":
                        o.type = 9;
                        break;
                    case "Transition":
                        o.type = 10;
                        break;
                    case "Shake":
                        o.type = 11;
                        break;
                    case "ColorFilter":
                        o.type = 12;
                        break;
                    case "Skew":
                        o.type = 13;
                        break;
                    default:
                        o.type = 14
                    }
                    if (o.tween = "true" == n.attributes.tween, o.label = n.attributes.label, o.tween) {
                        o.duration = parseInt(n.attributes.duration) / e.FRAME_RATE, o.time + o.duration > s.$maxTime && (s.$maxTime = o.time + o.duration), (r = n.attributes.ease) && (o.easeType = t.ParseEaseType(r)), (r = n.attributes.repeat) && (o.repeat = parseInt(r)), o.yoyo = "true" == n.attributes.yoyo, o.label2 = n.attributes.label2;
                        var h = n.attributes.endValue;
                        h ? (s.decodeValue(o.type, n.attributes.startValue, o.startValue), s.decodeValue(o.type, h, o.endValue)) : (o.tween = !1, s.decodeValue(o.type, n.attributes.startValue, o.value))
                    } else o.time > s.$maxTime && (s.$maxTime = o.time), s.decodeValue(o.type, n.attributes.value, o.value)
                }
            }, this)
        }, e.prototype.decodeValue = function (e, i, n) {
            var s;
            switch (e) {
            case 0:
            case 1:
            case 3:
            case 13:
                "-" == (s = i.split(","))[0] ? n.b1 = !1: (n.f1 = parseFloat(s[0]), n.b1 = !0), "-" == s[1] ? n.b2 = !1 : (n.f2 = parseFloat(s[1]), n.b2 = !0);
                break;
            case 4:
                n.f1 = parseFloat(i);
                break;
            case 5:
                n.i = parseInt(i);
                break;
            case 2:
                s = i.split(","), n.f1 = parseFloat(s[0]), n.f2 = parseFloat(s[1]);
                break;
            case 6:
                n.c = t.utils.StringUtil.convertFromHtmlColor(i);
                break;
            case 7:
                "-" == (s = i.split(","))[0] ? n.b1 = !1: (n.i = parseInt(s[0]), n.b1 = !0), n.b = "p" == s[1];
                break;
            case 8:
                n.b = "true" == i;
                break;
            case 9:
                if (s = i.split(","), n.s = s[0], s.length > 1) {
                    var r = parseInt(s[1]);
                    n.f1 = 0 == r || 100 == r ? 1 : r / 100
                } else n.f1 = 1;
                break;
            case 10:
                s = i.split(","), n.s = s[0], s.length > 1 ? n.i = parseInt(s[1]) : n.i = 1;
                break;
            case 11:
                s = i.split(","), n.f1 = parseFloat(s[0]), n.f2 = parseFloat(s[1]);
                break;
            case 12:
                s = i.split(","), n.f1 = parseFloat(s[0]), n.f2 = parseFloat(s[1]), n.f3 = parseFloat(s[2]), n.f4 = parseFloat(s[3])
            }
        }, e.OPTION_IGNORE_DISPLAY_CONTROLLER = 1, e.OPTION_AUTO_STOP_DISABLED = 0, e.OPTION_AUTO_STOP_AT_END = 0, e.FRAME_RATE = 24, e
    }();
    t.Transition = e;
    var i = function () {
            function e() {
                this.time = 0, this.type = 0, this.duration = 0, this.repeat = 0, this.yoyo = !1, this.tween = !1, this.tweenTimes = 0, this.completed = !1, this.lockToken = 0, this.easeType = t.ParseEaseType("Quad.Out"), this.value = new n, this.startValue = new n, this.endValue = new n
            }
            return e.prototype.$shake = function (t, e) {
                t.$shakeItem(this, e)
            }, e
        }(),
        n = function () {
            return function () {
                this.f1 = 0, this.f2 = 0, this.f3 = 0, this.f4 = 0, this.i = 0, this.c = 0, this.b = !1, this.b1 = !0, this.b2 = !0
            }
        }()
}(fgui || (fgui = {})),
function (t) {
    var e = function (e) {
        function i() {
            var i = e.call(this) || this;
            return i.$requestingCmd = 0, i.focusable = !0, i.$uiSources = [], i.bringToFrontOnClick = t.UIConfig.bringWindowToFrontOnClick, i.on("added", i.$onShown, i), i.on("removed", i.$onHidden, i), i.on(t.InteractiveEvents.Down, i.$mouseDown, i), i
        }
        return __extends(i, e), i.prototype.addUISource = function (t) {
            this.$uiSources.push(t)
        }, Object.defineProperty(i.prototype, "contentPane", {
            get: function () {
                return this.$contentPane
            }, set: function (t) {
                this.$contentPane != t && (null != this.$contentPane && this.removeChild(this.$contentPane), this.$contentPane = t, null != this.$contentPane && (this.addChild(this.$contentPane), this.setSize(this.$contentPane.width, this.$contentPane.height), this.$contentPane.addRelation(this, 24), this.$frame = this.$contentPane.getChild("frame"), null != this.$frame && (this.closeButton = this.$frame.getChild("closeButton"), this.dragArea = this.$frame.getChild("dragArea"), this.contentArea = this.$frame.getChild("contentArea"))))
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "frame", {
            get: function () {
                return this.$frame
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "closeButton", {
            get: function () {
                return this.$closeButton
            }, set: function (t) {
                null != this.$closeButton && this.$closeButton.removeClick(this.closeEventHandler, this), this.$closeButton = t, null != this.$closeButton && this.$closeButton.click(this.closeEventHandler, this)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "dragArea", {
            get: function () {
                return this.$dragArea
            }, set: function (e) {
                this.$dragArea != e && (null != this.$dragArea && (this.$dragArea.draggable = !1, this.$dragArea.off("__dragStart", this.$dragStart, this)), this.$dragArea = e, null != this.$dragArea && (this.$dragArea instanceof t.GGraph && this.$dragArea.drawRect(0, 0, 0, 0, 0), this.$dragArea.draggable = !0, this.$dragArea.on("__dragStart", this.$dragStart, this)))
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "contentArea", {
            get: function () {
                return this.$contentArea
            }, set: function (t) {
                this.$contentArea = t
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.show = function () {
            t.GRoot.inst.showWindow(this)
        }, i.prototype.showOn = function (t) {
            t.showWindow(this)
        }, i.prototype.hide = function () {
            this.isShowing && this.doHideAnimation()
        }, i.prototype.hideImmediately = function () {
            (this.parent && this.parent instanceof t.GRoot ? this.parent : t.GRoot.inst).hideWindowImmediately(this)
        }, i.prototype.centerOn = function (t, e) {
            void 0 === e && (e = !1), this.setXY(Math.round(.5 * (t.width - this.width)), Math.round(.5 * (t.height - this.height))), e && (this.addRelation(t, 3), this.addRelation(t, 10))
        }, i.prototype.toggleVisible = function () {
            this.isTop ? this.hide() : this.show()
        }, Object.defineProperty(i.prototype, "isShowing", {
            get: function () {
                return null != this.parent
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "isTop", {
            get: function () {
                return null != this.parent && this.parent.getChildIndex(this) == this.parent.numChildren - 1
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "modal", {
            get: function () {
                return this.$modal
            }, set: function (t) {
                this.$modal = t
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.bringToFront = function () {
            this.root.bringToFront(this)
        }, i.prototype.showModalWait = function (e, i) {
            void 0 === i && (i = 0), 0 != i && (this.$requestingCmd = i), t.UIConfig.windowModalWaiting && (this.$modalWaitPane || (this.$modalWaitPane = t.UIPackage.createObjectFromURL(t.UIConfig.windowModalWaiting)), this.layoutModalWaitPane(e), this.addChild(this.$modalWaitPane))
        }, i.prototype.layoutModalWaitPane = function (t) {
            if (null != this.$contentArea) {
                var e = this.$frame.localToGlobal();
                e = this.globalToLocal(e.x, e.y, e), this.$modalWaitPane.setXY(e.x + this.$contentArea.x, e.y + this.$contentArea.y), this.$modalWaitPane.setSize(this.$contentArea.width, this.$contentArea.height), t && t.length && (this.$modalWaitPane.text = t)
            } else this.$modalWaitPane.setSize(this.width, this.height)
        }, i.prototype.closeModalWait = function (t) {
            return void 0 === t && (t = 0), (0 == t || this.$requestingCmd == t) && (this.$requestingCmd = 0, this.$modalWaitPane && null != this.$modalWaitPane.parent && this.removeChild(this.$modalWaitPane), !0)
        }, Object.defineProperty(i.prototype, "modalWaiting", {
            get: function () {
                return this.$modalWaitPane && null != this.$modalWaitPane.parent
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.init = function () {
            var t = this;
            this.$inited || this.$loading || (this.$uiSources.length > 0 ? (this.$loading = !1, this.$uiSources.forEach(function (e) {
                e.loaded || (e.load(t.$uiLoadComplete, t), t.$loading = !0)
            }, this), this.$loading || this.$init()) : this.$init())
        }, i.prototype.onInit = function () {}, i.prototype.onShown = function () {}, i.prototype.onHide = function () {}, i.prototype.doShowAnimation = function () {
            this.onShown()
        }, i.prototype.doHideAnimation = function () {
            this.hideImmediately()
        }, i.prototype.$uiLoadComplete = function () {
            for (var t = this.$uiSources.length, e = 0; e < t; e++)
                if (!this.$uiSources[e].loaded) return;
            this.$loading = !1, this.$init()
        }, i.prototype.$init = function () {
            this.$inited = !0, this.onInit(), this.isShowing && this.doShowAnimation()
        }, i.prototype.dispose = function () {
            this.off("added", this.$onShown, this), this.off("removed", this.$onHidden, this), this.off(t.InteractiveEvents.Down, this.$mouseDown, this), this.$dragArea && this.$dragArea.off("__dragStart", this.$dragStart, this), null != this.parent && this.hideImmediately(), this.$modalWaitPane && this.$modalWaitPane.dispose(), this.$contentPane && this.$contentPane.dispose(), e.prototype.dispose.call(this)
        }, i.prototype.closeEventHandler = function (t) {
            this.hide()
        }, i.prototype.$onShown = function (t) {
            this.$inited ? this.doShowAnimation() : this.init()
        }, i.prototype.$onHidden = function (t) {
            this.closeModalWait(), this.onHide()
        }, i.prototype.$mouseDown = function (t) {
            this.isShowing && this.bringToFrontOnClick && this.bringToFront()
        }, i.prototype.$dragStart = function (e) {
            t.GObject.castFromNativeObject(e.currentTarget).stopDrag(), this.startDrag(e.data.pointerID)
        }, i
    }(t.GComponent);
    t.Window = e
}(fgui || (fgui = {})),
function (t) {
    ! function (e) {
        var i = function (t) {
            function e(e, i) {
                var n = t.call(this, e, i) || this;
                return n.stageRotation = 0, n.stageScaleX = 1, n.stageScaleY = 1, n
            }
            return __extends(e, t), e.prototype.mapPositionToPoint = function (t, e, i) {
                var n = void 0,
                    s = this.interactionDOMElement;
                n = s.parentElement ? s.getBoundingClientRect() : {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                };
                var r = navigator.isCocoonJS ? this.resolution : 1 / this.resolution,
                    o = document.documentElement,
                    h = e -= n.left + window.pageXOffset - o.clientLeft,
                    a = i -= n.top + window.pageYOffset - o.clientTop;
                90 == this.stageRotation ? (h = i, a = n.width - e) : -90 == this.stageRotation && (h = n.height - i, a = e), h = h * this.stageScaleX * r, a = a * this.stageScaleY * r, t.set(h, a)
            }, e
        }(t.interaction.InteractionManager);
        e.InteractionManager = i, t.CanvasRenderer.registerPlugin("interaction", t.extras.InteractionManager), t.WebGLRenderer.registerPlugin("interaction", t.extras.InteractionManager)
    }(t.extras || (t.extras = {}))
}(PIXI || (PIXI = {})),
function (t) {
    ! function (e) {
        var i = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.$flipX = !1, e.$flipY = !1, e
            }
            return __extends(e, t), e.prototype.updateHorizontalVertices = function () {
                var t = this.vertices,
                    e = this._topHeight + this._bottomHeight,
                    i = this._height > e ? 1 : this._height / e;
                t[9] = t[11] = t[13] = t[15] = (this.$flipY ? this._bottomHeight : this._topHeight) * i, t[17] = t[19] = t[21] = t[23] = this._height - (this.$flipY ? this._topHeight : this._bottomHeight) * i, t[25] = t[27] = t[29] = t[31] = this._height
            }, e.prototype.updateVerticalVertices = function () {
                var t = this.vertices,
                    e = this._leftWidth + this._rightWidth,
                    i = this._width > e ? 1 : this._width / e;
                t[2] = t[10] = t[18] = t[26] = (this.$flipX ? this._rightWidth : this._leftWidth) * i, t[4] = t[12] = t[20] = t[28] = this._width - (this.$flipX ? this._leftWidth : this._rightWidth) * i, t[6] = t[14] = t[22] = t[30] = this._width
            }, e.prototype._refresh = function () {
                if (!(isNaN(this._leftWidth) || isNaN(this._topHeight) || isNaN(this._rightWidth) || isNaN(this._bottomHeight))) {
                    t.prototype._refresh.call(this);
                    var e = this.uvs;
                    if (this.$flipX) {
                        var i = e[0],
                            n = e[2];
                        e[0] = e[6], e[2] = e[4], e[6] = i, e[4] = n, i = e[8], n = e[10], e[8] = e[14], e[10] = e[12], e[14] = i, e[12] = n, i = e[16], n = e[18], e[16] = e[22], e[18] = e[20], e[22] = i, e[20] = n, i = e[24], n = e[26], e[24] = e[30], e[26] = e[28], e[30] = i, e[28] = n
                    }
                    if (this.$flipY) {
                        var s = e[1],
                            r = e[9];
                        e[1] = e[25], e[9] = e[17], e[25] = s, e[17] = r, s = e[3], r = e[11], e[3] = e[27], e[11] = e[19], e[27] = s, e[19] = r, s = e[5], r = e[13], e[5] = e[29], e[13] = e[21], e[29] = s, e[21] = r, s = e[7], r = e[15], e[7] = e[31], e[15] = e[23], e[31] = s, e[23] = r
                    }
                }
            }, Object.defineProperty(e.prototype, "flipX", {
                get: function () {
                    return this.$flipX
                }, set: function (t) {
                    this.$flipX != t && (this.$flipX = t, this._refresh())
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "flipY", {
                get: function () {
                    return this.$flipY
                }, set: function (t) {
                    this.$flipY != t && (this.$flipY = t, this._refresh())
                }, enumerable: !0,
                configurable: !0
            }), e
        }(t.mesh.NineSlicePlane);
        e.NineSlicePlane = i
    }(t.extras || (t.extras = {}))
}(PIXI || (PIXI = {})),
function (t) {
    ! function (e) {
        var i = function (t) {
            function e(e, i) {
                var n = t.call(this, i) || this;
                return n.$flipX = !1, n.$flipY = !1, n.$frameId = e, n
            }
            return __extends(e, t), Object.defineProperty(e.prototype, "flipX", {
                get: function () {
                    return this.$flipX
                }, set: function (t) {
                    this.$flipX != t && (this.$flipX = t, fgui.GTimer.inst.callLater(this.updateUvs, this))
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "flipY", {
                get: function () {
                    return this.$flipY
                }, set: function (t) {
                    this.$flipY != t && (this.$flipY = t, fgui.GTimer.inst.callLater(this.updateUvs, this))
                }, enumerable: !0,
                configurable: !0
            }), e.prototype.combineCacheId = function (t, e) {
                return this.$frameId && "" != this.$frameId ? this.$frameId + (t ? "_fx" : "") + (e ? "_fy" : "") : null
            }, e.prototype.getTextureFromCache = function (t, i) {
                var n = this.combineCacheId(t, i);
                if (null == n) return this._texture;
                var s = e.$cachedTexturePool[n];
                return s ? s.refCount++ : (s = {
                    refCount: 1,
                    texture: this.createFlippedTexture(this._texture, t, i)
                }, e.$cachedTexturePool[n] = s), s.texture
            }, e.prototype.tryRemoveTextureCache = function (t, i) {
                var n = this.combineCacheId(t, i);
                if (!n) return !1;
                var s = e.$cachedTexturePool[n];
                return !!s && (s.refCount--, s.refCount <= 0 && (s.texture.destroy(), delete e.$cachedTexturePool[n]), !0)
            }, e.prototype.createFlippedTexture = function (t, e, i) {
                var n = t.clone(),
                    s = n._uvs;
                if (this.$flipX) {
                    var r = s.x0,
                        o = s.x3;
                    s.x0 = s.x1, s.x1 = r, s.x3 = s.x2, s.x2 = o
                }
                if (this.$flipY) {
                    var h = s.y0,
                        a = s.y1;
                    s.y0 = s.y3, s.y3 = h, s.y1 = s.y2, s.y2 = a
                }
                return s.uvsUint32[0] = (65535 * s.y0 & 65535) << 16 | 65535 * s.x0 & 65535, s.uvsUint32[1] = (65535 * s.y1 & 65535) << 16 | 65535 * s.x1 & 65535, s.uvsUint32[2] = (65535 * s.y2 & 65535) << 16 | 65535 * s.x2 & 65535, s.uvsUint32[3] = (65535 * s.y3 & 65535) << 16 | 65535 * s.x3 & 65535, n
            }, e.prototype.updateUvs = function () {
                if (this._texture && (this.$flipX || this.$flipY)) {
                    var t = this.getTextureFromCache(this.$flipX, this.$flipY);
                    this._texture != t && (this._texture = t)
                }
            }, e.prototype.destroy = function (e) {
                this.tryRemoveTextureCache(this.$flipX, this.$flipY), t.prototype.destroy.call(this, e)
            }, e.$cachedTexturePool = {}, e
        }(t.Sprite);
        e.Sprite = i
    }(t.extras || (t.extras = {}))
}(PIXI || (PIXI = {})),
function (t) {
    var e = function () {
        function t() {}
        return t.defaultFont = "Arial", t.modalLayerColor = 3355443, t.modalLayerAlpha = .2, t.defaultScrollSpeed = 25, t.defaultScrollBarDisplay = 1, t.defaultScrollTouchEffect = !0, t.defaultScrollBounceEffect = !0, t.defaultScrollDecelerationRate = .967, t.defaultComboBoxVisibleItemCount = 10, t.touchScrollSensitivity = 20, t.touchDragSensitivity = 10, t.bringWindowToFrontOnClick = !0, t
    }();
    t.UIConfig = e
}(fgui || (fgui = {})),
function (t) {
    var e, i;
    e = t.controller || (t.controller = {}), i = function () {
        function t() {}
        return t.create = function (t) {
            switch (t) {
            case "play_transition":
                return new e.PlayTransitionAction;
            case "change_page":
                return new e.ChangePageAction
            }
            return null
        }, t.prototype.execute = function (t, e, i) {
            this.fromPage && 0 != this.fromPage.length && -1 == this.fromPage.indexOf(e) || this.toPage && 0 != this.toPage.length && -1 == this.toPage.indexOf(i) ? this.leave(t) : this.enter(t)
        }, t.prototype.enter = function (t) {}, t.prototype.leave = function (t) {}, t.prototype.setup = function (t) {
            var e;
            (e = t.attributes.fromPage) && (this.fromPage = e.split(",")), (e = t.attributes.toPage) && (this.toPage = e.split(","))
        }, t
    }(), e.Action = i
}(fgui || (fgui = {})),
function (t) {
    var e, i;
    e = t.controller || (t.controller = {}), i = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t), e.prototype.enter = function (t) {
            var e;
            if (this.controllerName && (e = this.objectId ? t.parent.getChildById(this.objectId) : t.parent)) {
                var i = e.getController(this.controllerName);
                i && i != t && !i.$updating && (i.selectedPageId = this.targetPage)
            }
        }, e.prototype.setup = function (e) {
            t.prototype.setup.call(this, e), this.objectId = e.attributes.objectId, this.controllerName = e.attributes.controller, this.targetPage = e.attributes.targetPage
        }, e
    }(e.Action), e.ChangePageAction = i
}(fgui || (fgui = {})),
function (t) {
    ! function (t) {
        var e = function (e) {
            function i() {
                var t = e.call(this) || this;
                return t.$selectedIndex = 0, t.$previousIndex = 0, t.$pageIds = [], t.$pageNames = [], t.$selectedIndex = -1, t.$previousIndex = -1, t
            }
            return __extends(i, e), Object.defineProperty(i.prototype, "name", {
                get: function () {
                    return this.$name
                }, set: function (t) {
                    this.$name = t
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(i.prototype, "parent", {
                get: function () {
                    return this.$parent
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(i.prototype, "selectedIndex", {
                get: function () {
                    return this.$selectedIndex
                }, set: function (t) {
                    if (this.$selectedIndex != t) {
                        if (t > this.$pageIds.length - 1) throw new Error("index out of range: " + t);
                        this.$updating = !0, this.$previousIndex = this.$selectedIndex, this.$selectedIndex = t, this.$parent.applyController(this), this.emit("__stateChanged", this), this.$updating = !1
                    }
                }, enumerable: !0,
                configurable: !0
            }), i.prototype.setSelectedIndex = function (t) {
                if (void 0 === t && (t = 0), this.$selectedIndex != t) {
                    if (t > this.$pageIds.length - 1) throw new Error("index out of range: " + t);
                    this.$updating = !0, this.$previousIndex = this.$selectedIndex, this.$selectedIndex = t, this.$parent.applyController(this), this.$updating = !1
                }
            }, Object.defineProperty(i.prototype, "previsousIndex", {
                get: function () {
                    return this.$previousIndex
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(i.prototype, "selectedPage", {
                get: function () {
                    return -1 == this.$selectedIndex ? null : this.$pageNames[this.$selectedIndex]
                }, set: function (t) {
                    this.selectedIndex = Math.max(0, this.$pageNames.indexOf(t))
                }, enumerable: !0,
                configurable: !0
            }), i.prototype.setSelectedPage = function (t) {
                this.setSelectedIndex(Math.max(0, this.$pageNames.indexOf(t)))
            }, Object.defineProperty(i.prototype, "previousPage", {
                get: function () {
                    return -1 == this.$previousIndex ? null : this.$pageNames[this.$previousIndex]
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(i.prototype, "pageCount", {
                get: function () {
                    return this.$pageIds.length
                }, enumerable: !0,
                configurable: !0
            }), i.prototype.getPageName = function (t) {
                return void 0 === t && (t = 0), this.$pageNames[t]
            }, i.prototype.addPage = function (t) {
                void 0 === t && (t = ""), this.addPageAt(t, this.$pageIds.length)
            }, i.prototype.addPageAt = function (t, e) {
                void 0 === e && (e = 0);
                var n = "" + i.$nextPageId++;
                e == this.$pageIds.length ? (this.$pageIds.push(n), this.$pageNames.push(t)) : (this.$pageIds.splice(e, 0, n), this.$pageNames.splice(e, 0, t))
            }, i.prototype.removePage = function (t) {
                var e = this.$pageNames.indexOf(t); - 1 != e && (this.$pageIds.splice(e, 1), this.$pageNames.splice(e, 1), this.$selectedIndex >= this.$pageIds.length ? this.selectedIndex = this.$selectedIndex - 1 : this.$parent.applyController(this))
            }, i.prototype.removePageAt = function (t) {
                void 0 === t && (t = 0), this.$pageIds.splice(t, 1), this.$pageNames.splice(t, 1), this.$selectedIndex >= this.$pageIds.length ? this.selectedIndex = this.$selectedIndex - 1 : this.$parent.applyController(this)
            }, i.prototype.clearPages = function () {
                this.$pageIds.length = 0, this.$pageNames.length = 0, -1 != this.$selectedIndex ? this.selectedIndex = -1 : this.$parent.applyController(this)
            }, i.prototype.hasPage = function (t) {
                return this.$pageNames.indexOf(t) >= 0
            }, i.prototype.getPageIndexById = function (t) {
                return this.$pageIds.indexOf(t)
            }, i.prototype.getPageIdByName = function (t) {
                var e = this.$pageNames.indexOf(t);
                return -1 != e ? this.$pageIds[e] : null
            }, i.prototype.getPageNameById = function (t) {
                var e = this.$pageIds.indexOf(t);
                return -1 != e ? this.$pageNames[e] : null
            }, i.prototype.getPageId = function (t) {
                return void 0 === t && (t = 0), this.$pageIds[t]
            }, Object.defineProperty(i.prototype, "selectedPageId", {
                get: function () {
                    return -1 == this.$selectedIndex ? null : this.$pageIds[this.$selectedIndex]
                }, set: function (t) {
                    this.selectedIndex = this.$pageIds.indexOf(t)
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(i.prototype, "oppositePageId", {
                set: function (t) {
                    this.$pageIds.indexOf(t) > 0 ? this.selectedIndex = 0 : this.$pageIds.length > 1 && (this.selectedIndex = 1)
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(i.prototype, "previousPageId", {
                get: function () {
                    return -1 == this.$previousIndex ? null : this.$pageIds[this.$previousIndex]
                }, enumerable: !0,
                configurable: !0
            }), i.prototype.executeActions = function () {
                var t = this;
                this.$actions && this.$actions.length > 0 && this.$actions.forEach(function (e) {
                    e.execute(t, t.previousPageId, t.selectedPageId)
                })
            }, i.prototype.setup = function (e) {
                var i = this;
                this.$name = e.attributes.name, this.$autoRadioGroupDepth = "true" == e.attributes.autoRadioGroupDepth;
                var n = e.attributes.pages;
                if (n)
                    for (var s = n.split(","), r = s.length, o = 0; o < r; o += 2) this.$pageIds.push(s[o]), this.$pageNames.push(s[o + 1]);
                var h, a, l = e.children;
                (l.length > 0 && (this.$actions = this.$actions || [], l.forEach(function (e) {
                    var n = t.Action.create(e.attributes.type);
                    n.setup(e), i.$actions.push(n)
                })), n = e.attributes.transitions) && (this.$actions = this.$actions || [], n.split(",").forEach(function (e) {
                    if (e && e.length) {
                        var n = new t.PlayTransitionAction;
                        h = e.indexOf("="), n.transitionName = e.substr(h + 1), e = e.substring(0, h), h = e.indexOf("-"), (a = parseInt(e.substring(h + 1))) < i.$pageIds.length && (n.toPage = [i.$pageIds[a]]), "*" != (e = e.substring(0, h)) && (a = parseInt(e)) < i.$pageIds.length && (n.fromPage = [i.$pageIds[a]]), n.stopOnExit = !0, i.$actions.push(n)
                    }
                }));
                this.$parent && this.$pageIds.length > 0 ? this.$selectedIndex = 0 : this.$selectedIndex = -1
            }, i.$nextPageId = 0, i
        }(PIXI.utils.EventEmitter);
        t.Controller = e
    }(t.controller || (t.controller = {}))
}(fgui || (fgui = {})),
function (t) {
    ! function (t) {
        var e = function () {
            function t() {}
            return Object.defineProperty(t.prototype, "controller", {
                set: function (t) {
                    this.$controller = t
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "name", {
                get: function () {
                    return this.$id ? this.$controller.getPageNameById(this.$id) : null
                }, set: function (t) {
                    this.$id = this.$controller.getPageIdByName(t)
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "index", {
                get: function () {
                    return this.$id ? this.$controller.getPageIndexById(this.$id) : -1
                }, set: function (t) {
                    this.$id = this.$controller.getPageId(t)
                }, enumerable: !0,
                configurable: !0
            }), t.prototype.clear = function () {
                this.$id = null
            }, Object.defineProperty(t.prototype, "id", {
                get: function () {
                    return this.$id
                }, set: function (t) {
                    this.$id = t
                }, enumerable: !0,
                configurable: !0
            }), t
        }();
        t.PageOption = e
    }(t.controller || (t.controller = {}))
}(fgui || (fgui = {})),
function (t) {
    var e, i;
    e = t.controller || (t.controller = {}), i = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.repeat = 1, e.delay = 0, e.stopOnExit = !1, e
        }
        return __extends(e, t), e.prototype.enter = function (t) {
            var e = t.parent.getTransition(this.transitionName);
            e && (this.$currentTransition && this.$currentTransition.playing ? e.changeRepeat(this.repeat) : e.play({
                times: this.repeat,
                delay: this.delay
            }), this.$currentTransition = e)
        }, e.prototype.leave = function (t) {
            this.stopOnExit && this.$currentTransition && (this.$currentTransition.stop(), this.$currentTransition = null)
        }, e.prototype.setup = function (e) {
            var i;
            t.prototype.setup.call(this, e), this.transitionName = e.attributes.transition, (i = e.attributes.repeat) && (this.repeat = parseInt(i)), (i = e.attributes.delay) && (this.delay = parseFloat(i)), this.stopOnExit = "true" == e.attributes.stopOnExit
        }, e
    }(e.Action), e.PlayTransitionAction = i
}(fgui || (fgui = {})),
function (t) {
    var e = function () {
        return function () {
            this.x = 0, this.y = 0, this.offsetX = 0, this.offsetY = 0, this.width = 0, this.height = 0, this.advance = 0, this.lineHeight = 0, this.channel = 0
        }
    }();
    t.BMGlyph = e
}(fgui || (fgui = {})),
function (t) {
    var e = function () {
        return function () {
            this.size = 0, this.glyphs = {}
        }
    }();
    t.BitmapFont = e
}(fgui || (fgui = {})),
function (t) {
    var e = function (t) {
        function e(e) {
            var i = t.call(this, e) || this;
            return i._fillDir = 0, i._flip = 0, i._percent = 0, i
        }
        return __extends(e, t), Object.defineProperty(e.prototype, "flip", {
            get: function () {
                return this._flip
            }, set: function (t) {
                t != this._flip && (this._flip = t)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "fillAmount", {
            get: function () {
                return "number" == typeof this._fillAmount ? this._fillAmount : 100
            }, set: function (t) {
                t != this._fillAmount && (this._fillAmount = t)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "fillBegin", {
            get: function () {
                return this._fillBegin
            }, set: function (t) {
                t != this._fillBegin && (this._fillBegin = t)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "fillMode", {
            get: function () {
                return this._fillMode
            }, set: function (t) {
                t != this._fillMode && (this._fillMode = t, this.checkAndFixFillBegin())
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "fillDirection", {
            get: function () {
                return this._fillDir
            }, set: function (t) {
                t != this._fillDir && (this._fillDir = t, this.checkAndFixFillBegin())
            }, enumerable: !0,
            configurable: !0
        }), e.prototype.checkAndFixFillBegin = function () {
            switch (this._fillMode) {
            case 1:
                0 != this._fillBegin && 1 != this._fillBegin && (this._fillBegin = 0);
                break;
            case 2:
                2 != this._fillBegin && 3 != this._fillBegin && (this._fillBegin = 2);
                break;
            case 3:
                4 != this._fillBegin && 6 != this._fillBegin && 5 != this._fillBegin && 7 != this._fillBegin && (this._fillBegin = 4);
                break;
            case 4:
            case 5:
                0 != this._fillBegin && 1 != this._fillBegin && 2 != this._fillBegin && 3 != this._fillBegin && (this._fillBegin = 2)
            }
        }, Object.defineProperty(e.prototype, "amount", {
            get: function () {
                return this._percent
            }, set: function (t) {
                this._percent = t
            }, enumerable: !0,
            configurable: !0
        }), e
    }(PIXI.Sprite);
    t.FillSprite = e
}(fgui || (fgui = {})),
function (t) {
    var e = function () {
        return function () {
            this.addDelay = 0
        }
    }();
    t.Frame = e
}(fgui || (fgui = {})),
function (t) {
    var e = function () {
        function e() {
            this.$requestToShow = !1, this.$scaleX = 1, this.$scaleY = 1
        }
        return Object.defineProperty(e, "inst", {
            get: function () {
                return e.$instance || (e.$instance = new e), e.$instance
            }, enumerable: !0,
            configurable: !0
        }), e.prototype.initialize = function (e, i) {
            var n;
            this.$canvas = i, this.$delegateDiv || (n = document.createElement("div"), this.$delegateDiv = n, n.id = "__delegateDiv", e.appendChild(n), this.initDomPos(n), this.$wrapper = document.createElement("div"), this.initDomPos(this.$wrapper), this.$wrapper.style.width = "0px", this.$wrapper.style.height = "0px", this.$wrapper.style.left = "0px", this.$wrapper.style.top = "-100px", this.setTransform(this.$wrapper, "0% 0% 0px"), n.appendChild(this.$wrapper), t.GRoot.inst.on(t.InteractiveEvents.Click, this.canvasClickHandler, this), this.initInputElement(!0), this.initInputElement(!1))
        }, e.prototype.isInputOn = function () {
            return null != this.$input
        }, e.prototype.canvasClickHandler = function (t) {
            this.$requestToShow ? (this.$requestToShow = !1, this.$input.onClickHandler(t), this.show()) : this.$curEle && (this.clearInputElement(), this.$curEle.blur(), this.$curEle = null)
        }, e.prototype.isInputShown = function () {
            return null != this.$input
        }, e.prototype.isCurrentInput = function (t) {
            return this.$input == t
        }, e.prototype.initDomPos = function (t) {
            t.style.position = "absolute", t.style.left = "0px", t.style.top = "0px", t.style.border = "none", t.style.padding = "0"
        }, e.prototype.setTransform = function (t, e, i) {
            var n = t.style;
            n.transformOrigin = n.webkitTransformOrigin = n.msTransformOrigin = n.mozTransformOrigin = n.oTransformOrigin = e, i && i.length > 0 && (n.transform = n.webkitTransform = n.msTransform = n.mozTransform = n.oTransform = i)
        }, e.prototype.updateSize = function (t, e) {
            if (this.$canvas) {
                this.$scaleX = t, this.$scaleY = e, this.$delegateDiv.style.left = this.$canvas.style.left, this.$delegateDiv.style.top = this.$canvas.style.top;
                var i = this.$canvas.style;
                this.setTransform(this.$delegateDiv, "0% 0% 0px", i.transform || i.webkitTransform || i.msTransform || i.mozTransform || i.oTransform)
            }
        }, e.prototype.initInputElement = function (t) {
            var e, i = this;
            t ? ((e = document.createElement("textarea")).style.resize = "none", this.$multiLine = e, e.id = "stageTextAreaEle") : (e = document.createElement("input"), this.$singleLine = e, e.type = "text", e.id = "stageInputEle"), this.$wrapper.appendChild(e), e.setAttribute("tabindex", "-1"), e.style.width = "1px", e.style.height = "12px", this.initDomPos(e);
            var n = e.style;
            n.outline = "thin", n.background = "none", n.overflow = "hidden", n.wordBreak = "break-all", n.opacity = 0, e.oninput = function (t) {
                i.$input && i.$input.onInputHandler()
            }
        }, e.prototype.show = function () {
            var e = this;
            t.GTimer.inst.callLater(function () {
                e.$curEle.style.opacity = "1"
            }, this)
        }, e.prototype.disconnect = function (t) {
            null != this.$input && this.$input != t || (this.clearInputElement(), this.$curEle && this.$curEle.blur())
        }, e.prototype.clearAttributes = function (t) {
            if (this.$curEle)
                for (var e in t) this.$curEle.removeAttribute(e)
        }, e.prototype.clearInputElement = function () {
            if (this.$curEle) {
                this.$curEle.value = "", this.$curEle.onblur = null;
                var t = this.$curEle.style;
                t.width = "1px", t.height = "12px", t.left = "0px", t.top = "0px", t.opacity = "0";
                (this.$singleLine == this.$curEle ? this.$multiLine : this.$singleLine).style.display = "block", this.$wrapper.style.left = "0px", this.$wrapper.style.top = "-100px", this.$wrapper.style.height = "0px", this.$wrapper.style.width = "0px"
            }
            this.$input && (this.$input.onDisconnect(), this.$input = null, e.isTyping = !1)
        }, e.prototype.requestInput = function (t) {
            var i;
            return this.clearInputElement(), this.$input = t, e.isTyping = !0, this.$input.textField.multipleLine ? (this.$curEle = this.$multiLine, i = this.$singleLine) : (this.$curEle = this.$singleLine, i = this.$multiLine), i.style.display = "none", this.$curEle
        }, e.isTyping = !1, e
    }();
    t.HTMLInput = e
}(fgui || (fgui = {})),
function (t) {
    t.isUIObject = function (t) {
        return t && "UIOwner" in t && null != t.UIOwner
    }
}(fgui || (fgui = {})),
function (t) {
    var e = function (e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.$requestToShow = !1, i.inputElement = null, i.inputDiv = null, i.$scaleX = 0, i.$scaleY = 0, i.textValue = "", i.colorValue = 16777215, i.$attrsCache = {}, i.$textfield = t, i
        }
        return __extends(i, e), i.prototype.$addToStage = function () {
            this.htmlInput = t.HTMLInput.inst
        }, i.prototype.initElement = function () {
            var t = this.$textfield.localToGlobal(0, 0),
                e = t.x,
                i = t.y,
                n = this.htmlInput.$scaleX,
                s = this.htmlInput.$scaleY;
            this.$textfield.multipleLine || (this.inputElement.style.top = -this.$textfield.leading * s + "px"), this.inputDiv.style.top = (i + 1) * s + "px", this.inputDiv.style.left = e * n + "px";
            for (var r = this.$textfield, o = 1, h = 1, a = 0; r.parent;) o *= r.scaleX, h *= r.scaleY, a += r.rotation, r = r.parent;
            var l = this.inputDiv.style;
            l.transform = l.webkitTransform = l.msTransform = l.mozTransform = l.oTransform = "rotate(" + a + "deg)", this.$scaleX = n * o, this.$scaleY = s * h
        }, Object.defineProperty(i.prototype, "textField", {
            get: function () {
                return this.$textfield
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.$show = function () {
            if (this.htmlInput.isCurrentInput(this)) this.inputElement.onblur = null;
            else {
                for (var t in this.inputElement = this.htmlInput.requestInput(this), this.$textfield.multipleLine || (this.inputElement.type = this.$textfield.type), this.$attrsCache) this.inputElement.setAttribute(t, this.$attrsCache[t]);
                this.inputDiv = this.htmlInput.$wrapper
            }
            this.htmlInput.$requestToShow = !0, this.$requestToShow = !0, this.initElement()
        }, i.prototype.onBlurHandler = function () {
            this.htmlInput.clearInputElement(), this.htmlInput.clearAttributes(this.$attrsCache), window.scrollTo(0, 0)
        }, i.prototype.$hide = function () {}, Object.defineProperty(i.prototype, "text", {
            get: function () {
                return this.textValue || (this.textValue = ""), this.textValue
            }, set: function (t) {
                this.textValue = t, this.inputElement && (this.inputElement.value = this.textValue)
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.setColor = function (e) {
            this.colorValue = e, this.inputElement && this.setElementStyle("color", t.utils.StringUtil.convertToHtmlColor(this.colorValue))
        }, i.prototype.$onBlur = function () {}, i.prototype.onInputHandler = function () {
            var t = this;
            window.setTimeout(function () {
                t.inputElement && t.inputElement.selectionStart == t.inputElement.selectionEnd && (t.textValue = t.inputElement.value, t.emit("updateText"))
            }, 0)
        }, i.prototype.setAreaHeight = function () {
            var t = this.$textfield;
            if (t.multipleLine) {
                var e = t.textHeight;
                if (t.height <= t.fontSize) this.setElementStyle("height", t.fontSize * this.$scaleY + "px"), this.setElementStyle("padding", "0px"), this.setElementStyle("lineHeight", t.lineHeight * this.$scaleY + "px");
                else if (t.height < e) this.setElementStyle("height", t.height * this.$scaleY + "px"), this.setElementStyle("padding", "0px"), this.setElementStyle("lineHeight", t.lineHeight * this.$scaleY + "px");
                else {
                    this.setElementStyle("height", (e + t.leading) * this.$scaleY + "px");
                    var i = (t.height - e) * this.$scaleY,
                        n = i * this.getVAlignFactor(t),
                        s = i - n;
                    this.setElementStyle("padding", n + "px 0px " + s + "px 0px"), this.setElementStyle("lineHeight", t.lineHeight * this.$scaleY + "px")
                }
            }
        }, i.prototype.getVAlignFactor = function (t) {
            var e = 0;
            switch (t.verticalAlign) {
            case 0:
                break;
            case 1:
                e = .5;
                break;
            case 2:
                e = 1
            }
            return e
        }, i.prototype.onClickHandler = function (e) {
            this.$requestToShow && (this.$requestToShow = !1, this.inputElement.value = this.text, null == this.inputElement.onblur && (this.inputElement.onblur = t.utils.Binder.create(this.onBlurHandler, this)), this.resetInput(), this.$textfield.maxLength > 0 ? this.inputElement.setAttribute("maxlength", String(this.$textfield.maxLength)) : this.inputElement.removeAttribute("maxlength"), this.inputElement.selectionStart = this.inputElement.value.length, this.inputElement.selectionEnd = this.inputElement.value.length, this.inputElement.focus(), this.emit("__focusChanged", "focus", this.inputElement))
        }, i.prototype.onDisconnect = function () {
            this.inputElement = null, this.emit("__focusChanged", "blur", this.inputElement)
        }, i.prototype.setElementStyle = function (t, e) {
            null != e && (this.inputElement && (this.inputElement.style[t] = e))
        }, i.prototype.setAttribute = function (t, e) {
            null != t && null != e && (this.$attrsCache[t] = e)
        }, i.prototype.getAttribute = function (t) {
            return this.$attrsCache[t]
        }, i.prototype.$removeFromStage = function () {
            this.inputElement && this.htmlInput.disconnect(this)
        }, i.prototype.resetInput = function () {
            if (this.inputElement) {
                var e = this.$textfield;
                this.setElementStyle("fontFamily", e.font), this.setElementStyle("fontStyle", e.italic ? "italic" : "normal"), this.setElementStyle("fontWeight", e.bold ? "bold" : "normal"), this.setElementStyle("textAlign", e.align), this.setElementStyle("fontSize", e.fontSize * this.$scaleY + "px"), this.setElementStyle("color", t.utils.StringUtil.convertToHtmlColor(e.color)), this.setElementStyle("width", e.width * this.$scaleX + "px");
                var i = "middle",
                    n = 0;
                switch (e.verticalAlign) {
                case 0:
                    i = "top";
                    break;
                case 1:
                    i = "middle", n = .5;
                    break;
                case 2:
                    i = "bottom", n = 1
                }
                if (this.setElementStyle("verticalAlign", i), e.multipleLine) this.setAreaHeight();
                else if (this.setElementStyle("lineHeight", e.lineHeight * this.$scaleY + "px"), e.height < e.fontSize) this.setElementStyle("height", e.fontSize * this.$scaleY + "px"), this.setElementStyle("padding", "0px 0px " + .5 * e.fontSize * this.$scaleX + "px 0px");
                else {
                    this.setElementStyle("height", e.fontSize * this.$scaleY + "px");
                    var s = (e.height - e.fontSize) * this.$scaleY,
                        r = s * n,
                        o = s - r,
                        h = .5 * e.fontSize * this.$scaleY;
                    o < h && (o = h), this.setElementStyle("padding", r + "px 0px " + o + "px 0px")
                }
                this.inputDiv.style.clip = "rect(0px " + e.width * this.$scaleX + "px " + e.height * this.$scaleY + "px 0px)", this.inputDiv.style.height = e.height * this.$scaleY + "px", this.inputDiv.style.width = e.width * this.$scaleX + "px"
            }
        }, i
    }(PIXI.utils.EventEmitter);
    t.InputElement = e
}(fgui || (fgui = {})),
function (t) {
    var e = function (e) {
        function i(i) {
            var n = e.call(this) || this;
            return n.interval = 0, n.repeatDelay = 0, n.$frameCount = 0, n.$currentFrame = 0, n.$status = 0, n.UIOwner = i, n.data = new t.MovieClipData, n.$playing = !0, n.interactive = n.interactiveChildren = !1, n.$settings = new t.DefaultMovieClipSettings, n.on("added", n.added, n), n.on("removed", n.removed, n), n
        }
        return __extends(i, e), Object.defineProperty(i.prototype, "frames", {
            get: function () {
                return this.$frames
            }, set: function (t) {
                this.$frames = t, null != this.$frames ? this.$frameCount = this.$frames.length : this.$frameCount = 0, (-1 == this.$settings.endFrame || this.$settings.endFrame > this.$frameCount - 1) && (this.$settings.endFrame = this.$frameCount - 1), (-1 == this.$settings.loopEndAt || this.$settings.loopEndAt > this.$frameCount - 1) && (this.$settings.loopEndAt = this.$frameCount - 1), (this.$currentFrame < 0 || this.$currentFrame > this.$frameCount - 1) && (this.$currentFrame = this.$frameCount - 1), this.$frameCount > 0 ? this.setFrame(this.$frames[this.$currentFrame]) : this.setFrame(null), this.data.rewind()
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "frameCount", {
            get: function () {
                return this.$frameCount
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "boundsRect", {
            get: function () {
                return this._boundsRect
            }, set: function (t) {
                this._boundsRect = t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "currentFrame", {
            get: function () {
                return this.$currentFrame
            }, set: function (t) {
                this.$currentFrame != t && (this.$currentFrame = t, this.data.currentFrame = t, this.setFrame(this.$currentFrame < this.$frameCount ? this.$frames[this.$currentFrame] : null))
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "playing", {
            get: function () {
                return this.$playing
            }, set: function (e) {
                this.$playing = e, e && t.GObject.isDisplayObjectOnStage(this) ? t.GTimer.inst.add(0, 0, this.update, this) : t.GTimer.inst.remove(this.update, this)
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.setPlaySettings = function () {
            for (var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
            if (1 == e.length && "object" == typeof e[0]) this.$settings.mix(e[0]);
            else {
                var n = e[0],
                    s = e[1],
                    r = e[2],
                    o = e[3],
                    h = e[4],
                    a = e[5],
                    l = {};
                t.utils.NumberUtil.isNumber(n) && (l.startFrame = n), t.utils.NumberUtil.isNumber(s) && (l.endFrame = s), t.utils.NumberUtil.isNumber(r) && (l.repeatCount = r), t.utils.NumberUtil.isNumber(o) && (l.loopEndAt = o), h && "function" == typeof h && (l.endCallback = h), a && (l.endCallbackContext = a), this.$settings.mix(l)
            }(-1 == this.$settings.endFrame || this.$settings.endFrame > this.$frameCount - 1) && (this.$settings.endFrame = this.$frameCount - 1), -1 == this.$settings.loopEndAt && (this.$settings.loopEndAt = this.$settings.endFrame), this.$status = 0, this.currentFrame = this.$settings.startFrame
        }, i.prototype.update = function () {
            this.UIOwner.$inProgressBuilding || this.$playing && 0 != this.$frameCount && 3 != this.$status && (this.data.update(this), this.$currentFrame != this.data.currentFrame && (1 == this.$status ? (this.$currentFrame = this.$settings.startFrame, this.data.currentFrame = this.$currentFrame, this.$status = 0) : 2 == this.$status ? (this.$currentFrame = this.$settings.loopEndAt, this.data.currentFrame = this.$currentFrame, this.$status = 3, null != this.$settings.endCallback && t.GTimer.inst.callLater(this.$playEnd, this)) : (this.$currentFrame = this.data.currentFrame, this.$currentFrame == this.$settings.endFrame && this.$settings.repeatCount > 0 && (this.$settings.repeatCount--, 0 == this.$settings.repeatCount ? this.$status = 2 : this.$status = 1)), this.setFrame(this.$frames[this.$currentFrame])))
        }, i.prototype.$playEnd = function () {
            if (null != this.$settings.endCallback) {
                var t = this.$settings.endCallback,
                    e = this.$settings.endCallbackContext;
                this.$settings.endCallback = this.$settings.endCallbackContext = null, this.$settings.endCallbackContext = null, t && t.call(e, this)
            }
        }, i.prototype.setFrame = function (t) {
            this._texture = null == t ? null : t.texture, this._textureID = -1
        }, i.prototype.added = function (e) {
            this.$playing && t.GTimer.inst.add(0, 0, this.update, this)
        }, i.prototype.removed = function (e) {
            this.$playing && t.GTimer.inst.remove(this.update, this)
        }, i.prototype.destroy = function () {
            t.GTimer.inst.remove(this.update, this), this.off("added", this.added, this), this.off("removed", this.removed, this), e.prototype.destroy.call(this)
        }, i
    }(PIXI.Sprite);
    t.MovieClip = e
}(fgui || (fgui = {})),
function (t) {
    var e = function () {
        function t() {
            this.repeatedCount = 0, this.$curFrame = 0, this.$lastTime = 0, this.$curFrameDelay = 0, this.$lastTime = Date.now()
        }
        return t.prototype.update = function (t) {
            var e = Date.now(),
                i = e - this.$lastTime;
            this.$lastTime = e;
            var n = this.$curFrame;
            n >= t.frameCount && (n = t.frameCount - 1), this.reachesEnd = !1, this.$curFrameDelay += i;
            var s = t.interval + t.frames[n].addDelay + (0 == n && this.repeatedCount > 0 ? t.repeatDelay : 0);
            this.$curFrameDelay < s || (this.$curFrameDelay -= s, this.$curFrameDelay > t.interval && (this.$curFrameDelay = t.interval), t.swing ? this.reversed ? (this.$curFrame--, this.$curFrame < 0 && (this.$curFrame = Math.min(1, t.frameCount - 1), this.repeatedCount++, this.reversed = !this.reversed)) : (this.$curFrame++, this.$curFrame > t.frameCount - 1 && (this.$curFrame = Math.max(0, t.frameCount - 2), this.repeatedCount++, this.reachesEnd = !0, this.reversed = !this.reversed)) : (this.$curFrame++, this.$curFrame > t.frameCount - 1 && (this.$curFrame = 0, this.repeatedCount++, this.reachesEnd = !0)))
        }, Object.defineProperty(t.prototype, "currentFrame", {
            get: function () {
                return this.$curFrame
            }, set: function (t) {
                this.$curFrame = t, this.$curFrameDelay = 0
            }, enumerable: !0,
            configurable: !0
        }), t.prototype.rewind = function () {
            this.$curFrame = 0, this.$curFrameDelay = 0, this.reversed = !1, this.reachesEnd = !1
        }, t.prototype.reset = function () {
            this.$curFrame = 0, this.$curFrameDelay = 0, this.repeatedCount = 0, this.reachesEnd = !1, this.reversed = !1
        }, t.prototype.copy = function (t) {
            this.$curFrame = t.$curFrame, this.$curFrameDelay = t.$curFrameDelay, this.repeatedCount = t.repeatedCount, this.reachesEnd = t.reachesEnd, this.reversed = t.reversed
        }, t
    }();
    t.MovieClipData = e
}(fgui || (fgui = {})),
function (t) {
    var e = function () {
        function t() {
            this.startFrame = 0, this.endFrame = -1, this.repeatCount = 0, this.loopEndAt = -1, this.endCallback = null, this.endCallbackContext = null
        }
        return t.prototype.mix = function (t) {
            for (var e in t) "mix" != e && (this[e] = t[e]);
            return this
        }, t
    }();
    t.DefaultMovieClipSettings = e
}(fgui || (fgui = {})),
function (t) {
    var e = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.UIOwner = e, i.interactive = !0, i.interactiveChildren = !0, i
        }
        return __extends(e, t), Object.defineProperty(e.prototype, "scrollRect", {
            get: function () {
                return this.$scrollRect
            }, set: function (t) {
                this.$scrollRect = t, null != t ? (this.$rectMask || (this.$rectMask = new PIXI.Graphics, this.$rectMask.isMask = !0, this.addChild(this.$rectMask), this.mask = this.$rectMask), this.$rectMask.clear(), t.width > 0 && t.height > 0 && (this.$rectMask.beginFill(0, 1), this.$rectMask.drawRect(this.$scrollRect.x, this.$scrollRect.y, this.$scrollRect.width, this.$scrollRect.height), this.$rectMask.endFill())) : this.mask = null
            }, enumerable: !0,
            configurable: !0
        }), e
    }(PIXI.Container);
    t.UIContainer = e
}(fgui || (fgui = {})),
function (t) {
    var e = function (e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.UIOwner = t, i.interactive = i.interactiveChildren = !1, i
        }
        return __extends(i, e), i.prototype.$initDisp = function (t) {
            if (!this.$disp) {
                if (t)
                    if (t.load(), t.scaleByTile) {
                        var e = new PIXI.extras.TilingSprite(t.texture);
                        this.$disp = e
                    } else t.scale9Grid ? (this.$disp = new PIXI.extras.NineSlicePlane(t.texture, t.scale9Grid.left, t.scale9Grid.top, Math.max(0, t.texture.width - t.scale9Grid.width - t.scale9Grid.x), Math.max(0, t.texture.height - t.scale9Grid.height - t.scale9Grid.y)), this.tiledSlices = t.tiledSlices) : this.$disp = new PIXI.extras.Sprite(t.id, t.texture);
                else this.$disp = new PIXI.extras.Sprite;
                this.addChild(this.$disp)
            }
        }, Object.defineProperty(i.prototype, "tint", {
            get: function () {
                return this.$disp.tint
            }, set: function (t) {
                this.$disp.tint = t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "height", {
            get: function () {
                return this.$disp.height
            }, set: function (t) {
                this.$disp.height = t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "width", {
            get: function () {
                return this.$disp.width
            }, set: function (t) {
                this.$disp.width = t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "texture", {
            get: function () {
                return this.$disp.texture
            }, set: function (t) {
                this.$disp.texture = t
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "scale9Grid", {
            get: function () {
                return this.$disp instanceof PIXI.mesh.NineSlicePlane ? new PIXI.Rectangle(this.$disp.leftWidth, this.$disp.topHeight, this.$disp.rightWidth, this.$disp.bottomHeight) : null
            }, set: function (t) {
                this.$disp instanceof PIXI.mesh.NineSlicePlane && (t.left != this.$disp.leftWidth && (this.$disp.leftWidth = t.left), t.top != this.$disp.topHeight && (this.$disp.topHeight = t.top), t.right != this.$disp.rightWidth && (this.$disp.rightWidth = t.right), t.bottom != this.$disp.bottomHeight && (this.$disp.bottomHeight = t.bottom))
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "tiledSlices", {
            get: function () {
                return 0
            }, set: function (t) {}, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "flipX", {
            get: function () {
                return this.$disp.flipX
            }, set: function (e) {
                t.GRoot.inst.applicationContext.renderer.type == PIXI.RENDERER_TYPE.WEBGL && (this.$disp.flipX = e)
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "flipY", {
            get: function () {
                return this.$disp.flipY
            }, set: function (e) {
                t.GRoot.inst.applicationContext.renderer.type == PIXI.RENDERER_TYPE.WEBGL && (this.$disp.flipY = e)
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.destroy = function (t) {
            this.$disp && (this.$disp.destroy(t), this.$disp = null), e.prototype.destroy.call(this, t)
        }, i
    }(PIXI.Container);
    t.UIImage = e
}(fgui || (fgui = {})),
function (t) {
    var e = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.UIOwner = e, i.interactive = !1, i.interactiveChildren = !1, i
        }
        return __extends(e, t), e
    }(PIXI.Graphics);
    t.UISprite = e
}(fgui || (fgui = {})),
function (t) {
    ! function (t) {
        var e = function (t) {
            function e() {
                var e = t.call(this) || this;
                e.retEvent = {}, e.nullLowestDeltaTimeout = NaN, e.$pressedKeys = {}, e.$releasedKeys = {}, e.$downKeys = [], window.addEventListener("resize", function (t) {
                    return e.notifyResizeEvents(t)
                }, !1), window.addEventListener("keydown", function (t) {
                    return e.onWindowKeyDown(t)
                }, !1), window.addEventListener("keyup", function (t) {
                    return e.onWindowKeyUp(t)
                }, !1);
                for (var i = ("onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"]), n = i.length; n;) window.addEventListener(i[--n], function (t) {
                    return e.onMouseWheel(t)
                }, !1);
                return e
            }
            return __extends(e, t), e.prototype.notifyResizeEvents = function (t) {
                this.emit("resize")
            }, e.prototype.onMouseWheel = function (t) {
                var e, i = this,
                    n = t || window.event,
                    s = 0,
                    r = 0,
                    o = 0;
                if ("detail" in n && (o = -1 * n.detail), "wheelDelta" in n && (o = n.wheelDelta), "wheelDeltaY" in n && (o = n.wheelDeltaY), "wheelDeltaX" in n && (r = -1 * n.wheelDeltaX), "axis" in n && n.axis === n.HORIZONTAL_AXIS && (r = -1 * o, o = 0), s = 0 === o ? r : o, "deltaY" in n && (s = o = -1 * n.deltaY), "deltaX" in n && (r = n.deltaX, 0 === o && (s = -1 * r)), 0 !== o || 0 !== r) {
                    if (1 === n.deltaMode) {
                        s *= 16, o *= 16, r *= 16
                    } else if (2 === n.deltaMode) {
                        s *= 16, o *= 16, r *= 16
                    }
                    e = Math.max(Math.abs(o), Math.abs(r)), (!this.lowestDelta || e < this.lowestDelta) && (this.lowestDelta = e, "mousewheel" === n.type && e % 120 == 0 && (this.lowestDelta /= 40)), "mousewheel" === n.type && e % 120 == 0 && (s /= 40, r /= 40, o /= 40), s = Math[s >= 1 ? "floor" : "ceil"](s / this.lowestDelta), r = Math[r >= 1 ? "floor" : "ceil"](r / this.lowestDelta), o = Math[o >= 1 ? "floor" : "ceil"](o / this.lowestDelta), this.retEvent.delta = s, this.retEvent.deltaX = r, this.retEvent.deltaY = o, this.retEvent.deltaFactor = this.lowestDelta, this.retEvent.deltaMode = 0, this.nullLowestDeltaTimeout && clearTimeout(this.nullLowestDeltaTimeout), this.nullLowestDeltaTimeout = setTimeout(function () {
                        return i.nullLowestDelta()
                    }, 200), this.emit("__mouseWheel", this.retEvent)
                }
            }, e.prototype.nullLowestDelta = function () {
                this.lowestDelta = null
            }, e.prototype.isKeyDown = function (t) {
                return this.$downKeys.indexOf(t) >= 0
            }, e.prototype.isKeyPressed = function (t) {
                return !!this.$pressedKeys[t]
            }, e.prototype.isKeyReleased = function (t) {
                return !!this.$releasedKeys[t]
            }, e.prototype.onWindowKeyDown = function (t) {
                var e = t.which || t.keyCode;
                this.isKeyDown(e) || (this.$downKeys.push(e), this.$pressedKeys[e] = !0, this.emit("keyPressed", e))
            }, e.prototype.onWindowKeyUp = function (t) {
                var e = t.which || t.keyCode;
                if (this.isKeyDown(e)) {
                    this.$pressedKeys[e] = !1, this.$releasedKeys[e] = !0;
                    var i = this.$downKeys.indexOf(e);
                    i >= 0 && this.$downKeys.splice(i, 1), this.emit("keyReleased", e)
                }
            }, e.inst = new e, e
        }(PIXI.utils.EventEmitter);
        t.DOMEventManager = e
    }(t.utils || (t.utils = {}))
}(fgui || (fgui = {})),
function (t) {
    var e = function () {
        return function () {
            this.scaleMode = "showAll", this.orientation = "auto", this.resolution = 1, this.designWidth = 800, this.designHeight = 600, this.alignV = 4, this.alignH = 1, this.fallbackWidth = 0, this.fallbackHeight = 0
        }
    }();
    t.DefaultUIStageOptions = e;
    var i = function () {
            function t() {}
            return t.prototype.getRect = function (t, e, i) {
                var n = t.parentElement;
                if (!n) throw new Error("Your view of PIXI are still in memory but not appended to DOM yet? it's necessary that there is a parent element to wrap your view up.");
                var s = n.getBoundingClientRect(),
                    r = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    };
                return !s || s.width <= 0 || s.height <= 0 ? (console.warn("It seems that you did not set a explicit size for the parent element of your view, now fall back to window size instead."), r.width = window.innerWidth, r.height = window.innerHeight, r.x = 0, r.y = 0) : (r.x = s.left, r.y = s.top, r.width = s.width, r.height = s.height), (r.width <= 0 || r.height <= 0) && (console.warn("fetch container size to initialize PIXI in all ways have failed, now use default size (fallbackWidth / fallbackHeight) specified in the options instead."), r.width = e, r.height = i), r
            }, t
        }(),
        n = function (n) {
            function r(r, o) {
                var h, a = n.call(this) || this;
                if (a.$width = 0, a.$height = 0, a.$scaleX = 1, a.$scaleY = 1, a.$canvasMatrix = new PIXI.Matrix, a.offsetX = 0, a.offsetY = 0, a.$sizeCalcer = new i, s.push(a), a.$appContext = r, a.$appContext.renderer.autoResize = !1, a.$appStage = r.stage, a.$appStage.interactive = !0, o instanceof e) h = o;
                else if (h = new e, null != o)
                    for (var l in o) h[l] = o[l];
                if (!h.designWidth || !h.designHeight) throw new Error("Invalid designWidth / designHeight in the parameter 'stageOptions'.");
                a.$options = h, a.$appContext.view.style.position = "absolute";
                var u, c = a.$appContext.view.parentElement,
                    p = c.style;
                return "DIV" != c.tagName && (c = document.createElement("DIV"), p.position = "relative", p.left = p.top = "0px", p.width = p.height = "100%", p.overflow = "hidden", a.$appContext.view.parentElement.appendChild(c), c.appendChild(a.$appContext.view)), "" != (u = document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(c).position : p.position) && "static" != u || (u = "relative", c.style.position = u), t.HTMLInput.inst.initialize(c, a.$appContext.view), a.updateScreenSize(), a
            }
            return __extends(r, n), Object.defineProperty(r.prototype, "orientation", {
                get: function () {
                    return this.$options.orientation
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "stageWidth", {
                get: function () {
                    return this.$width
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "stageHeight", {
                get: function () {
                    return this.$height
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "applicationContext", {
                get: function () {
                    return this.$appContext
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "nativeStage", {
                get: function () {
                    return this.$appStage
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "resolution", {
                get: function () {
                    return this.$options.resolution
                }, set: function (t) {
                    this.$options.resolution = t, this.updateScreenSize()
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "scaleX", {
                get: function () {
                    return this.$scaleX
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "scaleY", {
                get: function () {
                    return this.$scaleY
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "designWidth", {
                get: function () {
                    return this.$options.designWidth
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "designHeight", {
                get: function () {
                    return this.$options.designHeight
                }, enumerable: !0,
                configurable: !0
            }), r.prototype.setDesignSize = function (t, e) {
                var i = this.$options;
                i.designWidth = t, i.designHeight = e, this.updateScreenSize()
            }, r.prototype.calculateStageSize = function (t, e, i, n, s) {
                var r = e,
                    o = i,
                    h = n,
                    a = s,
                    l = e / h || 0,
                    u = i / a || 0;
                switch (t) {
                case "exactFit":
                    break;
                case "fixedHeight":
                    h = Math.round(e / u);
                    break;
                case "fixedWidth":
                    a = Math.round(i / l);
                    break;
                case "noBorder":
                    l > u ? o = Math.round(a * l) : r = Math.round(h * u);
                    break;
                case "showAll":
                    l > u ? r = Math.round(h * u) : o = Math.round(a * l);
                    break;
                case "fixedAuto":
                    r / o < h / a ? (u = l, a = Math.round(i / l)) : (l = u, h = Math.round(e / u));
                    break;
                default:
                    h = e, a = i
                }
                return {
                    stageWidth: h,
                    stageHeight: a,
                    displayWidth: r,
                    displayHeight: o
                }
            }, r.prototype.updateScreenSize = function () {
                if (!t.HTMLInput.isTyping) {
                    var e = this.$appContext.view,
                        i = e.style,
                        n = this.$sizeCalcer.getRect(e, this.$options.fallbackWidth, this.$options.fallbackHeight),
                        s = !1,
                        r = this.$options.orientation;
                    "auto" != r && (s = "portrait" != r && n.height > n.width || "portrait" == r && n.width > n.height);
                    var o = s ? n.height : n.width,
                        h = s ? n.width : n.height,
                        a = this.calculateStageSize(this.$options.scaleMode, o, h, this.$options.designWidth, this.$options.designHeight),
                        l = a.stageWidth,
                        u = a.stageHeight,
                        c = a.displayWidth,
                        p = a.displayHeight;
                    e.width !== l && (e.width = l), e.height !== u && (e.height = u), i.transformOrigin = i.webkitTransformOrigin = i.msTransformOrigin = i.mozTransformOrigin = i.oTransformOrigin = "0px 0px 0px", i.width = c + "px", i.height = p + "px";
                    var $, d, f = this.$canvasMatrix.identity(),
                        g = s ? p : c,
                        y = s ? c : p;
                    $ = 0 == this.$options.alignH ? 0 : 2 == this.$options.alignH ? n.width - g : .5 * (n.width - g), d = 3 == this.$options.alignV ? 0 : 5 == this.$options.alignV ? n.height - y : .5 * (n.height - y);
                    var m = 0;
                    s ? "landscape" == this.$options.orientation ? (f.rotate(Math.PI / 2), f.translate(h - $, d), m = 90) : (f.rotate(-Math.PI / 2), f.translate($, o - d), m = -90) : f.translate($, d), s ? (f.tx += this.offsetY, f.ty += this.offsetX) : (f.tx += this.offsetX, f.ty += this.offsetY), f.a = this.formatData(f.a), f.d = this.formatData(f.d), f.tx = this.formatData(f.tx), f.ty = this.formatData(f.ty), i.transformOrigin = i.webkitTransformOrigin = i.msTransformOrigin = i.mozTransformOrigin = i.oTransformOrigin = "0px 0px 0px", i.transform = i.webkitTransform = i.msTransform = i.mozTransform = i.oTransform = "matrix(" + f.a + "," + f.b + "," + f.c + "," + f.d + "," + f.tx + "," + f.ty + ")", this.$width = l, this.$height = u, this.$scaleX = l / c, this.$scaleY = u / p;
                    var b = this.$appContext.renderer.plugins.interaction;
                    b.stageRotation = m, b.stageScaleX = this.$scaleX, b.stageScaleY = this.$scaleY, this.$appContext.renderer.resize(l, u), t.HTMLInput.inst.updateSize(c / l, p / u), this.emit("__sizeChanged", this)
                }
            }, r.prototype.formatData = function (t) {
                return Math.abs(t) < 1e-6 ? 0 : Math.abs(1 - t) < .001 ? t > 0 ? 1 : -1 : t
            }, r.prototype.dispose = function () {
                for (var t = s.length; t-- >= 0;) s[t] === this && s.splice(t, 1)
            }, r
        }(PIXI.utils.EventEmitter);
    t.UIStage = n;
    var s = [],
        r = NaN;

    function o() {
        s.forEach(function (t) {
            t.updateScreenSize()
        })
    }
    t.utils.DOMEventManager.inst.on("resize", function () {
        clearTimeout(r), r = window.setTimeout(o, 300)
    })
}(fgui || (fgui = {})),
function (t) {
    PIXI.TextMetrics.canBreakChars = function (t, e, i, n, s) {
        return 2 != function (t, e) {
            var i = t,
                n = "number" == typeof e && !isNaN(e) && e > 0;
            if (i >= 55296 && i <= 56319) {
                if (n) {
                    var s = 1024 * (i - 55296) + (e - 56320) + 65536;
                    if (s >= 118784 && s <= 128895) return 2
                }
            } else {
                if (i >= 8448 && i <= 10239 || i >= 11013 && i <= 11015 || i >= 10548 && i <= 10549 || i >= 12951 && i <= 12953 || 169 === i || 174 === i || 12349 === i || 12336 === i || 11093 === i || 11036 === i || 11035 === i || 11088 === i || 8986 === i) return 1;
                if (n && (8419 === e || 65039 === e || 55356 === e)) return 2
            }
            return 0
        }(t.charCodeAt(0), e && e.charCodeAt(0))
    }, PIXI.TextMetrics.isBreakingSpace = function (t) {
        return "string" == typeof t && (" " !== t && PIXI.TextMetrics._breakingSpaces.indexOf(t.charCodeAt(0)) >= 0)
    };
    var e = function (e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.$minHeightID = -1, i.UIOwner = t, i.interactive = i.interactiveChildren = !1, i._texture.noFrame = !1, i._width = i._texture.frame.width, i._height = i._texture.frame.height, i.$minHeight = -1, i._texture.on("update", i.updateFrame, i), i
        }
        return __extends(i, e), Object.defineProperty(i.prototype, "minHeight", {
            get: function () {
                return this.$minHeight
            }, enumerable: !0,
            configurable: !0
        }), i.prototype.$updateMinHeight = function () {
            (this.style.styleID != this.$minHeightID || this.$minHeight <= 0) && (this.$minHeight = PIXI.TextMetrics.measureText("", this.style, !1).lineHeight, this.$minHeightID = this.style.styleID)
        }, i.prototype.updateFrame = function () {
            t.GTimer.inst.callLater(this.internalUpdateFrame, this)
        }, i.prototype.internalUpdateFrame = function () {
            if (this._texture) {
                var t = this._texture.frame;
                this._height = Math.max(this._height, this.$minHeight);
                var e = t.x + this._width,
                    i = t.y + this._height;
                e > this._texture.baseTexture.width && (e = this._texture.baseTexture.width - t.x), i > this._texture.baseTexture.height && (i = this._texture.baseTexture.height - t.y), t.width = e / this.resolution, t.height = i / this.resolution, this._texture.trim.width = t.width, this._texture.trim.height = t.height;
                var n = this._style.trim ? 0 : this._style.padding;
                this._texture.trim.x = -n, this._texture.trim.y = -n, this._texture.frame = t
            }
        }, i.prototype._onTextureUpdate = function () {
            this._textureID = -1, this._textureTrimmedID = -1
        }, Object.defineProperty(i.prototype, "width", {
            get: function () {
                return this._width
            }, set: function (t) {
                this._width = t, this.updateFrame()
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "height", {
            get: function () {
                return this._height
            }, set: function (t) {
                this._height = t, this.updateFrame()
            }, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "textHeight", {
            get: function () {
                return this.updateText(!0), this._texture.orig.height
            }, set: function (t) {}, enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "textWidth", {
            get: function () {
                return this.updateText(!0), this._texture.orig.width
            }, set: function (t) {
                t != this.style.wordWrapWidth && (this.style.wordWrapWidth = t)
            }, enumerable: !0,
            configurable: !0
        }), i
    }(PIXI.Text);
    t.UITextField = e
}(fgui || (fgui = {})),
function (t) {
    var e = function () {
        return function (t, e) {
            this.packageItem = t, this.type = e
        }
    }();
    t.DisplayListItem = e
}(fgui || (fgui = {})),
function (t) {
    var e = function () {
        function t() {
            this.width = 0, this.height = 0, this.tiledSlices = 0, this.interval = 0, this.repeatDelay = 0
        }
        return t.prototype.load = function () {
            return this.owner.getItemAsset(this)
        }, t.prototype.toString = function () {
            return this.name
        }, t
    }();
    t.PackageItem = e
}(fgui || (fgui = {})),
function (t) {
    var e = function () {
        function e() {}
        return e.setPackageItemExtension = function (t, i) {
            e.packageItemExtensions[t.substring(5)] = i
        }, e.setLoaderExtension = function (t) {
            e.loaderExtension = t
        }, e.newObject = function (i) {
            switch (i.type) {
            case 0:
                return new t.GImage;
            case 2:
                return new t.GMovieClip;
            case 4:
                var n = e.packageItemExtensions[i.owner.id + i.id];
                if (n) return new n;
                var s = i.owner.getItemAsset(i).attributes.extention;
                if (null == s) return new t.GComponent;
                switch (s) {
                case "Button":
                    return new t.GButton;
                case "ProgressBar":
                    return new t.GProgressBar;
                case "Label":
                    return new t.GLabel;
                case "Slider":
                    return new t.GSlider;
                case "ScrollBar":
                    return new t.GScrollBar;
                case "ComboBox":
                    return new t.GComboBox;
                default:
                    return new t.GComponent
                }
            }
            return null
        }, e.newObjectDirectly = function (i) {
            switch (i) {
            case "image":
                return new t.GImage;
            case "movieclip":
                return new t.GMovieClip;
            case "component":
                return new t.GComponent;
            case "text":
                return new t.GTextField;
            case "list":
                return new t.GList;
            case "richtext":
                return new t.GRichTextField;
            case "inputtext":
                return new t.GTextInput;
            case "group":
                return new t.GGroup;
            case "graph":
                return new t.GGraph;
            case "loader":
                return null != e.loaderExtension ? new e.loaderExtension : new t.GLoader
            }
            return null
        }, e.packageItemExtensions = {}, e
    }();
    t.UIObjectFactory = e
}(fgui || (fgui = {})),
function (t) {
    var e = function () {
            return function (t, e, i, n, s) {
                this.atlasName = t, this.frame = e, this.orig = i, this.trim = n, this.rotate = s
            }
        }(),
        i = function () {
            function i() {
                this.$items = [], this.$atlasConfigs = {}
            }
            return i.getById = function (t) {
                return i.$packageInstById[t]
            }, i.getByName = function (t) {
                return i.$packageInstByName[t]
            }, i.addPackage = function (t) {
                var e = new i;
                return e.create(t), i.$packageInstById[e.id] = e, i.$packageInstByName[e.name] = e, e.customId = t, e
            }, i.removePackage = function (t) {
                var e = i.$packageInstById[t];
                e.dispose(), delete i.$packageInstById[e.id], null != e.$customId && delete i.$packageInstById[e.$customId], delete i.$packageInstByName[e.name]
            }, i.createObject = function (t, e, n) {
                var s = i.getByName(t);
                return s ? s.createObject(e, n) : null
            }, i.createObjectFromURL = function (t, e) {
                var n = i.getItemByURL(t);
                return n ? n.owner.internalCreateObject(n, e) : null
            }, i.getItemURL = function (t, e) {
                var n = i.getByName(t);
                if (!n) return null;
                var s = n.$itemsByName[e];
                return s ? "ui://" + n.id + s.id : null
            }, i.getItemByURL = function (t) {
                var e = t.indexOf("//");
                if (-1 == e) return null;
                var n, s = t.indexOf("/", e + 2);
                if (-1 == s) {
                    if (t.length > 13) {
                        var r = t.substr(5, 8);
                        if (null != (n = i.getById(r))) {
                            var o = t.substr(13);
                            return n.getItemById(o)
                        }
                    }
                } else {
                    var h = t.substr(e + 2, s - e - 2);
                    if (null != (n = i.getByName(h))) {
                        var a = t.substr(s + 1);
                        return n.getItemByName(a)
                    }
                }
                return null
            }, i.getBitmapFontByURL = function (t) {
                return i.$bitmapFonts[t]
            }, i.setStringsSource = function (e) {
                i.$stringsSource = {}, t.utils.XmlParser.tryParse(e).children.forEach(function (t) {
                    if ("string" == t.nodeName) {
                        var e = t.attributes.name,
                            n = e.indexOf("-");
                        if (-1 == n) return;
                        var s = t.children.length > 0 ? t.children[0].text : "",
                            r = e.substr(0, n),
                            o = e.substr(n + 1),
                            h = i.$stringsSource[r];
                        h || (h = {}, i.$stringsSource[r] = h), h[o] = s
                    }
                })
            }, i.normalizeURL = function (t) {
                if (null == t) return null;
                var e = t.indexOf("//");
                if (-1 == e) return null;
                var n = t.indexOf("/", e + 2);
                if (-1 == n) return t;
                var s = t.substr(e + 2, n - e - 2),
                    r = t.substr(n + 1);
                return i.getItemURL(s, r)
            }, i.prototype.create = function (n) {
                var s = this;
                this.$resKey = n;
                var r = t.utils.AssetLoader.resourcesPool[this.$resKey];
                if (r || (r = t.utils.AssetLoader.resourcesPool[this.$resKey + "_fui"]), !r) throw new Error("Resource '" + this.$resKey + '\' not found, please make sure that you use "new fgui.utils.AssetLoader" to load resources instead of " PIXI.loaders.Loader".');
                if (!(r.data && r.data instanceof ArrayBuffer)) throw new Error("Resource '" + this.$resKey + "' is not a proper binary resource, please load it as binary format by calling yourLoader.add(name, url, { loadType:PIXI.loaders.Resource.LOAD_TYPE.XHR, xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.BUFFER })");
                this.decompressPackage(r.data);
                var o = this.getResDescriptor("sprites.bytes");
                o && o.split(i.sep1).forEach(function (t, n) {
                    if (n >= 1 && t && t.length) {
                        var r = t.split(i.sep2),
                            o = void 0,
                            h = r[0],
                            a = parseInt(r[1]);
                        if (a >= 0) o = "atlas" + a;
                        else {
                            var l = h.indexOf("_");
                            o = -1 == l ? "atlas_" + h : "atlas_" + h.substr(0, l)
                        }
                        var u = new e(o);
                        u.frame = new PIXI.Rectangle(parseInt(r[2]), parseInt(r[3]), parseInt(r[4]), parseInt(r[5])), u.rotate = "1" == r[6] ? 6 : 0, u.orig = 0 != u.rotate ? new PIXI.Rectangle(0, 0, u.frame.height, u.frame.width) : null, s.$atlasConfigs[h] = u
                    }
                }), o = this.getResDescriptor("package.xml");
                var h = t.utils.XmlParser.tryParse(o);
                this.$id = h.attributes.id, this.$name = h.attributes.name;
                var a = h.children[0].children;
                this.$itemsById = {}, this.$itemsByName = {}, a.forEach(function (e) {
                    var n = new t.PackageItem;
                    if (n.type = t.ParsePackageItemType(e.nodeName), n.id = e.attributes.id, n.name = e.attributes.name, n.file = e.attributes.file, o = e.attributes.size) {
                        var r = o.split(i.sep0);
                        n.width = parseInt(r[0]), n.height = parseInt(r[1])
                    }
                    switch (n.type) {
                    case 0:
                        if ("9grid" == (o = e.attributes.scale)) {
                            if (o = e.attributes.scale9grid) {
                                r = o.split(i.sep0);
                                var h = new PIXI.Rectangle(parseInt(r[0]), parseInt(r[1]), parseInt(r[2]), parseInt(r[3]));
                                n.scale9Grid = h, (o = e.attributes.gridTile) && (n.tiledSlices = parseInt(o))
                            }
                        } else "tile" == o && (n.scaleByTile = !0)
                    }
                    n.owner = s, s.$items.push(n), s.$itemsById[n.id] = n, null != n.name && (s.$itemsByName[n.name] = n)
                }, this), this.$items.forEach(function (t) {
                    6 == t.type && (s.loadFont(t), i.$bitmapFonts[t.bitmapFont.id] = t.bitmapFont)
                }, this)
            }, i.prototype.decompressPackage = function (e) {
                this.$resData = {};
                for (var i, n, s = new Zlib.RawInflate(e).decompress(), r = t.utils.RawByte.decodeUTF8(s), o = 0;;) {
                    var h = r.indexOf("|", o);
                    if (-1 == h) break;
                    i = r.substring(o, h), o = h + 1, h = r.indexOf("|", o), n = parseInt(r.substring(o, h)), o = h + 1, this.$resData[i] = r.substr(o, n), o += n
                }
            }, i.prototype.dispose = function () {
                var e = this;
                this.$items.forEach(function (n) {
                    var s = n.texture;
                    null != s ? (s.destroy(), PIXI.Texture.removeFromCache(s)) : null != n.frames ? n.frames.forEach(function (t) {
                        (s = t.texture) && (s.destroy(), PIXI.Texture.removeFromCache(s))
                    }) : null != n.bitmapFont && delete i.$bitmapFonts[n.bitmapFont.id];
                    var r = e.$atlasConfigs[n.id];
                    r && t.utils.AssetLoader.destroyResource(e.$resKey + "@" + r.atlasName)
                }, this), t.utils.AssetLoader.destroyResource("" + this.$resKey)
            }, Object.defineProperty(i.prototype, "id", {
                get: function () {
                    return this.$id
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(i.prototype, "name", {
                get: function () {
                    return this.$name
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(i.prototype, "customId", {
                get: function () {
                    return this.$customId
                }, set: function (t) {
                    null != this.$customId && delete i.$packageInstById[this.$customId], this.$customId = t, null != this.$customId && (i.$packageInstById[this.$customId] = this)
                }, enumerable: !0,
                configurable: !0
            }), i.prototype.createObject = function (t, e) {
                var i = this.$itemsByName[t];
                return i ? this.internalCreateObject(i, e) : null
            }, i.prototype.internalCreateObject = function (e, n) {
                void 0 === n && (n = null);
                var s = 4 == e.type && null != n ? new n : t.UIObjectFactory.newObject(e);
                return null == s ? null : (i.$constructingObjects++, s.packageItem = e, s.constructFromResource(), i.$constructingObjects--, s)
            }, i.prototype.getItemById = function (t) {
                return this.$itemsById[t]
            }, i.prototype.getItemByName = function (t) {
                return this.$itemsByName[t]
            }, i.prototype.getItemAssetByName = function (t) {
                var e = this.$itemsByName[t];
                if (null == e) throw new Error("Resource '" + t + "' not found");
                return this.getItemAsset(e)
            }, i.prototype.createSpriteTexture = function (t, e) {
                var i = this.$itemsById[e.atlasName];
                if (null != i) {
                    var n = this.getItemAsset(i);
                    if (!n || !n.baseTexture) return null;
                    e.texCacheID || (e.texCacheID = this.$resKey + "@" + e.atlasName + "@" + t);
                    var s = PIXI.utils.TextureCache[e.texCacheID];
                    return s || (s = new PIXI.Texture(n.baseTexture, e.frame, e.orig, e.trim, e.rotate), PIXI.Texture.addToCache(s, e.texCacheID)), s
                }
                return null
            }, i.prototype.getItemAsset = function (e) {
                switch (e.type) {
                case 0:
                    if (!e.decoded) {
                        e.decoded = !0;
                        var i = this.$atlasConfigs[e.id];
                        null != i && (e.texture = this.createSpriteTexture(e.id, i))
                    }
                    return e.texture;
                case 7:
                    if (!e.decoded) {
                        e.decoded = !0;
                        var n = null != e.file && e.file.length > 0 ? e.file : e.id + ".png",
                            s = this.$resKey + "@" + t.utils.StringUtil.getFileName(n),
                            r = t.utils.AssetLoader.resourcesPool[s];
                        if (!r) throw new Error(s + " not found in fgui.utils.AssetLoader.resourcesPool, please use new AssetLoader() to load assets instead of using new PIXI.loaders.Loader(). besides, AssetLoader is a sub-class from PIXI.loaders.Loader so they have the same usage.");
                        e.texture = r.texture, e.texture || (r = t.utils.AssetLoader.resourcesPool[this.$resKey + "@" + n.replace(".", "_")], e.texture = r.texture)
                    }
                    return e.texture;
                case 3:
                    return e.decoded = !1, null;
                case 6:
                    return e.decoded || (e.decoded = !0, this.loadFont(e)), e.bitmapFont;
                case 2:
                    return e.decoded || (e.decoded = !0, this.loadMovieClip(e)), e.frames;
                case 4:
                    if (!e.decoded) {
                        e.decoded = !0;
                        var o = this.getResDescriptor(e.id + ".xml"),
                            h = t.utils.XmlParser.tryParse(o);
                        e.componentData = h, this.loadComponentChildren(e), this.loadComponentTranslation(e)
                    }
                    return e.componentData;
                default:
                    return t.utils.AssetLoader.resourcesPool[this.$resKey + "@" + e.id]
                }
            }, i.prototype.loadComponentChildren = function (e) {
                var n = t.utils.XmlParser.getChildNodes(e.componentData, "displayList");
                null != n && n.length > 0 ? (e.displayList = [], n[0].children.forEach(function (n) {
                    var s, r = n.nodeName,
                        o = n.attributes.src;
                    if (o) {
                        var h = n.attributes.pkg,
                            a = void 0,
                            l = null != (a = h && h != e.owner.id ? i.getById(h) : e.owner) ? a.getItemById(o) : null;
                        s = null != l ? new t.DisplayListItem(l, null) : new t.DisplayListItem(null, r)
                    } else s = "text" == r && "true" == n.attributes.input ? new t.DisplayListItem(null, "inputtext") : new t.DisplayListItem(null, r);
                    s.desc = n, e.displayList.push(s)
                })) : e.displayList = []
            }, i.prototype.getResDescriptor = function (t) {
                return this.$resData[t]
            }, i.prototype.loadComponentTranslation = function (e) {
                if (null != i.$stringsSource) {
                    var n, s, r, o, h, a = i.$stringsSource[this.id + e.id];
                    if (null != a) e.displayList.forEach(function (e) {
                        s = e.desc, o = s.nodeName, h = s.attributes.id, s.attributes.tooltips && void 0 != (n = a[h + "-tips"]) && (s.attributes.tooltips = n);
                        var i = t.utils.XmlParser.getChildNodes(s, "gearText");
                        if ((r = i && i[0]) && (void 0 != (n = a[h + "-texts"]) && (r.attributes.values = n), void 0 != (n = a[h + "-texts_def"]) && (r.attributes.default = n)), "text" == o || "richtext" == o) void 0 != (n = a[h]) && (s.attributes.text = n), void 0 != (n = a[h + "-prompt"]) && (s.attributes.prompt = n);
                        else if ("list" == o) s.children.forEach(function (t, e) {
                            "item" == t.nodeName && void 0 != (n = a[h + "-" + e]) && (t.attributes.title = n)
                        });
                        else if ("component" == o) {
                            if (i = t.utils.XmlParser.getChildNodes(s, "Button"), r = i && i[0]) return void 0 != (n = a[h]) && (r.attributes.title = n), void(void 0 != (n = a[h + "-0"]) && (r.attributes.selectedTitle = n));
                            if (i = t.utils.XmlParser.getChildNodes(s, "Label"), r = i && i[0]) return void(void 0 != (n = a[h]) && (r.attributes.title = n));
                            if (i = t.utils.XmlParser.getChildNodes(s, "ComboBox"), r = i && i[0]) return void 0 != (n = a[h]) && (r.attributes.title = n), void r.children.forEach(function (t, e) {
                                "item" == t.nodeName && void 0 != (n = a[h + "-" + e]) && (t.attributes.title = n)
                            })
                        }
                    })
                }
            }, i.prototype.loadMovieClip = function (e) {
                var n, s = this,
                    r = t.utils.XmlParser.tryParse(this.getResDescriptor(e.id + ".xml"));
                null != (n = r.attributes.interval) && (e.interval = parseInt(n)), null != (n = r.attributes.swing) && (e.swing = "true" == n), null != (n = r.attributes.repeatDelay) && (e.repeatDelay = parseInt(n)), e.frames = [], r.children[0].children.forEach(function (r, o) {
                    var h = new t.Frame,
                        a = (n = r.attributes.rect).split(i.sep0),
                        l = new PIXI.Rectangle(parseInt(a[0]), parseInt(a[1]), parseInt(a[2]), parseInt(a[3]));
                    if ((n = r.attributes.addDelay) && (h.addDelay = parseInt(n)), e.frames.push(h), !(l.width <= 0)) {
                        n = (n = r.attributes.sprite) ? e.id + "_" + n : e.id + "_" + o;
                        var u = s.$atlasConfigs[n];
                        null != u && (u.trim = l, h.texture = s.createSpriteTexture(n, u))
                    }
                })
            }, i.prototype.loadFont = function (e) {
                var n = this,
                    s = new t.BitmapFont;
                s.id = "ui://" + this.id + e.id;
                var r, o, h = this.getResDescriptor(e.id + ".fnt"),
                    a = {},
                    l = !1,
                    u = 0,
                    c = 0,
                    p = !1,
                    $ = !1,
                    d = 0,
                    f = 0,
                    g = 0,
                    y = 0;
                h.split(i.sep1).forEach(function (m) {
                    if (m && m.length) {
                        var b = (h = t.utils.StringUtil.trim(m)).split(i.sep2);
                        if (b.forEach(function (t) {
                            var e = t.split(i.sep3);
                            a[e[0]] = e[1]
                        }), "char" == (h = b[0])) {
                            var v = new t.BMGlyph;
                            v.x = parseInt(a.x) || 0, v.y = parseInt(a.y) || 0, v.offsetX = parseInt(a.xoffset) || 0, v.offsetY = parseInt(a.yoffset) || 0, v.width = parseInt(a.width) || 0, v.height = parseInt(a.height) || 0, y = Math.max(v.height, y), v.advance = parseInt(a.xadvance) || 0, void 0 != a.chnl && (v.channel = parseInt(a.chnl), 15 == v.channel ? v.channel = 4 : 1 == v.channel ? v.channel = 3 : 2 == v.channel ? v.channel = 2 : v.channel = 1), l ? null != o && (v.texture = new PIXI.Texture(o.baseTexture, new PIXI.Rectangle(v.x + d, v.y + f, v.width, v.height))) : a.img && null != (r = n.$itemsById[a.img]) && (r.load(), v.width = r.width, v.height = r.height, v.texture = r.texture), l ? v.lineHeight = g : (0 == v.advance && (v.advance = 0 == c ? v.offsetX + v.width : c), v.lineHeight = v.offsetY < 0 ? v.height : v.offsetY + v.height, u > 0 && v.lineHeight < u && (v.lineHeight = u)), s.glyphs[String.fromCharCode(0 | +a.id)] = v
                        } else if ("info" == h) {
                            if (l = null != a.face, a.size && (u = parseInt(a.size)), p = "true" == a.resizable, $ = "true" == a.colored, l) {
                                var w = n.$atlasConfigs[e.id];
                                if (null != w) {
                                    d = w.frame.x, f = w.frame.y;
                                    var I = n.$itemsById[w.atlasName];
                                    null != I && (o = n.getItemAsset(I))
                                }
                            }
                        } else "common" == h && (a.lineHeight && (g = parseInt(a.lineHeight)), 0 == u ? u = g : 0 == g && (g = u), a.xadvance && (c = parseInt(a.xadvance)))
                    }
                }), 0 == u && y > 0 && (u = y), s.ttf = l, s.size = u, s.resizable = p, s.colorable = $, e.bitmapFont = s
            }, i.$constructingObjects = 0, i.$packageInstById = {}, i.$packageInstByName = {}, i.$bitmapFonts = {}, i.$stringsSource = null, i.sep0 = ",", i.sep1 = "\n", i.sep2 = " ", i.sep3 = "=", i
        }();
    t.UIPackage = i
}(fgui || (fgui = {})),
function (t) {
    ! function (t) {
        var e = function (t) {
            function e(e, i) {
                return t.call(this, e, i) || this
            }
            return __extends(e, t), e.prototype._onComplete = function () {
                e.addResources(this.resources), t.prototype._onComplete.call(this)
            }, Object.defineProperty(e, "resourcesPool", {
                get: function () {
                    return e.$resources
                }, enumerable: !0,
                configurable: !0
            }), e.destroyResource = function (t) {
                var i = e.$resources[t];
                i && (i.isComplete || i.abort(), i.children = null, i.data = null, i.texture && i.texture.destroy(), i.textures = null, i.xhr = null, e.$resources[t] = null, delete e.$resources[t])
            }, e.addResources = function (t) {
                if (t)
                    for (var i in t) e.$resources[i] = t[i]
            }, e.$resources = {}, e
        }(PIXI.loaders.Loader);
        t.AssetLoader = e
    }(t.utils || (t.utils = {}))
}(fgui || (fgui = {})),
function (t) {
    ! function (t) {
        var e = function () {
            function t() {}
            return t.create = function (t, e) {
                for (var i = [], n = 2; n < arguments.length; n++) i[n - 2] = arguments[n];
                return e ? function () {
                    var n = arguments.length > 0 ? [].concat(Array.prototype.slice.call(arguments)).concat(i) : [].concat(i);
                    t.apply(e, n)
                } : t
            }, t
        }();
        t.Binder = e
    }(t.utils || (t.utils = {}))
}(fgui || (fgui = {})),
function (t) {
    ! function (t) {
        var e = function () {
            function t(t, e, i, n) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), this._raw = [], this.h = 0, this.s = 0, this.c = 0, this.b = 0, this.setColor(t, e, i, n)
            }
            return Object.defineProperty(t.prototype, "hue", {
                get: function () {
                    return this.h
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "brightness", {
                get: function () {
                    return this.b
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "contrast", {
                get: function () {
                    return this.c
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "saturation", {
                get: function () {
                    return this.s
                }, enumerable: !0,
                configurable: !0
            }), t.prototype.setColor = function (t, e, i, n) {
                return this.reset().adjustColor(t, e, i, n)
            }, t.prototype.reset = function () {
                return this.copy(t.IDENTITY_MATRIX)
            }, t.prototype.adjustColor = function (t, e, i, n) {
                return this.adjustHue(n), this.adjustContrast(e), this.adjustBrightness(t), this.adjustSaturation(i)
            }, t.prototype.adjustBrightness = function (t) {
                return 0 == t || isNaN(t) ? this : (this.b = t, t = this._cleanValue(t, 255), this._multiplyMatrix([1, 0, 0, 0, t, 0, 1, 0, 0, t, 0, 0, 1, 0, t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this)
            }, t.prototype.adjustContrast = function (e) {
                if (0 == e || isNaN(e)) return this;
                var i;
                this.c = e;
                return i = (e = this._cleanValue(e, 100)) < 0 ? 1 + e / 100 * 1 : 1 * (i = 0 == (i = e % 1) ? t.DELTA_INDEX[e] : t.DELTA_INDEX[e << 0] * (1 - i) + t.DELTA_INDEX[1 + (e << 0)] * i) + 1, this._multiplyMatrix([i / 1, 0, 0, 0, .5 * (1 - i), 0, i / 1, 0, 0, .5 * (1 - i), 0, 0, i / 1, 0, .5 * (1 - i), 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
            }, t.prototype.adjustSaturation = function (t) {
                if (0 == t || isNaN(t)) return this;
                this.s = t;
                var e = 1 + ((t = this._cleanValue(t, 100)) > 0 ? 3 * t / 100 : t / 100);
                return this._multiplyMatrix([.3086 * (1 - e) + e, .6094 * (1 - e), .082 * (1 - e), 0, 0, .3086 * (1 - e), .6094 * (1 - e) + e, .082 * (1 - e), 0, 0, .3086 * (1 - e), .6094 * (1 - e), .082 * (1 - e) + e, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
            }, t.prototype.adjustHue = function (t) {
                if (0 == t || isNaN(t)) return this;
                this.h = t, t = this._cleanValue(t, 180) / 180 * Math.PI;
                var e = Math.cos(t),
                    i = Math.sin(t);
                return this._multiplyMatrix([.213 + .787 * e + -.213 * i, .715 + -.715 * e + -.715 * i, .072 + -.072 * e + .928 * i, 0, 0, .213 + -.213 * e + .143 * i, .715 + e * (1 - .715) + .14 * i, .072 + -.072 * e + -.283 * i, 0, 0, .213 + -.213 * e + -.787 * i, .715 + -.715 * e + .715 * i, .072 + .928 * e + .072 * i, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
            }, t.prototype.concat = function (e) {
                return (e = this._fixMatrix(e)).length != t.LENGTH ? this : (this._multiplyMatrix(e), this)
            }, t.prototype.clone = function () {
                return (new t).copy(this._raw)
            }, t.prototype.toArray = function () {
                for (var e = [], i = 0, n = t.LENGTH; i < n; i++) e[i] = this._raw[i];
                return e
            }, t.prototype.copy = function (e) {
                for (var i = t.LENGTH, n = 0; n < i; n++) this._raw[n] = e[n];
                return this
            }, t.prototype._multiplyMatrix = function (t) {
                var e, i, n, s = [];
                for (e = 0; e < 5; e++) {
                    for (i = 0; i < 5; i++) s[i] = this._raw[i + 5 * e];
                    for (i = 0; i < 5; i++) {
                        var r = 0;
                        for (n = 0; n < 5; n++) r += t[i + 5 * n] * s[n];
                        this._raw[i + 5 * e] = r
                    }
                }
            }, t.prototype._cleanValue = function (t, e) {
                return Math.min(e, Math.max(-e, t))
            }, t.prototype._fixMatrix = function (e) {
                return e instanceof t && (e = e.toArray()), e.length < t.LENGTH ? e = e.slice(0, e.length).concat(t.IDENTITY_MATRIX.slice(e.length, t.LENGTH)) : e.length > t.LENGTH && (e = e.slice(0, t.LENGTH)), e
            }, t.DELTA_INDEX = [0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2, .21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56, .59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10], t.IDENTITY_MATRIX = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], t.LENGTH = t.IDENTITY_MATRIX.length, t
        }();
        t.ColorMatrix = e
    }(t.utils || (t.utils = {}))
}(fgui || (fgui = {})),
function (t) {
    ! function (e) {
        var i = function () {
            function e() {
                this.$agent = new t.GLoader, this.$agent.draggable = !0, this.$agent.touchable = !1, this.$agent.setSize(100, 100), this.$agent.setPivot(.5, .5, !0), this.$agent.align = "center", this.$agent.verticalAlign = 1, this.$agent.sortingOrder = 1e6, this.$agent.on("__dragEnd", this.$dragEnd, this)
            }
            return Object.defineProperty(e.prototype, "dragAgent", {
                get: function () {
                    return this.$agent
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "isDragging", {
                get: function () {
                    return null != this.$agent.parent
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "sourceObject", {
                get: function () {
                    return this.$sourceObject
                }, enumerable: !0,
                configurable: !0
            }), e.prototype.startDrag = function (e, i, n, s) {
                if (void 0 === s && (s = -1), !this.isDragging) {
                    this.$sourceObject = e, this.$sourceData = n, this.$agent.url = i, t.GRoot.inst.addChild(this.$agent);
                    var r = t.GRoot.inst.globalToLocal(t.GRoot.globalMouseStatus.mouseX, t.GRoot.globalMouseStatus.mouseY);
                    this.$agent.setXY(r.x, r.y), this.$agent.startDrag(s)
                }
            }, e.prototype.cancel = function () {
                null != this.$agent.parent && (this.$agent.stopDrag(), t.GRoot.inst.removeChild(this.$agent), this.$sourceData = null)
            }, e.prototype.$dragEnd = function (e) {
                if (this.isDragging) {
                    t.GRoot.inst.removeChild(this.$agent);
                    var i = this.$sourceData;
                    this.$sourceData = null;
                    for (var n = t.GRoot.inst.getObjectUnderPoint(e.data.global.x, e.data.global.y); null != n;) {
                        if (n.hasListener("__dragDrop")) return n.requestFocus(), e.currentTarget = n.displayObject, void n.emit("__dragDrop", e, i);
                        n = n.parent
                    }
                }
            }, e
        }();
        e.DragIndicator = i
    }(t.utils || (t.utils = {}))
}(fgui || (fgui = {})),
function (t) {
    ! function (e) {
        var i = function () {
            function e(e) {
                this.$inited = !1, this.$restrictString = null, this.$restrictRegex = null, this.$focused = !1, this.$textField = e, this.$input = new t.InputElement(e)
            }
            return e.prototype.initialize = function () {
                this.$inited || (this.$input.$addToStage(), this.$input.on("updateText", this.updateText, this), this.$input.on("__focusChanged", this.focusHandler, this), this.$textField.on(t.InteractiveEvents.Down, this.textFieldDownHandler, this), this.$inited = !0)
            }, e.prototype.textFieldDownHandler = function () {
                this.$onFocus()
            }, e.prototype.destroy = function () {
                this.$inited && (this.$input.$removeFromStage(), this.$textField.off(t.InteractiveEvents.Down, this.textFieldDownHandler, this), t.GRoot.inst.off(t.InteractiveEvents.Down, this.onStageDown, this), this.$input.off("updateText", this.updateText, this), this.$input.off("__focusChanged", this.focusHandler, this), this.$inited = !1)
            }, Object.defineProperty(e.prototype, "text", {
                get: function () {
                    return this.$input.text
                }, set: function (t) {
                    this.$input.text = t
                }, enumerable: !0,
                configurable: !0
            }), e.prototype.setColor = function (t) {
                return this.$input.setColor(t)
            }, e.prototype.updateText = function () {
                var t = this.$input.text,
                    e = !1;
                if (null != this.$restrictRegex) {
                    var i = t.match(this.$restrictRegex);
                    t = i ? i.join("") : "", e = !0
                }
                e && this.$input.text != t && (this.$input.text = t), this.$textField.text = this.$input.text, this.$textField.emit("__textChange", this.$textField)
            }, e.prototype.onStageDown = function (e) {
                t.GObject.castFromNativeObject(e.currentTarget) != this.$textField && this.$input.$hide()
            }, e.prototype.focusHandler = function (e) {
                "focus" == e ? this.$focused || (this.$focused = !0, this.$textField.$isTyping = !0, this.$textField.alpha = 0, this.$textField.emit("__focusChanged", "focus", this.$textField), this.$textField.emit("__textFocusIn", this.$textField)) : "blur" == e && this.$focused && (this.$focused = !1, t.GRoot.inst.off(t.InteractiveEvents.Down, this.onStageDown, this), this.$textField.$isTyping = !1, this.$textField.alpha = 1, this.$input.$onBlur(), this.$textField.emit("__focusChanged", "blur", this.$textField), this.$textField.emit("__textFocusOut", this.$textField))
            }, Object.defineProperty(e.prototype, "isFocused", {
                get: function () {
                    return this.$focused
                }, enumerable: !0,
                configurable: !0
            }), e.prototype.$getProperty = function (t) {
                return this.$inited && this.$input.getAttribute(t) || null
            }, e.prototype.$setProperty = function (t, e) {
                this.$inited && this.$input.setAttribute(t, e)
            }, Object.defineProperty(e.prototype, "$restrict", {
                get: function () {
                    return this.$restrictString
                }, set: function (t) {
                    this.$restrictString = t, null != this.$restrictString && this.$restrictString.length > 0 ? this.$restrictRegex = new RegExp(this.$restrictString) : this.$restrictRegex = null
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "type", {
                get: function () {
                    return this.$type
                }, set: function (t) {
                    t != this.$type && (this.$type = t)
                }, enumerable: !0,
                configurable: !0
            }), e.prototype.tryHideInput = function () {
                !this.$textField.visible && this.$input && this.$input.$removeFromStage()
            }, e.prototype.$updateProperties = function () {
                if (this.isFocused) return this.$input.resetInput(), void this.tryHideInput();
                this.$input.text = this.$textField.text, this.$input.resetInput(), this.tryHideInput()
            }, e.prototype.$onFocus = function () {
                var e = this;
                this.$textField.visible && !this.$focused && (t.GRoot.inst.off(t.InteractiveEvents.Down, this.onStageDown, this), t.GTimer.inst.callLater(function () {
                    t.GRoot.inst.on(t.InteractiveEvents.Down, e.onStageDown, e)
                }, this), this.$input.$show())
            }, e
        }();
        e.InputDelegate = i
    }(t.utils || (t.utils = {}))
}(fgui || (fgui = {})),
function (t) {
    ! function (t) {
        var e = function () {
            function t() {
                this.left = 0, this.right = 0, this.top = 0, this.bottom = 0
            }
            return t.prototype.parse = function (t) {
                if (t) {
                    var e = t.split(",");
                    if (1 == e.length) {
                        var i = parseInt(e[0]);
                        this.left = this.right = this.top = this.bottom = i
                    } else this.top = parseInt(e[0]), this.bottom = parseInt(e[1]), this.left = parseInt(e[2]), this.right = parseInt(e[3])
                } else this.left = this.right = this.top = this.bottom = 0
            }, t.prototype.copy = function (t) {
                this.top = t.top, this.bottom = t.bottom, this.left = t.left, this.right = t.right
            }, t
        }();
        t.Margin = e
    }(t.utils || (t.utils = {}))
}(fgui || (fgui = {})),
function (t) {
    ! function (t) {
        var e = function () {
            function t() {}
            return t.clamp = function (t, e, i) {
                return t < e ? t = e : t > i && (t = i), t
            }, t.clamp01 = function (t) {
                return t > 1 ? t = 1 : t < 0 && (t = 0), t
            }, t.isNumber = function (t) {
                return "number" == typeof t && !isNaN(t)
            }, t.sign = function (t) {
                return 0 === (t = Number(t)) || isNaN(t) ? t : t > 0 ? 1 : -1
            }, t.angleToRadian = function (e) {
                return e * t.RADIAN
            }, t.lerp = function (t, e, i) {
                return t + i * (e - t)
            }, t.RADIAN = Math.PI / 180, t
        }();
        t.NumberUtil = e
    }(t.utils || (t.utils = {}))
}(fgui || (fgui = {})),
function (t) {
    ! function (t) {
        var e = function () {
            function t() {}
            return t.inRange = function (t, e, i) {
                return e <= t && t <= i
            }, t.decodeUTF8 = function (e) {
                for (var i, n = 0, s = "", r = 0, o = 0, h = 0, a = 0; e.length > n;) {
                    var l = e[n++];
                    if (-1 == l) i = 0 != o ? 65533 : -1;
                    else if (0 == o) t.inRange(l, 0, 127) ? i = l : (t.inRange(l, 194, 223) ? (o = 1, a = 128, r = l - 192) : t.inRange(l, 224, 239) ? (o = 2, a = 2048, r = l - 224) : t.inRange(l, 240, 244) && (o = 3, a = 65536, r = l - 240), r *= Math.pow(64, o), i = null);
                    else if (t.inRange(l, 128, 191))
                        if (h += 1, r += (l - 128) * Math.pow(64, o - h), h !== o) i = null;
                        else {
                            var u = r,
                                c = a;
                            r = 0, o = 0, h = 0, a = 0, i = t.inRange(u, c, 1114111) && !this.inRange(u, 55296, 57343) ? u : l
                        } else r = 0, o = 0, h = 0, a = 0, n--, i = 65533;
                    null !== i && -1 !== i && (i <= 65535 ? i > 0 && (s += String.fromCharCode(i)) : (i -= 65536, s += String.fromCharCode(55296 + (i >> 10 & 1023)), s += String.fromCharCode(56320 + (1023 & i))))
                }
                return s
            }, t
        }();
        t.RawByte = e
    }(t.utils || (t.utils = {}))
}(fgui || (fgui = {})),
function (t) {
    ! function (t) {
        var e = function () {
            function t() {}
            return t.encodeHTML = function (t) {
                return t ? t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace("'", "&apos;") : ""
            }, t.getFileName = function (t) {
                var e = t.lastIndexOf("/");
                return -1 != e && (t = t.substr(e + 1)), -1 != (e = t.lastIndexOf("\\")) && (t = t.substr(e + 1)), -1 != (e = t.lastIndexOf(".")) ? t.substring(0, e) : t
            }, t.startsWith = function (t, e, i) {
                return void 0 === i && (i = !1), !!t && (!(t.length < e.length) && (t = t.substring(0, e.length), i ? t.toLowerCase() == e.toLowerCase() : t == e))
            }, t.endsWith = function (t, e, i) {
                return void 0 === i && (i = !1), !!t && (!(t.length < e.length) && (t = t.substring(t.length - e.length), i ? t.toLowerCase() == e.toLowerCase() : t == e))
            }, t.trim = function (e) {
                return t.trimLeft(t.trimRight(e))
            }, t.trimLeft = function (t) {
                var e, i = "";
                for (e = 0; e < t.length && (" " == (i = t.charAt(e)) || "\n" == i || "\r" == i); e++);
                return t.substr(e)
            }, t.trimRight = function (t) {
                var e, i = "";
                for (e = t.length - 1; e >= 0 && (" " == (i = t.charAt(e)) || "\n" == i || "\r" == i); e--);
                return t.substring(0, e + 1)
            }, t.convertToHtmlColor = function (t, e) {
                var i;
                void 0 === e && (e = !1), i = e ? (t >> 24 & 255).toString(16) : "";
                var n = (t >> 16 & 255).toString(16),
                    s = (t >> 8 & 255).toString(16),
                    r = (255 & t).toString(16);
                return 1 == i.length && (i = "0" + i), 1 == n.length && (n = "0" + n), 1 == s.length && (s = "0" + s), 1 == r.length && (r = "0" + r), "#" + i + n + s + r
            }, t.convertFromHtmlColor = function (t, e) {
                return void 0 === e && (e = !1), t.length < 1 ? 0 : ("#" == t.charAt(0) && (t = t.substr(1)), 8 == t.length ? (parseInt(t.substr(0, 2), 16) << 24) + parseInt(t.substr(2), 16) : e ? 4278190080 + parseInt(t, 16) : parseInt(t, 16))
            }, t
        }();
        t.StringUtil = e
    }(t.utils || (t.utils = {}))
}(fgui || (fgui = {})),
function (t) {
    ! function (t) {
        var e = function () {
            function t() {
                this.$readPos = 0, this.smallFontSize = 12, this.normalFontSize = 14, this.largeFontSize = 16, this.defaultImgWidth = 0, this.defaultImgHeight = 0, this.$handlers = {
                    url: this.onTag_URL,
                    img: this.onTag_IMG,
                    b: this.onTag_Simple,
                    i: this.onTag_Simple,
                    u: this.onTag_Simple,
                    sup: this.onTag_Simple,
                    sub: this.onTag_Simple,
                    color: this.onTag_COLOR,
                    font: this.onTag_FONT,
                    size: this.onTag_SIZE
                }
            }
            return t.prototype.onTag_URL = function (t, e, i) {
                return e ? "</a>" : null != i ? '<a href="' + i + '" target="_blank">' : '<a href="' + this.getTagText() + '" target="_blank">'
            }, t.prototype.onTag_IMG = function (t, e, i) {
                if (e) return null;
                var n = this.getTagText(!0);
                return n ? this.defaultImgWidth ? '<img src="' + n + '" width="' + this.defaultImgWidth + '" height="' + this.defaultImgHeight + '"/>' : '<img src="' + n + '"/>' : null
            }, t.prototype.onTag_Simple = function (t, e, i) {
                return e ? "</" + t + ">" : "<" + t + ">"
            }, t.prototype.onTag_COLOR = function (t, e, i) {
                return e ? "</font>" : '<font color="' + i + '">'
            }, t.prototype.onTag_FONT = function (t, e, i) {
                return e ? "</font>" : '<font face="' + i + '">'
            }, t.prototype.onTag_SIZE = function (t, e, i) {
                return e ? "</font>" : ("normal" == i ? i = "" + this.normalFontSize : "small" == i ? i = "" + this.smallFontSize : "large" == i ? i = "" + this.largeFontSize : i.length && "+" == i.charAt(0) ? i = "" + (this.smallFontSize + parseInt(i.substr(1))) : i.length && "-" == i.charAt(0) && (i = "" + (this.smallFontSize - parseInt(i.substr(1)))), '<font size="' + i + '">')
            }, t.prototype.getTagText = function (t) {
                void 0 === t && (t = !1);
                var e = this.$text.indexOf("[", this.$readPos);
                if (-1 == e) return null;
                var i = this.$text.substring(this.$readPos, e);
                return t && (this.$readPos = e), i
            }, t.prototype.parseStyle = function (t) {
                return []
            }, t.inst = new t, t
        }();
        t.UBBParser = e
    }(t.utils || (t.utils = {}))
}(fgui || (fgui = {})),
function (t) {
    ! function (t) {
        var e = function () {
            function t(t) {
                this.nodeName = t.nodeName, this.context = t, this.type = t.nodeType, this.text = this.type == Node.COMMENT_NODE || this.type == Node.TEXT_NODE ? this.context.textContent : null
            }
            return Object.defineProperty(t.prototype, "children", {
                get: function () {
                    return this.$children || (this.$children = i.getChildNodes(this)), this.$children
                }, enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "attributes", {
                get: function () {
                    return this.$attributes || (this.$attributes = i.getNodeAttributes(this)), this.$attributes
                }, enumerable: !0,
                configurable: !0
            }), t
        }();
        t.XmlNode = e;
        var i = function () {
            function t() {}
            return t.tryParse = function (i, n) {
                void 0 === n && (n = "application/xml");
                var s = t.$parser.parseFromString(i, n);
                return s && s.childNodes && s.childNodes.length >= 1 ? new e(s.firstChild) : null
            }, t.getXmlRoot = function (t) {
                if (!t || !t.context) throw new Error("Invalid xml node");
                for (var i = t.context; null != i.parentNode;) i = i.parentNode;
                return i == t.context ? t : new e(i)
            }, t.getChildNodes = function (t, i) {
                void 0 === i && (i = null);
                var n = t.context.childNodes,
                    s = [];
                if (!n || n.length <= 0) return s;
                for (var r = n.length, o = 0; o < r; o++) {
                    var h = n.item(o);
                    h.nodeType != Node.TEXT_NODE && ((!i || i && i.length > 0 && h.nodeName.toLowerCase() == i.toLowerCase()) && s.push(new e(h)))
                }
                return s
            }, t.getNodeAttributes = function (t) {
                var e = t.context.attributes,
                    i = {};
                if (!e || e.length <= 0) return i;
                for (var n = e.length, s = 0; s < n; s++) {
                    var r = e.item(s);
                    i[r.nodeName] = r.nodeValue
                }
                return i
            }, t.$parser = new DOMParser, t
        }();
        t.XmlParser = i
    }(t.utils || (t.utils = {}))
}(fgui || (fgui = {}));