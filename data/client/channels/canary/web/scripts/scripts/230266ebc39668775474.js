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
          return N;
        },
        Z: function () {
          return v;
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
        u = n(110924),
        d = n(600164),
        m = n(313201),
        b = n(237617),
        f = n(572539),
        x = n(626135),
        g = n(63063),
        p = n(957115),
        h = n(531578),
        _ = n(981631),
        j = n(388032),
        k = n(720816);
      let S = [
        {
          className: k.emojiSad,
          rating: h.aZ.BAD,
          classNameSelected: k.selected,
        },
        {
          className: k.emojiNeutral,
          rating: h.aZ.NEUTRAL,
          classNameSelected: k.selected,
        },
        {
          className: k.emojiHappy,
          rating: h.aZ.GOOD,
          classNameSelected: k.selected,
        },
      ];
      function N(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: i,
          onChangeRating: a,
        } = e;
        return (0, l.jsx)(d.Z, {
          justify: d.Z.Justify.BETWEEN,
          align: d.Z.Align.CENTER,
          className: r()(k.ratingsSelector, t),
          children: (null != i ? i : S).map((e) => {
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
          className: k.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: j.intl.format(j.t.ybi2tL, {
            helpdeskURL: g.Z.getSubmitRequestURL(),
          }),
        });
      }
      function v(e) {
        let {
            modalType: t,
            header: n,
            body: a,
            problemTitle: s,
            problems: g,
            transitionState: S,
            ratingConfigs: v,
            feedbackProblems: R = [],
            otherKey: O,
            ratingsSelectorClassName: C,
            hideDontShowCheckbox: Z,
            startRating: T = null,
            hideHelpDeskLink: L = !1,
            onSubmit: y,
            onClose: I,
          } = e,
          M = (0, u.Z)(g),
          [B, A] = i.useState(!1),
          [D, P] = i.useState(T),
          [H, w] = i.useState(null),
          [G, z] = i.useState(o().shuffle(g)),
          [F, U] = i.useState(""),
          K = (0, m.Dt)(),
          V = (0, b.Z)(D),
          Y = (0, b.Z)(B),
          q = (0, b.Z)(H),
          Q = (0, b.Z)(y),
          X = (0, b.Z)(F),
          J = null != H && R.includes(H);
        return (
          i.useEffect(() => {
            !o().isEqual(M, g) && z((0, p.B)(g, O));
          }, [g, M, O]),
          i.useEffect(
            () => (
              x.default.track(_.rMx.OPEN_MODAL, {
                type: t,
                source: "Feedback Modal",
              }),
              () => {
                Q.current({
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
            transitionState: S,
            className: k.__invalid_modalRoot,
            "aria-labelledby": K,
            children: [
              (0, l.jsxs)(c.ModalHeader, {
                separator: !1,
                className: k.headerContainer,
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
                    className: k.ratingBody,
                    children: a,
                  }),
                  J
                    ? null
                    : (0, l.jsx)(N, {
                        className: r()(k.emojis, C),
                        selectedRating: D,
                        onChangeRating: function (e) {
                          P(e), e === h.aZ.GOOD && I();
                        },
                        ratingConfigs: v,
                      }),
                ],
              }),
              (0, l.jsxs)(c.ModalContent, {
                className: k.__invalid_content,
                children: [
                  null == D || D === h.aZ.GOOD || J
                    ? null
                    : (0, l.jsx)(c.FormItem, {
                        title: s,
                        className: k.problemInfo,
                        children: (0, l.jsx)(f.Z, {
                          options: G,
                          onClick: function (e) {
                            let { value: t } = e;
                            w(t), !R.includes(t) && I();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !R.includes(t);
                          },
                        }),
                      }),
                  J
                    ? (0, l.jsxs)(c.FormItem, {
                        title: j.intl.string(j.t.h95hcn),
                        className: k.problemInfo,
                        children: [
                          (0, l.jsx)(c.TextArea, {
                            value: F,
                            maxLength: h.iF,
                            onChange: U,
                          }),
                          !L && (0, l.jsx)(E, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (J || !Z) &&
                (0, l.jsx)(c.ModalFooter, {
                  className: k.footer,
                  direction: d.Z.Direction.HORIZONTAL,
                  children: J
                    ? (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              w(null), U("");
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
                            value: B,
                            onChange: () => A(!B),
                            children: (0, l.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              children: j.intl.string(j.t["5E9SBw"]),
                            }),
                          }),
                          null != D &&
                            D !== h.aZ.GOOD &&
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
      var i = n(120356),
        a = n.n(i),
        r = n(481060),
        s = n(259580),
        o = n(995181);
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
//# sourceMappingURL=230266ebc39668775474.js.map
