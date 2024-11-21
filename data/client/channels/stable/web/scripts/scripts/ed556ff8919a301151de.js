"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["95226"],
  {
    723422: function (t) {
      t.exports = "/assets/fdf821f100a4bc5ca536.jpg";
    },
    816960: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return p;
          },
        });
      var s = n(200651),
        a = n(192379),
        i = n(286379),
        o = n(399606),
        r = n(481060),
        l = n(87051),
        d = n(661824),
        c = n(797614),
        u = n(9156),
        x = n(621600),
        m = n(359119),
        h = n(473092),
        g = n(222914),
        N = n(134612),
        T = n(981631),
        _ = n(388032),
        b = n(899014);
      function p(t) {
        let {
            transitionState: e,
            onClose: n,
            handleBlock: p,
            channelId: v,
            warningId: j,
            senderId: A,
          } = t,
          C = () => {
            n();
          },
          B = (0, N.C2)();
        a.useEffect(() => {
          (0, h.MC)(T.rMx.SAFETY_WARNING_MODAL_VIEWED, {
            channelId: v,
            warningId: j,
            senderId: A,
            warningType: m.pj.STRANGER_DANGER,
          }),
            c.Z.increment({ name: i.V.SAFETY_WARNING_MODAL_VIEW });
        }, [v, j, A]);
        let y = (0, o.e7)([u.ZP], () => u.ZP.isChannelMuted(null, v));
        return (0, s.jsx)(r.ModalRoot, {
          transitionState: e,
          children: (0, s.jsxs)(r.Scroller, {
            style: { overflow: "hidden auto" },
            children: [
              (0, s.jsxs)(r.ModalHeader, {
                className: b.modalHeader,
                children: [
                  (0, s.jsxs)("div", {
                    className: b.modalHeaderText,
                    children: [
                      (0, s.jsx)(r.Text, {
                        variant: "eyebrow",
                        color: "status-positive-text",
                        children: _.intl.string(_.t.lyt43N),
                      }),
                      (0, s.jsx)(r.Heading, {
                        variant: "heading-xl/bold",
                        color: "status-positive-text",
                        children: _.intl.string(_.t.DJMZX1),
                      }),
                    ],
                  }),
                  (0, s.jsx)(r.Button, {
                    "aria-label": _.intl.string(_.t.cpT0Cg),
                    look: r.Button.Looks.BLANK,
                    size: r.Button.Sizes.NONE,
                    onClick: n,
                    innerClassName: b.closeButtonInner,
                    className: b.closeButton,
                    children: (0, s.jsx)(r.XSmallIcon, {
                      size: "sm",
                      color: "currentColor",
                      className: b.closeIcon,
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)(r.ModalContent, {
                className: b.modalContent,
                children: [
                  (0, s.jsx)("div", {
                    className: b.tipsSection,
                    children: B.map((t, e) =>
                      (0, s.jsxs)(
                        "div",
                        {
                          className: b.tipRow,
                          children: [
                            (0, s.jsx)(r.Heading, {
                              variant: "heading-md/semibold",
                              color: "text-brand",
                              className: b.tipNumber,
                              children: e + 1,
                            }),
                            (0, s.jsx)(r.Text, {
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
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)(r.Text, {
                        className: b.moreHeading,
                        variant: "eyebrow",
                        color: "header-secondary",
                        children: _.intl.string(_.t.K5FKtb),
                      }),
                      (0, s.jsxs)("div", {
                        className: b.tipsSection,
                        children: [
                          (0, s.jsxs)("div", {
                            className: b.safetyAction,
                            children: [
                              (0, s.jsxs)("div", {
                                className: b.safetyActionText,
                                children: [
                                  (0, s.jsx)(r.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    children: _.intl.string(_.t["UVp+4+"]),
                                  }),
                                  (0, s.jsx)(r.Text, {
                                    variant: "text-xs/medium",
                                    color: "header-secondary",
                                    children: _.intl.string(_.t.VS47BA),
                                  }),
                                ],
                              }),
                              (0, s.jsx)(r.Button, {
                                size: r.Button.Sizes.SMALL,
                                color: r.Button.Colors.PRIMARY,
                                "aria-label": _.intl.string(_.t["UVp+4+"]),
                                onClick: y
                                  ? () => {
                                      l.Z.updateChannelOverrideSettings(
                                        null,
                                        v,
                                        { muted: !1 },
                                        x.ZB.Unmuted,
                                      ),
                                        (0, r.showToast)(
                                          (0, r.createToast)(
                                            _.intl.string(_.t["A+N6lJ"]),
                                            r.ToastType.SUCCESS,
                                          ),
                                        ),
                                        (0, h.qc)({
                                          channelId: v,
                                          warningId: j,
                                          senderId: A,
                                          warningType: m.pj.STRANGER_DANGER,
                                          cta: h.NM.USER_MODAL_UNMUTE,
                                        });
                                    }
                                  : () => {
                                      l.Z.updateChannelOverrideSettings(
                                        null,
                                        v,
                                        { muted: !0 },
                                        x.ZB.Muted,
                                      ),
                                        (0, r.showToast)(
                                          (0, r.createToast)(
                                            _.intl.string(_.t.u3XBOD),
                                            r.ToastType.SUCCESS,
                                          ),
                                        ),
                                        (0, h.qc)({
                                          channelId: v,
                                          warningId: j,
                                          senderId: A,
                                          warningType: m.pj.STRANGER_DANGER,
                                          cta: h.NM.USER_MODAL_MUTE,
                                        });
                                    },
                                children: y
                                  ? _.intl.string(_.t["6QK4Hx"])
                                  : _.intl.string(_.t["UVp+4+"]),
                              }),
                            ],
                          }),
                          (0, s.jsx)(d.Z, {}),
                          (0, s.jsxs)("div", {
                            className: b.safetyAction,
                            children: [
                              (0, s.jsxs)("div", {
                                className: b.safetyActionText,
                                children: [
                                  (0, s.jsx)(r.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    children: _.intl.string(_.t["5QYPOz"]),
                                  }),
                                  (0, s.jsx)(r.Text, {
                                    variant: "text-xs/medium",
                                    color: "header-secondary",
                                    children: _.intl.string(_.t.OWoSUV),
                                  }),
                                ],
                              }),
                              (0, s.jsx)(r.Button, {
                                size: r.Button.Sizes.SMALL,
                                color: r.Button.Colors.RED,
                                "aria-label": _.intl.string(_.t.ie0QdH),
                                onClick: () => {
                                  C(), p();
                                },
                                children: _.intl.string(_.t.ie0QdH),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)(g.Z, { channelId: v, warningId: j, senderId: A }),
                ],
              }),
            ],
          }),
        });
      }
    },
    222914: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return _;
        },
      });
      var s = n(200651),
        a = n(192379),
        i = n(120356),
        o = n.n(i),
        r = n(399606),
        l = n(481060),
        d = n(446183),
        c = n(677281),
        u = n(378298),
        x = n(359119),
        m = n(473092),
        h = n(388032),
        g = n(488385),
        N = n(482617);
      function T() {
        return (0, s.jsxs)("div", {
          className: o()(N.toast, g.toast),
          children: [
            (0, s.jsx)(l.ShieldIcon, { color: l.tokens.colors.TEXT_BRAND }),
            (0, s.jsx)(l.Text, {
              className: N.__invalid_content,
              color: "header-primary",
              variant: "text-md/normal",
              children: h.intl.string(h.t["gd/Yqq"]),
            }),
          ],
        });
      }
      function _(t) {
        let { channelId: e, warningId: n, senderId: i } = t,
          N = (0, r.e7)([x.ZP], () => x.ZP.getChannelSafetyWarning(e, n)),
          _ = a.useMemo(
            () => (null == N ? void 0 : N.feedback_type) === x.ny.UPVOTE,
            [N],
          ),
          b = a.useMemo(
            () => (null == N ? void 0 : N.feedback_type) === x.ny.DOWNVOTE,
            [N],
          ),
          p = a.useCallback(
            (t, a) => {
              (null == N ? void 0 : N.feedback_type) !== t &&
                ((0, u.Ms)(e, n, t),
                (0, l.showToast)(
                  (0, l.createToast)(
                    h.intl.string(h.t["gd/Yqq"]),
                    l.ToastType.CUSTOM,
                    { component: (0, s.jsx)(T, {}) },
                  ),
                ),
                (0, m.qc)({
                  channelId: e,
                  warningId: n,
                  senderId: i,
                  warningType: x.pj.STRANGER_DANGER,
                  cta: a,
                }));
            },
            [N, e, n, i],
          );
        return (0, s.jsxs)("div", {
          className: g.feedback,
          children: [
            (0, s.jsx)(l.Text, {
              variant: "text-sm/medium",
              color: "text-normal",
              children: h.intl.string(h.t.L84yVl),
            }),
            (0, s.jsxs)("div", {
              className: g.buttonsContainer,
              children: [
                (0, s.jsx)(l.Clickable, {
                  className: o()([
                    g.buttonsBackground,
                    _ ? g.buttonsBackgroundActive : g.buttonsBackgroundInactive,
                    { [g.disabled]: _ },
                  ]),
                  onClick: () => p(x.ny.UPVOTE, m.NM.FEEDBACK_UPVOTE),
                  "aria-label": h.intl.string(h.t["2GrOCA"]),
                  children: (0, s.jsx)(c.Z, {
                    className: g.__invalid_buttonIcon,
                    color: "interactive-normal",
                  }),
                }),
                (0, s.jsx)(l.Clickable, {
                  className: o()([
                    g.buttonsBackground,
                    b ? g.buttonsBackgroundActive : g.buttonsBackgroundInactive,
                    { [g.disabled]: b },
                  ]),
                  onClick: () => p(x.ny.DOWNVOTE, m.NM.FEEDBACK_DOWNVOTE),
                  "aria-label": h.intl.string(h.t.COp9BA),
                  children: (0, s.jsx)(d.Z, {
                    className: g.__invalid_buttonIcon,
                    color: "interactive-normal",
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    899014: function (t, e, n) {
      t.exports = {
        modalHeader: "modalHeader_d493e9",
        modalHeaderText: "modalHeaderText_d493e9",
        modalContent: "modalContent_d493e9",
        closeButton: "closeButton_d493e9",
        closeButtonInner: "closeButtonInner_d493e9",
        closeIcon: "closeIcon_d493e9",
        moreHeading: "moreHeading_d493e9",
        safetyAction: "safetyAction_d493e9",
        safetyActionText: "safetyActionText_d493e9",
        tipsSection: "tipsSection_d493e9",
        tipRow: "tipRow_d493e9",
        tipNumber: "tipNumber_d493e9",
      };
    },
    488385: function (t, e, n) {
      t.exports = {
        feedback: "feedback_e9d9d0",
        buttonsContainer: "buttonsContainer_e9d9d0",
        toast: "toast_e9d9d0",
        buttonsBackground: "buttonsBackground_e9d9d0",
        disabled: "disabled_e9d9d0",
        buttonsBackgroundActive: "buttonsBackgroundActive_e9d9d0",
        buttonsBackgroundInactive: "buttonsBackgroundInactive_e9d9d0",
      };
    },
  },
]);
//# sourceMappingURL=ed556ff8919a301151de.js.map
