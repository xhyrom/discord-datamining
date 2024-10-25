"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["32249"],
  {
    796111: function (e, n, t) {
      t.d(n, {
        P: function () {
          return o;
        },
      });
      let r = (0, t(818083).B)({
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
          let { location: n, autoTrackExposure: t = !1 } = e,
            { enabled: o } = r.useExperiment(
              { location: n },
              { autoTrackExposure: t },
            );
          return o;
        };
    },
    164495: function (e, n, t) {
      t.d(n, {
        i0: function () {
          return T;
        },
        yD: function () {
          return x;
        },
      });
      var r = t(200651);
      t(192379);
      var o = t(120356),
        a = t.n(o),
        s = t(481060),
        i = t(617136),
        l = t(497505),
        c = t(918701),
        u = t(796111),
        d = t(667105),
        m = t(341907),
        p = t(604162),
        f = t(46140),
        _ = t(689938),
        C = t(128220);
      function E(e) {
        let { quest: n, taskDetails: t } = e;
        return (0, r.jsx)(s.Button, {
          className: C.cta,
          color: s.Button.Colors.BRAND,
          fullWidth: !0,
          onClick: () => {
            (0, m.openVideoQuestModal)(n);
          },
          size: s.Button.Sizes.SMALL,
          children: (0, p.F9)(t),
        });
      }
      let v = (e) => {
          let { quest: n } = e;
          return (0, r.jsx)(s.Button, {
            className: C.cta,
            size: s.Button.Sizes.SMALL,
            onClick: () =>
              (0, c.FE)(n, {
                content: l.jn.QUEST_BAR_V2,
                ctaContent: i.jZ.OPEN_GAME_LINK,
              }),
            children: _.Z.Messages.QUESTS_GET_THIS_GAME,
          });
        },
        S = (e) => {
          let { quest: n } = e;
          return (0, r.jsx)(s.Button, {
            fullWidth: !0,
            className: C.cta,
            onClick: () =>
              (0, c.gI)(
                { quest: n },
                {
                  content: l.jn.QUEST_BAR_V2,
                  ctaContent: i.jZ.CONNECT_CONSOLE,
                },
              ),
            size: s.Button.Sizes.SMALL,
            children: _.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CTA,
          });
        },
        T = (e) => {
          let {
              quest: n,
              useReducedMotion: t,
              isExpanded: o,
              className: i,
              ctaLabel: c,
              ...u
            } = e,
            m = (0, d.hf)({ quest: n, location: l.jn.QUEST_BAR_V2 });
          return (0, r.jsx)(s.ShinyButton, {
            fullWidth: !0,
            size: s.Button.Sizes.SMALL,
            onClick: m,
            pauseAnimation: t || !o,
            className: a()(C.cta, i),
            buttonShineClassName: C.shine,
            ...u,
            children: null != c ? c : _.Z.Messages.QUESTS_CLAIM_REWARD,
          });
        },
        g = (e) => {
          var n;
          let {
              quest: t,
              useReducedMotion: o,
              isExpanded: a,
              awaitingConsoleConnections: s,
              hasMadeProgress: i,
              isProgressing: d,
              activeScreen: m,
              taskDetails: p,
            } = e,
            _ =
              (null === (n = t.userStatus) || void 0 === n
                ? void 0
                : n.completedAt) != null,
            C = (0, u.P)({ location: f.dr.QUESTS_BAR }),
            g = (0, c.cr)(t);
          if (_)
            return (0, r.jsx)(T, {
              quest: t,
              useReducedMotion: o,
              isExpanded: a,
            });
          if (g) return (0, r.jsx)(E, { quest: t, taskDetails: p });
          if (m === l.LI.CONSOLE && s && !C) return (0, r.jsx)(S, { quest: t });
          else if (m !== l.LI.SELECT && !i && !d)
            return (0, r.jsx)(v, { quest: t });
          return null;
        };
      function x(e) {
        return (0, r.jsxs)("div", {
          className: C.ctaButtons,
          children: [
            e.showBackButton &&
              (0, r.jsx)(s.Button, {
                className: C.backButton,
                innerClassName: C.backButtonInner,
                look: "blank",
                grow: !1,
                fullWidth: !1,
                size: "none",
                onClick: e.onBack,
                children: (0, r.jsx)(s.ChevronSmallLeftIcon, {
                  className: C.backIcon,
                }),
              }),
            (0, r.jsx)(g, { ...e }),
          ],
        });
      }
    },
    472144: function (e, n, t) {
      var r = t(200651),
        o = t(192379),
        a = t(120356),
        s = t.n(a),
        i = t(100621),
        l = t(481060),
        c = t(569379),
        u = t(642145),
        d = t(808326);
      n.Z = o.forwardRef((e, n) => {
        let {
            quest: t,
            percentComplete: o,
            size: a = 42,
            strokeWidth: m = 3,
            glowBlur: p = 0.4,
            percentCompleteText: f,
            percentCompleteTextVariant: _ = "text-lg/medium",
            children: C,
          } = e,
          E = (0, c.E)(t, o > 0),
          v = a / 2,
          S = a / 2 - m / 2,
          T = 2 * Math.PI * S,
          g = T - o * T,
          x = {
            strokeDasharray: "".concat(T, " ").concat(T),
            strokeDashoffset: g,
          },
          N = {
            strokeDasharray: "".concat(T, " ").concat(T),
            strokeDashoffset: -o * T,
          },
          h = { boxShadow: "0 0 30px 0px ".concat(E.glow) },
          { progressTextAnimation: I } = (0, l.useSpring)({
            progressTextAnimation: null != f && 1 !== o ? 1 : 0,
            config: u.Y,
          });
        return (0, r.jsxs)("div", {
          className: d.outer,
          ref: n,
          children: [
            (0, r.jsxs)("div", {
              className: d.inner,
              style: h,
              children: [
                C,
                (0, r.jsxs)(i.animated.div, {
                  style: { opacity: I },
                  className: s()(d.coverContent, d.progressTextWrapper),
                  children: [
                    (0, r.jsx)("div", {
                      className: s()(d.coverContent, d.progressTextOverlay),
                    }),
                    (0, r.jsx)(l.Text, {
                      variant: _,
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
              height: a,
              width: a,
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
                          stopColor: E.backgroundTop,
                        }),
                        (0, r.jsx)("stop", {
                          offset: "100%",
                          stopColor: E.backgroundBottom,
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
                  cx: v,
                  cy: v,
                  stroke: "url(#linear)",
                  style: N,
                }),
                (0, r.jsx)("circle", {
                  className: d.progress,
                  strokeWidth: m,
                  fill: "transparent",
                  r: S,
                  cx: v,
                  cy: v,
                  stroke: E.foreground,
                  style: x,
                }),
              ],
            }),
          ],
        });
      });
    },
    569379: function (e, n, t) {
      t.d(n, {
        E: function () {
          return l;
        },
        G: function () {
          return i;
        },
      }),
        t(47120);
      var r = t(192379),
        o = t(481060),
        a = t(410030),
        s = t(113434);
      function i() {
        let [{ spring: e }, n] = (0, o.useSpring)(
          () => ({ spring: 0 }),
          "animate-always",
        );
        return {
          completionSpring: e,
          startCompletionAnimation: r.useCallback(() => {
            n({ spring: 1 }), n({ spring: 0, delay: 2e3 });
          }, [n]),
        };
      }
      function l(e, n) {
        var t;
        let r = (0, s.z)(e),
          o = null !== (t = (0, a.i6)()) && void 0 !== t ? t : 0,
          i = "var(--green-330)",
          l = ["var(--background-tertiary)", "var(--interactive-normal)"],
          c = n ? l[o] : ["#828288", "#CBCDD4"][o];
        return {
          backgroundTop: c,
          backgroundBottom: n ? l[o] : ["#535356", "#8B8C95"][o],
          foreground: i,
          glow: n && r ? i : "#C4C1D66E",
        };
      }
    },
    642145: function (e, n, t) {
      t.d(n, {
        Y: function () {
          return r;
        },
      });
      let r = { tension: 250, friction: 20 };
    },
    881773: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
      }),
        t(47120);
      var r = t(200651),
        o = t(192379),
        a = t(120356),
        s = t.n(a),
        i = t(100621),
        l = t(442837),
        c = t(692547),
        u = t(561779),
        d = t(481060),
        m = t(607070),
        p = t(184299),
        f = t(818570),
        _ = t(528846),
        C = t(604162),
        E = t(689938),
        v = t(417575);
      let S = "-:--";
      function T(e) {
        let { current: n, duration: t } = e,
          o = null != n ? (0, C.yv)(n) : S,
          a = null != t ? (0, C.yv)(t) : S;
        return (
          (o = o.padStart(a.length, "0")),
          (0, r.jsxs)("div", {
            className: s()(v.durationTimeWrapper, v.controlsBarItem),
            children: [
              (0, r.jsx)(d.Text, {
                variant: "text-xs/normal",
                className: v.durationTimeDisplay,
                children: o,
              }),
              (0, r.jsx)(d.Text, {
                variant: "text-xs/normal",
                className: v.durationTimeSeparator,
                children: "/",
              }),
              (0, r.jsx)(d.Text, {
                variant: "text-xs/normal",
                className: v.durationTimeDisplay,
                children: a,
              }),
            ],
          })
        );
      }
      function g(e) {
        let {
            iconComponent: n,
            animationTime: t,
            visible: o,
            ariaLabel: a,
            active: l,
            disabled: u,
            tooltipLabel: m,
            tooltipDelayMs: p = 1500,
            onClick: f,
          } = e,
          _ = (e) =>
            (0, r.jsx)(d.Clickable, {
              ...e,
              onClick: f,
              className: s()(v.videoControlsBtnCont, {
                [v.videoControlsBtnContDisabled]: u,
              }),
              "aria-label": a,
              "aria-disabled": u,
              children: (0, r.jsx)(i.animated.div, {
                className: s()(v.videoControlsBtnCont),
                style: {
                  opacity: (0, i.to)(
                    [t.to({ range: [0, 1], output: [0, 1] })],
                    (e) => "".concat(o ? e : Math.pow(e, 8)),
                  ),
                },
                children: (0, r.jsx)(n, {
                  color: !0 !== u ? c.Z.colors.WHITE : c.Z.colors.TEXT_MUTED,
                  className: s()(v.controlsBarItem, {
                    [v.controlsBarItemActive]: l,
                    [v.videoControlsBtn]: !u,
                  }),
                }),
              }),
            });
        return null != m
          ? (0, r.jsx)(d.Tooltip, { text: m, delay: p, children: (e) => _(e) })
          : _();
      }
      function x(e) {
        var n, t;
        let {
            videoRef: a,
            playerState: C,
            animSpring: S,
            visible: x,
            seekForwardEnabled: N,
            hideCaptionButton: h,
            handlePlayPauseBtnClick: I,
            handleTranscriptBtnClick: L,
            handleCaptionBtnClick: O,
            handleFullScreenBtnClick: j,
            handleSeekBackBtnClick: b,
            handleSeekForwardBtnClick: B,
            handleControlBarPendingInteraction: P,
          } = e,
          k = (0, p.km)((e) => e.volume),
          y = (0, p.km)((e) => e.setVolume),
          R = (0, p.km)((e) => e.muted),
          D = (0, p.km)((e) => e.setMuted),
          A = (0, p.km)((e) => e.transcriptEnabled),
          M = (0, p.km)((e) => e.captionEnabled),
          Z = (0, p.km)((e) => e.fullScreenEnabled),
          U = (0, l.e7)([m.Z], () => m.Z.useReducedMotion),
          [G, V] = o.useState(R ? 0 : k),
          [F, w] = o.useState(!1),
          [H, Q] = o.useState(!1),
          [{ volumeAnimSpring: z }, W] = (0, d.useSpring)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
          })),
          Y = (e) => {
            if (null != a.current)
              e !== a.current.volume && (a.current.volume = e), e !== G && V(e);
          },
          q = () => {
            w(!0);
          },
          K = () => {
            w(!1);
          };
        o.useEffect(
          () => (
            W({ volumeAnimSpring: H || F ? 1 : 0, immediate: U }),
            () => {
              z.stop();
            }
          ),
          [H, F, W, U, z],
        );
        let X =
            0 === G
              ? d.VoiceXIcon
              : G < 0.5
                ? d.VoiceLowIcon
                : d.VoiceNormalIcon,
          J =
            C === _.r.ENDED
              ? d.RetryIcon
              : C === _.r.PLAYING
                ? d.PauseIcon
                : d.PlayIcon,
          $ =
            C === _.r.ENDED
              ? "Replay"
              : C === _.r.PLAYING
                ? E.Z.Messages.PAUSE
                : E.Z.Messages.PLAY;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("div", {
              className: s()(v.videoControlsGroup, v.videoControlsGroupStart),
              children: (0, r.jsx)(g, {
                iconComponent: J,
                animationTime: S,
                visible: x,
                ariaLabel: $,
                onClick: I,
              }),
            }),
            (0, r.jsxs)(i.animated.div, {
              className: s()(v.videoControlsGroup, v.videoControlsGroupMid),
              style: {
                opacity: (0, i.to)(
                  [S.to({ range: [0, 1], output: [0, 1] })],
                  (e) => "".concat(x ? e : Math.pow(e, 8)),
                ),
              },
              children: [
                (0, r.jsxs)("div", {
                  onMouseEnter: q,
                  onMouseLeave: K,
                  onFocus: q,
                  onBlur: K,
                  className: v.volumeControlGroup,
                  children: [
                    (0, r.jsx)(g, {
                      iconComponent: X,
                      animationTime: S,
                      visible: x,
                      onClick: () => {
                        if (null != a.current)
                          0 === G ? (Y(k), D(!1)) : (y(G), Y(0), D(!0));
                      },
                      ariaLabel:
                        E.Z.Messages
                          .QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_CHANGE_VOLUME,
                      tooltipLabel:
                        E.Z.Messages
                          .QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_CHANGE_VOLUME,
                    }),
                    (0, r.jsx)(i.animated.div, {
                      className: v.volumeSlider,
                      style: {
                        opacity: (0, i.to)(
                          [z.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(x ? e : Math.pow(e, 8)),
                        ),
                        width: (0, i.to)(
                          [z.to({ range: [0, 1], output: [0, 100] })],
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
                          Y(e), y(e), H && (Q(!1), P(!1)), R && e > 0 && D(!1);
                        },
                        asValueChanges: (e) => {
                          Y(e), !H && (Q(!0), P(!0));
                        },
                        fillStyles: { backgroundColor: c.Z.colors.WHITE.css },
                        orientation: "horizontal",
                        "aria-label":
                          E.Z.Messages
                            .QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_CHANGE_VOLUME,
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)(T, {
                  current:
                    null == a
                      ? void 0
                      : null === (n = a.current) || void 0 === n
                        ? void 0
                        : n.currentTime,
                  duration:
                    null == a
                      ? void 0
                      : null === (t = a.current) || void 0 === t
                        ? void 0
                        : t.duration,
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: s()(v.videoControlsGroup, v.videoControlsGroupEnd),
              children: [
                (0, r.jsx)(g, {
                  iconComponent: d.ArrowAngleLeftUpIcon,
                  animationTime: S,
                  visible: x,
                  onClick: b,
                  ariaLabel:
                    E.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_REWIND,
                  tooltipLabel:
                    E.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_REWIND,
                }),
                (0, r.jsx)(g, {
                  iconComponent: d.ArrowAngleRightUpIcon,
                  animationTime: S,
                  visible: x,
                  onClick: B,
                  disabled: !N,
                  ariaLabel: N
                    ? E.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_SKIP
                    : E.Z.Messages
                        .QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_SKIP_FORBIDDEN,
                  tooltipLabel: N
                    ? E.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_SKIP
                    : E.Z.Messages
                        .QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_SKIP_FORBIDDEN,
                  tooltipDelayMs: N ? 1500 : 0,
                }),
                (0, r.jsx)(g, {
                  iconComponent: d.PaperIcon,
                  animationTime: S,
                  visible: x,
                  onClick: L,
                  active: A && C !== _.r.ENDED,
                  ariaLabel:
                    E.Z.Messages
                      .QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_TOGGLE_TRANSCRIPT,
                  tooltipLabel:
                    E.Z.Messages
                      .QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_TOGGLE_TRANSCRIPT,
                }),
                !h &&
                  (0, r.jsx)(g, {
                    iconComponent: f.c,
                    animationTime: S,
                    visible: x,
                    active: M,
                    onClick: O,
                    ariaLabel:
                      E.Z.Messages
                        .QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_TOGGLE_CAPTION,
                    tooltipLabel:
                      E.Z.Messages
                        .QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_TOGGLE_CAPTION,
                  }),
                (0, r.jsx)(g, {
                  iconComponent: Z
                    ? d.FullscreenExitIcon
                    : d.FullscreenEnterIcon,
                  animationTime: S,
                  visible: x,
                  onClick: j,
                  ariaLabel:
                    E.Z.Messages
                      .QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_TOGGLE_FULLSCREEN,
                  tooltipLabel:
                    E.Z.Messages
                      .QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_TOGGLE_FULLSCREEN,
                }),
              ],
            }),
          ],
        });
      }
    },
    818570: function (e, n, t) {
      t.d(n, {
        c: function () {
          return i;
        },
      });
      var r = t(200651);
      t(192379);
      var o = t(692547),
        a = t(390507),
        s = t(325767);
      let i = (e) => {
        var n, t;
        let {
            size: i = "md",
            width: l,
            height: c,
            color: u = o.Z.colors.INTERACTIVE_NORMAL,
            colorClass: d = "",
            ...m
          } = e,
          p = (0, a.m)(i),
          f =
            null !== (n = null == p ? void 0 : p.width) && void 0 !== n ? n : l,
          _ =
            null !== (t = null == p ? void 0 : p.height) && void 0 !== t
              ? t
              : c;
        return (0, r.jsx)("svg", {
          ...(0, s.Z)(m),
          xmlns: "http://www.w3.org/2000/svg",
          width: f,
          height: _,
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
    536687: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return B;
          },
        }),
        t(47120);
      var r = t(200651),
        o = t(192379),
        a = t(120356),
        s = t.n(a),
        i = t(442837),
        l = t(780384),
        c = t(481060),
        u = t(607070),
        d = t(210887),
        m = t(617136),
        p = t(113434),
        f = t(569984),
        _ = t(497505),
        C = t(918701),
        E = t(475595),
        v = t(566078),
        S = t(164495),
        T = t(472144),
        g = t(644646),
        x = t(604162),
        N = t(747717),
        h = t(963123),
        I = t(46140),
        L = t(981631),
        O = t(689938),
        j = t(417575);
      function b(e) {
        var n, t, a;
        let { transitionState: f, onClose: b, quest: B, autoplay: P } = e,
          k = (0, C.il)(B),
          y = (0, i.e7)([d.Z], () => d.Z.getState().theme),
          R = (0, l.wj)(y) ? L.BRd.DARK : L.BRd.LIGHT,
          D = (0, i.e7)([u.Z], () => u.Z.useReducedMotion),
          A = o.useRef(null),
          [M, Z] = o.useState(k.progressSeconds),
          [U, G] = o.useState(!1),
          { completedRatio: V, completedRatioDisplay: F } = (0, p.I)(B),
          [w, H] = (0, x.G6)(
            O.Z.Messages.COPY_LINK,
            O.Z.Messages.LINK_COPIED,
            1700,
          ),
          Q =
            (null === (n = B.userStatus) || void 0 === n
              ? void 0
              : n.claimedAt) != null
              ? O.Z.Messages.QUESTS_MOBILE_HOME_VIEW_REWARD
              : O.Z.Messages.QUESTS_CLAIM_REWARD,
          z = o.useCallback(() => {
            (0, C.f2)(B.id, {
              content: _.jn.QUEST_SHARE_LINK,
              ctaContent: m.jZ.COPY_QUEST_URL,
            }),
              H();
          }, [B.id, H]),
          W = o.useMemo(
            () => v.r.build(B.config).defaultReward.messages.name,
            [B],
          ),
          Y = O.Z.Messages.QUESTS_VIDEO_REWARD_TOOLTIP.format({
            rewardName: W,
          });
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("div", {
            ref: A,
            children: (0, r.jsx)(c.ModalRoot, {
              transitionState: f,
              size: c.ModalSize.LARGE,
              className: j.modalRoot,
              children: (0, r.jsx)("div", {
                className: j.modalBg,
                children: (0, r.jsx)("div", {
                  className: j.modalBody,
                  children: (0, r.jsxs)("div", {
                    className: j.modalContent,
                    children: [
                      (0, r.jsxs)("div", {
                        className: j.contentHeader,
                        children: [
                          (0, r.jsxs)(c.Clickable, {
                            className: j.contentHeaderGameInfo,
                            onClick: () => {
                              (0, C.FE)(B, {
                                content: _.jn.VIDEO_QUEST_VIDEO_PLAYER,
                                ctaContent:
                                  m.jZ
                                    .VIDEO_QUEST_VIDEO_PLAYER_HEADER_GAME_LINK,
                              });
                            },
                            children: [
                              (0, r.jsx)("img", {
                                alt: B.config.messages.gameTitle,
                                className: s()(
                                  j.contentHeaderLogotype,
                                  j.accentOnHover,
                                ),
                                src: (0, E.fh)(B, E.Bd.LOGO_TYPE, R).url,
                              }),
                              (0, r.jsx)(N.Z, {}),
                              (0, r.jsxs)("div", {
                                className: j.questHeading,
                                children: [
                                  (0, r.jsx)(c.Heading, {
                                    variant: "heading-md/semibold",
                                    color: "header-primary",
                                    children: O.Z.Messages.QUESTS_TITLE.format({
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
                            text: Y,
                            onTooltipShow: () => {
                              G(!0);
                            },
                            onTooltipHide: () => {
                              G(!1);
                            },
                            children: (e) =>
                              (0, r.jsx)(c.Clickable, {
                                className: j.progressCont,
                                ...e,
                                children: (0, r.jsx)(T.Z, {
                                  quest: B,
                                  size: 48,
                                  percentComplete: V,
                                  percentCompleteText: U ? F : void 0,
                                  percentCompleteTextVariant: "text-sm/medium",
                                  children: (0, r.jsx)(g.Z, {
                                    className: j.questProgressRewardTile,
                                    quest: B,
                                    questContent: _.jn.QUEST_BAR_V2,
                                    autoplay: !1,
                                    location:
                                      I.dr.VIDEO_QUEST_VIDEO_PLAYER_HEADER,
                                  }),
                                }),
                              }),
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: j.videoPanel,
                        children: (0, r.jsx)(h.Z, {
                          quest: B,
                          parentTransitionState: f,
                          onOptimisticProgressUpdate: Z,
                          onClose: b,
                          autoplay: P,
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className: j.contentFooter,
                        children: [
                          (0, r.jsx)(c.Button, {
                            color: c.Button.Colors.PRIMARY,
                            onClick: z,
                            size: c.Button.Sizes.MEDIUM,
                            className: j.copyLinkBtn,
                            children: w,
                          }),
                          (0, r.jsxs)("div", {
                            className: j.contentFooterButtonCont,
                            children: [
                              (0, r.jsx)(c.Button, {
                                onClick: b,
                                color: c.Button.Colors.PRIMARY,
                                size: c.Button.Sizes.MEDIUM,
                                children: O.Z.Messages.CLOSE,
                              }),
                              (0, r.jsx)(S.i0, {
                                className: j.claimBtn,
                                size: c.Button.Sizes.MEDIUM,
                                quest: B,
                                useReducedMotion: D,
                                isExpanded:
                                  (null === (t = B.userStatus) || void 0 === t
                                    ? void 0
                                    : t.completedAt) != null,
                                disabled:
                                  (null === (a = B.userStatus) || void 0 === a
                                    ? void 0
                                    : a.completedAt) == null,
                                ctaLabel: Q,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          }),
        });
      }
      function B(e) {
        let { questId: n, autoplay: t, ...o } = e,
          a = (0, i.e7)([f.Z], () => f.Z.getQuest(n));
        return null != a
          ? (0, r.jsx)(b, { ...o, quest: a, autoplay: t })
          : null;
      }
    },
    355243: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      }),
        t(47120);
      var r = t(200651),
        o = t(192379),
        a = t(120356),
        s = t.n(a),
        i = t(481060),
        l = t(393903),
        c = t(604162),
        u = t(420212),
        d = t(504446);
      function m(e, n, t) {
        return t * (Math.max(e - n.left, 0) / n.width);
      }
      function p(e, n, t) {
        return t.left + (e / n) * t.width;
      }
      function f(e) {
        let {
            percent: n,
            animate: t,
            interactionEnabled: a,
            backgroundColor: f,
            preloadedBuffers: _,
            duration: C,
            maxSeekableTime: E,
            onClick: v,
            onScrubBack: S,
            onScrubForward: T,
          } = e,
          [g, x] = o.useState(null),
          [N, h] = o.useState(null),
          [I, L] = o.useState(null),
          [O, j] = o.useState(!1);
        o.useEffect(() => {
          if (null != g) null == E ? L(null) : L(p(E, C, g));
        }, [g, E, C]);
        let b = (0, l.y)(() => {
            if (null != b.current) x(b.current.getBoundingClientRect());
          }),
          B = (e) => {
            h(e.clientX);
          },
          P = o.useCallback(
            (e) => {
              let { key: n } = e;
              n === u.mR.ArrowLeft && null != S
                ? (e.preventDefault(), e.stopPropagation(), S())
                : n === u.mR.ArrowRight &&
                  null != T &&
                  (e.preventDefault(), e.stopPropagation(), T());
            },
            [S, T],
          ),
          k = null != N && null != g ? m(N, g, C) : 0,
          y = (0, c.yv)(k),
          R = null != g ? g.right - p((n / 100) * C, C, g) : null,
          D = null != N && null != g ? g.right - N : null,
          A = null != I && null != g ? g.right - I : null;
        return (0, r.jsxs)("div", {
          className: d.cont,
          ref: b,
          children: [
            (0, r.jsxs)(i.Clickable, {
              className: s()(d.hitboxArea, { [d.interactionEnabled]: a }),
              ignoreKeyPress: !0,
              onClick: (e) => {
                if (!!a && null != v)
                  v(m(e.clientX, e.currentTarget.getBoundingClientRect(), C));
              },
              onMouseEnter: (e) => {
                if (!!a) j(!0), B(e);
              },
              onMouseLeave: (e) => {
                if (!!a) j(!1), h(null);
              },
              onMouseMove: (e) => {
                if (!!a) O && B(e);
              },
              onKeyDown: P,
              tabIndex: a ? void 0 : -1,
              focusProps: { offset: { top: 12, bottom: 12 } },
              children: [
                null == _
                  ? void 0
                  : _.map((e) =>
                      (0, r.jsx)(
                        "div",
                        {
                          className: s()(d.buffer, { [d.bufferHovered]: O }),
                          style: {
                            width: "".concat(100 * e.size, "%"),
                            left: "".concat(100 * e.start, "%"),
                          },
                        },
                        "".concat(e.start, ":").concat(e.size),
                      ),
                    ),
                !a &&
                  null != A &&
                  A > 0 &&
                  (0, r.jsx)("div", {
                    className: d.seekableBar,
                    style: {
                      right: null != A ? "".concat(A, "px") : "auto",
                      opacity: null != A ? 1 : 0,
                    },
                  }),
                (0, r.jsx)(i.Progress, {
                  className: d.progress,
                  percent: n,
                  foregroundColor: "#FFFFFF",
                  backgroundColor: null != f ? f : void 0,
                  size: O ? i.Progress.Sizes.XSMALL : i.Progress.Sizes.XXSMALL,
                  animate: t,
                }),
                O &&
                  null != y &&
                  (0, r.jsx)(i.Text, {
                    className: d.timeDisplay,
                    variant: "text-xs/normal",
                    style: {
                      right: null != D ? "".concat(D - 10, "px") : "auto",
                    },
                    children: y,
                  }),
                O &&
                  a &&
                  (0, r.jsx)("div", {
                    className: d.grabber,
                    style: {
                      right: null != R ? "".concat(R - 6, "px") : "auto",
                    },
                  }),
              ],
            }),
            (0, r.jsx)("div", {
              className: d.progressGlow,
              style: { width: "".concat(n, "%") },
            }),
          ],
        });
      }
    },
    106743: function (e, n, t) {
      t.d(n, {
        K: function () {
          return c;
        },
      });
      var r = t(200651),
        o = t(192379),
        a = t(261833),
        s = t(481060),
        i = t(184299),
        l = t(417575);
      function c(e) {
        var n;
        let { quest: t, onClose: c } = e,
          u = (0, i.km)((e) => e.transcript),
          d =
            (null == u ? void 0 : u.questId) === t.id &&
            (null == u ? void 0 : u.fetchStatus) === i.iF.SUCCESS &&
            null !== (n = u.text) &&
            void 0 !== n
              ? n
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
              className: l.transcriptHeader,
              children: [
                (0, r.jsx)(s.Heading, {
                  variant: "heading-md/semibold",
                  color: "currentColor",
                  children: "Transcript",
                }),
                (0, r.jsx)(s.Clickable, {
                  onClick: c,
                  className: l.transcriptBackBtn,
                  children: (0, r.jsx)(a.D, { color: "currentColor" }),
                }),
              ],
            }),
            (0, r.jsx)(s.ScrollerAuto, {
              className: l.transcriptScroller,
              fade: !0,
              children: (0, r.jsx)("div", {
                className: l.transcriptBody,
                children:
                  (null == u ? void 0 : u.fetchStatus) === i.iF.FETCHING
                    ? (0, r.jsx)("div", {
                        className: l.transcriptBodySpinner,
                        children: (0, r.jsx)(s.Spinner, {
                          type: s.Spinner.Type.WANDERING_CUBES,
                        }),
                      })
                    : (0, r.jsx)(s.Heading, {
                        variant: "heading-md/normal",
                        color: "text-muted",
                        children: m.map((e, n) =>
                          (0, r.jsx)("p", { children: e }, n),
                        ),
                      }),
              }),
            }),
          ],
        });
      }
    },
    528846: function (e, n, t) {
      var r, o;
      t.d(n, {
        r: function () {
          return r;
        },
      }),
        ((o = r || (r = {})).PLAYING = "playing"),
        (o.PAUSED = "paused"),
        (o.ENDED = "ended");
    },
    747717: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var r = t(200651);
      t(192379);
      var o = t(120356),
        a = t.n(o),
        s = t(417575);
      function i(e) {
        let { className: n } = e;
        return (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "2",
          height: "40",
          viewBox: "0 0 2 40",
          fill: "none",
          className: a()(s.verticalDivider, n),
          children: (0, r.jsx)("path", {
            d: "M1 0V40",
            stroke: "#4E5058",
            strokeOpacity: "0.3",
            strokeWidth: "2",
          }),
        });
      }
    },
    963123: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return w;
        },
      }),
        t(47120),
        t(653041);
      var r,
        o,
        a = t(200651),
        s = t(192379),
        i = t(120356),
        l = t.n(i),
        c = t(100621),
        u = t(442837),
        d = t(692547),
        m = t(780384),
        p = t(481060),
        f = t(607070),
        _ = t(70097),
        C = t(210887),
        E = t(866960),
        v = t(228488),
        S = t(617136),
        T = t(272008),
        g = t(497505),
        x = t(918701),
        N = t(184299),
        h = t(720293),
        I = t(341907),
        L = t(881773),
        O = t(355243),
        j = t(106743),
        b = t(528846),
        B = t(604162),
        P = t(747717),
        k = t(281055),
        y = t(46140),
        R = t(981631),
        D = t(217702),
        A = t(689938),
        M = t(417575);
      ((o = r || (r = {}))[(o.USER_INTERACTION = 0)] = "USER_INTERACTION"),
        (o[(o.LOST_FOCUS = 1)] = "LOST_FOCUS");
      let Z = new Set([R.IyS.FIVE_G, R.IyS.FOUR_G, R.IyS.UNKNOWN]),
        U = { tension: 250, friction: 5, clamp: !0 };
      function G() {
        let e = (0, u.e7)([C.Z], () => C.Z.getState().theme);
        return (0, a.jsx)("div", {
          className: M.pauseText,
          style: {
            background: (0, m.wj)(e)
              ? "rgba(0, 0, 0, 0.65)"
              : "rgba(255, 255, 255, 0.65)",
          },
          children: (0, a.jsx)(p.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            children: A.Z.Messages.QUESTS_VIDEO_QUEST_PAUSE_MESSAGE,
          }),
        });
      }
      function V(e) {
        let { quest: n, className: t } = e,
          r = s.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_THUMBNAIL, n), [n]);
        return null == r
          ? null
          : (0, a.jsx)("img", {
              src: r.url,
              alt: "Video thumbnail",
              className: l()(M.stillFrameImageCard, t),
            });
      }
      function F(e) {
        let { title: n, subtitle: t, icon: r, onClick: o, className: i } = e,
          c = (0, u.e7)([C.Z], () => C.Z.getState().theme),
          [f, _] = s.useState(!1),
          E = () => {
            _(!0);
          },
          v = () => {
            _(!1);
          };
        return (0, a.jsx)(p.Clickable, {
          className: l()(M.endScreenPanel, M.accentOnHover, i),
          onMouseEnter: E,
          onMouseLeave: v,
          onFocus: E,
          onBlur: v,
          onClick: o,
          style: {
            background: (0, m.wj)(c)
              ? "rgba(0, 0, 0, 0.45)"
              : "rgba(255, 255, 255, 0.55)",
          },
          children: (0, a.jsxs)("div", {
            className: M.endScreenPanelInner,
            children: [
              (0, a.jsxs)("div", {
                className: M.endScreenPanelTextCont,
                children: [
                  (0, a.jsx)(p.Heading, {
                    variant: "heading-md/semibold",
                    children: n,
                  }),
                  (0, a.jsx)(p.Heading, {
                    variant: "heading-sm/normal",
                    color: "text-normal",
                    children: t,
                  }),
                ],
              }),
              (0, a.jsx)(P.Z, {}),
              (0, a.jsx)(r, {
                size: "md",
                color: f
                  ? d.Z.colors.INTERACTIVE_ACTIVE
                  : d.Z.colors.INTERACTIVE_NORMAL,
                className: M.endScreenIcon,
              }),
            ],
          }),
        });
      }
      function w(e) {
        var n, t, r, o, i, d, m;
        let {
            quest: C,
            onOptimisticProgressUpdate: P,
            onClose: R,
            autoplay: w,
            parentTransitionState: H,
          } = e,
          Q = (0, N.km)((e) => e.transcriptEnabled),
          z = (0, N.km)((e) => e.setTranscriptEnabled),
          W = (0, N.km)((e) => e.captionEnabled),
          Y = (0, N.km)((e) => e.setCaptionEnabled),
          q = (0, N.km)((e) => e.fullScreenEnabled),
          K = (0, N.km)((e) => e.setFullScreenEnabled),
          { focused: X, focusedChanged: J } = (0, k.xU)(),
          { visible: $, visibleChanged: ee, targetRef: en } = (0, k.Yy)(),
          [et, er] = s.useState(!0 === w ? b.r.PLAYING : b.r.PAUSED),
          [eo, ea] = s.useState(!1),
          es = (0, x.il)(C),
          [ei, el] = s.useState(es.percentComplete),
          [ec, eu] = s.useState(!1),
          [ed, em] = s.useState(!0),
          [ep, ef] = s.useState(!1),
          [e_, eC] = s.useState([]),
          [eE, ev] = s.useState(E.Z.getEffectiveConnectionSpeed()),
          [eS, eT] = s.useState(0),
          [eg, ex] = s.useState(0),
          [eN, eh] = s.useState(!1),
          [eI, eL] = s.useState(!1),
          eO = (0, N.km)((e) => {
            var n;
            return null !== (n = e.videoProgress[C.id]) && void 0 !== n
              ? n
              : { timestampSec: 0, duration: 10 };
          }),
          ej = (0, N.km)((e) => e.setVideoProgress),
          eb = (0, N.km)((e) => e.muted),
          eB = (0, N.km)((e) => e.volume),
          eP = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
          ek = (0, s.useRef)(null),
          ey = s.useRef(!0),
          eR =
            (null === (n = C.userStatus) || void 0 === n
              ? void 0
              : n.completedAt) != null,
          eD = (0, N.km)((e) => e.transcript),
          [eA, eM] = s.useState(null),
          [eZ, eU] = s.useState(null),
          eG = eR
            ? null !==
                (i =
                  null === (t = ek.current) || void 0 === t
                    ? void 0
                    : t.duration) && void 0 !== i
              ? i
              : 0
            : eO.maxTimestampSec;
        s.useLayoutEffect(() => {
          ey.current &&
            ((ey.current = !1),
            ev(E.Z.getEffectiveConnectionSpeed()),
            eR && eO.timestampSec >= eO.duration && ej(C.id, 0, eO.duration));
        }, []),
          s.useEffect(() => {
            (H === p.ModalTransitionState.HIDDEN ||
              H === p.ModalTransitionState.EXITING ||
              H === p.ModalTransitionState.EXITED ||
              (null != H && ee && !$ && !eR) ||
              (J && !X && !eR)) &&
              null != ek.current &&
              et === b.r.PLAYING &&
              (eQ(!1), eM(1));
          }, [H, X, J, $, ee, et, eR]);
        let eV = () => {
            ea(!0);
          },
          eF = () => {
            ea(!1);
          },
          ew = eo || et === b.r.PAUSED || et === b.r.ENDED,
          eH = s.useCallback(() => {
            var e;
            let n = (0, v.fn)(
              null === (e = ek.current) || void 0 === e ? void 0 : e.parentNode,
              ek.current,
            );
            null != n &&
              !(0, v.rB)(n) &&
              (n.removeEventListener(v.NO, eH), K(!1));
          }, [K]);
        s.useEffect(() => {
          let e = ek.current;
          return () => {
            let n = (0, v.fn)(null == e ? void 0 : e.parentNode, e);
            null != n && n.removeEventListener(v.NO, eH);
          };
        }, [eH]);
        let eQ = (e) => {
            if (null != ek.current)
              e ? (ek.current.play(), eM(null)) : ek.current.pause(),
                er(e ? b.r.PLAYING : b.r.PAUSED);
          },
          ez = s.useCallback(
            (e) => {
              if (null != ek.current)
                eu(!0),
                  (ek.current.currentTime = e),
                  ej(C.id, e, ek.current.duration);
            },
            [ek, ej, C],
          ),
          eW = () => {
            if (null != ek.current)
              switch (et) {
                case b.r.ENDED:
                  ez(0), eQ(!0);
                  break;
                case b.r.PLAYING:
                  eQ(!1);
                  break;
                default:
                  eQ(!0);
              }
          },
          eY = (e) => {
            eU(e);
          },
          eq = (e) => {
            eU((n) => ((null == n ? void 0 : n.id) === e.id ? null : n));
          },
          eK = (e) => {
            if (null != ek.current && et === b.r.PLAYING)
              ed && em(!1), ep && ef(!1), eQ(!0);
          };
        s.useEffect(() => {
          if (!ec) return;
          let e = setTimeout(() => {
            eu(!1);
          }, 1e3);
          return () => clearTimeout(e);
        }, [ec]);
        let eX = s.useCallback(() => {
            if (null != ek.current)
              ez(Math.max(ek.current.currentTime - 10, 0));
          }, [ez]),
          eJ = s.useCallback(() => {
            if (null != ek.current)
              ez(Math.min(ek.current.currentTime + 10, ek.current.duration));
          }, [ez]),
          [{ controlBarAnimSpring: e$ }, e0] = (0, p.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: U,
            onStart: () => {
              eL(!1);
            },
            onRest: (e) => {
              1 === e.value && eL(!0);
            },
          })),
          e1 = (0, s.useRef)(null),
          [{ captionHeightSpring: e2 }, e9] = (0, p.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: U,
          }));
        s.useEffect(() => {
          var e, n;
          return (
            e9({
              captionHeightSpring:
                W &&
                null != eZ &&
                null !==
                  (n =
                    null === (e = e1.current) || void 0 === e
                      ? void 0
                      : e.clientHeight) &&
                void 0 !== n
                  ? n
                  : 0,
              immediate: eP,
            }),
            () => {
              e2.stop();
            }
          );
        }, [W, e9, eP, eZ, e2]),
          s.useEffect(
            () => (
              e0({ controlBarAnimSpring: ew || eN ? 1 : 0, immediate: eP }),
              () => {
                e$.stop();
              }
            ),
            [ew, e0, eP, eN, e$],
          );
        let e6 = (e) => {
            !eR && (0, T.FI)(C.id, e);
          },
          e4 = et === b.r.ENDED,
          e7 = s.useMemo(
            () =>
              Z.has(eE)
                ? (0, h.z)(h.i.VIDEO_PLAYER_VIDEO, C)
                : (0, h.z)(h.i.VIDEO_PLAYER_VIDEO_LOW_RES, C),
            [eE, C],
          ),
          e3 = s.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_THUMBNAIL, C), [C]),
          e5 = s.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_CAPTION, C), [C]),
          e8 =
            eR ||
            eO.maxTimestampSec >=
              (null !==
                (d =
                  null === (r = ek.current) || void 0 === r
                    ? void 0
                    : r.currentTime) && void 0 !== d
                ? d
                : 0) +
                1;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)(p.Clickable, {
            className: M.videoCont,
            "data-fullscreen": q,
            tabIndex: -1,
            onMouseEnter: eV,
            onMouseLeave: eF,
            onFocus: eV,
            onBlur: eF,
            children: [
              (0, a.jsx)(V, {
                quest: C,
                className: l()({ [M.stillFrameImageCardHidden]: !e4 }),
              }),
              e4 && (0, a.jsx)("div", { className: M.videoContOverlay }),
              (0, a.jsxs)(_.Z, {
                ref: (e) => {
                  (ek.current = e), (en.current = e);
                },
                autoPlay: w,
                playsInline: !0,
                mediaLayoutType: q ? D.hV.STATIC : D.hV.RESPONSIVE,
                className: l()({ [M.hidden]: e4, [M.videoInner]: !0 }),
                controls: !1,
                poster: null == e3 ? void 0 : e3.url,
                disablePictureInPicture: !0,
                onTimeUpdate: (e) => {
                  if (null != ek.current)
                    ek.current.currentTime >= eS &&
                      (eT(ek.current.currentTime + 10 + 5 * Math.random()),
                      e6(ek.current.currentTime)),
                      ek.current.currentTime >= eg &&
                        (ex(ek.current.currentTime + 1),
                        (0, T.qm)(C.id, es.taskType, ek.current.currentTime),
                        P(ek.current.currentTime)),
                      ej(C.id, ek.current.currentTime, ek.current.duration),
                      el((ek.current.currentTime / ek.current.duration) * 100);
                },
                onEnded: (e) => {
                  null != ek.current &&
                    (e6(ek.current.duration + 1),
                    ej(C.id, ek.current.duration, ek.current.duration)),
                    er(b.r.ENDED);
                },
                onLoadedData: (e) => {
                  ed && em(!1);
                },
                onLoadedMetadata: (e) => {
                  if (null == ek.current) return;
                  if (
                    (ez(eO.timestampSec),
                    eb ? (ek.current.volume = 0) : (ek.current.volume = eB),
                    0 === ek.current.textTracks.length)
                  )
                    return;
                  let n = ek.current.textTracks[0];
                  if (((n.mode = "hidden"), null != n.cues))
                    for (let e = 0; e < n.cues.length; e++) {
                      let t = n.cues[e];
                      (0, B.JC)(t) &&
                        ((t.id = "cue-".concat(e)),
                        (t.onenter = () => eY(t)),
                        (t.onexit = () => eq(t)));
                    }
                },
                onWaiting: (e) => {
                  ef(!0);
                },
                onProgress: (e) => {
                  if (null == ek.current) return;
                  let n = [];
                  for (let e = 0; e < ek.current.buffered.length; e++) {
                    let t = ek.current.buffered.start(e),
                      r = ek.current.buffered.end(e);
                    if (!(r - t < 1))
                      n.push({
                        start: t / ek.current.duration,
                        size: (r - t) / ek.current.duration,
                      });
                  }
                  eC(n);
                },
                onCanPlay: eK,
                onCanPlayThrough: eK,
                onClick: () => {
                  eW();
                },
                crossOrigin: "anonymous",
                children: [
                  null != e5 &&
                    (0, a.jsx)("track", {
                      src: e5.url,
                      label: "English",
                      kind: "captions",
                      srcLang: "en",
                      default: !0,
                    }),
                  null != e7 &&
                    (0, a.jsx)("source", { src: e7.url, type: e7.mimetype }),
                ],
              }),
              (ed || ep) &&
                (0, a.jsx)(p.Spinner, {
                  type: p.Spinner.Type.WANDERING_CUBES,
                  className: M.loadingSpinner,
                }),
              et === b.r.PAUSED && 1 === eA && (0, a.jsx)(G, {}),
              Q &&
                et !== b.r.ENDED &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(p.Clickable, {
                      onClick: () => z(!1),
                      children: (0, a.jsx)("div", {
                        className: M.transcriptOverlay,
                      }),
                    }),
                    (0, a.jsx)(c.animated.div, {
                      className: M.transcriptCont,
                      style: {
                        marginBottom: (0, c.to)([e$, e2], (e, n) =>
                          "".concat(50 * e + n, "px"),
                        ),
                      },
                      children: (0, a.jsx)(j.K, {
                        quest: C,
                        onClose: () => {
                          z(!1);
                        },
                      }),
                    }),
                  ],
                }),
              et === b.r.ENDED &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(F, {
                      title: A.Z.Messages.QUESTS_VIDEO_END_PANEL_LEARN_TITLE,
                      subtitle:
                        A.Z.Messages.QUESTS_VIDEO_END_PANEL_LEARN_SUBTITLE,
                      icon: p.LinkExternalMediumIcon,
                      className: M.endScreenPanelLeft,
                      onClick: () => {
                        (0, x.FE)(C, {
                          content: g.jn.QUEST_BAR_V2,
                          ctaContent: S.jZ.LEARN_MORE,
                        });
                      },
                    }),
                    (0, a.jsx)(F, {
                      title: A.Z.Messages.QUESTS_VIDEO_END_PANEL_REWARD_TITLE,
                      subtitle:
                        A.Z.Messages.QUESTS_VIDEO_END_PANEL_REWARD_SUBTITLE,
                      onClick: () => {
                        (0, S._3)({
                          questId: C.id,
                          questContent: g.jn.QUEST_BAR_V2,
                          questContentCTA: S.jZ.LEARN_MORE,
                        }),
                          R(),
                          (0, I.navigateToQuestHome)(
                            y.dr.QUESTS_BAR,
                            g.jn.QUEST_BAR_V2,
                          );
                      },
                      icon: p.ArrowLargeRightIcon,
                      className: M.endScreenPanelRight,
                    }),
                  ],
                }),
              (0, a.jsx)(c.animated.div, {
                className: M.videoFooterContGradient,
                style: {
                  opacity: (0, c.to)(
                    [e$.to({ range: [0, 1], output: [0, 1] })],
                    (e) => "".concat(e),
                  ),
                },
              }),
              (0, a.jsx)(
                "div",
                {
                  className: l()(M.playPausePopCont, {
                    [M.play]: et === b.r.PLAYING,
                    [M.pause]: et === b.r.PAUSED,
                  }),
                  children:
                    et === b.r.PLAYING
                      ? (0, a.jsx)(p.PlayIcon, {
                          className: M.playPausePopIcon,
                        })
                      : (0, a.jsx)(p.PauseIcon, {
                          className: M.playPausePopIcon,
                        }),
                },
                et,
              ),
              W &&
                null != eZ &&
                (0, a.jsx)(c.animated.div, {
                  className: M.captionContainer,
                  ref: e1,
                  style: {
                    translateY: (0, c.to)(
                      [e$.to({ range: [0, 1], output: [0, -50] })],
                      (e) => "".concat(e, "px"),
                    ),
                  },
                  children: (0, a.jsx)(p.Text, {
                    variant: "text-lg/semibold",
                    color: "always-white",
                    className: M.captionText,
                    children: eZ.text,
                  }),
                }),
              (0, a.jsxs)(c.animated.div, {
                className: M.videoFooterCont,
                style: {
                  paddingLeft: (0, c.to)(
                    [e$.to({ range: [0, 1], output: [0, 25] })],
                    (e) => "".concat(e, "px"),
                  ),
                  paddingRight: (0, c.to)(
                    [e$.to({ range: [0, 1], output: [0, 25] })],
                    (e) => "".concat(e, "px"),
                  ),
                  height: (0, c.to)(
                    [e$.to({ range: [0, 1], output: [0, 50] })],
                    (e) => "".concat(e, "px"),
                  ),
                },
                children: [
                  (0, a.jsx)(O.Z, {
                    percent: ei,
                    animate: !0 !== ey.current && !ec,
                    interactionEnabled: eR && eI,
                    backgroundColor: ew ? void 0 : "rgba(0, 0, 0, 0.0)",
                    preloadedBuffers: ew ? e_ : void 0,
                    duration:
                      null !==
                        (m =
                          null === (o = ek.current) || void 0 === o
                            ? void 0
                            : o.duration) && void 0 !== m
                        ? m
                        : 1,
                    maxSeekableTime: ew && eI ? eG : void 0,
                    onClick: (e) => {
                      ez(e), et === b.r.ENDED && eQ(!0);
                    },
                    onScrubBack: eX,
                    onScrubForward: eJ,
                  }),
                  (0, a.jsx)(c.animated.div, {
                    className: M.videoControlsCont,
                    style: {
                      paddingTop: (0, c.to)(
                        [e$.to({ range: [0, 1], output: [0, 1] })],
                        (e) => "".concat(e * e * 12, "px"),
                      ),
                      paddingBottom: (0, c.to)(
                        [e$.to({ range: [0, 1], output: [0, 1] })],
                        (e) => "".concat(e * e * 12, "px"),
                      ),
                      pointerEvents: (0, c.to)(
                        [e$.to({ range: [0, 1], output: [0, 1] })],
                        (e) => (e < 0.3 ? "none" : "auto"),
                      ),
                    },
                    children: (0, a.jsx)(L.Z, {
                      videoRef: ek,
                      playerState: et,
                      animSpring: e$,
                      visible: ew,
                      seekForwardEnabled: e8,
                      hideCaptionButton: null == e5,
                      handlePlayPauseBtnClick: eW,
                      handleTranscriptBtnClick: () => {
                        !Q &&
                          (null == eD ||
                            eD.questId !== C.id ||
                            eD.fetchStatus === N.iF.NONE ||
                            eD.fetchStatus === N.iF.FAILURE) &&
                          (0, T.lL)(C),
                          z(!Q);
                      },
                      handleCaptionBtnClick: () => {
                        Y(!W);
                      },
                      handleFullScreenBtnClick: () => {
                        var e;
                        let n = !q,
                          t = (0, v.fn)(
                            null === (e = ek.current) || void 0 === e
                              ? void 0
                              : e.parentNode,
                            ek.current,
                          );
                        n && null != t
                          ? ((0, v.Dj)(t), t.addEventListener(v.NO, eH))
                          : !n &&
                            null != t &&
                            (t.removeEventListener(v.NO, eH), (0, v.Pr)(t)),
                          K(n);
                      },
                      handleSeekBackBtnClick: () => {
                        if (null != ek.current)
                          ez(Math.max(ek.current.currentTime - 10, 0));
                      },
                      handleSeekForwardBtnClick: () => {
                        if (null != ek.current && !!e8)
                          ez(Math.min(ek.current.currentTime + 10, eG));
                      },
                      handleControlBarPendingInteraction: eh,
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    281055: function (e, n, t) {
      t.d(n, {
        Yy: function () {
          return l;
        },
        xU: function () {
          return c;
        },
      }),
        t(47120);
      var r = t(192379),
        o = t(442837),
        a = t(434650),
        s = t(110924),
        i = t(451478);
      function l() {
        let [e, n] = r.useState(!1),
          t = e !== (0, s.Z)(e);
        return {
          visible: e,
          visibleChanged: t,
          targetRef: (0, a.O)((e) => n(e), 0.6),
        };
      }
      function c() {
        let e = (0, o.e7)([i.Z], () => i.Z.isFocused()),
          n = e !== (0, s.Z)(e);
        return { focused: e, focusedChanged: n };
      }
    },
    128220: function (e, n, t) {
      e.exports = {
        ctaButtons: "ctaButtons_e60321",
        cta: "cta_e60321",
        shine: "shine_e60321",
        backButton: "backButton_e60321",
        backButtonInner: "backButtonInner_e60321",
        backIcon: "backIcon_e60321",
      };
    },
    808326: function (e, n, t) {
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
    417575: function (e, n, t) {
      e.exports = {
        modalRoot: "modalRoot_c73f92",
        modalBody: "modalBody_c73f92",
        modalBg: "modalBg_c73f92",
        modalContent: "modalContent_c73f92",
        videoPanel: "videoPanel_c73f92",
        videoCont: "videoCont_c73f92",
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
        endScreenPanelLeft: "endScreenPanelLeft_c73f92",
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
    504446: function (e, n, t) {
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
//# sourceMappingURL=a5a4748ef29984837a67.js.map
