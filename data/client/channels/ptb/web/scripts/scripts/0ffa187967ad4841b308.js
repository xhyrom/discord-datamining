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
    771308: function (e, t, s) {
      s.d(t, {
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
      var a = s(544891),
        n = s(570140),
        o = s(959776),
        l = s(626135),
        r = s(723359),
        i = s(981631);
      function c(e, t) {
        return (
          (0, o.Z)(e, t),
          l.default.track(i.rMx.AGE_GATE_ACTION, {
            source: t,
            action: r.Al.AGE_GATE_SUBMITTED,
          }),
          a.tn
            .patch({
              url: i.ANM.ME,
              oldFormErrors: !0,
              body: { date_of_birth: e.format("YYYY-MM-DD") },
            })
            .then((e) => {
              let s = e.body;
              n.Z.dispatch({ type: "CURRENT_USER_UPDATE", user: s }),
                l.default.track(i.rMx.AGE_GATE_ACTION, {
                  source: t,
                  action: r.Al.AGE_GATE_SUCCESS,
                });
            })
        );
      }
      function d(e) {
        n.Z.dispatch({ type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION" }),
          l.default.track(i.rMx.AGE_GATE_ACTION, {
            source: e,
            action: r.Al.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION,
          });
      }
      function u(e) {
        n.Z.dispatch({ type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER" }),
          l.default.track(i.rMx.AGE_GATE_ACTION, {
            source: e,
            action: r.Al.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER,
          });
      }
    },
    13430: function (e, t, s) {
      s(47120), s(653041);
      var a = s(735250),
        n = s(470079),
        o = s(120356),
        l = s.n(o),
        r = s(913527),
        i = s.n(r),
        c = s(481060),
        d = s(285888),
        u = s(689938),
        _ = s(535701);
      let f = i()().localeData().months(),
        E = Array.from(Array(31).keys()).map((e) => ({
          value: e + 1,
          label: "".concat(e + 1),
        })),
        m = Array.from(Array(12).keys()).map((e) => ({
          value: e + 1,
          label: f[e],
        })),
        p = /[a-zA-Z0-9]/;
      function h(e) {
        let { options: t, selectOption: s, children: o } = e,
          [l, r] = n.useState("");
        n.useEffect(() => {
          if ("" !== l) {
            let e = setTimeout(() => r(""), 1e3);
            return () => clearTimeout(e);
          }
        }, [l, r]);
        let i = n.useCallback(
          (e) => {
            if (p.test(e.key)) {
              let a = "".concat(l).concat(e.key.toLowerCase()),
                n = t.find((e) => e.label.toLowerCase().startsWith(a));
              null != n && s(n.value), r(a);
            }
          },
          [s, r, l, t],
        );
        return (0, a.jsx)("div", { onKeyDown: i, children: o });
      }
      function N() {
        let e = i()().localeData().longDateFormat("L"),
          t = e.indexOf("D"),
          s = e.indexOf("M"),
          a = e.indexOf("Y");
        return (
          (-1 === t || -1 === s || -1 === a) && ((t = 0), (s = 1), (a = 2)),
          [
            { index: t, type: "day" },
            { index: s, type: "month" },
            { index: a, type: "year" },
          ].sort((e, t) => (e.index < t.index ? -1 : 1))
        );
      }
      let T = n.forwardRef(function (e, t) {
        let {
            value: s,
            wrapperClassName: o,
            onChange: r,
            onPopulated: f,
            error: p,
            autoFocus: T,
            required: A,
          } = e,
          {
            day: x,
            setDay: I,
            month: C,
            setMonth: b,
            year: M,
            setYear: v,
          } = (function (e) {
            let t = null,
              s = null,
              a = null;
            null != e && ((t = e.date()), (s = e.month() + 1), (a = e.year()));
            let [o, l] = n.useState(t),
              [r, i] = n.useState(s),
              [c, d] = n.useState(a);
            return {
              day: o,
              setDay: l,
              month: r,
              setMonth: i,
              year: c,
              setYear: d,
            };
          })(s),
          G = n.useMemo(
            () =>
              null != x && null != C && null != M
                ? i()("".concat(x, "/").concat(C, "/").concat(M), "DD/MM/YYYY")
                : null,
            [x, C, M],
          );
        n.useEffect(() => {
          r((null == G ? void 0 : G.isValid()) ? G : null);
        }, [G, r]);
        let O = p;
        null != G &&
          !G.isValid() &&
          (O = u.Z.Messages.AGE_GATE_INVALID_BIRTHDAY);
        let j = (function () {
            let e = new Date().getFullYear(),
              t = n.useRef(
                Array.from(Array(150).keys()).map((t) => ({
                  value: e - t - 3,
                  label: "".concat(e - t - 3),
                })),
              );
            return (
              n.useEffect(() => {
                t.current = Array.from(Array(150).keys()).map((t) => ({
                  value: e - t - 3,
                  label: "".concat(e - t - 3),
                }));
              }, [e]),
              t.current
            );
          })(),
          [S, R] = n.useState(T ? 0 : -1),
          Z = n.useRef(null),
          g = n.useRef(null),
          D = n.useRef(null),
          L = n.useMemo(N, []),
          F = n.useCallback(() => {
            var e, t, s, a;
            switch (null === (e = L[S]) || void 0 === e ? void 0 : e.type) {
              case "day":
                null === (t = Z.current) || void 0 === t || t.focus();
                break;
              case "month":
                null === (s = g.current) || void 0 === s || s.focus();
                break;
              case "year":
                null === (a = D.current) || void 0 === a || a.focus();
            }
          }, [S, Z, g, D, L]);
        n.useEffect(() => {
          setTimeout(F, 500);
        }, []),
          n.useEffect(() => {
            if (S >= L.length) {
              null == f || f();
              return;
            }
            F();
          }, [S, F]);
        let y = [];
        for (let e = 0; e < 3; e++) {
          let { type: t } = L[e];
          switch (t) {
            case "day":
              y.push({
                key: "day",
                input: (0, a.jsx)(h, {
                  options: E,
                  selectOption: I,
                  children: (0, a.jsx)(d.Z, {
                    ref: Z,
                    className: _.__invalid_inputDay,
                    "aria-label": u.Z.Messages.AGE_GATE_DOB_DAY,
                    menuPlacement: d.Z.MenuPlacements.TOP,
                    placeholder: (0, a.jsx)("span", {
                      "aria-hidden": !0,
                      children: u.Z.Messages.AGE_GATE_DOB_DAY,
                    }),
                    options: E,
                    value: x,
                    onChange: (t) => {
                      let { value: s } = t;
                      I(s), R(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
              break;
            case "month":
              y.push({
                key: "month",
                input: (0, a.jsx)(h, {
                  options: m,
                  selectOption: b,
                  children: (0, a.jsx)(d.Z, {
                    ref: g,
                    className: _.__invalid_inputMonth,
                    "aria-label": u.Z.Messages.AGE_GATE_DOB_MONTH,
                    menuPlacement: d.Z.MenuPlacements.TOP,
                    placeholder: (0, a.jsx)("span", {
                      "aria-hidden": !0,
                      children: u.Z.Messages.AGE_GATE_DOB_MONTH,
                    }),
                    options: m,
                    value: C,
                    onChange: (t) => {
                      let { value: s } = t;
                      b(s), R(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
              break;
            case "year":
              y.push({
                key: "year",
                input: (0, a.jsx)(h, {
                  options: j,
                  selectOption: v,
                  children: (0, a.jsx)(d.Z, {
                    ref: D,
                    className: _.__invalid_inputYear,
                    "aria-label": u.Z.Messages.AGE_GATE_DOB_YEAR,
                    menuPlacement: d.Z.MenuPlacements.TOP,
                    placeholder: (0, a.jsx)("span", {
                      "aria-hidden": !0,
                      children: u.Z.Messages.AGE_GATE_DOB_YEAR,
                    }),
                    options: j,
                    value: M,
                    onChange: (t) => {
                      let { value: s } = t;
                      v(s), R(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
          }
        }
        return (0, a.jsxs)("fieldset", {
          className: l()(_.container, o),
          children: [
            (0, a.jsx)(c.FormTitle, {
              tag: "legend",
              required: A,
              error: O,
              children: u.Z.Messages.AGE_GATE_DATE_OF_BIRTH,
            }),
            (0, a.jsx)("div", {
              className: _.inputs,
              children: y.map((e, t) => {
                let { key: s, input: n } = e;
                return (0, a.jsx)(
                  "div",
                  { tabIndex: t + 1, className: _[s], children: n },
                  s,
                );
              }),
            }),
          ],
        });
      });
      t.Z = T;
    },
    959776: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return r;
        },
      });
      var a = s(913527),
        n = s.n(a),
        o = s(626135),
        l = s(981631);
      function r(e, t) {
        o.default.track(l.rMx.AGE_GATE_SUBMITTED, {
          dob: 18 > n()().diff(e, "years") ? e.format("YYYY-MM-DD") : null,
          dob_day: e.date(),
          dob_month: e.month() + 1,
          dob_year: e.year(),
          source: { section: t },
        });
      }
    },
    436046: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return N;
        },
      }),
        s(47120);
      var a = s(735250),
        n = s(470079),
        o = s(512722),
        l = s.n(o),
        r = s(442837),
        i = s(692547),
        c = s(481060),
        d = s(771308),
        u = s(13430),
        _ = s(594174),
        f = s(63063),
        E = s(981631),
        m = s(723359),
        p = s(689938),
        h = s(738871);
      function N(e) {
        let { onComplete: t, onClose: s } = e,
          [o, N] = n.useState(null),
          [T, A] = n.useState(null),
          [x, I] = n.useState(!1),
          C = (0, r.e7)([_.default], () => _.default.getCurrentUser()),
          b = n.createRef();
        async function M(e) {
          e.preventDefault(),
            l()(null != o, "Cannot submit null birthday."),
            I(!0);
          try {
            await d.Av(o, m.L0.NEW_USER_FLOW), t();
          } catch (e) {
            if (null != e.body && null != e.body.date_of_birth)
              d.wE(m.L0.NEW_USER_FLOW), d.hp(m.L0.NEW_USER_FLOW), s();
            else {
              var a;
              (null == e
                ? void 0
                : null === (a = e.body) || void 0 === a
                  ? void 0
                  : a.username) != null
                ? A(p.Z.Messages.USER_SETTINGS_UPDATE_FAILURE)
                : A(null == e ? void 0 : e.body.message);
            }
          }
          I(!1);
        }
        n.useEffect(() => {
          null != C && null != C.nsfwAllowed && t();
        }, [C, t]);
        let v = n.useCallback(
            (e) => {
              N(e);
            },
            [N],
          ),
          G = n.useCallback(() => {
            var e;
            null === (e = b.current) || void 0 === e || e.focus();
          }, [b]);
        return null == C
          ? null
          : (0, a.jsxs)("form", {
              className: h.content,
              onSubmit: M,
              children: [
                (0, a.jsx)(c.ClydeIcon, {
                  size: "custom",
                  width: 56,
                  height: 40,
                  className: h.logo,
                  color: i.Z.unsafe_rawColors.BRAND_500.css,
                }),
                (0, a.jsx)(c.Heading, {
                  className: h.title,
                  variant: "heading-xl/semibold",
                  children: p.Z.Messages.NUF_JOIN_SERVER_TITLE_2,
                }),
                (0, a.jsx)(c.Text, {
                  color: "text-normal",
                  className: h.description,
                  variant: "text-md/normal",
                  children: p.Z.Messages.NUF_AGE_GATE_BODY.format({
                    helpURL: f.Z.getArticleURL(E.BhN.AGE_GATE),
                  }),
                }),
                (0, a.jsx)(c.ThemeContextProvider, {
                  theme: E.BRd.LIGHT,
                  children: (0, a.jsx)(u.Z, {
                    required: !0,
                    autoFocus: !0,
                    wrapperClassName: h.formItem,
                    label: p.Z.Messages.AGE_GATE_YOUR_BIRTHDAY,
                    name: "birthday",
                    onChange: v,
                    onPopulated: G,
                    error: T,
                    value: o,
                  }),
                }),
                (0, a.jsx)("div", {
                  className: h.footer,
                  children: (0, a.jsx)("div", {
                    className: h.buttonWrapper,
                    children: (0, a.jsx)(c.Button, {
                      buttonRef: b,
                      type: "submit",
                      size: c.Button.Sizes.LARGE,
                      submitting: x,
                      disabled: null == o,
                      fullWidth: !0,
                      children: p.Z.Messages.NEXT,
                    }),
                  }),
                }),
              ],
            });
      }
    },
    963209: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return d;
        },
      });
      var a = s(735250);
      s(470079);
      var n = s(120356),
        o = s.n(n),
        l = s(481060),
        r = s(112831),
        i = s(689938),
        c = s(763443);
      function d(e) {
        let { onComplete: t } = e;
        return (0, a.jsxs)(l.Clickable, {
          className: c.container,
          onClick: t,
          children: [
            (0, a.jsx)(r.Z, {
              size: r.Z.Sizes.SIZE_24,
              className: c.title,
              children: i.Z.Messages.NUF_COMPLETE_TITLE,
            }),
            (0, a.jsx)(r.Z, {
              size: r.Z.Sizes.SIZE_24,
              className: o()(c.title, c.subtitle),
              children: i.Z.Messages.NUF_COMPLETE_SUBTITLE,
            }),
            (0, a.jsx)(l.Button, {
              color: l.Button.Colors.WHITE,
              onClick: t,
              children: i.Z.Messages.NUF_COMPLETE_CTA,
            }),
          ],
        });
      }
    },
    436457: function (e, t, s) {
      let a, n;
      s.d(t, {
        Z: function () {
          return A;
        },
      }),
        s(47120);
      var o = s(735250),
        l = s(470079),
        r = s(120356),
        i = s.n(r),
        c = s(481060),
        d = s(447543),
        u = s(230711),
        _ = s(881052),
        f = s(600164),
        E = s(112831),
        m = s(782605),
        p = s(981631),
        h = s(689938),
        N = s(830513);
      let T =
        ((a = window.GLOBAL_ENV.INVITE_HOST),
        (n = ""),
        null == a && ((a = location.host), (n = p.Z5c.INVITE(""))),
        "".concat(location.protocol, "//").concat(a).concat(n, "/"));
      function A(e) {
        let { onBack: t, onComplete: s, onConnect: a, isSlideReady: n } = e,
          [r, A] = l.useState(""),
          [x, I] = l.useState(!1),
          [C, b] = l.useState(null),
          M = l.useRef(null);
        l.useEffect(() => {
          var e;
          n && (null === (e = M.current) || void 0 === e || e.focus());
        }, [n]);
        let v = l.useCallback(
            (e) => {
              e.preventDefault();
              let t = r.trim();
              if ("" === t) {
                b(h.Z.Messages.INVALID_INVITE_LINK_ERROR);
                return;
              }
              b(null), I(!0);
              let a = t.split("/"),
                n = a[a.length - 1];
              d.Z.resolveInvite(n, "Join Guild", { inputValue: t }).then(
                (e) => {
                  let { invite: t } = e;
                  if ((I(!1), null == t)) {
                    b(h.Z.Messages.INSTANT_INVITE_EXPIRED);
                    return;
                  }
                  if (null != t.channel) {
                    let e = d.Z.getInviteContext("Join Guild", t);
                    d.Z.acceptInvite({
                      inviteKey: t.code,
                      context: e,
                      callback: (e) => {
                        s(), d.Z.transitionToInvite(e);
                      },
                    }).catch((e) => {
                      e instanceof _.yZ || e instanceof _.Hx
                        ? b((0, m.O)(e.code))
                        : b(h.Z.Messages.INVITE_MODAL_ERROR_DEFAULT);
                    });
                  }
                },
                (e) => {
                  I(!1);
                  let t = new _.yZ(e);
                  b((0, m.O)(t.code));
                },
              );
            },
            [r, I, b, s],
          ),
          G = (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsxs)(c.ModalHeader, {
                className: N.header,
                direction: f.Z.Direction.VERTICAL,
                separator: !1,
                children: [
                  (0, o.jsx)(E.Z, {
                    className: N.title,
                    size: E.Z.Sizes.SIZE_24,
                    color: E.Z.Colors.HEADER_PRIMARY,
                    children: h.Z.Messages.JOIN_SERVER_TITLE,
                  }),
                  (0, o.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: h.Z.Messages.JOIN_SERVER_DESCRIPTION_NUF,
                  }),
                ],
              }),
              (0, o.jsxs)(c.ModalContent, {
                children: [
                  (0, o.jsx)("form", {
                    onSubmit: v,
                    className: N.inputForm,
                    children: (0, o.jsx)(c.FormItem, {
                      title: h.Z.Messages.FORM_LABEL_INVITE_LINK,
                      error: C,
                      titleClassName: i()(N.formTitle, {
                        [N.error]: null != C,
                      }),
                      children: (0, o.jsx)(c.TextInput, {
                        value: r,
                        onChange: A,
                        className: N.input,
                        inputClassName: N.inputInner,
                        inputRef: M,
                      }),
                    }),
                  }),
                  (0, o.jsx)(c.Text, {
                    color: "header-secondary",
                    variant: "text-xs/normal",
                    children: h.Z.Messages.JOIN_SERVER_EXAMPLES.format({
                      examples: ""
                        .concat(T)
                        .concat("cool-people", ", ")
                        .concat("hTKzmak"),
                    }),
                  }),
                  (0, o.jsx)(c.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    className: N.connectCTA,
                    children: h.Z.Messages.JOIN_GUILD_CONNECT.format({
                      onClick: () => {
                        a(), u.Z.open(p.oAB.CONNECTIONS);
                      },
                    }),
                  }),
                ],
              }),
            ],
          });
        return {
          content: G,
          footer: (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(c.Button, {
                color: c.Button.Colors.BRAND,
                onClick: v,
                disabled: 0 === r.length,
                submitting: x,
                children: h.Z.Messages.JOIN,
              }),
              (0, o.jsx)(c.Button, {
                className: N.__invalid_skipButton,
                look: c.Button.Looks.BLANK,
                size: c.Button.Sizes.MIN,
                onClick: t,
                children: h.Z.Messages.BACK,
              }),
            ],
          }),
        };
      }
    },
    599219: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return R;
          },
        }),
        s(47120);
      var a = s(735250),
        n = s(470079),
        o = s(120356),
        l = s.n(o),
        r = s(990547),
        i = s(442837),
        c = s(481060),
        d = s(393238),
        u = s(600164),
        _ = s(313201),
        f = s(215292),
        E = s(382086),
        m = s(996453),
        p = s(446706),
        h = s(594174),
        N = s(626135),
        T = s(179645),
        A = s(436046),
        x = s(963209),
        I = s(436457),
        C = s(877758),
        b = s(701476),
        M = s(785997),
        v = s(981631),
        G = s(834891),
        O = s(675999),
        j = s(689938),
        S = s(456265);
      function R(e) {
        let t = (0, _.Dt)(),
          { onSlideChange: s, ...o } = e,
          { onClose: R } = o,
          [Z, g] = n.useState(!1),
          D = (0, i.e7)([h.default], () => h.default.getCurrentUser()),
          L = null != D && null == D.nsfwAllowed,
          [F, y] = n.useState(L ? M.F.AGE_GATE : M.F.CHOOSE_TEMPLATE),
          [B, U] = n.useState(null);
        n.useEffect(() => {
          s(Z ? M.F.COMPLETE : F);
        }, [s, F, Z]);
        let [k, P] = n.useState(null),
          [w, H] = n.useState(null),
          [Y, V] = n.useState(!1),
          z = (0, i.e7)([T.Z], () => T.Z.getType() === b.M5.INVITE_UNCLAIMED),
          J = n.useCallback(
            (e) => {
              H(e),
                y(M.F.CREATION_INTENT),
                N.default.track(v.rMx.GUILD_TEMPLATE_SELECTED, {
                  template_name: e.label,
                  template_code: e.code,
                });
            },
            [H, y],
          ),
          { content: W, footer: K } = (0, E.v)({
            hasFooter: !1,
            onBack: () => {
              H(null), y(M.F.CHOOSE_TEMPLATE);
            },
            onCreationIntentChosen: (e) => {
              V(e === O.lr.COMMUNITY), y(M.F.CUSTOMIZE_GUILD);
            },
          }),
          { content: X, footer: q } = (0, m.G)({
            guildTemplate: w,
            titleClassName: S.customizeGuildTitle,
            hasFooter: !1,
            onGuildCreated: (e) => {
              P(e),
                (null == w ? void 0 : w.id) === G.l.CREATE
                  ? y(M.F.CHANNEL_PROMPT)
                  : g(!0);
            },
            onBack: () => {
              y(M.F.CREATION_INTENT);
            },
            isSlideReady: B === M.F.CUSTOMIZE_GUILD,
            isCommunity: Y,
          }),
          { content: Q, footer: $ } = (0, f.F)({
            createdGuildId: k,
            hasFooter: !1,
            onChannelPromptCompleted: () => {
              g(!0);
            },
            isSlideReady: B === M.F.CHANNEL_PROMPT,
          }),
          { content: ee, footer: et } = (0, I.Z)({
            onBack: () => y(M.F.CHOOSE_TEMPLATE),
            onComplete: () => {
              R();
            },
            onConnect: R,
            isSlideReady: B === M.F.JOIN_GUILD,
          }),
          es = null;
        switch (F) {
          case M.F.CUSTOMIZE_GUILD:
            es = q;
            break;
          case M.F.CHANNEL_PROMPT:
            es = $;
            break;
          case M.F.JOIN_GUILD:
            es = et;
            break;
          case M.F.CREATION_INTENT:
            es = K;
        }
        let { ref: ea, width: en } = (0, d.Z)();
        if (Z)
          return (0, a.jsx)(c.ModalRoot, {
            ...o,
            size: c.ModalSize.MEDIUM,
            className: l()(S.modal, S.completed),
            "aria-labelledby": t,
            children: (0, a.jsx)(x.Z, { onComplete: R }),
          });
        let eo = { impression_group: r.ImpressionGroups.GUILD_ADD_NUF };
        return (0, a.jsxs)(c.ModalRoot, {
          ...o,
          size: c.ModalSize.MEDIUM,
          className: S.modal,
          "aria-labelledby": t,
          children: [
            (0, a.jsx)("div", {
              className: S.sidebar,
              children: (0, a.jsx)(C.Z, { step: F }),
            }),
            (0, a.jsx)(c.ThemeProvider, {
              theme: v.BRd.LIGHT,
              children: (e) =>
                (0, a.jsxs)("div", {
                  className: l()(S.content, e),
                  ref: ea,
                  children: [
                    (0, a.jsx)("div", {
                      className: S.slidesContainer,
                      children: (0, a.jsxs)(c.Slides, {
                        activeSlide: F,
                        onSlideReady: (e) => U(e),
                        centered: !1,
                        width: en,
                        children: [
                          (0, a.jsx)(c.Slide, {
                            id: M.F.AGE_GATE,
                            children: (0, a.jsx)("div", {
                              className: S.container,
                              children: (0, a.jsx)(A.Z, {
                                onComplete: () => {
                                  z ? R() : y(M.F.CHOOSE_TEMPLATE);
                                },
                                onClose: R,
                              }),
                            }),
                          }),
                          (0, a.jsx)(c.Slide, {
                            id: M.F.CHOOSE_TEMPLATE,
                            impressionName: r.ImpressionNames.GUILD_ADD_LANDING,
                            impressionProperties: eo,
                            children: (0, a.jsx)("div", {
                              className: l()(S.container, S.shortFooter),
                              children: (0, a.jsx)(p.Z, {
                                className: S.templates,
                                onChooseTemplate: J,
                                isNewUser: !0,
                              }),
                            }),
                          }),
                          (0, a.jsx)(c.Slide, {
                            id: M.F.CREATION_INTENT,
                            impressionName:
                              r.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                            impressionProperties: eo,
                            children: (0, a.jsx)("div", {
                              className: l()(S.container, S.standardFooter),
                              children: W,
                            }),
                          }),
                          (0, a.jsx)(c.Slide, {
                            id: M.F.CUSTOMIZE_GUILD,
                            impressionName:
                              r.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                            impressionProperties: eo,
                            children: (0, a.jsx)("div", {
                              className: l()(S.container, S.standardFooter),
                              children: X,
                            }),
                          }),
                          (0, a.jsx)(c.Slide, {
                            id: M.F.CHANNEL_PROMPT,
                            impressionName:
                              r.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                            impressionProperties: eo,
                            children: (0, a.jsx)("div", {
                              className: l()(S.container, S.standardFooter),
                              children: Q,
                            }),
                          }),
                          (0, a.jsx)(c.Slide, {
                            id: M.F.JOIN_GUILD,
                            impressionName: r.ImpressionNames.GUILD_ADD_JOIN,
                            impressionProperties: eo,
                            children: (0, a.jsx)("div", {
                              className: l()(S.container, S.standardFooter),
                              children: ee,
                            }),
                          }),
                        ],
                      }),
                    }),
                    F !== M.F.AGE_GATE
                      ? (0, a.jsx)(c.ModalCloseButton, {
                          onClick: R,
                          className: S.closeButton,
                        })
                      : null,
                    F === M.F.CHOOSE_TEMPLATE
                      ? (0, a.jsx)(c.ModalFooter, {
                          justify: u.Z.Justify.BETWEEN,
                          className: l()(S.footer, S.join),
                          children: (0, a.jsx)(c.Anchor, {
                            className: S.joinCTA,
                            onClick: () => {
                              y(M.F.JOIN_GUILD);
                            },
                            children: (0, a.jsxs)(c.Text, {
                              variant: "text-sm/medium",
                              className: S.joinCTA,
                              children: [
                                j.Z.Messages.NUF_HAVE_AN_INVITE_ALREADY,
                                " ",
                                j.Z.Messages.JOIN_SERVER_BUTTON_CTA,
                              ],
                            }),
                          }),
                        })
                      : null,
                    null != es
                      ? (0, a.jsx)(c.ModalFooter, {
                          justify: u.Z.Justify.BETWEEN,
                          className: S.footer,
                          children: es,
                        })
                      : null,
                  ],
                }),
            }),
          ],
        });
      }
    },
    877758: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return i;
        },
      });
      var a = s(735250);
      s(470079);
      var n = s(120356),
        o = s.n(n),
        l = s(785997),
        r = s(954694);
      function i(e) {
        let { step: t } = e,
          s = t === l.F.AGE_GATE,
          n = t === l.F.CHOOSE_TEMPLATE || t === l.F.CREATION_INTENT,
          i = t === l.F.CUSTOMIZE_GUILD,
          c = t === l.F.CHANNEL_PROMPT || t === l.F.JOIN_GUILD,
          d = i || c,
          u = n || d;
        return (0, a.jsxs)("div", {
          className: r.sidebar,
          children: [
            (0, a.jsx)("div", { className: o()(r.step1, { [r.show]: s }) }),
            (0, a.jsx)("div", {
              className: o()(r.step24Clouds, { [r.show]: u }),
            }),
            (0, a.jsx)("div", {
              className: o()(r.step34Flag, { [r.show]: d }),
            }),
            (0, a.jsx)("div", {
              className: o()(r.step24Base, { [r.show]: u }),
            }),
            (0, a.jsx)("div", {
              className: o()(r.step24Ground, { [r.show]: u }),
            }),
            (0, a.jsx)("div", { className: o()(r.step2Base, { [r.show]: n }) }),
            (0, a.jsx)("div", {
              className: o()(r.step2Character, { [r.show]: n }),
            }),
            (0, a.jsx)("div", {
              className: o()(r.step34Base, { [r.show]: d }),
            }),
            (0, a.jsx)("div", {
              className: o()(r.step3Character, { [r.show]: i }),
            }),
            (0, a.jsx)("div", {
              className: o()(r.step4Character, { [r.show]: c }),
            }),
            (0, a.jsx)("div", {
              className: o()(r.step24Foreground, { [r.show]: u }),
            }),
          ],
        });
      }
    },
    510186: function (e, t, s) {
      e.exports = {
        iconContainer: "iconContainer_a2aef9",
        filledIcon: "filledIcon_a2aef9",
      };
    },
    535701: function (e, t, s) {
      s.r(
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
    85750: function (e, t, s) {
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
    886844: function (e, t, s) {
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
    294550: function (e, t, s) {
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
    662291: function (e, t, s) {
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
    673835: function (e, t, s) {
      e.exports = {
        container: "container_a47d49",
        icon: "icon_a47d49",
        text: "text_a47d49",
        arrow: "arrow_a47d49",
      };
    },
    738871: function (e, t, s) {
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
    763443: function (e, t, s) {
      e.exports = {
        container: "container_f0ded7",
        title: "title_f0ded7",
        subtitle: "subtitle_f0ded7",
      };
    },
    830513: function (e, t, s) {
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
    456265: function (e, t, s) {
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
    954694: function (e, t, s) {
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
//# sourceMappingURL=0ffa187967ad4841b308.js.map
