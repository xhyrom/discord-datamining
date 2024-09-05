"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69818"],
  {
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
            return c;
          },
          useMessageReminderDurationSuggestions: function () {
            return M;
          },
        }),
        a(653041);
      var n = a(735250),
        s = a(470079),
        r = a(481060),
        u = a(239091),
        d = a(324701),
        E = a(550727),
        i = a(689938);
      function M(e) {
        let { createReminder: t } = e,
          u = s.useCallback(() => {
            (0, r.openModalLazy)(async () => {
              let { default: e } = await a.e("43866").then(a.bind(a, 423639));
              return (a) => (0, n.jsx)(e, { ...a, createReminder: t });
            });
          }, [t]);
        return s.useMemo(() => {
          let e = E.B.map((e) => {
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
                  label: i.Z.Messages.MESSAGE_REMINDERS_CUSTOM_DUE,
                  action: u,
                },
                "custom",
              ),
            ),
            e
          );
        }, [t, u]);
      }
      function c(e) {
        let { message: t, label: a } = e,
          s = M({
            createReminder: (e) =>
              (0, d.z)({ channelId: t.channel_id, messageId: t.id, dueAt: e }),
          });
        return (0, n.jsx)(r.Menu, {
          navId: "message-reminder-create",
          onClose: u.Zy,
          "aria-label": i.Z.Messages.MESSAGE_REMINDERS_CREATE,
          onSelect: () => null,
          children: (0, n.jsx)(r.MenuGroup, { label: a, children: s }),
        });
      }
    },
  },
]);
//# sourceMappingURL=86d37a749ca837e16a51.js.map
