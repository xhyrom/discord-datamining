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
        s = n(476183),
        a = n(442837),
        u = n(692547),
        c = n(561779),
        d = n(481060),
        m = n(607070),
        v = n(540059),
        E = n(617136),
        p = n(184299),
        C = n(902749),
        f = n(957099),
        S = n(312729),
        g = n(223418),
        x = n(604162),
        h = n(981631),
        _ = n(388032),
        T = n(225624);
      let N = "-:--",
        D = {
          [g.rq.PLAYING]: {
            icon: d.PauseIcon,
            label: _.intl.string(_.t.ZcgDJS),
          },
          [g.rq.PAUSED]: { icon: d.PlayIcon, label: _.intl.string(_.t.RscU7O) },
          [g.rq.ENDED]: { icon: d.RetryIcon, label: _.intl.string(_.t.hsvh0t) },
        };
      function I(e) {
        let { current: t, duration: n } = e,
          i = null != t ? (0, x.yv)(t) : N,
          l = null != n ? (0, x.yv)(n) : N;
        return (
          (i = i.padStart(l.length, "0")),
          (0, r.jsxs)("div", {
            className: o()(T.durationTimeWrapper, T.controlsBarItem),
            children: [
              (0, r.jsx)(d.Text, {
                variant: "text-xs/normal",
                className: T.durationTimeDisplay,
                children: i,
              }),
              (0, r.jsx)(d.Text, {
                variant: "text-xs/normal",
                className: T.durationTimeSeparator,
                children: "/",
              }),
              (0, r.jsx)(d.Text, {
                variant: "text-xs/normal",
                className: T.durationTimeDisplay,
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
              className: o()(T.videoControlsBtnCont, {
                [T.videoControlsBtnContDisabled]: m,
              }),
              "aria-label": a,
              "aria-disabled": m,
              innerRef: t,
              children: (0, r.jsx)(s.animated.div, {
                className: o()(T.videoControlsBtnCont),
                style: {
                  opacity: (0, s.to)(
                    [i.to({ range: [0, 1], output: [0, 1] })],
                    (e) => "".concat(l ? e : Math.pow(e, 8)),
                  ),
                },
                children: (0, r.jsx)(n, {
                  color: !0 !== m ? u.Z.colors.WHITE : u.Z.colors.TEXT_MUTED,
                  className: o()(T.controlsBarItem, {
                    [T.controlsBarItemActive]: c,
                    [T.videoControlsBtn]: !m,
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
                  className: T.videoControlsBtnTooltipKeyCombo,
                }),
            ],
          });
          return (0, r.jsx)(d.Tooltip, {
            text: e,
            "aria-label": v,
            tooltipContentClassName: T.videoControlsBtnTooltip,
            delay: E,
            children: (e) => f(e),
          });
        }
      });
      function j(e) {
        var t, n;
        let {
            videoRef: l,
            quest: x,
            playerState: N,
            animSpring: j,
            visible: b,
            seekForwardEnabled: R,
            hideCaptionBtn: L,
            handlePlaybackBtnClick: O,
            handleTranscriptBtnClick: k,
            handleCaptionBtnClick: M,
            handleFullScreenBtnClick: P,
            handleSeekBackBtnClick: y,
            handleSeekForwardBtnClick: q,
            handleControlBarPendingInteraction: w,
          } = e,
          B = (0, v.Q3)("ListSectionItem"),
          U = (0, p.km)((e) => e.volume),
          Z = (0, p.km)((e) => e.setVolume),
          F = (0, p.km)((e) => e.muted),
          V = (0, p.km)((e) => e.setMuted),
          Y = (0, p.km)((e) => e.transcriptEnabled),
          G = (0, p.km)((e) => e.captionEnabled),
          z = (0, p.km)((e) => e.fullScreenEnabled),
          H = (0, a.e7)([m.Z], () => m.Z.useReducedMotion),
          K = (0, a.e7)([m.Z], () => m.Z.keyboardModeEnabled),
          [Q, W] = i.useState(F ? 0 : U),
          [X, J] = i.useState(!1),
          [$, ee] = i.useState(!1),
          [{ volumeAnimSpring: et }, en] = (0, d.useSpring)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
          })),
          er = i.useRef(null),
          ei = (0, E._F)(),
          el = i.useCallback(
            (e) => {
              if (null != l.current)
                e !== l.current.volume && (l.current.volume = e),
                  e !== Q && W(e);
            },
            [l, Q],
          ),
          eo = i.useCallback(
            (e, t) => {
              ei({
                questId: e,
                event: h.rMx.QUEST_VIDEO_VOLUME_CHANGED,
                properties: { volume_threshold: t > 0 && t < 1 ? 0.5 : t },
              });
            },
            [ei],
          ),
          es = i.useCallback(() => {
            if (null != l.current)
              0 === Q
                ? (el(U), V(!1), eo(x.id, U))
                : (Z(Q), el(0), V(!0), eo(x.id, 0));
          }, [l, Q, el, U, V, eo, x.id, Z]),
          ea = () => {
            J(!0);
          },
          eu = () => {
            J(!1);
          },
          ec = i.useCallback(
            (e) => {
              switch (e.key) {
                case g.Y1.PLAYBACK:
                  O();
                  break;
                case g.Y1.SPACE:
                  !K && (e.preventDefault(), O());
                  break;
                case g.Y1.SEEK_BACK:
                  y();
                  break;
                case g.Y1.SEEK_FORWARD:
                  q();
                  break;
                case g.Y1.CAPTION:
                  M();
                  break;
                case g.Y1.FULLSCREEN:
                  P();
                  break;
                case g.Y1.MUTE:
                  es();
              }
            },
            [M, P, O, y, q, es, K],
          );
        i.useEffect(() => {
          null != er.current && er.current.focus();
        }, []),
          i.useEffect(
            () => (
              en({ volumeAnimSpring: $ || X ? 1 : 0, immediate: H }),
              () => {
                et.stop();
              }
            ),
            [$, X, en, H, et],
          ),
          i.useEffect(
            () => (
              window.addEventListener("keydown", ec),
              () => {
                window.removeEventListener("keydown", ec);
              }
            ),
            [ec],
          );
        let ed =
            0 === Q
              ? d.VoiceXIcon
              : Q < 0.5
                ? d.VoiceLowIcon
                : d.VoiceNormalIcon,
          { icon: em, label: ev } = D[N];
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              className: T.videoControlsGroup,
              children: [
                (0, r.jsx)(A, {
                  iconComponent: em,
                  animationTime: j,
                  visible: b,
                  ariaLabel: ev,
                  tooltipLabel: ev,
                  shortcut: g.Y1.PLAYBACK,
                  onClick: O,
                  ref: er,
                }),
                (0, r.jsx)(A, {
                  iconComponent: f.d,
                  animationTime: j,
                  visible: b,
                  onClick: y,
                  ariaLabel: _.intl.string(_.t.r9s3Ul),
                  tooltipLabel: _.intl.string(_.t.r9s3Ul),
                  shortcut: g.Y1.SEEK_BACK,
                }),
                (0, r.jsx)(A, {
                  iconComponent: S.o,
                  animationTime: j,
                  visible: b,
                  onClick: q,
                  disabled: !R,
                  ariaLabel: R
                    ? _.intl.string(_.t.zWDcND)
                    : _.intl.string(_.t.xXh3y8),
                  tooltipLabel: R
                    ? _.intl.string(_.t.zWDcND)
                    : _.intl.string(_.t.xXh3y8),
                  tooltipDelayMs: R ? 1500 : 0,
                  shortcut: g.Y1.SEEK_FORWARD,
                }),
              ],
            }),
            (0, r.jsxs)(s.animated.div, {
              className: o()(T.videoControlsGroup, T.videoControlsGroupMid),
              style: {
                opacity: (0, s.to)(
                  [j.to({ range: [0, 1], output: [0, 1] })],
                  (e) => "".concat(b ? e : Math.pow(e, 8)),
                ),
              },
              children: [
                (0, r.jsxs)("div", {
                  onMouseEnter: ea,
                  onMouseLeave: eu,
                  onFocus: ea,
                  onBlur: eu,
                  className: T.volumeControlGroup,
                  children: [
                    (0, r.jsx)(A, {
                      iconComponent: ed,
                      animationTime: j,
                      visible: b,
                      onClick: es,
                      ariaLabel: _.intl.string(_.t["eIl+AA"]),
                      tooltipLabel: _.intl.string(_.t["eIl+AA"]),
                      shortcut: g.Y1.MUTE,
                    }),
                    (0, r.jsx)(s.animated.div, {
                      className: T.volumeSlider,
                      style: {
                        opacity: (0, s.to)(
                          [et.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(b ? e : Math.pow(e, 8)),
                        ),
                        width: (0, s.to)(
                          [et.to({ range: [0, 1], output: [0, 100] })],
                          (e) => "".concat(e, "px"),
                        ),
                      },
                      children: (0, r.jsx)(c.i, {
                        mini: !0,
                        ...(B
                          ? {}
                          : {
                              barStyles: { height: "5px", top: "10px" },
                              grabberStyles: {
                                marginTop: "-5px",
                                backgroundColor: u.Z.colors.WHITE.css,
                                cursor: "pointer",
                              },
                              fillStyles: {
                                backgroundColor: u.Z.colors.WHITE.css,
                              },
                            }),
                        initialValue: Q,
                        keyboardStep: 0.1,
                        minValue: 0,
                        maxValue: 1,
                        onValueChange: (e) => {
                          el(e),
                            Z(e),
                            eo(x.id, e),
                            $ && (ee(!1), w(!1)),
                            F && e > 0 && V(!1);
                        },
                        asValueChanges: (e) => {
                          el(e), !$ && (ee(!0), w(!0));
                        },
                        fillStyles: { backgroundColor: u.Z.colors.WHITE.css },
                        orientation: "horizontal",
                        "aria-label": _.intl.string(_.t["eIl+AA"]),
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
              className: o()(T.videoControlsGroup, T.videoControlsGroupEnd),
              children: [
                (0, r.jsx)(A, {
                  iconComponent: d.PaperIcon,
                  animationTime: j,
                  visible: b,
                  onClick: k,
                  active: Y && N !== g.rq.ENDED,
                  disabled: N === g.rq.ENDED,
                  ariaLabel: _.intl.string(_.t.KCzjTk),
                  tooltipLabel: _.intl.string(_.t.KCzjTk),
                }),
                !L &&
                  (0, r.jsx)(A, {
                    iconComponent: C.c,
                    animationTime: j,
                    visible: b,
                    active: G,
                    onClick: M,
                    ariaLabel: _.intl.string(_.t.bDSZOz),
                    tooltipLabel: _.intl.string(_.t.bDSZOz),
                    shortcut: g.Y1.CAPTION,
                  }),
                (0, r.jsx)(A, {
                  iconComponent: z
                    ? d.FullscreenExitIcon
                    : d.FullscreenEnterIcon,
                  animationTime: j,
                  visible: b,
                  onClick: P,
                  ariaLabel: _.intl.string(_.t.vKZT5u),
                  tooltipLabel: _.intl.string(_.t.vKZT5u),
                  shortcut: g.Y1.FULLSCREEN,
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
        L = n(225624);
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
          [U, Z] = i.useState(P.progressSeconds),
          [F, V] = i.useState(!1),
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
                              percentCompleteText: F ? G : void 0,
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
                    onOptimisticProgressUpdate: Z,
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
        d = n(287103);
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
        a = n(225624);
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
        o = n(225624);
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
          return G;
        },
      }),
        n(47120),
        n(653041);
      var r = n(200651),
        i = n(192379),
        l = n(120356),
        o = n.n(l),
        s = n(837604),
        a = n(476183),
        u = n(232713),
        c = n(442837),
        d = n(780384),
        m = n(481060),
        v = n(493773),
        E = n(607070),
        p = n(70097),
        C = n(210887),
        f = n(866960),
        S = n(228488),
        g = n(617136),
        x = n(915750),
        h = n(272008),
        _ = n(497505),
        T = n(918701),
        N = n(184299),
        D = n(720293),
        I = n(602667),
        A = n(341907),
        j = n(881773),
        b = n(355243),
        R = n(106743),
        L = n(223418),
        O = n(604162),
        k = n(747717),
        M = n(281055),
        P = n(920393),
        y = n(981631),
        q = n(217702),
        w = n(388032),
        B = n(225624);
      let U = new Set([y.IyS.FIVE_G, y.IyS.FOUR_G, y.IyS.UNKNOWN]),
        Z = { tension: 250, friction: 5, clamp: !0 };
      function F() {
        let e = (0, c.e7)([C.Z], () => C.Z.getState().theme);
        return (0, r.jsx)("div", {
          className: B.pauseText,
          style: {
            background: (0, d.wj)(e)
              ? "rgba(0, 0, 0, 0.65)"
              : "rgba(255, 255, 255, 0.65)",
          },
          children: (0, r.jsx)(m.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            children: w.intl.string(w.t.U7Xrb2),
          }),
        });
      }
      function V(e) {
        let { quest: t, shouldShow: n } = e,
          l = i.useMemo(() => (0, D.z)(D.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
        return null == l
          ? null
          : (0, r.jsx)(I.A, {
              questOrQuests: t,
              questContent: _.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                (0, r.jsx)("img", {
                  ref: (t) => {
                    e.current = t;
                  },
                  src: l.url,
                  alt: "Video thumbnail",
                  className: o()(B.stillFrameImageCard, {
                    [B.stillFrameImageCardHidden]: !n,
                  }),
                }),
            });
      }
      function Y(e) {
        let { title: t, subtitle: n, icon: l, onClick: s, className: a } = e,
          [u, c] = i.useState(!1),
          d = () => {
            c(!0);
          },
          v = () => {
            c(!1);
          };
        return (0, r.jsx)(m.Clickable, {
          className: o()(B.endScreenPanel, B.accentOnHover, a),
          onMouseEnter: d,
          onMouseLeave: v,
          onFocus: d,
          onBlur: v,
          onClick: s,
          children: (0, r.jsxs)("div", {
            className: B.endScreenPanelInner,
            children: [
              (0, r.jsxs)("div", {
                className: B.endScreenPanelTextCont,
                children: [
                  (0, r.jsx)(m.Heading, {
                    variant: "heading-md/semibold",
                    className: B.endScreenPanelTextTitle,
                    children: t,
                  }),
                  (0, r.jsx)(m.Heading, {
                    variant: "heading-sm/normal",
                    className: B.endScreenPanelTextSubtitle,
                    children: n,
                  }),
                ],
              }),
              (0, r.jsx)(k.Z, { color: "#747783" }),
              (0, r.jsx)(l, {
                size: "md",
                color: u ? "#FFFFFF" : "#B5BAC1",
                className: B.endScreenIcon,
              }),
            ],
          }),
        });
      }
      function G(e) {
        var t, n, l, d, C, I, k, G, z, H, K;
        let {
            quest: Q,
            videoSessionId: W,
            onOptimisticProgressUpdate: X,
            autoplay: J,
            parentTransitionState: $,
          } = e,
          ee = (0, x.aM)(),
          et = (0, g._F)(),
          en = (0, g.O5)(),
          er = (0, N.km)((e) => e.transcriptEnabled),
          ei = (0, N.km)((e) => e.setTranscriptEnabled),
          el = (0, N.km)((e) => e.captionEnabled),
          eo = (0, N.km)((e) => e.setCaptionEnabled),
          es = (0, N.km)((e) => e.fullScreenEnabled),
          ea = (0, N.km)((e) => e.setFullScreenEnabled),
          { focused: eu, focusedChanged: ec } = (0, M.xU)(),
          { visible: ed, visibleChanged: em, targetRef: ev } = (0, M.Yy)(),
          [eE, ep] = i.useState(!0 === J ? L.rq.PLAYING : L.rq.PAUSED),
          [eC, ef] = i.useState(!1),
          eS = (0, T.il)(Q),
          [eg, ex] = i.useState(eS.percentComplete),
          [eh, e_] = i.useState(!1),
          [eT, eN] = i.useState(!0),
          [eD, eI] = i.useState(!1),
          [eA, ej] = i.useState([]),
          [eb, eR] = i.useState(f.Z.getEffectiveConnectionSpeed()),
          [eL, eO] = i.useState(0),
          [ek, eM] = i.useState(0),
          [eP, ey] = i.useState(!1),
          [eq, ew] = i.useState(!1),
          eB = i.useRef(null),
          eU = i.useRef(null),
          eZ = (0, i.useRef)(-1),
          eF = (0, N.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[Q.id]) && void 0 !== t
              ? t
              : { timestampSec: 0, duration: 10 };
          }, u.X),
          eV = (0, N.km)((e) => e.setVideoProgress),
          eY = (0, N.km)((e) => e.muted),
          eG = (0, N.km)((e) => e.volume),
          ez = (0, c.e7)([E.Z], () => E.Z.useReducedMotion),
          eH = (0, i.useRef)(null),
          eK = (0, i.useRef)(null),
          eQ = i.useRef(!0),
          eW =
            (null === (t = Q.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          eX = (0, N.km)((e) => e.transcript),
          [eJ, e$] = i.useState(null),
          [e0, e1] = i.useState(!1),
          [e2, e4] = i.useState(!1),
          [e6, e9] = i.useState(null),
          e7 = eW
            ? null !==
                (k =
                  null === (n = eH.current) || void 0 === n
                    ? void 0
                    : n.duration) && void 0 !== k
              ? k
              : 0
            : Math.max(eF.maxTimestampSec, eS.progressSeconds),
          e8 = i.useMemo(
            () =>
              U.has(eb)
                ? D.i.VIDEO_PLAYER_VIDEO
                : D.i.VIDEO_PLAYER_VIDEO_LOW_RES,
            [eb],
          ),
          e3 = i.useMemo(() => (null != e8 ? (0, D.z)(e8, Q) : null), [e8, Q]),
          e5 = i.useCallback(
            (e) => {
              null != eH.current &&
                et({
                  questId: Q.id,
                  event: y.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                  properties: {
                    ...e,
                    video_asset_id: e8,
                    quest_completed: eW,
                    video_duration_sec: eH.current.duration,
                    video_progress: (0, A.formatVideoProgressRatio)(
                      e.segment_end_sec,
                      eH.current.duration,
                    ),
                    video_session_id: W,
                  },
                });
            },
            [et, Q.id, e8, eW, W],
          ),
          { forceSendCurrentSegment: te } = (0, P.Z)({
            videoRef: eH,
            isPlaying: eE === L.rq.PLAYING,
            isMetadataLoaded: e0,
            isInitialSeekComplete: e2,
            onAnalytics: e5,
            emitIntervalMs: 4e3,
            minSegmentDurationMs: 2e3,
          }),
          tt = i.useCallback(
            (e) => {
              if ((ep(e), null != eH.current))
                switch (e) {
                  case L.rq.PLAYING:
                    eH.current.play(),
                      et({
                        questId: Q.id,
                        event: y.rMx.QUEST_VIDEO_RESUMED,
                        properties: {
                          video_timestamp_seconds: eH.current.currentTime,
                          pause_reason: eJ,
                          video_session_id: W,
                        },
                      }),
                      e$(null);
                    break;
                  case L.rq.PAUSED:
                    eH.current.pause(), te();
                    break;
                  case L.rq.ENDED:
                    ei(!1), te();
                }
            },
            [et, Q.id, eJ, W, te, ei],
          );
        (0, v.N)(() => {
          eQ.current &&
            ((eQ.current = !1),
            eR(f.Z.getEffectiveConnectionSpeed()),
            eW && eF.timestampSec >= eF.duration && eV(Q.id, 0, eF.duration));
        }),
          i.useEffect(() => {
            null != eH.current &&
              null != eJ &&
              et({
                questId: Q.id,
                event: y.rMx.QUEST_VIDEO_PAUSED,
                properties: {
                  video_timestamp_seconds: eH.current.currentTime,
                  reason: eJ,
                  video_session_id: W,
                },
              });
          }, [eJ, Q.id, et, W]),
          i.useEffect(() => {
            ec &&
              null != eH.current &&
              et({
                questId: Q.id,
                event: eu
                  ? y.rMx.QUEST_VIDEO_APP_FOCUSED
                  : y.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                properties: {
                  video_timestamp_seconds: eH.current.currentTime,
                  video_state: eE,
                  video_session_id: W,
                },
              });
          }, [eu, ec, eE, Q.id, et, W]);
        let tn = i.useCallback(
          (e) => {
            var t;
            !eW &&
              (null === (t = Q.userStatus) || void 0 === t
                ? void 0
                : t.enrolledAt) != null &&
              (0, T.FI)(Q, e),
              null != eH.current &&
                et({
                  questId: Q.id,
                  event: y.rMx.QUEST_VIDEO_PROGRESSED,
                  properties: {
                    progress: (0, A.formatVideoProgressRatio)(
                      eH.current.currentTime,
                      eH.current.duration,
                    ),
                    video_timestamp_seconds: eH.current.currentTime,
                    video_session_id: W,
                  },
                });
          },
          [eW, Q, et, W],
        );
        i.useEffect(() => {
          ($ === m.ModalTransitionState.HIDDEN ||
            $ === m.ModalTransitionState.EXITING ||
            $ === m.ModalTransitionState.EXITED ||
            (null != $ && em && !ed && !eW) ||
            (ec && !eu && !eW)) &&
            null != eH.current &&
            eE === L.rq.PLAYING &&
            (tt(L.rq.PAUSED), !eW && e$(L.yE.LOST_FOCUS));
        }, [$, eu, ec, ed, em, eE, eW, tt, tn]);
        let tr = () => {
            ef(!0);
          },
          ti = () => {
            ef(!1);
          },
          tl = eC || eE === L.rq.PAUSED || eE === L.rq.ENDED,
          to = i.useCallback(() => {
            var e;
            let t = (0, S.fn)(
              null === (e = eH.current) || void 0 === e ? void 0 : e.parentNode,
              eH.current,
            );
            null != t &&
              !(0, S.rB)(t) &&
              (t.removeEventListener(S.NO, to),
              ea(!1),
              et({
                questId: Q.id,
                event: y.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                properties: { video_session_id: W },
              }));
          }, [Q.id, ea, et, W]),
          ts = () => {
            if (null != eH.current)
              tu(Math.max(eH.current.currentTime - 10, 0)),
                eE === L.rq.ENDED && tt(L.rq.PAUSED),
                en({
                  questId: Q.id,
                  questContent: _.jn.VIDEO_MODAL,
                  questContentCTA: g.jZ.SEEK_BACKWARD,
                });
          },
          ta = () => {
            if (null == eH.current || !tN) return;
            let e = Math.min(eH.current.currentTime + 10, e7);
            tu(e),
              eE !== L.rq.ENDED && e >= eH.current.duration && tt(L.rq.ENDED),
              en({
                questId: Q.id,
                questContent: _.jn.VIDEO_MODAL,
                questContentCTA: g.jZ.SEEK_FORWARD,
              });
          };
        i.useEffect(() => {
          let e = eH.current;
          return () => {
            let t = (0, S.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(S.NO, to);
          };
        }, [to]);
        let tu = i.useCallback(
            (e) => {
              null != eH.current &&
                (te(),
                e_(!0),
                e4(!1),
                (eH.current.currentTime = e),
                eV(Q.id, e, eH.current.duration));
            },
            [eH, eV, Q.id, te],
          ),
          tc = () => {
            if (null != eH.current)
              switch (eE) {
                case L.rq.ENDED:
                  tu(0), tt(L.rq.PLAYING);
                  break;
                case L.rq.PLAYING:
                  tt(L.rq.PAUSED), e$(L.yE.PAUSE_BUTTON);
                  break;
                default:
                  tt(L.rq.PLAYING);
              }
          },
          td = (e) => {
            e9(e);
          },
          tm = (e) => {
            e9((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
          },
          tv = i.useCallback(() => {
            if (null == eH.current || 0 === eH.current.textTracks.length)
              return;
            let e = eH.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
              for (let t = 0; t < e.cues.length; t++) {
                let n = e.cues[t];
                (0, O.JC)(n) &&
                  ((n.id = "cue-".concat(t)),
                  (n.onenter = () => td(n)),
                  (n.onexit = () => tm(n)));
              }
          }, [eH]);
        i.useEffect(() => {
          if (null == eK.current) return;
          let e = eK.current;
          return (
            e.addEventListener("load", tv),
            () => {
              null != e && e.removeEventListener("load", tv);
            }
          );
        }, [eK, tv]);
        let tE = i.useCallback(
            (e) => {
              try {
                var t, n;
                let r =
                    null === (t = eH.current) || void 0 === t
                      ? void 0
                      : t.error,
                  i =
                    null === (n = eH.current) || void 0 === n
                      ? void 0
                      : n.networkState,
                  l =
                    null != eH.current
                      ? (0, A.formatVideoProgressRatio)(
                          eH.current.currentTime,
                          eH.current.duration,
                        )
                      : void 0;
                et({
                  questId: Q.id,
                  event: y.rMx.QUEST_VIDEO_ERROR,
                  properties: {
                    video_progress: l,
                    video_error_type: e,
                    video_asset_id: e8,
                    network_connection_speed: eb,
                    video_session_id: W,
                    video_error_code: null == r ? void 0 : r.code,
                    video_error_message: null == r ? void 0 : r.message,
                    video_network_state: i,
                  },
                });
              } catch (e) {}
            },
            [eb, Q.id, et, e8, W],
          ),
          tp = (e) => {
            if (null != eH.current && eE === L.rq.PLAYING) {
              if ((eT && eN(!1), eD)) {
                let e = null != eU.current ? Date.now() - eU.current : null;
                et({
                  questId: Q.id,
                  event: y.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                  properties: {
                    video_asset_id: e8,
                    network_connection_speed: eb,
                    duration: e,
                    buffer_index: eZ.current,
                    video_session_id: W,
                  },
                }),
                  eI(!1);
              }
              tt(L.rq.PLAYING);
            }
          };
        i.useEffect(() => {
          if (!eh) return;
          let e = setTimeout(() => {
            e_(!1);
          }, 1e3);
          return () => clearTimeout(e);
        }, [eh]);
        let [{ controlBarAnimSpring: tC }, tf] = (0, m.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: Z,
            onStart: () => {
              ew(!1);
            },
            onRest: (e) => {
              1 === e.value && ew(!0);
            },
          })),
          tS = (0, i.useRef)(null),
          [{ captionHeightSpring: tg }, tx] = (0, m.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: Z,
          }));
        i.useEffect(() => {
          var e, t;
          return (
            tx({
              captionHeightSpring:
                el &&
                null != e6 &&
                null !==
                  (t =
                    null === (e = tS.current) || void 0 === e
                      ? void 0
                      : e.clientHeight) &&
                void 0 !== t
                  ? t
                  : 0,
              immediate: ez,
            }),
            () => {
              tg.stop();
            }
          );
        }, [el, tx, ez, e6, tg]),
          i.useEffect(
            () => (
              tf({ controlBarAnimSpring: tl || eP ? 1 : 0, immediate: ez }),
              () => {
                tC.stop();
              }
            ),
            [tl, tf, ez, eP, tC],
          );
        let th = eE === L.rq.ENDED,
          t_ = i.useMemo(() => (0, D.z)(D.i.VIDEO_PLAYER_THUMBNAIL, Q), [Q]),
          tT = i.useMemo(() => (0, D.z)(D.i.VIDEO_PLAYER_CAPTION, Q), [Q]),
          tN =
            eW ||
            eF.maxTimestampSec >=
              (null !==
                (G =
                  null === (l = eH.current) || void 0 === l
                    ? void 0
                    : l.currentTime) && void 0 !== G
                ? G
                : 0) +
                1;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(m.Clickable, {
            className: B.videoCont,
            "data-fullscreen": es,
            tabIndex: -1,
            onMouseEnter: tr,
            onMouseLeave: ti,
            onFocus: tr,
            onBlur: ti,
            children: (0, r.jsxs)("div", {
              className: B.videoContInnerRelative,
              children: [
                (0, r.jsx)(V, { quest: Q, shouldShow: th }),
                th && (0, r.jsx)("div", { className: B.videoContOverlay }),
                (0, r.jsxs)(p.Z, {
                  ref: (e) => {
                    (eH.current = e), (ev.current = e);
                  },
                  autoPlay: J,
                  playsInline: !0,
                  mediaLayoutType: es ? q.hV.STATIC : q.hV.RESPONSIVE,
                  className: o()({ [B.hidden]: th, [B.videoInner]: !0 }),
                  controls: !1,
                  poster: null == t_ ? void 0 : t_.url,
                  disablePictureInPicture: !0,
                  onTimeUpdate: (e) => {
                    null != eH.current &&
                      (eH.current.currentTime >= eL &&
                        (eO(eH.current.currentTime + 6 + 2 * Math.random()),
                        tn(eH.current.currentTime)),
                      eH.current.currentTime >= ek &&
                        (eM(eH.current.currentTime + 1),
                        (0, h.qm)(Q.id, eS.taskType, eH.current.currentTime),
                        X(eH.current.currentTime)),
                      eV(Q.id, eH.current.currentTime, eH.current.duration),
                      ex((eH.current.currentTime / eH.current.duration) * 100));
                  },
                  onEnded: (e) => {
                    null != eH.current &&
                      (tn(eH.current.duration + 1),
                      eV(Q.id, eH.current.duration, eH.current.duration)),
                      tt(L.rq.ENDED),
                      eI(!1);
                  },
                  onLoadedData: (e) => {
                    if (eT) {
                      let e =
                        null != eB.current ? Date.now() - eB.current : null;
                      et({
                        questId: Q.id,
                        event: y.rMx.QUEST_VIDEO_LOADING_ENDED,
                        properties: {
                          video_asset_id: e8,
                          network_connection_speed: eb,
                          duration: e,
                          video_session_id: W,
                        },
                      }),
                        eN(!1);
                    }
                  },
                  onLoadedMetadata: (e) => {
                    if (null != eH.current)
                      e1(!0),
                        tu(
                          eW
                            ? eF.timestampSec
                            : Math.max(eF.timestampSec, eS.progressSeconds),
                        ),
                        eY ? (eH.current.volume = 0) : (eH.current.volume = eG);
                  },
                  onLoadStart: () => {
                    (eB.current = Date.now()),
                      et({
                        questId: Q.id,
                        event: y.rMx.QUEST_VIDEO_LOADING_STARTED,
                        properties: {
                          video_asset_id: e8,
                          network_connection_speed: eb,
                          video_session_id: W,
                          is_hls_supported: s.ZP.isSupported(),
                        },
                      });
                  },
                  onWaiting: (e) => {
                    (eU.current = Date.now()),
                      (eZ.current += 1),
                      et({
                        questId: Q.id,
                        event: y.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                        properties: {
                          video_asset_id: e8,
                          network_connection_speed: eb,
                          buffer_index: eZ.current,
                          video_session_id: W,
                        },
                      }),
                      eI(!0);
                  },
                  onProgress: (e) => {
                    if (null == eH.current) return;
                    let t = [];
                    for (let e = 0; e < eH.current.buffered.length; e++) {
                      let n = eH.current.buffered.start(e),
                        r = eH.current.buffered.end(e);
                      if (!(r - n < 1))
                        t.push({
                          start: n / eH.current.duration,
                          size: (r - n) / eH.current.duration,
                        });
                    }
                    ej(t);
                  },
                  onCanPlay: tp,
                  onCanPlayThrough: tp,
                  onSeeked: () => {
                    e4(!0);
                  },
                  onAbort: () => tE(L.CY.ABORT),
                  onError: () => tE(L.CY.ERROR),
                  onEmptied: () => tE(L.CY.EMPTIED),
                  onStalled: () => tE(L.CY.STALLED),
                  onSuspend: () => tE(L.CY.SUSPEND),
                  onClick: () => {
                    tc();
                  },
                  crossOrigin: "anonymous",
                  children: [
                    null != tT &&
                      (0, r.jsx)("track", {
                        ref: eK,
                        src: tT.url,
                        label: "English",
                        kind: "captions",
                        srcLang: "en",
                        default: !0,
                      }),
                    null != e3 &&
                      (0, r.jsx)("source", {
                        onError: () => tE(L.CY.SOURCE_ERROR),
                        src: e3.url,
                        type: e3.mimetype,
                      }),
                  ],
                }),
                (eT || eD) &&
                  eE === L.rq.PLAYING &&
                  (0, r.jsx)(m.Spinner, {
                    type: m.Spinner.Type.WANDERING_CUBES,
                    className: B.loadingSpinner,
                  }),
                eE === L.rq.PAUSED &&
                  eJ === L.yE.LOST_FOCUS &&
                  (0, r.jsx)(F, {}),
                er &&
                  eE !== L.rq.ENDED &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(m.Clickable, {
                        onClick: () => ei(!1),
                        tabIndex: -1,
                        children: (0, r.jsx)("div", {
                          className: B.transcriptOverlay,
                        }),
                      }),
                      (0, r.jsx)(a.animated.div, {
                        className: B.transcriptCont,
                        style: {
                          marginBottom: (0, a.to)([tC, tg], (e, t) =>
                            "".concat(50 * e + t, "px"),
                          ),
                        },
                        children: (0, r.jsx)(R.K, {
                          quest: Q,
                          onClose: () => {
                            ei(!1),
                              en({
                                questId: Q.id,
                                questContent: _.jn.VIDEO_MODAL,
                                questContentCTA: g.jZ.TRANSCRIPT_DISABLE,
                              });
                          },
                        }),
                      }),
                    ],
                  }),
                eE === L.rq.ENDED &&
                  (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(Y, {
                      title:
                        null !==
                          (z =
                            null === (d = Q.config.videoMetadata) ||
                            void 0 === d
                              ? void 0
                              : d.messages.videoEndCtaTitle) && void 0 !== z
                          ? z
                          : w.intl.string(w.t.iiTtpK),
                      subtitle:
                        null !==
                          (H =
                            null === (C = Q.config.videoMetadata) ||
                            void 0 === C
                              ? void 0
                              : C.messages.videoEndCtaSubtitle) && void 0 !== H
                          ? H
                          : w.intl.string(w.t.mxaHf3),
                      icon: m.ArrowLargeRightIcon,
                      className: B.endScreenPanelRight,
                      onClick: () => {
                        en({
                          questId: Q.id,
                          questContent: _.jn.VIDEO_MODAL,
                          questContentCTA: g.jZ.LEARN_MORE,
                        }),
                          (0, T.FE)(Q, {
                            content: _.jn.VIDEO_MODAL,
                            ctaContent: g.jZ.LEARN_MORE,
                            impressionId: ee,
                          });
                      },
                    }),
                  }),
                (0, r.jsx)(a.animated.div, {
                  className: B.videoFooterContGradient,
                  style: {
                    opacity: (0, a.to)(
                      [tC.to({ range: [0, 1], output: [0, 1] })],
                      (e) => "".concat(e),
                    ),
                  },
                }),
                (0, r.jsx)(
                  "div",
                  {
                    className: o()(B.playPausePopCont, {
                      [B.play]: eE === L.rq.PLAYING,
                      [B.pause]: eE === L.rq.PAUSED,
                    }),
                    children:
                      eE === L.rq.PLAYING
                        ? (0, r.jsx)(m.PlayIcon, {
                            className: B.playPausePopIcon,
                          })
                        : (0, r.jsx)(m.PauseIcon, {
                            className: B.playPausePopIcon,
                          }),
                  },
                  eE,
                ),
                el &&
                  null != e6 &&
                  (0, r.jsx)(a.animated.div, {
                    className: B.captionContainer,
                    ref: tS,
                    style: {
                      translateY: (0, a.to)(
                        [tC.to({ range: [0, 1], output: [0, -50] })],
                        (e) => "".concat(e, "px"),
                      ),
                    },
                    children: (0, r.jsx)(m.Text, {
                      variant: "text-lg/semibold",
                      color: "always-white",
                      className: B.captionText,
                      children: e6.text,
                    }),
                  }),
                (0, r.jsxs)(a.animated.div, {
                  className: B.videoFooterCont,
                  style: {
                    paddingLeft: (0, a.to)(
                      [tC.to({ range: [0, 1], output: [0, 25] })],
                      (e) => "".concat(e, "px"),
                    ),
                    paddingRight: (0, a.to)(
                      [tC.to({ range: [0, 1], output: [0, 25] })],
                      (e) => "".concat(e, "px"),
                    ),
                    height: (0, a.to)(
                      [tC.to({ range: [0, 1], output: [0, 50] })],
                      (e) => "".concat(e, "px"),
                    ),
                  },
                  children: [
                    (0, r.jsx)(b.Z, {
                      percent: eg,
                      animate: !0 !== eQ.current && !eh,
                      interactionEnabled: eW && eq,
                      backgroundColor: tl ? void 0 : "rgba(0, 0, 0, 0.0)",
                      preloadedBuffers: tl ? eA : void 0,
                      duration:
                        null !==
                          (K =
                            null === (I = eH.current) || void 0 === I
                              ? void 0
                              : I.duration) && void 0 !== K
                          ? K
                          : 1,
                      maxSeekableTime: tl && eq ? e7 : void 0,
                      onClick: (e) => {
                        tu(e), eE === L.rq.ENDED && tt(L.rq.PLAYING);
                      },
                      onScrubBack: () => {
                        ts();
                      },
                      onScrubForward: () => {
                        ta();
                      },
                    }),
                    (0, r.jsx)(a.animated.div, {
                      className: B.videoControlsCont,
                      style: {
                        paddingTop: (0, a.to)(
                          [tC.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(e * e * 12, "px"),
                        ),
                        paddingBottom: (0, a.to)(
                          [tC.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(e * e * 12, "px"),
                        ),
                        pointerEvents: (0, a.to)(
                          [tC.to({ range: [0, 1], output: [0, 1] })],
                          (e) => (e < 0.3 ? "none" : "auto"),
                        ),
                      },
                      children: (0, r.jsx)(j.Z, {
                        videoRef: eH,
                        quest: Q,
                        playerState: eE,
                        animSpring: tC,
                        visible: tl,
                        seekForwardEnabled: tN,
                        hideCaptionBtn: null == tT,
                        handlePlaybackBtnClick: tc,
                        handleTranscriptBtnClick: () => {
                          !er &&
                            (null == eX ||
                              eX.questId !== Q.id ||
                              eX.fetchStatus === N.iF.NONE ||
                              eX.fetchStatus === N.iF.FAILURE) &&
                            (0, h.lL)(Q),
                            ei(!er),
                            en({
                              questId: Q.id,
                              questContent: _.jn.VIDEO_MODAL,
                              questContentCTA: er
                                ? g.jZ.TRANSCRIPT_DISABLE
                                : g.jZ.TRANSCRIPT_ENABLE,
                            });
                        },
                        handleCaptionBtnClick: () => {
                          eo(!el),
                            en({
                              questId: Q.id,
                              questContent: _.jn.VIDEO_MODAL,
                              questContentCTA: el
                                ? g.jZ.CLOSED_CAPTIONING_DISABLE
                                : g.jZ.CLOSED_CAPTIONING_ENABLE,
                            });
                        },
                        handleFullScreenBtnClick: () => {
                          var e;
                          let t = !es,
                            n = (0, S.fn)(
                              null === (e = eH.current) || void 0 === e
                                ? void 0
                                : e.parentNode,
                              eH.current,
                            );
                          t && null != n
                            ? ((0, S.Dj)(n),
                              n.addEventListener(S.NO, to),
                              et({
                                questId: Q.id,
                                event: y.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                                properties: { video_session_id: W },
                              }))
                            : !t &&
                              null != n &&
                              (n.removeEventListener(S.NO, to),
                              et({
                                questId: Q.id,
                                event: y.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                                properties: { video_session_id: W },
                              }),
                              (0, S.Pr)(n)),
                            ea(t);
                        },
                        handleSeekBackBtnClick: ts,
                        handleSeekForwardBtnClick: ta,
                        handleControlBarPendingInteraction: ey,
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
//# sourceMappingURL=098943ec9a23e7d8d67b.js.map
