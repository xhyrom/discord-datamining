"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["83264"],
  {
    530530: function (e) {
      e.exports = "/assets/aa627c7f05d05522aad6.svg";
    },
    230651: function (e) {
      e.exports = "/assets/5809144265043d69f722.svg";
    },
    497494: function (e) {
      e.exports = "/assets/ac8ab949c6be6087dd8c.svg";
    },
    57875: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return l;
        },
      }),
        s(47120);
      var n = s(200651),
        r = s(192379),
        o = s(748780),
        a = s(481060),
        i = s(532864);
      class l extends r.Component {
        componentWillEnter(e) {
          let { offset: t } = this.state;
          t.setValue(1), o.Z.spring(t, { toValue: 0, duration: 75 }).start(e);
        }
        componentWillLeave(e) {
          let { offset: t } = this.state;
          t.setValue(0),
            this.setState({ isExiting: !0 }, () => {
              o.Z.spring(t, { toValue: -1, duration: 75 }).start(e);
            });
        }
        render() {
          let { isExiting: e, offset: t } = this.state;
          return (0, n.jsx)(o.Z.div, {
            className: i.wrapper,
            style: {
              left: 0,
              position: e ? "absolute" : "relative",
              top: 0,
              transform: [
                {
                  translateX: t.interpolate({
                    inputRange: [-1, 1],
                    outputRange: ["-100%", "100%"],
                  }),
                },
              ],
            },
            children: (0, n.jsx)(a.ModalContent, {
              className: i.contentWrapper,
              children: this.props.children,
            }),
          });
        }
        constructor(...e) {
          var t, s, n;
          super(...e),
            (t = this),
            (s = "state"),
            (n = {
              isExiting: !1,
              offset: new o.Z.Value(0),
              selectedValue: null,
            }),
            s in t
              ? Object.defineProperty(t, s, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[s] = n);
        }
      }
    },
    711184: function (e, t, s) {
      s.r(t), s(47120);
      var n = s(200651),
        r = s(192379),
        o = s(120356),
        a = s.n(o),
        i = s(215569),
        l = s(481060),
        u = s(401190),
        d = s(490529),
        c = s(57875),
        p = s(368003),
        h = s(981631),
        g = s(689938),
        m = s(761610),
        _ = s(113207);
      function b(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      let S = (e) =>
          (0, n.jsx)("div", {
            className: m.innerContentWrapper,
            children: e.children,
          }),
        E = {
          [h.gkr.HOUSE_1]: s(530530),
          [h.gkr.HOUSE_2]: s(230651),
          [h.gkr.HOUSE_3]: s(497494),
        },
        H = {
          [h.gkr.HOUSE_1]: m.quizResultLogoWrapperHouse1,
          [h.gkr.HOUSE_2]: m.quizResultLogoWrapperHouse2,
          [h.gkr.HOUSE_3]: m.quizResultLogoWrapperHouse3,
        },
        x = (e) =>
          ({
            [h.gkr.HOUSE_1]: g.Z.Messages.HYPESQUAD_QUIZ_BODY_HOUSE_1,
            [h.gkr.HOUSE_2]: g.Z.Messages.HYPESQUAD_QUIZ_BODY_HOUSE_2,
            [h.gkr.HOUSE_3]: g.Z.Messages.HYPESQUAD_QUIZ_BODY_HOUSE_3,
          })[e];
      class R extends r.Component {
        getSelectedHouseID() {
          let e;
          let { responses: t } = this.state,
            s = {},
            n = 0;
          return (Object.keys(t).forEach((r) => {
            let o = t[r];
            null == s[o] && (s[o] = 0),
              s[o]++,
              s[o] > n && ((e = o), (n = s[o]));
          }),
          null == e || e === h.jsM)
            ? (0, d.uj)()
            : e;
        }
        renderUnknownErrorMessage() {
          return (0, n.jsx)(
            c.Z,
            {
              children: (0, n.jsxs)(r.Fragment, {
                children: [
                  (0, n.jsx)(l.Heading, {
                    className: m.quizResultHeading,
                    variant: "heading-xl/semibold",
                    children: g.Z.Messages.HYPESQUAD_ERROR_HEADING,
                  }),
                  (0, n.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    children: g.Z.Messages.HYPESQUAD_ERROR_BODY.format({
                      emailAddress: "hypesquad@".concat(h.U9i),
                      emailAddressLink: "mailto:hypesquad@".concat(h.U9i),
                    }),
                  }),
                ],
              }),
            },
            "error",
          );
        }
        renderQuizResult() {
          let { selectedHouse: e } = this.state;
          if (null == e) return null;
          let t = g.Z.Messages.HYPESQUAD_QUIZ_TITLE.format({
            house: (0, d.X8)(e),
          });
          return (0, n.jsx)(
            c.Z,
            {
              children: (0, n.jsxs)(r.Fragment, {
                children: [
                  (0, n.jsx)("div", {
                    className: a()(
                      m.quizResultLogoWrapper,
                      H[e],
                      _.marginBottom20,
                    ),
                    children: (0, n.jsx)("img", {
                      alt: t,
                      className: m.quizResultLogo,
                      src: E[e],
                    }),
                  }),
                  (0, n.jsx)(l.Heading, {
                    className: m.quizResultHeading,
                    variant: "heading-xl/semibold",
                    children: t,
                  }),
                  (0, n.jsx)(l.Text, {
                    className: m.quizResultBody,
                    variant: "text-sm/normal",
                    children: x(e),
                  }),
                ],
              }),
            },
            "submit-step",
          );
        }
        renderContent() {
          let {
            currentStep: e,
            hasUnknownError: t,
            hasSubmittedHouse: s,
            questions: r,
          } = this.state;
          if (t) return this.renderUnknownErrorMessage();
          if (s) return this.renderQuizResult();
          let o = r[e];
          return (0, n.jsx)(
            c.Z,
            {
              children: (0, n.jsx)(
                p.Z,
                {
                  onSelect: this.handleQuestionSelect,
                  options: o.options,
                  prompt: o.prompt,
                },
                e,
              ),
            },
            e,
          );
        }
        renderHeaderCopy() {
          let {
            currentStep: e,
            hasUnknownError: t,
            hasSubmittedHouse: s,
            questions: n,
          } = this.state;
          return t
            ? g.Z.Messages.HYPESQUAD_QUIZ_ERROR_MODAL_TITLE
            : s
              ? g.Z.Messages.HYPESQUAD_QUIZ_COMPLETED_MODAL_TITLE
              : g.Z.Messages.HYPESQUAD_QUIZ_ONGOING_MODAL_TITLE.format({
                  currentQuestion: e + 1,
                  questionCount: n.length,
                });
        }
        renderNewsletterWarning() {
          return (0, n.jsx)(c.Z, {
            children: (0, n.jsx)(l.Text, {
              className: m.nameFormPreface,
              variant: "text-md/normal",
              children: g.Z.Messages.HYPESQUAD_NEWSLETTER_WARNING,
            }),
          });
        }
        renderPrimaryAction() {
          let {
              currentStep: e,
              responses: t,
              hasUnknownError: s,
              hasSubmittedHouse: r,
              isRequestPending: o,
              questions: a,
            } = this.state,
            i = null == t[e];
          return s
            ? (0, n.jsx)(l.Button, {
                type: "submit",
                color: l.Button.Colors.BRAND,
                onClick: this.handleSubmitButtonClick,
                submitting: o,
                children: g.Z.Messages.HYPESQUAD_QUIZ_RETRY,
              })
            : r
              ? (0, n.jsx)(l.Button, {
                  type: "submit",
                  color: l.Button.Colors.BRAND,
                  onClick: this.props.onClose,
                  children: g.Z.Messages.HYPESQUAD_QUIZ_CLOSE,
                })
              : e === a.length - 1
                ? (0, n.jsx)(l.Button, {
                    disabled: i,
                    type: "submit",
                    color: l.Button.Colors.BRAND,
                    onClick: this.handleSubmitButtonClick,
                    submitting: o,
                    children: g.Z.Messages.HYPESQUAD_QUIZ_SHOW_MY_HOUSE,
                  })
                : (0, n.jsx)(l.Button, {
                    disabled: i,
                    type: "submit",
                    color: l.Button.Colors.BRAND,
                    onClick: this.handleNextQuestionButtonClick,
                    children: g.Z.Messages.HYPESQUAD_QUIZ_NEXT_QUESTION,
                  });
        }
        renderSecondaryAction() {
          let { hasSubmittedHouse: e } = this.state;
          return e
            ? null
            : (0, n.jsx)(l.Button, {
                type: "button",
                look: l.Button.Looks.LINK,
                color: l.Button.Colors.PRIMARY,
                onClick: this.props.onClose,
                children: g.Z.Messages.HYPESQUAD_QUIZ_CANCEL,
              });
        }
        render() {
          let { selectedHouse: e } = this.state,
            { transitionState: t } = this.props;
          return (0, n.jsxs)(l.ModalRoot, {
            size: null == e ? l.ModalSize.MEDIUM : l.ModalSize.SMALL,
            transitionState: t,
            children: [
              (0, n.jsx)(l.ModalHeader, {
                separator: !1,
                children: (0, n.jsx)(l.Heading, {
                  variant: "heading-lg/semibold",
                  children: this.renderHeaderCopy(),
                }),
              }),
              (0, n.jsx)("div", {
                className: m.outerContentWrapper,
                children: (0, n.jsx)(i.W, {
                  component: S,
                  children: this.renderContent(),
                }),
              }),
              (0, n.jsxs)(l.ModalFooter, {
                children: [
                  this.renderPrimaryAction(),
                  this.renderSecondaryAction(),
                ],
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            b(this, "state", {
              currentStep: 0,
              hasSubmittedHouse: !1,
              hasUnknownError: !1,
              isRequestPending: !1,
              questions: (0, d.tI)(),
              responses: {},
              selectedHouse: null,
            }),
            b(this, "handleQuestionSelect", (e) => {
              this.setState((t) => ({
                responses: { ...t.responses, [t.currentStep]: e },
              }));
            }),
            b(this, "handleSubmitButtonClick", () => {
              let e = this.getSelectedHouseID();
              this.setState({ isRequestPending: !0 }, () => {
                u.Z.joinHypeSquadOnline({ houseID: e })
                  .then(() => {
                    this.setState({
                      hasUnknownError: !1,
                      hasSubmittedHouse: !0,
                      isRequestPending: !1,
                      selectedHouse: e,
                    });
                  })
                  .catch(() => {
                    this.setState({
                      hasUnknownError: !0,
                      hasSubmittedHouse: !1,
                      isRequestPending: !1,
                    });
                  });
              });
            }),
            b(this, "handleKeyDown", (e) => {
              e.keyCode === h.yXg.ENTER && this.handleSubmitButtonClick();
            }),
            b(this, "handleNextQuestionButtonClick", () => {
              this.setState((e) => ({ currentStep: e.currentStep + 1 }));
            });
        }
      }
      t.default = R;
    },
    368003: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return h;
        },
      }),
        s(47120);
      var n = s(200651),
        r = s(192379),
        o = s(404759),
        a = s.n(o),
        i = s(423650),
        l = s.n(i),
        u = s(481060),
        d = s(689938),
        c = s(984600);
      function p(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      class h extends r.Component {
        render() {
          let { selectedValue: e } = this.state;
          return (0, n.jsxs)(r.Fragment, {
            children: [
              (0, n.jsx)(u.Heading, {
                className: c.prompt,
                variant: "heading-md/semibold",
                children: this.props.prompt,
              }),
              (0, n.jsx)("hr", { className: c.separator }),
              (0, n.jsx)(u.Text, {
                className: c.selectYourAnswer,
                variant: "text-xs/normal",
                children: d.Z.Messages.HYPESQUAD_QUIZ_SELECT_ANSWER,
              }),
              (0, n.jsx)(u.RadioGroup, {
                options: this.getQuestionOptions(),
                onChange: this.handleOptionChange,
                value: e,
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            p(this, "state", { selectedValue: null }),
            p(
              this,
              "getQuestionOptions",
              a()(() =>
                l()(
                  this.props.options.map((e) => ({
                    name: e.copy,
                    value: e.house,
                  })),
                ),
              ),
            ),
            p(this, "handleOptionChange", (e) => {
              let { onSelect: t } = this.props;
              this.setState({ selectedValue: e.value }), t(e.value);
            });
        }
      }
    },
    532864: function (e, t, s) {
      e.exports = {
        wrapper: "wrapper_ccbc80",
        contentWrapper: "contentWrapper_ccbc80",
      };
    },
    761610: function (e, t, s) {
      e.exports = {
        outerContentWrapper: "outerContentWrapper_abbfdb",
        innerContentWrapper: "innerContentWrapper_abbfdb",
        quizResultHeading: "quizResultHeading_abbfdb",
        nameFormPreface: "nameFormPreface_abbfdb",
        quizResultBody: "quizResultBody_abbfdb",
        quizResultLogoWrapper: "quizResultLogoWrapper_abbfdb",
        quizResultLogo: "quizResultLogo_abbfdb",
        quizResultLogoWrapperHouse1: "quizResultLogoWrapperHouse1_abbfdb",
        quizResultLogoWrapperHouse2: "quizResultLogoWrapperHouse2_abbfdb",
        quizResultLogoWrapperHouse3: "quizResultLogoWrapperHouse3_abbfdb",
      };
    },
    984600: function (e, t, s) {
      e.exports = {
        prompt: "prompt_ff74de",
        selectYourAnswer: "selectYourAnswer_ff74de",
        separator: "separator_ff74de",
      };
    },
  },
]);
//# sourceMappingURL=897c5548591e62c2e569.js.map
