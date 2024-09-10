"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["82560"],
  {
    818634: function (e, t, n) {
      n.d(t, {
        l: function () {
          return c;
        },
        y: function () {
          return i;
        },
      });
      var o = n(652874),
        r = n(731965);
      let s = Object.freeze({ isPopoutOpen: !1 }),
        a = (0, o.Z)((e) => s),
        c = (e) => {
          (0, r.j)(() => {
            a.setState(() => ({ isPopoutOpen: e }));
          });
        },
        i = a;
    },
    391312: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        }),
        n(47120);
      var o = n(735250),
        r = n(470079),
        s = n(433517),
        a = n(481060),
        c = n(818634),
        i = n(689938),
        u = n(525815);
      function d(e) {
        let [t, n] = r.useState(!1);
        return (0, o.jsxs)(a.ConfirmModal, {
          ...e,
          header: i.Z.Messages.GUILD_SIDEBAR_REORDER_DIALOG_TITLE,
          confirmText: i.Z.Messages.GUILD_SIDEBAR_REORDER_CONFIRM,
          cancelText: i.Z.Messages.CANCEL,
          onConfirm: () => {
            (0, c.l)(!0);
          },
          confirmButtonColor: a.Button.Colors.BRAND,
          children: [
            (0, o.jsx)(a.Text, {
              variant: "text-md/normal",
              children: i.Z.Messages.GUILD_SIDEBAR_REORDER_DESCRIPTION.format(),
            }),
            (0, o.jsx)(a.Checkbox, {
              className: u.checkboxMargin,
              type: a.Checkbox.Types.INVERTED,
              value: t,
              onChange: () => {
                s.K.set("doNotShowReorderModal", JSON.stringify(!0)), n(!0);
              },
              children: (0, o.jsx)(a.Text, {
                variant: "text-md/normal",
                children: i.Z.Messages.GUILD_SIDEBAR_DO_NOT_SHOW_AGAIN,
              }),
            }),
          ],
        });
      }
    },
    525815: function (e, t, n) {
      e.exports = { checkboxMargin: "checkboxMargin_bc8387" };
    },
  },
]);
//# sourceMappingURL=eb15f661c14245263b5b.js.map
