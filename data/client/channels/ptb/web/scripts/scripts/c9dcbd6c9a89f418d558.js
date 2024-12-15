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
        o = n(392711),
        l = n.n(o),
        r = n(876215),
        s = n(442837),
        a = n(146282),
        u = n(26033),
        c = n(897674),
        d = n(709054),
        h = n(206583);
      let f = new Set([r.s.PLAYED_GAME, r.s.LAUNCHED_ACTIVITY]),
        p = (e) => f.has(e.content_type);
      function m(e) {
        let { entries: t } = (function () {
          let e = (0, c.Z)(h.YN.GAME_PROFILE_FEED),
            t = (0, c.Z)(h.YN.GLOBAL_FEED),
            n = i.useMemo(
              () =>
                l()(t)
                  .unionBy(e, (e) => e.id)
                  .filter(p)
                  .orderBy((e) => d.default.extractTimestamp(e.id), "desc")
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
        o = n(149765),
        l = n(442837),
        r = n(367907),
        s = n(731429),
        a = n(188471),
        u = n(318885),
        c = n(592125),
        d = n(984933),
        h = n(271383),
        f = n(430824),
        p = n(496675),
        m = n(944486),
        v = n(914010),
        g = n(594174),
        E = n(237997),
        x = n(145597),
        C = n(981631);
      class Z extends i.Component {
        componentDidUpdate(e) {
          if (this.props.locked) return null;
          let {
            selectedGuild: t,
            selectedChannel: n,
            isMemberPending: i,
            hasPreviewEnabled: o,
            postableChannelCount: l,
          } = this.props;
          if (
            (null != t &&
              (t !== e.selectedGuild || (i && !e.isMemberPending)) &&
              ((0, u.Q)(C.rMx.GUILD_VIEWED, {
                ...(i ? { is_pending: i, preview_enabled: o } : {}),
                postable_channels: l,
              }),
              (0, a.a)(C.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: t })),
            null != n && n !== e.selectedChannel)
          ) {
            let e = (0, s.K)(c.Z.getChannel(n), !0);
            (0, u.Q)(C.rMx.CHANNEL_OPENED, { ...e, ...(0, r.$H)(n) }),
              (0, a.a)(C.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: n });
          }
        }
        render() {
          return null;
        }
      }
      t.Z = l.ZP.connectStores(
        [v.Z, m.Z, f.Z, g.default, E.Z, d.ZP, p.Z, h.ZP],
        () => {
          var e, t, n;
          let i = v.Z.getGuildId(),
            l = m.Z.getChannelId(i),
            r = f.Z.getGuild(i),
            s = g.default.getCurrentUser(),
            a =
              null !==
                (t = d.ZP.getChannels(null == r ? void 0 : r.id)[d.sH]) &&
              void 0 !== t
                ? t
                : [],
            u =
              a.length > 0
                ? a.filter((e) => {
                    let { channel: t } = e;
                    return p.Z.can(
                      o.$e(C.Plq.SEND_MESSAGES, C.Plq.VIEW_CHANNEL),
                      t,
                    );
                  }).length
                : 0,
            c =
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
            selectedChannel: l,
            locked: E.Z.isLocked((0, x.QF)()),
            hasPreviewEnabled:
              null == r ? void 0 : r.features.has(C.oNc.PREVIEW_ENABLED),
            isMemberPending: c,
            postableChannelCount: u,
          };
        },
      )(Z);
    },
    906037: function (e, t, n) {
      n.d(t, {
        CR: function () {
          return r;
        },
        eM: function () {
          return l;
        },
        m3: function () {
          return s;
        },
      });
      var i = n(570140),
        o = n(449224);
      function l(e) {
        return (!e.isPreviewingInGame && !e.locked) || e.pinned;
      }
      function r(e, t, n) {
        (e.locked !== t.locked ||
          e.pinned !== t.pinned ||
          n(e) !== n(t) ||
          l(e) !== l(t)) &&
          s(t, n(t));
      }
      function s(e, t) {
        var n, r;
        let s = l(e),
          a = o.Z.getGame();
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
        o = n(522474),
        l = n(658785),
        r = n(981631);
      function s(e) {
        let { location: t, options: n } = e,
          i = a(),
          { showKeybindIndicators: o } = l.Z.useExperiment({ location: t }, n);
        return o && i;
      }
      function a() {
        return !(0, i.e7)([o.Z], () =>
          o.Z.getWindowVisible(r.KJ3.ACTIVITY_POPOUT),
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
        o = n(192379),
        l = n(512722),
        r = n.n(l),
        s = n(442837),
        a = n(481060),
        u = n(278323),
        c = n(988298),
        d = n(493683),
        h = n(13245),
        f = n(99690),
        p = n(620662),
        m = n(835473),
        v = n(194082),
        g = n(297781),
        E = n(656709),
        x = n(567409),
        C = n(703656),
        Z = n(409057),
        _ = n(199902),
        I = n(592125),
        S = n(293273),
        b = n(158776),
        N = n(594174),
        O = n(630388),
        y = n(5192),
        j = n(358085),
        T = n(998502),
        k = n(388627),
        L = n(981631),
        w = n(388032),
        A = n(13663);
      function R(e) {
        let { entry: t, currentUserActivity: n, idx: l } = e,
          c = (0, s.e7)([N.default], () => N.default.getUser(t.author_id)),
          [f, m] = o.useState("unsent"),
          [v, g] = o.useState(!1);
        o.useEffect(() => {
          if ("sent" === f) {
            let e = setTimeout(() => g(!0), 2e3);
            return () => clearTimeout(e);
          }
        }, [f]);
        let x = null != n && (0, p.Z)(n, L.xjy.JOIN),
          Z = async (e) => {
            if (null != c && "unsent" === f) {
              e.stopPropagation();
              try {
                if ((m("sending"), x))
                  await u.Z.sendActivityInviteUser({
                    type: L.mFx.JOIN,
                    userId: c.id,
                    activity: n,
                    location: L.Sbl.UNLOCKED_OVERLAY,
                  });
                else {
                  var i;
                  let e = await d.Z.getOrEnsurePrivateChannel(c.id),
                    n =
                      null !== (i = I.Z.getChannel(e)) && void 0 !== i
                        ? i
                        : null;
                  r()(null != n, "Send channel must be defined"),
                    (0, C.uL)(L.Z5c.CHANNEL(n.guild_id, n.id)),
                    await (0, E.p)({
                      channel: n,
                      content: w.intl.string(w.t.DwAcMz),
                      entry: t,
                      whenReady: !0,
                    });
                }
                h.Z.track(L.rMx.OVERLAY_GAME_INVITE_SENT, {
                  target_user_id: c.id,
                  target_content_entry_id: t.id,
                  target_index: l,
                }),
                  m("sent");
              } catch (e) {
                m("unsent");
              }
            }
          },
          _ = async () => {
            var e;
            if (null == c) return;
            let t = await d.Z.getOrEnsurePrivateChannel(c.id),
              n = null !== (e = I.Z.getChannel(t)) && void 0 !== e ? e : null;
            r()(null != n, "Send channel must be defined"),
              (0, C.uL)(L.Z5c.CHANNEL(n.guild_id, n.id)),
              j.isPlatformEmbedded && T.ZP.focus();
          },
          S = x ? w.intl.string(w.t["3fRyS0"]) : w.intl.string(w.t.y9eo7e),
          b = x
            ? (0, i.jsx)(a.GroupPlusIcon, { color: "currentColor", size: "sm" })
            : (0, i.jsx)(a.SendMessageIcon, {
                color: "currentColor",
                size: "sm",
              });
        return (0, i.jsx)(a.Tooltip, {
          text: S,
          "aria-label": S,
          children: (e) =>
            (0, i.jsx)(a.Button, {
              ...e,
              submitting: "sending" === f,
              onClick: v ? _ : Z,
              className: A.inviteButton,
              wrapperClassName: A.inviteButtonWrapper,
              innerClassName: A.inviteButtonInner,
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
                  : b,
            }),
        });
      }
      function M(e) {
        var t;
        let { entry: n, currentUserActivity: l } = e,
          r = (0, s.e7)([N.default], () => N.default.getUser(n.author_id)),
          c =
            null !== (t = null == l ? void 0 : l.application_id) && void 0 !== t
              ? t
              : n.extra.application_id,
          d = (0, s.e7)(
            [b.Z],
            () => (null != r ? b.Z.getApplicationActivity(r.id, c) : null),
            [c, r],
          ),
          [h, f] = o.useState("unsent");
        if (!(null != d && (0, p.Z)(d, L.xjy.JOIN))) return null;
        let m = async (e) => {
            if (null != r && "unsent" === h) {
              e.stopPropagation();
              try {
                f("sending"),
                  await u.Z.sendActivityInviteUser({
                    type: L.mFx.JOIN_REQUEST,
                    userId: r.id,
                    activity: d,
                    location: L.Sbl.UNLOCKED_OVERLAY,
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
              className: A.inviteButton,
              wrapperClassName: A.inviteButtonWrapper,
              innerClassName: A.inviteButtonInner,
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
        let { entry: t, currentUserActivity: n, idx: o } = e,
          l = (0, s.e7)([N.default], () => N.default.getUser(t.author_id)),
          r = (0, s.e7)(
            [_.Z],
            () => (null != l ? _.Z.getAnyStreamForUser(l.id) : null),
            [l],
          ),
          { isMobileOnline: u, status: c } = (0, s.cj)(
            [b.Z],
            () =>
              null == l
                ? { isMobileOnline: void 0, status: void 0 }
                : {
                    isMobileOnline: b.Z.isMobileOnline(l.id),
                    status: b.Z.getStatus(l.id),
                  },
            [l],
          );
        return null == l
          ? null
          : (0, i.jsxs)("div", {
              className: A.row,
              children: [
                (0, i.jsx)(f.Z, {
                  className: A.avatar,
                  user: l,
                  isMobile: u,
                  status: c,
                }),
                (0, i.jsxs)("div", {
                  className: A.details,
                  children: [
                    (0, i.jsxs)("div", {
                      className: A.usernameWrapper,
                      children: [
                        (0, i.jsx)(a.Text, {
                          className: A.username,
                          variant: "text-md/medium",
                          color: "header-primary",
                          children: y.ZP.getName(void 0, void 0, l),
                        }),
                        null != r &&
                          (0, i.jsx)(v.ZP, { className: A.liveIndicator }),
                      ],
                    }),
                    (0, i.jsx)(g.Gk, {
                      location: g.Gt.OVERLAY,
                      className: A.badgesContainer,
                      children: [g.OV, g.wO, g.f, g.v1, g.pQ].map((e, n) =>
                        (0, i.jsx)(e, { entry: t }, "entry-".concat(n)),
                      ),
                    }),
                  ],
                }),
                (0, i.jsx)(M, { entry: t, currentUserActivity: n, idx: o }),
                (0, i.jsx)(R, { entry: t, currentUserActivity: n, idx: o }),
              ],
            });
      }
      function D(e) {
        let { entries: t, currentUserActivity: n } = e,
          o = t.slice(0, 5);
        return (0, i.jsx)(i.Fragment, {
          children: o.map((e, t) =>
            (0, i.jsx)(z, { idx: t, entry: e, currentUserActivity: n }, t),
          ),
        });
      }
      function P() {
        let e = (0, k.II)(),
          t = null == e ? void 0 : e.id,
          n = null == e ? void 0 : e.altId,
          o = (0, x.Ns)(t),
          l = (0, s.e7)([N.default], () => N.default.getCurrentUser()),
          r = (0, s.e7)([S.Z], () =>
            null != n
              ? S.Z.getApplicationActivity(n)
              : null != t
                ? S.Z.getApplicationActivity(t)
                : null,
          ),
          u = null != r && (0, p.Z)(r, L.xjy.JOIN),
          d = (0, m.q)(null == r ? void 0 : r.application_id),
          h = null != d && (0, O.yE)(d.flags, L.udG.EMBEDDED);
        return 0 === o.length && null == r
          ? null
          : (0, i.jsxs)("div", {
              className: A.container,
              children: [
                null != r && null != l
                  ? (0, i.jsx)(Z.Z, {
                      className: A.activityCard,
                      activity: r,
                      user: l,
                      currentUser: l,
                    })
                  : null,
                u && !h
                  ? (0, i.jsx)(a.Button, {
                      className: A.inviteFriendsButton,
                      onClick: () => (0, c.h7)(r, !1, L.IlC.POPOUT),
                      size: a.ButtonSizes.SMALL,
                      color: a.ButtonColors.PRIMARY,
                      children: w.intl.string(w.t["6Qgren"]),
                    })
                  : null,
                (0, i.jsx)(D, { entries: o, currentUserActivity: r }),
              ],
            });
      }
    },
    667142: function (e, t, n) {
      n.d(t, {
        Df: function () {
          return d;
        },
        S_: function () {
          return c;
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
      let o = { timeToLiveMs: 5e3, reappearTimeMs: 1e4 },
        l = (0, i.H)(() => o),
        r = 1e4,
        s = 2e4,
        a = 500,
        u = 1e3;
      function c(e) {
        l.setState({ timeToLiveMs: e });
      }
      function d(e) {
        l.setState({ reappearTimeMs: e });
      }
      t.ZP = l;
    },
    926086: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      }),
        n(47120);
      var i = n(200651),
        o = n(192379),
        l = n(120356),
        r = n.n(l),
        s = n(348327),
        a = n.n(s),
        u = n(752877),
        c = n(481060),
        d = n(667142),
        h = n(333031),
        f = n(70491);
      let p = { mass: 1, tension: 600, friction: 60, clamp: !0 };
      function m(e) {
        let { locked: t, pinned: n } = e,
          [l, s] = o.useState(0),
          [m, v] = o.useState(0),
          [g, E] = o.useState(0),
          x = o.useRef(0),
          [C, Z] = o.useState(0),
          { timeToLiveMs: _, reappearTimeMs: I } = d.ZP.useState(
            (e) => ({
              timeToLiveMs: e.timeToLiveMs,
              reappearTimeMs: e.reappearTimeMs,
            }),
            a(),
          ),
          S = { timeToLiveMs: _, reappearTimeMs: I },
          b = o.useRef(S);
        o.useEffect(() => void (b.current = S)),
          o.useEffect(
            () => (
              (x.current = setInterval(() => {
                let e = Date.now();
                v(e),
                  E((t) => {
                    if (0 === t) return e;
                    let n = e - t,
                      i = b.current.timeToLiveMs,
                      o = i + b.current.reappearTimeMs;
                    return n > i ? t + o : t;
                  });
              }, 100)),
              () => {
                clearInterval(x.current);
              }
            ),
            [],
          );
        let N = () => {
            s(Date.now()), Z((e) => e + 1);
          },
          O = l > 0 && m - l < 1e3,
          y = (0, c.useTransition)(g > 0 && g < m && m - g < _, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: p,
          });
        return t && !n
          ? null
          : (0, i.jsx)(i.Fragment, {
              children: y(
                (e, t) =>
                  t &&
                  (0, i.jsx)(u.animated.div, {
                    style: e,
                    className: f.clickZoneDebugContainer,
                    children: (0, i.jsx)(h.Z, {
                      className: r()(f.clickZone, O && f.clickBackground),
                      children: (0, i.jsx)(c.Clickable, {
                        onClick: N,
                        className: f.clickable,
                        children: (0, i.jsxs)(c.Text, {
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
      var o = n(120356),
        l = n.n(o),
        r = n(481060),
        s = n(932209);
      let a = (e) => {
        let { className: t, onDismiss: n, "aria-label": o } = e;
        return (0, i.jsx)(r.Button, {
          look: r.Button.Looks.BLANK,
          size: r.Button.Sizes.NONE,
          onClick: n,
          className: l()(s.dismissButton, t),
          "aria-label": o,
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
          return b;
        },
      }),
        n(47120),
        n(411104);
      var i,
        o,
        l,
        r = n(200651),
        s = n(192379),
        a = n(120356),
        u = n.n(a),
        c = n(752877),
        d = n(902704),
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
      ((l = i || (i = {})).MOVE = "MOVE"),
        (l.RESIZE_NORTH = "RESIZE_NORTH"),
        (l.RESIZE_WEST = "RESIZE_WEST"),
        (l.RESIZE_EAST = "RESIZE_EAST"),
        (l.RESIZE_SOUTH = "RESIZE_SOUTH"),
        (l.RESIZE_NORTH_WEST = "RESIZE_NORTH_WEST"),
        (l.RESIZE_NORTH_EAST = "RESIZE_NORTH_EAST"),
        (l.RESIZE_SOUTH_WEST = "RESIZE_SOUTH_WEST"),
        (l.RESIZE_SOUTH_EAST = "RESIZE_SOUTH_EAST");
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
      function x(e, t, n) {
        let { width: i, height: o } = e;
        return {
          width: "auto" === i ? "auto" : Math.max(t, i),
          height: "auto" === o ? "auto" : Math.max(n, o),
        };
      }
      function C(e) {
        let { top: t, left: n, bottom: i, right: o } = e;
        return (
          null == n && null == o && (n = 0),
          null != n && null != o && (o = void 0),
          null == t && null == i && (t = 0),
          null != t && null != i && (i = void 0),
          { top: t, left: n, bottom: i, right: o }
        );
      }
      function Z(e) {
        return "auto" === e || null == e ? "auto" : "".concat(e, "px");
      }
      function _(e, t) {
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
        let { top: n, left: i, bottom: o, right: l } = t;
        switch (e) {
          case "RESIZE_EAST":
          case "RESIZE_NORTH_EAST":
          case "RESIZE_NORTH":
            return { bottom: o, left: i, right: void 0, top: void 0 };
          case "RESIZE_WEST":
          case "RESIZE_NORTH_WEST":
            return { bottom: o, right: l, left: void 0, top: void 0 };
          case "RESIZE_SOUTH_EAST":
            return { top: n, left: i, bottom: void 0, right: void 0 };
          case "RESIZE_SOUTH":
          case "RESIZE_SOUTH_WEST":
            return { top: n, right: l, bottom: void 0, left: void 0 };
          default:
            throw Error("getOrientedCoords: Invalid orientation: ".concat(e));
        }
      }
      function S(e) {
        let { computedSize: t } = e;
        return t;
      }
      class b extends (o = s.Component) {
        shouldComponentUpdate(e, t) {
          return (
            !(0, d.Z)(t, this.state) ||
            !(0, d.Z)(e, this.props, [
              "anchor",
              "size",
              "minSize",
              "container",
            ]) ||
            !(0, d.Z)(e.anchor, this.props.anchor) ||
            !(0, d.Z)(e.size, this.props.size) ||
            !(0, d.Z)(e.minSize, this.props.minSize) ||
            !(0, d.Z)(e.container, this.props.container)
          );
        }
        componentDidMount() {
          this.setDOMPositions(C(this.props.anchor)),
            this.setDOMSize(
              x(
                this.props.size,
                this.props.minSize.width,
                this.props.minSize.height,
              ),
            ),
            h.S.subscribe(p.CkL.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI);
        }
        componentDidUpdate(e, t) {
          null == t.operation &&
            (!(0, d.Z)(this.props.anchor, e.anchor) &&
              this.setDOMPositions(C(this.props.anchor)),
            !(0, d.Z)(this.props.size, e.size) &&
              this.setDOMSize(
                x(
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
              container: { maxX: o, maxY: l, minX: r, minY: s },
              onDragStart: a,
              onDrag: u,
              snapOrientation: c = !0,
            },
            dragState: { offsetX: d, offsetY: h },
            state: { operationStarted: p },
          } = this;
          if (null == n) return null;
          (e = Math.max(Math.min(o, e), r)), (t = Math.max(Math.min(l, t), s));
          let { width: m, height: v } = _(n, this.size),
            g = t - h,
            E = e - d,
            x = (0, f.ou)(
              (0, f.PY)(
                { top: g, left: E, bottom: void 0, right: void 0 },
                o,
                l,
                m,
                v,
              ),
            ),
            C = c ? (0, f.R)(x) : I("RESIZE_SOUTH_EAST", x);
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
                container: { maxX: o, maxY: l, minX: r, minY: s },
                onDragStart: a,
                onDrag: u,
                resizeValidation: c = S,
              },
              state: { operation: h, operationStarted: p },
            } = this,
            { startX: m, startY: v } = this.dragState,
            g = 0,
            E = 0;
          if (null == h) return;
          switch (
            ((e = Math.max(Math.min(o, e), r)),
            (t = Math.max(Math.min(l, t), s)),
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
          let x = c({
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
                  o,
                  l,
                  x.width,
                  x.height,
                ),
              ),
              this.dragState.dragOrientedCoords,
            );
          this.setDOMSize(x, !0),
            !(0, d.Z)(C, this.dragState.dragOrientedCoords) &&
              ((this.dragState.dragOrientedCoords = C),
              this.setDOMPositions(this.dragState.dragOrientedCoords)),
            !p && (null != a && a(), this.setState({ operationStarted: !0 })),
            null != u && u(n, h, this.anchor, this.size);
        }
        setDOMPositions(e) {
          let { top: t, left: n, bottom: i, right: o } = e,
            { current: l } = this.ref;
          if (
            ((this.anchor = { top: t, left: n, bottom: i, right: o }),
            null != l)
          )
            (l.style.top = Z(t)),
              (l.style.bottom = Z(i)),
              (l.style.left = Z(n)),
              (l.style.right = Z(o));
        }
        setDOMSize(e) {
          let { width: t, height: n } = e,
            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { current: o } = this.ref;
          if (
            ((t = "auto" !== this.size.width || i ? t : "auto"),
            (n = "auto" !== this.size.height || i ? n : "auto"),
            (this.size = { width: t, height: n }),
            null != o)
          )
            (o.style.width = Z(t)), (o.style.height = Z(n));
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
              borderWidth: o = 2,
              borderRadius: l = 12,
            },
            state: { operation: r },
          } = this;
          return {
            ...t,
            minWidth: n.width,
            minHeight: n.height,
            borderWidth: o,
            padding: i,
            borderRadius: l + o + i,
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
              locked: o,
            },
            size: l,
            anchor: r,
            setLockExtras: s,
            state: { anchorTopOverride: a, anchorLeftOverride: u },
          } = this;
          return e({
            dragStart: this.handleOperationStart,
            dragOperation: this.state.operation,
            anchorTop: null != a ? a : null != r.top,
            anchorLeft: null != u ? u : null != r.left,
            size: l,
            padding: n,
            borderWidth: i,
            setLockExtras: s,
            locked: o,
            hidden: t,
          });
        }
        render() {
          let {
            props: { onClick: e, id: t, locked: n, className: i },
            state: { operationStarted: o, lockExtras: l },
          } = this;
          return (0, r.jsxs)(c.animated.div, {
            ref: this.ref,
            style: this.getInlineStyles(),
            className: u()(
              {
                [m.wrapper]: !0,
                [m.operation]: o,
                [m.unlocked]: !n,
                [m.lockExtras]: l,
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
                  dragState: { startX: i, startY: o },
                  state: { operation: l, operationStarted: r },
                } = this;
              if (!(null == l || (!r && 3 > g(i, o, t, n))))
                "MOVE" === l
                  ? this.handleDragMove(t, n)
                  : E.has(l) && this.handleResizeMove(t, n);
            }),
            v(this, "handleOperationStart", (e, t, n) => {
              let {
                ref: { current: i },
                props: {
                  targetWindow: o,
                  active: l,
                  container: { maxX: r, maxY: s },
                },
              } = this;
              if (null == i || !l) return;
              let { width: a, height: u } = _(i, this.size),
                c = (0, f.PY)(this.anchor, r, s, a, u);
              if ("MOVE" === e) {
                let { x: e, y: i } = (function (e) {
                  let { top: t, left: n } = e;
                  return { x: n, y: t };
                })(c);
                this.dragState = {
                  ...this.dragState,
                  startX: t,
                  startY: n,
                  offsetX: t - e,
                  offsetY: n - i,
                };
              } else {
                let i = I(e, c);
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
                o.addEventListener("mousemove", this.handleMouseMove),
                  o.addEventListener("mouseup", this.handleOperationEnd);
              });
            }),
            v(this, "handleOperationEnd", () => {
              let { operation: e, operationStarted: t } = this.state,
                { targetWindow: n, onDragEnd: i } = this.props;
              n.removeEventListener("mousemove", this.handleMouseMove),
                n.removeEventListener("mouseup", this.handleOperationEnd);
              let o = t
                ? () => {
                    let { onUpdate: t, id: n } = this.props;
                    t(
                      e,
                      n,
                      this.anchor,
                      this.size,
                      _(this.ref.current, this.size),
                    );
                  }
                : void 0;
              if (t) {
                let { maxX: e, maxY: t } = this.props.container,
                  { width: n, height: o } = _(this.ref.current, this.size),
                  l = (0, f.PY)(this.anchor, e, t, n, o),
                  r = (0, f.R)(l);
                this.setDOMPositions(r),
                  this.setDOMSize({ width: n, height: o }),
                  null != i && i();
              }
              this.setState({ operation: null, operationStarted: !1 }, o);
            }),
            v(this, "setLockExtras", (e) => {
              this.setState({ lockExtras: e });
            }),
            (this.anchor = C(e.anchor)),
            (this.size = x(e.size, e.minSize.width, e.minSize.height));
        }
      }
      v(b, "Operations", i);
    },
    350663: function (e, t, n) {
      n.d(t, {
        z: function () {
          return f;
        },
      });
      var i = n(200651),
        o = n(192379),
        l = n(120356),
        r = n.n(l),
        s = n(752877),
        a = n(481060),
        u = n(110924),
        c = n(752802),
        d = n(340101),
        h = n(228680);
      let f = 8,
        p = (e) => {
          let {
            participant: t,
            width: n,
            locked: o,
            widgetId: l,
            pinned: r,
          } = e;
          return (0, i.jsx)(
            c.Z,
            { participant: t, width: n, locked: o, widgetId: l, pinned: r },
            t.user.id,
          );
        },
        m = { mass: 1, tension: 250, friction: 18, clamp: !0 };
      t.Z = o.memo(function (e) {
        let {
            widgetId: t,
            tileWidth: n,
            layout: o,
            locked: l,
            streamParticipants: c,
            participantsVersion: v,
            pinned: g,
          } = e,
          E = (9 / 16) * n,
          x = c.map((e) => ({
            participant: e,
            key: e.user.id,
            width: n,
            locked: l,
            widgetId: t,
            height: E,
            pinned: g,
          })),
          C = (0, u.Z)(n),
          Z = o === d.C5.VERTICAL,
          _ = 0,
          I = 0,
          S = (0, a.useTransition)(
            Z
              ? x.map((e, t) => ({
                  ...e,
                  y: (_ += e.height + (t > 0 ? f : 0)) - e.height,
                  x: 0,
                }))
              : x.map((e, t) => ({
                  ...e,
                  x: (I += e.width + (t > 0 ? f : 0)) - e.width,
                  y: 0,
                })),
            {
              key: (e) => e.key,
              from: { height: 0, opacity: 0 },
              leave: { height: 0, opacity: 0 },
              enter: (e) => {
                let { x: t, y: n, width: i, height: o } = e;
                return { x: t, y: n, width: i, height: o, opacity: 1 };
              },
              update: (e) => {
                let { x: t, y: n, width: i, height: o } = e;
                return { x: t, y: n, width: i, height: o };
              },
              config: m,
              trail: n !== C ? 0 : 100,
            },
            n !== C ? "animate-never" : "respect-motion-settings",
          );
        return (0, i.jsx)("div", {
          className: r()({
            [h.gridContainer]: !0,
            [h.vertical]: Z,
            [h.horizontal]: !Z,
          }),
          style: Z ? { height: _ } : { width: I },
          children: S((e, t, o, l) =>
            (0, i.jsx)(s.animated.div, {
              className: h.gridItem,
              style: Object.assign({}, e, {
                width: n,
                height: E,
                zIndex: x.length - l,
              }),
              children: p(t),
            }),
          ),
        });
      });
    },
    1226: function (e, t, n) {
      n.d(t, {
        BO: function () {
          return a;
        },
        cq: function () {
          return c;
        },
        gI: function () {
          return d;
        },
        xN: function () {
          return h;
        },
        yA: function () {
          return u;
        },
      });
      var i = n(348327),
        o = n.n(i),
        l = n(972959),
        r = n(569545);
      let s = (0, l.H)(() => ({ streams: {} }));
      function a(e) {
        var t, n;
        let i = (0, r.V9)(e);
        return null !==
          (n =
            null === (t = s.useState((e) => e.streams, o())[i]) || void 0 === t
              ? void 0
              : t.zoom) && void 0 !== n
          ? n
          : 100;
      }
      function u(e) {
        return a(e) / 100;
      }
      function c(e, t) {
        let n = (0, r.V9)(e);
        s.setState((e) => {
          var i;
          return {
            ...e,
            streams: {
              ...e.streams,
              [n]: {
                zoom: t,
                fitOverride:
                  null === (i = e.streams[n]) || void 0 === i
                    ? void 0
                    : i.fitOverride,
              },
            },
          };
        }, !0);
      }
      function d(e, t) {
        let n = (0, r.V9)(e);
        s.setState((e) => {
          var i;
          return {
            ...e,
            streams: {
              ...e.streams,
              [n]: {
                zoom:
                  null === (i = e.streams[n]) || void 0 === i ? void 0 : i.zoom,
                fitOverride: t,
              },
            },
          };
        });
      }
      function h(e) {
        var t;
        let n = (0, r.V9)(e);
        return null === (t = s.useState((e) => e.streams, o())[n]) ||
          void 0 === t
          ? void 0
          : t.fitOverride;
      }
    },
    752802: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return A;
        },
      }),
        n(47120);
      var i = n(200651),
        o = n(192379),
        l = n(120356),
        r = n.n(l),
        s = n(399606),
        a = n(46973),
        u = n(481060),
        c = n(846027),
        d = n(239091),
        h = n(765250),
        f = n(872810),
        p = n(40851),
        m = n(414910),
        v = n(194082),
        g = n(979264),
        E = n(871118),
        x = n(352978),
        C = n(833519),
        Z = n(839662),
        _ = n(199902),
        I = n(314897),
        S = n(131951),
        b = n(594174),
        N = n(5192),
        O = n(1226),
        y = n(981631),
        j = n(388032),
        T = n(2847);
      function k(e) {
        let { participant: t } = e,
          n = t.user.id,
          l = (0, s.e7)(
            [S.Z],
            () => {
              let e = (0, m.Z)(t.type);
              return S.Z.isLocalMute(t.user.id, e);
            },
            [t],
          ),
          r = (0, s.e7)([I.default], () => I.default.getId()),
          { hasVideo: d } = (0, Z.Z)(t, r),
          h = l && d,
          f = o.useCallback(() => {
            c.Z.toggleLocalMute(n, a.Yn.STREAM);
          }, [n]);
        return (0, i.jsx)(u.Tooltip, {
          text: h ? j.intl.string(j.t.YqAjX1) : j.intl.string(j.t["w4m94+"]),
          children: (e) => {
            let { onClick: t, ...n } = e;
            return (0, i.jsx)(u.Clickable, {
              ...n,
              className: T.controlAction,
              onClick: (e) => {
                e.stopPropagation(), null == t || t(), f();
              },
              children: h
                ? (0, i.jsx)(u.VoiceXIcon, {
                    size: "sm",
                    color: "currentColor",
                  })
                : (0, i.jsx)(u.VoiceNormalIcon, {
                    size: "sm",
                    color: "currentColor",
                  }),
            });
          },
        });
      }
      function L(e) {
        let { hasActiveStream: t, participant: o, onEnablePin: l } = e,
          a = (0, p.bp)(),
          c = o.user,
          h = (0, s.e7)(
            [b.default],
            () => {
              var e;
              return null !== (e = b.default.getUser(c.id)) && void 0 !== e
                ? e
                : c;
            },
            [c],
          ),
          m = t ? j.intl.string(j.t.tLxK4u) : j.intl.string(j.t.E5RDnJ);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("div", {
              className: r()(T.controlBackground, {
                [T.controlsWithActiveStream]: t,
              }),
            }),
            !t &&
              (0, i.jsx)("div", {
                className: T.watchActionContainer,
                children: (0, i.jsx)(u.Tooltip, {
                  text: m,
                  children: (e) =>
                    (0, i.jsxs)(u.Clickable, {
                      ...e,
                      className: T.watchButton,
                      onClick: () => {
                        var t;
                        null === (t = e.onClick) || void 0 === t || t.call(e),
                          (0, f.rn)(o.stream, {
                            forceMultiple: !0,
                            noFocus: !0,
                          }),
                          l();
                      },
                      children: [
                        (0, i.jsx)(u.Text, {
                          variant: "text-sm/semibold",
                          color: "always-white",
                          children: j.intl.string(j.t["I6JG4+"]),
                        }),
                        (0, i.jsx)(u.EyePlusIcon, {
                          size: "sm",
                          color: "currentColor",
                        }),
                      ],
                    }),
                }),
              }),
            (0, i.jsxs)("div", {
              className: T.controls,
              children: [
                (0, i.jsx)("div", {
                  className: T.controlUser,
                  children: (0, i.jsxs)("div", {
                    className: T.controlUserContainer,
                    children: [
                      (0, i.jsx)(u.ScreenIcon, {
                        size: "xs",
                        color: u.tokens.colors.INTERACTIVE_ACTIVE,
                      }),
                      (0, i.jsx)(u.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: N.ZP.getName(
                          o.stream.guildId,
                          o.stream.channelId,
                          c,
                        ),
                      }),
                      (0, i.jsx)(g.ZP, { clan: h.clan, userId: c.id }),
                    ],
                  }),
                }),
                (0, i.jsx)("div", {
                  className: T.controlActions,
                  children:
                    t &&
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(k, { participant: o }),
                        (0, i.jsx)(u.Tooltip, {
                          text: j.intl.string(j.t["3D5yo6"]),
                          children: (e) => {
                            let { onClick: t, ...l } = e;
                            return (0, i.jsx)(u.Clickable, {
                              ...l,
                              className: T.controlAction,
                              onClick: (e) => {
                                e.stopPropagation(),
                                  null == t || t(),
                                  (0, d.jW)(e, async () => {
                                    let { default: e } = await n
                                      .e("5704")
                                      .then(n.bind(n, 360429));
                                    return (t) =>
                                      (0, i.jsx)(e, {
                                        ...t,
                                        stream: o.stream,
                                        exitFullscreen: () => {},
                                        appContext: a,
                                      });
                                  });
                              },
                              children: (0, i.jsx)(u.MoreHorizontalIcon, {
                                size: "sm",
                                color: "currentColor",
                              }),
                            });
                          },
                        }),
                      ],
                    }),
                }),
              ],
            }),
          ],
        });
      }
      let w = new Set([y.jm8.ENDED, y.jm8.FAILED, y.jm8.PAUSED]),
        A = o.memo(function (e) {
          let {
              participant: t,
              width: n,
              locked: o,
              widgetId: l,
              pinned: a,
            } = e,
            u = (0, s.e7)(
              [_.Z],
              () => _.Z.getActiveStreamForUser(t.user.id, t.stream.guildId),
              [t.user.id, t.stream.guildId],
            ),
            c = null != u && w.has(u.state),
            d = null != u,
            f = (0, O.yA)(t.stream),
            p = (0, O.xN)(t.stream);
          return (!d && o) || c
            ? null
            : (0, i.jsxs)("div", {
                className: T.tile,
                children: [
                  d &&
                    !o &&
                    (0, i.jsx)(v.ZP, {
                      size: v.ZP.Sizes.SMALL,
                      className: T.liveIndicator,
                    }),
                  d
                    ? (0, i.jsx)("div", {
                        className: T.streamTile,
                        children: (0, i.jsx)("div", {
                          className: T.streamTile,
                          style: { transform: "scale(".concat(f, ")") },
                          children: (0, i.jsx)(C.Z, {
                            participant: t,
                            width: n,
                            fit: null != p ? p : x.L.CONTAIN,
                            inPopout: !0,
                            focused: !o,
                            paused: !1,
                            selected: !1,
                            wrapperClassName: o ? T.streamTileWrapper : void 0,
                          }),
                        }),
                      })
                    : (0, i.jsx)("div", {
                        className: T.streamPreview,
                        children: (0, i.jsx)(E.Z, {
                          noText: !0,
                          className: r()(T.absoluteFill),
                          stream: t.stream,
                        }),
                      }),
                  o
                    ? null
                    : (0, i.jsx)(L, {
                        participant: t,
                        hasActiveStream: d,
                        onEnablePin: () => {
                          !a && (0, h.xh)(l);
                        },
                      }),
                ],
              });
        });
    },
    761374: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return C;
        },
      }),
        n(47120);
      var i = n(200651),
        o = n(192379),
        l = n(442837),
        r = n(765250),
        s = n(393238),
        a = n(358221),
        u = n(569545),
        c = n(199902),
        d = n(314897),
        h = n(592125),
        f = n(355863),
        p = n(944486),
        m = n(350663),
        v = n(340101),
        g = n(666540);
      let E = [];
      function x(e, t, n, i) {
        let o = (i - 1) * m.z;
        return e === v.C5.HORIZONTAL
          ? Math.min(Math.max((t - o) / i, 256), Math.max((16 * n) / 9, 256))
          : Math.min(Math.max(t, 256), Math.max((((n - o) / i) * 16) / 9, 256));
      }
      function C(e) {
        var t;
        let {
            id: n,
            size: C,
            locked: Z,
            padding: _,
            borderWidth: I,
            opacity: S,
            horizontal: b,
            pinned: N,
          } = e,
          O = 2 * _ + 2 * I;
        let { width: y, height: j } = {
            width: "number" == typeof (t = C).width ? t.width : 256,
            height: "number" == typeof t.height ? t.height : 144,
          },
          T = (0, l.e7)([p.Z], () => p.Z.getVoiceChannelId()),
          { width: k, height: L, ref: w } = (0, s.Z)(),
          A = (0, l.e7)(
            [f.Z],
            () => {
              var e;
              let t = f.Z.getWidget(n);
              return (
                !!(0, v.ZL)(t) &&
                (null === (e = t.meta.showAllStreams) || void 0 === e || e)
              );
            },
            [n],
          ),
          R = (0, l.e7)([h.Z], () => h.Z.getChannel(T)),
          M = (0, l.e7)([d.default], () => d.default.getId()),
          { participantsVersion: z, streamParticipants: D } = (0, l.cj)(
            [c.Z, a.Z],
            () => {
              if (null == T)
                return { streamParticipants: E, participantsVersion: -1 };
              let e = new Set(
                  c.Z.getAllActiveStreamsForChannel(T).map((e) => (0, u.V9)(e)),
                ),
                t = (t) => e.has((0, u.V9)(t.stream)),
                n = a.Z.getStreamParticipants(T).filter(
                  (t) => t.user.id !== M && (!!A || e.has((0, u.V9)(t.stream))),
                );
              return (
                n.sort((e, n) =>
                  t(e) && !t(n)
                    ? -1
                    : !t(e) && t(n)
                      ? 1
                      : e.user.username.localeCompare(n.user.username),
                ),
                {
                  streamParticipants: n,
                  activeStreams: e,
                  participantsVersion: a.Z.getParticipantsVersion(T),
                }
              );
            },
            [T, M, A],
          ),
          P = D.length,
          V = null == R || 0 === P,
          { tileWidth: W, layout: U } = (function (e, t, n, i, l) {
            let r = (function (e, t, n, i) {
                let o = x(v.C5.HORIZONTAL, e, t, n),
                  l = x(v.C5.VERTICAL, e, t, n);
                switch (i) {
                  case v.C5.VERTICAL:
                    return l;
                  case v.C5.HORIZONTAL:
                    return o;
                }
                let r = ((9 * l) / 16 + m.z) * n - m.z;
                return e > (16 * t) / 9
                  ? o
                  : r <= t
                    ? l
                    : (9 * o) / 16 <= t
                      ? o
                      : l;
              })(n, i, t, l),
              s = x(v.C5.VERTICAL, n, i, t),
              a = null != l ? l : r === s ? v.C5.VERTICAL : v.C5.HORIZONTAL,
              [u, c] = o.useState(r);
            return (
              o.useEffect(() => {
                !e && c(r);
              }, [e, r]),
              { layout: a, tileWidth: u }
            );
          })(
            !1,
            P,
            null != k ? k : y - O,
            null != L ? L : j - O,
            b ? v.C5.HORIZONTAL : v.C5.VERTICAL,
          ),
          F = {
            id: n,
            width: y,
            height: j,
            sizeOffset: O,
            layout: U,
            padding: _,
            participants: D.length,
          };
        return (!(function (e) {
          let {
              id: t,
              streamParticipants: n,
              layout: i,
              widgetLayoutSpecs: l,
            } = e,
            s = o.useRef(l);
          o.useEffect(() => void (s.current = l)),
            o.useEffect(() => {
              let {
                id: e,
                width: t,
                height: i,
                sizeOffset: o,
                layout: l,
                padding: a,
              } = s.current;
              if (0 === n.length) {
                (256 !== t || 144 !== i) &&
                  (0, r.nv)({
                    widgetId: e,
                    size: { fixed: !0, width: 256, height: 144 },
                  });
                return;
              }
              if (l === v.C5.HORIZONTAL) {
                let t = (16 / 9) * (i - o);
                (0, r.nv)({
                  widgetId: e,
                  size: {
                    fixed: !0,
                    height: i,
                    width: t * n.length + a * (n.length - 1) + o,
                  },
                });
              } else {
                let i = (9 / 16) * (t - o);
                (0, r.nv)({
                  widgetId: e,
                  size: {
                    fixed: !0,
                    width: t,
                    height: i * n.length + a * (n.length - 1) + o,
                  },
                });
              }
            }, [n.length]),
            o.useEffect(() => {
              if (s.current.participants <= 1) return;
              let {
                id: e,
                width: t,
                height: n,
                sizeOffset: o,
                padding: l,
                participants: a,
              } = s.current;
              if (i === v.C5.HORIZONTAL) {
                let n = t - o;
                (0, r.nv)({
                  widgetId: e,
                  size: {
                    fixed: !0,
                    width: n * a + l * (a - 1) + o,
                    height: (9 / 16) * n + o,
                  },
                });
              } else {
                let t = n - o;
                (0, r.nv)({
                  widgetId: e,
                  size: {
                    fixed: !0,
                    width: (16 / 9) * t + o,
                    height: t * a + l * (a - 1) + o,
                  },
                });
              }
            }, [i]),
            o.useEffect(
              () => () => {
                (0, r.nv)({
                  widgetId: t,
                  size: { fixed: !0, width: 256, height: 144 },
                });
              },
              [t],
            );
        })({ id: n, streamParticipants: D, layout: U, widgetLayoutSpecs: F }),
        V && Z)
          ? null
          : (0, i.jsx)("div", {
              className: g.goLiveGridContainer,
              style: { opacity: S },
              ref: w,
              children: (0, i.jsx)(m.Z, {
                widgetId: n,
                tileWidth: W,
                locked: Z,
                layout: U,
                streamParticipants: D,
                participantsVersion: z,
                pinned: N,
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
      var o = n(120356),
        l = n.n(o),
        r = n(481060),
        s = n(809357),
        a = n(163752);
      function u(e) {
        let { onClick: t, keybind: n, className: o, IconComponent: u } = e,
          c = (0, s.o)();
        return (0, i.jsxs)("div", {
          className: l()(a.buttonContainer, o),
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
            null != n && c
              ? (0, i.jsx)(r.Text, {
                  className: l()(a.keybind),
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
      var o = n(120356),
        l = n.n(o),
        r = n(256403);
      function s(e) {
        let { keybind: t, className: n } = e;
        return (0, i.jsx)(i.Fragment, {
          children: t.map((e, t) =>
            (0, i.jsx)("span", { className: l()(r.key, n), children: e }, t),
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
        o = n(192379),
        l = n(120356),
        r = n.n(l),
        s = n(442837),
        a = n(952265),
        u = n(481060),
        c = n(239091),
        d = n(13245),
        h = n(100527),
        f = n(906732),
        p = n(146282),
        m = n(70097),
        v = n(567409),
        g = n(74299),
        E = n(199902),
        x = n(592125),
        C = n(430824),
        Z = n(131951),
        _ = n(944486),
        I = n(574254),
        S = n(556296),
        b = n(237997),
        N = n(451478),
        O = n(585483),
        y = n(358085),
        j = n(13140),
        T = n(145597),
        k = n(830917),
        L = n(86071),
        w = n(681603),
        A = n(915614),
        R = n(690336),
        M = n(333031),
        z = n(388627),
        D = n(319414),
        P = n(561064),
        V = n(987650),
        W = n(501787),
        U = n(981631),
        F = n(206583),
        B = n(388032),
        H = n(167566);
      let Y = !y.isPlatformEmbedded && !1,
        G = Y
          ? (0, i.jsx)(m.Z, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: H.videoDev,
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
        (0, c.jW)(e, async () => {
          let { default: e } = await n.e("17610").then(n.bind(n, 385620));
          return (t) =>
            (0, i.jsx)(e, {
              ...t,
              layoutId: W.OVERLAY_V3_LAYOUT_ID,
              version: 1,
            });
        });
      }
      let J = o.memo(function (e) {
          let { keybind: t, onClick: n, locked: o } = e;
          return (0, i.jsx)(u.Clickable, {
            className: r()(H.overlayBackground, {
              [H.overlayActive]: !o,
              [H.overlayLocked]: o,
            }),
            onMouseDown: (e) => {
              let { currentTarget: t, target: i, button: o } = e;
              o === U.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: X,
            children: o
              ? null
              : (0, i.jsx)(M.Z, {
                  className: H.closeContainer,
                  children: (0, i.jsx)(A.Z, {
                    keybind: t,
                    onClick: n,
                    IconComponent: u.XLargeIcon,
                  }),
                }),
          });
        }),
        q = o.memo(function (e) {
          let { locked: t, focused: n } = e;
          return t && n
            ? (0, i.jsx)(M.Z, {
                className: H.closeContainer,
                children: (0, i.jsx)(A.Z, {
                  onClick: () => d.Z.setInputLocked(!1, (0, T.QF)()),
                  IconComponent: u.LockUnlockedIcon,
                }),
              })
            : null;
        });
      function $() {
        if (null != I.Z.getContextMenu()) {
          (0, c.Zy)();
          return;
        }
        d.Z.setInputLocked(!0, (0, T.QF)());
      }
      function ee() {
        d.Z.setFocusedPID(T.Js);
      }
      function et() {
        d.Z.setFocusedPID(null);
      }
      function en(e) {
        let t = b.Z.isLocked((0, T.QF)());
        "alt" === e.key.toLowerCase() &&
          !t &&
          ("keyup" === e.type.toLowerCase()
            ? O.S.dispatch(U.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 })
            : "keydown" === e.type.toLowerCase() &&
              O.S.dispatch(U.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
      }
      function ei(e) {
        var t, n;
        let { isEmbeddedActivity: l } = e,
          c = (0, P.Z)(),
          {
            locked: m,
            focused: I,
            incompatibleApp: O,
            hasValidResolution: y,
            hasZeroSizeDimension: A,
            keybind: M,
          } = (0, s.cj)([b.Z, N.Z, S.Z], () => {
            let e = N.Z.windowSize((0, k.ZY)(c)),
              t = S.Z.getOverlayKeybind();
            return {
              locked: b.Z.isLocked((0, T.QF)()),
              focused: b.Z.isFocused((0, T.QF)()),
              incompatibleApp: b.Z.incompatibleApp,
              hasValidResolution: (0, T.Te)(e),
              hasZeroSizeDimension: 0 === e.height || 0 === e.width,
              keybind: null != t ? (0, j.BB)(t.shortcut, !0) : "???",
            };
          }),
          { analyticsLocations: W } = (0, f.ZP)(h.Z.OVERLAY);
        return (
          !(function (e, t) {
            let n = o.useRef({ mount: e, unmount: t });
            o.useEffect(() => void (n.current = { mount: e, unmount: t })),
              o.useEffect(
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
              d.Z.overlayReady((0, T.QF)()),
                c.addEventListener("keydown", en),
                c.addEventListener("keyup", en),
                Y &&
                  (c.document.hasFocus() && d.Z.setFocusedPID(T.Js),
                  c.addEventListener("focus", ee),
                  c.addEventListener("blur", et));
            },
            () => {
              c.removeEventListener("keydown", en),
                c.removeEventListener("keyup", en),
                Y &&
                  (c.removeEventListener("focus", ee),
                  c.removeEventListener("blur", et));
            },
          ),
          !(function () {
            let e = o.useRef(!1),
              t = (0, z.pL)(),
              n = _.Z.getVoiceChannelId(),
              i = x.Z.getChannel(n),
              l = null != i ? C.Z.getGuild(i.guild_id) : null,
              r = null != E.Z.getCurrentUserActiveStream(),
              a = null != n,
              u = (0, g.Z)(Z.Z) && !r && null != t,
              c = a && null != l && null != n,
              h = (0, v.Ns)(null == t ? void 0 : t.id),
              f = (0, s.e7)(
                [p.Z],
                () => null != p.Z.getLastFeedFetchDate(F.YN.GAME_PROFILE_FEED),
              );
            o.useEffect(() => {
              if (!f || e.current) return;
              (e.current = !0),
                d.Z.track(U.rMx.OVERLAY_INITIALIZED, {
                  voice_widget_connected: a,
                  text_widget_connected: !1,
                });
              let i = [{ type: V.nc.WELCOME }];
              if (
                (u && c
                  ? i.push({
                      type: V.nc.GO_LIVE_VOICE,
                      game: t,
                      voiceChannelId: n,
                      voiceGuild: l,
                    })
                  : u && i.push({ type: V.nc.GO_LIVE_NON_VOICE, game: t }),
                h.length > 0)
              ) {
                let { enabled: e } = L.Z.getCurrentConfig(
                  { location: "Overlay" },
                  { autoTrackExposure: !0 },
                );
                e && i.push({ type: V.nc.CONTENT_INVENTORY, entries: h });
              }
              d.Z.overlayMounted(...i);
            }, [f, h, a, u, c, t, n, l]);
          })(),
          (t = m),
          (n = c),
          o.useEffect(() => {
            if (t) {
              if (
                ((0, a.Ay)(u.POPOUT_MODAL_CONTEXT),
                n.addEventListener("contextmenu", Q, !1),
                null != K)
              ) {
                let e = Date.now() - K;
                d.Z.track(U.rMx.OVERLAY_LOCKED, { unlocked_duration: e }),
                  (K = null);
              }
              return () => {
                n.removeEventListener("contextmenu", Q, !1);
              };
            }
            n.removeEventListener("contextmenu", Q, !1),
              null == K &&
                ((K = Date.now()), d.Z.track(U.rMx.OVERLAY_UNLOCKED));
          }, [t, n]),
          (0, i.jsx)(f.Gt, {
            value: W,
            children: (0, i.jsx)(u.RedesignIconContextProvider, {
              children:
                A || O
                  ? null
                  : (0, i.jsx)(u.ThemeProvider, {
                      theme: U.BRd.DARK,
                      children: (e) =>
                        (0, i.jsxs)("div", {
                          className: r()(H.overlay, e),
                          children: [
                            !l && G,
                            (0, i.jsx)(J, {
                              locked: m,
                              keybind: M,
                              onClick: $,
                            }),
                            y
                              ? (0, i.jsx)(R.Z, {
                                  className: r()({
                                    [H.layoutLocked]: m,
                                    [H.layoutUnlocked]: !m,
                                  }),
                                })
                              : m
                                ? null
                                : (0, i.jsx)("div", {
                                    className: H.invalidContainer,
                                    children: (0, i.jsx)("div", {
                                      className: H.inactiveContainer,
                                      children: B.intl.format(B.t.ketnW1, T.FW),
                                    }),
                                  }),
                            (0, i.jsx)(D.Z, {}),
                            !l && Y && (0, i.jsx)(q, { locked: m, focused: I }),
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
        o = n(192379),
        l = n(442837),
        r = n(481060),
        s = n(355863),
        a = n(451478),
        u = n(830917),
        c = n(388627),
        d = n(892127),
        h = n(84346),
        f = n(561064),
        p = n(501787);
      function m(e) {
        return e.widget.id;
      }
      function v(e, t, n, o) {
        return n === r.TransitionStates.YEETED
          ? null
          : (0, i.jsx)(d.Z, { ...t, transitionState: n, cleanUp: o }, e);
      }
      let g = [];
      t.Z = o.memo(function (e) {
        let { className: t } = e,
          n = (0, f.Z)(),
          d = (0, l.e7)([a.Z], () => a.Z.windowSize((0, u.ZY)(n))),
          E = (0, l.e7)(
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
            c.HP,
          ),
          x = o.useCallback(
            (e) => (0, i.jsx)("div", { className: t, style: d, children: e }),
            [t, d],
          );
        return (0, i.jsx)(r.TransitionGroup, {
          items: E,
          renderItem: v,
          getItemKey: m,
          wrapChildren: x,
        });
      });
    },
    333031: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _;
        },
      }),
        n(47120);
      var i = n(200651),
        o = n(192379),
        l = n(120356),
        r = n.n(l),
        s = n(954955),
        a = n.n(s),
        u = n(772848),
        c = n(442837),
        d = n(902704),
        h = n(13245),
        f = n(928518),
        p = n(358085),
        m = n(610394),
        v = n(561064),
        g = n(501787),
        E = n(608631);
      function x(e, t, n) {
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
      let Z = o.createContext(
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
            x(this, "resizeObserver", void 0),
              x(this, "mutationObserver", void 0),
              x(this, "zones", new Map()),
              x(this, "elements", new Set()),
              x(this, "window", void 0),
              x(this, "handleResize", () => {
                this.globalUpdate();
              }),
              x(this, "handleMutations", () => {
                this.globalUpdate();
              }),
              x(
                this,
                "globalUpdate",
                a()(
                  () => {
                    let e = !1;
                    for (let [t, n] of this.zones) {
                      let i = t.getBoundingClientRect(),
                        o = C(n.zone.name, i);
                      if (!(0, d.Z)(o, n.zone))
                        (e = !0),
                          (n = { element: n.element, zone: o }),
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
      function _(e) {
        let { observe: t = !0, className: n, children: l } = e,
          s = o.useContext(Z),
          a = (0, c.e7)([m.Z], () => m.Z.clickZoneDebugMode),
          [{ refHandler: u, setObserve: d }] = o.useState(() => {
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
          o.useLayoutEffect(() => {
            d(t);
          }, [t, d]),
          (0, i.jsx)("div", {
            ref: u,
            className: r()(n, E.clickable, a && E.debugMode),
            "data-click-zone": !0,
            children: l,
          })
        );
      }
    },
    340101: function (e, t, n) {
      n.d(t, {
        C5: function () {
          return o;
        },
        ZL: function () {
          return r;
        },
        js: function () {
          return s;
        },
      });
      var i,
        o,
        l = n(981631);
      function r(e) {
        return (null == e ? void 0 : e.type) === l.Odu.GO_LIVE;
      }
      function s(e) {
        return e.type === l.Odu.VIDEO;
      }
      ((i = o || (o = {})).HORIZONTAL = "horizontal"),
        (i.VERTICAL = "vertical");
    },
    293224: function (e, t, n) {
      n.d(t, {
        L: function () {
          return ed;
        },
        N3: function () {
          return el;
        },
        Ox: function () {
          return ei;
        },
        SE: function () {
          return eo;
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
        o = n(192379),
        l = n(120356),
        r = n.n(l),
        s = n(442837),
        a = n(685072),
        u = n(400354),
        c = n(652844),
        d = n(864094),
        h = n(582019),
        f = n(75735),
        p = n(481060),
        m = n(846027),
        v = n(239091),
        g = n(287734),
        E = n(40851),
        x = n(100527),
        C = n(906732),
        Z = n(571250),
        _ = n(628581),
        I = n(659580),
        S = n(793865),
        b = n(55311),
        N = n(575175),
        O = n(933557),
        y = n(471445),
        j = n(74299),
        T = n(803647),
        k = n(565138),
        L = n(917405),
        w = n(603074),
        A = n(879815),
        R = n(189771),
        M = n(294629),
        z = n(67844),
        D = n(544384),
        P = n(892807),
        V = n(560688),
        W = n(199902),
        U = n(592125),
        F = n(430824),
        B = n(131951),
        H = n(19780),
        Y = n(944486),
        G = n(594174),
        K = n(979651),
        Q = n(823379),
        X = n(388627),
        J = n(46145),
        q = n(981631),
        $ = n(388032),
        ee = n(725775);
      function et(e) {
        let t = o.useRef(null);
        return (
          o.useEffect(() => {
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
          cutoutIcon: o,
          icon: l,
          tooltip: s,
          defaultColor: a = p.Button.Colors.TRANSPARENT,
          highlightedColor: u = p.Button.Colors.WHITE,
          onClick: c,
          onCutoutClick: d,
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
              onClick: c,
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
                l,
                null != o &&
                  (0, i.jsx)(p.Clickable, {
                    onClick: (e) => {
                      e.stopPropagation(),
                        e.preventDefault(),
                        null == d || d(e);
                    },
                    className: r()(
                      ee.cutoutContainer,
                      t && ee.toggledCutoutContainer,
                    ),
                    children: o,
                  }),
              ],
            });
          },
        });
      }
      function ei(e) {
        let { voiceChannel: t, locked: n } = e,
          { suppress: l, selfMute: r, mute: s } = (0, M.Z)(t),
          a = r || s || l,
          u = (0, _.Z)(r, s, l, !1),
          {
            Component: d,
            play: h,
            events: f,
          } = (0, c.O)(a ? "unmute" : "mute");
        o.useEffect(() => () => h(), [h, a]);
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
              { isShown: o } = t;
            return (0, i.jsx)(en, {
              icon: (0, i.jsx)(d, { color: "currentColor", size: "sm" }),
              tooltip: u,
              isToggled: !a,
              onClick: () => (0, N.Z)(s, l, q.jXE.OVERLAY),
              onCutoutClick: n,
              onContextMenu: n,
              onMouseEnter: () => {
                f.onMouseEnter();
              },
              onMouseLeave: () => {
                f.onMouseLeave();
              },
              cutoutIcon: o
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
      function eo(e) {
        let { voiceChannel: t } = e,
          { selfDeaf: l, deaf: r } = (0, A.Z)(t),
          s = l || r,
          {
            Component: a,
            play: c,
            events: { onMouseEnter: d, onMouseLeave: h },
          } = (0, u.l)(s ? "undeafen" : "deafen"),
          f = r ? p.HeadphonesDenyIcon : a,
          { analyticsLocations: m } = (0, C.ZP)(x.Z.OVERLAY);
        return (
          o.useEffect(() => () => c(), [s, c]),
          (0, i.jsx)(en, {
            icon: (0, i.jsx)(f, { color: "currentColor", size: "sm" }),
            tooltip: (0, Z.Z)(l, r, !1),
            isToggled: s,
            onClick: () => {
              (0, b.Z)(r, q.jXE.OVERLAY);
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
            onMouseEnter: d,
            onMouseLeave: h,
          })
        );
      }
      function el(e) {
        var t;
        let { voiceChannel: n, locked: l } = e,
          r = (0, s.e7)([B.Z], () => B.Z.isVideoEnabled()),
          a = (0, s.e7)([B.Z], () => Object.values(B.Z.getVideoDevices())[0]),
          u =
            null === (t = null == a ? void 0 : a.disabled) || void 0 === t || t,
          c = !1 === u,
          d = (0, R.Z)(n),
          h = (e) => {
            m.Z.setVideoEnabled(e);
          },
          v = () => {
            c ? h(!0) : (0, V.Z)();
          },
          g = u ? () => v() : () => h(!r),
          {
            Component: E,
            play: x,
            events: { onMouseEnter: C, onMouseLeave: Z },
          } = (0, f.o)(r ? "disable" : "enable"),
          _ =
            null != n
              ? (0, z.X)({
                  enabled: r,
                  cameraUnavailable: u,
                  hasPermission: d,
                  channel: n,
                })
              : void 0;
        o.useEffect(() => () => x(), [r, x]);
        let I = et(l),
          b = null == n || !d;
        return (0, i.jsx)(p.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(S.Z, { onClose: I(t) });
          },
          align: "center",
          position: "top",
          animation: p.Popout.Animation.FADE,
          children: (e, t) => {
            let { onClick: n } = e,
              { isShown: o } = t;
            return (0, i.jsx)(en, {
              icon: (0, i.jsx)(E, { color: "currentColor", size: "sm" }),
              tooltip: _,
              onClick: g,
              isToggled: r,
              onCutoutClick: n,
              onContextMenu: n,
              onMouseEnter: C,
              onMouseLeave: Z,
              cutoutIcon: b
                ? null
                : o
                  ? (0, i.jsx)(p.ChevronSmallUpIcon, {
                      color: "currentColor",
                      size: "sm",
                    })
                  : (0, i.jsx)(p.ChevronSmallDownIcon, {
                      color: "currentColor",
                      size: "sm",
                    }),
              disabled: b,
            });
          },
        });
      }
      function er(e) {
        let t,
          { voiceChannel: l, locked: r } = e,
          a = null == l ? void 0 : l.id,
          u = (0, s.e7)([G.default], () => G.default.getCurrentUser()),
          c = (0, R.Z)(l),
          h = (0, s.cj)([B.Z], () => (0, j.Z)(B.Z)),
          f = (0, s.e7)([W.Z], () => W.Z.getCurrentUserActiveStream()),
          m = (0, E.bp)(),
          v = null == l ? void 0 : l.getGuildId(),
          g = o.useCallback(() => {
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
          x = null != f;
        if (x) t = $.intl.string($.t.S5anIS);
        else if (null != l) {
          let e = (0, X.pL)();
          t = c
            ? null != e
              ? $.intl.format($.t.AB5gT0, { game: e.name })
              : $.intl.string($.t.FeUKeH)
            : $.intl.string($.t.uQn9Bw);
        }
        let C = () => {
            if (x) return (0, T.Z)(f, !1);
            g();
          },
          {
            Component: Z,
            events: { onMouseEnter: _, onMouseLeave: I },
            play: S,
          } = (0, d.P)(x ? "disable" : "enable");
        o.useEffect(() => () => S(), [x, S]);
        let b = et(r);
        return (0, i.jsx)(p.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return null != l
              ? (0, i.jsx)(D.Z, {
                  channel: l,
                  currentUser: u,
                  activeStreams: null != f ? [f] : [],
                  handleGoLive: g,
                  onClose: b(t),
                  appContext: m,
                  disableChangeWindows: !0,
                })
              : (0, i.jsx)(i.Fragment, {});
          },
          align: "center",
          position: "top",
          animation: p.Popout.Animation.FADE,
          children: (e, n) => {
            let { onClick: o } = e,
              { isShown: l } = n;
            return (0, i.jsx)(en, {
              icon: (0, i.jsx)(Z, { color: "currentColor", size: "sm" }),
              tooltip: t,
              isToggled: x,
              cutoutIcon:
                null != f
                  ? l
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
              onCutoutClick: o,
              onContextMenu: o,
              onMouseEnter: _,
              onMouseLeave: I,
              disabled: !h || !c,
            });
          },
        });
      }
      function es(e) {
        var t;
        let { voiceChannel: o, locked: l } = e,
          r =
            null !== (t = null == o ? void 0 : o.getGuildId()) && void 0 !== t
              ? t
              : null,
          { mute: a, suppress: u } = (0, M.Z)(o),
          c = (0, s.e7)([B.Z], () => B.Z.isDeaf()),
          d = null == o || a || u || c;
        function f(e) {
          null != r &&
            (0, v.jW)(e, async () => {
              let { default: e } = await n.e("56049").then(n.bind(n, 338991));
              return (t) => (0, i.jsx)(e, { guildId: r, ...t });
            });
        }
        let {
            Component: m,
            events: { onClick: g, onMouseEnter: E, onMouseLeave: x },
          } = (0, h.j)(),
          C = et(l);
        return (0, i.jsx)(p.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return d || null == o
              ? (0, i.jsx)(i.Fragment, {})
              : (0, i.jsx)(w.Z, {
                  guildId: r,
                  channel: o,
                  onClose: C(t),
                  analyticsSource: "action bar button",
                });
          },
          align: "center",
          position: "top",
          animation: p.Popout.Animation.FADE,
          children: (e, t) => {
            let { onClick: n } = e,
              { isShown: o } = t;
            return (0, i.jsx)(en, {
              icon: (0, i.jsx)(m, { color: "currentColor", size: "sm" }),
              tooltip: (function () {
                if (a) return $.intl.string($.t["Ox4/zc"]);
                if (u) return $.intl.string($.t["+YBKYG"]);
                if (c) return $.intl.string($.t.X1lQlp);
              })(),
              onClick: (e) => {
                g(), n(e);
              },
              onContextMenu: f,
              onMouseEnter: E,
              onMouseLeave: x,
              isToggled: o,
              disabled: d,
            });
          },
        });
      }
      function ea(e) {
        let { voiceChannel: t, locked: n } = e,
          o = (0, s.e7)(
            [Y.Z],
            () => Y.Z.getVoiceChannelId() === (null == t ? void 0 : t.id),
          ),
          l = (0, s.Wu)([J.Z, U.Z], () =>
            J.Z.getChannelHistory()
              .map((e) => U.Z.getChannel(e))
              .filter(Q.lm),
          ),
          r = () => {
            o && g.default.disconnect();
          },
          u = (e) => {
            g.default.selectVoiceChannel(e.id);
          },
          {
            Component: c,
            events: { onMouseEnter: d, onMouseLeave: h },
          } = (0, a.K)(),
          f = et(n);
        return (0, i.jsx)(p.Popout, {
          renderPopout: (e) => {
            let { closePopout: n } = e;
            return l.length > 0
              ? (0, i.jsx)(P.Z, {
                  recentVoiceChannels: l,
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
            let { onClick: l } = e,
              { isShown: s } = n;
            return (0, i.jsx)(en, {
              icon: (0, i.jsx)(c, { color: "currentColor", size: "sm" }),
              tooltip:
                null != t
                  ? $.intl.string($.t["6vrfgo"])
                  : $.intl.string($.t.S0W8Z2),
              onClick: o ? r : l,
              defaultColor: o
                ? p.Button.Colors.RED
                : p.Button.Colors.TRANSPARENT,
              onMouseEnter: d,
              onMouseLeave: h,
              onContextMenu: l,
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
                    (0, i.jsx)(k.Z, {
                      guild: n,
                      size: k.Z.Sizes.SMOL,
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
      function ec(e) {
        let { voiceChannel: t } = e,
          n = (0, y.KS)(t),
          o = (0, O.ZP)(t);
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
              children: o,
            }),
          ],
        });
      }
      function ed(e) {
        let { voiceChannel: t } = e,
          n = null == t ? void 0 : t.id,
          o = (0, s.cj)([H.Z], () => ({
            channelId: H.Z.getChannelId(),
            quality: H.Z.getQuality(),
            state: H.Z.getState(),
            lastPing: H.Z.getLastPing(),
          })),
          l = null != n,
          r = (0, s.e7)([K.Z], () => null != n && K.Z.hasVideo(n), [n]);
        return (
          l &&
          null != t &&
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(L.Z, { ...o, hasVideo: r }),
              (0, i.jsx)(eu, { voiceChannel: t }),
              (0, i.jsx)("div", { className: ee.separatorDot }),
              (0, i.jsx)(ec, { voiceChannel: t }),
            ],
          })
        );
      }
    },
    2923: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(120356),
        l = n.n(o),
        r = n(442837),
        s = n(592125),
        a = n(944486),
        u = n(293224),
        c = n(201636);
      function d(e) {
        let { locked: t } = e,
          n = (0, r.e7)([a.Z], () => a.Z.getVoiceChannelId()),
          o = (0, r.e7)([s.Z], () => s.Z.getChannel(n)),
          d = null != o;
        return (0, i.jsxs)("div", {
          className: l()({ [c.panelContainer]: !0, [c.locked]: t }),
          children: [
            (0, i.jsxs)("div", {
              className: c.panelRow,
              children: [
                (0, i.jsx)(u.Ox, { voiceChannel: o, locked: t }),
                (0, i.jsx)(u.SE, { voiceChannel: o, locked: t }),
                (0, i.jsx)(u.N3, { voiceChannel: o, locked: t }),
                (0, i.jsx)("div", { className: c.separator }),
                (0, i.jsx)(u.sm, { voiceChannel: o, locked: t }),
                (0, i.jsx)(u.aG, { voiceChannel: o, locked: t }),
                (0, i.jsx)("div", { className: c.separator }),
                (0, i.jsx)(u.c_, { voiceChannel: o, locked: t }),
              ],
            }),
            d &&
              (0, i.jsx)("div", {
                className: c.panelRow,
                children: (0, i.jsx)(u.L, { voiceChannel: o, locked: t }),
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
      var o = n(442837),
        l = n(352527),
        r = n(183584),
        s = n(487029),
        a = n(592125),
        u = n(944486),
        c = n(554174),
        d = n(710111),
        h = n(714902);
      function f() {
        let [e, t] = (0, o.Wu)([l.Z], () => [l.Z.enabled, l.Z.keepOpen]),
          n = (0, o.e7)([u.Z], () => u.Z.getVoiceChannelId()),
          f = (0, o.e7)([a.Z], () => a.Z.getChannel(n), [n]),
          p = null == f ? void 0 : f.getGuildId();
        return e && null != f
          ? (0, i.jsx)("div", {
              className: h.container,
              children: (0, i.jsx)(s.Z, {
                width: d.FW.width,
                height: d.FW.height,
                guildId: p,
                channel: f,
                keepOpen: t,
                onClose: function () {
                  let e = (0, c.Z)();
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
          return b;
        },
      });
      var i = n(200651),
        o = n(192379),
        l = n(120356),
        r = n.n(l),
        s = n(442837),
        a = n(239091),
        u = n(765250),
        c = n(393238),
        d = n(358221),
        h = n(933557),
        f = n(352978),
        p = n(27457),
        m = n(796638),
        v = n(592125),
        g = n(131951),
        E = n(944486),
        x = n(906037),
        C = n(501787),
        Z = n(65154),
        _ = n(827202);
      function I(e) {
        var t;
        let { participant: n, channel: o, context: l } = e,
          r = null === (t = n.user) || void 0 === t ? void 0 : t.id;
        return (0, s.e7)(
          [g.Z],
          () =>
            null != n.user &&
            null != l &&
            null != o &&
            g.Z.isLocalVideoDisabled(r, l),
          [r, n.user, l, o],
        )
          ? null
          : (0, i.jsx)(p.ZP, { ...e });
      }
      function S(e) {
        let {
            context: t = Z.Yn.DEFAULT,
            participants: l,
            locked: s,
            widget: u,
            channel: c,
            width: d,
            height: h,
            containerRef: p,
          } = e,
          m = (e, o) => {
            (0, a.jW)(o, async () => {
              let { default: o } = await Promise.all([
                n.e("79695"),
                n.e("69220"),
                n.e("351"),
              ]).then(n.bind(n, 881351));
              return (n) =>
                (0, i.jsx)(o, {
                  ...n,
                  user: e.user,
                  showMediaItems: !0,
                  mediaEngineContext: t,
                });
            });
          },
          v = l.length > 0 && null != t && null != c && (!s || u.pinned);
        o.useEffect(() => {
          (0, x.m3)(
            {
              locked: s,
              pinned: u.pinned,
              widget: u.type,
              isPreviewingInGame: !1,
            },
            v,
          );
        }, [s, u, v]);
        let g = "boolean" != typeof u.meta.horizontal || u.meta.horizontal;
        return v
          ? (0, i.jsx)("div", {
              ref: p,
              className: r()({ [_.videoList]: !0, [_.vertical]: !g }),
              style: { opacity: u.opacity },
              children: l.map((e) =>
                (0, i.jsx)(
                  I,
                  {
                    participant: e,
                    width: d,
                    className: _.tile,
                    containerStyle: { width: d, height: h },
                    fit: f.L.COVER,
                    channel: c,
                    inPopout: !0,
                    inCall: !0,
                    noBorder: !0,
                    onContextMenu: s ? void 0 : m,
                    forceIdle: s,
                    context: t,
                  },
                  e.id,
                ),
              ),
            })
          : null;
      }
      function b(e) {
        let t = (0, s.e7)([E.Z, v.Z], () =>
            v.Z.getChannel(E.Z.getVoiceChannelId()),
          ),
          n = (0, h.ZP)(t),
          l = (0, s.Wu)([d.Z], () =>
            null != t ? d.Z.getVideoParticipants(t.id) : [],
          ),
          r = (0, s.e7)([d.Z], () =>
            null != t ? d.Z.getParticipantsVersion(t.id) : 0,
          ),
          a =
            "boolean" != typeof e.widget.meta.horizontal ||
            e.widget.meta.horizontal,
          { width: f, height: p, ref: g } = (0, c.Z)(),
          { visibleParticipants: x, participantTileWidth: Z } = (0, m.ZB)(
            a ? (null != f ? f : e.width) : null != p ? p : e.height,
            l,
            {
              tileWidth: C.OVERLAY_TILE_WIDTH,
              tileMinWidth: C.OVERLAY_TILE_MIN_WIDTH,
              tileMargin: C.OVERLAY_TILE_MARGIN,
              limit: 8,
              cropSelfVideo: !0,
              version: r,
            },
          ),
          _ = {
            id: e.widget.id,
            size: e.widget.size,
            containerWidth: e.width,
            containerHeight: e.height,
          },
          I = o.useRef(_);
        return (
          o.useLayoutEffect(() => void (I.current = _)),
          o.useLayoutEffect(() => {
            let {
              size: e,
              id: t,
              containerWidth: n,
              containerHeight: i,
            } = I.current;
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
            participants: x,
            participantsVersion: r,
            width: a ? Z : null != f ? f : e.width,
            height: a ? (null != p ? p : e.height) : Z,
            containerRef: g,
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
        o = n(192379),
        l = n(120356),
        r = n.n(l),
        s = n(442837),
        a = n(481060),
        u = n(239091),
        c = n(765250),
        d = n(13245),
        h = n(872810),
        f = n(586902),
        p = n(835473),
        m = n(415635),
        v = n(933557),
        g = n(701362),
        E = n(552282),
        x = n(565799),
        C = n(501655),
        Z = n(597998),
        _ = n(199902),
        I = n(314897),
        S = n(592125),
        b = n(355863),
        N = n(131951),
        O = n(944486),
        y = n(938475),
        j = n(237997),
        T = n(136015),
        k = n(51144),
        L = n(145597),
        w = n(388627),
        A = n(981631),
        R = n(65154),
        M = n(882110);
      function z(e) {
        let { avatarSize: t, userId: n, channelId: o, guildId: l } = e,
          r = 2 * t,
          s = -(t / 2);
        return (0, i.jsx)("div", {
          className: M.effect,
          style: { top: s, left: s, width: r, height: r },
          children: (0, i.jsx)(m.Z, {
            userId: n,
            channelId: o,
            guildId: l,
            containerDimensions: { width: r, height: r },
          }),
        });
      }
      function D(e) {
        let {
            channel: t,
            flipped: n = !1,
            locked: l = !1,
            user: u,
            nick: c,
            displayNameMode: d,
            displayUserMode: p,
            size: m = A.ipw.LARGE,
            onClick: v,
            onContextMenu: E,
            context: x,
            guildId: C,
            voiceState: S,
            showStreamPreview: b,
            onShowStreamPreview: O,
            onWatchStream: y,
          } = e,
          j = (0, s.e7)([I.default], () => I.default.getId() === u.id, [u.id]),
          [T, k, L] = (0, s.Wu)(
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
          w = (0, s.e7)([_.Z], () => _.Z.getCurrentUserActiveStream()),
          R = (0, s.Wu)([_.Z], () => (null != w ? _.Z.getViewerIds(w) : [])),
          D = (0, f.Z)({ userId: u.id, context: x }),
          P = (0, s.e7)([_.Z], () => _.Z.getStreamForUser(u.id, C)),
          V = null != P,
          W = o.useMemo(
            () => null != w && w.ownerId !== u.id && R.includes(u.id),
            [w, u.id, R],
          ),
          U = o.useCallback(() => O(null), [O]),
          F = o.useCallback(
            () =>
              (0, i.jsx)(g.Z, {
                user: u,
                channel: t,
                onWatch: () => {
                  (0, h.rn)(P, { forceMultiple: !0, noFocus: !0 }), U(), y();
                },
                onAction: y,
                previewIsOpen: b,
                location: A.Sbl.UNLOCKED_OVERLAY,
                hideTip: !0,
              }),
            [u, t, P, b, U, y],
          );
        if (p === A.OYC.ONLY_WHILE_SPEAKING && l && !D) return null;
        let { mute: B, suppress: H, deaf: Y } = S,
          G = m === A.ipw.LARGE ? 32 : 24;
        return (0, i.jsxs)(a.Clickable, {
          className: r()(M.voiceUser, {
            [M.speaking]: D,
            [M.interactive]: !l,
            [M.flipped]: n,
          }),
          onClick: l ? void 0 : (e) => (null == v ? void 0 : v(e, u)),
          onContextMenu: l ? void 0 : (e) => (null == E ? void 0 : E(e, u)),
          onMouseEnter: () => O(u.id),
          onMouseLeave: U,
          children: [
            (0, i.jsx)(a.Avatar, {
              className: M.avatar,
              size:
                m === A.ipw.LARGE
                  ? a.AvatarSizes.SIZE_32
                  : a.AvatarSizes.SIZE_24,
              src: u.getAvatarURL(C, G),
              "aria-hidden": !0,
            }),
            (0, i.jsx)(z, {
              avatarSize: G,
              userId: u.id,
              channelId: t.id,
              guildId: t.getGuildId(),
            }),
            l && (d === A.wC$.NEVER || (!D && d === A.wC$.ONLY_WHILE_SPEAKING))
              ? null
              : (0, i.jsx)(a.Popout, {
                  position: "right",
                  renderPopout: F,
                  shouldShow: b,
                  onRequestClose: U,
                  spacing: 0,
                  children: () =>
                    (0, i.jsxs)(a.Clickable, {
                      className: M.username,
                      children: [
                        (0, i.jsx)(a.Text, {
                          variant: "text-xs/medium",
                          color: "text-normal",
                          children: c,
                        }),
                        (0, i.jsx)(Z.nm, {
                          guildId: C,
                          user: u,
                          video: S.selfVideo,
                          isStreaming: V,
                          className: M.voiceIcons,
                          iconClassName: M.voiceIcon,
                          isWatching: W,
                          localMute: T && !j,
                          localVideoDisabled: L,
                          mute: B || T,
                          deaf: Y || k,
                          serverMute: B || H,
                          serverDeaf: Y,
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
            context: l = R.Yn.DEFAULT,
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
          [E, x] = o.useState(null),
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
                  mediaEngineContext: l,
                });
            });
          },
          Z = s.length > 0 && null != l && null != r && (!f || p),
          _ = o.useCallback(() => {
            var e, n;
            let i =
                null === (e = b.Z.getWidget(t)) || void 0 === e
                  ? void 0
                  : e.layoutId,
              o =
                null != i
                  ? null === (n = b.Z.getWidgetsForLayout(i)) || void 0 === n
                    ? void 0
                    : n.find((e) => e.type === A.Odu.GO_LIVE)
                  : null;
            null != o &&
              !o.pinned &&
              ((0, c.xh)(o.id),
              d.Z.track(A.rMx.OVERLAY_PIN_TOGGLED, {
                pinned: !0,
                guild_id: null == r ? void 0 : r.guild_id,
                channel_id: null == r ? void 0 : r.id,
                channel_type: null == r ? void 0 : r.type,
                widget_type: A.Odu.GO_LIVE,
              }));
          }, [r, t]);
        return Z
          ? (0, i.jsx)(i.Fragment, {
              children: s.map((e) => {
                var t;
                let { user: n, voiceState: o, member: s } = e;
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
                            : k.ZP.getName(n),
                        flipped: !v,
                        voiceState: o,
                        displayNameMode: a,
                        displayUserMode: h,
                        size: g,
                        locked: f || m,
                        onContextMenu: C,
                        onClick: C,
                        context: l,
                        channel: r,
                        showStreamPreview: n.id === E,
                        onShowStreamPreview: x,
                        onWatchStream: _,
                      },
                      n.id,
                    );
              }),
            })
          : null;
      }
      function V(e) {
        var t;
        let n = (0, s.e7)([O.Z, S.Z], () =>
            S.Z.getChannel(O.Z.getVoiceChannelId()),
          ),
          o = (0, v.ZP)(n),
          l = (function () {
            let [e] = (0, s.e7)(
              [y.ZP, x.Z, O.Z, S.Z],
              () => {
                let e = S.Z.getChannel(O.Z.getVoiceChannelId());
                return null == e
                  ? [[], -1]
                  : e.isGuildStageVoice()
                    ? [
                        x.Z.getMutableParticipants(e.id, C.pV.SPEAKER),
                        x.Z.getParticipantsVersion(e.id),
                      ]
                    : [
                        y.ZP.getVoiceStatesForChannel(e),
                        y.ZP.getVoiceStateVersion(e.getGuildId()),
                      ];
              },
              [],
              T.Q,
            );
            return e;
          })(),
          r = (0, s.e7)([_.Z], () => _.Z.getStreamerActiveStreamMetadata()),
          a = (0, w.II)(),
          u = (0, p.q)(null == a ? void 0 : a.id),
          c = (0, s.cj)([_.Z, j.Z], () => {
            let e = _.Z.getCurrentUserActiveStream();
            return {
              displayUserMode: j.Z.getDisplayUserMode(),
              displayNameMode: j.Z.getDisplayNameMode(),
              avatarSizeMode: j.Z.getAvatarSizeMode(),
              streamApplication:
                (null == r ? void 0 : r.pid) === (0, L.QF)()
                  ? (0, E.Z)(a)
                  : null,
              stream: e,
            };
          });
        return (0, i.jsx)(P, {
          ...c,
          application: u,
          ...e,
          sortedVoiceStates: l,
          channel: n,
          title: null != o ? o : "",
          streamMetadata: r,
          streamApplication:
            null !== (t = c.streamApplication) && void 0 !== t
              ? t
              : { id: null, name: null == r ? void 0 : r.sourceName },
        });
      }
    },
    892127: function (e, t, n) {
      var i = n(200651),
        o = n(192379),
        l = n(120356),
        r = n.n(l),
        s = n(442837),
        a = n(765250),
        u = n(13245),
        c = n(355863),
        d = n(237997),
        h = n(451478),
        f = n(434529),
        p = n(145597),
        m = n(830917),
        v = n(353038),
        g = n(610394),
        E = n(561064),
        x = n(981631),
        C = n(152397);
      t.Z = o.memo(function (e) {
        let {
            widget: t,
            renderWidget: n,
            renderTitle: l,
            renderButtons: Z,
            resizeValidation: _,
          } = e,
          I = c.Z.getWidgetConfig(t.type),
          S = (0, s.e7)([d.Z], () => d.Z.isLocked((0, p.QF)())),
          b = (0, E.Z)(),
          N = (0, s.e7)([h.Z], () => h.Z.windowSize((0, m.ZY)(b))),
          O = (0, E.Z)(),
          y = o.useCallback((e, t, n, i, o) => {
            let l = h.Z.windowSize((0, m.ZY)((0, E.i)())),
              r = (0, f.jL)(n, l),
              s = (0, f.Ox)(i, l);
            (0, a.Os)(t), (0, a.nv)({ widgetId: t, anchor: r, size: s });
            let d = e === v.B.MOVE,
              p = (0, f.PY)(n, l.width, l.height, o.width, o.height);
            u.Z.track(x.rMx.OVERLAY_LAYOUT_UPDATED, {
              was_resized: !d,
              was_dragged: d,
              widget_type: c.Z.getWidgetType(t),
              window_width: l.width,
              window_height: l.height,
              widget_width: o.width,
              widget_height: o.height,
              widget_left: p.left,
              widget_top: p.top,
            });
          }, []),
          j = o.useCallback((e) => {
            (0, a.Os)(e);
          }, []),
          { id: T, pinned: k, zIndex: L, size: w, anchor: A } = t,
          R = (0, f.w_)(w, N),
          M = (0, f.KR)(A, N),
          { minSize: z, resizeX: D, resizeY: P, dragAnywhere: V } = I,
          W = k || !S,
          U = o.useMemo(
            () => ({ minX: 0, minY: 0, maxX: N.width, maxY: N.height }),
            [N],
          ),
          F = o.useCallback((e) => n({ ...e, widget: t }), [t, n]),
          B = o.useCallback(
            (e) =>
              null != l || null != Z
                ? (0, i.jsxs)("div", {
                    className: C.extrasContainer,
                    children: [
                      null == l ? void 0 : l(t),
                      null == Z ? void 0 : Z(t, e),
                    ],
                  })
                : null,
            [t, l, Z],
          ),
          H = (0, s.e7)([g.Z], () => g.Z.renderDebugMode),
          Y = o.useMemo(() => {
            if (null != _) return (e) => _({ ...e, widget: t });
          }, [_, t]);
        return (0, i.jsx)(v.Z, {
          className: r()({
            [C.debug]: H,
            [C.debugUnpinned]: H && !k,
            [C.debugPinned]: H && k,
          }),
          id: T,
          size: R,
          anchor: M,
          container: U,
          minSize: z,
          hidden: !W,
          locked: S,
          resizeX: D,
          resizeY: P,
          style: { zIndex: L },
          dragAnywhere: V,
          active: !S,
          onUpdate: y,
          onClick: j,
          targetWindow: O,
          renderExtras: B,
          resizeValidation: Y,
          children: F,
        });
      });
    },
    84346: function (e, t, n) {
      var i = n(200651),
        o = n(239091),
        l = n(603618),
        r = n(926086),
        s = n(353038),
        a = n(761374),
        u = n(340101),
        c = n(2923),
        d = n(586742),
        h = n(243487),
        f = n(430561),
        p = n(134849),
        m = n(501787),
        v = n(981631),
        g = n(388032);
      let E = {
        [v.Odu.VIDEO]: {
          renderWidget(e) {
            let {
              widget: t,
              locked: n,
              size: o,
              padding: l,
              borderWidth: r,
            } = e;
            return (0, i.jsx)(d.Z, {
              id: t.id,
              locked: n,
              widget: t,
              height: "auto" === o.height ? 0 : o.height - 2 * l - 2 * r,
              width: "auto" === o.width ? 0 : o.width - 2 * l - 2 * r,
            });
          },
          renderTitle: () =>
            (0, i.jsx)(f.PI, { children: g.intl.string(g.t.UPvOiY) }),
          renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(f.ls, {
                  onClick: (l) =>
                    (function (e, t, l) {
                      if (!!(0, u.js)(t))
                        (0, o.jW)(e, async () => {
                          let { default: e } = await n
                            .e("26775")
                            .then(n.bind(n, 740579));
                          return (
                            l(!0),
                            (n) =>
                              (0, i.jsx)(e, {
                                ...n,
                                widget: t,
                                onClose: () => l(!1),
                              })
                          );
                        });
                    })(l, e, t),
                }),
                (0, i.jsx)(f.RT, { id: e.id, pinned: e.pinned }),
              ],
            }),
          resizeValidation(e) {
            let { widget: t, computedSize: n, borderWidth: i, padding: o } = e;
            return (0, u.js)(t)
              ? "boolean" != typeof t.meta.horizontal || t.meta.horizontal
                ? {
                    width: Math.max(n.width, m.OVERLAY_TILE_WIDTH),
                    height: Math.min(
                      n.height,
                      2 * m.OVERLAY_TILE_MIN_WIDTH + 2 * i + 2 * o,
                    ),
                  }
                : {
                    height: Math.max(n.height, m.OVERLAY_TILE_WIDTH),
                    width: Math.min(
                      n.width,
                      2 * m.OVERLAY_TILE_MIN_WIDTH + 2 * i + 2 * o,
                    ),
                  }
              : n;
          },
        },
        [v.Odu.VOICE_V3]: {
          renderWidget(e) {
            let { widget: t, anchorLeft: n, locked: o } = e;
            return (0, i.jsx)(h.Z, {
              anchorLeft: n,
              id: t.id,
              locked: o,
              pinned: t.pinned,
              widget: v.Odu.VOICE,
              isPreviewingInGame: !1,
            });
          },
          renderTitle: () =>
            (0, i.jsx)(f.PI, { children: g.intl.string(g.t.nFv3GR) }),
          renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(f.ls, {
                  onClick: (e) => {
                    var l, r;
                    return (
                      (l = e),
                      (r = t),
                      void (0, o.jW)(l, async () => {
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
                (0, i.jsx)(f.RT, { id: e.id, pinned: e.pinned }),
              ],
            }),
        },
        [v.Odu.CLICK_ZONE_DEBUG]: {
          renderWidget(e) {
            let { widget: t, locked: n } = e;
            return (0, i.jsx)(r.Z, { id: t.id, locked: n, pinned: t.pinned });
          },
          renderTitle: () => (0, i.jsx)(f.PI, { children: "Click Zone Debug" }),
          renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(f.ls, {
                  onClick: (e) => {
                    var l, r;
                    return (
                      (l = e),
                      (r = t),
                      void (0, o.jW)(l, async () => {
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
                (0, i.jsx)(f.RT, { id: e.id, pinned: e.pinned }),
              ],
            }),
        },
        [v.Odu.GO_LIVE]: {
          renderWidget(e) {
            var t;
            let { widget: n, locked: o, size: l, dragStart: r } = e;
            return (0, u.ZL)(n)
              ? (0, i.jsx)(a.Z, {
                  id: n.id,
                  locked: o,
                  pinned: n.pinned,
                  opacity: n.opacity,
                  size: l,
                  widget: v.Odu.GO_LIVE,
                  isPreviewingInGame: !1,
                  dragStart: r,
                  horizontal:
                    null !== (t = n.meta.horizontal) && void 0 !== t && t,
                  padding: 8,
                  borderWidth: 2,
                })
              : null;
          },
          renderTitle: () =>
            (0, i.jsx)(f.PI, { children: g.intl.string(g.t["386XRk"]) }),
          renderButtons(e, t) {
            var l;
            return (0, u.ZL)(e)
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(f.ls, {
                      onClick: (l) =>
                        (function (e, t, l) {
                          if (!!(0, u.ZL)(t))
                            (0, o.jW)(e, async () => {
                              let { default: e } = await n
                                .e("34684")
                                .then(n.bind(n, 68738));
                              return (
                                l(!0),
                                (n) =>
                                  (0, i.jsx)(e, {
                                    ...n,
                                    widget: t,
                                    onClose: () => l(!1),
                                  })
                              );
                            });
                        })(l, e, t),
                    }),
                    (0, i.jsx)(f.GY, {
                      widgetId: e.id,
                      showAllStreams:
                        null === (l = e.meta.showAllStreams) ||
                        void 0 === l ||
                        l,
                    }),
                    (0, i.jsx)(f.RT, { id: e.id, pinned: e.pinned }),
                  ],
                })
              : null;
          },
          resizeValidation(e) {
            let {
                operation: t,
                computedSize: n,
                originSize: i,
                borderWidth: o,
                padding: l,
                containerSpecs: r,
              } = e,
              a = 2 * o + 2 * l,
              u = i.width - a,
              c = i.height - a,
              d = u / c,
              h = c / u,
              f = (() => {
                switch (t) {
                  case s.B.RESIZE_NORTH:
                  case s.B.RESIZE_SOUTH:
                    return {
                      height: n.height,
                      width: Math.round((n.height - a) * d + a),
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
                ((f.height = r.maxY), (f.width = (r.maxY - a) * d + a)),
              f
            );
          },
        },
        [v.Odu.QUICK_ACTIONS]: {
          renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(c.Z, { locked: t });
          },
        },
        [v.Odu.NOTIFICATIONS]: {
          renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(p.Z, { locked: t });
          },
          renderTitle: () =>
            (0, i.jsx)(f.PI, { children: g.intl.string(g.t.gnKWdX) }),
          renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(f.ls, {
                  onClick: (e) => {
                    var l, r;
                    return (
                      (l = e),
                      (r = t),
                      void (0, o.jW)(l, async () => {
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
                (0, i.jsx)(f.RT, { id: e.id, pinned: e.pinned }),
              ],
            }),
        },
        [v.Odu.ACTIVITY]: {
          renderWidget: () => (0, i.jsx)(l.Z, {}),
          renderTitle: () =>
            (0, i.jsx)(f.PI, { children: g.intl.string(g.t["6gwSFR"]) }),
          renderButtons: () => null,
        },
      };
      t.Z = E;
    },
    430561: function (e, t, n) {
      n.d(t, {
        GY: function () {
          return f;
        },
        PI: function () {
          return d;
        },
        RT: function () {
          return p;
        },
        ls: function () {
          return h;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(120356),
        l = n.n(o),
        r = n(692547),
        s = n(481060),
        a = n(765250),
        u = n(388032),
        c = n(122087);
      function d(e) {
        let { children: t } = e;
        return (0, i.jsx)("div", {
          className: c.titleWrapper,
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
              className: c.button,
              onClick: t,
              children: (0, i.jsx)(s.SettingsIcon, {
                size: "xxs",
                color: r.Z.colors.INTERACTIVE_ACTIVE,
              }),
            }),
        });
      }
      function f(e) {
        let { widgetId: t, showAllStreams: n } = e,
          o = n ? u.intl.string(u.t.q2B3rq) : u.intl.string(u.t.JKGi6u),
          d = () => {
            (0, a.zG)(t, { showAllStreams: !n });
          };
        return (0, i.jsx)(s.Tooltip, {
          text: o,
          "aria-label": o,
          children: (e) =>
            (0, i.jsx)(s.Clickable, {
              ...e,
              className: l()(c.button, n && c.active),
              onClick: d,
              children: (0, i.jsx)(s.ScreenIcon, {
                size: "xxs",
                color: n ? r.Z.colors.BG_BRAND : r.Z.colors.INTERACTIVE_ACTIVE,
              }),
            }),
        });
      }
      function p(e) {
        let { id: t, pinned: n } = e,
          o = n ? u.intl.string(u.t.cSu80t) : u.intl.string(u.t.cM8Vnp);
        return (0, i.jsx)(s.Tooltip, {
          text: o,
          "aria-label": o,
          children: (e) =>
            (0, i.jsx)(s.Clickable, {
              ...e,
              className: l()(c.button, n && c.active),
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
        o = n(192379),
        l = n(904245),
        r = n(13245),
        s = n(655687),
        a = n(541716),
        u = n(752305),
        c = n(893718),
        d = n(957730),
        h = n(849522),
        f = n(145597),
        p = n(981631),
        m = n(640784);
      function v(e) {
        let { id: t, channel: n, onSend: v } = e,
          g = (0, h.Z)(),
          { placeholder: E, accessibilityLabel: x } = (0, s.Z)(n),
          [C, Z] = o.useState(() => (0, u.H2)()),
          { textValue: _, richValue: I } = C,
          [S, b] = o.useState(!1),
          N = o.useCallback(() => b(!0), []),
          O = o.useCallback(() => b(!1), []),
          y = o.useCallback((e, t, n) => {
            Z({ textValue: t, richValue: n });
          }, []),
          j = o.useCallback(
            () =>
              _.length > g
                ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                : (l.Z.sendMessage(n.id, d.ZP.parse(n, _), !1),
                  r.Z.setInputLocked(!0, (0, f.QF)()),
                  r.Z.updateNotificationStatus(t, p._1z.DISMISSED),
                  null == v || v(_),
                  Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })),
            [_, g, n, t, v],
          );
        return (0, i.jsx)(c.Z, {
          innerClassName: m.textArea,
          onChange: y,
          placeholder: E,
          accessibilityLabel: x,
          channel: n,
          textValue: _,
          richValue: I,
          type: a.I.OVERLAY_INLINE_REPLY,
          onBlur: O,
          onFocus: N,
          focused: S,
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
        o = n(192379),
        l = n(120356),
        r = n.n(l),
        s = n(752877),
        a = n(481060),
        u = n(13245),
        c = n(809357),
        d = n(691891),
        h = n(44359),
        f = n(333031),
        p = n(693091),
        m = n(981631),
        v = n(388032),
        g = n(176463);
      function E(e, t, n) {
        return (0, i.jsx)(x, {
          keybind: e,
          message: t,
          messageWithoutKeybind: n,
        });
      }
      function x(e) {
        let { keybind: t, message: n, messageWithoutKeybind: o } = e,
          l = (0, c.o)();
        return (0, i.jsx)(i.Fragment, {
          children: l
            ? v.intl.format(n, {
                keybind: t,
                keybindHook: (e) =>
                  (0, i.jsx)(h.Z, { keybind: t }, t.join("+")),
              })
            : o,
        });
      }
      function C(e) {
        e.currentTarget.scrollTo(0, 0);
      }
      let Z = o.memo(function (e) {
        let {
            maxBodyLines: t,
            expand: n = !1,
            onNotificationShow: l,
            onDismissClick: u,
            onConfirmClick: c,
            onCancelClick: h,
            onNotificationClick: f,
            hint: p,
            cancelText: E,
            confirmText: x,
            icon: Z,
            body: _,
            title: I,
            renderFooter: S,
            contentOpacity: b,
            status: N,
            containerRef: O,
          } = e,
          [y, j] = o.useState(!1),
          T = n || y || N === m._1z.FOCUSED;
        o.useEffect(() => {
          null == l || l();
        }, [l]);
        let k = o.useCallback(
            (e) => {
              e.stopPropagation(), null == u || u(e);
            },
            [u],
          ),
          L = o.useCallback(
            (e) => {
              e.stopPropagation(), null == c || c(e);
            },
            [c],
          ),
          w = o.useCallback(
            (e) => {
              e.stopPropagation(), null == h || h(e);
            },
            [h],
          ),
          A = o.useCallback(() => {
            j(!0);
          }, []),
          R = o.useCallback(() => {
            j(!1);
          }, []);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("div", {
              className: g.overflowWrapper,
              onScroll: C,
              children: (0, i.jsx)(a.Clickable, {
                innerRef: O,
                ignoreKeyPress: !0,
                onMouseOver: A,
                onMouseLeave: R,
                onClick: f,
                className: r()(g.container, { [g.clickable]: null != f }),
                children: (function () {
                  let e = null == S ? void 0 : S(T);
                  return (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)(s.animated.div, {
                        className: g.iconAndDetails,
                        style: { opacity: b },
                        children: [
                          null == Z
                            ? null
                            : "string" == typeof Z
                              ? (0, i.jsx)(a.Avatar, {
                                  src: Z,
                                  size: a.AvatarSizes.SIZE_40,
                                  className: g.avatar,
                                  "aria-hidden": !0,
                                })
                              : (0, i.jsx)("div", {
                                  className: g.avatar,
                                  children: Z,
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
                              null != _
                                ? (0, i.jsx)(a.Text, {
                                    color: "interactive-normal",
                                    variant: "text-sm/normal",
                                    lineClamp:
                                      null != t ? t * (T ? 2 : 1) : void 0,
                                    children: _,
                                  })
                                : null,
                              (function () {
                                let e = "function" == typeof p ? p(T) : p;
                                return null != p
                                  ? (0, i.jsx)(a.Text, {
                                      className: g.hint,
                                      color: "text-muted",
                                      variant: "text-xxs/medium",
                                      children: e,
                                    })
                                  : null;
                              })(),
                              null == c && null == h
                                ? null
                                : (0, i.jsxs)("div", {
                                    className: g.buttonContainer,
                                    children: [
                                      null != c
                                        ? (0, i.jsx)(a.Button, {
                                            className: g.button,
                                            size: a.Button.Sizes.SMALL,
                                            color: a.Button.Colors.GREEN,
                                            onClick: L,
                                            children:
                                              null != x
                                                ? x
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
            (0, i.jsx)(d.Z, {
              className: g.dismissButton,
              onDismiss: k,
              "aria-label": v.intl.string(v.t.LnEgqa),
            }),
          ],
        });
      });
      function _(e) {
        let {
          springs: { opacity: t, scale: n, transform: o, height: l },
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
            transform: o.to((e) => "translate3d(0, ".concat(e, "px, 0)")),
            scale: n.to([0, 1], [0.7, 1]),
            height: l,
          },
          children: a,
        });
      }
      function I(e) {
        let {
            notification: t,
            index: n,
            locked: l,
            transitionState: r,
            cleanUp: s,
          } = e,
          {
            id: a,
            props: {
              onNotificationShow: c,
              onDismissClick: d,
              onNotificationClick: h,
              onConfirmClick: m,
              onCancelClick: v,
              renderFooter: E,
            },
          } = t,
          x = o.useCallback(() => {
            c(a);
          }, [c, a]),
          C = o.useCallback(
            (e) => {
              u.Z.updateNotificationStatus(a), null == d || d(e, a);
            },
            [a, d],
          ),
          I = o.useCallback(
            (e) => {
              null == h || h(e, a);
            },
            [h, a],
          ),
          S = o.useCallback(
            (e) => {
              null == m || m(e, a);
            },
            [m, a],
          ),
          b = o.useCallback(
            (e) => {
              null == v || v(e, a);
            },
            [v, a],
          ),
          N = o.useCallback((e) => (null == E ? void 0 : E(e, a)), [E, a]),
          {
            props: {
              onNotificationShow: O,
              onDismissClick: y,
              renderFooter: j,
              onNotificationClick: T,
              onConfirmClick: k,
              onCancelClick: L,
              ...w
            },
            status: A,
          } = t,
          { ref: R, springs: M } = (0, p.X4)(t.id, r, s);
        return (0, i.jsx)(_, {
          transitionState: r,
          springs: M,
          index: n,
          locked: l,
          children: (0, i.jsx)(f.Z, {
            observe: 0 === n,
            className: g.clickZone,
            children: (0, i.jsx)(Z, {
              ...w,
              containerRef: R,
              notificationId: t.id,
              onNotificationShow: 0 === n ? x : void 0,
              onDismissClick: C,
              onNotificationClick: null != h ? I : void 0,
              onConfirmClick: null != m ? S : void 0,
              onCancelClick: null != v ? b : void 0,
              renderFooter: N,
              expand: !1,
              index: n,
              locked: l,
              status: A,
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
          return c;
        },
      }),
        n(47120);
      var i = n(192379),
        o = n(481060);
      function l(e, t, n) {
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
            let o = this.listeners.get(i.notification.id);
            if (null == o) continue;
            let { offsetHeight: l } = o.element;
            (o.top !== t || o.height !== l || o.index !== n) && (e = !0),
              (o.top = t),
              (o.height = l),
              (o.index = n),
              0 === t &&
                (this.matchHeight !== l && (e = !0), (this.matchHeight = l)),
              (t += l + 8),
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
          l(this, "resizeObserver", void 0),
            l(this, "listeners", new Map()),
            l(this, "queuedCompute", !1),
            l(this, "items", []),
            l(this, "matchHeight", 0),
            l(this, "locked", !0),
            l(this, "handleResize", (e) => {
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
      function c(e, t, n) {
        let [l, r] = (0, o.useSpring)(
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
          c = i.useRef(r),
          d = i.useContext(s),
          h = i.useMemo(() => {
            let t = !1;
            return (n) => {
              null == n
                ? d.unsubscribe(e)
                : d.subscribe(e, n, (e) => {
                    var n, i, o, l;
                    let {
                        locked: r,
                        matchHeight: s,
                        height: d,
                        top: h,
                        index: f,
                      } = e,
                      { current: p } = c;
                    let m = {
                      opacity:
                        ((n = f),
                        (i = r) && n > 4 ? 0 : i ? Math.min(1 - n / 4, 1) : 1),
                      scale: ((o = f), r ? Math.min(1 - o / 4, 1) : 1),
                      transform: a(f, r, h),
                      contentOpacity: ((l = f), r ? (l > 0 ? 0 : 1) : 1),
                      height: r ? s : d,
                    };
                    p({
                      from: t
                        ? void 0
                        : {
                            opacity: 0,
                            scale: 1.1,
                            transform: -((r ? s : d) * 1),
                            contentOpacity: 1,
                            height: r ? s : d,
                          },
                      to: m,
                      config: u,
                    }),
                      (t = !0);
                  });
            };
          }, [e, d]);
        return (
          i.useLayoutEffect(() => {
            if (t === o.TransitionStates.YEETED) {
              let t = d.getLayoutSpecs(e);
              if (null == t) {
                n();
                return;
              }
              c.current({
                to: {
                  scale: 0.8,
                  opacity: 0,
                  transform:
                    a(t.index, d.locked, t.top) + (d.locked ? 0 : t.height / 2),
                },
                config: u,
              }),
                setTimeout(n, 300);
            }
          }, [t, n, e, d]),
          { ref: h, springs: l }
        );
      }
    },
    134849: function (e, t, n) {
      n(653041), n(47120);
      var i = n(200651),
        o = n(192379),
        l = n(442837),
        r = n(481060),
        s = n(237997),
        a = n(388627),
        u = n(561064),
        c = n(380736),
        d = n(693091),
        h = n(371467),
        f = n(981631),
        p = n(109020);
      let m = [];
      function v(e) {
        return e.notification.id;
      }
      function g(e, t, n, o) {
        let { index: l, notification: r, locked: s } = t;
        return (0, i.jsx)(
          c.Z,
          {
            index: l,
            notification: r,
            locked: s,
            transitionState: n,
            cleanUp: o,
          },
          e,
        );
      }
      function E(e) {
        return (0, i.jsx)("div", { className: p.container, children: e });
      }
      let x = (e) => o.useState(() => new d.AS(e))[0];
      t.Z = o.memo(function (e) {
        let { locked: t } = e,
          n = (0, l.e7)(
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
          c = x(t);
        return (
          o.useLayoutEffect(() => c.updateState(n, t)),
          o.useLayoutEffect(
            () => (c.initialize((0, u.i)()), () => c.cleanUp()),
            [c],
          ),
          (0, i.jsx)(d.S4.Provider, {
            value: c,
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
        o,
        l,
        r,
        s,
        a,
        u,
        c,
        d = n(512722),
        h = n.n(d),
        f = n(772848),
        p = n(442837),
        m = n(570140),
        v = n(13245),
        g = n(435064),
        E = n(786761),
        x = n(695346),
        C = n(314897),
        Z = n(592125),
        _ = n(375954),
        I = n(292959),
        S = n(158776),
        b = n(885110),
        N = n(246946),
        O = n(594174),
        y = n(974180),
        j = n(237997),
        T = n(70956),
        k = n(150097),
        L = n(129724),
        w = n(388627),
        A = n(996050),
        R = n(609626),
        M = n(421824),
        z = n(777036),
        D = n(333727),
        P = n(585708),
        V = n(588909),
        W = n(981631),
        U = n(388032);
      ((r = i || (i = {}))[(r.GENERIC = 0)] = "GENERIC"),
        (r[(r.TEXT = 1)] = "TEXT"),
        (r[(r.INCOMING_CALL = 2)] = "INCOMING_CALL"),
        (r[(r.NUDGE = 3)] = "NUDGE"),
        ((s = o || (o = {}))[(s.NORMAL = 0)] = "NORMAL"),
        (s[(s.HIGH = 1)] = "HIGH"),
        (s[(s.URGENT = 2)] = "URGENT");
      let F = 5 * T.Z.Millis.SECOND,
        B = 8 * T.Z.Millis.SECOND,
        H = 30 * T.Z.Millis.SECOND,
        Y = 30 * T.Z.Millis.SECOND,
        G = Object.freeze({
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
        if (Q && null == K.find((e) => e.status === W._1z.FOCUSED))
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
        K.filter((e) => 1 === e.type && e.status === W._1z.TIMED_OUT)
          .sort((e, t) => t.timestamp - e.timestamp)
          .forEach((t, n) => {
            (n >= e || t.timestamp < Date.now() - H) &&
              $(t.id, W._1z.DISMISSED);
          });
      }
      function $(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : W._1z.DISMISSED;
        if (null == e) return !1;
        let n = K.findIndex((t) => t.id === e);
        if (-1 === n) return !1;
        let i = K[n];
        if ((i.timer.stop(), (K = [...K]), t === W._1z.FOCUSED)) {
          let [e] = K.splice(n, 1);
          (e = { ...e, status: t }), K.unshift(e), (Q = !0);
          return;
        }
        t === W._1z.DISMISSED ? K.splice(n, 1) : (K[n] = { ...i, status: t }),
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
        let n = { ...G, timestamp: Date.now(), ...t },
          i = (0, f.Z)(),
          o = !1,
          l = {
            id: i,
            status: W._1z.ACTIVE,
            timer: (function (e) {
              let t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n = arguments.length > 2 ? arguments[2] : void 0,
                i = -1;
              return {
                start() {
                  let o =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : t,
                    l = o ? W._1z.TIMED_OUT : W._1z.DISMISSED;
                  -1 === i &&
                    (i = setTimeout(
                      () => v.Z.updateNotificationStatus(e, l),
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
                !o &&
                  ((o = !0),
                  null === (t = e.onNotificationShow) ||
                    void 0 === t ||
                    t.call(e, i));
              },
            },
            ...n,
          },
          r = Q ? X : [...K],
          s = r.findIndex((e) => e.priority <= n.priority);
        if ((-1 === s ? r.push(l) : r.splice(s, 0, l), r.length > 40)) {
          let e = r.pop();
          !Q && e.timer.stop();
        }
        return !Q && ((K = r), l.timer.start()), i;
      }
      function ei(e) {
        let { channelId: t, ringing: n } = e,
          i = et(t);
        if (!n.includes(C.default.getId())) return $(i);
        if (null != i) return !1;
        let o = Z.Z.getChannel(t);
        if (
          null == o ||
          !o.isPrivate() ||
          b.Z.getStatus() === W.Skl.DND ||
          x.QZ.getSetting()
        )
          return !1;
        let l = K.find(
          (e) =>
            1 === e.type && e.channelId === t && e.messageType === W.uaV.CALL,
        );
        null != l && $(l.id),
          en((0, z.Z)(o), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: o.id,
          });
      }
      class eo extends (l = p.ZP.Store) {
        initialize() {
          this.waitFor(Z.Z, O.default);
        }
        getNotifications() {
          return K;
        }
      }
      (c = "OverlayNotificationsStore"),
        (u = "displayName") in (a = eo)
          ? Object.defineProperty(a, u, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[u] = c);
      let el = new eo(m.Z, {
        OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
          let { notificationId: t, status: n } = e;
          $(t, n);
        },
        OVERLAY_MOUNTED: function (e) {
          let { nudges: t } = e;
          q(0);
          let n = (0, V.Z)((0, w.pL)(), t);
          null != n && en(n, { priority: 2, type: 3, duration: B });
        },
        OVERLAY_SET_INPUT_LOCKED: function (e) {
          let { locked: t } = e;
          if (t) {
            for (let e of K)
              e.status === W._1z.FOCUSED && $(e.id, W._1z.ACTIVE);
            return !0;
          }
          for (let e of (q(), K))
            3 === e.type
              ? $(e.id, W._1z.DISMISSED)
              : e.status === W._1z.ACTIVE &&
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
              W._1z.FOCUSED,
            );
          }
        },
        MESSAGE_CREATE: function (e) {
          var t, n, i, o;
          let { channelId: l, message: r } = e,
            s = Z.Z.getChannel(l),
            a = O.default.getUser(
              null === (t = r.author) || void 0 === t ? void 0 : t.id,
            );
          if (null == s || null == a) return !1;
          if (
            (null === (n = r.activity) || void 0 === n ? void 0 : n.type) ===
              W.mFx.JOIN ||
            (null === (i = r.activity) || void 0 === i ? void 0 : i.type) ===
              W.mFx.JOIN_REQUEST
          ) {
            if (!(0, k.eF)(r, l, !0, !0)) return !1;
            let e = (function (e, t, n) {
              var i;
              let o, l;
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
                case W.mFx.JOIN:
                  if (
                    null == (o = S.Z.getApplicationActivity(n.id, s)) ||
                    null == o.party ||
                    o.party.id !== t.activity.party_id
                  )
                    return !1;
                  l = (0, A.Z)(e, t, n, r, o);
                  break;
                case W.mFx.JOIN_REQUEST:
                  if (
                    null == (o = b.Z.getApplicationActivity(s)) ||
                    null == o.party ||
                    o.party.id !== t.activity.party_id
                  )
                    return !1;
                  l = (0, D.Z)(e, n, r, o);
              }
              return (
                null != l &&
                (en(l, {
                  priority: 2,
                  expirationExternallyManaged: !0,
                  channelId: e.id,
                  duration: Y,
                }),
                !0)
              );
            })(s, r, a);
            if (!1 !== e) return e;
          }
          if (
            j.Z.getTextChatNotificationMode() === W.Ypu.DISABLED ||
            N.Z.disableNotifications ||
            !(0, k.eF)(r, l)
          )
            return !1;
          let u = !I.Z.isSoundDisabled(y.Ay),
            c =
              null !== (o = _.Z.getMessage(l, r.id)) && void 0 !== o
                ? o
                : (0, E.e5)(r);
          en((0, P.Z)(s, c, a, u), {
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
            { actionType: n, user: i, applicationId: o } = e,
            l = (0, w.pL)();
          if (
            null == l ||
            (null == l ? void 0 : l.id) == null ||
            (l.id !== o && l.altId !== o)
          )
            return !1;
          if (n === W.mFx.JOIN) t = (0, R.Z)(i, l);
          if (null == t) return !1;
          en(t, { priority: 2, type: 0 });
        },
        CLIPS_SAVE_CLIP_START: function () {
          en((0, M.f)(U.intl.string(U.t.NBMK9v)));
        },
        CLIPS_SAVE_CLIP: function () {
          en(
            (0, M.f)(
              U.intl.format(U.t.KLhk6u, {
                duration: (0, L.A)(g.Z.getSettings().clipsLength / 1e3, !0),
              }),
            ),
          );
        },
        CLIPS_SAVE_CLIP_ERROR: function () {
          en((0, M.f)(U.intl.string(U.t["1ZbZur"])));
        },
        STREAM_START: function (e) {
          let t = (0, M.y)();
          null != t && en(t);
        },
      });
      t.Z = el;
    },
    620954: function (e, t, n) {
      n.d(t, {
        P: function () {
          return d;
        },
        R: function () {
          return c;
        },
      });
      var i = n(13245),
        o = n(556296),
        l = n(237997),
        r = n(13140),
        s = n(145597),
        a = n(987650),
        u = n(981631);
      function c(e, t) {
        return {
          trackView() {
            i.Z.track(u.rMx.NOTIFICATION_VIEWED, t),
              i.Z.notificationEvent(e, a.bv.Viewed);
          },
          trackClick(n) {
            let o = l.Z.isLocked((0, s.QF)())
              ? u.Sbl.LOCKED_OVERLAY
              : u.Sbl.UNLOCKED_OVERLAY;
            i.Z.track(u.rMx.NOTIFICATION_CLICKED, {
              ...t,
              location: o,
              action_type: n,
            }),
              i.Z.notificationEvent(e, a.bv.Clicked);
          },
        };
      }
      function d() {
        let e = o.Z.getOverlayKeybind();
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
        o = n(13245),
        l = n(150097),
        r = n(620954),
        s = n(987650),
        a = n(388032);
      function u(e, t, n, u, c) {
        if (null == t.activity || null == u.id) return null;
        let d = t.activity.type,
          h = c.session_id;
        if (null == h) return null;
        let { icon: f, title: p, body: m } = (0, l.Xi)(e, t, n),
          { trackView: v, trackClick: g } = (0, r.R)(s.n0.ActivityInvite, {
            notif_type: s.n0.ActivityInvite,
            notif_user_id: n.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
            activity_type: d,
            activity_name: c.name,
          });
        return {
          icon: f,
          title: p,
          body: m,
          onNotificationShow: () => {
            v();
          },
          confirmText: a.intl.string(a.t.VJlc0d),
          onConfirmClick: (l, r) => {
            var s;
            i.Z.join({
              userId: n.id,
              sessionId: h,
              applicationId: null !== (s = u.altId) && void 0 !== s ? s : u.id,
              channelId: e.id,
              messageId: t.id,
            }),
              o.Z.updateNotificationStatus(r),
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
        o = n(620954),
        l = n(987650),
        r = n(981631),
        s = n(388032);
      function a(e, t) {
        let n = e.username,
          a = s.intl.format(s.t["Yk+uYG"], { username: "" }),
          u = (0, i.ov)(e),
          c = s.intl.string(s.t.WRj1Wl),
          { trackView: d, trackClick: h } = (0, o.R)(l.n0.ActivityUserJoin, {
            notif_type: l.n0.ActivityUserJoin,
            notif_user_id: e.id,
            activity_type: r.mFx.JOIN,
            activity_name: t.name,
          });
        return {
          icon: u,
          title: n,
          body: a,
          hint: c,
          onNotificationShow: () => {
            d();
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
      var o = n(481060),
        l = n(522474),
        r = n(556296),
        s = n(13140),
        a = n(44359),
        u = n(620954),
        c = n(987650),
        d = n(981631),
        h = n(388032);
      function f() {
        if (l.Z.getWindowOpen(d.KJ3.ACTIVITY_POPOUT)) return null;
        let { trackView: e, trackClick: t } = (0, u.R)(
            c.n0.ClipsReminderNotification,
            { notif_type: c.n0.ClipsReminderNotification },
          ),
          n = r.Z.getKeybindForAction(d.kg4.SAVE_CLIP);
        if (null == n) return null;
        let f = s.BB(n.shortcut, !0);
        return {
          title: h.intl.format(h.t.S5uhCA, {
            keybind: f,
            keybindHook: (e, t) =>
              (0, i.jsx)(a.Z, { keybind: f.split("+") }, t),
          }),
          icon: (0, i.jsx)(o.ClipsIcon, { size: "lg", color: "currentColor" }),
          onNotificationShow: () => {
            e();
          },
          onDismissClick: () => {
            t("dismiss");
          },
        };
      }
      function p(e) {
        let { trackView: t, trackClick: n } = (0, u.R)(c.n0.ClipsNotification, {
          notif_type: c.n0.ClipsNotification,
        });
        return {
          title: e,
          icon: (0, i.jsx)(o.ClipsIcon, { size: "lg", color: "currentColor" }),
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
        o = n(13245),
        l = n(43267),
        r = n(933557),
        s = n(699516),
        a = n(594174),
        u = n(620954),
        c = n(987650),
        d = n(981631),
        h = n(388032);
      function f(e) {
        let t = (0, r.F6)(e, a.default, s.Z),
          n = h.intl.string(h.t.ssrVzM),
          f = (0, l.x)(e),
          { trackView: p, trackClick: m } = (0, u.R)(c.n0.IncomingCall, {
            notif_type: c.n0.IncomingCall,
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
              o.Z.updateNotificationStatus(n),
              o.Z.track(d.rMx.VOICE_CHANNEL_SELECTED, {
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
        o = n(13245),
        l = n(45114),
        r = n(237997),
        s = n(145597),
        a = n(620954),
        u = n(987650),
        c = n(981631),
        d = n(388032);
      function h(e, t, n, h) {
        let f = t.username,
          p = d.intl.format(d.t.VDODnp, { username: "", game: n.name }),
          m = t.getAvatarURL(e.guild_id, 80),
          { trackView: v, trackClick: g } = (0, a.R)(u.n0.ActivityInvite, {
            notif_type: u.n0.ActivityInvite,
            notif_user_id: t.id,
            activity_type: c.mFx.JOIN_REQUEST,
            activity_name: h.name,
          });
        return {
          icon: m,
          title: f,
          body: p,
          confirmText: d.intl.string(d.t["fgP/wc"]),
          cancelText: d.intl.string(d.t.tpXzJy),
          onNotificationShow: () => {
            v();
          },
          onConfirmClick: (t, n) => {
            i.Z.sendActivityInvite({
              channelId: e.id,
              type: c.mFx.JOIN,
              activity: h,
              location: r.Z.isLocked((0, s.QF)())
                ? c.Sbl.LOCKED_OVERLAY
                : c.Sbl.UNLOCKED_OVERLAY,
            }),
              g("join"),
              o.Z.updateNotificationStatus(n);
          },
          onCancelClick: (t, n) => {
            (0, l.In)(e.id, !0, !0),
              o.Z.updateNotificationStatus(n),
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
      var o = n(13245),
        l = n(937889),
        r = n(703656),
        s = n(974180),
        a = n(150097),
        u = n(358085),
        c = n(557177),
        d = n(998502),
        h = n(145597),
        f = n(610394),
        p = n(516542),
        m = n(380736),
        v = n(620954),
        g = n(987650),
        E = n(981631),
        x = n(388032);
      function C(e, t, n, C) {
        var Z;
        let { icon: _, title: I, body: S } = (0, a.Xi)(e, t, n),
          { trackView: b, trackClick: N } = (0, v.R)(g.n0.TextChat, {
            notif_type: g.n0.TextChat,
            notif_user_id:
              null === (Z = t.author) || void 0 === Z ? void 0 : Z.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
          });
        return {
          icon: _,
          title: I,
          body:
            t.content.length > 0
              ? (0, l.ZP)(t, {
                  noStyleAndInteraction: !0,
                  formatInline: !0,
                  hideSimpleEmbedContent: !1,
                }).content
              : S,
          hint: (e) =>
            e
              ? null
              : (0, m.Q)((0, v.P)(), x.t.ykjOAA, x.intl.string(x.t.jZkzVF)),
          maxBodyLines: 2,
          renderFooter: (t, n) =>
            t
              ? (0, i.jsx)(p.Z, { id: n, channel: e, onSend: () => N("send") })
              : null,
          onNotificationShow: () => {
            C && (0, c.GN)(s.Ay, s.yk), b();
          },
          onNotificationClick: () => {
            let n = (0, h.QF)();
            f.Z.isInputLocked(n)
              ? (N("unlock"), o.Z.setInputLocked(!1, n))
              : (N("jump"),
                (0, r.uL)(E.Z5c.CHANNEL(e.guild_id, e.id, t.id)),
                u.isPlatformEmbedded && d.ZP.focus());
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
      var o = n(952265),
        l = n(988298),
        r = n(13245),
        s = n(620662),
        a = n(835473),
        u = n(442550),
        c = n(293273),
        d = n(145597),
        h = n(603618),
        f = n(380736),
        p = n(620954),
        m = n(987650),
        v = n(981631),
        g = n(602091),
        E = n(701488),
        x = n(388032),
        C = n(176463),
        Z = n(802334);
      function _(e) {
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
                  ? c.Z.getApplicationActivity(e.altId)
                  : (null == e ? void 0 : e.id) != null
                    ? c.Z.getApplicationActivity(e.id)
                    : null;
              null != t &&
                (0, s.Z)(t, v.xjy.JOIN) &&
                ((E.cancelText = x.intl.string(x.t["6F9ivr"])),
                (E.onCancelClick = (e, n) => {
                  u("unlock"),
                    r.Z.updateNotificationStatus(n),
                    r.Z.setInputLocked(!1, (0, d.QF)()),
                    (0, l.h7)(t, !1, v.IlC.POPOUT);
                }));
              break;
            }
            case m.nc.GO_LIVE_VOICE:
            case m.nc.GO_LIVE_NON_VOICE:
              (E.confirmText = x.intl.string(x.t.U76Ft7)),
                (E.onConfirmClick = (e, t) => {
                  u("unlock"),
                    r.Z.updateNotificationStatus(t),
                    r.Z.setInputLocked(!1, (0, d.QF)()),
                    (0, o.ZD)(
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
                  className: Z.container,
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
              ? (0, i.jsx)(_, { game: e })
              : (0, i.jsx)("img", {
                  src: n(328756),
                  className: C.icon,
                  alt: "",
                }),
          title: null != e ? e.name : x.intl.string(x.t.pkXAeH),
          body: null,
          hint: () =>
            (0, f.Q)((0, p.P)(), x.t.e6giBQ, x.intl.string(x.t.jZkzVF)),
          onNotificationShow: (e) => {
            var t;
            a(),
              null === (t = E.onNotificationShow) ||
                void 0 === t ||
                t.call(E, e);
          },
          onNotificationClick: () => {
            u("unlock"), r.Z.setInputLocked(!1, (0, d.QF)());
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
        o = n(214629),
        l = n(928518),
        r = n(501787),
        s = n(981631);
      function a() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : l.Z,
          i =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : (0, o.e1)();
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
        let e = (0, o.PR)();
        return (0, i.e7)([l.Z], () => a(l.Z, e));
      }
    },
    352527: function (e, t, n) {
      var i,
        o,
        l,
        r,
        s = n(442837),
        a = n(570140);
      let u = !1,
        c = !1;
      class d extends (r = s.ZP.Store) {
        get keepOpen() {
          return c;
        }
        get enabled() {
          return u;
        }
      }
      (l = "SoundboardOverlayStore"),
        (o = "displayName") in (i = d)
          ? Object.defineProperty(i, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[o] = l),
        (t.Z = new d(a.Z, {
          SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
            if (((u = e.enabled), e.enabled)) {
              var t;
              c = null !== (t = e.keepOpen) && void 0 !== t && t;
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
        o = n(192379),
        l = n(442837),
        r = n(481060),
        s = n(410575),
        a = n(933557),
        u = n(471445),
        c = n(430824),
        d = n(19780),
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
          x = o.useCallback(
            (e) => {
              E(e), g();
            },
            [E, g],
          ),
          C = (0, l.e7)([d.Z], () => d.Z.getQuality()),
          Z = {
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
                let o = (0, u.KS)(e),
                  l = e.id === (null == n ? void 0 : n.id);
                return (0, i.jsx)(
                  r.MenuItem,
                  {
                    id: e.id,
                    label: (0, i.jsxs)(r.Text, {
                      variant: "text-sm/semibold",
                      className: v.label,
                      color: l ? "text-positive" : "text-normal",
                      children: [
                        null != o
                          ? (0, i.jsx)(o, { color: "currentColor", size: "xs" })
                          : void 0,
                        (0, a.F6)(e, f.default, h.Z),
                      ],
                    }),
                    subtext:
                      null != e.getGuildId()
                        ? null === (t = c.Z.getGuild(e.getGuildId())) ||
                          void 0 === t
                          ? void 0
                          : t.name
                        : void 0,
                    subtextLineClamp: 1,
                    icon: l ? Z : void 0,
                    action: () => x(e),
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
        o = n.n(i),
        l = n(388032);
      function r(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : l.intl.string(l.t["Yl1D8/"]),
          i = o().duration(e, "seconds");
        if (i.days() > 0)
          return l.intl.formatToPlainString(t ? l.t.GBLpQ0 : l.t.k2UNz8, {
            days: i.days(),
          });
        if (i.hours() > 0)
          return l.intl.formatToPlainString(t ? l.t.rhY1Rk : l.t.xCjYxM, {
            hours: i.hours(),
          });
        if (i.minutes() > 0)
          return l.intl.formatToPlainString(t ? l.t["XIGt+f"] : l.t.iXLF9f, {
            minutes: i.minutes(),
          });
        else if (e > 0)
          return l.intl.formatToPlainString(t ? l.t.pyvjRk : l.t.geSp4O, {
            seconds: i.seconds(),
          });
        else return t ? l.intl.string(l.t["Yl1D8/"]) : n;
      }
    },
    13663: function (e, t, n) {
      e.exports = {
        container: "container_e2d331",
        activityCard: "activityCard_e2d331",
        row: "row_e2d331",
        inviteFriendsButton: "inviteFriendsButton_e2d331",
        avatar: "avatar_e2d331",
        details: "details_e2d331",
        usernameWrapper: "usernameWrapper_e2d331",
        username: "username_e2d331",
        inviteButton: "inviteButton_e2d331",
        inviteButtonWrapper: "inviteButtonWrapper_e2d331",
        inviteButtonInner: "inviteButtonInner_e2d331",
        liveIndicator: "liveIndicator_e2d331",
        badgesContainer: "badgesContainer_e2d331",
      };
    },
    70491: function (e, t, n) {
      e.exports = {
        clickZoneDebugContainer: "clickZoneDebugContainer_afd0a0",
        clickZone: "clickZone_afd0a0",
        clickBackground: "clickBackground_afd0a0",
        clickable: "clickable_afd0a0",
      };
    },
    932209: function (e, t, n) {
      e.exports = {
        dismissButton: "dismissButton_a9614f",
        dismissIcon: "dismissIcon_a9614f",
      };
    },
    706446: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_c58c1c",
        unlocked: "unlocked_c58c1c",
        lockExtras: "lockExtras_c58c1c",
        operation: "operation_c58c1c",
        resizeNorth: "resizeNorth_c58c1c handle_c58c1c",
        resizeSouth: "resizeSouth_c58c1c handle_c58c1c",
        resizeNSCursor: "resizeNSCursor_c58c1c",
        resizeWest: "resizeWest_c58c1c handle_c58c1c",
        resizeEast: "resizeEast_c58c1c handle_c58c1c",
        resizeEWCursor: "resizeEWCursor_c58c1c",
        resizeNorthWest: "resizeNorthWest_c58c1c handle_c58c1c",
        resizeNorthEast: "resizeNorthEast_c58c1c handle_c58c1c",
        resizeSouthWest: "resizeSouthWest_c58c1c handle_c58c1c",
        resizeSouthEast: "resizeSouthEast_c58c1c handle_c58c1c",
        resizeNWSECursor: "resizeNWSECursor_c58c1c",
        resizeNESWCursor: "resizeNESWCursor_c58c1c",
        extras: "extras_c58c1c",
        extrasBottomOriented: "extrasBottomOriented_c58c1c",
        extrasRightOriented: "extrasRightOriented_c58c1c",
      };
    },
    228680: function (e, t, n) {
      e.exports = {
        gridContainer: "gridContainer_dcc220",
        gridItem: "gridItem_dcc220",
        horizontal: "horizontal_dcc220",
        vertical: "vertical_dcc220",
      };
    },
    2847: function (e, t, n) {
      e.exports = {
        tile: "tile_d22ae3",
        streamTile: "streamTile_d22ae3",
        streamTileWrapper: "streamTileWrapper_d22ae3",
        controls: "controls_d22ae3",
        controlBackground: "controlBackground_d22ae3",
        controlsWithActiveStream: "controlsWithActiveStream_d22ae3",
        controlUser: "controlUser_d22ae3",
        controlUserContainer: "controlUserContainer_d22ae3",
        controlAction: "controlAction_d22ae3",
        controlActions: "controlActions_d22ae3",
        absoluteFill: "absoluteFill_d22ae3",
        streamPreview: "streamPreview_d22ae3",
        liveIndicator: "liveIndicator_d22ae3",
        watchActionContainer: "watchActionContainer_d22ae3",
        watchButton: "watchButton_d22ae3",
      };
    },
    666540: function (e, t, n) {
      e.exports = { goLiveGridContainer: "goLiveGridContainer_c324b1" };
    },
    163752: function (e, t, n) {
      e.exports = {
        buttonContainer: "buttonContainer_b1ba99",
        keybind: "keybind_b1ba99",
        button: "button_b1ba99",
      };
    },
    256403: function (e, t, n) {
      e.exports = { key: "key_da7116" };
    },
    167566: function (e, t, n) {
      e.exports = {
        videoDev: "videoDev_b99764",
        overlay: "overlay_b99764",
        overlayBackground: "overlayBackground_b99764",
        overlayActive: "overlayActive_b99764",
        overlayLocked: "overlayLocked_b99764",
        closeContainer: "closeContainer_b99764",
        invalidContainer: "invalidContainer_b99764",
        inactiveContainer: "inactiveContainer_b99764",
        layoutLocked: "layoutLocked_b99764",
        layoutUnlocked: "layoutUnlocked_b99764 layoutLocked_b99764",
      };
    },
    608631: function (e, t, n) {
      e.exports = {
        debugMode: "debugMode_f4091c",
        clickable: "clickable_f4091c",
      };
    },
    725775: function (e, t, n) {
      e.exports = {
        button: "button_a467e9",
        cutoutContainer: "cutoutContainer_a467e9",
        toggledCutoutContainer: "toggledCutoutContainer_a467e9",
        separatorDot: "separatorDot_a467e9",
        guildIconContainer: "guildIconContainer_a467e9",
        guildIcon: "guildIcon_a467e9",
        voiceChannelNameContainer: "voiceChannelNameContainer_a467e9",
        channelIcon: "channelIcon_a467e9",
        channelName: "channelName_a467e9",
      };
    },
    201636: function (e, t, n) {
      e.exports = {
        panelContainer: "panelContainer_d476d7",
        locked: "locked_d476d7",
        panelRow: "panelRow_d476d7",
        separator: "separator_d476d7",
      };
    },
    714902: function (e, t, n) {
      e.exports = { container: "container_c7fa60" };
    },
    827202: function (e, t, n) {
      e.exports = {
        videoList: "videoList_a6fa57",
        vertical: "vertical_a6fa57",
        tile: "tile_a6fa57",
      };
    },
    882110: function (e, t, n) {
      e.exports = {
        voiceUser: "voiceUser_cebb84",
        flipped: "flipped_cebb84",
        avatar: "avatar_cebb84",
        username: "username_cebb84",
        effect: "effect_cebb84",
        voiceIcons: "voiceIcons_cebb84",
        voiceIcon: "voiceIcon_cebb84",
        interactive: "interactive_cebb84",
        speaking: "speaking_cebb84",
      };
    },
    152397: function (e, t, n) {
      e.exports = {
        extrasContainer: "extrasContainer_b932b3",
        debug: "debug_b932b3",
        debugUnpinned: "debugUnpinned_b932b3",
        debugPinned: "debugPinned_b932b3",
      };
    },
    122087: function (e, t, n) {
      e.exports = {
        titleWrapper: "titleWrapper_e8dbc8 bgShade_e8dbc8",
        button: "button_e8dbc8 bgShade_e8dbc8",
        active: "active_e8dbc8",
      };
    },
    640784: function (e, t, n) {
      e.exports = { textArea: "textArea_daa88b" };
    },
    176463: function (e, t, n) {
      e.exports = {
        animationWrapper: "animationWrapper_eff2f7",
        clickZone: "clickZone_eff2f7",
        clickable: "clickable_eff2f7",
        overflowWrapper: "overflowWrapper_eff2f7",
        container: "container_eff2f7",
        iconAndDetails: "iconAndDetails_eff2f7",
        footer: "footer_eff2f7",
        details: "details_eff2f7",
        hint: "hint_eff2f7",
        dismissButton: "dismissButton_eff2f7",
        buttonContainer: "buttonContainer_eff2f7",
        button: "button_eff2f7",
        avatar: "avatar_eff2f7",
        icon: "icon_eff2f7",
      };
    },
    109020: function (e, t, n) {
      e.exports = { container: "container_a2d09c" };
    },
    802334: function (e, t, n) {
      e.exports = { container: "container_f19072" };
    },
    693215: function (e, t, n) {
      e.exports = { label: "label_eaa344" };
    },
  },
]);
//# sourceMappingURL=c9dcbd6c9a89f418d558.js.map
