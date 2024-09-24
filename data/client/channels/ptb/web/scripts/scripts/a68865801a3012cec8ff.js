"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18879"],
  {
    535278: function (t, e, a) {
      a.r(e),
        a.d(e, {
          default: function () {
            return d;
          },
        });
      var n = a(735250);
      a(470079);
      var i = a(481060),
        s = a(313201),
        r = a(689938),
        o = a(825413),
        l = a(365627);
      function d(t) {
        let {
            transitionState: e,
            onClose: a,
            storeListing: d,
            subscription: c,
          } = t,
          I = (0, s.Dt)();
        return (0, n.jsxs)(i.ModalRoot, {
          transitionState: e,
          "aria-labelledby": I,
          children: [
            (0, n.jsxs)(i.ModalContent, {
              className: o.contentContainer,
              children: [
                (0, n.jsx)("img", { src: l, alt: "" }),
                (0, n.jsx)(i.Heading, {
                  className: o.title,
                  variant: "heading-xl/bold",
                  color: "header-primary",
                  id: I,
                  children:
                    r.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format(
                      { tier: d.summary },
                    ),
                }),
                (0, n.jsx)(i.Text, {
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
            (0, n.jsx)(i.ModalFooter, {
              children: (0, n.jsx)(i.Button, {
                size: i.Button.Sizes.MEDIUM,
                grow: !1,
                onClick: a,
                children:
                  r.Z.Messages
                    .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON,
              }),
            }),
          ],
        });
      }
    },
    825413: function (t, e, a) {
      t.exports = {
        contentContainer: "contentContainer_babb36",
        title: "title_babb36",
        subtitle: "subtitle_babb36",
      };
    },
  },
]);
//# sourceMappingURL=a68865801a3012cec8ff.js.map
