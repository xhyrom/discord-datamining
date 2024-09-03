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
          return u;
        },
        lc: function () {
          return l;
        },
        mJ: function () {
          return i;
        },
      });
      var a = t(570140);
      function u(e) {
        a.Z.dispatch({ type: "CATEGORY_COLLAPSE", id: e });
      }
      function i(e) {
        a.Z.dispatch({ type: "CATEGORY_EXPAND", id: e });
      }
      function s(e) {
        a.Z.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: e });
      }
      function l(e) {
        a.Z.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: e });
      }
    },
    776568: function (e, n, t) {
      t.d(n, {
        ZP: function () {
          return T;
        },
        k: function () {
          return f;
        },
      }),
        t(47120);
      var a = t(735250);
      t(470079);
      var u = t(913527),
        i = t.n(u),
        s = t(442837),
        l = t(481060),
        r = t(211739),
        _ = t(92114),
        c = t(401412),
        o = t(777861),
        E = t(9156),
        d = t(621600),
        U = t(933557),
        M = t(981631),
        O = t(969943),
        N = t(689938);
      let f = () => [
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
        A = (e) => {
          let n = e > 0 ? i()().add(e, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: e, end_time: n },
          };
        };
      function T(e, n) {
        let [t, u] = (0, s.Wu)([E.ZP], () => [
            E.ZP.isChannelMuted(e.guild_id, e.id),
            E.ZP.getChannelMuteConfig(e.guild_id, e.id),
          ]),
          i = (0, o.U)(u),
          O = (0, U.ZP)(e, !0);
        function T(n) {
          n && e.type === M.d4z.GUILD_CATEGORY && (0, r.c4)(e.id),
            _.Z.updateChannelOverrideSettings(
              e.guild_id,
              e.id,
              { muted: n },
              d.UE.muted(n),
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
          ? (0, a.jsx)(l.MenuItem, {
              id: "unmute-channel",
              label: g,
              subtext: i,
              action: () => T(!1),
            })
          : (0, a.jsx)(l.MenuItem, {
              id: "mute-channel",
              label: S,
              action: () => {
                T(!0),
                  (0, c.s)({
                    channelId: e.id,
                    location: "channel_context_menu",
                  });
              },
              children: f().map((t) => {
                let { value: u, label: i } = t;
                return (0, a.jsx)(
                  l.MenuItem,
                  {
                    id: "".concat(u),
                    label: i,
                    action: () =>
                      (function (t) {
                        e.type === M.d4z.GUILD_CATEGORY && (0, r.c4)(e.id);
                        let a = A(t);
                        _.Z.updateChannelOverrideSettings(
                          e.guild_id,
                          e.id,
                          a,
                          d.ZB.Muted,
                          n,
                        );
                      })(u),
                  },
                  u,
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
      var a = t(442837),
        u = t(914010),
        i = t(981631);
      function s() {
        return (0, a.e7)([u.Z], () => u.Z.getGuildId()) === i.I_8;
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
          return d;
        },
      }),
        t(47120),
        t(789020);
      var a = t(442837),
        u = t(798140),
        i = t(9156),
        s = t(630388),
        l = t(709054),
        r = t(312400),
        _ = t(981631),
        c = t(969943),
        o = t(526761),
        E = t(689938);
      function d() {
        return [
          {
            label: E.Z.Messages.MUTE_DURATION_15_MINUTES,
            value: c.Oe.MINUTES_15,
          },
          { label: E.Z.Messages.MUTE_DURATION_1_HOUR, value: c.Oe.HOURS_1 },
          { label: E.Z.Messages.MUTE_DURATION_3_HOURS, value: c.Oe.HOURS_3 },
          { label: E.Z.Messages.MUTE_DURATION_8_HOURS, value: c.Oe.HOURS_8 },
          { label: E.Z.Messages.MUTE_DURATION_24_HOURS, value: c.Oe.HOURS_24 },
          { label: E.Z.Messages.MUTE_DURATION_ALWAYS, value: c.Oe.ALWAYS },
        ];
      }
      let U = {
        ignoreMute: !1,
        ignoreUnreadSetting: !0,
        ignoreNotificationSetting: !1,
      };
      function M(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U;
        return l.default.keys(e).filter((t) => {
          var a, i;
          let l = e[t].message_notifications !== _.bL.NULL,
            r =
              s.yE(
                null !== (a = e[t].flags) && void 0 !== a ? a : 0,
                o.ic.UNREADS_ALL_MESSAGES,
              ) ||
              s.yE(
                null !== (i = e[t].flags) && void 0 !== i ? i : 0,
                o.ic.UNREADS_ONLY_MENTIONS,
              );
          return (
            (!n.ignoreUnreadSetting && r) ||
            (!n.ignoreNotificationSetting && l) ||
            (!n.ignoreMute && (0, u.m$)(e[t]))
          );
        });
      }
      function O(e) {
        let n = (0, a.e7)([i.ZP], () => i.ZP.useNewNotifications);
        return (
          r.xT.useExperiment({ location: e }, { autoTrackExposure: !1 })
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
          return l;
        },
      });
      var a = t(630388),
        u = t(526761);
      function i(e, n) {
        var t;
        return a.pj(
          ((t = e),
          a.M1(t, u.vc.UNREADS_ALL_MESSAGES, u.vc.UNREADS_ONLY_MENTIONS)),
          n,
        );
      }
      let s = (e) =>
        a.M1(e, u.ic.UNREADS_ALL_MESSAGES, u.ic.UNREADS_ONLY_MENTIONS);
      function l(e, n) {
        return a.pj(s(e), n);
      }
    },
    305587: function (e, n, t) {
      t.d(n, {
        Xs: function () {
          return u;
        },
      });
      let a = (0, t(818083).B)({
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
      function u(e) {
        let { enabled: n } = a.getCurrentConfig(
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
      var a = t(735250),
        u = t(481060),
        i = t(592125),
        s = t(305587);
      function l(e) {
        let { channelId: n, location: l } = e,
          r = (0, s.Xs)(l),
          _ = i.Z.getChannel(n);
        r &&
          null != _ &&
          _.isDM() &&
          (0, u.openModalLazy)(async () => {
            let { default: e } = await t.e("10620").then(t.bind(t, 408561));
            return (n) => (0, a.jsx)(e, { ...n, channel: _ });
          });
      }
    },
  },
]);
//# sourceMappingURL=33fdbf366ef688bff3e2.js.map
