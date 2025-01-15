"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["43350"],
  {
    888322: function (e, t, n) {
      e.exports = n.p + "dd7d25734dde67727dcb.mp4";
    },
    860724: function (e) {
      e.exports = "/assets/799f183c85604181d8fc.png";
    },
    942314: function (e, t, n) {
      e.exports = n.p + "cce05d82eef68fe2bb8d.webm";
    },
    98746: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        }),
        n(47120);
      var l,
        s,
        o = n(200651),
        i = n(192379),
        a = n(481060),
        r = n(749210),
        c = n(70097),
        u = n(910693),
        d = n(70956),
        m = n(5192),
        b = n(981631),
        g = n(388032),
        p = n(322480);
      ((s = l || (l = {}))[(s.INITIAL = 0)] = "INITIAL"),
        (s[(s.OTHER_REASON = 1)] = "OTHER_REASON");
      function h() {
        return [
          { value: 0, label: g.intl.string(g.t["4obaMT"]) },
          { value: 1 * d.Z.Seconds.HOUR, label: g.intl.string(g.t.RKpitb) },
          { value: 6 * d.Z.Seconds.HOUR, label: g.intl.string(g.t["8WfJZ2"]) },
          { value: 12 * d.Z.Seconds.HOUR, label: g.intl.string(g.t.p1up7u) },
          { value: 1 * d.Z.Seconds.DAY, label: g.intl.string(g.t.XuVkkJ) },
          { value: 3 * d.Z.Seconds.DAY, label: g.intl.string(g.t.gMcDS0) },
          { value: 7 * d.Z.Seconds.DAY, label: g.intl.string(g.t.FA7IUl) },
        ];
      }
      let x = h()[1].value;
      function C(e) {
        let {
            guildId: t,
            user: l,
            location: s,
            userIds: d,
            onBanMultiple: C,
            transitionState: S,
            onClose: j,
            canBulkBan: f = !1,
          } = e,
          [k, v] = i.useState(x),
          [I, N] = i.useState(""),
          [R, B] = i.useState(0),
          [M, A] = i.useState(!1),
          L = (0, u.sE)(t, {
            location: s,
            targetUserId: null == l ? void 0 : l.id,
            targets: d,
          }),
          E = i.useCallback(() => {
            if (null != C) {
              if (!(null != d && (null == d ? void 0 : d.size) > 0 && f) || M)
                return;
              if ("" === I.trim() && !M) {
                A(!0);
                return;
              }
              C(t, [...d], k, I);
            } else {
              if (null == l) return;
              r.Z.banUser(t, null == l ? void 0 : l.id, k, I);
            }
            L(u.jQ.BAN), j();
          }, [C, L, j, d, f, M, I, t, k, l]),
          Z = i.useCallback((e) => {
            v(e);
          }, []),
          _ = i.useCallback((e) => {
            let { value: t } = e;
            N(t), A(!1);
          }, []),
          O = i.useCallback(
            (e) => {
              N(e), M && A(!1);
            },
            [M],
          ),
          T = i.useCallback(() => {
            N(""), B(1);
          }, []),
          y = i.useCallback(() => {
            B(0);
          }, []),
          w = [
            {
              name: g.intl.string(g.t.tamLhY),
              value: g.intl.string(g.t.tamLhY),
            },
            {
              name: g.intl.string(g.t.UmxjMj),
              value: g.intl.string(g.t.UmxjMj),
            },
            {
              name: g.intl.string(g.t.EXY1d3),
              value: g.intl.string(g.t.EXY1d3),
            },
          ],
          Y =
            null != C && null != d
              ? g.intl.formatToPlainString(g.t.Ka68TE, {
                  count: null == d ? void 0 : d.size,
                })
              : null == l
                ? ""
                : g.intl.formatToPlainString(g.t.Qd6w7e, {
                    username: "@".concat(m.ZP.getName(t, null, l)),
                  });
        return (0, o.jsxs)(a.ModalRoot, {
          transitionState: S,
          children: [
            (0, o.jsx)(a.ModalHeader, {
              separator: !1,
              children: (0, o.jsx)(a.Heading, {
                variant: "heading-md/semibold",
                children: Y,
              }),
            }),
            (0, o.jsxs)(a.ModalContent, {
              className: p.modalContent,
              children: [
                (0, o.jsxs)(c.Z, {
                  autoPlay: !0,
                  loop: !0,
                  className: p.spacing,
                  width: 400,
                  children: [
                    (0, o.jsx)("source", {
                      src: n(942314),
                      type: "video/webm",
                    }),
                    (0, o.jsx)("source", { src: n(888322), type: "video/mp4" }),
                    (0, o.jsx)("img", { alt: "", src: n(860724) }),
                  ],
                }),
                (0, o.jsxs)(a.FormItem, {
                  title: g.intl.string(g.t.w4Ivys),
                  className: p.spacing,
                  children: [
                    M &&
                      (0, o.jsx)(a.FormErrorBlock, {
                        className: p.error,
                        children: g.intl.string(g.t.IrYX19),
                      }),
                    (0, o.jsx)(a.Sequencer, {
                      steps: [0, 1],
                      step: R,
                      children: ((e) => {
                        switch (R) {
                          case 0:
                            return (0, o.jsxs)(o.Fragment, {
                              children: [
                                (0, o.jsx)(a.RadioGroup, {
                                  value: I,
                                  options: e,
                                  onChange: _,
                                  radioItemClassName: p.radioItemStyles,
                                }),
                                (0, o.jsxs)(a.Clickable, {
                                  onClick: T,
                                  className: p.banReasonOtherClickable,
                                  children: [
                                    (0, o.jsx)(a.Text, {
                                      variant: "text-md/medium",
                                      color: "none",
                                      children: g.intl.string(g.t.BcZTKi),
                                    }),
                                    (0, o.jsx)(a.ChevronSmallRightIcon, {
                                      color: "currentColor",
                                      size: "xs",
                                    }),
                                  ],
                                }),
                              ],
                            });
                          case 1:
                            return (0, o.jsx)(a.TextArea, {
                              maxLength: b.GNZ,
                              onChange: O,
                              value: I,
                              rows: 5,
                              autoFocus: !0,
                            });
                        }
                      })(w),
                    }),
                  ],
                }),
                (0, o.jsx)(a.FormItem, {
                  title: g.intl.string(g.t["8l3W09"]),
                  className: p.spacing,
                  children: (0, o.jsx)(a.SingleSelect, {
                    options: h(),
                    value: k,
                    onChange: Z,
                  }),
                }),
              ],
            }),
            (() => {
              switch (R) {
                case 0:
                  return (0, o.jsxs)(a.ModalFooter, {
                    className: p.footer,
                    children: [
                      (0, o.jsx)(a.Button, {
                        type: "button",
                        look: a.Button.Looks.LINK,
                        color: a.Button.Colors.PRIMARY,
                        onClick: j,
                        children: g.intl.string(g.t["ETE/oK"]),
                      }),
                      (0, o.jsx)(a.Button, {
                        type: "submit",
                        color: a.Button.Colors.RED,
                        size: a.Button.Sizes.SMALL,
                        onClick: E,
                        children: g.intl.string(g.t["5MBJ5O"]),
                      }),
                    ],
                  });
                case 1:
                  return (0, o.jsxs)(a.ModalFooter, {
                    className: p.footerStepped,
                    children: [
                      (0, o.jsx)(a.Button, {
                        className: p.cancel,
                        innerClassName: p.cancel,
                        type: "button",
                        look: a.Button.Looks.LINK,
                        color: a.Button.Colors.PRIMARY,
                        size: a.Button.Sizes.SMALL,
                        onClick: y,
                        children: g.intl.string(g.t["13/7kZ"]),
                      }),
                      (0, o.jsx)(a.Button, {
                        type: "submit",
                        color: a.Button.Colors.RED,
                        size: a.Button.Sizes.SMALL,
                        onClick: E,
                        children: g.intl.string(g.t["5MBJ5O"]),
                      }),
                    ],
                  });
              }
            })(),
          ],
        });
      }
    },
    322480: function (e, t, n) {
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
//# sourceMappingURL=e6d943bad4756d365c7a.js.map
