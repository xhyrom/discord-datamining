"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["19582"],
  {
    567409: function (t, e, i) {
      i.d(e, {
        Ns: function () {
          return f;
        },
      }),
        i(47120);
      var n = i(192379),
        l = i(392711),
        o = i.n(l),
        r = i(876215),
        s = i(442837),
        a = i(146282),
        u = i(26033),
        d = i(897674),
        c = i(709054),
        h = i(206583);
      let E = new Set([r.s.PLAYED_GAME, r.s.LAUNCHED_ACTIVITY]),
        p = (t) => E.has(t.content_type);
      function f(t) {
        let { entries: e } = (function () {
          let t = (0, d.Z)(h.YN.GAME_PROFILE_FEED),
            e = (0, d.Z)(h.YN.GLOBAL_FEED),
            i = n.useMemo(
              () =>
                o()(e)
                  .unionBy(t, (t) => t.id)
                  .filter(p)
                  .orderBy((t) => c.default.extractTimestamp(t.id), "desc")
                  .uniqWith(
                    (t, e) =>
                      t.author_id === e.author_id &&
                      t.extra.application_id === e.extra.application_id,
                  )
                  .value(),
              [t, e],
            );
          return {
            requestId: (0, s.e7)([a.Z], () =>
              a.Z.getFeedRequestId(h.YN.GAME_PROFILE_FEED),
            ),
            entries: i,
          };
        })();
        return n.useMemo(
          () =>
            null == e
              ? void 0
              : e.filter(
                  (e) =>
                    ((0, u.dX)(e) || (0, u.Mq)(e)) &&
                    e.extra.application_id === t,
                ),
          [e, t],
        );
      }
    },
    552282: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return n;
        },
      });
      function n(t) {
        var e;
        return null != t
          ? { id: t.id, name: null !== (e = t.name) && void 0 !== e ? e : "" }
          : null;
      }
    },
    681603: function (t, e, i) {
      var n = i(192379),
        l = i(149765),
        o = i(442837),
        r = i(367907),
        s = i(731429),
        a = i(188471),
        u = i(318885),
        d = i(592125),
        c = i(984933),
        h = i(271383),
        E = i(430824),
        p = i(496675),
        f = i(944486),
        S = i(914010),
        _ = i(594174),
        g = i(237997),
        m = i(145597),
        v = i(981631);
      class I extends n.Component {
        componentDidUpdate(t) {
          if (this.props.locked) return null;
          let {
            selectedGuild: e,
            selectedChannel: i,
            isMemberPending: n,
            hasPreviewEnabled: l,
            postableChannelCount: o,
          } = this.props;
          if (
            (null != e &&
              (e !== t.selectedGuild || (n && !t.isMemberPending)) &&
              ((0, u.Q)(v.rMx.GUILD_VIEWED, {
                ...(n ? { is_pending: n, preview_enabled: l } : {}),
                postable_channels: o,
              }),
              (0, a.a)(v.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: e })),
            null != i && i !== t.selectedChannel)
          ) {
            let t = (0, s.K)(d.Z.getChannel(i), !0);
            (0, u.Q)(v.rMx.CHANNEL_OPENED, { ...t, ...(0, r.$H)(i) }),
              (0, a.a)(v.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: i });
          }
        }
        render() {
          return null;
        }
      }
      e.Z = o.ZP.connectStores(
        [S.Z, f.Z, E.Z, _.default, g.Z, c.ZP, p.Z, h.ZP],
        () => {
          var t, e, i;
          let n = S.Z.getGuildId(),
            o = f.Z.getChannelId(n),
            r = E.Z.getGuild(n),
            s = _.default.getCurrentUser(),
            a =
              null !==
                (e = c.ZP.getChannels(null == r ? void 0 : r.id)[c.sH]) &&
              void 0 !== e
                ? e
                : [],
            u =
              a.length > 0
                ? a.filter((t) => {
                    let { channel: e } = t;
                    return p.Z.can(
                      l.$e(v.Plq.SEND_MESSAGES, v.Plq.VIEW_CHANNEL),
                      e,
                    );
                  }).length
                : 0,
            d =
              null != s &&
              null != n &&
              null !==
                (i =
                  null === (t = h.ZP.getMember(n, s.id)) || void 0 === t
                    ? void 0
                    : t.isPending) &&
              void 0 !== i &&
              i;
          return {
            selectedGuild: n,
            selectedChannel: o,
            locked: g.Z.isLocked((0, m.QF)()),
            hasPreviewEnabled:
              null == r ? void 0 : r.features.has(v.oNc.PREVIEW_ENABLED),
            isMemberPending: d,
            postableChannelCount: u,
          };
        },
      )(I);
    },
    906037: function (t, e, i) {
      i.d(e, {
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
      var n = i(570140),
        l = i(449224);
      function o(t) {
        return (!t.isPreviewingInGame && !t.locked) || t.pinned;
      }
      function r(t, e, i) {
        (t.locked !== e.locked ||
          t.pinned !== e.pinned ||
          i(t) !== i(e) ||
          o(t) !== o(e)) &&
          s(e, i(e));
      }
      function s(t, e) {
        var i, r;
        let s = o(t),
          a = l.Z.getGame();
        n.Z.dispatch({
          type: "OVERLAY_WIDGET_CHANGED",
          gameName:
            null !== (i = null == a ? void 0 : a.name) && void 0 !== i
              ? i
              : null,
          gameId:
            null !== (r = null == a ? void 0 : a.id) && void 0 !== r ? r : null,
          widgetType: t.widget,
          visible: s && e,
          locked: t.locked,
          pinned: t.pinned,
        });
      }
    },
    603618: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return U;
        },
        i: function () {
          return P;
        },
      }),
        i(47120),
        i(789020);
      var n = i(200651),
        l = i(192379),
        o = i(512722),
        r = i.n(o),
        s = i(442837),
        a = i(481060),
        u = i(278323),
        d = i(24124),
        c = i(493683),
        h = i(13245),
        E = i(99690),
        p = i(620662),
        f = i(835473),
        S = i(194082),
        _ = i(297781),
        g = i(656709),
        m = i(567409),
        v = i(703656),
        I = i(409057),
        Z = i(199902),
        O = i(592125),
        C = i(293273),
        N = i(158776),
        y = i(594174),
        T = i(630388),
        R = i(5192),
        x = i(358085),
        A = i(998502),
        M = i(388627),
        D = i(981631),
        L = i(388032),
        w = i(13663);
      function z(t) {
        let { entry: e, currentUserActivity: i, idx: o } = t,
          d = (0, s.e7)([y.default], () => y.default.getUser(e.author_id)),
          [E, f] = l.useState("unsent"),
          [S, _] = l.useState(!1);
        l.useEffect(() => {
          if ("sent" === E) {
            let t = setTimeout(() => _(!0), 2e3);
            return () => clearTimeout(t);
          }
        }, [E]);
        let m = null != i && (0, p.Z)(i, D.xjy.JOIN),
          I = async (t) => {
            if (null != d && "unsent" === E) {
              t.stopPropagation();
              try {
                if ((f("sending"), m))
                  await u.Z.sendActivityInviteUser({
                    type: D.mFx.JOIN,
                    userId: d.id,
                    activity: i,
                    location: D.Sbl.UNLOCKED_OVERLAY,
                  });
                else {
                  var n;
                  let t = await c.Z.getOrEnsurePrivateChannel(d.id),
                    i =
                      null !== (n = O.Z.getChannel(t)) && void 0 !== n
                        ? n
                        : null;
                  r()(null != i, "Send channel must be defined"),
                    (0, v.uL)(D.Z5c.CHANNEL(i.guild_id, i.id)),
                    await (0, g.p)({
                      channel: i,
                      content: L.intl.string(L.t.DwAcMz),
                      entry: e,
                      whenReady: !0,
                    });
                }
                h.Z.track(D.rMx.OVERLAY_GAME_INVITE_SENT, {
                  target_user_id: d.id,
                  target_content_entry_id: e.id,
                  target_index: o,
                }),
                  f("sent");
              } catch (t) {
                f("unsent");
              }
            }
          },
          Z = async () => {
            var t;
            if (null == d) return;
            let e = await c.Z.getOrEnsurePrivateChannel(d.id),
              i = null !== (t = O.Z.getChannel(e)) && void 0 !== t ? t : null;
            r()(null != i, "Send channel must be defined"),
              (0, v.uL)(D.Z5c.CHANNEL(i.guild_id, i.id)),
              x.isPlatformEmbedded && A.ZP.focus();
          },
          C = m ? L.intl.string(L.t["3fRyS0"]) : L.intl.string(L.t.y9eo7e),
          N = m
            ? (0, n.jsx)(a.GroupPlusIcon, { color: "currentColor", size: "sm" })
            : (0, n.jsx)(a.SendMessageIcon, {
                color: "currentColor",
                size: "sm",
              });
        return (0, n.jsx)(a.Tooltip, {
          text: C,
          "aria-label": C,
          children: (t) =>
            (0, n.jsx)(a.Button, {
              ...t,
              submitting: "sending" === E,
              onClick: S ? Z : I,
              className: w.inviteButton,
              wrapperClassName: w.inviteButtonWrapper,
              innerClassName: w.inviteButtonInner,
              color: a.ButtonColors.TRANSPARENT,
              look: a.ButtonLooks.FILLED,
              size: a.ButtonSizes.ICON,
              grow: !1,
              children:
                "sent" === E
                  ? S
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
      function k(t) {
        var e;
        let { entry: i, currentUserActivity: o } = t,
          r = (0, s.e7)([y.default], () => y.default.getUser(i.author_id)),
          d =
            null !== (e = null == o ? void 0 : o.application_id) && void 0 !== e
              ? e
              : i.extra.application_id,
          c = (0, s.e7)(
            [N.Z],
            () => (null != r ? N.Z.getApplicationActivity(r.id, d) : null),
            [d, r],
          ),
          [h, E] = l.useState("unsent");
        if (!(null != c && (0, p.Z)(c, D.xjy.JOIN))) return null;
        let f = async (t) => {
            if (null != r && "unsent" === h) {
              t.stopPropagation();
              try {
                E("sending"),
                  await u.Z.sendActivityInviteUser({
                    type: D.mFx.JOIN_REQUEST,
                    userId: r.id,
                    activity: c,
                    location: D.Sbl.UNLOCKED_OVERLAY,
                  }),
                  E("sent");
              } catch (t) {
                E("unsent");
              }
            }
          },
          S = L.intl.string(L.t.OKsSCQ);
        return (0, n.jsx)(a.Tooltip, {
          text: S,
          "aria-label": S,
          children: (t) =>
            (0, n.jsx)(a.Button, {
              ...t,
              submitting: "sending" === h,
              onClick: f,
              className: w.inviteButton,
              wrapperClassName: w.inviteButtonWrapper,
              innerClassName: w.inviteButtonInner,
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
      function b(t) {
        let { entry: e, currentUserActivity: i, idx: l } = t,
          o = (0, s.e7)([y.default], () => y.default.getUser(e.author_id)),
          r = (0, s.e7)(
            [Z.Z],
            () => (null != o ? Z.Z.getAnyStreamForUser(o.id) : null),
            [o],
          ),
          { isMobileOnline: u, status: d } = (0, s.cj)(
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
              className: w.row,
              children: [
                (0, n.jsx)(E.Z, {
                  className: w.avatar,
                  user: o,
                  isMobile: u,
                  status: d,
                }),
                (0, n.jsxs)("div", {
                  className: w.details,
                  children: [
                    (0, n.jsxs)("div", {
                      className: w.usernameWrapper,
                      children: [
                        (0, n.jsx)(a.Text, {
                          className: w.username,
                          variant: "text-md/medium",
                          color: "header-primary",
                          children: R.ZP.getName(void 0, void 0, o),
                        }),
                        null != r &&
                          (0, n.jsx)(S.ZP, { className: w.liveIndicator }),
                      ],
                    }),
                    (0, n.jsx)(_.Gk, {
                      location: _.Gt.OVERLAY,
                      className: w.badgesContainer,
                      children: [_.OV, _.wO, _.f, _.v1, _.pQ].map((t, i) =>
                        (0, n.jsx)(t, { entry: e }, "entry-".concat(i)),
                      ),
                    }),
                  ],
                }),
                (0, n.jsx)(k, { entry: e, currentUserActivity: i, idx: l }),
                (0, n.jsx)(z, { entry: e, currentUserActivity: i, idx: l }),
              ],
            });
      }
      function P(t) {
        let { entries: e, currentUserActivity: i } = t,
          l = e.slice(0, 5);
        return (0, n.jsx)(n.Fragment, {
          children: l.map((t, e) =>
            (0, n.jsx)(b, { idx: e, entry: t, currentUserActivity: i }, e),
          ),
        });
      }
      function U() {
        let t = (0, M.II)(),
          e = null == t ? void 0 : t.id,
          i = null == t ? void 0 : t.altId,
          l = (0, m.Ns)(e),
          o = (0, s.e7)([y.default], () => y.default.getCurrentUser()),
          r = (0, s.e7)([C.Z], () =>
            null != i
              ? C.Z.getApplicationActivity(i)
              : null != e
                ? C.Z.getApplicationActivity(e)
                : null,
          ),
          u = null != r && (0, p.Z)(r, D.xjy.JOIN),
          c = (0, f.q)(null == r ? void 0 : r.application_id),
          h = null != c && (0, T.yE)(c.flags, D.udG.EMBEDDED);
        return 0 === l.length && null == r
          ? null
          : (0, n.jsxs)("div", {
              className: w.container,
              children: [
                null != r && null != o
                  ? (0, n.jsx)(I.Z, {
                      className: w.activityCard,
                      activity: r,
                      user: o,
                      currentUser: o,
                    })
                  : null,
                u && !h
                  ? (0, n.jsx)(a.Button, {
                      className: w.inviteFriendsButton,
                      onClick: () => (0, d.h7)(r, !1, D.IlC.POPOUT),
                      size: a.ButtonSizes.SMALL,
                      color: a.ButtonColors.PRIMARY,
                      children: L.intl.string(L.t["6Qgren"]),
                    })
                  : null,
                (0, n.jsx)(P, { entries: l, currentUserActivity: r }),
              ],
            });
      }
    },
    353038: function (t, e, i) {
      i.d(e, {
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
        r = i(200651),
        s = i(192379),
        a = i(120356),
        u = i.n(a),
        d = i(642128),
        c = i(902704),
        h = i(585483),
        E = i(434529),
        p = i(981631),
        f = i(706446);
      function S(t, e, i) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = i),
          t
        );
      }
      let _ = (t, e, i, n) => Math.pow(t - i, 2) + Math.pow(e - n, 2);
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
      function m(t, e, i) {
        let { width: n, height: l } = t;
        return {
          width: "auto" === n ? "auto" : Math.max(e, n),
          height: "auto" === l ? "auto" : Math.max(i, l),
        };
      }
      function v(t) {
        let { top: e, left: i, bottom: n, right: l } = t;
        return (
          null == i && null == l && (i = 0),
          null != i && null != l && (l = void 0),
          null == e && null == n && (e = 0),
          null != e && null != n && (n = void 0),
          { top: e, left: i, bottom: n, right: l }
        );
      }
      function I(t) {
        return "auto" === t || null == t ? "auto" : "".concat(t, "px");
      }
      function Z(t, e) {
        let i = 0,
          n = 0;
        return (
          (i = "auto" === e.width ? (null != t ? t.clientWidth : 0) : e.width),
          {
            width: i,
            height: (n =
              "auto" === e.height
                ? null != t
                  ? t.clientHeight
                  : 0
                : e.height),
          }
        );
      }
      function O(t, e) {
        let { top: i, left: n, bottom: l, right: o } = e;
        switch (t) {
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
            throw Error("getOrientedCoords: Invalid orientation: ".concat(t));
        }
      }
      function C(t) {
        let { computedSize: e } = t;
        return e;
      }
      class N extends (l = s.Component) {
        shouldComponentUpdate(t, e) {
          return (
            !(0, c.Z)(e, this.state) ||
            !(0, c.Z)(t, this.props, [
              "anchor",
              "size",
              "minSize",
              "container",
            ]) ||
            !(0, c.Z)(t.anchor, this.props.anchor) ||
            !(0, c.Z)(t.size, this.props.size) ||
            !(0, c.Z)(t.minSize, this.props.minSize) ||
            !(0, c.Z)(t.container, this.props.container)
          );
        }
        componentDidMount() {
          this.setDOMPositions(v(this.props.anchor)),
            this.setDOMSize(
              m(
                this.props.size,
                this.props.minSize.width,
                this.props.minSize.height,
              ),
            ),
            h.S.subscribe(p.CkL.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI);
        }
        componentDidUpdate(t, e) {
          null == e.operation &&
            (!(0, c.Z)(this.props.anchor, t.anchor) &&
              this.setDOMPositions(v(this.props.anchor)),
            !(0, c.Z)(this.props.size, t.size) &&
              this.setDOMSize(
                m(
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
        handleResizeMouseDown(t, e) {
          let { clientX: i, clientY: n } = t;
          t.stopPropagation(), this.handleOperationStart(e, i, n);
        }
        handleDragMove(t, e) {
          let {
            ref: { current: i },
            props: {
              id: n,
              container: { maxX: l, maxY: o, minX: r, minY: s },
              onDragStart: a,
              onDrag: u,
              snapOrientation: d = !0,
            },
            dragState: { offsetX: c, offsetY: h },
            state: { operationStarted: p },
          } = this;
          if (null == i) return null;
          (t = Math.max(Math.min(l, t), r)), (e = Math.max(Math.min(o, e), s));
          let { width: f, height: S } = Z(i, this.size),
            _ = e - h,
            g = t - c,
            m = (0, E.ou)(
              (0, E.PY)(
                { top: _, left: g, bottom: void 0, right: void 0 },
                l,
                o,
                f,
                S,
              ),
            ),
            v = d ? (0, E.R)(m) : O("RESIZE_SOUTH_EAST", m);
          this.setDOMPositions(v),
            this.setState(
              {
                operationStarted: !0,
                anchorTopOverride: null != v.top,
                anchorLeftOverride: null != v.left,
              },
              () => {
                !p && null != a && a(),
                  null != u && u(n, "MOVE", this.anchor, this.size);
              },
            );
        }
        handleResizeMove(t, e) {
          let {
              props: {
                id: i,
                minSize: n,
                container: { maxX: l, maxY: o, minX: r, minY: s },
                onDragStart: a,
                onDrag: u,
                resizeValidation: d = C,
              },
              state: { operation: h, operationStarted: p },
            } = this,
            { startX: f, startY: S } = this.dragState,
            _ = 0,
            g = 0;
          if (null == h) return;
          switch (
            ((t = Math.max(Math.min(l, t), r)),
            (e = Math.max(Math.min(o, e), s)),
            h)
          ) {
            case "RESIZE_EAST":
            case "RESIZE_SOUTH_EAST":
            case "RESIZE_NORTH_EAST":
              _ -= f - t;
              break;
            case "RESIZE_WEST":
            case "RESIZE_SOUTH_WEST":
            case "RESIZE_NORTH_WEST":
              _ += f - t;
          }
          switch (h) {
            case "RESIZE_SOUTH":
            case "RESIZE_SOUTH_WEST":
            case "RESIZE_SOUTH_EAST":
              g -= S - e;
              break;
            case "RESIZE_NORTH":
            case "RESIZE_NORTH_WEST":
            case "RESIZE_NORTH_EAST":
              g += S - e;
          }
          let m = d({
              padding: 8,
              borderWidth: 2,
              operation: h,
              computedSize: {
                width: Math.max(this.dragState.offsetWidth + _, n.width),
                height: Math.max(this.dragState.offsetHeight + g, n.height),
              },
              originSize: {
                width: this.dragState.offsetWidth,
                height: this.dragState.offsetHeight,
              },
              containerSpecs: this.props.container,
              orientedPosition: this.dragState.dragOrientedCoords,
            }),
            v = (0, E.BL)(
              (0, E.ou)(
                (0, E.PY)(
                  this.dragState.dragOrientedCoords,
                  l,
                  o,
                  m.width,
                  m.height,
                ),
              ),
              this.dragState.dragOrientedCoords,
            );
          this.setDOMSize(m, !0),
            !(0, c.Z)(v, this.dragState.dragOrientedCoords) &&
              ((this.dragState.dragOrientedCoords = v),
              this.setDOMPositions(this.dragState.dragOrientedCoords)),
            !p && (null != a && a(), this.setState({ operationStarted: !0 })),
            null != u && u(i, h, this.anchor, this.size);
        }
        setDOMPositions(t) {
          let { top: e, left: i, bottom: n, right: l } = t,
            { current: o } = this.ref;
          if (
            ((this.anchor = { top: e, left: i, bottom: n, right: l }),
            null != o)
          )
            (o.style.top = I(e)),
              (o.style.bottom = I(n)),
              (o.style.left = I(i)),
              (o.style.right = I(l));
        }
        setDOMSize(t) {
          let { width: e, height: i } = t,
            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { current: l } = this.ref;
          if (
            ((e = "auto" !== this.size.width || n ? e : "auto"),
            (i = "auto" !== this.size.height || n ? i : "auto"),
            (this.size = { width: e, height: i }),
            null != l)
          )
            (l.style.width = I(e)), (l.style.height = I(i));
        }
        renderResizeHandles() {
          let { resizeY: t, resizeX: e, active: i } = this.props;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              t
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("div", {
                        className: u()(f.resizeNorth, {
                          [f.resizeNSCursor]: i,
                        }),
                        onMouseDown: (t) =>
                          this.handleResizeMouseDown(t, "RESIZE_NORTH"),
                      }),
                      (0, r.jsx)("div", {
                        className: u()(f.resizeSouth, {
                          [f.resizeNSCursor]: i,
                        }),
                        onMouseDown: (t) =>
                          this.handleResizeMouseDown(t, "RESIZE_SOUTH"),
                      }),
                    ],
                  })
                : null,
              e
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("div", {
                        className: u()(f.resizeEast, { [f.resizeEWCursor]: i }),
                        onMouseDown: (t) =>
                          this.handleResizeMouseDown(t, "RESIZE_EAST"),
                      }),
                      (0, r.jsx)("div", {
                        className: u()(f.resizeWest, { [f.resizeEWCursor]: i }),
                        onMouseDown: (t) =>
                          this.handleResizeMouseDown(t, "RESIZE_WEST"),
                      }),
                    ],
                  })
                : null,
              e && t
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("div", {
                        className: u()(f.resizeNorthWest, {
                          [f.resizeNWSECursor]: i,
                        }),
                        onMouseDown: (t) =>
                          this.handleResizeMouseDown(t, "RESIZE_NORTH_WEST"),
                      }),
                      (0, r.jsx)("div", {
                        className: u()(f.resizeNorthEast, {
                          [f.resizeNESWCursor]: i,
                        }),
                        onMouseDown: (t) =>
                          this.handleResizeMouseDown(t, "RESIZE_NORTH_EAST"),
                      }),
                      (0, r.jsx)("div", {
                        className: u()(f.resizeSouthWest, {
                          [f.resizeNESWCursor]: i,
                        }),
                        onMouseDown: (t) =>
                          this.handleResizeMouseDown(t, "RESIZE_SOUTH_WEST"),
                      }),
                      (0, r.jsx)("div", {
                        className: u()(f.resizeSouthEast, {
                          [f.resizeNWSECursor]: i,
                        }),
                        onMouseDown: (t) =>
                          this.handleResizeMouseDown(t, "RESIZE_SOUTH_EAST"),
                      }),
                    ],
                  })
                : null,
            ],
          });
        }
        renderExtras() {
          let {
              props: { renderExtras: t, anchor: e },
              setLockExtras: i,
            } = this,
            n = null == t ? void 0 : t(i);
          return null != n
            ? (0, r.jsx)("div", {
                className: u()({
                  [f.extras]: !0,
                  [f.extrasBottomOriented]: null != e.bottom,
                  [f.extrasRightOriented]: null != e.right,
                }),
                children: n,
              })
            : null;
        }
        getInlineStyles() {
          let {
            props: {
              hidden: t,
              style: e,
              minSize: i,
              padding: n = 8,
              borderWidth: l = 2,
              borderRadius: o = 12,
            },
            state: { operation: r },
          } = this;
          return {
            ...e,
            minWidth: i.width,
            minHeight: i.height,
            borderWidth: l,
            padding: n,
            borderRadius: o + l + n,
            zIndex: null != r ? 1e3 : void 0,
            visibility: t ? "hidden" : void 0,
          };
        }
        renderChildren() {
          let {
            props: {
              children: t,
              hidden: e,
              padding: i = 8,
              borderWidth: n = 2,
              locked: l,
            },
            size: o,
            anchor: r,
            setLockExtras: s,
            state: { anchorTopOverride: a, anchorLeftOverride: u },
          } = this;
          return t({
            dragStart: this.handleOperationStart,
            dragOperation: this.state.operation,
            anchorTop: null != a ? a : null != r.top,
            anchorLeft: null != u ? u : null != r.left,
            size: o,
            padding: i,
            borderWidth: n,
            setLockExtras: s,
            locked: l,
            hidden: e,
          });
        }
        render() {
          let {
            props: { onClick: t, id: e, locked: i, className: n },
            state: { operationStarted: l, lockExtras: o },
          } = this;
          return (0, r.jsxs)(d.animated.div, {
            ref: this.ref,
            style: this.getInlineStyles(),
            className: u()(
              {
                [f.wrapper]: !0,
                [f.operation]: l,
                [f.unlocked]: !i,
                [f.lockExtras]: o,
              },
              n,
            ),
            onMouseDown: this.handleMouseDown,
            onClick: null != t ? () => t(e) : void 0,
            children: [
              this.renderChildren(),
              this.renderResizeHandles(),
              this.renderExtras(),
            ],
          });
        }
        constructor(t) {
          super(t),
            S(this, "anchor", void 0),
            S(this, "size", void 0),
            S(this, "ref", s.createRef()),
            S(this, "dragState", {
              startX: 0,
              startY: 0,
              offsetX: 0,
              offsetY: 0,
              offsetWidth: 0,
              offsetHeight: 0,
              dragOrientedCoords: { top: 0, left: 0 },
            }),
            S(this, "state", {
              lockExtras: !0,
              operation: null,
              operationStarted: !1,
              anchorTopOverride: void 0,
              anchorLeftOverride: void 0,
            }),
            S(this, "handleShowUI", (t) => {
              let { show: e } = t;
              this.setLockExtras(e);
            }),
            S(this, "handleMouseDown", (t) => {
              t.stopPropagation();
              let { dragAnywhere: e } = this.props,
                { current: i } = this.ref;
              null != i &&
                t.button === p.AeJ.PRIMARY &&
                e &&
                this.handleOperationStart("MOVE", t.clientX, t.clientY);
            }),
            S(this, "handleMouseMove", (t) => {
              t.preventDefault(), t.stopPropagation();
              let { clientX: e, clientY: i } = t,
                {
                  dragState: { startX: n, startY: l },
                  state: { operation: o, operationStarted: r },
                } = this;
              if (!(null == o || (!r && 3 > _(n, l, e, i))))
                "MOVE" === o
                  ? this.handleDragMove(e, i)
                  : g.has(o) && this.handleResizeMove(e, i);
            }),
            S(this, "handleOperationStart", (t, e, i) => {
              let {
                ref: { current: n },
                props: {
                  targetWindow: l,
                  active: o,
                  container: { maxX: r, maxY: s },
                },
              } = this;
              if (null == n || !o) return;
              let { width: a, height: u } = Z(n, this.size),
                d = (0, E.PY)(this.anchor, r, s, a, u);
              if ("MOVE" === t) {
                let { x: t, y: n } = (function (t) {
                  let { top: e, left: i } = t;
                  return { x: i, y: e };
                })(d);
                this.dragState = {
                  ...this.dragState,
                  startX: e,
                  startY: i,
                  offsetX: e - t,
                  offsetY: i - n,
                };
              } else {
                let n = O(t, d);
                this.setDOMPositions(n),
                  (this.dragState = {
                    ...this.dragState,
                    startX: e,
                    startY: i,
                    offsetWidth: a,
                    offsetHeight: u,
                    dragOrientedCoords: n,
                  });
              }
              this.setState({ operation: t, operationStarted: !1 }, () => {
                l.addEventListener("mousemove", this.handleMouseMove),
                  l.addEventListener("mouseup", this.handleOperationEnd);
              });
            }),
            S(this, "handleOperationEnd", () => {
              let { operation: t, operationStarted: e } = this.state,
                { targetWindow: i, onDragEnd: n } = this.props;
              i.removeEventListener("mousemove", this.handleMouseMove),
                i.removeEventListener("mouseup", this.handleOperationEnd);
              let l = e
                ? () => {
                    let { onUpdate: e, id: i } = this.props;
                    e(
                      t,
                      i,
                      this.anchor,
                      this.size,
                      Z(this.ref.current, this.size),
                    );
                  }
                : void 0;
              if (e) {
                let { maxX: t, maxY: e } = this.props.container,
                  { width: i, height: l } = Z(this.ref.current, this.size),
                  o = (0, E.PY)(this.anchor, t, e, i, l),
                  r = (0, E.R)(o);
                this.setDOMPositions(r),
                  this.setDOMSize({ width: i, height: l }),
                  null != n && n();
              }
              this.setState({ operation: null, operationStarted: !1 }, l);
            }),
            S(this, "setLockExtras", (t) => {
              this.setState({ lockExtras: t });
            }),
            (this.anchor = v(t.anchor)),
            (this.size = m(t.size, t.minSize.width, t.minSize.height));
        }
      }
      S(N, "Operations", n);
    },
    915614: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return u;
        },
      });
      var n = i(200651);
      i(192379);
      var l = i(120356),
        o = i.n(l),
        r = i(481060),
        s = i(809357),
        a = i(163752);
      function u(t) {
        let { onClick: e, keybind: i, className: l, IconComponent: u } = t,
          d = (0, s.o)();
        return (0, n.jsxs)("div", {
          className: o()(a.buttonContainer, l),
          children: [
            (0, n.jsx)(r.Clickable, {
              className: a.button,
              onClick: e,
              "aria-hidden": !0,
              children: (0, n.jsx)(u, {
                size: "md",
                color: "currentColor",
                "aria-hidden": !0,
              }),
            }),
            null != i && d
              ? (0, n.jsx)(r.Text, {
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
    319414: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return E;
        },
      }),
        i(47120);
      var n = i(200651);
      i(192379);
      var l = i(442837),
        o = i(352527),
        r = i(183584),
        s = i(487029),
        a = i(592125),
        u = i(944486),
        d = i(554174),
        c = i(710111),
        h = i(714902);
      function E() {
        let [t, e] = (0, l.Wu)([o.Z], () => [o.Z.enabled, o.Z.keepOpen]),
          i = (0, l.e7)([u.Z], () => u.Z.getVoiceChannelId()),
          E = (0, l.e7)([a.Z], () => a.Z.getChannel(i), [i]),
          p = null == E ? void 0 : E.getGuildId();
        return t && null != E
          ? (0, n.jsx)("div", {
              className: h.container,
              children: (0, n.jsx)(s.Z, {
                width: c.FW.width,
                height: c.FW.height,
                guildId: p,
                channel: E,
                keepOpen: e,
                onClose: function () {
                  let t = (0, d.Z)();
                  null != t && (0, r.oZ)(t);
                },
                analyticsSource: "overlay",
              }),
            })
          : null;
      }
    },
    892127: function (t, e, i) {
      var n = i(200651),
        l = i(192379),
        o = i(120356),
        r = i.n(o),
        s = i(442837),
        a = i(765250),
        u = i(13245),
        d = i(355863),
        c = i(237997),
        h = i(451478),
        E = i(434529),
        p = i(145597),
        f = i(830917),
        S = i(353038),
        _ = i(306381),
        g = i(610394),
        m = i(561064),
        v = i(981631),
        I = i(152397);
      e.Z = l.memo(function (t) {
        let {
            widget: e,
            renderWidget: i,
            renderTitle: o,
            renderButtons: Z,
            resizeValidation: O,
            className: C,
            dragContainerClassName: N,
          } = t,
          y = d.Z.getWidgetConfig(e.type),
          T = (0, s.e7)([c.Z], () => c.Z.isLocked((0, p.QF)())),
          R = (0, m.Z)(),
          x = (0, s.e7)([h.Z], () => h.Z.windowSize((0, f.ZY)(R))),
          A = l.useCallback((t, e, i, n, l) => {
            let o = h.Z.windowSize((0, f.ZY)((0, m.i)())),
              r = (0, E.jL)(i, o),
              s = (0, E.Ox)(n, o);
            (0, a.Os)(e), (0, a.nv)({ widgetId: e, anchor: r, size: s });
            let c = t === S.B.MOVE,
              p = (0, E.PY)(i, o.width, o.height, l.width, l.height);
            u.Z.track(v.rMx.OVERLAY_LAYOUT_UPDATED, {
              was_resized: !c,
              was_dragged: c,
              widget_type: d.Z.getWidgetType(e),
              window_width: o.width,
              window_height: o.height,
              widget_width: l.width,
              widget_height: l.height,
              widget_left: p.left,
              widget_top: p.top,
            });
          }, []),
          M = l.useCallback((t) => {
            (0, a.Os)(t);
          }, []),
          { id: D, pinned: L, zIndex: w, size: z, anchor: k } = e,
          b = (0, E.w_)(z, x),
          P = (0, E.KR)(k, x),
          { minSize: U, resizeX: j, resizeY: H, dragAnywhere: V } = y,
          W = L || !T,
          F = l.useMemo(
            () => ({ minX: 0, minY: 0, maxX: x.width, maxY: x.height }),
            [x],
          ),
          Y = l.useCallback(
            (t) =>
              i({
                ...t,
                widget: e,
                dragging: null != t.dragOperation,
                className: C,
              }),
            [e, i, C],
          ),
          G = l.useCallback(
            (t) =>
              null != o || null != Z
                ? (0, n.jsxs)("div", {
                    className: I.extrasContainer,
                    children: [
                      null == o ? void 0 : o(e),
                      null == Z ? void 0 : Z(e, t),
                    ],
                  })
                : null,
            [e, o, Z],
          ),
          B = (0, s.e7)([g.ZP], () => g.ZP.hasRenderDebugMode(_.G.WidgetAreas)),
          Q = l.useMemo(() => {
            if (null != O) return (t) => O({ ...t, widget: e });
          }, [O, e]);
        return (0, n.jsx)(S.Z, {
          className: r()(
            {
              [I.debug]: B,
              [I.debugUnpinned]: B && !L,
              [I.debugPinned]: B && L,
            },
            N,
          ),
          id: D,
          size: b,
          anchor: P,
          container: F,
          minSize: U,
          hidden: !W,
          locked: T,
          resizeX: j,
          resizeY: H,
          style: { zIndex: w },
          dragAnywhere: V,
          active: !T,
          onUpdate: A,
          onClick: M,
          targetWindow: R,
          renderExtras: G,
          resizeValidation: Q,
          children: Y,
        });
      });
    },
    516542: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return S;
        },
      }),
        i(47120);
      var n = i(200651),
        l = i(192379),
        o = i(904245),
        r = i(13245),
        s = i(655687),
        a = i(541716),
        u = i(752305),
        d = i(893718),
        c = i(957730),
        h = i(849522),
        E = i(145597),
        p = i(981631),
        f = i(640784);
      function S(t) {
        let { id: e, channel: i, onSend: S } = t,
          _ = (0, h.Z)(),
          { placeholder: g, accessibilityLabel: m } = (0, s.Z)({ channel: i }),
          [v, I] = l.useState(() => (0, u.H2)()),
          { textValue: Z, richValue: O } = v,
          [C, N] = l.useState(!1),
          y = l.useCallback(() => N(!0), []),
          T = l.useCallback(() => N(!1), []),
          R = l.useCallback((t, e, i) => {
            I({ textValue: e, richValue: i });
          }, []),
          x = l.useCallback(
            () =>
              Z.length > _
                ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                : (o.Z.sendMessage(i.id, c.ZP.parse(i, Z), !1),
                  r.Z.setInputLocked(!0, (0, E.QF)()),
                  r.Z.updateNotificationStatus(e, p._1z.DISMISSED),
                  null == S || S(Z),
                  Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })),
            [Z, _, i, e, S],
          );
        return (0, n.jsx)(d.Z, {
          innerClassName: f.textArea,
          onChange: R,
          placeholder: g,
          accessibilityLabel: m,
          channel: i,
          textValue: Z,
          richValue: O,
          type: a.Ie.OVERLAY_INLINE_REPLY,
          onBlur: T,
          onFocus: y,
          focused: C,
          onSubmit: x,
          autoCompletePosition: "bottom",
          disableThemedBackground: !0,
        });
      }
    },
    371467: function (t, e, i) {
      i(47120), i(733860), i(653041);
      var n,
        l,
        o,
        r,
        s,
        a,
        u,
        d,
        c = i(512722),
        h = i.n(c),
        E = i(772848),
        p = i(442837),
        f = i(570140),
        S = i(13245),
        _ = i(435064),
        g = i(786761),
        m = i(695346),
        v = i(314897),
        I = i(592125),
        Z = i(375954),
        O = i(292959),
        C = i(158776),
        N = i(885110),
        y = i(246946),
        T = i(594174),
        R = i(974180),
        x = i(237997),
        A = i(70956),
        M = i(150097),
        D = i(129724),
        L = i(145597),
        w = i(371651),
        z = i(610394),
        k = i(388627),
        b = i(996050),
        P = i(609626),
        U = i(421824),
        j = i(777036),
        H = i(333727),
        V = i(585708),
        W = i(588909),
        F = i(981631),
        Y = i(388032);
      ((r = n || (n = {}))[(r.GENERIC = 0)] = "GENERIC"),
        (r[(r.TEXT = 1)] = "TEXT"),
        (r[(r.INCOMING_CALL = 2)] = "INCOMING_CALL"),
        (r[(r.NUDGE = 3)] = "NUDGE"),
        ((s = l || (l = {}))[(s.NORMAL = 0)] = "NORMAL"),
        (s[(s.HIGH = 1)] = "HIGH"),
        (s[(s.URGENT = 2)] = "URGENT");
      let G = 5 * A.Z.Millis.SECOND,
        B = 8 * A.Z.Millis.SECOND,
        Q = 30 * A.Z.Millis.SECOND,
        K = 30 * A.Z.Millis.SECOND,
        J = Object.freeze({
          timestamp: 0,
          priority: 0,
          duration: G,
          expirationExternallyManaged: !1,
          type: 0,
        }),
        X = [],
        q = !1,
        $ = [];
      function tt() {
        if (q && null == X.find((t) => t.status === F._1z.FOCUSED))
          for (let t of ((q = !1),
          (X = [...X, ...$]),
          ($ = []),
          X.length > 40 && (X.length = 40),
          X))
            t.timer.start();
      }
      function te() {
        let t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
        X.filter((t) => 1 === t.type && t.status === F._1z.TIMED_OUT)
          .sort((t, e) => e.timestamp - t.timestamp)
          .forEach((e, i) => {
            (i >= t || e.timestamp < Date.now() - Q) &&
              ti(e.id, F._1z.DISMISSED);
          });
      }
      function ti(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : F._1z.DISMISSED;
        if (null == t) return !1;
        let i = X.findIndex((e) => e.id === t);
        if (-1 === i) return !1;
        let n = X[i];
        if ((n.timer.stop(), (X = [...X]), e === F._1z.FOCUSED)) {
          let [t] = X.splice(i, 1);
          (t = { ...t, status: e }), X.unshift(t), (q = !0);
          return;
        }
        e === F._1z.DISMISSED ? X.splice(i, 1) : (X[i] = { ...n, status: e }),
          tt();
      }
      function tn(t) {
        let e = X.length,
          i =
            (X = X.filter((e) => 1 !== e.type || e.channelId !== t || !1))
              .length !== e;
        return i && tt(), i;
      }
      function tl(t) {
        let e = X.find((e) => 2 === e.type && e.channelId === t);
        return null != e ? e.id : null;
      }
      function to(t, e) {
        let i = { ...J, timestamp: Date.now(), ...e },
          n = (0, E.Z)(),
          l = !1,
          o = {
            id: n,
            status: F._1z.ACTIVE,
            timer: (function (t) {
              let e =
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
                        : e,
                    o = l ? F._1z.TIMED_OUT : F._1z.DISMISSED;
                  -1 === n &&
                    (n = setTimeout(
                      () => S.Z.updateNotificationStatus(t, o),
                      null != i ? i : G,
                    ));
                },
                stop() {
                  clearTimeout(n), (n = -1);
                },
              };
            })(n, i.expirationExternallyManaged, i.duration),
            props: {
              ...t,
              onNotificationShow: () => {
                var e;
                !l &&
                  ((l = !0),
                  null === (e = t.onNotificationShow) ||
                    void 0 === e ||
                    e.call(t, n));
              },
            },
            ...i,
          },
          r = q ? $ : [...X],
          s = r.findIndex((t) => t.priority <= i.priority);
        if ((-1 === s ? r.push(o) : r.splice(s, 0, o), r.length > 40)) {
          let t = r.pop();
          !q && t.timer.stop();
        }
        return !q && ((X = r), o.timer.start()), n;
      }
      function tr(t) {
        let { channelId: e, ringing: i } = t,
          n = tl(e);
        if (!i.includes(v.default.getId())) return ti(n);
        if (null != n) return !1;
        let l = I.Z.getChannel(e);
        if (
          null == l ||
          !l.isPrivate() ||
          N.Z.getStatus() === F.Skl.DND ||
          m.QZ.getSetting()
        )
          return !1;
        let o = X.find(
          (t) =>
            1 === t.type && t.channelId === e && t.messageType === F.uaV.CALL,
        );
        null != o && ti(o.id),
          to((0, j.Z)(l), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: l.id,
          });
      }
      class ts extends (o = p.ZP.Store) {
        initialize() {
          this.waitFor(I.Z, T.default);
        }
        getNotifications() {
          return X;
        }
      }
      (d = "OverlayNotificationsStore"),
        (u = "displayName") in (a = ts)
          ? Object.defineProperty(a, u, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[u] = d);
      let ta = new ts(f.Z, {
        OVERLAY_UPDATE_NOTIFICATION_STATUS: function (t) {
          let { notificationId: e, status: i } = t;
          ti(e, i);
        },
        OVERLAY_MOUNTED: function (t) {
          var e;
          let { nudges: i } = t;
          te(0);
          let n =
            null !== (e = z.ZP.getFocusedPID()) && void 0 !== e ? e : L.R2;
          if (w.Z.hasChangedRenderMode(n)) return;
          let l = (0, W.Z)((0, k.pL)(), i);
          null != l && to(l, { priority: 2, type: 3, duration: B });
        },
        OVERLAY_SET_INPUT_LOCKED: function (t) {
          let { locked: e } = t;
          if (e) {
            for (let t of X)
              t.status === F._1z.FOCUSED && ti(t.id, F._1z.ACTIVE);
            return !0;
          }
          for (let t of (te(), X))
            3 === t.type
              ? ti(t.id, F._1z.DISMISSED)
              : t.status === F._1z.ACTIVE &&
                !t.expirationExternallyManaged &&
                (t.timer.stop(), t.timer.start(t.expirationExternallyManaged));
          if (X.length > 0) {
            var i;
            return ti(
              null ===
                (i = X.filter((t) => 1 === t.type).sort(
                  (t, e) => e.timestamp - t.timestamp,
                )[0]) || void 0 === i
                ? void 0
                : i.id,
              F._1z.FOCUSED,
            );
          }
        },
        MESSAGE_CREATE: function (t) {
          var e, i, n, l;
          let { channelId: o, message: r } = t,
            s = I.Z.getChannel(o),
            a = T.default.getUser(
              null === (e = r.author) || void 0 === e ? void 0 : e.id,
            );
          if (null == s || null == a) return !1;
          if (
            (null === (i = r.activity) || void 0 === i ? void 0 : i.type) ===
              F.mFx.JOIN ||
            (null === (n = r.activity) || void 0 === n ? void 0 : n.type) ===
              F.mFx.JOIN_REQUEST
          ) {
            if (!(0, M.eF)(r, o, !0, !0)) return !1;
            let t = (function (t, e, i) {
              var n;
              let l, o;
              if (
                (h()(null != e.activity, "received null message activity"),
                i.id === v.default.getId())
              )
                return !1;
              let r = (0, k.pL)(),
                s =
                  null !== (n = null == r ? void 0 : r.altId) && void 0 !== n
                    ? n
                    : null == r
                      ? void 0
                      : r.id;
              if (null == r || null == s) return !1;
              switch (e.activity.type) {
                case F.mFx.JOIN:
                  if (
                    null == (l = C.Z.getApplicationActivity(i.id, s)) ||
                    null == l.party ||
                    l.party.id !== e.activity.party_id
                  )
                    return !1;
                  o = (0, b.Z)(t, e, i, r, l);
                  break;
                case F.mFx.JOIN_REQUEST:
                  if (
                    null == (l = N.Z.getApplicationActivity(s)) ||
                    null == l.party ||
                    l.party.id !== e.activity.party_id
                  )
                    return !1;
                  o = (0, H.Z)(t, i, r, l);
              }
              return (
                null != o &&
                (to(o, {
                  priority: 2,
                  expirationExternallyManaged: !0,
                  channelId: t.id,
                  duration: K,
                }),
                !0)
              );
            })(s, r, a);
            if (!1 !== t) return t;
          }
          if (
            x.Z.getTextChatNotificationMode() === F.Ypu.DISABLED ||
            y.Z.disableNotifications ||
            !(0, M.eF)(r, o)
          )
            return !1;
          let u = !O.Z.isSoundDisabled(R.Ay),
            d =
              null !== (l = Z.Z.getMessage(o, r.id)) && void 0 !== l
                ? l
                : (0, g.e5)(r);
          to((0, V.Z)(s, d, a, u), {
            type: 1,
            channelId: s.id,
            expirationExternallyManaged: !0,
            messageType: r.type,
          }),
            te();
        },
        CHANNEL_SELECT: function (t) {
          let { channelId: e } = t;
          return null != e && tn(e);
        },
        MESSAGE_ACK: function (t) {
          let { channelId: e } = t;
          return tn(e);
        },
        CALL_CREATE: tr,
        CALL_UPDATE: tr,
        CALL_DELETE: function (t) {
          let { channelId: e } = t;
          ti(tl(e));
        },
        ACTIVITY_USER_ACTION: function (t) {
          let e,
            { actionType: i, user: n, applicationId: l } = t,
            o = (0, k.pL)();
          if (
            null == o ||
            (null == o ? void 0 : o.id) == null ||
            (o.id !== l && o.altId !== l)
          )
            return !1;
          if (i === F.mFx.JOIN) e = (0, P.Z)(n, o);
          if (null == e) return !1;
          to(e, { priority: 2, type: 0 });
        },
        CLIPS_SAVE_CLIP_START: function () {
          to((0, U.f)(Y.intl.string(Y.t.NBMK9v)));
        },
        CLIPS_SAVE_CLIP: function () {
          to(
            (0, U.f)(
              Y.intl.format(Y.t.KLhk6u, {
                duration: (0, D.A)(_.Z.getSettings().clipsLength / 1e3, !0),
              }),
            ),
          );
        },
        CLIPS_SAVE_CLIP_ERROR: function () {
          to((0, U.f)(Y.intl.string(Y.t["1ZbZur"])));
        },
        STREAM_START: function (t) {
          let e = (0, U.y)();
          null != e && to(e);
        },
      });
      e.Z = ta;
    },
    620954: function (t, e, i) {
      i.d(e, {
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
        r = i(13140),
        s = i(145597),
        a = i(987650),
        u = i(981631);
      function d(t, e) {
        return {
          trackView() {
            n.Z.track(u.rMx.NOTIFICATION_VIEWED, e),
              n.Z.notificationEvent(t, a.bv.Viewed);
          },
          trackClick(i) {
            let l = o.Z.isLocked((0, s.QF)())
              ? u.Sbl.LOCKED_OVERLAY
              : u.Sbl.UNLOCKED_OVERLAY;
            n.Z.track(u.rMx.NOTIFICATION_CLICKED, {
              ...e,
              location: l,
              action_type: i,
            }),
              n.Z.notificationEvent(t, a.bv.Clicked);
          },
        };
      }
      function c() {
        let t = l.Z.getOverlayKeybind();
        return null != t ? (0, r.BB)(t.shortcut, !0).split(" + ") : ["???"];
      }
    },
    996050: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return u;
        },
      });
      var n = i(224706),
        l = i(13245),
        o = i(150097),
        r = i(620954),
        s = i(987650),
        a = i(388032);
      function u(t, e, i, u, d) {
        if (null == e.activity || null == u.id) return null;
        let c = e.activity.type,
          h = d.session_id;
        if (null == h) return null;
        let { icon: E, title: p, body: f } = (0, o.Xi)(t, e, i),
          { trackView: S, trackClick: _ } = (0, r.R)(s.n0.ActivityInvite, {
            notif_type: s.n0.ActivityInvite,
            notif_user_id: i.id,
            message_id: e.id,
            message_type: e.type,
            guild_id: t.guild_id,
            channel_id: t.id,
            channel_type: t.type,
            activity_type: c,
            activity_name: d.name,
          });
        return {
          icon: E,
          title: p,
          body: f,
          onNotificationShow: () => {
            S();
          },
          confirmText: a.intl.string(a.t.VJlc0d),
          onConfirmClick: (o, r) => {
            var s;
            n.Z.join({
              userId: i.id,
              sessionId: h,
              applicationId: null !== (s = u.altId) && void 0 !== s ? s : u.id,
              channelId: t.id,
              messageId: e.id,
            }),
              l.Z.updateNotificationStatus(r),
              _("join");
          },
          onDismissClick: () => {
            _("dismiss");
          },
        };
      }
    },
    609626: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return a;
        },
      });
      var n = i(768581),
        l = i(620954),
        o = i(987650),
        r = i(981631),
        s = i(388032);
      function a(t, e) {
        let i = t.username,
          a = s.intl.format(s.t["Yk+uYG"], { username: "" }),
          u = (0, n.ov)(t),
          d = s.intl.string(s.t.WRj1Wl),
          { trackView: c, trackClick: h } = (0, l.R)(o.n0.ActivityUserJoin, {
            notif_type: o.n0.ActivityUserJoin,
            notif_user_id: t.id,
            activity_type: r.mFx.JOIN,
            activity_name: e.name,
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
    421824: function (t, e, i) {
      i.d(e, {
        f: function () {
          return p;
        },
        y: function () {
          return E;
        },
      });
      var n = i(200651);
      i(192379);
      var l = i(481060),
        o = i(522474),
        r = i(556296),
        s = i(13140),
        a = i(44359),
        u = i(620954),
        d = i(987650),
        c = i(981631),
        h = i(388032);
      function E() {
        if (o.Z.getWindowOpen(c.KJ3.ACTIVITY_POPOUT)) return null;
        let { trackView: t, trackClick: e } = (0, u.R)(
            d.n0.ClipsReminderNotification,
            { notif_type: d.n0.ClipsReminderNotification },
          ),
          i = r.Z.getKeybindForAction(c.kg4.SAVE_CLIP);
        if (null == i) return null;
        let E = s.BB(i.shortcut, !0);
        return {
          title: h.intl.format(h.t.S5uhCA, {
            keybind: E,
            keybindHook: (t, e) =>
              (0, n.jsx)(a.Z, { keybind: E.split("+") }, e),
          }),
          icon: (0, n.jsx)(l.ClipsIcon, { size: "lg", color: "currentColor" }),
          onNotificationShow: () => {
            t();
          },
          onDismissClick: () => {
            e("dismiss");
          },
        };
      }
      function p(t) {
        let { trackView: e, trackClick: i } = (0, u.R)(d.n0.ClipsNotification, {
          notif_type: d.n0.ClipsNotification,
        });
        return {
          title: t,
          icon: (0, n.jsx)(l.ClipsIcon, { size: "lg", color: "currentColor" }),
          onNotificationShow: () => {
            e();
          },
          onDismissClick: () => {
            i("dismiss");
          },
        };
      }
    },
    777036: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return E;
        },
      });
      var n = i(26151),
        l = i(13245),
        o = i(43267),
        r = i(933557),
        s = i(699516),
        a = i(594174),
        u = i(620954),
        d = i(987650),
        c = i(981631),
        h = i(388032);
      function E(t) {
        let e = (0, r.F6)(t, a.default, s.Z),
          i = h.intl.string(h.t.ssrVzM),
          E = (0, o.x)(t),
          { trackView: p, trackClick: f } = (0, u.R)(d.n0.IncomingCall, {
            notif_type: d.n0.IncomingCall,
            notif_user_id: 1 === t.recipients.length ? t.recipients[0] : null,
            guild_id: t.guild_id,
            channel_id: t.id,
            channel_type: t.type,
          });
        return {
          icon: E,
          title: e,
          body: i,
          confirmText: h.intl.string(h.t["0D/6R0"]),
          cancelText: h.intl.string(h.t.BVN4pK),
          onNotificationShow: () => {
            p();
          },
          onConfirmClick: (e, i) => {
            f("join"),
              n.Z.call(t.id, !1, !1),
              l.Z.updateNotificationStatus(i),
              l.Z.track(c.rMx.VOICE_CHANNEL_SELECTED, {
                location: "Overlay Notificaiton",
                guild_id: null,
                channel_id: t.id,
                video_enabled: !1,
              });
          },
          onCancelClick: () => {
            f("decline"), n.Z.stopRinging(t.id);
          },
          onDismissClick: () => {
            f("dismiss");
          },
        };
      }
    },
    333727: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return h;
        },
      });
      var n = i(278323),
        l = i(13245),
        o = i(45114),
        r = i(237997),
        s = i(145597),
        a = i(620954),
        u = i(987650),
        d = i(981631),
        c = i(388032);
      function h(t, e, i, h) {
        let E = e.username,
          p = c.intl.format(c.t.VDODnp, { username: "", game: i.name }),
          f = e.getAvatarURL(t.guild_id, 80),
          { trackView: S, trackClick: _ } = (0, a.R)(u.n0.ActivityInvite, {
            notif_type: u.n0.ActivityInvite,
            notif_user_id: e.id,
            activity_type: d.mFx.JOIN_REQUEST,
            activity_name: h.name,
          });
        return {
          icon: f,
          title: E,
          body: p,
          confirmText: c.intl.string(c.t["fgP/wc"]),
          cancelText: c.intl.string(c.t.tpXzJy),
          onNotificationShow: () => {
            S();
          },
          onConfirmClick: (e, i) => {
            n.Z.sendActivityInvite({
              channelId: t.id,
              type: d.mFx.JOIN,
              activity: h,
              location: r.Z.isLocked((0, s.QF)())
                ? d.Sbl.LOCKED_OVERLAY
                : d.Sbl.UNLOCKED_OVERLAY,
            }),
              _("join"),
              l.Z.updateNotificationStatus(i);
          },
          onCancelClick: (e, i) => {
            (0, o.In)(t.id, !0, !0),
              l.Z.updateNotificationStatus(i),
              _("decline");
          },
          onDismissClick: () => {
            _("dismiss");
          },
        };
      }
    },
    585708: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return v;
        },
      });
      var n = i(200651);
      i(192379);
      var l = i(13245),
        o = i(937889),
        r = i(703656),
        s = i(974180),
        a = i(150097),
        u = i(358085),
        d = i(557177),
        c = i(998502),
        h = i(145597),
        E = i(610394),
        p = i(516542),
        f = i(380736),
        S = i(620954),
        _ = i(987650),
        g = i(981631),
        m = i(388032);
      function v(t, e, i, v) {
        var I;
        let { icon: Z, title: O, body: C } = (0, a.Xi)(t, e, i),
          { trackView: N, trackClick: y } = (0, S.R)(_.n0.TextChat, {
            notif_type: _.n0.TextChat,
            notif_user_id:
              null === (I = e.author) || void 0 === I ? void 0 : I.id,
            message_id: e.id,
            message_type: e.type,
            guild_id: t.guild_id,
            channel_id: t.id,
            channel_type: t.type,
          });
        return {
          icon: Z,
          title: O,
          body:
            e.content.length > 0
              ? (0, o.ZP)(e, {
                  noStyleAndInteraction: !0,
                  formatInline: !0,
                  hideSimpleEmbedContent: !1,
                }).content
              : C,
          hint: (t) =>
            t
              ? null
              : (0, f.QR)((0, S.P)(), m.t.ykjOAA, m.intl.string(m.t.jZkzVF)),
          maxBodyLines: 2,
          renderFooter: (e, i) =>
            e
              ? (0, n.jsx)(p.Z, { id: i, channel: t, onSend: () => y("send") })
              : null,
          onNotificationShow: () => {
            v && (0, d.GN)(s.Ay, s.yk), N();
          },
          onNotificationClick: () => {
            let i = (0, h.QF)();
            E.ZP.isInputLocked(i)
              ? (y("unlock"), l.Z.setInputLocked(!1, i))
              : (y("jump"),
                (0, r.uL)(g.Z5c.CHANNEL(t.guild_id, t.id, e.id)),
                u.isPlatformEmbedded && c.ZP.focus());
          },
          onDismissClick: () => {
            y("dismiss");
          },
        };
      }
    },
    588909: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return O;
        },
      }),
        i(47120);
      var n = i(200651);
      i(192379);
      var l = i(952265),
        o = i(24124),
        r = i(13245),
        s = i(620662),
        a = i(835473),
        u = i(442550),
        d = i(293273),
        c = i(145597),
        h = i(603618),
        E = i(380736),
        p = i(620954),
        f = i(987650),
        S = i(981631),
        _ = i(602091),
        g = i(701488),
        m = i(388032),
        v = i(176463),
        I = i(802334);
      function Z(t) {
        let { game: e } = t,
          i = (0, a.q)(e.id);
        return null == i
          ? null
          : (0, n.jsx)(u.f, { src: i.getIconURL(g.Si.LARGE), size: 40 });
      }
      function O(t, e) {
        let { trackView: a, trackClick: u } = (0, p.R)(f.n0.WelcomeNudge, {
            notif_type: f.n0.WelcomeNudge,
          }),
          g = {};
        for (let a of e)
          switch (a.type) {
            case f.nc.WELCOME: {
              let e =
                (null == t ? void 0 : t.altId) != null
                  ? d.Z.getApplicationActivity(t.altId)
                  : (null == t ? void 0 : t.id) != null
                    ? d.Z.getApplicationActivity(t.id)
                    : null;
              null != e &&
                (0, s.Z)(e, S.xjy.JOIN) &&
                ((g.cancelText = m.intl.string(m.t["6F9ivr"])),
                (g.onCancelClick = (t, i) => {
                  u("unlock"),
                    r.Z.updateNotificationStatus(i),
                    r.Z.setInputLocked(!1, (0, c.QF)()),
                    (0, o.h7)(e, !1, S.IlC.POPOUT);
                }));
              break;
            }
            case f.nc.GO_LIVE_VOICE:
            case f.nc.GO_LIVE_NON_VOICE:
              (g.confirmText = m.intl.string(m.t.U76Ft7)),
                (g.onConfirmClick = (t, e) => {
                  u("unlock"),
                    r.Z.updateNotificationStatus(e),
                    r.Z.setInputLocked(!1, (0, c.QF)()),
                    (0, l.ZD)(
                      async () => {
                        let { default: t } = await Promise.all([
                          i.e("93382"),
                          i.e("79477"),
                          i.e("90242"),
                        ]).then(i.bind(i, 60594));
                        return (e) =>
                          (0, n.jsx)(t, {
                            ...e,
                            selectSource: !1,
                            guildId:
                              a.type === f.nc.GO_LIVE_VOICE
                                ? a.voiceGuild.id
                                : void 0,
                            selectGuild: a.type === f.nc.GO_LIVE_NON_VOICE,
                            analyticsLocation: S.Sbl.OVERLAY_NUDGE,
                          });
                      },
                      { contextKey: _.u1 },
                    );
                });
              break;
            case f.nc.CONTENT_INVENTORY:
              (g.renderFooter = () =>
                (0, n.jsx)("div", {
                  className: I.container,
                  children: (0, n.jsx)(h.i, { entries: a.entries }),
                })),
                (g.onNotificationShow = () => {
                  r.Z.track(S.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                    user_ids: a.entries.map((t) => t.author_id),
                    entry_ids: a.entries.map((t) => t.id),
                  });
                });
          }
        return {
          icon:
            null != t
              ? (0, n.jsx)(Z, { game: t })
              : (0, n.jsx)("img", {
                  src: i(328756),
                  className: v.icon,
                  alt: "",
                }),
          title: null != t ? t.name : m.intl.string(m.t.pkXAeH),
          body: null,
          hint: () =>
            (0, E.QR)((0, p.P)(), m.t.e6giBQ, m.intl.string(m.t.jZkzVF)),
          onNotificationShow: (t) => {
            var e;
            a(),
              null === (e = g.onNotificationShow) ||
                void 0 === e ||
                e.call(g, t);
          },
          onNotificationClick: () => {
            u("unlock"), r.Z.setInputLocked(!1, (0, c.QF)());
          },
          onDismissClick: () => {
            u("dismiss");
          },
          ...g,
        };
      }
    },
    352527: function (t, e, i) {
      var n,
        l,
        o,
        r,
        s = i(442837),
        a = i(570140);
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
        (l = "displayName") in (n = c)
          ? Object.defineProperty(n, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (n[l] = o),
        (e.Z = new c(a.Z, {
          SOUNDBOARD_SET_OVERLAY_ENABLED: function (t) {
            if (((u = t.enabled), t.enabled)) {
              var e;
              d = null !== (e = t.keepOpen) && void 0 !== e && e;
            }
          },
        }));
    },
    129724: function (t, e, i) {
      i.d(e, {
        A: function () {
          return r;
        },
      });
      var n = i(913527),
        l = i.n(n),
        o = i(388032);
      function r(t) {
        let e =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          i =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : o.intl.string(o.t["Yl1D8/"]),
          n = l().duration(t, "seconds");
        if (n.days() > 0)
          return o.intl.formatToPlainString(e ? o.t.GBLpQ0 : o.t.k2UNz8, {
            days: n.days(),
          });
        if (n.hours() > 0)
          return o.intl.formatToPlainString(e ? o.t.rhY1Rk : o.t.xCjYxM, {
            hours: n.hours(),
          });
        if (n.minutes() > 0)
          return o.intl.formatToPlainString(e ? o.t["XIGt+f"] : o.t.iXLF9f, {
            minutes: n.minutes(),
          });
        else if (t > 0)
          return o.intl.formatToPlainString(e ? o.t.pyvjRk : o.t.geSp4O, {
            seconds: n.seconds(),
          });
        else return e ? o.intl.string(o.t["Yl1D8/"]) : i;
      }
    },
  },
]);
//# sourceMappingURL=054cb40cab9172c92ac5.js.map
