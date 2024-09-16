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
          return s;
        },
      }),
        n(653041);
      var a = n(392711),
        o = n.n(a);
      let s = (e, t) => {
        let n = o().shuffle(e),
          a = n.findIndex((e) => e.value === t);
        if (a > -1) {
          let e = n[a];
          n.splice(a, 1), n.push(e);
        }
        return n;
      };
    },
    624659: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return L;
        },
      }),
        n(47120);
      var a = n(735250),
        o = n(470079),
        s = n(120356),
        r = n.n(s),
        l = n(392711),
        i = n.n(l),
        c = n(481060),
        u = n(110924),
        d = n(600164),
        E = n(313201),
        b = n(237617),
        _ = n(572539),
        m = n(111810),
        h = n(63063),
        f = n(957115),
        x = n(531578),
        C = n(689938),
        D = n(214859),
        p = n(112003);
      function T() {
        return (0, a.jsx)(c.Text, {
          className: D.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: C.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: h.Z.getSubmitRequestURL(),
          }),
        });
      }
      function L(e) {
        var t, n;
        let {
            header: s,
            body: l,
            problems: h,
            transitionState: L,
            feedbackProblems: B = {},
            otherKey: v,
            hasCloseButton: j,
            onSubmit: I,
            onClose: A,
            canDismissForever: g = !0,
            showHelpdeskLink: Z = !0,
          } = e,
          N = (0, u.Z)(h),
          [M, k] = o.useState(!1),
          [S, F] = o.useState(null),
          [O, R] = o.useState(i().shuffle(h)),
          [y, U] = o.useState(""),
          [K, G] = o.useState(!1),
          H = (0, E.Dt)(),
          P = (0, b.Z)(M),
          z = (0, b.Z)(S),
          w = (0, b.Z)(I),
          Y = (0, b.Z)(y),
          V = (0, b.Z)(K),
          q = null != S ? B[S] : null,
          W = null != q;
        return (
          o.useEffect(() => {
            !i().isEqual(N, h) && R((0, f.B)(h, v));
          }, [h, N, v]),
          o.useEffect(
            () => () => {
              w.current({
                problem: z.current,
                dontShowAgain: P.current,
                feedback: Y.current,
                closeClicked: V.current,
              });
            },
            [],
          ),
          (0, a.jsxs)(c.ModalRoot, {
            transitionState: L,
            "aria-labelledby": H,
            children: [
              (0, a.jsx)(m.Z, {}),
              (0, a.jsxs)(c.ModalHeader, {
                separator: !1,
                className: r()(D.headerContainer, p.headerContainer),
                children: [
                  (0, a.jsx)(c.Heading, {
                    id: H,
                    variant: "heading-xl/bold",
                    color: "header-primary",
                    className: D.header,
                    children: s,
                  }),
                  (0, a.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "header-secondary",
                    className: r()(D.ratingBody, p.headerBody),
                    children:
                      null !== (t = null == q ? void 0 : q.subheader) &&
                      void 0 !== t
                        ? t
                        : l,
                  }),
                  j
                    ? (0, a.jsx)(c.ModalCloseButton, {
                        className: D.modalCloseButton,
                        onClick: function () {
                          G(!0), A();
                        },
                      })
                    : null,
                ],
              }),
              (0, a.jsxs)(c.ModalContent, {
                className: p.modalContent,
                children: [
                  W
                    ? null
                    : (0, a.jsx)(c.FormItem, {
                        className: D.problemInfo,
                        children: (0, a.jsx)(_.Z, {
                          options: O,
                          onClick: function (e) {
                            let { value: t } = e;
                            F(t), !Object.keys(B).includes(t) && A();
                          },
                        }),
                      }),
                  W
                    ? (0, a.jsxs)(c.FormItem, {
                        className: D.problemInfo,
                        children: [
                          (0, a.jsx)(c.TextArea, {
                            value: y,
                            maxLength: x.iF,
                            onChange: U,
                            className: p.textArea,
                            placeholder:
                              null !== (n = q.hint) && void 0 !== n
                                ? n
                                : C.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                          }),
                          Z ? (0, a.jsx)(T, {}) : null,
                        ],
                      })
                    : null,
                ],
              }),
              g || W
                ? (0, a.jsx)(c.ModalFooter, {
                    className: r()(
                      D.footer,
                      W ? p.submitFooter : p.modalFooter,
                    ),
                    direction: d.Z.Direction.HORIZONTAL,
                    children: W
                      ? (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)(c.Button, {
                              className: p.backButton,
                              size: c.Button.Sizes.NONE,
                              look: c.Button.Looks.LINK,
                              color: c.Button.Colors.PRIMARY,
                              onClick: () => {
                                F(null), U("");
                              },
                              children: C.Z.Messages.BACK,
                            }),
                            (0, a.jsx)(c.Button, {
                              size: c.Button.Sizes.SMALL,
                              onClick: A,
                              children: C.Z.Messages.SUBMIT,
                            }),
                          ],
                        })
                      : g
                        ? (0, a.jsx)(c.Checkbox, {
                            size: 24,
                            type: c.Checkbox.Types.INVERTED,
                            value: M,
                            onChange: () => k(!M),
                            children: (0, a.jsx)(c.Text, {
                              variant: "text-md/normal",
                              children: C.Z.Messages.FEEDBACK_DONT_SHOW_AGAIN,
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
      var a = n(735250);
      n(470079);
      var o = n(120356),
        s = n.n(o),
        r = n(481060),
        l = n(259580),
        i = n(20535);
      function c(e) {
        let {
          options: t,
          onClick: n,
          className: o,
          optionClassName: c,
          hideCaret: u,
        } = e;
        return (0, a.jsx)("div", {
          className: s()(i.root, o),
          children: t.map((e, t) =>
            (0, a.jsxs)(
              r.Clickable,
              {
                onClick: () => n(e),
                className: s()(i.option, c),
                children: [
                  (0, a.jsx)(r.Text, {
                    className: i.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == u ? void 0 : u(e)) &&
                    (0, a.jsx)(l.Z, {
                      className: i.caret,
                      direction: l.Z.Directions.RIGHT,
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
          return o;
        },
        e: function () {
          return r;
        },
      });
      var a,
        o,
        s = n(689938);
      function r() {
        return [
          {
            value: "Too hard",
            label: s.Z.Messages.GUILD_DELETE_FEEDBACK_TOO_HARD,
          },
          {
            value: "Testing purposes",
            label: s.Z.Messages.GUILD_DELETE_FEEDBACK_TEST,
          },
          {
            value: "Created on accident",
            label: s.Z.Messages.GUILD_DELETE_FEEDBACK_ACCIDENT,
          },
          {
            value: "Curious about server/template",
            label: s.Z.Messages.GUILD_DELETE_FEEDBACK_TEMPLATE,
          },
          {
            value: "Empty server",
            label: s.Z.Messages.GUILD_DELETE_FEEDBACK_LONELY,
          },
          {
            value: "Inactive server",
            label: s.Z.Messages.GUILD_DELETE_FEEDBACK_INACTIVE,
          },
          { value: "Other", label: s.Z.Messages.GUILD_DELETE_FEEDBACK_OTHER },
        ];
      }
      ((a = o || (o = {})).TOO_HARD = "Too hard"),
        (a.TEST = "Testing purposes"),
        (a.ACCIDENT = "Created on accident"),
        (a.TEMPLATE = "Curious about server/template"),
        (a.LONELY = "Empty server"),
        (a.INACTIVE = "Inactive server"),
        (a.OTHER = "Other");
    },
    652463: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var a = n(626135),
        o = n(981631);
      function s(e, t, n, s) {
        a.default.track(o.rMx.USER_REPORT_SUBMITTED, {
          report_name: "Guild Deletion",
          guild_id: e,
          reason: t,
          feedback: n,
          skipped: s,
        });
      }
    },
    945903: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var a = n(735250),
        o = n(470079),
        s = n(77866),
        r = n(704215),
        l = n(481060),
        i = n(605236),
        c = n(624659),
        u = n(626135),
        d = n(652463),
        E = n(709243),
        b = n(981631),
        _ = n(689938);
      let m = { [E.U.OTHER]: {} };
      function h(e) {
        let { transitionState: t, onClose: h, guildId: f } = e,
          x = (0, s.Z)(E.e);
        return (
          o.useEffect(() => {
            u.default.track(b.rMx.OPEN_MODAL, { type: "Guild Delete Report" });
          }, []),
          (0, a.jsx)(c.Z, {
            header: _.Z.Messages.GUILD_DELETE_FEEDBACK_HEADER,
            body: _.Z.Messages.GUILD_DELETE_FEEDBACK_BODY,
            problems: x,
            feedbackProblems: m,
            onSubmit: function (e) {
              let { problem: t, dontShowAgain: o, feedback: s } = e;
              o && (0, i.EW)(r.z.GUILD_DELETE_FEEDBACK);
              let c = null == t;
              (0, d.Z)(f, t, s, c),
                !c &&
                  (0, l.openModalLazy)(async () => {
                    let { default: e } = await n
                      .e("14466")
                      .then(n.bind(n, 729328));
                    return (t) =>
                      (0, a.jsx)(e, {
                        body: _.Z.Messages.GUILD_DELETE_FEEDBACK_REPORT,
                        ...t,
                      });
                  });
            },
            onClose: h,
            transitionState: t,
            otherKey: E.U.OTHER,
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
//# sourceMappingURL=85e7374aa2e182c687d1.js.map
