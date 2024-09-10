"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54845"],
  {
    199836: function (t, e, n) {
      n.r(e);
      var a = n(735250);
      n(470079);
      var o = n(481060),
        s = n(313201),
        i = n(112612),
        r = n(689938),
        c = n(213892);
      e.default = function (t) {
        let { onClose: e, transitionState: n, onSubmit: l } = t,
          {
            submitting: d,
            errorMessage: u,
            onSubmit: x,
          } = (0, i.Z)({ onSubmit: l, onClose: e }),
          _ = (0, s.Dt)();
        return (0, a.jsxs)(o.ModalRoot, {
          className: c.container,
          transitionState: n,
          "aria-labelledby": _,
          children: [
            (0, a.jsxs)(o.ModalContent, {
              className: c.content,
              children: [
                (0, a.jsx)(o.Heading, {
                  variant: "heading-md/semibold",
                  id: _,
                  children:
                    r.Z.Messages
                      .GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_WARNING_TITLE,
                }),
                (0, a.jsx)(o.Text, {
                  className: c.manualApprovalDescriptionText,
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children:
                    r.Z.Messages
                      .GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_WARNING_DESCRIPTION,
                }),
                (0, a.jsx)(o.Text, {
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children:
                    r.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_WARNING_EXPLANATION.format(),
                }),
                null != u &&
                  (0, a.jsx)(o.Text, {
                    className: c.__invalid_errorText,
                    variant: "text-xs/normal",
                    color: "text-danger",
                    children: u,
                  }),
              ],
            }),
            (0, a.jsxs)(o.ModalFooter, {
              children: [
                (0, a.jsx)(o.Button, {
                  className: c.actionButton,
                  color: o.Button.Colors.BRAND,
                  submitting: d,
                  onClick: x,
                  size: o.Button.Sizes.SMALL,
                  children: (0, a.jsx)(o.Text, {
                    variant: "text-sm/semibold",
                    children: r.Z.Messages.CONFIRM,
                  }),
                }),
                (0, a.jsx)(o.Button, {
                  color: o.Button.Colors.PRIMARY,
                  onClick: e,
                  size: o.Button.Sizes.SMALL,
                  children: (0, a.jsx)(o.Text, {
                    variant: "text-sm/semibold",
                    children: r.Z.Messages.CANCEL,
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    112612: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return s;
        },
      }),
        n(47120);
      var a = n(470079),
        o = n(881052);
      function s(t) {
        let { onSubmit: e, onClose: n } = t,
          [s, i] = a.useState(!1),
          [r, c] = a.useState(null),
          l = a.useCallback(async () => {
            if (!s) {
              i(!0), c(null);
              try {
                await e(), n();
              } catch (t) {
                c(new o.Hx(t).getAnyErrorMessage()), i(!1);
              }
            }
          }, [n, e, s]);
        return { submitting: s, errorMessage: r, onSubmit: l };
      }
    },
    213892: function (t, e, n) {
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
//# sourceMappingURL=ba0855065f3044107c38.js.map
