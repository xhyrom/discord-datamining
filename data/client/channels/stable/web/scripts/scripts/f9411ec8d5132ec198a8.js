"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["9343"],
  {
    75277: function (e) {
      e.exports = "/assets/5e519af33bacfd762837.png";
    },
    706734: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return d;
        },
      });
      var n = t(735250);
      t(470079);
      var o = t(481060),
        a = t(488889),
        l = t(626135),
        r = t(981631),
        i = t(259076),
        E = t(689938),
        _ = t(810452),
        N = t(859565);
      function d(e) {
        let { onNext: s, onClose: t, reason: d, onReasonChange: c } = e,
          A = i.zf.map((e) => ({ value: e, name: (0, a.S)(e) }));
        return (0, n.jsxs)("form", {
          onSubmit: s,
          children: [
            (0, n.jsxs)(o.ModalHeader, {
              separator: !1,
              className: N.header,
              children: [
                (0, n.jsx)(o.Heading, {
                  variant: "heading-xl/extrabold",
                  children: E.Z.Messages.EMAIL_CHANGE_REASONING_HEADER,
                }),
                (0, n.jsx)(o.ModalCloseButton, {
                  onClick: t,
                  className: N.modalCloseButton,
                }),
              ],
            }),
            (0, n.jsx)(o.ModalContent, {
              className: _.content,
              children: (0, n.jsx)(o.RadioGroup, {
                radioPosition: "right",
                radioItemClassName: _.radioItem,
                size: o.RadioGroup.Sizes.NOT_SET,
                value: d,
                options: A,
                onChange: (e) => {
                  let { value: s } = e;
                  l.default.track(
                    r.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED,
                    { change_email_reason_enum: s },
                  ),
                    c(s);
                },
              }),
            }),
            (0, n.jsxs)(o.ModalFooter, {
              className: N.modalFooter,
              children: [
                (0, n.jsx)(o.Button, {
                  color: o.Button.Colors.BRAND,
                  disabled: null == d,
                  size: o.Button.Sizes.MEDIUM,
                  onClick: s,
                  children: E.Z.Messages.CONTINUE,
                }),
                (0, n.jsx)(o.Button, {
                  look: o.Button.Looks.LINK,
                  color: o.Button.Colors.PRIMARY,
                  onClick: t,
                  children: E.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    264119: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return r;
        },
      });
      var n = t(735250);
      t(470079);
      var o = t(481060),
        a = t(689938),
        l = t(859565);
      function r(e) {
        let { email: s, onClose: t } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)(o.ModalHeader, {
              separator: !1,
              className: l.header,
              children: [
                (0, n.jsx)(o.Heading, {
                  className: l.title,
                  variant: "heading-xl/semibold",
                  children:
                    a.Z.Messages
                      .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_COMPLETE_TITLE,
                }),
                (0, n.jsx)(o.ModalCloseButton, {
                  onClick: t,
                  className: l.modalCloseButton,
                }),
              ],
            }),
            (0, n.jsx)(o.ModalContent, {
              className: l.content,
              children: (0, n.jsx)(o.Text, {
                className: l.description,
                variant: "text-md/normal",
                children:
                  a.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_COMPLETE_DESCRIPTION.format(
                    { email: s },
                  ),
              }),
            }),
            (0, n.jsx)(o.ModalContent, {
              className: l.content,
              children: (0, n.jsx)(o.Text, {
                className: l.tooltip,
                variant: "text-sm/normal",
                children:
                  a.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CHECK_SPAM,
              }),
            }),
            (0, n.jsx)(o.ModalFooter, {
              className: l.modalFooter,
              children: (0, n.jsx)(o.Button, {
                className: l.__invalid_submit,
                color: o.Button.Colors.BRAND,
                size: o.Button.Sizes.MEDIUM,
                onClick: t,
                children: a.Z.Messages.OKAY,
              }),
            }),
          ],
        });
      }
    },
    75788: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return d;
        },
      }),
        t(47120);
      var n = t(735250),
        o = t(470079),
        a = t(442837),
        l = t(481060),
        r = t(479531),
        i = t(393869),
        E = t(25990),
        _ = t(689938),
        N = t(859565);
      function d(e) {
        var s;
        let {
            isSlideReady: t,
            error: d,
            setEmailToken: c,
            setError: A,
            onNext: u,
            onClose: C,
          } = e,
          [M, S] = o.useState(!1),
          [m, I] = o.useState(""),
          [x, T] = o.useState(!1),
          R = (0, a.e7)([E.Z], () => E.Z.getErrors()),
          O = o.useRef(null);
        o.useEffect(() => {
          if (t) {
            var e;
            null === (e = O.current) || void 0 === e || e.focus();
          }
        }, [t]);
        let h = async (e) => {
            e.preventDefault(), A(null), S(!0);
            try {
              let { token: e } = await (0, i.w)(m);
              c(e), u();
            } catch (e) {
              A(new r.Z(e).getAnyErrorMessage());
            } finally {
              S(!1);
            }
          },
          L = async () => {
            if (!x) {
              T(!0);
              try {
                await (0, i.i)(!0),
                  (0, l.showToast)(
                    (0, l.createToast)(
                      _.Z.Messages
                        .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT,
                      l.ToastType.SUCCESS,
                    ),
                  );
              } catch (s) {
                let e = new r.Z(s).getAnyErrorMessage();
                null != e &&
                  (0, l.showToast)((0, l.createToast)(e, l.ToastType.FAILURE));
              } finally {
                T(!1);
              }
            }
          };
        return (0, n.jsxs)("form", {
          onSubmit: h,
          children: [
            (0, n.jsxs)(l.ModalHeader, {
              separator: !1,
              className: N.header,
              children: [
                (0, n.jsx)(l.Heading, {
                  className: N.title,
                  variant: "heading-xl/extrabold",
                  children:
                    _.Z.Messages
                      .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_TITLE_DESKTOP,
                }),
                (0, n.jsx)(l.Text, {
                  color: "header-secondary",
                  variant: "text-md/normal",
                  className: N.subtitle,
                  children:
                    _.Z.Messages
                      .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_SUBTITLE,
                }),
                (0, n.jsx)(l.ModalCloseButton, {
                  onClick: C,
                  className: N.modalCloseButton,
                }),
              ],
            }),
            (0, n.jsxs)(l.ModalContent, {
              className: N.content,
              children: [
                (0, n.jsx)(l.FormItem, {
                  title:
                    _.Z.Messages
                      .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_PROMPT,
                  error:
                    null != d
                      ? d
                      : null == R
                        ? void 0
                        : null === (s = R.email_token) || void 0 === s
                          ? void 0
                          : s[0],
                  children: (0, n.jsx)(l.TextInput, {
                    value: m,
                    onChange: I,
                    inputRef: O,
                  }),
                }),
                (0, n.jsx)(l.Text, {
                  className: N.help,
                  variant: "text-sm/normal",
                  children:
                    _.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_RESEND.format(
                      { onResend: L },
                    ),
                }),
              ],
            }),
            (0, n.jsx)(l.ModalFooter, {
              children: (0, n.jsx)(l.Button, {
                type: "submit",
                color: l.Button.Colors.BRAND,
                size: l.Button.Sizes.MEDIUM,
                submitting: M,
                children: _.Z.Messages.NEXT,
              }),
            }),
          ],
        });
      }
    },
    22150: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return d;
        },
      }),
        t(47120);
      var n = t(735250),
        o = t(470079),
        a = t(442837),
        l = t(481060),
        r = t(479531),
        i = t(393869),
        E = t(594174),
        _ = t(689938),
        N = t(859565);
      function d(e) {
        let { onNext: s, onClose: t } = e,
          [d, c] = o.useState(!1),
          A = (0, a.e7)([E.default], () => E.default.getCurrentUser()),
          u = async (e) => {
            e.preventDefault(), c(!0);
            try {
              await (0, i.i)(), s();
            } catch (s) {
              let e = new r.Z(s).getAnyErrorMessage();
              null != e &&
                (0, l.showToast)((0, l.createToast)(e, l.ToastType.FAILURE));
            } finally {
              c(!1);
            }
          };
        return (0, n.jsxs)("form", {
          onSubmit: u,
          children: [
            (0, n.jsxs)(l.ModalHeader, {
              separator: !1,
              className: N.header,
              children: [
                (0, n.jsx)(l.Heading, {
                  className: N.title,
                  variant: "heading-xl/extrabold",
                  children:
                    _.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_TITLE,
                }),
                (0, n.jsx)(l.ModalCloseButton, {
                  onClick: t,
                  className: N.modalCloseButton,
                }),
              ],
            }),
            (0, n.jsx)(l.ModalContent, {
              className: N.content,
              children: (0, n.jsx)(l.Text, {
                className: N.description,
                variant: "text-md/normal",
                children:
                  _.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_DESCRIPTION_NO_LINK.format(
                    { oldEmail: null == A ? void 0 : A.email },
                  ),
              }),
            }),
            (0, n.jsxs)(l.ModalFooter, {
              className: N.modalFooter,
              children: [
                (0, n.jsx)(l.Button, {
                  type: "submit",
                  color: l.Button.Colors.BRAND,
                  size: l.Button.Sizes.MEDIUM,
                  submitting: d,
                  className: N.__invalid_submit,
                  children:
                    _.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_BUTTON,
                }),
                (0, n.jsx)(l.Button, {
                  className: N.__invalid_cancel,
                  look: l.Button.Looks.LINK,
                  color: l.Button.Colors.PRIMARY,
                  onClick: t,
                  children: _.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    642298: function (e, s, t) {
      t.r(s),
        t.d(s, {
          default: function () {
            return R;
          },
        }),
        t(47120);
      var n = t(735250),
        o = t(470079),
        a = t(990547),
        l = t(442837),
        r = t(481060),
        i = t(809206),
        E = t(594174),
        _ = t(626135),
        N = t(706734),
        d = t(264119),
        c = t(75788),
        A = t(22150),
        u = t(361833),
        C = t(134562),
        M = t(526761),
        S = t(981631),
        m = t(259076),
        I = t(859565),
        x = t(800010),
        T = t(75277);
      function R(e) {
        var s;
        let { transitionState: t, onClose: R } = e,
          O = (0, l.e7)([E.default], () => E.default.getCurrentUser()),
          h = o.useRef(
            null !== (s = null == O ? void 0 : O.verified) && void 0 !== s && s,
          );
        o.useEffect(
          () => (
            _.default.track(S.rMx.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED),
            () => (0, i.Zy)()
          ),
          [],
        );
        let L = null == O ? void 0 : O.verified,
          f = L ? M.Ax.CONFIRM_START : M.Ax.EMAIL_AND_PASSWORD,
          [p, G] = o.useState(f),
          [j, g] = o.useState(null),
          [v, U] = o.useState(null),
          [D, H] = o.useState(null),
          [B, Z] = o.useState(""),
          [k, P] = o.useState(),
          y =
            p === M.Ax.CHANGE_EMAIL_WARNING
              ? I.wumpusExclamationImg
              : I.emailHeaderImg,
          F = p === M.Ax.CHANGE_EMAIL_WARNING ? T : x,
          b = {
            impression_group: a.ImpressionGroups.USER_ACCOUNT_EMAIL_CHANGE_FLOW,
          };
        return (0, n.jsxs)(r.ModalRoot, {
          transitionState: t,
          disableTrack: !0,
          children: [
            (0, n.jsx)("img", { alt: "", className: y, src: F }),
            (0, n.jsxs)(r.Slides, {
              activeSlide: p,
              width: 440,
              onSlideReady: (e) => g(e),
              children: [
                (0, n.jsx)(r.Slide, {
                  id: M.Ax.CONFIRM_START,
                  impressionName:
                    a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
                  impressionProperties: b,
                  children: (0, n.jsx)(A.Z, {
                    onNext: () => G(M.Ax.CONFIRM_CODE),
                    onClose: R,
                  }),
                }),
                (0, n.jsx)(r.Slide, {
                  id: M.Ax.CONFIRM_CODE,
                  impressionName:
                    a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
                  impressionProperties: b,
                  children: (0, n.jsx)(c.Z, {
                    error: D,
                    setError: H,
                    setEmailToken: U,
                    isSlideReady: j === M.Ax.CONFIRM_CODE,
                    onNext: () => G(M.Ax.CHANGE_EMAIL_REASONS),
                    onClose: R,
                  }),
                }),
                (0, n.jsx)(r.Slide, {
                  id: M.Ax.CHANGE_EMAIL_REASONS,
                  impressionName:
                    a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COLLECT_REASONS,
                  impressionProperties: b,
                  children: (0, n.jsx)(N.Z, {
                    onNext: () => (
                      _.default.track(
                        S.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE,
                        { change_email_reason_enum: k },
                      ),
                      null != k && m.Mr.has(k)
                        ? G(M.Ax.CHANGE_EMAIL_WARNING)
                        : G(M.Ax.EMAIL_AND_PASSWORD)
                    ),
                    onClose: R,
                    reason: k,
                    onReasonChange: P,
                  }),
                }),
                (0, n.jsx)(r.Slide, {
                  id: M.Ax.CHANGE_EMAIL_WARNING,
                  impressionName:
                    a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_WARNING,
                  impressionProperties: b,
                  children: (0, n.jsx)(C.Z, {
                    onNext: () => {
                      _.default.track(
                        S.rMx.USER_ACCOUNT_EMAIL_CHANGE_WARNING_CONTINUE,
                        { change_email_reason_enum: k },
                      ),
                        G(M.Ax.EMAIL_AND_PASSWORD);
                    },
                    onClose: R,
                  }),
                }),
                (0, n.jsx)(r.Slide, {
                  id: M.Ax.EMAIL_AND_PASSWORD,
                  impressionName:
                    a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL,
                  impressionProperties: { ...b, email_verified: h.current },
                  children: (0, n.jsx)(u.Z, {
                    emailToken: v,
                    isSlideReady: j === M.Ax.EMAIL_AND_PASSWORD,
                    onBack: L
                      ? () =>
                          G(
                            null != k && m.Mr.has(k)
                              ? M.Ax.CHANGE_EMAIL_WARNING
                              : M.Ax.CHANGE_EMAIL_REASONS,
                          )
                      : null,
                    onNext: (e) => {
                      Z(e), G(M.Ax.COMPLETE);
                    },
                    onClose: R,
                    reason: k,
                  }),
                }),
                (0, n.jsx)(r.Slide, {
                  id: M.Ax.COMPLETE,
                  impressionName:
                    a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COMPLETE,
                  impressionProperties: b,
                  children: (0, n.jsx)(d.Z, { email: B, onClose: R }),
                }),
              ],
            }),
          ],
        });
      }
    },
    361833: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return A;
        },
      }),
        t(47120);
      var n = t(735250),
        o = t(470079),
        a = t(442837),
        l = t(481060),
        r = t(809206),
        i = t(25990),
        E = t(626135),
        _ = t(155433),
        N = t(981631),
        d = t(689938),
        c = t(859565);
      function A(e) {
        var s, t;
        let {
            emailToken: A,
            isSlideReady: u,
            onClose: C,
            onBack: M,
            onNext: S,
            reason: m,
          } = e,
          [I, x] = o.useState(""),
          [T, R] = o.useState(""),
          [O, h] = o.useState(!1),
          L = (0, a.e7)([i.Z], () => i.Z.getErrors()),
          f = o.useRef(null);
        async function p(e) {
          e.preventDefault(), h(!0);
          let s = await (0, r.Mn)({ email: I, emailToken: A, password: T });
          if ((h(!1), null == s ? void 0 : s.ok))
            E.default.track(N.rMx.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, {
              change_email_reason_enum: m,
            }),
              S(I);
          else {
            var t, n;
            (null == s
              ? void 0
              : null === (t = s.body) || void 0 === t
                ? void 0
                : t.username) != null
              ? (0, _.P)()
              : (null == s
                  ? void 0
                  : null === (n = s.body) || void 0 === n
                    ? void 0
                    : n.email_token) != null &&
                (null == M || M());
          }
        }
        return (
          o.useEffect(() => {
            if (u) {
              var e;
              null === (e = f.current) || void 0 === e || e.focus();
            }
          }, [u]),
          (0, n.jsxs)("form", {
            onSubmit: p,
            children: [
              (0, n.jsxs)(l.ModalHeader, {
                separator: !1,
                className: c.header,
                children: [
                  (0, n.jsx)(l.Heading, {
                    className: c.title,
                    variant: "heading-xl/extrabold",
                    children:
                      d.Z.Messages
                        .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_TITLE_DESKTOP,
                  }),
                  (0, n.jsx)(l.Text, {
                    color: "header-secondary",
                    variant: "text-md/normal",
                    className: c.subtitle,
                    children:
                      d.Z.Messages
                        .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_PROMPT_DESKTOP,
                  }),
                  (0, n.jsx)(l.ModalCloseButton, {
                    onClick: C,
                    className: c.modalCloseButton,
                  }),
                ],
              }),
              (0, n.jsxs)(l.ModalContent, {
                className: c.content,
                children: [
                  (0, n.jsx)(l.FormItem, {
                    title: d.Z.Messages.EMAIL,
                    error:
                      null == L
                        ? void 0
                        : null === (s = L.email) || void 0 === s
                          ? void 0
                          : s[0],
                    children: (0, n.jsx)(l.TextInput, {
                      type: "email",
                      value: I,
                      onChange: x,
                      inputRef: f,
                    }),
                  }),
                  (0, n.jsx)(l.FormItem, {
                    className: c.password,
                    title: d.Z.Messages.USER_SETTINGS_LABEL_CURRENT_PASSWORD,
                    error:
                      null == L
                        ? void 0
                        : null === (t = L.password) || void 0 === t
                          ? void 0
                          : t[0],
                    children: (0, n.jsx)(l.TextInput, {
                      type: "password",
                      value: T,
                      onChange: R,
                    }),
                  }),
                ],
              }),
              (0, n.jsxs)(l.ModalFooter, {
                children: [
                  (0, n.jsx)(l.Button, {
                    type: "submit",
                    color: l.Button.Colors.BRAND,
                    size: l.Button.Sizes.MEDIUM,
                    submitting: O,
                    children: d.Z.Messages.DONE,
                  }),
                  null != M
                    ? (0, n.jsx)(l.Button, {
                        className: c.__invalid_cancel,
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.PRIMARY,
                        onClick: M,
                        children: d.Z.Messages.BACK,
                      })
                    : (0, n.jsx)(l.Button, {
                        className: c.__invalid_cancel,
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.PRIMARY,
                        onClick: C,
                        children: d.Z.Messages.CANCEL,
                      }),
                ],
              }),
            ],
          })
        );
      }
    },
    134562: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return i;
        },
      });
      var n = t(735250);
      t(470079);
      var o = t(481060),
        a = t(259076),
        l = t(689938),
        r = t(859565);
      function i(e) {
        let { onNext: s, onClose: t } = e;
        return (0, n.jsxs)("form", {
          onSubmit: s,
          children: [
            (0, n.jsxs)(o.ModalHeader, {
              separator: !1,
              className: r.header,
              children: [
                (0, n.jsx)(o.Heading, {
                  variant: "heading-xl/extrabold",
                  children: l.Z.Messages.EMAIL_CHANGE_REASONING_WARNING_HEADER,
                }),
                (0, n.jsx)(o.ModalCloseButton, {
                  onClick: t,
                  className: r.modalCloseButton,
                }),
              ],
            }),
            (0, n.jsxs)(o.ModalContent, {
              className: r.content,
              children: [
                (0, n.jsx)(o.Text, {
                  className: r.description,
                  variant: "text-md/normal",
                  children:
                    l.Z.Messages.EMAIL_CHANGE_REASONING_IMPERSONATION_EDUCATION.format(
                      { hcArticle: a.j1 },
                    ),
                }),
                (0, n.jsx)(o.Text, {
                  className: r.description,
                  variant: "text-md/normal",
                  children:
                    l.Z.Messages
                      .EMAIL_CHANGE_REASONING_DISCORD_NEVER_ASKS_FOR_EMAIL_CHANGE,
                }),
              ],
            }),
            (0, n.jsxs)(o.ModalFooter, {
              className: r.modalFooter,
              children: [
                (0, n.jsx)(o.Button, {
                  color: o.Button.Colors.BRAND,
                  onClick: t,
                  children: l.Z.Messages.CANCEL,
                }),
                (0, n.jsx)(o.Button, {
                  color: o.Button.Colors.PRIMARY,
                  look: o.Button.Looks.LINK,
                  onClick: s,
                  children: l.Z.Messages.EMAIL_CHANGE_REASONING_CONTINUE,
                }),
              ],
            }),
          ],
        });
      }
    },
    393869: function (e, s, t) {
      t.d(s, {
        i: function () {
          return l;
        },
        w: function () {
          return r;
        },
      });
      var n = t(990547),
        o = t(573261),
        a = t(981631);
      function l() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return o.Z.put({
          url: a.ANM.USER_EMAIL,
          trackedActionData: {
            event: n.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
            properties: { is_resend: e },
          },
        });
      }
      async function r(e) {
        return (
          await o.Z.post({
            url: a.ANM.USER_EMAIL_VERIFY_CODE,
            body: { code: e },
            trackedActionData: {
              event: n.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
            },
          })
        ).body;
      }
    },
    259076: function (e, s, t) {
      var n, o;
      t.d(s, {
        Mr: function () {
          return l;
        },
        j1: function () {
          return r;
        },
        pw: function () {
          return n;
        },
        zf: function () {
          return a;
        },
      }),
        t(47120),
        ((o = n || (n = {}))[(o.DISCORD_EMPLOYEE_ASKED_ME_TO = 0)] =
          "DISCORD_EMPLOYEE_ASKED_ME_TO"),
        (o[(o.SOMEONE_ASKED_ME_TO = 1)] = "SOMEONE_ASKED_ME_TO"),
        (o[(o.NEW_EMAIL = 2)] = "NEW_EMAIL"),
        (o[(o.SOMETHING_ELSE = 3)] = "SOMETHING_ELSE");
      let a = [0, 1, 2, 3],
        l = new Set([0, 1]),
        r =
          "https://discord.com/safety/understanding-and-avoiding-common-scams";
    },
    488889: function (e, s, t) {
      t.d(s, {
        S: function () {
          return l;
        },
      });
      var n = t(259076),
        o = t(689938);
      let a = {
        [n.pw.DISCORD_EMPLOYEE_ASKED_ME_TO]: () =>
          o.Z.Messages.EMAIL_CHANGE_REASONING_DISCORD_EMPLOYEE_ASKED,
        [n.pw.SOMEONE_ASKED_ME_TO]: () =>
          o.Z.Messages.EMAIL_CHANGE_REASONING_SOMEONE_ASKED,
        [n.pw.NEW_EMAIL]: () => o.Z.Messages.EMAIL_CHANGE_REASONING_NEW_EMAIL,
        [n.pw.SOMETHING_ELSE]: () =>
          o.Z.Messages.EMAIL_CHANGE_REASONING_SOMETHING_ELSE,
      };
      function l(e) {
        return a[e]();
      }
    },
  },
]);
//# sourceMappingURL=f9411ec8d5132ec198a8.js.map
