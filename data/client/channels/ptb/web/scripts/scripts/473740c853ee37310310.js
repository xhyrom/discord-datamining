"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["1677"],
  {
    833310: function (t) {
      t.exports = "/assets/b4a7081edd373f342f71.svg";
    },
    612317: function (t) {
      t.exports = "/assets/2e92c54e76a6cadef895.svg";
    },
    324239: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return N;
          },
        }),
        n(47120);
      var o = n(200651),
        l = n(192379),
        r = n(481060),
        i = n(893776),
        s = n(809206),
        c = n(600164),
        a = n(390885),
        u = n(626135),
        d = n(361207),
        m = n(981631),
        f = n(630724),
        p = n(388032),
        g = n(35928);
      function _(t) {
        let {
            email: e,
            setEmail: n,
            claimRequired: u,
            onSuccess: d,
            onClose: m,
          } = t,
          [_, S] = l.useState(),
          [N, x] = l.useState(""),
          [C, T] = l.useState(""),
          [v, h] = l.useState(!1);
        l.useEffect(() => a.Z.flowStep(f.MK.ANY, f.mx.CLAIM_ACCOUNT), []);
        let w = async (t) => {
          t.preventDefault(), h(!0), S(""), T("");
          try {
            await (0, s.S2)({ email: e, password: N }), h(!1), d();
          } catch (t) {
            var n, o;
            (null == t
              ? void 0
              : null === (n = t.body) || void 0 === n
                ? void 0
                : n.email) && S(t.body.email),
              (null == t
                ? void 0
                : null === (o = t.body) || void 0 === o
                  ? void 0
                  : o.password) && T(t.body.password),
              h(!1);
          }
        };
        return (0, o.jsxs)("div", {
          children: [
            (0, o.jsxs)(r.ModalHeader, {
              className: g.formHeader,
              direction: c.Z.Direction.VERTICAL,
              separator: !1,
              children: [
                (0, o.jsx)("div", { className: g.formImage }),
                (0, o.jsx)(r.Heading, {
                  className: g.formTitle,
                  variant: "heading-xl/semibold",
                  children: p.intl.string(p.t.uQShv7),
                }),
                (0, o.jsx)(r.Text, {
                  className: g.formBody,
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: u
                    ? p.intl.string(p.t.sW28gY)
                    : p.intl.string(p.t["gP/vPT"]),
                }),
                (0, o.jsx)(r.ModalCloseButton, {
                  className: g.closeButton,
                  onClick: m,
                }),
              ],
            }),
            (0, o.jsx)(r.ModalContent, {
              children: (0, o.jsxs)("form", {
                className: g.formContent,
                onSubmit: w,
                children: [
                  (0, o.jsx)(r.FormItem, {
                    title: p.intl.string(p.t.dI4d4e),
                    className: g.formItem,
                    children: (0, o.jsx)(r.TextInput, {
                      value: e,
                      error: _,
                      onChange: (t) => n(t),
                      autoFocus: !0,
                    }),
                  }),
                  (0, o.jsx)(r.FormItem, {
                    title: p.intl.string(p.t["CIGa+/"]),
                    className: g.formItem,
                    children: (0, o.jsx)(r.TextInput, {
                      type: "password",
                      value: N,
                      error: C,
                      onChange: (t) => x(t),
                    }),
                  }),
                  (0, o.jsx)(r.Button, {
                    type: "submit",
                    size: r.Button.Sizes.LARGE,
                    fullWidth: !0,
                    submitting: v,
                    disabled: 0 === e.length || 0 === N.length,
                    children: p.intl.string(p.t.fiNVio),
                  }),
                  u &&
                    (0, o.jsx)(r.Button, {
                      className: g.logoutButton,
                      color: r.Button.Colors.PRIMARY,
                      look: r.Button.Looks.LINK,
                      size: r.Button.Sizes.NONE,
                      onClick: () => {
                        i.Z.logout(), m();
                      },
                      children: p.intl.string(p.t["2jxGen"]),
                    }),
                ],
              }),
            }),
          ],
        });
      }
      function S(t) {
        let { email: e, claimRequired: n, onClose: i } = t,
          s = n ? p.t.D7trIC : p.t.JNWX7O;
        function _() {
          window.open((0, d.t3)(), "_blank"),
            u.default.track(m.rMx.DOWNLOAD_APP, {
              platform: (0, d.DW)(),
              ptb: !1,
              released: !0,
              has_e_mail: !0,
              referring_location: "Claim Modal",
              qr_code: !1,
            });
        }
        return (
          l.useEffect(
            () => a.Z.flowStep(f.MK.ANY, f.mx.CLAIM_ACCOUNT_SUCCESS),
            [],
          ),
          (0, o.jsxs)("div", {
            children: [
              (0, o.jsxs)(r.ModalContent, {
                className: g.successContent,
                children: [
                  !n &&
                    (0, o.jsx)(r.ModalCloseButton, {
                      className: g.closeButton,
                      onClick: i,
                    }),
                  (0, o.jsx)("div", { className: g.successImage }),
                  (0, o.jsx)(r.Text, {
                    className: g.successTitle,
                    variant: "text-lg/semibold",
                    children: p.intl.format(s, { email: e }),
                  }),
                  (0, o.jsx)(r.Text, {
                    className: g.successPromotion,
                    variant: "text-md/normal",
                    children: p.intl.string(p.t.eXqM2d),
                  }),
                ],
              }),
              n
                ? (0, o.jsx)(r.ModalFooter, {
                    direction: c.Z.Direction.VERTICAL,
                    children: (0, o.jsx)(r.Button, {
                      size: r.Button.Sizes.LARGE,
                      onClick: i,
                      children: p.intl.string(p.t.BddRzc),
                    }),
                  })
                : (0, o.jsx)(r.ModalFooter, {
                    direction: c.Z.Direction.VERTICAL,
                    children: (0, o.jsx)(r.Button, {
                      color: r.Button.Colors.BRAND,
                      size: r.Button.Sizes.LARGE,
                      onClick: _,
                      children: p.intl.string(p.t.ygArIS),
                    }),
                  }),
            ],
          })
        );
      }
      function N(t) {
        let { onClose: e, transitionState: n, claimRequired: i = !1 } = t,
          [s, c] = l.useState(""),
          [a, u] = l.useState(!1);
        return a
          ? (0, o.jsx)(r.ModalRoot, {
              transitionState: n,
              children: (0, o.jsx)(S, {
                email: s,
                claimRequired: i,
                onClose: e,
              }),
            })
          : (0, o.jsx)(r.ModalRoot, {
              transitionState: n,
              children: (0, o.jsx)(_, {
                email: s,
                setEmail: c,
                claimRequired: i,
                onSuccess: () => u(!0),
                onClose: e,
              }),
            });
      }
    },
    630724: function (t, e, n) {
      var o, l, r, i, s, c, a, u, d, m;
      n.d(e, {
        EW: function () {
          return s;
        },
        FF: function () {
          return l;
        },
        MK: function () {
          return o;
        },
        X2: function () {
          return i;
        },
        mx: function () {
          return r;
        },
      }),
        ((c = o || (o = {})).UNKNOWN = "unknown"),
        (c.ANY = "any"),
        (c.INVITE = "invite"),
        (c.ORGANIC = "organic_registration"),
        (c.ORGANIC_MARKETING = "organic_marketing"),
        (c.ORGANIC_GUILD_TEMPLATES = "organic_guild_template"),
        (c.CREATE_GUILD = "create_guild"),
        ((a = l || (l = {})).AGE_GATE = "age_gate"),
        (a.AGE_GATE_UNDERAGE = "age_gate_underage"),
        ((u = r || (r = {})).CLAIM_ACCOUNT = "claim_account"),
        (u.CLAIM_ACCOUNT_SUCCESS = "claim_account_success"),
        ((d = i || (i = {})).GUILD_TEMPLATES = "guild_templates"),
        (d.GUILD_CREATE = "guild_create"),
        (d.CREATION_INTENT = "creation_intent"),
        (d.CHANNEL_PROMPT = "channel_prompt"),
        (d.JOIN_GUILD = "join_guild"),
        (d.SUCCESS = "create_success"),
        ((m = s || (s = {})).NUF_STARTED = "nuf_started"),
        (m.AGE_GATE = "age_gate"),
        (m.NUF_COMPLETE = "nuf_complete"),
        (m.HUB_CONNECTION = "hub_connection");
    },
    390885: function (t, e, n) {
      var o = n(903797),
        l = n(731965),
        r = n(433517),
        i = n(710845),
        s = n(626135),
        c = n(630724),
        a = n(981631);
      let u = "UserFlowAnalyticsStore_current",
        d = "UserFlowAnalyticsStore";
      function m(t) {
        if (t === c.MK.UNKNOWN) return null;
        let e = r.K.get("".concat(d, "-").concat(t));
        if (null == e) return null;
        let { version: n, ...o } = e;
        return 1 !== n ? null : o;
      }
      new i.Z("UserFlowAnalytics");
      let f = (0, o.Z)((t, e) => ({
        flows: {},
        currentFlow: null,
        activeFlow: () => {
          var t;
          let n =
            null !== (t = e().currentFlow) && void 0 !== t ? t : r.K.get(u);
          if (null == n) return null;
          let { [n]: o } = e().flows,
            l = null != o ? o : m(n);
          return (null == l ? void 0 : l.currentStep) != null ? n : null;
        },
      }));
      function p(t, e) {
        let { [t]: n, ...o } = f.getState().flows,
          r = null != n ? n : m(t);
        if ((null == r ? void 0 : r.currentStep) == null || r.currentStep !== e)
          (0, l.j)(() => {
            f.setState({
              flows: {
                ...o,
                [t]: {
                  type: t,
                  lastStep: null,
                  lastTimestamp: null,
                  currentStep: e,
                  currentTimestamp: new Date(),
                  skipped: !1,
                },
              },
              currentFlow: t,
            });
          });
      }
      function g(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          o = t;
        if (t === c.MK.ANY) {
          var r;
          o =
            null !== (r = f.getState().activeFlow()) && void 0 !== r
              ? r
              : c.MK.UNKNOWN;
        }
        let { [o]: i, ...s } = f.getState().flows,
          a = null != i ? i : m(o);
        if (null != a && null != a.currentStep && a.currentStep !== e)
          (0, l.j)(() => {
            f.setState({
              flows: {
                ...s,
                [o]: {
                  ...a,
                  lastStep: a.currentStep,
                  lastTimestamp: a.currentTimestamp,
                  currentStep: e,
                  currentTimestamp: new Date(),
                  ended: n,
                },
              },
              currentFlow: o,
            });
          });
      }
      f.subscribe(
        (t) => {
          var e;
          if (null != t) {
            if (
              (!(function (t) {
                if (t.type === c.MK.UNKNOWN) return;
                let e = "".concat(d, "-").concat(t.type);
                t.ended
                  ? (r.K.remove(e), r.K.remove(u))
                  : (r.K.set("".concat(d, "-").concat(t.type), {
                      ...t,
                      version: 1,
                    }),
                    r.K.set(u, t.type));
              })(t),
              s.default.track(
                a.rMx.NUO_TRANSITION,
                {
                  flow_type: t.type,
                  from_step: t.lastStep,
                  to_step: t.currentStep,
                  seconds_on_from_step:
                    "function" !=
                    typeof (null === (e = t.lastTimestamp) || void 0 === e
                      ? void 0
                      : e.getTime)
                      ? 0
                      : (t.currentTimestamp.getTime() -
                          t.lastTimestamp.getTime()) /
                        1e3,
                },
                { flush: !0 },
              ),
              t.ended)
            ) {
              let e = { ...f.getState().flows };
              delete e[t.type],
                (0, l.j)(() => {
                  f.setState({ flows: e, currentFlow: null });
                });
            }
          }
        },
        (t) => (null != t.currentFlow ? t.flows[t.currentFlow] : void 0),
      );
      function _() {
        return null != f.getState().activeFlow();
      }
      e.Z = {
        flowStart: p,
        flowStepOrStart: function (t, e) {
          _() ? g(t, e) : p(t, e);
        },
        flowStep: g,
        hasActiveFlow: _,
      };
    },
    361207: function (t, e, n) {
      n.d(e, {
        DW: function () {
          return d;
        },
        Gn: function () {
          return f;
        },
        t3: function () {
          return m;
        },
        w4: function () {
          return a;
        },
      });
      var o = n(525654),
        l = n.n(o),
        r = n(271579),
        i = n(314897),
        s = n(981631);
      let c = "linux";
      function a(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 ? arguments[2] : void 0;
        return ""
          .concat(s.fzT.DESKTOP)
          .concat(e ? "/ptb" : "", "?platform=")
          .concat(t)
          .concat(null != n ? "&format=".concat(n) : "");
      }
      function u() {
        var t;
        let e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : null === (t = l().os) || void 0 === t
              ? void 0
              : t.family;
        return null == e
          ? "win"
          : -1 !== e.indexOf("Ubuntu") ||
              -1 !== e.indexOf("Debian") ||
              -1 !== e.indexOf("Fedora") ||
              -1 !== e.indexOf("Red Hat") ||
              -1 !== e.indexOf("SuSE") ||
              -1 !== e.indexOf("Linux")
            ? c
            : -1 !== e.indexOf("OS X")
              ? "osx"
              : "win";
      }
      function d(t) {
        return { win: "Windows", osx: "Mac", [c]: "Linux" }[u(t)];
      }
      function m() {
        let t = u();
        return a(t, !1, t === c ? "tar.gz" : null);
      }
      function f(t, e, n) {
        let o = null != n ? n.toString() : null;
        switch (e) {
          case "iOS":
            return (0, r.ZP)(
              null != o
                ? o
                : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746",
              {
                utmSource: t,
                fingerprint: i.default.getFingerprint(),
                attemptId: (0, r.WS)(),
              },
            );
          case "Android":
            return (0, r.ZP)(
              null != o ? o : "https://play.google.com/store/apps/details",
              {
                utmSource: t,
                id: "com.discord",
                fingerprint: i.default.getFingerprint(),
                attemptId: (0, r.WS)(),
              },
            );
          default:
            return null != o ? o : "https://www.discord.com";
        }
      }
    },
    35928: function (t, e, n) {
      t.exports = {
        formHeader: "formHeader_c1a031",
        formContent: "formContent_c1a031",
        formImage: "formImage_c1a031",
        formTitle: "formTitle_c1a031",
        formBody: "formBody_c1a031",
        formItem: "formItem_c1a031",
        logoutButton: "logoutButton_c1a031",
        closeButton: "closeButton_c1a031",
        successContent: "successContent_c1a031",
        successTitle: "successTitle_c1a031",
        successPromotion: "successPromotion_c1a031",
        successImage: "successImage_c1a031",
      };
    },
  },
]);
//# sourceMappingURL=473740c853ee37310310.js.map
