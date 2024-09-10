"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["48748"],
  {
    52004: function (t, e, s) {
      s.r(e);
      var a = s(735250);
      s(470079);
      var i = s(442837),
        n = s(481060),
        l = s(812206),
        o = s(600164),
        r = s(63063),
        c = s(981631),
        N = s(689938),
        E = s(622629);
      let M = r.Z.getArticleURL(c.BhN.MISSING_ENTITLEMENT);
      e.default = i.ZP.connectStores([l.Z], (t) => {
        let { applicationId: e } = t;
        return { application: l.Z.getApplication(e) };
      })(function (t) {
        let { application: e, transitionState: s, onClose: i } = t;
        return (0, a.jsxs)(n.ModalRoot, {
          transitionState: s,
          size: n.ModalSize.MEDIUM,
          children: [
            (0, a.jsxs)(n.ModalHeader, {
              align: o.Z.Align.CENTER,
              justify: o.Z.Justify.BETWEEN,
              children: [
                (0, a.jsx)(n.FormTitle, {
                  tag: n.FormTitleTags.H4,
                  children:
                    null != e
                      ? N.Z.Messages.MISSING_ENTITLEMENT_MODAL_HEADER.format({
                          applicationName: e.name,
                        })
                      : N.Z.Messages
                          .MISSING_ENTITLEMENT_MODAL_HEADER_UNKNOWN_APPLICATION,
                }),
                (0, a.jsx)(n.ModalCloseButton, { onClick: i }),
              ],
            }),
            (0, a.jsxs)(n.ModalContent, {
              children: [
                (0, a.jsx)("div", { className: E.missingEntitlementImage }),
                (0, a.jsx)(n.Text, {
                  className: E.text,
                  variant: "text-md/normal",
                  children:
                    null != e
                      ? N.Z.Messages.MISSING_ENTITLEMENT_MODAL_BODY.format({
                          applicationName: e.name,
                          supportArticleURL: M,
                        })
                      : N.Z.Messages.MISSING_ENTITLEMENT_MODAL_BODY_UNKNOWN_APPLICATION.format(
                          { supportArticleURL: M },
                        ),
                }),
              ],
            }),
            (0, a.jsx)(n.ModalFooter, {
              children: (0, a.jsx)(n.Button, {
                onClick: i,
                children: N.Z.Messages.OKAY,
              }),
            }),
          ],
        });
      });
    },
    622629: function (t, e, s) {
      t.exports = {
        missingEntitlementImage: "missingEntitlementImage_d64cba",
        text: "text_d64cba",
      };
    },
  },
]);
//# sourceMappingURL=2e4f94cad464ca97d32c.js.map
