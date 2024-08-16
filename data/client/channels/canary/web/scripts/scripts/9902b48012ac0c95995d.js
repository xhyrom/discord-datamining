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
            return C;
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
        d = o(777036),
        I = o(572004),
        N = o(472305),
        u = o(981631),
        _ = o(689938),
        O = o(332649);
      function x(e) {
        let { name: s, value: o } = e,
          [t, n] = a.useState(r.CopyInputModes.DEFAULT);
        return (0, l.jsxs)("div", {
          className: O.infoRow,
          children: [
            (0, l.jsx)(r.FormTitle, { children: s }),
            (0, l.jsx)(r.CopyInput, {
              value: o,
              mode: t,
              supportsCopy: I.wS,
              onCopy: () => {
                (0, I.JG)(o), n(r.CopyInputModes.SUCCESS);
              },
            }),
          ],
        });
      }
      function C(e) {
        let { onClose: s, transitionState: o } = e,
          [t, n] = a.useState(""),
          [I, C] = a.useState(""),
          [h, M] = a.useState(null),
          [R, m] = a.useState(!1),
          [A, T] = a.useState("DOMAIN"),
          j = () => {
            m(!0),
              M(null),
              i.tn
                .post({ url: u.ANM.CONNECTION(u.ABu.DOMAIN, t), body: {} })
                .then(() => {
                  s();
                })
                .catch((e) => {
                  var s, o, t, n, l, a, i;
                  (null === (s = e.body) || void 0 === s ? void 0 : s.proof) &&
                  "DOMAIN" === A
                    ? (C(e.body.proof), T("PROOF_DNS"))
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
                  m(!1);
                });
          };
        return (0, l.jsxs)(r.ModalRoot, {
          transitionState: o,
          className: O.__invalid_modal,
          children: [
            (0, l.jsxs)(r.ModalHeader, {
              direction: c.Z.Direction.VERTICAL,
              className: O.header,
              separator: !1,
              children: [
                (0, l.jsx)(r.Heading, {
                  variant: "heading-xl/semibold",
                  children: _.Z.Messages.DOMAIN_VERIFICATION_HEADER,
                }),
                (0, l.jsx)(r.ModalCloseButton, {
                  className: O.closeButton,
                  onClick: s,
                }),
              ],
            }),
            (0, l.jsxs)(r.Slides, {
              activeSlide: A,
              width: 440,
              children: [
                (0, l.jsx)(r.Slide, {
                  id: "DOMAIN",
                  children: (0, l.jsxs)("form", {
                    onSubmit: (e) => {
                      e.preventDefault(), j();
                    },
                    children: [
                      (0, l.jsxs)(r.ModalContent, {
                        className: O.content,
                        children: [
                          (0, l.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            className: O.description,
                            children:
                              _.Z.Messages.DOMAIN_VERIFICATION_DESCRIPTION,
                          }),
                          (0, l.jsx)(r.FormItem, {
                            title: _.Z.Messages.DOMAIN_VERIFICATION_LABEL,
                            error: h,
                            children: (0, l.jsx)(r.TextInput, {
                              onChange: n,
                              placeholder: N.pL,
                              maxLength: 253,
                              value: t,
                              disabled: R,
                              autoFocus: !0,
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsxs)(r.ModalFooter, {
                        className: O.footer,
                        children: [
                          (0, l.jsx)(r.Button, {
                            type: "submit",
                            submitting: R,
                            disabled: "" === t,
                            children: _.Z.Messages.NEXT,
                          }),
                          (0, l.jsx)(r.Button, {
                            look: r.Button.Looks.LINK,
                            color: r.Button.Colors.PRIMARY,
                            onClick: s,
                            children: _.Z.Messages.CANCEL,
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
                      className: O.content,
                      children: [
                        (0, l.jsxs)("ol", {
                          className: O.list,
                          children: [
                            (0, l.jsx)("li", {
                              children: (0, l.jsx)(r.Text, {
                                tag: "span",
                                variant: "text-md/normal",
                                children:
                                  _.Z.Messages
                                    .DOMAIN_VERIFICATION_INSTRUCTIONS_DNS_1,
                              }),
                            }),
                            (0, l.jsxs)("li", {
                              children: [
                                (0, l.jsx)(r.Text, {
                                  tag: "span",
                                  variant: "text-md/normal",
                                  children:
                                    _.Z.Messages
                                      .DOMAIN_VERIFICATION_INSTRUCTIONS_DNS_2,
                                }),
                                (0, l.jsxs)("div", {
                                  className: O.dnsRecordContainer,
                                  children: [
                                    (0, l.jsx)(x, {
                                      name: _.Z.Messages
                                        .DOMAIN_VERIFICATION_RECORD_NAME,
                                      value: (0, N.Qv)(t),
                                    }),
                                    (0, l.jsx)(x, {
                                      name: _.Z.Messages
                                        .DOMAIN_VERIFICATION_RECORD_TYPE,
                                      value: "TXT",
                                    }),
                                    (0, l.jsx)(x, {
                                      name: _.Z.Messages
                                        .DOMAIN_VERIFICATION_RECORD_CONTENT,
                                      value: I,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, l.jsx)(d.Z, {
                          messageType: d.Q.INFO,
                          className: O.text,
                          children:
                            _.Z.Messages.DOMAIN_VERIFICATION_DNS_WARNING,
                        }),
                        null != h &&
                          (0, l.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "text-danger",
                            className: O.text,
                            children: h,
                          }),
                      ],
                    }),
                    (0, l.jsxs)(r.ModalFooter, {
                      className: O.footer,
                      direction: c.Z.Direction.HORIZONTAL,
                      children: [
                        (0, l.jsx)(r.Button, {
                          look: r.Button.Looks.LINK,
                          color: r.Button.Colors.PRIMARY,
                          onClick: () => {
                            T("DOMAIN"), M(null);
                          },
                          children: _.Z.Messages.BACK,
                        }),
                        (0, l.jsxs)("div", {
                          className: O.footerInner,
                          children: [
                            (0, l.jsx)(r.Button, {
                              look: r.Button.Looks.LINK,
                              color: r.Button.Colors.PRIMARY,
                              onClick: () => {
                                T("PROOF_HTTP"), M(null);
                              },
                              className: O.__invalid_switchButton,
                              children:
                                _.Z.Messages.DOMAIN_VERIFICATION_USE_HTTP,
                            }),
                            (0, l.jsx)(r.Button, {
                              submitting: R,
                              onClick: j,
                              children: _.Z.Messages.VERIFY,
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
                      className: O.content,
                      children: [
                        (0, l.jsx)(r.Text, {
                          tag: "span",
                          variant: "text-md/normal",
                          children:
                            _.Z.Messages.DOMAIN_VERIFICATION_INSTRUCTIONS_HTTP,
                        }),
                        (0, l.jsxs)("div", {
                          className: O.httpFileContainer,
                          children: [
                            (0, l.jsx)(x, {
                              name: _.Z.Messages
                                .DOMAIN_VERIFICATION_RECORD_NAME,
                              value: (0, N.F9)(t),
                            }),
                            (0, l.jsx)(x, {
                              name: _.Z.Messages
                                .DOMAIN_VERIFICATION_RECORD_CONTENT,
                              value: I,
                            }),
                          ],
                        }),
                        null != h &&
                          (0, l.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "text-danger",
                            className: O.text,
                            children: h,
                          }),
                      ],
                    }),
                    (0, l.jsxs)(r.ModalFooter, {
                      className: O.footer,
                      direction: c.Z.Direction.HORIZONTAL,
                      children: [
                        (0, l.jsx)(r.Button, {
                          look: r.Button.Looks.LINK,
                          color: r.Button.Colors.PRIMARY,
                          onClick: () => {
                            T("DOMAIN"), M(null);
                          },
                          children: _.Z.Messages.BACK,
                        }),
                        (0, l.jsxs)("div", {
                          className: O.footerInner,
                          children: [
                            (0, l.jsx)(r.Button, {
                              look: r.Button.Looks.LINK,
                              color: r.Button.Colors.PRIMARY,
                              onClick: () => {
                                T("PROOF_DNS"), M(null);
                              },
                              className: O.__invalid_switchButton,
                              children:
                                _.Z.Messages.DOMAIN_VERIFICATION_USE_DNS,
                            }),
                            (0, l.jsx)(r.Button, {
                              submitting: R,
                              onClick: j,
                              children: _.Z.Messages.VERIFY,
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
    332649: function (e, s, o) {
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
//# sourceMappingURL=9902b48012ac0c95995d.js.map
