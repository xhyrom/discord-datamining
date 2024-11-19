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
          return C;
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
        d = n(110924),
        u = n(600164),
        m = n(313201),
        b = n(237617),
        f = n(572539),
        h = n(626135),
        x = n(63063),
        p = n(957115),
        j = n(871364),
        g = n(531578),
        k = n(981631),
        N = n(388032),
        S = n(214859);
      let _ = [
        {
          className: S.emojiSad,
          rating: g.aZ.BAD,
          classNameSelected: S.selected,
        },
        {
          className: S.emojiNeutral,
          rating: g.aZ.NEUTRAL,
          classNameSelected: S.selected,
        },
        {
          className: S.emojiHappy,
          rating: g.aZ.GOOD,
          classNameSelected: S.selected,
        },
      ];
      function C(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: a,
          onChangeRating: o,
        } = e;
        return (0, s.jsx)(u.Z, {
          justify: u.Z.Justify.BETWEEN,
          align: u.Z.Align.CENTER,
          className: i()(S.ratingsSelector, t),
          children: (null != a ? a : _).map((e) => {
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
          children: N.intl.format(N.t.ybi2tL, {
            helpdeskURL: x.Z.getSubmitRequestURL(),
          }),
        });
      }
      function v(e) {
        let {
            modalType: t,
            header: n,
            body: o,
            problemTitle: l,
            problems: x,
            transitionState: _,
            ratingConfigs: v,
            feedbackProblems: B = [],
            otherKey: T,
            ratingsSelectorClassName: L,
            hideDontShowCheckbox: R,
            startRating: y = null,
            hideHelpDeskLink: D = !1,
            onSubmit: E,
            onClose: O,
          } = e,
          A = (0, d.Z)(x),
          [M, I] = a.useState(!1),
          [w, H] = a.useState(y),
          [F, z] = a.useState(null),
          [U, G] = a.useState(r().shuffle(x)),
          [P, q] = a.useState(""),
          K = (0, m.Dt)(),
          W = (0, b.Z)(w),
          J = (0, b.Z)(M),
          Q = (0, b.Z)(F),
          V = (0, b.Z)(E),
          X = (0, b.Z)(P),
          Y = null != F && B.includes(F),
          { renderSkipButton: $ } = j.w.useExperiment({
            location: "FeedbackModal",
          });
        return (
          a.useEffect(() => {
            !r().isEqual(A, x) && G((0, p.B)(x, T));
          }, [x, A, T]),
          a.useEffect(
            () => (
              h.default.track(k.rMx.OPEN_MODAL, {
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
            [],
          ),
          (0, s.jsxs)(c.ModalRoot, {
            transitionState: _,
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
                    : (0, s.jsx)(C, {
                        className: i()(S.emojis, L),
                        selectedRating: w,
                        onChangeRating: function (e) {
                          H(e), e === g.aZ.GOOD && O();
                        },
                        ratingConfigs: v,
                      }),
                ],
              }),
              (0, s.jsxs)(c.ModalContent, {
                className: S.__invalid_content,
                children: [
                  null == w || w === g.aZ.GOOD || Y
                    ? null
                    : (0, s.jsx)(c.FormItem, {
                        title: l,
                        className: S.problemInfo,
                        children: (0, s.jsx)(f.Z, {
                          options: U,
                          onClick: function (e) {
                            let { value: t } = e;
                            z(t), !B.includes(t) && O();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !B.includes(t);
                          },
                        }),
                      }),
                  Y
                    ? (0, s.jsxs)(c.FormItem, {
                        title: N.intl.string(N.t.h95hcn),
                        className: S.problemInfo,
                        children: [
                          (0, s.jsx)(c.TextArea, {
                            value: P,
                            maxLength: g.iF,
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
                  direction: u.Z.Direction.HORIZONTAL,
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
                            children: N.intl.string(N.t["13/7kZ"]),
                          }),
                          (0, s.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: O,
                            children: N.intl.string(N.t.geKm7u),
                          }),
                        ],
                      })
                    : (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.INVERTED,
                            size: 18,
                            value: M,
                            onChange: () => I(!M),
                            children: (0, s.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              children: N.intl.string(N.t["5E9SBw"]),
                            }),
                          }),
                          $ &&
                            null != w &&
                            w !== g.aZ.GOOD &&
                            (0, s.jsx)(c.Button, {
                              type: "submit",
                              size: c.Button.Sizes.SMALL,
                              onClick: O,
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
    871364: function (e, t, n) {
      n.d(t, {
        w: function () {
          return s;
        },
      });
      let s = (0, n(818083).B)({
        kind: "user",
        id: "2024-09_feedbackskipbutton",
        label: "Add a skip button to the feedback modal",
        defaultConfig: { renderSkipButton: !1 },
        treatments: [
          {
            id: 1,
            label: "Show skip button",
            config: { renderSkipButton: !0 },
          },
        ],
      });
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
        r = n(20535);
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
        r = n(443241);
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
    214859: function (e, t, n) {
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
    20535: function (e, t, n) {
      e.exports = {
        root: "root_c3b890",
        option: "option_c3b890",
        text: "text_c3b890",
        caret: "caret_c3b890",
      };
    },
    443241: function (e, t, n) {
      e.exports = {
        ratingsSelector: "ratingsSelector_c18bf0",
        selected: "selected_c18bf0",
        emojiThumbsDown: "emojiThumbsDown_c18bf0 emoji_c18bf0",
        emojiThumbsUp: "emojiThumbsUp_c18bf0 emoji_c18bf0",
      };
    },
  },
]);
//# sourceMappingURL=5610a1120b17354ddd13.js.map
