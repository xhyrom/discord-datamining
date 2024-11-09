"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["52030"],
  {
    48550: function (e, t, n) {
      n.d(t, {
        P: function () {
          return i;
        },
      });
      var l = n(388032);
      let i = {
        get webauthn() {
          return l.intl.string(l.t.gTH4Dg);
        },
        get totp() {
          return l.intl.string(l.t.nXKmyc);
        },
        get sms() {
          return l.intl.string(l.t.ZbVwZW);
        },
        get password() {
          return l.intl.string(l.t["8F6hKS"]);
        },
        get backup() {
          return l.intl.string(l.t.vhSRKS);
        },
      };
    },
    124860: function (e, t, n) {
      n.d(t, {
        Cd: function () {
          return f;
        },
        YR: function () {
          return g;
        },
      }),
        n(47120),
        n(411104);
      var l = n(200651),
        i = n(192379),
        s = n(481060),
        r = n(447097),
        o = n(873124),
        a = n(248902),
        d = n(160511),
        u = n(51693),
        c = n(973810),
        h = n(388032);
      function f(e) {
        var t, n;
        let {
            mfaChallenge: h,
            mfaFinish: f,
            onEarlyClose: m,
            onClose: g,
            width: S = 440,
          } = e,
          [x, v] = i.useState(
            null !==
              (n =
                null === (t = h.methods[0]) || void 0 === t
                  ? void 0
                  : t.type) && void 0 !== n
              ? n
              : "select",
          ),
          [p, j] = i.useState(x),
          C = async (e) => {
            let { mfaType: t, data: n } = e;
            await f({ mfaType: t, data: n, ticket: h.ticket }),
              null != g && g();
          },
          b = { mfaChallenge: h, finish: C, setSlide: v, onClose: m };
        return (0, l.jsxs)(s.Slides, {
          activeSlide: x,
          width: S,
          onSlideReady: j,
          children: [
            (0, l.jsx)(s.Slide, {
              id: "select",
              children: (0, l.jsx)(a.Z, { ...b }),
            }),
            (0, l.jsx)(s.Slide, {
              id: "webauthn",
              children: (0, l.jsx)(c.Z, { ...b }),
            }),
            (0, l.jsx)(s.Slide, {
              id: "totp",
              children: (0, l.jsx)(u.Z, { ...b, isSlideReady: "totp" === p }),
            }),
            (0, l.jsx)(s.Slide, {
              id: "sms",
              children: (0, l.jsx)(d.Z, { ...b, isSlideReady: "sms" === p }),
            }),
            (0, l.jsx)(s.Slide, {
              id: "backup",
              children: (0, l.jsx)(r.Z, { ...b, isSlideReady: "backup" === p }),
            }),
            (0, l.jsx)(s.Slide, {
              id: "password",
              children: (0, l.jsx)(o.Z, {
                ...b,
                isSlideReady: "password" === p,
              }),
            }),
          ],
        });
      }
      function m(e) {
        let { mfaChallenge: t, finish: n, transitionState: i, onClose: r } = e;
        return (0, l.jsx)(s.ModalRoot, {
          transitionState: i,
          size: s.ModalSize.SMALL,
          "aria-label": h.intl.string(h.t.saHocH),
          children: (0, l.jsx)(f, {
            mfaChallenge: t,
            mfaFinish: n,
            onClose: r,
            onEarlyClose: r,
          }),
        });
      }
      function g(e, t, n) {
        (0, s.openModal)(
          (n) => (0, l.jsx)(m, { finish: t, mfaChallenge: e, ...n }),
          {
            onCloseCallback: () => {
              n(Error(h.intl.string(h.t.N2yb9f)));
            },
          },
        );
      }
    },
    507453: function (e, t, n) {
      var l = n(200651);
      n(192379);
      var i = n(481060),
        s = n(600164),
        r = n(388032),
        o = n(58259);
      t.Z = {
        SlideContent: function (e) {
          let { children: t } = e;
          return (0, l.jsx)(i.ModalContent, {
            className: o.content,
            children: t,
          });
        },
        SlideError: function (e) {
          let { error: t } = e;
          return null == t
            ? null
            : (0, l.jsx)(i.Text, {
                className: o.error,
                variant: "text-sm/normal",
                color: "text-danger",
                children: t,
              });
        },
        SlideFooter: function (e) {
          let { mfaChallenge: t, setSlide: n, showConfirm: a = !1, ...d } = e,
            u = t.methods.length > 1;
          return u || a
            ? (0, l.jsxs)(i.ModalFooter, {
                className: o.footer,
                direction:
                  a && !u
                    ? s.Z.Direction.HORIZONTAL_REVERSE
                    : s.Z.Direction.HORIZONTAL,
                children: [
                  u &&
                    (0, l.jsx)(i.Button, {
                      look: i.Button.Looks.LINK,
                      onClick: () => n("select"),
                      color: i.Button.Colors.PRIMARY,
                      children: r.intl.string(r.t.Tot4EB),
                    }),
                  a &&
                    (0, l.jsx)(i.Button, {
                      type: "submit",
                      ...d,
                      children: r.intl.string(r.t["cY+Ooa"]),
                    }),
                ],
              })
            : null;
        },
        SlideHeader: function (e) {
          let { subtitle: t, onClose: n } = e;
          return (0, l.jsxs)(i.ModalHeader, {
            direction: s.Z.Direction.VERTICAL,
            className: o.header,
            separator: !1,
            children: [
              (0, l.jsx)(i.Heading, {
                variant: "heading-xl/semibold",
                children: r.intl.string(r.t.saHocH),
              }),
              null != t &&
                (0, l.jsx)(i.Text, {
                  color: "header-secondary",
                  variant: "text-md/normal",
                  className: o.subtitle,
                  children: t,
                }),
              (0, l.jsx)(i.ModalCloseButton, {
                className: o.closeButton,
                onClick: n,
              }),
            ],
          });
        },
      };
    },
    447097: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      }),
        n(757143),
        n(47120),
        n(773603);
      var l = n(200651),
        i = n(192379),
        s = n(658550),
        r = n(481060),
        o = n(507453),
        a = n(388032);
      function d(e) {
        let {
            mfaChallenge: t,
            finish: n,
            setSlide: d,
            onClose: u,
            isSlideReady: c,
          } = e,
          [h, f] = i.useState(!1),
          [m, g] = i.useState(null),
          [S, x] = i.useState(""),
          v = i.useRef(null),
          p = a.intl.string(a.t["C/ZAw8"]),
          j = a.intl.string(a.t.fZSi1N),
          C = i.useCallback(
            (e) => {
              x(e), g(null);
            },
            [x, g],
          );
        return (
          i.useEffect(() => {
            if (c) {
              var e;
              null === (e = v.current) || void 0 === e || e.focus();
            }
          }, [c]),
          (0, l.jsxs)("form", {
            onSubmit: (e) => {
              e.preventDefault(),
                f(!0),
                n({ mfaType: "backup", data: S.replace(/-/g, "") })
                  .catch((e) => {
                    var t, n;
                    g(
                      null !== (n = e.message) && void 0 !== n
                        ? n
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
              (0, l.jsx)(o.Z.SlideHeader, { onClose: u }),
              (0, l.jsx)(o.Z.SlideContent, {
                children: (0, l.jsxs)(r.FormItem, {
                  title: p,
                  children: [
                    (0, l.jsx)(r.TextInput, {
                      inputRef: v,
                      onChange: C,
                      placeholder: j,
                      maxLength: s.tL,
                      minLength: s.th,
                      value: S,
                      spellCheck: "false",
                      disabled: h,
                    }),
                    (0, l.jsx)(o.Z.SlideError, { error: m }),
                  ],
                }),
              }),
              (0, l.jsx)(o.Z.SlideFooter, {
                mfaChallenge: t,
                setSlide: d,
                showConfirm: !0,
                disabled: S.length < 8,
                submitting: h,
              }),
            ],
          })
        );
      }
    },
    873124: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      }),
        n(47120),
        n(773603);
      var l = n(200651),
        i = n(192379),
        s = n(481060),
        r = n(507453),
        o = n(388032);
      function a(e) {
        let {
            mfaChallenge: t,
            finish: n,
            setSlide: a,
            onClose: d,
            isSlideReady: u,
          } = e,
          [c, h] = i.useState(!1),
          [f, m] = i.useState(null),
          [g, S] = i.useState(""),
          x = i.useRef(null);
        return (
          i.useEffect(() => {
            if (u) {
              var e;
              null === (e = x.current) || void 0 === e || e.focus();
            }
          }, [u]),
          (0, l.jsxs)("form", {
            onSubmit: (e) => {
              e.preventDefault(),
                h(!0),
                n({ mfaType: "password", data: g })
                  .catch((e) => {
                    var t, n;
                    m(
                      null !== (n = e.message) && void 0 !== n
                        ? n
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
              (0, l.jsx)(r.Z.SlideHeader, { onClose: d }),
              (0, l.jsx)(r.Z.SlideContent, {
                children: (0, l.jsxs)(s.FormItem, {
                  title: o.intl.string(o.t["CIGa+/"]),
                  children: [
                    (0, l.jsx)(s.TextInput, {
                      inputRef: x,
                      onChange: S,
                      value: g,
                      type: "password",
                      autoComplete: "password",
                      spellCheck: "false",
                      disabled: c,
                    }),
                    (0, l.jsx)(r.Z.SlideError, { error: f }),
                  ],
                }),
              }),
              (0, l.jsx)(r.Z.SlideFooter, {
                mfaChallenge: t,
                setSlide: a,
                showConfirm: !0,
                disabled: 0 === g.length,
                submitting: c,
              }),
            ],
          })
        );
      }
    },
    248902: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var l = n(200651);
      n(192379);
      var i = n(481060),
        s = n(507453),
        r = n(48550),
        o = n(388032),
        a = n(58259);
      function d(e) {
        let { mfaChallenge: t, setSlide: n, onClose: d } = e;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(s.Z.SlideHeader, {
              subtitle: o.intl.string(o.t["XQaT+/"]),
              onClose: d,
            }),
            (0, l.jsx)(s.Z.SlideContent, {
              children: t.methods.map((e) =>
                (0, l.jsxs)(
                  i.Clickable,
                  {
                    className: a.listItemContainer,
                    onClick: () => {
                      n(e.type);
                    },
                    children: [
                      (0, l.jsx)(i.Text, {
                        className: a.listItemText,
                        variant: "text-md/semibold",
                        children: r.P[e.type],
                      }),
                      (0, l.jsx)(i.ChevronSmallRightIcon, {
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
    160511: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      }),
        n(47120),
        n(773603);
      var l = n(200651),
        i = n(192379),
        s = n(658550),
        r = n(544891),
        o = n(481060),
        a = n(507453),
        d = n(981631),
        u = n(388032),
        c = n(58259);
      function h(e) {
        let {
            mfaChallenge: t,
            finish: n,
            setSlide: h,
            onClose: f,
            isSlideReady: m,
          } = e,
          [g, S] = i.useState(!1),
          [x, v] = i.useState(null),
          [p, j] = i.useState(!1),
          [C, b] = i.useState(null),
          [y, Z] = i.useState(""),
          w = i.useRef(null);
        i.useEffect(() => {
          S(!0),
            r.tn
              .post({
                url: d.ANM.LOGIN_SMS_SEND,
                body: { ticket: t.ticket },
                oldFormErrors: !0,
              })
              .then((e) => {
                v(e.body.phone);
              })
              .catch((e) => {
                var t;
                b(
                  e.message ||
                    (null === (t = e.body) || void 0 === t
                      ? void 0
                      : t.message),
                );
              })
              .finally(() => {
                S(!1);
              });
        }, [t.ticket]),
          i.useEffect(() => {
            if (m) {
              var e;
              null === (e = w.current) || void 0 === e || e.focus();
            }
          }, [m]);
        let k =
          null == x
            ? u.intl.string(u.t.LQdCQE)
            : u.intl.formatToPlainString(u.t["8r6h7+"], { phoneNumber: x });
        return (0, l.jsxs)("form", {
          onSubmit: (e) => {
            e.preventDefault(),
              j(!0),
              n({ mfaType: "sms", data: y })
                .catch((e) => {
                  var t, n;
                  b(
                    null !== (n = e.message) && void 0 !== n
                      ? n
                      : null === (t = e.body) || void 0 === t
                        ? void 0
                        : t.message,
                  );
                })
                .finally(() => {
                  j(!1);
                });
          },
          children: [
            (0, l.jsx)(a.Z.SlideHeader, { subtitle: k, onClose: f }),
            (0, l.jsx)(a.Z.SlideContent, {
              children: (0, l.jsxs)(o.FormItem, {
                title: u.intl.string(u.t.HZPBOT),
                children: [
                  (0, l.jsxs)("div", {
                    className: c.smsInputContainer,
                    children: [
                      (0, l.jsx)(o.TextInput, {
                        className: c.smsInput,
                        inputRef: w,
                        onChange: Z,
                        placeholder: u.intl.string(u.t.tARzgo),
                        maxLength: 10,
                        value: y,
                        autoComplete: "one-time-code",
                        spellCheck: "false",
                        disabled: p,
                      }),
                      (0, l.jsx)(o.Button, {
                        size: o.Button.Sizes.MEDIUM,
                        submitting: g,
                        onClick: () => {
                          r.tn
                            .post({
                              url: d.ANM.LOGIN_SMS_SEND,
                              body: { ticket: t.ticket },
                              oldFormErrors: !0,
                            })
                            .then((e) => {
                              v(e.body.phone);
                            })
                            .catch((e) => {
                              var t;
                              b(
                                e.message ||
                                  (null === (t = e.body) || void 0 === t
                                    ? void 0
                                    : t.message),
                              );
                            });
                        },
                        children: u.intl.string(u.t.ZF29Ly),
                      }),
                    ],
                  }),
                  (0, l.jsx)(a.Z.SlideError, { error: C }),
                ],
              }),
            }),
            (0, l.jsx)(a.Z.SlideFooter, {
              mfaChallenge: t,
              setSlide: h,
              showConfirm: !0,
              disabled: y.length !== s.Gz,
              submitting: p,
            }),
          ],
        });
      }
    },
    51693: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      }),
        n(47120),
        n(773603);
      var l = n(200651),
        i = n(192379),
        s = n(658550),
        r = n(481060),
        o = n(507453),
        a = n(388032);
      function d(e) {
        let {
            mfaChallenge: t,
            finish: n,
            setSlide: d,
            onClose: u,
            isSlideReady: c,
          } = e,
          [h, f] = i.useState(!1),
          [m, g] = i.useState(null),
          [S, x] = i.useState(""),
          v = i.useRef(null);
        return (
          i.useEffect(() => {
            if (c) {
              var e;
              null === (e = v.current) || void 0 === e || e.focus();
            }
          }, [c]),
          (0, l.jsxs)("form", {
            onSubmit: (e) => {
              e.preventDefault(),
                f(!0),
                n({ mfaType: "totp", data: S })
                  .catch((e) => {
                    var t, n;
                    g(
                      null !== (n = e.message) && void 0 !== n
                        ? n
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
              (0, l.jsx)(o.Z.SlideHeader, { onClose: u }),
              (0, l.jsx)(o.Z.SlideContent, {
                children: (0, l.jsxs)(r.FormItem, {
                  title: a.intl.string(a.t.HZPBOT),
                  children: [
                    (0, l.jsx)(r.TextInput, {
                      inputRef: v,
                      onChange: x,
                      placeholder: a.intl.string(a.t.tARzgo),
                      maxLength: s.gH,
                      minLength: s.gH,
                      value: S,
                      autoComplete: "one-time-code",
                      spellCheck: "false",
                      disabled: h,
                    }),
                    (0, l.jsx)(o.Z.SlideError, { error: m }),
                  ],
                }),
              }),
              (0, l.jsx)(o.Z.SlideFooter, {
                mfaChallenge: t,
                setSlide: d,
                showConfirm: !0,
                disabled: S.length !== s.gH,
                submitting: h,
              }),
            ],
          })
        );
      }
    },
    973810: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      }),
        n(47120);
      var l = n(200651),
        i = n(192379),
        s = n(849055),
        r = n(481060),
        o = n(358085),
        a = n(960048),
        d = n(998502),
        u = n(507453),
        c = n(981631),
        h = n(388032);
      function f(e) {
        let { mfaChallenge: t, finish: n, setSlide: f, onClose: m } = e,
          [g, S] = i.useState(!1),
          [x, v] = i.useState(null),
          { challenge: p } = t.methods.find((e) => "webauthn" === e.type),
          j = async () => {
            S(!0), v(null);
            let e =
                o.isPlatformEmbedded && d.ZP.supportsFeature(c.eRX.WEBAUTHN)
                  ? d.ZP.webAuthnAuthenticate(p)
                  : s.U2(JSON.parse(p)).then((e) => JSON.stringify(e)),
              t = async (e) => {
                try {
                  await n({ mfaType: "webauthn", data: e });
                } catch (e) {
                  var t;
                  v(
                    null !== (t = e.message) && void 0 !== t
                      ? t
                      : h.intl.string(h.t.xSCvBQ),
                  );
                }
              };
            try {
              let n = await e;
              await t(n);
            } catch (e) {
              a.Z.captureException(e), v(h.intl.string(h.t.xSCvBQ));
            } finally {
              S(!1);
            }
          };
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(u.Z.SlideHeader, { onClose: m }),
            (0, l.jsxs)(u.Z.SlideContent, {
              children: [
                (0, l.jsx)(r.Button, {
                  submitting: g,
                  onClick: j,
                  children: h.intl.string(h.t.Xr3Ekp),
                }),
                (0, l.jsx)(u.Z.SlideError, { error: x }),
              ],
            }),
            (0, l.jsx)(u.Z.SlideFooter, { mfaChallenge: t, setSlide: f }),
          ],
        });
      }
    },
    658550: function (e, t, n) {
      n.d(t, {
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
          return s;
        },
        th: function () {
          return i;
        },
      }),
        n(411104);
      var l = n(544891);
      let i = 8,
        s = 11,
        r = 6,
        o = 6;
      async function a(e) {
        let { ticket: t, mfaType: n, data: i } = e,
          s =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        try {
          return (
            await l.tn.post({
              url: "/mfa/finish",
              body: { ticket: t, mfa_type: n, data: i },
              retries: s,
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
        let { token: n } = await a(e);
        return new Promise((e, l) => {
          t({ "X-Discord-MFA-Authorization": n }, (t) => {
            var n, i;
            return (null === (n = t.body) || void 0 === n ? void 0 : n.code) ===
              60008 ||
              (null === (i = t.body) || void 0 === i ? void 0 : i.code) ===
                60003
              ? (l(Error(t.body.message)), !0)
              : (e(), !1);
          });
        });
      }
    },
  },
]);
//# sourceMappingURL=246a2ff1341c5dbf0abb.js.map
