"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["82961"],
  {
    751744: function (e, o, t) {
      t.r(o), t(47120);
      var i = t(200651),
        n = t(192379),
        a = t(442837),
        c = t(481060),
        r = t(103879),
        s = t(236289),
        l = t(853178),
        d = t(800530),
        h = t(586843);
      o.default = function (e) {
        let { onClose: o, transitionState: t } = e,
          x = (0, a.e7)([s.Z], () => s.Z.getAgeVerificationWebviewUrl()),
          g = (0, a.e7)([s.Z], () => s.Z.getAgeVerificationError()),
          f = (0, a.e7)([s.Z], () => s.Z.getIsLoadingAgeVerification()),
          [m, u] = n.useState(!1);
        n.useEffect(() => {
          u(null !== g);
        }, [g]);
        let j = () => {
          o(), l.Z.close();
        };
        return (0, i.jsxs)(c.ModalRoot, {
          transitionState: t,
          className: h.root,
          children: [
            (0, i.jsxs)(c.ModalHeader, {
              className: h.header,
              children: [
                (0, i.jsx)(c.Heading, {
                  variant: "heading-lg/semibold",
                  children: "Age Verification Test Tool",
                }),
                (0, i.jsx)(c.ModalCloseButton, { onClick: j }),
              ],
            }),
            (0, i.jsxs)(c.ModalContent, {
              className: h.content,
              children: [
                m &&
                  (0, i.jsxs)(c.Notice, {
                    color: c.NoticeColors.DANGER,
                    className: h.nagbar,
                    children: [
                      "Error loading Age Verification",
                      (0, i.jsx)(c.NoticeButton, {
                        onClick: () => u(!1),
                        children: "Hide",
                      }),
                    ],
                  }),
                "" !== x
                  ? (0, i.jsx)("iframe", {
                      id: "frame",
                      src: x,
                      className: h.iframe,
                      allow: "camera; microphone",
                    })
                  : (0, i.jsx)("div", {
                      className: h.textBody,
                      children: (0, i.jsx)(c.Text, {
                        variant: "text-md/normal",
                        children: "Text explaining options to user",
                      }),
                    }),
              ],
            }),
            (0, i.jsx)(c.ModalFooter, {
              className: h.footer,
              children:
                "" === x
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(c.Button, {
                          onClick: () => {
                            (0, r.pU)();
                          },
                          submitting: f,
                          children: "Begin Age Verification",
                        }),
                        (0, i.jsx)(c.Button, {
                          onClick: () => {
                            window.open(d.sQ.AGE_VERIFICATION_LINK, "_blank");
                          },
                          disabled: f,
                          children: "Open Form",
                        }),
                      ],
                    })
                  : (0, i.jsx)(c.Button, { onClick: j, children: "Close" }),
            }),
          ],
        });
      };
    },
    586843: function (e, o, t) {
      e.exports = {
        header: "header_e4c51c",
        content: "content_e4c51c",
        footer: "footer_e4c51c",
        iframe: "iframe_e4c51c",
        root: "root_e4c51c",
        textBody: "textBody_e4c51c",
        nagbar: "nagbar_e4c51c",
      };
    },
  },
]);
//# sourceMappingURL=c4a1856f1753a5fb49de.js.map
