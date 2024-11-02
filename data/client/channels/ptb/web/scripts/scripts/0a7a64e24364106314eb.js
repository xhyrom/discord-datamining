"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["95307"],
  {
    867757: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return o;
          },
        });
      var u = t(200651);
      t(192379);
      var i = t(481060),
        r = t(239091),
        c = t(410575),
        s = t(416977),
        d = t(778123),
        a = t(981631),
        l = t(388032);
      function o(e) {
        let { guildId: n, analyticsContext: t, onSelect: o } = e,
          h = (0, s.Z)(n),
          v = (0, d.Z)(n);
        return (0, u.jsx)(c.Z, {
          context: t,
          object: a.qAy.CONTEXT_MENU,
          children: (0, u.jsxs)(i.Menu, {
            navId: "user-context",
            onClose: r.Zy,
            "aria-label": l.intl.string(l.t.liqwPD),
            onSelect: o,
            children: [
              (0, u.jsx)(i.MenuGroup, { children: h }),
              (0, u.jsx)(i.MenuGroup, { children: v }),
            ],
          }),
        });
      }
    },
    416977: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var u = t(200651);
      t(192379);
      var i = t(442837),
        r = t(481060),
        c = t(45114),
        s = t(306680),
        d = t(490897),
        a = t(388032);
      function l(e) {
        let n = (0, i.e7)([s.ZP], () => s.ZP.hasUnread(e, d.W.GUILD_EVENT), [
          e,
        ]);
        return (0, u.jsx)(r.MenuItem, {
          id: "mark-events-read",
          label: a.intl.string(a.t.e6RscX),
          action: function () {
            (0, c.Ju)(e, d.W.GUILD_EVENT);
          },
          disabled: !n,
        });
      }
    },
    778123: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var u = t(200651);
      t(192379);
      var i = t(442837),
        r = t(481060),
        c = t(87051),
        s = t(9156),
        d = t(621600),
        a = t(388032);
      function l(e) {
        let n = (0, i.e7)([s.ZP], () => s.ZP.isMuteScheduledEventsEnabled(e), [
          e,
        ]);
        return (0, u.jsx)(r.MenuCheckboxItem, {
          id: "mute-events",
          label: a.intl.string(a.t.ONG3Y2),
          action: () => {
            var t;
            return (
              (t = { mute_scheduled_events: !n }),
              void c.Z.updateGuildNotificationSettings(
                e,
                t,
                d.UE.mutedEvents(t.mute_scheduled_events),
              )
            );
          },
          checked: n,
        });
      }
    },
  },
]);
//# sourceMappingURL=0a7a64e24364106314eb.js.map
