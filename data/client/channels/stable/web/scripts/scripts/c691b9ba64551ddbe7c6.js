"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["38795"],
  {
    118922: function (n, e, r) {
      r.r(e),
        r.d(e, {
          IconVariant: function () {
            return t;
          },
          default: function () {
            return d;
          },
        }),
        r(47120);
      var t,
        o,
        a = r(735250),
        i = r(470079),
        c = r(481060),
        s = r(689938),
        l = r(187152);
      ((o = t || (t = {})).DANGER = "danger"), (o.WARNING = "warning");
      function d(n) {
        let {
            transitionState: e,
            onClose: r,
            title: t,
            body: o,
            cta: d,
            closeLabel: u,
            onConfirm: h,
            iconVariant: g = "warning",
          } = n,
          [x, I] = i.useState(!1),
          f =
            null != t ? t : s.Z.Messages.CREATE_POLL_MODAL_WARNING_MODAL_TITLE;
        return (0, a.jsxs)(c.ModalRoot, {
          size: c.ModalSize.DYNAMIC,
          transitionState: e,
          "aria-label": f,
          children: [
            (0, a.jsxs)(c.ModalContent, {
              className: l.content,
              children: [
                (0, a.jsxs)("div", {
                  className: l.header,
                  children: [
                    (0, a.jsx)(c.CircleWarningIcon, {
                      size: "custom",
                      color: "currentColor",
                      width: 20,
                      height: 20,
                      className: (function (n) {
                        switch (n) {
                          case "danger":
                            return l.dangerIcon;
                          case "warning":
                            return l.warningIcon;
                        }
                      })(g),
                    }),
                    (0, a.jsx)(c.Spacer, { size: 8, horizontal: !0 }),
                    (0, a.jsx)(c.Heading, {
                      variant: "heading-xl/semibold",
                      color: "header-primary",
                      children: f,
                    }),
                  ],
                }),
                (0, a.jsx)(c.Spacer, { size: 12 }),
                (0, a.jsx)(c.Text, {
                  variant: "text-md/normal",
                  color: "text-muted",
                  children: o,
                }),
              ],
            }),
            (0, a.jsxs)(c.ModalFooter, {
              children: [
                (0, a.jsx)(c.Button, {
                  color: c.Button.Colors.BRAND,
                  onClick: () => {
                    I(!0);
                    try {
                      h(), r();
                    } finally {
                      I(!1);
                    }
                  },
                  submitting: x,
                  children: d,
                }),
                (0, a.jsx)(c.Spacer, { size: 12, horizontal: !0 }),
                null != u &&
                  (0, a.jsx)(c.Button, {
                    color: c.Button.Colors.PRIMARY,
                    look: c.Button.Looks.OUTLINED,
                    onClick: r,
                    children: u,
                  }),
              ],
            }),
          ],
        });
      }
    },
    187152: function (n, e, r) {
      n.exports = {
        content: "content_fce26a",
        header: "header_fce26a",
        warningIcon: "warningIcon_fce26a",
        dangerIcon: "dangerIcon_fce26a",
      };
    },
  },
]);
//# sourceMappingURL=c691b9ba64551ddbe7c6.js.map
