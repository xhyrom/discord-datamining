"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18879"],
  {
    535278: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return d;
          },
        });
      var a = n(735250);
      n(470079);
      var i = n(481060),
        s = n(313201),
        r = n(689938),
        o = n(253019),
        l = n(365627);
      function d(t) {
        let { transitionState: e, onClose: n, listing: d, subscription: c } = t,
          I = (0, s.Dt)();
        return (0, a.jsxs)(i.ModalRoot, {
          transitionState: e,
          "aria-labelledby": I,
          children: [
            (0, a.jsxs)(i.ModalContent, {
              className: o.contentContainer,
              children: [
                (0, a.jsx)("img", { src: l, alt: "" }),
                (0, a.jsx)(i.Heading, {
                  className: o.title,
                  variant: "heading-xl/bold",
                  color: "header-primary",
                  id: I,
                  children:
                    r.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format(
                      { tier: d.name },
                    ),
                }),
                (0, a.jsx)(i.Text, {
                  className: o.subtitle,
                  variant: "text-md/medium",
                  color: "header-secondary",
                  children:
                    r.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format(
                      { timestamp: null == c ? void 0 : c.currentPeriodEnd },
                    ),
                }),
              ],
            }),
            (0, a.jsx)(i.ModalFooter, {
              children: (0, a.jsx)(i.Button, {
                size: i.Button.Sizes.MEDIUM,
                grow: !1,
                onClick: n,
                children:
                  r.Z.Messages
                    .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON,
              }),
            }),
          ],
        });
      }
    },
    253019: function (t, e, n) {
      t.exports = {
        contentContainer: "contentContainer_babb36",
        title: "title_babb36",
        subtitle: "subtitle_babb36",
      };
    },
  },
]);
//# sourceMappingURL=589473116a114a55035e.js.map
