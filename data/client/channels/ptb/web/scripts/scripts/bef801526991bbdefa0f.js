"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["74673"],
  {
    394045: function (t, e, n) {
      n.r(e);
      var a = n(735250),
        s = n(470079),
        o = n(481060),
        i = n(313201),
        r = n(434404),
        c = n(703656),
        l = n(112612),
        d = n(981631),
        u = n(176505),
        T = n(689938),
        x = n(213892);
      e.default = function (t) {
        let {
            guildId: e,
            submittedGuildJoinRequestsCount: n,
            onClose: I,
            transitionState: _,
            onConfirm: E,
          } = t,
          N = (0, i.Dt)(),
          {
            submitting: f,
            errorMessage: m,
            onSubmit: C,
          } = (0, l.Z)({ onSubmit: E, onClose: I }),
          M = s.useCallback(() => {
            I(),
              r.Z.close(),
              (0, c.uL)(d.Z5c.CHANNEL(e, u.oC.MEMBER_APPLICATIONS));
          }, [e, I]);
        return (0, a.jsxs)(o.ModalRoot, {
          className: x.container,
          transitionState: _,
          "aria-labelledby": N,
          children: [
            (0, a.jsxs)(o.ModalContent, {
              className: x.content,
              children: [
                (0, a.jsx)(o.Heading, {
                  variant: "heading-md/semibold",
                  id: N,
                  children:
                    T.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EDIT_WARNING_TITLE.format(
                      { count: n },
                    ),
                }),
                (0, a.jsx)(o.Text, {
                  className: x.descriptionText,
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children:
                    T.Z.Messages
                      .GUILD_SETTINGS_MEMBER_VERIFICATION_EDIT_WARNING_DESCRIPTIONG,
                }),
                (0, a.jsx)(o.Clickable, {
                  className: x.actionText,
                  onClick: M,
                  children: (0, a.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    color: "text-link",
                    children:
                      T.Z.Messages
                        .GUILD_SETTINGS_MEMBER_VERIFICATION_APPLICATIONS_TITLE,
                  }),
                }),
                null != m &&
                  (0, a.jsx)(o.Text, {
                    className: x.__invalid_errorText,
                    variant: "text-xs/normal",
                    color: "text-danger",
                    children: m,
                  }),
              ],
            }),
            (0, a.jsxs)(o.ModalFooter, {
              children: [
                (0, a.jsx)(o.Button, {
                  className: x.actionButton,
                  color: o.Button.Colors.BRAND,
                  submitting: f,
                  onClick: C,
                  size: o.Button.Sizes.SMALL,
                  children: (0, a.jsx)(o.Text, {
                    variant: "text-sm/semibold",
                    children:
                      T.Z.Messages
                        .GUILD_SETTINGS_MEMBER_VERIFICATION_CONTINUE_EDITING,
                  }),
                }),
                (0, a.jsx)(o.Button, {
                  color: o.Button.Colors.PRIMARY,
                  onClick: I,
                  size: o.Button.Sizes.SMALL,
                  children: (0, a.jsx)(o.Text, {
                    variant: "text-sm/semibold",
                    children: T.Z.Messages.CANCEL,
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
          return o;
        },
      }),
        n(47120);
      var a = n(470079),
        s = n(881052);
      function o(t) {
        let { onSubmit: e, onClose: n } = t,
          [o, i] = a.useState(!1),
          [r, c] = a.useState(null),
          l = a.useCallback(async () => {
            if (!o) {
              i(!0), c(null);
              try {
                await e(), n();
              } catch (t) {
                c(new s.Hx(t).getAnyErrorMessage()), i(!1);
              }
            }
          }, [n, e, o]);
        return { submitting: o, errorMessage: r, onSubmit: l };
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
//# sourceMappingURL=bef801526991bbdefa0f.js.map
