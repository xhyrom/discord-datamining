"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["64941"],
  {
    472305: function (t, n, e) {
      e.d(n, {
        F9: function () {
          return i;
        },
        Qv: function () {
          return s;
        },
        pL: function () {
          return o;
        },
      });
      let o = "example.com",
        s = (t) => "_discord.".concat(t),
        i = (t) => "https://".concat(t, "/.well-known/discord");
    },
    907053: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return N;
          },
        }),
        e(47120),
        e(773603);
      var o,
        s,
        i = e(200651),
        l = e(192379),
        r = e(544891),
        a = e(481060),
        c = e(600164),
        d = e(572004),
        u = e(472305),
        x = e(981631),
        h = e(388032),
        m = e(910880);
      function j(t) {
        let { name: n, value: e } = t,
          [o, s] = l.useState(a.CopyInputModes.DEFAULT);
        return (0, i.jsxs)("div", {
          className: m.infoRow,
          children: [
            (0, i.jsx)(a.FormTitle, { children: n }),
            (0, i.jsx)(a.CopyInput, {
              value: e,
              mode: o,
              supportsCopy: d.wS,
              onCopy: () => {
                (0, d.JG)(e), s(a.CopyInputModes.SUCCESS);
              },
            }),
          ],
        });
      }
      function N(t) {
        let { onClose: n, transitionState: e } = t,
          [o, s] = l.useState(""),
          [d, N] = l.useState(""),
          [p, v] = l.useState(null),
          [C, g] = l.useState(!1),
          [O, I] = l.useState("DOMAIN"),
          _ = () => {
            g(!0),
              v(null),
              r.tn
                .post({
                  url: x.ANM.CONNECTION(x.ABu.DOMAIN, o),
                  body: {},
                  rejectWithError: !1,
                })
                .then(() => {
                  n();
                })
                .catch((t) => {
                  var n, e, o, s, i, l, r;
                  (null === (n = t.body) || void 0 === n ? void 0 : n.proof) &&
                  "DOMAIN" === O
                    ? (N(t.body.proof), I("PROOF_DNS"))
                    : v(
                        (null === (l = t.body) || void 0 === l
                          ? void 0
                          : null === (i = l.errors) || void 0 === i
                            ? void 0
                            : null === (s = i.domain) || void 0 === s
                              ? void 0
                              : null === (o = s._errors) || void 0 === o
                                ? void 0
                                : null === (e = o[0]) || void 0 === e
                                  ? void 0
                                  : e.message) ||
                          (null === (r = t.body) || void 0 === r
                            ? void 0
                            : r.message) ||
                          t.message,
                      );
                })
                .finally(() => {
                  g(!1);
                });
          };
        return (0, i.jsxs)(a.ModalRoot, {
          transitionState: e,
          className: m.__invalid_modal,
          children: [
            (0, i.jsxs)(a.ModalHeader, {
              direction: c.Z.Direction.VERTICAL,
              className: m.header,
              separator: !1,
              children: [
                (0, i.jsx)(a.Heading, {
                  variant: "heading-xl/semibold",
                  children: h.intl.string(h.t["7lo8+f"]),
                }),
                (0, i.jsx)(a.ModalCloseButton, {
                  className: m.closeButton,
                  onClick: n,
                }),
              ],
            }),
            (0, i.jsxs)(a.Slides, {
              activeSlide: O,
              width: 440,
              children: [
                (0, i.jsx)(a.Slide, {
                  id: "DOMAIN",
                  children: (0, i.jsxs)("form", {
                    onSubmit: (t) => {
                      t.preventDefault(), _();
                    },
                    children: [
                      (0, i.jsxs)(a.ModalContent, {
                        className: m.content,
                        children: [
                          (0, i.jsx)(a.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            className: m.description,
                            children: h.intl.string(h.t.NxPUqa),
                          }),
                          (0, i.jsx)(a.FormItem, {
                            title: h.intl.string(h.t["4jIAa2"]),
                            error: p,
                            children: (0, i.jsx)(a.TextInput, {
                              onChange: s,
                              placeholder: u.pL,
                              maxLength: 253,
                              value: o,
                              disabled: C,
                              autoFocus: !0,
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsxs)(a.ModalFooter, {
                        className: m.footer,
                        children: [
                          (0, i.jsx)(a.Button, {
                            type: "submit",
                            submitting: C,
                            disabled: "" === o,
                            children: h.intl.string(h.t.PDTjLC),
                          }),
                          (0, i.jsx)(a.Button, {
                            look: a.Button.Looks.LINK,
                            color: a.Button.Colors.PRIMARY,
                            onClick: n,
                            children: h.intl.string(h.t["ETE/oK"]),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, i.jsxs)(a.Slide, {
                  id: "PROOF_DNS",
                  children: [
                    (0, i.jsxs)(a.ModalContent, {
                      className: m.content,
                      children: [
                        (0, i.jsxs)("ol", {
                          className: m.list,
                          children: [
                            (0, i.jsx)("li", {
                              children: (0, i.jsx)(a.Text, {
                                tag: "span",
                                variant: "text-md/normal",
                                children: h.intl.string(h.t.yOxxAw),
                              }),
                            }),
                            (0, i.jsxs)("li", {
                              children: [
                                (0, i.jsx)(a.Text, {
                                  tag: "span",
                                  variant: "text-md/normal",
                                  children: h.intl.string(h.t.cSURbm),
                                }),
                                (0, i.jsxs)("div", {
                                  className: m.dnsRecordContainer,
                                  children: [
                                    (0, i.jsx)(j, {
                                      name: h.intl.string(h.t.GL3q7u),
                                      value: (0, u.Qv)(o),
                                    }),
                                    (0, i.jsx)(j, {
                                      name: h.intl.string(h.t.Ccmixs),
                                      value: "TXT",
                                    }),
                                    (0, i.jsx)(j, {
                                      name: h.intl.string(h.t.PVLriY),
                                      value: d,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsx)(a.HelpMessage, {
                          messageType: a.HelpMessageTypes.INFO,
                          className: m.text,
                          children: h.intl.string(h.t.CUBxDA),
                        }),
                        null != p &&
                          (0, i.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "text-danger",
                            className: m.text,
                            children: p,
                          }),
                      ],
                    }),
                    (0, i.jsxs)(a.ModalFooter, {
                      className: m.footer,
                      direction: c.Z.Direction.HORIZONTAL,
                      children: [
                        (0, i.jsx)(a.Button, {
                          look: a.Button.Looks.LINK,
                          color: a.Button.Colors.PRIMARY,
                          onClick: () => {
                            I("DOMAIN"), v(null);
                          },
                          children: h.intl.string(h.t["13/7kZ"]),
                        }),
                        (0, i.jsxs)("div", {
                          className: m.footerInner,
                          children: [
                            (0, i.jsx)(a.Button, {
                              look: a.Button.Looks.LINK,
                              color: a.Button.Colors.PRIMARY,
                              onClick: () => {
                                I("PROOF_HTTP"), v(null);
                              },
                              className: m.__invalid_switchButton,
                              children: h.intl.string(h.t.CkfdNz),
                            }),
                            (0, i.jsx)(a.Button, {
                              submitting: C,
                              onClick: _,
                              children: h.intl.string(h.t["13ofGh"]),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)(a.Slide, {
                  id: "PROOF_HTTP",
                  children: [
                    (0, i.jsxs)(a.ModalContent, {
                      className: m.content,
                      children: [
                        (0, i.jsx)(a.Text, {
                          tag: "span",
                          variant: "text-md/normal",
                          children: h.intl.string(h.t["p4ql7+"]),
                        }),
                        (0, i.jsxs)("div", {
                          className: m.httpFileContainer,
                          children: [
                            (0, i.jsx)(j, {
                              name: h.intl.string(h.t.GL3q7u),
                              value: (0, u.F9)(o),
                            }),
                            (0, i.jsx)(j, {
                              name: h.intl.string(h.t.PVLriY),
                              value: d,
                            }),
                          ],
                        }),
                        null != p &&
                          (0, i.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "text-danger",
                            className: m.text,
                            children: p,
                          }),
                      ],
                    }),
                    (0, i.jsxs)(a.ModalFooter, {
                      className: m.footer,
                      direction: c.Z.Direction.HORIZONTAL,
                      children: [
                        (0, i.jsx)(a.Button, {
                          look: a.Button.Looks.LINK,
                          color: a.Button.Colors.PRIMARY,
                          onClick: () => {
                            I("DOMAIN"), v(null);
                          },
                          children: h.intl.string(h.t["13/7kZ"]),
                        }),
                        (0, i.jsxs)("div", {
                          className: m.footerInner,
                          children: [
                            (0, i.jsx)(a.Button, {
                              look: a.Button.Looks.LINK,
                              color: a.Button.Colors.PRIMARY,
                              onClick: () => {
                                I("PROOF_DNS"), v(null);
                              },
                              className: m.__invalid_switchButton,
                              children: h.intl.string(h.t.RhJMVV),
                            }),
                            (0, i.jsx)(a.Button, {
                              submitting: C,
                              onClick: _,
                              children: h.intl.string(h.t["13ofGh"]),
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
      ((s = o || (o = {})).DOMAIN = "DOMAIN"),
        (s.PROOF_DNS = "PROOF_DNS"),
        (s.PROOF_HTTP = "PROOF_HTTP");
    },
    910880: function (t, n, e) {
      t.exports = {
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
//# sourceMappingURL=42850084084e4b22c32f.js.map
