"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["82560"],
  {
    818634: function (t, n, e) {
      e.d(n, {
        l: function () {
          return a;
        },
        y: function () {
          return s;
        },
      });
      var r = e(15729),
        o = e(731965);
      let i = Object.freeze({ isPopoutOpen: !1 }),
        c = (0, r.U)((t) => i),
        a = (t) => {
          (0, o.j)(() => {
            c.setState(() => ({ isPopoutOpen: t }));
          });
        },
        s = 12633 == e.j ? c : null;
    },
    391312: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return u;
          },
        }),
        e(47120);
      var r = e(200651),
        o = e(192379),
        i = e(433517),
        c = e(481060),
        a = e(818634),
        s = e(388032),
        l = e(753507);
      function u(t) {
        let [n, e] = o.useState(!1);
        return (0, r.jsxs)(c.ConfirmModal, {
          ...t,
          header: s.intl.string(s.t.pjYu09),
          confirmText: s.intl.string(s.t.zVZXRU),
          cancelText: s.intl.string(s.t["ETE/oK"]),
          onConfirm: () => {
            (0, a.l)(!0);
          },
          confirmButtonColor: c.Button.Colors.BRAND,
          children: [
            (0, r.jsx)(c.Text, {
              variant: "text-md/normal",
              children: s.intl.format(s.t["0eydys"], {}),
            }),
            (0, r.jsx)(c.Checkbox, {
              className: l.checkboxMargin,
              type: c.Checkbox.Types.INVERTED,
              value: n,
              onChange: () => {
                i.K.set("doNotShowReorderModal", JSON.stringify(!0)), e(!0);
              },
              children: (0, r.jsx)(c.Text, {
                variant: "text-md/normal",
                children: s.intl.string(s.t["50TyjY"]),
              }),
            }),
          ],
        });
      }
    },
    753507: function (t, n, e) {
      t.exports = { checkboxMargin: "checkboxMargin_bc8387" };
    },
  },
]);
//# sourceMappingURL=66e9dbd28f2fa6484295.js.map
