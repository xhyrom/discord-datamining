"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["32249"],
  {
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
        i = n.n(o),
        l = n(481060),
        a = n(617136),
        s = n(497505),
        c = n(918701),
        u = n(796111),
        d = n(667105),
        m = n(341907),
        p = n(604162),
        f = n(46140),
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
          children: (0, p.F9)(n),
        });
      }
      let x = (e) => {
          let { quest: t } = e;
          return (0, r.jsx)(l.Button, {
            className: C.cta,
            size: l.Button.Sizes.SMALL,
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
          return (0, r.jsx)(l.Button, {
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
            size: l.Button.Sizes.SMALL,
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
          return (0, r.jsx)(l.ShinyButton, {
            fullWidth: !0,
            size: l.Button.Sizes.SMALL,
            onClick: m,
            pauseAnimation: n || !o,
            className: i()(C.cta, a),
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
              isExpanded: i,
              awaitingConsoleConnections: l,
              hasMadeProgress: a,
              isProgressing: d,
              activeScreen: m,
              taskDetails: p,
            } = e,
            v =
              (null === (t = n.userStatus) || void 0 === t
                ? void 0
                : t.completedAt) != null,
            C = (0, u.P)({ location: f.dr.QUESTS_BAR }),
            h = (0, c.cr)(n);
          if (v)
            return (0, r.jsx)(E, {
              quest: n,
              useReducedMotion: o,
              isExpanded: i,
            });
          if (h) return (0, r.jsx)(g, { quest: n, taskDetails: p });
          if (m === s.LI.CONSOLE && l && !C) return (0, r.jsx)(S, { quest: n });
          else if (m !== s.LI.SELECT && !a && !d)
            return (0, r.jsx)(x, { quest: n });
          return null;
        };
      function _(e) {
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
            (0, r.jsx)(h, { ...e }),
          ],
        });
      }
    },
    472144: function (e, t, n) {
      var r = n(200651),
        o = n(192379),
        i = n(120356),
        l = n.n(i),
        a = n(100621),
        s = n(481060),
        c = n(569379),
        u = n(642145),
        d = n(808326);
      t.Z = o.forwardRef((e, t) => {
        let {
            quest: n,
            percentComplete: o,
            size: i = 42,
            strokeWidth: m = 3,
            glowBlur: p = 0.4,
            percentCompleteText: f,
            percentCompleteTextVariant: v = "text-lg/medium",
            children: C,
          } = e,
          g = (0, c.E)(n, o > 0),
          x = i / 2,
          S = i / 2 - m / 2,
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
          { progressTextAnimation: N } = (0, s.useSpring)({
            progressTextAnimation: null != f && 1 !== o ? 1 : 0,
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
                  style: { opacity: N },
                  className: l()(d.coverContent, d.progressTextWrapper),
                  children: [
                    (0, r.jsx)("div", {
                      className: l()(d.coverContent, d.progressTextOverlay),
                    }),
                    (0, r.jsx)(s.Text, {
                      variant: v,
                      color: "text-primary",
                      className: d.progressText,
                      children: f,
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
                          stdDeviation: p,
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
        i = n(410030),
        l = n(113434);
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
        let r = (0, l.z)(e),
          o = null !== (n = (0, i.i6)()) && void 0 !== n ? n : 0,
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
        i = n(120356),
        l = n.n(i),
        a = n(100621),
        s = n(442837),
        c = n(692547),
        u = n(561779),
        d = n(481060),
        m = n(607070),
        p = n(617136),
        f = n(184299),
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
        N = (e, t) => {
          (0, p.dA)({
            questId: e,
            event: E.rMx.QUEST_VIDEO_VOLUME_CHANGED,
            properties: { volume_threshold: t > 0 && t < 1 ? 0.5 : t },
          });
        };
      function j(e) {
        let { current: t, duration: n } = e,
          o = null != t ? (0, S.yv)(t) : T,
          i = null != n ? (0, S.yv)(n) : T;
        return (
          (o = o.padStart(i.length, "0")),
          (0, r.jsxs)("div", {
            className: l()(_.durationTimeWrapper, _.controlsBarItem),
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
                children: i,
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
            ariaLabel: i,
            active: s,
            disabled: u,
            tooltipLabel: m,
            tooltipDelayMs: p = 1500,
            onClick: f,
          } = e,
          v = (e) =>
            (0, r.jsx)(d.Clickable, {
              ...e,
              onClick: f,
              className: l()(_.videoControlsBtnCont, {
                [_.videoControlsBtnContDisabled]: u,
              }),
              "aria-label": i,
              "aria-disabled": u,
              children: (0, r.jsx)(a.animated.div, {
                className: l()(_.videoControlsBtnCont),
                style: {
                  opacity: (0, a.to)(
                    [n.to({ range: [0, 1], output: [0, 1] })],
                    (e) => "".concat(o ? e : Math.pow(e, 8)),
                  ),
                },
                children: (0, r.jsx)(t, {
                  color: !0 !== u ? c.Z.colors.WHITE : c.Z.colors.TEXT_MUTED,
                  className: l()(_.controlsBarItem, {
                    [_.controlsBarItemActive]: s,
                    [_.videoControlsBtn]: !u,
                  }),
                }),
              }),
            });
        return null != m
          ? (0, r.jsx)(d.Tooltip, { text: m, delay: p, children: (e) => v(e) })
          : v();
      }
      function D(e) {
        var t, n;
        let {
            videoRef: i,
            quest: p,
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
          R = (0, f.km)((e) => e.volume),
          w = (0, f.km)((e) => e.setVolume),
          F = (0, f.km)((e) => e.muted),
          Z = (0, f.km)((e) => e.setMuted),
          U = (0, f.km)((e) => e.transcriptEnabled),
          G = (0, f.km)((e) => e.captionEnabled),
          V = (0, f.km)((e) => e.fullScreenEnabled),
          q = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
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
            J({ volumeAnimSpring: Q || Y ? 1 : 0, immediate: q }),
            () => {
              X.stop();
            }
          ),
          [Q, Y, J, q, X],
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
              className: l()(_.videoControlsGroup, _.videoControlsGroupMid),
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
                        if (null != i.current)
                          0 === H
                            ? ($(R), Z(!1), N(p.id, R))
                            : (w(H), $(0), Z(!0), N(p.id, 0));
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
                            N(p.id, e),
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
                (0, r.jsx)(j, {
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
              className: l()(_.videoControlsGroup, _.videoControlsGroupEnd),
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
                    active: G,
                    onClick: B,
                    ariaLabel: h.intl.string(h.t.bDSZOz),
                    tooltipLabel: h.intl.string(h.t.bDSZOz),
                  }),
                (0, r.jsx)(b, {
                  iconComponent: V
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
        i = n(390507),
        l = n(325767);
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
          p = (0, i.m)(a),
          f =
            null !== (t = null == p ? void 0 : p.width) && void 0 !== t ? t : s,
          v =
            null !== (n = null == p ? void 0 : p.height) && void 0 !== n
              ? n
              : c;
        return (0, r.jsx)("svg", {
          ...(0, l.Z)(m),
          xmlns: "http://www.w3.org/2000/svg",
          width: f,
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
        i = n(390507),
        l = n(325767);
      let a = (e) => {
        var t, n;
        let {
            size: a = "md",
            width: s,
            height: c,
            color: u = o.Z.colors.INTERACTIVE_NORMAL,
            ...d
          } = e,
          m = (0, i.m)(a),
          p =
            null !== (t = null == m ? void 0 : m.width) && void 0 !== t ? t : s,
          f =
            null !== (n = null == m ? void 0 : m.height) && void 0 !== n
              ? n
              : c;
        return (0, r.jsxs)("svg", {
          ...(0, l.Z)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: p,
          height: f,
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
        i = n(390507),
        l = n(325767);
      let a = (e) => {
        var t, n;
        let {
            size: a = "md",
            width: s,
            height: c,
            color: u = o.Z.colors.INTERACTIVE_NORMAL,
            ...d
          } = e,
          m = (0, i.m)(a),
          p =
            null !== (t = null == m ? void 0 : m.width) && void 0 !== t ? t : s,
          f =
            null !== (n = null == m ? void 0 : m.height) && void 0 !== n
              ? n
              : c;
        return (0, r.jsxs)("svg", {
          ...(0, l.Z)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: p,
          height: f,
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
        a = n(442837),
        s = n(780384),
        c = n(481060),
        u = n(607070),
        d = n(210887),
        m = n(617136),
        p = n(113434),
        f = n(569984),
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
        N = n(963123),
        j = n(281055),
        b = n(46140),
        D = n(981631),
        y = n(388032),
        A = n(417575);
      function k(e) {
        var t;
        let { transitionState: n, onClose: i, quest: f, autoplay: k } = e,
          B = (0, C.il)(f),
          L = (0, a.e7)([d.Z], () => d.Z.getState().theme),
          P = (0, s.wj)(L) ? D.BRd.DARK : D.BRd.LIGHT,
          M = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
          [O, R] = o.useState(B.progressSeconds),
          [w, F] = o.useState(!1),
          { completedRatio: Z, completedRatioDisplay: U } = (0, p.I)(f),
          [G, V] = (0, T.G6)(
            y.intl.string(y.t.RDE0SU),
            y.intl.string(y.t["+5kSoa"]),
            1700,
          ),
          q =
            (null === (t = f.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) != null
              ? y.intl.string(y.t.vTgCW1)
              : y.intl.string(y.t.cfY4PD),
          H = o.useCallback(() => {
            (0, C.f2)(f.id, {
              content: v.jn.VIDEO_MODAL,
              ctaContent: m.jZ.COPY_QUEST_URL,
            }),
              V();
          }, [f.id, V]),
          z = () => {
            (0, C.FE)(f, {
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
            () => x.r.build(f.config).defaultReward.messages.name,
            [f],
          ),
          K = y.intl.formatToPlainString(y.t["12IWPz"], { rewardName: Q });
        return (0, r.jsx)(c.ModalRoot, {
          transitionState: n,
          size: c.ModalSize.DYNAMIC,
          className: A.modalRoot,
          children: (0, r.jsx)(h.A, {
            questOrQuests: f,
            questContent: v.jn.VIDEO_MODAL,
            minViewTimeSeconds: j.zw,
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
                                alt: f.config.messages.gameTitle,
                                className: l()(
                                  A.contentHeaderLogotype,
                                  A.accentOnHover,
                                ),
                                src: (0, g.fh)(f, g.eC.LOGO_TYPE, P).url,
                              }),
                              (0, r.jsx)(I.Z, {}),
                              (0, r.jsxs)("div", {
                                className: A.questHeading,
                                children: [
                                  (0, r.jsx)(c.Heading, {
                                    variant: "heading-md/semibold",
                                    color: "header-primary",
                                    children: y.intl.format(y.t.EQa7oq, {
                                      questName: f.config.messages.questName,
                                    }),
                                  }),
                                  (0, r.jsx)(c.Text, {
                                    variant: "text-sm/medium",
                                    color: "header-secondary",
                                    children: f.config.messages.gameTitle,
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
                                  quest: f,
                                  size: 48,
                                  percentComplete: Z,
                                  percentCompleteText: w ? U : void 0,
                                  percentCompleteTextVariant: "text-sm/medium",
                                  children: (0, r.jsx)(_.Z, {
                                    className: A.questProgressRewardTile,
                                    quest: f,
                                    questContent: v.jn.VIDEO_MODAL,
                                    autoplay: !1,
                                    location: b.dr.VIDEO_MODAL,
                                  }),
                                }),
                              }),
                          }),
                        ],
                      }),
                      (0, r.jsx)(N.Z, {
                        quest: f,
                        parentTransitionState: n,
                        onOptimisticProgressUpdate: R,
                        autoplay: k,
                      }),
                      (0, r.jsxs)("div", {
                        className: A.contentFooter,
                        children: [
                          (0, r.jsx)(c.Button, {
                            onClick: i,
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
                                children: G,
                              }),
                              (0, r.jsx)(S.i0, {
                                className: A.claimBtn,
                                size: c.Button.Sizes.MEDIUM,
                                quest: f,
                                useReducedMotion: M,
                                isExpanded:
                                  (null === (t = f.userStatus) || void 0 === t
                                    ? void 0
                                    : t.completedAt) != null,
                                disabled:
                                  (null === (o = f.userStatus) || void 0 === o
                                    ? void 0
                                    : o.completedAt) == null,
                                ctaLabel: q,
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
          i = (0, a.e7)([f.Z], () => f.Z.getQuest(t));
        return null != i
          ? (0, r.jsx)(k, { ...o, quest: i, autoplay: n })
          : null;
      }
    },
    355243: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      }),
        n(47120);
      var r = n(200651),
        o = n(192379),
        i = n(120356),
        l = n.n(i),
        a = n(481060),
        s = n(393903),
        c = n(604162),
        u = n(420212),
        d = n(504446);
      function m(e, t, n) {
        return n * (Math.max(e - t.left, 0) / t.width);
      }
      function p(e, t, n) {
        return n.left + (e / t) * n.width;
      }
      function f(e) {
        let {
            percent: t,
            animate: n,
            interactionEnabled: i,
            backgroundColor: f,
            preloadedBuffers: v,
            duration: C,
            maxSeekableTime: g,
            onClick: x,
            onScrubBack: S,
            onScrubForward: E,
          } = e,
          [h, _] = o.useState(null),
          [T, I] = o.useState(null),
          [N, j] = o.useState(null),
          [b, D] = o.useState(!1),
          y = o.useRef(null),
          A = (e) => {
            (y.current = e), _(e);
          };
        o.useEffect(() => {
          null != h && (null == g ? j(null) : j(p(g, C, h)));
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
          O = null != h ? h.right - p((t / 100) * C, C, h) : null,
          R = null != T && null != h ? h.right - T : null,
          w = null != N && null != h ? h.right - N : null;
        return (0, r.jsxs)("div", {
          className: d.cont,
          ref: k,
          children: [
            (0, r.jsxs)(a.Clickable, {
              className: l()(d.hitboxArea, { [d.interactionEnabled]: i }),
              ignoreKeyPress: !0,
              onClick: (e) => {
                if (!!i && null != x)
                  x(m(e.clientX, e.currentTarget.getBoundingClientRect(), C));
              },
              onMouseEnter: (e) => {
                if (!!i)
                  null != k.current && A(k.current.getBoundingClientRect()),
                    D(!0),
                    B(e);
              },
              onMouseLeave: (e) => {
                if (!!i) D(!1), I(null);
              },
              onMouseMove: (e) => {
                if (!!i) b && B(e);
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
                          className: l()(d.buffer, { [d.bufferHovered]: b }),
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
                (0, r.jsx)(a.Progress, {
                  className: d.progress,
                  percent: t,
                  foregroundColor: "#FFFFFF",
                  backgroundColor: null != f ? f : void 0,
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
                (0, r.jsx)(l.Heading, {
                  variant: "heading-md/semibold",
                  color: "currentColor",
                  children: "Transcript",
                }),
                (0, r.jsx)(l.Clickable, {
                  onClick: c,
                  className: s.transcriptBackBtn,
                  children: (0, r.jsx)(i.D, { color: "currentColor" }),
                }),
              ],
            }),
            (0, r.jsx)(l.FocusRing, {
              children: (0, r.jsx)(l.ScrollerAuto, {
                className: s.transcriptScroller,
                fade: !0,
                children: (0, r.jsx)("div", {
                  className: s.transcriptBody,
                  children:
                    (null == u ? void 0 : u.fetchStatus) === a.iF.FETCHING
                      ? (0, r.jsx)("div", {
                          className: s.transcriptBodySpinner,
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
          return a;
        },
      });
      var r = n(200651);
      n(192379);
      var o = n(120356),
        i = n.n(o),
        l = n(417575);
      function a(e) {
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
          return F;
        },
      }),
        n(47120),
        n(653041);
      var r = n(200651),
        o = n(192379),
        i = n(120356),
        l = n.n(i),
        a = n(100621),
        s = n(442837),
        c = n(780384),
        u = n(481060),
        d = n(607070),
        m = n(70097),
        p = n(210887),
        f = n(866960),
        v = n(228488),
        C = n(617136),
        g = n(272008),
        x = n(497505),
        S = n(918701),
        E = n(184299),
        h = n(720293),
        _ = n(881773),
        T = n(355243),
        I = n(106743),
        N = n(223418),
        j = n(604162),
        b = n(747717),
        D = n(281055),
        y = n(920393),
        A = n(981631),
        k = n(217702),
        B = n(388032),
        L = n(417575);
      let P = new Set([A.IyS.FIVE_G, A.IyS.FOUR_G, A.IyS.UNKNOWN]),
        M = { tension: 250, friction: 5, clamp: !0 };
      function O() {
        let e = (0, s.e7)([p.Z], () => p.Z.getState().theme);
        return (0, r.jsx)("div", {
          className: L.pauseText,
          style: {
            background: (0, c.wj)(e)
              ? "rgba(0, 0, 0, 0.65)"
              : "rgba(255, 255, 255, 0.65)",
          },
          children: (0, r.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            children: B.intl.string(B.t.U7Xrb2),
          }),
        });
      }
      function R(e) {
        let { quest: t, className: n } = e,
          i = o.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
        return null == i
          ? null
          : (0, r.jsx)("img", {
              src: i.url,
              alt: "Video thumbnail",
              className: l()(L.stillFrameImageCard, n),
            });
      }
      function w(e) {
        let { title: t, subtitle: n, icon: i, onClick: a, className: s } = e,
          [c, d] = o.useState(!1),
          m = () => {
            d(!0);
          },
          p = () => {
            d(!1);
          };
        return (0, r.jsx)(u.Clickable, {
          className: l()(L.endScreenPanel, L.accentOnHover, s),
          onMouseEnter: m,
          onMouseLeave: p,
          onFocus: m,
          onBlur: p,
          onClick: a,
          children: (0, r.jsxs)("div", {
            className: L.endScreenPanelInner,
            children: [
              (0, r.jsxs)("div", {
                className: L.endScreenPanelTextCont,
                children: [
                  (0, r.jsx)(u.Heading, {
                    variant: "heading-md/semibold",
                    className: L.endScreenPanelTextTitle,
                    children: t,
                  }),
                  (0, r.jsx)(u.Heading, {
                    variant: "heading-sm/normal",
                    className: L.endScreenPanelTextSubtitle,
                    children: n,
                  }),
                ],
              }),
              (0, r.jsx)(b.Z, { color: "#747783" }),
              (0, r.jsx)(i, {
                size: "md",
                color: c ? "#FFFFFF" : "#B5BAC1",
                className: L.endScreenIcon,
              }),
            ],
          }),
        });
      }
      function F(e) {
        var t, n, i, c, p, b, F, Z, U, G, V;
        let {
            quest: q,
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
          { focused: ee, focusedChanged: et } = (0, D.xU)(),
          { visible: en, visibleChanged: er, targetRef: eo } = (0, D.Yy)(),
          [ei, el] = o.useState(!0 === z ? N.r.PLAYING : N.r.PAUSED),
          [ea, es] = o.useState(!1),
          ec = (0, S.il)(q),
          [eu, ed] = o.useState(ec.percentComplete),
          [em, ep] = o.useState(!1),
          [ef, ev] = o.useState(!0),
          [eC, eg] = o.useState(!1),
          [ex, eS] = o.useState([]),
          [eE, eh] = o.useState(f.Z.getEffectiveConnectionSpeed()),
          [e_, eT] = o.useState(0),
          [eI, eN] = o.useState(0),
          [ej, eb] = o.useState(!1),
          [eD, ey] = o.useState(!1),
          eA = (0, E.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[q.id]) && void 0 !== t
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
            (null === (t = q.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          eF = (0, E.km)((e) => e.transcript),
          [eZ, eU] = o.useState(null),
          [eG, eV] = o.useState(!1),
          [eq, eH] = o.useState(!1),
          [ez, eY] = o.useState(null),
          eW = ew
            ? null !==
                (F =
                  null === (n = eM.current) || void 0 === n
                    ? void 0
                    : n.duration) && void 0 !== F
              ? F
              : 0
            : eA.maxTimestampSec,
          eQ = o.useMemo(
            () =>
              P.has(eE)
                ? h.i.VIDEO_PLAYER_VIDEO
                : h.i.VIDEO_PLAYER_VIDEO_LOW_RES,
            [eE],
          ),
          eK = o.useMemo(() => (null != eQ ? (0, h.z)(eQ, q) : null), [eQ, q]),
          eX = o.useCallback(
            (e) => {
              var t, n;
              (0, C.dA)({
                questId: q.id,
                event: A.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
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
            [q.id, eQ, ew, eu],
          ),
          { forceSendCurrentSegment: eJ } = (0, y.Z)({
            videoRef: eM,
            isPlaying: ei === N.r.PLAYING,
            isMetadataLoaded: eG,
            isInitialSeekComplete: eq,
            onAnalytics: eX,
            emitIntervalMs: 4e3,
            minSegmentDurationMs: 2e3,
          }),
          e$ = o.useCallback(
            (e) => {
              if ((el(e), null != eM.current))
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
            [eM, el, eU, Q, eJ],
          );
        o.useLayoutEffect(() => {
          eR.current &&
            ((eR.current = !1),
            eh(f.Z.getEffectiveConnectionSpeed()),
            ew && eA.timestampSec >= eA.duration && ek(q.id, 0, eA.duration));
        }, []),
          o.useEffect(() => {
            null != eM.current &&
              null != eZ &&
              (0, C.dA)({
                questId: q.id,
                event: A.rMx.QUEST_VIDEO_PAUSED,
                properties: {
                  video_timestamp_seconds: eM.current.currentTime,
                  reason: eZ,
                },
              });
          }, [eZ, q.id]),
          o.useEffect(() => {
            et &&
              null != eM.current &&
              (0, C.dA)({
                questId: q.id,
                event: ee
                  ? A.rMx.QUEST_VIDEO_APP_FOCUSED
                  : A.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                properties: {
                  video_timestamp_seconds: eM.current.currentTime,
                  video_state: ei,
                },
              });
          }, [ee, et, ei, q.id]);
        let e0 = o.useCallback(
          (e) => {
            !ew && (0, g.FI)(q.id, e),
              null != eM.current &&
                (0, C.dA)({
                  questId: q.id,
                  event: A.rMx.QUEST_VIDEO_PROGRESSED,
                  properties: {
                    progress: eu / 100,
                    video_timestamp_seconds: eM.current.currentTime,
                  },
                });
          },
          [q.id, eu, ew, eM],
        );
        o.useEffect(() => {
          (Y === u.ModalTransitionState.HIDDEN ||
            Y === u.ModalTransitionState.EXITING ||
            Y === u.ModalTransitionState.EXITED ||
            (null != Y && er && !en && !ew) ||
            (et && !ee && !ew)) &&
            (null != eM.current &&
              (Y === u.ModalTransitionState.EXITING ||
                Y === u.ModalTransitionState.EXITED) &&
              e0(eM.current.currentTime),
            null != eM.current &&
              ei === N.r.PLAYING &&
              (e$(N.r.PAUSED), !ew && eU(N.y.LOST_FOCUS)));
        }, [Y, ee, et, en, er, ei, ew, e$, e0]);
        let e1 = () => {
            es(!0);
          },
          e2 = () => {
            es(!1);
          },
          e7 = ea || ei === N.r.PAUSED || ei === N.r.ENDED,
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
                questId: q.id,
                event: A.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
              }));
          }, [q.id, $]),
          e3 = () => {
            if (null != eM.current)
              e4(Math.max(eM.current.currentTime - 10, 0)),
                ei === N.r.ENDED && e$(N.r.PAUSED),
                (0, C._3)({
                  questId: q.id,
                  questContent: x.jn.VIDEO_MODAL,
                  questContentCTA: C.jZ.SEEK_BACKWARD,
                });
          },
          e6 = () => {
            if (null == eM.current || !td) return;
            let e = Math.min(eM.current.currentTime + 10, eW);
            e4(e),
              ei !== N.r.ENDED && e >= eM.current.duration && e$(N.r.ENDED),
              (0, C._3)({
                questId: q.id,
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
                ep(!0),
                eH(!1),
                (eM.current.currentTime = e),
                ek(q.id, e, eM.current.duration));
            },
            [eM, ek, q.id, eJ],
          ),
          e8 = () => {
            if (null != eM.current)
              switch (ei) {
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
                (0, j.JC)(n) &&
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
            ei === N.r.PLAYING &&
            (ef && ev(!1), eC && eg(!1), e$(N.r.PLAYING));
        };
        o.useEffect(() => {
          if (!em) return;
          let e = setTimeout(() => {
            ep(!1);
          }, 1e3);
          return () => clearTimeout(e);
        }, [em]);
        let [{ controlBarAnimSpring: tr }, to] = (0, u.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: M,
            onStart: () => {
              ey(!1);
            },
            onRest: (e) => {
              1 === e.value && ey(!0);
            },
          })),
          ti = (0, o.useRef)(null),
          [{ captionHeightSpring: tl }, ta] = (0, u.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: M,
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
                    null === (e = ti.current) || void 0 === e
                      ? void 0
                      : e.clientHeight) &&
                void 0 !== t
                  ? t
                  : 0,
              immediate: eP,
            }),
            () => {
              tl.stop();
            }
          );
        }, [K, ta, eP, ez, tl]),
          o.useEffect(
            () => (
              to({ controlBarAnimSpring: e7 || ej ? 1 : 0, immediate: eP }),
              () => {
                tr.stop();
              }
            ),
            [e7, to, eP, ej, tr],
          );
        let ts = ei === N.r.ENDED,
          tc = o.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_THUMBNAIL, q), [q]),
          tu = o.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_CAPTION, q), [q]),
          td =
            ew ||
            eA.maxTimestampSec >=
              (null !==
                (Z =
                  null === (i = eM.current) || void 0 === i
                    ? void 0
                    : i.currentTime) && void 0 !== Z
                ? Z
                : 0) +
                1;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(u.Clickable, {
            className: L.videoCont,
            "data-fullscreen": J,
            tabIndex: -1,
            onMouseEnter: e1,
            onMouseLeave: e2,
            onFocus: e1,
            onBlur: e2,
            children: (0, r.jsxs)("div", {
              className: L.videoContInnerRelative,
              children: [
                (0, r.jsx)(R, {
                  quest: q,
                  className: l()({ [L.stillFrameImageCardHidden]: !ts }),
                }),
                ts && (0, r.jsx)("div", { className: L.videoContOverlay }),
                (0, r.jsxs)(m.Z, {
                  ref: (e) => {
                    (eM.current = e), (eo.current = e);
                  },
                  autoPlay: z,
                  playsInline: !0,
                  mediaLayoutType: J ? k.hV.STATIC : k.hV.RESPONSIVE,
                  className: l()({ [L.hidden]: ts, [L.videoInner]: !0 }),
                  controls: !1,
                  poster: null == tc ? void 0 : tc.url,
                  disablePictureInPicture: !0,
                  onTimeUpdate: (e) => {
                    null != eM.current &&
                      (eM.current.currentTime >= e_ &&
                        (eT(eM.current.currentTime + 6 + 2 * Math.random()),
                        e0(eM.current.currentTime)),
                      eM.current.currentTime >= eI &&
                        (eN(eM.current.currentTime + 1),
                        (0, g.qm)(q.id, ec.taskType, eM.current.currentTime),
                        H(eM.current.currentTime)),
                      ek(q.id, eM.current.currentTime, eM.current.duration),
                      ed((eM.current.currentTime / eM.current.duration) * 100));
                  },
                  onEnded: (e) => {
                    null != eM.current &&
                      (e0(eM.current.duration + 1),
                      ek(q.id, eM.current.duration, eM.current.duration)),
                      e$(N.r.ENDED),
                      eg(!1);
                  },
                  onLoadedData: (e) => {
                    ef && ev(!1);
                  },
                  onLoadedMetadata: (e) => {
                    null != eM.current &&
                      (eV(!0),
                      e4(eA.timestampSec),
                      eB ? (eM.current.volume = 0) : (eM.current.volume = eL));
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
                (ef || eC) &&
                  (0, r.jsx)(u.Spinner, {
                    type: u.Spinner.Type.WANDERING_CUBES,
                    className: L.loadingSpinner,
                  }),
                ei === N.r.PAUSED && eZ === N.y.LOST_FOCUS && (0, r.jsx)(O, {}),
                W &&
                  ei !== N.r.ENDED &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(u.Clickable, {
                        onClick: () => Q(!1),
                        tabIndex: -1,
                        children: (0, r.jsx)("div", {
                          className: L.transcriptOverlay,
                        }),
                      }),
                      (0, r.jsx)(a.animated.div, {
                        className: L.transcriptCont,
                        style: {
                          marginBottom: (0, a.to)([tr, tl], (e, t) =>
                            "".concat(50 * e + t, "px"),
                          ),
                        },
                        children: (0, r.jsx)(I.K, {
                          quest: q,
                          onClose: () => {
                            Q(!1),
                              (0, C._3)({
                                questId: q.id,
                                questContent: x.jn.VIDEO_MODAL,
                                questContentCTA: C.jZ.TRANSCRIPT_DISABLE,
                              });
                          },
                        }),
                      }),
                    ],
                  }),
                ei === N.r.ENDED &&
                  (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(w, {
                      title:
                        null !==
                          (U =
                            null === (c = q.config.videoMetadata) ||
                            void 0 === c
                              ? void 0
                              : c.messages.videoEndCtaTitle) && void 0 !== U
                          ? U
                          : B.intl.string(B.t.iiTtpK),
                      subtitle:
                        null !==
                          (G =
                            null === (p = q.config.videoMetadata) ||
                            void 0 === p
                              ? void 0
                              : p.messages.videoEndCtaSubtitle) && void 0 !== G
                          ? G
                          : B.intl.string(B.t.mxaHf3),
                      icon: u.ArrowLargeRightIcon,
                      className: L.endScreenPanelRight,
                      onClick: () => {
                        (0, C._3)({
                          questId: q.id,
                          questContent: x.jn.VIDEO_MODAL,
                          questContentCTA: C.jZ.LEARN_MORE,
                        }),
                          (0, S.FE)(q, {
                            content: x.jn.VIDEO_MODAL,
                            ctaContent: C.jZ.LEARN_MORE,
                          });
                      },
                    }),
                  }),
                (0, r.jsx)(a.animated.div, {
                  className: L.videoFooterContGradient,
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
                    className: l()(L.playPausePopCont, {
                      [L.play]: ei === N.r.PLAYING,
                      [L.pause]: ei === N.r.PAUSED,
                    }),
                    children:
                      ei === N.r.PLAYING
                        ? (0, r.jsx)(u.PlayIcon, {
                            className: L.playPausePopIcon,
                          })
                        : (0, r.jsx)(u.PauseIcon, {
                            className: L.playPausePopIcon,
                          }),
                  },
                  ei,
                ),
                K &&
                  null != ez &&
                  (0, r.jsx)(a.animated.div, {
                    className: L.captionContainer,
                    ref: ti,
                    style: {
                      translateY: (0, a.to)(
                        [tr.to({ range: [0, 1], output: [0, -50] })],
                        (e) => "".concat(e, "px"),
                      ),
                    },
                    children: (0, r.jsx)(u.Text, {
                      variant: "text-lg/semibold",
                      color: "always-white",
                      className: L.captionText,
                      children: ez.text,
                    }),
                  }),
                (0, r.jsxs)(a.animated.div, {
                  className: L.videoFooterCont,
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
                    (0, r.jsx)(T.Z, {
                      percent: eu,
                      animate: !0 !== eR.current && !em,
                      interactionEnabled: ew && eD,
                      backgroundColor: e7 ? void 0 : "rgba(0, 0, 0, 0.0)",
                      preloadedBuffers: e7 ? ex : void 0,
                      duration:
                        null !==
                          (V =
                            null === (b = eM.current) || void 0 === b
                              ? void 0
                              : b.duration) && void 0 !== V
                          ? V
                          : 1,
                      maxSeekableTime: e7 && eD ? eW : void 0,
                      onClick: (e) => {
                        e4(e), ei === N.r.ENDED && e$(N.r.PLAYING);
                      },
                      onScrubBack: () => {
                        e3();
                      },
                      onScrubForward: () => {
                        e6();
                      },
                    }),
                    (0, r.jsx)(a.animated.div, {
                      className: L.videoControlsCont,
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
                      children: (0, r.jsx)(_.Z, {
                        videoRef: eM,
                        quest: q,
                        playerState: ei,
                        animSpring: tr,
                        visible: e7,
                        seekForwardEnabled: td,
                        hideCaptionBtn: null == tu,
                        handlePlaybackBtnClick: e8,
                        handleTranscriptBtnClick: () => {
                          !W &&
                            (null == eF ||
                              eF.questId !== q.id ||
                              eF.fetchStatus === E.iF.NONE ||
                              eF.fetchStatus === E.iF.FAILURE) &&
                            (0, g.lL)(q),
                            Q(!W),
                            (0, C._3)({
                              questId: q.id,
                              questContent: x.jn.VIDEO_MODAL,
                              questContentCTA: W
                                ? C.jZ.TRANSCRIPT_DISABLE
                                : C.jZ.TRANSCRIPT_ENABLE,
                            });
                        },
                        handleCaptionBtnClick: () => {
                          X(!K),
                            (0, C._3)({
                              questId: q.id,
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
                                questId: q.id,
                                event: A.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                              }))
                            : !t &&
                              null != n &&
                              (n.removeEventListener(v.NO, e9),
                              (0, C.dA)({
                                questId: q.id,
                                event: A.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
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
        i = n(434650),
        l = n(110924),
        a = n(451478);
      let s = 2;
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
        let e = (0, o.e7)([a.Z], () => a.Z.isFocused()),
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
            emitIntervalMs: a,
            minSegmentDurationMs: s,
          } = e,
          [c, u] = r.useState(null),
          d = (0, r.useRef)(null),
          m = (0, r.useRef)(Date.now()),
          p = (0, r.useRef)(!1),
          f = (0, r.useCallback)(
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
                (p.current = !0);
            }
          }, [t, o, i]),
          C = (0, r.useCallback)(() => {
            if (null == t.current || null == c) return;
            let e = Date.now();
            if (e - m.current < a) return;
            let n = t.current.currentTime;
            if (!(n - c.segmentStartSec < s / 1e3))
              f({ ...c, endTime: e, segmentEndSec: n }),
                u({
                  startTime: e,
                  endTime: e,
                  segmentStartSec: n,
                  segmentEndSec: n,
                }),
                (m.current = e);
          }, [c, f, a, t, s]);
        return (
          (0, r.useEffect)(() => {
            (!o || !i) && (u(null), (p.current = !1));
          }, [o, i]),
          (0, r.useEffect)(() => {
            if (n && o && i)
              !p.current && v(),
                (d.current = window.setInterval(() => {
                  C();
                }, 200));
            else {
              if (null != c && null != t.current) {
                let e = Date.now(),
                  n = t.current.currentTime;
                n - c.segmentStartSec > 0.2 &&
                  f({ ...c, endTime: e, segmentEndSec: n });
              }
              u(null),
                (p.current = !1),
                null != d.current &&
                  (clearInterval(d.current), (d.current = null));
            }
            return () => {
              null != d.current &&
                (clearInterval(d.current), (d.current = null));
            };
          }, [n, o, i, c, C, f, t, v]),
          {
            forceSendCurrentSegment: (0, r.useCallback)(() => {
              if (null != c && null != t.current) {
                let e = Date.now(),
                  n = t.current.currentTime;
                n - c.segmentStartSec > 0.2 &&
                  f({ ...c, endTime: e, segmentEndSec: n }),
                  u(null),
                  (p.current = !1);
              }
            }, [c, f, t]),
            isInitialized: p.current,
          }
        );
      }
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
//# sourceMappingURL=373a7a4c58a7e73f2f02.js.map
