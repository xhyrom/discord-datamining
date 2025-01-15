"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["64648"],
  {
    968626: function (t) {
      t.exports = "/assets/94798c0b9b6ea4897c49.png";
    },
    81155: function (t, o, e) {
      e.r(o),
        e.d(o, {
          default: function () {
            return p;
          },
        });
      var n = e(200651),
        l = e(192379),
        s = e(481060),
        a = e(782568),
        r = e(690221),
        i = e(557177),
        d = e(388032),
        u = e(124039);
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
        let { punConfig: o } = t;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            o.preBold,
            (0, n.jsx)("b", {
              children: (0, n.jsx)("i", { children: o.bold }),
            }),
            o.postBold,
          ],
        });
      }
      function p(t) {
        let { transitionState: o, onClose: e, asanaTask: p } = t;
        l.useEffect(() => {
          (0, i.GN)("success", 0.1);
        }, []);
        let m = l.useRef(c[Math.floor(Math.random() * c.length)]).current;
        return (0, n.jsx)(s.ModalRoot, {
          className: u.bugReporterSubmitModalRoot,
          transitionState: o,
          "aria-label": d.intl.string(d.t.mCCdws),
          children: (0, n.jsxs)(s.ModalContent, {
            style: { overflow: "hidden", paddingRight: "0px" },
            className: u.modalContent,
            paddingFix: !1,
            children: [
              (0, n.jsx)(s.ModalCloseButton, {
                onClick: () => {
                  null == e || e();
                },
                className: u.closeButton,
              }),
              (0, n.jsxs)(s.Text, {
                className: u.submitText,
                variant: "text-sm/normal",
                children: [
                  "Thanks for submitting a ",
                  (0, n.jsx)(r.Z, {
                    onClick: () => (0, a.Z)(p.permalink_url),
                    children: "bug",
                  }),
                  "!",
                  (0, n.jsx)("br", {}),
                  (0, n.jsx)(b, { punConfig: m }),
                ],
              }),
            ],
          }),
        });
      }
    },
    124039: function (t, o, e) {
      t.exports = {
        bugReporterSubmitModalRoot: "bugReporterSubmitModalRoot_bc7a83",
        modalContent: "modalContent_bc7a83",
        closeButton: "closeButton_bc7a83",
        submitText: "submitText_bc7a83",
      };
    },
  },
]);
//# sourceMappingURL=7171fa9cbafb3e58d581.js.map
