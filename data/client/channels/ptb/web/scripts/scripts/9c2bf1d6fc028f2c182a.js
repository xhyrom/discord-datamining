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
    142402: function (e, a, n) {
      n.r(a),
        n.d(a, {
          default: function () {
            return b;
          },
        });
      var t = n(735250),
        s = n(470079),
        l = n(481060),
        r = n(332664),
        o = n(538211),
        i = n(698066),
        c = n(142497),
        u = n(626135),
        _ = n(981631),
        d = n(70722),
        E = n(190378),
        R = n(689938);
      let m = [d.kr.OTHER];
      function b(e) {
        let {
            isStreamer: a,
            stream: b,
            streamApplication: T,
            onClose: S,
            transitionState: M,
            analyticsData: O,
          } = e,
          f = a
            ? R.Z.Messages.STREAM_REPORT_RATING_BODY_STREAMER
            : R.Z.Messages.STREAM_REPORT_RATING_BODY;
        return (
          s.useEffect(() => {
            u.default.track(_.rMx.OPEN_MODAL, {
              type: "Stream Problem Report",
              other_user_id: b.ownerId,
              application_id: null != T ? T.id : null,
              application_name: null != T ? T.name : null,
              game_id: null != T ? T.id : null,
              source: "Stream End",
            });
          }, [b.ownerId, T]),
          (0, t.jsx)(r.Z, {
            header: R.Z.Messages.STREAM_REPORT_A_PROBLEM_POST_STREAM,
            body: f,
            problemTitle: R.Z.Messages.STREAM_REPORT_LABEL,
            problems: (0, o.Z)(a, !0),
            feedbackProblems: m,
            onSubmit: function (e) {
              let { rating: a, problem: s, dontShowAgain: r, feedback: o } = e;
              if ((r && (0, c.Kw)(E.v.REPORT_PROBLEM_POST_STREAM), null != a))
                (0, i.Z)({
                  problem: s,
                  stream: b,
                  feedback: o,
                  streamApplication: T,
                  analyticsData: O,
                  location: "Stream End",
                  rating: a,
                }),
                  null != s &&
                    (0, l.openModalLazy)(async () => {
                      let { default: e } = await n
                        .e("14466")
                        .then(n.bind(n, 729328));
                      return (a) =>
                        (0, t.jsx)(e, {
                          body: R.Z.Messages.STREAM_REPORTED_BODY,
                          ...a,
                        });
                    });
            },
            onClose: S,
            transitionState: M,
            otherKey: d.kr.OTHER,
          })
        );
      }
    },
    957115: function (e, a, n) {
      n.d(a, {
        B: function () {
          return l;
        },
      }),
        n(653041);
      var t = n(392711),
        s = n.n(t);
      let l = (e, a) => {
        let n = s().shuffle(e),
          t = n.findIndex((e) => e.value === a);
        if (t > -1) {
          let e = n[t];
          n.splice(t, 1), n.push(e);
        }
        return n;
      };
    },
    332664: function (e, a, n) {
      n.d(a, {
        L: function () {
          return f;
        },
        Z: function () {
          return g;
        },
      }),
        n(47120);
      var t = n(735250),
        s = n(470079),
        l = n(120356),
        r = n.n(l),
        o = n(392711),
        i = n.n(o),
        c = n(481060),
        u = n(110924),
        _ = n(600164),
        d = n(313201),
        E = n(237617),
        R = n(572539),
        m = n(63063),
        b = n(957115),
        T = n(531578),
        S = n(689938),
        M = n(940256);
      let O = [
        {
          className: M.emojiSad,
          rating: T.aZ.BAD,
          classNameSelected: M.selected,
        },
        {
          className: M.emojiNeutral,
          rating: T.aZ.NEUTRAL,
          classNameSelected: M.selected,
        },
        {
          className: M.emojiHappy,
          rating: T.aZ.GOOD,
          classNameSelected: M.selected,
        },
      ];
      function f(e) {
        let {
          className: a,
          selectedRating: n,
          ratingConfigs: s,
          onChangeRating: l,
        } = e;
        return (0, t.jsx)(_.Z, {
          justify: _.Z.Justify.BETWEEN,
          align: _.Z.Align.CENTER,
          className: r()(M.ratingsSelector, a),
          children: (null != s ? s : O).map((e) => {
            let { rating: a, className: s, classNameSelected: o } = e;
            return (0, t.jsx)(
              c.Clickable,
              {
                onClick: () => l(a),
                "aria-label": a,
                children: (0, t.jsx)("div", {
                  className: r()(s, n === a ? o : null),
                }),
              },
              a,
            );
          }),
        });
      }
      function A() {
        return (0, t.jsx)(c.Text, {
          className: M.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: S.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: m.Z.getSubmitRequestURL(),
          }),
        });
      }
      function g(e) {
        let {
            header: a,
            body: n,
            problemTitle: l,
            problems: o,
            transitionState: m,
            ratingConfigs: O,
            feedbackProblems: g = [],
            otherKey: N,
            ratingsSelectorClassName: p,
            hideDontShowCheckbox: x,
            startRating: h = null,
            onSubmit: Z,
            onClose: j,
          } = e,
          D = (0, u.Z)(o),
          [C, I] = s.useState(!1),
          [P, k] = s.useState(h),
          [L, B] = s.useState(null),
          [v, G] = s.useState(i().shuffle(o)),
          [y, U] = s.useState(""),
          H = (0, d.Dt)(),
          F = (0, E.Z)(P),
          Y = (0, E.Z)(C),
          K = (0, E.Z)(L),
          w = (0, E.Z)(Z),
          z = (0, E.Z)(y),
          q = null != L && g.includes(L);
        return (
          s.useEffect(() => {
            !i().isEqual(D, o) && G((0, b.B)(o, N));
          }, [o, D, N]),
          s.useEffect(
            () => () => {
              w.current({
                rating: F.current,
                problem: K.current,
                dontShowAgain: Y.current,
                feedback: z.current,
              });
            },
            [],
          ),
          (0, t.jsxs)(c.ModalRoot, {
            transitionState: m,
            className: M.__invalid_modalRoot,
            "aria-labelledby": H,
            children: [
              (0, t.jsxs)(c.ModalHeader, {
                separator: !1,
                className: M.headerContainer,
                children: [
                  (0, t.jsx)(c.Heading, {
                    id: H,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: a,
                  }),
                  (0, t.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: M.ratingBody,
                    children: n,
                  }),
                  q
                    ? null
                    : (0, t.jsx)(f, {
                        className: r()(M.emojis, p),
                        selectedRating: P,
                        onChangeRating: function (e) {
                          k(e), e === T.aZ.GOOD && j();
                        },
                        ratingConfigs: O,
                      }),
                ],
              }),
              (0, t.jsxs)(c.ModalContent, {
                className: M.__invalid_content,
                children: [
                  null == P || P === T.aZ.GOOD || q
                    ? null
                    : (0, t.jsx)(c.FormItem, {
                        title: l,
                        className: M.problemInfo,
                        children: (0, t.jsx)(R.Z, {
                          options: v,
                          onClick: function (e) {
                            let { value: a } = e;
                            B(a), !g.includes(a) && j();
                          },
                          hideCaret: (e) => {
                            let { value: a } = e;
                            return !g.includes(a);
                          },
                        }),
                      }),
                  q
                    ? (0, t.jsxs)(c.FormItem, {
                        title: S.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: M.problemInfo,
                        children: [
                          (0, t.jsx)(c.TextArea, {
                            value: y,
                            maxLength: T.iF,
                            onChange: U,
                          }),
                          (0, t.jsx)(A, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (q || !x) &&
                (0, t.jsx)(c.ModalFooter, {
                  className: M.footer,
                  direction: _.Z.Direction.HORIZONTAL,
                  children: q
                    ? (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              B(null), U("");
                            },
                            children: S.Z.Messages.BACK,
                          }),
                          (0, t.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: j,
                            children: S.Z.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, t.jsx)(c.Checkbox, {
                        type: c.Checkbox.Types.INVERTED,
                        size: 18,
                        value: C,
                        onChange: () => I(!C),
                        children: (0, t.jsx)(c.Text, {
                          variant: "text-sm/normal",
                          children: S.Z.Messages.DONT_SHOW_AGAIN,
                        }),
                      }),
                }),
            ],
          })
        );
      }
    },
    572539: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return c;
        },
      });
      var t = n(735250);
      n(470079);
      var s = n(120356),
        l = n.n(s),
        r = n(481060),
        o = n(259580),
        i = n(373521);
      function c(e) {
        let {
          options: a,
          onClick: n,
          className: s,
          optionClassName: c,
          hideCaret: u,
        } = e;
        return (0, t.jsx)("div", {
          className: l()(i.root, s),
          children: a.map((e, a) =>
            (0, t.jsxs)(
              r.Clickable,
              {
                onClick: () => n(e),
                className: l()(i.option, c),
                children: [
                  (0, t.jsx)(r.Text, {
                    className: i.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == u ? void 0 : u(e)) &&
                    (0, t.jsx)(o.Z, {
                      className: i.caret,
                      direction: o.Z.Directions.RIGHT,
                    }),
                ],
              },
              a,
            ),
          ),
        });
      }
    },
    538211: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return l;
        },
      });
      var t = n(70722),
        s = n(689938);
      function l(e, a) {
        return [
          {
            value: t.kr.BLACK_SCREEN,
            label: a
              ? s.Z.Messages.STREAM_REPORT_ENDED_BLACK
              : s.Z.Messages.STREAM_REPORT_BLACK,
          },
          {
            value: t.kr.BLURRY,
            label: a
              ? s.Z.Messages.STREAM_REPORT_ENDED_BLURRY
              : s.Z.Messages.STREAM_REPORT_BLURRY,
          },
          {
            value: t.kr.LAGGING,
            label: a
              ? s.Z.Messages.STREAM_REPORT_ENDED_LAGGING
              : s.Z.Messages.STREAM_REPORT_LAGGING,
          },
          {
            value: t.kr.OUT_OF_SYNC,
            label: a
              ? s.Z.Messages.STREAM_REPORT_ENDED_OUT_OF_SYNC
              : s.Z.Messages.STREAM_REPORT_OUT_OF_SYNC,
          },
          {
            value: t.kr.AUDIO_MISSING,
            label: a
              ? s.Z.Messages.STREAM_REPORT_ENDED_AUDIO_MISSING
              : s.Z.Messages.STREAM_REPORT_AUDIO_MISSING,
          },
          {
            value: t.kr.AUDIO_POOR,
            label: a
              ? s.Z.Messages.STREAM_REPORT_ENDED_AUDIO_POOR
              : s.Z.Messages.STREAM_REPORT_AUDIO_POOR,
          },
          {
            value: t.kr.STREAM_STOPPED,
            label: s.Z.Messages.STREAM_REPORT_ENDED_STREAM_STOPPED_UNEXPECTEDLY,
          },
          { value: t.kr.OTHER, label: s.Z.Messages.CALL_FEEDBACK_OPTION_OTHER },
        ];
      }
    },
    698066: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return l;
        },
      });
      var t = n(626135),
        s = n(981631);
      function l(e) {
        let {
          problem: a,
          stream: n,
          feedback: l,
          streamApplication: r,
          analyticsData: o,
          location: i,
          rating: c = null,
        } = e;
        t.default.track(s.rMx.STREAM_REPORT_PROBLEM, {
          reason: a,
          streamer_user_id: n.ownerId,
          stream_channel_id: n.channelId,
          guild_id: n.guildId,
          application_id: null != r ? r.id : null,
          application_name: null != r ? r.name : null,
          location: i,
          rating: c,
          feedback: l,
          ...o,
        });
      }
    },
    940256: function (e, a, n) {
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
    373521: function (e, a, n) {
      e.exports = {
        root: "root_c3b890",
        option: "option_c3b890",
        text: "text_c3b890",
        caret: "caret_c3b890",
      };
    },
  },
]);
//# sourceMappingURL=9c2bf1d6fc028f2c182a.js.map
