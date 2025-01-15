"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["62104"],
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
      var s = n(392711),
        a = n.n(s);
      let o = (e, t) => {
        let n = a().shuffle(e),
          s = n.findIndex((e) => e.value === t);
        if (s > -1) {
          let e = n[s];
          n.splice(s, 1), n.push(e);
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
          return v;
        },
      }),
        n(47120);
      var s = n(200651),
        a = n(192379),
        o = n(120356),
        i = n.n(o),
        l = n(392711),
        r = n.n(l),
        c = n(481060),
        d = n(493773),
        u = n(110924),
        m = n(600164),
        b = n(313201),
        h = n(237617),
        f = n(572539),
        x = n(626135),
        j = n(63063),
        g = n(957115),
        p = n(531578),
        N = n(981631),
        _ = n(388032),
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
          ratingConfigs: a,
          onChangeRating: o,
        } = e;
        return (0, s.jsx)(m.Z, {
          justify: m.Z.Justify.BETWEEN,
          align: m.Z.Align.CENTER,
          className: i()(S.ratingsSelector, t),
          children: (null != a ? a : C).map((e) => {
            let { rating: t, className: a, classNameSelected: l } = e;
            return (0, s.jsx)(
              c.Clickable,
              {
                onClick: () => o(t),
                "aria-label": t,
                children: (0, s.jsx)("div", {
                  className: i()(a, n === t ? l : null),
                }),
              },
              t,
            );
          }),
        });
      }
      function Z() {
        return (0, s.jsx)(c.Text, {
          className: S.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: _.intl.format(_.t.ybi2tL, {
            helpdeskURL: j.Z.getSubmitRequestURL(),
          }),
        });
      }
      function v(e) {
        let {
            modalType: t,
            header: n,
            body: o,
            problemTitle: l,
            problems: j,
            transitionState: C,
            ratingConfigs: v,
            feedbackProblems: T = [],
            otherKey: B,
            ratingsSelectorClassName: L,
            hideDontShowCheckbox: R,
            startRating: y = null,
            hideHelpDeskLink: D = !1,
            onSubmit: O,
            onClose: E,
          } = e,
          A = (0, u.Z)(j),
          [I, M] = a.useState(!1),
          [H, w] = a.useState(y),
          [F, z] = a.useState(null),
          [U, G] = a.useState(r().shuffle(j)),
          [P, q] = a.useState(""),
          K = (0, b.Dt)(),
          W = (0, h.Z)(H),
          J = (0, h.Z)(I),
          Q = (0, h.Z)(F),
          V = (0, h.Z)(O),
          X = (0, h.Z)(P),
          Y = null != F && T.includes(F);
        return (
          a.useEffect(() => {
            !r().isEqual(A, j) && G((0, g.B)(j, B));
          }, [j, A, B]),
          (0, d.Z)(
            () => (
              x.default.track(N.rMx.OPEN_MODAL, {
                type: t,
                source: "Feedback Modal",
              }),
              () => {
                V.current({
                  rating: W.current,
                  problem: Q.current,
                  dontShowAgain: J.current,
                  feedback: X.current,
                });
              }
            ),
          ),
          (0, s.jsxs)(c.ModalRoot, {
            transitionState: C,
            className: S.__invalid_modalRoot,
            "aria-labelledby": K,
            children: [
              (0, s.jsxs)(c.ModalHeader, {
                separator: !1,
                className: S.headerContainer,
                children: [
                  (0, s.jsx)(c.Heading, {
                    id: K,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: n,
                  }),
                  (0, s.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: S.ratingBody,
                    children: o,
                  }),
                  Y
                    ? null
                    : (0, s.jsx)(k, {
                        className: i()(S.emojis, L),
                        selectedRating: H,
                        onChangeRating: function (e) {
                          w(e), e === p.aZ.GOOD && E();
                        },
                        ratingConfigs: v,
                      }),
                ],
              }),
              (0, s.jsxs)(c.ModalContent, {
                className: S.__invalid_content,
                children: [
                  null == H || H === p.aZ.GOOD || Y
                    ? null
                    : (0, s.jsx)(c.FormItem, {
                        title: l,
                        className: S.problemInfo,
                        children: (0, s.jsx)(f.Z, {
                          options: U,
                          onClick: function (e) {
                            let { value: t } = e;
                            z(t), !T.includes(t) && E();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !T.includes(t);
                          },
                        }),
                      }),
                  Y
                    ? (0, s.jsxs)(c.FormItem, {
                        title: _.intl.string(_.t.h95hcn),
                        className: S.problemInfo,
                        children: [
                          (0, s.jsx)(c.TextArea, {
                            value: P,
                            maxLength: p.iF,
                            onChange: q,
                          }),
                          !D && (0, s.jsx)(Z, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (Y || !R) &&
                (0, s.jsx)(c.ModalFooter, {
                  className: S.footer,
                  direction: m.Z.Direction.HORIZONTAL,
                  children: Y
                    ? (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              z(null), q("");
                            },
                            children: _.intl.string(_.t["13/7kZ"]),
                          }),
                          (0, s.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: E,
                            children: _.intl.string(_.t.geKm7u),
                          }),
                        ],
                      })
                    : (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.INVERTED,
                            size: 18,
                            value: I,
                            onChange: () => M(!I),
                            children: (0, s.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              children: _.intl.string(_.t["5E9SBw"]),
                            }),
                          }),
                          null != H &&
                            H !== p.aZ.GOOD &&
                            (0, s.jsx)(c.Button, {
                              type: "submit",
                              size: c.Button.Sizes.SMALL,
                              onClick: E,
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
      var s = n(200651);
      n(192379);
      var a = n(120356),
        o = n.n(a),
        i = n(481060),
        l = n(259580),
        r = n(547803);
      function c(e) {
        let {
          options: t,
          onClick: n,
          className: a,
          optionClassName: c,
          hideCaret: d,
        } = e;
        return (0, s.jsx)("div", {
          className: o()(r.root, a),
          children: t.map((e, t) =>
            (0, s.jsxs)(
              i.Clickable,
              {
                onClick: () => n(e),
                className: o()(r.option, c),
                children: [
                  (0, s.jsx)(i.Text, {
                    className: r.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == d ? void 0 : d(e)) &&
                    (0, s.jsx)(l.Z, {
                      className: r.caret,
                      direction: l.Z.Directions.RIGHT,
                    }),
                ],
              },
              t,
            ),
          ),
        });
      }
    },
    580584: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var s = n(200651);
      n(192379);
      var a = n(332664),
        o = n(814249),
        i = n(531578),
        l = n(388032),
        r = n(181213);
      let c = [
        {
          className: r.emojiThumbsUp,
          rating: i.aZ.GOOD,
          classNameSelected: r.selected,
        },
        {
          className: r.emojiThumbsDown,
          rating: i.aZ.BAD,
          classNameSelected: r.selected,
        },
      ];
      function d(e) {
        let { transitionState: t, startRating: n, onClose: i, onSubmit: d } = e;
        return (0, s.jsx)(a.Z, {
          modalType: "summary",
          header: l.intl.string(l.t.hghcMj),
          body: l.intl.string(l.t["QFU78/"]),
          problemTitle: l.intl.string(l.t.CtiHPj),
          onSubmit: d,
          onClose: i,
          ratingConfigs: c,
          transitionState: t,
          problems: (0, o.iq)(),
          ratingsSelectorClassName: r.ratingsSelector,
          feedbackProblems: [o.R7.OTHER],
          otherKey: o.R7.OTHER,
          startRating: n,
          hideDontShowCheckbox: !0,
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
    181213: function (e, t, n) {
      e.exports = {
        ratingsSelector: "ratingsSelector_c18bf0",
        selected: "selected_c18bf0",
        emojiThumbsDown: "emojiThumbsDown_c18bf0 emoji_c18bf0",
        emojiThumbsUp: "emojiThumbsUp_c18bf0 emoji_c18bf0",
      };
    },
  },
]);
//# sourceMappingURL=3ddbae0a5aae4232aaca.js.map
