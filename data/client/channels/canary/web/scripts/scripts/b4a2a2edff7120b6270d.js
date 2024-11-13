(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["20525"],
  {
    544140: function (e, t, n) {
      var r = n(796581),
        i = n(149912);
      e.exports = function e(t, n, o, a, s) {
        var l = -1,
          c = t.length;
        for (o || (o = i), s || (s = []); ++l < c; ) {
          var u = t[l];
          n > 0 && o(u)
            ? n > 1
              ? e(u, n - 1, o, a, s)
              : r(s, u)
            : !a && (s[s.length] = u);
        }
        return s;
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
        s = n(841261);
      let l = (0, a.Z)();
      t.Z = (e) => {
        let { open: t, className: n, withHighlight: i = !1 } = e;
        return (0, r.jsxs)("svg", {
          width: "18",
          height: "18",
          className: o()(s.button, n, { [s.open]: t, [s.withHighlight]: i }),
          children: [
            i &&
              (0, r.jsx)("defs", {
                children: (0, r.jsxs)("linearGradient", {
                  id: l,
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
                  stroke: i ? "url(#".concat(l, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, r.jsx)("path", {
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
    700582: function (e, t, n) {
      "use strict";
      var r = n(200651),
        i = n(192379),
        o = n(481060),
        a = n(372900);
      t.Z = i.memo(function (e) {
        var t, n, s, l;
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
            (s = d),
            (l = v),
            t.getAvatarURL(l, n, s)),
          size: u,
          "aria-label": f ? void 0 : c.username,
          "aria-hidden": f,
          ...p,
        });
      });
    },
    120619: function (e, t, n) {
      "use strict";
      n(47120);
      var r,
        i,
        o,
        a,
        s = n(442837),
        l = n(570140),
        c = n(959546),
        u = n(215023);
      let d = new Map(),
        f = new Set(),
        p = new Set(),
        v = new Set(),
        _ = new Map(),
        h = !1,
        b = null;
      class g extends (r = s.ZP.Store) {
        getPrice(e) {
          return d.get(e);
        }
        isFetchingPrice(e) {
          return f.has(e);
        }
        getErrored(e) {
          return v.has(e);
        }
        getEntitlement(e) {
          return _.get(e);
        }
        isEntitlementFetched(e) {
          return _.has(e);
        }
        isEntitlementFetching(e) {
          return p.has(e);
        }
        getPlayedAnimation() {
          return h;
        }
        getPreviousGoLiveSettings() {
          return b;
        }
      }
      (a = "ConsumablesStore"),
        (o = "displayName") in (i = g)
          ? Object.defineProperty(i, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[o] = a),
        (t.Z = new g(l.Z, {
          CONSUMABLES_PRICE_FETCH_STARTED: (e) => {
            f.add(e.skuId);
          },
          CONSUMABLES_PRICE_FETCH_SUCCEEDED: (e) => {
            d.set(e.skuId, e.price), f.delete(e.skuId);
          },
          CONSUMABLES_PRICE_FETCH_FAILED: (e) => {
            f.delete(e.skuId), v.add(e.skuId);
          },
          CONSUMABLES_CLEAR_ERROR: (e) => {
            v.delete(e.skuId);
          },
          CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED: (e) => {
            p.delete(e.skuId), _.set(e.skuId, e.entitlement);
          },
          SKU_PURCHASE_SUCCESS: (e) => {
            if (1 !== e.entitlements.length) return;
            let t = e.entitlements[0];
            if (t.sku_id === u.FX) _.set(e.skuId, c.Z.createFromServer(t));
          },
          PLAYED_HD_STREAMING_POTION_ANIMATION: (e) => {
            h = !0;
          },
          RESET_PLAYED_HD_STREAMING_POTION_ANIMATION: (e) => {
            h = !1;
          },
          CONSUMABLES_ENTITLEMENT_FETCH_FAILED: (e) => {
            v.add(e.skuId), p.delete(e.skuId);
          },
          CONSUMABLES_ENTITLEMENT_FETCH_STARTED: (e) => {
            p.add(e.skuId);
          },
          SET_PREVIOUS_GO_LIVE_SETTINGS: (e) => {
            b = e.previousGoLiveSettings;
          },
        }));
    },
    285888: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return b;
        },
        v: function () {
          return h;
        },
      }),
        n(47120);
      var r,
        i,
        o,
        a = n(200651),
        s = n(192379),
        l = n(120356),
        c = n.n(l),
        u = n(569619),
        d = n(481060),
        f = n(981631),
        p = n(388032),
        v = n(404934);
      function _(e, t, n) {
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
      class b extends (i = s.Component) {
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
              multiValueRenderer: s,
              options: l,
              value: f,
              autofocus: _,
              disabled: b,
              clearable: g,
              searchable: m,
              styleOverrides: C,
              isMulti: E,
              placeholder: S,
              filterOption: I,
              closeMenuOnSelect: w = !0,
              ...x
            } = this.props,
            y = { ...x };
          null != _ && (y.autoFocus = _),
            null != b && (y.isDisabled = b),
            null != g && (y.isClearable = g),
            null != m && (y.isSearchable = m);
          let A = { IndicatorSeparator: () => null };
          null != o &&
            (A.Option = (e) =>
              (0, a.jsx)(u.wx.Option, { ...e, children: o(e.data) })),
            null != i &&
              (A.SingleValue = (e) =>
                (0, a.jsx)(u.wx.SingleValue, { ...e, children: i(e.data) })),
            null != s && (A.MultiValue = (e) => s(e.data));
          if (E && Array.isArray(f)) {
            let t = {};
            l.forEach((e) => {
              t[String(e.value)] = e;
            }),
              (e = f.map((e) => t[String(e)]));
          } else e = null != f ? l.find((e) => e.value === f) : null;
          return (0, a.jsx)(d.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, a.jsxs)("div", {
              className: c()(v.select, t, { [v.error]: null != r }),
              ref: this._containerRef,
              children: [
                (0, a.jsx)(u.ZP, {
                  ...y,
                  className: n,
                  ref: this._selectRef,
                  isMulti: E,
                  components: A,
                  options: l,
                  styles: null != C ? C : h,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onMenuOpen: this.handleMenuOpen,
                  onMenuClose: this.handleMenuClose,
                  closeMenuOnSelect: w,
                  value: e,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != S ? S : p.intl.string(p.t.XqMe3N),
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
            _(this, "_selectRef", s.createRef()),
            _(this, "_containerRef", s.createRef()),
            _(this, "state", { isFocused: !1, isOpen: !1 }),
            _(this, "handleFocus", (e) => {
              var t, n;
              this.setState({ isFocused: !0 }),
                null === (t = (n = this.props).onFocus) ||
                  void 0 === t ||
                  t.call(n, e);
            }),
            _(this, "handleBlur", (e) => {
              var t, n;
              this.setState({ isFocused: !1 }),
                null === (t = (n = this.props).onBlur) ||
                  void 0 === t ||
                  t.call(n, e);
            }),
            _(this, "handleKeyDown", (e) => {
              e.which === f.yXg.ESCAPE &&
                this.state.isOpen &&
                e.stopPropagation();
            }),
            _(this, "handleMenuOpen", () => {
              this.setState({ isOpen: !0 });
            }),
            _(this, "handleMenuClose", () => {
              this.setState({ isOpen: !1 });
            });
        }
      }
      _(b, "MenuPlacements", r);
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
          return s;
        },
      }),
        n(47120);
      var r = n(553813),
        i = n.n(r),
        o = n(358085);
      let a = {
        [o.PlatformTypes.WINDOWS]: { nvidia: "<=537.58.0 || >=546.31" },
      };
      function s(e) {
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
          return s;
        },
      }),
        n(47120);
      var r = n(553813),
        i = n.n(r),
        o = n(358085);
      let a = { [o.PlatformTypes.WINDOWS]: { nvidia: ">=397.93.0" } };
      function s(e) {
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
        s = n(442837),
        l = n(570140),
        c = n(358085),
        u = n(998502),
        d = n(869614),
        f = n(281083),
        p = n(672598);
      let v = !1,
        _ = !0,
        h = !1;
      class b extends (a = s.ZP.Store) {
        initialize() {
          !(!c.isPlatformEmbedded || __OVERLAY__) &&
            u.ZP.getGPUDriverVersions().then((e) => {
              (v = (0, p.Z)(e)),
                (_ = (0, d.Z)(e)),
                (h = (0, f.Z)(e)),
                this.emitChange();
            });
        }
        get GPUDriversOutdated() {
          return v;
        }
        get canUseHardwareAcceleration() {
          return _;
        }
        get problematicGPUDriver() {
          return h;
        }
        getState() {
          return {
            GPUDriversOutdated: v,
            canUseHardwareAcceleration: _,
            problematicGPUDriver: h,
          };
        }
      }
      (o = "StreamingCapabilitiesStore"),
        (i = "displayName") in (r = b)
          ? Object.defineProperty(r, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[i] = o),
        (t.Z = new b(l.Z, {
          OVERLAY_INITIALIZE: function (e) {
            let { streamingCapabilitiesStoreState: t } = e;
            (v = t.GPUDriversOutdated), (_ = t.canUseHardwareAcceleration);
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
        s = n(981631);
      t.Z = i.forwardRef(function (e, t) {
        let {
            href: n,
            children: l,
            onClick: c,
            onKeyPress: u,
            focusProps: d,
            ...f
          } = e,
          p = i.useCallback(
            (e) => {
              if (!e.repeat)
                (e.charCode === s.yXg.SPACE || e.charCode === s.yXg.ENTER) &&
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
          _ = (0, r.jsx)("a", {
            ref: t,
            href: n,
            onClick: v,
            onKeyPress: p,
            ...f,
            children: l,
          });
        return (0, r.jsx)(o.FocusRing, { ...d, children: _ });
      });
    },
    977059: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return o;
        },
        S: function () {
          return i;
        },
      });
      let r = (0, n(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
      function i(e) {
        let { location: t } = e;
        return r.useExperiment({ location: t }, { autoTrackExposure: !0 });
      }
      function o(e) {
        let { location: t } = e;
        return r.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
      }
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
        s = n(428598),
        l = n(981631);
      function c() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return a.Z.needsRefresh()
          ? (i.Z.dispatch({ type: "LOAD_USER_AFFINITIES" }),
            r.tn
              .get({
                url: l.ANM.USER_AFFINITIES,
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
        return s.Z.shouldFetch() && o.Z.hasConsented(l.pjP.PERSONALIZATION)
          ? (i.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
            r.tn
              .get({
                url: l.ANM.USER_AFFINITIES_V2,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                (e) => {
                  let { body: t } = e;
                  i.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                    affineUsers: t.user_affinities.map((e) => {
                      var t, n, r, i, o, a, s, l;
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
        s = n(699516),
        l = n(496232);
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
          if (!u) return Date.now() - f.lastFetched > l.K;
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
        s = n.n(a),
        l = n(481060),
        c = n(179840);
      ((r = i || (i = {})).INFO = "info"), (r.WARNING = "warning");
      let u = { info: c.info, warning: c.warning },
        d = { info: l.CircleInformationIcon, warning: l.CircleWarningIcon };
      function f(e) {
        let { children: t, className: n, look: r = "info" } = e,
          i = d[r];
        return (0, o.jsxs)("div", {
          className: s()(c.root, n, u[r]),
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
          ...s
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, i.Z)(s),
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
          return s;
        },
        xS: function () {
          return l;
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
                n.e("38718"),
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
                  n.e("71427"),
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
                    n.e("13441"),
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
                    n.e("50261"),
                  ]).then(n.bind(n, 881351));
                  return (n) => (0, r.jsx)(e, { ...n, user: t });
                });
      }
      function a(e, t) {
        let { user: o, channel: a, moderationAlertId: s, guildId: l, ...c } = t;
        if (
          (null == a ? void 0 : a.isGroupDM()) ||
          (null == a ? void 0 : a.isDM())
        )
          throw Error("Cannot moderate user in DM or group DM");
        let u = null != l ? l : null == a ? void 0 : a.getGuildId();
        null != u &&
          (0, i.jW)(e, async () => {
            let { default: e } = await Promise.all([
              n.e("13125"),
              n.e("33685"),
            ]).then(n.bind(n, 833737));
            return (t) =>
              (0, r.jsx)(e, {
                ...t,
                user: o,
                channelId: null == a ? void 0 : a.id,
                guildId: u,
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
          let { default: e } = await n.e("45130").then(n.bind(n, 246389));
          return (t) =>
            (0, r.jsx)(e, {
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
            let { default: e } = await n.e("50331").then(n.bind(n, 158195));
            return (t) => (0, r.jsx)(e, { ...t, guildId: o });
          });
      }
    },
    141038: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      }),
        n(653041),
        n(47120);
      var r = n(512722),
        i = n.n(r),
        o = n(90757),
        a = n.n(o),
        s = n(65154);
      function l(e, t, n) {
        let r = window.DiscordNative;
        i()(null != r, "Can't get desktop sources outside of native app"),
          (t = null != t ? t : [s.vA.WINDOW, s.vA.SCREEN]),
          (n = null != n ? n : { width: 150, height: 150 });
        let o = [];
        return (
          t.includes(s.vA.SCREEN) &&
            e.supports(s.AN.SCREEN_PREVIEWS) &&
            (o.push(e.getScreenPreviews(n.width, n.height)),
            (t = t.filter((e) => e !== s.vA.SCREEN))),
          t.includes(s.vA.WINDOW) &&
            e.supports(s.AN.WINDOW_PREVIEWS) &&
            (o.push(e.getWindowPreviews(n.width, n.height)),
            (t = t.filter((e) => e !== s.vA.WINDOW))),
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
    841261: function (e, t, n) {
      "use strict";
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    689380: function (e, t, n) {
      "use strict";
      e.exports = { banner: "banner_da16fe" };
    },
    783600: function (e, t, n) {
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
    696307: function (e, t, n) {
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
    417552: function (e, t, n) {
      "use strict";
      e.exports = {
        shopPageContainer: "shopPageContainer_dd4901",
        giftModalContainer: "giftModalContainer_dd4901",
        heading1: "heading1_dd4901",
        description: "description_dd4901",
        reload: "reload_dd4901",
      };
    },
    446563: function (e, t, n) {
      "use strict";
      e.exports = {
        fadeInAvatarImg: "fadeInAvatarImg_fa4525",
        avatarPurchased: "avatarPurchased_fa4525",
        avatar: "avatar_fa4525",
      };
    },
    746443: function (e, t, n) {
      "use strict";
      e.exports = {
        container: "container_eb992c",
        profileEffectShopPreview: "profileEffectShopPreview_eb992c",
        avatarDecorationPreview: "avatarDecorationPreview_eb992c",
      };
    },
    404934: function (e, t, n) {
      "use strict";
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    18678: function (e, t, n) {
      "use strict";
      e.exports = {
        header: "header_eb95a6",
        closeButton: "closeButton_eb95a6",
      };
    },
    73913: function (e, t, n) {
      "use strict";
      e.exports = {
        headerContainerGift: "headerContainerGift_f8f790",
        closeButtonGift: "closeButtonGift_f8f790",
      };
    },
    556709: function (e, t, n) {
      "use strict";
      e.exports = {
        modalOverrideBody: "modalOverrideBody_e84a32",
        modalOverrideSliderBody: "modalOverrideSliderBody_e84a32",
        confettiCanvas: "confettiCanvas_e84a32",
        customConfetti: "customConfetti_e84a32",
        hidden: "hidden_e84a32",
      };
    },
    829294: function (e, t, n) {
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
    264499: function (e, t, n) {
      "use strict";
      e.exports = {
        headerContainer: "headerContainer_bab8b6",
        closeButton: "closeButton_bab8b6",
        headerImageContainer: "headerImageContainer_bab8b6",
        headerImage: "headerImage_bab8b6",
      };
    },
    525550: function (e, t, n) {
      "use strict";
      e.exports = {
        confirmation: "confirmation_b0b233",
        confirmationHeader: "confirmationHeader_b0b233",
        divider: "divider_b0b233",
      };
    },
    706995: function (e, t, n) {
      "use strict";
      e.exports = { container: "container_f4c122", header: "header_f4c122" };
    },
    529934: function (e, t, n) {
      "use strict";
      e.exports = {
        avatar: "avatar_f18fcb",
        overlay: "overlay_f18fcb",
        overlayIcon: "overlayIcon_f18fcb",
        clickable: "clickable_f18fcb",
        menu: "menu_f18fcb",
      };
    },
    892532: function (e, t, n) {
      "use strict";
      e.exports = { clickable: "clickable_eebaf6" };
    },
    296140: function (e, t, n) {
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
    179840: function (e, t, n) {
      "use strict";
      e.exports = {
        root: "root_dc0d6d",
        icon: "icon_dc0d6d",
        text: "text_dc0d6d",
        info: "info_dc0d6d",
        warning: "warning_dc0d6d",
      };
    },
    912568: function (e, t, n) {
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
    858836: function (e, t, n) {
      "use strict";
      e.exports = { avatars: "avatars_f2c2c8" };
    },
    666956: function (e, t, n) {
      "use strict";
      e.exports = {
        channel: "channel_b6391d",
        channelLeft: "channelLeft_b6391d",
      };
    },
  },
]);
//# sourceMappingURL=b4a2a2edff7120b6270d.js.map
