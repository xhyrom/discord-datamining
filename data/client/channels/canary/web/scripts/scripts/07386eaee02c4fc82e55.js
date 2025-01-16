"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["11495"],
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
    957115: function (e, t, n) {
      n.d(t, {
        B: function () {
          return i;
        },
      }),
        n(653041);
      var l = n(392711),
        a = n.n(l);
      let i = (e, t) => {
        let n = a().shuffle(e),
          l = n.findIndex((e) => e.value === t);
        if (l > -1) {
          let e = n[l];
          n.splice(l, 1), n.push(e);
        }
        return n;
      };
    },
    332664: function (e, t, n) {
      n.d(t, {
        L: function () {
          return T;
        },
        Z: function () {
          return A;
        },
      }),
        n(47120);
      var l = n(200651),
        a = n(192379),
        i = n(120356),
        o = n.n(i),
        r = n(392711),
        s = n.n(r),
        c = n(481060),
        u = n(493773),
        d = n(110924),
        b = n(600164),
        m = n(313201),
        x = n(237617),
        f = n(572539),
        C = n(626135),
        N = n(63063),
        h = n(957115),
        _ = n(531578),
        g = n(981631),
        p = n(388032),
        j = n(369769);
      let E = [
        {
          className: j.emojiSad,
          rating: _.aZ.BAD,
          classNameSelected: j.selected,
        },
        {
          className: j.emojiNeutral,
          rating: _.aZ.NEUTRAL,
          classNameSelected: j.selected,
        },
        {
          className: j.emojiHappy,
          rating: _.aZ.GOOD,
          classNameSelected: j.selected,
        },
      ];
      function T(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: a,
          onChangeRating: i,
        } = e;
        return (0, l.jsx)(b.Z, {
          justify: b.Z.Justify.BETWEEN,
          align: b.Z.Align.CENTER,
          className: o()(j.ratingsSelector, t),
          children: (null != a ? a : E).map((e) => {
            let { rating: t, className: a, classNameSelected: r } = e;
            return (0, l.jsx)(
              c.Clickable,
              {
                onClick: () => i(t),
                "aria-label": t,
                children: (0, l.jsx)("div", {
                  className: o()(a, n === t ? r : null),
                }),
              },
              t,
            );
          }),
        });
      }
      function O() {
        return (0, l.jsx)(c.Text, {
          className: j.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: p.intl.format(p.t.ybi2tL, {
            helpdeskURL: N.Z.getSubmitRequestURL(),
          }),
        });
      }
      function A(e) {
        let {
            modalType: t,
            header: n,
            body: i,
            problemTitle: r,
            problems: N,
            transitionState: E,
            ratingConfigs: A,
            feedbackProblems: R = [],
            otherKey: k,
            ratingsSelectorClassName: B,
            hideDontShowCheckbox: D,
            startRating: v = null,
            hideHelpDeskLink: I = !1,
            onSubmit: L,
            onClose: Z,
          } = e,
          S = (0, d.Z)(N),
          [y, U] = a.useState(!1),
          [G, K] = a.useState(v),
          [F, M] = a.useState(null),
          [H, w] = a.useState(s().shuffle(N)),
          [z, P] = a.useState(""),
          V = (0, m.Dt)(),
          Y = (0, x.Z)(G),
          q = (0, x.Z)(y),
          W = (0, x.Z)(F),
          X = (0, x.Z)(L),
          J = (0, x.Z)(z),
          Q = null != F && R.includes(F);
        return (
          a.useEffect(() => {
            !s().isEqual(S, N) && w((0, h.B)(N, k));
          }, [N, S, k]),
          (0, u.Z)(
            () => (
              C.default.track(g.rMx.OPEN_MODAL, {
                type: t,
                source: "Feedback Modal",
              }),
              () => {
                X.current({
                  rating: Y.current,
                  problem: W.current,
                  dontShowAgain: q.current,
                  feedback: J.current,
                });
              }
            ),
          ),
          (0, l.jsxs)(c.ModalRoot, {
            transitionState: E,
            className: j.__invalid_modalRoot,
            "aria-labelledby": V,
            children: [
              (0, l.jsxs)(c.ModalHeader, {
                separator: !1,
                className: j.headerContainer,
                children: [
                  (0, l.jsx)(c.Heading, {
                    id: V,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: n,
                  }),
                  (0, l.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: j.ratingBody,
                    children: i,
                  }),
                  Q
                    ? null
                    : (0, l.jsx)(T, {
                        className: o()(j.emojis, B),
                        selectedRating: G,
                        onChangeRating: function (e) {
                          K(e), e === _.aZ.GOOD && Z();
                        },
                        ratingConfigs: A,
                      }),
                ],
              }),
              (0, l.jsxs)(c.ModalContent, {
                className: j.__invalid_content,
                children: [
                  null == G || G === _.aZ.GOOD || Q
                    ? null
                    : (0, l.jsx)(c.FormItem, {
                        title: r,
                        className: j.problemInfo,
                        children: (0, l.jsx)(f.Z, {
                          options: H,
                          onClick: function (e) {
                            let { value: t } = e;
                            M(t), !R.includes(t) && Z();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !R.includes(t);
                          },
                        }),
                      }),
                  Q
                    ? (0, l.jsxs)(c.FormItem, {
                        title: p.intl.string(p.t.h95hcn),
                        className: j.problemInfo,
                        children: [
                          (0, l.jsx)(c.TextArea, {
                            value: z,
                            maxLength: _.iF,
                            onChange: P,
                          }),
                          !I && (0, l.jsx)(O, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (Q || !D) &&
                (0, l.jsx)(c.ModalFooter, {
                  className: j.footer,
                  direction: b.Z.Direction.HORIZONTAL,
                  children: Q
                    ? (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              M(null), P("");
                            },
                            children: p.intl.string(p.t["13/7kZ"]),
                          }),
                          (0, l.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: Z,
                            children: p.intl.string(p.t.geKm7u),
                          }),
                        ],
                      })
                    : (0, l.jsx)(c.Checkbox, {
                        type: c.Checkbox.Types.INVERTED,
                        size: 18,
                        value: y,
                        onChange: () => U(!y),
                        children: (0, l.jsx)(c.Text, {
                          variant: "text-sm/normal",
                          children: p.intl.string(p.t["5E9SBw"]),
                        }),
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
      var l = n(200651);
      n(192379);
      var a = n(120356),
        i = n.n(a),
        o = n(481060),
        r = n(259580),
        s = n(547803);
      function c(e) {
        let {
          options: t,
          onClick: n,
          className: a,
          optionClassName: c,
          hideCaret: u,
        } = e;
        return (0, l.jsx)("div", {
          className: i()(s.root, a),
          children: t.map((e, t) =>
            (0, l.jsxs)(
              o.Clickable,
              {
                onClick: () => n(e),
                className: i()(s.option, c),
                children: [
                  (0, l.jsx)(o.Text, {
                    className: s.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == u ? void 0 : u(e)) &&
                    (0, l.jsx)(r.Z, {
                      className: s.caret,
                      direction: r.Z.Directions.RIGHT,
                    }),
                ],
              },
              t,
            ),
          ),
        });
      }
    },
    801320: function (e, t, n) {
      n.r(t),
        n.d(t, {
          VideoBackgroundIssue: function () {
            return a;
          },
          default: function () {
            return f;
          },
        });
      var l,
        a,
        i = n(200651),
        o = n(192379),
        r = n(481060),
        s = n(332664),
        c = n(142497),
        u = n(626135),
        d = n(981631),
        b = n(190378),
        m = n(388032);
      ((l = a || (a = {})).BAD_OUTLINE = "BAD_OUTLINE"),
        (l.BACKGROUND_DETECTION_ACCURACY = "BACKGROUND_DETECTION_ACCURACY"),
        (l.FLICKERING = "FLICKERING"),
        (l.BACKGROUND_DETECTION_LAG = "BACKGROUND_DETECTION_LAG"),
        (l.OTHER = "OTHER");
      let x = ["OTHER"];
      function f(e) {
        let { analyticsData: t, transitionState: l, onClose: a } = e;
        return (
          o.useEffect(() => {
            u.default.track(d.rMx.OPEN_MODAL, {
              type: "Video Background Feedback",
            });
          }, []),
          (0, i.jsx)(s.Z, {
            modalType: "video_background",
            header: m.intl.string(m.t.Wl8qXl),
            body: m.intl.string(m.t.vPw6j4),
            problemTitle: m.intl.string(m.t["UNFF8/"]),
            problems: [
              { value: "BAD_OUTLINE", label: m.intl.string(m.t.pyhS3t) },
              {
                value: "BACKGROUND_DETECTION_ACCURACY",
                label: m.intl.string(m.t.cymRTU),
              },
              { value: "FLICKERING", label: m.intl.string(m.t.xZ60CA) },
              {
                value: "BACKGROUND_DETECTION_LAG",
                label: m.intl.string(m.t.DweTcX),
              },
              { value: "OTHER", label: m.intl.string(m.t["emlT9/"]) },
            ],
            feedbackProblems: x,
            onSubmit: function (e) {
              var l, a, o, s;
              let { rating: x, problem: f, dontShowAgain: C, feedback: N } = e;
              if ((C && (0, c.Kw)(b.v.VIDEO_BACKGROUND_FEEDBACK), null != x))
                (l = x),
                  (a = f),
                  (o = N),
                  (s = t),
                  u.default.track(d.rMx.VIDEO_BACKGROUND_FEEDBACK, {
                    ...s,
                    reason: a,
                    rating: l,
                    feedback: o,
                  }),
                  null != f &&
                    (0, r.openModalLazy)(async () => {
                      let { default: e } = await n
                        .e("14466")
                        .then(n.bind(n, 729328));
                      return (t) =>
                        (0, i.jsx)(e, {
                          body: m.intl.string(m.t.aHB11d),
                          ...t,
                        });
                    });
            },
            onClose: a,
            transitionState: l,
            otherKey: "OTHER",
          })
        );
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
  },
]);
//# sourceMappingURL=07386eaee02c4fc82e55.js.map
