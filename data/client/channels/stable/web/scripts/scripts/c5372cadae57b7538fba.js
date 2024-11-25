"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["20212"],
  {
    915194: function (l, n, i) {
      i.r(n);
      var o = i(200651);
      i(192379);
      var t = i(442837),
        r = i(481060),
        a = i(812206),
        e = i(600164),
        d = i(922156),
        s = i(63063),
        c = i(388032),
        u = i(908297);
      n.default = (l) => {
        let { onClose: n, transitionState: i } = l,
          { error: p, applicationName: h } = (0, t.cj)([d.Z, a.Z], () => {
            let l = d.Z.getLastError(),
              n = null;
            if (null != l && null != l.applicationId) {
              let i = a.Z.getApplication(l.applicationId);
              null != i && (n = i.name);
            }
            return { error: l, applicationName: n };
          });
        return (0, o.jsxs)(r.ModalRoot, {
          transitionState: i,
          size: r.ModalSize.SMALL,
          "aria-label": c.intl.string(c.t["6kHRYG"]),
          children: [
            (0, o.jsxs)(r.ModalHeader, {
              justify: e.Z.Justify.BETWEEN,
              separator: !1,
              children: [
                (0, o.jsx)(e.Z.Child, {
                  grow: 1,
                  children: (0, o.jsx)(r.Heading, {
                    variant: "heading-lg/semibold",
                    children: c.intl.string(c.t["6kHRYG"]),
                  }),
                }),
                (0, o.jsx)(e.Z.Child, {
                  grow: 0,
                  children: (0, o.jsx)(r.ModalCloseButton, { onClick: n }),
                }),
              ],
            }),
            (0, o.jsx)(r.ModalContent, {
              children: (0, o.jsxs)("div", {
                className: u.body,
                children: [
                  (0, o.jsx)("div", {
                    children: c.intl.format(c.t["NnE/6O"], {
                      link: "https://dis.gd/dispatch-error",
                    }),
                  }),
                  (0, o.jsx)("div", {
                    className: u.supportCallToAction,
                    children: c.intl.string(c.t["o+efY2"]),
                  }),
                  (0, o.jsx)("div", {
                    className: u.errorLabel,
                    children: c.intl.string(c.t.BiSnZ2),
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
            (0, o.jsxs)(r.ModalFooter, {
              children: [
                (0, o.jsx)(r.Button, {
                  onClick: () => {
                    window.open(s.Z.getSubmitRequestURL());
                  },
                  children: c.intl.string(c.t.VdyWmJ),
                }),
                (0, o.jsx)(r.Button, {
                  look: r.Button.Looks.LINK,
                  onClick: n,
                  color: u.closeLink,
                  children: c.intl.string(c.t.cpT0Cg),
                }),
              ],
            }),
          ],
        });
      };
    },
    908297: function (l, n, i) {
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
//# sourceMappingURL=c5372cadae57b7538fba.js.map
