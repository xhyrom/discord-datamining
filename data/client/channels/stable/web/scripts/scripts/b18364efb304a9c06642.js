"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["6284"],
  {
    257514: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return L;
          },
        }),
        s(47120);
      var a,
        n,
        C = s(735250),
        i = s(470079),
        _ = s(481060),
        o = s(355467),
        l = s(100527),
        r = s(906732),
        I = s(313201),
        N = s(740492),
        c = s(626135),
        A = s(171246),
        d = s(225715),
        S = s(635840),
        O = s(981631),
        E = s(689938),
        T = s(122843);
      let u = (e) => {
        let [t, s] = i.useState(!1),
          [a, n] = i.useState(null);
        return {
          cancelSubscription: async (t) => {
            try {
              return s(!0), await o.EO(t, e), !0;
            } catch (e) {
              n(e);
            } finally {
              s(!1);
            }
          },
          error: a,
          submitting: t,
        };
      };
      function L(e) {
        let {
            transitionState: t,
            application: s,
            storeListing: a,
            subscription: n,
            guild: o,
            onClose: L,
          } = e,
          P = (0, I.Dt)(),
          { analyticsLocations: R } = (0, r.ZP)(
            l.Z.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL,
          ),
          { cancelSubscription: U, error: h, submitting: m } = u(R),
          [x, B] = i.useState(0),
          p = async () => {
            (await U(n.id)) &&
              (N.ZP.disableApplicationSubscriptionCancellationSurvey
                ? L()
                : B(1));
          };
        i.useEffect(() => {
          c.default.track(O.rMx.CANCELLATION_FLOW_STARTED, {
            location_stack: R,
          });
        }, [R]);
        let M = (0, A.KW)(a.skuFlags);
        return (0, C.jsx)(_.ModalRoot, {
          transitionState: t,
          className: T.modal,
          "aria-labelledby": P,
          children: (0, C.jsxs)(_.Slides, {
            activeSlide: x,
            width: 440,
            children: [
              (0, C.jsx)(_.Slide, {
                id: 0,
                children: (0, C.jsxs)("div", {
                  className: T.slideContainer,
                  children: [
                    null != h
                      ? (0, C.jsx)(_.FormErrorBlock, { children: h.message })
                      : null,
                    (0, C.jsxs)(_.ModalContent, {
                      className: T.content,
                      children: [
                        (0, C.jsx)(_.Spacer, { size: 16 }),
                        (0, C.jsxs)(d.q$, {
                          children: [
                            (0, C.jsx)(d.CW, { application: s }),
                            (0, C.jsx)(d.r0, {
                              id: P,
                              children:
                                E.Z.Messages.APPLICATION_CANCEL_SUBSCRIPTION_MODAL_TITLE_V2.format(
                                  { tier: a.summary },
                                ),
                            }),
                            (0, C.jsx)(d.s$, {}),
                            (0, C.jsx)(d.K9, {
                              title:
                                E.Z.Messages
                                  .APPLICATION_CANCEL_SUBSCRIPTION_MODAL_HEADER,
                              description: M
                                ? E.Z.Messages.APPLICATION_CANCEL_USER_SUBSCRIPTION_MODAL_DESCRIPTION.format(
                                    { timestamp: n.currentPeriodEnd.getTime() },
                                  )
                                : E.Z.Messages.APPLICATION_CANCEL_GUILD_SUBSCRIPTION_MODAL_DESCRIPTION.format(
                                    {
                                      timestamp: n.currentPeriodEnd.getTime(),
                                      guildName: null == o ? void 0 : o.name,
                                    },
                                  ),
                            }),
                            (0, C.jsx)(d.G9, {
                              applicationId: a.applicationId,
                              storeListingBenefits: a.benefits,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, C.jsxs)(_.ModalFooter, {
                      className: T.footer,
                      children: [
                        (0, C.jsx)(_.Button, {
                          color: _.Button.Colors.RED,
                          onClick: p,
                          submitting: m,
                          children:
                            E.Z.Messages
                              .APPLICATION_CANCEL_SUBSCRIPTION_MODAL_CANCEL_CTA,
                        }),
                        (0, C.jsx)(_.Button, {
                          look: _.Button.Looks.LINK,
                          color: _.Button.Colors.PRIMARY,
                          className: T.goBackButton,
                          onClick: L,
                          children:
                            E.Z.Messages
                              .APPLICATION_CANCEL_SUBSCRIPTION_MODAL_NEVERMIND_CTA,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, C.jsx)(_.Slide, {
                id: 1,
                children: (0, C.jsx)("div", {
                  className: T.slideContainer,
                  children: (0, C.jsx)(S.Z, {
                    application: s,
                    subscriptionId: n.id,
                    onClose: L,
                  }),
                }),
              }),
            ],
          }),
        });
      }
      ((n = a || (a = {}))[(n.CANCEL = 0)] = "CANCEL"),
        (n[(n.SURVEY = 1)] = "SURVEY");
    },
    635840: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return N;
        },
      }),
        s(47120);
      var a = s(735250),
        n = s(470079),
        C = s(481060),
        i = s(153867),
        _ = s(626135),
        o = s(981631),
        l = s(689938),
        r = s(310354);
      let I = [
        {
          value:
            "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH",
          nameGetter: () =>
            l.Z.Messages
              .APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH,
        },
        {
          value:
            "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE",
          nameGetter: () =>
            l.Z.Messages
              .APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE,
        },
        {
          value:
            "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH",
          nameGetter: () =>
            l.Z.Messages
              .APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH,
        },
        {
          value:
            "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE",
          nameGetter: () =>
            l.Z.Messages
              .APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE,
        },
        {
          value:
            "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER",
          nameGetter: () =>
            l.Z.Messages
              .APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER,
        },
      ];
      function N(e) {
        let { application: t, subscriptionId: s, onClose: N } = e,
          [c, A] = n.useState(!1),
          [d, S] = n.useState(null),
          [O, E] = n.useState(""),
          T = n.useCallback(() => {
            null != d &&
              (_.default.track(
                o.rMx.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED,
                {
                  answer: d,
                  application_id: t.id,
                  reason: O,
                  subscription_id: s,
                },
              ),
              N());
          }, [t.id, s, d, N, O]);
        return (
          n.useEffect(() => {
            i.ZP.updatedUnsyncedSettings({
              disableApplicationSubscriptionCancellationSurvey: c,
            });
          }, [c]),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)(C.ModalHeader, {
                className: r.headerContainer,
                separator: !1,
                children: [
                  (0, a.jsxs)("div", {
                    className: r.titleContainer,
                    children: [
                      (0, a.jsx)(C.Text, {
                        className: r.headerTitle,
                        variant: "text-lg/semibold",
                        children:
                          l.Z.Messages
                            .APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_TITLE,
                      }),
                      (0, a.jsx)(C.ModalCloseButton, {
                        className: r.modalCloseButton,
                        onClick: N,
                      }),
                    ],
                  }),
                  (0, a.jsx)(C.Spacer, { size: 8 }),
                  (0, a.jsx)(C.Text, {
                    className: r.headerSubtitle,
                    variant: "text-md/medium",
                    children:
                      l.Z.Messages
                        .APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_SUBTITLE,
                  }),
                ],
              }),
              (0, a.jsxs)(C.ModalContent, {
                children: [
                  (0, a.jsx)("div", {
                    className: r.answerChoicesContainer,
                    children: (0, a.jsx)(C.RadioGroup, {
                      value: d,
                      options: I.map((e) => {
                        let { nameGetter: t, value: s } = e;
                        return { name: t(), value: s };
                      }),
                      onChange: (e) => S(e.value),
                      withTransparentBackground: !0,
                    }),
                  }),
                  "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER" ===
                    d &&
                    (0, a.jsx)(C.TextInput, {
                      autoFocus: !0,
                      className: r.otherField,
                      placeholder:
                        l.Z.Messages
                          .APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_OTHER_PLACEHOLDER,
                      value: O,
                      onChange: E,
                    }),
                ],
              }),
              (0, a.jsxs)(C.ModalFooter, {
                className: r.footer,
                children: [
                  (0, a.jsx)(C.Button, {
                    onClick: T,
                    color: C.Button.Colors.BRAND,
                    disabled: null == d,
                    children: l.Z.Messages.SUBMIT,
                  }),
                  (0, a.jsx)(C.Checkbox, {
                    type: C.Checkbox.Types.INVERTED,
                    value: c,
                    onChange: (e, t) => A(t),
                    size: 20,
                    className: r.__invalid_checkbox,
                    children: (0, a.jsx)(C.Text, {
                      variant: "text-sm/medium",
                      children:
                        l.Z.Messages
                          .APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_DONT_SHOW_AGAIN,
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    122843: function (e, t, s) {
      e.exports = {
        modal: "modal_a6c1fe",
        content: "content_a6c1fe",
        footer: "footer_a6c1fe",
        goBackButton: "goBackButton_a6c1fe",
        slideContainer: "slideContainer_a6c1fe",
      };
    },
    310354: function (e, t, s) {
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
//# sourceMappingURL=b18364efb304a9c06642.js.map
