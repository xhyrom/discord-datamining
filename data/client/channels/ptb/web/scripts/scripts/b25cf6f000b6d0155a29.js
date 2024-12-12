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
          return Z;
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
        h = n(572539),
        f = n(626135),
        x = n(63063),
        j = n(957115),
        g = n(531578),
        p = n(981631),
        N = n(388032),
        _ = n(720816);
      let S = [
        {
          className: _.emojiSad,
          rating: g.aZ.BAD,
          classNameSelected: _.selected,
        },
        {
          className: _.emojiNeutral,
          rating: g.aZ.NEUTRAL,
          classNameSelected: _.selected,
        },
        {
          className: _.emojiHappy,
          rating: g.aZ.GOOD,
          classNameSelected: _.selected,
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
          className: i()(_.ratingsSelector, t),
          children: (null != a ? a : S).map((e) => {
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
      function k() {
        return (0, s.jsx)(c.Text, {
          className: _.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: N.intl.format(N.t.ybi2tL, {
            helpdeskURL: x.Z.getSubmitRequestURL(),
          }),
        });
      }
      function Z(e) {
        let {
            modalType: t,
            header: n,
            body: o,
            problemTitle: l,
            problems: x,
            transitionState: S,
            ratingConfigs: Z,
            feedbackProblems: v = [],
            otherKey: T,
            ratingsSelectorClassName: B,
            hideDontShowCheckbox: L,
            startRating: R = null,
            hideHelpDeskLink: y = !1,
            onSubmit: D,
            onClose: O,
          } = e,
          E = (0, d.Z)(x),
          [A, I] = a.useState(!1),
          [M, H] = a.useState(R),
          [w, F] = a.useState(null),
          [z, U] = a.useState(r().shuffle(x)),
          [G, P] = a.useState(""),
          q = (0, m.Dt)(),
          K = (0, b.Z)(M),
          W = (0, b.Z)(A),
          J = (0, b.Z)(w),
          Q = (0, b.Z)(D),
          V = (0, b.Z)(G),
          X = null != w && v.includes(w);
        return (
          a.useEffect(() => {
            !r().isEqual(E, x) && U((0, j.B)(x, T));
          }, [x, E, T]),
          a.useEffect(
            () => (
              f.default.track(p.rMx.OPEN_MODAL, {
                type: t,
                source: "Feedback Modal",
              }),
              () => {
                Q.current({
                  rating: K.current,
                  problem: J.current,
                  dontShowAgain: W.current,
                  feedback: V.current,
                });
              }
            ),
            [],
          ),
          (0, s.jsxs)(c.ModalRoot, {
            transitionState: S,
            className: _.__invalid_modalRoot,
            "aria-labelledby": q,
            children: [
              (0, s.jsxs)(c.ModalHeader, {
                separator: !1,
                className: _.headerContainer,
                children: [
                  (0, s.jsx)(c.Heading, {
                    id: q,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: n,
                  }),
                  (0, s.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: _.ratingBody,
                    children: o,
                  }),
                  X
                    ? null
                    : (0, s.jsx)(C, {
                        className: i()(_.emojis, B),
                        selectedRating: M,
                        onChangeRating: function (e) {
                          H(e), e === g.aZ.GOOD && O();
                        },
                        ratingConfigs: Z,
                      }),
                ],
              }),
              (0, s.jsxs)(c.ModalContent, {
                className: _.__invalid_content,
                children: [
                  null == M || M === g.aZ.GOOD || X
                    ? null
                    : (0, s.jsx)(c.FormItem, {
                        title: l,
                        className: _.problemInfo,
                        children: (0, s.jsx)(h.Z, {
                          options: z,
                          onClick: function (e) {
                            let { value: t } = e;
                            F(t), !v.includes(t) && O();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !v.includes(t);
                          },
                        }),
                      }),
                  X
                    ? (0, s.jsxs)(c.FormItem, {
                        title: N.intl.string(N.t.h95hcn),
                        className: _.problemInfo,
                        children: [
                          (0, s.jsx)(c.TextArea, {
                            value: G,
                            maxLength: g.iF,
                            onChange: P,
                          }),
                          !y && (0, s.jsx)(k, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (X || !L) &&
                (0, s.jsx)(c.ModalFooter, {
                  className: _.footer,
                  direction: u.Z.Direction.HORIZONTAL,
                  children: X
                    ? (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              F(null), P("");
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
                            value: A,
                            onChange: () => I(!A),
                            children: (0, s.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              children: N.intl.string(N.t["5E9SBw"]),
                            }),
                          }),
                          null != M &&
                            M !== g.aZ.GOOD &&
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
        r = n(995181);
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
        r = n(426598);
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
    426598: function (e, t, n) {
      e.exports = {
        ratingsSelector: "ratingsSelector_c18bf0",
        selected: "selected_c18bf0",
        emojiThumbsDown: "emojiThumbsDown_c18bf0 emoji_c18bf0",
        emojiThumbsUp: "emojiThumbsUp_c18bf0 emoji_c18bf0",
      };
    },
  },
]);
//# sourceMappingURL=b25cf6f000b6d0155a29.js.map
