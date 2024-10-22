"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["1716"],
  {
    462991: function (e) {
      e.exports = "/assets/1a8b06e1c2b7a9bb1946.svg";
    },
    771308: function (e, t, a) {
      a.d(t, {
        Av: function () {
          return u;
        },
        hp: function () {
          return d;
        },
        wE: function () {
          return c;
        },
      });
      var n = a(544891),
        l = a(570140),
        s = a(959776),
        r = a(626135),
        o = a(723359),
        i = a(981631);
      function u(e, t) {
        return (
          (0, s.Z)(e, t),
          r.default.track(i.rMx.AGE_GATE_ACTION, {
            source: t,
            action: o.Al.AGE_GATE_SUBMITTED,
          }),
          n.tn
            .patch({
              url: i.ANM.ME,
              oldFormErrors: !0,
              body: { date_of_birth: e.format("YYYY-MM-DD") },
            })
            .then((e) => {
              let a = e.body;
              l.Z.dispatch({ type: "CURRENT_USER_UPDATE", user: a }),
                r.default.track(i.rMx.AGE_GATE_ACTION, {
                  source: t,
                  action: o.Al.AGE_GATE_SUCCESS,
                });
            })
        );
      }
      function c(e) {
        l.Z.dispatch({ type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION" }),
          r.default.track(i.rMx.AGE_GATE_ACTION, {
            source: e,
            action: o.Al.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION,
          });
      }
      function d(e) {
        l.Z.dispatch({ type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER" }),
          r.default.track(i.rMx.AGE_GATE_ACTION, {
            source: e,
            action: o.Al.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER,
          });
      }
    },
    13430: function (e, t, a) {
      a(47120), a(653041);
      var n = a(200651),
        l = a(192379),
        s = a(120356),
        r = a.n(s),
        o = a(913527),
        i = a.n(o),
        u = a(481060),
        c = a(285888),
        d = a(689938),
        _ = a(535701);
      let E = i()().localeData().months(),
        A = Array.from(Array(31).keys()).map((e) => ({
          value: e + 1,
          label: "".concat(e + 1),
        })),
        f = Array.from(Array(12).keys()).map((e) => ({
          value: e + 1,
          label: E[e],
        })),
        h = /[a-zA-Z0-9]/;
      function T(e) {
        let { options: t, selectOption: a, children: s } = e,
          [r, o] = l.useState("");
        l.useEffect(() => {
          if ("" !== r) {
            let e = setTimeout(() => o(""), 1e3);
            return () => clearTimeout(e);
          }
        }, [r, o]);
        let i = l.useCallback(
          (e) => {
            if (h.test(e.key)) {
              let n = "".concat(r).concat(e.key.toLowerCase()),
                l = t.find((e) => e.label.toLowerCase().startsWith(n));
              null != l && a(l.value), o(n);
            }
          },
          [a, o, r, t],
        );
        return (0, n.jsx)("div", { onKeyDown: i, children: s });
      }
      function G() {
        let e = i()().localeData().longDateFormat("L"),
          t = e.indexOf("D"),
          a = e.indexOf("M"),
          n = e.indexOf("Y");
        return (
          (-1 === t || -1 === a || -1 === n) && ((t = 0), (a = 1), (n = 2)),
          [
            { index: t, type: "day" },
            { index: a, type: "month" },
            { index: n, type: "year" },
          ].sort((e, t) => (e.index < t.index ? -1 : 1))
        );
      }
      let m = l.forwardRef(function (e, t) {
        let {
            value: a,
            wrapperClassName: s,
            onChange: o,
            onPopulated: E,
            error: h,
            autoFocus: m,
            required: M,
          } = e,
          {
            day: y,
            setDay: N,
            month: p,
            setMonth: R,
            year: x,
            setYear: b,
          } = (function (e) {
            let t = null,
              a = null,
              n = null;
            null != e && ((t = e.date()), (a = e.month() + 1), (n = e.year()));
            let [s, r] = l.useState(t),
              [o, i] = l.useState(a),
              [u, c] = l.useState(n);
            return {
              day: s,
              setDay: r,
              month: o,
              setMonth: i,
              year: u,
              setYear: c,
            };
          })(a),
          g = l.useMemo(
            () =>
              null != y && null != p && null != x
                ? i()("".concat(y, "/").concat(p, "/").concat(x), "DD/MM/YYYY")
                : null,
            [y, p, x],
          );
        l.useEffect(() => {
          o((null == g ? void 0 : g.isValid()) ? g : null);
        }, [g, o]);
        let C = h;
        null != g &&
          !g.isValid() &&
          (C = d.Z.Messages.AGE_GATE_INVALID_BIRTHDAY);
        let O = (function () {
            let e = new Date().getFullYear(),
              t = l.useRef(
                Array.from(Array(150).keys()).map((t) => ({
                  value: e - t - 3,
                  label: "".concat(e - t - 3),
                })),
              );
            return (
              l.useEffect(() => {
                t.current = Array.from(Array(150).keys()).map((t) => ({
                  value: e - t - 3,
                  label: "".concat(e - t - 3),
                }));
              }, [e]),
              t.current
            );
          })(),
          [D, v] = l.useState(m ? 0 : -1),
          Z = l.useRef(null),
          I = l.useRef(null),
          S = l.useRef(null),
          B = l.useMemo(G, []),
          k = l.useCallback(() => {
            var e, t, a, n;
            switch (null === (e = B[D]) || void 0 === e ? void 0 : e.type) {
              case "day":
                null === (t = Z.current) || void 0 === t || t.focus();
                break;
              case "month":
                null === (a = I.current) || void 0 === a || a.focus();
                break;
              case "year":
                null === (n = S.current) || void 0 === n || n.focus();
            }
          }, [D, Z, I, S, B]);
        l.useEffect(() => {
          setTimeout(k, 500);
        }, []),
          l.useEffect(() => {
            if (D >= B.length) {
              null == E || E();
              return;
            }
            k();
          }, [D, k]);
        let j = [];
        for (let e = 0; e < 3; e++) {
          let { type: t } = B[e];
          switch (t) {
            case "day":
              j.push({
                key: "day",
                input: (0, n.jsx)(T, {
                  options: A,
                  selectOption: N,
                  children: (0, n.jsx)(c.Z, {
                    ref: Z,
                    className: _.__invalid_inputDay,
                    "aria-label": d.Z.Messages.AGE_GATE_DOB_DAY,
                    menuPlacement: c.Z.MenuPlacements.TOP,
                    placeholder: (0, n.jsx)("span", {
                      "aria-hidden": !0,
                      children: d.Z.Messages.AGE_GATE_DOB_DAY,
                    }),
                    options: A,
                    value: y,
                    onChange: (t) => {
                      let { value: a } = t;
                      N(a), v(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
              break;
            case "month":
              j.push({
                key: "month",
                input: (0, n.jsx)(T, {
                  options: f,
                  selectOption: R,
                  children: (0, n.jsx)(c.Z, {
                    ref: I,
                    className: _.__invalid_inputMonth,
                    "aria-label": d.Z.Messages.AGE_GATE_DOB_MONTH,
                    menuPlacement: c.Z.MenuPlacements.TOP,
                    placeholder: (0, n.jsx)("span", {
                      "aria-hidden": !0,
                      children: d.Z.Messages.AGE_GATE_DOB_MONTH,
                    }),
                    options: f,
                    value: p,
                    onChange: (t) => {
                      let { value: a } = t;
                      R(a), v(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
              break;
            case "year":
              j.push({
                key: "year",
                input: (0, n.jsx)(T, {
                  options: O,
                  selectOption: b,
                  children: (0, n.jsx)(c.Z, {
                    ref: S,
                    className: _.__invalid_inputYear,
                    "aria-label": d.Z.Messages.AGE_GATE_DOB_YEAR,
                    menuPlacement: c.Z.MenuPlacements.TOP,
                    placeholder: (0, n.jsx)("span", {
                      "aria-hidden": !0,
                      children: d.Z.Messages.AGE_GATE_DOB_YEAR,
                    }),
                    options: O,
                    value: x,
                    onChange: (t) => {
                      let { value: a } = t;
                      b(a), v(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
          }
        }
        return (0, n.jsxs)("fieldset", {
          className: r()(_.container, s),
          children: [
            (0, n.jsx)(u.FormTitle, {
              tag: "legend",
              required: M,
              error: C,
              children: d.Z.Messages.AGE_GATE_DATE_OF_BIRTH,
            }),
            (0, n.jsx)("div", {
              className: _.inputs,
              children: j.map((e, t) => {
                let { key: a, input: l } = e;
                return (0, n.jsx)(
                  "div",
                  { tabIndex: t + 1, className: _[a], children: l },
                  a,
                );
              }),
            }),
          ],
        });
      });
      t.Z = m;
    },
    746882: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return C;
          },
        }),
        a(47120);
      var n,
        l,
        s = a(200651),
        r = a(192379),
        o = a(512722),
        i = a.n(o),
        u = a(913527),
        c = a.n(u),
        d = a(442837),
        _ = a(481060),
        E = a(749210),
        A = a(600164),
        f = a(313201),
        h = a(592125),
        T = a(944486),
        G = a(594174),
        m = a(626135),
        M = a(63063),
        y = a(771308),
        N = a(758119),
        p = a(13430),
        R = a(723359),
        x = a(981631),
        b = a(689938),
        g = a(240791);
      function C(e) {
        let { transitionState: t, source: n } = e,
          l = (0, d.e7)([G.default], () => G.default.getCurrentUser()),
          o = (0, d.e7)([T.Z, h.Z], () => h.Z.getChannel(T.Z.getChannelId())),
          [u, C] = r.useState(null),
          [O, D] = r.useState(null),
          [v, Z] = r.useState(!1),
          [I, S] = r.useState(0),
          B = r.createRef(),
          k = r.createRef(),
          j = (0, f.Dt)(),
          L = null != u ? c()().diff(u, "years") : null;
        function Y() {
          let e = null == o ? void 0 : o.getGuildId();
          E.Z.nsfwReturnToSafety(e), (0, N.qV)(n);
        }
        async function U() {
          i()(null != u, "Cannot submit null birthday.");
          try {
            return D(null), Z(!0), await (0, y.Av)(u, n);
          } catch (t) {
            if (null != t.body && null != t.body.date_of_birth)
              (0, N.C8)(n, t.body.date_of_birth);
            else {
              var e;
              (null == t
                ? void 0
                : null === (e = t.body) || void 0 === e
                  ? void 0
                  : e.username) != null
                ? D(b.Z.Messages.USER_SETTINGS_UPDATE_FAILURE)
                : D(null == t ? void 0 : t.body.message),
                Z(!1);
            }
          }
        }
        async function F() {
          if (
            (i()(
              null != L,
              "Cannot submit if we haven't been able to calculate age.",
            ),
            L < 18)
          ) {
            S(1);
            return;
          }
          await U();
        }
        async function P(e) {
          e.preventDefault(), !v && null != u && (await F());
        }
        async function w() {
          null == (await U()) && S(0);
        }
        r.useEffect(() => {
          null != l && null != l.nsfwAllowed && (0, N.qq)(n);
        }),
          r.useEffect(() => {
            m.default.track(x.rMx.AGE_GATE_ACTION, {
              source: n,
              action: R.Al.AGE_GATE_OPEN,
            });
          }, [n]);
        let H = r.useCallback(
            (e) => {
              C(e);
            },
            [C],
          ),
          z = r.useCallback(() => {
            var e;
            null === (e = k.current) || void 0 === e || e.focus();
          }, [k]);
        return 0 === I
          ? (function () {
              let e = (() => {
                  if (n === R.L0.FAMILY_CENTER)
                    return b.Z.Messages.AGE_GATE_FAMILY_CENTER_HEADER;
                  return b.Z.Messages.AGE_GATE_EXISTING_HEADER;
                })(),
                l = (() => {
                  switch (n) {
                    case R.L0.FAMILY_CENTER:
                      return b.Z.Messages.AGE_GATE_FAMILY_CENTER_BODY;
                    case R.L0.DEEP_LINK_PROMPT:
                      return b.Z.Messages.AGE_GATE_DEEP_LINK_BODY.format({
                        helpURL: M.Z.getArticleURL(x.BhN.AGE_GATE),
                      });
                    default:
                      return b.Z.Messages.AGE_GATE_NSFW_BODY.format({
                        helpURL: M.Z.getArticleURL(x.BhN.AGE_GATE),
                      });
                  }
                })();
              return (0, s.jsxs)(_.ModalRoot, {
                transitionState: t,
                size: _.ModalSize.SMALL,
                "aria-labelledby": j,
                children: [
                  (0, s.jsxs)(_.ModalContent, {
                    children: [
                      (0, s.jsxs)("div", {
                        className: g.container,
                        children: [
                          (0, s.jsx)("img", {
                            alt: "",
                            src: a(462991),
                            className: g.img,
                          }),
                          (0, s.jsx)(_.Heading, {
                            variant: "heading-xl/semibold",
                            className: g.title,
                            id: j,
                            children: e,
                          }),
                          (0, s.jsx)(_.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: l,
                          }),
                        ],
                      }),
                      (0, s.jsx)("form", {
                        onSubmit: P,
                        children: (0, s.jsx)(p.Z, {
                          label: b.Z.Messages.AGE_GATE_YOUR_BIRTHDAY,
                          wrapperClassName: g.birthday,
                          name: "date_of_birth",
                          onChange: H,
                          onPopulated: z,
                          error: O,
                          value: u,
                          ref: B,
                          autoFocus: !0,
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsxs)(_.ModalFooter, {
                    justify: A.Z.Justify.BETWEEN,
                    children: [
                      (0, s.jsx)(_.Button, {
                        buttonRef: k,
                        submitting: v,
                        disabled: null == u,
                        size: _.ButtonSizes.SMALL,
                        onClick: F,
                        children: b.Z.Messages.AGE_GATE_SUBMIT,
                      }),
                      (0, s.jsx)(_.Button, {
                        look: _.Button.Looks.LINK,
                        size: _.Button.Sizes.NONE,
                        color: _.Button.Colors.PRIMARY,
                        onClick: Y,
                        children: b.Z.Messages.AGE_GATE_GO_BACK,
                      }),
                    ],
                  }),
                ],
              });
            })()
          : (0, s.jsxs)(_.ModalRoot, {
              transitionState: _.ModalTransitionState.ENTERED,
              size: _.ModalSize.SMALL,
              "aria-labelledby": j,
              children: [
                (0, s.jsx)(_.ModalContent, {
                  children: (0, s.jsxs)("div", {
                    className: g.confirmContainer,
                    children: [
                      (0, s.jsx)(_.Heading, {
                        variant: "heading-xl/semibold",
                        className: g.confirmTitle,
                        id: j,
                        children: b.Z.Messages.AGE_GATE_CONFIRM_HEADER.format({
                          age: L,
                        }),
                      }),
                      (0, s.jsx)(_.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: b.Z.Messages.AGE_GATE_NSFW_BODY.format({
                          helpURL: M.Z.getArticleURL(x.BhN.AGE_GATE),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, s.jsxs)(_.ModalFooter, {
                  className: g.confirmFooter,
                  children: [
                    (0, s.jsx)(_.Button, {
                      look: _.Button.Looks.LINK,
                      size: _.Button.Sizes.NONE,
                      color: _.Button.Colors.PRIMARY,
                      onClick: () => S(0),
                      children: b.Z.Messages.AGE_GATE_CONFIRM_GO_BACK,
                    }),
                    (0, s.jsx)(_.Button, {
                      color: _.Button.Colors.BRAND,
                      onClick: w,
                      children: b.Z.Messages.AGE_GATE_CONFIRM_BUTTON,
                    }),
                  ],
                }),
              ],
            });
      }
      ((l = n || (n = {}))[(l.AGE_GATE_FORM = 0)] = "AGE_GATE_FORM"),
        (l[(l.CONFIRM = 1)] = "CONFIRM");
    },
    959776: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = a(913527),
        l = a.n(n),
        s = a(626135),
        r = a(981631);
      function o(e, t) {
        s.default.track(r.rMx.AGE_GATE_SUBMITTED, {
          dob: 18 > l()().diff(e, "years") ? e.format("YYYY-MM-DD") : null,
          dob_day: e.date(),
          dob_month: e.month() + 1,
          dob_year: e.year(),
          source: { section: t },
        });
      }
    },
    535701: function (e, t, a) {
      a.r(
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
    240791: function (e, t, a) {
      e.exports = {
        container: "container_ac53d0",
        title: "title_ac53d0",
        img: "img_ac53d0",
        birthday: "birthday_ac53d0",
        confirmContainer: "confirmContainer_ac53d0",
        confirmTitle: "confirmTitle_ac53d0",
        confirmFooter: "confirmFooter_ac53d0",
      };
    },
  },
]);
//# sourceMappingURL=0eb539b2f9ce3c57abd3.js.map
