"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21617"],
  {
    186952: function (i, t, e) {
      let s;
      e.r(t),
        e.d(t, {
          default: function () {
            return w;
          },
        }),
        e(47120),
        e(315314),
        e(610138),
        e(216116),
        e(78328),
        e(815648),
        e(653041),
        e(411104);
      var n = e(772848),
        r = e(647425),
        a = e(170830);
      function o(i, t, e) {
        return (
          t in i
            ? Object.defineProperty(i, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (i[t] = e),
          i
        );
      }
      let l = Math.min(4, Math.ceil(navigator.hardwareConcurrency / 2)),
        h = "undefined" != typeof OffscreenCanvas,
        d = [],
        u = new Map(),
        v = new Map(),
        I = (0, a.G)(async () => {
          for (let i = 0; i < l; i++) {
            let i = new Worker(new URL("/assets/" + e.u("36412"), e.b));
            d.push({ worker: i, numActive: 0 });
          }
        }),
        c = (0, a.G)(async () => {
          s = (await e.e("57961").then(e.bind(e, 8048))).default;
        });
      h ? I() : c();
      class w {
        get workerIndex() {
          let i = u.get(this.canvasId);
          if (null == i) {
            let s = v.get(this.assetUrl);
            if (null != s) i = s;
            else {
              var t, e;
              let s =
                null !==
                  (e =
                    null === (t = d[0]) || void 0 === t
                      ? void 0
                      : t.numActive) && void 0 !== e
                  ? e
                  : 0;
              for (let [t, e] of d.entries())
                e.numActive <= s && ((s = e.numActive), (i = t));
              v.set(this.assetUrl, i);
            }
            u.set(this.canvasId, i), d[i].numActive++;
          }
          return i;
        }
        get worker() {
          let i = this.workerIndex;
          if (null == d[i])
            throw Error("No worker in pool at index ".concat(i));
          return d[i].worker;
        }
        async drop() {
          var i, t, e, s;
          if ((await this.initializationPromise, h)) {
            null === (i = this.worker) ||
              void 0 === i ||
              i.removeEventListener("message", this.handleMessage),
              null === (t = this.worker) ||
                void 0 === t ||
                t.removeEventListener("error", this.handleError),
              null === (e = this.worker) ||
                void 0 === e ||
                e.postMessage({ canvasId: this.canvasId, type: r.u.DROP });
            let s = u.get(this.canvasId);
            if (null == s)
              throw Error(
                "No worker index assigned for asset ".concat(this.canvasId),
              );
            u.delete(this.canvasId), d[s].numActive--;
          } else null === (s = this.lottieView) || void 0 === s || s.drop();
          this.observer.disconnect();
        }
        setState(i, t) {
          var e, s;
          (this.shouldAnimate = i),
            this.isInitialized &&
              (h
                ? null === (e = this.worker) ||
                  void 0 === e ||
                  e.postMessage({
                    canvasId: this.canvasId,
                    type: r.u.STATE_CHANGE,
                    shouldAnimate: i,
                    nextFrame: t,
                  })
                : null === (s = this.lottieView) ||
                  void 0 === s ||
                  s.setState(i, t));
        }
        constructor({
          canvas: i,
          animationId: t,
          assetUrl: e,
          assetData: a,
          onInitialDraw: l,
          onError: d,
        }) {
          o(this, "assetUrl", void 0),
            o(this, "assetData", void 0),
            o(this, "canvasId", void 0),
            o(this, "lottieView", void 0),
            o(this, "observer", void 0),
            o(this, "isVisible", !1),
            o(this, "isInitialized", !1),
            o(this, "initializationPromise", void 0),
            o(this, "shouldAnimate", !1),
            o(this, "onInitialDraw", void 0),
            o(this, "onError", void 0),
            o(this, "handleVisibilityChange", (i) => {
              let t = i[i.length - 1].isIntersecting;
              if (t !== this.isVisible) {
                var e, s;
                if (((this.isVisible = t), !this.isInitialized)) return;
                h
                  ? null === (e = this.worker) ||
                    void 0 === e ||
                    e.postMessage({
                      canvasId: this.canvasId,
                      type: r.u.VISIBILITY_CHANGE,
                      isVisible: t,
                    })
                  : null === (s = this.lottieView) ||
                    void 0 === s ||
                    s.setVisibility(t);
              }
            }),
            o(this, "handleMessage", (i) => {
              var t, e;
              i.data.type === r.u.FIRST_DRAW &&
                (null === (t = this.onInitialDraw) ||
                  void 0 === t ||
                  t.call(this)),
                i.data.type === r.u.ERROR &&
                  (null === (e = this.onError) || void 0 === e || e.call(this));
            }),
            o(this, "handleError", (i) => {
              var t;
              null === (t = this.onError) || void 0 === t || t.call(this, i);
            }),
            (this.canvasId = (0, n.Z)()),
            (this.assetUrl = e),
            (this.assetData = a),
            (this.onInitialDraw = l),
            (this.onError = d),
            (this.observer = new IntersectionObserver(
              this.handleVisibilityChange,
            )),
            this.observer.observe(i),
            h
              ? (this.initializationPromise = I().then(() => {
                  var s, n, o;
                  null === (s = this.worker) ||
                    void 0 === s ||
                    s.addEventListener("message", this.handleMessage),
                    null === (n = this.worker) ||
                      void 0 === n ||
                      n.addEventListener("error", this.handleError);
                  let l = i.transferControlToOffscreen();
                  null === (o = this.worker) ||
                    void 0 === o ||
                    o.postMessage(
                      {
                        type: r.u.INITIALIZE,
                        animationId: t,
                        assetUrl: e,
                        assetData: a,
                        canvas: l,
                        canvasId: this.canvasId,
                        isVisible: this.isVisible,
                        shouldAnimate: this.shouldAnimate,
                      },
                      [l],
                    ),
                    (this.isInitialized = !0);
                }))
              : (this.initializationPromise = c().then(() => {
                  (this.lottieView = new s({
                    canvas: i,
                    id: t,
                    assetUrl: e,
                    assetData: a,
                    isVisible: this.isVisible,
                    shouldAnimate: this.shouldAnimate,
                    onInitialDraw: l,
                    onError: d,
                  })),
                    (this.isInitialized = !0);
                }));
        }
      }
    },
    647425: function (i, t, e) {
      var s, n;
      e.d(t, {
        u: function () {
          return s;
        },
      }),
        ((n = s || (s = {}))[(n.DROP = 0)] = "DROP"),
        (n[(n.INITIALIZE = 1)] = "INITIALIZE"),
        (n[(n.VISIBILITY_CHANGE = 2)] = "VISIBILITY_CHANGE"),
        (n[(n.STATE_CHANGE = 3)] = "STATE_CHANGE"),
        (n[(n.FIRST_DRAW = 4)] = "FIRST_DRAW"),
        (n[(n.ERROR = 5)] = "ERROR");
    },
    170830: function (i, t, e) {
      var s, n;
      function r(i) {
        let t = 0,
          e = [];
        return async function () {
          if (2 !== t) {
            if (1 === t)
              return new Promise((i) => {
                e.push(i);
              });
            for (t = 1, await i(), t = 2; e.length > 0; ) {
              var s;
              null === (s = e.shift()) || void 0 === s || s();
            }
          }
        };
      }
      e.d(t, {
        G: function () {
          return r;
        },
      }),
        e(653041),
        ((n = s || (s = {}))[(n.UNINITIALIZED = 0)] = "UNINITIALIZED"),
        (n[(n.INITIALIZING = 1)] = "INITIALIZING"),
        (n[(n.READY = 2)] = "READY");
    },
  },
]);
//# sourceMappingURL=14662bffd109bcf3814d.js.map
