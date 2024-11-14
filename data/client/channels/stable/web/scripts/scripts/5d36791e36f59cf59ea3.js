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
        h = (e) => {
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
        S = (e) => {
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
            S = (0, c.cr)(n);
          if (v)
            return (0, r.jsx)(E, {
              quest: n,
              useReducedMotion: o,
              isExpanded: i,
            });
          if (S) return (0, r.jsx)(g, { quest: n, taskDetails: p });
          if (m === s.LI.CONSOLE && l && !C) return (0, r.jsx)(h, { quest: n });
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
            (0, r.jsx)(S, { ...e }),
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
          h = i / 2 - m / 2,
          E = 2 * Math.PI * h,
          S = E - o * E,
          _ = {
            strokeDasharray: "".concat(E, " ").concat(E),
            strokeDashoffset: S,
          },
          T = {
            strokeDasharray: "".concat(E, " ").concat(E),
            strokeDashoffset: -o * E,
          },
          N = { boxShadow: "0 0 30px 0px ".concat(g.glow) },
          { progressTextAnimation: j } = (0, s.useSpring)({
            progressTextAnimation: null != f && 1 !== o ? 1 : 0,
            config: u.Y,
          });
        return (0, r.jsxs)("div", {
          className: d.outer,
          ref: t,
          children: [
            (0, r.jsxs)("div", {
              className: d.inner,
              style: N,
              children: [
                C,
                (0, r.jsxs)(a.animated.div, {
                  style: { opacity: j },
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
                  r: h,
                  cx: x,
                  cy: x,
                  stroke: "url(#linear)",
                  style: T,
                }),
                (0, r.jsx)("circle", {
                  className: d.progress,
                  strokeWidth: m,
                  fill: "transparent",
                  r: h,
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
        h = n(604162),
        E = n(981631),
        S = n(388032),
        _ = n(417575);
      let T = "-:--",
        N = {
          [x.r.PLAYING]: {
            icon: d.PauseIcon,
            label: S.intl.string(S.t.ZcgDJS),
          },
          [x.r.PAUSED]: { icon: d.PlayIcon, label: S.intl.string(S.t.RscU7O) },
          [x.r.ENDED]: { icon: d.RetryIcon, label: S.intl.string(S.t.hsvh0t) },
        },
        j = (e, t) => {
          (0, p.dA)({
            questId: e,
            event: E.rMx.QUEST_VIDEO_VOLUME_CHANGED,
            properties: { volume_threshold: t > 0 && t < 1 ? 0.5 : t },
          });
        };
      function I(e) {
        let { current: t, duration: n } = e,
          o = null != t ? (0, h.yv)(t) : T,
          i = null != n ? (0, h.yv)(n) : T;
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
            playerState: h,
            animSpring: E,
            visible: T,
            seekForwardEnabled: D,
            hideCaptionBtn: y,
            handlePlaybackBtnClick: B,
            handleTranscriptBtnClick: A,
            handleCaptionBtnClick: k,
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
          { icon: er, label: eo } = N[h];
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
                  onClick: B,
                }),
                (0, r.jsx)(b, {
                  iconComponent: C.d,
                  animationTime: E,
                  visible: T,
                  onClick: P,
                  ariaLabel: S.intl.string(S.t.r9s3Ul),
                  tooltipLabel: S.intl.string(S.t.r9s3Ul),
                }),
                (0, r.jsx)(b, {
                  iconComponent: g.o,
                  animationTime: E,
                  visible: T,
                  onClick: M,
                  disabled: !D,
                  ariaLabel: D
                    ? S.intl.string(S.t.zWDcND)
                    : S.intl.string(S.t.xXh3y8),
                  tooltipLabel: D
                    ? S.intl.string(S.t.zWDcND)
                    : S.intl.string(S.t.xXh3y8),
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
                            ? ($(R), Z(!1), j(p.id, R))
                            : (w(H), $(0), Z(!0), j(p.id, 0));
                      },
                      ariaLabel: S.intl.string(S.t["eIl+AA"]),
                      tooltipLabel: S.intl.string(S.t["eIl+AA"]),
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
                            j(p.id, e),
                            Q && (K(!1), O(!1)),
                            F && e > 0 && Z(!1);
                        },
                        asValueChanges: (e) => {
                          $(e), !Q && (K(!0), O(!0));
                        },
                        fillStyles: { backgroundColor: c.Z.colors.WHITE.css },
                        orientation: "horizontal",
                        "aria-label": S.intl.string(S.t["eIl+AA"]),
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)(I, {
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
                  onClick: A,
                  active: U && h !== x.r.ENDED,
                  disabled: h === x.r.ENDED,
                  ariaLabel: S.intl.string(S.t.KCzjTk),
                  tooltipLabel: S.intl.string(S.t.KCzjTk),
                }),
                !y &&
                  (0, r.jsx)(b, {
                    iconComponent: v.c,
                    animationTime: E,
                    visible: T,
                    active: G,
                    onClick: k,
                    ariaLabel: S.intl.string(S.t.bDSZOz),
                    tooltipLabel: S.intl.string(S.t.bDSZOz),
                  }),
                (0, r.jsx)(b, {
                  iconComponent: V
                    ? d.FullscreenExitIcon
                    : d.FullscreenEnterIcon,
                  animationTime: E,
                  visible: T,
                  onClick: L,
                  ariaLabel: S.intl.string(S.t.vKZT5u),
                  tooltipLabel: S.intl.string(S.t.vKZT5u),
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
            return k;
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
        h = n(164495),
        E = n(472144),
        S = n(602667),
        _ = n(644646),
        T = n(604162),
        N = n(747717),
        j = n(963123),
        I = n(281055),
        b = n(46140),
        D = n(981631),
        y = n(388032),
        B = n(417575);
      function A(e) {
        var t;
        let { transitionState: n, onClose: i, quest: f, autoplay: A } = e,
          k = (0, C.il)(f),
          L = (0, a.e7)([d.Z], () => d.Z.getState().theme),
          P = (0, s.wj)(L) ? D.BRd.DARK : D.BRd.LIGHT,
          M = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
          [O, R] = o.useState(k.progressSeconds),
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
          className: B.modalRoot,
          children: (0, r.jsx)(S.A, {
            questOrQuests: f,
            questContent: v.jn.VIDEO_MODAL,
            minViewTimeSeconds: I.zw,
            trackGuildAndChannelMetadata: !0,
            children: (e) => {
              var t, o;
              return (0, r.jsx)("div", {
                ref: (t) => {
                  e.current = t;
                },
                className: B.modalBg,
                children: (0, r.jsx)("div", {
                  className: B.modalBody,
                  children: (0, r.jsxs)("div", {
                    className: B.modalContent,
                    children: [
                      (0, r.jsxs)("div", {
                        className: B.contentHeader,
                        children: [
                          (0, r.jsxs)(c.Clickable, {
                            className: B.contentHeaderGameInfo,
                            onClick: z,
                            children: [
                              (0, r.jsx)("img", {
                                alt: f.config.messages.gameTitle,
                                className: l()(
                                  B.contentHeaderLogotype,
                                  B.accentOnHover,
                                ),
                                src: (0, g.fh)(f, g.eC.LOGO_TYPE, P).url,
                              }),
                              (0, r.jsx)(N.Z, {}),
                              (0, r.jsxs)("div", {
                                className: B.questHeading,
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
                                className: B.progressCont,
                                ...e,
                                children: (0, r.jsx)(E.Z, {
                                  quest: f,
                                  size: 48,
                                  percentComplete: Z,
                                  percentCompleteText: w ? U : void 0,
                                  percentCompleteTextVariant: "text-sm/medium",
                                  children: (0, r.jsx)(_.Z, {
                                    className: B.questProgressRewardTile,
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
                      (0, r.jsx)(j.Z, {
                        quest: f,
                        parentTransitionState: n,
                        onOptimisticProgressUpdate: R,
                        autoplay: A,
                      }),
                      (0, r.jsxs)("div", {
                        className: B.contentFooter,
                        children: [
                          (0, r.jsx)(c.Button, {
                            onClick: i,
                            color: c.Button.Colors.PRIMARY,
                            size: c.Button.Sizes.MEDIUM,
                            children: y.intl.string(y.t.cpT0Cg),
                          }),
                          (0, r.jsxs)("div", {
                            className: B.contentFooterButtonCont,
                            children: [
                              (0, r.jsx)(c.Button, {
                                color: c.Button.Colors.PRIMARY,
                                onClick: H,
                                size: c.Button.Sizes.MEDIUM,
                                className: B.copyLinkBtn,
                                children: G,
                              }),
                              (0, r.jsx)(h.i0, {
                                className: B.claimBtn,
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
      function k(e) {
        let { questId: t, autoplay: n, ...o } = e,
          i = (0, a.e7)([f.Z], () => f.Z.getQuest(t));
        return null != i
          ? (0, r.jsx)(A, { ...o, quest: i, autoplay: n })
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
            onScrubBack: h,
            onScrubForward: E,
          } = e,
          [S, _] = o.useState(null),
          [T, N] = o.useState(null),
          [j, I] = o.useState(null),
          [b, D] = o.useState(!1),
          y = o.useRef(null),
          B = (e) => {
            (y.current = e), _(e);
          };
        o.useEffect(() => {
          null != S && (null == g ? I(null) : I(p(g, C, S)));
        }, [S, g, C]);
        let A = (0, s.y)(() => {
          if (null != A.current) B(A.current.getBoundingClientRect());
        });
        o.useLayoutEffect(() => {
          null != A.current && B(A.current.getBoundingClientRect());
        }, [A]),
          o.useEffect(() => {
            let e = () => {
              null != A.current && B(A.current.getBoundingClientRect());
            };
            return (
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, [A]);
        let k = (e) => {
            N(e.clientX);
          },
          L = o.useCallback(
            (e) => {
              let { key: t } = e;
              t === u.mR.ArrowLeft && null != h
                ? (e.preventDefault(), e.stopPropagation(), h())
                : t === u.mR.ArrowRight &&
                  null != E &&
                  (e.preventDefault(), e.stopPropagation(), E());
            },
            [h, E],
          ),
          P = null != T && null != S ? m(T, S, C) : 0,
          M = (0, c.yv)(P),
          O = null != S ? S.right - p((t / 100) * C, C, S) : null,
          R = null != T && null != S ? S.right - T : null,
          w = null != j && null != S ? S.right - j : null;
        return (0, r.jsxs)("div", {
          className: d.cont,
          ref: A,
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
                  null != A.current && B(A.current.getBoundingClientRect()),
                    D(!0),
                    k(e);
              },
              onMouseLeave: (e) => {
                if (!!i) D(!1), N(null);
              },
              onMouseMove: (e) => {
                if (!!i) b && k(e);
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
          return w;
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
        h = n(918701),
        E = n(184299),
        S = n(720293),
        _ = n(881773),
        T = n(355243),
        N = n(106743),
        j = n(223418),
        I = n(604162),
        b = n(747717),
        D = n(281055),
        y = n(981631),
        B = n(217702),
        A = n(388032),
        k = n(417575);
      let L = new Set([y.IyS.FIVE_G, y.IyS.FOUR_G, y.IyS.UNKNOWN]),
        P = { tension: 250, friction: 5, clamp: !0 };
      function M() {
        let e = (0, s.e7)([p.Z], () => p.Z.getState().theme);
        return (0, r.jsx)("div", {
          className: k.pauseText,
          style: {
            background: (0, c.wj)(e)
              ? "rgba(0, 0, 0, 0.65)"
              : "rgba(255, 255, 255, 0.65)",
          },
          children: (0, r.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            children: A.intl.string(A.t.U7Xrb2),
          }),
        });
      }
      function O(e) {
        let { quest: t, className: n } = e,
          i = o.useMemo(() => (0, S.z)(S.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
        return null == i
          ? null
          : (0, r.jsx)("img", {
              src: i.url,
              alt: "Video thumbnail",
              className: l()(k.stillFrameImageCard, n),
            });
      }
      function R(e) {
        let { title: t, subtitle: n, icon: i, onClick: a, className: s } = e,
          [c, d] = o.useState(!1),
          m = () => {
            d(!0);
          },
          p = () => {
            d(!1);
          };
        return (0, r.jsx)(u.Clickable, {
          className: l()(k.endScreenPanel, k.accentOnHover, s),
          onMouseEnter: m,
          onMouseLeave: p,
          onFocus: m,
          onBlur: p,
          onClick: a,
          children: (0, r.jsxs)("div", {
            className: k.endScreenPanelInner,
            children: [
              (0, r.jsxs)("div", {
                className: k.endScreenPanelTextCont,
                children: [
                  (0, r.jsx)(u.Heading, {
                    variant: "heading-md/semibold",
                    className: k.endScreenPanelTextTitle,
                    children: t,
                  }),
                  (0, r.jsx)(u.Heading, {
                    variant: "heading-sm/normal",
                    className: k.endScreenPanelTextSubtitle,
                    children: n,
                  }),
                ],
              }),
              (0, r.jsx)(b.Z, { color: "#747783" }),
              (0, r.jsx)(i, {
                size: "md",
                color: c ? "#FFFFFF" : "#B5BAC1",
                className: k.endScreenIcon,
              }),
            ],
          }),
        });
      }
      function w(e) {
        var t, n, i, c, p, b, w, F, Z, U, G;
        let {
            quest: V,
            onOptimisticProgressUpdate: q,
            autoplay: H,
            parentTransitionState: z,
          } = e,
          Y = (0, E.km)((e) => e.transcriptEnabled),
          W = (0, E.km)((e) => e.setTranscriptEnabled),
          Q = (0, E.km)((e) => e.captionEnabled),
          K = (0, E.km)((e) => e.setCaptionEnabled),
          X = (0, E.km)((e) => e.fullScreenEnabled),
          J = (0, E.km)((e) => e.setFullScreenEnabled),
          { focused: $, focusedChanged: ee } = (0, D.xU)(),
          { visible: et, visibleChanged: en, targetRef: er } = (0, D.Yy)(),
          [eo, ei] = o.useState(!0 === H ? j.r.PLAYING : j.r.PAUSED),
          [el, ea] = o.useState(!1),
          es = (0, h.il)(V),
          [ec, eu] = o.useState(es.percentComplete),
          [ed, em] = o.useState(!1),
          [ep, ef] = o.useState(!0),
          [ev, eC] = o.useState(!1),
          [eg, ex] = o.useState([]),
          [eh, eE] = o.useState(f.Z.getEffectiveConnectionSpeed()),
          [eS, e_] = o.useState(0),
          [eT, eN] = o.useState(0),
          [ej, eI] = o.useState(!1),
          [eb, eD] = o.useState(!1),
          ey = (0, E.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[V.id]) && void 0 !== t
              ? t
              : { timestampSec: 0, duration: 10 };
          }),
          eB = (0, E.km)((e) => e.setVideoProgress),
          eA = (0, E.km)((e) => e.muted),
          ek = (0, E.km)((e) => e.volume),
          eL = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
          eP = (0, o.useRef)(null),
          eM = (0, o.useRef)(null),
          eO = o.useRef(!0),
          eR =
            (null === (t = V.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          ew = (0, E.km)((e) => e.transcript),
          [eF, eZ] = o.useState(null),
          [eU, eG] = o.useState(null),
          eV = eR
            ? null !==
                (w =
                  null === (n = eP.current) || void 0 === n
                    ? void 0
                    : n.duration) && void 0 !== w
              ? w
              : 0
            : ey.maxTimestampSec,
          eq = o.useCallback(
            (e) => {
              if ((ei(e), null != eP.current))
                switch (e) {
                  case j.r.PLAYING:
                    eP.current.play(), eZ(null);
                    break;
                  case j.r.PAUSED:
                    eP.current.pause();
                    break;
                  case j.r.ENDED:
                    W(!1);
                }
            },
            [eP, ei, eZ, W],
          );
        o.useLayoutEffect(() => {
          eO.current &&
            ((eO.current = !1),
            eE(f.Z.getEffectiveConnectionSpeed()),
            eR && ey.timestampSec >= ey.duration && eB(V.id, 0, ey.duration));
        }, []),
          o.useEffect(() => {
            null != eP.current &&
              null != eF &&
              (0, C.dA)({
                questId: V.id,
                event: y.rMx.QUEST_VIDEO_PAUSED,
                properties: {
                  video_timestamp_seconds: eP.current.currentTime,
                  reason: eF,
                },
              });
          }, [eF, V.id]),
          o.useEffect(() => {
            ee &&
              null != eP.current &&
              (0, C.dA)({
                questId: V.id,
                event: $
                  ? y.rMx.QUEST_VIDEO_APP_FOCUSED
                  : y.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                properties: {
                  video_timestamp_seconds: eP.current.currentTime,
                  video_state: eo,
                },
              });
          }, [$, ee, eo, V.id]);
        let eH = o.useCallback(
          (e) => {
            !eR && (0, g.FI)(V.id, e),
              null != eP.current &&
                (0, C.dA)({
                  questId: V.id,
                  event: y.rMx.QUEST_VIDEO_PROGRESSED,
                  properties: {
                    progress: ec / 100,
                    video_timestamp_seconds: eP.current.currentTime,
                  },
                });
          },
          [V.id, ec, eR, eP],
        );
        o.useEffect(() => {
          (z === u.ModalTransitionState.HIDDEN ||
            z === u.ModalTransitionState.EXITING ||
            z === u.ModalTransitionState.EXITED ||
            (null != z && en && !et && !eR) ||
            (ee && !$ && !eR)) &&
            (null != eP.current &&
              (z === u.ModalTransitionState.EXITING ||
                z === u.ModalTransitionState.EXITED) &&
              eH(eP.current.currentTime),
            null != eP.current &&
              eo === j.r.PLAYING &&
              (eq(j.r.PAUSED), !eR && eZ(j.y.LOST_FOCUS)));
        }, [z, $, ee, et, en, eo, eR, eq, eH]);
        let ez = () => {
            ea(!0);
          },
          eY = () => {
            ea(!1);
          },
          eW = el || eo === j.r.PAUSED || eo === j.r.ENDED,
          eQ = o.useCallback(() => {
            var e;
            let t = (0, v.fn)(
              null === (e = eP.current) || void 0 === e ? void 0 : e.parentNode,
              eP.current,
            );
            null != t &&
              !(0, v.rB)(t) &&
              (t.removeEventListener(v.NO, eQ),
              J(!1),
              (0, C.dA)({
                questId: V.id,
                event: y.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
              }));
          }, [V.id, J]),
          eK = () => {
            if (null != eP.current)
              eJ(Math.max(eP.current.currentTime - 10, 0)),
                eo === j.r.ENDED && eq(j.r.PAUSED),
                (0, C._3)({
                  questId: V.id,
                  questContent: x.jn.VIDEO_MODAL,
                  questContentCTA: C.jZ.SEEK_BACKWARD,
                });
          },
          eX = () => {
            if (null == eP.current || !tr) return;
            let e = Math.min(eP.current.currentTime + 10, eV);
            eJ(e),
              eo !== j.r.ENDED && e >= eP.current.duration && eq(j.r.ENDED),
              (0, C._3)({
                questId: V.id,
                questContent: x.jn.VIDEO_MODAL,
                questContentCTA: C.jZ.SEEK_FORWARD,
              });
          };
        o.useEffect(() => {
          let e = eP.current;
          return () => {
            let t = (0, v.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(v.NO, eQ);
          };
        }, [eQ]);
        let eJ = o.useCallback(
            (e) => {
              null != eP.current &&
                (em(!0),
                (eP.current.currentTime = e),
                eB(V.id, e, eP.current.duration));
            },
            [eP, eB, V],
          ),
          e$ = () => {
            if (null != eP.current)
              switch (eo) {
                case j.r.ENDED:
                  eJ(0), eq(j.r.PLAYING);
                  break;
                case j.r.PLAYING:
                  eq(j.r.PAUSED), eZ(j.y.PAUSE_BUTTON);
                  break;
                default:
                  eq(j.r.PLAYING);
              }
          },
          e0 = (e) => {
            eG(e);
          },
          e1 = (e) => {
            eG((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
          },
          e2 = o.useCallback(() => {
            if (null == eP.current || 0 === eP.current.textTracks.length)
              return;
            let e = eP.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
              for (let t = 0; t < e.cues.length; t++) {
                let n = e.cues[t];
                (0, I.JC)(n) &&
                  ((n.id = "cue-".concat(t)),
                  (n.onenter = () => e0(n)),
                  (n.onexit = () => e1(n)));
              }
          }, [eP]);
        o.useEffect(() => {
          if (null == eM.current) return;
          let e = eM.current;
          return (
            e.addEventListener("load", e2),
            () => {
              null != e && e.removeEventListener("load", e2);
            }
          );
        }, [eM, e2]);
        let e7 = (e) => {
          null != eP.current &&
            eo === j.r.PLAYING &&
            (ep && ef(!1), ev && eC(!1), eq(j.r.PLAYING));
        };
        o.useEffect(() => {
          if (!ed) return;
          let e = setTimeout(() => {
            em(!1);
          }, 1e3);
          return () => clearTimeout(e);
        }, [ed]);
        let [{ controlBarAnimSpring: e9 }, e3] = (0, u.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: P,
            onStart: () => {
              eD(!1);
            },
            onRest: (e) => {
              1 === e.value && eD(!0);
            },
          })),
          e6 = (0, o.useRef)(null),
          [{ captionHeightSpring: e4 }, e8] = (0, u.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: P,
          }));
        o.useEffect(() => {
          var e, t;
          return (
            e8({
              captionHeightSpring:
                Q &&
                null != eU &&
                null !==
                  (t =
                    null === (e = e6.current) || void 0 === e
                      ? void 0
                      : e.clientHeight) &&
                void 0 !== t
                  ? t
                  : 0,
              immediate: eL,
            }),
            () => {
              e4.stop();
            }
          );
        }, [Q, e8, eL, eU, e4]),
          o.useEffect(
            () => (
              e3({ controlBarAnimSpring: eW || ej ? 1 : 0, immediate: eL }),
              () => {
                e9.stop();
              }
            ),
            [eW, e3, eL, ej, e9],
          );
        let e5 = eo === j.r.ENDED,
          te = o.useMemo(
            () =>
              L.has(eh)
                ? (0, S.z)(S.i.VIDEO_PLAYER_VIDEO, V)
                : (0, S.z)(S.i.VIDEO_PLAYER_VIDEO_LOW_RES, V),
            [eh, V],
          ),
          tt = o.useMemo(() => (0, S.z)(S.i.VIDEO_PLAYER_THUMBNAIL, V), [V]),
          tn = o.useMemo(() => (0, S.z)(S.i.VIDEO_PLAYER_CAPTION, V), [V]),
          tr =
            eR ||
            ey.maxTimestampSec >=
              (null !==
                (F =
                  null === (i = eP.current) || void 0 === i
                    ? void 0
                    : i.currentTime) && void 0 !== F
                ? F
                : 0) +
                1;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(u.Clickable, {
            className: k.videoCont,
            "data-fullscreen": X,
            tabIndex: -1,
            onMouseEnter: ez,
            onMouseLeave: eY,
            onFocus: ez,
            onBlur: eY,
            children: (0, r.jsxs)("div", {
              className: k.videoContInnerRelative,
              children: [
                (0, r.jsx)(O, {
                  quest: V,
                  className: l()({ [k.stillFrameImageCardHidden]: !e5 }),
                }),
                e5 && (0, r.jsx)("div", { className: k.videoContOverlay }),
                (0, r.jsxs)(m.Z, {
                  ref: (e) => {
                    (eP.current = e), (er.current = e);
                  },
                  autoPlay: H,
                  playsInline: !0,
                  mediaLayoutType: X ? B.hV.STATIC : B.hV.RESPONSIVE,
                  className: l()({ [k.hidden]: e5, [k.videoInner]: !0 }),
                  controls: !1,
                  poster: null == tt ? void 0 : tt.url,
                  disablePictureInPicture: !0,
                  onTimeUpdate: (e) => {
                    null != eP.current &&
                      (eP.current.currentTime >= eS &&
                        (e_(eP.current.currentTime + 6 + 2 * Math.random()),
                        eH(eP.current.currentTime)),
                      eP.current.currentTime >= eT &&
                        (eN(eP.current.currentTime + 1),
                        (0, g.qm)(V.id, es.taskType, eP.current.currentTime),
                        q(eP.current.currentTime)),
                      eB(V.id, eP.current.currentTime, eP.current.duration),
                      eu((eP.current.currentTime / eP.current.duration) * 100));
                  },
                  onEnded: (e) => {
                    null != eP.current &&
                      (eH(eP.current.duration + 1),
                      eB(V.id, eP.current.duration, eP.current.duration)),
                      eq(j.r.ENDED),
                      eC(!1);
                  },
                  onLoadedData: (e) => {
                    ep && ef(!1);
                  },
                  onLoadedMetadata: (e) => {
                    null != eP.current &&
                      (eJ(ey.timestampSec),
                      eA ? (eP.current.volume = 0) : (eP.current.volume = ek));
                  },
                  onWaiting: (e) => {
                    eC(!0);
                  },
                  onProgress: (e) => {
                    if (null == eP.current) return;
                    let t = [];
                    for (let e = 0; e < eP.current.buffered.length; e++) {
                      let n = eP.current.buffered.start(e),
                        r = eP.current.buffered.end(e);
                      if (!(r - n < 1))
                        t.push({
                          start: n / eP.current.duration,
                          size: (r - n) / eP.current.duration,
                        });
                    }
                    ex(t);
                  },
                  onCanPlay: e7,
                  onCanPlayThrough: e7,
                  onClick: () => {
                    e$();
                  },
                  crossOrigin: "anonymous",
                  children: [
                    null != tn &&
                      (0, r.jsx)("track", {
                        ref: eM,
                        src: tn.url,
                        label: "English",
                        kind: "captions",
                        srcLang: "en",
                        default: !0,
                      }),
                    null != te &&
                      (0, r.jsx)("source", { src: te.url, type: te.mimetype }),
                  ],
                }),
                (ep || ev) &&
                  (0, r.jsx)(u.Spinner, {
                    type: u.Spinner.Type.WANDERING_CUBES,
                    className: k.loadingSpinner,
                  }),
                eo === j.r.PAUSED && eF === j.y.LOST_FOCUS && (0, r.jsx)(M, {}),
                Y &&
                  eo !== j.r.ENDED &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(u.Clickable, {
                        onClick: () => W(!1),
                        tabIndex: -1,
                        children: (0, r.jsx)("div", {
                          className: k.transcriptOverlay,
                        }),
                      }),
                      (0, r.jsx)(a.animated.div, {
                        className: k.transcriptCont,
                        style: {
                          marginBottom: (0, a.to)([e9, e4], (e, t) =>
                            "".concat(50 * e + t, "px"),
                          ),
                        },
                        children: (0, r.jsx)(N.K, {
                          quest: V,
                          onClose: () => {
                            W(!1),
                              (0, C._3)({
                                questId: V.id,
                                questContent: x.jn.VIDEO_MODAL,
                                questContentCTA: C.jZ.TRANSCRIPT_DISABLE,
                              });
                          },
                        }),
                      }),
                    ],
                  }),
                eo === j.r.ENDED &&
                  (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(R, {
                      title:
                        null !==
                          (Z =
                            null === (c = V.config.videoMetadata) ||
                            void 0 === c
                              ? void 0
                              : c.messages.videoEndCtaTitle) && void 0 !== Z
                          ? Z
                          : A.intl.string(A.t.iiTtpK),
                      subtitle:
                        null !==
                          (U =
                            null === (p = V.config.videoMetadata) ||
                            void 0 === p
                              ? void 0
                              : p.messages.videoEndCtaSubtitle) && void 0 !== U
                          ? U
                          : A.intl.string(A.t.mxaHf3),
                      icon: u.ArrowLargeRightIcon,
                      className: k.endScreenPanelRight,
                      onClick: () => {
                        (0, C._3)({
                          questId: V.id,
                          questContent: x.jn.VIDEO_MODAL,
                          questContentCTA: C.jZ.LEARN_MORE,
                        }),
                          (0, h.FE)(V, {
                            content: x.jn.VIDEO_MODAL,
                            ctaContent: C.jZ.LEARN_MORE,
                          });
                      },
                    }),
                  }),
                (0, r.jsx)(a.animated.div, {
                  className: k.videoFooterContGradient,
                  style: {
                    opacity: (0, a.to)(
                      [e9.to({ range: [0, 1], output: [0, 1] })],
                      (e) => "".concat(e),
                    ),
                  },
                }),
                (0, r.jsx)(
                  "div",
                  {
                    className: l()(k.playPausePopCont, {
                      [k.play]: eo === j.r.PLAYING,
                      [k.pause]: eo === j.r.PAUSED,
                    }),
                    children:
                      eo === j.r.PLAYING
                        ? (0, r.jsx)(u.PlayIcon, {
                            className: k.playPausePopIcon,
                          })
                        : (0, r.jsx)(u.PauseIcon, {
                            className: k.playPausePopIcon,
                          }),
                  },
                  eo,
                ),
                Q &&
                  null != eU &&
                  (0, r.jsx)(a.animated.div, {
                    className: k.captionContainer,
                    ref: e6,
                    style: {
                      translateY: (0, a.to)(
                        [e9.to({ range: [0, 1], output: [0, -50] })],
                        (e) => "".concat(e, "px"),
                      ),
                    },
                    children: (0, r.jsx)(u.Text, {
                      variant: "text-lg/semibold",
                      color: "always-white",
                      className: k.captionText,
                      children: eU.text,
                    }),
                  }),
                (0, r.jsxs)(a.animated.div, {
                  className: k.videoFooterCont,
                  style: {
                    paddingLeft: (0, a.to)(
                      [e9.to({ range: [0, 1], output: [0, 25] })],
                      (e) => "".concat(e, "px"),
                    ),
                    paddingRight: (0, a.to)(
                      [e9.to({ range: [0, 1], output: [0, 25] })],
                      (e) => "".concat(e, "px"),
                    ),
                    height: (0, a.to)(
                      [e9.to({ range: [0, 1], output: [0, 50] })],
                      (e) => "".concat(e, "px"),
                    ),
                  },
                  children: [
                    (0, r.jsx)(T.Z, {
                      percent: ec,
                      animate: !0 !== eO.current && !ed,
                      interactionEnabled: eR && eb,
                      backgroundColor: eW ? void 0 : "rgba(0, 0, 0, 0.0)",
                      preloadedBuffers: eW ? eg : void 0,
                      duration:
                        null !==
                          (G =
                            null === (b = eP.current) || void 0 === b
                              ? void 0
                              : b.duration) && void 0 !== G
                          ? G
                          : 1,
                      maxSeekableTime: eW && eb ? eV : void 0,
                      onClick: (e) => {
                        eJ(e), eo === j.r.ENDED && eq(j.r.PLAYING);
                      },
                      onScrubBack: () => {
                        eK();
                      },
                      onScrubForward: () => {
                        eX();
                      },
                    }),
                    (0, r.jsx)(a.animated.div, {
                      className: k.videoControlsCont,
                      style: {
                        paddingTop: (0, a.to)(
                          [e9.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(e * e * 12, "px"),
                        ),
                        paddingBottom: (0, a.to)(
                          [e9.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(e * e * 12, "px"),
                        ),
                        pointerEvents: (0, a.to)(
                          [e9.to({ range: [0, 1], output: [0, 1] })],
                          (e) => (e < 0.3 ? "none" : "auto"),
                        ),
                      },
                      children: (0, r.jsx)(_.Z, {
                        videoRef: eP,
                        quest: V,
                        playerState: eo,
                        animSpring: e9,
                        visible: eW,
                        seekForwardEnabled: tr,
                        hideCaptionBtn: null == tn,
                        handlePlaybackBtnClick: e$,
                        handleTranscriptBtnClick: () => {
                          !Y &&
                            (null == ew ||
                              ew.questId !== V.id ||
                              ew.fetchStatus === E.iF.NONE ||
                              ew.fetchStatus === E.iF.FAILURE) &&
                            (0, g.lL)(V),
                            W(!Y),
                            (0, C._3)({
                              questId: V.id,
                              questContent: x.jn.VIDEO_MODAL,
                              questContentCTA: Y
                                ? C.jZ.TRANSCRIPT_DISABLE
                                : C.jZ.TRANSCRIPT_ENABLE,
                            });
                        },
                        handleCaptionBtnClick: () => {
                          K(!Q),
                            (0, C._3)({
                              questId: V.id,
                              questContent: x.jn.VIDEO_MODAL,
                              questContentCTA: Q
                                ? C.jZ.CLOSED_CAPTIONING_DISABLE
                                : C.jZ.CLOSED_CAPTIONING_ENABLE,
                            });
                        },
                        handleFullScreenBtnClick: () => {
                          var e;
                          let t = !X,
                            n = (0, v.fn)(
                              null === (e = eP.current) || void 0 === e
                                ? void 0
                                : e.parentNode,
                              eP.current,
                            );
                          t && null != n
                            ? ((0, v.Dj)(n),
                              n.addEventListener(v.NO, eQ),
                              (0, C.dA)({
                                questId: V.id,
                                event: y.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                              }))
                            : !t &&
                              null != n &&
                              (n.removeEventListener(v.NO, eQ),
                              (0, C.dA)({
                                questId: V.id,
                                event: y.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                              }),
                              (0, v.Pr)(n)),
                            J(t);
                        },
                        handleSeekBackBtnClick: eK,
                        handleSeekForwardBtnClick: eX,
                        handleControlBarPendingInteraction: eI,
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
//# sourceMappingURL=5d36791e36f59cf59ea3.js.map
