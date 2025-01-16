"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["59716"],
  {
    275370: function (e, r, t) {
      t.r(r), t(47120);
      var n = t(200651),
        o = t(192379),
        s = t(512722),
        i = t.n(s),
        l = t(481060),
        c = t(51144),
        a = t(985002),
        d = t(880257),
        u = t(957656),
        h = t(130310),
        x = t(388032),
        m = t(767804);
      r.default = (e) => {
        let {
            currentUser: r,
            otherUser: t,
            transitionState: s,
            onClose: j,
          } = e,
          f = o.useCallback(() => {
            j();
          }, [j]),
          g = (0, d.Z)(),
          [p, N] = o.useState(!1),
          k = o.useCallback(() => {
            N(!0);
          }, []),
          { acceptLinkRequest: b, isAcceptLoading: v } = (0, a.G)({
            onError: k,
            onSuccess: f,
          });
        return (
          i()(
            !g,
            "FamilyCenterAcceptLinkModal should only be rendered for teens.",
          ),
          (0, n.jsxs)(u.Z, {
            transitionState: s,
            "aria-label": x.intl.string(x.t.rlNJwc),
            className: m.root,
            children: [
              (0, n.jsx)(u.Z.Error, {
                error: p ? x.intl.string(x.t.pegSMz) : void 0,
              }),
              (0, n.jsxs)(l.ModalContent, {
                children: [
                  (0, n.jsx)(u.Z.Header, {
                    currentUser: r,
                    otherUser: t,
                    header: x.intl.string(x.t.rlNJwc),
                    icon: (0, n.jsx)(l.LinkIcon, {
                      size: "md",
                      color: "currentColor",
                      className: m.linkIcon,
                    }),
                  }),
                  (0, n.jsxs)(u.Z.Content, {
                    children: [
                      (0, n.jsx)(h.Z, { inModal: !0 }),
                      (0, n.jsx)(l.Text, {
                        className: m.disclaimer,
                        variant: "text-xs/normal",
                        color: "text-normal",
                        children: x.intl.format(x.t.snlFqa, {
                          username: c.ZP.getName(t),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, n.jsx)(l.ModalFooter, {
                children: (0, n.jsx)("form", {
                  onSubmit: (e) => {
                    e.preventDefault(), b(t);
                  },
                  children: (0, n.jsxs)(u.Z.ButtonFooter, {
                    children: [
                      (0, n.jsx)(l.Button, {
                        type: "button",
                        disabled: v,
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.PRIMARY,
                        onClick: j,
                        size: l.Button.Sizes.SMALL,
                        children: x.intl.string(x.t["ETE/oK"]),
                      }),
                      (0, n.jsx)(l.Button, {
                        type: "submit",
                        disabled: v,
                        submitting: v,
                        color: l.ButtonColors.BRAND,
                        size: l.Button.Sizes.SMALL,
                        children: x.intl.string(x.t["wI/jo6"]),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      };
    },
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
    767804: function (e, r, t) {
      e.exports = {
        root: "root_c05d48",
        disclaimer: "disclaimer_c05d48",
        linkIcon: "linkIcon_c05d48",
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
  },
]);
//# sourceMappingURL=ca2ec783098141033938.js.map
