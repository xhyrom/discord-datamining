(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84980"],
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
    99713: function (e) {
      "use strict";
      e.exports = "/assets/19030c98f81270503f7a.png";
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
          h = i.useContext(a.Z);
        return (0, r.jsx)(o.Avatar, {
          src:
            ((t = c),
            (n = (0, o.getAvatarSize)(u)),
            (l = d),
            (s = h),
            t.getAvatarURL(s, n, l)),
          size: u,
          "aria-label": f ? void 0 : c.username,
          "aria-hidden": f,
          ...p,
        });
      });
    },
    997323: function (e, t, n) {
      "use strict";
      n.d(t, {
        Gq: function () {
          return s;
        },
        LE: function () {
          return p;
        },
        SN: function () {
          return d;
        },
        Zu: function () {
          return u;
        },
        ag: function () {
          return f;
        },
        gA: function () {
          return c;
        },
        x8: function () {
          return h;
        },
      }),
        n(411104);
      var r = n(544891),
        i = n(343817),
        o = n(570140),
        a = n(959546),
        l = n(981631);
      let s = async (e) => {
          o.Z.dispatch({ type: "CONSUMABLES_PRICE_FETCH_STARTED", skuId: e });
          try {
            let t = await r.tn.get({
              url: l.ANM.CONSUMABLE_FETCH_PRICE(e),
              rejectWithError: !1,
            });
            if (null == t.body.price)
              throw (
                (o.Z.dispatch({
                  type: "CONSUMABLES_PRICE_FETCH_FAILED",
                  skuId: e,
                }),
                Error("price not found"))
              );
            let n = t.body.price;
            return (
              o.Z.dispatch({
                type: "CONSUMABLES_PRICE_FETCH_SUCCEEDED",
                skuId: e,
                price: n,
              }),
              {
                amount: n.amount,
                currency: n.currency,
                exponent: n.currency_exponent,
              }
            );
          } catch (t) {
            throw (
              (o.Z.dispatch({
                type: "CONSUMABLES_PRICE_FETCH_FAILED",
                skuId: e,
              }),
              new i.Hx(t))
            );
          }
        },
        c = async (e) => {
          o.Z.dispatch({
            type: "CONSUMABLES_ENTITLEMENT_FETCH_STARTED",
            skuId: e,
          });
          try {
            let t = await r.tn.get({
                url: l.ANM.FETCH_HD_STREAMING_ENTITLEMENT,
                rejectWithError: !1,
              }),
              n =
                null != t.body.entitlement
                  ? a.Z.createFromServer(t.body.entitlement)
                  : null;
            return (
              o.Z.dispatch({
                type: "CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED",
                skuId: e,
                entitlement: n,
              }),
              t.body.entitlement
            );
          } catch (t) {
            throw (
              (o.Z.dispatch({
                type: "CONSUMABLES_ENTITLEMENT_FETCH_FAILED",
                skuId: e,
              }),
              new i.Hx(t))
            );
          }
        },
        u = async (e, t) => {
          try {
            await r.tn.post({
              url: l.ANM.CONSUME_HD_STREAMING_POTION,
              body: { channel_id: e },
              rejectWithError: !1,
            }),
              o.Z.dispatch({ type: "CLEAR_CONSUMED_ENTITLEMENT", skuId: t });
          } catch (e) {
            throw new i.Hx(e);
          }
        },
        d = (e) => {
          o.Z.dispatch({ type: "CONSUMABLES_CLEAR_ERROR", skuId: e });
        },
        f = () => {
          o.Z.dispatch({ type: "PLAYED_HD_STREAMING_POTION_ANIMATION" });
        },
        p = () => {
          o.Z.dispatch({ type: "RESET_PLAYED_HD_STREAMING_POTION_ANIMATION" });
        },
        h = (e) => {
          o.Z.dispatch({
            type: "SET_PREVIOUS_GO_LIVE_SETTINGS",
            previousGoLiveSettings: e,
          });
        };
    },
    120619: function (e, t, n) {
      "use strict";
      n(47120);
      var r,
        i,
        o,
        a,
        l = n(442837),
        s = n(570140),
        c = n(959546),
        u = n(215023);
      let d = new Map(),
        f = new Set(),
        p = new Set(),
        h = new Set(),
        v = new Map(),
        _ = !1,
        m = null;
      class b extends (r = l.ZP.Store) {
        getPrice(e) {
          return d.get(e);
        }
        isFetchingPrice(e) {
          return f.has(e);
        }
        getErrored(e) {
          return h.has(e);
        }
        getEntitlement(e) {
          return v.get(e);
        }
        isEntitlementFetched(e) {
          return v.has(e);
        }
        isEntitlementFetching(e) {
          return p.has(e);
        }
        getPlayedAnimation() {
          return _;
        }
        getPreviousGoLiveSettings() {
          return m;
        }
      }
      (a = "ConsumablesStore"),
        (o = "displayName") in (i = b)
          ? Object.defineProperty(i, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[o] = a),
        (t.Z = new b(s.Z, {
          CONSUMABLES_PRICE_FETCH_STARTED: (e) => {
            f.add(e.skuId);
          },
          CONSUMABLES_PRICE_FETCH_SUCCEEDED: (e) => {
            d.set(e.skuId, e.price), f.delete(e.skuId);
          },
          CONSUMABLES_PRICE_FETCH_FAILED: (e) => {
            f.delete(e.skuId), h.add(e.skuId);
          },
          CONSUMABLES_CLEAR_ERROR: (e) => {
            h.delete(e.skuId);
          },
          CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED: (e) => {
            p.delete(e.skuId), v.set(e.skuId, e.entitlement);
          },
          SKU_PURCHASE_SUCCESS: (e) => {
            if (1 !== e.entitlements.length) return;
            let t = e.entitlements[0];
            if (t.sku_id === u.FX) v.set(e.skuId, c.Z.createFromServer(t));
          },
          PLAYED_HD_STREAMING_POTION_ANIMATION: (e) => {
            _ = !0;
          },
          RESET_PLAYED_HD_STREAMING_POTION_ANIMATION: (e) => {
            _ = !1;
          },
          CONSUMABLES_ENTITLEMENT_FETCH_FAILED: (e) => {
            h.add(e.skuId), p.delete(e.skuId);
          },
          CONSUMABLES_ENTITLEMENT_FETCH_STARTED: (e) => {
            p.add(e.skuId);
          },
          SET_PREVIOUS_GO_LIVE_SETTINGS: (e) => {
            m = e.previousGoLiveSettings;
          },
          CLEAR_CONSUMED_ENTITLEMENT: (e) => {
            v.delete(e.skuId);
          },
        }));
    },
    215339: function (e, t, n) {
      "use strict";
      n.d(t, {
        j: function () {
          return i;
        },
      });
      let r = (0, n(818083).B)({
          kind: "user",
          id: "2024-09_hd_streaming_potion",
          label: "Consumable HD Streaming Experiment",
          defaultConfig: { enabled: !1 },
          treatments: [
            { id: 0, label: "Control", config: { enabled: !1 } },
            { id: 1, label: "Treatment", config: { enabled: !0 } },
          ],
        }),
        i = (e) => r.useExperiment({ location: e }).enabled;
    },
    578976: function (e, t, n) {
      "use strict";
      n.d(t, {
        s: function () {
          return o;
        },
      });
      var r = n(46973),
        i = n(37113);
      let o = (e, t, n) => {
        let o = {
          qualityOptions: {
            preset: i.tI.PRESET_CUSTOM,
            resolution: e,
            frameRate: t,
          },
          context: r.Yn.STREAM,
        };
        return (
          null != n &&
            (null != n.desktopSource &&
              (o.desktopSettings = { sourceId: n.desktopSource.id, sound: !0 }),
            null != n.cameraSource &&
              (o.cameraSettings = {
                videoDeviceGuid: n.cameraSource.videoDeviceGuid,
                audioDeviceGuid: n.cameraSource.audioDeviceGuid,
              })),
          o
        );
      };
    },
    955843: function (e, t, n) {
      "use strict";
      n.d(t, {
        J: function () {
          return x;
        },
        R2: function () {
          return C;
        },
        T$: function () {
          return E;
        },
        Uu: function () {
          return A;
        },
        Z7: function () {
          return T;
        },
        Zm: function () {
          return S;
        },
        t6: function () {
          return I;
        },
      }),
        n(47120);
      var r = n(192379),
        i = n(259443),
        o = n(442837),
        a = n(846027),
        l = n(569545),
        s = n(199902),
        c = n(430824),
        u = n(131951),
        d = n(158776),
        f = n(959457),
        p = n(594174),
        h = n(997323),
        v = n(120619),
        _ = n(215339),
        m = n(578976),
        b = n(37113);
      let g = new i.Yd("HDStreamingConsumableModal"),
        E = (e) => {
          let t = (0, o.e7)([c.Z], () => c.Z.getGuild(e.guild_id)),
            n = (0, o.e7)([p.default], () => {
              var e;
              return null === (e = p.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.id;
            }),
            i = (0, o.Wu)([s.Z], () =>
              s.Z.getAllActiveStreamsForChannel(e.id).filter(
                (e) => e.ownerId !== n,
              ),
            ),
            a = i.some((e) => {
              let t = p.default.getUser(e.ownerId);
              return null != t && d.Z.isMobileOnline(t.id);
            }),
            [u, h] = (0, r.useState)(null),
            [v, _] = (0, r.useState)([]);
          (0, o.e7)(
            [f.Z],
            () => {
              if (null == u || Date.now() - u > 1e4) {
                let e = i.map((e) => {
                  var t;
                  let n = (0, l.V9)(e),
                    r = f.Z.getRTCConnection(n);
                  return null == r
                    ? void 0
                    : null === (t = r.getVideoStats()) || void 0 === t
                      ? void 0
                      : t.inbound_bitrate_estimate_percentile99;
                });
                g.info("Setting bitrates", e), _(e), h(Date.now());
              }
            },
            [u, i],
          );
          let m = (0, r.useMemo)(
            () =>
              0 === v.length || (!v.some((e) => null == e || e < 35e5) && !0),
            [v],
          );
          return null != t && 0 === t.premiumTier && m && !a;
        },
        S = (e, t) => {
          let n = (0, o.e7)([p.default], () => {
              var e;
              return null === (e = p.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.id;
            }),
            r = (0, o.Wu)([s.Z], () =>
              s.Z.getAllActiveStreamsForChannel(e.id).filter(
                (e) => e.ownerId !== n,
              ),
            ),
            i = (0, _.j)(t),
            a = E(e);
          return i && a && r.length > 0;
        };
      function C(e) {
        let [t, n, i] = (0, o.Wu)([v.Z], () => [
          v.Z.isFetchingPrice(e),
          v.Z.getPrice(e),
          v.Z.getErrored(e),
        ]);
        return (
          (0, r.useEffect)(() => {
            !t && null == n && !i && (0, h.Gq)(e);
          }, [t, n, i, e]),
          { price: n, fetchingPrice: t, error: i }
        );
      }
      function I(e) {
        let [t, n, i, a] = (0, o.Wu)([v.Z], () => [
          v.Z.isEntitlementFetched(e),
          v.Z.isEntitlementFetching(e),
          v.Z.getEntitlement(e),
          v.Z.getErrored(e),
        ]);
        return (
          (0, r.useEffect)(() => {
            !t && !n && (0, h.gA)(e);
          }, [t, n, e]),
          { entitlement: i, fetchedEntitlement: t, error: a }
        );
      }
      function x(e, t) {
        let n = (0, r.useRef)(!0),
          i = e.hdStreamingUntil;
        (0, r.useEffect)(() => {
          if (n.current) {
            n.current = !1;
            return;
          }
          if (null != i && new Date(i) > new Date()) return t();
        }, [i]);
      }
      function A(e) {
        x(e, () => {
          let t = s.Z.getCurrentUserActiveStream();
          if (null != t && t.channelId === e.id) {
            let e = u.Z.getState().goLiveSource;
            (0, h.x8)(null == e ? void 0 : e.quality);
            let t = (0, m.s)(b.LY.RESOLUTION_1440, b.ws.FPS_60, e);
            a.Z.setGoLiveSource(t);
          }
        });
      }
      function T(e) {
        let t = (0, o.e7)([v.Z], () => v.Z.getPlayedAnimation());
        (0, r.useEffect)(() => {
          t && (e(), (0, h.LE)());
        }, [t, e]);
      }
    },
    461195: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return f;
        },
        n: function () {
          return i;
        },
      });
      var r,
        i,
        o = n(200651);
      n(192379);
      var a = n(120356),
        l = n.n(a),
        s = n(410030),
        c = n(231338),
        u = n(388032),
        d = n(501404);
      function f(e) {
        let { className: t, size: n = "md" } = e,
          r =
            (0, s.ZP)() === c.BR.LIGHT
              ? "https://cdn.discordapp.com/assets/content/e4ec02f7af5d01c8c168eb814823a94a6bf1ce440e70e35e5a6f18b0fdad3321.png"
              : "https://cdn.discordapp.com/assets/content/f814e4be3c27004f4e60c1bdad648ee24acfa9716c0be8048cc63b5b869e56a4.png";
        return (0, o.jsx)("img", {
          className: l()(t, { [d.sm]: "sm" === n, [d.md]: "md" === n }),
          src: r,
          alt: u.intl.string(u.t.htEhYm),
        });
      }
      ((r = i || (i = {})).SMALL = "sm"), (r.MEDIUM = "md");
    },
    285888: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return m;
        },
        v: function () {
          return _;
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
        h = n(7804);
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
      ((o = r || (r = {})).TOP = "top"), (o.BOTTOM = "bottom");
      let _ = {
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
      class m extends (i = l.Component) {
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
              autofocus: v,
              disabled: m,
              clearable: b,
              searchable: g,
              styleOverrides: E,
              isMulti: S,
              placeholder: C,
              filterOption: I,
              closeMenuOnSelect: x = !0,
              ...A
            } = this.props,
            T = { ...A };
          null != v && (T.autoFocus = v),
            null != m && (T.isDisabled = m),
            null != b && (T.isClearable = b),
            null != g && (T.isSearchable = g);
          let N = { IndicatorSeparator: () => null };
          null != o &&
            (N.Option = (e) =>
              (0, a.jsx)(u.wx.Option, { ...e, children: o(e.data) })),
            null != i &&
              (N.SingleValue = (e) =>
                (0, a.jsx)(u.wx.SingleValue, { ...e, children: i(e.data) })),
            null != l && (N.MultiValue = (e) => l(e.data));
          if (S && Array.isArray(f)) {
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
              className: c()(h.select, t, { [h.error]: null != r }),
              ref: this._containerRef,
              children: [
                (0, a.jsx)(u.ZP, {
                  ...T,
                  className: n,
                  ref: this._selectRef,
                  isMulti: S,
                  components: N,
                  options: s,
                  styles: null != E ? E : _,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onMenuOpen: this.handleMenuOpen,
                  onMenuClose: this.handleMenuClose,
                  closeMenuOnSelect: x,
                  value: e,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != C ? C : p.intl.string(p.t.XqMe3N),
                  noOptionsMessage: () => p.intl.string(p.t["Xe+fJC"]),
                  filterOption: I,
                }),
                null != r
                  ? (0, a.jsx)("div", {
                      className: h.errorMessage,
                      children: r,
                    })
                  : null,
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            v(this, "_selectRef", l.createRef()),
            v(this, "_containerRef", l.createRef()),
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
              e.which === f.yXg.ESCAPE &&
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
      v(m, "MenuPlacements", r);
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
      let h = !1,
        v = !0,
        _ = !1;
      class m extends (a = l.ZP.Store) {
        initialize() {
          !(!c.isPlatformEmbedded || __OVERLAY__) &&
            u.ZP.getGPUDriverVersions().then((e) => {
              (h = (0, p.Z)(e)),
                (v = (0, d.Z)(e)),
                (_ = (0, f.Z)(e)),
                this.emitChange();
            });
        }
        get GPUDriversOutdated() {
          return h;
        }
        get canUseHardwareAcceleration() {
          return v;
        }
        get problematicGPUDriver() {
          return _;
        }
        getState() {
          return {
            GPUDriversOutdated: h,
            canUseHardwareAcceleration: v,
            problematicGPUDriver: _,
          };
        }
      }
      (o = "StreamingCapabilitiesStore"),
        (i = "displayName") in (r = m)
          ? Object.defineProperty(r, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[i] = o),
        (t.Z = new m(s.Z, {
          OVERLAY_INITIALIZE: function (e) {
            let { streamingCapabilitiesStoreState: t } = e;
            (h = t.GPUDriversOutdated), (v = t.canUseHardwareAcceleration);
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
    942951: function (e, t, n) {
      "use strict";
      n.d(t, {
        l: function () {
          return f;
        },
      });
      var r = n(200651),
        i = n(192379),
        o = n(481060),
        a = n(100527),
        l = n(906732),
        s = n(184301),
        c = n(347475),
        u = n(592125),
        d = n(91047);
      function f(e) {
        var t, n;
        let {
            user: f,
            channelId: p,
            guildId: h,
            messageId: v,
            stopPropagation: _ = !1,
            ariaLabel: m,
          } = e,
          { analyticsLocations: b } = (0, l.ZP)(a.Z.USERNAME);
        let g =
          ((t = f),
          (n = p),
          i.useCallback(
            (e) => {
              let r = u.Z.getChannel(n);
              null != r && null != t && (0, d.Pv)(e, t, r);
            },
            [t, n],
          ));
        return i.useCallback(
          (e) => (t, n) => {
            let i = (n) =>
                (0, r.jsx)(o.NameWithRoleAnchor, {
                  ...(null != n ? n : {}),
                  onContextMenu: g,
                  name: t,
                  color: null == e ? void 0 : e.colorString,
                  roleName: null == e ? void 0 : e.colorRoleName,
                  "aria-label": m,
                }),
              a = (e) => (t) => {
                _ && t.stopPropagation(), e(t);
              };
            return (0, r.jsx)(
              l.Gt,
              {
                value: b,
                children:
                  null != f
                    ? (0, r.jsx)(o.Popout, {
                        position: "right",
                        preload: () =>
                          (0, s.Z)(f.id, f.getAvatarURL(h, 80), {
                            guildId: h,
                            channelId: p,
                          }),
                        renderPopout: (t) =>
                          (0, r.jsx)(c.Z, {
                            ...t,
                            userId: f.id,
                            guildId: h,
                            channelId: p,
                            messageId: v,
                            roleId: null == e ? void 0 : e.colorRoleId,
                          }),
                        children: (e) => {
                          let { onClick: t, ...n } = e;
                          return i({ onClick: a(t), ...n });
                        },
                      })
                    : i(void 0),
              },
              n,
            );
          },
          [b, f, p, h, v, g, _, m],
        );
      }
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
                rejectWithError: !1,
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
      class h extends (i = o.ZP.PersistedStore) {
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
      c(h, "displayName", "UserAffinitiesStoreV2"),
        c(h, "persistKey", "UserAffinitiesStoreV2"),
        (t.Z = new h(a.Z, {
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
    447564: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          HD_STREAMING_POTION_MODAL_KEY: function () {
            return A;
          },
          default: function () {
            return x;
          },
        }),
        n(47120);
      var r,
        i,
        o = n(200651),
        a = n(192379),
        l = n(311570),
        s = n(692547),
        c = n(481060),
        u = n(100527),
        d = n(906732),
        f = n(997323),
        p = n(955843),
        h = n(688465),
        v = n(333867),
        _ = n(63063),
        m = n(937615),
        b = n(82950),
        g = n(981631),
        E = n(215023),
        S = n(388032),
        C = n(1114),
        I = n(99713);
      function x(e) {
        let { transitionState: t, channel: n } = e;
        return (0, o.jsx)(c.ModalRoot, {
          size: c.ModalSize.DYNAMIC,
          transitionState: t,
          children: (0, o.jsx)(T, { channel: n }),
        });
      }
      let A = "HD_STREAMING_POTION_MODAL_KEY";
      function T(e) {
        let { channel: t } = e,
          n = (0, p.T$)(t),
          [r, i] = (0, a.useState)(!1),
          { price: s, fetchingPrice: h, error: _ } = (0, p.R2)(E.FX),
          { entitlement: m, fetchedEntitlement: b, error: S } = (0, p.t6)(E.FX),
          C = _ || S,
          { analyticsLocations: I } = (0, d.ZP)([
            u.Z.HD_STREAMING_POTION_MODAL,
          ]),
          x = null != m && !m.consumed;
        (0, a.useEffect)(
          () => (
            null != m && !1 === m.consumed && r && (0, f.Zu)(t.id, E.FX),
            () => {
              C && (0, f.SN)(E.FX);
            }
          ),
          [m, t, r, C],
        );
        let A = (0, a.useMemo)(
            () => () =>
              (0, v.Z)({
                skuId: E.FX,
                analyticsLocations: I,
                onComplete: c.closeAllModals,
                variantsReturnStyle: l.v.INDIVIDUAL_PRODUCTS,
              }),
            [I],
          ),
          T = (0, a.useMemo)(
            () => () => {
              (0, f.Zu)(t.id, E.FX), (0, c.closeAllModals)();
            },
            [t.id],
          ),
          y = (0, a.useMemo)(
            () => () =>
              t.isHDStreamSplashed
                ? 4
                : n
                  ? (null == m ? void 0 : m.type) === g.qc2.DEVELOPER_GIFT
                    ? 1
                    : x
                      ? 2
                      : 0
                  : 3,
            [t.isHDStreamSplashed, n, null == m ? void 0 : m.type, x],
          ),
          w = (0, a.useMemo)(() => y(), [y]);
        return (0, o.jsx)(N, {
          channel: t,
          buttonState: w,
          price: s,
          onActionClick: () => {
            i(!0), (x ? T : A)();
          },
          loading: h || !b,
        });
      }
      let N = (e) => {
          let {
            channel: t,
            buttonState: n,
            price: r,
            onActionClick: i,
            loading: a,
          } = e;
          return a
            ? (0, o.jsx)(R, {})
            : null == r
              ? (0, o.jsx)(P, {})
              : (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsxs)("div", {
                      className: C.modal,
                      children: [
                        (0, o.jsx)(y, {}),
                        (0, o.jsx)(w, { channel: t }),
                      ],
                    }),
                    (0, o.jsx)(M, {
                      buttonState: n,
                      price: r,
                      onActionClick: i,
                    }),
                  ],
                });
        },
        y = () =>
          (0, o.jsx)("img", {
            className: C.image,
            src: "https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png",
            alt: S.intl.string(S.t.DdigcX),
          }),
        w = (e) => {
          let { channel: t } = e;
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsxs)("div", {
                className: C.body,
                children: [
                  (0, o.jsxs)("div", {
                    className: C.heading,
                    children: [
                      (0, o.jsx)(c.Heading, {
                        variant: "heading-lg/bold",
                        children: S.intl.string(S.t.K04rOD),
                      }),
                      (0, o.jsx)(h.Z, {}),
                    ],
                  }),
                  (0, o.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    children: S.intl.string(S.t.lq40Pz),
                  }),
                  (0, o.jsx)(c.Text, {
                    color: "text-link",
                    variant: "text-sm/normal",
                    children: S.intl.format(S.t["1wV4qq"], {
                      helpCenterLink: _.Z.getArticleURL(
                        g.BhN.HD_STREAMING_POTION,
                      ),
                    }),
                  }),
                  (0, o.jsx)(c.Text, {
                    color: "text-muted",
                    variant: "text-xs/medium",
                    children: S.intl.string(S.t.qk07Mj),
                  }),
                ],
              }),
              (0, o.jsx)("div", { className: C.divider }),
              (0, o.jsxs)("div", {
                className: C.applyingTo,
                children: [
                  (0, o.jsx)(c.Text, {
                    variant: "eyebrow",
                    children: S.intl.string(S.t.tZyXg4),
                  }),
                  (0, o.jsx)(b.Z, { channel: t }),
                ],
              }),
            ],
          });
        };
      ((i = r || (r = {}))[(i.BUY = 0)] = "BUY"),
        (i[(i.REDEEM = 1)] = "REDEEM"),
        (i[(i.ACTIVATE = 2)] = "ACTIVATE"),
        (i[(i.INELIGIBLE = 3)] = "INELIGIBLE"),
        (i[(i.ALREADY_ACTIVE = 4)] = "ALREADY_ACTIVE");
      let M = (e) => {
          let { buttonState: t, price: n, onActionClick: r } = e;
          return (0, o.jsxs)("div", {
            className: C.footer,
            children: [
              (0, o.jsx)(c.Button, {
                onClick: () => {
                  (0, c.closeModal)(A);
                },
                color: c.Button.Colors.PRIMARY,
                children: S.intl.string(S.t.Avt5KS),
              }),
              (0, o.jsx)(O, { buttonState: t, price: n, onActionClick: r }),
            ],
          });
        },
        O = (e) => {
          let { buttonState: t, price: n, onActionClick: r } = e,
            i = S.intl.formatToPlainString(S.t.S9LAdX, {
              price: (0, m.T4)(n.amount, n.currency),
            });
          if (3 === t || 4 === t) {
            let e = {
              3: S.intl.string(S.t.Qrh2BQ),
              4: S.intl.string(S.t.utRdl5),
            }[t];
            return (0, o.jsx)(c.Tooltip, {
              tooltipContentClassName: C.tooltip,
              text: e,
              children: (e) =>
                (0, o.jsx)(c.Button, { ...e, disabled: !0, children: i }),
            });
          }
          let a = {
            0: i,
            1: S.intl.string(S.t.sl6Tcn),
            2: S.intl.string(S.t.XJ9INj),
          }[t];
          return (0, o.jsx)(c.Button, {
            onClick: r,
            children: (0, o.jsxs)("div", {
              className: C.buttonCopy,
              children: [
                (0, o.jsx)(c.PotionIcon, {
                  color: s.Z.colors.WHITE,
                  size: "sm",
                }),
                a,
              ],
            }),
          });
        },
        P = () =>
          (0, o.jsx)("div", {
            className: C.anomaly,
            children: (0, o.jsxs)("div", {
              className: C.error,
              children: [
                (0, o.jsx)(c.Image, { src: I, width: 178, height: 190 }),
                (0, o.jsx)(c.Text, {
                  variant: "text-md/normal",
                  children: S.intl.string(S.t.sIA0OD),
                }),
              ],
            }),
          }),
        R = () =>
          (0, o.jsx)("div", {
            className: C.anomaly,
            children: (0, o.jsx)("div", {
              className: C.spinner,
              children: (0, o.jsx)(c.Spinner, {}),
            }),
          });
    },
    207126: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(481060),
        o = n(422034),
        a = n(938475),
        l = n(628146);
      function s(e) {
        let { channel: t } = e;
        if (null == t) return null;
        let n = a.ZP.getVoiceStatesForChannel(t).slice(0, 6),
          s = n.map((e, t) => {
            let { user: a } = e;
            return (0, r.jsx)(
              o.O,
              {
                affinity: a,
                applyMask: t !== n.length - 1,
                size: i.AvatarSizes.SIZE_20,
              },
              a.id,
            );
          });
        return (0, r.jsx)("div", { className: l.avatars, children: s });
      }
    },
    82950: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(481060),
        o = n(207126),
        a = n(91783);
      function l(e) {
        let { channel: t } = e;
        return (0, r.jsxs)("div", {
          className: a.channel,
          children: [
            (0, r.jsxs)("div", {
              className: a.channelLeft,
              children: [
                (0, r.jsx)(i.VoiceNormalIcon, {}),
                (0, r.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: t.name,
                }),
              ],
            }),
            (0, r.jsx)(o.Z, { channel: t }),
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
        tooltip: "tooltip_beafbd",
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
//# sourceMappingURL=fec2588bdd7421ca8467.js.map
