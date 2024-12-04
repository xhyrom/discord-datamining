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
                o()(t)
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
        l = n(149765),
        o = n(442837),
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
            let e = (0, s.K)(c.Z.getChannel(n), !0);
            (0, u.Q)(C.rMx.CHANNEL_OPENED, { ...e, ...(0, r.$H)(n) }),
              (0, a.a)(C.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: n });
          }
        }
        render() {
          return null;
        }
      }
      t.Z = o.ZP.connectStores(
        [v.Z, m.Z, f.Z, g.default, E.Z, d.ZP, p.Z, h.ZP],
        () => {
          var e, t, n;
          let i = v.Z.getGuildId(),
            o = m.Z.getChannelId(i),
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
                      l.$e(C.Plq.SEND_MESSAGES, C.Plq.VIEW_CHANNEL),
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
            selectedChannel: o,
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
        S = n(592125),
        I = n(293273),
        N = n(158776),
        b = n(594174),
        O = n(630388),
        y = n(5192),
        j = n(358085),
        T = n(998502),
        k = n(388627),
        w = n(981631),
        A = n(388032),
        L = n(13663);
      function R(e) {
        let { entry: t, currentUserActivity: n, idx: o } = e,
          c = (0, s.e7)([b.default], () => b.default.getUser(t.author_id)),
          [f, m] = l.useState("unsent"),
          [v, g] = l.useState(!1);
        l.useEffect(() => {
          if ("sent" === f) {
            let e = setTimeout(() => g(!0), 2e3);
            return () => clearTimeout(e);
          }
        }, [f]);
        let x = null != n && (0, p.Z)(n, w.xjy.JOIN),
          Z = async (e) => {
            if (null != c && "unsent" === f) {
              e.stopPropagation();
              try {
                if ((m("sending"), x))
                  await u.Z.sendActivityInviteUser({
                    type: w.mFx.JOIN,
                    userId: c.id,
                    activity: n,
                    location: w.Sbl.UNLOCKED_OVERLAY,
                  });
                else {
                  var i;
                  let e = await d.Z.getOrEnsurePrivateChannel(c.id),
                    n =
                      null !== (i = S.Z.getChannel(e)) && void 0 !== i
                        ? i
                        : null;
                  r()(null != n, "Send channel must be defined"),
                    (0, C.uL)(w.Z5c.CHANNEL(n.guild_id, n.id)),
                    await (0, E.p)({
                      channel: n,
                      content: A.intl.string(A.t.DwAcMz),
                      entry: t,
                      whenReady: !0,
                    });
                }
                h.Z.track(w.rMx.OVERLAY_GAME_INVITE_SENT, {
                  target_user_id: c.id,
                  target_content_entry_id: t.id,
                  target_index: o,
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
              n = null !== (e = S.Z.getChannel(t)) && void 0 !== e ? e : null;
            r()(null != n, "Send channel must be defined"),
              (0, C.uL)(w.Z5c.CHANNEL(n.guild_id, n.id)),
              j.isPlatformEmbedded && T.ZP.focus();
          },
          I = x ? A.intl.string(A.t["3fRyS0"]) : A.intl.string(A.t.y9eo7e),
          N = x
            ? (0, i.jsx)(a.GroupPlusIcon, { color: "currentColor", size: "sm" })
            : (0, i.jsx)(a.SendMessageIcon, {
                color: "currentColor",
                size: "sm",
              });
        return (0, i.jsx)(a.Tooltip, {
          text: I,
          "aria-label": I,
          children: (e) =>
            (0, i.jsx)(a.Button, {
              ...e,
              submitting: "sending" === f,
              onClick: v ? _ : Z,
              className: L.inviteButton,
              wrapperClassName: L.inviteButtonWrapper,
              innerClassName: L.inviteButtonInner,
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
                  : N,
            }),
        });
      }
      function M(e) {
        var t;
        let { entry: n, currentUserActivity: o } = e,
          r = (0, s.e7)([b.default], () => b.default.getUser(n.author_id)),
          c =
            null !== (t = null == o ? void 0 : o.application_id) && void 0 !== t
              ? t
              : n.extra.application_id,
          d = (0, s.e7)(
            [N.Z],
            () => (null != r ? N.Z.getApplicationActivity(r.id, c) : null),
            [c, r],
          ),
          [h, f] = l.useState("unsent");
        if (!(null != d && (0, p.Z)(d, w.xjy.JOIN))) return null;
        let m = async (e) => {
            if (null != r && "unsent" === h) {
              e.stopPropagation();
              try {
                f("sending"),
                  await u.Z.sendActivityInviteUser({
                    type: w.mFx.JOIN_REQUEST,
                    userId: r.id,
                    activity: d,
                    location: w.Sbl.UNLOCKED_OVERLAY,
                  }),
                  f("sent");
              } catch (e) {
                f("unsent");
              }
            }
          },
          v = A.intl.string(A.t.OKsSCQ);
        return (0, i.jsx)(a.Tooltip, {
          text: v,
          "aria-label": v,
          children: (e) =>
            (0, i.jsx)(a.Button, {
              ...e,
              submitting: "sending" === h,
              onClick: m,
              className: L.inviteButton,
              wrapperClassName: L.inviteButtonWrapper,
              innerClassName: L.inviteButtonInner,
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
          o = (0, s.e7)([b.default], () => b.default.getUser(t.author_id)),
          r = (0, s.e7)(
            [_.Z],
            () => (null != o ? _.Z.getAnyStreamForUser(o.id) : null),
            [o],
          ),
          { isMobileOnline: u, status: c } = (0, s.cj)(
            [N.Z],
            () =>
              null == o
                ? { isMobileOnline: void 0, status: void 0 }
                : {
                    isMobileOnline: N.Z.isMobileOnline(o.id),
                    status: N.Z.getStatus(o.id),
                  },
            [o],
          );
        return null == o
          ? null
          : (0, i.jsxs)("div", {
              className: L.row,
              children: [
                (0, i.jsx)(f.Z, {
                  className: L.avatar,
                  user: o,
                  isMobile: u,
                  status: c,
                }),
                (0, i.jsxs)("div", {
                  className: L.details,
                  children: [
                    (0, i.jsxs)("div", {
                      className: L.usernameWrapper,
                      children: [
                        (0, i.jsx)(a.Text, {
                          className: L.username,
                          variant: "text-md/medium",
                          color: "header-primary",
                          children: y.ZP.getName(void 0, void 0, o),
                        }),
                        null != r &&
                          (0, i.jsx)(v.ZP, { className: L.liveIndicator }),
                      ],
                    }),
                    (0, i.jsx)(g.Gk, {
                      location: g.Gt.OVERLAY,
                      className: L.badgesContainer,
                      children: [g.OV, g.wO, g.f, g.v1, g.pQ].map((e, n) =>
                        (0, i.jsx)(e, { entry: t }, "entry-".concat(n)),
                      ),
                    }),
                  ],
                }),
                (0, i.jsx)(M, { entry: t, currentUserActivity: n, idx: l }),
                (0, i.jsx)(R, { entry: t, currentUserActivity: n, idx: l }),
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
        let e = (0, k.II)(),
          t = null == e ? void 0 : e.id,
          n = null == e ? void 0 : e.altId,
          l = (0, x.Ns)(t),
          o = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
          r = (0, s.e7)([I.Z], () =>
            null != n
              ? I.Z.getApplicationActivity(n)
              : null != t
                ? I.Z.getApplicationActivity(t)
                : null,
          ),
          u = null != r && (0, p.Z)(r, w.xjy.JOIN),
          d = (0, m.q)(null == r ? void 0 : r.application_id),
          h = null != d && (0, O.yE)(d.flags, w.udG.EMBEDDED);
        return 0 === l.length && null == r
          ? null
          : (0, i.jsxs)("div", {
              className: L.container,
              children: [
                null != r && null != o
                  ? (0, i.jsx)(Z.Z, {
                      className: L.activityCard,
                      activity: r,
                      user: o,
                      currentUser: o,
                    })
                  : null,
                u && !h
                  ? (0, i.jsx)(a.Button, {
                      className: L.inviteFriendsButton,
                      onClick: () => (0, c.h7)(r, !1, w.IlC.POPOUT),
                      size: a.ButtonSizes.SMALL,
                      color: a.ButtonColors.PRIMARY,
                      children: A.intl.string(A.t["6Qgren"]),
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
      let l = { timeToLiveMs: 5e3, reappearTimeMs: 1e4 },
        o = (0, i.H)(() => l),
        r = 1e4,
        s = 2e4,
        a = 500,
        u = 1e3;
      function c(e) {
        o.setState({ timeToLiveMs: e });
      }
      function d(e) {
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
        c = n(481060),
        d = n(667142),
        h = n(333031),
        f = n(70491);
      let p = { mass: 1, tension: 600, friction: 60, clamp: !0 };
      function m(e) {
        let { locked: t, pinned: n } = e,
          [o, s] = l.useState(0),
          [m, v] = l.useState(0),
          [g, E] = l.useState(0),
          x = l.useRef(0),
          [C, Z] = l.useState(0),
          { timeToLiveMs: _, reappearTimeMs: S } = d.ZP.useState(
            (e) => ({
              timeToLiveMs: e.timeToLiveMs,
              reappearTimeMs: e.reappearTimeMs,
            }),
            a(),
          ),
          I = { timeToLiveMs: _, reappearTimeMs: S },
          N = l.useRef(I);
        l.useEffect(() => void (N.current = I)),
          l.useEffect(
            () => (
              (x.current = setInterval(() => {
                let e = Date.now();
                v(e),
                  E((t) => {
                    if (0 === t) return e;
                    let n = e - t,
                      i = N.current.timeToLiveMs,
                      l = i + N.current.reappearTimeMs;
                    return n > i ? t + l : t;
                  });
              }, 100)),
              () => {
                clearInterval(x.current);
              }
            ),
            [],
          );
        let b = () => {
            s(Date.now()), Z((e) => e + 1);
          },
          O = o > 0 && m - o < 1e3,
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
                        onClick: b,
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
          return N;
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
      function x(e, t, n) {
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
      function S(e, t) {
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
      function I(e) {
        let { computedSize: t } = e;
        return t;
      }
      class N extends (l = s.Component) {
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
              container: { maxX: l, maxY: o, minX: r, minY: s },
              onDragStart: a,
              onDrag: u,
              snapOrientation: c = !0,
            },
            dragState: { offsetX: d, offsetY: h },
            state: { operationStarted: p },
          } = this;
          if (null == n) return null;
          (e = Math.max(Math.min(l, e), r)), (t = Math.max(Math.min(o, t), s));
          let { width: m, height: v } = _(n, this.size),
            g = t - h,
            E = e - d,
            x = (0, f.ou)(
              (0, f.PY)(
                { top: g, left: E, bottom: void 0, right: void 0 },
                l,
                o,
                m,
                v,
              ),
            ),
            C = c ? (0, f.R)(x) : S("RESIZE_SOUTH_EAST", x);
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
                resizeValidation: c = I,
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
                  l,
                  o,
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
          let { top: t, left: n, bottom: i, right: l } = e,
            { current: o } = this.ref;
          if (
            ((this.anchor = { top: t, left: n, bottom: i, right: l }),
            null != o)
          )
            (o.style.top = Z(t)),
              (o.style.bottom = Z(i)),
              (o.style.left = Z(n)),
              (o.style.right = Z(l));
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
            (l.style.width = Z(t)), (l.style.height = Z(n));
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
          return (0, r.jsxs)(c.animated.div, {
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
                let i = S(e, c);
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
                      _(this.ref.current, this.size),
                    );
                  }
                : void 0;
              if (t) {
                let { maxX: e, maxY: t } = this.props.container,
                  { width: n, height: l } = _(this.ref.current, this.size),
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
            (this.size = x(e.size, e.minSize.width, e.minSize.height));
        }
      }
      v(N, "Operations", i);
    },
    350663: function (e, t, n) {
      n.d(t, {
        z: function () {
          return f;
        },
      });
      var i = n(200651),
        l = n(192379),
        o = n(120356),
        r = n.n(o),
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
            locked: l,
            widgetId: o,
            pinned: r,
          } = e;
          return (0, i.jsx)(
            c.Z,
            { participant: t, width: n, locked: l, widgetId: o, pinned: r },
            t.user.id,
          );
        },
        m = { mass: 1, tension: 250, friction: 18, clamp: !0 };
      t.Z = l.memo(function (e) {
        let {
            widgetId: t,
            tileWidth: n,
            layout: l,
            locked: o,
            streamParticipants: c,
            participantsVersion: v,
            pinned: g,
          } = e,
          E = (9 / 16) * n,
          x = c.map((e) => ({
            participant: e,
            key: e.user.id,
            width: n,
            locked: o,
            widgetId: t,
            height: E,
            pinned: g,
          })),
          C = (0, u.Z)(n),
          Z = l === d.C5.VERTICAL,
          _ = 0,
          S = 0,
          I = (0, a.useTransition)(
            Z
              ? x.map((e, t) => ({
                  ...e,
                  y: (_ += e.height + (t > 0 ? f : 0)) - e.height,
                  x: 0,
                }))
              : x.map((e, t) => ({
                  ...e,
                  x: (S += e.width + (t > 0 ? f : 0)) - e.width,
                  y: 0,
                })),
            {
              key: (e) => e.key,
              from: { height: 0, opacity: 0 },
              leave: { height: 0, opacity: 0 },
              enter: (e) => {
                let { x: t, y: n, width: i, height: l } = e;
                return { x: t, y: n, width: i, height: l, opacity: 1 };
              },
              update: (e) => {
                let { x: t, y: n, width: i, height: l } = e;
                return { x: t, y: n, width: i, height: l };
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
          style: Z ? { height: _ } : { width: S },
          children: I((e, t, l, o) =>
            (0, i.jsx)(s.animated.div, {
              className: h.gridItem,
              style: Object.assign({}, e, {
                width: n,
                height: E,
                zIndex: x.length - o,
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
        l = n.n(i),
        o = n(972959),
        r = n(569545);
      let s = (0, o.H)(() => ({ streams: {} }));
      function a(e) {
        var t, n;
        let i = (0, r.V9)(e);
        return null !==
          (n =
            null === (t = s.useState((e) => e.streams, l())[i]) || void 0 === t
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
        return null === (t = s.useState((e) => e.streams, l())[n]) ||
          void 0 === t
          ? void 0
          : t.fitOverride;
      }
    },
    752802: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return L;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        o = n(120356),
        r = n.n(o),
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
        S = n(314897),
        I = n(131951),
        N = n(594174),
        b = n(5192),
        O = n(1226),
        y = n(981631),
        j = n(388032),
        T = n(2847);
      function k(e) {
        let { participant: t } = e,
          n = t.user.id,
          o = (0, s.e7)(
            [I.Z],
            () => {
              let e = (0, m.Z)(t.type);
              return I.Z.isLocalMute(t.user.id, e);
            },
            [t],
          ),
          r = (0, s.e7)([S.default], () => S.default.getId()),
          { hasVideo: d } = (0, Z.Z)(t, r),
          h = o && d,
          f = l.useCallback(() => {
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
      function w(e) {
        let { hasActiveStream: t, participant: l, onEnablePin: o } = e,
          a = (0, p.bp)(),
          c = l.user,
          h = (0, s.e7)(
            [N.default],
            () => {
              var e;
              return null !== (e = N.default.getUser(c.id)) && void 0 !== e
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
                          (0, f.rn)(l.stream, {
                            forceMultiple: !0,
                            noFocus: !0,
                          }),
                          o();
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
                        children: b.ZP.getName(
                          l.stream.guildId,
                          l.stream.channelId,
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
                        (0, i.jsx)(k, { participant: l }),
                        (0, i.jsx)(u.Tooltip, {
                          text: j.intl.string(j.t["3D5yo6"]),
                          children: (e) => {
                            let { onClick: t, ...o } = e;
                            return (0, i.jsx)(u.Clickable, {
                              ...o,
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
                                        stream: l.stream,
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
      let A = new Set([y.jm8.ENDED, y.jm8.FAILED, y.jm8.PAUSED]),
        L = l.memo(function (e) {
          let {
              participant: t,
              width: n,
              locked: l,
              widgetId: o,
              pinned: a,
            } = e,
            u = (0, s.e7)(
              [_.Z],
              () => _.Z.getActiveStreamForUser(t.user.id, t.stream.guildId),
              [t.user.id, t.stream.guildId],
            ),
            c = null != u && A.has(u.state),
            d = null != u,
            f = (0, O.yA)(t.stream),
            p = (0, O.xN)(t.stream);
          return (!d && l) || c
            ? null
            : (0, i.jsxs)("div", {
                className: T.tile,
                children: [
                  d &&
                    !l &&
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
                            focused: !l,
                            paused: !1,
                            selected: !1,
                            wrapperClassName: l ? T.streamTileWrapper : void 0,
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
                  l
                    ? null
                    : (0, i.jsx)(w, {
                        participant: t,
                        hasActiveStream: d,
                        onEnablePin: () => {
                          !a && (0, h.xh)(o);
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
        l = n(192379),
        o = n(442837),
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
        let l = (i - 1) * m.z;
        return e === v.C5.HORIZONTAL
          ? Math.min(Math.max((t - l) / i, 256), Math.max((16 * n) / 9, 256))
          : Math.min(Math.max(t, 256), Math.max((((n - l) / i) * 16) / 9, 256));
      }
      function C(e) {
        var t;
        let {
            id: n,
            size: C,
            locked: Z,
            padding: _,
            borderWidth: S,
            opacity: I,
            horizontal: N,
            pinned: b,
          } = e,
          O = 2 * _ + 2 * S;
        let { width: y, height: j } = {
            width: "number" == typeof (t = C).width ? t.width : 256,
            height: "number" == typeof t.height ? t.height : 144,
          },
          T = (0, o.e7)([p.Z], () => p.Z.getVoiceChannelId()),
          { width: k, height: w, ref: A } = (0, s.Z)(),
          L = (0, o.e7)(
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
          R = (0, o.e7)([h.Z], () => h.Z.getChannel(T)),
          M = (0, o.e7)([d.default], () => d.default.getId()),
          { participantsVersion: z, streamParticipants: D } = (0, o.cj)(
            [c.Z, a.Z],
            () => {
              if (null == T)
                return { streamParticipants: E, participantsVersion: -1 };
              let e = new Set(
                  c.Z.getAllActiveStreamsForChannel(T).map((e) => (0, u.V9)(e)),
                ),
                t = (t) => e.has((0, u.V9)(t.stream)),
                n = a.Z.getStreamParticipants(T).filter(
                  (t) => t.user.id !== M && (!!L || e.has((0, u.V9)(t.stream))),
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
            [T, M, L],
          ),
          P = D.length,
          V = null == R || 0 === P,
          { tileWidth: W, layout: U } = (function (e, t, n, i, o) {
            let r = (function (e, t, n, i) {
                let l = x(v.C5.HORIZONTAL, e, t, n),
                  o = x(v.C5.VERTICAL, e, t, n);
                switch (i) {
                  case v.C5.VERTICAL:
                    return o;
                  case v.C5.HORIZONTAL:
                    return l;
                }
                let r = ((9 * o) / 16 + m.z) * n - m.z;
                return e > (16 * t) / 9
                  ? l
                  : r <= t
                    ? o
                    : (9 * l) / 16 <= t
                      ? l
                      : o;
              })(n, i, t, o),
              s = x(v.C5.VERTICAL, n, i, t),
              a = null != o ? o : r === s ? v.C5.VERTICAL : v.C5.HORIZONTAL,
              [u, c] = l.useState(r);
            return (
              l.useEffect(() => {
                !e && c(r);
              }, [e, r]),
              { layout: a, tileWidth: u }
            );
          })(
            !1,
            P,
            null != k ? k : y - O,
            null != w ? w : j - O,
            N ? v.C5.HORIZONTAL : v.C5.VERTICAL,
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
              widgetLayoutSpecs: o,
            } = e,
            s = l.useRef(o);
          l.useEffect(() => void (s.current = o)),
            l.useEffect(() => {
              let {
                id: e,
                width: t,
                height: i,
                sizeOffset: l,
                layout: o,
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
              if (o === v.C5.HORIZONTAL) {
                let t = (16 / 9) * (i - l);
                (0, r.nv)({
                  widgetId: e,
                  size: {
                    fixed: !0,
                    height: i,
                    width: t * n.length + a * (n.length - 1) + l,
                  },
                });
              } else {
                let i = (9 / 16) * (t - l);
                (0, r.nv)({
                  widgetId: e,
                  size: {
                    fixed: !0,
                    width: t,
                    height: i * n.length + a * (n.length - 1) + l,
                  },
                });
              }
            }, [n.length]),
            l.useEffect(() => {
              if (s.current.participants <= 1) return;
              let {
                id: e,
                width: t,
                height: n,
                sizeOffset: l,
                padding: o,
                participants: a,
              } = s.current;
              if (i === v.C5.HORIZONTAL) {
                let n = t - l;
                (0, r.nv)({
                  widgetId: e,
                  size: {
                    fixed: !0,
                    width: n * a + o * (a - 1) + l,
                    height: (9 / 16) * n + l,
                  },
                });
              } else {
                let t = n - l;
                (0, r.nv)({
                  widgetId: e,
                  size: {
                    fixed: !0,
                    width: (16 / 9) * t + l,
                    height: t * a + o * (a - 1) + l,
                  },
                });
              }
            }, [i]),
            l.useEffect(
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
              style: { opacity: I },
              ref: A,
              children: (0, i.jsx)(m.Z, {
                widgetId: n,
                tileWidth: W,
                locked: Z,
                layout: U,
                streamParticipants: D,
                participantsVersion: z,
                pinned: b,
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
          c = (0, s.o)();
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
            null != n && c
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
        S = n(574254),
        I = n(556296),
        N = n(237997),
        b = n(451478),
        O = n(585483),
        y = n(358085),
        j = n(13140),
        T = n(145597),
        k = n(830917),
        w = n(86071),
        A = n(681603),
        L = n(915614),
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
      function X(e) {
        e.preventDefault();
      }
      function Q(e) {
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
      let J = l.memo(function (e) {
          let { keybind: t, onClick: n, locked: l } = e;
          return (0, i.jsx)(u.Clickable, {
            className: r()(H.overlayBackground, {
              [H.overlayActive]: !l,
              [H.overlayLocked]: l,
            }),
            onMouseDown: (e) => {
              let { currentTarget: t, target: i, button: l } = e;
              l === U.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: Q,
            children: l
              ? null
              : (0, i.jsx)(M.Z, {
                  className: H.closeContainer,
                  children: (0, i.jsx)(L.Z, {
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
                className: H.closeContainer,
                children: (0, i.jsx)(L.Z, {
                  onClick: () => d.Z.setInputLocked(!1, (0, T.QF)()),
                  IconComponent: u.LockUnlockedIcon,
                }),
              })
            : null;
        });
      function $() {
        if (null != S.Z.getContextMenu()) {
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
        let t = N.Z.isLocked((0, T.QF)());
        "alt" === e.key.toLowerCase() &&
          !t &&
          ("keyup" === e.type.toLowerCase()
            ? O.S.dispatch(U.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 })
            : "keydown" === e.type.toLowerCase() &&
              O.S.dispatch(U.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
      }
      function ei(e) {
        var t, n;
        let { isEmbeddedActivity: o } = e,
          c = (0, P.Z)(),
          {
            locked: m,
            focused: S,
            incompatibleApp: O,
            hasValidResolution: y,
            hasZeroSizeDimension: L,
            keybind: M,
          } = (0, s.cj)([N.Z, b.Z, I.Z], () => {
            let e = b.Z.windowSize((0, k.ZY)(c)),
              t = I.Z.getOverlayKeybind();
            return {
              locked: N.Z.isLocked((0, T.QF)()),
              focused: N.Z.isFocused((0, T.QF)()),
              incompatibleApp: N.Z.incompatibleApp,
              hasValidResolution: (0, T.Te)(e),
              hasZeroSizeDimension: 0 === e.height || 0 === e.width,
              keybind: null != t ? (0, j.BB)(t.shortcut, !0) : "???",
            };
          }),
          { analyticsLocations: W } = (0, f.ZP)(h.Z.OVERLAY);
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
            let e = l.useRef(!1),
              t = (0, z.pL)(),
              n = _.Z.getVoiceChannelId(),
              i = x.Z.getChannel(n),
              o = null != i ? C.Z.getGuild(i.guild_id) : null,
              r = null != E.Z.getCurrentUserActiveStream(),
              a = null != n,
              u = (0, g.Z)(Z.Z) && !r && null != t,
              c = a && null != o && null != n,
              h = (0, v.Ns)(null == t ? void 0 : t.id),
              f = (0, s.e7)(
                [p.Z],
                () => null != p.Z.getLastFeedFetchDate(F.YN.GAME_PROFILE_FEED),
              );
            l.useEffect(() => {
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
                      voiceGuild: o,
                    })
                  : u && i.push({ type: V.nc.GO_LIVE_NON_VOICE, game: t }),
                h.length > 0)
              ) {
                let { enabled: e } = w.Z.getCurrentConfig(
                  { location: "Overlay" },
                  { autoTrackExposure: !0 },
                );
                e && i.push({ type: V.nc.CONTENT_INVENTORY, entries: h });
              }
              d.Z.overlayMounted(...i);
            }, [f, h, a, u, c, t, n, o]);
          })(),
          (t = m),
          (n = c),
          l.useEffect(() => {
            if (t) {
              if (
                ((0, a.Ay)(u.POPOUT_MODAL_CONTEXT),
                n.addEventListener("contextmenu", X, !1),
                null != K)
              ) {
                let e = Date.now() - K;
                d.Z.track(U.rMx.OVERLAY_LOCKED, { unlocked_duration: e }),
                  (K = null);
              }
              return () => {
                n.removeEventListener("contextmenu", X, !1);
              };
            }
            n.removeEventListener("contextmenu", X, !1),
              null == K &&
                ((K = Date.now()), d.Z.track(U.rMx.OVERLAY_UNLOCKED));
          }, [t, n]),
          (0, i.jsx)(f.Gt, {
            value: W,
            children: (0, i.jsx)(u.RedesignIconContextProvider, {
              children:
                L || O
                  ? null
                  : (0, i.jsx)(u.ThemeProvider, {
                      theme: U.BRd.DARK,
                      children: (e) =>
                        (0, i.jsxs)("div", {
                          className: r()(H.overlay, e),
                          children: [
                            !o && G,
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
                            !o && Y && (0, i.jsx)(q, { locked: m, focused: S }),
                            (0, i.jsx)(A.Z, {}),
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
        c = n(388627),
        d = n(892127),
        h = n(84346),
        f = n(561064),
        p = n(501787);
      function m(e) {
        return e.widget.id;
      }
      function v(e, t, n, l) {
        return n === r.TransitionStates.YEETED
          ? null
          : (0, i.jsx)(d.Z, { ...t, transitionState: n, cleanUp: l }, e);
      }
      let g = [];
      t.Z = l.memo(function (e) {
        let { className: t } = e,
          n = (0, f.Z)(),
          d = (0, o.e7)([a.Z], () => a.Z.windowSize((0, u.ZY)(n))),
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
            c.HP,
          ),
          x = l.useCallback(
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
        l = n(192379),
        o = n(120356),
        r = n.n(o),
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
      let Z = l.createContext(
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
                        l = C(n.zone.name, i);
                      if (!(0, d.Z)(l, n.zone))
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
      function _(e) {
        let { observe: t = !0, className: n, children: o } = e,
          s = l.useContext(Z),
          a = (0, c.e7)([m.Z], () => m.Z.clickZoneDebugMode),
          [{ refHandler: u, setObserve: d }] = l.useState(() => {
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
            d(t);
          }, [t, d]),
          (0, i.jsx)("div", {
            ref: u,
            className: r()(n, E.clickable, a && E.debugMode),
            "data-click-zone": !0,
            children: o,
          })
        );
      }
    },
    340101: function (e, t, n) {
      n.d(t, {
        C5: function () {
          return l;
        },
        ZL: function () {
          return r;
        },
        js: function () {
          return s;
        },
      });
      var i,
        l,
        o = n(981631);
      function r(e) {
        return (null == e ? void 0 : e.type) === o.Odu.GO_LIVE;
      }
      function s(e) {
        return e.type === o.Odu.VIDEO;
      }
      ((i = l || (l = {})).HORIZONTAL = "horizontal"),
        (i.VERTICAL = "vertical");
    },
    293224: function (e, t, n) {
      n.d(t, {
        L: function () {
          return ea;
        },
        N3: function () {
          return en;
        },
        Ox: function () {
          return ee;
        },
        SE: function () {
          return et;
        },
        aG: function () {
          return el;
        },
        c_: function () {
          return eo;
        },
        sm: function () {
          return ei;
        },
      });
      var i = n(200651),
        l = n(192379),
        o = n(120356),
        r = n.n(o),
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
        S = n(659580),
        I = n(793865),
        N = n(55311),
        b = n(575175),
        O = n(933557),
        y = n(471445),
        j = n(74299),
        T = n(803647),
        k = n(565138),
        w = n(917405),
        A = n(603074),
        L = n(879815),
        R = n(189771),
        M = n(294629),
        z = n(67844),
        D = n(544384),
        P = n(892807),
        V = n(560688),
        W = n(199902),
        U = n(430824),
        F = n(131951),
        B = n(19780),
        H = n(944486),
        Y = n(594174),
        G = n(979651),
        K = n(388627),
        X = n(981631),
        Q = n(388032),
        J = n(725775);
      function q(e) {
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
      function $(e) {
        let {
          isToggled: t,
          disabled: n,
          cutoutIcon: l,
          icon: o,
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
              className: J.button,
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
                        null == d || d(e);
                    },
                    className: r()(
                      J.cutoutContainer,
                      t && J.toggledCutoutContainer,
                    ),
                    children: l,
                  }),
              ],
            });
          },
        });
      }
      function ee(e) {
        let { voiceChannel: t, locked: n } = e,
          { suppress: o, selfMute: r, mute: s } = (0, M.Z)(t),
          a = r || s || o,
          u = (0, _.Z)(r, s, o, !1),
          {
            Component: d,
            play: h,
            events: f,
          } = (0, c.O)(a ? "unmute" : "mute");
        l.useEffect(() => () => h(), [h, a]);
        let m = q(n);
        return (0, i.jsx)(p.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(S.default, {
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
            return (0, i.jsx)($, {
              icon: (0, i.jsx)(d, { color: "currentColor", size: "sm" }),
              tooltip: u,
              isToggled: !a,
              onClick: () => (0, b.Z)(s, o, X.jXE.OVERLAY),
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
      function et(e) {
        let { voiceChannel: t } = e,
          { selfDeaf: o, deaf: r } = (0, L.Z)(t),
          s = o || r,
          {
            Component: a,
            play: c,
            events: { onMouseEnter: d, onMouseLeave: h },
          } = (0, u.l)(s ? "undeafen" : "deafen"),
          f = r ? p.HeadphonesDenyIcon : a,
          { analyticsLocations: m } = (0, C.ZP)(x.Z.OVERLAY);
        return (
          l.useEffect(() => () => c(), [s, c]),
          (0, i.jsx)($, {
            icon: (0, i.jsx)(f, { color: "currentColor", size: "sm" }),
            tooltip: (0, Z.Z)(o, r, !1),
            isToggled: s,
            onClick: () => {
              (0, N.Z)(r, X.jXE.OVERLAY);
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
      function en(e) {
        var t;
        let { voiceChannel: n, locked: o } = e,
          r = (0, s.e7)([F.Z], () => F.Z.isVideoEnabled()),
          a = (0, s.e7)([F.Z], () => Object.values(F.Z.getVideoDevices())[0]),
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
        l.useEffect(() => () => x(), [r, x]);
        let S = q(o),
          N = null == n || !d;
        return (0, i.jsx)(p.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(I.Z, { onClose: S(t) });
          },
          align: "center",
          position: "top",
          animation: p.Popout.Animation.FADE,
          children: (e, t) => {
            let { onClick: n } = e,
              { isShown: l } = t;
            return (0, i.jsx)($, {
              icon: (0, i.jsx)(E, { color: "currentColor", size: "sm" }),
              tooltip: _,
              onClick: g,
              isToggled: r,
              onCutoutClick: n,
              onContextMenu: n,
              onMouseEnter: C,
              onMouseLeave: Z,
              cutoutIcon: N
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
              disabled: N,
            });
          },
        });
      }
      function ei(e) {
        let t,
          { voiceChannel: o, locked: r } = e,
          a = null == o ? void 0 : o.id,
          u = (0, s.e7)([Y.default], () => Y.default.getCurrentUser()),
          c = (0, R.Z)(o),
          h = (0, s.cj)([F.Z], () => (0, j.Z)(F.Z)),
          f = (0, s.e7)([W.Z], () => W.Z.getCurrentUserActiveStream()),
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
                    analyticsLocation: X.Sbl.UNLOCKED_OVERLAY,
                  });
              });
          }, [h, v, a]),
          x = null != f;
        if (x) t = Q.intl.string(Q.t.S5anIS);
        else if (null != o) {
          let e = (0, K.pL)();
          t = c
            ? null != e
              ? Q.intl.format(Q.t.AB5gT0, { game: e.name })
              : Q.intl.string(Q.t.FeUKeH)
            : Q.intl.string(Q.t.uQn9Bw);
        }
        let C = () => {
            if (x) return (0, T.Z)(f, !1);
            g();
          },
          {
            Component: Z,
            events: { onMouseEnter: _, onMouseLeave: S },
            play: I,
          } = (0, d.P)(x ? "disable" : "enable");
        l.useEffect(() => () => I(), [x, I]);
        let N = q(r);
        return (0, i.jsx)(p.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return null != o
              ? (0, i.jsx)(D.Z, {
                  channel: o,
                  currentUser: u,
                  activeStreams: null != f ? [f] : [],
                  handleGoLive: g,
                  onClose: N(t),
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
            return (0, i.jsx)($, {
              icon: (0, i.jsx)(Z, { color: "currentColor", size: "sm" }),
              tooltip: t,
              isToggled: x,
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
              onMouseEnter: _,
              onMouseLeave: S,
              disabled: !h || !c,
            });
          },
        });
      }
      function el(e) {
        var t;
        let { voiceChannel: l, locked: o } = e,
          r =
            null !== (t = null == l ? void 0 : l.getGuildId()) && void 0 !== t
              ? t
              : null,
          { mute: a, suppress: u } = (0, M.Z)(l),
          c = (0, s.e7)([F.Z], () => F.Z.isDeaf()),
          d = null == l || a || u || c;
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
          C = q(o);
        return (0, i.jsx)(p.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return d || null == l
              ? (0, i.jsx)(i.Fragment, {})
              : (0, i.jsx)(A.Z, {
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
            return (0, i.jsx)($, {
              icon: (0, i.jsx)(m, { color: "currentColor", size: "sm" }),
              tooltip: (function () {
                if (a) return Q.intl.string(Q.t["Ox4/zc"]);
                if (u) return Q.intl.string(Q.t["+YBKYG"]);
                if (c) return Q.intl.string(Q.t.X1lQlp);
              })(),
              onClick: (e) => {
                g(), n(e);
              },
              onContextMenu: f,
              onMouseEnter: E,
              onMouseLeave: x,
              isToggled: l,
              disabled: d,
            });
          },
        });
      }
      function eo(e) {
        let { voiceChannel: t, locked: n } = e,
          l = (0, s.e7)(
            [H.Z],
            () => H.Z.getVoiceChannelId() === (null == t ? void 0 : t.id),
          ),
          o = () => {
            l && g.default.disconnect();
          },
          r = (e) => {
            g.default.selectVoiceChannel(e.id);
          },
          {
            Component: u,
            events: { onMouseEnter: c, onMouseLeave: d },
          } = (0, a.K)(),
          h = q(n),
          f = l
            ? (0, i.jsx)(u, { color: "currentColor", size: "sm" })
            : (0, i.jsx)(p.PhoneCallIcon, {
                color: "currentColor",
                size: "sm",
              }),
          m = (e) =>
            e
              ? (0, i.jsx)(p.ChevronSmallUpIcon, {
                  color: "currentColor",
                  size: "sm",
                })
              : (0, i.jsx)(p.ChevronSmallDownIcon, {
                  color: "currentColor",
                  size: "sm",
                });
        return (0, i.jsx)(p.Popout, {
          renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(P.Z, {
              currentVoiceChannel: t,
              onClose: h(n),
              onSelect: r,
            });
          },
          align: "center",
          position: "top",
          animation: p.Popout.Animation.FADE,
          children: (e, n) => {
            let { onClick: r } = e,
              { isShown: s } = n;
            return (0, i.jsx)($, {
              icon: f,
              tooltip:
                null != t
                  ? Q.intl.string(Q.t["6vrfgo"])
                  : Q.intl.string(Q.t.S0W8Z2),
              onClick: l ? o : r,
              defaultColor: l
                ? p.Button.Colors.RED
                : p.Button.Colors.TRANSPARENT,
              onMouseEnter: c,
              onMouseLeave: d,
              onContextMenu: r,
              isToggled: s,
              cutoutIcon: l ? m(s) : null,
              onCutoutClick: l ? r : void 0,
            });
          },
        });
      }
      function er(e) {
        let { voiceChannel: t } = e,
          n = (0, s.e7)([U.Z], () => U.Z.getGuild(t.getGuildId()), [t]);
        switch (!0) {
          case t.isGroupDM() || t.isDM():
          case t.isDM():
            return null;
          case null != n:
            return (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)("div", { className: J.separatorDot }),
                (0, i.jsxs)("div", {
                  className: J.guildIconContainer,
                  children: [
                    (0, i.jsx)(k.Z, {
                      guild: n,
                      size: k.Z.Sizes.SMOL,
                      className: J.guildIcon,
                    }),
                    (0, i.jsx)(p.Text, {
                      tag: "div",
                      variant: "text-xs/semibold",
                      color: "text-primary",
                      className: J.guildName,
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
      function es(e) {
        let { voiceChannel: t } = e,
          n = (0, y.KS)(t),
          l = (0, O.ZP)(t);
        return (0, i.jsxs)("div", {
          className: J.voiceChannelNameContainer,
          children: [
            null != n &&
              (0, i.jsx)(p.Text, {
                tag: "div",
                color: "text-muted",
                variant: "text-xs/normal",
                className: J.channelIcon,
                children: (0, i.jsx)(n, { size: "xs", color: "currentColor" }),
              }),
            null != l &&
              (0, i.jsx)(p.Text, {
                variant: "text-xs/semibold",
                color: "text-muted",
                className: J.channelName,
                children: l,
              }),
          ],
        });
      }
      function ea(e) {
        let { voiceChannel: t } = e,
          n = null == t ? void 0 : t.id,
          l = (0, s.cj)([B.Z], () => ({
            channelId: B.Z.getChannelId(),
            quality: B.Z.getQuality(),
            state: B.Z.getState(),
            lastPing: B.Z.getLastPing(),
          })),
          o = null != n,
          r = (0, s.e7)([G.Z], () => null != n && G.Z.hasVideo(n), [n]);
        return (
          o &&
          null != t &&
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(w.Z, { ...l, hasVideo: r }),
              (0, i.jsx)(er, { voiceChannel: t }),
              (0, i.jsx)("div", { className: J.separatorDot }),
              (0, i.jsx)(es, { voiceChannel: t }),
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
      var l = n(120356),
        o = n.n(l),
        r = n(442837),
        s = n(592125),
        a = n(944486),
        u = n(293224),
        c = n(201636);
      function d(e) {
        let { locked: t } = e,
          n = (0, r.e7)([a.Z], () => a.Z.getVoiceChannelId()),
          l = (0, r.e7)([s.Z], () => s.Z.getChannel(n)),
          d = null != l;
        return (0, i.jsxs)("div", {
          className: o()({ [c.panelContainer]: !0, [c.locked]: t }),
          children: [
            (0, i.jsxs)("div", {
              className: c.panelRow,
              children: [
                (0, i.jsx)(u.Ox, { voiceChannel: l, locked: t }),
                (0, i.jsx)(u.SE, { voiceChannel: l, locked: t }),
                (0, i.jsx)(u.N3, { voiceChannel: l, locked: t }),
                (0, i.jsx)("div", { className: c.separator }),
                (0, i.jsx)(u.sm, { voiceChannel: l, locked: t }),
                (0, i.jsx)(u.aG, { voiceChannel: l, locked: t }),
                (0, i.jsx)("div", { className: c.separator }),
                (0, i.jsx)(u.c_, { voiceChannel: l, locked: t }),
              ],
            }),
            d &&
              (0, i.jsx)("div", {
                className: c.panelRow,
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
        c = n(554174),
        d = n(710111),
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
          return N;
        },
      });
      var i = n(200651),
        l = n(192379),
        o = n(120356),
        r = n.n(o),
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
      function S(e) {
        var t;
        let { participant: n, channel: l, context: o } = e,
          r = null === (t = n.user) || void 0 === t ? void 0 : t.id;
        return (0, s.e7)(
          [g.Z],
          () =>
            null != n.user &&
            null != o &&
            null != l &&
            g.Z.isLocalVideoDisabled(r, o),
          [r, n.user, o, l],
        )
          ? null
          : (0, i.jsx)(p.ZP, { ...e });
      }
      function I(e) {
        let {
            context: t = Z.Yn.DEFAULT,
            participants: o,
            locked: s,
            widget: u,
            channel: c,
            width: d,
            height: h,
            containerRef: p,
          } = e,
          m = (e, l) => {
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
          v = o.length > 0 && null != t && null != c && (!s || u.pinned);
        l.useEffect(() => {
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
              children: o.map((e) =>
                (0, i.jsx)(
                  S,
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
      function N(e) {
        let t = (0, s.e7)([E.Z, v.Z], () =>
            v.Z.getChannel(E.Z.getVoiceChannelId()),
          ),
          n = (0, h.ZP)(t),
          o = (0, s.Wu)([d.Z], () =>
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
            o,
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
          S = l.useRef(_);
        return (
          l.useLayoutEffect(() => void (S.current = _)),
          l.useLayoutEffect(() => {
            let {
              size: e,
              id: t,
              containerWidth: n,
              containerHeight: i,
            } = S.current;
            ((a && e.height > e.width) || (!a && e.width > e.height)) &&
              (0, u.nv)({
                widgetId: t,
                size: { fixed: !0, width: i, height: n },
              });
          }, [a]),
          (0, i.jsx)(I, {
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
        l = n(192379),
        o = n(120356),
        r = n.n(o),
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
        S = n(314897),
        I = n(592125),
        N = n(355863),
        b = n(131951),
        O = n(944486),
        y = n(938475),
        j = n(237997),
        T = n(136015),
        k = n(51144),
        w = n(145597),
        A = n(388627),
        L = n(981631),
        R = n(65154),
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
            nick: c,
            displayNameMode: d,
            displayUserMode: p,
            size: m = L.ipw.LARGE,
            onClick: v,
            onContextMenu: E,
            context: x,
            guildId: C,
            voiceState: I,
            showStreamPreview: N,
            onShowStreamPreview: O,
            onWatchStream: y,
          } = e,
          j = (0, s.e7)([S.default], () => S.default.getId() === u.id, [u.id]),
          [T, k, w] = (0, s.Wu)(
            [b.Z],
            () =>
              j
                ? [
                    !b.Z.isSupported() ||
                      b.Z.isSelfMute() ||
                      b.Z.isSelfMutedTemporarily(),
                    b.Z.isSelfDeaf(),
                    !1,
                  ]
                : [
                    !b.Z.isSupported() || b.Z.isLocalMute(u.id),
                    !1,
                    b.Z.isLocalVideoDisabled(u.id),
                  ],
            [j, u.id],
          ),
          A = (0, s.e7)([_.Z], () => _.Z.getCurrentUserActiveStream()),
          R = (0, s.Wu)([_.Z], () => (null != A ? _.Z.getViewerIds(A) : [])),
          D = (0, f.Z)({ userId: u.id, context: x }),
          P = (0, s.e7)([_.Z], () => _.Z.getStreamForUser(u.id, C)),
          V = null != P,
          W = l.useMemo(
            () => null != A && A.ownerId !== u.id && R.includes(u.id),
            [A, u.id, R],
          ),
          U = l.useCallback(() => O(null), [O]),
          F = l.useCallback(
            () =>
              (0, i.jsx)(g.Z, {
                user: u,
                channel: t,
                onWatch: () => {
                  (0, h.rn)(P, { forceMultiple: !0, noFocus: !0 }), U(), y();
                },
                onAction: y,
                previewIsOpen: N,
                location: L.Sbl.UNLOCKED_OVERLAY,
                hideTip: !0,
              }),
            [u, t, P, N, U, y],
          );
        if (p === L.OYC.ONLY_WHILE_SPEAKING && o && !D) return null;
        let { mute: B, suppress: H, deaf: Y } = I,
          G = m === L.ipw.LARGE ? 32 : 24;
        return (0, i.jsxs)(a.Clickable, {
          className: r()(M.voiceUser, {
            [M.speaking]: D,
            [M.interactive]: !o,
            [M.flipped]: n,
          }),
          onClick: o ? void 0 : (e) => (null == v ? void 0 : v(e, u)),
          onContextMenu: o ? void 0 : (e) => (null == E ? void 0 : E(e, u)),
          onMouseEnter: () => O(u.id),
          onMouseLeave: U,
          children: [
            (0, i.jsx)(a.Avatar, {
              className: M.avatar,
              size:
                m === L.ipw.LARGE
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
            o && (d === L.wC$.NEVER || (!D && d === L.wC$.ONLY_WHILE_SPEAKING))
              ? null
              : (0, i.jsx)(a.Popout, {
                  position: "right",
                  renderPopout: F,
                  shouldShow: N,
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
                          video: I.selfVideo,
                          isStreaming: V,
                          className: M.voiceIcons,
                          iconClassName: M.voiceIcon,
                          isWatching: W,
                          localMute: T && !j,
                          localVideoDisabled: w,
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
            context: o = R.Yn.DEFAULT,
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
          [E, x] = l.useState(null),
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
          Z = s.length > 0 && null != o && null != r && (!f || p),
          _ = l.useCallback(() => {
            var e, n;
            let i =
                null === (e = N.Z.getWidget(t)) || void 0 === e
                  ? void 0
                  : e.layoutId,
              l =
                null != i
                  ? null === (n = N.Z.getWidgetsForLayout(i)) || void 0 === n
                    ? void 0
                    : n.find((e) => e.type === L.Odu.GO_LIVE)
                  : null;
            null != l &&
              !l.pinned &&
              ((0, c.xh)(l.id),
              d.Z.track(L.rMx.OVERLAY_PIN_TOGGLED, {
                pinned: !0,
                guild_id: null == r ? void 0 : r.guild_id,
                channel_id: null == r ? void 0 : r.id,
                channel_type: null == r ? void 0 : r.type,
                widget_type: L.Odu.GO_LIVE,
              }));
          }, [r, t]);
        return Z
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
                            : k.ZP.getName(n),
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
        let n = (0, s.e7)([O.Z, I.Z], () =>
            I.Z.getChannel(O.Z.getVoiceChannelId()),
          ),
          l = (0, v.ZP)(n),
          o = (function () {
            let [e] = (0, s.e7)(
              [y.ZP, x.Z, O.Z, I.Z],
              () => {
                let e = I.Z.getChannel(O.Z.getVoiceChannelId());
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
          a = (0, A.II)(),
          u = (0, p.q)(null == a ? void 0 : a.id),
          c = (0, s.cj)([_.Z, j.Z], () => {
            let e = _.Z.getCurrentUserActiveStream();
            return {
              displayUserMode: j.Z.getDisplayUserMode(),
              displayNameMode: j.Z.getDisplayNameMode(),
              avatarSizeMode: j.Z.getAvatarSizeMode(),
              streamApplication:
                (null == r ? void 0 : r.pid) === (0, w.QF)()
                  ? (0, E.Z)(a)
                  : null,
              stream: e,
            };
          });
        return (0, i.jsx)(P, {
          ...c,
          application: u,
          ...e,
          sortedVoiceStates: o,
          channel: n,
          title: null != l ? l : "",
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
        l = n(192379),
        o = n(120356),
        r = n.n(o),
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
      t.Z = l.memo(function (e) {
        let {
            widget: t,
            renderWidget: n,
            renderTitle: o,
            renderButtons: Z,
            resizeValidation: _,
          } = e,
          S = c.Z.getWidgetConfig(t.type),
          I = (0, s.e7)([d.Z], () => d.Z.isLocked((0, p.QF)())),
          N = (0, E.Z)(),
          b = (0, s.e7)([h.Z], () => h.Z.windowSize((0, m.ZY)(N))),
          O = (0, E.Z)(),
          y = l.useCallback((e, t, n, i, l) => {
            let o = h.Z.windowSize((0, m.ZY)((0, E.i)())),
              r = (0, f.jL)(n, o),
              s = (0, f.Ox)(i, o);
            (0, a.Os)(t), (0, a.nv)({ widgetId: t, anchor: r, size: s });
            let d = e === v.B.MOVE,
              p = (0, f.PY)(n, o.width, o.height, l.width, l.height);
            u.Z.track(x.rMx.OVERLAY_LAYOUT_UPDATED, {
              was_resized: !d,
              was_dragged: d,
              widget_type: c.Z.getWidgetType(t),
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
          { id: T, pinned: k, zIndex: w, size: A, anchor: L } = t,
          R = (0, f.w_)(A, b),
          M = (0, f.KR)(L, b),
          { minSize: z, resizeX: D, resizeY: P, dragAnywhere: V } = S,
          W = k || !I,
          U = l.useMemo(
            () => ({ minX: 0, minY: 0, maxX: b.width, maxY: b.height }),
            [b],
          ),
          F = l.useCallback((e) => n({ ...e, widget: t }), [t, n]),
          B = l.useCallback(
            (e) =>
              null != o || null != Z
                ? (0, i.jsxs)("div", {
                    className: C.extrasContainer,
                    children: [
                      null == o ? void 0 : o(t),
                      null == Z ? void 0 : Z(t, e),
                    ],
                  })
                : null,
            [t, o, Z],
          ),
          H = (0, s.e7)([g.Z], () => g.Z.renderDebugMode),
          Y = l.useMemo(() => {
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
          locked: I,
          resizeX: D,
          resizeY: P,
          style: { zIndex: w },
          dragAnywhere: V,
          active: !I,
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
        l = n(239091),
        o = n(603618),
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
            (0, i.jsx)(f.PI, { children: g.intl.string(g.t.UPvOiY) }),
          renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(f.ls, {
                  onClick: (o) =>
                    (function (e, t, o) {
                      if (!!(0, u.js)(t))
                        (0, l.jW)(e, async () => {
                          let { default: e } = await n
                            .e("26775")
                            .then(n.bind(n, 740579));
                          return (
                            o(!0),
                            (n) =>
                              (0, i.jsx)(e, {
                                ...n,
                                widget: t,
                                onClose: () => o(!1),
                              })
                          );
                        });
                    })(o, e, t),
                }),
                (0, i.jsx)(f.RT, { id: e.id, pinned: e.pinned }),
              ],
            }),
          resizeValidation(e) {
            let { widget: t, computedSize: n, borderWidth: i, padding: l } = e;
            return (0, u.js)(t)
              ? "boolean" != typeof t.meta.horizontal || t.meta.horizontal
                ? {
                    width: Math.max(n.width, m.OVERLAY_TILE_WIDTH),
                    height: Math.min(
                      n.height,
                      2 * m.OVERLAY_TILE_MIN_WIDTH + 2 * i + 2 * l,
                    ),
                  }
                : {
                    height: Math.max(n.height, m.OVERLAY_TILE_WIDTH),
                    width: Math.min(
                      n.width,
                      2 * m.OVERLAY_TILE_MIN_WIDTH + 2 * i + 2 * l,
                    ),
                  }
              : n;
          },
        },
        [v.Odu.VOICE_V3]: {
          renderWidget(e) {
            let { widget: t, anchorLeft: n, locked: l } = e;
            return (0, i.jsx)(h.Z, {
              anchorLeft: n,
              id: t.id,
              locked: l,
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
                (0, i.jsx)(f.RT, { id: e.id, pinned: e.pinned }),
              ],
            }),
        },
        [v.Odu.GO_LIVE]: {
          renderWidget(e) {
            var t;
            let { widget: n, locked: l, size: o, dragStart: r } = e;
            return (0, u.ZL)(n)
              ? (0, i.jsx)(a.Z, {
                  id: n.id,
                  locked: l,
                  pinned: n.pinned,
                  opacity: n.opacity,
                  size: o,
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
            var o;
            return (0, u.ZL)(e)
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(f.ls, {
                      onClick: (o) =>
                        (function (e, t, o) {
                          if (!!(0, u.ZL)(t))
                            (0, l.jW)(e, async () => {
                              let { default: e } = await n
                                .e("34684")
                                .then(n.bind(n, 68738));
                              return (
                                o(!0),
                                (n) =>
                                  (0, i.jsx)(e, {
                                    ...n,
                                    widget: t,
                                    onClose: () => o(!1),
                                  })
                              );
                            });
                        })(o, e, t),
                    }),
                    (0, i.jsx)(f.GY, {
                      widgetId: e.id,
                      showAllStreams:
                        null === (o = e.meta.showAllStreams) ||
                        void 0 === o ||
                        o,
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
                borderWidth: l,
                padding: o,
                containerSpecs: r,
              } = e,
              a = 2 * l + 2 * o,
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
                (0, i.jsx)(f.RT, { id: e.id, pinned: e.pinned }),
              ],
            }),
        },
        [v.Odu.ACTIVITY]: {
          renderWidget: () => (0, i.jsx)(o.Z, {}),
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
      var l = n(120356),
        o = n.n(l),
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
          l = n ? u.intl.string(u.t.q2B3rq) : u.intl.string(u.t.JKGi6u),
          d = () => {
            (0, a.zG)(t, { showAllStreams: !n });
          };
        return (0, i.jsx)(s.Tooltip, {
          text: l,
          "aria-label": l,
          children: (e) =>
            (0, i.jsx)(s.Clickable, {
              ...e,
              className: o()(c.button, n && c.active),
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
          l = n ? u.intl.string(u.t.cSu80t) : u.intl.string(u.t.cM8Vnp);
        return (0, i.jsx)(s.Tooltip, {
          text: l,
          "aria-label": l,
          children: (e) =>
            (0, i.jsx)(s.Clickable, {
              ...e,
              className: o()(c.button, n && c.active),
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
          [C, Z] = l.useState(() => (0, u.H2)()),
          { textValue: _, richValue: S } = C,
          [I, N] = l.useState(!1),
          b = l.useCallback(() => N(!0), []),
          O = l.useCallback(() => N(!1), []),
          y = l.useCallback((e, t, n) => {
            Z({ textValue: t, richValue: n });
          }, []),
          j = l.useCallback(
            () =>
              _.length > g
                ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                : (o.Z.sendMessage(n.id, d.ZP.parse(n, _), !1),
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
          richValue: S,
          type: a.I.OVERLAY_INLINE_REPLY,
          onBlur: O,
          onFocus: b,
          focused: I,
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
          return S;
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
        let { keybind: t, message: n, messageWithoutKeybind: l } = e,
          o = (0, c.o)();
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
      let Z = l.memo(function (e) {
        let {
            maxBodyLines: t,
            expand: n = !1,
            onNotificationShow: o,
            onDismissClick: u,
            onConfirmClick: c,
            onCancelClick: h,
            onNotificationClick: f,
            hint: p,
            cancelText: E,
            confirmText: x,
            icon: Z,
            body: _,
            title: S,
            renderFooter: I,
            contentOpacity: N,
            status: b,
            containerRef: O,
          } = e,
          [y, j] = l.useState(!1),
          T = n || y || b === m._1z.FOCUSED;
        l.useEffect(() => {
          null == o || o();
        }, [o]);
        let k = l.useCallback(
            (e) => {
              e.stopPropagation(), null == u || u(e);
            },
            [u],
          ),
          w = l.useCallback(
            (e) => {
              e.stopPropagation(), null == c || c(e);
            },
            [c],
          ),
          A = l.useCallback(
            (e) => {
              e.stopPropagation(), null == h || h(e);
            },
            [h],
          ),
          L = l.useCallback(() => {
            j(!0);
          }, []),
          R = l.useCallback(() => {
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
                onMouseOver: L,
                onMouseLeave: R,
                onClick: f,
                className: r()(g.container, { [g.clickable]: null != f }),
                children: (function () {
                  let e = null == I ? void 0 : I(T);
                  return (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)(s.animated.div, {
                        className: g.iconAndDetails,
                        style: { opacity: N },
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
                                children: S,
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
                                            onClick: w,
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
                                            onClick: A,
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
      function S(e) {
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
              onNotificationShow: c,
              onDismissClick: d,
              onNotificationClick: h,
              onConfirmClick: m,
              onCancelClick: v,
              renderFooter: E,
            },
          } = t,
          x = l.useCallback(() => {
            c(a);
          }, [c, a]),
          C = l.useCallback(
            (e) => {
              u.Z.updateNotificationStatus(a), null == d || d(e, a);
            },
            [a, d],
          ),
          S = l.useCallback(
            (e) => {
              null == h || h(e, a);
            },
            [h, a],
          ),
          I = l.useCallback(
            (e) => {
              null == m || m(e, a);
            },
            [m, a],
          ),
          N = l.useCallback(
            (e) => {
              null == v || v(e, a);
            },
            [v, a],
          ),
          b = l.useCallback((e) => (null == E ? void 0 : E(e, a)), [E, a]),
          {
            props: {
              onNotificationShow: O,
              onDismissClick: y,
              renderFooter: j,
              onNotificationClick: T,
              onConfirmClick: k,
              onCancelClick: w,
              ...A
            },
            status: L,
          } = t,
          { ref: R, springs: M } = (0, p.X4)(t.id, r, s);
        return (0, i.jsx)(_, {
          transitionState: r,
          springs: M,
          index: n,
          locked: o,
          children: (0, i.jsx)(f.Z, {
            observe: 0 === n,
            className: g.clickZone,
            children: (0, i.jsx)(Z, {
              ...A,
              containerRef: R,
              notificationId: t.id,
              onNotificationShow: 0 === n ? x : void 0,
              onDismissClick: C,
              onNotificationClick: null != h ? S : void 0,
              onConfirmClick: null != m ? I : void 0,
              onCancelClick: null != v ? N : void 0,
              renderFooter: b,
              expand: !1,
              index: n,
              locked: o,
              status: L,
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
      function c(e, t, n) {
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
          c = i.useRef(r),
          d = i.useContext(s),
          h = i.useMemo(() => {
            let t = !1;
            return (n) => {
              null == n
                ? d.unsubscribe(e)
                : d.subscribe(e, n, (e) => {
                    var n, i, l, o;
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
                      scale: ((l = f), r ? Math.min(1 - l / 4, 1) : 1),
                      transform: a(f, r, h),
                      contentOpacity: ((o = f), r ? (o > 0 ? 0 : 1) : 1),
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
            if (t === l.TransitionStates.YEETED) {
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
        c = n(380736),
        d = n(693091),
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
          c.Z,
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
      let x = (e) => l.useState(() => new d.AS(e))[0];
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
          c = x(t);
        return (
          l.useLayoutEffect(() => c.updateState(n, t)),
          l.useLayoutEffect(
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
        l,
        o,
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
        S = n(292959),
        I = n(158776),
        N = n(885110),
        b = n(246946),
        O = n(594174),
        y = n(974180),
        j = n(237997),
        T = n(70956),
        k = n(150097),
        w = n(129724),
        A = n(388627),
        L = n(996050),
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
        ((s = l || (l = {}))[(s.NORMAL = 0)] = "NORMAL"),
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
        X = !1,
        Q = [];
      function J() {
        if (X && null == K.find((e) => e.status === W._1z.FOCUSED))
          for (let e of ((X = !1),
          (K = [...K, ...Q]),
          (Q = []),
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
          (e = { ...e, status: t }), K.unshift(e), (X = !0);
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
          l = !1,
          o = {
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
                  let l =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : t,
                    o = l ? W._1z.TIMED_OUT : W._1z.DISMISSED;
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
          r = X ? Q : [...K],
          s = r.findIndex((e) => e.priority <= n.priority);
        if ((-1 === s ? r.push(o) : r.splice(s, 0, o), r.length > 40)) {
          let e = r.pop();
          !X && e.timer.stop();
        }
        return !X && ((K = r), o.timer.start()), i;
      }
      function ei(e) {
        let { channelId: t, ringing: n } = e,
          i = et(t);
        if (!n.includes(C.default.getId())) return $(i);
        if (null != i) return !1;
        let l = Z.Z.getChannel(t);
        if (
          null == l ||
          !l.isPrivate() ||
          N.Z.getStatus() === W.Skl.DND ||
          x.QZ.getSetting()
        )
          return !1;
        let o = K.find(
          (e) =>
            1 === e.type && e.channelId === t && e.messageType === W.uaV.CALL,
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
          this.waitFor(Z.Z, O.default);
        }
        getNotifications() {
          return K;
        }
      }
      (c = "OverlayNotificationsStore"),
        (u = "displayName") in (a = el)
          ? Object.defineProperty(a, u, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[u] = c);
      let eo = new el(m.Z, {
        OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
          let { notificationId: t, status: n } = e;
          $(t, n);
        },
        OVERLAY_MOUNTED: function (e) {
          let { nudges: t } = e;
          q(0);
          let n = (0, V.Z)((0, A.pL)(), t);
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
          var t, n, i, l;
          let { channelId: o, message: r } = e,
            s = Z.Z.getChannel(o),
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
            if (!(0, k.eF)(r, o, !0, !0)) return !1;
            let e = (function (e, t, n) {
              var i;
              let l, o;
              if (
                (h()(null != t.activity, "received null message activity"),
                n.id === C.default.getId())
              )
                return !1;
              let r = (0, A.pL)(),
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
                    null == (l = I.Z.getApplicationActivity(n.id, s)) ||
                    null == l.party ||
                    l.party.id !== t.activity.party_id
                  )
                    return !1;
                  o = (0, L.Z)(e, t, n, r, l);
                  break;
                case W.mFx.JOIN_REQUEST:
                  if (
                    null == (l = N.Z.getApplicationActivity(s)) ||
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
                  duration: Y,
                }),
                !0)
              );
            })(s, r, a);
            if (!1 !== e) return e;
          }
          if (
            j.Z.getTextChatNotificationMode() === W.Ypu.DISABLED ||
            b.Z.disableNotifications ||
            !(0, k.eF)(r, o)
          )
            return !1;
          let u = !S.Z.isSoundDisabled(y.Ay),
            c =
              null !== (l = _.Z.getMessage(o, r.id)) && void 0 !== l
                ? l
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
            { actionType: n, user: i, applicationId: l } = e,
            o = (0, A.pL)();
          if (
            null == o ||
            (null == o ? void 0 : o.id) == null ||
            (o.id !== l && o.altId !== l)
          )
            return !1;
          if (n === W.mFx.JOIN) t = (0, R.Z)(i, o);
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
                duration: (0, w.A)(g.Z.getSettings().clipsLength / 1e3, !0),
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
      t.Z = eo;
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
        l = n(556296),
        o = n(237997),
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
      function d() {
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
      function u(e, t, n, u, c) {
        if (null == t.activity || null == u.id) return null;
        let d = t.activity.type,
          h = c.session_id;
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
          c = s.intl.string(s.t.WRj1Wl),
          { trackView: d, trackClick: h } = (0, l.R)(o.n0.ActivityUserJoin, {
            notif_type: o.n0.ActivityUserJoin,
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
      var l = n(481060),
        o = n(522474),
        r = n(556296),
        s = n(13140),
        a = n(44359),
        u = n(620954),
        c = n(987650),
        d = n(981631),
        h = n(388032);
      function f() {
        if (o.Z.getWindowOpen(d.KJ3.ACTIVITY_POPOUT)) return null;
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
        let { trackView: t, trackClick: n } = (0, u.R)(c.n0.ClipsNotification, {
          notif_type: c.n0.ClipsNotification,
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
        c = n(987650),
        d = n(981631),
        h = n(388032);
      function f(e) {
        let t = (0, r.F6)(e, a.default, s.Z),
          n = h.intl.string(h.t.ssrVzM),
          f = (0, o.x)(e),
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
              l.Z.updateNotificationStatus(n),
              l.Z.track(d.rMx.VOICE_CHANNEL_SELECTED, {
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
        let { icon: _, title: S, body: I } = (0, a.Xi)(e, t, n),
          { trackView: N, trackClick: b } = (0, v.R)(g.n0.TextChat, {
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
          title: S,
          body:
            t.content.length > 0
              ? (0, o.ZP)(t, {
                  noStyleAndInteraction: !0,
                  formatInline: !0,
                  hideSimpleEmbedContent: !1,
                }).content
              : I,
          hint: (e) =>
            e
              ? null
              : (0, m.Q)((0, v.P)(), x.t.ykjOAA, x.intl.string(x.t.jZkzVF)),
          maxBodyLines: 2,
          renderFooter: (t, n) =>
            t
              ? (0, i.jsx)(p.Z, { id: n, channel: e, onSend: () => b("send") })
              : null,
          onNotificationShow: () => {
            C && (0, c.GN)(s.Ay, s.yk), N();
          },
          onNotificationClick: () => {
            let n = (0, h.QF)();
            f.Z.isInputLocked(n)
              ? (b("unlock"), l.Z.setInputLocked(!1, n))
              : (b("jump"),
                (0, r.uL)(E.Z5c.CHANNEL(e.guild_id, e.id, t.id)),
                u.isPlatformEmbedded && d.ZP.focus());
          },
          onDismissClick: () => {
            b("dismiss");
          },
        };
      }
    },
    588909: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return S;
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
      function S(e, t) {
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
                    (0, o.h7)(t, !1, v.IlC.POPOUT);
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
        c = !1;
      class d extends (r = s.ZP.Store) {
        get keepOpen() {
          return c;
        }
        get enabled() {
          return u;
        }
      }
      (o = "SoundboardOverlayStore"),
        (l = "displayName") in (i = d)
          ? Object.defineProperty(i, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[l] = o),
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
          return y;
        },
      }),
        n(724458),
        n(653041),
        n(47120);
      var i = n(200651),
        l = n(192379),
        o = n(120356),
        r = n.n(o),
        s = n(442837),
        a = n(481060),
        u = n(410575),
        c = n(933557),
        d = n(471445),
        h = n(318374),
        f = n(46145),
        p = n(814443),
        m = n(592125),
        v = n(430824),
        g = n(496675),
        E = n(699516),
        x = n(594174),
        C = n(979651),
        Z = n(823379),
        _ = n(981631),
        S = n(388032),
        I = n(693215);
      function N(e) {
        let { channel: t, currentVoiceChannel: n } = e,
          l = (0, d.KS)(t),
          o = t.id === (null == n ? void 0 : n.id),
          s = o
            ? a.tokens.colors.TEXT_POSITIVE
            : a.tokens.colors.INTERACTIVE_NORMAL;
        return (0, i.jsxs)("div", {
          className: I.channelNameContainer,
          children: [
            null != l ? (0, i.jsx)(l, { color: s, size: "xs" }) : void 0,
            (0, i.jsx)(a.Text, {
              variant: "text-sm/semibold",
              className: r()(I.label, I.channelName),
              color: o ? "text-positive" : "text-normal",
              children: (0, c.F6)(t, x.default, E.Z),
            }),
          ],
        });
      }
      function b(e) {
        let { channel: t, currentVoiceChannel: n } = e,
          l = t.getGuildId(),
          o = (0, s.e7)([v.Z], () => v.Z.getGuild(l), [l]),
          r = t.id === (null == n ? void 0 : n.id);
        return null == o
          ? null
          : (0, i.jsx)("div", {
              className: I.channelMenuSubContainer,
              children: (0, i.jsx)(a.Text, {
                variant: "text-xs/normal",
                color: r ? "text-positive" : void 0,
                children: o.name,
              }),
            });
      }
      function O(e) {
        let { channel: t } = e,
          n = (0, s.Wu)(
            [C.Z, x.default, p.Z],
            () =>
              Object.values(C.Z.getVoiceStatesForChannel(t.id))
                .map((e) => x.default.getUser(e.userId))
                .filter(Z.lm)
                .sort((e, t) => {
                  var n, i, l, o;
                  return (
                    (null !==
                      (l =
                        null === (n = p.Z.getUserAffinity(t.id)) || void 0 === n
                          ? void 0
                          : n.affinity) && void 0 !== l
                      ? l
                      : 0) -
                    (null !==
                      (o =
                        null === (i = p.Z.getUserAffinity(e.id)) || void 0 === i
                          ? void 0
                          : i.affinity) && void 0 !== o
                      ? o
                      : 0)
                  );
                }),
            [t.id],
          ),
          l = t.getGuildId();
        return null == l
          ? null
          : (0, i.jsx)(h.Z, {
              users: n,
              guildId: l,
              maxUsers: 3,
              size: a.AvatarSizes.SIZE_20,
              overflowCountClassName: I.overflowCount,
              overflowCountVariant: "text-xxs/semibold",
              disableUserPopout: !0,
            });
      }
      function y(e) {
        let { currentVoiceChannel: t, onClose: n, onSelect: o } = e,
          r = (0, s.Wu)([E.Z, p.Z], () =>
            E.Z.getFriendIDs().sort((e, t) => {
              var n, i, l, o;
              return null == e && null == t
                ? 0
                : null == e
                  ? 1
                  : null == t
                    ? -1
                    : (null !==
                        (l =
                          null === (n = p.Z.getUserAffinity(t)) || void 0 === n
                            ? void 0
                            : n.affinity) && void 0 !== l
                        ? l
                        : 0) -
                      (null !==
                        (o =
                          null === (i = p.Z.getUserAffinity(e)) || void 0 === i
                            ? void 0
                            : i.affinity) && void 0 !== o
                        ? o
                        : 0);
            }),
          ),
          c = (0, s.Wu)(
            [x.default],
            () =>
              r.reduce((e, t) => {
                let n = x.default.getUser(t);
                return null != n && e.push(n), e;
              }, []),
            [r],
          ),
          d = (0, s.Wu)(
            [f.Z, C.Z, m.Z, g.Z],
            () => {
              let e = new Set(
                  f.Z.getChannelHistory().reduce((e, t) => {
                    let n = m.Z.getChannel(t);
                    return (
                      null != n &&
                        g.Z.can(_.Plq.CONNECT, n) &&
                        e.length < 5 &&
                        e.push(t),
                      e
                    );
                  }, []),
                ),
                t = c
                  .map((e) => C.Z.getDiscoverableVoiceStateForUser(e.id))
                  .reduce((t, n) => {
                    let i = null == n ? void 0 : n.channelId;
                    if (null == i) return t;
                    let l = m.Z.getChannel(i);
                    return (
                      null != l &&
                        g.Z.can(_.Plq.CONNECT, l) &&
                        !e.has(i) &&
                        t.size < 3 &&
                        t.add(i),
                      t
                    );
                  }, new Set());
              return [...Array.from(e), ...t]
                .map((e) => m.Z.getChannel(e))
                .filter(Z.lm);
            },
            [c],
          ),
          h = l.useCallback(
            (e) => {
              o(e), n();
            },
            [o, n],
          );
        return (0, i.jsx)(u.Z, {
          section: _.jXE.CONTEXT_MENU,
          children: (0, i.jsx)(a.Menu, {
            onSelect: n,
            navId: "manage-streams",
            onClose: n,
            "aria-label": S.intl.string(S.t["+9QSnp"]),
            children: (0, i.jsx)(a.MenuGroup, {
              children: d.map((e) =>
                (0, i.jsx)(
                  a.MenuItem,
                  {
                    id: e.id,
                    label: (0, i.jsx)(N, {
                      channel: e,
                      currentVoiceChannel: t,
                    }),
                    subtext: (0, i.jsx)(b, {
                      channel: e,
                      currentVoiceChannel: t,
                    }),
                    icon: (0, i.jsx)("div", {
                      className: I.icon,
                      children: (0, i.jsx)(O, {
                        channel: e,
                        currentVoiceChannel: t,
                      }),
                    }),
                    subtextLineClamp: 1,
                    action: () => h(e),
                  },
                  e.id,
                ),
              ),
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
        guildName: "guildName_a467e9",
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
      e.exports = {
        label: "label_eaa344",
        channelNameContainer: "channelNameContainer_eaa344",
        channelName: "channelName_eaa344",
        channelMenuSubContainer: "channelMenuSubContainer_eaa344",
        icon: "icon_eaa344",
        overflowCount: "overflowCount_eaa344",
      };
    },
  },
]);
//# sourceMappingURL=c06a2b37d2504061e272.js.map
