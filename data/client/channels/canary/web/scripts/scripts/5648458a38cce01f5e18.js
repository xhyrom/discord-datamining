"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["59385"],
  {
    723422: function (n) {
      n.exports = "/assets/fdf821f100a4bc5ca536.jpg";
    },
    480884: function (n, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return _;
          },
        });
      var a = t(200651),
        o = t(192379),
        s = t(286379),
        i = t(399606),
        c = t(481060),
        l = t(797614),
        r = t(359119),
        d = t(473092),
        u = t(636749),
        m = t(981631),
        x = t(388032),
        b = t(672679);
      function _(n) {
        let {
            transitionState: e,
            onClose: t,
            channelId: _,
            warningId: v,
            senderId: g,
            description: N,
            safetyTips: h,
            actions: p,
            learnMore: k,
          } = n,
          j = (0, i.e7)([r.ZP], () => r.ZP.getChannelSafetyWarning(_, v));
        return (
          o.useEffect(() => {
            (0, d.MC)(m.rMx.SAFETY_WARNING_MODAL_VIEWED, {
              channelId: _,
              warningId: v,
              senderId: g,
              warningType: null == j ? void 0 : j.type,
            }),
              l.Z.increment({ name: s.V.SAFETY_WARNING_MODAL_VIEW });
          }, [_, v, g, j]),
          (0, a.jsx)(c.ModalRoot, {
            transitionState: e,
            children: (0, a.jsxs)(c.Scroller, {
              style: { overflow: "hidden auto" },
              children: [
                (0, a.jsxs)(c.ModalHeader, {
                  className: b.modalHeader,
                  children: [
                    (0, a.jsxs)("div", {
                      className: b.modalHeaderText,
                      children: [
                        (0, a.jsx)(c.Text, {
                          variant: "eyebrow",
                          color: "status-positive-text",
                          children: x.intl.string(x.t.lyt43N),
                        }),
                        (0, a.jsx)(c.Heading, {
                          variant: "heading-xl/bold",
                          color: "status-positive-text",
                          children: N,
                        }),
                      ],
                    }),
                    (0, a.jsx)(c.Button, {
                      "aria-label": x.intl.string(x.t.cpT0Cg),
                      look: c.Button.Looks.BLANK,
                      size: c.Button.Sizes.NONE,
                      onClick: t,
                      innerClassName: b.closeButtonInner,
                      className: b.closeButton,
                      children: (0, a.jsx)(c.XSmallIcon, {
                        size: "sm",
                        color: "currentColor",
                        className: b.closeIcon,
                      }),
                    }),
                  ],
                }),
                (0, a.jsxs)(c.ModalContent, {
                  className: b.modalContent,
                  children: [
                    (0, a.jsxs)("div", {
                      className: b.mainSection,
                      children: [
                        (0, a.jsx)("div", {
                          className: b.tipsSection,
                          children: h.map((n, e) =>
                            (0, a.jsxs)(
                              "div",
                              {
                                className: b.tipRow,
                                children: [
                                  (0, a.jsx)(c.Heading, {
                                    variant: "heading-md/semibold",
                                    color: "text-brand",
                                    className: b.tipNumber,
                                    children: e + 1,
                                  }),
                                  n,
                                ],
                              },
                              e,
                            ),
                          ),
                        }),
                        null != k ? k : null,
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)(c.Text, {
                          className: b.moreHeading,
                          variant: "eyebrow",
                          color: "header-secondary",
                          children: x.intl.string(x.t.K5FKtb),
                        }),
                        (0, a.jsx)("div", {
                          className: b.tipsSection,
                          children: p,
                        }),
                      ],
                    }),
                    (0, a.jsx)(u.Z, {
                      channelId: _,
                      warningId: v,
                      senderId: g,
                      safetyWarning: j,
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
    },
    636749: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return g;
        },
      });
      var a = t(200651),
        o = t(192379),
        s = t(120356),
        i = t.n(s),
        c = t(481060),
        l = t(446183),
        r = t(677281),
        d = t(378298),
        u = t(359119),
        m = t(473092),
        x = t(388032),
        b = t(444016),
        _ = t(889284);
      function v() {
        return (0, a.jsxs)("div", {
          className: i()(_.toast, b.toast),
          children: [
            (0, a.jsx)(c.ShieldIcon, { color: c.tokens.colors.TEXT_BRAND }),
            (0, a.jsx)(c.Text, {
              className: _.__invalid_content,
              color: "header-primary",
              variant: "text-md/normal",
              children: x.intl.string(x.t["gd/Yqq"]),
            }),
          ],
        });
      }
      function g(n) {
        let { channelId: e, warningId: t, senderId: s, safetyWarning: _ } = n,
          g = o.useMemo(
            () => (null == _ ? void 0 : _.feedback_type) === u.ny.UPVOTE,
            [_],
          ),
          N = o.useMemo(
            () => (null == _ ? void 0 : _.feedback_type) === u.ny.DOWNVOTE,
            [_],
          ),
          h = o.useCallback(
            (n, o) => {
              (null == _ ? void 0 : _.feedback_type) !== n &&
                ((0, d.Ms)(e, t, n),
                (0, c.showToast)(
                  (0, c.createToast)(
                    x.intl.string(x.t["gd/Yqq"]),
                    c.ToastType.CUSTOM,
                    { component: (0, a.jsx)(v, {}) },
                  ),
                ),
                (0, m.qc)({
                  channelId: e,
                  warningId: t,
                  senderId: s,
                  warningType: null == _ ? void 0 : _.type,
                  cta: o,
                }));
            },
            [_, e, t, s],
          );
        return (0, a.jsxs)("div", {
          className: b.feedback,
          children: [
            (0, a.jsx)(c.Text, {
              variant: "text-sm/medium",
              color: "text-normal",
              children: x.intl.string(x.t.L84yVl),
            }),
            (0, a.jsxs)("div", {
              className: b.buttonsContainer,
              children: [
                (0, a.jsx)(c.Clickable, {
                  className: i()([
                    b.buttonsBackground,
                    g ? b.buttonsBackgroundActive : b.buttonsBackgroundInactive,
                    { [b.disabled]: g },
                  ]),
                  onClick: () => h(u.ny.UPVOTE, m.NM.FEEDBACK_UPVOTE),
                  "aria-label": x.intl.string(x.t["2GrOCA"]),
                  children: (0, a.jsx)(r.Z, {
                    className: b.__invalid_buttonIcon,
                    color: "interactive-normal",
                  }),
                }),
                (0, a.jsx)(c.Clickable, {
                  className: i()([
                    b.buttonsBackground,
                    N ? b.buttonsBackgroundActive : b.buttonsBackgroundInactive,
                    { [b.disabled]: N },
                  ]),
                  onClick: () => h(u.ny.DOWNVOTE, m.NM.FEEDBACK_DOWNVOTE),
                  "aria-label": x.intl.string(x.t.COp9BA),
                  children: (0, a.jsx)(l.Z, {
                    className: b.__invalid_buttonIcon,
                    color: "interactive-normal",
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    672679: function (n, e, t) {
      n.exports = {
        modalHeader: "modalHeader_a193aa",
        modalHeaderText: "modalHeaderText_a193aa",
        modalContent: "modalContent_a193aa",
        closeButton: "closeButton_a193aa",
        closeButtonInner: "closeButtonInner_a193aa",
        closeIcon: "closeIcon_a193aa",
        moreHeading: "moreHeading_a193aa",
        mainSection: "mainSection_a193aa",
        tipsSection: "tipsSection_a193aa",
        tipRow: "tipRow_a193aa",
        tipNumber: "tipNumber_a193aa",
      };
    },
    444016: function (n, e, t) {
      n.exports = {
        feedback: "feedback_c12855",
        buttonsContainer: "buttonsContainer_c12855",
        toast: "toast_c12855",
        buttonsBackground: "buttonsBackground_c12855",
        disabled: "disabled_c12855",
        buttonsBackgroundActive: "buttonsBackgroundActive_c12855",
        buttonsBackgroundInactive: "buttonsBackgroundInactive_c12855",
      };
    },
  },
]);
//# sourceMappingURL=5648458a38cce01f5e18.js.map
