"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["24642"],
  {
    279837: function (e, s, t) {
      t.r(s), t(47120), t(773603);
      var r,
        n = t(735250),
        a = t(470079),
        o = t(481060),
        i = t(689938),
        l = t(600899);
      function d(e, s, t) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = t),
          e
        );
      }
      class h extends (r = a.PureComponent) {
        render() {
          let {
              title: e,
              actionText: s,
              children: t,
              transitionState: r,
            } = this.props,
            { error: d, isLoading: h, value: c } = this.state,
            u =
              a.Children.count(t) > 0
                ? (0, n.jsx)(o.Card, {
                    type: o.Card.Types.WARNING,
                    className: l.card,
                    children: (0, n.jsx)(o.Text, {
                      className: l.warning,
                      variant: "text-md/normal",
                      children: t,
                    }),
                  })
                : null;
          return (0, n.jsx)(o.ModalRoot, {
            transitionState: r,
            children: (0, n.jsxs)("form", {
              onSubmit: this.handleSubmit,
              children: [
                (0, n.jsx)(o.ModalHeader, {
                  separator: !1,
                  children: (0, n.jsx)(o.Heading, {
                    variant: "heading-lg/semibold",
                    children: e,
                  }),
                }),
                (0, n.jsxs)(o.ModalContent, {
                  children: [
                    u,
                    (0, n.jsxs)(o.FormItem, {
                      title: i.Z.Messages.FORM_LABEL_PASSWORD,
                      className: l.spacing,
                      children: [
                        (0, n.jsx)(o.TextInput, {
                          type: "password",
                          autoComplete: "off",
                          autoFocus: !0,
                          value: c,
                          onChange: this.handlePasswordChange,
                        }),
                        null != d && "" !== d
                          ? (0, n.jsxs)(o.Text, {
                              variant: "text-xs/normal",
                              color: "text-danger",
                              className: l.error,
                              children: [" ", d, " "],
                            })
                          : null,
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)(o.ModalFooter, {
                  children: [
                    (0, n.jsx)(o.Button, {
                      type: "submit",
                      disabled: h || 0 === c.length,
                      children: null != s ? s : i.Z.Messages.CONFIRM,
                    }),
                    (0, n.jsx)(o.Button, {
                      onClick: this.handleCancel,
                      look: o.Button.Looks.LINK,
                      color: o.Button.Colors.PRIMARY,
                      children: i.Z.Messages.CANCEL,
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            d(this, "state", { value: "", error: null, isLoading: !1 }),
            d(this, "handleSubmit", (e) => {
              e.preventDefault();
              let { value: s } = this.state,
                { handleSubmit: t, onClose: r, onError: n } = this.props;
              this.setState({ isLoading: !0 }),
                t(s)
                  .then(
                    (e) => r(null != e ? e : void 0),
                    (e) => {
                      if (null == e.body) return;
                      if (
                        (null == n || n(e.body),
                        !this.shouldSkipErrorMsgRender(e.body))
                      )
                        e.body.password
                          ? this.setState({
                              error: e.body.password,
                              isLoading: !1,
                            })
                          : e.body.message &&
                            this.setState({
                              error: e.body.message,
                              isLoading: !1,
                            });
                    },
                  )
                  .finally(() => this.setState({ isLoading: !1 }));
            }),
            d(this, "shouldSkipErrorMsgRender", (e) => {
              let { skipErrorMsgAbortCode: s } = this.props;
              return null != s && (null == e ? void 0 : e.code) === s;
            }),
            d(this, "handleCancel", () => {
              let { onClose: e } = this.props;
              e();
            }),
            d(this, "handlePasswordChange", (e) => {
              let { onPasswordChange: s } = this.props;
              null == s || s(e), this.setState({ value: e });
            });
        }
      }
      d(h, "key", () => "password-confirm-modal"), (s.default = h);
    },
    600899: function (e, s, t) {
      e.exports = {
        spacing: "spacing_a2ce87",
        card: "card_a2ce87",
        error: "error_a2ce87",
        warning: "warning_a2ce87",
      };
    },
  },
]);
//# sourceMappingURL=773c53c2530485c6660e.js.map
