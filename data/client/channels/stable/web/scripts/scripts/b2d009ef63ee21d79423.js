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
          return n;
        },
      });
      var o = s(442837),
        T = s(375954);
      let n = (e) =>
        (0, o.e7)([T.Z], () => {
          var t;
          return null !== (t = T.Z.getLastNonCurrentUserMessage(e)) &&
            void 0 !== t
            ? t
            : T.Z.getLastMessage(e);
        });
    },
    423932: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return n;
        },
      });
      var o = s(735250);
      s(470079);
      var T = s(481060);
      function n(e) {
        (0, T.openModalLazy)(
          async () => {
            let { default: e } = await s.e("76815").then(s.bind(s, 336977));
            return (t) => (0, o.jsx)(e, { ...t });
          },
          { onCloseCallback: e, backdropStyle: T.BackdropStyles.BLUR },
        );
      }
    },
    353672: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return _;
        },
      });
      var o = s(735250);
      s(470079);
      var T = s(120356),
        n = s.n(T),
        a = s(481060),
        l = s(32501);
      function _(e) {
        let { tips: t, className: s, headerText: T } = e;
        return (0, o.jsxs)("div", {
          className: n()(l.tipsSection, s),
          children: [
            (0, o.jsx)("div", {
              className: l.tipsHeader,
              children: (0, o.jsx)(a.Heading, {
                variant: "heading-lg/bold",
                className: l.headerText,
                children: T,
              }),
            }),
            (0, o.jsx)("ul", {
              className: l.tipsList,
              children: t.map((e, t) =>
                (0, o.jsxs)(
                  "li",
                  {
                    className: l.tipRow,
                    children: [
                      (0, o.jsx)(a.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-brand",
                        className: l.tipNumber,
                        children: t + 1,
                      }),
                      (0, o.jsx)(a.Text, {
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
      var o = s(735250),
        T = s(470079),
        n = s(481060),
        a = s(230711),
        l = s(187819),
        _ = s(63063),
        i = s(378298),
        r = s(584656),
        S = s(993750),
        E = s(981631),
        c = s(526761),
        u = s(689938),
        O = s(681789);
      t.Z = function (e) {
        let { onClose: t, channelId: s } = e,
          [d, A] = T.useState(!1),
          I = (0, l._p)({
            location: "safety-tools-about-safety-alerts",
            autoTrackExposure: !1,
          }),
          L = T.useCallback(() => {
            a.Z.open(E.oAB.PRIVACY_AND_SAFETY, null, {
              scrollPosition: I
                ? c.to.DM_SAFETY_ALERTS_V2
                : c.to.DM_SAFETY_ALERTS,
            }),
              t();
          }, [I, t]),
          C = T.useCallback(() => {
            !d &&
              (A(!0),
              (0, i.Uj)(s)
                .then(() => {
                  t(),
                    (0, r.t)({
                      text: u.Z.Messages
                        .SAFETY_TOOLS_REPORT_FALSE_POSITIVE_SUCCESS,
                      id: "safety-tools-report-false-positive",
                    });
                })
                .catch(() => {
                  A(!1),
                    (0, n.showToast)(
                      (0, n.createToast)(
                        u.Z.Messages.ERROR_GENERIC_TITLE,
                        n.ToastType.FAILURE,
                      ),
                    );
                }));
          }, [s, t, d]);
        return (0, o.jsxs)(S.Z, {
          style: O.wrapperStyle,
          children: [
            (0, o.jsx)(n.Text, {
              variant: "text-md/medium",
              children:
                u.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_DESCRIPTION.format(
                  { learnMoreLink: _.Z.getArticleURL(E.BhN.SAFETY_ALERTS) },
                ),
            }),
            (0, o.jsx)(n.Button, {
              className: O.settingsButton,
              onClick: L,
              fullWidth: !0,
              children:
                u.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_GO_TO_SETTINGS,
            }),
            (0, o.jsx)("div", {
              children: (0, o.jsx)(n.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: O.reportFalsePositiveText,
                children:
                  u.Z.Messages.SAFETY_TOOLS_REPORT_FALSE_POSITIVE.format({
                    reportFalsePositiveHook: (e, t) =>
                      (0, o.jsx)(
                        n.Button,
                        {
                          className: O.reportFalsePositiveButton,
                          size: n.Button.Sizes.NONE,
                          color: n.Button.Colors.LINK,
                          look: n.Button.Looks.LINK,
                          disabled: d,
                          onClick: C,
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
      var o = s(735250),
        T = s(470079),
        n = s(120356),
        a = s.n(n),
        l = s(442837),
        _ = s(692547),
        i = s(481060),
        r = s(194359),
        S = s(782568),
        E = s(726521),
        c = s(485664),
        u = s(699516),
        O = s(863653),
        d = s(941362),
        A = s(367408),
        I = s(423932),
        L = s(473092),
        C = s(611446),
        N = s(993750),
        R = s(134612),
        x = s(689938),
        M = s(216305);
      function F(e) {
        let { children: t } = e;
        return (0, o.jsx)("div", { className: M.actionGroup, children: t });
      }
      function p(e) {
        let {
          title: t,
          subTitle: s,
          buttonText: T,
          buttonColor: n,
          onPress: a,
        } = e;
        return (0, o.jsxs)("div", {
          className: M.actionRow,
          children: [
            (0, o.jsxs)("div", {
              className: M.actionButtonDetails,
              children: [
                (0, o.jsx)(i.Text, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: t,
                }),
                (0, o.jsx)(i.Text, {
                  variant: "text-xs/medium",
                  color: "header-secondary",
                  children: s,
                }),
              ],
            }),
            (0, o.jsx)(i.Button, {
              size: i.Button.Sizes.SMALL,
              color: n,
              onClick: a,
              children: T,
            }),
          ],
        });
      }
      function b(e) {
        let { title: t, onPress: s } = e;
        return (0, o.jsxs)(i.Clickable, {
          className: a()(M.actionRow, M.clickableActionRow),
          onClick: s,
          children: [
            (0, o.jsx)(i.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: t,
            }),
            (0, o.jsx)(i.ChevronSmallRightIcon, {
              size: "md",
              color: _.Z.colors.INTERACTIVE_NORMAL,
            }),
          ],
        });
      }
      t.Z = function (e) {
        let {
            otherUserId: t,
            channelId: n,
            warningId: a,
            warningType: _,
            transitionToSlide: M,
          } = e,
          B = (0, c.o)(),
          Y = (0, O.zF)("web_safety-tools-action-slide"),
          h = (0, d.q)(n),
          f = null != (0, A.M)(n),
          Z = (0, l.e7)([u.Z], () => u.Z.isBlocked(t)),
          g = T.useCallback(
            (e) => {
              (0, L.qc)({
                channelId: n,
                warningId: a,
                senderId: t,
                warningType: _,
                cta: e,
                isNudgeWarning: f,
              });
            },
            [n, a, t, _, f],
          ),
          m = T.useCallback(() => {
            (0, i.closeModal)(R.X_), g(L.NM.USER_SAFETY_TOOLS_BLOCK_CONFIRM);
          }, [g]),
          U = T.useCallback(() => {
            r.Z.unblockUser(t, { location: R.DL }),
              g(L.NM.USER_SAFETY_TOOLS_UNBLOCK);
          }, [t, g]),
          P = T.useCallback(() => {
            (0, i.closeModal)(R.X_),
              g(L.NM.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM);
          }, [g]),
          j = T.useMemo(() => {
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
                  (0, S.Z)(R.EI), g(L.NM.USER_SAFETY_TOOLS_CTL);
                },
              },
              T = {
                title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_TITLE,
                subTitle:
                  x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_SUBTITLE,
                buttonText:
                  x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_BUTTON,
                buttonColor: i.ButtonColors.PRIMARY,
                onPress: () => {
                  (0, S.Z)(R.n4), g(L.NM.USER_SAFETY_TOOLS_NO_FILTR);
                },
              },
              a = {
                title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_THROUGHLINE_TITLE,
                subTitle:
                  x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_THROUGHLINE_SUBTITLE,
                buttonText:
                  x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_THROUGHLINE_BUTTON,
                buttonColor: i.ButtonColors.PRIMARY,
                onPress: () => {
                  (0, S.Z)(R.$l), g(L.NM.USER_SAFETY_TOOLS_THROUGHLINE);
                },
              };
            return [
              {
                title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
                subTitle: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_SUBTITLE,
                buttonText: Z
                  ? x.Z.Messages.INAPPROPRIATE_CONVERSATION_UNBLOCK
                  : x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
                buttonColor: i.ButtonColors.BRAND,
                onPress: () => {
                  Z
                    ? U()
                    : (0, i.openModalLazy)(async () => {
                        let { default: e } = await s
                          .e("41128")
                          .then(s.bind(s, 699783));
                        return (s) => {
                          let { transitionState: T, onClose: a } = s;
                          return (0, o.jsx)(e, {
                            transitionState: T,
                            onBlock: m,
                            onBlockAndReport: P,
                            onCancel: () => {
                              null == a || a(),
                                g(L.NM.USER_SAFETY_TOOLS_BLOCK_CANCEL);
                            },
                            onClose: a,
                            userId: t,
                            channelId: n,
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
                    (0, E.wk)(h),
                    g(L.NM.USER_SAFETY_TOOLS_REPORT);
                },
              },
              B ? e : Y ? a : T,
              {
                title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_TITLE,
                subTitle: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_SUBTITLE,
                buttonText: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_BUTTON,
                buttonColor: i.ButtonColors.PRIMARY,
                onPress: () => {
                  (0, I.Z)(i.closeAllModals),
                    g(L.NM.USER_SAFETY_TOOLS_VIBING_WUMPUS);
                },
              },
            ];
          }, [Z, B, Y, g, U, m, P, t, n, h]),
          k = T.useMemo(
            () => [
              {
                title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_SAFETY_TIPS_TITLE,
                onPress: () => {
                  M(C.SafetyToolsSlides.SAFETY_TIPS),
                    g(L.NM.USER_SAFETY_TOOLS_SAFETY_TIPS);
                },
              },
              {
                title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE,
                onPress: () => {
                  M(C.SafetyToolsSlides.ABOUT_SAFETY_ALERTS),
                    g(L.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
                },
              },
            ],
            [M, g],
          );
        return (0, o.jsxs)(N.Z, {
          children: [
            (0, o.jsx)(F, {
              children: j.map((e) => {
                let {
                  title: t,
                  subTitle: s,
                  buttonText: T,
                  buttonColor: n,
                  onPress: a,
                } = e;
                return (0, o.jsx)(
                  p,
                  {
                    title: t,
                    subTitle: s,
                    buttonText: T,
                    buttonColor: n,
                    onPress: a,
                  },
                  t,
                );
              }),
            }),
            (0, o.jsx)(F, {
              children: k.map((e) => {
                let { title: t, onPress: s } = e;
                return (0, o.jsx)(b, { title: t, onPress: s }, t);
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
            return o;
          },
        }),
        s(47120);
      var o,
        T,
        n = s(735250),
        a = s(470079),
        l = s(481060),
        _ = s(600164),
        i = s(367408),
        r = s(473092),
        S = s(419672),
        E = s(858597),
        c = s(486213),
        u = s(689938),
        O = s(97694);
      ((T = o || (o = {})).ACTIONS = "ACTIONS"),
        (T.SAFETY_TIPS = "SAFETY_TIPS"),
        (T.ABOUT_SAFETY_ALERTS = "ABOUT_SAFETY_ALERTS");
      t.default = (e) => {
        let {
            onClose: t,
            channelId: s,
            warningId: o,
            warningType: T,
            otherUserId: d,
            transitionState: A,
          } = e,
          I = null != (0, i.M)(s),
          [L, C] = a.useState("ACTIONS"),
          N = a.useCallback(
            (e) => {
              (0, r.qc)({
                channelId: s,
                warningId: o,
                warningType: T,
                senderId: d,
                cta: e,
                isNudgeWarning: I,
              });
            },
            [s, o, T, d, I],
          ),
          R = a.useCallback((e) => {
            let { text: t, onClick: s } = e;
            return (0, n.jsx)(l.Button, {
              look: l.Button.Looks.LINK,
              size: l.Button.Sizes.MIN,
              onClick: s,
              color: l.Button.Colors.CUSTOM,
              className: O.footerLink,
              children: t,
            });
          }, []),
          x = a.useCallback(() => {
            switch (L) {
              case "SAFETY_TIPS":
              case "ABOUT_SAFETY_ALERTS":
                return (0, n.jsx)(R, {
                  text: u.Z.Messages.BACK,
                  onClick: () => C("ACTIONS"),
                });
              default:
                return null;
            }
          }, [L, R]),
          M = a.useCallback(() => {
            switch (L) {
              case "SAFETY_TIPS":
                return u.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_SAFETY_TIPS_TITLE;
              case "ABOUT_SAFETY_ALERTS":
                return u.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE;
              default:
                return u.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_HEADER;
            }
          }, [L]),
          F = a.useCallback(
            (e) => {
              C(e);
            },
            [C],
          );
        return (0, n.jsxs)(l.ModalRoot, {
          transitionState: A,
          "aria-label": u.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_HEADER,
          size: l.ModalSize.SMALL,
          children: [
            (0, n.jsx)(l.ModalHeader, {
              separator: !1,
              className: O.modalHeader,
              justify: _.Z.Justify.CENTER,
              children: (0, n.jsx)(l.Heading, {
                variant: "heading-xl/semibold",
                children: M(),
              }),
            }),
            (0, n.jsx)(l.Scroller, {
              children: (0, n.jsxs)(l.Slides, {
                activeSlide: L,
                width: 440,
                children: [
                  (0, n.jsx)(l.Slide, {
                    id: "ACTIONS",
                    children: (0, n.jsx)(E.Z, {
                      otherUserId: d,
                      channelId: s,
                      warningId: o,
                      warningType: T,
                      transitionToSlide: F,
                    }),
                  }),
                  (0, n.jsx)(l.Slide, {
                    id: "ABOUT_SAFETY_ALERTS",
                    children: (0, n.jsx)(S.Z, {
                      channelId: s,
                      onClose: () => {
                        t(),
                          N(r.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS);
                      },
                    }),
                  }),
                  (0, n.jsx)(l.Slide, {
                    id: "SAFETY_TIPS",
                    children: (0, n.jsx)(c.Z, {}),
                  }),
                ],
              }),
            }),
            (0, n.jsxs)(l.ModalFooter, {
              justify: _.Z.Justify.BETWEEN,
              children: [
                (0, n.jsx)(R, {
                  text: u.Z.Messages.CLOSE,
                  onClick: () => {
                    t(), N(r.NM.USER_SAFETY_TOOLS_DISMISS);
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
      var o = s(735250);
      s(470079);
      var T = s(353672),
        n = s(993750),
        a = s(134612),
        l = s(689938);
      t.Z = function () {
        let e = (0, a.Nn)();
        return (0, o.jsx)(n.Z, {
          children: (0, o.jsx)(T.Z, {
            tips: e,
            headerText:
              l.Z.Messages.INAPPROPRIATE_CONVERSATION_TIPS_DESCRIPTION,
          }),
        });
      };
    },
    993750: function (e, t, s) {
      var o = s(735250);
      s(470079);
      var T = s(120356),
        n = s.n(T),
        a = s(481060),
        l = s(675586);
      t.Z = function (e) {
        let { children: t, style: s } = e;
        return (0, o.jsx)(a.ModalContent, {
          className: n()(l.modalContent, s),
          children: t,
        });
      };
    },
    187819: function (e, t, s) {
      s.d(t, {
        _p: function () {
          return n;
        },
        sp: function () {
          return T;
        },
      });
      let o = (0, s(818083).B)({
        kind: "user",
        id: "2024-08_safety_settings_update",
        label: "Safety Settings Update",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable Safety Settings Update",
            config: { enabled: !0 },
          },
        ],
      });
      function T(e) {
        let { location: t, autoTrackExposure: s } = e,
          { enabled: T } = o.getCurrentConfig(
            { location: t },
            { autoTrackExposure: null == s || s },
          );
        return T;
      }
      function n(e) {
        let { location: t, autoTrackExposure: s } = e,
          { enabled: T } = o.useExperiment(
            { location: t },
            { autoTrackExposure: null == s || s },
          );
        return T;
      }
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
//# sourceMappingURL=b2d009ef63ee21d79423.js.map
