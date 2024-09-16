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
          return D;
        },
      }),
        n(47120);
      var a = n(735250),
        o = n(470079),
        s = n(120356),
        l = n.n(s),
        r = n(392711),
        i = n.n(r),
        c = n(481060),
        u = n(110924),
        E = n(600164),
        d = n(313201),
        _ = n(237617),
        b = n(572539),
        C = n(111810),
        m = n(63063),
        I = n(957115),
        f = n(531578),
        h = n(689938),
        x = n(214859),
        A = n(112003);
      function N() {
        return (0, a.jsx)(c.Text, {
          className: x.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: h.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: m.Z.getSubmitRequestURL(),
          }),
        });
      }
      function D(e) {
        var t, n;
        let {
            header: s,
            body: r,
            problems: m,
            transitionState: D,
            feedbackProblems: T = {},
            otherKey: L,
            hasCloseButton: B,
            onSubmit: p,
            onClose: R,
            canDismissForever: S = !0,
            showHelpdeskLink: Z = !0,
          } = e,
          M = (0, u.Z)(m),
          [O, g] = o.useState(!1),
          [j, v] = o.useState(null),
          [F, U] = o.useState(i().shuffle(m)),
          [V, k] = o.useState(""),
          [G, y] = o.useState(!1),
          K = (0, d.Dt)(),
          H = (0, _.Z)(O),
          P = (0, _.Z)(j),
          z = (0, _.Z)(p),
          w = (0, _.Z)(V),
          W = (0, _.Z)(G),
          Y = null != j ? T[j] : null,
          q = null != Y;
        return (
          o.useEffect(() => {
            !i().isEqual(M, m) && U((0, I.B)(m, L));
          }, [m, M, L]),
          o.useEffect(
            () => () => {
              z.current({
                problem: P.current,
                dontShowAgain: H.current,
                feedback: w.current,
                closeClicked: W.current,
              });
            },
            [],
          ),
          (0, a.jsxs)(c.ModalRoot, {
            transitionState: D,
            "aria-labelledby": K,
            children: [
              (0, a.jsx)(C.Z, {}),
              (0, a.jsxs)(c.ModalHeader, {
                separator: !1,
                className: l()(x.headerContainer, A.headerContainer),
                children: [
                  (0, a.jsx)(c.Heading, {
                    id: K,
                    variant: "heading-xl/bold",
                    color: "header-primary",
                    className: x.header,
                    children: s,
                  }),
                  (0, a.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "header-secondary",
                    className: l()(x.ratingBody, A.headerBody),
                    children:
                      null !== (t = null == Y ? void 0 : Y.subheader) &&
                      void 0 !== t
                        ? t
                        : r,
                  }),
                  B
                    ? (0, a.jsx)(c.ModalCloseButton, {
                        className: x.modalCloseButton,
                        onClick: function () {
                          y(!0), R();
                        },
                      })
                    : null,
                ],
              }),
              (0, a.jsxs)(c.ModalContent, {
                className: A.modalContent,
                children: [
                  q
                    ? null
                    : (0, a.jsx)(c.FormItem, {
                        className: x.problemInfo,
                        children: (0, a.jsx)(b.Z, {
                          options: F,
                          onClick: function (e) {
                            let { value: t } = e;
                            v(t), !Object.keys(T).includes(t) && R();
                          },
                        }),
                      }),
                  q
                    ? (0, a.jsxs)(c.FormItem, {
                        className: x.problemInfo,
                        children: [
                          (0, a.jsx)(c.TextArea, {
                            value: V,
                            maxLength: f.iF,
                            onChange: k,
                            className: A.textArea,
                            placeholder:
                              null !== (n = Y.hint) && void 0 !== n
                                ? n
                                : h.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                          }),
                          Z ? (0, a.jsx)(N, {}) : null,
                        ],
                      })
                    : null,
                ],
              }),
              S || q
                ? (0, a.jsx)(c.ModalFooter, {
                    className: l()(
                      x.footer,
                      q ? A.submitFooter : A.modalFooter,
                    ),
                    direction: E.Z.Direction.HORIZONTAL,
                    children: q
                      ? (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)(c.Button, {
                              className: A.backButton,
                              size: c.Button.Sizes.NONE,
                              look: c.Button.Looks.LINK,
                              color: c.Button.Colors.PRIMARY,
                              onClick: () => {
                                v(null), k("");
                              },
                              children: h.Z.Messages.BACK,
                            }),
                            (0, a.jsx)(c.Button, {
                              size: c.Button.Sizes.SMALL,
                              onClick: R,
                              children: h.Z.Messages.SUBMIT,
                            }),
                          ],
                        })
                      : S
                        ? (0, a.jsx)(c.Checkbox, {
                            size: 24,
                            type: c.Checkbox.Types.INVERTED,
                            value: O,
                            onChange: () => g(!O),
                            children: (0, a.jsx)(c.Text, {
                              variant: "text-md/normal",
                              children: h.Z.Messages.FEEDBACK_DONT_SHOW_AGAIN,
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
        l = n(481060),
        r = n(259580),
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
              l.Clickable,
              {
                onClick: () => n(e),
                className: s()(i.option, c),
                children: [
                  (0, a.jsx)(l.Text, {
                    className: i.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == u ? void 0 : u(e)) &&
                    (0, a.jsx)(r.Z, {
                      className: i.caret,
                      direction: r.Z.Directions.RIGHT,
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
          return r;
        },
      });
      var a = n(470079),
        o = n(252618),
        s = n(358085),
        l = n(689938);
      function r() {
        return (
          a.useEffect(() => {
            !s.isPlatformEmbedded &&
              (0, o.EM)({
                messages: [
                  l.Z.Messages.GO_LIVE_HEY,
                  l.Z.Messages.GO_LIVE_LOOK,
                  l.Z.Messages.GO_LIVE_LISTEN,
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
          return o;
        },
        S: function () {
          return l;
        },
      });
      var a,
        o,
        s = n(689938);
      function l() {
        return [
          {
            value: "UNINTERESTED",
            label: s.Z.Messages.GUILD_LEAVE_FEEDBACK_UNINTERESTED,
          },
          {
            value: "ACCIDENT",
            label: s.Z.Messages.GUILD_LEAVE_FEEDBACK_ACCIDENT,
          },
          {
            value: "INACTIVE",
            label: s.Z.Messages.GUILD_LEAVE_FEEDBACK_INACTIVE,
          },
          {
            value: "UNCOMFORTABLE",
            label: s.Z.Messages.GUILD_LEAVE_FEEDBACK_UNCOMFORTABLE,
          },
          {
            value: "DISRUPTIVE",
            label: s.Z.Messages.GUILD_LEAVE_FEEDBACK_DISRUPTIVE,
          },
          {
            value: "OVERACTIVE",
            label: s.Z.Messages.GUILD_LEAVE_FEEDBACK_OVERACTIVE,
          },
          {
            value: "CONFUSING",
            label: s.Z.Messages.GUILD_LEAVE_FEEDBACK_CONFUSING,
          },
          { value: "OTHER", label: s.Z.Messages.GUILD_DELETE_FEEDBACK_OTHER },
        ];
      }
      ((a = o || (o = {})).UNINTERESTED = "UNINTERESTED"),
        (a.ACCIDENT = "ACCIDENT"),
        (a.INACTIVE = "INACTIVE"),
        (a.UNCOMFORTABLE = "UNCOMFORTABLE"),
        (a.DISRUPTIVE = "DISRUPTIVE"),
        (a.OVERACTIVE = "OVERACTIVE"),
        (a.CONFUSING = "CONFUSING"),
        (a.OTHER = "OTHER");
    },
    263226: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var a = n(626135),
        o = n(981631);
      function s(e, t, n, s) {
        a.default.track(o.rMx.USER_REPORT_SUBMITTED, {
          report_name: "Guild Leave",
          guild_id: e,
          reason: t,
          feedback: n,
          skipped: s,
        });
      }
    },
    131102: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        });
      var a = n(735250),
        o = n(470079),
        s = n(77866),
        l = n(704215),
        r = n(481060),
        i = n(605236),
        c = n(624659),
        u = n(626135),
        E = n(263226),
        d = n(225634),
        _ = n(981631),
        b = n(689938);
      function C(e) {
        let { transitionState: t, onClose: C, guildId: m, guildName: I } = e,
          f = (0, s.Z)(d.S);
        return (
          o.useEffect(() => {
            u.default.track(_.rMx.OPEN_MODAL, { type: "Guild Leave Report" });
          }, []),
          (0, a.jsx)(c.Z, {
            header: b.Z.Messages.GUILD_LEAVE_FEEDBACK_HEADER,
            body: b.Z.Messages.GUILD_LEAVE_FEEDBACK_BODY.format({ server: I }),
            problems: f,
            onSubmit: function (e) {
              let { problem: t, dontShowAgain: o, feedback: s } = e;
              o && (0, i.EW)(l.z.GUILD_LEAVE_FEEDBACK);
              let c = null == t;
              (0, E.Z)(m, t, s, c),
                !c &&
                  (0, r.openModalLazy)(async () => {
                    let { default: e } = await n
                      .e("14466")
                      .then(n.bind(n, 729328));
                    return (t) =>
                      (0, a.jsx)(e, {
                        body: b.Z.Messages.GUILD_LEAVE_FEEDBACK_REPORT,
                        ...t,
                      });
                  });
            },
            onClose: C,
            transitionState: t,
            otherKey: d.G.OTHER,
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
//# sourceMappingURL=f6542a2b13d8a6a793c5.js.map
