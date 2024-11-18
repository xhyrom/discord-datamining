(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37848"],
  {
    544140: function (e, t, r) {
      var n = r(796581),
        i = r(149912);
      e.exports = function e(t, r, o, a, s) {
        var l = -1,
          c = t.length;
        for (o || (o = i), s || (s = []); ++l < c; ) {
          var d = t[l];
          r > 0 && o(d)
            ? r > 1
              ? e(d, r - 1, o, a, s)
              : n(s, d)
            : !a && (s[s.length] = d);
        }
        return s;
      };
    },
    149912: function (e, t, r) {
      var n = r(466293),
        i = r(443735),
        o = r(402428),
        a = n ? n.isConcatSpreadable : void 0;
      e.exports = function (e) {
        return o(e) || i(e) || !!(a && e && e[a]);
      };
    },
    90757: function (e, t, r) {
      var n = r(544140);
      e.exports = function (e) {
        return (null == e ? 0 : e.length) ? n(e, 1) : [];
      };
    },
    269128: function (e, t, r) {
      "use strict";
      var n = r(200651);
      r(192379);
      var i = r(120356),
        o = r.n(i),
        a = r(772848),
        s = r(718922);
      let l = (0, a.Z)();
      t.Z = (e) => {
        let { open: t, className: r, withHighlight: i = !1 } = e;
        return (0, n.jsxs)("svg", {
          width: "18",
          height: "18",
          className: o()(s.button, r, { [s.open]: t, [s.withHighlight]: i }),
          children: [
            i &&
              (0, n.jsx)("defs", {
                children: (0, n.jsxs)("linearGradient", {
                  id: l,
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "18",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, n.jsx)("stop", { offset: "0", stopColor: "#B473F5" }),
                    (0, n.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
              }),
            (0, n.jsxs)("g", {
              fill: "none",
              fillRule: "evenodd",
              children: [
                (0, n.jsx)("path", { d: "M0 0h18v18H0" }),
                (0, n.jsx)("path", {
                  stroke: i ? "url(#".concat(l, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, n.jsx)("path", {
                  stroke: i ? "url(#".concat(l, ")") : "currentColor",
                  d: "M13.5 4.5l-9 9",
                  strokeLinecap: "round",
                }),
              ],
            }),
          ],
        });
      };
    },
    700582: function (e, t, r) {
      "use strict";
      var n = r(200651),
        i = r(192379),
        o = r(481060),
        a = r(372900);
      t.Z = i.memo(function (e) {
        var t, r, s, l;
        let {
            user: c,
            size: d = o.AvatarSizes.SIZE_32,
            animate: u = !1,
            "aria-hidden": f = !1,
            ...p
          } = e,
          v = i.useContext(a.Z);
        return (0, n.jsx)(o.Avatar, {
          src:
            ((t = c),
            (r = (0, o.getAvatarSize)(d)),
            (s = u),
            (l = v),
            t.getAvatarURL(l, r, s)),
          size: d,
          "aria-label": f ? void 0 : c.username,
          "aria-hidden": f,
          ...p,
        });
      });
    },
    285888: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return _;
        },
        v: function () {
          return h;
        },
      }),
        r(47120);
      var n,
        i,
        o,
        a = r(200651),
        s = r(192379),
        l = r(120356),
        c = r.n(l),
        d = r(569619),
        u = r(481060),
        f = r(981631),
        p = r(388032),
        v = r(7804);
      function b(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      ((o = n || (n = {})).TOP = "top"), (o.BOTTOM = "bottom");
      let h = {
        container: (e, t) => {
          let { isDisabled: r } = t;
          return {
            ...e,
            cursor: r ? "not-allowed" : void 0,
            pointerEvents: void 0,
            fontSize: 16,
            fontWeight: 500,
            width: "100%",
          };
        },
        control: (e, t) => {
          let { isDisabled: r, menuIsOpen: n } = t;
          return {
            ...e,
            backgroundColor: "var(--input-background)",
            borderColor: "var(--input-background)",
            opacity: r ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: n ? "4px 4px 0 0" : "4px",
            minHeight: 40,
            transition: "border 0.15s ease",
            cursor: r ? "not-allowed" : void 0,
            pointerEvents: r ? "none" : void 0,
            "&:hover": { borderColor: "var(--input-background)" },
          };
        },
        singleValue: (e, t) => {
          let { isDisabled: r } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            opacity: r ? 0.5 : 1,
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
          let { isDisabled: r } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            cursor: r ? void 0 : "pointer",
            opacity: 0.3,
            padding: "8px 0",
            transform: "scale(0.8)",
            ":hover": { color: "var(--text-danger)", opacity: 1 },
          };
        },
        indicatorsContainer: (e) => ({ ...e, alignItems: "flex-start" }),
        dropdownIndicator: (e, t) => {
          let { isDisabled: r } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            cursor: r ? void 0 : "pointer",
            opacity: r ? 0.3 : 1,
            padding: "8px 8px 8px 0",
            ":hover": {
              color: "var(--interactive-hover)",
              opacity: r ? 0.3 : 1,
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
          let { isSelected: r, isFocused: n } = t;
          return {
            ...e,
            ...(r
              ? {
                  backgroundColor: "var(--background-modifier-selected)",
                  color: "var(--interactive-active)",
                }
              : n
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
      class _ extends (i = s.Component) {
        focus() {
          var e;
          null === (e = this._selectRef.current) || void 0 === e || e.focus();
        }
        render() {
          let e;
          let {
              className: t,
              selectClassName: r,
              error: n,
              valueRenderer: i,
              optionRenderer: o,
              multiValueRenderer: s,
              options: l,
              value: f,
              autofocus: b,
              disabled: _,
              clearable: g,
              searchable: m,
              styleOverrides: C,
              isMulti: w,
              placeholder: x,
              filterOption: I,
              closeMenuOnSelect: S = !0,
              ...y
            } = this.props,
            E = { ...y };
          null != b && (E.autoFocus = b),
            null != _ && (E.isDisabled = _),
            null != g && (E.isClearable = g),
            null != m && (E.isSearchable = m);
          let A = { IndicatorSeparator: () => null };
          null != o &&
            (A.Option = (e) =>
              (0, a.jsx)(d.wx.Option, { ...e, children: o(e.data) })),
            null != i &&
              (A.SingleValue = (e) =>
                (0, a.jsx)(d.wx.SingleValue, { ...e, children: i(e.data) })),
            null != s && (A.MultiValue = (e) => s(e.data));
          if (w && Array.isArray(f)) {
            let t = {};
            l.forEach((e) => {
              t[String(e.value)] = e;
            }),
              (e = f.map((e) => t[String(e)]));
          } else e = null != f ? l.find((e) => e.value === f) : null;
          return (0, a.jsx)(u.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, a.jsxs)("div", {
              className: c()(v.select, t, { [v.error]: null != n }),
              ref: this._containerRef,
              children: [
                (0, a.jsx)(d.ZP, {
                  ...E,
                  className: r,
                  ref: this._selectRef,
                  isMulti: w,
                  components: A,
                  options: l,
                  styles: null != C ? C : h,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onMenuOpen: this.handleMenuOpen,
                  onMenuClose: this.handleMenuClose,
                  closeMenuOnSelect: S,
                  value: e,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != x ? x : p.intl.string(p.t.XqMe3N),
                  noOptionsMessage: () => p.intl.string(p.t["Xe+fJC"]),
                  filterOption: I,
                }),
                null != n
                  ? (0, a.jsx)("div", {
                      className: v.errorMessage,
                      children: n,
                    })
                  : null,
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            b(this, "_selectRef", s.createRef()),
            b(this, "_containerRef", s.createRef()),
            b(this, "state", { isFocused: !1, isOpen: !1 }),
            b(this, "handleFocus", (e) => {
              var t, r;
              this.setState({ isFocused: !0 }),
                null === (t = (r = this.props).onFocus) ||
                  void 0 === t ||
                  t.call(r, e);
            }),
            b(this, "handleBlur", (e) => {
              var t, r;
              this.setState({ isFocused: !1 }),
                null === (t = (r = this.props).onBlur) ||
                  void 0 === t ||
                  t.call(r, e);
            }),
            b(this, "handleKeyDown", (e) => {
              e.which === f.yXg.ESCAPE &&
                this.state.isOpen &&
                e.stopPropagation();
            }),
            b(this, "handleMenuOpen", () => {
              this.setState({ isOpen: !0 });
            }),
            b(this, "handleMenuClose", () => {
              this.setState({ isOpen: !1 });
            });
        }
      }
      b(_, "MenuPlacements", n);
    },
    869614: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return i;
        },
      }),
        r(47120);
      let n = new Set(["nvidia"]);
      function i(e) {
        for (let t of Object.keys(e)) {
          let r = e[t];
          if (null != r && null == r.error && n.has(t)) return !0;
        }
        return !1;
      }
    },
    281083: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s;
        },
      }),
        r(47120);
      var n = r(553813),
        i = r.n(n),
        o = r(358085);
      let a = {
        [o.PlatformTypes.WINDOWS]: { nvidia: "<=537.58.0 || >=546.31" },
      };
      function s(e) {
        let t = a[(0, o.getPlatform)()];
        if (null == t) return !1;
        for (let r of Object.keys(e)) {
          let n = e[r],
            o = t[r];
          if (null == n || null == o || null != n.error) continue;
          let a = (function (e) {
            var t, r;
            return ""
              .concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".")
              .concat(null !== (r = e.minor) && void 0 !== r ? r : 0, ".0");
          })(n);
          if (!i().satisfies(a, o)) return !0;
        }
        return !1;
      }
    },
    672598: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s;
        },
      }),
        r(47120);
      var n = r(553813),
        i = r.n(n),
        o = r(358085);
      let a = { [o.PlatformTypes.WINDOWS]: { nvidia: ">=397.93.0" } };
      function s(e) {
        let t = a[(0, o.getPlatform)()];
        if (null == t) return !1;
        for (let r of Object.keys(e)) {
          let n = e[r],
            o = t[r];
          if (null == n || null == o || null != n.error) continue;
          let a = (function (e) {
            var t, r;
            return ""
              .concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".")
              .concat(null !== (r = e.minor) && void 0 !== r ? r : 0, ".0");
          })(n);
          if (!i().satisfies(a, o)) return !0;
        }
        return !1;
      }
    },
    653255: function (e, t, r) {
      "use strict";
      var n,
        i,
        o,
        a,
        s = r(442837),
        l = r(570140),
        c = r(358085),
        d = r(998502),
        u = r(869614),
        f = r(281083),
        p = r(672598);
      let v = !1,
        b = !0,
        h = !1;
      class _ extends (a = s.ZP.Store) {
        initialize() {
          !(!c.isPlatformEmbedded || __OVERLAY__) &&
            d.ZP.getGPUDriverVersions().then((e) => {
              (v = (0, p.Z)(e)),
                (b = (0, u.Z)(e)),
                (h = (0, f.Z)(e)),
                this.emitChange();
            });
        }
        get GPUDriversOutdated() {
          return v;
        }
        get canUseHardwareAcceleration() {
          return b;
        }
        get problematicGPUDriver() {
          return h;
        }
        getState() {
          return {
            GPUDriversOutdated: v,
            canUseHardwareAcceleration: b,
            problematicGPUDriver: h,
          };
        }
      }
      (o = "StreamingCapabilitiesStore"),
        (i = "displayName") in (n = _)
          ? Object.defineProperty(n, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (n[i] = o),
        (t.Z = new _(l.Z, {
          OVERLAY_INITIALIZE: function (e) {
            let { streamingCapabilitiesStoreState: t } = e;
            (v = t.GPUDriversOutdated), (b = t.canUseHardwareAcceleration);
          },
        }));
    },
    989941: function (e, t, r) {
      "use strict";
      let n;
      r.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = r(145597);
      function o(e, t) {
        if (__OVERLAY__) {
          let e = t.getGame(),
            r = (0, i.QF)();
          return null == e || null == r
            ? null
            : (null == n ? void 0 : n.id) === e.id &&
                (null == n ? void 0 : n.pid) === r
              ? n
              : (n = {
                  id: e.id,
                  pid: r,
                  pidPath: [],
                  nativeProcessObserverId: 0,
                  hidden: !1,
                  elevated: !1,
                  name: e.name,
                  lastFocused: 0,
                  exePath: "",
                  exeName: "",
                  cmdLine: "",
                  processName: "",
                  distributor: null,
                  windowHandle: null,
                  fullscreenType: 0,
                });
        }
        return e.getVisibleGame();
      }
    },
    93127: function (e, t, r) {
      "use strict";
      r.d(t, {
        W: function () {
          return c;
        },
        _: function () {
          return d;
        },
      });
      var n = r(544891),
        i = r(570140),
        o = r(480294),
        a = r(814443),
        s = r(428598),
        l = r(981631);
      function c() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return a.Z.needsRefresh()
          ? (i.Z.dispatch({ type: "LOAD_USER_AFFINITIES" }),
            n.tn
              .get({
                url: l.ANM.USER_AFFINITIES,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
                rejectWithError: !1,
              })
              .then(
                (e) => {
                  let { body: t } = e;
                  i.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_SUCCESS",
                    affinities: t,
                  });
                },
                () => {
                  i.Z.dispatch({ type: "LOAD_USER_AFFINITIES_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
      function d() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return s.Z.shouldFetch() && o.Z.hasConsented(l.pjP.PERSONALIZATION)
          ? (i.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
            n.tn
              .get({
                url: l.ANM.USER_AFFINITIES_V2,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
                rejectWithError: !1,
              })
              .then(
                (e) => {
                  let { body: t } = e;
                  i.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                    affineUsers: t.user_affinities.map((e) => {
                      var t, r, n, i, o, a, s, l;
                      return {
                        otherUserId: e.other_user_id,
                        userSegment: e.user_segment,
                        otherUserSegment: e.other_user_segment,
                        isFriend: e.is_friend,
                        dmProbability:
                          null !== (t = e.dm_probability) && void 0 !== t
                            ? t
                            : 0,
                        dmRank:
                          null !== (r = e.dm_rank) && void 0 !== r ? r : 0,
                        vcProbability:
                          null !== (n = e.vc_probability) && void 0 !== n
                            ? n
                            : 0,
                        vcRank:
                          null !== (i = e.vc_rank) && void 0 !== i ? i : 0,
                        serverMessageProbability:
                          null !== (o = e.server_message_probability) &&
                          void 0 !== o
                            ? o
                            : 0,
                        serverMessageRank:
                          null !== (a = e.server_message_rank) && void 0 !== a
                            ? a
                            : 0,
                        communicationProbability:
                          null !== (s = e.communication_probability) &&
                          void 0 !== s
                            ? s
                            : 0,
                        communicationRank:
                          null !== (l = e.communication_rank) && void 0 !== l
                            ? l
                            : 0,
                      };
                    }),
                  });
                },
                () => {
                  i.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
    },
    496232: function (e, t, r) {
      "use strict";
      r.d(t, {
        K: function () {
          return n;
        },
      });
      let n = r(70956).Z.Millis.DAY;
    },
    428598: function (e, t, r) {
      "use strict";
      let n;
      r(47120);
      var i,
        o = r(442837),
        a = r(570140),
        s = r(699516),
        l = r(496232);
      function c(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      let d = !1,
        u = Object.freeze({ userAffinities: [], lastFetched: 0 }),
        f = { ...u };
      function p() {
        n = new Map(
          f.userAffinities
            .filter((e) => !s.Z.isBlockedOrIgnored(e.otherUserId))
            .map((e) => [e.otherUserId, e]),
        );
      }
      class v extends (i = o.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(s.Z),
            null != e &&
              ((f.userAffinities = e.userAffinities),
              (f.lastFetched = e.lastFetched),
              p()),
            this.syncWith([s.Z], p);
        }
        shouldFetch() {
          if (!d) return Date.now() - f.lastFetched > l.K;
        }
        isFetching() {
          return d;
        }
        getUserAffinities() {
          return f.userAffinities;
        }
        getUserAffinity(e) {
          return n.get(e);
        }
        getState() {
          return f;
        }
      }
      c(v, "displayName", "UserAffinitiesStoreV2"),
        c(v, "persistKey", "UserAffinitiesStoreV2"),
        (t.Z = new v(a.Z, {
          LOAD_USER_AFFINITIES_V2: function () {
            d = !0;
          },
          LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: t } = e;
            (f.lastFetched = Date.now()), (d = !1), (f.userAffinities = t), p();
          },
          LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            d = !1;
          },
          LOGOUT: function () {
            (f = { ...u }), (n = new Map()), (d = !1);
          },
        }));
    },
    494620: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return f;
        },
        z: function () {
          return i;
        },
      });
      var n,
        i,
        o = r(200651);
      r(192379);
      var a = r(120356),
        s = r.n(a),
        l = r(481060),
        c = r(505965);
      ((n = i || (i = {})).INFO = "info"), (n.WARNING = "warning");
      let d = { info: c.info, warning: c.warning },
        u = { info: l.CircleInformationIcon, warning: l.CircleWarningIcon };
      function f(e) {
        let { children: t, className: r, look: n = "info" } = e,
          i = u[n];
        return (0, o.jsxs)("div", {
          className: s()(c.root, r, d[n]),
          children: [
            (0, o.jsx)(i, { className: c.icon, color: "currentColor" }),
            (0, o.jsx)(l.Text, {
              className: c.text,
              variant: "text-sm/medium",
              color: "text-normal",
              children: t,
            }),
          ],
        });
      }
    },
    4912: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = r(200651);
      r(192379);
      var i = r(325767);
      function o(e) {
        let {
          width: t = 14,
          height: r = 14,
          color: o = "currentColor",
          foreground: a,
          ...s
        } = e;
        return (0, n.jsx)("svg", {
          ...(0, i.Z)(s),
          width: t,
          height: r,
          viewBox: "0 0 14 14",
          children: (0, n.jsx)("path", {
            className: a,
            fill: o,
            d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z",
          }),
        });
      }
    },
    91047: function (e, t, r) {
      "use strict";
      r.d(t, {
        Pv: function () {
          return o;
        },
        _j: function () {
          return a;
        },
        nm: function () {
          return s;
        },
        xS: function () {
          return l;
        },
      }),
        r(411104);
      var n = r(200651);
      r(192379);
      var i = r(239091);
      function o(e, t, o) {
        o.isGroupDM()
          ? (0, i.jW)(e, async () => {
              let { default: e } = await Promise.all([
                r.e("50506"),
                r.e("79695"),
                r.e("51269"),
                r.e("13351"),
                r.e("33862"),
                r.e("92453"),
                r.e("36761"),
              ]).then(r.bind(r, 354589));
              return (r) => (0, n.jsx)(e, { ...r, user: t, channel: o });
            })
          : o.isDM()
            ? (0, i.jW)(e, async () => {
                let { default: e } = await Promise.all([
                  r.e("50506"),
                  r.e("79695"),
                  r.e("51269"),
                  r.e("90508"),
                  r.e("13351"),
                  r.e("33862"),
                  r.e("70205"),
                  r.e("92453"),
                  r.e("56826"),
                  r.e("38046"),
                ]).then(r.bind(r, 131404));
                return (r) =>
                  (0, n.jsx)(e, {
                    ...r,
                    user: t,
                    channel: o,
                    showMute: !1,
                    targetIsUser: !0,
                  });
              })
            : null != o.guild_id
              ? (0, i.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    r.e("50506"),
                    r.e("79695"),
                    r.e("51269"),
                    r.e("13351"),
                    r.e("33862"),
                    r.e("92453"),
                    r.e("13125"),
                    r.e("80863"),
                  ]).then(r.bind(r, 757387));
                  return (r) =>
                    (0, n.jsx)(e, {
                      ...r,
                      user: t,
                      channel: o,
                      guildId: o.guild_id,
                    });
                })
              : (0, i.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    r.e("79695"),
                    r.e("69220"),
                    r.e("44378"),
                  ]).then(r.bind(r, 881351));
                  return (r) => (0, n.jsx)(e, { ...r, user: t });
                });
      }
      function a(e, t) {
        let { user: o, channel: a, moderationAlertId: s, guildId: l, ...c } = t;
        if (
          (null == a ? void 0 : a.isGroupDM()) ||
          (null == a ? void 0 : a.isDM())
        )
          throw Error("Cannot moderate user in DM or group DM");
        let d = null != l ? l : null == a ? void 0 : a.getGuildId();
        null != d &&
          (0, i.jW)(e, async () => {
            let { default: e } = await Promise.all([
              r.e("13125"),
              r.e("43039"),
            ]).then(r.bind(r, 833737));
            return (t) =>
              (0, n.jsx)(e, {
                ...t,
                user: o,
                channelId: null == a ? void 0 : a.id,
                guildId: d,
                moderationAlertId: s,
                ...c,
              });
          });
      }
      function s(e, t) {
        let {
          user: o,
          guildId: a,
          analyticsLocations: s,
          onCloseContextMenu: l,
          isViewOnly: c,
        } = t;
        (0, i.jW)(e, async () => {
          let { default: e } = await r.e("45130").then(r.bind(r, 246389));
          return (t) =>
            (0, n.jsx)(e, {
              ...t,
              user: o,
              guildId: a,
              analyticsLocations: s,
              onCloseContextMenu: l,
              isViewOnly: c,
            });
        });
      }
      function l(e, t, o) {
        null != o &&
          (0, i.jW)(e, async () => {
            let { default: e } = await r.e("50331").then(r.bind(r, 158195));
            return (t) => (0, n.jsx)(e, { ...t, guildId: o });
          });
      }
    },
    141038: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return l;
        },
      }),
        r(653041),
        r(47120);
      var n = r(512722),
        i = r.n(n),
        o = r(90757),
        a = r.n(o),
        s = r(65154);
      function l(e, t, r) {
        let n = window.DiscordNative;
        i()(null != n, "Can't get desktop sources outside of native app"),
          (t = null != t ? t : [s.vA.WINDOW, s.vA.SCREEN]),
          (r = null != r ? r : { width: 150, height: 150 });
        let o = [];
        return (
          t.includes(s.vA.SCREEN) &&
            e.supports(s.AN.SCREEN_PREVIEWS) &&
            (o.push(e.getScreenPreviews(r.width, r.height)),
            (t = t.filter((e) => e !== s.vA.SCREEN))),
          t.includes(s.vA.WINDOW) &&
            e.supports(s.AN.WINDOW_PREVIEWS) &&
            (o.push(e.getWindowPreviews(r.width, r.height)),
            (t = t.filter((e) => e !== s.vA.WINDOW))),
          0 !== t.length &&
            o.push(
              n.desktopCapture.getDesktopCaptureSources({
                types: t,
                thumbnailSize: r,
              }),
            ),
          Promise.all(o).then((e) => a()(e))
        );
      }
    },
    718922: function (e, t, r) {
      "use strict";
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    450957: function (e, t, r) {
      "use strict";
      e.exports = { banner: "banner_da16fe" };
    },
    322776: function (e, t, r) {
      "use strict";
      e.exports = {
        modalRoot: "modalRoot_a0e502",
        modalContent: "modalContent_a0e502",
        modalInner: "modalInner_a0e502",
        modalCloseButton: "modalCloseButton_a0e502",
        avatarDecoration: "avatarDecoration_a0e502",
        decorationBanner: "decorationBanner_a0e502",
        bannerContainer: "bannerContainer_a0e502",
        collectedInfoContainer: "collectedInfoContainer_a0e502",
        collectedTextContainer: "collectedTextContainer_a0e502",
        confettiCanvas: "confettiCanvas_a0e502",
        profileEffectShopPreview: "profileEffectShopPreview_a0e502",
        customConfetti: "customConfetti_a0e502",
        bundlePreview: "bundlePreview_a0e502",
        bundleProfileEffectCard: "bundleProfileEffectCard_a0e502",
        buttons: "buttons_a0e502",
        easterEggContainer: "easterEggContainer_a0e502",
      };
    },
    424188: function (e, t, r) {
      "use strict";
      e.exports = {
        avatarDecoration: "avatarDecoration_b74403",
        profileEffectContainer: "profileEffectContainer_b74403",
        profileEffect: "profileEffect_b74403",
        profileEffectBackground: "profileEffectBackground_b74403",
        previewContainer: "previewContainer_b74403",
        giftInfoContainer: "giftInfoContainer_b74403",
        previewContainerSelected: "previewContainerSelected_b74403",
        previewContainerError: "previewContainerError_b74403",
        previewTextContainer: "previewTextContainer_b74403",
        previewTitleContainer: "previewTitleContainer_b74403",
        previewTitle: "previewTitle_b74403",
        recipientError: "recipientError_b74403",
        previewLink: "previewLink_b74403",
      };
    },
    480621: function (e, t, r) {
      "use strict";
      e.exports = {
        shopPageContainer: "shopPageContainer_dd4901",
        giftModalContainer: "giftModalContainer_dd4901",
        heading1: "heading1_dd4901",
        description: "description_dd4901",
        reload: "reload_dd4901",
      };
    },
    501404: function (e, t, r) {
      "use strict";
      e.exports = { sm: "sm_bbdae8", md: "md_bbdae8" };
    },
    835106: function (e, t, r) {
      "use strict";
      e.exports = {
        fadeInAvatarImg: "fadeInAvatarImg_fa4525",
        avatarPurchased: "avatarPurchased_fa4525",
        avatar: "avatar_fa4525",
      };
    },
    890311: function (e, t, r) {
      "use strict";
      e.exports = {
        container: "container_eb992c",
        profileEffectShopPreview: "profileEffectShopPreview_eb992c",
        avatarDecorationPreview: "avatarDecorationPreview_eb992c",
      };
    },
    7804: function (e, t, r) {
      "use strict";
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    971653: function (e, t, r) {
      "use strict";
      e.exports = {
        header: "header_eb95a6",
        closeButton: "closeButton_eb95a6",
      };
    },
    820130: function (e, t, r) {
      "use strict";
      e.exports = {
        headerContainerGift: "headerContainerGift_f8f790",
        closeButtonGift: "closeButtonGift_f8f790",
      };
    },
    499749: function (e, t, r) {
      "use strict";
      e.exports = {
        modalOverrideBody: "modalOverrideBody_e84a32",
        modalOverrideSliderBody: "modalOverrideSliderBody_e84a32",
        confettiCanvas: "confettiCanvas_e84a32",
        customConfetti: "customConfetti_e84a32",
        hidden: "hidden_e84a32",
      };
    },
    721285: function (e, t, r) {
      "use strict";
      e.exports = {
        stepBody: "stepBody_dcb6d5",
        bodyColumnMiddle: "bodyColumnMiddle_dcb6d5",
        bodyColumnLeft: "bodyColumnLeft_dcb6d5",
        bodyColumnRight: "bodyColumnRight_dcb6d5",
        sendTo: "sendTo_dcb6d5",
        customGiftMessageWrapper: "customGiftMessageWrapper_dcb6d5",
        customGiftMessage: "customGiftMessage_dcb6d5",
        giftPreview: "giftPreview_dcb6d5",
        selectGiftTitle: "selectGiftTitle_dcb6d5",
        recommendedGiftPreview: "recommendedGiftPreview_dcb6d5",
        navigateToShopButton: "navigateToShopButton_dcb6d5",
        navigateToShopBody: "navigateToShopBody_dcb6d5",
        navigateToShopTextWrapper: "navigateToShopTextWrapper_dcb6d5",
        shopIcon: "shopIcon_dcb6d5",
      };
    },
    802633: function (e, t, r) {
      "use strict";
      e.exports = {
        headerContainer: "headerContainer_bab8b6",
        closeButton: "closeButton_bab8b6",
        headerImageContainer: "headerImageContainer_bab8b6",
        headerImage: "headerImage_bab8b6",
      };
    },
    538228: function (e, t, r) {
      "use strict";
      e.exports = {
        confirmation: "confirmation_b0b233",
        confirmationHeader: "confirmationHeader_b0b233",
        divider: "divider_b0b233",
      };
    },
    507472: function (e, t, r) {
      "use strict";
      e.exports = { container: "container_f4c122", header: "header_f4c122" };
    },
    563431: function (e, t, r) {
      "use strict";
      e.exports = {
        avatar: "avatar_f18fcb",
        overlay: "overlay_f18fcb",
        overlayIcon: "overlayIcon_f18fcb",
        clickable: "clickable_f18fcb",
        menu: "menu_f18fcb",
      };
    },
    90592: function (e, t, r) {
      "use strict";
      e.exports = { clickable: "clickable_eebaf6" };
    },
    957776: function (e, t, r) {
      "use strict";
      e.exports = {
        previewContainer: "previewContainer_c99d75",
        previewContainerSetHeight: "previewContainerSetHeight_c99d75",
        previewContainerAnimation: "previewContainerAnimation_c99d75",
        preview: "preview_c99d75",
        previewForCollected: "previewForCollected_c99d75 preview_c99d75",
        purchasedEffect: "purchasedEffect_c99d75",
      };
    },
    505965: function (e, t, r) {
      "use strict";
      e.exports = {
        root: "root_dc0d6d",
        icon: "icon_dc0d6d",
        text: "text_dc0d6d",
        info: "info_dc0d6d",
        warning: "warning_dc0d6d",
      };
    },
    1114: function (e, t, r) {
      "use strict";
      e.exports = {
        modal: "modal_beafbd",
        heading: "heading_beafbd",
        divider: "divider_beafbd",
        image: "image_beafbd",
        body: "body_beafbd",
        applyingTo: "applyingTo_beafbd",
        footer: "footer_beafbd",
        anomaly: "anomaly_beafbd",
        error: "error_beafbd",
        spinner: "spinner_beafbd",
        buttonCopy: "buttonCopy_beafbd",
        tooltip: "tooltip_beafbd",
      };
    },
    628146: function (e, t, r) {
      "use strict";
      e.exports = { avatars: "avatars_f2c2c8" };
    },
    91783: function (e, t, r) {
      "use strict";
      e.exports = {
        channel: "channel_b6391d",
        channelLeft: "channelLeft_b6391d",
      };
    },
  },
]);
//# sourceMappingURL=af5b6f7b5ef0c5704eec.js.map
