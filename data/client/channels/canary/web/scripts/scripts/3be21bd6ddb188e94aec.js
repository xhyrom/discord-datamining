"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87995"],
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
          return A;
        },
        Z: function () {
          return k;
        },
      }),
        n(47120);
      var a = n(735250),
        s = n(470079),
        o = n(120356),
        l = n.n(o),
        r = n(392711),
        i = n.n(r),
        c = n(481060),
        u = n(110924),
        d = n(600164),
        b = n(313201),
        m = n(237617),
        f = n(572539),
        _ = n(626135),
        h = n(63063),
        E = n(957115),
        p = n(871364),
        x = n(531578),
        g = n(981631),
        N = n(689938),
        C = n(214859);
      let j = [
        {
          className: C.emojiSad,
          rating: x.aZ.BAD,
          classNameSelected: C.selected,
        },
        {
          className: C.emojiNeutral,
          rating: x.aZ.NEUTRAL,
          classNameSelected: C.selected,
        },
        {
          className: C.emojiHappy,
          rating: x.aZ.GOOD,
          classNameSelected: C.selected,
        },
      ];
      function A(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: s,
          onChangeRating: o,
        } = e;
        return (0, a.jsx)(d.Z, {
          justify: d.Z.Justify.BETWEEN,
          align: d.Z.Align.CENTER,
          className: l()(C.ratingsSelector, t),
          children: (null != s ? s : j).map((e) => {
            let { rating: t, className: s, classNameSelected: r } = e;
            return (0, a.jsx)(
              c.Clickable,
              {
                onClick: () => o(t),
                "aria-label": t,
                children: (0, a.jsx)("div", {
                  className: l()(s, n === t ? r : null),
                }),
              },
              t,
            );
          }),
        });
      }
      function M() {
        return (0, a.jsx)(c.Text, {
          className: C.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: N.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: h.Z.getSubmitRequestURL(),
          }),
        });
      }
      function k(e) {
        let {
            modalType: t,
            header: n,
            body: o,
            problemTitle: r,
            problems: h,
            transitionState: j,
            ratingConfigs: k,
            feedbackProblems: S = [],
            otherKey: T,
            ratingsSelectorClassName: Z,
            hideDontShowCheckbox: O,
            startRating: B = null,
            onSubmit: v,
            onClose: R,
          } = e,
          I = (0, u.Z)(h),
          [y, F] = s.useState(!1),
          [L, D] = s.useState(B),
          [H, K] = s.useState(null),
          [U, P] = s.useState(i().shuffle(h)),
          [z, G] = s.useState(""),
          Y = (0, b.Dt)(),
          w = (0, m.Z)(L),
          q = (0, m.Z)(y),
          W = (0, m.Z)(H),
          J = (0, m.Z)(v),
          V = (0, m.Z)(z),
          Q = null != H && S.includes(H),
          { renderSkipButton: X } = p.w.useExperiment({
            location: "FeedbackModal",
          });
        return (
          s.useEffect(() => {
            !i().isEqual(I, h) && P((0, E.B)(h, T));
          }, [h, I, T]),
          s.useEffect(
            () => (
              _.default.track(g.rMx.OPEN_MODAL, {
                type: t,
                source: "Feedback Modal",
              }),
              () => {
                J.current({
                  rating: w.current,
                  problem: W.current,
                  dontShowAgain: q.current,
                  feedback: V.current,
                });
              }
            ),
            [],
          ),
          (0, a.jsxs)(c.ModalRoot, {
            transitionState: j,
            className: C.__invalid_modalRoot,
            "aria-labelledby": Y,
            children: [
              (0, a.jsxs)(c.ModalHeader, {
                separator: !1,
                className: C.headerContainer,
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
                    className: C.ratingBody,
                    children: o,
                  }),
                  Q
                    ? null
                    : (0, a.jsx)(A, {
                        className: l()(C.emojis, Z),
                        selectedRating: L,
                        onChangeRating: function (e) {
                          D(e), e === x.aZ.GOOD && R();
                        },
                        ratingConfigs: k,
                      }),
                ],
              }),
              (0, a.jsxs)(c.ModalContent, {
                className: C.__invalid_content,
                children: [
                  null == L || L === x.aZ.GOOD || Q
                    ? null
                    : (0, a.jsx)(c.FormItem, {
                        title: r,
                        className: C.problemInfo,
                        children: (0, a.jsx)(f.Z, {
                          options: U,
                          onClick: function (e) {
                            let { value: t } = e;
                            K(t), !S.includes(t) && R();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !S.includes(t);
                          },
                        }),
                      }),
                  Q
                    ? (0, a.jsxs)(c.FormItem, {
                        title: N.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: C.problemInfo,
                        children: [
                          (0, a.jsx)(c.TextArea, {
                            value: z,
                            maxLength: x.iF,
                            onChange: G,
                          }),
                          (0, a.jsx)(M, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (Q || !O) &&
                (0, a.jsx)(c.ModalFooter, {
                  className: C.footer,
                  direction: d.Z.Direction.HORIZONTAL,
                  children: Q
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              K(null), G("");
                            },
                            children: N.Z.Messages.BACK,
                          }),
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: R,
                            children: N.Z.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.INVERTED,
                            size: 18,
                            value: y,
                            onChange: () => F(!y),
                            children: (0, a.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              children: N.Z.Messages.DONT_SHOW_AGAIN,
                            }),
                          }),
                          X &&
                            null != L &&
                            L !== x.aZ.GOOD &&
                            (0, a.jsx)(c.Button, {
                              type: "submit",
                              size: c.Button.Sizes.SMALL,
                              onClick: R,
                              children: N.Z.Messages.SKIP,
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
          return a;
        },
      });
      let a = (0, n(818083).B)({
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
      var a = n(735250);
      n(470079);
      var s = n(120356),
        o = n.n(s),
        l = n(481060),
        r = n(259580),
        i = n(20535);
      function c(e) {
        let {
          options: t,
          onClick: n,
          className: s,
          optionClassName: c,
          hideCaret: u,
        } = e;
        return (0, a.jsx)("div", {
          className: o()(i.root, s),
          children: t.map((e, t) =>
            (0, a.jsxs)(
              l.Clickable,
              {
                onClick: () => n(e),
                className: o()(i.option, c),
                children: [
                  (0, a.jsx)(l.Text, {
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
    987562: function (e, t, n) {
      n.d(t, {
        CE: function () {
          return c;
        },
        F5: function () {
          return l;
        },
        TL: function () {
          return i;
        },
        YA: function () {
          return o;
        },
      });
      var a,
        s,
        o,
        l,
        r = n(689938);
      function i() {
        return [
          {
            value: "too_many_notifications",
            label: r.Z.Messages.MUTE_FEEDBACK_TOO_MANY_NOTIFICATIONS,
          },
          {
            value: "temporary_break",
            label: r.Z.Messages.MUTE_FEEDBACK_TEMPORARY_BREAK,
          },
          { value: "annoying", label: r.Z.Messages.MUTE_FEEDBACK_ANNOYING },
          { value: "unsafe", label: r.Z.Messages.MUTE_FEEDBACK_UNSAFE },
          { value: "spam", label: r.Z.Messages.MUTE_FEEDBACK_SPAM },
          { value: "other", label: r.Z.Messages.MUTE_FEEDBACK_OTHER },
        ];
      }
      function c() {
        return [
          { value: "placeholder", label: "Placeholder" },
          { value: "other", label: r.Z.Messages.MUTE_FEEDBACK_OTHER },
        ];
      }
      ((a = o || (o = {})).TOO_MANY_NOTIFICATIONS = "too_many_notifications"),
        (a.TEMPORARY_BREAK = "temporary_break"),
        (a.ANNOYING = "annoying"),
        (a.UNSAFE = "unsafe"),
        (a.SPAM = "spam"),
        (a.OTHER = "other"),
        ((s = l || (l = {})).PLACEHOLDER = "placeholder"),
        (s.OTHER = "other");
    },
    180970: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var a = n(735250),
        s = n(470079),
        o = n(77866),
        l = n(481060),
        r = n(332664),
        i = n(987562),
        c = n(689938);
      function u(e) {
        let { onClose: t, transitionState: u } = e,
          d = (0, o.Z)(i.CE),
          b = s.useCallback((e) => {
            let { rating: t, problem: s } = e;
            if (null != t)
              null != s &&
                (0, l.openModalLazy)(async () => {
                  let { default: e } = await n
                    .e("14466")
                    .then(n.bind(n, 729328));
                  return (t) =>
                    (0, a.jsx)(e, {
                      body: c.Z.Messages.CALL_FEEDBACK_CONFIRMATION,
                      ...t,
                    });
                });
          }, []);
        return (0, a.jsx)(r.Z, {
          modalType: "block_user",
          header: "header goes here",
          body: "body goes here",
          problemTitle: "section header goes here",
          problems: d,
          feedbackProblems: [i.F5.OTHER],
          onSubmit: b,
          onClose: t,
          transitionState: u,
          otherKey: i.F5.OTHER,
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
  },
]);
//# sourceMappingURL=3be21bd6ddb188e94aec.js.map
