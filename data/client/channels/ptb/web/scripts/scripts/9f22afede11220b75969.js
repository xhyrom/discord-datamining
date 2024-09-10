"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["89650"],
  {
    446292: function (e) {
      e.exports = "/assets/3fb54283c01119458138.png";
    },
    941362: function (e, t, s) {
      s.d(t, {
        q: function () {
          return a;
        },
      });
      var T = s(442837),
        o = s(375954);
      let a = (e) =>
        (0, T.e7)([o.Z], () => {
          var t;
          return null !== (t = o.Z.getLastNonCurrentUserMessage(e)) &&
            void 0 !== t
            ? t
            : o.Z.getLastMessage(e);
        });
    },
    423932: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return a;
        },
      });
      var T = s(735250);
      s(470079);
      var o = s(481060);
      function a(e) {
        (0, o.openModalLazy)(
          async () => {
            let { default: e } = await s.e("76815").then(s.bind(s, 336977));
            return (t) => (0, T.jsx)(e, { ...t });
          },
          { onCloseCallback: e, backdropStyle: o.BackdropStyles.BLUR },
        );
      }
    },
    353672: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return _;
        },
      });
      var T = s(735250);
      s(470079);
      var o = s(120356),
        a = s.n(o),
        n = s(481060),
        l = s(32501);
      function _(e) {
        let { tips: t, className: s, headerText: o } = e;
        return (0, T.jsxs)("div", {
          className: a()(l.tipsSection, s),
          children: [
            (0, T.jsx)("div", {
              className: l.tipsHeader,
              children: (0, T.jsx)(n.Heading, {
                variant: "heading-lg/bold",
                className: l.headerText,
                children: o,
              }),
            }),
            (0, T.jsx)("ul", {
              className: l.tipsList,
              children: t.map((e, t) =>
                (0, T.jsxs)(
                  "li",
                  {
                    className: l.tipRow,
                    children: [
                      (0, T.jsx)(n.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-brand",
                        className: l.tipNumber,
                        children: t + 1,
                      }),
                      (0, T.jsx)(n.Text, {
                        variant: "text-sm/medium",
                        children: e,
                      }),
                    ],
                  },
                  "safety-tips-".concat(t),
                ),
              ),
            }),
          ],
        });
      }
    },
    419672: function (e, t, s) {
      s(47120);
      var T = s(735250),
        o = s(470079),
        a = s(481060),
        n = s(230711),
        l = s(187819),
        _ = s(63063),
        i = s(378298),
        r = s(584656),
        S = s(993750),
        E = s(981631),
        c = s(526761),
        O = s(689938),
        d = s(681789);
      t.Z = function (e) {
        let { onClose: t, channelId: s } = e,
          [u, A] = o.useState(!1),
          I = (0, l._p)({
            location: "safety-tools-about-safety-alerts",
            autoTrackExposure: !1,
          }),
          L = o.useCallback(() => {
            n.Z.open(E.oAB.PRIVACY_AND_SAFETY, null, {
              scrollPosition: I
                ? c.to.DM_SAFETY_ALERTS_V2
                : c.to.DM_SAFETY_ALERTS,
            }),
              t();
          }, [I, t]),
          N = o.useCallback(() => {
            !u &&
              (A(!0),
              (0, i.Uj)(s)
                .then(() => {
                  t(),
                    (0, r.t)({
                      text: O.Z.Messages
                        .SAFETY_TOOLS_REPORT_FALSE_POSITIVE_SUCCESS,
                      id: "safety-tools-report-false-positive",
                    });
                })
                .catch(() => {
                  A(!1),
                    (0, a.showToast)(
                      (0, a.createToast)(
                        O.Z.Messages.ERROR_GENERIC_TITLE,
                        a.ToastType.FAILURE,
                      ),
                    );
                }));
          }, [s, t, u]);
        return (0, T.jsxs)(S.Z, {
          style: d.wrapperStyle,
          children: [
            (0, T.jsx)(a.Text, {
              variant: "text-md/medium",
              children:
                O.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_DESCRIPTION.format(
                  { learnMoreLink: _.Z.getArticleURL(E.BhN.SAFETY_ALERTS) },
                ),
            }),
            (0, T.jsx)(a.Button, {
              className: d.settingsButton,
              onClick: L,
              fullWidth: !0,
              children:
                O.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_GO_TO_SETTINGS,
            }),
            (0, T.jsx)("div", {
              children: (0, T.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: d.reportFalsePositiveText,
                children:
                  O.Z.Messages.SAFETY_TOOLS_REPORT_FALSE_POSITIVE.format({
                    reportFalsePositiveHook: (e, t) =>
                      (0, T.jsx)(
                        a.Button,
                        {
                          className: d.reportFalsePositiveButton,
                          size: a.Button.Sizes.NONE,
                          color: a.Button.Colors.LINK,
                          look: a.Button.Looks.LINK,
                          disabled: u,
                          onClick: N,
                          children: e,
                        },
                        t,
                      ),
                  }),
              }),
            }),
          ],
        });
      };
    },
    858597: function (e, t, s) {
      var T = s(735250),
        o = s(470079),
        a = s(120356),
        n = s.n(a),
        l = s(442837),
        _ = s(692547),
        i = s(481060),
        r = s(194359),
        S = s(782568),
        E = s(726521),
        c = s(485664),
        O = s(699516),
        d = s(863653),
        u = s(941362),
        A = s(367408),
        I = s(423932),
        L = s(473092),
        N = s(611446),
        C = s(993750),
        R = s(134612),
        x = s(689938),
        M = s(216305);
      function F(e) {
        let { children: t } = e;
        return (0, T.jsx)("div", { className: M.actionGroup, children: t });
      }
      function B(e) {
        let {
          title: t,
          subTitle: s,
          buttonText: o,
          buttonColor: a,
          onPress: n,
        } = e;
        return (0, T.jsxs)("div", {
          className: M.actionRow,
          children: [
            (0, T.jsxs)("div", {
              className: M.actionButtonDetails,
              children: [
                (0, T.jsx)(i.Text, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: t,
                }),
                (0, T.jsx)(i.Text, {
                  variant: "text-xs/medium",
                  color: "header-secondary",
                  children: s,
                }),
              ],
            }),
            (0, T.jsx)(i.Button, {
              size: i.Button.Sizes.SMALL,
              color: a,
              onClick: n,
              children: o,
            }),
          ],
        });
      }
      function Y(e) {
        let { title: t, onPress: s } = e;
        return (0, T.jsxs)(i.Clickable, {
          className: n()(M.actionRow, M.clickableActionRow),
          onClick: s,
          children: [
            (0, T.jsx)(i.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: t,
            }),
            (0, T.jsx)(i.ChevronSmallRightIcon, {
              size: "md",
              color: _.Z.colors.INTERACTIVE_NORMAL,
            }),
          ],
        });
      }
      t.Z = function (e) {
        let {
            otherUserId: t,
            channelId: a,
            warningId: n,
            warningType: _,
            transitionToSlide: M,
          } = e,
          b = (0, c.o)(),
          h = (0, d.zF)("web_safety-tools-action-slide"),
          p = (0, u.q)(a),
          Z = null != (0, A.M)(a),
          m = (0, l.e7)([O.Z], () => O.Z.isBlocked(t)),
          f = o.useCallback(
            (e) => {
              (0, L.qc)({
                channelId: a,
                warningId: n,
                senderId: t,
                warningType: _,
                cta: e,
                isNudgeWarning: Z,
              });
            },
            [a, n, t, _, Z],
          ),
          g = o.useCallback(() => {
            (0, i.closeModal)(R.X_), f(L.NM.USER_SAFETY_TOOLS_BLOCK_CONFIRM);
          }, [f]),
          P = o.useCallback(() => {
            r.Z.unblockUser(t, { location: R.DL }),
              f(L.NM.USER_SAFETY_TOOLS_UNBLOCK);
          }, [t, f]),
          U = o.useCallback(() => {
            (0, i.closeModal)(R.X_),
              f(L.NM.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM);
          }, [f]),
          j = o.useMemo(() => {
            let e = {
                title:
                  x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_TITLE,
                subTitle:
                  x.Z.Messages
                    .SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_SUBTITLE,
                buttonText:
                  x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_BUTTON,
                buttonColor: i.ButtonColors.PRIMARY,
                onPress: () => {
                  (0, S.Z)(R.EI), f(L.NM.USER_SAFETY_TOOLS_CTL);
                },
              },
              o = {
                title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_TITLE,
                subTitle:
                  x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_SUBTITLE,
                buttonText:
                  x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_BUTTON,
                buttonColor: i.ButtonColors.PRIMARY,
                onPress: () => {
                  (0, S.Z)(R.n4), f(L.NM.USER_SAFETY_TOOLS_NO_FILTR);
                },
              },
              n = {
                title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_THROUGHLINE_TITLE,
                subTitle:
                  x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_THROUGHLINE_SUBTITLE,
                buttonText:
                  x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_THROUGHLINE_BUTTON,
                buttonColor: i.ButtonColors.PRIMARY,
                onPress: () => {
                  (0, S.Z)(R.$l), f(L.NM.USER_SAFETY_TOOLS_THROUGHLINE);
                },
              };
            return [
              {
                title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
                subTitle: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_SUBTITLE,
                buttonText: m
                  ? x.Z.Messages.INAPPROPRIATE_CONVERSATION_UNBLOCK
                  : x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
                buttonColor: i.ButtonColors.BRAND,
                onPress: () => {
                  m
                    ? P()
                    : (0, i.openModalLazy)(async () => {
                        let { default: e } = await s
                          .e("41128")
                          .then(s.bind(s, 699783));
                        return (s) => {
                          let { transitionState: o, onClose: n } = s;
                          return (0, T.jsx)(e, {
                            transitionState: o,
                            onBlock: g,
                            onBlockAndReport: U,
                            onCancel: () => {
                              null == n || n(),
                                f(L.NM.USER_SAFETY_TOOLS_BLOCK_CANCEL);
                            },
                            onClose: n,
                            userId: t,
                            channelId: a,
                          });
                        };
                      });
                },
              },
              {
                title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_TITLE,
                subTitle:
                  x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_SUBTITLE,
                buttonText: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_TITLE,
                buttonColor: i.ButtonColors.PRIMARY,
                onPress: () => {
                  (0, i.closeModal)(R.X_),
                    (0, E.wk)(p),
                    f(L.NM.USER_SAFETY_TOOLS_REPORT);
                },
              },
              b ? e : h ? n : o,
              {
                title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_TITLE,
                subTitle: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_SUBTITLE,
                buttonText: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_BUTTON,
                buttonColor: i.ButtonColors.PRIMARY,
                onPress: () => {
                  (0, I.Z)(i.closeAllModals),
                    f(L.NM.USER_SAFETY_TOOLS_VIBING_WUMPUS);
                },
              },
            ];
          }, [m, b, h, f, P, g, U, t, a, p]),
          H = o.useMemo(
            () => [
              {
                title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_SAFETY_TIPS_TITLE,
                onPress: () => {
                  M(N.SafetyToolsSlides.SAFETY_TIPS),
                    f(L.NM.USER_SAFETY_TOOLS_SAFETY_TIPS);
                },
              },
              {
                title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE,
                onPress: () => {
                  M(N.SafetyToolsSlides.ABOUT_SAFETY_ALERTS),
                    f(L.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
                },
              },
            ],
            [M, f],
          );
        return (0, T.jsxs)(C.Z, {
          children: [
            (0, T.jsx)(F, {
              children: j.map((e) => {
                let {
                  title: t,
                  subTitle: s,
                  buttonText: o,
                  buttonColor: a,
                  onPress: n,
                } = e;
                return (0, T.jsx)(
                  B,
                  {
                    title: t,
                    subTitle: s,
                    buttonText: o,
                    buttonColor: a,
                    onPress: n,
                  },
                  t,
                );
              }),
            }),
            (0, T.jsx)(F, {
              children: H.map((e) => {
                let { title: t, onPress: s } = e;
                return (0, T.jsx)(Y, { title: t, onPress: s }, t);
              }),
            }),
          ],
        });
      };
    },
    611446: function (e, t, s) {
      s.r(t),
        s.d(t, {
          SafetyToolsSlides: function () {
            return T;
          },
        }),
        s(47120);
      var T,
        o,
        a = s(735250),
        n = s(470079),
        l = s(481060),
        _ = s(600164),
        i = s(367408),
        r = s(473092),
        S = s(419672),
        E = s(858597),
        c = s(486213),
        O = s(689938),
        d = s(97694);
      ((o = T || (T = {})).ACTIONS = "ACTIONS"),
        (o.SAFETY_TIPS = "SAFETY_TIPS"),
        (o.ABOUT_SAFETY_ALERTS = "ABOUT_SAFETY_ALERTS");
      t.default = (e) => {
        let {
            onClose: t,
            channelId: s,
            warningId: T,
            warningType: o,
            otherUserId: u,
            transitionState: A,
          } = e,
          I = null != (0, i.M)(s),
          [L, N] = n.useState("ACTIONS"),
          C = n.useCallback(
            (e) => {
              (0, r.qc)({
                channelId: s,
                warningId: T,
                warningType: o,
                senderId: u,
                cta: e,
                isNudgeWarning: I,
              });
            },
            [s, T, o, u, I],
          ),
          R = n.useCallback((e) => {
            let { text: t, onClick: s } = e;
            return (0, a.jsx)(l.Button, {
              look: l.Button.Looks.LINK,
              size: l.Button.Sizes.MIN,
              onClick: s,
              color: l.Button.Colors.CUSTOM,
              className: d.footerLink,
              children: t,
            });
          }, []),
          x = n.useCallback(() => {
            switch (L) {
              case "SAFETY_TIPS":
              case "ABOUT_SAFETY_ALERTS":
                return (0, a.jsx)(R, {
                  text: O.Z.Messages.BACK,
                  onClick: () => N("ACTIONS"),
                });
              default:
                return null;
            }
          }, [L, R]),
          M = n.useCallback(() => {
            switch (L) {
              case "SAFETY_TIPS":
                return O.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_SAFETY_TIPS_TITLE;
              case "ABOUT_SAFETY_ALERTS":
                return O.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE;
              default:
                return O.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_HEADER;
            }
          }, [L]),
          F = n.useCallback(
            (e) => {
              N(e);
            },
            [N],
          );
        return (0, a.jsxs)(l.ModalRoot, {
          transitionState: A,
          "aria-label": O.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_HEADER,
          size: l.ModalSize.SMALL,
          children: [
            (0, a.jsx)(l.ModalHeader, {
              separator: !1,
              className: d.modalHeader,
              justify: _.Z.Justify.CENTER,
              children: (0, a.jsx)(l.Heading, {
                variant: "heading-xl/semibold",
                children: M(),
              }),
            }),
            (0, a.jsx)(l.Scroller, {
              children: (0, a.jsxs)(l.Slides, {
                activeSlide: L,
                width: 440,
                children: [
                  (0, a.jsx)(l.Slide, {
                    id: "ACTIONS",
                    children: (0, a.jsx)(E.Z, {
                      otherUserId: u,
                      channelId: s,
                      warningId: T,
                      warningType: o,
                      transitionToSlide: F,
                    }),
                  }),
                  (0, a.jsx)(l.Slide, {
                    id: "ABOUT_SAFETY_ALERTS",
                    children: (0, a.jsx)(S.Z, {
                      channelId: s,
                      onClose: () => {
                        t(),
                          C(r.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS);
                      },
                    }),
                  }),
                  (0, a.jsx)(l.Slide, {
                    id: "SAFETY_TIPS",
                    children: (0, a.jsx)(c.Z, {}),
                  }),
                ],
              }),
            }),
            (0, a.jsxs)(l.ModalFooter, {
              justify: _.Z.Justify.BETWEEN,
              children: [
                (0, a.jsx)(R, {
                  text: O.Z.Messages.CLOSE,
                  onClick: () => {
                    t(), C(r.NM.USER_SAFETY_TOOLS_DISMISS);
                  },
                }),
                x(),
              ],
            }),
          ],
        });
      };
    },
    486213: function (e, t, s) {
      var T = s(735250);
      s(470079);
      var o = s(353672),
        a = s(993750),
        n = s(134612),
        l = s(689938);
      t.Z = function () {
        let e = (0, n.Nn)();
        return (0, T.jsx)(a.Z, {
          children: (0, T.jsx)(o.Z, {
            tips: e,
            headerText:
              l.Z.Messages.INAPPROPRIATE_CONVERSATION_TIPS_DESCRIPTION,
          }),
        });
      };
    },
    993750: function (e, t, s) {
      var T = s(735250);
      s(470079);
      var o = s(120356),
        a = s.n(o),
        n = s(481060),
        l = s(675586);
      t.Z = function (e) {
        let { children: t, style: s } = e;
        return (0, T.jsx)(n.ModalContent, {
          className: a()(l.modalContent, s),
          children: t,
        });
      };
    },
    32501: function (e, t, s) {
      e.exports = {
        tipRow: "tipRow_a1cdc0",
        tipNumber: "tipNumber_a1cdc0",
        tipsList: "tipsList_a1cdc0",
        tipsHeader: "tipsHeader_a1cdc0",
        headerText: "headerText_a1cdc0",
        tipsSection: "tipsSection_a1cdc0",
      };
    },
    681789: function (e, t, s) {
      e.exports = {
        wrapperStyle: "wrapperStyle_b9caba",
        settingsButton: "settingsButton_b9caba",
        reportFalsePositiveText: "reportFalsePositiveText_b9caba",
        reportFalsePositiveButton: "reportFalsePositiveButton_b9caba",
      };
    },
    216305: function (e, t, s) {
      e.exports = {
        actionGroup: "actionGroup_ac6e35",
        actionRow: "actionRow_ac6e35",
        actionButtonDetails: "actionButtonDetails_ac6e35",
        clickableActionRow: "clickableActionRow_ac6e35",
      };
    },
    97694: function (e, t, s) {
      e.exports = {
        modalHeader: "modalHeader_b2927d",
        footerLink: "footerLink_b2927d",
      };
    },
    675586: function (e, t, s) {
      e.exports = { modalContent: "modalContent_d1f085" };
    },
  },
]);
//# sourceMappingURL=9f22afede11220b75969.js.map
