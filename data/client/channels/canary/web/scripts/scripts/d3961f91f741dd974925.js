"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["19578"],
  {
    567409: function (e, t, i) {
      i.d(t, {
        Ns: function () {
          return E;
        },
      }),
        i(47120);
      var n = i(192379),
        l = i(392711),
        o = i.n(l),
        s = i(876215),
        r = i(442837),
        a = i(146282),
        u = i(26033),
        d = i(897674),
        c = i(709054),
        h = i(206583);
      let f = new Set([s.s.PLAYED_GAME, s.s.LAUNCHED_ACTIVITY]),
        p = (e) => f.has(e.content_type);
      function E(e) {
        let { entries: t } = (function () {
          let e = (0, d.Z)(h.YN.GAME_PROFILE_FEED),
            t = (0, d.Z)(h.YN.GLOBAL_FEED),
            i = n.useMemo(
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
            requestId: (0, r.e7)([a.Z], () =>
              a.Z.getFeedRequestId(h.YN.GAME_PROFILE_FEED),
            ),
            entries: i,
          };
        })();
        return n.useMemo(
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
    552282: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return n;
        },
      });
      function n(e) {
        var t;
        return null != e
          ? { id: e.id, name: null !== (t = e.name) && void 0 !== t ? t : "" }
          : null;
      }
    },
    86071: function (e, t, i) {
      let n = (0, i(818083).B)({
        kind: "user",
        id: "2024-10_hotwheels_overlay_invites",
        label: "Overlay Invites Notification",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      t.Z = n;
    },
    681603: function (e, t, i) {
      var n = i(192379),
        l = i(149765),
        o = i(442837),
        s = i(367907),
        r = i(731429),
        a = i(188471),
        u = i(318885),
        d = i(592125),
        c = i(984933),
        h = i(271383),
        f = i(430824),
        p = i(496675),
        E = i(944486),
        m = i(914010),
        v = i(594174),
        g = i(237997),
        S = i(145597),
        _ = i(981631);
      class Z extends n.Component {
        componentDidUpdate(e) {
          if (this.props.locked) return null;
          let {
            selectedGuild: t,
            selectedChannel: i,
            isMemberPending: n,
            hasPreviewEnabled: l,
            postableChannelCount: o,
          } = this.props;
          if (
            (null != t &&
              (t !== e.selectedGuild || (n && !e.isMemberPending)) &&
              ((0, u.Q)(_.rMx.GUILD_VIEWED, {
                ...(n ? { is_pending: n, preview_enabled: l } : {}),
                postable_channels: o,
              }),
              (0, a.a)(_.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: t })),
            null != i && i !== e.selectedChannel)
          ) {
            let e = (0, r.K)(d.Z.getChannel(i), !0);
            (0, u.Q)(_.rMx.CHANNEL_OPENED, { ...e, ...(0, s.$H)(i) }),
              (0, a.a)(_.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: i });
          }
        }
        render() {
          return null;
        }
      }
      t.Z = o.ZP.connectStores(
        [m.Z, E.Z, f.Z, v.default, g.Z, c.ZP, p.Z, h.ZP],
        () => {
          var e, t, i;
          let n = m.Z.getGuildId(),
            o = E.Z.getChannelId(n),
            s = f.Z.getGuild(n),
            r = v.default.getCurrentUser(),
            a =
              null !==
                (t = c.ZP.getChannels(null == s ? void 0 : s.id)[c.sH]) &&
              void 0 !== t
                ? t
                : [],
            u =
              a.length > 0
                ? a.filter((e) => {
                    let { channel: t } = e;
                    return p.Z.can(
                      l.$e(_.Plq.SEND_MESSAGES, _.Plq.VIEW_CHANNEL),
                      t,
                    );
                  }).length
                : 0,
            d =
              null != r &&
              null != n &&
              null !==
                (i =
                  null === (e = h.ZP.getMember(n, r.id)) || void 0 === e
                    ? void 0
                    : e.isPending) &&
              void 0 !== i &&
              i;
          return {
            selectedGuild: n,
            selectedChannel: o,
            locked: g.Z.isLocked((0, S.QF)()),
            hasPreviewEnabled:
              null == s ? void 0 : s.features.has(_.oNc.PREVIEW_ENABLED),
            isMemberPending: d,
            postableChannelCount: u,
          };
        },
      )(Z);
    },
    906037: function (e, t, i) {
      i.d(t, {
        CR: function () {
          return s;
        },
        eM: function () {
          return o;
        },
        m3: function () {
          return r;
        },
      });
      var n = i(570140),
        l = i(449224);
      function o(e) {
        return (!e.isPreviewingInGame && !e.locked) || e.pinned;
      }
      function s(e, t, i) {
        (e.locked !== t.locked ||
          e.pinned !== t.pinned ||
          i(e) !== i(t) ||
          o(e) !== o(t)) &&
          r(t, i(t));
      }
      function r(e, t) {
        var i, s;
        let r = o(e),
          a = l.Z.getGame();
        n.Z.dispatch({
          type: "OVERLAY_WIDGET_CHANGED",
          gameName:
            null !== (i = null == a ? void 0 : a.name) && void 0 !== i
              ? i
              : null,
          gameId:
            null !== (s = null == a ? void 0 : a.id) && void 0 !== s ? s : null,
          widgetType: e.widget,
          visible: r && t,
          locked: e.locked,
          pinned: e.pinned,
        });
      }
    },
    603618: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return P;
        },
        i: function () {
          return j;
        },
      }),
        i(47120),
        i(789020);
      var n = i(200651),
        l = i(192379),
        o = i(512722),
        s = i.n(o),
        r = i(442837),
        a = i(481060),
        u = i(278323),
        d = i(24124),
        c = i(493683),
        h = i(13245),
        f = i(99690),
        p = i(620662),
        E = i(835473),
        m = i(194082),
        v = i(297781),
        g = i(656709),
        S = i(567409),
        _ = i(703656),
        Z = i(409057),
        C = i(199902),
        O = i(592125),
        I = i(293273),
        N = i(158776),
        y = i(594174),
        x = i(630388),
        b = i(5192),
        T = i(358085),
        R = i(998502),
        k = i(388627),
        z = i(981631),
        A = i(388032),
        M = i(56377);
      function L(e) {
        let { entry: t, currentUserActivity: i, idx: o } = e,
          d = (0, r.e7)([y.default], () => y.default.getUser(t.author_id)),
          [f, E] = l.useState("unsent"),
          [m, v] = l.useState(!1);
        l.useEffect(() => {
          if ("sent" === f) {
            let e = setTimeout(() => v(!0), 2e3);
            return () => clearTimeout(e);
          }
        }, [f]);
        let S = null != i && (0, p.Z)(i, z.xjy.JOIN),
          Z = async (e) => {
            if (null != d && "unsent" === f) {
              e.stopPropagation();
              try {
                if ((E("sending"), S))
                  await u.Z.sendActivityInviteUser({
                    type: z.mFx.JOIN,
                    userId: d.id,
                    activity: i,
                    location: z.Sbl.UNLOCKED_OVERLAY,
                  });
                else {
                  var n;
                  let e = await c.Z.getOrEnsurePrivateChannel(d.id),
                    i =
                      null !== (n = O.Z.getChannel(e)) && void 0 !== n
                        ? n
                        : null;
                  s()(null != i, "Send channel must be defined"),
                    (0, _.uL)(z.Z5c.CHANNEL(i.guild_id, i.id)),
                    await (0, g.p)({
                      channel: i,
                      content: A.intl.string(A.t.DwAcMz),
                      entry: t,
                      whenReady: !0,
                    });
                }
                h.Z.track(z.rMx.OVERLAY_GAME_INVITE_SENT, {
                  target_user_id: d.id,
                  target_content_entry_id: t.id,
                  target_index: o,
                }),
                  E("sent");
              } catch (e) {
                E("unsent");
              }
            }
          },
          C = async () => {
            var e;
            if (null == d) return;
            let t = await c.Z.getOrEnsurePrivateChannel(d.id),
              i = null !== (e = O.Z.getChannel(t)) && void 0 !== e ? e : null;
            s()(null != i, "Send channel must be defined"),
              (0, _.uL)(z.Z5c.CHANNEL(i.guild_id, i.id)),
              T.isPlatformEmbedded && R.ZP.focus();
          },
          I = S ? A.intl.string(A.t["3fRyS0"]) : A.intl.string(A.t.y9eo7e),
          N = S
            ? (0, n.jsx)(a.GroupPlusIcon, { color: "currentColor", size: "sm" })
            : (0, n.jsx)(a.SendMessageIcon, {
                color: "currentColor",
                size: "sm",
              });
        return (0, n.jsx)(a.Tooltip, {
          text: I,
          "aria-label": I,
          children: (e) =>
            (0, n.jsx)(a.Button, {
              ...e,
              submitting: "sending" === f,
              onClick: m ? C : Z,
              className: M.inviteButton,
              wrapperClassName: M.inviteButtonWrapper,
              innerClassName: M.inviteButtonInner,
              color: a.ButtonColors.TRANSPARENT,
              look: a.ButtonLooks.FILLED,
              size: a.ButtonSizes.ICON,
              grow: !1,
              children:
                "sent" === f
                  ? m
                    ? (0, n.jsx)(a.ChatIcon, {
                        color: "currentColor",
                        size: "sm",
                      })
                    : (0, n.jsx)(a.CheckmarkSmallBoldIcon, {
                        color: "currentColor",
                        size: "sm",
                      })
                  : N,
            }),
        });
      }
      function w(e) {
        var t;
        let { entry: i, currentUserActivity: o } = e,
          s = (0, r.e7)([y.default], () => y.default.getUser(i.author_id)),
          d =
            null !== (t = null == o ? void 0 : o.application_id) && void 0 !== t
              ? t
              : i.extra.application_id,
          c = (0, r.e7)(
            [N.Z],
            () => (null != s ? N.Z.getApplicationActivity(s.id, d) : null),
            [d, s],
          ),
          [h, f] = l.useState("unsent");
        if (!(null != c && (0, p.Z)(c, z.xjy.JOIN))) return null;
        let E = async (e) => {
            if (null != s && "unsent" === h) {
              e.stopPropagation();
              try {
                f("sending"),
                  await u.Z.sendActivityInviteUser({
                    type: z.mFx.JOIN_REQUEST,
                    userId: s.id,
                    activity: c,
                    location: z.Sbl.UNLOCKED_OVERLAY,
                  }),
                  f("sent");
              } catch (e) {
                f("unsent");
              }
            }
          },
          m = A.intl.string(A.t.OKsSCQ);
        return (0, n.jsx)(a.Tooltip, {
          text: m,
          "aria-label": m,
          children: (e) =>
            (0, n.jsx)(a.Button, {
              ...e,
              submitting: "sending" === h,
              onClick: E,
              className: M.inviteButton,
              wrapperClassName: M.inviteButtonWrapper,
              innerClassName: M.inviteButtonInner,
              color: a.ButtonColors.TRANSPARENT,
              look: a.ButtonLooks.FILLED,
              size: a.ButtonSizes.ICON,
              grow: !1,
              children:
                "sent" === h
                  ? (0, n.jsx)(a.CheckmarkSmallBoldIcon, {
                      color: "currentColor",
                      size: "sm",
                    })
                  : (0, n.jsx)(a.HandRequestSpeakIcon, {
                      color: "currentColor",
                      size: "sm",
                    }),
            }),
        });
      }
      function D(e) {
        let { entry: t, currentUserActivity: i, idx: l } = e,
          o = (0, r.e7)([y.default], () => y.default.getUser(t.author_id)),
          s = (0, r.e7)(
            [C.Z],
            () => (null != o ? C.Z.getAnyStreamForUser(o.id) : null),
            [o],
          ),
          { isMobileOnline: u, status: d } = (0, r.cj)(
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
          : (0, n.jsxs)("div", {
              className: M.row,
              children: [
                (0, n.jsx)(f.Z, {
                  className: M.avatar,
                  user: o,
                  isMobile: u,
                  status: d,
                }),
                (0, n.jsxs)("div", {
                  className: M.details,
                  children: [
                    (0, n.jsxs)("div", {
                      className: M.usernameWrapper,
                      children: [
                        (0, n.jsx)(a.Text, {
                          className: M.username,
                          variant: "text-md/medium",
                          color: "header-primary",
                          children: b.ZP.getName(void 0, void 0, o),
                        }),
                        null != s &&
                          (0, n.jsx)(m.ZP, { className: M.liveIndicator }),
                      ],
                    }),
                    (0, n.jsx)(v.Gk, {
                      location: v.Gt.OVERLAY,
                      className: M.badgesContainer,
                      children: [v.OV, v.wO, v.f, v.v1, v.pQ].map((e, i) =>
                        (0, n.jsx)(e, { entry: t }, "entry-".concat(i)),
                      ),
                    }),
                  ],
                }),
                (0, n.jsx)(w, { entry: t, currentUserActivity: i, idx: l }),
                (0, n.jsx)(L, { entry: t, currentUserActivity: i, idx: l }),
              ],
            });
      }
      function j(e) {
        let { entries: t, currentUserActivity: i } = e,
          l = t.slice(0, 5);
        return (0, n.jsx)(n.Fragment, {
          children: l.map((e, t) =>
            (0, n.jsx)(D, { idx: t, entry: e, currentUserActivity: i }, t),
          ),
        });
      }
      function P() {
        let e = (0, k.II)(),
          t = null == e ? void 0 : e.id,
          i = null == e ? void 0 : e.altId,
          l = (0, S.Ns)(t),
          o = (0, r.e7)([y.default], () => y.default.getCurrentUser()),
          s = (0, r.e7)([I.Z], () =>
            null != i
              ? I.Z.getApplicationActivity(i)
              : null != t
                ? I.Z.getApplicationActivity(t)
                : null,
          ),
          u = null != s && (0, p.Z)(s, z.xjy.JOIN),
          c = (0, E.q)(null == s ? void 0 : s.application_id),
          h = null != c && (0, x.yE)(c.flags, z.udG.EMBEDDED);
        return 0 === l.length && null == s
          ? null
          : (0, n.jsxs)("div", {
              className: M.container,
              children: [
                null != s && null != o
                  ? (0, n.jsx)(Z.Z, {
                      className: M.activityCard,
                      activity: s,
                      user: o,
                      currentUser: o,
                    })
                  : null,
                u && !h
                  ? (0, n.jsx)(a.Button, {
                      className: M.inviteFriendsButton,
                      onClick: () => (0, d.h7)(s, !1, z.IlC.POPOUT),
                      size: a.ButtonSizes.SMALL,
                      color: a.ButtonColors.PRIMARY,
                      children: A.intl.string(A.t["6Qgren"]),
                    })
                  : null,
                (0, n.jsx)(j, { entries: l, currentUserActivity: s }),
              ],
            });
      }
    },
    691891: function (e, t, i) {
      var n = i(200651);
      i(192379);
      var l = i(120356),
        o = i.n(l),
        s = i(481060),
        r = i(774518);
      let a = (e) => {
        let { className: t, onDismiss: i, "aria-label": l } = e;
        return (0, n.jsx)(s.Button, {
          look: s.Button.Looks.BLANK,
          size: s.Button.Sizes.NONE,
          onClick: i,
          className: o()(r.dismissButton, t),
          "aria-label": l,
          children: (0, n.jsx)(s.XSmallIcon, {
            size: "xs",
            color: "currentColor",
            colorClass: r.dismissIcon,
          }),
        });
      };
      (a.displayName = "DismissButton"), (t.Z = a);
    },
    353038: function (e, t, i) {
      i.d(t, {
        B: function () {
          return n;
        },
        Z: function () {
          return N;
        },
      }),
        i(47120),
        i(411104);
      var n,
        l,
        o,
        s = i(200651),
        r = i(192379),
        a = i(120356),
        u = i.n(a),
        d = i(476183),
        c = i(902704),
        h = i(585483),
        f = i(434529),
        p = i(981631),
        E = i(971769);
      function m(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      let v = (e, t, i, n) => Math.pow(e - i, 2) + Math.pow(t - n, 2);
      ((o = n || (n = {})).MOVE = "MOVE"),
        (o.RESIZE_NORTH = "RESIZE_NORTH"),
        (o.RESIZE_WEST = "RESIZE_WEST"),
        (o.RESIZE_EAST = "RESIZE_EAST"),
        (o.RESIZE_SOUTH = "RESIZE_SOUTH"),
        (o.RESIZE_NORTH_WEST = "RESIZE_NORTH_WEST"),
        (o.RESIZE_NORTH_EAST = "RESIZE_NORTH_EAST"),
        (o.RESIZE_SOUTH_WEST = "RESIZE_SOUTH_WEST"),
        (o.RESIZE_SOUTH_EAST = "RESIZE_SOUTH_EAST");
      let g = new Set([
        "RESIZE_NORTH",
        "RESIZE_WEST",
        "RESIZE_EAST",
        "RESIZE_SOUTH",
        "RESIZE_NORTH_WEST",
        "RESIZE_NORTH_EAST",
        "RESIZE_SOUTH_WEST",
        "RESIZE_SOUTH_EAST",
      ]);
      function S(e, t, i) {
        let { width: n, height: l } = e;
        return {
          width: "auto" === n ? "auto" : Math.max(t, n),
          height: "auto" === l ? "auto" : Math.max(i, l),
        };
      }
      function _(e) {
        let { top: t, left: i, bottom: n, right: l } = e;
        return (
          null == i && null == l && (i = 0),
          null != i && null != l && (l = void 0),
          null == t && null == n && (t = 0),
          null != t && null != n && (n = void 0),
          { top: t, left: i, bottom: n, right: l }
        );
      }
      function Z(e) {
        return "auto" === e || null == e ? "auto" : "".concat(e, "px");
      }
      function C(e, t) {
        let i = 0,
          n = 0;
        return (
          (i = "auto" === t.width ? (null != e ? e.clientWidth : 0) : t.width),
          {
            width: i,
            height: (n =
              "auto" === t.height
                ? null != e
                  ? e.clientHeight
                  : 0
                : t.height),
          }
        );
      }
      function O(e, t) {
        let { top: i, left: n, bottom: l, right: o } = t;
        switch (e) {
          case "RESIZE_EAST":
          case "RESIZE_NORTH_EAST":
          case "RESIZE_NORTH":
            return { bottom: l, left: n, right: void 0, top: void 0 };
          case "RESIZE_WEST":
          case "RESIZE_NORTH_WEST":
            return { bottom: l, right: o, left: void 0, top: void 0 };
          case "RESIZE_SOUTH_EAST":
            return { top: i, left: n, bottom: void 0, right: void 0 };
          case "RESIZE_SOUTH":
          case "RESIZE_SOUTH_WEST":
            return { top: i, right: o, bottom: void 0, left: void 0 };
          default:
            throw Error("getOrientedCoords: Invalid orientation: ".concat(e));
        }
      }
      function I(e) {
        let { computedSize: t } = e;
        return t;
      }
      class N extends (l = r.Component) {
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
          this.setDOMPositions(_(this.props.anchor)),
            this.setDOMSize(
              S(
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
              this.setDOMPositions(_(this.props.anchor)),
            !(0, c.Z)(this.props.size, e.size) &&
              this.setDOMSize(
                S(
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
          let { clientX: i, clientY: n } = e;
          e.stopPropagation(), this.handleOperationStart(t, i, n);
        }
        handleDragMove(e, t) {
          let {
            ref: { current: i },
            props: {
              id: n,
              container: { maxX: l, maxY: o, minX: s, minY: r },
              onDragStart: a,
              onDrag: u,
              snapOrientation: d = !0,
            },
            dragState: { offsetX: c, offsetY: h },
            state: { operationStarted: p },
          } = this;
          if (null == i) return null;
          (e = Math.max(Math.min(l, e), s)), (t = Math.max(Math.min(o, t), r));
          let { width: E, height: m } = C(i, this.size),
            v = t - h,
            g = e - c,
            S = (0, f.ou)(
              (0, f.PY)(
                { top: v, left: g, bottom: void 0, right: void 0 },
                l,
                o,
                E,
                m,
              ),
            ),
            _ = d ? (0, f.R)(S) : O("RESIZE_SOUTH_EAST", S);
          this.setDOMPositions(_),
            this.setState(
              {
                operationStarted: !0,
                anchorTopOverride: null != _.top,
                anchorLeftOverride: null != _.left,
              },
              () => {
                !p && null != a && a(),
                  null != u && u(n, "MOVE", this.anchor, this.size);
              },
            );
        }
        handleResizeMove(e, t) {
          let {
              props: {
                id: i,
                minSize: n,
                container: { maxX: l, maxY: o, minX: s, minY: r },
                onDragStart: a,
                onDrag: u,
                resizeValidation: d = I,
              },
              state: { operation: h, operationStarted: p },
            } = this,
            { startX: E, startY: m } = this.dragState,
            v = 0,
            g = 0;
          if (null == h) return;
          switch (
            ((e = Math.max(Math.min(l, e), s)),
            (t = Math.max(Math.min(o, t), r)),
            h)
          ) {
            case "RESIZE_EAST":
            case "RESIZE_SOUTH_EAST":
            case "RESIZE_NORTH_EAST":
              v -= E - e;
              break;
            case "RESIZE_WEST":
            case "RESIZE_SOUTH_WEST":
            case "RESIZE_NORTH_WEST":
              v += E - e;
          }
          switch (h) {
            case "RESIZE_SOUTH":
            case "RESIZE_SOUTH_WEST":
            case "RESIZE_SOUTH_EAST":
              g -= m - t;
              break;
            case "RESIZE_NORTH":
            case "RESIZE_NORTH_WEST":
            case "RESIZE_NORTH_EAST":
              g += m - t;
          }
          let S = d({
              padding: 8,
              borderWidth: 2,
              operation: h,
              computedSize: {
                width: Math.max(this.dragState.offsetWidth + v, n.width),
                height: Math.max(this.dragState.offsetHeight + g, n.height),
              },
              originSize: {
                width: this.dragState.offsetWidth,
                height: this.dragState.offsetHeight,
              },
              containerSpecs: this.props.container,
              orientedPosition: this.dragState.dragOrientedCoords,
            }),
            _ = (0, f.BL)(
              (0, f.ou)(
                (0, f.PY)(
                  this.dragState.dragOrientedCoords,
                  l,
                  o,
                  S.width,
                  S.height,
                ),
              ),
              this.dragState.dragOrientedCoords,
            );
          this.setDOMSize(S, !0),
            !(0, c.Z)(_, this.dragState.dragOrientedCoords) &&
              ((this.dragState.dragOrientedCoords = _),
              this.setDOMPositions(this.dragState.dragOrientedCoords)),
            !p && (null != a && a(), this.setState({ operationStarted: !0 })),
            null != u && u(i, h, this.anchor, this.size);
        }
        setDOMPositions(e) {
          let { top: t, left: i, bottom: n, right: l } = e,
            { current: o } = this.ref;
          if (
            ((this.anchor = { top: t, left: i, bottom: n, right: l }),
            null != o)
          )
            (o.style.top = Z(t)),
              (o.style.bottom = Z(n)),
              (o.style.left = Z(i)),
              (o.style.right = Z(l));
        }
        setDOMSize(e) {
          let { width: t, height: i } = e,
            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { current: l } = this.ref;
          if (
            ((t = "auto" !== this.size.width || n ? t : "auto"),
            (i = "auto" !== this.size.height || n ? i : "auto"),
            (this.size = { width: t, height: i }),
            null != l)
          )
            (l.style.width = Z(t)), (l.style.height = Z(i));
        }
        renderResizeHandles() {
          let { resizeY: e, resizeX: t, active: i } = this.props;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              e
                ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)("div", {
                        className: u()(E.resizeNorth, {
                          [E.resizeNSCursor]: i,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_NORTH"),
                      }),
                      (0, s.jsx)("div", {
                        className: u()(E.resizeSouth, {
                          [E.resizeNSCursor]: i,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_SOUTH"),
                      }),
                    ],
                  })
                : null,
              t
                ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)("div", {
                        className: u()(E.resizeEast, { [E.resizeEWCursor]: i }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_EAST"),
                      }),
                      (0, s.jsx)("div", {
                        className: u()(E.resizeWest, { [E.resizeEWCursor]: i }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_WEST"),
                      }),
                    ],
                  })
                : null,
              t && e
                ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)("div", {
                        className: u()(E.resizeNorthWest, {
                          [E.resizeNWSECursor]: i,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_NORTH_WEST"),
                      }),
                      (0, s.jsx)("div", {
                        className: u()(E.resizeNorthEast, {
                          [E.resizeNESWCursor]: i,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_NORTH_EAST"),
                      }),
                      (0, s.jsx)("div", {
                        className: u()(E.resizeSouthWest, {
                          [E.resizeNESWCursor]: i,
                        }),
                        onMouseDown: (e) =>
                          this.handleResizeMouseDown(e, "RESIZE_SOUTH_WEST"),
                      }),
                      (0, s.jsx)("div", {
                        className: u()(E.resizeSouthEast, {
                          [E.resizeNWSECursor]: i,
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
              setLockExtras: i,
            } = this,
            n = null == e ? void 0 : e(i);
          return null != n
            ? (0, s.jsx)("div", {
                className: u()({
                  [E.extras]: !0,
                  [E.extrasBottomOriented]: null != t.bottom,
                  [E.extrasRightOriented]: null != t.right,
                }),
                children: n,
              })
            : null;
        }
        getInlineStyles() {
          let {
            props: {
              hidden: e,
              style: t,
              minSize: i,
              padding: n = 8,
              borderWidth: l = 2,
              borderRadius: o = 12,
            },
            state: { operation: s },
          } = this;
          return {
            ...t,
            minWidth: i.width,
            minHeight: i.height,
            borderWidth: l,
            padding: n,
            borderRadius: o + l + n,
            zIndex: null != s ? 1e3 : void 0,
            visibility: e ? "hidden" : void 0,
          };
        }
        renderChildren() {
          let {
            props: {
              children: e,
              hidden: t,
              padding: i = 8,
              borderWidth: n = 2,
              locked: l,
            },
            size: o,
            anchor: s,
            setLockExtras: r,
            state: { anchorTopOverride: a, anchorLeftOverride: u },
          } = this;
          return e({
            dragStart: this.handleOperationStart,
            dragOperation: this.state.operation,
            anchorTop: null != a ? a : null != s.top,
            anchorLeft: null != u ? u : null != s.left,
            size: o,
            padding: i,
            borderWidth: n,
            setLockExtras: r,
            locked: l,
            hidden: t,
          });
        }
        render() {
          let {
            props: { onClick: e, id: t, locked: i, className: n },
            state: { operationStarted: l, lockExtras: o },
          } = this;
          return (0, s.jsxs)(d.animated.div, {
            ref: this.ref,
            style: this.getInlineStyles(),
            className: u()(
              {
                [E.wrapper]: !0,
                [E.operation]: l,
                [E.unlocked]: !i,
                [E.lockExtras]: o,
              },
              n,
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
            m(this, "anchor", void 0),
            m(this, "size", void 0),
            m(this, "ref", r.createRef()),
            m(this, "dragState", {
              startX: 0,
              startY: 0,
              offsetX: 0,
              offsetY: 0,
              offsetWidth: 0,
              offsetHeight: 0,
              dragOrientedCoords: { top: 0, left: 0 },
            }),
            m(this, "state", {
              lockExtras: !0,
              operation: null,
              operationStarted: !1,
              anchorTopOverride: void 0,
              anchorLeftOverride: void 0,
            }),
            m(this, "handleShowUI", (e) => {
              let { show: t } = e;
              this.setLockExtras(t);
            }),
            m(this, "handleMouseDown", (e) => {
              e.stopPropagation();
              let { dragAnywhere: t } = this.props,
                { current: i } = this.ref;
              null != i &&
                e.button === p.AeJ.PRIMARY &&
                t &&
                this.handleOperationStart("MOVE", e.clientX, e.clientY);
            }),
            m(this, "handleMouseMove", (e) => {
              e.preventDefault(), e.stopPropagation();
              let { clientX: t, clientY: i } = e,
                {
                  dragState: { startX: n, startY: l },
                  state: { operation: o, operationStarted: s },
                } = this;
              if (!(null == o || (!s && 3 > v(n, l, t, i))))
                "MOVE" === o
                  ? this.handleDragMove(t, i)
                  : g.has(o) && this.handleResizeMove(t, i);
            }),
            m(this, "handleOperationStart", (e, t, i) => {
              let {
                ref: { current: n },
                props: {
                  targetWindow: l,
                  active: o,
                  container: { maxX: s, maxY: r },
                },
              } = this;
              if (null == n || !o) return;
              let { width: a, height: u } = C(n, this.size),
                d = (0, f.PY)(this.anchor, s, r, a, u);
              if ("MOVE" === e) {
                let { x: e, y: n } = (function (e) {
                  let { top: t, left: i } = e;
                  return { x: i, y: t };
                })(d);
                this.dragState = {
                  ...this.dragState,
                  startX: t,
                  startY: i,
                  offsetX: t - e,
                  offsetY: i - n,
                };
              } else {
                let n = O(e, d);
                this.setDOMPositions(n),
                  (this.dragState = {
                    ...this.dragState,
                    startX: t,
                    startY: i,
                    offsetWidth: a,
                    offsetHeight: u,
                    dragOrientedCoords: n,
                  });
              }
              this.setState({ operation: e, operationStarted: !1 }, () => {
                l.addEventListener("mousemove", this.handleMouseMove),
                  l.addEventListener("mouseup", this.handleOperationEnd);
              });
            }),
            m(this, "handleOperationEnd", () => {
              let { operation: e, operationStarted: t } = this.state,
                { targetWindow: i, onDragEnd: n } = this.props;
              i.removeEventListener("mousemove", this.handleMouseMove),
                i.removeEventListener("mouseup", this.handleOperationEnd);
              let l = t
                ? () => {
                    let { onUpdate: t, id: i } = this.props;
                    t(
                      e,
                      i,
                      this.anchor,
                      this.size,
                      C(this.ref.current, this.size),
                    );
                  }
                : void 0;
              if (t) {
                let { maxX: e, maxY: t } = this.props.container,
                  { width: i, height: l } = C(this.ref.current, this.size),
                  o = (0, f.PY)(this.anchor, e, t, i, l),
                  s = (0, f.R)(o);
                this.setDOMPositions(s),
                  this.setDOMSize({ width: i, height: l }),
                  null != n && n();
              }
              this.setState({ operation: null, operationStarted: !1 }, l);
            }),
            m(this, "setLockExtras", (e) => {
              this.setState({ lockExtras: e });
            }),
            (this.anchor = _(e.anchor)),
            (this.size = S(e.size, e.minSize.width, e.minSize.height));
        }
      }
      m(N, "Operations", n);
    },
    915614: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return u;
        },
      });
      var n = i(200651);
      i(192379);
      var l = i(120356),
        o = i.n(l),
        s = i(481060),
        r = i(809357),
        a = i(404099);
      function u(e) {
        let { onClick: t, keybind: i, className: l, IconComponent: u } = e,
          d = (0, r.o)();
        return (0, n.jsxs)("div", {
          className: o()(a.buttonContainer, l),
          children: [
            (0, n.jsx)(s.Clickable, {
              className: a.button,
              onClick: t,
              "aria-hidden": !0,
              children: (0, n.jsx)(u, {
                size: "md",
                color: "currentColor",
                "aria-hidden": !0,
              }),
            }),
            null != i && d
              ? (0, n.jsx)(s.Text, {
                  className: o()(a.keybind),
                  "aria-hidden": !0,
                  variant: "text-xxs/bold",
                  color: "interactive-normal",
                  children: i,
                })
              : null,
          ],
        });
      }
    },
    44359: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return r;
        },
      });
      var n = i(200651);
      i(192379);
      var l = i(120356),
        o = i.n(l),
        s = i(827650);
      function r(e) {
        let { keybind: t, className: i } = e;
        return (0, n.jsx)(n.Fragment, {
          children: t.map((e, t) =>
            (0, n.jsx)("span", { className: o()(s.key, i), children: e }, t),
          ),
        });
      }
    },
    333031: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return C;
        },
      }),
        i(47120);
      var n = i(200651),
        l = i(192379),
        o = i(120356),
        s = i.n(o),
        r = i(954955),
        a = i.n(r),
        u = i(772848),
        d = i(442837),
        c = i(902704),
        h = i(13245),
        f = i(928518),
        p = i(358085),
        E = i(610394),
        m = i(561064),
        v = i(501787),
        g = i(946921);
      function S(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      function _(e, t) {
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
              let e = f.Z.getWindow(v.OVERLAY_V3_KEY);
              null != e &&
                this.mutationObserver.observe(
                  null == e ? void 0 : e.document.body,
                  { subtree: !0, attributes: !0 },
                );
            }
            let i = this.zones.get(e);
            null != i && this.resizeObserver.unobserve(i.element);
            let n = e.getBoundingClientRect();
            this.zones.set(e, {
              element: e,
              zone: _(
                null !== (t = null == i ? void 0 : i.zone.name) && void 0 !== t
                  ? t
                  : (0, u.Z)(),
                n,
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
            let e = f.Z.getWindow(v.OVERLAY_V3_KEY);
            null != e &&
              h.Z.setClickZones(
                Array.from(this.zones.values()).map((t) => {
                  let { zone: i } = t;
                  return {
                    name: i.name,
                    left: i.left / e.innerWidth,
                    top: i.top / e.innerHeight,
                    right: i.right / e.innerWidth,
                    bottom: i.bottom / e.innerHeight,
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
            S(this, "resizeObserver", void 0),
              S(this, "mutationObserver", void 0),
              S(this, "zones", new Map()),
              S(this, "elements", new Set()),
              S(this, "window", void 0),
              S(this, "handleResize", () => {
                this.globalUpdate();
              }),
              S(this, "handleMutations", () => {
                this.globalUpdate();
              }),
              S(
                this,
                "globalUpdate",
                a()(
                  () => {
                    let e = !1;
                    for (let [t, i] of this.zones) {
                      let n = t.getBoundingClientRect(),
                        l = _(i.zone.name, n);
                      if (!(0, c.Z)(l, i.zone))
                        (e = !0),
                          (i = { element: i.element, zone: l }),
                          this.zones.set(t, i);
                    }
                    e && this.updateZones();
                  },
                  250,
                  { trailing: !0, maxWait: 1e3 },
                ),
              ),
              (this.window = e);
          }
        })((0, m.i)()),
      );
      function C(e) {
        let { observe: t = !0, className: i, children: o } = e,
          r = l.useContext(Z),
          a = (0, d.e7)([E.Z], () => E.Z.clickZoneDebugMode),
          [{ refHandler: u, setObserve: c }] = l.useState(() => {
            let e = null;
            return {
              setObserve(t) {
                null != e && (t ? r.observe(e) : r.unobserve(e));
              },
              refHandler(t) {
                null != e && r.unobserve(e), (e = t);
              },
            };
          });
        return (
          l.useLayoutEffect(() => {
            c(t);
          }, [t, c]),
          (0, n.jsx)("div", {
            ref: u,
            className: s()(i, g.clickable, a && g.debugMode),
            "data-click-zone": !0,
            children: o,
          })
        );
      }
    },
    319414: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return f;
        },
      }),
        i(47120);
      var n = i(200651);
      i(192379);
      var l = i(442837),
        o = i(352527),
        s = i(183584),
        r = i(487029),
        a = i(592125),
        u = i(944486),
        d = i(554174),
        c = i(710111),
        h = i(871119);
      function f() {
        let [e, t] = (0, l.Wu)([o.Z], () => [o.Z.enabled, o.Z.keepOpen]),
          i = (0, l.e7)([u.Z], () => u.Z.getVoiceChannelId()),
          f = (0, l.e7)([a.Z], () => a.Z.getChannel(i), [i]),
          p = null == f ? void 0 : f.getGuildId();
        return e && null != f
          ? (0, n.jsx)("div", {
              className: h.container,
              children: (0, n.jsx)(r.Z, {
                width: c.FW.width,
                height: c.FW.height,
                guildId: p,
                channel: f,
                keepOpen: t,
                onClose: function () {
                  let e = (0, d.Z)();
                  null != e && (0, s.oZ)(e);
                },
                analyticsSource: "overlay",
              }),
            })
          : null;
      }
    },
    892127: function (e, t, i) {
      var n = i(200651),
        l = i(192379),
        o = i(120356),
        s = i.n(o),
        r = i(442837),
        a = i(765250),
        u = i(13245),
        d = i(355863),
        c = i(237997),
        h = i(451478),
        f = i(434529),
        p = i(145597),
        E = i(830917),
        m = i(353038),
        v = i(610394),
        g = i(561064),
        S = i(981631),
        _ = i(467577);
      t.Z = l.memo(function (e) {
        let {
            widget: t,
            renderWidget: i,
            renderTitle: o,
            renderButtons: Z,
            resizeValidation: C,
            className: O,
            dragContainerClassName: I,
          } = e,
          N = d.Z.getWidgetConfig(t.type),
          y = (0, r.e7)([c.Z], () => c.Z.isLocked((0, p.QF)())),
          x = (0, g.Z)(),
          b = (0, r.e7)([h.Z], () => h.Z.windowSize((0, E.ZY)(x))),
          T = (0, g.Z)(),
          R = l.useCallback((e, t, i, n, l) => {
            let o = h.Z.windowSize((0, E.ZY)((0, g.i)())),
              s = (0, f.jL)(i, o),
              r = (0, f.Ox)(n, o);
            (0, a.Os)(t), (0, a.nv)({ widgetId: t, anchor: s, size: r });
            let c = e === m.B.MOVE,
              p = (0, f.PY)(i, o.width, o.height, l.width, l.height);
            u.Z.track(S.rMx.OVERLAY_LAYOUT_UPDATED, {
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
          k = l.useCallback((e) => {
            (0, a.Os)(e);
          }, []),
          { id: z, pinned: A, zIndex: M, size: L, anchor: w } = t,
          D = (0, f.w_)(L, b),
          j = (0, f.KR)(w, b),
          { minSize: P, resizeX: U, resizeY: H, dragAnywhere: V } = N,
          W = A || !y,
          F = l.useMemo(
            () => ({ minX: 0, minY: 0, maxX: b.width, maxY: b.height }),
            [b],
          ),
          B = l.useCallback(
            (e) =>
              i({
                ...e,
                widget: t,
                dragging: null != e.dragOperation,
                className: O,
              }),
            [t, i, O],
          ),
          Y = l.useCallback(
            (e) =>
              null != o || null != Z
                ? (0, n.jsxs)("div", {
                    className: _.extrasContainer,
                    children: [
                      null == o ? void 0 : o(t),
                      null == Z ? void 0 : Z(t, e),
                    ],
                  })
                : null,
            [t, o, Z],
          ),
          G = (0, r.e7)([v.Z], () => v.Z.renderDebugMode),
          K = l.useMemo(() => {
            if (null != C) return (e) => C({ ...e, widget: t });
          }, [C, t]);
        return (0, n.jsx)(m.Z, {
          className: s()(
            {
              [_.debug]: G,
              [_.debugUnpinned]: G && !A,
              [_.debugPinned]: G && A,
            },
            I,
          ),
          id: z,
          size: D,
          anchor: j,
          container: F,
          minSize: P,
          hidden: !W,
          locked: y,
          resizeX: U,
          resizeY: H,
          style: { zIndex: M },
          dragAnywhere: V,
          active: !y,
          onUpdate: R,
          onClick: k,
          targetWindow: T,
          renderExtras: Y,
          resizeValidation: K,
          children: B,
        });
      });
    },
    516542: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return m;
        },
      }),
        i(47120);
      var n = i(200651),
        l = i(192379),
        o = i(904245),
        s = i(13245),
        r = i(655687),
        a = i(541716),
        u = i(752305),
        d = i(893718),
        c = i(957730),
        h = i(849522),
        f = i(145597),
        p = i(981631),
        E = i(721880);
      function m(e) {
        let { id: t, channel: i, onSend: m } = e,
          v = (0, h.Z)(),
          { placeholder: g, accessibilityLabel: S } = (0, r.Z)({ channel: i }),
          [_, Z] = l.useState(() => (0, u.H2)()),
          { textValue: C, richValue: O } = _,
          [I, N] = l.useState(!1),
          y = l.useCallback(() => N(!0), []),
          x = l.useCallback(() => N(!1), []),
          b = l.useCallback((e, t, i) => {
            Z({ textValue: t, richValue: i });
          }, []),
          T = l.useCallback(
            () =>
              C.length > v
                ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                : (o.Z.sendMessage(i.id, c.ZP.parse(i, C), !1),
                  s.Z.setInputLocked(!0, (0, f.QF)()),
                  s.Z.updateNotificationStatus(t, p._1z.DISMISSED),
                  null == m || m(C),
                  Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })),
            [C, v, i, t, m],
          );
        return (0, n.jsx)(d.Z, {
          innerClassName: E.textArea,
          onChange: b,
          placeholder: g,
          accessibilityLabel: S,
          channel: i,
          textValue: C,
          richValue: O,
          type: a.Ie.OVERLAY_INLINE_REPLY,
          onBlur: x,
          onFocus: y,
          focused: I,
          onSubmit: T,
          autoCompletePosition: "bottom",
          disableThemedBackground: !0,
        });
      }
    },
    380736: function (e, t, i) {
      i.d(t, {
        Q: function () {
          return g;
        },
        Z: function () {
          return O;
        },
      }),
        i(47120);
      var n = i(200651),
        l = i(192379),
        o = i(120356),
        s = i.n(o),
        r = i(476183),
        a = i(481060),
        u = i(13245),
        d = i(809357),
        c = i(691891),
        h = i(44359),
        f = i(333031),
        p = i(693091),
        E = i(981631),
        m = i(388032),
        v = i(945276);
      function g(e, t, i) {
        return (0, n.jsx)(S, {
          keybind: e,
          message: t,
          messageWithoutKeybind: i,
        });
      }
      function S(e) {
        let { keybind: t, message: i, messageWithoutKeybind: l } = e,
          o = (0, d.o)();
        return (0, n.jsx)(n.Fragment, {
          children: o
            ? m.intl.format(i, {
                keybind: t,
                keybindHook: (e) =>
                  (0, n.jsx)(h.Z, { keybind: t }, t.join("+")),
              })
            : l,
        });
      }
      function _(e) {
        e.currentTarget.scrollTo(0, 0);
      }
      let Z = l.memo(function (e) {
        let {
            maxBodyLines: t,
            expand: i = !1,
            onNotificationShow: o,
            onDismissClick: u,
            onConfirmClick: d,
            onCancelClick: h,
            onNotificationClick: f,
            hint: p,
            cancelText: g,
            confirmText: S,
            icon: Z,
            body: C,
            title: O,
            renderFooter: I,
            contentOpacity: N,
            status: y,
            containerRef: x,
          } = e,
          [b, T] = l.useState(!1),
          R = i || b || y === E._1z.FOCUSED;
        l.useEffect(() => {
          null == o || o();
        }, [o]);
        let k = l.useCallback(
            (e) => {
              e.stopPropagation(), null == u || u(e);
            },
            [u],
          ),
          z = l.useCallback(
            (e) => {
              e.stopPropagation(), null == d || d(e);
            },
            [d],
          ),
          A = l.useCallback(
            (e) => {
              e.stopPropagation(), null == h || h(e);
            },
            [h],
          ),
          M = l.useCallback(() => {
            T(!0);
          }, []),
          L = l.useCallback(() => {
            T(!1);
          }, []);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("div", {
              className: v.overflowWrapper,
              onScroll: _,
              children: (0, n.jsx)(a.Clickable, {
                innerRef: x,
                ignoreKeyPress: !0,
                onMouseOver: M,
                onMouseLeave: L,
                onClick: f,
                className: s()(v.container, { [v.clickable]: null != f }),
                children: (function () {
                  let e = null == I ? void 0 : I(R);
                  return (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsxs)(r.animated.div, {
                        className: v.iconAndDetails,
                        style: { opacity: N },
                        children: [
                          null == Z
                            ? null
                            : "string" == typeof Z
                              ? (0, n.jsx)(a.Avatar, {
                                  src: Z,
                                  size: a.AvatarSizes.SIZE_40,
                                  className: v.avatar,
                                  "aria-hidden": !0,
                                })
                              : (0, n.jsx)("div", {
                                  className: v.avatar,
                                  children: Z,
                                }),
                          (0, n.jsxs)("div", {
                            className: v.details,
                            children: [
                              (0, n.jsx)(a.Text, {
                                color: "interactive-normal",
                                variant: "text-sm/semibold",
                                lineClamp: 2,
                                children: O,
                              }),
                              null != C
                                ? (0, n.jsx)(a.Text, {
                                    color: "interactive-normal",
                                    variant: "text-sm/normal",
                                    lineClamp:
                                      null != t ? t * (R ? 2 : 1) : void 0,
                                    children: C,
                                  })
                                : null,
                              (function () {
                                let e = "function" == typeof p ? p(R) : p;
                                return null != p
                                  ? (0, n.jsx)(a.Text, {
                                      className: v.hint,
                                      color: "text-muted",
                                      variant: "text-xxs/medium",
                                      children: e,
                                    })
                                  : null;
                              })(),
                              null == d && null == h
                                ? null
                                : (0, n.jsxs)("div", {
                                    className: v.buttonContainer,
                                    children: [
                                      null != d
                                        ? (0, n.jsx)(a.Button, {
                                            className: v.button,
                                            size: a.Button.Sizes.SMALL,
                                            color: a.Button.Colors.GREEN,
                                            onClick: z,
                                            children:
                                              null != S
                                                ? S
                                                : m.intl.string(m.t.BddRzc),
                                          })
                                        : null,
                                      null != h
                                        ? (0, n.jsx)(a.Button, {
                                            className: v.button,
                                            size: a.Button.Sizes.SMALL,
                                            look: a.Button.Looks.OUTLINED,
                                            color: a.Button.Colors.PRIMARY,
                                            onClick: A,
                                            children:
                                              null != g
                                                ? g
                                                : m.intl.string(m.t["ETE/oK"]),
                                          })
                                        : null,
                                    ],
                                  }),
                            ],
                          }),
                        ],
                      }),
                      null != e &&
                        (0, n.jsx)(a.Clickable, {
                          className: v.footer,
                          ignoreKeyPress: !0,
                          onClick: (e) => e.stopPropagation(),
                          children: e,
                        }),
                    ],
                  });
                })(),
              }),
            }),
            (0, n.jsx)(c.Z, {
              className: v.dismissButton,
              onDismiss: k,
              "aria-label": m.intl.string(m.t.LnEgqa),
            }),
          ],
        });
      });
      function C(e) {
        let {
          springs: { opacity: t, scale: i, transform: l, height: o },
          index: s,
          children: a,
          locked: u,
        } = e;
        return (0, n.jsx)(r.animated.div, {
          className: v.animationWrapper,
          style: {
            pointerEvents: u && 0 !== s ? "none" : "auto",
            zIndex: Math.max(5 - s, 0),
            opacity: t,
            transform: l.to((e) => "translate3d(0, ".concat(e, "px, 0)")),
            scale: i.to([0, 1], [0.7, 1]),
            height: o,
          },
          children: a,
        });
      }
      function O(e) {
        let {
            notification: t,
            index: i,
            locked: o,
            transitionState: s,
            cleanUp: r,
          } = e,
          {
            id: a,
            props: {
              onNotificationShow: d,
              onDismissClick: c,
              onNotificationClick: h,
              onConfirmClick: E,
              onCancelClick: m,
              renderFooter: g,
            },
          } = t,
          S = l.useCallback(() => {
            d(a);
          }, [d, a]),
          _ = l.useCallback(
            (e) => {
              u.Z.updateNotificationStatus(a), null == c || c(e, a);
            },
            [a, c],
          ),
          O = l.useCallback(
            (e) => {
              null == h || h(e, a);
            },
            [h, a],
          ),
          I = l.useCallback(
            (e) => {
              null == E || E(e, a);
            },
            [E, a],
          ),
          N = l.useCallback(
            (e) => {
              null == m || m(e, a);
            },
            [m, a],
          ),
          y = l.useCallback((e) => (null == g ? void 0 : g(e, a)), [g, a]),
          {
            props: {
              onNotificationShow: x,
              onDismissClick: b,
              renderFooter: T,
              onNotificationClick: R,
              onConfirmClick: k,
              onCancelClick: z,
              ...A
            },
            status: M,
          } = t,
          { ref: L, springs: w } = (0, p.X4)(t.id, s, r);
        return (0, n.jsx)(C, {
          transitionState: s,
          springs: w,
          index: i,
          locked: o,
          children: (0, n.jsx)(f.Z, {
            observe: 0 === i,
            className: v.clickZone,
            children: (0, n.jsx)(Z, {
              ...A,
              containerRef: L,
              notificationId: t.id,
              onNotificationShow: 0 === i ? S : void 0,
              onDismissClick: _,
              onNotificationClick: null != h ? O : void 0,
              onConfirmClick: null != E ? I : void 0,
              onCancelClick: null != m ? N : void 0,
              renderFooter: y,
              expand: !1,
              index: i,
              locked: o,
              status: M,
              contentOpacity: w.contentOpacity,
            }),
          }),
        });
      }
    },
    693091: function (e, t, i) {
      i.d(t, {
        AS: function () {
          return s;
        },
        S4: function () {
          return r;
        },
        X4: function () {
          return d;
        },
      }),
        i(47120);
      var n = i(192379),
        l = i(481060);
      function o(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      class s {
        updateState(e, t) {
          this.items = e;
          let i = this.locked !== t;
          (this.locked = t), this.computeLayout(i);
        }
        initialize(e) {
          if (null == this.resizeObserver) {
            for (let [, { element: i }] of ((this.resizeObserver =
              new e.ResizeObserver(this.handleResize)),
            this.listeners)) {
              var t;
              null === (t = this.resizeObserver) ||
                void 0 === t ||
                t.observe(i);
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
            i = 0;
          for (let n of this.items) {
            let l = this.listeners.get(n.notification.id);
            if (null == l) continue;
            let { offsetHeight: o } = l.element;
            (l.top !== t || l.height !== o || l.index !== i) && (e = !0),
              (l.top = t),
              (l.height = o),
              (l.index = i),
              0 === t &&
                (this.matchHeight !== o && (e = !0), (this.matchHeight = o)),
              (t += o + 8),
              i++;
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
        subscribe(e, t, i) {
          var n;
          this.listeners.set(e, {
            notificationId: e,
            callback: i,
            element: t,
            height: 0,
            top: 0,
            index: 0,
          }),
            null === (n = this.resizeObserver) || void 0 === n || n.observe(t),
            this.queueCompute();
        }
        unsubscribe(e) {
          var t;
          let i = this.listeners.get(e);
          null != i &&
            (null === (t = this.resizeObserver) ||
              void 0 === t ||
              t.unobserve(i.element),
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
      let r = n.createContext(new s(!0));
      function a(e, t, i) {
        return t && 0 !== e ? 20 * Math.max(e / 5, 0) : i;
      }
      let u = { mass: 0.8, friction: 25, tension: 320 };
      function d(e, t, i) {
        let [o, s] = (0, l.useSpring)(
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
          d = n.useRef(s),
          c = n.useContext(r),
          h = n.useMemo(() => {
            let t = !1;
            return (i) => {
              null == i
                ? c.unsubscribe(e)
                : c.subscribe(e, i, (e) => {
                    var i, n, l, o;
                    let {
                        locked: s,
                        matchHeight: r,
                        height: c,
                        top: h,
                        index: f,
                      } = e,
                      { current: p } = d;
                    let E = {
                      opacity:
                        ((i = f),
                        (n = s) && i > 4 ? 0 : n ? Math.min(1 - i / 4, 1) : 1),
                      scale: ((l = f), s ? Math.min(1 - l / 4, 1) : 1),
                      transform: a(f, s, h),
                      contentOpacity: ((o = f), s ? (o > 0 ? 0 : 1) : 1),
                      height: s ? r : c,
                    };
                    p({
                      from: t
                        ? void 0
                        : {
                            opacity: 0,
                            scale: 1.1,
                            transform: -((s ? r : c) * 1),
                            contentOpacity: 1,
                            height: s ? r : c,
                          },
                      to: E,
                      config: u,
                    }),
                      (t = !0);
                  });
            };
          }, [e, c]);
        return (
          n.useLayoutEffect(() => {
            if (t === l.TransitionStates.YEETED) {
              let t = c.getLayoutSpecs(e);
              if (null == t) {
                i();
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
                setTimeout(i, 300);
            }
          }, [t, i, e, c]),
          { ref: h, springs: o }
        );
      }
    },
    371467: function (e, t, i) {
      i(47120), i(733860), i(653041);
      var n,
        l,
        o,
        s,
        r,
        a,
        u,
        d,
        c = i(512722),
        h = i.n(c),
        f = i(772848),
        p = i(442837),
        E = i(570140),
        m = i(13245),
        v = i(435064),
        g = i(786761),
        S = i(695346),
        _ = i(314897),
        Z = i(592125),
        C = i(375954),
        O = i(292959),
        I = i(158776),
        N = i(885110),
        y = i(246946),
        x = i(594174),
        b = i(974180),
        T = i(237997),
        R = i(70956),
        k = i(150097),
        z = i(129724),
        A = i(145597),
        M = i(371651),
        L = i(610394),
        w = i(388627),
        D = i(996050),
        j = i(609626),
        P = i(421824),
        U = i(777036),
        H = i(333727),
        V = i(585708),
        W = i(588909),
        F = i(981631),
        B = i(388032);
      ((s = n || (n = {}))[(s.GENERIC = 0)] = "GENERIC"),
        (s[(s.TEXT = 1)] = "TEXT"),
        (s[(s.INCOMING_CALL = 2)] = "INCOMING_CALL"),
        (s[(s.NUDGE = 3)] = "NUDGE"),
        ((r = l || (l = {}))[(r.NORMAL = 0)] = "NORMAL"),
        (r[(r.HIGH = 1)] = "HIGH"),
        (r[(r.URGENT = 2)] = "URGENT");
      let Y = 5 * R.Z.Millis.SECOND,
        G = 8 * R.Z.Millis.SECOND,
        K = 30 * R.Z.Millis.SECOND,
        Q = 30 * R.Z.Millis.SECOND,
        J = Object.freeze({
          timestamp: 0,
          priority: 0,
          duration: Y,
          expirationExternallyManaged: !1,
          type: 0,
        }),
        X = [],
        q = !1,
        $ = [];
      function ee() {
        if (q && null == X.find((e) => e.status === F._1z.FOCUSED))
          for (let e of ((q = !1),
          (X = [...X, ...$]),
          ($ = []),
          X.length > 40 && (X.length = 40),
          X))
            e.timer.start();
      }
      function et() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
        X.filter((e) => 1 === e.type && e.status === F._1z.TIMED_OUT)
          .sort((e, t) => t.timestamp - e.timestamp)
          .forEach((t, i) => {
            (i >= e || t.timestamp < Date.now() - K) &&
              ei(t.id, F._1z.DISMISSED);
          });
      }
      function ei(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : F._1z.DISMISSED;
        if (null == e) return !1;
        let i = X.findIndex((t) => t.id === e);
        if (-1 === i) return !1;
        let n = X[i];
        if ((n.timer.stop(), (X = [...X]), t === F._1z.FOCUSED)) {
          let [e] = X.splice(i, 1);
          (e = { ...e, status: t }), X.unshift(e), (q = !0);
          return;
        }
        t === F._1z.DISMISSED ? X.splice(i, 1) : (X[i] = { ...n, status: t }),
          ee();
      }
      function en(e) {
        let t = X.length,
          i =
            (X = X.filter((t) => 1 !== t.type || t.channelId !== e || !1))
              .length !== t;
        return i && ee(), i;
      }
      function el(e) {
        let t = X.find((t) => 2 === t.type && t.channelId === e);
        return null != t ? t.id : null;
      }
      function eo(e, t) {
        let i = { ...J, timestamp: Date.now(), ...t },
          n = (0, f.Z)(),
          l = !1,
          o = {
            id: n,
            status: F._1z.ACTIVE,
            timer: (function (e) {
              let t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                i = arguments.length > 2 ? arguments[2] : void 0,
                n = -1;
              return {
                start() {
                  let l =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : t,
                    o = l ? F._1z.TIMED_OUT : F._1z.DISMISSED;
                  -1 === n &&
                    (n = setTimeout(
                      () => m.Z.updateNotificationStatus(e, o),
                      null != i ? i : Y,
                    ));
                },
                stop() {
                  clearTimeout(n), (n = -1);
                },
              };
            })(n, i.expirationExternallyManaged, i.duration),
            props: {
              ...e,
              onNotificationShow: () => {
                var t;
                !l &&
                  ((l = !0),
                  null === (t = e.onNotificationShow) ||
                    void 0 === t ||
                    t.call(e, n));
              },
            },
            ...i,
          },
          s = q ? $ : [...X],
          r = s.findIndex((e) => e.priority <= i.priority);
        if ((-1 === r ? s.push(o) : s.splice(r, 0, o), s.length > 40)) {
          let e = s.pop();
          !q && e.timer.stop();
        }
        return !q && ((X = s), o.timer.start()), n;
      }
      function es(e) {
        let { channelId: t, ringing: i } = e,
          n = el(t);
        if (!i.includes(_.default.getId())) return ei(n);
        if (null != n) return !1;
        let l = Z.Z.getChannel(t);
        if (
          null == l ||
          !l.isPrivate() ||
          N.Z.getStatus() === F.Skl.DND ||
          S.QZ.getSetting()
        )
          return !1;
        let o = X.find(
          (e) =>
            1 === e.type && e.channelId === t && e.messageType === F.uaV.CALL,
        );
        null != o && ei(o.id),
          eo((0, U.Z)(l), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: l.id,
          });
      }
      class er extends (o = p.ZP.Store) {
        initialize() {
          this.waitFor(Z.Z, x.default);
        }
        getNotifications() {
          return X;
        }
      }
      (d = "OverlayNotificationsStore"),
        (u = "displayName") in (a = er)
          ? Object.defineProperty(a, u, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[u] = d);
      let ea = new er(E.Z, {
        OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
          let { notificationId: t, status: i } = e;
          ei(t, i);
        },
        OVERLAY_MOUNTED: function (e) {
          var t;
          let { nudges: i } = e;
          et(0);
          let n = null !== (t = L.Z.getFocusedPID()) && void 0 !== t ? t : A.R2;
          if (M.Z.hasChangedRenderMode(n)) return;
          let l = (0, W.Z)((0, w.pL)(), i);
          null != l && eo(l, { priority: 2, type: 3, duration: G });
        },
        OVERLAY_SET_INPUT_LOCKED: function (e) {
          let { locked: t } = e;
          if (t) {
            for (let e of X)
              e.status === F._1z.FOCUSED && ei(e.id, F._1z.ACTIVE);
            return !0;
          }
          for (let e of (et(), X))
            3 === e.type
              ? ei(e.id, F._1z.DISMISSED)
              : e.status === F._1z.ACTIVE &&
                !e.expirationExternallyManaged &&
                (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
          if (X.length > 0) {
            var i;
            return ei(
              null ===
                (i = X.filter((e) => 1 === e.type).sort(
                  (e, t) => t.timestamp - e.timestamp,
                )[0]) || void 0 === i
                ? void 0
                : i.id,
              F._1z.FOCUSED,
            );
          }
        },
        MESSAGE_CREATE: function (e) {
          var t, i, n, l;
          let { channelId: o, message: s } = e,
            r = Z.Z.getChannel(o),
            a = x.default.getUser(
              null === (t = s.author) || void 0 === t ? void 0 : t.id,
            );
          if (null == r || null == a) return !1;
          if (
            (null === (i = s.activity) || void 0 === i ? void 0 : i.type) ===
              F.mFx.JOIN ||
            (null === (n = s.activity) || void 0 === n ? void 0 : n.type) ===
              F.mFx.JOIN_REQUEST
          ) {
            if (!(0, k.eF)(s, o, !0, !0)) return !1;
            let e = (function (e, t, i) {
              var n;
              let l, o;
              if (
                (h()(null != t.activity, "received null message activity"),
                i.id === _.default.getId())
              )
                return !1;
              let s = (0, w.pL)(),
                r =
                  null !== (n = null == s ? void 0 : s.altId) && void 0 !== n
                    ? n
                    : null == s
                      ? void 0
                      : s.id;
              if (null == s || null == r) return !1;
              switch (t.activity.type) {
                case F.mFx.JOIN:
                  if (
                    null == (l = I.Z.getApplicationActivity(i.id, r)) ||
                    null == l.party ||
                    l.party.id !== t.activity.party_id
                  )
                    return !1;
                  o = (0, D.Z)(e, t, i, s, l);
                  break;
                case F.mFx.JOIN_REQUEST:
                  if (
                    null == (l = N.Z.getApplicationActivity(r)) ||
                    null == l.party ||
                    l.party.id !== t.activity.party_id
                  )
                    return !1;
                  o = (0, H.Z)(e, i, s, l);
              }
              return (
                null != o &&
                (eo(o, {
                  priority: 2,
                  expirationExternallyManaged: !0,
                  channelId: e.id,
                  duration: Q,
                }),
                !0)
              );
            })(r, s, a);
            if (!1 !== e) return e;
          }
          if (
            T.Z.getTextChatNotificationMode() === F.Ypu.DISABLED ||
            y.Z.disableNotifications ||
            !(0, k.eF)(s, o)
          )
            return !1;
          let u = !O.Z.isSoundDisabled(b.Ay),
            d =
              null !== (l = C.Z.getMessage(o, s.id)) && void 0 !== l
                ? l
                : (0, g.e5)(s);
          eo((0, V.Z)(r, d, a, u), {
            type: 1,
            channelId: r.id,
            expirationExternallyManaged: !0,
            messageType: s.type,
          }),
            et();
        },
        CHANNEL_SELECT: function (e) {
          let { channelId: t } = e;
          return null != t && en(t);
        },
        MESSAGE_ACK: function (e) {
          let { channelId: t } = e;
          return en(t);
        },
        CALL_CREATE: es,
        CALL_UPDATE: es,
        CALL_DELETE: function (e) {
          let { channelId: t } = e;
          ei(el(t));
        },
        ACTIVITY_USER_ACTION: function (e) {
          let t,
            { actionType: i, user: n, applicationId: l } = e,
            o = (0, w.pL)();
          if (
            null == o ||
            (null == o ? void 0 : o.id) == null ||
            (o.id !== l && o.altId !== l)
          )
            return !1;
          if (i === F.mFx.JOIN) t = (0, j.Z)(n, o);
          if (null == t) return !1;
          eo(t, { priority: 2, type: 0 });
        },
        CLIPS_SAVE_CLIP_START: function () {
          eo((0, P.f)(B.intl.string(B.t.NBMK9v)));
        },
        CLIPS_SAVE_CLIP: function () {
          eo(
            (0, P.f)(
              B.intl.format(B.t.KLhk6u, {
                duration: (0, z.A)(v.Z.getSettings().clipsLength / 1e3, !0),
              }),
            ),
          );
        },
        CLIPS_SAVE_CLIP_ERROR: function () {
          eo((0, P.f)(B.intl.string(B.t["1ZbZur"])));
        },
        STREAM_START: function (e) {
          let t = (0, P.y)();
          null != t && eo(t);
        },
      });
      t.Z = ea;
    },
    620954: function (e, t, i) {
      i.d(t, {
        P: function () {
          return c;
        },
        R: function () {
          return d;
        },
      });
      var n = i(13245),
        l = i(556296),
        o = i(237997),
        s = i(13140),
        r = i(145597),
        a = i(987650),
        u = i(981631);
      function d(e, t) {
        return {
          trackView() {
            n.Z.track(u.rMx.NOTIFICATION_VIEWED, t),
              n.Z.notificationEvent(e, a.bv.Viewed);
          },
          trackClick(i) {
            let l = o.Z.isLocked((0, r.QF)())
              ? u.Sbl.LOCKED_OVERLAY
              : u.Sbl.UNLOCKED_OVERLAY;
            n.Z.track(u.rMx.NOTIFICATION_CLICKED, {
              ...t,
              location: l,
              action_type: i,
            }),
              n.Z.notificationEvent(e, a.bv.Clicked);
          },
        };
      }
      function c() {
        let e = l.Z.getOverlayKeybind();
        return null != e ? (0, s.BB)(e.shortcut, !0).split(" + ") : ["???"];
      }
    },
    996050: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return u;
        },
      });
      var n = i(224706),
        l = i(13245),
        o = i(150097),
        s = i(620954),
        r = i(987650),
        a = i(388032);
      function u(e, t, i, u, d) {
        if (null == t.activity || null == u.id) return null;
        let c = t.activity.type,
          h = d.session_id;
        if (null == h) return null;
        let { icon: f, title: p, body: E } = (0, o.Xi)(e, t, i),
          { trackView: m, trackClick: v } = (0, s.R)(r.n0.ActivityInvite, {
            notif_type: r.n0.ActivityInvite,
            notif_user_id: i.id,
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
          body: E,
          onNotificationShow: () => {
            m();
          },
          confirmText: a.intl.string(a.t.VJlc0d),
          onConfirmClick: (o, s) => {
            var r;
            n.Z.join({
              userId: i.id,
              sessionId: h,
              applicationId: null !== (r = u.altId) && void 0 !== r ? r : u.id,
              channelId: e.id,
              messageId: t.id,
            }),
              l.Z.updateNotificationStatus(s),
              v("join");
          },
          onDismissClick: () => {
            v("dismiss");
          },
        };
      }
    },
    609626: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return a;
        },
      });
      var n = i(768581),
        l = i(620954),
        o = i(987650),
        s = i(981631),
        r = i(388032);
      function a(e, t) {
        let i = e.username,
          a = r.intl.format(r.t["Yk+uYG"], { username: "" }),
          u = (0, n.ov)(e),
          d = r.intl.string(r.t.WRj1Wl),
          { trackView: c, trackClick: h } = (0, l.R)(o.n0.ActivityUserJoin, {
            notif_type: o.n0.ActivityUserJoin,
            notif_user_id: e.id,
            activity_type: s.mFx.JOIN,
            activity_name: t.name,
          });
        return {
          icon: u,
          title: i,
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
    421824: function (e, t, i) {
      i.d(t, {
        f: function () {
          return p;
        },
        y: function () {
          return f;
        },
      });
      var n = i(200651);
      i(192379);
      var l = i(481060),
        o = i(522474),
        s = i(556296),
        r = i(13140),
        a = i(44359),
        u = i(620954),
        d = i(987650),
        c = i(981631),
        h = i(388032);
      function f() {
        if (o.Z.getWindowOpen(c.KJ3.ACTIVITY_POPOUT)) return null;
        let { trackView: e, trackClick: t } = (0, u.R)(
            d.n0.ClipsReminderNotification,
            { notif_type: d.n0.ClipsReminderNotification },
          ),
          i = s.Z.getKeybindForAction(c.kg4.SAVE_CLIP);
        if (null == i) return null;
        let f = r.BB(i.shortcut, !0);
        return {
          title: h.intl.format(h.t.S5uhCA, {
            keybind: f,
            keybindHook: (e, t) =>
              (0, n.jsx)(a.Z, { keybind: f.split("+") }, t),
          }),
          icon: (0, n.jsx)(l.ClipsIcon, { size: "lg", color: "currentColor" }),
          onNotificationShow: () => {
            e();
          },
          onDismissClick: () => {
            t("dismiss");
          },
        };
      }
      function p(e) {
        let { trackView: t, trackClick: i } = (0, u.R)(d.n0.ClipsNotification, {
          notif_type: d.n0.ClipsNotification,
        });
        return {
          title: e,
          icon: (0, n.jsx)(l.ClipsIcon, { size: "lg", color: "currentColor" }),
          onNotificationShow: () => {
            t();
          },
          onDismissClick: () => {
            i("dismiss");
          },
        };
      }
    },
    777036: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return f;
        },
      });
      var n = i(26151),
        l = i(13245),
        o = i(43267),
        s = i(933557),
        r = i(699516),
        a = i(594174),
        u = i(620954),
        d = i(987650),
        c = i(981631),
        h = i(388032);
      function f(e) {
        let t = (0, s.F6)(e, a.default, r.Z),
          i = h.intl.string(h.t.ssrVzM),
          f = (0, o.x)(e),
          { trackView: p, trackClick: E } = (0, u.R)(d.n0.IncomingCall, {
            notif_type: d.n0.IncomingCall,
            notif_user_id: 1 === e.recipients.length ? e.recipients[0] : null,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
          });
        return {
          icon: f,
          title: t,
          body: i,
          confirmText: h.intl.string(h.t["0D/6R0"]),
          cancelText: h.intl.string(h.t.BVN4pK),
          onNotificationShow: () => {
            p();
          },
          onConfirmClick: (t, i) => {
            E("join"),
              n.Z.call(e.id, !1, !1),
              l.Z.updateNotificationStatus(i),
              l.Z.track(c.rMx.VOICE_CHANNEL_SELECTED, {
                location: "Overlay Notificaiton",
                guild_id: null,
                channel_id: e.id,
                video_enabled: !1,
              });
          },
          onCancelClick: () => {
            E("decline"), n.Z.stopRinging(e.id);
          },
          onDismissClick: () => {
            E("dismiss");
          },
        };
      }
    },
    333727: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return h;
        },
      });
      var n = i(278323),
        l = i(13245),
        o = i(45114),
        s = i(237997),
        r = i(145597),
        a = i(620954),
        u = i(987650),
        d = i(981631),
        c = i(388032);
      function h(e, t, i, h) {
        let f = t.username,
          p = c.intl.format(c.t.VDODnp, { username: "", game: i.name }),
          E = t.getAvatarURL(e.guild_id, 80),
          { trackView: m, trackClick: v } = (0, a.R)(u.n0.ActivityInvite, {
            notif_type: u.n0.ActivityInvite,
            notif_user_id: t.id,
            activity_type: d.mFx.JOIN_REQUEST,
            activity_name: h.name,
          });
        return {
          icon: E,
          title: f,
          body: p,
          confirmText: c.intl.string(c.t["fgP/wc"]),
          cancelText: c.intl.string(c.t.tpXzJy),
          onNotificationShow: () => {
            m();
          },
          onConfirmClick: (t, i) => {
            n.Z.sendActivityInvite({
              channelId: e.id,
              type: d.mFx.JOIN,
              activity: h,
              location: s.Z.isLocked((0, r.QF)())
                ? d.Sbl.LOCKED_OVERLAY
                : d.Sbl.UNLOCKED_OVERLAY,
            }),
              v("join"),
              l.Z.updateNotificationStatus(i);
          },
          onCancelClick: (t, i) => {
            (0, o.In)(e.id, !0, !0),
              l.Z.updateNotificationStatus(i),
              v("decline");
          },
          onDismissClick: () => {
            v("dismiss");
          },
        };
      }
    },
    585708: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return _;
        },
      });
      var n = i(200651);
      i(192379);
      var l = i(13245),
        o = i(937889),
        s = i(703656),
        r = i(974180),
        a = i(150097),
        u = i(358085),
        d = i(557177),
        c = i(998502),
        h = i(145597),
        f = i(610394),
        p = i(516542),
        E = i(380736),
        m = i(620954),
        v = i(987650),
        g = i(981631),
        S = i(388032);
      function _(e, t, i, _) {
        var Z;
        let { icon: C, title: O, body: I } = (0, a.Xi)(e, t, i),
          { trackView: N, trackClick: y } = (0, m.R)(v.n0.TextChat, {
            notif_type: v.n0.TextChat,
            notif_user_id:
              null === (Z = t.author) || void 0 === Z ? void 0 : Z.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
          });
        return {
          icon: C,
          title: O,
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
              : (0, E.Q)((0, m.P)(), S.t.ykjOAA, S.intl.string(S.t.jZkzVF)),
          maxBodyLines: 2,
          renderFooter: (t, i) =>
            t
              ? (0, n.jsx)(p.Z, { id: i, channel: e, onSend: () => y("send") })
              : null,
          onNotificationShow: () => {
            _ && (0, d.GN)(r.Ay, r.yk), N();
          },
          onNotificationClick: () => {
            let i = (0, h.QF)();
            f.Z.isInputLocked(i)
              ? (y("unlock"), l.Z.setInputLocked(!1, i))
              : (y("jump"),
                (0, s.uL)(g.Z5c.CHANNEL(e.guild_id, e.id, t.id)),
                u.isPlatformEmbedded && c.ZP.focus());
          },
          onDismissClick: () => {
            y("dismiss");
          },
        };
      }
    },
    588909: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return O;
        },
      }),
        i(47120);
      var n = i(200651);
      i(192379);
      var l = i(952265),
        o = i(24124),
        s = i(13245),
        r = i(620662),
        a = i(835473),
        u = i(442550),
        d = i(293273),
        c = i(145597),
        h = i(603618),
        f = i(380736),
        p = i(620954),
        E = i(987650),
        m = i(981631),
        v = i(602091),
        g = i(701488),
        S = i(388032),
        _ = i(945276),
        Z = i(585610);
      function C(e) {
        let { game: t } = e,
          i = (0, a.q)(t.id);
        return null == i
          ? null
          : (0, n.jsx)(u.f, { src: i.getIconURL(g.Si.LARGE), size: 40 });
      }
      function O(e, t) {
        let { trackView: a, trackClick: u } = (0, p.R)(E.n0.WelcomeNudge, {
            notif_type: E.n0.WelcomeNudge,
          }),
          g = {};
        for (let a of t)
          switch (a.type) {
            case E.nc.WELCOME: {
              let t =
                (null == e ? void 0 : e.altId) != null
                  ? d.Z.getApplicationActivity(e.altId)
                  : (null == e ? void 0 : e.id) != null
                    ? d.Z.getApplicationActivity(e.id)
                    : null;
              null != t &&
                (0, r.Z)(t, m.xjy.JOIN) &&
                ((g.cancelText = S.intl.string(S.t["6F9ivr"])),
                (g.onCancelClick = (e, i) => {
                  u("unlock"),
                    s.Z.updateNotificationStatus(i),
                    s.Z.setInputLocked(!1, (0, c.QF)()),
                    (0, o.h7)(t, !1, m.IlC.POPOUT);
                }));
              break;
            }
            case E.nc.GO_LIVE_VOICE:
            case E.nc.GO_LIVE_NON_VOICE:
              (g.confirmText = S.intl.string(S.t.U76Ft7)),
                (g.onConfirmClick = (e, t) => {
                  u("unlock"),
                    s.Z.updateNotificationStatus(t),
                    s.Z.setInputLocked(!1, (0, c.QF)()),
                    (0, l.ZD)(
                      async () => {
                        let { default: e } = await Promise.all([
                          i.e("93382"),
                          i.e("79477"),
                          i.e("14550"),
                        ]).then(i.bind(i, 60594));
                        return (t) =>
                          (0, n.jsx)(e, {
                            ...t,
                            selectSource: !1,
                            guildId:
                              a.type === E.nc.GO_LIVE_VOICE
                                ? a.voiceGuild.id
                                : void 0,
                            selectGuild: a.type === E.nc.GO_LIVE_NON_VOICE,
                            analyticsLocation: m.Sbl.OVERLAY_NUDGE,
                          });
                      },
                      { contextKey: v.u1 },
                    );
                });
              break;
            case E.nc.CONTENT_INVENTORY:
              (g.renderFooter = () =>
                (0, n.jsx)("div", {
                  className: Z.container,
                  children: (0, n.jsx)(h.i, { entries: a.entries }),
                })),
                (g.onNotificationShow = () => {
                  s.Z.track(m.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                    user_ids: a.entries.map((e) => e.author_id),
                    entry_ids: a.entries.map((e) => e.id),
                  });
                });
          }
        return {
          icon:
            null != e
              ? (0, n.jsx)(C, { game: e })
              : (0, n.jsx)("img", {
                  src: i(328756),
                  className: _.icon,
                  alt: "",
                }),
          title: null != e ? e.name : S.intl.string(S.t.pkXAeH),
          body: null,
          hint: () =>
            (0, f.Q)((0, p.P)(), S.t.e6giBQ, S.intl.string(S.t.jZkzVF)),
          onNotificationShow: (e) => {
            var t;
            a(),
              null === (t = g.onNotificationShow) ||
                void 0 === t ||
                t.call(g, e);
          },
          onNotificationClick: () => {
            u("unlock"), s.Z.setInputLocked(!1, (0, c.QF)());
          },
          onDismissClick: () => {
            u("dismiss");
          },
          ...g,
        };
      }
    },
    561064: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return u;
        },
        i: function () {
          return a;
        },
      });
      var n = i(442837),
        l = i(214629),
        o = i(928518),
        s = i(501787),
        r = i(981631);
      function a() {
        var e, t;
        let i =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : o.Z,
          n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : (0, l.e1)();
        return null !==
          (t =
            null !== (e = i.getWindow(s.OVERLAY_V3_KEY)) && void 0 !== e
              ? e
              : n
                ? i.getWindow(r.KJ3.ACTIVITY_POPOUT)
                : void 0) && void 0 !== t
          ? t
          : window;
      }
      function u() {
        let e = (0, l.PR)();
        return (0, n.e7)([o.Z], () => a(o.Z, e));
      }
    },
    352527: function (e, t, i) {
      var n,
        l,
        o,
        s,
        r = i(442837),
        a = i(570140);
      let u = !1,
        d = !1;
      class c extends (s = r.ZP.Store) {
        get keepOpen() {
          return d;
        }
        get enabled() {
          return u;
        }
      }
      (o = "SoundboardOverlayStore"),
        (l = "displayName") in (n = c)
          ? Object.defineProperty(n, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (n[l] = o),
        (t.Z = new c(a.Z, {
          SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
            if (((u = e.enabled), e.enabled)) {
              var t;
              d = null !== (t = e.keepOpen) && void 0 !== t && t;
            }
          },
        }));
    },
    129724: function (e, t, i) {
      i.d(t, {
        A: function () {
          return s;
        },
      });
      var n = i(913527),
        l = i.n(n),
        o = i(388032);
      function s(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          i =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : o.intl.string(o.t["Yl1D8/"]),
          n = l().duration(e, "seconds");
        if (n.days() > 0)
          return o.intl.formatToPlainString(t ? o.t.GBLpQ0 : o.t.k2UNz8, {
            days: n.days(),
          });
        if (n.hours() > 0)
          return o.intl.formatToPlainString(t ? o.t.rhY1Rk : o.t.xCjYxM, {
            hours: n.hours(),
          });
        if (n.minutes() > 0)
          return o.intl.formatToPlainString(t ? o.t["XIGt+f"] : o.t.iXLF9f, {
            minutes: n.minutes(),
          });
        else if (e > 0)
          return o.intl.formatToPlainString(t ? o.t.pyvjRk : o.t.geSp4O, {
            seconds: n.seconds(),
          });
        else return t ? o.intl.string(o.t["Yl1D8/"]) : i;
      }
    },
  },
]);
//# sourceMappingURL=d3961f91f741dd974925.js.map
