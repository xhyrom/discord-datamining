"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["23657"],
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
    142402: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var a = n(735250),
        s = n(470079),
        l = n(481060),
        o = n(332664),
        r = n(538211),
        i = n(698066),
        c = n(142497),
        u = n(626135),
        d = n(981631),
        _ = n(70722),
        E = n(190378),
        R = n(689938);
      let b = [_.kr.OTHER];
      function m(e) {
        let {
            isStreamer: t,
            stream: m,
            streamApplication: S,
            onClose: T,
            transitionState: M,
            analyticsData: f,
          } = e,
          O = t
            ? R.Z.Messages.STREAM_REPORT_RATING_BODY_STREAMER
            : R.Z.Messages.STREAM_REPORT_RATING_BODY;
        return (
          s.useEffect(() => {
            u.default.track(d.rMx.OPEN_MODAL, {
              type: "Stream Problem Report",
              other_user_id: m.ownerId,
              application_id: null != S ? S.id : null,
              application_name: null != S ? S.name : null,
              game_id: null != S ? S.id : null,
              source: "Stream End",
            });
          }, [m.ownerId, S]),
          (0, a.jsx)(o.Z, {
            header: R.Z.Messages.STREAM_REPORT_A_PROBLEM_POST_STREAM,
            body: O,
            problemTitle: R.Z.Messages.STREAM_REPORT_LABEL,
            problems: (0, r.Z)(t, !0),
            feedbackProblems: b,
            onSubmit: function (e) {
              let { rating: t, problem: s, dontShowAgain: o, feedback: r } = e;
              if ((o && (0, c.Kw)(E.v.REPORT_PROBLEM_POST_STREAM), null != t))
                (0, i.Z)({
                  problem: s,
                  stream: m,
                  feedback: r,
                  streamApplication: S,
                  analyticsData: f,
                  location: "Stream End",
                  rating: t,
                }),
                  null != s &&
                    (0, l.openModalLazy)(async () => {
                      let { default: e } = await n
                        .e("14466")
                        .then(n.bind(n, 729328));
                      return (t) =>
                        (0, a.jsx)(e, {
                          body: R.Z.Messages.STREAM_REPORTED_BODY,
                          ...t,
                        });
                    });
            },
            onClose: T,
            transitionState: M,
            otherKey: _.kr.OTHER,
          })
        );
      }
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
          return p;
        },
        Z: function () {
          return A;
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
        R = n(572539),
        b = n(63063),
        m = n(957115),
        S = n(871364),
        T = n(531578),
        M = n(689938),
        f = n(940256);
      let O = [
        {
          className: f.emojiSad,
          rating: T.aZ.BAD,
          classNameSelected: f.selected,
        },
        {
          className: f.emojiNeutral,
          rating: T.aZ.NEUTRAL,
          classNameSelected: f.selected,
        },
        {
          className: f.emojiHappy,
          rating: T.aZ.GOOD,
          classNameSelected: f.selected,
        },
      ];
      function p(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: s,
          onChangeRating: l,
        } = e;
        return (0, a.jsx)(d.Z, {
          justify: d.Z.Justify.BETWEEN,
          align: d.Z.Align.CENTER,
          className: o()(f.ratingsSelector, t),
          children: (null != s ? s : O).map((e) => {
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
      function g() {
        return (0, a.jsx)(c.Text, {
          className: f.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: M.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: b.Z.getSubmitRequestURL(),
          }),
        });
      }
      function A(e) {
        let {
            header: t,
            body: n,
            problemTitle: l,
            problems: r,
            transitionState: b,
            ratingConfigs: O,
            feedbackProblems: A = [],
            otherKey: x,
            ratingsSelectorClassName: h,
            hideDontShowCheckbox: N,
            startRating: Z = null,
            onSubmit: k,
            onClose: j,
          } = e,
          D = (0, u.Z)(r),
          [C, I] = s.useState(!1),
          [P, B] = s.useState(Z),
          [L, v] = s.useState(null),
          [G, y] = s.useState(i().shuffle(r)),
          [U, F] = s.useState(""),
          H = (0, _.Dt)(),
          w = (0, E.Z)(P),
          K = (0, E.Z)(C),
          Y = (0, E.Z)(L),
          z = (0, E.Z)(k),
          q = (0, E.Z)(U),
          W = null != L && A.includes(L),
          { renderSkipButton: J } = S.w.useExperiment({
            location: "FeedbackModal",
          });
        return (
          s.useEffect(() => {
            !i().isEqual(D, r) && y((0, m.B)(r, x));
          }, [r, D, x]),
          s.useEffect(
            () => () => {
              z.current({
                rating: w.current,
                problem: Y.current,
                dontShowAgain: K.current,
                feedback: q.current,
              });
            },
            [],
          ),
          (0, a.jsxs)(c.ModalRoot, {
            transitionState: b,
            className: f.__invalid_modalRoot,
            "aria-labelledby": H,
            children: [
              (0, a.jsxs)(c.ModalHeader, {
                separator: !1,
                className: f.headerContainer,
                children: [
                  (0, a.jsx)(c.Heading, {
                    id: H,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: t,
                  }),
                  (0, a.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: f.ratingBody,
                    children: n,
                  }),
                  W
                    ? null
                    : (0, a.jsx)(p, {
                        className: o()(f.emojis, h),
                        selectedRating: P,
                        onChangeRating: function (e) {
                          B(e), e === T.aZ.GOOD && j();
                        },
                        ratingConfigs: O,
                      }),
                ],
              }),
              (0, a.jsxs)(c.ModalContent, {
                className: f.__invalid_content,
                children: [
                  null == P || P === T.aZ.GOOD || W
                    ? null
                    : (0, a.jsx)(c.FormItem, {
                        title: l,
                        className: f.problemInfo,
                        children: (0, a.jsx)(R.Z, {
                          options: G,
                          onClick: function (e) {
                            let { value: t } = e;
                            v(t), !A.includes(t) && j();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !A.includes(t);
                          },
                        }),
                      }),
                  W
                    ? (0, a.jsxs)(c.FormItem, {
                        title: M.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: f.problemInfo,
                        children: [
                          (0, a.jsx)(c.TextArea, {
                            value: U,
                            maxLength: T.iF,
                            onChange: F,
                          }),
                          (0, a.jsx)(g, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (W || !N) &&
                (0, a.jsx)(c.ModalFooter, {
                  className: f.footer,
                  direction: d.Z.Direction.HORIZONTAL,
                  children: W
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              v(null), F("");
                            },
                            children: M.Z.Messages.BACK,
                          }),
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: j,
                            children: M.Z.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.INVERTED,
                            size: 18,
                            value: C,
                            onChange: () => I(!C),
                            children: (0, a.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              children: M.Z.Messages.DONT_SHOW_AGAIN,
                            }),
                          }),
                          J &&
                            null != P &&
                            P !== T.aZ.GOOD &&
                            (0, a.jsx)(c.Button, {
                              type: "submit",
                              size: c.Button.Sizes.SMALL,
                              onClick: j,
                              children: M.Z.Messages.SKIP,
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
    538211: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var a = n(70722),
        s = n(689938);
      function l(e, t) {
        return [
          {
            value: a.kr.BLACK_SCREEN,
            label: t
              ? s.Z.Messages.STREAM_REPORT_ENDED_BLACK
              : s.Z.Messages.STREAM_REPORT_BLACK,
          },
          {
            value: a.kr.BLURRY,
            label: t
              ? s.Z.Messages.STREAM_REPORT_ENDED_BLURRY
              : s.Z.Messages.STREAM_REPORT_BLURRY,
          },
          {
            value: a.kr.LAGGING,
            label: t
              ? s.Z.Messages.STREAM_REPORT_ENDED_LAGGING
              : s.Z.Messages.STREAM_REPORT_LAGGING,
          },
          {
            value: a.kr.OUT_OF_SYNC,
            label: t
              ? s.Z.Messages.STREAM_REPORT_ENDED_OUT_OF_SYNC
              : s.Z.Messages.STREAM_REPORT_OUT_OF_SYNC,
          },
          {
            value: a.kr.AUDIO_MISSING,
            label: t
              ? s.Z.Messages.STREAM_REPORT_ENDED_AUDIO_MISSING
              : s.Z.Messages.STREAM_REPORT_AUDIO_MISSING,
          },
          {
            value: a.kr.AUDIO_POOR,
            label: t
              ? s.Z.Messages.STREAM_REPORT_ENDED_AUDIO_POOR
              : s.Z.Messages.STREAM_REPORT_AUDIO_POOR,
          },
          {
            value: a.kr.STREAM_STOPPED,
            label: s.Z.Messages.STREAM_REPORT_ENDED_STREAM_STOPPED_UNEXPECTEDLY,
          },
          { value: a.kr.OTHER, label: s.Z.Messages.CALL_FEEDBACK_OPTION_OTHER },
        ];
      }
    },
    698066: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var a = n(626135),
        s = n(981631);
      function l(e) {
        let {
          problem: t,
          stream: n,
          feedback: l,
          streamApplication: o,
          analyticsData: r,
          location: i,
          rating: c = null,
        } = e;
        a.default.track(s.rMx.STREAM_REPORT_PROBLEM, {
          reason: t,
          streamer_user_id: n.ownerId,
          stream_channel_id: n.channelId,
          guild_id: n.guildId,
          application_id: null != o ? o.id : null,
          application_name: null != o ? o.name : null,
          location: i,
          rating: c,
          feedback: l,
          ...r,
        });
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
//# sourceMappingURL=c829f900538012e748ea.js.map
