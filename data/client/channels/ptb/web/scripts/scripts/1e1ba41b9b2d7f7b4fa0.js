"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["6045"],
  {
    883150: function (e, n, a) {
      a.r(n),
        a.d(n, {
          default: function () {
            return d;
          },
        });
      var s = a(735250);
      a(470079);
      var t = a(481060),
        r = a(239091),
        i = a(324701),
        l = a(898150),
        u = a(689938);
      function d(e) {
        let { message: n } = e,
          a = (0, l.useMessageReminderDurationSuggestions)({
            createReminder: (e) =>
              (0, i.z)({ channelId: n.channel_id, messageId: n.id, dueAt: e }),
          });
        return (0, s.jsx)(t.Menu, {
          navId: "message-reminder-snooze",
          onClose: r.Zy,
          "aria-label": u.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: () => {},
          children: a,
        });
      }
    },
    550727: function (e, n, a) {
      a.d(n, {
        B: function () {
          return r;
        },
      });
      var s = a(70956),
        t = a(689938);
      let r = [
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
            return E;
          },
          useMessageReminderDurationSuggestions: function () {
            return M;
          },
        }),
        a(653041);
      var s = a(735250),
        t = a(470079),
        r = a(913527),
        i = a.n(r),
        l = a(481060),
        u = a(239091),
        d = a(324701),
        c = a(550727),
        o = a(689938);
      function M(e) {
        let { createReminder: n } = e,
          r = t.useCallback(
            (e) => n(i()().add(e, "millisecond").toDate()),
            [n],
          ),
          u = t.useCallback(() => {
            (0, l.openModalLazy)(async () => {
              let { default: e } = await a.e("43866").then(a.bind(a, 423639));
              return (a) => (0, s.jsx)(e, { ...a, createReminder: n });
            });
          }, [n]);
        return t.useMemo(() => {
          let e = c.B.map((e) => {
            let { duration: n, getLabel: a } = e;
            return (0, s.jsx)(
              l.MenuItem,
              {
                id: "create-reminder-".concat(n),
                label: a(),
                action: () => r(n),
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
                  label: o.Z.Messages.MESSAGE_REMINDERS_CUSTOM_DUE,
                  action: u,
                },
                "custom",
              ),
            ),
            e
          );
        }, [r, u]);
      }
      function E(e) {
        let { message: n, label: a } = e,
          t = M({
            createReminder: (e) =>
              (0, d.z)({ channelId: n.channel_id, messageId: n.id, dueAt: e }),
          });
        return (0, s.jsx)(l.Menu, {
          navId: "message-reminder-create",
          onClose: u.Zy,
          "aria-label": o.Z.Messages.MESSAGE_REMINDERS_CREATE,
          onSelect: () => null,
          children: (0, s.jsx)(l.MenuGroup, { label: a, children: t }),
        });
      }
    },
  },
]);
//# sourceMappingURL=1e1ba41b9b2d7f7b4fa0.js.map
