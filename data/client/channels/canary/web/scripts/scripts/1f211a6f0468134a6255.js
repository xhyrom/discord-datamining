"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["1337"],
  {
    771308: function (e, t, n) {
      n.d(t, {
        Av: function () {
          return c;
        },
        hp: function () {
          return d;
        },
        wE: function () {
          return u;
        },
      });
      var r = n(544891),
        a = n(570140),
        l = n(959776),
        o = n(626135),
        i = n(723359),
        s = n(981631);
      function c(e, t) {
        return (
          (0, l.Z)(e, t),
          o.default.track(s.rMx.AGE_GATE_ACTION, {
            source: t,
            action: i.Al.AGE_GATE_SUBMITTED,
          }),
          r.tn
            .patch({
              url: s.ANM.ME,
              oldFormErrors: !0,
              body: { date_of_birth: e.format("YYYY-MM-DD") },
              rejectWithError: !1,
            })
            .then((e) => {
              let n = e.body;
              a.Z.dispatch({ type: "CURRENT_USER_UPDATE", user: n }),
                o.default.track(s.rMx.AGE_GATE_ACTION, {
                  source: t,
                  action: i.Al.AGE_GATE_SUCCESS,
                });
            })
        );
      }
      function u(e) {
        a.Z.dispatch({ type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION" }),
          o.default.track(s.rMx.AGE_GATE_ACTION, {
            source: e,
            action: i.Al.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION,
          });
      }
      function d(e) {
        a.Z.dispatch({ type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER" }),
          o.default.track(s.rMx.AGE_GATE_ACTION, {
            source: e,
            action: i.Al.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER,
          });
      }
    },
    13430: function (e, t, n) {
      n(47120), n(653041);
      var r = n(200651),
        a = n(192379),
        l = n(120356),
        o = n.n(l),
        i = n(913527),
        s = n.n(i),
        c = n(481060),
        u = n(493773),
        d = n(285888),
        p = n(388032),
        h = n(342746);
      let f = s()().localeData().months(),
        v = Array.from(Array(31).keys()).map((e) => ({
          value: e + 1,
          label: "".concat(e + 1),
        })),
        m = Array.from(Array(12).keys()).map((e) => ({
          value: e + 1,
          label: f[e],
        })),
        b = /[a-zA-Z0-9]/;
      function g(e) {
        let { options: t, selectOption: n, children: l } = e,
          [o, i] = a.useState("");
        a.useEffect(() => {
          if ("" !== o) {
            let e = setTimeout(() => i(""), 1e3);
            return () => clearTimeout(e);
          }
        }, [o, i]);
        let s = a.useCallback(
          (e) => {
            if (b.test(e.key)) {
              let r = "".concat(o).concat(e.key.toLowerCase()),
                a = t.find((e) => e.label.toLowerCase().startsWith(r));
              null != a && n(a.value), i(r);
            }
          },
          [n, i, o, t],
        );
        return (0, r.jsx)("div", { onKeyDown: s, children: l });
      }
      function x() {
        let e = s()().localeData().longDateFormat("L"),
          t = e.indexOf("D"),
          n = e.indexOf("M"),
          r = e.indexOf("Y");
        return (
          (-1 === t || -1 === n || -1 === r) && ((t = 0), (n = 1), (r = 2)),
          [
            { index: t, type: "day" },
            { index: n, type: "month" },
            { index: r, type: "year" },
          ].sort((e, t) => (e.index < t.index ? -1 : 1))
        );
      }
      let E = a.forwardRef(function (e, t) {
        let {
            value: n,
            wrapperClassName: l,
            onChange: i,
            onPopulated: f,
            error: b,
            autoFocus: E,
            required: y,
          } = e,
          {
            day: _,
            setDay: A,
            month: k,
            setMonth: T,
            year: M,
            setYear: C,
          } = (function (e) {
            let t = null,
              n = null,
              r = null;
            null != e && ((t = e.date()), (n = e.month() + 1), (r = e.year()));
            let [l, o] = a.useState(t),
              [i, s] = a.useState(n),
              [c, u] = a.useState(r);
            return {
              day: l,
              setDay: o,
              month: i,
              setMonth: s,
              year: c,
              setYear: u,
            };
          })(n),
          O = a.useMemo(
            () =>
              null != _ && null != k && null != M
                ? s()("".concat(_, "/").concat(k, "/").concat(M), "DD/MM/YYYY")
                : null,
            [_, k, M],
          );
        a.useEffect(() => {
          i((null == O ? void 0 : O.isValid()) ? O : null);
        }, [O, i]);
        let R = b;
        null != O && !O.isValid() && (R = p.intl.string(p.t.udnqh4));
        let G = (function () {
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
          [N, S] = a.useState(E ? 0 : -1),
          w = a.useRef(null),
          D = a.useRef(null),
          j = a.useRef(null),
          P = a.useMemo(x, []),
          Z = a.useCallback(() => {
            var e, t, n, r;
            switch (null === (e = P[N]) || void 0 === e ? void 0 : e.type) {
              case "day":
                null === (t = w.current) || void 0 === t || t.focus();
                break;
              case "month":
                null === (n = D.current) || void 0 === n || n.focus();
                break;
              case "year":
                null === (r = j.current) || void 0 === r || r.focus();
            }
          }, [N, w, D, j, P]);
        (0, u.Z)(() => {
          let e = setTimeout(Z, 500);
          return () => {
            clearTimeout(e);
          };
        });
        let F = { onPopulated: f, sortedInputs: P },
          I = a.useRef(F);
        a.useEffect(() => {
          I.current = F;
        }),
          a.useEffect(() => {
            let { onPopulated: e, sortedInputs: t } = I.current;
            if (N >= t.length) {
              null == e || e();
              return;
            }
            Z();
          }, [N, Z]);
        let U = [];
        for (let e = 0; e < 3; e++) {
          let { type: t } = P[e];
          switch (t) {
            case "day":
              U.push({
                key: "day",
                input: (0, r.jsx)(g, {
                  options: v,
                  selectOption: A,
                  children: (0, r.jsx)(d.Z, {
                    ref: w,
                    className: h.__invalid_inputDay,
                    "aria-label": p.intl.string(p.t.Voklra),
                    menuPlacement: d.Z.MenuPlacements.TOP,
                    placeholder: (0, r.jsx)("span", {
                      "aria-hidden": !0,
                      children: p.intl.string(p.t.Voklra),
                    }),
                    options: v,
                    value: _,
                    onChange: (t) => {
                      let { value: n } = t;
                      A(n), S(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
              break;
            case "month":
              U.push({
                key: "month",
                input: (0, r.jsx)(g, {
                  options: m,
                  selectOption: T,
                  children: (0, r.jsx)(d.Z, {
                    ref: D,
                    className: h.__invalid_inputMonth,
                    "aria-label": p.intl.string(p.t.UDlN8f),
                    menuPlacement: d.Z.MenuPlacements.TOP,
                    placeholder: (0, r.jsx)("span", {
                      "aria-hidden": !0,
                      children: p.intl.string(p.t.UDlN8f),
                    }),
                    options: m,
                    value: k,
                    onChange: (t) => {
                      let { value: n } = t;
                      T(n), S(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
              break;
            case "year":
              U.push({
                key: "year",
                input: (0, r.jsx)(g, {
                  options: G,
                  selectOption: C,
                  children: (0, r.jsx)(d.Z, {
                    ref: j,
                    className: h.__invalid_inputYear,
                    "aria-label": p.intl.string(p.t.ZWr5WF),
                    menuPlacement: d.Z.MenuPlacements.TOP,
                    placeholder: (0, r.jsx)("span", {
                      "aria-hidden": !0,
                      children: p.intl.string(p.t.ZWr5WF),
                    }),
                    options: G,
                    value: M,
                    onChange: (t) => {
                      let { value: n } = t;
                      C(n), S(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
          }
        }
        return (0, r.jsxs)("fieldset", {
          className: o()(h.container, l),
          children: [
            (0, r.jsx)(c.FormTitle, {
              tag: "legend",
              required: y,
              error: R,
              children: p.intl.string(p.t.xNpFJy),
            }),
            (0, r.jsx)("div", {
              className: h.inputs,
              children: U.map((e, t) => {
                let { key: n, input: a } = e;
                return (0, r.jsx)(
                  "div",
                  { tabIndex: t + 1, className: h[n], children: a },
                  n,
                );
              }),
            }),
          ],
        });
      });
      t.Z = E;
    },
    959776: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(913527),
        a = n.n(r),
        l = n(626135),
        o = n(981631);
      function i(e, t) {
        l.default.track(o.rMx.AGE_GATE_SUBMITTED, {
          dob: 18 > a()().diff(e, "years") ? e.format("YYYY-MM-DD") : null,
          dob_day: e.date(),
          dob_month: e.month() + 1,
          dob_year: e.year(),
          source: { section: t },
        });
      }
    },
    285888: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return b;
        },
        v: function () {
          return m;
        },
      }),
        n(47120);
      var r,
        a,
        l,
        o = n(200651),
        i = n(192379),
        s = n(120356),
        c = n.n(s),
        u = n(569619),
        d = n(481060),
        p = n(981631),
        h = n(388032),
        f = n(55161);
      function v(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      ((l = r || (r = {})).TOP = "top"), (l.BOTTOM = "bottom");
      let m = {
        container: (e, t) => {
          let { isDisabled: n } = t;
          return {
            ...e,
            cursor: n ? "not-allowed" : void 0,
            pointerEvents: void 0,
            fontSize: 16,
            fontWeight: 500,
            width: "100%",
          };
        },
        control: (e, t) => {
          let { isDisabled: n, menuIsOpen: r } = t;
          return {
            ...e,
            backgroundColor: "var(--input-background)",
            borderColor: "var(--input-background)",
            opacity: n ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: r ? "4px 4px 0 0" : "4px",
            minHeight: 40,
            transition: "border 0.15s ease",
            cursor: n ? "not-allowed" : void 0,
            pointerEvents: n ? "none" : void 0,
            "&:hover": { borderColor: "var(--input-background)" },
          };
        },
        singleValue: (e, t) => {
          let { isDisabled: n } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            opacity: n ? 0.5 : 1,
          };
        },
        input: (e) => ({ ...e, color: "var(--interactive-normal)" }),
        menu: (e) => ({
          ...e,
          backgroundColor: "var(--background-secondary)",
          border: "1px solid var(--background-tertiary)",
          borderRadius: "0 0 4px 4px",
          color: "var(--interactive-normal)",
          marginTop: -1,
          marginBottom: -1,
        }),
        clearIndicator: (e, t) => {
          let { isDisabled: n } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            cursor: n ? void 0 : "pointer",
            opacity: 0.3,
            padding: "8px 0",
            transform: "scale(0.8)",
            ":hover": { color: "var(--text-danger)", opacity: 1 },
          };
        },
        indicatorsContainer: (e) => ({ ...e, alignItems: "flex-start" }),
        dropdownIndicator: (e, t) => {
          let { isDisabled: n } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            cursor: n ? void 0 : "pointer",
            opacity: n ? 0.3 : 1,
            padding: "8px 8px 8px 0",
            ":hover": {
              color: "var(--interactive-hover)",
              opacity: n ? 0.3 : 1,
            },
          };
        },
        menuList: (e) => ({
          ...e,
          padding: 0,
          "&::-webkit-scrollbar": { width: 8, padding: "0px 2px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "var(--scrollbar-thin-thumb)",
            border: "2px solid transparent",
            backgroundClip: "padding-box",
            borderRadius: 4,
          },
          "&::-webkit-scrollbar-track-piece": {
            backgroundColor: "transparent",
            borderColor: "transparent",
          },
        }),
        option: (e, t) => {
          let { isSelected: n, isFocused: r } = t;
          return {
            ...e,
            ...(n
              ? {
                  backgroundColor: "var(--background-modifier-selected)",
                  color: "var(--interactive-active)",
                }
              : r
                ? {
                    backgroundColor: "var(--background-modifier-hover)",
                    color: "var(--interactive-hover)",
                  }
                : {
                    backgroundColor: "transparent",
                    color: "var(--interactive-normal)",
                  }),
            cursor: "pointer",
            display: "flex",
            padding: 12,
            alignItems: "center",
            minHeight: 40,
            "&:active": {
              backgroundColor: "var(--background-modifier-selected)",
              color: "var(--interactive-active)",
            },
          };
        },
        placeholder: (e) => ({ ...e, color: "var(--text-muted)" }),
      };
      class b extends (a = i.Component) {
        focus() {
          var e;
          null === (e = this._selectRef.current) || void 0 === e || e.focus();
        }
        render() {
          let e;
          let {
              className: t,
              selectClassName: n,
              error: r,
              valueRenderer: a,
              optionRenderer: l,
              multiValueRenderer: i,
              options: s,
              value: p,
              autofocus: v,
              disabled: b,
              clearable: g,
              searchable: x,
              styleOverrides: E,
              isMulti: y,
              placeholder: _,
              filterOption: A,
              closeMenuOnSelect: k = !0,
              ...T
            } = this.props,
            M = { ...T };
          null != v && (M.autoFocus = v),
            null != b && (M.isDisabled = b),
            null != g && (M.isClearable = g),
            null != x && (M.isSearchable = x);
          let C = { IndicatorSeparator: () => null };
          null != l &&
            (C.Option = (e) =>
              (0, o.jsx)(u.wx.Option, { ...e, children: l(e.data) })),
            null != a &&
              (C.SingleValue = (e) =>
                (0, o.jsx)(u.wx.SingleValue, { ...e, children: a(e.data) })),
            null != i && (C.MultiValue = (e) => i(e.data));
          if (y && Array.isArray(p)) {
            let t = {};
            s.forEach((e) => {
              t[String(e.value)] = e;
            }),
              (e = p.map((e) => t[String(e)]));
          } else e = null != p ? s.find((e) => e.value === p) : null;
          return (0, o.jsx)(d.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, o.jsxs)("div", {
              className: c()(f.select, t, { [f.error]: null != r }),
              ref: this._containerRef,
              children: [
                (0, o.jsx)(u.ZP, {
                  ...M,
                  className: n,
                  ref: this._selectRef,
                  isMulti: y,
                  components: C,
                  options: s,
                  styles: null != E ? E : m,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onMenuOpen: this.handleMenuOpen,
                  onMenuClose: this.handleMenuClose,
                  closeMenuOnSelect: k,
                  value: e,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != _ ? _ : h.intl.string(h.t.XqMe3N),
                  noOptionsMessage: () => h.intl.string(h.t["Xe+fJC"]),
                  filterOption: A,
                }),
                null != r
                  ? (0, o.jsx)("div", {
                      className: f.errorMessage,
                      children: r,
                    })
                  : null,
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            v(this, "_selectRef", i.createRef()),
            v(this, "_containerRef", i.createRef()),
            v(this, "state", { isFocused: !1, isOpen: !1 }),
            v(this, "handleFocus", (e) => {
              var t, n;
              this.setState({ isFocused: !0 }),
                null === (t = (n = this.props).onFocus) ||
                  void 0 === t ||
                  t.call(n, e);
            }),
            v(this, "handleBlur", (e) => {
              var t, n;
              this.setState({ isFocused: !1 }),
                null === (t = (n = this.props).onBlur) ||
                  void 0 === t ||
                  t.call(n, e);
            }),
            v(this, "handleKeyDown", (e) => {
              e.which === p.yXg.ESCAPE &&
                this.state.isOpen &&
                e.stopPropagation();
            }),
            v(this, "handleMenuOpen", () => {
              this.setState({ isOpen: !0 });
            }),
            v(this, "handleMenuClose", () => {
              this.setState({ isOpen: !1 });
            });
        }
      }
      v(b, "MenuPlacements", r);
    },
  },
]);
//# sourceMappingURL=1f211a6f0468134a6255.js.map
