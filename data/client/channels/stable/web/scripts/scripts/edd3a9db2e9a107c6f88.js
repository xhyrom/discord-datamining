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
    208109: function (e, t, n) {
      n.d(t, {
        e: function () {
          return i;
        },
      });
      let r = (0, n(818083).B)({
          id: "2025-01_video_quests_end_card_cta_v2",
          kind: "user",
          label: "Video Quests End Card CTA V2",
          defaultConfig: { enabled: !1 },
          treatments: [
            { id: 0, label: "Control", config: { enabled: !1 } },
            { id: 1, label: "Enabled", config: { enabled: !0 } },
          ],
        }),
        i = (e) => {
          let { location: t } = e;
          return r.getCurrentConfig({ location: t }, { autoTrackExposure: !0 })
            .enabled;
        };
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
        s = n(476183),
        a = n(442837),
        u = n(692547),
        c = n(561779),
        d = n(481060),
        m = n(607070),
        v = n(540059),
        E = n(617136),
        C = n(184299),
        p = n(902749),
        f = n(957099),
        S = n(312729),
        g = n(223418),
        x = n(604162),
        h = n(981631),
        _ = n(388032),
        T = n(451680);
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
      let j = i.forwardRef(function (e, t) {
        let {
            iconComponent: n,
            animationTime: i,
            visible: l,
            ariaLabel: a,
            active: c,
            disabled: m,
            tooltipLabel: v,
            tooltipDelayMs: E = 1500,
            shortcut: C,
            onClick: p,
          } = e,
          f = (e) =>
            (0, r.jsx)(d.Clickable, {
              ...e,
              onClick: !0 === m ? void 0 : p,
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
              "" !== (null != C ? C : "").trim() &&
                (0, r.jsx)(d.KeyCombo, {
                  shortcut: null != C ? C : "",
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
      function A(e) {
        var t, n;
        let {
            videoRef: l,
            quest: x,
            playerState: N,
            animSpring: A,
            visible: b,
            seekForwardEnabled: L,
            hideCaptionBtn: R,
            handlePlaybackBtnClick: O,
            handleTranscriptBtnClick: k,
            handleCaptionBtnClick: M,
            handleFullScreenBtnClick: P,
            handleSeekBackBtnClick: y,
            handleSeekForwardBtnClick: q,
            handleControlBarPendingInteraction: B,
          } = e,
          w = (0, v.Q3)("ListSectionItem"),
          U = (0, C.km)((e) => e.volume),
          Z = (0, C.km)((e) => e.setVolume),
          F = (0, C.km)((e) => e.muted),
          V = (0, C.km)((e) => e.setMuted),
          Y = (0, C.km)((e) => e.transcriptEnabled),
          G = (0, C.km)((e) => e.captionEnabled),
          z = (0, C.km)((e) => e.fullScreenEnabled),
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
                (0, r.jsx)(j, {
                  iconComponent: em,
                  animationTime: A,
                  visible: b,
                  ariaLabel: ev,
                  tooltipLabel: ev,
                  shortcut: g.Y1.PLAYBACK,
                  onClick: O,
                  ref: er,
                }),
                (0, r.jsx)(j, {
                  iconComponent: f.d,
                  animationTime: A,
                  visible: b,
                  onClick: y,
                  ariaLabel: _.intl.string(_.t.r9s3Ul),
                  tooltipLabel: _.intl.string(_.t.r9s3Ul),
                  shortcut: g.Y1.SEEK_BACK,
                }),
                (0, r.jsx)(j, {
                  iconComponent: S.o,
                  animationTime: A,
                  visible: b,
                  onClick: q,
                  disabled: !L,
                  ariaLabel: L
                    ? _.intl.string(_.t.zWDcND)
                    : _.intl.string(_.t.xXh3y8),
                  tooltipLabel: L
                    ? _.intl.string(_.t.zWDcND)
                    : _.intl.string(_.t.xXh3y8),
                  tooltipDelayMs: L ? 1500 : 0,
                  shortcut: g.Y1.SEEK_FORWARD,
                }),
              ],
            }),
            (0, r.jsxs)(s.animated.div, {
              className: o()(T.videoControlsGroup, T.videoControlsGroupMid),
              style: {
                opacity: (0, s.to)(
                  [A.to({ range: [0, 1], output: [0, 1] })],
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
                    (0, r.jsx)(j, {
                      iconComponent: ed,
                      animationTime: A,
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
                        ...(w
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
                            $ && (ee(!1), B(!1)),
                            F && e > 0 && V(!1);
                        },
                        asValueChanges: (e) => {
                          el(e), !$ && (ee(!0), B(!0));
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
                (0, r.jsx)(j, {
                  iconComponent: d.PaperIcon,
                  animationTime: A,
                  visible: b,
                  onClick: k,
                  active: Y && N !== g.rq.ENDED,
                  disabled: N === g.rq.ENDED,
                  ariaLabel: _.intl.string(_.t.KCzjTk),
                  tooltipLabel: _.intl.string(_.t.KCzjTk),
                }),
                !R &&
                  (0, r.jsx)(j, {
                    iconComponent: p.c,
                    animationTime: A,
                    visible: b,
                    active: G,
                    onClick: M,
                    ariaLabel: _.intl.string(_.t.bDSZOz),
                    tooltipLabel: _.intl.string(_.t.bDSZOz),
                    shortcut: g.Y1.CAPTION,
                  }),
                (0, r.jsx)(j, {
                  iconComponent: z
                    ? d.FullscreenExitIcon
                    : d.FullscreenEnterIcon,
                  animationTime: A,
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
    350312: function (e, t, n) {
      n(47120);
      var r = n(200651),
        i = n(192379),
        l = n(120356),
        o = n.n(l),
        s = n(481060),
        a = n(497505),
        u = n(720293),
        c = n(602667),
        d = n(835153);
      function m(e) {
        let { asset: t } = e;
        return null == t
          ? null
          : (0, r.jsx)("img", {
              src: t.url,
              alt: "",
              className: d.endScreenImageBackground,
            });
      }
      function v(e) {
        let { quest: t, asset: n } = e;
        return null == n
          ? null
          : (0, r.jsx)(c.A, {
              questOrQuests: t,
              questContent: a.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                (0, r.jsx)("img", {
                  ref: (t) => {
                    e.current = t;
                  },
                  src: n.url,
                  alt: "Video thumbnail",
                  className: d.endScreenCard,
                }),
            });
      }
      function E(e) {
        let { ctaBtnLabel: t, title: n, subtitle: i, onCTAClick: l } = e;
        return (0, r.jsxs)("div", {
          className: d.endScreenCtaContainer,
          children: [
            (0, r.jsx)(C, { title: n, subtitle: i }),
            (0, r.jsx)(p, {
              label: t,
              icon: s.ArrowLargeRightIcon,
              onClick: l,
            }),
          ],
        });
      }
      function C(e) {
        let { title: t, subtitle: n } = e,
          i = "" !== (null != t ? t : "").trim(),
          l = "" !== (null != n ? n : "").trim();
        return i || l
          ? (0, r.jsxs)("div", {
              className: d.endScreenCtaTitleContainer,
              children: [
                i &&
                  (0, r.jsx)(s.Heading, {
                    variant: "heading-md/semibold",
                    className: d.endScreenCtaTitle,
                    children: t,
                  }),
                l &&
                  (0, r.jsx)(s.Heading, {
                    variant: "heading-sm/normal",
                    className: d.endScreenCtaSubtitle,
                    children: n,
                  }),
              ],
            })
          : null;
      }
      function p(e) {
        let { label: t, icon: n, onClick: l, className: a } = e,
          [u, c] = i.useState(!1),
          m = () => {
            c(!0);
          },
          v = () => {
            c(!1);
          };
        return (0, r.jsxs)(s.Clickable, {
          className: o()(d.endScreenCtaBtn, d.accentOnHover, a),
          onMouseEnter: m,
          onMouseLeave: v,
          onFocus: m,
          onBlur: v,
          onClick: l,
          children: [
            (0, r.jsx)(s.Heading, {
              variant: "heading-md/semibold",
              className: d.endScreenCtaBtnTitle,
              children: t,
            }),
            (0, r.jsx)(n, {
              size: "md",
              color: u ? s.tokens.colors.WHITE : "#B5BAC1",
              className: d.endScreenIcon,
            }),
          ],
        });
      }
      t.Z = function (e) {
        let {
            quest: t,
            ctaBtnLabel: n,
            title: l,
            subtitle: o,
            onCTAClick: s,
          } = e,
          a = i.useMemo(() => (0, u.z)(u.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(m, { asset: a }),
            (0, r.jsx)("div", { className: d.endScreenOverlay }),
            (0, r.jsxs)("div", {
              className: d.endScreenContainer,
              children: [
                (0, r.jsx)(v, { quest: t, asset: a }),
                (0, r.jsx)(E, {
                  title: l,
                  subtitle: o,
                  ctaBtnLabel: n,
                  onCTAClick: s,
                }),
              ],
            }),
          ],
        });
      };
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
          C =
            null !== (n = null == v ? void 0 : v.height) && void 0 !== n
              ? n
              : u;
        return (0, r.jsx)("svg", {
          ...(0, o.Z)(m),
          xmlns: "http://www.w3.org/2000/svg",
          width: E,
          height: C,
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
        C = n(569984),
        p = n(497505),
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
        j = n(281055),
        A = n(46140),
        b = n(981631),
        L = n(388032),
        R = n(451680);
      function O(e) {
        var t, n, l;
        let {
            transitionState: C,
            onClose: _,
            quest: j,
            autoplay: O,
            videoSessionId: k,
            impressionRef: M,
          } = e,
          P = (0, f.il)(j),
          y = (0, s.e7)([d.Z], () => d.Z.getState().theme),
          q = (0, a.wj)(y) ? b.BRd.DARK : b.BRd.LIGHT,
          B = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
          w = (0, v.aM)(),
          [U, Z] = i.useState(P.progressSeconds),
          [F, V] = i.useState(!1),
          { completedRatio: Y, completedRatioDisplay: G } = (0, E.I)(j),
          [z, H] = (0, N.G6)(
            L.intl.string(L.t.RDE0SU),
            L.intl.string(L.t["+5kSoa"]),
            1700,
          ),
          K =
            (null === (t = j.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) != null
              ? L.intl.string(L.t.vTgCW1)
              : L.intl.string(L.t.cfY4PD),
          Q = i.useCallback(() => {
            (0, f.f2)(j.id, {
              content: p.jn.VIDEO_MODAL,
              ctaContent: m.jZ.COPY_QUEST_URL,
              impressionId: w,
            }),
              H();
          }, [w, j.id, H]),
          W = i.useMemo(
            () => g.r.build(j.config).defaultReward.messages.name,
            [j],
          ),
          X = L.intl.formatToPlainString(L.t["12IWPz"], { rewardName: W });
        return (0, r.jsx)(u.ModalRoot, {
          transitionState: C,
          size: u.ModalSize.DYNAMIC,
          className: R.modalRoot,
          children: (0, r.jsx)("div", {
            ref: (e) => {
              M.current = e;
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
                        onClick: () => {
                          (0, f.FE)(j, {
                            content: p.jn.VIDEO_MODAL,
                            ctaContent: m.jZ.OPEN_GAME_LINK,
                            impressionId: w,
                          });
                        },
                        children: [
                          (0, r.jsx)("img", {
                            alt: j.config.messages.gameTitle,
                            className: o()(
                              R.contentHeaderLogotype,
                              R.accentOnHover,
                            ),
                            src: (0, S.fh)(j, S.eC.LOGO_TYPE, q).url,
                          }),
                          (0, r.jsx)(D.Z, {}),
                          (0, r.jsxs)("div", {
                            className: R.questHeading,
                            children: [
                              (0, r.jsx)(u.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: L.intl.format(L.t.EQa7oq, {
                                  questName: j.config.messages.questName,
                                }),
                              }),
                              (0, r.jsx)(u.Text, {
                                variant: "text-sm/medium",
                                color: "header-secondary",
                                children: j.config.messages.gameTitle,
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
                            className: R.progressCont,
                            ...e,
                            children: (0, r.jsx)(h.Z, {
                              quest: j,
                              size: 48,
                              percentComplete: Y,
                              percentCompleteText: F ? G : void 0,
                              percentCompleteTextVariant: "text-sm/medium",
                              children: (0, r.jsx)(T.Z, {
                                className: R.questProgressRewardTile,
                                quest: j,
                                questContent: p.jn.VIDEO_MODAL,
                                autoplay: !1,
                                location: A.dr.VIDEO_MODAL,
                              }),
                            }),
                          }),
                      }),
                    ],
                  }),
                  (0, r.jsx)(I.Z, {
                    quest: j,
                    videoSessionId: k,
                    parentTransitionState: C,
                    onOptimisticProgressUpdate: Z,
                    autoplay: O,
                  }),
                  (0, r.jsxs)("div", {
                    className: R.contentFooter,
                    children: [
                      (0, r.jsx)(u.Button, {
                        onClick: _,
                        color: u.Button.Colors.PRIMARY,
                        size: u.Button.Sizes.MEDIUM,
                        children: L.intl.string(L.t.cpT0Cg),
                      }),
                      (0, r.jsxs)("div", {
                        className: R.contentFooterButtonCont,
                        children: [
                          (0, r.jsx)(u.Button, {
                            color: u.Button.Colors.PRIMARY,
                            onClick: Q,
                            size: u.Button.Sizes.NONE,
                            className: R.copyLinkBtn,
                            children: z,
                          }),
                          (0, r.jsx)(x.i0, {
                            className: R.claimBtn,
                            size: u.Button.Sizes.MEDIUM,
                            quest: j,
                            useReducedMotion: B,
                            isExpanded:
                              (null === (n = j.userStatus) || void 0 === n
                                ? void 0
                                : n.completedAt) != null,
                            disabled:
                              (null === (l = j.userStatus) || void 0 === l
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
          o = (0, s.e7)([C.Z], () => C.Z.getQuest(t)),
          a = null != n ? n : o;
        return null != a
          ? (0, r.jsx)(_.A, {
              questOrQuests: a,
              questContent: p.jn.VIDEO_MODAL,
              minViewTimeSeconds: j.zw,
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
            preloadedBuffers: C,
            duration: p,
            maxSeekableTime: f,
            onClick: S,
            onScrubBack: g,
            onScrubForward: x,
          } = e,
          [h, _] = i.useState(null),
          [T, N] = i.useState(null),
          [D, I] = i.useState(null),
          [j, A] = i.useState(!1),
          b = i.useRef(null),
          L = (e) => {
            (b.current = e), _(e);
          };
        i.useEffect(() => {
          null != h && (null == f ? I(null) : I(v(f, p, h)));
        }, [h, f, p]);
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
          M = null != T && null != h ? m(T, h, p) : 0,
          P = (0, u.yv)(M),
          y = null != h ? h.right - v((t / 100) * p, p, h) : null,
          q = null != T && null != h ? h.right - T : null,
          B = null != D && null != h ? h.right - D : null;
        return (0, r.jsxs)("div", {
          className: d.cont,
          ref: R,
          children: [
            (0, r.jsxs)(s.Clickable, {
              className: o()(d.hitboxArea, { [d.interactionEnabled]: l }),
              ignoreKeyPress: !0,
              onClick: (e) => {
                if (!!l && null != S)
                  S(m(e.clientX, e.currentTarget.getBoundingClientRect(), p));
              },
              onMouseEnter: (e) => {
                if (!!l)
                  null != R.current && L(R.current.getBoundingClientRect()),
                    A(!0),
                    O(e);
              },
              onMouseLeave: (e) => {
                if (!!l) A(!1), N(null);
              },
              onMouseMove: (e) => {
                if (!!l) j && O(e);
              },
              onKeyDown: k,
              tabIndex: l ? void 0 : -1,
              focusProps: { offset: { top: 12, bottom: 12 } },
              children: [
                null == C
                  ? void 0
                  : C.map((e) =>
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
                  null != B &&
                  B > 0 &&
                  (0, r.jsx)("div", {
                    className: d.seekableBar,
                    style: {
                      right: null != B ? "".concat(B, "px") : "auto",
                      opacity: null != B ? 1 : 0,
                    },
                  }),
                (0, r.jsx)(s.Progress, {
                  className: d.progress,
                  percent: t,
                  foregroundColor: "#FFFFFF",
                  backgroundColor: null != E ? E : void 0,
                  size: j ? s.Progress.Sizes.XSMALL : s.Progress.Sizes.XXSMALL,
                  animate: n,
                }),
                j &&
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
                j &&
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
          return K;
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
        C = n(70097),
        p = n(210887),
        f = n(866960),
        S = n(228488),
        g = n(617136),
        x = n(915750),
        h = n(272008),
        _ = n(497505),
        T = n(918701),
        N = n(184299),
        D = n(208109),
        I = n(720293),
        j = n(602667),
        A = n(341907),
        b = n(881773),
        L = n(350312),
        R = n(355243),
        O = n(106743),
        k = n(223418),
        M = n(604162),
        P = n(747717),
        y = n(281055),
        q = n(920393),
        B = n(46140),
        w = n(981631),
        U = n(217702),
        Z = n(388032),
        F = n(451680);
      let V = new Set([w.IyS.FIVE_G, w.IyS.FOUR_G, w.IyS.UNKNOWN]),
        Y = { tension: 250, friction: 5, clamp: !0 };
      function G() {
        let e = (0, c.e7)([p.Z], () => p.Z.getState().theme);
        return (0, r.jsx)("div", {
          className: F.pauseText,
          style: {
            background: (0, d.wj)(e)
              ? "rgba(0, 0, 0, 0.65)"
              : "rgba(255, 255, 255, 0.65)",
          },
          children: (0, r.jsx)(m.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            children: Z.intl.string(Z.t.U7Xrb2),
          }),
        });
      }
      function z(e) {
        let { quest: t, shouldShow: n } = e,
          l = i.useMemo(() => (0, I.z)(I.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
        return null == l
          ? null
          : (0, r.jsx)(j.A, {
              questOrQuests: t,
              questContent: _.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                (0, r.jsx)("img", {
                  ref: (t) => {
                    e.current = t;
                  },
                  src: l.url,
                  alt: "Video thumbnail",
                  className: o()(F.stillFrameImageCard, {
                    [F.stillFrameImageCardHidden]: !n,
                  }),
                }),
            });
      }
      function H(e) {
        let { title: t, subtitle: n, icon: l, onClick: s, className: a } = e,
          [u, c] = i.useState(!1),
          d = () => {
            c(!0);
          },
          v = () => {
            c(!1);
          };
        return (0, r.jsx)(m.Clickable, {
          className: o()(F.endScreenPanel, F.accentOnHover, a),
          onMouseEnter: d,
          onMouseLeave: v,
          onFocus: d,
          onBlur: v,
          onClick: s,
          children: (0, r.jsxs)("div", {
            className: F.endScreenPanelInner,
            children: [
              (0, r.jsxs)("div", {
                className: F.endScreenPanelTextCont,
                children: [
                  (0, r.jsx)(m.Heading, {
                    variant: "heading-md/semibold",
                    className: F.endScreenPanelTextTitle,
                    children: t,
                  }),
                  (0, r.jsx)(m.Heading, {
                    variant: "heading-sm/normal",
                    className: F.endScreenPanelTextSubtitle,
                    children: n,
                  }),
                ],
              }),
              (0, r.jsx)(P.Z, { color: "#747783" }),
              (0, r.jsx)(l, {
                size: "md",
                color: u ? "#FFFFFF" : "#B5BAC1",
                className: F.endScreenIcon,
              }),
            ],
          }),
        });
      }
      function K(e) {
        var t, n, l, d, p, j, P, K, Q, W, X, J, $, ee, et;
        let {
            quest: en,
            videoSessionId: er,
            onOptimisticProgressUpdate: ei,
            autoplay: el,
            parentTransitionState: eo,
          } = e,
          es = (0, x.aM)(),
          ea = (0, g._F)(),
          eu = (0, g.O5)(),
          ec = (0, N.km)((e) => e.transcriptEnabled),
          ed = (0, N.km)((e) => e.setTranscriptEnabled),
          em = (0, N.km)((e) => e.captionEnabled),
          ev = (0, N.km)((e) => e.setCaptionEnabled),
          eE = (0, N.km)((e) => e.fullScreenEnabled),
          eC = (0, N.km)((e) => e.setFullScreenEnabled),
          { focused: ep, focusedChanged: ef } = (0, y.xU)(),
          { visible: eS, visibleChanged: eg, targetRef: ex } = (0, y.Yy)(),
          [eh, e_] = i.useState(!0 === el ? k.rq.PLAYING : k.rq.PAUSED),
          [eT, eN] = i.useState(!1),
          eD = (0, T.il)(en),
          [eI, ej] = i.useState(eD.percentComplete),
          [eA, eb] = i.useState(!1),
          [eL, eR] = i.useState(!0),
          [eO, ek] = i.useState(!1),
          [eM, eP] = i.useState([]),
          [ey, eq] = i.useState(f.Z.getEffectiveConnectionSpeed()),
          [eB, ew] = i.useState(0),
          [eU, eZ] = i.useState(0),
          [eF, eV] = i.useState(!1),
          [eY, eG] = i.useState(!1),
          ez = i.useRef(null),
          eH = i.useRef(null),
          eK = (0, i.useRef)(-1),
          eQ = (0, N.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[en.id]) && void 0 !== t
              ? t
              : { timestampSec: 0, duration: 10 };
          }, u.X),
          eW = (0, N.km)((e) => e.setVideoProgress),
          eX = (0, N.km)((e) => e.muted),
          eJ = (0, N.km)((e) => e.volume),
          e$ = (0, c.e7)([E.Z], () => E.Z.useReducedMotion),
          e0 = (0, i.useRef)(null),
          e1 = (0, i.useRef)(null),
          e2 = i.useRef(!0),
          e4 =
            (null === (t = en.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          e6 = (0, N.km)((e) => e.transcript),
          [e9, e7] = i.useState(null),
          [e8, e3] = i.useState(!1),
          [e5, te] = i.useState(!1),
          [tt, tn] = i.useState(null),
          tr = e4
            ? null !==
                (p =
                  null === (n = e0.current) || void 0 === n
                    ? void 0
                    : n.duration) && void 0 !== p
              ? p
              : 0
            : Math.max(eQ.maxTimestampSec, eD.progressSeconds),
          ti = i.useMemo(
            () =>
              V.has(ey)
                ? I.i.VIDEO_PLAYER_VIDEO
                : I.i.VIDEO_PLAYER_VIDEO_LOW_RES,
            [ey],
          ),
          tl = i.useMemo(
            () => (null != ti ? (0, I.z)(ti, en) : null),
            [ti, en],
          ),
          to = i.useCallback(
            (e) => {
              null != e0.current &&
                ea({
                  questId: en.id,
                  event: w.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                  properties: {
                    ...e,
                    video_asset_id: ti,
                    quest_completed: e4,
                    video_duration_sec: e0.current.duration,
                    video_progress: (0, A.formatVideoProgressRatio)(
                      e.segment_end_sec,
                      e0.current.duration,
                    ),
                    video_session_id: er,
                  },
                });
            },
            [ea, en.id, ti, e4, er],
          ),
          { forceSendCurrentSegment: ts } = (0, q.Z)({
            videoRef: e0,
            isPlaying: eh === k.rq.PLAYING,
            isMetadataLoaded: e8,
            isInitialSeekComplete: e5,
            onAnalytics: to,
            emitIntervalMs: 4e3,
            minSegmentDurationMs: 2e3,
          }),
          ta = i.useCallback(
            (e) => {
              if ((e_(e), null != e0.current))
                switch (e) {
                  case k.rq.PLAYING:
                    e0.current.play(),
                      ea({
                        questId: en.id,
                        event: w.rMx.QUEST_VIDEO_RESUMED,
                        properties: {
                          video_timestamp_seconds: e0.current.currentTime,
                          pause_reason: e9,
                          video_session_id: er,
                        },
                      }),
                      e7(null);
                    break;
                  case k.rq.PAUSED:
                    e0.current.pause(), ts();
                    break;
                  case k.rq.ENDED:
                    ed(!1), ts();
                }
            },
            [ea, en.id, e9, er, ts, ed],
          );
        (0, v.N)(() => {
          e2.current &&
            ((e2.current = !1),
            eq(f.Z.getEffectiveConnectionSpeed()),
            e4 && eQ.timestampSec >= eQ.duration && eW(en.id, 0, eQ.duration));
        }),
          i.useEffect(() => {
            null != e0.current &&
              null != e9 &&
              ea({
                questId: en.id,
                event: w.rMx.QUEST_VIDEO_PAUSED,
                properties: {
                  video_timestamp_seconds: e0.current.currentTime,
                  reason: e9,
                  video_session_id: er,
                },
              });
          }, [e9, en.id, ea, er]),
          i.useEffect(() => {
            ef &&
              null != e0.current &&
              ea({
                questId: en.id,
                event: ep
                  ? w.rMx.QUEST_VIDEO_APP_FOCUSED
                  : w.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                properties: {
                  video_timestamp_seconds: e0.current.currentTime,
                  video_state: eh,
                  video_session_id: er,
                },
              });
          }, [ep, ef, eh, en.id, ea, er]);
        let tu = i.useCallback(
          (e) => {
            var t;
            !e4 &&
              (null === (t = en.userStatus) || void 0 === t
                ? void 0
                : t.enrolledAt) != null &&
              (0, T.FI)(en, e),
              null != e0.current &&
                ea({
                  questId: en.id,
                  event: w.rMx.QUEST_VIDEO_PROGRESSED,
                  properties: {
                    progress: (0, A.formatVideoProgressRatio)(
                      e0.current.currentTime,
                      e0.current.duration,
                    ),
                    video_timestamp_seconds: e0.current.currentTime,
                    video_session_id: er,
                  },
                });
          },
          [e4, en, ea, er],
        );
        i.useEffect(() => {
          (eo === m.ModalTransitionState.HIDDEN ||
            eo === m.ModalTransitionState.EXITING ||
            eo === m.ModalTransitionState.EXITED ||
            (null != eo && eg && !eS && !e4) ||
            (ef && !ep && !e4)) &&
            null != e0.current &&
            eh === k.rq.PLAYING &&
            (ta(k.rq.PAUSED), !e4 && e7(k.yE.LOST_FOCUS));
        }, [eo, ep, ef, eS, eg, eh, e4, ta, tu]);
        let tc = () => {
            eN(!0);
          },
          td = () => {
            eN(!1);
          },
          tm = eT || eh === k.rq.PAUSED || eh === k.rq.ENDED,
          tv = i.useCallback(() => {
            var e;
            let t = (0, S.fn)(
              null === (e = e0.current) || void 0 === e ? void 0 : e.parentNode,
              e0.current,
            );
            null != t &&
              !(0, S.rB)(t) &&
              (t.removeEventListener(S.NO, tv),
              eC(!1),
              ea({
                questId: en.id,
                event: w.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                properties: { video_session_id: er },
              }));
          }, [en.id, eC, ea, er]),
          tE = () => {
            if (null != e0.current)
              tp(Math.max(e0.current.currentTime - 10, 0)),
                eh === k.rq.ENDED && ta(k.rq.PAUSED),
                eu({
                  questId: en.id,
                  questContent: _.jn.VIDEO_MODAL,
                  questContentCTA: g.jZ.SEEK_BACKWARD,
                });
          },
          tC = () => {
            if (null == e0.current || !tR) return;
            let e = Math.min(e0.current.currentTime + 10, tr);
            tp(e),
              eh !== k.rq.ENDED && e >= e0.current.duration && ta(k.rq.ENDED),
              eu({
                questId: en.id,
                questContent: _.jn.VIDEO_MODAL,
                questContentCTA: g.jZ.SEEK_FORWARD,
              });
          };
        i.useEffect(() => {
          let e = e0.current;
          return () => {
            let t = (0, S.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(S.NO, tv);
          };
        }, [tv]);
        let tp = i.useCallback(
            (e) => {
              null != e0.current &&
                (ts(),
                eb(!0),
                te(!1),
                (e0.current.currentTime = e),
                eW(en.id, e, e0.current.duration));
            },
            [e0, eW, en.id, ts],
          ),
          tf = () => {
            if (null != e0.current)
              switch (eh) {
                case k.rq.ENDED:
                  tp(0), ta(k.rq.PLAYING);
                  break;
                case k.rq.PLAYING:
                  ta(k.rq.PAUSED), e7(k.yE.PAUSE_BUTTON);
                  break;
                default:
                  ta(k.rq.PLAYING);
              }
          },
          tS = (e) => {
            tn(e);
          },
          tg = (e) => {
            tn((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
          },
          tx = i.useCallback(() => {
            if (null == e0.current || 0 === e0.current.textTracks.length)
              return;
            let e = e0.current.textTracks[0];
            if (((e.mode = "hidden"), null != e.cues))
              for (let t = 0; t < e.cues.length; t++) {
                let n = e.cues[t];
                (0, M.JC)(n) &&
                  ((n.id = "cue-".concat(t)),
                  (n.onenter = () => tS(n)),
                  (n.onexit = () => tg(n)));
              }
          }, [e0]);
        i.useEffect(() => {
          if (null == e1.current) return;
          let e = e1.current;
          return (
            e.addEventListener("load", tx),
            () => {
              null != e && e.removeEventListener("load", tx);
            }
          );
        }, [e1, tx]);
        let th = i.useCallback(
            (e) => {
              try {
                var t, n;
                let r =
                    null === (t = e0.current) || void 0 === t
                      ? void 0
                      : t.error,
                  i =
                    null === (n = e0.current) || void 0 === n
                      ? void 0
                      : n.networkState,
                  l =
                    null != e0.current
                      ? (0, A.formatVideoProgressRatio)(
                          e0.current.currentTime,
                          e0.current.duration,
                        )
                      : void 0;
                ea({
                  questId: en.id,
                  event: w.rMx.QUEST_VIDEO_ERROR,
                  properties: {
                    video_progress: l,
                    video_error_type: e,
                    video_asset_id: ti,
                    network_connection_speed: ey,
                    video_session_id: er,
                    video_error_code: null == r ? void 0 : r.code,
                    video_error_message: null == r ? void 0 : r.message,
                    video_network_state: i,
                  },
                });
              } catch (e) {}
            },
            [ey, en.id, ea, ti, er],
          ),
          t_ = (e) => {
            if (null != e0.current && eh === k.rq.PLAYING) {
              if ((eL && eR(!1), eO)) {
                let e = null != eH.current ? Date.now() - eH.current : null;
                ea({
                  questId: en.id,
                  event: w.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                  properties: {
                    video_asset_id: ti,
                    network_connection_speed: ey,
                    duration: e,
                    buffer_index: eK.current,
                    video_session_id: er,
                  },
                }),
                  ek(!1);
              }
              ta(k.rq.PLAYING);
            }
          };
        i.useEffect(() => {
          if (!eA) return;
          let e = setTimeout(() => {
            eb(!1);
          }, 1e3);
          return () => clearTimeout(e);
        }, [eA]);
        let [{ controlBarAnimSpring: tT }, tN] = (0, m.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: Y,
            onStart: () => {
              eG(!1);
            },
            onRest: (e) => {
              1 === e.value && eG(!0);
            },
          })),
          tD = (0, i.useRef)(null),
          [{ captionHeightSpring: tI }, tj] = (0, m.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: Y,
          }));
        i.useEffect(() => {
          var e, t;
          return (
            tj({
              captionHeightSpring:
                em &&
                null != tt &&
                null !==
                  (t =
                    null === (e = tD.current) || void 0 === e
                      ? void 0
                      : e.clientHeight) &&
                void 0 !== t
                  ? t
                  : 0,
              immediate: e$,
            }),
            () => {
              tI.stop();
            }
          );
        }, [em, tj, e$, tt, tI]),
          i.useEffect(
            () => (
              tN({ controlBarAnimSpring: tm || eF ? 1 : 0, immediate: e$ }),
              () => {
                tT.stop();
              }
            ),
            [tm, tN, e$, eF, tT],
          );
        let tA = eh === k.rq.ENDED,
          tb = i.useMemo(() => (0, I.z)(I.i.VIDEO_PLAYER_THUMBNAIL, en), [en]),
          tL = i.useMemo(() => (0, I.z)(I.i.VIDEO_PLAYER_CAPTION, en), [en]),
          tR =
            e4 ||
            eQ.maxTimestampSec >=
              (null !==
                (j =
                  null === (l = e0.current) || void 0 === l
                    ? void 0
                    : l.currentTime) && void 0 !== j
                ? j
                : 0) +
                1;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(m.Clickable, {
            className: F.videoCont,
            "data-fullscreen": eE,
            tabIndex: -1,
            onMouseEnter: tc,
            onMouseLeave: td,
            onFocus: tc,
            onBlur: td,
            children: (0, r.jsxs)("div", {
              className: F.videoContInnerRelative,
              children: [
                tA &&
                  ((0, D.e)({ location: B.dr.VIDEO_MODAL })
                    ? (0, r.jsx)(L.Z, {
                        quest: en,
                        title:
                          null === (K = en.config.videoMetadata) || void 0 === K
                            ? void 0
                            : K.messages.videoEndCtaTitle,
                        subtitle:
                          null === (Q = en.config.videoMetadata) || void 0 === Q
                            ? void 0
                            : Q.messages.videoEndCtaSubtitle,
                        ctaBtnLabel:
                          null !==
                            (X =
                              null === (W = en.config.videoMetadata) ||
                              void 0 === W
                                ? void 0
                                : W.messages.videoEndCtaButtonLabel) &&
                          void 0 !== X
                            ? X
                            : Z.intl.string(Z.t.iiTtpK),
                        onCTAClick: () => {
                          eu({
                            questId: en.id,
                            questContent: _.jn.VIDEO_MODAL_END_CARD,
                            questContentCTA: g.jZ.LEARN_MORE,
                            impressionId: es,
                          }),
                            (0, T.FE)(en, {
                              content: _.jn.VIDEO_MODAL_END_CARD,
                              ctaContent: g.jZ.LEARN_MORE,
                            });
                        },
                      })
                    : (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(z, { quest: en, shouldShow: tA }),
                          (0, r.jsx)("div", { className: F.videoContOverlay }),
                          (0, r.jsx)(H, {
                            title:
                              null !==
                                (ee =
                                  null === (J = en.config.videoMetadata) ||
                                  void 0 === J
                                    ? void 0
                                    : J.messages.videoEndCtaTitle) &&
                              void 0 !== ee
                                ? ee
                                : Z.intl.string(Z.t.iiTtpK),
                            subtitle:
                              null !==
                                (et =
                                  null === ($ = en.config.videoMetadata) ||
                                  void 0 === $
                                    ? void 0
                                    : $.messages.videoEndCtaSubtitle) &&
                              void 0 !== et
                                ? et
                                : Z.intl.string(Z.t.mxaHf3),
                            icon: m.ArrowLargeRightIcon,
                            className: F.endScreenPanelRight,
                            onClick: () => {
                              eu({
                                questId: en.id,
                                questContent: _.jn.VIDEO_MODAL,
                                questContentCTA: g.jZ.LEARN_MORE,
                              }),
                                (0, T.FE)(en, {
                                  content: _.jn.VIDEO_MODAL,
                                  ctaContent: g.jZ.LEARN_MORE,
                                  impressionId: es,
                                });
                            },
                          }),
                        ],
                      })),
                (0, r.jsxs)(C.Z, {
                  ref: (e) => {
                    (e0.current = e), (ex.current = e);
                  },
                  autoPlay: el,
                  playsInline: !0,
                  mediaLayoutType: eE ? U.hV.STATIC : U.hV.RESPONSIVE,
                  className: o()({ [F.hidden]: tA, [F.videoInner]: !0 }),
                  controls: !1,
                  poster: null == tb ? void 0 : tb.url,
                  disablePictureInPicture: !0,
                  onTimeUpdate: (e) => {
                    null != e0.current &&
                      (e0.current.currentTime >= eB &&
                        (ew(e0.current.currentTime + 6 + 2 * Math.random()),
                        tu(e0.current.currentTime)),
                      e0.current.currentTime >= eU &&
                        (eZ(e0.current.currentTime + 1),
                        (0, h.qm)(en.id, eD.taskType, e0.current.currentTime),
                        ei(e0.current.currentTime)),
                      eW(en.id, e0.current.currentTime, e0.current.duration),
                      ej((e0.current.currentTime / e0.current.duration) * 100));
                  },
                  onEnded: (e) => {
                    null != e0.current &&
                      (tu(e0.current.duration + 1),
                      eW(en.id, e0.current.duration, e0.current.duration)),
                      ta(k.rq.ENDED),
                      ek(!1);
                  },
                  onLoadedData: (e) => {
                    if (eL) {
                      let e =
                        null != ez.current ? Date.now() - ez.current : null;
                      ea({
                        questId: en.id,
                        event: w.rMx.QUEST_VIDEO_LOADING_ENDED,
                        properties: {
                          video_asset_id: ti,
                          network_connection_speed: ey,
                          duration: e,
                          video_session_id: er,
                        },
                      }),
                        eR(!1);
                    }
                  },
                  onLoadedMetadata: (e) => {
                    if (null != e0.current)
                      e3(!0),
                        tp(
                          e4
                            ? eQ.timestampSec
                            : Math.max(eQ.timestampSec, eD.progressSeconds),
                        ),
                        eX ? (e0.current.volume = 0) : (e0.current.volume = eJ);
                  },
                  onLoadStart: () => {
                    (ez.current = Date.now()),
                      ea({
                        questId: en.id,
                        event: w.rMx.QUEST_VIDEO_LOADING_STARTED,
                        properties: {
                          video_asset_id: ti,
                          network_connection_speed: ey,
                          video_session_id: er,
                          is_hls_supported: s.ZP.isSupported(),
                        },
                      });
                  },
                  onWaiting: (e) => {
                    (eH.current = Date.now()),
                      (eK.current += 1),
                      ea({
                        questId: en.id,
                        event: w.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                        properties: {
                          video_asset_id: ti,
                          network_connection_speed: ey,
                          buffer_index: eK.current,
                          video_session_id: er,
                        },
                      }),
                      ek(!0);
                  },
                  onProgress: (e) => {
                    if (null == e0.current) return;
                    let t = [];
                    for (let e = 0; e < e0.current.buffered.length; e++) {
                      let n = e0.current.buffered.start(e),
                        r = e0.current.buffered.end(e);
                      if (!(r - n < 1))
                        t.push({
                          start: n / e0.current.duration,
                          size: (r - n) / e0.current.duration,
                        });
                    }
                    eP(t);
                  },
                  onCanPlay: t_,
                  onCanPlayThrough: t_,
                  onSeeked: () => {
                    te(!0);
                  },
                  onAbort: () => th(k.CY.ABORT),
                  onError: () => th(k.CY.ERROR),
                  onEmptied: () => th(k.CY.EMPTIED),
                  onStalled: () => th(k.CY.STALLED),
                  onSuspend: () => th(k.CY.SUSPEND),
                  onClick: () => {
                    tf();
                  },
                  crossOrigin: "anonymous",
                  children: [
                    null != tL &&
                      (0, r.jsx)("track", {
                        ref: e1,
                        src: tL.url,
                        label: "English",
                        kind: "captions",
                        srcLang: "en",
                        default: !0,
                      }),
                    null != tl &&
                      (0, r.jsx)("source", {
                        onError: () => th(k.CY.SOURCE_ERROR),
                        src: tl.url,
                        type: tl.mimetype,
                      }),
                  ],
                }),
                (eL || eO) &&
                  eh === k.rq.PLAYING &&
                  (0, r.jsx)(m.Spinner, {
                    type: m.Spinner.Type.WANDERING_CUBES,
                    className: F.loadingSpinner,
                  }),
                eh === k.rq.PAUSED &&
                  e9 === k.yE.LOST_FOCUS &&
                  (0, r.jsx)(G, {}),
                ec &&
                  eh !== k.rq.ENDED &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(m.Clickable, {
                        onClick: () => ed(!1),
                        tabIndex: -1,
                        children: (0, r.jsx)("div", {
                          className: F.transcriptOverlay,
                        }),
                      }),
                      (0, r.jsx)(a.animated.div, {
                        className: F.transcriptCont,
                        style: {
                          marginBottom: (0, a.to)([tT, tI], (e, t) =>
                            "".concat(50 * e + t, "px"),
                          ),
                        },
                        children: (0, r.jsx)(O.K, {
                          quest: en,
                          onClose: () => {
                            ed(!1),
                              eu({
                                questId: en.id,
                                questContent: _.jn.VIDEO_MODAL,
                                questContentCTA: g.jZ.TRANSCRIPT_DISABLE,
                              });
                          },
                        }),
                      }),
                    ],
                  }),
                (0, r.jsx)(a.animated.div, {
                  className: F.videoFooterContGradient,
                  style: {
                    opacity: (0, a.to)(
                      [tT.to({ range: [0, 1], output: [0, 1] })],
                      (e) => "".concat(e),
                    ),
                  },
                }),
                (0, r.jsx)(
                  "div",
                  {
                    className: o()(F.playPausePopCont, {
                      [F.play]: eh === k.rq.PLAYING,
                      [F.pause]: eh === k.rq.PAUSED,
                    }),
                    children:
                      eh === k.rq.PLAYING
                        ? (0, r.jsx)(m.PlayIcon, {
                            className: F.playPausePopIcon,
                          })
                        : (0, r.jsx)(m.PauseIcon, {
                            className: F.playPausePopIcon,
                          }),
                  },
                  eh,
                ),
                em &&
                  null != tt &&
                  (0, r.jsx)(a.animated.div, {
                    className: F.captionContainer,
                    ref: tD,
                    style: {
                      translateY: (0, a.to)(
                        [tT.to({ range: [0, 1], output: [0, -50] })],
                        (e) => "".concat(e, "px"),
                      ),
                    },
                    children: (0, r.jsx)(m.Text, {
                      variant: "text-lg/semibold",
                      color: "always-white",
                      className: F.captionText,
                      children: tt.text,
                    }),
                  }),
                (0, r.jsxs)(a.animated.div, {
                  className: F.videoFooterCont,
                  style: {
                    paddingLeft: (0, a.to)(
                      [tT.to({ range: [0, 1], output: [0, 25] })],
                      (e) => "".concat(e, "px"),
                    ),
                    paddingRight: (0, a.to)(
                      [tT.to({ range: [0, 1], output: [0, 25] })],
                      (e) => "".concat(e, "px"),
                    ),
                    height: (0, a.to)(
                      [tT.to({ range: [0, 1], output: [0, 50] })],
                      (e) => "".concat(e, "px"),
                    ),
                  },
                  children: [
                    (0, r.jsx)(R.Z, {
                      percent: eI,
                      animate: !0 !== e2.current && !eA,
                      interactionEnabled: e4 && eY,
                      backgroundColor: tm ? void 0 : "rgba(0, 0, 0, 0.0)",
                      preloadedBuffers: tm ? eM : void 0,
                      duration:
                        null !==
                          (P =
                            null === (d = e0.current) || void 0 === d
                              ? void 0
                              : d.duration) && void 0 !== P
                          ? P
                          : 1,
                      maxSeekableTime: tm && eY ? tr : void 0,
                      onClick: (e) => {
                        tp(e), eh === k.rq.ENDED && ta(k.rq.PLAYING);
                      },
                      onScrubBack: () => {
                        tE();
                      },
                      onScrubForward: () => {
                        tC();
                      },
                    }),
                    (0, r.jsx)(a.animated.div, {
                      className: F.videoControlsCont,
                      style: {
                        paddingTop: (0, a.to)(
                          [tT.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(e * e * 12, "px"),
                        ),
                        paddingBottom: (0, a.to)(
                          [tT.to({ range: [0, 1], output: [0, 1] })],
                          (e) => "".concat(e * e * 12, "px"),
                        ),
                        pointerEvents: (0, a.to)(
                          [tT.to({ range: [0, 1], output: [0, 1] })],
                          (e) => (e < 0.3 ? "none" : "auto"),
                        ),
                      },
                      children: (0, r.jsx)(b.Z, {
                        videoRef: e0,
                        quest: en,
                        playerState: eh,
                        animSpring: tT,
                        visible: tm,
                        seekForwardEnabled: tR,
                        hideCaptionBtn: null == tL,
                        handlePlaybackBtnClick: tf,
                        handleTranscriptBtnClick: () => {
                          !ec &&
                            (null == e6 ||
                              e6.questId !== en.id ||
                              e6.fetchStatus === N.iF.NONE ||
                              e6.fetchStatus === N.iF.FAILURE) &&
                            (0, h.lL)(en),
                            ed(!ec),
                            eu({
                              questId: en.id,
                              questContent: _.jn.VIDEO_MODAL,
                              questContentCTA: ec
                                ? g.jZ.TRANSCRIPT_DISABLE
                                : g.jZ.TRANSCRIPT_ENABLE,
                            });
                        },
                        handleCaptionBtnClick: () => {
                          ev(!em),
                            eu({
                              questId: en.id,
                              questContent: _.jn.VIDEO_MODAL,
                              questContentCTA: em
                                ? g.jZ.CLOSED_CAPTIONING_DISABLE
                                : g.jZ.CLOSED_CAPTIONING_ENABLE,
                            });
                        },
                        handleFullScreenBtnClick: () => {
                          var e;
                          let t = !eE,
                            n = (0, S.fn)(
                              null === (e = e0.current) || void 0 === e
                                ? void 0
                                : e.parentNode,
                              e0.current,
                            );
                          t && null != n
                            ? ((0, S.Dj)(n),
                              n.addEventListener(S.NO, tv),
                              ea({
                                questId: en.id,
                                event: w.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                                properties: { video_session_id: er },
                              }))
                            : !t &&
                              null != n &&
                              (n.removeEventListener(S.NO, tv),
                              ea({
                                questId: en.id,
                                event: w.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                                properties: { video_session_id: er },
                              }),
                              (0, S.Pr)(n)),
                            eC(t);
                        },
                        handleSeekBackBtnClick: tE,
                        handleSeekForwardBtnClick: tC,
                        handleControlBarPendingInteraction: eV,
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
          C = (0, r.useCallback)(() => {
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
          p = (0, r.useCallback)(() => {
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
              !v.current && C(),
                (d.current = window.setInterval(() => {
                  p();
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
          }, [n, i, l, u, p, E, t, C]),
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
//# sourceMappingURL=edd3a9db2e9a107c6f88.js.map
