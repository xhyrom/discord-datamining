"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["44153"],
  {
    760949: function (t, e, a) {
      a.r(e),
        a.d(e, {
          default: function () {
            return x;
          },
        }),
        a(47120);
      var n = a(735250),
        s = a(470079),
        o = a(120356),
        r = a.n(o),
        i = a(481060),
        l = a(37234),
        d = a(479531),
        c = a(703656),
        u = a(695346),
        E = a(981631),
        _ = a(689938),
        h = a(199312),
        T = a(113207);
      function x(t) {
        let { transitionState: e, onClose: a } = t,
          [o, x] = s.useState(!1),
          [A, g] = s.useState(null),
          m = async () => {
            g(null), x(!0);
            try {
              await u.Ex.updateSetting(!1),
                (0, c.uL)(E.Z5c.FRIENDS),
                (0, l.xf)(),
                a();
            } catch (t) {
              g(new d.Z(t).getAnyErrorMessage());
            } finally {
              x(!1);
            }
          },
          b = () => {
            (0, c.uL)(E.Z5c.SETTINGS("family-center")), a();
          };
        return (0, n.jsxs)(i.ModalRoot, {
          className: h.root,
          transitionState: e,
          children: [
            (0, n.jsxs)(i.ModalHeader, {
              separator: !1,
              className: h.header,
              children: [
                (0, n.jsx)(i.Heading, {
                  variant: "heading-lg/semibold",
                  className: h.title,
                  children:
                    _.Z.Messages
                      .FAMILY_CENTER_DISABLE_FEATURE_MODAL_HEADER_TEXT,
                }),
                (0, n.jsx)(i.Text, {
                  variant: "text-sm/normal",
                  className: h.subtitle,
                  children:
                    _.Z.Messages.FAMILY_CENTER_DISABLE_FEATURE_MODAL_SUBTITLE_TEXT.format(
                      {
                        openSettingsHook: (t, e) =>
                          (0, n.jsx)(i.Anchor, { onClick: b, children: t }, e),
                      },
                    ),
                }),
              ],
            }),
            (0, n.jsxs)(i.ModalContent, {
              children: [
                (0, n.jsxs)("div", {
                  className: r()(h.buttonContainer, T.marginTop20),
                  children: [
                    (0, n.jsx)(i.Button, {
                      type: "submit",
                      className: T.marginBottom8,
                      grow: !0,
                      color: i.Button.Colors.RED,
                      onClick: m,
                      submitting: o,
                      children:
                        _.Z.Messages
                          .FAMILY_CENTER_DISABLE_FEATURE_MODAL_DISABLE_BUTTON_TEXT,
                    }),
                    (0, n.jsx)(i.Button, {
                      grow: !0,
                      color: i.Button.Colors.PRIMARY,
                      onClick: a,
                      children: _.Z.Messages.CANCEL,
                    }),
                  ],
                }),
                (0, n.jsx)(i.Text, {
                  variant: "text-xs/normal",
                  color: "text-danger",
                  children: A,
                }),
              ],
            }),
          ],
        });
      }
    },
    199312: function (t, e, a) {
      t.exports = {
        root: "root_fabd5d",
        header: "header_fabd5d",
        title: "title_fabd5d",
        subtitle: "subtitle_fabd5d",
        buttonContainer: "buttonContainer_fabd5d",
      };
    },
  },
]);
//# sourceMappingURL=15cec651033a4d61c749.js.map
