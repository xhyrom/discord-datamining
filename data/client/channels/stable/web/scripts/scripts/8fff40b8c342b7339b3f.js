"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69818"],
  {
    550727: function (e, t, n) {
      n.d(t, {
        B: function () {
          return u;
        },
      });
      var a = n(913527),
        r = n.n(a),
        i = n(388032);
      let u = [
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
            return o;
          },
          useMessageReminderDurationSuggestions: function () {
            return c;
          },
        }),
        n(653041);
      var a = n(200651),
        r = n(192379),
        i = n(481060),
        u = n(239091),
        d = n(324701),
        s = n(550727),
        l = n(388032);
      function c(e) {
        let { createReminder: t } = e,
          u = r.useCallback(() => {
            (0, i.openModalLazy)(async () => {
              let { default: e } = await n.e("43866").then(n.bind(n, 423639));
              return (n) => (0, a.jsx)(e, { ...n, createReminder: t });
            });
          }, [t]);
        return r.useMemo(() => {
          let e = s.B.map((e) => {
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
                  action: u,
                },
                "custom",
              ),
            ),
            e
          );
        }, [t, u]);
      }
      function o(e) {
        let { message: t, label: n } = e,
          r = c({
            createReminder: (e) =>
              (0, d.z)({ channelId: t.channel_id, messageId: t.id, dueAt: e }),
          });
        return (0, a.jsx)(i.Menu, {
          navId: "message-reminder-create",
          onClose: u.Zy,
          "aria-label": l.intl.string(l.t.mJ3P0N),
          onSelect: () => null,
          children: (0, a.jsx)(i.MenuGroup, { label: n, children: r }),
        });
      }
    },
  },
]);
//# sourceMappingURL=8fff40b8c342b7339b3f.js.map
