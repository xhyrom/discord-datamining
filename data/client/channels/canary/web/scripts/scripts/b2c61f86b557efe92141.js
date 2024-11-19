"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["10620"],
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
          return l;
        },
      }),
        n(653041);
      var o = n(392711),
        a = n.n(o);
      let l = (e, t) => {
        let n = a().shuffle(e),
          o = n.findIndex((e) => e.value === t);
        if (o > -1) {
          let e = n[o];
          n.splice(o, 1), n.push(e);
        }
        return n;
      };
    },
    624659: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return j;
        },
      }),
        n(47120);
      var o = n(200651),
        a = n(192379),
        l = n(120356),
        r = n.n(l),
        i = n(392711),
        s = n.n(i),
        c = n(481060),
        u = n(110924),
        d = n(600164),
        b = n(313201),
        m = n(237617),
        f = n(572539),
        h = n(111810),
        _ = n(63063),
        x = n(957115),
        p = n(531578),
        g = n(388032),
        k = n(214859),
        v = n(112003);
      function C() {
        return (0, o.jsx)(c.Text, {
          className: k.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: g.intl.format(g.t.ybi2tL, {
            helpdeskURL: _.Z.getSubmitRequestURL(),
          }),
        });
      }
      function j(e) {
        var t, n;
        let {
            header: l,
            body: i,
            problems: _,
            transitionState: j,
            feedbackProblems: N = {},
            otherKey: E,
            hasCloseButton: S,
            onSubmit: y,
            onClose: B,
            canDismissForever: T = !0,
            showHelpdeskLink: A = !0,
          } = e,
          M = (0, u.Z)(_),
          [I, O] = a.useState(!1),
          [Z, F] = a.useState(null),
          [L, R] = a.useState(s().shuffle(_)),
          [H, D] = a.useState(""),
          [U, Y] = a.useState(!1),
          w = (0, b.Dt)(),
          P = (0, m.Z)(I),
          z = (0, m.Z)(Z),
          K = (0, m.Z)(y),
          G = (0, m.Z)(H),
          W = (0, m.Z)(U),
          V = null != Z ? N[Z] : null,
          q = null != V;
        return (
          a.useEffect(() => {
            !s().isEqual(M, _) && R((0, x.B)(_, E));
          }, [_, M, E]),
          a.useEffect(
            () => () => {
              K.current({
                problem: z.current,
                dontShowAgain: P.current,
                feedback: G.current,
                closeClicked: W.current,
              });
            },
            [],
          ),
          (0, o.jsxs)(c.ModalRoot, {
            transitionState: j,
            "aria-labelledby": w,
            children: [
              (0, o.jsx)(h.Z, {}),
              (0, o.jsxs)(c.ModalHeader, {
                separator: !1,
                className: r()(k.headerContainer, v.headerContainer),
                children: [
                  (0, o.jsx)(c.Heading, {
                    id: w,
                    variant: "heading-xl/bold",
                    color: "header-primary",
                    className: k.header,
                    children: l,
                  }),
                  (0, o.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "header-secondary",
                    className: r()(k.ratingBody, v.headerBody),
                    children:
                      null !== (t = null == V ? void 0 : V.subheader) &&
                      void 0 !== t
                        ? t
                        : i,
                  }),
                  S
                    ? (0, o.jsx)(c.ModalCloseButton, {
                        className: k.modalCloseButton,
                        onClick: function () {
                          Y(!0), B();
                        },
                      })
                    : null,
                ],
              }),
              (0, o.jsxs)(c.ModalContent, {
                className: v.modalContent,
                children: [
                  q
                    ? null
                    : (0, o.jsx)(c.FormItem, {
                        className: k.problemInfo,
                        children: (0, o.jsx)(f.Z, {
                          options: L,
                          onClick: function (e) {
                            let { value: t } = e;
                            F(t), !Object.keys(N).includes(t) && B();
                          },
                        }),
                      }),
                  q
                    ? (0, o.jsxs)(c.FormItem, {
                        className: k.problemInfo,
                        children: [
                          (0, o.jsx)(c.TextArea, {
                            value: H,
                            maxLength: p.iF,
                            onChange: D,
                            className: v.textArea,
                            placeholder:
                              null !== (n = V.hint) && void 0 !== n
                                ? n
                                : g.intl.string(g.t.h95hcn),
                          }),
                          A ? (0, o.jsx)(C, {}) : null,
                        ],
                      })
                    : null,
                ],
              }),
              T || q
                ? (0, o.jsx)(c.ModalFooter, {
                    className: r()(
                      k.footer,
                      q ? v.submitFooter : v.modalFooter,
                    ),
                    direction: d.Z.Direction.HORIZONTAL,
                    children: q
                      ? (0, o.jsxs)(o.Fragment, {
                          children: [
                            (0, o.jsx)(c.Button, {
                              className: v.backButton,
                              size: c.Button.Sizes.NONE,
                              look: c.Button.Looks.LINK,
                              color: c.Button.Colors.PRIMARY,
                              onClick: () => {
                                F(null), D("");
                              },
                              children: g.intl.string(g.t["13/7kZ"]),
                            }),
                            (0, o.jsx)(c.Button, {
                              size: c.Button.Sizes.SMALL,
                              onClick: B,
                              children: g.intl.string(g.t.geKm7u),
                            }),
                          ],
                        })
                      : T
                        ? (0, o.jsx)(c.Checkbox, {
                            size: 24,
                            type: c.Checkbox.Types.INVERTED,
                            value: I,
                            onChange: () => O(!I),
                            children: (0, o.jsx)(c.Text, {
                              variant: "text-md/normal",
                              children: g.intl.string(g.t.lkWab2),
                            }),
                          })
                        : null,
                  })
                : null,
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
      var o = n(200651);
      n(192379);
      var a = n(120356),
        l = n.n(a),
        r = n(481060),
        i = n(259580),
        s = n(20535);
      function c(e) {
        let {
          options: t,
          onClick: n,
          className: a,
          optionClassName: c,
          hideCaret: u,
        } = e;
        return (0, o.jsx)("div", {
          className: l()(s.root, a),
          children: t.map((e, t) =>
            (0, o.jsxs)(
              r.Clickable,
              {
                onClick: () => n(e),
                className: l()(s.option, c),
                children: [
                  (0, o.jsx)(r.Text, {
                    className: s.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == u ? void 0 : u(e)) &&
                    (0, o.jsx)(i.Z, {
                      className: s.caret,
                      direction: i.Z.Directions.RIGHT,
                    }),
                ],
              },
              t,
            ),
          ),
        });
      }
    },
    111810: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var o = n(192379),
        a = n(252618),
        l = n(358085),
        r = n(388032);
      function i() {
        return (
          o.useEffect(() => {
            !l.isPlatformEmbedded &&
              (0, a.EM)({
                messages: [
                  r.intl.string(r.t.KIX3cn),
                  r.intl.string(r.t["UbO+8v"]),
                  r.intl.string(r.t.MbySu7),
                ],
                interval: 600,
                count: 20,
                onlyWhenBlurred: !0,
              });
          }, []),
          null
        );
      }
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
          return l;
        },
      });
      var o,
        a,
        l,
        r,
        i = n(388032);
      function s() {
        return [
          { value: "too_many_notifications", label: i.intl.string(i.t.bQHhT0) },
          { value: "temporary_break", label: i.intl.string(i.t.OuPkvL) },
          { value: "annoying", label: i.intl.string(i.t["3kmAMD"]) },
          { value: "unsafe", label: i.intl.string(i.t.nmW7jI) },
          { value: "spam", label: i.intl.string(i.t.cCPYjo) },
          { value: "other", label: i.intl.string(i.t["7ZIIJy"]) },
        ];
      }
      function c() {
        return [
          { value: "confusion", label: i.intl.string(i.t["64Oph4"]) },
          {
            value: "does_not_achieve_wants",
            label: i.intl.string(i.t["wH5R/v"]),
          },
          { value: "hard_to_access", label: i.intl.string(i.t["4uZBRk"]) },
          { value: "something_else", label: i.intl.string(i.t.YicFbG) },
        ];
      }
      ((o = l || (l = {})).TOO_MANY_NOTIFICATIONS = "too_many_notifications"),
        (o.TEMPORARY_BREAK = "temporary_break"),
        (o.ANNOYING = "annoying"),
        (o.UNSAFE = "unsafe"),
        (o.SPAM = "spam"),
        (o.OTHER = "other"),
        ((a = r || (r = {})).CONFUSION = "confusion"),
        (a.DOES_NOT_ACHIEVE_WANTS = "does_not_achieve_wants"),
        (a.HARD_TO_ACCESS = "hard_to_access"),
        (a.SOMETHING_ELSE = "something_else");
    },
    924400: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var o = n(626135),
        a = n(981631);
      function l(e, t, n, l) {
        o.default.track(a.rMx.DM_MUTE_FEEDBACK_SUBMITTED, {
          reason: e,
          feedback: t,
          skipped: n,
          dont_show_again: l,
        });
      }
    },
    408561: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        });
      var o = n(200651),
        a = n(192379),
        l = n(75124),
        r = n(442837),
        i = n(704215),
        s = n(481060),
        c = n(605236),
        u = n(624659),
        d = n(594174),
        b = n(626135),
        m = n(924400),
        f = n(987562),
        h = n(981631),
        _ = n(388032);
      function x(e) {
        let { transitionState: t, onClose: x, channel: p } = e,
          g = (0, l.Z)(f.TL),
          k = (0, r.e7)([d.default], () =>
            d.default.getUser(p.getRecipientId()),
          );
        return (
          a.useEffect(() => {
            b.default.track(h.rMx.OPEN_MODAL, {
              type: "DM Mute Feedback Modal",
            });
          }, []),
          (0, o.jsx)(u.Z, {
            hasCloseButton: !0,
            header: _.intl.string(_.t.SxsBFB),
            body: _.intl.formatToPlainString(_.t["7kb7z8"], {
              username: null == k ? void 0 : k.username,
            }),
            problems: g,
            feedbackProblems: {
              [f.YA.OTHER]: {
                subheader: _.intl.string(_.t.VQkdtL),
                hint: _.intl.string(_.t.EG3N9f),
              },
            },
            onSubmit: function (e) {
              let {
                problem: t,
                dontShowAgain: a,
                feedback: l,
                closeClicked: r,
              } = e;
              a && (0, c.EW)(i.z.USER_DM_MUTE_FEEDBACK);
              let u = null == t || r;
              (0, m.Z)(t, l, u, a),
                !u &&
                  (0, s.openModalLazy)(async () => {
                    let { default: e } = await n
                      .e("14466")
                      .then(n.bind(n, 729328));
                    return (t) =>
                      (0, o.jsx)(e, { body: _.intl.string(_.t.sYrCub), ...t });
                  });
            },
            onClose: x,
            transitionState: t,
            otherKey: f.YA.OTHER,
            showHelpdeskLink: !1,
          })
        );
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
    112003: function (e, t, n) {
      e.exports = {
        headerContainer: "headerContainer_ca6d9c",
        headerBody: "headerBody_ca6d9c",
        modalContent: "modalContent_ca6d9c",
        modalFooter: "modalFooter_ca6d9c",
        submitFooter: "submitFooter_ca6d9c",
        textArea: "textArea_ca6d9c",
        backButton: "backButton_ca6d9c",
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
//# sourceMappingURL=b2c61f86b557efe92141.js.map
