"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31811"],
  {
    936445: function (e) {
      e.exports = "/assets/0b3b85ccbde560fed689.svg";
    },
    900564: function (e) {
      e.exports = "/assets/a8315da78d79c09bb24e.svg";
    },
    670903: function (e) {
      e.exports = "/assets/b2ae62e3f77efa49ca11.svg";
    },
    957115: function (e, t, a) {
      a.d(t, {
        B: function () {
          return s;
        },
      }),
        a(653041);
      var n = a(392711),
        o = a.n(n);
      let s = (e, t) => {
        let a = o().shuffle(e),
          n = a.findIndex((e) => e.value === t);
        if (n > -1) {
          let e = a[n];
          a.splice(n, 1), a.push(e);
        }
        return a;
      };
    },
    624659: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return L;
        },
      }),
        a(47120);
      var n = a(735250),
        o = a(470079),
        s = a(120356),
        r = a.n(s),
        l = a(392711),
        i = a.n(l),
        c = a(481060),
        u = a(110924),
        d = a(600164),
        E = a(313201),
        b = a(237617),
        _ = a(572539),
        m = a(111810),
        h = a(63063),
        f = a(957115),
        x = a(531578),
        C = a(689938),
        D = a(940256),
        p = a(138483);
      function T() {
        return (0, n.jsx)(c.Text, {
          className: D.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: C.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: h.Z.getSubmitRequestURL(),
          }),
        });
      }
      function L(e) {
        var t, a;
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
          [F, S] = o.useState(null),
          [O, R] = o.useState(i().shuffle(h)),
          [y, U] = o.useState(""),
          K = (0, E.Dt)(),
          G = (0, b.Z)(M),
          H = (0, b.Z)(F),
          P = (0, b.Z)(I),
          z = (0, b.Z)(y),
          w = null != F ? B[F] : null,
          Y = null != w;
        return (
          o.useEffect(() => {
            !i().isEqual(N, h) && R((0, f.B)(h, v));
          }, [h, N, v]),
          o.useEffect(
            () => () => {
              P.current({
                problem: H.current,
                dontShowAgain: G.current,
                feedback: z.current,
              });
            },
            [],
          ),
          (0, n.jsxs)(c.ModalRoot, {
            transitionState: L,
            "aria-labelledby": K,
            children: [
              (0, n.jsx)(m.Z, {}),
              (0, n.jsxs)(c.ModalHeader, {
                separator: !1,
                className: r()(D.headerContainer, p.headerContainer),
                children: [
                  (0, n.jsx)(c.Heading, {
                    id: K,
                    variant: "heading-xl/bold",
                    color: "header-primary",
                    className: D.header,
                    children: s,
                  }),
                  (0, n.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "header-secondary",
                    className: r()(D.ratingBody, p.headerBody),
                    children:
                      null !== (t = null == w ? void 0 : w.subheader) &&
                      void 0 !== t
                        ? t
                        : l,
                  }),
                  j
                    ? (0, n.jsx)(c.ModalCloseButton, {
                        className: D.modalCloseButton,
                        onClick: A,
                      })
                    : null,
                ],
              }),
              (0, n.jsxs)(c.ModalContent, {
                className: p.modalContent,
                children: [
                  Y
                    ? null
                    : (0, n.jsx)(c.FormItem, {
                        className: D.problemInfo,
                        children: (0, n.jsx)(_.Z, {
                          options: O,
                          onClick: function (e) {
                            let { value: t } = e;
                            S(t), !Object.keys(B).includes(t) && A();
                          },
                        }),
                      }),
                  Y
                    ? (0, n.jsxs)(c.FormItem, {
                        className: D.problemInfo,
                        children: [
                          (0, n.jsx)(c.TextArea, {
                            value: y,
                            maxLength: x.iF,
                            onChange: U,
                            className: p.textArea,
                            placeholder:
                              null !== (a = w.hint) && void 0 !== a
                                ? a
                                : C.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                          }),
                          Z ? (0, n.jsx)(T, {}) : null,
                        ],
                      })
                    : null,
                ],
              }),
              g || Y
                ? (0, n.jsx)(c.ModalFooter, {
                    className: r()(
                      D.footer,
                      Y ? p.submitFooter : p.modalFooter,
                    ),
                    direction: d.Z.Direction.HORIZONTAL,
                    children: Y
                      ? (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)(c.Button, {
                              className: p.backButton,
                              size: c.Button.Sizes.NONE,
                              look: c.Button.Looks.LINK,
                              color: c.Button.Colors.PRIMARY,
                              onClick: () => {
                                S(null), U("");
                              },
                              children: C.Z.Messages.BACK,
                            }),
                            (0, n.jsx)(c.Button, {
                              size: c.Button.Sizes.SMALL,
                              onClick: A,
                              children: C.Z.Messages.SUBMIT,
                            }),
                          ],
                        })
                      : g
                        ? (0, n.jsx)(c.Checkbox, {
                            size: 24,
                            type: c.Checkbox.Types.INVERTED,
                            value: M,
                            onChange: () => k(!M),
                            children: (0, n.jsx)(c.Text, {
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
    572539: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return c;
        },
      });
      var n = a(735250);
      a(470079);
      var o = a(120356),
        s = a.n(o),
        r = a(481060),
        l = a(259580),
        i = a(373521);
      function c(e) {
        let {
          options: t,
          onClick: a,
          className: o,
          optionClassName: c,
          hideCaret: u,
        } = e;
        return (0, n.jsx)("div", {
          className: s()(i.root, o),
          children: t.map((e, t) =>
            (0, n.jsxs)(
              r.Clickable,
              {
                onClick: () => a(e),
                className: s()(i.option, c),
                children: [
                  (0, n.jsx)(r.Text, {
                    className: i.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == u ? void 0 : u(e)) &&
                    (0, n.jsx)(l.Z, {
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
    709243: function (e, t, a) {
      a.d(t, {
        U: function () {
          return o;
        },
        e: function () {
          return r;
        },
      });
      var n,
        o,
        s = a(689938);
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
      ((n = o || (o = {})).TOO_HARD = "Too hard"),
        (n.TEST = "Testing purposes"),
        (n.ACCIDENT = "Created on accident"),
        (n.TEMPLATE = "Curious about server/template"),
        (n.LONELY = "Empty server"),
        (n.INACTIVE = "Inactive server"),
        (n.OTHER = "Other");
    },
    652463: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = a(626135),
        o = a(981631);
      function s(e, t, a, s) {
        n.default.track(o.rMx.USER_REPORT_SUBMITTED, {
          report_name: "Guild Deletion",
          guild_id: e,
          reason: t,
          feedback: a,
          skipped: s,
        });
      }
    },
    945903: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return h;
          },
        });
      var n = a(735250),
        o = a(470079),
        s = a(77866),
        r = a(704215),
        l = a(481060),
        i = a(605236),
        c = a(624659),
        u = a(626135),
        d = a(652463),
        E = a(709243),
        b = a(981631),
        _ = a(689938);
      let m = { [E.U.OTHER]: {} };
      function h(e) {
        let { transitionState: t, onClose: h, guildId: f } = e,
          x = (0, s.Z)(E.e);
        return (
          o.useEffect(() => {
            u.default.track(b.rMx.OPEN_MODAL, { type: "Guild Delete Report" });
          }, []),
          (0, n.jsx)(c.Z, {
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
                    let { default: e } = await a
                      .e("14466")
                      .then(a.bind(a, 729328));
                    return (t) =>
                      (0, n.jsx)(e, {
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
    940256: function (e, t, a) {
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
    138483: function (e, t, a) {
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
    373521: function (e, t, a) {
      e.exports = {
        root: "root_c3b890",
        option: "option_c3b890",
        text: "text_c3b890",
        caret: "caret_c3b890",
      };
    },
  },
]);
//# sourceMappingURL=d97e2a3d366be7adea4b.js.map
