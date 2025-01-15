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
          return v;
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
        u = n(493773),
        d = n(110924),
        b = n(600164),
        m = n(313201),
        f = n(237617),
        h = n(572539),
        x = n(648159),
        C = n(63063),
        E = n(957115),
        p = n(531578),
        N = n(388032),
        j = n(369769),
        I = n(984717);
      function T() {
        return (0, o.jsx)(c.Text, {
          className: j.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: N.intl.format(N.t.ybi2tL, {
            helpdeskURL: C.Z.getSubmitRequestURL(),
          }),
        });
      }
      function v(e) {
        var t, n;
        let {
            header: a,
            body: i,
            problems: C,
            transitionState: v,
            feedbackProblems: g = {},
            otherKey: _,
            hasCloseButton: S,
            onSubmit: k,
            onClose: R,
            canDismissForever: B = !0,
            showHelpdeskLink: O = !0,
          } = e,
          A = (0, d.Z)(C),
          [y, L] = l.useState(!1),
          [Z, M] = l.useState(null),
          [D, F] = l.useState(s().shuffle(C)),
          [U, V] = l.useState(""),
          [P, G] = l.useState(!1),
          H = (0, m.Dt)(),
          z = (0, f.Z)(y),
          K = (0, f.Z)(Z),
          X = (0, f.Z)(k),
          w = (0, f.Z)(U),
          q = (0, f.Z)(P),
          W = null != Z ? g[Z] : null,
          Y = null != W;
        return (
          l.useEffect(() => {
            !s().isEqual(A, C) && F((0, E.B)(C, _));
          }, [C, A, _]),
          (0, u.Z)(() => () => {
            X.current({
              problem: K.current,
              dontShowAgain: z.current,
              feedback: w.current,
              closeClicked: q.current,
            });
          }),
          (0, o.jsxs)(c.ModalRoot, {
            transitionState: v,
            "aria-labelledby": H,
            children: [
              (0, o.jsx)(x.Z, {}),
              (0, o.jsxs)(c.ModalHeader, {
                separator: !1,
                className: r()(j.headerContainer, I.headerContainer),
                children: [
                  (0, o.jsx)(c.Heading, {
                    id: H,
                    variant: "heading-xl/bold",
                    color: "header-primary",
                    className: j.header,
                    children: a,
                  }),
                  (0, o.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "header-secondary",
                    className: r()(j.ratingBody, I.headerBody),
                    children:
                      null !== (t = null == W ? void 0 : W.subheader) &&
                      void 0 !== t
                        ? t
                        : i,
                  }),
                  S
                    ? (0, o.jsx)(c.ModalCloseButton, {
                        className: j.modalCloseButton,
                        onClick: function () {
                          G(!0), R();
                        },
                      })
                    : null,
                ],
              }),
              (0, o.jsxs)(c.ModalContent, {
                className: I.modalContent,
                children: [
                  Y
                    ? null
                    : (0, o.jsx)(c.FormItem, {
                        className: j.problemInfo,
                        children: (0, o.jsx)(h.Z, {
                          options: D,
                          onClick: function (e) {
                            let { value: t } = e;
                            M(t), !Object.keys(g).includes(t) && R();
                          },
                        }),
                      }),
                  Y
                    ? (0, o.jsxs)(c.FormItem, {
                        className: j.problemInfo,
                        children: [
                          (0, o.jsx)(c.TextArea, {
                            value: U,
                            maxLength: p.iF,
                            onChange: V,
                            className: I.textArea,
                            placeholder:
                              null !== (n = W.hint) && void 0 !== n
                                ? n
                                : N.intl.string(N.t.h95hcn),
                          }),
                          O ? (0, o.jsx)(T, {}) : null,
                        ],
                      })
                    : null,
                ],
              }),
              B || Y
                ? (0, o.jsx)(c.ModalFooter, {
                    className: r()(
                      j.footer,
                      Y ? I.submitFooter : I.modalFooter,
                    ),
                    direction: b.Z.Direction.HORIZONTAL,
                    children: Y
                      ? (0, o.jsxs)(o.Fragment, {
                          children: [
                            (0, o.jsx)(c.Button, {
                              className: I.backButton,
                              size: c.Button.Sizes.NONE,
                              look: c.Button.Looks.LINK,
                              color: c.Button.Colors.PRIMARY,
                              onClick: () => {
                                M(null), V("");
                              },
                              children: N.intl.string(N.t["13/7kZ"]),
                            }),
                            (0, o.jsx)(c.Button, {
                              size: c.Button.Sizes.SMALL,
                              onClick: R,
                              children: N.intl.string(N.t.geKm7u),
                            }),
                          ],
                        })
                      : B
                        ? (0, o.jsx)(c.Checkbox, {
                            size: 24,
                            type: c.Checkbox.Types.INVERTED,
                            value: y,
                            onChange: () => L(!y),
                            children: (0, o.jsx)(c.Text, {
                              variant: "text-md/normal",
                              children: N.intl.string(N.t.lkWab2),
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
        s = n(547803);
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
    648159: function (e, t, n) {
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
        a = n(704215),
        r = n(481060),
        i = n(211266),
        s = n(605236),
        c = n(624659),
        u = n(626135),
        d = n(263226),
        b = n(225634),
        m = n(981631),
        f = n(388032);
      function h(e) {
        let { transitionState: t, onClose: h, guildId: x, guildName: C } = e,
          E = (0, i.Z)(b.S);
        return (
          l.useEffect(() => {
            u.default.track(m.rMx.OPEN_MODAL, { type: "Guild Leave Report" });
          }, []),
          (0, o.jsx)(c.Z, {
            header: f.intl.string(f.t.YT6YAA),
            body: f.intl.formatToPlainString(f.t.xpn2vL, { server: C }),
            problems: E,
            onSubmit: function (e) {
              let { problem: t, dontShowAgain: l, feedback: i } = e;
              l && (0, s.EW)(a.z.GUILD_LEAVE_FEEDBACK);
              let c = null == t;
              (0, d.Z)(x, t, i, c),
                !c &&
                  (0, r.openModalLazy)(async () => {
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
    984717: function (e, t, n) {
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
//# sourceMappingURL=9f2e8c5e3f11f5182e49.js.map
