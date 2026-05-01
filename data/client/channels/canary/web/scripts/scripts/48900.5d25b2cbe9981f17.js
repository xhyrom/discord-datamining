"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["48900"],
  {
    881106(e, r, t) {
      t.d(r, { Ut: () => n });
      let n =
        "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
    },
    480335(e, r, t) {
      t.d(r, { A: () => P, p: () => b });
      var n = t(627968),
        a = t(64700),
        l = t(503698),
        u = t.n(l),
        s = t(854284),
        c = t(17928),
        i = t(775602),
        o = t(218394),
        A = t(203632),
        d = t(219220),
        T = t(940622),
        m = t(881106),
        f = t(284009),
        E = t.n(f),
        I = t(964486);
      let p = 1e3 / 24,
        N = function (e) {
          let {
              minInterval: r = p,
              allowableMinInterval: t,
              droppedFramesCallbackThreshold: n,
              droppedFramesCallback: l,
              droppedFramesResetTime: u = 3e3,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            s = a.useRef(r),
            c = a.useRef(0),
            i = a.useRef(void 0),
            o = a.useRef(void 0),
            A = a.useRef(!0),
            d = a.useRef(0),
            T = a.useRef(void 0),
            m = a.useCallback(() => {
              (d.current = 0),
                null != T.current &&
                  (clearTimeout(T.current), (T.current = void 0));
            }, []),
            f = a.useCallback(() => {
              (A.current = !1),
                cancelAnimationFrame(c.current),
                clearTimeout(T.current);
            }, []),
            N = a.useCallback(
              (r) => {
                if (!A.current) return;
                null == i.current && (i.current = r),
                  null == o.current && (o.current = r);
                let a = r - o.current;
                r - i.current > 1.5 * Math.min(t ?? 120, s.current) &&
                  ((d.current += 1),
                  null != T.current && clearTimeout(T.current),
                  (T.current = setTimeout(m, u)),
                  null != n &&
                    d.current > n &&
                    (E()(
                      null != l,
                      "useClock - If you set a dropped frames threshold, you must provide a droppedFramesCallback to do something when that threshold is hit",
                    ),
                    l() && (d.current = 0))),
                  (i.current = r),
                  a >= s.current - 3 && ((o.current = r), e(a)),
                  (c.current = requestAnimationFrame(N));
              },
              [t, m, u, n, l, e],
            ),
            h = a.useCallback(() => {
              (A.current = !0),
                (o.current = void 0),
                (c.current = requestAnimationFrame(N));
            }, [N]);
          return (
            a.useEffect(() => {
              s.current = r;
            }, [r]),
            (0, I.Ay)(
              () => ((c.current = requestAnimationFrame(N)), () => f()),
            ),
            { stop: f, reset: h, ticking: A }
          );
        };
      var h = t(942426),
        y = t(735438);
      t(323874), t(14289), t(35956);
      var R = t(676279),
        S = t(38405),
        v = t(839827);
      let _ = (e) => {
          let {
              layerConfig: r,
              animationType: t,
              ticking: l,
              time: u,
              hasPlayedThrough: c,
              setHasPlayedThrough: i,
              maxLoops: o,
              loopEnd: A,
              bannerAdjustment: d,
              imageData: T,
            } = e,
            f = !0,
            E = 0,
            I =
              (0, R.gm)() &&
              null != r.loopDelay &&
              r.loopDelay > 0 &&
              T?.src != null,
            [p, N] = a.useState("reset"),
            h = a.useRef(T?.src ?? r.src),
            [y, _] = a.useState(T?.src ?? r.src);
          a.useEffect(() => {
            if (!I || "layer" === p) return;
            let e = new AbortController();
            return (
              (async () => {
                try {
                  let r = h.current,
                    t = await fetch(r, { signal: e.signal }),
                    n = await t.blob();
                  if (e.signal.aborted) return;
                  r !== T?.src && URL.revokeObjectURL(r),
                    (h.current = URL.createObjectURL(n)),
                    _(() => h.current);
                } catch (e) {
                  if ("AbortError" === e.name) return null;
                  S.A.captureException(e);
                }
              })(),
              () => {
                e.abort();
              }
            );
          }, [p, I, _, T?.src]),
            a.useEffect(
              () => () => {
                h.current !== T?.src && URL.revokeObjectURL(h.current);
              },
              [],
            );
          let b = (e) => {
            (0, R.gm)() && e !== p && N(e);
          };
          if (
            (l || (f = !1),
            u < r.start && (f = !1),
            !r.loop && u > r.duration + r.start && (f = !1),
            t === s.l.ANIMATION_TYPE_PERSISTENT &&
              !c &&
              null != o &&
              u >= A &&
              i(!0),
            r.loop && void 0 !== r.loopDelay && r.loopDelay > 0)
          ) {
            let e = r.duration + r.loopDelay;
            (E = Math.floor((u - r.start) / e)),
              u - r.start - E * e > r.duration &&
                (t === s.l.ANIMATION_TYPE_INTERMITTENT &&
                  !c &&
                  null != o &&
                  E >= o &&
                  i(!0),
                (f = !1));
          }
          return f
            ? (b("layer"),
              (0, n.jsx)("img", {
                src: y,
                className: v.QZ,
                style: {
                  top: (r.position?.y ?? 0) - d,
                  left: r.position?.x ?? 0,
                },
                alt: "",
                "aria-hidden": !0,
              }))
            : (b("reset"),
              (0, n.jsx)("img", { src: m.Ut, alt: "", "aria-hidden": !0 }));
        },
        b = (e) => {
          let {
              bannerAdjustment: r = 0,
              maxLoops: t,
              resetOnHover: l = !1,
              isHovering: c = !1,
              useOpacityOnHover: i = !0,
              autoPlay: o = !0,
              restartMethod: d,
              profileEffect: T,
              delayIntro: m = !0,
              layerData: f,
            } = e,
            E = a.useRef(null),
            [I, p] = a.useState([]),
            [h, y] = a.useState(0),
            [R, S] = a.useState(0),
            { accessibilityLabel: b } = T,
            g = m ? 500 : 0.1,
            [P, M] = a.useState(-g),
            {
              stop: O,
              reset: j,
              ticking: x,
            } = N((e) => {
              M((r) => r + e);
            }),
            C = a.useRef(g);
          a.useEffect(() => {
            C.current = g;
          }),
            a.useEffect(() => {
              M(-C.current),
                p(T.effects.sort((e, r) => (e.zIndex ?? 0) - (r.zIndex ?? 0)));
            }, [T]),
            a.useEffect(() => {
              let e = 0,
                r = 1 / 0;
              I.forEach((t) => {
                let n = t.start + t.duration;
                n > e && (e = n), t.loop && t.start < r && (r = t.start);
              }),
                y(r),
                S(e);
            }, [S, I]);
          let [k, Y] = a.useState(!1);
          return (
            a.useEffect(() => {
              !0 === o || c || (O(), M(0)),
                !c && k && x.current && (O(), M(0)),
                l &&
                  c &&
                  !x.current &&
                  (j(),
                  T.animationType === s.l.ANIMATION_TYPE_PERSISTENT
                    ? M(d === A.HL.FromStart ? 0 : h)
                    : M(0));
            }, [c, k, h, l, O, j, x, T.animationType, o, d]),
            (0, n.jsx)("div", {
              ref: E,
              className: u()(v.yC, { [v.yo]: c && i }),
              "aria-label": b,
              role: "img",
              children: (0, n.jsx)("div", {
                className: v.vW,
                children: I.map((e, a) => {
                  if (
                    !x.current &&
                    T.animationType === s.l.ANIMATION_TYPE_PERSISTENT &&
                    null != T.staticFrameSrc &&
                    0 === a &&
                    !0 === o
                  ) {
                    let { staticFrameSrc: t } = T;
                    return (0, n.jsx)(
                      "img",
                      {
                        className: v.QZ,
                        style: {
                          top: e.position?.y ?? 0 - r,
                          left: e.position?.x ?? 0,
                        },
                        src: t,
                        alt: "",
                        "aria-hidden": !0,
                      },
                      e.src + a,
                    );
                  }
                  return (0, n.jsx)(
                    _,
                    {
                      layerConfig: e,
                      animationType: T.animationType,
                      ticking: x.current,
                      time: P,
                      hasPlayedThrough: k,
                      setHasPlayedThrough: Y,
                      maxLoops: t,
                      loopEnd: R,
                      bannerAdjustment: r,
                      imageData: f?.[e.src],
                    },
                    e.src + a,
                  );
                }),
              }),
            })
          );
        },
        g = (e) => {
          let {
              profileEffect: r,
              useThumbnail: t,
              bannerAdjustment: a = 0,
              isHovering: l = !1,
              useOpacityOnHover: s = !0,
            } = e,
            {
              reducedMotionSrc: c,
              thumbnailPreviewSrc: i,
              accessibilityLabel: o,
            } = r;
          return (0, n.jsx)("div", {
            className: u()(v.yC, { [v.yo]: l && s }),
            "aria-label": o,
            role: "img",
            children: (0, n.jsx)("div", {
              className: v.vW,
              children: (0, n.jsx)("img", {
                src: t && !l ? i : c,
                className: v.QZ,
                style: { top: 0 - a },
                alt: "",
                "aria-hidden": !0,
              }),
            }),
          });
        },
        P = (e) => {
          let r = (0, o.j)(),
            t = (0, c.bG)([i.A], () => i.A.useReducedMotion),
            l = (0, h.A)(e.skuId),
            u = (0, T.C)(l),
            A = a.useMemo(() => {
              if (null == l) return l;
              let e = (0, y.cloneDeep)(l),
                r = Math.floor(
                  Math.random() *
                    (e.effects.reduce((e, r) => {
                      let t = r.randomizedSources?.length ?? 0;
                      return t > 0 && (e = 0 === e ? t : Math.min(e, t)), e;
                    }, 0) -
                      1 -
                      0 +
                      1) +
                    0,
                );
              return (
                (e.effects = e.effects.map(
                  (e) => (
                    null != e.randomizedSources &&
                      e.randomizedSources.length > 0 &&
                      (e.src = e.randomizedSources[r].src),
                    e
                  ),
                )),
                e
              );
            }, [l]),
            m = u ?? A,
            { autoPlay: f = !0, isHovering: E } = e,
            I = !!(
              (!r && e.shopPreview) ||
              (!r && l?.animationType === s.l.ANIMATION_TYPE_PERSISTENT) ||
              t ||
              (!1 === f && !1 === E)
            ),
            { loaded: p, layerData: N } = (0, d.A)({
              skuId: l?.skuId,
              layers: l?.effects,
              playing: !1 === I,
            });
          return null != l &&
            null != m &&
            (r ||
              e.shopPreview ||
              l.animationType !== s.l.ANIMATION_TYPE_INTERMITTENT)
            ? I
              ? (0, n.jsx)(g, {
                  useThumbnail: e.useThumbnail,
                  profileEffect: m,
                  bannerAdjustment: e.bannerAdjustment,
                  isHovering: e.isHovering,
                  useOpacityOnHover: e.useOpacityOnHover,
                })
              : p
                ? (0, n.jsx)(b, { profileEffect: m, layerData: N, ...e })
                : null
            : null;
        };
    },
    854284(e, r, t) {
      t.d(r, { l: () => a });
      var n,
        a =
          (((n = {})[(n.ANIMATION_TYPE_UNSPECIFIED = 0)] =
            "ANIMATION_TYPE_UNSPECIFIED"),
          (n[(n.ANIMATION_TYPE_PERSISTENT = 1)] = "ANIMATION_TYPE_PERSISTENT"),
          (n[(n.ANIMATION_TYPE_INTERMITTENT = 2)] =
            "ANIMATION_TYPE_INTERMITTENT"),
          n);
    },
  },
]);
//# sourceMappingURL=48900.5d25b2cbe9981f17.js.map
