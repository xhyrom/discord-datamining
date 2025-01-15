"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["6284"],
  {
    257514: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        }),
        n(47120);
      var i,
        a,
        l = n(200651),
        s = n(192379),
        o = n(481060),
        r = n(355467),
        c = n(100527),
        d = n(906732),
        C = n(313201),
        u = n(740492),
        _ = n(626135),
        N = n(171246),
        S = n(225715),
        h = n(635840),
        I = n(981631),
        m = n(388032),
        E = n(825771);
      let x = (e) => {
        let [t, n] = s.useState(!1),
          [i, a] = s.useState(null);
        return {
          cancelSubscription: async (t) => {
            try {
              return n(!0), await r.EO(t, e), !0;
            } catch (e) {
              a(e);
            } finally {
              n(!1);
            }
          },
          error: i,
          submitting: t,
        };
      };
      function T(e) {
        let {
            transitionState: t,
            application: n,
            storeListing: i,
            subscription: a,
            guild: r,
            onClose: T,
          } = e,
          A = (0, C.Dt)(),
          { analyticsLocations: O } = (0, d.ZP)(
            c.Z.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL,
          ),
          { cancelSubscription: p, error: g, submitting: j } = x(O),
          [P, R] = s.useState(0),
          f = async () => {
            (await p(a.id)) &&
              (u.ZP.disableApplicationSubscriptionCancellationSurvey
                ? T()
                : R(1));
          };
        s.useEffect(() => {
          _.default.track(I.rMx.CANCELLATION_FLOW_STARTED, {
            location_stack: O,
          });
        }, [O]);
        let L = (0, N.KW)(i.skuFlags);
        return (0, l.jsx)(o.ModalRoot, {
          transitionState: t,
          className: E.modal,
          "aria-labelledby": A,
          children: (0, l.jsxs)(o.Slides, {
            activeSlide: P,
            width: 440,
            children: [
              (0, l.jsx)(o.Slide, {
                id: 0,
                children: (0, l.jsxs)("div", {
                  className: E.slideContainer,
                  children: [
                    null != g
                      ? (0, l.jsx)(o.FormErrorBlock, { children: g.message })
                      : null,
                    (0, l.jsxs)(o.ModalContent, {
                      className: E.content,
                      children: [
                        (0, l.jsx)(o.Spacer, { size: 16 }),
                        (0, l.jsxs)(S.q$, {
                          children: [
                            (0, l.jsx)(S.CW, { application: n }),
                            (0, l.jsx)(S.r0, {
                              id: A,
                              children: m.intl.format(m.t.irka9v, {
                                tier: i.summary,
                              }),
                            }),
                            (0, l.jsx)(S.s$, {}),
                            (0, l.jsx)(S.K9, {
                              title: m.intl.string(m.t.LZunzc),
                              description: L
                                ? m.intl.formatToPlainString(m.t["+HdfBw"], {
                                    timestamp: a.currentPeriodEnd.getTime(),
                                  })
                                : m.intl.formatToPlainString(m.t.qxiBnZ, {
                                    timestamp: a.currentPeriodEnd.getTime(),
                                    guildName: null == r ? void 0 : r.name,
                                  }),
                            }),
                            (0, l.jsx)(S.G9, {
                              applicationId: i.applicationId,
                              storeListingBenefits: i.benefits,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(o.ModalFooter, {
                      className: E.footer,
                      children: [
                        (0, l.jsx)(o.Button, {
                          color: o.Button.Colors.RED,
                          onClick: f,
                          submitting: j,
                          children: m.intl.string(m.t.KSqyfX),
                        }),
                        (0, l.jsx)(o.Button, {
                          look: o.Button.Looks.LINK,
                          color: o.Button.Colors.PRIMARY,
                          className: E.goBackButton,
                          onClick: T,
                          children: m.intl.string(m.t["05jDxs"]),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, l.jsx)(o.Slide, {
                id: 1,
                children: (0, l.jsx)("div", {
                  className: E.slideContainer,
                  children: (0, l.jsx)(h.Z, {
                    application: n,
                    subscriptionId: a.id,
                    onClose: T,
                  }),
                }),
              }),
            ],
          }),
        });
      }
      ((a = i || (i = {}))[(a.CANCEL = 0)] = "CANCEL"),
        (a[(a.SURVEY = 1)] = "SURVEY");
    },
    635840: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(47120);
      var i = n(200651),
        a = n(192379),
        l = n(481060),
        s = n(153867),
        o = n(626135),
        r = n(981631),
        c = n(388032),
        d = n(897913);
      let C = [
        {
          value:
            "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH",
          nameGetter: () => c.intl.string(c.t["+RZgNT"]),
        },
        {
          value:
            "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE",
          nameGetter: () => c.intl.string(c.t.kgPXgo),
        },
        {
          value:
            "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH",
          nameGetter: () => c.intl.string(c.t.vujsUF),
        },
        {
          value:
            "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE",
          nameGetter: () => c.intl.string(c.t.AYAOLC),
        },
        {
          value:
            "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER",
          nameGetter: () => c.intl.string(c.t.wZLu3d),
        },
      ];
      function u(e) {
        let { application: t, subscriptionId: n, onClose: u } = e,
          [_, N] = a.useState(!1),
          [S, h] = a.useState(null),
          [I, m] = a.useState(""),
          E = a.useCallback(() => {
            null != S &&
              (o.default.track(
                r.rMx.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED,
                {
                  answer: S,
                  application_id: t.id,
                  reason: I,
                  subscription_id: n,
                },
              ),
              u());
          }, [t.id, n, S, u, I]);
        return (
          a.useEffect(() => {
            s.ZP.updatedUnsyncedSettings({
              disableApplicationSubscriptionCancellationSurvey: _,
            });
          }, [_]),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)(l.ModalHeader, {
                className: d.headerContainer,
                separator: !1,
                children: [
                  (0, i.jsxs)("div", {
                    className: d.titleContainer,
                    children: [
                      (0, i.jsx)(l.Text, {
                        className: d.headerTitle,
                        variant: "text-lg/semibold",
                        children: c.intl.string(c.t.zPxMdX),
                      }),
                      (0, i.jsx)(l.ModalCloseButton, {
                        className: d.modalCloseButton,
                        onClick: u,
                      }),
                    ],
                  }),
                  (0, i.jsx)(l.Spacer, { size: 8 }),
                  (0, i.jsx)(l.Text, {
                    className: d.headerSubtitle,
                    variant: "text-md/medium",
                    children: c.intl.string(c.t.QJGdBw),
                  }),
                ],
              }),
              (0, i.jsxs)(l.ModalContent, {
                children: [
                  (0, i.jsx)("div", {
                    className: d.answerChoicesContainer,
                    children: (0, i.jsx)(l.RadioGroup, {
                      value: S,
                      options: C.map((e) => {
                        let { nameGetter: t, value: n } = e;
                        return { name: t(), value: n };
                      }),
                      onChange: (e) => h(e.value),
                      withTransparentBackground: !0,
                    }),
                  }),
                  "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER" ===
                    S &&
                    (0, i.jsx)(l.TextInput, {
                      autoFocus: !0,
                      className: d.otherField,
                      placeholder: c.intl.string(c.t.s6tM8f),
                      value: I,
                      onChange: m,
                    }),
                ],
              }),
              (0, i.jsxs)(l.ModalFooter, {
                className: d.footer,
                children: [
                  (0, i.jsx)(l.Button, {
                    onClick: E,
                    color: l.Button.Colors.BRAND,
                    disabled: null == S,
                    children: c.intl.string(c.t.geKm7u),
                  }),
                  (0, i.jsx)(l.Checkbox, {
                    type: l.Checkbox.Types.INVERTED,
                    value: _,
                    onChange: (e, t) => N(t),
                    size: 20,
                    className: d.__invalid_checkbox,
                    children: (0, i.jsx)(l.Text, {
                      variant: "text-sm/medium",
                      children: c.intl.string(c.t["3vPFQk"]),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    825771: function (e, t, n) {
      e.exports = {
        modal: "modal_a6c1fe",
        content: "content_a6c1fe",
        footer: "footer_a6c1fe",
        goBackButton: "goBackButton_a6c1fe",
        slideContainer: "slideContainer_a6c1fe",
      };
    },
    897913: function (e, t, n) {
      e.exports = {
        headerContainer: "headerContainer_cec8d6",
        titleContainer: "titleContainer_cec8d6",
        headerTitle: "headerTitle_cec8d6",
        modalCloseButton: "modalCloseButton_cec8d6",
        headerSubtitle: "headerSubtitle_cec8d6",
        answerChoicesContainer: "answerChoicesContainer_cec8d6",
        otherField: "otherField_cec8d6",
        footer: "footer_cec8d6",
      };
    },
  },
]);
//# sourceMappingURL=83f894446db6e0a2438e.js.map
