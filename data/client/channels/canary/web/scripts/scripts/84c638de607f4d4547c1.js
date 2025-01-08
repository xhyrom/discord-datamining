"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["32249"],
  {
    393903: function (e, t, n) {
      n.d(t, {
        y: function () {
          return o;
        },
      });
      var r = n(192379),
        i = n(237617),
        l = n(889711);
      function o(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n = (0, r.useRef)(null),
          o = (0, r.useRef)(null),
          s = (0, i.Z)(() => e(n.current));
        return (
          (0, r.useLayoutEffect)(() => {
            if (!t) return;
            null == o.current && (o.current = (0, l.pP)(s.current));
            let e = n.current,
              r = o.current;
            if (null != e && null != r) (0, l.YP)(r, e);
          }, [t, e, s]),
          (0, r.useEffect)(() => {
            if (!t) return;
            let e = n.current,
              r = o.current;
            if (null != e && null != r)
              return () => {
                (0, l.UC)(r, e);
              };
          }, [t]),
          n
        );
      }
    },
    881773: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return j;
        },
      }),
        n(47120);
      var r = n(200651),
        i = n(192379),
        l = n(120356),
        o = n.n(l),
        s = n(666912),
        a = n(442837),
        u = n(692547),
        c = n(561779),
        d = n(481060),
        m = n(607070),
        v = n(617136),
        E = n(184299),
        p = n(902749),
        C = n(957099),
        f = n(312729),
        S = n(223418),
        g = n(604162),
        x = n(981631),
        h = n(388032),
        _ = n(451680);
      let T = "-:--",
        N = {
          [S.rq.PLAYING]: {
            icon: d.PauseIcon,
            label: h.intl.string(h.t.ZcgDJS),
          },
          [S.rq.PAUSED]: { icon: d.PlayIcon, label: h.intl.string(h.t.RscU7O) },
          [S.rq.ENDED]: { icon: d.RetryIcon, label: h.intl.string(h.t.hsvh0t) },
        },
        D = (e, t) => {
          (0, v.dA)({
            questId: e,
            event: x.rMx.QUEST_VIDEO_VOLUME_CHANGED,
            properties: { volume_threshold: t > 0 && t < 1 ? 0.5 : t },
          });
        };
      function I(e) {
        let { current: t, duration: n } = e,
          i = null != t ? (0, g.yv)(t) : T,
          l = null != n ? (0, g.yv)(n) : T;
        return (
          (i = i.padStart(l.length, "0")),
          (0, r.jsxs)("div", {
            className: o()(_.durationTimeWrapper, _.controlsBarItem),
            children: [
              (0, r.jsx)(d.Text, {
                variant: "text-xs/normal",
                className: _.durationTimeDisplay,
                children: i,
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
      let A = i.forwardRef(function (e, t) {
        let {
            iconComponent: n,
            animationTime: i,
            visible: l,
            ariaLabel: a,
            active: c,
            disabled: m,
            tooltipLabel: v,
            tooltipDelayMs: E = 1500,
            shortcut: p,
            onClick: C,
          } = e,
          f = (e) =>
            (0, r.jsx)(d.Clickable, {
              ...e,
              onClick: !0 === m ? void 0 : C,
              className: o()(_.videoControlsBtnCont, {
                [_.videoControlsBtnContDisabled]: m,
              }),
              "aria-label": a,
              "aria-disabled": m,
              innerRef: t,
              children: (0, r.jsx)(s.animated.div, {
                className: o()(_.videoControlsBtnCont),
                style: {
                  opacity: (0, s.to)(
                    [i.to({ range: [0, 1], output: [0, 1] })],
                    (e) => "".concat(l ? e : Math.pow(e, 8)),
                  ),
                },
                children: (0, r.jsx)(n, {
                  color: !0 !== m ? u.Z.colors.WHITE : u.Z.colors.TEXT_MUTED,
                  className: o()(_.controlsBarItem, {
                    [_.controlsBarItemActive]: c,
                    [_.videoControlsBtn]: !m,
                  }),
                }),
              }),
            });
        if (null == v) return f();
        {
          let e = (0, r.jsxs)(r.Fragment, {
            children: [
              v,
              "" !== (null != p ? p : "").trim() &&
                (0, r.jsx)(d.KeyCombo, {
                  shortcut: null != p ? p : "",
                  className: _.videoControlsBtnTooltipKeyCombo,
                }),
            ],
          });
          return (0, r.jsx)(d.Tooltip, {
            text: e,
            "aria-label": v,
            tooltipContentClassName: _.videoControlsBtnTooltip,
            delay: E,
            children: (e) => f(e),
          });
        }
      });
      function j(e) {
        var t, n;
        let {
            videoRef: l,
            quest: v,
            playerState: g,
            animSpring: x,
            visible: T,
            seekForwardEnabled: j,
            hideCaptionBtn: b,
            handlePlaybackBtnClick: R,
            handleTranscriptBtnClick: L,
            handleCaptionBtnClick: O,
            handleFullScreenBtnClick: k,
            handleSeekBackBtnClick: M,
            handleSeekForwardBtnClick: P,
            handleControlBarPendingInteraction: y,
          } = e,
          q = (0, E.km)((e) => e.volume),
          w = (0, E.km)((e) => e.setVolume),
          B = (0, E.km)((e) => e.muted),
          U = (0, E.km)((e) => e.setMuted),
          F = (0, E.km)((e) => e.transcriptEnabled),
          Z = (0, E.km)((e) => e.captionEnabled),
          V = (0, E.km)((e) => e.fullScreenEnabled),
          Y = (0, a.e7)([m.Z], () => m.Z.useReducedMotion),
          G = (0, a.e7)([m.Z], () => m.Z.keyboardModeEnabled),
          [z, H] = i.useState(B ? 0 : q),
          [K, Q] = i.useState(!1),
          [W, X] = i.useState(!1),
          [{ volumeAnimSpring: J }, $] = (0, d.useSpring)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
          })),
          ee = i.useRef(null),
          et = i.useCallback(
            (e) => {
              if (null != l.current)
                e !== l.current.volume && (l.current.volume = e),
                  e !== z && H(e);
            },
            [l, z],
          ),
          en = i.useCallback(() => {
            if (null != l.current)
              0 === z
                ? (et(q), U(!1), D(v.id, q))
                : (w(z), et(0), U(!0), D(v.id, 0));
          }, [l, z, q, U, w, et, v.id]),
          er = () => {
            Q(!0);
          },
          ei = () => {
            Q(!1);
          },
          el = i.useCallback(
            (e) => {
              switch (e.key) {
                case S.Y1.PLAYBACK:
                  R();
                  break;
                case S.Y1.SPACE:
                  !G && (e.preventDefault(), R());
                  break;
                case S.Y1.SEEK_BACK:
                  M();
                  break;
                case S.Y1.SEEK_FORWARD:
                  P();
                  break;
                case S.Y1.CAPTION:
                  O();
                  break;
                case S.Y1.FULLSCREEN:
                  k();
                  break;
                case S.Y1.MUTE:
                  en();
              }
            },
            [O, k, R, M, P, en, G],
          );
        i.useEffect(() => {
          null != ee.current && ee.current.focus();
        }, []),
          i.useEffect(
            () => (
              $({ volumeAnimSpring: W || K ? 1 : 0, immediate: Y }),
              () => {
                J.stop();
              }
            ),
            [W, K, $, Y, J],
          ),
          i.useEffect(
            () => (
              window.addEventListener("keydown", el),
              () => {
                window.removeEventListener("keydown", el);
              }
            ),
            [el],
          );
        let eo =
            0 === z
              ? d.VoiceXIcon
              : z < 0.5
                ? d.VoiceLowIcon
                : d.VoiceNormalIcon,
          { icon: es, label: ea } = N[g];
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              className: _.videoControlsGroup,
              children: [
                (0, r.jsx)(A, {
                  iconComponent: es,
                  animationTime: x,
                  visible: T,
                  ariaLabel: ea,
                  tooltipLabel: ea,
                  shortcut: S.Y1.PLAYBACK,
                  onClick: R,
                  ref: ee,
                }),
                (0, r.jsx)(A, {
                  iconComponent: C.d,
                  animationTime: x,
                  visible: T,
                  onClick: M,
                  ariaLabel: h.intl.string(h.t.r9s3Ul),
                  tooltipLabel: h.intl.string(h.t.r9s3Ul),
                  shortcut: S.Y1.SEEK_BACK,
                }),
                (0, r.jsx)(A, {
                  iconComponent: f.o,
                  animationTime: x,
                  visible: T,
                  onClick: P,
                  disabled: !j,
                  ariaLabel: j
                    ? h.intl.string(h.t.zWDcND)
                    : h.intl.string(h.t.xXh3y8),
                  tooltipLabel: j
                    ? h.intl.string(h.t.zWDcND)
                    : h.intl.string(h.t.xXh3y8),
                  tooltipDelayMs: j ? 1500 : 0,
                  shortcut: S.Y1.SEEK_FORWARD,
                }),
              ],
            }),
            (0, r.jsxs)(s.animated.div, {
              className: o()(_.videoControlsGroup, _.videoControlsGroupMid),
              style: {
                opacity: (0, s.to)(
                  [x.to({ range: [0, 1], output: [0, 1] })],
                  (e) => "".concat(T ? e : Math.pow(e, 8)),
                ),
              },
              children: [
                (0, r.jsxs)("div", {
                  onMouseEnter: er,
                  onMouseLeave: ei,
                  onFocus: er,
                  onBlur: ei,
                  className: _.volumeControlGroup,
                  children: [
                    (0, r.jsx)(A, {
                      iconComponent: eo,
                      animationTime: x,
                      visible: T,
                      onClick: en,
                      ariaLabel: h.intl.string(h.t["eIl+AA"]),
                      tooltipLabel: h.intl.string(h.t["eIl+AA"]),
                      shortcut: S.Y1.MUTE,
                    }),
                    (0, r.jsx)(s.animated.div, {
                      className: _.volumeSlider,
                      style: {
                        opacity: (0, s.to)(
                          [J.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(T ? e : Math.pow(e, 8)),
                        ),
                        width: (0, s.to)(
                          [J.to({ range: [0, 1], output: [0, 100] })],
                          (e) => "".concat(e, "px"),
                        ),
                      },
                      children: (0, r.jsx)(c.i, {
                        mini: !0,
                        barStyles: { height: "5px", top: "10px" },
                        grabberStyles: {
                          marginTop: "-5px",
                          backgroundColor: u.Z.colors.WHITE.css,
                          cursor: "pointer",
                        },
                        initialValue: z,
                        keyboardStep: 0.1,
                        minValue: 0,
                        maxValue: 1,
                        onValueChange: (e) => {
                          et(e),
                            w(e),
                            D(v.id, e),
                            W && (X(!1), y(!1)),
                            B && e > 0 && U(!1);
                        },
                        asValueChanges: (e) => {
                          et(e), !W && (X(!0), y(!0));
                        },
                        fillStyles: { backgroundColor: u.Z.colors.WHITE.css },
                        orientation: "horizontal",
                        "aria-label": h.intl.string(h.t["eIl+AA"]),
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)(I, {
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
              className: o()(_.videoControlsGroup, _.videoControlsGroupEnd),
              children: [
                (0, r.jsx)(A, {
                  iconComponent: d.PaperIcon,
                  animationTime: x,
                  visible: T,
                  onClick: L,
                  active: F && g !== S.rq.ENDED,
                  disabled: g === S.rq.ENDED,
                  ariaLabel: h.intl.string(h.t.KCzjTk),
                  tooltipLabel: h.intl.string(h.t.KCzjTk),
                }),
                !b &&
                  (0, r.jsx)(A, {
                    iconComponent: p.c,
                    animationTime: x,
                    visible: T,
                    active: Z,
                    onClick: O,
                    ariaLabel: h.intl.string(h.t.bDSZOz),
                    tooltipLabel: h.intl.string(h.t.bDSZOz),
                    shortcut: S.Y1.CAPTION,
                  }),
                (0, r.jsx)(A, {
                  iconComponent: V
                    ? d.FullscreenExitIcon
                    : d.FullscreenEnterIcon,
                  animationTime: x,
                  visible: T,
                  onClick: k,
                  ariaLabel: h.intl.string(h.t.vKZT5u),
                  tooltipLabel: h.intl.string(h.t.vKZT5u),
                  shortcut: S.Y1.FULLSCREEN,
                }),
              ],
            }),
          ],
        });
      }
    },
    902749: function (e, t, n) {
      n.d(t, {
        c: function () {
          return s;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(692547),
        l = n(390507),
        o = n(331595);
      let s = (e) => {
        var t, n;
        let {
            size: s = "md",
            width: a,
            height: u,
            color: c = i.Z.colors.INTERACTIVE_NORMAL,
            colorClass: d = "",
            ...m
          } = e,
          v = (0, l.m)(s),
          E =
            null !== (t = null == v ? void 0 : v.width) && void 0 !== t ? t : a,
          p =
            null !== (n = null == v ? void 0 : v.height) && void 0 !== n
              ? n
              : u;
        return (0, r.jsx)("svg", {
          ...(0, o.Z)(m),
          xmlns: "http://www.w3.org/2000/svg",
          width: E,
          height: p,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
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
      var i = n(692547),
        l = n(390507),
        o = n(331595);
      let s = (e) => {
        var t, n;
        let {
            size: s = "md",
            width: a,
            height: u,
            color: c = i.Z.colors.INTERACTIVE_NORMAL,
            ...d
          } = e,
          m = (0, l.m)(s),
          v =
            null !== (t = null == m ? void 0 : m.width) && void 0 !== t ? t : a,
          E =
            null !== (n = null == m ? void 0 : m.height) && void 0 !== n
              ? n
              : u;
        return (0, r.jsxs)("svg", {
          ...(0, o.Z)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: v,
          height: E,
          fill: "none",
          viewBox: "0 0 32 32",
          children: [
            (0, r.jsx)("path", {
              d: "M169.545 229.312v7.919l14.838-10.253v46.348h7.669v-55.434h-6.169l-16.338 11.42ZM225.979 274.576c13.087 0 21.34-11.003 21.34-28.842 0-17.756-8.253-29.093-21.34-29.093-13.004 0-21.173 11.254-21.173 29.009 0 17.923 8.169 28.926 21.173 28.926Zm0-7.335c-8.419 0-13.004-8.336-13.004-21.591 0-13.087 4.585-21.673 13.004-21.673 8.503 0 13.171 8.669 13.171 21.757 0 13.171-4.668 21.507-13.171 21.507Z",
              style: {
                fill: "string" == typeof c ? c : c.css,
                fillRule: "nonzero",
              },
              transform: "translate(-25.102 -30.774) scale(.19361)",
            }),
            (0, r.jsx)("path", {
              d: "M137.108 31.459a160.22 160.22 0 0 0-30.316-2.894c-88.439 0-160.24 71.801-160.24 160.241 0 88.439 71.801 160.24 160.24 160.24 88.499 0 160.241-71.742 160.241-160.24h-31.365c0 71.176-57.699 128.876-128.876 128.876-71.128 0-128.876-57.748-128.876-128.876 0-71.129 57.748-128.877 128.876-128.877 8.183 0 16.347.78 24.382 2.328l5.934-30.798Z",
              style: { fill: "string" == typeof c ? c : c.css },
              transform: "matrix(-.0886 .03775 .03775 .0886 17.716 -4.317)",
            }),
            (0, r.jsx)("path", {
              d: "M144.616 190.007V96.608l197.822 69.184-197.822 69.185v-44.97Z",
              style: { fill: "string" == typeof c ? c : c.css },
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
      var i = n(692547),
        l = n(390507),
        o = n(331595);
      let s = (e) => {
        var t, n;
        let {
            size: s = "md",
            width: a,
            height: u,
            color: c = i.Z.colors.INTERACTIVE_NORMAL,
            ...d
          } = e,
          m = (0, l.m)(s),
          v =
            null !== (t = null == m ? void 0 : m.width) && void 0 !== t ? t : a,
          E =
            null !== (n = null == m ? void 0 : m.height) && void 0 !== n
              ? n
              : u;
        return (0, r.jsxs)("svg", {
          ...(0, o.Z)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: v,
          height: E,
          fill: "none",
          viewBox: "0 0 32 32",
          children: [
            (0, r.jsx)("path", {
              d: "M169.545 229.312v7.919l14.838-10.253v46.348h7.669v-55.434h-6.169l-16.338 11.42ZM225.979 274.576c13.087 0 21.34-11.003 21.34-28.842 0-17.756-8.253-29.093-21.34-29.093-13.004 0-21.173 11.254-21.173 29.009 0 17.923 8.169 28.926 21.173 28.926Zm0-7.335c-8.419 0-13.004-8.336-13.004-21.591 0-13.087 4.585-21.673 13.004-21.673 8.503 0 13.171 8.669 13.171 21.757 0 13.171-4.668 21.507-13.171 21.507Z",
              style: {
                fill: "string" == typeof c ? c : c.css,
                fillRule: "nonzero",
              },
              transform: "translate(-24.102 -30.774) scale(.19361)",
            }),
            (0, r.jsx)("path", {
              d: "M137.108 31.459a160.22 160.22 0 0 0-30.316-2.894c-88.439 0-160.24 71.801-160.24 160.241 0 88.439 71.801 160.24 160.24 160.24 88.499 0 160.241-71.742 160.241-160.24h-31.365c0 71.176-57.699 128.876-128.876 128.876-71.128 0-128.876-57.748-128.876-128.876 0-71.129 57.748-128.877 128.876-128.877 8.183 0 16.347.78 24.382 2.328l5.934-30.798Z",
              style: { fill: "string" == typeof c ? c : c.css },
              transform: "matrix(.0886 .03775 -.03775 .0886 14.284 -4.317)",
            }),
            (0, r.jsx)("path", {
              d: "M144.616 190.007V96.608l197.822 69.184-197.822 69.185v-44.97Z",
              style: { fill: "string" == typeof c ? c : c.css },
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
            return O;
          },
        }),
        n(47120);
      var r = n(200651),
        i = n(192379),
        l = n(120356),
        o = n.n(l),
        s = n(442837),
        a = n(780384),
        u = n(481060),
        c = n(607070),
        d = n(210887),
        m = n(617136),
        v = n(113434),
        E = n(569984),
        p = n(497505),
        C = n(918701),
        f = n(475595),
        S = n(566078),
        g = n(164495),
        x = n(472144),
        h = n(602667),
        _ = n(644646),
        T = n(604162),
        N = n(747717),
        D = n(963123),
        I = n(281055),
        A = n(46140),
        j = n(981631),
        b = n(388032),
        R = n(451680);
      function L(e) {
        var t;
        let {
            transitionState: n,
            onClose: l,
            quest: E,
            autoplay: L,
            videoSessionId: O,
          } = e,
          k = (0, C.il)(E),
          M = (0, s.e7)([d.Z], () => d.Z.getState().theme),
          P = (0, a.wj)(M) ? j.BRd.DARK : j.BRd.LIGHT,
          y = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
          [q, w] = i.useState(k.progressSeconds),
          [B, U] = i.useState(!1),
          { completedRatio: F, completedRatioDisplay: Z } = (0, v.I)(E),
          [V, Y] = (0, T.G6)(
            b.intl.string(b.t.RDE0SU),
            b.intl.string(b.t["+5kSoa"]),
            1700,
          ),
          G =
            (null === (t = E.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) != null
              ? b.intl.string(b.t.vTgCW1)
              : b.intl.string(b.t.cfY4PD),
          z = i.useCallback(() => {
            (0, C.f2)(E.id, {
              content: p.jn.VIDEO_MODAL,
              ctaContent: m.jZ.COPY_QUEST_URL,
            }),
              Y();
          }, [E.id, Y]),
          H = () => {
            (0, C.FE)(E, {
              content: p.jn.VIDEO_MODAL,
              ctaContent: m.jZ.OPEN_GAME_LINK,
            });
          },
          K = () => {
            U(!0);
          },
          Q = () => {
            U(!1);
          },
          W = i.useMemo(
            () => S.r.build(E.config).defaultReward.messages.name,
            [E],
          ),
          X = b.intl.formatToPlainString(b.t["12IWPz"], { rewardName: W });
        return (0, r.jsx)(u.ModalRoot, {
          transitionState: n,
          size: u.ModalSize.DYNAMIC,
          className: R.modalRoot,
          children: (0, r.jsx)(h.A, {
            questOrQuests: E,
            questContent: p.jn.VIDEO_MODAL,
            minViewTimeSeconds: I.zw,
            trackGuildAndChannelMetadata: !0,
            children: (e) => {
              var t, i;
              return (0, r.jsx)("div", {
                ref: (t) => {
                  e.current = t;
                },
                className: R.modalBg,
                children: (0, r.jsx)("div", {
                  className: R.modalBody,
                  children: (0, r.jsxs)("div", {
                    className: R.modalContent,
                    children: [
                      (0, r.jsxs)("div", {
                        className: R.contentHeader,
                        children: [
                          (0, r.jsxs)(u.Clickable, {
                            className: R.contentHeaderGameInfo,
                            onClick: H,
                            children: [
                              (0, r.jsx)("img", {
                                alt: E.config.messages.gameTitle,
                                className: o()(
                                  R.contentHeaderLogotype,
                                  R.accentOnHover,
                                ),
                                src: (0, f.fh)(E, f.eC.LOGO_TYPE, P).url,
                              }),
                              (0, r.jsx)(N.Z, {}),
                              (0, r.jsxs)("div", {
                                className: R.questHeading,
                                children: [
                                  (0, r.jsx)(u.Heading, {
                                    variant: "heading-md/semibold",
                                    color: "header-primary",
                                    children: b.intl.format(b.t.EQa7oq, {
                                      questName: E.config.messages.questName,
                                    }),
                                  }),
                                  (0, r.jsx)(u.Text, {
                                    variant: "text-sm/medium",
                                    color: "header-secondary",
                                    children: E.config.messages.gameTitle,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsx)(u.Tooltip, {
                            position: "left",
                            text: X,
                            onTooltipShow: K,
                            onTooltipHide: Q,
                            children: (e) =>
                              (0, r.jsx)(u.Clickable, {
                                className: R.progressCont,
                                ...e,
                                children: (0, r.jsx)(x.Z, {
                                  quest: E,
                                  size: 48,
                                  percentComplete: F,
                                  percentCompleteText: B ? Z : void 0,
                                  percentCompleteTextVariant: "text-sm/medium",
                                  children: (0, r.jsx)(_.Z, {
                                    className: R.questProgressRewardTile,
                                    quest: E,
                                    questContent: p.jn.VIDEO_MODAL,
                                    autoplay: !1,
                                    location: A.dr.VIDEO_MODAL,
                                  }),
                                }),
                              }),
                          }),
                        ],
                      }),
                      (0, r.jsx)(D.Z, {
                        quest: E,
                        videoSessionId: O,
                        parentTransitionState: n,
                        onOptimisticProgressUpdate: w,
                        autoplay: L,
                      }),
                      (0, r.jsxs)("div", {
                        className: R.contentFooter,
                        children: [
                          (0, r.jsx)(u.Button, {
                            onClick: l,
                            color: u.Button.Colors.PRIMARY,
                            size: u.Button.Sizes.MEDIUM,
                            children: b.intl.string(b.t.cpT0Cg),
                          }),
                          (0, r.jsxs)("div", {
                            className: R.contentFooterButtonCont,
                            children: [
                              (0, r.jsx)(u.Button, {
                                color: u.Button.Colors.PRIMARY,
                                onClick: z,
                                size: u.Button.Sizes.NONE,
                                className: R.copyLinkBtn,
                                children: V,
                              }),
                              (0, r.jsx)(g.i0, {
                                className: R.claimBtn,
                                size: u.Button.Sizes.MEDIUM,
                                quest: E,
                                useReducedMotion: y,
                                isExpanded:
                                  (null === (t = E.userStatus) || void 0 === t
                                    ? void 0
                                    : t.completedAt) != null,
                                disabled:
                                  (null === (i = E.userStatus) || void 0 === i
                                    ? void 0
                                    : i.completedAt) == null,
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
      function O(e) {
        let { questId: t, overrideQuest: n, autoplay: i, ...l } = e,
          o = (0, s.e7)([E.Z], () => E.Z.getQuest(t)),
          a = null != n ? n : o;
        return null != a
          ? (0, r.jsx)(L, { ...l, quest: a, autoplay: i })
          : null;
      }
    },
    355243: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return E;
        },
      }),
        n(47120);
      var r = n(200651),
        i = n(192379),
        l = n(120356),
        o = n.n(l),
        s = n(481060),
        a = n(393903),
        u = n(604162),
        c = n(420212),
        d = n(452973);
      function m(e, t, n) {
        return n * (Math.max(e - t.left, 0) / t.width);
      }
      function v(e, t, n) {
        return n.left + (e / t) * n.width;
      }
      function E(e) {
        let {
            percent: t,
            animate: n,
            interactionEnabled: l,
            backgroundColor: E,
            preloadedBuffers: p,
            duration: C,
            maxSeekableTime: f,
            onClick: S,
            onScrubBack: g,
            onScrubForward: x,
          } = e,
          [h, _] = i.useState(null),
          [T, N] = i.useState(null),
          [D, I] = i.useState(null),
          [A, j] = i.useState(!1),
          b = i.useRef(null),
          R = (e) => {
            (b.current = e), _(e);
          };
        i.useEffect(() => {
          null != h && (null == f ? I(null) : I(v(f, C, h)));
        }, [h, f, C]);
        let L = (0, a.y)(() => {
          if (null != L.current) R(L.current.getBoundingClientRect());
        });
        i.useLayoutEffect(() => {
          null != L.current && R(L.current.getBoundingClientRect());
        }, [L]),
          i.useEffect(() => {
            let e = () => {
              null != L.current && R(L.current.getBoundingClientRect());
            };
            return (
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, [L]);
        let O = (e) => {
            N(e.clientX);
          },
          k = i.useCallback(
            (e) => {
              let { key: t } = e;
              t === c.mR.ArrowLeft && null != g
                ? (e.preventDefault(), e.stopPropagation(), g())
                : t === c.mR.ArrowRight &&
                  null != x &&
                  (e.preventDefault(), e.stopPropagation(), x());
            },
            [g, x],
          ),
          M = null != T && null != h ? m(T, h, C) : 0,
          P = (0, u.yv)(M),
          y = null != h ? h.right - v((t / 100) * C, C, h) : null,
          q = null != T && null != h ? h.right - T : null,
          w = null != D && null != h ? h.right - D : null;
        return (0, r.jsxs)("div", {
          className: d.cont,
          ref: L,
          children: [
            (0, r.jsxs)(s.Clickable, {
              className: o()(d.hitboxArea, { [d.interactionEnabled]: l }),
              ignoreKeyPress: !0,
              onClick: (e) => {
                if (!!l && null != S)
                  S(m(e.clientX, e.currentTarget.getBoundingClientRect(), C));
              },
              onMouseEnter: (e) => {
                if (!!l)
                  null != L.current && R(L.current.getBoundingClientRect()),
                    j(!0),
                    O(e);
              },
              onMouseLeave: (e) => {
                if (!!l) j(!1), N(null);
              },
              onMouseMove: (e) => {
                if (!!l) A && O(e);
              },
              onKeyDown: k,
              tabIndex: l ? void 0 : -1,
              focusProps: { offset: { top: 12, bottom: 12 } },
              children: [
                null == p
                  ? void 0
                  : p.map((e) =>
                      (0, r.jsx)(
                        "div",
                        {
                          className: o()(d.buffer, { [d.bufferHovered]: A }),
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
                (0, r.jsx)(s.Progress, {
                  className: d.progress,
                  percent: t,
                  foregroundColor: "#FFFFFF",
                  backgroundColor: null != E ? E : void 0,
                  size: A ? s.Progress.Sizes.XSMALL : s.Progress.Sizes.XXSMALL,
                  animate: n,
                }),
                A &&
                  null != P &&
                  (0, r.jsx)(s.Text, {
                    className: d.timeDisplay,
                    variant: "text-xs/normal",
                    style: {
                      right: null != q ? "".concat(q - 10, "px") : "auto",
                      color: "#FFFFFF",
                    },
                    children: P,
                  }),
                A &&
                  l &&
                  null != y &&
                  (0, r.jsx)("div", {
                    className: d.grabber,
                    style: { right: "".concat(y - 6, "px") },
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
          return u;
        },
      });
      var r = n(200651),
        i = n(192379),
        l = n(261833),
        o = n(481060),
        s = n(184299),
        a = n(451680);
      function u(e) {
        var t;
        let { quest: n, onClose: u } = e,
          c = (0, s.km)((e) => e.transcript),
          d =
            (null == c ? void 0 : c.questId) === n.id &&
            (null == c ? void 0 : c.fetchStatus) === s.iF.SUCCESS &&
            null !== (t = c.text) &&
            void 0 !== t
              ? t
              : "",
          m = i.useMemo(
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
                (0, r.jsx)(o.Heading, {
                  variant: "heading-md/semibold",
                  color: "currentColor",
                  children: "Transcript",
                }),
                (0, r.jsx)(o.Clickable, {
                  onClick: u,
                  className: a.transcriptBackBtn,
                  children: (0, r.jsx)(l.D, { color: "currentColor" }),
                }),
              ],
            }),
            (0, r.jsx)(o.FocusRing, {
              children: (0, r.jsx)(o.ScrollerAuto, {
                className: a.transcriptScroller,
                fade: !0,
                children: (0, r.jsx)("div", {
                  className: a.transcriptBody,
                  children:
                    (null == c ? void 0 : c.fetchStatus) === s.iF.FETCHING
                      ? (0, r.jsx)("div", {
                          className: a.transcriptBodySpinner,
                          children: (0, r.jsx)(o.Spinner, {
                            type: o.Spinner.Type.WANDERING_CUBES,
                          }),
                        })
                      : (0, r.jsx)(o.Heading, {
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
      var r, i, l, o, s, a, u, c;
      n.d(t, {
        CY: function () {
          return l;
        },
        Y1: function () {
          return o;
        },
        rq: function () {
          return r;
        },
        yE: function () {
          return i;
        },
      }),
        ((s = r || (r = {})).PLAYING = "playing"),
        (s.PAUSED = "paused"),
        (s.ENDED = "ended"),
        ((a = i || (i = {})).PAUSE_BUTTON = "PAUSE_BUTTON"),
        (a.LOST_FOCUS = "LOST_FOCUS"),
        (a.MODAL_CLOSED = "MODAL_CLOSED"),
        ((u = l || (l = {})).ERROR = "ERROR"),
        (u.SOURCE_ERROR = "SOURCE_ERROR"),
        (u.ABORT = "ABORT"),
        (u.EMPTIED = "EMPTIED"),
        (u.STALLED = "STALLED"),
        (u.SUSPEND = "SUSPEND"),
        ((c = o || (o = {})).PLAYBACK = "k"),
        (c.SPACE = " "),
        (c.SEEK_BACK = "j"),
        (c.SEEK_FORWARD = "l"),
        (c.CAPTION = "c"),
        (c.FULLSCREEN = "f"),
        (c.MUTE = "m");
    },
    747717: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(120356),
        l = n.n(i),
        o = n(451680);
      function s(e) {
        let { className: t, color: n } = e;
        return (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "2",
          height: "40",
          viewBox: "0 0 2 40",
          fill: "none",
          className: l()(o.verticalDivider, t),
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
          return V;
        },
      }),
        n(47120),
        n(653041);
      var r = n(200651),
        i = n(192379),
        l = n(120356),
        o = n.n(l),
        s = n(666912),
        a = n(232713),
        u = n(442837),
        c = n(780384),
        d = n(481060),
        m = n(493773),
        v = n(607070),
        E = n(70097),
        p = n(210887),
        C = n(866960),
        f = n(228488),
        S = n(617136),
        g = n(272008),
        x = n(497505),
        h = n(918701),
        _ = n(184299),
        T = n(720293),
        N = n(602667),
        D = n(341907),
        I = n(881773),
        A = n(355243),
        j = n(106743),
        b = n(223418),
        R = n(604162),
        L = n(747717),
        O = n(281055),
        k = n(920393),
        M = n(981631),
        P = n(217702),
        y = n(388032),
        q = n(451680);
      let w = new Set([M.IyS.FIVE_G, M.IyS.FOUR_G, M.IyS.UNKNOWN]),
        B = { tension: 250, friction: 5, clamp: !0 };
      function U() {
        let e = (0, u.e7)([p.Z], () => p.Z.getState().theme);
        return (0, r.jsx)("div", {
          className: q.pauseText,
          style: {
            background: (0, c.wj)(e)
              ? "rgba(0, 0, 0, 0.65)"
              : "rgba(255, 255, 255, 0.65)",
          },
          children: (0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            children: y.intl.string(y.t.U7Xrb2),
          }),
        });
      }
      function F(e) {
        let { quest: t, shouldShow: n } = e,
          l = i.useMemo(() => (0, T.z)(T.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
        return null == l
          ? null
          : (0, r.jsx)(N.A, {
              questOrQuests: t,
              questContent: x.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                (0, r.jsx)("img", {
                  ref: (t) => {
                    e.current = t;
                  },
                  src: l.url,
                  alt: "Video thumbnail",
                  className: o()(q.stillFrameImageCard, {
                    [q.stillFrameImageCardHidden]: !n,
                  }),
                }),
            });
      }
      function Z(e) {
        let { title: t, subtitle: n, icon: l, onClick: s, className: a } = e,
          [u, c] = i.useState(!1),
          m = () => {
            c(!0);
          },
          v = () => {
            c(!1);
          };
        return (0, r.jsx)(d.Clickable, {
          className: o()(q.endScreenPanel, q.accentOnHover, a),
          onMouseEnter: m,
          onMouseLeave: v,
          onFocus: m,
          onBlur: v,
          onClick: s,
          children: (0, r.jsxs)("div", {
            className: q.endScreenPanelInner,
            children: [
              (0, r.jsxs)("div", {
                className: q.endScreenPanelTextCont,
                children: [
                  (0, r.jsx)(d.Heading, {
                    variant: "heading-md/semibold",
                    className: q.endScreenPanelTextTitle,
                    children: t,
                  }),
                  (0, r.jsx)(d.Heading, {
                    variant: "heading-sm/normal",
                    className: q.endScreenPanelTextSubtitle,
                    children: n,
                  }),
                ],
              }),
              (0, r.jsx)(L.Z, { color: "#747783" }),
              (0, r.jsx)(l, {
                size: "md",
                color: u ? "#FFFFFF" : "#B5BAC1",
                className: q.endScreenIcon,
              }),
            ],
          }),
        });
      }
      function V(e) {
        var t, n, l, c, p, N, L, V, Y, G, z;
        let {
            quest: H,
            videoSessionId: K,
            onOptimisticProgressUpdate: Q,
            autoplay: W,
            parentTransitionState: X,
          } = e,
          J = (0, S._F)(),
          $ = (0, S.O5)(),
          ee = (0, _.km)((e) => e.transcriptEnabled),
          et = (0, _.km)((e) => e.setTranscriptEnabled),
          en = (0, _.km)((e) => e.captionEnabled),
          er = (0, _.km)((e) => e.setCaptionEnabled),
          ei = (0, _.km)((e) => e.fullScreenEnabled),
          el = (0, _.km)((e) => e.setFullScreenEnabled),
          { focused: eo, focusedChanged: es } = (0, O.xU)(),
          { visible: ea, visibleChanged: eu, targetRef: ec } = (0, O.Yy)(),
          [ed, em] = i.useState(!0 === W ? b.rq.PLAYING : b.rq.PAUSED),
          [ev, eE] = i.useState(!1),
          ep = (0, h.il)(H),
          [eC, ef] = i.useState(ep.percentComplete),
          [eS, eg] = i.useState(!1),
          [ex, eh] = i.useState(!0),
          [e_, eT] = i.useState(!1),
          [eN, eD] = i.useState([]),
          [eI, eA] = i.useState(C.Z.getEffectiveConnectionSpeed()),
          [ej, eb] = i.useState(0),
          [eR, eL] = i.useState(0),
          [eO, ek] = i.useState(!1),
          [eM, eP] = i.useState(!1),
          ey = i.useRef(null),
          eq = i.useRef(null),
          ew = (0, i.useRef)(-1),
          eB = (0, _.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[H.id]) && void 0 !== t
              ? t
              : { timestampSec: 0, duration: 10 };
          }, a.X),
          eU = (0, _.km)((e) => e.setVideoProgress),
          eF = (0, _.km)((e) => e.muted),
          eZ = (0, _.km)((e) => e.volume),
          eV = (0, u.e7)([v.Z], () => v.Z.useReducedMotion),
          eY = (0, i.useRef)(null),
          eG = (0, i.useRef)(null),
          ez = i.useRef(!0),
          eH =
            (null === (t = H.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          eK = (0, _.km)((e) => e.transcript),
          [eQ, eW] = i.useState(null),
          [eX, eJ] = i.useState(!1),
          [e$, e0] = i.useState(!1),
          [e1, e2] = i.useState(null),
          e6 = eH
            ? null !==
                (L =
                  null === (n = eY.current) || void 0 === n
                    ? void 0
                    : n.duration) && void 0 !== L
              ? L
              : 0
            : Math.max(eB.maxTimestampSec, ep.progressSeconds),
          e4 = i.useMemo(
            () =>
              w.has(eI)
                ? T.i.VIDEO_PLAYER_VIDEO
                : T.i.VIDEO_PLAYER_VIDEO_LOW_RES,
            [eI],
          ),
          e9 = i.useMemo(() => (null != e4 ? (0, T.z)(e4, H) : null), [e4, H]),
          e7 = i.useCallback(
            (e) => {
              null != eY.current &&
                J({
                  questId: H.id,
                  event: M.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                  properties: {
                    ...e,
                    video_asset_id: e4,
                    quest_completed: eH,
                    video_duration_sec: eY.current.duration,
                    video_progress: (0, D.formatVideoProgressRatio)(
                      e.segment_end_sec,
                      eY.current.duration,
                    ),
                    video_session_id: K,
                  },
                });
            },
            [J, H.id, e4, eH, K],
          ),
          { forceSendCurrentSegment: e8 } = (0, k.Z)({
            videoRef: eY,
            isPlaying: ed === b.rq.PLAYING,
            isMetadataLoaded: eX,
            isInitialSeekComplete: e$,
            onAnalytics: e7,
            emitIntervalMs: 4e3,
            minSegmentDurationMs: 2e3,
          }),
          e3 = i.useCallback(
            (e) => {
              if ((em(e), null != eY.current))
                switch (e) {
                  case b.rq.PLAYING:
                    eY.current.play(),
                      J({
                        questId: H.id,
                        event: M.rMx.QUEST_VIDEO_RESUMED,
                        properties: {
                          video_timestamp_seconds: eY.current.currentTime,
                          pause_reason: eQ,
                          video_session_id: K,
                        },
                      }),
                      eW(null);
                    break;
                  case b.rq.PAUSED:
                    eY.current.pause(), e8();
                    break;
                  case b.rq.ENDED:
                    et(!1), e8();
                }
            },
            [J, H.id, eQ, K, e8, et],
          );
        (0, m.N)(() => {
          ez.current &&
            ((ez.current = !1),
            eA(C.Z.getEffectiveConnectionSpeed()),
            eH && eB.timestampSec >= eB.duration && eU(H.id, 0, eB.duration));
        }),
          i.useEffect(() => {
            null != eY.current &&
              null != eQ &&
              J({
                questId: H.id,
                event: M.rMx.QUEST_VIDEO_PAUSED,
                properties: {
                  video_timestamp_seconds: eY.current.currentTime,
                  reason: eQ,
                  video_session_id: K,
                },
              });
          }, [eQ, H.id, J, K]),
          i.useEffect(() => {
            es &&
              null != eY.current &&
              J({
                questId: H.id,
                event: eo
                  ? M.rMx.QUEST_VIDEO_APP_FOCUSED
                  : M.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                properties: {
                  video_timestamp_seconds: eY.current.currentTime,
                  video_state: ed,
                  video_session_id: K,
                },
              });
          }, [eo, es, ed, H.id, J, K]);
        let e5 = i.useCallback(
          (e) => {
            var t;
            !eH &&
              (null === (t = H.userStatus) || void 0 === t
                ? void 0
                : t.enrolledAt) != null &&
              (0, h.FI)(H, e),
              null != eY.current &&
                J({
                  questId: H.id,
                  event: M.rMx.QUEST_VIDEO_PROGRESSED,
                  properties: {
                    progress: (0, D.formatVideoProgressRatio)(
                      eY.current.currentTime,
                      eY.current.duration,
                    ),
                    video_timestamp_seconds: eY.current.currentTime,
                    video_session_id: K,
                  },
                });
          },
          [eH, H, J, K],
        );
        i.useEffect(() => {
          (X === d.ModalTransitionState.HIDDEN ||
            X === d.ModalTransitionState.EXITING ||
            X === d.ModalTransitionState.EXITED ||
            (null != X && eu && !ea && !eH) ||
            (es && !eo && !eH)) &&
            null != eY.current &&
            ed === b.rq.PLAYING &&
            (e3(b.rq.PAUSED), !eH && eW(b.yE.LOST_FOCUS));
        }, [X, eo, es, ea, eu, ed, eH, e3, e5]);
        let te = () => {
            eE(!0);
          },
          tt = () => {
            eE(!1);
          },
          tn = ev || ed === b.rq.PAUSED || ed === b.rq.ENDED,
          tr = i.useCallback(() => {
            var e;
            let t = (0, f.fn)(
              null === (e = eY.current) || void 0 === e ? void 0 : e.parentNode,
              eY.current,
            );
            null != t &&
              !(0, f.rB)(t) &&
              (t.removeEventListener(f.NO, tr),
              el(!1),
              J({
                questId: H.id,
                event: M.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                properties: { video_session_id: K },
              }));
          }, [H.id, el, J, K]),
          ti = () => {
            if (null != eY.current)
              to(Math.max(eY.current.currentTime - 10, 0)),
                ed === b.rq.ENDED && e3(b.rq.PAUSED),
                $({
                  questId: H.id,
                  questContent: x.jn.VIDEO_MODAL,
                  questContentCTA: S.jZ.SEEK_BACKWARD,
                });
          },
          tl = () => {
            if (null == eY.current || !th) return;
            let e = Math.min(eY.current.currentTime + 10, e6);
            to(e),
              ed !== b.rq.ENDED && e >= eY.current.duration && e3(b.rq.ENDED),
              $({
                questId: H.id,
                questContent: x.jn.VIDEO_MODAL,
                questContentCTA: S.jZ.SEEK_FORWARD,
              });
          };
        i.useEffect(() => {
          let e = eY.current;
          return () => {
            let t = (0, f.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(f.NO, tr);
          };
        }, [tr]);
        let to = i.useCallback(
            (e) => {
              null != eY.current &&
                (e8(),
                eg(!0),
                e0(!1),
                (eY.current.currentTime = e),
                eU(H.id, e, eY.current.duration));
            },
            [eY, eU, H.id, e8],
          ),
          ts = () => {
            if (null != eY.current)
              switch (ed) {
                case b.rq.ENDED:
                  to(0), e3(b.rq.PLAYING);
                  break;
                case b.rq.PLAYING:
                  e3(b.rq.PAUSED), eW(b.yE.PAUSE_BUTTON);
                  break;
                default:
                  e3(b.rq.PLAYING);
              }
          },
          ta = (e) => {
            e2(e);
          },
          tu = (e) => {
            e2((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
          },
          tc = i.useCallback(() => {
            if (null == eY.current || 0 === eY.current.textTracks.length)
              return;
            let e = eY.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
              for (let t = 0; t < e.cues.length; t++) {
                let n = e.cues[t];
                (0, R.JC)(n) &&
                  ((n.id = "cue-".concat(t)),
                  (n.onenter = () => ta(n)),
                  (n.onexit = () => tu(n)));
              }
          }, [eY]);
        i.useEffect(() => {
          if (null == eG.current) return;
          let e = eG.current;
          return (
            e.addEventListener("load", tc),
            () => {
              null != e && e.removeEventListener("load", tc);
            }
          );
        }, [eG, tc]);
        let td = i.useCallback(
            (e) => {
              try {
                var t, n;
                let r =
                    null === (t = eY.current) || void 0 === t
                      ? void 0
                      : t.error,
                  i =
                    null === (n = eY.current) || void 0 === n
                      ? void 0
                      : n.networkState,
                  l =
                    null != eY.current
                      ? (0, D.formatVideoProgressRatio)(
                          eY.current.currentTime,
                          eY.current.duration,
                        )
                      : void 0;
                J({
                  questId: H.id,
                  event: M.rMx.QUEST_VIDEO_ERROR,
                  properties: {
                    video_progress: l,
                    video_error_type: e,
                    video_asset_id: e4,
                    network_connection_speed: eI,
                    video_session_id: K,
                    video_error_code: null == r ? void 0 : r.code,
                    video_error_message: null == r ? void 0 : r.message,
                    video_network_state: i,
                  },
                });
              } catch (e) {}
            },
            [eI, H.id, J, e4, K],
          ),
          tm = (e) => {
            if (null != eY.current && ed === b.rq.PLAYING) {
              if ((ex && eh(!1), e_)) {
                let e = null != eq.current ? Date.now() - eq.current : null;
                J({
                  questId: H.id,
                  event: M.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                  properties: {
                    video_asset_id: e4,
                    network_connection_speed: eI,
                    duration: e,
                    buffer_index: ew.current,
                    video_session_id: K,
                  },
                }),
                  eT(!1);
              }
              e3(b.rq.PLAYING);
            }
          };
        i.useEffect(() => {
          if (!eS) return;
          let e = setTimeout(() => {
            eg(!1);
          }, 1e3);
          return () => clearTimeout(e);
        }, [eS]);
        let [{ controlBarAnimSpring: tv }, tE] = (0, d.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: B,
            onStart: () => {
              eP(!1);
            },
            onRest: (e) => {
              1 === e.value && eP(!0);
            },
          })),
          tp = (0, i.useRef)(null),
          [{ captionHeightSpring: tC }, tf] = (0, d.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: B,
          }));
        i.useEffect(() => {
          var e, t;
          return (
            tf({
              captionHeightSpring:
                en &&
                null != e1 &&
                null !==
                  (t =
                    null === (e = tp.current) || void 0 === e
                      ? void 0
                      : e.clientHeight) &&
                void 0 !== t
                  ? t
                  : 0,
              immediate: eV,
            }),
            () => {
              tC.stop();
            }
          );
        }, [en, tf, eV, e1, tC]),
          i.useEffect(
            () => (
              tE({ controlBarAnimSpring: tn || eO ? 1 : 0, immediate: eV }),
              () => {
                tv.stop();
              }
            ),
            [tn, tE, eV, eO, tv],
          );
        let tS = ed === b.rq.ENDED,
          tg = i.useMemo(() => (0, T.z)(T.i.VIDEO_PLAYER_THUMBNAIL, H), [H]),
          tx = i.useMemo(() => (0, T.z)(T.i.VIDEO_PLAYER_CAPTION, H), [H]),
          th =
            eH ||
            eB.maxTimestampSec >=
              (null !==
                (V =
                  null === (l = eY.current) || void 0 === l
                    ? void 0
                    : l.currentTime) && void 0 !== V
                ? V
                : 0) +
                1;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(d.Clickable, {
            className: q.videoCont,
            "data-fullscreen": ei,
            tabIndex: -1,
            onMouseEnter: te,
            onMouseLeave: tt,
            onFocus: te,
            onBlur: tt,
            children: (0, r.jsxs)("div", {
              className: q.videoContInnerRelative,
              children: [
                (0, r.jsx)(F, { quest: H, shouldShow: tS }),
                tS && (0, r.jsx)("div", { className: q.videoContOverlay }),
                (0, r.jsxs)(E.Z, {
                  ref: (e) => {
                    (eY.current = e), (ec.current = e);
                  },
                  autoPlay: W,
                  playsInline: !0,
                  mediaLayoutType: ei ? P.hV.STATIC : P.hV.RESPONSIVE,
                  className: o()({ [q.hidden]: tS, [q.videoInner]: !0 }),
                  controls: !1,
                  poster: null == tg ? void 0 : tg.url,
                  disablePictureInPicture: !0,
                  onTimeUpdate: (e) => {
                    null != eY.current &&
                      (eY.current.currentTime >= ej &&
                        (eb(eY.current.currentTime + 6 + 2 * Math.random()),
                        e5(eY.current.currentTime)),
                      eY.current.currentTime >= eR &&
                        (eL(eY.current.currentTime + 1),
                        (0, g.qm)(H.id, ep.taskType, eY.current.currentTime),
                        Q(eY.current.currentTime)),
                      eU(H.id, eY.current.currentTime, eY.current.duration),
                      ef((eY.current.currentTime / eY.current.duration) * 100));
                  },
                  onEnded: (e) => {
                    null != eY.current &&
                      (e5(eY.current.duration + 1),
                      eU(H.id, eY.current.duration, eY.current.duration)),
                      e3(b.rq.ENDED),
                      eT(!1);
                  },
                  onLoadedData: (e) => {
                    if (ex) {
                      let e =
                        null != ey.current ? Date.now() - ey.current : null;
                      J({
                        questId: H.id,
                        event: M.rMx.QUEST_VIDEO_LOADING_ENDED,
                        properties: {
                          video_asset_id: e4,
                          network_connection_speed: eI,
                          duration: e,
                          video_session_id: K,
                        },
                      }),
                        eh(!1);
                    }
                  },
                  onLoadedMetadata: (e) => {
                    if (null != eY.current)
                      eJ(!0),
                        to(
                          eH
                            ? eB.timestampSec
                            : Math.max(eB.timestampSec, ep.progressSeconds),
                        ),
                        eF ? (eY.current.volume = 0) : (eY.current.volume = eZ);
                  },
                  onLoadStart: () => {
                    (ey.current = Date.now()),
                      J({
                        questId: H.id,
                        event: M.rMx.QUEST_VIDEO_LOADING_STARTED,
                        properties: {
                          video_asset_id: e4,
                          network_connection_speed: eI,
                          video_session_id: K,
                        },
                      });
                  },
                  onWaiting: (e) => {
                    (eq.current = Date.now()),
                      (ew.current += 1),
                      J({
                        questId: H.id,
                        event: M.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                        properties: {
                          video_asset_id: e4,
                          network_connection_speed: eI,
                          buffer_index: ew.current,
                          video_session_id: K,
                        },
                      }),
                      eT(!0);
                  },
                  onProgress: (e) => {
                    if (null == eY.current) return;
                    let t = [];
                    for (let e = 0; e < eY.current.buffered.length; e++) {
                      let n = eY.current.buffered.start(e),
                        r = eY.current.buffered.end(e);
                      if (!(r - n < 1))
                        t.push({
                          start: n / eY.current.duration,
                          size: (r - n) / eY.current.duration,
                        });
                    }
                    eD(t);
                  },
                  onCanPlay: tm,
                  onCanPlayThrough: tm,
                  onSeeked: () => {
                    e0(!0);
                  },
                  onAbort: () => td(b.CY.ABORT),
                  onError: () => td(b.CY.ERROR),
                  onEmptied: () => td(b.CY.EMPTIED),
                  onStalled: () => td(b.CY.STALLED),
                  onSuspend: () => td(b.CY.SUSPEND),
                  onClick: () => {
                    ts();
                  },
                  crossOrigin: "anonymous",
                  children: [
                    null != tx &&
                      (0, r.jsx)("track", {
                        ref: eG,
                        src: tx.url,
                        label: "English",
                        kind: "captions",
                        srcLang: "en",
                        default: !0,
                      }),
                    null != e9 &&
                      (0, r.jsx)("source", {
                        onError: () => td(b.CY.SOURCE_ERROR),
                        src: e9.url,
                        type: e9.mimetype,
                      }),
                  ],
                }),
                (ex || e_) &&
                  ed === b.rq.PLAYING &&
                  (0, r.jsx)(d.Spinner, {
                    type: d.Spinner.Type.WANDERING_CUBES,
                    className: q.loadingSpinner,
                  }),
                ed === b.rq.PAUSED &&
                  eQ === b.yE.LOST_FOCUS &&
                  (0, r.jsx)(U, {}),
                ee &&
                  ed !== b.rq.ENDED &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(d.Clickable, {
                        onClick: () => et(!1),
                        tabIndex: -1,
                        children: (0, r.jsx)("div", {
                          className: q.transcriptOverlay,
                        }),
                      }),
                      (0, r.jsx)(s.animated.div, {
                        className: q.transcriptCont,
                        style: {
                          marginBottom: (0, s.to)([tv, tC], (e, t) =>
                            "".concat(50 * e + t, "px"),
                          ),
                        },
                        children: (0, r.jsx)(j.K, {
                          quest: H,
                          onClose: () => {
                            et(!1),
                              $({
                                questId: H.id,
                                questContent: x.jn.VIDEO_MODAL,
                                questContentCTA: S.jZ.TRANSCRIPT_DISABLE,
                              });
                          },
                        }),
                      }),
                    ],
                  }),
                ed === b.rq.ENDED &&
                  (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(Z, {
                      title:
                        null !==
                          (Y =
                            null === (c = H.config.videoMetadata) ||
                            void 0 === c
                              ? void 0
                              : c.messages.videoEndCtaTitle) && void 0 !== Y
                          ? Y
                          : y.intl.string(y.t.iiTtpK),
                      subtitle:
                        null !==
                          (G =
                            null === (p = H.config.videoMetadata) ||
                            void 0 === p
                              ? void 0
                              : p.messages.videoEndCtaSubtitle) && void 0 !== G
                          ? G
                          : y.intl.string(y.t.mxaHf3),
                      icon: d.ArrowLargeRightIcon,
                      className: q.endScreenPanelRight,
                      onClick: () => {
                        $({
                          questId: H.id,
                          questContent: x.jn.VIDEO_MODAL,
                          questContentCTA: S.jZ.LEARN_MORE,
                        }),
                          (0, h.FE)(H, {
                            content: x.jn.VIDEO_MODAL,
                            ctaContent: S.jZ.LEARN_MORE,
                          });
                      },
                    }),
                  }),
                (0, r.jsx)(s.animated.div, {
                  className: q.videoFooterContGradient,
                  style: {
                    opacity: (0, s.to)(
                      [tv.to({ range: [0, 1], output: [0, 1] })],
                      (e) => "".concat(e),
                    ),
                  },
                }),
                (0, r.jsx)(
                  "div",
                  {
                    className: o()(q.playPausePopCont, {
                      [q.play]: ed === b.rq.PLAYING,
                      [q.pause]: ed === b.rq.PAUSED,
                    }),
                    children:
                      ed === b.rq.PLAYING
                        ? (0, r.jsx)(d.PlayIcon, {
                            className: q.playPausePopIcon,
                          })
                        : (0, r.jsx)(d.PauseIcon, {
                            className: q.playPausePopIcon,
                          }),
                  },
                  ed,
                ),
                en &&
                  null != e1 &&
                  (0, r.jsx)(s.animated.div, {
                    className: q.captionContainer,
                    ref: tp,
                    style: {
                      translateY: (0, s.to)(
                        [tv.to({ range: [0, 1], output: [0, -50] })],
                        (e) => "".concat(e, "px"),
                      ),
                    },
                    children: (0, r.jsx)(d.Text, {
                      variant: "text-lg/semibold",
                      color: "always-white",
                      className: q.captionText,
                      children: e1.text,
                    }),
                  }),
                (0, r.jsxs)(s.animated.div, {
                  className: q.videoFooterCont,
                  style: {
                    paddingLeft: (0, s.to)(
                      [tv.to({ range: [0, 1], output: [0, 25] })],
                      (e) => "".concat(e, "px"),
                    ),
                    paddingRight: (0, s.to)(
                      [tv.to({ range: [0, 1], output: [0, 25] })],
                      (e) => "".concat(e, "px"),
                    ),
                    height: (0, s.to)(
                      [tv.to({ range: [0, 1], output: [0, 50] })],
                      (e) => "".concat(e, "px"),
                    ),
                  },
                  children: [
                    (0, r.jsx)(A.Z, {
                      percent: eC,
                      animate: !0 !== ez.current && !eS,
                      interactionEnabled: eH && eM,
                      backgroundColor: tn ? void 0 : "rgba(0, 0, 0, 0.0)",
                      preloadedBuffers: tn ? eN : void 0,
                      duration:
                        null !==
                          (z =
                            null === (N = eY.current) || void 0 === N
                              ? void 0
                              : N.duration) && void 0 !== z
                          ? z
                          : 1,
                      maxSeekableTime: tn && eM ? e6 : void 0,
                      onClick: (e) => {
                        to(e), ed === b.rq.ENDED && e3(b.rq.PLAYING);
                      },
                      onScrubBack: () => {
                        ti();
                      },
                      onScrubForward: () => {
                        tl();
                      },
                    }),
                    (0, r.jsx)(s.animated.div, {
                      className: q.videoControlsCont,
                      style: {
                        paddingTop: (0, s.to)(
                          [tv.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(e * e * 12, "px"),
                        ),
                        paddingBottom: (0, s.to)(
                          [tv.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(e * e * 12, "px"),
                        ),
                        pointerEvents: (0, s.to)(
                          [tv.to({ range: [0, 1], output: [0, 1] })],
                          (e) => (e < 0.3 ? "none" : "auto"),
                        ),
                      },
                      children: (0, r.jsx)(I.Z, {
                        videoRef: eY,
                        quest: H,
                        playerState: ed,
                        animSpring: tv,
                        visible: tn,
                        seekForwardEnabled: th,
                        hideCaptionBtn: null == tx,
                        handlePlaybackBtnClick: ts,
                        handleTranscriptBtnClick: () => {
                          !ee &&
                            (null == eK ||
                              eK.questId !== H.id ||
                              eK.fetchStatus === _.iF.NONE ||
                              eK.fetchStatus === _.iF.FAILURE) &&
                            (0, g.lL)(H),
                            et(!ee),
                            $({
                              questId: H.id,
                              questContent: x.jn.VIDEO_MODAL,
                              questContentCTA: ee
                                ? S.jZ.TRANSCRIPT_DISABLE
                                : S.jZ.TRANSCRIPT_ENABLE,
                            });
                        },
                        handleCaptionBtnClick: () => {
                          er(!en),
                            $({
                              questId: H.id,
                              questContent: x.jn.VIDEO_MODAL,
                              questContentCTA: en
                                ? S.jZ.CLOSED_CAPTIONING_DISABLE
                                : S.jZ.CLOSED_CAPTIONING_ENABLE,
                            });
                        },
                        handleFullScreenBtnClick: () => {
                          var e;
                          let t = !ei,
                            n = (0, f.fn)(
                              null === (e = eY.current) || void 0 === e
                                ? void 0
                                : e.parentNode,
                              eY.current,
                            );
                          t && null != n
                            ? ((0, f.Dj)(n),
                              n.addEventListener(f.NO, tr),
                              J({
                                questId: H.id,
                                event: M.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                                properties: { video_session_id: K },
                              }))
                            : !t &&
                              null != n &&
                              (n.removeEventListener(f.NO, tr),
                              J({
                                questId: H.id,
                                event: M.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                                properties: { video_session_id: K },
                              }),
                              (0, f.Pr)(n)),
                            el(t);
                        },
                        handleSeekBackBtnClick: ti,
                        handleSeekForwardBtnClick: tl,
                        handleControlBarPendingInteraction: ek,
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
          return u;
        },
        xU: function () {
          return c;
        },
        zw: function () {
          return a;
        },
      }),
        n(47120);
      var r = n(192379),
        i = n(442837),
        l = n(434650),
        o = n(110924),
        s = n(451478);
      let a = 2;
      function u() {
        let [e, t] = r.useState(!1),
          n = e !== (0, o.Z)(e);
        return {
          visible: e,
          visibleChanged: n,
          targetRef: (0, l.O)((e) => t(e), 0.6),
        };
      }
      function c() {
        let e = (0, i.e7)([s.Z], () => s.Z.isFocused()),
          t = e !== (0, o.Z)(e);
        return { focused: e, focusedChanged: t };
      }
    },
    920393: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      }),
        n(47120);
      var r = n(192379);
      function i(e) {
        let {
            videoRef: t,
            isPlaying: n,
            isMetadataLoaded: i,
            isInitialSeekComplete: l,
            onAnalytics: o,
            emitIntervalMs: s,
            minSegmentDurationMs: a,
          } = e,
          [u, c] = r.useState(null),
          d = (0, r.useRef)(null),
          m = (0, r.useRef)(Date.now()),
          v = (0, r.useRef)(!1),
          E = (0, r.useCallback)(
            (e) => {
              if (!(e.segmentEndSec < e.segmentStartSec))
                o({
                  start_time: e.startTime,
                  end_time: e.endTime,
                  duration: e.endTime - e.startTime,
                  segment_start_sec: e.segmentStartSec,
                  segment_end_sec: e.segmentEndSec,
                  segment_duration_sec: e.segmentEndSec - e.segmentStartSec,
                });
            },
            [o],
          ),
          p = (0, r.useCallback)(() => {
            if (null != t.current && i && l) {
              let e = Date.now(),
                n = t.current.currentTime;
              c({
                startTime: e,
                endTime: e,
                segmentStartSec: n,
                segmentEndSec: n,
              }),
                (v.current = !0);
            }
          }, [t, i, l]),
          C = (0, r.useCallback)(() => {
            if (null == t.current || null == u) return;
            let e = Date.now();
            if (e - m.current < s) return;
            let n = t.current.currentTime;
            if (!(n - u.segmentStartSec < a / 1e3))
              E({ ...u, endTime: e, segmentEndSec: n }),
                c({
                  startTime: e,
                  endTime: e,
                  segmentStartSec: n,
                  segmentEndSec: n,
                }),
                (m.current = e);
          }, [u, E, s, t, a]);
        return (
          (0, r.useEffect)(() => {
            (!i || !l) && (c(null), (v.current = !1));
          }, [i, l]),
          (0, r.useEffect)(() => {
            if (n && i && l)
              !v.current && p(),
                (d.current = window.setInterval(() => {
                  C();
                }, 200));
            else {
              if (null != u && null != t.current) {
                let e = Date.now(),
                  n = t.current.currentTime;
                n - u.segmentStartSec > 0.2 &&
                  E({ ...u, endTime: e, segmentEndSec: n });
              }
              c(null),
                (v.current = !1),
                null != d.current &&
                  (clearInterval(d.current), (d.current = null));
            }
            return () => {
              null != d.current &&
                (clearInterval(d.current), (d.current = null));
            };
          }, [n, i, l, u, C, E, t, p]),
          {
            forceSendCurrentSegment: (0, r.useCallback)(() => {
              if (null != u && null != t.current) {
                let e = Date.now(),
                  n = t.current.currentTime;
                n - u.segmentStartSec > 0.2 &&
                  E({ ...u, endTime: e, segmentEndSec: n }),
                  c(null),
                  (v.current = !1);
              }
            }, [u, E, t]),
            isInitialized: v.current,
          }
        );
      }
    },
    889711: function (e, t, n) {
      function r(e) {
        return new ResizeObserver(e);
      }
      function i(e, t) {
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
          return i;
        },
        pP: function () {
          return r;
        },
      });
    },
  },
]);
//# sourceMappingURL=84c638de607f4d4547c1.js.map
