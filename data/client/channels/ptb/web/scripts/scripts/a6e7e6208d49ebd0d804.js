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
          return b;
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
        S = (e) => {
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
        E = (e) => {
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
            E = (0, c.cr)(n);
          if (v)
            return (0, r.jsx)(S, {
              quest: n,
              useReducedMotion: o,
              isExpanded: i,
            });
          if (E) return (0, r.jsx)(g, { quest: n, taskDetails: p });
          if (m === s.LI.CONSOLE && l && !C) return (0, r.jsx)(h, { quest: n });
          else if (m !== s.LI.SELECT && !a && !d)
            return (0, r.jsx)(x, { quest: n });
          return null;
        };
      function b(e) {
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
          S = 2 * Math.PI * h,
          E = S - o * S,
          b = {
            strokeDasharray: "".concat(S, " ").concat(S),
            strokeDashoffset: E,
          },
          j = {
            strokeDasharray: "".concat(S, " ").concat(S),
            strokeDashoffset: -o * S,
          },
          N = { boxShadow: "0 0 30px 0px ".concat(g.glow) },
          { progressTextAnimation: _ } = (0, s.useSpring)({
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
                  style: { opacity: _ },
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
                  style: j,
                }),
                (0, r.jsx)("circle", {
                  className: d.progress,
                  strokeWidth: m,
                  fill: "transparent",
                  r: h,
                  cx: x,
                  cy: x,
                  stroke: g.foreground,
                  style: b,
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
          return b;
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
        p = n(184299),
        f = n(818570),
        v = n(528846),
        C = n(604162),
        g = n(388032),
        x = n(417575);
      let h = "-:--";
      function S(e) {
        let { current: t, duration: n } = e,
          o = null != t ? (0, C.yv)(t) : h,
          i = null != n ? (0, C.yv)(n) : h;
        return (
          (o = o.padStart(i.length, "0")),
          (0, r.jsxs)("div", {
            className: l()(x.durationTimeWrapper, x.controlsBarItem),
            children: [
              (0, r.jsx)(d.Text, {
                variant: "text-xs/normal",
                className: x.durationTimeDisplay,
                children: o,
              }),
              (0, r.jsx)(d.Text, {
                variant: "text-xs/normal",
                className: x.durationTimeSeparator,
                children: "/",
              }),
              (0, r.jsx)(d.Text, {
                variant: "text-xs/normal",
                className: x.durationTimeDisplay,
                children: i,
              }),
            ],
          })
        );
      }
      function E(e) {
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
              className: l()(x.videoControlsBtnCont, {
                [x.videoControlsBtnContDisabled]: u,
              }),
              "aria-label": i,
              "aria-disabled": u,
              children: (0, r.jsx)(a.animated.div, {
                className: l()(x.videoControlsBtnCont),
                style: {
                  opacity: (0, a.to)(
                    [n.to({ range: [0, 1], output: [0, 1] })],
                    (e) => "".concat(o ? e : Math.pow(e, 8)),
                  ),
                },
                children: (0, r.jsx)(t, {
                  color: !0 !== u ? c.Z.colors.WHITE : c.Z.colors.TEXT_MUTED,
                  className: l()(x.controlsBarItem, {
                    [x.controlsBarItemActive]: s,
                    [x.videoControlsBtn]: !u,
                  }),
                }),
              }),
            });
        return null != m
          ? (0, r.jsx)(d.Tooltip, { text: m, delay: p, children: (e) => v(e) })
          : v();
      }
      function b(e) {
        var t, n;
        let {
            videoRef: i,
            playerState: C,
            animSpring: h,
            visible: b,
            seekForwardEnabled: j,
            hideCaptionButton: N,
            handlePlayPauseBtnClick: _,
            handleTranscriptBtnClick: T,
            handleCaptionBtnClick: I,
            handleFullScreenBtnClick: k,
            handleSeekBackBtnClick: y,
            handleSeekForwardBtnClick: B,
            handleControlBarPendingInteraction: A,
          } = e,
          L = (0, p.km)((e) => e.volume),
          P = (0, p.km)((e) => e.setVolume),
          D = (0, p.km)((e) => e.muted),
          R = (0, p.km)((e) => e.setMuted),
          M = (0, p.km)((e) => e.transcriptEnabled),
          O = (0, p.km)((e) => e.captionEnabled),
          w = (0, p.km)((e) => e.fullScreenEnabled),
          F = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
          [Z, G] = o.useState(D ? 0 : L),
          [H, U] = o.useState(!1),
          [V, z] = o.useState(!1),
          [{ volumeAnimSpring: q }, Y] = (0, d.useSpring)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
          })),
          W = (e) => {
            if (null != i.current)
              e !== i.current.volume && (i.current.volume = e), e !== Z && G(e);
          },
          Q = () => {
            U(!0);
          },
          K = () => {
            U(!1);
          };
        o.useEffect(
          () => (
            Y({ volumeAnimSpring: V || H ? 1 : 0, immediate: F }),
            () => {
              q.stop();
            }
          ),
          [V, H, Y, F, q],
        );
        let X =
            0 === Z
              ? d.VoiceXIcon
              : Z < 0.5
                ? d.VoiceLowIcon
                : d.VoiceNormalIcon,
          J =
            C === v.r.ENDED
              ? d.RetryIcon
              : C === v.r.PLAYING
                ? d.PauseIcon
                : d.PlayIcon,
          $ =
            C === v.r.ENDED
              ? "Replay"
              : C === v.r.PLAYING
                ? g.intl.string(g.t.ZcgDJS)
                : g.intl.string(g.t.RscU7O);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("div", {
              className: l()(x.videoControlsGroup, x.videoControlsGroupStart),
              children: (0, r.jsx)(E, {
                iconComponent: J,
                animationTime: h,
                visible: b,
                ariaLabel: $,
                onClick: _,
              }),
            }),
            (0, r.jsxs)(a.animated.div, {
              className: l()(x.videoControlsGroup, x.videoControlsGroupMid),
              style: {
                opacity: (0, a.to)(
                  [h.to({ range: [0, 1], output: [0, 1] })],
                  (e) => "".concat(b ? e : Math.pow(e, 8)),
                ),
              },
              children: [
                (0, r.jsxs)("div", {
                  onMouseEnter: Q,
                  onMouseLeave: K,
                  onFocus: Q,
                  onBlur: K,
                  className: x.volumeControlGroup,
                  children: [
                    (0, r.jsx)(E, {
                      iconComponent: X,
                      animationTime: h,
                      visible: b,
                      onClick: () => {
                        if (null != i.current)
                          0 === Z ? (W(L), R(!1)) : (P(Z), W(0), R(!0));
                      },
                      ariaLabel: g.intl.string(g.t["eIl+AA"]),
                      tooltipLabel: g.intl.string(g.t["eIl+AA"]),
                    }),
                    (0, r.jsx)(a.animated.div, {
                      className: x.volumeSlider,
                      style: {
                        opacity: (0, a.to)(
                          [q.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(b ? e : Math.pow(e, 8)),
                        ),
                        width: (0, a.to)(
                          [q.to({ range: [0, 1], output: [0, 100] })],
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
                        initialValue: Z,
                        keyboardStep: 0.1,
                        minValue: 0,
                        maxValue: 1,
                        onValueChange: (e) => {
                          W(e), P(e), V && (z(!1), A(!1)), D && e > 0 && R(!1);
                        },
                        asValueChanges: (e) => {
                          W(e), !V && (z(!0), A(!0));
                        },
                        fillStyles: { backgroundColor: c.Z.colors.WHITE.css },
                        orientation: "horizontal",
                        "aria-label": g.intl.string(g.t["eIl+AA"]),
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)(S, {
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
              className: l()(x.videoControlsGroup, x.videoControlsGroupEnd),
              children: [
                (0, r.jsx)(E, {
                  iconComponent: d.ArrowAngleLeftUpIcon,
                  animationTime: h,
                  visible: b,
                  onClick: y,
                  ariaLabel: g.intl.string(g.t.r9s3Ul),
                  tooltipLabel: g.intl.string(g.t.r9s3Ul),
                }),
                (0, r.jsx)(E, {
                  iconComponent: d.ArrowAngleRightUpIcon,
                  animationTime: h,
                  visible: b,
                  onClick: B,
                  disabled: !j,
                  ariaLabel: j
                    ? g.intl.string(g.t.zWDcND)
                    : g.intl.string(g.t.xXh3y8),
                  tooltipLabel: j
                    ? g.intl.string(g.t.zWDcND)
                    : g.intl.string(g.t.xXh3y8),
                  tooltipDelayMs: j ? 1500 : 0,
                }),
                (0, r.jsx)(E, {
                  iconComponent: d.PaperIcon,
                  animationTime: h,
                  visible: b,
                  onClick: T,
                  active: M && C !== v.r.ENDED,
                  ariaLabel: g.intl.string(g.t.KCzjTk),
                  tooltipLabel: g.intl.string(g.t.KCzjTk),
                }),
                !N &&
                  (0, r.jsx)(E, {
                    iconComponent: f.c,
                    animationTime: h,
                    visible: b,
                    active: O,
                    onClick: I,
                    ariaLabel: g.intl.string(g.t.bDSZOz),
                    tooltipLabel: g.intl.string(g.t.bDSZOz),
                  }),
                (0, r.jsx)(E, {
                  iconComponent: w
                    ? d.FullscreenExitIcon
                    : d.FullscreenEnterIcon,
                  animationTime: h,
                  visible: b,
                  onClick: k,
                  ariaLabel: g.intl.string(g.t.vKZT5u),
                  tooltipLabel: g.intl.string(g.t.vKZT5u),
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
        h = n(164495),
        S = n(472144),
        E = n(644646),
        b = n(604162),
        j = n(747717),
        N = n(963123),
        _ = n(46140),
        T = n(981631),
        I = n(388032),
        k = n(417575);
      function y(e) {
        var t, n, i;
        let { transitionState: f, onClose: y, quest: B, autoplay: A } = e,
          L = (0, C.il)(B),
          P = (0, a.e7)([d.Z], () => d.Z.getState().theme),
          D = (0, s.wj)(P) ? T.BRd.DARK : T.BRd.LIGHT,
          R = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
          M = o.useRef(null),
          [O, w] = o.useState(L.progressSeconds),
          [F, Z] = o.useState(!1),
          { completedRatio: G, completedRatioDisplay: H } = (0, p.I)(B),
          [U, V] = (0, b.G6)(
            I.intl.string(I.t.WqhZsr),
            I.intl.string(I.t["+5kSoa"]),
            1700,
          ),
          z =
            (null === (t = B.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) != null
              ? I.intl.string(I.t.vTgCW1)
              : I.intl.string(I.t.cfY4PD),
          q = o.useCallback(() => {
            (0, C.f2)(B.id, {
              content: v.jn.QUEST_SHARE_LINK,
              ctaContent: m.jZ.COPY_QUEST_URL,
            }),
              V();
          }, [B.id, V]),
          Y = o.useMemo(
            () => x.r.build(B.config).defaultReward.messages.name,
            [B],
          ),
          W = I.intl.formatToPlainString(I.t["12IWPz"], { rewardName: Y });
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("div", {
            ref: M,
            children: (0, r.jsx)(c.ModalRoot, {
              transitionState: f,
              size: c.ModalSize.LARGE,
              className: k.modalRoot,
              children: (0, r.jsx)("div", {
                className: k.modalBg,
                children: (0, r.jsx)("div", {
                  className: k.modalBody,
                  children: (0, r.jsxs)("div", {
                    className: k.modalContent,
                    children: [
                      (0, r.jsxs)("div", {
                        className: k.contentHeader,
                        children: [
                          (0, r.jsxs)(c.Clickable, {
                            className: k.contentHeaderGameInfo,
                            onClick: () => {
                              (0, C.FE)(B, {
                                content: v.jn.VIDEO_QUEST_VIDEO_PLAYER,
                                ctaContent:
                                  m.jZ
                                    .VIDEO_QUEST_VIDEO_PLAYER_HEADER_GAME_LINK,
                              });
                            },
                            children: [
                              (0, r.jsx)("img", {
                                alt: B.config.messages.gameTitle,
                                className: l()(
                                  k.contentHeaderLogotype,
                                  k.accentOnHover,
                                ),
                                src: (0, g.fh)(B, g.eC.LOGO_TYPE, D).url,
                              }),
                              (0, r.jsx)(j.Z, {}),
                              (0, r.jsxs)("div", {
                                className: k.questHeading,
                                children: [
                                  (0, r.jsx)(c.Heading, {
                                    variant: "heading-md/semibold",
                                    color: "header-primary",
                                    children: I.intl.format(I.t.EQa7oq, {
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
                                className: k.progressCont,
                                ...e,
                                children: (0, r.jsx)(S.Z, {
                                  quest: B,
                                  size: 48,
                                  percentComplete: G,
                                  percentCompleteText: F ? H : void 0,
                                  percentCompleteTextVariant: "text-sm/medium",
                                  children: (0, r.jsx)(E.Z, {
                                    className: k.questProgressRewardTile,
                                    quest: B,
                                    questContent: v.jn.QUEST_BAR_V2,
                                    autoplay: !1,
                                    location:
                                      _.dr.VIDEO_QUEST_VIDEO_PLAYER_HEADER,
                                  }),
                                }),
                              }),
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: k.videoPanel,
                        children: (0, r.jsx)(N.Z, {
                          quest: B,
                          parentTransitionState: f,
                          onOptimisticProgressUpdate: w,
                          autoplay: A,
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className: k.contentFooter,
                        children: [
                          (0, r.jsx)(c.Button, {
                            color: c.Button.Colors.PRIMARY,
                            onClick: q,
                            size: c.Button.Sizes.MEDIUM,
                            className: k.copyLinkBtn,
                            children: U,
                          }),
                          (0, r.jsxs)("div", {
                            className: k.contentFooterButtonCont,
                            children: [
                              (0, r.jsx)(c.Button, {
                                onClick: y,
                                color: c.Button.Colors.PRIMARY,
                                size: c.Button.Sizes.MEDIUM,
                                children: I.intl.string(I.t.cpT0Cg),
                              }),
                              (0, r.jsx)(h.i0, {
                                className: k.claimBtn,
                                size: c.Button.Sizes.MEDIUM,
                                quest: B,
                                useReducedMotion: R,
                                isExpanded:
                                  (null === (n = B.userStatus) || void 0 === n
                                    ? void 0
                                    : n.completedAt) != null,
                                disabled:
                                  (null === (i = B.userStatus) || void 0 === i
                                    ? void 0
                                    : i.completedAt) == null,
                                ctaLabel: z,
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
            onScrubBack: h,
            onScrubForward: S,
          } = e,
          [E, b] = o.useState(null),
          [j, N] = o.useState(null),
          [_, T] = o.useState(null),
          [I, k] = o.useState(!1);
        o.useEffect(() => {
          if (null != E) null == g ? T(null) : T(p(g, C, E));
        }, [E, g, C]);
        let y = (0, s.y)(() => {
            if (null != y.current) b(y.current.getBoundingClientRect());
          }),
          B = (e) => {
            N(e.clientX);
          },
          A = o.useCallback(
            (e) => {
              let { key: t } = e;
              t === u.mR.ArrowLeft && null != h
                ? (e.preventDefault(), e.stopPropagation(), h())
                : t === u.mR.ArrowRight &&
                  null != S &&
                  (e.preventDefault(), e.stopPropagation(), S());
            },
            [h, S],
          ),
          L = null != j && null != E ? m(j, E, C) : 0,
          P = (0, c.yv)(L),
          D = null != E ? E.right - p((t / 100) * C, C, E) : null,
          R = null != j && null != E ? E.right - j : null,
          M = null != _ && null != E ? E.right - _ : null;
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
                if (!!i) k(!0), B(e);
              },
              onMouseLeave: (e) => {
                if (!!i) k(!1), N(null);
              },
              onMouseMove: (e) => {
                if (!!i) I && B(e);
              },
              onKeyDown: A,
              tabIndex: i ? void 0 : -1,
              focusProps: { offset: { top: 12, bottom: 12 } },
              children: [
                null == v
                  ? void 0
                  : v.map((e) =>
                      (0, r.jsx)(
                        "div",
                        {
                          className: l()(d.buffer, { [d.bufferHovered]: I }),
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
                  size: I ? a.Progress.Sizes.XSMALL : a.Progress.Sizes.XXSMALL,
                  animate: n,
                }),
                I &&
                  null != P &&
                  (0, r.jsx)(a.Text, {
                    className: d.timeDisplay,
                    variant: "text-xs/normal",
                    style: {
                      right: null != R ? "".concat(R - 10, "px") : "auto",
                    },
                    children: P,
                  }),
                I &&
                  i &&
                  (0, r.jsx)("div", {
                    className: d.grabber,
                    style: {
                      right: null != D ? "".concat(D - 6, "px") : "auto",
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
          return G;
        },
      }),
        n(47120),
        n(653041);
      var r,
        o,
        i = n(200651),
        l = n(192379),
        a = n(120356),
        s = n.n(a),
        c = n(100621),
        u = n(442837),
        d = n(692547),
        m = n(780384),
        p = n(481060),
        f = n(607070),
        v = n(70097),
        C = n(210887),
        g = n(866960),
        x = n(228488),
        h = n(617136),
        S = n(272008),
        E = n(497505),
        b = n(918701),
        j = n(184299),
        N = n(720293),
        _ = n(881773),
        T = n(355243),
        I = n(106743),
        k = n(528846),
        y = n(604162),
        B = n(747717),
        A = n(281055),
        L = n(981631),
        P = n(217702),
        D = n(388032),
        R = n(417575);
      ((o = r || (r = {}))[(o.USER_INTERACTION = 0)] = "USER_INTERACTION"),
        (o[(o.LOST_FOCUS = 1)] = "LOST_FOCUS");
      let M = new Set([L.IyS.FIVE_G, L.IyS.FOUR_G, L.IyS.UNKNOWN]),
        O = { tension: 250, friction: 5, clamp: !0 };
      function w() {
        let e = (0, u.e7)([C.Z], () => C.Z.getState().theme);
        return (0, i.jsx)("div", {
          className: R.pauseText,
          style: {
            background: (0, m.wj)(e)
              ? "rgba(0, 0, 0, 0.65)"
              : "rgba(255, 255, 255, 0.65)",
          },
          children: (0, i.jsx)(p.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            children: D.intl.string(D.t.U7Xrb2),
          }),
        });
      }
      function F(e) {
        let { quest: t, className: n } = e,
          r = l.useMemo(() => (0, N.z)(N.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
        return null == r
          ? null
          : (0, i.jsx)("img", {
              src: r.url,
              alt: "Video thumbnail",
              className: s()(R.stillFrameImageCard, n),
            });
      }
      function Z(e) {
        let { title: t, subtitle: n, icon: r, onClick: o, className: a } = e,
          c = (0, u.e7)([C.Z], () => C.Z.getState().theme),
          [f, v] = l.useState(!1),
          g = () => {
            v(!0);
          },
          x = () => {
            v(!1);
          };
        return (0, i.jsx)(p.Clickable, {
          className: s()(R.endScreenPanel, R.accentOnHover, a),
          onMouseEnter: g,
          onMouseLeave: x,
          onFocus: g,
          onBlur: x,
          onClick: o,
          style: {
            background: (0, m.wj)(c)
              ? "rgba(0, 0, 0, 0.45)"
              : "rgba(255, 255, 255, 0.55)",
          },
          children: (0, i.jsxs)("div", {
            className: R.endScreenPanelInner,
            children: [
              (0, i.jsxs)("div", {
                className: R.endScreenPanelTextCont,
                children: [
                  (0, i.jsx)(p.Heading, {
                    variant: "heading-md/semibold",
                    children: t,
                  }),
                  (0, i.jsx)(p.Heading, {
                    variant: "heading-sm/normal",
                    color: "text-normal",
                    children: n,
                  }),
                ],
              }),
              (0, i.jsx)(B.Z, {}),
              (0, i.jsx)(r, {
                size: "md",
                color: f
                  ? d.Z.colors.INTERACTIVE_ACTIVE
                  : d.Z.colors.INTERACTIVE_NORMAL,
                className: R.endScreenIcon,
              }),
            ],
          }),
        });
      }
      function G(e) {
        var t, n, r, o, a, d, m;
        let {
            quest: C,
            onOptimisticProgressUpdate: B,
            autoplay: L,
            parentTransitionState: G,
          } = e,
          H = (0, j.km)((e) => e.transcriptEnabled),
          U = (0, j.km)((e) => e.setTranscriptEnabled),
          V = (0, j.km)((e) => e.captionEnabled),
          z = (0, j.km)((e) => e.setCaptionEnabled),
          q = (0, j.km)((e) => e.fullScreenEnabled),
          Y = (0, j.km)((e) => e.setFullScreenEnabled),
          { focused: W, focusedChanged: Q } = (0, A.xU)(),
          { visible: K, visibleChanged: X, targetRef: J } = (0, A.Yy)(),
          [$, ee] = l.useState(!0 === L ? k.r.PLAYING : k.r.PAUSED),
          [et, en] = l.useState(!1),
          er = (0, b.il)(C),
          [eo, ei] = l.useState(er.percentComplete),
          [el, ea] = l.useState(!1),
          [es, ec] = l.useState(!0),
          [eu, ed] = l.useState(!1),
          [em, ep] = l.useState([]),
          [ef, ev] = l.useState(g.Z.getEffectiveConnectionSpeed()),
          [eC, eg] = l.useState(0),
          [ex, eh] = l.useState(0),
          [eS, eE] = l.useState(!1),
          [eb, ej] = l.useState(!1),
          eN = (0, j.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[C.id]) && void 0 !== t
              ? t
              : { timestampSec: 0, duration: 10 };
          }),
          e_ = (0, j.km)((e) => e.setVideoProgress),
          eT = (0, j.km)((e) => e.muted),
          eI = (0, j.km)((e) => e.volume),
          ek = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
          ey = (0, l.useRef)(null),
          eB = l.useRef(!0),
          eA =
            (null === (t = C.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          eL = (0, j.km)((e) => e.transcript),
          [eP, eD] = l.useState(null),
          [eR, eM] = l.useState(null),
          eO = eA
            ? null !==
                (a =
                  null === (n = ey.current) || void 0 === n
                    ? void 0
                    : n.duration) && void 0 !== a
              ? a
              : 0
            : eN.maxTimestampSec;
        l.useLayoutEffect(() => {
          eB.current &&
            ((eB.current = !1),
            ev(g.Z.getEffectiveConnectionSpeed()),
            eA && eN.timestampSec >= eN.duration && e_(C.id, 0, eN.duration));
        }, []),
          l.useEffect(() => {
            (G === p.ModalTransitionState.HIDDEN ||
              G === p.ModalTransitionState.EXITING ||
              G === p.ModalTransitionState.EXITED ||
              (null != G && X && !K && !eA) ||
              (Q && !W && !eA)) &&
              null != ey.current &&
              $ === k.r.PLAYING &&
              (eH(!1), eD(1));
          }, [G, W, Q, K, X, $, eA]);
        let ew = () => {
            en(!0);
          },
          eF = () => {
            en(!1);
          },
          eZ = et || $ === k.r.PAUSED || $ === k.r.ENDED,
          eG = l.useCallback(() => {
            var e;
            let t = (0, x.fn)(
              null === (e = ey.current) || void 0 === e ? void 0 : e.parentNode,
              ey.current,
            );
            null != t &&
              !(0, x.rB)(t) &&
              (t.removeEventListener(x.NO, eG), Y(!1));
          }, [Y]);
        l.useEffect(() => {
          let e = ey.current;
          return () => {
            let t = (0, x.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(x.NO, eG);
          };
        }, [eG]);
        let eH = (e) => {
            if (null != ey.current)
              e ? (ey.current.play(), eD(null)) : ey.current.pause(),
                ee(e ? k.r.PLAYING : k.r.PAUSED);
          },
          eU = l.useCallback(
            (e) => {
              if (null != ey.current)
                ea(!0),
                  (ey.current.currentTime = e),
                  e_(C.id, e, ey.current.duration);
            },
            [ey, e_, C],
          ),
          eV = () => {
            if (null != ey.current)
              switch ($) {
                case k.r.ENDED:
                  eU(0), eH(!0);
                  break;
                case k.r.PLAYING:
                  eH(!1);
                  break;
                default:
                  eH(!0);
              }
          },
          ez = (e) => {
            eM(e);
          },
          eq = (e) => {
            eM((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
          },
          eY = (e) => {
            if (null != ey.current && $ === k.r.PLAYING)
              es && ec(!1), eu && ed(!1), eH(!0);
          };
        l.useEffect(() => {
          if (!el) return;
          let e = setTimeout(() => {
            ea(!1);
          }, 1e3);
          return () => clearTimeout(e);
        }, [el]);
        let eW = l.useCallback(() => {
            if (null != ey.current)
              eU(Math.max(ey.current.currentTime - 10, 0));
          }, [eU]),
          eQ = l.useCallback(() => {
            if (null != ey.current)
              eU(Math.min(ey.current.currentTime + 10, ey.current.duration));
          }, [eU]),
          [{ controlBarAnimSpring: eK }, eX] = (0, p.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: O,
            onStart: () => {
              ej(!1);
            },
            onRest: (e) => {
              1 === e.value && ej(!0);
            },
          })),
          eJ = (0, l.useRef)(null),
          [{ captionHeightSpring: e$ }, e0] = (0, p.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: O,
          }));
        l.useEffect(() => {
          var e, t;
          return (
            e0({
              captionHeightSpring:
                V &&
                null != eR &&
                null !==
                  (t =
                    null === (e = eJ.current) || void 0 === e
                      ? void 0
                      : e.clientHeight) &&
                void 0 !== t
                  ? t
                  : 0,
              immediate: ek,
            }),
            () => {
              e$.stop();
            }
          );
        }, [V, e0, ek, eR, e$]),
          l.useEffect(
            () => (
              eX({ controlBarAnimSpring: eZ || eS ? 1 : 0, immediate: ek }),
              () => {
                eK.stop();
              }
            ),
            [eZ, eX, ek, eS, eK],
          );
        let e1 = (e) => {
            !eA && (0, S.FI)(C.id, e);
          },
          e2 = $ === k.r.ENDED,
          e9 = l.useMemo(
            () =>
              M.has(ef)
                ? (0, N.z)(N.i.VIDEO_PLAYER_VIDEO, C)
                : (0, N.z)(N.i.VIDEO_PLAYER_VIDEO_LOW_RES, C),
            [ef, C],
          ),
          e4 = l.useMemo(() => (0, N.z)(N.i.VIDEO_PLAYER_THUMBNAIL, C), [C]),
          e6 = l.useMemo(() => (0, N.z)(N.i.VIDEO_PLAYER_CAPTION, C), [C]),
          e7 =
            eA ||
            eN.maxTimestampSec >=
              (null !==
                (d =
                  null === (r = ey.current) || void 0 === r
                    ? void 0
                    : r.currentTime) && void 0 !== d
                ? d
                : 0) +
                1;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)(p.Clickable, {
            className: R.videoCont,
            "data-fullscreen": q,
            tabIndex: -1,
            onMouseEnter: ew,
            onMouseLeave: eF,
            onFocus: ew,
            onBlur: eF,
            children: [
              (0, i.jsx)(F, {
                quest: C,
                className: s()({ [R.stillFrameImageCardHidden]: !e2 }),
              }),
              e2 && (0, i.jsx)("div", { className: R.videoContOverlay }),
              (0, i.jsxs)(v.Z, {
                ref: (e) => {
                  (ey.current = e), (J.current = e);
                },
                autoPlay: L,
                playsInline: !0,
                mediaLayoutType: q ? P.hV.STATIC : P.hV.RESPONSIVE,
                className: s()({ [R.hidden]: e2, [R.videoInner]: !0 }),
                controls: !1,
                poster: null == e4 ? void 0 : e4.url,
                disablePictureInPicture: !0,
                onTimeUpdate: (e) => {
                  if (null != ey.current)
                    ey.current.currentTime >= eC &&
                      (eg(ey.current.currentTime + 10 + 5 * Math.random()),
                      e1(ey.current.currentTime)),
                      ey.current.currentTime >= ex &&
                        (eh(ey.current.currentTime + 1),
                        (0, S.qm)(C.id, er.taskType, ey.current.currentTime),
                        B(ey.current.currentTime)),
                      e_(C.id, ey.current.currentTime, ey.current.duration),
                      ei((ey.current.currentTime / ey.current.duration) * 100);
                },
                onEnded: (e) => {
                  null != ey.current &&
                    (e1(ey.current.duration + 1),
                    e_(C.id, ey.current.duration, ey.current.duration)),
                    ee(k.r.ENDED);
                },
                onLoadedData: (e) => {
                  es && ec(!1);
                },
                onLoadedMetadata: (e) => {
                  if (null == ey.current) return;
                  if (
                    (eU(eN.timestampSec),
                    eT ? (ey.current.volume = 0) : (ey.current.volume = eI),
                    0 === ey.current.textTracks.length)
                  )
                    return;
                  let t = ey.current.textTracks[0];
                  if (((t.mode = "hidden"), null != t.cues))
                    for (let e = 0; e < t.cues.length; e++) {
                      let n = t.cues[e];
                      (0, y.JC)(n) &&
                        ((n.id = "cue-".concat(e)),
                        (n.onenter = () => ez(n)),
                        (n.onexit = () => eq(n)));
                    }
                },
                onWaiting: (e) => {
                  ed(!0);
                },
                onProgress: (e) => {
                  if (null == ey.current) return;
                  let t = [];
                  for (let e = 0; e < ey.current.buffered.length; e++) {
                    let n = ey.current.buffered.start(e),
                      r = ey.current.buffered.end(e);
                    if (!(r - n < 1))
                      t.push({
                        start: n / ey.current.duration,
                        size: (r - n) / ey.current.duration,
                      });
                  }
                  ep(t);
                },
                onCanPlay: eY,
                onCanPlayThrough: eY,
                onClick: () => {
                  eV();
                },
                crossOrigin: "anonymous",
                children: [
                  null != e6 &&
                    (0, i.jsx)("track", {
                      src: e6.url,
                      label: "English",
                      kind: "captions",
                      srcLang: "en",
                      default: !0,
                    }),
                  null != e9 &&
                    (0, i.jsx)("source", { src: e9.url, type: e9.mimetype }),
                ],
              }),
              (es || eu) &&
                (0, i.jsx)(p.Spinner, {
                  type: p.Spinner.Type.WANDERING_CUBES,
                  className: R.loadingSpinner,
                }),
              $ === k.r.PAUSED && 1 === eP && (0, i.jsx)(w, {}),
              H &&
                $ !== k.r.ENDED &&
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(p.Clickable, {
                      onClick: () => U(!1),
                      children: (0, i.jsx)("div", {
                        className: R.transcriptOverlay,
                      }),
                    }),
                    (0, i.jsx)(c.animated.div, {
                      className: R.transcriptCont,
                      style: {
                        marginBottom: (0, c.to)([eK, e$], (e, t) =>
                          "".concat(50 * e + t, "px"),
                        ),
                      },
                      children: (0, i.jsx)(I.K, {
                        quest: C,
                        onClose: () => {
                          U(!1);
                        },
                      }),
                    }),
                  ],
                }),
              $ === k.r.ENDED &&
                (0, i.jsx)(i.Fragment, {
                  children: (0, i.jsx)(Z, {
                    title: D.intl.string(D.t.iiTtpK),
                    subtitle: D.intl.string(D.t.mxaHf3),
                    icon: p.LinkExternalMediumIcon,
                    className: R.endScreenPanelRight,
                    onClick: () => {
                      (0, h._3)({
                        questId: C.id,
                        questContent: E.jn.QUEST_BAR_V2,
                        questContentCTA: h.jZ.LEARN_MORE,
                      }),
                        (0, b.FE)(C, {
                          content: E.jn.QUEST_BAR_V2,
                          ctaContent: h.jZ.LEARN_MORE,
                        });
                    },
                  }),
                }),
              (0, i.jsx)(c.animated.div, {
                className: R.videoFooterContGradient,
                style: {
                  opacity: (0, c.to)(
                    [eK.to({ range: [0, 1], output: [0, 1] })],
                    (e) => "".concat(e),
                  ),
                },
              }),
              (0, i.jsx)(
                "div",
                {
                  className: s()(R.playPausePopCont, {
                    [R.play]: $ === k.r.PLAYING,
                    [R.pause]: $ === k.r.PAUSED,
                  }),
                  children:
                    $ === k.r.PLAYING
                      ? (0, i.jsx)(p.PlayIcon, {
                          className: R.playPausePopIcon,
                        })
                      : (0, i.jsx)(p.PauseIcon, {
                          className: R.playPausePopIcon,
                        }),
                },
                $,
              ),
              V &&
                null != eR &&
                (0, i.jsx)(c.animated.div, {
                  className: R.captionContainer,
                  ref: eJ,
                  style: {
                    translateY: (0, c.to)(
                      [eK.to({ range: [0, 1], output: [0, -50] })],
                      (e) => "".concat(e, "px"),
                    ),
                  },
                  children: (0, i.jsx)(p.Text, {
                    variant: "text-lg/semibold",
                    color: "always-white",
                    className: R.captionText,
                    children: eR.text,
                  }),
                }),
              (0, i.jsxs)(c.animated.div, {
                className: R.videoFooterCont,
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
                  (0, i.jsx)(T.Z, {
                    percent: eo,
                    animate: !0 !== eB.current && !el,
                    interactionEnabled: eA && eb,
                    backgroundColor: eZ ? void 0 : "rgba(0, 0, 0, 0.0)",
                    preloadedBuffers: eZ ? em : void 0,
                    duration:
                      null !==
                        (m =
                          null === (o = ey.current) || void 0 === o
                            ? void 0
                            : o.duration) && void 0 !== m
                        ? m
                        : 1,
                    maxSeekableTime: eZ && eb ? eO : void 0,
                    onClick: (e) => {
                      eU(e), $ === k.r.ENDED && eH(!0);
                    },
                    onScrubBack: eW,
                    onScrubForward: eQ,
                  }),
                  (0, i.jsx)(c.animated.div, {
                    className: R.videoControlsCont,
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
                    children: (0, i.jsx)(_.Z, {
                      videoRef: ey,
                      playerState: $,
                      animSpring: eK,
                      visible: eZ,
                      seekForwardEnabled: e7,
                      hideCaptionButton: null == e6,
                      handlePlayPauseBtnClick: eV,
                      handleTranscriptBtnClick: () => {
                        !H &&
                          (null == eL ||
                            eL.questId !== C.id ||
                            eL.fetchStatus === j.iF.NONE ||
                            eL.fetchStatus === j.iF.FAILURE) &&
                          (0, S.lL)(C),
                          U(!H);
                      },
                      handleCaptionBtnClick: () => {
                        z(!V);
                      },
                      handleFullScreenBtnClick: () => {
                        var e;
                        let t = !q,
                          n = (0, x.fn)(
                            null === (e = ey.current) || void 0 === e
                              ? void 0
                              : e.parentNode,
                            ey.current,
                          );
                        t && null != n
                          ? ((0, x.Dj)(n), n.addEventListener(x.NO, eG))
                          : !t &&
                            null != n &&
                            (n.removeEventListener(x.NO, eG), (0, x.Pr)(n)),
                          Y(t);
                      },
                      handleSeekBackBtnClick: () => {
                        if (null != ey.current)
                          eU(Math.max(ey.current.currentTime - 10, 0));
                      },
                      handleSeekForwardBtnClick: () => {
                        if (null != ey.current && !!e7)
                          eU(Math.min(ey.current.currentTime + 10, eO));
                      },
                      handleControlBarPendingInteraction: eE,
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
//# sourceMappingURL=a6e7e6208d49ebd0d804.js.map
