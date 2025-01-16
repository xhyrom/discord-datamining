"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33811"],
  {
    277021: function (e, t, o) {
      o.d(t, {
        Q: function () {
          return r;
        },
      });
      var n = o(544891),
        a = o(981631);
      async function r() {
        return (
          await n.tn.post({
            url: a.ANM.AGE_ASSURANCE_TEST,
            body: {},
            rejectWithError: !1,
          })
        ).body;
      }
    },
    986741: function (e, t, o) {
      o.r(t), o(47120);
      var n = o(200651),
        a = o(192379),
        r = o(481060),
        i = o(955522),
        s = o(277021),
        c = o(292018);
      t.default = function (e) {
        let { onClose: t, transitionState: o } = e,
          [l, d] = a.useState(""),
          u = a.useCallback(() => {
            console.log("Scan complete");
          }, []),
          b = async () => {
            d("");
            try {
              let e = await (0, s.Q)();
              (0, i.F)({
                webviewUrl: e.verification_webview_url,
                onComplete: u,
              });
            } catch (e) {
              d(e.message);
            }
          };
        return (0, n.jsxs)(r.ModalRoot, {
          transitionState: o,
          className: c.root,
          children: [
            (0, n.jsxs)(r.ModalHeader, {
              className: c.header,
              children: [
                (0, n.jsx)(r.Heading, {
                  variant: "heading-lg/semibold",
                  children: "Age Verification Test Tool",
                }),
                (0, n.jsx)(r.ModalCloseButton, { onClick: t }),
              ],
            }),
            (0, n.jsx)(r.ModalContent, { className: c.content }),
            (0, n.jsxs)(r.ModalFooter, {
              className: c.footer,
              children: [
                (0, n.jsx)(r.Button, {
                  onClick: b,
                  children: "Trigger Age Verification Test",
                }),
                "" !== l && (0, n.jsx)(r.InputError, { error: l }),
              ],
            }),
          ],
        });
      };
    },
    955522: function (e, t, o) {
      o.d(t, {
        F: function () {
          return r;
        },
      });
      var n = o(200651);
      o(192379);
      var a = o(481060);
      let r = (e) => {
        (0, a.openModalLazy)(async () => {
          let { default: t } = await o.e("12014").then(o.bind(o, 879367));
          return (o) => (0, n.jsx)(t, { ...e, ...o });
        });
      };
    },
    292018: function (e, t, o) {
      e.exports = {
        header: "header_abdb08",
        content: "content_abdb08",
        footer: "footer_abdb08",
        root: "root_abdb08",
      };
    },
  },
]);
//# sourceMappingURL=20e1393d404ed9252209.js.map
