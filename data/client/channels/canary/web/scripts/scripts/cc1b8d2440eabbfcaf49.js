"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["48748"],
  {
    52004: function (t, i, n) {
      n.r(i);
      var e = n(200651);
      n(192379);
      var l = n(442837),
        a = n(481060),
        s = n(812206),
        o = n(600164),
        r = n(63063),
        c = n(981631),
        d = n(388032),
        m = n(712580);
      let p = r.Z.getArticleURL(c.BhN.MISSING_ENTITLEMENT);
      i.default = l.ZP.connectStores([s.Z], (t) => {
        let { applicationId: i } = t;
        return { application: s.Z.getApplication(i) };
      })(function (t) {
        let { application: i, transitionState: n, onClose: l } = t;
        return (0, e.jsxs)(a.ModalRoot, {
          transitionState: n,
          size: a.ModalSize.MEDIUM,
          children: [
            (0, e.jsxs)(a.ModalHeader, {
              align: o.Z.Align.CENTER,
              justify: o.Z.Justify.BETWEEN,
              children: [
                (0, e.jsx)(a.FormTitle, {
                  tag: a.FormTitleTags.H4,
                  children:
                    null != i
                      ? d.intl.formatToPlainString(d.t.N2mILi, {
                          applicationName: i.name,
                        })
                      : d.intl.string(d.t.nS8PUV),
                }),
                (0, e.jsx)(a.ModalCloseButton, { onClick: l }),
              ],
            }),
            (0, e.jsxs)(a.ModalContent, {
              children: [
                (0, e.jsx)("div", { className: m.missingEntitlementImage }),
                (0, e.jsx)(a.Text, {
                  className: m.text,
                  variant: "text-md/normal",
                  children:
                    null != i
                      ? d.intl.format(d.t["MM/7q6"], {
                          applicationName: i.name,
                          supportArticleURL: p,
                        })
                      : d.intl.format(d.t.IfQUx8, { supportArticleURL: p }),
                }),
              ],
            }),
            (0, e.jsx)(a.ModalFooter, {
              children: (0, e.jsx)(a.Button, {
                onClick: l,
                children: d.intl.string(d.t.BddRzc),
              }),
            }),
          ],
        });
      });
    },
    712580: function (t, i, n) {
      t.exports = {
        missingEntitlementImage: "missingEntitlementImage_d64cba",
        text: "text_d64cba",
      };
    },
  },
]);
//# sourceMappingURL=cc1b8d2440eabbfcaf49.js.map
