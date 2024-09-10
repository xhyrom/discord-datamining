"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["95226"],
  {
    723422: function (e) {
      e.exports = "/assets/fdf821f100a4bc5ca536.jpg";
    },
    816960: function (e, s, t) {
      t.r(s),
        t.d(s, {
          default: function () {
            return M;
          },
        });
      var a = t(735250),
        n = t(470079),
        o = t(286379),
        i = t(399606),
        d = t(481060),
        c = t(92114),
        r = t(661824),
        l = t(797614),
        _ = t(9156),
        N = t(621600),
        E = t(359119),
        R = t(473092),
        u = t(222914),
        T = t(134612),
        A = t(981631),
        m = t(689938),
        x = t(899014);
      function M(e) {
        let {
            transitionState: s,
            onClose: t,
            handleBlock: M,
            channelId: S,
            warningId: h,
            senderId: g,
          } = e,
          b = () => {
            t();
          },
          C = (0, T.C2)();
        n.useEffect(() => {
          (0, R.MC)(A.rMx.SAFETY_WARNING_MODAL_VIEWED, {
            channelId: S,
            warningId: h,
            senderId: g,
            warningType: E.pj.STRANGER_DANGER,
          }),
            l.Z.increment({ name: o.V.SAFETY_WARNING_MODAL_VIEW });
        }, [S, h, g]);
        let G = (0, i.e7)([_.ZP], () => _.ZP.isChannelMuted(null, S));
        return (0, a.jsx)(d.ModalRoot, {
          transitionState: s,
          children: (0, a.jsxs)(d.Scroller, {
            style: { overflow: "hidden auto" },
            children: [
              (0, a.jsxs)(d.ModalHeader, {
                className: x.modalHeader,
                children: [
                  (0, a.jsxs)("div", {
                    className: x.modalHeaderText,
                    children: [
                      (0, a.jsx)(d.Text, {
                        variant: "eyebrow",
                        color: "status-positive-text",
                        children: m.Z.Messages.STRANGER_DANGER_TIPS_HEADER,
                      }),
                      (0, a.jsx)(d.Heading, {
                        variant: "heading-xl/bold",
                        color: "status-positive-text",
                        children: m.Z.Messages.STRANGER_DANGER_TIPS_DESCRIPTION,
                      }),
                    ],
                  }),
                  (0, a.jsx)(d.Button, {
                    "aria-label": m.Z.Messages.CLOSE,
                    look: d.Button.Looks.BLANK,
                    size: d.Button.Sizes.NONE,
                    onClick: t,
                    innerClassName: x.closeButtonInner,
                    className: x.closeButton,
                    children: (0, a.jsx)(d.XSmallIcon, {
                      size: "sm",
                      color: "currentColor",
                      className: x.closeIcon,
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)(d.ModalContent, {
                className: x.modalContent,
                children: [
                  (0, a.jsx)("div", {
                    className: x.tipsSection,
                    children: C.map((e, s) =>
                      (0, a.jsxs)(
                        "div",
                        {
                          className: x.tipRow,
                          children: [
                            (0, a.jsx)(d.Heading, {
                              variant: "heading-md/semibold",
                              color: "text-brand",
                              className: x.tipNumber,
                              children: s + 1,
                            }),
                            (0, a.jsx)(d.Text, {
                              variant: "text-sm/medium",
                              color: "header-secondary",
                              children: e,
                            }),
                          ],
                        },
                        s,
                      ),
                    ),
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)(d.Text, {
                        className: x.moreHeading,
                        variant: "eyebrow",
                        color: "header-secondary",
                        children: m.Z.Messages.STRANGER_DANGER_MORE_HEADER,
                      }),
                      (0, a.jsxs)("div", {
                        className: x.tipsSection,
                        children: [
                          (0, a.jsxs)("div", {
                            className: x.safetyAction,
                            children: [
                              (0, a.jsxs)("div", {
                                className: x.safetyActionText,
                                children: [
                                  (0, a.jsx)(d.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    children:
                                      m.Z.Messages.STRANGER_DANGER_MORE_MUTE,
                                  }),
                                  (0, a.jsx)(d.Text, {
                                    variant: "text-xs/medium",
                                    color: "header-secondary",
                                    children:
                                      m.Z.Messages
                                        .STRANGER_DANGER_MORE_MUTE_DESCRIPTION,
                                  }),
                                ],
                              }),
                              (0, a.jsx)(d.Button, {
                                size: d.Button.Sizes.SMALL,
                                color: d.Button.Colors.PRIMARY,
                                "aria-label":
                                  m.Z.Messages.STRANGER_DANGER_MORE_MUTE,
                                onClick: G
                                  ? () => {
                                      c.Z.updateChannelOverrideSettings(
                                        null,
                                        S,
                                        { muted: !1 },
                                        N.ZB.Unmuted,
                                      ),
                                        (0, d.showToast)(
                                          (0, d.createToast)(
                                            m.Z.Messages
                                              .STRANGER_DANGER_UNMUTE_CONFIRM,
                                            d.ToastType.SUCCESS,
                                          ),
                                        ),
                                        (0, R.qc)({
                                          channelId: S,
                                          warningId: h,
                                          senderId: g,
                                          warningType: E.pj.STRANGER_DANGER,
                                          cta: R.NM.USER_MODAL_UNMUTE,
                                        });
                                    }
                                  : () => {
                                      c.Z.updateChannelOverrideSettings(
                                        null,
                                        S,
                                        { muted: !0 },
                                        N.ZB.Muted,
                                      ),
                                        (0, d.showToast)(
                                          (0, d.createToast)(
                                            m.Z.Messages
                                              .STRANGER_DANGER_MUTE_CONFIRM,
                                            d.ToastType.SUCCESS,
                                          ),
                                        ),
                                        (0, R.qc)({
                                          channelId: S,
                                          warningId: h,
                                          senderId: g,
                                          warningType: E.pj.STRANGER_DANGER,
                                          cta: R.NM.USER_MODAL_MUTE,
                                        });
                                    },
                                children: G
                                  ? m.Z.Messages.STRANGER_DANGER_MORE_UNMUTE
                                  : m.Z.Messages.STRANGER_DANGER_MORE_MUTE,
                              }),
                            ],
                          }),
                          (0, a.jsx)(r.Z, {}),
                          (0, a.jsxs)("div", {
                            className: x.safetyAction,
                            children: [
                              (0, a.jsxs)("div", {
                                className: x.safetyActionText,
                                children: [
                                  (0, a.jsx)(d.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    children:
                                      m.Z.Messages.STRANGER_DANGER_MORE_BLOCK,
                                  }),
                                  (0, a.jsx)(d.Text, {
                                    variant: "text-xs/medium",
                                    color: "header-secondary",
                                    children:
                                      m.Z.Messages
                                        .STRANGER_DANGER_MORE_BLOCK_DESCRIPTION,
                                  }),
                                ],
                              }),
                              (0, a.jsx)(d.Button, {
                                size: d.Button.Sizes.SMALL,
                                color: d.Button.Colors.RED,
                                "aria-label":
                                  m.Z.Messages.STRANGER_DANGER_BANNER_BLOCK,
                                onClick: () => {
                                  b(), M();
                                },
                                children:
                                  m.Z.Messages.STRANGER_DANGER_BANNER_BLOCK,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(u.Z, { channelId: S, warningId: h, senderId: g }),
                ],
              }),
            ],
          }),
        });
      }
    },
    222914: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return m;
        },
      });
      var a = t(735250),
        n = t(470079),
        o = t(120356),
        i = t.n(o),
        d = t(399606),
        c = t(481060),
        r = t(446183),
        l = t(677281),
        _ = t(378298),
        N = t(359119),
        E = t(473092),
        R = t(689938),
        u = t(488385),
        T = t(482617);
      function A() {
        return (0, a.jsxs)("div", {
          className: i()(T.toast, u.toast),
          children: [
            (0, a.jsx)(c.ShieldIcon, { color: c.tokens.colors.TEXT_BRAND }),
            (0, a.jsx)(c.Text, {
              className: T.__invalid_content,
              color: "header-primary",
              variant: "text-md/normal",
              children: R.Z.Messages.STRANGER_DANGER_FEEDBACK_CONFIRM,
            }),
          ],
        });
      }
      function m(e) {
        let { channelId: s, warningId: t, senderId: o } = e,
          T = (0, d.e7)([N.ZP], () => N.ZP.getChannelSafetyWarning(s, t)),
          m = n.useMemo(
            () => (null == T ? void 0 : T.feedback_type) === N.ny.UPVOTE,
            [T],
          ),
          x = n.useMemo(
            () => (null == T ? void 0 : T.feedback_type) === N.ny.DOWNVOTE,
            [T],
          ),
          M = n.useCallback(
            (e, n) => {
              (null == T ? void 0 : T.feedback_type) !== e &&
                ((0, _.Ms)(s, t, e),
                (0, c.showToast)(
                  (0, c.createToast)(
                    R.Z.Messages.STRANGER_DANGER_FEEDBACK_CONFIRM,
                    c.ToastType.CUSTOM,
                    { component: (0, a.jsx)(A, {}) },
                  ),
                ),
                (0, E.qc)({
                  channelId: s,
                  warningId: t,
                  senderId: o,
                  warningType: N.pj.STRANGER_DANGER,
                  cta: n,
                }));
            },
            [T, s, t, o],
          );
        return (0, a.jsxs)("div", {
          className: u.feedback,
          children: [
            (0, a.jsx)(c.Text, {
              variant: "text-sm/medium",
              color: "text-normal",
              children: R.Z.Messages.STRANGER_DANGER_WAS_THIS_HELPFUL,
            }),
            (0, a.jsxs)("div", {
              className: u.buttonsContainer,
              children: [
                (0, a.jsx)(c.Clickable, {
                  className: i()([
                    u.buttonsBackground,
                    m ? u.buttonsBackgroundActive : u.buttonsBackgroundInactive,
                    { [u.disabled]: m },
                  ]),
                  onClick: () => M(N.ny.UPVOTE, E.NM.FEEDBACK_UPVOTE),
                  "aria-label": R.Z.Messages.STRANGER_DANGER_THUMBS_UP_A11Y,
                  children: (0, a.jsx)(l.Z, {
                    className: u.__invalid_buttonIcon,
                    color: "interactive-normal",
                  }),
                }),
                (0, a.jsx)(c.Clickable, {
                  className: i()([
                    u.buttonsBackground,
                    x ? u.buttonsBackgroundActive : u.buttonsBackgroundInactive,
                    { [u.disabled]: x },
                  ]),
                  onClick: () => M(N.ny.DOWNVOTE, E.NM.FEEDBACK_DOWNVOTE),
                  "aria-label": R.Z.Messages.STRANGER_DANGER_THUMBS_DOWN_A11Y,
                  children: (0, a.jsx)(r.Z, {
                    className: u.__invalid_buttonIcon,
                    color: "interactive-normal",
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    899014: function (e, s, t) {
      e.exports = {
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
    488385: function (e, s, t) {
      e.exports = {
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
//# sourceMappingURL=61db08b7e33841639138.js.map
