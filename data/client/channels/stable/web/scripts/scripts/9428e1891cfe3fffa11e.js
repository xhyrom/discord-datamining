"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["32249"],
  {
    536687: function (t, o, e) {
      e.r(o),
        e.d(o, {
          default: function () {
            return d;
          },
        });
      var n = e(200651),
        s = e(481060),
        a = e(113434),
        i = e(918701),
        c = e(417575);
      function d(t) {
        let { questId: o, transitionState: e } = t,
          d = (0, a.B4)(o);
        return null != d && (0, i.cr)(d)
          ? (0, n.jsx)("div", {
              children: (0, n.jsx)(s.ModalRoot, {
                transitionState: e,
                size: s.ModalSize.LARGE,
                className: c.modalRoot,
                children: (0, n.jsx)(s.Text, {
                  variant: "text-sm/bold",
                  children: d.config.messages.questName,
                }),
              }),
            })
          : null;
      }
    },
    417575: function (t, o, e) {
      t.exports = { modalRoot: "modalRoot_c73f92" };
    },
  },
]);
//# sourceMappingURL=9428e1891cfe3fffa11e.js.map
