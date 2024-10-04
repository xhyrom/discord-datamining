"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["46923"],
  {
    55396: function (e, a, s) {
      s.r(a),
        s.d(a, {
          default: function () {
            return T;
          },
        }),
        s(47120),
        s(653041);
      var n,
        t,
        l = s(735250),
        i = s(470079),
        d = s(658722),
        o = s.n(d),
        r = s(392711),
        c = s(442837),
        E = s(481060),
        u = s(224706),
        m = s(812206),
        h = s(835473),
        _ = s(206295),
        g = s(669764),
        x = s(925329),
        M = s(77498),
        A = s(49012),
        I = s(810568),
        p = s(701488),
        C = s(689938),
        F = s(666046);
      function O(e) {
        let { onChoice: a } = e,
          s = [
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
                options: s,
                onChange: (e) => {
                  let { value: s } = e;
                  return a(s);
                },
              }),
            ],
          }),
        });
      }
      function j(e) {
        let { applicationId: a, onSubmitted: s, viewId: n } = e;
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
                  (0, A.q)({ href: "https://igdb.com", trusted: !0 }),
                    (0, I.MH)({ applicationId: a, submitted: !0, viewId: n }),
                    s();
                },
                children: C.Z.Messages.GAME_PROFILE_FEEDBACK_VISIT_IGDB,
              }),
            }),
          ],
        });
      }
      ((t = n || (n = {}))[(t.FEEDBACK_TYPE = 0)] = "FEEDBACK_TYPE"),
        (t[(t.WRONG_GAME = 1)] = "WRONG_GAME"),
        (t[(t.OUTDATED_INFO = 2)] = "OUTDATED_INFO"),
        (t[(t.OTHER = 3)] = "OTHER"),
        (t[(t.CONFIRMATION = 4)] = "CONFIRMATION");
      let R = (e) => {
        let { name: a, applicationRecord: s } = e;
        return (0, l.jsxs)("div", {
          className: F.gameSuggestion,
          children: [
            null != s
              ? (0, l.jsx)(x.Z, { game: s, className: F.smolGameIcon })
              : (0, l.jsx)(E.Spacer, { horizontal: !0, size: 20 }),
            a,
          ],
        });
      };
      function v(e) {
        var a, s, n;
        let { applicationId: t, onSubmitted: d, viewId: x } = e,
          [A, O] = i.useState(""),
          j = (0, c.e7)([m.Z], () => m.Z.getApplication(t)),
          [v, N] = i.useState(null != t ? t : ""),
          G = (0, c.e7)([g.Z], () => g.Z.getGame(t)),
          T =
            null !==
              (s =
                null !== (a = null == G ? void 0 : G.name) && void 0 !== a
                  ? a
                  : null == j
                    ? void 0
                    : j.name) && void 0 !== s
              ? s
              : "",
          D = null == j ? void 0 : j.getIconURL(p.Si.LARGE),
          { primaryColor: b, secondaryColor: B } = (0, _.Z)(D);
        i.useEffect(() => {
          u.Z.getDetectableGames();
        }, []);
        let Z = (0, c.Wu)(
            [M.Z],
            () => {
              let e = (
                  (null == A ? void 0 : A.length) > 0 ? A : T
                ).toLowerCase(),
                a = M.Z.getDetectableGame(t),
                s = null != v ? M.Z.getDetectableGame(v) : void 0;
              return (0, r.chain)(M.Z.games)
                .filter((a) => o()(e, a.name.toLowerCase()))
                .take(3)
                .concat(null != a ? [a] : [], null != s ? [s] : [])
                .compact()
                .uniqBy("id")
                .value();
            },
            [t, v, T, A],
          ),
          f = (0, h.Z)(Z.map((e) => e.id)),
          P = (0, r.chain)(f).compact().keyBy("id").value(),
          H = A.length > 0 && !Z.map((e) => e.name).includes(A),
          L = v === t || (null === v && 0 === A.length),
          S = Z.map((e) => {
            let { name: a, id: s } = e;
            return {
              name: (0, l.jsx)(R, { name: a, applicationRecord: P[s] }),
              value: s,
            };
          });
        return (
          H && S.push({ name: (0, l.jsx)(R, { name: A }), value: "" }),
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
                          null !== (n = null == G ? void 0 : G.name) &&
                          void 0 !== n
                            ? n
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
                          if (0 === e.length) null === v && N(t);
                          else {
                            var a;
                            let s = Z.find((a) => a.name === e);
                            N(
                              null !== (a = null == s ? void 0 : s.id) &&
                                void 0 !== a
                                ? a
                                : "",
                            );
                          }
                          O(e);
                        },
                        size: E.SearchBar.Sizes.MEDIUM,
                        onClear: () => {
                          null === v && N(t), O("");
                        },
                        placeholder:
                          C.Z.Messages
                            .GAME_PROFILE_FEEDBACK_PLACEHOLDER_INCORRECT,
                      }),
                      (0, l.jsx)(E.RadioGroup, {
                        size: E.RadioGroup.Sizes.NONE,
                        radioPosition: "right",
                        withTransparentBackground: !0,
                        value: v,
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
                    let e = null != v && v.length > 0;
                    (0, I.MH)({
                      applicationId: t,
                      suggestedGameApplicationId: e ? v : void 0,
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
        let { applicationId: a, onSubmitted: s, viewId: n } = e,
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
                    viewId: n,
                  }),
                    s();
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
        let { applicationId: a, viewId: s, transitionState: n, onClose: t } = e,
          [d, o] = i.useState(0);
        return (0, l.jsx)(E.ModalRoot, {
          size: E.ModalSize.SMALL,
          transitionState: n,
          children: (() => {
            switch (d) {
              case 0:
                return (0, l.jsx)(O, { onChoice: (e) => o(e) });
              case 1:
                return (0, l.jsx)(v, {
                  applicationId: a,
                  viewId: s,
                  onSubmitted: () => o(4),
                });
              case 2:
                return (0, l.jsx)(j, {
                  applicationId: a,
                  viewId: s,
                  onSubmitted: () => t(),
                });
              case 3:
                return (0, l.jsx)(N, {
                  applicationId: a,
                  viewId: s,
                  onSubmitted: () => o(4),
                });
              case 4:
                return (0, l.jsx)(G, { onClose: t });
            }
          })(),
        });
      }
    },
    666046: function (e, a, s) {
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
//# sourceMappingURL=2fbf8beecf7d0f948088.js.map
