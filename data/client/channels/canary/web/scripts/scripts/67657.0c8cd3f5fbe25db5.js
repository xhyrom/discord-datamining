"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["67657"],
  {
    312640(e, t, r) {
      r.d(t, { x: () => k, e: () => y });
      var n = r(627968),
        a = r(64700),
        l = r(503698),
        s = r.n(l),
        i = r(785651),
        o = r(113325),
        c = r(315629),
        u = r(17928),
        d = r(453903),
        h = r(765671),
        f = r(186111),
        p = r(795127),
        m = r(844222),
        x = r(866323);
      let g = { mass: 1, tension: 800, friction: 32 },
        v = { mass: 1, tension: 1200, friction: 48 };
      var j = r(818348),
        b = r(824078);
      let y = a.createContext(null),
        C = j.FX;
      function k(e) {
        let {
            children: t,
            targetElementRef: r,
            shouldShow: l = !0,
            onRequestClose: j,
            position: k = "top",
            align: w,
            alignmentStrategy: N = "trigger-center",
            caretConfig: E,
            hasVideo: L = !1,
            gradientColor: A,
            gradientOffsetBottom: R = 0.4,
            onPositionChange: M,
            onNudgeChange: B,
            scrollBehavior: S = "sticky",
            modal: _ = !1,
            returnRef: T,
            experimental_ignoreModalClicks: $ = !0,
            closeOnClickOutside: I = !1,
          } = e,
          [P, Z] = a.useState(l),
          [D, F] = a.useState(k),
          O = a.useRef(k),
          Q = a.useRef(0),
          { ref: U, width: z, height: G } = (0, h.Ay)(),
          q = (0, u.bG)([f.A], () => f.A.getLayers()),
          V = q[q.length - 1] ?? "base",
          W = a.useRef(M);
        a.useEffect(() => {
          W.current = M;
        }, [M]);
        let J = a.useCallback((e) => {
            null != e &&
              e !== O.current &&
              ((O.current = e), F(e), W.current?.(e));
          }, []),
          H = a.useMemo(
            () =>
              null == r.current ||
              (r.current.closest("[data-layer]")?.getAttribute("data-layer") ??
                "base") === V,
            [r, V],
          );
        a.useEffect(() => {
          H && l ? Z(!0) : H || Z(!1);
        }, [H, l]),
          a.useEffect(() => {
            J(k);
          }, [k, J]);
        let K = (function (e) {
            let { shouldShow: t, caretPosition: r, onExitComplete: n } = e,
              { reducedMotion: l } = a.useContext(m.C),
              { config: s, ...i } = ((e, t) => {
                let r = { opacity: 0, transform: "" },
                  n = { opacity: 0, transform: "" };
                if (t)
                  return {
                    from: { opacity: 0 },
                    enter: { opacity: 1 },
                    leave: { opacity: 0 },
                    config: { duration: 150 },
                  };
                switch (e) {
                  case "top":
                    (r.transform = "translate3d(0, -10px, 0)"),
                      (n.transform = "translate3d(0, -10px, 0)");
                    break;
                  case "bottom":
                    (r.transform = "translate3d(0, 10px, 0)"),
                      (n.transform = "translate3d(0, 10px, 0)");
                    break;
                  case "left":
                    (r.transform = "translate3d(-10px, 0, 0)"),
                      (n.transform = "translate3d(-10px, 0, 0)");
                    break;
                  case "right":
                    (r.transform = "translate3d(10px, 0, 0)"),
                      (n.transform = "translate3d(10px, 0, 0)");
                }
                return {
                  from: r,
                  enter: { opacity: 1, transform: "translate3d(0px, 0px, 0)" },
                  leave: n,
                  config: void 0,
                };
              })(r, l.enabled);
            return (0, x.p)(
              t,
              {
                ...i,
                config: s ?? ((e, r) => (t ? g : v)),
                onRest: () => {
                  t || null == n || n();
                },
              },
              "animate-always",
            );
          })({
            shouldShow: l,
            caretPosition: (0, p.g)(D),
            onExitComplete: () => {
              Z(!1);
            },
          }),
          Y = a.useMemo(() => {
            if ("edge" === N && null != w) {
              let e = "top" === D || "bottom" === D,
                t = "left" === D || "right" === D;
              if (e) {
                if ("left" === w || "center" === w || "right" === w) return w;
              } else if (t && ("top" === w || "center" === w || "bottom" === w))
                return w;
            }
            return "center";
          }, [N, w, D]),
          X = a.useMemo(() => {
            if ("edge" !== N)
              return (function () {
                let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "center",
                  t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "top",
                  r = arguments.length > 2 ? arguments[2] : void 0,
                  n =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0;
                if ("center" === e || "custom" === e) return 0;
                let a = "left" === t || "right" === t,
                  l = a ? n : (r ?? 240);
                if (0 === l) return 0;
                let s = l / 2 - (a ? 22 : 20);
                switch (e) {
                  case "start":
                    return s;
                  case "end":
                    return -s;
                  default:
                    return 0;
                }
              })(E?.align ?? "center", D, z, G);
          }, [N, E, D, z, G]),
          ee = a.useMemo(
            () => ({ position: D, caretConfig: E ?? { align: "center" } }),
            [D, E],
          );
        return (0, n.jsx)(d.$, {
          targetElementRef: r,
          shouldShow: P,
          onRequestClose: j,
          position: D,
          align: Y,
          spacing: 14,
          offset: X,
          layerContext: void 0,
          positionKey: null != X ? `${D}-${X}` : void 0,
          popoutKey: void 0,
          fixed: !1,
          autoInvert: !0,
          nudgeAlignIntoViewport: "top" === D || "bottom" === D,
          closeOnClickOutside: I,
          ignoreModalClicks: $,
          scrollBehavior: S,
          renderPopout: (e) => {
            let { setPopoutRef: r, position: a, nudge: l, ...u } = e;
            return (
              J(a),
              l !== Q.current && ((Q.current = l), B?.(l)),
              K((e, a) => {
                if (!a) return null;
                let d = (0, n.jsx)(o.l, {
                  ...u,
                  setDialogRef: r,
                  modal: _,
                  className: s()(
                    null != A ? b.popoverContentWithGradient : b.popover,
                    { [b["popover--video"]]: L },
                  ),
                  returnRef: T,
                  children: (0, n.jsx)(y.Provider, { value: ee, children: t }),
                });
                return (0, n.jsx)(i.animated.div, {
                  ref: U,
                  "data-mana-component": "popover",
                  style: {
                    ...e,
                    "--custom-caret-edge-offset-horizontal": "20px",
                    "--custom-caret-edge-offset-vertical": "22px",
                    "--custom-caret-edge-offset-horizontal-nudge": `${l}px`,
                    "--custom-popover-width": "240px",
                  },
                  children:
                    null != A
                      ? (0, n.jsx)(c.h, {
                          offsetBottom: R,
                          color: A,
                          className: b.popoverGradientWrapper,
                          children: d,
                        })
                      : d,
                });
              })
            );
          },
          children: C,
        });
      }
    },
    208756(e, t, r) {
      r.d(t, { Z: () => c });
      var n = r(627968);
      r(64700);
      var a = r(503698),
        l = r.n(a),
        s = r(825484),
        i = r(821609),
        o = r(824078);
      function c(e) {
        let { actions: t, className: r } = e;
        return (0, n.jsx)("div", {
          className: l()(o.actionBar, r),
          children: (0, n.jsx)(s.e, {
            size: "sm",
            fullWidth: !0,
            direction: "vertical",
            children: t.map((e, t) => (0, n.jsx)(i.$, { ...e }, t)),
          }),
        });
      }
    },
    798618(e, t, r) {
      r.d(t, { F: () => f });
      var n = r(627968),
        a = r(64700),
        l = r(503698),
        s = r.n(l),
        i = r(312640),
        o = r(824078);
      function c() {
        return (0, n.jsxs)("svg", {
          width: "22",
          height: "14",
          viewBox: "0 0 22 14",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: o.caretIcon,
          children: [
            (0, n.jsx)("path", {
              className: o.caretFill,
              d: "M14.0535 9.39127C12.4557 11.2796 9.54425 11.2796 7.94646 9.39127L1 1Q0 0 1 0L21 0Q22 0 21 1L14.0535 9.39127Z",
            }),
            (0, n.jsx)("path", {
              className: o.caretGradient,
              d: "M14.0535 9.39127C12.4557 11.2796 9.54425 11.2796 7.94646 9.39127L1 1Q0 0 1 0L21 0Q22 0 21 1L14.0535 9.39127Z",
            }),
            (0, n.jsx)("mask", {
              id: "mask0_caret",
              style: { maskType: "alpha" },
              maskUnits: "userSpaceOnUse",
              x: "0",
              y: "0",
              width: "22",
              height: "11",
              children: (0, n.jsx)("path", {
                d: "M14.0535 9.39126C12.4557 11.2796 9.54425 11.2796 7.94646 9.39126L1 1Q0 0 1 0L21 0Q22 0 21 1L14.0535 9.39126Z",
                className: o.caretFill,
              }),
            }),
            (0, n.jsx)("g", {
              mask: "url(#mask0_caret)",
              children: (0, n.jsx)("path", {
                className: o.caretStroke,
                d: "M13.6572 9.13184C12.2604 10.761 9.73957 10.761 8.34277 9.13184L1.0869141 0.5Q0.0869141 -0.5 1.0869141 -0.5L20.9131 -0.5Q21.9131 -0.5 20.9131 0.5L13.6572 9.13184Z",
              }),
            }),
          ],
        });
      }
      var u = r(795127),
        d = r(638671);
      let h = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 240,
          r = t / 2 - 12;
        return Math.max(-r, Math.min(r, e));
      };
      function f(e) {
        let { className: t } = e,
          r = a.useContext(i.e);
        if (null == r)
          throw Error("PopoverCaret must be used within a BasePopover");
        let { position: l, caretConfig: o } = r,
          f = (0, u.g)(l),
          { align: p, customOffset: m } = o,
          x =
            "custom" === p && void 0 !== m
              ? {
                  "--custom-caret-offset-x": ["top", "bottom"].includes(f)
                    ? `${h(m)}px`
                    : "0px",
                  "--custom-caret-offset-y": ["left", "right"].includes(f)
                    ? `${h(m)}px`
                    : "0px",
                }
              : void 0,
          g = s()(d.caret, d[`caret--${f}`], d[`caret--${p}`], t);
        return (0, n.jsx)("div", {
          className: g,
          style: x,
          children: (0, n.jsx)(c, {}),
        });
      }
    },
    916845(e, t, r) {
      r.d(t, { q: () => c });
      var n = r(627968),
        a = r(64700),
        l = r(113325),
        s = r(815021),
        i = r(985018),
        o = r(824078);
      function c(e) {
        let {
            onClick: t,
            "aria-label": r = i.intl.string(i.t.cpT0Cq),
            variant: c,
          } = e,
          { firstFocusableItemProps: u } = a.useContext(l.M);
        return (0, n.jsx)("div", {
          className: o.closeButton,
          children: (0, n.jsx)(s.J, {
            size: "sm",
            "aria-label": r,
            onClick: t,
            variant: c,
            ...u,
          }),
        });
      }
    },
    627330(e, t, r) {
      r.d(t, { D: () => d });
      var n = r(627968),
        a = r(503698),
        l = r.n(a),
        s = r(508770),
        i = r(349288),
        o = r(534514),
        c = r(834730),
        u = r(824078);
      function d(e) {
        let { title: t, body: r, badge: a, className: s, textLink: d } = e,
          p = d?.external ?? !0;
        return (0, n.jsxs)("div", {
          className: l()(u.header, s),
          children: [
            (0, n.jsxs)("div", {
              children: [
                (0, n.jsx)(h, { badge: a }),
                (0, n.jsx)(o.D, {
                  variant: "heading-md/semibold",
                  className: u.title,
                  children: t,
                }),
              ],
            }),
            (0, n.jsx)(f, { body: r }),
            null != d &&
              (0, n.jsx)(i.Anchor, {
                onClick: d.onClick,
                href: d.link,
                target: p && null != d.link ? "_blank" : void 0,
                rel: p && null != d.link ? "noopener noreferrer" : void 0,
                children: (0, n.jsx)(c.E, {
                  variant: "text-sm/normal",
                  className: u.footerLink,
                  children: d.text,
                }),
              }),
          ],
        });
      }
      function h(e) {
        let { badge: t } = e;
        if (null == t) return null;
        let r = (0, s.U)(t);
        return (0, n.jsx)("div", {
          className: u.badgeContainer,
          children: (0, n.jsx)(s.E, { variant: "brand", ...r }),
        });
      }
      function f(e) {
        let { body: t } = e;
        if (null == t) return null;
        let r = Array.isArray(t) ? t : [t];
        return 0 === r.length || r.every((e) => null == e || "" === e)
          ? null
          : (0, n.jsx)("div", {
              className: u.headerBody,
              children: r.map((e, t) =>
                (0, n.jsx)(
                  c.E,
                  { variant: "text-sm/normal", color: "none", children: e },
                  t,
                ),
              ),
            });
      }
    },
    338854(e, t, r) {
      r.d(t, { H: () => w });
      var n = r(627968),
        a = r(64700),
        l = r(941861),
        s = r(844222),
        i = r(460890),
        o = r(978495),
        c = r(353795),
        u = r(80687),
        d = r(607470),
        h = r(256905),
        f = r(312640),
        p = r(208756),
        m = r(798618),
        x = r(627330),
        g = r(113325),
        v = r(815021),
        j = r(985018),
        b = r(96867);
      function y(e) {
        let { onClick: t, "aria-label": r = j.intl.string(j.t.cpT0Cq) } = e,
          { firstFocusableItemProps: l } = a.useContext(g.M);
        return (0, n.jsx)("div", {
          className: b.b,
          children: (0, n.jsx)(v.J, {
            size: "xs",
            "aria-label": r,
            onClick: t,
            variant: "overlay-secondary",
            ...l,
          }),
        });
      }
      var C = r(818348),
        k = r(571247);
      function w(e) {
        let {
            title: t,
            body: r,
            assetUrl: g,
            previewUrl: v = g,
            disableMediaViewer: w = !1,
            action: N,
            caretConfig: E = { align: "center" },
            badge: L,
            textLink: A,
            onWatchVideo: R,
            onRequestClose: M,
            popoverRef: B,
            position: S,
            ..._
          } = e,
          { reducedMotion: T } = a.useContext(s.C),
          $ = (0, l.R)(),
          I = (0, i.G9)().isWindowFocused?.() ?? $,
          P = a.useRef(null),
          Z = (0, o.RJ)(v),
          D = a.useCallback(
            () => ({
              type: "VIDEO",
              url: g,
              proxyUrl: g,
              alt: t,
              width: 1280,
              height: 720,
              className: b.$_,
            }),
            [g, t],
          );
        a.useEffect(() => {
          null != P.current &&
            (!T.enabled && I
              ? P.current?.play().catch(C.tE)
              : P.current?.pause());
        }, [I, T.enabled]);
        let F = a.useCallback(() => {
            null !== P.current && P.current.pause(), M?.();
          }, [M]),
          O = a.useCallback(() => {
            null !== P.current && P.current.pause(), M?.();
          }, [M]),
          Q = a.useCallback(() => {
            null !== P.current && P.current.pause();
            let e = D();
            (0, h.R)({
              items: [e],
              startingIndex: 0,
              location: "VideoPopover",
              shouldHideMediaOptions: !0,
            }),
              M?.(),
              R?.();
          }, [D, R, M]),
          U = Z
            ? (0, n.jsx)(c.v, { type: "image", src: v })
            : (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(d.A, {
                    ref: P,
                    src: v,
                    width: 232,
                    height: 131,
                    autoPlay: !T.enabled && I,
                    muted: !0,
                    loop: !0,
                    playsInline: !0,
                    controls: !1,
                    preload: "metadata",
                  }),
                  !w &&
                    (0, n.jsx)("div", {
                      className: b.Rr,
                      children: (0, n.jsx)(u.D, {
                        playing: !1,
                        size: "sm",
                        "aria-label": j.intl.string(k.default.YpT3kk),
                        onClick: Q,
                      }),
                    }),
                ],
              }),
          z = {
            targetElementRef: _.targetElementRef,
            shouldShow: _.shouldShow,
            scrollBehavior: _.scrollBehavior,
            position: S,
            onRequestClose: F,
            hasVideo: !0,
            caretConfig: E,
            ...("edge" === _.alignmentStrategy
              ? { alignmentStrategy: "edge", align: _.align }
              : { alignmentStrategy: "trigger-center" }),
          };
        return (0, n.jsx)(f.x, {
          ...z,
          children: (0, n.jsxs)("div", {
            ref: B,
            children: [
              (0, n.jsx)(y, { onClick: O }),
              (0, n.jsx)(m.F, {}),
              (0, n.jsx)("div", { className: b.s, children: U }),
              (0, n.jsx)(x.D, { title: t, body: r, badge: L, textLink: A }),
              null != N ? (0, n.jsx)(p.Z, { actions: [N] }) : null,
            ],
          }),
        });
      }
    },
    795127(e, t, r) {
      r.d(t, { g: () => n });
      let n = (e) => {
        switch (e) {
          case "top":
            return "bottom";
          case "bottom":
          default:
            return "top";
          case "left":
            return "right";
          case "right":
            return "left";
        }
      };
    },
    80687(e, t, r) {
      r.d(t, { D: () => o });
      var n = r(627968);
      r(64700);
      var a = r(113494),
        l = r(782134),
        s = r(460890),
        i = r(657718);
      function o(e) {
        let { "aria-label": t, playing: r, ...o } = e,
          { i18n: c } = (0, s.G9)();
        return (0, n.jsx)(i.S, {
          ...o,
          "aria-label": t ?? (r ? c.PAUSE_BUTTON_LABEL : c.PLAY_BUTTON_LABEL),
          icon: r ? a.E : l.u,
          variant: "overlay-secondary",
          fullWidth: !1,
          rounded: !0,
        });
      }
    },
    111159(e, t, r) {
      r.d(t, { p: () => i });
      var n = r(627968);
      r(64700);
      var a = r(661531),
        l = r(996682),
        s = r(27989);
      let i = (e) => {
        let {
            size: t = "md",
            width: r,
            height: i,
            color: o = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...u
          } = e,
          d = (0, s.J)(t),
          h = d?.width ?? r,
          f = d?.height ?? i;
        return (0, n.jsx)("svg", {
          ...(0, l.A)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: f,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M19.73 4.87a18.2 18.2 0 0 0-4.6-1.44c-.21.4-.4.8-.58 1.21-1.69-.25-3.4-.25-5.1 0-.18-.41-.37-.82-.59-1.2-1.6.27-3.14.75-4.6 1.43A19.04 19.04 0 0 0 .96 17.7a18.43 18.43 0 0 0 5.63 2.87c.46-.62.86-1.28 1.2-1.98-.65-.25-1.29-.55-1.9-.92.17-.12.32-.24.47-.37 3.58 1.7 7.7 1.7 11.28 0l.46.37c-.6.36-1.25.67-1.9.92.35.7.75 1.35 1.2 1.98 2.03-.63 3.94-1.6 5.64-2.87.47-4.87-.78-9.09-3.3-12.83ZM8.3 15.12c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.89 2.27-2 2.27Zm7.4 0c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.88 2.27-2 2.27Z",
            className: c,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=67657.0c8cd3f5fbe25db5.js.map
