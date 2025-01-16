"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["9343"],
  {
    75277: function (e) {
      e.exports = "/assets/5e519af33bacfd762837.png";
    },
    706734: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _;
        },
      });
      var s = n(200651);
      n(192379);
      var o = n(481060),
        l = n(488889),
        a = n(226186),
        i = n(626135),
        r = n(981631),
        d = n(308569),
        c = n(388032),
        u = n(511023),
        m = n(981818);
      function _(e) {
        let {
            onNext: t,
            onClose: n,
            reason: _,
            onReasonChange: E,
            freeTextResponse: N,
            setFreeTextResponse: x,
          } = e,
          A = d.zf.map((e) => ({ value: e, name: (0, l.S)(e) })),
          C = (0, a.u)("change_email_collect_reasons_slide");
        return (0, s.jsxs)("form", {
          onSubmit: t,
          children: [
            (0, s.jsxs)(o.ModalHeader, {
              separator: !1,
              className: m.header,
              children: [
                (0, s.jsx)(o.Heading, {
                  variant: "heading-xl/extrabold",
                  children: c.intl.string(c.t["41NIIi"]),
                }),
                (0, s.jsx)(o.ModalCloseButton, {
                  onClick: n,
                  className: m.modalCloseButton,
                }),
              ],
            }),
            (0, s.jsxs)(o.ModalContent, {
              className: u.content,
              children: [
                (0, s.jsx)(o.RadioGroup, {
                  radioPosition: "right",
                  radioItemClassName: u.radioItem,
                  size: o.RadioGroup.Sizes.NOT_SET,
                  value: _,
                  options: A,
                  onChange: (e) => {
                    let { value: t } = e;
                    i.default.track(
                      r.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED,
                      { change_email_reason_enum: t },
                    ),
                      E(t),
                      x(""),
                      t === d.pw.SOMETHING_ELSE &&
                        a.Z.trackExposure({
                          location: "change_email_collect_reasons_slide",
                        });
                  },
                }),
                C &&
                  _ === d.pw.SOMETHING_ELSE &&
                  (0, s.jsx)(o.FormItem, {
                    children: (0, s.jsx)(o.TextArea, {
                      value: N,
                      maxLength: d.mF,
                      onChange: x,
                      className: u.textArea,
                      placeholder: c.intl.string(c.t.Q8Rk7O),
                    }),
                  }),
              ],
            }),
            (0, s.jsxs)(o.ModalFooter, {
              className: m.modalFooter,
              children: [
                (0, s.jsx)(o.Button, {
                  color: o.Button.Colors.BRAND,
                  disabled: null == _,
                  size: o.Button.Sizes.MEDIUM,
                  onClick: t,
                  children: c.intl.string(c.t["3PatS0"]),
                }),
                (0, s.jsx)(o.Button, {
                  look: o.Button.Looks.LINK,
                  color: o.Button.Colors.PRIMARY,
                  onClick: n,
                  children: c.intl.string(c.t["ETE/oK"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    264119: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var s = n(200651);
      n(192379);
      var o = n(481060),
        l = n(388032),
        a = n(981818);
      function i(e) {
        let { email: t, onClose: n } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(o.ModalHeader, {
              separator: !1,
              className: a.header,
              children: [
                (0, s.jsx)(o.Heading, {
                  className: a.title,
                  variant: "heading-xl/semibold",
                  children: l.intl.string(l.t["8O+nFx"]),
                }),
                (0, s.jsx)(o.ModalCloseButton, {
                  onClick: n,
                  className: a.modalCloseButton,
                }),
              ],
            }),
            (0, s.jsx)(o.ModalContent, {
              className: a.content,
              children: (0, s.jsx)(o.Text, {
                className: a.description,
                variant: "text-md/normal",
                children: l.intl.format(l.t.Zvx0Oz, { email: t }),
              }),
            }),
            (0, s.jsx)(o.ModalContent, {
              className: a.content,
              children: (0, s.jsx)(o.Text, {
                className: a.tooltip,
                variant: "text-sm/normal",
                children: l.intl.string(l.t.yb7itb),
              }),
            }),
            (0, s.jsx)(o.ModalFooter, {
              className: a.modalFooter,
              children: (0, s.jsx)(o.Button, {
                className: a.__invalid_submit,
                color: o.Button.Colors.BRAND,
                size: o.Button.Sizes.MEDIUM,
                onClick: n,
                children: l.intl.string(l.t.BddRzc),
              }),
            }),
          ],
        });
      }
    },
    75788: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      }),
        n(47120);
      var s = n(200651),
        o = n(192379),
        l = n(442837),
        a = n(481060),
        i = n(479531),
        r = n(393869),
        d = n(25990),
        c = n(388032),
        u = n(981818);
      function m(e) {
        var t;
        let {
            isSlideReady: n,
            error: m,
            setEmailToken: _,
            setError: E,
            onNext: N,
            onClose: x,
          } = e,
          [A, C] = o.useState(!1),
          [h, M] = o.useState(""),
          [S, p] = o.useState(!1),
          I = (0, l.e7)([d.Z], () => d.Z.getErrors()),
          f = o.useRef(null);
        o.useEffect(() => {
          if (n) {
            var e;
            null === (e = f.current) || void 0 === e || e.focus();
          }
        }, [n]);
        let j = async (e) => {
            e.preventDefault(), E(null), C(!0);
            try {
              let { token: e } = await (0, r.w)(h);
              _(e), N();
            } catch (e) {
              E(new i.Z(e).getAnyErrorMessage());
            } finally {
              C(!1);
            }
          },
          g = async () => {
            if (!S) {
              p(!0);
              try {
                await (0, r.i)(!0),
                  (0, a.showToast)(
                    (0, a.createToast)(
                      c.intl.string(c.t["84yeo6"]),
                      a.ToastType.SUCCESS,
                    ),
                  );
              } catch (t) {
                let e = new i.Z(t).getAnyErrorMessage();
                null != e &&
                  (0, a.showToast)((0, a.createToast)(e, a.ToastType.FAILURE));
              } finally {
                p(!1);
              }
            }
          };
        return (0, s.jsxs)("form", {
          onSubmit: j,
          children: [
            (0, s.jsxs)(a.ModalHeader, {
              separator: !1,
              className: u.header,
              children: [
                (0, s.jsx)(a.Heading, {
                  className: u.title,
                  variant: "heading-xl/extrabold",
                  children: c.intl.string(c.t.jMGc4O),
                }),
                (0, s.jsx)(a.Text, {
                  color: "header-secondary",
                  variant: "text-md/normal",
                  className: u.subtitle,
                  children: c.intl.string(c.t.SZJow8),
                }),
                (0, s.jsx)(a.ModalCloseButton, {
                  onClick: x,
                  className: u.modalCloseButton,
                }),
              ],
            }),
            (0, s.jsxs)(a.ModalContent, {
              className: u.content,
              children: [
                (0, s.jsx)(a.FormItem, {
                  title: c.intl.string(c.t["8mZX6O"]),
                  error:
                    null != m
                      ? m
                      : null == I
                        ? void 0
                        : null === (t = I.email_token) || void 0 === t
                          ? void 0
                          : t[0],
                  children: (0, s.jsx)(a.TextInput, {
                    value: h,
                    onChange: M,
                    inputRef: f,
                  }),
                }),
                (0, s.jsx)(a.Text, {
                  className: u.help,
                  variant: "text-sm/normal",
                  children: c.intl.format(c.t.P0sak5, { onResend: g }),
                }),
              ],
            }),
            (0, s.jsx)(a.ModalFooter, {
              children: (0, s.jsx)(a.Button, {
                type: "submit",
                color: a.Button.Colors.BRAND,
                size: a.Button.Sizes.MEDIUM,
                submitting: A,
                children: c.intl.string(c.t.PDTjLC),
              }),
            }),
          ],
        });
      }
    },
    22150: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      }),
        n(47120);
      var s = n(200651),
        o = n(192379),
        l = n(442837),
        a = n(481060),
        i = n(479531),
        r = n(393869),
        d = n(594174),
        c = n(388032),
        u = n(981818);
      function m(e) {
        let { onNext: t, onClose: n } = e,
          [m, _] = o.useState(!1),
          E = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
          N = async (e) => {
            e.preventDefault(), _(!0);
            try {
              await (0, r.i)(), t();
            } catch (t) {
              let e = new i.Z(t).getAnyErrorMessage();
              null != e &&
                (0, a.showToast)((0, a.createToast)(e, a.ToastType.FAILURE));
            } finally {
              _(!1);
            }
          };
        return (0, s.jsxs)("form", {
          onSubmit: N,
          children: [
            (0, s.jsxs)(a.ModalHeader, {
              separator: !1,
              className: u.header,
              children: [
                (0, s.jsx)(a.Heading, {
                  className: u.title,
                  variant: "heading-xl/extrabold",
                  children: c.intl.string(c.t.uFxYq6),
                }),
                (0, s.jsx)(a.ModalCloseButton, {
                  onClick: n,
                  className: u.modalCloseButton,
                }),
              ],
            }),
            (0, s.jsx)(a.ModalContent, {
              className: u.content,
              children: (0, s.jsx)(a.Text, {
                className: u.description,
                variant: "text-md/normal",
                children: c.intl.format(c.t.oMFSgo, {
                  oldEmail: null == E ? void 0 : E.email,
                }),
              }),
            }),
            (0, s.jsxs)(a.ModalFooter, {
              className: u.modalFooter,
              children: [
                (0, s.jsx)(a.Button, {
                  type: "submit",
                  color: a.Button.Colors.BRAND,
                  size: a.Button.Sizes.MEDIUM,
                  submitting: m,
                  className: u.__invalid_submit,
                  children: c.intl.string(c.t.rXV81N),
                }),
                (0, s.jsx)(a.Button, {
                  className: u.__invalid_cancel,
                  look: a.Button.Looks.LINK,
                  color: a.Button.Colors.PRIMARY,
                  onClick: n,
                  children: c.intl.string(c.t["ETE/oK"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    642298: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        }),
        n(47120);
      var s = n(200651),
        o = n(192379),
        l = n(990547),
        a = n(442837),
        i = n(481060),
        r = n(809206),
        d = n(594174),
        c = n(626135),
        u = n(706734),
        m = n(264119),
        _ = n(75788),
        E = n(22150),
        N = n(361833),
        x = n(134562),
        A = n(526761),
        C = n(981631),
        h = n(308569),
        M = n(981818),
        S = n(800010),
        p = n(75277);
      function I(e) {
        var t;
        let { transitionState: n, onClose: I } = e,
          f = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
          j = o.useRef(
            null !== (t = null == f ? void 0 : f.verified) && void 0 !== t && t,
          );
        o.useEffect(
          () => (
            c.default.track(C.rMx.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED),
            () => (0, r.Zy)()
          ),
          [],
        );
        let g = null == f ? void 0 : f.verified,
          R = g ? A.Ax.CONFIRM_START : A.Ax.EMAIL_AND_PASSWORD,
          [v, T] = o.useState(R),
          [O, L] = o.useState(null),
          [B, k] = o.useState(null),
          [D, U] = o.useState(null),
          [b, H] = o.useState(""),
          [y, G] = o.useState(),
          [F, w] = o.useState(""),
          Z =
            v === A.Ax.CHANGE_EMAIL_WARNING
              ? M.wumpusExclamationImg
              : M.emailHeaderImg,
          P = v === A.Ax.CHANGE_EMAIL_WARNING ? p : S,
          W = {
            impression_group: l.ImpressionGroups.USER_ACCOUNT_EMAIL_CHANGE_FLOW,
          };
        return (0, s.jsxs)(i.ModalRoot, {
          transitionState: n,
          disableTrack: !0,
          children: [
            (0, s.jsx)("img", { alt: "", className: Z, src: P }),
            (0, s.jsxs)(i.Slides, {
              activeSlide: v,
              width: 440,
              onSlideReady: (e) => L(e),
              children: [
                (0, s.jsx)(i.Slide, {
                  id: A.Ax.CONFIRM_START,
                  impressionName:
                    l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
                  impressionProperties: W,
                  children: (0, s.jsx)(E.Z, {
                    onNext: () => T(A.Ax.CONFIRM_CODE),
                    onClose: I,
                  }),
                }),
                (0, s.jsx)(i.Slide, {
                  id: A.Ax.CONFIRM_CODE,
                  impressionName:
                    l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
                  impressionProperties: W,
                  children: (0, s.jsx)(_.Z, {
                    error: D,
                    setError: U,
                    setEmailToken: k,
                    isSlideReady: O === A.Ax.CONFIRM_CODE,
                    onNext: () => T(A.Ax.CHANGE_EMAIL_REASONS),
                    onClose: I,
                  }),
                }),
                (0, s.jsx)(i.Slide, {
                  id: A.Ax.CHANGE_EMAIL_REASONS,
                  impressionName:
                    l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COLLECT_REASONS,
                  impressionProperties: W,
                  children: (0, s.jsx)(u.Z, {
                    onNext: () => (
                      c.default.track(
                        C.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE,
                        { change_email_reason_enum: y },
                      ),
                      null != y && h.Mr.has(y)
                        ? T(A.Ax.CHANGE_EMAIL_WARNING)
                        : T(A.Ax.EMAIL_AND_PASSWORD)
                    ),
                    onClose: I,
                    reason: y,
                    onReasonChange: G,
                    freeTextResponse: F,
                    setFreeTextResponse: w,
                  }),
                }),
                (0, s.jsx)(i.Slide, {
                  id: A.Ax.CHANGE_EMAIL_WARNING,
                  impressionName:
                    l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_WARNING,
                  impressionProperties: W,
                  children: (0, s.jsx)(x.Z, {
                    onNext: () => {
                      c.default.track(
                        C.rMx.USER_ACCOUNT_EMAIL_CHANGE_WARNING_CONTINUE,
                        { change_email_reason_enum: y },
                      ),
                        T(A.Ax.EMAIL_AND_PASSWORD);
                    },
                    onClose: I,
                  }),
                }),
                (0, s.jsx)(i.Slide, {
                  id: A.Ax.EMAIL_AND_PASSWORD,
                  impressionName:
                    l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL,
                  impressionProperties: { ...W, email_verified: j.current },
                  children: (0, s.jsx)(N.Z, {
                    emailToken: B,
                    isSlideReady: O === A.Ax.EMAIL_AND_PASSWORD,
                    onBack: g
                      ? () =>
                          T(
                            null != y && h.Mr.has(y)
                              ? A.Ax.CHANGE_EMAIL_WARNING
                              : A.Ax.CHANGE_EMAIL_REASONS,
                          )
                      : null,
                    onNext: (e) => {
                      c.default.track(
                        C.rMx.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL,
                        { change_email_reason_enum: y, free_text_response: F },
                      ),
                        H(e),
                        T(A.Ax.COMPLETE);
                    },
                    onClose: I,
                  }),
                }),
                (0, s.jsx)(i.Slide, {
                  id: A.Ax.COMPLETE,
                  impressionName:
                    l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COMPLETE,
                  impressionProperties: W,
                  children: (0, s.jsx)(m.Z, { email: b, onClose: I }),
                }),
              ],
            }),
          ],
        });
      }
    },
    361833: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      }),
        n(47120);
      var s = n(200651),
        o = n(192379),
        l = n(442837),
        a = n(481060),
        i = n(809206),
        r = n(25990),
        d = n(155433),
        c = n(388032),
        u = n(981818);
      function m(e) {
        var t, n;
        let {
            emailToken: m,
            isSlideReady: _,
            onClose: E,
            onBack: N,
            onNext: x,
          } = e,
          [A, C] = o.useState(""),
          [h, M] = o.useState(""),
          [S, p] = o.useState(!1),
          I = (0, l.e7)([r.Z], () => r.Z.getErrors()),
          f = o.useRef(null);
        async function j(e) {
          e.preventDefault(), p(!0);
          let t = await (0, i.Mn)({ email: A, emailToken: m, password: h });
          if ((p(!1), null == t ? void 0 : t.ok)) x(A);
          else {
            var n, s;
            (null == t
              ? void 0
              : null === (n = t.body) || void 0 === n
                ? void 0
                : n.username) != null
              ? (0, d.P)()
              : (null == t
                  ? void 0
                  : null === (s = t.body) || void 0 === s
                    ? void 0
                    : s.email_token) != null &&
                (null == N || N());
          }
        }
        return (
          o.useEffect(() => {
            if (_) {
              var e;
              null === (e = f.current) || void 0 === e || e.focus();
            }
          }, [_]),
          (0, s.jsxs)("form", {
            onSubmit: j,
            children: [
              (0, s.jsxs)(a.ModalHeader, {
                separator: !1,
                className: u.header,
                children: [
                  (0, s.jsx)(a.Heading, {
                    className: u.title,
                    variant: "heading-xl/extrabold",
                    children: c.intl.string(c.t.p3280t),
                  }),
                  (0, s.jsx)(a.Text, {
                    color: "header-secondary",
                    variant: "text-md/normal",
                    className: u.subtitle,
                    children: c.intl.string(c.t["1k44EB"]),
                  }),
                  (0, s.jsx)(a.ModalCloseButton, {
                    onClick: E,
                    className: u.modalCloseButton,
                  }),
                ],
              }),
              (0, s.jsxs)(a.ModalContent, {
                className: u.content,
                children: [
                  (0, s.jsx)(a.FormItem, {
                    title: c.intl.string(c.t["w/qqKC"]),
                    error:
                      null == I
                        ? void 0
                        : null === (t = I.email) || void 0 === t
                          ? void 0
                          : t[0],
                    children: (0, s.jsx)(a.TextInput, {
                      type: "email",
                      value: A,
                      onChange: C,
                      inputRef: f,
                    }),
                  }),
                  (0, s.jsx)(a.FormItem, {
                    className: u.password,
                    title: c.intl.string(c.t.TmdnJy),
                    error:
                      null == I
                        ? void 0
                        : null === (n = I.password) || void 0 === n
                          ? void 0
                          : n[0],
                    children: (0, s.jsx)(a.TextInput, {
                      type: "password",
                      value: h,
                      onChange: M,
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)(a.ModalFooter, {
                children: [
                  (0, s.jsx)(a.Button, {
                    type: "submit",
                    color: a.Button.Colors.BRAND,
                    size: a.Button.Sizes.MEDIUM,
                    submitting: S,
                    children: c.intl.string(c.t.i4jeWV),
                  }),
                  null != N
                    ? (0, s.jsx)(a.Button, {
                        className: u.__invalid_cancel,
                        look: a.Button.Looks.LINK,
                        color: a.Button.Colors.PRIMARY,
                        onClick: N,
                        children: c.intl.string(c.t["13/7kZ"]),
                      })
                    : (0, s.jsx)(a.Button, {
                        className: u.__invalid_cancel,
                        look: a.Button.Looks.LINK,
                        color: a.Button.Colors.PRIMARY,
                        onClick: E,
                        children: c.intl.string(c.t["ETE/oK"]),
                      }),
                ],
              }),
            ],
          })
        );
      }
    },
    134562: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var s = n(200651);
      n(192379);
      var o = n(481060),
        l = n(308569),
        a = n(388032),
        i = n(981818);
      function r(e) {
        let { onNext: t, onClose: n } = e;
        return (0, s.jsxs)("form", {
          onSubmit: t,
          children: [
            (0, s.jsxs)(o.ModalHeader, {
              separator: !1,
              className: i.header,
              children: [
                (0, s.jsx)(o.Heading, {
                  variant: "heading-xl/extrabold",
                  children: a.intl.string(a.t.hhR7gY),
                }),
                (0, s.jsx)(o.ModalCloseButton, {
                  onClick: n,
                  className: i.modalCloseButton,
                }),
              ],
            }),
            (0, s.jsxs)(o.ModalContent, {
              className: i.content,
              children: [
                (0, s.jsx)(o.Text, {
                  className: i.description,
                  variant: "text-md/normal",
                  children: a.intl.format(a.t.rqWXUV, { hcArticle: l.j1 }),
                }),
                (0, s.jsx)(o.Text, {
                  className: i.description,
                  variant: "text-md/normal",
                  children: a.intl.string(a.t["3LW10N"]),
                }),
              ],
            }),
            (0, s.jsxs)(o.ModalFooter, {
              className: i.modalFooter,
              children: [
                (0, s.jsx)(o.Button, {
                  color: o.Button.Colors.BRAND,
                  onClick: n,
                  children: a.intl.string(a.t["ETE/oK"]),
                }),
                (0, s.jsx)(o.Button, {
                  color: o.Button.Colors.PRIMARY,
                  look: o.Button.Looks.LINK,
                  onClick: t,
                  children: a.intl.string(a.t.rwTBFh),
                }),
              ],
            }),
          ],
        });
      }
    },
    393869: function (e, t, n) {
      n.d(t, {
        i: function () {
          return a;
        },
        w: function () {
          return i;
        },
      });
      var s = n(990547),
        o = n(573261),
        l = n(981631);
      function a() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return o.Z.put({
          url: l.ANM.USER_EMAIL,
          trackedActionData: {
            event: s.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
            properties: { is_resend: e },
          },
          rejectWithError: !1,
        });
      }
      async function i(e) {
        return (
          await o.Z.post({
            url: l.ANM.USER_EMAIL_VERIFY_CODE,
            body: { code: e },
            trackedActionData: {
              event: s.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
            },
            rejectWithError: !1,
          })
        ).body;
      }
    },
    488889: function (e, t, n) {
      n.d(t, {
        S: function () {
          return a;
        },
      });
      var s = n(308569),
        o = n(388032);
      let l = {
        [s.pw.DISCORD_EMPLOYEE_ASKED_ME_TO]: () => o.intl.string(o.t.naBTFB),
        [s.pw.SOMEONE_ASKED_ME_TO]: () => o.intl.string(o.t.LQ0RUF),
        [s.pw.NEW_EMAIL]: () => o.intl.string(o.t.oOqQj4),
        [s.pw.SOMETHING_ELSE]: () => o.intl.string(o.t.p38n1d),
      };
      function a(e) {
        return l[e]();
      }
    },
    226186: function (e, t, n) {
      n.d(t, {
        u: function () {
          return o;
        },
      });
      let s = (0, n(818083).B)({
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
        return !!s.useExperiment({ location: e }, { autoTrackExposure: !1 })
          .enabled;
      }
      t.Z = s;
    },
  },
]);
//# sourceMappingURL=f977f610d9b6fc488190.js.map
