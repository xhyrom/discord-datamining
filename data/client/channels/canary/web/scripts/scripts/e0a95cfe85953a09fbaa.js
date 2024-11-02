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
          return T;
        },
        yD: function () {
          return x;
        },
      });
      var r = n(200651);
      n(192379);
      var o = n(120356),
        a = n.n(o),
        i = n(481060),
        s = n(617136),
        l = n(497505),
        c = n(918701),
        u = n(796111),
        d = n(667105),
        m = n(341907),
        p = n(604162),
        f = n(46140),
        C = n(689938),
        _ = n(128220);
      function v(e) {
        let { quest: t, taskDetails: n } = e;
        return (0, r.jsx)(i.Button, {
          className: _.cta,
          color: i.Button.Colors.BRAND,
          fullWidth: !0,
          onClick: () => {
            (0, m.openVideoQuestModal)(t);
          },
          size: i.Button.Sizes.SMALL,
          children: (0, p.F9)(n),
        });
      }
      let E = (e) => {
          let { quest: t } = e;
          return (0, r.jsx)(i.Button, {
            className: _.cta,
            size: i.Button.Sizes.SMALL,
            onClick: () =>
              (0, c.FE)(t, {
                content: l.jn.QUEST_BAR_V2,
                ctaContent: s.jZ.OPEN_GAME_LINK,
              }),
            children: C.Z.Messages.QUESTS_GET_THIS_GAME,
          });
        },
        S = (e) => {
          let { quest: t } = e;
          return (0, r.jsx)(i.Button, {
            fullWidth: !0,
            className: _.cta,
            onClick: () =>
              (0, c.gI)(
                { quest: t },
                {
                  content: l.jn.QUEST_BAR_V2,
                  ctaContent: s.jZ.CONNECT_CONSOLE,
                },
              ),
            size: i.Button.Sizes.SMALL,
            children: C.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CTA,
          });
        },
        T = (e) => {
          let {
              quest: t,
              useReducedMotion: n,
              isExpanded: o,
              className: s,
              ctaLabel: c,
              ...u
            } = e,
            m = (0, d.hf)({ quest: t, location: l.jn.QUEST_BAR_V2 });
          return (0, r.jsx)(i.ShinyButton, {
            fullWidth: !0,
            size: i.Button.Sizes.SMALL,
            onClick: m,
            pauseAnimation: n || !o,
            className: a()(_.cta, s),
            buttonShineClassName: _.shine,
            ...u,
            children: null != c ? c : C.Z.Messages.QUESTS_CLAIM_REWARD,
          });
        },
        g = (e) => {
          var t;
          let {
              quest: n,
              useReducedMotion: o,
              isExpanded: a,
              awaitingConsoleConnections: i,
              hasMadeProgress: s,
              isProgressing: d,
              activeScreen: m,
              taskDetails: p,
            } = e,
            C =
              (null === (t = n.userStatus) || void 0 === t
                ? void 0
                : t.completedAt) != null,
            _ = (0, u.P)({ location: f.dr.QUESTS_BAR }),
            g = (0, c.cr)(n);
          if (C)
            return (0, r.jsx)(T, {
              quest: n,
              useReducedMotion: o,
              isExpanded: a,
            });
          if (g) return (0, r.jsx)(v, { quest: n, taskDetails: p });
          if (m === l.LI.CONSOLE && i && !_) return (0, r.jsx)(S, { quest: n });
          else if (m !== l.LI.SELECT && !s && !d)
            return (0, r.jsx)(E, { quest: n });
          return null;
        };
      function x(e) {
        return (0, r.jsxs)("div", {
          className: _.ctaButtons,
          children: [
            e.showBackButton &&
              (0, r.jsx)(i.Button, {
                className: _.backButton,
                innerClassName: _.backButtonInner,
                look: "blank",
                grow: !1,
                fullWidth: !1,
                size: "none",
                onClick: e.onBack,
                children: (0, r.jsx)(i.ChevronSmallLeftIcon, {
                  className: _.backIcon,
                }),
              }),
            (0, r.jsx)(g, { ...e }),
          ],
        });
      }
    },
    472144: function (e, t, n) {
      var r = n(200651),
        o = n(192379),
        a = n(120356),
        i = n.n(a),
        s = n(100621),
        l = n(481060),
        c = n(569379),
        u = n(642145),
        d = n(808326);
      t.Z = o.forwardRef((e, t) => {
        let {
            quest: n,
            percentComplete: o,
            size: a = 42,
            strokeWidth: m = 3,
            glowBlur: p = 0.4,
            percentCompleteText: f,
            percentCompleteTextVariant: C = "text-lg/medium",
            children: _,
          } = e,
          v = (0, c.E)(n, o > 0),
          E = a / 2,
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
          h = { boxShadow: "0 0 30px 0px ".concat(v.glow) },
          { progressTextAnimation: I } = (0, l.useSpring)({
            progressTextAnimation: null != f && 1 !== o ? 1 : 0,
            config: u.Y,
          });
        return (0, r.jsxs)("div", {
          className: d.outer,
          ref: t,
          children: [
            (0, r.jsxs)("div", {
              className: d.inner,
              style: h,
              children: [
                _,
                (0, r.jsxs)(s.animated.div, {
                  style: { opacity: I },
                  className: i()(d.coverContent, d.progressTextWrapper),
                  children: [
                    (0, r.jsx)("div", {
                      className: i()(d.coverContent, d.progressTextOverlay),
                    }),
                    (0, r.jsx)(l.Text, {
                      variant: C,
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
                          stopColor: v.backgroundTop,
                        }),
                        (0, r.jsx)("stop", {
                          offset: "100%",
                          stopColor: v.backgroundBottom,
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
                  cx: E,
                  cy: E,
                  stroke: "url(#linear)",
                  style: N,
                }),
                (0, r.jsx)("circle", {
                  className: d.progress,
                  strokeWidth: m,
                  fill: "transparent",
                  r: S,
                  cx: E,
                  cy: E,
                  stroke: v.foreground,
                  style: x,
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
          return l;
        },
        G: function () {
          return s;
        },
      }),
        n(47120);
      var r = n(192379),
        o = n(481060),
        a = n(410030),
        i = n(113434);
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
      function l(e, t) {
        var n;
        let r = (0, i.z)(e),
          o = null !== (n = (0, a.i6)()) && void 0 !== n ? n : 0,
          s = "var(--green-330)",
          l = ["var(--background-tertiary)", "var(--interactive-normal)"],
          c = t ? l[o] : ["#828288", "#CBCDD4"][o];
        return {
          backgroundTop: c,
          backgroundBottom: t ? l[o] : ["#535356", "#8B8C95"][o],
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
          return x;
        },
      }),
        n(47120);
      var r = n(200651),
        o = n(192379),
        a = n(120356),
        i = n.n(a),
        s = n(100621),
        l = n(442837),
        c = n(692547),
        u = n(561779),
        d = n(481060),
        m = n(607070),
        p = n(184299),
        f = n(818570),
        C = n(528846),
        _ = n(604162),
        v = n(689938),
        E = n(417575);
      let S = "-:--";
      function T(e) {
        let { current: t, duration: n } = e,
          o = null != t ? (0, _.yv)(t) : S,
          a = null != n ? (0, _.yv)(n) : S;
        return (
          (o = o.padStart(a.length, "0")),
          (0, r.jsxs)("div", {
            className: i()(E.durationTimeWrapper, E.controlsBarItem),
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
                children: a,
              }),
            ],
          })
        );
      }
      function g(e) {
        let {
            iconComponent: t,
            animationTime: n,
            visible: o,
            ariaLabel: a,
            active: l,
            disabled: u,
            tooltipLabel: m,
            tooltipDelayMs: p = 1500,
            onClick: f,
          } = e,
          C = (e) =>
            (0, r.jsx)(d.Clickable, {
              ...e,
              onClick: f,
              className: i()(E.videoControlsBtnCont, {
                [E.videoControlsBtnContDisabled]: u,
              }),
              "aria-label": a,
              "aria-disabled": u,
              children: (0, r.jsx)(s.animated.div, {
                className: i()(E.videoControlsBtnCont),
                style: {
                  opacity: (0, s.to)(
                    [n.to({ range: [0, 1], output: [0, 1] })],
                    (e) => "".concat(o ? e : Math.pow(e, 8)),
                  ),
                },
                children: (0, r.jsx)(t, {
                  color: !0 !== u ? c.Z.colors.WHITE : c.Z.colors.TEXT_MUTED,
                  className: i()(E.controlsBarItem, {
                    [E.controlsBarItemActive]: l,
                    [E.videoControlsBtn]: !u,
                  }),
                }),
              }),
            });
        return null != m
          ? (0, r.jsx)(d.Tooltip, { text: m, delay: p, children: (e) => C(e) })
          : C();
      }
      function x(e) {
        var t, n;
        let {
            videoRef: a,
            playerState: _,
            animSpring: S,
            visible: x,
            seekForwardEnabled: N,
            hideCaptionButton: h,
            handlePlayPauseBtnClick: I,
            handleTranscriptBtnClick: O,
            handleCaptionBtnClick: b,
            handleFullScreenBtnClick: j,
            handleSeekBackBtnClick: L,
            handleSeekForwardBtnClick: B,
            handleControlBarPendingInteraction: k,
          } = e,
          y = (0, p.km)((e) => e.volume),
          P = (0, p.km)((e) => e.setVolume),
          R = (0, p.km)((e) => e.muted),
          D = (0, p.km)((e) => e.setMuted),
          M = (0, p.km)((e) => e.transcriptEnabled),
          A = (0, p.km)((e) => e.captionEnabled),
          Z = (0, p.km)((e) => e.fullScreenEnabled),
          U = (0, l.e7)([m.Z], () => m.Z.useReducedMotion),
          [G, V] = o.useState(R ? 0 : y),
          [F, w] = o.useState(!1),
          [H, Q] = o.useState(!1),
          [{ volumeAnimSpring: z }, Y] = (0, d.useSpring)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
          })),
          W = (e) => {
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
            Y({ volumeAnimSpring: H || F ? 1 : 0, immediate: U }),
            () => {
              z.stop();
            }
          ),
          [H, F, Y, U, z],
        );
        let X =
            0 === G
              ? d.VoiceXIcon
              : G < 0.5
                ? d.VoiceLowIcon
                : d.VoiceNormalIcon,
          J =
            _ === C.r.ENDED
              ? d.RetryIcon
              : _ === C.r.PLAYING
                ? d.PauseIcon
                : d.PlayIcon,
          $ =
            _ === C.r.ENDED
              ? "Replay"
              : _ === C.r.PLAYING
                ? v.Z.Messages.PAUSE
                : v.Z.Messages.PLAY;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("div", {
              className: i()(E.videoControlsGroup, E.videoControlsGroupStart),
              children: (0, r.jsx)(g, {
                iconComponent: J,
                animationTime: S,
                visible: x,
                ariaLabel: $,
                onClick: I,
              }),
            }),
            (0, r.jsxs)(s.animated.div, {
              className: i()(E.videoControlsGroup, E.videoControlsGroupMid),
              style: {
                opacity: (0, s.to)(
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
                  className: E.volumeControlGroup,
                  children: [
                    (0, r.jsx)(g, {
                      iconComponent: X,
                      animationTime: S,
                      visible: x,
                      onClick: () => {
                        if (null != a.current)
                          0 === G ? (W(y), D(!1)) : (P(G), W(0), D(!0));
                      },
                      ariaLabel:
                        v.Z.Messages
                          .QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_CHANGE_VOLUME,
                      tooltipLabel:
                        v.Z.Messages
                          .QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_CHANGE_VOLUME,
                    }),
                    (0, r.jsx)(s.animated.div, {
                      className: E.volumeSlider,
                      style: {
                        opacity: (0, s.to)(
                          [z.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(x ? e : Math.pow(e, 8)),
                        ),
                        width: (0, s.to)(
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
                          W(e), P(e), H && (Q(!1), k(!1)), R && e > 0 && D(!1);
                        },
                        asValueChanges: (e) => {
                          W(e), !H && (Q(!0), k(!0));
                        },
                        fillStyles: { backgroundColor: c.Z.colors.WHITE.css },
                        orientation: "horizontal",
                        "aria-label":
                          v.Z.Messages
                            .QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_CHANGE_VOLUME,
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)(T, {
                  current:
                    null == a
                      ? void 0
                      : null === (t = a.current) || void 0 === t
                        ? void 0
                        : t.currentTime,
                  duration:
                    null == a
                      ? void 0
                      : null === (n = a.current) || void 0 === n
                        ? void 0
                        : n.duration,
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: i()(E.videoControlsGroup, E.videoControlsGroupEnd),
              children: [
                (0, r.jsx)(g, {
                  iconComponent: d.ArrowAngleLeftUpIcon,
                  animationTime: S,
                  visible: x,
                  onClick: L,
                  ariaLabel:
                    v.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_REWIND,
                  tooltipLabel:
                    v.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_REWIND,
                }),
                (0, r.jsx)(g, {
                  iconComponent: d.ArrowAngleRightUpIcon,
                  animationTime: S,
                  visible: x,
                  onClick: B,
                  disabled: !N,
                  ariaLabel: N
                    ? v.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_SKIP
                    : v.Z.Messages
                        .QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_SKIP_FORBIDDEN,
                  tooltipLabel: N
                    ? v.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_SKIP
                    : v.Z.Messages
                        .QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_SKIP_FORBIDDEN,
                  tooltipDelayMs: N ? 1500 : 0,
                }),
                (0, r.jsx)(g, {
                  iconComponent: d.PaperIcon,
                  animationTime: S,
                  visible: x,
                  onClick: O,
                  active: M && _ !== C.r.ENDED,
                  ariaLabel:
                    v.Z.Messages
                      .QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_TOGGLE_TRANSCRIPT,
                  tooltipLabel:
                    v.Z.Messages
                      .QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_TOGGLE_TRANSCRIPT,
                }),
                !h &&
                  (0, r.jsx)(g, {
                    iconComponent: f.c,
                    animationTime: S,
                    visible: x,
                    active: A,
                    onClick: b,
                    ariaLabel:
                      v.Z.Messages
                        .QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_TOGGLE_CAPTION,
                    tooltipLabel:
                      v.Z.Messages
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
                    v.Z.Messages
                      .QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_TOGGLE_FULLSCREEN,
                  tooltipLabel:
                    v.Z.Messages
                      .QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_TOGGLE_FULLSCREEN,
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
        a = n(390507),
        i = n(325767);
      let s = (e) => {
        var t, n;
        let {
            size: s = "md",
            width: l,
            height: c,
            color: u = o.Z.colors.INTERACTIVE_NORMAL,
            colorClass: d = "",
            ...m
          } = e,
          p = (0, a.m)(s),
          f =
            null !== (t = null == p ? void 0 : p.width) && void 0 !== t ? t : l,
          C =
            null !== (n = null == p ? void 0 : p.height) && void 0 !== n
              ? n
              : c;
        return (0, r.jsx)("svg", {
          ...(0, i.Z)(m),
          xmlns: "http://www.w3.org/2000/svg",
          width: f,
          height: C,
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
        a = n(120356),
        i = n.n(a),
        s = n(442837),
        l = n(780384),
        c = n(481060),
        u = n(607070),
        d = n(210887),
        m = n(617136),
        p = n(113434),
        f = n(569984),
        C = n(497505),
        _ = n(918701),
        v = n(475595),
        E = n(566078),
        S = n(164495),
        T = n(472144),
        g = n(644646),
        x = n(604162),
        N = n(747717),
        h = n(963123),
        I = n(46140),
        O = n(981631),
        b = n(689938),
        j = n(417575);
      function L(e) {
        var t, n, a;
        let { transitionState: f, onClose: L, quest: B, autoplay: k } = e,
          y = (0, _.il)(B),
          P = (0, s.e7)([d.Z], () => d.Z.getState().theme),
          R = (0, l.wj)(P) ? O.BRd.DARK : O.BRd.LIGHT,
          D = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
          M = o.useRef(null),
          [A, Z] = o.useState(y.progressSeconds),
          [U, G] = o.useState(!1),
          { completedRatio: V, completedRatioDisplay: F } = (0, p.I)(B),
          [w, H] = (0, x.G6)(
            b.Z.Messages.COPY_LINK,
            b.Z.Messages.LINK_COPIED,
            1700,
          ),
          Q =
            (null === (t = B.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) != null
              ? b.Z.Messages.QUESTS_MOBILE_HOME_VIEW_REWARD
              : b.Z.Messages.QUESTS_CLAIM_REWARD,
          z = o.useCallback(() => {
            (0, _.f2)(B.id, {
              content: C.jn.QUEST_SHARE_LINK,
              ctaContent: m.jZ.COPY_QUEST_URL,
            }),
              H();
          }, [B.id, H]),
          Y = o.useMemo(
            () => E.r.build(B.config).defaultReward.messages.name,
            [B],
          ),
          W = b.Z.Messages.QUESTS_VIDEO_REWARD_TOOLTIP.format({
            rewardName: Y,
          });
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("div", {
            ref: M,
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
                              (0, _.FE)(B, {
                                content: C.jn.VIDEO_QUEST_VIDEO_PLAYER,
                                ctaContent:
                                  m.jZ
                                    .VIDEO_QUEST_VIDEO_PLAYER_HEADER_GAME_LINK,
                              });
                            },
                            children: [
                              (0, r.jsx)("img", {
                                alt: B.config.messages.gameTitle,
                                className: i()(
                                  j.contentHeaderLogotype,
                                  j.accentOnHover,
                                ),
                                src: (0, v.fh)(B, v.eC.LOGO_TYPE, R).url,
                              }),
                              (0, r.jsx)(N.Z, {}),
                              (0, r.jsxs)("div", {
                                className: j.questHeading,
                                children: [
                                  (0, r.jsx)(c.Heading, {
                                    variant: "heading-md/semibold",
                                    color: "header-primary",
                                    children: b.Z.Messages.QUESTS_TITLE.format({
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
                                    questContent: C.jn.QUEST_BAR_V2,
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
                          autoplay: k,
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
                                onClick: L,
                                color: c.Button.Colors.PRIMARY,
                                size: c.Button.Sizes.MEDIUM,
                                children: b.Z.Messages.CLOSE,
                              }),
                              (0, r.jsx)(S.i0, {
                                className: j.claimBtn,
                                size: c.Button.Sizes.MEDIUM,
                                quest: B,
                                useReducedMotion: D,
                                isExpanded:
                                  (null === (n = B.userStatus) || void 0 === n
                                    ? void 0
                                    : n.completedAt) != null,
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
        let { questId: t, autoplay: n, ...o } = e,
          a = (0, s.e7)([f.Z], () => f.Z.getQuest(t));
        return null != a
          ? (0, r.jsx)(L, { ...o, quest: a, autoplay: n })
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
        a = n(120356),
        i = n.n(a),
        s = n(481060),
        l = n(393903),
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
            interactionEnabled: a,
            backgroundColor: f,
            preloadedBuffers: C,
            duration: _,
            maxSeekableTime: v,
            onClick: E,
            onScrubBack: S,
            onScrubForward: T,
          } = e,
          [g, x] = o.useState(null),
          [N, h] = o.useState(null),
          [I, O] = o.useState(null),
          [b, j] = o.useState(!1);
        o.useEffect(() => {
          if (null != g) null == v ? O(null) : O(p(v, _, g));
        }, [g, v, _]);
        let L = (0, l.y)(() => {
            if (null != L.current) x(L.current.getBoundingClientRect());
          }),
          B = (e) => {
            h(e.clientX);
          },
          k = o.useCallback(
            (e) => {
              let { key: t } = e;
              t === u.mR.ArrowLeft && null != S
                ? (e.preventDefault(), e.stopPropagation(), S())
                : t === u.mR.ArrowRight &&
                  null != T &&
                  (e.preventDefault(), e.stopPropagation(), T());
            },
            [S, T],
          ),
          y = null != N && null != g ? m(N, g, _) : 0,
          P = (0, c.yv)(y),
          R = null != g ? g.right - p((t / 100) * _, _, g) : null,
          D = null != N && null != g ? g.right - N : null,
          M = null != I && null != g ? g.right - I : null;
        return (0, r.jsxs)("div", {
          className: d.cont,
          ref: L,
          children: [
            (0, r.jsxs)(s.Clickable, {
              className: i()(d.hitboxArea, { [d.interactionEnabled]: a }),
              ignoreKeyPress: !0,
              onClick: (e) => {
                if (!!a && null != E)
                  E(m(e.clientX, e.currentTarget.getBoundingClientRect(), _));
              },
              onMouseEnter: (e) => {
                if (!!a) j(!0), B(e);
              },
              onMouseLeave: (e) => {
                if (!!a) j(!1), h(null);
              },
              onMouseMove: (e) => {
                if (!!a) b && B(e);
              },
              onKeyDown: k,
              tabIndex: a ? void 0 : -1,
              focusProps: { offset: { top: 12, bottom: 12 } },
              children: [
                null == C
                  ? void 0
                  : C.map((e) =>
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
                !a &&
                  null != M &&
                  M > 0 &&
                  (0, r.jsx)("div", {
                    className: d.seekableBar,
                    style: {
                      right: null != M ? "".concat(M, "px") : "auto",
                      opacity: null != M ? 1 : 0,
                    },
                  }),
                (0, r.jsx)(s.Progress, {
                  className: d.progress,
                  percent: t,
                  foregroundColor: "#FFFFFF",
                  backgroundColor: null != f ? f : void 0,
                  size: b ? s.Progress.Sizes.XSMALL : s.Progress.Sizes.XXSMALL,
                  animate: n,
                }),
                b &&
                  null != P &&
                  (0, r.jsx)(s.Text, {
                    className: d.timeDisplay,
                    variant: "text-xs/normal",
                    style: {
                      right: null != D ? "".concat(D - 10, "px") : "auto",
                    },
                    children: P,
                  }),
                b &&
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
        a = n(261833),
        i = n(481060),
        s = n(184299),
        l = n(417575);
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
              className: l.transcriptHeader,
              children: [
                (0, r.jsx)(i.Heading, {
                  variant: "heading-md/semibold",
                  color: "currentColor",
                  children: "Transcript",
                }),
                (0, r.jsx)(i.Clickable, {
                  onClick: c,
                  className: l.transcriptBackBtn,
                  children: (0, r.jsx)(a.D, { color: "currentColor" }),
                }),
              ],
            }),
            (0, r.jsx)(i.ScrollerAuto, {
              className: l.transcriptScroller,
              fade: !0,
              children: (0, r.jsx)("div", {
                className: l.transcriptBody,
                children:
                  (null == u ? void 0 : u.fetchStatus) === s.iF.FETCHING
                    ? (0, r.jsx)("div", {
                        className: l.transcriptBodySpinner,
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
          ],
        });
      }
    },
    528846: function (e, t, n) {
      var r, o;
      n.d(t, {
        r: function () {
          return r;
        },
      }),
        ((o = r || (r = {})).PLAYING = "playing"),
        (o.PAUSED = "paused"),
        (o.ENDED = "ended");
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
        a = n.n(o),
        i = n(417575);
      function s(e) {
        let { className: t } = e;
        return (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "2",
          height: "40",
          viewBox: "0 0 2 40",
          fill: "none",
          className: a()(i.verticalDivider, t),
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
          return V;
        },
      }),
        n(47120),
        n(653041);
      var r,
        o,
        a = n(200651),
        i = n(192379),
        s = n(120356),
        l = n.n(s),
        c = n(100621),
        u = n(442837),
        d = n(692547),
        m = n(780384),
        p = n(481060),
        f = n(607070),
        C = n(70097),
        _ = n(210887),
        v = n(866960),
        E = n(228488),
        S = n(617136),
        T = n(272008),
        g = n(497505),
        x = n(918701),
        N = n(184299),
        h = n(720293),
        I = n(881773),
        O = n(355243),
        b = n(106743),
        j = n(528846),
        L = n(604162),
        B = n(747717),
        k = n(281055),
        y = n(981631),
        P = n(217702),
        R = n(689938),
        D = n(417575);
      ((o = r || (r = {}))[(o.USER_INTERACTION = 0)] = "USER_INTERACTION"),
        (o[(o.LOST_FOCUS = 1)] = "LOST_FOCUS");
      let M = new Set([y.IyS.FIVE_G, y.IyS.FOUR_G, y.IyS.UNKNOWN]),
        A = { tension: 250, friction: 5, clamp: !0 };
      function Z() {
        let e = (0, u.e7)([_.Z], () => _.Z.getState().theme);
        return (0, a.jsx)("div", {
          className: D.pauseText,
          style: {
            background: (0, m.wj)(e)
              ? "rgba(0, 0, 0, 0.65)"
              : "rgba(255, 255, 255, 0.65)",
          },
          children: (0, a.jsx)(p.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            children: R.Z.Messages.QUESTS_VIDEO_QUEST_PAUSE_MESSAGE,
          }),
        });
      }
      function U(e) {
        let { quest: t, className: n } = e,
          r = i.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
        return null == r
          ? null
          : (0, a.jsx)("img", {
              src: r.url,
              alt: "Video thumbnail",
              className: l()(D.stillFrameImageCard, n),
            });
      }
      function G(e) {
        let { title: t, subtitle: n, icon: r, onClick: o, className: s } = e,
          c = (0, u.e7)([_.Z], () => _.Z.getState().theme),
          [f, C] = i.useState(!1),
          v = () => {
            C(!0);
          },
          E = () => {
            C(!1);
          };
        return (0, a.jsx)(p.Clickable, {
          className: l()(D.endScreenPanel, D.accentOnHover, s),
          onMouseEnter: v,
          onMouseLeave: E,
          onFocus: v,
          onBlur: E,
          onClick: o,
          style: {
            background: (0, m.wj)(c)
              ? "rgba(0, 0, 0, 0.45)"
              : "rgba(255, 255, 255, 0.55)",
          },
          children: (0, a.jsxs)("div", {
            className: D.endScreenPanelInner,
            children: [
              (0, a.jsxs)("div", {
                className: D.endScreenPanelTextCont,
                children: [
                  (0, a.jsx)(p.Heading, {
                    variant: "heading-md/semibold",
                    children: t,
                  }),
                  (0, a.jsx)(p.Heading, {
                    variant: "heading-sm/normal",
                    color: "text-normal",
                    children: n,
                  }),
                ],
              }),
              (0, a.jsx)(B.Z, {}),
              (0, a.jsx)(r, {
                size: "md",
                color: f
                  ? d.Z.colors.INTERACTIVE_ACTIVE
                  : d.Z.colors.INTERACTIVE_NORMAL,
                className: D.endScreenIcon,
              }),
            ],
          }),
        });
      }
      function V(e) {
        var t, n, r, o, s, d, m;
        let {
            quest: _,
            onOptimisticProgressUpdate: B,
            autoplay: y,
            parentTransitionState: V,
          } = e,
          F = (0, N.km)((e) => e.transcriptEnabled),
          w = (0, N.km)((e) => e.setTranscriptEnabled),
          H = (0, N.km)((e) => e.captionEnabled),
          Q = (0, N.km)((e) => e.setCaptionEnabled),
          z = (0, N.km)((e) => e.fullScreenEnabled),
          Y = (0, N.km)((e) => e.setFullScreenEnabled),
          { focused: W, focusedChanged: q } = (0, k.xU)(),
          { visible: K, visibleChanged: X, targetRef: J } = (0, k.Yy)(),
          [$, ee] = i.useState(!0 === y ? j.r.PLAYING : j.r.PAUSED),
          [et, en] = i.useState(!1),
          er = (0, x.il)(_),
          [eo, ea] = i.useState(er.percentComplete),
          [ei, es] = i.useState(!1),
          [el, ec] = i.useState(!0),
          [eu, ed] = i.useState(!1),
          [em, ep] = i.useState([]),
          [ef, eC] = i.useState(v.Z.getEffectiveConnectionSpeed()),
          [e_, ev] = i.useState(0),
          [eE, eS] = i.useState(0),
          [eT, eg] = i.useState(!1),
          [ex, eN] = i.useState(!1),
          eh = (0, N.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[_.id]) && void 0 !== t
              ? t
              : { timestampSec: 0, duration: 10 };
          }),
          eI = (0, N.km)((e) => e.setVideoProgress),
          eO = (0, N.km)((e) => e.muted),
          eb = (0, N.km)((e) => e.volume),
          ej = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
          eL = (0, i.useRef)(null),
          eB = i.useRef(!0),
          ek =
            (null === (t = _.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          ey = (0, N.km)((e) => e.transcript),
          [eP, eR] = i.useState(null),
          [eD, eM] = i.useState(null),
          eA = ek
            ? null !==
                (s =
                  null === (n = eL.current) || void 0 === n
                    ? void 0
                    : n.duration) && void 0 !== s
              ? s
              : 0
            : eh.maxTimestampSec;
        i.useLayoutEffect(() => {
          eB.current &&
            ((eB.current = !1),
            eC(v.Z.getEffectiveConnectionSpeed()),
            ek && eh.timestampSec >= eh.duration && eI(_.id, 0, eh.duration));
        }, []),
          i.useEffect(() => {
            (V === p.ModalTransitionState.HIDDEN ||
              V === p.ModalTransitionState.EXITING ||
              V === p.ModalTransitionState.EXITED ||
              (null != V && X && !K && !ek) ||
              (q && !W && !ek)) &&
              null != eL.current &&
              $ === j.r.PLAYING &&
              (eF(!1), eR(1));
          }, [V, W, q, K, X, $, ek]);
        let eZ = () => {
            en(!0);
          },
          eU = () => {
            en(!1);
          },
          eG = et || $ === j.r.PAUSED || $ === j.r.ENDED,
          eV = i.useCallback(() => {
            var e;
            let t = (0, E.fn)(
              null === (e = eL.current) || void 0 === e ? void 0 : e.parentNode,
              eL.current,
            );
            null != t &&
              !(0, E.rB)(t) &&
              (t.removeEventListener(E.NO, eV), Y(!1));
          }, [Y]);
        i.useEffect(() => {
          let e = eL.current;
          return () => {
            let t = (0, E.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(E.NO, eV);
          };
        }, [eV]);
        let eF = (e) => {
            if (null != eL.current)
              e ? (eL.current.play(), eR(null)) : eL.current.pause(),
                ee(e ? j.r.PLAYING : j.r.PAUSED);
          },
          ew = i.useCallback(
            (e) => {
              if (null != eL.current)
                es(!0),
                  (eL.current.currentTime = e),
                  eI(_.id, e, eL.current.duration);
            },
            [eL, eI, _],
          ),
          eH = () => {
            if (null != eL.current)
              switch ($) {
                case j.r.ENDED:
                  ew(0), eF(!0);
                  break;
                case j.r.PLAYING:
                  eF(!1);
                  break;
                default:
                  eF(!0);
              }
          },
          eQ = (e) => {
            eM(e);
          },
          ez = (e) => {
            eM((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
          },
          eY = (e) => {
            if (null != eL.current && $ === j.r.PLAYING)
              el && ec(!1), eu && ed(!1), eF(!0);
          };
        i.useEffect(() => {
          if (!ei) return;
          let e = setTimeout(() => {
            es(!1);
          }, 1e3);
          return () => clearTimeout(e);
        }, [ei]);
        let eW = i.useCallback(() => {
            if (null != eL.current)
              ew(Math.max(eL.current.currentTime - 10, 0));
          }, [ew]),
          eq = i.useCallback(() => {
            if (null != eL.current)
              ew(Math.min(eL.current.currentTime + 10, eL.current.duration));
          }, [ew]),
          [{ controlBarAnimSpring: eK }, eX] = (0, p.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: A,
            onStart: () => {
              eN(!1);
            },
            onRest: (e) => {
              1 === e.value && eN(!0);
            },
          })),
          eJ = (0, i.useRef)(null),
          [{ captionHeightSpring: e$ }, e0] = (0, p.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: A,
          }));
        i.useEffect(() => {
          var e, t;
          return (
            e0({
              captionHeightSpring:
                H &&
                null != eD &&
                null !==
                  (t =
                    null === (e = eJ.current) || void 0 === e
                      ? void 0
                      : e.clientHeight) &&
                void 0 !== t
                  ? t
                  : 0,
              immediate: ej,
            }),
            () => {
              e$.stop();
            }
          );
        }, [H, e0, ej, eD, e$]),
          i.useEffect(
            () => (
              eX({ controlBarAnimSpring: eG || eT ? 1 : 0, immediate: ej }),
              () => {
                eK.stop();
              }
            ),
            [eG, eX, ej, eT, eK],
          );
        let e1 = (e) => {
            !ek && (0, T.FI)(_.id, e);
          },
          e2 = $ === j.r.ENDED,
          e9 = i.useMemo(
            () =>
              M.has(ef)
                ? (0, h.z)(h.i.VIDEO_PLAYER_VIDEO, _)
                : (0, h.z)(h.i.VIDEO_PLAYER_VIDEO_LOW_RES, _),
            [ef, _],
          ),
          e6 = i.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_THUMBNAIL, _), [_]),
          e4 = i.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_CAPTION, _), [_]),
          e7 =
            ek ||
            eh.maxTimestampSec >=
              (null !==
                (d =
                  null === (r = eL.current) || void 0 === r
                    ? void 0
                    : r.currentTime) && void 0 !== d
                ? d
                : 0) +
                1;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)(p.Clickable, {
            className: D.videoCont,
            "data-fullscreen": z,
            tabIndex: -1,
            onMouseEnter: eZ,
            onMouseLeave: eU,
            onFocus: eZ,
            onBlur: eU,
            children: [
              (0, a.jsx)(U, {
                quest: _,
                className: l()({ [D.stillFrameImageCardHidden]: !e2 }),
              }),
              e2 && (0, a.jsx)("div", { className: D.videoContOverlay }),
              (0, a.jsxs)(C.Z, {
                ref: (e) => {
                  (eL.current = e), (J.current = e);
                },
                autoPlay: y,
                playsInline: !0,
                mediaLayoutType: z ? P.hV.STATIC : P.hV.RESPONSIVE,
                className: l()({ [D.hidden]: e2, [D.videoInner]: !0 }),
                controls: !1,
                poster: null == e6 ? void 0 : e6.url,
                disablePictureInPicture: !0,
                onTimeUpdate: (e) => {
                  if (null != eL.current)
                    eL.current.currentTime >= e_ &&
                      (ev(eL.current.currentTime + 10 + 5 * Math.random()),
                      e1(eL.current.currentTime)),
                      eL.current.currentTime >= eE &&
                        (eS(eL.current.currentTime + 1),
                        (0, T.qm)(_.id, er.taskType, eL.current.currentTime),
                        B(eL.current.currentTime)),
                      eI(_.id, eL.current.currentTime, eL.current.duration),
                      ea((eL.current.currentTime / eL.current.duration) * 100);
                },
                onEnded: (e) => {
                  null != eL.current &&
                    (e1(eL.current.duration + 1),
                    eI(_.id, eL.current.duration, eL.current.duration)),
                    ee(j.r.ENDED);
                },
                onLoadedData: (e) => {
                  el && ec(!1);
                },
                onLoadedMetadata: (e) => {
                  if (null == eL.current) return;
                  if (
                    (ew(eh.timestampSec),
                    eO ? (eL.current.volume = 0) : (eL.current.volume = eb),
                    0 === eL.current.textTracks.length)
                  )
                    return;
                  let t = eL.current.textTracks[0];
                  if (((t.mode = "hidden"), null != t.cues))
                    for (let e = 0; e < t.cues.length; e++) {
                      let n = t.cues[e];
                      (0, L.JC)(n) &&
                        ((n.id = "cue-".concat(e)),
                        (n.onenter = () => eQ(n)),
                        (n.onexit = () => ez(n)));
                    }
                },
                onWaiting: (e) => {
                  ed(!0);
                },
                onProgress: (e) => {
                  if (null == eL.current) return;
                  let t = [];
                  for (let e = 0; e < eL.current.buffered.length; e++) {
                    let n = eL.current.buffered.start(e),
                      r = eL.current.buffered.end(e);
                    if (!(r - n < 1))
                      t.push({
                        start: n / eL.current.duration,
                        size: (r - n) / eL.current.duration,
                      });
                  }
                  ep(t);
                },
                onCanPlay: eY,
                onCanPlayThrough: eY,
                onClick: () => {
                  eH();
                },
                crossOrigin: "anonymous",
                children: [
                  null != e4 &&
                    (0, a.jsx)("track", {
                      src: e4.url,
                      label: "English",
                      kind: "captions",
                      srcLang: "en",
                      default: !0,
                    }),
                  null != e9 &&
                    (0, a.jsx)("source", { src: e9.url, type: e9.mimetype }),
                ],
              }),
              (el || eu) &&
                (0, a.jsx)(p.Spinner, {
                  type: p.Spinner.Type.WANDERING_CUBES,
                  className: D.loadingSpinner,
                }),
              $ === j.r.PAUSED && 1 === eP && (0, a.jsx)(Z, {}),
              F &&
                $ !== j.r.ENDED &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(p.Clickable, {
                      onClick: () => w(!1),
                      children: (0, a.jsx)("div", {
                        className: D.transcriptOverlay,
                      }),
                    }),
                    (0, a.jsx)(c.animated.div, {
                      className: D.transcriptCont,
                      style: {
                        marginBottom: (0, c.to)([eK, e$], (e, t) =>
                          "".concat(50 * e + t, "px"),
                        ),
                      },
                      children: (0, a.jsx)(b.K, {
                        quest: _,
                        onClose: () => {
                          w(!1);
                        },
                      }),
                    }),
                  ],
                }),
              $ === j.r.ENDED &&
                (0, a.jsx)(a.Fragment, {
                  children: (0, a.jsx)(G, {
                    title: R.Z.Messages.QUESTS_VIDEO_END_PANEL_LEARN_TITLE,
                    subtitle:
                      R.Z.Messages.QUESTS_VIDEO_END_PANEL_LEARN_SUBTITLE,
                    icon: p.LinkExternalMediumIcon,
                    className: D.endScreenPanelRight,
                    onClick: () => {
                      (0, S._3)({
                        questId: _.id,
                        questContent: g.jn.QUEST_BAR_V2,
                        questContentCTA: S.jZ.LEARN_MORE,
                      }),
                        (0, x.FE)(_, {
                          content: g.jn.QUEST_BAR_V2,
                          ctaContent: S.jZ.LEARN_MORE,
                        });
                    },
                  }),
                }),
              (0, a.jsx)(c.animated.div, {
                className: D.videoFooterContGradient,
                style: {
                  opacity: (0, c.to)(
                    [eK.to({ range: [0, 1], output: [0, 1] })],
                    (e) => "".concat(e),
                  ),
                },
              }),
              (0, a.jsx)(
                "div",
                {
                  className: l()(D.playPausePopCont, {
                    [D.play]: $ === j.r.PLAYING,
                    [D.pause]: $ === j.r.PAUSED,
                  }),
                  children:
                    $ === j.r.PLAYING
                      ? (0, a.jsx)(p.PlayIcon, {
                          className: D.playPausePopIcon,
                        })
                      : (0, a.jsx)(p.PauseIcon, {
                          className: D.playPausePopIcon,
                        }),
                },
                $,
              ),
              H &&
                null != eD &&
                (0, a.jsx)(c.animated.div, {
                  className: D.captionContainer,
                  ref: eJ,
                  style: {
                    translateY: (0, c.to)(
                      [eK.to({ range: [0, 1], output: [0, -50] })],
                      (e) => "".concat(e, "px"),
                    ),
                  },
                  children: (0, a.jsx)(p.Text, {
                    variant: "text-lg/semibold",
                    color: "always-white",
                    className: D.captionText,
                    children: eD.text,
                  }),
                }),
              (0, a.jsxs)(c.animated.div, {
                className: D.videoFooterCont,
                style: {
                  paddingLeft: (0, c.to)(
                    [eK.to({ range: [0, 1], output: [0, 25] })],
                    (e) => "".concat(e, "px"),
                  ),
                  paddingRight: (0, c.to)(
                    [eK.to({ range: [0, 1], output: [0, 25] })],
                    (e) => "".concat(e, "px"),
                  ),
                  height: (0, c.to)(
                    [eK.to({ range: [0, 1], output: [0, 50] })],
                    (e) => "".concat(e, "px"),
                  ),
                },
                children: [
                  (0, a.jsx)(O.Z, {
                    percent: eo,
                    animate: !0 !== eB.current && !ei,
                    interactionEnabled: ek && ex,
                    backgroundColor: eG ? void 0 : "rgba(0, 0, 0, 0.0)",
                    preloadedBuffers: eG ? em : void 0,
                    duration:
                      null !==
                        (m =
                          null === (o = eL.current) || void 0 === o
                            ? void 0
                            : o.duration) && void 0 !== m
                        ? m
                        : 1,
                    maxSeekableTime: eG && ex ? eA : void 0,
                    onClick: (e) => {
                      ew(e), $ === j.r.ENDED && eF(!0);
                    },
                    onScrubBack: eW,
                    onScrubForward: eq,
                  }),
                  (0, a.jsx)(c.animated.div, {
                    className: D.videoControlsCont,
                    style: {
                      paddingTop: (0, c.to)(
                        [eK.to({ range: [0, 1], output: [0, 1] })],
                        (e) => "".concat(e * e * 12, "px"),
                      ),
                      paddingBottom: (0, c.to)(
                        [eK.to({ range: [0, 1], output: [0, 1] })],
                        (e) => "".concat(e * e * 12, "px"),
                      ),
                      pointerEvents: (0, c.to)(
                        [eK.to({ range: [0, 1], output: [0, 1] })],
                        (e) => (e < 0.3 ? "none" : "auto"),
                      ),
                    },
                    children: (0, a.jsx)(I.Z, {
                      videoRef: eL,
                      playerState: $,
                      animSpring: eK,
                      visible: eG,
                      seekForwardEnabled: e7,
                      hideCaptionButton: null == e4,
                      handlePlayPauseBtnClick: eH,
                      handleTranscriptBtnClick: () => {
                        !F &&
                          (null == ey ||
                            ey.questId !== _.id ||
                            ey.fetchStatus === N.iF.NONE ||
                            ey.fetchStatus === N.iF.FAILURE) &&
                          (0, T.lL)(_),
                          w(!F);
                      },
                      handleCaptionBtnClick: () => {
                        Q(!H);
                      },
                      handleFullScreenBtnClick: () => {
                        var e;
                        let t = !z,
                          n = (0, E.fn)(
                            null === (e = eL.current) || void 0 === e
                              ? void 0
                              : e.parentNode,
                            eL.current,
                          );
                        t && null != n
                          ? ((0, E.Dj)(n), n.addEventListener(E.NO, eV))
                          : !t &&
                            null != n &&
                            (n.removeEventListener(E.NO, eV), (0, E.Pr)(n)),
                          Y(t);
                      },
                      handleSeekBackBtnClick: () => {
                        if (null != eL.current)
                          ew(Math.max(eL.current.currentTime - 10, 0));
                      },
                      handleSeekForwardBtnClick: () => {
                        if (null != eL.current && !!e7)
                          ew(Math.min(eL.current.currentTime + 10, eA));
                      },
                      handleControlBarPendingInteraction: eg,
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    281055: function (e, t, n) {
      n.d(t, {
        Yy: function () {
          return l;
        },
        xU: function () {
          return c;
        },
      }),
        n(47120);
      var r = n(192379),
        o = n(442837),
        a = n(434650),
        i = n(110924),
        s = n(451478);
      function l() {
        let [e, t] = r.useState(!1),
          n = e !== (0, i.Z)(e);
        return {
          visible: e,
          visibleChanged: n,
          targetRef: (0, a.O)((e) => t(e), 0.6),
        };
      }
      function c() {
        let e = (0, o.e7)([s.Z], () => s.Z.isFocused()),
          t = e !== (0, i.Z)(e);
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
//# sourceMappingURL=e0a95cfe85953a09fbaa.js.map
