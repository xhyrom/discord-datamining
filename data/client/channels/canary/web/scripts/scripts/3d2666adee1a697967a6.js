"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["50872"],
  {
    957656: function (e, t, r) {
      var n = r(200651);
      r(192379);
      var o = r(481060),
        s = r(198952),
        i = r(329242),
        c = r(388032),
        l = r(309591);
      let a = (e) => {
        let { children: t, className: r, ...s } = e;
        return (0, n.jsx)(o.ModalRoot, { className: r, ...s, children: t });
      };
      (a.ButtonFooter = (e) => {
        let { children: t } = e;
        return (0, n.jsx)("div", { className: l.footer, children: t });
      }),
        (a.Header = (e) => {
          let { icon: t, currentUser: r, otherUser: c, header: a } = e;
          return (0, n.jsxs)("div", {
            className: l.header,
            children: [
              (0, n.jsx)(s.Z, { currentUser: r, otherUser: c, children: t }),
              (0, n.jsxs)("div", {
                className: l.heading,
                children: [
                  (0, n.jsx)(o.Heading, {
                    variant: "text-lg/bold",
                    children: a,
                  }),
                  (0, n.jsx)(i.Z, { user: c }),
                ],
              }),
            ],
          });
        }),
        (a.Content = (e) => {
          let { children: t } = e;
          return (0, n.jsx)("div", { className: l.content, children: t });
        }),
        (a.Notice = (e) => {
          let { notice: t } = e;
          return (0, n.jsxs)("div", {
            className: l.notice,
            children: [
              (0, n.jsx)(o.Text, {
                variant: "eyebrow",
                color: "header-primary",
                children: c.intl.string(c.t.cXgKMD),
              }),
              (0, n.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children: t,
              }),
            ],
          });
        }),
        (a.Error = (e) => {
          let { error: t, onDismiss: r } = e;
          return null == t
            ? null
            : (0, n.jsx)(o.FormErrorBlock, {
                className: l.error,
                onDismiss: r,
                children: t,
              });
        }),
        (t.Z = a);
    },
    442673: function (e, t, r) {
      r.r(t), r(47120);
      var n = r(200651),
        o = r(192379),
        s = r(481060),
        i = r(985002),
        c = r(880257),
        l = r(957656),
        a = r(388032),
        d = r(695405);
      t.default = (e) => {
        let {
            currentUser: t,
            otherUser: r,
            transitionState: u,
            onClose: h,
          } = e,
          x = o.useCallback(() => {
            h();
          }, [h]),
          j = (0, c.Z)(),
          [m, g] = o.useState(!1),
          [f, b] = o.useState(!1),
          k = o.useCallback(() => {
            b(!0), g(!1);
          }, []),
          { disconnectLinkRequest: C, isDisconnectLoading: v } = (0, i.G)({
            onSuccess: x,
            onError: k,
          });
        return (0, n.jsx)(l.Z, {
          transitionState: u,
          children: (0, n.jsxs)("form", {
            onSubmit: (e) => {
              e.preventDefault(), C(r);
            },
            children: [
              (0, n.jsx)(l.Z.Error, {
                error: f ? a.intl.string(a.t.krIDd3) : void 0,
              }),
              (0, n.jsxs)(s.ModalContent, {
                children: [
                  (0, n.jsx)(l.Z.Header, {
                    currentUser: t,
                    otherUser: r,
                    header: a.intl.formatToPlainString(a.t.NMSTb2, {
                      isAdult: String(j),
                    }),
                    icon: (0, n.jsx)(s.XSmallIcon, {
                      size: "md",
                      color: "currentColor",
                      className: d.closeIcon,
                    }),
                  }),
                  (0, n.jsx)(l.Z.Notice, {
                    notice: j
                      ? a.intl.string(a.t.EvMGLS)
                      : a.intl.string(a.t.f1SUeX),
                  }),
                  (0, n.jsx)(s.Checkbox, {
                    className: d.acknowledgementCheckbox,
                    type: s.Checkbox.Types.INVERTED,
                    value: m,
                    onChange: (e, t) => {
                      g(t), b(!1);
                    },
                    children: (0, n.jsx)(s.Text, {
                      variant: "text-xs/semibold",
                      children: j
                        ? a.intl.string(a.t["/MYCeX"])
                        : a.intl.string(a.t.VJaHUV),
                    }),
                  }),
                ],
              }),
              (0, n.jsx)(s.ModalFooter, {
                children: (0, n.jsxs)(l.Z.ButtonFooter, {
                  children: [
                    (0, n.jsx)(s.Button, {
                      type: "button",
                      look: s.Button.Looks.LINK,
                      color: s.Button.Colors.PRIMARY,
                      onClick: h,
                      size: s.Button.Sizes.SMALL,
                      disabled: v,
                      children: a.intl.string(a.t["ETE/oK"]),
                    }),
                    (0, n.jsx)(s.Button, {
                      type: "submit",
                      disabled: !m || v,
                      submitting: v,
                      color: s.ButtonColors.RED,
                      size: s.Button.Sizes.SMALL,
                      children: a.intl.string(a.t["c5L+sr"]),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      };
    },
    309591: function (e, t, r) {
      e.exports = {
        header: "header_c484f3",
        heading: "heading_c484f3",
        footer: "footer_c484f3",
        notice: "notice_c484f3",
        error: "error_c484f3",
        content: "content_c484f3",
      };
    },
    695405: function (e, t, r) {
      e.exports = {
        acknowledgementCheckbox: "acknowledgementCheckbox_a8af02",
        closeIcon: "closeIcon_a8af02",
      };
    },
  },
]);
//# sourceMappingURL=3d2666adee1a697967a6.js.map
