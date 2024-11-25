"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["95226"],
  {
    723422: function (e) {
      e.exports = "/assets/fdf821f100a4bc5ca536.jpg";
    },
    816960: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return y;
          },
        });
      var s = n(200651),
        i = n(192379),
        a = n(286379),
        o = n(399606),
        r = n(481060),
        l = n(87051),
        d = n(194359),
        c = n(661824),
        u = n(797614),
        x = n(922611),
        m = n(681678),
        g = n(699516),
        _ = n(9156),
        h = n(621600),
        N = n(359119),
        b = n(473092),
        v = n(222914),
        j = n(134612),
        p = n(981631),
        T = n(388032),
        A = n(350035);
      function y(e) {
        let {
            transitionState: t,
            onClose: n,
            handleBlock: y,
            channelId: B,
            warningId: E,
            senderId: k,
          } = e,
          R = (0, x.Do)({ location: "web_stranger_danger_more" }),
          { isIgnored: C, isBlocked: S } = (0, o.cj)(
            [g.Z],
            () => ({
              isIgnored: g.Z.isIgnored(k),
              isBlocked: g.Z.isBlocked(k),
            }),
            [k],
          ),
          f = () => {
            n();
          },
          M = i.useCallback(() => {
            (0, b.qc)({
              channelId: B,
              warningId: E,
              senderId: k,
              warningType: N.pj.STRANGER_DANGER,
              cta: b.NM.USER_MODAL_IGNORE,
            }),
              d.Z.ignoreUser(k, "web_stranger_danger_more", B);
          }, [B, E, k]),
          I = i.useCallback(() => {
            (0, b.qc)({
              channelId: B,
              warningId: E,
              senderId: k,
              warningType: N.pj.STRANGER_DANGER,
              cta: b.NM.USER_MODAL_UNIGNORE,
            }),
              d.Z.unignoreUser(k, "web_stranger_danger_more", B);
          }, [B, E, k]),
          O = (0, j.C2)();
        i.useEffect(() => {
          (0, b.MC)(p.rMx.SAFETY_WARNING_MODAL_VIEWED, {
            channelId: B,
            warningId: E,
            senderId: k,
            warningType: N.pj.STRANGER_DANGER,
          }),
            u.Z.increment({ name: a.V.SAFETY_WARNING_MODAL_VIEW });
        }, [B, E, k]);
        let D = (0, o.e7)([_.ZP], () => _.ZP.isChannelMuted(null, B));
        return (0, s.jsx)(r.ModalRoot, {
          transitionState: t,
          children: (0, s.jsxs)(r.Scroller, {
            style: { overflow: "hidden auto" },
            children: [
              (0, s.jsxs)(r.ModalHeader, {
                className: A.modalHeader,
                children: [
                  (0, s.jsxs)("div", {
                    className: A.modalHeaderText,
                    children: [
                      (0, s.jsx)(r.Text, {
                        variant: "eyebrow",
                        color: "status-positive-text",
                        children: T.intl.string(T.t.lyt43N),
                      }),
                      (0, s.jsx)(r.Heading, {
                        variant: "heading-xl/bold",
                        color: "status-positive-text",
                        children: T.intl.string(T.t.DJMZX1),
                      }),
                    ],
                  }),
                  (0, s.jsx)(r.Button, {
                    "aria-label": T.intl.string(T.t.cpT0Cg),
                    look: r.Button.Looks.BLANK,
                    size: r.Button.Sizes.NONE,
                    onClick: n,
                    innerClassName: A.closeButtonInner,
                    className: A.closeButton,
                    children: (0, s.jsx)(r.XSmallIcon, {
                      size: "sm",
                      color: "currentColor",
                      className: A.closeIcon,
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)(r.ModalContent, {
                className: A.modalContent,
                children: [
                  (0, s.jsx)("div", {
                    className: A.tipsSection,
                    children: O.map((e, t) =>
                      (0, s.jsxs)(
                        "div",
                        {
                          className: A.tipRow,
                          children: [
                            (0, s.jsx)(r.Heading, {
                              variant: "heading-md/semibold",
                              color: "text-brand",
                              className: A.tipNumber,
                              children: t + 1,
                            }),
                            (0, s.jsx)(r.Text, {
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
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)(r.Text, {
                        className: A.moreHeading,
                        variant: "eyebrow",
                        color: "header-secondary",
                        children: T.intl.string(T.t.K5FKtb),
                      }),
                      (0, s.jsxs)("div", {
                        className: A.tipsSection,
                        children: [
                          R &&
                            (0, s.jsxs)("div", {
                              className: A.safetyAction,
                              children: [
                                (0, s.jsxs)("div", {
                                  className: A.safetyActionText,
                                  children: [
                                    (0, s.jsx)(r.Text, {
                                      variant: "text-md/semibold",
                                      color: "header-primary",
                                      children: T.intl.string(T.t.avyV7O),
                                    }),
                                    (0, s.jsx)(r.Text, {
                                      variant: "text-xs/medium",
                                      color: "header-secondary",
                                      children: T.intl.string(T.t.naWE6e),
                                    }),
                                  ],
                                }),
                                (0, s.jsx)(r.Button, {
                                  size: r.Button.Sizes.SMALL,
                                  color: r.Button.Colors.PRIMARY,
                                  "aria-label": C
                                    ? T.intl.string(T.t["3SrzRU"])
                                    : T.intl.string(T.t.avyV7O),
                                  onClick: C ? I : M,
                                  disabled: S,
                                  children: C
                                    ? T.intl.string(T.t["3SrzRU"])
                                    : T.intl.string(T.t.avyV7O),
                                }),
                              ],
                            }),
                          !R &&
                            (0, s.jsxs)("div", {
                              className: A.safetyAction,
                              children: [
                                (0, s.jsxs)("div", {
                                  className: A.safetyActionText,
                                  children: [
                                    (0, s.jsx)(r.Text, {
                                      variant: "text-md/semibold",
                                      color: "header-primary",
                                      children: T.intl.string(T.t["UVp+4+"]),
                                    }),
                                    (0, s.jsx)(r.Text, {
                                      variant: "text-xs/medium",
                                      color: "header-secondary",
                                      children: T.intl.string(T.t.VS47BA),
                                    }),
                                  ],
                                }),
                                (0, s.jsx)(r.Button, {
                                  size: r.Button.Sizes.SMALL,
                                  color: r.Button.Colors.PRIMARY,
                                  "aria-label": D
                                    ? T.intl.string(T.t["6QK4Hx"])
                                    : T.intl.string(T.t["UVp+4+"]),
                                  onClick: D
                                    ? () => {
                                        l.Z.updateChannelOverrideSettings(
                                          null,
                                          B,
                                          { muted: !1 },
                                          h.ZB.Unmuted,
                                        ),
                                          m.Z.showUnmuteSuccessToast(k, B),
                                          (0, b.qc)({
                                            channelId: B,
                                            warningId: E,
                                            senderId: k,
                                            warningType: N.pj.STRANGER_DANGER,
                                            cta: b.NM.USER_MODAL_UNMUTE,
                                          });
                                      }
                                    : () => {
                                        l.Z.updateChannelOverrideSettings(
                                          null,
                                          B,
                                          { muted: !0 },
                                          h.ZB.Muted,
                                        ),
                                          m.Z.showMuteSuccessToast(k, B),
                                          (0, b.qc)({
                                            channelId: B,
                                            warningId: E,
                                            senderId: k,
                                            warningType: N.pj.STRANGER_DANGER,
                                            cta: b.NM.USER_MODAL_MUTE,
                                          });
                                      },
                                  children: D
                                    ? T.intl.string(T.t["6QK4Hx"])
                                    : T.intl.string(T.t["UVp+4+"]),
                                }),
                              ],
                            }),
                          (0, s.jsx)(c.Z, {}),
                          (0, s.jsxs)("div", {
                            className: A.safetyAction,
                            children: [
                              (0, s.jsxs)("div", {
                                className: A.safetyActionText,
                                children: [
                                  (0, s.jsx)(r.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    children: T.intl.string(T.t["5QYPOz"]),
                                  }),
                                  (0, s.jsx)(r.Text, {
                                    variant: "text-xs/medium",
                                    color: "header-secondary",
                                    children: T.intl.string(T.t.G08MKi),
                                  }),
                                ],
                              }),
                              (0, s.jsx)(r.Button, {
                                size: r.Button.Sizes.SMALL,
                                color: r.Button.Colors.RED,
                                "aria-label": T.intl.string(T.t.ie0QdH),
                                onClick: () => {
                                  f(), y();
                                },
                                disabled: S,
                                children: S
                                  ? T.intl.string(T.t.ot2tSk)
                                  : T.intl.string(T.t.ie0QdH),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)(v.Z, { channelId: B, warningId: E, senderId: k }),
                ],
              }),
            ],
          }),
        });
      }
    },
    222914: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return b;
        },
      });
      var s = n(200651),
        i = n(192379),
        a = n(120356),
        o = n.n(a),
        r = n(399606),
        l = n(481060),
        d = n(446183),
        c = n(677281),
        u = n(378298),
        x = n(359119),
        m = n(473092),
        g = n(388032),
        _ = n(199534),
        h = n(24343);
      function N() {
        return (0, s.jsxs)("div", {
          className: o()(h.toast, _.toast),
          children: [
            (0, s.jsx)(l.ShieldIcon, { color: l.tokens.colors.TEXT_BRAND }),
            (0, s.jsx)(l.Text, {
              className: h.__invalid_content,
              color: "header-primary",
              variant: "text-md/normal",
              children: g.intl.string(g.t["gd/Yqq"]),
            }),
          ],
        });
      }
      function b(e) {
        let { channelId: t, warningId: n, senderId: a } = e,
          h = (0, r.e7)([x.ZP], () => x.ZP.getChannelSafetyWarning(t, n)),
          b = i.useMemo(
            () => (null == h ? void 0 : h.feedback_type) === x.ny.UPVOTE,
            [h],
          ),
          v = i.useMemo(
            () => (null == h ? void 0 : h.feedback_type) === x.ny.DOWNVOTE,
            [h],
          ),
          j = i.useCallback(
            (e, i) => {
              (null == h ? void 0 : h.feedback_type) !== e &&
                ((0, u.Ms)(t, n, e),
                (0, l.showToast)(
                  (0, l.createToast)(
                    g.intl.string(g.t["gd/Yqq"]),
                    l.ToastType.CUSTOM,
                    { component: (0, s.jsx)(N, {}) },
                  ),
                ),
                (0, m.qc)({
                  channelId: t,
                  warningId: n,
                  senderId: a,
                  warningType: x.pj.STRANGER_DANGER,
                  cta: i,
                }));
            },
            [h, t, n, a],
          );
        return (0, s.jsxs)("div", {
          className: _.feedback,
          children: [
            (0, s.jsx)(l.Text, {
              variant: "text-sm/medium",
              color: "text-normal",
              children: g.intl.string(g.t.L84yVl),
            }),
            (0, s.jsxs)("div", {
              className: _.buttonsContainer,
              children: [
                (0, s.jsx)(l.Clickable, {
                  className: o()([
                    _.buttonsBackground,
                    b ? _.buttonsBackgroundActive : _.buttonsBackgroundInactive,
                    { [_.disabled]: b },
                  ]),
                  onClick: () => j(x.ny.UPVOTE, m.NM.FEEDBACK_UPVOTE),
                  "aria-label": g.intl.string(g.t["2GrOCA"]),
                  children: (0, s.jsx)(c.Z, {
                    className: _.__invalid_buttonIcon,
                    color: "interactive-normal",
                  }),
                }),
                (0, s.jsx)(l.Clickable, {
                  className: o()([
                    _.buttonsBackground,
                    v ? _.buttonsBackgroundActive : _.buttonsBackgroundInactive,
                    { [_.disabled]: v },
                  ]),
                  onClick: () => j(x.ny.DOWNVOTE, m.NM.FEEDBACK_DOWNVOTE),
                  "aria-label": g.intl.string(g.t.COp9BA),
                  children: (0, s.jsx)(d.Z, {
                    className: _.__invalid_buttonIcon,
                    color: "interactive-normal",
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    350035: function (e, t, n) {
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
    199534: function (e, t, n) {
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
//# sourceMappingURL=495f0f6e69f8bd8b9f6e.js.map
