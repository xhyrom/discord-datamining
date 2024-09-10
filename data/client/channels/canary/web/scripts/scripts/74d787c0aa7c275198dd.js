"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["43866"],
  {
    423639: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return d;
          },
        }),
        s(47120);
      var n = s(735250),
        u = s(470079),
        a = s(913527),
        i = s.n(a),
        o = s(481060),
        r = s(689938),
        l = s(374636);
      function d(e) {
        let { createReminder: t, ...s } = e,
          [a, d] = u.useState(() => i()()),
          [c, p] = u.useState(() => i()()),
          h = u.useCallback(() => {
            t(a.toDate());
          }, [t, a]),
          m = (e) => {
            if (!!e.isValid()) d(e);
          };
        return (0, n.jsx)(o.ConfirmModal, {
          header: r.Z.Messages.MESSAGE_REMINDERS_SET_CUSTOM,
          confirmText: r.Z.Messages.SAVE,
          cancelText: r.Z.Messages.CANCEL,
          confirmButtonColor: o.Button.Colors.BRAND,
          onConfirm: h,
          ...s,
          children: (0, n.jsxs)("div", {
            className: l.doubleInput,
            children: [
              (0, n.jsx)(o.FormItem, {
                title: r.Z.Messages.DATE,
                required: !0,
                children: (0, n.jsx)(o.DateInput, {
                  value: a,
                  onSelect: m,
                  minDate: c,
                }),
              }),
              (0, n.jsx)(o.FormItem, {
                title: r.Z.Messages.TIME,
                required: !0,
                children: (0, n.jsx)(o.TimeInput, { value: a, onChange: m }),
              }),
            ],
          }),
        });
      }
    },
    374636: function (e, t, s) {
      e.exports = { doubleInput: "doubleInput_d69de8" };
    },
  },
]);
//# sourceMappingURL=74d787c0aa7c275198dd.js.map
