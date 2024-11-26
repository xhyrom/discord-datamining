"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["59385"],
  {
    723422: function (e) {
      e.exports = "/assets/fdf821f100a4bc5ca536.jpg";
    },
    480884: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var a = n(200651),
        o = n(192379),
        s = n(286379),
        i = n(399606),
        c = n(481060),
        l = n(797614),
        r = n(359119),
        d = n(473092),
        u = n(636749),
        m = n(981631),
        x = n(388032),
        b = n(636370);
      function _(e) {
        let {
            transitionState: t,
            onClose: n,
            channelId: _,
            warningId: v,
            senderId: g,
            description: h,
            safetyTips: p,
            actions: N,
          } = e,
          k = (0, i.e7)([r.ZP], () => r.ZP.getChannelSafetyWarning(_, v));
        return (
          o.useEffect(() => {
            (0, d.MC)(m.rMx.SAFETY_WARNING_MODAL_VIEWED, {
              channelId: _,
              warningId: v,
              senderId: g,
              warningType: null == k ? void 0 : k.type,
            }),
              l.Z.increment({ name: s.V.SAFETY_WARNING_MODAL_VIEW });
          }, [_, v, g, k]),
          (0, a.jsx)(c.ModalRoot, {
            transitionState: t,
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
                          children: h,
                        }),
                      ],
                    }),
                    (0, a.jsx)(c.Button, {
                      "aria-label": x.intl.string(x.t.cpT0Cg),
                      look: c.Button.Looks.BLANK,
                      size: c.Button.Sizes.NONE,
                      onClick: n,
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
                    (0, a.jsx)("div", {
                      className: b.tipsSection,
                      children: p.map((e, t) =>
                        (0, a.jsxs)(
                          "div",
                          {
                            className: b.tipRow,
                            children: [
                              (0, a.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-brand",
                                className: b.tipNumber,
                                children: t + 1,
                              }),
                              (0, a.jsx)(c.Text, {
                                variant: "text-sm/medium",
                                color: "header-secondary",
                                children: e,
                              }),
                            ],
                          },
                          t,
                        ),
                      ),
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
                          children: N,
                        }),
                      ],
                    }),
                    (0, a.jsx)(u.Z, {
                      channelId: _,
                      warningId: v,
                      senderId: g,
                      safetyWarning: k,
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
    },
    636749: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
      });
      var a = n(200651),
        o = n(192379),
        s = n(120356),
        i = n.n(s),
        c = n(481060),
        l = n(446183),
        r = n(677281),
        d = n(378298),
        u = n(359119),
        m = n(473092),
        x = n(388032),
        b = n(445587),
        _ = n(24343);
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
      function g(e) {
        let { channelId: t, warningId: n, senderId: s, safetyWarning: _ } = e,
          g = o.useMemo(
            () => (null == _ ? void 0 : _.feedback_type) === u.ny.UPVOTE,
            [_],
          ),
          h = o.useMemo(
            () => (null == _ ? void 0 : _.feedback_type) === u.ny.DOWNVOTE,
            [_],
          ),
          p = o.useCallback(
            (e, o) => {
              (null == _ ? void 0 : _.feedback_type) !== e &&
                ((0, d.Ms)(t, n, e),
                (0, c.showToast)(
                  (0, c.createToast)(
                    x.intl.string(x.t["gd/Yqq"]),
                    c.ToastType.CUSTOM,
                    { component: (0, a.jsx)(v, {}) },
                  ),
                ),
                (0, m.qc)({
                  channelId: t,
                  warningId: n,
                  senderId: s,
                  warningType: null == _ ? void 0 : _.type,
                  cta: o,
                }));
            },
            [_, t, n, s],
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
                  onClick: () => p(u.ny.UPVOTE, m.NM.FEEDBACK_UPVOTE),
                  "aria-label": x.intl.string(x.t["2GrOCA"]),
                  children: (0, a.jsx)(r.Z, {
                    className: b.__invalid_buttonIcon,
                    color: "interactive-normal",
                  }),
                }),
                (0, a.jsx)(c.Clickable, {
                  className: i()([
                    b.buttonsBackground,
                    h ? b.buttonsBackgroundActive : b.buttonsBackgroundInactive,
                    { [b.disabled]: h },
                  ]),
                  onClick: () => p(u.ny.DOWNVOTE, m.NM.FEEDBACK_DOWNVOTE),
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
    636370: function (e, t, n) {
      e.exports = {
        modalHeader: "modalHeader_a193aa",
        modalHeaderText: "modalHeaderText_a193aa",
        modalContent: "modalContent_a193aa",
        closeButton: "closeButton_a193aa",
        closeButtonInner: "closeButtonInner_a193aa",
        closeIcon: "closeIcon_a193aa",
        moreHeading: "moreHeading_a193aa",
        tipsSection: "tipsSection_a193aa",
        tipRow: "tipRow_a193aa",
        tipNumber: "tipNumber_a193aa",
      };
    },
    445587: function (e, t, n) {
      e.exports = {
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
//# sourceMappingURL=5b3c93dc48e2a511af60.js.map
