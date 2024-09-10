"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["52030"],
  {
    48550: function (e, t, s) {
      s.d(t, {
        P: function () {
          return l;
        },
      });
      var n = s(689938);
      let l = {
        get webauthn() {
          return n.Z.Messages.MFA_V2_WEBAUTHN_NAME;
        },
        get totp() {
          return n.Z.Messages.MFA_V2_TOTP_NAME;
        },
        get sms() {
          return n.Z.Messages.MFA_V2_SMS_NAME;
        },
        get password() {
          return n.Z.Messages.MFA_V2_PASSWORD_NAME;
        },
        get backup() {
          return n.Z.Messages.MFA_V2_BACKUP_NAME;
        },
      };
    },
    124860: function (e, t, s) {
      s.d(t, {
        Cd: function () {
          return f;
        },
        YR: function () {
          return S;
        },
      }),
        s(47120),
        s(411104);
      var n = s(735250),
        l = s(470079),
        i = s(481060),
        r = s(447097),
        o = s(873124),
        a = s(248902),
        d = s(160511),
        u = s(51693),
        c = s(973810),
        h = s(689938);
      function f(e) {
        var t, s;
        let {
            mfaChallenge: h,
            mfaFinish: f,
            onEarlyClose: m,
            onClose: S,
            width: _ = 440,
          } = e,
          [g, x] = l.useState(
            null !==
              (s =
                null === (t = h.methods[0]) || void 0 === t
                  ? void 0
                  : t.type) && void 0 !== s
              ? s
              : "select",
          ),
          [E, C] = l.useState(g),
          p = async (e) => {
            let { mfaType: t, data: s } = e;
            await f({ mfaType: t, data: s, ticket: h.ticket }),
              null != S && S();
          },
          v = { mfaChallenge: h, finish: p, setSlide: x, onClose: m };
        return (0, n.jsxs)(i.Slides, {
          activeSlide: g,
          width: _,
          onSlideReady: C,
          children: [
            (0, n.jsx)(i.Slide, {
              id: "select",
              children: (0, n.jsx)(a.Z, { ...v }),
            }),
            (0, n.jsx)(i.Slide, {
              id: "webauthn",
              children: (0, n.jsx)(c.Z, { ...v }),
            }),
            (0, n.jsx)(i.Slide, {
              id: "totp",
              children: (0, n.jsx)(u.Z, { ...v, isSlideReady: "totp" === E }),
            }),
            (0, n.jsx)(i.Slide, {
              id: "sms",
              children: (0, n.jsx)(d.Z, { ...v, isSlideReady: "sms" === E }),
            }),
            (0, n.jsx)(i.Slide, {
              id: "backup",
              children: (0, n.jsx)(r.Z, { ...v, isSlideReady: "backup" === E }),
            }),
            (0, n.jsx)(i.Slide, {
              id: "password",
              children: (0, n.jsx)(o.Z, {
                ...v,
                isSlideReady: "password" === E,
              }),
            }),
          ],
        });
      }
      function m(e) {
        let { mfaChallenge: t, finish: s, transitionState: l, onClose: r } = e;
        return (0, n.jsx)(i.ModalRoot, {
          transitionState: l,
          size: i.ModalSize.SMALL,
          "aria-label": h.Z.Messages.MFA_V2_HEADER,
          children: (0, n.jsx)(f, {
            mfaChallenge: t,
            mfaFinish: s,
            onClose: r,
            onEarlyClose: r,
          }),
        });
      }
      function S(e, t, s) {
        (0, i.openModal)(
          (s) => (0, n.jsx)(m, { finish: t, mfaChallenge: e, ...s }),
          {
            onCloseCallback: () => {
              s(Error(h.Z.Messages.MFA_V2_CANCELED));
            },
          },
        );
      }
    },
    507453: function (e, t, s) {
      var n = s(735250);
      s(470079);
      var l = s(481060),
        i = s(600164),
        r = s(689938),
        o = s(58259);
      t.Z = {
        SlideContent: function (e) {
          let { children: t } = e;
          return (0, n.jsx)(l.ModalContent, {
            className: o.content,
            children: t,
          });
        },
        SlideError: function (e) {
          let { error: t } = e;
          return null == t
            ? null
            : (0, n.jsx)(l.Text, {
                className: o.error,
                variant: "text-sm/normal",
                color: "text-danger",
                children: t,
              });
        },
        SlideFooter: function (e) {
          let { mfaChallenge: t, setSlide: s, showConfirm: a = !1, ...d } = e,
            u = t.methods.length > 1;
          return u || a
            ? (0, n.jsxs)(l.ModalFooter, {
                className: o.footer,
                direction:
                  a && !u
                    ? i.Z.Direction.HORIZONTAL_REVERSE
                    : i.Z.Direction.HORIZONTAL,
                children: [
                  u &&
                    (0, n.jsx)(l.Button, {
                      look: l.Button.Looks.LINK,
                      onClick: () => s("select"),
                      color: l.Button.Colors.PRIMARY,
                      children: r.Z.Messages.MFA_V2_GO_TO_SELECT,
                    }),
                  a &&
                    (0, n.jsx)(l.Button, {
                      type: "submit",
                      ...d,
                      children: r.Z.Messages.CONFIRM,
                    }),
                ],
              })
            : null;
        },
        SlideHeader: function (e) {
          let { subtitle: t, onClose: s } = e;
          return (0, n.jsxs)(l.ModalHeader, {
            direction: i.Z.Direction.VERTICAL,
            className: o.header,
            separator: !1,
            children: [
              (0, n.jsx)(l.Heading, {
                variant: "heading-xl/semibold",
                children: r.Z.Messages.MFA_V2_HEADER,
              }),
              null != t &&
                (0, n.jsx)(l.Text, {
                  color: "header-secondary",
                  variant: "text-md/normal",
                  className: o.subtitle,
                  children: t,
                }),
              (0, n.jsx)(l.ModalCloseButton, {
                className: o.closeButton,
                onClick: s,
              }),
            ],
          });
        },
      };
    },
    447097: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return d;
        },
      }),
        s(757143),
        s(47120),
        s(773603);
      var n = s(735250),
        l = s(470079),
        i = s(658550),
        r = s(481060),
        o = s(507453),
        a = s(689938);
      function d(e) {
        let {
            mfaChallenge: t,
            finish: s,
            setSlide: d,
            onClose: u,
            isSlideReady: c,
          } = e,
          [h, f] = l.useState(!1),
          [m, S] = l.useState(null),
          [_, g] = l.useState(""),
          x = l.useRef(null),
          E = a.Z.Messages.TWO_FA_ENTER_BACKUP_LABEL,
          C = a.Z.Messages.TWO_FA_BACKUP_CODE,
          p = l.useCallback(
            (e) => {
              g(e), S(null);
            },
            [g, S],
          );
        return (
          l.useEffect(() => {
            if (c) {
              var e;
              null === (e = x.current) || void 0 === e || e.focus();
            }
          }, [c]),
          (0, n.jsxs)("form", {
            onSubmit: (e) => {
              e.preventDefault(),
                f(!0),
                s({ mfaType: "backup", data: _.replace(/-/g, "") })
                  .catch((e) => {
                    var t, s;
                    S(
                      null !== (s = e.message) && void 0 !== s
                        ? s
                        : null === (t = e.body) || void 0 === t
                          ? void 0
                          : t.message,
                    );
                  })
                  .finally(() => {
                    f(!1);
                  });
            },
            children: [
              (0, n.jsx)(o.Z.SlideHeader, { onClose: u }),
              (0, n.jsx)(o.Z.SlideContent, {
                children: (0, n.jsxs)(r.FormItem, {
                  title: E,
                  children: [
                    (0, n.jsx)(r.TextInput, {
                      inputRef: x,
                      onChange: p,
                      placeholder: C,
                      maxLength: i.tL,
                      minLength: i.th,
                      value: _,
                      spellCheck: "false",
                      disabled: h,
                    }),
                    (0, n.jsx)(o.Z.SlideError, { error: m }),
                  ],
                }),
              }),
              (0, n.jsx)(o.Z.SlideFooter, {
                mfaChallenge: t,
                setSlide: d,
                showConfirm: !0,
                disabled: _.length < 8,
                submitting: h,
              }),
            ],
          })
        );
      }
    },
    873124: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return a;
        },
      }),
        s(47120),
        s(773603);
      var n = s(735250),
        l = s(470079),
        i = s(481060),
        r = s(507453),
        o = s(689938);
      function a(e) {
        let {
            mfaChallenge: t,
            finish: s,
            setSlide: a,
            onClose: d,
            isSlideReady: u,
          } = e,
          [c, h] = l.useState(!1),
          [f, m] = l.useState(null),
          [S, _] = l.useState(""),
          g = l.useRef(null);
        return (
          l.useEffect(() => {
            if (u) {
              var e;
              null === (e = g.current) || void 0 === e || e.focus();
            }
          }, [u]),
          (0, n.jsxs)("form", {
            onSubmit: (e) => {
              e.preventDefault(),
                h(!0),
                s({ mfaType: "password", data: S })
                  .catch((e) => {
                    var t, s;
                    m(
                      null !== (s = e.message) && void 0 !== s
                        ? s
                        : null === (t = e.body) || void 0 === t
                          ? void 0
                          : t.message,
                    );
                  })
                  .finally(() => {
                    h(!1);
                  });
            },
            children: [
              (0, n.jsx)(r.Z.SlideHeader, { onClose: d }),
              (0, n.jsx)(r.Z.SlideContent, {
                children: (0, n.jsxs)(i.FormItem, {
                  title: o.Z.Messages.FORM_LABEL_PASSWORD,
                  children: [
                    (0, n.jsx)(i.TextInput, {
                      inputRef: g,
                      onChange: _,
                      value: S,
                      type: "password",
                      autoComplete: "password",
                      spellCheck: "false",
                      disabled: c,
                    }),
                    (0, n.jsx)(r.Z.SlideError, { error: f }),
                  ],
                }),
              }),
              (0, n.jsx)(r.Z.SlideFooter, {
                mfaChallenge: t,
                setSlide: a,
                showConfirm: !0,
                disabled: 0 === S.length,
                submitting: c,
              }),
            ],
          })
        );
      }
    },
    248902: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = s(735250);
      s(470079);
      var l = s(481060),
        i = s(507453),
        r = s(48550),
        o = s(689938),
        a = s(58259);
      function d(e) {
        let { mfaChallenge: t, setSlide: s, onClose: d } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(i.Z.SlideHeader, {
              subtitle: o.Z.Messages.MFA_V2_SELECT_HEADER,
              onClose: d,
            }),
            (0, n.jsx)(i.Z.SlideContent, {
              children: t.methods.map((e) =>
                (0, n.jsxs)(
                  l.Clickable,
                  {
                    className: a.listItemContainer,
                    onClick: () => {
                      s(e.type);
                    },
                    children: [
                      (0, n.jsx)(l.Text, {
                        className: a.listItemText,
                        variant: "text-md/semibold",
                        children: r.P[e.type],
                      }),
                      (0, n.jsx)(l.ChevronSmallRightIcon, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: a.listItemArrow,
                      }),
                    ],
                  },
                  e.type,
                ),
              ),
            }),
          ],
        });
      }
    },
    160511: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return h;
        },
      }),
        s(47120),
        s(773603);
      var n = s(735250),
        l = s(470079),
        i = s(658550),
        r = s(544891),
        o = s(481060),
        a = s(507453),
        d = s(981631),
        u = s(689938),
        c = s(58259);
      function h(e) {
        let {
            mfaChallenge: t,
            finish: s,
            setSlide: h,
            onClose: f,
            isSlideReady: m,
          } = e,
          [S, _] = l.useState(!1),
          [g, x] = l.useState(null),
          [E, C] = l.useState(!1),
          [p, v] = l.useState(null),
          [j, Z] = l.useState(""),
          M = l.useRef(null);
        l.useEffect(() => {
          _(!0),
            r.tn
              .post({
                url: d.ANM.LOGIN_SMS_SEND,
                body: { ticket: t.ticket },
                oldFormErrors: !0,
              })
              .then((e) => {
                x(e.body.phone);
              })
              .catch((e) => {
                var t;
                v(
                  e.message ||
                    (null === (t = e.body) || void 0 === t
                      ? void 0
                      : t.message),
                );
              })
              .finally(() => {
                _(!1);
              });
        }, [t.ticket]),
          l.useEffect(() => {
            if (m) {
              var e;
              null === (e = M.current) || void 0 === e || e.focus();
            }
          }, [m]);
        let A =
          null == g
            ? u.Z.Messages.TWO_FA_ENTER_SMS_TOKEN_SENDING
            : u.Z.Messages.TWO_FA_ENTER_SMS_TOKEN_SENT.format({
                phoneNumber: g,
              });
        return (0, n.jsxs)("form", {
          onSubmit: (e) => {
            e.preventDefault(),
              C(!0),
              s({ mfaType: "sms", data: j })
                .catch((e) => {
                  var t, s;
                  v(
                    null !== (s = e.message) && void 0 !== s
                      ? s
                      : null === (t = e.body) || void 0 === t
                        ? void 0
                        : t.message,
                  );
                })
                .finally(() => {
                  C(!1);
                });
          },
          children: [
            (0, n.jsx)(a.Z.SlideHeader, { subtitle: A, onClose: f }),
            (0, n.jsx)(a.Z.SlideContent, {
              children: (0, n.jsxs)(o.FormItem, {
                title: u.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL,
                children: [
                  (0, n.jsxs)("div", {
                    className: c.smsInputContainer,
                    children: [
                      (0, n.jsx)(o.TextInput, {
                        className: c.smsInput,
                        inputRef: M,
                        onChange: Z,
                        placeholder: u.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP,
                        maxLength: 10,
                        value: j,
                        autoComplete: "one-time-code",
                        spellCheck: "false",
                        disabled: E,
                      }),
                      (0, n.jsx)(o.Button, {
                        size: o.Button.Sizes.MEDIUM,
                        submitting: S,
                        onClick: () => {
                          r.tn
                            .post({
                              url: d.ANM.LOGIN_SMS_SEND,
                              body: { ticket: t.ticket },
                              oldFormErrors: !0,
                            })
                            .then((e) => {
                              x(e.body.phone);
                            })
                            .catch((e) => {
                              var t;
                              v(
                                e.message ||
                                  (null === (t = e.body) || void 0 === t
                                    ? void 0
                                    : t.message),
                              );
                            });
                        },
                        children: u.Z.Messages.MFA_SMS_RESEND,
                      }),
                    ],
                  }),
                  (0, n.jsx)(a.Z.SlideError, { error: p }),
                ],
              }),
            }),
            (0, n.jsx)(a.Z.SlideFooter, {
              mfaChallenge: t,
              setSlide: h,
              showConfirm: !0,
              disabled: j.length !== i.Gz,
              submitting: E,
            }),
          ],
        });
      }
    },
    51693: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return d;
        },
      }),
        s(47120),
        s(773603);
      var n = s(735250),
        l = s(470079),
        i = s(658550),
        r = s(481060),
        o = s(507453),
        a = s(689938);
      function d(e) {
        let {
            mfaChallenge: t,
            finish: s,
            setSlide: d,
            onClose: u,
            isSlideReady: c,
          } = e,
          [h, f] = l.useState(!1),
          [m, S] = l.useState(null),
          [_, g] = l.useState(""),
          x = l.useRef(null);
        return (
          l.useEffect(() => {
            if (c) {
              var e;
              null === (e = x.current) || void 0 === e || e.focus();
            }
          }, [c]),
          (0, n.jsxs)("form", {
            onSubmit: (e) => {
              e.preventDefault(),
                f(!0),
                s({ mfaType: "totp", data: _ })
                  .catch((e) => {
                    var t, s;
                    S(
                      null !== (s = e.message) && void 0 !== s
                        ? s
                        : null === (t = e.body) || void 0 === t
                          ? void 0
                          : t.message,
                    );
                  })
                  .finally(() => {
                    f(!1);
                  });
            },
            children: [
              (0, n.jsx)(o.Z.SlideHeader, { onClose: u }),
              (0, n.jsx)(o.Z.SlideContent, {
                children: (0, n.jsxs)(r.FormItem, {
                  title: a.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL,
                  children: [
                    (0, n.jsx)(r.TextInput, {
                      inputRef: x,
                      onChange: g,
                      placeholder: a.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP,
                      maxLength: i.gH,
                      minLength: i.gH,
                      value: _,
                      autoComplete: "one-time-code",
                      spellCheck: "false",
                      disabled: h,
                    }),
                    (0, n.jsx)(o.Z.SlideError, { error: m }),
                  ],
                }),
              }),
              (0, n.jsx)(o.Z.SlideFooter, {
                mfaChallenge: t,
                setSlide: d,
                showConfirm: !0,
                disabled: _.length !== i.gH,
                submitting: h,
              }),
            ],
          })
        );
      }
    },
    973810: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return f;
        },
      }),
        s(47120);
      var n = s(735250),
        l = s(470079),
        i = s(849055),
        r = s(481060),
        o = s(358085),
        a = s(960048),
        d = s(998502),
        u = s(507453),
        c = s(981631),
        h = s(689938);
      function f(e) {
        let { mfaChallenge: t, finish: s, setSlide: f, onClose: m } = e,
          [S, _] = l.useState(!1),
          [g, x] = l.useState(null),
          { challenge: E } = t.methods.find((e) => "webauthn" === e.type),
          C = async () => {
            _(!0), x(null);
            let e =
                o.isPlatformEmbedded && d.ZP.supportsFeature(c.eRX.WEBAUTHN)
                  ? d.ZP.webAuthnAuthenticate(E)
                  : i.U2(JSON.parse(E)).then((e) => JSON.stringify(e)),
              t = async (e) => {
                try {
                  await s({ mfaType: "webauthn", data: e });
                } catch (e) {
                  var t;
                  x(
                    null !== (t = e.message) && void 0 !== t
                      ? t
                      : h.Z.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR,
                  );
                }
              };
            try {
              let s = await e;
              await t(s);
            } catch (e) {
              a.Z.captureException(e),
                x(h.Z.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR);
            } finally {
              _(!1);
            }
          };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(u.Z.SlideHeader, { onClose: m }),
            (0, n.jsxs)(u.Z.SlideContent, {
              children: [
                (0, n.jsx)(r.Button, {
                  submitting: S,
                  onClick: C,
                  children: h.Z.Messages.MFA_V2_WEBAUTHN_CTA,
                }),
                (0, n.jsx)(u.Z.SlideError, { error: g }),
              ],
            }),
            (0, n.jsx)(u.Z.SlideFooter, { mfaChallenge: t, setSlide: f }),
          ],
        });
      }
    },
    658550: function (e, t, s) {
      s.d(t, {
        Gz: function () {
          return o;
        },
        P0: function () {
          return d;
        },
        gH: function () {
          return r;
        },
        tL: function () {
          return i;
        },
        th: function () {
          return l;
        },
      }),
        s(411104);
      var n = s(544891);
      let l = 8,
        i = 11,
        r = 6,
        o = 6;
      async function a(e) {
        let { ticket: t, mfaType: s, data: l } = e,
          i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        try {
          return (
            await n.tn.post({
              url: "/mfa/finish",
              body: { ticket: t, mfa_type: s, data: l },
              retries: i,
            })
          ).body;
        } catch (e) {
          var r;
          if (null === (r = e.body) || void 0 === r ? void 0 : r.message)
            throw Error(e.body.message);
          throw e;
        }
      }
      async function d(e, t) {
        let { token: s } = await a(e);
        return new Promise((e, n) => {
          t({ "X-Discord-MFA-Authorization": s }, (t) => {
            var s, l;
            return (null === (s = t.body) || void 0 === s ? void 0 : s.code) ===
              60008 ||
              (null === (l = t.body) || void 0 === l ? void 0 : l.code) ===
                60003
              ? (n(Error(t.body.message)), !0)
              : (e(), !1);
          });
        });
      }
    },
  },
]);
//# sourceMappingURL=afd372d42c991d346d6b.js.map
