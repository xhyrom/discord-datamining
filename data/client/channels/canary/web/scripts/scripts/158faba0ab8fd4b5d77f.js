"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["4413"],
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
    672655: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      }),
        n(653041);
      var i = n(701488),
        l = n(388032);
      function a(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = [
            {
              value: i.K8.FAILED_LOAD,
              label: e ? l.intl.string(l.t.uaiF6O) : l.intl.string(l.t.aO6OMT),
            },
            {
              value: i.K8.LAGGING,
              label: e
                ? l.intl.string(l.t["/nJOlp"])
                : l.intl.string(l.t["79HFwc"]),
            },
            {
              value: i.K8.CONFUSING,
              label: e
                ? l.intl.string(l.t["/8psS0"])
                : l.intl.string(l.t.iSv55O),
            },
            {
              value: i.K8.NOT_FUN,
              label: e
                ? l.intl.string(l.t["7GVmLi"])
                : l.intl.string(l.t.GnVff3),
            },
            { value: i.K8.OTHER, label: l.intl.string(l.t["emlT9/"]) },
          ];
        return (
          t &&
            n.push({
              value: i.K8.ADS,
              label: e
                ? l.intl.string(l.t["5o1ULy"])
                : l.intl.string(l.t.XeeDhI),
            }),
          n
        );
      }
    },
    768015: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(626135),
        l = n(981631);
      function a(e) {
        let {
          problem: t,
          channel: n,
          feedback: a,
          activityApplication: o,
          analyticsData: r,
          location: s,
          rating: c = null,
        } = e;
        i.default.track(l.rMx.ACTIVITY_REPORT_PROBLEM, {
          reason: t,
          guild_id: n.getGuildId(),
          channel_id: n.id,
          application_id: null == o ? void 0 : o.id,
          application_name: null == o ? void 0 : o.name,
          location: s,
          rating: c,
          feedback: a,
          ...r,
        });
      }
    },
    450634: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        });
      var i = n(200651),
        l = n(192379),
        a = n(481060),
        o = n(332664),
        r = n(142497),
        s = n(626135),
        c = n(672655),
        d = n(768015),
        u = n(701488),
        m = n(981631),
        b = n(190378),
        f = n(388032);
      let p = [u.K8.OTHER, u.K8.ADS, u.K8.NOT_FUN];
      function x(e) {
        var t;
        let {
          channel: x,
          activityApplication: h,
          onClose: g,
          transitionState: _,
          analyticsData: j,
        } = e;
        l.useEffect(() => {
          s.default.track(m.rMx.OPEN_MODAL, {
            type: "Activity Feedback Modal",
            application_id: h.id,
            application_name: h.name,
            game_id: h.id,
            source: "Activity End",
          });
        }, [h]);
        let v =
          (null === (t = h.embeddedActivityConfig) || void 0 === t
            ? void 0
            : t.displays_advertisements) === !0;
        return (0, i.jsx)(o.Z, {
          modalType: "activity",
          header: f.intl.formatToPlainString(f.t.QXYwoK, {
            applicationName: h.name,
          }),
          body: f.intl.string(f.t["9hk2KC"]),
          problemTitle: f.intl.string(f.t.g1q5fn),
          problems: (0, c.Z)(!0, v),
          feedbackProblems: p,
          onSubmit: function (e) {
            let { rating: t, problem: l, dontShowAgain: o, feedback: c } = e;
            if (
              (o &&
                !(function (e) {
                  let { applicationId: t, rating: n } = e;
                  s.default.track(m.rMx.ACTIVITY_REPORT_DONT_SHOW, {
                    application_id: t,
                    rating: n,
                  }),
                    (0, r.Kw)(b.v.POST_ACTIVITY_FEEDBACK);
                })({ rating: t, applicationId: h.id }),
              null != t)
            )
              (0, d.Z)({
                problem: l,
                channel: x,
                feedback: c,
                activityApplication: h,
                analyticsData: j,
                location: "Activity End",
                rating: t,
              }),
                null != l &&
                  (0, a.openModalLazy)(async () => {
                    let { default: e } = await n
                      .e("14466")
                      .then(n.bind(n, 729328));
                    return (t) =>
                      (0, i.jsx)(e, {
                        body: f.intl.string(f.t["zuHR+/"]),
                        ...t,
                      });
                  });
          },
          onClose: g,
          transitionState: _,
          otherKey: u.K8.OTHER,
        });
      }
    },
    957115: function (e, t, n) {
      n.d(t, {
        B: function () {
          return a;
        },
      }),
        n(653041);
      var i = n(392711),
        l = n.n(i);
      let a = (e, t) => {
        let n = l().shuffle(e),
          i = n.findIndex((e) => e.value === t);
        if (i > -1) {
          let e = n[i];
          n.splice(i, 1), n.push(e);
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
          return O;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        a = n(120356),
        o = n.n(a),
        r = n(392711),
        s = n.n(r),
        c = n(481060),
        d = n(493773),
        u = n(110924),
        m = n(600164),
        b = n(313201),
        f = n(237617),
        p = n(572539),
        x = n(626135),
        h = n(63063),
        g = n(957115),
        _ = n(531578),
        j = n(981631),
        v = n(388032),
        N = n(369769);
      let k = [
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
          ratingConfigs: l,
          onChangeRating: a,
        } = e;
        return (0, i.jsx)(m.Z, {
          justify: m.Z.Justify.BETWEEN,
          align: m.Z.Align.CENTER,
          className: o()(N.ratingsSelector, t),
          children: (null != l ? l : k).map((e) => {
            let { rating: t, className: l, classNameSelected: r } = e;
            return (0, i.jsx)(
              c.Clickable,
              {
                onClick: () => a(t),
                "aria-label": t,
                children: (0, i.jsx)("div", {
                  className: o()(l, n === t ? r : null),
                }),
              },
              t,
            );
          }),
        });
      }
      function C() {
        return (0, i.jsx)(c.Text, {
          className: N.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: v.intl.format(v.t.ybi2tL, {
            helpdeskURL: h.Z.getSubmitRequestURL(),
          }),
        });
      }
      function O(e) {
        let {
            modalType: t,
            header: n,
            body: a,
            problemTitle: r,
            problems: h,
            transitionState: k,
            ratingConfigs: O,
            feedbackProblems: T = [],
            otherKey: y,
            ratingsSelectorClassName: Z,
            hideDontShowCheckbox: L,
            startRating: A = null,
            hideHelpDeskLink: E = !1,
            onSubmit: I,
            onClose: R,
          } = e,
          B = (0, u.Z)(h),
          [D, M] = l.useState(!1),
          [K, F] = l.useState(A),
          [H, G] = l.useState(null),
          [z, P] = l.useState(s().shuffle(h)),
          [w, U] = l.useState(""),
          V = (0, b.Dt)(),
          Y = (0, f.Z)(K),
          q = (0, f.Z)(D),
          W = (0, f.Z)(H),
          X = (0, f.Z)(I),
          J = (0, f.Z)(w),
          Q = null != H && T.includes(H);
        return (
          l.useEffect(() => {
            !s().isEqual(B, h) && P((0, g.B)(h, y));
          }, [h, B, y]),
          (0, d.Z)(
            () => (
              x.default.track(j.rMx.OPEN_MODAL, {
                type: t,
                source: "Feedback Modal",
              }),
              () => {
                X.current({
                  rating: Y.current,
                  problem: W.current,
                  dontShowAgain: q.current,
                  feedback: J.current,
                });
              }
            ),
          ),
          (0, i.jsxs)(c.ModalRoot, {
            transitionState: k,
            className: N.__invalid_modalRoot,
            "aria-labelledby": V,
            children: [
              (0, i.jsxs)(c.ModalHeader, {
                separator: !1,
                className: N.headerContainer,
                children: [
                  (0, i.jsx)(c.Heading, {
                    id: V,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: n,
                  }),
                  (0, i.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: N.ratingBody,
                    children: a,
                  }),
                  Q
                    ? null
                    : (0, i.jsx)(S, {
                        className: o()(N.emojis, Z),
                        selectedRating: K,
                        onChangeRating: function (e) {
                          F(e), e === _.aZ.GOOD && R();
                        },
                        ratingConfigs: O,
                      }),
                ],
              }),
              (0, i.jsxs)(c.ModalContent, {
                className: N.__invalid_content,
                children: [
                  null == K || K === _.aZ.GOOD || Q
                    ? null
                    : (0, i.jsx)(c.FormItem, {
                        title: r,
                        className: N.problemInfo,
                        children: (0, i.jsx)(p.Z, {
                          options: z,
                          onClick: function (e) {
                            let { value: t } = e;
                            G(t), !T.includes(t) && R();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !T.includes(t);
                          },
                        }),
                      }),
                  Q
                    ? (0, i.jsxs)(c.FormItem, {
                        title: v.intl.string(v.t.h95hcn),
                        className: N.problemInfo,
                        children: [
                          (0, i.jsx)(c.TextArea, {
                            value: w,
                            maxLength: _.iF,
                            onChange: U,
                          }),
                          !E && (0, i.jsx)(C, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (Q || !L) &&
                (0, i.jsx)(c.ModalFooter, {
                  className: N.footer,
                  direction: m.Z.Direction.HORIZONTAL,
                  children: Q
                    ? (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              G(null), U("");
                            },
                            children: v.intl.string(v.t["13/7kZ"]),
                          }),
                          (0, i.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: R,
                            children: v.intl.string(v.t.geKm7u),
                          }),
                        ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.INVERTED,
                            size: 18,
                            value: D,
                            onChange: () => M(!D),
                            children: (0, i.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              children: v.intl.string(v.t["5E9SBw"]),
                            }),
                          }),
                          null != K &&
                            K !== _.aZ.GOOD &&
                            (0, i.jsx)(c.Button, {
                              type: "submit",
                              size: c.Button.Sizes.SMALL,
                              onClick: R,
                              children: v.intl.string(v.t["5WxrcX"]),
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
      var i = n(200651);
      n(192379);
      var l = n(120356),
        a = n.n(l),
        o = n(481060),
        r = n(259580),
        s = n(547803);
      function c(e) {
        let {
          options: t,
          onClick: n,
          className: l,
          optionClassName: c,
          hideCaret: d,
        } = e;
        return (0, i.jsx)("div", {
          className: a()(s.root, l),
          children: t.map((e, t) =>
            (0, i.jsxs)(
              o.Clickable,
              {
                onClick: () => n(e),
                className: a()(s.option, c),
                children: [
                  (0, i.jsx)(o.Text, {
                    className: s.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == d ? void 0 : d(e)) &&
                    (0, i.jsx)(r.Z, {
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
//# sourceMappingURL=158faba0ab8fd4b5d77f.js.map
