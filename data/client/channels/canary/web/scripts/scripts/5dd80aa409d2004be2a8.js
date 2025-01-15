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
            return g;
          },
        });
      var l = n(200651),
        i = n(192379),
        a = n(481060),
        r = n(332664),
        s = n(538211),
        o = n(698066),
        c = n(142497),
        u = n(626135),
        d = n(981631),
        m = n(70722),
        b = n(190378),
        f = n(388032);
      let x = [m.kr.OTHER];
      function g(e) {
        let {
            isStreamer: t,
            stream: g,
            streamApplication: p,
            onClose: h,
            transitionState: _,
            analyticsData: j,
          } = e,
          k = t ? f.intl.string(f.t["0uxA2d"]) : f.intl.string(f.t.CqjnLC);
        return (
          i.useEffect(() => {
            u.default.track(d.rMx.OPEN_MODAL, {
              type: "Stream Problem Report",
              other_user_id: g.ownerId,
              application_id: null != p ? p.id : null,
              application_name: null != p ? p.name : null,
              game_id: null != p ? p.id : null,
              source: "Stream End",
            });
          }, [g.ownerId, p]),
          (0, l.jsx)(r.Z, {
            modalType: "stream",
            header: f.intl.string(f.t["5smP3d"]),
            body: k,
            problemTitle: f.intl.string(f.t["6Y1t5O"]),
            problems: (0, s.Z)(t, !0),
            feedbackProblems: x,
            onSubmit: function (e) {
              let { rating: t, problem: i, dontShowAgain: r, feedback: s } = e;
              if ((r && (0, c.Kw)(b.v.REPORT_PROBLEM_POST_STREAM), null != t))
                (0, o.Z)({
                  problem: i,
                  stream: g,
                  feedback: s,
                  streamApplication: p,
                  analyticsData: j,
                  location: "Stream End",
                  rating: t,
                }),
                  null != i &&
                    (0, a.openModalLazy)(async () => {
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
          return a;
        },
      }),
        n(653041);
      var l = n(392711),
        i = n.n(l);
      let a = (e, t) => {
        let n = i().shuffle(e),
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
        i = n(192379),
        a = n(120356),
        r = n.n(a),
        s = n(392711),
        o = n.n(s),
        c = n(481060),
        u = n(493773),
        d = n(110924),
        m = n(600164),
        b = n(313201),
        f = n(237617),
        x = n(572539),
        g = n(626135),
        p = n(63063),
        h = n(957115),
        _ = n(531578),
        j = n(981631),
        k = n(388032),
        S = n(369769);
      let N = [
        {
          className: S.emojiSad,
          rating: _.aZ.BAD,
          classNameSelected: S.selected,
        },
        {
          className: S.emojiNeutral,
          rating: _.aZ.NEUTRAL,
          classNameSelected: S.selected,
        },
        {
          className: S.emojiHappy,
          rating: _.aZ.GOOD,
          classNameSelected: S.selected,
        },
      ];
      function v(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: i,
          onChangeRating: a,
        } = e;
        return (0, l.jsx)(m.Z, {
          justify: m.Z.Justify.BETWEEN,
          align: m.Z.Align.CENTER,
          className: r()(S.ratingsSelector, t),
          children: (null != i ? i : N).map((e) => {
            let { rating: t, className: i, classNameSelected: s } = e;
            return (0, l.jsx)(
              c.Clickable,
              {
                onClick: () => a(t),
                "aria-label": t,
                children: (0, l.jsx)("div", {
                  className: r()(i, n === t ? s : null),
                }),
              },
              t,
            );
          }),
        });
      }
      function E() {
        return (0, l.jsx)(c.Text, {
          className: S.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: k.intl.format(k.t.ybi2tL, {
            helpdeskURL: p.Z.getSubmitRequestURL(),
          }),
        });
      }
      function R(e) {
        let {
            modalType: t,
            header: n,
            body: a,
            problemTitle: s,
            problems: p,
            transitionState: N,
            ratingConfigs: R,
            feedbackProblems: O = [],
            otherKey: C,
            ratingsSelectorClassName: Z,
            hideDontShowCheckbox: T,
            startRating: L = null,
            hideHelpDeskLink: y = !1,
            onSubmit: I,
            onClose: M,
          } = e,
          B = (0, d.Z)(p),
          [A, D] = i.useState(!1),
          [P, H] = i.useState(L),
          [w, G] = i.useState(null),
          [z, F] = i.useState(o().shuffle(p)),
          [U, K] = i.useState(""),
          V = (0, b.Dt)(),
          Y = (0, f.Z)(P),
          q = (0, f.Z)(A),
          Q = (0, f.Z)(w),
          X = (0, f.Z)(I),
          J = (0, f.Z)(U),
          W = null != w && O.includes(w);
        return (
          i.useEffect(() => {
            !o().isEqual(B, p) && F((0, h.B)(p, C));
          }, [p, B, C]),
          (0, u.Z)(
            () => (
              g.default.track(j.rMx.OPEN_MODAL, {
                type: t,
                source: "Feedback Modal",
              }),
              () => {
                X.current({
                  rating: Y.current,
                  problem: Q.current,
                  dontShowAgain: q.current,
                  feedback: J.current,
                });
              }
            ),
          ),
          (0, l.jsxs)(c.ModalRoot, {
            transitionState: N,
            className: S.__invalid_modalRoot,
            "aria-labelledby": V,
            children: [
              (0, l.jsxs)(c.ModalHeader, {
                separator: !1,
                className: S.headerContainer,
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
                    className: S.ratingBody,
                    children: a,
                  }),
                  W
                    ? null
                    : (0, l.jsx)(v, {
                        className: r()(S.emojis, Z),
                        selectedRating: P,
                        onChangeRating: function (e) {
                          H(e), e === _.aZ.GOOD && M();
                        },
                        ratingConfigs: R,
                      }),
                ],
              }),
              (0, l.jsxs)(c.ModalContent, {
                className: S.__invalid_content,
                children: [
                  null == P || P === _.aZ.GOOD || W
                    ? null
                    : (0, l.jsx)(c.FormItem, {
                        title: s,
                        className: S.problemInfo,
                        children: (0, l.jsx)(x.Z, {
                          options: z,
                          onClick: function (e) {
                            let { value: t } = e;
                            G(t), !O.includes(t) && M();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !O.includes(t);
                          },
                        }),
                      }),
                  W
                    ? (0, l.jsxs)(c.FormItem, {
                        title: k.intl.string(k.t.h95hcn),
                        className: S.problemInfo,
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
                  className: S.footer,
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
                    : (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.INVERTED,
                            size: 18,
                            value: A,
                            onChange: () => D(!A),
                            children: (0, l.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              children: k.intl.string(k.t["5E9SBw"]),
                            }),
                          }),
                          null != P &&
                            P !== _.aZ.GOOD &&
                            (0, l.jsx)(c.Button, {
                              type: "submit",
                              size: c.Button.Sizes.SMALL,
                              onClick: M,
                              children: k.intl.string(k.t["5WxrcX"]),
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
      var i = n(120356),
        a = n.n(i),
        r = n(481060),
        s = n(259580),
        o = n(547803);
      function c(e) {
        let {
          options: t,
          onClick: n,
          className: i,
          optionClassName: c,
          hideCaret: u,
        } = e;
        return (0, l.jsx)("div", {
          className: a()(o.root, i),
          children: t.map((e, t) =>
            (0, l.jsxs)(
              r.Clickable,
              {
                onClick: () => n(e),
                className: a()(o.option, c),
                children: [
                  (0, l.jsx)(r.Text, {
                    className: o.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == u ? void 0 : u(e)) &&
                    (0, l.jsx)(s.Z, {
                      className: o.caret,
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
    538211: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var l = n(70722),
        i = n(388032);
      function a(e, t) {
        return [
          {
            value: l.kr.BLACK_SCREEN,
            label: t ? i.intl.string(i.t["0X5Zbm"]) : i.intl.string(i.t.fxiRNj),
          },
          {
            value: l.kr.BLURRY,
            label: t ? i.intl.string(i.t.VVPQy8) : i.intl.string(i.t.E8jTMD),
          },
          {
            value: l.kr.LAGGING,
            label: t ? i.intl.string(i.t.ObEHd3) : i.intl.string(i.t.VoSJER),
          },
          {
            value: l.kr.OUT_OF_SYNC,
            label: t ? i.intl.string(i.t.mYmwDw) : i.intl.string(i.t["+NluQk"]),
          },
          {
            value: l.kr.AUDIO_MISSING,
            label: t ? i.intl.string(i.t.Xwv419) : i.intl.string(i.t.G2egzc),
          },
          {
            value: l.kr.AUDIO_POOR,
            label: t ? i.intl.string(i.t["fHey+f"]) : i.intl.string(i.t.aHOfIi),
          },
          { value: l.kr.STREAM_STOPPED, label: i.intl.string(i.t.uEoqQk) },
          { value: l.kr.OTHER, label: i.intl.string(i.t["emlT9/"]) },
        ];
      }
    },
    698066: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var l = n(626135),
        i = n(981631);
      function a(e) {
        let {
          problem: t,
          stream: n,
          feedback: a,
          streamApplication: r,
          analyticsData: s,
          location: o,
          rating: c = null,
        } = e;
        l.default.track(i.rMx.STREAM_REPORT_PROBLEM, {
          reason: t,
          streamer_user_id: n.ownerId,
          stream_channel_id: n.channelId,
          guild_id: n.guildId,
          application_id: null != r ? r.id : null,
          application_name: null != r ? r.name : null,
          location: o,
          rating: c,
          feedback: a,
          ...s,
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
//# sourceMappingURL=5dd80aa409d2004be2a8.js.map
