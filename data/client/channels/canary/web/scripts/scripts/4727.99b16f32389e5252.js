"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["4727"],
  {
    560010(s, e, t) {
      t.d(e, { A: () => a });
      var n = t(17928),
        l = t(228366);
      let i = {};
      class o extends n.Ay.Store {
        static displayName = "ChannelFollowerStatsStore";
        getFollowerStatsForChannel(s) {
          return i[s];
        }
      }
      let a = new o(l.h, {
        CONNECTION_OPEN: function () {
          i = {};
        },
        CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function (s) {
          let { channelId: e, stats: t } = s;
          (t = null != t ? t : {}),
            (i[e] = {
              loadingStatus: "succeeded",
              lastFetched: Date.now(),
              channelsFollowing: t.channels_following,
              guildMembers: t.guild_members,
              guildsFollowing: t.guilds_following,
              usersSeenEver: t.users_seen_ever,
              subscribersGainedSinceLastPost:
                t.subscribers_gained_since_last_post,
              subscribersLostSinceLastPost: t.subscribers_lost_since_last_post,
            });
        },
        CHANNEL_FOLLOWER_STATS_FETCH_FAILURE: function (s) {
          let { channelId: e } = s;
          i[e] = {
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
      });
    },
  },
]);
//# sourceMappingURL=4727.99b16f32389e5252.js.map
