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
          [o, s] = r.useState(null),
          [d, a] = r.useState(!0),
          c = (0, i.getAssetImage)(t, o, n);
        return (
          r.useEffect(() => {
            (0, i.getAssets)(t).then((e) => {
              for (let [t, n] of (a(!1), Object.entries(e)))
                if (null != n && "" !== n.id && l.includes(n.name)) {
                  s(n.id);
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
          return s;
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
        o = n(981631);
      let s = async (e) => {
          u.Z.dispatch({ type: "CONSUMABLES_PRICE_FETCH_STARTED", skuId: e });
          try {
            let t = await r.tn.get({
              url: o.ANM.CONSUMABLE_FETCH_PRICE(e),
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
                url: o.ANM.FETCH_HD_STREAMING_ENTITLEMENT,
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
              url: o.ANM.CONSUME_HD_STREAMING_POTION,
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
        o = n(442837),
        s = n(570140),
        d = n(959546),
        a = n(215023);
      let c = new Map(),
        E = new Set(),
        S = new Set(),
        f = new Set(),
        _ = new Map(),
        p = null;
      class C extends (r = o.ZP.Store) {
        getPrice(e) {
          return c.get(e);
        }
        isFetchingPrice(e) {
          return E.has(e);
        }
        getErrored(e) {
          return f.has(e);
        }
        getEntitlement(e) {
          return _.get(e);
        }
        isEntitlementFetched(e) {
          return _.has(e);
        }
        isEntitlementFetching(e) {
          return S.has(e);
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
        (t.Z = new C(s.Z, {
          CONSUMABLES_PRICE_FETCH_STARTED: (e) => {
            E.add(e.skuId);
          },
          CONSUMABLES_PRICE_FETCH_SUCCEEDED: (e) => {
            c.set(e.skuId, e.price), E.delete(e.skuId);
          },
          CONSUMABLES_PRICE_FETCH_FAILED: (e) => {
            E.delete(e.skuId), f.add(e.skuId);
          },
          CONSUMABLES_CLEAR_ERROR: (e) => {
            f.delete(e.skuId);
          },
          CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED: (e) => {
            S.delete(e.skuId), _.set(e.skuId, e.entitlement);
          },
          SKU_PURCHASE_SUCCESS: (e) => {
            if (1 !== e.entitlements.length) return;
            let t = e.entitlements[0];
            if (t.sku_id === a.FX) _.set(e.skuId, d.Z.createFromServer(t));
          },
          CONSUMABLES_ENTITLEMENT_FETCH_FAILED: (e) => {
            f.add(e.skuId), S.delete(e.skuId);
          },
          CONSUMABLES_ENTITLEMENT_FETCH_STARTED: (e) => {
            S.add(e.skuId);
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
    578976: function (e, t, n) {
      n.d(t, {
        s: function () {
          return u;
        },
      });
      var r = n(46973),
        i = n(37113);
      let u = (e, t, n) => {
        let u = {
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
              (u.desktopSettings = { sourceId: n.desktopSource.id, sound: !0 }),
            null != n.cameraSource &&
              (u.cameraSettings = {
                videoDeviceGuid: n.cameraSource.videoDeviceGuid,
                audioDeviceGuid: n.cameraSource.audioDeviceGuid,
              })),
          u
        );
      };
    },
    324085: function (e, t, n) {
      n.d(t, {
        J: function () {
          return M;
        },
        Ou: function () {
          return F;
        },
        R2: function () {
          return L;
        },
        T$: function () {
          return O;
        },
        Uu: function () {
          return Z;
        },
        Zm: function () {
          return R;
        },
        bK: function () {
          return b;
        },
        mx: function () {
          return U;
        },
        t6: function () {
          return y;
        },
      }),
        n(47120);
      var r = n(192379),
        i = n(525654),
        u = n.n(i),
        l = n(259443),
        o = n(442837),
        s = n(846027),
        d = n(607070),
        a = n(569545),
        c = n(199902),
        E = n(430824),
        S = n(131951),
        f = n(158776),
        _ = n(959457),
        p = n(594174),
        C = n(451478),
        T = n(626135),
        m = n(997323),
        I = n(120619),
        h = n(215339),
        v = n(578976),
        g = n(981631),
        N = n(37113);
      let A = new l.Yd("HDStreamingConsumableModal"),
        O = (e) => {
          let t = (0, o.e7)([E.Z], () =>
              E.Z.getGuild(null == e ? void 0 : e.guild_id),
            ),
            n = (0, o.e7)([p.default], () => {
              var e;
              return null === (e = p.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.id;
            }),
            i = (0, o.Wu)([c.Z], () =>
              null == e
                ? []
                : c.Z.getAllActiveStreamsForChannel(e.id).filter(
                    (e) => e.ownerId !== n,
                  ),
            ),
            u = i.some((e) => {
              let t = p.default.getUser(e.ownerId);
              return null != t && f.Z.isMobileOnline(t.id);
            }),
            [l, s] = (0, r.useState)(null),
            [d, S] = (0, r.useState)([]);
          (0, o.e7)(
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
                A.info("Setting bitrates", e), S(e), s(Date.now());
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
              (null == t ? void 0 : t.premiumTier) === g.Eu4.NONE ||
              (null == t ? void 0 : t.premiumTier) === g.Eu4.TIER_1;
          return T && C && !u;
        },
        R = (e, t) => {
          let n = (0, o.e7)([p.default], () => {
              var e;
              return null === (e = p.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.id;
            }),
            r = (0, o.Wu)([c.Z], () =>
              null == e
                ? []
                : c.Z.getAllActiveStreamsForChannel(e.id).filter(
                    (e) => e.ownerId !== n,
                  ),
            ),
            i = (0, h.j)(t),
            u = O(e);
          return i && u && r.length > 0;
        };
      function L(e) {
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
      function y(e) {
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
      function M(e, t) {
        let n = (0, r.useRef)(!0),
          i = null == e ? void 0 : e.hdStreamingUntil;
        (0, r.useEffect)(() => {
          if (n.current) {
            n.current = !1;
            return;
          }
          if (null != i && new Date(i) > new Date()) return t();
        }, [i]);
      }
      function Z(e) {
        M(e, () => {
          let t = c.Z.getCurrentUserActiveStream();
          if (null != t && t.channelId === e.id) {
            let e = S.Z.getState().goLiveSource;
            (0, m.x8)(null == e ? void 0 : e.quality);
            let t = (0, v.s)(N.LY.RESOLUTION_1440, N.ws.FPS_60, e);
            s.Z.setGoLiveSource(t);
          }
        });
      }
      function b() {
        var e;
        let t = (
            null !== (e = u().name) && void 0 !== e ? e : "unknown"
          ).toLowerCase(),
          n = (0, o.e7)([C.Z], () => C.Z.isFocused()),
          r = (0, o.e7)([d.Z], () => d.Z.useReducedMotion);
        return "safari" === t || !n || r;
      }
      function U(e) {
        T.default.track(g.rMx.CONSUMABLE_HD_STREAMING_ENTRYPOINT, {
          location: e,
        });
      }
      function F(e) {
        let t = (0, o.e7)([E.Z], () =>
            E.Z.getGuild(null == e ? void 0 : e.guild_id),
          ),
          n = (0, h.j)("VoiceEffectsActionBar");
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
        d = n(120356),
        a = n.n(d),
        c = n(481060),
        E = n(388032),
        S = n(323822);
      let f = { BLOCK: S.block, INLINE: S.inline };
      class _ extends (l = s.PureComponent) {
        render() {
          let {
            children: e,
            className: t,
            textClassName: n,
            type: r = f.BLOCK,
            style: i,
          } = this.props;
          return (0, o.jsxs)("div", {
            className: a()(t, r),
            style: i,
            children: [
              (0, o.jsxs)(c.Text, {
                variant: "text-sm/bold",
                tag: "div",
                color: "text-positive",
                className: S.pro,
                children: [E.intl.string(E.t["8tvIiI"]), ":"],
              }),
              (0, o.jsx)(c.Text, {
                className: a()(S.tip, n),
                variant: "text-sm/normal",
                children: e,
              }),
            ],
          });
        }
      }
      (r = _),
        (i = "Types"),
        (u = f),
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
          return o.default.keys(d);
        }
        getUserVerifiedKeys(e) {
          return d[e];
        }
      }
      s(a, "displayName", "VerifiedKeyStore"),
        s(a, "persistKey", "VerifiedKeyStore"),
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
//# sourceMappingURL=09af5ca3b46591a94a0d.js.map
