"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["95307"],
  {
    867757: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return l;
          },
        });
      var u = t(735250);
      t(470079);
      var s = t(481060),
        r = t(239091),
        c = t(410575),
        i = t(416977),
        a = t(778123),
        d = t(981631),
        o = t(689938);
      function l(e) {
        let { guildId: n, analyticsContext: t, onSelect: l } = e,
          E = (0, i.Z)(n),
          _ = (0, a.Z)(n);
        return (0, u.jsx)(c.Z, {
          context: t,
          object: d.qAy.CONTEXT_MENU,
          children: (0, u.jsxs)(s.Menu, {
            navId: "user-context",
            onClose: r.Zy,
            "aria-label": o.Z.Messages.USER_ACTIONS_MENU_LABEL,
            onSelect: l,
            children: [
              (0, u.jsx)(s.MenuGroup, { children: E }),
              (0, u.jsx)(s.MenuGroup, { children: _ }),
            ],
          }),
        });
      }
    },
    416977: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var u = t(735250);
      t(470079);
      var s = t(442837),
        r = t(481060),
        c = t(45114),
        i = t(306680),
        a = t(490897),
        d = t(689938);
      function o(e) {
        let n = (0, s.e7)([i.ZP], () => i.ZP.hasUnread(e, a.W.GUILD_EVENT), [
          e,
        ]);
        return (0, u.jsx)(r.MenuItem, {
          id: "mark-events-read",
          label: d.Z.Messages.MARK_AS_READ,
          action: function () {
            (0, c.Ju)(e, a.W.GUILD_EVENT);
          },
          disabled: !n,
        });
      }
    },
    778123: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var u = t(735250);
      t(470079);
      var s = t(442837),
        r = t(481060),
        c = t(87051),
        i = t(9156),
        a = t(621600),
        d = t(689938);
      function o(e) {
        let n = (0, s.e7)([i.ZP], () => i.ZP.isMuteScheduledEventsEnabled(e), [
          e,
        ]);
        return (0, u.jsx)(r.MenuCheckboxItem, {
          id: "mute-events",
          label: d.Z.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
          action: () => {
            var t;
            return (
              (t = { mute_scheduled_events: !n }),
              void c.Z.updateGuildNotificationSettings(
                e,
                t,
                a.UE.mutedEvents(t.mute_scheduled_events),
              )
            );
          },
          checked: n,
        });
      }
    },
  },
]);
//# sourceMappingURL=20f6d16b889be4206095.js.map
