"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["26490"],
  {
    517905(e, t, n) {
      n.d(t, { A: () => d });
      var l = n(627968);
      n(64700);
      var i = n(292036),
        r = n(922016);
      let u = (0, n(268218).Fe)({
        createPromise: () =>
          Promise.all([
            n.e("73607"),
            n.e("90738"),
            n.e("90261"),
            n.e("16933"),
            n.e("40841"),
            n.e("24199"),
            n.e("43039"),
            n.e("98125"),
            n.e("18441"),
            n.e("88077"),
            n.e("18401"),
            n.e("13681"),
            n.e("32551"),
            n.e("52367"),
            n.e("50015"),
            n.e("47017"),
            n.e("77998"),
            n.e("66900"),
            n.e("1555"),
            n.e("44695"),
            n.e("21690"),
            n.e("55314"),
            n.e("29177"),
            n.e("44376"),
            n.e("31644"),
            n.e("993"),
            n.e("39227"),
            n.e("1177"),
            n.e("32817"),
            n.e("89094"),
            n.e("5501"),
            n.e("11527"),
            n.e("6223"),
            n.e("77245"),
            n.e("43437"),
            n.e("99141"),
            n.e("34472"),
            n.e("45723"),
            n.e("12373"),
            n.e("23216"),
            n.e("86127"),
            n.e("38835"),
            n.e("78777"),
            n.e("19452"),
            n.e("65881"),
            n.e("3589"),
            n.e("74810"),
            n.e("75842"),
            n.e("90664"),
            n.e("14285"),
            n.e("82783"),
            n.e("28152"),
            n.e("49520"),
            n.e("65826"),
            n.e("49089"),
            n.e("58164"),
            n.e("37490"),
            n.e("30474"),
            n.e("70008"),
          ]).then(n.bind(n, 109026)),
        webpackId: 109026,
        renderLoader: () => (0, l.jsx)(i.s, {}),
      });
      function d(e) {
        let {
          guildId: t,
          name: n,
          position: i = "right",
          onClose: d,
          targetElementRef: a,
          ...o
        } = e;
        return (0, l.jsx)(r.Y, {
          targetElementRef: a,
          position: i,
          clickTrap: !0,
          renderPopout: (e) =>
            (0, l.jsx)(u, {
              ...e,
              onClose: () => {
                e.closePopout(), d?.();
              },
              guildId: t,
              name: n,
            }),
          ...o,
        });
      }
    },
    685073(e, t, n) {
      n.d(t, {
        Rg: () => s,
        Wb: () => b,
        Zo: () => p,
        gC: () => c,
        gS: () => f,
        q0: () => g,
      });
      var l = n(17928),
        i = n(229527),
        r = n(696451),
        u = n(71393),
        d = n(287809),
        a = n(743981),
        o = n(652215);
      function g(e) {
        return e?.profile?.tag != null;
      }
      function s(e) {
        return e.features.has(o.GuildFeatures.GUILD_TAGS);
      }
      function c(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : a.Sl.SIZE_12;
        if (null == t) return;
        let { CDN_HOST: l } = window.GLOBAL_ENV;
        if (null == l) return;
        let i = a.lv[n];
        return `https://${l}/clan-badges/${e}/${t}.png?size=${i}`;
      }
      function p(e) {
        return null != e && e.identityEnabled
          ? { guildId: e.identityGuildId, tag: e.tag, badge: e.badge }
          : {};
      }
      function f(e) {
        let t = (0, l.bG)([u.A], () => u.A.getGuild(e), [e]);
        return null == e
          ? e
          : null == t
            ? t
            : {
                identityGuildId: t.id,
                identityEnabled: !0,
                tag: t.profile?.tag ?? void 0,
                badge: t.profile?.badge ?? void 0,
              };
      }
      function b(e, t, n) {
        let u = (0, l.bG)([d.default], () => d.default.getUser(e), [e]),
          a = (0, l.bG)(
            [r.Ay],
            () => {
              if (null == t || null == e) return null;
              let n = r.Ay.getMember(t, e);
              return (0, i.TR)(n);
            },
            [t, e],
          ),
          { tag: o, guildId: g } = p(void 0 !== n ? n : u?.primaryGuild);
        return null != g && null != o && !a;
      }
    },
  },
]);
//# sourceMappingURL=26490.2ec3786b029e6d9d.js.map
