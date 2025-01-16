"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69015"],
  {
    247265: function (e, r, t) {
      t.r(r), t(47120);
      var n = t(200651),
        o = t(192379),
        s = t(512722),
        l = t.n(s),
        i = t(481060),
        c = t(985002),
        a = t(880257),
        d = t(957656),
        u = t(388032),
        h = t(143510);
      r.default = (e) => {
        let {
            currentUser: r,
            otherUser: t,
            transitionState: s,
            onClose: x,
          } = e,
          [m, j] = o.useState(!1),
          f = o.useCallback(() => {
            j(!0);
          }, []),
          b = o.useCallback(() => {
            j(!1);
          }, []),
          g = o.useCallback(() => {
            x();
          }, [x]),
          p = (0, a.Z)(),
          { cancelLinkRequest: v, isCancelLoading: C } = (0, c.G)({
            onError: f,
            onSuccess: g,
          });
        return (
          l()(
            p,
            "FamilyCenterDeclineLinkModal should only be rendered for parents.",
          ),
          (0, n.jsx)(d.Z, {
            transitionState: s,
            children: (0, n.jsxs)("form", {
              onSubmit: (e) => {
                e.preventDefault(), v(t);
              },
              children: [
                (0, n.jsx)(d.Z.Error, {
                  error: m ? u.intl.string(u.t["6gyAQU"]) : void 0,
                  onDismiss: b,
                }),
                (0, n.jsx)(i.ModalContent, {
                  children: (0, n.jsx)(d.Z.Header, {
                    currentUser: r,
                    otherUser: t,
                    header: u.intl.string(u.t.HynllZ),
                    icon: (0, n.jsx)(i.XSmallIcon, {
                      size: "md",
                      color: "currentColor",
                      className: h.closeIcon,
                    }),
                  }),
                }),
                (0, n.jsx)(i.ModalFooter, {
                  children: (0, n.jsxs)(d.Z.ButtonFooter, {
                    children: [
                      (0, n.jsx)(i.Button, {
                        type: "button",
                        disabled: C,
                        look: i.Button.Looks.LINK,
                        color: i.Button.Colors.PRIMARY,
                        onClick: x,
                        size: i.Button.Sizes.SMALL,
                        children: u.intl.string(u.t.czincX),
                      }),
                      (0, n.jsx)(i.Button, {
                        type: "submit",
                        disabled: C || m,
                        submitting: C,
                        color: i.ButtonColors.RED,
                        size: i.Button.Sizes.SMALL,
                        children: u.intl.string(u.t.mK40bm),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      };
    },
    957656: function (e, r, t) {
      var n = t(200651);
      t(192379);
      var o = t(481060),
        s = t(198952),
        l = t(329242),
        i = t(388032),
        c = t(217682);
      let a = (e) => {
        let { children: r, className: t, ...s } = e;
        return (0, n.jsx)(o.ModalRoot, { className: t, ...s, children: r });
      };
      (a.ButtonFooter = (e) => {
        let { children: r } = e;
        return (0, n.jsx)("div", { className: c.footer, children: r });
      }),
        (a.Header = (e) => {
          let { icon: r, currentUser: t, otherUser: i, header: a } = e;
          return (0, n.jsxs)("div", {
            className: c.header,
            children: [
              (0, n.jsx)(s.Z, { currentUser: t, otherUser: i, children: r }),
              (0, n.jsxs)("div", {
                className: c.heading,
                children: [
                  (0, n.jsx)(o.Heading, {
                    variant: "text-lg/bold",
                    children: a,
                  }),
                  (0, n.jsx)(l.Z, { user: i }),
                ],
              }),
            ],
          });
        }),
        (a.Content = (e) => {
          let { children: r } = e;
          return (0, n.jsx)("div", { className: c.content, children: r });
        }),
        (a.Notice = (e) => {
          let { notice: r } = e;
          return (0, n.jsxs)("div", {
            className: c.notice,
            children: [
              (0, n.jsx)(o.Text, {
                variant: "eyebrow",
                color: "header-primary",
                children: i.intl.string(i.t.cXgKMD),
              }),
              (0, n.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children: r,
              }),
            ],
          });
        }),
        (a.Error = (e) => {
          let { error: r, onDismiss: t } = e;
          return null == r
            ? null
            : (0, n.jsx)(o.FormErrorBlock, {
                className: c.error,
                onDismiss: t,
                children: r,
              });
        }),
        (r.Z = a);
    },
    143510: function (e, r, t) {
      e.exports = { closeIcon: "closeIcon_ef46d5" };
    },
    217682: function (e, r, t) {
      e.exports = {
        header: "header_c484f3",
        heading: "heading_c484f3",
        footer: "footer_c484f3",
        notice: "notice_c484f3",
        error: "error_c484f3",
        content: "content_c484f3",
      };
    },
  },
]);
//# sourceMappingURL=0a02e38fc31b3e30d756.js.map
