"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["5454"],
  {
    854360: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return m;
          },
        }),
        n(47120);
      var a = n(200651),
        i = n(192379),
        r = n(481060),
        s = n(749210),
        c = n(910693),
        l = n(51144),
        o = n(981631),
        u = n(388032),
        d = n(861347);
      function m(t) {
        let { guildId: e, user: n, location: m, ...g } = t,
          [p, f] = i.useState(""),
          h = (0, c.sE)(e, { location: m, targetUserId: n.id }),
          x = i.useCallback(() => {
            s.Z.kickUser(e, n.id, p), h(c.jQ.KICK);
          }, [e, n.id, p, h]),
          k = i.useCallback((t) => {
            f(t);
          }, []);
        return (0, a.jsxs)(r.ConfirmModal, {
          header: u.intl.formatToPlainString(u.t["1Ie87u"], {
            user: n.username,
          }),
          confirmText: u.intl.string(u.t["3glT6e"]),
          cancelText: u.intl.string(u.t["ETE/oK"]),
          onConfirm: x,
          ...g,
          children: [
            (0, a.jsx)(r.Text, {
              variant: "text-md/normal",
              className: d.spacing,
              children: u.intl.format(u.t["/yH0UV"], {
                user: "@".concat(l.ZP.getName(n)),
              }),
            }),
            (0, a.jsx)(r.FormItem, {
              title: u.intl.string(u.t["+2QEPj"]),
              className: d.spacing,
              children: (0, a.jsx)(r.TextArea, {
                maxLength: o.GNZ,
                onChange: k,
                value: p,
                rows: 2,
              }),
            }),
          ],
        });
      }
    },
    861347: function (t, e, n) {
      t.exports = { spacing: "spacing_fa7ae4" };
    },
  },
]);
//# sourceMappingURL=64ce172e28f4bee880c4.js.map
