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
            return v;
          },
        });
      var a = t(200651),
        o = t(192379),
        s = t(286379),
        c = t(399606),
        l = t(481060),
        i = t(797614),
        r = t(819557),
        d = t(138201),
        u = t(359119),
        m = t(473092),
        x = t(636749),
        b = t(981631),
        _ = t(388032),
        g = t(636370);
      function v(n) {
        let {
            transitionState: e,
            onClose: t,
            channelId: v,
            warningId: h,
            senderId: k,
            description: N,
            safetyTipRows: j,
            actionRows: B,
            learnMore: T,
          } = n,
          f = (0, c.e7)([u.ZP], () => u.ZP.getChannelSafetyWarning(v, h));
        return (
          o.useEffect(() => {
            (0, m.MC)(b.rMx.SAFETY_WARNING_MODAL_VIEWED, {
              channelId: v,
              warningId: h,
              senderId: k,
              warningType: null == f ? void 0 : f.type,
            }),
              i.Z.increment({ name: s.V.SAFETY_WARNING_MODAL_VIEW });
          }, [v, h, k, f]),
          (0, a.jsx)(l.ModalRoot, {
            transitionState: e,
            children: (0, a.jsxs)(l.Scroller, {
              style: { overflow: "hidden auto" },
              children: [
                (0, a.jsxs)(l.ModalHeader, {
                  className: g.modalHeader,
                  children: [
                    (0, a.jsxs)("div", {
                      className: g.modalHeaderText,
                      children: [
                        (0, a.jsx)(l.Text, {
                          variant: "eyebrow",
                          color: "status-positive-text",
                          children: _.intl.string(_.t.lyt43N),
                        }),
                        (0, a.jsx)(l.Heading, {
                          variant: "heading-xl/bold",
                          color: "status-positive-text",
                          children: N,
                        }),
                      ],
                    }),
                    (0, a.jsx)(l.Button, {
                      "aria-label": _.intl.string(_.t.cpT0Cg),
                      look: l.Button.Looks.BLANK,
                      size: l.Button.Sizes.NONE,
                      onClick: t,
                      innerClassName: g.closeButtonInner,
                      className: g.closeButton,
                      children: (0, a.jsx)(l.XSmallIcon, {
                        size: "sm",
                        color: "currentColor",
                        className: g.closeIcon,
                      }),
                    }),
                  ],
                }),
                (0, a.jsxs)(l.ModalContent, {
                  className: g.modalContent,
                  children: [
                    (0, a.jsxs)("div", {
                      className: g.mainSection,
                      children: [
                        (0, a.jsx)(r.z, { children: j }),
                        null != T ? T : null,
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)(l.Text, {
                          className: g.moreHeading,
                          variant: "eyebrow",
                          color: "header-secondary",
                          children: _.intl.string(_.t.K5FKtb),
                        }),
                        (0, a.jsx)(d.rT, { children: B }),
                      ],
                    }),
                    (0, a.jsx)(x.Z, {
                      channelId: v,
                      warningId: h,
                      senderId: k,
                      safetyWarning: f,
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
          return v;
        },
      });
      var a = t(200651),
        o = t(192379),
        s = t(120356),
        c = t.n(s),
        l = t(481060),
        i = t(446183),
        r = t(677281),
        d = t(378298),
        u = t(359119),
        m = t(473092),
        x = t(388032),
        b = t(445587),
        _ = t(24343);
      function g() {
        return (0, a.jsxs)("div", {
          className: c()(_.toast, b.toast),
          children: [
            (0, a.jsx)(l.ShieldIcon, { color: l.tokens.colors.TEXT_BRAND }),
            (0, a.jsx)(l.Text, {
              className: _.__invalid_content,
              color: "header-primary",
              variant: "text-md/normal",
              children: x.intl.string(x.t["gd/Yqq"]),
            }),
          ],
        });
      }
      function v(n) {
        let { channelId: e, warningId: t, senderId: s, safetyWarning: _ } = n,
          v = o.useMemo(
            () => (null == _ ? void 0 : _.feedback_type) === u.ny.UPVOTE,
            [_],
          ),
          h = o.useMemo(
            () => (null == _ ? void 0 : _.feedback_type) === u.ny.DOWNVOTE,
            [_],
          ),
          k = o.useCallback(
            (n, o) => {
              (null == _ ? void 0 : _.feedback_type) !== n &&
                ((0, d.Ms)(e, t, n),
                (0, l.showToast)(
                  (0, l.createToast)(
                    x.intl.string(x.t["gd/Yqq"]),
                    l.ToastType.CUSTOM,
                    { component: (0, a.jsx)(g, {}) },
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
            (0, a.jsx)(l.Text, {
              variant: "text-sm/medium",
              color: "text-normal",
              children: x.intl.string(x.t.L84yVl),
            }),
            (0, a.jsxs)("div", {
              className: b.buttonsContainer,
              children: [
                (0, a.jsx)(l.Clickable, {
                  className: c()([
                    b.buttonsBackground,
                    v ? b.buttonsBackgroundActive : b.buttonsBackgroundInactive,
                    { [b.disabled]: v },
                  ]),
                  onClick: () => k(u.ny.UPVOTE, m.NM.FEEDBACK_UPVOTE),
                  "aria-label": x.intl.string(x.t["2GrOCA"]),
                  children: (0, a.jsx)(r.Z, {
                    className: b.__invalid_buttonIcon,
                    color: "interactive-normal",
                  }),
                }),
                (0, a.jsx)(l.Clickable, {
                  className: c()([
                    b.buttonsBackground,
                    h ? b.buttonsBackgroundActive : b.buttonsBackgroundInactive,
                    { [b.disabled]: h },
                  ]),
                  onClick: () => k(u.ny.DOWNVOTE, m.NM.FEEDBACK_DOWNVOTE),
                  "aria-label": x.intl.string(x.t.COp9BA),
                  children: (0, a.jsx)(i.Z, {
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
    636370: function (n, e, t) {
      n.exports = {
        modalHeader: "modalHeader_a193aa",
        modalHeaderText: "modalHeaderText_a193aa",
        modalContent: "modalContent_a193aa",
        closeButton: "closeButton_a193aa",
        closeButtonInner: "closeButtonInner_a193aa",
        closeIcon: "closeIcon_a193aa",
        moreHeading: "moreHeading_a193aa",
        mainSection: "mainSection_a193aa",
      };
    },
    445587: function (n, e, t) {
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
//# sourceMappingURL=a27de703880c77c74379.js.map
