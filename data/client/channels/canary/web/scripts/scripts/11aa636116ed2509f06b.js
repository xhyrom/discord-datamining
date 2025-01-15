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
          return Z;
        },
        Z: function () {
          return S;
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
        u = n(493773),
        d = n(110924),
        b = n(600164),
        m = n(313201),
        f = n(237617),
        h = n(572539),
        x = n(626135),
        g = n(63063),
        p = n(957115),
        _ = n(531578),
        j = n(981631),
        N = n(388032),
        C = n(369769);
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
          ratingConfigs: r,
          onChangeRating: a,
        } = e;
        return (0, l.jsx)(b.Z, {
          justify: b.Z.Justify.BETWEEN,
          align: b.Z.Align.CENTER,
          className: o()(C.ratingsSelector, t),
          children: (null != r ? r : k).map((e) => {
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
      function S(e) {
        let {
            modalType: t,
            header: n,
            body: a,
            problemTitle: i,
            problems: g,
            transitionState: k,
            ratingConfigs: S,
            feedbackProblems: E = [],
            otherKey: I,
            ratingsSelectorClassName: L,
            hideDontShowCheckbox: y,
            startRating: A = null,
            hideHelpDeskLink: B = !1,
            onSubmit: O,
            onClose: T,
          } = e,
          D = (0, d.Z)(g),
          [R, M] = r.useState(!1),
          [F, w] = r.useState(A),
          [H, G] = r.useState(null),
          [K, z] = r.useState(s().shuffle(g)),
          [P, U] = r.useState(""),
          W = (0, m.Dt)(),
          q = (0, f.Z)(F),
          J = (0, f.Z)(R),
          Q = (0, f.Z)(H),
          V = (0, f.Z)(O),
          X = (0, f.Z)(P),
          Y = null != H && E.includes(H);
        return (
          r.useEffect(() => {
            !s().isEqual(D, g) && z((0, p.B)(g, I));
          }, [g, D, I]),
          (0, u.Z)(
            () => (
              x.default.track(j.rMx.OPEN_MODAL, {
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
          ),
          (0, l.jsxs)(c.ModalRoot, {
            transitionState: k,
            className: C.__invalid_modalRoot,
            "aria-labelledby": W,
            children: [
              (0, l.jsxs)(c.ModalHeader, {
                separator: !1,
                className: C.headerContainer,
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
                    className: C.ratingBody,
                    children: a,
                  }),
                  Y
                    ? null
                    : (0, l.jsx)(Z, {
                        className: o()(C.emojis, L),
                        selectedRating: F,
                        onChangeRating: function (e) {
                          w(e), e === _.aZ.GOOD && T();
                        },
                        ratingConfigs: S,
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
                          options: K,
                          onClick: function (e) {
                            let { value: t } = e;
                            G(t), !E.includes(t) && T();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !E.includes(t);
                          },
                        }),
                      }),
                  Y
                    ? (0, l.jsxs)(c.FormItem, {
                        title: N.intl.string(N.t.h95hcn),
                        className: C.problemInfo,
                        children: [
                          (0, l.jsx)(c.TextArea, {
                            value: P,
                            maxLength: _.iF,
                            onChange: U,
                          }),
                          !B && (0, l.jsx)(v, {}),
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
                              G(null), U("");
                            },
                            children: N.intl.string(N.t["13/7kZ"]),
                          }),
                          (0, l.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: T,
                            children: N.intl.string(N.t.geKm7u),
                          }),
                        ],
                      })
                    : (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.INVERTED,
                            size: 18,
                            value: R,
                            onChange: () => M(!R),
                            children: (0, l.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              children: N.intl.string(N.t["5E9SBw"]),
                            }),
                          }),
                          null != F &&
                            F !== _.aZ.GOOD &&
                            (0, l.jsx)(c.Button, {
                              type: "submit",
                              size: c.Button.Sizes.SMALL,
                              onClick: T,
                              children: N.intl.string(N.t["5WxrcX"]),
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
        s = n(547803);
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
        m = n(190378),
        f = n(388032);
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
          header: f.intl.string(f.t.MP5lDg),
          body: f.intl.string(f.t["7Ct0Dg"]),
          problemTitle: f.intl.string(f.t.FJmoxM),
          problems: (0, u.Z)(),
          feedbackProblems: [g],
          onSubmit: function (e) {
            let { rating: r, problem: o, dontShowAgain: i, feedback: c } = e;
            if (
              (i && (0, s.Kw)(m.v.IN_APP_REPORTS_FEEDBACK),
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
                  (0, l.jsx)(e, { body: f.intl.string(f.t["d9+vQ0"]), ...t });
              });
          },
          otherKey: g,
          ...x,
        });
      }
    },
    369769: function (e, t, n) {
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
    547803: function (e, t, n) {
      e.exports = {
        root: "root_c3b890",
        option: "option_c3b890",
        text: "text_c3b890",
        caret: "caret_c3b890",
      };
    },
  },
]);
//# sourceMappingURL=11aa636116ed2509f06b.js.map
