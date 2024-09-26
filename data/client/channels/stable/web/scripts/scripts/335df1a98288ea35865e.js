"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90761"],
  {
    690221: function (e, t, n) {
      var i = n(735250),
        r = n(470079),
        a = n(481060),
        o = n(703656),
        d = n(981631);
      t.Z = r.forwardRef(function (e, t) {
        let {
            href: n,
            children: f,
            onClick: c,
            onKeyPress: l,
            focusProps: s,
            ...u
          } = e,
          _ = r.useCallback(
            (e) => {
              if (!e.repeat)
                (e.charCode === d.yXg.SPACE || e.charCode === d.yXg.ENTER) &&
                  (e.preventDefault(),
                  null != n && (0, o.uL)(n),
                  null == c || c()),
                  null == l || l(e);
            },
            [n, l, c],
          ),
          h = r.useCallback(
            (e) => {
              if (!e.metaKey && !e.shiftKey && 0 === e.button)
                e.preventDefault(),
                  e.stopPropagation(),
                  null != n && (0, o.uL)(n),
                  null == c || c();
            },
            [n, c],
          ),
          b = (0, i.jsx)("a", {
            ref: t,
            href: n,
            onClick: h,
            onKeyPress: _,
            ...u,
            children: f,
          });
        return (0, i.jsx)(a.FocusRing, { ...s, children: b });
      });
    },
    93127: function (e, t, n) {
      n.d(t, {
        W: function () {
          return c;
        },
        _: function () {
          return l;
        },
      });
      var i = n(544891),
        r = n(570140),
        a = n(480294),
        o = n(814443),
        d = n(428598),
        f = n(981631);
      function c() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return o.Z.needsRefresh()
          ? (r.Z.dispatch({ type: "LOAD_USER_AFFINITIES" }),
            i.tn
              .get({
                url: f.ANM.USER_AFFINITIES,
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
      function l() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return d.Z.shouldFetch() && a.Z.hasConsented(f.pjP.PERSONALIZATION)
          ? (r.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
            i.tn
              .get({
                url: f.ANM.USER_AFFINITIES_V2,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                (e) => {
                  let { body: t } = e;
                  r.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                    affineUsers: t.user_affinities.map((e) => {
                      var t, n, i, r, a, o, d, f;
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
                          null !== (a = e.server_message_probability) &&
                          void 0 !== a
                            ? a
                            : 0,
                        serverMessageRank:
                          null !== (o = e.server_message_rank) && void 0 !== o
                            ? o
                            : 0,
                        communicationProbability:
                          null !== (d = e.communication_probability) &&
                          void 0 !== d
                            ? d
                            : 0,
                        communicationRank:
                          null !== (f = e.communication_rank) && void 0 !== f
                            ? f
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
        a = n(442837),
        o = n(570140),
        d = n(699516),
        f = n(496232);
      function c(e, t, n) {
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
      let l = !1,
        s = Object.freeze({ userAffinities: [], lastFetched: 0 }),
        u = { ...s };
      function _() {
        i = new Map(
          u.userAffinities
            .filter((e) => !d.Z.isBlocked(e.otherUserId))
            .map((e) => [e.otherUserId, e]),
        );
      }
      class h extends (r = a.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(d.Z),
            null != e &&
              ((u.userAffinities = e.userAffinities),
              (u.lastFetched = e.lastFetched),
              _()),
            this.syncWith([d.Z], _);
        }
        shouldFetch() {
          if (!l) return Date.now() - u.lastFetched > f.K;
        }
        isFetching() {
          return l;
        }
        getUserAffinities() {
          return u.userAffinities;
        }
        getUserAffinity(e) {
          return i.get(e);
        }
        getState() {
          return u;
        }
      }
      c(h, "displayName", "UserAffinitiesStoreV2"),
        c(h, "persistKey", "UserAffinitiesStoreV2"),
        (t.Z = new h(o.Z, {
          LOAD_USER_AFFINITIES_V2: function () {
            l = !0;
          },
          LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: t } = e;
            (u.lastFetched = Date.now()), (l = !1), (u.userAffinities = t), _();
          },
          LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            l = !1;
          },
          LOGOUT: function () {
            (u = { ...s }), (i = new Map()), (l = !1);
          },
        }));
    },
    55589: function (e, t, n) {
      let i, r, a;
      n(47120), n(653041);
      var o,
        d,
        f,
        c,
        l,
        s,
        u = n(913527),
        _ = n.n(u),
        h = n(442837),
        b = n(759174),
        p = n(570140),
        I = n(355298),
        m = n(333984),
        E = n(131704),
        v = n(592125),
        g = n(430824),
        A = n(306680),
        S = n(9156),
        C = n(594174),
        F = n(709054),
        y = n(176505);
      ((f = o || (o = {})).DEFAULT = "DEFAULT"), (f.FAVORITE = "FAVORITE");
      let R = new b.h(
        (e) => {
          let { isRequest: t, isFavorite: n } = e;
          return t ? [] : [n ? "FAVORITE" : "DEFAULT"];
        },
        (e) => {
          let { lastMessageId: t } = e;
          return -t;
        },
      );
      function T(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                var t, n;
                let i =
                    null !==
                      (n =
                        null !== (t = A.ZP.lastMessageId(e.id)) && void 0 !== t
                          ? t
                          : e.lastMessageId) && void 0 !== n
                      ? n
                      : e.id,
                  r = e.isMessageRequestTimestamp;
                if (null != r) {
                  let e = _()(r).valueOf(),
                    t = F.default.fromTimestamp(e);
                  return F.default.compare(i, t) > 0 ? i : t;
                }
                return i;
              })(e);
        return {
          channelId: e.id,
          lastMessageId: t,
          isFavorite: !1,
          isRequest: I.Z.isMessageRequest(e.id) || m.Z.isSpam(e.id),
        };
      }
      function w() {
        R.clear(),
          Object.values(v.Z.getMutablePrivateChannels()).forEach((e) => {
            R.set(e.id, T(e));
          });
      }
      function L() {
        let e = v.Z.getMutablePrivateChannels();
        for (let t in e) R.set(t, T(e[t]));
      }
      let U =
        ((i = []),
        (r = []),
        (a = []),
        () => {
          let e = R.values("FAVORITE"),
            t = R.values("DEFAULT");
          return (
            (i !== e || r !== t) &&
              ((a = []),
              e.forEach((e) => {
                let { channelId: t } = e;
                return a.push(t);
              }),
              (i = e),
              t.forEach((e) => {
                let { channelId: t } = e;
                return a.push(t);
              }),
              (r = t)),
            a
          );
        });
      class N extends (d = h.ZP.Store) {
        initialize() {
          this.waitFor(v.Z, g.Z, C.default, I.Z, S.ZP),
            this.syncWith([S.ZP, I.Z], w);
        }
        getPrivateChannelIds() {
          return U();
        }
        getSortedChannels() {
          return [R.values("FAVORITE"), R.values("DEFAULT")];
        }
        serializeForOverlay() {
          let e = {};
          return (
            R.values().forEach((t) => {
              let { channelId: n, lastMessageId: i } = t;
              e[n] = i;
            }),
            e
          );
        }
      }
      (s = "PrivateChannelSortStore"),
        (l = "displayName") in (c = N)
          ? Object.defineProperty(c, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (c[l] = s),
        (t.Z = new N(p.Z, {
          CONNECTION_OPEN: w,
          CONNECTION_OPEN_SUPPLEMENTAL: w,
          OVERLAY_INITIALIZE: w,
          CACHE_LOADED: L,
          CACHE_LOADED_LAZY: L,
          CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            t.forEach((e) => {
              ((0, E.hv)(e.type) || R.has(e.id)) && R.set(e.id, T(e));
            });
          },
          CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            if (!(0, E.hv)(t.type) || t.id === y.V) return !1;
            R.set(t.id, T(t));
          },
          CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            return R.delete(t.id);
          },
          MESSAGE_CREATE: function (e) {
            let { channelId: t, message: n } = e;
            if (!R.has(t)) return !1;
            let i = v.Z.getChannel(t);
            return null != i && R.set(t, T(i, n.id));
          },
          GUILD_CREATE: function (e) {
            let t = e.guild.id;
            return R.delete(t);
          },
          LOGOUT: function () {
            R.clear();
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
  },
]);
//# sourceMappingURL=335df1a98288ea35865e.js.map
