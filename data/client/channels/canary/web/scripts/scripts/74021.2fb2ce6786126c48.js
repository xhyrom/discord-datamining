"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["74021"],
  {
    824953(e, t, r) {
      r.d(t, { A: () => s });
      var l = r(735438),
        o = r.n(l),
        h = r(636537),
        n = r(228366),
        E = r(652215);
      let u = ["Spidey Bot", "Captain Hook"],
        s = {
          fetchForGuild(e) {
            n.h.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e }),
              h.Bo.get({
                url: E.Rsh.GUILD_WEBHOOKS(e),
                oldFormErrors: !0,
                rejectWithError: !1,
              })
                .then((t) => {
                  let { body: r } = t;
                  return n.h.dispatch({
                    type: "WEBHOOKS_UPDATE",
                    guildId: e,
                    webhooks: r,
                  });
                })
                .catch((t) => {
                  let { body: r } = t;
                  n.h.dispatch({
                    type: "WEBHOOKS_UPDATE",
                    guildId: e,
                    error: r.message,
                  });
                });
          },
          fetchForChannel(e, t) {
            n.h.dispatch({
              type: "WEBHOOKS_FETCHING",
              guildId: e,
              channelId: t,
            }),
              h.Bo.get({
                url: E.Rsh.CHANNEL_WEBHOOKS(t),
                oldFormErrors: !0,
                rejectWithError: !0,
              })
                .then((r) => {
                  let { body: l } = r;
                  return n.h.dispatch({
                    type: "WEBHOOKS_UPDATE",
                    guildId: e,
                    channelId: t,
                    webhooks: l,
                  });
                })
                .catch((t) => {
                  let { body: r } = t;
                  n.h.dispatch({
                    type: "WEBHOOKS_UPDATE",
                    guildId: e,
                    error: r.message,
                  });
                });
          },
          create: (e, t, r) => (
            null == r && (r = u[o().random(0, u.length - 1)]),
            h.Bo.post({
              url: E.Rsh.CHANNEL_WEBHOOKS(t),
              body: { name: r },
              oldFormErrors: !0,
              rejectWithError: !1,
            }).then((t) => {
              let { body: r } = t;
              return (
                n.h.dispatch({
                  type: "WEBHOOK_CREATE",
                  guildId: e,
                  webhook: r,
                }),
                r
              );
            })
          ),
          delete: (e, t) =>
            h.Bo.del({
              url: E.Rsh.WEBHOOK(t),
              oldFormErrors: !0,
              rejectWithError: !1,
            }).then(() => {
              n.h.dispatch({
                type: "WEBHOOK_DELETE",
                guildId: e,
                webhookId: t,
              });
            }),
          update: (e, t, r) =>
            h.Bo.patch({
              url: E.Rsh.WEBHOOK(t),
              body: r,
              oldFormErrors: !0,
              rejectWithError: !1,
            }).then((t) => {
              let { body: r } = t;
              return (
                n.h.dispatch({
                  type: "WEBHOOK_UPDATE",
                  guildId: e,
                  webhook: r,
                }),
                r
              );
            }),
        };
    },
    718116(e, t, r) {
      let l;
      r.d(t, { A: () => p });
      var o = r(735438),
        h = r.n(o),
        n = r(17928),
        E = r(228366),
        u = r(824953);
      let s = {},
        c = {};
      function i(e, t) {
        return null == t && (t = "guild"), `${e}:${t}`;
      }
      function a(e) {
        return null != s[e] || (s[e] = {}), s[e];
      }
      function d(e) {
        let { guildId: t, webhook: r } = e;
        a(t)[r.id] = r;
      }
      class O extends n.Ay.Store {
        static displayName = "WebhooksStore";
        isFetching(e, t) {
          return null != c[i(e, t)];
        }
        getWebhooksForGuild(e) {
          return h().values(a(e));
        }
        getWebhooksForChannel(e, t) {
          return h()(a(e))
            .values()
            .filter((e) => e.channel_id === t)
            .value();
        }
        get error() {
          return l;
        }
      }
      let p = new O(E.h, {
        WEBHOOKS_UPDATE: function (e) {
          let { guildId: t, channelId: r, webhooks: o, error: n } = e;
          if (null == o)
            return void (null != n
              ? ((l = n), delete c[i(t, r)])
              : null != r &&
                null != s[t] &&
                ((l = null), u.A.fetchForChannel(t, r)));
          l = null;
          let E = [];
          null != r &&
            (E = h()(a(t))
              .values()
              .filter((e) => e.channel_id !== r)
              .value());
          let d = (s[t] = {});
          E.concat(o).forEach((e) => (d[e.id] = e)), delete c[i(t, r)];
        },
        WEBHOOKS_FETCHING: function (e) {
          let { guildId: t, channelId: r } = e;
          c[i(t, r)] = !0;
        },
        WEBHOOK_CREATE: d,
        WEBHOOK_UPDATE: d,
        WEBHOOK_DELETE: function (e) {
          let { guildId: t, webhookId: r } = e;
          delete a(t)[r];
        },
      });
    },
  },
]);
//# sourceMappingURL=74021.2fb2ce6786126c48.js.map
