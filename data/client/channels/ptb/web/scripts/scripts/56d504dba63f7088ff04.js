"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39701"],
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
          [s, o] = r.useState(null),
          [d, a] = r.useState(!0),
          c = (0, i.getAssetImage)(t, s, n),
          E = r.useRef(l);
        return (
          r.useEffect(() => {
            E.current = l;
          }),
          r.useEffect(() => {
            let { current: e } = E;
            (0, i.getAssets)(t).then((t) => {
              for (let [n, r] of (a(!1), Object.entries(t)))
                if (null != r && "" !== r.id && e.includes(r.name)) {
                  o(r.id);
                  return;
                }
            });
          }, [t]),
          { url: c, state: d ? "loading" : null != c ? "fetched" : "not-found" }
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
          return o;
        },
        SN: function () {
          return c;
        },
        Zu: function () {
          return a;
        },
        gA: function () {
          return d;
        },
        x8: function () {
          return E;
        },
      }),
        n(411104);
      var r = n(544891),
        i = n(343817),
        u = n(570140),
        l = n(959546),
        s = n(981631);
      let o = async (e) => {
          u.Z.dispatch({ type: "CONSUMABLES_PRICE_FETCH_STARTED", skuId: e });
          try {
            let t = await r.tn.get({
              url: s.ANM.CONSUMABLE_FETCH_PRICE(e),
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
        d = async (e) => {
          u.Z.dispatch({
            type: "CONSUMABLES_ENTITLEMENT_FETCH_STARTED",
            skuId: e,
          });
          try {
            let t = await r.tn.get({
                url: s.ANM.FETCH_HD_STREAMING_ENTITLEMENT,
                rejectWithError: !1,
              }),
              n =
                null != t.body.entitlement
                  ? l.Z.createFromServer(t.body.entitlement)
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
        a = async (e, t) => {
          try {
            await r.tn.post({
              url: s.ANM.CONSUME_HD_STREAMING_POTION,
              body: { channel_id: e },
              rejectWithError: !1,
            }),
              u.Z.dispatch({ type: "CLEAR_CONSUMED_ENTITLEMENT", skuId: t });
          } catch (e) {
            throw new i.Hx(e);
          }
        },
        c = (e) => {
          u.Z.dispatch({ type: "CONSUMABLES_CLEAR_ERROR", skuId: e });
        },
        E = (e) => {
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
        s = n(442837),
        o = n(570140),
        d = n(959546),
        a = n(215023);
      let c = new Map(),
        E = new Set(),
        f = new Set(),
        S = new Set(),
        _ = new Map(),
        p = null;
      class C extends (r = s.ZP.Store) {
        getPrice(e) {
          return c.get(e);
        }
        isFetchingPrice(e) {
          return E.has(e);
        }
        getErrored(e) {
          return S.has(e);
        }
        getEntitlement(e) {
          return _.get(e);
        }
        isEntitlementFetched(e) {
          return _.has(e);
        }
        isEntitlementFetching(e) {
          return f.has(e);
        }
        getPreviousGoLiveSettings() {
          return p;
        }
      }
      (l = "ConsumablesStore"),
        (u = "displayName") in (i = C)
          ? Object.defineProperty(i, u, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[u] = l),
        (t.Z = new C(o.Z, {
          CONSUMABLES_PRICE_FETCH_STARTED: (e) => {
            E.add(e.skuId);
          },
          CONSUMABLES_PRICE_FETCH_SUCCEEDED: (e) => {
            c.set(e.skuId, e.price), E.delete(e.skuId);
          },
          CONSUMABLES_PRICE_FETCH_FAILED: (e) => {
            E.delete(e.skuId), S.add(e.skuId);
          },
          CONSUMABLES_CLEAR_ERROR: (e) => {
            S.delete(e.skuId);
          },
          CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED: (e) => {
            f.delete(e.skuId), _.set(e.skuId, e.entitlement);
          },
          SKU_PURCHASE_SUCCESS: (e) => {
            if (1 !== e.entitlements.length) return;
            let t = e.entitlements[0];
            if (t.sku_id === a.FX) _.set(e.skuId, d.Z.createFromServer(t));
          },
          CONSUMABLES_ENTITLEMENT_FETCH_FAILED: (e) => {
            S.add(e.skuId), f.delete(e.skuId);
          },
          CONSUMABLES_ENTITLEMENT_FETCH_STARTED: (e) => {
            f.add(e.skuId);
          },
          SET_PREVIOUS_GO_LIVE_SETTINGS: (e) => {
            p = e.previousGoLiveSettings;
          },
          CLEAR_CONSUMED_ENTITLEMENT: (e) => {
            _.delete(e.skuId);
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
          return R;
        },
        Uu: function () {
          return M;
        },
        Zm: function () {
          return L;
        },
        bK: function () {
          return b;
        },
        mx: function () {
          return U;
        },
        t6: function () {
          return Z;
        },
      }),
        n(47120);
      var r = n(192379),
        i = n(525654),
        u = n.n(i),
        l = n(259443),
        s = n(442837),
        o = n(846027),
        d = n(607070),
        a = n(569545),
        c = n(199902),
        E = n(430824),
        f = n(131951),
        S = n(158776),
        _ = n(959457),
        p = n(594174),
        C = n(451478),
        T = n(626135),
        m = n(997323),
        h = n(120619),
        I = n(215339),
        g = n(578976),
        N = n(981631),
        v = n(37113);
      let A = new l.Yd("HDStreamingConsumableModal"),
        R = (e) => {
          let t = (0, s.e7)([E.Z], () =>
              E.Z.getGuild(null == e ? void 0 : e.guild_id),
            ),
            n = (0, s.e7)([p.default], () => {
              var e;
              return null === (e = p.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.id;
            }),
            i = (0, s.Wu)([c.Z], () =>
              null == e
                ? []
                : c.Z.getAllActiveStreamsForChannel(e.id).filter(
                    (e) => e.ownerId !== n,
                  ),
            ),
            u = i.some((e) => {
              let t = p.default.getUser(e.ownerId);
              return null != t && S.Z.isMobileOnline(t.id);
            }),
            [l, o] = (0, r.useState)(null),
            [d, f] = (0, r.useState)([]);
          (0, s.e7)(
            [_.Z],
            () => {
              if (null == l || Date.now() - l > 1e4) {
                let e = i.map((e) => {
                  var t;
                  let n = (0, a.V9)(e),
                    r = _.Z.getRTCConnection(n);
                  return null == r
                    ? void 0
                    : null === (t = r.getVideoStats()) || void 0 === t
                      ? void 0
                      : t.inbound_bitrate_estimate_percentile99;
                });
                A.info("Setting bitrates", e), f(e), o(Date.now());
              }
            },
            [l, i],
          );
          let C = (0, r.useMemo)(
              () =>
                0 === d.length || (!d.some((e) => null == e || e < 35e5) && !0),
              [d],
            ),
            T =
              (null == t ? void 0 : t.premiumTier) === N.Eu4.NONE ||
              (null == t ? void 0 : t.premiumTier) === N.Eu4.TIER_1;
          return T && C && !u;
        },
        L = (e, t) => {
          let n = (0, s.e7)([p.default], () => {
              var e;
              return null === (e = p.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.id;
            }),
            r = (0, s.Wu)([c.Z], () =>
              null == e
                ? []
                : c.Z.getAllActiveStreamsForChannel(e.id).filter(
                    (e) => e.ownerId !== n,
                  ),
            ),
            i = (0, I.j)(t),
            u = R(e);
          return i && u && r.length > 0;
        };
      function O(e) {
        let [t, n, i] = (0, s.Wu)([h.Z], () => [
          h.Z.isFetchingPrice(e),
          h.Z.getPrice(e),
          h.Z.getErrored(e),
        ]);
        return (
          (0, r.useEffect)(() => {
            !t && null == n && !i && (0, m.Gq)(e);
          }, [t, n, i, e]),
          { price: n, fetchingPrice: t, error: i }
        );
      }
      function Z(e) {
        let [t, n, i, u] = (0, s.Wu)([h.Z], () => [
          h.Z.isEntitlementFetched(e),
          h.Z.isEntitlementFetching(e),
          h.Z.getEntitlement(e),
          h.Z.getErrored(e),
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
      function M(e) {
        y(e, () => {
          let t = c.Z.getCurrentUserActiveStream();
          if (null != t && t.channelId === e.id) {
            let e = f.Z.getState().goLiveSource;
            (0, m.x8)(null == e ? void 0 : e.quality);
            let t = (0, g.s)(v.LY.RESOLUTION_1440, v.ws.FPS_60, e);
            o.Z.setGoLiveSource(t);
          }
        });
      }
      function b() {
        var e;
        let t = (
            null !== (e = u().name) && void 0 !== e ? e : "unknown"
          ).toLowerCase(),
          n = (0, s.e7)([C.Z], () => C.Z.isFocused()),
          r = (0, s.e7)([d.Z], () => d.Z.useReducedMotion);
        return "safari" === t || !n || r;
      }
      function U(e) {
        T.default.track(N.rMx.CONSUMABLE_HD_STREAMING_ENTRYPOINT, {
          location: e,
        });
      }
      function F(e) {
        let t = (0, s.e7)([E.Z], () =>
            E.Z.getGuild(null == e ? void 0 : e.guild_id),
          ),
          n = (0, I.j)("VoiceEffectsActionBar");
        return (
          ((null == t ? void 0 : t.premiumTier) === N.Eu4.NONE ||
            (null == t ? void 0 : t.premiumTier) === N.Eu4.TIER_1) &&
          (null == e ? void 0 : e.type) === N.d4z.GUILD_VOICE &&
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
        s = n(200651),
        o = n(192379),
        d = n(120356),
        a = n.n(d),
        c = n(481060),
        E = n(388032),
        f = n(323822);
      let S = { BLOCK: f.block, INLINE: f.inline };
      class _ extends (l = o.PureComponent) {
        render() {
          let {
            children: e,
            className: t,
            textClassName: n,
            type: r = S.BLOCK,
            style: i,
          } = this.props;
          return (0, s.jsxs)("div", {
            className: a()(t, r),
            style: i,
            children: [
              (0, s.jsxs)(c.Text, {
                variant: "text-sm/bold",
                tag: "div",
                color: "text-positive",
                className: f.pro,
                children: [E.intl.string(E.t["8tvIiI"]), ":"],
              }),
              (0, s.jsx)(c.Text, {
                className: a()(f.tip, n),
                variant: "text-sm/normal",
                children: e,
              }),
            ],
          });
        }
      }
      (r = _),
        (i = "Types"),
        (u = S),
        i in r
          ? Object.defineProperty(r, i, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[i] = u),
        (t.Z = _);
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
          onSelectEmoji: s,
          messageId: o,
        } = e;
        return (0, r.jsx)(i.Z, {
          closePopout: n,
          channel: t,
          onSelectEmoji: s,
          pickerIntention: u.Hz.REACTION,
          analyticsOverride: l,
          messageId: o,
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
        s = n(709054);
      function o(e, t, n) {
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
      let d = {};
      class a extends (r = i.ZP.PersistedStore) {
        initialize(e) {
          var t;
          d =
            null !== (t = null == e ? void 0 : e.users) && void 0 !== t
              ? t
              : {};
        }
        getState() {
          return { users: d };
        }
        getKeyTrustedAt(e, t) {
          var n;
          let r = (0, u.MK)(t);
          return null === (n = d[e]) || void 0 === n ? void 0 : n[r];
        }
        isKeyVerified(e, t) {
          return null != this.getKeyTrustedAt(e, t);
        }
        getUserIds() {
          return s.default.keys(d);
        }
        getUserVerifiedKeys(e) {
          return d[e];
        }
      }
      o(a, "displayName", "VerifiedKeyStore"),
        o(a, "persistKey", "VerifiedKeyStore"),
        (t.Z = new a(l.Z, {
          SECURE_FRAMES_VERIFIED_KEY_CREATE: function (e) {
            let { userId: t, key: n } = e,
              r = (function (e) {
                var t;
                let n = null !== (t = d[e]) && void 0 !== t ? t : {};
                return (d[e] = n), n;
              })(t),
              i = new Uint8Array(n);
            r[(0, u.MK)(i)] = Date.now();
          },
          SECURE_FRAMES_VERIFIED_KEY_DELETE: function (e) {
            let { userId: t, serializedKey: n } = e,
              r = d[t];
            if (null == r) return !1;
            let i = delete r[n],
              u = !1;
            return (
              0 === Object.keys(r).length && (delete d[t], (u = !0)), i || u
            );
          },
          SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function (e) {
            let { userId: t } = e;
            return null != d[t] && delete d[t];
          },
        }));
    },
    424678: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
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
      class s extends i.PureComponent {
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
      class o extends i.PureComponent {
        render() {
          let e = this.props.artists.split(";");
          if (!this.props.canOpen) return e.join(", ");
          let t = e.length - 1;
          return e.map((e, n) =>
            (0, r.jsx)(
              s,
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
//# sourceMappingURL=56d504dba63f7088ff04.js.map
