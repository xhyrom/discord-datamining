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
        l = n(200651),
        o = n(192379),
        i = n(658722),
        d = n.n(i),
        r = n(392711),
        c = n(442837),
        m = n(481060),
        E = n(224706),
        u = n(812206),
        g = n(835473),
        h = n(206295),
        _ = n(669764),
        x = n(925329),
        I = n(77498),
        M = n(49012),
        A = n(810568),
        C = n(701488),
        p = n(689938),
        O = n(666046);
      ((t = s || (s = {}))[(t.FEEDBACK_TYPE = 0)] = "FEEDBACK_TYPE"),
        (t[(t.WRONG_GAME = 1)] = "WRONG_GAME"),
        (t[(t.OUTDATED_INFO = 2)] = "OUTDATED_INFO"),
        (t[(t.OTHER = 3)] = "OTHER"),
        (t[(t.CONFIRMATION = 4)] = "CONFIRMATION");
      function F(e) {
        let { showOutdatedInfoOption: a, onChoice: n } = e,
          s = [
            {
              name: p.Z.Messages.GAME_PROFILE_FEEDBACK_CHOICE_WRONG_GAME,
              value: 1,
            },
            ...(a
              ? [
                  {
                    name: p.Z.Messages.GAME_PROFILE_FEEDBACK_CHOICE_OUTDATED,
                    value: 2,
                  },
                ]
              : []),
            { name: p.Z.Messages.GAME_PROFILE_FEEDBACK_CHOICE_OTHER, value: 3 },
          ];
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsxs)(m.ModalContent, {
            className: O.content,
            children: [
              (0, l.jsx)(m.Heading, {
                variant: "heading-xl/bold",
                className: O.header,
                children: p.Z.Messages.GAME_PROFILE_FEEDBACK_HEADER_CHOOSE_TYPE,
              }),
              (0, l.jsx)(m.Text, {
                className: O.tip,
                variant: "text-md/normal",
                children: p.Z.Messages.GAME_PROFILE_FEEDBACK_TIP_CHOOSE_TYPE,
              }),
              (0, l.jsx)(m.RadioGroup, {
                className: O.radioGroup,
                options: s,
                onChange: (e) => {
                  let { value: a } = e;
                  return n(a);
                },
              }),
            ],
          }),
        });
      }
      function N(e) {
        let { applicationId: a, onSubmitted: n, viewId: s } = e,
          t = (0, g.q)(a);
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(m.ModalContent, {
              className: O.content,
              children: [
                (0, l.jsx)(m.Heading, {
                  variant: "heading-xl/bold",
                  className: O.header,
                  children: p.Z.Messages.GAME_PROFILE_FEEDBACK_HEADER_OUTDATED,
                }),
                (0, l.jsx)(m.Text, {
                  className: O.tip,
                  variant: "text-md/normal",
                  children: p.Z.Messages.GAME_PROFILE_FEEDBACK_TIP_OUTDATED,
                }),
              ],
            }),
            (0, l.jsx)(m.ModalFooter, {
              className: O.footer,
              children: (0, l.jsx)(m.Button, {
                fullWidth: !0,
                onClick: () => {
                  var e;
                  (0, M.q)({
                    href:
                      (null == (e = t) ? void 0 : e.name) != null
                        ? ""
                            .concat("https://www.igdb.com/search?utf8=✓&q=")
                            .concat(encodeURIComponent(e.name))
                        : "https://www.igdb.com",
                    trusted: !0,
                  }),
                    (0, A.MH)({ applicationId: a, submitted: !0, viewId: s }),
                    n();
                },
                children: p.Z.Messages.GAME_PROFILE_FEEDBACK_VISIT_IGDB,
              }),
            }),
          ],
        });
      }
      let R = (e) => {
        let { id: a, name: n, applicationRecord: s } = e;
        return (0, l.jsxs)("div", {
          className: O.gameSuggestion,
          children: [
            null != a
              ? (0, l.jsx)(x.Z, { game: s, className: O.smolGameIcon })
              : (0, l.jsx)(m.PencilIcon, {
                  className: O.customGameNameIcon,
                  size: "sm",
                }),
            n,
          ],
        });
      };
      function j(e) {
        var a, n, s;
        let { applicationId: t, onSubmitted: i, viewId: x } = e,
          [M, F] = o.useState(""),
          N = (0, c.e7)([u.Z], () => u.Z.getApplication(t)),
          [j, v] = o.useState(""),
          G = (0, c.e7)([_.Z], () => _.Z.getGame(t)),
          T =
            null !==
              (n =
                null !== (a = null == G ? void 0 : G.name) && void 0 !== a
                  ? a
                  : null == N
                    ? void 0
                    : N.name) && void 0 !== n
              ? n
              : "",
          b = null == N ? void 0 : N.getIconURL(C.Si.LARGE),
          { primaryColor: D, secondaryColor: B } = (0, h.Z)(b);
        o.useEffect(() => {
          E.Z.getDetectableGames();
        }, []);
        let f = (0, c.Wu)(
            [I.Z],
            () => {
              let e = (
                  (null == M ? void 0 : M.length) > 0 ? M : T
                ).toLowerCase(),
                a = null != j ? I.Z.getDetectableGame(j) : void 0;
              return (0, r.chain)(I.Z.games)
                .filter((a) => d()(e, a.name.toLowerCase()))
                .filter((e) => e.id !== t)
                .take(4)
                .concat(null != a ? [a] : [])
                .compact()
                .uniqBy("id")
                .value();
            },
            [t, j, T, M],
          ),
          L = (0, g.Z)(f.map((e) => e.id)),
          Z = (0, r.chain)(L).compact().keyBy("id").value(),
          P =
            M.length > 0 &&
            !f.map((e) => e.name.toLowerCase()).includes(M.toLowerCase()),
          S = j === t || (null === j && 0 === M.length),
          H = f.map((e) => {
            let { name: a, id: n } = e;
            return {
              name: (0, l.jsx)(R, { name: a, id: n, applicationRecord: Z[n] }),
              value: n,
            };
          });
        return (
          P && H.push({ name: (0, l.jsx)(R, { name: M }), value: "" }),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)(m.ModalContent, {
                className: O.content,
                children: [
                  (0, l.jsx)(m.Heading, {
                    variant: "heading-xl/bold",
                    className: O.header,
                    children:
                      p.Z.Messages.GAME_PROFILE_FEEDBACK_HEADER_WRONG_GAME,
                  }),
                  (0, l.jsx)(m.Text, {
                    className: O.tip,
                    variant: "text-md/normal",
                    children: p.Z.Messages.GAME_PROFILE_FEEDBACK_TIP_WRONG_GAME,
                  }),
                  (0, l.jsxs)("div", {
                    className: O.gameInfoBox,
                    style: {
                      background: "linear-gradient(45deg, "
                        .concat(D, ", ")
                        .concat(B, ")"),
                    },
                    children: [
                      null != b &&
                        (0, l.jsx)("img", {
                          className: O.gameIcon,
                          src: b,
                          alt: "",
                        }),
                      (0, l.jsx)(m.Heading, {
                        variant: "heading-lg/semibold",
                        className: O.gameTitle,
                        children:
                          null !== (s = null == G ? void 0 : G.name) &&
                          void 0 !== s
                            ? s
                            : null == N
                              ? void 0
                              : N.name,
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: O.applicationSearch,
                    children: [
                      (0, l.jsx)(m.SearchBar, {
                        className: O.searchBar,
                        query: M,
                        onChange: (e) => {
                          if (0 === e.length) null === j && v(t);
                          else {
                            var a;
                            let n = f.find(
                              (a) => a.name.toLowerCase() === e.toLowerCase(),
                            );
                            v(
                              null !== (a = null == n ? void 0 : n.id) &&
                                void 0 !== a
                                ? a
                                : "",
                            );
                          }
                          F(e);
                        },
                        size: m.SearchBar.Sizes.MEDIUM,
                        onClear: () => {
                          null === j && v(t), F("");
                        },
                        placeholder:
                          p.Z.Messages
                            .GAME_PROFILE_FEEDBACK_PLACEHOLDER_INCORRECT,
                      }),
                      (0, l.jsx)(m.RadioGroup, {
                        size: m.RadioGroup.Sizes.NONE,
                        radioPosition: "right",
                        withTransparentBackground: !0,
                        radioItemClassName: O.gameSuggestionRadioItem,
                        value: j,
                        options: H,
                        onChange: (e) => {
                          let { value: a } = e;
                          return v(a);
                        },
                      }),
                    ],
                  }),
                ],
              }),
              (0, l.jsx)(m.ModalFooter, {
                className: O.footer,
                children: (0, l.jsx)(m.Button, {
                  fullWidth: !0,
                  onClick: () => {
                    let e = null != j && j.length > 0;
                    (0, A.MH)({
                      applicationId: t,
                      suggestedGameApplicationId: e ? j : void 0,
                      suggestedGameName: e ? void 0 : M,
                      submitted: !0,
                      viewId: x,
                    }),
                      i();
                  },
                  disabled: S,
                  children: p.Z.Messages.SUBMIT,
                }),
              }),
            ],
          })
        );
      }
      function v(e) {
        let { applicationId: a, onSubmitted: n, viewId: s } = e,
          [t, i] = o.useState("");
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(m.ModalContent, {
              className: O.content,
              children: [
                (0, l.jsx)(m.Heading, {
                  variant: "heading-xl/bold",
                  className: O.header,
                  children: p.Z.Messages.GAME_PROFILE_FEEDBACK_HEADER_OTHER,
                }),
                (0, l.jsx)(m.Text, {
                  className: O.tip,
                  variant: "text-md/normal",
                  children: p.Z.Messages.GAME_PROFILE_FEEDBACK_TIP_OTHER,
                }),
                (0, l.jsx)("div", {
                  className: O.otherFeedbackInput,
                  children: (0, l.jsx)(m.TextArea, {
                    value: t,
                    onChange: (e) => i(e),
                    placeholder:
                      p.Z.Messages.GAME_PROFILE_FEEDBACK_PLACEHOLDER_OTHER,
                    maxLength: 300,
                  }),
                }),
              ],
            }),
            (0, l.jsx)(m.ModalFooter, {
              className: O.footer,
              children: (0, l.jsx)(m.Button, {
                fullWidth: !0,
                onClick: () => {
                  (0, A.MH)({
                    applicationId: a,
                    submitted: !0,
                    feedback: t,
                    viewId: s,
                  }),
                    n();
                },
                disabled: 0 === t.length,
                children: p.Z.Messages.SUBMIT,
              }),
            }),
          ],
        });
      }
      function G(e) {
        let { onClose: a } = e;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(m.ModalContent, {
              className: O.content,
              children: [
                (0, l.jsx)(m.Heading, {
                  variant: "heading-xl/bold",
                  className: O.header,
                  children: p.Z.Messages.GAME_PROFILE_FEEDBACK_HEADER_TY,
                }),
                (0, l.jsx)(m.Text, {
                  className: O.tip,
                  variant: "text-md/normal",
                  children: p.Z.Messages.GAME_PROFILE_FEEDBACK_TIP_TY,
                }),
              ],
            }),
            (0, l.jsx)(m.ModalFooter, {
              className: O.footer,
              children: (0, l.jsx)(m.Button, {
                fullWidth: !0,
                onClick: a,
                children: p.Z.Messages.DONE,
              }),
            }),
          ],
        });
      }
      function T(e) {
        let {
            applicationId: a,
            viewId: n,
            transitionState: s,
            onClose: t,
            showOutdatedInfoOption: i,
          } = e,
          [d, r] = o.useState(0);
        return (0, l.jsx)(m.ModalRoot, {
          size: m.ModalSize.SMALL,
          transitionState: s,
          children: (() => {
            switch (d) {
              case 0:
                return (0, l.jsx)(F, {
                  showOutdatedInfoOption: i,
                  onChoice: (e) => r(e),
                });
              case 1:
                return (0, l.jsx)(j, {
                  applicationId: a,
                  viewId: n,
                  onSubmitted: () => r(4),
                });
              case 2:
                return (0, l.jsx)(N, {
                  applicationId: a,
                  viewId: n,
                  onSubmitted: () => t(),
                });
              case 3:
                return (0, l.jsx)(v, {
                  applicationId: a,
                  viewId: n,
                  onSubmitted: () => r(4),
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
        gameSuggestionRadioItem: "gameSuggestionRadioItem_d9bd92",
        otherFeedbackInput: "otherFeedbackInput_d9bd92",
        searchBar: "searchBar_d9bd92",
        gameInfoBox: "gameInfoBox_d9bd92",
        gameIcon: "gameIcon_d9bd92",
        smolGameIcon: "smolGameIcon_d9bd92",
        customGameNameIcon: "customGameNameIcon_d9bd92",
        gameTitle: "gameTitle_d9bd92",
      };
    },
  },
]);
//# sourceMappingURL=51a88cd56c45696868c7.js.map
