"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["75627"],
  {
    541830(t, r, n) {
      n.d(r, { du: () => d, qt: () => c, zJ: () => I });
      var e = n(989349),
        s = n.n(e),
        i = n(334465);
      n(723702), n(371794);
      var A = n(652215),
        l = n(985018);
      let a = {},
        u = {},
        H = Object.freeze({ ALL: -1, ...A.dHA });
      function c(t) {
        let r = (0, i.B)(t, {
          path: A.BVt.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug"),
        });
        return null != r ? r.params.skuId : null;
      }
      function d(t) {
        switch (t) {
          case A.dHA.ACTION:
            return l.intl.string(l.t["1o2/IM"]);
          case A.dHA.ACTION_RPG:
            return l.intl.string(l.t.e9Yo4H);
          case A.dHA.BRAWLER:
            return l.intl.string(l.t.WCkEjT);
          case A.dHA.HACK_AND_SLASH:
            return l.intl.string(l.t.xQ4VmK);
          case A.dHA.PLATFORMER:
            return l.intl.string(l.t.WA3189);
          case A.dHA.STEALTH:
            return l.intl.string(l.t["6UPFdw"]);
          case A.dHA.SURVIVAL:
            return l.intl.string(l.t.SVPCt9);
          case A.dHA.ADVENTURE:
            return l.intl.string(l.t["15p8on"]);
          case A.dHA.ACTION_ADVENTURE:
            return l.intl.string(l.t.AxkUBp);
          case A.dHA.METROIDVANIA:
            return l.intl.string(l.t.Iwr38m);
          case A.dHA.OPEN_WORLD:
            return l.intl.string(l.t["2HRHJO"]);
          case A.dHA.PSYCHOLOGICAL_HORROR:
            return l.intl.string(l.t["/IwK3s"]);
          case A.dHA.SANDBOX:
            return l.intl.string(l.t["2+Vu4Q"]);
          case A.dHA.SURVIVAL_HORROR:
            return l.intl.string(l.t.CCzRiK);
          case A.dHA.VISUAL_NOVEL:
            return l.intl.string(l.t.FE7rnk);
          case A.dHA.DRIVING_RACING:
            return l.intl.string(l.t.Erzgca);
          case A.dHA.VEHICULAR_COMBAT:
            return l.intl.string(l.t.YQHhog);
          case A.dHA.MASSIVELY_MULTIPLAYER:
            return l.intl.string(l.t["5CNg1o"]);
          case A.dHA.MMORPG:
            return l.intl.string(l.t["c4NuO/"]);
          case A.dHA.ROLE_PLAYING:
            return l.intl.string(l.t.yayVgs);
          case A.dHA.DUNGEON_CRAWLER:
            return l.intl.string(l.t.qicemc);
          case A.dHA.ROGUELIKE:
            return l.intl.string(l.t.zWzaCv);
          case A.dHA.SHOOTER:
            return l.intl.string(l.t["+pk6sd"]);
          case A.dHA.LIGHT_GUN:
            return l.intl.string(l.t.TDS96y);
          case A.dHA.SHOOT_EM_UP:
            return l.intl.string(l.t.wltDUE);
          case A.dHA.FPS:
            return l.intl.string(l.t.olTaq4);
          case A.dHA.DUAL_JOYSTICK_SHOOTER:
            return l.intl.string(l.t["SN+NS3"]);
          case A.dHA.SIMULATION:
            return l.intl.string(l.t.sxMPdm);
          case A.dHA.FLIGHT_SIMULATOR:
            return l.intl.string(l.t["Q7msr+"]);
          case A.dHA.TRAIN_SIMULATOR:
            return l.intl.string(l.t.ZtECf3);
          case A.dHA.LIFE_SIMULATOR:
            return l.intl.string(l.t.byt5Fo);
          case A.dHA.FISHING:
            return l.intl.string(l.t.BKwiwY);
          case A.dHA.SPORTS:
            return l.intl.string(l.t.O0B7XM);
          case A.dHA.BASEBALL:
            return l.intl.string(l.t["jPYb/z"]);
          case A.dHA.BASKETBALL:
            return l.intl.string(l.t["o+D1Bm"]);
          case A.dHA.BILLIARDS:
            return l.intl.string(l.t.PJ5o4E);
          case A.dHA.BOWLING:
            return l.intl.string(l.t["82afJw"]);
          case A.dHA.BOXING:
            return l.intl.string(l.t.DQvfei);
          case A.dHA.FOOTBALL:
            return l.intl.string(l.t.slOYkj);
          case A.dHA.GOLF:
            return l.intl.string(l.t.aeQPlG);
          case A.dHA.HOCKEY:
            return l.intl.string(l.t.g7oe5X);
          case A.dHA.SKATEBOARDING_SKATING:
            return l.intl.string(l.t.yBDEP0);
          case A.dHA.SNOWBOARDING_SKIING:
            return l.intl.string(l.t.GVaAci);
          case A.dHA.SOCCER:
            return l.intl.string(l.t.KPznxl);
          case A.dHA.TRACK_FIELD:
            return l.intl.string(l.t["hJ62Q/"]);
          case A.dHA.SURFING_WAKEBOARDING:
            return l.intl.string(l.t.PSh0CV);
          case A.dHA.WRESTLING:
            return l.intl.string(l.t["3y9hAT"]);
          case A.dHA.STRATEGY:
            return l.intl.string(l.t.KovTD8);
          case A.dHA.FOUR_X:
            return l.intl.string(l.t["19h4dX"]);
          case A.dHA.ARTILLERY:
            return l.intl.string(l.t.sBqLsP);
          case A.dHA.RTS:
            return l.intl.string(l.t.yS4ddj);
          case A.dHA.TOWER_DEFENSE:
            return l.intl.string(l.t.SULyIO);
          case A.dHA.TURN_BASED_STRATEGY:
            return l.intl.string(l.t.VDsbru);
          case A.dHA.WARGAME:
            return l.intl.string(l.t.YDCIrO);
          case A.dHA.MOBA:
            return l.intl.string(l.t.i1m1t8);
          case A.dHA.FIGHTING:
            return l.intl.string(l.t.KepcSI);
          case A.dHA.PUZZLE:
            return l.intl.string(l.t.rm7Ggs);
          case A.dHA.CARD_GAME:
            return l.intl.string(l.t.kX85vy);
          case A.dHA.EDUCATION:
            return l.intl.string(l.t.klIi67);
          case A.dHA.FITNESS:
            return l.intl.string(l.t.GOaaFb);
          case A.dHA.GAMBLING:
            return l.intl.string(l.t["X8/Ee9"]);
          case A.dHA.MUSIC_RHYTHM:
            return l.intl.string(l.t.qPgrgw);
          case A.dHA.PARTY_MINI_GAME:
            return l.intl.string(l.t.diBclF);
          case A.dHA.PINBALL:
            return l.intl.string(l.t["1+ottx"]);
          case A.dHA.TRIVIA_BOARD_GAME:
            return l.intl.string(l.t.aLlxjC);
          case A.dHA.TACTICAL:
            return l.intl.string(l.t.LRPgbt);
          case A.dHA.INDIE:
            return l.intl.string(l.t.hz9Xvj);
          case A.dHA.ARCADE:
            return l.intl.string(l.t.Sbxowr);
          case A.dHA.POINT_AND_CLICK:
            return l.intl.string(l.t.vcerEn);
          default:
            return l.intl.string(l.t["9b4eUr"]);
        }
      }
      Object.keys(H).forEach((t) => {
        let r = t.toLowerCase().replace(/_/g, "-"),
          n = H[t];
        (a[r] = n), (u[n] = r);
      });
      let g = [
        ["YYYY-MM-DD", "MMMM DD, Y"],
        ["YYYY-MM", "MMMM Y"],
        ["MM-DD", "MMMM DD"],
        ["MM", "MMMM"],
        ["YYYY", "Y"],
      ];
      function I(t) {
        let { preorderReleaseAt: r, preorderApproximateReleaseDate: n } = t;
        if (null != r) return r.format("MMMM DD");
        if (null == n) return null;
        for (let t = 0; t < g.length; t++) {
          let [r, e] = g[t],
            i = s()(n, r, !0);
          if (i.isValid()) return i.format(e);
        }
        return n;
      }
    },
  },
]);
//# sourceMappingURL=75627.02323d3722e3077e.js.map
