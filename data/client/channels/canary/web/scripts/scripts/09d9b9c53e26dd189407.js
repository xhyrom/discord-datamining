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
    57875: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      }),
        n(47120);
      var s = n(200651),
        r = n(192379),
        i = n(748780),
        o = n(481060),
        a = n(573357);
      class l extends r.Component {
        componentWillEnter(e) {
          let { offset: t } = this.state;
          t.setValue(1), i.Z.spring(t, { toValue: 0, duration: 75 }).start(e);
        }
        componentWillLeave(e) {
          let { offset: t } = this.state;
          t.setValue(0),
            this.setState({ isExiting: !0 }, () => {
              i.Z.spring(t, { toValue: -1, duration: 75 }).start(e);
            });
        }
        render() {
          let { isExiting: e, offset: t } = this.state;
          return (0, s.jsx)(i.Z.div, {
            className: a.wrapper,
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
            children: (0, s.jsx)(o.ModalContent, {
              className: a.contentWrapper,
              children: this.props.children,
            }),
          });
        }
        constructor(...e) {
          var t, n, s;
          super(...e),
            (t = this),
            (n = "state"),
            (s = {
              isExiting: !1,
              offset: new i.Z.Value(0),
              selectedValue: null,
            }),
            n in t
              ? Object.defineProperty(t, n, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = s);
        }
      }
    },
    711184: function (e, t, n) {
      n.r(t), n(47120);
      var s = n(200651),
        r = n(192379),
        i = n(120356),
        o = n.n(i),
        a = n(215569),
        l = n(481060),
        u = n(401190),
        d = n(490529),
        c = n(57875),
        p = n(368003),
        h = n(981631),
        g = n(388032),
        m = n(618501),
        b = n(275477);
      function x(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let f = (e) =>
          (0, s.jsx)("div", {
            className: m.innerContentWrapper,
            children: e.children,
          }),
        j = {
          [h.gkr.HOUSE_1]: n(530530),
          [h.gkr.HOUSE_2]: n(230651),
          [h.gkr.HOUSE_3]: n(497494),
        },
        S = {
          [h.gkr.HOUSE_1]: m.quizResultLogoWrapperHouse1,
          [h.gkr.HOUSE_2]: m.quizResultLogoWrapperHouse2,
          [h.gkr.HOUSE_3]: m.quizResultLogoWrapperHouse3,
        },
        C = (e) =>
          ({
            [h.gkr.HOUSE_1]: g.intl.string(g.t["hNL/nJ"]),
            [h.gkr.HOUSE_2]: g.intl.string(g.t.jVomur),
            [h.gkr.HOUSE_3]: g.intl.string(g.t["+kg5zs"]),
          })[e];
      class H extends r.Component {
        getSelectedHouseID() {
          let e;
          let { responses: t } = this.state,
            n = {},
            s = 0;
          return (Object.keys(t).forEach((r) => {
            let i = t[r];
            null == n[i] && (n[i] = 0),
              n[i]++,
              n[i] > s && ((e = i), (s = n[i]));
          }),
          null == e || e === h.jsM)
            ? (0, d.uj)()
            : e;
        }
        renderUnknownErrorMessage() {
          return (0, s.jsx)(
            c.Z,
            {
              children: (0, s.jsxs)(r.Fragment, {
                children: [
                  (0, s.jsx)(l.Heading, {
                    className: m.quizResultHeading,
                    variant: "heading-xl/semibold",
                    children: g.intl.string(g.t["8A8ry8"]),
                  }),
                  (0, s.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    children: g.intl.format(g.t["4JWDXl"], {
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
          let t = g.intl.formatToPlainString(g.t.HrcQAA, {
            house: (0, d.X8)(e),
          });
          return (0, s.jsx)(
            c.Z,
            {
              children: (0, s.jsxs)(r.Fragment, {
                children: [
                  (0, s.jsx)("div", {
                    className: o()(
                      m.quizResultLogoWrapper,
                      S[e],
                      b.marginBottom20,
                    ),
                    children: (0, s.jsx)("img", {
                      alt: t,
                      className: m.quizResultLogo,
                      src: j[e],
                    }),
                  }),
                  (0, s.jsx)(l.Heading, {
                    className: m.quizResultHeading,
                    variant: "heading-xl/semibold",
                    children: t,
                  }),
                  (0, s.jsx)(l.Text, {
                    className: m.quizResultBody,
                    variant: "text-sm/normal",
                    children: C(e),
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
            hasSubmittedHouse: n,
            questions: r,
          } = this.state;
          if (t) return this.renderUnknownErrorMessage();
          if (n) return this.renderQuizResult();
          let i = r[e];
          return (0, s.jsx)(
            c.Z,
            {
              children: (0, s.jsx)(
                p.Z,
                {
                  onSelect: this.handleQuestionSelect,
                  options: i.options,
                  prompt: i.prompt,
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
            hasSubmittedHouse: n,
            questions: s,
          } = this.state;
          return t
            ? g.intl.string(g.t.fMgJMz)
            : n
              ? g.intl.string(g.t.mW2CNz)
              : g.intl.formatToPlainString(g.t["4n8Pb2"], {
                  currentQuestion: e + 1,
                  questionCount: s.length,
                });
        }
        renderNewsletterWarning() {
          return (0, s.jsx)(c.Z, {
            children: (0, s.jsx)(l.Text, {
              className: m.nameFormPreface,
              variant: "text-md/normal",
              children: g.intl.string(g.t["3kUvgo"]),
            }),
          });
        }
        renderPrimaryAction() {
          let {
              currentStep: e,
              responses: t,
              hasUnknownError: n,
              hasSubmittedHouse: r,
              isRequestPending: i,
              questions: o,
            } = this.state,
            a = null == t[e];
          return n
            ? (0, s.jsx)(l.Button, {
                type: "submit",
                color: l.Button.Colors.BRAND,
                onClick: this.handleSubmitButtonClick,
                submitting: i,
                children: g.intl.string(g.t["5BGOBA"]),
              })
            : r
              ? (0, s.jsx)(l.Button, {
                  type: "submit",
                  color: l.Button.Colors.BRAND,
                  onClick: this.props.onClose,
                  children: g.intl.string(g.t["Wc/k5O"]),
                })
              : e === o.length - 1
                ? (0, s.jsx)(l.Button, {
                    disabled: a,
                    type: "submit",
                    color: l.Button.Colors.BRAND,
                    onClick: this.handleSubmitButtonClick,
                    submitting: i,
                    children: g.intl.string(g.t.j5vHo6),
                  })
                : (0, s.jsx)(l.Button, {
                    disabled: a,
                    type: "submit",
                    color: l.Button.Colors.BRAND,
                    onClick: this.handleNextQuestionButtonClick,
                    children: g.intl.string(g.t.cgonQE),
                  });
        }
        renderSecondaryAction() {
          let { hasSubmittedHouse: e } = this.state;
          return e
            ? null
            : (0, s.jsx)(l.Button, {
                type: "button",
                look: l.Button.Looks.LINK,
                color: l.Button.Colors.PRIMARY,
                onClick: this.props.onClose,
                children: g.intl.string(g.t["5NfNYm"]),
              });
        }
        render() {
          let { selectedHouse: e } = this.state,
            { transitionState: t } = this.props;
          return (0, s.jsxs)(l.ModalRoot, {
            size: null == e ? l.ModalSize.MEDIUM : l.ModalSize.SMALL,
            transitionState: t,
            children: [
              (0, s.jsx)(l.ModalHeader, {
                separator: !1,
                children: (0, s.jsx)(l.Heading, {
                  variant: "heading-lg/semibold",
                  children: this.renderHeaderCopy(),
                }),
              }),
              (0, s.jsx)("div", {
                className: m.outerContentWrapper,
                children: (0, s.jsx)(a.W, {
                  component: f,
                  children: this.renderContent(),
                }),
              }),
              (0, s.jsxs)(l.ModalFooter, {
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
            x(this, "state", {
              currentStep: 0,
              hasSubmittedHouse: !1,
              hasUnknownError: !1,
              isRequestPending: !1,
              questions: (0, d.tI)(),
              responses: {},
              selectedHouse: null,
            }),
            x(this, "handleQuestionSelect", (e) => {
              this.setState((t) => ({
                responses: { ...t.responses, [t.currentStep]: e },
              }));
            }),
            x(this, "handleSubmitButtonClick", () => {
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
            x(this, "handleKeyDown", (e) => {
              e.keyCode === h.yXg.ENTER && this.handleSubmitButtonClick();
            }),
            x(this, "handleNextQuestionButtonClick", () => {
              this.setState((e) => ({ currentStep: e.currentStep + 1 }));
            });
        }
      }
      t.default = H;
    },
    368003: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      }),
        n(47120);
      var s = n(200651),
        r = n(192379),
        i = n(404759),
        o = n.n(i),
        a = n(423650),
        l = n.n(a),
        u = n(481060),
        d = n(388032),
        c = n(23214);
      function p(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class h extends r.Component {
        render() {
          let { selectedValue: e } = this.state;
          return (0, s.jsxs)(r.Fragment, {
            children: [
              (0, s.jsx)(u.Heading, {
                className: c.prompt,
                variant: "heading-md/semibold",
                children: this.props.prompt,
              }),
              (0, s.jsx)("hr", { className: c.separator }),
              (0, s.jsx)(u.Text, {
                className: c.selectYourAnswer,
                variant: "text-xs/normal",
                children: d.intl.string(d.t.YeiLeH),
              }),
              (0, s.jsx)(u.RadioGroup, {
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
              o()(() =>
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
    573357: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_ccbc80",
        contentWrapper: "contentWrapper_ccbc80",
      };
    },
    618501: function (e, t, n) {
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
    23214: function (e, t, n) {
      e.exports = {
        prompt: "prompt_ff74de",
        selectYourAnswer: "selectYourAnswer_ff74de",
        separator: "separator_ff74de",
      };
    },
  },
]);
//# sourceMappingURL=09d9b9c53e26dd189407.js.map
