"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33260"],
  {
    211739: function (e, n, t) {
      t.d(n, {
        N5: function () {
          return s;
        },
        c4: function () {
          return a;
        },
        lc: function () {
          return _;
        },
        mJ: function () {
          return i;
        },
      });
      var u = t(570140);
      function a(e) {
        u.Z.dispatch({ type: "CATEGORY_COLLAPSE", id: e });
      }
      function i(e) {
        u.Z.dispatch({ type: "CATEGORY_EXPAND", id: e });
      }
      function s(e) {
        u.Z.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: e });
      }
      function _(e) {
        u.Z.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: e });
      }
    },
    776568: function (e, n, t) {
      t.d(n, {
        ZP: function () {
          return f;
        },
        k: function () {
          return A;
        },
      }),
        t(47120);
      var u = t(735250);
      t(470079);
      var a = t(913527),
        i = t.n(a),
        s = t(442837),
        _ = t(481060),
        l = t(211739),
        r = t(92114),
        c = t(401412),
        E = t(777861),
        o = t(9156),
        U = t(621600),
        d = t(933557),
        M = t(981631),
        O = t(969943),
        N = t(689938);
      let A = () => [
          {
            value: O.Oe.MINUTES_15,
            label: N.Z.Messages.MUTE_DURATION_15_MINUTES,
          },
          { value: O.Oe.HOURS_1, label: N.Z.Messages.MUTE_DURATION_1_HOUR },
          { value: O.Oe.HOURS_3, label: N.Z.Messages.MUTE_DURATION_3_HOURS },
          { value: O.Oe.HOURS_8, label: N.Z.Messages.MUTE_DURATION_8_HOURS },
          { value: O.Oe.HOURS_24, label: N.Z.Messages.MUTE_DURATION_24_HOURS },
          { value: O.Oe.ALWAYS, label: N.Z.Messages.MUTE_DURATION_ALWAYS },
        ],
        T = (e) => {
          let n = e > 0 ? i()().add(e, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: e, end_time: n },
          };
        };
      function f(e, n) {
        let [t, a] = (0, s.Wu)([o.ZP], () => [
            o.ZP.isChannelMuted(e.guild_id, e.id),
            o.ZP.getChannelMuteConfig(e.guild_id, e.id),
          ]),
          i = (0, E.U)(a),
          O = (0, d.ZP)(e, !0);
        function f(n) {
          n && e.type === M.d4z.GUILD_CATEGORY && (0, l.c4)(e.id),
            r.Z.updateChannelOverrideSettings(
              e.guild_id,
              e.id,
              { muted: n },
              U.UE.muted(n),
            );
        }
        let S = N.Z.Messages.MUTE_CHANNEL_GENERIC,
          g = N.Z.Messages.UNMUTE_CHANNEL_GENERIC;
        switch (e.type) {
          case M.d4z.GUILD_CATEGORY:
            (S = N.Z.Messages.MUTE_CATEGORY),
              (g = N.Z.Messages.UNMUTE_CATEGORY);
            break;
          case M.d4z.GROUP_DM:
            (S = N.Z.Messages.MUTE_CONVERSATION),
              (g = N.Z.Messages.UNMUTE_CONVERSATION);
            break;
          case M.d4z.DM:
            (S = N.Z.Messages.MUTE_CHANNEL.format({ name: O })),
              (g = N.Z.Messages.UNMUTE_CHANNEL.format({ name: O }));
            break;
          default:
            (S = N.Z.Messages.MUTE_CHANNEL_GENERIC),
              (g = N.Z.Messages.UNMUTE_CHANNEL_GENERIC);
        }
        return t
          ? (0, u.jsx)(_.MenuItem, {
              id: "unmute-channel",
              label: g,
              subtext: i,
              action: () => f(!1),
            })
          : (0, u.jsx)(_.MenuItem, {
              id: "mute-channel",
              label: S,
              action: () => {
                f(!0),
                  (0, c.s)({
                    channelId: e.id,
                    location: "channel_context_menu",
                  });
              },
              children: A().map((t) => {
                let { value: a, label: i } = t;
                return (0, u.jsx)(
                  _.MenuItem,
                  {
                    id: "".concat(a),
                    label: i,
                    action: () =>
                      (function (t) {
                        e.type === M.d4z.GUILD_CATEGORY && (0, l.c4)(e.id);
                        let u = T(t);
                        r.Z.updateChannelOverrideSettings(
                          e.guild_id,
                          e.id,
                          u,
                          U.ZB.Muted,
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
    916069: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var u = t(442837),
        a = t(914010),
        i = t(981631);
      function s() {
        return (0, u.e7)([a.Z], () => a.Z.getGuildId()) === i.I_8;
      }
    },
    423589: function (e, n, t) {
      t.d(n, {
        Mn: function () {
          return O;
        },
        OD: function () {
          return M;
        },
        W9: function () {
          return U;
        },
      }),
        t(47120),
        t(789020);
      var u = t(442837),
        a = t(798140),
        i = t(9156),
        s = t(630388),
        _ = t(709054),
        l = t(312400),
        r = t(981631),
        c = t(969943),
        E = t(526761),
        o = t(689938);
      function U() {
        return [
          {
            label: o.Z.Messages.MUTE_DURATION_15_MINUTES,
            value: c.Oe.MINUTES_15,
          },
          { label: o.Z.Messages.MUTE_DURATION_1_HOUR, value: c.Oe.HOURS_1 },
          { label: o.Z.Messages.MUTE_DURATION_3_HOURS, value: c.Oe.HOURS_3 },
          { label: o.Z.Messages.MUTE_DURATION_8_HOURS, value: c.Oe.HOURS_8 },
          { label: o.Z.Messages.MUTE_DURATION_24_HOURS, value: c.Oe.HOURS_24 },
          { label: o.Z.Messages.MUTE_DURATION_ALWAYS, value: c.Oe.ALWAYS },
        ];
      }
      let d = {
        ignoreMute: !1,
        ignoreUnreadSetting: !0,
        ignoreNotificationSetting: !1,
      };
      function M(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d;
        return _.default.keys(e).filter((t) => {
          var u, i;
          let _ = e[t].message_notifications !== r.bL.NULL,
            l =
              s.yE(
                null !== (u = e[t].flags) && void 0 !== u ? u : 0,
                E.ic.UNREADS_ALL_MESSAGES,
              ) ||
              s.yE(
                null !== (i = e[t].flags) && void 0 !== i ? i : 0,
                E.ic.UNREADS_ONLY_MENTIONS,
              );
          return (
            (!n.ignoreUnreadSetting && l) ||
            (!n.ignoreNotificationSetting && _) ||
            (!n.ignoreMute && (0, a.m$)(e[t]))
          );
        });
      }
      function O(e) {
        let n = (0, u.e7)([i.ZP], () => i.ZP.useNewNotifications);
        return (
          l.xT.useExperiment({ location: e }, { autoTrackExposure: !1 })
            .enabled && n
        );
      }
    },
    113449: function (e, n, t) {
      t.d(n, {
        Q4: function () {
          return i;
        },
        YF: function () {
          return s;
        },
        pq: function () {
          return _;
        },
      });
      var u = t(630388),
        a = t(526761);
      function i(e, n) {
        var t;
        return u.pj(
          ((t = e),
          u.M1(t, a.vc.UNREADS_ALL_MESSAGES, a.vc.UNREADS_ONLY_MENTIONS)),
          n,
        );
      }
      let s = (e) =>
        u.M1(e, a.ic.UNREADS_ALL_MESSAGES, a.ic.UNREADS_ONLY_MENTIONS);
      function _(e, n) {
        return u.pj(s(e), n);
      }
    },
    305587: function (e, n, t) {
      t.d(n, {
        Xs: function () {
          return a;
        },
      });
      let u = (0, t(818083).B)({
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
        let { enabled: n } = u.getCurrentConfig(
          { location: e },
          { autoTrackExposure: !0 },
        );
        return n;
      }
    },
    401412: function (e, n, t) {
      t.d(n, {
        s: function () {
          return s;
        },
      });
      var u = t(570140),
        a = t(592125),
        i = t(305587);
      function s(e) {
        let { channelId: n, location: t } = e,
          s = (0, i.Xs)(t),
          _ = a.Z.getChannel(n);
        s &&
          null != _ &&
          _.isDM() &&
          u.Z.dispatch({ type: "USER_DM_MUTE_SHOW_FEEDBACK", channel: _ });
      }
    },
  },
]);
//# sourceMappingURL=438d2fcd5a58da7cfee9.js.map
