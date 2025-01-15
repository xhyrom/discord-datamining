"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36970"],
  {
    223901: function (a, e, s) {
      s.r(e),
        s.d(e, {
          default: function () {
            return d;
          },
        });
      var t = s(200651),
        n = s(192379),
        o = s(481060),
        r = s(91159),
        i = s(593130),
        l = s(388032),
        c = s(595290);
      function d(a) {
        let { channel: e, onClose: s, transitionState: d } = a;
        return (
          n.useEffect(() => {
            (0, r.U4)();
          }, []),
          (0, t.jsx)(o.ModalRoot, {
            className: c.modal,
            transitionState: d,
            "aria-label": l.intl.string(l.t.B2panJ),
            size: o.ModalSize.DYNAMIC,
            children: (0, t.jsx)(i.Z, {
              className: c.browser,
              channel: e,
              onClose: s,
            }),
          })
        );
      }
    },
    595290: function (a, e, s) {
      a.exports = { modal: "modal_a60b1b", browser: "browser_a60b1b" };
    },
  },
]);
//# sourceMappingURL=0a935e4d33fabd8afdd5.js.map
