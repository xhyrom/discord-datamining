"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["24642"],
  {
    279837: function (e, t, s) {
      s.r(t), s(47120), s(773603);
      var n,
        r = s(200651),
        a = s(192379),
        i = s(481060),
        o = s(388032),
        l = s(943873);
      function d(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      class h extends (n = a.PureComponent) {
        render() {
          let {
              title: e,
              actionText: t,
              children: s,
              transitionState: n,
            } = this.props,
            { error: d, isLoading: h, value: c } = this.state,
            u =
              a.Children.count(s) > 0
                ? (0, r.jsx)(i.Card, {
                    type: i.Card.Types.WARNING,
                    className: l.card,
                    children: (0, r.jsx)(i.Text, {
                      className: l.warning,
                      variant: "text-md/normal",
                      children: s,
                    }),
                  })
                : null;
          return (0, r.jsx)(i.ModalRoot, {
            transitionState: n,
            children: (0, r.jsxs)("form", {
              onSubmit: this.handleSubmit,
              children: [
                (0, r.jsx)(i.ModalHeader, {
                  separator: !1,
                  children: (0, r.jsx)(i.Heading, {
                    variant: "heading-lg/semibold",
                    children: e,
                  }),
                }),
                (0, r.jsxs)(i.ModalContent, {
                  children: [
                    u,
                    (0, r.jsxs)(i.FormItem, {
                      title: o.intl.string(o.t["CIGa+/"]),
                      className: l.spacing,
                      children: [
                        (0, r.jsx)(i.TextInput, {
                          type: "password",
                          autoComplete: "off",
                          autoFocus: !0,
                          value: c,
                          onChange: this.handlePasswordChange,
                        }),
                        null != d && "" !== d
                          ? (0, r.jsxs)(i.Text, {
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
                (0, r.jsxs)(i.ModalFooter, {
                  children: [
                    (0, r.jsx)(i.Button, {
                      type: "submit",
                      disabled: h || 0 === c.length,
                      children: null != t ? t : o.intl.string(o.t["cY+Ooa"]),
                    }),
                    (0, r.jsx)(i.Button, {
                      onClick: this.handleCancel,
                      look: i.Button.Looks.LINK,
                      color: i.Button.Colors.PRIMARY,
                      children: o.intl.string(o.t["ETE/oK"]),
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
              let { value: t } = this.state,
                { handleSubmit: s, onClose: n, onError: r } = this.props;
              this.setState({ isLoading: !0 }),
                s(t)
                  .then(
                    (e) => n(null != e ? e : void 0),
                    (e) => {
                      if (null == e.body) return;
                      if (
                        (null == r || r(e.body),
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
              let { skipErrorMsgAbortCode: t } = this.props;
              return null != t && (null == e ? void 0 : e.code) === t;
            }),
            d(this, "handleCancel", () => {
              let { onClose: e } = this.props;
              e();
            }),
            d(this, "handlePasswordChange", (e) => {
              let { onPasswordChange: t } = this.props;
              null == t || t(e), this.setState({ value: e });
            });
        }
      }
      d(h, "key", () => "password-confirm-modal"), (t.default = h);
    },
    943873: function (e, t, s) {
      e.exports = {
        spacing: "spacing_a2ce87",
        card: "card_a2ce87",
        error: "error_a2ce87",
        warning: "warning_a2ce87",
      };
    },
  },
]);
//# sourceMappingURL=ef9b79ca5d5bcdab84a6.js.map
