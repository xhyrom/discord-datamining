"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["50331"],
  {
    883385: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(410575);
      function u(n, t) {
        return function (e) {
          return (0, i.jsx)(r.Z, {
            page: t.page,
            section: t.section,
            object: t.object,
            objectType: t.objectType,
            children: (0, i.jsx)(n, { ...e }),
          });
        };
      }
    },
    108843: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(906732);
      function u(n, t) {
        return function (e) {
          let { analyticsLocations: u } = (0, r.ZP)(t);
          return (0, i.jsx)(r.Gt, {
            value: u,
            children: (0, i.jsx)(n, { ...e }),
          });
        };
      }
    },
    369994: function (n, t, e) {
      e.d(t, {
        C4: function () {
          return E;
        },
        Fi: function () {
          return I;
        },
        KK: function () {
          return f;
        },
        f6: function () {
          return s;
        },
        n: function () {
          return _;
        },
      }),
        e(47120);
      var i = e(913527),
        r = e.n(i),
        u = e(544891),
        l = e(367907),
        o = e(434404),
        a = e(430824),
        c = e(626135),
        d = e(981631);
      function f(n) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (0 !== t.length)
          c.default.track(d.rMx.GUILD_RAID_REPORTED, {
            ...(0, l.hH)(n),
            guild_id: n,
            raid_types: t,
          });
      }
      async function s(n, t) {
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
      async function _(n, t, e, i) {
        let l = r()().add(i, "hours").toISOString();
        return await u.tn.put({
          url: d.ANM.GUILD_INCIDENT_ACTIONS(n),
          body: {
            invites_disabled_until: t ? l : null,
            dms_disabled_until: e ? l : null,
          },
          rejectWithError: !1,
        });
      }
      async function I(n, t, e) {
        let i = a.Z.getGuild(n);
        return null == (null == i ? void 0 : i.getSafetyAlertsChannelId())
          ? null
          : await u.tn.post({
              url: d.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(n),
              body: { alert_message_id: t, reason: e },
              rejectWithError: !1,
            });
      }
      async function E(n) {
        let t = a.Z.getGuild(n);
        return null == (null == t ? void 0 : t.getSafetyAlertsChannelId())
          ? null
          : await u.tn.post({
              url: d.ANM.GUILD_INCIDENT_REPORT_RAID(n),
              rejectWithError: !1,
            });
      }
    },
    191471: function (n, t, e) {
      e.d(t, {
        J: function () {
          return u;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(481060);
      function u(n) {
        (0, r.openModalLazy)(async () => {
          let { default: t } = await e.e("9354").then(e.bind(e, 461533));
          return (e) => (0, i.jsx)(t, { ...e, guildId: n });
        });
      }
      e(558511);
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
      var i = e(442837);
      e(467319);
      var r = e(496675),
        u = e(533244),
        l = e(487419),
        o = e(981631);
      function a(n) {
        let t = (0, i.e7)(
            [r.Z],
            () =>
              (function (n) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : r.Z;
                return (
                  t.can(o.Plq.BAN_MEMBERS, n) ||
                  t.can(o.Plq.KICK_MEMBERS, n) ||
                  t.can(o.Plq.MANAGE_GUILD, n)
                );
              })(n, r.Z),
            [n],
          ),
          e = (0, i.e7)(
            [l.Z],
            () => (null != n ? l.Z.getGuildIncident(n.id) : null),
            [n],
          );
        return !(null != e && (0, u.i9)(e)) && t;
      }
      function c(n) {
        return (0, i.e7)(
          [r.Z],
          () =>
            (function (n) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : r.Z;
              return t.can(o.Plq.MANAGE_GUILD, n);
            })(n, r.Z),
          [n],
        );
      }
    },
    558511: function (n, t, e) {
      e(47120),
        e(200651),
        e(192379),
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
        e(388032),
        e(477688);
    },
    460083: function (n, t, e) {
      e.d(t, {
        d: function () {
          return i;
        },
      });
      let i = (0, e(818083).B)({
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
          return r;
        },
        a: function () {
          return u;
        },
      });
      var i = e(460083);
      function r(n) {
        let { enabled: t } = i.d.getCurrentConfig({
          guildId: n,
          location: "988d4e_3",
        });
        return t;
      }
      function u(n) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          { enabled: e } = i.d.useExperiment(
            { guildId: n, location: "988d4e_4" },
            { autoTrackExposure: t },
          );
        return e;
      }
    },
    158195: function (n, t, e) {
      e.r(t);
      var i = e(200651);
      e(192379);
      var r = e(481060),
        u = e(239091),
        l = e(883385),
        o = e(108843),
        a = e(100527),
        c = e(584836),
        d = e(544642),
        f = e(965244),
        s = e(981631),
        _ = e(388032);
      t.default = (0, o.Z)(
        (0, l.Z)(
          function (n) {
            let { guildId: t, context: e, onSelect: l } = n,
              o = (0, d.Z)(t, e),
              a = (0, f.Z)(t, e),
              s = (0, c.Z)(t, e);
            return (0, i.jsxs)(r.Menu, {
              navId: "moderation-raid-context",
              onClose: u.Zy,
              "aria-label": _.intl.string(_.t.liqwPD),
              onSelect: l,
              children: [
                (0, i.jsx)(r.MenuGroup, { children: a }),
                (0, i.jsxs)(r.MenuGroup, { children: [s, o] }),
              ],
            });
          },
          { object: s.qAy.CONTEXT_MENU },
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
      var i = e(200651);
      e(192379);
      var r = e(481060),
        u = e(37234),
        l = e(434404),
        o = e(981631),
        a = e(388032);
      function c(n, t) {
        return t === o.IlC.POPOUT
          ? null
          : (0, i.jsx)(r.MenuItem, {
              id: "nav-server-settings",
              label: a.intl.string(a.t["154/bG"]),
              action: () => {
                (0, u.xf)(), l.Z.open(n, o.pNK.MODERATION);
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
      var i = e(200651);
      e(192379);
      var r = e(481060),
        u = e(37234),
        l = e(191471),
        o = e(981631),
        a = e(388032);
      function c(n, t) {
        return t === o.IlC.POPOUT
          ? null
          : (0, i.jsx)(r.MenuItem, {
              id: "report-raid",
              label: a.intl.string(a.t.cswId3),
              action: () => {
                (0, u.xf)(), (0, l.J)(n);
              },
            });
      }
    },
    965244: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(442837),
        u = e(481060),
        l = e(666657),
        o = e(533244),
        a = e(487419),
        c = e(430824),
        d = e(981631),
        f = e(388032);
      function s(n, t) {
        let s = t === d.IlC.POPOUT,
          _ = (0, r.e7)([c.Z], () => c.Z.getGuild(n), [n]),
          I = (0, r.e7)([a.Z], () =>
            null != _ ? a.Z.getGuildIncident(_.id) : null,
          );
        return s
          ? null
          : (0, i.jsx)(u.MenuItem, {
              id: "nav-security-actions",
              label: f.intl.string(f.t.UgXhdn),
              action: () => {
                let t = { source: l.Zu.MESSAGE, alertType: (0, o.T1)(I) };
                (0, u.openModalLazy)(async () => {
                  let { default: r } = await e
                    .e("61536")
                    .then(e.bind(e, 664452));
                  return (e) =>
                    (0, i.jsx)(r, { ...e, guildId: n, analyticsData: t });
                });
              },
            });
      }
    },
    477688: function (n, t, e) {
      n.exports = {};
    },
  },
]);
//# sourceMappingURL=b79c50f2407ccc0006e7.js.map
