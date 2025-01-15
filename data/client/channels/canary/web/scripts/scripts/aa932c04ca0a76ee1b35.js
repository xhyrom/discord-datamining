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
        r = n.n(i),
        o = n(392711),
        s = n.n(o),
        c = n(481060),
        u = n(493773),
        d = n(110924),
        b = n(600164),
        m = n(313201),
        f = n(237617),
        _ = n(572539),
        h = n(626135),
        x = n(63063),
        g = n(957115),
        k = n(531578),
        p = n(981631),
        j = n(388032),
        S = n(369769);
      let N = [
        {
          className: S.emojiSad,
          rating: k.aZ.BAD,
          classNameSelected: S.selected,
        },
        {
          className: S.emojiNeutral,
          rating: k.aZ.NEUTRAL,
          classNameSelected: S.selected,
        },
        {
          className: S.emojiHappy,
          rating: k.aZ.GOOD,
          classNameSelected: S.selected,
        },
      ];
      function E(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: a,
          onChangeRating: i,
        } = e;
        return (0, l.jsx)(b.Z, {
          justify: b.Z.Justify.BETWEEN,
          align: b.Z.Align.CENTER,
          className: r()(S.ratingsSelector, t),
          children: (null != a ? a : N).map((e) => {
            let { rating: t, className: a, classNameSelected: o } = e;
            return (0, l.jsx)(
              c.Clickable,
              {
                onClick: () => i(t),
                "aria-label": t,
                children: (0, l.jsx)("div", {
                  className: r()(a, n === t ? o : null),
                }),
              },
              t,
            );
          }),
        });
      }
      function C() {
        return (0, l.jsx)(c.Text, {
          className: S.helpdeskLink,
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
            body: i,
            problemTitle: o,
            problems: x,
            transitionState: N,
            ratingConfigs: v,
            feedbackProblems: Z = [],
            otherKey: O,
            ratingsSelectorClassName: T,
            hideDontShowCheckbox: y,
            startRating: A = null,
            hideHelpDeskLink: B = !1,
            onSubmit: L,
            onClose: I,
          } = e,
          M = (0, d.Z)(x),
          [R, D] = a.useState(!1),
          [F, H] = a.useState(A),
          [w, G] = a.useState(null),
          [U, z] = a.useState(s().shuffle(x)),
          [P, Y] = a.useState(""),
          K = (0, m.Dt)(),
          W = (0, f.Z)(F),
          Q = (0, f.Z)(R),
          q = (0, f.Z)(w),
          V = (0, f.Z)(L),
          J = (0, f.Z)(P),
          X = null != w && Z.includes(w);
        return (
          a.useEffect(() => {
            !s().isEqual(M, x) && z((0, g.B)(x, O));
          }, [x, M, O]),
          (0, u.Z)(
            () => (
              h.default.track(p.rMx.OPEN_MODAL, {
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
          ),
          (0, l.jsxs)(c.ModalRoot, {
            transitionState: N,
            className: S.__invalid_modalRoot,
            "aria-labelledby": K,
            children: [
              (0, l.jsxs)(c.ModalHeader, {
                separator: !1,
                className: S.headerContainer,
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
                    className: S.ratingBody,
                    children: i,
                  }),
                  X
                    ? null
                    : (0, l.jsx)(E, {
                        className: r()(S.emojis, T),
                        selectedRating: F,
                        onChangeRating: function (e) {
                          H(e), e === k.aZ.GOOD && I();
                        },
                        ratingConfigs: v,
                      }),
                ],
              }),
              (0, l.jsxs)(c.ModalContent, {
                className: S.__invalid_content,
                children: [
                  null == F || F === k.aZ.GOOD || X
                    ? null
                    : (0, l.jsx)(c.FormItem, {
                        title: o,
                        className: S.problemInfo,
                        children: (0, l.jsx)(_.Z, {
                          options: U,
                          onClick: function (e) {
                            let { value: t } = e;
                            G(t), !Z.includes(t) && I();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !Z.includes(t);
                          },
                        }),
                      }),
                  X
                    ? (0, l.jsxs)(c.FormItem, {
                        title: j.intl.string(j.t.h95hcn),
                        className: S.problemInfo,
                        children: [
                          (0, l.jsx)(c.TextArea, {
                            value: P,
                            maxLength: k.iF,
                            onChange: Y,
                          }),
                          !B && (0, l.jsx)(C, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (X || !y) &&
                (0, l.jsx)(c.ModalFooter, {
                  className: S.footer,
                  direction: b.Z.Direction.HORIZONTAL,
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
                            children: j.intl.string(j.t["13/7kZ"]),
                          }),
                          (0, l.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: I,
                            children: j.intl.string(j.t.geKm7u),
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
                              children: j.intl.string(j.t["5E9SBw"]),
                            }),
                          }),
                          null != F &&
                            F !== k.aZ.GOOD &&
                            (0, l.jsx)(c.Button, {
                              type: "submit",
                              size: c.Button.Sizes.SMALL,
                              onClick: I,
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
      var a = n(120356),
        i = n.n(a),
        r = n(481060),
        o = n(259580),
        s = n(547803);
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
              r.Clickable,
              {
                onClick: () => n(e),
                className: i()(s.option, c),
                children: [
                  (0, l.jsx)(r.Text, {
                    className: s.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == u ? void 0 : u(e)) &&
                    (0, l.jsx)(o.Z, {
                      className: s.caret,
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
        r = n(869031),
        o = n(981631);
      let s = i.Z.Millis.WEEK,
        c = i.Z.Millis.DAYS_30,
        u = () => {
          if (!(0, r.nZ)("block_user_feedback_utils")) return !1;
          let e = l.Z.getSinces();
          return Object.keys(e).some((t) => {
            let n = Date.now() - Date.parse(e[t]);
            return l.Z.isBlocked(t) && n > s && n < c;
          });
        },
        d = (e, t, n, l) => {
          a.default.track(o.rMx.BLOCK_USER_FEEDBACK_SUBMITTED, {
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
          return r;
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
        r,
        o = n(388032);
      function s() {
        return [
          { value: "too_many_notifications", label: o.intl.string(o.t.bQHhT0) },
          { value: "temporary_break", label: o.intl.string(o.t.OuPkvL) },
          { value: "annoying", label: o.intl.string(o.t["3kmAMD"]) },
          { value: "unsafe", label: o.intl.string(o.t.nmW7jI) },
          { value: "spam", label: o.intl.string(o.t.cCPYjo) },
          { value: "other", label: o.intl.string(o.t["7ZIIJy"]) },
        ];
      }
      function c() {
        return [
          { value: "confusion", label: o.intl.string(o.t["64Oph4"]) },
          {
            value: "does_not_achieve_wants",
            label: o.intl.string(o.t["wH5R/v"]),
          },
          { value: "hard_to_access", label: o.intl.string(o.t["4uZBRk"]) },
          { value: "something_else", label: o.intl.string(o.t.YicFbG) },
        ];
      }
      ((l = i || (i = {})).TOO_MANY_NOTIFICATIONS = "too_many_notifications"),
        (l.TEMPORARY_BREAK = "temporary_break"),
        (l.ANNOYING = "annoying"),
        (l.UNSAFE = "unsafe"),
        (l.SPAM = "spam"),
        (l.OTHER = "other"),
        ((a = r || (r = {})).CONFUSION = "confusion"),
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
        i = n(481060),
        r = n(211266),
        o = n(332664),
        s = n(626135),
        c = n(900735),
        u = n(987562),
        d = n(981631),
        b = n(388032);
      function m(e) {
        let { onClose: t, transitionState: m } = e,
          f = (0, r.Z)(u.CE);
        a.useEffect(() => {
          s.default.track(d.rMx.OPEN_MODAL, { type: "Block User Feedback" });
        }, []);
        let _ = a.useCallback((e) => {
          let { rating: t, problem: a, feedback: r } = e,
            o = null == t;
          (0, c.t)(t, r, a, o),
            !o &&
              (0, i.openModalLazy)(async () => {
                let { default: e } = await n.e("14466").then(n.bind(n, 729328));
                return (t) =>
                  (0, l.jsx)(e, { body: b.intl.string(b.t["d9+vQ0"]), ...t });
              });
        }, []);
        return (0, l.jsx)(o.Z, {
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
//# sourceMappingURL=aa932c04ca0a76ee1b35.js.map
