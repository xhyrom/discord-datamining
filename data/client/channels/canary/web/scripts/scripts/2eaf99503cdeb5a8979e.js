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
      function s(e) {
        i.Z.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: e });
      }
      function _(e) {
        i.Z.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: e });
      }
    },
    776568: function (e, n, t) {
      t.d(n, {
        ZP: function () {
          return T;
        },
        k: function () {
          return d;
        },
      }),
        t(47120);
      var i = t(735250);
      t(470079);
      var a = t(913527),
        u = t.n(a),
        s = t(442837),
        _ = t(481060),
        l = t(211739),
        r = t(92114),
        E = t(777861),
        U = t(9156),
        c = t(621600),
        M = t(933557),
        O = t(981631),
        N = t(969943),
        o = t(689938);
      let d = () => [
          {
            value: N.Oe.MINUTES_15,
            label: o.Z.Messages.MUTE_DURATION_15_MINUTES,
          },
          { value: N.Oe.HOURS_1, label: o.Z.Messages.MUTE_DURATION_1_HOUR },
          { value: N.Oe.HOURS_3, label: o.Z.Messages.MUTE_DURATION_3_HOURS },
          { value: N.Oe.HOURS_8, label: o.Z.Messages.MUTE_DURATION_8_HOURS },
          { value: N.Oe.HOURS_24, label: o.Z.Messages.MUTE_DURATION_24_HOURS },
          { value: N.Oe.ALWAYS, label: o.Z.Messages.MUTE_DURATION_ALWAYS },
        ],
        A = (e) => {
          let n = e > 0 ? u()().add(e, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: e, end_time: n },
          };
        };
      function T(e, n) {
        let [t, a] = (0, s.Wu)([U.ZP], () => [
            U.ZP.isChannelMuted(e.guild_id, e.id),
            U.ZP.getChannelMuteConfig(e.guild_id, e.id),
          ]),
          u = (0, E.U)(a),
          N = (0, M.ZP)(e, !0);
        function T(n) {
          n && e.type === O.d4z.GUILD_CATEGORY && (0, l.c4)(e.id),
            r.Z.updateChannelOverrideSettings(
              e.guild_id,
              e.id,
              { muted: n },
              c.UE.muted(n),
            );
        }
        let S = o.Z.Messages.MUTE_CHANNEL_GENERIC,
          R = o.Z.Messages.UNMUTE_CHANNEL_GENERIC;
        switch (e.type) {
          case O.d4z.GUILD_CATEGORY:
            (S = o.Z.Messages.MUTE_CATEGORY),
              (R = o.Z.Messages.UNMUTE_CATEGORY);
            break;
          case O.d4z.GROUP_DM:
            (S = o.Z.Messages.MUTE_CONVERSATION),
              (R = o.Z.Messages.UNMUTE_CONVERSATION);
            break;
          case O.d4z.DM:
            (S = o.Z.Messages.MUTE_CHANNEL.format({ name: N })),
              (R = o.Z.Messages.UNMUTE_CHANNEL.format({ name: N }));
            break;
          default:
            (S = o.Z.Messages.MUTE_CHANNEL_GENERIC),
              (R = o.Z.Messages.UNMUTE_CHANNEL_GENERIC);
        }
        return t
          ? (0, i.jsx)(_.MenuItem, {
              id: "unmute-channel",
              label: R,
              subtext: u,
              action: () => T(!1),
            })
          : (0, i.jsx)(_.MenuItem, {
              id: "mute-channel",
              label: S,
              action: () => T(!0),
              children: d().map((t) => {
                let { value: a, label: u } = t;
                return (0, i.jsx)(
                  _.MenuItem,
                  {
                    id: "".concat(a),
                    label: u,
                    action: () =>
                      (function (t) {
                        e.type === O.d4z.GUILD_CATEGORY && (0, l.c4)(e.id);
                        let i = A(t);
                        r.Z.updateChannelOverrideSettings(
                          e.guild_id,
                          e.id,
                          i,
                          c.ZB.Muted,
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
      var i = t(442837),
        a = t(914010),
        u = t(981631);
      function s() {
        return (0, i.e7)([a.Z], () => a.Z.getGuildId()) === u.I_8;
      }
    },
    423589: function (e, n, t) {
      t.d(n, {
        Mn: function () {
          return o;
        },
        OD: function () {
          return N;
        },
        W9: function () {
          return M;
        },
      }),
        t(47120),
        t(789020);
      var i = t(442837),
        a = t(798140),
        u = t(9156),
        s = t(630388),
        _ = t(709054),
        l = t(312400),
        r = t(981631),
        E = t(969943),
        U = t(526761),
        c = t(689938);
      function M() {
        return [
          {
            label: c.Z.Messages.MUTE_DURATION_15_MINUTES,
            value: E.Oe.MINUTES_15,
          },
          { label: c.Z.Messages.MUTE_DURATION_1_HOUR, value: E.Oe.HOURS_1 },
          { label: c.Z.Messages.MUTE_DURATION_3_HOURS, value: E.Oe.HOURS_3 },
          { label: c.Z.Messages.MUTE_DURATION_8_HOURS, value: E.Oe.HOURS_8 },
          { label: c.Z.Messages.MUTE_DURATION_24_HOURS, value: E.Oe.HOURS_24 },
          { label: c.Z.Messages.MUTE_DURATION_ALWAYS, value: E.Oe.ALWAYS },
        ];
      }
      let O = {
        ignoreMute: !1,
        ignoreUnreadSetting: !0,
        ignoreNotificationSetting: !1,
      };
      function N(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O;
        return _.default.keys(e).filter((t) => {
          var i, u;
          let _ = e[t].message_notifications !== r.bL.NULL,
            l =
              s.yE(
                null !== (i = e[t].flags) && void 0 !== i ? i : 0,
                U.ic.UNREADS_ALL_MESSAGES,
              ) ||
              s.yE(
                null !== (u = e[t].flags) && void 0 !== u ? u : 0,
                U.ic.UNREADS_ONLY_MENTIONS,
              );
          return (
            (!n.ignoreUnreadSetting && l) ||
            (!n.ignoreNotificationSetting && _) ||
            (!n.ignoreMute && (0, a.m$)(e[t]))
          );
        });
      }
      function o(e) {
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
          return s;
        },
        pq: function () {
          return _;
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
      let s = (e) =>
        i.M1(e, a.ic.UNREADS_ALL_MESSAGES, a.ic.UNREADS_ONLY_MENTIONS);
      function _(e, n) {
        return i.pj(s(e), n);
      }
    },
  },
]);
//# sourceMappingURL=2eaf99503cdeb5a8979e.js.map
