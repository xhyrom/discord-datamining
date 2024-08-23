"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["43866"],
  {
    423639: function (e, s, t) {
      t.r(s),
        t.d(s, {
          default: function () {
            return l;
          },
        }),
        t(47120);
      var n = t(735250),
        i = t(470079),
        r = t(913527),
        u = t.n(r),
        o = t(481060),
        a = t(689938),
        d = t(3485);
      function l(e) {
        let { onSelectDuration: s, ...t } = e,
          [r, l] = i.useState(() => u()()),
          c = u()(),
          p = i.useCallback(() => {
            s(r.diff(c));
          }, [s, r, c]),
          f = (e) => {
            if (!!e.isValid()) l(e);
          };
        return (0, n.jsx)(o.ConfirmModal, {
          header: a.Z.Messages.MESSAGE_REMINDERS_SET_CUSTOM,
          confirmText: a.Z.Messages.SAVE,
          cancelText: a.Z.Messages.CANCEL,
          confirmButtonColor: o.Button.Colors.BRAND,
          onConfirm: p,
          ...t,
          children: (0, n.jsxs)("div", {
            className: d.doubleInput,
            children: [
              (0, n.jsx)(o.FormItem, {
                title: a.Z.Messages.DATE,
                required: !0,
                children: (0, n.jsx)(o.DateInput, {
                  value: r,
                  onSelect: f,
                  minDate: c,
                }),
              }),
              (0, n.jsx)(o.FormItem, {
                title: a.Z.Messages.TIME,
                required: !0,
                children: (0, n.jsx)(o.TimeInput, { value: r, onChange: f }),
              }),
            ],
          }),
        });
      }
    },
    3485: function (e, s, t) {
      e.exports = { doubleInput: "doubleInput_d69de8" };
    },
  },
]);
//# sourceMappingURL=eac8d3083fab679ee6ff.js.map
