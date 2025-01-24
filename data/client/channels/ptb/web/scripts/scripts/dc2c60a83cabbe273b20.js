"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33811"],
  {
    191237: function (e, t, o) {
      var a = o(200651);
      o(192379);
      var n = o(481060);
      t.Z = {
        showAgeVerification: (e) => {
          (0, n.openModalLazy)(async () => {
            let { default: t } = await o.e("12014").then(o.bind(o, 879367));
            return (o) => (0, a.jsx)(t, { ...e, ...o });
          });
        },
      };
    },
    277021: function (e, t, o) {
      o.d(t, {
        Q: function () {
          return r;
        },
      });
      var a = o(544891),
        n = o(981631);
      async function r() {
        return (
          await a.tn.post({
            url: n.ANM.AGE_ASSURANCE_TEST,
            body: {},
            rejectWithError: !1,
          })
        ).body;
      }
    },
    986741: function (e, t, o) {
      o.r(t), o(47120);
      var a = o(200651),
        n = o(192379),
        r = o(481060),
        i = o(191237),
        s = o(277021),
        c = o(292018);
      t.default = function (e) {
        let { onClose: t, transitionState: o } = e,
          [l, d] = n.useState(""),
          u = n.useCallback(() => {
            console.log("Scan complete");
          }, []),
          h = async () => {
            d("");
            try {
              let e = await (0, s.Q)();
              i.Z.showAgeVerification({
                webviewUrl: e.verification_webview_url,
                onComplete: u,
              });
            } catch (e) {
              d(e.message);
            }
          };
        return (0, a.jsxs)(r.ModalRoot, {
          transitionState: o,
          className: c.root,
          children: [
            (0, a.jsxs)(r.ModalHeader, {
              className: c.header,
              children: [
                (0, a.jsx)(r.Heading, {
                  variant: "heading-lg/semibold",
                  children: "Age Verification Test Tool",
                }),
                (0, a.jsx)(r.ModalCloseButton, { onClick: t }),
              ],
            }),
            (0, a.jsx)(r.ModalContent, { className: c.content }),
            (0, a.jsxs)(r.ModalFooter, {
              className: c.footer,
              children: [
                (0, a.jsx)(r.Button, {
                  onClick: h,
                  children: "Trigger Age Verification Test",
                }),
                "" !== l && (0, a.jsx)(r.InputError, { error: l }),
              ],
            }),
          ],
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
//# sourceMappingURL=dc2c60a83cabbe273b20.js.map
