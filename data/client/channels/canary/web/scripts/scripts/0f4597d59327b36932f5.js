"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["20011"],
  {
    482682: function (t) {
      t.exports = "/assets/ebb5b41de823fbc19d12.png";
    },
    450125: function (t) {
      t.exports = "/assets/1e4932a7afbb1fcdba2d.png";
    },
    733949: function (t) {
      t.exports = "/assets/e1ce6b38901837435ec5.png";
    },
    877604: function (t, i, e) {
      e(411104);
      var s,
        n = e(735250),
        h = e(470079),
        a = e(120356),
        r = e.n(a),
        l = e(111543);
      function o(t, i, e) {
        return (
          i in t
            ? Object.defineProperty(t, i, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[i] = e),
          t
        );
      }
      let d = (t) =>
        new Promise((i, e) => {
          null == t && e(Error("No image src passed"));
          let s = new Image();
          (s.src = t), (s.onload = () => i(s)), (s.onerror = (t) => e(t));
        });
      class u extends (s = h.PureComponent) {
        componentDidUpdate(t) {
          t.src !== this.props.src &&
            this.setState({ loaded: !1 }, () => this.initialize());
        }
        initialize() {
          d(this.props.src).then(() => {
            !this.unmounting && this.setState({ loaded: !0 });
          });
        }
        componentWillUnmount() {
          this.unmounting = !0;
        }
        render() {
          let {
              className: t,
              src: i,
              alt: e,
              width: s,
              height: h,
              onLoad: a,
              style: o,
              imageClassName: d,
            } = this.props,
            { loaded: u } = this.state;
          return (0, n.jsx)("div", {
            className: t,
            style: { ...o, width: s, height: h },
            children: (0, n.jsx)("img", {
              className: r()(l.image, d, { [l.loaded]: u }),
              width: s,
              height: h,
              src: i,
              alt: e,
              onLoad: a,
            }),
          });
        }
        constructor(t) {
          super(t),
            o(this, "unmounting", !1),
            o(this, "state", { loaded: !1 }),
            this.initialize();
        }
      }
      o(u, "defaultProps", { width: 0, height: 0, alt: "" }), (i.Z = u);
    },
    133853: function (t, i, e) {
      e.d(i, {
        Z: function () {
          return p;
        },
      }),
        e(47120);
      var s,
        n = e(735250),
        h = e(470079),
        a = e(120356),
        r = e.n(a),
        l = e(748780),
        o = e(481060),
        d = e(981631),
        u = e(559737);
      function c(t, i, e) {
        return (
          i in t
            ? Object.defineProperty(t, i, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[i] = e),
          t
        );
      }
      class p extends (s = h.Component) {
        componentDidMount() {
          this.props.show && this.animate(1);
        }
        componentDidUpdate(t) {
          t.show !== this.props.show && this.animate(this.props.show ? 1 : 0);
        }
        getAnimatedStyle() {
          let { anim: t } = this,
            { reducedMotion: i } = this.context;
          return {
            opacity: t,
            transform: i.enabled
              ? void 0
              : [
                  {
                    translateY: t.interpolate({
                      inputRange: [0, 1],
                      outputRange: ["-100px", "0px"],
                    }),
                  },
                  { translateZ: 0 },
                ],
          };
        }
        render() {
          return (0, n.jsx)(l.Z.a, {
            href: d.Z5c.INDEX,
            target: "_blank",
            rel: "noopener",
            className: r()(u.logo, this.props.className),
            style: this.getAnimatedStyle(),
          });
        }
        constructor(...t) {
          super(...t),
            c(this, "anim", new l.Z.Value(0)),
            c(this, "animate", (t) => {
              l.Z.spring(this.anim, {
                toValue: t,
                friction: 10,
                tension: 100,
              }).start();
            });
        }
      }
      c(p, "contextType", o.AccessibilityPreferencesContext);
    },
    686694: function (t, i, e) {
      var s,
        n = e(735250),
        h = e(470079),
        a = e(120356),
        r = e.n(a),
        l = e(692547),
        o = e(477690),
        d = e(481060),
        u = e(585483),
        c = e(624138),
        p = e(890056),
        m = e(636879),
        f = e(810847),
        v = e(898625),
        g = e(981631),
        w = e(710317);
      function b(t, i, e) {
        return (
          i in t
            ? Object.defineProperty(t, i, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[i] = e),
          t
        );
      }
      let x = (0, c.Mg)(o.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
        E = 1 / 120;
      class y extends (s = h.Component) {
        componentDidMount() {
          this.initialize();
        }
        componentDidUpdate(t) {
          let { waveState: i } = this.props;
          i === v.hO.FILLING && i !== t.waveState && this.waveFill();
        }
        componentWillUnmount() {
          this.terminate();
        }
        initialize() {
          this.children.forEach((t) => t.initialize()),
            this.bindEvents(),
            this.resizeCanvas(),
            document.hidden && this.delayedPause();
        }
        terminate() {
          this.pause(),
            this.unbindEvents(),
            this.children.forEach((t) => t.terminate());
        }
        bindEvents() {
          window.addEventListener("resize", this.resizeCanvas, !1),
            window.addEventListener("blur", this.delayedPause, !1),
            window.addEventListener("focus", this.play, !1),
            document.addEventListener(
              "visibilitychange",
              this.handleVisibilityChange,
              !1,
            ),
            u.S.subscribe(g.CkL.WAVE_EMPHASIZE, this.handleWaveEmphasize);
        }
        unbindEvents() {
          window.removeEventListener("resize", this.resizeCanvas, !1),
            window.removeEventListener("blur", this.delayedPause, !1),
            window.removeEventListener("focus", this.play, !1),
            document.removeEventListener(
              "visibilitychange",
              this.handleVisibilityChange,
              !1,
            ),
            u.S.unsubscribe(g.CkL.WAVE_EMPHASIZE, this.handleWaveEmphasize);
        }
        advanceTransitionalState() {
          let { waveState: t } = this.props;
          (t === v.hO.INITIAL || t === v.hO.FILLING) &&
            this.updateWaveState(t + 1);
        }
        waveFill() {
          this._isPlaying
            ? this.children.forEach((t) => t.fill())
            : this.updateWaveState(v.hO.FILLED);
        }
        updateAnimation(t) {
          this.children.forEach((i) => i.update(t));
        }
        renderAnimation() {
          let { canvasFillStyle: t } = this.props,
            { canvasContext: i } = this;
          if (null != i)
            (i.fillStyle = t),
              i.fillRect(0, 0, this.width, this.height),
              this.children.forEach((t) => t.render(i));
        }
        render() {
          let { waveState: t, hideFallback: i, embedded: e } = this.props;
          return (0, n.jsx)(d.AccessibilityPreferencesContext.Consumer, {
            children: (s) => {
              let { reducedMotion: h } = s;
              return h.enabled
                ? (0, n.jsx)("div", {
                    className: r()(w.fallbackImage, {
                      [w.embedded]: e,
                      [w.visible]: !i && t >= v.hO.ENTERED,
                    }),
                  })
                : (0, n.jsx)("canvas", {
                    className: r()(w.canvas, { [w.embedded]: e }),
                    ref: this.setCanvas,
                  });
            },
          });
        }
        constructor(t) {
          super(t),
            b(this, "width", 0),
            b(this, "height", 0),
            b(this, "canvas", void 0),
            b(this, "canvasContext", void 0),
            b(this, "children", []),
            b(this, "wave", void 0),
            b(this, "ratio", 0),
            b(this, "_lastTick", 0),
            b(this, "_isPlaying", !1),
            b(this, "_reqAnimId", null),
            b(this, "_pauseTimeout", void 0),
            b(this, "setCanvas", (t) => {
              var i;
              if (null == t) return;
              (this.canvas = t),
                (this.canvasContext = this.canvas.getContext("2d"));
              let e =
                  null !== (i = window.devicePixelRatio) && void 0 !== i
                    ? i
                    : 1,
                s =
                  this.canvasContext.webkitBackingStorePixelRatio ||
                  this.canvasContext.mozBackingStorePixelRatio ||
                  this.canvasContext.msBackingStorePixelRatio ||
                  this.canvasContext.oBackingStorePixelRatio ||
                  this.canvasContext.backingStorePixelRatio ||
                  1;
              (this.ratio = e / s), this.resizeCanvas();
            }),
            b(this, "resizeCanvas", () => {
              (this.width = window.innerWidth),
                (this.height = window.innerHeight);
              let {
                canvas: t,
                canvasContext: i,
                width: e,
                height: s,
                ratio: n,
              } = this;
              null != t &&
                null != i &&
                ((t.width = e * n),
                (t.height = s * n),
                (t.style.width = e + "px"),
                (t.style.height = s + "px"),
                i.scale(n, n)),
                e <= x ? this.pause() : this.play(),
                this.wave.resizeWave(),
                this.renderAnimation();
            }),
            b(this, "handleVisibilityChange", () => {
              document.hidden ? this.delayedPause() : this.play();
            }),
            b(this, "play", () => {
              clearTimeout(this._pauseTimeout),
                !this._isPlaying && ((this._isPlaying = !0), this.run());
            }),
            b(this, "pause", () => {
              clearTimeout(this._pauseTimeout),
                (this._isPlaying = !1),
                null != this._reqAnimId &&
                  window.cancelAnimationFrame(this._reqAnimId),
                (this._reqAnimId = null),
                this.advanceTransitionalState();
            }),
            b(this, "delayedPause", () => {
              clearTimeout(this._pauseTimeout),
                (this._pauseTimeout = setTimeout(this.pause, 4e3));
            }),
            b(this, "updateWaveState", (t) => {
              let { updateWaveState: i } = this.props;
              i(t);
            }),
            b(this, "handleWaveEmphasize", () => {
              this.wave.emphasize();
            }),
            b(this, "run", () => {
              if (!this._isPlaying) return;
              if (0 === this._lastTick) {
                (this._lastTick = Date.now()),
                  (this._reqAnimId = requestAnimationFrame(this.run));
                return;
              }
              let t = Date.now(),
                i = Math.min((t - this._lastTick) / 1e3, 8 * E);
              for (; i > 0; ) {
                let t = i < E ? i : E;
                this.updateAnimation(t), (i -= t);
              }
              this.renderAnimation(),
                (this._lastTick = t),
                (this._reqAnimId = requestAnimationFrame(this.run));
            }),
            (this.wave = new f.Z(this.updateWaveState)),
            (this.children = [new p.Z(), new m.Z(), this.wave]);
        }
      }
      b(y, "defaultProps", { embedded: !1 });
      i.Z = (t) => {
        let i = (0, d.useToken)(l.Z.unsafe_rawColors.PRIMARY_630).hex();
        return (0, n.jsx)(y, { canvasFillStyle: i, ...t });
      };
    },
    568154: function (t, i, e) {
      e.d(i, {
        h: function () {
          return w;
        },
      }),
        e(47120);
      var s,
        n = e(735250),
        h = e(470079),
        a = e(120356),
        r = e.n(a),
        l = e(477690),
        o = e(877604),
        d = e(624138),
        u = e(133853),
        c = e(686694),
        p = e(898625),
        m = e(201680);
      function f(t, i, e) {
        return (
          i in t
            ? Object.defineProperty(t, i, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[i] = e),
          t
        );
      }
      let v = (0, d.Mg)(l.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE);
      function g(t, i) {
        let { innerWidth: e, innerHeight: s } = window;
        if (0 === t || 0 === i) return null;
        let n = i / t,
          h = e,
          a = Math.round(e * n);
        return (
          a < s && ((a = s), (h = Math.round(s * (n = t / i)))),
          { naturalWidth: t, naturalHeight: i, width: h, height: a }
        );
      }
      function w(t) {
        let { splash: i, children: e } = t,
          [{ width: s, height: a }, l] = h.useState({
            width: 0,
            height: 0,
            naturalHeight: 0,
            naturalWidth: 0,
          });
        return (
          h.useEffect(() => {
            function t() {
              l((t) => {
                let { naturalWidth: i, naturalHeight: e } = t,
                  s = g(i, e);
                return null != s ? s : t;
              });
            }
            return (
              window.addEventListener("resize", t),
              () => window.removeEventListener("reslize", t)
            );
          }, []),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(o.Z, {
                className: r()(m.rightSplit),
                onLoad: function (t) {
                  let { currentTarget: i } = t,
                    { naturalWidth: e, naturalHeight: s } = i,
                    n = g(e, s);
                  null != n && l(n);
                },
                src: i,
                width: s,
                height: a,
              }),
              (0, n.jsx)("div", {
                className: r()(m.leftSplit, { [m.nonEmbeddedLeftSplit]: !0 }),
                children: e,
              }),
            ],
          })
        );
      }
      class b extends (s = h.PureComponent) {
        componentWillUnmount() {
          window.removeEventListener("resize", this.handleResize);
        }
        calculateShowWaveAnimation() {
          return window.innerWidth > v;
        }
        renderSplashArt() {
          let { splash: t, embedded: i } = this.props,
            { width: e, height: s } = this.state;
          return null != t
            ? (0, n.jsx)(o.Z, {
                className: r()(m.rightSplit, { [m.embedded]: i }),
                src: t,
                width: e,
                height: s,
                onLoad: this.handleLoad,
              })
            : null;
        }
        renderWave() {
          let { waveState: t, updateWaveState: i, embedded: e } = this.props,
            { showWaveAnimation: s, splashLoaded: h } = this.state;
          return s
            ? (0, n.jsx)(c.Z, {
                embedded: e,
                waveState: t,
                updateWaveState: i,
                hideFallback: !h,
              })
            : (0, n.jsx)("div", { className: m.mobileWave });
        }
        renderContent() {
          let {
              children: t,
              waveState: i,
              showLogo: e,
              logoClassName: s,
              embedded: a,
            } = this.props,
            { showWaveAnimation: l } = this.state;
          return (0, n.jsxs)(h.Fragment, {
            children: [
              this.renderWave(),
              (0, n.jsxs)("div", {
                className: r()(m.leftSplit, { [m.nonEmbeddedLeftSplit]: a }),
                children: [
                  e
                    ? (0, n.jsx)(u.Z, {
                        show: !l || (i === p.hO.ENTERED && i !== p.hO.FILLING),
                        className: r()(m.logo, s),
                      })
                    : null,
                  t,
                ],
              }),
            ],
          });
        }
        render() {
          let { className: t } = this.props;
          return (0, n.jsxs)("div", {
            className: r()(t, m.wrapper),
            children: [this.renderSplashArt(), this.renderContent()],
          });
        }
        constructor(...t) {
          super(...t),
            f(this, "state", {
              naturalWidth: 0,
              naturalHeight: 0,
              width: 0,
              height: 0,
              showWaveAnimation: this.calculateShowWaveAnimation(),
              splashLoaded: !1,
            }),
            f(this, "handleResize", () => {
              let { naturalWidth: t, naturalHeight: i } = this.state,
                e = g(t, i),
                s = this.calculateShowWaveAnimation();
              null != e
                ? this.setState({ ...e, showWaveAnimation: s })
                : this.setState({ showWaveAnimation: s });
            }),
            f(this, "handleLoad", (t) => {
              let { currentTarget: i } = t,
                { naturalWidth: e, naturalHeight: s } = i,
                n = g(e, s);
              null != n && this.setState(n),
                this.setState({ splashLoaded: !0 }),
                window.removeEventListener("resize", this.handleResize),
                window.addEventListener("resize", this.handleResize);
            });
        }
      }
      f(b, "defaultProps", { embedded: !1 }), (i.Z = 12633 == e.j ? b : null);
    },
    890056: function (t, i, e) {
      var s = e(684827),
        n = e(482682);
      function h(t, i, e) {
        return (
          i in t
            ? Object.defineProperty(t, i, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[i] = e),
          t
        );
      }
      i.Z = class t {
        initialize() {
          (this.img = new Image()),
            (this.img.onload = () => {
              this.loaded = !0;
            }),
            (this.img.src = n),
            this.bind();
        }
        bind() {
          window.addEventListener("mousemove", this.handleMouseMove, !1);
        }
        unbind() {
          window.removeEventListener("mousemove", this.handleMouseMove, !1);
        }
        terminate() {
          (this.img = null),
            (this.loaded = !1),
            (this.isFilled = !1),
            (this.alpha = 0),
            this.unbind();
        }
        update(t) {
          if (!!this.loaded)
            !this.isFilled && this.alpha < 1
              ? (this.alpha = Math.min(1, this.alpha + t))
              : this.isFilled &&
                this.alpha > 0 &&
                (this.alpha = Math.max(0, this.alpha - 3 * t)),
              (this.velX +=
                (0, s.B)(this.targetX, this.x, this.velX, this.spring) * t),
              (this.velY +=
                (0, s.B)(this.targetY, this.y, this.velY, this.spring) * t),
              (this.x += this.velX * t),
              (this.y += this.velY * t);
        }
        render(t) {
          let { img: i } = this;
          if (!!this.loaded && null != i)
            t.save(),
              (t.globalCompositeOperation = "source-atop"),
              (t.globalAlpha = this.alpha),
              t.drawImage(i, this.x + 20, this.y + 20),
              t.restore();
        }
        fill() {
          this.isFilled = !0;
        }
        constructor() {
          h(this, "img", null),
            h(this, "loaded", !1),
            h(this, "isFilled", !1),
            h(this, "alpha", 0),
            h(this, "mx", 0),
            h(this, "my", 0),
            h(this, "x", 0),
            h(this, "y", 0),
            h(this, "velX", 0),
            h(this, "velY", 0),
            h(this, "targetX", 40),
            h(this, "targetY", 40),
            h(this, "spring", { friction: 60, tension: 100 }),
            h(this, "handleMouseMove", (t) => {
              let { clientX: i, clientY: e } = t;
              (this.targetX = (i / window.innerWidth) * 20 + 20),
                (this.targetY = (e / window.innerWidth) * 20 + 20);
            });
        }
      };
    },
    956843: function (t, i, e) {
      var s = e(684827),
        n = e(898625);
      function h(t, i, e) {
        return (
          i in t
            ? Object.defineProperty(t, i, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[i] = e),
          t
        );
      }
      let a = ["#7d8187", "#18191c", "#8fa2df", "#4f545c"];
      i.Z = class t {
        checkBounds() {
          this.x > this.offscreenX
            ? (this.x = -this.size)
            : this.y > this.offscreenY
              ? (this.y = -this.size)
              : this.x < -this.size
                ? (this.x = this.offscreenX)
                : this.y < -this.size && (this.y = this.offscreenY);
        }
        update(t, i) {
          this.checkBounds(),
            (this.y += i * this.positionMultiplier),
            (this.x += t * this.positionMultiplier);
        }
        render(t, i) {
          t.beginPath(),
            (t.globalAlpha = (i * this.depth) / 4),
            t.arc(this.x, this.y, this.size, 0, n.uo, !0),
            (t.fillStyle = this.color),
            t.fill(),
            (t.globalAlpha = 1);
        }
        constructor() {
          h(this, "size", (0, s.M)(2, 3)),
            h(this, "depth", (0, s.M)(1, 4)),
            h(this, "positionMultiplier", this.depth / 4),
            h(this, "color", a[4 - this.depth]),
            h(this, "offscreenX", n.pg + this.size),
            h(this, "offscreenY", n.pg + this.size),
            h(this, "x", (0, s.M)(-this.size, this.offscreenX)),
            h(this, "y", (0, s.M)(-this.size, this.offscreenY));
        }
      };
    },
    636879: function (t, i, e) {
      e(653041);
      var s = e(956843),
        n = e(722734);
      function h(t, i, e) {
        return (
          i in t
            ? Object.defineProperty(t, i, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[i] = e),
          t
        );
      }
      i.Z = class t {
        initialize() {
          (this.particles = []),
            this.wind.initialize(),
            (this.loadInTimer = setTimeout(() => {
              for (let t = 0; t < 75; t++) this.particles.push(new s.Z());
            }, 250));
        }
        terminate() {
          (this.particles = []),
            this.wind.terminate(),
            null != this.loadInTimer && clearTimeout(this.loadInTimer);
        }
        update(t) {
          if (0 !== this.particles.length)
            !this.isFilled && this.alpha < 1
              ? (this.alpha = Math.min(1, this.alpha + t))
              : this.isFilled &&
                this.alpha > 0 &&
                (this.alpha = Math.max(0, this.alpha - 3 * t)),
              this.wind.update(),
              this.particles.forEach((i) =>
                i.update(
                  10 * this.wind.forceX * t,
                  10 * Math.min(this.wind.forceY, -0.001) * t + -0.1,
                ),
              );
        }
        render(t) {
          if (0 !== this.particles.length)
            t.save(),
              (t.globalCompositeOperation = "source-atop"),
              this.particles.forEach((i) => i.render(t, this.alpha)),
              t.restore();
        }
        fill() {
          this.isFilled = !0;
        }
        constructor() {
          h(this, "particles", []),
            h(this, "wind", new n.Z()),
            h(this, "alpha", 0),
            h(this, "isFilled", !1),
            h(this, "loadInTimer", null);
        }
      };
    },
    50516: function (t, i, e) {
      var s = e(684827),
        n = e(898625);
      function h(t, i, e) {
        return (
          i in t
            ? Object.defineProperty(t, i, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[i] = e),
          t
        );
      }
      let a = -2.15;
      i.Z = class t {
        updateStatic() {
          (this.targetX =
            this.targetX + 30 * Math.cos(this.angle) * Math.sin(this.count)),
            (this.targetY =
              this.targetY + 30 * Math.sin(this.angle) * Math.sin(this.count)),
            (this.x = this.targetX),
            (this.y = this.targetY);
        }
        update(t) {
          let i, e;
          if (
            (this.speedUp > 0
              ? ((this.speedUp = Math.max(0, this.speedUp - t)),
                (this.count += t * (10 * Math.min(this.speedUp, 1) + 0.4)))
              : (this.count += 0.4 * t),
            (i = (0, s.B)(this.targetX, this.x, this.velX, this.spring)),
            (e = (0, s.B)(this.targetY, this.y, this.velY, this.spring)),
            (this.velX += i * t),
            (this.velY += e * t),
            this.oscillate)
          ) {
            let n =
                this.targetX +
                this.waveRange * Math.cos(this.angle) * Math.sin(this.count),
              h =
                this.targetY +
                this.waveRange * Math.sin(this.angle) * Math.sin(this.count);
            (i = (0, s.B)(n, this.x, this.velX, this.spring)),
              (e = (0, s.B)(h, this.y, this.velY, this.spring)),
              (this.velX += i * t),
              (this.velY += e * t);
          }
          (this.x += this.velX * t), (this.y += this.velY * t);
        }
        render(t) {
          (t.fillStyle = "#fff"), t.fillRect(this.x, this.y, 4, 4);
        }
        constructor(t) {
          h(this, "x", -40),
            h(this, "y", -40),
            h(this, "targetX", 0),
            h(this, "targetY", 0),
            h(this, "oscillate", !0),
            h(this, "velX", 0),
            h(this, "velY", 0),
            h(this, "angle", 0),
            h(this, "speedUp", 1.5),
            h(this, "waveRange", 60),
            h(this, "count", void 0),
            h(this, "index", void 0),
            h(this, "spring", { friction: 15, tension: n.O1 }),
            (this.index = t),
            (this.spring.tension = n.O1 * Math.max(0.1, t / 7) + n.O1),
            (this.count = a * t);
        }
      };
    },
    684827: function (t, i, e) {
      function s(t, i) {
        return Math.floor(Math.random() * (i - t + 1) + t);
      }
      function n(t, i, e, s) {
        return s.tension * (t - i) - s.friction * e;
      }
      e.d(i, {
        B: function () {
          return n;
        },
        M: function () {
          return s;
        },
      });
    },
    810847: function (t, i, e) {
      e(47120), e(653041);
      var s = e(954955),
        n = e.n(s),
        h = e(477690),
        a = e(624138),
        r = e(50516),
        l = e(684827),
        o = e(898625);
      function d(t, i, e) {
        return (
          i in t
            ? Object.defineProperty(t, i, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[i] = e),
          t
        );
      }
      let u = 7.5,
        c = (0, a.Mg)(h.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
        p = 1 / 60;
      function m(t, i, e, s) {
        return (e / s) * i + t;
      }
      function f() {
        return Math.min(
          Math.max(
            Math.min(0.8 * window.innerWidth, 0.8 * window.innerHeight),
            o.LE,
          ),
          o.pg,
        );
      }
      i.Z = class t {
        initialize() {
          this._resizeWave();
        }
        emphasize() {
          this.points.forEach((t) => (t.speedUp = 1));
        }
        terminate() {
          this.points = [];
        }
        update(t) {
          if (0 !== this.points.length)
            this.points.forEach((i) => i.update(Math.min(t, p))),
              !this.hasEntered &&
                this.points[0].x > c &&
                ((this.hasEntered = !0), this.updateWaveState(o.hO.ENTERED)),
              this.isFilling &&
                this.points[0].x > this.points[0].targetX &&
                ((this.isFilling = !1), this.updateWaveState(o.hO.FILLED));
        }
        render(t) {
          if (0 === this.points.length) return;
          let [i, ...e] = this.points;
          t.save(),
            t.beginPath(),
            t.moveTo(i.x, i.y),
            e.forEach((i, s) => {
              if (null == e[s + 1]) t.quadraticCurveTo(i.x, i.y, i.x, i.y);
              else {
                let n = (i.x + e[s + 1].x) / 2,
                  h = (i.y + e[s + 1].y) / 2;
                t.quadraticCurveTo(i.x, i.y, n, h);
              }
            }),
            t.lineTo(0, 0),
            t.closePath(),
            (t.fillStyle = "#000"),
            (t.globalCompositeOperation = "destination-in"),
            t.fill(),
            t.restore();
        }
        fill() {
          let t =
              Math.sqrt(
                window.innerWidth * window.innerWidth +
                  window.innerHeight * window.innerHeight,
              ) + 100,
            i = f() - 140,
            e = (t, i, e, s) => {
              (t.targetX = -40 + i * Math.cos(o.uo * ((e / 15) * 0.25 + 0))),
                (t.targetY = -40 + i * Math.sin(o.uo * ((e / 15) * 0.25 + 0))),
                s &&
                  ((t.targetX += (0, l.M)(0, 30) - 15),
                  (t.targetY += (0, l.M)(0, 30) - 15),
                  (t.speedUp = 3),
                  (t.spring.tension = o.O1 * Math.random() * 0.5 + o.O1));
            };
          this.points.forEach((t, s) => e(t, i, s, !0)),
            setTimeout(() => {
              this.points.forEach((i, s) => {
                e(i, t, s, !1);
                let n = 1 - i.index / 7.5;
                (i.spring.friction +=
                  i.spring.friction + i.spring.friction * n),
                  (i.spring.tension = 0.7 * o.O1 + 80 * Math.random()),
                  (i.waveRange = 2 * i.waveRange);
              }),
                (this.isFilling = !0),
                this.updateWaveState(o.hO.FILLING);
            }, 250);
        }
        constructor(t) {
          d(this, "points", []),
            d(this, "hasEntered", !1),
            d(this, "isFilling", !1),
            d(this, "updateWaveState", void 0),
            d(this, "_resizeWave", () => {
              let t = f();
              this.points.forEach((i, e) => {
                let s = -40 + t * Math.cos(o.uo * ((e / 15) * 0.25 + 0)),
                  n = -40 + t * Math.sin(o.uo * ((e / 15) * 0.25 + 0));
                0 !== e
                  ? (n += (0, l.M)(0, 30) - 15)
                  : (s += (0, l.M)(0, 30) - 15),
                  (i.targetX = s),
                  (i.targetY = n),
                  (i.angle = Math.atan2(n, s));
              });
            }),
            d(this, "resizeWave", n()(this._resizeWave, 200)),
            (this.updateWaveState = t),
            (this.hasEntered = !1);
          for (let t = 0; t <= 15; t++)
            this.points.push(
              new r.Z(Math.floor(u - Math.floor(Math.abs(t - u)))),
            );
        }
      };
    },
    898625: function (t, i, e) {
      e.d(i, {
        LE: function () {
          return s;
        },
        O1: function () {
          return a;
        },
        hO: function () {
          return r;
        },
        pg: function () {
          return n;
        },
        uo: function () {
          return h;
        },
      });
      let s = 780,
        n = 1e3,
        h = 2 * Math.PI,
        a = 150,
        r = { INITIAL: 0, ENTERED: 1, FILLING: 2, FILLED: 3 };
    },
    722734: function (t, i) {
      function e(t, i, e) {
        return (
          i in t
            ? Object.defineProperty(t, i, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[i] = e),
          t
        );
      }
      function s(t, i) {
        return Math.max(Math.min((t - i) / 30, 1), -1);
      }
      i.Z = class t {
        initialize() {
          window.addEventListener("mousemove", this.handleMouseMove);
        }
        terminate() {
          window.removeEventListener("mousemove", this.handleMouseMove);
        }
        update() {
          this.x !== this.px &&
            this.y !== this.py &&
            ((this.forceX += s(this.x, this.px)),
            (this.forceY += s(this.y, this.py)),
            (this.px = this.x),
            (this.py = this.y)),
            0 !== this.forceX && (this.forceX = this.forceX * this.resistance),
            0 !== this.forceY && (this.forceY = this.forceY * this.resistance);
        }
        render() {}
        constructor() {
          e(this, "resistance", 0.98),
            e(this, "px", 0),
            e(this, "py", 0),
            e(this, "x", 0),
            e(this, "y", 0),
            e(this, "forceX", 0),
            e(this, "forceY", 0),
            e(this, "handleMouseMove", (t) => {
              let { clientX: i, clientY: e } = t;
              (this.x = i), (this.y = e);
            });
        }
      };
    },
  },
]);
//# sourceMappingURL=0f4597d59327b36932f5.js.map
