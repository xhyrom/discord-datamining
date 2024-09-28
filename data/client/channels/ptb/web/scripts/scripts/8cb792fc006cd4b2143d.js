"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["1011"],
  {
    943350: function (e, a, n) {
      n.r(a),
        n.d(a, {
          FEEDBACK_TYPES: function () {
            return O;
          },
          GameProfileChooseFeedbackTypeModal: function () {
            return p;
          },
          GameProfileFeedbackModal: function () {
            return D;
          },
          GameProfileFeedbackThankYouModal: function () {
            return G;
          },
          GameProfileOtherFeedbackModal: function () {
            return f;
          },
          GameProfileOutdatedFeedbackModal: function () {
            return T;
          },
          GameProfileTitleFeedbackModal: function () {
            return j;
          },
        }),
        n(47120),
        n(653041);
      var s = n(735250),
        t = n(470079),
        l = n(658722),
        i = n.n(l),
        o = n(392711),
        d = n(442837),
        r = n(481060),
        c = n(224706),
        E = n(812206),
        u = n(835473),
        m = n(206295),
        _ = n(669764),
        h = n(925329),
        g = n(77498),
        x = n(49012),
        M = n(810568),
        A = n(701488),
        I = n(689938),
        C = n(361357);
      let F = {
          CHOOSING_FEEDBACK_TYPE: 1,
          FILLING_DETAILS: 2,
          THANK_YOU_SCREEN: 3,
        },
        O = { WRONG_GAME: 1, OUTDATED: 2, OTHER: 3 };
      function G(e) {
        let { onClose: a } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(r.ModalContent, {
              className: C.content,
              children: [
                (0, s.jsx)(r.Heading, {
                  variant: "heading-xl/bold",
                  className: C.header,
                  children: I.Z.Messages.GAME_PROFILE_FEEDBACK_HEAD_TY,
                }),
                (0, s.jsx)(r.Text, {
                  className: C.tip,
                  variant: "text-md/medium",
                  children: I.Z.Messages.GAME_PROFILE_FEEDBACK_TIP_TY,
                }),
              ],
            }),
            (0, s.jsx)(r.ModalFooter, {
              className: C.footer,
              children: (0, s.jsx)(r.Button, {
                fullWidth: !0,
                onClick: a,
                children: I.Z.Messages.DONE,
              }),
            }),
          ],
        });
      }
      function T(e) {
        let { applicationId: a, onSubmitted: n, viewId: t } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(r.ModalContent, {
              className: C.content,
              children: [
                (0, s.jsx)(r.Heading, {
                  variant: "heading-xl/bold",
                  className: C.header,
                  children: I.Z.Messages.GAME_PROFILE_FEEDBACK_HEAD_OUTDATED,
                }),
                (0, s.jsx)(r.Text, {
                  className: C.tip,
                  variant: "text-md/medium",
                  children: I.Z.Messages.GAME_PROFILE_FEEDBACK_TIP_OUTDATED,
                }),
              ],
            }),
            (0, s.jsx)(r.ModalFooter, {
              className: C.footer,
              children: (0, s.jsx)(r.Button, {
                fullWidth: !0,
                onClick: () => {
                  (0, x.q)({ href: "https://igdb.com", trusted: !0 }),
                    (0, M.MH)({ applicationId: a, submitted: !0, viewId: t }),
                    n();
                },
                children: I.Z.Messages.GAME_PROFILE_FEEDBACK_VISIT_IGDB,
              }),
            }),
          ],
        });
      }
      function f(e) {
        let { applicationId: a, onSubmitted: n, viewId: l } = e,
          [i, o] = t.useState("");
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(r.ModalContent, {
              className: C.content,
              children: [
                (0, s.jsx)(r.Heading, {
                  variant: "heading-xl/bold",
                  className: C.header,
                  children: I.Z.Messages.GAME_PROFILE_FEEDBACK_HEAD_OTHER,
                }),
                (0, s.jsx)(r.Text, {
                  className: C.tip,
                  variant: "text-md/medium",
                  children: I.Z.Messages.GAME_PROFILE_FEEDBACK_TIP_OTHER,
                }),
                (0, s.jsx)("div", {
                  className: C.otherFeedbackInput,
                  children: (0, s.jsx)(r.TextArea, {
                    value: i,
                    onChange: (e) => o(e),
                    placeholder:
                      I.Z.Messages.GAME_PROFILE_FEEDBACK_PLACEHOLDER_OTHER,
                    maxLength: 300,
                  }),
                }),
              ],
            }),
            (0, s.jsx)(r.ModalFooter, {
              className: C.footer,
              children: (0, s.jsx)(r.Button, {
                fullWidth: !0,
                onClick: () => {
                  (0, M.MH)({
                    applicationId: a,
                    submitted: !0,
                    feedback: i,
                    viewId: l,
                  }),
                    n();
                },
                disabled: 0 === i.length,
                children: I.Z.Messages.SUBMIT,
              }),
            }),
          ],
        });
      }
      let N = (e) => {
        let { name: a, applicationRecord: n } = e;
        return (0, s.jsxs)("div", {
          className: C.gameSuggestion,
          children: [
            null != n
              ? (0, s.jsx)(h.Z, { game: n, className: C.smolGameIcon })
              : (0, s.jsx)(r.Spacer, { horizontal: !0, size: 20 }),
            a,
          ],
        });
      };
      function j(e) {
        var a, n, l;
        let { applicationId: h, onSubmitted: x, viewId: F } = e,
          [O, G] = t.useState(""),
          T = (0, d.e7)([E.Z], () => E.Z.getApplication(h)),
          [f, j] = t.useState(null != h ? h : null),
          p = (0, d.e7)([_.Z], () => _.Z.getGame(h)),
          D =
            null !==
              (n =
                null !== (a = null == p ? void 0 : p.name) && void 0 !== a
                  ? a
                  : null == T
                    ? void 0
                    : T.name) && void 0 !== n
              ? n
              : "",
          b = null == T ? void 0 : T.getIconURL(A.Si.LARGE),
          { primaryColor: v, secondaryColor: R } = (0, m.Z)(b);
        t.useEffect(() => {
          c.Z.getDetectableGames();
        }, []);
        let S = (0, d.Wu)(
            [g.Z],
            () => {
              let e = (
                  (null == O ? void 0 : O.length) > 0 ? O : D
                ).toLowerCase(),
                a = g.Z.getDetectableGame(h),
                n = null != f ? g.Z.getDetectableGame(f) : void 0;
              return (0, o.chain)(g.Z.games)
                .filter((a) => i()(e, a.name.toLowerCase()))
                .take(3)
                .concat(null != a ? [a] : [], null != n ? [n] : [])
                .compact()
                .uniqBy("id")
                .value();
            },
            [h, f, D, O],
          ),
          B = (0, u.Z)(S.map((e) => e.id)),
          L = (0, o.chain)(B).compact().keyBy("id").value(),
          P = O.length > 0 && !S.map((e) => e.name).includes(O),
          H = f === h || (null === f && 0 === O.length),
          Z = S.map((e) => {
            let { name: a, id: n } = e;
            return {
              name: (0, s.jsx)(N, { name: a, applicationRecord: L[n] }),
              value: n,
            };
          });
        return (
          P && Z.push({ name: (0, s.jsx)(N, { name: O }), value: "" }),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)(r.ModalContent, {
                className: C.content,
                children: [
                  (0, s.jsx)(r.Heading, {
                    variant: "heading-xl/bold",
                    className: C.header,
                    children:
                      I.Z.Messages.GAME_PROFILE_FEEDBACK_HEAD_WRONG_GAME,
                  }),
                  (0, s.jsx)(r.Text, {
                    className: C.tip,
                    variant: "text-md/medium",
                    children: I.Z.Messages.GAME_PROFILE_FEEDBACK_TIP_WRONG_GAME,
                  }),
                  (0, s.jsxs)("div", {
                    className: C.gameInfoBox,
                    style: {
                      background: "linear-gradient(45deg, "
                        .concat(v, ", ")
                        .concat(R, ")"),
                    },
                    children: [
                      null != b &&
                        (0, s.jsx)("img", {
                          className: C.gameIcon,
                          src: b,
                          alt: "",
                        }),
                      (0, s.jsx)(r.Heading, {
                        variant: "heading-lg/semibold",
                        className: C.gameTitle,
                        children:
                          null !== (l = null == p ? void 0 : p.name) &&
                          void 0 !== l
                            ? l
                            : null == T
                              ? void 0
                              : T.name,
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: C.gameSearch,
                    children: [
                      (0, s.jsx)(r.SearchBar, {
                        className: C.searchBar,
                        query: O,
                        onChange: (e) => {
                          if (0 === e.length) null === f && j(h);
                          else {
                            var a;
                            let n = S.find((a) => a.name === e);
                            j(
                              null !== (a = null == n ? void 0 : n.id) &&
                                void 0 !== a
                                ? a
                                : null,
                            );
                          }
                          G(e);
                        },
                        size: r.SearchBar.Sizes.MEDIUM,
                        onClear: () => {
                          null === f && j(h), G("");
                        },
                        placeholder:
                          I.Z.Messages
                            .GAME_PROFILE_FEEDBACK_PLACEHOLDER_INCORRECT,
                      }),
                      (0, s.jsx)(r.RadioGroup, {
                        size: r.RadioGroup.Sizes.NONE,
                        radioPosition: "right",
                        withTransparentBackground: !0,
                        value: null != f ? f : "",
                        options: Z,
                        onChange: (e) => {
                          let { value: a } = e;
                          return j(a);
                        },
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)(r.ModalFooter, {
                className: C.footer,
                children: (0, s.jsx)(r.Button, {
                  fullWidth: !0,
                  onClick: () => {
                    (0, M.MH)({
                      applicationId: h,
                      suggestedGameApplicationId: f,
                      suggestedGameName: null == f ? O : void 0,
                      submitted: !0,
                      viewId: F,
                    }),
                      x();
                  },
                  disabled: H,
                  children: I.Z.Messages.SUBMIT,
                }),
              }),
            ],
          })
        );
      }
      function p(e) {
        let { onChoice: a } = e,
          [n, l] = t.useState(null),
          i = [
            {
              name: I.Z.Messages.GAME_PROFILE_FEEDBACK_CHOICE_WRONG_GAME,
              value: O.WRONG_GAME,
            },
            {
              name: I.Z.Messages.GAME_PROFILE_FEEDBACK_CHOICE_OUTDATED,
              value: O.OUTDATED,
            },
            {
              name: I.Z.Messages.GAME_PROFILE_FEEDBACK_CHOICE_OTHER,
              value: O.OTHER,
            },
          ];
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(r.ModalContent, {
              className: C.content,
              children: [
                (0, s.jsx)(r.Heading, {
                  variant: "heading-xl/bold",
                  className: C.header,
                  children: I.Z.Messages.GAME_PROFILE_FEEDBACK_HEAD_CHOOSE_TYPE,
                }),
                (0, s.jsx)(r.Text, {
                  className: C.tip,
                  variant: "text-md/medium",
                  children: I.Z.Messages.GAME_PROFILE_FEEDBACK_TIP_CHOOSE_TYPE,
                }),
                (0, s.jsx)(r.RadioGroup, {
                  className: C.radioGroup,
                  options: i,
                  onChange: (e) => {
                    let { value: a } = e;
                    return l(a);
                  },
                  value: n,
                }),
              ],
            }),
            (0, s.jsx)(r.ModalFooter, {
              className: C.footer,
              children: (0, s.jsx)(r.Button, {
                fullWidth: !0,
                disabled: null === n,
                onClick: () => {
                  null != n && a(n);
                },
                children: I.Z.Messages.NEXT,
              }),
            }),
          ],
        });
      }
      function D(e) {
        let { applicationId: a, viewId: n, transitionState: l, onClose: i } = e,
          [o, d] = t.useState(F.CHOOSING_FEEDBACK_TYPE),
          [c, E] = t.useState(null);
        return (0, s.jsxs)(r.ModalRoot, {
          size: r.ModalSize.SMALL,
          transitionState: l,
          children: [
            o === F.CHOOSING_FEEDBACK_TYPE &&
              (0, s.jsx)(p, {
                onChoice: (e) => {
                  E(e), d(F.FILLING_DETAILS);
                },
              }),
            o === F.FILLING_DETAILS &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  c === O.WRONG_GAME &&
                    (0, s.jsx)(j, {
                      applicationId: a,
                      viewId: n,
                      onSubmitted: () => d(F.THANK_YOU_SCREEN),
                    }),
                  c === O.OUTDATED &&
                    (0, s.jsx)(T, {
                      applicationId: a,
                      viewId: n,
                      onSubmitted: () => i(),
                    }),
                  c === O.OTHER &&
                    (0, s.jsx)(f, {
                      applicationId: a,
                      viewId: n,
                      onSubmitted: () => d(F.THANK_YOU_SCREEN),
                    }),
                ],
              }),
            o === F.THANK_YOU_SCREEN && (0, s.jsx)(G, { onClose: i }),
          ],
        });
      }
    },
    361357: function (e, a, n) {
      e.exports = {
        content: "content_d7f64b",
        header: "header_d7f64b",
        tip: "tip_d7f64b",
        footer: "footer_d7f64b",
        radioGroup: "radioGroup_d7f64b",
        gameSearch: "gameSearch_d7f64b",
        gameSuggestion: "gameSuggestion_d7f64b",
        otherFeedbackInput: "otherFeedbackInput_d7f64b",
        searchBar: "searchBar_d7f64b",
        gameInfoBox: "gameInfoBox_d7f64b",
        gameIcon: "gameIcon_d7f64b",
        smolGameIcon: "smolGameIcon_d7f64b",
        gameTitle: "gameTitle_d7f64b",
      };
    },
  },
]);
//# sourceMappingURL=8cb792fc006cd4b2143d.js.map
