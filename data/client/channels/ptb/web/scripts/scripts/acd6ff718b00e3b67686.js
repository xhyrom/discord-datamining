"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["6310"],
  {
    812545: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return r;
        },
      }),
        n(47120);
      var l = n(470079),
        t = n(442837),
        o = n(528963),
        i = n(237904);
      let a = 1 * n(70956).Z.Millis.HOUR;
      function r(e) {
        let [s, n] = l.useState(!1),
          r = (0, t.e7)([i.Z], () => i.Z.getFollowerStatsForChannel(e), [e]);
        return (
          l.useEffect(() => {
            (null == r || Date.now() - r.lastFetched > a) && !s
              ? (n(!0), o.Z.fetchChannelFollowerStats(e))
              : null != r && s && n(!1);
          }, [e, r, s]),
          [r, s]
        );
      }
    },
    706923: function (e, s, n) {
      n.r(s),
        n.d(s, {
          default: function () {
            return _;
          },
        }),
        n(47120);
      var l = n(735250);
      n(470079);
      var t = n(399606),
        o = n(481060),
        i = n(904245),
        a = n(434404),
        r = n(592125),
        c = n(812545),
        u = n(981631),
        d = n(689938),
        g = n(262704);
      function _(e) {
        let { channelId: s, messageId: n, transitionState: _, onClose: S } = e,
          E = (0, t.e7)([r.Z], () => r.Z.getChannel(s)),
          [F, C] = (0, c.Z)(s),
          f = null == E ? void 0 : E.guild_id;
        return (0, l.jsx)(o.ConfirmModal, {
          header: d.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
          confirmText: d.Z.Messages.CONFIRM,
          cancelText: d.Z.Messages.CANCEL,
          confirmButtonColor: o.Button.Colors.BRAND,
          onConfirm: () => i.Z.crosspostMessage(s, n),
          transitionState: _,
          onClose: S,
          children: (0, l.jsx)(o.Text, {
            variant: "text-md/normal",
            className: g.spacing,
            children: C
              ? (0, l.jsx)(o.Spinner, {})
              : null != F && null != F.guildsFollowing && F.guildsFollowing > 0
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(o.Text, {
                        className: g.spacing,
                        variant: "text-sm/normal",
                        children:
                          d.Z.Messages.PUBLISH_FOLLOWED_NEWS_BODY_REACH.format({
                            numGuildsFollowing: F.guildsFollowing,
                          }),
                      }),
                      (0, l.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        children:
                          d.Z.Messages.PUBLISH_FOLLOWED_NEWS_BODY_SETTINGS_INSIGHTS.format(
                            {
                              onClick: () => {
                                null != f &&
                                  null != S &&
                                  (S(), a.Z.open(f, u.pNK.ANALYTICS));
                              },
                            },
                          ),
                      }),
                    ],
                  })
                : d.Z.Messages.PUBLISH_FOLLOWED_NEWS_BODY,
          }),
        });
      }
    },
    237904: function (e, s, n) {
      var l,
        t,
        o,
        i,
        a,
        r,
        c = n(442837),
        u = n(570140);
      ((l = a || (a = {})).FAILED = "failed"), (l.SUCCEEDED = "succeeded");
      let d = {};
      class g extends (r = c.ZP.Store) {
        getFollowerStatsForChannel(e) {
          return d[e];
        }
      }
      (i = "ChannelFollowerStatsStore"),
        (o = "displayName") in (t = g)
          ? Object.defineProperty(t, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[o] = i),
        (s.Z = new g(u.Z, {
          CONNECTION_OPEN: function () {
            d = {};
          },
          CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function (e) {
            let { channelId: s, stats: n } = e;
            (n = null != n ? n : {}),
              (d[s] = {
                loadingStatus: "succeeded",
                lastFetched: Date.now(),
                channelsFollowing: n.channels_following,
                guildMembers: n.guild_members,
                guildsFollowing: n.guilds_following,
                usersSeenEver: n.users_seen_ever,
                subscribersGainedSinceLastPost:
                  n.subscribers_gained_since_last_post,
                subscribersLostSinceLastPost:
                  n.subscribers_lost_since_last_post,
              });
          },
          CHANNEL_FOLLOWER_STATS_FETCH_FAILURE: function (e) {
            let { channelId: s } = e;
            d[s] = {
              loadingStatus: "failed",
              lastFetched: Date.now(),
              channelsFollowing: 0,
              guildMembers: 0,
              guildsFollowing: 0,
              usersSeenEver: 0,
              subscribersGainedSinceLastPost: 0,
              subscribersLostSinceLastPost: 0,
            };
          },
        }));
    },
    262704: function (e, s, n) {
      e.exports = {
        spacing: "spacing_ddcc45",
        spacingTop: "spacingTop_ddcc45",
        message: "message_ddcc45",
      };
    },
  },
]);
//# sourceMappingURL=acd6ff718b00e3b67686.js.map
