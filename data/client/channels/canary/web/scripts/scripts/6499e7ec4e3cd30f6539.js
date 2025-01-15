"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["52432"],
  {
    829302: function (e) {
      e.exports = "/assets/0b3b85ccbde560fed689.svg";
    },
    900564: function (e) {
      e.exports = "/assets/a8315da78d79c09bb24e.svg";
    },
    670903: function (e) {
      e.exports = "/assets/b2ae62e3f77efa49ca11.svg";
    },
    391647: function (e) {
      e.exports = "/assets/c7b2eb49c331a66803a5.svg";
    },
    631108: function (e) {
      e.exports = "/assets/fd2df6a4c15057c0d090.svg";
    },
    957115: function (e, t, n) {
      n.d(t, {
        B: function () {
          return s;
        },
      }),
        n(653041);
      var a = n(392711),
        o = n.n(a);
      let s = (e, t) => {
        let n = o().shuffle(e),
          a = n.findIndex((e) => e.value === t);
        if (a > -1) {
          let e = n[a];
          n.splice(a, 1), n.push(e);
        }
        return n;
      };
    },
    332664: function (e, t, n) {
      n.d(t, {
        L: function () {
          return k;
        },
        Z: function () {
          return B;
        },
      }),
        n(47120);
      var a = n(200651),
        o = n(192379),
        s = n(120356),
        l = n.n(s),
        i = n(392711),
        r = n.n(i),
        c = n(481060),
        d = n(493773),
        u = n(110924),
        m = n(600164),
        b = n(313201),
        x = n(237617),
        h = n(572539),
        f = n(626135),
        j = n(63063),
        g = n(957115),
        p = n(531578),
        _ = n(981631),
        N = n(388032),
        S = n(369769);
      let C = [
        {
          className: S.emojiSad,
          rating: p.aZ.BAD,
          classNameSelected: S.selected,
        },
        {
          className: S.emojiNeutral,
          rating: p.aZ.NEUTRAL,
          classNameSelected: S.selected,
        },
        {
          className: S.emojiHappy,
          rating: p.aZ.GOOD,
          classNameSelected: S.selected,
        },
      ];
      function k(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: o,
          onChangeRating: s,
        } = e;
        return (0, a.jsx)(m.Z, {
          justify: m.Z.Justify.BETWEEN,
          align: m.Z.Align.CENTER,
          className: l()(S.ratingsSelector, t),
          children: (null != o ? o : C).map((e) => {
            let { rating: t, className: o, classNameSelected: i } = e;
            return (0, a.jsx)(
              c.Clickable,
              {
                onClick: () => s(t),
                "aria-label": t,
                children: (0, a.jsx)("div", {
                  className: l()(o, n === t ? i : null),
                }),
              },
              t,
            );
          }),
        });
      }
      function Z() {
        return (0, a.jsx)(c.Text, {
          className: S.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: N.intl.format(N.t.ybi2tL, {
            helpdeskURL: j.Z.getSubmitRequestURL(),
          }),
        });
      }
      function B(e) {
        let {
            modalType: t,
            header: n,
            body: s,
            problemTitle: i,
            problems: j,
            transitionState: C,
            ratingConfigs: B,
            feedbackProblems: v = [],
            otherKey: T,
            ratingsSelectorClassName: y,
            hideDontShowCheckbox: E,
            startRating: L = null,
            hideHelpDeskLink: R = !1,
            onSubmit: M,
            onClose: D,
          } = e,
          A = (0, u.Z)(j),
          [I, F] = o.useState(!1),
          [O, z] = o.useState(L),
          [H, U] = o.useState(null),
          [w, G] = o.useState(r().shuffle(j)),
          [K, Y] = o.useState(""),
          P = (0, b.Dt)(),
          q = (0, x.Z)(O),
          W = (0, x.Z)(I),
          J = (0, x.Z)(H),
          V = (0, x.Z)(M),
          X = (0, x.Z)(K),
          Q = null != H && v.includes(H);
        return (
          o.useEffect(() => {
            !r().isEqual(A, j) && G((0, g.B)(j, T));
          }, [j, A, T]),
          (0, d.Z)(
            () => (
              f.default.track(_.rMx.OPEN_MODAL, {
                type: t,
                source: "Feedback Modal",
              }),
              () => {
                V.current({
                  rating: q.current,
                  problem: J.current,
                  dontShowAgain: W.current,
                  feedback: X.current,
                });
              }
            ),
          ),
          (0, a.jsxs)(c.ModalRoot, {
            transitionState: C,
            className: S.__invalid_modalRoot,
            "aria-labelledby": P,
            children: [
              (0, a.jsxs)(c.ModalHeader, {
                separator: !1,
                className: S.headerContainer,
                children: [
                  (0, a.jsx)(c.Heading, {
                    id: P,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: n,
                  }),
                  (0, a.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: S.ratingBody,
                    children: s,
                  }),
                  Q
                    ? null
                    : (0, a.jsx)(k, {
                        className: l()(S.emojis, y),
                        selectedRating: O,
                        onChangeRating: function (e) {
                          z(e), e === p.aZ.GOOD && D();
                        },
                        ratingConfigs: B,
                      }),
                ],
              }),
              (0, a.jsxs)(c.ModalContent, {
                className: S.__invalid_content,
                children: [
                  null == O || O === p.aZ.GOOD || Q
                    ? null
                    : (0, a.jsx)(c.FormItem, {
                        title: i,
                        className: S.problemInfo,
                        children: (0, a.jsx)(h.Z, {
                          options: w,
                          onClick: function (e) {
                            let { value: t } = e;
                            U(t), !v.includes(t) && D();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !v.includes(t);
                          },
                        }),
                      }),
                  Q
                    ? (0, a.jsxs)(c.FormItem, {
                        title: N.intl.string(N.t.h95hcn),
                        className: S.problemInfo,
                        children: [
                          (0, a.jsx)(c.TextArea, {
                            value: K,
                            maxLength: p.iF,
                            onChange: Y,
                          }),
                          !R && (0, a.jsx)(Z, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (Q || !E) &&
                (0, a.jsx)(c.ModalFooter, {
                  className: S.footer,
                  direction: m.Z.Direction.HORIZONTAL,
                  children: Q
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              U(null), Y("");
                            },
                            children: N.intl.string(N.t["13/7kZ"]),
                          }),
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: D,
                            children: N.intl.string(N.t.geKm7u),
                          }),
                        ],
                      })
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.INVERTED,
                            size: 18,
                            value: I,
                            onChange: () => F(!I),
                            children: (0, a.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              children: N.intl.string(N.t["5E9SBw"]),
                            }),
                          }),
                          null != O &&
                            O !== p.aZ.GOOD &&
                            (0, a.jsx)(c.Button, {
                              type: "submit",
                              size: c.Button.Sizes.SMALL,
                              onClick: D,
                              children: N.intl.string(N.t["5WxrcX"]),
                            }),
                        ],
                      }),
                }),
            ],
          })
        );
      }
    },
    572539: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var a = n(200651);
      n(192379);
      var o = n(120356),
        s = n.n(o),
        l = n(481060),
        i = n(259580),
        r = n(547803);
      function c(e) {
        let {
          options: t,
          onClick: n,
          className: o,
          optionClassName: c,
          hideCaret: d,
        } = e;
        return (0, a.jsx)("div", {
          className: s()(r.root, o),
          children: t.map((e, t) =>
            (0, a.jsxs)(
              l.Clickable,
              {
                onClick: () => n(e),
                className: s()(r.option, c),
                children: [
                  (0, a.jsx)(l.Text, {
                    className: r.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == d ? void 0 : d(e)) &&
                    (0, a.jsx)(i.Z, {
                      className: r.caret,
                      direction: i.Z.Directions.RIGHT,
                    }),
                ],
              },
              t,
            ),
          ),
        });
      }
    },
    429506: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var a = n(626135),
        o = n(981631);
      function s(e) {
        let { rating: t = null } = e;
        a.default.track(o.rMx.SAFETY_USER_SENTIMENT_FEEDBACK_SUBMITTED, {
          rating: t,
        });
      }
    },
    349994: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        }),
        n(47120);
      var a = n(200651),
        o = n(192379),
        s = n(481060),
        l = n(313201),
        i = n(332664),
        r = n(429506),
        c = n(981631),
        d = n(531578),
        u = n(388032),
        m = n(98e3);
      let b = [
        {
          className: m.emojiThumbsUp,
          rating: d.aZ.GOOD,
          classNameSelected: m.selected,
        },
        {
          className: m.emojiThumbsDown,
          rating: d.aZ.BAD,
          classNameSelected: m.selected,
        },
      ];
      function x(e) {
        let [t, d] = o.useState(null),
          x = (0, l.Dt)();
        return (0, a.jsxs)(s.ModalRoot, {
          transitionState: e.transitionState,
          "aria-labelledby": x,
          children: [
            (0, a.jsxs)(s.ModalHeader, {
              separator: !1,
              className: m.headerContainer,
              children: [
                (0, a.jsx)(s.Heading, {
                  id: x,
                  variant: "heading-xl/extrabold",
                  color: "none",
                  children: u.intl.string(u.t.BIbnR0),
                }),
                (0, a.jsx)(s.Text, {
                  variant: "text-md/normal",
                  className: m.ratingBody,
                  children: u.intl.string(u.t.j2kf2t),
                }),
              ],
            }),
            (0, a.jsx)(s.ModalContent, {
              className: m.modalBody,
              children: (0, a.jsx)(i.L, {
                ratingConfigs: b,
                className: m.ratingsSelector,
                selectedRating: t,
                onChangeRating: function (t) {
                  d(t),
                    !(function (t) {
                      if (null != t)
                        (0, r.Z)({ rating: t }),
                          e.onClose(),
                          (0, s.openModalLazy)(async () => {
                            let { default: e } = await n
                              .e("14466")
                              .then(n.bind(n, 729328));
                            return (t) =>
                              (0, a.jsx)(e, {
                                body: u.intl.string(u.t.IuPjpK),
                                ...t,
                              });
                          });
                    })(t);
                },
              }),
            }),
            (0, a.jsx)(s.ModalFooter, {
              className: m.ratingsFooter,
              children: (0, a.jsx)(s.Text, {
                variant: "text-md/normal",
                children: u.intl.format(u.t.zru1Ky, {
                  safetyCenterUrl: c.EYA.SAFETY_CENTER,
                }),
              }),
            }),
          ],
        });
      }
    },
    369769: function (e, t, n) {
      e.exports = {
        headerContainer: "headerContainer_b58b14",
        modalCloseButton: "modalCloseButton_b58b14",
        helpdeskLink: "helpdeskLink_b58b14",
        header: "header_b58b14",
        ratingBody: "ratingBody_b58b14",
        footer: "footer_b58b14",
        ratingsSelector: "ratingsSelector_b58b14",
        emojis: "emojis_b58b14",
        problemInfo: "problemInfo_b58b14",
        selected: "selected_b58b14",
        emojiSad: "emojiSad_b58b14 emoji_b58b14",
        emojiNeutral: "emojiNeutral_b58b14 emoji_b58b14",
        emojiHappy: "emojiHappy_b58b14 emoji_b58b14",
      };
    },
    547803: function (e, t, n) {
      e.exports = {
        root: "root_c3b890",
        option: "option_c3b890",
        text: "text_c3b890",
        caret: "caret_c3b890",
      };
    },
    98e3: function (e, t, n) {
      e.exports = {
        headerContainer: "headerContainer_dc57e2",
        ratingBody: "ratingBody_dc57e2",
        ratingsFooter: "ratingsFooter_dc57e2",
        modalBody: "modalBody_dc57e2",
        ratingsSelector: "ratingsSelector_dc57e2",
        selected: "selected_dc57e2",
        emojiThumbsDown: "emojiThumbsDown_dc57e2 emoji_dc57e2",
        emojiThumbsUp: "emojiThumbsUp_dc57e2 emoji_dc57e2",
      };
    },
  },
]);
//# sourceMappingURL=6499e7ec4e3cd30f6539.js.map
