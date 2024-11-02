"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["17525"],
  {
    98118: function (e) {
      e.exports = "/assets/d2259d3ca22746e44d10.svg";
    },
    134978: function (e) {
      e.exports = "/assets/4d59a8d7e497a428871d.svg";
    },
    290068: function (e) {
      e.exports = "/assets/2297f5f7cdfd7cc10377.svg";
    },
    465644: function (e) {
      e.exports = "/assets/1b2e6afe5b46808ec54a.svg";
    },
    639738: function (e) {
      e.exports = "/assets/76b43bee81103929cfa5.svg";
    },
    176530: function (e) {
      e.exports = "/assets/a3c71c98967d938828b0.svg";
    },
    719082: function (e) {
      e.exports = "/assets/d3ab98ac02693056e6b0.svg";
    },
    882572: function (e) {
      e.exports = "/assets/e26e5e853fb63be87cd1.svg";
    },
    257709: function (e) {
      e.exports = "/assets/ca30936921c9e8b51b2d.svg";
    },
    974977: function (e) {
      e.exports = "/assets/fd441fe73cd855dee579.svg";
    },
    596465: function (e) {
      e.exports = "/assets/8fafc228ce91a2df9658.svg";
    },
    319846: function (e) {
      e.exports = "/assets/4b96f306cd9af86e3136.svg";
    },
    771308: function (e, t, n) {
      n.d(t, {
        Av: function () {
          return c;
        },
        hp: function () {
          return u;
        },
        wE: function () {
          return d;
        },
      });
      var s = n(544891),
        a = n(570140),
        o = n(959776),
        i = n(626135),
        l = n(723359),
        r = n(981631);
      function c(e, t) {
        return (
          (0, o.Z)(e, t),
          i.default.track(r.rMx.AGE_GATE_ACTION, {
            source: t,
            action: l.Al.AGE_GATE_SUBMITTED,
          }),
          s.tn
            .patch({
              url: r.ANM.ME,
              oldFormErrors: !0,
              body: { date_of_birth: e.format("YYYY-MM-DD") },
            })
            .then((e) => {
              let n = e.body;
              a.Z.dispatch({ type: "CURRENT_USER_UPDATE", user: n }),
                i.default.track(r.rMx.AGE_GATE_ACTION, {
                  source: t,
                  action: l.Al.AGE_GATE_SUCCESS,
                });
            })
        );
      }
      function d(e) {
        a.Z.dispatch({ type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION" }),
          i.default.track(r.rMx.AGE_GATE_ACTION, {
            source: e,
            action: l.Al.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION,
          });
      }
      function u(e) {
        a.Z.dispatch({ type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER" }),
          i.default.track(r.rMx.AGE_GATE_ACTION, {
            source: e,
            action: l.Al.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER,
          });
      }
    },
    13430: function (e, t, n) {
      n(47120), n(653041);
      var s = n(200651),
        a = n(192379),
        o = n(120356),
        i = n.n(o),
        l = n(913527),
        r = n.n(l),
        c = n(481060),
        d = n(285888),
        u = n(388032),
        f = n(535701);
      let _ = r()().localeData().months(),
        p = Array.from(Array(31).keys()).map((e) => ({
          value: e + 1,
          label: "".concat(e + 1),
        })),
        m = Array.from(Array(12).keys()).map((e) => ({
          value: e + 1,
          label: _[e],
        })),
        h = /[a-zA-Z0-9]/;
      function E(e) {
        let { options: t, selectOption: n, children: o } = e,
          [i, l] = a.useState("");
        a.useEffect(() => {
          if ("" !== i) {
            let e = setTimeout(() => l(""), 1e3);
            return () => clearTimeout(e);
          }
        }, [i, l]);
        let r = a.useCallback(
          (e) => {
            if (h.test(e.key)) {
              let s = "".concat(i).concat(e.key.toLowerCase()),
                a = t.find((e) => e.label.toLowerCase().startsWith(s));
              null != a && n(a.value), l(s);
            }
          },
          [n, l, i, t],
        );
        return (0, s.jsx)("div", { onKeyDown: r, children: o });
      }
      function x() {
        let e = r()().localeData().longDateFormat("L"),
          t = e.indexOf("D"),
          n = e.indexOf("M"),
          s = e.indexOf("Y");
        return (
          (-1 === t || -1 === n || -1 === s) && ((t = 0), (n = 1), (s = 2)),
          [
            { index: t, type: "day" },
            { index: n, type: "month" },
            { index: s, type: "year" },
          ].sort((e, t) => (e.index < t.index ? -1 : 1))
        );
      }
      let N = a.forwardRef(function (e, t) {
        let {
            value: n,
            wrapperClassName: o,
            onChange: l,
            onPopulated: _,
            error: h,
            autoFocus: N,
            required: T,
          } = e,
          {
            day: A,
            setDay: C,
            month: b,
            setMonth: I,
            year: v,
            setYear: j,
          } = (function (e) {
            let t = null,
              n = null,
              s = null;
            null != e && ((t = e.date()), (n = e.month() + 1), (s = e.year()));
            let [o, i] = a.useState(t),
              [l, r] = a.useState(n),
              [c, d] = a.useState(s);
            return {
              day: o,
              setDay: i,
              month: l,
              setMonth: r,
              year: c,
              setYear: d,
            };
          })(n),
          g = a.useMemo(
            () =>
              null != A && null != b && null != v
                ? r()("".concat(A, "/").concat(b, "/").concat(v), "DD/MM/YYYY")
                : null,
            [A, b, v],
          );
        a.useEffect(() => {
          l((null == g ? void 0 : g.isValid()) ? g : null);
        }, [g, l]);
        let G = h;
        null != g && !g.isValid() && (G = u.intl.string(u.t.udnqh4));
        let y = (function () {
            let e = new Date().getFullYear(),
              t = a.useRef(
                Array.from(Array(150).keys()).map((t) => ({
                  value: e - t - 3,
                  label: "".concat(e - t - 3),
                })),
              );
            return (
              a.useEffect(() => {
                t.current = Array.from(Array(150).keys()).map((t) => ({
                  value: e - t - 3,
                  label: "".concat(e - t - 3),
                }));
              }, [e]),
              t.current
            );
          })(),
          [S, F] = a.useState(N ? 0 : -1),
          O = a.useRef(null),
          M = a.useRef(null),
          D = a.useRef(null),
          L = a.useMemo(x, []),
          k = a.useCallback(() => {
            var e, t, n, s;
            switch (null === (e = L[S]) || void 0 === e ? void 0 : e.type) {
              case "day":
                null === (t = O.current) || void 0 === t || t.focus();
                break;
              case "month":
                null === (n = M.current) || void 0 === n || n.focus();
                break;
              case "year":
                null === (s = D.current) || void 0 === s || s.focus();
            }
          }, [S, O, M, D, L]);
        a.useEffect(() => {
          setTimeout(k, 500);
        }, []),
          a.useEffect(() => {
            if (S >= L.length) {
              null == _ || _();
              return;
            }
            k();
          }, [S, k]);
        let Z = [];
        for (let e = 0; e < 3; e++) {
          let { type: t } = L[e];
          switch (t) {
            case "day":
              Z.push({
                key: "day",
                input: (0, s.jsx)(E, {
                  options: p,
                  selectOption: C,
                  children: (0, s.jsx)(d.Z, {
                    ref: O,
                    className: f.__invalid_inputDay,
                    "aria-label": u.intl.string(u.t.Voklra),
                    menuPlacement: d.Z.MenuPlacements.TOP,
                    placeholder: (0, s.jsx)("span", {
                      "aria-hidden": !0,
                      children: u.intl.string(u.t.Voklra),
                    }),
                    options: p,
                    value: A,
                    onChange: (t) => {
                      let { value: n } = t;
                      C(n), F(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
              break;
            case "month":
              Z.push({
                key: "month",
                input: (0, s.jsx)(E, {
                  options: m,
                  selectOption: I,
                  children: (0, s.jsx)(d.Z, {
                    ref: M,
                    className: f.__invalid_inputMonth,
                    "aria-label": u.intl.string(u.t.UDlN8f),
                    menuPlacement: d.Z.MenuPlacements.TOP,
                    placeholder: (0, s.jsx)("span", {
                      "aria-hidden": !0,
                      children: u.intl.string(u.t.UDlN8f),
                    }),
                    options: m,
                    value: b,
                    onChange: (t) => {
                      let { value: n } = t;
                      I(n), F(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
              break;
            case "year":
              Z.push({
                key: "year",
                input: (0, s.jsx)(E, {
                  options: y,
                  selectOption: j,
                  children: (0, s.jsx)(d.Z, {
                    ref: D,
                    className: f.__invalid_inputYear,
                    "aria-label": u.intl.string(u.t.ZWr5WF),
                    menuPlacement: d.Z.MenuPlacements.TOP,
                    placeholder: (0, s.jsx)("span", {
                      "aria-hidden": !0,
                      children: u.intl.string(u.t.ZWr5WF),
                    }),
                    options: y,
                    value: v,
                    onChange: (t) => {
                      let { value: n } = t;
                      j(n), F(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
          }
        }
        return (0, s.jsxs)("fieldset", {
          className: i()(f.container, o),
          children: [
            (0, s.jsx)(c.FormTitle, {
              tag: "legend",
              required: T,
              error: G,
              children: u.intl.string(u.t.xNpFJy),
            }),
            (0, s.jsx)("div", {
              className: f.inputs,
              children: Z.map((e, t) => {
                let { key: n, input: a } = e;
                return (0, s.jsx)(
                  "div",
                  { tabIndex: t + 1, className: f[n], children: a },
                  n,
                );
              }),
            }),
          ],
        });
      });
      t.Z = N;
    },
    959776: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var s = n(913527),
        a = n.n(s),
        o = n(626135),
        i = n(981631);
      function l(e, t) {
        o.default.track(i.rMx.AGE_GATE_SUBMITTED, {
          dob: 18 > a()().diff(e, "years") ? e.format("YYYY-MM-DD") : null,
          dob_day: e.date(),
          dob_month: e.month() + 1,
          dob_year: e.year(),
          source: { section: t },
        });
      }
    },
    436046: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return x;
        },
      }),
        n(47120);
      var s = n(200651),
        a = n(192379),
        o = n(512722),
        i = n.n(o),
        l = n(442837),
        r = n(692547),
        c = n(481060),
        d = n(771308),
        u = n(13430),
        f = n(594174),
        _ = n(63063),
        p = n(981631),
        m = n(723359),
        h = n(388032),
        E = n(738871);
      function x(e) {
        let { onComplete: t, onClose: n } = e,
          [o, x] = a.useState(null),
          [N, T] = a.useState(null),
          [A, C] = a.useState(!1),
          b = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
          I = a.createRef();
        async function v(e) {
          e.preventDefault(),
            i()(null != o, "Cannot submit null birthday."),
            C(!0);
          try {
            await d.Av(o, m.L0.NEW_USER_FLOW), t();
          } catch (e) {
            if (null != e.body && null != e.body.date_of_birth)
              d.wE(m.L0.NEW_USER_FLOW), d.hp(m.L0.NEW_USER_FLOW), n();
            else {
              var s;
              (null == e
                ? void 0
                : null === (s = e.body) || void 0 === s
                  ? void 0
                  : s.username) != null
                ? T(h.intl.string(h.t["TGg/2t"]))
                : T(null == e ? void 0 : e.body.message);
            }
          }
          C(!1);
        }
        a.useEffect(() => {
          null != b && null != b.nsfwAllowed && t();
        }, [b, t]);
        let j = a.useCallback(
            (e) => {
              x(e);
            },
            [x],
          ),
          g = a.useCallback(() => {
            var e;
            null === (e = I.current) || void 0 === e || e.focus();
          }, [I]);
        return null == b
          ? null
          : (0, s.jsxs)("form", {
              className: E.content,
              onSubmit: v,
              children: [
                (0, s.jsx)(c.ClydeIcon, {
                  size: "custom",
                  width: 56,
                  height: 40,
                  className: E.logo,
                  color: r.Z.unsafe_rawColors.BRAND_500.css,
                }),
                (0, s.jsx)(c.Heading, {
                  className: E.title,
                  variant: "heading-xl/semibold",
                  children: h.intl.string(h.t.n7i7sr),
                }),
                (0, s.jsx)(c.Text, {
                  color: "text-normal",
                  className: E.description,
                  variant: "text-md/normal",
                  children: h.intl.format(h.t.fa8kW1, {
                    helpURL: _.Z.getArticleURL(p.BhN.AGE_GATE),
                  }),
                }),
                (0, s.jsx)(c.ThemeContextProvider, {
                  theme: p.BRd.LIGHT,
                  children: (0, s.jsx)(u.Z, {
                    required: !0,
                    autoFocus: !0,
                    wrapperClassName: E.formItem,
                    label: h.intl.string(h.t.rhBeKS),
                    name: "birthday",
                    onChange: j,
                    onPopulated: g,
                    error: N,
                    value: o,
                  }),
                }),
                (0, s.jsx)("div", {
                  className: E.footer,
                  children: (0, s.jsx)("div", {
                    className: E.buttonWrapper,
                    children: (0, s.jsx)(c.Button, {
                      buttonRef: I,
                      type: "submit",
                      size: c.Button.Sizes.LARGE,
                      submitting: A,
                      disabled: null == o,
                      fullWidth: !0,
                      children: h.intl.string(h.t.PDTjLC),
                    }),
                  }),
                }),
              ],
            });
      }
    },
    963209: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var s = n(200651);
      n(192379);
      var a = n(120356),
        o = n.n(a),
        i = n(481060),
        l = n(112831),
        r = n(388032),
        c = n(763443);
      function d(e) {
        let { onComplete: t } = e;
        return (0, s.jsxs)(i.Clickable, {
          className: c.container,
          onClick: t,
          children: [
            (0, s.jsx)(l.Z, {
              size: l.Z.Sizes.SIZE_24,
              className: c.title,
              children: r.intl.string(r.t["Deps4+"]),
            }),
            (0, s.jsx)(l.Z, {
              size: l.Z.Sizes.SIZE_24,
              className: o()(c.title, c.subtitle),
              children: r.intl.string(r.t.xv5g7O),
            }),
            (0, s.jsx)(i.Button, {
              color: i.Button.Colors.WHITE,
              onClick: t,
              children: r.intl.string(r.t["6X9YKC"]),
            }),
          ],
        });
      }
    },
    436457: function (e, t, n) {
      let s, a;
      n.d(t, {
        Z: function () {
          return T;
        },
      }),
        n(47120);
      var o = n(200651),
        i = n(192379),
        l = n(120356),
        r = n.n(l),
        c = n(481060),
        d = n(447543),
        u = n(230711),
        f = n(881052),
        _ = n(600164),
        p = n(112831),
        m = n(782605),
        h = n(981631),
        E = n(388032),
        x = n(830513);
      let N =
        ((s = window.GLOBAL_ENV.INVITE_HOST),
        (a = ""),
        null == s && ((s = location.host), (a = h.Z5c.INVITE(""))),
        "".concat(location.protocol, "//").concat(s).concat(a, "/"));
      function T(e) {
        let { onBack: t, onComplete: n, onConnect: s, isSlideReady: a } = e,
          [l, T] = i.useState(""),
          [A, C] = i.useState(!1),
          [b, I] = i.useState(null),
          v = i.useRef(null);
        i.useEffect(() => {
          var e;
          a && (null === (e = v.current) || void 0 === e || e.focus());
        }, [a]);
        let j = i.useCallback(
            (e) => {
              e.preventDefault();
              let t = l.trim();
              if ("" === t) {
                I(E.intl.string(E.t.IRq5am));
                return;
              }
              I(null), C(!0);
              let s = t.split("/"),
                a = s[s.length - 1];
              d.Z.resolveInvite(a, "Join Guild", { inputValue: t }).then(
                (e) => {
                  let { invite: t } = e;
                  if ((C(!1), null == t)) {
                    I(E.intl.string(E.t["GEYI+f"]));
                    return;
                  }
                  if (null != t.channel) {
                    let e = d.Z.getInviteContext("Join Guild", t);
                    d.Z.acceptInvite({
                      inviteKey: t.code,
                      context: e,
                      callback: (e) => {
                        n(), d.Z.transitionToInvite(e);
                      },
                    }).catch((e) => {
                      e instanceof f.yZ || e instanceof f.Hx
                        ? I((0, m.O)(e.code))
                        : I(E.intl.string(E.t.dDZRd3));
                    });
                  }
                },
                (e) => {
                  C(!1);
                  let t = new f.yZ(e);
                  I((0, m.O)(t.code));
                },
              );
            },
            [l, C, I, n],
          ),
          g = (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsxs)(c.ModalHeader, {
                className: x.header,
                direction: _.Z.Direction.VERTICAL,
                separator: !1,
                children: [
                  (0, o.jsx)(p.Z, {
                    className: x.title,
                    size: p.Z.Sizes.SIZE_24,
                    color: p.Z.Colors.HEADER_PRIMARY,
                    children: E.intl.string(E.t.riOUtL),
                  }),
                  (0, o.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: E.intl.string(E.t["7jub2t"]),
                  }),
                ],
              }),
              (0, o.jsxs)(c.ModalContent, {
                children: [
                  (0, o.jsx)("form", {
                    onSubmit: j,
                    className: x.inputForm,
                    children: (0, o.jsx)(c.FormItem, {
                      title: E.intl.string(E.t.qreV29),
                      error: b,
                      titleClassName: r()(x.formTitle, {
                        [x.error]: null != b,
                      }),
                      children: (0, o.jsx)(c.TextInput, {
                        value: l,
                        onChange: T,
                        className: x.input,
                        inputClassName: x.inputInner,
                        inputRef: v,
                      }),
                    }),
                  }),
                  (0, o.jsx)(c.Text, {
                    color: "header-secondary",
                    variant: "text-xs/normal",
                    children: E.intl.format(E.t.lHTZl5, {
                      examples: ""
                        .concat(N)
                        .concat("cool-people", ", ")
                        .concat("hTKzmak"),
                    }),
                  }),
                  (0, o.jsx)(c.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    className: x.connectCTA,
                    children: E.intl.format(E.t["8F/who"], {
                      onClick: () => {
                        s(), u.Z.open(h.oAB.CONNECTIONS);
                      },
                    }),
                  }),
                ],
              }),
            ],
          });
        return {
          content: g,
          footer: (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(c.Button, {
                color: c.Button.Colors.BRAND,
                onClick: j,
                disabled: 0 === l.length,
                submitting: A,
                children: E.intl.string(E.t.VJlc0d),
              }),
              (0, o.jsx)(c.Button, {
                className: x.__invalid_skipButton,
                look: c.Button.Looks.BLANK,
                size: c.Button.Sizes.MIN,
                onClick: t,
                children: E.intl.string(E.t["13/7kZ"]),
              }),
            ],
          }),
        };
      }
    },
    599219: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return F;
          },
        }),
        n(47120);
      var s = n(200651),
        a = n(192379),
        o = n(120356),
        i = n.n(o),
        l = n(990547),
        r = n(442837),
        c = n(481060),
        d = n(393238),
        u = n(600164),
        f = n(313201),
        _ = n(215292),
        p = n(382086),
        m = n(996453),
        h = n(446706),
        E = n(594174),
        x = n(626135),
        N = n(179645),
        T = n(436046),
        A = n(963209),
        C = n(436457),
        b = n(877758),
        I = n(701476),
        v = n(785997),
        j = n(981631),
        g = n(834891),
        G = n(675999),
        y = n(388032),
        S = n(456265);
      function F(e) {
        let t = (0, f.Dt)(),
          { onSlideChange: n, ...o } = e,
          { onClose: F } = o,
          [O, M] = a.useState(!1),
          D = (0, r.e7)([E.default], () => E.default.getCurrentUser()),
          L = null != D && null == D.nsfwAllowed,
          [k, Z] = a.useState(L ? v.F.AGE_GATE : v.F.CHOOSE_TEMPLATE),
          [R, B] = a.useState(null);
        a.useEffect(() => {
          n(O ? v.F.COMPLETE : k);
        }, [n, k, O]);
        let [U, P] = a.useState(null),
          [w, H] = a.useState(null),
          [W, z] = a.useState(!1),
          Y = (0, r.e7)([N.Z], () => N.Z.getType() === I.M5.INVITE_UNCLAIMED),
          V = a.useCallback(
            (e) => {
              H(e),
                Z(v.F.CREATION_INTENT),
                x.default.track(j.rMx.GUILD_TEMPLATE_SELECTED, {
                  template_name: e.label,
                  template_code: e.code,
                });
            },
            [H, Z],
          ),
          { content: J, footer: K } = (0, p.v)({
            hasFooter: !1,
            onBack: () => {
              H(null), Z(v.F.CHOOSE_TEMPLATE);
            },
            onCreationIntentChosen: (e) => {
              z(e === G.lr.COMMUNITY), Z(v.F.CUSTOMIZE_GUILD);
            },
          }),
          { content: q, footer: X } = (0, m.G)({
            guildTemplate: w,
            titleClassName: S.customizeGuildTitle,
            hasFooter: !1,
            onGuildCreated: (e) => {
              P(e),
                (null == w ? void 0 : w.id) === g.l.CREATE
                  ? Z(v.F.CHANNEL_PROMPT)
                  : M(!0);
            },
            onBack: () => {
              Z(v.F.CREATION_INTENT);
            },
            isSlideReady: R === v.F.CUSTOMIZE_GUILD,
            isCommunity: W,
          }),
          { content: Q, footer: $ } = (0, _.F)({
            createdGuildId: U,
            hasFooter: !1,
            onChannelPromptCompleted: () => {
              M(!0);
            },
            isSlideReady: R === v.F.CHANNEL_PROMPT,
          }),
          { content: ee, footer: et } = (0, C.Z)({
            onBack: () => Z(v.F.CHOOSE_TEMPLATE),
            onComplete: () => {
              F();
            },
            onConnect: F,
            isSlideReady: R === v.F.JOIN_GUILD,
          }),
          en = null;
        switch (k) {
          case v.F.CUSTOMIZE_GUILD:
            en = X;
            break;
          case v.F.CHANNEL_PROMPT:
            en = $;
            break;
          case v.F.JOIN_GUILD:
            en = et;
            break;
          case v.F.CREATION_INTENT:
            en = K;
        }
        let { ref: es, width: ea } = (0, d.Z)();
        if (O)
          return (0, s.jsx)(c.ModalRoot, {
            ...o,
            size: c.ModalSize.MEDIUM,
            className: i()(S.modal, S.completed),
            "aria-labelledby": t,
            children: (0, s.jsx)(A.Z, { onComplete: F }),
          });
        let eo = { impression_group: l.ImpressionGroups.GUILD_ADD_NUF };
        return (0, s.jsxs)(c.ModalRoot, {
          ...o,
          size: c.ModalSize.MEDIUM,
          className: S.modal,
          "aria-labelledby": t,
          children: [
            (0, s.jsx)("div", {
              className: S.sidebar,
              children: (0, s.jsx)(b.Z, { step: k }),
            }),
            (0, s.jsx)(c.ThemeProvider, {
              theme: j.BRd.LIGHT,
              children: (e) =>
                (0, s.jsxs)("div", {
                  className: i()(S.content, e),
                  ref: es,
                  children: [
                    (0, s.jsx)("div", {
                      className: S.slidesContainer,
                      children: (0, s.jsxs)(c.Slides, {
                        activeSlide: k,
                        onSlideReady: (e) => B(e),
                        centered: !1,
                        width: ea,
                        children: [
                          (0, s.jsx)(c.Slide, {
                            id: v.F.AGE_GATE,
                            children: (0, s.jsx)("div", {
                              className: S.container,
                              children: (0, s.jsx)(T.Z, {
                                onComplete: () => {
                                  Y ? F() : Z(v.F.CHOOSE_TEMPLATE);
                                },
                                onClose: F,
                              }),
                            }),
                          }),
                          (0, s.jsx)(c.Slide, {
                            id: v.F.CHOOSE_TEMPLATE,
                            impressionName: l.ImpressionNames.GUILD_ADD_LANDING,
                            impressionProperties: eo,
                            children: (0, s.jsx)("div", {
                              className: i()(S.container, S.shortFooter),
                              children: (0, s.jsx)(h.Z, {
                                className: S.templates,
                                onChooseTemplate: V,
                                isNewUser: !0,
                              }),
                            }),
                          }),
                          (0, s.jsx)(c.Slide, {
                            id: v.F.CREATION_INTENT,
                            impressionName:
                              l.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                            impressionProperties: eo,
                            children: (0, s.jsx)("div", {
                              className: i()(S.container, S.standardFooter),
                              children: J,
                            }),
                          }),
                          (0, s.jsx)(c.Slide, {
                            id: v.F.CUSTOMIZE_GUILD,
                            impressionName:
                              l.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                            impressionProperties: eo,
                            children: (0, s.jsx)("div", {
                              className: i()(S.container, S.standardFooter),
                              children: q,
                            }),
                          }),
                          (0, s.jsx)(c.Slide, {
                            id: v.F.CHANNEL_PROMPT,
                            impressionName:
                              l.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                            impressionProperties: eo,
                            children: (0, s.jsx)("div", {
                              className: i()(S.container, S.standardFooter),
                              children: Q,
                            }),
                          }),
                          (0, s.jsx)(c.Slide, {
                            id: v.F.JOIN_GUILD,
                            impressionName: l.ImpressionNames.GUILD_ADD_JOIN,
                            impressionProperties: eo,
                            children: (0, s.jsx)("div", {
                              className: i()(S.container, S.standardFooter),
                              children: ee,
                            }),
                          }),
                        ],
                      }),
                    }),
                    k !== v.F.AGE_GATE
                      ? (0, s.jsx)(c.ModalCloseButton, {
                          onClick: F,
                          className: S.closeButton,
                        })
                      : null,
                    k === v.F.CHOOSE_TEMPLATE
                      ? (0, s.jsx)(c.ModalFooter, {
                          justify: u.Z.Justify.BETWEEN,
                          className: i()(S.footer, S.join),
                          children: (0, s.jsx)(c.Anchor, {
                            className: S.joinCTA,
                            onClick: () => {
                              Z(v.F.JOIN_GUILD);
                            },
                            children: (0, s.jsxs)(c.Text, {
                              variant: "text-sm/medium",
                              className: S.joinCTA,
                              children: [
                                y.intl.string(y.t["N+Mi/f"]),
                                " ",
                                y.intl.string(y.t.yRjK4u),
                              ],
                            }),
                          }),
                        })
                      : null,
                    null != en
                      ? (0, s.jsx)(c.ModalFooter, {
                          justify: u.Z.Justify.BETWEEN,
                          className: S.footer,
                          children: en,
                        })
                      : null,
                  ],
                }),
            }),
          ],
        });
      }
    },
    877758: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var s = n(200651);
      n(192379);
      var a = n(120356),
        o = n.n(a),
        i = n(785997),
        l = n(954694);
      function r(e) {
        let { step: t } = e,
          n = t === i.F.AGE_GATE,
          a = t === i.F.CHOOSE_TEMPLATE || t === i.F.CREATION_INTENT,
          r = t === i.F.CUSTOMIZE_GUILD,
          c = t === i.F.CHANNEL_PROMPT || t === i.F.JOIN_GUILD,
          d = r || c,
          u = a || d;
        return (0, s.jsxs)("div", {
          className: l.sidebar,
          children: [
            (0, s.jsx)("div", { className: o()(l.step1, { [l.show]: n }) }),
            (0, s.jsx)("div", {
              className: o()(l.step24Clouds, { [l.show]: u }),
            }),
            (0, s.jsx)("div", {
              className: o()(l.step34Flag, { [l.show]: d }),
            }),
            (0, s.jsx)("div", {
              className: o()(l.step24Base, { [l.show]: u }),
            }),
            (0, s.jsx)("div", {
              className: o()(l.step24Ground, { [l.show]: u }),
            }),
            (0, s.jsx)("div", { className: o()(l.step2Base, { [l.show]: a }) }),
            (0, s.jsx)("div", {
              className: o()(l.step2Character, { [l.show]: a }),
            }),
            (0, s.jsx)("div", {
              className: o()(l.step34Base, { [l.show]: d }),
            }),
            (0, s.jsx)("div", {
              className: o()(l.step3Character, { [l.show]: r }),
            }),
            (0, s.jsx)("div", {
              className: o()(l.step4Character, { [l.show]: c }),
            }),
            (0, s.jsx)("div", {
              className: o()(l.step24Foreground, { [l.show]: u }),
            }),
          ],
        });
      }
    },
    510186: function (e, t, n) {
      e.exports = {
        iconContainer: "iconContainer_a2aef9",
        filledIcon: "filledIcon_a2aef9",
      };
    },
    535701: function (e, t, n) {
      n.r(
        (e.exports = {
          container: "container_a57e6a",
          title: "title_a57e6a",
          inputs: "inputs_a57e6a",
          day: "day_a57e6a",
          month: "month_a57e6a",
          year: "year_a57e6a",
          errors: "errors_a57e6a",
        }),
      );
    },
    85750: function (e, t, n) {
      e.exports = {
        header: "header_a49400",
        channelPrompt: "channelPrompt_a49400",
        closeButton: "closeButton_a49400",
        guildName: "guildName_a49400",
        title: "title_a49400",
        subtitle: "subtitle_a49400",
        skipButton: "skipButton_a49400",
      };
    },
    886844: function (e, t, n) {
      e.exports = {
        header: "header_f5507e",
        closeButton: "closeButton_f5507e",
        title: "title_f5507e",
        subtitle: "subtitle_f5507e",
        optionsList: "optionsList_f5507e",
        backButton: "backButton_f5507e",
        skip: "skip_f5507e",
      };
    },
    294550: function (e, t, n) {
      e.exports = {
        header: "header_c1ee6b",
        closeButton: "closeButton_c1ee6b",
        title: "title_c1ee6b",
        backButton: "backButton_c1ee6b",
        subtitle: "subtitle_c1ee6b",
        createGuild: "createGuild_c1ee6b",
        uploadIcon: "uploadIcon_c1ee6b",
        nameInput: "nameInput_c1ee6b",
        guidelines: "guidelines_c1ee6b",
        formItemSpaced: "formItemSpaced_c1ee6b",
      };
    },
    662291: function (e, t, n) {
      e.exports = {
        header: "header_fc9dae",
        closeButton: "closeButton_fc9dae",
        templatesList: "templatesList_fc9dae",
        title: "title_fc9dae",
        subtitle: "subtitle_fc9dae",
        optionHeader: "optionHeader_fc9dae",
        footer: "footer_fc9dae",
        footerTitle: "footerTitle_fc9dae",
        footerButton: "footerButton_fc9dae",
      };
    },
    673835: function (e, t, n) {
      e.exports = {
        container: "container_a47d49",
        icon: "icon_a47d49",
        text: "text_a47d49",
        arrow: "arrow_a47d49",
      };
    },
    738871: function (e, t, n) {
      e.exports = {
        content: "content_cbc80a",
        logo: "logo_cbc80a",
        title: "title_cbc80a",
        description: "description_cbc80a",
        formItem: "formItem_cbc80a",
        footer: "footer_cbc80a",
        buttonWrapper: "buttonWrapper_cbc80a",
      };
    },
    763443: function (e, t, n) {
      e.exports = {
        container: "container_f0ded7",
        title: "title_f0ded7",
        subtitle: "subtitle_f0ded7",
      };
    },
    830513: function (e, t, n) {
      e.exports = {
        header: "header_f3e944",
        title: "title_f3e944",
        inputForm: "inputForm_f3e944",
        formTitle: "formTitle_f3e944",
        error: "error_f3e944",
        input: "input_f3e944",
        inputInner: "inputInner_f3e944",
        connectCTA: "connectCTA_f3e944",
      };
    },
    456265: function (e, t, n) {
      e.exports = {
        modal: "modal_d5f0da",
        completed: "completed_d5f0da",
        sidebar: "sidebar_d5f0da",
        content: "content_d5f0da",
        slidesContainer: "slidesContainer_d5f0da",
        closeButton: "closeButton_d5f0da",
        container: "container_d5f0da",
        shortFooter: "shortFooter_d5f0da",
        standardFooter: "standardFooter_d5f0da",
        templates: "templates_d5f0da",
        footer: "footer_d5f0da",
        join: "join_d5f0da",
        customizeGuildTitle: "customizeGuildTitle_d5f0da",
        joinCTA: "joinCTA_d5f0da",
      };
    },
    954694: function (e, t, n) {
      e.exports = {
        sidebar: "sidebar_dc763f",
        show: "show_dc763f",
        step1: "step1_dc763f art_dc763f",
        step24Clouds: "step24Clouds_dc763f art_dc763f step12Animation_dc763f",
        step24Base: "step24Base_dc763f art_dc763f step12Animation_dc763f",
        step24Ground: "step24Ground_dc763f art_dc763f step12Animation_dc763f",
        step2Character:
          "step2Character_dc763f art_dc763f step24Animation_dc763f",
        step2Base: "step2Base_dc763f art_dc763f step12Animation_dc763f",
        step34Base: "step34Base_dc763f art_dc763f step24Animation_dc763f",
        step34Flag: "step34Flag_dc763f art_dc763f step24Animation_dc763f",
        step3Character:
          "step3Character_dc763f art_dc763f step24Animation_dc763f",
        step4Character:
          "step4Character_dc763f art_dc763f step24Animation_dc763f",
        step24Foreground:
          "step24Foreground_dc763f art_dc763f step12Animation_dc763f",
      };
    },
  },
]);
//# sourceMappingURL=181b57d97a1ad3db2a8f.js.map
