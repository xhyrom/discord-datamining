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
      var i = t(200651),
        r = t(192379),
        a = t(658312),
        c = t(503082);
      let o = (e) => {
        let { drawCallback: n, size: t, fps: o = 60 } = e,
          u = r.useRef(null),
          l = r.useRef();
        return (
          r.useEffect(() => {
            if (null != u.current) {
              let e = new c.Z(u.current);
              e.setSize(t), (l.current = e);
            }
          }, [t]),
          (0, a.Z)((e) => {
            if (null != l.current) {
              let { width: t, height: i } = l.current.canvas;
              l.current.clearRect({ x: 0, y: 0, w: t, h: i }),
                n(l.current, e / 1e3);
            }
          }, 1e3 / o),
          (0, i.jsx)("div", { children: (0, i.jsx)("canvas", { ref: u }) })
        );
      };
    },
    258340: function (e, n, t) {
      t(653041);
      var i = t(192379),
        r = t(392711);
      n.Z = (e) => {
        let n = { y: 0.8 * e.h, x: 0.3 * e.w },
          t = i.useRef([]);
        return {
          update: (n) => {
            let i = [];
            if (
              (t.current.forEach((t, r) => {
                (t.position.x -= t.velocity.x * n),
                  (t.position.y -= t.velocity.y * n),
                  (t.velocity.x *= 0.92 ** n),
                  (t.velocity.y *= 0.92 ** n),
                  (t.velocity.y -= 1200 * n),
                  t.position.y > e.h && i.push(r);
              }),
              i.length > 0)
            ) {
              let e = t.current.filter((e, n) => !i.includes(n));
              t.current = e;
            }
          },
          draw: (n) => {
            n.clearRect({ x: 0, y: 0, w: e.w, h: e.h }),
              t.current.forEach((e) => {
                let { x: t, y: i } = e.position;
                n.drawImage(
                  e.key,
                  { x: t, y: i },
                  { w: 32 * e.scale, h: 32 * e.scale },
                );
              });
          },
          emit: (i, a) => {
            for (let c = 0; c < a; c++)
              t.current.push({
                position: { x: e.w / 2 + (0, r.random)(-50, 50), y: e.h },
                velocity: {
                  x: (0, r.random)(-n.x, n.x, !0),
                  y: n.y + (0, r.random)(-150, 150, !0),
                },
                color: "red",
                scale: (0, r.random)(0.8, 1.6),
                rotation: (0, r.random)(-20, 20),
                key: i,
              });
          },
        };
      };
    },
    420541: function (e, n, t) {
      t.r(n);
      var i = t(200651),
        r = t(192379),
        a = t(597846),
        c = t(885006),
        o = t(278788),
        u = t(516604),
        l = t(936003);
      let s = () => {
        let e = (0, c.Z)(),
          n = r.useMemo(() => ({ w: e.width, h: e.height }), [e]),
          t = (0, u.Z)(n, 90);
        return (0, i.jsx)("div", {
          className: l.canvasWrapper,
          id: "simple-confetti-canvas",
          children: (0, i.jsx)(a.z, {
            size: n,
            drawCallback: (e, n) => {
              t.update(n), t.draw(e);
            },
          }),
        });
      };
      n.default = () =>
        (0, o.kf)("ConfettiCanvasComponent") ? (0, i.jsx)(s, {}) : null;
    },
    278788: function (e, n, t) {
      t.d(n, {
        HZ: function () {
          return c;
        },
        kf: function () {
          return o;
        },
      });
      var i = t(192379),
        r = t(818083),
        a = t(987338);
      let c = (0, r.B)({
          kind: "user",
          id: "2024-12_confetti_potion",
          label: "Confetti Potion Experiment",
          commonTriggerPoint: a.$P.CONNECTION_OPEN,
          defaultConfig: {
            canPurchase: !1,
            canSeeConfetti: !1,
            canSeeEducation: !1,
            canSeeUpsells: !1,
          },
          treatments: [
            {
              id: 1,
              label: "Viewer Treatment",
              config: {
                canPurchase: !1,
                canSeeConfetti: !0,
                canSeeEducation: !0,
                canSeeUpsells: !1,
              },
            },
            {
              id: 2,
              label: "Purchaser Treatment",
              config: {
                canPurchase: !0,
                canSeeConfetti: !0,
                canSeeEducation: !0,
                canSeeUpsells: !0,
              },
            },
          ],
        }),
        o = (e) =>
          i.useMemo(
            () =>
              c.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }),
            [e],
          ).canSeeConfetti;
    },
    516604: function (e, n, t) {
      var i = t(192379),
        r = t(570140),
        a = t(4646),
        c = t(258340),
        o = t(768581),
        u = t(176354);
      n.Z = function (e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30,
          { update: t, draw: l, emit: s } = (0, c.Z)(e),
          d = i.useMemo(() => new a.ZP(), []),
          f = i.useCallback(
            (e) => {
              (e.assetMap = d), l(e);
            },
            [d, l],
          );
        return (
          i.useEffect(() => {
            async function e(e) {
              var t, i;
              let { emoji: r } = e,
                a = null !== (t = r.id) && void 0 !== t ? t : r.name,
                c =
                  null == r.id
                    ? u.ZP.getURL(
                        null !== (i = r.name) && void 0 !== i
                          ? i
                          : r.uniqueName,
                      )
                    : o.ZP.getEmojiURL({ id: r.id, animated: !1, size: 32 });
              await d.loadRemoteImage(a, c), s(a, n);
            }
            return (
              r.Z.subscribe("POTIONS_TRIGGER_MESSAGE_CONFETTI", e),
              () => r.Z.unsubscribe("POTIONS_TRIGGER_MESSAGE_CONFETTI", e)
            );
          }),
          { update: t, draw: f }
        );
      };
    },
    885006: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      }),
        t(47120);
      var i = t(192379);
      function r() {
        var e, n;
        let [t, r] = i.useState({
          width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
          height: null !== (n = window.innerHeight) && void 0 !== n ? n : 1080,
        });
        return (
          i.useLayoutEffect(() => {
            function e() {
              let e = window.innerWidth;
              r({ width: e, height: window.innerHeight });
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
//# sourceMappingURL=6010749184e66597293e.js.map
