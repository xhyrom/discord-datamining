"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["11495"],
  {
    936445: function (e) {
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
          return l;
        },
      }),
        n(653041);
      var a = n(392711),
        s = n.n(a);
      let l = (e, t) => {
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
          return B;
        },
        Z: function () {
          return x;
        },
      }),
        n(47120);
      var a = n(735250),
        s = n(470079),
        l = n(120356),
        o = n.n(l),
        r = n(392711),
        i = n.n(r),
        c = n(481060),
        u = n(110924),
        d = n(600164),
        _ = n(313201),
        E = n(237617),
        C = n(572539),
        b = n(63063),
        N = n(957115),
        O = n(531578),
        D = n(689938),
        m = n(940256);
      let A = [
        {
          className: m.emojiSad,
          rating: O.aZ.BAD,
          classNameSelected: m.selected,
        },
        {
          className: m.emojiNeutral,
          rating: O.aZ.NEUTRAL,
          classNameSelected: m.selected,
        },
        {
          className: m.emojiHappy,
          rating: O.aZ.GOOD,
          classNameSelected: m.selected,
        },
      ];
      function B(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: s,
          onChangeRating: l,
        } = e;
        return (0, a.jsx)(d.Z, {
          justify: d.Z.Justify.BETWEEN,
          align: d.Z.Align.CENTER,
          className: o()(m.ratingsSelector, t),
          children: (null != s ? s : A).map((e) => {
            let { rating: t, className: s, classNameSelected: r } = e;
            return (0, a.jsx)(
              c.Clickable,
              {
                onClick: () => l(t),
                "aria-label": t,
                children: (0, a.jsx)("div", {
                  className: o()(s, n === t ? r : null),
                }),
              },
              t,
            );
          }),
        });
      }
      function f() {
        return (0, a.jsx)(c.Text, {
          className: m.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: D.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: b.Z.getSubmitRequestURL(),
          }),
        });
      }
      function x(e) {
        let {
            header: t,
            body: n,
            problemTitle: l,
            problems: r,
            transitionState: b,
            ratingConfigs: A,
            feedbackProblems: x = [],
            otherKey: I,
            ratingsSelectorClassName: R,
            hideDontShowCheckbox: T,
            startRating: h = null,
            onSubmit: g,
            onClose: j,
          } = e,
          p = (0, u.Z)(r),
          [K, Z] = s.useState(!1),
          [L, U] = s.useState(h),
          [G, S] = s.useState(null),
          [k, v] = s.useState(i().shuffle(r)),
          [M, F] = s.useState(""),
          y = (0, _.Dt)(),
          H = (0, E.Z)(L),
          V = (0, E.Z)(K),
          P = (0, E.Z)(G),
          Y = (0, E.Z)(g),
          z = (0, E.Z)(M),
          w = null != G && x.includes(G);
        return (
          s.useEffect(() => {
            !i().isEqual(p, r) && v((0, N.B)(r, I));
          }, [r, p, I]),
          s.useEffect(
            () => () => {
              Y.current({
                rating: H.current,
                problem: P.current,
                dontShowAgain: V.current,
                feedback: z.current,
              });
            },
            [],
          ),
          (0, a.jsxs)(c.ModalRoot, {
            transitionState: b,
            className: m.__invalid_modalRoot,
            "aria-labelledby": y,
            children: [
              (0, a.jsxs)(c.ModalHeader, {
                separator: !1,
                className: m.headerContainer,
                children: [
                  (0, a.jsx)(c.Heading, {
                    id: y,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: t,
                  }),
                  (0, a.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: m.ratingBody,
                    children: n,
                  }),
                  w
                    ? null
                    : (0, a.jsx)(B, {
                        className: o()(m.emojis, R),
                        selectedRating: L,
                        onChangeRating: function (e) {
                          U(e), e === O.aZ.GOOD && j();
                        },
                        ratingConfigs: A,
                      }),
                ],
              }),
              (0, a.jsxs)(c.ModalContent, {
                className: m.__invalid_content,
                children: [
                  null == L || L === O.aZ.GOOD || w
                    ? null
                    : (0, a.jsx)(c.FormItem, {
                        title: l,
                        className: m.problemInfo,
                        children: (0, a.jsx)(C.Z, {
                          options: k,
                          onClick: function (e) {
                            let { value: t } = e;
                            S(t), !x.includes(t) && j();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !x.includes(t);
                          },
                        }),
                      }),
                  w
                    ? (0, a.jsxs)(c.FormItem, {
                        title: D.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: m.problemInfo,
                        children: [
                          (0, a.jsx)(c.TextArea, {
                            value: M,
                            maxLength: O.iF,
                            onChange: F,
                          }),
                          (0, a.jsx)(f, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (w || !T) &&
                (0, a.jsx)(c.ModalFooter, {
                  className: m.footer,
                  direction: d.Z.Direction.HORIZONTAL,
                  children: w
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              S(null), F("");
                            },
                            children: D.Z.Messages.BACK,
                          }),
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: j,
                            children: D.Z.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, a.jsx)(c.Checkbox, {
                        type: c.Checkbox.Types.INVERTED,
                        size: 18,
                        value: K,
                        onChange: () => Z(!K),
                        children: (0, a.jsx)(c.Text, {
                          variant: "text-sm/normal",
                          children: D.Z.Messages.DONT_SHOW_AGAIN,
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
      var a = n(735250);
      n(470079);
      var s = n(120356),
        l = n.n(s),
        o = n(481060),
        r = n(259580),
        i = n(373521);
      function c(e) {
        let {
          options: t,
          onClick: n,
          className: s,
          optionClassName: c,
          hideCaret: u,
        } = e;
        return (0, a.jsx)("div", {
          className: l()(i.root, s),
          children: t.map((e, t) =>
            (0, a.jsxs)(
              o.Clickable,
              {
                onClick: () => n(e),
                className: l()(i.option, c),
                children: [
                  (0, a.jsx)(o.Text, {
                    className: i.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == u ? void 0 : u(e)) &&
                    (0, a.jsx)(r.Z, {
                      className: i.caret,
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
            return s;
          },
          default: function () {
            return b;
          },
        });
      var a,
        s,
        l = n(735250),
        o = n(470079),
        r = n(481060),
        i = n(332664),
        c = n(142497),
        u = n(626135),
        d = n(981631),
        _ = n(190378),
        E = n(689938);
      ((a = s || (s = {})).BAD_OUTLINE = "BAD_OUTLINE"),
        (a.BACKGROUND_DETECTION_ACCURACY = "BACKGROUND_DETECTION_ACCURACY"),
        (a.FLICKERING = "FLICKERING"),
        (a.BACKGROUND_DETECTION_LAG = "BACKGROUND_DETECTION_LAG"),
        (a.OTHER = "OTHER");
      let C = ["OTHER"];
      function b(e) {
        let { analyticsData: t, transitionState: a, onClose: s } = e;
        return (
          o.useEffect(() => {
            u.default.track(d.rMx.OPEN_MODAL, {
              type: "Video Background Feedback",
            });
          }, []),
          (0, l.jsx)(i.Z, {
            header: E.Z.Messages.VIDEO_BACKGROUND_FEEDBACK_HEADER,
            body: E.Z.Messages.VIDEO_BACKGROUND_FEEDBACK_BODY,
            problemTitle: E.Z.Messages.VIDEO_BACKGROUND_FEEDBACK_PROBLEM_TITLE,
            problems: [
              {
                value: "BAD_OUTLINE",
                label:
                  E.Z.Messages.VIDEO_BACKGROUND_FEEDBACK_OPTION_BAD_OUTLINE,
              },
              {
                value: "BACKGROUND_DETECTION_ACCURACY",
                label:
                  E.Z.Messages
                    .VIDEO_BACKGROUND_FEEDBACK_OPTION_BACKGROUND_DETECTION_ACCURACY,
              },
              {
                value: "FLICKERING",
                label: E.Z.Messages.VIDEO_BACKGROUND_FEEDBACK_OPTION_FLICKERING,
              },
              {
                value: "BACKGROUND_DETECTION_LAG",
                label:
                  E.Z.Messages
                    .VIDEO_BACKGROUND_FEEDBACK_OPTION_BACKGROUND_DETECTION_LAG,
              },
              {
                value: "OTHER",
                label: E.Z.Messages.CALL_FEEDBACK_OPTION_OTHER,
              },
            ],
            feedbackProblems: C,
            onSubmit: function (e) {
              var a, s, o, i;
              let { rating: C, problem: b, dontShowAgain: N, feedback: O } = e;
              if ((N && (0, c.Kw)(_.v.VIDEO_BACKGROUND_FEEDBACK), null != C))
                (a = C),
                  (s = b),
                  (o = O),
                  (i = t),
                  u.default.track(d.rMx.VIDEO_BACKGROUND_FEEDBACK, {
                    ...i,
                    reason: s,
                    rating: a,
                    feedback: o,
                  }),
                  null != b &&
                    (0, r.openModalLazy)(async () => {
                      let { default: e } = await n
                        .e("14466")
                        .then(n.bind(n, 729328));
                      return (t) =>
                        (0, l.jsx)(e, {
                          body: E.Z.Messages
                            .VIDEO_BACKGROUND_ISSUE_REPORTED_BODY,
                          ...t,
                        });
                    });
            },
            onClose: s,
            transitionState: a,
            otherKey: "OTHER",
          })
        );
      }
    },
    940256: function (e, t, n) {
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
    373521: function (e, t, n) {
      e.exports = {
        root: "root_c3b890",
        option: "option_c3b890",
        text: "text_c3b890",
        caret: "caret_c3b890",
      };
    },
  },
]);
//# sourceMappingURL=cf9e0900732a3ed1e0f2.js.map
