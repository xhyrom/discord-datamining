"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["79254"],
  {
    690221: function (e, t, n) {
      var i = n(735250),
        r = n(470079),
        o = n(481060),
        a = n(703656),
        l = n(981631);
      t.Z = r.forwardRef(function (e, t) {
        let {
            href: n,
            children: d,
            onClick: u,
            onKeyPress: c,
            focusProps: f,
            ...s
          } = e,
          _ = r.useCallback(
            (e) => {
              if (!e.repeat)
                (e.charCode === l.yXg.SPACE || e.charCode === l.yXg.ENTER) &&
                  (e.preventDefault(),
                  null != n && (0, a.uL)(n),
                  null == u || u()),
                  null == c || c(e);
            },
            [n, c, u],
          ),
          h = r.useCallback(
            (e) => {
              if (!e.metaKey && !e.shiftKey && 0 === e.button)
                e.preventDefault(),
                  e.stopPropagation(),
                  null != n && (0, a.uL)(n),
                  null == u || u();
            },
            [n, u],
          ),
          b = (0, i.jsx)("a", {
            ref: t,
            href: n,
            onClick: h,
            onKeyPress: _,
            ...s,
            children: d,
          });
        return (0, i.jsx)(o.FocusRing, { ...f, children: b });
      });
    },
    93127: function (e, t, n) {
      n.d(t, {
        W: function () {
          return u;
        },
        _: function () {
          return c;
        },
      });
      var i = n(544891),
        r = n(570140),
        o = n(480294),
        a = n(814443),
        l = n(428598),
        d = n(981631);
      function u() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return a.Z.needsRefresh()
          ? (r.Z.dispatch({ type: "LOAD_USER_AFFINITIES" }),
            i.tn
              .get({
                url: d.ANM.USER_AFFINITIES,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                (e) => {
                  let { body: t } = e;
                  r.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_SUCCESS",
                    affinities: t,
                  });
                },
                () => {
                  r.Z.dispatch({ type: "LOAD_USER_AFFINITIES_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
      function c() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return l.Z.shouldFetch() && o.Z.hasConsented(d.pjP.PERSONALIZATION)
          ? (r.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
            i.tn
              .get({
                url: d.ANM.USER_AFFINITIES_V2,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                (e) => {
                  let { body: t } = e;
                  r.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                    affineUsers: t.user_affinities.map((e) => {
                      var t, n, i, r, o, a, l, d;
                      return {
                        otherUserId: e.other_user_id,
                        userSegment: e.user_segment,
                        otherUserSegment: e.other_user_segment,
                        isFriend: e.is_friend,
                        dmProbability:
                          null !== (t = e.dm_probability) && void 0 !== t
                            ? t
                            : 0,
                        dmRank:
                          null !== (n = e.dm_rank) && void 0 !== n ? n : 0,
                        vcProbability:
                          null !== (i = e.vc_probability) && void 0 !== i
                            ? i
                            : 0,
                        vcRank:
                          null !== (r = e.vc_rank) && void 0 !== r ? r : 0,
                        serverMessageProbability:
                          null !== (o = e.server_message_probability) &&
                          void 0 !== o
                            ? o
                            : 0,
                        serverMessageRank:
                          null !== (a = e.server_message_rank) && void 0 !== a
                            ? a
                            : 0,
                        communicationProbability:
                          null !== (l = e.communication_probability) &&
                          void 0 !== l
                            ? l
                            : 0,
                        communicationRank:
                          null !== (d = e.communication_rank) && void 0 !== d
                            ? d
                            : 0,
                      };
                    }),
                  });
                },
                () => {
                  r.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
    },
    496232: function (e, t, n) {
      n.d(t, {
        K: function () {
          return i;
        },
      });
      let i = n(70956).Z.Millis.DAY;
    },
    428598: function (e, t, n) {
      let i;
      n(47120);
      var r,
        o = n(442837),
        a = n(570140),
        l = n(699516),
        d = n(496232);
      function u(e, t, n) {
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
      let c = !1,
        f = Object.freeze({ userAffinities: [], lastFetched: 0 }),
        s = { ...f };
      function _() {
        i = new Map(
          s.userAffinities
            .filter((e) => !l.Z.isBlocked(e.otherUserId))
            .map((e) => [e.otherUserId, e]),
        );
      }
      class h extends (r = o.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(l.Z),
            null != e &&
              ((s.userAffinities = e.userAffinities),
              (s.lastFetched = e.lastFetched),
              _()),
            this.syncWith([l.Z], _);
        }
        shouldFetch() {
          if (!c) return Date.now() - s.lastFetched > d.K;
        }
        isFetching() {
          return c;
        }
        getUserAffinities() {
          return s.userAffinities;
        }
        getUserAffinity(e) {
          return i.get(e);
        }
        getState() {
          return s;
        }
      }
      u(h, "displayName", "UserAffinitiesStoreV2"),
        u(h, "persistKey", "UserAffinitiesStoreV2"),
        (t.Z = new h(a.Z, {
          LOAD_USER_AFFINITIES_V2: function () {
            c = !0;
          },
          LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: t } = e;
            (s.lastFetched = Date.now()), (c = !1), (s.userAffinities = t), _();
          },
          LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            c = !1;
          },
          LOGOUT: function () {
            (s = { ...f }), (i = new Map()), (c = !1);
          },
        }));
    },
    111583: function (e, t, n) {
      let i;
      var r,
        o,
        a,
        l,
        d = n(442837),
        u = n(544891),
        c = n(570140),
        f = n(70956),
        s = n(314897),
        _ = n(300429),
        h = n(981631),
        b = n(176505);
      let m = 10 * f.Z.Millis.SECOND,
        p = 1.5 * f.Z.Millis.SECOND,
        I = {},
        E = Object.freeze({});
      function S(e) {
        var t;
        return null !== (t = I[e]) && void 0 !== t ? t : E;
      }
      function g(e) {
        var t, n;
        let { channelId: i, userId: r } = e,
          o = { ...S(i) };
        clearTimeout(o[r]),
          (o[r] =
            ((t = i),
            (n = r),
            setTimeout(() => {
              c.Z.dispatch({ type: "TYPING_STOP", channelId: t, userId: n });
            }, m))),
          (I[i] = o);
      }
      function v(e) {
        let { channelId: t, userId: n } = e,
          i = I[t];
        if (null == i || null == i[n]) return !1;
        let r = { ...i };
        clearTimeout(r[n]), delete r[n], (I[t] = r);
      }
      function T() {
        I = {};
      }
      class A extends (l = d.ZP.Store) {
        getTypingUsers(e) {
          return S(e);
        }
        isTyping(e, t) {
          return null != S(e)[t];
        }
      }
      (a = "TypingStore"),
        (o = "displayName") in (r = A)
          ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[o] = a),
        (t.Z = new A(c.Z, {
          TYPING_START: g,
          TYPING_STOP: v,
          TYPING_START_LOCAL: function (e) {
            let { channelId: t } = e,
              n = s.default.getId();
            if (null == n || t === b.V) return !1;
            null != i &&
              i.channelId !== t &&
              (null != i.timeout && clearTimeout(i.timeout), (i = null));
            let r = Date.now(),
              o = 0.8 * m;
            if (null != i && (null != i.timeout || i.prevSend + o > r))
              return !1;
            let a = setTimeout(
              () => {
                if (
                  null == i ||
                  i.channelId !== t ||
                  n !== s.default.getId() ||
                  null == i.timeout
                )
                  return;
                if (
                  ((i.timeout = null),
                  !(
                    (function (e) {
                      let t = S(e);
                      return t === E ? 0 : Object.keys(t).length;
                    })(t) > 5
                  ))
                )
                  u.tn
                    .post({ url: h.ANM.TYPING(t), oldFormErrors: !0 })
                    .then((e) => {
                      if (200 === e.status) {
                        var n, i;
                        let r =
                            null !== (n = e.body.message_send_cooldown_ms) &&
                            void 0 !== n
                              ? n
                              : 0,
                          o =
                            null !== (i = e.body.thread_create_cooldown_ms) &&
                            void 0 !== i
                              ? i
                              : 0;
                        r > 0 &&
                          c.Z.dispatch({
                            type: "SLOWMODE_SET_COOLDOWN",
                            channelId: t,
                            slowmodeType: _.S.SendMessage,
                            cooldownMs: r,
                          }),
                          o > 0 &&
                            c.Z.dispatch({
                              type: "SLOWMODE_SET_COOLDOWN",
                              channelId: t,
                              slowmodeType: _.S.CreateThread,
                              cooldownMs: o,
                            });
                      }
                    });
              },
              null == i || i.prevSend > r - 2 * o ? p : 0,
            );
            return (
              (i = { channelId: t, timeout: a, prevSend: r }),
              g({ channelId: t, userId: n })
            );
          },
          TYPING_STOP_LOCAL: function (e) {
            let { channelId: t } = e,
              n = s.default.getId();
            return (
              null != n &&
              null != i &&
              i.channelId === t &&
              null != i.timeout &&
              (clearTimeout(i.timeout),
              (i = null),
              v({ channelId: t, userId: n }))
            );
          },
          CONNECTION_OPEN: T,
          OVERLAY_INITIALIZE: T,
          MESSAGE_CREATE: function (e) {
            let {
              channelId: t,
              message: { author: n },
              optimistic: r,
            } = e;
            return (
              r &&
                !(function (e) {
                  if (null == i || i.channelId !== e) return;
                  null != i.timeout && clearTimeout(i.timeout), (i = null);
                })(t),
              null != n && v({ channelId: t, userId: n.id })
            );
          },
        }));
    },
    55589: function (e, t, n) {
      let i, r, o;
      n(47120), n(653041);
      var a,
        l,
        d,
        u,
        c,
        f,
        s = n(913527),
        _ = n.n(s),
        h = n(442837),
        b = n(759174),
        m = n(570140),
        p = n(355298),
        I = n(333984),
        E = n(131704),
        S = n(592125),
        g = n(430824),
        v = n(306680),
        T = n(9156),
        A = n(594174),
        C = n(709054),
        y = n(176505);
      ((d = a || (a = {})).DEFAULT = "DEFAULT"), (d.FAVORITE = "FAVORITE");
      let O = new b.h(
        (e) => {
          let { isRequest: t, isFavorite: n } = e;
          return t ? [] : [n ? "FAVORITE" : "DEFAULT"];
        },
        (e) => {
          let { lastMessageId: t } = e;
          return -t;
        },
      );
      function F(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                var t, n;
                let i =
                    null !==
                      (n =
                        null !== (t = v.ZP.lastMessageId(e.id)) && void 0 !== t
                          ? t
                          : e.lastMessageId) && void 0 !== n
                      ? n
                      : e.id,
                  r = e.isMessageRequestTimestamp;
                if (null != r) {
                  let e = _()(r).valueOf(),
                    t = C.default.fromTimestamp(e);
                  return C.default.compare(i, t) > 0 ? i : t;
                }
                return i;
              })(e);
        return {
          channelId: e.id,
          lastMessageId: t,
          isFavorite: !1,
          isRequest: p.Z.isMessageRequest(e.id) || I.Z.isSpam(e.id),
        };
      }
      function w() {
        O.clear(),
          Object.values(S.Z.getMutablePrivateChannels()).forEach((e) => {
            O.set(e.id, F(e));
          });
      }
      function L() {
        let e = S.Z.getMutablePrivateChannels();
        for (let t in e) O.set(t, F(e[t]));
      }
      let N =
        ((i = []),
        (r = []),
        (o = []),
        () => {
          let e = O.values("FAVORITE"),
            t = O.values("DEFAULT");
          return (
            (i !== e || r !== t) &&
              ((o = []),
              e.forEach((e) => {
                let { channelId: t } = e;
                return o.push(t);
              }),
              (i = e),
              t.forEach((e) => {
                let { channelId: t } = e;
                return o.push(t);
              }),
              (r = t)),
            o
          );
        });
      class R extends (l = h.ZP.Store) {
        initialize() {
          this.waitFor(S.Z, g.Z, A.default, p.Z, T.ZP),
            this.syncWith([T.ZP, p.Z], w);
        }
        getPrivateChannelIds() {
          return N();
        }
        getSortedChannels() {
          return [O.values("FAVORITE"), O.values("DEFAULT")];
        }
        serializeForOverlay() {
          let e = {};
          return (
            O.values().forEach((t) => {
              let { channelId: n, lastMessageId: i } = t;
              e[n] = i;
            }),
            e
          );
        }
      }
      (f = "PrivateChannelSortStore"),
        (c = "displayName") in (u = R)
          ? Object.defineProperty(u, c, {
              value: f,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (u[c] = f),
        (t.Z = new R(m.Z, {
          CONNECTION_OPEN: w,
          CONNECTION_OPEN_SUPPLEMENTAL: w,
          OVERLAY_INITIALIZE: w,
          CACHE_LOADED: L,
          CACHE_LOADED_LAZY: L,
          CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            t.forEach((e) => {
              ((0, E.hv)(e.type) || O.has(e.id)) && O.set(e.id, F(e));
            });
          },
          CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            if (!(0, E.hv)(t.type) || t.id === y.V) return !1;
            O.set(t.id, F(t));
          },
          CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            return O.delete(t.id);
          },
          MESSAGE_CREATE: function (e) {
            let { channelId: t, message: n } = e;
            if (!O.has(t)) return !1;
            let i = S.Z.getChannel(t);
            return null != i && O.set(t, F(i, n.id));
          },
          GUILD_CREATE: function (e) {
            let t = e.guild.id;
            return O.delete(t);
          },
          LOGOUT: function () {
            O.clear();
          },
        }));
    },
    664481: function (e, t, n) {
      e.exports = {
        icon: "icon_fcf03e",
        iconWithGuildIcon: "iconWithGuildIcon_fcf03e",
        channelGuildIcon: "channelGuildIcon_fcf03e",
        acronym: "acronym_fcf03e",
      };
    },
    206197: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_d8bfb3",
        icon: "icon_d8bfb3",
        typeDefault: "typeDefault_d8bfb3",
        typeThread: "typeThread_d8bfb3",
        unread: "unread_d8bfb3",
        withGuildIcon: "withGuildIcon_d8bfb3",
        typeVoice: "typeVoice_d8bfb3",
        modeSelected: "modeSelected_d8bfb3",
        modeConnected: "modeConnected_d8bfb3",
        modeUnreadImportant: "modeUnreadImportant_d8bfb3",
        modeMuted: "modeMuted_d8bfb3",
        modeLocked: "modeLocked_d8bfb3",
        modeUnreadLessImportant: "modeUnreadLessImportant_d8bfb3",
        iconContainer: "iconContainer_d8bfb3",
        iconContainerWithGuildIcon: "iconContainerWithGuildIcon_d8bfb3",
        favoritesSuggestion: "favoritesSuggestion_d8bfb3",
        link: "link_d8bfb3",
        basicChannelRowLink: "basicChannelRowLink_d8bfb3",
        linkTop: "linkTop_d8bfb3",
        linkBottom: "linkBottom_d8bfb3",
        name: "name_d8bfb3",
        subtitle: "subtitle_d8bfb3",
        children: "children_d8bfb3",
        iconWithGuildIcon: "iconWithGuildIcon_d8bfb3",
        notInteractive: "notInteractive_d8bfb3",
        unreadImportant: "unreadImportant_d8bfb3",
        numberBadge: "numberBadge_d8bfb3",
      };
    },
    871820: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_cedfaf",
        scroller: "scroller_cedfaf",
        modal: "modal_cedfaf",
        closeButton: "closeButton_cedfaf",
        headerCloseButtonSpacing: "headerCloseButtonSpacing_cedfaf",
        header: "header_cedfaf",
        headerText: "headerText_cedfaf",
        headerChannelContainer: "headerChannelContainer_cedfaf",
        channelIcon: "channelIcon_cedfaf",
        searchBar: "searchBar_cedfaf",
        hubHeader: "hubHeader_cedfaf",
        hubInviteTitle: "hubInviteTitle_cedfaf",
        hubFriendSearch: "hubFriendSearch_cedfaf",
        inviteRow: "inviteRow_cedfaf",
        inviteRowAvatar: "inviteRowAvatar_cedfaf",
        inviteRowInfo: "inviteRowInfo_cedfaf",
        inviteRowName: "inviteRowName_cedfaf",
        inviteRowButton: "inviteRowButton_cedfaf",
        inviteRowEmptyState: "inviteRowEmptyState_cedfaf",
        warningContainer: "warningContainer_cedfaf",
        warningIcon: "warningIcon_cedfaf",
        input: "input_cedfaf",
        noPadding: "noPadding_cedfaf",
        content: "content_cedfaf",
        copyInput: "copyInput_cedfaf",
        copyButton: "copyButton_cedfaf",
        subText: "subText_cedfaf",
        temporaryMembershipContainerBackground:
          "temporaryMembershipContainerBackground_cedfaf",
        temporaryMembershipContainer: "temporaryMembershipContainer_cedfaf",
        noScroll: "noScroll_cedfaf",
        settingsFooter: "settingsFooter_cedfaf",
        footer: "footer_cedfaf",
        footerText: "footerText_cedfaf",
        headerContainer: "headerContainer_cedfaf",
        welcomeImage: "welcomeImage_cedfaf",
        welcomeHeading: "welcomeHeading_cedfaf",
        welcomeSubheading: "welcomeSubheading_cedfaf",
        errorMessage: "errorMessage_cedfaf",
        errorLink: "errorLink_cedfaf",
        acronym: "acronym_cedfaf",
        guestBody: "guestBody_cedfaf",
        guestSendInviteLinkHeader: "guestSendInviteLinkHeader_cedfaf",
        guestSelectChannelHeader: "guestSelectChannelHeader_cedfaf",
      };
    },
    600923: function (e, t, n) {
      e.exports = {
        settingsContent: "settingsContent_eaf7c3 noScroll_eaf7c3",
        switch: "switch_eaf7c3",
      };
    },
    579861: function (e, t, n) {
      e.exports = { cursorPointer: "cursorPointer_aaab09" };
    },
  },
]);
//# sourceMappingURL=9b8b2315f14078926bab.js.map
