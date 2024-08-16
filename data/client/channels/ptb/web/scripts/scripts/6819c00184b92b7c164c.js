"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84239"],
  {
    838433: function (t, e, u) {
      u.r(e),
        u.d(e, {
          openGuildProductLink: function () {
            return o;
          },
        });
      var n = u(735250);
      u(470079);
      var i = u(481060),
        l = u(336197),
        d = u(430824),
        r = u(240864),
        c = u(981631);
      function o(t, e) {
        var o;
        let a = d.Z.getGuild(t);
        r.Z.getGuildProductFetchState(e) === r.M.FETCHED &&
        (null === (o = r.Z.getGuildProduct(e)) || void 0 === o
          ? void 0
          : o.published) !== !0 &&
        null != a
          ? (0, i.openModalLazy)(async () => {
              let { default: t } = await u.e("29396").then(u.bind(u, 513239));
              return (e) => (0, n.jsx)(t, { ...e });
            })
          : (null == a
                ? void 0
                : a.hasFeature(c.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0
            ? (0, l.Z)(c.Z5c.GUILD_PRODUCT(t, e))
            : (0, l.Z)(c.Z5c.CHANNEL(t));
      }
    },
    240864: function (t, e, u) {
      u.d(e, {
        M: function () {
          return n;
        },
      }),
        u(653041),
        u(47120);
      var n,
        i,
        l,
        d,
        r,
        c,
        o = u(442837),
        a = u(759174),
        E = u(570140),
        C = u(70956),
        s = u(709054);
      ((l = n || (n = {}))[(l.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (l[(l.FETCHING = 1)] = "FETCHING"),
        (l[(l.FETCHED = 2)] = "FETCHED");
      let _ = {},
        T = {},
        D = {},
        U = 10 * C.Z.Millis.MINUTE;
      function P(t) {
        return "guild:".concat(t);
      }
      function f(t) {
        return "guild:".concat(t, ":published");
      }
      let G = new a.h(
          (t) => {
            let e = [P(t.guild_id)];
            return t.published && e.push(f(t.guild_id)), e;
          },
          (t) =>
            (function (t) {
              let e = s.default.extractTimestamp(t.id);
              return t.published ? -e : -e + 1e12;
            })(t),
        ),
        F = [];
      class h extends (i = o.ZP.Store) {
        getGuildProductsForGuildFetchState(t) {
          var e;
          return null !== (e = _[t]) && void 0 !== e ? e : 0;
        }
        getGuildProduct(t) {
          return G.get(t);
        }
        getGuildProductsForGuild(t, e) {
          let { publishedOnly: u } = e;
          return null == t ? F : G.values(u ? f(t) : P(t));
        }
        getGuildProductFetchState(t) {
          var e;
          return null !== (e = T[t]) && void 0 !== e ? e : 0;
        }
        isGuildProductsCacheExpired(t) {
          var e;
          return Date.now() - (null !== (e = D[t]) && void 0 !== e ? e : 0) > U;
        }
      }
      (c = "GuildProductsStore"),
        (r = "displayName") in (d = h)
          ? Object.defineProperty(d, r, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (d[r] = c),
        (e.Z = new h(E.Z, {
          CONNECTION_OPEN: function () {
            G.clear(), (_ = {}), (T = {}), (D = {});
          },
          GUILD_PRODUCTS_FETCH: function (t) {
            let { guildId: e } = t;
            (_[e] = 1),
              [...G.values(P(e))].forEach((t) => {
                G.delete(t.id);
              });
          },
          GUILD_PRODUCTS_FETCH_SUCCESS: function (t) {
            let { guildId: e, products: u } = t;
            (_[e] = 2),
              (D[e] = Date.now()),
              u.forEach((t) => {
                G.set(t.id, t), (T[t.id] = 2);
              });
          },
          GUILD_PRODUCTS_FETCH_FAILURE: function (t) {
            let { guildId: e } = t;
            _[e] = 2;
          },
          GUILD_PRODUCT_CREATE: function (t) {
            let { product: e } = t;
            G.set(e.id, e);
          },
          GUILD_PRODUCT_UPDATE: function (t) {
            let { product: e } = t;
            G.set(e.id, e);
          },
          GUILD_PRODUCT_DELETE: function (t) {
            let { productId: e } = t;
            G.delete(e);
          },
          GUILD_PRODUCT_FETCH: function (t) {
            let { productId: e } = t;
            T[e] = 1;
          },
          GUILD_PRODUCT_FETCH_SUCCESS: function (t) {
            let { product: e } = t;
            (T[e.id] = 2), G.set(e.id, e);
          },
          GUILD_PRODUCT_FETCH_FAILURE: function (t) {
            let { productId: e, error: u } = t;
            (T[e] = 2), 404 === u.status && G.delete(e);
          },
        }));
    },
  },
]);
//# sourceMappingURL=6819c00184b92b7c164c.js.map
