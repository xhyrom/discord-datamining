"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["59385"],
  {
    723422: function (t) {
      t.exports = "/assets/fdf821f100a4bc5ca536.jpg";
    },
    480884: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return v;
          },
        });
      var a = n(200651),
        o = n(192379),
        s = n(286379),
        i = n(399606),
        c = n(481060),
        l = n(661824),
        r = n(797614),
        d = n(359119),
        u = n(473092),
        m = n(636749),
        x = n(981631),
        b = n(388032),
        h = n(636370);
      function v(t) {
        let {
            transitionState: e,
            onClose: n,
            channelId: v,
            warningId: _,
            senderId: g,
            description: p,
            safetyTips: N,
            actions: j,
          } = t,
          k = (0, i.e7)([d.ZP], () => d.ZP.getChannelSafetyWarning(v, _));
        return (
          o.useEffect(() => {
            (0, u.MC)(x.rMx.SAFETY_WARNING_MODAL_VIEWED, {
              channelId: v,
              warningId: _,
              senderId: g,
              warningType: null == k ? void 0 : k.type,
            }),
              r.Z.increment({ name: s.V.SAFETY_WARNING_MODAL_VIEW });
          }, [v, _, g, k]),
          (0, a.jsx)(c.ModalRoot, {
            transitionState: e,
            children: (0, a.jsxs)(c.Scroller, {
              style: { overflow: "hidden auto" },
              children: [
                (0, a.jsxs)(c.ModalHeader, {
                  className: h.modalHeader,
                  children: [
                    (0, a.jsxs)("div", {
                      className: h.modalHeaderText,
                      children: [
                        (0, a.jsx)(c.Text, {
                          variant: "eyebrow",
                          color: "status-positive-text",
                          children: b.intl.string(b.t.lyt43N),
                        }),
                        (0, a.jsx)(c.Heading, {
                          variant: "heading-xl/bold",
                          color: "status-positive-text",
                          children: p,
                        }),
                      ],
                    }),
                    (0, a.jsx)(c.Button, {
                      "aria-label": b.intl.string(b.t.cpT0Cg),
                      look: c.Button.Looks.BLANK,
                      size: c.Button.Sizes.NONE,
                      onClick: n,
                      innerClassName: h.closeButtonInner,
                      className: h.closeButton,
                      children: (0, a.jsx)(c.XSmallIcon, {
                        size: "sm",
                        color: "currentColor",
                        className: h.closeIcon,
                      }),
                    }),
                  ],
                }),
                (0, a.jsxs)(c.ModalContent, {
                  className: h.modalContent,
                  children: [
                    (0, a.jsx)("div", {
                      className: h.tipsSection,
                      children: N.map((t, e) =>
                        (0, a.jsxs)(
                          "div",
                          {
                            className: h.tipRow,
                            children: [
                              (0, a.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-brand",
                                className: h.tipNumber,
                                children: e + 1,
                              }),
                              (0, a.jsx)(c.Text, {
                                variant: "text-sm/medium",
                                color: "header-secondary",
                                children: t,
                              }),
                            ],
                          },
                          e,
                        ),
                      ),
                    }),
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)(c.Text, {
                          className: h.moreHeading,
                          variant: "eyebrow",
                          color: "header-secondary",
                          children: b.intl.string(b.t.K5FKtb),
                        }),
                        (0, a.jsx)("div", {
                          className: h.tipsSection,
                          children: j.map((t, e) => {
                            var n;
                            return (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsxs)("div", {
                                  className: h.safetyAction,
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className: h.safetyActionText,
                                      children: [
                                        (0, a.jsx)(c.Text, {
                                          variant: "text-md/semibold",
                                          color: "header-primary",
                                          children: t.title,
                                        }),
                                        (0, a.jsx)(c.Text, {
                                          variant: "text-xs/medium",
                                          color: "header-secondary",
                                          children: t.description,
                                        }),
                                      ],
                                    }),
                                    (0, a.jsx)(c.Button, {
                                      size: c.Button.Sizes.SMALL,
                                      color:
                                        null !== (n = t.button.color) &&
                                        void 0 !== n
                                          ? n
                                          : c.Button.Colors.PRIMARY,
                                      "aria-label": t.button.title,
                                      onClick: t.button.onClick,
                                      children: t.button.title,
                                    }),
                                  ],
                                }),
                                e < j.length - 1 ? (0, a.jsx)(l.Z, {}) : null,
                              ],
                            });
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)(m.Z, {
                      channelId: v,
                      warningId: _,
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
    636749: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return _;
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
        h = n(24343);
      function v() {
        return (0, a.jsxs)("div", {
          className: i()(h.toast, b.toast),
          children: [
            (0, a.jsx)(c.ShieldIcon, { color: c.tokens.colors.TEXT_BRAND }),
            (0, a.jsx)(c.Text, {
              className: h.__invalid_content,
              color: "header-primary",
              variant: "text-md/normal",
              children: x.intl.string(x.t["gd/Yqq"]),
            }),
          ],
        });
      }
      function _(t) {
        let { channelId: e, warningId: n, senderId: s, safetyWarning: h } = t,
          _ = o.useMemo(
            () => (null == h ? void 0 : h.feedback_type) === u.ny.UPVOTE,
            [h],
          ),
          g = o.useMemo(
            () => (null == h ? void 0 : h.feedback_type) === u.ny.DOWNVOTE,
            [h],
          ),
          p = o.useCallback(
            (t, o) => {
              (null == h ? void 0 : h.feedback_type) !== t &&
                ((0, d.Ms)(e, n, t),
                (0, c.showToast)(
                  (0, c.createToast)(
                    x.intl.string(x.t["gd/Yqq"]),
                    c.ToastType.CUSTOM,
                    { component: (0, a.jsx)(v, {}) },
                  ),
                ),
                (0, m.qc)({
                  channelId: e,
                  warningId: n,
                  senderId: s,
                  warningType: null == h ? void 0 : h.type,
                  cta: o,
                }));
            },
            [h, e, n, s],
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
                    _ ? b.buttonsBackgroundActive : b.buttonsBackgroundInactive,
                    { [b.disabled]: _ },
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
                    g ? b.buttonsBackgroundActive : b.buttonsBackgroundInactive,
                    { [b.disabled]: g },
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
    636370: function (t, e, n) {
      t.exports = {
        modalHeader: "modalHeader_a193aa",
        modalHeaderText: "modalHeaderText_a193aa",
        modalContent: "modalContent_a193aa",
        closeButton: "closeButton_a193aa",
        closeButtonInner: "closeButtonInner_a193aa",
        closeIcon: "closeIcon_a193aa",
        moreHeading: "moreHeading_a193aa",
        safetyAction: "safetyAction_a193aa",
        safetyActionText: "safetyActionText_a193aa",
        tipsSection: "tipsSection_a193aa",
        tipRow: "tipRow_a193aa",
        tipNumber: "tipNumber_a193aa",
      };
    },
    445587: function (t, e, n) {
      t.exports = {
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
//# sourceMappingURL=6ce524cb95d49a67ff41.js.map
