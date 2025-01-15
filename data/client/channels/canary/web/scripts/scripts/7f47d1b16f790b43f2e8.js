"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["65652"],
  {
    160557: function (e) {
      e.exports = "/assets/0f3afc83daac2a5bc943.png";
    },
    548647: function (e, n, t) {
      t.d(n, {
        n: function () {
          return u;
        },
      });
      var i = t(192379),
        l = t(442837),
        a = t(626135),
        s = t(236289),
        o = t(451284),
        r = t(613734),
        c = t(800530),
        d = t(981631);
      let u = () => {
        let e = (0, l.e7)([s.Z], () => s.Z.getAppealClassificationId()),
          n = (0, r.YG)(null != e ? e : d.lds),
          t = (0, o.P)(),
          u = (0, l.e7)([s.Z], () => s.Z.getIsDsaEligible());
        return i.useCallback(
          (i) => {
            a.default.track(d.rMx.SAFETY_HUB_ACTION, {
              action: i,
              account_standing: t.state,
              classification_ids: null != e ? [Number(e)] : null,
              source: c.s.AppealIngestion,
              is_dsa_eligible: u,
              violation_type: n.violationType,
            });
          },
          [t.state, e, n, u],
        );
      };
    },
    409617: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        a = t(120356),
        s = t.n(a),
        o = t(442837),
        r = t(481060),
        c = t(570140),
        d = t(600164),
        u = t(236289),
        x = t(788080),
        m = t(613734),
        C = t(800530),
        h = t(388032),
        N = t(409296),
        p = t(321376);
      function g(e) {
        let {
            className: n,
            isDsaEligible: t = !1,
            onClose: a,
            onNext: g,
            onBack: _,
          } = e,
          j = (0, m.U0)(),
          b = (0, o.e7)([u.Z], () => u.Z.getFreeTextAppealReason()),
          [I, E] = l.useState(""),
          [T, S] = l.useState(!1);
        l.useEffect(() => {
          E(null != b ? b : ""), S(j === C.bK.SOMETHING_ELSE);
        }, [b, j, t]);
        let v = (e) => {
            S(e === C.bK.SOMETHING_ELSE),
              e !== C.bK.SOMETHING_ELSE &&
                (E(""),
                c.Z.dispatch({
                  type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                  userInput: "",
                })),
              c.Z.dispatch({
                type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT",
                signal: e,
              });
          },
          f = C.RY.map((e) => ({ value: e, name: (0, x.ox)(e) }));
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(r.ModalHeader, {
              direction: d.Z.Direction.VERTICAL,
              className: p.header,
              separator: !1,
              children: [
                (0, i.jsx)(r.Heading, {
                  className: p.title,
                  variant: "heading-xl/semibold",
                  children: h.intl.string(h.t["C5q+pa"]),
                }),
                (0, i.jsx)(r.Text, {
                  className: p.subtitle,
                  color: "header-secondary",
                  variant: "text-md/normal",
                  children: h.intl.string(h.t.VEcRh4),
                }),
                null != a &&
                  (0, i.jsx)(r.ModalCloseButton, {
                    className: p.closeButton,
                    onClick: a,
                  }),
              ],
            }),
            (0, i.jsxs)(r.ModalContent, {
              className: s()(N.modalContent, n),
              paddingFix: !1,
              children: [
                (0, i.jsx)(r.RadioGroup, {
                  radioPosition: "right",
                  radioItemClassName: p.radioItem,
                  size: r.RadioGroup.Sizes.NOT_SET,
                  value: j,
                  options: f,
                  onChange: (e) => {
                    let { value: n } = e;
                    return v(n);
                  },
                }),
                t &&
                  T &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(r.TextArea, {
                        rows: 4,
                        maxLength: 1024,
                        placeholder: h.intl.string(h.t.bQrZIC),
                        value: I,
                        onChange: E,
                        autoFocus: !0,
                      }),
                      (0, i.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        color: "header-muted",
                        children: h.intl.string(h.t.xfNY3N),
                      }),
                    ],
                  }),
                (0, i.jsx)(r.Text, {
                  variant: "text-sm/normal",
                  className: N.disclaimer,
                  children: h.intl.format(h.t["8k9GCQ"], {}),
                }),
              ],
            }),
            (0, i.jsxs)(r.ModalFooter, {
              children: [
                (0, i.jsx)(r.Button, {
                  onClick: () => {
                    c.Z.dispatch({
                      type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                      userInput: I,
                    }),
                      null == g || g();
                  },
                  color: r.Button.Colors.BRAND,
                  children: h.intl.string(h.t.PDTjLC),
                }),
                (0, i.jsx)(r.Button, {
                  onClick: () => {
                    c.Z.dispatch({
                      type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                      userInput: I,
                    }),
                      null == _ || _();
                  },
                  color: r.Button.Colors.PRIMARY,
                  look: r.Button.Looks.LINK,
                  children: h.intl.string(h.t["13/7kZ"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    451426: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        a = t(442837),
        s = t(481060),
        o = t(570140),
        r = t(600164),
        c = t(103879),
        d = t(236289),
        u = t(788080),
        x = t(613734),
        m = t(981631),
        C = t(388032),
        h = t(126969),
        N = t(321376);
      function p(e) {
        let {
            className: n,
            isDsaEligible: t,
            onClose: p,
            onNext: g,
            onBack: _,
          } = e,
          j = (0, a.e7)([d.Z], () => d.Z.getAppealClassificationId()),
          { classification: b } = (0, x.YG)(null != j ? j : m.lds),
          I = (0, u.c7)(null == b ? void 0 : b.description),
          E = (0, a.e7)([d.Z], () => d.Z.getIsSubmitting()),
          T = (0, a.e7)([d.Z], () => d.Z.getAppealSignal()),
          S = (0, a.e7)([d.Z], () => d.Z.getFreeTextAppealReason()),
          [v, f] = l.useState(!1),
          [A, k] = l.useState(""),
          Z = l.useCallback((e) => {
            o.Z.dispatch({
              type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
              userInput: e,
            });
          }, []),
          L = l.useCallback(async () => {
            if (null !== j)
              try {
                k(""), await c.uR(j, T, S), null == g || g();
              } catch (n) {
                var e;
                k(
                  (0, u.Zs)(
                    null === (e = n.body) || void 0 === e ? void 0 : e.code,
                  ),
                );
              }
          }, [j, T, S, g]);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(s.ModalHeader, {
              direction: r.Z.Direction.VERTICAL,
              className: N.header,
              separator: !1,
              children: [
                (0, i.jsx)(s.Heading, {
                  className: N.title,
                  variant: "heading-xl/semibold",
                  children: C.intl.string(C.t["C5q+pa"]),
                }),
                (0, i.jsx)(s.Text, {
                  className: N.subtitle,
                  color: "header-secondary",
                  variant: "text-md/normal",
                  children: C.intl.string(C.t["G2g/g4"]),
                }),
                null != p &&
                  (0, i.jsx)(s.ModalCloseButton, {
                    className: N.closeButton,
                    onClick: p,
                  }),
              ],
            }),
            (0, i.jsxs)(s.ModalContent, {
              className: n,
              paddingFix: !1,
              children: [
                (0, i.jsx)("ul", {
                  className: h.listContainer,
                  children: [(0, u.ox)(T), S]
                    .filter((e) => e.length > 0)
                    .map((e, n) =>
                      (0, i.jsx)(
                        "li",
                        {
                          className: h.listItem,
                          children: (0, i.jsx)(s.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            children: e,
                          }),
                        },
                        n,
                      ),
                    ),
                }),
                t &&
                  (0, i.jsx)("div", {
                    className: h.anchorContainer,
                    children: (0, i.jsx)(s.Anchor, {
                      onClick: () => f((e) => !e),
                      children: (0, i.jsx)(s.Heading, {
                        variant: "heading-md/normal",
                        color: "text-link",
                        children:
                          S.length > 0
                            ? C.intl.string(C.t.tnE3bW)
                            : C.intl.string(C.t.uoQFIi),
                      }),
                    }),
                  }),
                v &&
                  t &&
                  (0, i.jsx)("div", {
                    className: h.inputContainer,
                    children: (0, i.jsx)(s.TextArea, { value: S, onChange: Z }),
                  }),
                (0, i.jsx)("div", {
                  className: N.policyContainer,
                  children: (0, i.jsx)(s.Text, {
                    variant: "text-md/semibold",
                    children: I,
                  }),
                }),
                (0, i.jsx)(s.Text, {
                  variant: "text-xs/medium",
                  color: "header-secondary",
                  className: h.footerText,
                  children: C.intl.string(C.t.d6qgY2),
                }),
              ],
            }),
            (0, i.jsxs)(s.ModalFooter, {
              direction: r.Z.Direction.VERTICAL,
              children: [
                "" !== A &&
                  (0, i.jsx)(s.Text, {
                    className: h.errorText,
                    variant: "text-lg/normal",
                    color: "text-danger",
                    children: A,
                  }),
                (0, i.jsxs)("div", {
                  className: h.buttonContainer,
                  children: [
                    (0, i.jsx)(s.Button, {
                      look: s.Button.Looks.LINK,
                      color: s.Button.Colors.PRIMARY,
                      onClick: _,
                      disabled: E,
                      children: C.intl.string(C.t["13/7kZ"]),
                    }),
                    (0, i.jsx)(s.Button, {
                      onClick: L,
                      color: s.Button.Colors.RED,
                      submitting: E,
                      children: C.intl.string(C.t.geKm7u),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    696375: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(481060),
        a = t(259580),
        s = t(769383);
      function o(e) {
        let { url: n, text: t, onClick: o } = e;
        return (0, i.jsx)(l.Anchor, {
          href: n,
          onClick: o,
          className: s.externalLinkWrapper,
          children: (0, i.jsxs)(l.Clickable, {
            className: s.childButton,
            children: [
              (0, i.jsx)(l.Text, {
                className: s.childText,
                variant: "text-md/semibold",
                children: t,
              }),
              (0, i.jsx)(a.Z, {
                className: s.childIcon,
                direction: a.Z.Directions.RIGHT,
              }),
            ],
          }),
        });
      }
    },
    208265: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return N;
          },
        }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        a = t(990547),
        s = t(481060),
        o = t(613734),
        r = t(409617),
        c = t(451426),
        d = t(384725),
        u = t(534044),
        x = t(670199),
        m = t(800530),
        C = t(981631),
        h = t(678187);
      function N(e) {
        let {
            classificationId: n,
            transitionState: t,
            initialSlide: N = m.Cs.SPEED_BUMP,
            onClose: p,
          } = e,
          [g, _] = l.useState(N),
          { classification: j, isDsaEligible: b } = (0, o.YG)(
            null != n ? n : C.lds,
          ),
          I = (null == j ? void 0 : j.is_spam) || !1,
          E = (null == j ? void 0 : j.is_coppa) || !1;
        l.useEffect(() => {
          _(N);
        }, [_, N]);
        let T = l.useCallback(() => {
            d.Z.close(), p();
          }, [p]),
          S = l.useCallback(() => {
            var e;
            let n = null === (e = m.JQ[g]) || void 0 === e ? void 0 : e.next;
            n ? _(n) : T();
          }, [g, T]),
          v = l.useCallback(() => {
            var e;
            let n = null === (e = m.JQ[g]) || void 0 === e ? void 0 : e.prev;
            n ? _(n) : T();
          }, [g, T]);
        return (0, i.jsx)(s.ModalRoot, {
          transitionState: t,
          disableTrack: !0,
          size: s.ModalSize.DYNAMIC,
          children: (0, i.jsx)("div", {
            className: h.container,
            children: (0, i.jsxs)(s.Slides, {
              activeSlide: g,
              width: 500,
              children: [
                (0, i.jsx)(s.Slide, {
                  id: m.Cs.SPEED_BUMP,
                  impressionName: a.ImpressionNames.APPEAL_INGESTION_SPEED_BUMP,
                  impressionProperties: m.ZW,
                  children: (0, i.jsx)(x.Z, {
                    classification: j,
                    onClose: T,
                    onNext: S,
                    isSpam: I,
                    isCoppa: E,
                    isDsaEligible: b,
                  }),
                }),
                (0, i.jsx)(s.Slide, {
                  id: m.Cs.COLLECT_SIGNAL,
                  impressionName:
                    a.ImpressionNames.APPEAL_INGESTION_COLLECT_SIGNAL,
                  impressionProperties: m.ZW,
                  children: (0, i.jsx)(r.Z, {
                    isDsaEligible: b,
                    onClose: T,
                    onNext: S,
                    onBack: v,
                  }),
                }),
                (0, i.jsx)(s.Slide, {
                  id: m.Cs.CONFIRM_SUBMISSION,
                  impressionName:
                    a.ImpressionNames.APPEAL_INGESTION_CONFIRM_SUBMISSION,
                  impressionProperties: m.ZW,
                  children: (0, i.jsx)(c.Z, {
                    isDsaEligible: b,
                    onClose: T,
                    onNext: S,
                    onBack: v,
                  }),
                }),
                (0, i.jsx)(s.Slide, {
                  id: m.Cs.REQUEST_SENT,
                  impressionName:
                    a.ImpressionNames.APPEAL_INGESTION_REQUEST_SENT,
                  impressionProperties: m.ZW,
                  children: (0, i.jsx)(u.Z, { onNext: S }),
                }),
              ],
            }),
          }),
        });
      }
    },
    534044: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(120356),
        a = t.n(l),
        s = t(481060),
        o = t(600164),
        r = t(548647),
        c = t(696375),
        d = t(800530),
        u = t(388032),
        x = t(935072),
        m = t(321376),
        C = t(160557);
      function h(e) {
        let { className: n, onNext: t, onClose: l } = e,
          h = (0, r.n)();
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(s.ModalHeader, {
              direction: o.Z.Direction.VERTICAL,
              className: m.header,
              separator: !1,
              children: [
                (0, i.jsx)("div", {
                  className: x.iconContainer,
                  children: (0, i.jsx)("img", {
                    src: C,
                    alt: "",
                    className: x.icon,
                  }),
                }),
                (0, i.jsx)(s.Heading, {
                  className: m.title,
                  variant: "heading-xl/semibold",
                  children: u.intl.string(u.t.QMbTSk),
                }),
                (0, i.jsx)(s.Heading, {
                  className: m.subtitle,
                  color: "header-secondary",
                  variant: "text-md/normal",
                  children: u.intl.string(u.t.Qdx8AA),
                }),
                null != l &&
                  (0, i.jsx)(s.ModalCloseButton, {
                    className: m.closeButton,
                    onClick: l,
                  }),
              ],
            }),
            (0, i.jsxs)(s.ModalContent, {
              className: a()(x.modalContent, n),
              paddingFix: !1,
              children: [
                (0, i.jsx)(s.Heading, {
                  variant: "heading-md/bold",
                  color: "header-primary",
                  className: x.actionsHeader,
                  children: u.intl.string(u.t["9BRc1N"]),
                }),
                (0, i.jsx)(c.Z, {
                  text: u.intl.string(u.t.PxL38P),
                  url: d.sQ.COMMUNITY_GUIDELINES,
                  onClick: () => h(d.n0.ClickCommunityGuidelinesLink),
                }),
                (0, i.jsx)(c.Z, {
                  text: u.intl.string(u.t.qC3XKS),
                  url: d.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
                  onClick: () => h(d.n0.ClickWarningSystemHelpcenterLink),
                }),
              ],
            }),
            (0, i.jsx)(s.ModalFooter, {
              children: (0, i.jsx)(s.Button, {
                onClick: t,
                color: s.Button.Colors.BRAND,
                children: u.intl.string(u.t.i4jeWV),
              }),
            }),
          ],
        });
      }
    },
    670199: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(120356),
        a = t.n(l),
        s = t(481060),
        o = t(600164),
        r = t(788080),
        c = t(548647),
        d = t(696375),
        u = t(97568),
        x = t(800530),
        m = t(388032),
        C = t(321376);
      function h(e) {
        var n, t;
        let {
            classification: l,
            isDsaEligible: h = !1,
            isSpam: N = !1,
            isCoppa: p = !1,
            className: g,
            onClose: _,
            onNext: j,
          } = e,
          b = (0, c.n)(),
          I =
            null !== (n = null == l ? void 0 : l.explainer_link) && void 0 !== n
              ? n
              : "",
          E =
            null != l &&
            null != l.flagged_content &&
            l.flagged_content.length > 0,
          T = (0, r.c7)(null == l ? void 0 : l.description),
          S = !N && !p,
          v = null != l && ((0, r.FB)(l) || E);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(s.ModalHeader, {
              direction: o.Z.Direction.VERTICAL,
              className: C.header,
              separator: !1,
              children: [
                (0, i.jsx)(s.Heading, {
                  className: C.title,
                  variant: "heading-xl/semibold",
                  children: m.intl.string(m.t["C5q+pa"]),
                }),
                (0, i.jsx)(s.Text, {
                  className: C.subtitle,
                  color: "header-secondary",
                  variant: "text-md/normal",
                  children: m.intl.string(m.t.URt7VF),
                }),
                null != _ &&
                  (0, i.jsx)(s.ModalCloseButton, {
                    className: C.closeButton,
                    onClick: _,
                  }),
              ],
            }),
            (0, i.jsxs)(s.ModalContent, {
              className: a()(C.modalContent, !v && C.evidenceOffset, g),
              paddingFix: !1,
              children: [
                v &&
                  (0, i.jsx)(u.s, {
                    flaggedContent:
                      null !== (t = l.flagged_content) && void 0 !== t ? t : [],
                  }),
                (0, i.jsx)(s.Text, {
                  className: C.optionHeader,
                  color: "header-secondary",
                  variant: "text-xs/bold",
                  children: m.intl.string(m.t.xsdcxs),
                }),
                (0, i.jsx)("div", {
                  className: C.policyContainer,
                  children: (0, i.jsx)(s.Text, {
                    variant: "text-md/semibold",
                    children: T,
                  }),
                }),
                p &&
                  (0, i.jsx)(d.Z, {
                    url: x.sQ.AGE_VERIFICATION_LINK,
                    text: m.intl.string(m.t["gJs+kZ"]),
                    onClick: () => b(x.n0.ClickAgeVerificationLink),
                  }),
                N &&
                  !p &&
                  (0, i.jsx)(d.Z, {
                    url: x.sQ.SPAM_LINK,
                    text: m.intl.string(m.t["PaNS+P"]),
                    onClick: () => b(x.n0.ClickSpamWebformLink),
                  }),
                !p &&
                  (0, i.jsx)(d.Z, {
                    text: m.intl.string(m.t["Vtyn//"]),
                    url: I,
                    onClick: () => b(x.n0.ClickLearnMoreLink),
                  }),
                S &&
                  h &&
                  (0, i.jsx)(s.Text, {
                    className: C.learnMore,
                    variant: "text-xs/normal",
                    children: m.intl.format(m.t.WMUgCQ, {}),
                  }),
              ],
            }),
            S &&
              (0, i.jsx)(s.ModalFooter, {
                children: (0, i.jsx)(s.Button, {
                  onClick: j,
                  color: s.Button.Colors.BRAND,
                  children: m.intl.string(m.t.PDTjLC),
                }),
              }),
          ],
        });
      }
    },
    409296: function (e, n, t) {
      e.exports = {
        modalContent: "modalContent_cdff0a",
        disclaimer: "disclaimer_cdff0a",
      };
    },
    126969: function (e, n, t) {
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
    678187: function (e, n, t) {
      e.exports = { container: "container_f36951" };
    },
    935072: function (e, n, t) {
      e.exports = {
        iconContainer: "iconContainer_a47b9d",
        icon: "icon_a47b9d",
        modalContent: "modalContent_a47b9d",
        actionsHeader: "actionsHeader_a47b9d",
      };
    },
    321376: function (e, n, t) {
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
//# sourceMappingURL=7f47d1b16f790b43f2e8.js.map
