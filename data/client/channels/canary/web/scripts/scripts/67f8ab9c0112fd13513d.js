"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["14604"],
  {
    960670: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return s;
          },
        }),
        e(47120);
      var c = e(200651),
        r = e(192379),
        i = e(481060),
        o = e(388032),
        a = e(110158);
      function s(t) {
        let { header: n, body: e, onSubmit: s, ...l } = t,
          [h, x] = r.useState(!1);
        return (0, c.jsxs)(i.ConfirmModal, {
          header: n,
          confirmText: o.intl.string(o.t["26C4oq"]),
          cancelText: o.intl.string(o.t["ETE/oK"]),
          onConfirm: () => {
            s(null, h);
          },
          ...l,
          children: [
            (0, c.jsx)(i.Text, { variant: "text-md/normal", children: e }),
            (0, c.jsx)(i.Checkbox, {
              type: i.Checkbox.Types.INVERTED,
              value: h,
              onChange: () => x((t) => !t),
              className: a.checkbox,
              children: (0, c.jsx)(i.Text, {
                variant: "text-md/normal",
                children: o.intl.string(o.t.bq3JXl),
              }),
            }),
          ],
        });
      }
    },
    110158: function (t, n, e) {
      t.exports = { checkbox: "checkbox_c8160f" };
    },
  },
]);
//# sourceMappingURL=67f8ab9c0112fd13513d.js.map
