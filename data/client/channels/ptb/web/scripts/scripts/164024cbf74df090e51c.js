"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72135"],
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
    144535: function (e, t, n) {
      n.d(t, {
        I: function () {
          return r;
        },
      });
      var l = n(969090);
      let r = function (e) {
        let { intl: t, t: r } = n(388032),
          a = r[(0, l.runtimeHashMessageKey)(e)],
          o = t.currentLocale;
        t.currentLocale = "en-US";
        let i = t.string(a);
        return (t.currentLocale = o), i;
      };
    },
    957115: function (e, t, n) {
      n.d(t, {
        B: function () {
          return a;
        },
      }),
        n(653041);
      var l = n(392711),
        r = n.n(l);
      let a = (e, t) => {
        let n = r().shuffle(e),
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
          return k;
        },
        Z: function () {
          return v;
        },
      }),
        n(47120);
      var l = n(200651),
        r = n(192379),
        a = n(120356),
        o = n.n(a),
        i = n(392711),
        s = n.n(i),
        c = n(481060),
        u = n(110924),
        d = n(600164),
        b = n(313201),
        f = n(237617),
        m = n(572539),
        h = n(626135),
        x = n(63063),
        g = n(957115),
        p = n(531578),
        _ = n(981631),
        j = n(388032),
        N = n(720816);
      let C = [
        {
          className: N.emojiSad,
          rating: p.aZ.BAD,
          classNameSelected: N.selected,
        },
        {
          className: N.emojiNeutral,
          rating: p.aZ.NEUTRAL,
          classNameSelected: N.selected,
        },
        {
          className: N.emojiHappy,
          rating: p.aZ.GOOD,
          classNameSelected: N.selected,
        },
      ];
      function k(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: r,
          onChangeRating: a,
        } = e;
        return (0, l.jsx)(d.Z, {
          justify: d.Z.Justify.BETWEEN,
          align: d.Z.Align.CENTER,
          className: o()(N.ratingsSelector, t),
          children: (null != r ? r : C).map((e) => {
            let { rating: t, className: r, classNameSelected: i } = e;
            return (0, l.jsx)(
              c.Clickable,
              {
                onClick: () => a(t),
                "aria-label": t,
                children: (0, l.jsx)("div", {
                  className: o()(r, n === t ? i : null),
                }),
              },
              t,
            );
          }),
        });
      }
      function Z() {
        return (0, l.jsx)(c.Text, {
          className: N.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: j.intl.format(j.t.ybi2tL, {
            helpdeskURL: x.Z.getSubmitRequestURL(),
          }),
        });
      }
      function v(e) {
        let {
            modalType: t,
            header: n,
            body: a,
            problemTitle: i,
            problems: x,
            transitionState: C,
            ratingConfigs: v,
            feedbackProblems: E = [],
            otherKey: S,
            ratingsSelectorClassName: I,
            hideDontShowCheckbox: L,
            startRating: y = null,
            hideHelpDeskLink: A = !1,
            onSubmit: B,
            onClose: O,
          } = e,
          T = (0, u.Z)(x),
          [D, R] = r.useState(!1),
          [M, F] = r.useState(y),
          [w, H] = r.useState(null),
          [G, K] = r.useState(s().shuffle(x)),
          [z, P] = r.useState(""),
          U = (0, b.Dt)(),
          W = (0, f.Z)(M),
          q = (0, f.Z)(D),
          J = (0, f.Z)(w),
          Q = (0, f.Z)(B),
          V = (0, f.Z)(z),
          X = null != w && E.includes(w);
        return (
          r.useEffect(() => {
            !s().isEqual(T, x) && K((0, g.B)(x, S));
          }, [x, T, S]),
          r.useEffect(
            () => (
              h.default.track(_.rMx.OPEN_MODAL, {
                type: t,
                source: "Feedback Modal",
              }),
              () => {
                Q.current({
                  rating: W.current,
                  problem: J.current,
                  dontShowAgain: q.current,
                  feedback: V.current,
                });
              }
            ),
            [],
          ),
          (0, l.jsxs)(c.ModalRoot, {
            transitionState: C,
            className: N.__invalid_modalRoot,
            "aria-labelledby": U,
            children: [
              (0, l.jsxs)(c.ModalHeader, {
                separator: !1,
                className: N.headerContainer,
                children: [
                  (0, l.jsx)(c.Heading, {
                    id: U,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: n,
                  }),
                  (0, l.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: N.ratingBody,
                    children: a,
                  }),
                  X
                    ? null
                    : (0, l.jsx)(k, {
                        className: o()(N.emojis, I),
                        selectedRating: M,
                        onChangeRating: function (e) {
                          F(e), e === p.aZ.GOOD && O();
                        },
                        ratingConfigs: v,
                      }),
                ],
              }),
              (0, l.jsxs)(c.ModalContent, {
                className: N.__invalid_content,
                children: [
                  null == M || M === p.aZ.GOOD || X
                    ? null
                    : (0, l.jsx)(c.FormItem, {
                        title: i,
                        className: N.problemInfo,
                        children: (0, l.jsx)(m.Z, {
                          options: G,
                          onClick: function (e) {
                            let { value: t } = e;
                            H(t), !E.includes(t) && O();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !E.includes(t);
                          },
                        }),
                      }),
                  X
                    ? (0, l.jsxs)(c.FormItem, {
                        title: j.intl.string(j.t.h95hcn),
                        className: N.problemInfo,
                        children: [
                          (0, l.jsx)(c.TextArea, {
                            value: z,
                            maxLength: p.iF,
                            onChange: P,
                          }),
                          !A && (0, l.jsx)(Z, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (X || !L) &&
                (0, l.jsx)(c.ModalFooter, {
                  className: N.footer,
                  direction: d.Z.Direction.HORIZONTAL,
                  children: X
                    ? (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              H(null), P("");
                            },
                            children: j.intl.string(j.t["13/7kZ"]),
                          }),
                          (0, l.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: O,
                            children: j.intl.string(j.t.geKm7u),
                          }),
                        ],
                      })
                    : (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.INVERTED,
                            size: 18,
                            value: D,
                            onChange: () => R(!D),
                            children: (0, l.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              children: j.intl.string(j.t["5E9SBw"]),
                            }),
                          }),
                          null != M &&
                            M !== p.aZ.GOOD &&
                            (0, l.jsx)(c.Button, {
                              type: "submit",
                              size: c.Button.Sizes.SMALL,
                              onClick: O,
                              children: j.intl.string(j.t["5WxrcX"]),
                            }),
                        ],
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
      var r = n(120356),
        a = n.n(r),
        o = n(481060),
        i = n(259580),
        s = n(995181);
      function c(e) {
        let {
          options: t,
          onClick: n,
          className: r,
          optionClassName: c,
          hideCaret: u,
        } = e;
        return (0, l.jsx)("div", {
          className: a()(s.root, r),
          children: t.map((e, t) =>
            (0, l.jsxs)(
              o.Clickable,
              {
                onClick: () => n(e),
                className: a()(s.option, c),
                children: [
                  (0, l.jsx)(o.Text, {
                    className: s.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == u ? void 0 : u(e)) &&
                    (0, l.jsx)(i.Z, {
                      className: s.caret,
                      direction: i.Z.Directions.RIGHT,
                    }),
                ],
              },
              t,
            ),
          ),
        });
      }
    },
    798733: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var l,
        r,
        a = n(388032);
      function o() {
        return [
          {
            label: a.intl.string(a.t.cigGCQ),
            code: 2,
            value: "I couldn't find what I was looking for",
          },
          {
            label: a.intl.string(a.t.ZyXA0t),
            code: 3,
            value: "I found the language confusing",
          },
          { label: a.intl.string(a.t["emlT9/"]), code: 1, value: "Other" },
        ];
      }
      ((l = r || (r = {})).COULD_NOT_FIND =
        "I couldn't find what I was looking for"),
        (l.CONFUSING_LANGUAGE = "I found the language confusing"),
        (l.OTHER = "Other");
    },
    559187: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var l = n(626135),
        r = n(981631);
      function a(e) {
        let {
          problem: t,
          feedback: n,
          reportType: a,
          reportId: o = null,
          rating: i = null,
          dontShowAgain: s,
        } = e;
        l.default.track(r.rMx.IAR_FEEDBACK_SUBMITTED, {
          reason: t,
          report_type: a,
          report_id: o,
          rating: i,
          feedback: n,
          dont_show_again: s,
        });
      }
    },
    442173: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var l = n(200651),
        r = n(192379),
        a = n(481060),
        o = n(144535),
        i = n(332664),
        s = n(142497),
        c = n(626135),
        u = n(798733),
        d = n(559187),
        b = n(981631),
        f = n(190378),
        m = n(388032);
      function h(e) {
        let { reportId: t, reportType: h, ...x } = e;
        r.useEffect(() => {
          c.default.track(b.rMx.IAR_FEEDBACK_MODAL_VIEWED, {
            report_id: t,
            report_type: h,
          });
        }, [t, h]);
        let g = (0, o.I)("CALL_FEEDBACK_OPTION_OTHER");
        return (0, l.jsx)(i.Z, {
          modalType: "in_app_report",
          header: m.intl.string(m.t.MP5lDg),
          body: m.intl.string(m.t["7Ct0Dg"]),
          problemTitle: m.intl.string(m.t.FJmoxM),
          problems: (0, u.Z)(),
          feedbackProblems: [g],
          onSubmit: function (e) {
            let { rating: r, problem: o, dontShowAgain: i, feedback: c } = e;
            if (
              (i && (0, s.Kw)(f.v.IN_APP_REPORTS_FEEDBACK),
              (0, d.Z)({
                rating: r,
                problem: o,
                feedback: c,
                reportId: t,
                reportType: h,
                dontShowAgain: i,
              }),
              null != r && null != o)
            )
              (0, a.openModalLazy)(async () => {
                let { default: e } = await n.e("14466").then(n.bind(n, 729328));
                return (t) =>
                  (0, l.jsx)(e, { body: m.intl.string(m.t["d9+vQ0"]), ...t });
              });
          },
          otherKey: g,
          ...x,
        });
      }
    },
    720816: function (e, t, n) {
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
    995181: function (e, t, n) {
      e.exports = {
        root: "root_c3b890",
        option: "option_c3b890",
        text: "text_c3b890",
        caret: "caret_c3b890",
      };
    },
  },
]);
//# sourceMappingURL=164024cbf74df090e51c.js.map
