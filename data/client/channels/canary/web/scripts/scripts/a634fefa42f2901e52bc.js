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
          return A;
        },
      }),
        n(47120);
      var r = n(200651),
        i = n(192379),
        l = n(120356),
        o = n.n(l),
        s = n(752877),
        a = n(442837),
        u = n(692547),
        c = n(561779),
        d = n(481060),
        m = n(607070),
        v = n(617136),
        p = n(184299),
        E = n(818570),
        f = n(957099),
        g = n(312729),
        C = n(223418),
        S = n(604162),
        x = n(981631),
        h = n(388032),
        _ = n(451680);
      let T = "-:--",
        I = {
          [C.r.PLAYING]: {
            icon: d.PauseIcon,
            label: h.intl.string(h.t.ZcgDJS),
          },
          [C.r.PAUSED]: { icon: d.PlayIcon, label: h.intl.string(h.t.RscU7O) },
          [C.r.ENDED]: { icon: d.RetryIcon, label: h.intl.string(h.t.hsvh0t) },
        },
        D = (e, t) => {
          (0, v.dA)({
            questId: e,
            event: x.rMx.QUEST_VIDEO_VOLUME_CHANGED,
            properties: { volume_threshold: t > 0 && t < 1 ? 0.5 : t },
          });
        };
      function N(e) {
        let { current: t, duration: n } = e,
          i = null != t ? (0, S.yv)(t) : T,
          l = null != n ? (0, S.yv)(n) : T;
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
      function j(e) {
        let {
            iconComponent: t,
            animationTime: n,
            visible: i,
            ariaLabel: l,
            active: a,
            disabled: c,
            tooltipLabel: m,
            tooltipDelayMs: v = 1500,
            onClick: p,
          } = e,
          E = (e) =>
            (0, r.jsx)(d.Clickable, {
              ...e,
              onClick: p,
              className: o()(_.videoControlsBtnCont, {
                [_.videoControlsBtnContDisabled]: c,
              }),
              "aria-label": l,
              "aria-disabled": c,
              children: (0, r.jsx)(s.animated.div, {
                className: o()(_.videoControlsBtnCont),
                style: {
                  opacity: (0, s.to)(
                    [n.to({ range: [0, 1], output: [0, 1] })],
                    (e) => "".concat(i ? e : Math.pow(e, 8)),
                  ),
                },
                children: (0, r.jsx)(t, {
                  color: !0 !== c ? u.Z.colors.WHITE : u.Z.colors.TEXT_MUTED,
                  className: o()(_.controlsBarItem, {
                    [_.controlsBarItemActive]: a,
                    [_.videoControlsBtn]: !c,
                  }),
                }),
              }),
            });
        return null != m
          ? (0, r.jsx)(d.Tooltip, { text: m, delay: v, children: (e) => E(e) })
          : E();
      }
      function A(e) {
        var t, n;
        let {
            videoRef: l,
            quest: v,
            playerState: S,
            animSpring: x,
            visible: T,
            seekForwardEnabled: A,
            hideCaptionBtn: b,
            handlePlaybackBtnClick: L,
            handleTranscriptBtnClick: M,
            handleCaptionBtnClick: O,
            handleFullScreenBtnClick: k,
            handleSeekBackBtnClick: y,
            handleSeekForwardBtnClick: P,
            handleControlBarPendingInteraction: R,
          } = e,
          w = (0, p.km)((e) => e.volume),
          Z = (0, p.km)((e) => e.setVolume),
          B = (0, p.km)((e) => e.muted),
          U = (0, p.km)((e) => e.setMuted),
          F = (0, p.km)((e) => e.transcriptEnabled),
          V = (0, p.km)((e) => e.captionEnabled),
          q = (0, p.km)((e) => e.fullScreenEnabled),
          G = (0, a.e7)([m.Z], () => m.Z.useReducedMotion),
          [z, H] = i.useState(B ? 0 : w),
          [Y, Q] = i.useState(!1),
          [W, K] = i.useState(!1),
          [{ volumeAnimSpring: X }, J] = (0, d.useSpring)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
          })),
          $ = (e) => {
            if (null != l.current)
              e !== l.current.volume && (l.current.volume = e), e !== z && H(e);
          },
          ee = () => {
            Q(!0);
          },
          et = () => {
            Q(!1);
          };
        i.useEffect(
          () => (
            J({ volumeAnimSpring: W || Y ? 1 : 0, immediate: G }),
            () => {
              X.stop();
            }
          ),
          [W, Y, J, G, X],
        );
        let en =
            0 === z
              ? d.VoiceXIcon
              : z < 0.5
                ? d.VoiceLowIcon
                : d.VoiceNormalIcon,
          { icon: er, label: ei } = I[S];
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              className: _.videoControlsGroup,
              children: [
                (0, r.jsx)(j, {
                  iconComponent: er,
                  animationTime: x,
                  visible: T,
                  ariaLabel: ei,
                  tooltipLabel: ei,
                  onClick: L,
                }),
                (0, r.jsx)(j, {
                  iconComponent: f.d,
                  animationTime: x,
                  visible: T,
                  onClick: y,
                  ariaLabel: h.intl.string(h.t.r9s3Ul),
                  tooltipLabel: h.intl.string(h.t.r9s3Ul),
                }),
                (0, r.jsx)(j, {
                  iconComponent: g.o,
                  animationTime: x,
                  visible: T,
                  onClick: P,
                  disabled: !A,
                  ariaLabel: A
                    ? h.intl.string(h.t.zWDcND)
                    : h.intl.string(h.t.xXh3y8),
                  tooltipLabel: A
                    ? h.intl.string(h.t.zWDcND)
                    : h.intl.string(h.t.xXh3y8),
                  tooltipDelayMs: A ? 1500 : 0,
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
                  onMouseEnter: ee,
                  onMouseLeave: et,
                  onFocus: ee,
                  onBlur: et,
                  className: _.volumeControlGroup,
                  children: [
                    (0, r.jsx)(j, {
                      iconComponent: en,
                      animationTime: x,
                      visible: T,
                      onClick: () => {
                        if (null != l.current)
                          0 === z
                            ? ($(w), U(!1), D(v.id, w))
                            : (Z(z), $(0), U(!0), D(v.id, 0));
                      },
                      ariaLabel: h.intl.string(h.t["eIl+AA"]),
                      tooltipLabel: h.intl.string(h.t["eIl+AA"]),
                    }),
                    (0, r.jsx)(s.animated.div, {
                      className: _.volumeSlider,
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
                          $(e),
                            Z(e),
                            D(v.id, e),
                            W && (K(!1), R(!1)),
                            B && e > 0 && U(!1);
                        },
                        asValueChanges: (e) => {
                          $(e), !W && (K(!0), R(!0));
                        },
                        fillStyles: { backgroundColor: u.Z.colors.WHITE.css },
                        orientation: "horizontal",
                        "aria-label": h.intl.string(h.t["eIl+AA"]),
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)(N, {
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
                (0, r.jsx)(j, {
                  iconComponent: d.PaperIcon,
                  animationTime: x,
                  visible: T,
                  onClick: M,
                  active: F && S !== C.r.ENDED,
                  disabled: S === C.r.ENDED,
                  ariaLabel: h.intl.string(h.t.KCzjTk),
                  tooltipLabel: h.intl.string(h.t.KCzjTk),
                }),
                !b &&
                  (0, r.jsx)(j, {
                    iconComponent: E.c,
                    animationTime: x,
                    visible: T,
                    active: V,
                    onClick: O,
                    ariaLabel: h.intl.string(h.t.bDSZOz),
                    tooltipLabel: h.intl.string(h.t.bDSZOz),
                  }),
                (0, r.jsx)(j, {
                  iconComponent: q
                    ? d.FullscreenExitIcon
                    : d.FullscreenEnterIcon,
                  animationTime: x,
                  visible: T,
                  onClick: k,
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
          p =
            null !== (t = null == v ? void 0 : v.width) && void 0 !== t ? t : a,
          E =
            null !== (n = null == v ? void 0 : v.height) && void 0 !== n
              ? n
              : u;
        return (0, r.jsx)("svg", {
          ...(0, o.Z)(m),
          xmlns: "http://www.w3.org/2000/svg",
          width: p,
          height: E,
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
          p =
            null !== (n = null == m ? void 0 : m.height) && void 0 !== n
              ? n
              : u;
        return (0, r.jsxs)("svg", {
          ...(0, o.Z)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: v,
          height: p,
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
          p =
            null !== (n = null == m ? void 0 : m.height) && void 0 !== n
              ? n
              : u;
        return (0, r.jsxs)("svg", {
          ...(0, o.Z)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: v,
          height: p,
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
        p = n(569984),
        E = n(497505),
        f = n(918701),
        g = n(475595),
        C = n(566078),
        S = n(164495),
        x = n(472144),
        h = n(602667),
        _ = n(644646),
        T = n(604162),
        I = n(747717),
        D = n(963123),
        N = n(281055),
        j = n(46140),
        A = n(981631),
        b = n(388032),
        L = n(451680);
      function M(e) {
        var t;
        let {
            transitionState: n,
            onClose: l,
            quest: p,
            autoplay: M,
            videoSessionId: O,
          } = e,
          k = (0, f.il)(p),
          y = (0, s.e7)([d.Z], () => d.Z.getState().theme),
          P = (0, a.wj)(y) ? A.BRd.DARK : A.BRd.LIGHT,
          R = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
          [w, Z] = i.useState(k.progressSeconds),
          [B, U] = i.useState(!1),
          { completedRatio: F, completedRatioDisplay: V } = (0, v.I)(p),
          [q, G] = (0, T.G6)(
            b.intl.string(b.t.RDE0SU),
            b.intl.string(b.t["+5kSoa"]),
            1700,
          ),
          z =
            (null === (t = p.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) != null
              ? b.intl.string(b.t.vTgCW1)
              : b.intl.string(b.t.cfY4PD),
          H = i.useCallback(() => {
            (0, f.f2)(p.id, {
              content: E.jn.VIDEO_MODAL,
              ctaContent: m.jZ.COPY_QUEST_URL,
            }),
              G();
          }, [p.id, G]),
          Y = () => {
            (0, f.FE)(p, {
              content: E.jn.VIDEO_MODAL,
              ctaContent: m.jZ.OPEN_GAME_LINK,
            });
          },
          Q = () => {
            U(!0);
          },
          W = () => {
            U(!1);
          },
          K = i.useMemo(
            () => C.r.build(p.config).defaultReward.messages.name,
            [p],
          ),
          X = b.intl.formatToPlainString(b.t["12IWPz"], { rewardName: K });
        return (0, r.jsx)(u.ModalRoot, {
          transitionState: n,
          size: u.ModalSize.DYNAMIC,
          className: L.modalRoot,
          children: (0, r.jsx)(h.A, {
            questOrQuests: p,
            questContent: E.jn.VIDEO_MODAL,
            minViewTimeSeconds: N.zw,
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
                            onClick: Y,
                            children: [
                              (0, r.jsx)("img", {
                                alt: p.config.messages.gameTitle,
                                className: o()(
                                  L.contentHeaderLogotype,
                                  L.accentOnHover,
                                ),
                                src: (0, g.fh)(p, g.eC.LOGO_TYPE, P).url,
                              }),
                              (0, r.jsx)(I.Z, {}),
                              (0, r.jsxs)("div", {
                                className: L.questHeading,
                                children: [
                                  (0, r.jsx)(u.Heading, {
                                    variant: "heading-md/semibold",
                                    color: "header-primary",
                                    children: b.intl.format(b.t.EQa7oq, {
                                      questName: p.config.messages.questName,
                                    }),
                                  }),
                                  (0, r.jsx)(u.Text, {
                                    variant: "text-sm/medium",
                                    color: "header-secondary",
                                    children: p.config.messages.gameTitle,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsx)(u.Tooltip, {
                            position: "left",
                            text: X,
                            onTooltipShow: Q,
                            onTooltipHide: W,
                            children: (e) =>
                              (0, r.jsx)(u.Clickable, {
                                className: L.progressCont,
                                ...e,
                                children: (0, r.jsx)(x.Z, {
                                  quest: p,
                                  size: 48,
                                  percentComplete: F,
                                  percentCompleteText: B ? V : void 0,
                                  percentCompleteTextVariant: "text-sm/medium",
                                  children: (0, r.jsx)(_.Z, {
                                    className: L.questProgressRewardTile,
                                    quest: p,
                                    questContent: E.jn.VIDEO_MODAL,
                                    autoplay: !1,
                                    location: j.dr.VIDEO_MODAL,
                                  }),
                                }),
                              }),
                          }),
                        ],
                      }),
                      (0, r.jsx)(D.Z, {
                        quest: p,
                        videoSessionId: O,
                        parentTransitionState: n,
                        onOptimisticProgressUpdate: Z,
                        autoplay: M,
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
                                onClick: H,
                                size: u.Button.Sizes.MEDIUM,
                                className: L.copyLinkBtn,
                                children: q,
                              }),
                              (0, r.jsx)(S.i0, {
                                className: L.claimBtn,
                                size: u.Button.Sizes.MEDIUM,
                                quest: p,
                                useReducedMotion: R,
                                isExpanded:
                                  (null === (t = p.userStatus) || void 0 === t
                                    ? void 0
                                    : t.completedAt) != null,
                                disabled:
                                  (null === (i = p.userStatus) || void 0 === i
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
              });
            },
          }),
        });
      }
      function O(e) {
        let { questId: t, overrideQuest: n, autoplay: i, ...l } = e,
          o = (0, s.e7)([p.Z], () => p.Z.getQuest(t)),
          a = null != n ? n : o;
        return null != a
          ? (0, r.jsx)(M, { ...l, quest: a, autoplay: i })
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
      function p(e) {
        let {
            percent: t,
            animate: n,
            interactionEnabled: l,
            backgroundColor: p,
            preloadedBuffers: E,
            duration: f,
            maxSeekableTime: g,
            onClick: C,
            onScrubBack: S,
            onScrubForward: x,
          } = e,
          [h, _] = i.useState(null),
          [T, I] = i.useState(null),
          [D, N] = i.useState(null),
          [j, A] = i.useState(!1),
          b = i.useRef(null),
          L = (e) => {
            (b.current = e), _(e);
          };
        i.useEffect(() => {
          null != h && (null == g ? N(null) : N(v(g, f, h)));
        }, [h, g, f]);
        let M = (0, a.y)(() => {
          if (null != M.current) L(M.current.getBoundingClientRect());
        });
        i.useLayoutEffect(() => {
          null != M.current && L(M.current.getBoundingClientRect());
        }, [M]),
          i.useEffect(() => {
            let e = () => {
              null != M.current && L(M.current.getBoundingClientRect());
            };
            return (
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, [M]);
        let O = (e) => {
            I(e.clientX);
          },
          k = i.useCallback(
            (e) => {
              let { key: t } = e;
              t === c.mR.ArrowLeft && null != S
                ? (e.preventDefault(), e.stopPropagation(), S())
                : t === c.mR.ArrowRight &&
                  null != x &&
                  (e.preventDefault(), e.stopPropagation(), x());
            },
            [S, x],
          ),
          y = null != T && null != h ? m(T, h, f) : 0,
          P = (0, u.yv)(y),
          R = null != h ? h.right - v((t / 100) * f, f, h) : null,
          w = null != T && null != h ? h.right - T : null,
          Z = null != D && null != h ? h.right - D : null;
        return (0, r.jsxs)("div", {
          className: d.cont,
          ref: M,
          children: [
            (0, r.jsxs)(s.Clickable, {
              className: o()(d.hitboxArea, { [d.interactionEnabled]: l }),
              ignoreKeyPress: !0,
              onClick: (e) => {
                if (!!l && null != C)
                  C(m(e.clientX, e.currentTarget.getBoundingClientRect(), f));
              },
              onMouseEnter: (e) => {
                if (!!l)
                  null != M.current && L(M.current.getBoundingClientRect()),
                    A(!0),
                    O(e);
              },
              onMouseLeave: (e) => {
                if (!!l) A(!1), I(null);
              },
              onMouseMove: (e) => {
                if (!!l) j && O(e);
              },
              onKeyDown: k,
              tabIndex: l ? void 0 : -1,
              focusProps: { offset: { top: 12, bottom: 12 } },
              children: [
                null == E
                  ? void 0
                  : E.map((e) =>
                      (0, r.jsx)(
                        "div",
                        {
                          className: o()(d.buffer, { [d.bufferHovered]: j }),
                          style: {
                            width: "".concat(100 * e.size, "%"),
                            left: "".concat(100 * e.start, "%"),
                          },
                        },
                        "".concat(e.start, ":").concat(e.size),
                      ),
                    ),
                !l &&
                  null != Z &&
                  Z > 0 &&
                  (0, r.jsx)("div", {
                    className: d.seekableBar,
                    style: {
                      right: null != Z ? "".concat(Z, "px") : "auto",
                      opacity: null != Z ? 1 : 0,
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
                  null != P &&
                  (0, r.jsx)(s.Text, {
                    className: d.timeDisplay,
                    variant: "text-xs/normal",
                    style: {
                      right: null != w ? "".concat(w - 10, "px") : "auto",
                      color: "#FFFFFF",
                    },
                    children: P,
                  }),
                j &&
                  l &&
                  null != R &&
                  (0, r.jsx)("div", {
                    className: d.grabber,
                    style: { right: "".concat(R - 6, "px") },
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
      var r, i, l, o;
      n.d(t, {
        r: function () {
          return r;
        },
        y: function () {
          return i;
        },
      }),
        ((l = r || (r = {})).PLAYING = "playing"),
        (l.PAUSED = "paused"),
        (l.ENDED = "ended"),
        ((o = i || (i = {})).PAUSE_BUTTON = "PAUSE_BUTTON"),
        (o.LOST_FOCUS = "LOST_FOCUS"),
        (o.MODAL_CLOSED = "MODAL_CLOSED");
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
        s = n(752877),
        a = n(232713),
        u = n(442837),
        c = n(780384),
        d = n(481060),
        m = n(607070),
        v = n(70097),
        p = n(210887),
        E = n(866960),
        f = n(228488),
        g = n(617136),
        C = n(272008),
        S = n(497505),
        x = n(918701),
        h = n(184299),
        _ = n(720293),
        T = n(602667),
        I = n(341907),
        D = n(881773),
        N = n(355243),
        j = n(106743),
        A = n(223418),
        b = n(604162),
        L = n(747717),
        M = n(281055),
        O = n(920393),
        k = n(981631),
        y = n(217702),
        P = n(388032),
        R = n(451680);
      let w = new Set([k.IyS.FIVE_G, k.IyS.FOUR_G, k.IyS.UNKNOWN]),
        Z = { tension: 250, friction: 5, clamp: !0 };
      function B() {
        let e = (0, u.e7)([p.Z], () => p.Z.getState().theme);
        return (0, r.jsx)("div", {
          className: R.pauseText,
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
              questContent: S.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                (0, r.jsx)("img", {
                  ref: (t) => {
                    e.current = t;
                  },
                  src: l.url,
                  alt: "Video thumbnail",
                  className: o()(R.stillFrameImageCard, {
                    [R.stillFrameImageCardHidden]: !n,
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
          className: o()(R.endScreenPanel, R.accentOnHover, a),
          onMouseEnter: m,
          onMouseLeave: v,
          onFocus: m,
          onBlur: v,
          onClick: s,
          children: (0, r.jsxs)("div", {
            className: R.endScreenPanelInner,
            children: [
              (0, r.jsxs)("div", {
                className: R.endScreenPanelTextCont,
                children: [
                  (0, r.jsx)(d.Heading, {
                    variant: "heading-md/semibold",
                    className: R.endScreenPanelTextTitle,
                    children: t,
                  }),
                  (0, r.jsx)(d.Heading, {
                    variant: "heading-sm/normal",
                    className: R.endScreenPanelTextSubtitle,
                    children: n,
                  }),
                ],
              }),
              (0, r.jsx)(L.Z, { color: "#747783" }),
              (0, r.jsx)(l, {
                size: "md",
                color: u ? "#FFFFFF" : "#B5BAC1",
                className: R.endScreenIcon,
              }),
            ],
          }),
        });
      }
      function V(e) {
        var t, n, l, c, p, T, L, V, q, G, z;
        let {
            quest: H,
            videoSessionId: Y,
            onOptimisticProgressUpdate: Q,
            autoplay: W,
            parentTransitionState: K,
          } = e,
          X = (0, h.km)((e) => e.transcriptEnabled),
          J = (0, h.km)((e) => e.setTranscriptEnabled),
          $ = (0, h.km)((e) => e.captionEnabled),
          ee = (0, h.km)((e) => e.setCaptionEnabled),
          et = (0, h.km)((e) => e.fullScreenEnabled),
          en = (0, h.km)((e) => e.setFullScreenEnabled),
          { focused: er, focusedChanged: ei } = (0, M.xU)(),
          { visible: el, visibleChanged: eo, targetRef: es } = (0, M.Yy)(),
          [ea, eu] = i.useState(!0 === W ? A.r.PLAYING : A.r.PAUSED),
          [ec, ed] = i.useState(!1),
          em = (0, x.il)(H),
          [ev, ep] = i.useState(em.percentComplete),
          [eE, ef] = i.useState(!1),
          [eg, eC] = i.useState(!0),
          [eS, ex] = i.useState(!1),
          [eh, e_] = i.useState([]),
          [eT, eI] = i.useState(E.Z.getEffectiveConnectionSpeed()),
          [eD, eN] = i.useState(0),
          [ej, eA] = i.useState(0),
          [eb, eL] = i.useState(!1),
          [eM, eO] = i.useState(!1),
          ek = i.useRef(null),
          ey = i.useRef(null),
          eP = (0, i.useRef)(-1),
          eR = (0, h.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[H.id]) && void 0 !== t
              ? t
              : { timestampSec: 0, duration: 10 };
          }, a.X),
          ew = (0, h.km)((e) => e.setVideoProgress),
          eZ = (0, h.km)((e) => e.muted),
          eB = (0, h.km)((e) => e.volume),
          eU = (0, u.e7)([m.Z], () => m.Z.useReducedMotion),
          eF = (0, i.useRef)(null),
          eV = (0, i.useRef)(null),
          eq = i.useRef(!0),
          eG =
            (null === (t = H.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          ez = (0, h.km)((e) => e.transcript),
          [eH, eY] = i.useState(null),
          [eQ, eW] = i.useState(!1),
          [eK, eX] = i.useState(!1),
          [eJ, e$] = i.useState(null),
          e0 = eG
            ? null !==
                (L =
                  null === (n = eF.current) || void 0 === n
                    ? void 0
                    : n.duration) && void 0 !== L
              ? L
              : 0
            : Math.max(eR.maxTimestampSec, em.progressSeconds),
          e1 = i.useMemo(
            () =>
              w.has(eT)
                ? _.i.VIDEO_PLAYER_VIDEO
                : _.i.VIDEO_PLAYER_VIDEO_LOW_RES,
            [eT],
          ),
          e2 = i.useMemo(() => (null != e1 ? (0, _.z)(e1, H) : null), [e1, H]),
          e6 = i.useCallback(
            (e) => {
              null != eF.current &&
                (0, g.dA)({
                  questId: H.id,
                  event: k.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                  properties: {
                    ...e,
                    video_asset_id: e1,
                    quest_completed: eG,
                    video_duration_sec: eF.current.duration,
                    video_progress: (0, I.formatVideoProgressRatio)(
                      e.segment_end_sec,
                      eF.current.duration,
                    ),
                    video_session_id: Y,
                  },
                });
            },
            [H.id, e1, eG, Y],
          ),
          { forceSendCurrentSegment: e4 } = (0, O.Z)({
            videoRef: eF,
            isPlaying: ea === A.r.PLAYING,
            isMetadataLoaded: eQ,
            isInitialSeekComplete: eK,
            onAnalytics: e6,
            emitIntervalMs: 4e3,
            minSegmentDurationMs: 2e3,
          }),
          e7 = i.useCallback(
            (e) => {
              if ((eu(e), null != eF.current))
                switch (e) {
                  case A.r.PLAYING:
                    eF.current.play(),
                      (0, g.dA)({
                        questId: H.id,
                        event: k.rMx.QUEST_VIDEO_RESUMED,
                        properties: {
                          video_timestamp_seconds: eF.current.currentTime,
                          pause_reason: eH,
                          video_session_id: Y,
                        },
                      }),
                      eY(null);
                    break;
                  case A.r.PAUSED:
                    eF.current.pause(), e4();
                    break;
                  case A.r.ENDED:
                    J(!1), e4();
                }
            },
            [H.id, eH, e4, J, Y],
          );
        i.useLayoutEffect(() => {
          eq.current &&
            ((eq.current = !1),
            eI(E.Z.getEffectiveConnectionSpeed()),
            eG && eR.timestampSec >= eR.duration && ew(H.id, 0, eR.duration));
        }, []),
          i.useEffect(() => {
            null != eF.current &&
              null != eH &&
              (0, g.dA)({
                questId: H.id,
                event: k.rMx.QUEST_VIDEO_PAUSED,
                properties: {
                  video_timestamp_seconds: eF.current.currentTime,
                  reason: eH,
                  video_session_id: Y,
                },
              });
          }, [eH, H.id, Y]),
          i.useEffect(() => {
            ei &&
              null != eF.current &&
              (0, g.dA)({
                questId: H.id,
                event: er
                  ? k.rMx.QUEST_VIDEO_APP_FOCUSED
                  : k.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                properties: {
                  video_timestamp_seconds: eF.current.currentTime,
                  video_state: ea,
                  video_session_id: Y,
                },
              });
          }, [er, ei, ea, H.id, Y]);
        let e9 = i.useCallback(
          (e) => {
            var t;
            !eG &&
              (null === (t = H.userStatus) || void 0 === t
                ? void 0
                : t.enrolledAt) != null &&
              (0, x.FI)(H, e),
              null != eF.current &&
                (0, g.dA)({
                  questId: H.id,
                  event: k.rMx.QUEST_VIDEO_PROGRESSED,
                  properties: {
                    progress: (0, I.formatVideoProgressRatio)(
                      eF.current.currentTime,
                      eF.current.duration,
                    ),
                    video_timestamp_seconds: eF.current.currentTime,
                    video_session_id: Y,
                  },
                });
          },
          [H, eG, eF, Y],
        );
        i.useEffect(() => {
          (K === d.ModalTransitionState.HIDDEN ||
            K === d.ModalTransitionState.EXITING ||
            K === d.ModalTransitionState.EXITED ||
            (null != K && eo && !el && !eG) ||
            (ei && !er && !eG)) &&
            null != eF.current &&
            ea === A.r.PLAYING &&
            (e7(A.r.PAUSED), !eG && eY(A.y.LOST_FOCUS));
        }, [K, er, ei, el, eo, ea, eG, e7, e9]);
        let e8 = () => {
            ed(!0);
          },
          e3 = () => {
            ed(!1);
          },
          e5 = ec || ea === A.r.PAUSED || ea === A.r.ENDED,
          te = i.useCallback(() => {
            var e;
            let t = (0, f.fn)(
              null === (e = eF.current) || void 0 === e ? void 0 : e.parentNode,
              eF.current,
            );
            null != t &&
              !(0, f.rB)(t) &&
              (t.removeEventListener(f.NO, te),
              en(!1),
              (0, g.dA)({
                questId: H.id,
                event: k.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                properties: { video_session_id: Y },
              }));
          }, [H.id, en, Y]),
          tt = () => {
            if (null != eF.current)
              tr(Math.max(eF.current.currentTime - 10, 0)),
                ea === A.r.ENDED && e7(A.r.PAUSED),
                (0, g._3)({
                  questId: H.id,
                  questContent: S.jn.VIDEO_MODAL,
                  questContentCTA: g.jZ.SEEK_BACKWARD,
                });
          },
          tn = () => {
            if (null == eF.current || !tg) return;
            let e = Math.min(eF.current.currentTime + 10, e0);
            tr(e),
              ea !== A.r.ENDED && e >= eF.current.duration && e7(A.r.ENDED),
              (0, g._3)({
                questId: H.id,
                questContent: S.jn.VIDEO_MODAL,
                questContentCTA: g.jZ.SEEK_FORWARD,
              });
          };
        i.useEffect(() => {
          let e = eF.current;
          return () => {
            let t = (0, f.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(f.NO, te);
          };
        }, [te]);
        let tr = i.useCallback(
            (e) => {
              null != eF.current &&
                (e4(),
                ef(!0),
                eX(!1),
                (eF.current.currentTime = e),
                ew(H.id, e, eF.current.duration));
            },
            [eF, ew, H.id, e4],
          ),
          ti = () => {
            if (null != eF.current)
              switch (ea) {
                case A.r.ENDED:
                  tr(0), e7(A.r.PLAYING);
                  break;
                case A.r.PLAYING:
                  e7(A.r.PAUSED), eY(A.y.PAUSE_BUTTON);
                  break;
                default:
                  e7(A.r.PLAYING);
              }
          },
          tl = (e) => {
            e$(e);
          },
          to = (e) => {
            e$((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
          },
          ts = i.useCallback(() => {
            if (null == eF.current || 0 === eF.current.textTracks.length)
              return;
            let e = eF.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
              for (let t = 0; t < e.cues.length; t++) {
                let n = e.cues[t];
                (0, b.JC)(n) &&
                  ((n.id = "cue-".concat(t)),
                  (n.onenter = () => tl(n)),
                  (n.onexit = () => to(n)));
              }
          }, [eF]);
        i.useEffect(() => {
          if (null == eV.current) return;
          let e = eV.current;
          return (
            e.addEventListener("load", ts),
            () => {
              null != e && e.removeEventListener("load", ts);
            }
          );
        }, [eV, ts]);
        let ta = (e) => {
          if (null != eF.current && ea === A.r.PLAYING) {
            if ((eg && eC(!1), eS)) {
              let e = null != ey.current ? Date.now() - ey.current : null;
              (0, g.dA)({
                questId: H.id,
                event: k.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                properties: {
                  video_asset_id: e1,
                  network_connection_speed: eT,
                  duration: e,
                  buffer_index: eP.current,
                  video_session_id: Y,
                },
              }),
                ex(!1);
            }
            e7(A.r.PLAYING);
          }
        };
        i.useEffect(() => {
          if (!eE) return;
          let e = setTimeout(() => {
            ef(!1);
          }, 1e3);
          return () => clearTimeout(e);
        }, [eE]);
        let [{ controlBarAnimSpring: tu }, tc] = (0, d.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: Z,
            onStart: () => {
              eO(!1);
            },
            onRest: (e) => {
              1 === e.value && eO(!0);
            },
          })),
          td = (0, i.useRef)(null),
          [{ captionHeightSpring: tm }, tv] = (0, d.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: Z,
          }));
        i.useEffect(() => {
          var e, t;
          return (
            tv({
              captionHeightSpring:
                $ &&
                null != eJ &&
                null !==
                  (t =
                    null === (e = td.current) || void 0 === e
                      ? void 0
                      : e.clientHeight) &&
                void 0 !== t
                  ? t
                  : 0,
              immediate: eU,
            }),
            () => {
              tm.stop();
            }
          );
        }, [$, tv, eU, eJ, tm]),
          i.useEffect(
            () => (
              tc({ controlBarAnimSpring: e5 || eb ? 1 : 0, immediate: eU }),
              () => {
                tu.stop();
              }
            ),
            [e5, tc, eU, eb, tu],
          );
        let tp = ea === A.r.ENDED,
          tE = i.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_THUMBNAIL, H), [H]),
          tf = i.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_CAPTION, H), [H]),
          tg =
            eG ||
            eR.maxTimestampSec >=
              (null !==
                (V =
                  null === (l = eF.current) || void 0 === l
                    ? void 0
                    : l.currentTime) && void 0 !== V
                ? V
                : 0) +
                1;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(d.Clickable, {
            className: R.videoCont,
            "data-fullscreen": et,
            tabIndex: -1,
            onMouseEnter: e8,
            onMouseLeave: e3,
            onFocus: e8,
            onBlur: e3,
            children: (0, r.jsxs)("div", {
              className: R.videoContInnerRelative,
              children: [
                (0, r.jsx)(U, { quest: H, shouldShow: tp }),
                tp && (0, r.jsx)("div", { className: R.videoContOverlay }),
                (0, r.jsxs)(v.Z, {
                  ref: (e) => {
                    (eF.current = e), (es.current = e);
                  },
                  autoPlay: W,
                  playsInline: !0,
                  mediaLayoutType: et ? y.hV.STATIC : y.hV.RESPONSIVE,
                  className: o()({ [R.hidden]: tp, [R.videoInner]: !0 }),
                  controls: !1,
                  poster: null == tE ? void 0 : tE.url,
                  disablePictureInPicture: !0,
                  onTimeUpdate: (e) => {
                    null != eF.current &&
                      (eF.current.currentTime >= eD &&
                        (eN(eF.current.currentTime + 6 + 2 * Math.random()),
                        e9(eF.current.currentTime)),
                      eF.current.currentTime >= ej &&
                        (eA(eF.current.currentTime + 1),
                        (0, C.qm)(H.id, em.taskType, eF.current.currentTime),
                        Q(eF.current.currentTime)),
                      ew(H.id, eF.current.currentTime, eF.current.duration),
                      ep((eF.current.currentTime / eF.current.duration) * 100));
                  },
                  onEnded: (e) => {
                    null != eF.current &&
                      (e9(eF.current.duration + 1),
                      ew(H.id, eF.current.duration, eF.current.duration)),
                      e7(A.r.ENDED),
                      ex(!1);
                  },
                  onLoadedData: (e) => {
                    if (eg) {
                      let e =
                        null != ek.current ? Date.now() - ek.current : null;
                      (0, g.dA)({
                        questId: H.id,
                        event: k.rMx.QUEST_VIDEO_LOADING_ENDED,
                        properties: {
                          video_asset_id: e1,
                          network_connection_speed: eT,
                          duration: e,
                          video_session_id: Y,
                        },
                      }),
                        eC(!1);
                    }
                  },
                  onLoadedMetadata: (e) => {
                    if (null != eF.current)
                      eW(!0),
                        tr(
                          eG
                            ? eR.timestampSec
                            : Math.max(eR.timestampSec, em.progressSeconds),
                        ),
                        eZ ? (eF.current.volume = 0) : (eF.current.volume = eB);
                  },
                  onLoadStart: () => {
                    (ek.current = Date.now()),
                      (0, g.dA)({
                        questId: H.id,
                        event: k.rMx.QUEST_VIDEO_LOADING_STARTED,
                        properties: {
                          video_asset_id: e1,
                          network_connection_speed: eT,
                          video_session_id: Y,
                        },
                      });
                  },
                  onWaiting: (e) => {
                    (ey.current = Date.now()),
                      (eP.current += 1),
                      (0, g.dA)({
                        questId: H.id,
                        event: k.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                        properties: {
                          video_asset_id: e1,
                          network_connection_speed: eT,
                          buffer_index: eP.current,
                          video_session_id: Y,
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
                    e_(t);
                  },
                  onCanPlay: ta,
                  onCanPlayThrough: ta,
                  onSeeked: () => {
                    eX(!0);
                  },
                  onClick: () => {
                    ti();
                  },
                  crossOrigin: "anonymous",
                  children: [
                    null != tf &&
                      (0, r.jsx)("track", {
                        ref: eV,
                        src: tf.url,
                        label: "English",
                        kind: "captions",
                        srcLang: "en",
                        default: !0,
                      }),
                    null != e2 &&
                      (0, r.jsx)("source", { src: e2.url, type: e2.mimetype }),
                  ],
                }),
                (eg || eS) &&
                  ea === A.r.PLAYING &&
                  (0, r.jsx)(d.Spinner, {
                    type: d.Spinner.Type.WANDERING_CUBES,
                    className: R.loadingSpinner,
                  }),
                ea === A.r.PAUSED && eH === A.y.LOST_FOCUS && (0, r.jsx)(B, {}),
                X &&
                  ea !== A.r.ENDED &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(d.Clickable, {
                        onClick: () => J(!1),
                        tabIndex: -1,
                        children: (0, r.jsx)("div", {
                          className: R.transcriptOverlay,
                        }),
                      }),
                      (0, r.jsx)(s.animated.div, {
                        className: R.transcriptCont,
                        style: {
                          marginBottom: (0, s.to)([tu, tm], (e, t) =>
                            "".concat(50 * e + t, "px"),
                          ),
                        },
                        children: (0, r.jsx)(j.K, {
                          quest: H,
                          onClose: () => {
                            J(!1),
                              (0, g._3)({
                                questId: H.id,
                                questContent: S.jn.VIDEO_MODAL,
                                questContentCTA: g.jZ.TRANSCRIPT_DISABLE,
                              });
                          },
                        }),
                      }),
                    ],
                  }),
                ea === A.r.ENDED &&
                  (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(F, {
                      title:
                        null !==
                          (q =
                            null === (c = H.config.videoMetadata) ||
                            void 0 === c
                              ? void 0
                              : c.messages.videoEndCtaTitle) && void 0 !== q
                          ? q
                          : P.intl.string(P.t.iiTtpK),
                      subtitle:
                        null !==
                          (G =
                            null === (p = H.config.videoMetadata) ||
                            void 0 === p
                              ? void 0
                              : p.messages.videoEndCtaSubtitle) && void 0 !== G
                          ? G
                          : P.intl.string(P.t.mxaHf3),
                      icon: d.ArrowLargeRightIcon,
                      className: R.endScreenPanelRight,
                      onClick: () => {
                        (0, g._3)({
                          questId: H.id,
                          questContent: S.jn.VIDEO_MODAL,
                          questContentCTA: g.jZ.LEARN_MORE,
                        }),
                          (0, x.FE)(H, {
                            content: S.jn.VIDEO_MODAL,
                            ctaContent: g.jZ.LEARN_MORE,
                          });
                      },
                    }),
                  }),
                (0, r.jsx)(s.animated.div, {
                  className: R.videoFooterContGradient,
                  style: {
                    opacity: (0, s.to)(
                      [tu.to({ range: [0, 1], output: [0, 1] })],
                      (e) => "".concat(e),
                    ),
                  },
                }),
                (0, r.jsx)(
                  "div",
                  {
                    className: o()(R.playPausePopCont, {
                      [R.play]: ea === A.r.PLAYING,
                      [R.pause]: ea === A.r.PAUSED,
                    }),
                    children:
                      ea === A.r.PLAYING
                        ? (0, r.jsx)(d.PlayIcon, {
                            className: R.playPausePopIcon,
                          })
                        : (0, r.jsx)(d.PauseIcon, {
                            className: R.playPausePopIcon,
                          }),
                  },
                  ea,
                ),
                $ &&
                  null != eJ &&
                  (0, r.jsx)(s.animated.div, {
                    className: R.captionContainer,
                    ref: td,
                    style: {
                      translateY: (0, s.to)(
                        [tu.to({ range: [0, 1], output: [0, -50] })],
                        (e) => "".concat(e, "px"),
                      ),
                    },
                    children: (0, r.jsx)(d.Text, {
                      variant: "text-lg/semibold",
                      color: "always-white",
                      className: R.captionText,
                      children: eJ.text,
                    }),
                  }),
                (0, r.jsxs)(s.animated.div, {
                  className: R.videoFooterCont,
                  style: {
                    paddingLeft: (0, s.to)(
                      [tu.to({ range: [0, 1], output: [0, 25] })],
                      (e) => "".concat(e, "px"),
                    ),
                    paddingRight: (0, s.to)(
                      [tu.to({ range: [0, 1], output: [0, 25] })],
                      (e) => "".concat(e, "px"),
                    ),
                    height: (0, s.to)(
                      [tu.to({ range: [0, 1], output: [0, 50] })],
                      (e) => "".concat(e, "px"),
                    ),
                  },
                  children: [
                    (0, r.jsx)(N.Z, {
                      percent: ev,
                      animate: !0 !== eq.current && !eE,
                      interactionEnabled: eG && eM,
                      backgroundColor: e5 ? void 0 : "rgba(0, 0, 0, 0.0)",
                      preloadedBuffers: e5 ? eh : void 0,
                      duration:
                        null !==
                          (z =
                            null === (T = eF.current) || void 0 === T
                              ? void 0
                              : T.duration) && void 0 !== z
                          ? z
                          : 1,
                      maxSeekableTime: e5 && eM ? e0 : void 0,
                      onClick: (e) => {
                        tr(e), ea === A.r.ENDED && e7(A.r.PLAYING);
                      },
                      onScrubBack: () => {
                        tt();
                      },
                      onScrubForward: () => {
                        tn();
                      },
                    }),
                    (0, r.jsx)(s.animated.div, {
                      className: R.videoControlsCont,
                      style: {
                        paddingTop: (0, s.to)(
                          [tu.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(e * e * 12, "px"),
                        ),
                        paddingBottom: (0, s.to)(
                          [tu.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(e * e * 12, "px"),
                        ),
                        pointerEvents: (0, s.to)(
                          [tu.to({ range: [0, 1], output: [0, 1] })],
                          (e) => (e < 0.3 ? "none" : "auto"),
                        ),
                      },
                      children: (0, r.jsx)(D.Z, {
                        videoRef: eF,
                        quest: H,
                        playerState: ea,
                        animSpring: tu,
                        visible: e5,
                        seekForwardEnabled: tg,
                        hideCaptionBtn: null == tf,
                        handlePlaybackBtnClick: ti,
                        handleTranscriptBtnClick: () => {
                          !X &&
                            (null == ez ||
                              ez.questId !== H.id ||
                              ez.fetchStatus === h.iF.NONE ||
                              ez.fetchStatus === h.iF.FAILURE) &&
                            (0, C.lL)(H),
                            J(!X),
                            (0, g._3)({
                              questId: H.id,
                              questContent: S.jn.VIDEO_MODAL,
                              questContentCTA: X
                                ? g.jZ.TRANSCRIPT_DISABLE
                                : g.jZ.TRANSCRIPT_ENABLE,
                            });
                        },
                        handleCaptionBtnClick: () => {
                          ee(!$),
                            (0, g._3)({
                              questId: H.id,
                              questContent: S.jn.VIDEO_MODAL,
                              questContentCTA: $
                                ? g.jZ.CLOSED_CAPTIONING_DISABLE
                                : g.jZ.CLOSED_CAPTIONING_ENABLE,
                            });
                        },
                        handleFullScreenBtnClick: () => {
                          var e;
                          let t = !et,
                            n = (0, f.fn)(
                              null === (e = eF.current) || void 0 === e
                                ? void 0
                                : e.parentNode,
                              eF.current,
                            );
                          t && null != n
                            ? ((0, f.Dj)(n),
                              n.addEventListener(f.NO, te),
                              (0, g.dA)({
                                questId: H.id,
                                event: k.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                                properties: { video_session_id: Y },
                              }))
                            : !t &&
                              null != n &&
                              (n.removeEventListener(f.NO, te),
                              (0, g.dA)({
                                questId: H.id,
                                event: k.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                                properties: { video_session_id: Y },
                              }),
                              (0, f.Pr)(n)),
                            en(t);
                        },
                        handleSeekBackBtnClick: tt,
                        handleSeekForwardBtnClick: tn,
                        handleControlBarPendingInteraction: eL,
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
          p = (0, r.useCallback)(
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
          E = (0, r.useCallback)(() => {
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
              p({ ...u, endTime: e, segmentEndSec: n }),
                c({
                  startTime: e,
                  endTime: e,
                  segmentStartSec: n,
                  segmentEndSec: n,
                }),
                (m.current = e);
          }, [u, p, s, t, a]);
        return (
          (0, r.useEffect)(() => {
            (!i || !l) && (c(null), (v.current = !1));
          }, [i, l]),
          (0, r.useEffect)(() => {
            if (n && i && l)
              !v.current && E(),
                (d.current = window.setInterval(() => {
                  f();
                }, 200));
            else {
              if (null != u && null != t.current) {
                let e = Date.now(),
                  n = t.current.currentTime;
                n - u.segmentStartSec > 0.2 &&
                  p({ ...u, endTime: e, segmentEndSec: n });
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
          }, [n, i, l, u, f, p, t, E]),
          {
            forceSendCurrentSegment: (0, r.useCallback)(() => {
              if (null != u && null != t.current) {
                let e = Date.now(),
                  n = t.current.currentTime;
                n - u.segmentStartSec > 0.2 &&
                  p({ ...u, endTime: e, segmentEndSec: n }),
                  c(null),
                  (v.current = !1);
              }
            }, [u, p, t]),
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
//# sourceMappingURL=a634fefa42f2901e52bc.js.map
