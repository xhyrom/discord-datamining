"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["57964"],
  {
    484614: function (e, t, n) {
      var i,
        r = n(200651),
        o = n(192379),
        a = n(846519),
        l = n(481060),
        d = n(572004),
        u = n(388032);
      function s(e, t, n) {
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
      class c extends (i = o.PureComponent) {
        componentWillUnmount() {
          this._timeout.stop();
        }
        render() {
          let { text: e } = this.props,
            { mode: t } = this.state,
            n =
              t === l.CopyInput.Modes.SUCCESS
                ? u.intl.string(u.t["t5VZ8/"])
                : e;
          return (0, r.jsx)(l.CopyInput, {
            ...this.props,
            onCopy: this.handleCopy,
            mode: t,
            text: n,
            supportsCopy: d.wS,
          });
        }
        handleCopy(e) {
          let { onCopy: t, delay: n = 1e3 } = this.props,
            i = (0, d.JG)(e);
          this.setState({
            mode: i ? l.CopyInput.Modes.SUCCESS : l.CopyInput.Modes.ERROR,
          }),
            this._timeout.start(n, () =>
              this.setState({ mode: l.CopyInput.Modes.DEFAULT }),
            ),
            null == t || t(e);
        }
        getVerticalButtonColor(e) {
          switch (e) {
            case l.CopyInput.Modes.SUCCESS:
              return l.Button.Colors.GREEN;
            case l.CopyInput.Modes.ERROR:
              return l.Button.Colors.RED;
            default:
              return l.Button.Colors.BRAND;
          }
        }
        constructor(e) {
          super(e),
            s(this, "_timeout", void 0),
            (this.state = { mode: l.CopyInput.Modes.DEFAULT }),
            (this._timeout = new a.V7()),
            (this.handleCopy = this.handleCopy.bind(this));
        }
      }
      s(c, "defaultProps", { delay: 1e3 }), (t.Z = c);
    },
    690221: function (e, t, n) {
      var i = n(200651),
        r = n(192379),
        o = n(481060),
        a = n(703656),
        l = n(981631);
      t.Z = r.forwardRef(function (e, t) {
        let {
            href: n,
            children: d,
            onClick: u,
            onKeyPress: s,
            focusProps: c,
            ...f
          } = e,
          _ = r.useCallback(
            (e) => {
              if (!e.repeat)
                (e.charCode === l.yXg.SPACE || e.charCode === l.yXg.ENTER) &&
                  (e.preventDefault(),
                  null != n && (0, a.uL)(n),
                  null == u || u()),
                  null == s || s(e);
            },
            [n, s, u],
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
          p = (0, i.jsx)("a", {
            ref: t,
            href: n,
            onClick: h,
            onKeyPress: _,
            ...f,
            children: d,
          });
        return (0, i.jsx)(o.FocusRing, { ...c, children: p });
      });
    },
    93127: function (e, t, n) {
      n.d(t, {
        W: function () {
          return u;
        },
        _: function () {
          return s;
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
                rejectWithError: !1,
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
      function s() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return l.Z.shouldFetch() && o.Z.hasConsented(d.pjP.PERSONALIZATION)
          ? (r.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
            i.tn
              .get({
                url: d.ANM.USER_AFFINITIES_V2,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
                rejectWithError: !1,
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
      n(47120);
      var i,
        r = n(442837),
        o = n(570140),
        a = n(699516),
        l = n(496232);
      function d(e, t, n) {
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
      let u = new Map(),
        s = !1,
        c = Object.freeze({ userAffinities: [], lastFetched: 0 }),
        f = { ...c };
      function _() {
        u = new Map(
          f.userAffinities
            .filter((e) => !a.Z.isBlockedOrIgnored(e.otherUserId))
            .map((e) => [e.otherUserId, e]),
        );
      }
      class h extends (i = r.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(a.Z),
            null != e &&
              ((f.userAffinities = e.userAffinities),
              (f.lastFetched = e.lastFetched),
              _()),
            this.syncWith([a.Z], _);
        }
        shouldFetch() {
          if (!s) return Date.now() - f.lastFetched > l.K;
        }
        isFetching() {
          return s;
        }
        getUserAffinities() {
          return f.userAffinities;
        }
        getUserAffinitiesMap() {
          return u;
        }
        compare(e, t) {
          var n, i, r, o;
          return (
            (null !==
              (r =
                null === (n = u.get(t)) || void 0 === n
                  ? void 0
                  : n.communicationProbability) && void 0 !== r
              ? r
              : 0) -
            (null !==
              (o =
                null === (i = u.get(e)) || void 0 === i
                  ? void 0
                  : i.communicationProbability) && void 0 !== o
              ? o
              : 0)
          );
        }
        getUserAffinity(e) {
          return u.get(e);
        }
        getState() {
          return f;
        }
      }
      d(h, "displayName", "UserAffinitiesStoreV2"),
        d(h, "persistKey", "UserAffinitiesStoreV2"),
        (t.Z = new h(o.Z, {
          LOAD_USER_AFFINITIES_V2: function () {
            s = !0;
          },
          LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: t } = e;
            (f.lastFetched = Date.now()), (s = !1), (f.userAffinities = t), _();
          },
          LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            s = !1;
          },
          LOGOUT: function () {
            (f = { ...c }), (u = new Map()), (s = !1);
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
        s = n(570140),
        c = n(70956),
        f = n(314897),
        _ = n(300429),
        h = n(981631),
        p = n(176505);
      let b = 10 * c.Z.Millis.SECOND,
        m = 1.5 * c.Z.Millis.SECOND,
        I = {},
        E = Object.freeze({});
      function S(e) {
        var t;
        return null !== (t = I[e]) && void 0 !== t ? t : E;
      }
      function C(e) {
        var t, n;
        let { channelId: i, userId: r } = e,
          o = { ...S(i) };
        clearTimeout(o[r]),
          (o[r] =
            ((t = i),
            (n = r),
            setTimeout(() => {
              s.Z.dispatch({ type: "TYPING_STOP", channelId: t, userId: n });
            }, b))),
          (I[i] = o);
      }
      function v(e) {
        let { channelId: t, userId: n } = e,
          i = I[t];
        if (null == i || null == i[n]) return !1;
        let r = { ...i };
        clearTimeout(r[n]), delete r[n], (I[t] = r);
      }
      function g() {
        I = {};
      }
      class y extends (l = d.ZP.Store) {
        getTypingUsers(e) {
          return S(e);
        }
        isTyping(e, t) {
          return null != S(e)[t];
        }
      }
      (a = "TypingStore"),
        (o = "displayName") in (r = y)
          ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[o] = a),
        (t.Z = new y(s.Z, {
          TYPING_START: C,
          TYPING_STOP: v,
          TYPING_START_LOCAL: function (e) {
            let { channelId: t } = e,
              n = f.default.getId();
            if (null == n || t === p.V) return !1;
            null != i &&
              i.channelId !== t &&
              (null != i.timeout && clearTimeout(i.timeout), (i = null));
            let r = Date.now(),
              o = 0.8 * b;
            if (null != i && (null != i.timeout || i.prevSend + o > r))
              return !1;
            let a = setTimeout(
              () => {
                if (
                  null == i ||
                  i.channelId !== t ||
                  n !== f.default.getId() ||
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
                    .post({
                      url: h.ANM.TYPING(t),
                      oldFormErrors: !0,
                      rejectWithError: !0,
                    })
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
                          s.Z.dispatch({
                            type: "SLOWMODE_SET_COOLDOWN",
                            channelId: t,
                            slowmodeType: _.S.SendMessage,
                            cooldownMs: r,
                          }),
                          o > 0 &&
                            s.Z.dispatch({
                              type: "SLOWMODE_SET_COOLDOWN",
                              channelId: t,
                              slowmodeType: _.S.CreateThread,
                              cooldownMs: o,
                            });
                      }
                    });
              },
              null == i || i.prevSend > r - 2 * o ? m : 0,
            );
            return (
              (i = { channelId: t, timeout: a, prevSend: r }),
              C({ channelId: t, userId: n })
            );
          },
          TYPING_STOP_LOCAL: function (e) {
            let { channelId: t } = e,
              n = f.default.getId();
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
          CONNECTION_OPEN: g,
          OVERLAY_INITIALIZE: g,
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
        s,
        c,
        f = n(913527),
        _ = n.n(f),
        h = n(442837),
        p = n(759174),
        b = n(570140),
        m = n(355298),
        I = n(333984),
        E = n(131704),
        S = n(592125),
        C = n(430824),
        v = n(306680),
        g = n(9156),
        y = n(594174),
        T = n(709054),
        A = n(176505);
      ((d = a || (a = {})).DEFAULT = "DEFAULT"), (d.FAVORITE = "FAVORITE");
      let O = new p.h(
        (e) => {
          let { isRequest: t, isFavorite: n } = e;
          return t ? [] : [n ? "FAVORITE" : "DEFAULT"];
        },
        (e) => {
          let { lastMessageId: t } = e;
          return -t;
        },
      );
      function R(e) {
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
                    t = T.default.fromTimestamp(e);
                  return T.default.compare(i, t) > 0 ? i : t;
                }
                return i;
              })(e);
        return {
          channelId: e.id,
          lastMessageId: t,
          isFavorite: !1,
          isRequest: m.Z.isMessageRequest(e.id) || I.Z.isSpam(e.id),
        };
      }
      function w() {
        O.clear(),
          Object.values(S.Z.getMutablePrivateChannels()).forEach((e) => {
            O.set(e.id, R(e));
          });
      }
      function F() {
        let e = S.Z.getMutablePrivateChannels();
        for (let t in e) O.set(t, R(e[t]));
      }
      let L =
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
      class N extends (l = h.ZP.Store) {
        initialize() {
          this.waitFor(S.Z, C.Z, y.default, m.Z, g.ZP),
            this.syncWith([g.ZP, m.Z], w);
        }
        getPrivateChannelIds() {
          return L();
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
      (c = "PrivateChannelSortStore"),
        (s = "displayName") in (u = N)
          ? Object.defineProperty(u, s, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (u[s] = c),
        (t.Z = new N(b.Z, {
          CONNECTION_OPEN: w,
          CONNECTION_OPEN_SUPPLEMENTAL: w,
          OVERLAY_INITIALIZE: w,
          CACHE_LOADED: F,
          CACHE_LOADED_LAZY: F,
          CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            t.forEach((e) => {
              ((0, E.hv)(e.type) || O.has(e.id)) && O.set(e.id, R(e));
            });
          },
          CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            if (!(0, E.hv)(t.type) || t.id === A.V) return !1;
            O.set(t.id, R(t));
          },
          CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            return O.delete(t.id);
          },
          MESSAGE_CREATE: function (e) {
            let { channelId: t, message: n } = e;
            if (!O.has(t)) return !1;
            let i = S.Z.getChannel(t);
            return null != i && O.set(t, R(i, n.id));
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
    311533: function (e, t, n) {
      e.exports = {
        icon: "icon_fcf03e",
        iconWithGuildIcon: "iconWithGuildIcon_fcf03e",
        channelGuildIcon: "channelGuildIcon_fcf03e",
        acronym: "acronym_fcf03e",
      };
    },
    193877: function (e, t, n) {
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
        activeEvent: "activeEvent_d8bfb3",
      };
    },
    755527: function (e, t, n) {
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
        noPadding: "noPadding_cedfaf",
        content: "content_cedfaf",
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
    24182: function (e, t, n) {
      e.exports = {
        settingsContent: "settingsContent_eaf7c3 noScroll_eaf7c3",
        switch: "switch_eaf7c3",
      };
    },
    107720: function (e, t, n) {
      e.exports = { cursorPointer: "cursorPointer_aaab09" };
    },
  },
]);
//# sourceMappingURL=c71f373b414299e7c346.js.map
