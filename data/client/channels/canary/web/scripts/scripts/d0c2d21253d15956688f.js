"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["57661"],
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
          [o, a] = r.useState(null),
          [c, s] = r.useState(!0),
          d = (0, i.getAssetImage)(t, o, n),
          E = r.useRef(l);
        return (
          r.useEffect(() => {
            E.current = l;
          }),
          r.useEffect(() => {
            let { current: e } = E;
            (0, i.getAssets)(t).then((t) => {
              for (let [n, r] of (s(!1), Object.entries(t)))
                if (null != r && "" !== r.id && e.includes(r.name)) {
                  a(r.id);
                  return;
                }
            });
          }, [t]),
          { url: d, state: c ? "loading" : null != d ? "fetched" : "not-found" }
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
    576855: function (e, t, n) {
      var r,
        i,
        u,
        l,
        o = n(200651),
        a = n(192379),
        c = n(120356),
        s = n.n(c),
        d = n(481060),
        E = n(388032),
        f = n(323822);
      let p = { BLOCK: f.block, INLINE: f.inline };
      class _ extends (l = a.PureComponent) {
        render() {
          let {
            children: e,
            className: t,
            textClassName: n,
            type: r = p.BLOCK,
            style: i,
          } = this.props;
          return (0, o.jsxs)("div", {
            className: s()(t, r),
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
                className: s()(f.tip, n),
                variant: "text-sm/normal",
                children: e,
              }),
            ],
          });
        }
      }
      (r = _),
        (i = "Types"),
        (u = p),
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
    687058: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      }),
        n(757143);
      var r = n(192379),
        i = n(442837),
        u = n(131951),
        l = n(388032);
      let o = /^Default/;
      function a() {
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
          return a;
        },
      }),
        n(757143);
      var r = n(192379),
        i = n(442837),
        u = n(131951),
        l = n(388032);
      let o = /^Default/;
      function a() {
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
    980463: function (e, t, n) {
      n.d(t, {
        Gq: function () {
          return s;
        },
        SN: function () {
          return _;
        },
        Zu: function () {
          return E;
        },
        gA: function () {
          return d;
        },
        qc: function () {
          return f;
        },
        x8: function () {
          return m;
        },
      }),
        n(411104);
      var r = n(544891),
        i = n(343817),
        u = n(570140),
        l = n(959546),
        o = n(317951),
        a = n(981631);
      let c = {
          [o.D1]: a.ANM.FETCH_MESSAGE_CONFETTI_ENTITLEMENT,
          [o.FX]: a.ANM.FETCH_HD_STREAMING_ENTITLEMENT,
        },
        s = async (e) => {
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
        d = async (e) => {
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
        E = async (e, t) => {
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
        f = async (e, t, n, l) => {
          try {
            await r.tn.post({
              url: a.ANM.CONSUME_MESSAGE_CONFETTI_POTION,
              body: { channel_id: e, message_id: t, emoji_name: p(n) },
              rejectWithError: !1,
            }),
              u.Z.dispatch({ type: "CLEAR_CONSUMED_ENTITLEMENT", skuId: l });
          } catch (e) {
            throw new i.Hx(e);
          }
        },
        p = (e) =>
          null != e.id
            ? "".concat(e.name, ":").concat(e.id)
            : e.optionallyDiverseSequence,
        _ = (e) => {
          u.Z.dispatch({ type: "CONSUMABLES_CLEAR_ERROR", skuId: e });
        },
        m = (e) => {
          u.Z.dispatch({
            type: "SET_PREVIOUS_GO_LIVE_SETTINGS",
            previousGoLiveSettings: e,
          });
        };
    },
    576645: function (e, t, n) {
      n.d(t, {
        J: function () {
          return O;
        },
        Ou: function () {
          return w;
        },
        R2: function () {
          return b;
        },
        T$: function () {
          return y;
        },
        Uu: function () {
          return R;
        },
        Zm: function () {
          return A;
        },
        bK: function () {
          return L;
        },
        mx: function () {
          return D;
        },
        t6: function () {
          return M;
        },
      }),
        n(47120);
      var r = n(192379),
        i = n(525654),
        u = n.n(i),
        l = n(259443),
        o = n(442837),
        a = n(846027),
        c = n(607070),
        s = n(578976),
        d = n(569545),
        E = n(199902),
        f = n(430824),
        p = n(131951),
        _ = n(158776),
        m = n(959457),
        S = n(594174),
        T = n(451478),
        C = n(626135),
        h = n(980463),
        v = n(823961),
        N = n(896835),
        g = n(981631),
        I = n(37113);
      let Z = new l.Yd("HDStreamingConsumableModal"),
        y = (e) => {
          let t = (0, o.e7)([f.Z], () =>
              f.Z.getGuild(null == e ? void 0 : e.guild_id),
            ),
            n = (0, o.e7)([S.default], () => {
              var e;
              return null === (e = S.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.id;
            }),
            i = (0, o.Wu)([E.Z], () =>
              null == e
                ? []
                : E.Z.getAllActiveStreamsForChannel(e.id).filter(
                    (e) => e.ownerId !== n,
                  ),
            ),
            u = i.some((e) => {
              let t = S.default.getUser(e.ownerId);
              return null != t && _.Z.isMobileOnline(t.id);
            }),
            [l, a] = (0, r.useState)(null),
            [c, s] = (0, r.useState)([]);
          (0, o.e7)(
            [m.Z],
            () => {
              if (null == l || Date.now() - l > 1e4) {
                let e = i.map((e) => {
                  var t;
                  let n = (0, d.V9)(e),
                    r = m.Z.getRTCConnection(n);
                  return null == r
                    ? void 0
                    : null === (t = r.getVideoStats()) || void 0 === t
                      ? void 0
                      : t.inbound_bitrate_estimate_percentile99;
                });
                Z.info("Setting bitrates", e), s(e), a(Date.now());
              }
            },
            [l, i],
          );
          let p = (0, r.useMemo)(
              () =>
                0 === c.length || (!c.some((e) => null == e || e < 35e5) && !0),
              [c],
            ),
            T =
              (null == t ? void 0 : t.premiumTier) === g.Eu4.NONE ||
              (null == t ? void 0 : t.premiumTier) === g.Eu4.TIER_1;
          return T && p && !u;
        },
        A = (e, t) => {
          let n = (0, o.e7)([S.default], () => {
              var e;
              return null === (e = S.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.id;
            }),
            r = (0, o.Wu)([E.Z], () =>
              null == e
                ? []
                : E.Z.getAllActiveStreamsForChannel(e.id).filter(
                    (e) => e.ownerId !== n,
                  ),
            ),
            i = (0, N.j)(t),
            u = y(e);
          return i && u && r.length > 0;
        };
      function b(e) {
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
      function M(e) {
        let [t, n, i, u] = (0, o.Wu)([v.Z], () => [
          v.Z.isEntitlementFetched(e),
          v.Z.isEntitlementFetching(e),
          v.Z.getEntitlement(e),
          v.Z.getErrored(e),
        ]);
        return (
          (0, r.useEffect)(() => {
            !t && !n && (0, h.gA)(e);
          }, [t, n, e]),
          { entitlement: i, fetchedEntitlement: t, error: u }
        );
      }
      function O(e, t) {
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
        O(e, () => {
          let t = E.Z.getCurrentUserActiveStream();
          if (null != t && t.channelId === e.id) {
            let e = p.Z.getState().goLiveSource;
            (0, h.x8)(null == e ? void 0 : e.quality);
            let t = (0, s.s)(I.LY.RESOLUTION_1440, I.ws.FPS_60, e);
            a.Z.setGoLiveSource(t);
          }
        });
      }
      function L() {
        var e;
        let t = (
            null !== (e = u().name) && void 0 !== e ? e : "unknown"
          ).toLowerCase(),
          n = (0, o.e7)([T.Z], () => T.Z.isFocused()),
          r = (0, o.e7)([c.Z], () => c.Z.useReducedMotion);
        return "safari" === t || !n || r;
      }
      function D(e) {
        C.default.track(g.rMx.CONSUMABLE_HD_STREAMING_ENTRYPOINT, {
          location: e,
        });
      }
      function w(e) {
        let t = (0, o.e7)([f.Z], () =>
            f.Z.getGuild(null == e ? void 0 : e.guild_id),
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
    896835: function (e, t, n) {
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
          messageId: a,
        } = e;
        return (0, r.jsx)(i.Z, {
          closePopout: n,
          channel: t,
          onSelectEmoji: o,
          pickerIntention: u.Hz.REACTION,
          analyticsOverride: l,
          messageId: a,
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
      function a(e, t, n) {
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
      let c = {};
      class s extends (r = i.ZP.PersistedStore) {
        initialize(e) {
          var t;
          c =
            null !== (t = null == e ? void 0 : e.users) && void 0 !== t
              ? t
              : {};
        }
        getState() {
          return { users: c };
        }
        getKeyTrustedAt(e, t) {
          var n;
          let r = (0, u.MK)(t);
          return null === (n = c[e]) || void 0 === n ? void 0 : n[r];
        }
        isKeyVerified(e, t) {
          return null != this.getKeyTrustedAt(e, t);
        }
        getUserIds() {
          return o.default.keys(c);
        }
        getUserVerifiedKeys(e) {
          return c[e];
        }
      }
      a(s, "displayName", "VerifiedKeyStore"),
        a(s, "persistKey", "VerifiedKeyStore"),
        (t.Z = new s(l.Z, {
          SECURE_FRAMES_VERIFIED_KEY_CREATE: function (e) {
            let { userId: t, key: n } = e,
              r = (function (e) {
                var t;
                let n = null !== (t = c[e]) && void 0 !== t ? t : {};
                return (c[e] = n), n;
              })(t),
              i = new Uint8Array(n);
            r[(0, u.MK)(i)] = Date.now();
          },
          SECURE_FRAMES_VERIFIED_KEY_DELETE: function (e) {
            let { userId: t, serializedKey: n } = e,
              r = c[t];
            if (null == r) return !1;
            let i = delete r[n],
              u = !1;
            return (
              0 === Object.keys(r).length && (delete c[t], (u = !0)), i || u
            );
          },
          SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function (e) {
            let { userId: t } = e;
            return null != c[t] && delete c[t];
          },
        }));
    },
    424678: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
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
      class a extends i.PureComponent {
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
//# sourceMappingURL=d0c2d21253d15956688f.js.map
