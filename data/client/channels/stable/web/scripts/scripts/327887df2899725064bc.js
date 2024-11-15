(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["53851"],
  {
    544140: function (e, t, n) {
      var r = n(796581),
        i = n(149912);
      e.exports = function e(t, n, o, a, l) {
        var s = -1,
          c = t.length;
        for (o || (o = i), l || (l = []); ++s < c; ) {
          var u = t[s];
          n > 0 && o(u)
            ? n > 1
              ? e(u, n - 1, o, a, l)
              : r(l, u)
            : !a && (l[l.length] = u);
        }
        return l;
      };
    },
    149912: function (e, t, n) {
      var r = n(466293),
        i = n(443735),
        o = n(402428),
        a = r ? r.isConcatSpreadable : void 0;
      e.exports = function (e) {
        return o(e) || i(e) || !!(a && e && e[a]);
      };
    },
    90757: function (e, t, n) {
      var r = n(544140);
      e.exports = function (e) {
        return (null == e ? 0 : e.length) ? r(e, 1) : [];
      };
    },
    269128: function (e, t, n) {
      "use strict";
      var r = n(200651);
      n(192379);
      var i = n(120356),
        o = n.n(i),
        a = n(772848),
        l = n(718922);
      let s = (0, a.Z)();
      t.Z = (e) => {
        let { open: t, className: n, withHighlight: i = !1 } = e;
        return (0, r.jsxs)("svg", {
          width: "18",
          height: "18",
          className: o()(l.button, n, { [l.open]: t, [l.withHighlight]: i }),
          children: [
            i &&
              (0, r.jsx)("defs", {
                children: (0, r.jsxs)("linearGradient", {
                  id: s,
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "18",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { offset: "0", stopColor: "#B473F5" }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
              }),
            (0, r.jsxs)("g", {
              fill: "none",
              fillRule: "evenodd",
              children: [
                (0, r.jsx)("path", { d: "M0 0h18v18H0" }),
                (0, r.jsx)("path", {
                  stroke: i ? "url(#".concat(s, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, r.jsx)("path", {
                  stroke: i ? "url(#".concat(s, ")") : "currentColor",
                  d: "M13.5 4.5l-9 9",
                  strokeLinecap: "round",
                }),
              ],
            }),
          ],
        });
      };
    },
    700582: function (e, t, n) {
      "use strict";
      var r = n(200651),
        i = n(192379),
        o = n(481060),
        a = n(372900);
      t.Z = i.memo(function (e) {
        var t, n, l, s;
        let {
            user: c,
            size: u = o.AvatarSizes.SIZE_32,
            animate: d = !1,
            "aria-hidden": f = !1,
            ...p
          } = e,
          v = i.useContext(a.Z);
        return (0, r.jsx)(o.Avatar, {
          src:
            ((t = c),
            (n = (0, o.getAvatarSize)(u)),
            (l = d),
            (s = v),
            t.getAvatarURL(s, n, l)),
          size: u,
          "aria-label": f ? void 0 : c.username,
          "aria-hidden": f,
          ...p,
        });
      });
    },
    285888: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return _;
        },
        v: function () {
          return b;
        },
      }),
        n(47120);
      var r,
        i,
        o,
        a = n(200651),
        l = n(192379),
        s = n(120356),
        c = n.n(s),
        u = n(569619),
        d = n(481060),
        f = n(981631),
        p = n(388032),
        v = n(7804);
      function h(e, t, n) {
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
      ((o = r || (r = {})).TOP = "top"), (o.BOTTOM = "bottom");
      let b = {
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
      class _ extends (i = l.Component) {
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
              valueRenderer: i,
              optionRenderer: o,
              multiValueRenderer: l,
              options: s,
              value: f,
              autofocus: h,
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
          null != h && (E.autoFocus = h),
            null != _ && (E.isDisabled = _),
            null != g && (E.isClearable = g),
            null != m && (E.isSearchable = m);
          let A = { IndicatorSeparator: () => null };
          null != o &&
            (A.Option = (e) =>
              (0, a.jsx)(u.wx.Option, { ...e, children: o(e.data) })),
            null != i &&
              (A.SingleValue = (e) =>
                (0, a.jsx)(u.wx.SingleValue, { ...e, children: i(e.data) })),
            null != l && (A.MultiValue = (e) => l(e.data));
          if (w && Array.isArray(f)) {
            let t = {};
            s.forEach((e) => {
              t[String(e.value)] = e;
            }),
              (e = f.map((e) => t[String(e)]));
          } else e = null != f ? s.find((e) => e.value === f) : null;
          return (0, a.jsx)(d.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, a.jsxs)("div", {
              className: c()(v.select, t, { [v.error]: null != r }),
              ref: this._containerRef,
              children: [
                (0, a.jsx)(u.ZP, {
                  ...E,
                  className: n,
                  ref: this._selectRef,
                  isMulti: w,
                  components: A,
                  options: s,
                  styles: null != C ? C : b,
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
                null != r
                  ? (0, a.jsx)("div", {
                      className: v.errorMessage,
                      children: r,
                    })
                  : null,
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            h(this, "_selectRef", l.createRef()),
            h(this, "_containerRef", l.createRef()),
            h(this, "state", { isFocused: !1, isOpen: !1 }),
            h(this, "handleFocus", (e) => {
              var t, n;
              this.setState({ isFocused: !0 }),
                null === (t = (n = this.props).onFocus) ||
                  void 0 === t ||
                  t.call(n, e);
            }),
            h(this, "handleBlur", (e) => {
              var t, n;
              this.setState({ isFocused: !1 }),
                null === (t = (n = this.props).onBlur) ||
                  void 0 === t ||
                  t.call(n, e);
            }),
            h(this, "handleKeyDown", (e) => {
              e.which === f.yXg.ESCAPE &&
                this.state.isOpen &&
                e.stopPropagation();
            }),
            h(this, "handleMenuOpen", () => {
              this.setState({ isOpen: !0 });
            }),
            h(this, "handleMenuClose", () => {
              this.setState({ isOpen: !1 });
            });
        }
      }
      h(_, "MenuPlacements", r);
    },
    869614: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      }),
        n(47120);
      let r = new Set(["nvidia"]);
      function i(e) {
        for (let t of Object.keys(e)) {
          let n = e[t];
          if (null != n && null == n.error && r.has(t)) return !0;
        }
        return !1;
      }
    },
    281083: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      }),
        n(47120);
      var r = n(553813),
        i = n.n(r),
        o = n(358085);
      let a = {
        [o.PlatformTypes.WINDOWS]: { nvidia: "<=537.58.0 || >=546.31" },
      };
      function l(e) {
        let t = a[(0, o.getPlatform)()];
        if (null == t) return !1;
        for (let n of Object.keys(e)) {
          let r = e[n],
            o = t[n];
          if (null == r || null == o || null != r.error) continue;
          let a = (function (e) {
            var t, n;
            return ""
              .concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".")
              .concat(null !== (n = e.minor) && void 0 !== n ? n : 0, ".0");
          })(r);
          if (!i().satisfies(a, o)) return !0;
        }
        return !1;
      }
    },
    672598: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      }),
        n(47120);
      var r = n(553813),
        i = n.n(r),
        o = n(358085);
      let a = { [o.PlatformTypes.WINDOWS]: { nvidia: ">=397.93.0" } };
      function l(e) {
        let t = a[(0, o.getPlatform)()];
        if (null == t) return !1;
        for (let n of Object.keys(e)) {
          let r = e[n],
            o = t[n];
          if (null == r || null == o || null != r.error) continue;
          let a = (function (e) {
            var t, n;
            return ""
              .concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".")
              .concat(null !== (n = e.minor) && void 0 !== n ? n : 0, ".0");
          })(r);
          if (!i().satisfies(a, o)) return !0;
        }
        return !1;
      }
    },
    653255: function (e, t, n) {
      "use strict";
      var r,
        i,
        o,
        a,
        l = n(442837),
        s = n(570140),
        c = n(358085),
        u = n(998502),
        d = n(869614),
        f = n(281083),
        p = n(672598);
      let v = !1,
        h = !0,
        b = !1;
      class _ extends (a = l.ZP.Store) {
        initialize() {
          !(!c.isPlatformEmbedded || __OVERLAY__) &&
            u.ZP.getGPUDriverVersions().then((e) => {
              (v = (0, p.Z)(e)),
                (h = (0, d.Z)(e)),
                (b = (0, f.Z)(e)),
                this.emitChange();
            });
        }
        get GPUDriversOutdated() {
          return v;
        }
        get canUseHardwareAcceleration() {
          return h;
        }
        get problematicGPUDriver() {
          return b;
        }
        getState() {
          return {
            GPUDriversOutdated: v,
            canUseHardwareAcceleration: h,
            problematicGPUDriver: b,
          };
        }
      }
      (o = "StreamingCapabilitiesStore"),
        (i = "displayName") in (r = _)
          ? Object.defineProperty(r, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[i] = o),
        (t.Z = new _(s.Z, {
          OVERLAY_INITIALIZE: function (e) {
            let { streamingCapabilitiesStoreState: t } = e;
            (v = t.GPUDriversOutdated), (h = t.canUseHardwareAcceleration);
          },
        }));
    },
    989941: function (e, t, n) {
      "use strict";
      let r;
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(145597);
      function o(e, t) {
        if (__OVERLAY__) {
          let e = t.getGame(),
            n = (0, i.QF)();
          return null == e || null == n
            ? null
            : (null == r ? void 0 : r.id) === e.id &&
                (null == r ? void 0 : r.pid) === n
              ? r
              : (r = {
                  id: e.id,
                  pid: n,
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
    690221: function (e, t, n) {
      "use strict";
      var r = n(200651),
        i = n(192379),
        o = n(481060),
        a = n(703656),
        l = n(981631);
      t.Z = i.forwardRef(function (e, t) {
        let {
            href: n,
            children: s,
            onClick: c,
            onKeyPress: u,
            focusProps: d,
            ...f
          } = e,
          p = i.useCallback(
            (e) => {
              if (!e.repeat)
                (e.charCode === l.yXg.SPACE || e.charCode === l.yXg.ENTER) &&
                  (e.preventDefault(),
                  null != n && (0, a.uL)(n),
                  null == c || c()),
                  null == u || u(e);
            },
            [n, u, c],
          ),
          v = i.useCallback(
            (e) => {
              if (!e.metaKey && !e.shiftKey && 0 === e.button)
                e.preventDefault(),
                  e.stopPropagation(),
                  null != n && (0, a.uL)(n),
                  null == c || c();
            },
            [n, c],
          ),
          h = (0, r.jsx)("a", {
            ref: t,
            href: n,
            onClick: v,
            onKeyPress: p,
            ...f,
            children: s,
          });
        return (0, r.jsx)(o.FocusRing, { ...d, children: h });
      });
    },
    93127: function (e, t, n) {
      "use strict";
      n.d(t, {
        W: function () {
          return c;
        },
        _: function () {
          return u;
        },
      });
      var r = n(544891),
        i = n(570140),
        o = n(480294),
        a = n(814443),
        l = n(428598),
        s = n(981631);
      function c() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return a.Z.needsRefresh()
          ? (i.Z.dispatch({ type: "LOAD_USER_AFFINITIES" }),
            r.tn
              .get({
                url: s.ANM.USER_AFFINITIES,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
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
      function u() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return l.Z.shouldFetch() && o.Z.hasConsented(s.pjP.PERSONALIZATION)
          ? (i.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
            r.tn
              .get({
                url: s.ANM.USER_AFFINITIES_V2,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                (e) => {
                  let { body: t } = e;
                  i.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                    affineUsers: t.user_affinities.map((e) => {
                      var t, n, r, i, o, a, l, s;
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
                          null !== (n = e.dm_rank) && void 0 !== n ? n : 0,
                        vcProbability:
                          null !== (r = e.vc_probability) && void 0 !== r
                            ? r
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
                          null !== (l = e.communication_probability) &&
                          void 0 !== l
                            ? l
                            : 0,
                        communicationRank:
                          null !== (s = e.communication_rank) && void 0 !== s
                            ? s
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
    496232: function (e, t, n) {
      "use strict";
      n.d(t, {
        K: function () {
          return r;
        },
      });
      let r = n(70956).Z.Millis.DAY;
    },
    428598: function (e, t, n) {
      "use strict";
      let r;
      n(47120);
      var i,
        o = n(442837),
        a = n(570140),
        l = n(699516),
        s = n(496232);
      function c(e, t, n) {
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
      let u = !1,
        d = Object.freeze({ userAffinities: [], lastFetched: 0 }),
        f = { ...d };
      function p() {
        r = new Map(
          f.userAffinities
            .filter((e) => !l.Z.isBlockedOrIgnored(e.otherUserId))
            .map((e) => [e.otherUserId, e]),
        );
      }
      class v extends (i = o.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(l.Z),
            null != e &&
              ((f.userAffinities = e.userAffinities),
              (f.lastFetched = e.lastFetched),
              p()),
            this.syncWith([l.Z], p);
        }
        shouldFetch() {
          if (!u) return Date.now() - f.lastFetched > s.K;
        }
        isFetching() {
          return u;
        }
        getUserAffinities() {
          return f.userAffinities;
        }
        getUserAffinity(e) {
          return r.get(e);
        }
        getState() {
          return f;
        }
      }
      c(v, "displayName", "UserAffinitiesStoreV2"),
        c(v, "persistKey", "UserAffinitiesStoreV2"),
        (t.Z = new v(a.Z, {
          LOAD_USER_AFFINITIES_V2: function () {
            u = !0;
          },
          LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: t } = e;
            (f.lastFetched = Date.now()), (u = !1), (f.userAffinities = t), p();
          },
          LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            u = !1;
          },
          LOGOUT: function () {
            (f = { ...d }), (r = new Map()), (u = !1);
          },
        }));
    },
    494620: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return f;
        },
        z: function () {
          return i;
        },
      });
      var r,
        i,
        o = n(200651);
      n(192379);
      var a = n(120356),
        l = n.n(a),
        s = n(481060),
        c = n(505965);
      ((r = i || (i = {})).INFO = "info"), (r.WARNING = "warning");
      let u = { info: c.info, warning: c.warning },
        d = { info: s.CircleInformationIcon, warning: s.CircleWarningIcon };
      function f(e) {
        let { children: t, className: n, look: r = "info" } = e,
          i = d[r];
        return (0, o.jsxs)("div", {
          className: l()(c.root, n, u[r]),
          children: [
            (0, o.jsx)(i, { className: c.icon, color: "currentColor" }),
            (0, o.jsx)(s.Text, {
              className: c.text,
              variant: "text-sm/medium",
              color: "text-normal",
              children: t,
            }),
          ],
        });
      }
    },
    4912: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(325767);
      function o(e) {
        let {
          width: t = 14,
          height: n = 14,
          color: o = "currentColor",
          foreground: a,
          ...l
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, i.Z)(l),
          width: t,
          height: n,
          viewBox: "0 0 14 14",
          children: (0, r.jsx)("path", {
            className: a,
            fill: o,
            d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z",
          }),
        });
      }
    },
    91047: function (e, t, n) {
      "use strict";
      n.d(t, {
        Pv: function () {
          return o;
        },
        _j: function () {
          return a;
        },
        nm: function () {
          return l;
        },
        xS: function () {
          return s;
        },
      }),
        n(411104);
      var r = n(200651);
      n(192379);
      var i = n(239091);
      function o(e, t, o) {
        o.isGroupDM()
          ? (0, i.jW)(e, async () => {
              let { default: e } = await Promise.all([
                n.e("50506"),
                n.e("79695"),
                n.e("51269"),
                n.e("13351"),
                n.e("33862"),
                n.e("92453"),
                n.e("36761"),
              ]).then(n.bind(n, 354589));
              return (n) => (0, r.jsx)(e, { ...n, user: t, channel: o });
            })
          : o.isDM()
            ? (0, i.jW)(e, async () => {
                let { default: e } = await Promise.all([
                  n.e("50506"),
                  n.e("79695"),
                  n.e("51269"),
                  n.e("90508"),
                  n.e("13351"),
                  n.e("33862"),
                  n.e("70205"),
                  n.e("92453"),
                  n.e("56826"),
                  n.e("38046"),
                ]).then(n.bind(n, 131404));
                return (n) =>
                  (0, r.jsx)(e, {
                    ...n,
                    user: t,
                    channel: o,
                    showMute: !1,
                    targetIsUser: !0,
                  });
              })
            : null != o.guild_id
              ? (0, i.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    n.e("50506"),
                    n.e("79695"),
                    n.e("51269"),
                    n.e("13351"),
                    n.e("33862"),
                    n.e("92453"),
                    n.e("13125"),
                    n.e("80863"),
                  ]).then(n.bind(n, 757387));
                  return (n) =>
                    (0, r.jsx)(e, {
                      ...n,
                      user: t,
                      channel: o,
                      guildId: o.guild_id,
                    });
                })
              : (0, i.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    n.e("79695"),
                    n.e("69220"),
                    n.e("44378"),
                  ]).then(n.bind(n, 881351));
                  return (n) => (0, r.jsx)(e, { ...n, user: t });
                });
      }
      function a(e, t) {
        let { user: o, channel: a, moderationAlertId: l, guildId: s, ...c } = t;
        if (
          (null == a ? void 0 : a.isGroupDM()) ||
          (null == a ? void 0 : a.isDM())
        )
          throw Error("Cannot moderate user in DM or group DM");
        let u = null != s ? s : null == a ? void 0 : a.getGuildId();
        null != u &&
          (0, i.jW)(e, async () => {
            let { default: e } = await Promise.all([
              n.e("13125"),
              n.e("43039"),
            ]).then(n.bind(n, 833737));
            return (t) =>
              (0, r.jsx)(e, {
                ...t,
                user: o,
                channelId: null == a ? void 0 : a.id,
                guildId: u,
                moderationAlertId: l,
                ...c,
              });
          });
      }
      function l(e, t) {
        let {
          user: o,
          guildId: a,
          analyticsLocations: l,
          onCloseContextMenu: s,
          isViewOnly: c,
        } = t;
        (0, i.jW)(e, async () => {
          let { default: e } = await n.e("45130").then(n.bind(n, 246389));
          return (t) =>
            (0, r.jsx)(e, {
              ...t,
              user: o,
              guildId: a,
              analyticsLocations: l,
              onCloseContextMenu: s,
              isViewOnly: c,
            });
        });
      }
      function s(e, t, o) {
        null != o &&
          (0, i.jW)(e, async () => {
            let { default: e } = await n.e("50331").then(n.bind(n, 158195));
            return (t) => (0, r.jsx)(e, { ...t, guildId: o });
          });
      }
    },
    141038: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      }),
        n(653041),
        n(47120);
      var r = n(512722),
        i = n.n(r),
        o = n(90757),
        a = n.n(o),
        l = n(65154);
      function s(e, t, n) {
        let r = window.DiscordNative;
        i()(null != r, "Can't get desktop sources outside of native app"),
          (t = null != t ? t : [l.vA.WINDOW, l.vA.SCREEN]),
          (n = null != n ? n : { width: 150, height: 150 });
        let o = [];
        return (
          t.includes(l.vA.SCREEN) &&
            e.supports(l.AN.SCREEN_PREVIEWS) &&
            (o.push(e.getScreenPreviews(n.width, n.height)),
            (t = t.filter((e) => e !== l.vA.SCREEN))),
          t.includes(l.vA.WINDOW) &&
            e.supports(l.AN.WINDOW_PREVIEWS) &&
            (o.push(e.getWindowPreviews(n.width, n.height)),
            (t = t.filter((e) => e !== l.vA.WINDOW))),
          0 !== t.length &&
            o.push(
              r.desktopCapture.getDesktopCaptureSources({
                types: t,
                thumbnailSize: n,
              }),
            ),
          Promise.all(o).then((e) => a()(e))
        );
      }
    },
    718922: function (e, t, n) {
      "use strict";
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    450957: function (e, t, n) {
      "use strict";
      e.exports = { banner: "banner_da16fe" };
    },
    322776: function (e, t, n) {
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
    424188: function (e, t, n) {
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
    480621: function (e, t, n) {
      "use strict";
      e.exports = {
        shopPageContainer: "shopPageContainer_dd4901",
        giftModalContainer: "giftModalContainer_dd4901",
        heading1: "heading1_dd4901",
        description: "description_dd4901",
        reload: "reload_dd4901",
      };
    },
    501404: function (e, t, n) {
      "use strict";
      e.exports = { sm: "sm_bbdae8", md: "md_bbdae8" };
    },
    835106: function (e, t, n) {
      "use strict";
      e.exports = {
        fadeInAvatarImg: "fadeInAvatarImg_fa4525",
        avatarPurchased: "avatarPurchased_fa4525",
        avatar: "avatar_fa4525",
      };
    },
    890311: function (e, t, n) {
      "use strict";
      e.exports = {
        container: "container_eb992c",
        profileEffectShopPreview: "profileEffectShopPreview_eb992c",
        avatarDecorationPreview: "avatarDecorationPreview_eb992c",
      };
    },
    7804: function (e, t, n) {
      "use strict";
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    971653: function (e, t, n) {
      "use strict";
      e.exports = {
        header: "header_eb95a6",
        closeButton: "closeButton_eb95a6",
      };
    },
    820130: function (e, t, n) {
      "use strict";
      e.exports = {
        headerContainerGift: "headerContainerGift_f8f790",
        closeButtonGift: "closeButtonGift_f8f790",
      };
    },
    499749: function (e, t, n) {
      "use strict";
      e.exports = {
        modalOverrideBody: "modalOverrideBody_e84a32",
        modalOverrideSliderBody: "modalOverrideSliderBody_e84a32",
        confettiCanvas: "confettiCanvas_e84a32",
        customConfetti: "customConfetti_e84a32",
        hidden: "hidden_e84a32",
      };
    },
    721285: function (e, t, n) {
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
    802633: function (e, t, n) {
      "use strict";
      e.exports = {
        headerContainer: "headerContainer_bab8b6",
        closeButton: "closeButton_bab8b6",
        headerImageContainer: "headerImageContainer_bab8b6",
        headerImage: "headerImage_bab8b6",
      };
    },
    538228: function (e, t, n) {
      "use strict";
      e.exports = {
        confirmation: "confirmation_b0b233",
        confirmationHeader: "confirmationHeader_b0b233",
        divider: "divider_b0b233",
      };
    },
    507472: function (e, t, n) {
      "use strict";
      e.exports = { container: "container_f4c122", header: "header_f4c122" };
    },
    563431: function (e, t, n) {
      "use strict";
      e.exports = {
        avatar: "avatar_f18fcb",
        overlay: "overlay_f18fcb",
        overlayIcon: "overlayIcon_f18fcb",
        clickable: "clickable_f18fcb",
        menu: "menu_f18fcb",
      };
    },
    90592: function (e, t, n) {
      "use strict";
      e.exports = { clickable: "clickable_eebaf6" };
    },
    957776: function (e, t, n) {
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
    505965: function (e, t, n) {
      "use strict";
      e.exports = {
        root: "root_dc0d6d",
        icon: "icon_dc0d6d",
        text: "text_dc0d6d",
        info: "info_dc0d6d",
        warning: "warning_dc0d6d",
      };
    },
    1114: function (e, t, n) {
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
      };
    },
    628146: function (e, t, n) {
      "use strict";
      e.exports = { avatars: "avatars_f2c2c8" };
    },
    91783: function (e, t, n) {
      "use strict";
      e.exports = {
        channel: "channel_b6391d",
        channelLeft: "channelLeft_b6391d",
      };
    },
  },
]);
//# sourceMappingURL=327887df2899725064bc.js.map
