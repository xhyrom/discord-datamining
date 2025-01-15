"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["55009"],
  {
    826390: function (t, n, e) {
      e.r(n);
      var i = e(200651),
        o = e(192379),
        a = e(481060),
        s = e(313201),
        c = e(434404),
        l = e(703656),
        r = e(981631),
        d = e(176505),
        x = e(388032),
        u = e(286208);
      n.default = function (t) {
        let {
            guildId: n,
            submittedGuildJoinRequestsCount: e,
            onClose: f,
            transitionState: h,
            onConfirm: m,
          } = t,
          p = (0, s.Dt)(),
          T = o.useCallback(() => {
            f(), m();
          }, [f, m]),
          C = o.useCallback(() => {
            f(), c.Z.close(), (0, l.uL)(r.Z5c.CHANNEL(n, d.oC.MEMBER_SAFETY));
          }, [n, f]);
        return (0, i.jsxs)(a.ModalRoot, {
          className: u.container,
          transitionState: h,
          "aria-labelledby": p,
          children: [
            (0, i.jsxs)(a.ModalContent, {
              className: u.content,
              children: [
                (0, i.jsx)(a.Heading, {
                  variant: "heading-md/semibold",
                  id: p,
                  children: x.intl.format(x.t.chV4JS, { count: e }),
                }),
                (0, i.jsx)(a.Text, {
                  className: u.descriptionText,
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children: x.intl.string(x.t.GPGPDw),
                }),
                (0, i.jsx)(a.Clickable, {
                  className: u.actionText,
                  onClick: C,
                  children: (0, i.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "text-link",
                    children: x.intl.string(x.t.szESVF),
                  }),
                }),
              ],
            }),
            (0, i.jsxs)(a.ModalFooter, {
              children: [
                (0, i.jsx)(a.Button, {
                  className: u.actionButton,
                  color: a.Button.Colors.BRAND,
                  onClick: T,
                  size: a.Button.Sizes.SMALL,
                  children: (0, i.jsx)(a.Text, {
                    variant: "text-sm/semibold",
                    children: x.intl.string(x.t["3PatS0"]),
                  }),
                }),
                (0, i.jsx)(a.Button, {
                  color: a.Button.Colors.PRIMARY,
                  onClick: f,
                  size: a.Button.Sizes.SMALL,
                  children: (0, i.jsx)(a.Text, {
                    variant: "text-sm/semibold",
                    children: x.intl.string(x.t["ETE/oK"]),
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    286208: function (t, n, e) {
      t.exports = {
        container: "container_dfff12",
        content: "content_dfff12",
        descriptionText: "descriptionText_dfff12",
        manualApprovalDescriptionText: "manualApprovalDescriptionText_dfff12",
        actionButton: "actionButton_dfff12",
        actionText: "actionText_dfff12",
      };
    },
  },
]);
//# sourceMappingURL=c6c6fa0fe46a9235db97.js.map
