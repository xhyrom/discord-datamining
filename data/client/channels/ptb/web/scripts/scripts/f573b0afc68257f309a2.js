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
          return k;
        },
        Z: function () {
          return A;
        },
      }),
        n(47120);
      var a = n(200651),
        s = n(192379),
        l = n(120356),
        o = n.n(l),
        r = n(392711),
        i = n.n(r),
        c = n(481060),
        u = n(110924),
        d = n(600164),
        _ = n(313201),
        E = n(237617),
        b = n(572539),
        f = n(626135),
        m = n(63063),
        C = n(957115),
        S = n(871364),
        N = n(531578),
        O = n(981631),
        h = n(689938),
        x = n(214859);
      let g = [
        {
          className: x.emojiSad,
          rating: N.aZ.BAD,
          classNameSelected: x.selected,
        },
        {
          className: x.emojiNeutral,
          rating: N.aZ.NEUTRAL,
          classNameSelected: x.selected,
        },
        {
          className: x.emojiHappy,
          rating: N.aZ.GOOD,
          classNameSelected: x.selected,
        },
      ];
      function k(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: s,
          onChangeRating: l,
        } = e;
        return (0, a.jsx)(d.Z, {
          justify: d.Z.Justify.BETWEEN,
          align: d.Z.Align.CENTER,
          className: o()(x.ratingsSelector, t),
          children: (null != s ? s : g).map((e) => {
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
      function p() {
        return (0, a.jsx)(c.Text, {
          className: x.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: h.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: m.Z.getSubmitRequestURL(),
          }),
        });
      }
      function A(e) {
        let {
            modalType: t,
            header: n,
            body: l,
            problemTitle: r,
            problems: m,
            transitionState: g,
            ratingConfigs: A,
            feedbackProblems: M = [],
            otherKey: B,
            ratingsSelectorClassName: T,
            hideDontShowCheckbox: Z,
            startRating: j = null,
            hideHelpDeskLink: D = !1,
            onSubmit: I,
            onClose: F,
          } = e,
          L = (0, u.Z)(m),
          [v, R] = s.useState(!1),
          [K, y] = s.useState(j),
          [U, H] = s.useState(null),
          [P, G] = s.useState(i().shuffle(m)),
          [w, Y] = s.useState(""),
          z = (0, _.Dt)(),
          W = (0, E.Z)(K),
          V = (0, E.Z)(v),
          q = (0, E.Z)(U),
          J = (0, E.Z)(I),
          Q = (0, E.Z)(w),
          X = null != U && M.includes(U),
          { renderSkipButton: $ } = S.w.useExperiment({
            location: "FeedbackModal",
          });
        return (
          s.useEffect(() => {
            !i().isEqual(L, m) && G((0, C.B)(m, B));
          }, [m, L, B]),
          s.useEffect(
            () => (
              f.default.track(O.rMx.OPEN_MODAL, {
                type: t,
                source: "Feedback Modal",
              }),
              () => {
                J.current({
                  rating: W.current,
                  problem: q.current,
                  dontShowAgain: V.current,
                  feedback: Q.current,
                });
              }
            ),
            [],
          ),
          (0, a.jsxs)(c.ModalRoot, {
            transitionState: g,
            className: x.__invalid_modalRoot,
            "aria-labelledby": z,
            children: [
              (0, a.jsxs)(c.ModalHeader, {
                separator: !1,
                className: x.headerContainer,
                children: [
                  (0, a.jsx)(c.Heading, {
                    id: z,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: n,
                  }),
                  (0, a.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: x.ratingBody,
                    children: l,
                  }),
                  X
                    ? null
                    : (0, a.jsx)(k, {
                        className: o()(x.emojis, T),
                        selectedRating: K,
                        onChangeRating: function (e) {
                          y(e), e === N.aZ.GOOD && F();
                        },
                        ratingConfigs: A,
                      }),
                ],
              }),
              (0, a.jsxs)(c.ModalContent, {
                className: x.__invalid_content,
                children: [
                  null == K || K === N.aZ.GOOD || X
                    ? null
                    : (0, a.jsx)(c.FormItem, {
                        title: r,
                        className: x.problemInfo,
                        children: (0, a.jsx)(b.Z, {
                          options: P,
                          onClick: function (e) {
                            let { value: t } = e;
                            H(t), !M.includes(t) && F();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !M.includes(t);
                          },
                        }),
                      }),
                  X
                    ? (0, a.jsxs)(c.FormItem, {
                        title: h.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: x.problemInfo,
                        children: [
                          (0, a.jsx)(c.TextArea, {
                            value: w,
                            maxLength: N.iF,
                            onChange: Y,
                          }),
                          !D && (0, a.jsx)(p, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (X || !Z) &&
                (0, a.jsx)(c.ModalFooter, {
                  className: x.footer,
                  direction: d.Z.Direction.HORIZONTAL,
                  children: X
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              H(null), Y("");
                            },
                            children: h.Z.Messages.BACK,
                          }),
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: F,
                            children: h.Z.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.INVERTED,
                            size: 18,
                            value: v,
                            onChange: () => R(!v),
                            children: (0, a.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              children: h.Z.Messages.DONT_SHOW_AGAIN,
                            }),
                          }),
                          $ &&
                            null != K &&
                            K !== N.aZ.GOOD &&
                            (0, a.jsx)(c.Button, {
                              type: "submit",
                              size: c.Button.Sizes.SMALL,
                              onClick: F,
                              children: h.Z.Messages.SKIP,
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
      var a = n(200651);
      n(192379);
      var s = n(120356),
        l = n.n(s),
        o = n(481060),
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
    869031: function (e, t, n) {
      n.d(t, {
        nZ: function () {
          return s;
        },
      });
      let a = (0, n(818083).B)({
        kind: "user",
        id: "2024-10_block_user_feedback",
        label: "Block User Feedback Experiment",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable Block User Feedback Survey",
            config: { enabled: !0 },
          },
        ],
      });
      function s(e) {
        let { enabled: t } = a.getCurrentConfig(
          { location: e },
          { autoTrackExposure: !0 },
        );
        return t;
      }
    },
    900735: function (e, t, n) {
      n.d(t, {
        S: function () {
          return u;
        },
        t: function () {
          return d;
        },
      });
      var a = n(699516),
        s = n(626135),
        l = n(70956),
        o = n(869031),
        r = n(981631);
      let i = 2 * l.Z.Millis.WEEK,
        c = 4 * l.Z.Millis.WEEK,
        u = () => {
          let e = a.Z.getSinces();
          return (
            !!Object.keys(e).some((t) => {
              let n = Date.now() - Date.parse(e[t]);
              return a.Z.isBlocked(t) && n > i && n < c;
            }) && (0, o.nZ)("block_user_feedback_utils")
          );
        },
        d = (e, t, n, a) => {
          s.default.track(r.rMx.BLOCK_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: a,
          });
        };
    },
    987562: function (e, t, n) {
      n.d(t, {
        CE: function () {
          return c;
        },
        F5: function () {
          return o;
        },
        TL: function () {
          return i;
        },
        YA: function () {
          return l;
        },
      });
      var a,
        s,
        l,
        o,
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
          {
            value: "confusion",
            label: r.Z.Messages.BLOCK_USER_FEEDBACK_OPTION_CONFUSION,
          },
          {
            value: "does_not_achieve_wants",
            label:
              r.Z.Messages.BLOCK_USER_FEEDBACK_OPTION_DOES_NOT_ACHIEVE_WANTS,
          },
          {
            value: "hard_to_access",
            label: r.Z.Messages.BLOCK_USER_FEEDBACK_OPTION_HARD_TO_ACCESS,
          },
          {
            value: "something_else",
            label: r.Z.Messages.BLOCK_USER_FEEDBACK_OPTION_SOMETHING_ELSE,
          },
        ];
      }
      ((a = l || (l = {})).TOO_MANY_NOTIFICATIONS = "too_many_notifications"),
        (a.TEMPORARY_BREAK = "temporary_break"),
        (a.ANNOYING = "annoying"),
        (a.UNSAFE = "unsafe"),
        (a.SPAM = "spam"),
        (a.OTHER = "other"),
        ((s = o || (o = {})).CONFUSION = "confusion"),
        (s.DOES_NOT_ACHIEVE_WANTS = "does_not_achieve_wants"),
        (s.HARD_TO_ACCESS = "hard_to_access"),
        (s.SOMETHING_ELSE = "something_else");
    },
    180970: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var a = n(200651),
        s = n(192379),
        l = n(75124),
        o = n(481060),
        r = n(332664),
        i = n(626135),
        c = n(900735),
        u = n(987562),
        d = n(981631),
        _ = n(689938);
      function E(e) {
        let { onClose: t, transitionState: E } = e,
          b = (0, l.Z)(u.CE);
        s.useEffect(() => {
          i.default.track(d.rMx.OPEN_MODAL, { type: "Block User Feedback" });
        }, []);
        let f = s.useCallback((e) => {
          let { rating: t, problem: s, feedback: l } = e,
            r = null == t;
          (0, c.t)(t, l, s, r),
            !r &&
              (0, o.openModalLazy)(async () => {
                let { default: e } = await n.e("14466").then(n.bind(n, 729328));
                return (t) =>
                  (0, a.jsx)(e, {
                    body: _.Z.Messages.CALL_FEEDBACK_CONFIRMATION,
                    ...t,
                  });
              });
        }, []);
        return (0, a.jsx)(r.Z, {
          modalType: "block_user",
          header: _.Z.Messages.BLOCK_USER_FEEDBACK_TITLE,
          body: _.Z.Messages.BLOCK_USER_FEEDBACK_BODY,
          problemTitle: _.Z.Messages.BLOCK_USER_FEEDBACK_OPTIONS_HEADER,
          problems: b,
          feedbackProblems: [u.F5.SOMETHING_ELSE],
          onSubmit: f,
          onClose: t,
          transitionState: E,
          otherKey: u.F5.SOMETHING_ELSE,
          hideHelpDeskLink: !0,
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
  },
]);
//# sourceMappingURL=f573b0afc68257f309a2.js.map
