"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["23657"],
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
            analyticsData: O,
          } = e,
          f = t
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
            modalType: "stream",
            header: R.Z.Messages.STREAM_REPORT_A_PROBLEM_POST_STREAM,
            body: f,
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
                  analyticsData: O,
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
          return g;
        },
        Z: function () {
          return N;
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
        b = n(626135),
        m = n(63063),
        S = n(957115),
        T = n(871364),
        M = n(531578),
        O = n(981631),
        f = n(689938),
        p = n(214859);
      let A = [
        {
          className: p.emojiSad,
          rating: M.aZ.BAD,
          classNameSelected: p.selected,
        },
        {
          className: p.emojiNeutral,
          rating: M.aZ.NEUTRAL,
          classNameSelected: p.selected,
        },
        {
          className: p.emojiHappy,
          rating: M.aZ.GOOD,
          classNameSelected: p.selected,
        },
      ];
      function g(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: s,
          onChangeRating: l,
        } = e;
        return (0, a.jsx)(d.Z, {
          justify: d.Z.Justify.BETWEEN,
          align: d.Z.Align.CENTER,
          className: o()(p.ratingsSelector, t),
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
      function x() {
        return (0, a.jsx)(c.Text, {
          className: p.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: f.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: m.Z.getSubmitRequestURL(),
          }),
        });
      }
      function N(e) {
        let {
            modalType: t,
            header: n,
            body: l,
            problemTitle: r,
            problems: m,
            transitionState: A,
            ratingConfigs: N,
            feedbackProblems: h = [],
            otherKey: Z,
            ratingsSelectorClassName: k,
            hideDontShowCheckbox: j,
            startRating: D = null,
            onSubmit: C,
            onClose: P,
          } = e,
          I = (0, u.Z)(m),
          [B, L] = s.useState(!1),
          [v, y] = s.useState(D),
          [G, U] = s.useState(null),
          [F, H] = s.useState(i().shuffle(m)),
          [w, K] = s.useState(""),
          Y = (0, _.Dt)(),
          z = (0, E.Z)(v),
          q = (0, E.Z)(B),
          W = (0, E.Z)(G),
          J = (0, E.Z)(C),
          V = (0, E.Z)(w),
          X = null != G && h.includes(G),
          { renderSkipButton: Q } = T.w.useExperiment({
            location: "FeedbackModal",
          });
        return (
          s.useEffect(() => {
            !i().isEqual(I, m) && H((0, S.B)(m, Z));
          }, [m, I, Z]),
          s.useEffect(
            () => (
              b.default.track(O.rMx.OPEN_MODAL, {
                type: t,
                source: "Feedback Modal",
              }),
              () => {
                J.current({
                  rating: z.current,
                  problem: W.current,
                  dontShowAgain: q.current,
                  feedback: V.current,
                });
              }
            ),
            [],
          ),
          (0, a.jsxs)(c.ModalRoot, {
            transitionState: A,
            className: p.__invalid_modalRoot,
            "aria-labelledby": Y,
            children: [
              (0, a.jsxs)(c.ModalHeader, {
                separator: !1,
                className: p.headerContainer,
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
                    className: p.ratingBody,
                    children: l,
                  }),
                  X
                    ? null
                    : (0, a.jsx)(g, {
                        className: o()(p.emojis, k),
                        selectedRating: v,
                        onChangeRating: function (e) {
                          y(e), e === M.aZ.GOOD && P();
                        },
                        ratingConfigs: N,
                      }),
                ],
              }),
              (0, a.jsxs)(c.ModalContent, {
                className: p.__invalid_content,
                children: [
                  null == v || v === M.aZ.GOOD || X
                    ? null
                    : (0, a.jsx)(c.FormItem, {
                        title: r,
                        className: p.problemInfo,
                        children: (0, a.jsx)(R.Z, {
                          options: F,
                          onClick: function (e) {
                            let { value: t } = e;
                            U(t), !h.includes(t) && P();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !h.includes(t);
                          },
                        }),
                      }),
                  X
                    ? (0, a.jsxs)(c.FormItem, {
                        title: f.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: p.problemInfo,
                        children: [
                          (0, a.jsx)(c.TextArea, {
                            value: w,
                            maxLength: M.iF,
                            onChange: K,
                          }),
                          (0, a.jsx)(x, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (X || !j) &&
                (0, a.jsx)(c.ModalFooter, {
                  className: p.footer,
                  direction: d.Z.Direction.HORIZONTAL,
                  children: X
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              U(null), K("");
                            },
                            children: f.Z.Messages.BACK,
                          }),
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: P,
                            children: f.Z.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.INVERTED,
                            size: 18,
                            value: B,
                            onChange: () => L(!B),
                            children: (0, a.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              children: f.Z.Messages.DONT_SHOW_AGAIN,
                            }),
                          }),
                          Q &&
                            null != v &&
                            v !== M.aZ.GOOD &&
                            (0, a.jsx)(c.Button, {
                              type: "submit",
                              size: c.Button.Sizes.SMALL,
                              onClick: P,
                              children: f.Z.Messages.SKIP,
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
//# sourceMappingURL=4bea4145866bdf8e611f.js.map
