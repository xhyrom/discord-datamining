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
        r = n(481060),
        s = n(447097),
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
          [x, p] = i.useState(
            null !==
              (n =
                null === (t = h.methods[0]) || void 0 === t
                  ? void 0
                  : t.type) && void 0 !== n
              ? n
              : "select",
          ),
          [v, j] = i.useState(x),
          C = async (e) => {
            let { mfaType: t, data: n } = e;
            await f({ mfaType: t, data: n, ticket: h.ticket }),
              null != g && g();
          },
          b = { mfaChallenge: h, finish: C, setSlide: p, onClose: m };
        return (0, l.jsxs)(r.Slides, {
          activeSlide: x,
          width: S,
          onSlideReady: j,
          children: [
            (0, l.jsx)(r.Slide, {
              id: "select",
              children: (0, l.jsx)(a.Z, { ...b }),
            }),
            (0, l.jsx)(r.Slide, {
              id: "webauthn",
              children: (0, l.jsx)(c.Z, { ...b }),
            }),
            (0, l.jsx)(r.Slide, {
              id: "totp",
              children: (0, l.jsx)(u.Z, { ...b, isSlideReady: "totp" === v }),
            }),
            (0, l.jsx)(r.Slide, {
              id: "sms",
              children: (0, l.jsx)(d.Z, { ...b, isSlideReady: "sms" === v }),
            }),
            (0, l.jsx)(r.Slide, {
              id: "backup",
              children: (0, l.jsx)(s.Z, { ...b, isSlideReady: "backup" === v }),
            }),
            (0, l.jsx)(r.Slide, {
              id: "password",
              children: (0, l.jsx)(o.Z, {
                ...b,
                isSlideReady: "password" === v,
              }),
            }),
          ],
        });
      }
      function m(e) {
        let { mfaChallenge: t, finish: n, transitionState: i, onClose: s } = e;
        return (0, l.jsx)(r.ModalRoot, {
          transitionState: i,
          size: r.ModalSize.SMALL,
          "aria-label": h.intl.string(h.t.saHocH),
          children: (0, l.jsx)(f, {
            mfaChallenge: t,
            mfaFinish: n,
            onClose: s,
            onEarlyClose: s,
          }),
        });
      }
      function g(e, t, n) {
        (0, r.openModal)(
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
        r = n(600164),
        s = n(388032),
        o = n(452091);
      t.Z = {
        SlideContent: function (e) {
          let { children: t, scrollbarType: n } = e;
          return (0, l.jsx)(i.ModalContent, {
            className: o.content,
            scrollbarType: n,
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
                    ? r.Z.Direction.HORIZONTAL_REVERSE
                    : r.Z.Direction.HORIZONTAL,
                children: [
                  u &&
                    (0, l.jsx)(i.Button, {
                      look: i.Button.Looks.LINK,
                      onClick: () => n("select"),
                      color: i.Button.Colors.PRIMARY,
                      children: s.intl.string(s.t.Tot4EB),
                    }),
                  a &&
                    (0, l.jsx)(i.Button, {
                      type: "submit",
                      ...d,
                      children: s.intl.string(s.t["cY+Ooa"]),
                    }),
                ],
              })
            : null;
        },
        SlideHeader: function (e) {
          let { subtitle: t, onClose: n } = e;
          return (0, l.jsxs)(i.ModalHeader, {
            direction: r.Z.Direction.VERTICAL,
            className: o.header,
            separator: !1,
            children: [
              (0, l.jsx)(i.Heading, {
                variant: "heading-xl/semibold",
                children: s.intl.string(s.t.saHocH),
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
        r = n(658550),
        s = n(481060),
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
          p = i.useRef(null),
          v = a.intl.string(a.t["C/ZAw8"]),
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
              null === (e = p.current) || void 0 === e || e.focus();
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
                      null !==
                        (n =
                          null === (t = e.body) || void 0 === t
                            ? void 0
                            : t.message) && void 0 !== n
                        ? n
                        : e.message,
                    );
                  })
                  .finally(() => {
                    f(!1);
                  });
            },
            children: [
              (0, l.jsx)(o.Z.SlideHeader, { onClose: u }),
              (0, l.jsx)(o.Z.SlideContent, {
                children: (0, l.jsxs)(s.FormItem, {
                  title: v,
                  children: [
                    (0, l.jsx)(s.TextInput, {
                      inputRef: p,
                      onChange: C,
                      placeholder: j,
                      maxLength: r.tL,
                      minLength: r.th,
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
        r = n(481060),
        s = n(507453),
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
                      null !==
                        (n =
                          null === (t = e.body) || void 0 === t
                            ? void 0
                            : t.message) && void 0 !== n
                        ? n
                        : e.message,
                    );
                  })
                  .finally(() => {
                    h(!1);
                  });
            },
            children: [
              (0, l.jsx)(s.Z.SlideHeader, { onClose: d }),
              (0, l.jsx)(s.Z.SlideContent, {
                children: (0, l.jsxs)(r.FormItem, {
                  title: o.intl.string(o.t["CIGa+/"]),
                  children: [
                    (0, l.jsx)(r.TextInput, {
                      inputRef: x,
                      onChange: S,
                      value: g,
                      type: "password",
                      autoComplete: "password",
                      spellCheck: "false",
                      disabled: c,
                    }),
                    (0, l.jsx)(s.Z.SlideError, { error: f }),
                  ],
                }),
              }),
              (0, l.jsx)(s.Z.SlideFooter, {
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
        r = n(507453),
        s = n(48550),
        o = n(388032),
        a = n(452091);
      function d(e) {
        let { mfaChallenge: t, setSlide: n, onClose: d } = e;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(r.Z.SlideHeader, {
              subtitle: o.intl.string(o.t["XQaT+/"]),
              onClose: d,
            }),
            (0, l.jsx)(r.Z.SlideContent, {
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
                        children: s.P[e.type],
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
        r = n(658550),
        s = n(544891),
        o = n(481060),
        a = n(507453),
        d = n(981631),
        u = n(388032),
        c = n(452091);
      function h(e) {
        let {
            mfaChallenge: t,
            finish: n,
            setSlide: h,
            onClose: f,
            isSlideReady: m,
          } = e,
          [g, S] = i.useState(!1),
          [x, p] = i.useState(null),
          [v, j] = i.useState(!1),
          [C, b] = i.useState(null),
          [y, Z] = i.useState(""),
          E = i.useRef(null);
        i.useEffect(() => {
          S(!0),
            s.tn
              .post({
                url: d.ANM.LOGIN_SMS_SEND,
                body: { ticket: t.ticket },
                oldFormErrors: !0,
                rejectWithError: !1,
              })
              .then((e) => {
                p(e.body.phone);
              })
              .catch((e) => {
                var t, n;
                b(
                  null !==
                    (n =
                      null === (t = e.body) || void 0 === t
                        ? void 0
                        : t.message) && void 0 !== n
                    ? n
                    : e.message,
                );
              })
              .finally(() => {
                S(!1);
              });
        }, [t.ticket]),
          i.useEffect(() => {
            if (m) {
              var e;
              null === (e = E.current) || void 0 === e || e.focus();
            }
          }, [m]);
        let w =
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
            (0, l.jsx)(a.Z.SlideHeader, { subtitle: w, onClose: f }),
            (0, l.jsx)(a.Z.SlideContent, {
              children: (0, l.jsxs)(o.FormItem, {
                title: u.intl.string(u.t.HZPBOT),
                children: [
                  (0, l.jsxs)("div", {
                    className: c.smsInputContainer,
                    children: [
                      (0, l.jsx)(o.TextInput, {
                        className: c.smsInput,
                        inputRef: E,
                        onChange: Z,
                        placeholder: u.intl.string(u.t.tARzgo),
                        maxLength: 10,
                        value: y,
                        autoComplete: "one-time-code",
                        spellCheck: "false",
                        disabled: v,
                      }),
                      (0, l.jsx)(o.Button, {
                        size: o.Button.Sizes.MEDIUM,
                        submitting: g,
                        onClick: () => {
                          s.tn
                            .post({
                              url: d.ANM.LOGIN_SMS_SEND,
                              body: { ticket: t.ticket },
                              oldFormErrors: !0,
                              rejectWithError: !1,
                            })
                            .then((e) => {
                              p(e.body.phone);
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
              disabled: y.length !== r.Gz,
              submitting: v,
            }),
          ],
        });
      }
    },
    51693: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(47120),
        n(773603);
      var l = n(200651),
        i = n(192379),
        r = n(658550),
        s = n(481060),
        o = n(540059),
        a = n(507453),
        d = n(388032);
      function u(e) {
        let {
            mfaChallenge: t,
            finish: n,
            setSlide: u,
            onClose: c,
            isSlideReady: h,
          } = e,
          f = (0, o.Q3)("TotpSlide"),
          [m, g] = i.useState(!1),
          [S, x] = i.useState(null),
          [p, v] = i.useState(""),
          j = i.useRef(null);
        return (
          i.useEffect(() => {
            if (h) {
              var e;
              null === (e = j.current) || void 0 === e || e.focus();
            }
          }, [h]),
          (0, l.jsxs)("form", {
            onSubmit: (e) => {
              e.preventDefault(),
                g(!0),
                x(null),
                n({ mfaType: "totp", data: p })
                  .catch((e) => {
                    var t, n;
                    x(
                      null !==
                        (n =
                          null === (t = e.body) || void 0 === t
                            ? void 0
                            : t.message) && void 0 !== n
                        ? n
                        : e.message,
                    );
                  })
                  .finally(() => {
                    g(!1);
                  });
            },
            children: [
              (0, l.jsx)(a.Z.SlideHeader, { onClose: c }),
              (0, l.jsx)(a.Z.SlideContent, {
                scrollbarType: f ? "none" : void 0,
                children: (0, l.jsxs)(s.FormItem, {
                  title: d.intl.string(d.t.HZPBOT),
                  children: [
                    (0, l.jsx)(s.TextInput, {
                      inputRef: j,
                      onChange: v,
                      placeholder: d.intl.string(d.t.tARzgo),
                      maxLength: r.gH,
                      minLength: r.gH,
                      value: p,
                      autoComplete: "one-time-code",
                      spellCheck: "false",
                      disabled: m,
                    }),
                    (0, l.jsx)(a.Z.SlideError, { error: S }),
                  ],
                }),
              }),
              (0, l.jsx)(a.Z.SlideFooter, {
                mfaChallenge: t,
                setSlide: u,
                showConfirm: !0,
                disabled: p.length !== r.gH,
                submitting: m,
              }),
            ],
          })
        );
      }
    },
    973810: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      }),
        n(47120);
      var l = n(200651),
        i = n(192379),
        r = n(849055),
        s = n(544891),
        o = n(481060),
        a = n(358085),
        d = n(960048),
        u = n(998502),
        c = n(507453),
        h = n(981631),
        f = n(388032);
      function m(e) {
        let { mfaChallenge: t, finish: n, setSlide: m, onClose: g } = e,
          [S, x] = i.useState(!1),
          [p, v] = i.useState(null),
          { challenge: j } = t.methods.find((e) => "webauthn" === e.type),
          C = async () => {
            x(!0), v(null);
            let e =
                a.isPlatformEmbedded && u.ZP.supportsFeature(h.eRX.WEBAUTHN)
                  ? u.ZP.webAuthnAuthenticate(j)
                  : r.U2(JSON.parse(j)).then((e) => JSON.stringify(e)),
              t = async (e) => {
                try {
                  await n({ mfaType: "webauthn", data: e });
                } catch (e) {
                  e instanceof s.Pd
                    ? v(f.intl.string(f.t.xSCvBQ))
                    : v(e.message);
                }
              };
            try {
              let n = await e;
              await t(n);
            } catch (e) {
              d.Z.captureException(e), v(f.intl.string(f.t.xSCvBQ));
            } finally {
              x(!1);
            }
          };
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(c.Z.SlideHeader, { onClose: g }),
            (0, l.jsxs)(c.Z.SlideContent, {
              children: [
                (0, l.jsx)(o.Button, {
                  submitting: S,
                  onClick: C,
                  children: f.intl.string(f.t.Xr3Ekp),
                }),
                (0, l.jsx)(c.Z.SlideError, { error: p }),
              ],
            }),
            (0, l.jsx)(c.Z.SlideFooter, { mfaChallenge: t, setSlide: m }),
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
          return s;
        },
        tL: function () {
          return r;
        },
        th: function () {
          return i;
        },
      }),
        n(411104);
      var l = n(544891);
      let i = 8,
        r = 11,
        s = 6,
        o = 6;
      async function a(e) {
        let { ticket: t, mfaType: n, data: i } = e,
          r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        try {
          return (
            await l.tn.post({
              url: "/mfa/finish",
              body: { ticket: t, mfa_type: n, data: i },
              retries: r,
              rejectWithError: !1,
            })
          ).body;
        } catch (e) {
          var s;
          if (null === (s = e.body) || void 0 === s ? void 0 : s.message)
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
//# sourceMappingURL=4b4d6dd5004acd5f03a0.js.map
