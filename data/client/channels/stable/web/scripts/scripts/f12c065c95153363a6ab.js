"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31811"],
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
        r = n.n(o);
      let a = (e, t) => {
        let n = r().shuffle(e),
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
          return k;
        },
      }),
        n(47120);
      var o = n(200651),
        r = n(192379),
        a = n(120356),
        l = n.n(a),
        i = n(392711),
        s = n.n(i),
        c = n(481060),
        u = n(110924),
        d = n(600164),
        b = n(313201),
        m = n(237617),
        h = n(572539),
        f = n(111810),
        x = n(63063),
        p = n(957115),
        v = n(531578),
        C = n(388032),
        j = n(214859),
        _ = n(112003);
      function g() {
        return (0, o.jsx)(c.Text, {
          className: j.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: C.intl.format(C.t.ybi2tL, {
            helpdeskURL: x.Z.getSubmitRequestURL(),
          }),
        });
      }
      function k(e) {
        var t, n;
        let {
            header: a,
            body: i,
            problems: x,
            transitionState: k,
            feedbackProblems: E = {},
            otherKey: T,
            hasCloseButton: N,
            onSubmit: B,
            onClose: y,
            canDismissForever: S = !0,
            showHelpdeskLink: Z = !0,
          } = e,
          L = (0, u.Z)(x),
          [I, R] = r.useState(!1),
          [O, A] = r.useState(null),
          [M, D] = r.useState(s().shuffle(x)),
          [F, H] = r.useState(""),
          [U, z] = r.useState(!1),
          K = (0, b.Dt)(),
          P = (0, m.Z)(I),
          q = (0, m.Z)(O),
          w = (0, m.Z)(B),
          G = (0, m.Z)(F),
          W = (0, m.Z)(U),
          Y = null != O ? E[O] : null,
          V = null != Y;
        return (
          r.useEffect(() => {
            !s().isEqual(L, x) && D((0, p.B)(x, T));
          }, [x, L, T]),
          r.useEffect(
            () => () => {
              w.current({
                problem: q.current,
                dontShowAgain: P.current,
                feedback: G.current,
                closeClicked: W.current,
              });
            },
            [],
          ),
          (0, o.jsxs)(c.ModalRoot, {
            transitionState: k,
            "aria-labelledby": K,
            children: [
              (0, o.jsx)(f.Z, {}),
              (0, o.jsxs)(c.ModalHeader, {
                separator: !1,
                className: l()(j.headerContainer, _.headerContainer),
                children: [
                  (0, o.jsx)(c.Heading, {
                    id: K,
                    variant: "heading-xl/bold",
                    color: "header-primary",
                    className: j.header,
                    children: a,
                  }),
                  (0, o.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "header-secondary",
                    className: l()(j.ratingBody, _.headerBody),
                    children:
                      null !== (t = null == Y ? void 0 : Y.subheader) &&
                      void 0 !== t
                        ? t
                        : i,
                  }),
                  N
                    ? (0, o.jsx)(c.ModalCloseButton, {
                        className: j.modalCloseButton,
                        onClick: function () {
                          z(!0), y();
                        },
                      })
                    : null,
                ],
              }),
              (0, o.jsxs)(c.ModalContent, {
                className: _.modalContent,
                children: [
                  V
                    ? null
                    : (0, o.jsx)(c.FormItem, {
                        className: j.problemInfo,
                        children: (0, o.jsx)(h.Z, {
                          options: M,
                          onClick: function (e) {
                            let { value: t } = e;
                            A(t), !Object.keys(E).includes(t) && y();
                          },
                        }),
                      }),
                  V
                    ? (0, o.jsxs)(c.FormItem, {
                        className: j.problemInfo,
                        children: [
                          (0, o.jsx)(c.TextArea, {
                            value: F,
                            maxLength: v.iF,
                            onChange: H,
                            className: _.textArea,
                            placeholder:
                              null !== (n = Y.hint) && void 0 !== n
                                ? n
                                : C.intl.string(C.t.h95hcn),
                          }),
                          Z ? (0, o.jsx)(g, {}) : null,
                        ],
                      })
                    : null,
                ],
              }),
              S || V
                ? (0, o.jsx)(c.ModalFooter, {
                    className: l()(
                      j.footer,
                      V ? _.submitFooter : _.modalFooter,
                    ),
                    direction: d.Z.Direction.HORIZONTAL,
                    children: V
                      ? (0, o.jsxs)(o.Fragment, {
                          children: [
                            (0, o.jsx)(c.Button, {
                              className: _.backButton,
                              size: c.Button.Sizes.NONE,
                              look: c.Button.Looks.LINK,
                              color: c.Button.Colors.PRIMARY,
                              onClick: () => {
                                A(null), H("");
                              },
                              children: C.intl.string(C.t["13/7kZ"]),
                            }),
                            (0, o.jsx)(c.Button, {
                              size: c.Button.Sizes.SMALL,
                              onClick: y,
                              children: C.intl.string(C.t.geKm7u),
                            }),
                          ],
                        })
                      : S
                        ? (0, o.jsx)(c.Checkbox, {
                            size: 24,
                            type: c.Checkbox.Types.INVERTED,
                            value: I,
                            onChange: () => R(!I),
                            children: (0, o.jsx)(c.Text, {
                              variant: "text-md/normal",
                              children: C.intl.string(C.t.lkWab2),
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
      var r = n(120356),
        a = n.n(r),
        l = n(481060),
        i = n(259580),
        s = n(20535);
      function c(e) {
        let {
          options: t,
          onClick: n,
          className: r,
          optionClassName: c,
          hideCaret: u,
        } = e;
        return (0, o.jsx)("div", {
          className: a()(s.root, r),
          children: t.map((e, t) =>
            (0, o.jsxs)(
              l.Clickable,
              {
                onClick: () => n(e),
                className: a()(s.option, c),
                children: [
                  (0, o.jsx)(l.Text, {
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
    709243: function (e, t, n) {
      n.d(t, {
        U: function () {
          return r;
        },
        e: function () {
          return l;
        },
      });
      var o,
        r,
        a = n(388032);
      function l() {
        return [
          { value: "Too hard", label: a.intl.string(a.t["iZf+eH"]) },
          { value: "Testing purposes", label: a.intl.string(a.t.SSvKBg) },
          { value: "Created on accident", label: a.intl.string(a.t.NY8qOj) },
          {
            value: "Curious about server/template",
            label: a.intl.string(a.t.QoHpTk),
          },
          { value: "Empty server", label: a.intl.string(a.t["+bETpK"]) },
          { value: "Inactive server", label: a.intl.string(a.t.S9NQEh) },
          { value: "Other", label: a.intl.string(a.t.LqXaV1) },
        ];
      }
      ((o = r || (r = {})).TOO_HARD = "Too hard"),
        (o.TEST = "Testing purposes"),
        (o.ACCIDENT = "Created on accident"),
        (o.TEMPLATE = "Curious about server/template"),
        (o.LONELY = "Empty server"),
        (o.INACTIVE = "Inactive server"),
        (o.OTHER = "Other");
    },
    652463: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var o = n(626135),
        r = n(981631);
      function a(e, t, n, a) {
        o.default.track(r.rMx.USER_REPORT_SUBMITTED, {
          report_name: "Guild Deletion",
          guild_id: e,
          reason: t,
          feedback: n,
          skipped: a,
        });
      }
    },
    945903: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        });
      var o = n(200651),
        r = n(192379),
        a = n(75124),
        l = n(704215),
        i = n(481060),
        s = n(605236),
        c = n(624659),
        u = n(626135),
        d = n(652463),
        b = n(709243),
        m = n(981631),
        h = n(388032);
      let f = { [b.U.OTHER]: {} };
      function x(e) {
        let { transitionState: t, onClose: x, guildId: p } = e,
          v = (0, a.Z)(b.e);
        return (
          r.useEffect(() => {
            u.default.track(m.rMx.OPEN_MODAL, { type: "Guild Delete Report" });
          }, []),
          (0, o.jsx)(c.Z, {
            header: h.intl.string(h.t.WCzx1t),
            body: h.intl.string(h.t.UCmWhY),
            problems: v,
            feedbackProblems: f,
            onSubmit: function (e) {
              let { problem: t, dontShowAgain: r, feedback: a } = e;
              r && (0, s.EW)(l.z.GUILD_DELETE_FEEDBACK);
              let c = null == t;
              (0, d.Z)(p, t, a, c),
                !c &&
                  (0, i.openModalLazy)(async () => {
                    let { default: e } = await n
                      .e("14466")
                      .then(n.bind(n, 729328));
                    return (t) =>
                      (0, o.jsx)(e, {
                        body: h.intl.string(h.t["aMoJ+P"]),
                        ...t,
                      });
                  });
            },
            onClose: x,
            transitionState: t,
            otherKey: b.U.OTHER,
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
//# sourceMappingURL=f12c065c95153363a6ab.js.map
