"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["50331"],
  {
    883385: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return r;
        },
      });
      var u = e(735250);
      e(470079);
      var i = e(410575);
      function r(n, t) {
        return function (e) {
          return (0, u.jsx)(i.Z, {
            page: t.page,
            section: t.section,
            object: t.object,
            objectType: t.objectType,
            children: (0, u.jsx)(n, { ...e }),
          });
        };
      }
    },
    108843: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return r;
        },
      });
      var u = e(735250);
      e(470079);
      var i = e(906732);
      function r(n, t) {
        return function (e) {
          let { analyticsLocations: r } = (0, i.ZP)(t);
          return (0, u.jsx)(i.Gt, {
            value: r,
            children: (0, u.jsx)(n, { ...e }),
          });
        };
      }
    },
    369994: function (n, t, e) {
      e.d(t, {
        C4: function () {
          return A;
        },
        Fi: function () {
          return I;
        },
        KK: function () {
          return s;
        },
        f6: function () {
          return f;
        },
        n: function () {
          return _;
        },
      }),
        e(47120);
      var u = e(913527),
        i = e.n(u),
        r = e(544891),
        l = e(367907),
        o = e(434404),
        a = e(430824),
        c = e(626135),
        d = e(981631);
      function s(n) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (0 !== t.length)
          c.default.track(d.rMx.GUILD_RAID_REPORTED, {
            ...(0, l.hH)(n),
            guild_id: n,
            raid_types: t,
          });
      }
      async function f(n, t) {
        let e = new Set(n.features);
        e.has(d.oNc.COMMUNITY)
          ? t
            ? e.delete(d.oNc.RAID_ALERTS_DISABLED)
            : e.add(d.oNc.RAID_ALERTS_DISABLED)
          : t
            ? e.add(d.oNc.NON_COMMUNITY_RAID_ALERTS)
            : e.delete(d.oNc.NON_COMMUNITY_RAID_ALERTS),
          await o.Z.saveGuild(n.id, { features: e }, { throwErr: !0 });
      }
      async function _(n, t, e, u) {
        let l = i()().add(u, "hours").toISOString();
        return await r.tn.put({
          url: d.ANM.GUILD_INCIDENT_ACTIONS(n),
          body: {
            invites_disabled_until: t ? l : null,
            dms_disabled_until: e ? l : null,
          },
        });
      }
      async function I(n, t, e) {
        let u = a.Z.getGuild(n);
        return null == (null == u ? void 0 : u.getSafetyAlertsChannelId())
          ? null
          : await r.tn.post({
              url: d.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(n),
              body: { alert_message_id: t, reason: e },
            });
      }
      async function A(n) {
        let t = a.Z.getGuild(n);
        return null == (null == t ? void 0 : t.getSafetyAlertsChannelId())
          ? null
          : await r.tn.post({ url: d.ANM.GUILD_INCIDENT_REPORT_RAID(n) });
      }
    },
    191471: function (n, t, e) {
      e.d(t, {
        J: function () {
          return r;
        },
      });
      var u = e(735250);
      e(470079);
      var i = e(481060);
      function r(n) {
        (0, i.openModalLazy)(async () => {
          let { default: t } = await e.e("9354").then(e.bind(e, 461533));
          return (e) => (0, u.jsx)(t, { ...e, guildId: n });
        });
      }
      e(866266);
    },
    162157: function (n, t, e) {
      e.d(t, {
        BT: function () {
          return c;
        },
        N8: function () {
          return a;
        },
      });
      var u = e(442837);
      e(467319);
      var i = e(496675),
        r = e(533244),
        l = e(487419),
        o = e(981631);
      function a(n) {
        let t = (0, u.e7)(
            [i.Z],
            () =>
              (function (n) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : i.Z;
                return (
                  t.can(o.Plq.BAN_MEMBERS, n) ||
                  t.can(o.Plq.KICK_MEMBERS, n) ||
                  t.can(o.Plq.MANAGE_GUILD, n)
                );
              })(n, i.Z),
            [n],
          ),
          e = (0, u.e7)(
            [l.Z],
            () => (null != n ? l.Z.getGuildIncident(n.id) : null),
            [n],
          );
        return !(null != e && (0, r.i9)(e)) && t;
      }
      function c(n) {
        return (0, u.e7)(
          [i.Z],
          () =>
            (function (n) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : i.Z;
              return t.can(o.Plq.MANAGE_GUILD, n);
            })(n, i.Z),
          [n],
        );
      }
    },
    866266: function (n, t, e) {
      e(47120),
        e(735250),
        e(470079),
        e(106351),
        e(442837),
        e(481060),
        e(367907),
        e(933557),
        e(177862),
        e(434404),
        e(984933),
        e(430824),
        e(699516),
        e(594174),
        e(369994),
        e(162157),
        e(981631),
        e(689938),
        e(563953);
    },
    460083: function (n, t, e) {
      e.d(t, {
        d: function () {
          return u;
        },
      });
      let u = (0, e(818083).B)({
        kind: "guild",
        id: "2022-12_mention_raid_limit",
        label: "Automod Mention Raid Limit",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Automod Mention Raid Limit",
            config: { enabled: !0 },
          },
        ],
      });
    },
    467319: function (n, t, e) {
      e.d(t, {
        H: function () {
          return i;
        },
        a: function () {
          return r;
        },
      });
      var u = e(460083);
      function i(n) {
        let { enabled: t } = u.d.getCurrentConfig({
          guildId: n,
          location: "988d4e_3",
        });
        return t;
      }
      function r(n) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          { enabled: e } = u.d.useExperiment(
            { guildId: n, location: "988d4e_4" },
            { autoTrackExposure: t },
          );
        return e;
      }
    },
    158195: function (n, t, e) {
      e.r(t);
      var u = e(735250);
      e(470079);
      var i = e(481060),
        r = e(239091),
        l = e(883385),
        o = e(108843),
        a = e(100527),
        c = e(584836),
        d = e(544642),
        s = e(965244),
        f = e(981631),
        _ = e(689938);
      t.default = (0, o.Z)(
        (0, l.Z)(
          function (n) {
            let { guildId: t, context: e, onSelect: l } = n,
              o = (0, d.Z)(t, e),
              a = (0, s.Z)(t, e),
              f = (0, c.Z)(t, e);
            return (0, u.jsxs)(i.Menu, {
              navId: "moderation-raid-context",
              onClose: r.Zy,
              "aria-label": _.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: l,
              children: [
                (0, u.jsx)(i.MenuGroup, { children: a }),
                (0, u.jsxs)(i.MenuGroup, { children: [f, o] }),
              ],
            });
          },
          { object: f.qAy.CONTEXT_MENU },
        ),
        [a.Z.CONTEXT_MENU, a.Z.GUILD_MODERATION_RAID_MENU],
      );
    },
    584836: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return c;
        },
      });
      var u = e(735250);
      e(470079);
      var i = e(481060),
        r = e(37234),
        l = e(434404),
        o = e(981631),
        a = e(689938);
      function c(n, t) {
        return t === o.IlC.POPOUT
          ? null
          : (0, u.jsx)(i.MenuItem, {
              id: "nav-server-settings",
              label: a.Z.Messages.SERVER_SETTINGS,
              action: () => {
                (0, r.xf)(), l.Z.open(n, o.pNK.MODERATION);
              },
            });
      }
    },
    544642: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return c;
        },
      });
      var u = e(735250);
      e(470079);
      var i = e(481060),
        r = e(37234),
        l = e(191471),
        o = e(981631),
        a = e(689938);
      function c(n, t) {
        return t === o.IlC.POPOUT
          ? null
          : (0, u.jsx)(i.MenuItem, {
              id: "report-raid",
              label: a.Z.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,
              action: () => {
                (0, r.xf)(), (0, l.J)(n);
              },
            });
      }
    },
    965244: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return f;
        },
      });
      var u = e(735250);
      e(470079);
      var i = e(442837),
        r = e(481060),
        l = e(666657),
        o = e(533244),
        a = e(487419),
        c = e(430824),
        d = e(981631),
        s = e(689938);
      function f(n, t) {
        let f = t === d.IlC.POPOUT,
          _ = (0, i.e7)([c.Z], () => c.Z.getGuild(n), [n]),
          I = (0, i.e7)([a.Z], () =>
            null != _ ? a.Z.getGuildIncident(_.id) : null,
          );
        return f
          ? null
          : (0, u.jsx)(r.MenuItem, {
              id: "nav-security-actions",
              label: s.Z.Messages.GUILD_ANTIRAID_NAGBAR_ACTION,
              action: () => {
                let t = { source: l.Zu.MESSAGE, alertType: (0, o.T1)(I) };
                (0, r.openModalLazy)(async () => {
                  let { default: i } = await e
                    .e("61536")
                    .then(e.bind(e, 664452));
                  return (e) =>
                    (0, u.jsx)(i, { ...e, guildId: n, analyticsData: t });
                });
              },
            });
      }
    },
    563953: function (n, t, e) {
      n.exports = {};
    },
  },
]);
//# sourceMappingURL=47d138e9df002ad5d147.js.map
