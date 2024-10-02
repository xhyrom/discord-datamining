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
        l = t(226186),
        r = t(626135),
        i = t(981631),
        E = t(259076),
        _ = t(689938),
        N = t(810452),
        c = t(859565);
      function d(e) {
        let {
            onNext: s,
            onClose: t,
            reason: d,
            onReasonChange: u,
            freeTextResponse: A,
            setFreeTextResponse: C,
          } = e,
          M = E.zf.map((e) => ({ value: e, name: (0, a.S)(e) })),
          S = (0, l.u)("change_email_collect_reasons_slide");
        return (0, n.jsxs)("form", {
          onSubmit: s,
          children: [
            (0, n.jsxs)(o.ModalHeader, {
              separator: !1,
              className: c.header,
              children: [
                (0, n.jsx)(o.Heading, {
                  variant: "heading-xl/extrabold",
                  children: _.Z.Messages.EMAIL_CHANGE_REASONING_HEADER,
                }),
                (0, n.jsx)(o.ModalCloseButton, {
                  onClick: t,
                  className: c.modalCloseButton,
                }),
              ],
            }),
            (0, n.jsxs)(o.ModalContent, {
              className: N.content,
              children: [
                (0, n.jsx)(o.RadioGroup, {
                  radioPosition: "right",
                  radioItemClassName: N.radioItem,
                  size: o.RadioGroup.Sizes.NOT_SET,
                  value: d,
                  options: M,
                  onChange: (e) => {
                    let { value: s } = e;
                    r.default.track(
                      i.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED,
                      { change_email_reason_enum: s },
                    ),
                      u(s),
                      C(""),
                      s === E.pw.SOMETHING_ELSE &&
                        l.Z.trackExposure({
                          location: "change_email_collect_reasons_slide",
                        });
                  },
                }),
                S &&
                  d === E.pw.SOMETHING_ELSE &&
                  (0, n.jsx)(o.FormItem, {
                    children: (0, n.jsx)(o.TextArea, {
                      value: A,
                      maxLength: E.mF,
                      onChange: C,
                      className: N.textArea,
                      placeholder:
                        _.Z.Messages
                          .EMAIL_CHANGE_REASONING_SOMETHING_ELSE_TEXTAREA_HINT,
                    }),
                  }),
              ],
            }),
            (0, n.jsxs)(o.ModalFooter, {
              className: c.modalFooter,
              children: [
                (0, n.jsx)(o.Button, {
                  color: o.Button.Colors.BRAND,
                  disabled: null == d,
                  size: o.Button.Sizes.MEDIUM,
                  onClick: s,
                  children: _.Z.Messages.CONTINUE,
                }),
                (0, n.jsx)(o.Button, {
                  look: o.Button.Looks.LINK,
                  color: o.Button.Colors.PRIMARY,
                  onClick: t,
                  children: _.Z.Messages.CANCEL,
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
          return c;
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
      function c(e) {
        var s;
        let {
            isSlideReady: t,
            error: c,
            setEmailToken: d,
            setError: u,
            onNext: A,
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
            e.preventDefault(), u(null), S(!0);
            try {
              let { token: e } = await (0, i.w)(m);
              d(e), A();
            } catch (e) {
              u(new r.Z(e).getAnyErrorMessage());
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
                    null != c
                      ? c
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
          return c;
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
      function c(e) {
        let { onNext: s, onClose: t } = e,
          [c, d] = o.useState(!1),
          u = (0, a.e7)([E.default], () => E.default.getCurrentUser()),
          A = async (e) => {
            e.preventDefault(), d(!0);
            try {
              await (0, i.i)(), s();
            } catch (s) {
              let e = new r.Z(s).getAnyErrorMessage();
              null != e &&
                (0, l.showToast)((0, l.createToast)(e, l.ToastType.FAILURE));
            } finally {
              d(!1);
            }
          };
        return (0, n.jsxs)("form", {
          onSubmit: A,
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
                    { oldEmail: null == u ? void 0 : u.email },
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
                  submitting: c,
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
        c = t(264119),
        d = t(75788),
        u = t(22150),
        A = t(361833),
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
          [p, g] = o.useState(f),
          [G, j] = o.useState(null),
          [v, U] = o.useState(null),
          [D, H] = o.useState(null),
          [Z, B] = o.useState(""),
          [k, P] = o.useState(),
          [b, F] = o.useState(""),
          y =
            p === M.Ax.CHANGE_EMAIL_WARNING
              ? I.wumpusExclamationImg
              : I.emailHeaderImg,
          w = p === M.Ax.CHANGE_EMAIL_WARNING ? T : x,
          K = {
            impression_group: a.ImpressionGroups.USER_ACCOUNT_EMAIL_CHANGE_FLOW,
          };
        return (0, n.jsxs)(r.ModalRoot, {
          transitionState: t,
          disableTrack: !0,
          children: [
            (0, n.jsx)("img", { alt: "", className: y, src: w }),
            (0, n.jsxs)(r.Slides, {
              activeSlide: p,
              width: 440,
              onSlideReady: (e) => j(e),
              children: [
                (0, n.jsx)(r.Slide, {
                  id: M.Ax.CONFIRM_START,
                  impressionName:
                    a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
                  impressionProperties: K,
                  children: (0, n.jsx)(u.Z, {
                    onNext: () => g(M.Ax.CONFIRM_CODE),
                    onClose: R,
                  }),
                }),
                (0, n.jsx)(r.Slide, {
                  id: M.Ax.CONFIRM_CODE,
                  impressionName:
                    a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
                  impressionProperties: K,
                  children: (0, n.jsx)(d.Z, {
                    error: D,
                    setError: H,
                    setEmailToken: U,
                    isSlideReady: G === M.Ax.CONFIRM_CODE,
                    onNext: () => g(M.Ax.CHANGE_EMAIL_REASONS),
                    onClose: R,
                  }),
                }),
                (0, n.jsx)(r.Slide, {
                  id: M.Ax.CHANGE_EMAIL_REASONS,
                  impressionName:
                    a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COLLECT_REASONS,
                  impressionProperties: K,
                  children: (0, n.jsx)(N.Z, {
                    onNext: () => (
                      _.default.track(
                        S.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE,
                        { change_email_reason_enum: k },
                      ),
                      null != k && m.Mr.has(k)
                        ? g(M.Ax.CHANGE_EMAIL_WARNING)
                        : g(M.Ax.EMAIL_AND_PASSWORD)
                    ),
                    onClose: R,
                    reason: k,
                    onReasonChange: P,
                    freeTextResponse: b,
                    setFreeTextResponse: F,
                  }),
                }),
                (0, n.jsx)(r.Slide, {
                  id: M.Ax.CHANGE_EMAIL_WARNING,
                  impressionName:
                    a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_WARNING,
                  impressionProperties: K,
                  children: (0, n.jsx)(C.Z, {
                    onNext: () => {
                      _.default.track(
                        S.rMx.USER_ACCOUNT_EMAIL_CHANGE_WARNING_CONTINUE,
                        { change_email_reason_enum: k },
                      ),
                        g(M.Ax.EMAIL_AND_PASSWORD);
                    },
                    onClose: R,
                  }),
                }),
                (0, n.jsx)(r.Slide, {
                  id: M.Ax.EMAIL_AND_PASSWORD,
                  impressionName:
                    a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL,
                  impressionProperties: { ...K, email_verified: h.current },
                  children: (0, n.jsx)(A.Z, {
                    emailToken: v,
                    isSlideReady: G === M.Ax.EMAIL_AND_PASSWORD,
                    onBack: L
                      ? () =>
                          g(
                            null != k && m.Mr.has(k)
                              ? M.Ax.CHANGE_EMAIL_WARNING
                              : M.Ax.CHANGE_EMAIL_REASONS,
                          )
                      : null,
                    onNext: (e) => {
                      _.default.track(
                        S.rMx.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL,
                        { change_email_reason_enum: k, free_text_response: b },
                      ),
                        B(e),
                        g(M.Ax.COMPLETE);
                    },
                    onClose: R,
                  }),
                }),
                (0, n.jsx)(r.Slide, {
                  id: M.Ax.COMPLETE,
                  impressionName:
                    a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COMPLETE,
                  impressionProperties: K,
                  children: (0, n.jsx)(c.Z, { email: Z, onClose: R }),
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
          return c;
        },
      }),
        t(47120);
      var n = t(735250),
        o = t(470079),
        a = t(442837),
        l = t(481060),
        r = t(809206),
        i = t(25990),
        E = t(155433),
        _ = t(689938),
        N = t(859565);
      function c(e) {
        var s, t;
        let {
            emailToken: c,
            isSlideReady: d,
            onClose: u,
            onBack: A,
            onNext: C,
          } = e,
          [M, S] = o.useState(""),
          [m, I] = o.useState(""),
          [x, T] = o.useState(!1),
          R = (0, a.e7)([i.Z], () => i.Z.getErrors()),
          O = o.useRef(null);
        async function h(e) {
          e.preventDefault(), T(!0);
          let s = await (0, r.Mn)({ email: M, emailToken: c, password: m });
          if ((T(!1), null == s ? void 0 : s.ok)) C(M);
          else {
            var t, n;
            (null == s
              ? void 0
              : null === (t = s.body) || void 0 === t
                ? void 0
                : t.username) != null
              ? (0, E.P)()
              : (null == s
                  ? void 0
                  : null === (n = s.body) || void 0 === n
                    ? void 0
                    : n.email_token) != null &&
                (null == A || A());
          }
        }
        return (
          o.useEffect(() => {
            if (d) {
              var e;
              null === (e = O.current) || void 0 === e || e.focus();
            }
          }, [d]),
          (0, n.jsxs)("form", {
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
                        .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_TITLE_DESKTOP,
                  }),
                  (0, n.jsx)(l.Text, {
                    color: "header-secondary",
                    variant: "text-md/normal",
                    className: N.subtitle,
                    children:
                      _.Z.Messages
                        .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_PROMPT_DESKTOP,
                  }),
                  (0, n.jsx)(l.ModalCloseButton, {
                    onClick: u,
                    className: N.modalCloseButton,
                  }),
                ],
              }),
              (0, n.jsxs)(l.ModalContent, {
                className: N.content,
                children: [
                  (0, n.jsx)(l.FormItem, {
                    title: _.Z.Messages.EMAIL,
                    error:
                      null == R
                        ? void 0
                        : null === (s = R.email) || void 0 === s
                          ? void 0
                          : s[0],
                    children: (0, n.jsx)(l.TextInput, {
                      type: "email",
                      value: M,
                      onChange: S,
                      inputRef: O,
                    }),
                  }),
                  (0, n.jsx)(l.FormItem, {
                    className: N.password,
                    title: _.Z.Messages.USER_SETTINGS_LABEL_CURRENT_PASSWORD,
                    error:
                      null == R
                        ? void 0
                        : null === (t = R.password) || void 0 === t
                          ? void 0
                          : t[0],
                    children: (0, n.jsx)(l.TextInput, {
                      type: "password",
                      value: m,
                      onChange: I,
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
                    submitting: x,
                    children: _.Z.Messages.DONE,
                  }),
                  null != A
                    ? (0, n.jsx)(l.Button, {
                        className: N.__invalid_cancel,
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.PRIMARY,
                        onClick: A,
                        children: _.Z.Messages.BACK,
                      })
                    : (0, n.jsx)(l.Button, {
                        className: N.__invalid_cancel,
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.PRIMARY,
                        onClick: u,
                        children: _.Z.Messages.CANCEL,
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
        mF: function () {
          return i;
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
          "https://discord.com/safety/understanding-and-avoiding-common-scams",
        i = 1024;
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
    226186: function (e, s, t) {
      t.d(s, {
        u: function () {
          return o;
        },
      });
      let n = (0, t(818083).B)({
        kind: "user",
        id: "2024-10_email_change_reasoning_buttons_free_text_response",
        label: "Email Change Reasoning Buttons Free Text Response",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: 'Display a text area when the user selects "Something else"',
            config: { enabled: !0 },
          },
        ],
      });
      function o(e) {
        return !!n.useExperiment({ location: e }, { autoTrackExposure: !1 })
          .enabled;
      }
      s.Z = n;
    },
  },
]);
//# sourceMappingURL=56d6e5b335c14a96c652.js.map
