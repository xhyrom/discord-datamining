"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["74673"],
  {
    394045: function (t, n, e) {
      e.r(n);
      var i = e(200651),
        o = e(192379),
        a = e(481060),
        s = e(313201),
        r = e(434404),
        l = e(703656),
        c = e(112612),
        d = e(981631),
        u = e(176505),
        x = e(388032),
        f = e(286208);
      n.default = function (t) {
        let {
            guildId: n,
            submittedGuildJoinRequestsCount: e,
            onClose: m,
            transitionState: h,
            onConfirm: p,
          } = t,
          T = (0, s.Dt)(),
          {
            submitting: C,
            errorMessage: b,
            onSubmit: j,
          } = (0, c.Z)({ onSubmit: p, onClose: m }),
          S = o.useCallback(() => {
            m(),
              r.Z.close(),
              (0, l.uL)(d.Z5c.CHANNEL(n, u.oC.MEMBER_APPLICATIONS));
          }, [n, m]);
        return (0, i.jsxs)(a.ModalRoot, {
          className: f.container,
          transitionState: h,
          "aria-labelledby": T,
          children: [
            (0, i.jsxs)(a.ModalContent, {
              className: f.content,
              children: [
                (0, i.jsx)(a.Heading, {
                  variant: "heading-md/semibold",
                  id: T,
                  children: x.intl.format(x.t.chV4JS, { count: e }),
                }),
                (0, i.jsx)(a.Text, {
                  className: f.descriptionText,
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children: x.intl.string(x.t.uNQIt7),
                }),
                (0, i.jsx)(a.Clickable, {
                  className: f.actionText,
                  onClick: S,
                  children: (0, i.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "text-link",
                    children: x.intl.string(x.t.szESVF),
                  }),
                }),
                null != b &&
                  (0, i.jsx)(a.Text, {
                    className: f.__invalid_errorText,
                    variant: "text-xs/normal",
                    color: "text-danger",
                    children: b,
                  }),
              ],
            }),
            (0, i.jsxs)(a.ModalFooter, {
              children: [
                (0, i.jsx)(a.Button, {
                  className: f.actionButton,
                  color: a.Button.Colors.BRAND,
                  submitting: C,
                  onClick: j,
                  size: a.Button.Sizes.SMALL,
                  children: (0, i.jsx)(a.Text, {
                    variant: "text-sm/semibold",
                    children: x.intl.string(x.t.LW0aUF),
                  }),
                }),
                (0, i.jsx)(a.Button, {
                  color: a.Button.Colors.PRIMARY,
                  onClick: m,
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
    112612: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return a;
        },
      }),
        e(47120);
      var i = e(192379),
        o = e(881052);
      function a(t) {
        let { onSubmit: n, onClose: e } = t,
          [a, s] = i.useState(!1),
          [r, l] = i.useState(null),
          c = i.useCallback(async () => {
            if (!a) {
              s(!0), l(null);
              try {
                await n(), e();
              } catch (t) {
                l(new o.Hx(t).getAnyErrorMessage()), s(!1);
              }
            }
          }, [e, n, a]);
        return { submitting: a, errorMessage: r, onSubmit: c };
      }
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
//# sourceMappingURL=87a2f7d65b9e3b317db0.js.map
