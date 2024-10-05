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
    388032: function (e, t, n) {
      n.r(t),
        n.d(t, {
          getAvailableLocales: function () {
            return i.u;
          },
          international: function () {
            return c;
          },
          intl: function () {
            return u;
          },
          t: function () {
            return c;
          },
          untranslated: function () {
            return c;
          },
        }),
        n(47120);
      var a = n(735250),
        r = n(470079),
        o = n(65084),
        l = n(302454),
        s = n.n(l),
        i = n(424395);
      let c = {},
        u = new o.IntlManager("en-US").withFormatters({
          format: (0, o.makeReactFormatter)({
            $_: () => "",
            $i: (e, t) => (0, a.jsx)("em", { children: e }, t),
            $b: (e, t) => (0, a.jsx)("strong", { children: e }, t),
            $del: (e, t) => (0, a.jsx)("del", { children: e }, t),
            $p: (e, t) => (0, a.jsx)("p", { children: e }, t),
            $code: (e, t) => (0, a.jsx)("code", { children: e }, t),
            $link: (e, t) => {
              let [a, ...o] = e,
                { Anchor: l } = n(756715),
                i = {};
              switch (typeof a) {
                case "string":
                  i.href = s().sanitizeUrl(a);
                  break;
                case "object":
                  var c;
                  (i.onClick =
                    null !== (c = a.onClick) && void 0 !== c ? c : a),
                    (i.onContextMenu = a.onContextMenu);
                  break;
                default:
                  i.onClick = a;
              }
              return (0, r.createElement)(l, { ...i, key: t }, o);
            },
          }),
          formatToPlainString: o.stringFormatter,
          formatToMarkdownString: o.markdownFormatter,
          formatToParts: o.astFormatter,
        });
    },
    144535: function (e, t, n) {
      n.d(t, {
        I: function () {
          return o;
        },
      });
      var a = n(65084),
        r = n(424395);
      let o = r.v
        ? function (e) {
            let { t } = n(388032);
            return (0, t[(0, a.runtimeHashMessageKey)(e)])("en-US");
          }
        : function (e) {
            return n(375964)[e];
          };
    },
    424395: function (e, t, n) {
      n.d(t, {
        u: function () {
          return r;
        },
        v: function () {
          return a;
        },
      });
      let a = n(139458).B || !1;
      function r() {
        return n(515297)
          .filter((e) => {
            let { enabled: t } = e;
            return t;
          })
          .map((e) => {
            let { code: t, name: n } = e;
            return { value: t, name: n, localizedName: t };
          })
          .sort((e, t) => {
            let { name: n } = e,
              { name: a } = t;
            return (
              (n = n.toLowerCase()),
              n < (a = a.toLowerCase()) ? -1 : n > a ? 1 : 0
            );
          });
      }
    },
    957115: function (e, t, n) {
      n.d(t, {
        B: function () {
          return o;
        },
      }),
        n(653041);
      var a = n(392711),
        r = n.n(a);
      let o = (e, t) => {
        let n = r().shuffle(e),
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
          return k;
        },
        Z: function () {
          return I;
        },
      }),
        n(47120);
      var a = n(735250),
        r = n(470079),
        o = n(120356),
        l = n.n(o),
        s = n(392711),
        i = n.n(s),
        c = n(481060),
        u = n(110924),
        d = n(600164),
        f = n(313201),
        m = n(237617),
        b = n(572539),
        _ = n(626135),
        h = n(63063),
        x = n(957115),
        p = n(871364),
        E = n(531578),
        g = n(981631),
        C = n(689938),
        j = n(214859);
      let N = [
        {
          className: j.emojiSad,
          rating: E.aZ.BAD,
          classNameSelected: j.selected,
        },
        {
          className: j.emojiNeutral,
          rating: E.aZ.NEUTRAL,
          classNameSelected: j.selected,
        },
        {
          className: j.emojiHappy,
          rating: E.aZ.GOOD,
          classNameSelected: j.selected,
        },
      ];
      function k(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: r,
          onChangeRating: o,
        } = e;
        return (0, a.jsx)(d.Z, {
          justify: d.Z.Justify.BETWEEN,
          align: d.Z.Align.CENTER,
          className: l()(j.ratingsSelector, t),
          children: (null != r ? r : N).map((e) => {
            let { rating: t, className: r, classNameSelected: s } = e;
            return (0, a.jsx)(
              c.Clickable,
              {
                onClick: () => o(t),
                "aria-label": t,
                children: (0, a.jsx)("div", {
                  className: l()(r, n === t ? s : null),
                }),
              },
              t,
            );
          }),
        });
      }
      function A() {
        return (0, a.jsx)(c.Text, {
          className: j.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: C.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: h.Z.getSubmitRequestURL(),
          }),
        });
      }
      function I(e) {
        let {
            modalType: t,
            header: n,
            body: o,
            problemTitle: s,
            problems: h,
            transitionState: N,
            ratingConfigs: I,
            feedbackProblems: S = [],
            otherKey: B,
            ratingsSelectorClassName: M,
            hideDontShowCheckbox: Z,
            startRating: L = null,
            onSubmit: O,
            onClose: v,
          } = e,
          D = (0, u.Z)(h),
          [T, R] = r.useState(!1),
          [F, y] = r.useState(L),
          [w, K] = r.useState(null),
          [P, U] = r.useState(i().shuffle(h)),
          [H, G] = r.useState(""),
          z = (0, f.Dt)(),
          $ = (0, m.Z)(F),
          W = (0, m.Z)(T),
          q = (0, m.Z)(w),
          V = (0, m.Z)(O),
          J = (0, m.Z)(H),
          Y = null != w && S.includes(w),
          { renderSkipButton: Q } = p.w.useExperiment({
            location: "FeedbackModal",
          });
        return (
          r.useEffect(() => {
            !i().isEqual(D, h) && U((0, x.B)(h, B));
          }, [h, D, B]),
          r.useEffect(
            () => (
              _.default.track(g.rMx.OPEN_MODAL, {
                type: t,
                source: "Feedback Modal",
              }),
              () => {
                V.current({
                  rating: $.current,
                  problem: q.current,
                  dontShowAgain: W.current,
                  feedback: J.current,
                });
              }
            ),
            [],
          ),
          (0, a.jsxs)(c.ModalRoot, {
            transitionState: N,
            className: j.__invalid_modalRoot,
            "aria-labelledby": z,
            children: [
              (0, a.jsxs)(c.ModalHeader, {
                separator: !1,
                className: j.headerContainer,
                children: [
                  (0, a.jsx)(c.Heading, {
                    id: z,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: n,
                  }),
                  (0, a.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: j.ratingBody,
                    children: o,
                  }),
                  Y
                    ? null
                    : (0, a.jsx)(k, {
                        className: l()(j.emojis, M),
                        selectedRating: F,
                        onChangeRating: function (e) {
                          y(e), e === E.aZ.GOOD && v();
                        },
                        ratingConfigs: I,
                      }),
                ],
              }),
              (0, a.jsxs)(c.ModalContent, {
                className: j.__invalid_content,
                children: [
                  null == F || F === E.aZ.GOOD || Y
                    ? null
                    : (0, a.jsx)(c.FormItem, {
                        title: s,
                        className: j.problemInfo,
                        children: (0, a.jsx)(b.Z, {
                          options: P,
                          onClick: function (e) {
                            let { value: t } = e;
                            K(t), !S.includes(t) && v();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !S.includes(t);
                          },
                        }),
                      }),
                  Y
                    ? (0, a.jsxs)(c.FormItem, {
                        title: C.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: j.problemInfo,
                        children: [
                          (0, a.jsx)(c.TextArea, {
                            value: H,
                            maxLength: E.iF,
                            onChange: G,
                          }),
                          (0, a.jsx)(A, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (Y || !Z) &&
                (0, a.jsx)(c.ModalFooter, {
                  className: j.footer,
                  direction: d.Z.Direction.HORIZONTAL,
                  children: Y
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              K(null), G("");
                            },
                            children: C.Z.Messages.BACK,
                          }),
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: v,
                            children: C.Z.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.INVERTED,
                            size: 18,
                            value: T,
                            onChange: () => R(!T),
                            children: (0, a.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              children: C.Z.Messages.DONT_SHOW_AGAIN,
                            }),
                          }),
                          Q &&
                            null != F &&
                            F !== E.aZ.GOOD &&
                            (0, a.jsx)(c.Button, {
                              type: "submit",
                              size: c.Button.Sizes.SMALL,
                              onClick: v,
                              children: C.Z.Messages.SKIP,
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
      var r = n(120356),
        o = n.n(r),
        l = n(481060),
        s = n(259580),
        i = n(20535);
      function c(e) {
        let {
          options: t,
          onClick: n,
          className: r,
          optionClassName: c,
          hideCaret: u,
        } = e;
        return (0, a.jsx)("div", {
          className: o()(i.root, r),
          children: t.map((e, t) =>
            (0, a.jsxs)(
              l.Clickable,
              {
                onClick: () => n(e),
                className: o()(i.option, c),
                children: [
                  (0, a.jsx)(l.Text, {
                    className: i.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == u ? void 0 : u(e)) &&
                    (0, a.jsx)(s.Z, {
                      className: i.caret,
                      direction: s.Z.Directions.RIGHT,
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
          return l;
        },
      });
      var a,
        r,
        o = n(689938);
      function l() {
        return [
          {
            label: o.Z.Messages.IAR_FEEDBACK_PROBLEM_COULD_NOT_FIND,
            code: 2,
            value: "I couldn't find what I was looking for",
          },
          {
            label: o.Z.Messages.IAR_FEEDBACK_PROBLEM_CONFUSING_LANGUAGE,
            code: 3,
            value: "I found the language confusing",
          },
          {
            label: o.Z.Messages.CALL_FEEDBACK_OPTION_OTHER,
            code: 1,
            value: "Other",
          },
        ];
      }
      ((a = r || (r = {})).COULD_NOT_FIND =
        "I couldn't find what I was looking for"),
        (a.CONFUSING_LANGUAGE = "I found the language confusing"),
        (a.OTHER = "Other");
    },
    559187: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var a = n(626135),
        r = n(981631);
      function o(e) {
        let {
          problem: t,
          feedback: n,
          reportType: o,
          reportId: l = null,
          rating: s = null,
          dontShowAgain: i,
        } = e;
        a.default.track(r.rMx.IAR_FEEDBACK_SUBMITTED, {
          reason: t,
          report_type: o,
          report_id: l,
          rating: s,
          feedback: n,
          dont_show_again: i,
        });
      }
    },
    442173: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var a = n(735250),
        r = n(470079),
        o = n(481060),
        l = n(144535),
        s = n(332664),
        i = n(142497),
        c = n(626135),
        u = n(798733),
        d = n(559187),
        f = n(981631),
        m = n(190378),
        b = n(689938);
      function _(e) {
        let { reportId: t, reportType: _, ...h } = e;
        r.useEffect(() => {
          c.default.track(f.rMx.IAR_FEEDBACK_MODAL_VIEWED, {
            report_id: t,
            report_type: _,
          });
        }, [t, _]);
        let x = (0, l.I)("CALL_FEEDBACK_OPTION_OTHER");
        return (0, a.jsx)(s.Z, {
          modalType: "in_app_report",
          header: b.Z.Messages.IAR_FEEDBACK_TITLE,
          body: b.Z.Messages.IAR_FEEDBACK_PROMPT,
          problemTitle: b.Z.Messages.CALL_FEEDBACK_ISSUE_SECTION_HEADER,
          problems: (0, u.Z)(),
          feedbackProblems: [x],
          onSubmit: function (e) {
            let { rating: r, problem: l, dontShowAgain: s, feedback: c } = e;
            if (
              (s && (0, i.Kw)(m.v.IN_APP_REPORTS_FEEDBACK),
              (0, d.Z)({
                rating: r,
                problem: l,
                feedback: c,
                reportId: t,
                reportType: _,
                dontShowAgain: s,
              }),
              null != r && null != l)
            )
              (0, o.openModalLazy)(async () => {
                let { default: e } = await n.e("14466").then(n.bind(n, 729328));
                return (t) =>
                  (0, a.jsx)(e, {
                    body: b.Z.Messages.CALL_FEEDBACK_CONFIRMATION,
                    ...t,
                  });
              });
          },
          otherKey: x,
          ...h,
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
    139458: function (e) {
      e.exports = { B: !1 };
    },
  },
]);
//# sourceMappingURL=7b4428d1ea0c3fc84da4.js.map
