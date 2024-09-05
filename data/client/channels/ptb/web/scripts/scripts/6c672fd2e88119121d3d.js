"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["6045"],
  {
    883150: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return o;
          },
        });
      var n = a(735250);
      a(470079);
      var s = a(481060),
        r = a(239091),
        u = a(324701),
        d = a(898150),
        i = a(689938);
      function o(e) {
        let { message: t } = e,
          a = (0, d.useMessageReminderDurationSuggestions)({
            createReminder: (e) =>
              (0, u.z)({ channelId: t.channel_id, messageId: t.id, dueAt: e }),
          });
        return (0, n.jsx)(s.Menu, {
          navId: "message-reminder-snooze",
          onClose: r.Zy,
          "aria-label": i.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: () => {},
          children: a,
        });
      }
    },
    550727: function (e, t, a) {
      a.d(t, {
        B: function () {
          return u;
        },
      });
      var n = a(913527),
        s = a.n(n),
        r = a(689938);
      let u = [
        {
          getDueAt: () => s()().add(30, "minutes").toDate(),
          getLabel: () => r.Z.Messages.MESSAGE_REMINDERS_IN_THIRTY_MIN,
        },
        {
          getDueAt: () => s()().add(1, "hour").toDate(),
          getLabel: () => r.Z.Messages.MESSAGE_REMINDERS_IN_ONE_HOUR,
        },
        {
          getDueAt: () => s()().add(4, "hour").toDate(),
          getLabel: () => r.Z.Messages.MESSAGE_REMINDERS_IN_FOUR_HOURS,
        },
        {
          getDueAt: () =>
            s()().add(1, "day").startOf("day").add(9, "hours").toDate(),
          getLabel: () => r.Z.Messages.MESSAGE_REMINDERS_TOMORROW_MORNING,
        },
        {
          getDueAt: () => s()().day(8).startOf("day").add(9, "hours").toDate(),
          getLabel: () => r.Z.Messages.MESSAGE_REMINDERS_NEXT_WEEK,
        },
      ];
    },
    898150: function (e, t, a) {
      a.r(t),
        a.d(t, {
          MessageReminderEditMenu: function () {
            return l;
          },
          useMessageReminderDurationSuggestions: function () {
            return c;
          },
        }),
        a(653041);
      var n = a(735250),
        s = a(470079),
        r = a(481060),
        u = a(239091),
        d = a(324701),
        i = a(550727),
        o = a(689938);
      function c(e) {
        let { createReminder: t } = e,
          u = s.useCallback(() => {
            (0, r.openModalLazy)(async () => {
              let { default: e } = await a.e("43866").then(a.bind(a, 423639));
              return (a) => (0, n.jsx)(e, { ...a, createReminder: t });
            });
          }, [t]);
        return s.useMemo(() => {
          let e = i.B.map((e) => {
            let { getDueAt: a, getLabel: s } = e;
            return (0, n.jsx)(
              r.MenuItem,
              {
                id: "create-reminder-".concat(s()),
                label: s(),
                action: () => t(a()),
              },
              "create-reminder-".concat(s()),
            );
          });
          return (
            e.push(
              (0, n.jsx)(
                r.MenuItem,
                {
                  id: "create-reminder-custom",
                  label: o.Z.Messages.MESSAGE_REMINDERS_CUSTOM_DUE,
                  action: u,
                },
                "custom",
              ),
            ),
            e
          );
        }, [t, u]);
      }
      function l(e) {
        let { message: t, label: a } = e,
          s = c({
            createReminder: (e) =>
              (0, d.z)({ channelId: t.channel_id, messageId: t.id, dueAt: e }),
          });
        return (0, n.jsx)(r.Menu, {
          navId: "message-reminder-create",
          onClose: u.Zy,
          "aria-label": o.Z.Messages.MESSAGE_REMINDERS_CREATE,
          onSelect: () => null,
          children: (0, n.jsx)(r.MenuGroup, { label: a, children: s }),
        });
      }
    },
  },
]);
//# sourceMappingURL=6c672fd2e88119121d3d.js.map
