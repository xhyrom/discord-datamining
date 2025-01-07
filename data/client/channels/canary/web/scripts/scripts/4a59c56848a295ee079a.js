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
          }, [t, e]),
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
        f = n(957099),
        C = n(312729),
        S = n(223418),
        g = n(604162),
        x = n(981631),
        h = n(388032),
        _ = n(451680);
      let T = "-:--",
        D = {
          [S.rq.PLAYING]: {
            icon: d.PauseIcon,
            label: h.intl.string(h.t.ZcgDJS),
          },
          [S.rq.PAUSED]: { icon: d.PlayIcon, label: h.intl.string(h.t.RscU7O) },
          [S.rq.ENDED]: { icon: d.RetryIcon, label: h.intl.string(h.t.hsvh0t) },
        },
        N = (e, t) => {
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
            onClick: f,
          } = e,
          C = (e) =>
            (0, r.jsx)(d.Clickable, {
              ...e,
              onClick: !0 === m ? void 0 : f,
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
        if (null == v) return C();
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
            children: (e) => C(e),
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
            handlePlaybackBtnClick: L,
            handleTranscriptBtnClick: R,
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
                ? (et(q), U(!1), N(v.id, q))
                : (w(z), et(0), U(!0), N(v.id, 0));
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
                  L();
                  break;
                case S.Y1.SPACE:
                  !G && (e.preventDefault(), L());
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
            [O, k, L, M, P, en, G],
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
          { icon: es, label: ea } = D[g];
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
                  onClick: L,
                  ref: ee,
                }),
                (0, r.jsx)(A, {
                  iconComponent: f.d,
                  animationTime: x,
                  visible: T,
                  onClick: M,
                  ariaLabel: h.intl.string(h.t.r9s3Ul),
                  tooltipLabel: h.intl.string(h.t.r9s3Ul),
                  shortcut: S.Y1.SEEK_BACK,
                }),
                (0, r.jsx)(A, {
                  iconComponent: C.o,
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
                            N(v.id, e),
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
                  onClick: R,
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
        o = n(325767);
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
        o = n(325767);
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
        o = n(325767);
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
        f = n(918701),
        C = n(475595),
        S = n(566078),
        g = n(164495),
        x = n(472144),
        h = n(602667),
        _ = n(644646),
        T = n(604162),
        D = n(747717),
        N = n(963123),
        I = n(281055),
        A = n(46140),
        j = n(981631),
        b = n(388032),
        L = n(451680);
      function R(e) {
        var t;
        let {
            transitionState: n,
            onClose: l,
            quest: E,
            autoplay: R,
            videoSessionId: O,
          } = e,
          k = (0, f.il)(E),
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
            (0, f.f2)(E.id, {
              content: p.jn.VIDEO_MODAL,
              ctaContent: m.jZ.COPY_QUEST_URL,
            }),
              Y();
          }, [E.id, Y]),
          H = () => {
            (0, f.FE)(E, {
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
          className: L.modalRoot,
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
                className: L.modalBg,
                children: (0, r.jsx)("div", {
                  className: L.modalBody,
                  children: (0, r.jsxs)("div", {
                    className: L.modalContent,
                    children: [
                      (0, r.jsxs)("div", {
                        className: L.contentHeader,
                        children: [
                          (0, r.jsxs)(u.Clickable, {
                            className: L.contentHeaderGameInfo,
                            onClick: H,
                            children: [
                              (0, r.jsx)("img", {
                                alt: E.config.messages.gameTitle,
                                className: o()(
                                  L.contentHeaderLogotype,
                                  L.accentOnHover,
                                ),
                                src: (0, C.fh)(E, C.eC.LOGO_TYPE, P).url,
                              }),
                              (0, r.jsx)(D.Z, {}),
                              (0, r.jsxs)("div", {
                                className: L.questHeading,
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
                                className: L.progressCont,
                                ...e,
                                children: (0, r.jsx)(x.Z, {
                                  quest: E,
                                  size: 48,
                                  percentComplete: F,
                                  percentCompleteText: B ? Z : void 0,
                                  percentCompleteTextVariant: "text-sm/medium",
                                  children: (0, r.jsx)(_.Z, {
                                    className: L.questProgressRewardTile,
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
                      (0, r.jsx)(N.Z, {
                        quest: E,
                        videoSessionId: O,
                        parentTransitionState: n,
                        onOptimisticProgressUpdate: w,
                        autoplay: R,
                      }),
                      (0, r.jsxs)("div", {
                        className: L.contentFooter,
                        children: [
                          (0, r.jsx)(u.Button, {
                            onClick: l,
                            color: u.Button.Colors.PRIMARY,
                            size: u.Button.Sizes.MEDIUM,
                            children: b.intl.string(b.t.cpT0Cg),
                          }),
                          (0, r.jsxs)("div", {
                            className: L.contentFooterButtonCont,
                            children: [
                              (0, r.jsx)(u.Button, {
                                color: u.Button.Colors.PRIMARY,
                                onClick: z,
                                size: u.Button.Sizes.NONE,
                                className: L.copyLinkBtn,
                                children: V,
                              }),
                              (0, r.jsx)(g.i0, {
                                className: L.claimBtn,
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
          ? (0, r.jsx)(R, { ...l, quest: a, autoplay: i })
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
            duration: f,
            maxSeekableTime: C,
            onClick: S,
            onScrubBack: g,
            onScrubForward: x,
          } = e,
          [h, _] = i.useState(null),
          [T, D] = i.useState(null),
          [N, I] = i.useState(null),
          [A, j] = i.useState(!1),
          b = i.useRef(null),
          L = (e) => {
            (b.current = e), _(e);
          };
        i.useEffect(() => {
          null != h && (null == C ? I(null) : I(v(C, f, h)));
        }, [h, C, f]);
        let R = (0, a.y)(() => {
          if (null != R.current) L(R.current.getBoundingClientRect());
        });
        i.useLayoutEffect(() => {
          null != R.current && L(R.current.getBoundingClientRect());
        }, [R]),
          i.useEffect(() => {
            let e = () => {
              null != R.current && L(R.current.getBoundingClientRect());
            };
            return (
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, [R]);
        let O = (e) => {
            D(e.clientX);
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
          M = null != T && null != h ? m(T, h, f) : 0,
          P = (0, u.yv)(M),
          y = null != h ? h.right - v((t / 100) * f, f, h) : null,
          q = null != T && null != h ? h.right - T : null,
          w = null != N && null != h ? h.right - N : null;
        return (0, r.jsxs)("div", {
          className: d.cont,
          ref: R,
          children: [
            (0, r.jsxs)(s.Clickable, {
              className: o()(d.hitboxArea, { [d.interactionEnabled]: l }),
              ignoreKeyPress: !0,
              onClick: (e) => {
                if (!!l && null != S)
                  S(m(e.clientX, e.currentTarget.getBoundingClientRect(), f));
              },
              onMouseEnter: (e) => {
                if (!!l)
                  null != R.current && L(R.current.getBoundingClientRect()),
                    j(!0),
                    O(e);
              },
              onMouseLeave: (e) => {
                if (!!l) j(!1), D(null);
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
          return Z;
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
        m = n(607070),
        v = n(70097),
        E = n(210887),
        p = n(866960),
        f = n(228488),
        C = n(617136),
        S = n(272008),
        g = n(497505),
        x = n(918701),
        h = n(184299),
        _ = n(720293),
        T = n(602667),
        D = n(341907),
        N = n(881773),
        I = n(355243),
        A = n(106743),
        j = n(223418),
        b = n(604162),
        L = n(747717),
        R = n(281055),
        O = n(920393),
        k = n(981631),
        M = n(217702),
        P = n(388032),
        y = n(451680);
      let q = new Set([k.IyS.FIVE_G, k.IyS.FOUR_G, k.IyS.UNKNOWN]),
        w = { tension: 250, friction: 5, clamp: !0 };
      function B() {
        let e = (0, u.e7)([E.Z], () => E.Z.getState().theme);
        return (0, r.jsx)("div", {
          className: y.pauseText,
          style: {
            background: (0, c.wj)(e)
              ? "rgba(0, 0, 0, 0.65)"
              : "rgba(255, 255, 255, 0.65)",
          },
          children: (0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            children: P.intl.string(P.t.U7Xrb2),
          }),
        });
      }
      function U(e) {
        let { quest: t, shouldShow: n } = e,
          l = i.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
        return null == l
          ? null
          : (0, r.jsx)(T.A, {
              questOrQuests: t,
              questContent: g.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                (0, r.jsx)("img", {
                  ref: (t) => {
                    e.current = t;
                  },
                  src: l.url,
                  alt: "Video thumbnail",
                  className: o()(y.stillFrameImageCard, {
                    [y.stillFrameImageCardHidden]: !n,
                  }),
                }),
            });
      }
      function F(e) {
        let { title: t, subtitle: n, icon: l, onClick: s, className: a } = e,
          [u, c] = i.useState(!1),
          m = () => {
            c(!0);
          },
          v = () => {
            c(!1);
          };
        return (0, r.jsx)(d.Clickable, {
          className: o()(y.endScreenPanel, y.accentOnHover, a),
          onMouseEnter: m,
          onMouseLeave: v,
          onFocus: m,
          onBlur: v,
          onClick: s,
          children: (0, r.jsxs)("div", {
            className: y.endScreenPanelInner,
            children: [
              (0, r.jsxs)("div", {
                className: y.endScreenPanelTextCont,
                children: [
                  (0, r.jsx)(d.Heading, {
                    variant: "heading-md/semibold",
                    className: y.endScreenPanelTextTitle,
                    children: t,
                  }),
                  (0, r.jsx)(d.Heading, {
                    variant: "heading-sm/normal",
                    className: y.endScreenPanelTextSubtitle,
                    children: n,
                  }),
                ],
              }),
              (0, r.jsx)(L.Z, { color: "#747783" }),
              (0, r.jsx)(l, {
                size: "md",
                color: u ? "#FFFFFF" : "#B5BAC1",
                className: y.endScreenIcon,
              }),
            ],
          }),
        });
      }
      function Z(e) {
        var t, n, l, c, E, T, L, Z, V, Y, G;
        let {
            quest: z,
            videoSessionId: H,
            onOptimisticProgressUpdate: K,
            autoplay: Q,
            parentTransitionState: W,
          } = e,
          X = (0, C._F)(),
          J = (0, C.O5)(),
          $ = (0, h.km)((e) => e.transcriptEnabled),
          ee = (0, h.km)((e) => e.setTranscriptEnabled),
          et = (0, h.km)((e) => e.captionEnabled),
          en = (0, h.km)((e) => e.setCaptionEnabled),
          er = (0, h.km)((e) => e.fullScreenEnabled),
          ei = (0, h.km)((e) => e.setFullScreenEnabled),
          { focused: el, focusedChanged: eo } = (0, R.xU)(),
          { visible: es, visibleChanged: ea, targetRef: eu } = (0, R.Yy)(),
          [ec, ed] = i.useState(!0 === Q ? j.rq.PLAYING : j.rq.PAUSED),
          [em, ev] = i.useState(!1),
          eE = (0, x.il)(z),
          [ep, ef] = i.useState(eE.percentComplete),
          [eC, eS] = i.useState(!1),
          [eg, ex] = i.useState(!0),
          [eh, e_] = i.useState(!1),
          [eT, eD] = i.useState([]),
          [eN, eI] = i.useState(p.Z.getEffectiveConnectionSpeed()),
          [eA, ej] = i.useState(0),
          [eb, eL] = i.useState(0),
          [eR, eO] = i.useState(!1),
          [ek, eM] = i.useState(!1),
          eP = i.useRef(null),
          ey = i.useRef(null),
          eq = (0, i.useRef)(-1),
          ew = (0, h.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[z.id]) && void 0 !== t
              ? t
              : { timestampSec: 0, duration: 10 };
          }, a.X),
          eB = (0, h.km)((e) => e.setVideoProgress),
          eU = (0, h.km)((e) => e.muted),
          eF = (0, h.km)((e) => e.volume),
          eZ = (0, u.e7)([m.Z], () => m.Z.useReducedMotion),
          eV = (0, i.useRef)(null),
          eY = (0, i.useRef)(null),
          eG = i.useRef(!0),
          ez =
            (null === (t = z.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          eH = (0, h.km)((e) => e.transcript),
          [eK, eQ] = i.useState(null),
          [eW, eX] = i.useState(!1),
          [eJ, e$] = i.useState(!1),
          [e0, e1] = i.useState(null),
          e2 = ez
            ? null !==
                (L =
                  null === (n = eV.current) || void 0 === n
                    ? void 0
                    : n.duration) && void 0 !== L
              ? L
              : 0
            : Math.max(ew.maxTimestampSec, eE.progressSeconds),
          e6 = i.useMemo(
            () =>
              q.has(eN)
                ? _.i.VIDEO_PLAYER_VIDEO
                : _.i.VIDEO_PLAYER_VIDEO_LOW_RES,
            [eN],
          ),
          e4 = i.useMemo(() => (null != e6 ? (0, _.z)(e6, z) : null), [e6, z]),
          e9 = i.useCallback(
            (e) => {
              null != eV.current &&
                X({
                  questId: z.id,
                  event: k.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                  properties: {
                    ...e,
                    video_asset_id: e6,
                    quest_completed: ez,
                    video_duration_sec: eV.current.duration,
                    video_progress: (0, D.formatVideoProgressRatio)(
                      e.segment_end_sec,
                      eV.current.duration,
                    ),
                    video_session_id: H,
                  },
                });
            },
            [X, z.id, e6, ez, H],
          ),
          { forceSendCurrentSegment: e7 } = (0, O.Z)({
            videoRef: eV,
            isPlaying: ec === j.rq.PLAYING,
            isMetadataLoaded: eW,
            isInitialSeekComplete: eJ,
            onAnalytics: e9,
            emitIntervalMs: 4e3,
            minSegmentDurationMs: 2e3,
          }),
          e8 = i.useCallback(
            (e) => {
              if ((ed(e), null != eV.current))
                switch (e) {
                  case j.rq.PLAYING:
                    eV.current.play(),
                      X({
                        questId: z.id,
                        event: k.rMx.QUEST_VIDEO_RESUMED,
                        properties: {
                          video_timestamp_seconds: eV.current.currentTime,
                          pause_reason: eK,
                          video_session_id: H,
                        },
                      }),
                      eQ(null);
                    break;
                  case j.rq.PAUSED:
                    eV.current.pause(), e7();
                    break;
                  case j.rq.ENDED:
                    ee(!1), e7();
                }
            },
            [X, z.id, eK, H, e7, ee],
          );
        i.useLayoutEffect(() => {
          eG.current &&
            ((eG.current = !1),
            eI(p.Z.getEffectiveConnectionSpeed()),
            ez && ew.timestampSec >= ew.duration && eB(z.id, 0, ew.duration));
        }, []),
          i.useEffect(() => {
            null != eV.current &&
              null != eK &&
              X({
                questId: z.id,
                event: k.rMx.QUEST_VIDEO_PAUSED,
                properties: {
                  video_timestamp_seconds: eV.current.currentTime,
                  reason: eK,
                  video_session_id: H,
                },
              });
          }, [eK, z.id, X, H]),
          i.useEffect(() => {
            eo &&
              null != eV.current &&
              X({
                questId: z.id,
                event: el
                  ? k.rMx.QUEST_VIDEO_APP_FOCUSED
                  : k.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                properties: {
                  video_timestamp_seconds: eV.current.currentTime,
                  video_state: ec,
                  video_session_id: H,
                },
              });
          }, [el, eo, ec, z.id, X, H]);
        let e3 = i.useCallback(
          (e) => {
            var t;
            !ez &&
              (null === (t = z.userStatus) || void 0 === t
                ? void 0
                : t.enrolledAt) != null &&
              (0, x.FI)(z, e),
              null != eV.current &&
                X({
                  questId: z.id,
                  event: k.rMx.QUEST_VIDEO_PROGRESSED,
                  properties: {
                    progress: (0, D.formatVideoProgressRatio)(
                      eV.current.currentTime,
                      eV.current.duration,
                    ),
                    video_timestamp_seconds: eV.current.currentTime,
                    video_session_id: H,
                  },
                });
          },
          [ez, z, X, H],
        );
        i.useEffect(() => {
          (W === d.ModalTransitionState.HIDDEN ||
            W === d.ModalTransitionState.EXITING ||
            W === d.ModalTransitionState.EXITED ||
            (null != W && ea && !es && !ez) ||
            (eo && !el && !ez)) &&
            null != eV.current &&
            ec === j.rq.PLAYING &&
            (e8(j.rq.PAUSED), !ez && eQ(j.yE.LOST_FOCUS));
        }, [W, el, eo, es, ea, ec, ez, e8, e3]);
        let e5 = () => {
            ev(!0);
          },
          te = () => {
            ev(!1);
          },
          tt = em || ec === j.rq.PAUSED || ec === j.rq.ENDED,
          tn = i.useCallback(() => {
            var e;
            let t = (0, f.fn)(
              null === (e = eV.current) || void 0 === e ? void 0 : e.parentNode,
              eV.current,
            );
            null != t &&
              !(0, f.rB)(t) &&
              (t.removeEventListener(f.NO, tn),
              ei(!1),
              X({
                questId: z.id,
                event: k.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                properties: { video_session_id: H },
              }));
          }, [z.id, ei, X, H]),
          tr = () => {
            if (null != eV.current)
              tl(Math.max(eV.current.currentTime - 10, 0)),
                ec === j.rq.ENDED && e8(j.rq.PAUSED),
                J({
                  questId: z.id,
                  questContent: g.jn.VIDEO_MODAL,
                  questContentCTA: C.jZ.SEEK_BACKWARD,
                });
          },
          ti = () => {
            if (null == eV.current || !tx) return;
            let e = Math.min(eV.current.currentTime + 10, e2);
            tl(e),
              ec !== j.rq.ENDED && e >= eV.current.duration && e8(j.rq.ENDED),
              J({
                questId: z.id,
                questContent: g.jn.VIDEO_MODAL,
                questContentCTA: C.jZ.SEEK_FORWARD,
              });
          };
        i.useEffect(() => {
          let e = eV.current;
          return () => {
            let t = (0, f.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(f.NO, tn);
          };
        }, [tn]);
        let tl = i.useCallback(
            (e) => {
              null != eV.current &&
                (e7(),
                eS(!0),
                e$(!1),
                (eV.current.currentTime = e),
                eB(z.id, e, eV.current.duration));
            },
            [eV, eB, z.id, e7],
          ),
          to = () => {
            if (null != eV.current)
              switch (ec) {
                case j.rq.ENDED:
                  tl(0), e8(j.rq.PLAYING);
                  break;
                case j.rq.PLAYING:
                  e8(j.rq.PAUSED), eQ(j.yE.PAUSE_BUTTON);
                  break;
                default:
                  e8(j.rq.PLAYING);
              }
          },
          ts = (e) => {
            e1(e);
          },
          ta = (e) => {
            e1((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
          },
          tu = i.useCallback(() => {
            if (null == eV.current || 0 === eV.current.textTracks.length)
              return;
            let e = eV.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
              for (let t = 0; t < e.cues.length; t++) {
                let n = e.cues[t];
                (0, b.JC)(n) &&
                  ((n.id = "cue-".concat(t)),
                  (n.onenter = () => ts(n)),
                  (n.onexit = () => ta(n)));
              }
          }, [eV]);
        i.useEffect(() => {
          if (null == eY.current) return;
          let e = eY.current;
          return (
            e.addEventListener("load", tu),
            () => {
              null != e && e.removeEventListener("load", tu);
            }
          );
        }, [eY, tu]);
        let tc = i.useCallback(
            (e) => {
              try {
                var t, n;
                let r =
                    null === (t = eV.current) || void 0 === t
                      ? void 0
                      : t.error,
                  i =
                    null === (n = eV.current) || void 0 === n
                      ? void 0
                      : n.networkState,
                  l =
                    null != eV.current
                      ? (0, D.formatVideoProgressRatio)(
                          eV.current.currentTime,
                          eV.current.duration,
                        )
                      : void 0;
                X({
                  questId: z.id,
                  event: k.rMx.QUEST_VIDEO_ERROR,
                  properties: {
                    video_progress: l,
                    video_error_type: e,
                    video_asset_id: e6,
                    network_connection_speed: eN,
                    video_session_id: H,
                    video_error_code: null == r ? void 0 : r.code,
                    video_error_message: null == r ? void 0 : r.message,
                    video_network_state: i,
                  },
                });
              } catch (e) {}
            },
            [eN, z.id, X, e6, H],
          ),
          td = (e) => {
            if (null != eV.current && ec === j.rq.PLAYING) {
              if ((eg && ex(!1), eh)) {
                let e = null != ey.current ? Date.now() - ey.current : null;
                X({
                  questId: z.id,
                  event: k.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                  properties: {
                    video_asset_id: e6,
                    network_connection_speed: eN,
                    duration: e,
                    buffer_index: eq.current,
                    video_session_id: H,
                  },
                }),
                  e_(!1);
              }
              e8(j.rq.PLAYING);
            }
          };
        i.useEffect(() => {
          if (!eC) return;
          let e = setTimeout(() => {
            eS(!1);
          }, 1e3);
          return () => clearTimeout(e);
        }, [eC]);
        let [{ controlBarAnimSpring: tm }, tv] = (0, d.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: w,
            onStart: () => {
              eM(!1);
            },
            onRest: (e) => {
              1 === e.value && eM(!0);
            },
          })),
          tE = (0, i.useRef)(null),
          [{ captionHeightSpring: tp }, tf] = (0, d.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: w,
          }));
        i.useEffect(() => {
          var e, t;
          return (
            tf({
              captionHeightSpring:
                et &&
                null != e0 &&
                null !==
                  (t =
                    null === (e = tE.current) || void 0 === e
                      ? void 0
                      : e.clientHeight) &&
                void 0 !== t
                  ? t
                  : 0,
              immediate: eZ,
            }),
            () => {
              tp.stop();
            }
          );
        }, [et, tf, eZ, e0, tp]),
          i.useEffect(
            () => (
              tv({ controlBarAnimSpring: tt || eR ? 1 : 0, immediate: eZ }),
              () => {
                tm.stop();
              }
            ),
            [tt, tv, eZ, eR, tm],
          );
        let tC = ec === j.rq.ENDED,
          tS = i.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_THUMBNAIL, z), [z]),
          tg = i.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_CAPTION, z), [z]),
          tx =
            ez ||
            ew.maxTimestampSec >=
              (null !==
                (Z =
                  null === (l = eV.current) || void 0 === l
                    ? void 0
                    : l.currentTime) && void 0 !== Z
                ? Z
                : 0) +
                1;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(d.Clickable, {
            className: y.videoCont,
            "data-fullscreen": er,
            tabIndex: -1,
            onMouseEnter: e5,
            onMouseLeave: te,
            onFocus: e5,
            onBlur: te,
            children: (0, r.jsxs)("div", {
              className: y.videoContInnerRelative,
              children: [
                (0, r.jsx)(U, { quest: z, shouldShow: tC }),
                tC && (0, r.jsx)("div", { className: y.videoContOverlay }),
                (0, r.jsxs)(v.Z, {
                  ref: (e) => {
                    (eV.current = e), (eu.current = e);
                  },
                  autoPlay: Q,
                  playsInline: !0,
                  mediaLayoutType: er ? M.hV.STATIC : M.hV.RESPONSIVE,
                  className: o()({ [y.hidden]: tC, [y.videoInner]: !0 }),
                  controls: !1,
                  poster: null == tS ? void 0 : tS.url,
                  disablePictureInPicture: !0,
                  onTimeUpdate: (e) => {
                    null != eV.current &&
                      (eV.current.currentTime >= eA &&
                        (ej(eV.current.currentTime + 6 + 2 * Math.random()),
                        e3(eV.current.currentTime)),
                      eV.current.currentTime >= eb &&
                        (eL(eV.current.currentTime + 1),
                        (0, S.qm)(z.id, eE.taskType, eV.current.currentTime),
                        K(eV.current.currentTime)),
                      eB(z.id, eV.current.currentTime, eV.current.duration),
                      ef((eV.current.currentTime / eV.current.duration) * 100));
                  },
                  onEnded: (e) => {
                    null != eV.current &&
                      (e3(eV.current.duration + 1),
                      eB(z.id, eV.current.duration, eV.current.duration)),
                      e8(j.rq.ENDED),
                      e_(!1);
                  },
                  onLoadedData: (e) => {
                    if (eg) {
                      let e =
                        null != eP.current ? Date.now() - eP.current : null;
                      X({
                        questId: z.id,
                        event: k.rMx.QUEST_VIDEO_LOADING_ENDED,
                        properties: {
                          video_asset_id: e6,
                          network_connection_speed: eN,
                          duration: e,
                          video_session_id: H,
                        },
                      }),
                        ex(!1);
                    }
                  },
                  onLoadedMetadata: (e) => {
                    if (null != eV.current)
                      eX(!0),
                        tl(
                          ez
                            ? ew.timestampSec
                            : Math.max(ew.timestampSec, eE.progressSeconds),
                        ),
                        eU ? (eV.current.volume = 0) : (eV.current.volume = eF);
                  },
                  onLoadStart: () => {
                    (eP.current = Date.now()),
                      X({
                        questId: z.id,
                        event: k.rMx.QUEST_VIDEO_LOADING_STARTED,
                        properties: {
                          video_asset_id: e6,
                          network_connection_speed: eN,
                          video_session_id: H,
                        },
                      });
                  },
                  onWaiting: (e) => {
                    (ey.current = Date.now()),
                      (eq.current += 1),
                      X({
                        questId: z.id,
                        event: k.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                        properties: {
                          video_asset_id: e6,
                          network_connection_speed: eN,
                          buffer_index: eq.current,
                          video_session_id: H,
                        },
                      }),
                      e_(!0);
                  },
                  onProgress: (e) => {
                    if (null == eV.current) return;
                    let t = [];
                    for (let e = 0; e < eV.current.buffered.length; e++) {
                      let n = eV.current.buffered.start(e),
                        r = eV.current.buffered.end(e);
                      if (!(r - n < 1))
                        t.push({
                          start: n / eV.current.duration,
                          size: (r - n) / eV.current.duration,
                        });
                    }
                    eD(t);
                  },
                  onCanPlay: td,
                  onCanPlayThrough: td,
                  onSeeked: () => {
                    e$(!0);
                  },
                  onAbort: () => tc(j.CY.ABORT),
                  onError: () => tc(j.CY.ERROR),
                  onEmptied: () => tc(j.CY.EMPTIED),
                  onStalled: () => tc(j.CY.STALLED),
                  onSuspend: () => tc(j.CY.SUSPEND),
                  onClick: () => {
                    to();
                  },
                  crossOrigin: "anonymous",
                  children: [
                    null != tg &&
                      (0, r.jsx)("track", {
                        ref: eY,
                        src: tg.url,
                        label: "English",
                        kind: "captions",
                        srcLang: "en",
                        default: !0,
                      }),
                    null != e4 &&
                      (0, r.jsx)("source", {
                        onError: () => tc(j.CY.SOURCE_ERROR),
                        src: e4.url,
                        type: e4.mimetype,
                      }),
                  ],
                }),
                (eg || eh) &&
                  ec === j.rq.PLAYING &&
                  (0, r.jsx)(d.Spinner, {
                    type: d.Spinner.Type.WANDERING_CUBES,
                    className: y.loadingSpinner,
                  }),
                ec === j.rq.PAUSED &&
                  eK === j.yE.LOST_FOCUS &&
                  (0, r.jsx)(B, {}),
                $ &&
                  ec !== j.rq.ENDED &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(d.Clickable, {
                        onClick: () => ee(!1),
                        tabIndex: -1,
                        children: (0, r.jsx)("div", {
                          className: y.transcriptOverlay,
                        }),
                      }),
                      (0, r.jsx)(s.animated.div, {
                        className: y.transcriptCont,
                        style: {
                          marginBottom: (0, s.to)([tm, tp], (e, t) =>
                            "".concat(50 * e + t, "px"),
                          ),
                        },
                        children: (0, r.jsx)(A.K, {
                          quest: z,
                          onClose: () => {
                            ee(!1),
                              J({
                                questId: z.id,
                                questContent: g.jn.VIDEO_MODAL,
                                questContentCTA: C.jZ.TRANSCRIPT_DISABLE,
                              });
                          },
                        }),
                      }),
                    ],
                  }),
                ec === j.rq.ENDED &&
                  (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(F, {
                      title:
                        null !==
                          (V =
                            null === (c = z.config.videoMetadata) ||
                            void 0 === c
                              ? void 0
                              : c.messages.videoEndCtaTitle) && void 0 !== V
                          ? V
                          : P.intl.string(P.t.iiTtpK),
                      subtitle:
                        null !==
                          (Y =
                            null === (E = z.config.videoMetadata) ||
                            void 0 === E
                              ? void 0
                              : E.messages.videoEndCtaSubtitle) && void 0 !== Y
                          ? Y
                          : P.intl.string(P.t.mxaHf3),
                      icon: d.ArrowLargeRightIcon,
                      className: y.endScreenPanelRight,
                      onClick: () => {
                        J({
                          questId: z.id,
                          questContent: g.jn.VIDEO_MODAL,
                          questContentCTA: C.jZ.LEARN_MORE,
                        }),
                          (0, x.FE)(z, {
                            content: g.jn.VIDEO_MODAL,
                            ctaContent: C.jZ.LEARN_MORE,
                          });
                      },
                    }),
                  }),
                (0, r.jsx)(s.animated.div, {
                  className: y.videoFooterContGradient,
                  style: {
                    opacity: (0, s.to)(
                      [tm.to({ range: [0, 1], output: [0, 1] })],
                      (e) => "".concat(e),
                    ),
                  },
                }),
                (0, r.jsx)(
                  "div",
                  {
                    className: o()(y.playPausePopCont, {
                      [y.play]: ec === j.rq.PLAYING,
                      [y.pause]: ec === j.rq.PAUSED,
                    }),
                    children:
                      ec === j.rq.PLAYING
                        ? (0, r.jsx)(d.PlayIcon, {
                            className: y.playPausePopIcon,
                          })
                        : (0, r.jsx)(d.PauseIcon, {
                            className: y.playPausePopIcon,
                          }),
                  },
                  ec,
                ),
                et &&
                  null != e0 &&
                  (0, r.jsx)(s.animated.div, {
                    className: y.captionContainer,
                    ref: tE,
                    style: {
                      translateY: (0, s.to)(
                        [tm.to({ range: [0, 1], output: [0, -50] })],
                        (e) => "".concat(e, "px"),
                      ),
                    },
                    children: (0, r.jsx)(d.Text, {
                      variant: "text-lg/semibold",
                      color: "always-white",
                      className: y.captionText,
                      children: e0.text,
                    }),
                  }),
                (0, r.jsxs)(s.animated.div, {
                  className: y.videoFooterCont,
                  style: {
                    paddingLeft: (0, s.to)(
                      [tm.to({ range: [0, 1], output: [0, 25] })],
                      (e) => "".concat(e, "px"),
                    ),
                    paddingRight: (0, s.to)(
                      [tm.to({ range: [0, 1], output: [0, 25] })],
                      (e) => "".concat(e, "px"),
                    ),
                    height: (0, s.to)(
                      [tm.to({ range: [0, 1], output: [0, 50] })],
                      (e) => "".concat(e, "px"),
                    ),
                  },
                  children: [
                    (0, r.jsx)(I.Z, {
                      percent: ep,
                      animate: !0 !== eG.current && !eC,
                      interactionEnabled: ez && ek,
                      backgroundColor: tt ? void 0 : "rgba(0, 0, 0, 0.0)",
                      preloadedBuffers: tt ? eT : void 0,
                      duration:
                        null !==
                          (G =
                            null === (T = eV.current) || void 0 === T
                              ? void 0
                              : T.duration) && void 0 !== G
                          ? G
                          : 1,
                      maxSeekableTime: tt && ek ? e2 : void 0,
                      onClick: (e) => {
                        tl(e), ec === j.rq.ENDED && e8(j.rq.PLAYING);
                      },
                      onScrubBack: () => {
                        tr();
                      },
                      onScrubForward: () => {
                        ti();
                      },
                    }),
                    (0, r.jsx)(s.animated.div, {
                      className: y.videoControlsCont,
                      style: {
                        paddingTop: (0, s.to)(
                          [tm.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(e * e * 12, "px"),
                        ),
                        paddingBottom: (0, s.to)(
                          [tm.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(e * e * 12, "px"),
                        ),
                        pointerEvents: (0, s.to)(
                          [tm.to({ range: [0, 1], output: [0, 1] })],
                          (e) => (e < 0.3 ? "none" : "auto"),
                        ),
                      },
                      children: (0, r.jsx)(N.Z, {
                        videoRef: eV,
                        quest: z,
                        playerState: ec,
                        animSpring: tm,
                        visible: tt,
                        seekForwardEnabled: tx,
                        hideCaptionBtn: null == tg,
                        handlePlaybackBtnClick: to,
                        handleTranscriptBtnClick: () => {
                          !$ &&
                            (null == eH ||
                              eH.questId !== z.id ||
                              eH.fetchStatus === h.iF.NONE ||
                              eH.fetchStatus === h.iF.FAILURE) &&
                            (0, S.lL)(z),
                            ee(!$),
                            J({
                              questId: z.id,
                              questContent: g.jn.VIDEO_MODAL,
                              questContentCTA: $
                                ? C.jZ.TRANSCRIPT_DISABLE
                                : C.jZ.TRANSCRIPT_ENABLE,
                            });
                        },
                        handleCaptionBtnClick: () => {
                          en(!et),
                            J({
                              questId: z.id,
                              questContent: g.jn.VIDEO_MODAL,
                              questContentCTA: et
                                ? C.jZ.CLOSED_CAPTIONING_DISABLE
                                : C.jZ.CLOSED_CAPTIONING_ENABLE,
                            });
                        },
                        handleFullScreenBtnClick: () => {
                          var e;
                          let t = !er,
                            n = (0, f.fn)(
                              null === (e = eV.current) || void 0 === e
                                ? void 0
                                : e.parentNode,
                              eV.current,
                            );
                          t && null != n
                            ? ((0, f.Dj)(n),
                              n.addEventListener(f.NO, tn),
                              X({
                                questId: z.id,
                                event: k.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                                properties: { video_session_id: H },
                              }))
                            : !t &&
                              null != n &&
                              (n.removeEventListener(f.NO, tn),
                              X({
                                questId: z.id,
                                event: k.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                                properties: { video_session_id: H },
                              }),
                              (0, f.Pr)(n)),
                            ei(t);
                        },
                        handleSeekBackBtnClick: tr,
                        handleSeekForwardBtnClick: ti,
                        handleControlBarPendingInteraction: eO,
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
          f = (0, r.useCallback)(() => {
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
                  f();
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
          }, [n, i, l, u, f, E, t, p]),
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
//# sourceMappingURL=4a59c56848a295ee079a.js.map
