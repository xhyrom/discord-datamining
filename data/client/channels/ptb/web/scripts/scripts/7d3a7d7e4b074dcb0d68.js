"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["6045"],
  {
    883150: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var a = n(200651);
      n(192379);
      var r = n(481060),
        i = n(239091),
        s = n(324701),
        u = n(898150),
        d = n(388032);
      function l(e) {
        let { message: t } = e,
          n = (0, u.useMessageReminderDurationSuggestions)({
            createReminder: (e) =>
              (0, s.z)({ channelId: t.channel_id, messageId: t.id, dueAt: e }),
          });
        return (0, a.jsx)(r.Menu, {
          navId: "message-reminder-snooze",
          onClose: i.Zy,
          "aria-label": d.intl.string(d.t.Xm41aW),
          onSelect: () => {},
          children: n,
        });
      }
    },
    550727: function (e, t, n) {
      n.d(t, {
        B: function () {
          return s;
        },
      });
      var a = n(913527),
        r = n.n(a),
        i = n(388032);
      let s = [
        {
          getDueAt: () => r()().add(30, "minutes").toDate(),
          getLabel: () => i.intl.string(i.t["OV8l/P"]),
        },
        {
          getDueAt: () => r()().add(1, "hour").toDate(),
          getLabel: () => i.intl.string(i.t["zf0R+/"]),
        },
        {
          getDueAt: () => r()().add(4, "hour").toDate(),
          getLabel: () => i.intl.string(i.t["5gztZG"]),
        },
        {
          getDueAt: () =>
            r()().add(1, "day").startOf("day").add(9, "hours").toDate(),
          getLabel: () => i.intl.string(i.t["7MKr2N"]),
        },
        {
          getDueAt: () => r()().day(8).startOf("day").add(9, "hours").toDate(),
          getLabel: () => i.intl.string(i.t["q+Ls09"]),
        },
      ];
    },
    898150: function (e, t, n) {
      n.r(t),
        n.d(t, {
          MessageReminderEditMenu: function () {
            return c;
          },
          useMessageReminderDurationSuggestions: function () {
            return o;
          },
        }),
        n(653041);
      var a = n(200651),
        r = n(192379),
        i = n(481060),
        s = n(239091),
        u = n(324701),
        d = n(550727),
        l = n(388032);
      function o(e) {
        let { createReminder: t } = e,
          s = r.useCallback(() => {
            (0, i.openModalLazy)(async () => {
              let { default: e } = await n.e("43866").then(n.bind(n, 423639));
              return (n) => (0, a.jsx)(e, { ...n, createReminder: t });
            });
          }, [t]);
        return r.useMemo(() => {
          let e = d.B.map((e) => {
            let { getDueAt: n, getLabel: r } = e;
            return (0, a.jsx)(
              i.MenuItem,
              {
                id: "create-reminder-".concat(r()),
                label: r(),
                action: () => t(n()),
              },
              "create-reminder-".concat(r()),
            );
          });
          return (
            e.push(
              (0, a.jsx)(
                i.MenuItem,
                {
                  id: "create-reminder-custom",
                  label: l.intl.string(l.t.OLA8Zm),
                  action: s,
                },
                "custom",
              ),
            ),
            e
          );
        }, [t, s]);
      }
      function c(e) {
        let { message: t, label: n } = e,
          r = o({
            createReminder: (e) =>
              (0, u.z)({ channelId: t.channel_id, messageId: t.id, dueAt: e }),
          });
        return (0, a.jsx)(i.Menu, {
          navId: "message-reminder-create",
          onClose: s.Zy,
          "aria-label": l.intl.string(l.t.mJ3P0N),
          onSelect: () => null,
          children: (0, a.jsx)(i.MenuGroup, { label: n, children: r }),
        });
      }
    },
  },
]);
//# sourceMappingURL=7d3a7d7e4b074dcb0d68.js.map
