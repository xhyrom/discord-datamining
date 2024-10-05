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
          return i;
        },
        lc: function () {
          return _;
        },
        mJ: function () {
          return a;
        },
      });
      var u = t(570140);
      function i(e) {
        u.Z.dispatch({ type: "CATEGORY_COLLAPSE", id: e });
      }
      function a(e) {
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
      var i = t(913527),
        a = t.n(i),
        s = t(442837),
        _ = t(481060),
        l = t(211739),
        r = t(87051),
        c = t(401412),
        E = t(777861),
        U = t(9156),
        o = t(621600),
        M = t(933557),
        d = t(981631),
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
          let n = e > 0 ? a()().add(e, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: e, end_time: n },
          };
        };
      function f(e, n) {
        let [t, i] = (0, s.Wu)([U.ZP], () => [
            U.ZP.isChannelMuted(e.guild_id, e.id),
            U.ZP.getChannelMuteConfig(e.guild_id, e.id),
          ]),
          a = (0, E.U)(i),
          O = (0, M.ZP)(e, !0);
        function f(n) {
          n && e.type === d.d4z.GUILD_CATEGORY && (0, l.c4)(e.id),
            r.Z.updateChannelOverrideSettings(
              e.guild_id,
              e.id,
              { muted: n },
              o.UE.muted(n),
            );
        }
        let S = N.Z.Messages.MUTE_CHANNEL_GENERIC,
          g = N.Z.Messages.UNMUTE_CHANNEL_GENERIC;
        switch (e.type) {
          case d.d4z.GUILD_CATEGORY:
            (S = N.Z.Messages.MUTE_CATEGORY),
              (g = N.Z.Messages.UNMUTE_CATEGORY);
            break;
          case d.d4z.GROUP_DM:
            (S = N.Z.Messages.MUTE_CONVERSATION),
              (g = N.Z.Messages.UNMUTE_CONVERSATION);
            break;
          case d.d4z.DM:
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
              subtext: a,
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
                let { value: i, label: a } = t;
                return (0, u.jsx)(
                  _.MenuItem,
                  {
                    id: "".concat(i),
                    label: a,
                    action: () =>
                      (function (t) {
                        e.type === d.d4z.GUILD_CATEGORY && (0, l.c4)(e.id);
                        let u = T(t);
                        r.Z.updateChannelOverrideSettings(
                          e.guild_id,
                          e.id,
                          u,
                          o.ZB.Muted,
                          n,
                        );
                      })(i),
                  },
                  i,
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
        i = t(914010),
        a = t(981631);
      function s() {
        return (0, u.e7)([i.Z], () => i.Z.getGuildId()) === a.I_8;
      }
    },
    423589: function (e, n, t) {
      t.d(n, {
        Mn: function () {
          return O;
        },
        OD: function () {
          return d;
        },
        W9: function () {
          return o;
        },
      }),
        t(47120),
        t(789020);
      var u = t(442837),
        i = t(798140),
        a = t(9156),
        s = t(630388),
        _ = t(709054),
        l = t(312400),
        r = t(981631),
        c = t(969943),
        E = t(526761),
        U = t(689938);
      function o() {
        return [
          {
            label: U.Z.Messages.MUTE_DURATION_15_MINUTES,
            value: c.Oe.MINUTES_15,
          },
          { label: U.Z.Messages.MUTE_DURATION_1_HOUR, value: c.Oe.HOURS_1 },
          { label: U.Z.Messages.MUTE_DURATION_3_HOURS, value: c.Oe.HOURS_3 },
          { label: U.Z.Messages.MUTE_DURATION_8_HOURS, value: c.Oe.HOURS_8 },
          { label: U.Z.Messages.MUTE_DURATION_24_HOURS, value: c.Oe.HOURS_24 },
          { label: U.Z.Messages.MUTE_DURATION_ALWAYS, value: c.Oe.ALWAYS },
        ];
      }
      let M = {
        ignoreMute: !1,
        ignoreUnreadSetting: !0,
        ignoreNotificationSetting: !1,
      };
      function d(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M;
        return _.default.keys(e).filter((t) => {
          var u, a;
          let _ = e[t].message_notifications !== r.bL.NULL,
            l =
              s.yE(
                null !== (u = e[t].flags) && void 0 !== u ? u : 0,
                E.ic.UNREADS_ALL_MESSAGES,
              ) ||
              s.yE(
                null !== (a = e[t].flags) && void 0 !== a ? a : 0,
                E.ic.UNREADS_ONLY_MENTIONS,
              );
          return (
            (!n.ignoreUnreadSetting && l) ||
            (!n.ignoreNotificationSetting && _) ||
            (!n.ignoreMute && (0, i.m$)(e[t]))
          );
        });
      }
      function O(e) {
        let n = (0, u.e7)([a.ZP], () => a.ZP.useNewNotifications);
        return (
          l.xT.useExperiment({ location: e }, { autoTrackExposure: !1 })
            .enabled && n
        );
      }
    },
    113449: function (e, n, t) {
      t.d(n, {
        Q4: function () {
          return a;
        },
        YF: function () {
          return s;
        },
        pq: function () {
          return _;
        },
      });
      var u = t(630388),
        i = t(526761);
      function a(e, n) {
        var t;
        return u.pj(
          ((t = e),
          u.M1(t, i.vc.UNREADS_ALL_MESSAGES, i.vc.UNREADS_ONLY_MENTIONS)),
          n,
        );
      }
      let s = (e) =>
        u.M1(e, i.ic.UNREADS_ALL_MESSAGES, i.ic.UNREADS_ONLY_MENTIONS);
      function _(e, n) {
        return u.pj(s(e), n);
      }
    },
    305587: function (e, n, t) {
      t.d(n, {
        Xs: function () {
          return i;
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
      function i(e) {
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
          return l;
        },
      });
      var u = t(704215),
        i = t(570140),
        a = t(605236),
        s = t(592125),
        _ = t(305587);
      function l(e) {
        let { channelId: n, location: t } = e,
          l = s.Z.getChannel(n),
          r = (0, a.un)(u.z.USER_DM_MUTE_FEEDBACK);
        if (null != l && !!l.isDM() && !r)
          (0, _.Xs)(t) &&
            i.Z.dispatch({ type: "USER_DM_MUTE_SHOW_FEEDBACK", channel: l });
      }
    },
  },
]);
//# sourceMappingURL=90dd29192abeb2f99be0.js.map
