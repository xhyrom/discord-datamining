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
          return o;
        },
      });
      var l = n(436772);
      let o = function (e) {
        let { intl: t, t: o } = n(388032),
          a = o[(0, l.runtimeHashMessageKey)(e)],
          r = t.currentLocale;
        t.currentLocale = "en-US";
        let i = t.string(a);
        return (t.currentLocale = r), i;
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
        o = n.n(l);
      let a = (e, t) => {
        let n = o().shuffle(e),
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
          return S;
        },
        Z: function () {
          return Z;
        },
      }),
        n(47120);
      var l = n(200651),
        o = n(192379),
        a = n(120356),
        r = n.n(a),
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
        p = n(957115),
        g = n(871364),
        _ = n(531578),
        j = n(981631),
        k = n(388032),
        N = n(214859);
      let C = [
        {
          className: N.emojiSad,
          rating: _.aZ.BAD,
          classNameSelected: N.selected,
        },
        {
          className: N.emojiNeutral,
          rating: _.aZ.NEUTRAL,
          classNameSelected: N.selected,
        },
        {
          className: N.emojiHappy,
          rating: _.aZ.GOOD,
          classNameSelected: N.selected,
        },
      ];
      function S(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: o,
          onChangeRating: a,
        } = e;
        return (0, l.jsx)(d.Z, {
          justify: d.Z.Justify.BETWEEN,
          align: d.Z.Align.CENTER,
          className: r()(N.ratingsSelector, t),
          children: (null != o ? o : C).map((e) => {
            let { rating: t, className: o, classNameSelected: i } = e;
            return (0, l.jsx)(
              c.Clickable,
              {
                onClick: () => a(t),
                "aria-label": t,
                children: (0, l.jsx)("div", {
                  className: r()(o, n === t ? i : null),
                }),
              },
              t,
            );
          }),
        });
      }
      function E() {
        return (0, l.jsx)(c.Text, {
          className: N.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: k.intl.format(k.t.ybi2tL, {
            helpdeskURL: x.Z.getSubmitRequestURL(),
          }),
        });
      }
      function Z(e) {
        let {
            modalType: t,
            header: n,
            body: a,
            problemTitle: i,
            problems: x,
            transitionState: C,
            ratingConfigs: Z,
            feedbackProblems: v = [],
            otherKey: I,
            ratingsSelectorClassName: L,
            hideDontShowCheckbox: B,
            startRating: y = null,
            hideHelpDeskLink: A = !1,
            onSubmit: O,
            onClose: T,
          } = e,
          D = (0, u.Z)(x),
          [M, R] = o.useState(!1),
          [F, w] = o.useState(y),
          [H, G] = o.useState(null),
          [K, z] = o.useState(s().shuffle(x)),
          [P, U] = o.useState(""),
          W = (0, b.Dt)(),
          q = (0, f.Z)(F),
          J = (0, f.Z)(M),
          Q = (0, f.Z)(H),
          V = (0, f.Z)(O),
          X = (0, f.Z)(P),
          Y = null != H && v.includes(H),
          { renderSkipButton: $ } = g.w.useExperiment({
            location: "FeedbackModal",
          });
        return (
          o.useEffect(() => {
            !s().isEqual(D, x) && z((0, p.B)(x, I));
          }, [x, D, I]),
          o.useEffect(
            () => (
              h.default.track(j.rMx.OPEN_MODAL, {
                type: t,
                source: "Feedback Modal",
              }),
              () => {
                V.current({
                  rating: q.current,
                  problem: Q.current,
                  dontShowAgain: J.current,
                  feedback: X.current,
                });
              }
            ),
            [],
          ),
          (0, l.jsxs)(c.ModalRoot, {
            transitionState: C,
            className: N.__invalid_modalRoot,
            "aria-labelledby": W,
            children: [
              (0, l.jsxs)(c.ModalHeader, {
                separator: !1,
                className: N.headerContainer,
                children: [
                  (0, l.jsx)(c.Heading, {
                    id: W,
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
                  Y
                    ? null
                    : (0, l.jsx)(S, {
                        className: r()(N.emojis, L),
                        selectedRating: F,
                        onChangeRating: function (e) {
                          w(e), e === _.aZ.GOOD && T();
                        },
                        ratingConfigs: Z,
                      }),
                ],
              }),
              (0, l.jsxs)(c.ModalContent, {
                className: N.__invalid_content,
                children: [
                  null == F || F === _.aZ.GOOD || Y
                    ? null
                    : (0, l.jsx)(c.FormItem, {
                        title: i,
                        className: N.problemInfo,
                        children: (0, l.jsx)(m.Z, {
                          options: K,
                          onClick: function (e) {
                            let { value: t } = e;
                            G(t), !v.includes(t) && T();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !v.includes(t);
                          },
                        }),
                      }),
                  Y
                    ? (0, l.jsxs)(c.FormItem, {
                        title: k.intl.string(k.t.h95hcn),
                        className: N.problemInfo,
                        children: [
                          (0, l.jsx)(c.TextArea, {
                            value: P,
                            maxLength: _.iF,
                            onChange: U,
                          }),
                          !A && (0, l.jsx)(E, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (Y || !B) &&
                (0, l.jsx)(c.ModalFooter, {
                  className: N.footer,
                  direction: d.Z.Direction.HORIZONTAL,
                  children: Y
                    ? (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              G(null), U("");
                            },
                            children: k.intl.string(k.t["13/7kZ"]),
                          }),
                          (0, l.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: T,
                            children: k.intl.string(k.t.geKm7u),
                          }),
                        ],
                      })
                    : (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.INVERTED,
                            size: 18,
                            value: M,
                            onChange: () => R(!M),
                            children: (0, l.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              children: k.intl.string(k.t["5E9SBw"]),
                            }),
                          }),
                          $ &&
                            null != F &&
                            F !== _.aZ.GOOD &&
                            (0, l.jsx)(c.Button, {
                              type: "submit",
                              size: c.Button.Sizes.SMALL,
                              onClick: T,
                              children: k.intl.string(k.t["5WxrcX"]),
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
          return l;
        },
      });
      let l = (0, n(818083).B)({
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
      var l = n(200651);
      n(192379);
      var o = n(120356),
        a = n.n(o),
        r = n(481060),
        i = n(259580),
        s = n(20535);
      function c(e) {
        let {
          options: t,
          onClick: n,
          className: o,
          optionClassName: c,
          hideCaret: u,
        } = e;
        return (0, l.jsx)("div", {
          className: a()(s.root, o),
          children: t.map((e, t) =>
            (0, l.jsxs)(
              r.Clickable,
              {
                onClick: () => n(e),
                className: a()(s.option, c),
                children: [
                  (0, l.jsx)(r.Text, {
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
          return r;
        },
      });
      var l,
        o,
        a = n(388032);
      function r() {
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
      ((l = o || (o = {})).COULD_NOT_FIND =
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
        o = n(981631);
      function a(e) {
        let {
          problem: t,
          feedback: n,
          reportType: a,
          reportId: r = null,
          rating: i = null,
          dontShowAgain: s,
        } = e;
        l.default.track(o.rMx.IAR_FEEDBACK_SUBMITTED, {
          reason: t,
          report_type: a,
          report_id: r,
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
        o = n(192379),
        a = n(481060),
        r = n(144535),
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
        o.useEffect(() => {
          c.default.track(b.rMx.IAR_FEEDBACK_MODAL_VIEWED, {
            report_id: t,
            report_type: h,
          });
        }, [t, h]);
        let p = (0, r.I)("CALL_FEEDBACK_OPTION_OTHER");
        return (0, l.jsx)(i.Z, {
          modalType: "in_app_report",
          header: m.intl.string(m.t.MP5lDg),
          body: m.intl.string(m.t["7Ct0Dg"]),
          problemTitle: m.intl.string(m.t.FJmoxM),
          problems: (0, u.Z)(),
          feedbackProblems: [p],
          onSubmit: function (e) {
            let { rating: o, problem: r, dontShowAgain: i, feedback: c } = e;
            if (
              (i && (0, s.Kw)(f.v.IN_APP_REPORTS_FEEDBACK),
              (0, d.Z)({
                rating: o,
                problem: r,
                feedback: c,
                reportId: t,
                reportType: h,
                dontShowAgain: i,
              }),
              null != o && null != r)
            )
              (0, a.openModalLazy)(async () => {
                let { default: e } = await n.e("14466").then(n.bind(n, 729328));
                return (t) =>
                  (0, l.jsx)(e, { body: m.intl.string(m.t["d9+vQ0"]), ...t });
              });
          },
          otherKey: p,
          ...x,
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
//# sourceMappingURL=32632d9ba121b4d1ed0e.js.map
