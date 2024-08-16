"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["6045"],
  {
    883150: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return M;
          },
        });
      var a = t(735250);
      t(470079);
      var s = t(913527),
        i = t.n(s),
        r = t(481060),
        l = t(239091),
        u = t(324701),
        d = t(898150),
        o = t(689938);
      function M(e) {
        let { message: n } = e,
          t = (0, d.useMessageReminderDurationSuggestions)({
            onSelectDuration: (e) =>
              (0, u.z)({
                channelId: n.channel_id,
                messageId: n.id,
                dueAt: i()().add(e, "millisecond").toDate(),
              }),
          });
        return (0, a.jsx)(r.Menu, {
          navId: "message-reminder-snooze",
          onClose: l.Zy,
          "aria-label": o.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: () => {},
          children: t,
        });
      }
    },
    898150: function (e, n, t) {
      t.r(n),
        t.d(n, {
          MESSAGE_REMINDER_DURATION_ITEMS: function () {
            return M;
          },
          MessageReminderEditMenu: function () {
            return E;
          },
          useMessageReminderDurationSuggestions: function () {
            return c;
          },
        }),
        t(653041);
      var a = t(735250);
      t(470079);
      var s = t(913527),
        i = t.n(s),
        r = t(481060),
        l = t(239091),
        u = t(70956),
        d = t(324701),
        o = t(689938);
      let M = [
        {
          duration: 30 * u.Z.Millis.MINUTE,
          getLabel: () => o.Z.Messages.MESSAGE_REMINDERS_IN_THIRTY_MIN,
        },
        {
          duration: u.Z.Millis.HOUR,
          getLabel: () => o.Z.Messages.MESSAGE_REMINDERS_IN_ONE_HOUR,
        },
        {
          duration: 2 * u.Z.Millis.HOUR,
          getLabel: () => o.Z.Messages.MESSAGE_REMINDERS_IN_TWO_HOURS,
        },
        {
          duration: 4 * u.Z.Millis.HOUR,
          getLabel: () => o.Z.Messages.MESSAGE_REMINDERS_IN_FOUR_HOURS,
        },
      ];
      function c(e) {
        let { onSelectDuration: n, showCustom: s = !0 } = e,
          i = M.map((e) => {
            let { duration: t, getLabel: s } = e;
            return (0, a.jsx)(
              r.MenuItem,
              {
                id: "create-reminder-".concat(t),
                label: s(),
                action: () => n(t),
              },
              t,
            );
          });
        return (
          s &&
            i.push(
              (0, a.jsx)(
                r.MenuItem,
                {
                  id: "create-reminder-custom",
                  label: o.Z.Messages.MESSAGE_REMINDERS_CUSTOM_DUE,
                  action: () => {
                    (0, r.openModalLazy)(async () => {
                      let { default: e } = await t
                        .e("43866")
                        .then(t.bind(t, 423639));
                      return (t) =>
                        (0, a.jsx)(e, { ...t, onSelectDuration: n });
                    });
                  },
                },
                "custom",
              ),
            ),
          i
        );
      }
      function E(e) {
        let { message: n, label: t } = e,
          s = c({
            onSelectDuration: (e) =>
              (0, d.z)({
                channelId: n.channel_id,
                messageId: n.id,
                dueAt: i()().add(e, "millisecond").toDate(),
              }),
          });
        return (0, a.jsx)(r.Menu, {
          navId: "message-reminder-create",
          onClose: l.Zy,
          "aria-label": o.Z.Messages.MESSAGE_REMINDERS_CREATE,
          onSelect: () => null,
          children: (0, a.jsx)(r.MenuGroup, { label: t, children: s }),
        });
      }
    },
  },
]);
//# sourceMappingURL=6c20a737dd989f9a20c8.js.map
