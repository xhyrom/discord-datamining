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
          return E;
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
        C = n(798020);
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
        E = (e) => {
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
        _ = (e) => {
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
            _ = (0, c.q8)(n);
          if (v)
            return (0, r.jsx)(E, {
              quest: n,
              useReducedMotion: o,
              isExpanded: i,
            });
          if (_) return (0, r.jsx)(g, { quest: n, taskDetails: f });
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
            (0, r.jsx)(_, { ...e }),
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
        d = n(937159);
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
          E = 2 * Math.PI * S,
          _ = E - o * E,
          h = {
            strokeDasharray: "".concat(E, " ").concat(E),
            strokeDashoffset: _,
          },
          T = {
            strokeDasharray: "".concat(E, " ").concat(E),
            strokeDashoffset: -o * E,
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
        E = n(981631),
        _ = n(388032),
        h = n(136880);
      let T = "-:--",
        I = {
          [x.r.PLAYING]: {
            icon: d.PauseIcon,
            label: _.intl.string(_.t.ZcgDJS),
          },
          [x.r.PAUSED]: { icon: d.PlayIcon, label: _.intl.string(_.t.RscU7O) },
          [x.r.ENDED]: { icon: d.RetryIcon, label: _.intl.string(_.t.hsvh0t) },
        },
        N = (e, t) => {
          (0, f.dA)({
            questId: e,
            event: E.rMx.QUEST_VIDEO_VOLUME_CHANGED,
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
            animSpring: E,
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
                  animationTime: E,
                  visible: T,
                  ariaLabel: eo,
                  tooltipLabel: eo,
                  onClick: y,
                }),
                (0, r.jsx)(j, {
                  iconComponent: C.d,
                  animationTime: E,
                  visible: T,
                  onClick: P,
                  ariaLabel: _.intl.string(_.t.r9s3Ul),
                  tooltipLabel: _.intl.string(_.t.r9s3Ul),
                }),
                (0, r.jsx)(j, {
                  iconComponent: g.o,
                  animationTime: E,
                  visible: T,
                  onClick: M,
                  disabled: !D,
                  ariaLabel: D
                    ? _.intl.string(_.t.zWDcND)
                    : _.intl.string(_.t.xXh3y8),
                  tooltipLabel: D
                    ? _.intl.string(_.t.zWDcND)
                    : _.intl.string(_.t.xXh3y8),
                  tooltipDelayMs: D ? 1500 : 0,
                }),
              ],
            }),
            (0, r.jsxs)(s.animated.div, {
              className: l()(h.videoControlsGroup, h.videoControlsGroupMid),
              style: {
                opacity: (0, s.to)(
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
                  className: h.volumeControlGroup,
                  children: [
                    (0, r.jsx)(j, {
                      iconComponent: en,
                      animationTime: E,
                      visible: T,
                      onClick: () => {
                        if (null != i.current)
                          0 === H
                            ? ($(R), Z(!1), N(f.id, R))
                            : (w(H), $(0), Z(!0), N(f.id, 0));
                      },
                      ariaLabel: _.intl.string(_.t["eIl+AA"]),
                      tooltipLabel: _.intl.string(_.t["eIl+AA"]),
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
                        "aria-label": _.intl.string(_.t["eIl+AA"]),
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
                  animationTime: E,
                  visible: T,
                  onClick: k,
                  active: U && S !== x.r.ENDED,
                  disabled: S === x.r.ENDED,
                  ariaLabel: _.intl.string(_.t.KCzjTk),
                  tooltipLabel: _.intl.string(_.t.KCzjTk),
                }),
                !A &&
                  (0, r.jsx)(j, {
                    iconComponent: v.c,
                    animationTime: E,
                    visible: T,
                    active: V,
                    onClick: B,
                    ariaLabel: _.intl.string(_.t.bDSZOz),
                    tooltipLabel: _.intl.string(_.t.bDSZOz),
                  }),
                (0, r.jsx)(j, {
                  iconComponent: q
                    ? d.FullscreenExitIcon
                    : d.FullscreenEnterIcon,
                  animationTime: E,
                  visible: T,
                  onClick: L,
                  ariaLabel: _.intl.string(_.t.vKZT5u),
                  tooltipLabel: _.intl.string(_.t.vKZT5u),
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
        E = n(472144),
        _ = n(602667),
        h = n(644646),
        T = n(604162),
        I = n(747717),
        N = n(963123),
        b = n(281055),
        j = n(46140),
        D = n(981631),
        A = n(388032),
        y = n(136880);
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
          children: (0, r.jsx)(_.A, {
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
                                children: (0, r.jsx)(E.Z, {
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
        d = n(584448);
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
            onScrubForward: E,
          } = e,
          [_, h] = o.useState(null),
          [T, I] = o.useState(null),
          [N, b] = o.useState(null),
          [j, D] = o.useState(!1),
          A = o.useRef(null),
          y = (e) => {
            (A.current = e), h(e);
          };
        o.useEffect(() => {
          null != _ && (null == g ? b(null) : b(f(g, C, _)));
        }, [_, g, C]);
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
                  null != E &&
                  (e.preventDefault(), e.stopPropagation(), E());
            },
            [S, E],
          ),
          P = null != T && null != _ ? m(T, _, C) : 0,
          M = (0, c.yv)(P),
          O = null != _ ? _.right - f((t / 100) * C, C, _) : null,
          R = null != T && null != _ ? _.right - T : null,
          w = null != N && null != _ ? _.right - N : null;
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
        a = n(136880);
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
        l = n(136880);
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
          return U;
        },
      }),
        n(47120),
        n(653041);
      var r = n(200651),
        o = n(192379),
        i = n(120356),
        l = n.n(i),
        s = n(100621),
        a = n(442837),
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
        _ = n(720293),
        h = n(602667),
        T = n(341907),
        I = n(881773),
        N = n(355243),
        b = n(106743),
        j = n(223418),
        D = n(604162),
        A = n(747717),
        y = n(281055),
        k = n(920393),
        B = n(981631),
        L = n(217702),
        P = n(388032),
        M = n(136880);
      let O = new Set([B.IyS.FIVE_G, B.IyS.FOUR_G, B.IyS.UNKNOWN]),
        R = { tension: 250, friction: 5, clamp: !0 };
      function w() {
        let e = (0, a.e7)([f.Z], () => f.Z.getState().theme);
        return (0, r.jsx)("div", {
          className: M.pauseText,
          style: {
            background: (0, c.wj)(e)
              ? "rgba(0, 0, 0, 0.65)"
              : "rgba(255, 255, 255, 0.65)",
          },
          children: (0, r.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            children: P.intl.string(P.t.U7Xrb2),
          }),
        });
      }
      function F(e) {
        let { quest: t, shouldShow: n } = e,
          i = o.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
        return null == i
          ? null
          : (0, r.jsx)(h.A, {
              questOrQuests: t,
              questContent: x.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                (0, r.jsx)("img", {
                  ref: (t) => {
                    e.current = t;
                  },
                  src: i.url,
                  alt: "Video thumbnail",
                  className: l()(M.stillFrameImageCard, {
                    [M.stillFrameImageCardHidden]: !n,
                  }),
                }),
            });
      }
      function Z(e) {
        let { title: t, subtitle: n, icon: i, onClick: s, className: a } = e,
          [c, d] = o.useState(!1),
          m = () => {
            d(!0);
          },
          f = () => {
            d(!1);
          };
        return (0, r.jsx)(u.Clickable, {
          className: l()(M.endScreenPanel, M.accentOnHover, a),
          onMouseEnter: m,
          onMouseLeave: f,
          onFocus: m,
          onBlur: f,
          onClick: s,
          children: (0, r.jsxs)("div", {
            className: M.endScreenPanelInner,
            children: [
              (0, r.jsxs)("div", {
                className: M.endScreenPanelTextCont,
                children: [
                  (0, r.jsx)(u.Heading, {
                    variant: "heading-md/semibold",
                    className: M.endScreenPanelTextTitle,
                    children: t,
                  }),
                  (0, r.jsx)(u.Heading, {
                    variant: "heading-sm/normal",
                    className: M.endScreenPanelTextSubtitle,
                    children: n,
                  }),
                ],
              }),
              (0, r.jsx)(A.Z, { color: "#747783" }),
              (0, r.jsx)(i, {
                size: "md",
                color: c ? "#FFFFFF" : "#B5BAC1",
                className: M.endScreenIcon,
              }),
            ],
          }),
        });
      }
      function U(e) {
        var t, n, i, c, f, h, A, U, V, q, G;
        let {
            quest: H,
            onOptimisticProgressUpdate: z,
            autoplay: Y,
            parentTransitionState: W,
          } = e,
          Q = (0, E.km)((e) => e.transcriptEnabled),
          K = (0, E.km)((e) => e.setTranscriptEnabled),
          X = (0, E.km)((e) => e.captionEnabled),
          J = (0, E.km)((e) => e.setCaptionEnabled),
          $ = (0, E.km)((e) => e.fullScreenEnabled),
          ee = (0, E.km)((e) => e.setFullScreenEnabled),
          { focused: et, focusedChanged: en } = (0, y.xU)(),
          { visible: er, visibleChanged: eo, targetRef: ei } = (0, y.Yy)(),
          [el, es] = o.useState(!0 === Y ? j.r.PLAYING : j.r.PAUSED),
          [ea, ec] = o.useState(!1),
          eu = (0, S.il)(H),
          [ed, em] = o.useState(eu.percentComplete),
          [ef, ep] = o.useState(!1),
          [ev, eC] = o.useState(!0),
          [eg, ex] = o.useState(!1),
          [eS, eE] = o.useState([]),
          [e_, eh] = o.useState(p.Z.getEffectiveConnectionSpeed()),
          [eT, eI] = o.useState(0),
          [eN, eb] = o.useState(0),
          [ej, eD] = o.useState(!1),
          [eA, ey] = o.useState(!1),
          ek = o.useRef(null),
          eB = o.useRef(null),
          eL = (0, o.useRef)(-1),
          eP = (0, E.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[H.id]) && void 0 !== t
              ? t
              : { timestampSec: 0, duration: 10 };
          }),
          eM = (0, E.km)((e) => e.setVideoProgress),
          eO = (0, E.km)((e) => e.muted),
          eR = (0, E.km)((e) => e.volume),
          ew = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
          eF = (0, o.useRef)(null),
          eZ = (0, o.useRef)(null),
          eU = o.useRef(!0),
          eV =
            (null === (t = H.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          eq = (0, E.km)((e) => e.transcript),
          [eG, eH] = o.useState(null),
          [ez, eY] = o.useState(!1),
          [eW, eQ] = o.useState(!1),
          [eK, eX] = o.useState(null),
          eJ = eV
            ? null !==
                (A =
                  null === (n = eF.current) || void 0 === n
                    ? void 0
                    : n.duration) && void 0 !== A
              ? A
              : 0
            : Math.max(eP.maxTimestampSec, eu.progressSeconds),
          e$ = o.useMemo(
            () =>
              O.has(e_)
                ? _.i.VIDEO_PLAYER_VIDEO
                : _.i.VIDEO_PLAYER_VIDEO_LOW_RES,
            [e_],
          ),
          e0 = o.useMemo(() => (null != e$ ? (0, _.z)(e$, H) : null), [e$, H]),
          e1 = o.useCallback(
            (e) => {
              null != eF.current &&
                (0, C.dA)({
                  questId: H.id,
                  event: B.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                  properties: {
                    ...e,
                    video_asset_id: e$,
                    quest_completed: eV,
                    video_duration_sec: eF.current.duration,
                    video_progress: (0, T.formatVideoProgressRatio)(
                      e.segment_end_sec,
                      eF.current.duration,
                    ),
                  },
                });
            },
            [H.id, e$, eV],
          ),
          { forceSendCurrentSegment: e2 } = (0, k.Z)({
            videoRef: eF,
            isPlaying: el === j.r.PLAYING,
            isMetadataLoaded: ez,
            isInitialSeekComplete: eW,
            onAnalytics: e1,
            emitIntervalMs: 4e3,
            minSegmentDurationMs: 2e3,
          }),
          e9 = o.useCallback(
            (e) => {
              if ((es(e), null != eF.current))
                switch (e) {
                  case j.r.PLAYING:
                    eF.current.play(),
                      (0, C.dA)({
                        questId: H.id,
                        event: B.rMx.QUEST_VIDEO_RESUMED,
                        properties: {
                          video_timestamp_seconds: eF.current.currentTime,
                          pause_reason: eG,
                        },
                      }),
                      eH(null);
                    break;
                  case j.r.PAUSED:
                    eF.current.pause(), e2();
                    break;
                  case j.r.ENDED:
                    K(!1), e2();
                }
            },
            [H.id, eG, e2, K],
          );
        o.useLayoutEffect(() => {
          eU.current &&
            ((eU.current = !1),
            eh(p.Z.getEffectiveConnectionSpeed()),
            eV && eP.timestampSec >= eP.duration && eM(H.id, 0, eP.duration));
        }, []),
          o.useEffect(() => {
            null != eF.current &&
              null != eG &&
              (0, C.dA)({
                questId: H.id,
                event: B.rMx.QUEST_VIDEO_PAUSED,
                properties: {
                  video_timestamp_seconds: eF.current.currentTime,
                  reason: eG,
                },
              });
          }, [eG, H.id]),
          o.useEffect(() => {
            en &&
              null != eF.current &&
              (0, C.dA)({
                questId: H.id,
                event: et
                  ? B.rMx.QUEST_VIDEO_APP_FOCUSED
                  : B.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                properties: {
                  video_timestamp_seconds: eF.current.currentTime,
                  video_state: el,
                },
              });
          }, [et, en, el, H.id]);
        let e7 = o.useCallback(
          (e) => {
            var t;
            !eV &&
              (null === (t = H.userStatus) || void 0 === t
                ? void 0
                : t.enrolledAt) != null &&
              (0, g.FI)(H.id, e),
              null != eF.current &&
                (0, C.dA)({
                  questId: H.id,
                  event: B.rMx.QUEST_VIDEO_PROGRESSED,
                  properties: {
                    progress: (0, T.formatVideoProgressRatio)(
                      eF.current.currentTime,
                      eF.current.duration,
                    ),
                    video_timestamp_seconds: eF.current.currentTime,
                  },
                });
          },
          [H, eV, eF],
        );
        o.useEffect(() => {
          (W === u.ModalTransitionState.HIDDEN ||
            W === u.ModalTransitionState.EXITING ||
            W === u.ModalTransitionState.EXITED ||
            (null != W && eo && !er && !eV) ||
            (en && !et && !eV)) &&
            null != eF.current &&
            el === j.r.PLAYING &&
            (e9(j.r.PAUSED), !eV && eH(j.y.LOST_FOCUS));
        }, [W, et, en, er, eo, el, eV, e9, e7]);
        let e3 = () => {
            ec(!0);
          },
          e6 = () => {
            ec(!1);
          },
          e4 = ea || el === j.r.PAUSED || el === j.r.ENDED,
          e8 = o.useCallback(() => {
            var e;
            let t = (0, v.fn)(
              null === (e = eF.current) || void 0 === e ? void 0 : e.parentNode,
              eF.current,
            );
            null != t &&
              !(0, v.rB)(t) &&
              (t.removeEventListener(v.NO, e8),
              ee(!1),
              (0, C.dA)({
                questId: H.id,
                event: B.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
              }));
          }, [H.id, ee]),
          e5 = () => {
            if (null != eF.current)
              tt(Math.max(eF.current.currentTime - 10, 0)),
                el === j.r.ENDED && e9(j.r.PAUSED),
                (0, C._3)({
                  questId: H.id,
                  questContent: x.jn.VIDEO_MODAL,
                  questContentCTA: C.jZ.SEEK_BACKWARD,
                });
          },
          te = () => {
            if (null == eF.current || !tv) return;
            let e = Math.min(eF.current.currentTime + 10, eJ);
            tt(e),
              el !== j.r.ENDED && e >= eF.current.duration && e9(j.r.ENDED),
              (0, C._3)({
                questId: H.id,
                questContent: x.jn.VIDEO_MODAL,
                questContentCTA: C.jZ.SEEK_FORWARD,
              });
          };
        o.useEffect(() => {
          let e = eF.current;
          return () => {
            let t = (0, v.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(v.NO, e8);
          };
        }, [e8]);
        let tt = o.useCallback(
            (e) => {
              null != eF.current &&
                (e2(),
                ep(!0),
                eQ(!1),
                (eF.current.currentTime = e),
                eM(H.id, e, eF.current.duration));
            },
            [eF, eM, H.id, e2],
          ),
          tn = () => {
            if (null != eF.current)
              switch (el) {
                case j.r.ENDED:
                  tt(0), e9(j.r.PLAYING);
                  break;
                case j.r.PLAYING:
                  e9(j.r.PAUSED), eH(j.y.PAUSE_BUTTON);
                  break;
                default:
                  e9(j.r.PLAYING);
              }
          },
          tr = (e) => {
            eX(e);
          },
          to = (e) => {
            eX((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
          },
          ti = o.useCallback(() => {
            if (null == eF.current || 0 === eF.current.textTracks.length)
              return;
            let e = eF.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
              for (let t = 0; t < e.cues.length; t++) {
                let n = e.cues[t];
                (0, D.JC)(n) &&
                  ((n.id = "cue-".concat(t)),
                  (n.onenter = () => tr(n)),
                  (n.onexit = () => to(n)));
              }
          }, [eF]);
        o.useEffect(() => {
          if (null == eZ.current) return;
          let e = eZ.current;
          return (
            e.addEventListener("load", ti),
            () => {
              null != e && e.removeEventListener("load", ti);
            }
          );
        }, [eZ, ti]);
        let tl = (e) => {
          if (null != eF.current && el === j.r.PLAYING) {
            if ((ev && eC(!1), eg)) {
              let e = null != eB.current ? Date.now() - eB.current : null;
              (0, C.dA)({
                questId: H.id,
                event: B.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                properties: {
                  video_asset_id: e$,
                  network_connection_speed: e_,
                  duration: e,
                  buffer_index: eL.current,
                },
              }),
                ex(!1);
            }
            e9(j.r.PLAYING);
          }
        };
        o.useEffect(() => {
          if (!ef) return;
          let e = setTimeout(() => {
            ep(!1);
          }, 1e3);
          return () => clearTimeout(e);
        }, [ef]);
        let [{ controlBarAnimSpring: ts }, ta] = (0, u.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: R,
            onStart: () => {
              ey(!1);
            },
            onRest: (e) => {
              1 === e.value && ey(!0);
            },
          })),
          tc = (0, o.useRef)(null),
          [{ captionHeightSpring: tu }, td] = (0, u.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: R,
          }));
        o.useEffect(() => {
          var e, t;
          return (
            td({
              captionHeightSpring:
                X &&
                null != eK &&
                null !==
                  (t =
                    null === (e = tc.current) || void 0 === e
                      ? void 0
                      : e.clientHeight) &&
                void 0 !== t
                  ? t
                  : 0,
              immediate: ew,
            }),
            () => {
              tu.stop();
            }
          );
        }, [X, td, ew, eK, tu]),
          o.useEffect(
            () => (
              ta({ controlBarAnimSpring: e4 || ej ? 1 : 0, immediate: ew }),
              () => {
                ts.stop();
              }
            ),
            [e4, ta, ew, ej, ts],
          );
        let tm = el === j.r.ENDED,
          tf = o.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_THUMBNAIL, H), [H]),
          tp = o.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_CAPTION, H), [H]),
          tv =
            eV ||
            eP.maxTimestampSec >=
              (null !==
                (U =
                  null === (i = eF.current) || void 0 === i
                    ? void 0
                    : i.currentTime) && void 0 !== U
                ? U
                : 0) +
                1;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(u.Clickable, {
            className: M.videoCont,
            "data-fullscreen": $,
            tabIndex: -1,
            onMouseEnter: e3,
            onMouseLeave: e6,
            onFocus: e3,
            onBlur: e6,
            children: (0, r.jsxs)("div", {
              className: M.videoContInnerRelative,
              children: [
                (0, r.jsx)(F, { quest: H, shouldShow: tm }),
                tm && (0, r.jsx)("div", { className: M.videoContOverlay }),
                (0, r.jsxs)(m.Z, {
                  ref: (e) => {
                    (eF.current = e), (ei.current = e);
                  },
                  autoPlay: Y,
                  playsInline: !0,
                  mediaLayoutType: $ ? L.hV.STATIC : L.hV.RESPONSIVE,
                  className: l()({ [M.hidden]: tm, [M.videoInner]: !0 }),
                  controls: !1,
                  poster: null == tf ? void 0 : tf.url,
                  disablePictureInPicture: !0,
                  onTimeUpdate: (e) => {
                    null != eF.current &&
                      (eF.current.currentTime >= eT &&
                        (eI(eF.current.currentTime + 6 + 2 * Math.random()),
                        e7(eF.current.currentTime)),
                      eF.current.currentTime >= eN &&
                        (eb(eF.current.currentTime + 1),
                        (0, g.qm)(H.id, eu.taskType, eF.current.currentTime),
                        z(eF.current.currentTime)),
                      eM(H.id, eF.current.currentTime, eF.current.duration),
                      em((eF.current.currentTime / eF.current.duration) * 100));
                  },
                  onEnded: (e) => {
                    null != eF.current &&
                      (e7(eF.current.duration + 1),
                      eM(H.id, eF.current.duration, eF.current.duration)),
                      e9(j.r.ENDED),
                      ex(!1);
                  },
                  onLoadedData: (e) => {
                    if (ev) {
                      let e =
                        null != ek.current ? Date.now() - ek.current : null;
                      (0, C.dA)({
                        questId: H.id,
                        event: B.rMx.QUEST_VIDEO_LOADING_ENDED,
                        properties: {
                          video_asset_id: e$,
                          network_connection_speed: e_,
                          duration: e,
                        },
                      }),
                        eC(!1);
                    }
                  },
                  onLoadedMetadata: (e) => {
                    if (null != eF.current)
                      eY(!0),
                        tt(
                          eV
                            ? eP.timestampSec
                            : Math.max(eP.timestampSec, eu.progressSeconds),
                        ),
                        eO ? (eF.current.volume = 0) : (eF.current.volume = eR);
                  },
                  onLoadStart: () => {
                    (ek.current = Date.now()),
                      (0, C.dA)({
                        questId: H.id,
                        event: B.rMx.QUEST_VIDEO_LOADING_STARTED,
                        properties: {
                          video_asset_id: e$,
                          network_connection_speed: e_,
                        },
                      });
                  },
                  onWaiting: (e) => {
                    (eB.current = Date.now()),
                      (eL.current += 1),
                      (0, C.dA)({
                        questId: H.id,
                        event: B.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                        properties: {
                          video_asset_id: e$,
                          network_connection_speed: e_,
                          buffer_index: eL.current,
                        },
                      }),
                      ex(!0);
                  },
                  onProgress: (e) => {
                    if (null == eF.current) return;
                    let t = [];
                    for (let e = 0; e < eF.current.buffered.length; e++) {
                      let n = eF.current.buffered.start(e),
                        r = eF.current.buffered.end(e);
                      if (!(r - n < 1))
                        t.push({
                          start: n / eF.current.duration,
                          size: (r - n) / eF.current.duration,
                        });
                    }
                    eE(t);
                  },
                  onCanPlay: tl,
                  onCanPlayThrough: tl,
                  onSeeked: () => {
                    eQ(!0);
                  },
                  onClick: () => {
                    tn();
                  },
                  crossOrigin: "anonymous",
                  children: [
                    null != tp &&
                      (0, r.jsx)("track", {
                        ref: eZ,
                        src: tp.url,
                        label: "English",
                        kind: "captions",
                        srcLang: "en",
                        default: !0,
                      }),
                    null != e0 &&
                      (0, r.jsx)("source", { src: e0.url, type: e0.mimetype }),
                  ],
                }),
                (ev || eg) &&
                  el === j.r.PLAYING &&
                  (0, r.jsx)(u.Spinner, {
                    type: u.Spinner.Type.WANDERING_CUBES,
                    className: M.loadingSpinner,
                  }),
                el === j.r.PAUSED && eG === j.y.LOST_FOCUS && (0, r.jsx)(w, {}),
                Q &&
                  el !== j.r.ENDED &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(u.Clickable, {
                        onClick: () => K(!1),
                        tabIndex: -1,
                        children: (0, r.jsx)("div", {
                          className: M.transcriptOverlay,
                        }),
                      }),
                      (0, r.jsx)(s.animated.div, {
                        className: M.transcriptCont,
                        style: {
                          marginBottom: (0, s.to)([ts, tu], (e, t) =>
                            "".concat(50 * e + t, "px"),
                          ),
                        },
                        children: (0, r.jsx)(b.K, {
                          quest: H,
                          onClose: () => {
                            K(!1),
                              (0, C._3)({
                                questId: H.id,
                                questContent: x.jn.VIDEO_MODAL,
                                questContentCTA: C.jZ.TRANSCRIPT_DISABLE,
                              });
                          },
                        }),
                      }),
                    ],
                  }),
                el === j.r.ENDED &&
                  (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(Z, {
                      title:
                        null !==
                          (V =
                            null === (c = H.config.videoMetadata) ||
                            void 0 === c
                              ? void 0
                              : c.messages.videoEndCtaTitle) && void 0 !== V
                          ? V
                          : P.intl.string(P.t.iiTtpK),
                      subtitle:
                        null !==
                          (q =
                            null === (f = H.config.videoMetadata) ||
                            void 0 === f
                              ? void 0
                              : f.messages.videoEndCtaSubtitle) && void 0 !== q
                          ? q
                          : P.intl.string(P.t.mxaHf3),
                      icon: u.ArrowLargeRightIcon,
                      className: M.endScreenPanelRight,
                      onClick: () => {
                        (0, C._3)({
                          questId: H.id,
                          questContent: x.jn.VIDEO_MODAL,
                          questContentCTA: C.jZ.LEARN_MORE,
                        }),
                          (0, S.FE)(H, {
                            content: x.jn.VIDEO_MODAL,
                            ctaContent: C.jZ.LEARN_MORE,
                          });
                      },
                    }),
                  }),
                (0, r.jsx)(s.animated.div, {
                  className: M.videoFooterContGradient,
                  style: {
                    opacity: (0, s.to)(
                      [ts.to({ range: [0, 1], output: [0, 1] })],
                      (e) => "".concat(e),
                    ),
                  },
                }),
                (0, r.jsx)(
                  "div",
                  {
                    className: l()(M.playPausePopCont, {
                      [M.play]: el === j.r.PLAYING,
                      [M.pause]: el === j.r.PAUSED,
                    }),
                    children:
                      el === j.r.PLAYING
                        ? (0, r.jsx)(u.PlayIcon, {
                            className: M.playPausePopIcon,
                          })
                        : (0, r.jsx)(u.PauseIcon, {
                            className: M.playPausePopIcon,
                          }),
                  },
                  el,
                ),
                X &&
                  null != eK &&
                  (0, r.jsx)(s.animated.div, {
                    className: M.captionContainer,
                    ref: tc,
                    style: {
                      translateY: (0, s.to)(
                        [ts.to({ range: [0, 1], output: [0, -50] })],
                        (e) => "".concat(e, "px"),
                      ),
                    },
                    children: (0, r.jsx)(u.Text, {
                      variant: "text-lg/semibold",
                      color: "always-white",
                      className: M.captionText,
                      children: eK.text,
                    }),
                  }),
                (0, r.jsxs)(s.animated.div, {
                  className: M.videoFooterCont,
                  style: {
                    paddingLeft: (0, s.to)(
                      [ts.to({ range: [0, 1], output: [0, 25] })],
                      (e) => "".concat(e, "px"),
                    ),
                    paddingRight: (0, s.to)(
                      [ts.to({ range: [0, 1], output: [0, 25] })],
                      (e) => "".concat(e, "px"),
                    ),
                    height: (0, s.to)(
                      [ts.to({ range: [0, 1], output: [0, 50] })],
                      (e) => "".concat(e, "px"),
                    ),
                  },
                  children: [
                    (0, r.jsx)(N.Z, {
                      percent: ed,
                      animate: !0 !== eU.current && !ef,
                      interactionEnabled: eV && eA,
                      backgroundColor: e4 ? void 0 : "rgba(0, 0, 0, 0.0)",
                      preloadedBuffers: e4 ? eS : void 0,
                      duration:
                        null !==
                          (G =
                            null === (h = eF.current) || void 0 === h
                              ? void 0
                              : h.duration) && void 0 !== G
                          ? G
                          : 1,
                      maxSeekableTime: e4 && eA ? eJ : void 0,
                      onClick: (e) => {
                        tt(e), el === j.r.ENDED && e9(j.r.PLAYING);
                      },
                      onScrubBack: () => {
                        e5();
                      },
                      onScrubForward: () => {
                        te();
                      },
                    }),
                    (0, r.jsx)(s.animated.div, {
                      className: M.videoControlsCont,
                      style: {
                        paddingTop: (0, s.to)(
                          [ts.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(e * e * 12, "px"),
                        ),
                        paddingBottom: (0, s.to)(
                          [ts.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(e * e * 12, "px"),
                        ),
                        pointerEvents: (0, s.to)(
                          [ts.to({ range: [0, 1], output: [0, 1] })],
                          (e) => (e < 0.3 ? "none" : "auto"),
                        ),
                      },
                      children: (0, r.jsx)(I.Z, {
                        videoRef: eF,
                        quest: H,
                        playerState: el,
                        animSpring: ts,
                        visible: e4,
                        seekForwardEnabled: tv,
                        hideCaptionBtn: null == tp,
                        handlePlaybackBtnClick: tn,
                        handleTranscriptBtnClick: () => {
                          !Q &&
                            (null == eq ||
                              eq.questId !== H.id ||
                              eq.fetchStatus === E.iF.NONE ||
                              eq.fetchStatus === E.iF.FAILURE) &&
                            (0, g.lL)(H),
                            K(!Q),
                            (0, C._3)({
                              questId: H.id,
                              questContent: x.jn.VIDEO_MODAL,
                              questContentCTA: Q
                                ? C.jZ.TRANSCRIPT_DISABLE
                                : C.jZ.TRANSCRIPT_ENABLE,
                            });
                        },
                        handleCaptionBtnClick: () => {
                          J(!X),
                            (0, C._3)({
                              questId: H.id,
                              questContent: x.jn.VIDEO_MODAL,
                              questContentCTA: X
                                ? C.jZ.CLOSED_CAPTIONING_DISABLE
                                : C.jZ.CLOSED_CAPTIONING_ENABLE,
                            });
                        },
                        handleFullScreenBtnClick: () => {
                          var e;
                          let t = !$,
                            n = (0, v.fn)(
                              null === (e = eF.current) || void 0 === e
                                ? void 0
                                : e.parentNode,
                              eF.current,
                            );
                          t && null != n
                            ? ((0, v.Dj)(n),
                              n.addEventListener(v.NO, e8),
                              (0, C.dA)({
                                questId: H.id,
                                event: B.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                              }))
                            : !t &&
                              null != n &&
                              (n.removeEventListener(v.NO, e8),
                              (0, C.dA)({
                                questId: H.id,
                                event: B.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                              }),
                              (0, v.Pr)(n)),
                            ee(t);
                        },
                        handleSeekBackBtnClick: e5,
                        handleSeekForwardBtnClick: te,
                        handleControlBarPendingInteraction: eD,
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
    798020: function (e, t, n) {
      e.exports = {
        ctaButtons: "ctaButtons_e60321",
        cta: "cta_e60321",
        shine: "shine_e60321",
        backButton: "backButton_e60321",
        backButtonInner: "backButtonInner_e60321",
        backIcon: "backIcon_e60321",
      };
    },
    937159: function (e, t, n) {
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
    136880: function (e, t, n) {
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
    584448: function (e, t, n) {
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
//# sourceMappingURL=a0e47b0580639a7026bb.js.map
