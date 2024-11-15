"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33811"],
  {
    277021: function (e, a, t) {
      t.d(a, {
        Q: function () {
          return n;
        },
      });
      var o = t(544891),
        r = t(981631);
      async function n() {
        return (await o.tn.post({ url: r.ANM.AGE_ASSURANCE_TEST, body: {} }))
          .body;
      }
    },
    986741: function (e, a, t) {
      t.r(a), t(47120);
      var o = t(200651),
        r = t(192379),
        n = t(481060),
        s = t(277021),
        i = t(180511);
      a.default = function (e) {
        let { onClose: a, transitionState: t } = e,
          [c, d] = r.useState(""),
          [l, u] = r.useState(""),
          f = async () => {
            u("");
            try {
              let e = await (0, s.Q)();
              d(e.url);
            } catch (e) {
              d(""), u(e.message);
            }
          };
        return (0, o.jsxs)(n.ModalRoot, {
          transitionState: t,
          className: i.root,
          children: [
            (0, o.jsxs)(n.ModalHeader, {
              className: i.header,
              children: [
                (0, o.jsx)(n.Heading, {
                  variant: "heading-lg/semibold",
                  children: "Age Verification Test Tool",
                }),
                (0, o.jsx)(n.ModalCloseButton, { onClick: a }),
              ],
            }),
            (0, o.jsx)(n.ModalContent, {
              className: i.content,
              children:
                "" !== c &&
                (0, o.jsx)("iframe", {
                  id: "frame",
                  src: c,
                  className: i.iframe,
                  allow: "camera; microphone",
                }),
            }),
            (0, o.jsxs)(n.ModalFooter, {
              className: i.footer,
              children: [
                (0, o.jsx)(n.Button, {
                  onClick: f,
                  children: "Trigger Age Verification Test",
                }),
                "" !== l && (0, o.jsx)(n.InputError, { error: l }),
              ],
            }),
          ],
        });
      };
    },
    180511: function (e, a, t) {
      e.exports = {
        header: "header_abdb08",
        content: "content_abdb08",
        footer: "footer_abdb08",
        iframe: "iframe_abdb08",
        root: "root_abdb08",
      };
    },
  },
]);
//# sourceMappingURL=65b9e09d0eac6dbdc237.js.map
