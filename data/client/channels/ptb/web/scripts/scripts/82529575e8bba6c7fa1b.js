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
      var o = n(200651);
      n(192379);
      var s = n(481060),
        l = n(488889),
        r = n(18982),
        i = n(626135),
        a = n(981631),
        c = n(259076),
        d = n(388032),
        u = n(195358),
        E = n(374808);
      function _(e) {
        let {
            onNext: t,
            onClose: n,
            reason: _,
            onReasonChange: m,
            freeTextResponse: N,
            setFreeTextResponse: x,
          } = e,
          A = c.zf.map((e) => ({ value: e, name: (0, l.S)(e) })),
          C = (0, r.u)("change_email_collect_reasons_slide");
        return (0, o.jsxs)("form", {
          onSubmit: t,
          children: [
            (0, o.jsxs)(s.ModalHeader, {
              separator: !1,
              className: E.header,
              children: [
                (0, o.jsx)(s.Heading, {
                  variant: "heading-xl/extrabold",
                  children: d.intl.string(d.t["41NIIi"]),
                }),
                (0, o.jsx)(s.ModalCloseButton, {
                  onClick: n,
                  className: E.modalCloseButton,
                }),
              ],
            }),
            (0, o.jsxs)(s.ModalContent, {
              className: u.content,
              children: [
                (0, o.jsx)(s.RadioGroup, {
                  radioPosition: "right",
                  radioItemClassName: u.radioItem,
                  size: s.RadioGroup.Sizes.NOT_SET,
                  value: _,
                  options: A,
                  onChange: (e) => {
                    let { value: t } = e;
                    i.default.track(
                      a.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED,
                      { change_email_reason_enum: t },
                    ),
                      m(t),
                      x(""),
                      t === c.pw.SOMETHING_ELSE &&
                        r.Z.trackExposure({
                          location: "change_email_collect_reasons_slide",
                        });
                  },
                }),
                C &&
                  _ === c.pw.SOMETHING_ELSE &&
                  (0, o.jsx)(s.FormItem, {
                    children: (0, o.jsx)(s.TextArea, {
                      value: N,
                      maxLength: c.mF,
                      onChange: x,
                      className: u.textArea,
                      placeholder: d.intl.string(d.t.Q8Rk7O),
                    }),
                  }),
              ],
            }),
            (0, o.jsxs)(s.ModalFooter, {
              className: E.modalFooter,
              children: [
                (0, o.jsx)(s.Button, {
                  color: s.Button.Colors.BRAND,
                  disabled: null == _,
                  size: s.Button.Sizes.MEDIUM,
                  onClick: t,
                  children: d.intl.string(d.t["3PatS0"]),
                }),
                (0, o.jsx)(s.Button, {
                  look: s.Button.Looks.LINK,
                  color: s.Button.Colors.PRIMARY,
                  onClick: n,
                  children: d.intl.string(d.t["ETE/oK"]),
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
      var o = n(200651);
      n(192379);
      var s = n(481060),
        l = n(388032),
        r = n(374808);
      function i(e) {
        let { email: t, onClose: n } = e;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)(s.ModalHeader, {
              separator: !1,
              className: r.header,
              children: [
                (0, o.jsx)(s.Heading, {
                  className: r.title,
                  variant: "heading-xl/semibold",
                  children: l.intl.string(l.t["8O+nFx"]),
                }),
                (0, o.jsx)(s.ModalCloseButton, {
                  onClick: n,
                  className: r.modalCloseButton,
                }),
              ],
            }),
            (0, o.jsx)(s.ModalContent, {
              className: r.content,
              children: (0, o.jsx)(s.Text, {
                className: r.description,
                variant: "text-md/normal",
                children: l.intl.format(l.t.Zvx0Oz, { email: t }),
              }),
            }),
            (0, o.jsx)(s.ModalContent, {
              className: r.content,
              children: (0, o.jsx)(s.Text, {
                className: r.tooltip,
                variant: "text-sm/normal",
                children: l.intl.string(l.t.yb7itb),
              }),
            }),
            (0, o.jsx)(s.ModalFooter, {
              className: r.modalFooter,
              children: (0, o.jsx)(s.Button, {
                className: r.__invalid_submit,
                color: s.Button.Colors.BRAND,
                size: s.Button.Sizes.MEDIUM,
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
          return E;
        },
      }),
        n(47120);
      var o = n(200651),
        s = n(192379),
        l = n(442837),
        r = n(481060),
        i = n(479531),
        a = n(393869),
        c = n(25990),
        d = n(388032),
        u = n(374808);
      function E(e) {
        var t;
        let {
            isSlideReady: n,
            error: E,
            setEmailToken: _,
            setError: m,
            onNext: N,
            onClose: x,
          } = e,
          [A, C] = s.useState(!1),
          [h, M] = s.useState(""),
          [S, p] = s.useState(!1),
          f = (0, l.e7)([c.Z], () => c.Z.getErrors()),
          I = s.useRef(null);
        s.useEffect(() => {
          if (n) {
            var e;
            null === (e = I.current) || void 0 === e || e.focus();
          }
        }, [n]);
        let j = async (e) => {
            e.preventDefault(), m(null), C(!0);
            try {
              let { token: e } = await (0, a.w)(h);
              _(e), N();
            } catch (e) {
              m(new i.Z(e).getAnyErrorMessage());
            } finally {
              C(!1);
            }
          },
          g = async () => {
            if (!S) {
              p(!0);
              try {
                await (0, a.i)(!0),
                  (0, r.showToast)(
                    (0, r.createToast)(
                      d.intl.string(d.t["84yeo6"]),
                      r.ToastType.SUCCESS,
                    ),
                  );
              } catch (t) {
                let e = new i.Z(t).getAnyErrorMessage();
                null != e &&
                  (0, r.showToast)((0, r.createToast)(e, r.ToastType.FAILURE));
              } finally {
                p(!1);
              }
            }
          };
        return (0, o.jsxs)("form", {
          onSubmit: j,
          children: [
            (0, o.jsxs)(r.ModalHeader, {
              separator: !1,
              className: u.header,
              children: [
                (0, o.jsx)(r.Heading, {
                  className: u.title,
                  variant: "heading-xl/extrabold",
                  children: d.intl.string(d.t.jMGc4O),
                }),
                (0, o.jsx)(r.Text, {
                  color: "header-secondary",
                  variant: "text-md/normal",
                  className: u.subtitle,
                  children: d.intl.string(d.t.SZJow8),
                }),
                (0, o.jsx)(r.ModalCloseButton, {
                  onClick: x,
                  className: u.modalCloseButton,
                }),
              ],
            }),
            (0, o.jsxs)(r.ModalContent, {
              className: u.content,
              children: [
                (0, o.jsx)(r.FormItem, {
                  title: d.intl.string(d.t["8mZX6O"]),
                  error:
                    null != E
                      ? E
                      : null == f
                        ? void 0
                        : null === (t = f.email_token) || void 0 === t
                          ? void 0
                          : t[0],
                  children: (0, o.jsx)(r.TextInput, {
                    value: h,
                    onChange: M,
                    inputRef: I,
                  }),
                }),
                (0, o.jsx)(r.Text, {
                  className: u.help,
                  variant: "text-sm/normal",
                  children: d.intl.format(d.t.P0sak5, { onResend: g }),
                }),
              ],
            }),
            (0, o.jsx)(r.ModalFooter, {
              children: (0, o.jsx)(r.Button, {
                type: "submit",
                color: r.Button.Colors.BRAND,
                size: r.Button.Sizes.MEDIUM,
                submitting: A,
                children: d.intl.string(d.t.PDTjLC),
              }),
            }),
          ],
        });
      }
    },
    22150: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return E;
        },
      }),
        n(47120);
      var o = n(200651),
        s = n(192379),
        l = n(442837),
        r = n(481060),
        i = n(479531),
        a = n(393869),
        c = n(594174),
        d = n(388032),
        u = n(374808);
      function E(e) {
        let { onNext: t, onClose: n } = e,
          [E, _] = s.useState(!1),
          m = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
          N = async (e) => {
            e.preventDefault(), _(!0);
            try {
              await (0, a.i)(), t();
            } catch (t) {
              let e = new i.Z(t).getAnyErrorMessage();
              null != e &&
                (0, r.showToast)((0, r.createToast)(e, r.ToastType.FAILURE));
            } finally {
              _(!1);
            }
          };
        return (0, o.jsxs)("form", {
          onSubmit: N,
          children: [
            (0, o.jsxs)(r.ModalHeader, {
              separator: !1,
              className: u.header,
              children: [
                (0, o.jsx)(r.Heading, {
                  className: u.title,
                  variant: "heading-xl/extrabold",
                  children: d.intl.string(d.t.uFxYq6),
                }),
                (0, o.jsx)(r.ModalCloseButton, {
                  onClick: n,
                  className: u.modalCloseButton,
                }),
              ],
            }),
            (0, o.jsx)(r.ModalContent, {
              className: u.content,
              children: (0, o.jsx)(r.Text, {
                className: u.description,
                variant: "text-md/normal",
                children: d.intl.format(d.t.oMFSgo, {
                  oldEmail: null == m ? void 0 : m.email,
                }),
              }),
            }),
            (0, o.jsxs)(r.ModalFooter, {
              className: u.modalFooter,
              children: [
                (0, o.jsx)(r.Button, {
                  type: "submit",
                  color: r.Button.Colors.BRAND,
                  size: r.Button.Sizes.MEDIUM,
                  submitting: E,
                  className: u.__invalid_submit,
                  children: d.intl.string(d.t.rXV81N),
                }),
                (0, o.jsx)(r.Button, {
                  className: u.__invalid_cancel,
                  look: r.Button.Looks.LINK,
                  color: r.Button.Colors.PRIMARY,
                  onClick: n,
                  children: d.intl.string(d.t["ETE/oK"]),
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
            return f;
          },
        }),
        n(47120);
      var o = n(200651),
        s = n(192379),
        l = n(990547),
        r = n(442837),
        i = n(481060),
        a = n(809206),
        c = n(594174),
        d = n(626135),
        u = n(706734),
        E = n(264119),
        _ = n(75788),
        m = n(22150),
        N = n(361833),
        x = n(134562),
        A = n(526761),
        C = n(981631),
        h = n(259076),
        M = n(374808),
        S = n(800010),
        p = n(75277);
      function f(e) {
        var t;
        let { transitionState: n, onClose: f } = e,
          I = (0, r.e7)([c.default], () => c.default.getCurrentUser()),
          j = s.useRef(
            null !== (t = null == I ? void 0 : I.verified) && void 0 !== t && t,
          );
        s.useEffect(
          () => (
            d.default.track(C.rMx.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED),
            () => (0, a.Zy)()
          ),
          [],
        );
        let g = null == I ? void 0 : I.verified,
          R = g ? A.Ax.CONFIRM_START : A.Ax.EMAIL_AND_PASSWORD,
          [T, v] = s.useState(R),
          [O, L] = s.useState(null),
          [B, k] = s.useState(null),
          [D, U] = s.useState(null),
          [H, b] = s.useState(""),
          [G, y] = s.useState(),
          [F, w] = s.useState(""),
          P =
            T === A.Ax.CHANGE_EMAIL_WARNING
              ? M.wumpusExclamationImg
              : M.emailHeaderImg,
          Z = T === A.Ax.CHANGE_EMAIL_WARNING ? p : S,
          W = {
            impression_group: l.ImpressionGroups.USER_ACCOUNT_EMAIL_CHANGE_FLOW,
          };
        return (0, o.jsxs)(i.ModalRoot, {
          transitionState: n,
          disableTrack: !0,
          children: [
            (0, o.jsx)("img", { alt: "", className: P, src: Z }),
            (0, o.jsxs)(i.Slides, {
              activeSlide: T,
              width: 440,
              onSlideReady: (e) => L(e),
              children: [
                (0, o.jsx)(i.Slide, {
                  id: A.Ax.CONFIRM_START,
                  impressionName:
                    l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
                  impressionProperties: W,
                  children: (0, o.jsx)(m.Z, {
                    onNext: () => v(A.Ax.CONFIRM_CODE),
                    onClose: f,
                  }),
                }),
                (0, o.jsx)(i.Slide, {
                  id: A.Ax.CONFIRM_CODE,
                  impressionName:
                    l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
                  impressionProperties: W,
                  children: (0, o.jsx)(_.Z, {
                    error: D,
                    setError: U,
                    setEmailToken: k,
                    isSlideReady: O === A.Ax.CONFIRM_CODE,
                    onNext: () => v(A.Ax.CHANGE_EMAIL_REASONS),
                    onClose: f,
                  }),
                }),
                (0, o.jsx)(i.Slide, {
                  id: A.Ax.CHANGE_EMAIL_REASONS,
                  impressionName:
                    l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COLLECT_REASONS,
                  impressionProperties: W,
                  children: (0, o.jsx)(u.Z, {
                    onNext: () => (
                      d.default.track(
                        C.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE,
                        { change_email_reason_enum: G },
                      ),
                      null != G && h.Mr.has(G)
                        ? v(A.Ax.CHANGE_EMAIL_WARNING)
                        : v(A.Ax.EMAIL_AND_PASSWORD)
                    ),
                    onClose: f,
                    reason: G,
                    onReasonChange: y,
                    freeTextResponse: F,
                    setFreeTextResponse: w,
                  }),
                }),
                (0, o.jsx)(i.Slide, {
                  id: A.Ax.CHANGE_EMAIL_WARNING,
                  impressionName:
                    l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_WARNING,
                  impressionProperties: W,
                  children: (0, o.jsx)(x.Z, {
                    onNext: () => {
                      d.default.track(
                        C.rMx.USER_ACCOUNT_EMAIL_CHANGE_WARNING_CONTINUE,
                        { change_email_reason_enum: G },
                      ),
                        v(A.Ax.EMAIL_AND_PASSWORD);
                    },
                    onClose: f,
                  }),
                }),
                (0, o.jsx)(i.Slide, {
                  id: A.Ax.EMAIL_AND_PASSWORD,
                  impressionName:
                    l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL,
                  impressionProperties: { ...W, email_verified: j.current },
                  children: (0, o.jsx)(N.Z, {
                    emailToken: B,
                    isSlideReady: O === A.Ax.EMAIL_AND_PASSWORD,
                    onBack: g
                      ? () =>
                          v(
                            null != G && h.Mr.has(G)
                              ? A.Ax.CHANGE_EMAIL_WARNING
                              : A.Ax.CHANGE_EMAIL_REASONS,
                          )
                      : null,
                    onNext: (e) => {
                      d.default.track(
                        C.rMx.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL,
                        { change_email_reason_enum: G, free_text_response: F },
                      ),
                        b(e),
                        v(A.Ax.COMPLETE);
                    },
                    onClose: f,
                  }),
                }),
                (0, o.jsx)(i.Slide, {
                  id: A.Ax.COMPLETE,
                  impressionName:
                    l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COMPLETE,
                  impressionProperties: W,
                  children: (0, o.jsx)(E.Z, { email: H, onClose: f }),
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
          return E;
        },
      }),
        n(47120);
      var o = n(200651),
        s = n(192379),
        l = n(442837),
        r = n(481060),
        i = n(809206),
        a = n(25990),
        c = n(155433),
        d = n(388032),
        u = n(374808);
      function E(e) {
        var t, n;
        let {
            emailToken: E,
            isSlideReady: _,
            onClose: m,
            onBack: N,
            onNext: x,
          } = e,
          [A, C] = s.useState(""),
          [h, M] = s.useState(""),
          [S, p] = s.useState(!1),
          f = (0, l.e7)([a.Z], () => a.Z.getErrors()),
          I = s.useRef(null);
        async function j(e) {
          e.preventDefault(), p(!0);
          let t = await (0, i.Mn)({ email: A, emailToken: E, password: h });
          if ((p(!1), null == t ? void 0 : t.ok)) x(A);
          else {
            var n, o;
            (null == t
              ? void 0
              : null === (n = t.body) || void 0 === n
                ? void 0
                : n.username) != null
              ? (0, c.P)()
              : (null == t
                  ? void 0
                  : null === (o = t.body) || void 0 === o
                    ? void 0
                    : o.email_token) != null &&
                (null == N || N());
          }
        }
        return (
          s.useEffect(() => {
            if (_) {
              var e;
              null === (e = I.current) || void 0 === e || e.focus();
            }
          }, [_]),
          (0, o.jsxs)("form", {
            onSubmit: j,
            children: [
              (0, o.jsxs)(r.ModalHeader, {
                separator: !1,
                className: u.header,
                children: [
                  (0, o.jsx)(r.Heading, {
                    className: u.title,
                    variant: "heading-xl/extrabold",
                    children: d.intl.string(d.t.p3280t),
                  }),
                  (0, o.jsx)(r.Text, {
                    color: "header-secondary",
                    variant: "text-md/normal",
                    className: u.subtitle,
                    children: d.intl.string(d.t["1k44EB"]),
                  }),
                  (0, o.jsx)(r.ModalCloseButton, {
                    onClick: m,
                    className: u.modalCloseButton,
                  }),
                ],
              }),
              (0, o.jsxs)(r.ModalContent, {
                className: u.content,
                children: [
                  (0, o.jsx)(r.FormItem, {
                    title: d.intl.string(d.t["w/qqKC"]),
                    error:
                      null == f
                        ? void 0
                        : null === (t = f.email) || void 0 === t
                          ? void 0
                          : t[0],
                    children: (0, o.jsx)(r.TextInput, {
                      type: "email",
                      value: A,
                      onChange: C,
                      inputRef: I,
                    }),
                  }),
                  (0, o.jsx)(r.FormItem, {
                    className: u.password,
                    title: d.intl.string(d.t.TmdnJy),
                    error:
                      null == f
                        ? void 0
                        : null === (n = f.password) || void 0 === n
                          ? void 0
                          : n[0],
                    children: (0, o.jsx)(r.TextInput, {
                      type: "password",
                      value: h,
                      onChange: M,
                    }),
                  }),
                ],
              }),
              (0, o.jsxs)(r.ModalFooter, {
                children: [
                  (0, o.jsx)(r.Button, {
                    type: "submit",
                    color: r.Button.Colors.BRAND,
                    size: r.Button.Sizes.MEDIUM,
                    submitting: S,
                    children: d.intl.string(d.t.i4jeWV),
                  }),
                  null != N
                    ? (0, o.jsx)(r.Button, {
                        className: u.__invalid_cancel,
                        look: r.Button.Looks.LINK,
                        color: r.Button.Colors.PRIMARY,
                        onClick: N,
                        children: d.intl.string(d.t["13/7kZ"]),
                      })
                    : (0, o.jsx)(r.Button, {
                        className: u.__invalid_cancel,
                        look: r.Button.Looks.LINK,
                        color: r.Button.Colors.PRIMARY,
                        onClick: m,
                        children: d.intl.string(d.t["ETE/oK"]),
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
          return a;
        },
      });
      var o = n(200651);
      n(192379);
      var s = n(481060),
        l = n(259076),
        r = n(388032),
        i = n(374808);
      function a(e) {
        let { onNext: t, onClose: n } = e;
        return (0, o.jsxs)("form", {
          onSubmit: t,
          children: [
            (0, o.jsxs)(s.ModalHeader, {
              separator: !1,
              className: i.header,
              children: [
                (0, o.jsx)(s.Heading, {
                  variant: "heading-xl/extrabold",
                  children: r.intl.string(r.t.hhR7gY),
                }),
                (0, o.jsx)(s.ModalCloseButton, {
                  onClick: n,
                  className: i.modalCloseButton,
                }),
              ],
            }),
            (0, o.jsxs)(s.ModalContent, {
              className: i.content,
              children: [
                (0, o.jsx)(s.Text, {
                  className: i.description,
                  variant: "text-md/normal",
                  children: r.intl.format(r.t.rqWXUV, { hcArticle: l.j1 }),
                }),
                (0, o.jsx)(s.Text, {
                  className: i.description,
                  variant: "text-md/normal",
                  children: r.intl.string(r.t["3LW10N"]),
                }),
              ],
            }),
            (0, o.jsxs)(s.ModalFooter, {
              className: i.modalFooter,
              children: [
                (0, o.jsx)(s.Button, {
                  color: s.Button.Colors.BRAND,
                  onClick: n,
                  children: r.intl.string(r.t["ETE/oK"]),
                }),
                (0, o.jsx)(s.Button, {
                  color: s.Button.Colors.PRIMARY,
                  look: s.Button.Looks.LINK,
                  onClick: t,
                  children: r.intl.string(r.t.rwTBFh),
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
          return r;
        },
        w: function () {
          return i;
        },
      });
      var o = n(990547),
        s = n(573261),
        l = n(981631);
      function r() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return s.Z.put({
          url: l.ANM.USER_EMAIL,
          trackedActionData: {
            event: o.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
            properties: { is_resend: e },
          },
          rejectWithError: !1,
        });
      }
      async function i(e) {
        return (
          await s.Z.post({
            url: l.ANM.USER_EMAIL_VERIFY_CODE,
            body: { code: e },
            trackedActionData: {
              event: o.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
            },
            rejectWithError: !1,
          })
        ).body;
      }
    },
    259076: function (e, t, n) {
      var o, s;
      n.d(t, {
        Mr: function () {
          return r;
        },
        j1: function () {
          return i;
        },
        mF: function () {
          return a;
        },
        pw: function () {
          return o;
        },
        zf: function () {
          return l;
        },
      }),
        n(47120),
        ((s = o || (o = {}))[(s.DISCORD_EMPLOYEE_ASKED_ME_TO = 0)] =
          "DISCORD_EMPLOYEE_ASKED_ME_TO"),
        (s[(s.SOMEONE_ASKED_ME_TO = 1)] = "SOMEONE_ASKED_ME_TO"),
        (s[(s.NEW_EMAIL = 2)] = "NEW_EMAIL"),
        (s[(s.SOMETHING_ELSE = 3)] = "SOMETHING_ELSE");
      let l = [0, 1, 2, 3],
        r = new Set([0, 1]),
        i =
          "https://discord.com/safety/understanding-and-avoiding-common-scams",
        a = 1024;
    },
    488889: function (e, t, n) {
      n.d(t, {
        S: function () {
          return r;
        },
      });
      var o = n(259076),
        s = n(388032);
      let l = {
        [o.pw.DISCORD_EMPLOYEE_ASKED_ME_TO]: () => s.intl.string(s.t.naBTFB),
        [o.pw.SOMEONE_ASKED_ME_TO]: () => s.intl.string(s.t.LQ0RUF),
        [o.pw.NEW_EMAIL]: () => s.intl.string(s.t.oOqQj4),
        [o.pw.SOMETHING_ELSE]: () => s.intl.string(s.t.p38n1d),
      };
      function r(e) {
        return l[e]();
      }
    },
    18982: function (e, t, n) {
      n.d(t, {
        u: function () {
          return s;
        },
      });
      let o = (0, n(818083).B)({
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
      function s(e) {
        return !!o.useExperiment({ location: e }, { autoTrackExposure: !1 })
          .enabled;
      }
      t.Z = o;
    },
  },
]);
//# sourceMappingURL=82529575e8bba6c7fa1b.js.map
