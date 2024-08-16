"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["58566"],
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
        r = n(626135),
        l = n(723359),
        i = n(981631);
      function c(e, t) {
        return (
          (0, o.Z)(e, t),
          r.default.track(i.rMx.AGE_GATE_ACTION, {
            source: t,
            action: l.Al.AGE_GATE_SUBMITTED,
          }),
          s.tn
            .patch({
              url: i.ANM.ME,
              oldFormErrors: !0,
              body: { date_of_birth: e.format("YYYY-MM-DD") },
            })
            .then((e) => {
              let n = e.body;
              a.Z.dispatch({ type: "CURRENT_USER_UPDATE", user: n }),
                r.default.track(i.rMx.AGE_GATE_ACTION, {
                  source: t,
                  action: l.Al.AGE_GATE_SUCCESS,
                });
            })
        );
      }
      function d(e) {
        a.Z.dispatch({ type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION" }),
          r.default.track(i.rMx.AGE_GATE_ACTION, {
            source: e,
            action: l.Al.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION,
          });
      }
      function u(e) {
        a.Z.dispatch({ type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER" }),
          r.default.track(i.rMx.AGE_GATE_ACTION, {
            source: e,
            action: l.Al.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER,
          });
      }
    },
    13430: function (e, t, n) {
      n(47120), n(653041);
      var s = n(735250),
        a = n(470079),
        o = n(120356),
        r = n.n(o),
        l = n(913527),
        i = n.n(l),
        c = n(481060),
        d = n(285888),
        u = n(689938),
        _ = n(409151);
      let f = i()().localeData().months(),
        p = Array.from(Array(31).keys()).map((e) => ({
          value: e + 1,
          label: "".concat(e + 1),
        })),
        m = Array.from(Array(12).keys()).map((e) => ({
          value: e + 1,
          label: f[e],
        })),
        h = /[a-zA-Z0-9]/;
      function E(e) {
        let { options: t, selectOption: n, children: o } = e,
          [r, l] = a.useState("");
        a.useEffect(() => {
          if ("" !== r) {
            let e = setTimeout(() => l(""), 1e3);
            return () => clearTimeout(e);
          }
        }, [r, l]);
        let i = a.useCallback(
          (e) => {
            if (h.test(e.key)) {
              let s = "".concat(r).concat(e.key.toLowerCase()),
                a = t.find((e) => e.label.toLowerCase().startsWith(s));
              null != a && n(a.value), l(s);
            }
          },
          [n, l, r, t],
        );
        return (0, s.jsx)("div", { onKeyDown: i, children: o });
      }
      function N() {
        let e = i()().localeData().longDateFormat("L"),
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
      let T = a.forwardRef(function (e, t) {
        let {
            value: n,
            wrapperClassName: o,
            onChange: l,
            onPopulated: f,
            error: h,
            autoFocus: T,
            required: x,
          } = e,
          {
            day: A,
            setDay: v,
            month: b,
            setMonth: C,
            year: I,
            setYear: g,
          } = (function (e) {
            let t = null,
              n = null,
              s = null;
            null != e && ((t = e.date()), (n = e.month() + 1), (s = e.year()));
            let [o, r] = a.useState(t),
              [l, i] = a.useState(n),
              [c, d] = a.useState(s);
            return {
              day: o,
              setDay: r,
              month: l,
              setMonth: i,
              year: c,
              setYear: d,
            };
          })(n),
          M = a.useMemo(
            () =>
              null != A && null != b && null != I
                ? i()("".concat(A, "/").concat(b, "/").concat(I), "DD/MM/YYYY")
                : null,
            [A, b, I],
          );
        a.useEffect(() => {
          l((null == M ? void 0 : M.isValid()) ? M : null);
        }, [M, l]);
        let O = h;
        null != M &&
          !M.isValid() &&
          (O = u.Z.Messages.AGE_GATE_INVALID_BIRTHDAY);
        let S = (function () {
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
          [G, R] = a.useState(T ? 0 : -1),
          j = a.useRef(null),
          F = a.useRef(null),
          y = a.useRef(null),
          D = a.useMemo(N, []),
          Z = a.useCallback(() => {
            var e, t, n, s;
            switch (null === (e = D[G]) || void 0 === e ? void 0 : e.type) {
              case "day":
                null === (t = j.current) || void 0 === t || t.focus();
                break;
              case "month":
                null === (n = F.current) || void 0 === n || n.focus();
                break;
              case "year":
                null === (s = y.current) || void 0 === s || s.focus();
            }
          }, [G, j, F, y, D]);
        a.useEffect(() => {
          setTimeout(Z, 500);
        }, []),
          a.useEffect(() => {
            if (G >= D.length) {
              null == f || f();
              return;
            }
            Z();
          }, [G, Z]);
        let L = [];
        for (let e = 0; e < 3; e++) {
          let { type: t } = D[e];
          switch (t) {
            case "day":
              L.push({
                key: "day",
                input: (0, s.jsx)(E, {
                  options: p,
                  selectOption: v,
                  children: (0, s.jsx)(d.Z, {
                    ref: j,
                    className: _.__invalid_inputDay,
                    "aria-label": u.Z.Messages.AGE_GATE_DOB_DAY,
                    menuPlacement: d.Z.MenuPlacements.TOP,
                    placeholder: (0, s.jsx)("span", {
                      "aria-hidden": !0,
                      children: u.Z.Messages.AGE_GATE_DOB_DAY,
                    }),
                    options: p,
                    value: A,
                    onChange: (t) => {
                      let { value: n } = t;
                      v(n), R(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
              break;
            case "month":
              L.push({
                key: "month",
                input: (0, s.jsx)(E, {
                  options: m,
                  selectOption: C,
                  children: (0, s.jsx)(d.Z, {
                    ref: F,
                    className: _.__invalid_inputMonth,
                    "aria-label": u.Z.Messages.AGE_GATE_DOB_MONTH,
                    menuPlacement: d.Z.MenuPlacements.TOP,
                    placeholder: (0, s.jsx)("span", {
                      "aria-hidden": !0,
                      children: u.Z.Messages.AGE_GATE_DOB_MONTH,
                    }),
                    options: m,
                    value: b,
                    onChange: (t) => {
                      let { value: n } = t;
                      C(n), R(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
              break;
            case "year":
              L.push({
                key: "year",
                input: (0, s.jsx)(E, {
                  options: S,
                  selectOption: g,
                  children: (0, s.jsx)(d.Z, {
                    ref: y,
                    className: _.__invalid_inputYear,
                    "aria-label": u.Z.Messages.AGE_GATE_DOB_YEAR,
                    menuPlacement: d.Z.MenuPlacements.TOP,
                    placeholder: (0, s.jsx)("span", {
                      "aria-hidden": !0,
                      children: u.Z.Messages.AGE_GATE_DOB_YEAR,
                    }),
                    options: S,
                    value: I,
                    onChange: (t) => {
                      let { value: n } = t;
                      g(n), R(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
          }
        }
        return (0, s.jsxs)("fieldset", {
          className: r()(_.container, o),
          children: [
            (0, s.jsx)(c.FormTitle, {
              tag: "legend",
              required: x,
              error: O,
              children: u.Z.Messages.AGE_GATE_DATE_OF_BIRTH,
            }),
            (0, s.jsx)("div", {
              className: _.inputs,
              children: L.map((e, t) => {
                let { key: n, input: a } = e;
                return (0, s.jsx)(
                  "div",
                  { tabIndex: t + 1, className: _[n], children: a },
                  n,
                );
              }),
            }),
          ],
        });
      });
      t.Z = T;
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
        r = n(981631);
      function l(e, t) {
        o.default.track(r.rMx.AGE_GATE_SUBMITTED, {
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
          return E;
        },
        v: function () {
          return h;
        },
      }),
        n(47120);
      var s,
        a,
        o,
        r = n(735250),
        l = n(470079),
        i = n(120356),
        c = n.n(i),
        d = n(536640),
        u = n(481060),
        _ = n(981631),
        f = n(689938),
        p = n(471753);
      function m(e, t, n) {
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
      ((o = s || (s = {})).TOP = "top"), (o.BOTTOM = "bottom");
      let h = {
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
          let { isDisabled: n, menuIsOpen: s } = t;
          return {
            ...e,
            backgroundColor: "var(--input-background)",
            borderColor: "var(--input-background)",
            opacity: n ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: s ? "4px 4px 0 0" : "4px",
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
          let { isSelected: n, isFocused: s } = t;
          return {
            ...e,
            ...(n
              ? {
                  backgroundColor: "var(--background-modifier-selected)",
                  color: "var(--interactive-active)",
                }
              : s
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
      class E extends (a = l.Component) {
        focus() {
          var e;
          null === (e = this._selectRef.current) || void 0 === e || e.focus();
        }
        render() {
          let e;
          let {
              className: t,
              selectClassName: n,
              error: s,
              valueRenderer: a,
              optionRenderer: o,
              multiValueRenderer: l,
              options: i,
              value: _,
              autofocus: m,
              disabled: E,
              clearable: N,
              searchable: T,
              styleOverrides: x,
              isMulti: A,
              placeholder: v,
              filterOption: b,
              closeMenuOnSelect: C = !0,
              ...I
            } = this.props,
            g = { ...I };
          null != m && (g.autoFocus = m),
            null != E && (g.isDisabled = E),
            null != N && (g.isClearable = N),
            null != T && (g.isSearchable = T);
          let M = { IndicatorSeparator: () => null };
          null != o &&
            (M.Option = (e) =>
              (0, r.jsx)(d.wx.Option, { ...e, children: o(e.data) })),
            null != a &&
              (M.SingleValue = (e) =>
                (0, r.jsx)(d.wx.SingleValue, { ...e, children: a(e.data) })),
            null != l && (M.MultiValue = (e) => l(e.data));
          if (A && Array.isArray(_)) {
            let t = {};
            i.forEach((e) => {
              t[String(e.value)] = e;
            }),
              (e = _.map((e) => t[String(e)]));
          } else e = null != _ ? i.find((e) => e.value === _) : null;
          return (0, r.jsx)(u.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, r.jsxs)("div", {
              className: c()(p.select, t, { [p.error]: null != s }),
              ref: this._containerRef,
              children: [
                (0, r.jsx)(d.ZP, {
                  ...g,
                  className: n,
                  ref: this._selectRef,
                  isMulti: A,
                  components: M,
                  options: i,
                  styles: null != x ? x : h,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onMenuOpen: this.handleMenuOpen,
                  onMenuClose: this.handleMenuClose,
                  closeMenuOnSelect: C,
                  value: e,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != v ? v : f.Z.Messages.SELECT,
                  noOptionsMessage: () => f.Z.Messages.NO_RESULTS_FOUND,
                  filterOption: b,
                }),
                null != s
                  ? (0, r.jsx)("div", {
                      className: p.errorMessage,
                      children: s,
                    })
                  : null,
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            m(this, "_selectRef", l.createRef()),
            m(this, "_containerRef", l.createRef()),
            m(this, "state", { isFocused: !1, isOpen: !1 }),
            m(this, "handleFocus", (e) => {
              var t, n;
              this.setState({ isFocused: !0 }),
                null === (t = (n = this.props).onFocus) ||
                  void 0 === t ||
                  t.call(n, e);
            }),
            m(this, "handleBlur", (e) => {
              var t, n;
              this.setState({ isFocused: !1 }),
                null === (t = (n = this.props).onBlur) ||
                  void 0 === t ||
                  t.call(n, e);
            }),
            m(this, "handleKeyDown", (e) => {
              e.which === _.yXg.ESCAPE &&
                this.state.isOpen &&
                e.stopPropagation();
            }),
            m(this, "handleMenuOpen", () => {
              this.setState({ isOpen: !0 });
            }),
            m(this, "handleMenuClose", () => {
              this.setState({ isOpen: !1 });
            });
        }
      }
      m(E, "MenuPlacements", s);
    },
    436046: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return N;
        },
      }),
        n(47120);
      var s = n(735250),
        a = n(470079),
        o = n(512722),
        r = n.n(o),
        l = n(442837),
        i = n(692547),
        c = n(481060),
        d = n(771308),
        u = n(13430),
        _ = n(594174),
        f = n(63063),
        p = n(981631),
        m = n(723359),
        h = n(689938),
        E = n(178819);
      function N(e) {
        let { onComplete: t, onClose: n } = e,
          [o, N] = a.useState(null),
          [T, x] = a.useState(null),
          [A, v] = a.useState(!1),
          b = (0, l.e7)([_.default], () => _.default.getCurrentUser()),
          C = a.createRef();
        async function I(e) {
          e.preventDefault(),
            r()(null != o, "Cannot submit null birthday."),
            v(!0);
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
                ? x(h.Z.Messages.USER_SETTINGS_UPDATE_FAILURE)
                : x(null == e ? void 0 : e.body.message);
            }
          }
          v(!1);
        }
        a.useEffect(() => {
          null != b && null != b.nsfwAllowed && t();
        }, [b, t]);
        let g = a.useCallback(
            (e) => {
              N(e);
            },
            [N],
          ),
          M = a.useCallback(() => {
            var e;
            null === (e = C.current) || void 0 === e || e.focus();
          }, [C]);
        return null == b
          ? null
          : (0, s.jsxs)("form", {
              className: E.content,
              onSubmit: I,
              children: [
                (0, s.jsx)(c.ClydeIcon, {
                  size: "custom",
                  width: 56,
                  height: 40,
                  className: E.logo,
                  color: i.Z.unsafe_rawColors.BRAND_500.css,
                }),
                (0, s.jsx)(c.Heading, {
                  className: E.title,
                  variant: "heading-xl/semibold",
                  children: h.Z.Messages.NUF_JOIN_SERVER_TITLE_2,
                }),
                (0, s.jsx)(c.Text, {
                  color: "text-normal",
                  className: E.description,
                  variant: "text-md/normal",
                  children: h.Z.Messages.NUF_AGE_GATE_BODY.format({
                    helpURL: f.Z.getArticleURL(p.BhN.AGE_GATE),
                  }),
                }),
                (0, s.jsx)(c.ThemeContextProvider, {
                  theme: p.BRd.LIGHT,
                  children: (0, s.jsx)(u.Z, {
                    required: !0,
                    autoFocus: !0,
                    wrapperClassName: E.formItem,
                    label: h.Z.Messages.AGE_GATE_YOUR_BIRTHDAY,
                    name: "birthday",
                    onChange: g,
                    onPopulated: M,
                    error: T,
                    value: o,
                  }),
                }),
                (0, s.jsx)("div", {
                  className: E.footer,
                  children: (0, s.jsx)("div", {
                    className: E.buttonWrapper,
                    children: (0, s.jsx)(c.Button, {
                      buttonRef: C,
                      type: "submit",
                      size: c.Button.Sizes.LARGE,
                      submitting: A,
                      disabled: null == o,
                      fullWidth: !0,
                      children: h.Z.Messages.NEXT,
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
      var s = n(735250);
      n(470079);
      var a = n(120356),
        o = n.n(a),
        r = n(481060),
        l = n(112831),
        i = n(689938),
        c = n(934836);
      function d(e) {
        let { onComplete: t } = e;
        return (0, s.jsxs)(r.Clickable, {
          className: c.container,
          onClick: t,
          children: [
            (0, s.jsx)(l.Z, {
              size: l.Z.Sizes.SIZE_24,
              className: c.title,
              children: i.Z.Messages.NUF_COMPLETE_TITLE,
            }),
            (0, s.jsx)(l.Z, {
              size: l.Z.Sizes.SIZE_24,
              className: o()(c.title, c.subtitle),
              children: i.Z.Messages.NUF_COMPLETE_SUBTITLE,
            }),
            (0, s.jsx)(r.Button, {
              color: r.Button.Colors.WHITE,
              onClick: t,
              children: i.Z.Messages.NUF_COMPLETE_CTA,
            }),
          ],
        });
      }
    },
    436457: function (e, t, n) {
      let s, a;
      n.d(t, {
        Z: function () {
          return x;
        },
      }),
        n(47120);
      var o = n(735250),
        r = n(470079),
        l = n(120356),
        i = n.n(l),
        c = n(481060),
        d = n(447543),
        u = n(230711),
        _ = n(881052),
        f = n(600164),
        p = n(112831),
        m = n(782605),
        h = n(981631),
        E = n(689938),
        N = n(264123);
      let T =
        ((s = window.GLOBAL_ENV.INVITE_HOST),
        (a = ""),
        null == s && ((s = location.host), (a = h.Z5c.INVITE(""))),
        "".concat(location.protocol, "//").concat(s).concat(a, "/"));
      function x(e) {
        let { onBack: t, onComplete: n, onConnect: s, isSlideReady: a } = e,
          [l, x] = r.useState(""),
          [A, v] = r.useState(!1),
          [b, C] = r.useState(null),
          I = r.useRef(null);
        r.useEffect(() => {
          var e;
          a && (null === (e = I.current) || void 0 === e || e.focus());
        }, [a]);
        let g = r.useCallback(
            (e) => {
              e.preventDefault();
              let t = l.trim();
              if ("" === t) {
                C(E.Z.Messages.INVALID_INVITE_LINK_ERROR);
                return;
              }
              C(null), v(!0);
              let s = t.split("/"),
                a = s[s.length - 1];
              d.Z.resolveInvite(a, "Join Guild", { inputValue: t }).then(
                (e) => {
                  let { invite: t } = e;
                  if ((v(!1), null == t)) {
                    C(E.Z.Messages.INSTANT_INVITE_EXPIRED);
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
                      e instanceof _.yZ || e instanceof _.Hx
                        ? C((0, m.O)(e.code))
                        : C(E.Z.Messages.INVITE_MODAL_ERROR_DEFAULT);
                    });
                  }
                },
                (e) => {
                  v(!1);
                  let t = new _.yZ(e);
                  C((0, m.O)(t.code));
                },
              );
            },
            [l, v, C, n],
          ),
          M = (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsxs)(c.ModalHeader, {
                className: N.header,
                direction: f.Z.Direction.VERTICAL,
                separator: !1,
                children: [
                  (0, o.jsx)(p.Z, {
                    className: N.title,
                    size: p.Z.Sizes.SIZE_24,
                    color: p.Z.Colors.HEADER_PRIMARY,
                    children: E.Z.Messages.JOIN_SERVER_TITLE,
                  }),
                  (0, o.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: E.Z.Messages.JOIN_SERVER_DESCRIPTION_NUF,
                  }),
                ],
              }),
              (0, o.jsxs)(c.ModalContent, {
                children: [
                  (0, o.jsx)("form", {
                    onSubmit: g,
                    className: N.inputForm,
                    children: (0, o.jsx)(c.FormItem, {
                      title: E.Z.Messages.FORM_LABEL_INVITE_LINK,
                      error: b,
                      titleClassName: i()(N.formTitle, {
                        [N.error]: null != b,
                      }),
                      children: (0, o.jsx)(c.TextInput, {
                        value: l,
                        onChange: x,
                        className: N.input,
                        inputClassName: N.inputInner,
                        inputRef: I,
                      }),
                    }),
                  }),
                  (0, o.jsx)(c.Text, {
                    color: "header-secondary",
                    variant: "text-xs/normal",
                    children: E.Z.Messages.JOIN_SERVER_EXAMPLES.format({
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
                    children: E.Z.Messages.JOIN_GUILD_CONNECT.format({
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
          content: M,
          footer: (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(c.Button, {
                color: c.Button.Colors.BRAND,
                onClick: g,
                disabled: 0 === l.length,
                submitting: A,
                children: E.Z.Messages.JOIN,
              }),
              (0, o.jsx)(c.Button, {
                className: N.__invalid_skipButton,
                look: c.Button.Looks.BLANK,
                size: c.Button.Sizes.MIN,
                onClick: t,
                children: E.Z.Messages.BACK,
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
            return j;
          },
        }),
        n(47120);
      var s = n(735250),
        a = n(470079),
        o = n(120356),
        r = n.n(o),
        l = n(990547),
        i = n(442837),
        c = n(481060),
        d = n(393238),
        u = n(600164),
        _ = n(313201),
        f = n(215292),
        p = n(382086),
        m = n(996453),
        h = n(446706),
        E = n(594174),
        N = n(626135),
        T = n(792125),
        x = n(179645),
        A = n(436046),
        v = n(963209),
        b = n(436457),
        C = n(877758),
        I = n(701476),
        g = n(785997),
        M = n(981631),
        O = n(834891),
        S = n(675999),
        G = n(689938),
        R = n(807828);
      function j(e) {
        let t;
        let n = (0, _.Dt)(),
          { onSlideChange: o, ...j } = e,
          { onClose: F } = j,
          [y, D] = a.useState(!1),
          Z = (0, i.e7)([E.default], () => E.default.getCurrentUser()),
          L = null != Z && null == Z.nsfwAllowed,
          [k, B] = a.useState(L ? g.F.AGE_GATE : g.F.CHOOSE_TEMPLATE),
          [U, w] = a.useState(null);
        a.useEffect(() => {
          o(y ? g.F.COMPLETE : k);
        }, [o, k, y]);
        let [P, H] = a.useState(null),
          [V, Y] = a.useState(null),
          [z, J] = a.useState(!1),
          W = (0, i.e7)([x.Z], () => x.Z.getType() === I.M5.INVITE_UNCLAIMED),
          K = a.useCallback(
            (e) => {
              Y(e),
                B(g.F.CREATION_INTENT),
                N.default.track(M.rMx.GUILD_TEMPLATE_SELECTED, {
                  template_name: e.label,
                  template_code: e.code,
                });
            },
            [Y, B],
          ),
          { content: X, footer: q } = (0, p.v)({
            hasFooter: !1,
            onBack: () => {
              Y(null), B(g.F.CHOOSE_TEMPLATE);
            },
            onCreationIntentChosen: (e) => {
              J(e === S.lr.COMMUNITY), B(g.F.CUSTOMIZE_GUILD);
            },
          }),
          { content: Q, footer: $ } = (0, m.G)({
            guildTemplate: V,
            titleClassName: R.customizeGuildTitle,
            hasFooter: !1,
            onGuildCreated: (e) => {
              H(e),
                (null == V ? void 0 : V.id) === O.l.CREATE
                  ? B(g.F.CHANNEL_PROMPT)
                  : D(!0);
            },
            onBack: () => {
              B(g.F.CREATION_INTENT);
            },
            isSlideReady: U === g.F.CUSTOMIZE_GUILD,
            isCommunity: z,
          }),
          { content: ee, footer: et } = (0, f.F)({
            createdGuildId: P,
            hasFooter: !1,
            onChannelPromptCompleted: () => {
              D(!0);
            },
            isSlideReady: U === g.F.CHANNEL_PROMPT,
          }),
          { content: en, footer: es } = (0, b.Z)({
            onBack: () => B(g.F.CHOOSE_TEMPLATE),
            onComplete: () => {
              F();
            },
            onConnect: F,
            isSlideReady: U === g.F.JOIN_GUILD,
          });
        switch (k) {
          case g.F.CUSTOMIZE_GUILD:
            t = $;
            break;
          case g.F.CHANNEL_PROMPT:
            t = et;
            break;
          case g.F.JOIN_GUILD:
            t = es;
            break;
          case g.F.CREATION_INTENT:
            t = q;
        }
        let { ref: ea, width: eo } = (0, d.Z)();
        if (y)
          return (0, s.jsx)(c.ModalRoot, {
            ...j,
            size: c.ModalSize.MEDIUM,
            className: r()(R.modal, R.completed),
            "aria-labelledby": n,
            children: (0, s.jsx)(v.Z, { onComplete: F }),
          });
        let er = { impression_group: l.ImpressionGroups.GUILD_ADD_NUF };
        return (0, s.jsxs)(c.ModalRoot, {
          ...j,
          size: c.ModalSize.MEDIUM,
          className: R.modal,
          "aria-labelledby": n,
          children: [
            (0, s.jsx)("div", {
              className: R.sidebar,
              children: (0, s.jsx)(C.Z, { step: k }),
            }),
            (0, s.jsxs)("div", {
              className: r()(R.content, (0, T.Q)(M.BRd.LIGHT)),
              ref: ea,
              children: [
                (0, s.jsx)("div", {
                  className: R.slidesContainer,
                  children: (0, s.jsxs)(c.Slides, {
                    activeSlide: k,
                    onSlideReady: (e) => w(e),
                    centered: !1,
                    width: eo,
                    children: [
                      (0, s.jsx)(c.Slide, {
                        id: g.F.AGE_GATE,
                        children: (0, s.jsx)("div", {
                          className: R.container,
                          children: (0, s.jsx)(A.Z, {
                            onComplete: () => {
                              W ? F() : B(g.F.CHOOSE_TEMPLATE);
                            },
                            onClose: F,
                          }),
                        }),
                      }),
                      (0, s.jsx)(c.Slide, {
                        id: g.F.CHOOSE_TEMPLATE,
                        impressionName: l.ImpressionNames.GUILD_ADD_LANDING,
                        impressionProperties: er,
                        children: (0, s.jsx)("div", {
                          className: r()(R.container, R.shortFooter),
                          children: (0, s.jsx)(h.Z, {
                            className: R.templates,
                            onChooseTemplate: K,
                            isNewUser: !0,
                          }),
                        }),
                      }),
                      (0, s.jsx)(c.Slide, {
                        id: g.F.CREATION_INTENT,
                        impressionName:
                          l.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                        impressionProperties: er,
                        children: (0, s.jsx)("div", {
                          className: r()(R.container, R.standardFooter),
                          children: X,
                        }),
                      }),
                      (0, s.jsx)(c.Slide, {
                        id: g.F.CUSTOMIZE_GUILD,
                        impressionName: l.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                        impressionProperties: er,
                        children: (0, s.jsx)("div", {
                          className: r()(R.container, R.standardFooter),
                          children: Q,
                        }),
                      }),
                      (0, s.jsx)(c.Slide, {
                        id: g.F.CHANNEL_PROMPT,
                        impressionName:
                          l.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                        impressionProperties: er,
                        children: (0, s.jsx)("div", {
                          className: r()(R.container, R.standardFooter),
                          children: ee,
                        }),
                      }),
                      (0, s.jsx)(c.Slide, {
                        id: g.F.JOIN_GUILD,
                        impressionName: l.ImpressionNames.GUILD_ADD_JOIN,
                        impressionProperties: er,
                        children: (0, s.jsx)("div", {
                          className: r()(R.container, R.standardFooter),
                          children: en,
                        }),
                      }),
                    ],
                  }),
                }),
                k !== g.F.AGE_GATE
                  ? (0, s.jsx)(c.ModalCloseButton, {
                      onClick: F,
                      className: R.closeButton,
                    })
                  : null,
                k === g.F.CHOOSE_TEMPLATE
                  ? (0, s.jsx)(c.ModalFooter, {
                      justify: u.Z.Justify.BETWEEN,
                      className: r()(R.footer, R.join),
                      children: (0, s.jsx)(c.Anchor, {
                        className: R.joinCTA,
                        onClick: () => {
                          B(g.F.JOIN_GUILD);
                        },
                        children: (0, s.jsxs)(c.Text, {
                          variant: "text-sm/medium",
                          className: R.joinCTA,
                          children: [
                            G.Z.Messages.NUF_HAVE_AN_INVITE_ALREADY,
                            " ",
                            G.Z.Messages.JOIN_SERVER_BUTTON_CTA,
                          ],
                        }),
                      }),
                    })
                  : null,
                null != t
                  ? (0, s.jsx)(c.ModalFooter, {
                      justify: u.Z.Justify.BETWEEN,
                      className: R.footer,
                      children: t,
                    })
                  : null,
              ],
            }),
          ],
        });
      }
    },
    877758: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var s = n(735250);
      n(470079);
      var a = n(120356),
        o = n.n(a),
        r = n(785997),
        l = n(193821);
      function i(e) {
        let { step: t } = e,
          n = t === r.F.AGE_GATE,
          a = t === r.F.CHOOSE_TEMPLATE || t === r.F.CREATION_INTENT,
          i = t === r.F.CUSTOMIZE_GUILD,
          c = t === r.F.CHANNEL_PROMPT || t === r.F.JOIN_GUILD,
          d = i || c,
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
              className: o()(l.step3Character, { [l.show]: i }),
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
    302541: function (e, t, n) {
      e.exports = {
        iconContainer: "iconContainer_a2aef9",
        filledIcon: "filledIcon_a2aef9",
      };
    },
    409151: function (e, t, n) {
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
    772509: function (e, t, n) {
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
    168289: function (e, t, n) {
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
    816497: function (e, t, n) {
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
    128109: function (e, t, n) {
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
    104910: function (e, t, n) {
      e.exports = {
        container: "container_a47d49",
        icon: "icon_a47d49",
        text: "text_a47d49",
        arrow: "arrow_a47d49",
      };
    },
    471753: function (e, t, n) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    178819: function (e, t, n) {
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
    934836: function (e, t, n) {
      e.exports = {
        container: "container_f0ded7",
        title: "title_f0ded7",
        subtitle: "subtitle_f0ded7",
      };
    },
    264123: function (e, t, n) {
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
    807828: function (e, t, n) {
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
    193821: function (e, t, n) {
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
//# sourceMappingURL=594c235f234d748e9532.js.map
