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
          return a;
        },
      });
      var l = n(969090);
      let a = function (e) {
        let { intl: t, t: a } = n(388032),
          o = a[(0, l.runtimeHashMessageKey)(e)],
          r = t.currentLocale;
        t.currentLocale = "en-US";
        let i = t.string(o);
        return (t.currentLocale = r), i;
      };
    },
    957115: function (e, t, n) {
      n.d(t, {
        B: function () {
          return o;
        },
      }),
        n(653041);
      var l = n(392711),
        a = n.n(l);
      let o = (e, t) => {
        let n = a().shuffle(e),
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
          return Z;
        },
        Z: function () {
          return E;
        },
      }),
        n(47120);
      var l = n(200651),
        a = n(192379),
        o = n(120356),
        r = n.n(o),
        i = n(392711),
        s = n.n(i),
        c = n(481060),
        u = n(493773),
        d = n(110924),
        b = n(600164),
        f = n(313201),
        m = n(237617),
        h = n(572539),
        x = n(626135),
        g = n(63063),
        p = n(957115),
        _ = n(531578),
        j = n(981631),
        N = n(388032),
        C = n(720816);
      let k = [
        {
          className: C.emojiSad,
          rating: _.aZ.BAD,
          classNameSelected: C.selected,
        },
        {
          className: C.emojiNeutral,
          rating: _.aZ.NEUTRAL,
          classNameSelected: C.selected,
        },
        {
          className: C.emojiHappy,
          rating: _.aZ.GOOD,
          classNameSelected: C.selected,
        },
      ];
      function Z(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: a,
          onChangeRating: o,
        } = e;
        return (0, l.jsx)(b.Z, {
          justify: b.Z.Justify.BETWEEN,
          align: b.Z.Align.CENTER,
          className: r()(C.ratingsSelector, t),
          children: (null != a ? a : k).map((e) => {
            let { rating: t, className: a, classNameSelected: i } = e;
            return (0, l.jsx)(
              c.Clickable,
              {
                onClick: () => o(t),
                "aria-label": t,
                children: (0, l.jsx)("div", {
                  className: r()(a, n === t ? i : null),
                }),
              },
              t,
            );
          }),
        });
      }
      function v() {
        return (0, l.jsx)(c.Text, {
          className: C.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: N.intl.format(N.t.ybi2tL, {
            helpdeskURL: g.Z.getSubmitRequestURL(),
          }),
        });
      }
      function E(e) {
        let {
            modalType: t,
            header: n,
            body: o,
            problemTitle: i,
            problems: g,
            transitionState: k,
            ratingConfigs: E,
            feedbackProblems: I = [],
            otherKey: S,
            ratingsSelectorClassName: L,
            hideDontShowCheckbox: y,
            startRating: A = null,
            hideHelpDeskLink: T = !1,
            onSubmit: B,
            onClose: O,
          } = e,
          D = (0, d.Z)(g),
          [R, M] = a.useState(!1),
          [F, w] = a.useState(A),
          [H, K] = a.useState(null),
          [G, P] = a.useState(s().shuffle(g)),
          [U, z] = a.useState(""),
          q = (0, f.Dt)(),
          J = (0, m.Z)(F),
          Q = (0, m.Z)(R),
          V = (0, m.Z)(H),
          W = (0, m.Z)(B),
          X = (0, m.Z)(U),
          Y = null != H && I.includes(H);
        return (
          a.useEffect(() => {
            !s().isEqual(D, g) && P((0, p.B)(g, S));
          }, [g, D, S]),
          (0, u.Z)(
            () => (
              x.default.track(j.rMx.OPEN_MODAL, {
                type: t,
                source: "Feedback Modal",
              }),
              () => {
                W.current({
                  rating: J.current,
                  problem: V.current,
                  dontShowAgain: Q.current,
                  feedback: X.current,
                });
              }
            ),
          ),
          (0, l.jsxs)(c.ModalRoot, {
            transitionState: k,
            className: C.__invalid_modalRoot,
            "aria-labelledby": q,
            children: [
              (0, l.jsxs)(c.ModalHeader, {
                separator: !1,
                className: C.headerContainer,
                children: [
                  (0, l.jsx)(c.Heading, {
                    id: q,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: n,
                  }),
                  (0, l.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: C.ratingBody,
                    children: o,
                  }),
                  Y
                    ? null
                    : (0, l.jsx)(Z, {
                        className: r()(C.emojis, L),
                        selectedRating: F,
                        onChangeRating: function (e) {
                          w(e), e === _.aZ.GOOD && O();
                        },
                        ratingConfigs: E,
                      }),
                ],
              }),
              (0, l.jsxs)(c.ModalContent, {
                className: C.__invalid_content,
                children: [
                  null == F || F === _.aZ.GOOD || Y
                    ? null
                    : (0, l.jsx)(c.FormItem, {
                        title: i,
                        className: C.problemInfo,
                        children: (0, l.jsx)(h.Z, {
                          options: G,
                          onClick: function (e) {
                            let { value: t } = e;
                            K(t), !I.includes(t) && O();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !I.includes(t);
                          },
                        }),
                      }),
                  Y
                    ? (0, l.jsxs)(c.FormItem, {
                        title: N.intl.string(N.t.h95hcn),
                        className: C.problemInfo,
                        children: [
                          (0, l.jsx)(c.TextArea, {
                            value: U,
                            maxLength: _.iF,
                            onChange: z,
                          }),
                          !T && (0, l.jsx)(v, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (Y || !y) &&
                (0, l.jsx)(c.ModalFooter, {
                  className: C.footer,
                  direction: b.Z.Direction.HORIZONTAL,
                  children: Y
                    ? (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              K(null), z("");
                            },
                            children: N.intl.string(N.t["13/7kZ"]),
                          }),
                          (0, l.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: O,
                            children: N.intl.string(N.t.geKm7u),
                          }),
                        ],
                      })
                    : (0, l.jsx)(c.Checkbox, {
                        type: c.Checkbox.Types.INVERTED,
                        size: 18,
                        value: R,
                        onChange: () => M(!R),
                        children: (0, l.jsx)(c.Text, {
                          variant: "text-sm/normal",
                          children: N.intl.string(N.t["5E9SBw"]),
                        }),
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
      var a = n(120356),
        o = n.n(a),
        r = n(481060),
        i = n(259580),
        s = n(995181);
      function c(e) {
        let {
          options: t,
          onClick: n,
          className: a,
          optionClassName: c,
          hideCaret: u,
        } = e;
        return (0, l.jsx)("div", {
          className: o()(s.root, a),
          children: t.map((e, t) =>
            (0, l.jsxs)(
              r.Clickable,
              {
                onClick: () => n(e),
                className: o()(s.option, c),
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
        a,
        o = n(388032);
      function r() {
        return [
          {
            label: o.intl.string(o.t.cigGCQ),
            code: 2,
            value: "I couldn't find what I was looking for",
          },
          {
            label: o.intl.string(o.t.ZyXA0t),
            code: 3,
            value: "I found the language confusing",
          },
          { label: o.intl.string(o.t["emlT9/"]), code: 1, value: "Other" },
        ];
      }
      ((l = a || (a = {})).COULD_NOT_FIND =
        "I couldn't find what I was looking for"),
        (l.CONFUSING_LANGUAGE = "I found the language confusing"),
        (l.OTHER = "Other");
    },
    559187: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var l = n(626135),
        a = n(981631);
      function o(e) {
        let {
          problem: t,
          feedback: n,
          reportType: o,
          reportId: r = null,
          rating: i = null,
          dontShowAgain: s,
        } = e;
        l.default.track(a.rMx.IAR_FEEDBACK_SUBMITTED, {
          reason: t,
          report_type: o,
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
        a = n(192379),
        o = n(481060),
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
        a.useEffect(() => {
          c.default.track(b.rMx.IAR_FEEDBACK_MODAL_VIEWED, {
            report_id: t,
            report_type: h,
          });
        }, [t, h]);
        let g = (0, r.I)("CALL_FEEDBACK_OPTION_OTHER");
        return (0, l.jsx)(i.Z, {
          modalType: "in_app_report",
          header: m.intl.string(m.t.MP5lDg),
          body: m.intl.string(m.t["7Ct0Dg"]),
          problemTitle: m.intl.string(m.t.FJmoxM),
          problems: (0, u.Z)(),
          feedbackProblems: [g],
          onSubmit: function (e) {
            let { rating: a, problem: r, dontShowAgain: i, feedback: c } = e;
            if (
              (i && (0, s.Kw)(f.v.IN_APP_REPORTS_FEEDBACK),
              (0, d.Z)({
                rating: a,
                problem: r,
                feedback: c,
                reportId: t,
                reportType: h,
                dontShowAgain: i,
              }),
              null != a && null != r)
            )
              (0, o.openModalLazy)(async () => {
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
//# sourceMappingURL=46d4ce6b5181591fc5e1.js.map
