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
          return E;
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
        u = n(493773),
        d = n(110924),
        b = n(600164),
        m = n(313201),
        h = n(237617),
        f = n(572539),
        x = n(648159),
        p = n(63063),
        v = n(957115),
        C = n(531578),
        j = n(388032),
        _ = n(720816),
        g = n(574087);
      function k() {
        return (0, o.jsx)(c.Text, {
          className: _.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: j.intl.format(j.t.ybi2tL, {
            helpdeskURL: p.Z.getSubmitRequestURL(),
          }),
        });
      }
      function E(e) {
        var t, n;
        let {
            header: a,
            body: i,
            problems: p,
            transitionState: E,
            feedbackProblems: T = {},
            otherKey: N,
            hasCloseButton: B,
            onSubmit: y,
            onClose: S,
            canDismissForever: Z = !0,
            showHelpdeskLink: L = !0,
          } = e,
          I = (0, d.Z)(p),
          [R, O] = r.useState(!1),
          [A, M] = r.useState(null),
          [D, F] = r.useState(s().shuffle(p)),
          [H, U] = r.useState(""),
          [z, K] = r.useState(!1),
          P = (0, m.Dt)(),
          q = (0, h.Z)(R),
          w = (0, h.Z)(A),
          G = (0, h.Z)(y),
          W = (0, h.Z)(H),
          Y = (0, h.Z)(z),
          V = null != A ? T[A] : null,
          Q = null != V;
        return (
          r.useEffect(() => {
            !s().isEqual(I, p) && F((0, v.B)(p, N));
          }, [p, I, N]),
          (0, u.Z)(() => () => {
            G.current({
              problem: w.current,
              dontShowAgain: q.current,
              feedback: W.current,
              closeClicked: Y.current,
            });
          }),
          (0, o.jsxs)(c.ModalRoot, {
            transitionState: E,
            "aria-labelledby": P,
            children: [
              (0, o.jsx)(x.Z, {}),
              (0, o.jsxs)(c.ModalHeader, {
                separator: !1,
                className: l()(_.headerContainer, g.headerContainer),
                children: [
                  (0, o.jsx)(c.Heading, {
                    id: P,
                    variant: "heading-xl/bold",
                    color: "header-primary",
                    className: _.header,
                    children: a,
                  }),
                  (0, o.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "header-secondary",
                    className: l()(_.ratingBody, g.headerBody),
                    children:
                      null !== (t = null == V ? void 0 : V.subheader) &&
                      void 0 !== t
                        ? t
                        : i,
                  }),
                  B
                    ? (0, o.jsx)(c.ModalCloseButton, {
                        className: _.modalCloseButton,
                        onClick: function () {
                          K(!0), S();
                        },
                      })
                    : null,
                ],
              }),
              (0, o.jsxs)(c.ModalContent, {
                className: g.modalContent,
                children: [
                  Q
                    ? null
                    : (0, o.jsx)(c.FormItem, {
                        className: _.problemInfo,
                        children: (0, o.jsx)(f.Z, {
                          options: D,
                          onClick: function (e) {
                            let { value: t } = e;
                            M(t), !Object.keys(T).includes(t) && S();
                          },
                        }),
                      }),
                  Q
                    ? (0, o.jsxs)(c.FormItem, {
                        className: _.problemInfo,
                        children: [
                          (0, o.jsx)(c.TextArea, {
                            value: H,
                            maxLength: C.iF,
                            onChange: U,
                            className: g.textArea,
                            placeholder:
                              null !== (n = V.hint) && void 0 !== n
                                ? n
                                : j.intl.string(j.t.h95hcn),
                          }),
                          L ? (0, o.jsx)(k, {}) : null,
                        ],
                      })
                    : null,
                ],
              }),
              Z || Q
                ? (0, o.jsx)(c.ModalFooter, {
                    className: l()(
                      _.footer,
                      Q ? g.submitFooter : g.modalFooter,
                    ),
                    direction: b.Z.Direction.HORIZONTAL,
                    children: Q
                      ? (0, o.jsxs)(o.Fragment, {
                          children: [
                            (0, o.jsx)(c.Button, {
                              className: g.backButton,
                              size: c.Button.Sizes.NONE,
                              look: c.Button.Looks.LINK,
                              color: c.Button.Colors.PRIMARY,
                              onClick: () => {
                                M(null), U("");
                              },
                              children: j.intl.string(j.t["13/7kZ"]),
                            }),
                            (0, o.jsx)(c.Button, {
                              size: c.Button.Sizes.SMALL,
                              onClick: S,
                              children: j.intl.string(j.t.geKm7u),
                            }),
                          ],
                        })
                      : Z
                        ? (0, o.jsx)(c.Checkbox, {
                            size: 24,
                            type: c.Checkbox.Types.INVERTED,
                            value: R,
                            onChange: () => O(!R),
                            children: (0, o.jsx)(c.Text, {
                              variant: "text-md/normal",
                              children: j.intl.string(j.t.lkWab2),
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
        s = n(995181);
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
        a = n(704215),
        l = n(481060),
        i = n(211266),
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
          v = (0, i.Z)(b.e);
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
              let { problem: t, dontShowAgain: r, feedback: i } = e;
              r && (0, s.EW)(a.z.GUILD_DELETE_FEEDBACK);
              let c = null == t;
              (0, d.Z)(p, t, i, c),
                !c &&
                  (0, l.openModalLazy)(async () => {
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
    574087: function (e, t, n) {
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
//# sourceMappingURL=b39e96b1070a11ccd10d.js.map
