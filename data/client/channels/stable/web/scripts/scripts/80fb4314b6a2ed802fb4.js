"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["67753"],
  {
    568533: function (t) {
      t.exports = "/assets/4a664543323abbc99c71.svg";
    },
    873809: function (t, e, n) {
      n.r(e), n(47120);
      var s = n(200651),
        o = n(192379),
        i = n(481060),
        r = n(388032),
        l = n(341088);
      function a(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      class c extends o.PureComponent {
        render() {
          let {
            transitionState: t,
            header: e,
            body: o,
            confirmText: a,
          } = this.props;
          return (0, s.jsxs)(i.ModalRoot, {
            transitionState: t,
            "aria-label": e,
            children: [
              (0, s.jsxs)(i.ModalContent, {
                className: l.content,
                children: [
                  (0, s.jsx)("img", { src: n(568533), alt: e }),
                  (0, s.jsx)(i.Heading, {
                    variant: "heading-xl/semibold",
                    className: l.header,
                    children: e,
                  }),
                  (0, s.jsx)(i.Text, {
                    variant: "text-md/normal",
                    children: o,
                  }),
                ],
              }),
              (0, s.jsxs)(i.ModalFooter, {
                className: l.footer,
                children: [
                  (0, s.jsx)(i.Button, {
                    size: i.Button.Sizes.SMALL,
                    onClick: this.handleConfirm,
                    children: a,
                  }),
                  (0, s.jsx)(i.Button, {
                    size: i.Button.Sizes.SMALL,
                    look: i.Button.Looks.LINK,
                    color: i.Button.Colors.PRIMARY,
                    onClick: this.handleDismiss,
                    children: r.intl.string(r.t.cpT0Cg),
                  }),
                ],
              }),
            ],
          });
        }
        constructor(...t) {
          super(...t),
            a(this, "handleConfirm", () => {
              let { onConfirm: t, onClose: e } = this.props;
              null == e || e(), null == t || t();
            }),
            a(this, "handleDismiss", () => {
              let { onDismiss: t, onClose: e } = this.props;
              null == e || e(), null == t || t();
            });
        }
      }
      e.default = c;
    },
    341088: function (t, e, n) {
      t.exports = {
        content: "content_b610b6",
        header: "header_b610b6",
        footer: "footer_b610b6",
      };
    },
  },
]);
//# sourceMappingURL=80fb4314b6a2ed802fb4.js.map
