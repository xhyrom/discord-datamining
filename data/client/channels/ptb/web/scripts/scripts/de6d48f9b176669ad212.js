"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["5004"],
  {
    233070: function (e, t, n) {
      n.r(t), n(47120);
      var o = n(735250),
        s = n(470079),
        l = n(435935),
        a = n(481060),
        i = n(570140),
        d = n(960359),
        r = n(853197),
        u = n(430492),
        c = n(689938),
        M = n(476399);
      t.default = function (e) {
        let {
            transitionState: t,
            closeParentModal: n,
            onClose: C,
            dropsQuestId: h,
            platform: x,
            code: j,
            singlePlatformClaim: m,
          } = e,
          [N, f] = s.useState(null),
          [p, E] = s.useState(null != j ? j : null),
          I = (0, r.EW)(h);
        if (
          (s.useEffect(() => {
            null == p && m && O(h, x);
          }, [p, m, h, x]),
          null == I)
        )
          return null;
        let O = (e, t) => {
            (0, d.Nw)(e, t)
              .then((e) => E(e))
              .catch((e) => {
                var t;
                return f(
                  null == e
                    ? void 0
                    : null === (t = e.body) || void 0 === t
                      ? void 0
                      : t.code,
                );
              })
              .then(() => {
                i.Z.wait(async () => {
                  await (0, d.R5)();
                });
              });
          },
          R = () => {
            n(), (0, a.closeAllModals)();
          };
        return (0, o.jsx)(a.ModalRoot, {
          transitionState: t,
          children:
            null != N
              ? (0, o.jsx)(u.L1, {
                  onClose: () => {
                    R();
                  },
                  errorCode: N,
                })
              : null !== p
                ? (0, o.jsx)(u.o1, {
                    bodyText: I.messages.claimTip(),
                    onClose: R,
                    copyInputTitle: c.Z.Messages.REDEMPTION_CODE,
                    code: p,
                  })
                : (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsxs)(a.ModalHeader, {
                        separator: !1,
                        justify: l.k.Justify.BETWEEN,
                        children: [
                          (0, o.jsx)(a.Heading, {
                            variant: "heading-md/medium",
                            children:
                              c.Z.Messages.DROPS_MODAL_PLATFORM_CONFIRMATION_TITLE.format(
                                { platform: (0, r.Un)(x) },
                              ),
                          }),
                          (0, o.jsx)(a.ModalCloseButton, { onClick: R }),
                        ],
                      }),
                      (0, o.jsx)(a.ModalContent, {
                        className: M.modalContent,
                        children: (0, o.jsx)(a.Text, {
                          variant: "text-md/normal",
                          children:
                            c.Z.Messages.DROPS_MODAL_CONFIRMATION_WARNING,
                        }),
                      }),
                      (0, o.jsxs)(a.ModalFooter, {
                        justify: l.k.Justify.BETWEEN,
                        children: [
                          (0, o.jsx)(a.Button, {
                            onClick: () => {
                              O(h, x);
                            },
                            children: c.Z.Messages.CONFIRM,
                          }),
                          (0, o.jsx)(a.Button, {
                            look: a.Button.Looks.LINK,
                            size: a.Button.Sizes.MIN,
                            color: a.Button.Colors.PRIMARY,
                            onClick: C,
                            children: c.Z.Messages.BACK,
                          }),
                        ],
                      }),
                    ],
                  }),
        });
      };
    },
    476399: function (e, t, n) {
      e.exports = { modalContent: "modalContent_ad4aeb" };
    },
  },
]);
//# sourceMappingURL=de6d48f9b176669ad212.js.map
