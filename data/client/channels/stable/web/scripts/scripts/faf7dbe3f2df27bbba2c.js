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
          return o;
        },
      }),
        n(653041);
      var a = n(392711),
        s = n.n(a);
      let o = (e, t) => {
        let n = s().shuffle(e),
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
          return C;
        },
        Z: function () {
          return B;
        },
      }),
        n(47120);
      var a = n(200651),
        s = n(192379),
        o = n(120356),
        l = n.n(o),
        i = n(392711),
        r = n.n(i),
        c = n(481060),
        d = n(110924),
        u = n(600164),
        m = n(313201),
        b = n(237617),
        x = n(572539),
        h = n(626135),
        f = n(63063),
        j = n(957115),
        g = n(531578),
        p = n(981631),
        _ = n(388032),
        N = n(720816);
      let S = [
        {
          className: N.emojiSad,
          rating: g.aZ.BAD,
          classNameSelected: N.selected,
        },
        {
          className: N.emojiNeutral,
          rating: g.aZ.NEUTRAL,
          classNameSelected: N.selected,
        },
        {
          className: N.emojiHappy,
          rating: g.aZ.GOOD,
          classNameSelected: N.selected,
        },
      ];
      function C(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: s,
          onChangeRating: o,
        } = e;
        return (0, a.jsx)(u.Z, {
          justify: u.Z.Justify.BETWEEN,
          align: u.Z.Align.CENTER,
          className: l()(N.ratingsSelector, t),
          children: (null != s ? s : S).map((e) => {
            let { rating: t, className: s, classNameSelected: i } = e;
            return (0, a.jsx)(
              c.Clickable,
              {
                onClick: () => o(t),
                "aria-label": t,
                children: (0, a.jsx)("div", {
                  className: l()(s, n === t ? i : null),
                }),
              },
              t,
            );
          }),
        });
      }
      function k() {
        return (0, a.jsx)(c.Text, {
          className: N.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: _.intl.format(_.t.ybi2tL, {
            helpdeskURL: f.Z.getSubmitRequestURL(),
          }),
        });
      }
      function B(e) {
        let {
            modalType: t,
            header: n,
            body: o,
            problemTitle: i,
            problems: f,
            transitionState: S,
            ratingConfigs: B,
            feedbackProblems: Z = [],
            otherKey: v,
            ratingsSelectorClassName: T,
            hideDontShowCheckbox: y,
            startRating: E = null,
            hideHelpDeskLink: L = !1,
            onSubmit: R,
            onClose: M,
          } = e,
          D = (0, d.Z)(f),
          [A, I] = s.useState(!1),
          [F, O] = s.useState(E),
          [z, H] = s.useState(null),
          [U, w] = s.useState(r().shuffle(f)),
          [G, K] = s.useState(""),
          Y = (0, m.Dt)(),
          P = (0, b.Z)(F),
          q = (0, b.Z)(A),
          W = (0, b.Z)(z),
          J = (0, b.Z)(R),
          V = (0, b.Z)(G),
          X = null != z && Z.includes(z);
        return (
          s.useEffect(() => {
            !r().isEqual(D, f) && w((0, j.B)(f, v));
          }, [f, D, v]),
          s.useEffect(
            () => (
              h.default.track(p.rMx.OPEN_MODAL, {
                type: t,
                source: "Feedback Modal",
              }),
              () => {
                J.current({
                  rating: P.current,
                  problem: W.current,
                  dontShowAgain: q.current,
                  feedback: V.current,
                });
              }
            ),
            [],
          ),
          (0, a.jsxs)(c.ModalRoot, {
            transitionState: S,
            className: N.__invalid_modalRoot,
            "aria-labelledby": Y,
            children: [
              (0, a.jsxs)(c.ModalHeader, {
                separator: !1,
                className: N.headerContainer,
                children: [
                  (0, a.jsx)(c.Heading, {
                    id: Y,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: n,
                  }),
                  (0, a.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: N.ratingBody,
                    children: o,
                  }),
                  X
                    ? null
                    : (0, a.jsx)(C, {
                        className: l()(N.emojis, T),
                        selectedRating: F,
                        onChangeRating: function (e) {
                          O(e), e === g.aZ.GOOD && M();
                        },
                        ratingConfigs: B,
                      }),
                ],
              }),
              (0, a.jsxs)(c.ModalContent, {
                className: N.__invalid_content,
                children: [
                  null == F || F === g.aZ.GOOD || X
                    ? null
                    : (0, a.jsx)(c.FormItem, {
                        title: i,
                        className: N.problemInfo,
                        children: (0, a.jsx)(x.Z, {
                          options: U,
                          onClick: function (e) {
                            let { value: t } = e;
                            H(t), !Z.includes(t) && M();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !Z.includes(t);
                          },
                        }),
                      }),
                  X
                    ? (0, a.jsxs)(c.FormItem, {
                        title: _.intl.string(_.t.h95hcn),
                        className: N.problemInfo,
                        children: [
                          (0, a.jsx)(c.TextArea, {
                            value: G,
                            maxLength: g.iF,
                            onChange: K,
                          }),
                          !L && (0, a.jsx)(k, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (X || !y) &&
                (0, a.jsx)(c.ModalFooter, {
                  className: N.footer,
                  direction: u.Z.Direction.HORIZONTAL,
                  children: X
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              H(null), K("");
                            },
                            children: _.intl.string(_.t["13/7kZ"]),
                          }),
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: M,
                            children: _.intl.string(_.t.geKm7u),
                          }),
                        ],
                      })
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.INVERTED,
                            size: 18,
                            value: A,
                            onChange: () => I(!A),
                            children: (0, a.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              children: _.intl.string(_.t["5E9SBw"]),
                            }),
                          }),
                          null != F &&
                            F !== g.aZ.GOOD &&
                            (0, a.jsx)(c.Button, {
                              type: "submit",
                              size: c.Button.Sizes.SMALL,
                              onClick: M,
                              children: _.intl.string(_.t["5WxrcX"]),
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
      var s = n(120356),
        o = n.n(s),
        l = n(481060),
        i = n(259580),
        r = n(995181);
      function c(e) {
        let {
          options: t,
          onClick: n,
          className: s,
          optionClassName: c,
          hideCaret: d,
        } = e;
        return (0, a.jsx)("div", {
          className: o()(r.root, s),
          children: t.map((e, t) =>
            (0, a.jsxs)(
              l.Clickable,
              {
                onClick: () => n(e),
                className: o()(r.option, c),
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
          return o;
        },
      });
      var a = n(626135),
        s = n(981631);
      function o(e) {
        let { rating: t = null } = e;
        a.default.track(s.rMx.SAFETY_USER_SENTIMENT_FEEDBACK_SUBMITTED, {
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
        s = n(192379),
        o = n(481060),
        l = n(313201),
        i = n(332664),
        r = n(429506),
        c = n(981631),
        d = n(531578),
        u = n(388032),
        m = n(940290);
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
        let [t, d] = s.useState(null),
          x = (0, l.Dt)();
        return (0, a.jsxs)(o.ModalRoot, {
          transitionState: e.transitionState,
          "aria-labelledby": x,
          children: [
            (0, a.jsxs)(o.ModalHeader, {
              separator: !1,
              className: m.headerContainer,
              children: [
                (0, a.jsx)(o.Heading, {
                  id: x,
                  variant: "heading-xl/extrabold",
                  color: "none",
                  children: u.intl.string(u.t.BIbnR0),
                }),
                (0, a.jsx)(o.Text, {
                  variant: "text-md/normal",
                  className: m.ratingBody,
                  children: u.intl.string(u.t.j2kf2t),
                }),
              ],
            }),
            (0, a.jsx)(o.ModalContent, {
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
                          (0, o.openModalLazy)(async () => {
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
            (0, a.jsx)(o.ModalFooter, {
              className: m.ratingsFooter,
              children: (0, a.jsx)(o.Text, {
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
    720816: function (e, t, n) {
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
    995181: function (e, t, n) {
      e.exports = {
        root: "root_c3b890",
        option: "option_c3b890",
        text: "text_c3b890",
        caret: "caret_c3b890",
      };
    },
    940290: function (e, t, n) {
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
//# sourceMappingURL=faf7dbe3f2df27bbba2c.js.map
