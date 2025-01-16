"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["89650"],
  {
    446292: function (t) {
      t.exports = "/assets/3fb54283c01119458138.png";
    },
    991981: function (t, e, n) {
      n.d(e, {
        q: function () {
          return o;
        },
      });
      var i = n(442837),
        s = n(375954);
      let o = (t) =>
        (0, i.e7)([s.Z], () => {
          var e;
          return null !== (e = s.Z.getLastNonCurrentUserMessage(t)) &&
            void 0 !== e
            ? e
            : s.Z.getLastMessage(t);
        });
    },
    423932: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return o;
        },
      });
      var i = n(200651);
      n(192379);
      var s = n(481060);
      function o(t) {
        (0, s.openModalLazy)(
          async () => {
            let { default: t } = await n.e("76815").then(n.bind(n, 336977));
            return (e) => (0, i.jsx)(t, { ...e });
          },
          { onCloseCallback: t, backdropStyle: s.BackdropStyles.BLUR },
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
      var s = n(120356),
        o = n.n(s),
        l = n(481060),
        r = n(437323);
      function a(t) {
        let { tips: e, className: n, headerText: s } = t;
        return (0, i.jsxs)("div", {
          className: o()(r.tipsSection, n),
          children: [
            (0, i.jsx)("div", {
              className: r.tipsHeader,
              children: (0, i.jsx)(l.Heading, {
                variant: "heading-lg/bold",
                className: r.headerText,
                children: s,
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
        s = n(192379),
        o = n(481060),
        l = n(230711),
        r = n(63063),
        a = n(378298),
        c = n(584656),
        d = n(993750),
        u = n(981631),
        T = n(526761),
        S = n(388032),
        _ = n(683913);
      e.Z = function (t) {
        let { onClose: e, channelId: n } = t,
          [x, b] = s.useState(!1),
          p = s.useCallback(() => {
            l.Z.open(u.oAB.CONTENT_AND_SOCIAL, null, {
              scrollPosition: T.FY.DM_SAFETY_ALERTS_V2,
            }),
              e();
          }, [e]),
          A = s.useCallback(() => {
            !x &&
              (b(!0),
              (0, a.Uj)(n)
                .then(() => {
                  e(),
                    (0, c.t)({
                      text: S.intl.string(S.t.FhgVWl),
                      id: "safety-tools-report-false-positive",
                    });
                })
                .catch(() => {
                  b(!1),
                    (0, o.showToast)(
                      (0, o.createToast)(
                        S.intl.string(S.t.R0RpRU),
                        o.ToastType.FAILURE,
                      ),
                    );
                }));
          }, [n, e, x]);
        return (0, i.jsxs)(d.Z, {
          style: _.wrapperStyle,
          children: [
            (0, i.jsx)(o.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              children: S.intl.format(S.t["njJ/Cg"], {
                learnMoreLink: r.Z.getArticleURL(u.BhN.SAFETY_ALERTS),
              }),
            }),
            (0, i.jsx)(o.Button, {
              className: _.settingsButton,
              onClick: p,
              fullWidth: !0,
              children: S.intl.string(S.t.qpWnyM),
            }),
            (0, i.jsx)("div", {
              children: (0, i.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: _.reportFalsePositiveText,
                children: S.intl.format(S.t["2uYViI"], {
                  reportFalsePositiveHook: (t, e) =>
                    (0, i.jsx)(
                      o.Button,
                      {
                        className: _.reportFalsePositiveButton,
                        size: o.Button.Sizes.NONE,
                        color: o.Button.Colors.LINK,
                        look: o.Button.Looks.LINK,
                        disabled: x,
                        onClick: A,
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
      n(47120);
      var i,
        s,
        o = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        c = n(442837),
        d = n(692547),
        u = n(481060),
        T = n(194359),
        S = n(782568),
        _ = n(726521),
        x = n(485664),
        b = n(922611),
        p = n(681678),
        A = n(699516),
        h = n(863653),
        C = n(991981),
        E = n(367408),
        R = n(423932),
        N = n(473092),
        L = n(611446),
        g = n(993750),
        O = n(134612),
        m = n(388032),
        j = n(397131);
      function M(t) {
        let { children: e } = t;
        return (0, o.jsx)("div", { className: j.actionGroup, children: e });
      }
      function f(t) {
        let {
          title: e,
          subTitle: n,
          buttonText: i,
          buttonColor: s,
          onPress: l,
          disabled: r,
        } = t;
        return (0, o.jsxs)("div", {
          className: j.actionRow,
          children: [
            (0, o.jsxs)("div", {
              className: j.actionButtonDetails,
              children: [
                (0, o.jsx)(u.Text, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: e,
                }),
                (0, o.jsx)(u.Text, {
                  variant: "text-xs/medium",
                  color: "header-secondary",
                  children: n,
                }),
              ],
            }),
            (0, o.jsx)(u.Button, {
              size: u.Button.Sizes.SMALL,
              color: s,
              onClick: l,
              disabled: r,
              children: i,
            }),
          ],
        });
      }
      function B(t) {
        let { title: e, subTitle: n, onPress: i } = t;
        return (0, o.jsxs)(u.Clickable, {
          className: a()(j.actionRow, j.clickableActionRow),
          onClick: i,
          children: [
            (0, o.jsxs)("div", {
              className: j.actionButtonDetails,
              children: [
                (0, o.jsx)(u.Text, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: e,
                }),
                null != n
                  ? (0, o.jsx)(u.Text, {
                      variant: "text-xs/medium",
                      color: "header-secondary",
                      children: n,
                    })
                  : null,
              ],
            }),
            (0, o.jsx)(u.ChevronSmallRightIcon, {
              size: "md",
              color: d.Z.colors.INTERACTIVE_NORMAL,
            }),
          ],
        });
      }
      ((s = i || (i = {}))[(s.ButtonRow = 0)] = "ButtonRow"),
        (s[(s.ClickableRow = 1)] = "ClickableRow");
      e.Z = function (t) {
        let {
            otherUserId: e,
            channelId: i,
            warningId: s,
            warningType: r,
            transitionToSlide: a,
          } = t,
          d = (0, x.o)(),
          j = (0, h.zF)("web_safety-tools-action-slide"),
          I = (0, C.q)(i),
          k = null != (0, E.M)(i),
          F = (0, b.Do)({ location: O.cH }),
          y = (0, c.e7)([A.Z], () => A.Z.isIgnored(e), [e]),
          v = (0, c.e7)([A.Z], () => A.Z.isBlocked(e), [e]),
          Y = l.useCallback(
            (t) => {
              (0, N.qc)({
                channelId: i,
                warningId: s,
                senderId: e,
                warningType: r,
                cta: t,
                isNudgeWarning: k,
              });
            },
            [i, s, e, r, k],
          ),
          U = l.useCallback(() => {
            (0, u.closeModal)(O.X_), Y(N.NM.USER_SAFETY_TOOLS_BLOCK_CONFIRM);
          }, [Y]),
          Z = l.useCallback(() => {
            T.Z.unblockUser(e, { location: O.DL }),
              Y(N.NM.USER_SAFETY_TOOLS_UNBLOCK);
          }, [e, Y]),
          P = l.useCallback(() => {
            (0, u.closeModal)(O.X_),
              Y(N.NM.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM);
          }, [Y]),
          w = l.useMemo(
            () => [
              ...(F
                ? [
                    {
                      type: 0,
                      title: m.intl.string(m.t.B7ZT09),
                      subTitle: m.intl.string(m.t["fCfp4+"]),
                      buttonText: y
                        ? m.intl.string(m.t["9e0wLi"])
                        : m.intl.string(m.t.B7ZT09),
                      buttonColor: u.ButtonColors.PRIMARY,
                      disabled: v,
                      onPress: () => {
                        y
                          ? (T.Z.unignoreUser(e, O.cH, i),
                            Y(N.NM.USER_SAFETY_TOOLS_UNIGNORE))
                          : (T.Z.ignoreUser(e, O.cH, i),
                            Y(N.NM.USER_SAFETY_TOOLS_IGNORE));
                      },
                    },
                  ]
                : []),
              {
                type: 0,
                title: m.intl.string(m.t.oDxaKy),
                subTitle: m.intl.string(m.t.Lj37a2),
                buttonText: v
                  ? m.intl.string(m.t.Hro409)
                  : m.intl.string(m.t.oDxaKy),
                buttonColor: u.ButtonColors.BRAND,
                onPress: () => {
                  v
                    ? (Z(), p.Z.showUnblockSuccessToast(e, i))
                    : (0, u.openModalLazy)(async () => {
                        let { default: t } = await n
                          .e("41128")
                          .then(n.bind(n, 699783));
                        return (n) => {
                          let { transitionState: s, onClose: l } = n;
                          return (0, o.jsx)(t, {
                            transitionState: s,
                            onBlock: U,
                            onBlockAndReport: P,
                            onCancel: () => {
                              null == l || l(),
                                Y(N.NM.USER_SAFETY_TOOLS_BLOCK_CANCEL);
                            },
                            onClose: l,
                            userId: e,
                            channelId: i,
                          });
                        };
                      });
                },
              },
              {
                type: 0,
                title: m.intl.string(m.t.X27yhI),
                subTitle: m.intl.string(m.t["0tydOT"]),
                buttonText: m.intl.string(m.t.X27yhI),
                buttonColor: u.ButtonColors.PRIMARY,
                onPress: () => {
                  (0, u.closeModal)(O.X_),
                    (0, _.wk)(I),
                    Y(N.NM.USER_SAFETY_TOOLS_REPORT);
                },
              },
            ],
            [y, F, v, Y, Z, U, P, e, i, I],
          ),
          D = l.useMemo(() => {
            let t = {
                title: m.intl.string(m.t.ZSbbMD),
                subTitle: m.intl.string(m.t.iNcsra),
                buttonText: m.intl.string(m.t.rK4Gqq),
                buttonColor: u.ButtonColors.PRIMARY,
                onPress: () => {
                  (0, S.Z)(O.EI), Y(N.NM.USER_SAFETY_TOOLS_CTL);
                },
              },
              e = {
                title: m.intl.string(m.t.ZSbbMD),
                subTitle: m.intl.string(m.t.g5uwCw),
                buttonText: m.intl.string(m.t.rK4Gqq),
                buttonColor: u.ButtonColors.PRIMARY,
                onPress: () => {
                  (0, S.Z)(O.n4), Y(N.NM.USER_SAFETY_TOOLS_NO_FILTR);
                },
              },
              n = {
                title: m.intl.string(m.t.ZSbbMD),
                subTitle: m.intl.string(m.t.S9O1ZW),
                buttonText: m.intl.string(m.t.rK4Gqq),
                buttonColor: u.ButtonColors.PRIMARY,
                onPress: () => {
                  (0, S.Z)(O.$l), Y(N.NM.USER_SAFETY_TOOLS_THROUGHLINE);
                },
              };
            return [
              {
                type: 0,
                title: m.intl.string(m.t.syuaPD),
                subTitle: m.intl.string(m.t.LLBnNj),
                buttonText: m.intl.string(m.t.rzvzyc),
                buttonColor: u.ButtonColors.PRIMARY,
                onPress: () => {
                  (0, R.Z)(u.closeAllModals),
                    Y(N.NM.USER_SAFETY_TOOLS_VIBING_WUMPUS);
                },
              },
              {
                type: 1,
                title: m.intl.string(m.t["7LgVmp"]),
                subTitle: m.intl.string(m.t.pwoRjY),
                onPress: () => {
                  a(L.SafetyToolsSlides.SAFETY_TIPS),
                    Y(N.NM.USER_SAFETY_TOOLS_SAFETY_TIPS);
                },
              },
              { type: 0, ...(d ? t : j ? n : e) },
            ];
          }, [d, j, a, Y]),
          H = l.useMemo(
            () => [
              {
                type: 1,
                title: m.intl.string(m.t.otdt29),
                onPress: () => {
                  a(L.SafetyToolsSlides.ABOUT_SAFETY_ALERTS),
                    Y(N.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
                },
              },
            ],
            [a, Y],
          ),
          z = (t) => {
            if (0 === t.type) {
              let {
                type: e,
                title: n,
                subTitle: i,
                buttonText: s,
                buttonColor: l,
                onPress: r,
                disabled: a,
              } = t;
              return (0, o.jsx)(
                f,
                {
                  type: e,
                  title: n,
                  subTitle: i,
                  buttonText: s,
                  buttonColor: l,
                  onPress: r,
                  disabled: a,
                },
                n,
              );
            }
            if (1 === t.type) {
              let { type: e, title: n, subTitle: i, onPress: s } = t;
              return (0, o.jsx)(
                B,
                { type: e, title: n, subTitle: i, onPress: s },
                n,
              );
            }
            return null;
          };
        return (0, o.jsxs)(g.Z, {
          children: [
            (0, o.jsx)(M, { children: w.map((t) => z(t)) }),
            (0, o.jsx)(M, { children: D.map((t) => z(t)) }),
            (0, o.jsx)(M, { children: H.map((t) => z(t)) }),
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
        s,
        o = n(200651),
        l = n(192379),
        r = n(481060),
        a = n(600164),
        c = n(367408),
        d = n(473092),
        u = n(419672),
        T = n(858597),
        S = n(486213),
        _ = n(388032),
        x = n(744948);
      ((s = i || (i = {})).ACTIONS = "ACTIONS"),
        (s.SAFETY_TIPS = "SAFETY_TIPS"),
        (s.ABOUT_SAFETY_ALERTS = "ABOUT_SAFETY_ALERTS");
      e.default = (t) => {
        let {
            onClose: e,
            channelId: n,
            warningId: i,
            warningType: s,
            otherUserId: b,
            transitionState: p,
          } = t,
          A = null != (0, c.M)(n),
          [h, C] = l.useState("ACTIONS"),
          E = l.useCallback(
            (t) => {
              (0, d.qc)({
                channelId: n,
                warningId: i,
                warningType: s,
                senderId: b,
                cta: t,
                isNudgeWarning: A,
              });
            },
            [n, i, s, b, A],
          ),
          R = l.useCallback((t) => {
            let { text: e, onClick: n } = t;
            return (0, o.jsx)(r.Button, {
              look: r.Button.Looks.LINK,
              size: r.Button.Sizes.MIN,
              onClick: n,
              color: r.Button.Colors.CUSTOM,
              className: x.footerLink,
              children: e,
            });
          }, []),
          N = l.useCallback(() => {
            switch (h) {
              case "SAFETY_TIPS":
              case "ABOUT_SAFETY_ALERTS":
                return (0, o.jsx)(R, {
                  text: _.intl.string(_.t["13/7kZ"]),
                  onClick: () => C("ACTIONS"),
                });
              default:
                return null;
            }
          }, [h, R]),
          L = l.useCallback(() => {
            switch (h) {
              case "SAFETY_TIPS":
                return _.intl.string(_.t.EtNxi4);
              case "ABOUT_SAFETY_ALERTS":
                return _.intl.string(_.t.qI14KC);
              default:
                return _.intl.string(_.t.MAhAp6);
            }
          }, [h]),
          g = l.useCallback(
            (t) => {
              C(t);
            },
            [C],
          );
        return (0, o.jsxs)(r.ModalRoot, {
          transitionState: p,
          "aria-label": _.intl.string(_.t.eXlt09),
          size: r.ModalSize.SMALL,
          children: [
            (0, o.jsx)(r.ModalHeader, {
              separator: !1,
              className: x.modalHeader,
              justify: a.Z.Justify.CENTER,
              children: (0, o.jsx)(r.Heading, {
                variant: "heading-xl/semibold",
                children: L(),
              }),
            }),
            (0, o.jsx)(r.Scroller, {
              children: (0, o.jsxs)(r.Slides, {
                activeSlide: h,
                width: 440,
                children: [
                  (0, o.jsx)(r.Slide, {
                    id: "ACTIONS",
                    children: (0, o.jsx)(T.Z, {
                      otherUserId: b,
                      channelId: n,
                      warningId: i,
                      warningType: s,
                      transitionToSlide: g,
                    }),
                  }),
                  (0, o.jsx)(r.Slide, {
                    id: "ABOUT_SAFETY_ALERTS",
                    children: (0, o.jsx)(u.Z, {
                      channelId: n,
                      onClose: () => {
                        e(),
                          E(d.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS);
                      },
                    }),
                  }),
                  (0, o.jsx)(r.Slide, {
                    id: "SAFETY_TIPS",
                    children: (0, o.jsx)(S.Z, {}),
                  }),
                ],
              }),
            }),
            (0, o.jsxs)(r.ModalFooter, {
              justify: a.Z.Justify.BETWEEN,
              children: [
                (0, o.jsx)(R, {
                  text: _.intl.string(_.t.cpT0Cg),
                  onClick: () => {
                    e(), E(d.NM.USER_SAFETY_TOOLS_DISMISS);
                  },
                }),
                N(),
              ],
            }),
          ],
        });
      };
    },
    486213: function (t, e, n) {
      var i = n(200651);
      n(192379);
      var s = n(353672),
        o = n(993750),
        l = n(134612),
        r = n(388032);
      e.Z = function () {
        let t = (0, l.Nn)();
        return (0, i.jsx)(o.Z, {
          children: (0, i.jsx)(s.Z, {
            tips: t,
            headerText: r.intl.string(r.t["0QSL1N"]),
          }),
        });
      };
    },
    993750: function (t, e, n) {
      var i = n(200651);
      n(192379);
      var s = n(120356),
        o = n.n(s),
        l = n(481060),
        r = n(935902);
      e.Z = function (t) {
        let { children: e, style: n } = t;
        return (0, i.jsx)(l.ModalContent, {
          className: o()(r.modalContent, n),
          children: e,
        });
      };
    },
    437323: function (t, e, n) {
      t.exports = {
        tipRow: "tipRow_a1cdc0",
        tipNumber: "tipNumber_a1cdc0",
        tipsList: "tipsList_a1cdc0",
        tipsHeader: "tipsHeader_a1cdc0",
        headerText: "headerText_a1cdc0",
        tipsSection: "tipsSection_a1cdc0",
      };
    },
    683913: function (t, e, n) {
      t.exports = {
        wrapperStyle: "wrapperStyle_b9caba",
        settingsButton: "settingsButton_b9caba",
        reportFalsePositiveText: "reportFalsePositiveText_b9caba",
        reportFalsePositiveButton: "reportFalsePositiveButton_b9caba",
      };
    },
    397131: function (t, e, n) {
      t.exports = {
        actionGroup: "actionGroup_ac6e35",
        actionRow: "actionRow_ac6e35",
        actionButtonDetails: "actionButtonDetails_ac6e35",
        clickableActionRow: "clickableActionRow_ac6e35",
      };
    },
    744948: function (t, e, n) {
      t.exports = {
        modalHeader: "modalHeader_b2927d",
        footerLink: "footerLink_b2927d",
      };
    },
    935902: function (t, e, n) {
      t.exports = { modalContent: "modalContent_d1f085" };
    },
  },
]);
//# sourceMappingURL=eee2e554eaf62815dd3c.js.map
