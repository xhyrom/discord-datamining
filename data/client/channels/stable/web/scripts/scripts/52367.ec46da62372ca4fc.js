"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["52367"],
  {
    881756(e, t, a) {
      a.d(t, { A: () => i });
      var n = a(569926),
        s = a(800007);
      function i() {
        let { data: e } = (0, n.I)(s.FG),
          { data: t } = (0, n.I)(s.LC);
        return {
          gameName: e?.name ?? "Minecraft",
          gameName2: t?.name ?? "Hytale",
        };
      }
    },
    79133(e, t, a) {
      a.d(t, { L: () => o, q: () => l });
      var n = a(281445),
        s = a(390544);
      let i = [
        {
          id: "1",
          name: "GameServer #1",
          cost: 3,
          specifications: [
            { title: "2", description: "GB" },
            { title: "1", description: "vCPU" },
            { title: "25", description: "GB" },
          ],
        },
        {
          id: "2",
          name: "GameServer #2",
          cost: 6,
          specifications: [
            { title: "2", description: "GB" },
            { title: "1", description: "vCPU" },
            { title: "25", description: "GB" },
          ],
        },
        {
          id: "3",
          name: "GameServer #3",
          cost: 12,
          specifications: [
            { title: "2", description: "GB" },
            { title: "1", description: "vCPU" },
            { title: "25", description: "GB" },
          ],
        },
      ];
      function r(e, t) {
        return {
          id: e,
          name: t,
          provider: n.X.SHOCKBYTE,
          plans: i,
          baseCost: Math.min(...i.map((e) => e.cost)),
          gameId: "1",
        };
      }
      let l = [
          r("1", "GameServer Test #1"),
          r("2", "GameServer Test #2"),
          r("3", "GameServer Test #3"),
          r("4", "GameServer Test #4"),
          r("5", "GameServer Test #5"),
          r("6", "GameServer Test #6"),
          r("7", "GameServer Test #7"),
          r("8", "GameServer Test #8"),
          r("9", "GameServer Test #9"),
          r("10", "GameServer Test #10"),
          r("11", "GameServer Test #11"),
          r("12", "GameServer Test #12"),
        ],
        o = [
          {
            id: "1",
            gameId: "1",
            name: "GameServer Test #1",
            port: "25565",
            regionId: "us-east",
            regionName: "US East",
            planId: i[1].id,
            planName: i[1].name,
            onlineConnectionsCount: 0,
            maxConnectionsCount: 10,
            status: s.M.ONLINE,
            serverIP: "127.0.0.1",
            gameServerPanelUrl: "https://google.com",
            entitlementId: "1",
          },
          {
            id: "2",
            gameId: "2",
            name: "GameServer Test #2",
            port: "25565",
            regionId: "us-east",
            regionName: "US East",
            planId: i[1].id,
            planName: i[1].name,
            onlineConnectionsCount: 0,
            maxConnectionsCount: 10,
            status: s.M.ONLINE,
            serverIP: "127.0.0.1",
            gameServerPanelUrl: "https://google.com",
            entitlementId: "2",
          },
          {
            id: "3",
            gameId: "3",
            name: "GameServer Test #3",
            port: "25565",
            regionId: "us-east",
            regionName: "US East",
            planId: i[1].id,
            planName: i[1].name,
            onlineConnectionsCount: 0,
            maxConnectionsCount: 10,
            status: s.M.ONLINE,
            serverIP: "127.0.0.1",
            gameServerPanelUrl: "https://google.com",
            entitlementId: "3",
          },
          {
            id: "4",
            gameId: "4",
            name: "GameServer Test #4",
            port: "25565",
            regionId: "us-east",
            regionName: "US East",
            planId: i[1].id,
            planName: i[1].name,
            onlineConnectionsCount: 0,
            maxConnectionsCount: 10,
            status: s.M.ONLINE,
            serverIP: "127.0.0.1",
            gameServerPanelUrl: "https://google.com",
            entitlementId: "4",
          },
          {
            id: "5",
            gameId: "5",
            name: "GameServer Test #5",
            port: "25565",
            regionId: "us-east",
            regionName: "US East",
            planId: i[1].id,
            planName: i[1].name,
            onlineConnectionsCount: 0,
            maxConnectionsCount: 10,
            status: s.M.ONLINE,
            serverIP: "127.0.0.1",
            gameServerPanelUrl: "https://google.com",
            entitlementId: "5",
          },
          {
            id: "6",
            gameId: "6",
            name: "GameServer Test #6",
            port: "25565",
            regionId: "us-east",
            regionName: "US East",
            planId: i[1].id,
            planName: i[1].name,
            onlineConnectionsCount: 0,
            maxConnectionsCount: 10,
            status: s.M.ONLINE,
            serverIP: "127.0.0.1",
            gameServerPanelUrl: "https://google.com",
            entitlementId: "6",
          },
        ];
    },
    627072(e, t, a) {
      a.d(t, { o: () => n });
      function n(e) {
        let t = e.skus
            .map((e) => {
              let t = e.tenant_metadata.plan_features.map((e) => ({
                title: e.title,
                description: e.description,
              }));
              return {
                id: e.id,
                name: e.name,
                cost: e.tenant_metadata.boost_price,
                specifications: t,
              };
            })
            .sort((e, t) => t.cost - e.cost),
          a = t.length > 0 ? Math.min(...t.map((e) => e.cost)) : 0;
        return {
          id: e.id,
          name: e.name,
          gameId:
            e.tenant_metadata?.guild_monetization?.game_server
              ?.game_application_id ?? "",
          provider:
            e.tenant_metadata?.guild_monetization?.game_server?.provider,
          plans: t,
          baseCost: a,
          disabled:
            e.tenant_metadata?.guild_monetization?.game_server?.disabled,
          early_access:
            e.tenant_metadata?.guild_monetization?.game_server?.early_access,
          can_market:
            e.tenant_metadata?.guild_monetization?.game_server?.can_market,
        };
      }
    },
    73381(e, t, a) {
      a.d(t, { A: () => u }), a(321073);
      var n = a(64700),
        s = a(512750),
        i = a(17928),
        r = a(488803),
        l = a(522055),
        o = a(881756),
        d = a(568065),
        c = a(800007),
        m = a(576709),
        g = a(985018);
      let p =
        "https://cdn.discordapp.com/assets/content/2b844e74bd90a5e0ccb408b039a4915f295d8b9c192c823a4afc69c1fc3604a2.png";
      var v = a(645619);
      let h = new Set([...Array.from(d.aH), ...Array.from(d.m_), s.FB]);
      function u(e) {
        let t = (0, i.bG)(
            [v.A],
            () => v.A.getStateForGuild(e)?.powerupCatalog?.[d.o9.PERK],
          ),
          a = (function (e) {
            let t = (0, r.C$)(e, "useGameServerPerk"),
              a = (0, i.bG)([l.A], () => l.A.getLowestGameCostForGuild(e)),
              { gameName: s, gameName2: v } = (0, o.A)();
            return n.useMemo(
              () =>
                t && null != a
                  ? {
                      skuId: c.W5,
                      title: g.intl.string(m.default["B3OfL/"]),
                      description: g.intl.format(m.default["+UqyGU"], {
                        gameName: s,
                        gameName2: v,
                      }),
                      cost: a,
                      dependencies: [],
                      type: d.o9.PERK,
                      animatedImageUrl: p,
                      staticImageUrl: p,
                    }
                  : null,
              [t, a, s, v],
            );
          })(e);
        return n.useMemo(() => {
          let e = [...(t ?? [])];
          return null != a && e.push(a), e.filter((e) => !h.has(e.skuId));
        }, [t, a]);
      }
    },
    828162(e, t, a) {
      a.d(t, { A: () => o });
      var n = a(492462),
        s = a(976860),
        i = a(568065),
        r = a(652215),
        l = a(746080);
      function o(e, t, a) {
        let o =
          null != a ? { search: (0, n.stringify)({ [i.G0]: a }) } : void 0;
        (0, s.pX)(r.BVt.CHANNEL(e, l.VV.GUILD_BOOSTS), { ...o, source: t });
      }
    },
    65154(e, t, a) {
      a.d(t, { S: () => l });
      var n = a(627968);
      a(64700);
      var s = a(661531),
        i = a(996682),
        r = a(27989);
      let l = (e) => {
        let {
            size: t = "md",
            width: a,
            height: l,
            secondaryColor: o = "transparent",
            secondaryColorClass: d = "",
            color: c = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: m = "",
            ...g
          } = e,
          p = (0, r.J)(t),
          v = p?.width ?? a,
          h = p?.height ?? l;
        return (0, n.jsxs)("svg", {
          ...(0, i.A)(g),
          xmlns: "http://www.w3.org/2000/svg",
          width: v,
          height: h,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, n.jsx)("circle", {
              cx: "12",
              cy: "12",
              r: "10",
              fill: "string" == typeof o ? o : o.css,
              className: d,
            }),
            (0, n.jsx)("path", {
              fill: "string" == typeof c ? c : c.css,
              fillRule: "evenodd",
              d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM9 8.09c0-.88 1-1.4 1.73-.9l5.8 3.91c.63.44.63 1.36 0 1.8l-5.8 3.9C10 17.3 9 16.8 9 15.92V8.1Z",
              clipRule: "evenodd",
              className: m,
            }),
          ],
        });
      };
    },
    477262(e, t, a) {
      a.d(t, { s: () => l });
      var n = a(627968);
      a(64700);
      var s = a(661531),
        i = a(996682),
        r = a(27989);
      let l = (e) => {
        let {
            size: t = "md",
            width: a,
            height: l,
            color: o = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
          } = e,
          m = (0, r.J)(t),
          g = m?.width ?? a,
          p = m?.height ?? l;
        return (0, n.jsxs)("svg", {
          ...(0, i.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: g,
          height: p,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, n.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M4 8v7.5a.5.5 0 0 1-.5.5H3a1 1 0 0 1-1-1V8a6 6 0 0 1 6-6h7a1 1 0 0 1 1 1v.5a.5.5 0 0 1-.5.5H8a4 4 0 0 0-4 4Z",
              className: d,
            }),
            (0, n.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M6 9a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Zm13.8 9.79L16.82 15a2 2 0 0 0-3.14 0l-2.09 2.65-.13-.16a1.5 1.5 0 0 0-2.36.05l-.95 1.26a.75.75 0 0 0 .6 1.2h10.46c.62 0 .97-.72.59-1.21ZM11.73 8.3c.57-.56 1.52-.01 1.33.77a.8.8 0 0 0 .55.96c.77.22.77 1.3 0 1.53a.8.8 0 0 0-.55.96c.19.77-.76 1.32-1.33.76a.8.8 0 0 0-1.1 0c-.58.56-1.53.01-1.33-.76a.8.8 0 0 0-.56-.96c-.77-.22-.77-1.31 0-1.53a.8.8 0 0 0 .56-.96c-.2-.78.75-1.33 1.32-.77.31.3.8.3 1.11 0Z",
              clipRule: "evenodd",
              className: d,
            }),
          ],
        });
      };
    },
    460905(e, t, a) {
      a.d(t, { n: () => l });
      var n = a(627968);
      a(64700);
      var s = a(661531),
        i = a(996682),
        r = a(27989);
      let l = (e) => {
        let {
            size: t = "md",
            width: a,
            height: l,
            color: o = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
          } = e,
          m = (0, r.J)(t),
          g = m?.width ?? a,
          p = m?.height ?? l;
        return (0, n.jsx)("svg", {
          ...(0, i.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: g,
          height: p,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            fillRule: "evenodd",
            d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 1.17a1 1 0 0 1 1.39.27 3.5 3.5 0 0 0 5.82 0 1 1 0 0 1 1.66 1.12 5.5 5.5 0 0 1-9.14 0 1 1 0 0 1 .27-1.4Z",
            clipRule: "evenodd",
            className: d,
          }),
        });
      };
    },
    179866(e, t, a) {
      a.d(t, { i: () => l });
      var n = a(627968);
      a(64700);
      var s = a(661531),
        i = a(996682),
        r = a(27989);
      let l = (e) => {
        let {
            size: t = "md",
            width: a,
            height: l,
            color: o = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
          } = e,
          m = (0, r.J)(t),
          g = m?.width ?? a,
          p = m?.height ?? l;
        return (0, n.jsx)("svg", {
          ...(0, i.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: g,
          height: p,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M20.3 5.41h-.39c-.84 0-1.52-.65-1.52-1.46v-.3c0-.9-.77-1.65-1.71-1.65H7.31c-.94 0-1.71.74-1.71 1.65v.3c0 .81-.68 1.46-1.52 1.46H3.7c-.94 0-1.7.73-1.7 1.64v3.52l.01.49c.05 3.11.94 4.69 2.92 6.63C6.72 19.46 11.58 22 11.99 22c.41 0 5.27-2.54 7.06-4.31 1.98-1.95 2.92-3.53 2.92-6.63L22 7.05c0-.9-.76-1.64-1.7-1.64Zm-8.32.03a3.15 3.15 0 1 1-.01 6.3 3.15 3.15 0 0 1 .01-6.3Zm4.52 11.67c-.97.68-2.86 1.62-3.87 2.11-.42.2-.91.2-1.33 0a40.17 40.17 0 0 1-3.82-2.1.87.87 0 0 1-.37-.85c.42-2.69 2.46-3.21 4.89-3.21 2.43 0 4.4.68 4.87 3.08a.97.97 0 0 1-.38.98l.01-.01Z",
            className: d,
          }),
        });
      };
    },
    797285(e, t, a) {
      a.d(t, { t: () => l });
      var n = a(627968);
      a(64700);
      var s = a(661531),
        i = a(996682),
        r = a(27989);
      let l = (e) => {
        let {
            size: t = "md",
            width: a,
            height: l,
            color: o = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
          } = e,
          m = (0, r.J)(t),
          g = m?.width ?? a,
          p = m?.height ?? l;
        return (0, n.jsxs)("svg", {
          ...(0, i.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: g,
          height: p,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, n.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M6 2h12a4 4 0 0 1 4 4v7.5a.5.5 0 0 1-.5.5H19a5 5 0 0 0-5 5v2.5a.5.5 0 0 1-.5.5H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-9.91 2.94a1 1 0 0 0-1.66 1.12 5.5 5.5 0 0 0 9.14 0 1 1 0 0 0-1.66-1.12 3.5 3.5 0 0 1-5.82 0Z",
              clipRule: "evenodd",
              className: d,
            }),
            (0, n.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M21.66 16c.03 0 .05.03.04.06a3 3 0 0 1-.58.82l-4.24 4.24a3 3 0 0 1-.82.58.04.04 0 0 1-.06-.04V19a3 3 0 0 1 3-3h2.66Z",
              className: d,
            }),
          ],
        });
      };
    },
    95635(e, t, a) {
      a.d(t, { J: () => l });
      var n = a(627968);
      a(64700);
      var s = a(661531),
        i = a(996682),
        r = a(27989);
      let l = (e) => {
        let {
            size: t = "md",
            width: a,
            height: l,
            color: o = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
          } = e,
          m = (0, r.J)(t),
          g = m?.width ?? a,
          p = m?.height ?? l;
        return (0, n.jsx)("svg", {
          ...(0, i.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: g,
          height: p,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M13 16V5.41l3.3 3.3a1 1 0 1 0 1.4-1.42l-5-5a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.42L11 5.4V16a1 1 0 1 0 2 0ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z",
            className: d,
          }),
        });
      };
    },
    64051(e, t, a) {
      a.d(t, { v: () => s });
      var n = a(627968);
      function s(e) {
        let { alt: t, ariaLabel: a, ariaHidden: s, role: i, size: r = 64 } = e;
        return (0, n.jsx)("img", {
          style: { width: r, height: r },
          src: "https://cdn.discordapp.com/assets/content/e6e3e8c908888463cade4de8b5847c949b0fe8e67ae29dbe17c2ca314c011a6d.svg",
          alt: t,
          "aria-label": a,
          "aria-hidden": s,
          role: i ?? "img",
        });
      }
      a(64700);
    },
    972919(e, t, a) {
      a.d(t, { w: () => s });
      var n = a(627968);
      function s(e) {
        let { alt: t, ariaLabel: a, ariaHidden: s, role: i, size: r = 64 } = e;
        return (0, n.jsx)("img", {
          style: { width: r, height: r },
          src: "https://cdn.discordapp.com/assets/content/9e156b8feeea36a8f7b0326e11211797de2e7c2049e9bcd8481e591ac1c119b2.svg",
          alt: t,
          "aria-label": a,
          "aria-hidden": s,
          role: i ?? "img",
        });
      }
      a(64700);
    },
    724677(e, t, a) {
      a.d(t, { H: () => s });
      var n = a(627968);
      function s(e) {
        let { alt: t, ariaLabel: a, ariaHidden: s, role: i, size: r = 64 } = e;
        return (0, n.jsx)("img", {
          style: { width: r, height: r },
          src: "https://cdn.discordapp.com/assets/content/a0a455fb897b41612b171199b4be5f70d02e411e37643a5337c12497d46033a1.svg",
          alt: t,
          "aria-label": a,
          "aria-hidden": s,
          role: i ?? "img",
        });
      }
      a(64700);
    },
    390544(e, t, a) {
      a.d(t, { M: () => s });
      var n,
        s =
          (((n = {}).STARTING = "starting"),
          (n.STARTUP_FAILED = "startup_failed"),
          (n.MISSING_STOCK = "missing_stock"),
          (n.SLEEPING = "sleeping"),
          (n.OFFLINE = "offline"),
          (n.ONLINE = "online"),
          (n.DELETED = "deleted"),
          (n.PROVIDER_ERRORED = "provider_errored"),
          n);
    },
  },
]);
//# sourceMappingURL=52367.ec46da62372ca4fc.js.map
