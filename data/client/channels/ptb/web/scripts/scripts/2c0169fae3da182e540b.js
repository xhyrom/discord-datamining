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
          return s;
        },
      });
      var o = n(442837),
        i = n(375954);
      let s = (t) =>
        (0, o.e7)([i.Z], () => {
          var e;
          return null !== (e = i.Z.getLastNonCurrentUserMessage(t)) &&
            void 0 !== e
            ? e
            : i.Z.getLastMessage(t);
        });
    },
    423932: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return s;
        },
      });
      var o = n(200651);
      n(192379);
      var i = n(481060);
      function s(t) {
        (0, i.openModalLazy)(
          async () => {
            let { default: t } = await n.e("76815").then(n.bind(n, 336977));
            return (e) => (0, o.jsx)(t, { ...e });
          },
          { onCloseCallback: t, backdropStyle: i.BackdropStyles.BLUR },
        );
      }
    },
    353672: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return a;
        },
      });
      var o = n(200651);
      n(192379);
      var i = n(120356),
        s = n.n(i),
        l = n(481060),
        r = n(437323);
      function a(t) {
        let { tips: e, className: n, headerText: i } = t;
        return (0, o.jsxs)("div", {
          className: s()(r.tipsSection, n),
          children: [
            (0, o.jsx)("div", {
              className: r.tipsHeader,
              children: (0, o.jsx)(l.Heading, {
                variant: "heading-lg/bold",
                className: r.headerText,
                children: i,
              }),
            }),
            (0, o.jsx)("ul", {
              className: r.tipsList,
              children: e.map((t, e) =>
                (0, o.jsxs)(
                  "li",
                  {
                    className: r.tipRow,
                    children: [
                      (0, o.jsx)(l.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-brand",
                        className: r.tipNumber,
                        children: e + 1,
                      }),
                      (0, o.jsx)(l.Text, {
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
      var o = n(200651),
        i = n(192379),
        s = n(481060),
        l = n(230711),
        r = n(187819),
        a = n(63063),
        c = n(378298),
        u = n(584656),
        d = n(993750),
        T = n(981631),
        S = n(526761),
        _ = n(388032),
        x = n(683913);
      e.Z = function (t) {
        let { onClose: e, channelId: n } = t,
          [A, b] = i.useState(!1),
          p = (0, r._p)({ location: "safety-tools-about-safety-alerts" }),
          E = i.useCallback(() => {
            p
              ? l.Z.open(T.oAB.CONTENT_AND_SOCIAL, null, {
                  scrollPosition: S.to.DM_SAFETY_ALERTS_V2,
                })
              : l.Z.open(T.oAB.PRIVACY_AND_SAFETY, null, {
                  scrollPosition: S.to.DM_SAFETY_ALERTS,
                }),
              e();
          }, [p, e]),
          h = i.useCallback(() => {
            !A &&
              (b(!0),
              (0, c.Uj)(n)
                .then(() => {
                  e(),
                    (0, u.t)({
                      text: _.intl.string(_.t.FhgVWl),
                      id: "safety-tools-report-false-positive",
                    });
                })
                .catch(() => {
                  b(!1),
                    (0, s.showToast)(
                      (0, s.createToast)(
                        _.intl.string(_.t.R0RpRU),
                        s.ToastType.FAILURE,
                      ),
                    );
                }));
          }, [n, e, A]);
        return (0, o.jsxs)(d.Z, {
          style: x.wrapperStyle,
          children: [
            (0, o.jsx)(s.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              children: _.intl.format(_.t["njJ/Cg"], {
                learnMoreLink: a.Z.getArticleURL(T.BhN.SAFETY_ALERTS),
              }),
            }),
            (0, o.jsx)(s.Button, {
              className: x.settingsButton,
              onClick: E,
              fullWidth: !0,
              children: _.intl.string(_.t.qpWnyM),
            }),
            (0, o.jsx)("div", {
              children: (0, o.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: x.reportFalsePositiveText,
                children: _.intl.format(_.t["2uYViI"], {
                  reportFalsePositiveHook: (t, e) =>
                    (0, o.jsx)(
                      s.Button,
                      {
                        className: x.reportFalsePositiveButton,
                        size: s.Button.Sizes.NONE,
                        color: s.Button.Colors.LINK,
                        look: s.Button.Looks.LINK,
                        disabled: A,
                        onClick: h,
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
      var o,
        i,
        s = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        c = n(442837),
        u = n(692547),
        d = n(481060),
        T = n(194359),
        S = n(782568),
        _ = n(726521),
        x = n(485664),
        A = n(922611),
        b = n(681678),
        p = n(699516),
        E = n(863653),
        h = n(991981),
        R = n(367408),
        C = n(423932),
        N = n(473092),
        L = n(611446),
        g = n(993750),
        O = n(134612),
        m = n(388032),
        f = n(397131);
      function j(t) {
        let { children: e } = t;
        return (0, s.jsx)("div", { className: f.actionGroup, children: e });
      }
      function M(t) {
        let {
          title: e,
          subTitle: n,
          buttonText: o,
          buttonColor: i,
          onPress: l,
          disabled: r,
        } = t;
        return (0, s.jsxs)("div", {
          className: f.actionRow,
          children: [
            (0, s.jsxs)("div", {
              className: f.actionButtonDetails,
              children: [
                (0, s.jsx)(d.Text, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: e,
                }),
                (0, s.jsx)(d.Text, {
                  variant: "text-xs/medium",
                  color: "header-secondary",
                  children: n,
                }),
              ],
            }),
            (0, s.jsx)(d.Button, {
              size: d.Button.Sizes.SMALL,
              color: i,
              onClick: l,
              disabled: r,
              children: o,
            }),
          ],
        });
      }
      function B(t) {
        let { title: e, subTitle: n, onPress: o } = t;
        return (0, s.jsxs)(d.Clickable, {
          className: a()(f.actionRow, f.clickableActionRow),
          onClick: o,
          children: [
            (0, s.jsxs)("div", {
              className: f.actionButtonDetails,
              children: [
                (0, s.jsx)(d.Text, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: e,
                }),
                null != n
                  ? (0, s.jsx)(d.Text, {
                      variant: "text-xs/medium",
                      color: "header-secondary",
                      children: n,
                    })
                  : null,
              ],
            }),
            (0, s.jsx)(d.ChevronSmallRightIcon, {
              size: "md",
              color: u.Z.colors.INTERACTIVE_NORMAL,
            }),
          ],
        });
      }
      ((i = o || (o = {}))[(i.ButtonRow = 0)] = "ButtonRow"),
        (i[(i.ClickableRow = 1)] = "ClickableRow");
      e.Z = function (t) {
        let {
            otherUserId: e,
            channelId: o,
            warningId: i,
            warningType: r,
            transitionToSlide: a,
          } = t,
          u = (0, x.o)(),
          f = (0, E.zF)("web_safety-tools-action-slide"),
          I = (0, h.q)(o),
          y = null != (0, R.M)(o),
          F = (0, A.Do)({ location: O.cH }),
          k = (0, c.e7)([p.Z], () => p.Z.isIgnored(e), [e]),
          Y = (0, c.e7)([p.Z], () => p.Z.isBlocked(e), [e]),
          v = l.useCallback(
            (t) => {
              (0, N.qc)({
                channelId: o,
                warningId: i,
                senderId: e,
                warningType: r,
                cta: t,
                isNudgeWarning: y,
              });
            },
            [o, i, e, r, y],
          ),
          Z = l.useCallback(() => {
            (0, d.closeModal)(O.X_), v(N.NM.USER_SAFETY_TOOLS_BLOCK_CONFIRM);
          }, [v]),
          U = l.useCallback(() => {
            T.Z.unblockUser(e, { location: O.DL }),
              v(N.NM.USER_SAFETY_TOOLS_UNBLOCK);
          }, [e, v]),
          P = l.useCallback(() => {
            (0, d.closeModal)(O.X_),
              v(N.NM.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM);
          }, [v]),
          w = l.useMemo(
            () => [
              ...(F
                ? [
                    {
                      type: 0,
                      title: m.intl.string(m.t.B7ZT09),
                      subTitle: m.intl.string(m.t["fCfp4+"]),
                      buttonText: k
                        ? m.intl.string(m.t["9e0wLi"])
                        : m.intl.string(m.t.B7ZT09),
                      buttonColor: d.ButtonColors.PRIMARY,
                      disabled: Y,
                      onPress: () => {
                        k
                          ? (T.Z.unignoreUser(e, O.cH, o),
                            v(N.NM.USER_SAFETY_TOOLS_UNIGNORE))
                          : (T.Z.ignoreUser(e, O.cH, o),
                            v(N.NM.USER_SAFETY_TOOLS_IGNORE));
                      },
                    },
                  ]
                : []),
              {
                type: 0,
                title: m.intl.string(m.t.oDxaKy),
                subTitle: m.intl.string(m.t.Lj37a2),
                buttonText: Y
                  ? m.intl.string(m.t.Hro409)
                  : m.intl.string(m.t.oDxaKy),
                buttonColor: d.ButtonColors.BRAND,
                onPress: () => {
                  Y
                    ? (U(), b.Z.showUnblockSuccessToast(e, o))
                    : (0, d.openModalLazy)(async () => {
                        let { default: t } = await n
                          .e("41128")
                          .then(n.bind(n, 699783));
                        return (n) => {
                          let { transitionState: i, onClose: l } = n;
                          return (0, s.jsx)(t, {
                            transitionState: i,
                            onBlock: Z,
                            onBlockAndReport: P,
                            onCancel: () => {
                              null == l || l(),
                                v(N.NM.USER_SAFETY_TOOLS_BLOCK_CANCEL);
                            },
                            onClose: l,
                            userId: e,
                            channelId: o,
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
                buttonColor: d.ButtonColors.PRIMARY,
                onPress: () => {
                  (0, d.closeModal)(O.X_),
                    (0, _.wk)(I),
                    v(N.NM.USER_SAFETY_TOOLS_REPORT);
                },
              },
            ],
            [k, F, Y, v, U, Z, P, e, o, I],
          ),
          D = l.useMemo(() => {
            let t = {
                title: m.intl.string(m.t.ZSbbMD),
                subTitle: m.intl.string(m.t.iNcsra),
                buttonText: m.intl.string(m.t.rK4Gqq),
                buttonColor: d.ButtonColors.PRIMARY,
                onPress: () => {
                  (0, S.Z)(O.EI), v(N.NM.USER_SAFETY_TOOLS_CTL);
                },
              },
              e = {
                title: m.intl.string(m.t.ZSbbMD),
                subTitle: m.intl.string(m.t.g5uwCw),
                buttonText: m.intl.string(m.t.rK4Gqq),
                buttonColor: d.ButtonColors.PRIMARY,
                onPress: () => {
                  (0, S.Z)(O.n4), v(N.NM.USER_SAFETY_TOOLS_NO_FILTR);
                },
              },
              n = {
                title: m.intl.string(m.t.ZSbbMD),
                subTitle: m.intl.string(m.t.S9O1ZW),
                buttonText: m.intl.string(m.t.rK4Gqq),
                buttonColor: d.ButtonColors.PRIMARY,
                onPress: () => {
                  (0, S.Z)(O.$l), v(N.NM.USER_SAFETY_TOOLS_THROUGHLINE);
                },
              };
            return [
              {
                type: 0,
                title: m.intl.string(m.t.syuaPD),
                subTitle: m.intl.string(m.t.LLBnNj),
                buttonText: m.intl.string(m.t.rzvzyc),
                buttonColor: d.ButtonColors.PRIMARY,
                onPress: () => {
                  (0, C.Z)(d.closeAllModals),
                    v(N.NM.USER_SAFETY_TOOLS_VIBING_WUMPUS);
                },
              },
              {
                type: 1,
                title: m.intl.string(m.t["7LgVmp"]),
                subTitle: m.intl.string(m.t.pwoRjY),
                onPress: () => {
                  a(L.SafetyToolsSlides.SAFETY_TIPS),
                    v(N.NM.USER_SAFETY_TOOLS_SAFETY_TIPS);
                },
              },
              { type: 0, ...(u ? t : f ? n : e) },
            ];
          }, [u, f, a, v]),
          H = l.useMemo(
            () => [
              {
                type: 1,
                title: m.intl.string(m.t.otdt29),
                onPress: () => {
                  a(L.SafetyToolsSlides.ABOUT_SAFETY_ALERTS),
                    v(N.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
                },
              },
            ],
            [a, v],
          ),
          z = (t) => {
            if (0 === t.type) {
              let {
                type: e,
                title: n,
                subTitle: o,
                buttonText: i,
                buttonColor: l,
                onPress: r,
                disabled: a,
              } = t;
              return (0, s.jsx)(
                M,
                {
                  type: e,
                  title: n,
                  subTitle: o,
                  buttonText: i,
                  buttonColor: l,
                  onPress: r,
                  disabled: a,
                },
                n,
              );
            }
            if (1 === t.type) {
              let { type: e, title: n, subTitle: o, onPress: i } = t;
              return (0, s.jsx)(
                B,
                { type: e, title: n, subTitle: o, onPress: i },
                n,
              );
            }
            return null;
          };
        return (0, s.jsxs)(g.Z, {
          children: [
            (0, s.jsx)(j, { children: w.map((t) => z(t)) }),
            (0, s.jsx)(j, { children: D.map((t) => z(t)) }),
            (0, s.jsx)(j, { children: H.map((t) => z(t)) }),
          ],
        });
      };
    },
    611446: function (t, e, n) {
      n.r(e),
        n.d(e, {
          SafetyToolsSlides: function () {
            return o;
          },
        }),
        n(47120);
      var o,
        i,
        s = n(200651),
        l = n(192379),
        r = n(481060),
        a = n(600164),
        c = n(367408),
        u = n(473092),
        d = n(419672),
        T = n(858597),
        S = n(486213),
        _ = n(388032),
        x = n(744948);
      ((i = o || (o = {})).ACTIONS = "ACTIONS"),
        (i.SAFETY_TIPS = "SAFETY_TIPS"),
        (i.ABOUT_SAFETY_ALERTS = "ABOUT_SAFETY_ALERTS");
      e.default = (t) => {
        let {
            onClose: e,
            channelId: n,
            warningId: o,
            warningType: i,
            otherUserId: A,
            transitionState: b,
          } = t,
          p = null != (0, c.M)(n),
          [E, h] = l.useState("ACTIONS"),
          R = l.useCallback(
            (t) => {
              (0, u.qc)({
                channelId: n,
                warningId: o,
                warningType: i,
                senderId: A,
                cta: t,
                isNudgeWarning: p,
              });
            },
            [n, o, i, A, p],
          ),
          C = l.useCallback((t) => {
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
          N = l.useCallback(() => {
            switch (E) {
              case "SAFETY_TIPS":
              case "ABOUT_SAFETY_ALERTS":
                return (0, s.jsx)(C, {
                  text: _.intl.string(_.t["13/7kZ"]),
                  onClick: () => h("ACTIONS"),
                });
              default:
                return null;
            }
          }, [E, C]),
          L = l.useCallback(() => {
            switch (E) {
              case "SAFETY_TIPS":
                return _.intl.string(_.t.EtNxi4);
              case "ABOUT_SAFETY_ALERTS":
                return _.intl.string(_.t.qI14KC);
              default:
                return _.intl.string(_.t.MAhAp6);
            }
          }, [E]),
          g = l.useCallback(
            (t) => {
              h(t);
            },
            [h],
          );
        return (0, s.jsxs)(r.ModalRoot, {
          transitionState: b,
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
                activeSlide: E,
                width: 440,
                children: [
                  (0, s.jsx)(r.Slide, {
                    id: "ACTIONS",
                    children: (0, s.jsx)(T.Z, {
                      otherUserId: A,
                      channelId: n,
                      warningId: o,
                      warningType: i,
                      transitionToSlide: g,
                    }),
                  }),
                  (0, s.jsx)(r.Slide, {
                    id: "ABOUT_SAFETY_ALERTS",
                    children: (0, s.jsx)(d.Z, {
                      channelId: n,
                      onClose: () => {
                        e(),
                          R(u.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS);
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
                (0, s.jsx)(C, {
                  text: _.intl.string(_.t.cpT0Cg),
                  onClick: () => {
                    e(), R(u.NM.USER_SAFETY_TOOLS_DISMISS);
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
      var o = n(200651);
      n(192379);
      var i = n(353672),
        s = n(993750),
        l = n(134612),
        r = n(388032);
      e.Z = function () {
        let t = (0, l.Nn)();
        return (0, o.jsx)(s.Z, {
          children: (0, o.jsx)(i.Z, {
            tips: t,
            headerText: r.intl.string(r.t["0QSL1N"]),
          }),
        });
      };
    },
    993750: function (t, e, n) {
      var o = n(200651);
      n(192379);
      var i = n(120356),
        s = n.n(i),
        l = n(481060),
        r = n(935902);
      e.Z = function (t) {
        let { children: e, style: n } = t;
        return (0, o.jsx)(l.ModalContent, {
          className: s()(r.modalContent, n),
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
//# sourceMappingURL=2c0169fae3da182e540b.js.map
