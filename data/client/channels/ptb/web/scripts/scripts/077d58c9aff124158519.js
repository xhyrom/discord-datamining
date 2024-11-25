"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["27157"],
  {
    736454: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return l;
          },
        }),
        e(47120);
      var o = e(200651),
        i = e(192379),
        r = e(481060),
        s = e(153867),
        c = e(388032),
        a = e(710694);
      function l(t) {
        let { onSubmit: n, onClose: e, ...l } = t,
          [d, h] = i.useState(!1);
        return (0, o.jsxs)(r.ConfirmModal, {
          header: c.intl.string(c.t.HlAPoq),
          confirmButtonColor: r.Button.Colors.GREEN,
          confirmText: c.intl.string(c.t.rimG2d),
          cancelText: c.intl.string(c.t["ETE/oK"]),
          onConfirm: n,
          onClose: () => (
            d &&
              s.ZP.updatedUnsyncedSettings({
                disableCallUserConfirmationPrompt: !0,
              }),
            e()
          ),
          ...l,
          children: [
            (0, o.jsx)(r.Text, {
              variant: "text-md/normal",
              children: c.intl.string(c.t.Jz3oqK),
            }),
            (0, o.jsx)(r.Checkbox, {
              type: r.Checkbox.Types.INVERTED,
              value: d,
              onChange: (t, n) => h(n),
              className: a.checkbox,
              children: (0, o.jsx)(r.Text, {
                variant: "text-md/normal",
                children: c.intl.string(c.t["JdIQ/f"]),
              }),
            }),
          ],
        });
      }
    },
    710694: function (t, n, e) {
      t.exports = { checkbox: "checkbox_bfe099" };
    },
  },
]);
//# sourceMappingURL=077d58c9aff124158519.js.map
