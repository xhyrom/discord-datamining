"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["46923"],
  {
    55396: function (e, a, n) {
      n.r(a),
        n.d(a, {
          default: function () {
            return T;
          },
        }),
        n(47120),
        n(653041);
      var s,
        t,
        l = n(735250),
        i = n(470079),
        d = n(658722),
        o = n.n(d),
        r = n(392711),
        c = n(442837),
        E = n(481060),
        u = n(224706),
        m = n(812206),
        h = n(835473),
        _ = n(206295),
        g = n(669764),
        x = n(925329),
        M = n(77498),
        A = n(49012),
        I = n(810568),
        p = n(701488),
        C = n(689938),
        F = n(666046);
      ((t = s || (s = {}))[(t.FEEDBACK_TYPE = 0)] = "FEEDBACK_TYPE"),
        (t[(t.WRONG_GAME = 1)] = "WRONG_GAME"),
        (t[(t.OUTDATED_INFO = 2)] = "OUTDATED_INFO"),
        (t[(t.OTHER = 3)] = "OTHER"),
        (t[(t.CONFIRMATION = 4)] = "CONFIRMATION");
      function O(e) {
        let { onChoice: a } = e,
          n = [
            {
              name: C.Z.Messages.GAME_PROFILE_FEEDBACK_CHOICE_WRONG_GAME,
              value: 1,
            },
            {
              name: C.Z.Messages.GAME_PROFILE_FEEDBACK_CHOICE_OUTDATED,
              value: 2,
            },
            { name: C.Z.Messages.GAME_PROFILE_FEEDBACK_CHOICE_OTHER, value: 3 },
          ];
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsxs)(E.ModalContent, {
            className: F.content,
            children: [
              (0, l.jsx)(E.Heading, {
                variant: "heading-xl/bold",
                className: F.header,
                children: C.Z.Messages.GAME_PROFILE_FEEDBACK_HEADER_CHOOSE_TYPE,
              }),
              (0, l.jsx)(E.Text, {
                className: F.tip,
                variant: "text-md/medium",
                children: C.Z.Messages.GAME_PROFILE_FEEDBACK_TIP_CHOOSE_TYPE,
              }),
              (0, l.jsx)(E.RadioGroup, {
                className: F.radioGroup,
                options: n,
                onChange: (e) => {
                  let { value: n } = e;
                  return a(n);
                },
              }),
            ],
          }),
        });
      }
      function j(e) {
        let { applicationId: a, onSubmitted: n, viewId: s } = e,
          t = (0, h.q)(a);
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(E.ModalContent, {
              className: F.content,
              children: [
                (0, l.jsx)(E.Heading, {
                  variant: "heading-xl/bold",
                  className: F.header,
                  children: C.Z.Messages.GAME_PROFILE_FEEDBACK_HEADER_OUTDATED,
                }),
                (0, l.jsx)(E.Text, {
                  className: F.tip,
                  variant: "text-md/medium",
                  children: C.Z.Messages.GAME_PROFILE_FEEDBACK_TIP_OUTDATED,
                }),
              ],
            }),
            (0, l.jsx)(E.ModalFooter, {
              className: F.footer,
              children: (0, l.jsx)(E.Button, {
                fullWidth: !0,
                onClick: () => {
                  var e;
                  (0, A.q)({
                    href:
                      (null == (e = t) ? void 0 : e.name) != null
                        ? ""
                            .concat("https://www.igdb.com/search?utf8=✓&q=")
                            .concat(encodeURIComponent(e.name))
                        : "https://www.igdb.com",
                    trusted: !0,
                  }),
                    (0, I.MH)({ applicationId: a, submitted: !0, viewId: s }),
                    n();
                },
                children: C.Z.Messages.GAME_PROFILE_FEEDBACK_VISIT_IGDB,
              }),
            }),
          ],
        });
      }
      let v = (e) => {
        let { name: a, applicationRecord: n } = e;
        return (0, l.jsxs)("div", {
          className: F.gameSuggestion,
          children: [
            null != n
              ? (0, l.jsx)(x.Z, { game: n, className: F.smolGameIcon })
              : (0, l.jsx)(E.Spacer, { horizontal: !0, size: 20 }),
            a,
          ],
        });
      };
      function R(e) {
        var a, n, s;
        let { applicationId: t, onSubmitted: d, viewId: x } = e,
          [A, O] = i.useState(""),
          j = (0, c.e7)([m.Z], () => m.Z.getApplication(t)),
          [R, N] = i.useState(null != t ? t : ""),
          G = (0, c.e7)([g.Z], () => g.Z.getGame(t)),
          T =
            null !==
              (n =
                null !== (a = null == G ? void 0 : G.name) && void 0 !== a
                  ? a
                  : null == j
                    ? void 0
                    : j.name) && void 0 !== n
              ? n
              : "",
          D = null == j ? void 0 : j.getIconURL(p.Si.LARGE),
          { primaryColor: b, secondaryColor: B } = (0, _.Z)(D);
        i.useEffect(() => {
          u.Z.getDetectableGames();
        }, []);
        let f = (0, c.Wu)(
            [M.Z],
            () => {
              let e = (
                  (null == A ? void 0 : A.length) > 0 ? A : T
                ).toLowerCase(),
                a = M.Z.getDetectableGame(t),
                n = null != R ? M.Z.getDetectableGame(R) : void 0;
              return (0, r.chain)(M.Z.games)
                .filter((a) => o()(e, a.name.toLowerCase()))
                .take(3)
                .concat(null != a ? [a] : [], null != n ? [n] : [])
                .compact()
                .uniqBy("id")
                .value();
            },
            [t, R, T, A],
          ),
          Z = (0, h.Z)(f.map((e) => e.id)),
          P = (0, r.chain)(Z).compact().keyBy("id").value(),
          H = A.length > 0 && !f.map((e) => e.name).includes(A),
          L = R === t || (null === R && 0 === A.length),
          S = f.map((e) => {
            let { name: a, id: n } = e;
            return {
              name: (0, l.jsx)(v, { name: a, applicationRecord: P[n] }),
              value: n,
            };
          });
        return (
          H && S.push({ name: (0, l.jsx)(v, { name: A }), value: "" }),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)(E.ModalContent, {
                className: F.content,
                children: [
                  (0, l.jsx)(E.Heading, {
                    variant: "heading-xl/bold",
                    className: F.header,
                    children:
                      C.Z.Messages.GAME_PROFILE_FEEDBACK_HEADER_WRONG_GAME,
                  }),
                  (0, l.jsx)(E.Text, {
                    className: F.tip,
                    variant: "text-md/medium",
                    children: C.Z.Messages.GAME_PROFILE_FEEDBACK_TIP_WRONG_GAME,
                  }),
                  (0, l.jsxs)("div", {
                    className: F.gameInfoBox,
                    style: {
                      background: "linear-gradient(45deg, "
                        .concat(b, ", ")
                        .concat(B, ")"),
                    },
                    children: [
                      null != D &&
                        (0, l.jsx)("img", {
                          className: F.gameIcon,
                          src: D,
                          alt: "",
                        }),
                      (0, l.jsx)(E.Heading, {
                        variant: "heading-lg/semibold",
                        className: F.gameTitle,
                        children:
                          null !== (s = null == G ? void 0 : G.name) &&
                          void 0 !== s
                            ? s
                            : null == j
                              ? void 0
                              : j.name,
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: F.applicationSearch,
                    children: [
                      (0, l.jsx)(E.SearchBar, {
                        className: F.searchBar,
                        query: A,
                        onChange: (e) => {
                          if (0 === e.length) null === R && N(t);
                          else {
                            var a;
                            let n = f.find((a) => a.name === e);
                            N(
                              null !== (a = null == n ? void 0 : n.id) &&
                                void 0 !== a
                                ? a
                                : "",
                            );
                          }
                          O(e);
                        },
                        size: E.SearchBar.Sizes.MEDIUM,
                        onClear: () => {
                          null === R && N(t), O("");
                        },
                        placeholder:
                          C.Z.Messages
                            .GAME_PROFILE_FEEDBACK_PLACEHOLDER_INCORRECT,
                      }),
                      (0, l.jsx)(E.RadioGroup, {
                        size: E.RadioGroup.Sizes.NONE,
                        radioPosition: "right",
                        withTransparentBackground: !0,
                        value: R,
                        options: S,
                        onChange: (e) => {
                          let { value: a } = e;
                          return N(a);
                        },
                      }),
                    ],
                  }),
                ],
              }),
              (0, l.jsx)(E.ModalFooter, {
                className: F.footer,
                children: (0, l.jsx)(E.Button, {
                  fullWidth: !0,
                  onClick: () => {
                    let e = null != R && R.length > 0;
                    (0, I.MH)({
                      applicationId: t,
                      suggestedGameApplicationId: e ? R : void 0,
                      suggestedGameName: e ? void 0 : A,
                      submitted: !0,
                      viewId: x,
                    }),
                      d();
                  },
                  disabled: L,
                  children: C.Z.Messages.SUBMIT,
                }),
              }),
            ],
          })
        );
      }
      function N(e) {
        let { applicationId: a, onSubmitted: n, viewId: s } = e,
          [t, d] = i.useState("");
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(E.ModalContent, {
              className: F.content,
              children: [
                (0, l.jsx)(E.Heading, {
                  variant: "heading-xl/bold",
                  className: F.header,
                  children: C.Z.Messages.GAME_PROFILE_FEEDBACK_HEADER_OTHER,
                }),
                (0, l.jsx)(E.Text, {
                  className: F.tip,
                  variant: "text-md/medium",
                  children: C.Z.Messages.GAME_PROFILE_FEEDBACK_TIP_OTHER,
                }),
                (0, l.jsx)("div", {
                  className: F.otherFeedbackInput,
                  children: (0, l.jsx)(E.TextArea, {
                    value: t,
                    onChange: (e) => d(e),
                    placeholder:
                      C.Z.Messages.GAME_PROFILE_FEEDBACK_PLACEHOLDER_OTHER,
                    maxLength: 300,
                  }),
                }),
              ],
            }),
            (0, l.jsx)(E.ModalFooter, {
              className: F.footer,
              children: (0, l.jsx)(E.Button, {
                fullWidth: !0,
                onClick: () => {
                  (0, I.MH)({
                    applicationId: a,
                    submitted: !0,
                    feedback: t,
                    viewId: s,
                  }),
                    n();
                },
                disabled: 0 === t.length,
                children: C.Z.Messages.SUBMIT,
              }),
            }),
          ],
        });
      }
      function G(e) {
        let { onClose: a } = e;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(E.ModalContent, {
              className: F.content,
              children: [
                (0, l.jsx)(E.Heading, {
                  variant: "heading-xl/bold",
                  className: F.header,
                  children: C.Z.Messages.GAME_PROFILE_FEEDBACK_HEADER_TY,
                }),
                (0, l.jsx)(E.Text, {
                  className: F.tip,
                  variant: "text-md/medium",
                  children: C.Z.Messages.GAME_PROFILE_FEEDBACK_TIP_TY,
                }),
              ],
            }),
            (0, l.jsx)(E.ModalFooter, {
              className: F.footer,
              children: (0, l.jsx)(E.Button, {
                fullWidth: !0,
                onClick: a,
                children: C.Z.Messages.DONE,
              }),
            }),
          ],
        });
      }
      function T(e) {
        let { applicationId: a, viewId: n, transitionState: s, onClose: t } = e,
          [d, o] = i.useState(0);
        return (0, l.jsx)(E.ModalRoot, {
          size: E.ModalSize.SMALL,
          transitionState: s,
          children: (() => {
            switch (d) {
              case 0:
                return (0, l.jsx)(O, { onChoice: (e) => o(e) });
              case 1:
                return (0, l.jsx)(R, {
                  applicationId: a,
                  viewId: n,
                  onSubmitted: () => o(4),
                });
              case 2:
                return (0, l.jsx)(j, {
                  applicationId: a,
                  viewId: n,
                  onSubmitted: () => t(),
                });
              case 3:
                return (0, l.jsx)(N, {
                  applicationId: a,
                  viewId: n,
                  onSubmitted: () => o(4),
                });
              case 4:
                return (0, l.jsx)(G, { onClose: t });
            }
          })(),
        });
      }
    },
    666046: function (e, a, n) {
      e.exports = {
        content: "content_d9bd92",
        header: "header_d9bd92",
        tip: "tip_d9bd92",
        footer: "footer_d9bd92",
        radioGroup: "radioGroup_d9bd92",
        applicationSearch: "applicationSearch_d9bd92",
        gameSuggestion: "gameSuggestion_d9bd92",
        otherFeedbackInput: "otherFeedbackInput_d9bd92",
        searchBar: "searchBar_d9bd92",
        gameInfoBox: "gameInfoBox_d9bd92",
        gameIcon: "gameIcon_d9bd92",
        smolGameIcon: "smolGameIcon_d9bd92",
        gameTitle: "gameTitle_d9bd92",
      };
    },
  },
]);
//# sourceMappingURL=ec96cf48afcdfb86d71a.js.map
