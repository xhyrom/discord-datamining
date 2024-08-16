"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["9343"],
  {
    75277: function (e) {
      e.exports = "/assets/5e519af33bacfd762837.png";
    },
    706734: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return d;
        },
      });
      var t = n(735250);
      n(470079);
      var o = n(481060),
        a = n(488889),
        l = n(626135),
        r = n(981631),
        i = n(259076),
        E = n(689938),
        _ = n(759095),
        N = n(120455);
      function d(e) {
        let { onNext: s, onClose: n, reason: d, onReasonChange: c } = e,
          A = i.zf.map((e) => ({ value: e, name: (0, a.S)(e) }));
        return (0, t.jsxs)("form", {
          onSubmit: s,
          children: [
            (0, t.jsxs)(o.ModalHeader, {
              separator: !1,
              className: N.header,
              children: [
                (0, t.jsx)(o.Heading, {
                  variant: "heading-xl/extrabold",
                  children: E.Z.Messages.EMAIL_CHANGE_REASONING_HEADER,
                }),
                (0, t.jsx)(o.ModalCloseButton, {
                  onClick: n,
                  className: N.modalCloseButton,
                }),
              ],
            }),
            (0, t.jsx)(o.ModalContent, {
              className: _.content,
              children: (0, t.jsx)(o.RadioGroup, {
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
            (0, t.jsxs)(o.ModalFooter, {
              className: N.modalFooter,
              children: [
                (0, t.jsx)(o.Button, {
                  color: o.Button.Colors.BRAND,
                  disabled: null == d,
                  size: o.Button.Sizes.MEDIUM,
                  onClick: s,
                  children: E.Z.Messages.CONTINUE,
                }),
                (0, t.jsx)(o.Button, {
                  look: o.Button.Looks.LINK,
                  color: o.Button.Colors.PRIMARY,
                  onClick: n,
                  children: E.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    264119: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return r;
        },
      });
      var t = n(735250);
      n(470079);
      var o = n(481060),
        a = n(689938),
        l = n(120455);
      function r(e) {
        let { email: s, onClose: n } = e;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)(o.ModalHeader, {
              separator: !1,
              className: l.header,
              children: [
                (0, t.jsx)(o.Heading, {
                  className: l.title,
                  variant: "heading-xl/semibold",
                  children:
                    a.Z.Messages
                      .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_COMPLETE_TITLE,
                }),
                (0, t.jsx)(o.ModalCloseButton, {
                  onClick: n,
                  className: l.modalCloseButton,
                }),
              ],
            }),
            (0, t.jsx)(o.ModalContent, {
              className: l.content,
              children: (0, t.jsx)(o.Text, {
                className: l.description,
                variant: "text-md/normal",
                children:
                  a.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_COMPLETE_DESCRIPTION.format(
                    { email: s },
                  ),
              }),
            }),
            (0, t.jsx)(o.ModalContent, {
              className: l.content,
              children: (0, t.jsx)(o.Text, {
                className: l.tooltip,
                variant: "text-sm/normal",
                children:
                  a.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CHECK_SPAM,
              }),
            }),
            (0, t.jsx)(o.ModalFooter, {
              className: l.modalFooter,
              children: (0, t.jsx)(o.Button, {
                className: l.__invalid_submit,
                color: o.Button.Colors.BRAND,
                size: o.Button.Sizes.MEDIUM,
                onClick: n,
                children: a.Z.Messages.OKAY,
              }),
            }),
          ],
        });
      }
    },
    75788: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return d;
        },
      }),
        n(47120);
      var t = n(735250),
        o = n(470079),
        a = n(442837),
        l = n(481060),
        r = n(479531),
        i = n(393869),
        E = n(25990),
        _ = n(689938),
        N = n(120455);
      function d(e) {
        var s;
        let {
            isSlideReady: n,
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
          if (n) {
            var e;
            null === (e = O.current) || void 0 === e || e.focus();
          }
        }, [n]);
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
        return (0, t.jsxs)("form", {
          onSubmit: h,
          children: [
            (0, t.jsxs)(l.ModalHeader, {
              separator: !1,
              className: N.header,
              children: [
                (0, t.jsx)(l.Heading, {
                  className: N.title,
                  variant: "heading-xl/extrabold",
                  children:
                    _.Z.Messages
                      .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_TITLE_DESKTOP,
                }),
                (0, t.jsx)(l.Text, {
                  color: "header-secondary",
                  variant: "text-md/normal",
                  className: N.subtitle,
                  children:
                    _.Z.Messages
                      .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_SUBTITLE,
                }),
                (0, t.jsx)(l.ModalCloseButton, {
                  onClick: C,
                  className: N.modalCloseButton,
                }),
              ],
            }),
            (0, t.jsxs)(l.ModalContent, {
              className: N.content,
              children: [
                (0, t.jsx)(l.FormItem, {
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
                  children: (0, t.jsx)(l.TextInput, {
                    value: m,
                    onChange: I,
                    inputRef: O,
                  }),
                }),
                (0, t.jsx)(l.Text, {
                  className: N.help,
                  variant: "text-sm/normal",
                  children:
                    _.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_RESEND.format(
                      { onResend: L },
                    ),
                }),
              ],
            }),
            (0, t.jsx)(l.ModalFooter, {
              children: (0, t.jsx)(l.Button, {
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
    22150: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return d;
        },
      }),
        n(47120);
      var t = n(735250),
        o = n(470079),
        a = n(442837),
        l = n(481060),
        r = n(479531),
        i = n(393869),
        E = n(594174),
        _ = n(689938),
        N = n(120455);
      function d(e) {
        let { onNext: s, onClose: n } = e,
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
        return (0, t.jsxs)("form", {
          onSubmit: u,
          children: [
            (0, t.jsxs)(l.ModalHeader, {
              separator: !1,
              className: N.header,
              children: [
                (0, t.jsx)(l.Heading, {
                  className: N.title,
                  variant: "heading-xl/extrabold",
                  children:
                    _.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_TITLE,
                }),
                (0, t.jsx)(l.ModalCloseButton, {
                  onClick: n,
                  className: N.modalCloseButton,
                }),
              ],
            }),
            (0, t.jsx)(l.ModalContent, {
              className: N.content,
              children: (0, t.jsx)(l.Text, {
                className: N.description,
                variant: "text-md/normal",
                children:
                  _.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_DESCRIPTION_NO_LINK.format(
                    { oldEmail: null == A ? void 0 : A.email },
                  ),
              }),
            }),
            (0, t.jsxs)(l.ModalFooter, {
              className: N.modalFooter,
              children: [
                (0, t.jsx)(l.Button, {
                  type: "submit",
                  color: l.Button.Colors.BRAND,
                  size: l.Button.Sizes.MEDIUM,
                  submitting: d,
                  className: N.__invalid_submit,
                  children:
                    _.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_BUTTON,
                }),
                (0, t.jsx)(l.Button, {
                  className: N.__invalid_cancel,
                  look: l.Button.Looks.LINK,
                  color: l.Button.Colors.PRIMARY,
                  onClick: n,
                  children: _.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    642298: function (e, s, n) {
      n.r(s),
        n.d(s, {
          default: function () {
            return O;
          },
        }),
        n(47120);
      var t = n(735250),
        o = n(470079),
        a = n(990547),
        l = n(442837),
        r = n(481060),
        i = n(809206),
        E = n(794358),
        _ = n(594174),
        N = n(626135),
        d = n(706734),
        c = n(264119),
        A = n(75788),
        u = n(22150),
        C = n(361833),
        M = n(134562),
        S = n(526761),
        m = n(981631),
        I = n(259076),
        x = n(120455),
        T = n(800010),
        R = n(75277);
      function O(e) {
        var s;
        let { transitionState: n, onClose: O } = e,
          h = (0, l.e7)([_.default], () => _.default.getCurrentUser()),
          L = o.useRef(
            null !== (s = null == h ? void 0 : h.verified) && void 0 !== s && s,
          );
        o.useEffect(
          () => (
            N.default.track(m.rMx.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED),
            () => (0, i.Zy)()
          ),
          [],
        );
        let f = null == h ? void 0 : h.verified,
          g = f ? S.Ax.CONFIRM_START : S.Ax.EMAIL_AND_PASSWORD,
          [p, G] = o.useState(g),
          [j, v] = o.useState(null),
          [U, D] = o.useState(null),
          [H, B] = o.useState(null),
          [Z, k] = o.useState(""),
          [P, b] = o.useState(),
          y = (0, E.d)("change_email_modal"),
          F =
            p === S.Ax.CHANGE_EMAIL_WARNING
              ? x.wumpusExclamationImg
              : x.emailHeaderImg,
          w = p === S.Ax.CHANGE_EMAIL_WARNING ? R : T,
          K = {
            impression_group: a.ImpressionGroups.USER_ACCOUNT_EMAIL_CHANGE_FLOW,
          };
        return (0, t.jsxs)(r.ModalRoot, {
          transitionState: n,
          disableTrack: !0,
          children: [
            (0, t.jsx)("img", { alt: "", className: F, src: w }),
            (0, t.jsxs)(r.Slides, {
              activeSlide: p,
              width: 440,
              onSlideReady: (e) => v(e),
              children: [
                (0, t.jsx)(r.Slide, {
                  id: S.Ax.CONFIRM_START,
                  impressionName:
                    a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
                  impressionProperties: K,
                  children: (0, t.jsx)(u.Z, {
                    onNext: () => G(S.Ax.CONFIRM_CODE),
                    onClose: O,
                  }),
                }),
                (0, t.jsx)(r.Slide, {
                  id: S.Ax.CONFIRM_CODE,
                  impressionName:
                    a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
                  impressionProperties: K,
                  children: (0, t.jsx)(A.Z, {
                    error: H,
                    setError: B,
                    setEmailToken: D,
                    isSlideReady: j === S.Ax.CONFIRM_CODE,
                    onNext: () => {
                      E.Z.trackExposure({
                        location: "change_email_confirm_code_slide",
                      }),
                        G(
                          y
                            ? S.Ax.CHANGE_EMAIL_REASONS
                            : S.Ax.EMAIL_AND_PASSWORD,
                        );
                    },
                    onClose: O,
                  }),
                }),
                (0, t.jsx)(r.Slide, {
                  id: S.Ax.CHANGE_EMAIL_REASONS,
                  impressionName:
                    a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COLLECT_REASONS,
                  impressionProperties: K,
                  children: (0, t.jsx)(d.Z, {
                    onNext: () => (
                      N.default.track(
                        m.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE,
                        { change_email_reason_enum: P },
                      ),
                      null != P && I.Mr.has(P)
                        ? G(S.Ax.CHANGE_EMAIL_WARNING)
                        : G(S.Ax.EMAIL_AND_PASSWORD)
                    ),
                    onClose: O,
                    reason: P,
                    onReasonChange: b,
                  }),
                }),
                (0, t.jsx)(r.Slide, {
                  id: S.Ax.CHANGE_EMAIL_WARNING,
                  impressionName:
                    a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_WARNING,
                  impressionProperties: K,
                  children: (0, t.jsx)(M.Z, {
                    onNext: () => {
                      N.default.track(
                        m.rMx.USER_ACCOUNT_EMAIL_CHANGE_WARNING_CONTINUE,
                        { change_email_reason_enum: P },
                      ),
                        G(S.Ax.EMAIL_AND_PASSWORD);
                    },
                    onClose: O,
                  }),
                }),
                (0, t.jsx)(r.Slide, {
                  id: S.Ax.EMAIL_AND_PASSWORD,
                  impressionName:
                    a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL,
                  impressionProperties: { ...K, email_verified: L.current },
                  children: (0, t.jsx)(C.Z, {
                    emailToken: U,
                    isSlideReady: j === S.Ax.EMAIL_AND_PASSWORD,
                    onBack: f
                      ? () => {
                          y
                            ? G(
                                null != P && I.Mr.has(P)
                                  ? S.Ax.CHANGE_EMAIL_WARNING
                                  : S.Ax.CHANGE_EMAIL_REASONS,
                              )
                            : G(S.Ax.CONFIRM_CODE);
                        }
                      : null,
                    onNext: (e) => {
                      k(e), G(S.Ax.COMPLETE);
                    },
                    onClose: O,
                    reason: P,
                  }),
                }),
                (0, t.jsx)(r.Slide, {
                  id: S.Ax.COMPLETE,
                  impressionName:
                    a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COMPLETE,
                  impressionProperties: K,
                  children: (0, t.jsx)(c.Z, { email: Z, onClose: O }),
                }),
              ],
            }),
          ],
        });
      }
    },
    361833: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return A;
        },
      }),
        n(47120);
      var t = n(735250),
        o = n(470079),
        a = n(442837),
        l = n(481060),
        r = n(809206),
        i = n(25990),
        E = n(626135),
        _ = n(155433),
        N = n(981631),
        d = n(689938),
        c = n(120455);
      function A(e) {
        var s, n;
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
        async function g(e) {
          e.preventDefault(), h(!0);
          let s = await (0, r.Mn)({ email: I, emailToken: A, password: T });
          if ((h(!1), null == s ? void 0 : s.ok))
            E.default.track(N.rMx.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, {
              change_email_reason_enum: m,
            }),
              S(I);
          else {
            var n, t;
            (null == s
              ? void 0
              : null === (n = s.body) || void 0 === n
                ? void 0
                : n.username) != null
              ? (0, _.P)()
              : (null == s
                  ? void 0
                  : null === (t = s.body) || void 0 === t
                    ? void 0
                    : t.email_token) != null &&
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
          (0, t.jsxs)("form", {
            onSubmit: g,
            children: [
              (0, t.jsxs)(l.ModalHeader, {
                separator: !1,
                className: c.header,
                children: [
                  (0, t.jsx)(l.Heading, {
                    className: c.title,
                    variant: "heading-xl/extrabold",
                    children:
                      d.Z.Messages
                        .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_TITLE_DESKTOP,
                  }),
                  (0, t.jsx)(l.Text, {
                    color: "header-secondary",
                    variant: "text-md/normal",
                    className: c.subtitle,
                    children:
                      d.Z.Messages
                        .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_PROMPT_DESKTOP,
                  }),
                  (0, t.jsx)(l.ModalCloseButton, {
                    onClick: C,
                    className: c.modalCloseButton,
                  }),
                ],
              }),
              (0, t.jsxs)(l.ModalContent, {
                className: c.content,
                children: [
                  (0, t.jsx)(l.FormItem, {
                    title: d.Z.Messages.EMAIL,
                    error:
                      null == L
                        ? void 0
                        : null === (s = L.email) || void 0 === s
                          ? void 0
                          : s[0],
                    children: (0, t.jsx)(l.TextInput, {
                      type: "email",
                      value: I,
                      onChange: x,
                      inputRef: f,
                    }),
                  }),
                  (0, t.jsx)(l.FormItem, {
                    className: c.password,
                    title: d.Z.Messages.USER_SETTINGS_LABEL_CURRENT_PASSWORD,
                    error:
                      null == L
                        ? void 0
                        : null === (n = L.password) || void 0 === n
                          ? void 0
                          : n[0],
                    children: (0, t.jsx)(l.TextInput, {
                      type: "password",
                      value: T,
                      onChange: R,
                    }),
                  }),
                ],
              }),
              (0, t.jsxs)(l.ModalFooter, {
                children: [
                  (0, t.jsx)(l.Button, {
                    type: "submit",
                    color: l.Button.Colors.BRAND,
                    size: l.Button.Sizes.MEDIUM,
                    submitting: O,
                    children: d.Z.Messages.DONE,
                  }),
                  null != M
                    ? (0, t.jsx)(l.Button, {
                        className: c.__invalid_cancel,
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.PRIMARY,
                        onClick: M,
                        children: d.Z.Messages.BACK,
                      })
                    : (0, t.jsx)(l.Button, {
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
    134562: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return i;
        },
      });
      var t = n(735250);
      n(470079);
      var o = n(481060),
        a = n(259076),
        l = n(689938),
        r = n(120455);
      function i(e) {
        let { onNext: s, onClose: n } = e;
        return (0, t.jsxs)("form", {
          onSubmit: s,
          children: [
            (0, t.jsxs)(o.ModalHeader, {
              separator: !1,
              className: r.header,
              children: [
                (0, t.jsx)(o.Heading, {
                  variant: "heading-xl/extrabold",
                  children: l.Z.Messages.EMAIL_CHANGE_REASONING_WARNING_HEADER,
                }),
                (0, t.jsx)(o.ModalCloseButton, {
                  onClick: n,
                  className: r.modalCloseButton,
                }),
              ],
            }),
            (0, t.jsxs)(o.ModalContent, {
              className: r.content,
              children: [
                (0, t.jsx)(o.Text, {
                  className: r.description,
                  variant: "text-md/normal",
                  children:
                    l.Z.Messages.EMAIL_CHANGE_REASONING_IMPERSONATION_EDUCATION.format(
                      { hcArticle: a.j1 },
                    ),
                }),
                (0, t.jsx)(o.Text, {
                  className: r.description,
                  variant: "text-md/normal",
                  children:
                    l.Z.Messages
                      .EMAIL_CHANGE_REASONING_DISCORD_NEVER_ASKS_FOR_EMAIL_CHANGE,
                }),
              ],
            }),
            (0, t.jsxs)(o.ModalFooter, {
              className: r.modalFooter,
              children: [
                (0, t.jsx)(o.Button, {
                  color: o.Button.Colors.BRAND,
                  onClick: n,
                  children: l.Z.Messages.CANCEL,
                }),
                (0, t.jsx)(o.Button, {
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
    393869: function (e, s, n) {
      n.d(s, {
        i: function () {
          return l;
        },
        w: function () {
          return r;
        },
      });
      var t = n(990547),
        o = n(573261),
        a = n(981631);
      function l() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return o.Z.put({
          url: a.ANM.USER_EMAIL,
          trackedActionData: {
            event: t.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
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
              event: t.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
            },
          })
        ).body;
      }
    },
    259076: function (e, s, n) {
      var t, o;
      n.d(s, {
        Mr: function () {
          return l;
        },
        j1: function () {
          return r;
        },
        pw: function () {
          return t;
        },
        zf: function () {
          return a;
        },
      }),
        n(47120),
        ((o = t || (t = {}))[(o.DISCORD_EMPLOYEE_ASKED_ME_TO = 0)] =
          "DISCORD_EMPLOYEE_ASKED_ME_TO"),
        (o[(o.SOMEONE_ASKED_ME_TO = 1)] = "SOMEONE_ASKED_ME_TO"),
        (o[(o.NEW_EMAIL = 2)] = "NEW_EMAIL"),
        (o[(o.SOMETHING_ELSE = 3)] = "SOMETHING_ELSE");
      let a = [0, 1, 2, 3],
        l = new Set([0, 1]),
        r =
          "https://discord.com/safety/understanding-and-avoiding-common-scams";
    },
    488889: function (e, s, n) {
      n.d(s, {
        S: function () {
          return l;
        },
      });
      var t = n(259076),
        o = n(689938);
      let a = {
        [t.pw.DISCORD_EMPLOYEE_ASKED_ME_TO]: () =>
          o.Z.Messages.EMAIL_CHANGE_REASONING_DISCORD_EMPLOYEE_ASKED,
        [t.pw.SOMEONE_ASKED_ME_TO]: () =>
          o.Z.Messages.EMAIL_CHANGE_REASONING_SOMEONE_ASKED,
        [t.pw.NEW_EMAIL]: () => o.Z.Messages.EMAIL_CHANGE_REASONING_NEW_EMAIL,
        [t.pw.SOMETHING_ELSE]: () =>
          o.Z.Messages.EMAIL_CHANGE_REASONING_SOMETHING_ELSE,
      };
      function l(e) {
        return a[e]();
      }
    },
    794358: function (e, s, n) {
      n.d(s, {
        d: function () {
          return o;
        },
      });
      let t = (0, n(818083).B)({
        kind: "user",
        id: "2024-07_email_change_reasoning_buttons",
        label: "Email Change Reasoning Buttons",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label:
              "Add additional friction to the email change flow by asking users why they are changing their email",
            config: { enabled: !0 },
          },
        ],
      });
      function o(e) {
        return !!t.useExperiment({ location: e }, { autoTrackExposure: !1 })
          .enabled;
      }
      s.Z = t;
    },
  },
]);
//# sourceMappingURL=02a0bdfd1e2abae3e7d4.js.map
