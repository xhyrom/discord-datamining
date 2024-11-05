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
            return h;
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
        b = n(981631),
        m = n(190378),
        f = n(388032);
      let p = [u.K8.OTHER, u.K8.ADS, u.K8.NOT_FUN];
      function h(e) {
        var t;
        let {
          channel: h,
          activityApplication: x,
          onClose: g,
          transitionState: _,
          analyticsData: j,
        } = e;
        l.useEffect(() => {
          s.default.track(b.rMx.OPEN_MODAL, {
            type: "Activity Feedback Modal",
            application_id: x.id,
            application_name: x.name,
            game_id: x.id,
            source: "Activity End",
          });
        }, [x]);
        let v =
          (null === (t = x.embeddedActivityConfig) || void 0 === t
            ? void 0
            : t.displays_advertisements) === !0;
        return (0, i.jsx)(o.Z, {
          modalType: "activity",
          header: f.intl.formatToPlainString(f.t.QXYwoK, {
            applicationName: x.name,
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
                  s.default.track(b.rMx.ACTIVITY_REPORT_DONT_SHOW, {
                    application_id: t,
                    rating: n,
                  }),
                    (0, r.Kw)(m.v.POST_ACTIVITY_FEEDBACK);
                })({ rating: t, applicationId: x.id }),
              null != t)
            )
              (0, d.Z)({
                problem: l,
                channel: h,
                feedback: c,
                activityApplication: x,
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
        d = n(110924),
        u = n(600164),
        b = n(313201),
        m = n(237617),
        f = n(572539),
        p = n(626135),
        h = n(63063),
        x = n(957115),
        g = n(871364),
        _ = n(531578),
        j = n(981631),
        v = n(388032),
        k = n(214859);
      let N = [
        {
          className: k.emojiSad,
          rating: _.aZ.BAD,
          classNameSelected: k.selected,
        },
        {
          className: k.emojiNeutral,
          rating: _.aZ.NEUTRAL,
          classNameSelected: k.selected,
        },
        {
          className: k.emojiHappy,
          rating: _.aZ.GOOD,
          classNameSelected: k.selected,
        },
      ];
      function S(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: l,
          onChangeRating: a,
        } = e;
        return (0, i.jsx)(u.Z, {
          justify: u.Z.Justify.BETWEEN,
          align: u.Z.Align.CENTER,
          className: o()(k.ratingsSelector, t),
          children: (null != l ? l : N).map((e) => {
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
          className: k.helpdeskLink,
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
            transitionState: N,
            ratingConfigs: O,
            feedbackProblems: T = [],
            otherKey: y,
            ratingsSelectorClassName: Z,
            hideDontShowCheckbox: A,
            startRating: E = null,
            hideHelpDeskLink: L = !1,
            onSubmit: I,
            onClose: B,
          } = e,
          R = (0, d.Z)(h),
          [M, D] = l.useState(!1),
          [K, F] = l.useState(E),
          [H, G] = l.useState(null),
          [w, z] = l.useState(s().shuffle(h)),
          [P, U] = l.useState(""),
          V = (0, b.Dt)(),
          Y = (0, m.Z)(K),
          q = (0, m.Z)(M),
          W = (0, m.Z)(H),
          X = (0, m.Z)(I),
          J = (0, m.Z)(P),
          Q = null != H && T.includes(H),
          { renderSkipButton: $ } = g.w.useExperiment({
            location: "FeedbackModal",
          });
        return (
          l.useEffect(() => {
            !s().isEqual(R, h) && z((0, x.B)(h, y));
          }, [h, R, y]),
          l.useEffect(
            () => (
              p.default.track(j.rMx.OPEN_MODAL, {
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
            [],
          ),
          (0, i.jsxs)(c.ModalRoot, {
            transitionState: N,
            className: k.__invalid_modalRoot,
            "aria-labelledby": V,
            children: [
              (0, i.jsxs)(c.ModalHeader, {
                separator: !1,
                className: k.headerContainer,
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
                    className: k.ratingBody,
                    children: a,
                  }),
                  Q
                    ? null
                    : (0, i.jsx)(S, {
                        className: o()(k.emojis, Z),
                        selectedRating: K,
                        onChangeRating: function (e) {
                          F(e), e === _.aZ.GOOD && B();
                        },
                        ratingConfigs: O,
                      }),
                ],
              }),
              (0, i.jsxs)(c.ModalContent, {
                className: k.__invalid_content,
                children: [
                  null == K || K === _.aZ.GOOD || Q
                    ? null
                    : (0, i.jsx)(c.FormItem, {
                        title: r,
                        className: k.problemInfo,
                        children: (0, i.jsx)(f.Z, {
                          options: w,
                          onClick: function (e) {
                            let { value: t } = e;
                            G(t), !T.includes(t) && B();
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
                        className: k.problemInfo,
                        children: [
                          (0, i.jsx)(c.TextArea, {
                            value: P,
                            maxLength: _.iF,
                            onChange: U,
                          }),
                          !L && (0, i.jsx)(C, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (Q || !A) &&
                (0, i.jsx)(c.ModalFooter, {
                  className: k.footer,
                  direction: u.Z.Direction.HORIZONTAL,
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
                            onClick: B,
                            children: v.intl.string(v.t.geKm7u),
                          }),
                        ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.INVERTED,
                            size: 18,
                            value: M,
                            onChange: () => D(!M),
                            children: (0, i.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              children: v.intl.string(v.t["5E9SBw"]),
                            }),
                          }),
                          $ &&
                            null != K &&
                            K !== _.aZ.GOOD &&
                            (0, i.jsx)(c.Button, {
                              type: "submit",
                              size: c.Button.Sizes.SMALL,
                              onClick: B,
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
    871364: function (e, t, n) {
      n.d(t, {
        w: function () {
          return i;
        },
      });
      let i = (0, n(818083).B)({
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
      var i = n(200651);
      n(192379);
      var l = n(120356),
        a = n.n(l),
        o = n(481060),
        r = n(259580),
        s = n(20535);
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
//# sourceMappingURL=0404af2aae6d400057df.js.map
