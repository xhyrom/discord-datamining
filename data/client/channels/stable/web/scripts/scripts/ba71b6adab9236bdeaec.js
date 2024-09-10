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
      var o = s(735250),
        r = s(470079),
        t = s(481060),
        n = s(91159),
        i = s(593130),
        c = s(689938),
        l = s(159191);
      function d(a) {
        let { channel: e, onClose: s, transitionState: d } = a;
        return (
          r.useEffect(() => {
            (0, n.U4)();
          }, []),
          (0, o.jsx)(t.ModalRoot, {
            className: l.modal,
            transitionState: d,
            "aria-label": c.Z.Messages.THREADS,
            size: t.ModalSize.DYNAMIC,
            children: (0, o.jsx)(i.Z, {
              className: l.browser,
              channel: e,
              onClose: s,
            }),
          })
        );
      }
    },
    159191: function (a, e, s) {
      a.exports = { modal: "modal_a60b1b", browser: "browser_a60b1b" };
    },
  },
]);
//# sourceMappingURL=ba71b6adab9236bdeaec.js.map
