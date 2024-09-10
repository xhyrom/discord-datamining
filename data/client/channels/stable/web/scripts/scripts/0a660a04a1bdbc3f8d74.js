"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["5454"],
  {
    854360: function (e, s, a) {
      a.r(s),
        a.d(s, {
          default: function () {
            return m;
          },
        }),
        a(47120);
      var t = a(735250),
        n = a(470079),
        r = a(481060),
        c = a(749210),
        i = a(910693),
        o = a(51144),
        u = a(981631),
        d = a(689938),
        l = a(364757);
      function m(e) {
        let { guildId: s, user: a, location: m, ...C } = e,
          [g, p] = n.useState(""),
          f = (0, i.sE)(s, { location: m, targetUserId: a.id }),
          h = n.useCallback(() => {
            c.Z.kickUser(s, a.id, g), f(i.jQ.KICK);
          }, [s, a.id, g, f]),
          x = n.useCallback((e) => {
            p(e);
          }, []);
        return (0, t.jsxs)(r.ConfirmModal, {
          header: d.Z.Messages.KICK_USER_FROM_SERVER.format({
            user: a.username,
          }),
          confirmText: d.Z.Messages.KICK,
          cancelText: d.Z.Messages.CANCEL,
          onConfirm: h,
          ...C,
          children: [
            (0, t.jsx)(r.Text, {
              variant: "text-md/normal",
              className: l.spacing,
              children: d.Z.Messages.KICK_USER_BODY.format({
                user: "@".concat(o.ZP.getName(a)),
              }),
            }),
            (0, t.jsx)(r.FormItem, {
              title: d.Z.Messages.FORM_LABEL_REASON_KICK,
              className: l.spacing,
              children: (0, t.jsx)(r.TextArea, {
                maxLength: u.GNZ,
                onChange: x,
                value: g,
                rows: 2,
              }),
            }),
          ],
        });
      }
    },
    364757: function (e, s, a) {
      e.exports = { spacing: "spacing_fa7ae4" };
    },
  },
]);
//# sourceMappingURL=0a660a04a1bdbc3f8d74.js.map
