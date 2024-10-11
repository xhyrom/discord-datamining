"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["4030"],
  {
    211739: function (e, n, t) {
      t.d(n, {
        N5: function () {
          return r;
        },
        c4: function () {
          return a;
        },
        lc: function () {
          return s;
        },
        mJ: function () {
          return u;
        },
      });
      var i = t(570140);
      function a(e) {
        i.Z.dispatch({ type: "CATEGORY_COLLAPSE", id: e });
      }
      function u(e) {
        i.Z.dispatch({ type: "CATEGORY_EXPAND", id: e });
      }
      function r(e) {
        i.Z.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: e });
      }
      function s(e) {
        i.Z.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: e });
      }
    },
    323597: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return M;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(442837),
        u = t(481060),
        r = t(787014),
        s = t(904245),
        l = t(787263),
        o = t(660189),
        c = t(144140),
        E = t(314897),
        d = t(496675),
        f = t(709054),
        _ = t(981631),
        U = t(689938);
      function M(e) {
        let n = e.isForumPost(),
          t = (0, a.e7)([E.default], () => e.isOwner(E.default.getId()), [e]),
          { canManageChannel: M, canAccessChannel: N } = (0, a.cj)(
            [d.Z],
            () => ({
              canAccessChannel: d.Z.can(e.accessPermissions, e),
              canManageChannel: d.Z.can(
                e.isThread() ? _.Plq.MANAGE_THREADS : _.Plq.MANAGE_CHANNELS,
                e,
              ),
            }),
            [e],
          ),
          A = (0, a.e7)(
            [c.Z],
            () => {
              var n;
              return null !== (n = c.Z.getCount(e.id)) && void 0 !== n ? n : 0;
            },
            [e.id],
          ),
          { firstMessage: T } = (0, a.e7)([o.Z], () => o.Z.getMessage(e.id), [
            e.id,
          ]),
          O = n && (M || (t && A < 1)),
          R = n && t && !M && A > 0 && null != T;
        return N && (M || O || R)
          ? (0, i.jsx)(u.MenuItem, {
              id: "delete-channel",
              label: (() => {
                if (e.type === _.d4z.GUILD_CATEGORY)
                  return U.Z.Messages.DELETE_CATEGORY;
                if (e.isForumPost())
                  return O
                    ? U.Z.Messages.DELETE_FORUM_POST
                    : U.Z.Messages.DELETE_MESSAGE;
                if (e.isThread()) return U.Z.Messages.DELETE_THREAD;
                return U.Z.Messages.DELETE_CHANNEL;
              })(),
              color: "danger",
              action: () => {
                (0, l.w)(e, function () {
                  R
                    ? s.Z.deleteMessage(
                        e.id,
                        f.default.castChannelIdAsMessageId(e.id),
                      )
                    : r.ZP.deleteChannel(e.id);
                });
              },
            })
          : null;
      }
    },
    776568: function (e, n, t) {
      t.d(n, {
        ZP: function () {
          return O;
        },
        k: function () {
          return A;
        },
      }),
        t(47120);
      var i = t(735250);
      t(470079);
      var a = t(913527),
        u = t.n(a),
        r = t(442837),
        s = t(481060),
        l = t(211739),
        o = t(87051),
        c = t(401412),
        E = t(777861),
        d = t(9156),
        f = t(621600),
        _ = t(933557),
        U = t(981631),
        M = t(969943),
        N = t(689938);
      let A = () => [
          {
            value: M.Oe.MINUTES_15,
            label: N.Z.Messages.MUTE_DURATION_15_MINUTES,
          },
          { value: M.Oe.HOURS_1, label: N.Z.Messages.MUTE_DURATION_1_HOUR },
          { value: M.Oe.HOURS_3, label: N.Z.Messages.MUTE_DURATION_3_HOURS },
          { value: M.Oe.HOURS_8, label: N.Z.Messages.MUTE_DURATION_8_HOURS },
          { value: M.Oe.HOURS_24, label: N.Z.Messages.MUTE_DURATION_24_HOURS },
          { value: M.Oe.ALWAYS, label: N.Z.Messages.MUTE_DURATION_ALWAYS },
        ],
        T = (e) => {
          let n = e > 0 ? u()().add(e, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: e, end_time: n },
          };
        };
      function O(e, n) {
        let [t, a] = (0, r.Wu)([d.ZP], () => [
            d.ZP.isChannelMuted(e.guild_id, e.id),
            d.ZP.getChannelMuteConfig(e.guild_id, e.id),
          ]),
          u = (0, E.U)(a),
          M = (0, _.ZP)(e, !0);
        function O(n) {
          n && e.type === U.d4z.GUILD_CATEGORY && (0, l.c4)(e.id),
            o.Z.updateChannelOverrideSettings(
              e.guild_id,
              e.id,
              { muted: n },
              f.UE.muted(n),
            );
        }
        let R = N.Z.Messages.MUTE_CHANNEL_GENERIC,
          C = N.Z.Messages.UNMUTE_CHANNEL_GENERIC;
        switch (e.type) {
          case U.d4z.GUILD_CATEGORY:
            (R = N.Z.Messages.MUTE_CATEGORY),
              (C = N.Z.Messages.UNMUTE_CATEGORY);
            break;
          case U.d4z.GROUP_DM:
            (R = N.Z.Messages.MUTE_CONVERSATION),
              (C = N.Z.Messages.UNMUTE_CONVERSATION);
            break;
          case U.d4z.DM:
            (R = N.Z.Messages.MUTE_CHANNEL.format({ name: M })),
              (C = N.Z.Messages.UNMUTE_CHANNEL.format({ name: M }));
            break;
          default:
            (R = N.Z.Messages.MUTE_CHANNEL_GENERIC),
              (C = N.Z.Messages.UNMUTE_CHANNEL_GENERIC);
        }
        return t
          ? (0, i.jsx)(s.MenuItem, {
              id: "unmute-channel",
              label: C,
              subtext: u,
              action: () => O(!1),
            })
          : (0, i.jsx)(s.MenuItem, {
              id: "mute-channel",
              label: R,
              action: () => {
                O(!0),
                  (0, c.s)({
                    channelId: e.id,
                    location: "channel_context_menu",
                  });
              },
              children: A().map((t) => {
                let { value: a, label: u } = t;
                return (0, i.jsx)(
                  s.MenuItem,
                  {
                    id: "".concat(a),
                    label: u,
                    action: () =>
                      (function (t) {
                        e.type === U.d4z.GUILD_CATEGORY && (0, l.c4)(e.id);
                        let i = T(t);
                        o.Z.updateChannelOverrideSettings(
                          e.guild_id,
                          e.id,
                          i,
                          f.ZB.Muted,
                          n,
                        );
                      })(a),
                  },
                  a,
                );
              }),
            });
      }
    },
    787263: function (e, n, t) {
      t.d(n, {
        w: function () {
          return u;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060);
      function u(e, n) {
        return (0, a.openModalLazy)(async () => {
          let { default: a } = await Promise.all([
            t.e("53115"),
            t.e("79521"),
          ]).then(t.bind(t, 207540));
          return (t) =>
            (0, i.jsx)(a, {
              ...t,
              onConfirm: () => {
                t.onClose(), n();
              },
              channel: e,
            });
        });
      }
    },
    117984: function (e, n, t) {
      t.d(n, {
        CM: function () {
          return U;
        },
        UT: function () {
          return _;
        },
        _Z: function () {
          return T;
        },
        kj: function () {
          return d;
        },
        oC: function () {
          return f;
        },
        s3: function () {
          return N;
        },
        uA: function () {
          return A;
        },
        xh: function () {
          return M;
        },
      }),
        t(47120);
      var i = t(524437),
        a = t(675478),
        u = t(592125),
        r = t(496675),
        s = t(709054),
        l = t(853856),
        o = t(231338);
      function c() {
        let e = l.Z.getFavoriteChannels(),
          n = 1;
        for (let t in e) n = Math.max(n, e[t].order);
        return n + 1;
      }
      function E(e) {
        for (let n in e) {
          let t = e[n];
          if (null == t) {
            delete e[n];
            continue;
          }
          if (t.type === i.Dd.CATEGORY) continue;
          let a = u.Z.getChannel(n);
          if (null == a) {
            delete e[n];
            continue;
          }
          if (!a.isPrivate()) {
            if (!r.Z.can(o.Pl.VIEW_CHANNEL, a)) {
              delete e[n];
              continue;
            }
          }
        }
      }
      function d(e, n) {
        if (!l.Z.isFavorite(e))
          a.hW.updateAsync(
            "favorites",
            (t) => {
              (t.favoriteChannels[e] = i.aV.create({
                nickname: "",
                type: i.Dd.REFERENCE_ORIGINAL,
                position: c(),
                parentId: null != n ? n : "0",
              })),
                E(t.favoriteChannels);
            },
            a.fy.FREQUENT_USER_ACTION,
          );
      }
      function f(e) {
        let n = l.Z.getFavorite(e);
        if (null != n)
          a.hW.updateAsync(
            "favorites",
            (t) => {
              if ((delete t.favoriteChannels[e], n.type === i.Dd.CATEGORY))
                for (let n in t.favoriteChannels)
                  t.favoriteChannels[n].parentId === e &&
                    (t.favoriteChannels[n].parentId = "0");
              E(t.favoriteChannels);
            },
            a.fy.INFREQUENT_USER_ACTION,
          );
      }
      function _(e, n) {
        if (!!l.Z.isFavorite(e))
          a.hW.updateAsync(
            "favorites",
            (t) => {
              t.favoriteChannels[e].nickname = null != n ? n : "";
            },
            a.fy.INFREQUENT_USER_ACTION,
          );
      }
      function U(e) {
        let n = s.default.fromTimestamp(Date.now());
        a.hW.updateAsync(
          "favorites",
          (t) => {
            t.favoriteChannels[n] = i.aV.create({
              nickname: e,
              type: i.Dd.CATEGORY,
              position: c(),
              parentId: "0",
            });
          },
          a.fy.FREQUENT_USER_ACTION,
        );
      }
      function M(e) {
        f(e);
      }
      function N(e) {
        a.hW.updateAsync(
          "favorites",
          (n) => {
            for (let i of e)
              if (
                (null != i.position &&
                  (n.favoriteChannels[i.id].position = i.position),
                void 0 !== i.parent_id)
              ) {
                var t;
                n.favoriteChannels[i.id].parentId =
                  null !== (t = i.parent_id) && void 0 !== t ? t : "0";
              }
          },
          a.fy.FREQUENT_USER_ACTION,
        );
      }
      function A(e, n) {
        a.hW.updateAsync(
          "favorites",
          (t) => {
            t.favoriteChannels[e].parentId = null != n ? n : "0";
          },
          a.fy.FREQUENT_USER_ACTION,
        );
      }
      function T() {
        a.hW.updateAsync(
          "favorites",
          (e) => {
            e.muted = !e.muted;
          },
          a.fy.INFREQUENT_USER_ACTION,
        );
      }
    },
    916069: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var i = t(442837),
        a = t(914010),
        u = t(981631);
      function r() {
        return (0, i.e7)([a.Z], () => a.Z.getGuildId()) === u.I_8;
      }
    },
    423589: function (e, n, t) {
      t.d(n, {
        Mn: function () {
          return M;
        },
        OD: function () {
          return U;
        },
        W9: function () {
          return f;
        },
      }),
        t(47120),
        t(789020);
      var i = t(442837),
        a = t(798140),
        u = t(9156),
        r = t(630388),
        s = t(709054),
        l = t(312400),
        o = t(981631),
        c = t(969943),
        E = t(526761),
        d = t(689938);
      function f() {
        return [
          {
            label: d.Z.Messages.MUTE_DURATION_15_MINUTES,
            value: c.Oe.MINUTES_15,
          },
          { label: d.Z.Messages.MUTE_DURATION_1_HOUR, value: c.Oe.HOURS_1 },
          { label: d.Z.Messages.MUTE_DURATION_3_HOURS, value: c.Oe.HOURS_3 },
          { label: d.Z.Messages.MUTE_DURATION_8_HOURS, value: c.Oe.HOURS_8 },
          { label: d.Z.Messages.MUTE_DURATION_24_HOURS, value: c.Oe.HOURS_24 },
          { label: d.Z.Messages.MUTE_DURATION_ALWAYS, value: c.Oe.ALWAYS },
        ];
      }
      let _ = {
        ignoreMute: !1,
        ignoreUnreadSetting: !0,
        ignoreNotificationSetting: !1,
      };
      function U(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _;
        return s.default.keys(e).filter((t) => {
          var i, u;
          let s = e[t].message_notifications !== o.bL.NULL,
            l =
              r.yE(
                null !== (i = e[t].flags) && void 0 !== i ? i : 0,
                E.ic.UNREADS_ALL_MESSAGES,
              ) ||
              r.yE(
                null !== (u = e[t].flags) && void 0 !== u ? u : 0,
                E.ic.UNREADS_ONLY_MENTIONS,
              );
          return (
            (!n.ignoreUnreadSetting && l) ||
            (!n.ignoreNotificationSetting && s) ||
            (!n.ignoreMute && (0, a.m$)(e[t]))
          );
        });
      }
      function M(e) {
        let n = (0, i.e7)([u.ZP], () => u.ZP.useNewNotifications);
        return (
          l.xT.useExperiment({ location: e }, { autoTrackExposure: !1 })
            .enabled && n
        );
      }
    },
    113449: function (e, n, t) {
      t.d(n, {
        Q4: function () {
          return u;
        },
        YF: function () {
          return r;
        },
        pq: function () {
          return s;
        },
      });
      var i = t(630388),
        a = t(526761);
      function u(e, n) {
        var t;
        return i.pj(
          ((t = e),
          i.M1(t, a.vc.UNREADS_ALL_MESSAGES, a.vc.UNREADS_ONLY_MENTIONS)),
          n,
        );
      }
      let r = (e) =>
        i.M1(e, a.ic.UNREADS_ALL_MESSAGES, a.ic.UNREADS_ONLY_MENTIONS);
      function s(e, n) {
        return i.pj(r(e), n);
      }
    },
    305587: function (e, n, t) {
      t.d(n, {
        Xs: function () {
          return a;
        },
      });
      let i = (0, t(818083).B)({
        kind: "user",
        id: "2024-09_dm_mute_feedback",
        label: "DM Mute Feedback Experiment",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable DM Mute Feedback Survey",
            config: { enabled: !0 },
          },
        ],
      });
      function a(e) {
        let { enabled: n } = i.getCurrentConfig(
          { location: e },
          { autoTrackExposure: !0 },
        );
        return n;
      }
    },
    401412: function (e, n, t) {
      t.d(n, {
        s: function () {
          return l;
        },
      });
      var i = t(704215),
        a = t(570140),
        u = t(605236),
        r = t(592125),
        s = t(305587);
      function l(e) {
        let { channelId: n, location: t } = e,
          l = r.Z.getChannel(n),
          o = (0, u.un)(i.z.USER_DM_MUTE_FEEDBACK);
        if (null != l && !!l.isDM() && !o)
          (0, s.Xs)(t) &&
            a.Z.dispatch({ type: "USER_DM_MUTE_SHOW_FEEDBACK", channel: l });
      }
    },
  },
]);
//# sourceMappingURL=bf41ac156f33093ff17c.js.map
