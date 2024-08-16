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
    672655: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return l;
        },
      }),
        a(653041);
      var n = a(701488),
        s = a(689938);
      function l(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          a = [
            {
              value: n.K8.FAILED_LOAD,
              label: e
                ? s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_END_FAILED_LOAD
                : s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_FAILED_LOAD,
            },
            {
              value: n.K8.LAGGING,
              label: e
                ? s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_END_LAGGING
                : s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_LAGGING,
            },
            {
              value: n.K8.CONFUSING,
              label: e
                ? s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_END_CONFUSING
                : s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_CONFUSING,
            },
            {
              value: n.K8.NOT_FUN,
              label: e
                ? s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_END_NOT_FUN
                : s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_NOT_FUN,
            },
            {
              value: n.K8.OTHER,
              label: s.Z.Messages.CALL_FEEDBACK_OPTION_OTHER,
            },
          ];
        return (
          t &&
            a.push({
              value: n.K8.ADS,
              label: e
                ? s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_END_INCLUDED_ADS
                : s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_INCLUDES_ADS,
            }),
          a
        );
      }
    },
    768015: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = a(626135),
        s = a(981631);
      function l(e) {
        let {
          problem: t,
          channel: a,
          feedback: l,
          activityApplication: i,
          analyticsData: o,
          location: r,
          rating: c = null,
        } = e;
        n.default.track(s.rMx.ACTIVITY_REPORT_PROBLEM, {
          reason: t,
          guild_id: a.getGuildId(),
          channel_id: a.id,
          application_id: null == i ? void 0 : i.id,
          application_name: null == i ? void 0 : i.name,
          location: r,
          rating: c,
          feedback: l,
          ...o,
        });
      }
    },
    450634: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return m;
          },
        });
      var n = a(735250),
        s = a(470079),
        l = a(481060),
        i = a(332664),
        o = a(142497),
        r = a(626135),
        c = a(672655),
        d = a(768015),
        u = a(701488),
        _ = a(981631),
        T = a(190378),
        I = a(689938);
      let b = [u.K8.OTHER, u.K8.ADS, u.K8.NOT_FUN];
      function m(e) {
        var t;
        let {
          channel: m,
          activityApplication: C,
          onClose: A,
          transitionState: f,
          analyticsData: E,
        } = e;
        s.useEffect(() => {
          r.default.track(_.rMx.OPEN_MODAL, {
            type: "Activity Feedback Modal",
            application_id: C.id,
            application_name: C.name,
            game_id: C.id,
            source: "Activity End",
          });
        }, [C]);
        let p =
          (null === (t = C.embeddedActivityConfig) || void 0 === t
            ? void 0
            : t.displays_advertisements) === !0;
        return (0, n.jsx)(i.Z, {
          header: I.Z.Messages.ACTIVITY_REPORT_POST_ACTIVITY_HEADER.format({
            applicationName: C.name,
          }),
          body: I.Z.Messages.ACTIVITY_REPORT_ACTIVITY_BODY,
          problemTitle:
            I.Z.Messages.ACTIVITY_REPORT_POST_ACTIVITY_PROBLEM_TITLE,
          problems: (0, c.Z)(!0, p),
          feedbackProblems: b,
          onSubmit: function (e) {
            let { rating: t, problem: s, dontShowAgain: i, feedback: c } = e;
            if (
              (i &&
                !(function (e) {
                  let { applicationId: t, rating: a } = e;
                  r.default.track(_.rMx.ACTIVITY_REPORT_DONT_SHOW, {
                    application_id: t,
                    rating: a,
                  }),
                    (0, o.Kw)(T.v.POST_ACTIVITY_FEEDBACK);
                })({ rating: t, applicationId: C.id }),
              null != t)
            )
              (0, d.Z)({
                problem: s,
                channel: m,
                feedback: c,
                activityApplication: C,
                analyticsData: E,
                location: "Activity End",
                rating: t,
              }),
                null != s &&
                  (0, l.openModalLazy)(async () => {
                    let { default: e } = await a
                      .e("14466")
                      .then(a.bind(a, 729328));
                    return (t) =>
                      (0, n.jsx)(e, {
                        body: I.Z.Messages.ACTIVITY_REPORTED_BODY,
                        ...t,
                      });
                  });
          },
          onClose: A,
          transitionState: f,
          otherKey: u.K8.OTHER,
        });
      }
    },
    957115: function (e, t, a) {
      a.d(t, {
        B: function () {
          return l;
        },
      }),
        a(653041);
      var n = a(392711),
        s = a.n(n);
      let l = (e, t) => {
        let a = s().shuffle(e),
          n = a.findIndex((e) => e.value === t);
        if (n > -1) {
          let e = a[n];
          a.splice(n, 1), a.push(e);
        }
        return a;
      };
    },
    332664: function (e, t, a) {
      a.d(t, {
        L: function () {
          return p;
        },
        Z: function () {
          return x;
        },
      }),
        a(47120);
      var n = a(735250),
        s = a(470079),
        l = a(120356),
        i = a.n(l),
        o = a(392711),
        r = a.n(o),
        c = a(481060),
        d = a(110924),
        u = a(600164),
        _ = a(313201),
        T = a(237617),
        I = a(572539),
        b = a(63063),
        m = a(957115),
        C = a(531578),
        A = a(689938),
        f = a(940256);
      let E = [
        {
          className: f.emojiSad,
          rating: C.aZ.BAD,
          classNameSelected: f.selected,
        },
        {
          className: f.emojiNeutral,
          rating: C.aZ.NEUTRAL,
          classNameSelected: f.selected,
        },
        {
          className: f.emojiHappy,
          rating: C.aZ.GOOD,
          classNameSelected: f.selected,
        },
      ];
      function p(e) {
        let {
          className: t,
          selectedRating: a,
          ratingConfigs: s,
          onChangeRating: l,
        } = e;
        return (0, n.jsx)(u.Z, {
          justify: u.Z.Justify.BETWEEN,
          align: u.Z.Align.CENTER,
          className: i()(f.ratingsSelector, t),
          children: (null != s ? s : E).map((e) => {
            let { rating: t, className: s, classNameSelected: o } = e;
            return (0, n.jsx)(
              c.Clickable,
              {
                onClick: () => l(t),
                "aria-label": t,
                children: (0, n.jsx)("div", {
                  className: i()(s, a === t ? o : null),
                }),
              },
              t,
            );
          }),
        });
      }
      function N() {
        return (0, n.jsx)(c.Text, {
          className: f.helpdeskLink,
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
            body: a,
            problemTitle: l,
            problems: o,
            transitionState: b,
            ratingConfigs: E,
            feedbackProblems: x = [],
            otherKey: R,
            ratingsSelectorClassName: g,
            hideDontShowCheckbox: O,
            startRating: h = null,
            onSubmit: Z,
            onClose: j,
          } = e,
          v = (0, d.Z)(o),
          [D, S] = s.useState(!1),
          [M, L] = s.useState(h),
          [Y, V] = s.useState(null),
          [k, B] = s.useState(r().shuffle(o)),
          [P, y] = s.useState(""),
          F = (0, _.Dt)(),
          G = (0, T.Z)(M),
          K = (0, T.Z)(D),
          H = (0, T.Z)(Y),
          U = (0, T.Z)(Z),
          z = (0, T.Z)(P),
          w = null != Y && x.includes(Y);
        return (
          s.useEffect(() => {
            !r().isEqual(v, o) && B((0, m.B)(o, R));
          }, [o, v, R]),
          s.useEffect(
            () => () => {
              U.current({
                rating: G.current,
                problem: H.current,
                dontShowAgain: K.current,
                feedback: z.current,
              });
            },
            [],
          ),
          (0, n.jsxs)(c.ModalRoot, {
            transitionState: b,
            className: f.__invalid_modalRoot,
            "aria-labelledby": F,
            children: [
              (0, n.jsxs)(c.ModalHeader, {
                separator: !1,
                className: f.headerContainer,
                children: [
                  (0, n.jsx)(c.Heading, {
                    id: F,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: t,
                  }),
                  (0, n.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: f.ratingBody,
                    children: a,
                  }),
                  w
                    ? null
                    : (0, n.jsx)(p, {
                        className: i()(f.emojis, g),
                        selectedRating: M,
                        onChangeRating: function (e) {
                          L(e), e === C.aZ.GOOD && j();
                        },
                        ratingConfigs: E,
                      }),
                ],
              }),
              (0, n.jsxs)(c.ModalContent, {
                className: f.__invalid_content,
                children: [
                  null == M || M === C.aZ.GOOD || w
                    ? null
                    : (0, n.jsx)(c.FormItem, {
                        title: l,
                        className: f.problemInfo,
                        children: (0, n.jsx)(I.Z, {
                          options: k,
                          onClick: function (e) {
                            let { value: t } = e;
                            V(t), !x.includes(t) && j();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !x.includes(t);
                          },
                        }),
                      }),
                  w
                    ? (0, n.jsxs)(c.FormItem, {
                        title: A.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: f.problemInfo,
                        children: [
                          (0, n.jsx)(c.TextArea, {
                            value: P,
                            maxLength: C.iF,
                            onChange: y,
                          }),
                          (0, n.jsx)(N, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (w || !O) &&
                (0, n.jsx)(c.ModalFooter, {
                  className: f.footer,
                  direction: u.Z.Direction.HORIZONTAL,
                  children: w
                    ? (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              V(null), y("");
                            },
                            children: A.Z.Messages.BACK,
                          }),
                          (0, n.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: j,
                            children: A.Z.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, n.jsx)(c.Checkbox, {
                        type: c.Checkbox.Types.INVERTED,
                        size: 18,
                        value: D,
                        onChange: () => S(!D),
                        children: (0, n.jsx)(c.Text, {
                          variant: "text-sm/normal",
                          children: A.Z.Messages.DONT_SHOW_AGAIN,
                        }),
                      }),
                }),
            ],
          })
        );
      }
    },
    572539: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return c;
        },
      });
      var n = a(735250);
      a(470079);
      var s = a(120356),
        l = a.n(s),
        i = a(481060),
        o = a(259580),
        r = a(373521);
      function c(e) {
        let {
          options: t,
          onClick: a,
          className: s,
          optionClassName: c,
          hideCaret: d,
        } = e;
        return (0, n.jsx)("div", {
          className: l()(r.root, s),
          children: t.map((e, t) =>
            (0, n.jsxs)(
              i.Clickable,
              {
                onClick: () => a(e),
                className: l()(r.option, c),
                children: [
                  (0, n.jsx)(i.Text, {
                    className: r.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == d ? void 0 : d(e)) &&
                    (0, n.jsx)(o.Z, {
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
    940256: function (e, t, a) {
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
    373521: function (e, t, a) {
      e.exports = {
        root: "root_c3b890",
        option: "option_c3b890",
        text: "text_c3b890",
        caret: "caret_c3b890",
      };
    },
  },
]);
//# sourceMappingURL=9f588d3a04adec9dc585.js.map
