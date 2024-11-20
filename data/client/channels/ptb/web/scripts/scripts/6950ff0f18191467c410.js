"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["32249"],
  {
    393903: function (e, t, n) {
      n.d(t, {
        y: function () {
          return l;
        },
      });
      var r = n(192379),
        o = n(237617),
        i = n(889711);
      function l(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n = (0, r.useRef)(null),
          l = (0, r.useRef)(null),
          s = (0, o.Z)(() => e(n.current));
        return (
          (0, r.useLayoutEffect)(() => {
            if (!t) return;
            null == l.current && (l.current = (0, i.pP)(s.current));
            let e = n.current,
              r = l.current;
            if (null != e && null != r) (0, i.YP)(r, e);
          }, [t, e]),
          (0, r.useEffect)(() => {
            if (!t) return;
            let e = n.current,
              r = l.current;
            if (null != e && null != r)
              return () => {
                (0, i.UC)(r, e);
              };
          }, [t]),
          n
        );
      }
    },
    796111: function (e, t, n) {
      n.d(t, {
        P: function () {
          return o;
        },
      });
      let r = (0, n(818083).B)({
          id: "2024-06_quest_inline_console_connection",
          kind: "user",
          label: "Quest Inline Console Connection Experiment",
          defaultConfig: { enabled: !1 },
          treatments: [
            {
              id: 0,
              label: "Simplified console connection flow",
              config: { enabled: !1 },
            },
            {
              id: 1,
              label: "Inline console connection flow",
              config: { enabled: !0 },
            },
          ],
        }),
        o = (e) => {
          let { location: t, autoTrackExposure: n = !1 } = e,
            { enabled: o } = r.useExperiment(
              { location: t },
              { autoTrackExposure: n },
            );
          return o;
        };
    },
    164495: function (e, t, n) {
      n.d(t, {
        i0: function () {
          return _;
        },
        yD: function () {
          return h;
        },
      });
      var r = n(200651);
      n(192379);
      var o = n(120356),
        i = n.n(o),
        l = n(481060),
        s = n(617136),
        a = n(497505),
        c = n(918701),
        u = n(796111),
        d = n(667105),
        m = n(341907),
        f = n(604162),
        p = n(46140),
        v = n(388032),
        C = n(128220);
      function g(e) {
        let { quest: t, taskDetails: n } = e;
        return (0, r.jsx)(l.Button, {
          className: C.cta,
          color: l.Button.Colors.BRAND,
          fullWidth: !0,
          onClick: () => {
            (0, m.openVideoQuestModal)(t);
          },
          size: l.Button.Sizes.SMALL,
          children: (0, f.F9)(n),
        });
      }
      let x = (e) => {
          let { quest: t } = e;
          return (0, r.jsx)(l.Button, {
            className: C.cta,
            size: l.Button.Sizes.SMALL,
            onClick: () =>
              (0, c.FE)(t, {
                content: a.jn.QUEST_BAR_V2,
                ctaContent: s.jZ.OPEN_GAME_LINK,
              }),
            children: v.intl.string(v.t.lwQdjI),
          });
        },
        S = (e) => {
          let { quest: t } = e;
          return (0, r.jsx)(l.Button, {
            fullWidth: !0,
            className: C.cta,
            onClick: () =>
              (0, c.gI)(
                { quest: t },
                {
                  content: a.jn.QUEST_BAR_V2,
                  ctaContent: s.jZ.CONNECT_CONSOLE,
                },
              ),
            size: l.Button.Sizes.SMALL,
            children: v.intl.string(v.t.csptqa),
          });
        },
        _ = (e) => {
          let {
              quest: t,
              useReducedMotion: n,
              isExpanded: o,
              className: s,
              ctaLabel: c,
              ...u
            } = e,
            m = (0, d.hf)({ quest: t, location: a.jn.QUEST_BAR_V2 });
          return (0, r.jsx)(l.ShinyButton, {
            fullWidth: !0,
            size: l.Button.Sizes.SMALL,
            onClick: m,
            pauseAnimation: n || !o,
            className: i()(C.cta, s),
            buttonShineClassName: C.shine,
            ...u,
            children: null != c ? c : v.intl.string(v.t.cfY4PD),
          });
        },
        E = (e) => {
          var t;
          let {
              quest: n,
              useReducedMotion: o,
              isExpanded: i,
              awaitingConsoleConnections: l,
              hasMadeProgress: s,
              isProgressing: d,
              activeScreen: m,
              taskDetails: f,
            } = e,
            v =
              (null === (t = n.userStatus) || void 0 === t
                ? void 0
                : t.completedAt) != null,
            C = (0, u.P)({ location: p.dr.QUESTS_BAR }),
            E = (0, c.q8)(n);
          if (v)
            return (0, r.jsx)(_, {
              quest: n,
              useReducedMotion: o,
              isExpanded: i,
            });
          if (E) return (0, r.jsx)(g, { quest: n, taskDetails: f });
          if (m === a.LI.CONSOLE && l && !C) return (0, r.jsx)(S, { quest: n });
          else if (m !== a.LI.SELECT && !s && !d)
            return (0, r.jsx)(x, { quest: n });
          return null;
        };
      function h(e) {
        return (0, r.jsxs)("div", {
          className: C.ctaButtons,
          children: [
            e.showBackButton &&
              (0, r.jsx)(l.Button, {
                className: C.backButton,
                innerClassName: C.backButtonInner,
                look: "blank",
                grow: !1,
                fullWidth: !1,
                size: "none",
                onClick: e.onBack,
                children: (0, r.jsx)(l.ChevronSmallLeftIcon, {
                  className: C.backIcon,
                }),
              }),
            (0, r.jsx)(E, { ...e }),
          ],
        });
      }
    },
    472144: function (e, t, n) {
      var r = n(200651),
        o = n(192379),
        i = n(120356),
        l = n.n(i),
        s = n(100621),
        a = n(481060),
        c = n(569379),
        u = n(642145),
        d = n(808326);
      t.Z = o.forwardRef((e, t) => {
        let {
            quest: n,
            percentComplete: o,
            size: i = 42,
            strokeWidth: m = 3,
            glowBlur: f = 0.4,
            percentCompleteText: p,
            percentCompleteTextVariant: v = "text-lg/medium",
            children: C,
          } = e,
          g = (0, c.E)(n, o > 0),
          x = i / 2,
          S = i / 2 - m / 2,
          _ = 2 * Math.PI * S,
          E = _ - o * _,
          h = {
            strokeDasharray: "".concat(_, " ").concat(_),
            strokeDashoffset: E,
          },
          T = {
            strokeDasharray: "".concat(_, " ").concat(_),
            strokeDashoffset: -o * _,
          },
          I = { boxShadow: "0 0 30px 0px ".concat(g.glow) },
          { progressTextAnimation: N } = (0, a.useSpring)({
            progressTextAnimation: null != p && 1 !== o ? 1 : 0,
            config: u.Y,
          });
        return (0, r.jsxs)("div", {
          className: d.outer,
          ref: t,
          children: [
            (0, r.jsxs)("div", {
              className: d.inner,
              style: I,
              children: [
                C,
                (0, r.jsxs)(s.animated.div, {
                  style: { opacity: N },
                  className: l()(d.coverContent, d.progressTextWrapper),
                  children: [
                    (0, r.jsx)("div", {
                      className: l()(d.coverContent, d.progressTextOverlay),
                    }),
                    (0, r.jsx)(a.Text, {
                      variant: v,
                      color: "text-primary",
                      className: d.progressText,
                      children: p,
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsxs)("svg", {
              className: d.progressBar,
              height: i,
              width: i,
              children: [
                (0, r.jsxs)("defs", {
                  children: [
                    (0, r.jsxs)("filter", {
                      id: "glow",
                      children: [
                        (0, r.jsx)("feGaussianBlur", {
                          result: "coloredBlur",
                          stdDeviation: f,
                        }),
                        (0, r.jsxs)("feMerge", {
                          children: [
                            (0, r.jsx)("feMergeNode", { in: "coloredBlur" }),
                            (0, r.jsx)("feMergeNode", { in: "coloredBlur" }),
                            (0, r.jsx)("feMergeNode", { in: "coloredBlur" }),
                            (0, r.jsx)("feMergeNode", { in: "SourceGraphic" }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)("linearGradient", {
                      id: "linear",
                      x1: "100%",
                      y1: "0%",
                      x2: "0%",
                      y2: "0%",
                      children: [
                        (0, r.jsx)("stop", {
                          offset: "0%",
                          stopColor: g.backgroundTop,
                        }),
                        (0, r.jsx)("stop", {
                          offset: "100%",
                          stopColor: g.backgroundBottom,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)("circle", {
                  className: d.progress,
                  strokeWidth: m,
                  fill: "transparent",
                  r: S,
                  cx: x,
                  cy: x,
                  stroke: "url(#linear)",
                  style: T,
                }),
                (0, r.jsx)("circle", {
                  className: d.progress,
                  strokeWidth: m,
                  fill: "transparent",
                  r: S,
                  cx: x,
                  cy: x,
                  stroke: g.foreground,
                  style: h,
                }),
              ],
            }),
          ],
        });
      });
    },
    569379: function (e, t, n) {
      n.d(t, {
        E: function () {
          return a;
        },
        G: function () {
          return s;
        },
      }),
        n(47120);
      var r = n(192379),
        o = n(481060),
        i = n(410030),
        l = n(113434);
      function s() {
        let [{ spring: e }, t] = (0, o.useSpring)(
          () => ({ spring: 0 }),
          "animate-always",
        );
        return {
          completionSpring: e,
          startCompletionAnimation: r.useCallback(() => {
            t({ spring: 1 }), t({ spring: 0, delay: 2e3 });
          }, [t]),
        };
      }
      function a(e, t) {
        var n;
        let r = (0, l.z)(e),
          o = null !== (n = (0, i.i6)()) && void 0 !== n ? n : 0,
          s = "var(--green-330)",
          a = ["var(--background-tertiary)", "var(--interactive-normal)"],
          c = t ? a[o] : ["#828288", "#CBCDD4"][o];
        return {
          backgroundTop: c,
          backgroundBottom: t ? a[o] : ["#535356", "#8B8C95"][o],
          foreground: s,
          glow: t && r ? s : "#C4C1D66E",
        };
      }
    },
    642145: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return r;
        },
      });
      let r = { tension: 250, friction: 20 };
    },
    881773: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return D;
        },
      }),
        n(47120);
      var r = n(200651),
        o = n(192379),
        i = n(120356),
        l = n.n(i),
        s = n(100621),
        a = n(442837),
        c = n(692547),
        u = n(561779),
        d = n(481060),
        m = n(607070),
        f = n(617136),
        p = n(184299),
        v = n(818570),
        C = n(957099),
        g = n(312729),
        x = n(223418),
        S = n(604162),
        _ = n(981631),
        E = n(388032),
        h = n(417575);
      let T = "-:--",
        I = {
          [x.r.PLAYING]: {
            icon: d.PauseIcon,
            label: E.intl.string(E.t.ZcgDJS),
          },
          [x.r.PAUSED]: { icon: d.PlayIcon, label: E.intl.string(E.t.RscU7O) },
          [x.r.ENDED]: { icon: d.RetryIcon, label: E.intl.string(E.t.hsvh0t) },
        },
        N = (e, t) => {
          (0, f.dA)({
            questId: e,
            event: _.rMx.QUEST_VIDEO_VOLUME_CHANGED,
            properties: { volume_threshold: t > 0 && t < 1 ? 0.5 : t },
          });
        };
      function b(e) {
        let { current: t, duration: n } = e,
          o = null != t ? (0, S.yv)(t) : T,
          i = null != n ? (0, S.yv)(n) : T;
        return (
          (o = o.padStart(i.length, "0")),
          (0, r.jsxs)("div", {
            className: l()(h.durationTimeWrapper, h.controlsBarItem),
            children: [
              (0, r.jsx)(d.Text, {
                variant: "text-xs/normal",
                className: h.durationTimeDisplay,
                children: o,
              }),
              (0, r.jsx)(d.Text, {
                variant: "text-xs/normal",
                className: h.durationTimeSeparator,
                children: "/",
              }),
              (0, r.jsx)(d.Text, {
                variant: "text-xs/normal",
                className: h.durationTimeDisplay,
                children: i,
              }),
            ],
          })
        );
      }
      function j(e) {
        let {
            iconComponent: t,
            animationTime: n,
            visible: o,
            ariaLabel: i,
            active: a,
            disabled: u,
            tooltipLabel: m,
            tooltipDelayMs: f = 1500,
            onClick: p,
          } = e,
          v = (e) =>
            (0, r.jsx)(d.Clickable, {
              ...e,
              onClick: p,
              className: l()(h.videoControlsBtnCont, {
                [h.videoControlsBtnContDisabled]: u,
              }),
              "aria-label": i,
              "aria-disabled": u,
              children: (0, r.jsx)(s.animated.div, {
                className: l()(h.videoControlsBtnCont),
                style: {
                  opacity: (0, s.to)(
                    [n.to({ range: [0, 1], output: [0, 1] })],
                    (e) => "".concat(o ? e : Math.pow(e, 8)),
                  ),
                },
                children: (0, r.jsx)(t, {
                  color: !0 !== u ? c.Z.colors.WHITE : c.Z.colors.TEXT_MUTED,
                  className: l()(h.controlsBarItem, {
                    [h.controlsBarItemActive]: a,
                    [h.videoControlsBtn]: !u,
                  }),
                }),
              }),
            });
        return null != m
          ? (0, r.jsx)(d.Tooltip, { text: m, delay: f, children: (e) => v(e) })
          : v();
      }
      function D(e) {
        var t, n;
        let {
            videoRef: i,
            quest: f,
            playerState: S,
            animSpring: _,
            visible: T,
            seekForwardEnabled: D,
            hideCaptionBtn: A,
            handlePlaybackBtnClick: y,
            handleTranscriptBtnClick: k,
            handleCaptionBtnClick: B,
            handleFullScreenBtnClick: L,
            handleSeekBackBtnClick: P,
            handleSeekForwardBtnClick: M,
            handleControlBarPendingInteraction: O,
          } = e,
          R = (0, p.km)((e) => e.volume),
          w = (0, p.km)((e) => e.setVolume),
          F = (0, p.km)((e) => e.muted),
          Z = (0, p.km)((e) => e.setMuted),
          U = (0, p.km)((e) => e.transcriptEnabled),
          V = (0, p.km)((e) => e.captionEnabled),
          q = (0, p.km)((e) => e.fullScreenEnabled),
          G = (0, a.e7)([m.Z], () => m.Z.useReducedMotion),
          [H, z] = o.useState(F ? 0 : R),
          [Y, W] = o.useState(!1),
          [Q, K] = o.useState(!1),
          [{ volumeAnimSpring: X }, J] = (0, d.useSpring)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
          })),
          $ = (e) => {
            if (null != i.current)
              e !== i.current.volume && (i.current.volume = e), e !== H && z(e);
          },
          ee = () => {
            W(!0);
          },
          et = () => {
            W(!1);
          };
        o.useEffect(
          () => (
            J({ volumeAnimSpring: Q || Y ? 1 : 0, immediate: G }),
            () => {
              X.stop();
            }
          ),
          [Q, Y, J, G, X],
        );
        let en =
            0 === H
              ? d.VoiceXIcon
              : H < 0.5
                ? d.VoiceLowIcon
                : d.VoiceNormalIcon,
          { icon: er, label: eo } = I[S];
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              className: h.videoControlsGroup,
              children: [
                (0, r.jsx)(j, {
                  iconComponent: er,
                  animationTime: _,
                  visible: T,
                  ariaLabel: eo,
                  tooltipLabel: eo,
                  onClick: y,
                }),
                (0, r.jsx)(j, {
                  iconComponent: C.d,
                  animationTime: _,
                  visible: T,
                  onClick: P,
                  ariaLabel: E.intl.string(E.t.r9s3Ul),
                  tooltipLabel: E.intl.string(E.t.r9s3Ul),
                }),
                (0, r.jsx)(j, {
                  iconComponent: g.o,
                  animationTime: _,
                  visible: T,
                  onClick: M,
                  disabled: !D,
                  ariaLabel: D
                    ? E.intl.string(E.t.zWDcND)
                    : E.intl.string(E.t.xXh3y8),
                  tooltipLabel: D
                    ? E.intl.string(E.t.zWDcND)
                    : E.intl.string(E.t.xXh3y8),
                  tooltipDelayMs: D ? 1500 : 0,
                }),
              ],
            }),
            (0, r.jsxs)(s.animated.div, {
              className: l()(h.videoControlsGroup, h.videoControlsGroupMid),
              style: {
                opacity: (0, s.to)(
                  [_.to({ range: [0, 1], output: [0, 1] })],
                  (e) => "".concat(T ? e : Math.pow(e, 8)),
                ),
              },
              children: [
                (0, r.jsxs)("div", {
                  onMouseEnter: ee,
                  onMouseLeave: et,
                  onFocus: ee,
                  onBlur: et,
                  className: h.volumeControlGroup,
                  children: [
                    (0, r.jsx)(j, {
                      iconComponent: en,
                      animationTime: _,
                      visible: T,
                      onClick: () => {
                        if (null != i.current)
                          0 === H
                            ? ($(R), Z(!1), N(f.id, R))
                            : (w(H), $(0), Z(!0), N(f.id, 0));
                      },
                      ariaLabel: E.intl.string(E.t["eIl+AA"]),
                      tooltipLabel: E.intl.string(E.t["eIl+AA"]),
                    }),
                    (0, r.jsx)(s.animated.div, {
                      className: h.volumeSlider,
                      style: {
                        opacity: (0, s.to)(
                          [X.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(T ? e : Math.pow(e, 8)),
                        ),
                        width: (0, s.to)(
                          [X.to({ range: [0, 1], output: [0, 100] })],
                          (e) => "".concat(e, "px"),
                        ),
                      },
                      children: (0, r.jsx)(u.i, {
                        mini: !0,
                        barStyles: { height: "5px", top: "10px" },
                        grabberStyles: {
                          marginTop: "-5px",
                          backgroundColor: c.Z.colors.WHITE.css,
                          cursor: "pointer",
                        },
                        initialValue: H,
                        keyboardStep: 0.1,
                        minValue: 0,
                        maxValue: 1,
                        onValueChange: (e) => {
                          $(e),
                            w(e),
                            N(f.id, e),
                            Q && (K(!1), O(!1)),
                            F && e > 0 && Z(!1);
                        },
                        asValueChanges: (e) => {
                          $(e), !Q && (K(!0), O(!0));
                        },
                        fillStyles: { backgroundColor: c.Z.colors.WHITE.css },
                        orientation: "horizontal",
                        "aria-label": E.intl.string(E.t["eIl+AA"]),
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)(b, {
                  current:
                    null == i
                      ? void 0
                      : null === (t = i.current) || void 0 === t
                        ? void 0
                        : t.currentTime,
                  duration:
                    null == i
                      ? void 0
                      : null === (n = i.current) || void 0 === n
                        ? void 0
                        : n.duration,
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: l()(h.videoControlsGroup, h.videoControlsGroupEnd),
              children: [
                (0, r.jsx)(j, {
                  iconComponent: d.PaperIcon,
                  animationTime: _,
                  visible: T,
                  onClick: k,
                  active: U && S !== x.r.ENDED,
                  disabled: S === x.r.ENDED,
                  ariaLabel: E.intl.string(E.t.KCzjTk),
                  tooltipLabel: E.intl.string(E.t.KCzjTk),
                }),
                !A &&
                  (0, r.jsx)(j, {
                    iconComponent: v.c,
                    animationTime: _,
                    visible: T,
                    active: V,
                    onClick: B,
                    ariaLabel: E.intl.string(E.t.bDSZOz),
                    tooltipLabel: E.intl.string(E.t.bDSZOz),
                  }),
                (0, r.jsx)(j, {
                  iconComponent: q
                    ? d.FullscreenExitIcon
                    : d.FullscreenEnterIcon,
                  animationTime: _,
                  visible: T,
                  onClick: L,
                  ariaLabel: E.intl.string(E.t.vKZT5u),
                  tooltipLabel: E.intl.string(E.t.vKZT5u),
                }),
              ],
            }),
          ],
        });
      }
    },
    818570: function (e, t, n) {
      n.d(t, {
        c: function () {
          return s;
        },
      });
      var r = n(200651);
      n(192379);
      var o = n(692547),
        i = n(390507),
        l = n(325767);
      let s = (e) => {
        var t, n;
        let {
            size: s = "md",
            width: a,
            height: c,
            color: u = o.Z.colors.INTERACTIVE_NORMAL,
            colorClass: d = "",
            ...m
          } = e,
          f = (0, i.m)(s),
          p =
            null !== (t = null == f ? void 0 : f.width) && void 0 !== t ? t : a,
          v =
            null !== (n = null == f ? void 0 : f.height) && void 0 !== n
              ? n
              : c;
        return (0, r.jsx)("svg", {
          ...(0, l.Z)(m),
          xmlns: "http://www.w3.org/2000/svg",
          width: p,
          height: v,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "string" == typeof u ? u : u.css,
            fillRule: "evenodd",
            d: "M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5ZM6.316 15.652C6.9 15.996 7.568 16.168 8.32 16.168C9.048 16.168 9.68 16.02 10.216 15.724C10.76 15.428 11.184 14.996 11.488 14.428L10.18 13.408C9.996 13.776 9.736 14.064 9.4 14.272C9.072 14.48 8.712 14.584 8.32 14.584C7.92 14.584 7.56 14.48 7.24 14.272C6.92 14.064 6.668 13.756 6.484 13.348C6.3 12.932 6.208 12.436 6.208 11.86C6.208 11.284 6.3 10.792 6.484 10.384C6.668 9.968 6.92 9.656 7.24 9.448C7.56 9.24 7.92 9.136 8.32 9.136C8.72 9.136 9.084 9.24 9.412 9.448C9.74 9.656 9.996 9.944 10.18 10.312L11.488 9.292C10.872 8.132 9.816 7.552 8.32 7.552C7.568 7.552 6.9 7.728 6.316 8.08C5.732 8.424 5.276 8.92 4.948 9.568C4.62 10.216 4.456 10.98 4.456 11.86C4.456 12.74 4.62 13.504 4.948 14.152C5.276 14.8 5.732 15.3 6.316 15.652ZM14.0269 15.652C14.6109 15.996 15.2789 16.168 16.0309 16.168C16.7589 16.168 17.3909 16.02 17.9269 15.724C18.4709 15.428 18.8949 14.996 19.1989 14.428L17.8909 13.408C17.7069 13.776 17.4469 14.064 17.1109 14.272C16.7829 14.48 16.4229 14.584 16.0309 14.584C15.6309 14.584 15.2709 14.48 14.9509 14.272C14.6309 14.064 14.3789 13.756 14.1949 13.348C14.0109 12.932 13.9189 12.436 13.9189 11.86C13.9189 11.284 14.0109 10.792 14.1949 10.384C14.3789 9.968 14.6309 9.656 14.9509 9.448C15.2709 9.24 15.6309 9.136 16.0309 9.136C16.4309 9.136 16.7949 9.24 17.1229 9.448C17.4509 9.656 17.7069 9.944 17.8909 10.312L19.1989 9.292C18.5829 8.132 17.5269 7.552 16.0309 7.552C15.2789 7.552 14.6109 7.728 14.0269 8.08C13.4429 8.424 12.9869 8.92 12.6589 9.568C12.3309 10.216 12.1669 10.98 12.1669 11.86C12.1669 12.74 12.3309 13.504 12.6589 14.152C12.9869 14.8 13.4429 15.3 14.0269 15.652Z",
            className: d,
          }),
        });
      };
    },
    957099: function (e, t, n) {
      n.d(t, {
        d: function () {
          return s;
        },
      });
      var r = n(200651);
      n(192379);
      var o = n(692547),
        i = n(390507),
        l = n(325767);
      let s = (e) => {
        var t, n;
        let {
            size: s = "md",
            width: a,
            height: c,
            color: u = o.Z.colors.INTERACTIVE_NORMAL,
            ...d
          } = e,
          m = (0, i.m)(s),
          f =
            null !== (t = null == m ? void 0 : m.width) && void 0 !== t ? t : a,
          p =
            null !== (n = null == m ? void 0 : m.height) && void 0 !== n
              ? n
              : c;
        return (0, r.jsxs)("svg", {
          ...(0, l.Z)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: f,
          height: p,
          fill: "none",
          viewBox: "0 0 32 32",
          children: [
            (0, r.jsx)("path", {
              d: "M169.545 229.312v7.919l14.838-10.253v46.348h7.669v-55.434h-6.169l-16.338 11.42ZM225.979 274.576c13.087 0 21.34-11.003 21.34-28.842 0-17.756-8.253-29.093-21.34-29.093-13.004 0-21.173 11.254-21.173 29.009 0 17.923 8.169 28.926 21.173 28.926Zm0-7.335c-8.419 0-13.004-8.336-13.004-21.591 0-13.087 4.585-21.673 13.004-21.673 8.503 0 13.171 8.669 13.171 21.757 0 13.171-4.668 21.507-13.171 21.507Z",
              style: {
                fill: "string" == typeof u ? u : u.css,
                fillRule: "nonzero",
              },
              transform: "translate(-25.102 -30.774) scale(.19361)",
            }),
            (0, r.jsx)("path", {
              d: "M137.108 31.459a160.22 160.22 0 0 0-30.316-2.894c-88.439 0-160.24 71.801-160.24 160.241 0 88.439 71.801 160.24 160.24 160.24 88.499 0 160.241-71.742 160.241-160.24h-31.365c0 71.176-57.699 128.876-128.876 128.876-71.128 0-128.876-57.748-128.876-128.876 0-71.129 57.748-128.877 128.876-128.877 8.183 0 16.347.78 24.382 2.328l5.934-30.798Z",
              style: { fill: "string" == typeof u ? u : u.css },
              transform: "matrix(-.0886 .03775 .03775 .0886 17.716 -4.317)",
            }),
            (0, r.jsx)("path", {
              d: "M144.616 190.007V96.608l197.822 69.184-197.822 69.185v-44.97Z",
              style: { fill: "string" == typeof u ? u : u.css },
              transform: "matrix(-.0222 .01458 .04451 .06777 3.48 -8.53)",
            }),
          ],
        });
      };
    },
    312729: function (e, t, n) {
      n.d(t, {
        o: function () {
          return s;
        },
      });
      var r = n(200651);
      n(192379);
      var o = n(692547),
        i = n(390507),
        l = n(325767);
      let s = (e) => {
        var t, n;
        let {
            size: s = "md",
            width: a,
            height: c,
            color: u = o.Z.colors.INTERACTIVE_NORMAL,
            ...d
          } = e,
          m = (0, i.m)(s),
          f =
            null !== (t = null == m ? void 0 : m.width) && void 0 !== t ? t : a,
          p =
            null !== (n = null == m ? void 0 : m.height) && void 0 !== n
              ? n
              : c;
        return (0, r.jsxs)("svg", {
          ...(0, l.Z)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: f,
          height: p,
          fill: "none",
          viewBox: "0 0 32 32",
          children: [
            (0, r.jsx)("path", {
              d: "M169.545 229.312v7.919l14.838-10.253v46.348h7.669v-55.434h-6.169l-16.338 11.42ZM225.979 274.576c13.087 0 21.34-11.003 21.34-28.842 0-17.756-8.253-29.093-21.34-29.093-13.004 0-21.173 11.254-21.173 29.009 0 17.923 8.169 28.926 21.173 28.926Zm0-7.335c-8.419 0-13.004-8.336-13.004-21.591 0-13.087 4.585-21.673 13.004-21.673 8.503 0 13.171 8.669 13.171 21.757 0 13.171-4.668 21.507-13.171 21.507Z",
              style: {
                fill: "string" == typeof u ? u : u.css,
                fillRule: "nonzero",
              },
              transform: "translate(-24.102 -30.774) scale(.19361)",
            }),
            (0, r.jsx)("path", {
              d: "M137.108 31.459a160.22 160.22 0 0 0-30.316-2.894c-88.439 0-160.24 71.801-160.24 160.241 0 88.439 71.801 160.24 160.24 160.24 88.499 0 160.241-71.742 160.241-160.24h-31.365c0 71.176-57.699 128.876-128.876 128.876-71.128 0-128.876-57.748-128.876-128.876 0-71.129 57.748-128.877 128.876-128.877 8.183 0 16.347.78 24.382 2.328l5.934-30.798Z",
              style: { fill: "string" == typeof u ? u : u.css },
              transform: "matrix(.0886 .03775 -.03775 .0886 14.284 -4.317)",
            }),
            (0, r.jsx)("path", {
              d: "M144.616 190.007V96.608l197.822 69.184-197.822 69.185v-44.97Z",
              style: { fill: "string" == typeof u ? u : u.css },
              transform: "matrix(.0222 .01458 -.04451 .06777 28.52 -8.53)",
            }),
          ],
        });
      };
    },
    536687: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return B;
          },
        }),
        n(47120);
      var r = n(200651),
        o = n(192379),
        i = n(120356),
        l = n.n(i),
        s = n(442837),
        a = n(780384),
        c = n(481060),
        u = n(607070),
        d = n(210887),
        m = n(617136),
        f = n(113434),
        p = n(569984),
        v = n(497505),
        C = n(918701),
        g = n(475595),
        x = n(566078),
        S = n(164495),
        _ = n(472144),
        E = n(602667),
        h = n(644646),
        T = n(604162),
        I = n(747717),
        N = n(963123),
        b = n(281055),
        j = n(46140),
        D = n(981631),
        A = n(388032),
        y = n(417575);
      function k(e) {
        var t;
        let { transitionState: n, onClose: i, quest: p, autoplay: k } = e,
          B = (0, C.il)(p),
          L = (0, s.e7)([d.Z], () => d.Z.getState().theme),
          P = (0, a.wj)(L) ? D.BRd.DARK : D.BRd.LIGHT,
          M = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
          [O, R] = o.useState(B.progressSeconds),
          [w, F] = o.useState(!1),
          { completedRatio: Z, completedRatioDisplay: U } = (0, f.I)(p),
          [V, q] = (0, T.G6)(
            A.intl.string(A.t.RDE0SU),
            A.intl.string(A.t["+5kSoa"]),
            1700,
          ),
          G =
            (null === (t = p.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) != null
              ? A.intl.string(A.t.vTgCW1)
              : A.intl.string(A.t.cfY4PD),
          H = o.useCallback(() => {
            (0, C.f2)(p.id, {
              content: v.jn.VIDEO_MODAL,
              ctaContent: m.jZ.COPY_QUEST_URL,
            }),
              q();
          }, [p.id, q]),
          z = () => {
            (0, C.FE)(p, {
              content: v.jn.VIDEO_MODAL,
              ctaContent: m.jZ.OPEN_GAME_LINK,
            });
          },
          Y = () => {
            F(!0);
          },
          W = () => {
            F(!1);
          },
          Q = o.useMemo(
            () => x.r.build(p.config).defaultReward.messages.name,
            [p],
          ),
          K = A.intl.formatToPlainString(A.t["12IWPz"], { rewardName: Q });
        return (0, r.jsx)(c.ModalRoot, {
          transitionState: n,
          size: c.ModalSize.DYNAMIC,
          className: y.modalRoot,
          children: (0, r.jsx)(E.A, {
            questOrQuests: p,
            questContent: v.jn.VIDEO_MODAL,
            minViewTimeSeconds: b.zw,
            trackGuildAndChannelMetadata: !0,
            children: (e) => {
              var t, o;
              return (0, r.jsx)("div", {
                ref: (t) => {
                  e.current = t;
                },
                className: y.modalBg,
                children: (0, r.jsx)("div", {
                  className: y.modalBody,
                  children: (0, r.jsxs)("div", {
                    className: y.modalContent,
                    children: [
                      (0, r.jsxs)("div", {
                        className: y.contentHeader,
                        children: [
                          (0, r.jsxs)(c.Clickable, {
                            className: y.contentHeaderGameInfo,
                            onClick: z,
                            children: [
                              (0, r.jsx)("img", {
                                alt: p.config.messages.gameTitle,
                                className: l()(
                                  y.contentHeaderLogotype,
                                  y.accentOnHover,
                                ),
                                src: (0, g.fh)(p, g.eC.LOGO_TYPE, P).url,
                              }),
                              (0, r.jsx)(I.Z, {}),
                              (0, r.jsxs)("div", {
                                className: y.questHeading,
                                children: [
                                  (0, r.jsx)(c.Heading, {
                                    variant: "heading-md/semibold",
                                    color: "header-primary",
                                    children: A.intl.format(A.t.EQa7oq, {
                                      questName: p.config.messages.questName,
                                    }),
                                  }),
                                  (0, r.jsx)(c.Text, {
                                    variant: "text-sm/medium",
                                    color: "header-secondary",
                                    children: p.config.messages.gameTitle,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsx)(c.Tooltip, {
                            position: "left",
                            text: K,
                            onTooltipShow: Y,
                            onTooltipHide: W,
                            children: (e) =>
                              (0, r.jsx)(c.Clickable, {
                                className: y.progressCont,
                                ...e,
                                children: (0, r.jsx)(_.Z, {
                                  quest: p,
                                  size: 48,
                                  percentComplete: Z,
                                  percentCompleteText: w ? U : void 0,
                                  percentCompleteTextVariant: "text-sm/medium",
                                  children: (0, r.jsx)(h.Z, {
                                    className: y.questProgressRewardTile,
                                    quest: p,
                                    questContent: v.jn.VIDEO_MODAL,
                                    autoplay: !1,
                                    location: j.dr.VIDEO_MODAL,
                                  }),
                                }),
                              }),
                          }),
                        ],
                      }),
                      (0, r.jsx)(N.Z, {
                        quest: p,
                        parentTransitionState: n,
                        onOptimisticProgressUpdate: R,
                        autoplay: k,
                      }),
                      (0, r.jsxs)("div", {
                        className: y.contentFooter,
                        children: [
                          (0, r.jsx)(c.Button, {
                            onClick: i,
                            color: c.Button.Colors.PRIMARY,
                            size: c.Button.Sizes.MEDIUM,
                            children: A.intl.string(A.t.cpT0Cg),
                          }),
                          (0, r.jsxs)("div", {
                            className: y.contentFooterButtonCont,
                            children: [
                              (0, r.jsx)(c.Button, {
                                color: c.Button.Colors.PRIMARY,
                                onClick: H,
                                size: c.Button.Sizes.MEDIUM,
                                className: y.copyLinkBtn,
                                children: V,
                              }),
                              (0, r.jsx)(S.i0, {
                                className: y.claimBtn,
                                size: c.Button.Sizes.MEDIUM,
                                quest: p,
                                useReducedMotion: M,
                                isExpanded:
                                  (null === (t = p.userStatus) || void 0 === t
                                    ? void 0
                                    : t.completedAt) != null,
                                disabled:
                                  (null === (o = p.userStatus) || void 0 === o
                                    ? void 0
                                    : o.completedAt) == null,
                                ctaLabel: G,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              });
            },
          }),
        });
      }
      function B(e) {
        let { questId: t, autoplay: n, ...o } = e,
          i = (0, s.e7)([p.Z], () => p.Z.getQuest(t));
        return null != i
          ? (0, r.jsx)(k, { ...o, quest: i, autoplay: n })
          : null;
      }
    },
    355243: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p;
        },
      }),
        n(47120);
      var r = n(200651),
        o = n(192379),
        i = n(120356),
        l = n.n(i),
        s = n(481060),
        a = n(393903),
        c = n(604162),
        u = n(420212),
        d = n(504446);
      function m(e, t, n) {
        return n * (Math.max(e - t.left, 0) / t.width);
      }
      function f(e, t, n) {
        return n.left + (e / t) * n.width;
      }
      function p(e) {
        let {
            percent: t,
            animate: n,
            interactionEnabled: i,
            backgroundColor: p,
            preloadedBuffers: v,
            duration: C,
            maxSeekableTime: g,
            onClick: x,
            onScrubBack: S,
            onScrubForward: _,
          } = e,
          [E, h] = o.useState(null),
          [T, I] = o.useState(null),
          [N, b] = o.useState(null),
          [j, D] = o.useState(!1),
          A = o.useRef(null),
          y = (e) => {
            (A.current = e), h(e);
          };
        o.useEffect(() => {
          null != E && (null == g ? b(null) : b(f(g, C, E)));
        }, [E, g, C]);
        let k = (0, a.y)(() => {
          if (null != k.current) y(k.current.getBoundingClientRect());
        });
        o.useLayoutEffect(() => {
          null != k.current && y(k.current.getBoundingClientRect());
        }, [k]),
          o.useEffect(() => {
            let e = () => {
              null != k.current && y(k.current.getBoundingClientRect());
            };
            return (
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, [k]);
        let B = (e) => {
            I(e.clientX);
          },
          L = o.useCallback(
            (e) => {
              let { key: t } = e;
              t === u.mR.ArrowLeft && null != S
                ? (e.preventDefault(), e.stopPropagation(), S())
                : t === u.mR.ArrowRight &&
                  null != _ &&
                  (e.preventDefault(), e.stopPropagation(), _());
            },
            [S, _],
          ),
          P = null != T && null != E ? m(T, E, C) : 0,
          M = (0, c.yv)(P),
          O = null != E ? E.right - f((t / 100) * C, C, E) : null,
          R = null != T && null != E ? E.right - T : null,
          w = null != N && null != E ? E.right - N : null;
        return (0, r.jsxs)("div", {
          className: d.cont,
          ref: k,
          children: [
            (0, r.jsxs)(s.Clickable, {
              className: l()(d.hitboxArea, { [d.interactionEnabled]: i }),
              ignoreKeyPress: !0,
              onClick: (e) => {
                if (!!i && null != x)
                  x(m(e.clientX, e.currentTarget.getBoundingClientRect(), C));
              },
              onMouseEnter: (e) => {
                if (!!i)
                  null != k.current && y(k.current.getBoundingClientRect()),
                    D(!0),
                    B(e);
              },
              onMouseLeave: (e) => {
                if (!!i) D(!1), I(null);
              },
              onMouseMove: (e) => {
                if (!!i) j && B(e);
              },
              onKeyDown: L,
              tabIndex: i ? void 0 : -1,
              focusProps: { offset: { top: 12, bottom: 12 } },
              children: [
                null == v
                  ? void 0
                  : v.map((e) =>
                      (0, r.jsx)(
                        "div",
                        {
                          className: l()(d.buffer, { [d.bufferHovered]: j }),
                          style: {
                            width: "".concat(100 * e.size, "%"),
                            left: "".concat(100 * e.start, "%"),
                          },
                        },
                        "".concat(e.start, ":").concat(e.size),
                      ),
                    ),
                !i &&
                  null != w &&
                  w > 0 &&
                  (0, r.jsx)("div", {
                    className: d.seekableBar,
                    style: {
                      right: null != w ? "".concat(w, "px") : "auto",
                      opacity: null != w ? 1 : 0,
                    },
                  }),
                (0, r.jsx)(s.Progress, {
                  className: d.progress,
                  percent: t,
                  foregroundColor: "#FFFFFF",
                  backgroundColor: null != p ? p : void 0,
                  size: j ? s.Progress.Sizes.XSMALL : s.Progress.Sizes.XXSMALL,
                  animate: n,
                }),
                j &&
                  null != M &&
                  (0, r.jsx)(s.Text, {
                    className: d.timeDisplay,
                    variant: "text-xs/normal",
                    style: {
                      right: null != R ? "".concat(R - 10, "px") : "auto",
                      color: "#FFFFFF",
                    },
                    children: M,
                  }),
                j &&
                  i &&
                  null != O &&
                  (0, r.jsx)("div", {
                    className: d.grabber,
                    style: { right: "".concat(O - 6, "px") },
                  }),
              ],
            }),
            (0, r.jsx)("div", {
              className: d.progressGlow,
              style: { width: "".concat(t, "%") },
            }),
          ],
        });
      }
    },
    106743: function (e, t, n) {
      n.d(t, {
        K: function () {
          return c;
        },
      });
      var r = n(200651),
        o = n(192379),
        i = n(261833),
        l = n(481060),
        s = n(184299),
        a = n(417575);
      function c(e) {
        var t;
        let { quest: n, onClose: c } = e,
          u = (0, s.km)((e) => e.transcript),
          d =
            (null == u ? void 0 : u.questId) === n.id &&
            (null == u ? void 0 : u.fetchStatus) === s.iF.SUCCESS &&
            null !== (t = u.text) &&
            void 0 !== t
              ? t
              : "",
          m = o.useMemo(
            () =>
              d
                .split("\n")
                .map((e) => e.trim())
                .filter((e) => e.length > 0),
            [d],
          );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              className: a.transcriptHeader,
              children: [
                (0, r.jsx)(l.Heading, {
                  variant: "heading-md/semibold",
                  color: "currentColor",
                  children: "Transcript",
                }),
                (0, r.jsx)(l.Clickable, {
                  onClick: c,
                  className: a.transcriptBackBtn,
                  children: (0, r.jsx)(i.D, { color: "currentColor" }),
                }),
              ],
            }),
            (0, r.jsx)(l.FocusRing, {
              children: (0, r.jsx)(l.ScrollerAuto, {
                className: a.transcriptScroller,
                fade: !0,
                children: (0, r.jsx)("div", {
                  className: a.transcriptBody,
                  children:
                    (null == u ? void 0 : u.fetchStatus) === s.iF.FETCHING
                      ? (0, r.jsx)("div", {
                          className: a.transcriptBodySpinner,
                          children: (0, r.jsx)(l.Spinner, {
                            type: l.Spinner.Type.WANDERING_CUBES,
                          }),
                        })
                      : (0, r.jsx)(l.Heading, {
                          variant: "heading-md/normal",
                          color: "text-muted",
                          children: m.map((e, t) =>
                            (0, r.jsx)("p", { children: e }, t),
                          ),
                        }),
                }),
              }),
            }),
          ],
        });
      }
    },
    223418: function (e, t, n) {
      var r, o, i, l;
      n.d(t, {
        r: function () {
          return r;
        },
        y: function () {
          return o;
        },
      }),
        ((i = r || (r = {})).PLAYING = "playing"),
        (i.PAUSED = "paused"),
        (i.ENDED = "ended"),
        ((l = o || (o = {})).PAUSE_BUTTON = "PAUSE_BUTTON"),
        (l.LOST_FOCUS = "LOST_FOCUS"),
        (l.MODAL_CLOSED = "MODAL_CLOSED");
    },
    747717: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(200651);
      n(192379);
      var o = n(120356),
        i = n.n(o),
        l = n(417575);
      function s(e) {
        let { className: t, color: n } = e;
        return (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "2",
          height: "40",
          viewBox: "0 0 2 40",
          fill: "none",
          className: i()(l.verticalDivider, t),
          children: (0, r.jsx)("path", {
            d: "M1 0V40",
            stroke: n,
            strokeOpacity: "0.3",
            strokeWidth: "2",
          }),
        });
      }
    },
    963123: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return V;
        },
      }),
        n(47120),
        n(653041);
      var r = n(200651),
        o = n(192379),
        i = n(120356),
        l = n.n(i),
        s = n(100621),
        a = n(772848),
        c = n(442837),
        u = n(780384),
        d = n(481060),
        m = n(607070),
        f = n(70097),
        p = n(210887),
        v = n(866960),
        C = n(228488),
        g = n(617136),
        x = n(272008),
        S = n(497505),
        _ = n(918701),
        E = n(184299),
        h = n(720293),
        T = n(602667),
        I = n(341907),
        N = n(881773),
        b = n(355243),
        j = n(106743),
        D = n(223418),
        A = n(604162),
        y = n(747717),
        k = n(281055),
        B = n(920393),
        L = n(981631),
        P = n(217702),
        M = n(388032),
        O = n(417575);
      let R = new Set([L.IyS.FIVE_G, L.IyS.FOUR_G, L.IyS.UNKNOWN]),
        w = { tension: 250, friction: 5, clamp: !0 };
      function F() {
        let e = (0, c.e7)([p.Z], () => p.Z.getState().theme);
        return (0, r.jsx)("div", {
          className: O.pauseText,
          style: {
            background: (0, u.wj)(e)
              ? "rgba(0, 0, 0, 0.65)"
              : "rgba(255, 255, 255, 0.65)",
          },
          children: (0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            children: M.intl.string(M.t.U7Xrb2),
          }),
        });
      }
      function Z(e) {
        let { quest: t, shouldShow: n } = e,
          i = o.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
        return null == i
          ? null
          : (0, r.jsx)(T.A, {
              questOrQuests: t,
              questContent: S.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                (0, r.jsx)("img", {
                  ref: (t) => {
                    e.current = t;
                  },
                  src: i.url,
                  alt: "Video thumbnail",
                  className: l()(O.stillFrameImageCard, {
                    [O.stillFrameImageCardHidden]: !n,
                  }),
                }),
            });
      }
      function U(e) {
        let { title: t, subtitle: n, icon: i, onClick: s, className: a } = e,
          [c, u] = o.useState(!1),
          m = () => {
            u(!0);
          },
          f = () => {
            u(!1);
          };
        return (0, r.jsx)(d.Clickable, {
          className: l()(O.endScreenPanel, O.accentOnHover, a),
          onMouseEnter: m,
          onMouseLeave: f,
          onFocus: m,
          onBlur: f,
          onClick: s,
          children: (0, r.jsxs)("div", {
            className: O.endScreenPanelInner,
            children: [
              (0, r.jsxs)("div", {
                className: O.endScreenPanelTextCont,
                children: [
                  (0, r.jsx)(d.Heading, {
                    variant: "heading-md/semibold",
                    className: O.endScreenPanelTextTitle,
                    children: t,
                  }),
                  (0, r.jsx)(d.Heading, {
                    variant: "heading-sm/normal",
                    className: O.endScreenPanelTextSubtitle,
                    children: n,
                  }),
                ],
              }),
              (0, r.jsx)(y.Z, { color: "#747783" }),
              (0, r.jsx)(i, {
                size: "md",
                color: c ? "#FFFFFF" : "#B5BAC1",
                className: O.endScreenIcon,
              }),
            ],
          }),
        });
      }
      function V(e) {
        var t, n, i, u, p, T, y, V, q, G, H;
        let {
            quest: z,
            onOptimisticProgressUpdate: Y,
            autoplay: W,
            parentTransitionState: Q,
          } = e,
          K = (0, E.km)((e) => e.transcriptEnabled),
          X = (0, E.km)((e) => e.setTranscriptEnabled),
          J = (0, E.km)((e) => e.captionEnabled),
          $ = (0, E.km)((e) => e.setCaptionEnabled),
          ee = (0, E.km)((e) => e.fullScreenEnabled),
          et = (0, E.km)((e) => e.setFullScreenEnabled),
          { focused: en, focusedChanged: er } = (0, k.xU)(),
          { visible: eo, visibleChanged: ei, targetRef: el } = (0, k.Yy)(),
          [es, ea] = o.useState(!0 === W ? D.r.PLAYING : D.r.PAUSED),
          [ec, eu] = o.useState(!1),
          ed = (0, _.il)(z),
          [em, ef] = o.useState(ed.percentComplete),
          [ep, ev] = o.useState(!1),
          [eC, eg] = o.useState(!0),
          [ex, eS] = o.useState(!1),
          [e_, eE] = o.useState([]),
          [eh, eT] = o.useState(v.Z.getEffectiveConnectionSpeed()),
          [eI, eN] = o.useState(0),
          [eb, ej] = o.useState(0),
          [eD, eA] = o.useState(!1),
          [ey, ek] = o.useState(!1),
          eB = o.useRef(null),
          eL = o.useRef(null),
          eP = (0, o.useRef)(-1),
          eM = (0, E.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[z.id]) && void 0 !== t
              ? t
              : { timestampSec: 0, duration: 10 };
          }),
          eO = (0, E.km)((e) => e.setVideoProgress),
          eR = (0, E.km)((e) => e.muted),
          ew = (0, E.km)((e) => e.volume),
          eF = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
          eZ = (0, o.useRef)(null),
          eU = (0, o.useRef)(null),
          eV = o.useRef(!0),
          eq =
            (null === (t = z.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          eG = (0, E.km)((e) => e.transcript),
          [eH, ez] = o.useState(null),
          [eY, eW] = o.useState(!1),
          [eQ, eK] = o.useState(!1),
          [eX, eJ] = o.useState(null),
          e$ = eq
            ? null !==
                (y =
                  null === (n = eZ.current) || void 0 === n
                    ? void 0
                    : n.duration) && void 0 !== y
              ? y
              : 0
            : Math.max(eM.maxTimestampSec, ed.progressSeconds),
          e0 = o.useMemo(
            () =>
              R.has(eh)
                ? h.i.VIDEO_PLAYER_VIDEO
                : h.i.VIDEO_PLAYER_VIDEO_LOW_RES,
            [eh],
          ),
          e1 = o.useMemo(() => (null != e0 ? (0, h.z)(e0, z) : null), [e0, z]),
          [e2] = o.useState(a.Z),
          e7 = o.useCallback(
            (e) => {
              null != eZ.current &&
                (0, g.dA)({
                  questId: z.id,
                  event: L.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                  properties: {
                    ...e,
                    video_asset_id: e0,
                    quest_completed: eq,
                    video_duration_sec: eZ.current.duration,
                    video_progress: (0, I.formatVideoProgressRatio)(
                      e.segment_end_sec,
                      eZ.current.duration,
                    ),
                    video_session_id: e2,
                  },
                });
            },
            [z.id, e0, eq, e2],
          ),
          { forceSendCurrentSegment: e9 } = (0, B.Z)({
            videoRef: eZ,
            isPlaying: es === D.r.PLAYING,
            isMetadataLoaded: eY,
            isInitialSeekComplete: eQ,
            onAnalytics: e7,
            emitIntervalMs: 4e3,
            minSegmentDurationMs: 2e3,
          }),
          e3 = o.useCallback(
            (e) => {
              if ((ea(e), null != eZ.current))
                switch (e) {
                  case D.r.PLAYING:
                    eZ.current.play(),
                      (0, g.dA)({
                        questId: z.id,
                        event: L.rMx.QUEST_VIDEO_RESUMED,
                        properties: {
                          video_timestamp_seconds: eZ.current.currentTime,
                          pause_reason: eH,
                          video_session_id: e2,
                        },
                      }),
                      ez(null);
                    break;
                  case D.r.PAUSED:
                    eZ.current.pause(), e9();
                    break;
                  case D.r.ENDED:
                    X(!1), e9();
                }
            },
            [z.id, eH, e9, X, e2],
          );
        o.useLayoutEffect(() => {
          eV.current &&
            ((eV.current = !1),
            eT(v.Z.getEffectiveConnectionSpeed()),
            eq && eM.timestampSec >= eM.duration && eO(z.id, 0, eM.duration));
        }, []),
          o.useEffect(() => {
            null != eZ.current &&
              null != eH &&
              (0, g.dA)({
                questId: z.id,
                event: L.rMx.QUEST_VIDEO_PAUSED,
                properties: {
                  video_timestamp_seconds: eZ.current.currentTime,
                  reason: eH,
                  video_session_id: e2,
                },
              });
          }, [eH, z.id, e2]),
          o.useEffect(() => {
            er &&
              null != eZ.current &&
              (0, g.dA)({
                questId: z.id,
                event: en
                  ? L.rMx.QUEST_VIDEO_APP_FOCUSED
                  : L.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                properties: {
                  video_timestamp_seconds: eZ.current.currentTime,
                  video_state: es,
                  video_session_id: e2,
                },
              });
          }, [en, er, es, z.id, e2]);
        let e6 = o.useCallback(
          (e) => {
            var t;
            !eq &&
              (null === (t = z.userStatus) || void 0 === t
                ? void 0
                : t.enrolledAt) != null &&
              (0, x.FI)(z.id, e),
              null != eZ.current &&
                (0, g.dA)({
                  questId: z.id,
                  event: L.rMx.QUEST_VIDEO_PROGRESSED,
                  properties: {
                    progress: (0, I.formatVideoProgressRatio)(
                      eZ.current.currentTime,
                      eZ.current.duration,
                    ),
                    video_timestamp_seconds: eZ.current.currentTime,
                    video_session_id: e2,
                  },
                });
          },
          [z, eq, eZ, e2],
        );
        o.useEffect(() => {
          (Q === d.ModalTransitionState.HIDDEN ||
            Q === d.ModalTransitionState.EXITING ||
            Q === d.ModalTransitionState.EXITED ||
            (null != Q && ei && !eo && !eq) ||
            (er && !en && !eq)) &&
            null != eZ.current &&
            es === D.r.PLAYING &&
            (e3(D.r.PAUSED), !eq && ez(D.y.LOST_FOCUS));
        }, [Q, en, er, eo, ei, es, eq, e3, e6]);
        let e4 = () => {
            eu(!0);
          },
          e8 = () => {
            eu(!1);
          },
          e5 = ec || es === D.r.PAUSED || es === D.r.ENDED,
          te = o.useCallback(() => {
            var e;
            let t = (0, C.fn)(
              null === (e = eZ.current) || void 0 === e ? void 0 : e.parentNode,
              eZ.current,
            );
            null != t &&
              !(0, C.rB)(t) &&
              (t.removeEventListener(C.NO, te),
              et(!1),
              (0, g.dA)({
                questId: z.id,
                event: L.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                properties: { video_session_id: e2 },
              }));
          }, [z.id, et, e2]),
          tt = () => {
            if (null != eZ.current)
              tr(Math.max(eZ.current.currentTime - 10, 0)),
                es === D.r.ENDED && e3(D.r.PAUSED),
                (0, g._3)({
                  questId: z.id,
                  questContent: S.jn.VIDEO_MODAL,
                  questContentCTA: g.jZ.SEEK_BACKWARD,
                });
          },
          tn = () => {
            if (null == eZ.current || !tg) return;
            let e = Math.min(eZ.current.currentTime + 10, e$);
            tr(e),
              es !== D.r.ENDED && e >= eZ.current.duration && e3(D.r.ENDED),
              (0, g._3)({
                questId: z.id,
                questContent: S.jn.VIDEO_MODAL,
                questContentCTA: g.jZ.SEEK_FORWARD,
              });
          };
        o.useEffect(() => {
          let e = eZ.current;
          return () => {
            let t = (0, C.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(C.NO, te);
          };
        }, [te]);
        let tr = o.useCallback(
            (e) => {
              null != eZ.current &&
                (e9(),
                ev(!0),
                eK(!1),
                (eZ.current.currentTime = e),
                eO(z.id, e, eZ.current.duration));
            },
            [eZ, eO, z.id, e9],
          ),
          to = () => {
            if (null != eZ.current)
              switch (es) {
                case D.r.ENDED:
                  tr(0), e3(D.r.PLAYING);
                  break;
                case D.r.PLAYING:
                  e3(D.r.PAUSED), ez(D.y.PAUSE_BUTTON);
                  break;
                default:
                  e3(D.r.PLAYING);
              }
          },
          ti = (e) => {
            eJ(e);
          },
          tl = (e) => {
            eJ((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
          },
          ts = o.useCallback(() => {
            if (null == eZ.current || 0 === eZ.current.textTracks.length)
              return;
            let e = eZ.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
              for (let t = 0; t < e.cues.length; t++) {
                let n = e.cues[t];
                (0, A.JC)(n) &&
                  ((n.id = "cue-".concat(t)),
                  (n.onenter = () => ti(n)),
                  (n.onexit = () => tl(n)));
              }
          }, [eZ]);
        o.useEffect(() => {
          if (null == eU.current) return;
          let e = eU.current;
          return (
            e.addEventListener("load", ts),
            () => {
              null != e && e.removeEventListener("load", ts);
            }
          );
        }, [eU, ts]);
        let ta = (e) => {
          if (null != eZ.current && es === D.r.PLAYING) {
            if ((eC && eg(!1), ex)) {
              let e = null != eL.current ? Date.now() - eL.current : null;
              (0, g.dA)({
                questId: z.id,
                event: L.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                properties: {
                  video_asset_id: e0,
                  network_connection_speed: eh,
                  duration: e,
                  buffer_index: eP.current,
                  video_session_id: e2,
                },
              }),
                eS(!1);
            }
            e3(D.r.PLAYING);
          }
        };
        o.useEffect(() => {
          if (!ep) return;
          let e = setTimeout(() => {
            ev(!1);
          }, 1e3);
          return () => clearTimeout(e);
        }, [ep]);
        let [{ controlBarAnimSpring: tc }, tu] = (0, d.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: w,
            onStart: () => {
              ek(!1);
            },
            onRest: (e) => {
              1 === e.value && ek(!0);
            },
          })),
          td = (0, o.useRef)(null),
          [{ captionHeightSpring: tm }, tf] = (0, d.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: w,
          }));
        o.useEffect(() => {
          var e, t;
          return (
            tf({
              captionHeightSpring:
                J &&
                null != eX &&
                null !==
                  (t =
                    null === (e = td.current) || void 0 === e
                      ? void 0
                      : e.clientHeight) &&
                void 0 !== t
                  ? t
                  : 0,
              immediate: eF,
            }),
            () => {
              tm.stop();
            }
          );
        }, [J, tf, eF, eX, tm]),
          o.useEffect(
            () => (
              tu({ controlBarAnimSpring: e5 || eD ? 1 : 0, immediate: eF }),
              () => {
                tc.stop();
              }
            ),
            [e5, tu, eF, eD, tc],
          );
        let tp = es === D.r.ENDED,
          tv = o.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_THUMBNAIL, z), [z]),
          tC = o.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_CAPTION, z), [z]),
          tg =
            eq ||
            eM.maxTimestampSec >=
              (null !==
                (V =
                  null === (i = eZ.current) || void 0 === i
                    ? void 0
                    : i.currentTime) && void 0 !== V
                ? V
                : 0) +
                1;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(d.Clickable, {
            className: O.videoCont,
            "data-fullscreen": ee,
            tabIndex: -1,
            onMouseEnter: e4,
            onMouseLeave: e8,
            onFocus: e4,
            onBlur: e8,
            children: (0, r.jsxs)("div", {
              className: O.videoContInnerRelative,
              children: [
                (0, r.jsx)(Z, { quest: z, shouldShow: tp }),
                tp && (0, r.jsx)("div", { className: O.videoContOverlay }),
                (0, r.jsxs)(f.Z, {
                  ref: (e) => {
                    (eZ.current = e), (el.current = e);
                  },
                  autoPlay: W,
                  playsInline: !0,
                  mediaLayoutType: ee ? P.hV.STATIC : P.hV.RESPONSIVE,
                  className: l()({ [O.hidden]: tp, [O.videoInner]: !0 }),
                  controls: !1,
                  poster: null == tv ? void 0 : tv.url,
                  disablePictureInPicture: !0,
                  onTimeUpdate: (e) => {
                    null != eZ.current &&
                      (eZ.current.currentTime >= eI &&
                        (eN(eZ.current.currentTime + 6 + 2 * Math.random()),
                        e6(eZ.current.currentTime)),
                      eZ.current.currentTime >= eb &&
                        (ej(eZ.current.currentTime + 1),
                        (0, x.qm)(z.id, ed.taskType, eZ.current.currentTime),
                        Y(eZ.current.currentTime)),
                      eO(z.id, eZ.current.currentTime, eZ.current.duration),
                      ef((eZ.current.currentTime / eZ.current.duration) * 100));
                  },
                  onEnded: (e) => {
                    null != eZ.current &&
                      (e6(eZ.current.duration + 1),
                      eO(z.id, eZ.current.duration, eZ.current.duration)),
                      e3(D.r.ENDED),
                      eS(!1);
                  },
                  onLoadedData: (e) => {
                    if (eC) {
                      let e =
                        null != eB.current ? Date.now() - eB.current : null;
                      (0, g.dA)({
                        questId: z.id,
                        event: L.rMx.QUEST_VIDEO_LOADING_ENDED,
                        properties: {
                          video_asset_id: e0,
                          network_connection_speed: eh,
                          duration: e,
                          video_session_id: e2,
                        },
                      }),
                        eg(!1);
                    }
                  },
                  onLoadedMetadata: (e) => {
                    if (null != eZ.current)
                      eW(!0),
                        tr(
                          eq
                            ? eM.timestampSec
                            : Math.max(eM.timestampSec, ed.progressSeconds),
                        ),
                        eR ? (eZ.current.volume = 0) : (eZ.current.volume = ew);
                  },
                  onLoadStart: () => {
                    (eB.current = Date.now()),
                      (0, g.dA)({
                        questId: z.id,
                        event: L.rMx.QUEST_VIDEO_LOADING_STARTED,
                        properties: {
                          video_asset_id: e0,
                          network_connection_speed: eh,
                          video_session_id: e2,
                        },
                      });
                  },
                  onWaiting: (e) => {
                    (eL.current = Date.now()),
                      (eP.current += 1),
                      (0, g.dA)({
                        questId: z.id,
                        event: L.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                        properties: {
                          video_asset_id: e0,
                          network_connection_speed: eh,
                          buffer_index: eP.current,
                          video_session_id: e2,
                        },
                      }),
                      eS(!0);
                  },
                  onProgress: (e) => {
                    if (null == eZ.current) return;
                    let t = [];
                    for (let e = 0; e < eZ.current.buffered.length; e++) {
                      let n = eZ.current.buffered.start(e),
                        r = eZ.current.buffered.end(e);
                      if (!(r - n < 1))
                        t.push({
                          start: n / eZ.current.duration,
                          size: (r - n) / eZ.current.duration,
                        });
                    }
                    eE(t);
                  },
                  onCanPlay: ta,
                  onCanPlayThrough: ta,
                  onSeeked: () => {
                    eK(!0);
                  },
                  onClick: () => {
                    to();
                  },
                  crossOrigin: "anonymous",
                  children: [
                    null != tC &&
                      (0, r.jsx)("track", {
                        ref: eU,
                        src: tC.url,
                        label: "English",
                        kind: "captions",
                        srcLang: "en",
                        default: !0,
                      }),
                    null != e1 &&
                      (0, r.jsx)("source", { src: e1.url, type: e1.mimetype }),
                  ],
                }),
                (eC || ex) &&
                  es === D.r.PLAYING &&
                  (0, r.jsx)(d.Spinner, {
                    type: d.Spinner.Type.WANDERING_CUBES,
                    className: O.loadingSpinner,
                  }),
                es === D.r.PAUSED && eH === D.y.LOST_FOCUS && (0, r.jsx)(F, {}),
                K &&
                  es !== D.r.ENDED &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(d.Clickable, {
                        onClick: () => X(!1),
                        tabIndex: -1,
                        children: (0, r.jsx)("div", {
                          className: O.transcriptOverlay,
                        }),
                      }),
                      (0, r.jsx)(s.animated.div, {
                        className: O.transcriptCont,
                        style: {
                          marginBottom: (0, s.to)([tc, tm], (e, t) =>
                            "".concat(50 * e + t, "px"),
                          ),
                        },
                        children: (0, r.jsx)(j.K, {
                          quest: z,
                          onClose: () => {
                            X(!1),
                              (0, g._3)({
                                questId: z.id,
                                questContent: S.jn.VIDEO_MODAL,
                                questContentCTA: g.jZ.TRANSCRIPT_DISABLE,
                              });
                          },
                        }),
                      }),
                    ],
                  }),
                es === D.r.ENDED &&
                  (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(U, {
                      title:
                        null !==
                          (q =
                            null === (u = z.config.videoMetadata) ||
                            void 0 === u
                              ? void 0
                              : u.messages.videoEndCtaTitle) && void 0 !== q
                          ? q
                          : M.intl.string(M.t.iiTtpK),
                      subtitle:
                        null !==
                          (G =
                            null === (p = z.config.videoMetadata) ||
                            void 0 === p
                              ? void 0
                              : p.messages.videoEndCtaSubtitle) && void 0 !== G
                          ? G
                          : M.intl.string(M.t.mxaHf3),
                      icon: d.ArrowLargeRightIcon,
                      className: O.endScreenPanelRight,
                      onClick: () => {
                        (0, g._3)({
                          questId: z.id,
                          questContent: S.jn.VIDEO_MODAL,
                          questContentCTA: g.jZ.LEARN_MORE,
                        }),
                          (0, _.FE)(z, {
                            content: S.jn.VIDEO_MODAL,
                            ctaContent: g.jZ.LEARN_MORE,
                          });
                      },
                    }),
                  }),
                (0, r.jsx)(s.animated.div, {
                  className: O.videoFooterContGradient,
                  style: {
                    opacity: (0, s.to)(
                      [tc.to({ range: [0, 1], output: [0, 1] })],
                      (e) => "".concat(e),
                    ),
                  },
                }),
                (0, r.jsx)(
                  "div",
                  {
                    className: l()(O.playPausePopCont, {
                      [O.play]: es === D.r.PLAYING,
                      [O.pause]: es === D.r.PAUSED,
                    }),
                    children:
                      es === D.r.PLAYING
                        ? (0, r.jsx)(d.PlayIcon, {
                            className: O.playPausePopIcon,
                          })
                        : (0, r.jsx)(d.PauseIcon, {
                            className: O.playPausePopIcon,
                          }),
                  },
                  es,
                ),
                J &&
                  null != eX &&
                  (0, r.jsx)(s.animated.div, {
                    className: O.captionContainer,
                    ref: td,
                    style: {
                      translateY: (0, s.to)(
                        [tc.to({ range: [0, 1], output: [0, -50] })],
                        (e) => "".concat(e, "px"),
                      ),
                    },
                    children: (0, r.jsx)(d.Text, {
                      variant: "text-lg/semibold",
                      color: "always-white",
                      className: O.captionText,
                      children: eX.text,
                    }),
                  }),
                (0, r.jsxs)(s.animated.div, {
                  className: O.videoFooterCont,
                  style: {
                    paddingLeft: (0, s.to)(
                      [tc.to({ range: [0, 1], output: [0, 25] })],
                      (e) => "".concat(e, "px"),
                    ),
                    paddingRight: (0, s.to)(
                      [tc.to({ range: [0, 1], output: [0, 25] })],
                      (e) => "".concat(e, "px"),
                    ),
                    height: (0, s.to)(
                      [tc.to({ range: [0, 1], output: [0, 50] })],
                      (e) => "".concat(e, "px"),
                    ),
                  },
                  children: [
                    (0, r.jsx)(b.Z, {
                      percent: em,
                      animate: !0 !== eV.current && !ep,
                      interactionEnabled: eq && ey,
                      backgroundColor: e5 ? void 0 : "rgba(0, 0, 0, 0.0)",
                      preloadedBuffers: e5 ? e_ : void 0,
                      duration:
                        null !==
                          (H =
                            null === (T = eZ.current) || void 0 === T
                              ? void 0
                              : T.duration) && void 0 !== H
                          ? H
                          : 1,
                      maxSeekableTime: e5 && ey ? e$ : void 0,
                      onClick: (e) => {
                        tr(e), es === D.r.ENDED && e3(D.r.PLAYING);
                      },
                      onScrubBack: () => {
                        tt();
                      },
                      onScrubForward: () => {
                        tn();
                      },
                    }),
                    (0, r.jsx)(s.animated.div, {
                      className: O.videoControlsCont,
                      style: {
                        paddingTop: (0, s.to)(
                          [tc.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(e * e * 12, "px"),
                        ),
                        paddingBottom: (0, s.to)(
                          [tc.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(e * e * 12, "px"),
                        ),
                        pointerEvents: (0, s.to)(
                          [tc.to({ range: [0, 1], output: [0, 1] })],
                          (e) => (e < 0.3 ? "none" : "auto"),
                        ),
                      },
                      children: (0, r.jsx)(N.Z, {
                        videoRef: eZ,
                        quest: z,
                        playerState: es,
                        animSpring: tc,
                        visible: e5,
                        seekForwardEnabled: tg,
                        hideCaptionBtn: null == tC,
                        handlePlaybackBtnClick: to,
                        handleTranscriptBtnClick: () => {
                          !K &&
                            (null == eG ||
                              eG.questId !== z.id ||
                              eG.fetchStatus === E.iF.NONE ||
                              eG.fetchStatus === E.iF.FAILURE) &&
                            (0, x.lL)(z),
                            X(!K),
                            (0, g._3)({
                              questId: z.id,
                              questContent: S.jn.VIDEO_MODAL,
                              questContentCTA: K
                                ? g.jZ.TRANSCRIPT_DISABLE
                                : g.jZ.TRANSCRIPT_ENABLE,
                            });
                        },
                        handleCaptionBtnClick: () => {
                          $(!J),
                            (0, g._3)({
                              questId: z.id,
                              questContent: S.jn.VIDEO_MODAL,
                              questContentCTA: J
                                ? g.jZ.CLOSED_CAPTIONING_DISABLE
                                : g.jZ.CLOSED_CAPTIONING_ENABLE,
                            });
                        },
                        handleFullScreenBtnClick: () => {
                          var e;
                          let t = !ee,
                            n = (0, C.fn)(
                              null === (e = eZ.current) || void 0 === e
                                ? void 0
                                : e.parentNode,
                              eZ.current,
                            );
                          t && null != n
                            ? ((0, C.Dj)(n),
                              n.addEventListener(C.NO, te),
                              (0, g.dA)({
                                questId: z.id,
                                event: L.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                              }))
                            : !t &&
                              null != n &&
                              (n.removeEventListener(C.NO, te),
                              (0, g.dA)({
                                questId: z.id,
                                event: L.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                                properties: { video_session_id: e2 },
                              }),
                              (0, C.Pr)(n)),
                            et(t);
                        },
                        handleSeekBackBtnClick: tt,
                        handleSeekForwardBtnClick: tn,
                        handleControlBarPendingInteraction: eA,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
    },
    281055: function (e, t, n) {
      n.d(t, {
        Yy: function () {
          return c;
        },
        xU: function () {
          return u;
        },
        zw: function () {
          return a;
        },
      }),
        n(47120);
      var r = n(192379),
        o = n(442837),
        i = n(434650),
        l = n(110924),
        s = n(451478);
      let a = 2;
      function c() {
        let [e, t] = r.useState(!1),
          n = e !== (0, l.Z)(e);
        return {
          visible: e,
          visibleChanged: n,
          targetRef: (0, i.O)((e) => t(e), 0.6),
        };
      }
      function u() {
        let e = (0, o.e7)([s.Z], () => s.Z.isFocused()),
          t = e !== (0, l.Z)(e);
        return { focused: e, focusedChanged: t };
      }
    },
    920393: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      }),
        n(47120);
      var r = n(192379);
      function o(e) {
        let {
            videoRef: t,
            isPlaying: n,
            isMetadataLoaded: o,
            isInitialSeekComplete: i,
            onAnalytics: l,
            emitIntervalMs: s,
            minSegmentDurationMs: a,
          } = e,
          [c, u] = r.useState(null),
          d = (0, r.useRef)(null),
          m = (0, r.useRef)(Date.now()),
          f = (0, r.useRef)(!1),
          p = (0, r.useCallback)(
            (e) => {
              if (!(e.segmentEndSec < e.segmentStartSec))
                l({
                  start_time: e.startTime,
                  end_time: e.endTime,
                  duration: e.endTime - e.startTime,
                  segment_start_sec: e.segmentStartSec,
                  segment_end_sec: e.segmentEndSec,
                  segment_duration_sec: e.segmentEndSec - e.segmentStartSec,
                });
            },
            [l],
          ),
          v = (0, r.useCallback)(() => {
            if (null != t.current && o && i) {
              let e = Date.now(),
                n = t.current.currentTime;
              u({
                startTime: e,
                endTime: e,
                segmentStartSec: n,
                segmentEndSec: n,
              }),
                (f.current = !0);
            }
          }, [t, o, i]),
          C = (0, r.useCallback)(() => {
            if (null == t.current || null == c) return;
            let e = Date.now();
            if (e - m.current < s) return;
            let n = t.current.currentTime;
            if (!(n - c.segmentStartSec < a / 1e3))
              p({ ...c, endTime: e, segmentEndSec: n }),
                u({
                  startTime: e,
                  endTime: e,
                  segmentStartSec: n,
                  segmentEndSec: n,
                }),
                (m.current = e);
          }, [c, p, s, t, a]);
        return (
          (0, r.useEffect)(() => {
            (!o || !i) && (u(null), (f.current = !1));
          }, [o, i]),
          (0, r.useEffect)(() => {
            if (n && o && i)
              !f.current && v(),
                (d.current = window.setInterval(() => {
                  C();
                }, 200));
            else {
              if (null != c && null != t.current) {
                let e = Date.now(),
                  n = t.current.currentTime;
                n - c.segmentStartSec > 0.2 &&
                  p({ ...c, endTime: e, segmentEndSec: n });
              }
              u(null),
                (f.current = !1),
                null != d.current &&
                  (clearInterval(d.current), (d.current = null));
            }
            return () => {
              null != d.current &&
                (clearInterval(d.current), (d.current = null));
            };
          }, [n, o, i, c, C, p, t, v]),
          {
            forceSendCurrentSegment: (0, r.useCallback)(() => {
              if (null != c && null != t.current) {
                let e = Date.now(),
                  n = t.current.currentTime;
                n - c.segmentStartSec > 0.2 &&
                  p({ ...c, endTime: e, segmentEndSec: n }),
                  u(null),
                  (f.current = !1);
              }
            }, [c, p, t]),
            isInitialized: f.current,
          }
        );
      }
    },
    889711: function (e, t, n) {
      function r(e) {
        return new ResizeObserver(e);
      }
      function o(e, t) {
        e.observe(t);
      }
      function i(e, t) {
        e.unobserve(t);
      }
      n.d(t, {
        UC: function () {
          return i;
        },
        YP: function () {
          return o;
        },
        pP: function () {
          return r;
        },
      });
    },
    128220: function (e, t, n) {
      e.exports = {
        ctaButtons: "ctaButtons_e60321",
        cta: "cta_e60321",
        shine: "shine_e60321",
        backButton: "backButton_e60321",
        backButtonInner: "backButtonInner_e60321",
        backIcon: "backIcon_e60321",
      };
    },
    808326: function (e, t, n) {
      e.exports = {
        outer: "outer_df6b25",
        progressBar: "progressBar_df6b25",
        progress: "progress_df6b25",
        inner: "inner_df6b25",
        coverContent: "coverContent_df6b25",
        progressTextWrapper: "progressTextWrapper_df6b25",
        progressTextOverlay: "progressTextOverlay_df6b25",
        progressText: "progressText_df6b25",
      };
    },
    417575: function (e, t, n) {
      e.exports = {
        modalRoot: "modalRoot_c73f92",
        modalBody: "modalBody_c73f92",
        modalBg: "modalBg_c73f92",
        modalContent: "modalContent_c73f92",
        videoCont: "videoCont_c73f92",
        videoContInnerRelative: "videoContInnerRelative_c73f92",
        videoContOverlay: "videoContOverlay_c73f92",
        hidden: "hidden_c73f92",
        videoInner: "videoInner_c73f92",
        videoFooterCont: "videoFooterCont_c73f92",
        videoFooterContGradient: "videoFooterContGradient_c73f92",
        videoControlsCont: "videoControlsCont_c73f92",
        videoControlsGroup: "videoControlsGroup_c73f92",
        videoControlsGroupMid: "videoControlsGroupMid_c73f92",
        videoControlsGroupEnd: "videoControlsGroupEnd_c73f92",
        videoControlsBtnCont: "videoControlsBtnCont_c73f92",
        videoControlsBtn: "videoControlsBtn_c73f92",
        videoControlsBtnContDisabled: "videoControlsBtnContDisabled_c73f92",
        volumeControlGroup: "volumeControlGroup_c73f92",
        controlsBarItem: "controlsBarItem_c73f92",
        controlsBarItemActive: "controlsBarItemActive_c73f92",
        durationTimeWrapper: "durationTimeWrapper_c73f92",
        durationTimeSeparator: "durationTimeSeparator_c73f92",
        durationTimeDisplay: "durationTimeDisplay_c73f92",
        volumeSlider: "volumeSlider_c73f92",
        contentHeader: "contentHeader_c73f92",
        contentHeaderGameInfo: "contentHeaderGameInfo_c73f92",
        contentHeaderLogotype: "contentHeaderLogotype_c73f92",
        accentOnHover: "accentOnHover_c73f92",
        questHeading: "questHeading_c73f92",
        contentFooter: "contentFooter_c73f92",
        contentFooterButtonCont: "contentFooterButtonCont_c73f92",
        claimBtn: "claimBtn_c73f92",
        progressCont: "progressCont_c73f92",
        questProgressRewardTile: "questProgressRewardTile_c73f92",
        transcriptOverlay: "transcriptOverlay_c73f92",
        transcriptCont: "transcriptCont_c73f92",
        transcriptScroller: "transcriptScroller_c73f92",
        transcriptBackBtn: "transcriptBackBtn_c73f92",
        transcriptHeader: "transcriptHeader_c73f92",
        transcriptBody: "transcriptBody_c73f92",
        stillFrameImageCard: "stillFrameImageCard_c73f92",
        stillFrameImageCardHidden: "stillFrameImageCardHidden_c73f92",
        endScreenPanel: "endScreenPanel_c73f92",
        endScreenPanelInner: "endScreenPanelInner_c73f92",
        endScreenPanelTextCont: "endScreenPanelTextCont_c73f92",
        endScreenPanelTextTitle: "endScreenPanelTextTitle_c73f92",
        endScreenPanelTextSubtitle: "endScreenPanelTextSubtitle_c73f92",
        endScreenPanelRight: "endScreenPanelRight_c73f92",
        endScreenIcon: "endScreenIcon_c73f92",
        verticalDivider: "verticalDivider_c73f92",
        loadingSpinner: "loadingSpinner_c73f92",
        captionContainer: "captionContainer_c73f92",
        captionText: "captionText_c73f92",
        playPausePopCont: "playPausePopCont_c73f92",
        playPausePopIcon: "playPausePopIcon_c73f92",
        play: "play_c73f92",
        pause: "pause_c73f92",
        transcriptBodySpinner: "transcriptBodySpinner_c73f92",
        pauseText: "pauseText_c73f92",
        copyLinkBtn: "copyLinkBtn_c73f92",
      };
    },
    504446: function (e, t, n) {
      e.exports = {
        cont: "cont_cdc1bf",
        hitboxArea: "hitboxArea_cdc1bf",
        interactionEnabled: "interactionEnabled_cdc1bf",
        progress: "progress_cdc1bf",
        progressGlow: "progressGlow_cdc1bf",
        buffer: "buffer_cdc1bf",
        seekableBar: "seekableBar_cdc1bf",
        bufferHovered: "bufferHovered_cdc1bf",
        timeDisplay: "timeDisplay_cdc1bf",
        grabber: "grabber_cdc1bf",
      };
    },
  },
]);
//# sourceMappingURL=6950ff0f18191467c410.js.map
