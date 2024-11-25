"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["43866"],
  {
    423639: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return d;
          },
        }),
        n(47120);
      var i = n(200651),
        r = n(192379),
        o = n(913527),
        s = n.n(o),
        u = n(481060),
        l = n(388032),
        a = n(915959);
      function d(t) {
        let { createReminder: e, ...n } = t,
          [o, d] = r.useState(() => s()()),
          [c, p] = r.useState(() => s()()),
          m = r.useCallback(() => {
            e(o.toDate());
          }, [e, o]),
          h = (t) => {
            if (!!t.isValid()) d(t);
          };
        return (0, i.jsx)(u.ConfirmModal, {
          header: l.intl.string(l.t.VKsXpa),
          confirmText: l.intl.string(l.t.R3BPHx),
          cancelText: l.intl.string(l.t["ETE/oK"]),
          confirmButtonColor: u.Button.Colors.BRAND,
          onConfirm: m,
          ...n,
          children: (0, i.jsxs)("div", {
            className: a.doubleInput,
            children: [
              (0, i.jsx)(u.FormItem, {
                title: l.intl.string(l.t.pSZKvL),
                required: !0,
                children: (0, i.jsx)(u.DateInput, {
                  value: o,
                  onSelect: h,
                  minDate: c,
                }),
              }),
              (0, i.jsx)(u.FormItem, {
                title: l.intl.string(l.t.GOmEb2),
                required: !0,
                children: (0, i.jsx)(u.TimeInput, { value: o, onChange: h }),
              }),
            ],
          }),
        });
      }
    },
    915959: function (t, e, n) {
      t.exports = { doubleInput: "doubleInput_d69de8" };
    },
  },
]);
//# sourceMappingURL=e3373da18536d3dbc6fd.js.map
