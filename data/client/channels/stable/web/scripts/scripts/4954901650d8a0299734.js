"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["4413"],
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
          onClose: p,
          transitionState: A,
          analyticsData: C,
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
          modalType: "activity",
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
                analyticsData: C,
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
          onClose: p,
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
          return g;
        },
        Z: function () {
          return h;
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
        b = n(626135),
        m = n(63063),
        f = n(957115),
        p = n(871364),
        A = n(531578),
        C = n(981631),
        E = n(689938),
        N = n(214859);
      let x = [
        {
          className: N.emojiSad,
          rating: A.aZ.BAD,
          classNameSelected: N.selected,
        },
        {
          className: N.emojiNeutral,
          rating: A.aZ.NEUTRAL,
          classNameSelected: N.selected,
        },
        {
          className: N.emojiHappy,
          rating: A.aZ.GOOD,
          classNameSelected: N.selected,
        },
      ];
      function g(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: s,
          onChangeRating: l,
        } = e;
        return (0, a.jsx)(u.Z, {
          justify: u.Z.Justify.BETWEEN,
          align: u.Z.Align.CENTER,
          className: i()(N.ratingsSelector, t),
          children: (null != s ? s : x).map((e) => {
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
      function O() {
        return (0, a.jsx)(c.Text, {
          className: N.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: E.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: m.Z.getSubmitRequestURL(),
          }),
        });
      }
      function h(e) {
        let {
            modalType: t,
            header: n,
            body: l,
            problemTitle: o,
            problems: m,
            transitionState: x,
            ratingConfigs: h,
            feedbackProblems: R = [],
            otherKey: Z,
            ratingsSelectorClassName: S,
            hideDontShowCheckbox: j,
            startRating: v = null,
            onSubmit: M,
            onClose: D,
          } = e,
          k = (0, d.Z)(m),
          [L, Y] = s.useState(!1),
          [B, V] = s.useState(v),
          [y, P] = s.useState(null),
          [F, G] = s.useState(r().shuffle(m)),
          [K, H] = s.useState(""),
          U = (0, _.Dt)(),
          w = (0, T.Z)(B),
          z = (0, T.Z)(L),
          W = (0, T.Z)(y),
          q = (0, T.Z)(M),
          J = (0, T.Z)(K),
          Q = null != y && R.includes(y),
          { renderSkipButton: X } = p.w.useExperiment({
            location: "FeedbackModal",
          });
        return (
          s.useEffect(() => {
            !r().isEqual(k, m) && G((0, f.B)(m, Z));
          }, [m, k, Z]),
          s.useEffect(
            () => (
              b.default.track(C.rMx.OPEN_MODAL, {
                type: t,
                source: "Feedback Modal",
              }),
              () => {
                q.current({
                  rating: w.current,
                  problem: W.current,
                  dontShowAgain: z.current,
                  feedback: J.current,
                });
              }
            ),
            [],
          ),
          (0, a.jsxs)(c.ModalRoot, {
            transitionState: x,
            className: N.__invalid_modalRoot,
            "aria-labelledby": U,
            children: [
              (0, a.jsxs)(c.ModalHeader, {
                separator: !1,
                className: N.headerContainer,
                children: [
                  (0, a.jsx)(c.Heading, {
                    id: U,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: n,
                  }),
                  (0, a.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: N.ratingBody,
                    children: l,
                  }),
                  Q
                    ? null
                    : (0, a.jsx)(g, {
                        className: i()(N.emojis, S),
                        selectedRating: B,
                        onChangeRating: function (e) {
                          V(e), e === A.aZ.GOOD && D();
                        },
                        ratingConfigs: h,
                      }),
                ],
              }),
              (0, a.jsxs)(c.ModalContent, {
                className: N.__invalid_content,
                children: [
                  null == B || B === A.aZ.GOOD || Q
                    ? null
                    : (0, a.jsx)(c.FormItem, {
                        title: o,
                        className: N.problemInfo,
                        children: (0, a.jsx)(I.Z, {
                          options: F,
                          onClick: function (e) {
                            let { value: t } = e;
                            P(t), !R.includes(t) && D();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !R.includes(t);
                          },
                        }),
                      }),
                  Q
                    ? (0, a.jsxs)(c.FormItem, {
                        title: E.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: N.problemInfo,
                        children: [
                          (0, a.jsx)(c.TextArea, {
                            value: K,
                            maxLength: A.iF,
                            onChange: H,
                          }),
                          (0, a.jsx)(O, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (Q || !j) &&
                (0, a.jsx)(c.ModalFooter, {
                  className: N.footer,
                  direction: u.Z.Direction.HORIZONTAL,
                  children: Q
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              P(null), H("");
                            },
                            children: E.Z.Messages.BACK,
                          }),
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: D,
                            children: E.Z.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.INVERTED,
                            size: 18,
                            value: L,
                            onChange: () => Y(!L),
                            children: (0, a.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              children: E.Z.Messages.DONT_SHOW_AGAIN,
                            }),
                          }),
                          X &&
                            null != B &&
                            B !== A.aZ.GOOD &&
                            (0, a.jsx)(c.Button, {
                              type: "submit",
                              size: c.Button.Sizes.SMALL,
                              onClick: D,
                              children: E.Z.Messages.SKIP,
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
        r = n(20535);
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
//# sourceMappingURL=4954901650d8a0299734.js.map
