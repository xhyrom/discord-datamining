"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["91139"],
  {
    2242(e, t, n) {
      n.d(t, {
        M_: () => S,
        P7: () => p,
        TQ: () => d,
        Xn: () => _,
        Yl: () => u,
        bN: () => c,
        c4: () => h,
        f7: () => o,
        nd: () => f,
        p$: () => E,
      });
      var l,
        i,
        a,
        r = n(788868),
        s = n(818348);
      let o = 3,
        u = "(max-width: 485px)",
        d = "(max-height: 450px)";
      var c =
          (((l = {})[(l.CHANNEL = 1)] = "CHANNEL"),
          (l[(l.INTANGIBLE = 2)] = "INTANGIBLE"),
          l),
        h =
          (((i = {})[(i.SOME_CHANNELS = 0)] = "SOME_CHANNELS"),
          (i[(i.ALL_CHANNELS = 1)] = "ALL_CHANNELS"),
          i);
      let E = [
        { interval: r.WT.DAY, interval_count: 1 },
        { interval: r.WT.DAY, interval_count: 7 },
      ];
      var S =
        (((a = {})[(a.NONE = 0)] = "NONE"),
        (a[(a.IN_SUBSCRIPTION_SERVER = 1)] = "IN_SUBSCRIPTION_SERVER"),
        (a[(a.SUBSCRIBED = 2)] = "SUBSCRIBED"),
        a);
      let f = `https://${s.U2}/creators`,
        _ = 90,
        p = Object.freeze({
          MUST_READ_ARTICLES:
            "https://discord.com/creators/5-must-read-articles-for-beginners",
          CREATOR_TO_ADMIN_101:
            "https://discord.com/creators/creator-to-server-admin-101",
          CREATOR_TO_ADMIN_201:
            "https://discord.com/creators/creator-to-server-admin-201",
        });
    },
    567305(e, t, n) {
      n.d(t, { TG: () => o, _Y: () => u, hA: () => s });
      var l = n(702841),
        i = n(71393),
        a = n(652215);
      let r = [
          a.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED,
          a.GuildFeatures.CREATOR_MONETIZABLE,
          a.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL,
        ],
        s = (e) => null != e && r.some((t) => e.features.has(t));
      function o(e) {
        let t = i.A.getGuild(e);
        return (
          t?.features.has(a.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1
        );
      }
      function u(e) {
        return (0, l.bG)([i.A], () => {
          let t = i.A.getGuild(e);
          return (
            t?.features.has(a.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1
          );
        });
      }
    },
    846922(e, t, n) {
      n.d(t, { h: () => r, y: () => s });
      var l,
        i = n(353640),
        a = n(121894),
        r =
          (((l = {})[(l.ALL_CHANNELS_ACCESS = 0)] = "ALL_CHANNELS_ACCESS"),
          (l[(l.SOME_CHANNELS_ACCESS = 1)] = "SOME_CHANNELS_ACCESS"),
          l);
      let s = (0, i.v)((e) => ({
        listings: {},
        setListing: (t, n) =>
          (0, a.r)(() =>
            e((e) => ({ listings: { ...e.listings, [t]: n(e.listings[t]) } })),
          ),
        editStateIdsForGroup: {},
        setEditStateIdsForGroup: (t, n) =>
          (0, a.r)(() => {
            e((e) => ({
              editStateIdsForGroup: {
                ...e.editStateIdsForGroup,
                [t]: n(e.editStateIdsForGroup[t]),
              },
            }));
          }),
      }));
    },
    74399(e, t, n) {
      n.d(t, { A: () => d });
      var l = n(17928),
        i = n(228366),
        a = n(95701),
        r = n(734057);
      let s = {},
        o = {};
      class u extends l.Ay.Store {
        initialize() {
          this.waitFor(r.A);
        }
        static displayName = "GuildRoleSubscriptionTierTemplatesStore";
        getTemplates(e) {
          return s[e];
        }
        getTemplateWithCategory(e, t) {
          return s[e]?.find((e) => e.category === t);
        }
        getChannel(e) {
          return o[e];
        }
      }
      let d = new u(i.h, {
        GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function (e) {
          let { selectedTemplate: t, guildId: n } = e,
            l = Object.values(r.A.getMutableGuildChannelsForGuild(n));
          t.listings.forEach((e) => {
            e.channels.forEach((e) => {
              let t = l.find((t) => t.name === e.name);
              if (void 0 !== t) e.id = t.id;
              else if (!(e.id in o)) {
                let t = (0, a.createChannelRecord)(e);
                o[e.id] = t;
              }
            });
          });
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function (e) {
          let { templates: t, guildId: n } = e;
          s[n] = t;
        },
      });
    },
    739455(e, t, n) {
      n.d(t, {
        Fx: () => T,
        JH: () => I,
        SY: () => N,
        aV: () => O,
        fE: () => A,
        pF: () => L,
        zu: () => C,
      }),
        n(938796),
        n(321073);
      var l = n(64700),
        i = n(975975),
        a = n.n(i),
        r = n(665260),
        s = n(702841),
        o = n(228366),
        u = n(755584),
        d = n(734057),
        c = n(567305),
        h = n(636194),
        E = n(846922),
        S = n(555325),
        f = n(74399),
        _ = n(652215),
        p = n(746080);
      a().shim();
      let g = {};
      function A(e) {
        let t = (0, s.bG)([d.A], () => d.A.getChannel(e)),
          n = (0, s.bG)([f.A], () => f.A.getChannel(e)),
          i = (0, s.bG)([h.A], () => h.A.getBenefitChannel(e)),
          a = (0, l.useMemo)(
            () =>
              null != t && t.isObfuscated() && null != i
                ? t.merge({
                    name: i.name,
                    flags: r.VL(t.flags, p.lx.OBFUSCATED),
                  })
                : null,
            [t, i],
          );
        return null == t ? n : t.isObfuscated() ? (a ?? t) : t;
      }
      function C(e, t, n) {
        let l = (0, s.bG)([h.A], () => h.A.getSubscriptionListingsForGuild(e)),
          i = (0, E.y)((t) => t.editStateIdsForGroup[e]),
          a = (0, E.y)((e) => e.listings);
        if (void 0 === n || void 0 === t) return null;
        let r = l
            .filter((e) => !e.soft_deleted && !e.archived)
            .map((e) => e.subscription_plans[0].price),
          o = [];
        void 0 !== i &&
          i.forEach((e) => {
            let t = a[e],
              n = t?.priceTier;
            null != n && o.push(n);
          });
        let u = new Set(o.concat(r));
        if (!u.has(n)) return null;
        let d = t.indexOf(n);
        if (-1 === d) return null;
        let c = [];
        for (
          let e = d + 1;
          e < t.length && (u.has(t[e]) || c.push(t[e]), 3 !== c.length);
          e++
        );
        return c;
      }
      function m(e) {
        let t = E.y.getState().editStateIdsForGroup[e],
          n = E.y.getState().listings,
          l = new Set();
        null != t &&
          t.forEach((e) => {
            let t = n[e]?.channelBenefits;
            t?.forEach((e) => {
              null != f.A.getChannel(e.ref_id) && l.add(e.ref_id);
            });
          });
        let i = [];
        for (let t of l) {
          let n = f.A.getChannel(t);
          if (null != n) {
            let t = n.set("guild_id", e);
            i.push(t);
          }
        }
        return i;
      }
      function N(e) {
        let t = m(e);
        (g[e] = t),
          t.forEach((e) => {
            let t = e.set(
              "flags",
              p.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL,
            );
            o.h.dispatch({ type: "CHANNEL_CREATE", channel: t });
          });
      }
      function T(e) {
        (g[e] ?? m(e)).forEach((e) => {
          o.h.dispatch({ type: "CHANNEL_DELETE", channel: e });
        });
      }
      async function L(e, t) {
        let n = [],
          l = [];
        t.forEach((t) => {
          let i = f.A.getChannel(t.ref_id);
          null != i &&
            (n.push(
              u.A.createRoleSubscriptionTemplateChannel(
                e,
                i.name,
                i.type,
                i.topic,
              ),
            ),
            l.push(i));
        }),
          0 === n.length ||
            (await Promise.allSettled(n)).forEach((n, i) => {
              let a = l[i].id;
              if ("fulfilled" === n.status) {
                let t = n.value.body,
                  l = E.y.getState().editStateIdsForGroup[e],
                  i = E.y.getState().listings;
                null != l &&
                  l.forEach((e) => {
                    let n = i[e]?.channelBenefits;
                    n?.forEach((e) => {
                      e.ref_id === a && (e.ref_id = t.id);
                    });
                  });
              } else if (null != t) {
                let e = t.findIndex((e) => e.ref_id === a);
                -1 !== e && t?.splice(e, 1);
              }
            });
      }
      function I(e, t) {
        let n = E.y.getState().listings[e],
          l = n?.usedTemplate;
        if (null == l)
          return { templateCategory: null, hasChangeFromTemplate: null };
        let i = f.A.getTemplateWithCategory(t, l);
        if (null == i)
          return { templateCategory: null, hasChangeFromTemplate: null };
        let a = i.listings[0];
        if (
          n?.name !== a.name ||
          n?.description !== a.description ||
          n?.priceTier !== a.price_tier ||
          n?.image !== a.image ||
          n?.roleColor !== a.role_color ||
          n?.channelBenefits?.length !== a.channels.length ||
          n?.intangibleBenefits?.length !== a.additional_perks.length
        )
          return { templateCategory: i.category, hasChangeFromTemplate: !0 };
        for (let e = 0; e < a.channels.length; e++) {
          let t = n.channelBenefits[e],
            l = a.channels[e];
          if (
            t.name !== l.name ||
            t.description !== l.description ||
            t.emoji_name !== l.emoji_name
          )
            return { templateCategory: i.category, hasChangeFromTemplate: !0 };
        }
        for (let e = 0; e < a.additional_perks.length; e++) {
          let t = n.intangibleBenefits[e],
            l = a.additional_perks[e];
          if (
            t.name !== l.name ||
            t.description !== l.description ||
            t.emoji_name !== l.emoji_name
          )
            return { templateCategory: i.category, hasChangeFromTemplate: !0 };
        }
        return { templateCategory: i.category, hasChangeFromTemplate: !1 };
      }
      function O(e) {
        return (
          (0, S.X9)(e) &&
          e.features.has(_.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) &&
          (0, c.TG)(e.id)
        );
      }
    },
  },
]);
//# sourceMappingURL=91139.73d641ea2f1f6f39.js.map
