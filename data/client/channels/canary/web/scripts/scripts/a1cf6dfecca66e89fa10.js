"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["43350"],
  {
    888322: function (e, s, a) {
      e.exports = a.p + "dd7d25734dde67727dcb.mp4";
    },
    860724: function (e) {
      e.exports = "/assets/799f183c85604181d8fc.png";
    },
    942314: function (e, s, a) {
      e.exports = a.p + "cce05d82eef68fe2bb8d.webm";
    },
    98746: function (e, s, a) {
      a.r(s),
        a.d(s, {
          default: function () {
            return R;
          },
        }),
        a(47120);
      var o,
        t,
        l = a(735250),
        n = a(470079),
        r = a(481060),
        c = a(749210),
        i = a(70097),
        u = a(910693),
        _ = a(70956),
        E = a(5192),
        d = a(981631),
        S = a(689938),
        N = a(516703);
      ((t = o || (o = {}))[(t.INITIAL = 0)] = "INITIAL"),
        (t[(t.OTHER_REASON = 1)] = "OTHER_REASON");
      function O() {
        return [
          { value: 0, label: S.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE },
          {
            value: 1 * _.Z.Seconds.HOUR,
            label: S.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR,
          },
          {
            value: 6 * _.Z.Seconds.HOUR,
            label: S.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR,
          },
          {
            value: 12 * _.Z.Seconds.HOUR,
            label: S.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR,
          },
          {
            value: 1 * _.Z.Seconds.DAY,
            label: S.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR,
          },
          {
            value: 3 * _.Z.Seconds.DAY,
            label: S.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D,
          },
          {
            value: 7 * _.Z.Seconds.DAY,
            label: S.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D,
          },
        ];
      }
      let A = O()[1].value;
      function R(e) {
        let {
            guildId: s,
            user: o,
            location: t,
            userIds: _,
            onBanMultiple: R,
            transitionState: M,
            onClose: C,
            canBulkBan: I = !1,
          } = e,
          [m, T] = n.useState(A),
          [b, g] = n.useState(""),
          [p, h] = n.useState(0),
          [x, Z] = n.useState(!1),
          B = (0, u.sE)(s, {
            location: t,
            targetUserId: null == o ? void 0 : o.id,
            targets: _,
          }),
          L = n.useCallback(() => {
            if (null != R) {
              if (!(null != _ && (null == _ ? void 0 : _.size) > 0 && I) || x)
                return;
              if ("" === b.trim() && !x) {
                Z(!0);
                return;
              }
              R(s, [..._], m, b);
            } else {
              if (null == o) return;
              c.Z.banUser(s, null == o ? void 0 : o.id, m, b);
            }
            B(u.jQ.BAN), C();
          }, [R, B, C, _, I, x, b, s, m, o]),
          f = n.useCallback((e) => {
            T(e);
          }, []),
          j = n.useCallback((e) => {
            let { value: s } = e;
            g(s), Z(!1);
          }, []),
          v = n.useCallback(
            (e) => {
              g(e), x && Z(!1);
            },
            [x],
          ),
          k = n.useCallback(() => {
            g(""), h(1);
          }, []),
          H = n.useCallback(() => {
            h(0);
          }, []),
          P = [
            {
              name: S.Z.Messages.BAN_REASON_OPTION_SPAM_ACCOUNT,
              value: S.Z.Messages.BAN_REASON_OPTION_SPAM_ACCOUNT,
            },
            {
              name: S.Z.Messages.BAN_REASON_OPTION_HACKED_ACCOUNT,
              value: S.Z.Messages.BAN_REASON_OPTION_HACKED_ACCOUNT,
            },
            {
              name: S.Z.Messages.BAN_REASON_OPTION_BREAKING_RULES,
              value: S.Z.Messages.BAN_REASON_OPTION_BREAKING_RULES,
            },
          ],
          D =
            null != R && null != _
              ? S.Z.Messages.BAN_MULTIPLE_CONFIRM_TITLE.format({
                  count: null == _ ? void 0 : _.size,
                })
              : null == o
                ? ""
                : S.Z.Messages.BAN_CONFIRM_TITLE.format({
                    username: "@".concat(E.ZP.getName(s, null, o)),
                  });
        return (0, l.jsxs)(r.ModalRoot, {
          transitionState: M,
          children: [
            (0, l.jsx)(r.ModalHeader, {
              separator: !1,
              children: (0, l.jsx)(r.Heading, {
                variant: "heading-md/semibold",
                children: D,
              }),
            }),
            (0, l.jsxs)(r.ModalContent, {
              className: N.modalContent,
              children: [
                (0, l.jsxs)(i.Z, {
                  autoPlay: !0,
                  loop: !0,
                  className: N.spacing,
                  width: 400,
                  children: [
                    (0, l.jsx)("source", {
                      src: a(942314),
                      type: "video/webm",
                    }),
                    (0, l.jsx)("source", { src: a(888322), type: "video/mp4" }),
                    (0, l.jsx)("img", { alt: "", src: a(860724) }),
                  ],
                }),
                (0, l.jsxs)(r.FormItem, {
                  title: S.Z.Messages.FORM_LABEL_REASON_BAN,
                  className: N.spacing,
                  children: [
                    x &&
                      (0, l.jsx)(r.FormErrorBlock, {
                        className: N.error,
                        children: S.Z.Messages.BAN_REASON_REQUIRED_ERROR,
                      }),
                    (0, l.jsx)(r.Sequencer, {
                      steps: [0, 1],
                      step: p,
                      children: ((e) => {
                        switch (p) {
                          case 0:
                            return (0, l.jsxs)(l.Fragment, {
                              children: [
                                (0, l.jsx)(r.RadioGroup, {
                                  value: b,
                                  options: e,
                                  onChange: j,
                                  radioItemClassName: N.radioItemStyles,
                                }),
                                (0, l.jsxs)(r.Clickable, {
                                  onClick: k,
                                  className: N.banReasonOtherClickable,
                                  children: [
                                    (0, l.jsx)(r.Text, {
                                      variant: "text-md/medium",
                                      color: "none",
                                      children: S.Z.Messages.OTHER,
                                    }),
                                    (0, l.jsx)(r.ChevronSmallRightIcon, {
                                      color: "currentColor",
                                      size: "xs",
                                    }),
                                  ],
                                }),
                              ],
                            });
                          case 1:
                            return (0, l.jsx)(r.TextArea, {
                              maxLength: d.GNZ,
                              onChange: v,
                              value: b,
                              rows: 5,
                              autoFocus: !0,
                            });
                        }
                      })(P),
                    }),
                  ],
                }),
                (0, l.jsx)(r.FormItem, {
                  title: S.Z.Messages.FORM_LABEL_DELETE_MESSAGE_HISTORY,
                  className: N.spacing,
                  children: (0, l.jsx)(r.SingleSelect, {
                    options: O(),
                    value: m,
                    onChange: f,
                  }),
                }),
              ],
            }),
            (() => {
              switch (p) {
                case 0:
                  return (0, l.jsxs)(r.ModalFooter, {
                    className: N.footer,
                    children: [
                      (0, l.jsx)(r.Button, {
                        type: "button",
                        look: r.Button.Looks.LINK,
                        color: r.Button.Colors.PRIMARY,
                        onClick: C,
                        children: S.Z.Messages.CANCEL,
                      }),
                      (0, l.jsx)(r.Button, {
                        type: "submit",
                        color: r.Button.Colors.RED,
                        size: r.Button.Sizes.SMALL,
                        onClick: L,
                        children: S.Z.Messages.BAN,
                      }),
                    ],
                  });
                case 1:
                  return (0, l.jsxs)(r.ModalFooter, {
                    className: N.footerStepped,
                    children: [
                      (0, l.jsx)(r.Button, {
                        className: N.cancel,
                        innerClassName: N.cancel,
                        type: "button",
                        look: r.Button.Looks.LINK,
                        color: r.Button.Colors.PRIMARY,
                        size: r.Button.Sizes.SMALL,
                        onClick: H,
                        children: S.Z.Messages.BACK,
                      }),
                      (0, l.jsx)(r.Button, {
                        type: "submit",
                        color: r.Button.Colors.RED,
                        size: r.Button.Sizes.SMALL,
                        onClick: L,
                        children: S.Z.Messages.BAN,
                      }),
                    ],
                  });
              }
            })(),
          ],
        });
      }
    },
    516703: function (e, s, a) {
      e.exports = {
        spacing: "spacing_e6c06b",
        modalContent: "modalContent_e6c06b",
        banReasonOtherClickable: "banReasonOtherClickable_e6c06b",
        radioItemStyles: "radioItemStyles_e6c06b",
        footer: "footer_e6c06b",
        footerStepped: "footerStepped_e6c06b footer_e6c06b",
        cancel: "cancel_e6c06b",
        error: "error_e6c06b",
      };
    },
  },
]);
//# sourceMappingURL=a1cf6dfecca66e89fa10.js.map
