"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["96888"],
  {
    661023(e, t, n) {
      n.r(t), n.d(t, { default: () => a, messagesLoader: () => r });
      let { createLoader: i } = n(919523),
        r = i(
          {
            bg: () => n.e("63837").then(n.t.bind(n, 58988, 19)),
            cs: () => n.e("43982").then(n.t.bind(n, 179453, 19)),
            da: () => n.e("10345").then(n.t.bind(n, 780400, 19)),
            de: () => n.e("70477").then(n.t.bind(n, 953788, 19)),
            el: () => n.e("14319").then(n.t.bind(n, 876594, 19)),
            "en-GB": () => n.e("16161").then(n.t.bind(n, 629912, 19)),
            "es-419": () => n.e("75721").then(n.t.bind(n, 48816, 19)),
            "es-ES": () => n.e("84205").then(n.t.bind(n, 841660, 19)),
            fi: () => n.e("68799").then(n.t.bind(n, 557378, 19)),
            fr: () => n.e("84068").then(n.t.bind(n, 701871, 19)),
            hi: () => n.e("15189").then(n.t.bind(n, 117204, 19)),
            hr: () => n.e("27022").then(n.t.bind(n, 696778, 19)),
            hu: () => n.e("52857").then(n.t.bind(n, 841888, 19)),
            it: () => n.e("12227").then(n.t.bind(n, 175982, 19)),
            ja: () => n.e("19467").then(n.t.bind(n, 403750, 19)),
            ko: () => n.e("16762").then(n.t.bind(n, 389697, 19)),
            lt: () => n.e("32188").then(n.t.bind(n, 141079, 19)),
            nl: () => n.e("41914").then(n.t.bind(n, 563681, 19)),
            no: () => n.e("15545").then(n.t.bind(n, 284512, 19)),
            pl: () => n.e("82768").then(n.t.bind(n, 174323, 19)),
            "pt-BR": () => n.e("15021").then(n.t.bind(n, 81436, 19)),
            ro: () => n.e("25045").then(n.t.bind(n, 338644, 19)),
            ru: () => n.e("55271").then(n.t.bind(n, 994330, 19)),
            "sv-SE": () => n.e("44152").then(n.t.bind(n, 202859, 19)),
            th: () => n.e("79800").then(n.t.bind(n, 865099, 19)),
            tr: () => n.e("16586").then(n.t.bind(n, 130449, 19)),
            uk: () => n.e("81736").then(n.t.bind(n, 587035, 19)),
            vi: () => n.e("57167").then(n.t.bind(n, 646322, 19)),
            "zh-CN": () => n.e("91848").then(n.t.bind(n, 759784, 19)),
            "zh-TW": () => n.e("26296").then(n.t.bind(n, 231531, 19)),
            "en-US": () => n.e("98037").then(n.bind(n, 203124)),
          },
          "en-US",
        ),
        { makeMessagesProxy: l } = n(919523),
        a = l(r);
    },
    368662(e, t, n) {
      n.r(t), n.d(t, { default: () => a, messagesLoader: () => r });
      let { createLoader: i } = n(919523),
        r = i({ "en-US": () => n.e("62972").then(n.bind(n, 387575)) }, "en-US"),
        { makeMessagesProxy: l } = n(919523),
        a = l(r);
    },
    100544(e, t, n) {
      n.d(t, {
        CT: () => o,
        W6: () => s,
        WM: () => c,
        XY: () => d,
        g6: () => a,
        j_: () => u,
      });
      var i,
        r,
        l,
        a =
          (((i = {}).INACTIVE = "inactive"),
          (i.BACKGROUND = "background"),
          (i.ACTIVE = "active"),
          i),
        s =
          (((r = {}).INVITE = "invite"),
          (r.GUILD_TEMPLATE = "guild-template"),
          (r.CHANNEL = "channel"),
          (r.GIFT_CODE = "gift-code"),
          (r.MESSAGE = "message"),
          (r.OAUTH2_AUTHORIZE = "oauth2-authorize"),
          (r.ONE_TIME_LOGIN = "one-time-login"),
          (r.APP_DIRECTORY_PROFILE = "app-directory-profile"),
          (r.PROMOTIONS = "promotions"),
          (r.FEATURE_PROMO_URL = "promo-url"),
          (r.NONE = "none"),
          (r.REMOTE_AUTH = "remote-auth"),
          (r.USER_PROFILE = "user-profile"),
          (r.BUILD_OVERRIDE = "build-override"),
          (r.CONTACT_SYNC = "contact-sync"),
          (r.ADD_FRIENDS = "add-friends"),
          (r.COMPOSE_MESSAGE = "compose-message"),
          (r.GUILD_EVENT_DETAILS = "guild-event-details"),
          (r.FRIENDS = "friends"),
          (r.EDIT_PROFILE = "edit-profile"),
          (r.MOBILE_WEB_HANDOFF = "mobile-web-handoff"),
          (r.USER_CONNECTIONS_CALLBACK = "user-connections-callback"),
          (r.VOICE_CHANNEL = "voice-channel"),
          (r.GUILD_HOME = "guild-home"),
          (r.USER_CONNECTIONS_LINK_CALLBACK = "user-connections-link-callback"),
          (r.SESSION_MANAGEMENT = "session-management"),
          (r.CONNECTIONS = "connections"),
          (r.GUILD_SETTINGS = "guild-settings"),
          (r.GUILD_SETTINGS_PICKER = "guild-settings-picker"),
          (r.ACTIVATE_DEVICE = "activate-device"),
          (r.FAMILY_CENTER = "family-center"),
          (r.SHARE = "share"),
          (r.CREATE_VOICE_INVITE = "create_voice_invite"),
          (r.SEND_VOICE_HANGOUT_WAVE = "send_voice_hangout_wave"),
          (r.ACCOUNT_STANDING = "account-standing"),
          (r.MOBILE_NATIVE_UPDATE = "mobile-native-update"),
          (r.SHOP = "shop"),
          (r.MOBILE_WEB_REDIRECT_CHECKOUT = "mobile-web-redirect-checkout"),
          (r.AUTHORIZED_APPS = "authorized-apps"),
          (r.DAVE_PROTOCOL_VERIFICATION = "dave-protocol-verification"),
          (r.ICYMI = "icymi"),
          (r.QUESTS = "quests"),
          (r.GIFT = "gift"),
          (r.NITRO_HOME = "store"),
          (r.ACTIVITY = "activity"),
          (r.CONNECTED_GAMES = "connected-games"),
          (r.BOOST_MARKETING = "boost-marketing"),
          (r.BOOST_SETTINGS = "boost-settings"),
          (r.QUEST_PREVIEW_TOOL = "quest-preview-tool"),
          (r.SUBSCRIPTION_SETTINGS = "subscription-settings"),
          (r.GAME_UPDATE = "game-update"),
          r);
      let o = "CacheStoreLazy",
        d = "CacheStoreChannelsLazy",
        u = "CacheStore";
      var c =
        (((l = {}).NONE = "none"),
        (l.SLIDE_UP = "slide-up"),
        (l.SLIDE_IN = "slide-in"),
        (l.SLIDE_OUT = "slide-out"),
        (l.SLIDE_IN_OUT = "slide-in-out"),
        (l.SLIDE_IN_OUT_REVERSE = "slide-in-out-reverse"),
        (l.FADE = "fade"),
        l);
      Object.freeze({ START: { x: 0, y: 0 }, END: { x: 1, y: 0 } }),
        Object.freeze({ START: { x: 0, y: 0 }, END: { x: 0, y: 1 } });
    },
    49229(e, t, n) {
      n.d(t, { A: () => m });
      var i = n(636537),
        r = n(765178),
        l = n(228366),
        a = n(315982),
        s = n(395484),
        o = n(700241),
        d = n(381689),
        u = n(30076),
        c = n(287809),
        h = n(395422),
        E = n(427262),
        _ = n(157559),
        p = n(442433),
        A = n(652215),
        f = n(235627),
        g = n(985018);
      function I(e) {
        (0, p.Z_)(), _.A.show(e);
      }
      function T(e, t, n) {
        let { status: i, body: r } = e,
          l = r && r.code;
        switch (i) {
          case 429:
            0 === t &&
              I({
                title: g.intl.string(g.t["3D5eox"]),
                body: g.intl.string(g.t.TuJriJ),
                confirmText: g.intl.string(g.t.DppXIx),
              });
            break;
          case 403:
            if (l === A.t02.EMAIL_VERIFICATION_REQUIRED) {
              I({
                title: g.intl.string(g.t.Gqf33E),
                body: g.intl.string(g.t.GHOBdx),
                confirmText: g.intl.string(g.t.HbTSE6),
                onConfirm: () => {
                  a.R();
                },
              });
              break;
            }
          default:
            if (l === A.t02.USER_QUARANTINED) (0, p.Z_)(), (0, o.default)();
            else if ((0, u.O)(i, l)) break;
            else if (l === A.t02.RELATIONSHIP_INVALID_NO_CONFIRMATION) break;
            else if (0 === t) {
              let e =
                null != n ? (0, h.vU)(l || 0, n) : g.intl.string(g.t.paDJBM);
              I({
                title: g.intl.string(g.t["6moJ8s"]),
                body: e,
                confirmText: g.intl.string(g.t.BddRzS),
              });
            }
        }
        throw e;
      }
      let S = {
          sendRequest(e) {
            let {
                discordTag: t,
                context: n,
                captchaPayload: r,
                errorUxConfig: l = 0,
              } = e,
              [a, s] = t.split("#");
            return i.Bo.post({
              url: A.Rsh.USER_RELATIONSHIPS(),
              body: { username: a, discriminator: parseInt(s), ...r },
              context: n,
              oldFormErrors: !0,
              rejectWithError: !1,
            }).catch((e) => {
              T(e, l, t);
            });
          },
          addRelationship(e, t) {
            let {
                userId: n,
                context: r,
                type: l,
                fromFriendSuggestion: a,
                confirmStrangerRequest: s,
                captchaPayload: o,
              } = e,
              d =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              u = c.default.getUser(n);
            return i.Bo.put({
              url: A.Rsh.USER_RELATIONSHIP(n),
              body: {
                type: l,
                from_friend_suggestion: a,
                confirm_stranger_request: s,
                ...o,
              },
              context: r,
              oldFormErrors: !0,
              rejectWithError: !1,
            })
              .then(() => {
                t?.();
              })
              .catch((e) => (T(e, d, E.Ay.getUserTag(u)), Promise.reject(e)));
          },
          acceptFriendRequest: (e) =>
            S.addRelationship(e, function () {
              r.O.announce(g.intl.string(g.t["3goNa5"]));
            }),
          cancelFriendRequest: (e, t) =>
            S.removeRelationship(e, t, function () {
              r.O.announce(g.intl.string(g.t.pLUaxR));
            }),
          removeFriend(e, t) {
            S.removeRelationship(e, t, function () {
              r.O.announce(g.intl.string(g.t.vGSLa2));
            });
          },
          blockUser: (e, t) =>
            S.addRelationship(
              { userId: e, context: t, type: A.eA$.BLOCKED },
              function () {
                r.O.announce(g.intl.string(g.t.mU0Vrp));
              },
            ),
          unblockUser: (e, t) =>
            S.removeRelationship(e, t, function () {
              r.O.announce(g.intl.string(g.t["9t1au7"]));
            }),
          removeRelationship: (e, t, n) =>
            i.Bo.del({
              url: A.Rsh.USER_RELATIONSHIP(e),
              context: t,
              oldFormErrors: !0,
              rejectWithError: !1,
            })
              .then(() => {
                n?.();
              })
              .catch(() => {
                r.O.announce(g.intl.string(g.t.n6Jo3E));
              }),
          updateRelationship: (e, t) =>
            i.Bo.patch({
              url: A.Rsh.USER_RELATIONSHIP(e),
              body: { nickname: t },
              rejectWithError: !1,
            }),
          fetchRelationships() {
            i.Bo.get({
              url: A.Rsh.USER_RELATIONSHIPS(),
              oldFormErrors: !0,
              rejectWithError: !0,
            }).then(
              (e) =>
                l.h.dispatch({
                  type: "LOAD_RELATIONSHIPS_SUCCESS",
                  relationships: e.body,
                }),
              () => l.h.dispatch({ type: "LOAD_RELATIONSHIPS_FAILURE" }),
            );
          },
          confirmClearPendingRelationships(e) {
            (0, s.A)(e);
          },
          clearPendingRelationships: () =>
            i.Bo.del({
              url: A.Rsh.USER_RELATIONSHIPS(),
              query: { relationship_type: A.eA$.PENDING_INCOMING },
              rejectWithError: !1,
            })
              .then(() => {
                l.h.dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
              })
              .catch(() => {
                r.O.announce(g.intl.string(g.t.n6Jo3E));
              }),
          clearPendingSpamAndIgnored: () =>
            i.Bo.del({
              url: A.Rsh.USER_RELATIONSHIPS(),
              query: { relationship_type: A.eA$.PENDING_INCOMING },
              body: { filters: [f.w.SPAM, f.w.IGNORED] },
              rejectWithError: !1,
            })
              .then(() => {
                l.h.dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
              })
              .catch(() => {
                r.O.announce(g.intl.string(g.t.n6Jo3E));
              }),
          ignoreUser: (e, t, n) =>
            i.Bo.put({
              url: A.Rsh.IGNORE_USER(e),
              context: { location: t },
              rejectWithError: !1,
            })
              .then(() => {
                d.A.showIgnoreSuccessToast(e, n),
                  r.O.announce(g.intl.string(g.t.Us93Ca)),
                  l.h.dispatch({
                    type: "RELATIONSHIP_IGNORE_USER_SUCCESS",
                    userId: e,
                    timestamp: Date.now(),
                  });
              })
              .catch(() => {
                d.A.showFailedToast(), r.O.announce(g.intl.string(g.t.n6Jo3E));
              }),
          unignoreUser: (e, t, n) =>
            i.Bo.del({
              url: A.Rsh.IGNORE_USER(e),
              context: { location: t },
              rejectWithError: !1,
            })
              .then(() => {
                d.A.showUnignoreSuccessToast(e, n),
                  r.O.announce(g.intl.string(g.t.QlH5w6));
              })
              .catch(() => {
                d.A.showFailedToast(), r.O.announce(g.intl.string(g.t.n6Jo3E));
              }),
        },
        m = S;
    },
    414798(e, t, n) {
      n.d(t, { A: () => r });
      var i = n(228366);
      let r = {
        startTyping(e) {
          i.h.dispatch({ type: "TYPING_START_LOCAL", channelId: e });
        },
        stopTyping(e) {
          i.h.dispatch({ type: "TYPING_STOP_LOCAL", channelId: e });
        },
      };
    },
    863610(e, t, n) {
      n.d(t, { U: () => p, n: () => A });
      var i = n(627968),
        r = n(64700),
        l = n(503698),
        a = n.n(l),
        s = n(419354),
        o = n(717421),
        d = n(866323),
        u = n(597619),
        c = n(872293);
      let h = {
          config: { friction: 50, tension: 900, mass: 1 },
          unique: !0,
          initial: { dotPosition: 1 },
          from: { dotPosition: 0 },
          enter: { dotPosition: 1 },
          leave: { dotPosition: 0 },
        },
        E = { config: { duration: 2400 }, from: { dotCycle: 2.8 }, reset: !0 };
      function _(e) {
        let t = e % 2;
        return t > 1 ? 1 - (t - 1) : t;
      }
      let p = r.memo(function (e) {
          let {
              dotRadius: t,
              dotPosition: n,
              fill: l = "currentColor",
              spacing: a = 2.5,
            } = e,
            { focused: d } = (0, u.xb)(),
            c = r.useRef(!0);
          r.useEffect(() => () => void (c.current = !1), []);
          let [h] = (0, o.z)(
              () => ({
                ...E,
                to: async (e) => {
                  let t = 2.8;
                  for (; c.current; )
                    d
                      ? ((t += 4), await e({ dotCycle: t, immediate: !1 }))
                      : 2.8 !== t
                        ? ((t = 2.8), await e({ dotCycle: t, immediate: !0 }))
                        : await new Promise((e) => setTimeout(e, 1e3));
                },
              }),
              "animate-always",
              [d],
            ),
            p = (2 * t * 3 + (t / 4) * 2) / 2;
          return (0, i.jsx)(i.Fragment, {
            children: [0, 1, 2].map((e) => {
              let r = 0.25 * e,
                o = t + t * a * e;
              return (0, i.jsx)(
                s.animated.circle,
                {
                  cx: n ? n.to([0, 1], [p, o]) : o,
                  cy: t,
                  r: h.dotCycle
                    .to((e) => _(e - r))
                    .to([0, 0.4, 0.8, 1], [0.8 * t, 0.8 * t, t, t])
                    .to((e) => (d ? e : t)),
                  fill: l,
                  style: {
                    opacity: h.dotCycle
                      .to((e) => _(e - r))
                      .to([0, 0.4, 0.8, 1], [0.3, 0.3, 1, 1])
                      .to((e) => (d ? e : 1)),
                  },
                },
                e,
              );
            }),
          });
        }),
        A = r.memo(function (e) {
          let {
              dotRadius: t,
              x: n,
              y: r,
              hide: l = !1,
              themed: o = !1,
              className: E,
              ref: _,
            } = e,
            { focused: A } = (0, u.xb)();
          return (0, d.p)(
            l,
            { ...h, key: (e) => (e ? "true" : "false") },
            A ? "animate-always" : "animate-never",
          )((e, l, d) => {
            let { dotPosition: u } = e,
              { key: h } = d;
            return l
              ? null
              : (0, i.jsx)(
                  "svg",
                  {
                    ref: _,
                    x: n,
                    y: r,
                    width: 2 * t * 3 + (t / 2) * 2,
                    height: 2 * t,
                    className: a()(E, c.r, o ? c.S : null),
                    children: (0, i.jsx)(s.animated.g, {
                      style: {
                        opacity: u.to((e) => Math.min(1, Math.max(e, 0))),
                      },
                      children: (0, i.jsx)(p, { dotRadius: t, dotPosition: u }),
                    }),
                  },
                  h,
                );
          });
        });
    },
    719129(e, t, n) {
      n.d(t, { GH: () => g, Zi: () => _, c1: () => I, r6: () => T });
      var i = n(228366),
        r = n(386406),
        l = n(56562),
        a = n(328153),
        s = n(760751),
        o = n(287809),
        d = n(954571),
        u = n(723702),
        c = n(19575),
        h = n(652215);
      let E = {
        development: [0, 0, 0, 0],
        canary: [1, 0, 30, 10],
        ptb: [1, 0, 1005, 2],
        stable: [1, 0, 9001, 2],
      };
      function _() {
        return !c.Ay?.isModuleVersionAtLeast?.("discord_hook", E);
      }
      let p = null;
      async function A() {
        if (!(0, u.isWindows)())
          return Promise.reject(Error("Hook is only available on Windows"));
        if (_()) return Promise.reject(Error("Hook module is too old"));
        await c.Ay.ensureModule("discord_hook");
        let e = await c.Ay.requireModule("discord_hook");
        return (
          (function (e) {
            if (null == e.setFlags) return;
            let t = 0,
              n = o.default.getCurrentUser();
            null != n &&
              n.isStaff() &&
              (console.log("Hook: Enabling crash trigger."), (t |= 2)),
              e.setFlags(t);
          })(e),
          e
        );
      }
      async function f() {
        return null != p ? p : (p = await A());
      }
      function g(e, t) {
        return A().then((n) => {
          let o = a.Ay.getGameForPID(e),
            u = o?.name,
            c = null != o ? s.A.findGame(o) : null,
            E = null;
          return new Promise((s) => {
            let o = (e, n) => {
                d.default.track(h.HAw.HOOK_RESULT, {
                  game_name: u,
                  game_id: null == c ? null : c.id,
                  success: n,
                  error: e,
                  ...t,
                }),
                  null != E && (clearTimeout(E), (E = null)),
                  n ? s() : s((e = e ?? "Unknown hook error"));
              },
              _ = a.Ay.getOverlayOptionsForPID(e),
              p = {
                ...l.gH,
                ..._,
                elevate: a.Ay.shouldElevateProcessForPID(e),
              };
            null == p.allowHook || p.allowHook
              ? ((E = setTimeout(() => {
                  n.cancelAttachToProcess(e),
                    o("Timed out waiting for hook response", !1);
                }, 12e4)),
                n.attachToProcess(e, p, o),
                i.h.wait(() => r.A.clearElevatedProcess()))
              : s("Hook is disabled for this game");
          });
        });
      }
      function I(e) {
        return A().then((t) => {
          t.cancelAttachToProcess(e);
        });
      }
      function T() {
        return f()
          .then((e) =>
            null != e.findSteamProcess ? e.findSteamProcess() : null,
          )
          .catch(() => null);
      }
    },
    743445(e, t, n) {
      let i;
      n.d(t, { bK: () => b, jP: () => v });
      var r,
        l = n(735438),
        a = n.n(l),
        s = n(158390),
        o = n(636537),
        d = n(626584),
        u = n(865116),
        c = n(795129),
        h = n(661011),
        E = n(550642),
        _ = n(964404),
        p = n(544180),
        A = n(954571),
        f = n(509929),
        g = n(927813),
        I = n(209489),
        T = n(38405),
        S = n(292348),
        m = n(565150),
        O = n(787458),
        C = n(972711),
        N = n(652215);
      let y = new d.A("CloudUpload.tsx"),
        R = new Set([429]);
      class L extends Error {
        kind;
        phase;
        messageShort;
        constructor(e, t = {}) {
          const { cause: n, response: i } = t,
            r = L.getErrorKind(n ?? Error(`${i?.text ?? "Unknown error"}`), i),
            l =
              "server_error" === r || "client_error" === r
                ? `${e}:${r}:status_${i?.status ?? 0}`
                : `${e}:${r}`;
          super(l, { cause: n }),
            (this.name = "ResumableUploadError"),
            (this.phase = e),
            (this.kind = r),
            (this.messageShort = l);
        }
        static getErrorKind(e, t) {
          let n = t?.status ?? 0,
            i = n >= 500 && n < 600,
            r = R.has(n),
            l =
              e.message.toLowerCase().includes("network") ||
              e.message.toLowerCase().includes("terminated") ||
              e.message.toLowerCase().includes("offline") ||
              e.message.toLowerCase().includes("changed");
          return i
            ? "server_error"
            : r
              ? "client_error"
              : l
                ? "network_error"
                : "unknown";
        }
        static rejectionHandler(e) {
          return (t) => {
            if (t instanceof o.oh) throw new L(e, { response: t });
            if (t instanceof Error) throw new L(e, { cause: t });
            throw new L(e, { cause: Error(String(t)) });
          };
        }
        canRetry() {
          return (
            "server_error" === this.kind ||
            "network_error" === this.kind ||
            "client_error" === this.kind
          );
        }
      }
      var v =
        (((r = {}).NOT_STARTED = "NOT_STARTED"),
        (r.STARTED = "STARTED"),
        (r.UPLOADING = "UPLOADING"),
        (r.ERROR = "ERROR"),
        (r.COMPLETED = "COMPLETED"),
        (r.CANCELED = "CANCELED"),
        (r.REMOVED_FROM_MSG_DRAFT = "REMOVED_FROM_MSG_DRAFT"),
        r);
      class D {
        numUploadAttempts;
        timing = {};
        compressAndExtractDisabled;
        fileAlreadyPrepped;
        imageCompressionQuality;
        videoCompressionQuality;
        imageEncoderType;
        convertedMimeType;
        sourceMediaWidth;
        sourceMediaHeight;
        sourceMediaFormat;
        sourceVideoBitrate;
        sourceVideoFramerate;
        videoDurationMs;
        sourceVideoProfile;
        sourceVideoLevel;
        uploadedImageWidth;
        uploadedImageHeight;
        targetVideoWidth;
        targetVideoHeight;
        targetVideoBitrate;
        targetVideoCodec;
        targetVideoFramerate;
        targetVideoIsHdr;
        hevcIsSupported;
        progressUpdateGranularity;
        psnr;
        ssim;
        origin;
        psnrMeasurementLatencyMs;
        ssimMeasurementLatencyMs;
        uploadResumptionCount = 0;
        uploadResumptionPosition = 0;
        uploadResumptionReason;
        conversionFailureReason;
      }
      i = n(122924).A;
      class b extends m.Ay {
        status = "NOT_STARTED";
        channelId;
        responseUrl;
        responseUrlSetAt;
        currentSize;
        preCompressionSize;
        postCompressionSize;
        loaded = 0;
        reactNativeFileIndex;
        error;
        reactNativeFilePrepped = !1;
        startTime;
        uploadAnalytics = new D();
        uploadAttempts = 0;
        _abortController;
        _xhr;
        _aborted = !1;
        _uploadHttpClient;
        _libdiscoreEnabled;
        static fromJson(e) {
          let { item: t, channelId: n, reactNativeFileIndex: i } = e,
            r = new b(t, n, i);
          return (
            Object.entries(e).forEach((e) => {
              let [t, n] = e;
              t.startsWith("_") || (r[t] = n);
            }),
            "COMPLETED" !== r.status && (r.status = "NOT_STARTED"),
            r
          );
        }
        constructor(e, t, n, i) {
          super(e),
            (this.channelId = t),
            (this.preCompressionSize = e.file?.size ?? 0),
            (this.currentSize = e.file?.size ?? 0),
            (this.reactNativeFileIndex = n),
            null != i && (this.allowOptimization = i),
            e.platform === m.xz.WEB &&
              null != e.compressionMetadata &&
              (this.mimeType = e.compressionMetadata.originalContentType),
            (this._abortController = new AbortController()),
            null != this.origin &&
              (this.uploadAnalytics.origin =
                "string" == typeof this.origin
                  ? this.origin
                  : m.Cj[this.origin]),
            (this._uploadHttpClient = new C.nd()),
            (this._libdiscoreEnabled = !1);
        }
        parseRangeHeader(e) {
          let t = e.match(/^bytes=(\d+)-(\d+)(?:\/\d+)?$/);
          return null == t ? null : [parseInt(t[1], 10), parseInt(t[2], 10)];
        }
        createResumeAwareProgressFn = (e) => (t) => {
          let n = t.loaded + e,
            i = t.total + e,
            r = n - this.loaded;
          this.emit("progress", n, i, r), (this.loaded = n);
        };
        retryOpts() {
          return this.item.platform === m.xz.REACT_NATIVE
            ? {
                timeout: +g.A.Millis.HOUR,
                backoff: new s.A(
                  0.5 * g.A.Millis.SECOND,
                  30 * g.A.Millis.MINUTE,
                ),
                retries: 12,
              }
            : { timeout: +g.A.Millis.HOUR, retries: 12, backoff: new s.A() };
        }
        createAttachmentUrlRetryOpts() {
          return this.item.platform === m.xz.REACT_NATIVE
            ? {
                timeout: {
                  response: 30 * g.A.Millis.SECOND,
                  deadline: 30 * g.A.Millis.MINUTE,
                },
                backoff: new s.A(
                  0.5 * g.A.Millis.SECOND,
                  60 * g.A.Millis.SECOND,
                ),
                retries: 8,
              }
            : this.retryOpts();
        }
        supportsResume() {
          return (
            this._libdiscoreEnabled || this.item.platform !== m.xz.REACT_NATIVE
          );
        }
        async uploadFileToCloud() {
          let e, t;
          if (null == this.responseUrl)
            throw Error("_uploadFileToCloud - responseUrl is not set");
          return (
            y.log(
              `Uploading ${this.id}`,
              this.item.platform === m.xz.REACT_NATIVE
                ? `filename=${this.item.filename}, uri=${this.item.uri}`
                : `filename=${this.item.file.name}`,
            ),
            this.item.platform === m.xz.REACT_NATIVE
              ? (t =
                  null !=
                    (e = {
                      type: this.item.mimeType,
                      uri: this.item.uri,
                      name: this.item.filename,
                    }).type && "application/json" !== e.type
                    ? e.type
                    : "application/octet-stream")
              : ((e = this.item.file), (t = "application/octet-stream")),
            (0, C.gd)(this.item) &&
              ((this._uploadHttpClient = new C.gp()),
              (this._libdiscoreEnabled = !0),
              y.log("Using libdiscore client for file upload")),
            await this.uploadFileWithResumption(this.responseUrl, e, t)
          );
        }
        async getResumePosition(e) {
          let t = {
            url: e,
            headers: { "Content-Range": "bytes */*" },
            rejectWithError: !0,
            retries: 0,
            timeout: { deadline: 30 * g.A.Millis.SECOND },
            signal: this._abortController.signal,
          };
          return await this._uploadHttpClient
            .doUpload(t)
            .then((e) =>
              200 === e.status || 201 === e.status
                ? this.currentSize
                : L.rejectionHandler("status_check")(e),
            )
            .catch((e) => {
              if (e instanceof o.oh && 308 === e.status) {
                let t = this.parseRangeHeader(e.headers.range ?? "");
                return null != t ? t[1] + 1 : 0;
              }
              return L.rejectionHandler("status_check")(e);
            });
        }
        async startOrResumeUpload(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (
            (y.log(
              `Attempting to upload attachment with resumeFrom: ${t} and attempts: ${this.uploadAttempts}`,
            ),
            t > 0)
          )
            this.uploadAnalytics.uploadResumptionCount++,
              (e.headers = {
                ...(e.headers ?? {}),
                "Content-Range": `bytes ${t}-${this.currentSize - 1}/${this.currentSize}`,
              });
          else if (null != e.headers) {
            let { "Content-Range": t, ...n } = e.headers;
            e.headers = n;
          }
          e.onRequestProgress = a().throttle(
            this.createResumeAwareProgressFn(t),
            50,
          );
          let n = await this._uploadHttpClient
            .doUpload(e, { fileByteRange: { start: t } })
            .catch(L.rejectionHandler("upload"));
          if (200 !== n.status && 201 !== n.status)
            throw new L("upload", { response: n });
          return n;
        }
        async uploadFileWithResumption(e, t, n) {
          let { timeout: i, backoff: r, retries: l } = this.retryOpts(),
            s = {
              url: e,
              body: t,
              headers: { "Content-Type": n },
              signal: this._abortController.signal,
              onRequestProgress: a().throttle(
                this.createResumeAwareProgressFn(0),
                50,
              ),
              retries: 0,
              rejectWithError: !0,
              timeout: i,
            },
            o = 0;
          for (; this.uploadAttempts <= l && !this._aborted; ) {
            this.uploadAttempts++,
              (this.uploadAnalytics.numUploadAttempts = this.uploadAttempts);
            try {
              let e = this.responseUrl;
              if (
                (await this.ensureFreshResponseUrl(),
                (s.url = this.responseUrl),
                e !== this.responseUrl)
              )
                (o = 0), (this.loaded = 0);
              else if (this.uploadAttempts > 1) {
                let e = await this.trackTime(
                  "resumptionCheckTimeMs",
                  async () => await this.getResumePosition(this.responseUrl),
                );
                (this.uploadAnalytics.uploadResumptionPosition = e),
                  (o = this.supportsResume() ? e : 0),
                  (this.loaded = o);
              }
              return await this.startOrResumeUpload(s, o);
            } catch (e) {
              if (e instanceof L && e.canRetry()) {
                y.warn(
                  `Error uploading ${this.id}: ${e.message}, attempting resumption`,
                ),
                  (this.uploadAnalytics.uploadResumptionReason =
                    e.messageShort),
                  await I.A.awaitOnline();
                let t = r.fail();
                y.log(
                  `Waiting ${t}ms before attachment upload attempt ${this.uploadAttempts + 1}`,
                ),
                  await new Promise((e) => setTimeout(e, t));
              } else
                throw (
                  (y.warn(
                    `Unrecoverable error uploading ${this.id}: ${e.message}`,
                  ),
                  e)
                );
            }
          }
          throw Error(`Upload failed after ${this.uploadAttempts} attempts`);
        }
        async getSize() {
          return this.currentSize ?? 0;
        }
        async trackTime(e, t) {
          let n = performance.now();
          try {
            return await t();
          } finally {
            this.uploadAnalytics.timing[e] = performance.now() - n;
          }
        }
        async upload() {
          if ("COMPLETED" === this.status) return;
          if (
            (this.setStatus("STARTED"),
            (this.startTime = performance.now()),
            this.trackUploadStart(),
            this.isCancelled())
          )
            return void this.handleComplete(this.id);
          if (this.allowOptimization && this.item.platform === m.xz.WEB) {
            let e = await b.tryConvertToWebP(
              this.item.file,
              () => this._aborted,
              this.id,
            );
            null != e &&
              (null != e.convertedFile &&
                ((this.item.file = e.convertedFile),
                (this.currentSize = e.convertedFile.size)),
              null != e.convertedMimeType &&
                (this.uploadAnalytics.convertedMimeType = e.convertedMimeType),
              null != e.hashTimeMs &&
                (this.uploadAnalytics.timing.hashTimeMs = e.hashTimeMs),
              null != e.conversionFailureReason &&
                (this.uploadAnalytics.conversionFailureReason =
                  e.conversionFailureReason),
              (this.uploadAnalytics.timing.compressTimeMs = e.compressTimeMs));
          }
          let e = await i.getUploadPayload(this),
            t = (0, O.B)(this.item.target);
          if (null == e.filename || "" === e.filename) {
            y.error("File does not have a filename.", JSON.stringify(e)),
              this.handleError(N.t02.INVALID_FILE_ASSET);
            return;
          }
          if (0 === this.currentSize && null != this.item.file)
            try {
              let e = await (0, c._)(this.item.file);
              e > 0 && (this.currentSize = e);
            } catch (t) {
              y.warn("Failed to detect file size, proceeding with original", {
                filename: e.filename,
                error: t instanceof Error ? t.message : String(t),
              });
            }
          if (0 === this.currentSize)
            return void this.handleError(N.t02.ENTITY_EMPTY);
          let n = (0, E.R8)({
              location: "CloudUpload.upload.postCompressionCheck",
            }),
            r = (0, E.Jy)(n, t.getMaxFileSize(this.channelId));
          if ((this.currentSize ?? 0) > r)
            return void this.handleError(N.t02.ENTITY_TOO_LARGE);
          if (u.Ay.get("upload_fail_50") && 0.5 > Math.random())
            return void setTimeout(() => {
              this.handleError(500);
            }, 1e3);
          try {
            y.log(`Requesting upload url for ${this.id}`);
            let n = await this.trackTime("getUploadUrlTimeMs", async () => {
              let n = t.getCreateAttachmentURL(this.channelId);
              return await o.Bo.post({
                url: n,
                body: { files: [e] },
                ...this.createAttachmentUrlRetryOpts(),
                rejectWithError: !1,
              });
            });
            this.setResponseUrl(n.body.attachments[0].upload_url),
              this.setUploadedFilename(n.body.attachments[0].upload_filename);
          } catch (t) {
            let e = t?.body?.code ?? t.status;
            e !== N.t02.ENTITY_TOO_LARGE &&
              (y.error(
                `Requesting upload url failed with code ${e ?? JSON.stringify(t.body)} for ${this.id}`,
              ),
              T.A.captureException(t)),
              this.handleError(e);
            return;
          }
          try {
            await this.trackTime(
              "uploadTimeMs",
              async () => await this.uploadFileToCloud(),
            ),
              this.trackUploadFinished("COMPLETED"),
              this.handleComplete(this.id);
          } catch (e) {
            this.isCancelled()
              ? this.handleComplete(e)
              : (y.info(`Error: status ${e.status} for ${this.id}`),
                this.handleError(e));
          }
        }
        async reactNativeCompressAndExtractData() {
          if (!(0, O.B)(this.item.target).shouldReactNativeCompressUploads)
            return (
              (this.uploadAnalytics.compressAndExtractDisabled = !0),
              y.log(
                "reactNativeCompressAndExtractData() disabled by upload target",
              ),
              this
            );
          if (!0 === this.reactNativeFilePrepped)
            return (
              (this.uploadAnalytics.fileAlreadyPrepped = !0),
              y.log(
                `reactNativeCompressAndExtractData() file already prepped - ${this.id}`,
              ),
              this
            );
          y.log(`Starting compression/conversion for ${this.id}`);
          let e = await this.trackTime(
            "compressTimeMs",
            async () => await (0, f.Si)(this, this.reactNativeFileIndex ?? 0),
          );
          if (null == e || null == e.file)
            return (
              y.error(`Failed to get compressed file for ${this.id}`), this
            );
          let t = e.uri,
            n = e.file.name;
          if (
            ((0, m.Sm)(e.file) &&
              ((this.uploadAnalytics.imageCompressionQuality =
                e.file.imageCompressionQuality),
              (this.uploadAnalytics.videoCompressionQuality =
                e.file.videoCompressionQuality),
              (this.uploadAnalytics.imageEncoderType = e.file.imageEncoderType),
              e.file.isImage &&
                ((this.uploadAnalytics.sourceMediaWidth = e.file.sourceWidth),
                (this.uploadAnalytics.sourceMediaHeight = e.file.sourceHeight),
                (this.uploadAnalytics.uploadedImageWidth =
                  e.file.uploadedImageWidth),
                (this.uploadAnalytics.uploadedImageHeight =
                  e.file.uploadedImageHeight)),
              void 0 !== e.file.videoMetadata &&
                ((this.uploadAnalytics.sourceMediaWidth =
                  e.file.videoMetadata.width),
                (this.uploadAnalytics.sourceMediaHeight =
                  e.file.videoMetadata.height),
                (this.uploadAnalytics.sourceMediaFormat =
                  e.file.videoMetadata.format),
                (this.uploadAnalytics.sourceVideoBitrate =
                  e.file.videoMetadata.bitRate),
                (this.uploadAnalytics.sourceVideoFramerate =
                  e.file.videoMetadata.frameRate),
                (this.uploadAnalytics.videoDurationMs =
                  e.file.videoMetadata.durationMs),
                (this.uploadAnalytics.sourceVideoProfile =
                  e.file.videoMetadata.sourceProfile),
                (this.uploadAnalytics.sourceVideoLevel =
                  e.file.videoMetadata.sourceLevel)),
              void 0 !== e.file.encodingConfig &&
                ((this.uploadAnalytics.targetVideoWidth =
                  e.file.encodingConfig.targetWidth),
                (this.uploadAnalytics.targetVideoHeight =
                  e.file.encodingConfig.targetHeight),
                (this.uploadAnalytics.targetVideoBitrate =
                  e.file.encodingConfig.targetBitrate),
                (this.uploadAnalytics.targetVideoCodec = e.file.encodingConfig
                  .useHEVC
                  ? "hvc1"
                  : "avc1"),
                (this.uploadAnalytics.targetVideoFramerate =
                  e.file.encodingConfig.frameRate),
                (this.uploadAnalytics.targetVideoIsHdr =
                  e.file.encodingConfig.createHDR),
                (this.uploadAnalytics.hevcIsSupported =
                  e.file.encodingConfig.hevcIsSupported),
                (this.uploadAnalytics.progressUpdateGranularity =
                  e.file.encodingConfig.progressUpdateGranularity)),
              (this.uploadAnalytics.psnr = e.file.psnr),
              (this.uploadAnalytics.ssim = e.file.ssim),
              (this.uploadAnalytics.origin = e.file.origin),
              (this.uploadAnalytics.psnrMeasurementLatencyMs =
                e.file.psnrMeasurementLatencyMs),
              (this.uploadAnalytics.ssimMeasurementLatencyMs =
                e.file.ssimMeasurementLatencyMs)),
            (this.filename = n),
            null == n || null == t || null == e.file.type)
          )
            throw (
              (y.error(
                `Insufficient file data: ${{ filename: n, uri: t, type: e.file.type }} for ${this.id}`,
              ),
              Error(
                `Insufficient file data: ${{ filename: n, uri: t, type: e.file.type }}`,
              ))
            );
          let i = n.split(".").pop()?.toLowerCase(),
            r = "jpg" === i || "jpeg" === i ? "image/jpeg" : e.file.type;
          this.uploadAnalytics.convertedMimeType = r;
          let l = e.fileSize ?? (await (0, S.dm)(t)).size;
          if (
            ((this.postCompressionSize = l), (this.currentSize = l), null == l)
          )
            throw (
              (y.error(`Size missing from file data for ${this.id}`),
              Error("Size missing from file data"))
            );
          return (
            y.log(
              `Completed compression and conversion. Output size=${l} bytes; filename=${n}; uri=${t}; originalMimeType=${this.mimeType}; mimeType=${r} for ${this.id}`,
            ),
            (this.item = { ...this.item, uri: t, filename: n, mimeType: r }),
            (this.reactNativeFilePrepped = !0),
            this
          );
        }
        static async tryConvertToWebP(e, t, i) {
          let r,
            l,
            a = (0, h.i)({ location: "CloudUpload.maybeConvertToWebP" });
          if (!a.enabled)
            return (
              y.warn(`webp conversion skipped for ${i}: not enabled`), null
            );
          if (null == e)
            return y.warn(`webp conversion skipped for ${i}: no file`), null;
          if (null != a.maxFileSizeBytes && e.size > a.maxFileSizeBytes)
            return y.warn(`webp conversion skipped for ${i}: too big`), null;
          if (t()) return null;
          let s = performance.now(),
            o = { compressTimeMs: 0 };
          try {
            let a = await Promise.all([n.e("96904"), n.e("87096")]).then(
              n.bind(n, 989707),
            );
            if (
              ((l = a.ConversionFailureReason),
              (r = await a.maybeConvertToWebP(e)),
              t())
            )
              return null;
            if (r.success && null != r.convertedBlob)
              y.log(
                `webp conversion worked for ${i}: ${r.sizeBefore} -> ${r.sizeAfter} bytes (${r.compressionRatio.toFixed(2)}x)`,
              ),
                (o.convertedFile = new File([r.convertedBlob], e.name, {
                  type: "image/webp",
                  lastModified: e.lastModified,
                })),
                (o.convertedMimeType = "image/webp"),
                (o.hashTimeMs = r.hashTimeMs ?? void 0);
            else {
              let e = r.reason ?? l.UNKNOWN_ERROR;
              y.log(`webp conversion skipped for ${i}: ${e}`),
                (o.conversionFailureReason = e);
            }
          } catch (e) {
            y.warn(`webp conversion failed for ${i}:`, e),
              (o.conversionFailureReason = l?.UNKNOWN_ERROR ?? "unknown_error");
          }
          let d = Math.round(performance.now() - s);
          return (o.compressTimeMs = r?.compressTimeMs ?? d), o;
        }
        handleError(e) {
          this.setStatus("ERROR"),
            (this.error = e),
            this.trackUploadFinished("ERROR");
          try {
            this.emit("error", e);
          } catch {}
          this.removeAllListeners();
        }
        handleComplete(e) {
          this.setStatus("COMPLETED"),
            y.log(`Upload complete for ${this.id}`),
            this.emit("complete", e),
            this.removeAllListeners();
        }
        _cancel(e, t) {
          y.log(t),
            (this._aborted = !0),
            this._abortController.abort(),
            this.trackUploadFinished(e),
            "COMPLETED" === this.status && this.delete(),
            this.setStatus(e),
            this.emit("complete"),
            this.removeAllListeners();
        }
        cancel() {
          this._cancel("CANCELED", `Cancelled called for ${this.id}`);
        }
        removeFromMsgDraft() {
          this._cancel(
            "REMOVED_FROM_MSG_DRAFT",
            `Removed from draft for ${this.id}`,
          );
        }
        isCancelled() {
          return (
            "CANCELED" === this.status ||
            "REMOVED_FROM_MSG_DRAFT" === this.status
          );
        }
        resetState() {
          return (
            (this.status = "NOT_STARTED"),
            (this.uploadedFilename = void 0),
            (this.responseUrl = void 0),
            (this.responseUrlSetAt = void 0),
            (this.error = void 0),
            (this.startTime = void 0),
            (this.uploadAnalytics = new D()),
            (this.uploadAttempts = 0),
            (this._aborted = !1),
            (this._abortController = new AbortController()),
            super.resetState()
          );
        }
        async delete() {
          if (null == this.uploadedFilename) return;
          let e = (0, O.B)(this.item.target).getDeleteUploadURL(
            this.uploadedFilename,
          );
          try {
            await o.Bo.del(e);
          } catch {}
        }
        setResponseUrl(e) {
          (this.responseUrl = e), (this.responseUrlSetAt = Date.now());
        }
        static isResponseUrlStale(e) {
          if (null == e) return !0;
          let t = 12 * g.A.Millis.HOUR;
          return Date.now() - e > t;
        }
        async ensureFreshResponseUrl() {
          if (!b.isResponseUrlStale(this.responseUrlSetAt)) return;
          let e = await i.getUploadPayload(this),
            t = (0, O.B)(this.item.target).getCreateAttachmentURL(
              this.channelId,
            ),
            n = await o.Bo.post({
              url: t,
              body: { files: [e] },
              ...this.createAttachmentUrlRetryOpts(),
              rejectWithError: !1,
            });
          if (!n.ok || n.body?.attachments?.[0] == null)
            throw new L("upload", { response: n });
          this.setResponseUrl(n.body.attachments[0].upload_url),
            this.setUploadedFilename(n.body.attachments[0].upload_filename);
        }
        setStatus(e) {
          this.status = e;
        }
        setFilename(e) {
          this.filename = e;
        }
        setUploadedFilename(e) {
          this.uploadedFilename = e;
        }
        trackUploadStart() {
          A.default.track(N.HAw.ATTACHMENT_UPLOAD_STARTED, {
            file_size: this.currentSize,
            mime_type: this.mimeType ?? "unknown",
            video_upload_quality: _.Ay.videoUploadQuality,
            data_saving_mode: _.Ay.dataSavingMode,
            low_quality_image_mode: _.Ay.dataSavingMode,
            channel_id: this.channelId,
            connection_type: p.A.getType(),
            effective_connection_speed: p.A.getEffectiveConnectionSpeed(),
            service_provider: p.A.getServiceProvider(),
          });
        }
        trackUploadFinished(e) {
          let t =
            null != this.startTime ? performance.now() - this.startTime : -1;
          A.default.track(N.HAw.ATTACHMENT_UPLOAD_FINISHED, {
            duration_ms: t,
            file_size: this.currentSize,
            pre_compression_file_size: this.preCompressionSize,
            final_state: e,
            mime_type: this.mimeType ?? "unknown",
            num_upload_attempts: this.uploadAnalytics.numUploadAttempts ?? 1,
            error_code: this.error,
            video_upload_quality: _.Ay.videoUploadQuality,
            data_saving_mode: _.Ay.dataSavingMode,
            low_quality_image_mode: _.Ay.dataSavingMode,
            compress_time_ms: this.uploadAnalytics.timing.compressTimeMs,
            get_upload_url_time_ms:
              this.uploadAnalytics.timing.getUploadUrlTimeMs,
            upload_time_ms: this.uploadAnalytics.timing.uploadTimeMs,
            converted_mime_type:
              this.uploadAnalytics.convertedMimeType ?? "unknown",
            image_compression_quality:
              this.uploadAnalytics.imageCompressionQuality ?? 0,
            video_compression_quality:
              this.uploadAnalytics.videoCompressionQuality ?? "unknown",
            image_encoder_type:
              this.uploadAnalytics.imageEncoderType ?? "unknown",
            was_converted:
              null != this.uploadAnalytics.convertedMimeType &&
              this.mimeType !== this.uploadAnalytics.convertedMimeType,
            was_compressed: this.currentSize < this.preCompressionSize,
            source_media_width: this.uploadAnalytics.sourceMediaWidth,
            source_media_height: this.uploadAnalytics.sourceMediaHeight,
            source_media_format: this.uploadAnalytics.sourceMediaFormat,
            uploaded_image_width: this.uploadAnalytics.uploadedImageWidth,
            uploaded_image_height: this.uploadAnalytics.uploadedImageHeight,
            source_video_bitrate: this.uploadAnalytics.sourceVideoBitrate,
            video_duration_ms: this.uploadAnalytics.videoDurationMs,
            source_video_profile_name: this.uploadAnalytics.sourceVideoProfile,
            source_video_profile_level: this.uploadAnalytics.sourceVideoLevel,
            target_video_width: this.uploadAnalytics.targetVideoWidth,
            target_video_height: this.uploadAnalytics.targetVideoHeight,
            target_video_bitrate: this.uploadAnalytics.targetVideoBitrate,
            target_video_codec: this.uploadAnalytics.targetVideoCodec,
            target_video_framerate: this.uploadAnalytics.targetVideoFramerate,
            target_video_is_hdr: this.uploadAnalytics.targetVideoIsHdr,
            hevc_is_supported: this.uploadAnalytics.hevcIsSupported,
            progress_update_granularity:
              this.uploadAnalytics.progressUpdateGranularity,
            source_video_framerate: this.uploadAnalytics.sourceVideoFramerate,
            channel_id: this.channelId,
            hash_time_ms: this.uploadAnalytics.timing.hashTimeMs,
            psnr: this.uploadAnalytics.psnr,
            ssim: this.uploadAnalytics.ssim,
            origin: this.uploadAnalytics.origin,
            psnr_measurement_latency_ms:
              this.uploadAnalytics.psnrMeasurementLatencyMs,
            ssim_measurement_latency_ms:
              this.uploadAnalytics.ssimMeasurementLatencyMs,
            upload_resumption_count: this.uploadAnalytics.uploadResumptionCount,
            upload_resumption_reason:
              this.uploadAnalytics.uploadResumptionReason,
            upload_resumption_position:
              this.uploadAnalytics.uploadResumptionPosition,
            upload_resumption_check_time_ms:
              this.uploadAnalytics.timing.resumptionCheckTimeMs,
            conversion_failure_reason:
              this.uploadAnalytics.conversionFailureReason,
            upload_http_client: this._libdiscoreEnabled
              ? "libdiscore"
              : "httputils",
            connection_type: p.A.getType(),
            effective_connection_speed: p.A.getEffectiveConnectionSpeed(),
            service_provider: p.A.getServiceProvider(),
          });
        }
      }
    },
    723444(e, t, n) {
      n.d(t, { I: () => r });
      var i = n(425059);
      function r() {
        return new i.A();
      }
    },
    782091(e, t, n) {
      n.d(t, {
        J4: () => p,
        JH: () => _,
        dL: () => f,
        et: () => A,
        xy: () => E,
      });
      var i,
        r = n(17928),
        l = n(734057),
        a = n(71393),
        s = n(576705),
        o = n(977997),
        d = n(170148),
        u = n(360469),
        c = n(652215),
        h = n(985018),
        E =
          (((i = {})[(i.CAN_LAUNCH = 0)] = "CAN_LAUNCH"),
          (i[(i.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1)] =
            "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION"),
          (i[(i.NO_CHANNEL_CONNECT_PERMISSION = 2)] =
            "NO_CHANNEL_CONNECT_PERMISSION"),
          (i[(i.NO_CHANNEL = 3)] = "NO_CHANNEL"),
          (i[(i.NO_GUILD = 4)] = "NO_GUILD"),
          (i[(i.IS_AFK_CHANNEL = 5)] = "IS_AFK_CHANNEL"),
          (i[(i.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 6)] =
            "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS"),
          (i[(i.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL = 7)] =
            "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL"),
          i);
      function _(e) {
        let {
            channelId: t,
            ChannelStore: n,
            GuildStore: i,
            PermissionStore: r,
            VoiceStateStore: l,
          } = e,
          a = n.getChannel(t);
        if (null == a) return 3;
        if (!u.H5.includes(a.type)) return 7;
        if (!(0, d.A)()) return 6;
        if (null != a && !a.isPrivate()) {
          let e = a.getGuildId();
          if (null == e) return 4;
          let n = i.getGuild(e);
          if (n?.afkChannelId === a.id) return 5;
          let s = r.can(c.xBc.CONNECT, a);
          if (!r.can(c.xBc.USE_EMBEDDED_ACTIVITIES, a)) return 1;
          let o = l.getCurrentClientVoiceChannelId(a.getGuildId()) === t;
          if (a.isVocal() && !o && !s) return 2;
        }
        return 0;
      }
      function p(e) {
        return _({
          channelId: e,
          ChannelStore: l.A,
          GuildStore: a.A,
          PermissionStore: s.A,
          VoiceStateStore: o.A,
        });
      }
      function A(e) {
        return (0, r.bG)(
          [l.A, a.A, s.A, o.A],
          () =>
            _({
              channelId: e,
              ChannelStore: l.A,
              GuildStore: a.A,
              PermissionStore: s.A,
              VoiceStateStore: o.A,
            }),
          [e],
        );
      }
      function f(e) {
        switch (e) {
          case 0:
            return h.intl.string(h.t.qJvTKQ);
          case 1:
            return h.intl.string(h.t.hHGrWz);
          default:
            return h.intl.string(h.t.j29zCr);
        }
      }
    },
    104171(e, t, n) {
      n.d(t, { Ay: () => O, DN: () => A, mt: () => f }), n(321073);
      var i = n(627968),
        r = n(64700),
        l = n(503698),
        a = n.n(l),
        s = n(950305),
        o = n(939249),
        d = n(983851),
        u = n(573435),
        c = n(342296),
        h = n(889227),
        E = n(287809),
        _ = n(3451),
        p = n(227568);
      let A = { SIZE_16: 16, SIZE_24: 24, SIZE_32: 32, SIZE_56: 56 },
        f = "user-icon";
      function g(e, t) {
        if (e === f) return `user-icon-${t}`;
        let n = e instanceof h.A ? e : null != e ? e.user : null;
        return null != n ? n.id : `user-${t}`;
      }
      function I(e) {
        return (0, i.jsx)("div", { className: p.In, children: e });
      }
      function T(e) {
        return (0, i.jsx)("div", { className: a()(p.In, p.iq), children: e });
      }
      function S() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : A.SIZE_24;
        switch (e) {
          case A.SIZE_16:
            return p.nc;
          case A.SIZE_24:
            return p.q1;
          case A.SIZE_32:
            return p.Hb;
          case A.SIZE_56:
            return p.dl;
          default:
            return p.q1;
        }
      }
      class m extends r.PureComponent {
        static defaultProps = {
          max: 10,
          renderMoreUsers: I,
          renderIcon: !1,
          showDefaultAvatarsForNullUsers: !1,
          size: A.SIZE_24,
        };
        state = { popoutUserId: null };
        _ref = r.createRef();
        defaultRenderUser = (e, t, n) => {
          let r,
            {
              showUserPopout: l,
              guildId: d,
              size: u,
              dimEmptyUsers: c,
            } = this.props;
          if (null == e)
            if (!this.props.showDefaultAvatarsForNullUsers)
              return (0, i.jsx)("div", { className: a()(p.F2, { [p.F_]: c }) });
            else {
              let e = (n ?? 0) % _.A.DEFAULT_AVATARS.length,
                t = _.A.DEFAULT_AVATARS[e];
              return (0, i.jsx)("img", { src: t, alt: "", className: p.my });
            }
          if (e === f) {
            let e = (function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : A.SIZE_24;
              switch (e) {
                case A.SIZE_16:
                  return 10;
                case A.SIZE_24:
                  return 15;
                case A.SIZE_32:
                  return 20;
                case A.SIZE_56:
                  return 35;
                default:
                  return 10;
              }
            })(u);
            r = (0, i.jsx)(s.n, {
              size: "custom",
              color: "currentColor",
              width: e,
              height: e,
            });
          } else
            r = (0, i.jsx)("img", {
              src: e.getAvatarURL(d, u),
              alt: e.username,
              className: p.my,
            });
          let h = (0, i.jsx)("div", { className: p.WK, children: r }, g(e, n));
          return l && e !== f
            ? (0, i.jsx)(
                o.D,
                {
                  className: p.UC,
                  onClick: () => {
                    null != this._ref.current &&
                      null != e &&
                      this.setState({ popoutUserId: e.id });
                  },
                  tabIndex: -1,
                  children: h,
                },
                g(e, n),
              )
            : h;
        };
        renderUsers() {
          let {
              users: e,
              max: t,
              renderUser: n = this.defaultRenderUser,
              size: r,
              extraDetail: l,
            } = this.props,
            a = [],
            s = e.length === t ? e.length : t - 1,
            o = this.renderMoreUsers(s),
            d = 0;
          for (; d < s && d < e.length; ) {
            let t = null == o && null == l && d === e.length - 1,
              s = n(e[d], t, d);
            a.push(
              t
                ? (0, i.jsx)(
                    "div",
                    { className: p.H, children: s },
                    g(e[d] ?? null, d),
                  )
                : (0, i.jsx)(
                    u.Ay,
                    {
                      className: p.aV,
                      height: r,
                      width: r,
                      mask: u.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
                      children: s,
                    },
                    g(e[d], d),
                  ),
            ),
              d++;
          }
          return null != l ? a.push(l) : null != o && a.push(o), a;
        }
        renderMoreUsers(e) {
          let {
              max: t,
              count: n,
              hideMoreUsers: l,
              renderMoreUsers: a,
              users: s,
              dimEmptyUsers: o,
            } = this.props,
            d = Math.min(e, s.length),
            u = o ? T : a;
          if (!l) {
            if (null != n) {
              if (n >= t)
                return (0, i.jsx)(
                  r.Fragment,
                  { children: u(`${t}+`, t) },
                  "more-users",
                );
              else if (n > s.length) {
                let e = n - s.length;
                return (0, i.jsx)(
                  r.Fragment,
                  { children: u(`+${e}`, e) },
                  "more-users",
                );
              }
            } else if (d < s.length) {
              let e = Math.min(s.length - d, 99);
              return (0, i.jsx)(
                r.Fragment,
                { children: u(`+${e}`, e) },
                "more-users",
              );
            }
          }
        }
        renderIcon() {
          let { renderLeadingIcon: e, renderIcon: t } = this.props;
          return t
            ? null != e
              ? e(p.Kk)
              : (0, i.jsx)(d.H, {
                  size: "md",
                  color: "currentColor",
                  colorClass: p.__invalid_foreground,
                  className: p.Kk,
                })
            : null;
        }
        render() {
          let {
              className: e,
              size: t,
              users: n,
              guildId: r,
              showUserPopout: l,
              useFallbackUserForPopout: s,
            } = this.props,
            { popoutUserId: o } = this.state;
          if (null == o)
            return (0, i.jsxs)("div", {
              className: a()(e, p.kL, S(t)),
              children: [this.renderIcon(), this.renderUsers()],
            });
          let d = n.find((e) => e instanceof h.A && e.id === o),
            u = s && null == E.default.getUser(o);
          return (0, i.jsx)(c.A, {
            targetElementRef: this._ref,
            userId: o,
            user: u && null != d ? d : void 0,
            guildId: r,
            fixed: !0,
            shouldShow: !0 === l && null != o,
            onRequestClose: () => this.setState({ popoutUserId: null }),
            clickTrap: !0,
            children: (n) =>
              (0, i.jsxs)("div", {
                className: a()(e, p.kL, S(t)),
                ref: this._ref,
                ...n,
                children: [this.renderIcon(), this.renderUsers()],
              }),
          });
        }
      }
      let O = m;
    },
    861638(e, t, n) {
      n.d(t, { Ht: () => j, Vc: () => q, as: () => K }), n(321073);
      var i = n(132500),
        r = n(71931),
        l = n(17928),
        a = n(506774),
        s = n(228366),
        o = n(237774),
        d = n(626584),
        u = n(366853),
        c = n(495544),
        h = n(885576),
        E = n(763827),
        _ = n(954571),
        p = n(927813),
        A = n(38405),
        f = n(616005),
        g = n(789999),
        I = n(604594),
        T = n(565783),
        S = n(652215);
      let m = 15 * p.A.Millis.MINUTE,
        O = p.A.Millis.SECOND,
        C = "LAST_CLIENT_HEARTBEAT_SESSION",
        N = "user",
        y = new d.A("SessionHeartbeatScheduler"),
        R = null,
        L = null,
        v = 0,
        D = 0,
        b = { state: "uninitialized" },
        U = E.A.getState(),
        P = (0, g.R)(),
        M = c.default.getToken();
      function w() {
        (function () {
          if (null == R) return !1;
          switch (R.type) {
            case "timeout":
              clearTimeout(R.id);
              break;
            case "interval":
              clearInterval(R.id);
              break;
            default:
              R.type;
          }
          return (R = null), !0;
        })() &&
          (A.A.addBreadcrumb({
            category: N,
            message: "Stopping Analytics Heartbeat",
          }),
          (0, o.p)());
      }
      async function G() {
        let e,
          t = Date.now(),
          n = await j(),
          i = Date.now();
        if (null == n)
          return void A.A.captureException(
            Error(
              `Null session when tracking session heartbeat. Waited ${i - t}ms`,
            ),
          );
        A.A.addBreadcrumb({
          category: N,
          message: "Tracking Heartbeat",
          data: { initialized: n.createdAtTimestamp },
        });
        let r = {
          client_heartbeat_initialization_timestamp: n.createdAtTimestamp,
          client_heartbeat_version: 27,
          ...(0, f.Q)(),
          ...((e = h.A.getIdleSince() ?? 0),
          {
            is_idle: h.A.isIdle(),
            idle_duration_ms: Date.now() - e,
            is_afk: h.A.isAFK(),
            is_system_suspended: h.A.getSystemSuspended(),
            is_system_locked: h.A.getSystemLocked(),
          }),
        };
        _.default.track(S.HAw.CLIENT_HEARTBEAT, r),
          (D = performance.now()),
          (0, o.p)();
      }
      function F() {
        let e = [];
        return (
          null != M &&
            (P && e.push("foregrounded"),
            U === S.S7L.RTC_CONNECTED && e.push("rtc_connected")),
          { active: e.length > 0, ver: 27, reasons: e }
        );
      }
      function V() {
        return F().active;
      }
      function k() {
        V()
          ? (function () {
              if (null != R) return;
              let e = 0 === D ? 0 : m - (performance.now() - D);
              A.A.addBreadcrumb({
                message: `Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: ${e / 1e3} seconds. Scheduling Heartbeat`,
              }),
                (R = {
                  type: "timeout",
                  id: setTimeout(() => {
                    G(),
                      (R = {
                        type: "interval",
                        id: setInterval(() => {
                          G();
                        }, m),
                      });
                  }, e),
                });
            })()
          : w(),
          u.A.getSocket()?.handleActiveStateChange(F());
      }
      function x(e) {
        return null == e
          ? null
          : e.version !== I.Ir
            ? (y.warn(
                `Throwing away client session with invalid version: ${e.version}, expected ${I.Ir}`,
              ),
              null)
            : e;
      }
      async function H() {
        let e = await j(!1);
        null != e &&
          u.A.getSocket()?.handleUpdateTimeSpentSessionId(
            e.createdAtTimestamp,
            e.uuid,
            r.C,
          );
      }
      function B() {
        let e = c.default.getToken();
        M !== e &&
          ((M = e),
          a.w.remove(C),
          (b = { state: "loaded", session: null }),
          w(),
          (D = 0)),
          k();
      }
      function Y() {
        let e = E.A.getState();
        U !== e && ((U = e), k());
      }
      function W(e) {
        let { focused: t } = e;
        P !== t && ((P = t), k());
      }
      function $(e) {
        let { state: t } = e,
          n = t === S.g6G.ACTIVE;
        P !== n && ((P = n), k());
      }
      function z() {
        (U = E.A.getState()), (P = (0, g.R)()), B();
      }
      function K() {
        A.A.addBreadcrumb({
          message: "Initializing SessionHeartbeatScheduler",
        }),
          E.A.addChangeListener(Y),
          c.default.addChangeListener(B),
          s.h.subscribe("WINDOW_FOCUS", W),
          s.h.subscribe("APP_STATE_UPDATE", $),
          s.h.subscribe("CONNECTION_OPEN", H),
          k(),
          null == L &&
            (L = {
              id: setInterval(() => {
                !(null != M && (0, T.$)()) ||
                  performance.now() - D <= m ||
                  _.default.track(S.HAw.CLIENT_HEARTBEAT_SKIPPED, {
                    client_heartbeat_version: 27,
                  });
              }, m),
              type: "interval",
            }),
          l.Ay.initialized.then(z);
      }
      async function j() {
        let e =
            !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
          t = null,
          n = "loaded" === b.state ? b.session?.uuid : null;
        try {
          t =
            "uninitialized" === b.state
              ? x(await a.w.getAfterRefresh(C))
              : b.session;
        } catch (e) {
          A.A.captureException(e);
        }
        let l = Date.now();
        if (V()) {
          (null == t || (0, I.aE)(t)) &&
            ((t = {
              uuid: (0, i.A)(),
              createdAtTimestamp: l,
              lastUsedTimestamp: l,
              version: I.Ir,
            }),
            (v = 0)),
            (t.lastUsedTimestamp = l);
          var s = t;
          let e = performance.now();
          if (!(e - v < O))
            try {
              a.w.set(C, s), (v = e);
            } catch (e) {
              A.A.captureException(e);
            }
        } else null != t && (0, I.aE)(t) && (t = null);
        return (
          (b = { state: "loaded", session: t }),
          null != t &&
            n !== t.uuid &&
            e &&
            u.A.getSocket()?.handleUpdateTimeSpentSessionId(
              t.createdAtTimestamp,
              t.uuid,
              r.C,
            ),
          t
        );
      }
      function q() {
        let e = "uninitialized" === b.state ? x(a.w.get(C)) : b.session;
        return null == e || (0, I.aE)(e) ? null : e;
      }
    },
    237774(e, t, n) {
      n.d(t, { k: () => c, p: () => h }), n(321073);
      var i = n(495544),
        r = n(763827),
        l = n(954571),
        a = n(935208),
        s = n(85277);
      let o = new Map(),
        d = -1;
      function u() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        if (e) {
          let e = a.default.extractTimestamp(i.default.getId());
          e !== d && (h(!1), (d = e));
        }
        return d % 10 == 0;
      }
      function c(e, t) {
        u() &&
          (o.has(e) || o.set(e, []),
          o
            .get(e)
            ?.push({ timestamp: new Date(), rtc_state: r.A.getState(), ...t }));
      }
      function h() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        if (!u(e)) return void o.clear();
        for (let [e, t] of o) l.default.track(e, (0, s.z)(e, t));
        o.clear();
      }
    },
    240525(e, t, n) {
      n.d(t, { Ay: () => v });
      var i = n(734057),
        r = n(498642),
        l = n(536802),
        a = n(309010),
        s = n(753027),
        o = n(509417),
        d = n(383682),
        u = n(27548),
        c = n(363433),
        h = n(552618),
        E = n(879658);
      let _ = null,
        p = new o.o(750, 500),
        A = new d.K(15),
        f = !1;
      class g extends l.A {
        static displayName = "SaveableChannelsStore";
        static LATEST_SNAPSHOT_VERSION = 1;
        constructor() {
          super({
            CACHE_LOADED_LAZY_NO_CACHE: L,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            CHANNEL_DELETE: O,
            CHANNEL_UPDATES: m,
            CONNECTION_OPEN_SUPPLEMENTAL: T,
            GUILD_DELETE: y,
            LOGIN_SUCCESS: R,
            THREAD_DELETE: N,
            THREAD_UPDATE: C,
          });
        }
        initialize() {
          this.waitFor(i.A),
            this.waitFor(a.A),
            this.waitFor(r.A),
            this.syncWith([s.A], () => !0),
            this.syncWith([a.A], I);
        }
        loadCache() {
          let e = this.readSnapshot(g.LATEST_SNAPSHOT_VERSION);
          null != e && ((f = !0), g.mergeSnapshot(e));
        }
        canEvictOrphans() {
          return f;
        }
        saveLimit(e) {
          let t = i.A.getBasicChannel(e);
          return (null != t && (0, c.Z)(t)) ||
            (null != t && (a.A.getChannelId() === e || p.has(e)))
            ? 25
            : 1;
        }
        getSaveableChannels() {
          let e = i.A.getChannelIds(null).map((e) => ({
            guildId: null,
            channelId: e,
          }));
          return s.A.isLowDisk
            ? null != _
              ? [...e, _]
              : e
            : [...e, ...p.values()];
        }
        takeSnapshot() {
          return {
            version: g.LATEST_SNAPSHOT_VERSION,
            data: {
              channels: [...p.allValues()].filter((e) => !e.fallback),
              penalized: [...A.keys()],
              lastChannel: _,
            },
          };
        }
        static mergeSnapshot(e) {
          let t = p,
            n = A;
          for (let n of ((p = new o.o(p.primaryCapacity, p.extendedCapacity)),
          (A = new d.K(A.capacity)),
          (_ = _ ?? e.lastChannel),
          [e.channels, t.values()]))
            for (let e of n) e.fallback || p.put(e.channelId, e);
          for (let t of [e.penalized, n.keys()])
            for (let e of t) A.put(e, null);
        }
        static recordChannel(e) {
          let t = i.A.getBasicChannel(e);
          if (null != t && (0, h.c)(t)) {
            let n = {
              guildId: t.guild_id ?? null,
              channelId: e,
              channelType: t.type,
            };
            (_ = n),
              p.put(e, n),
              (0, u.qA)(t) && null != A.put(e, null) && p.delete(e);
          }
        }
        static deleteChannel(e) {
          p.delete(e);
        }
        static deleteGuild(e) {
          for (let t of p.allValues()) t.guildId === e && p.delete(t.channelId);
        }
        static dropUnreachableChannels() {
          for (let e of p.keys()) {
            let t = i.A.getBasicChannel(e);
            (0, h.c)(t) || g.deleteChannel(e);
          }
        }
        static deleteUnreadableGuildChannels(e) {
          for (let t of p.values())
            e !== t.guildId ||
              (0, h.J)(t.channelId) ||
              g.deleteChannel(t.channelId);
        }
        static replaceLru(e) {
          p = e;
        }
      }
      function I() {
        let e = a.A.getChannelId();
        null != e && g.recordChannel(e);
      }
      function T() {
        g.dropUnreachableChannels(), g.replaceLru((0, E.I)(p, 1250));
      }
      function S(e) {
        let t = e.id,
          n = (0, h.c)(e),
          i = a.A.getChannelId();
        n && t === i && g.recordChannel(t), n || g.deleteChannel(t);
      }
      function m(e) {
        for (let t of e.channels) S(t);
      }
      function O(e) {
        g.deleteChannel(e.channel.id);
      }
      function C(e) {
        S(e.channel);
      }
      function N(e) {
        g.deleteChannel(e.channel.id);
      }
      function y(e) {
        return !e.guild.unavailable && (g.deleteGuild(e.guild.id), !0);
      }
      function R(e) {
        p.clear(), A.clear(), (f = !1);
      }
      function L(e) {
        f = !0;
      }
      let v = new g();
    },
    453001(e, t, n) {
      n.d(t, { A: () => o });
      var i = n(17928),
        r = n(228366),
        l = n(626584),
        a = n(184989);
      new l.A("BasicChannelCacheStore");
      class s extends i.Ay.Store {
        channels = new Map();
        guilds = new Map();
        hasChannel(e) {
          return this.channels.has(e);
        }
        hasGuild(e) {
          return this.guilds.has(e);
        }
        getBasicChannel(e) {
          return this.channels.get(e) ?? null;
        }
        getGuildBasicChannels(e) {
          return this.guilds.get(e) ?? null;
        }
        invalidate(e) {
          this.delete(e);
        }
        restored(e) {
          this.delete(e);
        }
        constructor() {
          super(r.h, {
            CACHE_LOADED_LAZY_NO_CACHE: (e) =>
              this.handleCacheLoadedLazyNoCache(e),
            CACHE_LOADED_LAZY: (e) => this.handleCacheLoadedLazy(e),
            CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
            LOGOUT: (e) => this.handleLogout(e),
          });
        }
        initialize() {
          this.waitFor(a.A);
        }
        handleCacheLoadedLazy(e) {
          for (let [t, n] of ((this.guilds = new Map()),
          (this.channels = new Map()),
          e.basicGuildChannels))
            for (let e of (this.guilds.set(
              t,
              Object.fromEntries(n.map((e) => [e.id, e])),
            ),
            n))
              this.channels.set(e.id, e);
        }
        handleCacheLoadedLazyNoCache(e) {
          this.guilds.clear(), this.channels.clear();
        }
        handleConnectionOpen(e) {
          let t = a.A.allGuildIds();
          for (let e of this.guilds.keys()) t.has(e) || this.delete(e);
        }
        handleLogout(e) {
          this.guilds.clear(), this.channels.clear();
        }
        delete(e) {
          for (let t in this.guilds.get(e) ?? {}) this.channels.delete(t);
          this.guilds.delete(e);
        }
      }
      let o = new s();
    },
    753027(e, t, n) {
      n.d(t, { A: () => c });
      var i = n(17928),
        r = n(228366),
        l = n(626584),
        a = n(927813),
        s = n(723176);
      let o = new l.A("FileSystemStore"),
        d = 10 * a.A.Millis.MINUTE;
      class u extends i.Ay.Store {
        isLowDisk = !1;
        constructor() {
          super(r.h, {
            APP_STATE_UPDATE: (e) => this.handleAppStateUpdate(e),
            POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
          }),
            this.refresh(),
            this.waitFor(s.A),
            setInterval(() => this.refresh(), d);
        }
        handlePostConnectionOpen() {
          return this.refresh(), !1;
        }
        handleAppStateUpdate(e) {
          return "active" !== e.state && this.refresh(), !1;
        }
        async refresh() {
          let e = await s.A.database()
            ?.fsInfo()
            ?.catch((e) => o.warn("couldn't get fs info", e));
          if (null != e) {
            let t =
                e.fs.available < 0x10000000 ||
                e.fs.available < 3 * e.database.used ||
                e.fs.available < 2 * e.database.total,
              n =
                e.fs.available > 0x30000000 &&
                e.fs.available > 4 * e.database.used &&
                e.fs.available > 4 * e.database.total,
              i = !!t || (!n && null);
            null != i &&
              this.isLowDisk !== i &&
              ((this.isLowDisk = i), this.emitChange());
          }
        }
      }
      let c = new u();
    },
    60809(e, t, n) {
      n.d(t, {
        $V: () => c,
        Gu: () => o,
        KG: () => s,
        TY: () => u,
        Ug: () => r,
        Wx: () => l,
        gS: () => a,
        qp: () => d,
        sK: () => h,
      });
      var i,
        r =
          (((i = {})[(i.POPULAR = 0)] = "POPULAR"),
          (i[(i.ALPHABETICAL = 1)] = "ALPHABETICAL"),
          i);
      let l = "app-launcher-element",
        a = "app-launcher-modal",
        s = "app-launcher-entrypoint",
        o = "app-launcher-app-dm-entrypoint",
        d = "app-launcher-app-details-more-menu",
        u = "app-launcher-profile-friend-activity-entry",
        c = "min(100vh, 680px)",
        h = {
          "--custom-app-launcher-width": "500px",
          "--custom-app-launcher-height": c,
        };
    },
    166862(e, t, n) {
      n.d(t, { A: () => I });
      var i = n(17928),
        r = n(228366),
        l = n(155718),
        a = n(58149),
        s = n(723702),
        o = n(861382),
        d = n(652215);
      let u = new Map(),
        c = new Map(),
        h = new Map();
      function E(e) {
        return (
          c.has(e) ||
            c.set(e, {
              commandId: o.A.getActiveCommand(e)?.id,
              optionName: o.A.getActiveOptionName(e),
              optionNameToAutocompleteQueries: new Map(),
              optionNameToLastResults: new Map(),
              optionNameToNonce: new Map(),
              optionNameToLastQuery: new Map(),
              lastErrored: !1,
              lastResponseNonce: void 0,
            }),
          c.get(e)
        );
      }
      function _() {
        return u.clear(), c.clear(), !0;
      }
      let p = (0, s.isDesktop)();
      function A(e) {
        let { channelId: t, command: n } = e;
        f(t, n?.id);
      }
      function f(e, t) {
        let n = o.A.getActiveOptionName(e),
          i = c.get(e);
        return (
          null != i &&
          (t !== i.commandId || n !== i.optionName) &&
          (null != t &&
            t !== i.commandId &&
            (i.optionNameToLastResults.clear(),
            i.optionNameToNonce.clear(),
            i.optionNameToLastQuery.clear(),
            i.optionNameToAutocompleteQueries.clear()),
          (i.lastErrored = !1),
          (i.commandId = t),
          (i.optionName = n),
          !0)
        );
      }
      class g extends i.Ay.Store {
        static displayName = "ApplicationCommandAutocompleteStore";
        initialize() {
          this.waitFor(o.A);
        }
        getLastErrored(e) {
          return E(e).lastErrored;
        }
        getAutocompleteChoices(e, t, n) {
          let i = E(e);
          return i.optionNameToAutocompleteQueries.get(t)?.get(n);
        }
        getAutocompleteLastChoices(e, t) {
          return E(e).optionNameToLastResults.get(t);
        }
        getLastResponseNonce(e) {
          return E(e).lastResponseNonce;
        }
      }
      let I = new g(r.h, {
        CONNECTION_OPEN: _,
        LOGOUT: _,
        CHANNEL_SELECT: _,
        APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: function (e) {
          let { nonce: t, channelId: n, query: i, name: r } = e,
            l = E(n);
          if (l.optionNameToLastQuery.get(r) === i) return !1;
          l.optionNameToLastQuery.set(r, i);
          let a = l.optionNameToAutocompleteQueries.get(r)?.get(i);
          if (null != a)
            return (
              (l.lastErrored = !1), l.optionNameToLastResults.set(r, a), !0
            );
          let s = l.optionNameToNonce.get(r);
          if (
            (null != s && u.delete(s),
            u.set(t, { channelId: n, query: i, name: r }),
            h.set(t, new Date()),
            l.optionNameToNonce.set(r, t),
            l.lastErrored)
          )
            return (l.lastErrored = !1), !0;
        },
        APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: function (e) {
          let { choices: t, nonce: n } = e,
            i = u.get(n);
          if (null == i) return !1;
          u.delete(n);
          let r = E(i.channelId);
          null == r.optionNameToAutocompleteQueries.get(i.name) &&
            r.optionNameToAutocompleteQueries.set(i.name, new Map());
          let s = p && o.A.getActiveOption(i.channelId)?.type === l.n4.INTEGER,
            c =
              t?.map((e) => {
                let { value: t, name_localized: n, name: i } = e;
                return {
                  displayName: n ?? i,
                  name: i,
                  value: (t = s ? Number(t) : t),
                };
              }) ?? [],
            _ = h.get(n),
            A = null != _ ? new Date().getTime() - _.getTime() : 0;
          return (
            (0, a.zV)(
              d.HAw.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE,
              { duration_ms: A, error: !1, num_options: c.length },
            ),
            h.delete(n),
            r.optionNameToAutocompleteQueries.get(i.name)?.set(i.query, c),
            r.optionNameToLastQuery.get(i.name) === i.query &&
              ((r.lastErrored = !1), r.optionNameToLastResults.set(i.name, c)),
            (r.lastResponseNonce = n),
            !0
          );
        },
        INTERACTION_FAILURE: function (e) {
          let { nonce: t } = e;
          if (null == t) return !1;
          let n = u.get(t);
          if (null == n) return !1;
          u.delete(t);
          let i = h.get(t),
            r = null != i ? new Date().getTime() - i.getTime() : 0;
          return (
            (0, a.zV)(
              d.HAw.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE,
              { duration_ms: r, error: !0 },
            ),
            h.delete(t),
            (E(n.channelId).lastErrored = !0),
            !0
          );
        },
        APPLICATION_COMMAND_SET_ACTIVE_COMMAND: A,
        APP_LAUNCHER_SET_ACTIVE_COMMAND: A,
        APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function (e) {
          let { channelId: t, command: n } = e;
          f(t, n?.id);
        },
      });
    },
    609136(e, t, n) {
      n.d(t, { A: () => f });
      var i = n(284009),
        r = n.n(i),
        l = n(155718),
        a = n(224868),
        s = n(773669),
        o = n(522602),
        d = n(360161),
        u = n(258363),
        c = n(168186),
        h = n(985018);
      let E = {
          [l.n4.SUB_COMMAND]: () => ({ success: !1 }),
          [l.n4.SUB_COMMAND_GROUP]: () => ({ success: !1 }),
          [l.n4.BOOLEAN]: (e) => {
            if ("text" !== e.type) return { success: !1 };
            let t = e.text.trim();
            return { success: null != (0, d.a5)(t) };
          },
          [l.n4.STRING]: (e, t, n) => {
            let i;
            switch (
              (r()(
                t.type === l.n4.STRING,
                "option type must match validator type",
              ),
              e.type)
            ) {
              case "emoji":
                i = e.surrogate;
                break;
              case "text":
                i = e.text.trim();
                break;
              default:
                return { success: !1 };
            }
            if (null != t.choices)
              return { success: null != (0, d.$7)(t.choices, i) };
            if (t.autocomplete && null != (0, d.Xf)(n, t.name, i))
              return { success: !0 };
            let a = i;
            if (void 0 !== t.minLength || void 0 !== t.maxLength) {
              if (null == a) return { success: !1 };
              let e = (function (e, t, n) {
                if (
                  (void 0 !== t.minLength && e.length < t.minLength) ||
                  (void 0 !== t.maxLength && e.length > t.maxLength)
                ) {
                  if (
                    void 0 !== t.maxLength &&
                    void 0 !== t.minLength &&
                    t.minLength === t.maxLength
                  )
                    return {
                      success: !1,
                      error: h.intl.formatToPlainString(
                        n.exactRangeErrorMessage,
                        { value: A(t.minLength) },
                      ),
                    };
                  else if (void 0 !== t.maxLength && void 0 !== t.minLength)
                    return {
                      success: !1,
                      error: h.intl.formatToPlainString(n.rangeErrorMessage, {
                        minimum: A(t.minLength),
                        maximum: A(t.maxLength),
                      }),
                    };
                  else if (void 0 !== t.minLength)
                    return {
                      success: !1,
                      error: h.intl.formatToPlainString(n.minErrorMessage, {
                        minimum: A(t.minLength),
                      }),
                    };
                  else if (void 0 !== t.maxLength)
                    return {
                      success: !1,
                      error: h.intl.formatToPlainString(n.maxErrorMessage, {
                        maximum: A(t.maxLength),
                      }),
                    };
                }
                return { success: !0 };
              })(a, t, {
                exactRangeErrorMessage: h.t["e+9/SY"],
                rangeErrorMessage: h.t.IE1sTh,
                minErrorMessage: h.t.rXAFQD,
                maxErrorMessage: h.t["ycEPx/"],
              });
              if (!e.success) return e;
            }
            return { success: !0 };
          },
          [l.n4.INTEGER]: (e, t, n) => {
            r()(
              t.type === l.n4.INTEGER,
              "option type must match validator type",
            );
            let i = "text" === e.type ? e.text.trim() : null;
            if (null == i || 0 === i.length) return { success: !1 };
            if (null != t.choices)
              return { success: null != (0, d.Bk)(t.choices, i) };
            if (t.autocomplete && null != (0, d.lM)(n, t.name, i))
              return { success: !0 };
            let a = Number(u.normalizeNumericString(s.default.locale, i));
            return null == a ||
              isNaN(a) ||
              !Number.isInteger(a) ||
              !Number.isSafeInteger(a)
              ? { success: !1 }
              : p(a, t, h.t["8Y5zsp"], h.t.CyRLmH, h.t["VD3Q+S"]);
          },
          [l.n4.NUMBER]: (e, t, n) => {
            r()(
              t.type === l.n4.NUMBER,
              "option type must match validator type",
            );
            let i = "text" === e.type ? e.text.trim() : null;
            if (null == i || 0 === i.length) return { success: !1 };
            if (null != t.choices)
              return { success: null != (0, d.Bk)(t.choices, i) };
            if (t.autocomplete && null != (0, d.lM)(n, t.name, i))
              return { success: !0 };
            let a = Number(u.normalizeNumericString(s.default.locale, i));
            return isNaN(a) ||
              a > Number.MAX_SAFE_INTEGER ||
              a < Number.MIN_SAFE_INTEGER
              ? { success: !1 }
              : p(a, t, h.t["8Y5zsp"], h.t.CyRLmH, h.t["VD3Q+S"]);
          },
          [l.n4.USER]: (e, t, n, i) => {
            if ("text" !== e.type) return { success: "userMention" === e.type };
            {
              if ((0, c.hT)(e.text)) return { success: !0 };
              let t = (0, a.f)(e.text, i, n, { allowRoles: !1 });
              return { success: t?.type === "userMention" };
            }
          },
          [l.n4.CHANNEL]: (e, t, n, i) => {
            if ("text" !== e.type)
              return { success: "channelMention" === e.type };
            {
              if ((0, c.hT)(e.text)) return { success: !0 };
              let t = (0, a.f)(e.text, i, n);
              return { success: t?.type === "channelMention" };
            }
          },
          [l.n4.ROLE]: (e, t, n, i) => {
            if ("text" !== e.type) return { success: _(e) };
            {
              if ((0, c.hT)(e.text)) return { success: !0 };
              let t = (0, a.f)(e.text, i, n, { allowUsers: !1 });
              return { success: t?.type === "roleMention" };
            }
          },
          [l.n4.MENTIONABLE]: (e, t, n, i) => {
            if ("text" !== e.type)
              return { success: "userMention" === e.type || _(e) };
            {
              if ((0, c.hT)(e.text)) return { success: !0 };
              let t = (0, a.f)(e.text, i, n);
              return {
                success: null != t && ("userMention" === t.type || _(t)),
              };
            }
          },
          [l.n4.ATTACHMENT]: (e, t, n, i, r) => {
            if ("text" !== e.type) return { success: !1 };
            let l = o.A.getUpload(n, t.name, (0, c.Qr)(r));
            return { success: null != l && l.filename === e.text };
          },
        },
        _ = (e) =>
          "roleMention" === e.type ||
          ("textMention" === e.type && "@everyone" === e.text);
      function p(e, t, n, i, r) {
        if (
          (null != t.minValue && e < t.minValue) ||
          (null != t.maxValue && e > t.maxValue)
        ) {
          if (null != t.maxValue && null != t.minValue)
            return {
              success: !1,
              error: h.intl.formatToPlainString(n, {
                minimum: A(t.minValue),
                maximum: A(t.maxValue),
              }),
            };
          else if (null != t.minValue)
            return {
              success: !1,
              error: h.intl.formatToPlainString(i, { minimum: A(t.minValue) }),
            };
          else if (null != t.maxValue)
            return {
              success: !1,
              error: h.intl.formatToPlainString(r, { maximum: A(t.maxValue) }),
            };
        }
        return { success: !0 };
      }
      function A(e) {
        return e.toLocaleString(h.intl.currentLocale, { useGrouping: !1 });
      }
      let f = E;
    },
    382483(e, t, n) {
      n.d(t, { Wq: () => o, i$: () => d, un: () => u });
      var i = n(636537),
        r = n(228366),
        l = n(38405),
        a = n(385113),
        s = n(652215);
      async function o() {
        let { force: e = !1 } =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (
          e ||
          (a.A.getFeaturedFetchState() !== a.e.FETCHING &&
            a.A.getFeaturedFetchState() !== a.e.SUCCESS)
        ) {
          r.h.dispatch({
            type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START",
          });
          try {
            let e = await i.Bo.get({
              url: s.Rsh.WIDGET_CONFIGS_FEATURED,
              rejectWithError: !0,
            });
            r.h.dispatch({
              type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS",
              configs: e.body.configs,
            });
          } catch (e) {
            r.h.dispatch({
              type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE",
            }),
              l.A.captureException(e);
          }
        }
      }
      async function d() {
        let { force: e = !1 } =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (
          e ||
          (a.A.getDeveloperFetchState() !== a.e.FETCHING &&
            a.A.getDeveloperFetchState() !== a.e.SUCCESS)
        ) {
          r.h.dispatch({
            type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START",
          });
          try {
            let e = await i.Bo.get({
              url: s.Rsh.WIDGET_CONFIGS_DEVELOPER,
              rejectWithError: !0,
            });
            r.h.dispatch({
              type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS",
              configs: e.body.configs,
            });
          } catch (e) {
            r.h.dispatch({
              type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE",
            }),
              l.A.captureException(e);
          }
        }
      }
      async function u(e) {
        let { force: t = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = a.A.getFetchState(e);
        if (t || (n !== a.e.FETCHING && n !== a.e.SUCCESS)) {
          r.h.dispatch({
            type: "APPLICATION_WIDGET_CONFIG_FETCH_START",
            applicationId: e,
          });
          try {
            let t = await i.Bo.get({
              url: s.Rsh.APPLICATION_WIDGET_CONFIGS(e),
              rejectWithError: !0,
            });
            r.h.dispatch({
              type: "APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS",
              applicationId: e,
              configs: t.body,
            });
          } catch (t) {
            r.h.dispatch({
              type: "APPLICATION_WIDGET_CONFIG_FETCH_FAILURE",
              applicationId: e,
            }),
              l.A.captureException(t);
          }
        }
      }
    },
    385113(e, t, n) {
      n.d(t, { A: () => A, e: () => a });
      var i,
        r = n(17928),
        l = n(228366),
        a =
          (((i = {}).NOT_FETCHED = "NOT_FETCHED"),
          (i.FETCHING = "FETCHING"),
          (i.SUCCESS = "SUCCESS"),
          (i.FAILURE = "FAILURE"),
          i);
      let s = [],
        o = {},
        d = {},
        u = "NOT_FETCHED",
        c = [],
        h = "NOT_FETCHED",
        E = [];
      function _(e) {
        if (0 !== Object.keys(e).length) {
          for (let [t, n] of Object.entries(e)) {
            let e = new Set(n.map((e) => e.config_id)),
              i = o[t]?.filter((t) => !e.has(t.config_id)) ?? [];
            o[t] = [...i, ...n];
          }
          (o = { ...o }),
            (d = {
              ...d,
              ...Object.fromEntries(Object.keys(e).map((e) => [e, "SUCCESS"])),
            });
        }
      }
      class p extends r.Ay.Store {
        static displayName = "ApplicationWidgetConfigStore";
        getConfig(e) {
          return o[e]?.[0] ?? void 0;
        }
        getConfigs(e) {
          return o[e] ?? s;
        }
        getFetchState(e) {
          return d[e] ?? "NOT_FETCHED";
        }
        getFeaturedFetchState() {
          return u;
        }
        getDeveloperFetchState() {
          return h;
        }
        getAllConfigsByApplication() {
          return o;
        }
        getFeaturedApplicationIds() {
          return c;
        }
        getDeveloperApplicationIds() {
          return E;
        }
      }
      let A = new p(l.h, {
        LOGOUT: function () {
          (o = {}),
            (d = {}),
            (u = "NOT_FETCHED"),
            (c = []),
            (h = "NOT_FETCHED"),
            (E = []);
        },
        APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START: function (e) {
          u = "FETCHING";
        },
        APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: function (e) {
          (u = "SUCCESS"), (c = Object.keys(e.configs)), _(e.configs);
        },
        APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE: function () {
          u = "FAILURE";
        },
        APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START: function (e) {
          h = "FETCHING";
        },
        APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS: function (e) {
          (h = "SUCCESS"), (E = Object.keys(e.configs)), _(e.configs);
        },
        APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE: function () {
          h = "FAILURE";
        },
        APPLICATION_WIDGET_CONFIG_FETCH_START: function (e) {
          d = { ...d, [e.applicationId]: "FETCHING" };
        },
        APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: function (e) {
          _({ [e.applicationId]: e.configs });
        },
        APPLICATION_WIDGET_CONFIG_FETCH_FAILURE: function (e) {
          d = { ...d, [e.applicationId]: "FAILURE" };
        },
      });
    },
    715314(e, t, n) {
      n.d(t, { A: () => c });
      var i = n(17928),
        r = n(228366);
      let l = {},
        a = null,
        s = null;
      function o(e, t) {
        null == t ? e in l && delete l[e] : null != e && (l[e] = t);
      }
      function d(e) {
        let { user: t } = e;
        s = t.id;
      }
      class u extends i.Ay.PersistedStore {
        static displayName = "LoginRequiredActionStore";
        static persistKey = "LoginRequiredActionStore";
        initialize(e) {
          null != e && (l = e);
        }
        requiredActions(e) {
          return l[e] ?? null;
        }
        requiredActionsIncludes(e, t) {
          let n = this.requiredActions(e);
          return null != n && t.reduce((e, t) => e || n.includes(t), !1);
        }
        wasLoginAttemptedInSession(e) {
          return a === e;
        }
        getState() {
          return l;
        }
      }
      let c = new u(r.h, {
        LOGIN_ATTEMPTED: function (e) {
          let { required_actions: t, user_id: n } = e;
          o((a = n), t);
        },
        CONNECTION_OPEN: d,
        CURRENT_USER_UPDATE: d,
        LOGOUT: function (e) {
          let { isSwitchingAccount: t } = e;
          t || null == s || o(s, null);
        },
        PASSWORD_UPDATED: function (e) {
          let { userId: t } = e;
          o(t, null);
        },
        MULTI_ACCOUNT_REMOVE_ACCOUNT: function (e) {
          let { userId: t } = e;
          o(t, null);
        },
      });
    },
    736400(e, t, n) {
      n.d(t, { Ay: () => r, X3: () => l, n2: () => a });
      var i = n(136722);
      function r(e) {
        for (let { permissionOverwrites_: t } of e)
          if (null != t)
            for (let e in t) {
              let n = t[e];
              (n.allow = i.iu(n.allow)), (n.deny = i.iu(n.deny));
            }
      }
      function l(e) {
        for (let [t, n] of e) r(n);
      }
      function a(e) {
        let { permissionOverwrites_: t } = e;
        if (null != t)
          for (let e in t) {
            let n = t[e];
            (n.allow = i.iu(n.allow)), (n.deny = i.iu(n.deny));
          }
        return e;
      }
    },
    134047(e, t, n) {
      n.d(t, { M: () => i, T: () => r });
      let i = (0, n(250105).Ay)({
        kind: "user",
        name: "2025-11-auto-open-tiv",
        defaultConfig: {
          collectAnalytics: !1,
          autoOpenTIV: !1,
          autoNavigateChannel: !1,
        },
        variations: {
          0: { collectAnalytics: !0, autoOpenTIV: !1, autoNavigateChannel: !1 },
          1: { collectAnalytics: !0, autoOpenTIV: !0, autoNavigateChannel: !1 },
          2: { collectAnalytics: !0, autoOpenTIV: !0, autoNavigateChannel: !0 },
          3: { collectAnalytics: !0, autoOpenTIV: !1, autoNavigateChannel: !0 },
        },
      });
      function r(e) {
        let { channel: t, location: n } = e,
          { autoOpenTIV: r } = i.useConfig({ location: n });
        return null != t && !!t.isGuildVocal() && r;
      }
    },
    806931(e, t, n) {
      n.d(t, {
        Ay: () => _,
        GK: () => E,
        J7: () => h,
        PJ: () => A,
        R8: () => f,
        Xw: () => p,
        cF: () => I,
        fG: () => g,
        jd: () => c,
        lp: () => d,
        mn: () => T,
        qs: () => u,
      });
      var i,
        r,
        l,
        a,
        s,
        o,
        d =
          (((i = {})[(i.STREAM = 0)] = "STREAM"),
          (i[(i.HIDDEN_STREAM = 1)] = "HIDDEN_STREAM"),
          (i[(i.USER = 2)] = "USER"),
          (i[(i.ACTIVITY = 3)] = "ACTIVITY"),
          i),
        u =
          (((r = {}).STREAM = "STREAM"),
          (r.USER = "USER"),
          (r.ACTIVITY = "ACTIVITY"),
          r),
        c = (((l = {}).NONE = "NONE"), (l.AUTO = "AUTO"), l),
        h =
          (((a = {})[(a.DESKTOP = 0)] = "DESKTOP"),
          (a[(a.MOBILE = 1)] = "MOBILE"),
          (a[(a.XBOX = 2)] = "XBOX"),
          (a[(a.PLAYSTATION = 3)] = "PLAYSTATION"),
          (a[(a.QUEST = 4)] = "QUEST"),
          a),
        E =
          (((s = {}).CONTEXT_MENU = "Context Menu"),
          (s.THREE_DOT = "Three-Dot"),
          (s.CARET = "Caret"),
          (s.OTHER_BUTTON = "Other Button"),
          s);
      function _(e) {
        return e?.type === 0 || e?.type === 1;
      }
      function p(e) {
        return e?.type === 2;
      }
      function A(e) {
        return e?.type === 3;
      }
      var f =
        (((o = {})[(o.VIDEO = 0)] = "VIDEO"),
        (o[(o.CAMERA_PREVIEW = 1)] = "CAMERA_PREVIEW"),
        (o[(o.HAVEN = 2)] = "HAVEN"),
        o);
      let g = { 0: 320, 1: 160, 2: 320 },
        I = { 0: 960, 1: 480, 2: 960 },
        T = { 0: 200, 1: 160, 2: 200 };
    },
    568598(e, t, n) {
      n.d(t, { Ay: () => L, KU: () => y, Qt: () => N, r4: () => R }), n(321073);
      var i,
        r = n(735438),
        l = n(713402),
        a = n(717558),
        s = n(933958),
        o = n(259464),
        d = n(652896),
        u = n(616356),
        c = n(495544),
        h = n(470710),
        E = n(734057),
        _ = n(969341),
        p = n(485296),
        A = n(287809),
        f = n(803301),
        g = n(977997),
        I = n(562153),
        T = n(90575),
        S = n(806931),
        m = n(652215),
        O = n(731854);
      let C = "__EMBEDDED_ACTIVITIES__";
      function N(e) {
        let { applicationId: t, instanceId: n } = e;
        return null != n ? `activity-${t}-${n}` : `activity-${t}`;
      }
      function y(e) {
        switch (e.type) {
          case S.lp.ACTIVITY:
            return `\x01${e.sortKey}`;
          case S.lp.HIDDEN_STREAM:
          case S.lp.STREAM:
            return `${e.userVideo ? "\x02" : "\x03"}${(0, T.A)(e.userNick, e.user)}\x03`;
          case S.lp.USER:
            let t = "\x05";
            return (
              e.voiceState?.selfVideo
                ? (t = "\x03")
                : e.voiceState?.selfStream && (t = "\x04"),
              `${t}${(0, T.A)(e.userNick, e.user)}`
            );
        }
      }
      var R =
        (((i = {}).VIDEO = "VIDEO"),
        (i.STREAM = "STREAM"),
        (i.FILTERED = "FILTERED"),
        (i.SPEAKING = "SPEAKING"),
        (i.ACTIVITY = "ACTIVITY"),
        (i.NOT_POPPED_OUT = "NOT_POPPED_OUT"),
        i);
      class L {
        channelId;
        call;
        participants = {};
        lastSpoke = {};
        guildRingingUsers = new Set();
        poppedOutParticipants = new Set();
        participantByIndex = new l.J((e) => {
          let t = [];
          return (
            e.type === S.lp.USER && e.speaking && t.push("SPEAKING"),
            e.type === S.lp.USER && e.voiceState?.selfVideo
              ? (t.push("VIDEO"),
                e.localVideoDisabled || e.isPoppedOut || t.push("FILTERED"))
              : (0, S.Ay)(e) &&
                (t.push("STREAM"),
                e.type === S.lp.HIDDEN_STREAM ||
                  null == e.streamId ||
                  e.isPoppedOut ||
                  t.push("FILTERED")),
            e.type === S.lp.ACTIVITY && t.push("ACTIVITY"),
            ("isPoppedOut" in e && e.isPoppedOut) || t.push("NOT_POPPED_OUT"),
            t
          );
        }, y);
        constructor(e) {
          this.channelId = e;
        }
        get version() {
          return this.participantByIndex.version;
        }
        size(e) {
          return this.participantByIndex.size(e);
        }
        toArray(e) {
          return this.participantByIndex.values(e, !0);
        }
        rebuild() {
          let e = E.A.getChannel(this.channelId);
          if (
            null == e ||
            e.type === m.rbe.GUILD_TEXT ||
            ((this.call = h.A.getCall(this.channelId)),
            e.isPrivate() && (null == this.call || this.call.unavailable))
          )
            return !1;
          let t = new Set(
            e.isGuildVocalOrThread()
              ? Object.keys(g.A.getVoiceStatesForChannel(e.id))
              : e.recipients,
          );
          return (
            t.add(c.default.getId()),
            this.guildRingingUsers.size > 0 &&
              (t = new Set([...t, ...this.guildRingingUsers])),
            u.A.getAllActiveStreamsForChannel(this.channelId).forEach((e) => {
              let { ownerId: n } = e;
              return t.add(n);
            }),
            this.participantByIndex.clear(),
            (this.participants = {}),
            t.forEach((e) => this.updateParticipant(e)),
            this.updateEmbeddedActivities(),
            !0
          );
        }
        getParticipant(e) {
          return this.participantByIndex.get(e) ?? null;
        }
        updateEmbeddedActivities() {
          return this.updateParticipant(C);
        }
        hasEmbeddedActivity() {
          return this.size("ACTIVITY") > 0;
        }
        updateParticipant(e) {
          let t = this.participants[e],
            n =
              e === C
                ? this._getParticipantsForEmbeddedActivities()
                : this._getParticipantsForUser(e);
          return (
            (null != t || 0 !== n.length) &&
            (t?.forEach((e) => {
              this.participantByIndex.delete(e.id);
            }),
            n.forEach((e) => {
              this.participantByIndex.set(e.id, e);
            }),
            (this.participants[e] = n),
            !0)
          );
        }
        updateParticipantSpeaking(e) {
          return (
            this.participants[e]?.reduce((t, n) => {
              if (n.type === S.lp.USER) {
                let i = (0, a.R)({ userId: e, checkIsMuted: !0 }),
                  r = p.A.isSoundSharing(e),
                  l = this.participantByIndex.get(n.id);
                return l?.type === S.lp.USER &&
                  l.speaking === i &&
                  l.soundsharing === r
                  ? t
                  : (i && (this.lastSpoke[e] = Date.now()),
                    this.participantByIndex.set(n.id, {
                      ...n,
                      speaking: i,
                      lastSpoke: this.lastSpoke[e],
                      soundsharing: r,
                    }),
                    !0);
              }
              return t;
            }, !1) ?? !1
          );
        }
        updateParticipantQuality(e, t, n) {
          return (
            this.participants[e]?.reduce(
              (e, i) =>
                i.type === S.lp.STREAM
                  ? (this.participantByIndex.set(i.id, {
                      ...i,
                      maxResolution: t,
                      maxFrameRate: n,
                    }),
                    !0)
                  : e,
              !1,
            ) ?? !1
          );
        }
        updateGuildRingingUsers(e, t) {
          t ? this.guildRingingUsers.add(e) : this.guildRingingUsers.delete(e);
        }
        updateParticipantPoppedOut(e, t) {
          t
            ? this.poppedOutParticipants.add(e)
            : this.poppedOutParticipants.delete(e);
        }
        _getEmbeddedActivities() {
          let e = s.Ay.getEmbeddedActivitiesForChannel(this.channelId),
            t = s.Ay.getSelfEmbeddedActivityForChannel(this.channelId);
          return null == t
            ? e
            : (0, r.uniqBy)([...e, t], (e) => e.compositeInstanceId);
        }
        _getParticipantsForEmbeddedActivities() {
          return this._getEmbeddedActivities().map((e, t) => ({
            type: S.lp.ACTIVITY,
            id: N({
              applicationId: e.applicationId,
              instanceId: e.compositeInstanceId,
            }),
            applicationId: e.applicationId,
            activityType: m.$pd.PLAYING,
            activityUrl: e.url,
            participants: [...(e.participants ?? [])],
            guildId: E.A.getChannel(this.channelId)?.getGuildId() ?? null,
            sortKey: t.toString(),
          }));
        }
        _getParticipantsForUser(e) {
          let t,
            n,
            i = [],
            r = A.default.getUser(e);
          if (null == r) return i;
          let l = g.A.getVoiceStateForChannel(this.channelId, e),
            s = g.A.getVoicePlatformForChannel(this.channelId, e),
            h = E.A.getChannel(this.channelId),
            T = h?.getGuildId(),
            m =
              (this.call?.ringing?.includes(e) ||
                this.guildRingingUsers.has(e)) ??
              !1;
          (null != l || m) &&
            ((t = {
              type: S.lp.USER,
              ...f.A.getUserStreamData(e, T),
              user: r,
              id: r.id,
              voiceState: l,
              voicePlatform: s,
              speaking: (0, a.R)({ userId: e, checkIsMuted: !0 }),
              lastSpoke: this.lastSpoke[e] ?? 0,
              soundsharing: p.A.isSoundSharing(e),
              ringing: m,
              userNick: I.Ay.getName(T, this.channelId, r),
              userAvatarDecoration: (0, o.U)(r, T),
              localVideoDisabled: _.Ay.isLocalVideoDisabled(r.id),
              isPoppedOut: this.poppedOutParticipants.has(r.id),
            }),
            i.push(t));
          let C =
            u.A.getStreamForUser(e, T) ?? u.A.getActiveStreamForUser(e, T);
          if (null != C && C.channelId === this.channelId) {
            let t = (0, d._z)(C),
              a = this.getParticipant(t),
              s =
                C.ownerId === c.default.getId() &&
                u.A.isSelfStreamHidden(this.channelId),
              o =
                a?.type === S.lp.STREAM
                  ? {
                      maxResolution:
                        null != a.maxResolution
                          ? { ...a.maxResolution }
                          : void 0,
                      maxFrameRate: a.maxFrameRate,
                    }
                  : null;
            (n = {
              ...f.A.getUserStreamData(e, T, O.x.STREAM),
              ...o,
              type: s ? S.lp.HIDDEN_STREAM : S.lp.STREAM,
              id: t,
              userVideo: l?.selfVideo ?? !1,
              user: r,
              userNick: I.Ay.getName(T, this.channelId, r),
              stream: C,
              isPoppedOut: this.poppedOutParticipants.has(t),
            }),
              i.push(n);
          }
          return i;
        }
      }
    },
    325909(e, t, n) {
      n.d(t, { lQ: () => I, oP: () => f, pW: () => g });
      var i = n(17928),
        r = n(890615),
        l = n(721592),
        a = n(164891),
        s = n(495544),
        o = n(470710),
        d = n(734057),
        u = n(696451),
        c = n(834942),
        h = n(576705),
        E = n(290863),
        _ = n(994500),
        p = n(977997),
        A = n(652215);
      function f(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "useCanRing",
          n = arguments.length > 2 ? arguments[2] : void 0,
          r = (0, i.bG)([d.A], () => d.A.getChannel(n)),
          l = (0, i.bG)([s.default], () => s.default.getId() === e.id),
          a = (0, i.bG)([_.A], () => _.A.isFriend(e.id)),
          o = (0, i.bG)(
            [E.A],
            () => E.A.getStatus(e.id) === A.clD.DND && r?.guild_id != null,
          ),
          u = r?.type,
          c = null != u && A.kvI.CALLABLE.has(u),
          h = I(e, t, r);
        return (
          a && !o && !l && !e.bot && !e.system && !e.isProvisional && (h || c)
        );
      }
      function g(e) {
        let t = A.kvI.CALLABLE.has(e.type),
          n = e.type === A.rbe.GUILD_VOICE;
        if (t) {
          let t = o.A.getCall(e.id);
          return (
            null != t && null != t.messageId && !o.A.isCallUnavailable(e.id)
          );
        }
        if (n) {
          let { enabled: t } = a.A.getCurrentConfig({
              guildId: e.guild_id,
              location: "ring",
            }),
            n = p.A.getVoiceState(e.guild_id, s.default.getId());
          return t && null != n && n.channelId === e.id;
        }
        return !1;
      }
      function I(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "useCanRingToGuildVoiceChannel",
          n = arguments.length > 2 ? arguments[2] : void 0,
          s = (0, i.bG)([h.A], () => null != n && (0, r.A)(n, h.A)),
          o = (0, i.bG)([u.Ay, c.A], () => {
            let t = n?.guild_id;
            if (null == t) return !1;
            let i = null != u.Ay.getMember(t, e.id),
              r = c.A.getCheck(t).canChat;
            return i && r;
          }),
          { needSubscriptionToAccess: d } = (0, l.A)(n?.id),
          { enabled: E } = a.A.useExperiment({
            guildId: n?.guild_id,
            location: t,
          }),
          _ = n?.type === A.rbe.GUILD_VOICE;
        return E && _ && o && s && !d;
      }
    },
    74329(e, t, n) {
      n.d(t, { A: () => E });
      var i = n(627968);
      n(64700);
      var r = n(17928),
        l = n(192308),
        a = n(477782),
        s = n(695366),
        o = n(652896),
        d = n(834757),
        u = n(495544),
        c = n(116956),
        h = n(985018);
      function E(e, t, E) {
        let _ = (0, d.AO)(e),
          p = (0, r.bG)([u.default], () => u.default.getId());
        if (null == e) return null;
        let A = (0, o._z)(e),
          f = c.A.getVideoStats(A) ?? {},
          g = {
            media_session_id: c.A.getMediaSessionId(A),
            rtc_connection_id: c.A.getRtcConnectionId(A),
            stream_region: c.A.getRegion(A),
            max_viewers: c.A.getMaxViewers(A),
            ...f,
          };
        return (0, i.jsx)(a.Dr, {
          id: "report-stream-problem",
          color: "danger",
          label: h.intl.string(h.t.sdnCxV),
          action: () => {
            E?.(),
              null != e &&
                (0, l.openModalLazy)(async () => {
                  let { default: t } = await n
                    .e("86889")
                    .then(n.bind(n, 292208));
                  return (n) =>
                    (0, i.jsx)(t, {
                      stream: e,
                      streamApplication: _,
                      isStreamer: p === e?.ownerId,
                      analyticsData: g,
                      ...n,
                    });
                });
          },
          icon: s.E,
          leadingAccessory: { type: "icon", icon: s.E },
        });
      }
    },
    480890(e, t, n) {
      n.d(t, { Y: () => u, s: () => d });
      var i = n(495544),
        r = n(734057),
        l = n(763827),
        a = n(954571),
        s = n(806931),
        o = n(652215);
      function d(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          { targetUserId: i, tileType: r, entrypoint: l } = n;
        return (n) =>
          u({
            menuItemProps: n,
            menuName: e,
            location: t,
            entrypoint: l ?? s.GK.CONTEXT_MENU,
            targetUserId: i,
            tileType: r,
          });
      }
      function u(e) {
        let {
            menuItemProps: { type: t },
            menuName: n,
            location: s,
            entrypoint: d,
            targetUserId: u,
            tileType: c,
          } = e,
          h = l.A.getChannelId(),
          E = l.A.getGuildId(),
          _ = r.A.getChannel(h)?.type,
          p = i.default.getId();
        a.default.track(o.HAw.CALL_MENU_ITEM_INTERACTED, {
          location: s,
          menu_name: n,
          menu_item_type: t,
          entrypoint: d,
          targets_self: null == u ? void 0 : u === p,
          guild_id: E,
          channel_id: h,
          channel_type: _,
          tile_type: c,
        });
      }
    },
    556525(e, t, n) {
      n.d(t, { O: () => d, v: () => u });
      var i,
        r = n(64700),
        l = n(17928),
        a = n(775602),
        s = n(531685);
      function o(e, t) {
        return 0.5 + (t - 0.5) / (1 + Math.exp(-0.03 * (e - -45)));
      }
      var d =
        (((i = {}).BOTH = "BOTH"),
        (i.INSET_ONLY = "INSET_ONLY"),
        (i.OUTSET_ONLY = "OUTSET_ONLY"),
        i);
      function u(e) {
        let {
            isSpeaking: t,
            voiceDb: i,
            spreadDirection: d = "BOTH",
            maxOuterSpreadRadius: u = 3,
            maxInnerSpreadRadius: c = 1,
            hideIfVolumeMissing: h = !1,
          } = e,
          E = n(773371).default,
          {
            shouldReduceMotion: _,
            useForcedColors: p,
            isAppFocusedOrOverlayVisible: A,
          } = (0, l.cf)([a.A, s.A, E], () => ({
            shouldReduceMotion: a.A.useReducedMotion,
            useForcedColors: a.A.useForcedColors,
            isAppFocusedOrOverlayVisible:
              s.A.isAppFocused() || null != E.getFocusedPID(),
          }));
        return r.useMemo(() => {
          let e = {};
          if (i === -1 / 0 && h) return e;
          if (t) {
            let t = 0,
              n = 2,
              r = 3;
            i !== -1 / 0 &&
              !_ &&
              A &&
              ((t = "INSET_ONLY" === d ? 0 : o(i, u)),
              (n = "OUTSET_ONLY" === d ? 0 : o(i, c)),
              (r = "OUTSET_ONLY" === d ? 0 : n + 1));
            let l = p ? "Highlight" : "var(--status-speaking)";
            e.boxShadow = `0 0 0 ${t}px ${l}, inset 0 0 0 ${n}px ${l}, inset 0 0 0 ${r}px var(--background-base-lower)`;
          }
          return A && (e.transition = "box-shadow 50ms ease-out"), e;
        }, [t, A, _, p, i, d, u, c, h]);
      }
    },
    883600(e, t, n) {
      n.d(t, { A: () => S });
      var i = n(17928),
        r = n(506774),
        l = n(228366),
        a = n(773669),
        s = n(253932),
        o = n(617617),
        d = n(559868);
      let u = {},
        c = {},
        h = null,
        E = null,
        _ = null,
        p = "lastChangeLogDate",
        A = null,
        f = null,
        g = new Set();
      function I() {
        A = s.pK.getSetting();
      }
      class T extends i.Ay.Store {
        static displayName = "ChangelogStore";
        initialize() {
          this.waitFor(a.default, o.A),
            this.syncWith([a.default], () => !0),
            this.syncWith([o.A], I);
          let e = r.w.get(p);
          if (null != e)
            try {
              f = new Date(e);
            } catch {
              r.w.remove(p);
            }
        }
        getChangelog(e, t) {
          return u[e]?.[t] ?? null;
        }
        latestChangelogId() {
          return h;
        }
        getChangelogLoadStatus(e, t) {
          return c[e]?.[t] ?? d._f.NOT_LOADED;
        }
        hasLoadedConfig() {
          return null != _;
        }
        getConfig() {
          return _;
        }
        overrideId() {
          return E;
        }
        lastSeenChangelogId() {
          return A;
        }
        lastSeenChangelogDate() {
          return f;
        }
        getStateForDebugging() {
          return {
            changelogConfig: _,
            loadedChangelogs: c,
            lastSeenChangelogId: A,
            lastSeenChangelogDate: f,
          };
        }
        isLocked() {
          return g.size > 0;
        }
      }
      let S = new T(l.h, {
        CHANGE_LOG_LOCK: function (e) {
          let { key: t } = e;
          if (g.has(t)) return !1;
          (g = new Set(g)).add(t);
        },
        CHANGE_LOG_UNLOCK: function (e) {
          let { key: t } = e;
          if (!g.has(t)) return !1;
          (g = new Set(g)).delete(t);
        },
        CHANGE_LOG_SET_CONFIG: function (e) {
          let { config: t, latestChangelogId: n } = e;
          (h = n), (_ = t);
        },
        CHANGE_LOG_FETCH_SUCCESS: function (e) {
          let { id: t, changelog: n } = e;
          null == u[t] && (u[t] = {}),
            (u[t][n.locale] = {
              id: t,
              date: n.date,
              body: n.content,
              revision: 1,
              locale: n.locale,
              [n.asset_type === d.PW.YOUTUBE_VIDEO_ID
                ? "youtube_video_id"
                : "image"]: n.asset,
            }),
            null == c[t] && (c[t] = {}),
            (c[t][n.locale] = d._f.LOADED_SUCCESS);
        },
        CHANGE_LOG_FETCH_FAILED: function (e) {
          let { id: t, locale: n } = e;
          if (null != u[t] && null != u[t][n]) return !1;
          null == c[t] && (c[t] = {}), (c[t][n] = d._f.LOADED_FAILURE);
        },
        CHANGE_LOG_SET_OVERRIDE: function (e) {
          let { id: t } = e;
          E = t;
        },
        CHANGE_LOG_MARK_SEEN: function (e) {
          let { changelogDate: t } = e;
          (f = new Date(t)), r.w.set(p, t);
        },
      });
    },
    717125(e, t, n) {
      n.d(t, { A: () => R });
      var i = n(17928),
        r = n(228366),
        l = n(836039),
        a = n(98318),
        s = n(855918),
        o = n(164956),
        d = n(95701),
        u = n(34457),
        c = n(734057),
        h = n(696451),
        E = n(317525),
        _ = n(71393),
        p = n(287809),
        A = n(652215);
      let f = {},
        g = new Set();
      function I(e) {
        let { guildId: t, role: n, isPreviewingRoles: i } = e;
        return (
          !!(0, a.U)(n) &&
          !!(
            i ||
            (0, a.X)(n ?? void 0) ||
            (function (e, t) {
              if (null == e) return !1;
              let n = p.default.getCurrentUser();
              if (null == n) return !1;
              let i = h.Ay.getMember(t, n.id);
              return null != i && i.roles.includes(e.id);
            })(n, t)
          )
        );
      }
      function T(e, t) {
        if (
          !t.features.has(A.GuildFeatures.CREATOR_MONETIZABLE) &&
          !t.features.has(A.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)
        )
          return !1;
        let n = o.A.isViewingServerShop(t.id);
        for (let i of Object.keys(e.permissionOverwrites)) {
          let r = E.A.getRole(t.id, i);
          if (!I({ guildId: t.id, role: r, isPreviewingRoles: n })) continue;
          let l = e.permissionOverwrites[i];
          if ((0, s.Uj)(e, l)) return !0;
        }
        let i = E.A.getEveryoneRole(t),
          r = !(0, u._m)(i, A.xBc.VIEW_CHANNEL),
          l = (0, s.AN)(e, e.permissionOverwrites[t.id]);
        if (r && !l) {
          for (let e of E.A.getSortedRoles(t.id))
            if (
              I({ guildId: t.id, role: e, isPreviewingRoles: n }) &&
              (0, s.iR)(e)
            )
              return !0;
        }
        return !1;
      }
      function S(e, t) {
        let n = f[e];
        if (null == n) return !1;
        let i = c.A.getChannel(t);
        if (null == i) return !1;
        let r = _.A.getGuild(i.getGuildId());
        if (null == r) return !1;
        let l = n.has(t),
          a = T(i, r);
        return l !== a && (a ? n.add(t) : n.delete(t), !0);
      }
      function m() {
        (f = {}), g.clear();
      }
      function O(e) {
        let { guild: t } = e;
        delete f[t.id];
      }
      function C(e) {
        let { guildId: t } = e;
        delete f[t];
      }
      function N(e) {
        let { channel: t } = e;
        return null != t.guild_id && S(t.guild_id, t.id);
      }
      class y extends i.Ay.Store {
        static displayName = "GatedChannelStore";
        initialize() {
          this.waitFor(c.A, h.Ay, E.A, _.A, o.A, p.default);
        }
        isChannelGated(e, t) {
          if (null == e) return !1;
          let n = f[e];
          return (
            null == n &&
              (!(function (e) {
                let t = _.A.getGuild(e);
                if (null == t) return;
                let n = (f[e] = new Set());
                if (!t.features.has(A.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED))
                  return;
                let i = c.A.getMutableGuildChannelsForGuild(e);
                for (let e in i) {
                  let r = i[e];
                  T(r, t) && n.add(r.id);
                }
              })(e),
              (n = f[e])),
            null != n && n.has(t)
          );
        }
        isChannelGatedAndVisible(e, t) {
          return null != e && this.isChannelGated(e, t) && !g.has(e);
        }
        isChannelOrThreadParentGated(e, t) {
          if (null == e) return !1;
          if (this.isChannelGated(e, t)) return !0;
          let n = c.A.getChannel(t);
          return (
            !!(null != n && null != n.parent_id && d.Le.has(n?.type)) &&
            this.isChannelOrThreadParentGated(e, n.parent_id)
          );
        }
      }
      let R = new y(r.h, {
        CONNECTION_OPEN: m,
        OVERLAY_INITIALIZE: m,
        CACHE_LOADED_LAZY: m,
        GUILD_CREATE: O,
        GUILD_UPDATE: O,
        GUILD_DELETE: O,
        GUILD_ROLE_CREATE: C,
        GUILD_ROLE_UPDATE: C,
        GUILD_ROLE_DELETE: C,
        IMPERSONATE_UPDATE: C,
        IMPERSONATE_STOP: C,
        CHANNEL_CREATE: N,
        CHANNEL_DELETE: N,
        CHANNEL_UPDATES: function (e) {
          let { channels: t } = e,
            n = !1;
          for (let e of t)
            null != e.guild_id && S(e.guild_id, e.id) && (n = !0);
          return n;
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: function (e) {
          let { guildId: t, restrictions: n } = e;
          (0, l.Y5)(n) ? g.add(t) : g.delete(t);
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function (e) {
          let { guildId: t } = e;
          g.add(t);
        },
      });
    },
    408018(e, t, n) {
      function i() {
        return {
          textValue: "",
          richValue: [{ type: "line", children: [{ text: "" }] }],
        };
      }
      function r(e) {
        return { textValue: e, richValue: a(e) };
      }
      n.d(t, { N3: () => i, QR: () => s, ur: () => r, x7: () => a });
      let l = Object.freeze([
        Object.freeze({
          type: "line",
          children: Object.freeze([Object.freeze({ text: "" })]),
        }),
      ]);
      function a(e) {
        return "" !== e
          ? e
              .split("\n")
              .map((e) => ({ type: "line", children: [{ text: e }] }))
          : l;
      }
      function s(e) {
        switch (e.type) {
          case "userMention":
            return { type: "userMention", userId: e.userId };
          case "channelMention":
            return { type: "channelMention", channelId: e.channelId };
          case "soundboard":
            return {
              type: "soundboard",
              guildId: e.guildId,
              soundId: e.soundId,
            };
          case "roleMention":
            return { type: "roleMention", roleId: e.roleId };
          case "textMention":
            return { type: "textMention", text: e.name };
          case "emoji":
            return {
              type: "emoji",
              name: e.emoji.name,
              surrogate: e.emoji.surrogate,
            };
          case "customEmoji":
            return {
              type: "customEmoji",
              emojiId: e.emoji.emojiId,
              name: e.emoji.name,
              animated: e.emoji.animated,
            };
          case "testInlineVoid":
            throw Error("Unable to convert test types");
        }
        return null;
      }
    },
    323350(e, t, n) {
      n.d(t, { IQ: () => f, WO: () => p }), n(321073);
      var i = n(284009),
        r = n.n(i),
        l = n(47167),
        a = n(379418),
        s = n(209932),
        o = n(734057),
        d = n(317525),
        u = n(994500),
        c = n(967198),
        h = n(287809),
        E = n(427262),
        _ = n(820066);
      function p(e, t) {
        let {
            mode: n,
            ignoreTrailingEmptyNodes: i,
            preventEmojiSurrogates: r,
          } = t ?? {},
          [l, a] = t?.range != null ? _.ZF.edges(t.range) : [void 0, void 0];
        return A(e, {
          mode: n,
          start: l,
          end: a,
          ignoreTrailingEmptyNodes: i,
          preventEmojiSurrogates: r,
        });
      }
      function A(e, t) {
        let {
            mode: n,
            start: i,
            end: r,
            separator: l,
            ignoreEmptyNodes: a,
            ignoreTrailingEmptyNodes: s,
            preventEmojiSurrogates: o,
          } = t ?? {},
          d = e.length > 0 && !_.l5.isText(e[0]);
        null == l && (l = d ? "\n" : "");
        let u = i?.path[0] ?? 0,
          c = r?.path[0] ?? e.length - 1;
        if (s)
          for (let t = c; t >= u; t--) {
            let n = e[t];
            if (_.l5.isText(n)) {
              if (n.text.length > 0) {
                c = t;
                break;
              }
            } else if (!_.cv.isEmpty(n)) {
              c = t;
              break;
            }
            if (t === u) return "";
          }
        let h = u > 0 && _.AS.isType(e[u - 1], "blockQuote"),
          E = _.AS.isType(e[u], "blockQuote"),
          p = _.AS.isType(e[c], "blockQuote"),
          A = [];
        for (let t = u; t <= c; t++) {
          let l = e[t];
          if (a && _.l5.isText(l) && 0 === l.text.length) continue;
          let s = f(l, {
            mode: n,
            start:
              null != i && t === u
                ? { path: i.path.slice(1), offset: i.offset }
                : void 0,
            end:
              null != r && t === c
                ? { path: r.path.slice(1), offset: r.offset }
                : void 0,
            allowBlockQuotePrefix: null == i || null == r || (!h && (!E || p)),
            preventEmojiSurrogates: o,
          });
          (!a || s.length > 0) && A.push(s);
        }
        return A.join(l);
      }
      function f(e, t) {
        let {
          mode: n,
          start: i,
          allowBlockQuotePrefix: p = !1,
          preventEmojiSurrogates: f = !1,
        } = t ?? {};
        if (_.l5.isText(e))
          return (function (e, t) {
            let { start: n, end: i } = t ?? {};
            return (
              r()(
                null == n || 0 === n.path.length,
                "Invalid start provided to serializeText",
              ),
              r()(
                null == i || 0 === i.path.length,
                "Invalid end provided to serializeText",
              ),
              e.substring(n?.offset ?? 0, i?.offset ?? e.length)
            );
          })(e.text, t);
        switch (e.type) {
          case "line":
          case "testInline":
            return A(e.children, t);
          case "testInlineVoid":
            return "";
          case "blockQuote": {
            let n = A(e.children, t),
              r =
                null != i &&
                1 === i.path.length &&
                0 === i.path[0] &&
                0 === i.offset;
            if (p && (null == i || r)) return `> ${n}`;
            return n;
          }
          case "emoji": {
            let t = e.emoji;
            if (!f && null != t.surrogate) return t.surrogate;
            return t.name;
          }
          case "customEmoji": {
            let t = e.emoji;
            if ("raw" === n) {
              let e = t.animated ? "a" : "",
                n = t.name.replace(/:/g, "").split("~")[0];
              return `<${e}:${n}:${t.emojiId}>`;
            }
            return t.name;
          }
          case "textMention":
            return e.name;
          case "channelMention": {
            let t = `<#${e.channelId}>`;
            if ("raw" === n) return t;
            let i = o.A.getChannel(e.channelId);
            if (null == i) return t;
            return (0, l.m1)(i, h.default, u.A, !0, !0);
          }
          case "soundboard": {
            let t = `<sound:${e.guildId}:${e.soundId}>`;
            if ("raw" === n) return t;
            let i = s.A.getSoundById(e.soundId);
            if (null == i) return t;
            return i.name;
          }
          case "staticRouteLink":
            return null != e.itemId
              ? `<id:${e.id}:${e.itemId}>`
              : `<id:${e.id}>`;
          case "roleMention": {
            let t = `<@&${e.roleId}>`;
            if ("raw" === n) return t;
            let i = c.A.getGuildId(),
              r = null != i ? d.A.getRole(i, e.roleId) : void 0;
            if (null == r) return t;
            return `@${r.name}`;
          }
          case "userMention": {
            let t = `<@${e.userId}>`;
            if ("raw" === n) return t;
            let i = h.default.getUser(e.userId);
            if (null == i) return t;
            return `@${E.Ay.getUserTag(i, { decoration: "never" })}`;
          }
          case "commandMention":
            return `</${e.commandName}:${e.commandId}>`;
          case "timestamp":
            return (0, a.tf)(e.parsed.timestamp, e.parsed.format);
          case "timestampMentionInput": {
            let n = A(e.children, t);
            if (null == i) return `<@time:${n}>`;
            return n;
          }
          case "applicationCommand":
            return A(e.children, {
              ...t,
              separator: " ",
              ignoreEmptyNodes: !0,
            });
          case "applicationCommandOption": {
            let n = A(e.children, t);
            if (null == i) return `${e.optionDisplayName}:${n}`;
            return n;
          }
        }
      }
    },
    696016(e, t, n) {
      n.d(t, {
        Fv: () => h,
        GU: () => L,
        LX: () => u,
        Ot: () => _,
        P4: () => E,
        T2: () => M,
        U_: () => O,
        V0: () => I,
        VP: () => D,
        Vi: () => A,
        YM: () => U,
        cM: () => v,
        dV: () => b,
        gC: () => F,
        iJ: () => P,
        kd: () => g,
        l_: () => T,
        mk: () => C,
        nm: () => N,
        nx: () => f,
        on: () => c,
        qh: () => G,
        s3: () => R,
        sc: () => S,
        sz: () => p,
        vZ: () => y,
        wN: () => w,
        zj: () => m,
      });
      var i,
        r,
        l,
        a,
        s,
        o = n(626584),
        d = n(927813),
        u =
          (((i = {})[(i.SECONDS_30 = 30 * d.A.Millis.SECOND)] = "SECONDS_30"),
          (i[(i.MINUTES_1 = d.A.Millis.MINUTE)] = "MINUTES_1"),
          (i[(i.MINUTES_2 = 2 * d.A.Millis.MINUTE)] = "MINUTES_2"),
          i),
        c =
          (((r = {})[(r.ALL = 0)] = "ALL"),
          (r[(r.FRIENDS = 1)] = "FRIENDS"),
          r),
        h =
          (((l = {}).DECOUPLED = "decoupled"),
          (l.VIEWER = "viewer"),
          (l.STREAMER = "streamer"),
          (l.VOICE = "voice"),
          l),
        E =
          (((a = {})[(a.Error = 0)] = "Error"),
          (a[(a.Disabled = 1)] = "Disabled"),
          (a[(a.Enabled = 2)] = "Enabled"),
          a);
      let _ = "alt+c",
        p = "f12",
        A = 6 * d.A.Millis.SECOND,
        f = new o.A("Clips"),
        g = 5,
        I = 2,
        T =
          /(NVIDIA GeForce GTX (98|10|16).*|Radeon RX 5(500|600|).*|Radeon RX5.*)/,
        S =
          /(NVIDIA GeForce (RTX (20|30|40|50).*))|(.*Radeon RX (57|58|59|6|7|9).*)/,
        m = 0.1,
        O = 0,
        C = 200,
        N = "clips-gallery",
        y = 640,
        R = 360,
        L = 100,
        v = (e) => `Clip - ${new Date(e).toLocaleString()}`,
        D = 15,
        b = 3e4,
        U = 30,
        P = 10;
      d.A.Millis.DAY;
      let M = 20,
        w = 1,
        G = 50;
      var F =
        (((s = {}).ALL = ":all"),
        (s.APPLICATION = ":application"),
        (s.VOICE = ":voice"),
        (s.SOUNDBOARD = ":soundboard"),
        s);
    },
    372684(e, t, n) {
      n.d(t, { Gy: () => s, k9: () => o, nQ: () => d, rb: () => u });
      var i,
        r,
        l,
        a,
        s =
          (((i = {}).MANUAL = "manual"),
          (i.DISTRIBUTED = "distributed"),
          (i.PHRASE = "phrase"),
          (i.YELLING = "yelling"),
          (i.LAUGHTER = "laughter"),
          (i.GAME_EVENT = "game_event"),
          (i.SPEAKING = "speaking"),
          (i.SOUNDBOARD = "soundboard"),
          i),
        o =
          (((r = {}).UNKNOWN = "unknown"),
          (r.BELOW_MINIMUM = "below_minimum"),
          (r.MEETS_MINIMUM = "meets_minimum"),
          (r.MEETS_AUTO_ENABLE = "meets_auto_enable"),
          r),
        d =
          (((l = {}).CLIP = "clip"),
          (l.SCREENSHOT = "screenshot"),
          (l.VOICE_CLIP = "voice_clip"),
          l),
        u =
          (((a = {}).KILL = "kill"),
          (a.MULTIKILL = "multikill"),
          (a.DEATH = "death"),
          (a.ASSIST = "assist"),
          (a.ITEM = "item"),
          (a.VICTORY = "victory"),
          (a.DEFEAT = "defeat"),
          (a.LEVEL_UP = "level_up"),
          (a.TREASURE = "treasure"),
          (a.OBJECTIVE_KILL = "objective_kill"),
          a);
    },
    439818(e, t, n) {
      n.d(t, { A: () => r });
      let i = /[^a-zA-Z0-9-_.]/g,
        r = function (e) {
          return e.trim().replaceAll(" ", "_").replaceAll(i, "");
        };
    },
    315949(e, t, n) {
      n.d(t, { A: () => l });
      var i = n(354328),
        r = n(747198);
      function l(e, t) {
        let n = e?.paymentGateway,
          l = (0, i.A)("shop_disable_cache"),
          a = (0, i.A)("shop_include_unpublished");
        return (0, r.i)(
          {
            noCache: l,
            includeUnpublished: a,
            paymentGateway: n,
            logPerf: e?.logPerf,
          },
          void 0,
          t,
        );
      }
    },
    608960(e, t, n) {
      n.d(t, { A: () => u });
      var i = n(810531),
        r = n(548965),
        l = n(137903),
        a = n(770335);
      function s(e, t) {
        let n = {};
        for (let r of t)
          n[r.id] = {
            [i.L]: "RawGuildEmoji",
            guildId: e,
            id: r.id,
            animated: r.animated,
            name: r.name,
            require_colons: r.require_colons,
            available: r.available,
            roles: r.roles,
            managed: r.managed,
            version: r.version,
            type: a.i.GUILD,
          };
        return n;
      }
      class o extends l.yW {
        static displayName = "RawGuildEmojiStore";
        database = this.addKKVDatabase("guild_emojis");
        stateWrapper() {
          return this.database;
        }
        getGuildEmojis(e) {
          return this.database.getNullablePartition(e);
        }
      }
      function d(e, t, n) {
        if ("full_sync" === t.op) n.setPartition(e, s(e, t.items));
        else {
          let i = n.getNullablePartition(e);
          if (null == i) n.setPartition(e, s(e, t.writes));
          else if (t.writes.length > 0 || t.deletes.length > 0) {
            let r = { ...i };
            for (let e of t.deletes) delete r[e];
            for (let n of t.writes) Object.assign(r, s(e, [n]));
            n.setPartition(e, r);
          }
        }
      }
      let u = new o(
        {
          LOGOUT: (e, t) => t.clear(),
          BACKGROUND_SYNC: (e, t) => t.clear(),
          RESET_SOCKET: (e, t) => t.clear(),
          CONNECTION_OPEN: (e, t) => {
            let { guilds: n, unavailableGuilds: i } = e,
              r = new Set(n.map((e) => e.id));
            for (let e of i) r.add(e);
            for (let e of t.getPartitionKeys())
              r.has(e) || t.removePartition(e);
            for (let e of n) d(e.id, e.emojis, t);
          },
          OVERLAY_INITIALIZE: (e, t) => {
            t.clear(),
              Object.entries(e.emojis).forEach((e) => {
                let [n, i] = e;
                t.setPartition(n, s(n, i));
              });
          },
          CACHED_EMOJIS_LOADED: (e, t) => {
            for (let [n, i] of e.emojis) t.setPartition(n, s(n, i));
          },
          GUILD_CREATE: (e, t) => {
            d(e.guild.id, e.guild.emojis, t);
          },
          GUILD_UPDATE: (e, t) => {
            t.setPartition(e.guild.id, s(e.guild.id, e.guild.emojis));
          },
          GUILD_EMOJIS_UPDATE: (e, t) => {
            t.setPartition(e.guildId, s(e.guildId, e.emojis));
          },
          GUILD_DELETE: (e, t) => {
            t.removePartition(e.guild.id);
          },
        },
        r.P4.getCachedBridgedStoreMode(),
      );
    },
    639841(e, t, n) {
      n.d(t, { A: () => h });
      var i = n(17928),
        r = n(228366),
        l = n(736056),
        a = n(710195),
        s = n(129922),
        o = n(704913),
        d = n(652215);
      function u() {
        o.l.trigger(),
          s.TY.getConfig({ location: "connection_open" }).emitEvent &&
            Promise.resolve()
              .then(n.bind(n, 954571))
              .then((e) => {
                let { default: t } = e;
                t.track(d.HAw.EXPERIMENT_APEX_DEBUGGING_EVENT, {
                  experiment: "2026-03-debug-experiment",
                  apex_debug_variant: 1,
                  experiment_location: "connection_open",
                });
              });
      }
      class c extends i.Ay.Store {
        static displayName = "ExperimentTriggerPointStore";
        constructor() {
          super(r.h, { CONNECTION_OPEN: u }, r.A.Early);
        }
        initialize() {
          this.waitFor(l.A, a.A);
        }
      }
      let h = new c();
    },
    457699(e, t, n) {
      n.d(t, { A: () => c });
      var i = n(17928),
        r = n(228366),
        l = n(320095),
        a = n(390248);
      let s = {};
      function o(e) {
        return `${e.channel_id}:${e.id}`;
      }
      function d(e) {
        let { data: t } = e;
        (s = {}),
          t.forEach((e) => {
            let { messages: t } = e;
            t.forEach((e) => {
              e.forEach((e) => {
                s[o(e)] = (0, l.rh)(e);
              });
            });
          });
      }
      class u extends i.Ay.Store {
        static displayName = "SearchMessageStore";
        getMessage(e, t) {
          return s[o({ id: e, channel_id: t })];
        }
      }
      let c = new u(r.h, {
        SEARCH_MESSAGES_SUCCESS: d,
        MOD_VIEW_SEARCH_MESSAGES_SUCCESS: d,
        MESSAGE_UPDATE: function (e) {
          let { message: t } = e;
          if (null == t.id || null == t.channel_id) return !1;
          let n = o(t),
            i = s[n];
          return (
            null != i &&
            ((s[n] = (0, l.IU)(i, {
              attachments: t.attachments,
              embeds: t.embeds,
            })),
            !0)
          );
        },
        LOGOUT: function () {
          s = {};
        },
        CONNECTION_OPEN: function () {
          s = {};
        },
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
          let { messageId: t, channelId: n } = e,
            i = o({ id: t, channel_id: n }),
            r = s[i];
          null != r && (s[i] = (0, a.Td)(r));
        },
      });
    },
    800828(e, t, n) {
      n.d(t, { A: () => T }), n(321073);
      var i = n(17928),
        r = n(713402),
        l = n(228366),
        a = n(994500),
        s = n(652215);
      let o = (e, t) => `${t}-${e}`,
        d = (e) => `application-id-${e}`,
        u = (e) => `user-id-${e}`,
        c = (e) => `relationship-type-${e}`,
        h = new r.J(
          function (e) {
            let t = [];
            return (
              t.push(d(e.applicationId)), t.push(u(e.id)), t.push(c(e.type)), t
            );
          },
          (e) => `${e.since}`,
        ),
        E = 0,
        _ = 0,
        p = 0;
      function A() {
        let e = 0,
          t = 0,
          n = 0;
        h.values().forEach((i) => {
          let { type: r, id: l } = i;
          if (r === s.eA$.FRIEND) n += 1;
          else if (r === s.eA$.PENDING_OUTGOING) t += 1;
          else if (r === s.eA$.PENDING_INCOMING) {
            if (a.A.isSpam(l) || a.A.isIgnored(l)) return;
            e += 1;
          }
        }),
          (E = e),
          (_ = t),
          (p = n);
      }
      function f(e) {
        h.set(o(e.id, e.applicationId), e);
      }
      function g(e, t) {
        h.delete(o(e, t));
      }
      class I extends i.Ay.Store {
        static displayName = "GameRelationshipStore";
        initialize() {
          this.waitFor(a.A);
        }
        getPendingIncomingCount() {
          return E;
        }
        getPendingOutgoingCount() {
          return _;
        }
        getGameFriendCount() {
          return p;
        }
        getGameFriendsForApplication(e) {
          return h.values(d(e), !0).filter((e) => e.type === s.eA$.FRIEND);
        }
        getGameRelationshipsForUser(e) {
          return h.values(u(e), !0);
        }
        getGameRelationshipsForUserByType(e, t) {
          return this.getGameRelationshipsForUser(e).filter(
            (e) => e.type === t,
          );
        }
        getGameFriendsForUser(e) {
          return this.getGameRelationshipsForUserByType(e, s.eA$.FRIEND);
        }
        getGameRelationshipCount() {
          return h.size();
        }
        getGameRelationships() {
          return h;
        }
        getGameRelationshipsByType(e) {
          return h.values(c(e), !0);
        }
        getGameRelationshipsVersion() {
          return h.version;
        }
      }
      let T = new I(l.h, {
        CONNECTION_OPEN: function (e) {
          h.clear(),
            e.gameRelationships.forEach((e) => {
              f({
                id: e.id,
                applicationId: e.application_id,
                type: e.type,
                since: e.since,
                dmAccessType: e.dm_access_type,
              });
            }),
            A();
        },
        GAME_RELATIONSHIP_ADD: function (e) {
          f(e.gameRelationship), A();
        },
        GAME_RELATIONSHIP_REMOVE: function (e) {
          g(e.userId, e.applicationId), A();
        },
        APPLICATIONS_FETCH_SUCCESS: function (e) {
          let { unknownApplicationIds: t } = e;
          if (null != t) {
            for (let e of t)
              for (let t of h.values(d(e)))
                (t.type === s.eA$.PENDING_INCOMING ||
                  t.type === s.eA$.PENDING_OUTGOING) &&
                  g(t.id, e);
            A();
          }
        },
      });
    },
    507263(e, t, n) {
      n.d(t, { B: () => u }), n(142703), n(321073);
      var i = n(228366),
        r = n(426620),
        l = n(366853);
      let a = [];
      function s() {
        return null != r.A.getType();
      }
      function o() {
        s() || (a.forEach((e) => d(e)), (a = []));
      }
      function d(e) {
        setImmediate(() => e());
      }
      function u(e) {
        l.A.isConnectedOrOverlay() && !s() ? d(e) : a.push(e);
      }
      i.h.subscribe("CONNECTION_OPEN", o),
        i.h.subscribe("CONNECTION_RESUMED", o),
        i.h.subscribe("NUF_COMPLETE", o);
    },
    8917(e, t, n) {
      let i;
      n.d(t, { A: () => D }),
        n(393431),
        n(532706),
        n(42231),
        n(232424),
        n(949626),
        n(767709),
        n(65162);
      var r = n(284009),
        l = n.n(r),
        a = n(735438),
        s = n.n(a),
        o = n(636537),
        d = n(823598),
        u = n(201327),
        c = n(451988),
        h = n(228366),
        E = n(626584),
        _ = n(253932),
        p = n(616356),
        A = n(495544),
        f = n(723702),
        g = n(19575),
        I = n(652896),
        T = n(325278),
        S = n(652215),
        m = n(731854);
      let O = new c.Ep(),
        C = !1,
        N = window.document.createElement("canvas");
      (N.width = 512), (N.height = 288);
      let y = N.getContext("2d");
      function R() {
        O.stop(), null != i && (i = null);
      }
      let L = s().debounce((e, t, n, i) => {
        v(
          e,
          (0, I._z)({
            streamType: null != t ? T.U4.GUILD : T.U4.CALL,
            guildId: t,
            channelId: n,
            ownerId: i,
          }),
        );
      }, 500);
      async function v(e, t) {
        if (
          i !== e ||
          ((0, f.isWeb)() && _.uh.getSetting()) ||
          p.A.getIsActiveStreamPreviewDisabled(t)
        )
          return;
        let n = () => v(e, t);
        if (!C)
          try {
            var r, a;
            let n, s, c, E, _, p, I, T;
            (r = await ((a = e),
            (T = 0),
            (f.isPlatformEmbedded
              ? function (e, t) {
                  let n = (0, d.lE)();
                  return new Promise((r, l) => {
                    n.getNextVideoOutputFrame(e).then(
                      (e) => {
                        try {
                          null != e && t(e) && r(e);
                        } catch (e) {
                          l(e);
                        }
                      },
                      (t) => {
                        i === e && l(t);
                      },
                    );
                  });
                }
              : function (e, t) {
                  let n = (0, u.yL)(e);
                  if (null == n) return Promise.resolve(new ImageData(0, 0));
                  let { width: i, height: r } = n
                      .getVideoTracks()[0]
                      .getSettings(),
                    l = document.createElement("video"),
                    a = document.createElement("canvas");
                  (l.width = a.width = i ?? 512),
                    (l.height = a.height = r ?? 288),
                    (l.srcObject = n),
                    l.play();
                  let s = a.getContext("2d");
                  return new Promise((e, n) => {
                    l.ontimeupdate = () => {
                      s?.drawImage(l, 0, 0, a.width, a.height);
                      let i = s?.getImageData(0, 0, a.width, a.height);
                      try {
                        null != i && t(i) && e(i);
                      } catch (e) {
                        n(e);
                      }
                    };
                  }).finally(() => {
                    (l.ontimeupdate = null),
                      l.removeAttribute("srcObject"),
                      l.load();
                  });
                })(a, (e) => {
              if (new Uint32Array(e.data.buffer).some((e) => 0 !== e))
                return !0;
              if (++T > 60)
                throw Error(
                  `Timed out awaiting non-black frame after ${60} frames`,
                );
              return !1;
            }))),
              (n = 512 / r.width),
              (s = Math.min(n, 288 / r.height)),
              (c = r.width * s),
              (E = r.height * s),
              (N.width = c),
              (N.height = E),
              (p = (_ = window.document.createElement("canvas")).getContext(
                "2d",
              )),
              (_.width = r.width),
              (_.height = r.height),
              (I = new ImageData(r.data, r.width, r.height)),
              p?.putImageData(I, 0, 0),
              y?.drawImage(_, 0, 0, r.width, r.height, 0, 0, c, E);
            let m = N.toDataURL("image/jpeg");
            if (
              (h.h.dispatch({
                type: "STREAM_PREVIEW_FETCH_SUCCESS",
                streamKey: t,
                previewURL: m,
              }),
              f.isPlatformEmbedded)
            ) {
              let e = A.default.getToken();
              l()(null != e, "Auth token was null while sending screenshot."),
                await g.Ay.makeChunkedRequest(
                  S.Rsh.STREAM_PREVIEW(t),
                  { thumbnail: m },
                  { method: "POST", token: e },
                );
            } else
              await o.Bo.post({
                url: S.Rsh.STREAM_PREVIEW(t),
                body: { thumbnail: m },
                oldFormErrors: !0,
                rejectWithError: !1,
              });
          } catch (t) {
            new E.A("ApplicationStreamPreviewUploadManager").error(
              "Failed to post stream preview",
              t,
            ),
              i === e && O.start(6e4, n);
            return;
          }
        i === e && (C ? O.start(6e4, n) : O.start(3e5, n));
      }
      let D = {
        init() {
          h.h.subscribe("CONNECTION_OPEN", R),
            h.h.subscribe("LOGOUT", R),
            h.h.subscribe("STREAM_DELETE", R),
            h.h.subscribe("RTC_CONNECTION_VIDEO", (e) => {
              let {
                guildId: t,
                channelId: n,
                userId: r,
                streamId: l,
                context: a,
              } = e;
              null == l ||
                a !== m.x.STREAM ||
                r !== A.default.getId() ||
                __OVERLAY__ ||
                (R(), (i = l), L(l, t, n, r));
            }),
            h.h.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", (e) => {
              let { videoState: t } = e;
              C = t === S.uPF.PAUSED;
            });
        },
      };
    },
    125318(e, t, n) {
      n.d(t, { A: () => O });
      var i,
        r = n(228366),
        l = n(827343),
        a = n(401843),
        s = n(626584),
        o = n(118356),
        d = n(403362);
      let u = "1402418696126992445";
      function c(e, t) {
        if (null == t) return null;
        if (t.applicationId === u) {
          let n, i, r;
          return (
            (n =
              t.processPath.length > 1
                ? t.processPath[t.processPath.length - 2]
                : 0),
            void 0 !==
            (r = (i = e.filter(
              (e) => e.applicationId === u && e.processPath.includes(n),
            )).find((e) => "league of legends.exe" === e.executableName))
              ? r
              : i.length > 0
                ? i[0]
                : null
          );
        }
        let n = new Map(e.map((e) => [e.processId, e])),
          i = t.processPath.map((e) => n.get(e)).find((e) => null != e);
        if (null == i) return null;
        let r = e
          .map((e) => {
            let t = e.processPath.findIndex((e) => n.has(e));
            return -1 === t
              ? null
              : { application: e, rootedPath: e.processPath.slice(t) };
          })
          .filter(d.Vq)
          .filter((e) => e.rootedPath[0] === i.processId);
        r.sort((e, t) => {
          let i = e.rootedPath
              .map((e) => n.get(e))
              .filter((e) => null != e && null != e.windowHandle),
            r = h(
              t.rootedPath
                .map((e) => n.get(e))
                .filter((e) => null != e && null != e.windowHandle),
              i,
            );
          return 0 !== r ? r : h(t.rootedPath, e.rootedPath);
        });
        let l = r.find((e) => null != e.application.windowHandle) ?? r[0];
        return null == l ? null : l.application;
      }
      function h(e, t) {
        return e.length - t.length;
      }
      var E =
        (((i = {}).STREAM = "stream"),
        (i.PAUSE = "pause"),
        (i.STOP = "stop"),
        i);
      class _ {
        callback;
        active;
        application;
        sound;
        logger;
        constructor(e) {
          (this.callback = e),
            (this.active = !1),
            (this.application = null),
            (this.sound = !0),
            (this.logger = new o.Vy("StreamDirector"));
        }
        onStreamBegin(e, t, n) {
          let i,
            r = null == (i = e.find((e) => e.processId === t)) ? null : c(e, i);
          (this.sound = n),
            null == r || null == r.windowHandle
              ? this.callback({ type: "stop" })
              : this._stream(r);
        }
        onStreamKilled() {
          this._kill();
        }
        onStreamEnd() {
          this._stop();
        }
        onDetectionUpdate(e) {
          this._update(e);
        }
        onCaptureEnd(e, t) {
          this.application?.windowHandle === t && this._update(e);
        }
        onCaptureLegacyEnd(e) {
          return this.application?.windowHandle != null
            ? this.onCaptureEnd(e, this.application.windowHandle)
            : this._stop();
        }
        _update(e) {
          let t = c(e, this.application);
          if (null != t)
            return null == t.windowHandle ? this._pause() : this._stream(t);
          this._stop();
        }
        _stream(e) {
          let t = this.application?.windowHandle !== e.windowHandle;
          (this.active = !0),
            t &&
              this.logger.info(
                `Stream window changed from ${this.application?.windowHandle} to ${e.windowHandle} for application ${e.applicationId}, executableName ${e.executableName}`,
              ),
            (this.application = Object.assign({}, e)),
            t &&
              this.callback({
                type: "stream",
                sourceId: `window:${this.application.windowHandle}`,
                sound: this.sound,
              });
        }
        _kill() {
          (this.active = !1), (this.application = null);
        }
        _stop() {
          this.active && (this._kill(), this.callback({ type: "stop" }));
        }
        _pause() {
          this.active &&
            ((this.application.windowHandle = null),
            this.callback({ type: "pause" }));
        }
      }
      var p = n(929921),
        A = n(616356),
        f = n(495544),
        g = n(652896),
        I = n(338771),
        T = n(652215),
        S = n(731854);
      class m {
        director;
        applications;
        streamKey;
        mode;
        constructor() {
          (this.mode = null),
            (this.applications = []),
            (this.director = new _((e) => this._onDirectorAction(e))),
            r.h.subscribe("STREAM_START", (e) => {
              let {
                  streamType: t,
                  guildId: n,
                  channelId: i,
                  pid: r,
                  sourceId: l,
                  audioSourceId: a,
                  sound: o,
                } = e,
                d = f.default.getId(),
                u = (0, g._z)({
                  streamType: t,
                  guildId: n,
                  channelId: i,
                  ownerId: d,
                });
              (null == r) != (null == l)
                ? (null != r && this._onStreamApplication(u, r, o ?? !0),
                  null != l && this._onStreamDirectSource(u, l, a, o))
                : new s.A("ApplicationSwitchingManager").warn(
                    `invalid start_stream: both application + display modes were specified (pid: ${r}, source-id: ${l})`,
                  );
            }),
            r.h.subscribe("STREAM_DELETE", (e) => {
              let { streamKey: t } = e;
              this._onStreamKilled(t);
            }),
            r.h.subscribe("STREAM_STOP", (e) => {
              let { streamKey: t } = e;
              this._onStreamEnd(t);
            }),
            r.h.subscribe("RUNNING_GAMES_CHANGE", (e) => {
              let { games: t } = e;
              this._onGameDetectionUpdate(t);
            }),
            r.h.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", (e) => {
              let { videoState: t, context: n } = e;
              n === S.x.STREAM && this._onCapturePaused(t === T.uPF.PAUSED);
            }),
            r.h.subscribe("MEDIA_ENGINE_SET_GO_LIVE_SOURCE", (e) => {
              let { settings: t, errorCode: n } = e;
              t?.context === S.x.STREAM &&
                t?.desktopSettings == null &&
                t?.cameraSettings == null &&
                this._onCaptureEnded(null == n),
                t?.desktopSettings?.sound != null &&
                  (this.director.sound = t.desktopSettings.sound);
            });
        }
        _onGameDetectionUpdate(e) {
          (this.applications = e.map((e) => ({
            applicationId: e.id ?? null,
            processId: e.pid,
            processPath: e.pidPath,
            windowHandle: e.windowHandle ?? null,
            executableName: e.exeName,
          }))),
            "verbatim-source" !== this.mode &&
              this.director.onDetectionUpdate(this.applications);
        }
        _onStreamApplication(e, t, n) {
          (this.mode = "application"),
            (this.streamKey = e),
            this.director.onStreamBegin(this.applications, t, n);
        }
        _onStreamDirectSource(e, t, n, i) {
          (this.mode = "verbatim-source"),
            (this.streamKey = e),
            (this.director.sound = i ?? !0),
            (this.director.application = null),
            this._onDirectorAction({
              type: E.STREAM,
              sourceId: t,
              audioSourceId: n,
              sound: i,
            });
        }
        _onStreamEnd(e) {
          let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          if (this.streamKey === e)
            switch (((this.streamKey = null), this.mode)) {
              case "application":
                this.director.onStreamEnd();
                break;
              case "verbatim-source":
                this._onDirectorAction({ type: E.STOP, alsoClose: t });
                break;
              default:
                throw Error(`unknown streaming mode: ${this.mode ?? "(none)"}`);
            }
        }
        _onStreamKilled(e) {
          if (this.streamKey === e)
            switch (((this.streamKey = null), this.mode)) {
              case "application":
                this.director.onStreamKilled();
                break;
              case "verbatim-source":
                break;
              default:
                throw Error(`unknown streaming mode: ${this.mode ?? "(none)"}`);
            }
        }
        _onDirectorAction(e) {
          let t = A.A.getCurrentUserActiveStream(),
            n = p.A.getState();
          switch (e.type) {
            case E.STREAM:
              if (
                (null != t && (0, a.TZ)(t, !1),
                e.sourceId.startsWith("camera") && null != e.audioSourceId)
              ) {
                let t = e.sourceId.split(":")[1];
                l.A.setGoLiveSource({
                  cameraSettings: {
                    videoDeviceGuid: t,
                    audioDeviceGuid: e.audioSourceId,
                  },
                  qualityOptions: {
                    preset: n.preset,
                    resolution: n.resolution,
                    frameRate: n.fps,
                  },
                  context: S.x.STREAM,
                });
              } else
                l.A.setGoLiveSource({
                  desktopSettings: {
                    sourceId: e.sourceId,
                    sound: e.sound ?? !0,
                  },
                  qualityOptions: {
                    preset: n.preset,
                    resolution: n.resolution,
                    frameRate: n.fps,
                  },
                  context: S.x.STREAM,
                });
              break;
            case E.PAUSE:
              null != t && (0, a.TZ)(t, !0);
              break;
            case E.STOP:
              null != t && (0, I.A)(t, !0, e.alsoClose ?? !0);
              break;
            default:
              throw Error(`unhandled stream action: ${e.type}`);
          }
        }
        _onCapturePaused(e) {
          let t = A.A.getCurrentUserActiveStream();
          null != t && (0, a.TZ)(t, e);
        }
        _onCaptureEnded() {
          let e =
            !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
          switch (this.mode) {
            case "application":
              this._onCapturePaused(!0);
              break;
            case "verbatim-source":
              null != this.streamKey && this._onStreamEnd(this.streamKey, e);
              break;
            default:
              throw Error(`unknown streaming mode: ${this.mode ?? "(none)"}`);
          }
        }
      }
      let O = {
        instance: null,
        init() {
          null == this.instance && (this.instance = new m());
        },
      };
    },
    384684(e, t, n) {
      n.d(t, { A: () => C });
      var i = n(17928),
        r = n(228366),
        l = n(260509),
        a = n(34457),
        s = n(696451),
        o = n(317525),
        d = n(71393),
        u = n(287809),
        c = n(98318),
        h = n(652215);
      let E = new Set(),
        _ = new Map(),
        p = new Map(),
        A = new Map(),
        f = new Map(),
        g = null;
      function I(e) {
        let t = u.default.getCurrentUser(),
          n = d.A.getGuild(e);
        if (null == n || null == t) return !1;
        let i = new Set(),
          r = new Set(),
          E = new Set();
        if (
          (f.set(e, (0, l.bM)(n, t)),
          n.features.has(h.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED))
        ) {
          let l = s.Ay.getMember(e, t.id),
            d = new Set(l?.roles ?? []);
          for (let t of o.A.getSortedRoles(n.id))
            (0, c.U)(t) &&
              (i.add(t.id),
              (0, c.X)(t) && (r.add(t.id), d.has(t.id) && E.add(t.id))),
              d.has(t.id) && (0, a._m)(t, h.xBc.ADMINISTRATOR) && f.set(e, !0);
        }
        return _.set(e, i), A.set(e, E), p.set(e, r), !0;
      }
      function T() {
        _.clear(), A.clear(), p.clear(), f.clear(), (g = null);
      }
      function S(e) {
        let {
          guild: { id: t },
        } = e;
        if (null == g) return !1;
        let n = d.A.getGuild(t);
        if (null == n) return !1;
        let i = n.features.has(
          h.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE,
        );
        if (i && !g.has(t)) {
          let e = new Set(g);
          return e.add(t), (g = e), !0;
        }
        if (!i && g.has(t)) {
          let e = new Set(g);
          return e.delete(t), (g = e), !0;
        }
        return !1;
      }
      function m(e) {
        let { guildId: t } = e;
        return !!_.has(t) && I(t);
      }
      class O extends i.Ay.Store {
        static displayName = "SubscriptionRoleStore";
        initialize() {
          this.waitFor(d.A, o.A, u.default, s.Ay);
        }
        getGuildIdsWithPurchasableRoles() {
          if (null != g) return g;
          let e = d.A.getGuildsArray(),
            t = new Set();
          for (let n of e)
            n.features.has(
              h.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE,
            ) && t.add(n.id);
          return (g = t), t;
        }
        buildRoles(e) {
          _.has(e) || I(e);
        }
        getSubscriptionRoles(e) {
          return this.buildRoles(e), _.get(e) ?? E;
        }
        getPurchasableSubscriptionRoles(e) {
          return this.buildRoles(e), p.get(e) ?? E;
        }
        getUserSubscriptionRoles(e) {
          return this.buildRoles(e), A.get(e) ?? E;
        }
        getUserIsAdmin(e) {
          return this.buildRoles(e), f.get(e) ?? !1;
        }
      }
      let C = new O(r.h, {
        CONNECTION_OPEN: T,
        LOGOUT: T,
        GUILD_CREATE: S,
        GUILD_DELETE: function (e) {
          let {
            guild: { id: t },
          } = e;
          if (g?.has(t) !== !0) return !1;
          let n = new Set(g);
          n.delete(t), (g = n);
        },
        GUILD_UPDATE: S,
        GUILD_ROLE_CREATE: m,
        GUILD_ROLE_UPDATE: m,
        GUILD_ROLE_DELETE: m,
        GUILD_MEMBER_UPDATE: function (e) {
          let { guildId: t, user: n } = e,
            i = u.default.getCurrentUser();
          return !!(n.id === i?.id && _.has(t)) && I(t);
        },
      });
    },
    707592(e, t, n) {
      n.d(t, { Py: () => u, Ul: () => d, uR: () => o });
      var i = n(627968);
      n(64700);
      var r = n(192308),
        l = n(686956),
        a = n(652215),
        s = n(231723);
      function o(e) {
        let { eventId: t, recurrenceId: l } = e;
        (0, r.openModalLazy)(async () => {
          let { default: e } = await Promise.all([
            n.e("17637"),
            n.e("33297"),
            n.e("22021"),
            n.e("26558"),
          ]).then(n.bind(n, 640132));
          return (n) =>
            (0, i.jsx)(e, {
              guildScheduledEventId: t,
              initialRecurrenceId: l,
              ...n,
            });
        });
      }
      async function d(e, t) {
        let { guild_id: n } = e;
        await l.A.transitionToGuildSync(n, t), o({ eventId: e.id, event: e });
      }
      function u(e, t) {
        (0, r.openModalLazy)(
          async () => {
            let { default: t } = await n.e("34526").then(n.bind(n, 521549));
            return (n) => (0, i.jsx)(t, { ...n, channel: e });
          },
          { contextKey: t === a.BRT.POPOUT ? s.KX : s.SY },
        );
      }
    },
    669715(e, t, n) {
      n.d(t, { t: () => i });
      function i(e) {
        if (null == e) return !1;
        for (var t = 0; t < e.length; t++)
          if (e[t].voiceState.selfStream) return !0;
        return !1;
      }
    },
    685073(e, t, n) {
      n.d(t, {
        Rg: () => c,
        Wb: () => p,
        Zo: () => E,
        gC: () => h,
        gS: () => _,
        q0: () => u,
      });
      var i = n(17928),
        r = n(229527),
        l = n(696451),
        a = n(71393),
        s = n(287809),
        o = n(743981),
        d = n(652215);
      function u(e) {
        return e?.profile?.tag != null;
      }
      function c(e) {
        return e.features.has(d.GuildFeatures.GUILD_TAGS);
      }
      function h(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : o.Sl.SIZE_12;
        if (null == t) return;
        let { CDN_HOST: i } = window.GLOBAL_ENV;
        if (null == i) return;
        let r = o.lv[n];
        return `https://${i}/clan-badges/${e}/${t}.png?size=${r}`;
      }
      function E(e) {
        return null != e && e.identityEnabled
          ? { guildId: e.identityGuildId, tag: e.tag, badge: e.badge }
          : {};
      }
      function _(e) {
        let t = (0, i.bG)([a.A], () => a.A.getGuild(e), [e]);
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
      function p(e, t, n) {
        let a = (0, i.bG)([s.default], () => s.default.getUser(e), [e]),
          o = (0, i.bG)(
            [l.Ay],
            () => {
              if (null == t || null == e) return null;
              let n = l.Ay.getMember(t, e);
              return (0, r.TR)(n);
            },
            [t, e],
          ),
          { tag: d, guildId: u } = E(void 0 !== n ? n : a?.primaryGuild);
        return null != u && null != d && !o;
      }
    },
    292572(e, t, n) {
      n.d(t, { A: () => d });
      var i = n(636537),
        r = n(228366),
        l = n(954571),
        a = n(177773),
        s = n(652215);
      let o = new Map(),
        d = {
          resolveGuildTemplate: function e(t) {
            if (r.h.isDispatching()) return Promise.resolve().then(() => e(t));
            let n = o.get(t);
            if (null != n) return n;
            r.h.dispatch({ type: "GUILD_TEMPLATE_RESOLVE", code: t });
            let d = i.Bo.get({
              url: s.Rsh.UNRESOLVED_GUILD_TEMPLATE(t),
              oldFormErrors: !0,
              rejectWithError: !0,
            })
              .then(
                (e) => {
                  let n = e.body;
                  return (
                    l.default.track(s.HAw.GUILD_TEMPLATE_RESOLVED, {
                      resolved: !0,
                      guild_template_code: t,
                      guild_template_name: n.name,
                      guild_template_description: n.description,
                      guild_template_guild_id: n.source_guild_id,
                    }),
                    r.h.dispatch({
                      type: "GUILD_TEMPLATE_RESOLVE_SUCCESS",
                      guildTemplate: n,
                      code: t,
                    }),
                    { guildTemplate: (0, a.A)(n), code: t }
                  );
                },
                () => (
                  l.default.track(s.HAw.GUILD_TEMPLATE_RESOLVED, {
                    resolved: !1,
                    guild_template_code: t,
                  }),
                  r.h.dispatch({
                    type: "GUILD_TEMPLATE_RESOLVE_FAILURE",
                    code: t,
                  }),
                  { guildTemplate: null, code: t }
                ),
              )
              .finally(() => {
                o.delete(t);
              });
            return o.set(t, d), d;
          },
          loadTemplatesForGuild: (e) =>
            i.Bo.get({
              url: s.Rsh.GUILD_TEMPLATES(e),
              oldFormErrors: !0,
              rejectWithError: !1,
            }).then(
              (e) => (
                r.h.dispatch({
                  type: "GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS",
                  guildTemplates: e.body,
                }),
                e
              ),
            ),
          createGuildTemplate: (e, t, n) =>
            i.Bo.post({
              url: s.Rsh.GUILD_TEMPLATES(e),
              body: { name: t, description: n },
              oldFormErrors: !0,
              rejectWithError: !1,
            }).then((e) => {
              r.h.dispatch({
                type: "GUILD_TEMPLATE_CREATE_SUCCESS",
                guildTemplate: e.body,
                code: e.body.code,
              });
            }),
          syncGuildTemplate: (e, t) =>
            i.Bo.put({
              url: s.Rsh.GUILD_TEMPLATE(e, t),
              oldFormErrors: !0,
              rejectWithError: !1,
            }).then((e) => {
              r.h.dispatch({
                type: "GUILD_TEMPLATE_SYNC_SUCCESS",
                guildTemplate: e.body,
                code: t,
              });
            }),
          updateGuildTemplate: (e, t, n, l) =>
            i.Bo.patch({
              url: s.Rsh.GUILD_TEMPLATE(e, t),
              body: { name: n, description: l },
              oldFormErrors: !0,
              rejectWithError: !1,
            }).then((e) => {
              r.h.dispatch({
                type: "GUILD_TEMPLATE_SYNC_SUCCESS",
                guildTemplate: e.body,
                code: t,
              });
            }),
          deleteGuildTemplate: (e, t) =>
            i.Bo.del({
              url: s.Rsh.GUILD_TEMPLATE(e, t),
              oldFormErrors: !0,
              rejectWithError: !1,
            }).then(() => {
              r.h.dispatch({
                type: "GUILD_TEMPLATE_DELETE_SUCCESS",
                guildId: e,
                code: t,
              });
            }),
        };
    },
    692744(e, t, n) {
      n.d(t, { el: () => d, xf: () => o });
      var i = n(572808),
        r = n(368662),
        l = n(985018);
      function a(e) {
        return { userId: e.user_id, position: e.position, avatar: e.avatar };
      }
      function s(e) {
        return { id: e.id, claimedBy: e.claimed_by };
      }
      function o(e) {
        return {
          roomId: e.room_id,
          participants: e.participants.map(a),
          seats: e.seats.map(s),
        };
      }
      function d(e) {
        switch (e) {
          case i.wS.RADIO:
            return l.intl.string(r.default.AjiGKB);
          case i.wS.ENVIRONMENT:
            return l.intl.string(r.default.YEYIbI);
          case i.wS.CAMPFIRE:
            return l.intl.string(r.default["Vk9+Ez"]);
          default:
            return "";
        }
      }
    },
    572808(e, t, n) {
      n.d(t, {
        PZ: () => d,
        TU: () => s,
        dG: () => h,
        oo: () => u,
        qS: () => c,
        qi: () => o,
        wS: () => E,
      });
      var i,
        r,
        l,
        a,
        s =
          (((i = {}).SLEEPY = "sleepy"),
          (i.CHILL = "chill"),
          (i.JAZZY = "jazzy"),
          i),
        o =
          (((r = {}).ENVIRONMENT = "environment"),
          (r.CAMPFIRE = "campfire"),
          r),
        d =
          (((l = {}).NONE = "none"),
          (l.GOLDFISH = "goldfish"),
          (l.GOLDFISH_BLUE = "goldfishBlue"),
          (l.GOLDFISH_PINK = "goldfishPink"),
          (l.POPCORN = "popcorn"),
          (l.POPCORN_PURPLE = "popcornPurple"),
          (l.POPCORN_BLUE = "popcornBlue"),
          (l.IMP = "imp"),
          (l.IMP_BLUE = "impBlue"),
          (l.IMP_PINK = "impPink"),
          l);
      let u = [
          "none",
          "goldfish",
          "goldfishBlue",
          "goldfishPink",
          "popcorn",
          "popcornPurple",
          "popcornBlue",
          "imp",
          "impBlue",
          "impPink",
        ],
        c = {
          none: {
            name: "none",
            width: 0,
            height: 0,
            offset: { top: 0, left: 0 },
          },
          goldfish: {
            name: "goldfish",
            width: 136,
            height: 236,
            offset: { top: 100, left: -6 },
          },
          goldfishBlue: {
            name: "goldfishBlue",
            width: 136,
            height: 236,
            offset: { top: 100, left: -6 },
          },
          goldfishPink: {
            name: "goldfishPink",
            width: 136,
            height: 236,
            offset: { top: 100, left: -6 },
          },
          popcorn: {
            name: "popcorn",
            width: 128,
            height: 124,
            offset: { top: 24, left: -60 },
          },
          popcornPurple: {
            name: "popcornPurple",
            width: 128,
            height: 124,
            offset: { top: 24, left: -60 },
          },
          popcornBlue: {
            name: "popcornBlue",
            width: 128,
            height: 124,
            offset: { top: 24, left: -60 },
          },
          imp: {
            name: "imp",
            width: 160,
            height: 176,
            offset: { top: 72, left: -28 },
          },
          impBlue: {
            name: "impBlue",
            width: 160,
            height: 176,
            offset: { top: 72, left: -28 },
          },
          impPink: {
            name: "impPink",
            width: 160,
            height: 176,
            offset: { top: 72, left: -28 },
          },
        },
        h = [
          {
            id: 1,
            x: 722,
            y: 1203,
            dimensions: { width: 123, height: 102 },
            player: { x: 54, y: 12 },
            assetKey: "cooler",
            shadowPosition: { x: -79, y: 102 },
          },
          {
            id: 2,
            x: 894,
            y: 1100,
            dimensions: { width: 123, height: 157 },
            player: { x: 62, y: 72 },
            assetKey: "chair",
            shadowPosition: { x: -28, y: 161 },
          },
          {
            id: 3,
            x: 1024,
            y: 1156,
            dimensions: { width: 122, height: 58 },
            player: { x: 48, y: 10 },
            assetKey: "leftRock",
          },
          {
            id: 4,
            x: 1173,
            y: 1175,
            dimensions: { width: 144, height: 64 },
            player: { x: 0, y: 0 },
            assetKey: "logLeft",
          },
          {
            id: 5,
            x: 1312,
            y: 1184,
            dimensions: { width: 156, height: 74 },
            player: { x: 0, y: 12 },
            assetKey: "logRight",
          },
          {
            id: 6,
            x: 1398,
            y: 1254,
            dimensions: { width: 116, height: 60 },
            player: { x: -24, y: 0 },
            assetKey: "rightRock",
          },
        ];
      var E =
        (((a = {}).RADIO = "radio"),
        (a.ENVIRONMENT = "environment"),
        (a.CAMPFIRE = "campfire"),
        a);
    },
    962392(e, t, n) {
      n.d(t, { O: () => l, h: () => a });
      var i = n(600975),
        r = n(688151);
      let l = (0, i.C)({
        kind: "guild",
        id: "2026-04_voice_invite_suggestion_placement",
        label: "Voice Invite Suggestion Placement",
        commonTriggerPoint: r.$G.VOICE_CALL,
        defaultConfig: { placement: "top" },
        treatments: [
          {
            id: 0,
            label: "Control (Top Placement)",
            config: { placement: "top" },
          },
          {
            id: 1,
            label: "Treatment (Bottom Placement)",
            config: { placement: "bottom" },
          },
        ],
      });
      function a(e, t) {
        return l.useExperiment(
          { guildId: e.guildId, location: e.location },
          { autoTrackExposure: t.autoTrackExposure },
        );
      }
    },
    548965(e, t, n) {
      n.d(t, {
        FH: () => f,
        ML: () => d,
        P4: () => E,
        hw: () => I,
        iQ: () => p,
        pX: () => T,
        pd: () => _,
      }),
        n(321073);
      var i = n(284009),
        r = n.n(i),
        l = n(306173),
        a = n(626584),
        s = n(723426);
      let o = new a.A("libdiscoreExperiments"),
        d = [],
        u = Symbol("unknown");
      class c {
        id;
        inner = null;
        cachedConfig = u;
        constructor(e, t) {
          (this.id = e), d.push(this);
        }
        getEnabledFeatureName() {
          let e = this.getCachedConfig();
          return void 0 === e || e.treatmentId <= 0
            ? null
            : `${this.id}:${e.treatmentId}`;
        }
        getCachedConfig() {
          return (
            this.cachedConfig === u &&
              ((0, l.xd)()
                ? (this.cachedConfig = (0, l.Ih)().getConfig(this.id))
                : (this.cachedConfig = void 0)),
            this.cachedConfig
          );
        }
        setExperiment(e) {
          this.inner = e;
        }
        getCurrentConfig() {
          return (r()(
            null != this.inner,
            "experiment must be set before calling getCurrentConfig",
          ),
          "getCurrentConfig" in this.inner)
            ? this.inner.getCurrentConfig({ location: "default" })
            : this.inner.getConfig({ location: "default" });
        }
      }
      class h extends c {
        label;
        defaultValue;
        constructor(e, t, n = !1) {
          super(e), (this.label = t), (this.defaultValue = n);
        }
        getLabel() {
          return this.label;
        }
        getTreatments() {
          return [{ treatmentId: 0 }, { treatmentId: 1 }];
        }
        getCachedEnabled() {
          let e = this.getCachedConfig();
          return null == e || -1 === e.treatmentId
            ? this.defaultValue
            : 1 === e.treatmentId;
        }
      }
      let E = new (class extends c {
          storeName;
          constructor(e, t, n) {
            super(e, n), (this.storeName = t);
          }
          getCachedBridgedStoreMode() {
            let e = this.getCachedConfig(),
              t = (() => {
                switch (e?.treatmentId ?? -1) {
                  case 1:
                    return "typescript-libdiscore-dual-read";
                  case 2:
                    return "libdiscore";
                  default:
                    return "typescript";
                }
              })();
            return (0, s.E)(t);
          }
          getEnabledFeatureName() {
            let e = this.getCachedBridgedStoreMode();
            return "typescript" === e
              ? null
              : `BridgedStore[${this.storeName},${e}]`;
          }
          getLabel() {
            return `libdiscore '${this.storeName}' Migration`;
          }
          getTreatments() {
            return [{ treatmentId: 0 }, { treatmentId: 1 }, { treatmentId: 2 }];
          }
        })("2026-01-libdiscore-batch-store-refactor", "batch-store-refactor"),
        _ = new (class extends c {
          MAX_EMISSIONS_PER_APP_LAUNCH = 5;
          emissionsCount = 0;
          getLabel() {
            return "libdiscore Telemetry";
          }
          getTreatments() {
            return [
              { treatmentId: 0 },
              { treatmentId: 1 },
              { treatmentId: 2 },
              { treatmentId: 3 },
            ];
          }
          getMetricsSampleRate() {
            let e = this.getCachedConfig();
            switch (e?.treatmentId) {
              case 1:
                return 0.01;
              case 2:
                return 0.05;
              case 3:
                return 1;
              default:
                return 0;
            }
          }
          didEmit() {
            this.emissionsCount++;
          }
          shouldCollectMetrics() {
            let e = this.getMetricsSampleRate();
            return (
              0 !== e &&
              (1 === e ||
                (!(this.emissionsCount >= this.MAX_EMISSIONS_PER_APP_LAUNCH) &&
                  Math.random() < e))
            );
          }
        })("2025-09-libdiscore-telemetry"),
        p = new h(
          "2025-11-defer-load-late-lazy-cache",
          "Allow react to render before lazy cache is loaded",
        );
      class A extends c {
        label;
        treatmentCount;
        getLabel() {
          return this.label;
        }
        getTreatments() {
          return Array.from({ length: this.treatmentCount }, (e, t) => ({
            treatmentId: t,
          }));
        }
        constructor(e, t, n) {
          super(e), (this.label = t), (this.treatmentCount = n);
        }
      }
      let f = new A("2026-01-android-rmle", "Android Pull Mode Rendering", 4);
      new A("2026-02-android-fresco-cache", "Android Fresco Cache", 3),
        new h(
          "2026-02-android-chat-mosaic-shared-pool",
          "Android Chat Mosaic Shared Pool",
        ),
        new h(
          "2026-03-mobile-hermes-occupancy-target",
          "Android Hermes Occupancy Target",
        );
      let g = !1;
      function I() {
        return g;
      }
      function T() {
        (0, l.xd)() &&
          (o.info("Clearing libdiscore experiment cache and disabling sync"),
          (g = !0),
          (0, l.Ih)().clearCache());
      }
    },
    917878(e, t, n) {
      n.d(t, { A: () => a, a: () => i }), n(134528), n(947204);
      let i = "NativeAppStartup";
      function r(e, t, n, i, r) {
        return `${e}:${t}:${n}:${i}:${r}`;
      }
      class l {
        channelsFetchStarted = new Set();
        channelsFetchedWithLocalMessages = new Set();
        channelsFetchedNetwork = new Set();
        fetchLogs = new Map();
        recordChannelFetchStart(e, t, n, i, l) {
          this.channelsFetchStarted.add(e),
            this.fetchLogs.set(r(e, t, n ?? null, i ?? null, l), {
              channelId: e,
              before: n ?? null,
              after: i ?? null,
              limit: l,
              startTime: Date.now(),
            });
        }
        recordChannelFetchedLocal(e, t, n, i, l, a) {
          this.channelsFetchedWithLocalMessages.add(e);
          let s = this.fetchLogs.get(r(e, t, n ?? null, i ?? null, l));
          null != s &&
            (s.localMessageDetails = {
              loadTime: Date.now(),
              count: a.length,
              lastMessageId: a.at(-1)?.id,
            });
        }
        recordChannelFetchedNetwork(e, t, n, i, l, a) {
          this.channelsFetchedNetwork.add(e);
          let s = this.fetchLogs.get(r(e, t, n ?? null, i ?? null, l));
          null != s &&
            (s.networkMessageDetails = {
              loadTime: Date.now(),
              count: a.length,
              lastMessageId: a.at(-1)?.id,
            });
        }
      }
      let a = new l();
    },
    121780(e, t, n) {
      n.d(t, { A: () => d });
      var i = n(17928),
        r = n(228366),
        l = n(518977);
      let a = null;
      function s(e) {
        let { countryCode: t } = e;
        null != t && (a = (0, l.XF)(t) ?? (0, l.rE)());
      }
      class o extends i.Ay.Store {
        static displayName = "LocationMetadataStore";
        getCountryCode() {
          return a;
        }
      }
      let d = new o(r.h, { CONNECTION_OPEN: s, SET_LOCATION_METADATA: s });
    },
    205297(e, t, n) {
      n.d(t, { A: () => I, S: () => g });
      var i = n(627968),
        r = n(64700),
        l = n(503698),
        a = n.n(l),
        s = n(735438),
        o = n(761929),
        d = n(483517),
        u = n(699426),
        c = n(652215),
        h = n(806931),
        E = n(201181);
      let _ = {
          [c.CUs.TOP_RIGHT]: E.En,
          [c.CUs.TOP_LEFT]: E.rG,
          [c.CUs.BOTTOM_LEFT]: E.j$,
          [c.CUs.BOTTOM_RIGHT]: E.Ue,
        },
        p = {
          [c.CUs.TOP_RIGHT]: o.R.HORIZONTAL_LEFT,
          [c.CUs.TOP_LEFT]: o.R.HORIZONTAL_RIGHT,
          [c.CUs.BOTTOM_LEFT]: o.R.HORIZONTAL_RIGHT,
          [c.CUs.BOTTOM_RIGHT]: o.R.HORIZONTAL_LEFT,
        };
      function A(e, t) {
        let n = 40 * Math.round(e / 40);
        return (0, s.clamp)(n, t.minWidth, t.maxWidth);
      }
      function f(e) {
        let {
            resizableNode: t,
            onResize: n,
            onResizeEnd: l,
            resizeConfig: s,
            position: d,
          } = e,
          u = (0, o.A)({
            minDimension: s.minWidth,
            maxDimension: s.maxWidth + 20,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: l,
            orientation: p[d],
            usePointerEvents: !0,
          }),
          c = r.useCallback(
            (e) => {
              e.stopPropagation(), u(e);
            },
            [u],
          );
        return (0, i.jsx)("div", {
          onMouseDown: c,
          className: a()(E.Di, _[d]),
        });
      }
      class g extends r.PureComponent {
        static defaultProps = { hidden: !1, roundCorners: !0 };
        state = { isResizing: !1 };
        _draggable;
        _innerDivRef = r.createRef();
        _resizeObserver;
        _width = null;
        _boundWidth = 0;
        _boundHeight = 0;
        _velocityX = 0;
        _velocityY = 0;
        _lastMoveTime;
        _lastMoveX = 0;
        _lastMoveY = 0;
        componentDidMount() {
          this.setPosition(this.props.position);
        }
        componentDidUpdate(e) {
          if (
            null != this.props.width &&
            null != this.props.resizeConfig &&
            e.width !== this.props.width
          ) {
            let t = this._width ?? e.width ?? this.props.width;
            (this._width = this.props.width),
              null != this._innerDivRef.current &&
                (Math.abs(t - this._width) > 40 &&
                  (this._innerDivRef.current.style.transition = "none"),
                (this._innerDivRef.current.style.width = `${this.props.width}px`));
          }
          (e.edgeOffsetTop !== this.props.edgeOffsetTop ||
            e.edgeOffsetLeft !== this.props.edgeOffsetLeft ||
            e.edgeOffsetBottom !== this.props.edgeOffsetBottom ||
            e.edgeOffsetRight !== this.props.edgeOffsetRight ||
            e.maxX !== this.props.maxX ||
            e.maxY !== this.props.maxY ||
            e.dockedRect !== this.props.dockedRect ||
            e.roundCorners !== this.props.roundCorners) &&
            (this.ensureIsInPosition(), this.ensureWidth());
        }
        componentWillUnmount() {
          this._resizeObserver?.disconnect();
        }
        getPosition(e) {
          let t = this._innerDivRef.current;
          if (null != t) {
            let e = t.getBoundingClientRect();
            (this._boundWidth = e.width), (this._boundHeight = e.height);
          }
          let {
              edgeOffsetTop: n,
              edgeOffsetLeft: i,
              edgeOffsetBottom: r,
              edgeOffsetRight: l,
              maxX: a,
              maxY: s,
              dockedRect: o,
              getDockedRectPositionY: d,
            } = this.props,
            u = Math.round(n),
            h = Math.round(s - r - this._boundHeight),
            E = Math.round(i),
            _ = Math.round(a - l - this._boundWidth);
          if (null != o) return { y: d?.(o.y) ?? o.y ?? 0, x: o?.x ?? 0 };
          switch (e) {
            case c.CUs.TOP_LEFT:
              return { y: u, x: E };
            case c.CUs.BOTTOM_LEFT:
              return { y: h, x: E };
            case c.CUs.TOP_RIGHT:
              return { y: u, x: _ };
            default:
              return { y: h, x: _ };
          }
        }
        setPosition(e) {
          let { x: t, y: n } = this.getPosition(e);
          this._draggable?.setPosition(t, n);
        }
        animateToPosition(e, t) {
          let { x: n, y: i } = this.getPosition(e);
          this._draggable?.animateToPosition(n, i, {}, t);
        }
        ensureIsInPosition = () => {
          this.setPosition(this.props.position);
        };
        ensureWidth = () => {
          let {
            onResize: e,
            edgeOffsetLeft: t,
            edgeOffsetRight: n,
            maxX: i,
            resizeConfig: r,
          } = this.props;
          if (null == r) return;
          let l = A(i - (t + n), r);
          this.getWidth() > l && ((this._width = l), e?.(l));
        };
        calculateDecayingPosition(e, t, n, i) {
          return { x: e + 200 * n, y: t + 200 * i };
        }
        getXOffset() {
          let {
            position: e,
            edgeOffsetLeft: t,
            edgeOffsetRight: n,
          } = this.props;
          switch (e) {
            case c.CUs.TOP_LEFT:
            case c.CUs.BOTTOM_LEFT:
              return -t;
            default:
              return n;
          }
        }
        getYOffset() {
          let {
            position: e,
            edgeOffsetTop: t,
            edgeOffsetBottom: n,
          } = this.props;
          switch (e) {
            case c.CUs.TOP_LEFT:
            case c.CUs.TOP_RIGHT:
              return -t;
            default:
              return n;
          }
        }
        getWidth() {
          let { width: e } = this.props;
          return this._width ?? e ?? h.fG[h.R8.VIDEO];
        }
        get inPopout() {
          return this.props.appContext === c.BRT.POPOUT;
        }
        handleSetInnerDivRef = (e) => {
          this._innerDivRef.current = e;
          let t = e?.ownerDocument.defaultView;
          null != e &&
            null != t &&
            ((this._resizeObserver = new t.ResizeObserver(
              this.ensureIsInPosition,
            )),
            this._resizeObserver?.observe(e));
        };
        handleSetDraggableRef = (e) => {
          this._draggable = e;
        };
        handleResize = (e) => {
          (this._width = e),
            this.state.isResizing || this.setState({ isResizing: !0 });
        };
        handleResizeEnd = (e) => {
          let { onResize: t, resizeConfig: n } = this.props;
          if (null == n) return;
          let i = A(e, n);
          (this._width = i),
            t?.(i),
            this.setState({ isResizing: !1 }),
            this.ensureWidth();
        };
        handleDragStart = (e, t) => {
          (this._velocityX = 0),
            (this._velocityY = 0),
            (this._lastMoveX = e),
            (this._lastMoveY = t),
            (this._lastMoveTime = new Date()),
            this.props.onDragStart?.(e, t);
        };
        handleDrag = (e, t) => {
          let n = new Date(),
            i = Number(n) - Number(this._lastMoveTime);
          0 !== i &&
            ((this._velocityX = (e - this._lastMoveX) / i),
            (this._velocityY = (t - this._lastMoveY) / i),
            (this._lastMoveX = e),
            (this._lastMoveY = t),
            (this._lastMoveTime = n));
        };
        handleDragEnd = (e, t) => {
          let n,
            { maxX: i, maxY: r } = this.props,
            l = this.calculateDecayingPosition(
              e,
              t,
              this._velocityX,
              this._velocityY,
            ),
            a = !0,
            s = !0;
          if (
            (l.x > i / 2 && (s = !1),
            l.y > r / 2 && (a = !1),
            (n =
              a && s
                ? c.CUs.TOP_LEFT
                : a && !s
                  ? c.CUs.TOP_RIGHT
                  : !a && s
                    ? c.CUs.BOTTOM_LEFT
                    : c.CUs.BOTTOM_RIGHT),
            this.animateToPosition(n, this.ensureIsInPosition),
            n !== this.props.position)
          ) {
            let { id: e, onMove: t } = this.props;
            t?.(e, n);
          }
          this.props.onDragEnd?.(e, t);
        };
        render() {
          let {
              maxX: e,
              maxY: t,
              dockedRect: n,
              hidden: r,
              roundCorners: l,
              className: s,
              position: o,
              resizeConfig: u,
            } = this.props,
            c = this.getWidth(),
            h = {};
          return (
            null != n
              ? (h = {
                  transform: `translate3d(${n.x}, ${n.y}, 0)`,
                  width: n.width,
                  height: n.height,
                })
              : null != u &&
                (h = {
                  width: c,
                  transition: this.state.isResizing
                    ? "none"
                    : "width 0.2s ease-in-out",
                }),
            (0, i.jsxs)(d.A, {
              dragAnywhere: !0,
              ref: this.handleSetDraggableRef,
              className: a()(E.GE, s, { [E.R]: r, [E.Vq]: l }),
              maxX: e,
              maxY: t,
              disabled: null != n,
              onDragStart: this.handleDragStart,
              onDrag: this.handleDrag,
              onDragEnd: this.handleDragEnd,
              children: [
                (0, i.jsx)("div", {
                  ref: this.handleSetInnerDivRef,
                  style: h,
                  children: this.props.children,
                }),
                null != u
                  ? (0, i.jsx)(f, {
                      onResize: this.handleResize,
                      onResizeEnd: this.handleResizeEnd,
                      resizableNode: this._innerDivRef,
                      resizeConfig: u,
                      position: o,
                    })
                  : null,
              ],
            })
          );
        }
      }
      let I = r.memo((e) => {
        let {
            selectedPIPWindow: t,
            pipWindows: n,
            pipWidth: l,
            maxX: s,
            maxY: o,
            onWindowMove: d,
            onWindowResize: h,
            dockedRect: _,
            pictureInPictureComponents: p,
            appContext: A,
            roundCorners: f,
            resizeConfig: I,
            className: T,
            getDockedRectPositionY: S,
          } = e,
          [m, O] = r.useState(!1),
          C = r.useMemo(
            () =>
              null == t
                ? null
                : n.map((e) => {
                    if (
                      e.id !== t.id &&
                      e.component !== c.o1q.ACTIVITY &&
                      e.component !== c.o1q.FRAME
                    )
                      return null;
                    let n =
                      "string" == typeof e.component
                        ? p[e.component]
                        : e.component;
                    return (0, i.jsx)(n, { width: l, ...e.props }, e.id);
                  }),
            [n, t, l, p],
          ),
          N = r.useCallback(() => {
            O(!0);
          }, []),
          y = r.useCallback(() => {
            O(!1);
          }, []),
          R = r.useMemo(
            () => n.some((e) => e.component === c.o1q.ACTIVITY),
            [n],
          ),
          L = r.useMemo(() => n.some((e) => e.component === c.o1q.FRAME), [n]);
        return null == t
          ? (0, i.jsx)(u.Ay, {
              children: (0, i.jsx)("div", { className: E._I }),
            })
          : (0, i.jsx)(u.Ay, {
              children: (0, i.jsx)("div", {
                className: a()(E._I, { [E.cB]: m }, T),
                children: (0, i.jsx)(g, {
                  appContext: A,
                  position: t.position,
                  id: t.id,
                  hidden: t.hidden,
                  onMove: d,
                  onResize: h,
                  onDragStart: N,
                  onDragEnd: y,
                  maxX: s,
                  maxY: o,
                  width: l,
                  dockedRect: _,
                  getDockedRectPositionY: S,
                  edgeOffsetTop: 80,
                  edgeOffsetBottom: 132,
                  edgeOffsetLeft: 80,
                  edgeOffsetRight: 80,
                  roundCorners: f,
                  resizeConfig: R || L ? void 0 : I,
                  children: C,
                }),
              }),
            });
      });
    },
    301169(e, t, n) {
      n.d(t, { k: () => o });
      var i = n(139033),
        r = n(453771),
        l = n(685408),
        a = n(652215),
        s = n(985018);
      function o(e) {
        let { guildId: t, code: n } = e;
        if (void 0 === n) return !1;
        if (n === a.t02.ENTITY_TOO_LARGE) {
          let e = (0, r.o2)(t);
          return (
            (0, i.A)({
              title: s.intl.string(s.t["/tGlcj"]),
              subtitle: s.intl.formatToPlainString(s.t.fxEKdS, {
                maxSize: (0, r.Hb)(e),
              }),
            }),
            !0
          );
        }
        if (n === a.t02.TOO_MANY_ATTACHMENTS)
          return (
            (0, i.A)({
              title: s.intl.string(s.t.wOr6hB),
              subtitle: s.intl.formatToPlainString(s.t["qqyp/e"], {
                limit: a.XgB,
              }),
            }),
            !0
          );
        if (n === a.t02.ENTITY_EMPTY)
          return (
            (0, i.A)({
              title: s.intl.string(s.t.B3vFdU),
              subtitle: s.intl.string(s.t["9ZpT2C"]),
            }),
            !0
          );
        if (n === a.t02.INVALID_FILE_ASSET)
          return (
            (0, i.A)({
              title: s.intl.string(s.t.B3vFdU),
              subtitle: s.intl.string(s.t.zMEjJg),
            }),
            !0
          );
        let o = (0, l.c)(n);
        return (
          null != o && ((0, i.A)({ title: o.title, subtitle: o.body }), !0)
        );
      }
    },
    833551(e, t, n) {
      n.r(t), n.d(t, { default: () => eh }), n(321073);
      var i = n(17928),
        r = n(499979),
        l = n(228366),
        a = n(684013),
        s = n(56562),
        o = n(635731),
        d = n(626584),
        u = n(736056),
        c = n(328153),
        h = n(567249),
        E = n(495544),
        _ = n(760751),
        p = n(723702),
        A = n(9302),
        f = n(211753),
        g = n(206885),
        I = n(41984),
        T = n(181435),
        S = n(318739),
        m = n(515183),
        O = n(592598),
        C = n(682763),
        N = n(680243),
        y = n(392164);
      let R = new d.A("OverlayRenderStore"),
        L = I.V6.UNSET,
        v = !1,
        D = !1,
        b = (0, p.isWindows)() && p.isPlatformEmbedded && !__OVERLAY__,
        U = null,
        P = {},
        M = {},
        w = null,
        G = null,
        F = new Set([
          s.aI.FULLSCREEN,
          s.aI.BORDERLESS_FULLSCREEN,
          s.aI.UNKNOWN,
          s.aI.MINIMIZED,
        ]),
        V = new Set([s.aI.MINIMIZED, s.aI.UNKNOWN]),
        k = !1,
        x = new o.A(1e4);
      function H(e, t, n) {
        let i =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : T.QJ.Info;
        (0, C.aS)({
          pid: e,
          name: t,
          type: T.ON.Renderer,
          data: n,
          logType: i,
        });
      }
      function B() {
        return N.A.isOverlayEnabled;
      }
      function Y(e) {
        return P[e] ?? null;
      }
      function W() {
        return Object.keys(P).map(Number);
      }
      function $(e, t, n) {
        let i = P[e]?.state;
        (P = { ...P, [e]: { ...t } }),
          i !== t.state && a.A.trackOverlayStateChanged(e, i, t.state, n);
      }
      function z(e) {
        return e in P;
      }
      function K(e, t, n, i) {
        let r = Y(e);
        if (null == r)
          return void R.error(
            `Tried to set property ${t} to ${n} for untracked pid ${e}`,
          );
        let l = { ...r };
        (l[t] = n), $(e, l, i);
      }
      function j(e, t) {
        let n = Y(e);
        if (null == n) return;
        let i = n.timer;
        switch (t) {
          case I.sf.SCREEN_TYPE_RESOLUTION:
            i.screenTypeResolutionTimestamp = Date.now();
            break;
          case I.sf.MODULE_TRACKING:
            i.moduleTrackingTimestamp = Date.now();
            break;
          case I.sf.OVERLAY_RENDERING:
            i.overlayRenderingTimestamp = Date.now();
        }
        K(e, "timer", i, "timeOverlayEvent"), ec.emitChange();
      }
      async function q(e) {
        let t = Y(e);
        if (null != t) return t;
        let n = c.Ay.getGameOrTransformedSubgameForPID(e),
          i = Date.now();
        if (null == n)
          return (
            R.error(
              `Tried to track game ${e} but it was not found in RunningGameStore`,
            ),
            null
          );
        let { enabledOOP: r, enabledLegacy: l, ...a } = (0, c.hw)(n),
          s = _.A.findGame(n),
          o = (await (0, m.E1)(e, 0)) ?? n.fullscreenType,
          d = Date.now();
        R.verbose(`Tracking game ${e} for overlay`);
        let u = {
          ...a,
          pid: e,
          oopEnabled: r,
          legacyEnabled: l,
          applicationId: s?.id ?? null,
          gameName: n.name ?? null,
          state: I.AR.INITIALIZING,
          timer: { startTrackingTimestamp: Date.now() },
          fullscreenType: o,
          fullscreenHistory: { [d]: o },
          hasChangedRenderMode: !1,
          supportsOutOfProcess: s?.supportsOutOfProcessOverlay ?? !0,
          successfullyShown: !1,
        };
        return (
          o !== n.fullscreenType && (u.fullscreenHistory[i] = n.fullscreenType),
          $(e, u, "initializeTrackedGame"),
          ec.emitChange(),
          u
        );
      }
      function Z(e, t) {
        switch (L) {
          case I.V6.UNSET:
            break;
          case I.V6.IN_PROCESS_V2:
            return {
              source: I.yp.DEV_OVERRIDE,
              enabledOOP: !1,
              enabledLegacy: !0,
              overlayMethod: I.Ue.Hook,
              reason: "Forced in-process overlay rendering",
            };
          case I.V6.OUT_OF_PROCESS_V3:
            return {
              source: I.yp.DEV_OVERRIDE,
              enabledOOP: !0,
              enabledLegacy: !1,
              overlayMethod: I.Ue.OutOfProcess,
              reason: "Forced out-of-process overlay rendering",
            };
          case I.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION:
            return {
              source: I.yp.DEV_OVERRIDE,
              enabledOOP: !0,
              enabledLegacy: !1,
              overlayMethod: I.Ue.OutOfProcessLimitedInteraction,
              reason:
                "Forced out-of-process limited interaction overlay rendering",
            };
        }
        if (!(B() || v))
          return {
            source: I.yp.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: I.Ue.Disabled,
            reason: "Overlay globally disabled",
          };
        let n = c.Ay.getGameOrTransformedSubgameForPID(e.pid);
        if (null == n)
          return {
            source: I.yp.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: I.Ue.Disabled,
            reason: "No running game found for tracked game",
          };
        let i = (0, c.hw)(n);
        if (!(i.enabledLegacy || i.enabledOOP))
          return {
            source: i.source,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: I.Ue.Disabled,
            reason: i.reason,
          };
        if (!(e.oopEnabled || e.legacyEnabled))
          return {
            source: I.yp.USER_OVERRIDE,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: I.Ue.Disabled,
            reason: "Overlay disabled for specific game",
          };
        if (!B() && v) {
          let e = (0, m.O4)(n);
          return {
            ...e,
            overlayMethod: e.enabledLegacy ? e.overlayMethod : I.Ue.Disabled,
            reason: "isOverlayV3Enabled failed",
          };
        }
        if (!(0, A.supportsOutOfProcess)())
          return {
            ...(0, m.O4)(n),
            source: I.yp.NO_OUT_OF_PROCESS_SUPPORT,
            reason: "supportsOutOfProcess failed",
          };
        if (!i.enabledOOP && i.enabledLegacy)
          return v
            ? {
                ...(0, m.O4)(n),
                source: I.yp.LEGACY_ENABLED,
                reason: "Legacy overlay enabled only",
              }
            : {
                ...i,
                overlayMethod: I.Ue.Disabled,
                source: I.yp.LEGACY_ENABLED,
                reason: "Legacy overlay disabled",
              };
        let r = _.A.findGame(n)?.id,
          l =
            (0, m.zi)(n) || O.A.isLimitedInteractionOverrideEnabled(n.id ?? r);
        switch (t) {
          case s.aI.MINIMIZED:
          case s.aI.WINDOWED:
          case s.aI.MAXIMIZED:
          case s.aI.BORDERLESS_FULLSCREEN: {
            let e = i.enabledOOP && B(),
              r = i.enabledLegacy && v,
              a = l ? I.Ue.OutOfProcessLimitedInteraction : I.Ue.OutOfProcess;
            return {
              ...i,
              overlayMethod: e
                ? a
                : r
                  ? (0, m.O4)(n).overlayMethod
                  : I.Ue.Disabled,
              reason: `Normal case - overlayOOPEnabled: ${e}, overlayLegacyEnabled: ${r}, runningGameFullscreenType: ${t}`,
            };
          }
          case s.aI.FULLSCREEN: {
            let e = (0, m.O4)(n),
              t = e.enabledLegacy && v,
              i = t ? e.overlayMethod : I.Ue.Disabled;
            return {
              ...e,
              overlayMethod: i,
              reason: `Fullscreen - legacyEnabled: ${t}, newOverlayMethod: ${i}`,
            };
          }
          case s.aI.UNKNOWN:
            return {
              source: I.yp.FULL_SCREEN_TYPE,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: I.Ue.Disabled,
              reason: "Unknown fullscreen type",
            };
          default:
            return {
              source: I.yp.DEFAULT,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: I.Ue.Disabled,
              reason: `Missing runningFullscreenType case: ${t}`,
            };
        }
      }
      async function Q(e) {
        if (z(e)) {
          R.verbose(
            `Skipping track for pid ${e} - already tracked. Determining overlay method.`,
          ),
            await er(new Set([e]));
          return;
        }
        if (!(B() || v))
          return void R.verbose(
            `Skipping track for pid ${e} - overlay is disabled`,
          );
        let t = await q(e);
        if (null == t) return void R.error(`Failed to track game ${e}`);
        H(e, "game_tracking_starting", {
          game_name: t.gameName,
          fullscreen_type: t.fullscreenType,
        }),
          K(
            e,
            "state",
            I.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
            "maybeTrackGame - 1",
          ),
          ec.emitChange(),
          R.verbose(`Determining initial overlay method for pid ${e}`);
        let n = await ee(e);
        R.verbose(`Overlay method for pid ${e}: ${(0, m.gK)(n.overlayMethod)}`),
          j(e, I.sf.SCREEN_TYPE_RESOLUTION),
          await et(e, n, "maybeTrackGame - 2"),
          (function e(t) {
            null == w &&
              (__OVERLAY__ &&
                R.error("Running Polling While in Overlay Context!"),
              (w = setTimeout(async () => {
                w = null;
                let t = W();
                t.length > 0 && (e(m.T$), await er(new Set(t)));
              }, t)));
          })(m.T$),
          (G = n.overlayMethod),
          ec.emitChange(),
          await a.A.updateTrackedGame(e, t);
      }
      async function X(e) {
        if (!z(e))
          return void R.verbose(`Skipping untrack for pid ${e} - not tracked`);
        R.verbose(`Untracking game ${e}`);
        let t = Y(e),
          n = {
            source: t?.source ?? I.yp.DEFAULT,
            enabledOOP: t?.oopEnabled ?? !1,
            enabledLegacy: t?.legacyEnabled ?? !1,
            overlayMethod: I.Ue.Disabled,
            reason: "Untracking game",
          };
        await et(e, n, "maybeUntrackGame", !0),
          null != P[e] &&
            ((M[e] = { ...P[e], state: I.AR.GAME_UNTRACKED }), delete P[e]),
          ec.emitChange(),
          await a.A.updateTrackedGame(e, null);
      }
      async function J(e) {
        let t = c.Ay.getGameOrTransformedSubgameForPID(e);
        if (null == t)
          return (
            R.error(
              `Tried to determine first fullscreen type for untracked pid ${e}`,
            ),
            s.aI.UNKNOWN
          );
        let n = t?.fullscreenType ?? s.aI.UNKNOWN;
        if (F.has(n)) {
          let t = await (0, m.E1)(e, 2e3);
          R.verbose(`Resolved fullscreen type for pid ${e}: ${t}`),
            null != t && (n = t);
        }
        return n;
      }
      async function ee(e) {
        let t = await J(e);
        if (V.has(t)) {
          let n = await (0, m.E1)(e, 3e3);
          null != n && (t = n);
        }
        if (t === s.aI.UNKNOWN) {
          let n = await (0, m.E1)(e, 3e3);
          null != n && (t = n);
        }
        let n = Y(e);
        return null == n
          ? (R.error(
              `Tried to determine initial overlay method for untracked pid ${e}`,
            ),
            {
              source: I.yp.NO_TRACKED_GAME,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: I.Ue.Disabled,
              reason: "No tracked game found",
            })
          : Z(n, t);
      }
      async function et(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          r = t.overlayMethod,
          l =
            r === I.Ue.Disabled
              ? i
                ? I.AR.OVERLAY_TEARING_DOWN
                : I.AR.OVERLAY_DISABLED
              : I.AR.WAITING_FOR_MODULE_TRACKING,
          s = `${n}: ${t.reason}`;
        K(e, "state", l, s),
          K(e, "overlayMethod", r, s),
          K(e, "source", t.source, s),
          K(e, "oopEnabled", t.enabledOOP, s),
          K(e, "legacyEnabled", t.enabledLegacy, s),
          R.verbose(
            `Updating overlay method for pid ${e} "${Y(e)?.gameName}" to ${(0, m.gK)(r)}`,
          ),
          ec.emitChange();
        let o = Y(e);
        return (
          null != o && (await a.A.updateTrackedGame(e, o)),
          a.A.updateOverlayMethod(e, r)
        );
      }
      async function en() {
        let e = new Set(
            c.Ay.getRunningGames()
              .filter((e) => c.Ay.getOverlayEnabledForGame(e))
              .map((e) => e.pid),
          ),
          t = new Set(W()),
          n = new Set([...t].filter((t) => !e.has(t)));
        for (let e of n) await X(e), await (0, r.yy)(16);
        let i = new Set([...e].filter((e) => !t.has(e)));
        for (let e of i) await Q(e), await (0, r.yy)(16);
        let l = new Set([...t].filter((t) => e.has(t)));
        await er(l),
          (n.size > 0 || i.size > 0) &&
            R.verbose("Tracked games have changes", {
              trackedPIDsNoLongerValid: n,
              validPIDsNotAlreadyTracked: i,
              pidsAlreadyTracked: l,
            });
      }
      async function ei(e) {
        var t, n, i, r;
        let l = !1,
          a = Y(e);
        if (null == a)
          return (
            R.error(
              `Tried to determine overlay method swap for untracked pid ${e}`,
            ),
            !1
          );
        if (S.Q.has(a.state))
          return (
            R.verbose(
              `Skipping overlay method swap for pid ${e} - state is ${a.state}`,
            ),
            !1
          );
        let s = await (0, m.E1)(e, 0);
        if (null == s)
          return (
            R.error(`Failed to get revised fullscreen type for pid ${e}`), !1
          );
        a.fullscreenType !== s &&
          R.verbose(`Fullscreen type different in swap for pid ${e}`, {
            oldFullscreenType: a.fullscreenType,
            newFullscreenType: s,
          });
        let o = Z(a, s);
        if (
          (a.overlayMethod === o.overlayMethod &&
            a.oopEnabled === o.enabledOOP &&
            a.legacyEnabled === o.enabledLegacy) ||
          ((U === A.UNSET_PID || null === U) &&
            a.state === I.AR.OVERLAY_RENDERING)
        )
          return l;
        let d =
            L === I.V6.OUT_OF_PROCESS_V3 ||
            L === I.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
          u = L === I.V6.IN_PROCESS_V2,
          c = (0, m.e3)(s, B()),
          h = (0, m.Zj)(a, s, B());
        R.verbose(`Overlay method different for pid ${e}`, {
          oldOverlayMethod: a.overlayMethod,
          revisedFullscreenType: s,
          fullscreenHistory: a.fullscreenHistory,
          newOverlayGameStatus: o,
          shouldSwitchToHook: h,
          shouldSwitchToOutOfProcess: c,
          isForcedInProcess: u,
          isForcedOutOfProcess: d,
          legacyEnabled: v,
          overlayEnabled: B(),
        });
        let E = () => {
          R.verbose(`Updating fullscreen type for pid ${e}`, {
            oldFullscreenType: a.fullscreenType,
            newFullscreenType: s,
          }),
            K(
              e,
              "fullscreenHistory",
              { ...a.fullscreenHistory, [Date.now()]: s },
              "updateFullscreenType",
            ),
            K(e, "fullscreenType", s, "updateFullscreenType"),
            ec.emitChange(),
            (l = !0);
        };
        switch (o.overlayMethod) {
          case I.Ue.OutOfProcess:
          case I.Ue.OutOfProcessLimitedInteraction:
            ((c && !u) || d) &&
              (E(),
              await ((t = e),
              (n = o),
              z(t)
                ? Y(t)?.overlayMethod === n.overlayMethod
                  ? (R.verbose(
                      `OOP requested for pid ${t} but already enabled`,
                    ),
                    Promise.resolve())
                  : (R.verbose(`Enabling OOP for pid ${t}`),
                    K(t, "hasChangedRenderMode", !0, "enableOutOfProcess"),
                    et(t, n, "enableOutOfProcess"))
                : (R.verbose(`OOP requested for untracked pid ${t}`),
                  Promise.resolve())));
            break;
          case I.Ue.Hook:
            ((h && !d) || u || v) &&
              (E(),
              await ((i = e),
              (r = o),
              z(i)
                ? Y(i)?.overlayMethod === I.Ue.Hook
                  ? (R.verbose(
                      `Hook requested for pid ${i} but already enabled`,
                    ),
                    Promise.resolve())
                  : (R.verbose(`Enabling hook for pid ${i}`),
                    K(i, "hasChangedRenderMode", !0, "enableHook"),
                    et(i, r, "enableHook"))
                : (R.verbose(`Hook requested for untracked pid ${i}`),
                  Promise.resolve())));
            break;
          case I.Ue.Disabled:
            E(), et(e, o, "determineOverlayMethodSwap - disabled");
        }
        return l;
      }
      async function er(e) {
        let t = !1;
        for (let n of e) (t = (await ei(n)) || t), await (0, r.yy)(16);
        t &&
          (R.info("determineFullscreenOverlayMethodSwaps has changes"),
          ec.emitChange(),
          H(null, "fullscreen_overlay_method_swap_changes", {
            tracked_game_pids: Array.from(e),
          }));
      }
      async function el(e, t) {
        if (!g.O) return void R.verbose("setOverlayEnabled: not supported");
        if (
          (R.info("setOverlayEnabled: supported", {
            newLegacyEnabled: e,
            newOopEnabled: t,
          }),
          (v = e),
          f.x.update({ legacyEnabled: e, oopEnabled: t }),
          R.info("setOverlayEnabled", {
            newOopEnabled: t,
            newLegacyEnabled: e,
          }),
          e || t)
        )
          return void es();
        for (let e of W()) await X(e), await (0, r.yy)(16);
      }
      function ea() {
        en(), (D = !1), (G = null), ed();
      }
      async function es() {
        await eo(), await (0, r.yy)(2e3);
        let e = W(),
          t = new Set([
            ...c.Ay.getRunningGames()
              .filter((e) => c.Ay.getOverlayEnabledForGame(e))
              .map((e) => e.pid),
            ...e,
          ]);
        for (let n of (R.info(
          `Retracking ${t.size} games (${e.length} already tracked)`,
        ),
        t))
          await Q(n), await (0, r.yy)(16);
        R.info(`Retracked ${e.length} games`);
      }
      async function eo() {
        for (let e of W()) await X(e), await (0, r.yy)(16);
      }
      function ed() {
        u.A.hasLoadedExperiments &&
          !D &&
          ((D = !0), el(f.x.legacyEnabled, f.x.oopEnabled));
      }
      class eu extends i.Ay.Store {
        static displayName = "OverlayRenderStore";
        initialize() {
          this.waitFor(E.default, u.A, _.A, O.A, c.Ay, N.A, h.A),
            this.syncWith([u.A], ed);
        }
        getDevToolsFocusedPidsWithTimestamp() {
          return x;
        }
        getHasLoadedExperiments() {
          return D;
        }
        getForcedRenderMode() {
          return L;
        }
        isAnyOverlayRendering() {
          return g.e
            ? h.A.getWindowOpen(y.f)
            : this.getOverlayRenderingTrackedGames().length > 0;
        }
        getOverlayMethod(e) {
          return __OVERLAY__
            ? I.Ue.Hook
            : (Y(e)?.overlayMethod ?? I.Ue.Disabled);
        }
        isOverlayOOPEnabledForPid(e) {
          let t = this.getOverlayMethod(e);
          return (
            t === I.Ue.OutOfProcess || t === I.Ue.OutOfProcessLimitedInteraction
          );
        }
        hasChangedRenderMode(e) {
          return Y(e)?.hasChangedRenderMode ?? !1;
        }
        getTrackedGameByPid(e) {
          return Y(e);
        }
        getTrackedGames() {
          return P;
        }
        getClosedTrackedGamesHistory() {
          return M;
        }
        getGameOverlayStatus(e) {
          let t = Y(e.pid);
          return null == t
            ? null
            : {
                enabledOOP: t.oopEnabled,
                enabledLegacy: t.legacyEnabled,
                ...t,
              };
        }
        getGlobalEnabledStatus() {
          return { oopEnabled: B(), legacyEnabled: v };
        }
        getAnyGlobalEnabledOverlay() {
          return B() || v;
        }
        getPerGameEnabledStatus(e) {
          if (null == e) return { oopEnabled: !1, legacyEnabled: !1 };
          let t = Y(e.pid);
          return null == t
            ? { oopEnabled: !1, legacyEnabled: !1 }
            : { oopEnabled: t.oopEnabled, legacyEnabled: t.legacyEnabled };
        }
        getRenderMethod(e) {
          if (null != e) return Y(e)?.overlayMethod ?? void 0;
        }
        getMostRecentOverlayRenderMethod() {
          return G;
        }
        getOverlayRenderingTrackedGames() {
          return Object.values(P).filter(
            (e) =>
              e.overlayMethod !== I.Ue.Disabled &&
              e.state === I.AR.OVERLAY_RENDERING,
          );
        }
      }
      let ec = new eu(
          l.h,
          !b
            ? {}
            : {
                CONNECTION_OPEN: ea,
                LOGIN: function () {
                  (D = !1), (G = null);
                },
                LOGOUT: function () {
                  (D = !1), (G = null), eo();
                },
                EXPERIMENT_OVERRIDE_BUCKET: ea,
                OVERLAY_SET_ENABLED: function (e) {
                  let { legacyEnabled: t, oopEnabled: n } = e;
                  return (
                    R.info("handleOverlaySetEnabled", {
                      legacyEnabled: t,
                      oopEnabled: n,
                    }),
                    el(t, n),
                    !0
                  );
                },
                GAME_LAUNCH_SUCCESS: function (e) {
                  if (null != e.pids) for (let t of e.pids) Q(t);
                },
                RUNNING_GAMES_CHANGE: function (e) {
                  for (let t of (__OVERLAY__ &&
                    R.error(
                      "Running handleRunningGamesChange While in Overlay Context!",
                    ),
                  e.added))
                    Q(t.pid);
                  for (let t of e.removed) X(t.pid);
                },
                RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
                  if (
                    (__OVERLAY__ &&
                      R.error(
                        "Running handleGameToggleOverlay While in Overlay Context!",
                      ),
                    R.verbose("handleGameToggleOverlay", { action: e }),
                    !(B() || v))
                  ) {
                    if (
                      (R.verbose(
                        "handleGameToggleOverlay: overlay not enabled",
                      ),
                      "pid" in e.game)
                    ) {
                      let t = e.game.pid,
                        n = Y(t);
                      if (null != n)
                        return (
                          et(
                            t,
                            Z(n, n.fullscreenType),
                            "handleGameToggleOverlay - global disabled",
                          ),
                          !0
                        );
                    }
                    return !1;
                  }
                  if (!("pid" in e.game))
                    return (
                      R.verbose(
                        "handleGameToggleOverlay: game is not a PersistGame",
                      ),
                      en(),
                      !0
                    );
                  let t = e.game.pid,
                    {
                      newLegacyOverlayEnabledValue: n,
                      newOverlayV3EnabledValue: i,
                    } = e;
                  if (z(t)) {
                    let e = Y(t);
                    e?.legacyEnabled !== n &&
                      K(t, "legacyEnabled", n, "handleGameToggleOverlay"),
                      e?.oopEnabled !== i &&
                        K(t, "oopEnabled", i ?? !1, "handleGameToggleOverlay");
                  }
                  let r = n && v,
                    l = (i ?? !1) && B();
                  return (
                    r || l
                      ? (R.verbose(
                          "handleGameToggleOverlay: game enabled changed",
                          { pid: t, legacyEnabled: r, overlayV3Enabled: l },
                        ),
                        z(t) ? es() : Q(t))
                      : X(t),
                    !0
                  );
                },
                OVERLAY_FORCE_RENDER_MODE: function (e) {
                  return (L = e.mode), es(), !0;
                },
                OVERLAY_UPDATE_OVERLAY_STATE: function (e) {
                  if (null != Y(e.pid))
                    return (
                      K(e.pid, "state", e.overlayState, e.reason),
                      R.verbose(
                        `Updating overlay state for pid ${e.pid} to ${e.overlayState}`,
                      ),
                      e.overlayState === I.AR.WAITING_FOR_POPOUT_OPEN ||
                      e.overlayState === I.AR.WAITING_FOR_OVERLAY_OPEN
                        ? j(e.pid, I.sf.MODULE_TRACKING)
                        : e.overlayState === I.AR.OVERLAY_RENDERING &&
                          j(e.pid, I.sf.OVERLAY_RENDERING),
                      !0
                    );
                },
                OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: function () {
                  return es(), !0;
                },
                OVERLAY_CRASHED: function (e) {
                  return (
                    R.error(`Overlay crashed for pid ${e.pid}`),
                    !!z(e.pid) &&
                      (K(
                        e.pid,
                        "state",
                        I.AR.OVERLAY_CRASHED,
                        "handleOverlayCrashed",
                      ),
                      !0)
                  );
                },
                OVERLAY_RELOAD: function (e) {
                  return (
                    R.error("Overlay reload for pid", { pid: e.pid }), es(), !0
                  );
                },
                OVERLAY_FOCUSED: function (e) {
                  if (((U = e.pid), k)) {
                    let t = [
                      performance.timeOrigin + performance.now(),
                      e.pid ?? null,
                      e.trackMode,
                    ];
                    x.push(t);
                  }
                  return (
                    !(0, A.isValidGamePID)(e.pid) || ((0, A.setPID)(e.pid), !0)
                  );
                },
                OVERLAY_SUCCESSFULLY_SHOWN: function (e) {
                  a.A.updateOverlayState(
                    e.pid,
                    I.AR.OVERLAY_RENDERING,
                    "handleOverlaySuccessfullyShown",
                  ),
                    z(e.pid) &&
                      K(
                        e.pid,
                        "successfullyShown",
                        !0,
                        "handleOverlaySuccessfullyShown",
                      ),
                    H(e.pid, "overlay_successfully_shown", { pid: e.pid });
                  let t = Y(e.pid);
                  null != t && a.A.updateTrackedGame(e.pid, t);
                },
                OVERLAY_RENDER_DEBUG_MODE: function (e) {
                  return e.mode === I.x7.TrackFocusPIDs && (k = e.enabled), !0;
                },
                OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS: function () {
                  return (x = new o.A(1e4)), !0;
                },
              },
        ),
        eh = ec;
    },
    680243(e, t, n) {
      n.d(t, { A: () => C });
      var i = n(17928),
        r = n(118356),
        l = n(228366),
        a = n(736056),
        s = n(9302),
        o = n(211753),
        d = n(206885),
        u = n(682763),
        c = n(327194);
      let h = new r.Vy("OverlayV3NativeModuleStore"),
        E = !1,
        _ = !1,
        p = null,
        A = !1,
        f = null,
        g = null,
        I = (() => {
          async function e() {
            S(), (p = c.P.getInstance());
            try {
              await p.initialize(), (E = !0);
            } catch (e) {
              (0, u._r)(null, "module_initialization_failed", { error: e }),
                (E = !1),
                (0, u.mD)(s.UNSET_PID, e, { crashType: "native" });
            } finally {
              O.emitChange();
            }
          }
          return () => (null == g && (g = e()), g);
        })();
      function T(e) {
        __OVERLAY__ ||
          !d.O ||
          (_ !== e && ((_ = e), e && (0, s.setOutOfProcessSupport)(!0)));
      }
      function S() {
        !__OVERLAY__ &&
          d.O &&
          ((f = null),
          (A = !1),
          h.verbose("Maybe Enable Overlay"),
          T(o.x.oopEnabled));
      }
      class m extends i.Ay.Store {
        static displayName = "Overlay-v3-Native-Module-Store";
        initialize() {
          this.waitFor(a.A);
        }
        get isModuleLoading() {
          return null != g;
        }
        get isOverlayEnabled() {
          return _;
        }
        get isSupported() {
          return d.O;
        }
        get isModuleLoaded() {
          return E;
        }
        get isCrashedDisabled() {
          return A;
        }
        get errorMessage() {
          return f;
        }
        getNativeModule() {
          return p;
        }
      }
      let O = new m(
          l.h,
          __OVERLAY__ || !d.O
            ? {}
            : {
                CONNECTION_OPEN: function () {
                  return I(), !1;
                },
                EXPERIMENT_OVERRIDE_BUCKET: S,
                OVERLAY_SET_ENABLED: function (e) {
                  let { oopEnabled: t } = e;
                  (f = null), T(t);
                },
                OVERLAY_V3_LOAD_NATIVE_MODULE: function () {
                  return (f = null), I(), !1;
                },
                OVERLAY_CRASHED: function (e) {
                  let { isCrashedDisabled: t, error: n } = e;
                  return (
                    !0 === t && (A = !0),
                    null != n &&
                      (f = n instanceof Error ? n.message : String(n)),
                    !0
                  );
                },
              },
        ),
        C = O;
    },
    709055(e, t, n) {
      n.d(t, { A: () => a });
      var i = n(723702),
        r = n(19575),
        l = n(567249);
      function a(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = l.A.getWindow(e);
        null == n ||
          n.closed ||
          (i.isPlatformEmbedded ? r.Ay.focus(e, t) : n.focus());
      }
    },
    683760(e, t, n) {
      n.d(t, { A: () => c });
      var i = n(17928),
        r = n(228366),
        l = n(572009),
        a = n(788868);
      let s = "OverridePremiumTypeStore",
        o = {
          premiumTypeOverride: a.$I,
          premiumTypeActual: a.$I,
          createdAtOverride: a.lk,
        };
      function d(e) {
        let { user: t } = e;
        o.premiumTypeActual = (0, l.nq)(t.premium_type);
      }
      class u extends i.Ay.PersistedStore {
        static displayName = s;
        static persistKey = s;
        static migrations = [
          (e) => {
            if (e?.createdAtOverride == null)
              return { ...e, createdAtOverride: a.lk };
          },
        ];
        initialize(e) {
          if (null != e) {
            (o.premiumTypeActual = e?.premiumTypeActual),
              (o.premiumTypeOverride = e?.premiumTypeOverride),
              null != e.createdAtOverride
                ? (o.createdAtOverride = new Date(e.createdAtOverride))
                : (o.createdAtOverride = a.lk);
            return;
          }
          (o.premiumTypeOverride = a.$I), (o.createdAtOverride = a.lk);
        }
        getPremiumTypeOverride() {
          return o.premiumTypeOverride;
        }
        getPremiumTypeActual() {
          return o.premiumTypeActual;
        }
        getCreatedAtOverride() {
          return o.createdAtOverride;
        }
        getState() {
          return o;
        }
        get premiumType() {
          return o.premiumTypeOverride;
        }
      }
      let c = new u(r.h, {
        SET_PREMIUM_TYPE_OVERRIDE: function (e) {
          let { premiumType: t } = e;
          o.premiumTypeOverride = t;
        },
        SET_CREATED_AT_OVERRIDE: function (e) {
          let { createdAt: t } = e;
          o.createdAtOverride = t;
        },
        CURRENT_USER_UPDATE: d,
        CONNECTION_OPEN: d,
      });
    },
    910425(e, t, n) {
      n.d(t, { dx: () => u, UF: () => c, Sc: () => h, Lg: () => E }), n(938796);
      var i = n(665260),
        r = n(17928),
        l = n(626584),
        a = n(677413),
        s = n(287809);
      let o = (0, n(945810).mj)({
        name: "2026-04-scheduled-messages-ui-backup",
        kind: "user",
        defaultConfig: !1,
        variations: { 0: !1, 1: !0 },
      });
      var d = n(652215);
      let u = new l.A("Scheduled Messages");
      function c(e) {
        let { content: t, flags: n } = e,
          [r, l] = (0, a.A)(t);
        return r
          ? [l, (0, i.UI)(n ?? 0, d.pr7.SUPPRESS_NOTIFICATIONS)]
          : [t, n ?? 0];
      }
      function h() {
        let e = (0, r.bG)(
            [s.default],
            () => s.default.getCurrentUser()?.isStaff() ?? !1,
          ),
          t = o.useConfig({ location: "useCanUseScheduledMessages" });
        return e || t;
      }
      function E(e) {
        var t;
        return {
          userId: e.user_id,
          scheduledMessageId: e.scheduled_message_id,
          sendAtTimestamp: e.send_at_timestamp,
          scheduledMessage: {
            channelId: (t = e.scheduled_message).channel_id,
            content: t.content,
            type: t.type,
            flags: t.flags,
            messageReference: t.message_reference,
          },
          state: e.state,
        };
      }
    },
    517381(e, t, n) {
      n.d(t, { A: () => I }), n(321073);
      var i = n(17928),
        r = n(228366),
        l = n(845584),
        a = n(320095),
        s = n(815807),
        o = n(495544),
        d = n(994500);
      class u {
        isIndexing = !1;
        isHistoricalIndexing = !1;
        isFetching = !1;
        analyticsId = null;
        error = null;
        messages = null;
        documentsIndexed = 0;
        totalResults = null;
        messageIds = new Set();
        isInitialFetchComplete = !1;
        cursor = null;
        handleSearchStart() {
          (this.isFetching = !0),
            (this.isIndexing = !1),
            (this.analyticsId = null),
            (this.error = null);
        }
        handleSearchIndexing() {
          (this.isInitialFetchComplete = !0),
            (this.isIndexing = !0),
            (this.isHistoricalIndexing = !0),
            (this.isFetching = !1),
            (this.error = null);
        }
        handleSearchFailure(e) {
          (this.isFetching = !1),
            (this.isIndexing = !1),
            (this.isInitialFetchComplete = !0),
            (this.isHistoricalIndexing = !1),
            (this.error = new l.LG(e)),
            (this.analyticsId = null),
            (this.documentsIndexed = 0);
        }
        handleSearchSuccess(e, t) {
          let {
            analyticsId: n,
            cursor: i,
            totalResults: r,
            doingHistoricalIndex: l,
            documentsIndexed: a,
          } = e;
          (this.analyticsId = n),
            (this.isFetching = !1),
            (this.isIndexing = !1),
            (this.isInitialFetchComplete = !0),
            (this.isHistoricalIndexing = l),
            (this.error = null),
            (this.documentsIndexed = a),
            (this.cursor = i);
          let s = [...(this.messages ?? [])],
            o = [];
          return (
            t.forEach((e) => {
              this.messageIds.has(e.id) ||
                (this.messageIds.add(e.id), s.push(e), o.push(e));
            }),
            (this.messages = s),
            (this.totalResults = r),
            o
          );
        }
      }
      let c = new Map(),
        h = new Map(),
        E = new Map();
      function _(e) {
        return c.get(e) ?? new u();
      }
      function p(e) {
        let t = _(e);
        return c.set(e, t), t;
      }
      function A(e, t) {
        let n = h.get(e);
        if (null == n) return !1;
        let i = t(n);
        return h.set(e, i), !0;
      }
      function f(e) {
        let { type: t, messageId: n, userId: i, emoji: r } = e;
        if (!(0, s.vp)(e)) return !1;
        let l = o.default.getId() === i;
        return A(n, (n) => {
          let { reactionType: i } = e;
          return "MESSAGE_REACTION_ADD" === t
            ? n.addReaction(r, l, e.colors, i)
            : n.removeReaction(r, l, i);
        });
      }
      class g extends i.Ay.Store {
        static displayName = "SearchMessageStore";
        initialize() {
          this.waitFor(o.default, d.A);
        }
        getMessage(e) {
          return h.get(e);
        }
        getTotalCount(e) {
          return _(e).totalResults;
        }
        getIsInitialFetchComplete(e) {
          return _(e).isInitialFetchComplete;
        }
        getIsIndexing(e) {
          return _(e).isIndexing;
        }
        getIsHistoricalIndexing(e) {
          return _(e).isHistoricalIndexing;
        }
        getDocumentsIndexed(e) {
          return _(e).documentsIndexed;
        }
        getIsFetching(e) {
          return _(e).isFetching;
        }
        getError(e) {
          return _(e).error;
        }
        getMessages(e) {
          return _(e).messages;
        }
        getCursor(e) {
          return _(e).cursor;
        }
        getAnalyticsId(e) {
          return _(e).analyticsId;
        }
        hasSearchState(e) {
          return c.has(e);
        }
      }
      let I = new g(r.h, {
        SEARCH_MESSAGES_START: function (e) {
          e.ids.forEach((e) => {
            p(e).handleSearchStart();
          });
        },
        SEARCH_MESSAGES_SUCCESS: function (e) {
          e.data.forEach((e) => {
            let t = p(e.id),
              n = e.messages.map((e) => {
                let [t] = e;
                return (0, a.rh)(t);
              });
            t.handleSearchSuccess(e, n).forEach((e) => {
              h.set(e.id, e);
              let t = E.get(e.id) ?? 0;
              E.set(e.id, t + 1);
            });
          });
        },
        SEARCH_MESSAGES_INDEXING: function (e) {
          e.ids.forEach((e) => {
            p(e).handleSearchIndexing();
          });
        },
        SEARCH_MESSAGES_FAILURE: function (e) {
          e.ids.forEach((t) => {
            p(t).handleSearchFailure(e.error);
          });
        },
        SEARCH_MESSAGES_CLEAR: function (e) {
          let t = c.get(e.id);
          if (null == t) return !1;
          t.messageIds.forEach((e) => {
            let t = E.get(e) ?? 0;
            t <= 1 ? (h.delete(e), E.delete(e)) : E.set(e, t - 1);
          }),
            c.delete(e.id);
        },
        SEARCH_MESSAGES_CLEAR_ALL: function (e) {
          (c = new Map()), (h = new Map()), (E = new Map());
        },
        MESSAGE_UPDATE: function (e) {
          let t = e.message.id;
          if (null == t) return !1;
          let n = h.get(t);
          if (null == n) return !1;
          let i = (0, a.IU)(n, e.message);
          h.set(t, i);
        },
        MESSAGE_REACTION_ADD: f,
        MESSAGE_REACTION_ADD_MANY: function (e) {
          let { messageId: t, reactions: n } = e,
            i = o.default.getId();
          return A(t, (e) => e.addReactionBatch(n, i));
        },
        MESSAGE_REACTION_REMOVE: f,
        MESSAGE_REACTION_REMOVE_ALL: function (e) {
          let { messageId: t } = e;
          return A(t, (e) => e.set("reactions", []));
        },
        MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
          let { messageId: t, emoji: n } = e;
          return A(t, (e) => e.removeReactionsForEmoji(n));
        },
        CONNECTION_OPEN: function () {
          (c = new Map()), (h = new Map()), (E = new Map());
        },
      });
    },
    268988(e, t, n) {
      n.d(t, { A: () => u }), n(321073);
      var i = n(17928),
        r = n(228366),
        l = n(320095);
      let a = new Map();
      function s() {
        a = new Map();
      }
      let o = [];
      class d extends i.Ay.Store {
        static displayName = "SearchRecentMessageStore";
        getRecentMessageAuthorIds(e) {
          return a.get(e) ?? o;
        }
      }
      let u = new d(r.h, {
        SEARCH_MESSAGES_SUCCESS: function (e) {
          let { guildId: t, data: n } = e;
          if (null == t) return !1;
          let i = !1,
            r = [...(a.get(t) ?? [])],
            s = new Set(r);
          return (
            n.forEach((e) => {
              e.messages.forEach((e) => {
                let [t] = e,
                  n = (0, l.rh)(t);
                !s.has(n.author.id) &&
                  s.size < 15 &&
                  (s.add(n.author.id), r.push(n.author.id), (i = !0));
              });
            }),
            i && a.set(t, r),
            i
          );
        },
        SEARCH_RECENT_MESSAGES_CLEAR: s,
        CONNECTION_OPEN: s,
      });
    },
    741812(e, t, n) {
      n.d(t, { A: () => p });
      var i = n(17928),
        r = n(228366),
        l = n(994500),
        a = n(977997),
        s = n(514581);
      let o = {},
        d = {},
        u = new Set();
      function c() {
        (o = {}), (d = {});
      }
      function h(e) {
        let { relationship: t } = e,
          n = a.A.getVoiceStateForUser(t.id);
        return null != n && null != n.channelId && E(n.channelId, t.id);
      }
      function E(e, t) {
        let n = !1,
          i = !1,
          r = new Set(o[e]),
          a = l.A.isBlocked(t);
        a && !r.has(t)
          ? (r.add(t), (i = !0), (n = !0))
          : a || (n = r.delete(t)),
          0 === r.size && n ? delete o[e] : n && (o[e] = r);
        let u = new Set(d[e]),
          c = l.A.isIgnored(t);
        return (
          c && !u.has(t)
            ? (u.add(t), (i = !0), (n = !0))
            : c || (n = u.delete(t)),
          0 === u.size && n ? delete d[e] : n && (d[e] = u),
          i && s.Ay.handleBlockedOrIgnoredUserVoiceChannelJoin(e, t),
          n
        );
      }
      class _ extends i.Ay.Store {
        initialize() {
          this.waitFor(l.A, a.A);
        }
        getBlockedUsersForVoiceChannel(e) {
          return o[e] ?? u;
        }
        getIgnoredUsersForVoiceChannel(e) {
          return d[e] ?? u;
        }
      }
      let p = new _(r.h, {
        CONNECTION_OPEN: c,
        LOGOUT: c,
        OVERLAY_INITIALIZE: function () {
          c();
          let e = a.A.getAllVoiceStates(),
            t = !1;
          for (let n of Object.values(e))
            for (let e of Object.values(n))
              null != e.channelId && (t = E(e.channelId, e.userId) || t);
          return t;
        },
        VOICE_STATE_UPDATES: function (e) {
          let { voiceStates: t } = e,
            n = !1;
          return (
            t.forEach((e) => {
              null != e.oldChannelId &&
                (null != o[e.oldChannelId] &&
                  (o[e.oldChannelId]?.delete(e.userId), (n = !0)),
                null != d[e.oldChannelId] &&
                  (d[e.oldChannelId]?.delete(e.userId), (n = !0))),
                null != e.channelId && (n = E(e.channelId, e.userId) || n);
            }),
            n
          );
        },
        RELATIONSHIP_ADD: h,
        RELATIONSHIP_REMOVE: h,
        RELATIONSHIP_UPDATE: h,
      });
    },
    49431(e, t, n) {
      n.d(t, { A: () => a });
      var i = n(439372),
        r = n(733391);
      class l extends i.A {
        actions = {
          POST_CONNECTION_OPEN: this.onPostConnectionOpen.bind(this),
        };
        onPostConnectionOpen() {
          (0, r.Xw)();
        }
      }
      let a = new l();
    },
    565688(e, t, n) {
      n.d(t, { m: () => r, w: () => l });
      let i = (0, n(945810).mj)({
        name: "2025-12-social-layer-storefront-activity-card-entrypoints-user-experiment",
        kind: "user",
        defaultConfig: {
          voiceChannelActivitiesEnabled: !1,
          guildActivitiesEnabled: !1,
        },
        variations: {
          0: { voiceChannelActivitiesEnabled: !1, guildActivitiesEnabled: !1 },
          1: { voiceChannelActivitiesEnabled: !0, guildActivitiesEnabled: !1 },
          2: { voiceChannelActivitiesEnabled: !1, guildActivitiesEnabled: !0 },
          3: { voiceChannelActivitiesEnabled: !0, guildActivitiesEnabled: !0 },
        },
      });
      function r(e) {
        let { location: t } = e;
        return i.useConfig({ location: t }).voiceChannelActivitiesEnabled;
      }
      function l(e) {
        let { location: t } = e;
        return i.useConfig({ location: t }).guildActivitiesEnabled;
      }
    },
    889979(e, t, n) {
      n.d(t, { A: () => h });
      var i = n(554146),
        r = n(439372),
        l = n(367727),
        a = n(710195),
        s = n(733391),
        o = n(832163),
        d = n(271049),
        u = n(533406);
      class c extends r.A {
        _didAttemptToOpenModal = !1;
        _didConnectionOpen = !1;
        actions = {
          LOGOUT: () => this._handleLogout(),
          POST_CONNECTION_OPEN: () => this._handlePostConnectionOpen(),
          SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS: (e) =>
            this._handleStorefrontConfigFetchSuccess(e),
          SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_SUCCESS: () =>
            this._handleShowAnnouncementModal(),
        };
        stores = new Map()
          .set(o.A, () => this._handleSocialLayerStorefrontUpdate())
          .set(a.A, () => this._handleExperimentChange());
        _handleLogout = () => {
          (this._didAttemptToOpenModal = !1), (this._didConnectionOpen = !1);
        };
        _handlePostConnectionOpen = () => {
          this._didConnectionOpen = !0;
        };
        _handleSocialLayerStorefrontUpdate = () => {
          this._handleShowAnnouncementModal();
        };
        _handleExperimentChange = () => {
          this._handleShowAnnouncementModal();
        };
        _handleStorefrontConfigFetchSuccess = (e) => {
          let { config: t } = e,
            n = t.announcementModalConfig?.version ?? 0;
          0 === n ||
            (0, l.En)(i.M.GAME_SHOP_ANNOUNCEMENT_MODAL, n).isDismissed ||
            ("idle" === o.A.getStorefrontAffinity().state && (0, s.dS)(),
            this._handleShowAnnouncementModal());
        };
        _handleShowAnnouncementModal = () => {
          if (
            this._didAttemptToOpenModal ||
            !this._didConnectionOpen ||
            !(0, d.N)({ location: "SocialLayerStorefrontAnnouncementManager" })
          )
            return;
          let e = o.A.getStorefrontAffinity(),
            t = o.A.getAnnouncementModalConfig(),
            n = t?.version ?? 0,
            r =
              "success" === e.state &&
              e.affinity[t?.applicationId ?? ""]?.isEligible;
          0 !== n &&
            !(0, l.En)(i.M.GAME_SHOP_ANNOUNCEMENT_MODAL, n).isDismissed &&
            r &&
            ((this._didAttemptToOpenModal = !0), (0, u.B)());
        };
      }
      let h = new c();
    },
    536432(e, t, n) {
      n.d(t, {
        Ak: () => v,
        Au: () => L,
        Dv: () => U,
        Ir: () => R,
        ND: () => w,
        Ni: () => G,
        VE: () => b,
        fh: () => D,
        un: () => P,
        wH: () => N,
      }),
        n(321073);
      var i = n(702841),
        r = n(554146),
        l = n(58149),
        a = n(693806),
        s = n(253932),
        o = n(594061),
        d = n(617617),
        u = n(173660),
        c = n(258582),
        h = n(95701),
        E = n(576705),
        _ = n(287809),
        p = n(954571),
        A = n(927578),
        f = n(427262),
        g = n(796774),
        I = n(209932),
        T = n(807348),
        S = n(123973),
        m = n(984813);
      n(980504);
      var O = n(652215),
        C = n(698279);
      function N() {
        let e = s.dG.getSetting();
        return e?.volume ?? 100;
      }
      function y(e, t) {
        return (
          t?.guild_id == null ||
          E.A.can(O.xBc.USE_EXTERNAL_SOUNDS, t) ||
          "0" === e.guildId ||
          e.guildId === t?.guild_id
        );
      }
      function R(e, t, n) {
        let i =
          !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        return (
          (A.Ay.canUseSoundboardEverywhere(e) ||
            t.guildId === n?.guild_id ||
            "0" === t.guildId) &&
          y(t, n) &&
          (!i || t.available)
        );
      }
      function L(e) {
        let { mute: t, suppress: n } = (0, u.k)({ channel: e });
        return !t && !n;
      }
      function v(e, t, n, i) {
        (0, g.qP)(t, e, T.Zm.SOUNDBOARD), (0, c.Wv)(t, e, __OVERLAY__, n, i);
      }
      async function D(e) {
        let t = _.default.getCurrentUser(),
          n = (0, a.A)(),
          i = (0, m.z0)(e);
        if (
          null == n ||
          h.Do.has(n.type) ||
          null == i ||
          !A.Ay.canUseCustomCallSounds(t) ||
          !(0, S.lI)()
        )
          return;
        await (0, g.E7)();
        let r = "0" === i.guildId ? "0" : i.guildId,
          l = I.A.getSound(r, i.soundId);
        if (null != l) {
          var s;
          if (!y(l, n) || !R(t, l, n, !0) || !L(n)) return null;
          (s = n.id),
            (0, g.qP)(s, l, T.Zm.JOINED_VOICE_CHANNEL),
            (0, c.Rc)(s, l, __OVERLAY__);
        }
      }
      function b(e) {
        let { isSoundboardButtonDisabled: t = !1 } = e,
          n = (0, i.bG)([_.default], () => _.default.getCurrentUser()),
          l = [];
        if (
          !t &&
          !Object.values(d.A.settings.guilds?.guilds ?? {}).some(
            (e) => null != e.joinSound,
          )
        ) {
          let e = (0, f.G2)(n);
          (A.Ay.canUseCustomCallSounds(n) || e) &&
            l.push(r.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL);
        }
        return l;
      }
      function U(e, t) {
        (0, o.TG)(
          e,
          (n) => {
            (n.joinSound = void 0),
              M({
                guildId: e,
                changeType: T.Vr.REMOVED,
                soundType: T.ib.ENTRY,
                location: t,
              });
          },
          o.Sb.INFREQUENT_USER_ACTION,
        );
      }
      function P(e, t, n) {
        (0, o.TG)(
          e,
          (i) => {
            let r = "0" === t.guildId,
              l = r ? T.FH.DEFAULT : T.FH.CUSTOM,
              a = null != i.joinSound ? T.Vr.UPDATED : T.Vr.ADDED;
            (i.joinSound = {
              soundId: t.soundId,
              guildId: r ? "0" : t.guildId,
            }),
              M({
                guildId: e,
                changeType: a,
                soundSource: l,
                soundType: T.ib.ENTRY,
                location: n,
              });
          },
          o.Sb.INFREQUENT_USER_ACTION,
        );
      }
      function M(e) {
        let {
          guildId: t,
          changeType: n,
          soundType: i,
          soundSource: r,
          location: l,
        } = e;
        p.default.track(O.HAw.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
          location_stack: l,
          guild_id: "" === t ? 0 : Number(t),
          change_type: n,
          sound_type: i,
          sound_source: r,
        });
      }
      function w(e) {
        let { location: t } = e;
        p.default.track(O.HAw.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, {
          location_stack: t,
        });
      }
      function G(e) {
        let { sound: t, location: n } = e;
        l.Ay.trackWithMetadata(O.HAw.EXPRESSION_FAVORITED, {
          location: n,
          expression_type: C.kx.SOUNDBOARD,
          expression_id: t.soundId,
          expression_name: t.name,
          expression_guild_id: t.guildId,
        });
      }
    },
    123973(e, t, n) {
      n.d(t, { Ay: () => o, lI: () => s }), n(17928);
      var i = n(734057),
        r = n(576705),
        l = n(309010),
        a = n(652215);
      function s() {
        let e = l.A.getVoiceChannelId();
        return o(i.A.getChannel(e));
      }
      function o(e) {
        if (null == e) return !1;
        if (a.kvI.CALLABLE.has(e.type)) return !0;
        let t = r.A.can(a.xBc.USE_SOUNDBOARD, e),
          n = r.A.can(a.xBc.SPEAK, e);
        return e.isGuildVoiceOrThread() && t && n;
      }
    },
    933204(e, t, n) {
      n.d(t, { I: () => d, T: () => o });
      var i = n(64700),
        r = n(702841),
        l = n(71393),
        a = n(209932);
      function s(e, t) {
        return e.filter((e) => null == t.get(e));
      }
      function o() {
        let e = (0, r.yK)([l.A], () => l.A.getGuildIds()),
          t = (0, r.bG)([a.A], () => a.A.getSounds());
        return (0, i.useMemo)(() => s(e, t), [e, t]);
      }
      function d() {
        return s(l.A.getGuildIds(), a.A.getSounds());
      }
    },
    312671(e, t, n) {
      n.d(t, { A: () => o });
      var i = n(17928),
        r = n(228366),
        l = n(235079);
      let a = { soundpack: l.i.CLASSIC, lastSoundpackExperimentId: null };
      class s extends i.Ay.PersistedStore {
        static displayName = "SoundpackStore";
        static persistKey = "SoundpackStore";
        initialize(e) {
          null != e &&
            ((a = e),
            Object.values(l.i).includes(a.soundpack) ||
              (a.soundpack = l.i.CLASSIC));
        }
        getState() {
          return a;
        }
        getSoundpack() {
          return a.soundpack;
        }
        getLastSoundpackExperimentId() {
          return a.lastSoundpackExperimentId;
        }
      }
      let o = new s(r.h, {
        SET_SOUNDPACK: function (e) {
          let { soundpack: t, forExperimentId: n } = e;
          a = {
            soundpack: t,
            lastSoundpackExperimentId:
              void 0 !== n ? n : a.lastSoundpackExperimentId,
          };
        },
      });
    },
    763758(e, t, n) {
      n.d(t, { A: () => s });
      var i = n(627968),
        r = n(64700),
        l = n(349288);
      class a extends r.PureComponent {
        render() {
          let { text: e, lastItem: t, className: n } = this.props;
          return (0, i.jsxs)("span", {
            children: [
              (0, i.jsx)(l.Anchor, {
                className: n,
                onClick: this.handleClick,
                children: e,
              }),
              t ? "" : ", ",
            ],
          });
        }
        handleClick = () => {
          let { onClick: e, index: t } = this.props;
          e?.(t);
        };
      }
      class s extends r.PureComponent {
        render() {
          let e = this.props.artists.split("; ");
          if (!this.props.canOpen) return e.join(", ");
          let t = e.length - 1;
          return e.map((e, n) =>
            (0, i.jsx)(
              a,
              {
                text: e,
                index: n,
                lastItem: n === t,
                onClick: this.handleOpenSpotifyArtist,
                className: this.props.linkClassName,
              },
              `spotify-artist-${n}`,
            ),
          );
        }
        handleOpenSpotifyArtist = (e) => {
          let { onOpenSpotifyArtist: t } = this.props;
          t?.(e);
        };
      }
    },
    732755(e, t, n) {
      n.d(t, { A: () => N });
      var i = n(812729),
        r = n.n(i),
        l = n(17928),
        a = n(228366),
        s = n(47167),
        o = n(734057),
        d = n(71393),
        u = n(763827),
        c = n(994500),
        h = n(309010),
        E = n(287809),
        _ = n(488926),
        p = n(63995),
        A = n(69407),
        f = n(82149),
        g = n(446600),
        I = n(96566),
        T = n(516607),
        S = n(652215);
      let m = null;
      function O() {
        let e = (function () {
          let e = h.A.getVoiceChannelId();
          if (null == e) return null;
          let t = g.A.getStageInstanceByChannel(e);
          if (null == t) return null;
          let n = o.A.getChannel(e);
          if (null == n || !_.Ib(S.xBc.VIEW_CHANNEL, n)) return null;
          let i = d.A.getGuild(n.getGuildId());
          if (null == i || !i.features.has(S.GuildFeatures.DISCOVERABLE))
            return null;
          let r = (0, f.eL)(n, t),
            l = m?.party?.id === r ? m : null,
            a = p.A.getMutableParticipants(n.id, A.ip.SPEAKER),
            u = a.filter((e) => e.type === A.wY.STREAM).length,
            O = a.length - u,
            C = p.A.getParticipantCount(e) - u,
            N = l?.party?.size != null ? l.party.size[1] : 0;
          return {
            application_id: T.SS,
            name: t.topic ?? n.topic ?? (0, s.m1)(n, E.default, c.A),
            type: (0, I.xn)(n.id) ? S.$pd.WATCHING : S.$pd.LISTENING,
            timestamps: { start: l?.timestamps?.start ?? new Date().getTime() },
            assets: { small_image: i.icon ?? void 0, small_text: i.name },
            party: { id: r, size: [O, Math.max(C, N)] },
          };
        })();
        return !r()(e, m) && ((m = e), !0);
      }
      class C extends l.Ay.Store {
        static displayName = "StageChannelSelfRichPresenceStore";
        initialize() {
          this.waitFor(o.A, d.A, u.A, h.A, p.A, g.A);
        }
        getActivity() {
          return m;
        }
      }
      let N = new C(a.h, {
        CONNECTION_OPEN: O,
        STAGE_INSTANCE_CREATE: O,
        STAGE_INSTANCE_UPDATE: O,
        STAGE_INSTANCE_DELETE: O,
        VOICE_CHANNEL_SELECT: O,
        RTC_CONNECTION_STATE: function (e) {
          let { state: t } = e,
            n = m?.party?.size?.[1] ?? 0;
          return t === S.S7L.RTC_CONNECTED && !(n > 0) && O();
        },
        VOICE_STATE_UPDATES: function (e) {
          let { voiceStates: t } = e;
          if (null == m) return;
          let n = (0, f.UW)(m);
          null != n &&
            null != t.find((e) => e.channelId === n.channelId) &&
            O();
        },
      });
    },
    41237(e, t, n) {
      n.d(t, { A: () => E }), n(321073);
      var i = n(810531),
        r = n(7584),
        l = n(548965),
        a = n(137903),
        s = n(71393),
        o = n(194004);
      function d(e) {
        return {
          id: e.id,
          tags: e.tags,
          type: e.type,
          name: e.name,
          description: e.description,
          format_type: e.format_type,
          guild_id: e.guild_id,
          available: e.available,
          version: e.version,
          user_id: e.user_id,
          [i.L]: "GuildSticker",
        };
      }
      function u(e) {
        let t = {};
        for (let n of e) t[n.id] = d(n);
        return t;
      }
      class c extends a.yW {
        static displayName = "GuildStickersStore";
        database = this.addKKVDatabase("guildStickers");
        stickerByIdIndex = this.database.addSecondaryKVIndex("id");
        getAllGuildStickers = this.database.memoized((e) => {
          let t = new Map();
          for (let n in e) t.set(n, Object.values(e[n].root));
          return t;
        });
        getStickerMetadataMap = this.database.memoized((e) => {
          let t = new Map();
          for (let n in e)
            for (let [i, l] of Object.entries(e[n].root))
              t.set(
                i,
                (function (e, t) {
                  let n = [],
                    { tags: i } = t,
                    l = {
                      type: o.cG.STICKER_NAME,
                      value: t.name.trim().toLocaleLowerCase(),
                    };
                  if ((n.push(l), null != i)) {
                    let t = {
                      type: o.cG.TAG,
                      value: i.trim().toLocaleLowerCase(),
                    };
                    n.push(t);
                    let l = s.A.getGuild(e);
                    if (null != l) {
                      let e = l.name.trim().toLocaleLowerCase();
                      null != e &&
                        "" !== e &&
                        n.push({ type: o.cG.GUILD_NAME, value: e });
                    }
                    let a = r.Ay.getByName(i);
                    null != a &&
                      (n.push({
                        type: o.cG.CORRELATED_EMOJI,
                        value: a.surrogates,
                      }),
                      a.forEachDiversity((e) =>
                        n.push({
                          type: o.cG.CORRELATED_EMOJI,
                          value: e.surrogates,
                        }),
                      ));
                  }
                  return n;
                })(n, l),
              );
          return t;
        });
        getStickersByGuildId = this.database.memoizedPartition((e, t) =>
          Object.values(t),
        );
        getStickerById(e) {
          return this.stickerByIdIndex.get(e) ?? void 0;
        }
        stateWrapper() {
          return this.database;
        }
      }
      function h(e, t, n) {
        if ("full_sync" === t.op) n.setPartition(e, u(t.items));
        else {
          let i = n.getNullablePartition(e);
          if (null == i) n.setPartition(e, u(t.writes));
          else if (t.writes.length > 0 || t.deletes.length > 0) {
            let r = { ...i };
            for (let e of t.deletes) delete r[e];
            for (let e of t.writes) r[e.id] = d(e);
            n.setPartition(e, r);
          }
        }
      }
      let E = new c(
        {
          LOGOUT: (e, t) => t.clear(),
          BACKGROUND_SYNC: (e, t) => t.clear(),
          RESET_SOCKET: (e, t) => t.clear(),
          CONNECTION_OPEN: (e, t) => {
            let { guilds: n, unavailableGuilds: i } = e,
              r = new Set(n.map((e) => e.id));
            for (let e of i) r.add(e);
            for (let e of t.getPartitionKeys())
              r.has(e) || t.removePartition(e);
            for (let e of n) h(e.id, e.stickers, t);
          },
          GUILD_CREATE: (e, t) => {
            if (null == e.guild.joined_at) return !1;
            h(e.guild.id, e.guild.stickers, t);
          },
          GUILD_DELETE: (e, t) => {
            t.removePartition(e.guild.id);
          },
          GUILD_STICKERS_CREATE_SUCCESS: (e, t) => {
            t.setRecord(e.guildId, e.sticker.id, d(e.sticker));
          },
          GUILD_STICKER_FETCH_SUCCESS: (e, t) => {
            t.setRecord(e.sticker.guild_id, e.sticker.id, d(e.sticker));
          },
          GUILD_STICKERS_UPDATE: (e, t) => {
            let n = t.getPartition(e.guildId),
              i = u(e.stickers);
            if (null != n)
              for (let e in i) {
                let t = i[e],
                  r = n[e];
                null != r &&
                  null == t.user_id &&
                  null != r.user_id &&
                  (i[e] = { ...t, user_id: r.user_id });
              }
            t.setPartition(e.guildId, i);
          },
          CACHED_STICKERS_LOADED: (e, t) => {
            for (let [n, i] of e.stickers) t.setPartition(n, u(i));
          },
          GUILD_STICKERS_FETCH_SUCCESS: (e, t) => {
            t.setPartition(e.guildId, u(e.stickers));
          },
        },
        l.P4.getCachedBridgedStoreMode(),
      );
    },
    45494(e, t, n) {
      let i;
      n.d(t, { A: () => M, m: () => g });
      var r = n(735438),
        l = n.n(r),
        a = n(392421),
        s = n(602137),
        o = n(357758),
        d = n(17928),
        u = n(228366),
        c = n(767581),
        h = n(853742),
        E = n(95701),
        _ = n(734057),
        p = n(222823),
        A = n(935208),
        f = n(152007);
      let g = 25,
        I = !1,
        T = !0,
        S = !1,
        m = !1,
        O = null,
        C = s.T.LATEST_ACTIVITY,
        N = [],
        y = 0,
        R = a.n.MATCH_SOME;
      function L() {
        (I = !1),
          (T = !0),
          (S = !1),
          (m = !1),
          (O = null),
          (C = s.T.LATEST_ACTIVITY),
          (i = new Set()),
          (y = 0),
          (N = []),
          (R = a.n.MATCH_SOME);
      }
      function v(e, t) {
        return t === s.T.LATEST_ACTIVITY ? p.Ay.lastMessageId(e.id) : e.id;
      }
      function D() {
        if (null == O) return !1;
        let e = !S,
          t = _.A.getChannel(N[N.length - 1]),
          n = null == t ? null : v(t, C);
        N = l()(_.A.getAllThreadsForParent(O))
          .filter((e) => e.isArchivedThread())
          .filter((t) => {
            if (0 !== i.size) {
              if (R === a.n.MATCH_SOME) {
                if (t.appliedTags?.some((e) => i.has(e)) !== !0) return !1;
              } else if (R === a.n.MATCH_ALL) {
                for (let e of i.values())
                  if (t.appliedTags?.includes(e) !== !0) return !1;
              }
            }
            if (e || null == n) return !0;
            {
              let e = null == t ? null : v(t, C);
              return null != e && A.default.compare(e, n) >= 0;
            }
          })
          .sort((e, t) => A.default.compare(v(e, C), v(t, C)))
          .map((e) => e.id)
          .reverse()
          .value();
      }
      function b(e) {
        if (!(N.indexOf(e) >= 0)) return !1;
        N = N.filter((t) => t !== e);
      }
      let U = [];
      class P extends d.Ay.Store {
        static displayName = "ArchivedThreadsStore";
        initialize() {
          this.waitFor(_.A, f.A, p.Ay);
        }
        get canLoadMore() {
          return S && !I && !m;
        }
        get nextOffset() {
          return y;
        }
        get isInitialLoad() {
          return T;
        }
        isLoading(e, t, n, r) {
          return O === e && C === t && (0, o._)(i, n) && R === r
            ? I
            : (L(), !1);
        }
        getThreads(e, t, n, r) {
          return O === e && C === t && (0, o._)(i, n) && R === r ? N : U;
        }
      }
      let M = new P(u.h, {
        CONNECTION_OPEN: L,
        THREAD_DELETE: function (e) {
          let { channel: t } = e;
          return b(t.id);
        },
        THREAD_UPDATE: function (e) {
          let { channel: t } = e;
          return O === t.parent_id && !!(0, c.yr)(t.id) && void b(t.id);
        },
        CHANNEL_DELETE: function (e) {
          if (e.channel.id !== O) return !1;
          L();
        },
        LOAD_ARCHIVED_THREADS: function (e) {
          (e.channelId === O &&
            e.sortOrder === C &&
            (0, o._)(e.tagFilter, i) &&
            e.tagSetting === R) ||
            L(),
            (O = e.channelId),
            (C = e.sortOrder),
            (i =
              e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter)),
            (R = e.tagSetting),
            (I = !0),
            (T = !1);
        },
        LOAD_ARCHIVED_THREADS_SUCCESS: function (e) {
          if (
            e.channelId !== O ||
            e.sortOrder !== C ||
            !(0, o._)(e.tagFilter, i) ||
            e.tagSetting !== R
          )
            return !1;
          let t = e.threads.filter((e) => E.A_.has(e.type)).map((e) => e.id);
          N = N.concat(t);
          let n = _.A.getChannel(O);
          null != n &&
            n.isForumLikeChannel() &&
            (0, h._Z)({
              guildId: n.guild_id,
              channelId: n.id,
              numArchivedThreads: N.length,
              hasMoreThreads: e.hasMore,
              filterTagIds: Array.from(e.tagFilter),
              sortOrder: e.sortOrder,
            }),
            D(),
            (S = e.hasMore),
            (y = e.offset + g),
            (I = !1),
            (T = !1);
        },
        LOAD_ARCHIVED_THREADS_FAIL: function (e) {
          if (
            e.channelId !== O ||
            e.sortOrder !== C ||
            !(0, o._)(e.tagFilter, i) ||
            e.tagSetting !== R
          )
            return !1;
          (I = !1), (m = !0), (T = !1);
        },
        RESORT_THREADS: function (e) {
          return (null == O || null == e.channelId || O === e.channelId) && D();
        },
      });
    },
    219065(e, t, n) {
      n.d(t, { A: () => C }), n(321073);
      var i = n(735438),
        r = n.n(i),
        l = n(17928),
        a = n(228366),
        s = n(734057),
        o = n(696451),
        d = n(82057),
        u = n(290863),
        c = n(461213),
        h = n(287809),
        E = n(403362),
        _ = n(488926),
        p = n(935208),
        A = n(427262),
        f = n(652215);
      let g = {};
      class I {
        guildId;
        parentId;
        threadId;
        version = 0;
        sections = {};
        allUserIds = new Set();
        constructor(e, t, n) {
          (this.guildId = e), (this.parentId = t), (this.threadId = n);
        }
        rebuild(e) {
          this.version++,
            (this.sections = {}),
            null != e && (this.allUserIds = new Set(e));
          let t = s.A.getChannel(this.parentId);
          r()(Array.from(this.allUserIds))
            .map((e) => {
              let [n, i, r] = this.calculateNewState(e, t);
              return {
                userId: e,
                sectionId: n,
                displayName: i,
                canViewChannel: r,
              };
            })
            .sort((e, t) => p.default.compare(e.userId, t.userId))
            .sortBy((e) => e.displayName)
            .forEach((e) => {
              this.addUser(
                e.userId,
                e.sectionId,
                e.displayName,
                e.canViewChannel,
                !0,
              );
            });
        }
        updateMultipleUserIds(e, t) {
          return (
            (null == t || this.guildId === t) &&
            0 !== (e = e.filter((e) => this.allUserIds.has(e))).length &&
            (e.length > 50
              ? this.rebuild()
              : e.forEach((e) => this.updateUserId(e)),
            !0)
          );
        }
        updateUserId(e) {
          if (!this.allUserIds.has(e)) return !1;
          let [t, n, i] = this.findOldState(e),
            [r, l, a] = this.calculateNewState(
              e,
              s.A.getChannel(this.parentId),
            );
          return (
            (t !== r || n !== l || i !== a) &&
            (this.removeUserId(e, t), this.addUser(e, r, l, a), !0)
          );
        }
        addUserId(e) {
          let [t, n, i] = this.calculateNewState(
            e,
            s.A.getChannel(this.parentId),
          );
          this.addUser(e, t, n, i);
        }
        removeUserId(e, t) {
          if (
            (this.allUserIds.delete(e),
            null != t && this.removeUserIdFromSection(e, t))
          )
            return !0;
          for (let t in this.sections)
            if (this.removeUserIdFromSection(e, t)) return !0;
          return !1;
        }
        addUser(e, t, n, i, r) {
          this.allUserIds.add(e);
          let l = h.default.getUser(e);
          if (null == l || "" === l.username) return;
          t in this.sections ||
            (this.sections[t] = { sectionId: t, usersById: {}, userIds: [] });
          let a = this.sections[t];
          if (
            ((a.usersById[e] = {
              userId: e,
              displayName: n,
              canViewChannel: i,
            }),
            r)
          )
            a.userIds.push(e);
          else {
            let t = this.findUserIdSortedPosition(a, e, n);
            a.userIds.splice(t, 0, e);
          }
          this.version++;
        }
        findUserIdSortedPosition(e, t, n) {
          let { userIds: i, usersById: r } = e;
          for (let e = 0; e < i.length; e++) {
            let l = i[e],
              a = r[l].displayName;
            if (a === n) {
              if (t < l) return e;
            } else if (null == a) {
              if (null != n) return e;
            } else if (null != n && n < a) return e;
          }
          return i.length;
        }
        removeUserIdFromSection(e, t) {
          let n = this.sections[t];
          return (
            null != t &&
            e in n.usersById &&
            (delete n.usersById[e],
            (n.userIds = n.userIds.filter((t) => t !== e)),
            this.version++,
            !0)
          );
        }
        findOldState(e) {
          for (let t in this.sections) {
            let n = this.sections[t];
            if (e in n.usersById) {
              let i = n.usersById[e];
              return [t, i.displayName, i.canViewChannel];
            }
          }
          return [void 0, void 0, !1];
        }
        calculateNewState(e, t) {
          let n = o.Ay.getMember(this.guildId, e),
            i = h.default.getUser(e),
            r = h.default.getCurrentUser(),
            l =
              i?.id === r?.id
                ? c.A.getStatus()
                : u.A.getStatus(e, this.guildId),
            a =
              null != i &&
              null != t &&
              _.$3({ permission: f.xBc.VIEW_CHANNEL, user: i, context: t }),
            s =
              l !== f.clD.OFFLINE && l !== f.clD.INVISIBLE
                ? (n?.hoistRoleId ?? "online")
                : "offline",
            d = n?.nick ?? A.Ay.getName(i);
          return [s, d?.toLowerCase(), a];
        }
      }
      function T(e) {
        return S(e.user.id);
      }
      function S(e) {
        if (null == e) return !1;
        let t = !1;
        for (let n in g) g[n].updateUserId(e) && (t = !0);
        return t;
      }
      function m(e) {
        let { guildId: t } = e,
          n = !1;
        for (let e in g) g[e].guildId === t && (g[e].rebuild(), (n = !0));
        return n;
      }
      class O extends l.Ay.Store {
        static displayName = "ThreadMemberListStore";
        initialize() {
          this.waitFor(s.A, o.Ay, d.A, u.A, c.A, h.default),
            this.syncWith([d.A], () => {
              let e = d.A.getSubscribedThreadIds(),
                t = !1;
              for (let n in g) e.has(n) || (delete g[n], (t = !0));
              return t;
            }),
            this.syncWith([c.A], () => S(h.default.getCurrentUser()?.id));
        }
        getMemberListVersion(e) {
          return g[e]?.version;
        }
        getMemberListSections(e) {
          return g[e]?.sections;
        }
        canUserViewChannel(e, t, n) {
          let i = g[e];
          if (null == i) return !1;
          let r = i.sections[t]?.usersById[n];
          return r?.canViewChannel ?? !1;
        }
      }
      let C = new O(a.h, {
        CONNECTION_OPEN: function () {
          g = {};
        },
        THREAD_MEMBERS_UPDATE: function (e) {
          if (!(e.id in g)) return !1;
          e.addedMembers?.forEach((t) => {
            let { userId: n } = t;
            return g[e.id].addUserId(n);
          }),
            e.removedMemberIds?.forEach((t) => g[e.id].removeUserId(t));
        },
        THREAD_UPDATE: function (e) {
          let { channel: t } = e;
          if (!(t.id in g) || t.threadMetadata?.archived !== !0) return !1;
          delete g[t.id];
        },
        THREAD_DELETE: function (e) {
          let { channel: t } = e;
          if (!(t.id in g)) return !1;
          delete g[t.id];
        },
        CHANNEL_UPDATES: function (e) {
          let { channels: t } = e,
            n = new Set(t.map((e) => e.id)),
            i = !1;
          for (let e in g) n.has(g[e].parentId) && (g[e].rebuild(), (i = !0));
          return i;
        },
        THREAD_MEMBER_LIST_UPDATE: function (e) {
          let { threadId: t, guildId: n, members: i } = e,
            r = s.A.getChannel(t),
            l = r?.parent_id;
          null != l &&
            ((g[t] = new I(n, l, t)), g[t].rebuild(i.map((e) => e.user_id)));
        },
        USER_UPDATE: T,
        PRESENCE_UPDATES: function (e) {
          let { updates: t } = e;
          return t
            .map((e) => {
              let { user: t } = e;
              return S(t.id);
            })
            .some((e) => e);
        },
        GUILD_MEMBER_ADD: T,
        GUILD_MEMBER_UPDATE: T,
        GUILD_MEMBER_REMOVE: T,
        PRESENCES_REPLACE: function (e) {
          let { presences: t } = e,
            n = r()(t)
              .map((e) => e.user?.id)
              .filter(E.Vq)
              .uniq()
              .value(),
            i = !1;
          for (let e in g) g[e].updateMultipleUserIds(n) && (i = !0);
          return i;
        },
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {
          let { chunks: t } = e,
            n = !1;
          for (let { guildId: e, members: i } of t) {
            let t = i.map((e) => e.user.id);
            for (let i in g) g[i].updateMultipleUserIds(t, e) && (n = !0);
          }
          return n;
        },
        GUILD_ROLE_UPDATE: m,
        GUILD_ROLE_DELETE: m,
        PASSIVE_UPDATE_V2: function (e) {
          return e.members.reduce((e, t) => S(t.user.id) || e, !1);
        },
      });
    },
    279263(e, t, n) {
      n.d(t, { A: () => o });
      var i = n(867051),
        r = n(548965),
        l = n(137903);
      let a = "Note";
      class s extends l.yW {
        static displayName = "NoteStore";
        database = this.addKVDatabase("notes");
        getNote(e) {
          return this.database.get(e);
        }
        stateWrapper() {
          return this.database;
        }
      }
      let o = new s(
        {
          LOGOUT: (e, t) => t.clear(),
          RESET_SOCKET: (e, t) => t.clear(),
          CONNECTION_OPEN: (e, t) => t.clear(),
          OVERLAY_INITIALIZE: (e, t) => t.clear(),
          USER_NOTE_UPDATE: (e, t) => {
            t.set(e.id, (0, i.yE)(a, { loading: !1, note: e.note }));
          },
          USER_NOTE_LOAD_START: (e, t) => {
            t.set(e.userId, (0, i.yE)(a, { loading: !0, note: null }));
          },
        },
        r.P4.getCachedBridgedStoreMode(),
      );
    },
    442353(e, t, n) {
      n.d(t, { A: () => o });
      var i = n(627968);
      n(64700);
      var r = n(192308),
        l = n(231723),
        a = n(253932),
        s = n(652215);
      function o(e, t) {
        let o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        a.bm.getSetting() || o
          ? (0, r.openModalLazy)(
              async () => {
                let { default: t } = await Promise.all([
                  n.e("95782"),
                  n.e("78270"),
                ]).then(n.bind(n, 308229));
                return (n) =>
                  (0, i.jsx)(t, { ...n, onEnable: e, videoEnabled: !1 });
              },
              {
                modalKey: "camera-preview",
                contextKey: t === s.BRT.POPOUT ? l.KX : l.SY,
              },
            )
          : e?.();
      }
    },
    164891(e, t, n) {
      n.d(t, { A: () => l });
      var i = n(600975),
        r = n(688151);
      let l = (0, i.C)({
        kind: "guild",
        id: "2024-12_guild_voice_channel_ringing",
        label: "Guild Voice Ringing",
        defaultConfig: { enabled: !1 },
        commonTriggerPoint: r.$G.VOICE_CALL,
        treatments: [
          {
            id: 1,
            label: "Allow users to ring each other in Guild Voice Channels",
            config: { enabled: !0 },
          },
        ],
      });
    },
    288737(e, t, n) {
      n.d(t, { A: () => r });
      var i = n(315069);
      class r extends i.A {
        userId;
        channelId;
        sessionId;
        mute;
        deaf;
        selfMute;
        selfDeaf;
        selfVideo;
        selfStream;
        suppress;
        requestToSpeakTimestamp;
        discoverable;
        constructor(e) {
          super(),
            (this.userId = e.userId || ""),
            (this.channelId = e.channelId || null),
            (this.sessionId = e.sessionId || null),
            (this.mute = e.mute || !1),
            (this.deaf = e.deaf || !1),
            (this.selfMute = e.selfMute || !1),
            (this.selfDeaf = e.selfDeaf || !1),
            (this.selfVideo = e.selfVideo || !1),
            (this.selfStream = e.selfStream || !1),
            (this.suppress = e.suppress || !1),
            (this.requestToSpeakTimestamp = e.requestToSpeakTimestamp),
            (this.discoverable = e.discoverable ?? !0);
        }
        isVoiceMuted() {
          return (
            this.selfMute ||
            this.mute ||
            this.suppress ||
            null != this.requestToSpeakTimestamp
          );
        }
        isVoiceDeafened() {
          return this.selfDeaf || this.deaf;
        }
      }
    },
    540999(e, t, n) {
      n.d(t, { A: () => E });
      var i = n(17928),
        r = n(228366),
        l = n(572009),
        a = n(71393),
        s = n(287809),
        o = n(688151),
        d = n(115093);
      let u =
        "production" === d.B.DEVELOPMENT ||
        window.GLOBAL_ENV.RELEASE_CHANNEL === d.B.STAGING;
      function c() {
        u = (0, l.I9)(s.default.getCurrentUser());
      }
      class h extends i.Ay.Store {
        static displayName = "DeveloperExperimentStore";
        isDeveloper = !1;
        initialize() {
          this.waitFor(s.default, a.A),
            Object.defineProperties(this, {
              isDeveloper: { configurable: !1, get: () => u, set: () => {} },
            }),
            c(),
            setTimeout(() => Object.freeze(this));
        }
        getExperimentDescriptor() {
          return u
            ? {
                type: "developer",
                name: "discord_dev_testing",
                revision: 1,
                override: !0,
                bucket: o.RE.TREATMENT_1,
              }
            : null;
        }
      }
      let E = new h(r.h, {
        CONNECTION_OPEN: c,
        OVERLAY_INITIALIZE: c,
        CURRENT_USER_UPDATE: c,
      });
    },
    184989(e, t, n) {
      n.d(t, { A: () => a });
      var i = n(17928),
        r = n(228366);
      class l extends i.Ay.Store {
        guildIds = new Set();
        allGuildIds() {
          return this.guildIds;
        }
        isMember(e) {
          return this.guildIds.has(e);
        }
        constructor() {
          super(
            r.h,
            {
              CACHE_LOADED: (e) => this.handleCacheLoaded(e),
              CACHE_LOADED_LAZY: (e) => this.handleCacheLoadedLazy(e),
              CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
              GUILD_CREATE: (e) => this.handleGuildCreate(e),
              GUILD_DELETE: (e) => this.handleGuildDelete(e),
            },
            r.A.Early,
          );
        }
        handleConnectionOpen(e) {
          this.guildIds = new Set([
            ...e.guilds.map((e) => e.id),
            ...e.unavailableGuilds,
          ]);
        }
        handleCacheLoaded(e) {
          this.guildIds = new Set(e.guilds.map((e) => e.id));
        }
        handleCacheLoadedLazy(e) {
          for (let t of e.guilds) this.guildIds.add(t.id);
        }
        handleGuildCreate(e) {
          this.guildIds.add(e.guild.id);
        }
        handleGuildDelete(e) {
          !0 !== e.guild.unavailable && this.guildIds.delete(e.guild.id);
        }
      }
      let a = new l();
    },
    82057(e, t, n) {
      let i;
      n.d(t, { A: () => U });
      var r = n(735438),
        l = n.n(r),
        a = n(17928),
        s = n(228366),
        o = n(323176),
        d = n(736056),
        u = n(655116),
        c = n(495544),
        h = n(963307),
        E = n(761640),
        _ = n(734057),
        p = n(919638),
        A = n(696451),
        f = n(71393),
        g = n(763827),
        I = n(994500),
        T = n(309010),
        S = n(967198),
        m = n(652215);
      let O = new o.Ay((e) => {
        for (let t in e)
          null != f.A.getGuild(t) || p.A.isUnavailable(t) || delete e[t];
        s.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: e });
      });
      function C(e, t) {
        let n = {};
        O.forEach((r) => {
          r !== S.A.getGuildId() &&
            r !== g.A.getGuildId() &&
            r !== _.A.getChannel(T.A.getChannelId())?.getGuildId() &&
            (null == i || i.guildId !== r) &&
            (O.clearWithoutFlushing(r, e), t && (n[r] = O.get(r)));
        }),
          l().isEmpty(n) ||
            s.h.dispatch({
              type: "GUILD_SUBSCRIPTIONS_FLUSH",
              subscriptions: n,
            });
      }
      function N(e, t) {
        return (
          O.subscribeToGuild(e),
          null != t && E.Ay.getSection(t) === m.YvQ.MEMBERS && y(e, t, o.LD)
        );
      }
      function y(e, t, n) {
        if (t === h.sN) return O.subscribeChannel(e, t, n);
        let i = _.A.getChannel(t);
        if (null == i) return !1;
        let r = i.getGuildId();
        return (r !== e && e === m.YYv && O.subscribeToGuild(r), i?.isThread())
          ? i.type === m.rbe.ANNOUNCEMENT_THREAD
            ? O.subscribeChannel(r, i.parent_id, n)
            : !!i.isActiveThread() &&
              O.subscribeThreadMemberList(r, t, T.A.getChannelId())
          : O.subscribeChannel(r, t, n);
      }
      function R(e) {
        let { type: t } = e;
        "CONNECTION_OPEN" === t && C(!0, !1);
        let n = S.A.getGuildId();
        null != n && N(n, T.A.getChannelId(n));
        let i = {};
        O.forEach((e) => {
          null == f.A.getGuild(e)
            ? O.clearWithoutFlushing(e, !0)
            : (i[e] = O.get(e));
        }),
          l().isEmpty(i) ||
            s.h.dispatch({
              type: "GUILD_SUBSCRIPTIONS_FLUSH",
              subscriptions: i,
            });
      }
      function L(e) {
        let { guildId: t, channelId: n } = e;
        return !p.A.isUnavailable(t) && N(t, n);
      }
      function v() {
        return N(S.A.getGuildId(), T.A.getChannelId());
      }
      function D() {
        let e = u.A.getSyncingWith();
        if (null == e)
          null != i && (O.unsubscribeUser(i.guildId, i.userId), (i = null));
        else {
          let { userId: t } = e;
          if ((null != i && i.userId === t) || I.A.isFriend(t)) return !1;
          let n = A.Ay.memberOf(t);
          if (0 === n.length) return !1;
          let [r] = n;
          (i = { guildId: r, userId: t }), O.subscribeUser(r, t);
        }
        return !1;
      }
      class b extends a.Ay.Store {
        static displayName = "GuildSubscriptionsStore";
        initialize() {
          this.waitFor(
            c.default,
            E.Ay,
            _.A,
            d.A,
            p.A,
            A.Ay,
            f.A,
            g.A,
            I.A,
            T.A,
            S.A,
            u.A,
          ),
            this.syncWith([u.A], D),
            this.syncWith([E.Ay], v);
        }
        getSubscribedThreadIds() {
          return O.getSubscribedThreadIds();
        }
        isSubscribedToThreads(e) {
          return O.isSubscribedToThreads(e);
        }
        isSubscribedToAnyMember(e) {
          return O.isSubscribedToAnyMember(e);
        }
        isSubscribedToMemberUpdates(e) {
          return O.isSubscribedToMemberUpdates(e);
        }
        isSubscribedToAnyGuildChannel(e) {
          let t = O.get(e).channels;
          return null != t && Object.keys(t).length > 0;
        }
      }
      let U = new b(s.h, {
        CONNECTION_OPEN: R,
        CONNECTION_RESUMED: R,
        CONNECTION_CLOSED: function () {
          C(!1, !1);
        },
        IDLE: function (e) {
          let { idle: t } = e;
          if (!t) return !1;
          C(!1, !0);
        },
        LOGOUT: function () {
          O.reset();
        },
        VOICE_CHANNEL_SELECT: L,
        CHANNEL_SELECT: L,
        GUILD_CREATE: function (e) {
          let { guild: t } = e;
          t.id === S.A.getGuildId() && v();
        },
        GUILD_DELETE: function (e) {
          let { guild: t } = e;
          O.clearWithoutFlushing(t.id, !0);
        },
        GUILD_SUBSCRIPTIONS_MEMBERS_ADD: function (e) {
          let { guildId: t, userIds: n } = e;
          return (
            n.forEach((e) => {
              e !== c.default.getId() && O.subscribeUser(t, e);
            }),
            !1
          );
        },
        GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function (e) {
          let { guildId: t, userIds: n } = e;
          return (
            n.forEach((e) => {
              O.unsubscribeUser(t, e);
            }),
            !1
          );
        },
        GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: function (e) {
          let { guildId: t } = e;
          O.subscribeToMemberUpdates(t);
        },
        GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: function (e) {
          let { guildId: t } = e;
          O.unsubscribeFromMemberUpdates(t);
        },
        GUILD_SUBSCRIPTIONS_CHANNEL: function (e) {
          let { guildId: t, channelId: n, ranges: i } = e;
          return y(t, n, i);
        },
        GUILD_SUBSCRIPTIONS: function (e) {
          let { guildId: t } = e;
          return O.subscribeToGuild(t);
        },
        CHANNEL_PRELOAD: function (e) {
          let { guildId: t, channelId: n } = e;
          return N(t, n);
        },
        INBOX_OPEN: function (e) {
          let { guildIds: t } = e;
          for (let e of t) null != e && O.subscribeToGuild(e);
          return !1;
        },
        THREAD_UPDATE: function (e) {
          let { channel: t } = e;
          return t.isArchivedThread()
            ? O.unsubscribeThreadMemberList(t.guild_id, t.id)
            : !!t.isActiveThread() &&
                T.A.getChannelId() === t.id &&
                void O.subscribeThreadMemberList(
                  t.guild_id,
                  t.id,
                  T.A.getChannelId(),
                );
        },
        THREAD_DELETE: function (e) {
          let { channel: t } = e;
          return O.unsubscribeThreadMemberList(t.guild_id, t.id);
        },
        THREAD_LIST_SYNC: v,
      });
    },
    958590(e, t, n) {
      let i;
      n.d(t, { A: () => N });
      var r = n(177029),
        l = n.n(r),
        a = n(818125),
        s = n.n(a),
        o = n(725918),
        d = n.n(o),
        u = n(17928),
        c = n(228366),
        h = n(671759),
        E = n(172799);
      let _ = {},
        p = {},
        A = {},
        f = {},
        g = !1,
        I = !1,
        T = !1,
        S = new Map();
      function m(e) {
        return e.toLowerCase();
      }
      function O(e) {
        let { inviteCode: t } = e,
          n = m(t);
        if (!S.has(n)) return !1;
        (S = new Map(S)).delete(n);
      }
      class C extends u.Ay.Store {
        static displayName = "InstantInviteStore";
        getInvite(e) {
          let {
            targetType: t,
            targetUserId: n,
            targetApplicationId: i,
          } = arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : {};
          return t === E.yV.STREAM && null != n
            ? p[e]?.[n]
            : t === E.yV.EMBEDDED_APPLICATION && null != i
              ? A[e]?.[i]
              : _[e];
        }
        getFriendInvite() {
          return i;
        }
        getFriendInvitesFetching() {
          return g;
        }
        canRevokeFriendInvite() {
          return null != i && !I && !T;
        }
        getReceivedInstallationIdForInviteCode(e) {
          return S.get(m(e));
        }
      }
      let N = new C(c.h, {
        CONNECTION_OPEN: function () {
          (_ = {}),
            (p = {}),
            (A = {}),
            (f = {}),
            (i = null),
            (I = !1),
            (T = !1),
            (g = !1);
        },
        CHANNEL_DELETE: function (e) {
          let { channel: t } = e;
          delete _[t.id], delete p[t.id], delete A[t.id];
        },
        FRIEND_INVITE_CREATE_SUCCESS: function (e) {
          (f[e.invite.code] = h.A.createFromServer(e.invite)),
            (i = l()(s()(d()(Object.values(f), "createdAt"))) ?? null),
            (T = !1);
        },
        FRIEND_INVITE_CREATE_FAILURE: function () {
          T = !1;
        },
        FRIEND_INVITE_REVOKE_SUCCESS: function (e) {
          null != e.invites &&
            e.invites.forEach((e) => {
              null != f[e.code] && delete f[e.code];
            }),
            (i = l()(s()(d()(Object.values(f), "createdAt"))) ?? null),
            (I = !1);
        },
        INSTANT_INVITE_CREATE_SUCCESS: function (e) {
          let { channelId: t, invite: n } = e,
            i = h.A.createFromServer(n);
          i.targetType === E.yV.STREAM && null != i.targetUser
            ? (null == p[t] && (p[t] = {}), (p[t][String(i.targetUser.id)] = i))
            : i.targetType === E.yV.EMBEDDED_APPLICATION &&
                null != i.targetApplication
              ? (null == A[t] && (A[t] = {}),
                (A[t][i.targetApplication.id] = i))
              : (_[t] = i);
        },
        INSTANT_INVITE_CREATE_FAILURE: function (e) {
          let { channelId: t } = e;
          _[t] = null;
        },
        INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
          let { channelId: t } = e;
          _[t] = null;
        },
        FRIEND_INVITE_REVOKE_REQUEST: function () {
          I = !0;
        },
        FRIEND_INVITE_CREATE_REQUEST: function () {
          T = !0;
        },
        FRIEND_INVITES_FETCH_REQUEST: function () {
          g = !0;
        },
        FRIEND_INVITES_FETCH_RESPONSE: function (e) {
          (f = {}),
            e.invites.forEach((e) => {
              f[e.code] = h.A.createFromServer(e);
            }),
            (i = l()(s()(d()(Object.values(f), "createdAt"))) ?? null),
            (g = !1);
        },
        INSTANT_INVITE_CLEAR: function (e) {
          delete _[e.channelId];
        },
        INSTANT_INVITE_RECEIVED_INSTALLATION_ID_SET: function (e) {
          (S = new Map(S)).set(m(e.inviteCode), e.receivedInstallationId);
        },
        INSTANT_INVITE_RECEIVED_INSTALLATION_ID_CLEAR: O,
        INVITE_MODAL_CLOSE: function (e) {
          let { inviteCode: t } = e;
          return null != t && O({ inviteCode: t });
        },
        LOGOUT: function () {
          if (0 === S.size) return !1;
          S = new Map();
        },
      });
    },
    737613(e, t, n) {
      let i, r;
      n.d(t, { A: () => p });
      var l = n(17928),
        a = n(506774),
        s = n(228366),
        o = n(734057),
        d = n(71393);
      let u = "hideSuppressWarning",
        c = !1,
        h = !0,
        E = !1;
      class _ extends l.Ay.Store {
        static displayName = "PermissionSpeakStore";
        initialize() {
          this.waitFor(o.A, d.A), (E = a.w.get(u) || E);
        }
        isAFKChannel() {
          let e = o.A.getChannel(r);
          if (null == e) return !1;
          let t = d.A.getGuild(e.getGuildId());
          return null != t && e.id === t.afkChannelId;
        }
        shouldShowWarning() {
          return !o.A.getChannel(r)?.isGuildStageVoice() && !h;
        }
      }
      let p = new _(s.h, {
        CONNECTION_OPEN: function (e) {
          (i = e.sessionId), (c = !1);
        },
        CONNECTION_CLOSED: function () {
          (i = null), (r = null), (h = !0);
        },
        VOICE_STATE_UPDATES: function (e) {
          let { voiceStates: t } = e;
          return t.reduce(
            (e, t) =>
              i !== t.sessionId
                ? e
                : (c !== t.suppress && (h = !(c = t.suppress)),
                  r !== t.channelId && ((r = t.channelId), (h = !c)),
                  (E || null == t.channelId) && (h = !0),
                  !0),
            !1,
          );
        },
        PERMISSION_CLEAR_SUPPRESS_WARNING: function (e) {
          let { forever: t } = e;
          (h = !0), t && ((E = !0), a.w.set(u, E));
        },
      });
    },
    543465(e, t, n) {
      n.d(t, { Ay: () => q, b5: () => Y, wn: () => B }), n(938796);
      var i = n(735438),
        r = n.n(i),
        l = n(665260),
        a = n(17928),
        s = n(228366),
        o = n(544743),
        d = n(164956),
        u = n(152007),
        c = n(95701),
        h = n(935208),
        E = n(734057),
        _ = n(71393),
        p = n(287809),
        A = n(652215),
        f = n(406535),
        g = n(790782),
        I = n(355097);
      let T = {},
        S = {},
        m = !1,
        O = !1,
        C = { flags: 0 },
        N = new o.Ay(),
        y = new o.Ay(),
        R = {
          suppress_everyone: !1,
          suppress_roles: !1,
          mute_scheduled_events: !1,
          mobile_push: !0,
          muted: !1,
          message_notifications: A.orn.ALL_MESSAGES,
          flags: 0,
          channel_overrides: {},
          notify_highlights: A.guM.NULL,
          hide_muted_channels: !1,
          version: -1,
          mute_config: null,
        },
        L = {
          [A.orn.ALL_MESSAGES]: {
            ...R,
            message_notifications: A.orn.ALL_MESSAGES,
          },
          [A.orn.ONLY_MENTIONS]: {
            ...R,
            message_notifications: A.orn.ONLY_MENTIONS,
          },
        },
        v = {},
        D = {},
        b = new Set(),
        U = new Set(),
        P = {},
        M = {};
      function w(e, t) {
        let n = T[e],
          i = n?.channel_overrides ?? {},
          a = Y(t.channel_overrides),
          s = { ...B(e), ...n, ...t, channel_overrides: a };
        N.clearTimer(e),
          r().forEach(i, (e) => {
            y.clearTimer(e.channel_id);
          }),
          G(e, s),
          (T[e] = s),
          (v[e] = z(T[e]));
        let o = r().filter(s.channel_overrides, (e) =>
          l.Lt(e.flags ?? 0, I.vv.OPT_IN_ENABLED),
        );
        (D[e] = new Set(o.map((e) => e.channel_id))),
          (function (e) {
            if (null == e) return;
            let t = new Set(D[e]),
              n = P[e] ?? {};
            for (let e in n) {
              let i = n[e];
              l.Lt(i.flags, I.vv.OPT_IN_ENABLED) ? t.add(e) : t.delete(e);
            }
            Object.keys(n).length > 0 ? (M[e] = t) : delete M[e];
          })(e),
          delete S[e];
      }
      function G(e, t) {
        !0 === t.muted &&
          N.setTimer(e, t.mute_config, () => {
            F(e, { muted: !1 }),
              s.h.dispatch({ type: "GUILD_MUTE_EXPIRED", guildId: e });
          }) &&
          (t.muted = !1),
          r().forEach(t.channel_overrides, (t) => {
            !0 === t.muted &&
              y.setTimer(t.channel_id, t.mute_config, () => {
                V(e, t.channel_id, { muted: !1 }),
                  s.h.dispatch({
                    type: "CHANNEL_MUTE_EXPIRED",
                    guildId: e,
                    channelId: t.channel_id,
                  });
              }) &&
              (t.muted = !1);
          });
      }
      function F(e, t) {
        let n = T[e];
        w(e, { channel_overrides: n?.channel_overrides ?? {}, ...t });
      }
      function V(e, t, n) {
        let i = H(e, t, n);
        x(e, { [t]: i });
      }
      function k(e, t) {
        let n = {},
          i = (null != e ? P[e] : null) ?? {};
        h.default.keys(t).forEach((r) => {
          let l = H(e, r, t[r]);
          (n[r] = l), (i[r] = { flags: l.flags ?? 0 });
        }),
          null != e && (P[e] = { ...P[e], ...i }),
          x(e, n);
      }
      function x(e, t) {
        let n = T[e],
          i = n?.channel_overrides ?? {};
        w(e, { channel_overrides: null == n ? t : { ...i, ...t } });
      }
      function H(e, t, n) {
        let i = T[e];
        return {
          channel_id: t,
          muted: !1,
          ...(i?.channel_overrides ?? {})[t],
          ...n,
        };
      }
      function B(e) {
        let t = _.A.getGuild(e);
        return L[
          null != t ? t.defaultMessageNotifications : A.orn.ALL_MESSAGES
        ];
      }
      function Y() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e instanceof Array ? r().keyBy(e, "channel_id") : e;
      }
      function W(e) {
        return T[e] ?? B(e);
      }
      function $(e) {
        (m = l.Lt(e.flags, f.i.USE_NEW_NOTIFICATIONS)),
          (O = l.Lt(e.flags, f.i.MENTION_ON_ALL_MESSAGES)),
          (C = e);
      }
      function z(e) {
        return new Set(
          null != e.channel_overrides
            ? r()(e.channel_overrides)
                .filter((e) => (0, o.tG)(e))
                .map((e) => e.channel_id)
                .value()
            : null,
        );
      }
      function K() {
        return !0;
      }
      class j extends a.Ay.PersistedStore {
        static displayName = "UserGuildSettingsStore";
        static persistKey = "collapsedGuilds";
        initialize(e) {
          this.waitFor(E.A, _.A, d.A, u.A, p.default),
            null != e &&
              ((m = e.useNewNotifications ?? !1),
              "userGuildSettings" in e &&
                ((T = e.userGuildSettings),
                (D = r().mapValues(
                  e.optedInChannelsByGuild ?? {},
                  (e) => new Set(e),
                )),
                r().forEach(T, (e, t) => {
                  v[t] = z(e);
                })));
        }
        getState() {
          return { useNewNotifications: m };
        }
        get mentionOnAllMessages() {
          return O;
        }
        isSuppressEveryoneEnabled(e) {
          return W(e).suppress_everyone;
        }
        isSuppressRolesEnabled(e) {
          return W(e).suppress_roles;
        }
        isMuteScheduledEventsEnabled(e) {
          return W(e).mute_scheduled_events;
        }
        isMobilePushEnabled(e) {
          return W(e).mobile_push;
        }
        isMuted(e) {
          let t = W(e);
          return (0, o.tG)(t);
        }
        isTemporarilyMuted(e) {
          let t = W(e);
          return (0, o.wG)(t);
        }
        getMuteConfig(e) {
          return W(e).mute_config;
        }
        getMessageNotifications(e) {
          return W(e).message_notifications;
        }
        getChannelOverrides(e) {
          return W(e).channel_overrides ?? {};
        }
        getNotifyHighlights(e) {
          return W(e).notify_highlights;
        }
        getGuildFlags(e) {
          return W(e).flags;
        }
        getChannelMessageNotifications(e, t) {
          let n = this.getChannelOverrides(e)[t];
          return null == n || null == n.message_notifications
            ? A.orn.NULL
            : n.message_notifications;
        }
        getChannelMuteConfig(e, t) {
          let n = this.getChannelOverrides(e)[t];
          return null != n ? n.mute_config : null;
        }
        getMutedChannels(e) {
          return v[e] ?? b;
        }
        isChannelMuted(e, t) {
          let n = E.A.getChannel(t);
          return (e = n?.getGuildId() ?? e), this.getMutedChannels(e).has(t);
        }
        isCategoryMuted(e, t) {
          let n = E.A.getChannel(t);
          if (null == n) return !1;
          let i = n.parent_id;
          return null != i && this.getMutedChannels(e).has(i);
        }
        resolvedMessageNotifications(e) {
          let t = this.getChannelMessageNotifications(e.guild_id, e.id);
          if (t !== A.orn.NULL) return t;
          if (null != e.parent_id) {
            let t = this.getChannelMessageNotifications(
              e.guild_id,
              e.parent_id,
            );
            if (t !== A.orn.NULL) return t;
          }
          return this.getMessageNotifications(e.guild_id);
        }
        resolveUnreadSetting(e) {
          if (c.Le.has(e.type) || (0, c.Gw)(e.type) || !m)
            return g.e.ALL_MESSAGES;
          let t = this.getChannelUnreadSetting(e.guild_id, e.id);
          if (t !== g.e.UNSET) return t;
          if (null != e.parent_id) {
            let t = this.getChannelUnreadSetting(e.guild_id, e.parent_id);
            if (t !== g.e.UNSET) return t;
          }
          let n = this.getGuildUnreadSetting(e.guild_id);
          return n !== g.e.UNSET
            ? n
            : this.resolvedMessageNotifications(e) === A.orn.ALL_MESSAGES
              ? g.e.ALL_MESSAGES
              : g.e.ONLY_MENTIONS;
        }
        isGuildOrCategoryOrChannelMuted(e, t) {
          return (
            this.isMuted(e) ||
            this.isCategoryMuted(e, t) ||
            this.isChannelMuted(e, t)
          );
        }
        allowNoMessages(e) {
          return (
            this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) ||
            this.resolvedMessageNotifications(e) === A.orn.NO_MESSAGES ||
            (this.isOptInEnabled(e.guild_id) &&
              !this.isChannelRecordOrParentOptedIn(e))
          );
        }
        allowAllMessages(e) {
          return (
            !this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) &&
            this.resolvedMessageNotifications(e) === A.orn.ALL_MESSAGES &&
            (!this.isOptInEnabled(e.guild_id) ||
              this.isChannelRecordOrParentOptedIn(e))
          );
        }
        isGuildCollapsed(e) {
          return T[e]?.hide_muted_channels === !0;
        }
        getAllSettings() {
          return {
            userGuildSettings: T,
            mutedChannels: v,
            optedInChannelsByGuild: D,
          };
        }
        getChannelIdFlags(e, t) {
          let n = this.getChannelOverrides(e)[t];
          return n?.flags ?? 0;
        }
        getChannelFlags(e) {
          return this.getChannelIdFlags(e.guild_id, e.id);
        }
        getNewForumThreadsCreated(e) {
          let t = this.getChannelOverrides(e.guild_id)[e.id];
          if (null != t && null != t.flags) {
            if (l.Lt(t.flags, I.vv.NEW_FORUM_THREADS_ON)) return !0;
            if (l.Lt(t.flags, I.vv.NEW_FORUM_THREADS_OFF)) return !1;
          }
          return this.resolvedMessageNotifications(e) === A.orn.ALL_MESSAGES;
        }
        isOptInEnabled(e) {
          return (
            null != e &&
            (d.A.isFullServerPreview(e)
              ? d.A.isOptInEnabled(e)
              : l.Lt(this.getGuildFlags(e), I.n3.OPT_IN_CHANNELS_ON))
          );
        }
        isChannelRecordOrParentOptedIn(e, t) {
          return (
            null != e &&
            null != e.guild_id &&
            (this.isChannelOptedIn(e.guild_id, e.id, t) ||
              (null != e.parent_id &&
                this.isChannelOptedIn(e.guild_id, e.parent_id, t)))
          );
        }
        isChannelOrParentOptedIn(e, t, n) {
          return this.isChannelRecordOrParentOptedIn(E.A.getChannel(t), n);
        }
        isChannelOptedIn(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (null == e) return !1;
          if (d.A.isFullServerPreview(e)) return d.A.isChannelOptedIn(e, t);
          if (n && null != M[e]) return M[e].has(t);
          let i = this.getChannelOverrides(e)[t]?.flags ?? 0;
          return l.Lt(i, I.vv.OPT_IN_ENABLED);
        }
        getOptedInChannels(e) {
          return d.A.isFullServerPreview(e)
            ? (d.A.getViewingChannels(e) ?? U)
            : (D[e] ?? U);
        }
        getOptedInChannelsWithPendingUpdates(e) {
          return M[e];
        }
        getPendingChannelUpdates(e) {
          return P[e];
        }
        getGuildFavorites(e) {
          if (d.A.isFullServerPreview(e)) return null;
          if (null == S[e]) {
            let t = r().filter(
              this.getChannelOverrides(e),
              (t) =>
                l.Lt(t.flags ?? 0, I.vv.FAVORITED) &&
                E.A.getChannel(t.channel_id)?.guild_id === e,
            );
            S[e] = t.map((e) => e.channel_id);
          }
          return S[e];
        }
        isFavorite(e, t) {
          return (
            !d.A.isFullServerPreview(e) &&
            this.getGuildFavorites(e)?.includes(t) === !0
          );
        }
        isMessagesFavorite(e) {
          let t = this.getChannelOverrides(null)[e]?.flags ?? 0;
          return l.Lt(t, I.vv.FAVORITED);
        }
        get accountNotificationSettings() {
          return C;
        }
        get useNewNotifications() {
          return m;
        }
        getGuildUnreadSetting(e) {
          if (!m) return g.e.ALL_MESSAGES;
          let t = this.getGuildFlags(e);
          return l.Lt(t, I.n3.UNREADS_ALL_MESSAGES)
            ? g.e.ALL_MESSAGES
            : l.Lt(t, I.n3.UNREADS_ONLY_MENTIONS)
              ? g.e.ONLY_MENTIONS
              : g.e.UNSET;
        }
        resolveGuildUnreadSetting(e) {
          let t = this.getGuildFlags(e.id);
          return !m || l.Lt(t, I.n3.UNREADS_ALL_MESSAGES)
            ? g.e.ALL_MESSAGES
            : l.Lt(t, I.n3.UNREADS_ONLY_MENTIONS)
              ? g.e.ONLY_MENTIONS
              : e.defaultMessageNotifications === A.orn.ALL_MESSAGES
                ? g.e.ALL_MESSAGES
                : g.e.ONLY_MENTIONS;
        }
        getChannelRecordUnreadSetting(e) {
          return this.getChannelUnreadSetting(e.guild_id, e.id);
        }
        getChannelUnreadSetting(e, t) {
          let n = this.getChannelIdFlags(e, t);
          return l.Lt(n, I.vv.UNREADS_ALL_MESSAGES)
            ? g.e.ALL_MESSAGES
            : l.Lt(n, I.vv.UNREADS_ONLY_MENTIONS)
              ? g.e.ONLY_MENTIONS
              : g.e.UNSET;
        }
      }
      let q = new j(s.h, {
        USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
          let { userGuildSettings: t } = e;
          t.forEach((e) => {
            w(e.guild_id, { channel_overrides: {}, ...e });
          });
        },
        USER_GUILD_SETTINGS_GUILD_UPDATE: function (e) {
          let { guildId: t, settings: n } = e;
          F(t, n);
        },
        USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: function (e) {
          let { guildId: t, settings: n } = e;
          F(t, n), k(t, n.channel_overrides);
        },
        USER_GUILD_SETTINGS_CHANNEL_UPDATE: function (e) {
          let { guildId: t, channelId: n, settings: i } = e;
          null != t &&
            null != i.flags &&
            (P[t] = { ...P[t], [n]: { flags: i.flags } }),
            V(t, n, i);
        },
        USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: function (e) {
          let { guildId: t, overrides: n } = e;
          return !(null == t || d.A.isFullServerPreview(t)) && (k(t, n), !0);
        },
        CONNECTION_OPEN: function (e) {
          $(e.notificationSettings),
            N.reset(),
            y.reset(),
            e.userGuildSettings.partial || ((T = {}), (v = {}), (D = {}));
          let t = new Set();
          for (let n in (e.userGuildSettings.entries.forEach((e) => {
            "channel_overrides" in e || (e.channel_overrides = {}),
              w(e.guild_id, e),
              null != e.guild_id && t.add(e.guild_id);
          }),
          T))
            t.has(n) || G(n, T[n]);
        },
        CACHE_LOADED: function (e) {
          null != e.userGuildSettings &&
            0 !== e.userGuildSettings.length &&
            ((T = {}),
            (v = {}),
            (D = {}),
            e.userGuildSettings.forEach((e) => {
              let t = e.guild_id;
              T[t] = e;
              let n = new Set(),
                i = new Set();
              for (let t in e.channel_overrides) {
                let r = e.channel_overrides[t];
                (0, o.tG)(r) && n.add(t),
                  l.Lt(r.flags ?? 0, I.vv.OPT_IN_ENABLED) && i.add(t);
              }
              (v[t] = n), (D[t] = i);
            }));
        },
        OVERLAY_INITIALIZE: function (e) {
          let { allUserGuildSettings: t } = e,
            {
              userGuildSettings: n,
              mutedChannels: i,
              optedInChannelsByGuild: r,
            } = t;
          (T = { ...n }),
            (v = {}),
            (D = {}),
            h.default.keys(i).forEach((e) => {
              v[e] = new Set(i[e]);
            }),
            h.default.keys(r).forEach((e) => {
              D[e] = new Set(r[e]);
            });
        },
        GUILD_CREATE: K,
        GUILD_UPDATE: K,
        GUILD_TOGGLE_COLLAPSE_MUTED: function (e) {
          let { guildId: t } = e,
            n = null == T[t] ? B(t) : T[t];
          T[t] = {
            ...n,
            guild_id: t,
            hide_muted_channels: !0 !== n.hide_muted_channels,
          };
        },
        IMPERSONATE_UPDATE: K,
        IMPERSONATE_STOP: K,
        USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES: function (e) {
          let { guildId: t, updates: n } = e;
          if (null == t) return !1;
          let i = P[t];
          if (null == i) return !1;
          for (let e in n) r().isEqual(n[e], i[e]) && delete i[e];
        },
        CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function (e) {
          let { guildId: t } = e;
          if (null == t) return !1;
          delete P[t], delete M[t];
        },
        NOTIFICATION_SETTINGS_UPDATE: function (e) {
          let { settings: t } = e;
          $(t);
        },
        GUILD_MUTE_EXPIRED: () => !0,
        CHANNEL_MUTE_EXPIRED: () => !0,
      });
    },
    870570(e, t, n) {
      n.d(t, { A: () => o });
      var i = n(17928),
        r = n(228366);
      let l = null;
      class a extends i.Ay.Store {
        static displayName = "UserRequiredActionStore";
        hasAction() {
          return null != l;
        }
        getAction() {
          return l;
        }
      }
      function s(e) {
        l = e.requiredAction;
      }
      let o = new a(r.h, {
        CONNECTION_OPEN: s,
        USER_REQUIRED_ACTION_UPDATE: s,
      });
    },
    803301(e, t, n) {
      n.d(t, { A: () => _ });
      var i = n(17928),
        r = n(228366),
        l = n(652215),
        a = n(731854);
      let s = null,
        o = null,
        d = {},
        u = {};
      function c(e, t) {
        return `${e}:${t}`;
      }
      function h(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null,
          i = d[e];
        if (null == i) return;
        let r = i[t ?? l.eGj];
        if (null != r) {
          for (let t of Object.values(a.x))
            (n === t || null == n) && (delete r[t], delete u[c(n ?? t, e)]);
          d[e][t ?? l.eGj] = r;
        }
      }
      class E extends i.Ay.Store {
        static displayName = "VideoStreamStore";
        getStreamId(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : a.x.DEFAULT;
          return d[e]?.[t ?? l.eGj]?.[n]?.streamId;
        }
        getUserStreamData(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : a.x.DEFAULT;
          return d[e]?.[t ?? l.eGj]?.[n];
        }
        getTimedoutVideos() {
          return u;
        }
        getTimedoutVideo(e, t) {
          return u[c(e, t)];
        }
      }
      let _ = new E(r.h, {
        CONNECTION_OPEN: function (e) {
          let { user: t, sessionId: n } = e;
          (s = t.id), (o = n);
        },
        OVERLAY_INITIALIZE: function (e) {
          let { user: t, sessionId: n } = e;
          (s = t.id), (o = n);
        },
        RTC_CONNECTION_VIDEO: function (e) {
          let { userId: t, guildId: n, streamId: i, context: r } = e;
          if (null != i) {
            let e;
            t in d || (d[t] = {}),
              (e = d[t][n ?? l.eGj] ?? {}),
              (d[t][n ?? l.eGj] = { ...e, [r]: { streamId: i } }),
              delete u[c(r, t)];
          } else h(t, n, r);
        },
        VOICE_STATE_UPDATES: function (e) {
          let { voiceStates: t } = e;
          return t.reduce((e, t) => {
            let { userId: n, sessionId: i, channelId: r, guildId: a } = t;
            if (null == r && n === s)
              if (i !== o) return e;
              else (d = {}), (u = {});
            else {
              if (null != r || d[n]?.[a ?? l.eGj] == null) return e;
              h(n, a);
            }
            return !0;
          }, !1);
        },
        VIDEO_STREAM_READY_TIMEOUT: function (e) {
          let {
            videoStreamId: t,
            userId: n,
            streamKey: i,
            mediaContext: r,
          } = e;
          u[c(r, n)] = {
            videoStreamId: t,
            userId: n,
            streamKey: i,
            mediaContext: r,
          };
        },
        CLEAR_VIDEO_STREAM_READY_TIMEOUT: function (e) {
          let { mediaContext: t, userId: n } = e,
            i = c(t, n);
          if (null == u[i]) return !1;
          delete u[i];
        },
      });
    },
    568004(e, t, n) {
      n.d(t, { A: () => w }), n(321073);
      var i = n(735438),
        r = n.n(i),
        l = n(17928),
        a = n(451988),
        s = n(228366),
        o = n(712963),
        d = n(356645),
        u = n(92077),
        c = n(587895),
        h = n(253932),
        E = n(617617),
        _ = n(189081),
        p = n(340829),
        A = n(775228),
        f = n(927813),
        g = n(674378),
        I = n(144914);
      let T = new Set(),
        S = {},
        m = new Set(),
        O = {},
        C = new Set(),
        N = {},
        y = 10 * f.A.Millis.MINUTE,
        R = 6 * f.A.Millis.HOUR,
        L = 10 * f.A.Millis.MINUTE,
        v = new a.Ep();
      function D(e) {
        v.start(e + Math.random() * y, o.r);
      }
      function b() {
        if (!(0, I.S)() || h.l_.getSetting()) return !1;
        let e = _.A.entitledBranchIds,
          t = [];
        for (let n of e) N.hasOwnProperty(n) || ((N[n] = null), t.push(n));
        if (0 === t.length) return !1;
        s.h.wait(() => o.r(t));
      }
      function U(e, t) {
        if (null != S[t] && A.A.shouldBeInstalled(e, t)) {
          let n = S[t],
            i = n.manifestIds,
            l = p.A.getState(e, t);
          null != l &&
            l.shouldPatch &&
            (l.buildId !== n.id || !r().isEqual(l.manifestIds, i)) &&
            s.h.wait(() => {
              let r = c.A.getApplication(e);
              null != r
                ? (C.delete((0, g.gW)(e, t)), (0, u.K3)(r, t, n.id, i, !0))
                : C.add((0, g.gW)(e, t));
            });
        }
      }
      function P() {
        v.stop();
      }
      class M extends l.Ay.Store {
        static displayName = "ApplicationBuildStore";
        initialize() {
          this.syncWith([_.A], b), this.waitFor(c.A, p.A, A.A, _.A, E.A);
        }
        getTargetBuildId(e, t) {
          return null == S[t] ? null : S[t].id;
        }
        getTargetManifests(e, t) {
          return null == S[t] ? null : S[t].manifestIds;
        }
        hasNoBuild(e, t) {
          return m.has(t);
        }
        isFetching(e, t) {
          return T.has(t);
        }
        needsToFetchBuildSize(e) {
          return !O.hasOwnProperty(e);
        }
        getBuildSize(e) {
          return O[e];
        }
      }
      let w = new M(s.h, {
        CONNECTION_OPEN: function () {
          return !h.l_.getSetting() && (D(R), b());
        },
        GAMES_DATABASE_UPDATE: function () {
          if (!(0, I.S)()) return !1;
          for (let e of C) {
            let { applicationId: t, branchId: n } = (0, g.r0)(e);
            null != c.A.getApplication(t) && (C.delete(e), U(t, n));
          }
        },
        APPLICATION_BUILD_FETCH_START: function (e) {
          let { branchId: t } = e;
          T.add(t);
        },
        APPLICATION_BUILD_FETCH_SUCCESS: function (e) {
          let { applicationId: t, branchId: n, locale: i, build: r } = e;
          T.delete(n);
          let l = r.manifests.map((e) => {
              let { id: t } = e;
              return t;
            }),
            a = r.id;
          m.delete(n),
            (S[n] = {
              id: a,
              applicationId: t,
              branchId: n,
              locale: i,
              manifestIds: l,
            }),
            U(t, n);
        },
        APPLICATION_BUILD_NOT_FOUND: function (e) {
          let { branchId: t } = e;
          T.delete(t), m.add(t);
        },
        APPLICATION_BUILD_SIZE_FETCH_START: function (e) {
          let { buildId: t } = e;
          O.hasOwnProperty(t) || (O[t] = null);
        },
        APPLICATION_BUILD_SIZE_FETCH_SUCCESS: function (e) {
          let { buildId: t, sizeKB: n } = e;
          O[t] = n;
        },
        APPLICATION_BUILD_SIZE_FETCH_FAIL: function (e) {
          let { buildId: t } = e;
          null == O[t] && delete O[t];
        },
        APPLICATION_BRANCHES_FETCH_SUCCESS: function (e) {
          let { branches: t } = e,
            n = {};
          for (let e in _.A.libraryApplications) {
            let t = _.A.libraryApplications[e];
            n[t.branchId] = t;
          }
          for (let e of t) {
            let { id: t, liveBuildId: i } = e;
            if (i !== N[t]) {
              let e = n[t];
              null != e && s.h.wait(() => d.n(e.id, e.branchId, !0));
            }
            N[t] = i;
          }
          D(R);
        },
        APPLICATION_BRANCHES_FETCH_FAIL: function () {
          D(L);
        },
        CONNECTION_CLOSED: P,
        LOGOUT: P,
        SKU_PURCHASE_SUCCESS: function (e) {
          let { entitlements: t } = e;
          if (!(0, I.S)()) return !1;
          let n = new Set();
          for (let e of t) n.add(e.application_id);
          for (let e in _.A.libraryApplications) {
            let t = _.A.libraryApplications[e];
            n.has(t.id) &&
              (0, g.XZ)(t) &&
              s.h.wait(() => d.n(t.id, t.branchId));
          }
        },
      });
    },
    966846(e, t, n) {
      n.d(t, { A: () => k }), n(321073), n(667532);
      var i = n(735438),
        r = n.n(i),
        l = n(17928),
        a = n(506774),
        s = n(228366),
        o = n(92077),
        d = n(328153),
        u = n(495544),
        c = n(568004),
        h = n(674378),
        E = n(962052),
        _ = n(723702),
        p = n(340829),
        A = n(652215),
        f = n(613057);
      let g = [f.Hi.AUTHENTICATION_FAILED, f.Hi.NOT_ENTITLED],
        I = "DispatchManagerStore",
        T = [],
        S = [],
        m = !1,
        O = null,
        C = null,
        N = !1,
        y = new Map(),
        R = !1,
        L = null;
      function v() {
        let e = { queue: T, paused: m, userActions: Array.from(y) };
        a.w.set(I, e);
      }
      function D() {
        let e = T[0];
        if (null != e) {
          let { comboId: t, action: n } = e,
            { applicationId: i, branchId: r } = (0, h.r0)(t);
          if (
            (null == O || O.applicationId !== i || O.branchId !== r) &&
            (null == C || C.applicationId !== i || C.branchId !== r) &&
            1
          ) {
            let e = u.default.getToken(),
              t = u.default.getId();
            if (null == e) throw Error("missing user token");
            R = !E.A.setCurrentTask(i, r, n, t, e);
          }
        }
      }
      function b(e, t) {
        let n = (0, h.gW)(e, t);
        return T.findIndex((e) => e.comboId === n);
      }
      function U(e, t, n, i) {
        let r = (0, h.gW)(e, t),
          l = { comboId: r, action: i },
          a = S.indexOf(r);
        -1 !== a && S.splice(a, 1);
        let s = b(e, t);
        0 !== s &&
          (n
            ? -1 === s && (T.push(l), D())
            : (s > 0 && T.splice(s, 1), T.unshift(l), D())),
          !n && m && E.A.resume(),
          v();
      }
      function P(e, t) {
        let n = (0, h.gW)(e, t),
          i = S.indexOf(n);
        -1 !== i && S.splice(i, 1);
        let r = b(e, t);
        -1 !== r && (T.splice(r, 1), v()), D();
      }
      function M(e) {
        let { applicationId: t, branchId: n } = e;
        P(t, n);
      }
      function w(e) {
        let { applicationId: t, branchId: n } = e,
          i = (0, h.gW)(t, n),
          r = S.indexOf(i);
        -1 !== r && S.splice(r, 1);
      }
      function G() {
        let e = u.default.getToken(),
          t = u.default.getId();
        null != e && E.A.setCredentials(t, e);
      }
      function F() {
        for (let e of d.Ay.getRunningDiscordApplicationIds()) o.ZT(e, e);
        let e = d.Ay.getVisibleGame();
        return (
          m || null == e || e.pid === L || o.v7(),
          (L = null == e ? null : e.pid),
          !1
        );
      }
      class V extends l.Ay.Store {
        static displayName = "DispatchManagerStore";
        initialize() {
          let e = a.w.get(I) ?? {
            queue: null,
            paused: null,
            userActions: null,
          };
          null != e.queue &&
            (T = e.queue.map((e) =>
              "string" == typeof e ? { comboId: e, action: "Patch" } : e,
            )),
            null != e.paused && (m = e.paused),
            null != e.userActions && (y = new Map(Array.from(e.userActions))),
            this.waitFor(p.A, d.Ay),
            this.syncWith([d.Ay], F),
            this.waitFor(c.A, u.default, p.A);
        }
        get activeItems() {
          return T.map((e) => {
            let { comboId: t } = e;
            return (0, h.r0)(t);
          });
        }
        get finishedItems() {
          return S.map(h.r0);
        }
        get paused() {
          return m;
        }
        getQueuePosition(e, t) {
          return b(e, t);
        }
        isCorruptInstallation() {
          return R;
        }
      }
      let k = new V(s.h, {
        DISPATCH_APPLICATION_INSTALL: function (e) {
          let { applicationId: t, branchId: n } = e;
          y.set((0, h.gW)(t, n), "Install"), U(t, n, !1, "Patch");
        },
        DISPATCH_APPLICATION_UPDATE: function (e) {
          let { applicationId: t, branchId: n, automatic: i } = e;
          U(t, n, i, "Patch");
        },
        DISPATCH_APPLICATION_UNINSTALL: function (e) {
          M(e), w(e);
        },
        DISPATCH_APPLICATION_CANCEL: M,
        DISPATCH_APPLICATION_REPAIR: function (e) {
          let { applicationId: t, branchId: n } = e;
          y.set((0, h.gW)(t, n), "Repair"), U(t, n, !1, "Repair");
        },
        DISPATCH_APPLICATION_MOVE_UP: function (e) {
          let { applicationId: t, branchId: n } = e,
            i = b(t, n);
          if (i < 1) return !1;
          T.splice(0, 0, T.splice(i, 1)[0]), D(), m && E.A.resume(), v();
        },
        DISPATCH_APPLICATION_REMOVE_FINISHED: w,
        DISPATCH_APPLICATION_STATE_UPDATE: function (e) {
          let { state: t } = e;
          !N && ((N = !0), D(), m || E.A.resume());
          let n = m;
          (m = t.paused), (O = t.currentTask), (C = t.nextTask);
          let i = !1;
          (T = T.filter((e) => {
            let { comboId: t } = e,
              { applicationId: n, branchId: l } = (0, h.r0)(t),
              a = p.A.getState(n, l),
              s = c.A.getTargetBuildId(n, l),
              d = c.A.getTargetManifests(n, l);
            if (
              null != a &&
              a.type === A.WTw.UP_TO_DATE &&
              a.buildId === a.targetBuildId &&
              a.buildId === s &&
              r().isEqual(a.manifestIds, a.targetManifestIds) &&
              r().isEqual(a.manifestIds, d)
            ) {
              if ((S.push(t), y.has(t))) {
                switch (y.get(t)) {
                  case "Install":
                    o.BK(n, a);
                    break;
                  case "Repair":
                    o.jU(n, a);
                }
                y.delete(t);
              }
              return (i = !0), !1;
            }
            return !0;
          })),
            D(),
            (i || n !== m) && v();
        },
        DISPATCH_APPLICATION_ERROR: function (e) {
          let { error: t } = e,
            { code: n } = t;
          if (null != n) {
            if (g.includes(n)) G();
            else if (n === f.Hi.APPLICATION_NOT_FOUND) {
              let { context: e } = t;
              if (null != e) {
                let { application_id: t, branch_id: n } = e;
                P(t, n);
              }
            }
          }
        },
        CONNECTION_OPEN: function () {
          (0, _.isDesktop)() && G();
        },
        LOGOUT: function () {
          a.w.remove(I), (0, _.isDesktop)() && E.A.pause();
        },
      });
    },
    532624(e, t, n) {
      n.d(t, { Ay: () => Q, DV: () => y, aS: () => L }), n(321073);
      var i = n(812729),
        r = n.n(i),
        l = n(735438),
        a = n.n(l),
        s = n(17928),
        o = n(228366),
        d = n(775121),
        u = n(626584),
        c = n(549205),
        h = n(969341),
        E = n(954571),
        _ = n(723702),
        p = n(19575),
        A = n(316501),
        f = n(350535),
        g = n(773371),
        I = n(652215),
        T = n(696016);
      n(980504);
      var S = n(650583),
        m = n(72290);
      let O = new u.A("KeybindsStore");
      function C() {
        let e = (0, A.Ze)(!1).get("Backquote") ?? "`";
        return (
          "+" === e ? (e = "plus") : 0 === e.length && (e = "`"), `shift+${e}`
        );
      }
      let N = function (e) {
          let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return {
            id: "1001",
            action: I.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
            shortcut: e,
            enabled: t,
            managed: !0,
            params: {},
          };
        },
        y = (e) => {
          let t = (0, f.Z0)("shift");
          return null != t && (1 !== e.length || e[0][1] !== t);
        },
        R = (e, t, n, i) => {
          let r = (0, A.Ze)(!1).get("Backquote"),
            l = (0, A.Ze)(!0).get("Backquote");
          O.log(e, {
            tags: {
              backquoteKey: r ?? "unknown",
              nativeBackquoteKey: l ?? "unknown",
              backquoteCode: `${(0, A.Q_)(r ?? "`")?.keyCode}`,
              nativeBackquoteCode: `${(0, A.Q_)(l ?? "`")?.keyCode}`,
            },
            extra: {
              keyCombo: t,
              combo: n,
              layoutMapBacktick: r,
              env: S.g$[(0, f._$)()],
              backtickEventShape: (0, A.Q_)("`"),
              backquoteKeyShape: (0, A.Q_)(r ?? "`"),
              nativeBackquoteKeyShape: (0, A.Q_)(l ?? "`"),
              ...i,
            },
          });
        },
        L = () => {
          var e;
          let t,
            n,
            i,
            r = C();
          "shift" === r &&
            (R("Default overlay keybind is only shift", r, null),
            (r = "shift+`"));
          let l =
            ((e = r),
            (t = (0, f.OH)(e)),
            (n = (0, A.Q_)("`")),
            (i = n?.keyCode ?? (0, f.Z0)("`")),
            y(t)
              ? t
              : null == i
                ? (R(
                    "Unable to get backtick code for overlay default keybind",
                    e,
                    t,
                    { rawBacktickShape: n },
                  ),
                  null)
                : (R("Default overlay keybind is unsupported", e, t, {
                    rawBacktickCode: i,
                  }),
                  [...t, [S.zY.KEYBOARD_KEY, i, (0, f._$)()]]));
          if (null == l) return N([], !1);
          if (y(l)) return N(l, !0);
          let a = (0, f.Z0)("shift"),
            s = (0, A.Q_)("`");
          return (
            0 === l.length
              ? R("Default overlay keybind combo is empty", r, l)
              : null == a
                ? R("Unable to get shift code", r, l, { shiftCode: a })
                : null == s && R("Unable to get backtick code", r, l),
            N(l, !1)
          );
        },
        v = {},
        D = {},
        b = 0,
        U = !0,
        P = {},
        M = !1,
        w = [
          I.hCu.PUSH_TO_TALK,
          I.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
          I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
        ],
        G = [];
      function F(e) {
        return e === L().id ? L() : D[e];
      }
      function V(e, t, n) {
        E.default.track(I.HAw.KEYBOARD_SHORTCUT_USED, {
          shortcut_name: n.action,
          shortcut_combo: (0, f.dI)(n.shortcut),
          is_native_keyboard_event: !0,
        }),
          t.onTrigger(e, n);
      }
      function k() {
        let e = L();
        null ==
          a().find(
            D,
            (t) => e.action === t.action && t.enabled && t.shortcut.length > 0,
          ) &&
          U &&
          !M &&
          (B(e), (M = !0));
      }
      function x() {
        let e = L();
        M && (H(e.id), (M = !1));
      }
      function H(e) {
        if (_.isPlatformEmbedded) p.Ay.inputEventUnregister(parseInt(e, 10));
        else {
          let t = v[e];
          if (null != t) {
            let n = D[e];
            if (null != n) {
              let e = P[n.action];
              e?.isPressed === !0 && m.nextTick(() => V(!1, e, n));
            }
            t.reset(), (v[e] = null);
          }
        }
      }
      function B(e) {
        if (!U || __OVERLAY__) return;
        let { shortcut: t, action: n, enabled: i } = e;
        if (0 === t.length || null == t || n === I.hCu.UNASSIGNED || !i) return;
        if (null == P[n])
          return void O.error(
            `[kb store] KeybindStore: Looking for callback action ${n} but it doesn't exist in this version. Skipping`,
          );
        let r = e.id,
          l = parseInt(r, 10);
        if (isNaN(l))
          return void O.error(
            "[kb store] KeybindStore: Keybind id is not a number. Skipping registration.",
            { keybind: e },
          );
        let a = P[n].keyEvents;
        e.action === I.hCu.TOGGLE_OVERLAY_INPUT_LOCK && x(),
          (function (e, t, n, i) {
            if (_.isPlatformEmbedded)
              try {
                p.Ay.inputEventRegister(e, t, n, i);
              } catch (n) {
                throw (
                  (O.error(
                    "Failed to register native keybind",
                    { eventId: e, shortcut: t },
                    n,
                  ),
                  n)
                );
              }
            else {
              H(e.toString());
              let r = (0, c.I)(document);
              i.keyup && r.bindGlobal((0, f.dI)(t), () => n(!1), "keyup"),
                i.keydown && r.bindGlobal((0, f.dI)(t), () => n(!0), "keydown"),
                (v[e] = r);
            }
          })(
            l,
            t,
            (e) =>
              (function (e, t) {
                let n = F(e);
                if (null == n) return;
                let i = P[n.action]?.keyEvents;
                if (null == i) return;
                let r = P[n.action];
                if (i.keydown && i.keyup) {
                  null != r && V(t, P[n.action], n);
                  return;
                }
                G.push(e),
                  setTimeout(() => {
                    for (let t of G) {
                      if (t === e) continue;
                      let i = F(t);
                      if (
                        null != i &&
                        (function (e, t) {
                          return (
                            !(e.shortcut.length >= t.shortcut.length) &&
                            e.shortcut.every((e) =>
                              t.shortcut.some(
                                (t) => t[0] === e[0] && t[1] === e[1],
                              ),
                            )
                          );
                        })(n, i)
                      ) {
                        G.includes(e) && G.splice(G.indexOf(e), 1);
                        return;
                      }
                    }
                    try {
                      null != r && V(t, r, n);
                    } finally {
                      setTimeout(() => {
                        G.includes(e) && G.splice(G.indexOf(e), 1);
                      }, 10);
                    }
                  }, 10);
              })(r, e),
            { focused: !0, blurred: !0, keydown: !1, keyup: !1, ...a },
          ),
          d.A.validateKeybind((0, f.dI)(t));
      }
      function Y(e) {
        let t = {
          id: b.toString(),
          enabled: !0,
          action: I.hCu.UNASSIGNED,
          shortcut: [],
          managed: !1,
          params: {},
          ...e,
        };
        return (D = { ...D, [t.id]: t }), (b += 1), t;
      }
      function W(e) {
        H(e.id),
          (D = { ...D }),
          delete D[e.id],
          e.action === I.hCu.TOGGLE_OVERLAY_INPUT_LOCK && k();
      }
      function $(e) {
        let { keybind: t } = e;
        (D = { ...D, [t.id]: t }),
          __OVERLAY__ ||
            (E.default.track(I.HAw.USER_SETTINGS_KEYBIND_UPDATED, {
              keybind_action: t.action,
              keybind_is_bound: !0,
              keybind_has_shortcut: t.shortcut.length > 0,
            }),
            t.action === I.hCu.TOGGLE_OVERLAY_INPUT_LOCK
              ? E.default.track(I.HAw.OVERLAY_SETTINGS_UPDATED, {
                  hotkey:
                    t.action === I.hCu.TOGGLE_OVERLAY_INPUT_LOCK
                      ? (0, f.dI)(t.shortcut)
                      : null,
                })
              : t.action === I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET &&
                E.default.track(I.HAw.OVERLAY_SETTINGS_UPDATED, {
                  text_activation_hotkey:
                    t.action === I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET
                      ? (0, f.dI)(t.shortcut)
                      : null,
                })),
          B(t);
      }
      function z(e, t) {
        let n =
          !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return (
          null ==
            a().find(D, (t) => t.action === e && (!n || t.managed === n)) &&
          (B(
            Y({
              action: e,
              enabled: !0,
              shortcut: (0, f.OH)(t),
              managed: !0,
              params: {},
            }),
          ),
          !0)
        );
      }
      let K = [
        function () {
          let e = h.Ay.getShortcuts();
          return (
            a().each(D, (t) => {
              t.action === I.hCu.PUSH_TO_TALK &&
                !0 === t.managed &&
                (null == t.context || null == e[t.context]) &&
                W(t);
            }),
            a().reduce(
              h.Ay.getShortcuts(),
              (e, t, n) => {
                let i = a().find(
                  D,
                  (e) =>
                    e.action === I.hCu.PUSH_TO_TALK &&
                    !0 === e.managed &&
                    e.context === n,
                );
                if (null == i)
                  B(
                    Y({
                      action: I.hCu.PUSH_TO_TALK,
                      enabled: !0,
                      shortcut: t,
                      managed: !0,
                      params: {},
                      context: n,
                    }),
                  );
                else {
                  if (null == t) return e || !1;
                  $({
                    keybind: {
                      ...i,
                      shortcut: "string" == typeof t ? (0, f.OH)(t) : t,
                      context: n,
                    },
                  });
                }
                return !0;
              },
              !1,
            )
          );
        },
        function () {
          return (
            !!g.default.getAnyGlobalEnabledOverlay() &&
            z(I.hCu.TOGGLE_OVERLAY_INPUT_LOCK, C())
          );
        },
        function () {
          return (
            !!g.default.getAnyGlobalEnabledOverlay() &&
            z(I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, "]`")
          );
        },
        function () {
          var e;
          let t,
            n =
              ((e = I.hCu.SOUNDBOARD_HOLD),
              (t = !1),
              a().each(D, (n) => {
                n.action === e && !0 === n.managed && (W(n), (t = !0));
              }),
              t);
          return z(I.hCu.SOUNDBOARD_HOLD, "ctrl+`", !1) || n;
        },
        function () {
          return z(I.hCu.SAVE_CLIP, T.Ot);
        },
        function () {
          return z(I.hCu.SAVE_SCREENSHOT, T.sz);
        },
      ];
      function j() {
        return k(), K.reduce((e, t) => t() || e, !1);
      }
      d.A.setGetKeybindList(() => {
        let e = [];
        for (let t in D)
          D.hasOwnProperty(t) && e.push((0, f.dI)(D[t].shortcut));
        return e;
      });
      class q extends s.Ay.DeviceSettingsStore {
        static displayName = "KeybindsStore";
        static persistKey = "keybinds";
        static migrations = [
          function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              { v: t, keybinds: n = e } = e;
            return a().reduce(
              n,
              (e, n, i) => (
                isNaN(parseInt(n.id, 10)) ||
                  n.id !== i ||
                  ((null == t || t < 2) &&
                    ("string" == typeof n.shortcut
                      ? ((n.shortcut = n.shortcut
                          .replace("escape", "esc")
                          .replace("capslock", "caps lock")
                          .replace("numlock", "num lock")
                          .replace("pageup", "page up")
                          .replace("pagedown", "page down")),
                        (n.shortcut = (0, f.OH)(n.shortcut)))
                      : (n.shortcut = n.shortcut.map((e) =>
                          e.length < 3 ? [...e, (0, f._$)()] : e,
                        ))),
                  (e[i] = n)),
                e
              ),
              {},
            );
          },
          (e) => e,
          (e) => {
            let { keybinds: t = e } = e;
            return a().reduce(
              t,
              (e, t, n) => {
                if ((0, _.isLinux)() && t.action === I.hCu.SOUNDBOARD_HOLD) {
                  let n = t.shortcut.map((e) => e[1]),
                    i = (0, f.OH)("`").map((e) => e[1]);
                  if (r()(n, i)) return e;
                }
                return { ...e, [n]: t };
              },
              {},
            );
          },
          (e) => {
            let t = {};
            for (let n in e) {
              let i = e[n];
              null != i &&
                ((null == i.params || null == i.enabled) &&
                  (i = {
                    ...i,
                    enabled: !1 !== i.enabled,
                    params: i.params ?? {},
                  }),
                (t[n] = i));
            }
            return t;
          },
          (e) =>
            a().reduce(
              e,
              (e, t, n) =>
                t.action === I.hCu.TOGGLE_GO_LIVE_STREAMING && t.managed
                  ? e
                  : { ...e, [n]: t },
              {},
            ),
        ];
        initialize(e) {
          __OVERLAY__ || this.waitFor(h.Ay, g.default), (D = e ?? {});
        }
        getUserAgnosticState() {
          return D;
        }
        hasKeybind(e, t, n) {
          for (let i in D)
            for (let r of D[i].shortcut)
              if (r[0] === e && r[1] === t && (void 0 === n || n === r[2]))
                return !0;
          return !1;
        }
        hasExactKeybind(e) {
          for (let t in D) {
            let n = D[t];
            if (a().isEqual(n.shortcut, e)) return !0;
          }
          return !1;
        }
        getKeybindForAction(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return (
            a().find(
              D,
              (i) =>
                i.action === e &&
                (!t || i.managed) &&
                (!n || (i.shortcut.length > 0 && i.enabled)),
            ) ?? null
          );
        }
        getOverlayKeybind() {
          let e = this.getKeybindForAction(I.hCu.TOGGLE_OVERLAY_INPUT_LOCK, !0);
          return null != e ? e : L();
        }
        getOverlayChatKeybind() {
          return this.getKeybindForAction(
            I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
            !0,
          );
        }
      }
      let Z = new q(o.h, {
          CONNECTION_OPEN: j,
          LOGIN_SUCCESS: function () {
            return (
              (async () => {
                await (0, A.AD)(), j() && Z.emitChange();
              })(),
              !1
            );
          },
          AUDIO_SET_MODE: j,
          OVERLAY_SET_ENABLED: j,
          RPC_APP_CONNECTED: j,
          RPC_APP_DISCONNECTED: j,
          KEYBINDS_ADD_KEYBIND: function (e) {
            let { keybind: t } = e;
            B(Y(t));
          },
          KEYBINDS_DELETE_KEYBIND: function (e) {
            let { id: t } = e,
              n = D[t];
            __OVERLAY__ ||
              E.default.track(I.HAw.USER_SETTINGS_KEYBIND_UPDATED, {
                keybind_action: n.action,
                keybind_is_bound: !1,
                keybind_has_shortcut: !1,
              }),
              null != n && W(n);
          },
          KEYBINDS_SET_KEYBIND: $,
          KEYBINDS_ENABLE_ALL_KEYBINDS: function (e) {
            let { enable: t } = e;
            (U = t),
              t
                ? (d.A.enable(), a().forEach(D, B), k())
                : (d.A.disable(), a().forEach(D, (e) => H(e.id)), x());
          },
          KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: function (e) {
            let { keybinds: t } = e;
            (P = t),
              (v = {}),
              (b = 0),
              Object.values(D).filter((e) => w.includes(e.action) && e.managed)
                .length !== w.length && j(),
              a().forEach(D, (e) => {
                b = Math.max(parseInt(e.id, 10), b) + 1;
                try {
                  B(e);
                } catch (t) {
                  O.error("Failed to register keybind", e, t);
                }
              }),
              (U = !0);
          },
        }),
        Q = Z;
    },
    256415(e, t, n) {
      n.r(t), n.d(t, { default: () => x });
      var i = n(17928),
        r = n(506774),
        l = n(228366),
        a = n(350723),
        s = n(996308),
        o = n(211753),
        d = n(876156),
        u = n(761821),
        c = n(95701),
        h = n(495544),
        E = n(734057),
        _ = n(808728),
        p = n(38502),
        A = n(967198),
        f = n(9302),
        g = n(531685),
        I = n(652215),
        T = n(672396);
      let S = Object.freeze({
          selectedGuildId: null,
          selectedChannelId: null,
          displayUserMode: I.f5z.ALWAYS,
          displayNameMode: I.pwA.ALWAYS,
          avatarSizeMode: I.OSZ.LARGE,
          notificationPositionMode: I.G6Q.TOP_LEFT,
          textChatNotifications: I.iXc.ENABLED,
          disableExternalLinkAlert: !1,
          disablePinTutorial: !1,
          disableClickableRegions: !1,
          textWidgetOpacity: T.Li.LOWER,
          showGameInviteNotification: !0,
          customInviteMessage: void 0,
        }),
        m = null,
        O = {},
        C = null,
        N = new Set(),
        y = !1,
        R = !1,
        L = !1,
        v = new Set(),
        D = !1;
      function b(e) {
        let t = O[e];
        return null == t && (t = O[e] = { ...S }), t;
      }
      __OVERLAY__ && (0, d.u)((0, f.getRPCAuthToken)());
      let U = { ...S },
        P = new Set([
          "AUDIO_SET_INPUT_DEVICE",
          "AUDIO_SET_INPUT_VOLUME",
          "AUDIO_SET_LOCAL_VIDEO_DISABLED",
          "AUDIO_SET_LOCAL_VOLUME",
          "AUDIO_SET_MODE",
          "AUDIO_SET_NOISE_CANCELLATION",
          "AUDIO_SET_NOISE_SUPPRESSION",
          "AUDIO_SET_OUTPUT_DEVICE",
          "AUDIO_SET_OUTPUT_VOLUME",
          "AUDIO_TOGGLE_LOCAL_MUTE",
          "AUDIO_TOGGLE_SELF_DEAF",
          "AUDIO_TOGGLE_SELF_MUTE",
          "BILLING_SUBSCRIPTION_UPDATE_SUCCESS",
          "CATEGORY_COLLAPSE",
          "CATEGORY_EXPAND",
          "CHANNEL_ACK",
          "CHANNEL_PRELOAD",
          "GIFT_CODE_REDEEM",
          "GIFT_CODE_REDEEM_FAILURE",
          "GIFT_CODE_REDEEM_SUCCESS",
          "HOTSPOT_HIDE",
          "INVITE_MODAL_CLOSE",
          "LAYOUT_CREATE",
          "LAYOUT_CREATE_WIDGETS",
          "LAYOUT_DELETE_ALL_WIDGETS",
          "LAYOUT_DELETE_WIDGET",
          "LAYOUT_SET_PINNED",
          "LAYOUT_SET_TOP_WIDGET",
          "LAYOUT_UPDATE_WIDGET",
          "LOAD_MESSAGES",
          "LOAD_MESSAGES_FAILURE",
          "LOAD_MESSAGES_SUCCESS",
          "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
          "OVERLAY_ACTIVATE_REGION",
          "OVERLAY_DEACTIVATE_ALL_REGIONS",
          "OVERLAY_MESSAGE_EVENT_ACTION",
          "OVERLAY_SET_AVATAR_SIZE_MODE",
          "OVERLAY_SET_CLICK_ZONES",
          "OVERLAY_SET_DISPLAY_NAME_MODE",
          "OVERLAY_SET_DISPLAY_USER_MODE",
          "OVERLAY_SET_INPUT_LOCKED",
          "OVERLAY_SET_NOTIFICATION_POSITION_MODE",
          "OVERLAY_SET_DISABLE_CLICKABLE_REGIONS",
          "OVERLAY_SET_GAME_INVITE_NOTIFICATION",
          "OVERLAY_SET_INVITE_MESSAGE",
          "OVERLAY_SET_TEXT_WIDGET_OPACITY",
          "OVERLAY_SET_ENABLED",
          "OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN",
          "OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE",
          "OVERLAY_TRACKED_GAME_UPDATE",
          "PREMIUM_PAYMENT_ERROR_CLEAR",
          "PREMIUM_PAYMENT_MODAL_CLOSE",
          "PREMIUM_PAYMENT_MODAL_OPEN",
          "PREMIUM_PAYMENT_SUBSCRIBE_FAIL",
          "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS",
          "PREMIUM_PAYMENT_UPDATE_FAIL",
          "PREMIUM_PAYMENT_UPDATE_SUCCESS",
          "PREMIUM_REQUIRED_MODAL_CLOSE",
          "PREMIUM_REQUIRED_MODAL_OPEN",
          "PURCHASE_CONFIRMATION_MODAL_CLOSE",
          "PURCHASE_CONFIRMATION_MODAL_OPEN",
          "SKU_PURCHASE_CLEAR_ERROR",
          "SKU_PURCHASE_FAIL",
          "SKU_PURCHASE_MODAL_CLOSE",
          "SKU_PURCHASE_MODAL_OPEN",
          "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS",
          "SKU_PURCHASE_SHOW_CONFIRMATION_STEP",
          "SKU_PURCHASE_START",
          "SKU_PURCHASE_SUCCESS",
          "STREAM_CLOSE",
          "STREAM_START",
          "VOICE_CHANNEL_SELECT",
          "USER_SETTINGS_PROTO_ENQUEUE_UPDATE",
          "USER_SETTINGS_PROTO_LOAD_IF_NECESSARY",
        ]),
        M = new Set([
          ...P.values(),
          "ACTIVITY_INVITE_MODAL_CLOSE",
          "CALL_DELETE",
          "CHANNEL_COLLAPSE",
          "CHANNEL_SELECT",
          "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY",
          "OVERLAY_CALL_PRIVATE_CHANNEL",
          "OVERLAY_JOIN_GAME",
          "OVERLAY_NOTIFICATION_EVENT",
          "OVERLAY_SELECT_CALL",
          "OVERLAY_SET_NOT_IDLE",
          "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST",
          "OVERLAY_WIDGET_CHANGED",
          "SOUNDBOARD_SET_OVERLAY_ENABLED",
          "STREAM_STOP",
        ]);
      function w() {
        if (!__OVERLAY__) return !1;
        let e = m === (0, f.getPID)(),
          t = N.has((0, f.getPID)()) || v.size > 0;
        e && t ? (0, a.XC)(window, !0) : (0, a.XC)(window, !1);
      }
      function G() {
        if (m !== (0, f.getPID)()) return !1;
        v.clear();
      }
      function F(e) {
        let t = (0, f.getPID)();
        if (null == e.pid || e.pid === t)
          switch (e.type) {
            case I.kGV.STORAGE_SYNC:
              i.Ay.PersistedStore.initializeAll(e.states);
              break;
            case I.kGV.DISPATCH:
              null != e.payloads &&
                ((R = !0),
                e.payloads.forEach((e) =>
                  (function (e) {
                    if (
                      ("OVERLAY_INITIALIZE" === e.type &&
                        ((null == e.version && 1 === f.OVERLAY_VERSION) ||
                          e.version === f.OVERLAY_VERSION ||
                          (l.h.dispatch({ type: "OVERLAY_INCOMPATIBLE_APP" }),
                          (0, s.Zf)(),
                          0)) &&
                        (L = !0),
                      L)
                    )
                      switch (e.type) {
                        case "CHANNEL_CREATE":
                        case "THREAD_CREATE":
                        case "THREAD_UPDATE":
                        case "CHANNEL_DELETE":
                        case "THREAD_DELETE":
                          let t = (0, c.createChannelRecord)(e.channel);
                          if (!c.A_.has(t.type)) break;
                          l.h.dispatch({ type: e.type, channel: t });
                          break;
                        case "CHANNEL_UPDATES":
                          l.h.dispatch({
                            type: e.type,
                            channels: e.channels.map((e) =>
                              (0, c.createChannelRecord)(e),
                            ),
                          });
                          break;
                        case "CONNECTION_OPEN_SUPPLEMENTAL":
                          (e.lazyPrivateChannels = (
                            e.lazyPrivateChannels ?? []
                          ).map((e) => (0, c.createChannelRecord)(e))),
                            l.h.dispatch(e);
                          break;
                        case "THREAD_LIST_SYNC":
                          l.h.dispatch({
                            ...e,
                            threads: e.threads.map((e) =>
                              (0, c.createChannelRecord)(e),
                            ),
                          });
                          break;
                        case "GUILD_CREATE":
                          let n = (e) => (0, c.createChannelRecord)(e),
                            i = e.guild;
                          switch (
                            ((i.threads = i.threads?.map(n)), i.channels.op)
                          ) {
                            case "full_sync":
                              i.channels.items = i.channels.items.map(n);
                              break;
                            case "update":
                              i.channels.writes = i.channels.writes.map(n);
                              break;
                            default:
                              i.channels;
                          }
                          l.h.dispatch({ type: "GUILD_CREATE", guild: i });
                          break;
                        case "USER_SETTINGS_PROTO_UPDATE":
                          l.h.dispatch({
                            ...e,
                            settings: {
                              proto: (0, u.Y5)(
                                e.settings.type,
                                e.settings.proto,
                              ),
                              type: e.settings.type,
                            },
                          });
                          break;
                        default:
                          l.h.dispatch(e);
                      }
                  })(e),
                ),
                (R = !1));
          }
      }
      let V = new Map();
      class k extends i.Ay.PersistedStore {
        static displayName = "OverlayStore";
        static persistKey = "OverlayStoreV2";
        static migrations = [
          () => {
            let {
              pinnedWidgets: e,
              positions: t,
              sizes: n,
              v: i,
              ...l
            } = { ...r.w.get("OverlayStore") };
            return { ...S, ...(5 === i ? l : null) };
          },
          (e) => {
            let t = h.default.getId();
            return null == e || null == t ? {} : { [t]: { ...e } };
          },
        ];
        initialize(e) {
          if (
            (this.waitFor(h.default, E.A, _.Ay, p.A, A.A, g.A),
            this.syncWith([h.default], () => {
              let e = h.default.getId();
              U = null != e ? b(e) : { ...S };
            }),
            __OVERLAY__ && N.delete((0, f.getPID)()),
            null != e)
          ) {
            O = e;
            let t = h.default.getId();
            null != t &&
              (null == (U = b(t)).textChatNotifications &&
                (U.textChatNotifications = S.textChatNotifications),
              null == U.textWidgetOpacity &&
                (U.textWidgetOpacity = S.textWidgetOpacity),
              null == U.disableClickableRegions &&
                (U.disableClickableRegions = S.disableClickableRegions));
          }
        }
        getState() {
          return O;
        }
        isLocked(e) {
          return !N.has(e);
        }
        isInstanceLocked() {
          return !N.has((0, f.getPID)());
        }
        isInstanceFocused() {
          return m === (0, f.getPID)();
        }
        isFocused(e) {
          return m === e;
        }
        isPinned(e) {
          let t = p.A.getLayout(f.OVERLAY_LAYOUT_ID);
          return (
            null != t &&
            null !=
              t.widgets.find((t) => {
                let n = p.A.getWidget(t);
                return null != n && n.type === e && !!n.pinned;
              })
          );
        }
        getSelectedGuildId() {
          return U.selectedGuildId;
        }
        getSelectedChannelId() {
          return U.selectedChannelId;
        }
        getSelectedCallId() {
          return C;
        }
        getDisplayUserMode() {
          return U.displayUserMode;
        }
        getDisplayNameMode() {
          return U.displayNameMode;
        }
        getAvatarSizeMode() {
          return U.avatarSizeMode;
        }
        getNotificationPositionMode() {
          return U.notificationPositionMode;
        }
        get showInviteNotification() {
          return (
            null == U.showGameInviteNotification || U.showGameInviteNotification
          );
        }
        get disableClickableRegions() {
          return null != U.disableClickableRegions && U.disableClickableRegions;
        }
        get customInviteMessage() {
          return U.customInviteMessage;
        }
        getDisableExternalLinkAlert() {
          return U.disableExternalLinkAlert;
        }
        getFocusedPID() {
          return m;
        }
        get initialized() {
          return L;
        }
        get incompatibleApp() {
          return y;
        }
        getActiveRegions() {
          return v;
        }
        getTextWidgetOpacity() {
          return U.textWidgetOpacity;
        }
        isPreviewingInGame() {
          return D;
        }
        getTrackedGame(e) {
          return V.get(e) ?? null;
        }
      }
      let x = new k(l.h, {
        LOGOUT: function (e) {
          e.isSwitchingAccount || (O = {});
        },
        MULTI_ACCOUNT_REMOVE_ACCOUNT: function (e) {
          e.userId in O && delete O[e.userId];
        },
        CONNECTION_CLOSED: function () {
          N.clear();
        },
        OVERLAY_START_SESSION: function () {
          l.h.addInterceptor((e) => {
            if (R || !M.has(e.type)) return !1;
            if ("CHANNEL_SELECT" === e.type) {
              let { guildId: t, channelId: n } = e;
              return (
                null != n &&
                ((0, s.tN)({
                  type: I.kGV.DISPATCH,
                  pid: (0, f.getPID)(),
                  token: (0, f.getRPCAuthToken)(),
                  payloads: [
                    {
                      type: "CHANNEL_PRELOAD",
                      guildId: t === I.ME ? null : t,
                      channelId: n,
                      context: I.QCW,
                    },
                    {
                      type: "OVERLAY_SELECT_CHANNEL",
                      guildId: t,
                      channelId: n,
                    },
                  ],
                }),
                !1)
              );
            }
            return (
              (0, s.tN)({
                type: I.kGV.DISPATCH,
                pid: (0, f.getPID)(),
                token: (0, f.getRPCAuthToken)(),
                payloads: [e],
              }),
              !P.has(e.type)
            );
          }),
            (0, s.QZ)(F, (0, f.getRPCAuthToken)()),
            (0, s.Ng)(),
            (0, s.tN)({
              type: I.kGV.CONNECT,
              pid: (0, f.getPID)(),
              token: (0, f.getRPCAuthToken)(),
            });
        },
        OVERLAY_INITIALIZE: function (e) {
          let { focusedPID: t, trackedGames: n, overlayStoredSettings: i } = e;
          (m = t),
            __OVERLAY__ &&
              (n.forEach((e) => {
                V.set(e.pid, e);
              }),
              o.x.update({
                legacyEnabled: i.legacyEnabled,
                oopEnabled: i.oopEnabled,
              }));
        },
        OVERLAY_READY: function () {
          let e = U.selectedGuildId,
            t = U.selectedChannelId;
          if (
            (null == e ||
              (_.Ay.hasChannels(e) &&
                (null == t || _.Ay.hasSelectableChannel(e, t))) ||
              ((e = null), (t = null)),
            null != t && null == E.A.getChannel(t) && ((e = null), (t = null)),
            null == e && null == t && (e = A.A.getGuildId()),
            null != e && null == t)
          ) {
            let n = _.Ay.getDefaultChannel(e);
            null != n && (t = n.id);
          }
          (U.selectedGuildId = e), (U.selectedChannelId = t);
        },
        OVERLAY_FOCUSED: function (e) {
          let { pid: t } = e;
          (m = t), w();
        },
        OVERLAY_SELECT_CHANNEL: function (e) {
          let { guildId: t, channelId: n } = e;
          (U.selectedGuildId = t), (U.selectedChannelId = n);
        },
        OVERLAY_SELECT_CALL: function (e) {
          let { callId: t } = e;
          C = t;
        },
        CALL_DELETE: function () {
          C = null;
        },
        LAYOUT_CREATE: function () {},
        OVERLAY_SET_ENABLED: function (e) {
          __OVERLAY__ &&
            o.x.update({
              legacyEnabled: e.legacyEnabled,
              oopEnabled: e.oopEnabled,
            });
        },
        OVERLAY_SET_DISPLAY_NAME_MODE: function (e) {
          let { mode: t } = e;
          U.displayNameMode = t;
        },
        OVERLAY_SET_DISPLAY_USER_MODE: function (e) {
          let { mode: t } = e;
          U.displayUserMode = t;
        },
        OVERLAY_SET_AVATAR_SIZE_MODE: function (e) {
          let { mode: t } = e;
          U.avatarSizeMode = t;
        },
        OVERLAY_SET_NOTIFICATION_POSITION_MODE: function (e) {
          let { mode: t } = e;
          U.notificationPositionMode = t;
        },
        OVERLAY_SET_DISABLE_CLICKABLE_REGIONS: function (e) {
          let { disable: t } = e;
          U.disableClickableRegions = t;
        },
        OVERLAY_SET_INVITE_MESSAGE: function (e) {
          let { message: t } = e,
            n = U.customInviteMessage !== t;
          return (U.customInviteMessage = t), n;
        },
        OVERLAY_SET_GAME_INVITE_NOTIFICATION: function (e) {
          let { shouldShow: t } = e,
            n = U.showGameInviteNotification !== t;
          return (U.showGameInviteNotification = t), n;
        },
        OVERLAY_SET_TEXT_WIDGET_OPACITY: function (e) {
          let { opacity: t } = e,
            n = U.textWidgetOpacity !== t;
          return (U.textWidgetOpacity = t), n;
        },
        OVERLAY_DISABLE_EXTERNAL_LINK_ALERT: function () {
          U.disableExternalLinkAlert = !0;
        },
        OVERLAY_INCOMPATIBLE_APP: function () {
          y = !0;
        },
        OVERLAY_SET_INPUT_LOCKED: function (e) {
          let { locked: t, pid: n } = e;
          t ? N.delete(n) : N.add(n), G(), w(), (D = !1);
        },
        OVERLAY_ACTIVATE_REGION: function (e) {
          let { region: t } = e;
          if (m !== (0, f.getPID)() || v.has(t)) return !1;
          v.add(t);
        },
        OVERLAY_DEACTIVATE_ALL_REGIONS: G,
        OVERLAY_SET_PREVIEW_IN_GAME_MODE: function (e) {
          D = e.isPreviewingInGame;
        },
        WINDOW_RESIZED: function () {
          if (__OVERLAY__) {
            let e = g.A.windowSize();
            (0, f.validResolution)(e) || (D = !1);
          }
        },
        OVERLAY_SET_ASSOCIATED_GAME: function (e) {
          N.delete(e.previousAssociatedGamePID);
        },
        OVERLAY_TRACKED_GAME_UPDATE: function (e) {
          __OVERLAY__ &&
            (null != e.trackedGame
              ? V.set(e.pid, e.trackedGame)
              : V.delete(e.pid));
        },
      });
    },
    776627(e, t, n) {
      n.d(t, { A: () => l });
      var i = n(627968);
      n(64700);
      var r = n(953727);
      function l(e) {
        let {
          width: t = 40,
          height: n = 40,
          color: l = "currentColor",
          ...a
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, r.A)(a),
          width: t,
          height: n,
          viewBox: "0 0 20 21",
          fill: l,
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, i.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9.2139 1.00082L0.271335 12.3825C-0.0698739 12.8168 0.00557122 13.4454 0.439846 13.7866C0.616031 13.9251 0.833599 14.0003 1.05766 14.0003H5.00022V20.0003C5.00022 20.5526 5.44794 21.0003 6.00022 21.0003H14.0002C14.5525 21.0003 15.0002 20.5526 15.0002 20.0003V14.0003H18.9428C19.495 14.0003 19.9428 13.5526 19.9428 13.0003C19.9428 12.7763 19.8675 12.5587 19.7291 12.3825L10.7865 1.00082C10.4453 0.566546 9.81669 0.4911 9.38241 0.832308C9.31972 0.881561 9.26315 0.938133 9.2139 1.00082Z",
            fill: l,
          }),
        });
      }
    },
    218394(e, t, n) {
      n.d(t, { j: () => s });
      var i = n(64700),
        r = n(17928),
        l = n(267102),
        a = n(531685);
      function s() {
        let { windowId: e } = i.useContext(l.Ay);
        return (0, r.bG)([a.A], () => a.A.isFocused(e), [e]);
      }
    },
    836480(e, t, n) {
      n.d(t, { Q: () => s });
      var i = n(627968);
      n(64700);
      var r = n(661531),
        l = n(996682),
        a = n(27989);
      let s = (e) => {
        let {
            size: t = "md",
            width: n,
            height: s,
            color: o = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...u
          } = e,
          c = (0, a.J)(t),
          h = c?.width ?? n,
          E = c?.height ?? s;
        return (0, i.jsxs)("svg", {
          ...(0, l.A)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: E,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
              className: d,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0ZM7.74 9.3A2 2 0 0 1 9.3 7.75l7.22-1.45a1 1 0 0 1 1.18 1.18l-1.45 7.22a2 2 0 0 1-1.57 1.57l-7.22 1.45a1 1 0 0 1-1.18-1.18L7.74 9.3Z",
              clipRule: "evenodd",
              className: d,
            }),
          ],
        });
      };
    },
    482188(e, t, n) {
      e.exports = {
        I6: "inputWrapper__0ed4f",
        hF: "input__0ed4f",
        in: "focused__0ed4f",
        z3: "error__0ed4f",
        r9: "disabled__0ed4f",
        LL: "editable__0ed4f",
        Xu: "inputError__0ed4f",
      };
    },
    824078(e, t, n) {
      n.r(
        (e.exports = {
          popover: "popover_d6f39b",
          popoverGradientWrapper: "popoverGradientWrapper_d6f39b",
          popoverContentWithGradient: "popoverContentWithGradient_d6f39b",
          "popover--video": "popover--video_d6f39b",
          footer: "footer_d6f39b",
          header: "header_d6f39b",
          actionBar: "actionBar_d6f39b",
          closeButton: "closeButton_d6f39b",
          headerWithBadge: "headerWithBadge_d6f39b header_d6f39b",
          title: "title_d6f39b",
          headerBody: "headerBody_d6f39b",
          badgeContainer: "badgeContainer_d6f39b",
          content: "content_d6f39b",
          graphic: "graphic_d6f39b",
          "graphic--md": "graphic--md_d6f39b",
          "graphic--sm": "graphic--sm_d6f39b",
          "graphic--lg": "graphic--lg_d6f39b",
          "graphic--video": "graphic--video_d6f39b",
          footerText: "footerText_d6f39b",
          footerLink: "footerLink_d6f39b",
          actions: "actions_d6f39b",
          multistepIndicator: "multistepIndicator_d6f39b",
          multistepActionLayout: "multistepActionLayout_d6f39b",
          caretIcon: "caretIcon_d6f39b",
          caretFill: "caretFill_d6f39b",
          caretGradient: "caretGradient_d6f39b",
          caretStroke: "caretStroke_d6f39b",
        }),
      );
    },
    683807(e, t, n) {
      e.exports = {
        nM: "row__5adc3",
        km: "havenWrapper__5adc3",
        VT: "haven__5adc3",
        rh: "noTransition__5adc3",
        Lw: "overlay__5adc3",
        FD: "out__5adc3",
        dH: "welcome__5adc3",
        cA: "environment__5adc3",
        Tp: "background__5adc3",
        Ki: "video__5adc3",
        ey: "noInteract__5adc3",
        vf: "bottomActions__5adc3",
        R: "hidden__5adc3",
        ps: "interactionOverlay__5adc3",
      };
    },
    518229(e, t, n) {
      n.r(
        (e.exports = {
          button: "button_a22cb0",
          buttonChildrenWrapper: "buttonChildrenWrapper_a22cb0",
          buttonChildren: "buttonChildren_a22cb0",
          icon: "icon_a22cb0",
          loading: "loading_a22cb0",
          spinnerWrapper: "spinnerWrapper_a22cb0",
          fadeIn: "fadeIn_a22cb0",
          "spinner-opacity-in": "spinner-opacity-in_a22cb0",
          fadeOut: "fadeOut_a22cb0",
          "spinner-opacity-out": "spinner-opacity-out_a22cb0",
          "spinner-transform-in": "spinner-transform-in_a22cb0",
          "spinner-transform-out": "spinner-transform-out_a22cb0",
          xs: "xs_a22cb0",
          hasText: "hasText_a22cb0",
          sm: "sm_a22cb0",
          md: "md_a22cb0",
          spinnerItem: "spinnerItem_a22cb0",
          spinner: "spinner_a22cb0",
          "spinner-sm": "spinner-sm_a22cb0",
          "spinner-xs": "spinner-xs_a22cb0",
          "spinner-md": "spinner-md_a22cb0",
          "spinner-lg": "spinner-lg_a22cb0",
          primary: "primary_a22cb0",
          secondary: "secondary_a22cb0",
          "icon-only": "icon-only_a22cb0",
          "color-mix": "color-mix_a22cb0",
          "input-accessory": "input-accessory_a22cb0 icon-only_a22cb0",
          "critical-primary": "critical-primary_a22cb0",
          "critical-secondary": "critical-secondary_a22cb0",
          active: "active_a22cb0",
          "overlay-primary": "overlay-primary_a22cb0",
          "overlay-secondary": "overlay-secondary_a22cb0",
          expressive: "expressive_a22cb0",
          expressiveRive: "expressiveRive_a22cb0",
          expressiveBackground: "expressiveBackground_a22cb0",
          expressiveFill: "expressiveFill_a22cb0",
          expressiveHoverContainer: "expressiveHoverContainer_a22cb0",
          expressiveWrapper: "expressiveWrapper_a22cb0",
          fullWidth: "fullWidth_a22cb0",
          rounded: "rounded_a22cb0",
        }),
      );
    },
    162545(e, t, n) {
      n.r(
        (e.exports = {
          dotIn: "dotIn__64e61",
          fillIn: "fillIn__64e61",
          dotOut: "dotOut__64e61",
          fillOut: "fillOut__64e61",
          radioIndicator: "radioIndicator__64e61",
          innerDotRadio: "innerDotRadio__64e61",
          outerRadioBase: "outerRadioBase__64e61",
          outerRadioFill: "outerRadioFill__64e61",
          radioGroupOption: "radioGroupOption__64e61",
          standaloneRadioIndicator: "standaloneRadioIndicator__64e61",
          animateIn: "animateIn__64e61",
          animateOut: "animateOut__64e61",
          group: "group__64e61",
          radioItemIcon: "radioItemIcon__64e61",
          label: "label__64e61",
          outerRadioBorderStroke: "outerRadioBorderStroke__64e61",
        }),
      );
    },
  },
]);
//# sourceMappingURL=96888.6aa203a9e1cff1b5.js.map
