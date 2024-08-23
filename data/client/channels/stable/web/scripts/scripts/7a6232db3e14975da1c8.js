"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69818"],
  {
    550727: function (e, n, a) {
      a.d(n, {
        B: function () {
          return i;
        },
      });
      var s = a(70956),
        t = a(689938);
      let i = [
        {
          duration: 30 * s.Z.Millis.MINUTE,
          getLabel: () => t.Z.Messages.MESSAGE_REMINDERS_IN_THIRTY_MIN,
        },
        {
          duration: s.Z.Millis.HOUR,
          getLabel: () => t.Z.Messages.MESSAGE_REMINDERS_IN_ONE_HOUR,
        },
        {
          duration: 2 * s.Z.Millis.HOUR,
          getLabel: () => t.Z.Messages.MESSAGE_REMINDERS_IN_TWO_HOURS,
        },
        {
          duration: 4 * s.Z.Millis.HOUR,
          getLabel: () => t.Z.Messages.MESSAGE_REMINDERS_IN_FOUR_HOURS,
        },
      ];
    },
    898150: function (e, n, a) {
      a.r(n),
        a.d(n, {
          MessageReminderEditMenu: function () {
            return o;
          },
          useMessageReminderDurationSuggestions: function () {
            return E;
          },
        }),
        a(653041);
      var s = a(735250),
        t = a(470079),
        i = a(913527),
        r = a.n(i),
        l = a(481060),
        u = a(239091),
        M = a(324701),
        d = a(550727),
        c = a(689938);
      function E(e) {
        let { createReminder: n } = e,
          i = t.useCallback(
            (e) => n(r()().add(e, "millisecond").toDate()),
            [n],
          ),
          u = t.useCallback(() => {
            (0, l.openModalLazy)(async () => {
              let { default: e } = await a.e("43866").then(a.bind(a, 423639));
              return (a) => (0, s.jsx)(e, { ...a, createReminder: n });
            });
          }, [n]);
        return t.useMemo(() => {
          let e = d.B.map((e) => {
            let { duration: n, getLabel: a } = e;
            return (0, s.jsx)(
              l.MenuItem,
              {
                id: "create-reminder-".concat(n),
                label: a(),
                action: () => i(n),
              },
              n,
            );
          });
          return (
            e.push(
              (0, s.jsx)(
                l.MenuItem,
                {
                  id: "create-reminder-custom",
                  label: c.Z.Messages.MESSAGE_REMINDERS_CUSTOM_DUE,
                  action: u,
                },
                "custom",
              ),
            ),
            e
          );
        }, [i, u]);
      }
      function o(e) {
        let { message: n, label: a } = e,
          t = E({
            createReminder: (e) =>
              (0, M.z)({ channelId: n.channel_id, messageId: n.id, dueAt: e }),
          });
        return (0, s.jsx)(l.Menu, {
          navId: "message-reminder-create",
          onClose: u.Zy,
          "aria-label": c.Z.Messages.MESSAGE_REMINDERS_CREATE,
          onSelect: () => null,
          children: (0, s.jsx)(l.MenuGroup, { label: a, children: t }),
        });
      }
    },
  },
]);
//# sourceMappingURL=7a6232db3e14975da1c8.js.map
