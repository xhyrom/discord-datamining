"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["958"],
  {
    957656: function (e, r, t) {
      var n = t(200651);
      t(192379);
      var o = t(481060),
        s = t(198952),
        i = t(329242),
        l = t(388032),
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
          let { icon: r, currentUser: t, otherUser: l, header: a } = e;
          return (0, n.jsxs)("div", {
            className: c.header,
            children: [
              (0, n.jsx)(s.Z, { currentUser: t, otherUser: l, children: r }),
              (0, n.jsxs)("div", {
                className: c.heading,
                children: [
                  (0, n.jsx)(o.Heading, {
                    variant: "text-lg/bold",
                    children: a,
                  }),
                  (0, n.jsx)(i.Z, { user: l }),
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
                children: l.intl.string(l.t.cXgKMD),
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
    4526: function (e, r, t) {
      t.r(r), t(47120);
      var n = t(200651),
        o = t(192379),
        s = t(512722),
        i = t.n(s),
        l = t(481060),
        c = t(985002),
        a = t(880257),
        d = t(957656),
        u = t(388032),
        h = t(773958);
      r.default = (e) => {
        let {
            currentUser: r,
            otherUser: t,
            transitionState: s,
            onClose: x,
          } = e,
          [j, m] = o.useState(!1),
          f = o.useCallback(() => {
            m(!0);
          }, []),
          b = o.useCallback(() => {
            m(!1);
          }, []),
          g = o.useCallback(() => {
            x();
          }, [x]),
          C = (0, a.Z)(),
          { declineLinkRequest: k, isDeclineLoading: p } = (0, c.G)({
            onError: f,
            onSuccess: g,
          });
        return (
          i()(
            !C,
            "FamilyCenterDeclineLinkModal should only be rendered for teens.",
          ),
          (0, n.jsx)(d.Z, {
            transitionState: s,
            children: (0, n.jsxs)("form", {
              onSubmit: (e) => {
                e.preventDefault(), k(t);
              },
              children: [
                (0, n.jsx)(d.Z.Error, {
                  error: j ? u.intl.string(u.t.tJAUys) : void 0,
                  onDismiss: b,
                }),
                (0, n.jsxs)(l.ModalContent, {
                  children: [
                    (0, n.jsx)(d.Z.Header, {
                      currentUser: r,
                      otherUser: t,
                      header: u.intl.string(u.t.teIRCQ),
                      icon: (0, n.jsx)(l.XSmallIcon, {
                        size: "md",
                        color: "currentColor",
                        className: h.closeIcon,
                      }),
                    }),
                    (0, n.jsx)(d.Z.Content, {
                      children: (0, n.jsx)(d.Z.Notice, {
                        notice: u.intl.string(u.t.LcM8BQ),
                      }),
                    }),
                  ],
                }),
                (0, n.jsx)(l.ModalFooter, {
                  children: (0, n.jsxs)(d.Z.ButtonFooter, {
                    children: [
                      (0, n.jsx)(l.Button, {
                        type: "button",
                        disabled: p,
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.PRIMARY,
                        onClick: x,
                        size: l.Button.Sizes.SMALL,
                        children: u.intl.string(u.t["ETE/oK"]),
                      }),
                      (0, n.jsx)(l.Button, {
                        type: "submit",
                        disabled: p,
                        submitting: p,
                        color: l.ButtonColors.RED,
                        size: l.Button.Sizes.SMALL,
                        children: u.intl.string(u.t.dKxFcn),
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
    773958: function (e, r, t) {
      e.exports = { closeIcon: "closeIcon_fefdcf" };
    },
  },
]);
//# sourceMappingURL=88521b092c1a17dfd3fa.js.map
