"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["4413"],
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
    672655: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      }),
        n(653041);
      var a = n(701488),
        s = n(689938);
      function l(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = [
            {
              value: a.K8.FAILED_LOAD,
              label: e
                ? s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_END_FAILED_LOAD
                : s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_FAILED_LOAD,
            },
            {
              value: a.K8.LAGGING,
              label: e
                ? s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_END_LAGGING
                : s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_LAGGING,
            },
            {
              value: a.K8.CONFUSING,
              label: e
                ? s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_END_CONFUSING
                : s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_CONFUSING,
            },
            {
              value: a.K8.NOT_FUN,
              label: e
                ? s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_END_NOT_FUN
                : s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_NOT_FUN,
            },
            {
              value: a.K8.OTHER,
              label: s.Z.Messages.CALL_FEEDBACK_OPTION_OTHER,
            },
          ];
        return (
          t &&
            n.push({
              value: a.K8.ADS,
              label: e
                ? s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_END_INCLUDED_ADS
                : s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_INCLUDES_ADS,
            }),
          n
        );
      }
    },
    768015: function (e, t, n) {
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
          channel: n,
          feedback: l,
          activityApplication: i,
          analyticsData: o,
          location: r,
          rating: c = null,
        } = e;
        a.default.track(s.rMx.ACTIVITY_REPORT_PROBLEM, {
          reason: t,
          guild_id: n.getGuildId(),
          channel_id: n.id,
          application_id: null == i ? void 0 : i.id,
          application_name: null == i ? void 0 : i.name,
          location: r,
          rating: c,
          feedback: l,
          ...o,
        });
      }
    },
    450634: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var a = n(735250),
        s = n(470079),
        l = n(481060),
        i = n(332664),
        o = n(142497),
        r = n(626135),
        c = n(672655),
        d = n(768015),
        u = n(701488),
        _ = n(981631),
        T = n(190378),
        I = n(689938);
      let b = [u.K8.OTHER, u.K8.ADS, u.K8.NOT_FUN];
      function m(e) {
        var t;
        let {
          channel: m,
          activityApplication: f,
          onClose: C,
          transitionState: A,
          analyticsData: p,
        } = e;
        s.useEffect(() => {
          r.default.track(_.rMx.OPEN_MODAL, {
            type: "Activity Feedback Modal",
            application_id: f.id,
            application_name: f.name,
            game_id: f.id,
            source: "Activity End",
          });
        }, [f]);
        let E =
          (null === (t = f.embeddedActivityConfig) || void 0 === t
            ? void 0
            : t.displays_advertisements) === !0;
        return (0, a.jsx)(i.Z, {
          header: I.Z.Messages.ACTIVITY_REPORT_POST_ACTIVITY_HEADER.format({
            applicationName: f.name,
          }),
          body: I.Z.Messages.ACTIVITY_REPORT_ACTIVITY_BODY,
          problemTitle:
            I.Z.Messages.ACTIVITY_REPORT_POST_ACTIVITY_PROBLEM_TITLE,
          problems: (0, c.Z)(!0, E),
          feedbackProblems: b,
          onSubmit: function (e) {
            let { rating: t, problem: s, dontShowAgain: i, feedback: c } = e;
            if (
              (i &&
                !(function (e) {
                  let { applicationId: t, rating: n } = e;
                  r.default.track(_.rMx.ACTIVITY_REPORT_DONT_SHOW, {
                    application_id: t,
                    rating: n,
                  }),
                    (0, o.Kw)(T.v.POST_ACTIVITY_FEEDBACK);
                })({ rating: t, applicationId: f.id }),
              null != t)
            )
              (0, d.Z)({
                problem: s,
                channel: m,
                feedback: c,
                activityApplication: f,
                analyticsData: p,
                location: "Activity End",
                rating: t,
              }),
                null != s &&
                  (0, l.openModalLazy)(async () => {
                    let { default: e } = await n
                      .e("14466")
                      .then(n.bind(n, 729328));
                    return (t) =>
                      (0, a.jsx)(e, {
                        body: I.Z.Messages.ACTIVITY_REPORTED_BODY,
                        ...t,
                      });
                  });
          },
          onClose: C,
          transitionState: A,
          otherKey: u.K8.OTHER,
        });
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
          return N;
        },
        Z: function () {
          return x;
        },
      }),
        n(47120);
      var a = n(735250),
        s = n(470079),
        l = n(120356),
        i = n.n(l),
        o = n(392711),
        r = n.n(o),
        c = n(481060),
        d = n(110924),
        u = n(600164),
        _ = n(313201),
        T = n(237617),
        I = n(572539),
        b = n(63063),
        m = n(957115),
        f = n(871364),
        C = n(531578),
        A = n(689938),
        p = n(940256);
      let E = [
        {
          className: p.emojiSad,
          rating: C.aZ.BAD,
          classNameSelected: p.selected,
        },
        {
          className: p.emojiNeutral,
          rating: C.aZ.NEUTRAL,
          classNameSelected: p.selected,
        },
        {
          className: p.emojiHappy,
          rating: C.aZ.GOOD,
          classNameSelected: p.selected,
        },
      ];
      function N(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: s,
          onChangeRating: l,
        } = e;
        return (0, a.jsx)(u.Z, {
          justify: u.Z.Justify.BETWEEN,
          align: u.Z.Align.CENTER,
          className: i()(p.ratingsSelector, t),
          children: (null != s ? s : E).map((e) => {
            let { rating: t, className: s, classNameSelected: o } = e;
            return (0, a.jsx)(
              c.Clickable,
              {
                onClick: () => l(t),
                "aria-label": t,
                children: (0, a.jsx)("div", {
                  className: i()(s, n === t ? o : null),
                }),
              },
              t,
            );
          }),
        });
      }
      function g() {
        return (0, a.jsx)(c.Text, {
          className: p.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: A.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: b.Z.getSubmitRequestURL(),
          }),
        });
      }
      function x(e) {
        let {
            header: t,
            body: n,
            problemTitle: l,
            problems: o,
            transitionState: b,
            ratingConfigs: E,
            feedbackProblems: x = [],
            otherKey: h,
            ratingsSelectorClassName: O,
            hideDontShowCheckbox: R,
            startRating: Z = null,
            onSubmit: S,
            onClose: j,
          } = e,
          v = (0, d.Z)(o),
          [D, M] = s.useState(!1),
          [k, L] = s.useState(Z),
          [Y, B] = s.useState(null),
          [V, P] = s.useState(r().shuffle(o)),
          [y, F] = s.useState(""),
          G = (0, _.Dt)(),
          K = (0, T.Z)(k),
          H = (0, T.Z)(D),
          U = (0, T.Z)(Y),
          w = (0, T.Z)(S),
          z = (0, T.Z)(y),
          W = null != Y && x.includes(Y),
          { renderSkipButton: q } = f.w.useExperiment({
            location: "FeedbackModal",
          });
        return (
          s.useEffect(() => {
            !r().isEqual(v, o) && P((0, m.B)(o, h));
          }, [o, v, h]),
          s.useEffect(
            () => () => {
              w.current({
                rating: K.current,
                problem: U.current,
                dontShowAgain: H.current,
                feedback: z.current,
              });
            },
            [],
          ),
          (0, a.jsxs)(c.ModalRoot, {
            transitionState: b,
            className: p.__invalid_modalRoot,
            "aria-labelledby": G,
            children: [
              (0, a.jsxs)(c.ModalHeader, {
                separator: !1,
                className: p.headerContainer,
                children: [
                  (0, a.jsx)(c.Heading, {
                    id: G,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: t,
                  }),
                  (0, a.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: p.ratingBody,
                    children: n,
                  }),
                  W
                    ? null
                    : (0, a.jsx)(N, {
                        className: i()(p.emojis, O),
                        selectedRating: k,
                        onChangeRating: function (e) {
                          L(e), e === C.aZ.GOOD && j();
                        },
                        ratingConfigs: E,
                      }),
                ],
              }),
              (0, a.jsxs)(c.ModalContent, {
                className: p.__invalid_content,
                children: [
                  null == k || k === C.aZ.GOOD || W
                    ? null
                    : (0, a.jsx)(c.FormItem, {
                        title: l,
                        className: p.problemInfo,
                        children: (0, a.jsx)(I.Z, {
                          options: V,
                          onClick: function (e) {
                            let { value: t } = e;
                            B(t), !x.includes(t) && j();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !x.includes(t);
                          },
                        }),
                      }),
                  W
                    ? (0, a.jsxs)(c.FormItem, {
                        title: A.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: p.problemInfo,
                        children: [
                          (0, a.jsx)(c.TextArea, {
                            value: y,
                            maxLength: C.iF,
                            onChange: F,
                          }),
                          (0, a.jsx)(g, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (W || !R) &&
                (0, a.jsx)(c.ModalFooter, {
                  className: p.footer,
                  direction: u.Z.Direction.HORIZONTAL,
                  children: W
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              B(null), F("");
                            },
                            children: A.Z.Messages.BACK,
                          }),
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: j,
                            children: A.Z.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.INVERTED,
                            size: 18,
                            value: D,
                            onChange: () => M(!D),
                            children: (0, a.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              children: A.Z.Messages.DONT_SHOW_AGAIN,
                            }),
                          }),
                          q &&
                            null != k &&
                            k !== C.aZ.GOOD &&
                            (0, a.jsx)(c.Button, {
                              type: "submit",
                              size: c.Button.Sizes.SMALL,
                              onClick: j,
                              children: A.Z.Messages.SKIP,
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
        i = n(481060),
        o = n(259580),
        r = n(373521);
      function c(e) {
        let {
          options: t,
          onClick: n,
          className: s,
          optionClassName: c,
          hideCaret: d,
        } = e;
        return (0, a.jsx)("div", {
          className: l()(r.root, s),
          children: t.map((e, t) =>
            (0, a.jsxs)(
              i.Clickable,
              {
                onClick: () => n(e),
                className: l()(r.option, c),
                children: [
                  (0, a.jsx)(i.Text, {
                    className: r.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == d ? void 0 : d(e)) &&
                    (0, a.jsx)(o.Z, {
                      className: r.caret,
                      direction: o.Z.Directions.RIGHT,
                    }),
                ],
              },
              t,
            ),
          ),
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
//# sourceMappingURL=5336d6007f438cc9f136.js.map
