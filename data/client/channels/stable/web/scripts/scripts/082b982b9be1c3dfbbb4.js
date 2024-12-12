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
          return k;
        },
        Z: function () {
          return C;
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
        m = n(313201),
        b = n(237617),
        f = n(572539),
        p = n(626135),
        x = n(63063),
        h = n(957115),
        g = n(531578),
        _ = n(981631),
        j = n(388032),
        v = n(720816);
      let N = [
        {
          className: v.emojiSad,
          rating: g.aZ.BAD,
          classNameSelected: v.selected,
        },
        {
          className: v.emojiNeutral,
          rating: g.aZ.NEUTRAL,
          classNameSelected: v.selected,
        },
        {
          className: v.emojiHappy,
          rating: g.aZ.GOOD,
          classNameSelected: v.selected,
        },
      ];
      function k(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: l,
          onChangeRating: a,
        } = e;
        return (0, i.jsx)(u.Z, {
          justify: u.Z.Justify.BETWEEN,
          align: u.Z.Align.CENTER,
          className: o()(v.ratingsSelector, t),
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
      function S() {
        return (0, i.jsx)(c.Text, {
          className: v.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: j.intl.format(j.t.ybi2tL, {
            helpdeskURL: x.Z.getSubmitRequestURL(),
          }),
        });
      }
      function C(e) {
        let {
            modalType: t,
            header: n,
            body: a,
            problemTitle: r,
            problems: x,
            transitionState: N,
            ratingConfigs: C,
            feedbackProblems: O = [],
            otherKey: T,
            ratingsSelectorClassName: y,
            hideDontShowCheckbox: Z,
            startRating: L = null,
            hideHelpDeskLink: A = !1,
            onSubmit: E,
            onClose: I,
          } = e,
          R = (0, d.Z)(x),
          [B, D] = l.useState(!1),
          [M, K] = l.useState(L),
          [F, H] = l.useState(null),
          [G, z] = l.useState(s().shuffle(x)),
          [P, w] = l.useState(""),
          U = (0, m.Dt)(),
          V = (0, b.Z)(M),
          Y = (0, b.Z)(B),
          q = (0, b.Z)(F),
          W = (0, b.Z)(E),
          X = (0, b.Z)(P),
          J = null != F && O.includes(F);
        return (
          l.useEffect(() => {
            !s().isEqual(R, x) && z((0, h.B)(x, T));
          }, [x, R, T]),
          l.useEffect(
            () => (
              p.default.track(_.rMx.OPEN_MODAL, {
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
          (0, i.jsxs)(c.ModalRoot, {
            transitionState: N,
            className: v.__invalid_modalRoot,
            "aria-labelledby": U,
            children: [
              (0, i.jsxs)(c.ModalHeader, {
                separator: !1,
                className: v.headerContainer,
                children: [
                  (0, i.jsx)(c.Heading, {
                    id: U,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: n,
                  }),
                  (0, i.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: v.ratingBody,
                    children: a,
                  }),
                  J
                    ? null
                    : (0, i.jsx)(k, {
                        className: o()(v.emojis, y),
                        selectedRating: M,
                        onChangeRating: function (e) {
                          K(e), e === g.aZ.GOOD && I();
                        },
                        ratingConfigs: C,
                      }),
                ],
              }),
              (0, i.jsxs)(c.ModalContent, {
                className: v.__invalid_content,
                children: [
                  null == M || M === g.aZ.GOOD || J
                    ? null
                    : (0, i.jsx)(c.FormItem, {
                        title: r,
                        className: v.problemInfo,
                        children: (0, i.jsx)(f.Z, {
                          options: G,
                          onClick: function (e) {
                            let { value: t } = e;
                            H(t), !O.includes(t) && I();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !O.includes(t);
                          },
                        }),
                      }),
                  J
                    ? (0, i.jsxs)(c.FormItem, {
                        title: j.intl.string(j.t.h95hcn),
                        className: v.problemInfo,
                        children: [
                          (0, i.jsx)(c.TextArea, {
                            value: P,
                            maxLength: g.iF,
                            onChange: w,
                          }),
                          !A && (0, i.jsx)(S, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (J || !Z) &&
                (0, i.jsx)(c.ModalFooter, {
                  className: v.footer,
                  direction: u.Z.Direction.HORIZONTAL,
                  children: J
                    ? (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              H(null), w("");
                            },
                            children: j.intl.string(j.t["13/7kZ"]),
                          }),
                          (0, i.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: I,
                            children: j.intl.string(j.t.geKm7u),
                          }),
                        ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.INVERTED,
                            size: 18,
                            value: B,
                            onChange: () => D(!B),
                            children: (0, i.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              children: j.intl.string(j.t["5E9SBw"]),
                            }),
                          }),
                          null != M &&
                            M !== g.aZ.GOOD &&
                            (0, i.jsx)(c.Button, {
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
      var i = n(200651);
      n(192379);
      var l = n(120356),
        a = n.n(l),
        o = n(481060),
        r = n(259580),
        s = n(995181);
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
//# sourceMappingURL=082b982b9be1c3dfbbb4.js.map
