"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68747"],
  {
    744373: function (n, t, e) {
      e.r(t),
        e.d(t, {
          default: function () {
            return _;
          },
        });
      var o = e(200651);
      e(192379);
      var a = e(990547),
        i = e(399606),
        r = e(481060),
        l = e(843931),
        s = e(1596),
        c = e(922611),
        m = e(478923),
        d = e(594174),
        u = e(626135),
        f = e(51144),
        C = e(981631),
        p = e(388032);
      function _(n) {
        let {
            transitionState: t,
            onClose: e,
            userId: _,
            onCancel: x,
            confirmBlock: h,
          } = n,
          k = (0, i.e7)([d.default], () => d.default.getUser(_)),
          g = f.ZP.useName(k),
          E = (0, c.Do)({ location: "confirm_block_user_modal" }),
          I = () => {
            h(), u.default.track(C.rMx.BLOCK_USER_CONFIRMED);
          };
        if (null != k)
          return E
            ? (0, o.jsx)(m.Z, {
                transitionState: t,
                user: k,
                onBlock: I,
                onClose: e,
                onCancel: x,
                disallowIgnore: !0,
              })
            : (0, o.jsx)(r.ConfirmModal, {
                header: p.intl.formatToPlainString(p.t.x5pOn5, { name: g }),
                confirmText: p.intl.string(p.t.l4EmaW),
                cancelText: p.intl.string(p.t["ETE/oK"]),
                onConfirm: I,
                onClose: e,
                onCancel: x,
                transitionState: t,
                impression: {
                  impressionName: a.ImpressionNames.BLOCK_USER_CONFIRMATION,
                },
                children: (0, l.cC)({ location: "confirm_block_modal" })
                  ? (0, o.jsx)(s.Z, {})
                  : (0, o.jsx)(r.Text, {
                      variant: "text-md/normal",
                      children: p.intl.format(p.t.pegItL, { name: g }),
                    }),
              });
      }
    },
  },
]);
//# sourceMappingURL=d880b512be27c20a1edc.js.map
