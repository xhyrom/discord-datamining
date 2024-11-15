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
          a = (0, o.Z)(() => e(n.current));
        return (
          (0, r.useLayoutEffect)(() => {
            if (!t) return;
            null == l.current && (l.current = (0, i.pP)(a.current));
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
              isExpanded: i,
            });
          if (h) return (0, r.jsx)(g, { quest: n, taskDetails: f });
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
                  className: l()(d.coverContent, d.progressTextWrapper),
                  children: [
                    (0, r.jsx)("div", {
                      className: l()(d.coverContent, d.progressTextOverlay),
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
        f = n(617136),
        p = n(184299),
        v = n(818570),
        C = n(957099),
        g = n(312729),
        x = n(223418),
        S = n(604162),
        E = n(981631),
        h = n(388032),
        _ = n(136880);
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
            tooltipDelayMs: f = 1500,
            onClick: p,
          } = e,
          v = (e) =>
            (0, r.jsx)(d.Clickable, {
              ...e,
              onClick: p,
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
          f = (0, i.m)(a),
          p =
            null !== (t = null == f ? void 0 : f.width) && void 0 !== t ? t : s,
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
          f =
            null !== (t = null == m ? void 0 : m.width) && void 0 !== t ? t : s,
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
          f =
            null !== (t = null == m ? void 0 : m.width) && void 0 !== t ? t : s,
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
        A = n(136880);
      function k(e) {
        var t;
        let { transitionState: n, onClose: i, quest: p, autoplay: k } = e,
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
                                className: l()(
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
          i = (0, a.e7)([p.Z], () => p.Z.getQuest(t));
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
        a = n(481060),
        s = n(393903),
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
        s = n(136880);
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
        l = n(136880);
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
          return U;
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
        T = n(341907),
        I = n(881773),
        j = n(355243),
        N = n(106743),
        b = n(223418),
        D = n(604162),
        y = n(747717),
        A = n(281055),
        k = n(920393),
        B = n(981631),
        L = n(217702),
        P = n(388032),
        M = n(136880);
      let O = new Set([B.IyS.FIVE_G, B.IyS.FOUR_G, B.IyS.UNKNOWN]),
        R = { tension: 250, friction: 5, clamp: !0 };
      function w() {
        let e = (0, s.e7)([f.Z], () => f.Z.getState().theme);
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
          i = o.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
        return null == i
          ? null
          : (0, r.jsx)(_.A, {
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
        let { title: t, subtitle: n, icon: i, onClick: a, className: s } = e,
          [c, d] = o.useState(!1),
          m = () => {
            d(!0);
          },
          f = () => {
            d(!1);
          };
        return (0, r.jsx)(u.Clickable, {
          className: l()(M.endScreenPanel, M.accentOnHover, s),
          onMouseEnter: m,
          onMouseLeave: f,
          onFocus: m,
          onBlur: f,
          onClick: a,
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
              (0, r.jsx)(y.Z, { color: "#747783" }),
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
        var t, n, i, c, f, _, y, U, V, q, G;
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
          { focused: et, focusedChanged: en } = (0, A.xU)(),
          { visible: er, visibleChanged: eo, targetRef: ei } = (0, A.Yy)(),
          [el, ea] = o.useState(!0 === Y ? b.r.PLAYING : b.r.PAUSED),
          [es, ec] = o.useState(!1),
          eu = (0, S.il)(H),
          [ed, em] = o.useState(eu.percentComplete),
          [ef, ep] = o.useState(!1),
          [ev, eC] = o.useState(!0),
          [eg, ex] = o.useState(!1),
          [eS, eE] = o.useState([]),
          [eh, e_] = o.useState(p.Z.getEffectiveConnectionSpeed()),
          [eT, eI] = o.useState(0),
          [ej, eN] = o.useState(0),
          [eb, eD] = o.useState(!1),
          [ey, eA] = o.useState(!1),
          ek = (0, E.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[H.id]) && void 0 !== t
              ? t
              : { timestampSec: 0, duration: 10 };
          }),
          eB = (0, E.km)((e) => e.setVideoProgress),
          eL = (0, E.km)((e) => e.muted),
          eP = (0, E.km)((e) => e.volume),
          eM = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
          eO = (0, o.useRef)(null),
          eR = (0, o.useRef)(null),
          ew = o.useRef(!0),
          eF =
            (null === (t = H.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          eZ = (0, E.km)((e) => e.transcript),
          [eU, eV] = o.useState(null),
          [eq, eG] = o.useState(!1),
          [eH, ez] = o.useState(!1),
          [eY, eW] = o.useState(null),
          eQ = eF
            ? null !==
                (y =
                  null === (n = eO.current) || void 0 === n
                    ? void 0
                    : n.duration) && void 0 !== y
              ? y
              : 0
            : Math.max(ek.maxTimestampSec, eu.progressSeconds),
          eK = o.useMemo(
            () =>
              O.has(eh)
                ? h.i.VIDEO_PLAYER_VIDEO
                : h.i.VIDEO_PLAYER_VIDEO_LOW_RES,
            [eh],
          ),
          eX = o.useMemo(() => (null != eK ? (0, h.z)(eK, H) : null), [eK, H]),
          eJ = o.useCallback(
            (e) => {
              null != eO.current &&
                (0, C.dA)({
                  questId: H.id,
                  event: B.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                  properties: {
                    ...e,
                    video_asset_id: eK,
                    quest_completed: eF,
                    video_duration_sec: eO.current.duration,
                    video_progress: (0, T.formatVideoProgressRatio)(
                      e.segment_end_sec,
                      eO.current.duration,
                    ),
                  },
                });
            },
            [H.id, eK, eF],
          ),
          { forceSendCurrentSegment: e$ } = (0, k.Z)({
            videoRef: eO,
            isPlaying: el === b.r.PLAYING,
            isMetadataLoaded: eq,
            isInitialSeekComplete: eH,
            onAnalytics: eJ,
            emitIntervalMs: 4e3,
            minSegmentDurationMs: 2e3,
          }),
          e0 = o.useCallback(
            (e) => {
              if ((ea(e), null != eO.current))
                switch (e) {
                  case b.r.PLAYING:
                    eO.current.play(), eV(null);
                    break;
                  case b.r.PAUSED:
                    eO.current.pause(), e$();
                    break;
                  case b.r.ENDED:
                    K(!1), e$();
                }
            },
            [eO, ea, eV, K, e$],
          );
        o.useLayoutEffect(() => {
          ew.current &&
            ((ew.current = !1),
            e_(p.Z.getEffectiveConnectionSpeed()),
            eF && ek.timestampSec >= ek.duration && eB(H.id, 0, ek.duration));
        }, []),
          o.useEffect(() => {
            null != eO.current &&
              null != eU &&
              (0, C.dA)({
                questId: H.id,
                event: B.rMx.QUEST_VIDEO_PAUSED,
                properties: {
                  video_timestamp_seconds: eO.current.currentTime,
                  reason: eU,
                },
              });
          }, [eU, H.id]),
          o.useEffect(() => {
            en &&
              null != eO.current &&
              (0, C.dA)({
                questId: H.id,
                event: et
                  ? B.rMx.QUEST_VIDEO_APP_FOCUSED
                  : B.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                properties: {
                  video_timestamp_seconds: eO.current.currentTime,
                  video_state: el,
                },
              });
          }, [et, en, el, H.id]);
        let e1 = o.useCallback(
          (e) => {
            var t;
            !eF &&
              (null === (t = H.userStatus) || void 0 === t
                ? void 0
                : t.enrolledAt) != null &&
              (0, g.FI)(H.id, e),
              null != eO.current &&
                (0, C.dA)({
                  questId: H.id,
                  event: B.rMx.QUEST_VIDEO_PROGRESSED,
                  properties: {
                    progress: (0, T.formatVideoProgressRatio)(
                      eO.current.currentTime,
                      eO.current.duration,
                    ),
                    video_timestamp_seconds: eO.current.currentTime,
                  },
                });
          },
          [H, eF, eO],
        );
        o.useEffect(() => {
          (W === u.ModalTransitionState.HIDDEN ||
            W === u.ModalTransitionState.EXITING ||
            W === u.ModalTransitionState.EXITED ||
            (null != W && eo && !er && !eF) ||
            (en && !et && !eF)) &&
            null != eO.current &&
            el === b.r.PLAYING &&
            (e0(b.r.PAUSED), !eF && eV(b.y.LOST_FOCUS));
        }, [W, et, en, er, eo, el, eF, e0, e1]);
        let e2 = () => {
            ec(!0);
          },
          e9 = () => {
            ec(!1);
          },
          e7 = es || el === b.r.PAUSED || el === b.r.ENDED,
          e3 = o.useCallback(() => {
            var e;
            let t = (0, v.fn)(
              null === (e = eO.current) || void 0 === e ? void 0 : e.parentNode,
              eO.current,
            );
            null != t &&
              !(0, v.rB)(t) &&
              (t.removeEventListener(v.NO, e3),
              ee(!1),
              (0, C.dA)({
                questId: H.id,
                event: B.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
              }));
          }, [H.id, ee]),
          e6 = () => {
            if (null != eO.current)
              e8(Math.max(eO.current.currentTime - 10, 0)),
                el === b.r.ENDED && e0(b.r.PAUSED),
                (0, C._3)({
                  questId: H.id,
                  questContent: x.jn.VIDEO_MODAL,
                  questContentCTA: C.jZ.SEEK_BACKWARD,
                });
          },
          e4 = () => {
            if (null == eO.current || !tm) return;
            let e = Math.min(eO.current.currentTime + 10, eQ);
            e8(e),
              el !== b.r.ENDED && e >= eO.current.duration && e0(b.r.ENDED),
              (0, C._3)({
                questId: H.id,
                questContent: x.jn.VIDEO_MODAL,
                questContentCTA: C.jZ.SEEK_FORWARD,
              });
          };
        o.useEffect(() => {
          let e = eO.current;
          return () => {
            let t = (0, v.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(v.NO, e3);
          };
        }, [e3]);
        let e8 = o.useCallback(
            (e) => {
              null != eO.current &&
                (e$(),
                ep(!0),
                ez(!1),
                (eO.current.currentTime = e),
                eB(H.id, e, eO.current.duration));
            },
            [eO, eB, H.id, e$],
          ),
          e5 = () => {
            if (null != eO.current)
              switch (el) {
                case b.r.ENDED:
                  e8(0), e0(b.r.PLAYING);
                  break;
                case b.r.PLAYING:
                  e0(b.r.PAUSED), eV(b.y.PAUSE_BUTTON);
                  break;
                default:
                  e0(b.r.PLAYING);
              }
          },
          te = (e) => {
            eW(e);
          },
          tt = (e) => {
            eW((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
          },
          tn = o.useCallback(() => {
            if (null == eO.current || 0 === eO.current.textTracks.length)
              return;
            let e = eO.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
              for (let t = 0; t < e.cues.length; t++) {
                let n = e.cues[t];
                (0, D.JC)(n) &&
                  ((n.id = "cue-".concat(t)),
                  (n.onenter = () => te(n)),
                  (n.onexit = () => tt(n)));
              }
          }, [eO]);
        o.useEffect(() => {
          if (null == eR.current) return;
          let e = eR.current;
          return (
            e.addEventListener("load", tn),
            () => {
              null != e && e.removeEventListener("load", tn);
            }
          );
        }, [eR, tn]);
        let tr = (e) => {
          null != eO.current &&
            el === b.r.PLAYING &&
            (ev && eC(!1), eg && ex(!1), e0(b.r.PLAYING));
        };
        o.useEffect(() => {
          if (!ef) return;
          let e = setTimeout(() => {
            ep(!1);
          }, 1e3);
          return () => clearTimeout(e);
        }, [ef]);
        let [{ controlBarAnimSpring: to }, ti] = (0, u.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: R,
            onStart: () => {
              eA(!1);
            },
            onRest: (e) => {
              1 === e.value && eA(!0);
            },
          })),
          tl = (0, o.useRef)(null),
          [{ captionHeightSpring: ta }, ts] = (0, u.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: R,
          }));
        o.useEffect(() => {
          var e, t;
          return (
            ts({
              captionHeightSpring:
                X &&
                null != eY &&
                null !==
                  (t =
                    null === (e = tl.current) || void 0 === e
                      ? void 0
                      : e.clientHeight) &&
                void 0 !== t
                  ? t
                  : 0,
              immediate: eM,
            }),
            () => {
              ta.stop();
            }
          );
        }, [X, ts, eM, eY, ta]),
          o.useEffect(
            () => (
              ti({ controlBarAnimSpring: e7 || eb ? 1 : 0, immediate: eM }),
              () => {
                to.stop();
              }
            ),
            [e7, ti, eM, eb, to],
          );
        let tc = el === b.r.ENDED,
          tu = o.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_THUMBNAIL, H), [H]),
          td = o.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_CAPTION, H), [H]),
          tm =
            eF ||
            ek.maxTimestampSec >=
              (null !==
                (U =
                  null === (i = eO.current) || void 0 === i
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
            onMouseEnter: e2,
            onMouseLeave: e9,
            onFocus: e2,
            onBlur: e9,
            children: (0, r.jsxs)("div", {
              className: M.videoContInnerRelative,
              children: [
                (0, r.jsx)(F, { quest: H, shouldShow: tc }),
                tc && (0, r.jsx)("div", { className: M.videoContOverlay }),
                (0, r.jsxs)(m.Z, {
                  ref: (e) => {
                    (eO.current = e), (ei.current = e);
                  },
                  autoPlay: Y,
                  playsInline: !0,
                  mediaLayoutType: $ ? L.hV.STATIC : L.hV.RESPONSIVE,
                  className: l()({ [M.hidden]: tc, [M.videoInner]: !0 }),
                  controls: !1,
                  poster: null == tu ? void 0 : tu.url,
                  disablePictureInPicture: !0,
                  onTimeUpdate: (e) => {
                    null != eO.current &&
                      (eO.current.currentTime >= eT &&
                        (eI(eO.current.currentTime + 6 + 2 * Math.random()),
                        e1(eO.current.currentTime)),
                      eO.current.currentTime >= ej &&
                        (eN(eO.current.currentTime + 1),
                        (0, g.qm)(H.id, eu.taskType, eO.current.currentTime),
                        z(eO.current.currentTime)),
                      eB(H.id, eO.current.currentTime, eO.current.duration),
                      em((eO.current.currentTime / eO.current.duration) * 100));
                  },
                  onEnded: (e) => {
                    null != eO.current &&
                      (e1(eO.current.duration + 1),
                      eB(H.id, eO.current.duration, eO.current.duration)),
                      e0(b.r.ENDED),
                      ex(!1);
                  },
                  onLoadedData: (e) => {
                    ev && eC(!1);
                  },
                  onLoadedMetadata: (e) => {
                    if (null != eO.current)
                      eG(!0),
                        e8(
                          eF
                            ? ek.timestampSec
                            : Math.max(ek.timestampSec, eu.progressSeconds),
                        ),
                        eL ? (eO.current.volume = 0) : (eO.current.volume = eP);
                  },
                  onWaiting: (e) => {
                    ex(!0);
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
                    eE(t);
                  },
                  onCanPlay: tr,
                  onCanPlayThrough: tr,
                  onSeeked: () => {
                    ez(!0);
                  },
                  onClick: () => {
                    e5();
                  },
                  crossOrigin: "anonymous",
                  children: [
                    null != td &&
                      (0, r.jsx)("track", {
                        ref: eR,
                        src: td.url,
                        label: "English",
                        kind: "captions",
                        srcLang: "en",
                        default: !0,
                      }),
                    null != eX &&
                      (0, r.jsx)("source", { src: eX.url, type: eX.mimetype }),
                  ],
                }),
                (ev || eg) &&
                  (0, r.jsx)(u.Spinner, {
                    type: u.Spinner.Type.WANDERING_CUBES,
                    className: M.loadingSpinner,
                  }),
                el === b.r.PAUSED && eU === b.y.LOST_FOCUS && (0, r.jsx)(w, {}),
                Q &&
                  el !== b.r.ENDED &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(u.Clickable, {
                        onClick: () => K(!1),
                        tabIndex: -1,
                        children: (0, r.jsx)("div", {
                          className: M.transcriptOverlay,
                        }),
                      }),
                      (0, r.jsx)(a.animated.div, {
                        className: M.transcriptCont,
                        style: {
                          marginBottom: (0, a.to)([to, ta], (e, t) =>
                            "".concat(50 * e + t, "px"),
                          ),
                        },
                        children: (0, r.jsx)(N.K, {
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
                el === b.r.ENDED &&
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
                (0, r.jsx)(a.animated.div, {
                  className: M.videoFooterContGradient,
                  style: {
                    opacity: (0, a.to)(
                      [to.to({ range: [0, 1], output: [0, 1] })],
                      (e) => "".concat(e),
                    ),
                  },
                }),
                (0, r.jsx)(
                  "div",
                  {
                    className: l()(M.playPausePopCont, {
                      [M.play]: el === b.r.PLAYING,
                      [M.pause]: el === b.r.PAUSED,
                    }),
                    children:
                      el === b.r.PLAYING
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
                  null != eY &&
                  (0, r.jsx)(a.animated.div, {
                    className: M.captionContainer,
                    ref: tl,
                    style: {
                      translateY: (0, a.to)(
                        [to.to({ range: [0, 1], output: [0, -50] })],
                        (e) => "".concat(e, "px"),
                      ),
                    },
                    children: (0, r.jsx)(u.Text, {
                      variant: "text-lg/semibold",
                      color: "always-white",
                      className: M.captionText,
                      children: eY.text,
                    }),
                  }),
                (0, r.jsxs)(a.animated.div, {
                  className: M.videoFooterCont,
                  style: {
                    paddingLeft: (0, a.to)(
                      [to.to({ range: [0, 1], output: [0, 25] })],
                      (e) => "".concat(e, "px"),
                    ),
                    paddingRight: (0, a.to)(
                      [to.to({ range: [0, 1], output: [0, 25] })],
                      (e) => "".concat(e, "px"),
                    ),
                    height: (0, a.to)(
                      [to.to({ range: [0, 1], output: [0, 50] })],
                      (e) => "".concat(e, "px"),
                    ),
                  },
                  children: [
                    (0, r.jsx)(j.Z, {
                      percent: ed,
                      animate: !0 !== ew.current && !ef,
                      interactionEnabled: eF && ey,
                      backgroundColor: e7 ? void 0 : "rgba(0, 0, 0, 0.0)",
                      preloadedBuffers: e7 ? eS : void 0,
                      duration:
                        null !==
                          (G =
                            null === (_ = eO.current) || void 0 === _
                              ? void 0
                              : _.duration) && void 0 !== G
                          ? G
                          : 1,
                      maxSeekableTime: e7 && ey ? eQ : void 0,
                      onClick: (e) => {
                        e8(e), el === b.r.ENDED && e0(b.r.PLAYING);
                      },
                      onScrubBack: () => {
                        e6();
                      },
                      onScrubForward: () => {
                        e4();
                      },
                    }),
                    (0, r.jsx)(a.animated.div, {
                      className: M.videoControlsCont,
                      style: {
                        paddingTop: (0, a.to)(
                          [to.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(e * e * 12, "px"),
                        ),
                        paddingBottom: (0, a.to)(
                          [to.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(e * e * 12, "px"),
                        ),
                        pointerEvents: (0, a.to)(
                          [to.to({ range: [0, 1], output: [0, 1] })],
                          (e) => (e < 0.3 ? "none" : "auto"),
                        ),
                      },
                      children: (0, r.jsx)(I.Z, {
                        videoRef: eO,
                        quest: H,
                        playerState: el,
                        animSpring: to,
                        visible: e7,
                        seekForwardEnabled: tm,
                        hideCaptionBtn: null == td,
                        handlePlaybackBtnClick: e5,
                        handleTranscriptBtnClick: () => {
                          !Q &&
                            (null == eZ ||
                              eZ.questId !== H.id ||
                              eZ.fetchStatus === E.iF.NONE ||
                              eZ.fetchStatus === E.iF.FAILURE) &&
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
                              null === (e = eO.current) || void 0 === e
                                ? void 0
                                : e.parentNode,
                              eO.current,
                            );
                          t && null != n
                            ? ((0, v.Dj)(n),
                              n.addEventListener(v.NO, e3),
                              (0, C.dA)({
                                questId: H.id,
                                event: B.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                              }))
                            : !t &&
                              null != n &&
                              (n.removeEventListener(v.NO, e3),
                              (0, C.dA)({
                                questId: H.id,
                                event: B.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                              }),
                              (0, v.Pr)(n)),
                            ee(t);
                        },
                        handleSeekBackBtnClick: e6,
                        handleSeekForwardBtnClick: e4,
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
//# sourceMappingURL=a77a75ed8d2a1592cc69.js.map
