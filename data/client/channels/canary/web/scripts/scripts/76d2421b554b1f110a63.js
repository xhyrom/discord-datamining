"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["64941"],
  {
    472305: function (e, s, o) {
      o.d(s, {
        F9: function () {
          return l;
        },
        Qv: function () {
          return n;
        },
        pL: function () {
          return t;
        },
      });
      let t = "example.com",
        n = (e) => "_discord.".concat(e),
        l = (e) => "https://".concat(e, "/.well-known/discord");
    },
    907053: function (e, s, o) {
      o.r(s),
        o.d(s, {
          default: function () {
            return x;
          },
        }),
        o(47120),
        o(773603);
      var t,
        n,
        l = o(735250),
        a = o(470079),
        i = o(544891),
        r = o(481060),
        c = o(600164),
        d = o(572004),
        I = o(472305),
        N = o(981631),
        u = o(689938),
        _ = o(465804);
      function O(e) {
        let { name: s, value: o } = e,
          [t, n] = a.useState(r.CopyInputModes.DEFAULT);
        return (0, l.jsxs)("div", {
          className: _.infoRow,
          children: [
            (0, l.jsx)(r.FormTitle, { children: s }),
            (0, l.jsx)(r.CopyInput, {
              value: o,
              mode: t,
              supportsCopy: d.wS,
              onCopy: () => {
                (0, d.JG)(o), n(r.CopyInputModes.SUCCESS);
              },
            }),
          ],
        });
      }
      function x(e) {
        let { onClose: s, transitionState: o } = e,
          [t, n] = a.useState(""),
          [d, x] = a.useState(""),
          [C, M] = a.useState(null),
          [h, R] = a.useState(!1),
          [m, T] = a.useState("DOMAIN"),
          A = () => {
            R(!0),
              M(null),
              i.tn
                .post({ url: N.ANM.CONNECTION(N.ABu.DOMAIN, t), body: {} })
                .then(() => {
                  s();
                })
                .catch((e) => {
                  var s, o, t, n, l, a, i;
                  (null === (s = e.body) || void 0 === s ? void 0 : s.proof) &&
                  "DOMAIN" === m
                    ? (x(e.body.proof), T("PROOF_DNS"))
                    : M(
                        (null === (a = e.body) || void 0 === a
                          ? void 0
                          : null === (l = a.errors) || void 0 === l
                            ? void 0
                            : null === (n = l.domain) || void 0 === n
                              ? void 0
                              : null === (t = n._errors) || void 0 === t
                                ? void 0
                                : null === (o = t[0]) || void 0 === o
                                  ? void 0
                                  : o.message) ||
                          (null === (i = e.body) || void 0 === i
                            ? void 0
                            : i.message) ||
                          e.message,
                      );
                })
                .finally(() => {
                  R(!1);
                });
          };
        return (0, l.jsxs)(r.ModalRoot, {
          transitionState: o,
          className: _.__invalid_modal,
          children: [
            (0, l.jsxs)(r.ModalHeader, {
              direction: c.Z.Direction.VERTICAL,
              className: _.header,
              separator: !1,
              children: [
                (0, l.jsx)(r.Heading, {
                  variant: "heading-xl/semibold",
                  children: u.Z.Messages.DOMAIN_VERIFICATION_HEADER,
                }),
                (0, l.jsx)(r.ModalCloseButton, {
                  className: _.closeButton,
                  onClick: s,
                }),
              ],
            }),
            (0, l.jsxs)(r.Slides, {
              activeSlide: m,
              width: 440,
              children: [
                (0, l.jsx)(r.Slide, {
                  id: "DOMAIN",
                  children: (0, l.jsxs)("form", {
                    onSubmit: (e) => {
                      e.preventDefault(), A();
                    },
                    children: [
                      (0, l.jsxs)(r.ModalContent, {
                        className: _.content,
                        children: [
                          (0, l.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            className: _.description,
                            children:
                              u.Z.Messages.DOMAIN_VERIFICATION_DESCRIPTION,
                          }),
                          (0, l.jsx)(r.FormItem, {
                            title: u.Z.Messages.DOMAIN_VERIFICATION_LABEL,
                            error: C,
                            children: (0, l.jsx)(r.TextInput, {
                              onChange: n,
                              placeholder: I.pL,
                              maxLength: 253,
                              value: t,
                              disabled: h,
                              autoFocus: !0,
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsxs)(r.ModalFooter, {
                        className: _.footer,
                        children: [
                          (0, l.jsx)(r.Button, {
                            type: "submit",
                            submitting: h,
                            disabled: "" === t,
                            children: u.Z.Messages.NEXT,
                          }),
                          (0, l.jsx)(r.Button, {
                            look: r.Button.Looks.LINK,
                            color: r.Button.Colors.PRIMARY,
                            onClick: s,
                            children: u.Z.Messages.CANCEL,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, l.jsxs)(r.Slide, {
                  id: "PROOF_DNS",
                  children: [
                    (0, l.jsxs)(r.ModalContent, {
                      className: _.content,
                      children: [
                        (0, l.jsxs)("ol", {
                          className: _.list,
                          children: [
                            (0, l.jsx)("li", {
                              children: (0, l.jsx)(r.Text, {
                                tag: "span",
                                variant: "text-md/normal",
                                children:
                                  u.Z.Messages
                                    .DOMAIN_VERIFICATION_INSTRUCTIONS_DNS_1,
                              }),
                            }),
                            (0, l.jsxs)("li", {
                              children: [
                                (0, l.jsx)(r.Text, {
                                  tag: "span",
                                  variant: "text-md/normal",
                                  children:
                                    u.Z.Messages
                                      .DOMAIN_VERIFICATION_INSTRUCTIONS_DNS_2,
                                }),
                                (0, l.jsxs)("div", {
                                  className: _.dnsRecordContainer,
                                  children: [
                                    (0, l.jsx)(O, {
                                      name: u.Z.Messages
                                        .DOMAIN_VERIFICATION_RECORD_NAME,
                                      value: (0, I.Qv)(t),
                                    }),
                                    (0, l.jsx)(O, {
                                      name: u.Z.Messages
                                        .DOMAIN_VERIFICATION_RECORD_TYPE,
                                      value: "TXT",
                                    }),
                                    (0, l.jsx)(O, {
                                      name: u.Z.Messages
                                        .DOMAIN_VERIFICATION_RECORD_CONTENT,
                                      value: d,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, l.jsx)(r.HelpMessage, {
                          messageType: r.HelpMessageTypes.INFO,
                          className: _.text,
                          children:
                            u.Z.Messages.DOMAIN_VERIFICATION_DNS_WARNING,
                        }),
                        null != C &&
                          (0, l.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "text-danger",
                            className: _.text,
                            children: C,
                          }),
                      ],
                    }),
                    (0, l.jsxs)(r.ModalFooter, {
                      className: _.footer,
                      direction: c.Z.Direction.HORIZONTAL,
                      children: [
                        (0, l.jsx)(r.Button, {
                          look: r.Button.Looks.LINK,
                          color: r.Button.Colors.PRIMARY,
                          onClick: () => {
                            T("DOMAIN"), M(null);
                          },
                          children: u.Z.Messages.BACK,
                        }),
                        (0, l.jsxs)("div", {
                          className: _.footerInner,
                          children: [
                            (0, l.jsx)(r.Button, {
                              look: r.Button.Looks.LINK,
                              color: r.Button.Colors.PRIMARY,
                              onClick: () => {
                                T("PROOF_HTTP"), M(null);
                              },
                              className: _.__invalid_switchButton,
                              children:
                                u.Z.Messages.DOMAIN_VERIFICATION_USE_HTTP,
                            }),
                            (0, l.jsx)(r.Button, {
                              submitting: h,
                              onClick: A,
                              children: u.Z.Messages.VERIFY,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsxs)(r.Slide, {
                  id: "PROOF_HTTP",
                  children: [
                    (0, l.jsxs)(r.ModalContent, {
                      className: _.content,
                      children: [
                        (0, l.jsx)(r.Text, {
                          tag: "span",
                          variant: "text-md/normal",
                          children:
                            u.Z.Messages.DOMAIN_VERIFICATION_INSTRUCTIONS_HTTP,
                        }),
                        (0, l.jsxs)("div", {
                          className: _.httpFileContainer,
                          children: [
                            (0, l.jsx)(O, {
                              name: u.Z.Messages
                                .DOMAIN_VERIFICATION_RECORD_NAME,
                              value: (0, I.F9)(t),
                            }),
                            (0, l.jsx)(O, {
                              name: u.Z.Messages
                                .DOMAIN_VERIFICATION_RECORD_CONTENT,
                              value: d,
                            }),
                          ],
                        }),
                        null != C &&
                          (0, l.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "text-danger",
                            className: _.text,
                            children: C,
                          }),
                      ],
                    }),
                    (0, l.jsxs)(r.ModalFooter, {
                      className: _.footer,
                      direction: c.Z.Direction.HORIZONTAL,
                      children: [
                        (0, l.jsx)(r.Button, {
                          look: r.Button.Looks.LINK,
                          color: r.Button.Colors.PRIMARY,
                          onClick: () => {
                            T("DOMAIN"), M(null);
                          },
                          children: u.Z.Messages.BACK,
                        }),
                        (0, l.jsxs)("div", {
                          className: _.footerInner,
                          children: [
                            (0, l.jsx)(r.Button, {
                              look: r.Button.Looks.LINK,
                              color: r.Button.Colors.PRIMARY,
                              onClick: () => {
                                T("PROOF_DNS"), M(null);
                              },
                              className: _.__invalid_switchButton,
                              children:
                                u.Z.Messages.DOMAIN_VERIFICATION_USE_DNS,
                            }),
                            (0, l.jsx)(r.Button, {
                              submitting: h,
                              onClick: A,
                              children: u.Z.Messages.VERIFY,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      ((n = t || (t = {})).DOMAIN = "DOMAIN"),
        (n.PROOF_DNS = "PROOF_DNS"),
        (n.PROOF_HTTP = "PROOF_HTTP");
    },
    465804: function (e, s, o) {
      e.exports = {
        header: "header_c862ac",
        closeButton: "closeButton_c862ac",
        description: "description_c862ac",
        content: "content_c862ac",
        infoRow: "infoRow_c862ac",
        dnsRecordContainer: "dnsRecordContainer_c862ac",
        httpFileContainer: "httpFileContainer_c862ac",
        text: "text_c862ac",
        list: "list_c862ac",
        footer: "footer_c862ac",
        footerInner: "footerInner_c862ac",
      };
    },
  },
]);
//# sourceMappingURL=76d2421b554b1f110a63.js.map
