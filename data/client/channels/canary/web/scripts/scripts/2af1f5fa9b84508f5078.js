"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["74920"],
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
          return o;
        },
      }),
        n(653041);
      var s = n(392711),
        a = n.n(s);
      let o = (e, t) => {
        let n = a().shuffle(e),
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
          return L;
        },
      }),
        n(47120);
      var s = n(735250),
        a = n(470079),
        o = n(392711),
        l = n.n(o),
        r = n(481060),
        i = n(110924),
        E = n(600164),
        u = n(112831),
        c = n(313201),
        d = n(237617),
        _ = n(572539),
        b = n(111810),
        I = n(63063),
        C = n(957115),
        f = n(531578),
        m = n(689938),
        A = n(940256);
      function N() {
        return (0, s.jsx)(r.Text, {
          className: A.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: m.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: I.Z.getSubmitRequestURL(),
          }),
        });
      }
      function L(e) {
        let {
            header: t,
            body: n,
            problems: o,
            transitionState: I,
            feedbackProblems: L = [],
            otherKey: T,
            hasCloseButton: x,
            onSubmit: D,
            onClose: h,
            canDismissForever: S = !0,
            showHelpdeskLink: Z = !0,
          } = e,
          p = (0, i.Z)(o),
          [B, M] = a.useState(!1),
          [R, O] = a.useState(null),
          [j, g] = a.useState(l().shuffle(o)),
          [U, v] = a.useState(""),
          V = (0, c.Dt)(),
          F = (0, d.Z)(B),
          G = (0, d.Z)(R),
          k = (0, d.Z)(D),
          K = (0, d.Z)(U),
          y = null != R && L.includes(R);
        return (
          a.useEffect(() => {
            !l().isEqual(p, o) && g((0, C.B)(o, T));
          }, [o, p, T]),
          a.useEffect(
            () => () => {
              k.current({
                problem: G.current,
                dontShowAgain: F.current,
                feedback: K.current,
              });
            },
            [],
          ),
          (0, s.jsxs)(r.ModalRoot, {
            transitionState: I,
            className: A.__invalid_modalRoot,
            "aria-labelledby": V,
            children: [
              (0, s.jsx)(b.Z, {}),
              (0, s.jsxs)(r.ModalHeader, {
                separator: !1,
                className: A.headerContainer,
                children: [
                  (0, s.jsx)(u.Z, {
                    id: V,
                    className: A.header,
                    color: u.Z.Colors.CUSTOM,
                    size: u.Z.Sizes.SIZE_24,
                    children: t,
                  }),
                  (0, s.jsx)(r.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: A.ratingBody,
                    children: n,
                  }),
                  x
                    ? (0, s.jsx)(r.ModalCloseButton, {
                        className: A.modalCloseButton,
                        onClick: h,
                      })
                    : null,
                ],
              }),
              (0, s.jsxs)(r.ModalContent, {
                className: A.__invalid_content,
                children: [
                  y
                    ? null
                    : (0, s.jsx)(r.FormItem, {
                        className: A.problemInfo,
                        children: (0, s.jsx)(_.Z, {
                          options: j,
                          onClick: function (e) {
                            let { value: t } = e;
                            O(t), !L.includes(t) && h();
                          },
                        }),
                      }),
                  y
                    ? (0, s.jsxs)(r.FormItem, {
                        title: m.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: A.problemInfo,
                        children: [
                          (0, s.jsx)(r.TextArea, {
                            value: U,
                            maxLength: f.iF,
                            onChange: v,
                          }),
                          Z ? (0, s.jsx)(N, {}) : null,
                        ],
                      })
                    : null,
                ],
              }),
              S || y
                ? (0, s.jsx)(r.ModalFooter, {
                    className: A.footer,
                    direction: E.Z.Direction.HORIZONTAL,
                    children: y
                      ? (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)(r.Button, {
                              size: r.Button.Sizes.SMALL,
                              look: r.Button.Looks.LINK,
                              color: r.Button.Colors.PRIMARY,
                              onClick: () => {
                                O(null), v("");
                              },
                              children: m.Z.Messages.BACK,
                            }),
                            (0, s.jsx)(r.Button, {
                              size: r.Button.Sizes.SMALL,
                              onClick: h,
                              children: m.Z.Messages.SUBMIT,
                            }),
                          ],
                        })
                      : S
                        ? (0, s.jsx)(r.Checkbox, {
                            size: 18,
                            type: r.Checkbox.Types.INVERTED,
                            value: B,
                            onChange: () => M(!B),
                            children: (0, s.jsx)(r.Text, {
                              variant: "text-sm/normal",
                              children: m.Z.Messages.DONT_SHOW_AGAIN,
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
          return E;
        },
      });
      var s = n(735250);
      n(470079);
      var a = n(120356),
        o = n.n(a),
        l = n(481060),
        r = n(259580),
        i = n(373521);
      function E(e) {
        let {
          options: t,
          onClick: n,
          className: a,
          optionClassName: E,
          hideCaret: u,
        } = e;
        return (0, s.jsx)("div", {
          className: o()(i.root, a),
          children: t.map((e, t) =>
            (0, s.jsxs)(
              l.Clickable,
              {
                onClick: () => n(e),
                className: o()(i.option, E),
                children: [
                  (0, s.jsx)(l.Text, {
                    className: i.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == u ? void 0 : u(e)) &&
                    (0, s.jsx)(r.Z, {
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
      var s = n(470079),
        a = n(252618),
        o = n(358085),
        l = n(689938);
      function r() {
        return (
          s.useEffect(() => {
            !o.isPlatformEmbedded &&
              (0, a.EM)({
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
          return a;
        },
        S: function () {
          return l;
        },
      });
      var s,
        a,
        o = n(689938);
      function l() {
        return [
          {
            value: "UNINTERESTED",
            label: o.Z.Messages.GUILD_LEAVE_FEEDBACK_UNINTERESTED,
          },
          {
            value: "ACCIDENT",
            label: o.Z.Messages.GUILD_LEAVE_FEEDBACK_ACCIDENT,
          },
          {
            value: "INACTIVE",
            label: o.Z.Messages.GUILD_LEAVE_FEEDBACK_INACTIVE,
          },
          {
            value: "UNCOMFORTABLE",
            label: o.Z.Messages.GUILD_LEAVE_FEEDBACK_UNCOMFORTABLE,
          },
          {
            value: "DISRUPTIVE",
            label: o.Z.Messages.GUILD_LEAVE_FEEDBACK_DISRUPTIVE,
          },
          {
            value: "OVERACTIVE",
            label: o.Z.Messages.GUILD_LEAVE_FEEDBACK_OVERACTIVE,
          },
          {
            value: "CONFUSING",
            label: o.Z.Messages.GUILD_LEAVE_FEEDBACK_CONFUSING,
          },
          { value: "OTHER", label: o.Z.Messages.GUILD_DELETE_FEEDBACK_OTHER },
        ];
      }
      ((s = a || (a = {})).UNINTERESTED = "UNINTERESTED"),
        (s.ACCIDENT = "ACCIDENT"),
        (s.INACTIVE = "INACTIVE"),
        (s.UNCOMFORTABLE = "UNCOMFORTABLE"),
        (s.DISRUPTIVE = "DISRUPTIVE"),
        (s.OVERACTIVE = "OVERACTIVE"),
        (s.CONFUSING = "CONFUSING"),
        (s.OTHER = "OTHER");
    },
    263226: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var s = n(626135),
        a = n(981631);
      function o(e, t, n, o) {
        s.default.track(a.rMx.USER_REPORT_SUBMITTED, {
          report_name: "Guild Leave",
          guild_id: e,
          reason: t,
          feedback: n,
          skipped: o,
        });
      }
    },
    131102: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        });
      var s = n(735250),
        a = n(470079),
        o = n(77866),
        l = n(704215),
        r = n(481060),
        i = n(605236),
        E = n(624659),
        u = n(626135),
        c = n(263226),
        d = n(225634),
        _ = n(981631),
        b = n(689938);
      function I(e) {
        let { transitionState: t, onClose: I, guildId: C, guildName: f } = e,
          m = (0, o.Z)(d.S);
        return (
          a.useEffect(() => {
            u.default.track(_.rMx.OPEN_MODAL, { type: "Guild Leave Report" });
          }, []),
          (0, s.jsx)(E.Z, {
            header: b.Z.Messages.GUILD_LEAVE_FEEDBACK_HEADER,
            body: b.Z.Messages.GUILD_LEAVE_FEEDBACK_BODY.format({ server: f }),
            problems: m,
            onSubmit: function (e) {
              let { problem: t, dontShowAgain: a, feedback: o } = e;
              a && (0, i.EW)(l.z.GUILD_LEAVE_FEEDBACK);
              let E = null == t;
              (0, c.Z)(C, t, o, E),
                !E &&
                  (0, r.openModalLazy)(async () => {
                    let { default: e } = await n
                      .e("14466")
                      .then(n.bind(n, 729328));
                    return (t) =>
                      (0, s.jsx)(e, {
                        body: b.Z.Messages.GUILD_LEAVE_FEEDBACK_REPORT,
                        ...t,
                      });
                  });
            },
            onClose: I,
            transitionState: t,
            otherKey: d.G.OTHER,
            hasCloseButton: !0,
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
//# sourceMappingURL=2af1f5fa9b84508f5078.js.map
