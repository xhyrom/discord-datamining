"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["14604"],
  {
    960670: function (e, n, c) {
      c.r(n),
        c.d(n, {
          default: function () {
            return i;
          },
        }),
        c(47120);
      var s = c(735250),
        t = c(470079),
        a = c(481060),
        r = c(689938),
        o = c(93518);
      function i(e) {
        let { header: n, body: c, onSubmit: i, ...h } = e,
          [x, d] = t.useState(!1);
        return (0, s.jsxs)(a.ConfirmModal, {
          header: n,
          confirmText: r.Z.Messages.LEAVE_GROUP_DM,
          cancelText: r.Z.Messages.CANCEL,
          onConfirm: () => {
            i(null, x);
          },
          ...h,
          children: [
            (0, s.jsx)(a.Text, { variant: "text-md/normal", children: c }),
            (0, s.jsx)(a.Checkbox, {
              type: a.Checkbox.Types.INVERTED,
              value: x,
              onChange: () => d((e) => !e),
              className: o.checkbox,
              children: (0, s.jsx)(a.Text, {
                variant: "text-md/normal",
                children: r.Z.Messages.LEAVE_GROUP_DM_SILENTLY,
              }),
            }),
          ],
        });
      }
    },
    93518: function (e, n, c) {
      e.exports = { checkbox: "checkbox_c8160f" };
    },
  },
]);
//# sourceMappingURL=4eef8dd06677506de334.js.map
