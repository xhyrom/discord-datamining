"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["20320"],
  {
    901139(e, t, l) {
      l.d(t, { Ay: () => n, DE: () => r, TW: () => s });
      let a = (0, l(353640).v)(() => ({ imgCache: {}, toolsCache: {} })),
        s = () => ({
          getImgCache: (e) => {
            if (null != e) return a.getState().imgCache[e];
          },
          setImgCache: (e, t, l) => {
            a.setState((a) => ({
              imgCache: {
                ...a.imgCache,
                [e]: { animatedUrl: t, staticUrl: l },
              },
            }));
          },
        }),
        r = () => ({
          toolsCache: a.getState().toolsCache,
          setToolsCache: (e, t, l) => {
            null != e &&
              null != t &&
              a.setState((a) => ({
                toolsCache: { ...a.toolsCache, [e]: { url: t, palette: l } },
              }));
          },
          removeToolsCache: (e) => {
            a.setState((t) => {
              let {
                toolsCache: { [e]: l, ...a },
              } = t;
              return { imgCache: t.imgCache, toolsCache: a };
            });
          },
        }),
        n = a;
    },
    253292(e, t, l) {
      l.d(t, { K: () => c });
      var a = l(64700),
        s = l(17928),
        r = l(775602),
        n = l(723702),
        u = l(746002),
        o = l(901139);
      function c(e) {
        let { getImgCache: t } = (0, o.TW)(),
          l = (0, s.bG)([r.A], () => r.A.useReducedMotion);
        return a.useMemo(() => {
          if (null != e.previewToolKey && "" !== e.previewToolKey) {
            let l = t(e.previewToolKey);
            return {
              staticImageUrl: l?.staticUrl,
              animatedImageUrl: l?.animatedUrl,
            };
          }
          let a = (platform.name ?? "unknown").toLowerCase(),
            s = l || (0, n.isLinux)() || "safari" === a;
          return {
            staticImageUrl: (0, u.getCollectiblesItemAssetUrl)({
              skuId: e.skuId,
              assetFormat: u.CollectiblesItemAssetFormat.STATIC,
            }),
            ...(s
              ? {
                  animatedImageUrl: (0, u.getCollectiblesItemAssetUrl)({
                    skuId: e.skuId,
                    assetFormat: u.CollectiblesItemAssetFormat.ANIMATED,
                  }),
                }
              : {
                  videoUrl: (0, u.getCollectiblesItemAssetUrl)({
                    skuId: e.skuId,
                    assetFormat: u.CollectiblesItemAssetFormat.VIDEO,
                  }),
                }),
          };
        }, [e, t, l]);
      }
    },
    351952(e, t, l) {
      l.d(t, { K: () => o, _: () => c });
      var a = l(64700),
        s = l(736653),
        r = l(88686),
        n = l(780898),
        u = l(818348);
      function o(e) {
        let t = (0, s.Ay)(),
          [l, r] = (0, a.useState)({});
        return (
          (0, a.useEffect)(() => {
            null == e ||
              r({
                "--custom-nameplate":
                  (t === u.NJ.LIGHT
                    ? e.palette.lightBackground
                    : e.palette.darkBackground) + "33",
                "--custom-nameplate-neutral":
                  t !== u.NJ.LIGHT
                    ? "rgba(0, 0, 0, 0.22)"
                    : "rgba(255, 255, 255  , 0.22)",
                "--custom-nameplate-neutral-hovered":
                  t !== u.NJ.LIGHT
                    ? "rgba(0, 0, 0, 0.33)"
                    : "rgba(255, 255, 255  , 0.33)",
              });
          }, [e, t]),
          l
        );
      }
      function c(e, t, l, o, c) {
        let i = (0, s.Ay)(),
          m = (0, a.useMemo)(
            () =>
              null == t
                ? null
                : (function (e) {
                    let {
                      palette: t,
                      theme: l,
                      hover: a,
                      selected: s,
                      placement: o,
                    } = e;
                    if (!(0, n.wT)(t)) return;
                    let c = l === u.NJ.LIGHT,
                      i = c ? t.lightBackground : t.darkBackground;
                    if (o === r.u.MEMBER_LIST || o === r.u.CHANNEL) {
                      let e = `${s ? "80" : a && o === r.u.MEMBER_LIST ? "4D" : "33"}`;
                      return `linear-gradient(90deg, transparent 0%, ${i}14 20%, ${i}14 50%, ${i}${e} 100%)`;
                    }
                    let m = o === r.u.MINI_PREVIEW ? "33" : "1A";
                    return `linear-gradient(90deg, ${i}${m} 0%, ${i}${c ? "4D" : "66"} 100%)`;
                  })({
                    palette: t.palette,
                    theme: i,
                    hover: l,
                    selected: o,
                    placement: c,
                  }),
            [t, l, o, i, c],
          ),
          [d, g] = (0, a.useState)(null != m ? { background: m } : {}),
          I = c === r.u.MEMBER_LIST;
        return (
          (0, a.useEffect)(() => {
            if (null == m) return;
            if (null == e || null == e.current)
              return void g({ background: m });
            let t = new ResizeObserver((e) => {
              let t = e[0].contentRect.width + (I ? 10 : -5);
              g({
                background: m,
                maskImage: `linear-gradient(to right, rgba(0, 0, 0, .3) ${t}px, rgba(0, 0, 0, 1) ${t + 50}px)`,
              });
            });
            return t.observe(e.current), () => t.disconnect();
          }, [e, m, I]),
          d
        );
      }
    },
    174755(e, t, l) {
      l.d(t, { A: () => C });
      var a = l(627968),
        s = l(64700),
        r = l(503698),
        n = l.n(r),
        u = l(607470),
        o = l(17928),
        c = l(775602),
        i = l(531685),
        m = l(253292),
        d = l(351952),
        g = l(88686),
        I = l(381588);
      function C(e) {
        let t,
          l,
          {
            nameplate: r,
            hovered: u,
            selected: m,
            content: C,
            placement: f,
          } = e,
          p = (0, d._)(C, r, u, m, f),
          A =
            ((t = (0, o.bG)([i.A], () => i.A.isFocused())),
            (l = (0, o.bG)([c.A], () => c.A.useReducedMotion)),
            !!t && !l && ((u || m) ?? !1)),
          k = s.useRef(null == r);
        return (s.useEffect(() => {
          k.current || null != r || (k.current = !0);
        }, [r]),
        null == r)
          ? null
          : (0, a.jsx)("div", {
              className: n()(I.kL, {
                [I.qG]: k.current,
                [I.WB]: f === g.u.ACCOUNT,
              }),
              style: { background: p.background },
              "aria-hidden": !0,
              children: (0, a.jsx)(h, {
                nameplate: r,
                className: n()(I._8, {
                  [I.PT]: u,
                  [I.wH]: m,
                  [I.ct]: f === g.u.ACCOUNT,
                  [I.VH]: f === g.u.PREVIEW,
                  [I.Hh]: f === g.u.MINI_PREVIEW,
                  [I.Ix]: f === g.u.CHANNEL,
                }),
                style: { maskImage: p.maskImage },
                animate: A,
                loop: !0 === A && !0 === u,
              }),
            });
      }
      function h(e) {
        let { nameplate: t, className: l, style: s, animate: r, loop: n } = e,
          { staticImageUrl: u, animatedImageUrl: o, videoUrl: c } = (0, m.K)(t);
        if (null == u) return null;
        if (null != c)
          return (0, a.jsx)(f, {
            animatedAsset: c,
            staticAsset: u,
            animate: r,
            loop: n,
            style: s,
            className: l,
          });
        let i = r && null != o ? o : u;
        return (0, a.jsx)(p, { asset: i, className: l, style: s });
      }
      function f(e) {
        let {
            staticAsset: t,
            animatedAsset: l,
            animate: r,
            loop: n,
            className: o,
            style: c,
          } = e,
          i = s.useRef(null);
        return (
          s.useEffect(() => {
            null != i.current &&
              (r || n ? i.current.play() : i.current.pause());
          }, [r, n]),
          (0, a.jsx)("div", {
            className: I.j,
            style: c,
            children: (0, a.jsx)(u.A, {
              src: l,
              poster: t,
              ref: i,
              playsInline: !0,
              loop: n,
              controls: !1,
              className: o,
              tabIndex: -1,
            }),
          })
        );
      }
      function p(e) {
        let { asset: t, className: l, style: s } = e;
        return (0, a.jsx)("img", { src: t, className: l, style: s, alt: "" });
      }
    },
  },
]);
//# sourceMappingURL=20320.bed42f739af0f5e0.js.map
