"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33811"],
  {
    277021: function (e, t, a) {
      a.d(t, {
        Q: function () {
          return n;
        },
      });
      var r = a(544891),
        o = a(981631);
      async function n() {
        return (
          await r.tn.post({
            url: o.ANM.AGE_ASSURANCE_TEST,
            body: {},
            rejectWithError: !1,
          })
        ).body;
      }
    },
    986741: function (e, t, a) {
      a.r(t), a(47120);
      var r = a(200651),
        o = a(192379),
        n = a(481060),
        s = a(277021),
        i = a(3327);
      t.default = function (e) {
        let { onClose: t, transitionState: a } = e,
          [c, d] = o.useState(""),
          [l, u] = o.useState(""),
          h = async () => {
            u("");
            try {
              let e = await (0, s.Q)();
              d(e.url);
            } catch (e) {
              d(""), u(e.message);
            }
          };
        return (0, r.jsxs)(n.ModalRoot, {
          transitionState: a,
          className: i.root,
          children: [
            (0, r.jsxs)(n.ModalHeader, {
              className: i.header,
              children: [
                (0, r.jsx)(n.Heading, {
                  variant: "heading-lg/semibold",
                  children: "Age Verification Test Tool",
                }),
                (0, r.jsx)(n.ModalCloseButton, { onClick: t }),
              ],
            }),
            (0, r.jsx)(n.ModalContent, {
              className: i.content,
              children:
                "" !== c &&
                (0, r.jsx)("iframe", {
                  id: "frame",
                  src: c,
                  className: i.iframe,
                  allow: "camera; microphone",
                }),
            }),
            (0, r.jsxs)(n.ModalFooter, {
              className: i.footer,
              children: [
                (0, r.jsx)(n.Button, {
                  onClick: h,
                  children: "Trigger Age Verification Test",
                }),
                "" !== l && (0, r.jsx)(n.InputError, { error: l }),
              ],
            }),
          ],
        });
      };
    },
    3327: function (e, t, a) {
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
//# sourceMappingURL=8015779966d7e7a1dc85.js.map
