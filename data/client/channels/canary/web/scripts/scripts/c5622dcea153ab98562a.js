"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["75343"],
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
          [a, d] = r.useState(!0),
          c = (0, i.getAssetImage)(t, s, n);
        return (
          r.useEffect(() => {
            (0, i.getAssets)(t).then((e) => {
              for (let [t, n] of (d(!1), Object.entries(e)))
                if (null != n && "" !== n.id && l.includes(n.name)) {
                  o(n.id);
                  return;
                }
            });
          }, [t]),
          { url: c, state: a ? "loading" : null != c ? "fetched" : "not-found" }
        );
      }
    },
    175470: function (e, t, n) {
      n.d(t, {
        n: function () {
          return r;
        },
      });
      let r = (0, n(905837).Ue)((e) => ({
        clipsButtonRef: null,
        setClipsButtonRef: (t) => e({ clipsButtonRef: t }),
      }));
    },
    997323: function (e, t, n) {
      n.d(t, {
        Gq: function () {
          return o;
        },
        LE: function () {
          return S;
        },
        SN: function () {
          return c;
        },
        Zu: function () {
          return d;
        },
        ag: function () {
          return E;
        },
        gA: function () {
          return a;
        },
        x8: function () {
          return _;
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
        a = async (e) => {
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
        d = async (e, t) => {
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
        E = () => {
          u.Z.dispatch({ type: "PLAYED_HD_STREAMING_POTION_ANIMATION" });
        },
        S = () => {
          u.Z.dispatch({ type: "RESET_PLAYED_HD_STREAMING_POTION_ANIMATION" });
        },
        _ = (e) => {
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
        a = n(959546),
        d = n(215023);
      let c = new Map(),
        E = new Set(),
        S = new Set(),
        _ = new Set(),
        f = new Map(),
        p = !1,
        T = null;
      class C extends (r = s.ZP.Store) {
        getPrice(e) {
          return c.get(e);
        }
        isFetchingPrice(e) {
          return E.has(e);
        }
        getErrored(e) {
          return _.has(e);
        }
        getEntitlement(e) {
          return f.get(e);
        }
        isEntitlementFetched(e) {
          return f.has(e);
        }
        isEntitlementFetching(e) {
          return S.has(e);
        }
        getPlayedAnimation() {
          return p;
        }
        getPreviousGoLiveSettings() {
          return T;
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
            E.delete(e.skuId), _.add(e.skuId);
          },
          CONSUMABLES_CLEAR_ERROR: (e) => {
            _.delete(e.skuId);
          },
          CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED: (e) => {
            S.delete(e.skuId), f.set(e.skuId, e.entitlement);
          },
          SKU_PURCHASE_SUCCESS: (e) => {
            if (1 !== e.entitlements.length) return;
            let t = e.entitlements[0];
            if (t.sku_id === d.FX) f.set(e.skuId, a.Z.createFromServer(t));
          },
          PLAYED_HD_STREAMING_POTION_ANIMATION: (e) => {
            p = !0;
          },
          RESET_PLAYED_HD_STREAMING_POTION_ANIMATION: (e) => {
            p = !1;
          },
          CONSUMABLES_ENTITLEMENT_FETCH_FAILED: (e) => {
            _.add(e.skuId), S.delete(e.skuId);
          },
          CONSUMABLES_ENTITLEMENT_FETCH_STARTED: (e) => {
            S.add(e.skuId);
          },
          SET_PREVIOUS_GO_LIVE_SETTINGS: (e) => {
            T = e.previousGoLiveSettings;
          },
          CLEAR_CONSUMED_ENTITLEMENT: (e) => {
            f.delete(e.skuId);
          },
        }));
    },
    215339: function (e, t, n) {
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
    955843: function (e, t, n) {
      n.d(t, {
        J: function () {
          return g;
        },
        R2: function () {
          return h;
        },
        T$: function () {
          return A;
        },
        Uu: function () {
          return O;
        },
        Z7: function () {
          return v;
        },
        Zm: function () {
          return N;
        },
        t6: function () {
          return m;
        },
      }),
        n(47120);
      var r = n(192379),
        i = n(259443),
        u = n(442837),
        l = n(846027),
        s = n(569545),
        o = n(199902),
        a = n(430824),
        d = n(131951),
        c = n(158776),
        E = n(959457),
        S = n(594174),
        _ = n(997323),
        f = n(120619),
        p = n(215339),
        T = n(578976),
        C = n(37113);
      let I = new i.Yd("HDStreamingConsumableModal"),
        A = (e) => {
          let t = (0, u.e7)([a.Z], () => a.Z.getGuild(e.guild_id)),
            n = (0, u.e7)([S.default], () => {
              var e;
              return null === (e = S.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.id;
            }),
            i = (0, u.Wu)([o.Z], () =>
              o.Z.getAllActiveStreamsForChannel(e.id).filter(
                (e) => e.ownerId !== n,
              ),
            ),
            l = i.some((e) => {
              let t = S.default.getUser(e.ownerId);
              return null != t && c.Z.isMobileOnline(t.id);
            }),
            [d, _] = (0, r.useState)(null),
            [f, p] = (0, r.useState)([]);
          (0, u.e7)(
            [E.Z],
            () => {
              if (null == d || Date.now() - d > 1e4) {
                let e = i.map((e) => {
                  var t;
                  let n = (0, s.V9)(e),
                    r = E.Z.getRTCConnection(n);
                  return null == r
                    ? void 0
                    : null === (t = r.getVideoStats()) || void 0 === t
                      ? void 0
                      : t.inbound_bitrate_estimate_percentile99;
                });
                I.info("Setting bitrates", e), p(e), _(Date.now());
              }
            },
            [d, i],
          );
          let T = (0, r.useMemo)(
            () =>
              0 === f.length || (!f.some((e) => null == e || e < 35e5) && !0),
            [f],
          );
          return null != t && 0 === t.premiumTier && T && !l;
        },
        N = (e, t) => {
          let n = (0, u.e7)([S.default], () => {
              var e;
              return null === (e = S.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.id;
            }),
            r = (0, u.Wu)([o.Z], () =>
              o.Z.getAllActiveStreamsForChannel(e.id).filter(
                (e) => e.ownerId !== n,
              ),
            ),
            i = (0, p.j)(t),
            l = A(e);
          return i && l && r.length > 0;
        };
      function h(e) {
        let [t, n, i] = (0, u.Wu)([f.Z], () => [
          f.Z.isFetchingPrice(e),
          f.Z.getPrice(e),
          f.Z.getErrored(e),
        ]);
        return (
          (0, r.useEffect)(() => {
            !t && null == n && !i && (0, _.Gq)(e);
          }, [t, n, i, e]),
          { price: n, fetchingPrice: t, error: i }
        );
      }
      function m(e) {
        let [t, n, i, l] = (0, u.Wu)([f.Z], () => [
          f.Z.isEntitlementFetched(e),
          f.Z.isEntitlementFetching(e),
          f.Z.getEntitlement(e),
          f.Z.getErrored(e),
        ]);
        return (
          (0, r.useEffect)(() => {
            !t && !n && (0, _.gA)(e);
          }, [t, n, e]),
          { entitlement: i, fetchedEntitlement: t, error: l }
        );
      }
      function g(e, t) {
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
      function O(e) {
        g(e, () => {
          let t = o.Z.getCurrentUserActiveStream();
          if (null != t && t.channelId === e.id) {
            let e = d.Z.getState().goLiveSource;
            (0, _.x8)(null == e ? void 0 : e.quality);
            let t = (0, T.s)(C.LY.RESOLUTION_1440, C.ws.FPS_60, e);
            l.Z.setGoLiveSource(t);
          }
        });
      }
      function v(e) {
        let t = (0, u.e7)([f.Z], () => f.Z.getPlayedAnimation());
        (0, r.useEffect)(() => {
          t && (e(), (0, _.LE)());
        }, [t, e]);
      }
    },
    576855: function (e, t, n) {
      var r,
        i,
        u,
        l,
        s = n(200651),
        o = n(192379),
        a = n(120356),
        d = n.n(a),
        c = n(481060),
        E = n(388032),
        S = n(275906);
      let _ = { BLOCK: S.block, INLINE: S.inline };
      class f extends (l = o.PureComponent) {
        render() {
          let {
            children: e,
            className: t,
            textClassName: n,
            type: r = _.BLOCK,
            style: i,
          } = this.props;
          return (0, s.jsxs)("div", {
            className: d()(t, r),
            style: i,
            children: [
              (0, s.jsxs)(c.Text, {
                variant: "text-sm/bold",
                tag: "div",
                color: "text-positive",
                className: S.pro,
                children: [E.intl.string(E.t["8tvIiI"]), ":"],
              }),
              (0, s.jsx)(c.Text, {
                className: d()(S.tip, n),
                variant: "text-sm/normal",
                children: e,
              }),
            ],
          });
        }
      }
      (r = f),
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
        (t.Z = f);
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
      let a = {};
      class d extends (r = i.ZP.PersistedStore) {
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
          return s.default.keys(a);
        }
        getUserVerifiedKeys(e) {
          return a[e];
        }
      }
      o(d, "displayName", "VerifiedKeyStore"),
        o(d, "persistKey", "VerifiedKeyStore"),
        (t.Z = new d(l.Z, {
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
//# sourceMappingURL=c5622dcea153ab98562a.js.map
