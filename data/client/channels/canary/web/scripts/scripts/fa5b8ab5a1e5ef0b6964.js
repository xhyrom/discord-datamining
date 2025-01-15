"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["46923"],
  {
    55396: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return R;
          },
        }),
        n(47120),
        n(653041);
      var a,
        i,
        l = n(200651),
        s = n(192379),
        o = n(658722),
        d = n.n(o),
        r = n(392711),
        c = n(442837),
        m = n(481060),
        u = n(224706),
        g = n(812206),
        h = n(835473),
        x = n(206295),
        p = n(669764),
        j = n(925329),
        v = n(77498),
        N = n(49012),
        b = n(810568),
        I = n(701488),
        f = n(388032),
        C = n(795816);
      ((i = a || (a = {}))[(i.FEEDBACK_TYPE = 0)] = "FEEDBACK_TYPE"),
        (i[(i.WRONG_GAME = 1)] = "WRONG_GAME"),
        (i[(i.OUTDATED_INFO = 2)] = "OUTDATED_INFO"),
        (i[(i.OTHER = 3)] = "OTHER"),
        (i[(i.CONFIRMATION = 4)] = "CONFIRMATION");
      function S(e) {
        let { showOutdatedInfoOption: t, onChoice: n } = e,
          a = [
            { name: f.intl.string(f.t["o/xUFh"]), value: 1 },
            ...(t ? [{ name: f.intl.string(f.t["ry3/tL"]), value: 2 }] : []),
            { name: f.intl.string(f.t.JyZlTk), value: 3 },
          ];
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsxs)(m.ModalContent, {
            className: C.content,
            children: [
              (0, l.jsx)(m.Heading, {
                variant: "heading-xl/bold",
                className: C.header,
                children: f.intl.string(f.t["8itBsL"]),
              }),
              (0, l.jsx)(m.Text, {
                className: C.tip,
                variant: "text-md/normal",
                children: f.intl.string(f.t.X7ab09),
              }),
              (0, l.jsx)(m.RadioGroup, {
                className: C.radioGroup,
                options: a,
                onChange: (e) => {
                  let { value: t } = e;
                  return n(t);
                },
              }),
            ],
          }),
        });
      }
      function _(e) {
        let { applicationId: t, onSubmitted: n, viewId: a } = e,
          i = (0, h.q)(t);
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(m.ModalContent, {
              className: C.content,
              children: [
                (0, l.jsx)(m.Heading, {
                  variant: "heading-xl/bold",
                  className: C.header,
                  children: f.intl.string(f.t.lWk2u7),
                }),
                (0, l.jsx)(m.Text, {
                  className: C.tip,
                  variant: "text-md/normal",
                  children: f.intl.string(f.t.ZQfxS0),
                }),
              ],
            }),
            (0, l.jsx)(m.ModalFooter, {
              className: C.footer,
              children: (0, l.jsx)(m.Button, {
                fullWidth: !0,
                onClick: () => {
                  var e;
                  (0, N.q)({
                    href:
                      (null == (e = i) ? void 0 : e.name) != null
                        ? ""
                            .concat("https://www.igdb.com/search?utf8=✓&q=")
                            .concat(encodeURIComponent(e.name))
                        : "https://www.igdb.com",
                    trusted: !0,
                  }),
                    (0, b.MH)({ applicationId: t, submitted: !0, viewId: a }),
                    n();
                },
                children: f.intl.string(f.t.RSATCA),
              }),
            }),
          ],
        });
      }
      let G = (e) => {
        let { id: t, name: n, applicationRecord: a } = e;
        return (0, l.jsxs)("div", {
          className: C.gameSuggestion,
          children: [
            null != t
              ? (0, l.jsx)(j.Z, { game: a, className: C.smolGameIcon })
              : (0, l.jsx)(m.PencilIcon, {
                  className: C.customGameNameIcon,
                  size: "sm",
                }),
            n,
          ],
        });
      };
      function T(e) {
        var t, n, a;
        let { applicationId: i, onSubmitted: o, viewId: j } = e,
          [N, S] = s.useState(""),
          _ = (0, c.e7)([g.Z], () => g.Z.getApplication(i)),
          [T, M] = s.useState(""),
          w = (0, c.e7)([p.Z], () => p.Z.getGame(i)),
          R =
            null !==
              (n =
                null !== (t = null == w ? void 0 : w.name) && void 0 !== t
                  ? t
                  : null == _
                    ? void 0
                    : _.name) && void 0 !== n
              ? n
              : "",
          B = null == _ ? void 0 : _.getIconURL(I.Si.LARGE),
          { primaryColor: F, secondaryColor: k } = (0, x.Z)(B);
        s.useEffect(() => {
          u.Z.getDetectableGames();
        }, []);
        let O = (0, c.Wu)(
            [v.Z],
            () => {
              let e = (
                  (null == N ? void 0 : N.length) > 0 ? N : R
                ).toLowerCase(),
                t = null != T ? v.Z.getDetectableGame(T) : void 0;
              return (0, r.chain)(v.Z.games)
                .filter((t) => d()(e, t.name.toLowerCase()))
                .filter((e) => e.id !== i)
                .take(4)
                .concat(null != t ? [t] : [])
                .compact()
                .uniqBy("id")
                .value();
            },
            [i, T, R, N],
          ),
          A = (0, h.Z)(O.map((e) => e.id)),
          E = (0, r.chain)(A).compact().keyBy("id").value(),
          L =
            N.length > 0 &&
            !O.map((e) => e.name.toLowerCase()).includes(N.toLowerCase()),
          Z = T === i || (null === T && 0 === N.length),
          H = O.map((e) => {
            let { name: t, id: n } = e;
            return {
              name: (0, l.jsx)(G, { name: t, id: n, applicationRecord: E[n] }),
              value: n,
            };
          });
        return (
          L && H.push({ name: (0, l.jsx)(G, { name: N }), value: "" }),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)(m.ModalContent, {
                className: C.content,
                children: [
                  (0, l.jsx)(m.Heading, {
                    variant: "heading-xl/bold",
                    className: C.header,
                    children: f.intl.string(f.t.tJzB6O),
                  }),
                  (0, l.jsx)(m.Text, {
                    className: C.tip,
                    variant: "text-md/normal",
                    children: f.intl.string(f.t["44R0Iy"]),
                  }),
                  (0, l.jsxs)("div", {
                    className: C.gameInfoBox,
                    style: {
                      background: "linear-gradient(45deg, "
                        .concat(F, ", ")
                        .concat(k, ")"),
                    },
                    children: [
                      null != B &&
                        (0, l.jsx)("img", {
                          className: C.gameIcon,
                          src: B,
                          alt: "",
                        }),
                      (0, l.jsx)(m.Heading, {
                        variant: "heading-lg/semibold",
                        className: C.gameTitle,
                        children:
                          null !== (a = null == w ? void 0 : w.name) &&
                          void 0 !== a
                            ? a
                            : null == _
                              ? void 0
                              : _.name,
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: C.applicationSearch,
                    children: [
                      (0, l.jsx)(m.SearchBar, {
                        className: C.searchBar,
                        query: N,
                        onChange: (e) => {
                          if (0 === e.length) null === T && M(i);
                          else {
                            var t;
                            let n = O.find(
                              (t) => t.name.toLowerCase() === e.toLowerCase(),
                            );
                            M(
                              null !== (t = null == n ? void 0 : n.id) &&
                                void 0 !== t
                                ? t
                                : "",
                            );
                          }
                          S(e);
                        },
                        size: m.SearchBar.Sizes.MEDIUM,
                        onClear: () => {
                          null === T && M(i), S("");
                        },
                        placeholder: f.intl.string(f.t.UedRLy),
                      }),
                      (0, l.jsx)(m.RadioGroup, {
                        size: m.RadioGroup.Sizes.NONE,
                        radioPosition: "right",
                        withTransparentBackground: !0,
                        radioItemClassName: C.gameSuggestionRadioItem,
                        value: T,
                        options: H,
                        onChange: (e) => {
                          let { value: t } = e;
                          return M(t);
                        },
                      }),
                    ],
                  }),
                ],
              }),
              (0, l.jsx)(m.ModalFooter, {
                className: C.footer,
                children: (0, l.jsx)(m.Button, {
                  fullWidth: !0,
                  onClick: () => {
                    let e = null != T && T.length > 0;
                    (0, b.MH)({
                      applicationId: i,
                      suggestedGameApplicationId: e ? T : void 0,
                      suggestedGameName: e ? void 0 : N,
                      submitted: !0,
                      viewId: j,
                    }),
                      o();
                  },
                  disabled: Z,
                  children: f.intl.string(f.t.geKm7u),
                }),
              }),
            ],
          })
        );
      }
      function M(e) {
        let { applicationId: t, onSubmitted: n, viewId: a } = e,
          [i, o] = s.useState("");
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(m.ModalContent, {
              className: C.content,
              children: [
                (0, l.jsx)(m.Heading, {
                  variant: "heading-xl/bold",
                  className: C.header,
                  children: f.intl.string(f.t["/nALeX"]),
                }),
                (0, l.jsx)(m.Text, {
                  className: C.tip,
                  variant: "text-md/normal",
                  children: f.intl.string(f.t.WOuJ8v),
                }),
                (0, l.jsx)("div", {
                  className: C.otherFeedbackInput,
                  children: (0, l.jsx)(m.TextArea, {
                    value: i,
                    onChange: (e) => o(e),
                    placeholder: f.intl.string(f.t.AHCr5e),
                    maxLength: 300,
                  }),
                }),
              ],
            }),
            (0, l.jsx)(m.ModalFooter, {
              className: C.footer,
              children: (0, l.jsx)(m.Button, {
                fullWidth: !0,
                onClick: () => {
                  (0, b.MH)({
                    applicationId: t,
                    submitted: !0,
                    feedback: i,
                    viewId: a,
                  }),
                    n();
                },
                disabled: 0 === i.length,
                children: f.intl.string(f.t.geKm7u),
              }),
            }),
          ],
        });
      }
      function w(e) {
        let { onClose: t } = e;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(m.ModalContent, {
              className: C.content,
              children: [
                (0, l.jsx)(m.Heading, {
                  variant: "heading-xl/bold",
                  className: C.header,
                  children: f.intl.string(f.t["pelg/f"]),
                }),
                (0, l.jsx)(m.Text, {
                  className: C.tip,
                  variant: "text-md/normal",
                  children: f.intl.string(f.t["55S/OD"]),
                }),
              ],
            }),
            (0, l.jsx)(m.ModalFooter, {
              className: C.footer,
              children: (0, l.jsx)(m.Button, {
                fullWidth: !0,
                onClick: t,
                children: f.intl.string(f.t.i4jeWV),
              }),
            }),
          ],
        });
      }
      function R(e) {
        let {
            applicationId: t,
            viewId: n,
            transitionState: a,
            onClose: i,
            showOutdatedInfoOption: o,
          } = e,
          [d, r] = s.useState(0);
        return (0, l.jsx)(m.ModalRoot, {
          size: m.ModalSize.SMALL,
          transitionState: a,
          children: (() => {
            switch (d) {
              case 0:
                return (0, l.jsx)(S, {
                  showOutdatedInfoOption: o,
                  onChoice: (e) => r(e),
                });
              case 1:
                return (0, l.jsx)(T, {
                  applicationId: t,
                  viewId: n,
                  onSubmitted: () => r(4),
                });
              case 2:
                return (0, l.jsx)(_, {
                  applicationId: t,
                  viewId: n,
                  onSubmitted: () => i(),
                });
              case 3:
                return (0, l.jsx)(M, {
                  applicationId: t,
                  viewId: n,
                  onSubmitted: () => r(4),
                });
              case 4:
                return (0, l.jsx)(w, { onClose: i });
            }
          })(),
        });
      }
    },
    795816: function (e, t, n) {
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
//# sourceMappingURL=fa5b8ab5a1e5ef0b6964.js.map
