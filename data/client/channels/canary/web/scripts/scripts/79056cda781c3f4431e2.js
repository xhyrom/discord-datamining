"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["47833"],
  {
    484614: function (e, t, n) {
      var i,
        o = n(200651),
        r = n(192379),
        a = n(846519),
        d = n(481060),
        f = n(572004),
        s = n(388032);
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
      class l extends (i = r.PureComponent) {
        componentWillUnmount() {
          this._timeout.stop();
        }
        render() {
          let { text: e } = this.props,
            { mode: t } = this.state,
            n =
              t === d.CopyInput.Modes.SUCCESS
                ? s.intl.string(s.t["t5VZ8/"])
                : e;
          return (0, o.jsx)(d.CopyInput, {
            ...this.props,
            onCopy: this.handleCopy,
            mode: t,
            text: n,
            supportsCopy: f.wS,
          });
        }
        handleCopy(e) {
          let { onCopy: t, delay: n = 1e3 } = this.props,
            i = (0, f.JG)(e);
          this.setState({
            mode: i ? d.CopyInput.Modes.SUCCESS : d.CopyInput.Modes.ERROR,
          }),
            this._timeout.start(n, () =>
              this.setState({ mode: d.CopyInput.Modes.DEFAULT }),
            ),
            null == t || t(e);
        }
        getVerticalButtonColor(e) {
          switch (e) {
            case d.CopyInput.Modes.SUCCESS:
              return d.Button.Colors.GREEN;
            case d.CopyInput.Modes.ERROR:
              return d.Button.Colors.RED;
            default:
              return d.Button.Colors.BRAND;
          }
        }
        constructor(e) {
          super(e),
            c(this, "_timeout", void 0),
            (this.state = { mode: d.CopyInput.Modes.DEFAULT }),
            (this._timeout = new a.V7()),
            (this.handleCopy = this.handleCopy.bind(this));
        }
      }
      c(l, "defaultProps", { delay: 1e3 }), (t.Z = l);
    },
    690221: function (e, t, n) {
      var i = n(200651),
        o = n(192379),
        r = n(481060),
        a = n(703656),
        d = n(981631);
      t.Z = o.forwardRef(function (e, t) {
        let {
            href: n,
            children: f,
            onClick: s,
            onKeyPress: c,
            focusProps: l,
            ...u
          } = e,
          _ = o.useCallback(
            (e) => {
              if (!e.repeat)
                (e.charCode === d.yXg.SPACE || e.charCode === d.yXg.ENTER) &&
                  (e.preventDefault(),
                  null != n && (0, a.uL)(n),
                  null == s || s()),
                  null == c || c(e);
            },
            [n, c, s],
          ),
          h = o.useCallback(
            (e) => {
              if (!e.metaKey && !e.shiftKey && 0 === e.button)
                e.preventDefault(),
                  e.stopPropagation(),
                  null != n && (0, a.uL)(n),
                  null == s || s();
            },
            [n, s],
          ),
          b = (0, i.jsx)("a", {
            ref: t,
            href: n,
            onClick: h,
            onKeyPress: _,
            ...u,
            children: f,
          });
        return (0, i.jsx)(r.FocusRing, { ...l, children: b });
      });
    },
    93127: function (e, t, n) {
      n.d(t, {
        W: function () {
          return s;
        },
        _: function () {
          return c;
        },
      });
      var i = n(544891),
        o = n(570140),
        r = n(480294),
        a = n(814443),
        d = n(428598),
        f = n(981631);
      function s() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return a.Z.needsRefresh()
          ? (o.Z.dispatch({ type: "LOAD_USER_AFFINITIES" }),
            i.tn
              .get({
                url: f.ANM.USER_AFFINITIES,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
                rejectWithError: !1,
              })
              .then(
                (e) => {
                  let { body: t } = e;
                  o.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_SUCCESS",
                    affinities: t,
                  });
                },
                () => {
                  o.Z.dispatch({ type: "LOAD_USER_AFFINITIES_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
      function c() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return d.Z.shouldFetch() && r.Z.hasConsented(f.pjP.PERSONALIZATION)
          ? (o.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
            i.tn
              .get({
                url: f.ANM.USER_AFFINITIES_V2,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
                rejectWithError: !1,
              })
              .then(
                (e) => {
                  let { body: t } = e;
                  o.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                    affineUsers: t.user_affinities.map((e) => {
                      var t, n, i, o, r, a, d, f;
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
                          null !== (o = e.vc_rank) && void 0 !== o ? o : 0,
                        serverMessageProbability:
                          null !== (r = e.server_message_probability) &&
                          void 0 !== r
                            ? r
                            : 0,
                        serverMessageRank:
                          null !== (a = e.server_message_rank) && void 0 !== a
                            ? a
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
                  o.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2_FAILURE" });
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
        o = n(442837),
        r = n(570140),
        a = n(699516),
        d = n(496232);
      function f(e, t, n) {
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
      let s = new Map(),
        c = !1,
        l = Object.freeze({ userAffinities: [], lastFetched: 0 }),
        u = { ...l };
      function _() {
        s = new Map(
          u.userAffinities
            .filter((e) => !a.Z.isBlockedOrIgnored(e.otherUserId))
            .map((e) => [e.otherUserId, e]),
        );
      }
      class h extends (i = o.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(a.Z),
            null != e &&
              ((u.userAffinities = e.userAffinities),
              (u.lastFetched = e.lastFetched),
              _()),
            this.syncWith([a.Z], _);
        }
        shouldFetch() {
          if (!c) return Date.now() - u.lastFetched > d.K;
        }
        isFetching() {
          return c;
        }
        getUserAffinities() {
          return u.userAffinities;
        }
        getUserAffinitiesMap() {
          return s;
        }
        compare(e, t) {
          var n, i, o, r;
          return (
            (null !==
              (o =
                null === (n = s.get(t)) || void 0 === n
                  ? void 0
                  : n.communicationProbability) && void 0 !== o
              ? o
              : 0) -
            (null !==
              (r =
                null === (i = s.get(e)) || void 0 === i
                  ? void 0
                  : i.communicationProbability) && void 0 !== r
              ? r
              : 0)
          );
        }
        getUserAffinity(e) {
          return s.get(e);
        }
        getState() {
          return u;
        }
      }
      f(h, "displayName", "UserAffinitiesStoreV2"),
        f(h, "persistKey", "UserAffinitiesStoreV2"),
        (t.Z = new h(r.Z, {
          LOAD_USER_AFFINITIES_V2: function () {
            c = !0;
          },
          LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: t } = e;
            (u.lastFetched = Date.now()), (c = !1), (u.userAffinities = t), _();
          },
          LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            c = !1;
          },
          LOGOUT: function () {
            (u = { ...l }), (s = new Map()), (c = !1);
          },
        }));
    },
    55589: function (e, t, n) {
      let i, o, r;
      n(47120), n(653041);
      var a,
        d,
        f,
        s,
        c,
        l,
        u = n(913527),
        _ = n.n(u),
        h = n(442837),
        b = n(759174),
        p = n(570140),
        I = n(355298),
        m = n(333984),
        C = n(131704),
        E = n(592125),
        v = n(430824),
        S = n(306680),
        g = n(9156),
        A = n(594174),
        y = n(709054),
        R = n(176505);
      ((f = a || (a = {})).DEFAULT = "DEFAULT"), (f.FAVORITE = "FAVORITE");
      let F = new b.h(
        (e) => {
          let { isRequest: t, isFavorite: n } = e;
          return t ? [] : [n ? "FAVORITE" : "DEFAULT"];
        },
        (e) => {
          let { lastMessageId: t } = e;
          return -t;
        },
      );
      function w(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                var t, n;
                let i =
                    null !==
                      (n =
                        null !== (t = S.ZP.lastMessageId(e.id)) && void 0 !== t
                          ? t
                          : e.lastMessageId) && void 0 !== n
                      ? n
                      : e.id,
                  o = e.isMessageRequestTimestamp;
                if (null != o) {
                  let e = _()(o).valueOf(),
                    t = y.default.fromTimestamp(e);
                  return y.default.compare(i, t) > 0 ? i : t;
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
      function T() {
        F.clear(),
          Object.values(E.Z.getMutablePrivateChannels()).forEach((e) => {
            F.set(e.id, w(e));
          });
      }
      function U() {
        let e = E.Z.getMutablePrivateChannels();
        for (let t in e) F.set(t, w(e[t]));
      }
      let L =
        ((i = []),
        (o = []),
        (r = []),
        () => {
          let e = F.values("FAVORITE"),
            t = F.values("DEFAULT");
          return (
            (i !== e || o !== t) &&
              ((r = []),
              e.forEach((e) => {
                let { channelId: t } = e;
                return r.push(t);
              }),
              (i = e),
              t.forEach((e) => {
                let { channelId: t } = e;
                return r.push(t);
              }),
              (o = t)),
            r
          );
        });
      class O extends (d = h.ZP.Store) {
        initialize() {
          this.waitFor(E.Z, v.Z, A.default, I.Z, g.ZP),
            this.syncWith([g.ZP, I.Z], T);
        }
        getPrivateChannelIds() {
          return L();
        }
        getSortedChannels() {
          return [F.values("FAVORITE"), F.values("DEFAULT")];
        }
        serializeForOverlay() {
          let e = {};
          return (
            F.values().forEach((t) => {
              let { channelId: n, lastMessageId: i } = t;
              e[n] = i;
            }),
            e
          );
        }
      }
      (l = "PrivateChannelSortStore"),
        (c = "displayName") in (s = O)
          ? Object.defineProperty(s, c, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (s[c] = l),
        (t.Z = new O(p.Z, {
          CONNECTION_OPEN: T,
          CONNECTION_OPEN_SUPPLEMENTAL: T,
          OVERLAY_INITIALIZE: T,
          CACHE_LOADED: U,
          CACHE_LOADED_LAZY: U,
          CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            t.forEach((e) => {
              ((0, C.hv)(e.type) || F.has(e.id)) && F.set(e.id, w(e));
            });
          },
          CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            if (!(0, C.hv)(t.type) || t.id === R.V) return !1;
            F.set(t.id, w(t));
          },
          CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            return F.delete(t.id);
          },
          MESSAGE_CREATE: function (e) {
            let { channelId: t, message: n } = e;
            if (!F.has(t)) return !1;
            let i = E.Z.getChannel(t);
            return null != i && F.set(t, w(i, n.id));
          },
          GUILD_CREATE: function (e) {
            let t = e.guild.id;
            return F.delete(t);
          },
          LOGOUT: function () {
            F.clear();
          },
        }));
    },
    795531: function (e, t, n) {
      e.exports = {
        icon: "icon_fcf03e",
        iconWithGuildIcon: "iconWithGuildIcon_fcf03e",
        channelGuildIcon: "channelGuildIcon_fcf03e",
        acronym: "acronym_fcf03e",
      };
    },
    203871: function (e, t, n) {
      e.exports = {
        containerDefault: "containerDefault_f6f816",
        containerDragBefore: "containerDragBefore_f6f816",
        containerUserOver: "containerUserOver_f6f816",
        containerDragAfter: "containerDragAfter_f6f816",
        iconItem: "iconItem_f6f816 iconBase_f6f816",
        alwaysShown: "alwaysShown_f6f816",
        selected: "selected_f6f816",
        iconNoChannelInfo: "iconNoChannelInfo_f6f816",
        iconVisibility: "iconVisibility_f6f816",
        iconWithChannelInfo: "iconWithChannelInfo_f6f816",
        disabled: "disabled_f6f816",
        actionIcon: "actionIcon_f6f816",
        channelInfo: "channelInfo_f6f816",
        iconLive: "iconLive_f6f816",
        selectedChannel: "selectedChannel_f6f816",
      };
    },
    202839: function (e, t, n) {
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
    546820: function (e, t, n) {
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
    802870: function (e, t, n) {
      e.exports = {
        settingsContent: "settingsContent_eaf7c3 noScroll_eaf7c3",
        switch: "switch_eaf7c3",
      };
    },
    642291: function (e, t, n) {
      e.exports = { cursorPointer: "cursorPointer_aaab09" };
    },
  },
]);
//# sourceMappingURL=79056cda781c3f4431e2.js.map
