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
    957115: function (e, t, n) {
      n.d(t, {
        B: function () {
          return a;
        },
      }),
        n(653041);
      var s = n(392711),
        o = n.n(s);
      let a = (e, t) => {
        let n = o().shuffle(e),
          s = n.findIndex((e) => e.value === t);
        if (s > -1) {
          let e = n[s];
          n.splice(s, 1), n.push(e);
        }
        return n;
      };
    },
    624659: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      }),
        n(47120);
      var s = n(735250),
        o = n(470079),
        a = n(392711),
        r = n.n(a),
        l = n(481060),
        i = n(110924),
        c = n(600164),
        u = n(112831),
        E = n(313201),
        d = n(237617),
        _ = n(572539),
        b = n(111810),
        m = n(63063),
        f = n(957115),
        D = n(531578),
        x = n(689938),
        C = n(940256);
      function T() {
        return (0, s.jsx)(l.Text, {
          className: C.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: x.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: m.Z.getSubmitRequestURL(),
          }),
        });
      }
      function h(e) {
        let {
            header: t,
            body: n,
            problems: a,
            transitionState: m,
            feedbackProblems: h = [],
            otherKey: p,
            hasCloseButton: L,
            onSubmit: I,
            onClose: Z,
            canDismissForever: j = !0,
            showHelpdeskLink: v = !0,
          } = e,
          B = (0, i.Z)(a),
          [M, g] = o.useState(!1),
          [A, N] = o.useState(null),
          [S, k] = o.useState(r().shuffle(a)),
          [R, O] = o.useState(""),
          U = (0, E.Dt)(),
          F = (0, d.Z)(M),
          y = (0, d.Z)(A),
          K = (0, d.Z)(I),
          G = (0, d.Z)(R),
          H = null != A && h.includes(A);
        return (
          o.useEffect(() => {
            !r().isEqual(B, a) && k((0, f.B)(a, p));
          }, [a, B, p]),
          o.useEffect(
            () => () => {
              K.current({
                problem: y.current,
                dontShowAgain: F.current,
                feedback: G.current,
              });
            },
            [],
          ),
          (0, s.jsxs)(l.ModalRoot, {
            transitionState: m,
            className: C.__invalid_modalRoot,
            "aria-labelledby": U,
            children: [
              (0, s.jsx)(b.Z, {}),
              (0, s.jsxs)(l.ModalHeader, {
                separator: !1,
                className: C.headerContainer,
                children: [
                  (0, s.jsx)(u.Z, {
                    id: U,
                    className: C.header,
                    color: u.Z.Colors.CUSTOM,
                    size: u.Z.Sizes.SIZE_24,
                    children: t,
                  }),
                  (0, s.jsx)(l.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: C.ratingBody,
                    children: n,
                  }),
                  L
                    ? (0, s.jsx)(l.ModalCloseButton, {
                        className: C.modalCloseButton,
                        onClick: Z,
                      })
                    : null,
                ],
              }),
              (0, s.jsxs)(l.ModalContent, {
                className: C.__invalid_content,
                children: [
                  H
                    ? null
                    : (0, s.jsx)(l.FormItem, {
                        className: C.problemInfo,
                        children: (0, s.jsx)(_.Z, {
                          options: S,
                          onClick: function (e) {
                            let { value: t } = e;
                            N(t), !h.includes(t) && Z();
                          },
                        }),
                      }),
                  H
                    ? (0, s.jsxs)(l.FormItem, {
                        title: x.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: C.problemInfo,
                        children: [
                          (0, s.jsx)(l.TextArea, {
                            value: R,
                            maxLength: D.iF,
                            onChange: O,
                          }),
                          v ? (0, s.jsx)(T, {}) : null,
                        ],
                      })
                    : null,
                ],
              }),
              j || H
                ? (0, s.jsx)(l.ModalFooter, {
                    className: C.footer,
                    direction: c.Z.Direction.HORIZONTAL,
                    children: H
                      ? (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)(l.Button, {
                              size: l.Button.Sizes.SMALL,
                              look: l.Button.Looks.LINK,
                              color: l.Button.Colors.PRIMARY,
                              onClick: () => {
                                N(null), O("");
                              },
                              children: x.Z.Messages.BACK,
                            }),
                            (0, s.jsx)(l.Button, {
                              size: l.Button.Sizes.SMALL,
                              onClick: Z,
                              children: x.Z.Messages.SUBMIT,
                            }),
                          ],
                        })
                      : j
                        ? (0, s.jsx)(l.Checkbox, {
                            size: 18,
                            type: l.Checkbox.Types.INVERTED,
                            value: M,
                            onChange: () => g(!M),
                            children: (0, s.jsx)(l.Text, {
                              variant: "text-sm/normal",
                              children: x.Z.Messages.DONT_SHOW_AGAIN,
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
      var s = n(735250);
      n(470079);
      var o = n(120356),
        a = n.n(o),
        r = n(481060),
        l = n(259580),
        i = n(373521);
      function c(e) {
        let {
          options: t,
          onClick: n,
          className: o,
          optionClassName: c,
          hideCaret: u,
        } = e;
        return (0, s.jsx)("div", {
          className: a()(i.root, o),
          children: t.map((e, t) =>
            (0, s.jsxs)(
              r.Clickable,
              {
                onClick: () => n(e),
                className: a()(i.option, c),
                children: [
                  (0, s.jsx)(r.Text, {
                    className: i.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == u ? void 0 : u(e)) &&
                    (0, s.jsx)(l.Z, {
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
      var s,
        o,
        a = n(689938);
      function r() {
        return [
          {
            value: "Too hard",
            label: a.Z.Messages.GUILD_DELETE_FEEDBACK_TOO_HARD,
          },
          {
            value: "Testing purposes",
            label: a.Z.Messages.GUILD_DELETE_FEEDBACK_TEST,
          },
          {
            value: "Created on accident",
            label: a.Z.Messages.GUILD_DELETE_FEEDBACK_ACCIDENT,
          },
          {
            value: "Curious about server/template",
            label: a.Z.Messages.GUILD_DELETE_FEEDBACK_TEMPLATE,
          },
          {
            value: "Empty server",
            label: a.Z.Messages.GUILD_DELETE_FEEDBACK_LONELY,
          },
          {
            value: "Inactive server",
            label: a.Z.Messages.GUILD_DELETE_FEEDBACK_INACTIVE,
          },
          { value: "Other", label: a.Z.Messages.GUILD_DELETE_FEEDBACK_OTHER },
        ];
      }
      ((s = o || (o = {})).TOO_HARD = "Too hard"),
        (s.TEST = "Testing purposes"),
        (s.ACCIDENT = "Created on accident"),
        (s.TEMPLATE = "Curious about server/template"),
        (s.LONELY = "Empty server"),
        (s.INACTIVE = "Inactive server"),
        (s.OTHER = "Other");
    },
    652463: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var s = n(626135),
        o = n(981631);
      function a(e, t, n, a) {
        s.default.track(o.rMx.USER_REPORT_SUBMITTED, {
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
            return f;
          },
        });
      var s = n(735250),
        o = n(470079),
        a = n(77866),
        r = n(704215),
        l = n(481060),
        i = n(605236),
        c = n(624659),
        u = n(626135),
        E = n(652463),
        d = n(709243),
        _ = n(981631),
        b = n(689938);
      let m = [d.U.OTHER];
      function f(e) {
        let { transitionState: t, onClose: f, guildId: D } = e,
          x = (0, a.Z)(d.e);
        return (
          o.useEffect(() => {
            u.default.track(_.rMx.OPEN_MODAL, { type: "Guild Delete Report" });
          }, []),
          (0, s.jsx)(c.Z, {
            header: b.Z.Messages.GUILD_DELETE_FEEDBACK_HEADER,
            body: b.Z.Messages.GUILD_DELETE_FEEDBACK_BODY,
            problems: x,
            feedbackProblems: m,
            onSubmit: function (e) {
              let { problem: t, dontShowAgain: o, feedback: a } = e;
              o && (0, i.EW)(r.z.GUILD_DELETE_FEEDBACK);
              let c = null == t;
              (0, E.Z)(D, t, a, c),
                !c &&
                  (0, l.openModalLazy)(async () => {
                    let { default: e } = await n
                      .e("14466")
                      .then(n.bind(n, 729328));
                    return (t) =>
                      (0, s.jsx)(e, {
                        body: b.Z.Messages.GUILD_DELETE_FEEDBACK_REPORT,
                        ...t,
                      });
                  });
            },
            onClose: f,
            transitionState: t,
            otherKey: d.U.OTHER,
          })
        );
      }
    },
    940256: function (e, t, n) {
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
    373521: function (e, t, n) {
      e.exports = {
        root: "root_c3b890",
        option: "option_c3b890",
        text: "text_c3b890",
        caret: "caret_c3b890",
      };
    },
  },
]);
//# sourceMappingURL=70db91815291b8f10320.js.map
