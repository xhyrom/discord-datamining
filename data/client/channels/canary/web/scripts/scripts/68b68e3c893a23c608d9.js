"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["65652"],
  {
    160557: function (e) {
      e.exports = "/assets/0f3afc83daac2a5bc943.png";
    },
    548647: function (e, n, s) {
      s.d(n, {
        n: function () {
          return _;
        },
      });
      var a = s(470079),
        t = s(442837),
        l = s(626135),
        i = s(236289),
        o = s(451284),
        r = s(613734),
        c = s(800530),
        d = s(981631);
      let _ = () => {
        let e = (0, t.e7)([i.Z], () => i.Z.getAppealClassificationId()),
          n = (0, r.YG)(null != e ? e : d.lds),
          s = (0, o.P)(),
          _ = (0, t.e7)([i.Z], () => i.Z.getIsDsaEligible());
        return a.useCallback(
          (a) => {
            l.default.track(d.rMx.SAFETY_HUB_ACTION, {
              action: a,
              account_standing: s.state,
              classification_ids: null != e ? [Number(e)] : null,
              source: c.s.AppealIngestion,
              is_dsa_eligible: _,
              violation_type: n.violationType,
            });
          },
          [s.state, e, n, _],
        );
      };
    },
    409617: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return C;
        },
      }),
        s(47120);
      var a = s(735250),
        t = s(470079),
        l = s(120356),
        i = s.n(l),
        o = s(442837),
        r = s(481060),
        c = s(570140),
        d = s(600164),
        _ = s(236289),
        E = s(788080),
        N = s(613734),
        u = s(800530),
        x = s(689938),
        A = s(332384),
        I = s(487043);
      function C(e) {
        let {
            isDsaEligible: n = !1,
            className: s,
            onClose: l,
            onNext: C,
            onBack: S,
          } = e,
          T = (0, N.U0)(),
          m = (0, o.e7)([_.Z], () => _.Z.getFreeTextAppealReason()),
          [h, M] = t.useState(""),
          [L, g] = t.useState(!1);
        t.useEffect(() => {
          M(null != m ? m : ""), g(T === u.bK.SOMETHING_ELSE);
        }, [m, T]);
        let O = (e) => {
            g(e === u.bK.SOMETHING_ELSE),
              e !== u.bK.SOMETHING_ELSE &&
                (M(""),
                c.Z.dispatch({
                  type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                  userInput: "",
                })),
              c.Z.dispatch({
                type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT",
                signal: e,
              });
          },
          p = u.RY.map((e) => ({ value: e, name: (0, E.ox)(e) }));
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(r.ModalHeader, {
              direction: d.Z.Direction.VERTICAL,
              className: I.header,
              separator: !1,
              children: [
                (0, a.jsx)(r.Heading, {
                  className: I.title,
                  variant: "heading-xl/semibold",
                  children: x.Z.Messages.APPEAL_INGESTION_MODAL_HEADER,
                }),
                (0, a.jsx)(r.Text, {
                  className: I.subtitle,
                  color: "header-secondary",
                  variant: "text-md/normal",
                  children:
                    x.Z.Messages
                      .APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_SUBHEADER,
                }),
                null != l &&
                  (0, a.jsx)(r.ModalCloseButton, {
                    className: I.closeButton,
                    onClick: l,
                  }),
              ],
            }),
            (0, a.jsxs)(r.ModalContent, {
              className: i()(A.modalContent, s),
              paddingFix: !1,
              children: [
                (0, a.jsx)(r.RadioGroup, {
                  radioPosition: "right",
                  radioItemClassName: I.radioItem,
                  size: r.RadioGroup.Sizes.NOT_SET,
                  value: T,
                  options: p,
                  onChange: (e) => {
                    let { value: n } = e;
                    return O(n);
                  },
                }),
                L &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(r.TextArea, {
                        rows: 4,
                        maxLength: 1024,
                        placeholder:
                          x.Z.Messages
                            .APPEAL_INGESTION_FREE_TEXT_REASON_ACTION_SHEET_PLACEHOLDER,
                        value: h,
                        onChange: M,
                        autoFocus: !0,
                      }),
                      (0, a.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        color: "header-muted",
                        children:
                          x.Z.Messages
                            .APPEAL_INGESTION_FREE_TEXT_REASON_ACTION_SHEET_FOOTER,
                      }),
                    ],
                  }),
                (0, a.jsx)(r.Text, {
                  variant: "text-sm/normal",
                  className: A.disclaimer,
                  children:
                    x.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DISCLAIMER.format(),
                }),
              ],
            }),
            (0, a.jsxs)(r.ModalFooter, {
              children: [
                (0, a.jsx)(r.Button, {
                  onClick: () => {
                    c.Z.dispatch({
                      type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                      userInput: h,
                    }),
                      null == C || C();
                  },
                  color: r.Button.Colors.BRAND,
                  children: x.Z.Messages.NEXT,
                }),
                n &&
                  (0, a.jsx)(r.Button, {
                    onClick: () => {
                      c.Z.dispatch({
                        type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                        userInput: h,
                      }),
                        null == S || S();
                    },
                    color: r.Button.Colors.PRIMARY,
                    look: r.Button.Looks.LINK,
                    children: x.Z.Messages.BACK,
                  }),
              ],
            }),
          ],
        });
      }
    },
    451426: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return I;
        },
      }),
        s(47120);
      var a = s(735250),
        t = s(470079),
        l = s(442837),
        i = s(481060),
        o = s(570140),
        r = s(600164),
        c = s(103879),
        d = s(236289),
        _ = s(788080),
        E = s(613734),
        N = s(981631),
        u = s(689938),
        x = s(6063),
        A = s(487043);
      function I(e) {
        let { className: n, onClose: s, onNext: I, onBack: C } = e,
          S = (0, l.e7)([d.Z], () => d.Z.getAppealClassificationId()),
          { classification: T } = (0, E.YG)(null != S ? S : N.lds),
          m = (0, _.c7)(null == T ? void 0 : T.description),
          h = (0, l.e7)([d.Z], () => d.Z.getIsSubmitting()),
          M = (0, l.e7)([d.Z], () => d.Z.getAppealSignal()),
          L = (0, l.e7)([d.Z], () => d.Z.getFreeTextAppealReason()),
          [g, O] = t.useState(!1),
          [p, j] = t.useState(""),
          P = t.useCallback((e) => {
            o.Z.dispatch({
              type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
              userInput: e,
            });
          }, []),
          b = t.useCallback(async () => {
            if (null !== S)
              try {
                j(""), await c.uR(S, M, L), null == I || I();
              } catch (n) {
                var e;
                j(
                  (0, _.Zs)(
                    null === (e = n.body) || void 0 === e ? void 0 : e.code,
                  ),
                );
              }
          }, [S, M, L, I]);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(i.ModalHeader, {
              direction: r.Z.Direction.VERTICAL,
              className: A.header,
              separator: !1,
              children: [
                (0, a.jsx)(i.Heading, {
                  className: A.title,
                  variant: "heading-xl/semibold",
                  children: u.Z.Messages.APPEAL_INGESTION_MODAL_HEADER,
                }),
                (0, a.jsx)(i.Text, {
                  className: A.subtitle,
                  color: "header-secondary",
                  variant: "text-md/normal",
                  children:
                    u.Z.Messages
                      .APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_SUBHEADER,
                }),
                null != s &&
                  (0, a.jsx)(i.ModalCloseButton, {
                    className: A.closeButton,
                    onClick: s,
                  }),
              ],
            }),
            (0, a.jsxs)(i.ModalContent, {
              className: n,
              paddingFix: !1,
              children: [
                (0, a.jsx)("ul", {
                  className: x.listContainer,
                  children: [(0, _.ox)(M), L]
                    .filter((e) => e.length > 0)
                    .map((e, n) =>
                      (0, a.jsx)(
                        "li",
                        {
                          className: x.listItem,
                          children: (0, a.jsx)(i.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            children: e,
                          }),
                        },
                        n,
                      ),
                    ),
                }),
                (0, a.jsx)("div", {
                  className: x.anchorContainer,
                  children: (0, a.jsx)(i.Anchor, {
                    onClick: () => O((e) => !e),
                    children: (0, a.jsx)(i.Heading, {
                      variant: "heading-md/normal",
                      color: "text-link",
                      children:
                        L.length > 0
                          ? u.Z.Messages
                              .APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_EDIT_DETAILS
                          : u.Z.Messages
                              .APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_ADD_DETAILS,
                    }),
                  }),
                }),
                g &&
                  (0, a.jsx)("div", {
                    className: x.inputContainer,
                    children: (0, a.jsx)(i.TextArea, { value: L, onChange: P }),
                  }),
                (0, a.jsx)("div", {
                  className: A.policyContainer,
                  children: (0, a.jsx)(i.Text, {
                    variant: "text-md/semibold",
                    children: m,
                  }),
                }),
                (0, a.jsx)(i.Text, {
                  variant: "text-xs/medium",
                  color: "header-secondary",
                  className: x.footerText,
                  children:
                    u.Z.Messages
                      .APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_FOOTER,
                }),
              ],
            }),
            (0, a.jsxs)(i.ModalFooter, {
              direction: r.Z.Direction.VERTICAL,
              children: [
                "" !== p &&
                  (0, a.jsx)(i.Text, {
                    className: x.errorText,
                    variant: "text-lg/normal",
                    color: "text-danger",
                    children: p,
                  }),
                (0, a.jsxs)("div", {
                  className: x.buttonContainer,
                  children: [
                    (0, a.jsx)(i.Button, {
                      look: i.Button.Looks.LINK,
                      color: i.Button.Colors.PRIMARY,
                      onClick: C,
                      disabled: h,
                      children: u.Z.Messages.BACK,
                    }),
                    (0, a.jsx)(i.Button, {
                      onClick: b,
                      color: i.Button.Colors.RED,
                      submitting: h,
                      children: u.Z.Messages.SUBMIT,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    696375: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return o;
        },
      });
      var a = s(735250);
      s(470079);
      var t = s(481060),
        l = s(259580),
        i = s(78648);
      function o(e) {
        let { url: n, text: s, onClick: o } = e;
        return (0, a.jsx)(t.Anchor, {
          href: n,
          onClick: o,
          className: i.externalLinkWrapper,
          children: (0, a.jsxs)(t.Clickable, {
            className: i.childButton,
            children: [
              (0, a.jsx)(t.Text, {
                className: i.childText,
                variant: "text-md/semibold",
                children: s,
              }),
              (0, a.jsx)(l.Z, {
                className: i.childIcon,
                direction: l.Z.Directions.RIGHT,
              }),
            ],
          }),
        });
      }
    },
    208265: function (e, n, s) {
      s.r(n),
        s.d(n, {
          default: function () {
            return x;
          },
        }),
        s(47120);
      var a = s(735250),
        t = s(470079),
        l = s(481060),
        i = s(613734),
        o = s(409617),
        r = s(451426),
        c = s(384725),
        d = s(534044),
        _ = s(670199),
        E = s(800530),
        N = s(981631),
        u = s(901030);
      function x(e) {
        let {
            classificationId: n,
            transitionState: s,
            initialSlide: x = E.Cs.SPEED_BUMP,
            onClose: A,
          } = e,
          [I, C] = t.useState(x),
          { classification: S, isDsaEligible: T } = (0, i.YG)(
            null != n ? n : N.lds,
          ),
          m = (null == S ? void 0 : S.is_spam) || !1,
          h = (null == S ? void 0 : S.is_coppa) || !1;
        t.useEffect(() => {
          T ? C(x) : C(E.Cs.COLLECT_SIGNAL);
        }, [C, x, T]);
        let M = t.useCallback(() => {
            c.Z.close(), A();
          }, [A]),
          L = t.useCallback(() => {
            var e, n;
            let s = null;
            (s = T
              ? null === (e = E.d9[I]) || void 0 === e
                ? void 0
                : e.next
              : null === (n = E.c6[I]) || void 0 === n
                ? void 0
                : n.next)
              ? C(s)
              : M();
          }, [I, T, M]),
          g = t.useCallback(() => {
            var e, n;
            let s;
            (s = T
              ? null === (e = E.d9[I]) || void 0 === e
                ? void 0
                : e.prev
              : null === (n = E.c6[I]) || void 0 === n
                ? void 0
                : n.prev)
              ? C(s)
              : M();
          }, [I, T, M]);
        return (0, a.jsx)(l.ModalRoot, {
          transitionState: s,
          disableTrack: !0,
          size: l.ModalSize.DYNAMIC,
          children: (0, a.jsx)("div", {
            className: u.container,
            children: (0, a.jsxs)(l.Slides, {
              activeSlide: I,
              width: 500,
              children: [
                (0, a.jsx)(l.Slide, {
                  id: E.Cs.SPEED_BUMP,
                  children: (0, a.jsx)(_.Z, {
                    classification: S,
                    onClose: M,
                    onNext: L,
                    isSpam: m,
                    isCoppa: h,
                  }),
                }),
                (0, a.jsx)(l.Slide, {
                  id: E.Cs.COLLECT_SIGNAL,
                  children: (0, a.jsx)(o.Z, {
                    isDsaEligible: T,
                    onClose: M,
                    onNext: L,
                    onBack: g,
                  }),
                }),
                (0, a.jsx)(l.Slide, {
                  id: E.Cs.CONFIRM_SUBMISSION,
                  children: (0, a.jsx)(r.Z, {
                    onClose: M,
                    onNext: L,
                    onBack: g,
                  }),
                }),
                (0, a.jsx)(l.Slide, {
                  id: E.Cs.REQUEST_SENT,
                  children: (0, a.jsx)(d.Z, { onNext: L }),
                }),
                (0, a.jsx)(l.Slide, {
                  id: E.Cs.THANKS,
                  children: (0, a.jsx)(o.Z, {
                    isDsaEligible: T,
                    onClose: M,
                    onNext: L,
                    onBack: g,
                  }),
                }),
              ],
            }),
          }),
        });
      }
    },
    534044: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return x;
        },
      });
      var a = s(735250);
      s(470079);
      var t = s(120356),
        l = s.n(t),
        i = s(481060),
        o = s(600164),
        r = s(548647),
        c = s(696375),
        d = s(800530),
        _ = s(689938),
        E = s(549476),
        N = s(487043),
        u = s(160557);
      function x(e) {
        let { className: n, onNext: s, onClose: t } = e,
          x = (0, r.n)();
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(i.ModalHeader, {
              direction: o.Z.Direction.VERTICAL,
              className: N.header,
              separator: !1,
              children: [
                (0, a.jsx)("div", {
                  className: E.iconContainer,
                  children: (0, a.jsx)("img", {
                    src: u,
                    alt: "",
                    className: E.icon,
                  }),
                }),
                (0, a.jsx)(i.Heading, {
                  className: N.title,
                  variant: "heading-xl/semibold",
                  children:
                    _.Z.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_HEADER,
                }),
                (0, a.jsx)(i.Heading, {
                  className: N.subtitle,
                  color: "header-secondary",
                  variant: "text-md/normal",
                  children:
                    _.Z.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_SUBHEADER,
                }),
                null != t &&
                  (0, a.jsx)(i.ModalCloseButton, {
                    className: N.closeButton,
                    onClick: t,
                  }),
              ],
            }),
            (0, a.jsxs)(i.ModalContent, {
              className: l()(E.modalContent, n),
              paddingFix: !1,
              children: [
                (0, a.jsx)(i.Heading, {
                  variant: "heading-md/bold",
                  color: "header-primary",
                  className: E.actionsHeader,
                  children:
                    _.Z.Messages
                      .APPEAL_INGESTION_MODAL_REQUEST_SENT_ACTIONS_HEADER,
                }),
                (0, a.jsx)(c.Z, {
                  text: _.Z.Messages
                    .APPEAL_INGESTION_MODAL_REQUEST_SENT_GUIDELINES_LINK,
                  url: d.sQ.COMMUNITY_GUIDELINES,
                  onClick: () => x(d.n0.ClickCommunityGuidelinesLink),
                }),
                (0, a.jsx)(c.Z, {
                  text: _.Z.Messages
                    .APPEAL_INGESTION_MODAL_REQUEST_SENT_RULES_LINK,
                  url: d.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
                  onClick: () => x(d.n0.ClickWarningSystemHelpcenterLink),
                }),
              ],
            }),
            (0, a.jsx)(i.ModalFooter, {
              children: (0, a.jsx)(i.Button, {
                onClick: s,
                color: i.Button.Colors.BRAND,
                children: _.Z.Messages.DONE,
              }),
            }),
          ],
        });
      }
    },
    670199: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return A;
        },
      });
      var a = s(735250);
      s(470079);
      var t = s(120356),
        l = s.n(t),
        i = s(481060),
        o = s(600164),
        r = s(219230),
        c = s(788080),
        d = s(548647),
        _ = s(696375),
        E = s(97568),
        N = s(800530),
        u = s(689938),
        x = s(487043);
      function A(e) {
        var n, s;
        let {
            classification: t,
            isSpam: A = !1,
            isCoppa: I = !1,
            className: C,
            onClose: S,
            onNext: T,
          } = e,
          m = (0, d.n)(),
          h =
            null !== (n = null == t ? void 0 : t.explainer_link) && void 0 !== n
              ? n
              : "",
          M =
            null != t &&
            null != t.flagged_content &&
            t.flagged_content.length > 0,
          L = (0, c.c7)(null == t ? void 0 : t.description),
          g = !A && !I,
          O = (0, r.B)("classification_evidence"),
          p = null != t && (((0, c.FB)(t) && O) || M);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(i.ModalHeader, {
              direction: o.Z.Direction.VERTICAL,
              className: x.header,
              separator: !1,
              children: [
                (0, a.jsx)(i.Heading, {
                  className: x.title,
                  variant: "heading-xl/semibold",
                  children: u.Z.Messages.APPEAL_INGESTION_MODAL_HEADER,
                }),
                (0, a.jsx)(i.Text, {
                  className: x.subtitle,
                  color: "header-secondary",
                  variant: "text-md/normal",
                  children:
                    u.Z.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_SUBHEADER,
                }),
                null != S &&
                  (0, a.jsx)(i.ModalCloseButton, {
                    className: x.closeButton,
                    onClick: S,
                  }),
              ],
            }),
            (0, a.jsxs)(i.ModalContent, {
              className: l()(x.modalContent, !p && x.evidenceOffset, C),
              paddingFix: !1,
              children: [
                p &&
                  (0, a.jsx)(E.s, {
                    flaggedContent:
                      null !== (s = t.flagged_content) && void 0 !== s ? s : [],
                  }),
                (0, a.jsx)(i.Text, {
                  className: x.optionHeader,
                  color: "header-secondary",
                  variant: "text-xs/bold",
                  children:
                    u.Z.Messages
                      .APPEAL_INGESTION_MODAL_SPEED_BUMP_POLICY_HEADER,
                }),
                (0, a.jsx)("div", {
                  className: x.policyContainer,
                  children: (0, a.jsx)(i.Text, {
                    variant: "text-md/semibold",
                    children: L,
                  }),
                }),
                I &&
                  (0, a.jsx)(_.Z, {
                    url: N.sQ.AGE_VERIFICATION_LINK,
                    text: u.Z.Messages
                      .APPEAL_INGESTION_AGE_VERIFICATION_LINK_TITLE,
                    onClick: () => m(N.n0.ClickAgeVerificationLink),
                  }),
                A &&
                  !I &&
                  (0, a.jsx)(_.Z, {
                    url: N.sQ.SPAM_LINK,
                    text: u.Z.Messages
                      .APPEAL_INGESTION_MODAL_SPEED_BUMP_SUBMIT_SPAM,
                    onClick: () => m(N.n0.ClickSpamWebformLink),
                  }),
                !I &&
                  (0, a.jsx)(_.Z, {
                    text: u.Z.Messages.APPEAL_INGESTION_LEARN_MORE_LINK_TITLE,
                    url: h,
                    onClick: () => m(N.n0.ClickLearnMoreLink),
                  }),
                g &&
                  (0, a.jsx)(i.Text, {
                    className: x.learnMore,
                    variant: "text-xs/normal",
                    children:
                      u.Z.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_LEARN_MORE_OTHER_OPTIONS_DSA.format(),
                  }),
              ],
            }),
            g &&
              (0, a.jsx)(i.ModalFooter, {
                children: (0, a.jsx)(i.Button, {
                  onClick: T,
                  color: i.Button.Colors.BRAND,
                  children: u.Z.Messages.NEXT,
                }),
              }),
          ],
        });
      }
    },
    332384: function (e, n, s) {
      e.exports = {
        modalContent: "modalContent_cdff0a",
        disclaimer: "disclaimer_cdff0a",
      };
    },
    6063: function (e, n, s) {
      e.exports = {
        listContainer: "listContainer_b4c815",
        listItem: "listItem_b4c815",
        anchorContainer: "anchorContainer_b4c815",
        inputContainer: "inputContainer_b4c815",
        errorText: "errorText_b4c815",
        buttonContainer: "buttonContainer_b4c815",
        footerText: "footerText_b4c815",
      };
    },
    901030: function (e, n, s) {
      e.exports = { container: "container_f36951" };
    },
    549476: function (e, n, s) {
      e.exports = {
        iconContainer: "iconContainer_a47b9d",
        icon: "icon_a47b9d",
        modalContent: "modalContent_a47b9d",
        actionsHeader: "actionsHeader_a47b9d",
      };
    },
    487043: function (e, n, s) {
      e.exports = {
        header: "header_a30bb3",
        closeButton: "closeButton_a30bb3",
        modalContent: "modalContent_a30bb3",
        title: "title_a30bb3",
        subtitle: "subtitle_a30bb3",
        optionHeader: "optionHeader_a30bb3",
        learnMore: "learnMore_a30bb3",
        policyContainer: "policyContainer_a30bb3",
        radioItem: "radioItem_a30bb3",
        evidenceOffset: "evidenceOffset_a30bb3",
      };
    },
  },
]);
//# sourceMappingURL=68b68e3c893a23c608d9.js.map
