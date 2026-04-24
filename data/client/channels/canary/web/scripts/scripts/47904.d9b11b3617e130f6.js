"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["47904"],
  {
    268218(e, t, n) {
      n.d(t, { Fe: () => i.Fe, c2: () => i.c2, sq: () => i.sq });
      var i = n(156828),
        l = n(209489);
      (0, i.Cu)(l.A.awaitOnline);
    },
    913563(e, t, n) {
      n.d(t, { A: () => r });
      var i = n(559949),
        l = n(864386);
      let a = {
        [i.x.DEFAULT]: l.default.ZEL6mz,
        [i.x.CHERRY_BOMB]: l.default.rN7cuX,
        [i.x.CHICLE]: l.default.CbHHnL,
        [i.x.MUSEO_MODERNO]: l.default.iEcEKO,
        [i.x.NEO_CASTEL]: l.default.DL7jLZ,
        [i.x.PIXELIFY]: l.default.jq4aRp,
        [i.x.SINISTRE]: l.default.jV9DN4,
        [i.x.ZILLA_SLAB]: l.default.KMR8rT,
      };
      function r(e) {
        return a[e] ?? l.default.ZEL6mz;
      }
    },
    346846(e, t, n) {
      n.d(t, { A: () => l });
      var i = n(378570);
      function l(e) {
        (0, i.iN)(e.channelId);
      }
    },
    9994(e, t, n) {
      n.d(t, { MU: () => d, oO: () => c, ow: () => s, wr: () => u }), n(516773);
      var i = n(159273),
        l = n(7584),
        a = n(403362),
        r = n(348943);
      let o = { label: "" };
      function u(e) {
        var t, n;
        return {
          id: e.id,
          name: e.name,
          description: e.description ?? "",
          icon: e.icon_hash,
          customBanner: e.custom_banner_hash,
          onlineCount: e.online_count,
          memberCount: e.member_count,
          brandColorPrimary:
            null == (t = e.brand_color_primary) || "" === t ? null : t,
          visibility: e.visibility,
          traits: (function (e, t) {
            let n = [, , , , ,].fill(o);
            for (let a of t)
              a.position < 0 ||
                a.position >= 5 ||
                (n[a.position] = {
                  label: a.label,
                  emoji:
                    (function (e) {
                      let { guildId: t, emojiId: n, emojiName: a } = e,
                        r = i.o2.get(t);
                      if (null == n && null == a) return null;
                      if (null != n)
                        if (null != r) return r.getById(n);
                        else return null;
                      return null != a ? l.Ay.getByName(a) : null;
                    })({
                      guildId: e,
                      emojiId: a.emoji_id,
                      emojiName: a.emoji_name,
                    }) ?? void 0,
                });
            return n;
          })(e.id, e.traits ?? []),
          gameApplicationIds: e.game_application_ids ?? [],
          gameActivity:
            null == (n = e.game_activity)
              ? {}
              : Object.entries(n).reduce((e, t) => {
                  let [n, i] = t;
                  return (
                    (e[n.toString()] = {
                      level: i.activity_level,
                      score: i.activity_score,
                    }),
                    e
                  );
                }, {}),
          features: e.features ?? [],
          tag: e.tag,
          badge: e.badge,
          badgeColorPrimary: e.badge_color_primary,
          badgeColorSecondary: e.badge_color_secondary,
          badgeHash: e.badge_hash,
          premiumSubscriberCount: e.premium_subscription_count,
          premiumTier: e.premium_tier,
        };
      }
      function s(e) {
        let t = {};
        return (
          null != e.name && (t.name = e.name),
          null != e.description && (t.description = e.description),
          void 0 !== e.icon && (t.icon = e.icon),
          void 0 !== e.customBanner && (t.custom_banner = e.customBanner),
          null != e.visibility && (t.visibility = e.visibility),
          void 0 !== e.brandColorPrimary &&
            (t.brand_color_primary = e.brandColorPrimary),
          null != e.traits &&
            (t.traits = e.traits
              .map((e, t) =>
                e?.label == null || e.label.length <= 0
                  ? null
                  : {
                      label: e.label,
                      position: t,
                      emoji_id: e.emoji?.id,
                      emoji_name: e.emoji?.name,
                      emoji_animated: e.emoji?.animated,
                    },
              )
              .filter(a.Vq)),
          null != e.gameApplicationIds &&
            (t.game_application_ids = e.gameApplicationIds),
          void 0 !== e.tag && (t.tag = e.tag),
          void 0 !== e.badge && (t.badge = e.badge),
          void 0 !== e.badgeColorPrimary &&
            (t.badge_color_primary = e.badgeColorPrimary),
          void 0 !== e.badgeColorSecondary &&
            (t.badge_color_secondary = e.badgeColorSecondary),
          t
        );
      }
      function d(e) {
        return e.reduce(
          (e, t) => (
            (e[t.game_application_id] = {
              level: t.activity_level,
              score: t.activity_score,
            }),
            e
          ),
          {},
        );
      }
      function c(e) {
        let { guild: t, profile: n } = e,
          i = null != n ? u(n) : null;
        return null != i
          ? i
          : null == t
            ? null
            : {
                id: t.id,
                name: t.name,
                description: t.description ?? "",
                icon: t.icon,
                customBanner: t.banner,
                onlineCount:
                  t.approximate_presence_count ??
                  e.approximate_presence_count ??
                  0,
                memberCount:
                  t.approximate_member_count ?? e.approximate_member_count ?? 0,
                visibility: r.n.NOT_SPECIFIED,
                traits: [],
                gameApplicationIds: [],
                gameActivity: {},
                features: t.features ?? [],
                brandColorPrimary: null,
                tag: null,
                badge: null,
                badgeHash: null,
                badgeColorPrimary: null,
                badgeColorSecondary: null,
                premiumSubscriberCount: t.premium_subscription_count,
                premiumTier: t.premium_tier,
              };
      }
    },
    496885(e, t, n) {
      n.d(t, { A: () => s });
      var i = n(627968),
        l = n(64700),
        a = n(503698),
        r = n.n(a),
        o = n(98115),
        u = n(767246);
      function s(e) {
        let {
            children: t,
            size: n = 16,
            className: a,
            flowerStarClassName: s,
            ...d
          } = e,
          c = l.Children.only(t),
          p = !e.allowFullSizedIcon;
        return (0, i.jsxs)("div", {
          className: r()(u.jH, a),
          style: { width: n, height: n },
          children: [
            (0, i.jsx)(o.A, { ...d, className: r()(s, u.mP) }),
            (0, i.jsx)("div", {
              className: r()(u.sn, { [u.Qu]: p }),
              children: c,
            }),
          ],
        });
      }
    },
    21599(e, t, n) {
      n.d(t, {
        WU: () => o,
        _U: () => d,
        fB: () => r,
        m0: () => s,
        y$: () => u,
      });
      var i = n(488428),
        l = n(372250);
      let a = "event";
      function r(e, t) {
        return null == t
          ? e
          : o({
              baseCode: e,
              guildScheduledEventId: (function (e) {
                let t = "?" === e.charAt(0) ? e.substring(1) : e;
                try {
                  let e = i.parse(t);
                  return (0, l.p)(e[a]);
                } catch (e) {
                  return;
                }
              })(t),
            });
      }
      function o(e) {
        let { baseCode: t, guildScheduledEventId: n } = e;
        return null == n ? t : `${t}?${a}=${n}`;
      }
      function u(e) {
        let [t, n] = e.split("?");
        if (null == n) return { baseCode: t };
        let r = i.parse(n);
        return { baseCode: t, guildScheduledEventId: (0, l.p)(r[a]) };
      }
      function s(e) {
        let [t] = e.split("?");
        return t;
      }
      function d(e, t) {
        if (null == t) return;
        let n = s(e);
        return `${t}:${n}`;
      }
    },
    138298(e, t, n) {
      n.d(t, { A: () => d });
      var i = n(228366),
        l = n(720149),
        a = n(56562),
        r = n(225142),
        o = n(547),
        u = n(940382),
        s = n(746080);
      let d = {
        openPrivateChannelAsSidebar(e) {
          let {
            channelId: t,
            messageId: n,
            baseChannelId: a,
            hasSingleMessageRequest: r,
          } = e;
          i.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: u.PE.VIEW_MESSAGE_REQUEST,
            baseChannelId: a,
            channelId: t,
            details: { type: u.LU.MESSAGE_REQUEST, hasSingleMessageRequest: r },
          }),
            null != n
              ? l.A.jumpToMessage({ channelId: t, messageId: n, flash: !0 })
              : o.A.fetchMessages({ channelId: t });
        },
        openChannelAsSidebar(e) {
          let {
            guildId: t,
            channelId: n,
            baseChannelId: r,
            flash: s = !0,
            details: d,
          } = e;
          i.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: u.PE.VIEW_CHANNEL,
            guildId: t,
            baseChannelId: r,
            channelId: n,
            details: d,
          });
          let c = d?.initialMessageId;
          null != c
            ? l.A.jumpToMessage({
                channelId: n,
                messageId: c,
                flash: s,
                jumpType: a.US.INSTANT,
              })
            : o.A.fetchMessages({ guildId: t, channelId: n });
        },
        openResourceChannelAsSidebar(e) {
          let { guildId: t, channelId: n } = e;
          null != t &&
            ((0, r.bN)(t, n, !1),
            i.h.dispatch({
              type: "SIDEBAR_VIEW_CHANNEL",
              sidebarType: u.PE.VIEW_CHANNEL,
              guildId: t,
              baseChannelId: s.VV.GUILD_HOME,
              channelId: n,
            }));
        },
        openModReportAsSidebar(e) {
          let {
            guildId: t,
            baseChannelId: n,
            channelId: r,
            flash: s = !0,
            details: d,
          } = e;
          i.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: u.PE.VIEW_MOD_REPORT,
            baseChannelId: n,
            channelId: r,
            details: d,
          }),
            d?.initialMessageId != null
              ? l.A.jumpToMessage({
                  channelId: r,
                  messageId: d.initialMessageId,
                  flash: s,
                  jumpType: a.US.INSTANT,
                })
              : o.A.fetchMessages({ guildId: t, channelId: r });
        },
        openThreadAsSidebar(e) {
          let {
            guildId: t,
            baseChannelId: n,
            channelId: r,
            flash: s = !0,
            details: d,
          } = e;
          i.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: u.PE.VIEW_THREAD,
            baseChannelId: n,
            channelId: r,
            details: d,
          }),
            d?.initialMessageId != null
              ? l.A.jumpToMessage({
                  channelId: r,
                  messageId: d.initialMessageId,
                  flash: s,
                  jumpType: a.US.INSTANT,
                })
              : o.A.fetchMessages({ guildId: t, channelId: r });
        },
        closeChannelSidebar(e) {
          i.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e });
        },
        openGuildSidebar(e) {
          let { guildId: t, baseChannelId: n, sidebarType: l, details: a } = e;
          return i.h.dispatch({
            type: "SIDEBAR_VIEW_GUILD",
            sidebarType: l,
            baseChannelId: n,
            guildId: t,
            details: a,
          });
        },
        closeGuildSidebar(e) {
          i.h.dispatch({ type: "SIDEBAR_CLOSE_GUILD", guildId: e });
        },
        setSelectedSearchContext(e) {
          i.h.dispatch({
            type: "SIDEBAR_SET_SELECTED_SEARCH_CONTEXT",
            searchContextId: e,
          });
        },
      };
    },
    229231(e, t, n) {
      n.d(t, { Ok: () => o, Zc: () => r, _u: () => u, gk: () => s });
      var i = n(540185),
        l = n(587895),
        a = n(985018);
      let r = [
          i.x.APPLICATION,
          i.x.FAVORITE_GAMES,
          i.x.PLAYED_GAMES,
          i.x.CURRENT_GAMES,
          i.x.WANT_TO_PLAY_GAMES,
        ],
        o = {
          [i.x.FAVORITE_GAMES]: () => a.intl.string(a.t.sUQar8),
          [i.x.CURRENT_GAMES]: () => a.intl.string(a.t.SqNnus),
          [i.x.WANT_TO_PLAY_GAMES]: () => a.intl.string(a.t.bWSQwW),
          [i.x.PLAYED_GAMES]: () => a.intl.string(a.t.scOKET),
          [i.x.APPLICATION]: (e) =>
            l.A.getApplication(e.applicationId)?.name ?? "",
        },
        u = [i.x.FAVORITE_GAMES],
        s = [i.x.CURRENT_GAMES, i.x.FAVORITE_GAMES];
    },
    70142(e, t, n) {
      let i, l;
      n.d(t, { A: () => A });
      var a = n(17928),
        r = n(636537),
        o = n(228366),
        u = n(723702),
        s = n(652215);
      let d = null,
        c = null,
        p = null;
      (0, u.isDesktop)() &&
        (window.popupBridge = {
          getReturnUrlPrefix: () => {
            if (null == i) throw Error("popupBridgeState is unset");
            return (
              (0, r.TP)() +
              s.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(
                s.kM_.BRAINTREE,
                i,
              )
            );
          },
          open: (e) => {
            (l = e), window.open(e), _.emitChange();
          },
        });
      class E extends a.Ay.Store {
        static displayName = "BraintreeStore";
        getClient() {
          return d;
        }
        getPayPalClient() {
          return c;
        }
        getVenmoClient() {
          return p;
        }
        getLastURL() {
          return l;
        }
      }
      let _ = new E(o.h, {
          BRAINTREE_CREATE_CLIENT_SUCCESS: function (e) {
            let { client: t } = e;
            d = t;
          },
          BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS: function (e) {
            let { paypalClient: t } = e;
            c = t;
          },
          BILLING_POPUP_BRIDGE_CALLBACK: function (e) {
            let { paymentSourceType: t, state: n, path: l, query: a } = e;
            if (t !== s.hes.PAYPAL || n !== i) return;
            let r = window.popupBridge.onComplete;
            "function" == typeof r && r(null, { path: l, queryItems: a });
          },
          BILLING_POPUP_BRIDGE_STATE_UPDATE: function (e) {
            let { paymentSourceType: t, state: n } = e;
            t === s.hes.PAYPAL && (i = n);
          },
          BRAINTREE_TEARDOWN_PAYPAL_CLIENT: function () {
            c = null;
          },
          BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS: function (e) {
            let { venmoClient: t } = e;
            p = t;
          },
          BRAINTREE_TEARDOWN_VENMO_CLIENT: function () {
            p = null;
          },
        }),
        A = _;
    },
    184015(e, t, n) {
      n.d(t, { Z: () => o, j: () => r });
      var i = n(268218),
        l = n(70142),
        a = n(652215);
      function r() {
        return (0, i.sq)({
          createPromise: () => n.e("99193").then(n.t.bind(n, 224273, 23)),
          webpackId: 224273,
        }).then((e) => {
          let { default: t } = e;
          return t;
        });
      }
      function o() {
        let e = l.A.getClient();
        return null == e
          ? r().then((e) =>
              e.client
                .create({ authorization: a.Gg3.BRAINTREE.KEY })
                .then((e) => u(e))
                .catch(() => null),
            )
          : u(e);
      }
      function u(e) {
        return r().then((t) =>
          t.dataCollector
            .create({ client: e })
            .then((e) => e.deviceData)
            .catch(() => null),
        );
      }
    },
    34188(e, t, n) {
      n.d(t, { U: () => o });
      var i = n(627968);
      n(64700);
      var l = n(661531),
        a = n(996682),
        r = n(27989);
      let o = (e) => {
        let {
            size: t = "md",
            width: n,
            height: o,
            color: u = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: s = "",
            ...d
          } = e,
          c = (0, r.J)(t),
          p = c?.width ?? n,
          E = c?.height ?? o;
        return (0, i.jsxs)("svg", {
          ...(0, a.A)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: p,
          height: E,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof u ? u : u.css,
              d: "M2.63 4.19A3 3 0 0 1 5.53 2H7a1 1 0 0 1 1 1v3.98a3.07 3.07 0 0 1-.3 1.35A2.97 2.97 0 0 1 4.98 10c-2 0-3.44-1.9-2.9-3.83l.55-1.98ZM10 2a1 1 0 0 0-1 1v4a3 3 0 0 0 3 3 3 3 0 0 0 3-2.97V3a1 1 0 0 0-1-1h-4ZM17 2a1 1 0 0 0-1 1v3.98a3.65 3.65 0 0 0 0 .05A2.95 2.95 0 0 0 19.02 10c2 0 3.44-1.9 2.9-3.83l-.55-1.98A3 3 0 0 0 18.47 2H17Z",
              className: s,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof u ? u : u.css,
              d: "M21 11.42V19a3 3 0 0 1-3 3h-2.75a.25.25 0 0 1-.25-.25V16a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v5.75c0 .14-.11.25-.25.25H6a3 3 0 0 1-3-3v-7.58c0-.18.2-.3.37-.24a4.46 4.46 0 0 0 4.94-1.1c.1-.12.3-.12.4 0a4.49 4.49 0 0 0 6.58 0c.1-.12.3-.12.4 0a4.45 4.45 0 0 0 4.94 1.1c.17-.07.37.06.37.24Z",
              className: s,
            }),
          ],
        });
      };
    },
    933681(e, t, n) {
      function i(e) {
        return e;
      }
      function l(e, t) {
        return Object.setPrototypeOf(e, t.prototype);
      }
      function a(e) {
        let { andFail: t = !0 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (t) throw Error();
      }
      n.d(t, { dr: () => a, e0: () => i, pp: () => l });
    },
  },
]);
//# sourceMappingURL=47904.d9b11b3617e130f6.js.map
