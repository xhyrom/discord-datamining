"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["1716"],
  {
    462991: function (e) {
      e.exports = "/assets/1a8b06e1c2b7a9bb1946.svg";
    },
    771308: function (e, t, n) {
      n.d(t, {
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
      var a = n(544891),
        l = n(570140),
        r = n(959776),
        i = n(626135),
        o = n(723359),
        s = n(981631);
      function u(e, t) {
        return (
          (0, r.Z)(e, t),
          i.default.track(s.rMx.AGE_GATE_ACTION, {
            source: t,
            action: o.Al.AGE_GATE_SUBMITTED,
          }),
          a.tn
            .patch({
              url: s.ANM.ME,
              oldFormErrors: !0,
              body: { date_of_birth: e.format("YYYY-MM-DD") },
            })
            .then((e) => {
              let n = e.body;
              l.Z.dispatch({ type: "CURRENT_USER_UPDATE", user: n }),
                i.default.track(s.rMx.AGE_GATE_ACTION, {
                  source: t,
                  action: o.Al.AGE_GATE_SUCCESS,
                });
            })
        );
      }
      function c(e) {
        l.Z.dispatch({ type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION" }),
          i.default.track(s.rMx.AGE_GATE_ACTION, {
            source: e,
            action: o.Al.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION,
          });
      }
      function d(e) {
        l.Z.dispatch({ type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER" }),
          i.default.track(s.rMx.AGE_GATE_ACTION, {
            source: e,
            action: o.Al.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER,
          });
      }
    },
    13430: function (e, t, n) {
      n(47120), n(653041);
      var a = n(200651),
        l = n(192379),
        r = n(120356),
        i = n.n(r),
        o = n(913527),
        s = n.n(o),
        u = n(481060),
        c = n(285888),
        d = n(388032),
        f = n(49872);
      let h = s()().localeData().months(),
        m = Array.from(Array(31).keys()).map((e) => ({
          value: e + 1,
          label: "".concat(e + 1),
        })),
        E = Array.from(Array(12).keys()).map((e) => ({
          value: e + 1,
          label: h[e],
        })),
        _ = /[a-zA-Z0-9]/;
      function A(e) {
        let { options: t, selectOption: n, children: r } = e,
          [i, o] = l.useState("");
        l.useEffect(() => {
          if ("" !== i) {
            let e = setTimeout(() => o(""), 1e3);
            return () => clearTimeout(e);
          }
        }, [i, o]);
        let s = l.useCallback(
          (e) => {
            if (_.test(e.key)) {
              let a = "".concat(i).concat(e.key.toLowerCase()),
                l = t.find((e) => e.label.toLowerCase().startsWith(a));
              null != l && n(l.value), o(a);
            }
          },
          [n, o, i, t],
        );
        return (0, a.jsx)("div", { onKeyDown: s, children: r });
      }
      function y() {
        let e = s()().localeData().longDateFormat("L"),
          t = e.indexOf("D"),
          n = e.indexOf("M"),
          a = e.indexOf("Y");
        return (
          (-1 === t || -1 === n || -1 === a) && ((t = 0), (n = 1), (a = 2)),
          [
            { index: t, type: "day" },
            { index: n, type: "month" },
            { index: a, type: "year" },
          ].sort((e, t) => (e.index < t.index ? -1 : 1))
        );
      }
      let p = l.forwardRef(function (e, t) {
        let {
            value: n,
            wrapperClassName: r,
            onChange: o,
            onPopulated: h,
            error: _,
            autoFocus: p,
            required: x,
          } = e,
          {
            day: b,
            setDay: T,
            month: N,
            setMonth: g,
            year: M,
            setYear: G,
          } = (function (e) {
            let t = null,
              n = null,
              a = null;
            null != e && ((t = e.date()), (n = e.month() + 1), (a = e.year()));
            let [r, i] = l.useState(t),
              [o, s] = l.useState(n),
              [u, c] = l.useState(a);
            return {
              day: r,
              setDay: i,
              month: o,
              setMonth: s,
              year: u,
              setYear: c,
            };
          })(n),
          R = l.useMemo(
            () =>
              null != b && null != N && null != M
                ? s()("".concat(b, "/").concat(N, "/").concat(M), "DD/MM/YYYY")
                : null,
            [b, N, M],
          );
        l.useEffect(() => {
          o((null == R ? void 0 : R.isValid()) ? R : null);
        }, [R, o]);
        let v = _;
        null != R && !R.isValid() && (v = d.intl.string(d.t.udnqh4));
        let C = (function () {
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
          [k, j] = l.useState(p ? 0 : -1),
          S = l.useRef(null),
          D = l.useRef(null),
          O = l.useRef(null),
          L = l.useMemo(y, []),
          Z = l.useCallback(() => {
            var e, t, n, a;
            switch (null === (e = L[k]) || void 0 === e ? void 0 : e.type) {
              case "day":
                null === (t = S.current) || void 0 === t || t.focus();
                break;
              case "month":
                null === (n = D.current) || void 0 === n || n.focus();
                break;
              case "year":
                null === (a = O.current) || void 0 === a || a.focus();
            }
          }, [k, S, D, O, L]);
        l.useEffect(() => {
          setTimeout(Z, 500);
        }, []),
          l.useEffect(() => {
            if (k >= L.length) {
              null == h || h();
              return;
            }
            Z();
          }, [k, Z]);
        let U = [];
        for (let e = 0; e < 3; e++) {
          let { type: t } = L[e];
          switch (t) {
            case "day":
              U.push({
                key: "day",
                input: (0, a.jsx)(A, {
                  options: m,
                  selectOption: T,
                  children: (0, a.jsx)(c.Z, {
                    ref: S,
                    className: f.__invalid_inputDay,
                    "aria-label": d.intl.string(d.t.Voklra),
                    menuPlacement: c.Z.MenuPlacements.TOP,
                    placeholder: (0, a.jsx)("span", {
                      "aria-hidden": !0,
                      children: d.intl.string(d.t.Voklra),
                    }),
                    options: m,
                    value: b,
                    onChange: (t) => {
                      let { value: n } = t;
                      T(n), j(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
              break;
            case "month":
              U.push({
                key: "month",
                input: (0, a.jsx)(A, {
                  options: E,
                  selectOption: g,
                  children: (0, a.jsx)(c.Z, {
                    ref: D,
                    className: f.__invalid_inputMonth,
                    "aria-label": d.intl.string(d.t.UDlN8f),
                    menuPlacement: c.Z.MenuPlacements.TOP,
                    placeholder: (0, a.jsx)("span", {
                      "aria-hidden": !0,
                      children: d.intl.string(d.t.UDlN8f),
                    }),
                    options: E,
                    value: N,
                    onChange: (t) => {
                      let { value: n } = t;
                      g(n), j(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
              break;
            case "year":
              U.push({
                key: "year",
                input: (0, a.jsx)(A, {
                  options: C,
                  selectOption: G,
                  children: (0, a.jsx)(c.Z, {
                    ref: O,
                    className: f.__invalid_inputYear,
                    "aria-label": d.intl.string(d.t.ZWr5WF),
                    menuPlacement: c.Z.MenuPlacements.TOP,
                    placeholder: (0, a.jsx)("span", {
                      "aria-hidden": !0,
                      children: d.intl.string(d.t.ZWr5WF),
                    }),
                    options: C,
                    value: M,
                    onChange: (t) => {
                      let { value: n } = t;
                      G(n), j(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
          }
        }
        return (0, a.jsxs)("fieldset", {
          className: i()(f.container, r),
          children: [
            (0, a.jsx)(u.FormTitle, {
              tag: "legend",
              required: x,
              error: v,
              children: d.intl.string(d.t.xNpFJy),
            }),
            (0, a.jsx)("div", {
              className: f.inputs,
              children: U.map((e, t) => {
                let { key: n, input: l } = e;
                return (0, a.jsx)(
                  "div",
                  { tabIndex: t + 1, className: f[n], children: l },
                  n,
                );
              }),
            }),
          ],
        });
      });
      t.Z = p;
    },
    746882: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        }),
        n(47120);
      var a,
        l,
        r = n(200651),
        i = n(192379),
        o = n(512722),
        s = n.n(o),
        u = n(913527),
        c = n.n(u),
        d = n(442837),
        f = n(481060),
        h = n(749210),
        m = n(600164),
        E = n(313201),
        _ = n(592125),
        A = n(944486),
        y = n(594174),
        p = n(626135),
        x = n(63063),
        b = n(771308),
        T = n(758119),
        N = n(13430),
        g = n(723359),
        M = n(981631),
        G = n(388032),
        R = n(580764);
      function v(e) {
        let { transitionState: t, source: a } = e,
          l = (0, d.e7)([y.default], () => y.default.getCurrentUser()),
          o = (0, d.e7)([A.Z, _.Z], () => _.Z.getChannel(A.Z.getChannelId())),
          [u, v] = i.useState(null),
          [C, k] = i.useState(null),
          [j, S] = i.useState(!1),
          [D, O] = i.useState(0),
          L = i.createRef(),
          Z = i.createRef(),
          U = (0, E.Dt)(),
          I = null != u ? c()().diff(u, "years") : null;
        function F() {
          let e = null == o ? void 0 : o.getGuildId();
          h.Z.nsfwReturnToSafety(e), (0, T.qV)(a);
        }
        async function w() {
          s()(null != u, "Cannot submit null birthday.");
          try {
            return k(null), S(!0), await (0, b.Av)(u, a);
          } catch (t) {
            if (null != t.body && null != t.body.date_of_birth)
              (0, T.C8)(a, t.body.date_of_birth);
            else {
              var e;
              (null == t
                ? void 0
                : null === (e = t.body) || void 0 === e
                  ? void 0
                  : e.username) != null
                ? k(G.intl.string(G.t["TGg/2t"]))
                : k(null == t ? void 0 : t.body.message),
                S(!1);
            }
          }
        }
        async function B() {
          if (
            (s()(
              null != I,
              "Cannot submit if we haven't been able to calculate age.",
            ),
            I < 18)
          ) {
            O(1);
            return;
          }
          await w();
        }
        async function Y(e) {
          e.preventDefault(), !j && null != u && (await B());
        }
        async function P() {
          null == (await w()) && O(0);
        }
        i.useEffect(() => {
          null != l && null != l.nsfwAllowed && (0, T.qq)(a);
        }),
          i.useEffect(() => {
            p.default.track(M.rMx.AGE_GATE_ACTION, {
              source: a,
              action: g.Al.AGE_GATE_OPEN,
            });
          }, [a]);
        let z = i.useCallback(
            (e) => {
              v(e);
            },
            [v],
          ),
          W = i.useCallback(() => {
            var e;
            null === (e = Z.current) || void 0 === e || e.focus();
          }, [Z]);
        return 0 === D
          ? (function () {
              let e = (() => {
                  if (a === g.L0.FAMILY_CENTER)
                    return G.intl.string(G.t.M7mt7u);
                  return G.intl.string(G.t.F8otRk);
                })(),
                l = (() => {
                  switch (a) {
                    case g.L0.FAMILY_CENTER:
                      return G.intl.string(G.t.mhUrKS);
                    case g.L0.DEEP_LINK_PROMPT:
                      return G.intl.format(G.t.iyhg2t, {
                        helpURL: x.Z.getArticleURL(M.BhN.AGE_GATE),
                      });
                    default:
                      return G.intl.format(G.t.n3QjDA, {
                        helpURL: x.Z.getArticleURL(M.BhN.AGE_GATE),
                      });
                  }
                })();
              return (0, r.jsxs)(f.ModalRoot, {
                transitionState: t,
                size: f.ModalSize.SMALL,
                "aria-labelledby": U,
                children: [
                  (0, r.jsxs)(f.ModalContent, {
                    children: [
                      (0, r.jsxs)("div", {
                        className: R.container,
                        children: [
                          (0, r.jsx)("img", {
                            alt: "",
                            src: n(462991),
                            className: R.img,
                          }),
                          (0, r.jsx)(f.Heading, {
                            variant: "heading-xl/semibold",
                            className: R.title,
                            id: U,
                            children: e,
                          }),
                          (0, r.jsx)(f.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: l,
                          }),
                        ],
                      }),
                      (0, r.jsx)("form", {
                        onSubmit: Y,
                        children: (0, r.jsx)(N.Z, {
                          label: G.intl.string(G.t.rhBeKS),
                          wrapperClassName: R.birthday,
                          name: "date_of_birth",
                          onChange: z,
                          onPopulated: W,
                          error: C,
                          value: u,
                          ref: L,
                          autoFocus: !0,
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsxs)(f.ModalFooter, {
                    justify: m.Z.Justify.BETWEEN,
                    children: [
                      (0, r.jsx)(f.Button, {
                        buttonRef: Z,
                        submitting: j,
                        disabled: null == u,
                        size: f.ButtonSizes.SMALL,
                        onClick: B,
                        children: G.intl.string(G.t.uBFuoq),
                      }),
                      (0, r.jsx)(f.Button, {
                        look: f.Button.Looks.LINK,
                        size: f.Button.Sizes.NONE,
                        color: f.Button.Colors.PRIMARY,
                        onClick: F,
                        children: G.intl.string(G.t["1MrpWF"]),
                      }),
                    ],
                  }),
                ],
              });
            })()
          : (0, r.jsxs)(f.ModalRoot, {
              transitionState: f.ModalTransitionState.ENTERED,
              size: f.ModalSize.SMALL,
              "aria-labelledby": U,
              children: [
                (0, r.jsx)(f.ModalContent, {
                  children: (0, r.jsxs)("div", {
                    className: R.confirmContainer,
                    children: [
                      (0, r.jsx)(f.Heading, {
                        variant: "heading-xl/semibold",
                        className: R.confirmTitle,
                        id: U,
                        children: G.intl.format(G.t.wumolZ, { age: I }),
                      }),
                      (0, r.jsx)(f.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: G.intl.format(G.t.n3QjDA, {
                          helpURL: x.Z.getArticleURL(M.BhN.AGE_GATE),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, r.jsxs)(f.ModalFooter, {
                  className: R.confirmFooter,
                  children: [
                    (0, r.jsx)(f.Button, {
                      look: f.Button.Looks.LINK,
                      size: f.Button.Sizes.NONE,
                      color: f.Button.Colors.PRIMARY,
                      onClick: () => O(0),
                      children: G.intl.string(G.t.cfYCra),
                    }),
                    (0, r.jsx)(f.Button, {
                      color: f.Button.Colors.BRAND,
                      onClick: P,
                      children: G.intl.string(G.t["6tahio"]),
                    }),
                  ],
                }),
              ],
            });
      }
      ((l = a || (a = {}))[(l.AGE_GATE_FORM = 0)] = "AGE_GATE_FORM"),
        (l[(l.CONFIRM = 1)] = "CONFIRM");
    },
    959776: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var a = n(913527),
        l = n.n(a),
        r = n(626135),
        i = n(981631);
      function o(e, t) {
        r.default.track(i.rMx.AGE_GATE_SUBMITTED, {
          dob: 18 > l()().diff(e, "years") ? e.format("YYYY-MM-DD") : null,
          dob_day: e.date(),
          dob_month: e.month() + 1,
          dob_year: e.year(),
          source: { section: t },
        });
      }
    },
    49872: function (e, t, n) {
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
    580764: function (e, t, n) {
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
//# sourceMappingURL=70be3d6ac1fe66d15b30.js.map
