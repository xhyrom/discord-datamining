"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68720"],
  {
    70846: function (e, t, r) {
      r.r(t);
      var l = r(200651);
      r(192379);
      var s = r(481060),
        a = r(313201),
        o = r(426642),
        n = r(388032),
        c = r(160683);
      t.default = (e) => {
        let { transitionState: t, errors: r, onClose: i } = e,
          d = (0, a.Dt)();
        return (0, l.jsxs)(s.ModalRoot, {
          transitionState: t,
          "aria-labelledby": d,
          children: [
            (0, l.jsx)(s.ModalHeader, {
              separator: !1,
              className: c.modalHeader,
              children: (0, l.jsx)(s.ModalCloseButton, {
                onClick: i,
                className: c.closeButton,
              }),
            }),
            (0, l.jsxs)(s.ModalContent, {
              className: c.modalContent,
              children: [
                (0, l.jsxs)(s.FormSection, {
                  className: c.header,
                  children: [
                    (0, l.jsx)(s.FormTitle, {
                      id: d,
                      className: c.title,
                      children: n.intl.string(n.t.PanA4O),
                    }),
                    (0, l.jsx)(s.FormText, {
                      type: s.FormTextTypes.DESCRIPTION,
                      children: n.intl.string(n.t["8Ql1Aw"]),
                    }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: c.errors,
                  children: (0, l.jsx)(s.Scroller, {
                    children: r.map((e) =>
                      (0, l.jsx)(o.Z, { error: e }, e.filename),
                    ),
                  }),
                }),
                (0, l.jsx)(s.Button, {
                  onClick: i,
                  children: n.intl.string(n.t["NX+WJC"]),
                }),
              ],
            }),
          ],
        });
      };
    },
    160683: function (e, t, r) {
      e.exports = {
        errors: "errors_c3264b",
        modalHeader: "modalHeader_c3264b",
        header: "header_c3264b",
        title: "title_c3264b",
        modalContent: "modalContent_c3264b",
        closeButton: "closeButton_c3264b",
      };
    },
  },
]);
//# sourceMappingURL=1ec11de1d2ce0f277c9d.js.map
