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
          return A;
        },
      }),
        n(47120);
      var r = n(200651),
        i = n(192379),
        l = n(120356),
        o = n.n(l),
        s = n(208404),
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
        };
      function D(e) {
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
      let I = i.forwardRef(function (e, t) {
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
      function A(e) {
        var t, n;
        let {
            videoRef: l,
            quest: g,
            playerState: T,
            animSpring: A,
            visible: j,
            seekForwardEnabled: b,
            hideCaptionBtn: R,
            handlePlaybackBtnClick: L,
            handleTranscriptBtnClick: O,
            handleCaptionBtnClick: k,
            handleFullScreenBtnClick: M,
            handleSeekBackBtnClick: P,
            handleSeekForwardBtnClick: y,
            handleControlBarPendingInteraction: q,
          } = e,
          w = (0, E.km)((e) => e.volume),
          B = (0, E.km)((e) => e.setVolume),
          U = (0, E.km)((e) => e.muted),
          F = (0, E.km)((e) => e.setMuted),
          Z = (0, E.km)((e) => e.transcriptEnabled),
          V = (0, E.km)((e) => e.captionEnabled),
          Y = (0, E.km)((e) => e.fullScreenEnabled),
          G = (0, a.e7)([m.Z], () => m.Z.useReducedMotion),
          z = (0, a.e7)([m.Z], () => m.Z.keyboardModeEnabled),
          [H, K] = i.useState(U ? 0 : w),
          [Q, W] = i.useState(!1),
          [X, J] = i.useState(!1),
          [{ volumeAnimSpring: $ }, ee] = (0, d.useSpring)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
          })),
          et = i.useRef(null),
          en = (0, v._F)(),
          er = i.useCallback(
            (e) => {
              if (null != l.current)
                e !== l.current.volume && (l.current.volume = e),
                  e !== H && K(e);
            },
            [l, H],
          ),
          ei = i.useCallback(
            (e, t) => {
              en({
                questId: e,
                event: x.rMx.QUEST_VIDEO_VOLUME_CHANGED,
                properties: { volume_threshold: t > 0 && t < 1 ? 0.5 : t },
              });
            },
            [en],
          ),
          el = i.useCallback(() => {
            if (null != l.current)
              0 === H
                ? (er(w), F(!1), ei(g.id, w))
                : (B(H), er(0), F(!0), ei(g.id, 0));
          }, [l, H, er, w, F, ei, g.id, B]),
          eo = () => {
            W(!0);
          },
          es = () => {
            W(!1);
          },
          ea = i.useCallback(
            (e) => {
              switch (e.key) {
                case S.Y1.PLAYBACK:
                  L();
                  break;
                case S.Y1.SPACE:
                  !z && (e.preventDefault(), L());
                  break;
                case S.Y1.SEEK_BACK:
                  P();
                  break;
                case S.Y1.SEEK_FORWARD:
                  y();
                  break;
                case S.Y1.CAPTION:
                  k();
                  break;
                case S.Y1.FULLSCREEN:
                  M();
                  break;
                case S.Y1.MUTE:
                  el();
              }
            },
            [k, M, L, P, y, el, z],
          );
        i.useEffect(() => {
          null != et.current && et.current.focus();
        }, []),
          i.useEffect(
            () => (
              ee({ volumeAnimSpring: X || Q ? 1 : 0, immediate: G }),
              () => {
                $.stop();
              }
            ),
            [X, Q, ee, G, $],
          ),
          i.useEffect(
            () => (
              window.addEventListener("keydown", ea),
              () => {
                window.removeEventListener("keydown", ea);
              }
            ),
            [ea],
          );
        let eu =
            0 === H
              ? d.VoiceXIcon
              : H < 0.5
                ? d.VoiceLowIcon
                : d.VoiceNormalIcon,
          { icon: ec, label: ed } = N[T];
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              className: _.videoControlsGroup,
              children: [
                (0, r.jsx)(I, {
                  iconComponent: ec,
                  animationTime: A,
                  visible: j,
                  ariaLabel: ed,
                  tooltipLabel: ed,
                  shortcut: S.Y1.PLAYBACK,
                  onClick: L,
                  ref: et,
                }),
                (0, r.jsx)(I, {
                  iconComponent: C.d,
                  animationTime: A,
                  visible: j,
                  onClick: P,
                  ariaLabel: h.intl.string(h.t.r9s3Ul),
                  tooltipLabel: h.intl.string(h.t.r9s3Ul),
                  shortcut: S.Y1.SEEK_BACK,
                }),
                (0, r.jsx)(I, {
                  iconComponent: f.o,
                  animationTime: A,
                  visible: j,
                  onClick: y,
                  disabled: !b,
                  ariaLabel: b
                    ? h.intl.string(h.t.zWDcND)
                    : h.intl.string(h.t.xXh3y8),
                  tooltipLabel: b
                    ? h.intl.string(h.t.zWDcND)
                    : h.intl.string(h.t.xXh3y8),
                  tooltipDelayMs: b ? 1500 : 0,
                  shortcut: S.Y1.SEEK_FORWARD,
                }),
              ],
            }),
            (0, r.jsxs)(s.animated.div, {
              className: o()(_.videoControlsGroup, _.videoControlsGroupMid),
              style: {
                opacity: (0, s.to)(
                  [A.to({ range: [0, 1], output: [0, 1] })],
                  (e) => "".concat(j ? e : Math.pow(e, 8)),
                ),
              },
              children: [
                (0, r.jsxs)("div", {
                  onMouseEnter: eo,
                  onMouseLeave: es,
                  onFocus: eo,
                  onBlur: es,
                  className: _.volumeControlGroup,
                  children: [
                    (0, r.jsx)(I, {
                      iconComponent: eu,
                      animationTime: A,
                      visible: j,
                      onClick: el,
                      ariaLabel: h.intl.string(h.t["eIl+AA"]),
                      tooltipLabel: h.intl.string(h.t["eIl+AA"]),
                      shortcut: S.Y1.MUTE,
                    }),
                    (0, r.jsx)(s.animated.div, {
                      className: _.volumeSlider,
                      style: {
                        opacity: (0, s.to)(
                          [$.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(j ? e : Math.pow(e, 8)),
                        ),
                        width: (0, s.to)(
                          [$.to({ range: [0, 1], output: [0, 100] })],
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
                        initialValue: H,
                        keyboardStep: 0.1,
                        minValue: 0,
                        maxValue: 1,
                        onValueChange: (e) => {
                          er(e),
                            B(e),
                            ei(g.id, e),
                            X && (J(!1), q(!1)),
                            U && e > 0 && F(!1);
                        },
                        asValueChanges: (e) => {
                          er(e), !X && (J(!0), q(!0));
                        },
                        fillStyles: { backgroundColor: u.Z.colors.WHITE.css },
                        orientation: "horizontal",
                        "aria-label": h.intl.string(h.t["eIl+AA"]),
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)(D, {
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
                (0, r.jsx)(I, {
                  iconComponent: d.PaperIcon,
                  animationTime: A,
                  visible: j,
                  onClick: O,
                  active: Z && T !== S.rq.ENDED,
                  disabled: T === S.rq.ENDED,
                  ariaLabel: h.intl.string(h.t.KCzjTk),
                  tooltipLabel: h.intl.string(h.t.KCzjTk),
                }),
                !R &&
                  (0, r.jsx)(I, {
                    iconComponent: p.c,
                    animationTime: A,
                    visible: j,
                    active: V,
                    onClick: k,
                    ariaLabel: h.intl.string(h.t.bDSZOz),
                    tooltipLabel: h.intl.string(h.t.bDSZOz),
                    shortcut: S.Y1.CAPTION,
                  }),
                (0, r.jsx)(I, {
                  iconComponent: Y
                    ? d.FullscreenExitIcon
                    : d.FullscreenEnterIcon,
                  animationTime: A,
                  visible: j,
                  onClick: M,
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
            return k;
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
        v = n(915750),
        E = n(113434),
        p = n(569984),
        C = n(497505),
        f = n(918701),
        S = n(475595),
        g = n(566078),
        x = n(164495),
        h = n(472144),
        _ = n(602667),
        T = n(644646),
        N = n(604162),
        D = n(747717),
        I = n(963123),
        A = n(281055),
        j = n(46140),
        b = n(981631),
        R = n(388032),
        L = n(451680);
      function O(e) {
        var t, n, l;
        let {
            transitionState: p,
            onClose: _,
            quest: A,
            autoplay: O,
            videoSessionId: k,
            impressionRef: M,
          } = e,
          P = (0, f.il)(A),
          y = (0, s.e7)([d.Z], () => d.Z.getState().theme),
          q = (0, a.wj)(y) ? b.BRd.DARK : b.BRd.LIGHT,
          w = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
          B = (0, v.aM)(),
          [U, F] = i.useState(P.progressSeconds),
          [Z, V] = i.useState(!1),
          { completedRatio: Y, completedRatioDisplay: G } = (0, E.I)(A),
          [z, H] = (0, N.G6)(
            R.intl.string(R.t.RDE0SU),
            R.intl.string(R.t["+5kSoa"]),
            1700,
          ),
          K =
            (null === (t = A.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) != null
              ? R.intl.string(R.t.vTgCW1)
              : R.intl.string(R.t.cfY4PD),
          Q = i.useCallback(() => {
            (0, f.f2)(A.id, {
              content: C.jn.VIDEO_MODAL,
              ctaContent: m.jZ.COPY_QUEST_URL,
              impressionId: B,
            }),
              H();
          }, [B, A.id, H]),
          W = i.useMemo(
            () => g.r.build(A.config).defaultReward.messages.name,
            [A],
          ),
          X = R.intl.formatToPlainString(R.t["12IWPz"], { rewardName: W });
        return (0, r.jsx)(u.ModalRoot, {
          transitionState: p,
          size: u.ModalSize.DYNAMIC,
          className: L.modalRoot,
          children: (0, r.jsx)("div", {
            ref: (e) => {
              M.current = e;
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
                        onClick: () => {
                          (0, f.FE)(A, {
                            content: C.jn.VIDEO_MODAL,
                            ctaContent: m.jZ.OPEN_GAME_LINK,
                            impressionId: B,
                          });
                        },
                        children: [
                          (0, r.jsx)("img", {
                            alt: A.config.messages.gameTitle,
                            className: o()(
                              L.contentHeaderLogotype,
                              L.accentOnHover,
                            ),
                            src: (0, S.fh)(A, S.eC.LOGO_TYPE, q).url,
                          }),
                          (0, r.jsx)(D.Z, {}),
                          (0, r.jsxs)("div", {
                            className: L.questHeading,
                            children: [
                              (0, r.jsx)(u.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: R.intl.format(R.t.EQa7oq, {
                                  questName: A.config.messages.questName,
                                }),
                              }),
                              (0, r.jsx)(u.Text, {
                                variant: "text-sm/medium",
                                color: "header-secondary",
                                children: A.config.messages.gameTitle,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsx)(u.Tooltip, {
                        position: "left",
                        text: X,
                        onTooltipShow: () => {
                          V(!0);
                        },
                        onTooltipHide: () => {
                          V(!1);
                        },
                        children: (e) =>
                          (0, r.jsx)(u.Clickable, {
                            className: L.progressCont,
                            ...e,
                            children: (0, r.jsx)(h.Z, {
                              quest: A,
                              size: 48,
                              percentComplete: Y,
                              percentCompleteText: Z ? G : void 0,
                              percentCompleteTextVariant: "text-sm/medium",
                              children: (0, r.jsx)(T.Z, {
                                className: L.questProgressRewardTile,
                                quest: A,
                                questContent: C.jn.VIDEO_MODAL,
                                autoplay: !1,
                                location: j.dr.VIDEO_MODAL,
                              }),
                            }),
                          }),
                      }),
                    ],
                  }),
                  (0, r.jsx)(I.Z, {
                    quest: A,
                    videoSessionId: k,
                    parentTransitionState: p,
                    onOptimisticProgressUpdate: F,
                    autoplay: O,
                  }),
                  (0, r.jsxs)("div", {
                    className: L.contentFooter,
                    children: [
                      (0, r.jsx)(u.Button, {
                        onClick: _,
                        color: u.Button.Colors.PRIMARY,
                        size: u.Button.Sizes.MEDIUM,
                        children: R.intl.string(R.t.cpT0Cg),
                      }),
                      (0, r.jsxs)("div", {
                        className: L.contentFooterButtonCont,
                        children: [
                          (0, r.jsx)(u.Button, {
                            color: u.Button.Colors.PRIMARY,
                            onClick: Q,
                            size: u.Button.Sizes.NONE,
                            className: L.copyLinkBtn,
                            children: z,
                          }),
                          (0, r.jsx)(x.i0, {
                            className: L.claimBtn,
                            size: u.Button.Sizes.MEDIUM,
                            quest: A,
                            useReducedMotion: w,
                            isExpanded:
                              (null === (n = A.userStatus) || void 0 === n
                                ? void 0
                                : n.completedAt) != null,
                            disabled:
                              (null === (l = A.userStatus) || void 0 === l
                                ? void 0
                                : l.completedAt) == null,
                            ctaLabel: K,
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
      function k(e) {
        let { questId: t, overrideQuest: n, autoplay: i, ...l } = e,
          o = (0, s.e7)([p.Z], () => p.Z.getQuest(t)),
          a = null != n ? n : o;
        return null != a
          ? (0, r.jsx)(_.A, {
              questOrQuests: a,
              questContent: C.jn.VIDEO_MODAL,
              minViewTimeSeconds: A.zw,
              trackGuildAndChannelMetadata: !0,
              children: (e) =>
                (0, r.jsx)(O, {
                  ...l,
                  impressionRef: e,
                  quest: a,
                  autoplay: i,
                }),
            })
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
          return Y;
        },
      }),
        n(47120),
        n(653041);
      var r = n(200651),
        i = n(192379),
        l = n(120356),
        o = n.n(l),
        s = n(208404),
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
        g = n(915750),
        x = n(272008),
        h = n(497505),
        _ = n(918701),
        T = n(184299),
        N = n(720293),
        D = n(602667),
        I = n(341907),
        A = n(881773),
        j = n(355243),
        b = n(106743),
        R = n(223418),
        L = n(604162),
        O = n(747717),
        k = n(281055),
        M = n(920393),
        P = n(981631),
        y = n(217702),
        q = n(388032),
        w = n(451680);
      let B = new Set([P.IyS.FIVE_G, P.IyS.FOUR_G, P.IyS.UNKNOWN]),
        U = { tension: 250, friction: 5, clamp: !0 };
      function F() {
        let e = (0, u.e7)([p.Z], () => p.Z.getState().theme);
        return (0, r.jsx)("div", {
          className: w.pauseText,
          style: {
            background: (0, c.wj)(e)
              ? "rgba(0, 0, 0, 0.65)"
              : "rgba(255, 255, 255, 0.65)",
          },
          children: (0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            children: q.intl.string(q.t.U7Xrb2),
          }),
        });
      }
      function Z(e) {
        let { quest: t, shouldShow: n } = e,
          l = i.useMemo(() => (0, N.z)(N.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
        return null == l
          ? null
          : (0, r.jsx)(D.A, {
              questOrQuests: t,
              questContent: h.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                (0, r.jsx)("img", {
                  ref: (t) => {
                    e.current = t;
                  },
                  src: l.url,
                  alt: "Video thumbnail",
                  className: o()(w.stillFrameImageCard, {
                    [w.stillFrameImageCardHidden]: !n,
                  }),
                }),
            });
      }
      function V(e) {
        let { title: t, subtitle: n, icon: l, onClick: s, className: a } = e,
          [u, c] = i.useState(!1),
          m = () => {
            c(!0);
          },
          v = () => {
            c(!1);
          };
        return (0, r.jsx)(d.Clickable, {
          className: o()(w.endScreenPanel, w.accentOnHover, a),
          onMouseEnter: m,
          onMouseLeave: v,
          onFocus: m,
          onBlur: v,
          onClick: s,
          children: (0, r.jsxs)("div", {
            className: w.endScreenPanelInner,
            children: [
              (0, r.jsxs)("div", {
                className: w.endScreenPanelTextCont,
                children: [
                  (0, r.jsx)(d.Heading, {
                    variant: "heading-md/semibold",
                    className: w.endScreenPanelTextTitle,
                    children: t,
                  }),
                  (0, r.jsx)(d.Heading, {
                    variant: "heading-sm/normal",
                    className: w.endScreenPanelTextSubtitle,
                    children: n,
                  }),
                ],
              }),
              (0, r.jsx)(O.Z, { color: "#747783" }),
              (0, r.jsx)(l, {
                size: "md",
                color: u ? "#FFFFFF" : "#B5BAC1",
                className: w.endScreenIcon,
              }),
            ],
          }),
        });
      }
      function Y(e) {
        var t, n, l, c, p, D, O, Y, G, z, H;
        let {
            quest: K,
            videoSessionId: Q,
            onOptimisticProgressUpdate: W,
            autoplay: X,
            parentTransitionState: J,
          } = e,
          $ = (0, g.aM)(),
          ee = (0, S._F)(),
          et = (0, S.O5)(),
          en = (0, T.km)((e) => e.transcriptEnabled),
          er = (0, T.km)((e) => e.setTranscriptEnabled),
          ei = (0, T.km)((e) => e.captionEnabled),
          el = (0, T.km)((e) => e.setCaptionEnabled),
          eo = (0, T.km)((e) => e.fullScreenEnabled),
          es = (0, T.km)((e) => e.setFullScreenEnabled),
          { focused: ea, focusedChanged: eu } = (0, k.xU)(),
          { visible: ec, visibleChanged: ed, targetRef: em } = (0, k.Yy)(),
          [ev, eE] = i.useState(!0 === X ? R.rq.PLAYING : R.rq.PAUSED),
          [ep, eC] = i.useState(!1),
          ef = (0, _.il)(K),
          [eS, eg] = i.useState(ef.percentComplete),
          [ex, eh] = i.useState(!1),
          [e_, eT] = i.useState(!0),
          [eN, eD] = i.useState(!1),
          [eI, eA] = i.useState([]),
          [ej, eb] = i.useState(C.Z.getEffectiveConnectionSpeed()),
          [eR, eL] = i.useState(0),
          [eO, ek] = i.useState(0),
          [eM, eP] = i.useState(!1),
          [ey, eq] = i.useState(!1),
          ew = i.useRef(null),
          eB = i.useRef(null),
          eU = (0, i.useRef)(-1),
          eF = (0, T.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[K.id]) && void 0 !== t
              ? t
              : { timestampSec: 0, duration: 10 };
          }, a.X),
          eZ = (0, T.km)((e) => e.setVideoProgress),
          eV = (0, T.km)((e) => e.muted),
          eY = (0, T.km)((e) => e.volume),
          eG = (0, u.e7)([v.Z], () => v.Z.useReducedMotion),
          ez = (0, i.useRef)(null),
          eH = (0, i.useRef)(null),
          eK = i.useRef(!0),
          eQ =
            (null === (t = K.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          eW = (0, T.km)((e) => e.transcript),
          [eX, eJ] = i.useState(null),
          [e$, e0] = i.useState(!1),
          [e1, e2] = i.useState(!1),
          [e4, e9] = i.useState(null),
          e6 = eQ
            ? null !==
                (O =
                  null === (n = ez.current) || void 0 === n
                    ? void 0
                    : n.duration) && void 0 !== O
              ? O
              : 0
            : Math.max(eF.maxTimestampSec, ef.progressSeconds),
          e7 = i.useMemo(
            () =>
              B.has(ej)
                ? N.i.VIDEO_PLAYER_VIDEO
                : N.i.VIDEO_PLAYER_VIDEO_LOW_RES,
            [ej],
          ),
          e8 = i.useMemo(() => (null != e7 ? (0, N.z)(e7, K) : null), [e7, K]),
          e3 = i.useCallback(
            (e) => {
              null != ez.current &&
                ee({
                  questId: K.id,
                  event: P.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                  properties: {
                    ...e,
                    video_asset_id: e7,
                    quest_completed: eQ,
                    video_duration_sec: ez.current.duration,
                    video_progress: (0, I.formatVideoProgressRatio)(
                      e.segment_end_sec,
                      ez.current.duration,
                    ),
                    video_session_id: Q,
                  },
                });
            },
            [ee, K.id, e7, eQ, Q],
          ),
          { forceSendCurrentSegment: e5 } = (0, M.Z)({
            videoRef: ez,
            isPlaying: ev === R.rq.PLAYING,
            isMetadataLoaded: e$,
            isInitialSeekComplete: e1,
            onAnalytics: e3,
            emitIntervalMs: 4e3,
            minSegmentDurationMs: 2e3,
          }),
          te = i.useCallback(
            (e) => {
              if ((eE(e), null != ez.current))
                switch (e) {
                  case R.rq.PLAYING:
                    ez.current.play(),
                      ee({
                        questId: K.id,
                        event: P.rMx.QUEST_VIDEO_RESUMED,
                        properties: {
                          video_timestamp_seconds: ez.current.currentTime,
                          pause_reason: eX,
                          video_session_id: Q,
                        },
                      }),
                      eJ(null);
                    break;
                  case R.rq.PAUSED:
                    ez.current.pause(), e5();
                    break;
                  case R.rq.ENDED:
                    er(!1), e5();
                }
            },
            [ee, K.id, eX, Q, e5, er],
          );
        (0, m.N)(() => {
          eK.current &&
            ((eK.current = !1),
            eb(C.Z.getEffectiveConnectionSpeed()),
            eQ && eF.timestampSec >= eF.duration && eZ(K.id, 0, eF.duration));
        }),
          i.useEffect(() => {
            null != ez.current &&
              null != eX &&
              ee({
                questId: K.id,
                event: P.rMx.QUEST_VIDEO_PAUSED,
                properties: {
                  video_timestamp_seconds: ez.current.currentTime,
                  reason: eX,
                  video_session_id: Q,
                },
              });
          }, [eX, K.id, ee, Q]),
          i.useEffect(() => {
            eu &&
              null != ez.current &&
              ee({
                questId: K.id,
                event: ea
                  ? P.rMx.QUEST_VIDEO_APP_FOCUSED
                  : P.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                properties: {
                  video_timestamp_seconds: ez.current.currentTime,
                  video_state: ev,
                  video_session_id: Q,
                },
              });
          }, [ea, eu, ev, K.id, ee, Q]);
        let tt = i.useCallback(
          (e) => {
            var t;
            !eQ &&
              (null === (t = K.userStatus) || void 0 === t
                ? void 0
                : t.enrolledAt) != null &&
              (0, _.FI)(K, e),
              null != ez.current &&
                ee({
                  questId: K.id,
                  event: P.rMx.QUEST_VIDEO_PROGRESSED,
                  properties: {
                    progress: (0, I.formatVideoProgressRatio)(
                      ez.current.currentTime,
                      ez.current.duration,
                    ),
                    video_timestamp_seconds: ez.current.currentTime,
                    video_session_id: Q,
                  },
                });
          },
          [eQ, K, ee, Q],
        );
        i.useEffect(() => {
          (J === d.ModalTransitionState.HIDDEN ||
            J === d.ModalTransitionState.EXITING ||
            J === d.ModalTransitionState.EXITED ||
            (null != J && ed && !ec && !eQ) ||
            (eu && !ea && !eQ)) &&
            null != ez.current &&
            ev === R.rq.PLAYING &&
            (te(R.rq.PAUSED), !eQ && eJ(R.yE.LOST_FOCUS));
        }, [J, ea, eu, ec, ed, ev, eQ, te, tt]);
        let tn = () => {
            eC(!0);
          },
          tr = () => {
            eC(!1);
          },
          ti = ep || ev === R.rq.PAUSED || ev === R.rq.ENDED,
          tl = i.useCallback(() => {
            var e;
            let t = (0, f.fn)(
              null === (e = ez.current) || void 0 === e ? void 0 : e.parentNode,
              ez.current,
            );
            null != t &&
              !(0, f.rB)(t) &&
              (t.removeEventListener(f.NO, tl),
              es(!1),
              ee({
                questId: K.id,
                event: P.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                properties: { video_session_id: Q },
              }));
          }, [K.id, es, ee, Q]),
          to = () => {
            if (null != ez.current)
              ta(Math.max(ez.current.currentTime - 10, 0)),
                ev === R.rq.ENDED && te(R.rq.PAUSED),
                et({
                  questId: K.id,
                  questContent: h.jn.VIDEO_MODAL,
                  questContentCTA: S.jZ.SEEK_BACKWARD,
                });
          },
          ts = () => {
            if (null == ez.current || !tT) return;
            let e = Math.min(ez.current.currentTime + 10, e6);
            ta(e),
              ev !== R.rq.ENDED && e >= ez.current.duration && te(R.rq.ENDED),
              et({
                questId: K.id,
                questContent: h.jn.VIDEO_MODAL,
                questContentCTA: S.jZ.SEEK_FORWARD,
              });
          };
        i.useEffect(() => {
          let e = ez.current;
          return () => {
            let t = (0, f.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(f.NO, tl);
          };
        }, [tl]);
        let ta = i.useCallback(
            (e) => {
              null != ez.current &&
                (e5(),
                eh(!0),
                e2(!1),
                (ez.current.currentTime = e),
                eZ(K.id, e, ez.current.duration));
            },
            [ez, eZ, K.id, e5],
          ),
          tu = () => {
            if (null != ez.current)
              switch (ev) {
                case R.rq.ENDED:
                  ta(0), te(R.rq.PLAYING);
                  break;
                case R.rq.PLAYING:
                  te(R.rq.PAUSED), eJ(R.yE.PAUSE_BUTTON);
                  break;
                default:
                  te(R.rq.PLAYING);
              }
          },
          tc = (e) => {
            e9(e);
          },
          td = (e) => {
            e9((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
          },
          tm = i.useCallback(() => {
            if (null == ez.current || 0 === ez.current.textTracks.length)
              return;
            let e = ez.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
              for (let t = 0; t < e.cues.length; t++) {
                let n = e.cues[t];
                (0, L.JC)(n) &&
                  ((n.id = "cue-".concat(t)),
                  (n.onenter = () => tc(n)),
                  (n.onexit = () => td(n)));
              }
          }, [ez]);
        i.useEffect(() => {
          if (null == eH.current) return;
          let e = eH.current;
          return (
            e.addEventListener("load", tm),
            () => {
              null != e && e.removeEventListener("load", tm);
            }
          );
        }, [eH, tm]);
        let tv = i.useCallback(
            (e) => {
              try {
                var t, n;
                let r =
                    null === (t = ez.current) || void 0 === t
                      ? void 0
                      : t.error,
                  i =
                    null === (n = ez.current) || void 0 === n
                      ? void 0
                      : n.networkState,
                  l =
                    null != ez.current
                      ? (0, I.formatVideoProgressRatio)(
                          ez.current.currentTime,
                          ez.current.duration,
                        )
                      : void 0;
                ee({
                  questId: K.id,
                  event: P.rMx.QUEST_VIDEO_ERROR,
                  properties: {
                    video_progress: l,
                    video_error_type: e,
                    video_asset_id: e7,
                    network_connection_speed: ej,
                    video_session_id: Q,
                    video_error_code: null == r ? void 0 : r.code,
                    video_error_message: null == r ? void 0 : r.message,
                    video_network_state: i,
                  },
                });
              } catch (e) {}
            },
            [ej, K.id, ee, e7, Q],
          ),
          tE = (e) => {
            if (null != ez.current && ev === R.rq.PLAYING) {
              if ((e_ && eT(!1), eN)) {
                let e = null != eB.current ? Date.now() - eB.current : null;
                ee({
                  questId: K.id,
                  event: P.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                  properties: {
                    video_asset_id: e7,
                    network_connection_speed: ej,
                    duration: e,
                    buffer_index: eU.current,
                    video_session_id: Q,
                  },
                }),
                  eD(!1);
              }
              te(R.rq.PLAYING);
            }
          };
        i.useEffect(() => {
          if (!ex) return;
          let e = setTimeout(() => {
            eh(!1);
          }, 1e3);
          return () => clearTimeout(e);
        }, [ex]);
        let [{ controlBarAnimSpring: tp }, tC] = (0, d.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: U,
            onStart: () => {
              eq(!1);
            },
            onRest: (e) => {
              1 === e.value && eq(!0);
            },
          })),
          tf = (0, i.useRef)(null),
          [{ captionHeightSpring: tS }, tg] = (0, d.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: U,
          }));
        i.useEffect(() => {
          var e, t;
          return (
            tg({
              captionHeightSpring:
                ei &&
                null != e4 &&
                null !==
                  (t =
                    null === (e = tf.current) || void 0 === e
                      ? void 0
                      : e.clientHeight) &&
                void 0 !== t
                  ? t
                  : 0,
              immediate: eG,
            }),
            () => {
              tS.stop();
            }
          );
        }, [ei, tg, eG, e4, tS]),
          i.useEffect(
            () => (
              tC({ controlBarAnimSpring: ti || eM ? 1 : 0, immediate: eG }),
              () => {
                tp.stop();
              }
            ),
            [ti, tC, eG, eM, tp],
          );
        let tx = ev === R.rq.ENDED,
          th = i.useMemo(() => (0, N.z)(N.i.VIDEO_PLAYER_THUMBNAIL, K), [K]),
          t_ = i.useMemo(() => (0, N.z)(N.i.VIDEO_PLAYER_CAPTION, K), [K]),
          tT =
            eQ ||
            eF.maxTimestampSec >=
              (null !==
                (Y =
                  null === (l = ez.current) || void 0 === l
                    ? void 0
                    : l.currentTime) && void 0 !== Y
                ? Y
                : 0) +
                1;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(d.Clickable, {
            className: w.videoCont,
            "data-fullscreen": eo,
            tabIndex: -1,
            onMouseEnter: tn,
            onMouseLeave: tr,
            onFocus: tn,
            onBlur: tr,
            children: (0, r.jsxs)("div", {
              className: w.videoContInnerRelative,
              children: [
                (0, r.jsx)(Z, { quest: K, shouldShow: tx }),
                tx && (0, r.jsx)("div", { className: w.videoContOverlay }),
                (0, r.jsxs)(E.Z, {
                  ref: (e) => {
                    (ez.current = e), (em.current = e);
                  },
                  autoPlay: X,
                  playsInline: !0,
                  mediaLayoutType: eo ? y.hV.STATIC : y.hV.RESPONSIVE,
                  className: o()({ [w.hidden]: tx, [w.videoInner]: !0 }),
                  controls: !1,
                  poster: null == th ? void 0 : th.url,
                  disablePictureInPicture: !0,
                  onTimeUpdate: (e) => {
                    null != ez.current &&
                      (ez.current.currentTime >= eR &&
                        (eL(ez.current.currentTime + 6 + 2 * Math.random()),
                        tt(ez.current.currentTime)),
                      ez.current.currentTime >= eO &&
                        (ek(ez.current.currentTime + 1),
                        (0, x.qm)(K.id, ef.taskType, ez.current.currentTime),
                        W(ez.current.currentTime)),
                      eZ(K.id, ez.current.currentTime, ez.current.duration),
                      eg((ez.current.currentTime / ez.current.duration) * 100));
                  },
                  onEnded: (e) => {
                    null != ez.current &&
                      (tt(ez.current.duration + 1),
                      eZ(K.id, ez.current.duration, ez.current.duration)),
                      te(R.rq.ENDED),
                      eD(!1);
                  },
                  onLoadedData: (e) => {
                    if (e_) {
                      let e =
                        null != ew.current ? Date.now() - ew.current : null;
                      ee({
                        questId: K.id,
                        event: P.rMx.QUEST_VIDEO_LOADING_ENDED,
                        properties: {
                          video_asset_id: e7,
                          network_connection_speed: ej,
                          duration: e,
                          video_session_id: Q,
                        },
                      }),
                        eT(!1);
                    }
                  },
                  onLoadedMetadata: (e) => {
                    if (null != ez.current)
                      e0(!0),
                        ta(
                          eQ
                            ? eF.timestampSec
                            : Math.max(eF.timestampSec, ef.progressSeconds),
                        ),
                        eV ? (ez.current.volume = 0) : (ez.current.volume = eY);
                  },
                  onLoadStart: () => {
                    (ew.current = Date.now()),
                      ee({
                        questId: K.id,
                        event: P.rMx.QUEST_VIDEO_LOADING_STARTED,
                        properties: {
                          video_asset_id: e7,
                          network_connection_speed: ej,
                          video_session_id: Q,
                        },
                      });
                  },
                  onWaiting: (e) => {
                    (eB.current = Date.now()),
                      (eU.current += 1),
                      ee({
                        questId: K.id,
                        event: P.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                        properties: {
                          video_asset_id: e7,
                          network_connection_speed: ej,
                          buffer_index: eU.current,
                          video_session_id: Q,
                        },
                      }),
                      eD(!0);
                  },
                  onProgress: (e) => {
                    if (null == ez.current) return;
                    let t = [];
                    for (let e = 0; e < ez.current.buffered.length; e++) {
                      let n = ez.current.buffered.start(e),
                        r = ez.current.buffered.end(e);
                      if (!(r - n < 1))
                        t.push({
                          start: n / ez.current.duration,
                          size: (r - n) / ez.current.duration,
                        });
                    }
                    eA(t);
                  },
                  onCanPlay: tE,
                  onCanPlayThrough: tE,
                  onSeeked: () => {
                    e2(!0);
                  },
                  onAbort: () => tv(R.CY.ABORT),
                  onError: () => tv(R.CY.ERROR),
                  onEmptied: () => tv(R.CY.EMPTIED),
                  onStalled: () => tv(R.CY.STALLED),
                  onSuspend: () => tv(R.CY.SUSPEND),
                  onClick: () => {
                    tu();
                  },
                  crossOrigin: "anonymous",
                  children: [
                    null != t_ &&
                      (0, r.jsx)("track", {
                        ref: eH,
                        src: t_.url,
                        label: "English",
                        kind: "captions",
                        srcLang: "en",
                        default: !0,
                      }),
                    null != e8 &&
                      (0, r.jsx)("source", {
                        onError: () => tv(R.CY.SOURCE_ERROR),
                        src: e8.url,
                        type: e8.mimetype,
                      }),
                  ],
                }),
                (e_ || eN) &&
                  ev === R.rq.PLAYING &&
                  (0, r.jsx)(d.Spinner, {
                    type: d.Spinner.Type.WANDERING_CUBES,
                    className: w.loadingSpinner,
                  }),
                ev === R.rq.PAUSED &&
                  eX === R.yE.LOST_FOCUS &&
                  (0, r.jsx)(F, {}),
                en &&
                  ev !== R.rq.ENDED &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(d.Clickable, {
                        onClick: () => er(!1),
                        tabIndex: -1,
                        children: (0, r.jsx)("div", {
                          className: w.transcriptOverlay,
                        }),
                      }),
                      (0, r.jsx)(s.animated.div, {
                        className: w.transcriptCont,
                        style: {
                          marginBottom: (0, s.to)([tp, tS], (e, t) =>
                            "".concat(50 * e + t, "px"),
                          ),
                        },
                        children: (0, r.jsx)(b.K, {
                          quest: K,
                          onClose: () => {
                            er(!1),
                              et({
                                questId: K.id,
                                questContent: h.jn.VIDEO_MODAL,
                                questContentCTA: S.jZ.TRANSCRIPT_DISABLE,
                              });
                          },
                        }),
                      }),
                    ],
                  }),
                ev === R.rq.ENDED &&
                  (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(V, {
                      title:
                        null !==
                          (G =
                            null === (c = K.config.videoMetadata) ||
                            void 0 === c
                              ? void 0
                              : c.messages.videoEndCtaTitle) && void 0 !== G
                          ? G
                          : q.intl.string(q.t.iiTtpK),
                      subtitle:
                        null !==
                          (z =
                            null === (p = K.config.videoMetadata) ||
                            void 0 === p
                              ? void 0
                              : p.messages.videoEndCtaSubtitle) && void 0 !== z
                          ? z
                          : q.intl.string(q.t.mxaHf3),
                      icon: d.ArrowLargeRightIcon,
                      className: w.endScreenPanelRight,
                      onClick: () => {
                        et({
                          questId: K.id,
                          questContent: h.jn.VIDEO_MODAL,
                          questContentCTA: S.jZ.LEARN_MORE,
                        }),
                          (0, _.FE)(K, {
                            content: h.jn.VIDEO_MODAL,
                            ctaContent: S.jZ.LEARN_MORE,
                            impressionId: $,
                          });
                      },
                    }),
                  }),
                (0, r.jsx)(s.animated.div, {
                  className: w.videoFooterContGradient,
                  style: {
                    opacity: (0, s.to)(
                      [tp.to({ range: [0, 1], output: [0, 1] })],
                      (e) => "".concat(e),
                    ),
                  },
                }),
                (0, r.jsx)(
                  "div",
                  {
                    className: o()(w.playPausePopCont, {
                      [w.play]: ev === R.rq.PLAYING,
                      [w.pause]: ev === R.rq.PAUSED,
                    }),
                    children:
                      ev === R.rq.PLAYING
                        ? (0, r.jsx)(d.PlayIcon, {
                            className: w.playPausePopIcon,
                          })
                        : (0, r.jsx)(d.PauseIcon, {
                            className: w.playPausePopIcon,
                          }),
                  },
                  ev,
                ),
                ei &&
                  null != e4 &&
                  (0, r.jsx)(s.animated.div, {
                    className: w.captionContainer,
                    ref: tf,
                    style: {
                      translateY: (0, s.to)(
                        [tp.to({ range: [0, 1], output: [0, -50] })],
                        (e) => "".concat(e, "px"),
                      ),
                    },
                    children: (0, r.jsx)(d.Text, {
                      variant: "text-lg/semibold",
                      color: "always-white",
                      className: w.captionText,
                      children: e4.text,
                    }),
                  }),
                (0, r.jsxs)(s.animated.div, {
                  className: w.videoFooterCont,
                  style: {
                    paddingLeft: (0, s.to)(
                      [tp.to({ range: [0, 1], output: [0, 25] })],
                      (e) => "".concat(e, "px"),
                    ),
                    paddingRight: (0, s.to)(
                      [tp.to({ range: [0, 1], output: [0, 25] })],
                      (e) => "".concat(e, "px"),
                    ),
                    height: (0, s.to)(
                      [tp.to({ range: [0, 1], output: [0, 50] })],
                      (e) => "".concat(e, "px"),
                    ),
                  },
                  children: [
                    (0, r.jsx)(j.Z, {
                      percent: eS,
                      animate: !0 !== eK.current && !ex,
                      interactionEnabled: eQ && ey,
                      backgroundColor: ti ? void 0 : "rgba(0, 0, 0, 0.0)",
                      preloadedBuffers: ti ? eI : void 0,
                      duration:
                        null !==
                          (H =
                            null === (D = ez.current) || void 0 === D
                              ? void 0
                              : D.duration) && void 0 !== H
                          ? H
                          : 1,
                      maxSeekableTime: ti && ey ? e6 : void 0,
                      onClick: (e) => {
                        ta(e), ev === R.rq.ENDED && te(R.rq.PLAYING);
                      },
                      onScrubBack: () => {
                        to();
                      },
                      onScrubForward: () => {
                        ts();
                      },
                    }),
                    (0, r.jsx)(s.animated.div, {
                      className: w.videoControlsCont,
                      style: {
                        paddingTop: (0, s.to)(
                          [tp.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(e * e * 12, "px"),
                        ),
                        paddingBottom: (0, s.to)(
                          [tp.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(e * e * 12, "px"),
                        ),
                        pointerEvents: (0, s.to)(
                          [tp.to({ range: [0, 1], output: [0, 1] })],
                          (e) => (e < 0.3 ? "none" : "auto"),
                        ),
                      },
                      children: (0, r.jsx)(A.Z, {
                        videoRef: ez,
                        quest: K,
                        playerState: ev,
                        animSpring: tp,
                        visible: ti,
                        seekForwardEnabled: tT,
                        hideCaptionBtn: null == t_,
                        handlePlaybackBtnClick: tu,
                        handleTranscriptBtnClick: () => {
                          !en &&
                            (null == eW ||
                              eW.questId !== K.id ||
                              eW.fetchStatus === T.iF.NONE ||
                              eW.fetchStatus === T.iF.FAILURE) &&
                            (0, x.lL)(K),
                            er(!en),
                            et({
                              questId: K.id,
                              questContent: h.jn.VIDEO_MODAL,
                              questContentCTA: en
                                ? S.jZ.TRANSCRIPT_DISABLE
                                : S.jZ.TRANSCRIPT_ENABLE,
                            });
                        },
                        handleCaptionBtnClick: () => {
                          el(!ei),
                            et({
                              questId: K.id,
                              questContent: h.jn.VIDEO_MODAL,
                              questContentCTA: ei
                                ? S.jZ.CLOSED_CAPTIONING_DISABLE
                                : S.jZ.CLOSED_CAPTIONING_ENABLE,
                            });
                        },
                        handleFullScreenBtnClick: () => {
                          var e;
                          let t = !eo,
                            n = (0, f.fn)(
                              null === (e = ez.current) || void 0 === e
                                ? void 0
                                : e.parentNode,
                              ez.current,
                            );
                          t && null != n
                            ? ((0, f.Dj)(n),
                              n.addEventListener(f.NO, tl),
                              ee({
                                questId: K.id,
                                event: P.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                                properties: { video_session_id: Q },
                              }))
                            : !t &&
                              null != n &&
                              (n.removeEventListener(f.NO, tl),
                              ee({
                                questId: K.id,
                                event: P.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                                properties: { video_session_id: Q },
                              }),
                              (0, f.Pr)(n)),
                            es(t);
                        },
                        handleSeekBackBtnClick: to,
                        handleSeekForwardBtnClick: ts,
                        handleControlBarPendingInteraction: eP,
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
//# sourceMappingURL=31598a2b1606f1a7c893.js.map
