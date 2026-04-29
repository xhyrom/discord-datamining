"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21574"],
  {
    871109(t, e, u) {
      u.d(e, { A: () => F, e: () => E }), u(321073);
      var i,
        d = u(17928),
        l = u(713402),
        n = u(228366),
        r = u(927813),
        c = u(935208),
        E =
          (((i = {})[(i.NOT_FETCHED = 0)] = "NOT_FETCHED"),
          (i[(i.FETCHING = 1)] = "FETCHING"),
          (i[(i.FETCHED = 2)] = "FETCHED"),
          i);
      let s = {},
        C = {},
        T = {},
        _ = 10 * r.A.Millis.MINUTE;
      function o(t) {
        return `guild:${t}`;
      }
      function D(t) {
        return `guild:${t}:published`;
      }
      let U = new l.J(
          (t) => {
            let e = [o(t.guild_id)];
            return t.published && e.push(D(t.guild_id)), e;
          },
          (t) => {
            let e;
            return (
              (e = c.default.extractTimestamp(t.id)),
              t.published ? -e : -e + 1e12
            );
          },
        ),
        a = [];
      class G extends d.Ay.Store {
        static displayName = "GuildProductsStore";
        getGuildProductsForGuildFetchState(t) {
          return s[t] ?? 0;
        }
        getGuildProduct(t) {
          return U.get(t);
        }
        getGuildProductsForGuild(t, e) {
          let { publishedOnly: u } = e;
          return null == t ? a : U.values(u ? D(t) : o(t));
        }
        getGuildProductFetchState(t) {
          return C[t] ?? 0;
        }
        isGuildProductsCacheExpired(t) {
          return Date.now() - (T[t] ?? 0) > _;
        }
      }
      let F = new G(n.h, {
        CONNECTION_OPEN: function () {
          U.clear(), (s = {}), (C = {}), (T = {});
        },
        GUILD_PRODUCTS_FETCH: function (t) {
          let { guildId: e } = t;
          (s[e] = 1),
            [...U.values(o(e))].forEach((t) => {
              U.delete(t.id);
            });
        },
        GUILD_PRODUCTS_FETCH_SUCCESS: function (t) {
          let { guildId: e, products: u } = t;
          (s[e] = 2),
            (T[e] = Date.now()),
            u.forEach((t) => {
              U.set(t.id, t), (C[t.id] = 2);
            });
        },
        GUILD_PRODUCTS_FETCH_FAILURE: function (t) {
          let { guildId: e } = t;
          s[e] = 2;
        },
        GUILD_PRODUCT_CREATE: function (t) {
          let { product: e } = t;
          U.set(e.id, e);
        },
        GUILD_PRODUCT_UPDATE: function (t) {
          let { product: e } = t;
          U.set(e.id, e);
        },
        GUILD_PRODUCT_DELETE: function (t) {
          let { productId: e } = t;
          U.delete(e);
        },
        GUILD_PRODUCT_FETCH: function (t) {
          let { productId: e } = t;
          C[e] = 1;
        },
        GUILD_PRODUCT_FETCH_SUCCESS: function (t) {
          let { product: e } = t;
          (C[e.id] = 2), U.set(e.id, e);
        },
        GUILD_PRODUCT_FETCH_FAILURE: function (t) {
          let { productId: e, error: u } = t;
          (C[e] = 2), 404 === u.status && U.delete(e);
        },
      });
    },
  },
]);
//# sourceMappingURL=21574.e9f94193480c8169.js.map
