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
          return S;
        },
        yD: function () {
          return x;
        },
      });
      var r = n(200651);
      n(192379);
      var o = n(120356),
        a = n.n(o),
        s = n(481060),
        l = n(617136),
        i = n(497505),
        c = n(918701),
        u = n(796111),
        d = n(667105),
        m = n(341907),
        p = n(604162),
        f = n(46140),
        C = n(689938),
        _ = n(128220);
      function E(e) {
        let { quest: t, taskDetails: n } = e;
        return (0, r.jsx)(s.Button, {
          className: _.cta,
          color: s.Button.Colors.BRAND,
          fullWidth: !0,
          onClick: () => {
            (0, m.openVideoQuestModal)(t);
          },
          size: s.Button.Sizes.SMALL,
          children: (0, p.F9)(n),
        });
      }
      let v = (e) => {
          let { quest: t } = e;
          return (0, r.jsx)(s.Button, {
            className: _.cta,
            size: s.Button.Sizes.SMALL,
            onClick: () =>
              (0, c.FE)(t, {
                content: i.jn.QUEST_BAR_V2,
                ctaContent: l.jZ.OPEN_GAME_LINK,
              }),
            children: C.Z.Messages.QUESTS_GET_THIS_GAME,
          });
        },
        T = (e) => {
          let { quest: t } = e;
          return (0, r.jsx)(s.Button, {
            fullWidth: !0,
            className: _.cta,
            onClick: () =>
              (0, c.gI)(
                { quest: t },
                {
                  content: i.jn.QUEST_BAR_V2,
                  ctaContent: l.jZ.CONNECT_CONSOLE,
                },
              ),
            size: s.Button.Sizes.SMALL,
            children: C.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CTA,
          });
        },
        S = (e) => {
          let {
              quest: t,
              useReducedMotion: n,
              isExpanded: o,
              className: l,
              ctaLabel: c,
              ...u
            } = e,
            m = (0, d.hf)({ quest: t, location: i.jn.QUEST_BAR_V2 });
          return (0, r.jsx)(s.ShinyButton, {
            fullWidth: !0,
            size: s.Button.Sizes.SMALL,
            onClick: m,
            pauseAnimation: n || !o,
            className: a()(_.cta, l),
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
              awaitingConsoleConnections: s,
              hasMadeProgress: l,
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
            return (0, r.jsx)(S, {
              quest: n,
              useReducedMotion: o,
              isExpanded: a,
            });
          if (g) return (0, r.jsx)(E, { quest: n, taskDetails: p });
          if (m === i.LI.CONSOLE && s && !_) return (0, r.jsx)(T, { quest: n });
          else if (m !== i.LI.SELECT && !l && !d)
            return (0, r.jsx)(v, { quest: n });
          return null;
        };
      function x(e) {
        return (0, r.jsxs)("div", {
          className: _.ctaButtons,
          children: [
            e.showBackButton &&
              (0, r.jsx)(s.Button, {
                className: _.backButton,
                innerClassName: _.backButtonInner,
                look: "blank",
                grow: !1,
                fullWidth: !1,
                size: "none",
                onClick: e.onBack,
                children: (0, r.jsx)(s.ChevronSmallLeftIcon, {
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
        s = n.n(a),
        l = n(100621),
        i = n(481060),
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
          E = (0, c.E)(n, o > 0),
          v = a / 2,
          T = a / 2 - m / 2,
          S = 2 * Math.PI * T,
          g = S - o * S,
          x = {
            strokeDasharray: "".concat(S, " ").concat(S),
            strokeDashoffset: g,
          },
          N = {
            strokeDasharray: "".concat(S, " ").concat(S),
            strokeDashoffset: -o * S,
          },
          h = { boxShadow: "0 0 30px 0px ".concat(E.glow) },
          { progressTextAnimation: I } = (0, i.useSpring)({
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
                (0, r.jsxs)(l.animated.div, {
                  style: { opacity: I },
                  className: s()(d.coverContent, d.progressTextWrapper),
                  children: [
                    (0, r.jsx)("div", {
                      className: s()(d.coverContent, d.progressTextOverlay),
                    }),
                    (0, r.jsx)(i.Text, {
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
                  r: T,
                  cx: v,
                  cy: v,
                  stroke: "url(#linear)",
                  style: N,
                }),
                (0, r.jsx)("circle", {
                  className: d.progress,
                  strokeWidth: m,
                  fill: "transparent",
                  r: T,
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
    569379: function (e, t, n) {
      n.d(t, {
        E: function () {
          return i;
        },
        G: function () {
          return l;
        },
      }),
        n(47120);
      var r = n(192379),
        o = n(481060),
        a = n(410030),
        s = n(113434);
      function l() {
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
      function i(e, t) {
        var n;
        let r = (0, s.z)(e),
          o = null !== (n = (0, a.i6)()) && void 0 !== n ? n : 0,
          l = "var(--green-330)",
          i = ["var(--background-tertiary)", "var(--interactive-normal)"],
          c = t ? i[o] : ["#828288", "#CBCDD4"][o];
        return {
          backgroundTop: c,
          backgroundBottom: t ? i[o] : ["#535356", "#8B8C95"][o],
          foreground: l,
          glow: t && r ? l : "#C4C1D66E",
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
        s = n.n(a),
        l = n(100621),
        i = n(442837),
        c = n(692547),
        u = n(561779),
        d = n(481060),
        m = n(607070),
        p = n(184299),
        f = n(818570),
        C = n(528846),
        _ = n(604162),
        E = n(689938),
        v = n(417575);
      let T = "-:--";
      function S(e) {
        let { current: t, duration: n } = e,
          o = null != t ? (0, _.yv)(t) : T,
          a = null != n ? (0, _.yv)(n) : T;
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
            iconComponent: t,
            animationTime: n,
            visible: o,
            ariaLabel: a,
            active: i,
            disabled: u,
            tooltipLabel: m,
            tooltipDelayMs: p = 1500,
            onClick: f,
          } = e,
          C = (e) =>
            (0, r.jsx)(d.Clickable, {
              ...e,
              onClick: f,
              className: s()(v.videoControlsBtnCont, {
                [v.videoControlsBtnContDisabled]: u,
              }),
              "aria-label": a,
              "aria-disabled": u,
              children: (0, r.jsx)(l.animated.div, {
                className: s()(v.videoControlsBtnCont),
                style: {
                  opacity: (0, l.to)(
                    [n.to({ range: [0, 1], output: [0, 1] })],
                    (e) => "".concat(o ? e : Math.pow(e, 8)),
                  ),
                },
                children: (0, r.jsx)(t, {
                  color: !0 !== u ? c.Z.colors.WHITE : c.Z.colors.TEXT_MUTED,
                  className: s()(v.controlsBarItem, {
                    [v.controlsBarItemActive]: i,
                    [v.videoControlsBtn]: !u,
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
            animSpring: T,
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
          R = (0, p.km)((e) => e.setVolume),
          y = (0, p.km)((e) => e.muted),
          D = (0, p.km)((e) => e.setMuted),
          A = (0, p.km)((e) => e.transcriptEnabled),
          M = (0, p.km)((e) => e.captionEnabled),
          Z = (0, p.km)((e) => e.fullScreenEnabled),
          U = (0, i.e7)([m.Z], () => m.Z.useReducedMotion),
          [G, V] = o.useState(y ? 0 : k),
          [w, F] = o.useState(!1),
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
            F(!0);
          },
          K = () => {
            F(!1);
          };
        o.useEffect(
          () => (
            W({ volumeAnimSpring: H || w ? 1 : 0, immediate: U }),
            () => {
              z.stop();
            }
          ),
          [H, w, W, U, z],
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
                ? E.Z.Messages.PAUSE
                : E.Z.Messages.PLAY;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("div", {
              className: s()(v.videoControlsGroup, v.videoControlsGroupStart),
              children: (0, r.jsx)(g, {
                iconComponent: J,
                animationTime: T,
                visible: x,
                ariaLabel: $,
                onClick: I,
              }),
            }),
            (0, r.jsxs)(l.animated.div, {
              className: s()(v.videoControlsGroup, v.videoControlsGroupMid),
              style: {
                opacity: (0, l.to)(
                  [T.to({ range: [0, 1], output: [0, 1] })],
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
                      animationTime: T,
                      visible: x,
                      onClick: () => {
                        if (null != a.current)
                          0 === G ? (Y(k), D(!1)) : (R(G), Y(0), D(!0));
                      },
                      ariaLabel:
                        E.Z.Messages
                          .QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_CHANGE_VOLUME,
                      tooltipLabel:
                        E.Z.Messages
                          .QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_CHANGE_VOLUME,
                    }),
                    (0, r.jsx)(l.animated.div, {
                      className: v.volumeSlider,
                      style: {
                        opacity: (0, l.to)(
                          [z.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(x ? e : Math.pow(e, 8)),
                        ),
                        width: (0, l.to)(
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
                          Y(e), R(e), H && (Q(!1), P(!1)), y && e > 0 && D(!1);
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
                (0, r.jsx)(S, {
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
              className: s()(v.videoControlsGroup, v.videoControlsGroupEnd),
              children: [
                (0, r.jsx)(g, {
                  iconComponent: d.ArrowAngleLeftUpIcon,
                  animationTime: T,
                  visible: x,
                  onClick: b,
                  ariaLabel:
                    E.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_REWIND,
                  tooltipLabel:
                    E.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_REWIND,
                }),
                (0, r.jsx)(g, {
                  iconComponent: d.ArrowAngleRightUpIcon,
                  animationTime: T,
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
                  animationTime: T,
                  visible: x,
                  onClick: L,
                  active: A && _ !== C.r.ENDED,
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
                    animationTime: T,
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
                  animationTime: T,
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
    818570: function (e, t, n) {
      n.d(t, {
        c: function () {
          return l;
        },
      });
      var r = n(200651);
      n(192379);
      var o = n(692547),
        a = n(390507),
        s = n(325767);
      let l = (e) => {
        var t, n;
        let {
            size: l = "md",
            width: i,
            height: c,
            color: u = o.Z.colors.INTERACTIVE_NORMAL,
            colorClass: d = "",
            ...m
          } = e,
          p = (0, a.m)(l),
          f =
            null !== (t = null == p ? void 0 : p.width) && void 0 !== t ? t : i,
          C =
            null !== (n = null == p ? void 0 : p.height) && void 0 !== n
              ? n
              : c;
        return (0, r.jsx)("svg", {
          ...(0, s.Z)(m),
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
            return O;
          },
        }),
        n(47120);
      var r = n(200651),
        o = n(192379),
        a = n(442837),
        s = n(780384),
        l = n(481060),
        i = n(607070),
        c = n(210887),
        u = n(617136),
        d = n(113434),
        m = n(569984),
        p = n(497505),
        f = n(918701),
        C = n(475595),
        _ = n(566078),
        E = n(164495),
        v = n(472144),
        T = n(644646),
        S = n(747717),
        g = n(963123),
        x = n(46140),
        N = n(981631),
        h = n(689938),
        I = n(417575);
      function L(e) {
        var t, n, m;
        let { transitionState: L, onClose: O, quest: j, autoplay: b } = e,
          B = (0, f.il)(j),
          P = (0, a.e7)([c.Z], () => c.Z.getState().theme),
          k = (0, s.wj)(P) ? N.BRd.DARK : N.BRd.LIGHT,
          R = (0, a.e7)([i.Z], () => i.Z.useReducedMotion),
          y = o.useRef(null),
          [D, A] = o.useState(B.progressSeconds),
          [M, Z] = o.useState(!1),
          { completedRatio: U, completedRatioDisplay: G } = (0, d.I)(j),
          V =
            (null === (t = j.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) != null
              ? h.Z.Messages.QUESTS_MOBILE_HOME_VIEW_REWARD
              : h.Z.Messages.QUESTS_CLAIM_REWARD,
          w = o.useCallback(() => {
            (0, f.f2)(j.id, {
              content: p.jn.QUEST_SHARE_LINK,
              ctaContent: u.jZ.COPY_QUEST_URL,
            }),
              (0, l.showToast)(
                (0, l.createToast)(h.Z.Messages.COPIED_LINK, l.ToastType.LINK),
              );
          }, [j.id]),
          F = o.useMemo(
            () => _.r.build(j.config).defaultReward.messages.name,
            [j],
          ),
          H = h.Z.Messages.QUESTS_VIDEO_REWARD_TOOLTIP.format({
            rewardName: F,
          });
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("div", {
            ref: y,
            children: (0, r.jsx)(l.ModalRoot, {
              transitionState: L,
              size: l.ModalSize.LARGE,
              className: I.modalRoot,
              children: (0, r.jsx)("div", {
                className: I.modalBg,
                children: (0, r.jsx)("div", {
                  className: I.modalBody,
                  children: (0, r.jsxs)("div", {
                    className: I.modalContent,
                    children: [
                      (0, r.jsxs)("div", {
                        className: I.contentHeader,
                        children: [
                          (0, r.jsxs)(l.Clickable, {
                            className: I.contentHeaderGameInfo,
                            onClick: () => {
                              (0, f.FE)(j, {
                                content: p.jn.VIDEO_QUEST_VIDEO_PLAYER,
                                ctaContent:
                                  u.jZ
                                    .VIDEO_QUEST_VIDEO_PLAYER_HEADER_GAME_LINK,
                              });
                            },
                            children: [
                              (0, r.jsx)("img", {
                                alt: j.config.messages.gameTitle,
                                className: I.contentHeaderLogotype,
                                src: (0, C.fh)(j, C.Bd.LOGO_TYPE, k).url,
                              }),
                              (0, r.jsx)(S.Z, {}),
                              (0, r.jsxs)("div", {
                                className: I.questHeading,
                                children: [
                                  (0, r.jsx)(l.Heading, {
                                    variant: "heading-md/semibold",
                                    color: "header-primary",
                                    children: h.Z.Messages.QUESTS_TITLE.format({
                                      questName: j.config.messages.questName,
                                    }),
                                  }),
                                  (0, r.jsx)(l.Text, {
                                    variant: "text-sm/medium",
                                    color: "header-secondary",
                                    children: j.config.messages.gameTitle,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsx)(l.Tooltip, {
                            position: "left",
                            text: H,
                            onTooltipShow: () => {
                              Z(!0);
                            },
                            onTooltipHide: () => {
                              Z(!1);
                            },
                            children: (e) =>
                              (0, r.jsx)(l.Clickable, {
                                className: I.progressCont,
                                ...e,
                                children: (0, r.jsx)(v.Z, {
                                  quest: j,
                                  size: 48,
                                  percentComplete: U,
                                  percentCompleteText: M ? G : void 0,
                                  percentCompleteTextVariant: "text-sm/medium",
                                  children: (0, r.jsx)(T.Z, {
                                    className: I.questProgressRewardTile,
                                    quest: j,
                                    questContent: p.jn.QUEST_BAR_V2,
                                    autoplay: !1,
                                    location:
                                      x.dr.VIDEO_QUEST_VIDEO_PLAYER_HEADER,
                                  }),
                                }),
                              }),
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: I.videoPanel,
                        children: (0, r.jsx)(g.Z, {
                          quest: j,
                          parentTransitionState: L,
                          onOptimisticProgressUpdate: A,
                          onClose: O,
                          autoplay: b,
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className: I.contentFooter,
                        children: [
                          (0, r.jsx)(l.Button, {
                            color: l.Button.Colors.PRIMARY,
                            onClick: w,
                            children: h.Z.Messages.COPY_LINK,
                          }),
                          (0, r.jsxs)("div", {
                            className: I.contentFooterButtonCont,
                            children: [
                              (0, r.jsx)(l.Button, {
                                onClick: O,
                                color: l.Button.Colors.PRIMARY,
                                size: l.Button.Sizes.MEDIUM,
                                children: h.Z.Messages.CLOSE,
                              }),
                              (0, r.jsx)(E.i0, {
                                className: I.claimBtn,
                                size: l.Button.Sizes.MEDIUM,
                                quest: j,
                                useReducedMotion: R,
                                isExpanded:
                                  (null === (n = j.userStatus) || void 0 === n
                                    ? void 0
                                    : n.completedAt) != null,
                                disabled:
                                  (null === (m = j.userStatus) || void 0 === m
                                    ? void 0
                                    : m.completedAt) == null,
                                ctaLabel: V,
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
      function O(e) {
        let { questId: t, autoplay: n, ...o } = e,
          s = (0, a.e7)([m.Z], () => m.Z.getQuest(t));
        return null != s
          ? (0, r.jsx)(L, { ...o, quest: s, autoplay: n })
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
        s = n.n(a),
        l = n(481060),
        i = n(393903),
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
            maxSeekableTime: E,
            onClick: v,
            onScrubBack: T,
            onScrubForward: S,
          } = e,
          [g, x] = o.useState(null),
          [N, h] = o.useState(null),
          [I, L] = o.useState(null),
          [O, j] = o.useState(!1);
        o.useEffect(() => {
          if (null != g) null == E ? L(null) : L(p(E, _, g));
        }, [g, E, _]);
        let b = (0, i.y)(() => {
            if (null != b.current) x(b.current.getBoundingClientRect());
          }),
          B = (e) => {
            h(e.clientX);
          },
          P = o.useCallback(
            (e) => {
              let { key: t } = e;
              t === u.mR.ArrowLeft && null != T
                ? (e.preventDefault(), e.stopPropagation(), T())
                : t === u.mR.ArrowRight &&
                  null != S &&
                  (e.preventDefault(), e.stopPropagation(), S());
            },
            [T, S],
          ),
          k = null != N && null != g ? m(N, g, _) : 0,
          R = (0, c.yv)(k),
          y = null != g ? g.right - p((t / 100) * _, _, g) : null,
          D = null != N && null != g ? g.right - N : null,
          A = null != I && null != g ? g.right - I : null;
        return (0, r.jsxs)("div", {
          className: d.cont,
          ref: b,
          children: [
            (0, r.jsxs)(l.Clickable, {
              className: s()(d.hitboxArea, { [d.interactionEnabled]: a }),
              ignoreKeyPress: !0,
              onClick: (e) => {
                if (!!a && null != v)
                  v(m(e.clientX, e.currentTarget.getBoundingClientRect(), _));
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
                null == C
                  ? void 0
                  : C.map((e) =>
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
                (0, r.jsx)(l.Progress, {
                  className: d.progress,
                  percent: t,
                  foregroundColor: "#FFFFFF",
                  backgroundColor: null != f ? f : void 0,
                  size: O ? l.Progress.Sizes.XSMALL : l.Progress.Sizes.XXSMALL,
                  animate: n,
                }),
                O &&
                  null != R &&
                  (0, r.jsx)(l.Text, {
                    className: d.timeDisplay,
                    variant: "text-xs/normal",
                    style: {
                      right: null != D ? "".concat(D - 10, "px") : "auto",
                    },
                    children: R,
                  }),
                O &&
                  a &&
                  (0, r.jsx)("div", {
                    className: d.grabber,
                    style: {
                      right: null != y ? "".concat(y - 6, "px") : "auto",
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
        s = n(481060),
        l = n(184299),
        i = n(417575);
      function c(e) {
        var t;
        let { quest: n, onClose: c } = e,
          u = (0, l.km)((e) => e.transcript),
          d =
            (null == u ? void 0 : u.questId) === n.id &&
            (null == u ? void 0 : u.fetchStatus) === l.iF.SUCCESS &&
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
              className: i.transcriptHeader,
              children: [
                (0, r.jsx)(s.Heading, {
                  variant: "heading-md/semibold",
                  color: "currentColor",
                  children: "Transcript",
                }),
                (0, r.jsx)(s.Clickable, {
                  onClick: c,
                  className: i.transcriptBackBtn,
                  children: (0, r.jsx)(a.D, { color: "currentColor" }),
                }),
              ],
            }),
            (0, r.jsx)(s.ScrollerAuto, {
              className: i.transcriptScroller,
              fade: !0,
              children: (0, r.jsx)("div", {
                className: i.transcriptBody,
                children:
                  (null == u ? void 0 : u.fetchStatus) === l.iF.FETCHING
                    ? (0, r.jsx)("div", {
                        className: i.transcriptBodySpinner,
                        children: (0, r.jsx)(s.Spinner, {
                          type: s.Spinner.Type.WANDERING_CUBES,
                        }),
                      })
                    : (0, r.jsx)(s.Heading, {
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
          return l;
        },
      });
      var r = n(200651);
      n(192379);
      var o = n(120356),
        a = n.n(o),
        s = n(417575);
      function l(e) {
        let { className: t } = e;
        return (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "2",
          height: "40",
          viewBox: "0 0 2 40",
          fill: "none",
          className: a()(s.verticalDivider, t),
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
          return F;
        },
      }),
        n(47120),
        n(653041);
      var r,
        o,
        a = n(200651),
        s = n(192379),
        l = n(120356),
        i = n.n(l),
        c = n(100621),
        u = n(442837),
        d = n(692547),
        m = n(780384),
        p = n(481060),
        f = n(607070),
        C = n(70097),
        _ = n(210887),
        E = n(866960),
        v = n(228488),
        T = n(617136),
        S = n(272008),
        g = n(497505),
        x = n(918701),
        N = n(184299),
        h = n(720293),
        I = n(341907),
        L = n(881773),
        O = n(355243),
        j = n(106743),
        b = n(528846),
        B = n(604162),
        P = n(747717),
        k = n(281055),
        R = n(46140),
        y = n(981631),
        D = n(217702),
        A = n(689938),
        M = n(417575);
      ((o = r || (r = {}))[(o.USER_INTERACTION = 0)] = "USER_INTERACTION"),
        (o[(o.LOST_FOCUS = 1)] = "LOST_FOCUS");
      let Z = new Set([y.IyS.FIVE_G, y.IyS.FOUR_G, y.IyS.UNKNOWN]),
        U = { tension: 250, friction: 5, clamp: !0 };
      function G() {
        let e = (0, u.e7)([_.Z], () => _.Z.getState().theme);
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
        let { quest: t, className: n } = e,
          r = s.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
        return null == r
          ? null
          : (0, a.jsx)("img", {
              src: r.url,
              alt: "Video thumbnail",
              className: i()(M.stillFrameImageCard, n),
            });
      }
      function w(e) {
        let { title: t, subtitle: n, icon: r, onClick: o, className: l } = e,
          c = (0, u.e7)([_.Z], () => _.Z.getState().theme),
          [f, C] = s.useState(!1),
          E = () => {
            C(!0);
          },
          v = () => {
            C(!1);
          };
        return (0, a.jsx)(p.Clickable, {
          className: i()(M.endScreenPanel, l),
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
                    children: t,
                  }),
                  (0, a.jsx)(p.Heading, {
                    variant: "heading-sm/normal",
                    color: "text-normal",
                    children: n,
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
      function F(e) {
        var t, n, r, o, l, d, m;
        let {
            quest: _,
            onOptimisticProgressUpdate: P,
            onClose: y,
            autoplay: F,
            parentTransitionState: H,
          } = e,
          Q = (0, N.km)((e) => e.transcriptEnabled),
          z = (0, N.km)((e) => e.setTranscriptEnabled),
          W = (0, N.km)((e) => e.captionEnabled),
          Y = (0, N.km)((e) => e.setCaptionEnabled),
          q = (0, N.km)((e) => e.fullScreenEnabled),
          K = (0, N.km)((e) => e.setFullScreenEnabled),
          { focused: X, focusedChanged: J } = (0, k.xU)(),
          { visible: $, visibleChanged: ee, targetRef: et } = (0, k.Yy)(),
          [en, er] = s.useState(!0 === F ? b.r.PLAYING : b.r.PAUSED),
          [eo, ea] = s.useState(!1),
          es = (0, x.il)(_),
          [el, ei] = s.useState(es.percentComplete),
          [ec, eu] = s.useState(!1),
          [ed, em] = s.useState(!0),
          [ep, ef] = s.useState(!1),
          [eC, e_] = s.useState([]),
          [eE, ev] = s.useState(E.Z.getEffectiveConnectionSpeed()),
          [eT, eS] = s.useState(0),
          [eg, ex] = s.useState(0),
          [eN, eh] = s.useState(!1),
          [eI, eL] = s.useState(!1),
          eO = (0, N.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[_.id]) && void 0 !== t
              ? t
              : { timestampSec: 0, duration: 10 };
          }),
          ej = (0, N.km)((e) => e.setVideoProgress),
          eb = (0, N.km)((e) => e.muted),
          eB = (0, N.km)((e) => e.volume),
          eP = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
          ek = (0, s.useRef)(null),
          eR = s.useRef(!0),
          ey =
            (null === (t = _.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          eD = (0, N.km)((e) => e.transcript),
          [eA, eM] = s.useState(null),
          [eZ, eU] = s.useState(null),
          eG = ey
            ? null !==
                (l =
                  null === (n = ek.current) || void 0 === n
                    ? void 0
                    : n.duration) && void 0 !== l
              ? l
              : 0
            : eO.maxTimestampSec;
        s.useLayoutEffect(() => {
          eR.current &&
            ((eR.current = !1),
            ev(E.Z.getEffectiveConnectionSpeed()),
            ey && eO.timestampSec >= eO.duration && ej(_.id, 0, eO.duration));
        }, []),
          s.useEffect(() => {
            (H === p.ModalTransitionState.HIDDEN ||
              H === p.ModalTransitionState.EXITING ||
              H === p.ModalTransitionState.EXITED ||
              (null != H && ee && !$ && !ey) ||
              (J && !X && !ey)) &&
              null != ek.current &&
              en === b.r.PLAYING &&
              (eQ(!1), eM(1));
          }, [H, X, J, $, ee, en, ey]);
        let eV = () => {
            ea(!0);
          },
          ew = () => {
            ea(!1);
          },
          eF = eo || en === b.r.PAUSED || en === b.r.ENDED,
          eH = s.useCallback(() => {
            var e;
            let t = (0, v.fn)(
              null === (e = ek.current) || void 0 === e ? void 0 : e.parentNode,
              ek.current,
            );
            null != t &&
              !(0, v.rB)(t) &&
              (t.removeEventListener(v.NO, eH), K(!1));
          }, [K]);
        s.useEffect(() => {
          let e = ek.current;
          return () => {
            let t = (0, v.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(v.NO, eH);
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
                  ej(_.id, e, ek.current.duration);
            },
            [ek, ej, _],
          ),
          eW = () => {
            if (null != ek.current)
              switch (en) {
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
            eU((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
          },
          eK = (e) => {
            if (null != ek.current && en === b.r.PLAYING)
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
          var e, t;
          return (
            e9({
              captionHeightSpring:
                W &&
                null != eZ &&
                null !==
                  (t =
                    null === (e = e1.current) || void 0 === e
                      ? void 0
                      : e.clientHeight) &&
                void 0 !== t
                  ? t
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
              e0({ controlBarAnimSpring: eF || eN ? 1 : 0, immediate: eP }),
              () => {
                e$.stop();
              }
            ),
            [eF, e0, eP, eN, e$],
          );
        let e6 = (e) => {
            !ey && (0, S.FI)(_.id, e);
          },
          e4 = en === b.r.ENDED,
          e7 = s.useMemo(
            () =>
              Z.has(eE)
                ? (0, h.z)(h.i.VIDEO_PLAYER_VIDEO, _)
                : (0, h.z)(h.i.VIDEO_PLAYER_VIDEO_LOW_RES, _),
            [eE, _],
          ),
          e3 = s.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_THUMBNAIL, _), [_]),
          e5 = s.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_CAPTION, _), [_]),
          e8 =
            ey ||
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
            onMouseLeave: ew,
            onFocus: eV,
            onBlur: ew,
            children: [
              (0, a.jsx)(V, {
                quest: _,
                className: i()({ [M.stillFrameImageCardHidden]: !e4 }),
              }),
              e4 && (0, a.jsx)("div", { className: M.videoContOverlay }),
              (0, a.jsxs)(C.Z, {
                ref: (e) => {
                  (ek.current = e), (et.current = e);
                },
                autoPlay: F,
                playsInline: !0,
                mediaLayoutType: q ? D.hV.STATIC : D.hV.RESPONSIVE,
                className: i()({ [M.hidden]: e4, [M.videoInner]: !0 }),
                controls: !1,
                poster: null == e3 ? void 0 : e3.url,
                disablePictureInPicture: !0,
                onTimeUpdate: (e) => {
                  if (null != ek.current)
                    ek.current.currentTime >= eT &&
                      (eS(ek.current.currentTime + 10 + 5 * Math.random()),
                      e6(ek.current.currentTime)),
                      ek.current.currentTime >= eg &&
                        (ex(ek.current.currentTime + 1),
                        (0, S.qm)(_.id, es.taskType, ek.current.currentTime),
                        P(ek.current.currentTime)),
                      ej(_.id, ek.current.currentTime, ek.current.duration),
                      ei((ek.current.currentTime / ek.current.duration) * 100);
                },
                onEnded: (e) => {
                  null != ek.current &&
                    (e6(ek.current.duration + 1),
                    ej(_.id, ek.current.duration, ek.current.duration)),
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
                  let t = ek.current.textTracks[0];
                  if (((t.mode = "hidden"), null != t.cues))
                    for (let e = 0; e < t.cues.length; e++) {
                      let n = t.cues[e];
                      (0, B.JC)(n) &&
                        ((n.id = "cue-".concat(e)),
                        (n.onenter = () => eY(n)),
                        (n.onexit = () => eq(n)));
                    }
                },
                onWaiting: (e) => {
                  ef(!0);
                },
                onProgress: (e) => {
                  if (null == ek.current) return;
                  let t = [];
                  for (let e = 0; e < ek.current.buffered.length; e++) {
                    let n = ek.current.buffered.start(e),
                      r = ek.current.buffered.end(e);
                    if (!(r - n < 1))
                      t.push({
                        start: n / ek.current.duration,
                        size: (r - n) / ek.current.duration,
                      });
                  }
                  e_(t);
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
              en === b.r.PAUSED && 1 === eA && (0, a.jsx)(G, {}),
              Q &&
                en !== b.r.ENDED &&
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
                        marginBottom: (0, c.to)([e$, e2], (e, t) =>
                          "".concat(50 * e + t, "px"),
                        ),
                      },
                      children: (0, a.jsx)(j.K, {
                        quest: _,
                        onClose: () => {
                          z(!1);
                        },
                      }),
                    }),
                  ],
                }),
              en === b.r.ENDED &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(w, {
                      title: A.Z.Messages.QUESTS_VIDEO_END_PANEL_LEARN_TITLE,
                      subtitle:
                        A.Z.Messages.QUESTS_VIDEO_END_PANEL_LEARN_SUBTITLE,
                      icon: p.LinkExternalMediumIcon,
                      className: M.endScreenPanelLeft,
                      onClick: () => {
                        (0, x.FE)(_, {
                          content: g.jn.QUEST_BAR_V2,
                          ctaContent: T.jZ.LEARN_MORE,
                        });
                      },
                    }),
                    (0, a.jsx)(w, {
                      title: A.Z.Messages.QUESTS_VIDEO_END_PANEL_REWARD_TITLE,
                      subtitle:
                        A.Z.Messages.QUESTS_VIDEO_END_PANEL_REWARD_SUBTITLE,
                      onClick: () => {
                        (0, T._3)({
                          questId: _.id,
                          questContent: g.jn.QUEST_BAR_V2,
                          questContentCTA: T.jZ.LEARN_MORE,
                        }),
                          y(),
                          (0, I.navigateToQuestHome)(
                            R.dr.QUESTS_BAR,
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
                  className: i()(M.playPausePopCont, {
                    [M.play]: en === b.r.PLAYING,
                    [M.pause]: en === b.r.PAUSED,
                  }),
                  children:
                    en === b.r.PLAYING
                      ? (0, a.jsx)(p.PlayIcon, {
                          className: M.playPausePopIcon,
                        })
                      : (0, a.jsx)(p.PauseIcon, {
                          className: M.playPausePopIcon,
                        }),
                },
                en,
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
                    percent: el,
                    animate: !0 !== eR.current && !ec,
                    interactionEnabled: ey && eI,
                    backgroundColor: eF ? void 0 : "rgba(0, 0, 0, 0.0)",
                    preloadedBuffers: eF ? eC : void 0,
                    duration:
                      null !==
                        (m =
                          null === (o = ek.current) || void 0 === o
                            ? void 0
                            : o.duration) && void 0 !== m
                        ? m
                        : 1,
                    maxSeekableTime: eF && eI ? eG : void 0,
                    onClick: (e) => {
                      ez(e), en === b.r.ENDED && eQ(!0);
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
                      playerState: en,
                      animSpring: e$,
                      visible: eF,
                      seekForwardEnabled: e8,
                      hideCaptionButton: null == e5,
                      handlePlayPauseBtnClick: eW,
                      handleTranscriptBtnClick: () => {
                        !Q &&
                          (null == eD ||
                            eD.questId !== _.id ||
                            eD.fetchStatus === N.iF.NONE ||
                            eD.fetchStatus === N.iF.FAILURE) &&
                          (0, S.lL)(_),
                          z(!Q);
                      },
                      handleCaptionBtnClick: () => {
                        Y(!W);
                      },
                      handleFullScreenBtnClick: () => {
                        var e;
                        let t = !q,
                          n = (0, v.fn)(
                            null === (e = ek.current) || void 0 === e
                              ? void 0
                              : e.parentNode,
                            ek.current,
                          );
                        t && null != n
                          ? ((0, v.Dj)(n), n.addEventListener(v.NO, eH))
                          : !t &&
                            null != n &&
                            (n.removeEventListener(v.NO, eH), (0, v.Pr)(n)),
                          K(t);
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
    281055: function (e, t, n) {
      n.d(t, {
        Yy: function () {
          return i;
        },
        xU: function () {
          return c;
        },
      }),
        n(47120);
      var r = n(192379),
        o = n(442837),
        a = n(434650),
        s = n(110924),
        l = n(451478);
      function i() {
        let [e, t] = r.useState(!1),
          n = e !== (0, s.Z)(e);
        return {
          visible: e,
          visibleChanged: n,
          targetRef: (0, a.O)((e) => t(e), 0.6),
        };
      }
      function c() {
        let e = (0, o.e7)([l.Z], () => l.Z.isFocused()),
          t = e !== (0, s.Z)(e);
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
//# sourceMappingURL=44bb9215478360a4f03a.js.map
