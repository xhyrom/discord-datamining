"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87995"],
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
    957115: function (e, t, n) {
      n.d(t, {
        B: function () {
          return i;
        },
      }),
        n(653041);
      var l = n(392711),
        a = n.n(l);
      let i = (e, t) => {
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
          return E;
        },
        Z: function () {
          return v;
        },
      }),
        n(47120);
      var l = n(200651),
        a = n(192379),
        i = n(120356),
        o = n.n(i),
        r = n(392711),
        s = n.n(r),
        c = n(481060),
        u = n(110924),
        d = n(600164),
        b = n(313201),
        m = n(237617),
        f = n(572539),
        _ = n(626135),
        h = n(63063),
        k = n(957115),
        x = n(871364),
        g = n(531578),
        p = n(981631),
        S = n(388032),
        j = n(214859);
      let N = [
        {
          className: j.emojiSad,
          rating: g.aZ.BAD,
          classNameSelected: j.selected,
        },
        {
          className: j.emojiNeutral,
          rating: g.aZ.NEUTRAL,
          classNameSelected: j.selected,
        },
        {
          className: j.emojiHappy,
          rating: g.aZ.GOOD,
          classNameSelected: j.selected,
        },
      ];
      function E(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: a,
          onChangeRating: i,
        } = e;
        return (0, l.jsx)(d.Z, {
          justify: d.Z.Justify.BETWEEN,
          align: d.Z.Align.CENTER,
          className: o()(j.ratingsSelector, t),
          children: (null != a ? a : N).map((e) => {
            let { rating: t, className: a, classNameSelected: r } = e;
            return (0, l.jsx)(
              c.Clickable,
              {
                onClick: () => i(t),
                "aria-label": t,
                children: (0, l.jsx)("div", {
                  className: o()(a, n === t ? r : null),
                }),
              },
              t,
            );
          }),
        });
      }
      function C() {
        return (0, l.jsx)(c.Text, {
          className: j.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: S.intl.format(S.t.ybi2tL, {
            helpdeskURL: h.Z.getSubmitRequestURL(),
          }),
        });
      }
      function v(e) {
        let {
            modalType: t,
            header: n,
            body: i,
            problemTitle: r,
            problems: h,
            transitionState: N,
            ratingConfigs: v,
            feedbackProblems: Z = [],
            otherKey: O,
            ratingsSelectorClassName: B,
            hideDontShowCheckbox: T,
            startRating: y = null,
            hideHelpDeskLink: A = !1,
            onSubmit: L,
            onClose: M,
          } = e,
          I = (0, u.Z)(h),
          [R, D] = a.useState(!1),
          [F, H] = a.useState(y),
          [w, G] = a.useState(null),
          [U, z] = a.useState(s().shuffle(h)),
          [P, Y] = a.useState(""),
          K = (0, b.Dt)(),
          W = (0, m.Z)(F),
          Q = (0, m.Z)(R),
          q = (0, m.Z)(w),
          V = (0, m.Z)(L),
          J = (0, m.Z)(P),
          X = null != w && Z.includes(w),
          { renderSkipButton: $ } = x.w.useExperiment({
            location: "FeedbackModal",
          });
        return (
          a.useEffect(() => {
            !s().isEqual(I, h) && z((0, k.B)(h, O));
          }, [h, I, O]),
          a.useEffect(
            () => (
              _.default.track(p.rMx.OPEN_MODAL, {
                type: t,
                source: "Feedback Modal",
              }),
              () => {
                V.current({
                  rating: W.current,
                  problem: q.current,
                  dontShowAgain: Q.current,
                  feedback: J.current,
                });
              }
            ),
            [],
          ),
          (0, l.jsxs)(c.ModalRoot, {
            transitionState: N,
            className: j.__invalid_modalRoot,
            "aria-labelledby": K,
            children: [
              (0, l.jsxs)(c.ModalHeader, {
                separator: !1,
                className: j.headerContainer,
                children: [
                  (0, l.jsx)(c.Heading, {
                    id: K,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: n,
                  }),
                  (0, l.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: j.ratingBody,
                    children: i,
                  }),
                  X
                    ? null
                    : (0, l.jsx)(E, {
                        className: o()(j.emojis, B),
                        selectedRating: F,
                        onChangeRating: function (e) {
                          H(e), e === g.aZ.GOOD && M();
                        },
                        ratingConfigs: v,
                      }),
                ],
              }),
              (0, l.jsxs)(c.ModalContent, {
                className: j.__invalid_content,
                children: [
                  null == F || F === g.aZ.GOOD || X
                    ? null
                    : (0, l.jsx)(c.FormItem, {
                        title: r,
                        className: j.problemInfo,
                        children: (0, l.jsx)(f.Z, {
                          options: U,
                          onClick: function (e) {
                            let { value: t } = e;
                            G(t), !Z.includes(t) && M();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !Z.includes(t);
                          },
                        }),
                      }),
                  X
                    ? (0, l.jsxs)(c.FormItem, {
                        title: S.intl.string(S.t.h95hcn),
                        className: j.problemInfo,
                        children: [
                          (0, l.jsx)(c.TextArea, {
                            value: P,
                            maxLength: g.iF,
                            onChange: Y,
                          }),
                          !A && (0, l.jsx)(C, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (X || !T) &&
                (0, l.jsx)(c.ModalFooter, {
                  className: j.footer,
                  direction: d.Z.Direction.HORIZONTAL,
                  children: X
                    ? (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              G(null), Y("");
                            },
                            children: S.intl.string(S.t["13/7kZ"]),
                          }),
                          (0, l.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: M,
                            children: S.intl.string(S.t.geKm7u),
                          }),
                        ],
                      })
                    : (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.INVERTED,
                            size: 18,
                            value: R,
                            onChange: () => D(!R),
                            children: (0, l.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              children: S.intl.string(S.t["5E9SBw"]),
                            }),
                          }),
                          $ &&
                            null != F &&
                            F !== g.aZ.GOOD &&
                            (0, l.jsx)(c.Button, {
                              type: "submit",
                              size: c.Button.Sizes.SMALL,
                              onClick: M,
                              children: S.intl.string(S.t["5WxrcX"]),
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
      var a = n(120356),
        i = n.n(a),
        o = n(481060),
        r = n(259580),
        s = n(20535);
      function c(e) {
        let {
          options: t,
          onClick: n,
          className: a,
          optionClassName: c,
          hideCaret: u,
        } = e;
        return (0, l.jsx)("div", {
          className: i()(s.root, a),
          children: t.map((e, t) =>
            (0, l.jsxs)(
              o.Clickable,
              {
                onClick: () => n(e),
                className: i()(s.option, c),
                children: [
                  (0, l.jsx)(o.Text, {
                    className: s.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == u ? void 0 : u(e)) &&
                    (0, l.jsx)(r.Z, {
                      className: s.caret,
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
    869031: function (e, t, n) {
      n.d(t, {
        nZ: function () {
          return a;
        },
      });
      let l = (0, n(818083).B)({
        kind: "user",
        id: "2024-10_block_user_feedback",
        label: "Block User Feedback Experiment",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable Block User Feedback Survey",
            config: { enabled: !0 },
          },
        ],
      });
      function a(e) {
        let { enabled: t } = l.getCurrentConfig(
          { location: e },
          { autoTrackExposure: !0 },
        );
        return t;
      }
    },
    900735: function (e, t, n) {
      n.d(t, {
        S: function () {
          return u;
        },
        t: function () {
          return d;
        },
      });
      var l = n(699516),
        a = n(626135),
        i = n(70956),
        o = n(869031),
        r = n(981631);
      let s = i.Z.Millis.WEEK,
        c = i.Z.Millis.DAYS_30,
        u = () => {
          if (!(0, o.nZ)("block_user_feedback_utils") || Math.random() >= 0.1)
            return !1;
          let e = l.Z.getSinces();
          return Object.keys(e).some((t) => {
            let n = Date.now() - Date.parse(e[t]);
            return l.Z.isBlocked(t) && n > s && n < c;
          });
        },
        d = (e, t, n, l) => {
          a.default.track(r.rMx.BLOCK_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: l,
          });
        };
    },
    987562: function (e, t, n) {
      n.d(t, {
        CE: function () {
          return c;
        },
        F5: function () {
          return o;
        },
        TL: function () {
          return s;
        },
        YA: function () {
          return i;
        },
      });
      var l,
        a,
        i,
        o,
        r = n(388032);
      function s() {
        return [
          { value: "too_many_notifications", label: r.intl.string(r.t.bQHhT0) },
          { value: "temporary_break", label: r.intl.string(r.t.OuPkvL) },
          { value: "annoying", label: r.intl.string(r.t["3kmAMD"]) },
          { value: "unsafe", label: r.intl.string(r.t.nmW7jI) },
          { value: "spam", label: r.intl.string(r.t.cCPYjo) },
          { value: "other", label: r.intl.string(r.t["7ZIIJy"]) },
        ];
      }
      function c() {
        return [
          { value: "confusion", label: r.intl.string(r.t["64Oph4"]) },
          {
            value: "does_not_achieve_wants",
            label: r.intl.string(r.t["wH5R/v"]),
          },
          { value: "hard_to_access", label: r.intl.string(r.t["4uZBRk"]) },
          { value: "something_else", label: r.intl.string(r.t.YicFbG) },
        ];
      }
      ((l = i || (i = {})).TOO_MANY_NOTIFICATIONS = "too_many_notifications"),
        (l.TEMPORARY_BREAK = "temporary_break"),
        (l.ANNOYING = "annoying"),
        (l.UNSAFE = "unsafe"),
        (l.SPAM = "spam"),
        (l.OTHER = "other"),
        ((a = o || (o = {})).CONFUSION = "confusion"),
        (a.DOES_NOT_ACHIEVE_WANTS = "does_not_achieve_wants"),
        (a.HARD_TO_ACCESS = "hard_to_access"),
        (a.SOMETHING_ELSE = "something_else");
    },
    180970: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var l = n(200651),
        a = n(192379),
        i = n(75124),
        o = n(481060),
        r = n(332664),
        s = n(626135),
        c = n(900735),
        u = n(987562),
        d = n(981631),
        b = n(388032);
      function m(e) {
        let { onClose: t, transitionState: m } = e,
          f = (0, i.Z)(u.CE);
        a.useEffect(() => {
          s.default.track(d.rMx.OPEN_MODAL, { type: "Block User Feedback" });
        }, []);
        let _ = a.useCallback((e) => {
          let { rating: t, problem: a, feedback: i } = e,
            r = null == t;
          (0, c.t)(t, i, a, r),
            !r &&
              (0, o.openModalLazy)(async () => {
                let { default: e } = await n.e("14466").then(n.bind(n, 729328));
                return (t) =>
                  (0, l.jsx)(e, { body: b.intl.string(b.t["d9+vQ0"]), ...t });
              });
        }, []);
        return (0, l.jsx)(r.Z, {
          modalType: "block_user",
          header: b.intl.string(b.t["+2qQAQ"]),
          body: b.intl.string(b.t["+0Rsvb"]),
          problemTitle: b.intl.string(b.t.TXomWV),
          problems: f,
          feedbackProblems: [u.F5.SOMETHING_ELSE],
          onSubmit: _,
          onClose: t,
          transitionState: m,
          otherKey: u.F5.SOMETHING_ELSE,
          hideHelpDeskLink: !0,
          hideDontShowCheckbox: !0,
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
//# sourceMappingURL=98580a66c06ed262e04c.js.map
