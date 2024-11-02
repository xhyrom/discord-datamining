"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["89650"],
  {
    446292: function (t) {
      t.exports = "/assets/3fb54283c01119458138.png";
    },
    941362: function (t, e, n) {
      n.d(e, {
        q: function () {
          return s;
        },
      });
      var i = n(442837),
        o = n(375954);
      let s = (t) =>
        (0, i.e7)([o.Z], () => {
          var e;
          return null !== (e = o.Z.getLastNonCurrentUserMessage(t)) &&
            void 0 !== e
            ? e
            : o.Z.getLastMessage(t);
        });
    },
    423932: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(481060);
      function s(t) {
        (0, o.openModalLazy)(
          async () => {
            let { default: t } = await n.e("76815").then(n.bind(n, 336977));
            return (e) => (0, i.jsx)(t, { ...e });
          },
          { onCloseCallback: t, backdropStyle: o.BackdropStyles.BLUR },
        );
      }
    },
    353672: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return a;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(120356),
        s = n.n(o),
        l = n(481060),
        r = n(32501);
      function a(t) {
        let { tips: e, className: n, headerText: o } = t;
        return (0, i.jsxs)("div", {
          className: s()(r.tipsSection, n),
          children: [
            (0, i.jsx)("div", {
              className: r.tipsHeader,
              children: (0, i.jsx)(l.Heading, {
                variant: "heading-lg/bold",
                className: r.headerText,
                children: o,
              }),
            }),
            (0, i.jsx)("ul", {
              className: r.tipsList,
              children: e.map((t, e) =>
                (0, i.jsxs)(
                  "li",
                  {
                    className: r.tipRow,
                    children: [
                      (0, i.jsx)(l.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-brand",
                        className: r.tipNumber,
                        children: e + 1,
                      }),
                      (0, i.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        children: t,
                      }),
                    ],
                  },
                  "safety-tips-".concat(e),
                ),
              ),
            }),
          ],
        });
      }
    },
    419672: function (t, e, n) {
      n(47120);
      var i = n(200651),
        o = n(192379),
        s = n(481060),
        l = n(230711),
        r = n(187819),
        a = n(63063),
        c = n(378298),
        d = n(584656),
        u = n(993750),
        T = n(981631),
        S = n(526761),
        _ = n(388032),
        x = n(681789);
      e.Z = function (t) {
        let { onClose: e, channelId: n } = t,
          [A, E] = o.useState(!1),
          C = (0, r._p)({ location: "safety-tools-about-safety-alerts" }),
          h = o.useCallback(() => {
            C
              ? l.Z.open(T.oAB.CONTENT_AND_SOCIAL, null, {
                  scrollPosition: S.to.DM_SAFETY_ALERTS_V2,
                })
              : l.Z.open(T.oAB.PRIVACY_AND_SAFETY, null, {
                  scrollPosition: S.to.DM_SAFETY_ALERTS,
                }),
              e();
          }, [C, e]),
          p = o.useCallback(() => {
            !A &&
              (E(!0),
              (0, c.Uj)(n)
                .then(() => {
                  e(),
                    (0, d.t)({
                      text: _.intl.string(_.t.FhgVWl),
                      id: "safety-tools-report-false-positive",
                    });
                })
                .catch(() => {
                  E(!1),
                    (0, s.showToast)(
                      (0, s.createToast)(
                        _.intl.string(_.t.R0RpRU),
                        s.ToastType.FAILURE,
                      ),
                    );
                }));
          }, [n, e, A]);
        return (0, i.jsxs)(u.Z, {
          style: x.wrapperStyle,
          children: [
            (0, i.jsx)(s.Text, {
              variant: "text-md/medium",
              children: _.intl.format(_.t["njJ/Cg"], {
                learnMoreLink: a.Z.getArticleURL(T.BhN.SAFETY_ALERTS),
              }),
            }),
            (0, i.jsx)(s.Button, {
              className: x.settingsButton,
              onClick: h,
              fullWidth: !0,
              children: _.intl.string(_.t.qpWnyM),
            }),
            (0, i.jsx)("div", {
              children: (0, i.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: x.reportFalsePositiveText,
                children: _.intl.format(_.t["2uYViI"], {
                  reportFalsePositiveHook: (t, e) =>
                    (0, i.jsx)(
                      s.Button,
                      {
                        className: x.reportFalsePositiveButton,
                        size: s.Button.Sizes.NONE,
                        color: s.Button.Colors.LINK,
                        look: s.Button.Looks.LINK,
                        disabled: A,
                        onClick: p,
                        children: t,
                      },
                      e,
                    ),
                }),
              }),
            }),
          ],
        });
      };
    },
    858597: function (t, e, n) {
      var i = n(200651),
        o = n(192379),
        s = n(120356),
        l = n.n(s),
        r = n(442837),
        a = n(692547),
        c = n(481060),
        d = n(194359),
        u = n(782568),
        T = n(726521),
        S = n(485664),
        _ = n(699516),
        x = n(863653),
        A = n(941362),
        E = n(367408),
        C = n(423932),
        h = n(473092),
        p = n(611446),
        b = n(993750),
        N = n(134612),
        R = n(388032),
        L = n(216305);
      function m(t) {
        let { children: e } = t;
        return (0, i.jsx)("div", { className: L.actionGroup, children: e });
      }
      function O(t) {
        let {
          title: e,
          subTitle: n,
          buttonText: o,
          buttonColor: s,
          onPress: l,
        } = t;
        return (0, i.jsxs)("div", {
          className: L.actionRow,
          children: [
            (0, i.jsxs)("div", {
              className: L.actionButtonDetails,
              children: [
                (0, i.jsx)(c.Text, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: e,
                }),
                (0, i.jsx)(c.Text, {
                  variant: "text-xs/medium",
                  color: "header-secondary",
                  children: n,
                }),
              ],
            }),
            (0, i.jsx)(c.Button, {
              size: c.Button.Sizes.SMALL,
              color: s,
              onClick: l,
              children: o,
            }),
          ],
        });
      }
      function f(t) {
        let { title: e, onPress: n } = t;
        return (0, i.jsxs)(c.Clickable, {
          className: l()(L.actionRow, L.clickableActionRow),
          onClick: n,
          children: [
            (0, i.jsx)(c.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: e,
            }),
            (0, i.jsx)(c.ChevronSmallRightIcon, {
              size: "md",
              color: a.Z.colors.INTERACTIVE_NORMAL,
            }),
          ],
        });
      }
      e.Z = function (t) {
        let {
            otherUserId: e,
            channelId: s,
            warningId: l,
            warningType: a,
            transitionToSlide: L,
          } = t,
          g = (0, S.o)(),
          j = (0, x.zF)("web_safety-tools-action-slide"),
          I = (0, A.q)(s),
          M = null != (0, E.M)(s),
          B = (0, r.e7)([_.Z], () => _.Z.isBlocked(e)),
          F = o.useCallback(
            (t) => {
              (0, h.qc)({
                channelId: s,
                warningId: l,
                senderId: e,
                warningType: a,
                cta: t,
                isNudgeWarning: M,
              });
            },
            [s, l, e, a, M],
          ),
          k = o.useCallback(() => {
            (0, c.closeModal)(N.X_), F(h.NM.USER_SAFETY_TOOLS_BLOCK_CONFIRM);
          }, [F]),
          v = o.useCallback(() => {
            d.Z.unblockUser(e, { location: N.DL }),
              F(h.NM.USER_SAFETY_TOOLS_UNBLOCK);
          }, [e, F]),
          Y = o.useCallback(() => {
            (0, c.closeModal)(N.X_),
              F(h.NM.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM);
          }, [F]),
          P = o.useMemo(() => {
            let t = {
                title: R.intl.string(R.t["4VIrUF"]),
                subTitle: R.intl.string(R.t.Am8B9P),
                buttonText: R.intl.string(R.t["9iFR6+"]),
                buttonColor: c.ButtonColors.PRIMARY,
                onPress: () => {
                  (0, u.Z)(N.EI), F(h.NM.USER_SAFETY_TOOLS_CTL);
                },
              },
              o = {
                title: R.intl.string(R.t["65XQam"]),
                subTitle: R.intl.string(R.t.XNwhxM),
                buttonText: R.intl.string(R.t["3DJQCA"]),
                buttonColor: c.ButtonColors.PRIMARY,
                onPress: () => {
                  (0, u.Z)(N.n4), F(h.NM.USER_SAFETY_TOOLS_NO_FILTR);
                },
              },
              l = {
                title: R.intl.string(R.t.HQ2nKi),
                subTitle: R.intl.string(R.t["PMeb/v"]),
                buttonText: R.intl.string(R.t.viOWqK),
                buttonColor: c.ButtonColors.PRIMARY,
                onPress: () => {
                  (0, u.Z)(N.$l), F(h.NM.USER_SAFETY_TOOLS_THROUGHLINE);
                },
              };
            return [
              {
                title: R.intl.string(R.t.oDxaKy),
                subTitle: R.intl.string(R.t.Lj37a2),
                buttonText: B
                  ? R.intl.string(R.t.Hro409)
                  : R.intl.string(R.t.oDxaKy),
                buttonColor: c.ButtonColors.BRAND,
                onPress: () => {
                  B
                    ? v()
                    : (0, c.openModalLazy)(async () => {
                        let { default: t } = await n
                          .e("41128")
                          .then(n.bind(n, 699783));
                        return (n) => {
                          let { transitionState: o, onClose: l } = n;
                          return (0, i.jsx)(t, {
                            transitionState: o,
                            onBlock: k,
                            onBlockAndReport: Y,
                            onCancel: () => {
                              null == l || l(),
                                F(h.NM.USER_SAFETY_TOOLS_BLOCK_CANCEL);
                            },
                            onClose: l,
                            userId: e,
                            channelId: s,
                          });
                        };
                      });
                },
              },
              {
                title: R.intl.string(R.t.X27yhI),
                subTitle: R.intl.string(R.t["0tydOT"]),
                buttonText: R.intl.string(R.t.X27yhI),
                buttonColor: c.ButtonColors.PRIMARY,
                onPress: () => {
                  (0, c.closeModal)(N.X_),
                    (0, T.wk)(I),
                    F(h.NM.USER_SAFETY_TOOLS_REPORT);
                },
              },
              g ? t : j ? l : o,
              {
                title: R.intl.string(R.t.uLlgqK),
                subTitle: R.intl.string(R.t["f+pTDQ"]),
                buttonText: R.intl.string(R.t.vf4d8P),
                buttonColor: c.ButtonColors.PRIMARY,
                onPress: () => {
                  (0, C.Z)(c.closeAllModals),
                    F(h.NM.USER_SAFETY_TOOLS_VIBING_WUMPUS);
                },
              },
            ];
          }, [B, g, j, F, v, k, Y, e, s, I]),
          U = o.useMemo(
            () => [
              {
                title: R.intl.string(R.t.EtNxi4),
                onPress: () => {
                  L(p.SafetyToolsSlides.SAFETY_TIPS),
                    F(h.NM.USER_SAFETY_TOOLS_SAFETY_TIPS);
                },
              },
              {
                title: R.intl.string(R.t.qI14KC),
                onPress: () => {
                  L(p.SafetyToolsSlides.ABOUT_SAFETY_ALERTS),
                    F(h.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
                },
              },
            ],
            [L, F],
          );
        return (0, i.jsxs)(b.Z, {
          children: [
            (0, i.jsx)(m, {
              children: P.map((t) => {
                let {
                  title: e,
                  subTitle: n,
                  buttonText: o,
                  buttonColor: s,
                  onPress: l,
                } = t;
                return (0, i.jsx)(
                  O,
                  {
                    title: e,
                    subTitle: n,
                    buttonText: o,
                    buttonColor: s,
                    onPress: l,
                  },
                  e,
                );
              }),
            }),
            (0, i.jsx)(m, {
              children: U.map((t) => {
                let { title: e, onPress: n } = t;
                return (0, i.jsx)(f, { title: e, onPress: n }, e);
              }),
            }),
          ],
        });
      };
    },
    611446: function (t, e, n) {
      n.r(e),
        n.d(e, {
          SafetyToolsSlides: function () {
            return i;
          },
        }),
        n(47120);
      var i,
        o,
        s = n(200651),
        l = n(192379),
        r = n(481060),
        a = n(600164),
        c = n(367408),
        d = n(473092),
        u = n(419672),
        T = n(858597),
        S = n(486213),
        _ = n(388032),
        x = n(97694);
      ((o = i || (i = {})).ACTIONS = "ACTIONS"),
        (o.SAFETY_TIPS = "SAFETY_TIPS"),
        (o.ABOUT_SAFETY_ALERTS = "ABOUT_SAFETY_ALERTS");
      e.default = (t) => {
        let {
            onClose: e,
            channelId: n,
            warningId: i,
            warningType: o,
            otherUserId: A,
            transitionState: E,
          } = t,
          C = null != (0, c.M)(n),
          [h, p] = l.useState("ACTIONS"),
          b = l.useCallback(
            (t) => {
              (0, d.qc)({
                channelId: n,
                warningId: i,
                warningType: o,
                senderId: A,
                cta: t,
                isNudgeWarning: C,
              });
            },
            [n, i, o, A, C],
          ),
          N = l.useCallback((t) => {
            let { text: e, onClick: n } = t;
            return (0, s.jsx)(r.Button, {
              look: r.Button.Looks.LINK,
              size: r.Button.Sizes.MIN,
              onClick: n,
              color: r.Button.Colors.CUSTOM,
              className: x.footerLink,
              children: e,
            });
          }, []),
          R = l.useCallback(() => {
            switch (h) {
              case "SAFETY_TIPS":
              case "ABOUT_SAFETY_ALERTS":
                return (0, s.jsx)(N, {
                  text: _.intl.string(_.t["13/7kZ"]),
                  onClick: () => p("ACTIONS"),
                });
              default:
                return null;
            }
          }, [h, N]),
          L = l.useCallback(() => {
            switch (h) {
              case "SAFETY_TIPS":
                return _.intl.string(_.t.EtNxi4);
              case "ABOUT_SAFETY_ALERTS":
                return _.intl.string(_.t.qI14KC);
              default:
                return _.intl.string(_.t.eXlt09);
            }
          }, [h]),
          m = l.useCallback(
            (t) => {
              p(t);
            },
            [p],
          );
        return (0, s.jsxs)(r.ModalRoot, {
          transitionState: E,
          "aria-label": _.intl.string(_.t.eXlt09),
          size: r.ModalSize.SMALL,
          children: [
            (0, s.jsx)(r.ModalHeader, {
              separator: !1,
              className: x.modalHeader,
              justify: a.Z.Justify.CENTER,
              children: (0, s.jsx)(r.Heading, {
                variant: "heading-xl/semibold",
                children: L(),
              }),
            }),
            (0, s.jsx)(r.Scroller, {
              children: (0, s.jsxs)(r.Slides, {
                activeSlide: h,
                width: 440,
                children: [
                  (0, s.jsx)(r.Slide, {
                    id: "ACTIONS",
                    children: (0, s.jsx)(T.Z, {
                      otherUserId: A,
                      channelId: n,
                      warningId: i,
                      warningType: o,
                      transitionToSlide: m,
                    }),
                  }),
                  (0, s.jsx)(r.Slide, {
                    id: "ABOUT_SAFETY_ALERTS",
                    children: (0, s.jsx)(u.Z, {
                      channelId: n,
                      onClose: () => {
                        e(),
                          b(d.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS);
                      },
                    }),
                  }),
                  (0, s.jsx)(r.Slide, {
                    id: "SAFETY_TIPS",
                    children: (0, s.jsx)(S.Z, {}),
                  }),
                ],
              }),
            }),
            (0, s.jsxs)(r.ModalFooter, {
              justify: a.Z.Justify.BETWEEN,
              children: [
                (0, s.jsx)(N, {
                  text: _.intl.string(_.t.cpT0Cg),
                  onClick: () => {
                    e(), b(d.NM.USER_SAFETY_TOOLS_DISMISS);
                  },
                }),
                R(),
              ],
            }),
          ],
        });
      };
    },
    486213: function (t, e, n) {
      var i = n(200651);
      n(192379);
      var o = n(353672),
        s = n(993750),
        l = n(134612),
        r = n(388032);
      e.Z = function () {
        let t = (0, l.Nn)();
        return (0, i.jsx)(s.Z, {
          children: (0, i.jsx)(o.Z, {
            tips: t,
            headerText: r.intl.string(r.t["0QSL1N"]),
          }),
        });
      };
    },
    993750: function (t, e, n) {
      var i = n(200651);
      n(192379);
      var o = n(120356),
        s = n.n(o),
        l = n(481060),
        r = n(675586);
      e.Z = function (t) {
        let { children: e, style: n } = t;
        return (0, i.jsx)(l.ModalContent, {
          className: s()(r.modalContent, n),
          children: e,
        });
      };
    },
    32501: function (t, e, n) {
      t.exports = {
        tipRow: "tipRow_a1cdc0",
        tipNumber: "tipNumber_a1cdc0",
        tipsList: "tipsList_a1cdc0",
        tipsHeader: "tipsHeader_a1cdc0",
        headerText: "headerText_a1cdc0",
        tipsSection: "tipsSection_a1cdc0",
      };
    },
    681789: function (t, e, n) {
      t.exports = {
        wrapperStyle: "wrapperStyle_b9caba",
        settingsButton: "settingsButton_b9caba",
        reportFalsePositiveText: "reportFalsePositiveText_b9caba",
        reportFalsePositiveButton: "reportFalsePositiveButton_b9caba",
      };
    },
    216305: function (t, e, n) {
      t.exports = {
        actionGroup: "actionGroup_ac6e35",
        actionRow: "actionRow_ac6e35",
        actionButtonDetails: "actionButtonDetails_ac6e35",
        clickableActionRow: "clickableActionRow_ac6e35",
      };
    },
    97694: function (t, e, n) {
      t.exports = {
        modalHeader: "modalHeader_b2927d",
        footerLink: "footerLink_b2927d",
      };
    },
    675586: function (t, e, n) {
      t.exports = { modalContent: "modalContent_d1f085" };
    },
  },
]);
//# sourceMappingURL=29333ff07ce598eacb7e.js.map
