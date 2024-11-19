"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["74920"],
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
          return a;
        },
      }),
        n(653041);
      var o = n(392711),
        l = n.n(o);
      let a = (e, t) => {
        let n = l().shuffle(e),
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
          return T;
        },
      }),
        n(47120);
      var o = n(200651),
        l = n(192379),
        a = n(120356),
        r = n.n(a),
        i = n(392711),
        s = n.n(i),
        c = n(481060),
        u = n(110924),
        d = n(600164),
        b = n(313201),
        m = n(237617),
        f = n(572539),
        h = n(111810),
        x = n(63063),
        C = n(957115),
        E = n(531578),
        p = n(388032),
        N = n(214859),
        j = n(112003);
      function I() {
        return (0, o.jsx)(c.Text, {
          className: N.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: p.intl.format(p.t.ybi2tL, {
            helpdeskURL: x.Z.getSubmitRequestURL(),
          }),
        });
      }
      function T(e) {
        var t, n;
        let {
            header: a,
            body: i,
            problems: x,
            transitionState: T,
            feedbackProblems: v = {},
            otherKey: g,
            hasCloseButton: _,
            onSubmit: S,
            onClose: k,
            canDismissForever: R = !0,
            showHelpdeskLink: B = !0,
          } = e,
          O = (0, u.Z)(x),
          [A, y] = l.useState(!1),
          [L, Z] = l.useState(null),
          [M, D] = l.useState(s().shuffle(x)),
          [F, U] = l.useState(""),
          [V, P] = l.useState(!1),
          G = (0, b.Dt)(),
          H = (0, m.Z)(A),
          z = (0, m.Z)(L),
          K = (0, m.Z)(S),
          X = (0, m.Z)(F),
          w = (0, m.Z)(V),
          q = null != L ? v[L] : null,
          W = null != q;
        return (
          l.useEffect(() => {
            !s().isEqual(O, x) && D((0, C.B)(x, g));
          }, [x, O, g]),
          l.useEffect(
            () => () => {
              K.current({
                problem: z.current,
                dontShowAgain: H.current,
                feedback: X.current,
                closeClicked: w.current,
              });
            },
            [],
          ),
          (0, o.jsxs)(c.ModalRoot, {
            transitionState: T,
            "aria-labelledby": G,
            children: [
              (0, o.jsx)(h.Z, {}),
              (0, o.jsxs)(c.ModalHeader, {
                separator: !1,
                className: r()(N.headerContainer, j.headerContainer),
                children: [
                  (0, o.jsx)(c.Heading, {
                    id: G,
                    variant: "heading-xl/bold",
                    color: "header-primary",
                    className: N.header,
                    children: a,
                  }),
                  (0, o.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "header-secondary",
                    className: r()(N.ratingBody, j.headerBody),
                    children:
                      null !== (t = null == q ? void 0 : q.subheader) &&
                      void 0 !== t
                        ? t
                        : i,
                  }),
                  _
                    ? (0, o.jsx)(c.ModalCloseButton, {
                        className: N.modalCloseButton,
                        onClick: function () {
                          P(!0), k();
                        },
                      })
                    : null,
                ],
              }),
              (0, o.jsxs)(c.ModalContent, {
                className: j.modalContent,
                children: [
                  W
                    ? null
                    : (0, o.jsx)(c.FormItem, {
                        className: N.problemInfo,
                        children: (0, o.jsx)(f.Z, {
                          options: M,
                          onClick: function (e) {
                            let { value: t } = e;
                            Z(t), !Object.keys(v).includes(t) && k();
                          },
                        }),
                      }),
                  W
                    ? (0, o.jsxs)(c.FormItem, {
                        className: N.problemInfo,
                        children: [
                          (0, o.jsx)(c.TextArea, {
                            value: F,
                            maxLength: E.iF,
                            onChange: U,
                            className: j.textArea,
                            placeholder:
                              null !== (n = q.hint) && void 0 !== n
                                ? n
                                : p.intl.string(p.t.h95hcn),
                          }),
                          B ? (0, o.jsx)(I, {}) : null,
                        ],
                      })
                    : null,
                ],
              }),
              R || W
                ? (0, o.jsx)(c.ModalFooter, {
                    className: r()(
                      N.footer,
                      W ? j.submitFooter : j.modalFooter,
                    ),
                    direction: d.Z.Direction.HORIZONTAL,
                    children: W
                      ? (0, o.jsxs)(o.Fragment, {
                          children: [
                            (0, o.jsx)(c.Button, {
                              className: j.backButton,
                              size: c.Button.Sizes.NONE,
                              look: c.Button.Looks.LINK,
                              color: c.Button.Colors.PRIMARY,
                              onClick: () => {
                                Z(null), U("");
                              },
                              children: p.intl.string(p.t["13/7kZ"]),
                            }),
                            (0, o.jsx)(c.Button, {
                              size: c.Button.Sizes.SMALL,
                              onClick: k,
                              children: p.intl.string(p.t.geKm7u),
                            }),
                          ],
                        })
                      : R
                        ? (0, o.jsx)(c.Checkbox, {
                            size: 24,
                            type: c.Checkbox.Types.INVERTED,
                            value: A,
                            onChange: () => y(!A),
                            children: (0, o.jsx)(c.Text, {
                              variant: "text-md/normal",
                              children: p.intl.string(p.t.lkWab2),
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
      var l = n(120356),
        a = n.n(l),
        r = n(481060),
        i = n(259580),
        s = n(20535);
      function c(e) {
        let {
          options: t,
          onClick: n,
          className: l,
          optionClassName: c,
          hideCaret: u,
        } = e;
        return (0, o.jsx)("div", {
          className: a()(s.root, l),
          children: t.map((e, t) =>
            (0, o.jsxs)(
              r.Clickable,
              {
                onClick: () => n(e),
                className: a()(s.option, c),
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
        l = n(252618),
        a = n(358085),
        r = n(388032);
      function i() {
        return (
          o.useEffect(() => {
            !a.isPlatformEmbedded &&
              (0, l.EM)({
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
    225634: function (e, t, n) {
      n.d(t, {
        G: function () {
          return l;
        },
        S: function () {
          return r;
        },
      });
      var o,
        l,
        a = n(388032);
      function r() {
        return [
          { value: "UNINTERESTED", label: a.intl.string(a.t.OXXDs7) },
          { value: "ACCIDENT", label: a.intl.string(a.t["2MK5Z2"]) },
          { value: "INACTIVE", label: a.intl.string(a.t.TOPdQ0) },
          { value: "UNCOMFORTABLE", label: a.intl.string(a.t.PSouPj) },
          { value: "DISRUPTIVE", label: a.intl.string(a.t.KoIVMz) },
          { value: "OVERACTIVE", label: a.intl.string(a.t.CcjjRk) },
          { value: "CONFUSING", label: a.intl.string(a.t["k+MXS0"]) },
          { value: "OTHER", label: a.intl.string(a.t.LqXaV1) },
        ];
      }
      ((o = l || (l = {})).UNINTERESTED = "UNINTERESTED"),
        (o.ACCIDENT = "ACCIDENT"),
        (o.INACTIVE = "INACTIVE"),
        (o.UNCOMFORTABLE = "UNCOMFORTABLE"),
        (o.DISRUPTIVE = "DISRUPTIVE"),
        (o.OVERACTIVE = "OVERACTIVE"),
        (o.CONFUSING = "CONFUSING"),
        (o.OTHER = "OTHER");
    },
    263226: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var o = n(626135),
        l = n(981631);
      function a(e, t, n, a) {
        o.default.track(l.rMx.USER_REPORT_SUBMITTED, {
          report_name: "Guild Leave",
          guild_id: e,
          reason: t,
          feedback: n,
          skipped: a,
        });
      }
    },
    131102: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var o = n(200651),
        l = n(192379),
        a = n(75124),
        r = n(704215),
        i = n(481060),
        s = n(605236),
        c = n(624659),
        u = n(626135),
        d = n(263226),
        b = n(225634),
        m = n(981631),
        f = n(388032);
      function h(e) {
        let { transitionState: t, onClose: h, guildId: x, guildName: C } = e,
          E = (0, a.Z)(b.S);
        return (
          l.useEffect(() => {
            u.default.track(m.rMx.OPEN_MODAL, { type: "Guild Leave Report" });
          }, []),
          (0, o.jsx)(c.Z, {
            header: f.intl.string(f.t.YT6YAA),
            body: f.intl.formatToPlainString(f.t.xpn2vL, { server: C }),
            problems: E,
            onSubmit: function (e) {
              let { problem: t, dontShowAgain: l, feedback: a } = e;
              l && (0, s.EW)(r.z.GUILD_LEAVE_FEEDBACK);
              let c = null == t;
              (0, d.Z)(x, t, a, c),
                !c &&
                  (0, i.openModalLazy)(async () => {
                    let { default: e } = await n
                      .e("14466")
                      .then(n.bind(n, 729328));
                    return (t) =>
                      (0, o.jsx)(e, { body: f.intl.string(f.t.Gxbt29), ...t });
                  });
            },
            onClose: h,
            transitionState: t,
            otherKey: b.G.OTHER,
            hasCloseButton: !0,
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
//# sourceMappingURL=925149cd1562277fdca5.js.map
