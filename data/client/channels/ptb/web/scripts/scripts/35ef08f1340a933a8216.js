"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81465"],
  {
    597846: function (e, n, t) {
      t.d(n, {
        z: function () {
          return o;
        },
      });
      var r = t(200651),
        i = t(192379),
        a = t(658312),
        c = t(503082);
      let o = (e) => {
        let { drawCallback: n, size: t, fps: o = 60 } = e,
          u = i.useRef(null),
          s = i.useRef();
        return (
          i.useEffect(() => {
            if (null != u.current) {
              let e = new c.Z(u.current);
              e.setSize(t), (s.current = e);
            }
          }, [t]),
          (0, a.Z)((e) => {
            if (null != s.current) {
              let { width: t, height: r } = s.current.canvas;
              s.current.clearRect({ x: 0, y: 0, w: t, h: r }),
                n(s.current, e / 1e3);
            }
          }, 1e3 / o),
          (0, r.jsx)("div", { children: (0, r.jsx)("canvas", { ref: u }) })
        );
      };
    },
    258340: function (e, n, t) {
      t(653041);
      var r = t(192379),
        i = t(392711);
      n.Z = (e) => {
        let n = { y: 0.8 * e.h, x: 0.3 * e.w },
          t = r.useRef([]);
        return {
          update: (n) => {
            let r = [];
            if (
              (t.current.forEach((t, i) => {
                (t.position.x -= t.velocity.x * n),
                  (t.position.y -= t.velocity.y * n),
                  (t.velocity.x *= 0.92 ** n),
                  (t.velocity.y *= 0.92 ** n),
                  (t.velocity.y -= 1200 * n),
                  t.position.y > e.h && r.push(i);
              }),
              r.length > 0)
            ) {
              let e = t.current.filter((e, n) => !r.includes(n));
              t.current = e;
            }
          },
          draw: (n) => {
            n.clearRect({ x: 0, y: 0, w: e.w, h: e.h }),
              t.current.forEach((e) => {
                let { x: t, y: r } = e.position;
                n.drawImage(
                  e.key,
                  { x: t, y: r },
                  { w: 32 * e.scale, h: 32 * e.scale },
                );
              });
          },
          emit: (r, a) => {
            for (let c = 0; c < a; c++)
              t.current.push({
                position: { x: e.w / 2 + (0, i.random)(-50, 50), y: e.h },
                velocity: {
                  x: (0, i.random)(-n.x, n.x, !0),
                  y: n.y + (0, i.random)(-150, 150, !0),
                },
                color: "red",
                scale: (0, i.random)(0.8, 1.6),
                rotation: (0, i.random)(-20, 20),
                key: r,
              });
          },
        };
      };
    },
    420541: function (e, n, t) {
      t.r(n);
      var r = t(200651),
        i = t(192379),
        a = t(597846),
        c = t(885006),
        o = t(111810),
        u = t(516604),
        s = t(936003);
      let l = () => {
        let e = (0, c.Z)(),
          n = i.useMemo(() => ({ w: e.width, h: e.height }), [e]),
          t = (0, u.Z)(n, 90);
        return (0, r.jsx)("div", {
          className: s.canvasWrapper,
          id: "simple-confetti-canvas",
          children: (0, r.jsx)(a.z, {
            size: n,
            drawCallback: (e, n) => {
              t.update(n), t.draw(e);
            },
          }),
        });
      };
      n.default = () =>
        (0, o.kf)("ConfettiCanvasComponent") ? (0, r.jsx)(l, {}) : null;
    },
    516604: function (e, n, t) {
      var r = t(192379),
        i = t(570140),
        a = t(4646),
        c = t(258340),
        o = t(768581),
        u = t(176354);
      n.Z = function (e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30,
          { update: t, draw: s, emit: l } = (0, c.Z)(e),
          d = r.useMemo(() => new a.ZP(), []),
          f = r.useCallback(
            (e) => {
              (e.assetMap = d), s(e);
            },
            [d, s],
          );
        return (
          r.useEffect(() => {
            async function e(e) {
              var t;
              let { emoji: r } = e,
                i = null !== (t = r.id) && void 0 !== t ? t : r.name,
                a =
                  null == r.id
                    ? u.ZP.getURL(r.name)
                    : o.ZP.getEmojiURL({
                        id: r.id,
                        animated: !1,
                        size: 32,
                        forcePNG: !0,
                      });
              await d.loadRemoteImage(i, a), l(i, n);
            }
            return (
              i.Z.subscribe("POTIONS_TRIGGER_MESSAGE_CONFETTI", e),
              () => i.Z.unsubscribe("POTIONS_TRIGGER_MESSAGE_CONFETTI", e)
            );
          }),
          { update: t, draw: f }
        );
      };
    },
    885006: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      }),
        t(47120);
      var r = t(192379);
      function i() {
        var e, n;
        let [t, i] = r.useState({
          width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
          height: null !== (n = window.innerHeight) && void 0 !== n ? n : 1080,
        });
        return (
          r.useLayoutEffect(() => {
            function e() {
              let e = window.innerWidth;
              i({ width: e, height: window.innerHeight });
            }
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          t
        );
      }
    },
    936003: function (e, n, t) {
      e.exports = { canvasWrapper: "canvasWrapper_f2053b" };
    },
  },
]);
//# sourceMappingURL=35ef08f1340a933a8216.js.map
