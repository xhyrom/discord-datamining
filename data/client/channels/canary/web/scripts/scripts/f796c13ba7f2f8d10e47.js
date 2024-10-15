"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["64648"],
  {
    968626: function (t) {
      t.exports = "/assets/94798c0b9b6ea4897c49.png";
    },
    81155: function (t, e, o) {
      o.r(e),
        o.d(e, {
          default: function () {
            return p;
          },
        });
      var l = o(735250),
        n = o(470079),
        s = o(481060),
        a = o(782568),
        r = o(690221),
        i = o(557177),
        d = o(689938),
        u = o(661243);
      let c = [
        { preBold: "That's pretty...", bold: "fly!" },
        {
          preBold: "On Point will make sure to",
          bold: " tick ",
          postBold: "a look at it!",
        },
        { preBold: "You're...un", bold: "bee ", postBold: "lievable!" },
      ];
      function b(t) {
        let { punConfig: e } = t;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            e.preBold,
            (0, l.jsx)("b", {
              children: (0, l.jsx)("i", { children: e.bold }),
            }),
            e.postBold,
          ],
        });
      }
      function p(t) {
        let { transitionState: e, onClose: o, asanaTask: p } = t;
        n.useEffect(() => {
          (0, i.GN)("success", 0.1);
        }, []);
        let m = n.useRef(c[Math.floor(Math.random() * c.length)]).current;
        return (0, l.jsx)(s.ModalRoot, {
          className: u.bugReporterSubmitModalRoot,
          transitionState: e,
          "aria-label": d.Z.Messages.SUBMIT_BUG,
          children: (0, l.jsxs)(s.ModalContent, {
            style: { overflow: "hidden", paddingRight: "0px" },
            className: u.modalContent,
            paddingFix: !1,
            children: [
              (0, l.jsx)(s.ModalCloseButton, {
                onClick: () => {
                  null == o || o();
                },
                className: u.closeButton,
              }),
              (0, l.jsxs)(s.Text, {
                className: u.submitText,
                variant: "text-sm/normal",
                children: [
                  "Thanks for submitting a ",
                  (0, l.jsx)(r.Z, {
                    onClick: () => (0, a.Z)(p.permalink_url),
                    children: "bug",
                  }),
                  "!",
                  (0, l.jsx)("br", {}),
                  (0, l.jsx)(b, { punConfig: m }),
                ],
              }),
            ],
          }),
        });
      }
    },
    661243: function (t, e, o) {
      t.exports = {
        bugReporterSubmitModalRoot: "bugReporterSubmitModalRoot_bc7a83",
        modalContent: "modalContent_bc7a83",
        closeButton: "closeButton_bc7a83",
        submitText: "submitText_bc7a83",
      };
    },
  },
]);
//# sourceMappingURL=f796c13ba7f2f8d10e47.js.map
