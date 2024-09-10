"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["20212"],
  {
    915194: function (l, n, e) {
      e.r(n);
      var o = e(735250);
      e(470079);
      var i = e(442837),
        a = e(481060),
        s = e(812206),
        r = e(600164),
        d = e(922156),
        t = e(63063),
        c = e(689938),
        u = e(236774);
      n.default = (l) => {
        let { onClose: n, transitionState: e } = l,
          { error: p, applicationName: h } = (0, i.cj)([d.Z, s.Z], () => {
            let l = d.Z.getLastError(),
              n = null;
            if (null != l && null != l.applicationId) {
              let e = s.Z.getApplication(l.applicationId);
              null != e && (n = e.name);
            }
            return { error: l, applicationName: n };
          });
        return (0, o.jsxs)(a.ModalRoot, {
          transitionState: e,
          size: a.ModalSize.SMALL,
          "aria-label": c.Z.Messages.DISPATCH_ERROR_MODAL_HEADER,
          children: [
            (0, o.jsxs)(a.ModalHeader, {
              justify: r.Z.Justify.BETWEEN,
              separator: !1,
              children: [
                (0, o.jsx)(r.Z.Child, {
                  grow: 1,
                  children: (0, o.jsx)(a.Heading, {
                    variant: "heading-lg/semibold",
                    children: c.Z.Messages.DISPATCH_ERROR_MODAL_HEADER,
                  }),
                }),
                (0, o.jsx)(r.Z.Child, {
                  grow: 0,
                  children: (0, o.jsx)(a.ModalCloseButton, { onClick: n }),
                }),
              ],
            }),
            (0, o.jsx)(a.ModalContent, {
              children: (0, o.jsxs)("div", {
                className: u.body,
                children: [
                  (0, o.jsx)("div", {
                    children:
                      c.Z.Messages.DISPATCH_ERROR_MODAL_DESCRIPTION.format({
                        link: "https://dis.gd/dispatch-error",
                      }),
                  }),
                  (0, o.jsx)("div", {
                    className: u.supportCallToAction,
                    children: c.Z.Messages.DISPATCH_ERROR_MODAL_BODY,
                  }),
                  (0, o.jsx)("div", {
                    className: u.errorLabel,
                    children: c.Z.Messages.DISPATCH_ERROR_MODAL_ERROR_LABEL,
                  }),
                  (0, o.jsx)("div", {
                    className: u.errorDetails,
                    children: (0, o.jsxs)("div", {
                      children: [
                        null != h ? "Game: ".concat(h, "\n") : null,
                        (null == p ? void 0 : p.applicationId) != null
                          ? "Game ID: ".concat(p.applicationId, "\n")
                          : null,
                        (null == p ? void 0 : p.branchId) != null &&
                        (null == p ? void 0 : p.applicationId) !==
                          (null == p ? void 0 : p.branchId)
                          ? "Branch ID: ".concat(
                              null == p ? void 0 : p.branchId,
                              "\n",
                            )
                          : null,
                        (null == p ? void 0 : p.code) != null
                          ? "Error Code: ".concat(
                              null == p ? void 0 : p.code,
                              "\n",
                            )
                          : null,
                        (null == p ? void 0 : p.uuid) != null
                          ? "Unique Case ID: ".concat(
                              null == p ? void 0 : p.uuid,
                            )
                          : null,
                      ],
                    }),
                  }),
                ],
              }),
            }),
            (0, o.jsxs)(a.ModalFooter, {
              children: [
                (0, o.jsx)(a.Button, {
                  onClick: () => {
                    window.open(t.Z.getSubmitRequestURL());
                  },
                  children: c.Z.Messages.DISPATCH_ERROR_MODAL_OPEN_TICKET,
                }),
                (0, o.jsx)(a.Button, {
                  look: a.Button.Looks.LINK,
                  onClick: n,
                  color: u.closeLink,
                  children: c.Z.Messages.CLOSE,
                }),
              ],
            }),
          ],
        });
      };
    },
    236774: function (l, n, e) {
      l.exports = {
        supportCallToAction: "supportCallToAction_b07a08",
        errorLabel: "errorLabel_b07a08",
        errorDetails: "errorDetails_b07a08",
        closeLink: "closeLink_b07a08",
        body: "body_b07a08",
      };
    },
  },
]);
//# sourceMappingURL=4475d2b62d3852c1bfb2.js.map
