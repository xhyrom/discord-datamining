"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["32249"],
  {
    393903: function (e, t, n) {
      n.d(t, {
        y: function () {
          return i;
        },
      });
      var r = n(192379),
        o = n(237617),
        l = n(889711);
      function i(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n = (0, r.useRef)(null),
          i = (0, r.useRef)(null),
          a = (0, o.Z)(() => e(n.current));
        return (
          (0, r.useLayoutEffect)(() => {
            if (!t) return;
            null == i.current && (i.current = (0, l.pP)(a.current));
            let e = n.current,
              r = i.current;
            if (null != e && null != r) (0, l.YP)(r, e);
          }, [t, e]),
          (0, r.useEffect)(() => {
            if (!t) return;
            let e = n.current,
              r = i.current;
            if (null != e && null != r)
              return () => {
                (0, l.UC)(r, e);
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
          return E;
        },
        yD: function () {
          return _;
        },
      });
      var r = n(200651);
      n(192379);
      var o = n(120356),
        l = n.n(o),
        i = n(481060),
        a = n(617136),
        s = n(497505),
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
        return (0, r.jsx)(i.Button, {
          className: C.cta,
          color: i.Button.Colors.BRAND,
          fullWidth: !0,
          onClick: () => {
            (0, m.openVideoQuestModal)(t);
          },
          size: i.Button.Sizes.SMALL,
          children: (0, f.F9)(n),
        });
      }
      let x = (e) => {
          let { quest: t } = e;
          return (0, r.jsx)(i.Button, {
            className: C.cta,
            size: i.Button.Sizes.SMALL,
            onClick: () =>
              (0, c.FE)(t, {
                content: s.jn.QUEST_BAR_V2,
                ctaContent: a.jZ.OPEN_GAME_LINK,
              }),
            children: v.intl.string(v.t.lwQdjI),
          });
        },
        S = (e) => {
          let { quest: t } = e;
          return (0, r.jsx)(i.Button, {
            fullWidth: !0,
            className: C.cta,
            onClick: () =>
              (0, c.gI)(
                { quest: t },
                {
                  content: s.jn.QUEST_BAR_V2,
                  ctaContent: a.jZ.CONNECT_CONSOLE,
                },
              ),
            size: i.Button.Sizes.SMALL,
            children: v.intl.string(v.t.csptqa),
          });
        },
        E = (e) => {
          let {
              quest: t,
              useReducedMotion: n,
              isExpanded: o,
              className: a,
              ctaLabel: c,
              ...u
            } = e,
            m = (0, d.hf)({ quest: t, location: s.jn.QUEST_BAR_V2 });
          return (0, r.jsx)(i.ShinyButton, {
            fullWidth: !0,
            size: i.Button.Sizes.SMALL,
            onClick: m,
            pauseAnimation: n || !o,
            className: l()(C.cta, a),
            buttonShineClassName: C.shine,
            ...u,
            children: null != c ? c : v.intl.string(v.t.cfY4PD),
          });
        },
        h = (e) => {
          var t;
          let {
              quest: n,
              useReducedMotion: o,
              isExpanded: l,
              awaitingConsoleConnections: i,
              hasMadeProgress: a,
              isProgressing: d,
              activeScreen: m,
              taskDetails: f,
            } = e,
            v =
              (null === (t = n.userStatus) || void 0 === t
                ? void 0
                : t.completedAt) != null,
            C = (0, u.P)({ location: p.dr.QUESTS_BAR }),
            h = (0, c.cr)(n);
          if (v)
            return (0, r.jsx)(E, {
              quest: n,
              useReducedMotion: o,
              isExpanded: l,
            });
          if (h) return (0, r.jsx)(g, { quest: n, taskDetails: f });
          if (m === s.LI.CONSOLE && i && !C) return (0, r.jsx)(S, { quest: n });
          else if (m !== s.LI.SELECT && !a && !d)
            return (0, r.jsx)(x, { quest: n });
          return null;
        };
      function _(e) {
        return (0, r.jsxs)("div", {
          className: C.ctaButtons,
          children: [
            e.showBackButton &&
              (0, r.jsx)(i.Button, {
                className: C.backButton,
                innerClassName: C.backButtonInner,
                look: "blank",
                grow: !1,
                fullWidth: !1,
                size: "none",
                onClick: e.onBack,
                children: (0, r.jsx)(i.ChevronSmallLeftIcon, {
                  className: C.backIcon,
                }),
              }),
            (0, r.jsx)(h, { ...e }),
          ],
        });
      }
    },
    472144: function (e, t, n) {
      var r = n(200651),
        o = n(192379),
        l = n(120356),
        i = n.n(l),
        a = n(100621),
        s = n(481060),
        c = n(569379),
        u = n(642145),
        d = n(808326);
      t.Z = o.forwardRef((e, t) => {
        let {
            quest: n,
            percentComplete: o,
            size: l = 42,
            strokeWidth: m = 3,
            glowBlur: f = 0.4,
            percentCompleteText: p,
            percentCompleteTextVariant: v = "text-lg/medium",
            children: C,
          } = e,
          g = (0, c.E)(n, o > 0),
          x = l / 2,
          S = l / 2 - m / 2,
          E = 2 * Math.PI * S,
          h = E - o * E,
          _ = {
            strokeDasharray: "".concat(E, " ").concat(E),
            strokeDashoffset: h,
          },
          T = {
            strokeDasharray: "".concat(E, " ").concat(E),
            strokeDashoffset: -o * E,
          },
          I = { boxShadow: "0 0 30px 0px ".concat(g.glow) },
          { progressTextAnimation: j } = (0, s.useSpring)({
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
                (0, r.jsxs)(a.animated.div, {
                  style: { opacity: j },
                  className: i()(d.coverContent, d.progressTextWrapper),
                  children: [
                    (0, r.jsx)("div", {
                      className: i()(d.coverContent, d.progressTextOverlay),
                    }),
                    (0, r.jsx)(s.Text, {
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
              height: l,
              width: l,
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
                  style: _,
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
          return s;
        },
        G: function () {
          return a;
        },
      }),
        n(47120);
      var r = n(192379),
        o = n(481060),
        l = n(410030),
        i = n(113434);
      function a() {
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
      function s(e, t) {
        var n;
        let r = (0, i.z)(e),
          o = null !== (n = (0, l.i6)()) && void 0 !== n ? n : 0,
          a = "var(--green-330)",
          s = ["var(--background-tertiary)", "var(--interactive-normal)"],
          c = t ? s[o] : ["#828288", "#CBCDD4"][o];
        return {
          backgroundTop: c,
          backgroundBottom: t ? s[o] : ["#535356", "#8B8C95"][o],
          foreground: a,
          glow: t && r ? a : "#C4C1D66E",
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
        l = n(120356),
        i = n.n(l),
        a = n(100621),
        s = n(442837),
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
        E = n(981631),
        h = n(388032),
        _ = n(417575);
      let T = "-:--",
        I = {
          [x.r.PLAYING]: {
            icon: d.PauseIcon,
            label: h.intl.string(h.t.ZcgDJS),
          },
          [x.r.PAUSED]: { icon: d.PlayIcon, label: h.intl.string(h.t.RscU7O) },
          [x.r.ENDED]: { icon: d.RetryIcon, label: h.intl.string(h.t.hsvh0t) },
        },
        j = (e, t) => {
          (0, f.dA)({
            questId: e,
            event: E.rMx.QUEST_VIDEO_VOLUME_CHANGED,
            properties: { volume_threshold: t > 0 && t < 1 ? 0.5 : t },
          });
        };
      function N(e) {
        let { current: t, duration: n } = e,
          o = null != t ? (0, S.yv)(t) : T,
          l = null != n ? (0, S.yv)(n) : T;
        return (
          (o = o.padStart(l.length, "0")),
          (0, r.jsxs)("div", {
            className: i()(_.durationTimeWrapper, _.controlsBarItem),
            children: [
              (0, r.jsx)(d.Text, {
                variant: "text-xs/normal",
                className: _.durationTimeDisplay,
                children: o,
              }),
              (0, r.jsx)(d.Text, {
                variant: "text-xs/normal",
                className: _.durationTimeSeparator,
                children: "/",
              }),
              (0, r.jsx)(d.Text, {
                variant: "text-xs/normal",
                className: _.durationTimeDisplay,
                children: l,
              }),
            ],
          })
        );
      }
      function b(e) {
        let {
            iconComponent: t,
            animationTime: n,
            visible: o,
            ariaLabel: l,
            active: s,
            disabled: u,
            tooltipLabel: m,
            tooltipDelayMs: f = 1500,
            onClick: p,
          } = e,
          v = (e) =>
            (0, r.jsx)(d.Clickable, {
              ...e,
              onClick: p,
              className: i()(_.videoControlsBtnCont, {
                [_.videoControlsBtnContDisabled]: u,
              }),
              "aria-label": l,
              "aria-disabled": u,
              children: (0, r.jsx)(a.animated.div, {
                className: i()(_.videoControlsBtnCont),
                style: {
                  opacity: (0, a.to)(
                    [n.to({ range: [0, 1], output: [0, 1] })],
                    (e) => "".concat(o ? e : Math.pow(e, 8)),
                  ),
                },
                children: (0, r.jsx)(t, {
                  color: !0 !== u ? c.Z.colors.WHITE : c.Z.colors.TEXT_MUTED,
                  className: i()(_.controlsBarItem, {
                    [_.controlsBarItemActive]: s,
                    [_.videoControlsBtn]: !u,
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
            videoRef: l,
            quest: f,
            playerState: S,
            animSpring: E,
            visible: T,
            seekForwardEnabled: D,
            hideCaptionBtn: y,
            handlePlaybackBtnClick: A,
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
          G = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
          [H, z] = o.useState(F ? 0 : R),
          [Y, W] = o.useState(!1),
          [Q, K] = o.useState(!1),
          [{ volumeAnimSpring: X }, J] = (0, d.useSpring)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
          })),
          $ = (e) => {
            if (null != l.current)
              e !== l.current.volume && (l.current.volume = e), e !== H && z(e);
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
              className: _.videoControlsGroup,
              children: [
                (0, r.jsx)(b, {
                  iconComponent: er,
                  animationTime: E,
                  visible: T,
                  ariaLabel: eo,
                  tooltipLabel: eo,
                  onClick: A,
                }),
                (0, r.jsx)(b, {
                  iconComponent: C.d,
                  animationTime: E,
                  visible: T,
                  onClick: P,
                  ariaLabel: h.intl.string(h.t.r9s3Ul),
                  tooltipLabel: h.intl.string(h.t.r9s3Ul),
                }),
                (0, r.jsx)(b, {
                  iconComponent: g.o,
                  animationTime: E,
                  visible: T,
                  onClick: M,
                  disabled: !D,
                  ariaLabel: D
                    ? h.intl.string(h.t.zWDcND)
                    : h.intl.string(h.t.xXh3y8),
                  tooltipLabel: D
                    ? h.intl.string(h.t.zWDcND)
                    : h.intl.string(h.t.xXh3y8),
                  tooltipDelayMs: D ? 1500 : 0,
                }),
              ],
            }),
            (0, r.jsxs)(a.animated.div, {
              className: i()(_.videoControlsGroup, _.videoControlsGroupMid),
              style: {
                opacity: (0, a.to)(
                  [E.to({ range: [0, 1], output: [0, 1] })],
                  (e) => "".concat(T ? e : Math.pow(e, 8)),
                ),
              },
              children: [
                (0, r.jsxs)("div", {
                  onMouseEnter: ee,
                  onMouseLeave: et,
                  onFocus: ee,
                  onBlur: et,
                  className: _.volumeControlGroup,
                  children: [
                    (0, r.jsx)(b, {
                      iconComponent: en,
                      animationTime: E,
                      visible: T,
                      onClick: () => {
                        if (null != l.current)
                          0 === H
                            ? ($(R), Z(!1), j(f.id, R))
                            : (w(H), $(0), Z(!0), j(f.id, 0));
                      },
                      ariaLabel: h.intl.string(h.t["eIl+AA"]),
                      tooltipLabel: h.intl.string(h.t["eIl+AA"]),
                    }),
                    (0, r.jsx)(a.animated.div, {
                      className: _.volumeSlider,
                      style: {
                        opacity: (0, a.to)(
                          [X.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(T ? e : Math.pow(e, 8)),
                        ),
                        width: (0, a.to)(
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
                            j(f.id, e),
                            Q && (K(!1), O(!1)),
                            F && e > 0 && Z(!1);
                        },
                        asValueChanges: (e) => {
                          $(e), !Q && (K(!0), O(!0));
                        },
                        fillStyles: { backgroundColor: c.Z.colors.WHITE.css },
                        orientation: "horizontal",
                        "aria-label": h.intl.string(h.t["eIl+AA"]),
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)(N, {
                  current:
                    null == l
                      ? void 0
                      : null === (t = l.current) || void 0 === t
                        ? void 0
                        : t.currentTime,
                  duration:
                    null == l
                      ? void 0
                      : null === (n = l.current) || void 0 === n
                        ? void 0
                        : n.duration,
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: i()(_.videoControlsGroup, _.videoControlsGroupEnd),
              children: [
                (0, r.jsx)(b, {
                  iconComponent: d.PaperIcon,
                  animationTime: E,
                  visible: T,
                  onClick: k,
                  active: U && S !== x.r.ENDED,
                  disabled: S === x.r.ENDED,
                  ariaLabel: h.intl.string(h.t.KCzjTk),
                  tooltipLabel: h.intl.string(h.t.KCzjTk),
                }),
                !y &&
                  (0, r.jsx)(b, {
                    iconComponent: v.c,
                    animationTime: E,
                    visible: T,
                    active: V,
                    onClick: B,
                    ariaLabel: h.intl.string(h.t.bDSZOz),
                    tooltipLabel: h.intl.string(h.t.bDSZOz),
                  }),
                (0, r.jsx)(b, {
                  iconComponent: q
                    ? d.FullscreenExitIcon
                    : d.FullscreenEnterIcon,
                  animationTime: E,
                  visible: T,
                  onClick: L,
                  ariaLabel: h.intl.string(h.t.vKZT5u),
                  tooltipLabel: h.intl.string(h.t.vKZT5u),
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
          return a;
        },
      });
      var r = n(200651);
      n(192379);
      var o = n(692547),
        l = n(390507),
        i = n(325767);
      let a = (e) => {
        var t, n;
        let {
            size: a = "md",
            width: s,
            height: c,
            color: u = o.Z.colors.INTERACTIVE_NORMAL,
            colorClass: d = "",
            ...m
          } = e,
          f = (0, l.m)(a),
          p =
            null !== (t = null == f ? void 0 : f.width) && void 0 !== t ? t : s,
          v =
            null !== (n = null == f ? void 0 : f.height) && void 0 !== n
              ? n
              : c;
        return (0, r.jsx)("svg", {
          ...(0, i.Z)(m),
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
          return a;
        },
      });
      var r = n(200651);
      n(192379);
      var o = n(692547),
        l = n(390507),
        i = n(325767);
      let a = (e) => {
        var t, n;
        let {
            size: a = "md",
            width: s,
            height: c,
            color: u = o.Z.colors.INTERACTIVE_NORMAL,
            ...d
          } = e,
          m = (0, l.m)(a),
          f =
            null !== (t = null == m ? void 0 : m.width) && void 0 !== t ? t : s,
          p =
            null !== (n = null == m ? void 0 : m.height) && void 0 !== n
              ? n
              : c;
        return (0, r.jsxs)("svg", {
          ...(0, i.Z)(d),
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
          return a;
        },
      });
      var r = n(200651);
      n(192379);
      var o = n(692547),
        l = n(390507),
        i = n(325767);
      let a = (e) => {
        var t, n;
        let {
            size: a = "md",
            width: s,
            height: c,
            color: u = o.Z.colors.INTERACTIVE_NORMAL,
            ...d
          } = e,
          m = (0, l.m)(a),
          f =
            null !== (t = null == m ? void 0 : m.width) && void 0 !== t ? t : s,
          p =
            null !== (n = null == m ? void 0 : m.height) && void 0 !== n
              ? n
              : c;
        return (0, r.jsxs)("svg", {
          ...(0, i.Z)(d),
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
        l = n(120356),
        i = n.n(l),
        a = n(442837),
        s = n(780384),
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
        E = n(472144),
        h = n(602667),
        _ = n(644646),
        T = n(604162),
        I = n(747717),
        j = n(963123),
        N = n(281055),
        b = n(46140),
        D = n(981631),
        y = n(388032),
        A = n(417575);
      function k(e) {
        var t;
        let { transitionState: n, onClose: l, quest: p, autoplay: k } = e,
          B = (0, C.il)(p),
          L = (0, a.e7)([d.Z], () => d.Z.getState().theme),
          P = (0, s.wj)(L) ? D.BRd.DARK : D.BRd.LIGHT,
          M = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
          [O, R] = o.useState(B.progressSeconds),
          [w, F] = o.useState(!1),
          { completedRatio: Z, completedRatioDisplay: U } = (0, f.I)(p),
          [V, q] = (0, T.G6)(
            y.intl.string(y.t.RDE0SU),
            y.intl.string(y.t["+5kSoa"]),
            1700,
          ),
          G =
            (null === (t = p.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) != null
              ? y.intl.string(y.t.vTgCW1)
              : y.intl.string(y.t.cfY4PD),
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
          K = y.intl.formatToPlainString(y.t["12IWPz"], { rewardName: Q });
        return (0, r.jsx)(c.ModalRoot, {
          transitionState: n,
          size: c.ModalSize.DYNAMIC,
          className: A.modalRoot,
          children: (0, r.jsx)(h.A, {
            questOrQuests: p,
            questContent: v.jn.VIDEO_MODAL,
            minViewTimeSeconds: N.zw,
            trackGuildAndChannelMetadata: !0,
            children: (e) => {
              var t, o;
              return (0, r.jsx)("div", {
                ref: (t) => {
                  e.current = t;
                },
                className: A.modalBg,
                children: (0, r.jsx)("div", {
                  className: A.modalBody,
                  children: (0, r.jsxs)("div", {
                    className: A.modalContent,
                    children: [
                      (0, r.jsxs)("div", {
                        className: A.contentHeader,
                        children: [
                          (0, r.jsxs)(c.Clickable, {
                            className: A.contentHeaderGameInfo,
                            onClick: z,
                            children: [
                              (0, r.jsx)("img", {
                                alt: p.config.messages.gameTitle,
                                className: i()(
                                  A.contentHeaderLogotype,
                                  A.accentOnHover,
                                ),
                                src: (0, g.fh)(p, g.eC.LOGO_TYPE, P).url,
                              }),
                              (0, r.jsx)(I.Z, {}),
                              (0, r.jsxs)("div", {
                                className: A.questHeading,
                                children: [
                                  (0, r.jsx)(c.Heading, {
                                    variant: "heading-md/semibold",
                                    color: "header-primary",
                                    children: y.intl.format(y.t.EQa7oq, {
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
                                className: A.progressCont,
                                ...e,
                                children: (0, r.jsx)(E.Z, {
                                  quest: p,
                                  size: 48,
                                  percentComplete: Z,
                                  percentCompleteText: w ? U : void 0,
                                  percentCompleteTextVariant: "text-sm/medium",
                                  children: (0, r.jsx)(_.Z, {
                                    className: A.questProgressRewardTile,
                                    quest: p,
                                    questContent: v.jn.VIDEO_MODAL,
                                    autoplay: !1,
                                    location: b.dr.VIDEO_MODAL,
                                  }),
                                }),
                              }),
                          }),
                        ],
                      }),
                      (0, r.jsx)(j.Z, {
                        quest: p,
                        parentTransitionState: n,
                        onOptimisticProgressUpdate: R,
                        autoplay: k,
                      }),
                      (0, r.jsxs)("div", {
                        className: A.contentFooter,
                        children: [
                          (0, r.jsx)(c.Button, {
                            onClick: l,
                            color: c.Button.Colors.PRIMARY,
                            size: c.Button.Sizes.MEDIUM,
                            children: y.intl.string(y.t.cpT0Cg),
                          }),
                          (0, r.jsxs)("div", {
                            className: A.contentFooterButtonCont,
                            children: [
                              (0, r.jsx)(c.Button, {
                                color: c.Button.Colors.PRIMARY,
                                onClick: H,
                                size: c.Button.Sizes.MEDIUM,
                                className: A.copyLinkBtn,
                                children: V,
                              }),
                              (0, r.jsx)(S.i0, {
                                className: A.claimBtn,
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
          l = (0, a.e7)([p.Z], () => p.Z.getQuest(t));
        return null != l
          ? (0, r.jsx)(k, { ...o, quest: l, autoplay: n })
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
        l = n(120356),
        i = n.n(l),
        a = n(481060),
        s = n(393903),
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
            interactionEnabled: l,
            backgroundColor: p,
            preloadedBuffers: v,
            duration: C,
            maxSeekableTime: g,
            onClick: x,
            onScrubBack: S,
            onScrubForward: E,
          } = e,
          [h, _] = o.useState(null),
          [T, I] = o.useState(null),
          [j, N] = o.useState(null),
          [b, D] = o.useState(!1),
          y = o.useRef(null),
          A = (e) => {
            (y.current = e), _(e);
          };
        o.useEffect(() => {
          null != h && (null == g ? N(null) : N(f(g, C, h)));
        }, [h, g, C]);
        let k = (0, s.y)(() => {
          if (null != k.current) A(k.current.getBoundingClientRect());
        });
        o.useLayoutEffect(() => {
          null != k.current && A(k.current.getBoundingClientRect());
        }, [k]),
          o.useEffect(() => {
            let e = () => {
              null != k.current && A(k.current.getBoundingClientRect());
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
                  null != E &&
                  (e.preventDefault(), e.stopPropagation(), E());
            },
            [S, E],
          ),
          P = null != T && null != h ? m(T, h, C) : 0,
          M = (0, c.yv)(P),
          O = null != h ? h.right - f((t / 100) * C, C, h) : null,
          R = null != T && null != h ? h.right - T : null,
          w = null != j && null != h ? h.right - j : null;
        return (0, r.jsxs)("div", {
          className: d.cont,
          ref: k,
          children: [
            (0, r.jsxs)(a.Clickable, {
              className: i()(d.hitboxArea, { [d.interactionEnabled]: l }),
              ignoreKeyPress: !0,
              onClick: (e) => {
                if (!!l && null != x)
                  x(m(e.clientX, e.currentTarget.getBoundingClientRect(), C));
              },
              onMouseEnter: (e) => {
                if (!!l)
                  null != k.current && A(k.current.getBoundingClientRect()),
                    D(!0),
                    B(e);
              },
              onMouseLeave: (e) => {
                if (!!l) D(!1), I(null);
              },
              onMouseMove: (e) => {
                if (!!l) b && B(e);
              },
              onKeyDown: L,
              tabIndex: l ? void 0 : -1,
              focusProps: { offset: { top: 12, bottom: 12 } },
              children: [
                null == v
                  ? void 0
                  : v.map((e) =>
                      (0, r.jsx)(
                        "div",
                        {
                          className: i()(d.buffer, { [d.bufferHovered]: b }),
                          style: {
                            width: "".concat(100 * e.size, "%"),
                            left: "".concat(100 * e.start, "%"),
                          },
                        },
                        "".concat(e.start, ":").concat(e.size),
                      ),
                    ),
                !l &&
                  null != w &&
                  w > 0 &&
                  (0, r.jsx)("div", {
                    className: d.seekableBar,
                    style: {
                      right: null != w ? "".concat(w, "px") : "auto",
                      opacity: null != w ? 1 : 0,
                    },
                  }),
                (0, r.jsx)(a.Progress, {
                  className: d.progress,
                  percent: t,
                  foregroundColor: "#FFFFFF",
                  backgroundColor: null != p ? p : void 0,
                  size: b ? a.Progress.Sizes.XSMALL : a.Progress.Sizes.XXSMALL,
                  animate: n,
                }),
                b &&
                  null != M &&
                  (0, r.jsx)(a.Text, {
                    className: d.timeDisplay,
                    variant: "text-xs/normal",
                    style: {
                      right: null != R ? "".concat(R - 10, "px") : "auto",
                      color: "#FFFFFF",
                    },
                    children: M,
                  }),
                b &&
                  l &&
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
        l = n(261833),
        i = n(481060),
        a = n(184299),
        s = n(417575);
      function c(e) {
        var t;
        let { quest: n, onClose: c } = e,
          u = (0, a.km)((e) => e.transcript),
          d =
            (null == u ? void 0 : u.questId) === n.id &&
            (null == u ? void 0 : u.fetchStatus) === a.iF.SUCCESS &&
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
              className: s.transcriptHeader,
              children: [
                (0, r.jsx)(i.Heading, {
                  variant: "heading-md/semibold",
                  color: "currentColor",
                  children: "Transcript",
                }),
                (0, r.jsx)(i.Clickable, {
                  onClick: c,
                  className: s.transcriptBackBtn,
                  children: (0, r.jsx)(l.D, { color: "currentColor" }),
                }),
              ],
            }),
            (0, r.jsx)(i.FocusRing, {
              children: (0, r.jsx)(i.ScrollerAuto, {
                className: s.transcriptScroller,
                fade: !0,
                children: (0, r.jsx)("div", {
                  className: s.transcriptBody,
                  children:
                    (null == u ? void 0 : u.fetchStatus) === a.iF.FETCHING
                      ? (0, r.jsx)("div", {
                          className: s.transcriptBodySpinner,
                          children: (0, r.jsx)(i.Spinner, {
                            type: i.Spinner.Type.WANDERING_CUBES,
                          }),
                        })
                      : (0, r.jsx)(i.Heading, {
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
      var r, o, l, i;
      n.d(t, {
        r: function () {
          return r;
        },
        y: function () {
          return o;
        },
      }),
        ((l = r || (r = {})).PLAYING = "playing"),
        (l.PAUSED = "paused"),
        (l.ENDED = "ended"),
        ((i = o || (o = {})).PAUSE_BUTTON = "PAUSE_BUTTON"),
        (i.LOST_FOCUS = "LOST_FOCUS"),
        (i.MODAL_CLOSED = "MODAL_CLOSED");
    },
    747717: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(200651);
      n(192379);
      var o = n(120356),
        l = n.n(o),
        i = n(417575);
      function a(e) {
        let { className: t, color: n } = e;
        return (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "2",
          height: "40",
          viewBox: "0 0 2 40",
          fill: "none",
          className: l()(i.verticalDivider, t),
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
          return Z;
        },
      }),
        n(47120),
        n(653041);
      var r = n(200651),
        o = n(192379),
        l = n(120356),
        i = n.n(l),
        a = n(100621),
        s = n(442837),
        c = n(780384),
        u = n(481060),
        d = n(607070),
        m = n(70097),
        f = n(210887),
        p = n(866960),
        v = n(228488),
        C = n(617136),
        g = n(272008),
        x = n(497505),
        S = n(918701),
        E = n(184299),
        h = n(720293),
        _ = n(602667),
        T = n(881773),
        I = n(355243),
        j = n(106743),
        N = n(223418),
        b = n(604162),
        D = n(747717),
        y = n(281055),
        A = n(920393),
        k = n(981631),
        B = n(217702),
        L = n(388032),
        P = n(417575);
      let M = new Set([k.IyS.FIVE_G, k.IyS.FOUR_G, k.IyS.UNKNOWN]),
        O = { tension: 250, friction: 5, clamp: !0 };
      function R() {
        let e = (0, s.e7)([f.Z], () => f.Z.getState().theme);
        return (0, r.jsx)("div", {
          className: P.pauseText,
          style: {
            background: (0, c.wj)(e)
              ? "rgba(0, 0, 0, 0.65)"
              : "rgba(255, 255, 255, 0.65)",
          },
          children: (0, r.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            children: L.intl.string(L.t.U7Xrb2),
          }),
        });
      }
      function w(e) {
        let { quest: t, shouldShow: n } = e,
          l = o.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
        return null == l
          ? null
          : (0, r.jsx)(_.A, {
              questOrQuests: t,
              questContent: x.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                (0, r.jsx)("img", {
                  ref: (t) => {
                    e.current = t;
                  },
                  src: l.url,
                  alt: "Video thumbnail",
                  className: i()(P.stillFrameImageCard, {
                    [P.stillFrameImageCardHidden]: !n,
                  }),
                }),
            });
      }
      function F(e) {
        let { title: t, subtitle: n, icon: l, onClick: a, className: s } = e,
          [c, d] = o.useState(!1),
          m = () => {
            d(!0);
          },
          f = () => {
            d(!1);
          };
        return (0, r.jsx)(u.Clickable, {
          className: i()(P.endScreenPanel, P.accentOnHover, s),
          onMouseEnter: m,
          onMouseLeave: f,
          onFocus: m,
          onBlur: f,
          onClick: a,
          children: (0, r.jsxs)("div", {
            className: P.endScreenPanelInner,
            children: [
              (0, r.jsxs)("div", {
                className: P.endScreenPanelTextCont,
                children: [
                  (0, r.jsx)(u.Heading, {
                    variant: "heading-md/semibold",
                    className: P.endScreenPanelTextTitle,
                    children: t,
                  }),
                  (0, r.jsx)(u.Heading, {
                    variant: "heading-sm/normal",
                    className: P.endScreenPanelTextSubtitle,
                    children: n,
                  }),
                ],
              }),
              (0, r.jsx)(D.Z, { color: "#747783" }),
              (0, r.jsx)(l, {
                size: "md",
                color: c ? "#FFFFFF" : "#B5BAC1",
                className: P.endScreenIcon,
              }),
            ],
          }),
        });
      }
      function Z(e) {
        var t, n, l, c, f, _, D, Z, U, V, q;
        let {
            quest: G,
            onOptimisticProgressUpdate: H,
            autoplay: z,
            parentTransitionState: Y,
          } = e,
          W = (0, E.km)((e) => e.transcriptEnabled),
          Q = (0, E.km)((e) => e.setTranscriptEnabled),
          K = (0, E.km)((e) => e.captionEnabled),
          X = (0, E.km)((e) => e.setCaptionEnabled),
          J = (0, E.km)((e) => e.fullScreenEnabled),
          $ = (0, E.km)((e) => e.setFullScreenEnabled),
          { focused: ee, focusedChanged: et } = (0, y.xU)(),
          { visible: en, visibleChanged: er, targetRef: eo } = (0, y.Yy)(),
          [el, ei] = o.useState(!0 === z ? N.r.PLAYING : N.r.PAUSED),
          [ea, es] = o.useState(!1),
          ec = (0, S.il)(G),
          [eu, ed] = o.useState(ec.percentComplete),
          [em, ef] = o.useState(!1),
          [ep, ev] = o.useState(!0),
          [eC, eg] = o.useState(!1),
          [ex, eS] = o.useState([]),
          [eE, eh] = o.useState(p.Z.getEffectiveConnectionSpeed()),
          [e_, eT] = o.useState(0),
          [eI, ej] = o.useState(0),
          [eN, eb] = o.useState(!1),
          [eD, ey] = o.useState(!1),
          eA = (0, E.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[G.id]) && void 0 !== t
              ? t
              : { timestampSec: 0, duration: 10 };
          }),
          ek = (0, E.km)((e) => e.setVideoProgress),
          eB = (0, E.km)((e) => e.muted),
          eL = (0, E.km)((e) => e.volume),
          eP = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
          eM = (0, o.useRef)(null),
          eO = (0, o.useRef)(null),
          eR = o.useRef(!0),
          ew =
            (null === (t = G.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          eF = (0, E.km)((e) => e.transcript),
          [eZ, eU] = o.useState(null),
          [eV, eq] = o.useState(!1),
          [eG, eH] = o.useState(!1),
          [ez, eY] = o.useState(null),
          eW = ew
            ? null !==
                (D =
                  null === (n = eM.current) || void 0 === n
                    ? void 0
                    : n.duration) && void 0 !== D
              ? D
              : 0
            : Math.max(eA.maxTimestampSec, ec.progressSeconds),
          eQ = o.useMemo(
            () =>
              M.has(eE)
                ? h.i.VIDEO_PLAYER_VIDEO
                : h.i.VIDEO_PLAYER_VIDEO_LOW_RES,
            [eE],
          ),
          eK = o.useMemo(() => (null != eQ ? (0, h.z)(eQ, G) : null), [eQ, G]),
          eX = o.useCallback(
            (e) => {
              var t, n;
              (0, C.dA)({
                questId: G.id,
                event: k.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                properties: {
                  ...e,
                  video_asset_id: eQ,
                  quest_completed: ew,
                  video_duration_sec:
                    null !==
                      (n =
                        null === (t = eM.current) || void 0 === t
                          ? void 0
                          : t.duration) && void 0 !== n
                      ? n
                      : -1,
                  video_progress: eu / 100,
                },
              });
            },
            [G.id, eQ, ew, eu],
          ),
          { forceSendCurrentSegment: eJ } = (0, A.Z)({
            videoRef: eM,
            isPlaying: el === N.r.PLAYING,
            isMetadataLoaded: eV,
            isInitialSeekComplete: eG,
            onAnalytics: eX,
            emitIntervalMs: 4e3,
            minSegmentDurationMs: 2e3,
          }),
          e$ = o.useCallback(
            (e) => {
              if ((ei(e), null != eM.current))
                switch (e) {
                  case N.r.PLAYING:
                    eM.current.play(), eU(null);
                    break;
                  case N.r.PAUSED:
                    eM.current.pause(), eJ();
                    break;
                  case N.r.ENDED:
                    Q(!1), eJ();
                }
            },
            [eM, ei, eU, Q, eJ],
          );
        o.useLayoutEffect(() => {
          eR.current &&
            ((eR.current = !1),
            eh(p.Z.getEffectiveConnectionSpeed()),
            ew && eA.timestampSec >= eA.duration && ek(G.id, 0, eA.duration));
        }, []),
          o.useEffect(() => {
            null != eM.current &&
              null != eZ &&
              (0, C.dA)({
                questId: G.id,
                event: k.rMx.QUEST_VIDEO_PAUSED,
                properties: {
                  video_timestamp_seconds: eM.current.currentTime,
                  reason: eZ,
                },
              });
          }, [eZ, G.id]),
          o.useEffect(() => {
            et &&
              null != eM.current &&
              (0, C.dA)({
                questId: G.id,
                event: ee
                  ? k.rMx.QUEST_VIDEO_APP_FOCUSED
                  : k.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                properties: {
                  video_timestamp_seconds: eM.current.currentTime,
                  video_state: el,
                },
              });
          }, [ee, et, el, G.id]);
        let e0 = o.useCallback(
          (e) => {
            var t;
            !ew &&
              (null === (t = G.userStatus) || void 0 === t
                ? void 0
                : t.enrolledAt) != null &&
              (0, g.FI)(G.id, e),
              null != eM.current &&
                (0, C.dA)({
                  questId: G.id,
                  event: k.rMx.QUEST_VIDEO_PROGRESSED,
                  properties: {
                    progress: eu / 100,
                    video_timestamp_seconds: eM.current.currentTime,
                  },
                });
          },
          [G, eu, ew, eM],
        );
        o.useEffect(() => {
          (Y === u.ModalTransitionState.HIDDEN ||
            Y === u.ModalTransitionState.EXITING ||
            Y === u.ModalTransitionState.EXITED ||
            (null != Y && er && !en && !ew) ||
            (et && !ee && !ew)) &&
            null != eM.current &&
            el === N.r.PLAYING &&
            (e$(N.r.PAUSED), !ew && eU(N.y.LOST_FOCUS));
        }, [Y, ee, et, en, er, el, ew, e$, e0]);
        let e1 = () => {
            es(!0);
          },
          e2 = () => {
            es(!1);
          },
          e7 = ea || el === N.r.PAUSED || el === N.r.ENDED,
          e9 = o.useCallback(() => {
            var e;
            let t = (0, v.fn)(
              null === (e = eM.current) || void 0 === e ? void 0 : e.parentNode,
              eM.current,
            );
            null != t &&
              !(0, v.rB)(t) &&
              (t.removeEventListener(v.NO, e9),
              $(!1),
              (0, C.dA)({
                questId: G.id,
                event: k.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
              }));
          }, [G.id, $]),
          e3 = () => {
            if (null != eM.current)
              e4(Math.max(eM.current.currentTime - 10, 0)),
                el === N.r.ENDED && e$(N.r.PAUSED),
                (0, C._3)({
                  questId: G.id,
                  questContent: x.jn.VIDEO_MODAL,
                  questContentCTA: C.jZ.SEEK_BACKWARD,
                });
          },
          e6 = () => {
            if (null == eM.current || !td) return;
            let e = Math.min(eM.current.currentTime + 10, eW);
            e4(e),
              el !== N.r.ENDED && e >= eM.current.duration && e$(N.r.ENDED),
              (0, C._3)({
                questId: G.id,
                questContent: x.jn.VIDEO_MODAL,
                questContentCTA: C.jZ.SEEK_FORWARD,
              });
          };
        o.useEffect(() => {
          let e = eM.current;
          return () => {
            let t = (0, v.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(v.NO, e9);
          };
        }, [e9]);
        let e4 = o.useCallback(
            (e) => {
              null != eM.current &&
                (eJ(),
                ef(!0),
                eH(!1),
                (eM.current.currentTime = e),
                ek(G.id, e, eM.current.duration));
            },
            [eM, ek, G.id, eJ],
          ),
          e8 = () => {
            if (null != eM.current)
              switch (el) {
                case N.r.ENDED:
                  e4(0), e$(N.r.PLAYING);
                  break;
                case N.r.PLAYING:
                  e$(N.r.PAUSED), eU(N.y.PAUSE_BUTTON);
                  break;
                default:
                  e$(N.r.PLAYING);
              }
          },
          e5 = (e) => {
            eY(e);
          },
          te = (e) => {
            eY((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
          },
          tt = o.useCallback(() => {
            if (null == eM.current || 0 === eM.current.textTracks.length)
              return;
            let e = eM.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
              for (let t = 0; t < e.cues.length; t++) {
                let n = e.cues[t];
                (0, b.JC)(n) &&
                  ((n.id = "cue-".concat(t)),
                  (n.onenter = () => e5(n)),
                  (n.onexit = () => te(n)));
              }
          }, [eM]);
        o.useEffect(() => {
          if (null == eO.current) return;
          let e = eO.current;
          return (
            e.addEventListener("load", tt),
            () => {
              null != e && e.removeEventListener("load", tt);
            }
          );
        }, [eO, tt]);
        let tn = (e) => {
          null != eM.current &&
            el === N.r.PLAYING &&
            (ep && ev(!1), eC && eg(!1), e$(N.r.PLAYING));
        };
        o.useEffect(() => {
          if (!em) return;
          let e = setTimeout(() => {
            ef(!1);
          }, 1e3);
          return () => clearTimeout(e);
        }, [em]);
        let [{ controlBarAnimSpring: tr }, to] = (0, u.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: O,
            onStart: () => {
              ey(!1);
            },
            onRest: (e) => {
              1 === e.value && ey(!0);
            },
          })),
          tl = (0, o.useRef)(null),
          [{ captionHeightSpring: ti }, ta] = (0, u.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: O,
          }));
        o.useEffect(() => {
          var e, t;
          return (
            ta({
              captionHeightSpring:
                K &&
                null != ez &&
                null !==
                  (t =
                    null === (e = tl.current) || void 0 === e
                      ? void 0
                      : e.clientHeight) &&
                void 0 !== t
                  ? t
                  : 0,
              immediate: eP,
            }),
            () => {
              ti.stop();
            }
          );
        }, [K, ta, eP, ez, ti]),
          o.useEffect(
            () => (
              to({ controlBarAnimSpring: e7 || eN ? 1 : 0, immediate: eP }),
              () => {
                tr.stop();
              }
            ),
            [e7, to, eP, eN, tr],
          );
        let ts = el === N.r.ENDED,
          tc = o.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_THUMBNAIL, G), [G]),
          tu = o.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_CAPTION, G), [G]),
          td =
            ew ||
            eA.maxTimestampSec >=
              (null !==
                (Z =
                  null === (l = eM.current) || void 0 === l
                    ? void 0
                    : l.currentTime) && void 0 !== Z
                ? Z
                : 0) +
                1;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(u.Clickable, {
            className: P.videoCont,
            "data-fullscreen": J,
            tabIndex: -1,
            onMouseEnter: e1,
            onMouseLeave: e2,
            onFocus: e1,
            onBlur: e2,
            children: (0, r.jsxs)("div", {
              className: P.videoContInnerRelative,
              children: [
                (0, r.jsx)(w, { quest: G, shouldShow: ts }),
                ts && (0, r.jsx)("div", { className: P.videoContOverlay }),
                (0, r.jsxs)(m.Z, {
                  ref: (e) => {
                    (eM.current = e), (eo.current = e);
                  },
                  autoPlay: z,
                  playsInline: !0,
                  mediaLayoutType: J ? B.hV.STATIC : B.hV.RESPONSIVE,
                  className: i()({ [P.hidden]: ts, [P.videoInner]: !0 }),
                  controls: !1,
                  poster: null == tc ? void 0 : tc.url,
                  disablePictureInPicture: !0,
                  onTimeUpdate: (e) => {
                    null != eM.current &&
                      (eM.current.currentTime >= e_ &&
                        (eT(eM.current.currentTime + 6 + 2 * Math.random()),
                        e0(eM.current.currentTime)),
                      eM.current.currentTime >= eI &&
                        (ej(eM.current.currentTime + 1),
                        (0, g.qm)(G.id, ec.taskType, eM.current.currentTime),
                        H(eM.current.currentTime)),
                      ek(G.id, eM.current.currentTime, eM.current.duration),
                      ed((eM.current.currentTime / eM.current.duration) * 100));
                  },
                  onEnded: (e) => {
                    null != eM.current &&
                      (e0(eM.current.duration + 1),
                      ek(G.id, eM.current.duration, eM.current.duration)),
                      e$(N.r.ENDED),
                      eg(!1);
                  },
                  onLoadedData: (e) => {
                    ep && ev(!1);
                  },
                  onLoadedMetadata: (e) => {
                    if (null != eM.current)
                      eq(!0),
                        e4(
                          ew
                            ? eA.timestampSec
                            : Math.max(eA.timestampSec, ec.progressSeconds),
                        ),
                        eB ? (eM.current.volume = 0) : (eM.current.volume = eL);
                  },
                  onWaiting: (e) => {
                    eg(!0);
                  },
                  onProgress: (e) => {
                    if (null == eM.current) return;
                    let t = [];
                    for (let e = 0; e < eM.current.buffered.length; e++) {
                      let n = eM.current.buffered.start(e),
                        r = eM.current.buffered.end(e);
                      if (!(r - n < 1))
                        t.push({
                          start: n / eM.current.duration,
                          size: (r - n) / eM.current.duration,
                        });
                    }
                    eS(t);
                  },
                  onCanPlay: tn,
                  onCanPlayThrough: tn,
                  onSeeked: () => {
                    eH(!0);
                  },
                  onClick: () => {
                    e8();
                  },
                  crossOrigin: "anonymous",
                  children: [
                    null != tu &&
                      (0, r.jsx)("track", {
                        ref: eO,
                        src: tu.url,
                        label: "English",
                        kind: "captions",
                        srcLang: "en",
                        default: !0,
                      }),
                    null != eK &&
                      (0, r.jsx)("source", { src: eK.url, type: eK.mimetype }),
                  ],
                }),
                (ep || eC) &&
                  (0, r.jsx)(u.Spinner, {
                    type: u.Spinner.Type.WANDERING_CUBES,
                    className: P.loadingSpinner,
                  }),
                el === N.r.PAUSED && eZ === N.y.LOST_FOCUS && (0, r.jsx)(R, {}),
                W &&
                  el !== N.r.ENDED &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(u.Clickable, {
                        onClick: () => Q(!1),
                        tabIndex: -1,
                        children: (0, r.jsx)("div", {
                          className: P.transcriptOverlay,
                        }),
                      }),
                      (0, r.jsx)(a.animated.div, {
                        className: P.transcriptCont,
                        style: {
                          marginBottom: (0, a.to)([tr, ti], (e, t) =>
                            "".concat(50 * e + t, "px"),
                          ),
                        },
                        children: (0, r.jsx)(j.K, {
                          quest: G,
                          onClose: () => {
                            Q(!1),
                              (0, C._3)({
                                questId: G.id,
                                questContent: x.jn.VIDEO_MODAL,
                                questContentCTA: C.jZ.TRANSCRIPT_DISABLE,
                              });
                          },
                        }),
                      }),
                    ],
                  }),
                el === N.r.ENDED &&
                  (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(F, {
                      title:
                        null !==
                          (U =
                            null === (c = G.config.videoMetadata) ||
                            void 0 === c
                              ? void 0
                              : c.messages.videoEndCtaTitle) && void 0 !== U
                          ? U
                          : L.intl.string(L.t.iiTtpK),
                      subtitle:
                        null !==
                          (V =
                            null === (f = G.config.videoMetadata) ||
                            void 0 === f
                              ? void 0
                              : f.messages.videoEndCtaSubtitle) && void 0 !== V
                          ? V
                          : L.intl.string(L.t.mxaHf3),
                      icon: u.ArrowLargeRightIcon,
                      className: P.endScreenPanelRight,
                      onClick: () => {
                        (0, C._3)({
                          questId: G.id,
                          questContent: x.jn.VIDEO_MODAL,
                          questContentCTA: C.jZ.LEARN_MORE,
                        }),
                          (0, S.FE)(G, {
                            content: x.jn.VIDEO_MODAL,
                            ctaContent: C.jZ.LEARN_MORE,
                          });
                      },
                    }),
                  }),
                (0, r.jsx)(a.animated.div, {
                  className: P.videoFooterContGradient,
                  style: {
                    opacity: (0, a.to)(
                      [tr.to({ range: [0, 1], output: [0, 1] })],
                      (e) => "".concat(e),
                    ),
                  },
                }),
                (0, r.jsx)(
                  "div",
                  {
                    className: i()(P.playPausePopCont, {
                      [P.play]: el === N.r.PLAYING,
                      [P.pause]: el === N.r.PAUSED,
                    }),
                    children:
                      el === N.r.PLAYING
                        ? (0, r.jsx)(u.PlayIcon, {
                            className: P.playPausePopIcon,
                          })
                        : (0, r.jsx)(u.PauseIcon, {
                            className: P.playPausePopIcon,
                          }),
                  },
                  el,
                ),
                K &&
                  null != ez &&
                  (0, r.jsx)(a.animated.div, {
                    className: P.captionContainer,
                    ref: tl,
                    style: {
                      translateY: (0, a.to)(
                        [tr.to({ range: [0, 1], output: [0, -50] })],
                        (e) => "".concat(e, "px"),
                      ),
                    },
                    children: (0, r.jsx)(u.Text, {
                      variant: "text-lg/semibold",
                      color: "always-white",
                      className: P.captionText,
                      children: ez.text,
                    }),
                  }),
                (0, r.jsxs)(a.animated.div, {
                  className: P.videoFooterCont,
                  style: {
                    paddingLeft: (0, a.to)(
                      [tr.to({ range: [0, 1], output: [0, 25] })],
                      (e) => "".concat(e, "px"),
                    ),
                    paddingRight: (0, a.to)(
                      [tr.to({ range: [0, 1], output: [0, 25] })],
                      (e) => "".concat(e, "px"),
                    ),
                    height: (0, a.to)(
                      [tr.to({ range: [0, 1], output: [0, 50] })],
                      (e) => "".concat(e, "px"),
                    ),
                  },
                  children: [
                    (0, r.jsx)(I.Z, {
                      percent: eu,
                      animate: !0 !== eR.current && !em,
                      interactionEnabled: ew && eD,
                      backgroundColor: e7 ? void 0 : "rgba(0, 0, 0, 0.0)",
                      preloadedBuffers: e7 ? ex : void 0,
                      duration:
                        null !==
                          (q =
                            null === (_ = eM.current) || void 0 === _
                              ? void 0
                              : _.duration) && void 0 !== q
                          ? q
                          : 1,
                      maxSeekableTime: e7 && eD ? eW : void 0,
                      onClick: (e) => {
                        e4(e), el === N.r.ENDED && e$(N.r.PLAYING);
                      },
                      onScrubBack: () => {
                        e3();
                      },
                      onScrubForward: () => {
                        e6();
                      },
                    }),
                    (0, r.jsx)(a.animated.div, {
                      className: P.videoControlsCont,
                      style: {
                        paddingTop: (0, a.to)(
                          [tr.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(e * e * 12, "px"),
                        ),
                        paddingBottom: (0, a.to)(
                          [tr.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(e * e * 12, "px"),
                        ),
                        pointerEvents: (0, a.to)(
                          [tr.to({ range: [0, 1], output: [0, 1] })],
                          (e) => (e < 0.3 ? "none" : "auto"),
                        ),
                      },
                      children: (0, r.jsx)(T.Z, {
                        videoRef: eM,
                        quest: G,
                        playerState: el,
                        animSpring: tr,
                        visible: e7,
                        seekForwardEnabled: td,
                        hideCaptionBtn: null == tu,
                        handlePlaybackBtnClick: e8,
                        handleTranscriptBtnClick: () => {
                          !W &&
                            (null == eF ||
                              eF.questId !== G.id ||
                              eF.fetchStatus === E.iF.NONE ||
                              eF.fetchStatus === E.iF.FAILURE) &&
                            (0, g.lL)(G),
                            Q(!W),
                            (0, C._3)({
                              questId: G.id,
                              questContent: x.jn.VIDEO_MODAL,
                              questContentCTA: W
                                ? C.jZ.TRANSCRIPT_DISABLE
                                : C.jZ.TRANSCRIPT_ENABLE,
                            });
                        },
                        handleCaptionBtnClick: () => {
                          X(!K),
                            (0, C._3)({
                              questId: G.id,
                              questContent: x.jn.VIDEO_MODAL,
                              questContentCTA: K
                                ? C.jZ.CLOSED_CAPTIONING_DISABLE
                                : C.jZ.CLOSED_CAPTIONING_ENABLE,
                            });
                        },
                        handleFullScreenBtnClick: () => {
                          var e;
                          let t = !J,
                            n = (0, v.fn)(
                              null === (e = eM.current) || void 0 === e
                                ? void 0
                                : e.parentNode,
                              eM.current,
                            );
                          t && null != n
                            ? ((0, v.Dj)(n),
                              n.addEventListener(v.NO, e9),
                              (0, C.dA)({
                                questId: G.id,
                                event: k.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                              }))
                            : !t &&
                              null != n &&
                              (n.removeEventListener(v.NO, e9),
                              (0, C.dA)({
                                questId: G.id,
                                event: k.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                              }),
                              (0, v.Pr)(n)),
                            $(t);
                        },
                        handleSeekBackBtnClick: e3,
                        handleSeekForwardBtnClick: e6,
                        handleControlBarPendingInteraction: eb,
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
          return s;
        },
      }),
        n(47120);
      var r = n(192379),
        o = n(442837),
        l = n(434650),
        i = n(110924),
        a = n(451478);
      let s = 2;
      function c() {
        let [e, t] = r.useState(!1),
          n = e !== (0, i.Z)(e);
        return {
          visible: e,
          visibleChanged: n,
          targetRef: (0, l.O)((e) => t(e), 0.6),
        };
      }
      function u() {
        let e = (0, o.e7)([a.Z], () => a.Z.isFocused()),
          t = e !== (0, i.Z)(e);
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
            isInitialSeekComplete: l,
            onAnalytics: i,
            emitIntervalMs: a,
            minSegmentDurationMs: s,
          } = e,
          [c, u] = r.useState(null),
          d = (0, r.useRef)(null),
          m = (0, r.useRef)(Date.now()),
          f = (0, r.useRef)(!1),
          p = (0, r.useCallback)(
            (e) => {
              if (!(e.segmentEndSec < e.segmentStartSec))
                i({
                  start_time: e.startTime,
                  end_time: e.endTime,
                  duration: e.endTime - e.startTime,
                  segment_start_sec: e.segmentStartSec,
                  segment_end_sec: e.segmentEndSec,
                  segment_duration_sec: e.segmentEndSec - e.segmentStartSec,
                });
            },
            [i],
          ),
          v = (0, r.useCallback)(() => {
            if (null != t.current && o && l) {
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
          }, [t, o, l]),
          C = (0, r.useCallback)(() => {
            if (null == t.current || null == c) return;
            let e = Date.now();
            if (e - m.current < a) return;
            let n = t.current.currentTime;
            if (!(n - c.segmentStartSec < s / 1e3))
              p({ ...c, endTime: e, segmentEndSec: n }),
                u({
                  startTime: e,
                  endTime: e,
                  segmentStartSec: n,
                  segmentEndSec: n,
                }),
                (m.current = e);
          }, [c, p, a, t, s]);
        return (
          (0, r.useEffect)(() => {
            (!o || !l) && (u(null), (f.current = !1));
          }, [o, l]),
          (0, r.useEffect)(() => {
            if (n && o && l)
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
          }, [n, o, l, c, C, p, t, v]),
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
      function l(e, t) {
        e.unobserve(t);
      }
      n.d(t, {
        UC: function () {
          return l;
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
//# sourceMappingURL=0a8ec58e6ca855bbc91a.js.map
