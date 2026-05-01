"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["74524"],
  {
    207378(e, t, n) {
      n.d(t, { A: () => r });
      function r(e) {
        return null;
      }
    },
    854378(e, t, n) {
      n.d(t, {
        $v: () => b,
        Ay: () => F,
        CK: () => P,
        F4: () => T,
        KE: () => R,
        ME: () => N,
        R1: () => x,
        _V: () => k,
        eB: () => I,
        eu: () => L,
        hE: () => w,
        pd: () => K,
        tK: () => M,
        xt: () => D,
      });
      var r = n(627968);
      n(64700);
      var i = n(503698),
        a = n.n(i),
        l = n(97808),
        s = n(534514),
        o = n(834730),
        u = n(778712),
        d = n(292666),
        c = n(821609),
        h = n(43990),
        y = n(571694),
        p = n(902811),
        f = n(235986),
        m = n(915089),
        E = n(548118),
        _ = n(53505),
        g = n(975571),
        C = n(652215),
        v = n(985018),
        S = n(337321);
      let A = l.eu;
      null == A && (A = () => null);
      let w = (e) => {
          let {
            className: t,
            id: n,
            children: i,
            variant: l = "heading-xl/semibold",
          } = e;
          return (0, r.jsx)(s.D, {
            variant: l,
            color: "text-strong",
            className: a()(S.DD, t),
            id: n,
            children: i,
          });
        },
        M = (e) => {
          let { className: t, children: n } = e;
          return (0, r.jsx)(o.E, {
            variant: "text-md/normal",
            color: "text-default",
            className: t,
            children: n,
          });
        },
        k = (e) => {
          let { className: t, src: n } = e;
          return (0, r.jsx)("img", {
            alt: "",
            src: n,
            className: a()(S.Sl, t),
          });
        },
        L = (e) => {
          let { className: t, src: n, size: i } = e;
          return (0, r.jsx)(A, {
            src: n,
            size: i,
            className: a()(S.yt, t),
            "aria-hidden": !0,
          });
        },
        b = (e) => {
          let { guild: t, size: n, animate: i = !1, className: a } = e;
          return (0, r.jsx)(E.Ay, {
            active: !0,
            guild: t,
            size: n,
            animate: i,
            className: a,
          });
        };
      b.Sizes = E.Ay.Sizes;
      let T = (e) => {
        let { className: t, channel: n, size: i } = e;
        return (0, r.jsx)(A, {
          src: (0, y.Y)(n),
          size: i,
          className: a()(S.TP, t),
          "aria-hidden": !0,
        });
      };
      T.Sizes = u._3;
      let K = (e) => {
          let {
              label: t,
              error: n,
              placeholder: i,
              value: a,
              className: l,
              setRef: s,
              type: o = "text",
              onChange: u,
              autoComplete: c,
              autoFocus: h,
              maxLength: y,
              spellCheck: p,
              name: f,
              description: E,
              required: _,
              onFocus: g,
              onBlur: C,
            } = e,
            v = (0, m.GV)(),
            S = (0, r.jsx)(d.k, {
              name: f,
              type: o,
              value: a,
              inputRef: s,
              placeholder: i,
              "aria-label": t,
              onChange: u,
              autoComplete: c,
              autoFocus: h,
              maxLength: y,
              spellCheck: p,
              id: v,
              onFocus: g,
              onBlur: C,
              label: t,
              error: n,
              required: _,
              description: E,
            });
          return null != l
            ? (0, r.jsx)("div", { className: l, children: S })
            : S;
        },
        I = (e) => {
          let { className: t, children: n } = e;
          return (0, r.jsx)("div", { className: a()(S.om, t), children: n });
        },
        N = (e) => {
          let { className: t, children: n } = e;
          return (0, r.jsx)(o.E, {
            variant: "text-xs/normal",
            className: a()(S.Sv, t),
            children: n,
          });
        },
        P = (e) => {
          let { className: t } = e;
          return (0, r.jsx)(f.A, {
            direction: f.A.Direction.VERTICAL,
            align: f.A.Align.CENTER,
            className: t,
            children: (0, r.jsx)(p.A, { className: S.$$ }),
          });
        },
        O = (e) =>
          (0, r.jsx)(o.E, {
            tag: "span",
            className: e?.className,
            variant: "text-sm/normal",
            color: "text-default",
            children: e?.children,
          }),
        x = (e) => {
          let t,
            {
              online: n,
              total: i,
              className: l,
              flat: s,
              textClassName: o,
              renderText: u = O,
            } = e;
          return null == i
            ? null
            : (null != n &&
                n > 0 &&
                (t = (0, r.jsxs)("div", {
                  className: a()(S.Io, S.L1, s && S.Z6),
                  children: [
                    (0, r.jsx)("i", { className: S._o }),
                    u({
                      className: o,
                      children: v.intl.format(v.t["LC+S+m"], {
                        membersOnline: n,
                      }),
                    }),
                  ],
                })),
              (0, r.jsxs)(f.A, {
                justify: f.A.Justify.CENTER,
                className: l,
                children: [
                  t,
                  (0, r.jsxs)("div", {
                    className: a()(S.Io, s && S.Z6),
                    children: [
                      (0, r.jsx)("i", { className: S.jk }),
                      u({
                        className: o,
                        children: v.intl.format(v.t.zRl6XR, { count: i }),
                      }),
                    ],
                  }),
                ],
              }));
        },
        D = (e) => {
          let { user: t } = e;
          return null == t
            ? null
            : (0, r.jsxs)("div", {
                className: S.l1,
                children: [
                  (0, r.jsx)(o.E, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "text-default",
                    children: v.intl.string(v.t["/8WWvE"]),
                  }),
                  (0, r.jsx)(L, {
                    className: S.yj,
                    src: t.getAvatarURL(void 0, 24),
                    size: u._3.SIZE_24,
                    "aria-label": t.username,
                  }),
                  (0, r.jsx)(o.E, {
                    className: S.pp,
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "text-strong",
                    children: t.username,
                  }),
                ],
              });
        },
        R = (e) => {
          let { className: t } = e;
          return (0, r.jsxs)(I, {
            className: t,
            children: [
              (0, r.jsx)(c.$, {
                text: v.intl.format(v.t.JoS1i3, { platform: (0, _.Vf)() }),
                variant: "secondary",
                fullWidth: !0,
                onClick: () => window.open((0, _.SU)()),
              }),
              (0, r.jsx)(N, {
                className: S.UM,
                children: v.intl.format(v.t.wO1VBk, {
                  supportedBrowserURL: g.A.getArticleURL(
                    C.MVz.SUPPORTED_BROWSERS,
                  ),
                }),
              }),
            ],
          });
        },
        F = (e) => {
          let {
            className: t,
            contentClassName: n,
            tag: i = "section",
            onSubmit: l,
            children: s,
            expanded: o = !1,
            theme: u = C.NJ8.DARK,
            style: d,
          } = e;
          return (0, r.jsx)(h.N, {
            theme: u,
            disableAdaptiveTheme: !0,
            children: (e) =>
              (0, r.jsxs)(i, {
                "data-theme": u,
                onSubmit: l,
                style: d,
                className: a()(o ? S.PR : S.sL, e, t),
                children: [
                  (0, r.jsx)("div", { className: S.ie }),
                  (0, r.jsx)("div", { className: a()(S.f4, n), children: s }),
                ],
              }),
          });
        };
    },
    436317() {},
    713517(e, t, n) {
      n.d(t, { A: () => l, M: () => s });
      var r = n(64700),
        i = n(17928),
        a = n(775602);
      function l(e) {
        let [t, n] = r.useState(!1),
          [l, s] = r.useState(!1),
          o = (0, i.bG)([a.A], () => a.A.keyboardModeEnabled);
        r.useEffect(() => {
          let t = e.current;
          if (null == t) return;
          n(!1), s(!1);
          let r = () => n(!0),
            i = () => n(!1),
            a = () => s(!0),
            l = (e) => {
              t.contains(e.relatedTarget) || s(!1);
            };
          return (
            t.addEventListener("mouseenter", r),
            t.addEventListener("mouseleave", i),
            t.addEventListener("focusin", a),
            t.addEventListener("focusout", l),
            () => {
              t.removeEventListener("mouseenter", r),
                t.removeEventListener("mouseleave", i),
                t.removeEventListener("focusin", a),
                t.removeEventListener("focusout", l);
            }
          );
        }, [e]);
        let u = o && l;
        return { isHovering: t, isFocusing: u, isHoveringOrFocusing: t || u };
      }
      function s(e) {
        let [t, n] = r.useState(!1);
        return (
          r.useEffect(() => {
            let t = e.current;
            if (null == t) return;
            let r = () => n(!0),
              i = () => n(!1);
            return (
              t.addEventListener("mouseenter", r),
              t.addEventListener("mouseleave", i),
              () => {
                t.removeEventListener("mouseenter", r),
                  t.removeEventListener("mouseleave", i);
              }
            );
          }, [e]),
          t
        );
      }
    },
    921037(e, t, n) {
      n.d(t, { A: () => h, B: () => d });
      var r = n(362474),
        i = n(228366),
        a = n(376728),
        l = n(439372),
        s = n(495544),
        o = n(723702),
        u = n(652215);
      let d = "guestInviteToAccept";
      class c extends l.A {
        actions = { POST_CONNECTION_OPEN: () => this.handleConnectionOpen() };
        handleConnectionOpen = async () => {
          if ((0, o.isWeb)()) {
            let e = r.u.get(d);
            if (
              null != e &&
              "string" == typeof e &&
              s.default.isAuthenticated()
            ) {
              let { invite: t } = await a.Ay.resolveInvite(e, "Desktop Modal");
              null != t &&
                (i.h.dispatch({
                  type: "INVITE_MODAL_OPEN",
                  invite: t,
                  code: e,
                  context: u.BRT.APP,
                }),
                r.u.remove(d));
            }
          }
        };
      }
      let h = new c();
    },
    470348(e, t, n) {
      n.d(t, { A: () => a, r: () => i });
      let r = (0, n(945810).mj)({
        name: "2026-02-pubsub-bulk-ban-users",
        kind: "user",
        defaultConfig: { usePubSub: !1 },
        variations: { 1: { usePubSub: !0 } },
      });
      function i(e) {
        let { location: t } = e;
        return r.useConfig({ location: t });
      }
      let a = r;
    },
    172799(e, t, n) {
      n.d(t, { QR: () => u, Xd: () => l, uR: () => s, yV: () => o });
      var r,
        i,
        a,
        l =
          (((r = {})[(r.GUILD = 0)] = "GUILD"),
          (r[(r.GROUP_DM = 1)] = "GROUP_DM"),
          (r[(r.FRIEND = 2)] = "FRIEND"),
          r);
      let s = new Set([0, 1]);
      var o =
          (((i = {})[(i.STREAM = 1)] = "STREAM"),
          (i[(i.EMBEDDED_APPLICATION = 2)] = "EMBEDDED_APPLICATION"),
          (i[(i.ROLE_SUBSCRIPTIONS_PURCHASE = 3)] =
            "ROLE_SUBSCRIPTIONS_PURCHASE"),
          i),
        u = (((a = {}).MAIN = "main"), (a.SETTINGS = "settings"), a);
    },
    426620(e, t, n) {
      n.d(t, { A: () => o });
      var r = n(17928),
        i = n(228366);
      let a = null;
      class l extends r.Ay.PersistedStore {
        static displayName = "NewUserStore";
        static persistKey = "nuf";
        initialize(e) {
          a = e?.type ?? null;
        }
        getType() {
          return a;
        }
        getState() {
          return { type: a };
        }
      }
      let s = new l(i.h, {
          NUF_NEW_USER: function (e) {
            let { newUserType: t } = e;
            (a = t), s.persist();
          },
          NUF_COMPLETE: function () {
            (a = null), s.persist();
          },
        }),
        o = s;
    },
    658128(e, t, n) {
      n.d(t, { W: () => h });
      var r = n(713125),
        i = n(473529),
        a = n(871123),
        l = n(734057),
        s = n(808728),
        o = n(309010),
        u = n(567761),
        d = n(652215),
        c = n(746080);
      function h(e) {
        let t = o.A.getChannelId(e),
          n =
            s.Ay.getDefaultChannel(e)?.id ??
            (function (e) {
              if (e !== d.ME) return;
              let t = u.default.getPrivateChannelIds();
              return t.length > 0 ? t[0] : void 0;
            })(e);
        return (t !== c.VV.GUILD_ONBOARDING || r.Ay.shouldShowOnboarding(e)) &&
          (t !== c.VV.GUILD_HOME || (0, i.K)(e))
          ? t === c.VV.GAME_SHOP && (0, a.Ye)(e)
            ? t
            : null == l.A.getChannel(t)
              ? n
              : t
          : n;
      }
    },
    342296(e, t, n) {
      n.d(t, { A: () => _, S: () => p });
      var r = n(627968),
        i = n(64700),
        a = n(17928),
        l = n(778712),
        s = n(922016),
        o = n(335180),
        u = n(287809),
        d = n(454719),
        c = n(589022),
        h = n(518477),
        y = n(818348);
      let p = (0, l.FT)(l._3.SIZE_80),
        f = {
          onMouseDown: y.tE,
          onClick: y.tE,
          onKeyDown: y.tE,
          "aria-controls": void 0,
          "aria-expanded": !1,
        },
        m = { isShown: !1, position: void 0 };
      function E(e) {
        let {
            children: t,
            user: n,
            currentUser: a,
            guildId: l,
            channelId: u,
            messageId: y,
            roleId: f,
            disableUserProfileLink: m,
            newAnalyticsLocations: E,
            appContext: _,
            avatarUrl: g,
            preload: C,
            renderPopout: v,
            onRequestOpen: S,
            onRequestClose: A,
            onClosePopout: w,
            shouldShow: M,
            shouldPreload: k = !0,
            ...L
          } = e,
          b = i.useRef(void 0),
          T = i.useCallback(
            () =>
              null != C
                ? C()
                : (0, d.A)(n.id, g ?? n.getAvatarURL(l, p), {
                    type: "popout",
                    withMutualGuilds: n.id !== a.id,
                    withMutualFriends: !n.bot && n.id !== a.id,
                    guildId: l,
                    channelId: u,
                  }),
            [C, a, n, g, l, u],
          ),
          K = i.useCallback(
            (e) =>
              ((b.current = Date.now()), null != v)
                ? v(e, b.current)
                : (0, r.jsx)(c.A, {
                    ...e,
                    user: n,
                    currentUser: a,
                    guildId: l,
                    channelId: u,
                    roleId: f,
                    messageId: y,
                    disableUserProfileLink: m,
                    newAnalyticsLocations: E,
                    appContext: _,
                    openedAt: b.current,
                    closePopout: () => {
                      e.closePopout(), w?.();
                    },
                  }),
            [n, a, v, l, u, f, y, m, E, _, w],
          );
        return (0, r.jsx)(s.Y, {
          popoutKey: h.KM,
          shouldShow: M,
          preload: k ? T : void 0,
          loadingComponent: (0, o.Zm)(),
          renderPopout: K,
          onRequestOpen: S,
          onRequestClose: A,
          ...L,
          children: t,
        });
      }
      let _ = i.memo(function (e) {
        let { children: t, userId: n, user: i, ...l } = e,
          s = (0, a.bG)([u.default], () => u.default.getCurrentUser()),
          o = (0, a.bG)([u.default], () => i ?? u.default.getUser(n));
        return null == o || null == s
          ? t(f, m)
          : (0, r.jsx)(E, { ...l, user: o, currentUser: s, children: t });
      });
    },
    284016(e, t, n) {
      n.d(t, { A: () => c });
      var r = n(735438),
        i = n.n(r),
        a = n(17928),
        l = n(506774),
        s = n(228366),
        o = n(652215);
      let u = {};
      class d extends a.Ay.PersistedStore {
        static displayName = "SelectivelySyncedUserSettingsStore";
        static persistKey = "SelectivelySyncedUserSettingsStore";
        static migrations = [
          () => {
            let e = l.w.get("UserSettingsSync") ?? {},
              t = l.w.get("UserSettingsStore") ?? {};
            l.w.remove("UserSettingsSync");
            let n = {};
            return (
              !1 === e[o.nc_.TEXT] &&
                (n.text = {
                  shouldSync: !1,
                  settings: i().pick(t, [
                    "inlineAttachmentMedia",
                    "inlineEmbedMedia",
                    "renderEmbeds",
                    "renderReactions",
                    "animateEmoji",
                    "animateStickers",
                    "gifAutoPlay",
                    "defaultReactionEmoji",
                  ]),
                }),
              !1 === e[o.nc_.APPEARANCE] &&
                (n.appearance = {
                  shouldSync: !1,
                  settings: i().pick(t, [
                    "theme",
                    "clientThemeSettings",
                    "developerMode",
                  ]),
                }),
              n
            );
          },
          (e) => {
            if (e?.appearance?.settings?.theme === "amoled")
              return {
                ...e,
                appearance: {
                  ...e.appearance,
                  settings: { ...e.appearance.settings, theme: "midnight" },
                },
              };
          },
        ];
        initialize(e) {
          u = e ?? {};
        }
        getState() {
          return u;
        }
        shouldSync(e) {
          return u[e]?.shouldSync !== !1;
        }
        getTextSettings() {
          return u.text?.settings;
        }
        getAppearanceSettings() {
          return u.appearance?.settings;
        }
      }
      let c = new d(s.h, {
        SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: function (e) {
          let { changes: t } = e;
          for (let e in t) {
            let { shouldSync: n, settings: r } = t[e];
            if (!0 === n) {
              delete u[e];
              continue;
            }
            if (
              (!1 === n && (u[e] = { shouldSync: n, settings: {} }),
              u[e]?.shouldSync === !1)
            )
              for (let t in r) u[e].settings[t] = r[t];
          }
        },
        LOGOUT: function () {
          u = {};
        },
      });
    },
    383394(e, t, n) {
      n.d(t, { A: () => o });
      var r = n(17928),
        i = n(228366),
        a = n(617617);
      let l = new Set();
      class s extends r.Ay.PersistedStore {
        static displayName = "ExpandedGuildFolderStore";
        static persistKey = "ExpandedGuildFolderStore";
        initialize(e) {
          null != e && (l = new Set(e.expandedFolders)), this.waitFor(a.A);
        }
        getState() {
          return { expandedFolders: Array.from(l) };
        }
        getExpandedFolders() {
          return l;
        }
        isFolderExpanded(e) {
          return l.has(e);
        }
      }
      let o = new s(i.h, {
        TOGGLE_GUILD_FOLDER_EXPAND: function (e) {
          let { folderId: t } = e;
          (l = new Set(l)).has(t) ? l.delete(t) : l.add(t);
        },
        SET_GUILD_FOLDER_EXPANDED: function (e) {
          let { folderId: t, expanded: n } = e;
          (l = new Set(l)), n ? l.add(t) : l.has(t) && l.delete(t);
        },
        USER_SETTINGS_PROTO_UPDATE: function () {
          let e = a.A.getGuildFolders();
          if (null == e) return !1;
          let t = !1;
          for (let n of l)
            e.some((e) => e.folderId === n) ||
              ((l = new Set(l)).delete(n), (t = !0));
          return t;
        },
        GUILD_FOLDER_COLLAPSE: function () {
          if (0 === l.size) return !1;
          l = new Set();
        },
      });
    },
    970928(e, t, n) {
      n.d(t, { RG: () => b, Di: () => w, uD: () => M, Y: () => k }),
        n(323874),
        n(14289),
        n(35956);
      var r = n(284009),
        i = n.n(r),
        a = n(636537),
        l = n(228366),
        s = n(735438),
        o = n.n(s),
        u = n(17928);
      let d = {},
        c = {};
      function h(e) {
        let { assets: t } = e,
          n = { ...d };
        for (let e in t) {
          let r = t[e];
          (n[e] = 2),
            (c[e] = {
              assets: o().keyBy(r, "name") ?? {},
              lastUpdated: Date.now(),
            });
        }
        d = n;
      }
      class y extends u.Ay.Store {
        static displayName = "ApplicationAssetsStore";
        getApplicationAssetFetchState(e) {
          return d[e] ?? 0;
        }
        getFetchingIds() {
          return [
            ...Object.entries(d)
              .filter((e) => {
                let [, t] = e;
                return 1 === t;
              })
              .map((e) => {
                let [t] = e;
                return t;
              }),
          ];
        }
        getApplicationAssets(e) {
          return c[e];
        }
      }
      let p = new y(l.h, {
        APPLICATION_ASSETS_FETCH: function (e) {
          let { applicationId: t } = e;
          d = { ...d, [t]: 1 };
        },
        APPLICATION_ASSETS_FETCH_SUCCESS: function (e) {
          let { applicationId: t } = e;
          d = { ...d, [t]: 2 };
        },
        APPLICATION_ASSETS_UPDATE: function (e) {
          let { applicationId: t, assets: n } = e;
          null != n
            ? (c[t] = {
                assets: o().keyBy(n, "name") ?? {},
                lastUpdated: Date.now(),
              })
            : delete c[t];
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: h,
        DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: h,
      });
      var f = n(626584),
        m = n(776231),
        E = n(652215);
      let _ = "https://i.scdn.co/image/",
        g =
          /https:\/\/static-cdn\.jtvnw\.net\/previews-ttv\/live_user_(.+)-\{width\}x\{height\}.jpg/,
        C =
          /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault_live\.jpg/,
        v = {
          [E.fg2.SPOTIFY]: {
            deserialize: (e) => `${_}${encodeURIComponent(e)}`,
            serialize: (e) => e.split(_)[1],
          },
          [E.fg2.TWITCH]: {
            deserialize: (e, t) => {
              let n, r, i;
              return (
                (n = encodeURIComponent(e)),
                (r = t[0]),
                (i = t[1]),
                `https://static-cdn.jtvnw.net/previews-ttv/live_user_${n}-${r}x${i}.jpg`
              );
            },
            serialize: (e) => {
              let t = e.match(g);
              return null != t ? t[1] : null;
            },
          },
          [E.fg2.YOUTUBE]: {
            deserialize: (e) => {
              let t;
              return (
                (t = encodeURIComponent(e)),
                `https://i.ytimg.com/vi/${t}/hqdefault_live.jpg`
              );
            },
            serialize: (e) => {
              let t = e.match(C);
              return null != t ? t[1] : null;
            },
          },
          mp: {
            deserialize: (e) => {
              i()(
                null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT,
                "MEDIA_PROXY_ENDPOINT not configured",
              );
              let t = new URL(
                  e,
                  location.protocol + window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT,
                ),
                n = e.toLowerCase().endsWith(".gif"),
                r = e.toLowerCase().endsWith(".webp"),
                a = e.toLowerCase().endsWith(".avif");
              return (
                n && t.searchParams.set("format", "webp"),
                (n || r || a) && t.searchParams.set("animated", "true"),
                t.toString()
              );
            },
            serialize: (e) => e,
          },
        },
        S = new Map();
      async function A(e) {
        let { body: t } = await a.Bo.get({
          url: E.Rsh.APPLICATION_ASSETS(e),
          oldFormErrors: !0,
          rejectWithError: !1,
        });
        return (
          l.h.dispatch({
            type: "APPLICATION_ASSETS_UPDATE",
            applicationId: e,
            assets: t,
          }),
          p.getApplicationAssets(e)
        );
      }
      function w(e, t) {
        let n = v[e].serialize(t);
        return n ? `${e}:${n.toString()}` : null;
      }
      function M(e, t, n) {
        let r =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : "png";
        if (null != t && t.includes(":")) {
          let [e, r] = t.split(":");
          return e === E.fg2.TWITCH
            ? null == n || "number" == typeof n
              ? void new f.A("ApplicationAssetUtils").warn(
                  "getAssetImage: size must === [number, number] for Twitch",
                )
              : v[E.fg2.TWITCH].deserialize(r, n)
            : Object.prototype.hasOwnProperty.call(v, e)
              ? v[e].deserialize(r)
              : void 0;
        }
        if (null == e || null == t) return;
        let i = Array.isArray(n) ? Math.max(...n) : n,
          l = "number" == typeof i ? `?size=${(0, m.kr)(i)}` : "";
        return null != window.GLOBAL_ENV.CDN_HOST
          ? `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/app-assets/${e}/${t}.${r}${l}`
          : `${(0, a.TP)()}/applications/${e}/app-assets/${t}.${r}${l}`;
      }
      async function k(e) {
        var t;
        let n,
          r = await (null == (n = p.getApplicationAssets(e)) ||
          ((t = n.lastUpdated), Date.now() - t > 36e5)
            ? A(e)
            : Promise.resolve(n));
        return r?.assets;
      }
      async function L(e, t) {
        let n = t.filter((e) => null != e && null == S.get(e));
        if (0 === n.length) return;
        let { body: r } = await a.Bo.post({
          url: E.Rsh.APPLICATION_EXTERNAL_ASSETS(e),
          body: { urls: n },
          oldFormErrors: !0,
          rejectWithError: !1,
        });
        for (let { url: e, external_asset_path: t } of r) S.set(e, t);
      }
      async function b(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        l.h.dispatch({ type: "APPLICATION_ASSETS_FETCH", applicationId: e });
        let r = [],
          i = t.filter(
            (e) => e?.startsWith("http:") || e?.startsWith("https:"),
          );
        if (
          (i.length > 0 && (await L(e, i)),
          (function (e, t) {
            let n = 0;
            if (
              e.filter((e) => e?.startsWith("http:") || e?.startsWith("https:"))
                .length > 0
            )
              for (let r = 0; r < e.length; r++) {
                let i = e[r];
                if (null == i) continue;
                let a = S.get(i);
                null != a && ((t[r] = w("mp", a)), n++);
              }
            return n === e.length;
          })(t, r))
        )
          return (
            l.h.dispatch({
              type: "APPLICATION_ASSETS_FETCH_SUCCESS",
              applicationId: e,
            }),
            r
          );
        let a = await k(e);
        return (l.h.dispatch({
          type: "APPLICATION_ASSETS_UPDATE",
          applicationId: e,
          assets: a,
        }),
        (function (e, t, n, r) {
          let i = !1;
          for (let a = 0; a < e.length; a++) {
            let l = e[a];
            if (null == l || null != t[a]) continue;
            let s = Object.prototype.hasOwnProperty.call(n, l) && n[l];
            if (!s) {
              if (null == r || r <= 0) {
                t[a] = null;
                continue;
              }
              i = !0;
            }
            t[a] = s.id;
          }
          return i;
        })(t, r, a, n))
          ? A(e).then(() => b(e, t, n - 1))
          : (l.h.dispatch({
              type: "APPLICATION_ASSETS_FETCH_SUCCESS",
              applicationId: e,
            }),
            r);
      }
    },
    372250(e, t, n) {
      n.d(t, { p: () => r });
      function r(e) {
        return Array.isArray(e) ? e[0] : e;
      }
    },
    316501(e, t, n) {
      n.d(t, {
        AD: () => L,
        Kh: () => h,
        Pk: () => I,
        Q_: () => K,
        Ze: () => b,
        pF: () => M,
        sv: () => T,
      }),
        n(321073);
      var r = n(695497),
        i = n.n(r),
        a = n(506774),
        l = n(626584),
        s = n(111162),
        o = n(723702),
        u = n(650583);
      let d = new l.A("KeyboardLayoutMapUtils"),
        c = (0, o.isLinux)()
          ? u.C8
          : (0, o.isMac)()
            ? u.V8
            : (0, o.isWindows)() || __OVERLAY__
              ? u.Nu
              : i().codes,
        h = new Set([192, 220, 222, 223, 229]),
        y = Object.freeze({
          KeyA: "a",
          KeyB: "b",
          KeyC: "c",
          KeyD: "d",
          KeyE: "e",
          KeyF: "f",
          KeyG: "g",
          KeyH: "h",
          KeyI: "i",
          KeyJ: "j",
          KeyK: "k",
          KeyL: "l",
          KeyM: "m",
          KeyN: "n",
          KeyO: "o",
          KeyP: "p",
          KeyQ: "q",
          KeyR: "r",
          KeyS: "s",
          KeyT: "t",
          KeyU: "u",
          KeyV: "v",
          KeyW: "w",
          KeyX: "x",
          KeyY: "y",
          KeyZ: "z",
          Digit0: "0",
          Digit1: "1",
          Digit2: "2",
          Digit3: "3",
          Digit4: "4",
          Digit5: "5",
          Digit6: "6",
          Digit7: "7",
          Digit8: "8",
          Digit9: "9",
          Backquote: "`",
          Backslash: "\\",
          Quote: "'",
          Slash: "/",
          Comma: ",",
          Period: ".",
          Semicolon: ";",
          Equal: "=",
          Minus: "-",
          BracketLeft: "[",
          BracketRight: "]",
          IntlBackslash: "\xa7",
        });
      function p(e) {
        return null == e ? e : e.toLocaleLowerCase();
      }
      class f {
        map;
        constructor(e = y) {
          this.map = new Map(
            Object.entries(e).map((e) => {
              let [t, n] = e;
              return [t, p(n)];
            }),
          );
        }
        get(e) {
          return this.map.get(e);
        }
        has(e) {
          return this.map.has(e);
        }
        keys() {
          return this.map.keys();
        }
        values() {
          return this.map.values();
        }
        entries() {
          return this.map.entries();
        }
        forEach(e, t) {
          return this.map.forEach(e, t);
        }
        get size() {
          return this.map.size;
        }
        _set(e, t) {
          this.map.set(e, t);
        }
      }
      let m = new f();
      async function E() {
        if (__OVERLAY__) return (m = new f()), !1;
        if (navigator.keyboard?.getLayoutMap != null)
          try {
            let e = await navigator.keyboard.getLayoutMap();
            return (m = new f(Object.fromEntries(e.entries()))), !0;
          } catch (e) {
            m = new f();
          }
        return !1;
      }
      function _(e) {
        let t = new Set(),
          n = {};
        for (let [r, i] of Object.entries(e)) {
          let e = p(r);
          if (t.has(e) && null != n[e] && n[e] !== i) {
            d.error(`Seperate keyCode mappings found for: ${e}`);
            continue;
          }
          t.add(e), (n[e] = i);
        }
        return n;
      }
      function g(e) {
        return {
          keyCode: e.keyCode,
          key: null != e.key ? p(e.key) : void 0,
          code: e.code,
        };
      }
      let C = "keyboard-layout-map";
      class v {
        keyCodeMap;
        keyMap;
        _internalKeyLayoutMap = null;
        _defaultKeyMap;
        _cachedKeyCodeMapEntries = [];
        _cachedKeyMapEntries = [];
        _cachedKeyLayoutMapEntries = [];
        _cachedAllEvents = [];
        constructor(e = {}) {
          this._defaultKeyMap = e;
          const t = a.w.get(C) ?? null;
          null != t ? (this.keyMap = t) : (this.keyMap = _({ ...e })),
            this._initializeInternalLayoutMap(),
            (this.keyCodeMap = this._buildKeyCodeMapFromKeyMap()),
            this.updateCaches(),
            this.save();
        }
        _setCachedKeyCodeMapEntries() {
          (this._cachedKeyCodeMapEntries = Object.entries(this.keyCodeMap).map(
            (e) => {
              let [t, n] = e;
              return [Number(t), n];
            },
          )),
            (this._cachedAllEvents = this._cachedKeyCodeMapEntries.flatMap(
              (e) => {
                let [t, n] = e;
                return n;
              },
            ));
        }
        _setCachedKeyMapEntries() {
          this._cachedKeyMapEntries = Object.entries(this.keyMap);
        }
        _setCachedKeyLayoutMapEntries() {
          this._cachedKeyLayoutMapEntries = Array.from(
            this.getLayoutMap().entries(),
          );
        }
        get cachedKeyCodeMapEntries() {
          return (
            0 === this._cachedKeyCodeMapEntries.length &&
              this._setCachedKeyCodeMapEntries(),
            this._cachedKeyCodeMapEntries
          );
        }
        get cachedKeyMapEntries() {
          return (
            0 === this._cachedKeyMapEntries.length &&
              this._setCachedKeyMapEntries(),
            this._cachedKeyMapEntries
          );
        }
        get cachedKeyLayoutMapEntries() {
          return (
            0 === this._cachedKeyLayoutMapEntries.length &&
              this._setCachedKeyLayoutMapEntries(),
            this._cachedKeyLayoutMapEntries
          );
        }
        get cachedAllEvents() {
          return (
            0 === this._cachedAllEvents.length &&
              this._setCachedKeyCodeMapEntries(),
            this._cachedAllEvents
          );
        }
        getKeyCodeMapItem(e) {
          return (
            null == this.keyCodeMap[e] && (this.keyCodeMap[e] = []),
            this.keyCodeMap[e]
          );
        }
        _buildKeyCodeMapFromKeyMap() {
          let e = {};
          for (let [t, n] of Object.entries(this.keyMap))
            (e[n] = e[n] ?? []),
              e[n].push({
                keyCode: n,
                key: t,
                code: this.findCodeFromKeyboardLayoutMap(t, !0),
              });
          return e;
        }
        _initializeInternalLayoutMap() {
          let e = m;
          (this._internalKeyLayoutMap = new Map(Array.from(e.entries()))),
            this._setCachedKeyLayoutMapEntries();
        }
        _hasExactMatch(e) {
          if (null == e.keyCode) return !1;
          let t = this.keyCodeMap[e.keyCode];
          return (
            null != t &&
            t.some(
              (t) =>
                t.key === e.key && t.code === e.code && t.keyCode === e.keyCode,
            )
          );
        }
        addEvent(e) {
          let t = g(e);
          null == this._internalKeyLayoutMap &&
            this._initializeInternalLayoutMap(),
            this._hasExactMatch(t) ||
              (null != t.key &&
                "dead" !== t.key &&
                (null == this.keyMap[t.key]
                  ? (this.keyMap[t.key] = t.keyCode)
                  : this.keyMap[t.key] !== t.keyCode &&
                    s.default.logKeyboardMismatches &&
                    d.error(
                      `KeyboardMapper - Key code mismatch for key ${t.key}: ${this.keyMap[t.key]} !== ${t.keyCode}`,
                    ),
                (this.keyCodeMap[t.keyCode] = this.keyCodeMap[t.keyCode] ?? []),
                this.keyCodeMap[t.keyCode].push(t),
                this._internalKeyLayoutMap?.set(t.code, t.key),
                this.updateCaches()));
        }
        updateCaches() {
          this._setCachedKeyCodeMapEntries(),
            this._setCachedKeyMapEntries(),
            this._setCachedKeyLayoutMapEntries();
        }
        reset() {
          (this._internalKeyLayoutMap = null),
            (this.keyMap = _({ ...this._defaultKeyMap })),
            this._initializeInternalLayoutMap(),
            (this.keyCodeMap = this._buildKeyCodeMapFromKeyMap()),
            this.updateCaches(),
            this.save();
        }
        save() {
          var e;
          (e = this.keyMap), a.w.set(C, e);
        }
        getLayoutMap() {
          return null == this._internalKeyLayoutMap
            ? m
            : this._internalKeyLayoutMap;
        }
        getKeyCode(e) {
          return this.keyMap[e];
        }
        findCodeFromKeyboardLayoutMap(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = this.cachedKeyLayoutMapEntries;
          t && (n = Array.from(m.entries()));
          let r = p(e);
          return (
            n.find((e) => {
              let [t, n] = e;
              return n === r;
            })?.[0] ?? e
          );
        }
      }
      class S extends v {
        getKeyString(e, t) {
          let n = this.getKeyCodeMapItem(e);
          return (
            0 === n.length &&
              (n = this.cachedKeyMapEntries
                .filter((e) => {
                  let [t, n] = e;
                  return n == n;
                })
                .map((e) => {
                  let [n, r] = e;
                  return {
                    key: n,
                    keyCode: r,
                    code: t ?? this.findCodeFromKeyboardLayoutMap(n),
                  };
                })),
            n.find((n) => {
              let r = n.keyCode === e;
              return null != t ? r && n.code === t : r;
            })?.key
          );
        }
        findExactKeyboardEventMatch(e, t, n) {
          let r = p(e);
          if (
            (null == t && (t = this.findCodeFromKeyboardLayoutMap(r)),
            null != n)
          ) {
            let e = this.keyCodeMap[n];
            if (null != e) {
              let n = e.find((e) => p(e.key) === r && e.code === t);
              if (null != n) return n;
            }
          }
          if (null != n && null != t)
            return this.cachedAllEvents.find((e) => {
              let i = p(e.key) === r,
                a = e.keyCode === n,
                l = e.code === t;
              return a && i && l;
            });
        }
        getWeightedPossibleKeyStringMatches(e, t, n) {
          return this.cachedAllEvents
            .filter((r) => {
              let i = p(r.key) === p(e),
                a = null == n || r.keyCode === n,
                l = null == t || r.code === t;
              return a && i && l;
            })
            .sort((r, i) => {
              let a = (r) => {
                  let i = 0;
                  return (
                    p(r.key) === p(e) && (i += 0.5),
                    null != t && r.code === t && (i += 0.3),
                    null != n && r.keyCode === n && (i += 0.2),
                    i
                  );
                },
                l = a(r);
              return a(i) - l;
            });
        }
        findKeyboardEventByKey(e, t, n) {
          let r = p(e);
          if (
            (null == t && (t = this.findCodeFromKeyboardLayoutMap(r)),
            null != n)
          ) {
            let e = this.keyCodeMap[n];
            if (null != e) {
              let n = e.find((e) => p(e.key) === r && e.code === t);
              if (null != n) return n;
            }
          }
          let [i] = this.getWeightedPossibleKeyStringMatches(e, t, n);
          return i;
        }
        findKeyboardEventByKeyCode(e, t) {
          let n = this.getKeyString(e, t);
          if (
            (null == n && null != t && (n = this.getLayoutMap().get(t)),
            null == n)
          ) {
            let r = this.getKeyCodeMapItem(e);
            n = r.find((n) => {
              let r = n.keyCode === e;
              return null != t ? r && n.code === t : r;
            })?.key;
          }
          return null == n
            ? this.getDefaultKeyboardEventShape(void 0, e, t)
            : this.findKeyboardEventByKey(n, t, e);
        }
        getDefaultKeyboardEventShape(e, t, n) {
          let r = null != e ? p(e) : void 0;
          if (null != r) {
            let e = this.keyMap[r];
            if (null == e) return;
            return g({
              keyCode: e,
              key: r,
              code: n ?? this.findCodeFromKeyboardLayoutMap(r),
            });
          }
          if (null != t) {
            let e = this.cachedKeyMapEntries.find((e) => {
              let [n, r] = e;
              return r === t;
            })?.[0];
            if (null == e) return;
            return g({
              keyCode: t,
              key: e,
              code: n ?? this.findCodeFromKeyboardLayoutMap(e),
            });
          }
        }
      }
      let A = null,
        w = null;
      function M() {
        return null != w
          ? w
          : (w = new Promise(async (e) => {
              await E(),
                (A = new S(c)),
                document.addEventListener("keydown", (e) => {
                  try {
                    A?.addEvent(e);
                  } catch (t) {
                    d.error("KeyboardMapper - Error adding event", {
                      event: e,
                      error: t,
                    });
                  }
                }),
                e();
            }));
      }
      function k() {
        return null == A ? (M(), null) : A;
      }
      async function L() {
        await E(), k()?.reset();
      }
      function b() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return e ? m : (k()?.getLayoutMap() ?? m);
      }
      function T(e) {
        let t = g(e);
        return null != t.key
          ? (k()?.findExactKeyboardEventMatch(t.key, t.code, t.keyCode) ?? null)
          : null;
      }
      function K(e) {
        let t = null != e ? p(e) : void 0;
        if (null == t) return null;
        let n = (function (e) {
            let t = null != e ? p(e) : void 0;
            if (null != t)
              return k()?.findCodeFromKeyboardLayoutMap(t) ?? void 0;
          })(t),
          r = k()?.findKeyboardEventByKey(t, n) ?? null;
        if (null != r) return r;
        try {
          let e = k()?.getDefaultKeyboardEventShape(t, void 0, n) ?? null;
          if (null == e) return null;
          let r = new KeyboardEvent("keydown", e);
          return g({ keyCode: r.keyCode, key: r.key, code: r.code });
        } catch (e) {
          return null;
        }
      }
      function I(e) {
        let t = k()?.findKeyboardEventByKeyCode(e) ?? null;
        if (null != t) return t;
        try {
          let t = k()?.getDefaultKeyboardEventShape(void 0, e) ?? null;
          if (null == t) return null;
          let n = new KeyboardEvent("keydown", t);
          return g({ keyCode: n.keyCode, key: n.key, code: n.code });
        } catch (e) {
          return null;
        }
      }
    },
    502518(e, t, n) {
      let r, i;
      n.d(t, { b: () => O, q: () => K }), n(142703), n(667532), n(321073);
      var a = n(132500);
      n(423034);
      var l = n(80703),
        s = n(17928),
        o = n(636537),
        u = n(187207),
        d = n(818348);
      let c = "x-science-test",
        h = 1500,
        y = 0,
        p = 0,
        f = 0,
        m = 0,
        E = 0,
        _ = null,
        g = 0,
        C = Number.MAX_SAFE_INTEGER,
        v = 0,
        S = 0,
        A = null,
        w = !1,
        M = null,
        k = null;
      function L(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return e + t;
      }
      let b = window.requestIdleCallback ?? ((e) => setImmediate(() => e())),
        T = new u.n(),
        K = {
          handleConnectionOpen: () => {},
          handleConnectionClosed: () => {},
          handleFingerprint: () => {},
          handleTrack: () => {},
          handleSetAnalyticsToken: () => {},
        },
        I = [],
        N = null,
        P = () => Promise.resolve({ sessionId: void 0 }),
        O = (e) => {
          let {
            dispatcher: t,
            actionHandler: n,
            getFingerprint: u,
            getSessionId: O = P,
            TRACKING_URL: x,
            drainTimeoutOverride: D,
            waitFor: R,
            scheduleWhenIdle: F = b,
            getLaunchSignature: U = () => null,
          } = e;
          function j() {
            return 0 !== I.length && (null != i ? null != r : null != u());
          }
          function z(e) {
            let { shouldFlushOnNextTick: t = !1 } = e;
            null == N &&
              j() &&
              (N = t ? setTimeout(B, 0) : F(B, { timeout: h }));
          }
          function B() {
            if (((N = null), !j())) return Promise.resolve();
            let e = I.slice();
            (I = []), (g = L(g));
            let t = e.length;
            (C = Math.min(C, t)), (v = Math.max(v, t)), (S = L(S, t));
            let n = $(e);
            return (
              n.then(
                () => {
                  e.forEach((e) => {
                    e.resolve?.();
                  }),
                    (f = L(f));
                },
                (t) => {
                  I.unshift(...e), (m = L(m));
                  let { message: n } = t.body || t;
                  console.warn("[AnalyticsTrackingStore] Track:", n);
                },
              ),
              n
            );
          }
          function $(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : x,
              n = Date.now(),
              i = e.map((e) => ({
                ...e,
                properties: { ...e.properties, client_send_timestamp: n },
              })),
              l = {};
            return (
              w || ((k = (0, a.A)()), (l[c] = k), (w = !0)),
              o.Bo.post({
                url: t,
                headers: l,
                body: { token: r, events: i },
                retries: 3,
                rejectWithError: !1,
              }).then((e) => (l[c] && (M = e?.headers?.[c] ?? null), e))
            );
          }
          function G() {
            let e = {
              type: d.bZ.CLIENT_TELEMETRY,
              properties: {
                client_track_timestamp: Date.now(),
                rpc_success_count: f,
                rpc_failure_count: m,
                first_seen_event_sequence_number: E,
                last_seen_event_sequence_number: y,
                telemetry_period_start_timestamp: _,
                telemetry_period_end_timestamp: Date.now(),
                event_queue_rejection_count: p,
                event_queue_batch_count: g,
                event_queue_batch_min_size:
                  C === Number.MAX_SAFE_INTEGER ? 0 : C,
                event_queue_batch_max_size: v,
                event_queue_batch_avg_size: g > 0 ? S / g : 0,
                science_request_id: k,
                science_response: M,
                launch_signature: U(),
              },
            };
            return (
              (p = 0),
              (f = 0),
              (m = 0),
              (g = 0),
              (C = Number.MAX_SAFE_INTEGER),
              (v = 0),
              (S = 0),
              (_ = Date.now()),
              (E = y),
              $([e], d.mX.CLIENT_TELEMETRY)
            );
          }
          (h = D ?? 1500),
            (K.handleConnectionOpen = function (e) {
              let { analyticsToken: t, user: n } = e;
              return (
                null != t && (r = t),
                null != n.id && (i = n.id),
                !(function () {
                  if (null != A) return;
                  let e = () => {
                    A = {
                      type: "timeout",
                      id: setTimeout(
                        () => {
                          G(), e();
                        },
                        Math.max(
                          36e5 + (Math.floor(36e4 * Math.random() * 2) - 36e4),
                          6e4,
                        ),
                      ),
                    };
                  };
                  A = {
                    type: "timeout",
                    id: setTimeout(
                      () => {
                        G(), e();
                      },
                      Math.floor(354e4 * Math.random() + 6e4),
                    ),
                  };
                })(),
                z({ shouldFlushOnNextTick: !1 }),
                !1
              );
            }),
            (K.handleConnectionClosed = function () {
              return (
                B(),
                (function () {
                  if (null == A) return;
                  switch (A.type) {
                    case "timeout":
                      clearTimeout(A.id);
                      break;
                    case "interval":
                      clearInterval(A.id);
                      break;
                    default:
                      A.type;
                  }
                  A = null;
                })(),
                (r = null),
                (i = null),
                !1
              );
            }),
            (K.handleFingerprint = function () {
              return B(), !1;
            }),
            (K.handleTrack = function (e) {
              let {
                event: t,
                properties: n,
                flush: r,
                fingerprint: a,
                resolve: s,
              } = e;
              return (
                O().then((e) => {
                  let { sessionId: o } = e,
                    d = {
                      type: t,
                      fingerprint: a,
                      properties: {
                        client_track_timestamp: Date.now(),
                        client_heartbeat_session_id: o,
                        event_sequence_number: ++y,
                        ...n,
                      },
                      resolve: s,
                    },
                    c = (function (e) {
                      if (null != i) return i;
                      let t = e.fingerprint ?? u();
                      return null != t ? (0, l.d)(t) : null;
                    })(d);
                  if (
                    (null != c && (d.properties.client_uuid = T.generate(c)),
                    I.push(d),
                    I.length > 1e4)
                  ) {
                    let e = I.length - 1e4;
                    (p = L(p, e)), (I = I.slice(-1e4));
                  }
                  r
                    ? z({ shouldFlushOnNextTick: !0 })
                    : z({ shouldFlushOnNextTick: !1 });
                }),
                !1
              );
            }),
            (K.handleSetAnalyticsToken = function (e) {
              let { analyticsToken: t, userId: n } = e;
              return (
                null == r &&
                  null != t &&
                  ((r = t), (i = n), z({ shouldFlushOnNextTick: !1 })),
                !1
              );
            });
          class V extends s.Ay.Store {
            static displayName = "AnalyticsTrackingStore";
            initialize() {
              null != R && this.waitFor(...R);
            }
            submitEventsImmediately = $;
          }
          return new V(t, n);
        };
    },
    841117(e, t, n) {
      n.d(t, { Cu: () => a, eU: () => r, sq: () => l });
      let r = (e) => new Promise((t) => setTimeout(t, e)),
        i = () => Promise.resolve();
      function a(e) {
        i = e;
      }
      async function l(e) {
        let { createPromise: t, webpackId: a } = e,
          l = 500,
          s = 0;
        for (;;)
          try {
            return await t();
          } catch (e) {
            if ((console.log(e), a in n.c))
              throw (
                (console.log(
                  "Module was found in webpack cache so it has loaded from the network and webpack will not retry",
                ),
                e)
              );
            if (s >= 50) throw e;
            await r(l), await i(), (l = Math.min(5e3, 2 * l)), s++;
          }
      }
    },
    400253(e, t, n) {
      function r(e) {
        return `${location.protocol}//${window.GLOBAL_ENV.INVITE_HOST}/${e}`;
      }
      function i(e) {
        return `${location.protocol}//${window.GLOBAL_ENV.GUILD_TEMPLATE_HOST}/${e}`;
      }
      function a() {
        return `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/channels/@me`;
      }
      n.d(t, { BH: () => a, FH: () => i, jN: () => r });
    },
    279234(e, t, n) {
      n.d(t, { P: () => h, x: () => y });
      var r = n(118356),
        i = n(31436);
      let a = null,
        l = new r.Vy("libdiscore");
      function s(e) {
        l.error(e);
      }
      function o(e) {
        l.warn(e);
      }
      function u(e) {
        l.info(e);
      }
      function d(e) {
        l.verbose(e);
      }
      function c(e) {
        l.trace(e);
      }
      function h() {
        return (
          null == a &&
            (a = (async () => {
              await i.Bf();
              let e = i.vZ();
              e.installLogCallback(s, o, u, d, c),
                await e.initLibdiscore(),
                (window._libdiscoreInitialized = !0);
            })()),
          a
        );
      }
      function y() {
        return !0 === window._libdiscoreInitialized;
      }
    },
    31436(e, t, n) {
      n.d(t, { Ay: () => o, Bf: () => l, vZ: () => s });
      var r = n(841117);
      function i(e) {
        console.warn(`[libdiscore] ${e}`);
      }
      async function a() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 500,
          a = null,
          l = e;
        for (;;)
          try {
            await Promise.resolve().then(n.bind(n, 5426));
            return;
          } catch (e) {
            if (
              e instanceof ReferenceError ||
              e instanceof WebAssembly.CompileError
            ) {
              var s;
              throw (
                ((s = !0),
                (window._libdiscoreUnsupportedBrowser = s),
                i(
                  `Unsupported browser, skipping libdiscore, error: [${e.name}] ${e.message}`,
                ),
                e)
              );
            }
            if (((a = e), delete n.c[5426], 0 == --l)) throw a;
            i(
              `Failed to import libdiscore-wasm, retrying... (${l} attempts left), ${a.name}: ${a.message}`,
            ),
              await (0, r.eU)(t);
          }
      }
      function l() {
        let e = window._libdiscoreInitPromise ?? null;
        if (null != e) return e;
        {
          var t;
          let e = (async () => {
            var e;
            await a(),
              (e = await (0, r.sq)({
                createPromise: () => n.e("14575").then(n.bind(n, 811059)),
                webpackId: 811059,
              })),
              (window._libdiscoreWasm = e);
          })();
          return (t = e), (window._libdiscoreInitPromise = t), e;
        }
      }
      function s() {
        if (void 0 !== window._libdiscoreWasm) return window._libdiscoreWasm;
        throw Error("libdiscoreWasm is not initialized");
      }
      let o = s;
    },
    547830(e, t, n) {
      n.d(t, { FO: () => a, fL: () => r, u5: () => i }), n(724214);
      try {
        null == Date.now && (Date.now = () => new Date().valueOf());
      } catch (e) {}
      let r = (() => {
          try {
            return (
              n.g.performance.timing.navigationStart ?? n.g.performance.now()
            );
          } catch (e) {}
          return Date.now();
        })(),
        i = (() => {
          try {
            return n.g.performance.timeOrigin ?? r;
          } catch (e) {}
          return Date.now();
        })();
      if (null == n.g.performance.timing)
        try {
          n.g.performance.timing = { navigationStart: r };
        } catch (e) {}
      if (null == n.g.performance.timeOrigin)
        try {
          n.g.performance.timeOrigin = i;
        } catch (e) {}
      let a = n.g.performance;
    },
    396574(e, t, n) {
      n.d(t, {
        Hz: () => o,
        It: () => a,
        LU: () => y,
        PF: () => d,
        VP: () => s,
        fA: () => h,
        g7: () => u,
        zU: () => c,
      });
      var r = n(214958),
        i = n.n(r);
      let a = parseInt(i().version ?? "0", 10),
        l = null != i().ua && i().ua.indexOf("OculusBrowser") > -1,
        s = (() => {
          if ("u" > typeof window && null == window.WebSocket) return !1;
          switch (i().name) {
            case "IE":
            case "Microsoft Edge":
              return a >= 15;
            default:
              return !0;
          }
        })(),
        o =
          l ||
          ("Firefox" === i().name && a >= 80) ||
          ("Chrome" === i().name && a >= 37) ||
          ("Opera" === i().name && a >= 66) ||
          ("Node.js" === i().name && a >= 6) ||
          ("Electron" === i().name && a >= 1) ||
          ("Safari" === i().name && a >= 13) ||
          ("Microsoft Edge" === i().name && a >= 37),
        u =
          "Chrome" === i().name ||
          "Safari" === i().name ||
          ("Firefox" === i().name && a >= 80) ||
          "Opera" === i().name ||
          "Microsoft Edge" === i().name,
        d =
          "u" > typeof RTCPeerConnection &&
          "function" == typeof RTCPeerConnection.prototype.addTransceiver,
        c =
          "u" > typeof RTCRtpSender &&
          ("transform" in RTCRtpSender.prototype ||
            "createEncodedStreams" in RTCRtpSender.prototype),
        h =
          ("Chrome" === i().name && a >= 58) ||
          ("Safari" === i().name && a >= 15) ||
          ("Firefox" === i().name && a >= 108),
        y =
          ("Chrome" === i().name && a >= 72) ||
          ("Safari" === i().name && a >= 11) ||
          ("Opera" === i().name && a >= 60) ||
          ("Microsoft Edge" === i().name && a >= 79);
    },
  },
]);
//# sourceMappingURL=74524.2841e1cab884dd31.js.map
