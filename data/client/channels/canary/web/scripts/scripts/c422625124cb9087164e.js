"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["6310"],
  {
    812545: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      }),
        t(47120);
      var s = t(192379),
        l = t(442837),
        i = t(528963),
        o = t(237904);
      let a = 1 * t(70956).Z.Millis.HOUR;
      function r(e) {
        let [n, t] = s.useState(!1),
          r = (0, l.e7)([o.Z], () => o.Z.getFollowerStatsForChannel(e), [e]);
        return (
          s.useEffect(() => {
            (null == r || Date.now() - r.lastFetched > a) && !n
              ? (t(!0), i.Z.fetchChannelFollowerStats(e))
              : null != r && n && t(!1);
          }, [e, r, n]),
          [r, n]
        );
      }
    },
    706923: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return _;
          },
        }),
        t(47120);
      var s = t(200651);
      t(192379);
      var l = t(399606),
        i = t(481060),
        o = t(904245),
        a = t(434404),
        r = t(592125),
        c = t(812545),
        u = t(981631),
        d = t(388032),
        g = t(1136);
      function _(e) {
        let { channelId: n, messageId: t, transitionState: _, onClose: f } = e,
          S = (0, l.e7)([r.Z], () => r.Z.getChannel(n)),
          [p, C] = (0, c.Z)(n),
          F = null == S ? void 0 : S.guild_id;
        return (0, s.jsx)(i.ConfirmModal, {
          header: d.intl.string(d.t.aIz1oa),
          confirmText: d.intl.string(d.t["cY+Ooa"]),
          cancelText: d.intl.string(d.t["ETE/oK"]),
          confirmButtonColor: i.Button.Colors.BRAND,
          onConfirm: () => o.Z.crosspostMessage(n, t),
          transitionState: _,
          onClose: f,
          children: (0, s.jsx)(i.Text, {
            variant: "text-md/normal",
            className: g.spacing,
            children: C
              ? (0, s.jsx)(i.Spinner, {})
              : null != p && null != p.guildsFollowing && p.guildsFollowing > 0
                ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(i.Text, {
                        className: g.spacing,
                        variant: "text-sm/normal",
                        children: d.intl.format(d.t.GCGrND, {
                          numGuildsFollowing: p.guildsFollowing,
                        }),
                      }),
                      (0, s.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        children: d.intl.format(d.t.IMhGZ2, {
                          onClick: () => {
                            null != F &&
                              null != f &&
                              (f(), a.Z.open(F, u.pNK.ANALYTICS));
                          },
                        }),
                      }),
                    ],
                  })
                : d.intl.string(d.t["8FpqOj"]),
          }),
        });
      }
    },
    237904: function (e, n, t) {
      var s,
        l,
        i,
        o,
        a,
        r,
        c = t(442837),
        u = t(570140);
      ((s = a || (a = {})).FAILED = "failed"), (s.SUCCEEDED = "succeeded");
      let d = {};
      class g extends (r = c.ZP.Store) {
        getFollowerStatsForChannel(e) {
          return d[e];
        }
      }
      (o = "ChannelFollowerStatsStore"),
        (i = "displayName") in (l = g)
          ? Object.defineProperty(l, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[i] = o),
        (n.Z = new g(u.Z, {
          CONNECTION_OPEN: function () {
            d = {};
          },
          CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function (e) {
            let { channelId: n, stats: t } = e;
            (t = null != t ? t : {}),
              (d[n] = {
                loadingStatus: "succeeded",
                lastFetched: Date.now(),
                channelsFollowing: t.channels_following,
                guildMembers: t.guild_members,
                guildsFollowing: t.guilds_following,
                usersSeenEver: t.users_seen_ever,
                subscribersGainedSinceLastPost:
                  t.subscribers_gained_since_last_post,
                subscribersLostSinceLastPost:
                  t.subscribers_lost_since_last_post,
              });
          },
          CHANNEL_FOLLOWER_STATS_FETCH_FAILURE: function (e) {
            let { channelId: n } = e;
            d[n] = {
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
    1136: function (e, n, t) {
      e.exports = {
        spacing: "spacing_ddcc45",
        spacingTop: "spacingTop_ddcc45",
        message: "message_ddcc45",
      };
    },
  },
]);
//# sourceMappingURL=c422625124cb9087164e.js.map
