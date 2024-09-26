"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["64648"],
  {
    968626: function (e) {
      e.exports = "/assets/94798c0b9b6ea4897c49.png";
    },
    81155: function (e, t, o) {
      o.r(t),
        o.d(t, {
          default: function () {
            return p;
          },
        });
      var l = o(735250),
        n = o(470079),
        a = o(481060),
        s = o(782568),
        r = o(690221),
        i = o(557177),
        u = o(689938),
        c = o(661243);
      let d = [
        { preBold: "That's pretty...", bold: "fly!" },
        {
          preBold: "On Point will make sure to",
          bold: " tick ",
          postBold: "a look at it!",
        },
        { preBold: "You're...un", bold: "bee ", postBold: "lievable!" },
      ];
      function b(e) {
        let { punConfig: t } = e;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            t.preBold,
            (0, l.jsx)("b", {
              children: (0, l.jsx)("i", { children: t.bold }),
            }),
            t.postBold,
          ],
        });
      }
      function p(e) {
        let { transitionState: t, onClose: o, asanaTask: p } = e;
        n.useEffect(() => {
          (0, i.GN)("success", 0.1);
        }, []);
        let f = n.useRef(d[Math.floor(Math.random() * d.length)]).current;
        return (0, l.jsx)(a.ModalRoot, {
          className: c.bugReporterSubmitModalRoot,
          transitionState: t,
          "aria-label": u.Z.Messages.SUBMIT_BUG,
          children: (0, l.jsxs)(a.ModalContent, {
            style: { overflow: "hidden", paddingRight: "0px" },
            className: c.modalContent,
            paddingFix: !1,
            children: [
              (0, l.jsx)(a.ModalCloseButton, {
                onClick: () => {
                  null == o || o();
                },
                className: c.closeButton,
              }),
              (0, l.jsxs)(a.Text, {
                className: c.submitText,
                variant: "text-sm/normal",
                children: [
                  "Thanks for submitting a ",
                  (0, l.jsx)(r.Z, {
                    onClick: () => (0, s.Z)(p.permalink_url),
                    children: "bug",
                  }),
                  "!",
                  (0, l.jsx)("br", {}),
                  (0, l.jsx)(b, { punConfig: f }),
                ],
              }),
            ],
          }),
        });
      }
    },
    690221: function (e, t, o) {
      var l = o(735250),
        n = o(470079),
        a = o(481060),
        s = o(703656),
        r = o(981631);
      t.Z = n.forwardRef(function (e, t) {
        let {
            href: o,
            children: i,
            onClick: u,
            onKeyPress: c,
            focusProps: d,
            ...b
          } = e,
          p = n.useCallback(
            (e) => {
              if (!e.repeat)
                (e.charCode === r.yXg.SPACE || e.charCode === r.yXg.ENTER) &&
                  (e.preventDefault(),
                  null != o && (0, s.uL)(o),
                  null == u || u()),
                  null == c || c(e);
            },
            [o, c, u],
          ),
          f = n.useCallback(
            (e) => {
              if (!e.metaKey && !e.shiftKey && 0 === e.button)
                e.preventDefault(),
                  e.stopPropagation(),
                  null != o && (0, s.uL)(o),
                  null == u || u();
            },
            [o, u],
          ),
          h = (0, l.jsx)("a", {
            ref: t,
            href: o,
            onClick: f,
            onKeyPress: p,
            ...b,
            children: i,
          });
        return (0, l.jsx)(a.FocusRing, { ...d, children: h });
      });
    },
    661243: function (e, t, o) {
      e.exports = {
        bugReporterSubmitModalRoot: "bugReporterSubmitModalRoot_bc7a83",
        modalContent: "modalContent_bc7a83",
        closeButton: "closeButton_bc7a83",
        submitText: "submitText_bc7a83",
      };
    },
  },
]);
//# sourceMappingURL=1f8bb3f13d2fa6abc9e4.js.map
