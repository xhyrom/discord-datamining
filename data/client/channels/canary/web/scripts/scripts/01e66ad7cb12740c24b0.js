"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["51028"],
  {
    778569: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      }),
        n(47120);
      var r = n(192379),
        i = n(81063);
      let u = ["embedded_cover", "embedded_background"];
      function l(e) {
        let { applicationId: t, size: n, names: l = u } = e,
          [o, s] = r.useState(null),
          [a, c] = r.useState(!0),
          d = (0, i.getAssetImage)(t, o, n),
          E = r.useRef(l);
        return (
          r.useEffect(() => {
            E.current = l;
          }),
          r.useEffect(() => {
            let { current: e } = E;
            (0, i.getAssets)(t).then((t) => {
              for (let [n, r] of (c(!1), Object.entries(t)))
                if (null != r && "" !== r.id && e.includes(r.name)) {
                  s(r.id);
                  return;
                }
            });
          }, [t]),
          { url: d, state: a ? "loading" : null != d ? "fetched" : "not-found" }
        );
      }
    },
    175470: function (e, t, n) {
      n.d(t, {
        n: function () {
          return r;
        },
      });
      let r = (0, n(15729).U)((e) => ({
        clipsButtonRef: null,
        setClipsButtonRef: (t) => e({ clipsButtonRef: t }),
      }));
    },
    997323: function (e, t, n) {
      n.d(t, {
        Gq: function () {
          return d;
        },
        SN: function () {
          return p;
        },
        Zu: function () {
          return f;
        },
        gA: function () {
          return E;
        },
        qc: function () {
          return _;
        },
        x8: function () {
          return T;
        },
      }),
        n(411104);
      var r = n(544891),
        i = n(343817),
        u = n(570140),
        l = n(633302),
        o = n(959546),
        s = n(215023),
        a = n(981631);
      let c = {
          [s.D1]: a.ANM.FETCH_MESSAGE_CONFETTI_ENTITLEMENT,
          [s.FX]: a.ANM.FETCH_HD_STREAMING_ENTITLEMENT,
        },
        d = async (e) => {
          u.Z.dispatch({ type: "CONSUMABLES_PRICE_FETCH_STARTED", skuId: e });
          try {
            let t = await r.tn.get({
              url: a.ANM.CONSUMABLE_FETCH_PRICE(e),
              rejectWithError: !1,
            });
            if (null == t.body.price)
              throw (
                (u.Z.dispatch({
                  type: "CONSUMABLES_PRICE_FETCH_FAILED",
                  skuId: e,
                }),
                Error("price not found"))
              );
            let n = t.body.price;
            return (
              u.Z.dispatch({
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
              (u.Z.dispatch({
                type: "CONSUMABLES_PRICE_FETCH_FAILED",
                skuId: e,
              }),
              new i.Hx(t))
            );
          }
        },
        E = async (e) => {
          if (
            (u.Z.dispatch({
              type: "CONSUMABLES_ENTITLEMENT_FETCH_STARTED",
              skuId: e,
            }),
            null == c[e])
          )
            throw (
              (u.Z.dispatch({
                type: "CONSUMABLES_ENTITLEMENT_FETCH_FAILED",
                skuId: e,
              }),
              Error("Invalid consumable skuId: ".concat(e)))
            );
          try {
            let t = await r.tn.get({ url: c[e], rejectWithError: !1 }),
              n =
                null != t.body.entitlement
                  ? o.Z.createFromServer(t.body.entitlement)
                  : null;
            return (
              u.Z.dispatch({
                type: "CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED",
                skuId: e,
                entitlement: n,
              }),
              t.body.entitlement
            );
          } catch (t) {
            throw (
              (u.Z.dispatch({
                type: "CONSUMABLES_ENTITLEMENT_FETCH_FAILED",
                skuId: e,
              }),
              new i.Hx(t))
            );
          }
        },
        f = async (e, t) => {
          try {
            await r.tn.post({
              url: a.ANM.CONSUME_HD_STREAMING_POTION,
              body: { channel_id: e },
              rejectWithError: !1,
            }),
              u.Z.dispatch({ type: "CLEAR_CONSUMED_ENTITLEMENT", skuId: t });
          } catch (e) {
            throw new i.Hx(e);
          }
        },
        _ = async (e, t, n, l) => {
          try {
            await r.tn.post({
              url: a.ANM.CONSUME_MESSAGE_CONFETTI_POTION,
              body: { channel_id: e, message_id: t, emoji_name: S(n) },
              rejectWithError: !1,
            }),
              u.Z.dispatch({ type: "CLEAR_CONSUMED_ENTITLEMENT", skuId: l });
          } catch (e) {
            throw new i.Hx(e);
          }
        },
        S = (e) =>
          null != e.id
            ? "".concat(e.name, ":").concat(e.id)
            : l.ZP.convertNameToSurrogate(e.name),
        p = (e) => {
          u.Z.dispatch({ type: "CONSUMABLES_CLEAR_ERROR", skuId: e });
        },
        T = (e) => {
          u.Z.dispatch({
            type: "SET_PREVIOUS_GO_LIVE_SETTINGS",
            previousGoLiveSettings: e,
          });
        };
    },
    120619: function (e, t, n) {
      n(47120);
      var r,
        i,
        u,
        l,
        o = n(442837),
        s = n(570140),
        a = n(959546),
        c = n(215023);
      let d = new Map(),
        E = new Set(),
        f = new Set(),
        _ = new Set(),
        S = new Map(),
        p = null;
      class T extends (r = o.ZP.Store) {
        getPrice(e) {
          return d.get(e);
        }
        isFetchingPrice(e) {
          return E.has(e);
        }
        getErrored(e) {
          return _.has(e);
        }
        getEntitlement(e) {
          return S.get(e);
        }
        isEntitlementFetched(e) {
          return S.has(e);
        }
        isEntitlementFetching(e) {
          return f.has(e);
        }
        getPreviousGoLiveSettings() {
          return p;
        }
      }
      (l = "ConsumablesStore"),
        (u = "displayName") in (i = T)
          ? Object.defineProperty(i, u, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[u] = l),
        (t.Z = new T(s.Z, {
          CONSUMABLES_PRICE_FETCH_STARTED: (e) => {
            E.add(e.skuId);
          },
          CONSUMABLES_PRICE_FETCH_SUCCEEDED: (e) => {
            d.set(e.skuId, e.price), E.delete(e.skuId);
          },
          CONSUMABLES_PRICE_FETCH_FAILED: (e) => {
            E.delete(e.skuId), _.add(e.skuId);
          },
          CONSUMABLES_CLEAR_ERROR: (e) => {
            _.delete(e.skuId);
          },
          CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED: (e) => {
            f.delete(e.skuId), S.set(e.skuId, e.entitlement);
          },
          SKU_PURCHASE_SUCCESS: (e) => {
            if (1 !== e.entitlements.length) return;
            let t = e.entitlements[0];
            if (!!c.Rm.has(t.sku_id)) S.set(e.skuId, a.Z.createFromServer(t));
          },
          CONSUMABLES_ENTITLEMENT_FETCH_FAILED: (e) => {
            _.add(e.skuId), f.delete(e.skuId);
          },
          CONSUMABLES_ENTITLEMENT_FETCH_STARTED: (e) => {
            f.add(e.skuId);
          },
          SET_PREVIOUS_GO_LIVE_SETTINGS: (e) => {
            p = e.previousGoLiveSettings;
          },
          CLEAR_CONSUMED_ENTITLEMENT: (e) => {
            S.delete(e.skuId);
          },
        }));
    },
    215339: function (e, t, n) {
      n.d(t, {
        X: function () {
          return u;
        },
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
        i = (e) => r.useExperiment({ location: e }).enabled,
        u = (e) => r.getCurrentConfig({ location: e }).enabled;
    },
    324085: function (e, t, n) {
      n.d(t, {
        J: function () {
          return y;
        },
        Ou: function () {
          return F;
        },
        R2: function () {
          return O;
        },
        T$: function () {
          return M;
        },
        Uu: function () {
          return R;
        },
        Zm: function () {
          return Z;
        },
        bK: function () {
          return b;
        },
        mx: function () {
          return U;
        },
        t6: function () {
          return L;
        },
      }),
        n(47120);
      var r = n(192379),
        i = n(525654),
        u = n.n(i),
        l = n(259443),
        o = n(442837),
        s = n(846027),
        a = n(607070),
        c = n(569545),
        d = n(199902),
        E = n(430824),
        f = n(131951),
        _ = n(158776),
        S = n(959457),
        p = n(594174),
        T = n(451478),
        C = n(626135),
        m = n(997323),
        I = n(120619),
        N = n(215339),
        h = n(578976),
        g = n(981631),
        v = n(37113);
      let A = new l.Yd("HDStreamingConsumableModal"),
        M = (e) => {
          let t = (0, o.e7)([E.Z], () =>
              E.Z.getGuild(null == e ? void 0 : e.guild_id),
            ),
            n = (0, o.e7)([p.default], () => {
              var e;
              return null === (e = p.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.id;
            }),
            i = (0, o.Wu)([d.Z], () =>
              null == e
                ? []
                : d.Z.getAllActiveStreamsForChannel(e.id).filter(
                    (e) => e.ownerId !== n,
                  ),
            ),
            u = i.some((e) => {
              let t = p.default.getUser(e.ownerId);
              return null != t && _.Z.isMobileOnline(t.id);
            }),
            [l, s] = (0, r.useState)(null),
            [a, f] = (0, r.useState)([]);
          (0, o.e7)(
            [S.Z],
            () => {
              if (null == l || Date.now() - l > 1e4) {
                let e = i.map((e) => {
                  var t;
                  let n = (0, c.V9)(e),
                    r = S.Z.getRTCConnection(n);
                  return null == r
                    ? void 0
                    : null === (t = r.getVideoStats()) || void 0 === t
                      ? void 0
                      : t.inbound_bitrate_estimate_percentile99;
                });
                A.info("Setting bitrates", e), f(e), s(Date.now());
              }
            },
            [l, i],
          );
          let T = (0, r.useMemo)(
              () =>
                0 === a.length || (!a.some((e) => null == e || e < 35e5) && !0),
              [a],
            ),
            C =
              (null == t ? void 0 : t.premiumTier) === g.Eu4.NONE ||
              (null == t ? void 0 : t.premiumTier) === g.Eu4.TIER_1;
          return C && T && !u;
        },
        Z = (e, t) => {
          let n = (0, o.e7)([p.default], () => {
              var e;
              return null === (e = p.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.id;
            }),
            r = (0, o.Wu)([d.Z], () =>
              null == e
                ? []
                : d.Z.getAllActiveStreamsForChannel(e.id).filter(
                    (e) => e.ownerId !== n,
                  ),
            ),
            i = (0, N.j)(t),
            u = M(e);
          return i && u && r.length > 0;
        };
      function O(e) {
        let [t, n, i] = (0, o.Wu)([I.Z], () => [
          I.Z.isFetchingPrice(e),
          I.Z.getPrice(e),
          I.Z.getErrored(e),
        ]);
        return (
          (0, r.useEffect)(() => {
            !t && null == n && !i && (0, m.Gq)(e);
          }, [t, n, i, e]),
          { price: n, fetchingPrice: t, error: i }
        );
      }
      function L(e) {
        let [t, n, i, u] = (0, o.Wu)([I.Z], () => [
          I.Z.isEntitlementFetched(e),
          I.Z.isEntitlementFetching(e),
          I.Z.getEntitlement(e),
          I.Z.getErrored(e),
        ]);
        return (
          (0, r.useEffect)(() => {
            !t && !n && (0, m.gA)(e);
          }, [t, n, e]),
          { entitlement: i, fetchedEntitlement: t, error: u }
        );
      }
      function y(e, t) {
        let n = (0, r.useRef)(!0),
          i = null == e ? void 0 : e.hdStreamingUntil,
          u = (0, r.useRef)(t);
        (0, r.useEffect)(() => {
          u.current = t;
        }),
          (0, r.useEffect)(() => {
            if (n.current) {
              n.current = !1;
              return;
            }
            if (null != i && new Date(i) > new Date()) return u.current();
          }, [i]);
      }
      function R(e) {
        y(e, () => {
          let t = d.Z.getCurrentUserActiveStream();
          if (null != t && t.channelId === e.id) {
            let e = f.Z.getState().goLiveSource;
            (0, m.x8)(null == e ? void 0 : e.quality);
            let t = (0, h.s)(v.LY.RESOLUTION_1440, v.ws.FPS_60, e);
            s.Z.setGoLiveSource(t);
          }
        });
      }
      function b() {
        var e;
        let t = (
            null !== (e = u().name) && void 0 !== e ? e : "unknown"
          ).toLowerCase(),
          n = (0, o.e7)([T.Z], () => T.Z.isFocused()),
          r = (0, o.e7)([a.Z], () => a.Z.useReducedMotion);
        return "safari" === t || !n || r;
      }
      function U(e) {
        C.default.track(g.rMx.CONSUMABLE_HD_STREAMING_ENTRYPOINT, {
          location: e,
        });
      }
      function F(e) {
        let t = (0, o.e7)([E.Z], () =>
            E.Z.getGuild(null == e ? void 0 : e.guild_id),
          ),
          n = (0, N.j)("VoiceEffectsActionBar");
        return (
          ((null == t ? void 0 : t.premiumTier) === g.Eu4.NONE ||
            (null == t ? void 0 : t.premiumTier) === g.Eu4.TIER_1) &&
          (null == e ? void 0 : e.type) === g.d4z.GUILD_VOICE &&
          !(null == e ? void 0 : e.isHDStreamSplashed) &&
          n
        );
      }
    },
    576855: function (e, t, n) {
      var r,
        i,
        u,
        l,
        o = n(200651),
        s = n(192379),
        a = n(120356),
        c = n.n(a),
        d = n(481060),
        E = n(388032),
        f = n(323822);
      let _ = { BLOCK: f.block, INLINE: f.inline };
      class S extends (l = s.PureComponent) {
        render() {
          let {
            children: e,
            className: t,
            textClassName: n,
            type: r = _.BLOCK,
            style: i,
          } = this.props;
          return (0, o.jsxs)("div", {
            className: c()(t, r),
            style: i,
            children: [
              (0, o.jsxs)(d.Text, {
                variant: "text-sm/bold",
                tag: "div",
                color: "text-positive",
                className: f.pro,
                children: [E.intl.string(E.t["8tvIiI"]), ":"],
              }),
              (0, o.jsx)(d.Text, {
                className: c()(f.tip, n),
                variant: "text-sm/normal",
                children: e,
              }),
            ],
          });
        }
      }
      (r = S),
        (i = "Types"),
        (u = _),
        i in r
          ? Object.defineProperty(r, i, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[i] = u),
        (t.Z = S);
    },
    687058: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      }),
        n(757143);
      var r = n(192379),
        i = n(442837),
        u = n(131951),
        l = n(388032);
      let o = /^Default/;
      function s() {
        let e = (0, i.e7)([u.Z], () => u.Z.getInputDevices());
        return r.useMemo(() => {
          let t = { ...e },
            n = t.default;
          return null == n
            ? t
            : ((t.default = {
                ...n,
                name: n.name.replace(o, l.intl.string(l.t.bBvAEB)),
              }),
              t);
        }, [e]);
      }
    },
    253052: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      }),
        n(757143);
      var r = n(192379),
        i = n(442837),
        u = n(131951),
        l = n(388032);
      let o = /^Default/;
      function s() {
        let e = (0, i.e7)([u.Z], () => u.Z.getOutputDevices());
        return r.useMemo(() => {
          let t = { ...e },
            n = t.default;
          return null == n
            ? t
            : ((t.default = {
                ...n,
                name: n.name.replace(o, l.intl.string(l.t.bBvAEB)),
              }),
              t);
        }, [e]);
      }
    },
    931651: function (e, t, n) {
      n.d(t, {
        $: function () {
          return l;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(907040),
        u = n(185923);
      function l(e) {
        let {
          channel: t,
          closePopout: n,
          analyticsOverride: l,
          onSelectEmoji: o,
          messageId: s,
        } = e;
        return (0, r.jsx)(i.Z, {
          closePopout: n,
          channel: t,
          onSelectEmoji: o,
          pickerIntention: u.Hz.REACTION,
          analyticsOverride: l,
          messageId: s,
        });
      }
    },
    651941: function (e, t, n) {
      n(518263),
        n(970173),
        n(520712),
        n(268111),
        n(941497),
        n(32026),
        n(480839),
        n(744285),
        n(492257),
        n(873817),
        n(47120);
      var r,
        i = n(442837),
        u = n(253135),
        l = n(570140),
        o = n(709054);
      function s(e, t, n) {
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
      let a = {};
      class c extends (r = i.ZP.PersistedStore) {
        initialize(e) {
          var t;
          a =
            null !== (t = null == e ? void 0 : e.users) && void 0 !== t
              ? t
              : {};
        }
        getState() {
          return { users: a };
        }
        getKeyTrustedAt(e, t) {
          var n;
          let r = (0, u.MK)(t);
          return null === (n = a[e]) || void 0 === n ? void 0 : n[r];
        }
        isKeyVerified(e, t) {
          return null != this.getKeyTrustedAt(e, t);
        }
        getUserIds() {
          return o.default.keys(a);
        }
        getUserVerifiedKeys(e) {
          return a[e];
        }
      }
      s(c, "displayName", "VerifiedKeyStore"),
        s(c, "persistKey", "VerifiedKeyStore"),
        (t.Z = new c(l.Z, {
          SECURE_FRAMES_VERIFIED_KEY_CREATE: function (e) {
            let { userId: t, key: n } = e,
              r = (function (e) {
                var t;
                let n = null !== (t = a[e]) && void 0 !== t ? t : {};
                return (a[e] = n), n;
              })(t),
              i = new Uint8Array(n);
            r[(0, u.MK)(i)] = Date.now();
          },
          SECURE_FRAMES_VERIFIED_KEY_DELETE: function (e) {
            let { userId: t, serializedKey: n } = e,
              r = a[t];
            if (null == r) return !1;
            let i = delete r[n],
              u = !1;
            return (
              0 === Object.keys(r).length && (delete a[t], (u = !0)), i || u
            );
          },
          SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function (e) {
            let { userId: t } = e;
            return null != a[t] && delete a[t];
          },
        }));
    },
    424678: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      }),
        n(47120);
      var r = n(200651),
        i = n(192379),
        u = n(481060);
      function l(e, t, n) {
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
      class o extends i.PureComponent {
        render() {
          let { text: e, lastItem: t, className: n } = this.props;
          return (0, r.jsxs)("span", {
            children: [
              (0, r.jsx)(u.Anchor, {
                className: n,
                onClick: this.handleClick,
                children: e,
              }),
              t ? "" : ", ",
            ],
          });
        }
        constructor(...e) {
          super(...e),
            l(this, "handleClick", () => {
              let { onClick: e, index: t } = this.props;
              null == e || e(t);
            });
        }
      }
      class s extends i.PureComponent {
        render() {
          let e = this.props.artists.split(";");
          if (!this.props.canOpen) return e.join(", ");
          let t = e.length - 1;
          return e.map((e, n) =>
            (0, r.jsx)(
              o,
              {
                text: e,
                index: n,
                lastItem: n === t,
                onClick: this.handleOpenSpotifyArtist,
                className: this.props.linkClassName,
              },
              "spotify-artist-".concat(n),
            ),
          );
        }
        constructor(...e) {
          super(...e),
            l(this, "handleOpenSpotifyArtist", (e) => {
              let { onOpenSpotifyArtist: t } = this.props;
              null == t || t(e);
            });
        }
      }
    },
  },
]);
//# sourceMappingURL=01e66ad7cb12740c24b0.js.map
