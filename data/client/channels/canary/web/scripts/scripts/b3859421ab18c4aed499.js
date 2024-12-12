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
          return N;
        },
        Z: function () {
          return C;
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
        u = n(110924),
        d = n(600164),
        b = n(313201),
        m = n(237617),
        f = n(572539),
        _ = n(626135),
        h = n(63063),
        x = n(957115),
        g = n(531578),
        k = n(981631),
        p = n(388032),
        j = n(720816);
      let S = [
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
      function N(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: a,
          onChangeRating: i,
        } = e;
        return (0, l.jsx)(d.Z, {
          justify: d.Z.Justify.BETWEEN,
          align: d.Z.Align.CENTER,
          className: r()(j.ratingsSelector, t),
          children: (null != a ? a : S).map((e) => {
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
      function E() {
        return (0, l.jsx)(c.Text, {
          className: j.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: p.intl.format(p.t.ybi2tL, {
            helpdeskURL: h.Z.getSubmitRequestURL(),
          }),
        });
      }
      function C(e) {
        let {
            modalType: t,
            header: n,
            body: i,
            problemTitle: o,
            problems: h,
            transitionState: S,
            ratingConfigs: C,
            feedbackProblems: v = [],
            otherKey: Z,
            ratingsSelectorClassName: O,
            hideDontShowCheckbox: T,
            startRating: y = null,
            hideHelpDeskLink: A = !1,
            onSubmit: B,
            onClose: L,
          } = e,
          I = (0, u.Z)(h),
          [M, R] = a.useState(!1),
          [D, F] = a.useState(y),
          [H, w] = a.useState(null),
          [G, U] = a.useState(s().shuffle(h)),
          [z, P] = a.useState(""),
          Y = (0, b.Dt)(),
          K = (0, m.Z)(D),
          W = (0, m.Z)(M),
          Q = (0, m.Z)(H),
          q = (0, m.Z)(B),
          V = (0, m.Z)(z),
          J = null != H && v.includes(H);
        return (
          a.useEffect(() => {
            !s().isEqual(I, h) && U((0, x.B)(h, Z));
          }, [h, I, Z]),
          a.useEffect(
            () => (
              _.default.track(k.rMx.OPEN_MODAL, {
                type: t,
                source: "Feedback Modal",
              }),
              () => {
                q.current({
                  rating: K.current,
                  problem: Q.current,
                  dontShowAgain: W.current,
                  feedback: V.current,
                });
              }
            ),
            [],
          ),
          (0, l.jsxs)(c.ModalRoot, {
            transitionState: S,
            className: j.__invalid_modalRoot,
            "aria-labelledby": Y,
            children: [
              (0, l.jsxs)(c.ModalHeader, {
                separator: !1,
                className: j.headerContainer,
                children: [
                  (0, l.jsx)(c.Heading, {
                    id: Y,
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
                  J
                    ? null
                    : (0, l.jsx)(N, {
                        className: r()(j.emojis, O),
                        selectedRating: D,
                        onChangeRating: function (e) {
                          F(e), e === g.aZ.GOOD && L();
                        },
                        ratingConfigs: C,
                      }),
                ],
              }),
              (0, l.jsxs)(c.ModalContent, {
                className: j.__invalid_content,
                children: [
                  null == D || D === g.aZ.GOOD || J
                    ? null
                    : (0, l.jsx)(c.FormItem, {
                        title: o,
                        className: j.problemInfo,
                        children: (0, l.jsx)(f.Z, {
                          options: G,
                          onClick: function (e) {
                            let { value: t } = e;
                            w(t), !v.includes(t) && L();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !v.includes(t);
                          },
                        }),
                      }),
                  J
                    ? (0, l.jsxs)(c.FormItem, {
                        title: p.intl.string(p.t.h95hcn),
                        className: j.problemInfo,
                        children: [
                          (0, l.jsx)(c.TextArea, {
                            value: z,
                            maxLength: g.iF,
                            onChange: P,
                          }),
                          !A && (0, l.jsx)(E, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (J || !T) &&
                (0, l.jsx)(c.ModalFooter, {
                  className: j.footer,
                  direction: d.Z.Direction.HORIZONTAL,
                  children: J
                    ? (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              w(null), P("");
                            },
                            children: p.intl.string(p.t["13/7kZ"]),
                          }),
                          (0, l.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: L,
                            children: p.intl.string(p.t.geKm7u),
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
                              children: p.intl.string(p.t["5E9SBw"]),
                            }),
                          }),
                          null != D &&
                            D !== g.aZ.GOOD &&
                            (0, l.jsx)(c.Button, {
                              type: "submit",
                              size: c.Button.Sizes.SMALL,
                              onClick: L,
                              children: p.intl.string(p.t["5WxrcX"]),
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
        i = n(75124),
        r = n(481060),
        o = n(332664),
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
            o = null == t;
          (0, c.t)(t, i, a, o),
            !o &&
              (0, r.openModalLazy)(async () => {
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
//# sourceMappingURL=b3859421ab18c4aed499.js.map
