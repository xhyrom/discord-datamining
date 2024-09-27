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
        i = s(626135),
        l = s(236289),
        o = s(451284),
        r = s(613734),
        c = s(800530),
        d = s(981631);
      let _ = () => {
        let e = (0, t.e7)([l.Z], () => l.Z.getAppealClassificationId()),
          n = (0, r.YG)(null != e ? e : d.lds),
          s = (0, o.P)(),
          _ = (0, t.e7)([l.Z], () => l.Z.getIsDsaEligible());
        return a.useCallback(
          (a) => {
            i.default.track(d.rMx.SAFETY_HUB_ACTION, {
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
          return m;
        },
      }),
        s(47120);
      var a = s(735250),
        t = s(470079),
        i = s(120356),
        l = s.n(i),
        o = s(442837),
        r = s(481060),
        c = s(570140),
        d = s(600164),
        _ = s(236289),
        E = s(788080),
        N = s(613734),
        u = s(800530),
        A = s(689938),
        x = s(332384),
        I = s(487043);
      function m(e) {
        let {
            className: n,
            isDsaEligible: s = !1,
            onClose: i,
            onNext: m,
            onBack: S,
          } = e,
          C = (0, N.U0)(),
          T = (0, o.e7)([_.Z], () => _.Z.getFreeTextAppealReason()),
          [h, L] = t.useState(""),
          [M, p] = t.useState(!1);
        t.useEffect(() => {
          L(null != T ? T : ""), p(C === u.bK.SOMETHING_ELSE);
        }, [T, C, s]);
        let P = (e) => {
            p(e === u.bK.SOMETHING_ELSE),
              e !== u.bK.SOMETHING_ELSE &&
                (L(""),
                c.Z.dispatch({
                  type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                  userInput: "",
                })),
              c.Z.dispatch({
                type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT",
                signal: e,
              });
          },
          O = u.RY.map((e) => ({ value: e, name: (0, E.ox)(e) }));
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
                  children: A.Z.Messages.APPEAL_INGESTION_MODAL_HEADER,
                }),
                (0, a.jsx)(r.Text, {
                  className: I.subtitle,
                  color: "header-secondary",
                  variant: "text-md/normal",
                  children:
                    A.Z.Messages
                      .APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_SUBHEADER,
                }),
                null != i &&
                  (0, a.jsx)(r.ModalCloseButton, {
                    className: I.closeButton,
                    onClick: i,
                  }),
              ],
            }),
            (0, a.jsxs)(r.ModalContent, {
              className: l()(x.modalContent, n),
              paddingFix: !1,
              children: [
                (0, a.jsx)(r.RadioGroup, {
                  radioPosition: "right",
                  radioItemClassName: I.radioItem,
                  size: r.RadioGroup.Sizes.NOT_SET,
                  value: C,
                  options: O,
                  onChange: (e) => {
                    let { value: n } = e;
                    return P(n);
                  },
                }),
                s &&
                  M &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(r.TextArea, {
                        rows: 4,
                        maxLength: 1024,
                        placeholder:
                          A.Z.Messages
                            .APPEAL_INGESTION_FREE_TEXT_REASON_ACTION_SHEET_PLACEHOLDER,
                        value: h,
                        onChange: L,
                        autoFocus: !0,
                      }),
                      (0, a.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        color: "header-muted",
                        children:
                          A.Z.Messages
                            .APPEAL_INGESTION_FREE_TEXT_REASON_ACTION_SHEET_FOOTER,
                      }),
                    ],
                  }),
                (0, a.jsx)(r.Text, {
                  variant: "text-sm/normal",
                  className: x.disclaimer,
                  children:
                    A.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DISCLAIMER.format(),
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
                      null == m || m();
                  },
                  color: r.Button.Colors.BRAND,
                  children: A.Z.Messages.NEXT,
                }),
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
                  children: A.Z.Messages.BACK,
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
        i = s(442837),
        l = s(481060),
        o = s(570140),
        r = s(600164),
        c = s(103879),
        d = s(236289),
        _ = s(788080),
        E = s(613734),
        N = s(981631),
        u = s(689938),
        A = s(6063),
        x = s(487043);
      function I(e) {
        let {
            className: n,
            isDsaEligible: s,
            onClose: I,
            onNext: m,
            onBack: S,
          } = e,
          C = (0, i.e7)([d.Z], () => d.Z.getAppealClassificationId()),
          { classification: T } = (0, E.YG)(null != C ? C : N.lds),
          h = (0, _.c7)(null == T ? void 0 : T.description),
          L = (0, i.e7)([d.Z], () => d.Z.getIsSubmitting()),
          M = (0, i.e7)([d.Z], () => d.Z.getAppealSignal()),
          p = (0, i.e7)([d.Z], () => d.Z.getFreeTextAppealReason()),
          [P, O] = t.useState(!1),
          [g, j] = t.useState(""),
          b = t.useCallback((e) => {
            o.Z.dispatch({
              type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
              userInput: e,
            });
          }, []),
          Z = t.useCallback(async () => {
            if (null !== C)
              try {
                j(""), await c.uR(C, M, p), null == m || m();
              } catch (n) {
                var e;
                j(
                  (0, _.Zs)(
                    null === (e = n.body) || void 0 === e ? void 0 : e.code,
                  ),
                );
              }
          }, [C, M, p, m]);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(l.ModalHeader, {
              direction: r.Z.Direction.VERTICAL,
              className: x.header,
              separator: !1,
              children: [
                (0, a.jsx)(l.Heading, {
                  className: x.title,
                  variant: "heading-xl/semibold",
                  children: u.Z.Messages.APPEAL_INGESTION_MODAL_HEADER,
                }),
                (0, a.jsx)(l.Text, {
                  className: x.subtitle,
                  color: "header-secondary",
                  variant: "text-md/normal",
                  children:
                    u.Z.Messages
                      .APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_SUBHEADER,
                }),
                null != I &&
                  (0, a.jsx)(l.ModalCloseButton, {
                    className: x.closeButton,
                    onClick: I,
                  }),
              ],
            }),
            (0, a.jsxs)(l.ModalContent, {
              className: n,
              paddingFix: !1,
              children: [
                (0, a.jsx)("ul", {
                  className: A.listContainer,
                  children: [(0, _.ox)(M), p]
                    .filter((e) => e.length > 0)
                    .map((e, n) =>
                      (0, a.jsx)(
                        "li",
                        {
                          className: A.listItem,
                          children: (0, a.jsx)(l.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            children: e,
                          }),
                        },
                        n,
                      ),
                    ),
                }),
                s &&
                  (0, a.jsx)("div", {
                    className: A.anchorContainer,
                    children: (0, a.jsx)(l.Anchor, {
                      onClick: () => O((e) => !e),
                      children: (0, a.jsx)(l.Heading, {
                        variant: "heading-md/normal",
                        color: "text-link",
                        children:
                          p.length > 0
                            ? u.Z.Messages
                                .APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_EDIT_DETAILS
                            : u.Z.Messages
                                .APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_ADD_DETAILS,
                      }),
                    }),
                  }),
                P &&
                  s &&
                  (0, a.jsx)("div", {
                    className: A.inputContainer,
                    children: (0, a.jsx)(l.TextArea, { value: p, onChange: b }),
                  }),
                (0, a.jsx)("div", {
                  className: x.policyContainer,
                  children: (0, a.jsx)(l.Text, {
                    variant: "text-md/semibold",
                    children: h,
                  }),
                }),
                (0, a.jsx)(l.Text, {
                  variant: "text-xs/medium",
                  color: "header-secondary",
                  className: A.footerText,
                  children:
                    u.Z.Messages
                      .APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_FOOTER,
                }),
              ],
            }),
            (0, a.jsxs)(l.ModalFooter, {
              direction: r.Z.Direction.VERTICAL,
              children: [
                "" !== g &&
                  (0, a.jsx)(l.Text, {
                    className: A.errorText,
                    variant: "text-lg/normal",
                    color: "text-danger",
                    children: g,
                  }),
                (0, a.jsxs)("div", {
                  className: A.buttonContainer,
                  children: [
                    (0, a.jsx)(l.Button, {
                      look: l.Button.Looks.LINK,
                      color: l.Button.Colors.PRIMARY,
                      onClick: S,
                      disabled: L,
                      children: u.Z.Messages.BACK,
                    }),
                    (0, a.jsx)(l.Button, {
                      onClick: Z,
                      color: l.Button.Colors.RED,
                      submitting: L,
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
        i = s(259580),
        l = s(78648);
      function o(e) {
        let { url: n, text: s, onClick: o } = e;
        return (0, a.jsx)(t.Anchor, {
          href: n,
          onClick: o,
          className: l.externalLinkWrapper,
          children: (0, a.jsxs)(t.Clickable, {
            className: l.childButton,
            children: [
              (0, a.jsx)(t.Text, {
                className: l.childText,
                variant: "text-md/semibold",
                children: s,
              }),
              (0, a.jsx)(i.Z, {
                className: l.childIcon,
                direction: i.Z.Directions.RIGHT,
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
        i = s(990547),
        l = s(481060),
        o = s(613734),
        r = s(409617),
        c = s(451426),
        d = s(384725),
        _ = s(534044),
        E = s(670199),
        N = s(800530),
        u = s(981631),
        A = s(901030);
      function x(e) {
        let {
            classificationId: n,
            transitionState: s,
            initialSlide: x = N.Cs.SPEED_BUMP,
            onClose: I,
          } = e,
          [m, S] = t.useState(x),
          { classification: C, isDsaEligible: T } = (0, o.YG)(
            null != n ? n : u.lds,
          ),
          h = (null == C ? void 0 : C.is_spam) || !1,
          L = (null == C ? void 0 : C.is_coppa) || !1;
        t.useEffect(() => {
          S(x);
        }, [S, x]);
        let M = t.useCallback(() => {
            d.Z.close(), I();
          }, [I]),
          p = t.useCallback(() => {
            var e;
            let n = null === (e = N.JQ[m]) || void 0 === e ? void 0 : e.next;
            n ? S(n) : M();
          }, [m, M]),
          P = t.useCallback(() => {
            var e;
            let n = null === (e = N.JQ[m]) || void 0 === e ? void 0 : e.prev;
            n ? S(n) : M();
          }, [m, M]);
        return (0, a.jsx)(l.ModalRoot, {
          transitionState: s,
          disableTrack: !0,
          size: l.ModalSize.DYNAMIC,
          children: (0, a.jsx)("div", {
            className: A.container,
            children: (0, a.jsxs)(l.Slides, {
              activeSlide: m,
              width: 500,
              children: [
                (0, a.jsx)(l.Slide, {
                  id: N.Cs.SPEED_BUMP,
                  impressionName: i.ImpressionNames.APPEAL_INGESTION_SPEED_BUMP,
                  impressionProperties: N.ZW,
                  children: (0, a.jsx)(E.Z, {
                    classification: C,
                    onClose: M,
                    onNext: p,
                    isSpam: h,
                    isCoppa: L,
                    isDsaEligible: T,
                  }),
                }),
                (0, a.jsx)(l.Slide, {
                  id: N.Cs.COLLECT_SIGNAL,
                  impressionName:
                    i.ImpressionNames.APPEAL_INGESTION_COLLECT_SIGNAL,
                  impressionProperties: N.ZW,
                  children: (0, a.jsx)(r.Z, {
                    isDsaEligible: T,
                    onClose: M,
                    onNext: p,
                    onBack: P,
                  }),
                }),
                (0, a.jsx)(l.Slide, {
                  id: N.Cs.CONFIRM_SUBMISSION,
                  impressionName:
                    i.ImpressionNames.APPEAL_INGESTION_CONFIRM_SUBMISSION,
                  impressionProperties: N.ZW,
                  children: (0, a.jsx)(c.Z, {
                    isDsaEligible: T,
                    onClose: M,
                    onNext: p,
                    onBack: P,
                  }),
                }),
                (0, a.jsx)(l.Slide, {
                  id: N.Cs.REQUEST_SENT,
                  impressionName:
                    i.ImpressionNames.APPEAL_INGESTION_REQUEST_SENT,
                  impressionProperties: N.ZW,
                  children: (0, a.jsx)(_.Z, { onNext: p }),
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
          return A;
        },
      });
      var a = s(735250);
      s(470079);
      var t = s(120356),
        i = s.n(t),
        l = s(481060),
        o = s(600164),
        r = s(548647),
        c = s(696375),
        d = s(800530),
        _ = s(689938),
        E = s(549476),
        N = s(487043),
        u = s(160557);
      function A(e) {
        let { className: n, onNext: s, onClose: t } = e,
          A = (0, r.n)();
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(l.ModalHeader, {
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
                (0, a.jsx)(l.Heading, {
                  className: N.title,
                  variant: "heading-xl/semibold",
                  children:
                    _.Z.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_HEADER,
                }),
                (0, a.jsx)(l.Heading, {
                  className: N.subtitle,
                  color: "header-secondary",
                  variant: "text-md/normal",
                  children:
                    _.Z.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_SUBHEADER,
                }),
                null != t &&
                  (0, a.jsx)(l.ModalCloseButton, {
                    className: N.closeButton,
                    onClick: t,
                  }),
              ],
            }),
            (0, a.jsxs)(l.ModalContent, {
              className: i()(E.modalContent, n),
              paddingFix: !1,
              children: [
                (0, a.jsx)(l.Heading, {
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
                  onClick: () => A(d.n0.ClickCommunityGuidelinesLink),
                }),
                (0, a.jsx)(c.Z, {
                  text: _.Z.Messages
                    .APPEAL_INGESTION_MODAL_REQUEST_SENT_RULES_LINK,
                  url: d.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
                  onClick: () => A(d.n0.ClickWarningSystemHelpcenterLink),
                }),
              ],
            }),
            (0, a.jsx)(l.ModalFooter, {
              children: (0, a.jsx)(l.Button, {
                onClick: s,
                color: l.Button.Colors.BRAND,
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
          return x;
        },
      });
      var a = s(735250);
      s(470079);
      var t = s(120356),
        i = s.n(t),
        l = s(481060),
        o = s(600164),
        r = s(219230),
        c = s(788080),
        d = s(548647),
        _ = s(696375),
        E = s(97568),
        N = s(800530),
        u = s(689938),
        A = s(487043);
      function x(e) {
        var n, s;
        let {
            classification: t,
            isDsaEligible: x = !1,
            isSpam: I = !1,
            isCoppa: m = !1,
            className: S,
            onClose: C,
            onNext: T,
          } = e,
          h = (0, d.n)(),
          L =
            null !== (n = null == t ? void 0 : t.explainer_link) && void 0 !== n
              ? n
              : "",
          M =
            null != t &&
            null != t.flagged_content &&
            t.flagged_content.length > 0,
          p = (0, c.c7)(null == t ? void 0 : t.description),
          P = !I && !m,
          O = (0, r.B)("classification_evidence"),
          g = null != t && (((0, c.FB)(t) && O) || M);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(l.ModalHeader, {
              direction: o.Z.Direction.VERTICAL,
              className: A.header,
              separator: !1,
              children: [
                (0, a.jsx)(l.Heading, {
                  className: A.title,
                  variant: "heading-xl/semibold",
                  children: u.Z.Messages.APPEAL_INGESTION_MODAL_HEADER,
                }),
                (0, a.jsx)(l.Text, {
                  className: A.subtitle,
                  color: "header-secondary",
                  variant: "text-md/normal",
                  children:
                    u.Z.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_SUBHEADER,
                }),
                null != C &&
                  (0, a.jsx)(l.ModalCloseButton, {
                    className: A.closeButton,
                    onClick: C,
                  }),
              ],
            }),
            (0, a.jsxs)(l.ModalContent, {
              className: i()(A.modalContent, !g && A.evidenceOffset, S),
              paddingFix: !1,
              children: [
                g &&
                  (0, a.jsx)(E.s, {
                    flaggedContent:
                      null !== (s = t.flagged_content) && void 0 !== s ? s : [],
                  }),
                (0, a.jsx)(l.Text, {
                  className: A.optionHeader,
                  color: "header-secondary",
                  variant: "text-xs/bold",
                  children:
                    u.Z.Messages
                      .APPEAL_INGESTION_MODAL_SPEED_BUMP_POLICY_HEADER,
                }),
                (0, a.jsx)("div", {
                  className: A.policyContainer,
                  children: (0, a.jsx)(l.Text, {
                    variant: "text-md/semibold",
                    children: p,
                  }),
                }),
                m &&
                  (0, a.jsx)(_.Z, {
                    url: N.sQ.AGE_VERIFICATION_LINK,
                    text: u.Z.Messages
                      .APPEAL_INGESTION_AGE_VERIFICATION_LINK_TITLE,
                    onClick: () => h(N.n0.ClickAgeVerificationLink),
                  }),
                I &&
                  !m &&
                  (0, a.jsx)(_.Z, {
                    url: N.sQ.SPAM_LINK,
                    text: u.Z.Messages
                      .APPEAL_INGESTION_MODAL_SPEED_BUMP_SUBMIT_SPAM,
                    onClick: () => h(N.n0.ClickSpamWebformLink),
                  }),
                !m &&
                  (0, a.jsx)(_.Z, {
                    text: u.Z.Messages.APPEAL_INGESTION_LEARN_MORE_LINK_TITLE,
                    url: L,
                    onClick: () => h(N.n0.ClickLearnMoreLink),
                  }),
                P &&
                  x &&
                  (0, a.jsx)(l.Text, {
                    className: A.learnMore,
                    variant: "text-xs/normal",
                    children:
                      u.Z.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_LEARN_MORE_OTHER_OPTIONS_DSA.format(),
                  }),
              ],
            }),
            P &&
              (0, a.jsx)(l.ModalFooter, {
                children: (0, a.jsx)(l.Button, {
                  onClick: T,
                  color: l.Button.Colors.BRAND,
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
//# sourceMappingURL=2a06e323c95614c8cf0c.js.map
