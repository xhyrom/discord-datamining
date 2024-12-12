"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["11495"],
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
          return T;
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
        x = n(572539),
        f = n(626135),
        C = n(63063),
        h = n(957115),
        N = n(531578),
        _ = n(981631),
        g = n(388032),
        j = n(720816);
      let p = [
        {
          className: j.emojiSad,
          rating: N.aZ.BAD,
          classNameSelected: j.selected,
        },
        {
          className: j.emojiNeutral,
          rating: N.aZ.NEUTRAL,
          classNameSelected: j.selected,
        },
        {
          className: j.emojiHappy,
          rating: N.aZ.GOOD,
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
          className: r()(j.ratingsSelector, t),
          children: (null != a ? a : p).map((e) => {
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
      function O() {
        return (0, l.jsx)(c.Text, {
          className: j.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: g.intl.format(g.t.ybi2tL, {
            helpdeskURL: C.Z.getSubmitRequestURL(),
          }),
        });
      }
      function T(e) {
        let {
            modalType: t,
            header: n,
            body: i,
            problemTitle: o,
            problems: C,
            transitionState: p,
            ratingConfigs: T,
            feedbackProblems: A = [],
            otherKey: k,
            ratingsSelectorClassName: B,
            hideDontShowCheckbox: R,
            startRating: D = null,
            hideHelpDeskLink: v = !1,
            onSubmit: I,
            onClose: L,
          } = e,
          S = (0, u.Z)(C),
          [Z, y] = a.useState(!1),
          [G, U] = a.useState(D),
          [K, F] = a.useState(null),
          [M, H] = a.useState(s().shuffle(C)),
          [w, z] = a.useState(""),
          P = (0, b.Dt)(),
          V = (0, m.Z)(G),
          Y = (0, m.Z)(Z),
          q = (0, m.Z)(K),
          W = (0, m.Z)(I),
          X = (0, m.Z)(w),
          J = null != K && A.includes(K);
        return (
          a.useEffect(() => {
            !s().isEqual(S, C) && H((0, h.B)(C, k));
          }, [C, S, k]),
          a.useEffect(
            () => (
              f.default.track(_.rMx.OPEN_MODAL, {
                type: t,
                source: "Feedback Modal",
              }),
              () => {
                W.current({
                  rating: V.current,
                  problem: q.current,
                  dontShowAgain: Y.current,
                  feedback: X.current,
                });
              }
            ),
            [],
          ),
          (0, l.jsxs)(c.ModalRoot, {
            transitionState: p,
            className: j.__invalid_modalRoot,
            "aria-labelledby": P,
            children: [
              (0, l.jsxs)(c.ModalHeader, {
                separator: !1,
                className: j.headerContainer,
                children: [
                  (0, l.jsx)(c.Heading, {
                    id: P,
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
                    : (0, l.jsx)(E, {
                        className: r()(j.emojis, B),
                        selectedRating: G,
                        onChangeRating: function (e) {
                          U(e), e === N.aZ.GOOD && L();
                        },
                        ratingConfigs: T,
                      }),
                ],
              }),
              (0, l.jsxs)(c.ModalContent, {
                className: j.__invalid_content,
                children: [
                  null == G || G === N.aZ.GOOD || J
                    ? null
                    : (0, l.jsx)(c.FormItem, {
                        title: o,
                        className: j.problemInfo,
                        children: (0, l.jsx)(x.Z, {
                          options: M,
                          onClick: function (e) {
                            let { value: t } = e;
                            F(t), !A.includes(t) && L();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !A.includes(t);
                          },
                        }),
                      }),
                  J
                    ? (0, l.jsxs)(c.FormItem, {
                        title: g.intl.string(g.t.h95hcn),
                        className: j.problemInfo,
                        children: [
                          (0, l.jsx)(c.TextArea, {
                            value: w,
                            maxLength: N.iF,
                            onChange: z,
                          }),
                          !v && (0, l.jsx)(O, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (J || !R) &&
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
                              F(null), z("");
                            },
                            children: g.intl.string(g.t["13/7kZ"]),
                          }),
                          (0, l.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: L,
                            children: g.intl.string(g.t.geKm7u),
                          }),
                        ],
                      })
                    : (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.INVERTED,
                            size: 18,
                            value: Z,
                            onChange: () => y(!Z),
                            children: (0, l.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              children: g.intl.string(g.t["5E9SBw"]),
                            }),
                          }),
                          null != G &&
                            G !== N.aZ.GOOD &&
                            (0, l.jsx)(c.Button, {
                              type: "submit",
                              size: c.Button.Sizes.SMALL,
                              onClick: L,
                              children: g.intl.string(g.t["5WxrcX"]),
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
    801320: function (e, t, n) {
      n.r(t),
        n.d(t, {
          VideoBackgroundIssue: function () {
            return a;
          },
          default: function () {
            return f;
          },
        });
      var l,
        a,
        i = n(200651),
        r = n(192379),
        o = n(481060),
        s = n(332664),
        c = n(142497),
        u = n(626135),
        d = n(981631),
        b = n(190378),
        m = n(388032);
      ((l = a || (a = {})).BAD_OUTLINE = "BAD_OUTLINE"),
        (l.BACKGROUND_DETECTION_ACCURACY = "BACKGROUND_DETECTION_ACCURACY"),
        (l.FLICKERING = "FLICKERING"),
        (l.BACKGROUND_DETECTION_LAG = "BACKGROUND_DETECTION_LAG"),
        (l.OTHER = "OTHER");
      let x = ["OTHER"];
      function f(e) {
        let { analyticsData: t, transitionState: l, onClose: a } = e;
        return (
          r.useEffect(() => {
            u.default.track(d.rMx.OPEN_MODAL, {
              type: "Video Background Feedback",
            });
          }, []),
          (0, i.jsx)(s.Z, {
            modalType: "video_background",
            header: m.intl.string(m.t.Wl8qXl),
            body: m.intl.string(m.t.vPw6j4),
            problemTitle: m.intl.string(m.t["UNFF8/"]),
            problems: [
              { value: "BAD_OUTLINE", label: m.intl.string(m.t.pyhS3t) },
              {
                value: "BACKGROUND_DETECTION_ACCURACY",
                label: m.intl.string(m.t.cymRTU),
              },
              { value: "FLICKERING", label: m.intl.string(m.t.xZ60CA) },
              {
                value: "BACKGROUND_DETECTION_LAG",
                label: m.intl.string(m.t.DweTcX),
              },
              { value: "OTHER", label: m.intl.string(m.t["emlT9/"]) },
            ],
            feedbackProblems: x,
            onSubmit: function (e) {
              var l, a, r, s;
              let { rating: x, problem: f, dontShowAgain: C, feedback: h } = e;
              if ((C && (0, c.Kw)(b.v.VIDEO_BACKGROUND_FEEDBACK), null != x))
                (l = x),
                  (a = f),
                  (r = h),
                  (s = t),
                  u.default.track(d.rMx.VIDEO_BACKGROUND_FEEDBACK, {
                    ...s,
                    reason: a,
                    rating: l,
                    feedback: r,
                  }),
                  null != f &&
                    (0, o.openModalLazy)(async () => {
                      let { default: e } = await n
                        .e("14466")
                        .then(n.bind(n, 729328));
                      return (t) =>
                        (0, i.jsx)(e, {
                          body: m.intl.string(m.t.aHB11d),
                          ...t,
                        });
                    });
            },
            onClose: a,
            transitionState: l,
            otherKey: "OTHER",
          })
        );
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
//# sourceMappingURL=be2028fdc3ebe7460124.js.map
