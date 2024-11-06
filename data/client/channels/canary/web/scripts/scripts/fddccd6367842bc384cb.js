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
              style: I,
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
          return j;
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
        C = n(223418),
        g = n(604162),
        x = n(981631),
        S = n(388032),
        E = n(417575);
      let h = "-:--",
        _ = (e, t) => {
          (0, p.dA)({
            questId: e,
            event: x.rMx.QUEST_VIDEO_VOLUME_CHANGED,
            properties: { volume_threshold: t > 0 && t < 1 ? 0.5 : t },
          });
        };
      function T(e) {
        let { current: t, duration: n } = e,
          o = null != t ? (0, g.yv)(t) : h,
          i = null != n ? (0, g.yv)(n) : h;
        return (
          (o = o.padStart(i.length, "0")),
          (0, r.jsxs)("div", {
            className: l()(E.durationTimeWrapper, E.controlsBarItem),
            children: [
              (0, r.jsx)(d.Text, {
                variant: "text-xs/normal",
                className: E.durationTimeDisplay,
                children: o,
              }),
              (0, r.jsx)(d.Text, {
                variant: "text-xs/normal",
                className: E.durationTimeSeparator,
                children: "/",
              }),
              (0, r.jsx)(d.Text, {
                variant: "text-xs/normal",
                className: E.durationTimeDisplay,
                children: i,
              }),
            ],
          })
        );
      }
      function I(e) {
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
              className: l()(E.videoControlsBtnCont, {
                [E.videoControlsBtnContDisabled]: u,
              }),
              "aria-label": i,
              "aria-disabled": u,
              children: (0, r.jsx)(a.animated.div, {
                className: l()(E.videoControlsBtnCont),
                style: {
                  opacity: (0, a.to)(
                    [n.to({ range: [0, 1], output: [0, 1] })],
                    (e) => "".concat(o ? e : Math.pow(e, 8)),
                  ),
                },
                children: (0, r.jsx)(t, {
                  color: !0 !== u ? c.Z.colors.WHITE : c.Z.colors.TEXT_MUTED,
                  className: l()(E.controlsBarItem, {
                    [E.controlsBarItemActive]: s,
                    [E.videoControlsBtn]: !u,
                  }),
                }),
              }),
            });
        return null != m
          ? (0, r.jsx)(d.Tooltip, { text: m, delay: p, children: (e) => v(e) })
          : v();
      }
      function j(e) {
        var t, n;
        let {
            videoRef: i,
            quest: p,
            playerState: g,
            animSpring: x,
            visible: h,
            seekForwardEnabled: j,
            hideCaptionButton: N,
            handlePlayPauseBtnClick: b,
            handleTranscriptBtnClick: D,
            handleCaptionBtnClick: y,
            handleFullScreenBtnClick: B,
            handleSeekBackBtnClick: k,
            handleSeekForwardBtnClick: A,
            handleControlBarPendingInteraction: L,
          } = e,
          O = (0, f.km)((e) => e.volume),
          P = (0, f.km)((e) => e.setVolume),
          M = (0, f.km)((e) => e.muted),
          R = (0, f.km)((e) => e.setMuted),
          F = (0, f.km)((e) => e.transcriptEnabled),
          Z = (0, f.km)((e) => e.captionEnabled),
          U = (0, f.km)((e) => e.fullScreenEnabled),
          w = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
          [G, V] = o.useState(M ? 0 : O),
          [q, H] = o.useState(!1),
          [z, W] = o.useState(!1),
          [{ volumeAnimSpring: Y }, Q] = (0, d.useSpring)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
          })),
          K = (e) => {
            if (null != i.current)
              e !== i.current.volume && (i.current.volume = e), e !== G && V(e);
          },
          X = () => {
            H(!0);
          },
          J = () => {
            H(!1);
          };
        o.useEffect(
          () => (
            Q({ volumeAnimSpring: z || q ? 1 : 0, immediate: w }),
            () => {
              Y.stop();
            }
          ),
          [z, q, Q, w, Y],
        );
        let $ =
            0 === G
              ? d.VoiceXIcon
              : G < 0.5
                ? d.VoiceLowIcon
                : d.VoiceNormalIcon,
          ee =
            g === C.r.ENDED
              ? d.RetryIcon
              : g === C.r.PLAYING
                ? d.PauseIcon
                : d.PlayIcon,
          et =
            g === C.r.ENDED
              ? "Replay"
              : g === C.r.PLAYING
                ? S.intl.string(S.t.ZcgDJS)
                : S.intl.string(S.t.RscU7O);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("div", {
              className: l()(E.videoControlsGroup, E.videoControlsGroupStart),
              children: (0, r.jsx)(I, {
                iconComponent: ee,
                animationTime: x,
                visible: h,
                ariaLabel: et,
                onClick: b,
              }),
            }),
            (0, r.jsxs)(a.animated.div, {
              className: l()(E.videoControlsGroup, E.videoControlsGroupMid),
              style: {
                opacity: (0, a.to)(
                  [x.to({ range: [0, 1], output: [0, 1] })],
                  (e) => "".concat(h ? e : Math.pow(e, 8)),
                ),
              },
              children: [
                (0, r.jsxs)("div", {
                  onMouseEnter: X,
                  onMouseLeave: J,
                  onFocus: X,
                  onBlur: J,
                  className: E.volumeControlGroup,
                  children: [
                    (0, r.jsx)(I, {
                      iconComponent: $,
                      animationTime: x,
                      visible: h,
                      onClick: () => {
                        if (null != i.current)
                          0 === G
                            ? (K(O), R(!1), _(p.id, O))
                            : (P(G), K(0), R(!0), _(p.id, 0));
                      },
                      ariaLabel: S.intl.string(S.t["eIl+AA"]),
                      tooltipLabel: S.intl.string(S.t["eIl+AA"]),
                    }),
                    (0, r.jsx)(a.animated.div, {
                      className: E.volumeSlider,
                      style: {
                        opacity: (0, a.to)(
                          [Y.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(h ? e : Math.pow(e, 8)),
                        ),
                        width: (0, a.to)(
                          [Y.to({ range: [0, 1], output: [0, 100] })],
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
                        initialValue: G,
                        keyboardStep: 0.1,
                        minValue: 0,
                        maxValue: 1,
                        onValueChange: (e) => {
                          K(e),
                            P(e),
                            _(p.id, e),
                            z && (W(!1), L(!1)),
                            M && e > 0 && R(!1);
                        },
                        asValueChanges: (e) => {
                          K(e), !z && (W(!0), L(!0));
                        },
                        fillStyles: { backgroundColor: c.Z.colors.WHITE.css },
                        orientation: "horizontal",
                        "aria-label": S.intl.string(S.t["eIl+AA"]),
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)(T, {
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
              className: l()(E.videoControlsGroup, E.videoControlsGroupEnd),
              children: [
                (0, r.jsx)(I, {
                  iconComponent: d.ArrowAngleLeftUpIcon,
                  animationTime: x,
                  visible: h,
                  onClick: k,
                  ariaLabel: S.intl.string(S.t.r9s3Ul),
                  tooltipLabel: S.intl.string(S.t.r9s3Ul),
                }),
                (0, r.jsx)(I, {
                  iconComponent: d.ArrowAngleRightUpIcon,
                  animationTime: x,
                  visible: h,
                  onClick: A,
                  disabled: !j,
                  ariaLabel: j
                    ? S.intl.string(S.t.zWDcND)
                    : S.intl.string(S.t.xXh3y8),
                  tooltipLabel: j
                    ? S.intl.string(S.t.zWDcND)
                    : S.intl.string(S.t.xXh3y8),
                  tooltipDelayMs: j ? 1500 : 0,
                }),
                (0, r.jsx)(I, {
                  iconComponent: d.PaperIcon,
                  animationTime: x,
                  visible: h,
                  onClick: D,
                  active: F && g !== C.r.ENDED,
                  ariaLabel: S.intl.string(S.t.KCzjTk),
                  tooltipLabel: S.intl.string(S.t.KCzjTk),
                }),
                !N &&
                  (0, r.jsx)(I, {
                    iconComponent: v.c,
                    animationTime: x,
                    visible: h,
                    active: Z,
                    onClick: y,
                    ariaLabel: S.intl.string(S.t.bDSZOz),
                    tooltipLabel: S.intl.string(S.t.bDSZOz),
                  }),
                (0, r.jsx)(I, {
                  iconComponent: U
                    ? d.FullscreenExitIcon
                    : d.FullscreenEnterIcon,
                  animationTime: x,
                  visible: h,
                  onClick: B,
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
        h = n(644646),
        _ = n(604162),
        T = n(747717),
        I = n(963123),
        j = n(46140),
        N = n(981631),
        b = n(388032),
        D = n(417575);
      function y(e) {
        var t, n, i;
        let { transitionState: f, onClose: y, quest: B, autoplay: k } = e,
          A = (0, C.il)(B),
          L = (0, a.e7)([d.Z], () => d.Z.getState().theme),
          O = (0, s.wj)(L) ? N.BRd.DARK : N.BRd.LIGHT,
          P = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
          [M, R] = o.useState(A.progressSeconds),
          [F, Z] = o.useState(!1),
          { completedRatio: U, completedRatioDisplay: w } = (0, p.I)(B),
          [G, V] = (0, _.G6)(
            b.intl.string(b.t.RDE0SU),
            b.intl.string(b.t["+5kSoa"]),
            1700,
          ),
          q =
            (null === (t = B.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) != null
              ? b.intl.string(b.t.vTgCW1)
              : b.intl.string(b.t.cfY4PD),
          H = o.useCallback(() => {
            (0, C.f2)(B.id, {
              content: v.jn.VIDEO_MODAL,
              ctaContent: m.jZ.COPY_QUEST_URL,
            }),
              V();
          }, [B.id, V]),
          z = o.useMemo(
            () => x.r.build(B.config).defaultReward.messages.name,
            [B],
          ),
          W = b.intl.formatToPlainString(b.t["12IWPz"], { rewardName: z });
        return (0, r.jsx)(c.ModalRoot, {
          transitionState: f,
          size: c.ModalSize.DYNAMIC,
          className: D.modalRoot,
          children: (0, r.jsx)("div", {
            className: D.modalBg,
            children: (0, r.jsx)("div", {
              className: D.modalBody,
              children: (0, r.jsxs)("div", {
                className: D.modalContent,
                children: [
                  (0, r.jsxs)("div", {
                    className: D.contentHeader,
                    children: [
                      (0, r.jsxs)(c.Clickable, {
                        className: D.contentHeaderGameInfo,
                        onClick: () => {
                          (0, C.FE)(B, {
                            content: v.jn.VIDEO_MODAL,
                            ctaContent: m.jZ.OPEN_GAME_LINK,
                          });
                        },
                        children: [
                          (0, r.jsx)("img", {
                            alt: B.config.messages.gameTitle,
                            className: l()(
                              D.contentHeaderLogotype,
                              D.accentOnHover,
                            ),
                            src: (0, g.fh)(B, g.eC.LOGO_TYPE, O).url,
                          }),
                          (0, r.jsx)(T.Z, {}),
                          (0, r.jsxs)("div", {
                            className: D.questHeading,
                            children: [
                              (0, r.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: b.intl.format(b.t.EQa7oq, {
                                  questName: B.config.messages.questName,
                                }),
                              }),
                              (0, r.jsx)(c.Text, {
                                variant: "text-sm/medium",
                                color: "header-secondary",
                                children: B.config.messages.gameTitle,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsx)(c.Tooltip, {
                        position: "left",
                        text: W,
                        onTooltipShow: () => {
                          Z(!0);
                        },
                        onTooltipHide: () => {
                          Z(!1);
                        },
                        children: (e) =>
                          (0, r.jsx)(c.Clickable, {
                            className: D.progressCont,
                            ...e,
                            children: (0, r.jsx)(E.Z, {
                              quest: B,
                              size: 48,
                              percentComplete: U,
                              percentCompleteText: F ? w : void 0,
                              percentCompleteTextVariant: "text-sm/medium",
                              children: (0, r.jsx)(h.Z, {
                                className: D.questProgressRewardTile,
                                quest: B,
                                questContent: v.jn.VIDEO_MODAL,
                                autoplay: !1,
                                location: j.dr.VIDEO_MODAL,
                              }),
                            }),
                          }),
                      }),
                    ],
                  }),
                  (0, r.jsx)(I.Z, {
                    quest: B,
                    parentTransitionState: f,
                    onOptimisticProgressUpdate: R,
                    autoplay: k,
                  }),
                  (0, r.jsxs)("div", {
                    className: D.contentFooter,
                    children: [
                      (0, r.jsx)(c.Button, {
                        color: c.Button.Colors.PRIMARY,
                        onClick: H,
                        size: c.Button.Sizes.MEDIUM,
                        className: D.copyLinkBtn,
                        children: G,
                      }),
                      (0, r.jsxs)("div", {
                        className: D.contentFooterButtonCont,
                        children: [
                          (0, r.jsx)(c.Button, {
                            onClick: y,
                            color: c.Button.Colors.PRIMARY,
                            size: c.Button.Sizes.MEDIUM,
                            children: b.intl.string(b.t.cpT0Cg),
                          }),
                          (0, r.jsx)(S.i0, {
                            className: D.claimBtn,
                            size: c.Button.Sizes.MEDIUM,
                            quest: B,
                            useReducedMotion: P,
                            isExpanded:
                              (null === (n = B.userStatus) || void 0 === n
                                ? void 0
                                : n.completedAt) != null,
                            disabled:
                              (null === (i = B.userStatus) || void 0 === i
                                ? void 0
                                : i.completedAt) == null,
                            ctaLabel: q,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      }
      function B(e) {
        let { questId: t, autoplay: n, ...o } = e,
          i = (0, a.e7)([f.Z], () => f.Z.getQuest(t));
        return null != i
          ? (0, r.jsx)(y, { ...o, quest: i, autoplay: n })
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
          [j, N] = o.useState(null),
          [b, D] = o.useState(!1);
        o.useEffect(() => {
          if (null != h) null == g ? N(null) : N(p(g, C, h));
        }, [h, g, C]);
        let y = (0, s.y)(() => {
            if (null != y.current) _(y.current.getBoundingClientRect());
          }),
          B = (e) => {
            I(e.clientX);
          },
          k = o.useCallback(
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
          A = null != T && null != h ? m(T, h, C) : 0,
          L = (0, c.yv)(A),
          O = null != h ? h.right - p((t / 100) * C, C, h) : null,
          P = null != T && null != h ? h.right - T : null,
          M = null != j && null != h ? h.right - j : null;
        return (0, r.jsxs)("div", {
          className: d.cont,
          ref: y,
          children: [
            (0, r.jsxs)(a.Clickable, {
              className: l()(d.hitboxArea, { [d.interactionEnabled]: i }),
              ignoreKeyPress: !0,
              onClick: (e) => {
                if (!!i && null != x)
                  x(m(e.clientX, e.currentTarget.getBoundingClientRect(), C));
              },
              onMouseEnter: (e) => {
                if (!!i) D(!0), B(e);
              },
              onMouseLeave: (e) => {
                if (!!i) D(!1), I(null);
              },
              onMouseMove: (e) => {
                if (!!i) b && B(e);
              },
              onKeyDown: k,
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
                  null != M &&
                  M > 0 &&
                  (0, r.jsx)("div", {
                    className: d.seekableBar,
                    style: {
                      right: null != M ? "".concat(M, "px") : "auto",
                      opacity: null != M ? 1 : 0,
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
                  null != L &&
                  (0, r.jsx)(a.Text, {
                    className: d.timeDisplay,
                    variant: "text-xs/normal",
                    style: {
                      right: null != P ? "".concat(P - 10, "px") : "auto",
                    },
                    children: L,
                  }),
                b &&
                  i &&
                  (0, r.jsx)("div", {
                    className: d.grabber,
                    style: {
                      right: null != O ? "".concat(O - 6, "px") : "auto",
                    },
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
            (0, r.jsx)(l.ScrollerAuto, {
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
        let { className: t } = e;
        return (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "2",
          height: "40",
          viewBox: "0 0 2 40",
          fill: "none",
          className: i()(l.verticalDivider, t),
          children: (0, r.jsx)("path", {
            d: "M1 0V40",
            stroke: "#4E5058",
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
        i = n(120356),
        l = n.n(i),
        a = n(100621),
        s = n(442837),
        c = n(692547),
        u = n(780384),
        d = n(481060),
        m = n(607070),
        p = n(70097),
        f = n(210887),
        v = n(866960),
        C = n(228488),
        g = n(617136),
        x = n(272008),
        S = n(497505),
        E = n(918701),
        h = n(184299),
        _ = n(720293),
        T = n(881773),
        I = n(355243),
        j = n(106743),
        N = n(223418),
        b = n(604162),
        D = n(747717),
        y = n(281055),
        B = n(981631),
        k = n(217702),
        A = n(388032),
        L = n(417575);
      let O = new Set([B.IyS.FIVE_G, B.IyS.FOUR_G, B.IyS.UNKNOWN]),
        P = { tension: 250, friction: 5, clamp: !0 };
      function M() {
        let e = (0, s.e7)([f.Z], () => f.Z.getState().theme);
        return (0, r.jsx)("div", {
          className: L.pauseText,
          style: {
            background: (0, u.wj)(e)
              ? "rgba(0, 0, 0, 0.65)"
              : "rgba(255, 255, 255, 0.65)",
          },
          children: (0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            children: A.intl.string(A.t.U7Xrb2),
          }),
        });
      }
      function R(e) {
        let { quest: t, className: n } = e,
          i = o.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
        return null == i
          ? null
          : (0, r.jsx)("img", {
              src: i.url,
              alt: "Video thumbnail",
              className: l()(L.stillFrameImageCard, n),
            });
      }
      function F(e) {
        let { title: t, subtitle: n, icon: i, onClick: a, className: m } = e,
          p = (0, s.e7)([f.Z], () => f.Z.getState().theme),
          [v, C] = o.useState(!1),
          g = () => {
            C(!0);
          },
          x = () => {
            C(!1);
          };
        return (0, r.jsx)(d.Clickable, {
          className: l()(L.endScreenPanel, L.accentOnHover, m),
          onMouseEnter: g,
          onMouseLeave: x,
          onFocus: g,
          onBlur: x,
          onClick: a,
          style: {
            background: (0, u.wj)(p)
              ? "rgba(0, 0, 0, 0.45)"
              : "rgba(255, 255, 255, 0.55)",
          },
          children: (0, r.jsxs)("div", {
            className: L.endScreenPanelInner,
            children: [
              (0, r.jsxs)("div", {
                className: L.endScreenPanelTextCont,
                children: [
                  (0, r.jsx)(d.Heading, {
                    variant: "heading-md/semibold",
                    children: t,
                  }),
                  (0, r.jsx)(d.Heading, {
                    variant: "heading-sm/normal",
                    color: "text-normal",
                    children: n,
                  }),
                ],
              }),
              (0, r.jsx)(D.Z, {}),
              (0, r.jsx)(i, {
                size: "md",
                color: v
                  ? c.Z.colors.INTERACTIVE_ACTIVE
                  : c.Z.colors.INTERACTIVE_NORMAL,
                className: L.endScreenIcon,
              }),
            ],
          }),
        });
      }
      function Z(e) {
        var t, n, i, c, u, f, D, Z, U, w, G;
        let {
            quest: V,
            onOptimisticProgressUpdate: q,
            autoplay: H,
            parentTransitionState: z,
          } = e,
          W = (0, h.km)((e) => e.transcriptEnabled),
          Y = (0, h.km)((e) => e.setTranscriptEnabled),
          Q = (0, h.km)((e) => e.captionEnabled),
          K = (0, h.km)((e) => e.setCaptionEnabled),
          X = (0, h.km)((e) => e.fullScreenEnabled),
          J = (0, h.km)((e) => e.setFullScreenEnabled),
          { focused: $, focusedChanged: ee } = (0, y.xU)(),
          { visible: et, visibleChanged: en, targetRef: er } = (0, y.Yy)(),
          [eo, ei] = o.useState(!0 === H ? N.r.PLAYING : N.r.PAUSED),
          [el, ea] = o.useState(!1),
          es = (0, E.il)(V),
          [ec, eu] = o.useState(es.percentComplete),
          [ed, em] = o.useState(!1),
          [ep, ef] = o.useState(!0),
          [ev, eC] = o.useState(!1),
          [eg, ex] = o.useState([]),
          [eS, eE] = o.useState(v.Z.getEffectiveConnectionSpeed()),
          [eh, e_] = o.useState(0),
          [eT, eI] = o.useState(0),
          [ej, eN] = o.useState(!1),
          [eb, eD] = o.useState(!1),
          ey = (0, h.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[V.id]) && void 0 !== t
              ? t
              : { timestampSec: 0, duration: 10 };
          }),
          eB = (0, h.km)((e) => e.setVideoProgress),
          ek = (0, h.km)((e) => e.muted),
          eA = (0, h.km)((e) => e.volume),
          eL = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
          eO = (0, o.useRef)(null),
          eP = o.useRef(!0),
          eM =
            (null === (t = V.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          eR = (0, h.km)((e) => e.transcript),
          [eF, eZ] = o.useState(null),
          [eU, ew] = o.useState(null),
          eG = eM
            ? null !==
                (D =
                  null === (n = eO.current) || void 0 === n
                    ? void 0
                    : n.duration) && void 0 !== D
              ? D
              : 0
            : ey.maxTimestampSec;
        o.useLayoutEffect(() => {
          eP.current &&
            ((eP.current = !1),
            eE(v.Z.getEffectiveConnectionSpeed()),
            eM && ey.timestampSec >= ey.duration && eB(V.id, 0, ey.duration));
        }, []),
          o.useEffect(() => {
            null != eO.current &&
              null != eF &&
              (0, g.dA)({
                questId: V.id,
                event: B.rMx.QUEST_VIDEO_PAUSED,
                properties: {
                  video_timestamp_seconds: eO.current.currentTime,
                  reason: eF,
                },
              });
          }, [eF, V.id]),
          o.useEffect(() => {
            ee &&
              null != eO.current &&
              (0, g.dA)({
                questId: V.id,
                event: $
                  ? B.rMx.QUEST_VIDEO_APP_FOCUSED
                  : B.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                properties: {
                  video_timestamp_seconds: eO.current.currentTime,
                  video_state: eo,
                },
              });
          }, [$, ee, eo, V.id]),
          o.useEffect(() => {
            (z === d.ModalTransitionState.HIDDEN ||
              z === d.ModalTransitionState.EXITING ||
              z === d.ModalTransitionState.EXITED ||
              (null != z && en && !et && !eM) ||
              (ee && !$ && !eM)) &&
              null != eO.current &&
              eo === N.r.PLAYING &&
              (eW(!1), eZ(N.y.LOST_FOCUS));
          }, [z, $, ee, et, en, eo, eM]);
        let eV = () => {
            ea(!0);
          },
          eq = () => {
            ea(!1);
          },
          eH = el || eo === N.r.PAUSED || eo === N.r.ENDED,
          ez = o.useCallback(() => {
            var e;
            let t = (0, C.fn)(
              null === (e = eO.current) || void 0 === e ? void 0 : e.parentNode,
              eO.current,
            );
            null != t &&
              !(0, C.rB)(t) &&
              (t.removeEventListener(C.NO, ez),
              J(!1),
              (0, g.dA)({
                questId: V.id,
                event: B.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
              }));
          }, [V.id, J]);
        o.useEffect(() => {
          let e = eO.current;
          return () => {
            let t = (0, C.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(C.NO, ez);
          };
        }, [ez]);
        let eW = (e) => {
            if (null != eO.current)
              e ? (eO.current.play(), eZ(null)) : eO.current.pause(),
                ei(e ? N.r.PLAYING : N.r.PAUSED);
          },
          eY = o.useCallback(
            (e) => {
              if (null != eO.current)
                em(!0),
                  (eO.current.currentTime = e),
                  eB(V.id, e, eO.current.duration);
            },
            [eO, eB, V],
          ),
          eQ = () => {
            if (null != eO.current)
              switch (eo) {
                case N.r.ENDED:
                  eY(0), eW(!0);
                  break;
                case N.r.PLAYING:
                  eW(!1), eZ(N.y.PAUSE_BUTTON);
                  break;
                default:
                  eW(!0);
              }
          },
          eK = (e) => {
            ew(e);
          },
          eX = (e) => {
            ew((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
          },
          eJ = (e) => {
            if (null != eO.current && eo === N.r.PLAYING)
              ep && ef(!1), ev && eC(!1), eW(!0);
          };
        o.useEffect(() => {
          if (!ed) return;
          let e = setTimeout(() => {
            em(!1);
          }, 1e3);
          return () => clearTimeout(e);
        }, [ed]);
        let e$ = o.useCallback(() => {
            if (null != eO.current)
              eY(Math.max(eO.current.currentTime - 10, 0));
          }, [eY]),
          e0 = o.useCallback(() => {
            if (null != eO.current)
              eY(Math.min(eO.current.currentTime + 10, eO.current.duration));
          }, [eY]),
          [{ controlBarAnimSpring: e1 }, e2] = (0, d.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: P,
            onStart: () => {
              eD(!1);
            },
            onRest: (e) => {
              1 === e.value && eD(!0);
            },
          })),
          e9 = (0, o.useRef)(null),
          [{ captionHeightSpring: e4 }, e6] = (0, d.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: P,
          }));
        o.useEffect(() => {
          var e, t;
          return (
            e6({
              captionHeightSpring:
                Q &&
                null != eU &&
                null !==
                  (t =
                    null === (e = e9.current) || void 0 === e
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
        }, [Q, e6, eL, eU, e4]),
          o.useEffect(
            () => (
              e2({ controlBarAnimSpring: eH || ej ? 1 : 0, immediate: eL }),
              () => {
                e1.stop();
              }
            ),
            [eH, e2, eL, ej, e1],
          );
        let e3 = (e) => {
            !eM && (0, x.FI)(V.id, e),
              null != eO.current &&
                (0, g.dA)({
                  questId: V.id,
                  event: B.rMx.QUEST_VIDEO_PROGRESSED,
                  properties: {
                    progress: ec / 100,
                    video_timestamp_seconds: eO.current.currentTime,
                  },
                });
          },
          e7 = eo === N.r.ENDED,
          e5 = o.useMemo(
            () =>
              O.has(eS)
                ? (0, _.z)(_.i.VIDEO_PLAYER_VIDEO, V)
                : (0, _.z)(_.i.VIDEO_PLAYER_VIDEO_LOW_RES, V),
            [eS, V],
          ),
          e8 = o.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_THUMBNAIL, V), [V]),
          te = o.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_CAPTION, V), [V]),
          tt =
            eM ||
            ey.maxTimestampSec >=
              (null !==
                (Z =
                  null === (i = eO.current) || void 0 === i
                    ? void 0
                    : i.currentTime) && void 0 !== Z
                ? Z
                : 0) +
                1;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(d.Clickable, {
            className: L.videoCont,
            "data-fullscreen": X,
            tabIndex: -1,
            onMouseEnter: eV,
            onMouseLeave: eq,
            onFocus: eV,
            onBlur: eq,
            children: (0, r.jsxs)("div", {
              className: L.videoContInnerRelative,
              children: [
                (0, r.jsx)(R, {
                  quest: V,
                  className: l()({ [L.stillFrameImageCardHidden]: !e7 }),
                }),
                e7 && (0, r.jsx)("div", { className: L.videoContOverlay }),
                (0, r.jsxs)(p.Z, {
                  ref: (e) => {
                    (eO.current = e), (er.current = e);
                  },
                  autoPlay: H,
                  playsInline: !0,
                  mediaLayoutType: X ? k.hV.STATIC : k.hV.RESPONSIVE,
                  className: l()({ [L.hidden]: e7, [L.videoInner]: !0 }),
                  controls: !1,
                  poster: null == e8 ? void 0 : e8.url,
                  disablePictureInPicture: !0,
                  onTimeUpdate: (e) => {
                    if (null != eO.current)
                      eO.current.currentTime >= eh &&
                        (e_(eO.current.currentTime + 10 + 5 * Math.random()),
                        e3(eO.current.currentTime)),
                        eO.current.currentTime >= eT &&
                          (eI(eO.current.currentTime + 1),
                          (0, x.qm)(V.id, es.taskType, eO.current.currentTime),
                          q(eO.current.currentTime)),
                        eB(V.id, eO.current.currentTime, eO.current.duration),
                        eu(
                          (eO.current.currentTime / eO.current.duration) * 100,
                        );
                  },
                  onEnded: (e) => {
                    null != eO.current &&
                      (e3(eO.current.duration + 1),
                      eB(V.id, eO.current.duration, eO.current.duration)),
                      ei(N.r.ENDED);
                  },
                  onLoadedData: (e) => {
                    ep && ef(!1);
                  },
                  onLoadedMetadata: (e) => {
                    if (null == eO.current) return;
                    if (
                      (eY(ey.timestampSec),
                      ek ? (eO.current.volume = 0) : (eO.current.volume = eA),
                      0 === eO.current.textTracks.length)
                    )
                      return;
                    let t = eO.current.textTracks[0];
                    if (((t.mode = "hidden"), null != t.cues))
                      for (let e = 0; e < t.cues.length; e++) {
                        let n = t.cues[e];
                        (0, b.JC)(n) &&
                          ((n.id = "cue-".concat(e)),
                          (n.onenter = () => eK(n)),
                          (n.onexit = () => eX(n)));
                      }
                  },
                  onWaiting: (e) => {
                    eC(!0);
                  },
                  onProgress: (e) => {
                    if (null == eO.current) return;
                    let t = [];
                    for (let e = 0; e < eO.current.buffered.length; e++) {
                      let n = eO.current.buffered.start(e),
                        r = eO.current.buffered.end(e);
                      if (!(r - n < 1))
                        t.push({
                          start: n / eO.current.duration,
                          size: (r - n) / eO.current.duration,
                        });
                    }
                    ex(t);
                  },
                  onCanPlay: eJ,
                  onCanPlayThrough: eJ,
                  onClick: () => {
                    eQ();
                  },
                  crossOrigin: "anonymous",
                  children: [
                    null != te &&
                      (0, r.jsx)("track", {
                        src: te.url,
                        label: "English",
                        kind: "captions",
                        srcLang: "en",
                        default: !0,
                      }),
                    null != e5 &&
                      (0, r.jsx)("source", { src: e5.url, type: e5.mimetype }),
                  ],
                }),
                (ep || ev) &&
                  (0, r.jsx)(d.Spinner, {
                    type: d.Spinner.Type.WANDERING_CUBES,
                    className: L.loadingSpinner,
                  }),
                eo === N.r.PAUSED && eF === N.y.LOST_FOCUS && (0, r.jsx)(M, {}),
                W &&
                  eo !== N.r.ENDED &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(d.Clickable, {
                        onClick: () => Y(!1),
                        children: (0, r.jsx)("div", {
                          className: L.transcriptOverlay,
                        }),
                      }),
                      (0, r.jsx)(a.animated.div, {
                        className: L.transcriptCont,
                        style: {
                          marginBottom: (0, a.to)([e1, e4], (e, t) =>
                            "".concat(50 * e + t, "px"),
                          ),
                        },
                        children: (0, r.jsx)(j.K, {
                          quest: V,
                          onClose: () => {
                            Y(!1),
                              (0, g._3)({
                                questId: V.id,
                                questContent: S.jn.VIDEO_MODAL,
                                questContentCTA: g.jZ.TRANSCRIPT_DISABLE,
                              });
                          },
                        }),
                      }),
                    ],
                  }),
                eo === N.r.ENDED &&
                  (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(F, {
                      title:
                        null !==
                          (U =
                            null === (c = V.config.videoMetadata) ||
                            void 0 === c
                              ? void 0
                              : c.messages.videoEndCtaTitle) && void 0 !== U
                          ? U
                          : A.intl.string(A.t.iiTtpK),
                      subtitle:
                        null !==
                          (w =
                            null === (u = V.config.videoMetadata) ||
                            void 0 === u
                              ? void 0
                              : u.messages.videoEndCtaSubtitle) && void 0 !== w
                          ? w
                          : A.intl.string(A.t.mxaHf3),
                      icon: d.LinkExternalMediumIcon,
                      className: L.endScreenPanelRight,
                      onClick: () => {
                        (0, g._3)({
                          questId: V.id,
                          questContent: S.jn.VIDEO_MODAL,
                          questContentCTA: g.jZ.LEARN_MORE,
                        }),
                          (0, E.FE)(V, {
                            content: S.jn.VIDEO_MODAL,
                            ctaContent: g.jZ.LEARN_MORE,
                          });
                      },
                    }),
                  }),
                (0, r.jsx)(a.animated.div, {
                  className: L.videoFooterContGradient,
                  style: {
                    opacity: (0, a.to)(
                      [e1.to({ range: [0, 1], output: [0, 1] })],
                      (e) => "".concat(e),
                    ),
                  },
                }),
                (0, r.jsx)(
                  "div",
                  {
                    className: l()(L.playPausePopCont, {
                      [L.play]: eo === N.r.PLAYING,
                      [L.pause]: eo === N.r.PAUSED,
                    }),
                    children:
                      eo === N.r.PLAYING
                        ? (0, r.jsx)(d.PlayIcon, {
                            className: L.playPausePopIcon,
                          })
                        : (0, r.jsx)(d.PauseIcon, {
                            className: L.playPausePopIcon,
                          }),
                  },
                  eo,
                ),
                Q &&
                  null != eU &&
                  (0, r.jsx)(a.animated.div, {
                    className: L.captionContainer,
                    ref: e9,
                    style: {
                      translateY: (0, a.to)(
                        [e1.to({ range: [0, 1], output: [0, -50] })],
                        (e) => "".concat(e, "px"),
                      ),
                    },
                    children: (0, r.jsx)(d.Text, {
                      variant: "text-lg/semibold",
                      color: "always-white",
                      className: L.captionText,
                      children: eU.text,
                    }),
                  }),
                (0, r.jsxs)(a.animated.div, {
                  className: L.videoFooterCont,
                  style: {
                    paddingLeft: (0, a.to)(
                      [e1.to({ range: [0, 1], output: [0, 25] })],
                      (e) => "".concat(e, "px"),
                    ),
                    paddingRight: (0, a.to)(
                      [e1.to({ range: [0, 1], output: [0, 25] })],
                      (e) => "".concat(e, "px"),
                    ),
                    height: (0, a.to)(
                      [e1.to({ range: [0, 1], output: [0, 50] })],
                      (e) => "".concat(e, "px"),
                    ),
                  },
                  children: [
                    (0, r.jsx)(I.Z, {
                      percent: ec,
                      animate: !0 !== eP.current && !ed,
                      interactionEnabled: eM && eb,
                      backgroundColor: eH ? void 0 : "rgba(0, 0, 0, 0.0)",
                      preloadedBuffers: eH ? eg : void 0,
                      duration:
                        null !==
                          (G =
                            null === (f = eO.current) || void 0 === f
                              ? void 0
                              : f.duration) && void 0 !== G
                          ? G
                          : 1,
                      maxSeekableTime: eH && eb ? eG : void 0,
                      onClick: (e) => {
                        eY(e), eo === N.r.ENDED && eW(!0);
                      },
                      onScrubBack: e$,
                      onScrubForward: e0,
                    }),
                    (0, r.jsx)(a.animated.div, {
                      className: L.videoControlsCont,
                      style: {
                        paddingTop: (0, a.to)(
                          [e1.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(e * e * 12, "px"),
                        ),
                        paddingBottom: (0, a.to)(
                          [e1.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(e * e * 12, "px"),
                        ),
                        pointerEvents: (0, a.to)(
                          [e1.to({ range: [0, 1], output: [0, 1] })],
                          (e) => (e < 0.3 ? "none" : "auto"),
                        ),
                      },
                      children: (0, r.jsx)(T.Z, {
                        videoRef: eO,
                        quest: V,
                        playerState: eo,
                        animSpring: e1,
                        visible: eH,
                        seekForwardEnabled: tt,
                        hideCaptionButton: null == te,
                        handlePlayPauseBtnClick: eQ,
                        handleTranscriptBtnClick: () => {
                          !W &&
                            (null == eR ||
                              eR.questId !== V.id ||
                              eR.fetchStatus === h.iF.NONE ||
                              eR.fetchStatus === h.iF.FAILURE) &&
                            (0, x.lL)(V),
                            Y(!W),
                            (0, g._3)({
                              questId: V.id,
                              questContent: S.jn.VIDEO_MODAL,
                              questContentCTA: W
                                ? g.jZ.TRANSCRIPT_DISABLE
                                : g.jZ.TRANSCRIPT_ENABLE,
                            });
                        },
                        handleCaptionBtnClick: () => {
                          K(!Q),
                            (0, g._3)({
                              questId: V.id,
                              questContent: S.jn.VIDEO_MODAL,
                              questContentCTA: Q
                                ? g.jZ.CLOSED_CAPTIONING_DISABLE
                                : g.jZ.CLOSED_CAPTIONING_ENABLE,
                            });
                        },
                        handleFullScreenBtnClick: () => {
                          var e;
                          let t = !X,
                            n = (0, C.fn)(
                              null === (e = eO.current) || void 0 === e
                                ? void 0
                                : e.parentNode,
                              eO.current,
                            );
                          t && null != n
                            ? ((0, C.Dj)(n),
                              n.addEventListener(C.NO, ez),
                              (0, g.dA)({
                                questId: V.id,
                                event: B.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                              }))
                            : !t &&
                              null != n &&
                              (n.removeEventListener(C.NO, ez),
                              (0, g.dA)({
                                questId: V.id,
                                event: B.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                              }),
                              (0, C.Pr)(n)),
                            J(t);
                        },
                        handleSeekBackBtnClick: () => {
                          if (null != eO.current)
                            eY(Math.max(eO.current.currentTime - 10, 0)),
                              (0, g._3)({
                                questId: V.id,
                                questContent: S.jn.VIDEO_MODAL,
                                questContentCTA: g.jZ.SEEK_BACKWARD,
                              });
                        },
                        handleSeekForwardBtnClick: () => {
                          if (null != eO.current && !!tt)
                            eY(Math.min(eO.current.currentTime + 10, eG)),
                              (0, g._3)({
                                questId: V.id,
                                questContent: S.jn.VIDEO_MODAL,
                                questContentCTA: g.jZ.SEEK_FORWARD,
                              });
                        },
                        handleControlBarPendingInteraction: eN,
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
          return s;
        },
        xU: function () {
          return c;
        },
      }),
        n(47120);
      var r = n(192379),
        o = n(442837),
        i = n(434650),
        l = n(110924),
        a = n(451478);
      function s() {
        let [e, t] = r.useState(!1),
          n = e !== (0, l.Z)(e);
        return {
          visible: e,
          visibleChanged: n,
          targetRef: (0, i.O)((e) => t(e), 0.6),
        };
      }
      function c() {
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
        videoControlsGroupStart: "videoControlsGroupStart_c73f92",
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
//# sourceMappingURL=fddccd6367842bc384cb.js.map
