"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["50751"],
  {
    567409: function (e, t, n) {
      n.d(t, {
        Ns: function () {
          return m;
        },
      }),
        n(47120);
      var i = n(192379),
        l = n(392711),
        o = n.n(l),
        r = n(876215),
        s = n(442837),
        a = n(146282),
        u = n(26033),
        d = n(897674),
        c = n(709054),
        h = n(206583);
      let f = new Set([r.s.PLAYED_GAME, r.s.LAUNCHED_ACTIVITY]),
        p = (e) => f.has(e.content_type);
      function m(e) {
        let { entries: t } = (function () {
          let e = (0, d.Z)(h.YN.GAME_PROFILE_FEED),
            t = (0, d.Z)(h.YN.GLOBAL_FEED),
            n = i.useMemo(
              () =>
                o()(t)
                  .unionBy(e, (e) => e.id)
                  .filter(p)
                  .orderBy((e) => c.default.extractTimestamp(e.id), "desc")
                  .uniqWith(
                    (e, t) =>
                      e.author_id === t.author_id &&
                      e.extra.application_id === t.extra.application_id,
                  )
                  .value(),
              [e, t],
            );
          return {
            requestId: (0, s.e7)([a.Z], () =>
              a.Z.getFeedRequestId(h.YN.GAME_PROFILE_FEED),
            ),
            entries: n,
          };
        })();
        return i.useMemo(
          () =>
            null == t
              ? void 0
              : t.filter(
                  (t) =>
                    ((0, u.dX)(t) || (0, u.Mq)(t)) &&
                    t.extra.application_id === e,
                ),
          [t, e],
        );
      }
    },
    552282: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      function i(e) {
        var t;
        return null != e
          ? { id: e.id, name: null !== (t = e.name) && void 0 !== t ? t : "" }
          : null;
      }
    },
    86071: function (e, t, n) {
      let i = (0, n(818083).B)({
        kind: "user",
        id: "2024-10_hotwheels_overlay_invites",
        label: "Overlay Invites Notification",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      t.Z = i;
    },
    681603: function (e, t, n) {
      var i = n(192379),
        l = n(149765),
        o = n(442837),
        r = n(367907),
        s = n(731429),
        a = n(188471),
        u = n(318885),
        d = n(592125),
        c = n(984933),
        h = n(271383),
        f = n(430824),
        p = n(496675),
        m = n(944486),
        v = n(914010),
        g = n(594174),
        E = n(237997),
        Z = n(145597),
        C = n(981631);
      class x extends i.Component {
        componentDidUpdate(e) {
          if (this.props.locked) return null;
          let {
            selectedGuild: t,
            selectedChannel: n,
            isMemberPending: i,
            hasPreviewEnabled: l,
            postableChannelCount: o,
          } = this.props;
          if (
            (null != t &&
              (t !== e.selectedGuild || (i && !e.isMemberPending)) &&
              ((0, u.Q)(C.rMx.GUILD_VIEWED, {
                ...(i ? { is_pending: i, preview_enabled: l } : {}),
                postable_channels: o,
              }),
              (0, a.a)(C.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: t })),
            null != n && n !== e.selectedChannel)
          ) {
            let e = (0, s.K)(d.Z.getChannel(n), !0);
            (0, u.Q)(C.rMx.CHANNEL_OPENED, { ...e, ...(0, r.$H)(n) }),
              (0, a.a)(C.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: n });
          }
        }
        render() {
          return null;
        }
      }
      t.Z = o.ZP.connectStores(
        [v.Z, m.Z, f.Z, g.default, E.Z, c.ZP, p.Z, h.ZP],
        () => {
          var e, t, n;
          let i = v.Z.getGuildId(),
            o = m.Z.getChannelId(i),
            r = f.Z.getGuild(i),
            s = g.default.getCurrentUser(),
            a =
              null !==
                (t = c.ZP.getChannels(null == r ? void 0 : r.id)[c.sH]) &&
              void 0 !== t
                ? t
                : [],
            u =
              a.length > 0
                ? a.filter((e) => {
                    let { channel: t } = e;
                    return p.Z.can(
                      l.$e(C.Plq.SEND_MESSAGES, C.Plq.VIEW_CHANNEL),
                      t,
                    );
                  }).length
                : 0,
            d =
              null != s &&
              null != i &&
              null !==
                (n =
                  null === (e = h.ZP.getMember(i, s.id)) || void 0 === e
                    ? void 0
                    : e.isPending) &&
              void 0 !== n &&
              n;
          return {
            selectedGuild: i,
            selectedChannel: o,
            locked: E.Z.isLocked((0, Z.QF)()),
            hasPreviewEnabled:
              null == r ? void 0 : r.features.has(C.oNc.PREVIEW_ENABLED),
            isMemberPending: d,
            postableChannelCount: u,
          };
        },
      )(x);
    },
    906037: function (e, t, n) {
      n.d(t, {
        CR: function () {
          return r;
        },
        eM: function () {
          return o;
        },
        m3: function () {
          return s;
        },
      });
      var i = n(570140),
        l = n(449224);
      function o(e) {
        return (!e.isPreviewingInGame && !e.locked) || e.pinned;
      }
      function r(e, t, n) {
        (e.locked !== t.locked ||
          e.pinned !== t.pinned ||
          n(e) !== n(t) ||
          o(e) !== o(t)) &&
          s(t, n(t));
      }
      function s(e, t) {
        var n, r;
        let s = o(e),
          a = l.Z.getGame();
        i.Z.dispatch({
          type: "OVERLAY_WIDGET_CHANGED",
          gameName:
            null !== (n = null == a ? void 0 : a.name) && void 0 !== n
              ? n
              : null,
          gameId:
            null !== (r = null == a ? void 0 : a.id) && void 0 !== r ? r : null,
          widgetType: e.widget,
          visible: s && t,
          locked: e.locked,
          pinned: e.pinned,
        });
      }
    },
    809357: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
        o: function () {
          return a;
        },
      });
      var i = n(442837),
        l = n(522474),
        o = n(658785),
        r = n(981631);
      function s(e) {
        let { location: t, options: n } = e,
          i = a(),
          { showKeybindIndicators: l } = o.Z.useExperiment({ location: t }, n);
        return l && i;
      }
      function a() {
        return !(0, i.e7)([l.Z], () =>
          l.Z.getWindowVisible(r.KJ3.ACTIVITY_POPOUT),
        );
      }
    },
    603618: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return P;
        },
        i: function () {
          return D;
        },
      }),
        n(47120),
        n(789020);
      var i = n(200651),
        l = n(192379),
        o = n(512722),
        r = n.n(o),
        s = n(442837),
        a = n(481060),
        u = n(278323),
        d = n(988298),
        c = n(493683),
        h = n(13245),
        f = n(99690),
        p = n(620662),
        m = n(835473),
        v = n(194082),
        g = n(297781),
        E = n(656709),
        Z = n(567409),
        C = n(703656),
        x = n(409057),
        S = n(199902),
        I = n(592125),
        _ = n(293273),
        O = n(158776),
        N = n(594174),
        y = n(630388),
        T = n(5192),
        j = n(358085),
        b = n(998502),
        L = n(388627),
        R = n(981631),
        w = n(388032),
        k = n(13663);
      function A(e) {
        let { entry: t, currentUserActivity: n, idx: o } = e,
          d = (0, s.e7)([N.default], () => N.default.getUser(t.author_id)),
          [f, m] = l.useState("unsent"),
          [v, g] = l.useState(!1);
        l.useEffect(() => {
          if ("sent" === f) {
            let e = setTimeout(() => g(!0), 2e3);
            return () => clearTimeout(e);
          }
        }, [f]);
        let Z = null != n && (0, p.Z)(n, R.xjy.JOIN),
          x = async (e) => {
            if (null != d && "unsent" === f) {
              e.stopPropagation();
              try {
                if ((m("sending"), Z))
                  await u.Z.sendActivityInviteUser({
                    type: R.mFx.JOIN,
                    userId: d.id,
                    activity: n,
                    location: R.Sbl.UNLOCKED_OVERLAY,
                  });
                else {
                  var i;
                  let e = await c.Z.getOrEnsurePrivateChannel(d.id),
                    n =
                      null !== (i = I.Z.getChannel(e)) && void 0 !== i
                        ? i
                        : null;
                  r()(null != n, "Send channel must be defined"),
                    (0, C.uL)(R.Z5c.CHANNEL(n.guild_id, n.id)),
                    await (0, E.p)({
                      channel: n,
                      content: w.intl.string(w.t.DwAcMz),
                      entry: t,
                      whenReady: !0,
                    });
                }
                h.Z.track(R.rMx.OVERLAY_GAME_INVITE_SENT, {
                  target_user_id: d.id,
                  target_content_entry_id: t.id,
                  target_index: o,
                }),
                  m("sent");
              } catch (e) {
                m("unsent");
              }
            }
          },
          S = async () => {
            var e;
            if (null == d) return;
            let t = await c.Z.getOrEnsurePrivateChannel(d.id),
              n = null !== (e = I.Z.getChannel(t)) && void 0 !== e ? e : null;
            r()(null != n, "Send channel must be defined"),
              (0, C.uL)(R.Z5c.CHANNEL(n.guild_id, n.id)),
              j.isPlatformEmbedded && b.ZP.focus();
          },
          _ = Z ? w.intl.string(w.t["3fRyS0"]) : w.intl.string(w.t.y9eo7e),
          O = Z
            ? (0, i.jsx)(a.GroupPlusIcon, { color: "currentColor", size: "sm" })
            : (0, i.jsx)(a.SendMessageIcon, {
                color: "currentColor",
                size: "sm",
              });
        return (0, i.jsx)(a.Tooltip, {
          text: _,
          "aria-label": _,
          children: (e) =>
            (0, i.jsx)(a.Button, {
              ...e,
              submitting: "sending" === f,
              onClick: v ? S : x,
              className: k.inviteButton,
              wrapperClassName: k.inviteButtonWrapper,
              innerClassName: k.inviteButtonInner,
              color: a.ButtonColors.TRANSPARENT,
              look: a.ButtonLooks.FILLED,
              size: a.ButtonSizes.ICON,
              grow: !1,
              children:
                "sent" === f
                  ? v
                    ? (0, i.jsx)(a.ChatIcon, {
                        color: "currentColor",
                        size: "sm",
                      })
                    : (0, i.jsx)(a.CheckmarkSmallBoldIcon, {
                        color: "currentColor",
                        size: "sm",
                      })
                  : O,
            }),
        });
      }
      function M(e) {
        var t;
        let { entry: n, currentUserActivity: o } = e,
          r = (0, s.e7)([N.default], () => N.default.getUser(n.author_id)),
          d =
            null !== (t = null == o ? void 0 : o.application_id) && void 0 !== t
              ? t
              : n.extra.application_id,
          c = (0, s.e7)(
            [O.Z],
            () => (null != r ? O.Z.getApplicationActivity(r.id, d) : null),
            [d, r],
          ),
          [h, f] = l.useState("unsent");
        if (!(null != c && (0, p.Z)(c, R.xjy.JOIN))) return null;
        let m = async (e) => {
            if (null != r && "unsent" === h) {
              e.stopPropagation();
              try {
                f("sending"),
                  await u.Z.sendActivityInviteUser({
                    type: R.mFx.JOIN_REQUEST,
                    userId: r.id,
                    activity: c,
                    location: R.Sbl.UNLOCKED_OVERLAY,
                  }),
                  f("sent");
              } catch (e) {
                f("unsent");
              }
            }
          },
          v = w.intl.string(w.t.OKsSCQ);
        return (0, i.jsx)(a.Tooltip, {
          text: v,
          "aria-label": v,
          children: (e) =>
            (0, i.jsx)(a.Button, {
              ...e,
              submitting: "sending" === h,
              onClick: m,
              className: k.inviteButton,
              wrapperClassName: k.inviteButtonWrapper,
              innerClassName: k.inviteButtonInner,
              color: a.ButtonColors.TRANSPARENT,
              look: a.ButtonLooks.FILLED,
              size: a.ButtonSizes.ICON,
              grow: !1,
              children:
                "sent" === h
                  ? (0, i.jsx)(a.CheckmarkSmallBoldIcon, {
                      color: "currentColor",
                      size: "sm",
                    })
                  : (0, i.jsx)(a.HandRequestSpeakIcon, {
                      color: "currentColor",
                      size: "sm",
                    }),
            }),
        });
      }
      function z(e) {
        let { entry: t, currentUserActivity: n, idx: l } = e,
          o = (0, s.e7)([N.default], () => N.default.getUser(t.author_id)),
          r = (0, s.e7)(
            [S.Z],
            () => (null != o ? S.Z.getAnyStreamForUser(o.id) : null),
            [o],
          ),
          { isMobileOnline: u, status: d } = (0, s.cj)(
            [O.Z],
            () =>
              null == o
                ? { isMobileOnline: void 0, status: void 0 }
                : {
                    isMobileOnline: O.Z.isMobileOnline(o.id),
                    status: O.Z.getStatus(o.id),
                  },
            [o],
          );
        return null == o
          ? null
          : (0, i.jsxs)("div", {
              className: k.row,
              children: [
                (0, i.jsx)(f.Z, {
                  className: k.avatar,
                  user: o,
                  isMobile: u,
                  status: d,
                }),
                (0, i.jsxs)("div", {
                  className: k.details,
                  children: [
                    (0, i.jsxs)("div", {
                      className: k.usernameWrapper,
                      children: [
                        (0, i.jsx)(a.Text, {
                          className: k.username,
                          variant: "text-md/medium",
                          color: "header-primary",
                          children: T.ZP.getName(void 0, void 0, o),
                        }),
                        null != r &&
                          (0, i.jsx)(v.ZP, { className: k.liveIndicator }),
                      ],
                    }),
                    (0, i.jsx)(g.Gk, {
                      location: g.Gt.OVERLAY,
                      className: k.badgesContainer,
                      children: [g.OV, g.wO, g.f, g.v1, g.pQ].map((e, n) =>
                        (0, i.jsx)(e, { entry: t }, "entry-".concat(n)),
                      ),
                    }),
                  ],
                }),
                (0, i.jsx)(M, { entry: t, currentUserActivity: n, idx: l }),
                (0, i.jsx)(A, { entry: t, currentUserActivity: n, idx: l }),
              ],
            });
      }
      function D(e) {
        let { entries: t, currentUserActivity: n } = e,
          l = t.slice(0, 5);
        return (0, i.jsx)(i.Fragment, {
          children: l.map((e, t) =>
            (0, i.jsx)(z, { idx: t, entry: e, currentUserActivity: n }, t),
          ),
        });
      }
      function P() {
        let e = (0, L.II)(),
          t = null == e ? void 0 : e.id,
          n = null == e ? void 0 : e.altId,
          l = (0, Z.Ns)(t),
          o = (0, s.e7)([N.default], () => N.default.getCurrentUser()),
          r = (0, s.e7)([_.Z], () =>
            null != n
              ? _.Z.getApplicationActivity(n)
              : null != t
                ? _.Z.getApplicationActivity(t)
                : null,
          ),
          u = null != r && (0, p.Z)(r, R.xjy.JOIN),
          c = (0, m.q)(null == r ? void 0 : r.application_id),
          h = null != c && (0, y.yE)(c.flags, R.udG.EMBEDDED);
        return 0 === l.length && null == r
          ? null
          : (0, i.jsxs)("div", {
              className: k.container,
              children: [
                null != r && null != o
                  ? (0, i.jsx)(x.Z, {
                      className: k.activityCard,
                      activity: r,
                      user: o,
                      currentUser: o,
                    })
                  : null,
                u && !h
                  ? (0, i.jsx)(a.Button, {
                      className: k.inviteFriendsButton,
                      onClick: () => (0, d.h7)(r, !1, R.IlC.POPOUT),
                      size: a.ButtonSizes.SMALL,
                      color: a.ButtonColors.PRIMARY,
                      children: w.intl.string(w.t["6Qgren"]),
                    })
                  : null,
                (0, i.jsx)(D, { entries: l, currentUserActivity: r }),
              ],
            });
      }
    },
    667142: function (e, t, n) {
      n.d(t, {
        Df: function () {
          return c;
        },
        S_: function () {
          return d;
        },
        V5: function () {
          return s;
        },
        VX: function () {
          return r;
        },
        ih: function () {
          return a;
        },
        xc: function () {
          return u;
        },
      });
      var i = n(972959);
      let l = { timeToLiveMs: 5e3, reappearTimeMs: 1e4 },
        o = (0, i.H)(() => l),
        r = 1e4,
        s = 2e4,
        a = 500,
        u = 1e3;
      function d(e) {
        o.setState({ timeToLiveMs: e });
      }
      function c(e) {
        o.setState({ reappearTimeMs: e });
      }
      t.ZP = o;
    },
    926086: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        o = n(120356),
        r = n.n(o),
        s = n(348327),
        a = n.n(s),
        u = n(752877),
        d = n(481060),
        c = n(667142),
        h = n(333031),
        f = n(70491);
      let p = { mass: 1, tension: 600, friction: 60, clamp: !0 };
      function m(e) {
        let { locked: t, pinned: n } = e,
          [o, s] = l.useState(0),
          [m, v] = l.useState(0),
          [g, E] = l.useState(0),
          Z = l.useRef(0),
          [C, x] = l.useState(0),
          { timeToLiveMs: S, reappearTimeMs: I } = c.ZP.useState(
            (e) => ({
              timeToLiveMs: e.timeToLiveMs,
              reappearTimeMs: e.reappearTimeMs,
            }),
            a(),
          ),
          _ = { timeToLiveMs: S, reappearTimeMs: I },
          O = l.useRef(_);
        l.useEffect(() => void (O.current = _)),
          l.useEffect(
            () => (
              (Z.current = setInterval(() => {
                let e = Date.now();
                v(e),
                  E((t) => {
                    if (0 === t) return e;
                    let n = e - t,
                      i = O.current.timeToLiveMs,
                      l = i + O.current.reappearTimeMs;
                    return n > i ? t + l : t;
                  });
              }, 100)),
              () => {
                clearInterval(Z.current);
              }
            ),
            [],
          );
        let N = () => {
            s(Date.now()), x((e) => e + 1);
          },
          y = o > 0 && m - o < 1e3,
          T = (0, d.useTransition)(g > 0 && g < m && m - g < S, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: p,
          });
        return t && !n
          ? null
          : (0, i.jsx)(i.Fragment, {
              children: T(
                (e, t) =>
                  t &&
                  (0, i.jsx)(u.animated.div, {
                    style: e,
                    className: f.clickZoneDebugContainer,
                    children: (0, i.jsx)(h.Z, {
                      className: r()(f.clickZone, y && f.clickBackground),
                      children: (0, i.jsx)(d.Clickable, {
                        onClick: N,
                        className: f.clickable,
                        children: (0, i.jsxs)(d.Text, {
                          variant: "text-md/semibold",
                          color: "always-white",
                          children: ["Click Me (", C, ")"],
                        }),
                      }),
                    }),
                  }),
              ),
            });
      }
    },
    691891: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var l = n(120356),
        o = n.n(l),
        r = n(481060),
        s = n(932209);
      let a = (e) => {
        let { className: t, onDismiss: n, "aria-label": l } = e;
        return (0, i.jsx)(r.Button, {
          look: r.Button.Looks.BLANK,
          size: r.Button.Sizes.NONE,
          onClick: n,
          className: o()(s.dismissButton, t),
          "aria-label": l,
          children: (0, i.jsx)(r.XSmallIcon, {
            size: "xs",
            color: "currentColor",
            colorClass: s.dismissIcon,
          }),
        });
      };
      (a.displayName = "DismissButton"), (t.Z = a);
    },
    353038: function (e, t, n) {
      n.d(t, {
        B: function () {
          return i;
        },
        Z: function () {
          return O;
        },
      }),
        n(47120),
        n(411104);
      var i,
        l,
        o,
        r = n(200651),
        s = n(192379),
        a = n(120356),
        u = n.n(a),
        d = n(752877),
        c = n(902704),
        h = n(585483),
        f = n(434529),
        p = n(981631),
        m = n(706446);
      function v(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let g = (e, t, n, i) => Math.pow(e - n, 2) + Math.pow(t - i, 2);
      ((o = i || (i = {})).MOVE = "MOVE"),
        (o.RESIZE_NORTH = "RESIZE_NORTH"),
        (o.RESIZE_WEST = "RESIZE_WEST"),
        (o.RESIZE_EAST = "RESIZE_EAST"),
        (o.RESIZE_SOUTH = "RESIZE_SOUTH"),
        (o.RESIZE_NORTH_WEST = "RESIZE_NORTH_WEST"),
        (o.RESIZE_NORTH_EAST = "RESIZE_NORTH_EAST"),
        (o.RESIZE_SOUTH_WEST = "RESIZE_SOUTH_WEST"),
        (o.RESIZE_SOUTH_EAST = "RESIZE_SOUTH_EAST");
      let E = new Set([
        "RESIZE_NORTH",
        "RESIZE_WEST",
        "RESIZE_EAST",
        "RESIZE_SOUTH",
        "RESIZE_NORTH_WEST",
        "RESIZE_NORTH_EAST",
        "RESIZE_SOUTH_WEST",
        "RESIZE_SOUTH_EAST",
      ]);
      function Z(e, t, n) {
        let { width: i, height: l } = e;
        return {
          width: "auto" === i ? "auto" : Math.max(t, i),
          height: "auto" === l ? "auto" : Math.max(n, l),
        };
      }
      function C(e) {
        let { top: t, left: n, bottom: i, right: l } = e;
        return (
          null == n && null == l && (n = 0),
          null != n && null != l && (l = void 0),
          null == t && null == i && (t = 0),
          null != t && null != i && (i = void 0),
          { top: t, left: n, bottom: i, right: l }
        );
      }
      function x(e) {
        return "auto" === e || null == e ? "auto" : "".concat(e, "px");
      }
      function S(e, t) {
        let n = 0,
          i = 0;
        return (
          (n = "auto" === t.width ? (null != e ? e.clientWidth : 0) : t.width),
          {
            width: n,
            height: (i =
              "auto" === t.height
                ? null != e
                  ? e.clientHeight
                  : 0
                : t.height),
          }
        );
      }
      function I(e, t) {
        let { top: n, left: i, bottom: l, right: o } = t;
        switch (e) {
          case "RESIZE_EAST":
          case "RESIZE_NORTH_EAST":
          case "RESIZE_NORTH":
            return { bottom: l, left: i, right: void 0, top: void 0 };
          case "RESIZE_WEST":
          case "RESIZE_NORTH_WEST":
            return { bottom: l, right: o, left: void 0, top: void 0 };
          case "RESIZE_SOUTH_EAST":
            return { top: n, left: i, bottom: void 0, right: void 0 };
          case "RESIZE_SOUTH":
          case "RESIZE_SOUTH_WEST":
            return { top: n, right: o, bottom: void 0, left: void 0 };
          default:
            throw Error("getOrientedCoords: Invalid orientation: ".concat(e));
        }
      }
      function _(e) {
        let { computedSize: t } = e;
        return t;
      }
      class O extends (l = s.Component) {
        shouldComponentUpdate(e, t) {
          return (
            !(0, c.Z)(t, this.state) ||
            !(0, c.Z)(e, this.props, [
              "anchor",
              "size",
              "minSize",
              "container",
            ]) ||
            !(0, c.Z)(e.anchor, this.props.anchor) ||
            !(0, c.Z)(e.size, this.props.size) ||
            !(0, c.Z)(e.minSize, this.props.minSize) ||
            !(0, c.Z)(e.container, this.props.container)
          );
        }
        componentDidMount() {
          this.setDOMPositions(C(this.props.anchor)),
            this.setDOMSize(
              Z(
                this.props.size,
                this.props.minSize.width,
                this.props.minSize.height,
              ),
            ),
            h.S.subscribe(p.CkL.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI);
        }
        componentDidUpdate(e, t) {
          null == t.operation &&
            (!(0, c.Z)(this.props.anchor, e.anchor) &&
              this.setDOMPositions(C(this.props.anchor)),
            !(0, c.Z)(this.props.size, e.size) &&
              this.setDOMSize(
                Z(
                  this.props.size,
                  this.props.minSize.width,
                  this.props.minSize.height,
                ),
              ));
        }
        componentWillUnmount() {
          this.handleOperationEnd(),
            h.S.unsubscribe(p.CkL.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI);
        }
        handleResizeMouseDown(e, t) {
          let { clientX: n, clientY: i } = e;
          e.stopPropagation(), this.handleOperationStart(t, n, i);
        }
        handleDragMove(e, t) {
          let {
            ref: { current: n },
            props: {
              id: i,
              container: { maxX: l, maxY: o, minX: r, minY: s },
              onDragStart: a,
              onDrag: u,
              snapOrientation: d = !0,
            },
            dragState: { offsetX: c, offsetY: h },
            state: { operationStarted: p },
          } = this;
          if (null == n) return null;
          (e = Math.max(Math.min(l, e), r)), (t = Math.max(Math.min(o, t), s));
          let { width: m, height: v } = S(n, this.size),
            g = t - h,
            E = e - c,
            Z = (0, f.ou)(
              (0, f.PY)(
                { top: g, left: E, bottom: void 0, right: void 0 },
                l,
                o,
                m,
                v,
              ),
            ),
            C = d ? (0, f.R)(Z) : I("RESIZE_SOUTH_EAST", Z);
          this.setDOMPositions(C),
            this.setState(
              {
                operationStarted: !0,
                anchorTopOverride: null != C.top,
                anchorLeftOverride: null != C.left,
              },
              () => {
                !p && null != a && a(),
                  null != u && u(i, "MOVE", this.anchor, this.size);
              },
            );
        }
        handleResizeMove(e, t) {
          let {
              props: {
                id: n,
                minSize: i,
                container: { maxX: l, maxY: o, minX: r, minY: s },
                onDragStart: a,
                onDrag: u,
                resizeValidation: d = _,
              },
              state: { operation: h, operationStarted: p },
            } = this,
            { startX: m, startY: v } = this.dragState,
            g = 0,
            E = 0;
          if (null == h) return;
          switch (
            ((e = Math.max(Math.min(l, e), r)),
            (t = Math.max(Math.min(o, t), s)),
            h)
          ) {
            case "RESIZE_EAST":
            case "RESIZE_SOUTH_EAST":
            case "RESIZE_NORTH_EAST":
              g -= m - e;
              break;
            case "RESIZE_WEST":
            case "RESIZE_SOUTH_WEST":
            case "RESIZE_NORTH_WEST":
              g += m - e;
          }
          switch (h) {
            case "RESIZE_SOUTH":
            case "RESIZE_SOUTH_WEST":
            case "RESIZE_SOUTH_EAST":
              E -= v - t;
              break;
            case "RESIZE_NORTH":
            case "RESIZE_NORTH_WEST":
            case "RESIZE_NORTH_EAST":
              E += v - t;
          }
          let Z = d({
              padding: 8,
              borderWidth: 2,
              operation: h,
              computedSize: {
                width: Math.max(this.dragState.offsetWidth + g, i.width),
                height: Math.max(this.dragState.offsetHeight + E, i.height),
              },
              originSize: {
                width: this.dragState.offsetWidth,
                height: this.dragState.offsetHeight,
              },
              containerSpecs: this.props.container,
              orientedPosition: this.dragState.dragOrientedCoords,
            }),
            C = (0, f.BL)(
              (0, f.ou)(
                (0, f.PY)(
                  this.dragState.dragOrientedCoords,
                  l,
                  o,
                  Z.width,
                  Z.height,
                ),
              ),
              this.dragState.dragOrientedCoords,
            );
          this.setDOMSize(Z, !0),
            !(0, c.Z)(C, this.dragState.dragOrientedCoords) &&
              ((this.dragState.dragOrientedCoords = C),
              this.setDOMPositions(this.dragState.dragOrientedCoords)),
            !p && (null != a && a(), this.setState({ operationStarted: !0 })),
            null != u && u(n, h, this.anchor, this.size);
        }
        setDOMPositions(e) {
          let { top: t, left: n, bottom: i, right: l } = e,
            { current: o } = this.ref;
          if (
            ((this.anchor = { top: t, left: n, bottom: i, right: l }),
            null != o)
          )
            (o.style.top = x(t)),
              (o.style.bottom = x(i)),
              (o.style.left = x(n)),
              (o.style.right = x(l));
        }
        setDOMSize(e) {
          let { width: t, height: n } = e,
            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { current: l } = this.ref;
          if (
            ((t = "auto" !== this.size.width || i ? t : "auto"),
            (n = "auto" !== this.size.height || i ? n : "auto"),
            (this.size = { width: t, height: n }),
            null != l)
          )
            (l.style.width = x(t)), (l.style.height = x(n));
        }
        renderResizeHandles() {
          let { resizeY: e, resizeX: t, active: n } = this.props;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              e
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("div", {
                        className: u()(m.resizeNorth, {
                          [m.resizeNSCursor]: n,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_NORTH"),
                      }),
                      (0, r.jsx)("div", {
                        className: u()(m.resizeSouth, {
                          [m.resizeNSCursor]: n,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_SOUTH"),
                      }),
                    ],
                  })
                : null,
              t
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("div", {
                        className: u()(m.resizeEast, { [m.resizeEWCursor]: n }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_EAST"),
                      }),
                      (0, r.jsx)("div", {
                        className: u()(m.resizeWest, { [m.resizeEWCursor]: n }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_WEST"),
                      }),
                    ],
                  })
                : null,
              t && e
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("div", {
                        className: u()(m.resizeNorthWest, {
                          [m.resizeNWSECursor]: n,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_NORTH_WEST"),
                      }),
                      (0, r.jsx)("div", {
                        className: u()(m.resizeNorthEast, {
                          [m.resizeNESWCursor]: n,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_NORTH_EAST"),
                      }),
                      (0, r.jsx)("div", {
                        className: u()(m.resizeSouthWest, {
                          [m.resizeNESWCursor]: n,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_SOUTH_WEST"),
                      }),
                      (0, r.jsx)("div", {
                        className: u()(m.resizeSouthEast, {
                          [m.resizeNWSECursor]: n,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_SOUTH_EAST"),
                      }),
                    ],
                  })
                : null,
            ],
          });
        }
        renderExtras() {
          let {
              props: { renderExtras: e, anchor: t },
              setLockExtras: n,
            } = this,
            i = null == e ? void 0 : e(n);
          return null != i
            ? (0, r.jsx)("div", {
                className: u()({
                  [m.extras]: !0,
                  [m.extrasBottomOriented]: null != t.bottom,
                  [m.extrasRightOriented]: null != t.right,
                }),
                children: i,
              })
            : null;
        }
        getInlineStyles() {
          let {
            props: {
              hidden: e,
              style: t,
              minSize: n,
              padding: i = 8,
              borderWidth: l = 2,
              borderRadius: o = 12,
            },
            state: { operation: r },
          } = this;
          return {
            ...t,
            minWidth: n.width,
            minHeight: n.height,
            borderWidth: l,
            padding: i,
            borderRadius: o + l + i,
            zIndex: null != r ? 1e3 : void 0,
            visibility: e ? "hidden" : void 0,
          };
        }
        renderChildren() {
          let {
            props: {
              children: e,
              hidden: t,
              padding: n = 8,
              borderWidth: i = 2,
              locked: l,
            },
            size: o,
            anchor: r,
            setLockExtras: s,
            state: { anchorTopOverride: a, anchorLeftOverride: u },
          } = this;
          return e({
            dragStart: this.handleOperationStart,
            dragOperation: this.state.operation,
            anchorTop: null != a ? a : null != r.top,
            anchorLeft: null != u ? u : null != r.left,
            size: o,
            padding: n,
            borderWidth: i,
            setLockExtras: s,
            locked: l,
            hidden: t,
          });
        }
        render() {
          let {
            props: { onClick: e, id: t, locked: n, className: i },
            state: { operationStarted: l, lockExtras: o },
          } = this;
          return (0, r.jsxs)(d.animated.div, {
            ref: this.ref,
            style: this.getInlineStyles(),
            className: u()(
              {
                [m.wrapper]: !0,
                [m.operation]: l,
                [m.unlocked]: !n,
                [m.lockExtras]: o,
              },
              i,
            ),
            onMouseDown: this.handleMouseDown,
            onClick: null != e ? () => e(t) : void 0,
            children: [
              this.renderChildren(),
              this.renderResizeHandles(),
              this.renderExtras(),
            ],
          });
        }
        constructor(e) {
          super(e),
            v(this, "anchor", void 0),
            v(this, "size", void 0),
            v(this, "ref", s.createRef()),
            v(this, "dragState", {
              startX: 0,
              startY: 0,
              offsetX: 0,
              offsetY: 0,
              offsetWidth: 0,
              offsetHeight: 0,
              dragOrientedCoords: { top: 0, left: 0 },
            }),
            v(this, "state", {
              lockExtras: !1,
              operation: null,
              operationStarted: !1,
              anchorTopOverride: void 0,
              anchorLeftOverride: void 0,
            }),
            v(this, "handleShowUI", (e) => {
              let { show: t } = e;
              this.setLockExtras(t);
            }),
            v(this, "handleMouseDown", (e) => {
              e.stopPropagation();
              let { dragAnywhere: t } = this.props,
                { current: n } = this.ref;
              null != n &&
                e.button === p.AeJ.PRIMARY &&
                t &&
                this.handleOperationStart("MOVE", e.clientX, e.clientY);
            }),
            v(this, "handleMouseMove", (e) => {
              e.preventDefault(), e.stopPropagation();
              let { clientX: t, clientY: n } = e,
                {
                  dragState: { startX: i, startY: l },
                  state: { operation: o, operationStarted: r },
                } = this;
              if (!(null == o || (!r && 3 > g(i, l, t, n))))
                "MOVE" === o
                  ? this.handleDragMove(t, n)
                  : E.has(o) && this.handleResizeMove(t, n);
            }),
            v(this, "handleOperationStart", (e, t, n) => {
              let {
                ref: { current: i },
                props: {
                  targetWindow: l,
                  active: o,
                  container: { maxX: r, maxY: s },
                },
              } = this;
              if (null == i || !o) return;
              let { width: a, height: u } = S(i, this.size),
                d = (0, f.PY)(this.anchor, r, s, a, u);
              if ("MOVE" === e) {
                let { x: e, y: i } = (function (e) {
                  let { top: t, left: n } = e;
                  return { x: n, y: t };
                })(d);
                this.dragState = {
                  ...this.dragState,
                  startX: t,
                  startY: n,
                  offsetX: t - e,
                  offsetY: n - i,
                };
              } else {
                let i = I(e, d);
                this.setDOMPositions(i),
                  (this.dragState = {
                    ...this.dragState,
                    startX: t,
                    startY: n,
                    offsetWidth: a,
                    offsetHeight: u,
                    dragOrientedCoords: i,
                  });
              }
              this.setState({ operation: e, operationStarted: !1 }, () => {
                l.addEventListener("mousemove", this.handleMouseMove),
                  l.addEventListener("mouseup", this.handleOperationEnd);
              });
            }),
            v(this, "handleOperationEnd", () => {
              let { operation: e, operationStarted: t } = this.state,
                { targetWindow: n, onDragEnd: i } = this.props;
              n.removeEventListener("mousemove", this.handleMouseMove),
                n.removeEventListener("mouseup", this.handleOperationEnd);
              let l = t
                ? () => {
                    let { onUpdate: t, id: n } = this.props;
                    t(
                      e,
                      n,
                      this.anchor,
                      this.size,
                      S(this.ref.current, this.size),
                    );
                  }
                : void 0;
              if (t) {
                let { maxX: e, maxY: t } = this.props.container,
                  { width: n, height: l } = S(this.ref.current, this.size),
                  o = (0, f.PY)(this.anchor, e, t, n, l),
                  r = (0, f.R)(o);
                this.setDOMPositions(r),
                  this.setDOMSize({ width: n, height: l }),
                  null != i && i();
              }
              this.setState({ operation: null, operationStarted: !1 }, l);
            }),
            v(this, "setLockExtras", (e) => {
              this.setState({ lockExtras: e });
            }),
            (this.anchor = C(e.anchor)),
            (this.size = Z(e.size, e.minSize.width, e.minSize.height));
        }
      }
      v(O, "Operations", i);
    },
    350663: function (e, t, n) {
      n.d(t, {
        C: function () {
          return i;
        },
      }),
        n(47120);
      var i,
        l,
        o = n(200651),
        r = n(192379),
        s = n(120356),
        a = n.n(s),
        u = n(399606),
        d = n(239091),
        c = n(40851),
        h = n(352978),
        f = n(27457),
        p = n(199902),
        m = n(592125),
        v = n(944486),
        g = n(981631),
        E = n(228680);
      let Z = new Set([g.jm8.ENDED, g.jm8.FAILED, g.jm8.PAUSED]);
      function C(e) {
        let { participant: t, width: i, locked: l, channel: r } = e,
          s = (0, c.bp)(),
          a = (0, u.e7)(
            [p.Z],
            () => p.Z.getActiveStreamForUser(t.user.id, t.stream.guildId),
            [t.user.id, t.stream.guildId],
          ),
          m = null != a && Z.has(a.state);
        return !(null != a) || m
          ? null
          : (0, o.jsx)("div", {
              className: E.tileContainer,
              children: (0, o.jsx)(f.ZP, {
                participant: t,
                width: i,
                className: E.tile,
                fit: h.L.COVER,
                inPopout: !0,
                inCall: !0,
                focused: l,
                forceIdle: l,
                channel: r,
                onContextMenu: l
                  ? void 0
                  : (e, t) => {
                      (0, d.jW)(t, async () => {
                        let { default: t } = await n
                          .e("22183")
                          .then(n.bind(n, 987281));
                        return (n) =>
                          (0, o.jsx)(t, {
                            ...n,
                            stream: e.stream,
                            exitFullscreen: () => {},
                            appContext: s,
                          });
                      });
                    },
              }),
            });
      }
      ((l = i || (i = {})).HORIZONTAL = "horizontal"),
        (l.VERTICAL = "vertical"),
        (t.Z = r.memo(function (e) {
          let {
              tileWidth: t,
              layout: n,
              locked: i,
              streamParticipants: l,
              participantsVersion: r,
            } = e,
            s = (0, u.e7)([v.Z], () => v.Z.getVoiceChannelId()),
            d = (0, u.e7)([m.Z], () => m.Z.getChannel(s), [s]);
          return (0, o.jsx)("div", {
            className: a()({
              [E.gridContainer]: !0,
              [E.vertical]: "vertical" === n,
              [E.horizontal]: "horizontal" === n,
            }),
            children:
              null == d
                ? []
                : l.map((e) =>
                    (0, o.jsx)(
                      C,
                      { participant: e, width: t, locked: i, channel: d },
                      e.user.id,
                    ),
                  ),
          });
        }));
    },
    761374: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return E;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        o = n(442837),
        r = n(765250),
        s = n(358221),
        a = n(569545),
        u = n(199902),
        d = n(314897),
        c = n(592125),
        h = n(944486),
        f = n(350663),
        p = n(388627),
        m = n(666540);
      let v = [];
      function g(e, t, n, i) {
        let l = (i - 1) * 12;
        return e === f.C.HORIZONTAL
          ? Math.min(Math.max((t - l) / i, 256), Math.max((16 * n) / 9, 256))
          : Math.min(Math.max(t, 256), Math.max((((n - l) / i) * 16) / 9, 256));
      }
      function E(e) {
        var t;
        let {
            id: n,
            size: E,
            locked: Z,
            padding: C,
            borderWidth: x,
            opacity: S,
            horizontal: I,
          } = e,
          _ = 2 * C + 2 * x;
        let { width: O, height: N } = {
            width: "number" == typeof (t = E).width ? t.width : 256,
            height: "number" == typeof t.height ? t.height : 144,
          },
          y = (0, o.e7)([h.Z], () => h.Z.getVoiceChannelId()),
          T = (0, o.e7)([c.Z], () => c.Z.getChannel(y)),
          j = (0, o.e7)([d.default], () => d.default.getId()),
          { participantsVersion: b, streamParticipants: L } = (0, o.e7)(
            [u.Z, s.Z],
            () => {
              if (null == y)
                return { streamParticipants: v, participantsVersion: -1 };
              let e = new Set(
                  u.Z.getAllActiveStreamsForChannel(y).map((e) => (0, a.V9)(e)),
                ),
                t = s.Z.getStreamParticipants(y).filter(
                  (t) => t.user.id !== j && e.has((0, a.V9)(t.stream)),
                );
              return (
                t.sort((e, t) =>
                  e.user.username.localeCompare(t.user.username),
                ),
                {
                  streamParticipants: t,
                  participantsVersion: s.Z.getParticipantsVersion(y),
                }
              );
            },
            [y, j],
            p.yp,
          ),
          R = L.length,
          w = null == T || 0 === R,
          k = I ? f.C.HORIZONTAL : f.C.VERTICAL,
          { tileWidth: A } = (function (e, t, n, i, o) {
            let r = (function (e, t, n, i) {
                let l = g(f.C.HORIZONTAL, e, t, n),
                  o = g(f.C.VERTICAL, e, t, n);
                switch (i) {
                  case f.C.VERTICAL:
                    return o;
                  case f.C.HORIZONTAL:
                    return l;
                }
                let r = ((9 * o) / 16 + 12) * n - 12;
                return e > (16 * t) / 9
                  ? l
                  : r <= t
                    ? o
                    : (9 * l) / 16 <= t
                      ? l
                      : o;
              })(n, i, t, o),
              s = g(f.C.VERTICAL, n, i, t),
              a = null != o ? o : r === s ? f.C.VERTICAL : f.C.HORIZONTAL,
              [u, d] = l.useState(r);
            return (
              l.useEffect(() => {
                !e && d(r);
              }, [e, r]),
              { layout: a, tileWidth: u }
            );
          })(!1, R, O - _, N - _, k),
          M = {
            id: n,
            width: O,
            height: N,
            sizeOffset: _,
            layout: k,
            padding: C,
            participants: L.length,
          },
          z = l.useRef(M);
        return (l.useEffect(() => void (z.current = M)),
        l.useEffect(() => {
          let {
            id: e,
            width: t,
            height: n,
            sizeOffset: i,
            layout: l,
            padding: o,
          } = z.current;
          if (0 === L.length) {
            (256 !== t || 144 !== n) &&
              (0, r.nv)({
                widgetId: e,
                size: { fixed: !0, width: 256, height: 144 },
              });
            return;
          }
          if (l === f.C.HORIZONTAL) {
            let t = (16 / 9) * (n - i);
            (0, r.nv)({
              widgetId: e,
              size: {
                fixed: !0,
                height: n,
                width: t * L.length + o * (L.length - 1) + i,
              },
            });
          } else {
            let n = (9 / 16) * (t - i);
            (0, r.nv)({
              widgetId: e,
              size: {
                fixed: !0,
                width: t,
                height: n * L.length + o * (L.length - 1) + i,
              },
            });
          }
        }, [L.length]),
        l.useEffect(() => {
          if (z.current.participants <= 1) return;
          let {
            id: e,
            width: t,
            height: n,
            sizeOffset: i,
            padding: l,
            participants: o,
          } = z.current;
          if (k === f.C.HORIZONTAL) {
            let n = t - i;
            (0, r.nv)({
              widgetId: e,
              size: {
                fixed: !0,
                width: n * o + l * (o - 1) + i,
                height: (9 / 16) * n + i,
              },
            });
          } else {
            let t = n - i;
            (0, r.nv)({
              widgetId: e,
              size: {
                fixed: !0,
                width: (16 / 9) * t + i,
                height: t * o + l * (o - 1) + i,
              },
            });
          }
        }, [k]),
        l.useEffect(
          () => () => {
            (0, r.nv)({
              widgetId: n,
              size: { fixed: !0, width: 256, height: 144 },
            });
          },
          [n],
        ),
        w && Z)
          ? null
          : (0, i.jsx)("div", {
              className: m.goLiveGridContainer,
              style: { opacity: S },
              children: (0, i.jsx)(f.Z, {
                tileWidth: A,
                locked: Z,
                layout: k,
                streamParticipants: L,
                participantsVersion: b,
              }),
            });
      }
    },
    915614: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        o = n.n(l),
        r = n(481060),
        s = n(809357),
        a = n(163752);
      function u(e) {
        let { onClick: t, keybind: n, className: l, IconComponent: u } = e,
          d = (0, s.o)();
        return (0, i.jsxs)("div", {
          className: o()(a.buttonContainer, l),
          children: [
            (0, i.jsx)(r.Clickable, {
              className: a.button,
              onClick: t,
              "aria-hidden": !0,
              children: (0, i.jsx)(u, {
                size: "md",
                color: "currentColor",
                "aria-hidden": !0,
              }),
            }),
            null != n && d
              ? (0, i.jsx)(r.Text, {
                  className: o()(a.keybind),
                  "aria-hidden": !0,
                  variant: "text-xxs/bold",
                  color: "interactive-normal",
                  children: n,
                })
              : null,
          ],
        });
      }
    },
    44359: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        o = n.n(l),
        r = n(256403);
      function s(e) {
        let { keybind: t, className: n } = e;
        return (0, i.jsx)(i.Fragment, {
          children: t.map((e, t) =>
            (0, i.jsx)("span", { className: o()(r.key, n), children: e }, t),
          ),
        });
      }
    },
    554370: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return ei;
        },
      }),
        n(653041),
        n(47120);
      var i = n(200651),
        l = n(192379),
        o = n(120356),
        r = n.n(o),
        s = n(442837),
        a = n(952265),
        u = n(481060),
        d = n(239091),
        c = n(13245),
        h = n(100527),
        f = n(906732),
        p = n(146282),
        m = n(70097),
        v = n(567409),
        g = n(74299),
        E = n(199902),
        Z = n(592125),
        C = n(430824),
        x = n(131951),
        S = n(944486),
        I = n(574254),
        _ = n(556296),
        O = n(237997),
        N = n(451478),
        y = n(585483),
        T = n(358085),
        j = n(13140),
        b = n(145597),
        L = n(830917),
        R = n(86071),
        w = n(681603),
        k = n(915614),
        A = n(690336),
        M = n(333031),
        z = n(388627),
        D = n(319414),
        P = n(561064),
        V = n(987650),
        U = n(501787),
        W = n(981631),
        F = n(206583),
        H = n(388032),
        Y = n(167566);
      let G = !T.isPlatformEmbedded && !1,
        B = G
          ? (0, i.jsx)(m.Z, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: Y.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0,
            })
          : null,
        K = null;
      function Q(e) {
        e.preventDefault();
      }
      function X(e) {
        (0, d.jW)(e, async () => {
          let { default: e } = await n.e("17610").then(n.bind(n, 385620));
          return (t) =>
            (0, i.jsx)(e, {
              ...t,
              layoutId: U.OVERLAY_V3_LAYOUT_ID,
              version: 1,
            });
        });
      }
      let J = l.memo(function (e) {
          let { keybind: t, onClick: n, locked: l } = e;
          return (0, i.jsx)(u.Clickable, {
            className: r()(Y.overlayBackground, {
              [Y.overlayActive]: !l,
              [Y.overlayLocked]: l,
            }),
            onMouseDown: (e) => {
              let { currentTarget: t, target: i, button: l } = e;
              l === W.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: X,
            children: l
              ? null
              : (0, i.jsx)(M.Z, {
                  className: Y.closeContainer,
                  children: (0, i.jsx)(k.Z, {
                    keybind: t,
                    onClick: n,
                    IconComponent: u.XLargeIcon,
                  }),
                }),
          });
        }),
        q = l.memo(function (e) {
          let { locked: t, focused: n } = e;
          return t && n
            ? (0, i.jsx)(M.Z, {
                className: Y.closeContainer,
                children: (0, i.jsx)(k.Z, {
                  onClick: () => c.Z.setInputLocked(!1, (0, b.QF)()),
                  IconComponent: u.LockUnlockedIcon,
                }),
              })
            : null;
        });
      function $() {
        if (null != I.Z.getContextMenu()) {
          (0, d.Zy)();
          return;
        }
        c.Z.setInputLocked(!0, (0, b.QF)());
      }
      function ee() {
        c.Z.setFocusedPID(b.Js);
      }
      function et() {
        c.Z.setFocusedPID(null);
      }
      function en(e) {
        let t = O.Z.isLocked((0, b.QF)());
        "alt" === e.key.toLowerCase() &&
          !t &&
          ("keyup" === e.type.toLowerCase()
            ? y.S.dispatch(W.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 })
            : "keydown" === e.type.toLowerCase() &&
              y.S.dispatch(W.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
      }
      function ei(e) {
        var t, n;
        let { isEmbeddedActivity: o } = e,
          d = (0, P.Z)(),
          {
            locked: m,
            focused: I,
            incompatibleApp: y,
            hasValidResolution: T,
            hasZeroSizeDimension: k,
            keybind: M,
          } = (0, s.cj)([O.Z, N.Z, _.Z], () => {
            let e = N.Z.windowSize((0, L.ZY)(d)),
              t = _.Z.getOverlayKeybind();
            return {
              locked: O.Z.isLocked((0, b.QF)()),
              focused: O.Z.isFocused((0, b.QF)()),
              incompatibleApp: O.Z.incompatibleApp,
              hasValidResolution: (0, b.Te)(e),
              hasZeroSizeDimension: 0 === e.height || 0 === e.width,
              keybind: null != t ? (0, j.BB)(t.shortcut, !0) : "???",
            };
          }),
          { analyticsLocations: U } = (0, f.ZP)(h.Z.OVERLAY);
        return (
          !(function (e, t) {
            let n = l.useRef({ mount: e, unmount: t });
            l.useEffect(() => void (n.current = { mount: e, unmount: t })),
              l.useEffect(
                () => (
                  n.current.mount(),
                  () => {
                    n.current.unmount();
                  }
                ),
                [],
              );
          })(
            () => {
              c.Z.overlayReady((0, b.QF)()),
                d.addEventListener("keydown", en),
                d.addEventListener("keyup", en),
                G &&
                  (d.document.hasFocus() && c.Z.setFocusedPID(b.Js),
                  d.addEventListener("focus", ee),
                  d.addEventListener("blur", et));
            },
            () => {
              d.removeEventListener("keydown", en),
                d.removeEventListener("keyup", en),
                G &&
                  (d.removeEventListener("focus", ee),
                  d.removeEventListener("blur", et));
            },
          ),
          !(function () {
            let e = l.useRef(!1),
              t = (0, z.pL)(),
              n = S.Z.getVoiceChannelId(),
              i = Z.Z.getChannel(n),
              o = null != i ? C.Z.getGuild(i.guild_id) : null,
              r = null != E.Z.getCurrentUserActiveStream(),
              a = null != n,
              u = (0, g.Z)(x.Z) && !r && null != t,
              d = a && null != o && null != n,
              h = (0, v.Ns)(null == t ? void 0 : t.id),
              f = (0, s.e7)(
                [p.Z],
                () => null != p.Z.getLastFeedFetchDate(F.YN.GAME_PROFILE_FEED),
              );
            l.useEffect(() => {
              if (!f || e.current) return;
              (e.current = !0),
                c.Z.track(W.rMx.OVERLAY_INITIALIZED, {
                  voice_widget_connected: a,
                  text_widget_connected: !1,
                });
              let i = [{ type: V.nc.WELCOME }];
              if (
                (u && d
                  ? i.push({
                      type: V.nc.GO_LIVE_VOICE,
                      game: t,
                      voiceChannelId: n,
                      voiceGuild: o,
                    })
                  : u && i.push({ type: V.nc.GO_LIVE_NON_VOICE, game: t }),
                h.length > 0)
              ) {
                let { enabled: e } = R.Z.getCurrentConfig(
                  { location: "Overlay" },
                  { autoTrackExposure: !0 },
                );
                e && i.push({ type: V.nc.CONTENT_INVENTORY, entries: h });
              }
              c.Z.overlayMounted(...i);
            }, [f, h, a, u, d, t, n, o]);
          })(),
          (t = m),
          (n = d),
          l.useEffect(() => {
            if (t) {
              if (
                ((0, a.Ay)(u.POPOUT_MODAL_CONTEXT),
                n.addEventListener("contextmenu", Q, !1),
                null != K)
              ) {
                let e = Date.now() - K;
                c.Z.track(W.rMx.OVERLAY_LOCKED, { unlocked_duration: e }),
                  (K = null);
              }
              return () => {
                n.removeEventListener("contextmenu", Q, !1);
              };
            }
            n.removeEventListener("contextmenu", Q, !1),
              null == K &&
                ((K = Date.now()), c.Z.track(W.rMx.OVERLAY_UNLOCKED));
          }, [t, n]),
          (0, i.jsx)(f.Gt, {
            value: U,
            children: (0, i.jsx)(u.RedesignIconContextProvider, {
              children:
                k || y
                  ? null
                  : (0, i.jsx)(u.ThemeProvider, {
                      theme: W.BRd.DARK,
                      children: (e) =>
                        (0, i.jsxs)("div", {
                          className: r()(Y.overlay, e),
                          children: [
                            !o && B,
                            (0, i.jsx)(J, {
                              locked: m,
                              keybind: M,
                              onClick: $,
                            }),
                            T
                              ? (0, i.jsx)(A.Z, {
                                  className: r()({
                                    [Y.layoutLocked]: m,
                                    [Y.layoutUnlocked]: !m,
                                  }),
                                })
                              : m
                                ? null
                                : (0, i.jsx)("div", {
                                    className: Y.invalidContainer,
                                    children: (0, i.jsx)("div", {
                                      className: Y.inactiveContainer,
                                      children: H.intl.format(H.t.ketnW1, b.FW),
                                    }),
                                  }),
                            (0, i.jsx)(D.Z, {}),
                            !o && G && (0, i.jsx)(q, { locked: m, focused: I }),
                            (0, i.jsx)(w.Z, {}),
                          ],
                        }),
                    }),
            }),
          })
        );
      }
    },
    690336: function (e, t, n) {
      n(653041), n(47120);
      var i = n(200651),
        l = n(192379),
        o = n(442837),
        r = n(481060),
        s = n(355863),
        a = n(451478),
        u = n(830917),
        d = n(388627),
        c = n(892127),
        h = n(84346),
        f = n(561064),
        p = n(501787);
      function m(e) {
        return e.widget.id;
      }
      function v(e, t, n, l) {
        return n === r.TransitionStates.YEETED
          ? null
          : (0, i.jsx)(c.Z, { ...t, transitionState: n, cleanUp: l }, e);
      }
      let g = [];
      t.Z = l.memo(function (e) {
        let { className: t } = e,
          n = (0, f.Z)(),
          c = (0, o.e7)([a.Z], () => a.Z.windowSize((0, u.ZY)(n))),
          E = (0, o.e7)(
            [s.Z],
            () => {
              let e = s.Z.getLayout(p.OVERLAY_V3_LAYOUT_ID);
              if (null == e) return g;
              let t = [];
              for (let n of e.widgets) {
                let e = s.Z.getWidget(n);
                if (null == e) continue;
                let i = h.Z[e.type];
                null != i && t.push({ widget: e, ...i });
              }
              return t;
            },
            [],
            d.HP,
          ),
          Z = l.useCallback(
            (e) => (0, i.jsx)("div", { className: t, style: c, children: e }),
            [t, c],
          );
        return (0, i.jsx)(r.TransitionGroup, {
          items: E,
          renderItem: v,
          getItemKey: m,
          wrapChildren: Z,
        });
      });
    },
    333031: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return S;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        o = n(120356),
        r = n.n(o),
        s = n(954955),
        a = n.n(s),
        u = n(772848),
        d = n(442837),
        c = n(902704),
        h = n(13245),
        f = n(928518),
        p = n(358085),
        m = n(610394),
        v = n(561064),
        g = n(501787),
        E = n(608631);
      function Z(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function C(e, t) {
        return {
          name: e,
          left: Math.ceil(t.left),
          top: Math.ceil(t.top),
          right: Math.ceil(t.right),
          bottom: Math.ceil(t.bottom),
        };
      }
      let x = l.createContext(
        new (class e {
          observe(e) {
            var t;
            if (
              (null == this.resizeObserver &&
                (this.resizeObserver = new this.window.ResizeObserver(
                  this.handleResize,
                )),
              null == this.mutationObserver)
            ) {
              this.mutationObserver = new MutationObserver(
                this.handleMutations,
              );
              let e = f.Z.getWindow(g.OVERLAY_V3_KEY);
              null != e &&
                this.mutationObserver.observe(
                  null == e ? void 0 : e.document.body,
                  { subtree: !0, attributes: !0 },
                );
            }
            let n = this.zones.get(e);
            null != n && this.resizeObserver.unobserve(n.element);
            let i = e.getBoundingClientRect();
            this.zones.set(e, {
              element: e,
              zone: C(
                null !== (t = null == n ? void 0 : n.zone.name) && void 0 !== t
                  ? t
                  : (0, u.Z)(),
                i,
              ),
            }),
              this.elements.add(e),
              this.resizeObserver.observe(e),
              this.updateZones();
          }
          unobserve(e) {
            var t;
            null != this.zones.get(e) &&
              (null === (t = this.resizeObserver) ||
                void 0 === t ||
                t.unobserve(e),
              this.zones.delete(e),
              this.elements.delete(e),
              this.updateZones());
          }
          updateZones() {
            if (!p.isPlatformEmbedded) return;
            let e = f.Z.getWindow(g.OVERLAY_V3_KEY);
            null != e &&
              h.Z.setClickZones(
                Array.from(this.zones.values()).map((t) => {
                  let { zone: n } = t;
                  return {
                    name: n.name,
                    left: n.left / e.innerWidth,
                    top: n.top / e.innerHeight,
                    right: n.right / e.innerWidth,
                    bottom: n.bottom / e.innerHeight,
                  };
                }),
              );
          }
          cleanUp() {
            var e, t;
            this.globalUpdate.cancel(),
              this.zones.clear(),
              this.elements.clear(),
              null === (e = this.resizeObserver) ||
                void 0 === e ||
                e.disconnect(),
              null === (t = this.mutationObserver) ||
                void 0 === t ||
                t.disconnect(),
              this.updateZones();
          }
          constructor(e) {
            Z(this, "resizeObserver", void 0),
              Z(this, "mutationObserver", void 0),
              Z(this, "zones", new Map()),
              Z(this, "elements", new Set()),
              Z(this, "window", void 0),
              Z(this, "handleResize", () => {
                this.globalUpdate();
              }),
              Z(this, "handleMutations", () => {
                this.globalUpdate();
              }),
              Z(
                this,
                "globalUpdate",
                a()(
                  () => {
                    let e = !1;
                    for (let [t, n] of this.zones) {
                      let i = t.getBoundingClientRect(),
                        l = C(n.zone.name, i);
                      if (!(0, c.Z)(l, n.zone))
                        (e = !0),
                          (n = { element: n.element, zone: l }),
                          this.zones.set(t, n);
                    }
                    e && this.updateZones();
                  },
                  250,
                  { trailing: !0, maxWait: 1e3 },
                ),
              ),
              (this.window = e);
          }
        })((0, v.i)()),
      );
      function S(e) {
        let { observe: t = !0, className: n, children: o } = e,
          s = l.useContext(x),
          a = (0, d.e7)([m.Z], () => m.Z.clickZoneDebugMode),
          [{ refHandler: u, setObserve: c }] = l.useState(() => {
            let e = null;
            return {
              setObserve(t) {
                null != e && (t ? s.observe(e) : s.unobserve(e));
              },
              refHandler(t) {
                null != e && s.unobserve(e), (e = t);
              },
            };
          });
        return (
          l.useLayoutEffect(() => {
            c(t);
          }, [t, c]),
          (0, i.jsx)("div", {
            ref: u,
            className: r()(n, E.clickable, a && E.debugMode),
            "data-click-zone": !0,
            children: o,
          })
        );
      }
    },
    293224: function (e, t, n) {
      n.d(t, {
        L: function () {
          return ec;
        },
        N3: function () {
          return eo;
        },
        Ox: function () {
          return ei;
        },
        SE: function () {
          return el;
        },
        aG: function () {
          return es;
        },
        c_: function () {
          return ea;
        },
        sm: function () {
          return er;
        },
      });
      var i = n(200651),
        l = n(192379),
        o = n(120356),
        r = n.n(o),
        s = n(442837),
        a = n(685072),
        u = n(400354),
        d = n(652844),
        c = n(864094),
        h = n(582019),
        f = n(75735),
        p = n(481060),
        m = n(846027),
        v = n(239091),
        g = n(287734),
        E = n(40851),
        Z = n(100527),
        C = n(906732),
        x = n(571250),
        S = n(628581),
        I = n(659580),
        _ = n(793865),
        O = n(55311),
        N = n(575175),
        y = n(933557),
        T = n(471445),
        j = n(74299),
        b = n(803647),
        L = n(565138),
        R = n(917405),
        w = n(603074),
        k = n(879815),
        A = n(189771),
        M = n(294629),
        z = n(67844),
        D = n(544384),
        P = n(892807),
        V = n(560688),
        U = n(199902),
        W = n(592125),
        F = n(430824),
        H = n(131951),
        Y = n(19780),
        G = n(944486),
        B = n(594174),
        K = n(979651),
        Q = n(823379),
        X = n(388627),
        J = n(46145),
        q = n(981631),
        $ = n(388032),
        ee = n(725775);
      function et(e) {
        let t = l.useRef(null);
        return (
          l.useEffect(() => {
            if (e) {
              var n;
              null === (n = t.current) || void 0 === n || n.call(t),
                (t.current = null);
            }
          }, [e]),
          (e) => ((t.current = e), e)
        );
      }
      function en(e) {
        let {
          isToggled: t,
          disabled: n,
          cutoutIcon: l,
          icon: o,
          tooltip: s,
          defaultColor: a = p.Button.Colors.TRANSPARENT,
          highlightedColor: u = p.Button.Colors.WHITE,
          onClick: d,
          onCutoutClick: c,
          onMouseEnter: h,
          onMouseLeave: f,
          onContextMenu: m,
        } = e;
        return (0, i.jsx)(p.Tooltip, {
          text: s,
          "aria-label": !1,
          children: (e) => {
            let { onMouseEnter: s, onMouseLeave: v, ...g } = e;
            return (0, i.jsxs)(p.Button, {
              ...g,
              onClick: d,
              size: p.Button.Sizes.SMALL,
              color: t ? u : a,
              className: ee.button,
              disabled: n,
              onMouseEnter: (e) => {
                null == s || s(), null == h || h(e);
              },
              onMouseLeave: (e) => {
                null == v || v(), null == f || f(e);
              },
              onContextMenu: m,
              children: [
                o,
                null != l &&
                  (0, i.jsx)(p.Clickable, {
                    onClick: (e) => {
                      e.stopPropagation(),
                        e.preventDefault(),
                        null == c || c(e);
                    },
                    className: r()(
                      ee.cutoutContainer,
                      t && ee.toggledCutoutContainer,
                    ),
                    children: l,
                  }),
              ],
            });
          },
        });
      }
      function ei(e) {
        let { voiceChannel: t, locked: n } = e,
          { suppress: o, selfMute: r, mute: s } = (0, M.Z)(t),
          a = r || s || o,
          u = (0, S.Z)(r, s, o, !1),
          {
            Component: c,
            play: h,
            events: f,
          } = (0, d.O)(a ? "unmute" : "mute");
        l.useEffect(() => () => h(), [h, a]);
        let m = et(n);
        return (0, i.jsx)(p.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(I.default, {
              onClose: m(t),
              renderInputDevices: !0,
              renderOutputDevices: !0,
              renderInputModes: !0,
            });
          },
          align: "center",
          position: "top",
          animation: p.Popout.Animation.FADE,
          children: (e, t) => {
            let { onClick: n } = e,
              { isShown: l } = t;
            return (0, i.jsx)(en, {
              icon: (0, i.jsx)(c, { color: "currentColor", size: "sm" }),
              tooltip: u,
              isToggled: !a,
              onClick: () => (0, N.Z)(s, o, q.jXE.OVERLAY),
              onCutoutClick: n,
              onContextMenu: n,
              onMouseEnter: () => {
                f.onMouseEnter();
              },
              onMouseLeave: () => {
                f.onMouseLeave();
              },
              cutoutIcon: l
                ? (0, i.jsx)(p.ChevronSmallUpIcon, {
                    color: "currentColor",
                    size: "sm",
                  })
                : (0, i.jsx)(p.ChevronSmallDownIcon, {
                    color: "currentColor",
                    size: "sm",
                  }),
            });
          },
        });
      }
      function el(e) {
        let { voiceChannel: t } = e,
          { selfDeaf: o, deaf: r } = (0, k.Z)(t),
          s = o || r,
          {
            Component: a,
            play: d,
            events: { onMouseEnter: c, onMouseLeave: h },
          } = (0, u.l)(s ? "undeafen" : "deafen"),
          f = r ? p.HeadphonesDenyIcon : a,
          { analyticsLocations: m } = (0, C.ZP)(Z.Z.OVERLAY);
        return (
          l.useEffect(() => () => d(), [s, d]),
          (0, i.jsx)(en, {
            icon: (0, i.jsx)(f, { color: "currentColor", size: "sm" }),
            tooltip: (0, x.Z)(o, r, !1),
            isToggled: s,
            onClick: () => {
              (0, O.Z)(r, q.jXE.OVERLAY);
            },
            onCutoutClick: (e) => {
              (0, v.jW)(e, async () => {
                let { default: e } = await Promise.resolve().then(
                  n.bind(n, 659580),
                );
                return () =>
                  (0, i.jsx)(C.Gt, {
                    value: m,
                    children: (0, i.jsx)(e, {
                      onClose: v.Zy,
                      renderOutputDevices: !0,
                      renderOutputVolume: !0,
                    }),
                  });
              });
            },
            onMouseEnter: c,
            onMouseLeave: h,
          })
        );
      }
      function eo(e) {
        var t;
        let { voiceChannel: n, locked: o } = e,
          r = (0, s.e7)([H.Z], () => H.Z.isVideoEnabled()),
          a = (0, s.e7)([H.Z], () => Object.values(H.Z.getVideoDevices())[0]),
          u =
            null === (t = null == a ? void 0 : a.disabled) || void 0 === t || t,
          d = !1 === u,
          c = (0, A.Z)(n),
          h = (e) => {
            m.Z.setVideoEnabled(e);
          },
          v = () => {
            d ? h(!0) : (0, V.Z)();
          },
          g = u ? () => v() : () => h(!r),
          {
            Component: E,
            play: Z,
            events: { onMouseEnter: C, onMouseLeave: x },
          } = (0, f.o)(r ? "disable" : "enable"),
          S =
            null != n
              ? (0, z.X)({
                  enabled: r,
                  cameraUnavailable: u,
                  hasPermission: c,
                  channel: n,
                })
              : void 0;
        l.useEffect(() => () => Z(), [r, Z]);
        let I = et(o),
          O = null == n || !c;
        return (0, i.jsx)(p.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(_.Z, { onClose: I(t) });
          },
          align: "center",
          position: "top",
          animation: p.Popout.Animation.FADE,
          children: (e, t) => {
            let { onClick: n } = e,
              { isShown: l } = t;
            return (0, i.jsx)(en, {
              icon: (0, i.jsx)(E, { color: "currentColor", size: "sm" }),
              tooltip: S,
              onClick: g,
              isToggled: r,
              onCutoutClick: n,
              onContextMenu: n,
              onMouseEnter: C,
              onMouseLeave: x,
              cutoutIcon: O
                ? null
                : l
                  ? (0, i.jsx)(p.ChevronSmallUpIcon, {
                      color: "currentColor",
                      size: "sm",
                    })
                  : (0, i.jsx)(p.ChevronSmallDownIcon, {
                      color: "currentColor",
                      size: "sm",
                    }),
              disabled: O,
            });
          },
        });
      }
      function er(e) {
        let t,
          { voiceChannel: o, locked: r } = e,
          a = null == o ? void 0 : o.id,
          u = (0, s.e7)([B.default], () => B.default.getCurrentUser()),
          d = (0, A.Z)(o),
          h = (0, s.cj)([H.Z], () => (0, j.Z)(H.Z)),
          f = (0, s.e7)([U.Z], () => U.Z.getCurrentUserActiveStream()),
          m = (0, E.bp)(),
          v = null == o ? void 0 : o.getGuildId(),
          g = l.useCallback(() => {
            h &&
              null != a &&
              (0, p.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                  n.e("46746"),
                  n.e("66913"),
                ]).then(n.bind(n, 60594));
                return (t) =>
                  (0, i.jsx)(e, {
                    ...t,
                    selectSource: !1,
                    guildId: v,
                    analyticsLocation: q.Sbl.UNLOCKED_OVERLAY,
                  });
              });
          }, [h, v, a]),
          Z = null != f;
        if (Z) t = $.intl.string($.t.S5anIS);
        else if (null != o) {
          let e = (0, X.pL)();
          t = d
            ? null != e
              ? $.intl.format($.t.AB5gT0, { game: e.name })
              : $.intl.string($.t.FeUKeH)
            : $.intl.string($.t.uQn9Bw);
        }
        let C = () => {
            if (Z) return (0, b.Z)(f, !1);
            g();
          },
          {
            Component: x,
            events: { onMouseEnter: S, onMouseLeave: I },
            play: _,
          } = (0, c.P)(Z ? "disable" : "enable");
        l.useEffect(() => () => _(), [Z, _]);
        let O = et(r);
        return (0, i.jsx)(p.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return null != o
              ? (0, i.jsx)(D.Z, {
                  channel: o,
                  currentUser: u,
                  activeStreams: null != f ? [f] : [],
                  handleGoLive: g,
                  onClose: O(t),
                  appContext: m,
                  disableChangeWindows: !0,
                })
              : (0, i.jsx)(i.Fragment, {});
          },
          align: "center",
          position: "top",
          animation: p.Popout.Animation.FADE,
          children: (e, n) => {
            let { onClick: l } = e,
              { isShown: o } = n;
            return (0, i.jsx)(en, {
              icon: (0, i.jsx)(x, { color: "currentColor", size: "sm" }),
              tooltip: t,
              isToggled: Z,
              cutoutIcon:
                null != f
                  ? o
                    ? (0, i.jsx)(p.ChevronSmallUpIcon, {
                        color: "currentColor",
                        size: "sm",
                      })
                    : (0, i.jsx)(p.ChevronSmallDownIcon, {
                        color: "currentColor",
                        size: "sm",
                      })
                  : null,
              onClick: C,
              onCutoutClick: l,
              onContextMenu: l,
              onMouseEnter: S,
              onMouseLeave: I,
              disabled: !h || !d,
            });
          },
        });
      }
      function es(e) {
        var t;
        let { voiceChannel: l, locked: o } = e,
          r =
            null !== (t = null == l ? void 0 : l.getGuildId()) && void 0 !== t
              ? t
              : null,
          { mute: a, suppress: u } = (0, M.Z)(l),
          d = (0, s.e7)([H.Z], () => H.Z.isDeaf()),
          c = null == l || a || u || d;
        function f(e) {
          null != r &&
            (0, v.jW)(e, async () => {
              let { default: e } = await n.e("56049").then(n.bind(n, 338991));
              return (t) => (0, i.jsx)(e, { guildId: r, ...t });
            });
        }
        let {
            Component: m,
            events: { onClick: g, onMouseEnter: E, onMouseLeave: Z },
          } = (0, h.j)(),
          C = et(o);
        return (0, i.jsx)(p.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return c || null == l
              ? (0, i.jsx)(i.Fragment, {})
              : (0, i.jsx)(w.Z, {
                  guildId: r,
                  channel: l,
                  onClose: C(t),
                  analyticsSource: "action bar button",
                });
          },
          align: "center",
          position: "top",
          animation: p.Popout.Animation.FADE,
          children: (e, t) => {
            let { onClick: n } = e,
              { isShown: l } = t;
            return (0, i.jsx)(en, {
              icon: (0, i.jsx)(m, { color: "currentColor", size: "sm" }),
              tooltip: (function () {
                if (a) return $.intl.string($.t["Ox4/zc"]);
                if (u) return $.intl.string($.t["+YBKYG"]);
                if (d) return $.intl.string($.t.X1lQlp);
              })(),
              onClick: (e) => {
                g(), n(e);
              },
              onContextMenu: f,
              onMouseEnter: E,
              onMouseLeave: Z,
              isToggled: l,
              disabled: c,
            });
          },
        });
      }
      function ea(e) {
        let { voiceChannel: t, locked: n } = e,
          l = (0, s.e7)(
            [G.Z],
            () => G.Z.getVoiceChannelId() === (null == t ? void 0 : t.id),
          ),
          o = (0, s.Wu)([J.Z, W.Z], () =>
            J.Z.getChannelHistory()
              .map((e) => W.Z.getChannel(e))
              .filter(Q.lm),
          ),
          r = () => {
            l && g.default.disconnect();
          },
          u = (e) => {
            g.default.selectVoiceChannel(e.id);
          },
          {
            Component: d,
            events: { onMouseEnter: c, onMouseLeave: h },
          } = (0, a.K)(),
          f = et(n);
        return (0, i.jsx)(p.Popout, {
          renderPopout: (e) => {
            let { closePopout: n } = e;
            return o.length > 0
              ? (0, i.jsx)(P.Z, {
                  recentVoiceChannels: o,
                  currentVoiceChannel: t,
                  onClose: f(n),
                  onSelect: u,
                })
              : (0, i.jsx)(i.Fragment, {});
          },
          align: "center",
          position: "top",
          animation: p.Popout.Animation.FADE,
          children: (e, n) => {
            let { onClick: o } = e,
              { isShown: s } = n;
            return (0, i.jsx)(en, {
              icon: (0, i.jsx)(d, { color: "currentColor", size: "sm" }),
              tooltip:
                null != t
                  ? $.intl.string($.t["6vrfgo"])
                  : $.intl.string($.t.S0W8Z2),
              onClick: l ? r : o,
              defaultColor: l
                ? p.Button.Colors.RED
                : p.Button.Colors.TRANSPARENT,
              onMouseEnter: c,
              onMouseLeave: h,
              onContextMenu: o,
              isToggled: s,
            });
          },
        });
      }
      function eu(e) {
        let { voiceChannel: t } = e,
          n = (0, s.e7)([F.Z], () => F.Z.getGuild(t.getGuildId()), [t]);
        switch (!0) {
          case t.isGroupDM() || t.isDM():
          case t.isDM():
            return null;
          case null != n:
            return (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)("div", { className: ee.separatorDot }),
                (0, i.jsxs)("div", {
                  className: ee.guildIconContainer,
                  children: [
                    (0, i.jsx)(L.Z, {
                      guild: n,
                      size: L.Z.Sizes.SMOL,
                      className: ee.guildIcon,
                    }),
                    (0, i.jsx)(p.Text, {
                      tag: "div",
                      variant: "text-xs/semibold",
                      color: "text-primary",
                      children: n.name,
                    }),
                  ],
                }),
              ],
            });
          default:
            return null;
        }
      }
      function ed(e) {
        let { voiceChannel: t } = e,
          n = (0, T.KS)(t),
          l = (0, y.ZP)(t);
        return (0, i.jsxs)("div", {
          className: ee.voiceChannelNameContainer,
          children: [
            null != n &&
              (0, i.jsx)(p.Text, {
                tag: "div",
                color: "text-muted",
                variant: "text-xs/normal",
                className: ee.channelIcon,
                children: (0, i.jsx)(n, { size: "xs", color: "currentColor" }),
              }),
            (0, i.jsx)(p.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              className: ee.channelName,
              children: l,
            }),
          ],
        });
      }
      function ec(e) {
        let { voiceChannel: t } = e,
          n = null == t ? void 0 : t.id,
          l = (0, s.cj)([Y.Z], () => ({
            channelId: Y.Z.getChannelId(),
            quality: Y.Z.getQuality(),
            state: Y.Z.getState(),
            lastPing: Y.Z.getLastPing(),
          })),
          o = null != n,
          r = (0, s.e7)([K.Z], () => null != n && K.Z.hasVideo(n), [n]);
        return (
          o &&
          null != t &&
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(R.Z, { ...l, hasVideo: r }),
              (0, i.jsx)(eu, { voiceChannel: t }),
              (0, i.jsx)("div", { className: ee.separatorDot }),
              (0, i.jsx)(ed, { voiceChannel: t }),
            ],
          })
        );
      }
    },
    2923: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        o = n.n(l),
        r = n(442837),
        s = n(592125),
        a = n(944486),
        u = n(293224),
        d = n(201636);
      function c(e) {
        let { locked: t } = e,
          n = (0, r.e7)([a.Z], () => a.Z.getVoiceChannelId()),
          l = (0, r.e7)([s.Z], () => s.Z.getChannel(n)),
          c = null != l;
        return (0, i.jsxs)("div", {
          className: o()({ [d.panelContainer]: !0, [d.locked]: t }),
          children: [
            (0, i.jsxs)("div", {
              className: d.panelRow,
              children: [
                (0, i.jsx)(u.Ox, { voiceChannel: l, locked: t }),
                (0, i.jsx)(u.SE, { voiceChannel: l, locked: t }),
                (0, i.jsx)(u.N3, { voiceChannel: l, locked: t }),
                (0, i.jsx)("div", { className: d.separator }),
                (0, i.jsx)(u.sm, { voiceChannel: l, locked: t }),
                (0, i.jsx)(u.aG, { voiceChannel: l, locked: t }),
                (0, i.jsx)("div", { className: d.separator }),
                (0, i.jsx)(u.c_, { voiceChannel: l, locked: t }),
              ],
            }),
            c &&
              (0, i.jsx)("div", {
                className: d.panelRow,
                children: (0, i.jsx)(u.L, { voiceChannel: l, locked: t }),
              }),
          ],
        });
      }
    },
    319414: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      }),
        n(47120);
      var i = n(200651);
      n(192379);
      var l = n(442837),
        o = n(352527),
        r = n(183584),
        s = n(487029),
        a = n(592125),
        u = n(944486),
        d = n(554174),
        c = n(710111),
        h = n(714902);
      function f() {
        let [e, t] = (0, l.Wu)([o.Z], () => [o.Z.enabled, o.Z.keepOpen]),
          n = (0, l.e7)([u.Z], () => u.Z.getVoiceChannelId()),
          f = (0, l.e7)([a.Z], () => a.Z.getChannel(n), [n]),
          p = null == f ? void 0 : f.getGuildId();
        return e && null != f
          ? (0, i.jsx)("div", {
              className: h.container,
              children: (0, i.jsx)(s.Z, {
                width: c.FW.width,
                height: c.FW.height,
                guildId: p,
                channel: f,
                keepOpen: t,
                onClose: function () {
                  let e = (0, d.Z)();
                  null != e && (0, r.oZ)(e);
                },
                analyticsSource: "overlay",
              }),
            })
          : null;
      }
    },
    586742: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return I;
        },
      });
      var i = n(200651),
        l = n(192379),
        o = n(120356),
        r = n.n(o),
        s = n(442837),
        a = n(239091),
        u = n(765250),
        d = n(393238),
        c = n(358221),
        h = n(933557),
        f = n(352978),
        p = n(27457),
        m = n(796638),
        v = n(592125),
        g = n(944486),
        E = n(906037),
        Z = n(501787),
        C = n(65154),
        x = n(827202);
      function S(e) {
        let {
            context: t = C.Yn.DEFAULT,
            participants: o,
            locked: s,
            widget: u,
            channel: d,
            width: c,
            height: h,
            containerRef: m,
          } = e,
          v = (e, l) => {
            (0, a.jW)(l, async () => {
              let { default: l } = await Promise.all([
                n.e("79695"),
                n.e("69220"),
                n.e("351"),
              ]).then(n.bind(n, 881351));
              return (n) =>
                (0, i.jsx)(l, {
                  ...n,
                  user: e.user,
                  showMediaItems: !0,
                  mediaEngineContext: t,
                });
            });
          },
          g = o.length > 0 && null != t && null != d && (!s || u.pinned);
        l.useEffect(() => {
          (0, E.m3)(
            {
              locked: s,
              pinned: u.pinned,
              widget: u.type,
              isPreviewingInGame: !1,
            },
            g,
          );
        }, [s, u, g]);
        let Z = "boolean" != typeof u.meta.horizontal || u.meta.horizontal;
        return g
          ? (0, i.jsx)("div", {
              ref: m,
              className: r()({ [x.videoList]: !0, [x.vertical]: !Z }),
              style: { opacity: u.opacity },
              children: o.map((e) => {
                let { user: n } = e;
                return null == n || null == d || null == t
                  ? null
                  : (0, i.jsx)(
                      p.ZP,
                      {
                        participant: e,
                        width: c,
                        className: x.tile,
                        containerStyle: { width: c, height: h },
                        fit: f.L.COVER,
                        channel: d,
                        inPopout: !0,
                        inCall: !0,
                        noBorder: !0,
                        onContextMenu: s ? void 0 : v,
                        forceIdle: s,
                      },
                      n.id,
                    );
              }),
            })
          : null;
      }
      function I(e) {
        let t = (0, s.e7)([g.Z, v.Z], () =>
            v.Z.getChannel(g.Z.getVoiceChannelId()),
          ),
          n = (0, h.ZP)(t),
          o = (0, s.Wu)([c.Z], () =>
            null != t ? c.Z.getVideoParticipants(t.id) : [],
          ),
          r = (0, s.e7)([c.Z], () =>
            null != t ? c.Z.getParticipantsVersion(t.id) : 0,
          ),
          a =
            "boolean" != typeof e.widget.meta.horizontal ||
            e.widget.meta.horizontal,
          { width: f, height: p, ref: E } = (0, d.Z)(),
          { visibleParticipants: C, participantTileWidth: x } = (0, m.ZB)(
            a ? (null != f ? f : e.width) : null != p ? p : e.height,
            o,
            {
              tileWidth: Z.OVERLAY_TILE_WIDTH,
              tileMinWidth: Z.OVERLAY_TILE_MIN_WIDTH,
              tileMargin: Z.OVERLAY_TILE_MARGIN,
              limit: 8,
              cropSelfVideo: !0,
              version: r,
            },
          ),
          I = {
            id: e.widget.id,
            size: e.widget.size,
            containerWidth: e.width,
            containerHeight: e.height,
          },
          _ = l.useRef(I);
        return (
          l.useLayoutEffect(() => void (_.current = I)),
          l.useLayoutEffect(() => {
            let {
              size: e,
              id: t,
              containerWidth: n,
              containerHeight: i,
            } = _.current;
            ((a && e.height > e.width) || (!a && e.width > e.height)) &&
              (0, u.nv)({
                widgetId: t,
                size: { fixed: !0, width: i, height: n },
              });
          }, [a]),
          (0, i.jsx)(S, {
            ...e,
            channel: t,
            title: null != n ? n : "",
            participants: C,
            participantsVersion: r,
            width: a ? x : null != f ? f : e.width,
            height: a ? (null != p ? p : e.height) : x,
            containerRef: E,
          })
        );
      }
    },
    243487: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return V;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        o = n(120356),
        r = n.n(o),
        s = n(442837),
        a = n(481060),
        u = n(239091),
        d = n(765250),
        c = n(13245),
        h = n(872810),
        f = n(586902),
        p = n(835473),
        m = n(415635),
        v = n(933557),
        g = n(701362),
        E = n(552282),
        Z = n(565799),
        C = n(501655),
        x = n(597998),
        S = n(199902),
        I = n(314897),
        _ = n(592125),
        O = n(355863),
        N = n(131951),
        y = n(944486),
        T = n(938475),
        j = n(237997),
        b = n(136015),
        L = n(51144),
        R = n(145597),
        w = n(388627),
        k = n(981631),
        A = n(65154),
        M = n(882110);
      function z(e) {
        let { avatarSize: t, userId: n, channelId: l, guildId: o } = e,
          r = 2 * t,
          s = -(t / 2);
        return (0, i.jsx)("div", {
          className: M.effect,
          style: { top: s, left: s, width: r, height: r },
          children: (0, i.jsx)(m.Z, {
            userId: n,
            channelId: l,
            guildId: o,
            containerDimensions: { width: r, height: r },
          }),
        });
      }
      function D(e) {
        let {
            channel: t,
            flipped: n = !1,
            locked: o = !1,
            user: u,
            nick: d,
            displayNameMode: c,
            displayUserMode: p,
            size: m = k.ipw.LARGE,
            onClick: v,
            onContextMenu: E,
            context: Z,
            guildId: C,
            voiceState: _,
            showStreamPreview: O,
            onShowStreamPreview: y,
            onWatchStream: T,
          } = e,
          j = (0, s.e7)([I.default], () => I.default.getId() === u.id, [u.id]),
          [b, L, R] = (0, s.Wu)(
            [N.Z],
            () =>
              j
                ? [
                    !N.Z.isSupported() ||
                      N.Z.isSelfMute() ||
                      N.Z.isSelfMutedTemporarily(),
                    N.Z.isSelfDeaf(),
                    !1,
                  ]
                : [
                    !N.Z.isSupported() || N.Z.isLocalMute(u.id),
                    !1,
                    N.Z.isLocalVideoDisabled(u.id),
                  ],
            [j, u.id],
          ),
          w = (0, s.e7)([S.Z], () => S.Z.getCurrentUserActiveStream()),
          A = (0, s.Wu)([S.Z], () => (null != w ? S.Z.getViewerIds(w) : [])),
          D = (0, f.Z)({ userId: u.id, context: Z }),
          P = (0, s.e7)([S.Z], () => S.Z.getStreamForUser(u.id, C)),
          V = null != P,
          U = l.useMemo(
            () => null != w && w.ownerId !== u.id && A.includes(u.id),
            [w, u.id, A],
          ),
          W = l.useCallback(() => y(null), [y]),
          F = l.useCallback(
            () =>
              (0, i.jsx)(g.Z, {
                user: u,
                channel: t,
                onWatch: () => {
                  (0, h.rn)(P, { forceMultiple: !0, noFocus: !0 }), W(), T();
                },
                onAction: T,
                previewIsOpen: O,
                location: k.Sbl.UNLOCKED_OVERLAY,
                hideTip: !0,
              }),
            [u, t, P, O, W, T],
          );
        if (p === k.OYC.ONLY_WHILE_SPEAKING && o && !D) return null;
        let { mute: H, suppress: Y, deaf: G } = _,
          B = m === k.ipw.LARGE ? 32 : 24;
        return (0, i.jsxs)(a.Clickable, {
          className: r()(M.voiceUser, {
            [M.speaking]: D,
            [M.interactive]: !o,
            [M.flipped]: n,
          }),
          onClick: o ? void 0 : (e) => (null == v ? void 0 : v(e, u)),
          onContextMenu: o ? void 0 : (e) => (null == E ? void 0 : E(e, u)),
          onMouseEnter: () => y(u.id),
          onMouseLeave: W,
          children: [
            (0, i.jsx)(a.Avatar, {
              className: M.avatar,
              size:
                m === k.ipw.LARGE
                  ? a.AvatarSizes.SIZE_32
                  : a.AvatarSizes.SIZE_24,
              src: u.getAvatarURL(C, B),
              "aria-hidden": !0,
            }),
            (0, i.jsx)(z, {
              avatarSize: B,
              userId: u.id,
              channelId: t.id,
              guildId: t.getGuildId(),
            }),
            o && (c === k.wC$.NEVER || (!D && c === k.wC$.ONLY_WHILE_SPEAKING))
              ? null
              : (0, i.jsx)(a.Popout, {
                  position: "right",
                  renderPopout: F,
                  shouldShow: O,
                  onRequestClose: W,
                  spacing: 0,
                  children: () =>
                    (0, i.jsxs)(a.Clickable, {
                      className: M.username,
                      children: [
                        (0, i.jsx)(a.Text, {
                          variant: "text-xs/medium",
                          color: "text-normal",
                          children: d,
                        }),
                        (0, i.jsx)(x.nm, {
                          guildId: C,
                          user: u,
                          video: _.selfVideo,
                          isStreaming: V,
                          className: M.voiceIcons,
                          iconClassName: M.voiceIcon,
                          isWatching: U,
                          localMute: b && !j,
                          localVideoDisabled: R,
                          mute: H || b,
                          deaf: G || L,
                          serverMute: H || Y,
                          serverDeaf: G,
                          disabled: !1,
                        }),
                      ],
                    }),
                }),
          ],
        });
      }
      function P(e) {
        let {
            id: t,
            context: o = A.Yn.DEFAULT,
            channel: r,
            sortedVoiceStates: s,
            displayNameMode: a,
            displayUserMode: h,
            locked: f,
            pinned: p,
            isPreviewingInGame: m,
            anchorLeft: v,
            avatarSizeMode: g,
          } = e,
          [E, Z] = l.useState(null),
          C = (e, t) => {
            (0, u.jW)(e, async () => {
              let { default: e } = await Promise.all([
                n.e("79695"),
                n.e("69220"),
                n.e("351"),
              ]).then(n.bind(n, 881351));
              return (n) =>
                (0, i.jsx)(e, {
                  ...n,
                  user: t,
                  showMediaItems: !0,
                  mediaEngineContext: o,
                });
            });
          },
          x = s.length > 0 && null != o && null != r && (!f || p),
          S = l.useCallback(() => {
            var e, n;
            let i =
                null === (e = O.Z.getWidget(t)) || void 0 === e
                  ? void 0
                  : e.layoutId,
              l =
                null != i
                  ? null === (n = O.Z.getWidgetsForLayout(i)) || void 0 === n
                    ? void 0
                    : n.find((e) => e.type === k.Odu.GO_LIVE)
                  : null;
            null != l &&
              !l.pinned &&
              ((0, d.xh)(l.id),
              c.Z.track(k.rMx.OVERLAY_PIN_TOGGLED, {
                pinned: !0,
                guild_id: null == r ? void 0 : r.guild_id,
                channel_id: null == r ? void 0 : r.id,
                channel_type: null == r ? void 0 : r.type,
                widget_type: k.Odu.GO_LIVE,
              }));
          }, [r, t]);
        return x
          ? (0, i.jsx)(i.Fragment, {
              children: s.map((e) => {
                var t;
                let { user: n, voiceState: l, member: s } = e;
                return null == n
                  ? null
                  : (0, i.jsx)(
                      D,
                      {
                        guildId: null == r ? void 0 : r.guild_id,
                        user: n,
                        nick:
                          null !== (t = null == s ? void 0 : s.nick) &&
                          void 0 !== t
                            ? t
                            : L.ZP.getName(n),
                        flipped: !v,
                        voiceState: l,
                        displayNameMode: a,
                        displayUserMode: h,
                        size: g,
                        locked: f || m,
                        onContextMenu: C,
                        onClick: C,
                        context: o,
                        channel: r,
                        showStreamPreview: n.id === E,
                        onShowStreamPreview: Z,
                        onWatchStream: S,
                      },
                      n.id,
                    );
              }),
            })
          : null;
      }
      function V(e) {
        var t;
        let n = (0, s.e7)([y.Z, _.Z], () =>
            _.Z.getChannel(y.Z.getVoiceChannelId()),
          ),
          l = (0, v.ZP)(n),
          o = (function () {
            let [e] = (0, s.e7)(
              [T.ZP, Z.Z, y.Z, _.Z],
              () => {
                let e = _.Z.getChannel(y.Z.getVoiceChannelId());
                return null == e
                  ? [[], -1]
                  : e.isGuildStageVoice()
                    ? [
                        Z.Z.getMutableParticipants(e.id, C.pV.SPEAKER),
                        Z.Z.getParticipantsVersion(e.id),
                      ]
                    : [
                        T.ZP.getVoiceStatesForChannel(e),
                        T.ZP.getVoiceStateVersion(e.getGuildId()),
                      ];
              },
              [],
              b.Q,
            );
            return e;
          })(),
          r = (0, s.e7)([S.Z], () => S.Z.getStreamerActiveStreamMetadata()),
          a = (0, w.II)(),
          u = (0, p.q)(null == a ? void 0 : a.id),
          d = (0, s.cj)([S.Z, j.Z], () => {
            let e = S.Z.getCurrentUserActiveStream();
            return {
              displayUserMode: j.Z.getDisplayUserMode(),
              displayNameMode: j.Z.getDisplayNameMode(),
              avatarSizeMode: j.Z.getAvatarSizeMode(),
              streamApplication:
                (null == r ? void 0 : r.pid) === (0, R.QF)()
                  ? (0, E.Z)(a)
                  : null,
              stream: e,
            };
          });
        return (0, i.jsx)(P, {
          ...d,
          application: u,
          ...e,
          sortedVoiceStates: o,
          channel: n,
          title: null != l ? l : "",
          streamMetadata: r,
          streamApplication:
            null !== (t = d.streamApplication) && void 0 !== t
              ? t
              : { id: null, name: null == r ? void 0 : r.sourceName },
        });
      }
    },
    892127: function (e, t, n) {
      var i = n(200651),
        l = n(192379),
        o = n(120356),
        r = n.n(o),
        s = n(442837),
        a = n(765250),
        u = n(13245),
        d = n(355863),
        c = n(237997),
        h = n(451478),
        f = n(434529),
        p = n(145597),
        m = n(830917),
        v = n(353038),
        g = n(610394),
        E = n(561064),
        Z = n(981631),
        C = n(152397);
      t.Z = l.memo(function (e) {
        let {
            widget: t,
            renderWidget: n,
            renderTitle: o,
            renderButtons: x,
            resizeValidation: S,
          } = e,
          I = d.Z.getWidgetConfig(t.type),
          _ = (0, s.e7)([c.Z], () => c.Z.isLocked((0, p.QF)())),
          O = (0, E.Z)(),
          N = (0, s.e7)([h.Z], () => h.Z.windowSize((0, m.ZY)(O))),
          y = (0, E.Z)(),
          T = l.useCallback((e, t, n, i, l) => {
            let o = h.Z.windowSize((0, m.ZY)((0, E.i)())),
              r = (0, f.jL)(n, o),
              s = (0, f.Ox)(i, o);
            (0, a.Os)(t), (0, a.nv)({ widgetId: t, anchor: r, size: s });
            let c = e === v.B.MOVE,
              p = (0, f.PY)(n, o.width, o.height, l.width, l.height);
            u.Z.track(Z.rMx.OVERLAY_LAYOUT_UPDATED, {
              was_resized: !c,
              was_dragged: c,
              widget_type: d.Z.getWidgetType(t),
              window_width: o.width,
              window_height: o.height,
              widget_width: l.width,
              widget_height: l.height,
              widget_left: p.left,
              widget_top: p.top,
            });
          }, []),
          j = l.useCallback((e) => {
            (0, a.Os)(e);
          }, []),
          { id: b, pinned: L, zIndex: R, size: w, anchor: k } = t,
          A = (0, f.w_)(w, N),
          M = (0, f.KR)(k, N),
          { minSize: z, resizeX: D, resizeY: P, dragAnywhere: V } = I,
          U = L || !_,
          W = l.useMemo(
            () => ({ minX: 0, minY: 0, maxX: N.width, maxY: N.height }),
            [N],
          ),
          F = l.useCallback((e) => n({ ...e, widget: t }), [t, n]),
          H = l.useCallback(
            (e) =>
              null != o || null != x
                ? (0, i.jsxs)("div", {
                    className: C.extrasContainer,
                    children: [
                      null == o ? void 0 : o(t),
                      null == x ? void 0 : x(t, e),
                    ],
                  })
                : null,
            [t, o, x],
          ),
          Y = (0, s.e7)([g.Z], () => g.Z.renderDebugMode),
          G = l.useMemo(() => {
            if (null != S) return (e) => S({ ...e, widget: t });
          }, [S, t]);
        return (0, i.jsx)(v.Z, {
          className: r()({
            [C.debug]: Y,
            [C.debugUnpinned]: Y && !L,
            [C.debugPinned]: Y && L,
          }),
          id: b,
          size: A,
          anchor: M,
          container: W,
          minSize: z,
          hidden: !U,
          locked: _,
          resizeX: D,
          resizeY: P,
          style: { zIndex: R },
          dragAnywhere: V,
          active: !_,
          onUpdate: T,
          onClick: j,
          targetWindow: y,
          renderExtras: H,
          resizeValidation: G,
          children: F,
        });
      });
    },
    84346: function (e, t, n) {
      var i = n(200651),
        l = n(239091),
        o = n(603618),
        r = n(926086),
        s = n(353038),
        a = n(761374),
        u = n(2923),
        d = n(586742),
        c = n(243487),
        h = n(430561),
        f = n(134849),
        p = n(501787),
        m = n(981631),
        v = n(388032);
      let g = {
        [m.Odu.VIDEO]: {
          renderWidget(e) {
            let {
              widget: t,
              locked: n,
              size: l,
              padding: o,
              borderWidth: r,
            } = e;
            return (0, i.jsx)(d.Z, {
              id: t.id,
              locked: n,
              widget: t,
              height: "auto" === l.height ? 0 : l.height - 2 * o - 2 * r,
              width: "auto" === l.width ? 0 : l.width - 2 * o - 2 * r,
            });
          },
          renderTitle: () =>
            (0, i.jsx)(h.PI, { children: v.intl.string(v.t.UPvOiY) }),
          renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(h.ls, {
                  onClick: (o) => {
                    var r, s, a;
                    return (
                      (r = o),
                      (s = e),
                      (a = t),
                      void (0, l.jW)(r, async () => {
                        let { default: e } = await n
                          .e("26775")
                          .then(n.bind(n, 740579));
                        return (
                          a(!0),
                          (t) =>
                            (0, i.jsx)(e, {
                              ...t,
                              widget: s,
                              onClose: () => a(!1),
                            })
                        );
                      })
                    );
                  },
                }),
                (0, i.jsx)(h.RT, { id: e.id, pinned: e.pinned }),
              ],
            }),
          resizeValidation(e) {
            let { widget: t, computedSize: n, borderWidth: i, padding: l } = e;
            return "boolean" != typeof t.meta.horizontal || t.meta.horizontal
              ? {
                  width: Math.max(n.width, p.OVERLAY_TILE_WIDTH),
                  height: Math.min(
                    n.height,
                    2 * p.OVERLAY_TILE_MIN_WIDTH + 2 * i + 2 * l,
                  ),
                }
              : {
                  height: Math.max(n.height, p.OVERLAY_TILE_WIDTH),
                  width: Math.min(
                    n.width,
                    2 * p.OVERLAY_TILE_MIN_WIDTH + 2 * i + 2 * l,
                  ),
                };
          },
        },
        [m.Odu.VOICE_V3]: {
          renderWidget(e) {
            let { widget: t, anchorLeft: n, locked: l } = e;
            return (0, i.jsx)(c.Z, {
              anchorLeft: n,
              id: t.id,
              locked: l,
              pinned: t.pinned,
              widget: m.Odu.VOICE,
              isPreviewingInGame: !1,
            });
          },
          renderTitle: () =>
            (0, i.jsx)(h.PI, { children: v.intl.string(v.t.nFv3GR) }),
          renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(h.ls, {
                  onClick: (e) => {
                    var o, r;
                    return (
                      (o = e),
                      (r = t),
                      void (0, l.jW)(o, async () => {
                        let { default: e } = await n
                          .e("32382")
                          .then(n.bind(n, 955280));
                        return (
                          r(!0),
                          (t) => (0, i.jsx)(e, { ...t, onClose: () => r(!1) })
                        );
                      })
                    );
                  },
                }),
                (0, i.jsx)(h.RT, { id: e.id, pinned: e.pinned }),
              ],
            }),
        },
        [m.Odu.CLICK_ZONE_DEBUG]: {
          renderWidget(e) {
            let { widget: t, locked: n } = e;
            return (0, i.jsx)(r.Z, { id: t.id, locked: n, pinned: t.pinned });
          },
          renderTitle: () => (0, i.jsx)(h.PI, { children: "Click Zone Debug" }),
          renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(h.ls, {
                  onClick: (e) => {
                    var o, r;
                    return (
                      (o = e),
                      (r = t),
                      void (0, l.jW)(o, async () => {
                        let { default: e } = await n
                          .e("38813")
                          .then(n.bind(n, 541501));
                        return (
                          r(!0),
                          (t) => (0, i.jsx)(e, { ...t, onClose: () => r(!1) })
                        );
                      })
                    );
                  },
                }),
                (0, i.jsx)(h.RT, { id: e.id, pinned: e.pinned }),
              ],
            }),
        },
        [m.Odu.GO_LIVE]: {
          renderWidget(e) {
            let { widget: t, locked: n, size: l, dragStart: o } = e;
            return (0, i.jsx)(a.Z, {
              id: t.id,
              locked: n,
              pinned: t.pinned,
              opacity: t.opacity,
              size: l,
              widget: m.Odu.GO_LIVE,
              isPreviewingInGame: !1,
              dragStart: o,
              horizontal:
                "boolean" == typeof t.meta.horizontal && t.meta.horizontal,
              padding: 8,
              borderWidth: 2,
            });
          },
          renderTitle: () =>
            (0, i.jsx)(h.PI, { children: v.intl.string(v.t["386XRk"]) }),
          renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(h.ls, {
                  onClick: (o) => {
                    var r, s, a;
                    return (
                      (r = o),
                      (s = e),
                      (a = t),
                      void (0, l.jW)(r, async () => {
                        let { default: e } = await n
                          .e("34684")
                          .then(n.bind(n, 68738));
                        return (
                          a(!0),
                          (t) =>
                            (0, i.jsx)(e, {
                              ...t,
                              widget: s,
                              onClose: () => a(!1),
                            })
                        );
                      })
                    );
                  },
                }),
                (0, i.jsx)(h.RT, { id: e.id, pinned: e.pinned }),
              ],
            }),
          resizeValidation(e) {
            let {
                operation: t,
                computedSize: n,
                originSize: i,
                borderWidth: l,
                padding: o,
                containerSpecs: r,
              } = e,
              a = 2 * l + 2 * o,
              u = i.width - a,
              d = i.height - a,
              c = u / d,
              h = d / u,
              f = (() => {
                switch (t) {
                  case s.B.RESIZE_NORTH:
                  case s.B.RESIZE_SOUTH:
                    return {
                      height: n.height,
                      width: Math.round((n.height - a) * c + a),
                    };
                  default:
                    return {
                      width: n.width,
                      height: Math.round((n.width - a) * h + a),
                    };
                }
              })();
            return (
              f.width > r.maxX &&
                ((f.width = r.maxX), (f.height = (r.maxX - a) * h + a)),
              f.height > r.maxY &&
                ((f.height = r.maxY), (f.width = (r.maxY - a) * c + a)),
              f
            );
          },
        },
        [m.Odu.QUICK_ACTIONS]: {
          renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(u.Z, { locked: t });
          },
        },
        [m.Odu.NOTIFICATIONS]: {
          renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(f.Z, { locked: t });
          },
          renderTitle: () =>
            (0, i.jsx)(h.PI, { children: v.intl.string(v.t.gnKWdX) }),
          renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(h.ls, {
                  onClick: (e) => {
                    var o, r;
                    return (
                      (o = e),
                      (r = t),
                      void (0, l.jW)(o, async () => {
                        let { default: e } = await n
                          .e("94706")
                          .then(n.bind(n, 168133));
                        return (
                          r(!0),
                          (t) => (0, i.jsx)(e, { ...t, onClose: () => r(!1) })
                        );
                      })
                    );
                  },
                }),
                (0, i.jsx)(h.RT, { id: e.id, pinned: e.pinned }),
              ],
            }),
        },
        [m.Odu.ACTIVITY]: {
          renderWidget: () => (0, i.jsx)(o.Z, {}),
          renderTitle: () =>
            (0, i.jsx)(h.PI, { children: v.intl.string(v.t["6gwSFR"]) }),
          renderButtons: () => null,
        },
      };
      t.Z = g;
    },
    430561: function (e, t, n) {
      n.d(t, {
        PI: function () {
          return c;
        },
        RT: function () {
          return f;
        },
        ls: function () {
          return h;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        o = n.n(l),
        r = n(692547),
        s = n(481060),
        a = n(765250),
        u = n(388032),
        d = n(122087);
      function c(e) {
        let { children: t } = e;
        return (0, i.jsx)("div", {
          className: d.titleWrapper,
          children: (0, i.jsx)(s.Text, {
            variant: "text-xs/semibold",
            color: "header-primary",
            children: t,
          }),
        });
      }
      function h(e) {
        let { onClick: t } = e,
          n = u.intl.string(u.t["3D5yo6"]);
        return (0, i.jsx)(s.Tooltip, {
          text: n,
          "aria-label": n,
          children: (e) =>
            (0, i.jsx)(s.Clickable, {
              ...e,
              className: d.button,
              onClick: t,
              children: (0, i.jsx)(s.SettingsIcon, {
                size: "xxs",
                color: r.Z.colors.INTERACTIVE_ACTIVE,
              }),
            }),
        });
      }
      function f(e) {
        let { id: t, pinned: n } = e,
          l = n ? u.intl.string(u.t.cSu80t) : u.intl.string(u.t.cM8Vnp);
        return (0, i.jsx)(s.Tooltip, {
          text: l,
          "aria-label": l,
          children: (e) =>
            (0, i.jsx)(s.Clickable, {
              ...e,
              className: o()(d.button, n && d.active),
              onClick: () => (0, a.xh)(t),
              children: (0, i.jsx)(s.PinUprightIcon, {
                size: "xxs",
                color: n ? r.Z.colors.BG_BRAND : r.Z.colors.INTERACTIVE_ACTIVE,
              }),
            }),
        });
      }
    },
    516542: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return v;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        o = n(904245),
        r = n(13245),
        s = n(655687),
        a = n(541716),
        u = n(752305),
        d = n(893718),
        c = n(957730),
        h = n(849522),
        f = n(145597),
        p = n(981631),
        m = n(640784);
      function v(e) {
        let { id: t, channel: n, onSend: v } = e,
          g = (0, h.Z)(),
          { placeholder: E, accessibilityLabel: Z } = (0, s.Z)(n),
          [C, x] = l.useState(() => (0, u.H2)()),
          { textValue: S, richValue: I } = C,
          [_, O] = l.useState(!1),
          N = l.useCallback(() => O(!0), []),
          y = l.useCallback(() => O(!1), []),
          T = l.useCallback((e, t, n) => {
            x({ textValue: t, richValue: n });
          }, []),
          j = l.useCallback(
            () =>
              S.length > g
                ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                : (o.Z.sendMessage(n.id, c.ZP.parse(n, S), !1),
                  r.Z.setInputLocked(!0, (0, f.QF)()),
                  r.Z.updateNotificationStatus(t, p._1z.DISMISSED),
                  null == v || v(S),
                  Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })),
            [S, g, n, t, v],
          );
        return (0, i.jsx)(d.Z, {
          innerClassName: m.textArea,
          onChange: T,
          placeholder: E,
          accessibilityLabel: Z,
          channel: n,
          textValue: S,
          richValue: I,
          type: a.I.OVERLAY_INLINE_REPLY,
          onBlur: y,
          onFocus: N,
          focused: _,
          onSubmit: j,
          autoCompletePosition: "bottom",
          disableThemedBackground: !0,
        });
      }
    },
    380736: function (e, t, n) {
      n.d(t, {
        Q: function () {
          return E;
        },
        Z: function () {
          return I;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        o = n(120356),
        r = n.n(o),
        s = n(752877),
        a = n(481060),
        u = n(13245),
        d = n(809357),
        c = n(691891),
        h = n(44359),
        f = n(333031),
        p = n(693091),
        m = n(981631),
        v = n(388032),
        g = n(176463);
      function E(e, t, n) {
        return (0, i.jsx)(Z, {
          keybind: e,
          message: t,
          messageWithoutKeybind: n,
        });
      }
      function Z(e) {
        let { keybind: t, message: n, messageWithoutKeybind: l } = e,
          o = (0, d.o)();
        return (0, i.jsx)(i.Fragment, {
          children: o
            ? v.intl.format(n, {
                keybind: t,
                keybindHook: (e) =>
                  (0, i.jsx)(h.Z, { keybind: t }, t.join("+")),
              })
            : l,
        });
      }
      function C(e) {
        e.currentTarget.scrollTo(0, 0);
      }
      let x = l.memo(function (e) {
        let {
            maxBodyLines: t,
            expand: n = !1,
            onNotificationShow: o,
            onDismissClick: u,
            onConfirmClick: d,
            onCancelClick: h,
            onNotificationClick: f,
            hint: p,
            cancelText: E,
            confirmText: Z,
            icon: x,
            body: S,
            title: I,
            renderFooter: _,
            contentOpacity: O,
            status: N,
            containerRef: y,
          } = e,
          [T, j] = l.useState(!1),
          b = n || T || N === m._1z.FOCUSED;
        l.useEffect(() => {
          null == o || o();
        }, [o]);
        let L = l.useCallback(
            (e) => {
              e.stopPropagation(), null == u || u(e);
            },
            [u],
          ),
          R = l.useCallback(
            (e) => {
              e.stopPropagation(), null == d || d(e);
            },
            [d],
          ),
          w = l.useCallback(
            (e) => {
              e.stopPropagation(), null == h || h(e);
            },
            [h],
          ),
          k = l.useCallback(() => {
            j(!0);
          }, []),
          A = l.useCallback(() => {
            j(!1);
          }, []);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("div", {
              className: g.overflowWrapper,
              onScroll: C,
              children: (0, i.jsx)(a.Clickable, {
                innerRef: y,
                ignoreKeyPress: !0,
                onMouseOver: k,
                onMouseLeave: A,
                onClick: f,
                className: r()(g.container, { [g.clickable]: null != f }),
                children: (function () {
                  let e = null == _ ? void 0 : _(b);
                  return (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)(s.animated.div, {
                        className: g.iconAndDetails,
                        style: { opacity: O },
                        children: [
                          null == x
                            ? null
                            : "string" == typeof x
                              ? (0, i.jsx)(a.Avatar, {
                                  src: x,
                                  size: a.AvatarSizes.SIZE_40,
                                  className: g.avatar,
                                  "aria-hidden": !0,
                                })
                              : (0, i.jsx)("div", {
                                  className: g.avatar,
                                  children: x,
                                }),
                          (0, i.jsxs)("div", {
                            className: g.details,
                            children: [
                              (0, i.jsx)(a.Text, {
                                color: "interactive-normal",
                                variant: "text-sm/semibold",
                                lineClamp: 2,
                                children: I,
                              }),
                              null != S
                                ? (0, i.jsx)(a.Text, {
                                    color: "interactive-normal",
                                    variant: "text-sm/normal",
                                    lineClamp:
                                      null != t ? t * (b ? 2 : 1) : void 0,
                                    children: S,
                                  })
                                : null,
                              (function () {
                                let e = "function" == typeof p ? p(b) : p;
                                return null != p
                                  ? (0, i.jsx)(a.Text, {
                                      className: g.hint,
                                      color: "text-muted",
                                      variant: "text-xxs/medium",
                                      children: e,
                                    })
                                  : null;
                              })(),
                              null == d && null == h
                                ? null
                                : (0, i.jsxs)("div", {
                                    className: g.buttonContainer,
                                    children: [
                                      null != d
                                        ? (0, i.jsx)(a.Button, {
                                            className: g.button,
                                            size: a.Button.Sizes.SMALL,
                                            color: a.Button.Colors.GREEN,
                                            onClick: R,
                                            children:
                                              null != Z
                                                ? Z
                                                : v.intl.string(v.t.BddRzc),
                                          })
                                        : null,
                                      null != h
                                        ? (0, i.jsx)(a.Button, {
                                            className: g.button,
                                            size: a.Button.Sizes.SMALL,
                                            look: a.Button.Looks.OUTLINED,
                                            color: a.Button.Colors.PRIMARY,
                                            onClick: w,
                                            children:
                                              null != E
                                                ? E
                                                : v.intl.string(v.t["ETE/oK"]),
                                          })
                                        : null,
                                    ],
                                  }),
                            ],
                          }),
                        ],
                      }),
                      null != e &&
                        (0, i.jsx)(a.Clickable, {
                          className: g.footer,
                          ignoreKeyPress: !0,
                          onClick: (e) => e.stopPropagation(),
                          children: e,
                        }),
                    ],
                  });
                })(),
              }),
            }),
            (0, i.jsx)(c.Z, {
              className: g.dismissButton,
              onDismiss: L,
              "aria-label": v.intl.string(v.t.LnEgqa),
            }),
          ],
        });
      });
      function S(e) {
        let {
          springs: { opacity: t, scale: n, transform: l, height: o },
          index: r,
          children: a,
          locked: u,
        } = e;
        return (0, i.jsx)(s.animated.div, {
          className: g.animationWrapper,
          style: {
            pointerEvents: u && 0 !== r ? "none" : "auto",
            zIndex: Math.max(5 - r, 0),
            opacity: t,
            transform: l.to((e) => "translate3d(0, ".concat(e, "px, 0)")),
            scale: n.to([0, 1], [0.7, 1]),
            height: o,
          },
          children: a,
        });
      }
      function I(e) {
        let {
            notification: t,
            index: n,
            locked: o,
            transitionState: r,
            cleanUp: s,
          } = e,
          {
            id: a,
            props: {
              onNotificationShow: d,
              onDismissClick: c,
              onNotificationClick: h,
              onConfirmClick: m,
              onCancelClick: v,
              renderFooter: E,
            },
          } = t,
          Z = l.useCallback(() => {
            d(a);
          }, [d, a]),
          C = l.useCallback(
            (e) => {
              u.Z.updateNotificationStatus(a), null == c || c(e, a);
            },
            [a, c],
          ),
          I = l.useCallback(
            (e) => {
              null == h || h(e, a);
            },
            [h, a],
          ),
          _ = l.useCallback(
            (e) => {
              null == m || m(e, a);
            },
            [m, a],
          ),
          O = l.useCallback(
            (e) => {
              null == v || v(e, a);
            },
            [v, a],
          ),
          N = l.useCallback((e) => (null == E ? void 0 : E(e, a)), [E, a]),
          {
            props: {
              onNotificationShow: y,
              onDismissClick: T,
              renderFooter: j,
              onNotificationClick: b,
              onConfirmClick: L,
              onCancelClick: R,
              ...w
            },
            status: k,
          } = t,
          { ref: A, springs: M } = (0, p.X4)(t.id, r, s);
        return (0, i.jsx)(S, {
          transitionState: r,
          springs: M,
          index: n,
          locked: o,
          children: (0, i.jsx)(f.Z, {
            observe: 0 === n,
            className: g.clickZone,
            children: (0, i.jsx)(x, {
              ...w,
              containerRef: A,
              notificationId: t.id,
              onNotificationShow: 0 === n ? Z : void 0,
              onDismissClick: C,
              onNotificationClick: null != h ? I : void 0,
              onConfirmClick: null != m ? _ : void 0,
              onCancelClick: null != v ? O : void 0,
              renderFooter: N,
              expand: !1,
              index: n,
              locked: o,
              status: k,
              contentOpacity: M.contentOpacity,
            }),
          }),
        });
      }
    },
    693091: function (e, t, n) {
      n.d(t, {
        AS: function () {
          return r;
        },
        S4: function () {
          return s;
        },
        X4: function () {
          return d;
        },
      }),
        n(47120);
      var i = n(192379),
        l = n(481060);
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class r {
        updateState(e, t) {
          this.items = e;
          let n = this.locked !== t;
          (this.locked = t), this.computeLayout(n);
        }
        initialize(e) {
          if (null == this.resizeObserver) {
            for (let [, { element: n }] of ((this.resizeObserver =
              new e.ResizeObserver(this.handleResize)),
            this.listeners)) {
              var t;
              null === (t = this.resizeObserver) ||
                void 0 === t ||
                t.observe(n);
            }
            this.queueCompute();
          }
        }
        cleanUp() {
          var e;
          null === (e = this.resizeObserver) || void 0 === e || e.disconnect(),
            (this.resizeObserver = void 0),
            this.listeners.clear();
        }
        queueCompute() {
          !this.queuedCompute &&
            ((this.queuedCompute = !0),
            Promise.resolve().then(() => this.computeLayout()));
        }
        computeLayout() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.queuedCompute = !1;
          let t = 0,
            n = 0;
          for (let i of this.items) {
            let l = this.listeners.get(i.notification.id);
            if (null == l) continue;
            let { offsetHeight: o } = l.element;
            (l.top !== t || l.height !== o || l.index !== n) && (e = !0),
              (l.top = t),
              (l.height = o),
              (l.index = n),
              0 === t &&
                (this.matchHeight !== o && (e = !0), (this.matchHeight = o)),
              (t += o + 8),
              n++;
          }
          e && this.broadcastLayoutUpdates();
        }
        broadcastLayoutUpdates() {
          for (let e of this.items) {
            let t = this.listeners.get(e.notification.id);
            null != t &&
              t.callback({
                locked: this.locked,
                matchHeight: this.matchHeight,
                height: t.height,
                top: t.top,
                index: t.index,
              });
          }
        }
        subscribe(e, t, n) {
          var i;
          this.listeners.set(e, {
            notificationId: e,
            callback: n,
            element: t,
            height: 0,
            top: 0,
            index: 0,
          }),
            null === (i = this.resizeObserver) || void 0 === i || i.observe(t),
            this.queueCompute();
        }
        unsubscribe(e) {
          var t;
          let n = this.listeners.get(e);
          null != n &&
            (null === (t = this.resizeObserver) ||
              void 0 === t ||
              t.unobserve(n.element),
            this.listeners.delete(e),
            this.queueCompute());
        }
        getLayoutSpecs(e) {
          return this.listeners.get(e);
        }
        constructor(e) {
          o(this, "resizeObserver", void 0),
            o(this, "listeners", new Map()),
            o(this, "queuedCompute", !1),
            o(this, "items", []),
            o(this, "matchHeight", 0),
            o(this, "locked", !0),
            o(this, "handleResize", (e) => {
              this.computeLayout();
            }),
            (this.locked = e);
        }
      }
      let s = i.createContext(new r(!0));
      function a(e, t, n) {
        return t && 0 !== e ? 20 * Math.max(e / 5, 0) : n;
      }
      let u = { mass: 0.8, friction: 25, tension: 320 };
      function d(e, t, n) {
        let [o, r] = (0, l.useSpring)(
            () => ({
              from: {
                opacity: 0,
                scale: 1,
                transform: 0,
                height: 0,
                contentOpacity: 1,
              },
            }),
            void 0,
            [],
          ),
          d = i.useRef(r),
          c = i.useContext(s),
          h = i.useMemo(() => {
            let t = !1;
            return (n) => {
              null == n
                ? c.unsubscribe(e)
                : c.subscribe(e, n, (e) => {
                    var n, i, l, o;
                    let {
                        locked: r,
                        matchHeight: s,
                        height: c,
                        top: h,
                        index: f,
                      } = e,
                      { current: p } = d;
                    let m = {
                      opacity:
                        ((n = f),
                        (i = r) && n > 4 ? 0 : i ? Math.min(1 - n / 4, 1) : 1),
                      scale: ((l = f), r ? Math.min(1 - l / 4, 1) : 1),
                      transform: a(f, r, h),
                      contentOpacity: ((o = f), r ? (o > 0 ? 0 : 1) : 1),
                      height: r ? s : c,
                    };
                    p({
                      from: t
                        ? void 0
                        : {
                            opacity: 0,
                            scale: 1.1,
                            transform: -((r ? s : c) * 1),
                            contentOpacity: 1,
                            height: r ? s : c,
                          },
                      to: m,
                      config: u,
                    }),
                      (t = !0);
                  });
            };
          }, [e, c]);
        return (
          i.useLayoutEffect(() => {
            if (t === l.TransitionStates.YEETED) {
              let t = c.getLayoutSpecs(e);
              if (null == t) {
                n();
                return;
              }
              d.current({
                to: {
                  scale: 0.8,
                  opacity: 0,
                  transform:
                    a(t.index, c.locked, t.top) + (c.locked ? 0 : t.height / 2),
                },
                config: u,
              }),
                setTimeout(n, 300);
            }
          }, [t, n, e, c]),
          { ref: h, springs: o }
        );
      }
    },
    134849: function (e, t, n) {
      n(653041), n(47120);
      var i = n(200651),
        l = n(192379),
        o = n(442837),
        r = n(481060),
        s = n(237997),
        a = n(388627),
        u = n(561064),
        d = n(380736),
        c = n(693091),
        h = n(371467),
        f = n(981631),
        p = n(109020);
      let m = [];
      function v(e) {
        return e.notification.id;
      }
      function g(e, t, n, l) {
        let { index: o, notification: r, locked: s } = t;
        return (0, i.jsx)(
          d.Z,
          {
            index: o,
            notification: r,
            locked: s,
            transitionState: n,
            cleanUp: l,
          },
          e,
        );
      }
      function E(e) {
        return (0, i.jsx)("div", { className: p.container, children: e });
      }
      let Z = (e) => l.useState(() => new c.AS(e))[0];
      t.Z = l.memo(function (e) {
        let { locked: t } = e,
          n = (0, o.e7)(
            [s.Z, h.Z],
            () => {
              if (s.Z.getNotificationPositionMode() === f._vf.DISABLED)
                return m;
              let e = [],
                n = 0;
              for (let i of h.Z.getNotifications()) {
                if (n > 4) break;
                (!t || i.status !== f._1z.TIMED_OUT) &&
                  (e.push({ index: n, locked: t, notification: i }), n++);
              }
              return e;
            },
            [t],
            a.E6,
          ),
          d = Z(t);
        return (
          l.useLayoutEffect(() => d.updateState(n, t)),
          l.useLayoutEffect(
            () => (d.initialize((0, u.i)()), () => d.cleanUp()),
            [d],
          ),
          (0, i.jsx)(c.S4.Provider, {
            value: d,
            children: (0, i.jsx)(r.TransitionGroup, {
              items: n,
              renderItem: g,
              getItemKey: v,
              wrapChildren: E,
            }),
          })
        );
      });
    },
    371467: function (e, t, n) {
      n(47120), n(733860), n(653041);
      var i,
        l,
        o,
        r,
        s,
        a,
        u,
        d,
        c = n(512722),
        h = n.n(c),
        f = n(772848),
        p = n(442837),
        m = n(570140),
        v = n(13245),
        g = n(435064),
        E = n(786761),
        Z = n(695346),
        C = n(314897),
        x = n(592125),
        S = n(375954),
        I = n(292959),
        _ = n(158776),
        O = n(885110),
        N = n(246946),
        y = n(594174),
        T = n(974180),
        j = n(237997),
        b = n(70956),
        L = n(150097),
        R = n(129724),
        w = n(388627),
        k = n(996050),
        A = n(609626),
        M = n(421824),
        z = n(777036),
        D = n(333727),
        P = n(585708),
        V = n(588909),
        U = n(981631),
        W = n(388032);
      ((r = i || (i = {}))[(r.GENERIC = 0)] = "GENERIC"),
        (r[(r.TEXT = 1)] = "TEXT"),
        (r[(r.INCOMING_CALL = 2)] = "INCOMING_CALL"),
        (r[(r.NUDGE = 3)] = "NUDGE"),
        ((s = l || (l = {}))[(s.NORMAL = 0)] = "NORMAL"),
        (s[(s.HIGH = 1)] = "HIGH"),
        (s[(s.URGENT = 2)] = "URGENT");
      let F = 5 * b.Z.Millis.SECOND,
        H = 8 * b.Z.Millis.SECOND,
        Y = 30 * b.Z.Millis.SECOND,
        G = 30 * b.Z.Millis.SECOND,
        B = Object.freeze({
          timestamp: 0,
          priority: 0,
          duration: F,
          expirationExternallyManaged: !1,
          type: 0,
        }),
        K = [],
        Q = !1,
        X = [];
      function J() {
        if (Q && null == K.find((e) => e.status === U._1z.FOCUSED))
          for (let e of ((Q = !1),
          (K = [...K, ...X]),
          (X = []),
          K.length > 40 && (K.length = 40),
          K))
            e.timer.start();
      }
      function q() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
        K.filter((e) => 1 === e.type && e.status === U._1z.TIMED_OUT)
          .sort((e, t) => t.timestamp - e.timestamp)
          .forEach((t, n) => {
            (n >= e || t.timestamp < Date.now() - Y) &&
              $(t.id, U._1z.DISMISSED);
          });
      }
      function $(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : U._1z.DISMISSED;
        if (null == e) return !1;
        let n = K.findIndex((t) => t.id === e);
        if (-1 === n) return !1;
        let i = K[n];
        if ((i.timer.stop(), (K = [...K]), t === U._1z.FOCUSED)) {
          let [e] = K.splice(n, 1);
          (e = { ...e, status: t }), K.unshift(e), (Q = !0);
          return;
        }
        t === U._1z.DISMISSED ? K.splice(n, 1) : (K[n] = { ...i, status: t }),
          J();
      }
      function ee(e) {
        let t = K.length,
          n =
            (K = K.filter((t) => 1 !== t.type || t.channelId !== e || !1))
              .length !== t;
        return n && J(), n;
      }
      function et(e) {
        let t = K.find((t) => 2 === t.type && t.channelId === e);
        return null != t ? t.id : null;
      }
      function en(e, t) {
        let n = { ...B, timestamp: Date.now(), ...t },
          i = (0, f.Z)(),
          l = !1,
          o = {
            id: i,
            status: U._1z.ACTIVE,
            timer: (function (e) {
              let t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n = arguments.length > 2 ? arguments[2] : void 0,
                i = -1;
              return {
                start() {
                  let l =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : t,
                    o = l ? U._1z.TIMED_OUT : U._1z.DISMISSED;
                  -1 === i &&
                    (i = setTimeout(
                      () => v.Z.updateNotificationStatus(e, o),
                      null != n ? n : F,
                    ));
                },
                stop() {
                  clearTimeout(i), (i = -1);
                },
              };
            })(i, n.expirationExternallyManaged, n.duration),
            props: {
              ...e,
              onNotificationShow: () => {
                var t;
                !l &&
                  ((l = !0),
                  null === (t = e.onNotificationShow) ||
                    void 0 === t ||
                    t.call(e, i));
              },
            },
            ...n,
          },
          r = Q ? X : [...K],
          s = r.findIndex((e) => e.priority <= n.priority);
        if ((-1 === s ? r.push(o) : r.splice(s, 0, o), r.length > 40)) {
          let e = r.pop();
          !Q && e.timer.stop();
        }
        return !Q && ((K = r), o.timer.start()), i;
      }
      function ei(e) {
        let { channelId: t, ringing: n } = e,
          i = et(t);
        if (!n.includes(C.default.getId())) return $(i);
        if (null != i) return !1;
        let l = x.Z.getChannel(t);
        if (
          null == l ||
          !l.isPrivate() ||
          O.Z.getStatus() === U.Skl.DND ||
          Z.QZ.getSetting()
        )
          return !1;
        let o = K.find(
          (e) =>
            1 === e.type && e.channelId === t && e.messageType === U.uaV.CALL,
        );
        null != o && $(o.id),
          en((0, z.Z)(l), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: l.id,
          });
      }
      class el extends (o = p.ZP.Store) {
        initialize() {
          this.waitFor(x.Z, y.default);
        }
        getNotifications() {
          return K;
        }
      }
      (d = "OverlayNotificationsStore"),
        (u = "displayName") in (a = el)
          ? Object.defineProperty(a, u, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[u] = d);
      let eo = new el(m.Z, {
        OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
          let { notificationId: t, status: n } = e;
          $(t, n);
        },
        OVERLAY_MOUNTED: function (e) {
          let { nudges: t } = e;
          q(0);
          let n = (0, V.Z)((0, w.pL)(), t);
          null != n && en(n, { priority: 2, type: 3, duration: H });
        },
        OVERLAY_SET_INPUT_LOCKED: function (e) {
          let { locked: t } = e;
          if (t) {
            for (let e of K)
              e.status === U._1z.FOCUSED && $(e.id, U._1z.ACTIVE);
            return !0;
          }
          for (let e of (q(), K))
            3 === e.type
              ? $(e.id, U._1z.DISMISSED)
              : e.status === U._1z.ACTIVE &&
                !e.expirationExternallyManaged &&
                (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
          if (K.length > 0) {
            var n;
            return $(
              null ===
                (n = K.filter((e) => 1 === e.type).sort(
                  (e, t) => t.timestamp - e.timestamp,
                )[0]) || void 0 === n
                ? void 0
                : n.id,
              U._1z.FOCUSED,
            );
          }
        },
        MESSAGE_CREATE: function (e) {
          var t, n, i, l;
          let { channelId: o, message: r } = e,
            s = x.Z.getChannel(o),
            a = y.default.getUser(
              null === (t = r.author) || void 0 === t ? void 0 : t.id,
            );
          if (null == s || null == a) return !1;
          if (
            (null === (n = r.activity) || void 0 === n ? void 0 : n.type) ===
              U.mFx.JOIN ||
            (null === (i = r.activity) || void 0 === i ? void 0 : i.type) ===
              U.mFx.JOIN_REQUEST
          ) {
            if (!(0, L.eF)(r, o, !0, !0)) return !1;
            let e = (function (e, t, n) {
              var i;
              let l, o;
              if (
                (h()(null != t.activity, "received null message activity"),
                n.id === C.default.getId())
              )
                return !1;
              let r = (0, w.pL)(),
                s =
                  null !== (i = null == r ? void 0 : r.altId) && void 0 !== i
                    ? i
                    : null == r
                      ? void 0
                      : r.id;
              if (null == r || null == s) return !1;
              switch (t.activity.type) {
                case U.mFx.JOIN:
                  if (
                    null == (l = _.Z.getApplicationActivity(n.id, s)) ||
                    null == l.party ||
                    l.party.id !== t.activity.party_id
                  )
                    return !1;
                  o = (0, k.Z)(e, t, n, r, l);
                  break;
                case U.mFx.JOIN_REQUEST:
                  if (
                    null == (l = O.Z.getApplicationActivity(s)) ||
                    null == l.party ||
                    l.party.id !== t.activity.party_id
                  )
                    return !1;
                  o = (0, D.Z)(e, n, r, l);
              }
              return (
                null != o &&
                (en(o, {
                  priority: 2,
                  expirationExternallyManaged: !0,
                  channelId: e.id,
                  duration: G,
                }),
                !0)
              );
            })(s, r, a);
            if (!1 !== e) return e;
          }
          if (
            j.Z.getTextChatNotificationMode() === U.Ypu.DISABLED ||
            N.Z.disableNotifications ||
            !(0, L.eF)(r, o)
          )
            return !1;
          let u = !I.Z.isSoundDisabled(T.Ay),
            d =
              null !== (l = S.Z.getMessage(o, r.id)) && void 0 !== l
                ? l
                : (0, E.e5)(r);
          en((0, P.Z)(s, d, a, u), {
            type: 1,
            channelId: s.id,
            expirationExternallyManaged: !0,
            messageType: r.type,
          }),
            q();
        },
        CHANNEL_SELECT: function (e) {
          let { channelId: t } = e;
          return null != t && ee(t);
        },
        MESSAGE_ACK: function (e) {
          let { channelId: t } = e;
          return ee(t);
        },
        CALL_CREATE: ei,
        CALL_UPDATE: ei,
        CALL_DELETE: function (e) {
          let { channelId: t } = e;
          $(et(t));
        },
        ACTIVITY_USER_ACTION: function (e) {
          let t,
            { actionType: n, user: i, applicationId: l } = e,
            o = (0, w.pL)();
          if (
            null == o ||
            (null == o ? void 0 : o.id) == null ||
            (o.id !== l && o.altId !== l)
          )
            return !1;
          if (n === U.mFx.JOIN) t = (0, A.Z)(i, o);
          if (null == t) return !1;
          en(t, { priority: 2, type: 0 });
        },
        CLIPS_SAVE_CLIP_START: function () {
          en((0, M.f)(W.intl.string(W.t.NBMK9v)));
        },
        CLIPS_SAVE_CLIP: function () {
          en(
            (0, M.f)(
              W.intl.format(W.t.KLhk6u, {
                duration: (0, R.A)(g.Z.getSettings().clipsLength / 1e3, !0),
              }),
            ),
          );
        },
        CLIPS_SAVE_CLIP_ERROR: function () {
          en((0, M.f)(W.intl.string(W.t["1ZbZur"])));
        },
        STREAM_START: function (e) {
          let t = (0, M.y)();
          null != t && en(t);
        },
      });
      t.Z = eo;
    },
    620954: function (e, t, n) {
      n.d(t, {
        P: function () {
          return c;
        },
        R: function () {
          return d;
        },
      });
      var i = n(13245),
        l = n(556296),
        o = n(237997),
        r = n(13140),
        s = n(145597),
        a = n(987650),
        u = n(981631);
      function d(e, t) {
        return {
          trackView() {
            i.Z.track(u.rMx.NOTIFICATION_VIEWED, t),
              i.Z.notificationEvent(e, a.bv.Viewed);
          },
          trackClick(n) {
            let l = o.Z.isLocked((0, s.QF)())
              ? u.Sbl.LOCKED_OVERLAY
              : u.Sbl.UNLOCKED_OVERLAY;
            i.Z.track(u.rMx.NOTIFICATION_CLICKED, {
              ...t,
              location: l,
              action_type: n,
            }),
              i.Z.notificationEvent(e, a.bv.Clicked);
          },
        };
      }
      function c() {
        let e = l.Z.getOverlayKeybind();
        return null != e ? (0, r.BB)(e.shortcut, !0).split(" + ") : ["???"];
      }
    },
    996050: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(224706),
        l = n(13245),
        o = n(150097),
        r = n(620954),
        s = n(987650),
        a = n(388032);
      function u(e, t, n, u, d) {
        if (null == t.activity || null == u.id) return null;
        let c = t.activity.type,
          h = d.session_id;
        if (null == h) return null;
        let { icon: f, title: p, body: m } = (0, o.Xi)(e, t, n),
          { trackView: v, trackClick: g } = (0, r.R)(s.n0.ActivityInvite, {
            notif_type: s.n0.ActivityInvite,
            notif_user_id: n.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
            activity_type: c,
            activity_name: d.name,
          });
        return {
          icon: f,
          title: p,
          body: m,
          onNotificationShow: () => {
            v();
          },
          confirmText: a.intl.string(a.t.VJlc0d),
          onConfirmClick: (o, r) => {
            var s;
            i.Z.join({
              userId: n.id,
              sessionId: h,
              applicationId: null !== (s = u.altId) && void 0 !== s ? s : u.id,
              channelId: e.id,
              messageId: t.id,
            }),
              l.Z.updateNotificationStatus(r),
              g("join");
          },
          onDismissClick: () => {
            g("dismiss");
          },
        };
      }
    },
    609626: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(768581),
        l = n(620954),
        o = n(987650),
        r = n(981631),
        s = n(388032);
      function a(e, t) {
        let n = e.username,
          a = s.intl.format(s.t["Yk+uYG"], { username: "" }),
          u = (0, i.ov)(e),
          d = s.intl.string(s.t.WRj1Wl),
          { trackView: c, trackClick: h } = (0, l.R)(o.n0.ActivityUserJoin, {
            notif_type: o.n0.ActivityUserJoin,
            notif_user_id: e.id,
            activity_type: r.mFx.JOIN,
            activity_name: t.name,
          });
        return {
          icon: u,
          title: n,
          body: a,
          hint: d,
          onNotificationShow: () => {
            c();
          },
          onDismissClick: () => {
            h("dismiss");
          },
        };
      }
    },
    421824: function (e, t, n) {
      n.d(t, {
        f: function () {
          return p;
        },
        y: function () {
          return f;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(481060),
        o = n(522474),
        r = n(556296),
        s = n(13140),
        a = n(44359),
        u = n(620954),
        d = n(987650),
        c = n(981631),
        h = n(388032);
      function f() {
        if (o.Z.getWindowOpen(c.KJ3.ACTIVITY_POPOUT)) return null;
        let { trackView: e, trackClick: t } = (0, u.R)(
            d.n0.ClipsReminderNotification,
            { notif_type: d.n0.ClipsReminderNotification },
          ),
          n = r.Z.getKeybindForAction(c.kg4.SAVE_CLIP);
        if (null == n) return null;
        let f = s.BB(n.shortcut, !0);
        return {
          title: h.intl.format(h.t.S5uhCA, {
            keybind: f,
            keybindHook: (e, t) =>
              (0, i.jsx)(a.Z, { keybind: f.split("+") }, t),
          }),
          icon: (0, i.jsx)(l.ClipsIcon, { size: "lg", color: "currentColor" }),
          onNotificationShow: () => {
            e();
          },
          onDismissClick: () => {
            t("dismiss");
          },
        };
      }
      function p(e) {
        let { trackView: t, trackClick: n } = (0, u.R)(d.n0.ClipsNotification, {
          notif_type: d.n0.ClipsNotification,
        });
        return {
          title: e,
          icon: (0, i.jsx)(l.ClipsIcon, { size: "lg", color: "currentColor" }),
          onNotificationShow: () => {
            t();
          },
          onDismissClick: () => {
            n("dismiss");
          },
        };
      }
    },
    777036: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var i = n(26151),
        l = n(13245),
        o = n(43267),
        r = n(933557),
        s = n(699516),
        a = n(594174),
        u = n(620954),
        d = n(987650),
        c = n(981631),
        h = n(388032);
      function f(e) {
        let t = (0, r.F6)(e, a.default, s.Z),
          n = h.intl.string(h.t.ssrVzM),
          f = (0, o.x)(e),
          { trackView: p, trackClick: m } = (0, u.R)(d.n0.IncomingCall, {
            notif_type: d.n0.IncomingCall,
            notif_user_id: 1 === e.recipients.length ? e.recipients[0] : null,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
          });
        return {
          icon: f,
          title: t,
          body: n,
          confirmText: h.intl.string(h.t["0D/6R0"]),
          cancelText: h.intl.string(h.t.BVN4pK),
          onNotificationShow: () => {
            p();
          },
          onConfirmClick: (t, n) => {
            m("join"),
              i.Z.call(e.id, !1, !1),
              l.Z.updateNotificationStatus(n),
              l.Z.track(c.rMx.VOICE_CHANNEL_SELECTED, {
                location: "Overlay Notificaiton",
                guild_id: null,
                channel_id: e.id,
                video_enabled: !1,
              });
          },
          onCancelClick: () => {
            m("decline"), i.Z.stopRinging(e.id);
          },
          onDismissClick: () => {
            m("dismiss");
          },
        };
      }
    },
    333727: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var i = n(278323),
        l = n(13245),
        o = n(45114),
        r = n(237997),
        s = n(145597),
        a = n(620954),
        u = n(987650),
        d = n(981631),
        c = n(388032);
      function h(e, t, n, h) {
        let f = t.username,
          p = c.intl.format(c.t.VDODnp, { username: "", game: n.name }),
          m = t.getAvatarURL(e.guild_id, 80),
          { trackView: v, trackClick: g } = (0, a.R)(u.n0.ActivityInvite, {
            notif_type: u.n0.ActivityInvite,
            notif_user_id: t.id,
            activity_type: d.mFx.JOIN_REQUEST,
            activity_name: h.name,
          });
        return {
          icon: m,
          title: f,
          body: p,
          confirmText: c.intl.string(c.t["fgP/wc"]),
          cancelText: c.intl.string(c.t.tpXzJy),
          onNotificationShow: () => {
            v();
          },
          onConfirmClick: (t, n) => {
            i.Z.sendActivityInvite({
              channelId: e.id,
              type: d.mFx.JOIN,
              activity: h,
              location: r.Z.isLocked((0, s.QF)())
                ? d.Sbl.LOCKED_OVERLAY
                : d.Sbl.UNLOCKED_OVERLAY,
            }),
              g("join"),
              l.Z.updateNotificationStatus(n);
          },
          onCancelClick: (t, n) => {
            (0, o.In)(e.id, !0, !0),
              l.Z.updateNotificationStatus(n),
              g("decline");
          },
          onDismissClick: () => {
            g("dismiss");
          },
        };
      }
    },
    585708: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return C;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(13245),
        o = n(937889),
        r = n(703656),
        s = n(974180),
        a = n(150097),
        u = n(358085),
        d = n(557177),
        c = n(998502),
        h = n(145597),
        f = n(610394),
        p = n(516542),
        m = n(380736),
        v = n(620954),
        g = n(987650),
        E = n(981631),
        Z = n(388032);
      function C(e, t, n, C) {
        var x;
        let { icon: S, title: I, body: _ } = (0, a.Xi)(e, t, n),
          { trackView: O, trackClick: N } = (0, v.R)(g.n0.TextChat, {
            notif_type: g.n0.TextChat,
            notif_user_id:
              null === (x = t.author) || void 0 === x ? void 0 : x.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
          });
        return {
          icon: S,
          title: I,
          body:
            t.content.length > 0
              ? (0, o.ZP)(t, {
                  noStyleAndInteraction: !0,
                  formatInline: !0,
                  hideSimpleEmbedContent: !1,
                }).content
              : _,
          hint: (e) =>
            e
              ? null
              : (0, m.Q)((0, v.P)(), Z.t.ykjOAA, Z.intl.string(Z.t.jZkzVF)),
          maxBodyLines: 2,
          renderFooter: (t, n) =>
            t
              ? (0, i.jsx)(p.Z, { id: n, channel: e, onSend: () => N("send") })
              : null,
          onNotificationShow: () => {
            C && (0, d.GN)(s.Ay, s.yk), O();
          },
          onNotificationClick: () => {
            let n = (0, h.QF)();
            f.Z.isInputLocked(n)
              ? (N("unlock"), l.Z.setInputLocked(!1, n))
              : (N("jump"),
                (0, r.uL)(E.Z5c.CHANNEL(e.guild_id, e.id, t.id)),
                u.isPlatformEmbedded && c.ZP.focus());
          },
          onDismissClick: () => {
            N("dismiss");
          },
        };
      }
    },
    588909: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return I;
        },
      }),
        n(47120);
      var i = n(200651);
      n(192379);
      var l = n(952265),
        o = n(988298),
        r = n(13245),
        s = n(620662),
        a = n(835473),
        u = n(442550),
        d = n(293273),
        c = n(145597),
        h = n(603618),
        f = n(380736),
        p = n(620954),
        m = n(987650),
        v = n(981631),
        g = n(602091),
        E = n(701488),
        Z = n(388032),
        C = n(176463),
        x = n(802334);
      function S(e) {
        let { game: t } = e,
          n = (0, a.q)(t.id);
        return null == n
          ? null
          : (0, i.jsx)(u.f, { src: n.getIconURL(E.Si.LARGE), size: 40 });
      }
      function I(e, t) {
        let { trackView: a, trackClick: u } = (0, p.R)(m.n0.WelcomeNudge, {
            notif_type: m.n0.WelcomeNudge,
          }),
          E = {};
        for (let a of t)
          switch (a.type) {
            case m.nc.WELCOME: {
              let t =
                (null == e ? void 0 : e.altId) != null
                  ? d.Z.getApplicationActivity(e.altId)
                  : (null == e ? void 0 : e.id) != null
                    ? d.Z.getApplicationActivity(e.id)
                    : null;
              null != t &&
                (0, s.Z)(t, v.xjy.JOIN) &&
                ((E.cancelText = Z.intl.string(Z.t["6F9ivr"])),
                (E.onCancelClick = (e, n) => {
                  u("unlock"),
                    r.Z.updateNotificationStatus(n),
                    r.Z.setInputLocked(!1, (0, c.QF)()),
                    (0, o.h7)(t, !1, v.IlC.POPOUT);
                }));
              break;
            }
            case m.nc.GO_LIVE_VOICE:
            case m.nc.GO_LIVE_NON_VOICE:
              (E.confirmText = Z.intl.string(Z.t.U76Ft7)),
                (E.onConfirmClick = (e, t) => {
                  u("unlock"),
                    r.Z.updateNotificationStatus(t),
                    r.Z.setInputLocked(!1, (0, c.QF)()),
                    (0, l.ZD)(
                      async () => {
                        let { default: e } = await Promise.all([
                          n.e("46746"),
                          n.e("66913"),
                        ]).then(n.bind(n, 60594));
                        return (t) =>
                          (0, i.jsx)(e, {
                            ...t,
                            selectSource: !1,
                            guildId:
                              a.type === m.nc.GO_LIVE_VOICE
                                ? a.voiceGuild.id
                                : void 0,
                            selectGuild: a.type === m.nc.GO_LIVE_NON_VOICE,
                            analyticsLocation: v.Sbl.OVERLAY_NUDGE,
                          });
                      },
                      { contextKey: g.u1 },
                    );
                });
              break;
            case m.nc.CONTENT_INVENTORY:
              (E.renderFooter = () =>
                (0, i.jsx)("div", {
                  className: x.container,
                  children: (0, i.jsx)(h.i, { entries: a.entries }),
                })),
                (E.onNotificationShow = () => {
                  r.Z.track(v.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                    user_ids: a.entries.map((e) => e.author_id),
                    entry_ids: a.entries.map((e) => e.id),
                  });
                });
          }
        return {
          ...E,
          icon:
            null != e
              ? (0, i.jsx)(S, { game: e })
              : (0, i.jsx)("img", {
                  src: n(328756),
                  className: C.icon,
                  alt: "",
                }),
          title: null != e ? e.name : Z.intl.string(Z.t.pkXAeH),
          body: null,
          hint: () =>
            (0, f.Q)((0, p.P)(), Z.t.e6giBQ, Z.intl.string(Z.t.jZkzVF)),
          onNotificationShow: (e) => {
            var t;
            a(),
              null === (t = E.onNotificationShow) ||
                void 0 === t ||
                t.call(E, e);
          },
          onNotificationClick: () => {
            u("unlock"), r.Z.setInputLocked(!1, (0, c.QF)());
          },
          onDismissClick: () => {
            u("dismiss");
          },
        };
      }
    },
    561064: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
        i: function () {
          return a;
        },
      });
      var i = n(442837),
        l = n(214629),
        o = n(928518),
        r = n(501787),
        s = n(981631);
      function a() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : o.Z,
          i =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : (0, l.e1)();
        return null !==
          (t =
            null !== (e = n.getWindow(r.OVERLAY_V3_KEY)) && void 0 !== e
              ? e
              : i
                ? n.getWindow(s.KJ3.ACTIVITY_POPOUT)
                : void 0) && void 0 !== t
          ? t
          : window;
      }
      function u() {
        let e = (0, l.PR)();
        return (0, i.e7)([o.Z], () => a(o.Z, e));
      }
    },
    352527: function (e, t, n) {
      var i,
        l,
        o,
        r,
        s = n(442837),
        a = n(570140);
      let u = !1,
        d = !1;
      class c extends (r = s.ZP.Store) {
        get keepOpen() {
          return d;
        }
        get enabled() {
          return u;
        }
      }
      (o = "SoundboardOverlayStore"),
        (l = "displayName") in (i = c)
          ? Object.defineProperty(i, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[l] = o),
        (t.Z = new c(a.Z, {
          SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
            if (((u = e.enabled), e.enabled)) {
              var t;
              d = null !== (t = e.keepOpen) && void 0 !== t && t;
            }
          },
        }));
    },
    892807: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
      });
      var i = n(200651),
        l = n(192379),
        o = n(442837),
        r = n(481060),
        s = n(410575),
        a = n(933557),
        u = n(471445),
        d = n(430824),
        c = n(19780),
        h = n(699516),
        f = n(594174),
        p = n(981631),
        m = n(388032),
        v = n(693215);
      function g(e) {
        let {
            recentVoiceChannels: t,
            currentVoiceChannel: n,
            onClose: g,
            onSelect: E,
          } = e,
          Z = l.useCallback(
            (e) => {
              E(e), g();
            },
            [E, g],
          ),
          C = (0, o.e7)([c.Z], () => c.Z.getQuality()),
          x = {
            [p.IE4.FINE]: r.ConnectionFineIcon,
            [p.IE4.AVERAGE]: r.ConnectionAverageIcon,
            [p.IE4.BAD]: r.ConnectionBadIcon,
            [p.IE4.UNKNOWN]: r.ConnectionUnknownIcon,
          }[C];
        return (0, i.jsx)(s.Z, {
          section: p.jXE.CONTEXT_MENU,
          children: (0, i.jsx)(r.Menu, {
            onSelect: g,
            navId: "manage-streams",
            onClose: g,
            "aria-label": m.intl.string(m.t["+9QSnp"]),
            children: (0, i.jsx)(r.MenuGroup, {
              children: t.map((e) => {
                var t;
                let l = (0, u.KS)(e),
                  o = e.id === (null == n ? void 0 : n.id);
                return (0, i.jsx)(
                  r.MenuItem,
                  {
                    id: e.id,
                    label: (0, i.jsxs)(r.Text, {
                      variant: "text-sm/semibold",
                      className: v.label,
                      color: o ? "text-positive" : "text-normal",
                      children: [
                        null != l
                          ? (0, i.jsx)(l, { color: "currentColor", size: "xs" })
                          : void 0,
                        (0, a.F6)(e, f.default, h.Z),
                      ],
                    }),
                    subtext:
                      null != e.getGuildId()
                        ? null === (t = d.Z.getGuild(e.getGuildId())) ||
                          void 0 === t
                          ? void 0
                          : t.name
                        : void 0,
                    subtextLineClamp: 1,
                    icon: o ? x : void 0,
                    action: () => Z(e),
                  },
                  e.id,
                );
              }),
            }),
          }),
        });
      }
    },
    129724: function (e, t, n) {
      n.d(t, {
        A: function () {
          return r;
        },
      });
      var i = n(913527),
        l = n.n(i),
        o = n(388032);
      function r(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : o.intl.string(o.t["Yl1D8/"]),
          i = l().duration(e, "seconds");
        if (i.days() > 0)
          return o.intl.formatToPlainString(t ? o.t.GBLpQ0 : o.t.k2UNz8, {
            days: i.days(),
          });
        if (i.hours() > 0)
          return o.intl.formatToPlainString(t ? o.t.rhY1Rk : o.t.xCjYxM, {
            hours: i.hours(),
          });
        if (i.minutes() > 0)
          return o.intl.formatToPlainString(t ? o.t["XIGt+f"] : o.t.iXLF9f, {
            minutes: i.minutes(),
          });
        else if (e > 0)
          return o.intl.formatToPlainString(t ? o.t.pyvjRk : o.t.geSp4O, {
            seconds: i.seconds(),
          });
        else return t ? o.intl.string(o.t["Yl1D8/"]) : n;
      }
    },
  },
]);
//# sourceMappingURL=92bff0136215ea89645b.js.map
