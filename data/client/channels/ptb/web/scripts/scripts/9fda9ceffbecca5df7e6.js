"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["23657"],
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
    142402: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var l = n(200651),
        a = n(192379),
        i = n(481060),
        r = n(332664),
        o = n(538211),
        s = n(698066),
        c = n(142497),
        u = n(626135),
        d = n(981631),
        m = n(70722),
        b = n(190378),
        f = n(388032);
      let g = [m.kr.OTHER];
      function p(e) {
        let {
            isStreamer: t,
            stream: p,
            streamApplication: x,
            onClose: h,
            transitionState: _,
            analyticsData: j,
          } = e,
          k = t ? f.intl.string(f.t["0uxA2d"]) : f.intl.string(f.t.CqjnLC);
        return (
          a.useEffect(() => {
            u.default.track(d.rMx.OPEN_MODAL, {
              type: "Stream Problem Report",
              other_user_id: p.ownerId,
              application_id: null != x ? x.id : null,
              application_name: null != x ? x.name : null,
              game_id: null != x ? x.id : null,
              source: "Stream End",
            });
          }, [p.ownerId, x]),
          (0, l.jsx)(r.Z, {
            modalType: "stream",
            header: f.intl.string(f.t["5smP3d"]),
            body: k,
            problemTitle: f.intl.string(f.t["6Y1t5O"]),
            problems: (0, o.Z)(t, !0),
            feedbackProblems: g,
            onSubmit: function (e) {
              let { rating: t, problem: a, dontShowAgain: r, feedback: o } = e;
              if ((r && (0, c.Kw)(b.v.REPORT_PROBLEM_POST_STREAM), null != t))
                (0, s.Z)({
                  problem: a,
                  stream: p,
                  feedback: o,
                  streamApplication: x,
                  analyticsData: j,
                  location: "Stream End",
                  rating: t,
                }),
                  null != a &&
                    (0, i.openModalLazy)(async () => {
                      let { default: e } = await n
                        .e("14466")
                        .then(n.bind(n, 729328));
                      return (t) =>
                        (0, l.jsx)(e, {
                          body: f.intl.string(f.t.mMTVnp),
                          ...t,
                        });
                    });
            },
            onClose: h,
            transitionState: _,
            otherKey: m.kr.OTHER,
          })
        );
      }
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
          return v;
        },
        Z: function () {
          return R;
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
        m = n(600164),
        b = n(313201),
        f = n(237617),
        g = n(572539),
        p = n(626135),
        x = n(63063),
        h = n(957115),
        _ = n(531578),
        j = n(981631),
        k = n(388032),
        N = n(720816);
      let S = [
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
      function v(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: a,
          onChangeRating: i,
        } = e;
        return (0, l.jsx)(m.Z, {
          justify: m.Z.Justify.BETWEEN,
          align: m.Z.Align.CENTER,
          className: r()(N.ratingsSelector, t),
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
          className: N.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: k.intl.format(k.t.ybi2tL, {
            helpdeskURL: x.Z.getSubmitRequestURL(),
          }),
        });
      }
      function R(e) {
        let {
            modalType: t,
            header: n,
            body: i,
            problemTitle: o,
            problems: x,
            transitionState: S,
            ratingConfigs: R,
            feedbackProblems: C = [],
            otherKey: O,
            ratingsSelectorClassName: Z,
            hideDontShowCheckbox: T,
            startRating: L = null,
            hideHelpDeskLink: y = !1,
            onSubmit: I,
            onClose: M,
          } = e,
          A = (0, d.Z)(x),
          [B, D] = a.useState(!1),
          [P, H] = a.useState(L),
          [w, G] = a.useState(null),
          [z, F] = a.useState(s().shuffle(x)),
          [U, K] = a.useState(""),
          V = (0, b.Dt)(),
          Y = (0, f.Z)(P),
          q = (0, f.Z)(B),
          Q = (0, f.Z)(w),
          J = (0, f.Z)(I),
          X = (0, f.Z)(U),
          W = null != w && C.includes(w);
        return (
          a.useEffect(() => {
            !s().isEqual(A, x) && F((0, h.B)(x, O));
          }, [x, A, O]),
          (0, u.Z)(
            () => (
              p.default.track(j.rMx.OPEN_MODAL, {
                type: t,
                source: "Feedback Modal",
              }),
              () => {
                J.current({
                  rating: Y.current,
                  problem: Q.current,
                  dontShowAgain: q.current,
                  feedback: X.current,
                });
              }
            ),
          ),
          (0, l.jsxs)(c.ModalRoot, {
            transitionState: S,
            className: N.__invalid_modalRoot,
            "aria-labelledby": V,
            children: [
              (0, l.jsxs)(c.ModalHeader, {
                separator: !1,
                className: N.headerContainer,
                children: [
                  (0, l.jsx)(c.Heading, {
                    id: V,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: n,
                  }),
                  (0, l.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: N.ratingBody,
                    children: i,
                  }),
                  W
                    ? null
                    : (0, l.jsx)(v, {
                        className: r()(N.emojis, Z),
                        selectedRating: P,
                        onChangeRating: function (e) {
                          H(e), e === _.aZ.GOOD && M();
                        },
                        ratingConfigs: R,
                      }),
                ],
              }),
              (0, l.jsxs)(c.ModalContent, {
                className: N.__invalid_content,
                children: [
                  null == P || P === _.aZ.GOOD || W
                    ? null
                    : (0, l.jsx)(c.FormItem, {
                        title: o,
                        className: N.problemInfo,
                        children: (0, l.jsx)(g.Z, {
                          options: z,
                          onClick: function (e) {
                            let { value: t } = e;
                            G(t), !C.includes(t) && M();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !C.includes(t);
                          },
                        }),
                      }),
                  W
                    ? (0, l.jsxs)(c.FormItem, {
                        title: k.intl.string(k.t.h95hcn),
                        className: N.problemInfo,
                        children: [
                          (0, l.jsx)(c.TextArea, {
                            value: U,
                            maxLength: _.iF,
                            onChange: K,
                          }),
                          !y && (0, l.jsx)(E, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (W || !T) &&
                (0, l.jsx)(c.ModalFooter, {
                  className: N.footer,
                  direction: m.Z.Direction.HORIZONTAL,
                  children: W
                    ? (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              G(null), K("");
                            },
                            children: k.intl.string(k.t["13/7kZ"]),
                          }),
                          (0, l.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: M,
                            children: k.intl.string(k.t.geKm7u),
                          }),
                        ],
                      })
                    : (0, l.jsx)(c.Checkbox, {
                        type: c.Checkbox.Types.INVERTED,
                        size: 18,
                        value: B,
                        onChange: () => D(!B),
                        children: (0, l.jsx)(c.Text, {
                          variant: "text-sm/normal",
                          children: k.intl.string(k.t["5E9SBw"]),
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
    538211: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var l = n(70722),
        a = n(388032);
      function i(e, t) {
        return [
          {
            value: l.kr.BLACK_SCREEN,
            label: t ? a.intl.string(a.t["0X5Zbm"]) : a.intl.string(a.t.fxiRNj),
          },
          {
            value: l.kr.BLURRY,
            label: t ? a.intl.string(a.t.VVPQy8) : a.intl.string(a.t.E8jTMD),
          },
          {
            value: l.kr.LAGGING,
            label: t ? a.intl.string(a.t.ObEHd3) : a.intl.string(a.t.VoSJER),
          },
          {
            value: l.kr.OUT_OF_SYNC,
            label: t ? a.intl.string(a.t.mYmwDw) : a.intl.string(a.t["+NluQk"]),
          },
          {
            value: l.kr.AUDIO_MISSING,
            label: t ? a.intl.string(a.t.Xwv419) : a.intl.string(a.t.G2egzc),
          },
          {
            value: l.kr.AUDIO_POOR,
            label: t ? a.intl.string(a.t["fHey+f"]) : a.intl.string(a.t.aHOfIi),
          },
          { value: l.kr.STREAM_STOPPED, label: a.intl.string(a.t.uEoqQk) },
          { value: l.kr.OTHER, label: a.intl.string(a.t["emlT9/"]) },
        ];
      }
    },
    698066: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var l = n(626135),
        a = n(981631);
      function i(e) {
        let {
          problem: t,
          stream: n,
          feedback: i,
          streamApplication: r,
          analyticsData: o,
          location: s,
          rating: c = null,
        } = e;
        l.default.track(a.rMx.STREAM_REPORT_PROBLEM, {
          reason: t,
          streamer_user_id: n.ownerId,
          stream_channel_id: n.channelId,
          guild_id: n.guildId,
          application_id: null != r ? r.id : null,
          application_name: null != r ? r.name : null,
          location: s,
          rating: c,
          feedback: i,
          ...o,
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
//# sourceMappingURL=9fda9ceffbecca5df7e6.js.map
