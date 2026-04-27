"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["10868"],
  {
    368662(e, t, n) {
      n.r(t), n.d(t, { default: () => l, messagesLoader: () => r });
      let { createLoader: i } = n(919523),
        r = i({ "en-US": () => n.e("62972").then(n.bind(n, 387575)) }, "en-US"),
        { makeMessagesProxy: a } = n(919523),
        l = a(r);
    },
    100544(e, t, n) {
      n.d(t, {
        CT: () => o,
        W6: () => s,
        WM: () => c,
        XY: () => d,
        g6: () => l,
        j_: () => u,
      });
      var i,
        r,
        a,
        l =
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
        (((a = {}).NONE = "none"),
        (a.SLIDE_UP = "slide-up"),
        (a.SLIDE_IN = "slide-in"),
        (a.SLIDE_OUT = "slide-out"),
        (a.SLIDE_IN_OUT = "slide-in-out"),
        (a.SLIDE_IN_OUT_REVERSE = "slide-in-out-reverse"),
        (a.FADE = "fade"),
        a);
      Object.freeze({ START: { x: 0, y: 0 }, END: { x: 1, y: 0 } }),
        Object.freeze({ START: { x: 0, y: 0 }, END: { x: 0, y: 1 } });
    },
    49229(e, t, n) {
      n.d(t, { A: () => m });
      var i = n(636537),
        r = n(765178),
        a = n(228366),
        l = n(315982),
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
      function S(e, t, n) {
        let { status: i, body: r } = e,
          a = r && r.code;
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
            if (a === A.t02.EMAIL_VERIFICATION_REQUIRED) {
              I({
                title: g.intl.string(g.t.Gqf33E),
                body: g.intl.string(g.t.GHOBdx),
                confirmText: g.intl.string(g.t.HbTSE6),
                onConfirm: () => {
                  l.R();
                },
              });
              break;
            }
          default:
            if (a === A.t02.USER_QUARANTINED) (0, p.Z_)(), (0, o.default)();
            else if ((0, u.O)(i, a)) break;
            else if (a === A.t02.RELATIONSHIP_INVALID_NO_CONFIRMATION) break;
            else if (0 === t) {
              let e =
                null != n ? (0, h.vU)(a || 0, n) : g.intl.string(g.t.paDJBM);
              I({
                title: g.intl.string(g.t["6moJ8s"]),
                body: e,
                confirmText: g.intl.string(g.t.BddRzS),
              });
            }
        }
        throw e;
      }
      let T = {
          sendRequest(e) {
            let {
                discordTag: t,
                context: n,
                captchaPayload: r,
                errorUxConfig: a = 0,
              } = e,
              [l, s] = t.split("#");
            return i.Bo.post({
              url: A.Rsh.USER_RELATIONSHIPS(),
              body: { username: l, discriminator: parseInt(s), ...r },
              context: n,
              oldFormErrors: !0,
              rejectWithError: !1,
            }).catch((e) => {
              S(e, a, t);
            });
          },
          addRelationship(e, t) {
            let {
                userId: n,
                context: r,
                type: a,
                fromFriendSuggestion: l,
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
                type: a,
                from_friend_suggestion: l,
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
              .catch((e) => (S(e, d, E.Ay.getUserTag(u)), Promise.reject(e)));
          },
          acceptFriendRequest: (e) =>
            T.addRelationship(e, function () {
              r.O.announce(g.intl.string(g.t["3goNa5"]));
            }),
          cancelFriendRequest: (e, t) =>
            T.removeRelationship(e, t, function () {
              r.O.announce(g.intl.string(g.t.pLUaxR));
            }),
          removeFriend(e, t) {
            T.removeRelationship(e, t, function () {
              r.O.announce(g.intl.string(g.t.vGSLa2));
            });
          },
          blockUser: (e, t) =>
            T.addRelationship(
              { userId: e, context: t, type: A.eA$.BLOCKED },
              function () {
                r.O.announce(g.intl.string(g.t.mU0Vrp));
              },
            ),
          unblockUser: (e, t) =>
            T.removeRelationship(e, t, function () {
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
                a.h.dispatch({
                  type: "LOAD_RELATIONSHIPS_SUCCESS",
                  relationships: e.body,
                }),
              () => a.h.dispatch({ type: "LOAD_RELATIONSHIPS_FAILURE" }),
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
                a.h.dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
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
                a.h.dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
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
                  a.h.dispatch({
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
        m = T;
    },
    863610(e, t, n) {
      n.d(t, { U: () => p, n: () => A });
      var i = n(627968),
        r = n(64700),
        a = n(503698),
        l = n.n(a),
        s = n(487514),
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
              fill: a = "currentColor",
              spacing: l = 2.5,
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
                o = t + t * l * e;
              return (0, i.jsx)(
                s.animated.circle,
                {
                  cx: n ? n.to([0, 1], [p, o]) : o,
                  cy: t,
                  r: h.dotCycle
                    .to((e) => _(e - r))
                    .to([0, 0.4, 0.8, 1], [0.8 * t, 0.8 * t, t, t])
                    .to((e) => (d ? e : t)),
                  fill: a,
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
              hide: a = !1,
              themed: o = !1,
              className: E,
              ref: _,
            } = e,
            { focused: A } = (0, u.xb)();
          return (0, d.p)(
            a,
            { ...h, key: (e) => (e ? "true" : "false") },
            A ? "animate-always" : "animate-never",
          )((e, a, d) => {
            let { dotPosition: u } = e,
              { key: h } = d;
            return a
              ? null
              : (0, i.jsx)(
                  "svg",
                  {
                    ref: _,
                    x: n,
                    y: r,
                    width: 2 * t * 3 + (t / 2) * 2,
                    height: 2 * t,
                    className: l()(E, c.r, o ? c.S : null),
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
      n.d(t, { GH: () => g, Zi: () => _, c1: () => I, r6: () => S });
      var i = n(228366),
        r = n(386406),
        a = n(56562),
        l = n(328153),
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
          let o = l.Ay.getGameForPID(e),
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
              _ = l.Ay.getOverlayOptionsForPID(e),
              p = {
                ...a.gH,
                ..._,
                elevate: l.Ay.shouldElevateProcessForPID(e),
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
      function S() {
        return f()
          .then((e) =>
            null != e.findSteamProcess ? e.findSteamProcess() : null,
          )
          .catch(() => null);
      }
    },
    743445(e, t, n) {
      let i;
      n.d(t, { bK: () => b, jP: () => D });
      var r,
        a = n(735438),
        l = n.n(a),
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
        S = n(38405),
        T = n(292348),
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
            a =
              "server_error" === r || "client_error" === r
                ? `${e}:${r}:status_${i?.status ?? 0}`
                : `${e}:${r}`;
          super(a, { cause: n }),
            (this.name = "ResumableUploadError"),
            (this.phase = e),
            (this.kind = r),
            (this.messageShort = a);
        }
        static getErrorKind(e, t) {
          let n = t?.status ?? 0,
            i = n >= 500 && n < 600,
            r = R.has(n),
            a =
              e.message.toLowerCase().includes("network") ||
              e.message.toLowerCase().includes("terminated") ||
              e.message.toLowerCase().includes("offline") ||
              e.message.toLowerCase().includes("changed");
          return i
            ? "server_error"
            : r
              ? "client_error"
              : a
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
      var D =
        (((r = {}).NOT_STARTED = "NOT_STARTED"),
        (r.STARTED = "STARTED"),
        (r.UPLOADING = "UPLOADING"),
        (r.ERROR = "ERROR"),
        (r.COMPLETED = "COMPLETED"),
        (r.CANCELED = "CANCELED"),
        (r.REMOVED_FROM_MSG_DRAFT = "REMOVED_FROM_MSG_DRAFT"),
        r);
      class v {
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
        uploadAnalytics = new v();
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
          e.onRequestProgress = l().throttle(
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
          let { timeout: i, backoff: r, retries: a } = this.retryOpts(),
            s = {
              url: e,
              body: t,
              headers: { "Content-Type": n },
              signal: this._abortController.signal,
              onRequestProgress: l().throttle(
                this.createResumeAwareProgressFn(0),
                50,
              ),
              retries: 0,
              rejectWithError: !0,
              timeout: i,
            },
            o = 0;
          for (; this.uploadAttempts <= a && !this._aborted; ) {
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
              S.A.captureException(t)),
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
          let a = e.fileSize ?? (await (0, T.dm)(t)).size;
          if (
            ((this.postCompressionSize = a), (this.currentSize = a), null == a)
          )
            throw (
              (y.error(`Size missing from file data for ${this.id}`),
              Error("Size missing from file data"))
            );
          return (
            y.log(
              `Completed compression and conversion. Output size=${a} bytes; filename=${n}; uri=${t}; originalMimeType=${this.mimeType}; mimeType=${r} for ${this.id}`,
            ),
            (this.item = { ...this.item, uri: t, filename: n, mimeType: r }),
            (this.reactNativeFilePrepped = !0),
            this
          );
        }
        static async tryConvertToWebP(e, t, i) {
          let r,
            a,
            l = (0, h.i)({ location: "CloudUpload.maybeConvertToWebP" });
          if (!l.enabled)
            return (
              y.warn(`webp conversion skipped for ${i}: not enabled`), null
            );
          if (null == e)
            return y.warn(`webp conversion skipped for ${i}: no file`), null;
          if (null != l.maxFileSizeBytes && e.size > l.maxFileSizeBytes)
            return y.warn(`webp conversion skipped for ${i}: too big`), null;
          if (t()) return null;
          let s = performance.now(),
            o = { compressTimeMs: 0 };
          try {
            let l = await Promise.all([n.e("96904"), n.e("87096")]).then(
              n.bind(n, 989707),
            );
            if (
              ((a = l.ConversionFailureReason),
              (r = await l.maybeConvertToWebP(e)),
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
              let e = r.reason ?? a.UNKNOWN_ERROR;
              y.log(`webp conversion skipped for ${i}: ${e}`),
                (o.conversionFailureReason = e);
            }
          } catch (e) {
            y.warn(`webp conversion failed for ${i}:`, e),
              (o.conversionFailureReason = a?.UNKNOWN_ERROR ?? "unknown_error");
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
            (this.uploadAnalytics = new v()),
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
        a = n(734057),
        l = n(71393),
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
            VoiceStateStore: a,
          } = e,
          l = n.getChannel(t);
        if (null == l) return 3;
        if (!u.H5.includes(l.type)) return 7;
        if (!(0, d.A)()) return 6;
        if (null != l && !l.isPrivate()) {
          let e = l.getGuildId();
          if (null == e) return 4;
          let n = i.getGuild(e);
          if (n?.afkChannelId === l.id) return 5;
          let s = r.can(c.xBc.CONNECT, l);
          if (!r.can(c.xBc.USE_EMBEDDED_ACTIVITIES, l)) return 1;
          let o = a.getCurrentClientVoiceChannelId(l.getGuildId()) === t;
          if (l.isVocal() && !o && !s) return 2;
        }
        return 0;
      }
      function p(e) {
        return _({
          channelId: e,
          ChannelStore: a.A,
          GuildStore: l.A,
          PermissionStore: s.A,
          VoiceStateStore: o.A,
        });
      }
      function A(e) {
        return (0, r.bG)(
          [a.A, l.A, s.A, o.A],
          () =>
            _({
              channelId: e,
              ChannelStore: a.A,
              GuildStore: l.A,
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
        a = n(503698),
        l = n.n(a),
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
      function S(e) {
        return (0, i.jsx)("div", { className: l()(p.In, p.iq), children: e });
      }
      function T() {
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
              showUserPopout: a,
              guildId: d,
              size: u,
              dimEmptyUsers: c,
            } = this.props;
          if (null == e)
            if (!this.props.showDefaultAvatarsForNullUsers)
              return (0, i.jsx)("div", { className: l()(p.F2, { [p.F_]: c }) });
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
          return a && e !== f
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
              extraDetail: a,
            } = this.props,
            l = [],
            s = e.length === t ? e.length : t - 1,
            o = this.renderMoreUsers(s),
            d = 0;
          for (; d < s && d < e.length; ) {
            let t = null == o && null == a && d === e.length - 1,
              s = n(e[d], t, d);
            l.push(
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
          return null != a ? l.push(a) : null != o && l.push(o), l;
        }
        renderMoreUsers(e) {
          let {
              max: t,
              count: n,
              hideMoreUsers: a,
              renderMoreUsers: l,
              users: s,
              dimEmptyUsers: o,
            } = this.props,
            d = Math.min(e, s.length),
            u = o ? S : l;
          if (!a) {
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
              showUserPopout: a,
              useFallbackUserForPopout: s,
            } = this.props,
            { popoutUserId: o } = this.state;
          if (null == o)
            return (0, i.jsxs)("div", {
              className: l()(e, p.kL, T(t)),
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
            shouldShow: !0 === a && null != o,
            onRequestClose: () => this.setState({ popoutUserId: null }),
            clickTrap: !0,
            children: (n) =>
              (0, i.jsxs)("div", {
                className: l()(e, p.kL, T(t)),
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
      n.d(t, { Ht: () => j, Vc: () => q, as: () => $ }), n(321073);
      var i = n(132500),
        r = n(71931),
        a = n(17928),
        l = n(506774),
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
        S = n(565783),
        T = n(652215);
      let m = 15 * p.A.Millis.MINUTE,
        O = p.A.Millis.SECOND,
        C = "LAST_CLIENT_HEARTBEAT_SESSION",
        N = "user",
        y = new d.A("SessionHeartbeatScheduler"),
        R = null,
        L = null,
        D = 0,
        v = 0,
        b = { state: "uninitialized" },
        U = E.A.getState(),
        M = (0, g.R)(),
        P = c.default.getToken();
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
        _.default.track(T.HAw.CLIENT_HEARTBEAT, r),
          (v = performance.now()),
          (0, o.p)();
      }
      function V() {
        let e = [];
        return (
          null != P &&
            (M && e.push("foregrounded"),
            U === T.S7L.RTC_CONNECTED && e.push("rtc_connected")),
          { active: e.length > 0, ver: 27, reasons: e }
        );
      }
      function F() {
        return V().active;
      }
      function k() {
        F()
          ? (function () {
              if (null != R) return;
              let e = 0 === v ? 0 : m - (performance.now() - v);
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
          u.A.getSocket()?.handleActiveStateChange(V());
      }
      function H(e) {
        return null == e
          ? null
          : e.version !== I.Ir
            ? (y.warn(
                `Throwing away client session with invalid version: ${e.version}, expected ${I.Ir}`,
              ),
              null)
            : e;
      }
      async function x() {
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
        P !== e &&
          ((P = e),
          l.w.remove(C),
          (b = { state: "loaded", session: null }),
          w(),
          (v = 0)),
          k();
      }
      function Y() {
        let e = E.A.getState();
        U !== e && ((U = e), k());
      }
      function z(e) {
        let { focused: t } = e;
        M !== t && ((M = t), k());
      }
      function W(e) {
        let { state: t } = e,
          n = t === T.g6G.ACTIVE;
        M !== n && ((M = n), k());
      }
      function K() {
        (U = E.A.getState()), (M = (0, g.R)()), B();
      }
      function $() {
        A.A.addBreadcrumb({
          message: "Initializing SessionHeartbeatScheduler",
        }),
          E.A.addChangeListener(Y),
          c.default.addChangeListener(B),
          s.h.subscribe("WINDOW_FOCUS", z),
          s.h.subscribe("APP_STATE_UPDATE", W),
          s.h.subscribe("CONNECTION_OPEN", x),
          k(),
          null == L &&
            (L = {
              id: setInterval(() => {
                !(null != P && (0, S.$)()) ||
                  performance.now() - v <= m ||
                  _.default.track(T.HAw.CLIENT_HEARTBEAT_SKIPPED, {
                    client_heartbeat_version: 27,
                  });
              }, m),
              type: "interval",
            }),
          a.Ay.initialized.then(K);
      }
      async function j() {
        let e =
            !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
          t = null,
          n = "loaded" === b.state ? b.session?.uuid : null;
        try {
          t =
            "uninitialized" === b.state
              ? H(await l.w.getAfterRefresh(C))
              : b.session;
        } catch (e) {
          A.A.captureException(e);
        }
        let a = Date.now();
        if (F()) {
          (null == t || (0, I.aE)(t)) &&
            ((t = {
              uuid: (0, i.A)(),
              createdAtTimestamp: a,
              lastUsedTimestamp: a,
              version: I.Ir,
            }),
            (D = 0)),
            (t.lastUsedTimestamp = a);
          var s = t;
          let e = performance.now();
          if (!(e - D < O))
            try {
              l.w.set(C, s), (D = e);
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
        let e = "uninitialized" === b.state ? H(l.w.get(C)) : b.session;
        return null == e || (0, I.aE)(e) ? null : e;
      }
    },
    237774(e, t, n) {
      n.d(t, { k: () => c, p: () => h }), n(321073);
      var i = n(495544),
        r = n(763827),
        a = n(954571),
        l = n(935208),
        s = n(85277);
      let o = new Map(),
        d = -1;
      function u() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        if (e) {
          let e = l.default.extractTimestamp(i.default.getId());
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
        for (let [e, t] of o) a.default.track(e, (0, s.z)(e, t));
        o.clear();
      }
    },
    240525(e, t, n) {
      n.d(t, { Ay: () => D });
      var i = n(734057),
        r = n(498642),
        a = n(536802),
        l = n(309010),
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
      class g extends a.A {
        static displayName = "SaveableChannelsStore";
        static LATEST_SNAPSHOT_VERSION = 1;
        constructor() {
          super({
            CACHE_LOADED_LAZY_NO_CACHE: L,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            CHANNEL_DELETE: O,
            CHANNEL_UPDATES: m,
            CONNECTION_OPEN_SUPPLEMENTAL: S,
            GUILD_DELETE: y,
            LOGIN_SUCCESS: R,
            THREAD_DELETE: N,
            THREAD_UPDATE: C,
          });
        }
        initialize() {
          this.waitFor(i.A),
            this.waitFor(l.A),
            this.waitFor(r.A),
            this.syncWith([s.A], () => !0),
            this.syncWith([l.A], I);
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
            (null != t && (l.A.getChannelId() === e || p.has(e)))
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
        let e = l.A.getChannelId();
        null != e && g.recordChannel(e);
      }
      function S() {
        g.dropUnreachableChannels(), g.replaceLru((0, E.I)(p, 1250));
      }
      function T(e) {
        let t = e.id,
          n = (0, h.c)(e),
          i = l.A.getChannelId();
        n && t === i && g.recordChannel(t), n || g.deleteChannel(t);
      }
      function m(e) {
        for (let t of e.channels) T(t);
      }
      function O(e) {
        g.deleteChannel(e.channel.id);
      }
      function C(e) {
        T(e.channel);
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
      let D = new g();
    },
    453001(e, t, n) {
      n.d(t, { A: () => o });
      var i = n(17928),
        r = n(228366),
        a = n(626584),
        l = n(184989);
      new a.A("BasicChannelCacheStore");
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
          this.waitFor(l.A);
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
          let t = l.A.allGuildIds();
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
        a = n(626584),
        l = n(927813),
        s = n(723176);
      let o = new a.A("FileSystemStore"),
        d = 10 * l.A.Millis.MINUTE;
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
    166862(e, t, n) {
      n.d(t, { A: () => I });
      var i = n(17928),
        r = n(228366),
        a = n(155718),
        l = n(58149),
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
            a = E(n);
          if (a.optionNameToLastQuery.get(r) === i) return !1;
          a.optionNameToLastQuery.set(r, i);
          let l = a.optionNameToAutocompleteQueries.get(r)?.get(i);
          if (null != l)
            return (
              (a.lastErrored = !1), a.optionNameToLastResults.set(r, l), !0
            );
          let s = a.optionNameToNonce.get(r);
          if (
            (null != s && u.delete(s),
            u.set(t, { channelId: n, query: i, name: r }),
            h.set(t, new Date()),
            a.optionNameToNonce.set(r, t),
            a.lastErrored)
          )
            return (a.lastErrored = !1), !0;
        },
        APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: function (e) {
          let { choices: t, nonce: n } = e,
            i = u.get(n);
          if (null == i) return !1;
          u.delete(n);
          let r = E(i.channelId);
          null == r.optionNameToAutocompleteQueries.get(i.name) &&
            r.optionNameToAutocompleteQueries.set(i.name, new Map());
          let s = p && o.A.getActiveOption(i.channelId)?.type === a.n4.INTEGER,
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
            (0, l.zV)(
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
            (0, l.zV)(
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
    715314(e, t, n) {
      n.d(t, { A: () => c });
      var i = n(17928),
        r = n(228366);
      let a = {},
        l = null,
        s = null;
      function o(e, t) {
        null == t ? e in a && delete a[e] : null != e && (a[e] = t);
      }
      function d(e) {
        let { user: t } = e;
        s = t.id;
      }
      class u extends i.Ay.PersistedStore {
        static displayName = "LoginRequiredActionStore";
        static persistKey = "LoginRequiredActionStore";
        initialize(e) {
          null != e && (a = e);
        }
        requiredActions(e) {
          return a[e] ?? null;
        }
        requiredActionsIncludes(e, t) {
          let n = this.requiredActions(e);
          return null != n && t.reduce((e, t) => e || n.includes(t), !1);
        }
        wasLoginAttemptedInSession(e) {
          return l === e;
        }
        getState() {
          return a;
        }
      }
      let c = new u(r.h, {
        LOGIN_ATTEMPTED: function (e) {
          let { required_actions: t, user_id: n } = e;
          o((l = n), t);
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
      n.d(t, { Ay: () => r, X3: () => a, n2: () => l });
      var i = n(136722);
      function r(e) {
        for (let { permissionOverwrites_: t } of e)
          if (null != t)
            for (let e in t) {
              let n = t[e];
              (n.allow = i.iu(n.allow)), (n.deny = i.iu(n.deny));
            }
      }
      function a(e) {
        for (let [t, n] of e) r(n);
      }
      function l(e) {
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
        mn: () => S,
        qs: () => u,
      });
      var i,
        r,
        a,
        l,
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
        c = (((a = {}).NONE = "NONE"), (a.AUTO = "AUTO"), a),
        h =
          (((l = {})[(l.DESKTOP = 0)] = "DESKTOP"),
          (l[(l.MOBILE = 1)] = "MOBILE"),
          (l[(l.XBOX = 2)] = "XBOX"),
          (l[(l.PLAYSTATION = 3)] = "PLAYSTATION"),
          (l[(l.QUEST = 4)] = "QUEST"),
          l),
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
        S = { 0: 200, 1: 160, 2: 200 };
    },
    568598(e, t, n) {
      n.d(t, { Ay: () => L, KU: () => y, Qt: () => N, r4: () => R }), n(321073);
      var i,
        r = n(735438),
        a = n(713402),
        l = n(717558),
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
        S = n(90575),
        T = n(806931),
        m = n(652215),
        O = n(731854);
      let C = "__EMBEDDED_ACTIVITIES__";
      function N(e) {
        let { applicationId: t, instanceId: n } = e;
        return null != n ? `activity-${t}-${n}` : `activity-${t}`;
      }
      function y(e) {
        switch (e.type) {
          case T.lp.ACTIVITY:
            return `\x01${e.sortKey}`;
          case T.lp.HIDDEN_STREAM:
          case T.lp.STREAM:
            return `${e.userVideo ? "\x02" : "\x03"}${(0, S.A)(e.userNick, e.user)}\x03`;
          case T.lp.USER:
            let t = "\x05";
            return (
              e.voiceState?.selfVideo
                ? (t = "\x03")
                : e.voiceState?.selfStream && (t = "\x04"),
              `${t}${(0, S.A)(e.userNick, e.user)}`
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
        participantByIndex = new a.J((e) => {
          let t = [];
          return (
            e.type === T.lp.USER && e.speaking && t.push("SPEAKING"),
            e.type === T.lp.USER && e.voiceState?.selfVideo
              ? (t.push("VIDEO"),
                e.localVideoDisabled || e.isPoppedOut || t.push("FILTERED"))
              : (0, T.Ay)(e) &&
                (t.push("STREAM"),
                e.type === T.lp.HIDDEN_STREAM ||
                  null == e.streamId ||
                  e.isPoppedOut ||
                  t.push("FILTERED")),
            e.type === T.lp.ACTIVITY && t.push("ACTIVITY"),
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
              if (n.type === T.lp.USER) {
                let i = (0, l.R)({ userId: e, checkIsMuted: !0 }),
                  r = p.A.isSoundSharing(e),
                  a = this.participantByIndex.get(n.id);
                return a?.type === T.lp.USER &&
                  a.speaking === i &&
                  a.soundsharing === r
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
                i.type === T.lp.STREAM
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
            type: T.lp.ACTIVITY,
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
          let a = g.A.getVoiceStateForChannel(this.channelId, e),
            s = g.A.getVoicePlatformForChannel(this.channelId, e),
            h = E.A.getChannel(this.channelId),
            S = h?.getGuildId(),
            m =
              (this.call?.ringing?.includes(e) ||
                this.guildRingingUsers.has(e)) ??
              !1;
          (null != a || m) &&
            ((t = {
              type: T.lp.USER,
              ...f.A.getUserStreamData(e, S),
              user: r,
              id: r.id,
              voiceState: a,
              voicePlatform: s,
              speaking: (0, l.R)({ userId: e, checkIsMuted: !0 }),
              lastSpoke: this.lastSpoke[e] ?? 0,
              soundsharing: p.A.isSoundSharing(e),
              ringing: m,
              userNick: I.Ay.getName(S, this.channelId, r),
              userAvatarDecoration: (0, o.U)(r, S),
              localVideoDisabled: _.Ay.isLocalVideoDisabled(r.id),
              isPoppedOut: this.poppedOutParticipants.has(r.id),
            }),
            i.push(t));
          let C =
            u.A.getStreamForUser(e, S) ?? u.A.getActiveStreamForUser(e, S);
          if (null != C && C.channelId === this.channelId) {
            let t = (0, d._z)(C),
              l = this.getParticipant(t),
              s =
                C.ownerId === c.default.getId() &&
                u.A.isSelfStreamHidden(this.channelId),
              o =
                l?.type === T.lp.STREAM
                  ? {
                      maxResolution:
                        null != l.maxResolution
                          ? { ...l.maxResolution }
                          : void 0,
                      maxFrameRate: l.maxFrameRate,
                    }
                  : null;
            (n = {
              ...f.A.getUserStreamData(e, S, O.x.STREAM),
              ...o,
              type: s ? T.lp.HIDDEN_STREAM : T.lp.STREAM,
              id: t,
              userVideo: a?.selfVideo ?? !1,
              user: r,
              userNick: I.Ay.getName(S, this.channelId, r),
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
        a = n(721592),
        l = n(164891),
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
          a = (0, i.bG)([s.default], () => s.default.getId() === e.id),
          l = (0, i.bG)([_.A], () => _.A.isFriend(e.id)),
          o = (0, i.bG)(
            [E.A],
            () => E.A.getStatus(e.id) === A.clD.DND && r?.guild_id != null,
          ),
          u = r?.type,
          c = null != u && A.kvI.CALLABLE.has(u),
          h = I(e, t, r);
        return (
          l && !o && !a && !e.bot && !e.system && !e.isProvisional && (h || c)
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
          let { enabled: t } = l.A.getCurrentConfig({
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
          { needSubscriptionToAccess: d } = (0, a.A)(n?.id),
          { enabled: E } = l.A.useExperiment({
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
        a = n(192308),
        l = n(477782),
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
        return (0, i.jsx)(l.Dr, {
          id: "report-stream-problem",
          color: "danger",
          label: h.intl.string(h.t.sdnCxV),
          action: () => {
            E?.(),
              null != e &&
                (0, a.openModalLazy)(async () => {
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
        a = n(763827),
        l = n(954571),
        s = n(806931),
        o = n(652215);
      function d(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          { targetUserId: i, tileType: r, entrypoint: a } = n;
        return (n) =>
          u({
            menuItemProps: n,
            menuName: e,
            location: t,
            entrypoint: a ?? s.GK.CONTEXT_MENU,
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
          h = a.A.getChannelId(),
          E = a.A.getGuildId(),
          _ = r.A.getChannel(h)?.type,
          p = i.default.getId();
        l.default.track(o.HAw.CALL_MENU_ITEM_INTERACTED, {
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
        a = n(17928),
        l = n(775602),
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
          } = (0, a.cf)([l.A, s.A, E], () => ({
            shouldReduceMotion: l.A.useReducedMotion,
            useForcedColors: l.A.useForcedColors,
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
            let a = p ? "Highlight" : "var(--status-speaking)";
            e.boxShadow = `0 0 0 ${t}px ${a}, inset 0 0 0 ${n}px ${a}, inset 0 0 0 ${r}px var(--background-base-lower)`;
          }
          return A && (e.transition = "box-shadow 50ms ease-out"), e;
        }, [t, A, _, p, i, d, u, c, h]);
      }
    },
    883600(e, t, n) {
      n.d(t, { A: () => T });
      var i = n(17928),
        r = n(506774),
        a = n(228366),
        l = n(773669),
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
      class S extends i.Ay.Store {
        static displayName = "ChangelogStore";
        initialize() {
          this.waitFor(l.default, o.A),
            this.syncWith([l.default], () => !0),
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
      let T = new S(a.h, {
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
        a = n(836039),
        l = n(98318),
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
          !!(0, l.U)(n) &&
          !!(
            i ||
            (0, l.X)(n ?? void 0) ||
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
      function S(e, t) {
        if (
          !t.features.has(A.GuildFeatures.CREATOR_MONETIZABLE) &&
          !t.features.has(A.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)
        )
          return !1;
        let n = o.A.isViewingServerShop(t.id);
        for (let i of Object.keys(e.permissionOverwrites)) {
          let r = E.A.getRole(t.id, i);
          if (!I({ guildId: t.id, role: r, isPreviewingRoles: n })) continue;
          let a = e.permissionOverwrites[i];
          if ((0, s.Uj)(e, a)) return !0;
        }
        let i = E.A.getEveryoneRole(t),
          r = !(0, u._m)(i, A.xBc.VIEW_CHANNEL),
          a = (0, s.AN)(e, e.permissionOverwrites[t.id]);
        if (r && !a) {
          for (let e of E.A.getSortedRoles(t.id))
            if (
              I({ guildId: t.id, role: e, isPreviewingRoles: n }) &&
              (0, s.iR)(e)
            )
              return !0;
        }
        return !1;
      }
      function T(e, t) {
        let n = f[e];
        if (null == n) return !1;
        let i = c.A.getChannel(t);
        if (null == i) return !1;
        let r = _.A.getGuild(i.getGuildId());
        if (null == r) return !1;
        let a = n.has(t),
          l = S(i, r);
        return a !== l && (l ? n.add(t) : n.delete(t), !0);
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
        return null != t.guild_id && T(t.guild_id, t.id);
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
                  S(r, t) && n.add(r.id);
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
            null != e.guild_id && T(e.guild_id, e.id) && (n = !0);
          return n;
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: function (e) {
          let { guildId: t, restrictions: n } = e;
          (0, a.Y5)(n) ? g.add(t) : g.delete(t);
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
        return { textValue: e, richValue: l(e) };
      }
      n.d(t, { N3: () => i, QR: () => s, ur: () => r, x7: () => l });
      let a = Object.freeze([
        Object.freeze({
          type: "line",
          children: Object.freeze([Object.freeze({ text: "" })]),
        }),
      ]);
      function l(e) {
        return "" !== e
          ? e
              .split("\n")
              .map((e) => ({ type: "line", children: [{ text: e }] }))
          : a;
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
    696016(e, t, n) {
      n.d(t, {
        Fv: () => h,
        GU: () => L,
        LX: () => u,
        Ot: () => _,
        P4: () => E,
        T2: () => P,
        U_: () => O,
        V0: () => I,
        VP: () => v,
        Vi: () => A,
        YM: () => U,
        cM: () => D,
        dV: () => b,
        gC: () => V,
        iJ: () => M,
        kd: () => g,
        l_: () => S,
        mk: () => C,
        nm: () => N,
        nx: () => f,
        on: () => c,
        qh: () => G,
        s3: () => R,
        sc: () => T,
        sz: () => p,
        vZ: () => y,
        wN: () => w,
        zj: () => m,
      });
      var i,
        r,
        a,
        l,
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
          (((a = {}).DECOUPLED = "decoupled"),
          (a.VIEWER = "viewer"),
          (a.STREAMER = "streamer"),
          (a.VOICE = "voice"),
          a),
        E =
          (((l = {})[(l.Error = 0)] = "Error"),
          (l[(l.Disabled = 1)] = "Disabled"),
          (l[(l.Enabled = 2)] = "Enabled"),
          l);
      let _ = "alt+c",
        p = "f12",
        A = 6 * d.A.Millis.SECOND,
        f = new o.A("Clips"),
        g = 5,
        I = 2,
        S =
          /(NVIDIA GeForce GTX (98|10|16).*|Radeon RX 5(500|600|).*|Radeon RX5.*)/,
        T =
          /(NVIDIA GeForce (RTX (20|30|40|50).*))|(.*Radeon RX (57|58|59|6|7|9).*)/,
        m = 0.1,
        O = 0,
        C = 200,
        N = "clips-gallery",
        y = 640,
        R = 360,
        L = 100,
        D = (e) => `Clip - ${new Date(e).toLocaleString()}`,
        v = 15,
        b = 3e4,
        U = 30,
        M = 10;
      d.A.Millis.DAY;
      let P = 20,
        w = 1,
        G = 50;
      var V =
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
        a,
        l,
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
          (((a = {}).CLIP = "clip"),
          (a.SCREENSHOT = "screenshot"),
          (a.VOICE_CLIP = "voice_clip"),
          a),
        u =
          (((l = {}).KILL = "kill"),
          (l.MULTIKILL = "multikill"),
          (l.DEATH = "death"),
          (l.ASSIST = "assist"),
          (l.ITEM = "item"),
          (l.VICTORY = "victory"),
          (l.DEFEAT = "defeat"),
          (l.LEVEL_UP = "level_up"),
          (l.TREASURE = "treasure"),
          (l.OBJECTIVE_KILL = "objective_kill"),
          l);
    },
    439818(e, t, n) {
      n.d(t, { A: () => r });
      let i = /[^a-zA-Z0-9-_.]/g,
        r = function (e) {
          return e.trim().replaceAll(" ", "_").replaceAll(i, "");
        };
    },
    608960(e, t, n) {
      n.d(t, { A: () => u });
      var i = n(810531),
        r = n(548965),
        a = n(137903),
        l = n(770335);
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
            type: l.i.GUILD,
          };
        return n;
      }
      class o extends a.yW {
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
        a = n(736056),
        l = n(710195),
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
          this.waitFor(a.A, l.A);
        }
      }
      let h = new c();
    },
    457699(e, t, n) {
      n.d(t, { A: () => c });
      var i = n(17928),
        r = n(228366),
        a = n(320095),
        l = n(390248);
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
                s[o(e)] = (0, a.rh)(e);
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
            ((s[n] = (0, a.IU)(i, {
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
          null != r && (s[i] = (0, l.Td)(r));
        },
      });
    },
    800828(e, t, n) {
      n.d(t, { A: () => S }), n(321073);
      var i = n(17928),
        r = n(713402),
        a = n(228366),
        l = n(994500),
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
          let { type: r, id: a } = i;
          if (r === s.eA$.FRIEND) n += 1;
          else if (r === s.eA$.PENDING_OUTGOING) t += 1;
          else if (r === s.eA$.PENDING_INCOMING) {
            if (l.A.isSpam(a) || l.A.isIgnored(a)) return;
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
          this.waitFor(l.A);
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
      let S = new I(a.h, {
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
        a = n(366853);
      let l = [];
      function s() {
        return null != r.A.getType();
      }
      function o() {
        s() || (l.forEach((e) => d(e)), (l = []));
      }
      function d(e) {
        setImmediate(() => e());
      }
      function u(e) {
        a.A.isConnectedOrOverlay() && !s() ? d(e) : l.push(e);
      }
      i.h.subscribe("CONNECTION_OPEN", o),
        i.h.subscribe("CONNECTION_RESUMED", o),
        i.h.subscribe("NUF_COMPLETE", o);
    },
    8917(e, t, n) {
      let i;
      n.d(t, { A: () => v }),
        n(393431),
        n(532706),
        n(42231),
        n(232424),
        n(949626),
        n(767709),
        n(65162);
      var r = n(284009),
        a = n.n(r),
        l = n(735438),
        s = n.n(l),
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
        S = n(325278),
        T = n(652215),
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
        D(
          e,
          (0, I._z)({
            streamType: null != t ? S.U4.GUILD : S.U4.CALL,
            guildId: t,
            channelId: n,
            ownerId: i,
          }),
        );
      }, 500);
      async function D(e, t) {
        if (
          i !== e ||
          ((0, f.isWeb)() && _.uh.getSetting()) ||
          p.A.getIsActiveStreamPreviewDisabled(t)
        )
          return;
        let n = () => D(e, t);
        if (!C)
          try {
            var r, l;
            let n, s, c, E, _, p, I, S;
            (r = await ((l = e),
            (S = 0),
            (f.isPlatformEmbedded
              ? function (e, t) {
                  let n = (0, d.lE)();
                  return new Promise((r, a) => {
                    n.getNextVideoOutputFrame(e).then(
                      (e) => {
                        try {
                          null != e && t(e) && r(e);
                        } catch (e) {
                          a(e);
                        }
                      },
                      (t) => {
                        i === e && a(t);
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
                    a = document.createElement("video"),
                    l = document.createElement("canvas");
                  (a.width = l.width = i ?? 512),
                    (a.height = l.height = r ?? 288),
                    (a.srcObject = n),
                    a.play();
                  let s = l.getContext("2d");
                  return new Promise((e, n) => {
                    a.ontimeupdate = () => {
                      s?.drawImage(a, 0, 0, l.width, l.height);
                      let i = s?.getImageData(0, 0, l.width, l.height);
                      try {
                        null != i && t(i) && e(i);
                      } catch (e) {
                        n(e);
                      }
                    };
                  }).finally(() => {
                    (a.ontimeupdate = null),
                      a.removeAttribute("srcObject"),
                      a.load();
                  });
                })(l, (e) => {
              if (new Uint32Array(e.data.buffer).some((e) => 0 !== e))
                return !0;
              if (++S > 60)
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
              a()(null != e, "Auth token was null while sending screenshot."),
                await g.Ay.makeChunkedRequest(
                  T.Rsh.STREAM_PREVIEW(t),
                  { thumbnail: m },
                  { method: "POST", token: e },
                );
            } else
              await o.Bo.post({
                url: T.Rsh.STREAM_PREVIEW(t),
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
      let v = {
        init() {
          h.h.subscribe("CONNECTION_OPEN", R),
            h.h.subscribe("LOGOUT", R),
            h.h.subscribe("STREAM_DELETE", R),
            h.h.subscribe("RTC_CONNECTION_VIDEO", (e) => {
              let {
                guildId: t,
                channelId: n,
                userId: r,
                streamId: a,
                context: l,
              } = e;
              null == a ||
                l !== m.x.STREAM ||
                r !== A.default.getId() ||
                __OVERLAY__ ||
                (R(), (i = a), L(a, t, n, r));
            }),
            h.h.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", (e) => {
              let { videoState: t } = e;
              C = t === T.uPF.PAUSED;
            });
        },
      };
    },
    125318(e, t, n) {
      n.d(t, { A: () => O });
      var i,
        r = n(228366),
        a = n(827343),
        l = n(401843),
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
        let a = r.find((e) => null != e.application.windowHandle) ?? r[0];
        return null == a ? null : a.application;
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
        S = n(652215),
        T = n(731854);
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
                  sourceId: a,
                  audioSourceId: l,
                  sound: o,
                } = e,
                d = f.default.getId(),
                u = (0, g._z)({
                  streamType: t,
                  guildId: n,
                  channelId: i,
                  ownerId: d,
                });
              (null == r) != (null == a)
                ? (null != r && this._onStreamApplication(u, r, o ?? !0),
                  null != a && this._onStreamDirectSource(u, a, l, o))
                : new s.A("ApplicationSwitchingManager").warn(
                    `invalid start_stream: both application + display modes were specified (pid: ${r}, source-id: ${a})`,
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
              n === T.x.STREAM && this._onCapturePaused(t === S.uPF.PAUSED);
            }),
            r.h.subscribe("MEDIA_ENGINE_SET_GO_LIVE_SOURCE", (e) => {
              let { settings: t, errorCode: n } = e;
              t?.context === T.x.STREAM &&
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
                (null != t && (0, l.TZ)(t, !1),
                e.sourceId.startsWith("camera") && null != e.audioSourceId)
              ) {
                let t = e.sourceId.split(":")[1];
                a.A.setGoLiveSource({
                  cameraSettings: {
                    videoDeviceGuid: t,
                    audioDeviceGuid: e.audioSourceId,
                  },
                  qualityOptions: {
                    preset: n.preset,
                    resolution: n.resolution,
                    frameRate: n.fps,
                  },
                  context: T.x.STREAM,
                });
              } else
                a.A.setGoLiveSource({
                  desktopSettings: {
                    sourceId: e.sourceId,
                    sound: e.sound ?? !0,
                  },
                  qualityOptions: {
                    preset: n.preset,
                    resolution: n.resolution,
                    frameRate: n.fps,
                  },
                  context: T.x.STREAM,
                });
              break;
            case E.PAUSE:
              null != t && (0, l.TZ)(t, !0);
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
          null != t && (0, l.TZ)(t, e);
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
        a = n(260509),
        l = n(34457),
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
          (f.set(e, (0, a.bM)(n, t)),
          n.features.has(h.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED))
        ) {
          let a = s.Ay.getMember(e, t.id),
            d = new Set(a?.roles ?? []);
          for (let t of o.A.getSortedRoles(n.id))
            (0, c.U)(t) &&
              (i.add(t.id),
              (0, c.X)(t) && (r.add(t.id), d.has(t.id) && E.add(t.id))),
              d.has(t.id) && (0, l._m)(t, h.xBc.ADMINISTRATOR) && f.set(e, !0);
        }
        return _.set(e, i), A.set(e, E), p.set(e, r), !0;
      }
      function S() {
        _.clear(), A.clear(), p.clear(), f.clear(), (g = null);
      }
      function T(e) {
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
        CONNECTION_OPEN: S,
        LOGOUT: S,
        GUILD_CREATE: T,
        GUILD_DELETE: function (e) {
          let {
            guild: { id: t },
          } = e;
          if (g?.has(t) !== !0) return !1;
          let n = new Set(g);
          n.delete(t), (g = n);
        },
        GUILD_UPDATE: T,
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
        a = n(686956),
        l = n(652215),
        s = n(231723);
      function o(e) {
        let { eventId: t, recurrenceId: a } = e;
        (0, r.openModalLazy)(async () => {
          let { default: e } = await Promise.all([
            n.e("24199"),
            n.e("57036"),
            n.e("88394"),
            n.e("80527"),
            n.e("58710"),
            n.e("31825"),
            n.e("23353"),
            n.e("7175"),
            n.e("37249"),
            n.e("14138"),
            n.e("8971"),
            n.e("85071"),
            n.e("88017"),
            n.e("1040"),
            n.e("64615"),
            n.e("17239"),
            n.e("66950"),
            n.e("58164"),
            n.e("38229"),
            n.e("20861"),
            n.e("36682"),
            n.e("45723"),
            n.e("56871"),
            n.e("69601"),
            n.e("47511"),
            n.e("51444"),
            n.e("62290"),
            n.e("93312"),
            n.e("80973"),
            n.e("82731"),
            n.e("22021"),
            n.e("37402"),
            n.e("11707"),
          ]).then(n.bind(n, 640132));
          return (n) =>
            (0, i.jsx)(e, {
              guildScheduledEventId: t,
              initialRecurrenceId: a,
              ...n,
            });
        });
      }
      async function d(e, t) {
        let { guild_id: n } = e;
        await a.A.transitionToGuildSync(n, t), o({ eventId: e.id, event: e });
      }
      function u(e, t) {
        (0, r.openModalLazy)(
          async () => {
            let { default: t } = await n.e("34526").then(n.bind(n, 521549));
            return (n) => (0, i.jsx)(t, { ...n, channel: e });
          },
          { contextKey: t === l.BRT.POPOUT ? s.KX : s.SY },
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
    292572(e, t, n) {
      n.d(t, { A: () => d });
      var i = n(636537),
        r = n(228366),
        a = n(954571),
        l = n(177773),
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
                    a.default.track(s.HAw.GUILD_TEMPLATE_RESOLVED, {
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
                    { guildTemplate: (0, l.A)(n), code: t }
                  );
                },
                () => (
                  a.default.track(s.HAw.GUILD_TEMPLATE_RESOLVED, {
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
          updateGuildTemplate: (e, t, n, a) =>
            i.Bo.patch({
              url: s.Rsh.GUILD_TEMPLATE(e, t),
              body: { name: n, description: a },
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
        a = n(985018);
      function l(e) {
        return { userId: e.user_id, position: e.position, avatar: e.avatar };
      }
      function s(e) {
        return { id: e.id, claimedBy: e.claimed_by };
      }
      function o(e) {
        return {
          roomId: e.room_id,
          participants: e.participants.map(l),
          seats: e.seats.map(s),
        };
      }
      function d(e) {
        switch (e) {
          case i.wS.RADIO:
            return a.intl.string(r.default.AjiGKB);
          case i.wS.ENVIRONMENT:
            return a.intl.string(r.default.YEYIbI);
          case i.wS.CAMPFIRE:
            return a.intl.string(r.default["Vk9+Ez"]);
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
        a,
        l,
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
          (((a = {}).NONE = "none"),
          (a.GOLDFISH = "goldfish"),
          (a.GOLDFISH_BLUE = "goldfishBlue"),
          (a.GOLDFISH_PINK = "goldfishPink"),
          (a.POPCORN = "popcorn"),
          (a.POPCORN_PURPLE = "popcornPurple"),
          (a.POPCORN_BLUE = "popcornBlue"),
          (a.IMP = "imp"),
          (a.IMP_BLUE = "impBlue"),
          (a.IMP_PINK = "impPink"),
          a);
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
        (((l = {}).RADIO = "radio"),
        (l.ENVIRONMENT = "environment"),
        (l.CAMPFIRE = "campfire"),
        l);
    },
    962392(e, t, n) {
      n.d(t, { O: () => a, h: () => l });
      var i = n(600975),
        r = n(688151);
      let a = (0, i.C)({
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
      function l(e, t) {
        return a.useExperiment(
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
        pX: () => S,
        pd: () => _,
      }),
        n(321073);
      var i = n(284009),
        r = n.n(i),
        a = n(306173),
        l = n(626584),
        s = n(723426);
      let o = new l.A("libdiscoreExperiments"),
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
              ((0, a.xd)()
                ? (this.cachedConfig = (0, a.Ih)().getConfig(this.id))
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
      function S() {
        (0, a.xd)() &&
          (o.info("Clearing libdiscore experiment cache and disabling sync"),
          (g = !0),
          (0, a.Ih)().clearCache());
      }
    },
    917878(e, t, n) {
      n.d(t, { A: () => l, a: () => i }), n(134528), n(947204);
      let i = "NativeAppStartup";
      function r(e, t, n, i, r) {
        return `${e}:${t}:${n}:${i}:${r}`;
      }
      class a {
        channelsFetchStarted = new Set();
        channelsFetchedWithLocalMessages = new Set();
        channelsFetchedNetwork = new Set();
        fetchLogs = new Map();
        recordChannelFetchStart(e, t, n, i, a) {
          this.channelsFetchStarted.add(e),
            this.fetchLogs.set(r(e, t, n ?? null, i ?? null, a), {
              channelId: e,
              before: n ?? null,
              after: i ?? null,
              limit: a,
              startTime: Date.now(),
            });
        }
        recordChannelFetchedLocal(e, t, n, i, a, l) {
          this.channelsFetchedWithLocalMessages.add(e);
          let s = this.fetchLogs.get(r(e, t, n ?? null, i ?? null, a));
          null != s &&
            (s.localMessageDetails = {
              loadTime: Date.now(),
              count: l.length,
              lastMessageId: l.at(-1)?.id,
            });
        }
        recordChannelFetchedNetwork(e, t, n, i, a, l) {
          this.channelsFetchedNetwork.add(e);
          let s = this.fetchLogs.get(r(e, t, n ?? null, i ?? null, a));
          null != s &&
            (s.networkMessageDetails = {
              loadTime: Date.now(),
              count: l.length,
              lastMessageId: l.at(-1)?.id,
            });
        }
      }
      let l = new a();
    },
    205297(e, t, n) {
      n.d(t, { A: () => I, S: () => g });
      var i = n(627968),
        r = n(64700),
        a = n(503698),
        l = n.n(a),
        s = n(735438),
        o = n(761929),
        d = n(483517),
        u = n(699426),
        c = n(652215),
        h = n(806931),
        E = n(423562);
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
            onResizeEnd: a,
            resizeConfig: s,
            position: d,
          } = e,
          u = (0, o.A)({
            minDimension: s.minWidth,
            maxDimension: s.maxWidth + 20,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: a,
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
          className: l()(E.Di, _[d]),
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
              edgeOffsetRight: a,
              maxX: l,
              maxY: s,
              dockedRect: o,
              getDockedRectPositionY: d,
            } = this.props,
            u = Math.round(n),
            h = Math.round(s - r - this._boundHeight),
            E = Math.round(i),
            _ = Math.round(l - a - this._boundWidth);
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
          let a = A(i - (t + n), r);
          this.getWidth() > a && ((this._width = a), e?.(a));
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
            a = this.calculateDecayingPosition(
              e,
              t,
              this._velocityX,
              this._velocityY,
            ),
            l = !0,
            s = !0;
          if (
            (a.x > i / 2 && (s = !1),
            a.y > r / 2 && (l = !1),
            (n =
              l && s
                ? c.CUs.TOP_LEFT
                : l && !s
                  ? c.CUs.TOP_RIGHT
                  : !l && s
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
              roundCorners: a,
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
              className: l()(E.GE, s, { [E.R]: r, [E.Vq]: a }),
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
            pipWidth: a,
            maxX: s,
            maxY: o,
            onWindowMove: d,
            onWindowResize: h,
            dockedRect: _,
            pictureInPictureComponents: p,
            appContext: A,
            roundCorners: f,
            resizeConfig: I,
            className: S,
            getDockedRectPositionY: T,
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
                    return (0, i.jsx)(n, { width: a, ...e.props }, e.id);
                  }),
            [n, t, a, p],
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
                className: l()(E._I, { [E.cB]: m }, S),
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
                  width: a,
                  dockedRect: _,
                  getDockedRectPositionY: T,
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
        a = n(685408),
        l = n(652215),
        s = n(985018);
      function o(e) {
        let { guildId: t, code: n } = e;
        if (void 0 === n) return !1;
        if (n === l.t02.ENTITY_TOO_LARGE) {
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
        if (n === l.t02.TOO_MANY_ATTACHMENTS)
          return (
            (0, i.A)({
              title: s.intl.string(s.t.wOr6hB),
              subtitle: s.intl.formatToPlainString(s.t["qqyp/e"], {
                limit: l.XgB,
              }),
            }),
            !0
          );
        if (n === l.t02.ENTITY_EMPTY)
          return (
            (0, i.A)({
              title: s.intl.string(s.t.B3vFdU),
              subtitle: s.intl.string(s.t["9ZpT2C"]),
            }),
            !0
          );
        if (n === l.t02.INVALID_FILE_ASSET)
          return (
            (0, i.A)({
              title: s.intl.string(s.t.B3vFdU),
              subtitle: s.intl.string(s.t.zMEjJg),
            }),
            !0
          );
        let o = (0, a.c)(n);
        return (
          null != o && ((0, i.A)({ title: o.title, subtitle: o.body }), !0)
        );
      }
    },
    833551(e, t, n) {
      n.r(t), n.d(t, { default: () => eh }), n(321073);
      var i = n(17928),
        r = n(499979),
        a = n(228366),
        l = n(684013),
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
        S = n(181435),
        T = n(318739),
        m = n(515183),
        O = n(592598),
        C = n(682763),
        N = n(680243),
        y = n(392164);
      let R = new d.A("OverlayRenderStore"),
        L = I.V6.UNSET,
        D = !1,
        v = !1,
        b = (0, p.isWindows)() && p.isPlatformEmbedded && !__OVERLAY__,
        U = null,
        M = {},
        P = {},
        w = null,
        G = null,
        V = new Set([
          s.aI.FULLSCREEN,
          s.aI.BORDERLESS_FULLSCREEN,
          s.aI.UNKNOWN,
          s.aI.MINIMIZED,
        ]),
        F = new Set([s.aI.MINIMIZED, s.aI.UNKNOWN]),
        k = !1,
        H = new o.A(1e4);
      function x(e, t, n) {
        let i =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : S.QJ.Info;
        (0, C.aS)({
          pid: e,
          name: t,
          type: S.ON.Renderer,
          data: n,
          logType: i,
        });
      }
      function B() {
        return N.A.isOverlayEnabled;
      }
      function Y(e) {
        return M[e] ?? null;
      }
      function z() {
        return Object.keys(M).map(Number);
      }
      function W(e, t, n) {
        let i = M[e]?.state;
        (M = { ...M, [e]: { ...t } }),
          i !== t.state && l.A.trackOverlayStateChanged(e, i, t.state, n);
      }
      function K(e) {
        return e in M;
      }
      function $(e, t, n, i) {
        let r = Y(e);
        if (null == r)
          return void R.error(
            `Tried to set property ${t} to ${n} for untracked pid ${e}`,
          );
        let a = { ...r };
        (a[t] = n), W(e, a, i);
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
        $(e, "timer", i, "timeOverlayEvent"), ec.emitChange();
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
        let { enabledOOP: r, enabledLegacy: a, ...l } = (0, c.hw)(n),
          s = _.A.findGame(n),
          o = (await (0, m.E1)(e, 0)) ?? n.fullscreenType,
          d = Date.now();
        R.verbose(`Tracking game ${e} for overlay`);
        let u = {
          ...l,
          pid: e,
          oopEnabled: r,
          legacyEnabled: a,
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
          W(e, u, "initializeTrackedGame"),
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
        if (!(B() || D))
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
        if (!B() && D) {
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
          return D
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
          a =
            (0, m.zi)(n) || O.A.isLimitedInteractionOverrideEnabled(n.id ?? r);
        switch (t) {
          case s.aI.MINIMIZED:
          case s.aI.WINDOWED:
          case s.aI.MAXIMIZED:
          case s.aI.BORDERLESS_FULLSCREEN: {
            let e = i.enabledOOP && B(),
              r = i.enabledLegacy && D,
              l = a ? I.Ue.OutOfProcessLimitedInteraction : I.Ue.OutOfProcess;
            return {
              ...i,
              overlayMethod: e
                ? l
                : r
                  ? (0, m.O4)(n).overlayMethod
                  : I.Ue.Disabled,
              reason: `Normal case - overlayOOPEnabled: ${e}, overlayLegacyEnabled: ${r}, runningGameFullscreenType: ${t}`,
            };
          }
          case s.aI.FULLSCREEN: {
            let e = (0, m.O4)(n),
              t = e.enabledLegacy && D,
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
      async function X(e) {
        if (K(e)) {
          R.verbose(
            `Skipping track for pid ${e} - already tracked. Determining overlay method.`,
          ),
            await er(new Set([e]));
          return;
        }
        if (!(B() || D))
          return void R.verbose(
            `Skipping track for pid ${e} - overlay is disabled`,
          );
        let t = await q(e);
        if (null == t) return void R.error(`Failed to track game ${e}`);
        x(e, "game_tracking_starting", {
          game_name: t.gameName,
          fullscreen_type: t.fullscreenType,
        }),
          $(
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
                let t = z();
                t.length > 0 && (e(m.T$), await er(new Set(t)));
              }, t)));
          })(m.T$),
          (G = n.overlayMethod),
          ec.emitChange(),
          await l.A.updateTrackedGame(e, t);
      }
      async function Q(e) {
        if (!K(e))
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
          null != M[e] &&
            ((P[e] = { ...M[e], state: I.AR.GAME_UNTRACKED }), delete M[e]),
          ec.emitChange(),
          await l.A.updateTrackedGame(e, null);
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
        if (V.has(n)) {
          let t = await (0, m.E1)(e, 2e3);
          R.verbose(`Resolved fullscreen type for pid ${e}: ${t}`),
            null != t && (n = t);
        }
        return n;
      }
      async function ee(e) {
        let t = await J(e);
        if (F.has(t)) {
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
          a =
            r === I.Ue.Disabled
              ? i
                ? I.AR.OVERLAY_TEARING_DOWN
                : I.AR.OVERLAY_DISABLED
              : I.AR.WAITING_FOR_MODULE_TRACKING,
          s = `${n}: ${t.reason}`;
        $(e, "state", a, s),
          $(e, "overlayMethod", r, s),
          $(e, "source", t.source, s),
          $(e, "oopEnabled", t.enabledOOP, s),
          $(e, "legacyEnabled", t.enabledLegacy, s),
          R.verbose(
            `Updating overlay method for pid ${e} "${Y(e)?.gameName}" to ${(0, m.gK)(r)}`,
          ),
          ec.emitChange();
        let o = Y(e);
        return (
          null != o && (await l.A.updateTrackedGame(e, o)),
          l.A.updateOverlayMethod(e, r)
        );
      }
      async function en() {
        let e = new Set(
            c.Ay.getRunningGames()
              .filter((e) => c.Ay.getOverlayEnabledForGame(e))
              .map((e) => e.pid),
          ),
          t = new Set(z()),
          n = new Set([...t].filter((t) => !e.has(t)));
        for (let e of n) await Q(e), await (0, r.yy)(16);
        let i = new Set([...e].filter((e) => !t.has(e)));
        for (let e of i) await X(e), await (0, r.yy)(16);
        let a = new Set([...t].filter((t) => e.has(t)));
        await er(a),
          (n.size > 0 || i.size > 0) &&
            R.verbose("Tracked games have changes", {
              trackedPIDsNoLongerValid: n,
              validPIDsNotAlreadyTracked: i,
              pidsAlreadyTracked: a,
            });
      }
      async function ei(e) {
        var t, n, i, r;
        let a = !1,
          l = Y(e);
        if (null == l)
          return (
            R.error(
              `Tried to determine overlay method swap for untracked pid ${e}`,
            ),
            !1
          );
        if (T.Q.has(l.state))
          return (
            R.verbose(
              `Skipping overlay method swap for pid ${e} - state is ${l.state}`,
            ),
            !1
          );
        let s = await (0, m.E1)(e, 0);
        if (null == s)
          return (
            R.error(`Failed to get revised fullscreen type for pid ${e}`), !1
          );
        l.fullscreenType !== s &&
          R.verbose(`Fullscreen type different in swap for pid ${e}`, {
            oldFullscreenType: l.fullscreenType,
            newFullscreenType: s,
          });
        let o = Z(l, s);
        if (
          (l.overlayMethod === o.overlayMethod &&
            l.oopEnabled === o.enabledOOP &&
            l.legacyEnabled === o.enabledLegacy) ||
          ((U === A.UNSET_PID || null === U) &&
            l.state === I.AR.OVERLAY_RENDERING)
        )
          return a;
        let d =
            L === I.V6.OUT_OF_PROCESS_V3 ||
            L === I.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
          u = L === I.V6.IN_PROCESS_V2,
          c = (0, m.e3)(s, B()),
          h = (0, m.Zj)(l, s, B());
        R.verbose(`Overlay method different for pid ${e}`, {
          oldOverlayMethod: l.overlayMethod,
          revisedFullscreenType: s,
          fullscreenHistory: l.fullscreenHistory,
          newOverlayGameStatus: o,
          shouldSwitchToHook: h,
          shouldSwitchToOutOfProcess: c,
          isForcedInProcess: u,
          isForcedOutOfProcess: d,
          legacyEnabled: D,
          overlayEnabled: B(),
        });
        let E = () => {
          R.verbose(`Updating fullscreen type for pid ${e}`, {
            oldFullscreenType: l.fullscreenType,
            newFullscreenType: s,
          }),
            $(
              e,
              "fullscreenHistory",
              { ...l.fullscreenHistory, [Date.now()]: s },
              "updateFullscreenType",
            ),
            $(e, "fullscreenType", s, "updateFullscreenType"),
            ec.emitChange(),
            (a = !0);
        };
        switch (o.overlayMethod) {
          case I.Ue.OutOfProcess:
          case I.Ue.OutOfProcessLimitedInteraction:
            ((c && !u) || d) &&
              (E(),
              await ((t = e),
              (n = o),
              K(t)
                ? Y(t)?.overlayMethod === n.overlayMethod
                  ? (R.verbose(
                      `OOP requested for pid ${t} but already enabled`,
                    ),
                    Promise.resolve())
                  : (R.verbose(`Enabling OOP for pid ${t}`),
                    $(t, "hasChangedRenderMode", !0, "enableOutOfProcess"),
                    et(t, n, "enableOutOfProcess"))
                : (R.verbose(`OOP requested for untracked pid ${t}`),
                  Promise.resolve())));
            break;
          case I.Ue.Hook:
            ((h && !d) || u || D) &&
              (E(),
              await ((i = e),
              (r = o),
              K(i)
                ? Y(i)?.overlayMethod === I.Ue.Hook
                  ? (R.verbose(
                      `Hook requested for pid ${i} but already enabled`,
                    ),
                    Promise.resolve())
                  : (R.verbose(`Enabling hook for pid ${i}`),
                    $(i, "hasChangedRenderMode", !0, "enableHook"),
                    et(i, r, "enableHook"))
                : (R.verbose(`Hook requested for untracked pid ${i}`),
                  Promise.resolve())));
            break;
          case I.Ue.Disabled:
            E(), et(e, o, "determineOverlayMethodSwap - disabled");
        }
        return a;
      }
      async function er(e) {
        let t = !1;
        for (let n of e) (t = (await ei(n)) || t), await (0, r.yy)(16);
        t &&
          (R.info("determineFullscreenOverlayMethodSwaps has changes"),
          ec.emitChange(),
          x(null, "fullscreen_overlay_method_swap_changes", {
            tracked_game_pids: Array.from(e),
          }));
      }
      async function ea(e, t) {
        if (!g.O) return void R.verbose("setOverlayEnabled: not supported");
        if (
          (R.info("setOverlayEnabled: supported", {
            newLegacyEnabled: e,
            newOopEnabled: t,
          }),
          (D = e),
          f.x.update({ legacyEnabled: e, oopEnabled: t }),
          R.info("setOverlayEnabled", {
            newOopEnabled: t,
            newLegacyEnabled: e,
          }),
          e || t)
        )
          return void es();
        for (let e of z()) await Q(e), await (0, r.yy)(16);
      }
      function el() {
        en(), (v = !1), (G = null), ed();
      }
      async function es() {
        await eo(), await (0, r.yy)(2e3);
        let e = z(),
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
          await X(n), await (0, r.yy)(16);
        R.info(`Retracked ${e.length} games`);
      }
      async function eo() {
        for (let e of z()) await Q(e), await (0, r.yy)(16);
      }
      function ed() {
        u.A.hasLoadedExperiments &&
          !v &&
          ((v = !0), ea(f.x.legacyEnabled, f.x.oopEnabled));
      }
      class eu extends i.Ay.Store {
        static displayName = "OverlayRenderStore";
        initialize() {
          this.waitFor(E.default, u.A, _.A, O.A, c.Ay, N.A, h.A),
            this.syncWith([u.A], ed);
        }
        getDevToolsFocusedPidsWithTimestamp() {
          return H;
        }
        getHasLoadedExperiments() {
          return v;
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
          return M;
        }
        getClosedTrackedGamesHistory() {
          return P;
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
          return { oopEnabled: B(), legacyEnabled: D };
        }
        getAnyGlobalEnabledOverlay() {
          return B() || D;
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
          return Object.values(M).filter(
            (e) =>
              e.overlayMethod !== I.Ue.Disabled &&
              e.state === I.AR.OVERLAY_RENDERING,
          );
        }
      }
      let ec = new eu(
          a.h,
          !b
            ? {}
            : {
                CONNECTION_OPEN: el,
                LOGIN: function () {
                  (v = !1), (G = null);
                },
                LOGOUT: function () {
                  (v = !1), (G = null), eo();
                },
                EXPERIMENT_OVERRIDE_BUCKET: el,
                OVERLAY_SET_ENABLED: function (e) {
                  let { legacyEnabled: t, oopEnabled: n } = e;
                  return (
                    R.info("handleOverlaySetEnabled", {
                      legacyEnabled: t,
                      oopEnabled: n,
                    }),
                    ea(t, n),
                    !0
                  );
                },
                GAME_LAUNCH_SUCCESS: function (e) {
                  if (null != e.pids) for (let t of e.pids) X(t);
                },
                RUNNING_GAMES_CHANGE: function (e) {
                  for (let t of (__OVERLAY__ &&
                    R.error(
                      "Running handleRunningGamesChange While in Overlay Context!",
                    ),
                  e.added))
                    X(t.pid);
                  for (let t of e.removed) Q(t.pid);
                },
                RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
                  if (
                    (__OVERLAY__ &&
                      R.error(
                        "Running handleGameToggleOverlay While in Overlay Context!",
                      ),
                    R.verbose("handleGameToggleOverlay", { action: e }),
                    !(B() || D))
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
                  if (K(t)) {
                    let e = Y(t);
                    e?.legacyEnabled !== n &&
                      $(t, "legacyEnabled", n, "handleGameToggleOverlay"),
                      e?.oopEnabled !== i &&
                        $(t, "oopEnabled", i ?? !1, "handleGameToggleOverlay");
                  }
                  let r = n && D,
                    a = (i ?? !1) && B();
                  return (
                    r || a
                      ? (R.verbose(
                          "handleGameToggleOverlay: game enabled changed",
                          { pid: t, legacyEnabled: r, overlayV3Enabled: a },
                        ),
                        K(t) ? es() : X(t))
                      : Q(t),
                    !0
                  );
                },
                OVERLAY_FORCE_RENDER_MODE: function (e) {
                  return (L = e.mode), es(), !0;
                },
                OVERLAY_UPDATE_OVERLAY_STATE: function (e) {
                  if (null != Y(e.pid))
                    return (
                      $(e.pid, "state", e.overlayState, e.reason),
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
                    !!K(e.pid) &&
                      ($(
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
                    H.push(t);
                  }
                  return (
                    !(0, A.isValidGamePID)(e.pid) || ((0, A.setPID)(e.pid), !0)
                  );
                },
                OVERLAY_SUCCESSFULLY_SHOWN: function (e) {
                  l.A.updateOverlayState(
                    e.pid,
                    I.AR.OVERLAY_RENDERING,
                    "handleOverlaySuccessfullyShown",
                  ),
                    K(e.pid) &&
                      $(
                        e.pid,
                        "successfullyShown",
                        !0,
                        "handleOverlaySuccessfullyShown",
                      ),
                    x(e.pid, "overlay_successfully_shown", { pid: e.pid });
                  let t = Y(e.pid);
                  null != t && l.A.updateTrackedGame(e.pid, t);
                },
                OVERLAY_RENDER_DEBUG_MODE: function (e) {
                  return e.mode === I.x7.TrackFocusPIDs && (k = e.enabled), !0;
                },
                OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS: function () {
                  return (H = new o.A(1e4)), !0;
                },
              },
        ),
        eh = ec;
    },
    680243(e, t, n) {
      n.d(t, { A: () => C });
      var i = n(17928),
        r = n(118356),
        a = n(228366),
        l = n(736056),
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
            T(), (p = c.P.getInstance());
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
      function S(e) {
        __OVERLAY__ ||
          !d.O ||
          (_ !== e && ((_ = e), e && (0, s.setOutOfProcessSupport)(!0)));
      }
      function T() {
        !__OVERLAY__ &&
          d.O &&
          ((f = null),
          (A = !1),
          h.verbose("Maybe Enable Overlay"),
          S(o.x.oopEnabled));
      }
      class m extends i.Ay.Store {
        static displayName = "Overlay-v3-Native-Module-Store";
        initialize() {
          this.waitFor(l.A);
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
          a.h,
          __OVERLAY__ || !d.O
            ? {}
            : {
                CONNECTION_OPEN: function () {
                  return I(), !1;
                },
                EXPERIMENT_OVERRIDE_BUCKET: T,
                OVERLAY_SET_ENABLED: function (e) {
                  let { oopEnabled: t } = e;
                  (f = null), S(t);
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
      n.d(t, { A: () => l });
      var i = n(723702),
        r = n(19575),
        a = n(567249);
      function l(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = a.A.getWindow(e);
        null == n ||
          n.closed ||
          (i.isPlatformEmbedded ? r.Ay.focus(e, t) : n.focus());
      }
    },
    683760(e, t, n) {
      n.d(t, { A: () => c });
      var i = n(17928),
        r = n(228366),
        a = n(572009),
        l = n(788868);
      let s = "OverridePremiumTypeStore",
        o = {
          premiumTypeOverride: l.$I,
          premiumTypeActual: l.$I,
          createdAtOverride: l.lk,
        };
      function d(e) {
        let { user: t } = e;
        o.premiumTypeActual = (0, a.nq)(t.premium_type);
      }
      class u extends i.Ay.PersistedStore {
        static displayName = s;
        static persistKey = s;
        static migrations = [
          (e) => {
            if (e?.createdAtOverride == null)
              return { ...e, createdAtOverride: l.lk };
          },
        ];
        initialize(e) {
          if (null != e) {
            (o.premiumTypeActual = e?.premiumTypeActual),
              (o.premiumTypeOverride = e?.premiumTypeOverride),
              null != e.createdAtOverride
                ? (o.createdAtOverride = new Date(e.createdAtOverride))
                : (o.createdAtOverride = l.lk);
            return;
          }
          (o.premiumTypeOverride = l.$I), (o.createdAtOverride = l.lk);
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
    517381(e, t, n) {
      n.d(t, { A: () => I }), n(321073);
      var i = n(17928),
        r = n(228366),
        a = n(845584),
        l = n(320095),
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
            (this.error = new a.LG(e)),
            (this.analyticsId = null),
            (this.documentsIndexed = 0);
        }
        handleSearchSuccess(e, t) {
          let {
            analyticsId: n,
            cursor: i,
            totalResults: r,
            doingHistoricalIndex: a,
            documentsIndexed: l,
          } = e;
          (this.analyticsId = n),
            (this.isFetching = !1),
            (this.isIndexing = !1),
            (this.isInitialFetchComplete = !0),
            (this.isHistoricalIndexing = a),
            (this.error = null),
            (this.documentsIndexed = l),
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
        let a = o.default.getId() === i;
        return A(n, (n) => {
          let { reactionType: i } = e;
          return "MESSAGE_REACTION_ADD" === t
            ? n.addReaction(r, a, e.colors, i)
            : n.removeReaction(r, a, i);
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
                return (0, l.rh)(t);
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
          let i = (0, l.IU)(n, e.message);
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
        a = n(320095);
      let l = new Map();
      function s() {
        l = new Map();
      }
      let o = [];
      class d extends i.Ay.Store {
        static displayName = "SearchRecentMessageStore";
        getRecentMessageAuthorIds(e) {
          return l.get(e) ?? o;
        }
      }
      let u = new d(r.h, {
        SEARCH_MESSAGES_SUCCESS: function (e) {
          let { guildId: t, data: n } = e;
          if (null == t) return !1;
          let i = !1,
            r = [...(l.get(t) ?? [])],
            s = new Set(r);
          return (
            n.forEach((e) => {
              e.messages.forEach((e) => {
                let [t] = e,
                  n = (0, a.rh)(t);
                !s.has(n.author.id) &&
                  s.size < 15 &&
                  (s.add(n.author.id), r.push(n.author.id), (i = !0));
              });
            }),
            i && l.set(t, r),
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
        a = n(994500),
        l = n(977997),
        s = n(514581);
      let o = {},
        d = {},
        u = new Set();
      function c() {
        (o = {}), (d = {});
      }
      function h(e) {
        let { relationship: t } = e,
          n = l.A.getVoiceStateForUser(t.id);
        return null != n && null != n.channelId && E(n.channelId, t.id);
      }
      function E(e, t) {
        let n = !1,
          i = !1,
          r = new Set(o[e]),
          l = a.A.isBlocked(t);
        l && !r.has(t)
          ? (r.add(t), (i = !0), (n = !0))
          : l || (n = r.delete(t)),
          0 === r.size && n ? delete o[e] : n && (o[e] = r);
        let u = new Set(d[e]),
          c = a.A.isIgnored(t);
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
          this.waitFor(a.A, l.A);
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
          let e = l.A.getAllVoiceStates(),
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
      n.d(t, { A: () => l });
      var i = n(439372),
        r = n(733391);
      class a extends i.A {
        actions = {
          POST_CONNECTION_OPEN: this.onPostConnectionOpen.bind(this),
        };
        onPostConnectionOpen() {
          (0, r.Xw)();
        }
      }
      let l = new a();
    },
    889979(e, t, n) {
      n.d(t, { A: () => E });
      var i = n(554146),
        r = n(439372),
        a = n(626584),
        l = n(367727),
        s = n(710195),
        o = n(733391),
        d = n(832163),
        u = n(271049);
      let c = new a.A("SocialLayerStorefrontAnnouncementManager");
      class h extends r.A {
        _didAttemptToOpenModal = !1;
        _didConnectionOpen = !1;
        actions = {
          LOGOUT: () => this._handleLogout(),
          POST_CONNECTION_OPEN: () => this._handlePostConnectionOpen(),
          SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS: (e) =>
            this._handleStorefrontConfigFetchSuccess(e),
          SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_SUCCESS: () => {
            this._handleShowAnnouncementModal();
          },
        };
        stores = new Map()
          .set(d.A, () => this._handleSocialLayerStorefrontUpdate())
          .set(s.A, () => this._handleExperimentChange());
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
            ("idle" === d.A.getStorefrontAffinity().state && (0, o.dS)(),
            this._handleShowAnnouncementModal());
        };
        _handleShowAnnouncementModal = async () => {
          if (
            this._didAttemptToOpenModal ||
            !this._didConnectionOpen ||
            !(0, u.N)({ location: "SocialLayerStorefrontAnnouncementManager" })
          )
            return;
          let e = d.A.getStorefrontAffinity(),
            t = d.A.getAnnouncementModalConfig(),
            r = t?.version ?? 0,
            a =
              "success" === e.state &&
              e.affinity[t?.applicationId ?? ""]?.isEligible;
          if (
            0 !== r &&
            !(0, l.En)(i.M.GAME_SHOP_ANNOUNCEMENT_MODAL, r).isDismissed &&
            a
          ) {
            this._didAttemptToOpenModal = !0;
            try {
              let { openSocialLayerStorefrontAnnouncementModal: e } =
                await Promise.all([
                  n.e("32292"),
                  n.e("24199"),
                  n.e("57036"),
                  n.e("88394"),
                  n.e("28367"),
                  n.e("45174"),
                  n.e("85519"),
                  n.e("11871"),
                  n.e("37266"),
                  n.e("55057"),
                  n.e("14976"),
                  n.e("63229"),
                  n.e("31988"),
                  n.e("55343"),
                  n.e("80527"),
                  n.e("58710"),
                  n.e("31825"),
                  n.e("23353"),
                  n.e("7175"),
                  n.e("37249"),
                  n.e("14138"),
                  n.e("8971"),
                  n.e("85071"),
                  n.e("88017"),
                  n.e("1040"),
                  n.e("64615"),
                  n.e("17239"),
                  n.e("66950"),
                  n.e("58164"),
                  n.e("38229"),
                  n.e("20861"),
                  n.e("36682"),
                  n.e("45723"),
                  n.e("56871"),
                  n.e("69601"),
                  n.e("47511"),
                  n.e("51444"),
                  n.e("62290"),
                  n.e("48900"),
                  n.e("80973"),
                  n.e("82731"),
                  n.e("20735"),
                  n.e("27846"),
                  n.e("8306"),
                  n.e("10567"),
                  n.e("12542"),
                  n.e("84317"),
                  n.e("93858"),
                  n.e("14325"),
                ]).then(n.bind(n, 99161));
              e();
            } catch (e) {
              (this._didAttemptToOpenModal = !1),
                c.error("Failed to open announcement modal", e);
            }
          }
        };
      }
      let E = new h();
    },
    536432(e, t, n) {
      n.d(t, {
        Ak: () => D,
        Au: () => L,
        Dv: () => U,
        Ir: () => R,
        ND: () => w,
        Ni: () => G,
        VE: () => b,
        fh: () => v,
        un: () => M,
        wH: () => N,
      }),
        n(321073);
      var i = n(702841),
        r = n(554146),
        a = n(58149),
        l = n(693806),
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
        S = n(807348),
        T = n(123973),
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
      function D(e, t, n, i) {
        (0, g.qP)(t, e, S.Zm.SOUNDBOARD), (0, c.Wv)(t, e, __OVERLAY__, n, i);
      }
      async function v(e) {
        let t = _.default.getCurrentUser(),
          n = (0, l.A)(),
          i = (0, m.z0)(e);
        if (
          null == n ||
          h.Do.has(n.type) ||
          null == i ||
          !A.Ay.canUseCustomCallSounds(t) ||
          !(0, T.lI)()
        )
          return;
        await (0, g.E7)();
        let r = "0" === i.guildId ? "0" : i.guildId,
          a = I.A.getSound(r, i.soundId);
        if (null != a) {
          var s;
          if (!y(a, n) || !R(t, a, n, !0) || !L(n)) return null;
          (s = n.id),
            (0, g.qP)(s, a, S.Zm.JOINED_VOICE_CHANNEL),
            (0, c.Rc)(s, a, __OVERLAY__);
        }
      }
      function b(e) {
        let { isSoundboardButtonDisabled: t = !1 } = e,
          n = (0, i.bG)([_.default], () => _.default.getCurrentUser()),
          a = [];
        if (
          !t &&
          !Object.values(d.A.settings.guilds?.guilds ?? {}).some(
            (e) => null != e.joinSound,
          )
        ) {
          let e = (0, f.G2)(n);
          (A.Ay.canUseCustomCallSounds(n) || e) &&
            a.push(r.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL);
        }
        return a;
      }
      function U(e, t) {
        (0, o.TG)(
          e,
          (n) => {
            (n.joinSound = void 0),
              P({
                guildId: e,
                changeType: S.Vr.REMOVED,
                soundType: S.ib.ENTRY,
                location: t,
              });
          },
          o.Sb.INFREQUENT_USER_ACTION,
        );
      }
      function M(e, t, n) {
        (0, o.TG)(
          e,
          (i) => {
            let r = "0" === t.guildId,
              a = r ? S.FH.DEFAULT : S.FH.CUSTOM,
              l = null != i.joinSound ? S.Vr.UPDATED : S.Vr.ADDED;
            (i.joinSound = {
              soundId: t.soundId,
              guildId: r ? "0" : t.guildId,
            }),
              P({
                guildId: e,
                changeType: l,
                soundSource: a,
                soundType: S.ib.ENTRY,
                location: n,
              });
          },
          o.Sb.INFREQUENT_USER_ACTION,
        );
      }
      function P(e) {
        let {
          guildId: t,
          changeType: n,
          soundType: i,
          soundSource: r,
          location: a,
        } = e;
        p.default.track(O.HAw.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
          location_stack: a,
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
        a.Ay.trackWithMetadata(O.HAw.EXPRESSION_FAVORITED, {
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
        a = n(309010),
        l = n(652215);
      function s() {
        let e = a.A.getVoiceChannelId();
        return o(i.A.getChannel(e));
      }
      function o(e) {
        if (null == e) return !1;
        if (l.kvI.CALLABLE.has(e.type)) return !0;
        let t = r.A.can(l.xBc.USE_SOUNDBOARD, e),
          n = r.A.can(l.xBc.SPEAK, e);
        return e.isGuildVoiceOrThread() && t && n;
      }
    },
    933204(e, t, n) {
      n.d(t, { I: () => d, T: () => o });
      var i = n(64700),
        r = n(702841),
        a = n(71393),
        l = n(209932);
      function s(e, t) {
        return e.filter((e) => null == t.get(e));
      }
      function o() {
        let e = (0, r.yK)([a.A], () => a.A.getGuildIds()),
          t = (0, r.bG)([l.A], () => l.A.getSounds());
        return (0, i.useMemo)(() => s(e, t), [e, t]);
      }
      function d() {
        return s(a.A.getGuildIds(), l.A.getSounds());
      }
    },
    312671(e, t, n) {
      n.d(t, { A: () => o });
      var i = n(17928),
        r = n(228366),
        a = n(235079);
      let l = { soundpack: a.i.CLASSIC, lastSoundpackExperimentId: null };
      class s extends i.Ay.PersistedStore {
        static displayName = "SoundpackStore";
        static persistKey = "SoundpackStore";
        initialize(e) {
          null != e &&
            ((l = e),
            Object.values(a.i).includes(l.soundpack) ||
              (l.soundpack = a.i.CLASSIC));
        }
        getState() {
          return l;
        }
        getSoundpack() {
          return l.soundpack;
        }
        getLastSoundpackExperimentId() {
          return l.lastSoundpackExperimentId;
        }
      }
      let o = new s(r.h, {
        SET_SOUNDPACK: function (e) {
          let { soundpack: t, forExperimentId: n } = e;
          l = {
            soundpack: t,
            lastSoundpackExperimentId:
              void 0 !== n ? n : l.lastSoundpackExperimentId,
          };
        },
      });
    },
    732755(e, t, n) {
      n.d(t, { A: () => N });
      var i = n(812729),
        r = n.n(i),
        a = n(17928),
        l = n(228366),
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
        S = n(516607),
        T = n(652215);
      let m = null;
      function O() {
        let e = (function () {
          let e = h.A.getVoiceChannelId();
          if (null == e) return null;
          let t = g.A.getStageInstanceByChannel(e);
          if (null == t) return null;
          let n = o.A.getChannel(e);
          if (null == n || !_.Ib(T.xBc.VIEW_CHANNEL, n)) return null;
          let i = d.A.getGuild(n.getGuildId());
          if (null == i || !i.features.has(T.GuildFeatures.DISCOVERABLE))
            return null;
          let r = (0, f.eL)(n, t),
            a = m?.party?.id === r ? m : null,
            l = p.A.getMutableParticipants(n.id, A.ip.SPEAKER),
            u = l.filter((e) => e.type === A.wY.STREAM).length,
            O = l.length - u,
            C = p.A.getParticipantCount(e) - u,
            N = a?.party?.size != null ? a.party.size[1] : 0;
          return {
            application_id: S.SS,
            name: t.topic ?? n.topic ?? (0, s.m1)(n, E.default, c.A),
            type: (0, I.xn)(n.id) ? T.$pd.WATCHING : T.$pd.LISTENING,
            timestamps: { start: a?.timestamps?.start ?? new Date().getTime() },
            assets: { small_image: i.icon ?? void 0, small_text: i.name },
            party: { id: r, size: [O, Math.max(C, N)] },
          };
        })();
        return !r()(e, m) && ((m = e), !0);
      }
      class C extends a.Ay.Store {
        static displayName = "StageChannelSelfRichPresenceStore";
        initialize() {
          this.waitFor(o.A, d.A, u.A, h.A, p.A, g.A);
        }
        getActivity() {
          return m;
        }
      }
      let N = new C(l.h, {
        CONNECTION_OPEN: O,
        STAGE_INSTANCE_CREATE: O,
        STAGE_INSTANCE_UPDATE: O,
        STAGE_INSTANCE_DELETE: O,
        VOICE_CHANNEL_SELECT: O,
        RTC_CONNECTION_STATE: function (e) {
          let { state: t } = e,
            n = m?.party?.size?.[1] ?? 0;
          return t === T.S7L.RTC_CONNECTED && !(n > 0) && O();
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
        a = n(548965),
        l = n(137903),
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
      class c extends l.yW {
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
            for (let [i, a] of Object.entries(e[n].root))
              t.set(
                i,
                (function (e, t) {
                  let n = [],
                    { tags: i } = t,
                    a = {
                      type: o.cG.STICKER_NAME,
                      value: t.name.trim().toLocaleLowerCase(),
                    };
                  if ((n.push(a), null != i)) {
                    let t = {
                      type: o.cG.TAG,
                      value: i.trim().toLocaleLowerCase(),
                    };
                    n.push(t);
                    let a = s.A.getGuild(e);
                    if (null != a) {
                      let e = a.name.trim().toLocaleLowerCase();
                      null != e &&
                        "" !== e &&
                        n.push({ type: o.cG.GUILD_NAME, value: e });
                    }
                    let l = r.Ay.getByName(i);
                    null != l &&
                      (n.push({
                        type: o.cG.CORRELATED_EMOJI,
                        value: l.surrogates,
                      }),
                      l.forEachDiversity((e) =>
                        n.push({
                          type: o.cG.CORRELATED_EMOJI,
                          value: e.surrogates,
                        }),
                      ));
                  }
                  return n;
                })(n, a),
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
        a.P4.getCachedBridgedStoreMode(),
      );
    },
    45494(e, t, n) {
      let i;
      n.d(t, { A: () => P, m: () => g });
      var r = n(735438),
        a = n.n(r),
        l = n(392421),
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
        S = !0,
        T = !1,
        m = !1,
        O = null,
        C = s.T.LATEST_ACTIVITY,
        N = [],
        y = 0,
        R = l.n.MATCH_SOME;
      function L() {
        (I = !1),
          (S = !0),
          (T = !1),
          (m = !1),
          (O = null),
          (C = s.T.LATEST_ACTIVITY),
          (i = new Set()),
          (y = 0),
          (N = []),
          (R = l.n.MATCH_SOME);
      }
      function D(e, t) {
        return t === s.T.LATEST_ACTIVITY ? p.Ay.lastMessageId(e.id) : e.id;
      }
      function v() {
        if (null == O) return !1;
        let e = !T,
          t = _.A.getChannel(N[N.length - 1]),
          n = null == t ? null : D(t, C);
        N = a()(_.A.getAllThreadsForParent(O))
          .filter((e) => e.isArchivedThread())
          .filter((t) => {
            if (0 !== i.size) {
              if (R === l.n.MATCH_SOME) {
                if (t.appliedTags?.some((e) => i.has(e)) !== !0) return !1;
              } else if (R === l.n.MATCH_ALL) {
                for (let e of i.values())
                  if (t.appliedTags?.includes(e) !== !0) return !1;
              }
            }
            if (e || null == n) return !0;
            {
              let e = null == t ? null : D(t, C);
              return null != e && A.default.compare(e, n) >= 0;
            }
          })
          .sort((e, t) => A.default.compare(D(e, C), D(t, C)))
          .map((e) => e.id)
          .reverse()
          .value();
      }
      function b(e) {
        if (!(N.indexOf(e) >= 0)) return !1;
        N = N.filter((t) => t !== e);
      }
      let U = [];
      class M extends d.Ay.Store {
        static displayName = "ArchivedThreadsStore";
        initialize() {
          this.waitFor(_.A, f.A, p.Ay);
        }
        get canLoadMore() {
          return T && !I && !m;
        }
        get nextOffset() {
          return y;
        }
        get isInitialLoad() {
          return S;
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
      let P = new M(u.h, {
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
            (S = !1);
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
            v(),
            (T = e.hasMore),
            (y = e.offset + g),
            (I = !1),
            (S = !1);
        },
        LOAD_ARCHIVED_THREADS_FAIL: function (e) {
          if (
            e.channelId !== O ||
            e.sortOrder !== C ||
            !(0, o._)(e.tagFilter, i) ||
            e.tagSetting !== R
          )
            return !1;
          (I = !1), (m = !0), (S = !1);
        },
        RESORT_THREADS: function (e) {
          return (null == O || null == e.channelId || O === e.channelId) && v();
        },
      });
    },
    219065(e, t, n) {
      n.d(t, { A: () => C }), n(321073);
      var i = n(735438),
        r = n.n(i),
        a = n(17928),
        l = n(228366),
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
            [r, a, l] = this.calculateNewState(
              e,
              s.A.getChannel(this.parentId),
            );
          return (
            (t !== r || n !== a || i !== l) &&
            (this.removeUserId(e, t), this.addUser(e, r, a, l), !0)
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
          let a = h.default.getUser(e);
          if (null == a || "" === a.username) return;
          t in this.sections ||
            (this.sections[t] = { sectionId: t, usersById: {}, userIds: [] });
          let l = this.sections[t];
          if (
            ((l.usersById[e] = {
              userId: e,
              displayName: n,
              canViewChannel: i,
            }),
            r)
          )
            l.userIds.push(e);
          else {
            let t = this.findUserIdSortedPosition(l, e, n);
            l.userIds.splice(t, 0, e);
          }
          this.version++;
        }
        findUserIdSortedPosition(e, t, n) {
          let { userIds: i, usersById: r } = e;
          for (let e = 0; e < i.length; e++) {
            let a = i[e],
              l = r[a].displayName;
            if (l === n) {
              if (t < a) return e;
            } else if (null == l) {
              if (null != n) return e;
            } else if (null != n && n < l) return e;
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
            a =
              i?.id === r?.id
                ? c.A.getStatus()
                : u.A.getStatus(e, this.guildId),
            l =
              null != i &&
              null != t &&
              _.$3({ permission: f.xBc.VIEW_CHANNEL, user: i, context: t }),
            s =
              a !== f.clD.OFFLINE && a !== f.clD.INVISIBLE
                ? (n?.hoistRoleId ?? "online")
                : "offline",
            d = n?.nick ?? A.Ay.getName(i);
          return [s, d?.toLowerCase(), l];
        }
      }
      function S(e) {
        return T(e.user.id);
      }
      function T(e) {
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
      class O extends a.Ay.Store {
        static displayName = "ThreadMemberListStore";
        initialize() {
          this.waitFor(s.A, o.Ay, d.A, u.A, c.A, h.default),
            this.syncWith([d.A], () => {
              let e = d.A.getSubscribedThreadIds(),
                t = !1;
              for (let n in g) e.has(n) || (delete g[n], (t = !0));
              return t;
            }),
            this.syncWith([c.A], () => T(h.default.getCurrentUser()?.id));
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
      let C = new O(l.h, {
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
            a = r?.parent_id;
          null != a &&
            ((g[t] = new I(n, a, t)), g[t].rebuild(i.map((e) => e.user_id)));
        },
        USER_UPDATE: S,
        PRESENCE_UPDATES: function (e) {
          let { updates: t } = e;
          return t
            .map((e) => {
              let { user: t } = e;
              return T(t.id);
            })
            .some((e) => e);
        },
        GUILD_MEMBER_ADD: S,
        GUILD_MEMBER_UPDATE: S,
        GUILD_MEMBER_REMOVE: S,
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
          return e.members.reduce((e, t) => T(t.user.id) || e, !1);
        },
      });
    },
    279263(e, t, n) {
      n.d(t, { A: () => o });
      var i = n(867051),
        r = n(548965),
        a = n(137903);
      let l = "Note";
      class s extends a.yW {
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
            t.set(e.id, (0, i.yE)(l, { loading: !1, note: e.note }));
          },
          USER_NOTE_LOAD_START: (e, t) => {
            t.set(e.userId, (0, i.yE)(l, { loading: !0, note: null }));
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
        a = n(231723),
        l = n(253932),
        s = n(652215);
      function o(e, t) {
        let o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        l.bm.getSetting() || o
          ? (0, r.openModalLazy)(
              async () => {
                let { default: t } = await Promise.all([
                  n.e("28367"),
                  n.e("95782"),
                  n.e("89480"),
                ]).then(n.bind(n, 308229));
                return (n) =>
                  (0, i.jsx)(t, { ...n, onEnable: e, videoEnabled: !1 });
              },
              {
                modalKey: "camera-preview",
                contextKey: t === s.BRT.POPOUT ? a.KX : a.SY,
              },
            )
          : e?.();
      }
    },
    164891(e, t, n) {
      n.d(t, { A: () => a });
      var i = n(600975),
        r = n(688151);
      let a = (0, i.C)({
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
        connectedAt;
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
            (this.discoverable = e.discoverable ?? !0),
            (this.connectedAt = e.connectedAt);
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
        a = n(572009),
        l = n(71393),
        s = n(287809),
        o = n(688151),
        d = n(115093);
      let u =
        "production" === d.B.DEVELOPMENT ||
        window.GLOBAL_ENV.RELEASE_CHANNEL === d.B.STAGING;
      function c() {
        u = (0, a.I9)(s.default.getCurrentUser());
      }
      class h extends i.Ay.Store {
        static displayName = "DeveloperExperimentStore";
        isDeveloper = !1;
        initialize() {
          this.waitFor(s.default, l.A),
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
      n.d(t, { A: () => l });
      var i = n(17928),
        r = n(228366);
      class a extends i.Ay.Store {
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
      let l = new a();
    },
    82057(e, t, n) {
      let i;
      n.d(t, { A: () => U });
      var r = n(735438),
        a = n.n(r),
        l = n(17928),
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
        S = n(309010),
        T = n(967198),
        m = n(652215);
      let O = new o.Ay((e) => {
        for (let t in e)
          null != f.A.getGuild(t) || p.A.isUnavailable(t) || delete e[t];
        s.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: e });
      });
      function C(e, t) {
        let n = {};
        O.forEach((r) => {
          r !== T.A.getGuildId() &&
            r !== g.A.getGuildId() &&
            r !== _.A.getChannel(S.A.getChannelId())?.getGuildId() &&
            (null == i || i.guildId !== r) &&
            (O.clearWithoutFlushing(r, e), t && (n[r] = O.get(r)));
        }),
          a().isEmpty(n) ||
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
              O.subscribeThreadMemberList(r, t, S.A.getChannelId())
          : O.subscribeChannel(r, t, n);
      }
      function R(e) {
        let { type: t } = e;
        "CONNECTION_OPEN" === t && C(!0, !1);
        let n = T.A.getGuildId();
        null != n && N(n, S.A.getChannelId(n));
        let i = {};
        O.forEach((e) => {
          null == f.A.getGuild(e)
            ? O.clearWithoutFlushing(e, !0)
            : (i[e] = O.get(e));
        }),
          a().isEmpty(i) ||
            s.h.dispatch({
              type: "GUILD_SUBSCRIPTIONS_FLUSH",
              subscriptions: i,
            });
      }
      function L(e) {
        let { guildId: t, channelId: n } = e;
        return !p.A.isUnavailable(t) && N(t, n);
      }
      function D() {
        return N(T.A.getGuildId(), S.A.getChannelId());
      }
      function v() {
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
      class b extends l.Ay.Store {
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
            S.A,
            T.A,
            u.A,
          ),
            this.syncWith([u.A], v),
            this.syncWith([E.Ay], D);
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
          t.id === T.A.getGuildId() && D();
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
                S.A.getChannelId() === t.id &&
                void O.subscribeThreadMemberList(
                  t.guild_id,
                  t.id,
                  S.A.getChannelId(),
                );
        },
        THREAD_DELETE: function (e) {
          let { channel: t } = e;
          return O.unsubscribeThreadMemberList(t.guild_id, t.id);
        },
        THREAD_LIST_SYNC: D,
      });
    },
    958590(e, t, n) {
      let i;
      n.d(t, { A: () => N });
      var r = n(177029),
        a = n.n(r),
        l = n(818125),
        s = n.n(l),
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
        S = !1,
        T = new Map();
      function m(e) {
        return e.toLowerCase();
      }
      function O(e) {
        let { inviteCode: t } = e,
          n = m(t);
        if (!T.has(n)) return !1;
        (T = new Map(T)).delete(n);
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
          return null != i && !I && !S;
        }
        getReceivedInstallationIdForInviteCode(e) {
          return T.get(m(e));
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
            (S = !1),
            (g = !1);
        },
        CHANNEL_DELETE: function (e) {
          let { channel: t } = e;
          delete _[t.id], delete p[t.id], delete A[t.id];
        },
        FRIEND_INVITE_CREATE_SUCCESS: function (e) {
          (f[e.invite.code] = h.A.createFromServer(e.invite)),
            (i = a()(s()(d()(Object.values(f), "createdAt"))) ?? null),
            (S = !1);
        },
        FRIEND_INVITE_CREATE_FAILURE: function () {
          S = !1;
        },
        FRIEND_INVITE_REVOKE_SUCCESS: function (e) {
          null != e.invites &&
            e.invites.forEach((e) => {
              null != f[e.code] && delete f[e.code];
            }),
            (i = a()(s()(d()(Object.values(f), "createdAt"))) ?? null),
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
          S = !0;
        },
        FRIEND_INVITES_FETCH_REQUEST: function () {
          g = !0;
        },
        FRIEND_INVITES_FETCH_RESPONSE: function (e) {
          (f = {}),
            e.invites.forEach((e) => {
              f[e.code] = h.A.createFromServer(e);
            }),
            (i = a()(s()(d()(Object.values(f), "createdAt"))) ?? null),
            (g = !1);
        },
        INSTANT_INVITE_CLEAR: function (e) {
          delete _[e.channelId];
        },
        INSTANT_INVITE_RECEIVED_INSTALLATION_ID_SET: function (e) {
          (T = new Map(T)).set(m(e.inviteCode), e.receivedInstallationId);
        },
        INSTANT_INVITE_RECEIVED_INSTALLATION_ID_CLEAR: O,
        INVITE_MODAL_CLOSE: function (e) {
          let { inviteCode: t } = e;
          return null != t && O({ inviteCode: t });
        },
        LOGOUT: function () {
          if (0 === T.size) return !1;
          T = new Map();
        },
      });
    },
    737613(e, t, n) {
      let i, r;
      n.d(t, { A: () => p });
      var a = n(17928),
        l = n(506774),
        s = n(228366),
        o = n(734057),
        d = n(71393);
      let u = "hideSuppressWarning",
        c = !1,
        h = !0,
        E = !1;
      class _ extends a.Ay.Store {
        static displayName = "PermissionSpeakStore";
        initialize() {
          this.waitFor(o.A, d.A), (E = l.w.get(u) || E);
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
          (h = !0), t && ((E = !0), l.w.set(u, E));
        },
      });
    },
    543465(e, t, n) {
      n.d(t, { Ay: () => q, b5: () => Y, wn: () => B }), n(938796);
      var i = n(735438),
        r = n.n(i),
        a = n(665260),
        l = n(17928),
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
      let S = {},
        T = {},
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
        D = {},
        v = {},
        b = new Set(),
        U = new Set(),
        M = {},
        P = {};
      function w(e, t) {
        let n = S[e],
          i = n?.channel_overrides ?? {},
          l = Y(t.channel_overrides),
          s = { ...B(e), ...n, ...t, channel_overrides: l };
        N.clearTimer(e),
          r().forEach(i, (e) => {
            y.clearTimer(e.channel_id);
          }),
          G(e, s),
          (S[e] = s),
          (D[e] = K(S[e]));
        let o = r().filter(s.channel_overrides, (e) =>
          a.Lt(e.flags ?? 0, I.vv.OPT_IN_ENABLED),
        );
        (v[e] = new Set(o.map((e) => e.channel_id))),
          (function (e) {
            if (null == e) return;
            let t = new Set(v[e]),
              n = M[e] ?? {};
            for (let e in n) {
              let i = n[e];
              a.Lt(i.flags, I.vv.OPT_IN_ENABLED) ? t.add(e) : t.delete(e);
            }
            Object.keys(n).length > 0 ? (P[e] = t) : delete P[e];
          })(e),
          delete T[e];
      }
      function G(e, t) {
        !0 === t.muted &&
          N.setTimer(e, t.mute_config, () => {
            V(e, { muted: !1 }),
              s.h.dispatch({ type: "GUILD_MUTE_EXPIRED", guildId: e });
          }) &&
          (t.muted = !1),
          r().forEach(t.channel_overrides, (t) => {
            !0 === t.muted &&
              y.setTimer(t.channel_id, t.mute_config, () => {
                F(e, t.channel_id, { muted: !1 }),
                  s.h.dispatch({
                    type: "CHANNEL_MUTE_EXPIRED",
                    guildId: e,
                    channelId: t.channel_id,
                  });
              }) &&
              (t.muted = !1);
          });
      }
      function V(e, t) {
        let n = S[e];
        w(e, { channel_overrides: n?.channel_overrides ?? {}, ...t });
      }
      function F(e, t, n) {
        let i = x(e, t, n);
        H(e, { [t]: i });
      }
      function k(e, t) {
        let n = {},
          i = (null != e ? M[e] : null) ?? {};
        h.default.keys(t).forEach((r) => {
          let a = x(e, r, t[r]);
          (n[r] = a), (i[r] = { flags: a.flags ?? 0 });
        }),
          null != e && (M[e] = { ...M[e], ...i }),
          H(e, n);
      }
      function H(e, t) {
        let n = S[e],
          i = n?.channel_overrides ?? {};
        w(e, { channel_overrides: null == n ? t : { ...i, ...t } });
      }
      function x(e, t, n) {
        let i = S[e];
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
      function z(e) {
        return S[e] ?? B(e);
      }
      function W(e) {
        (m = a.Lt(e.flags, f.i.USE_NEW_NOTIFICATIONS)),
          (O = a.Lt(e.flags, f.i.MENTION_ON_ALL_MESSAGES)),
          (C = e);
      }
      function K(e) {
        return new Set(
          null != e.channel_overrides
            ? r()(e.channel_overrides)
                .filter((e) => (0, o.tG)(e))
                .map((e) => e.channel_id)
                .value()
            : null,
        );
      }
      function $() {
        return !0;
      }
      class j extends l.Ay.PersistedStore {
        static displayName = "UserGuildSettingsStore";
        static persistKey = "collapsedGuilds";
        initialize(e) {
          this.waitFor(E.A, _.A, d.A, u.A, p.default),
            null != e &&
              ((m = e.useNewNotifications ?? !1),
              "userGuildSettings" in e &&
                ((S = e.userGuildSettings),
                (v = r().mapValues(
                  e.optedInChannelsByGuild ?? {},
                  (e) => new Set(e),
                )),
                r().forEach(S, (e, t) => {
                  D[t] = K(e);
                })));
        }
        getState() {
          return { useNewNotifications: m };
        }
        get mentionOnAllMessages() {
          return O;
        }
        isSuppressEveryoneEnabled(e) {
          return z(e).suppress_everyone;
        }
        isSuppressRolesEnabled(e) {
          return z(e).suppress_roles;
        }
        isMuteScheduledEventsEnabled(e) {
          return z(e).mute_scheduled_events;
        }
        isMobilePushEnabled(e) {
          return z(e).mobile_push;
        }
        isMuted(e) {
          let t = z(e);
          return (0, o.tG)(t);
        }
        isTemporarilyMuted(e) {
          let t = z(e);
          return (0, o.wG)(t);
        }
        getMuteConfig(e) {
          return z(e).mute_config;
        }
        getMessageNotifications(e) {
          return z(e).message_notifications;
        }
        getChannelOverrides(e) {
          return z(e).channel_overrides ?? {};
        }
        getNotifyHighlights(e) {
          return z(e).notify_highlights;
        }
        getGuildFlags(e) {
          return z(e).flags;
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
          return D[e] ?? b;
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
          return S[e]?.hide_muted_channels === !0;
        }
        getAllSettings() {
          return {
            userGuildSettings: S,
            mutedChannels: D,
            optedInChannelsByGuild: v,
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
            if (a.Lt(t.flags, I.vv.NEW_FORUM_THREADS_ON)) return !0;
            if (a.Lt(t.flags, I.vv.NEW_FORUM_THREADS_OFF)) return !1;
          }
          return this.resolvedMessageNotifications(e) === A.orn.ALL_MESSAGES;
        }
        isOptInEnabled(e) {
          return (
            null != e &&
            (d.A.isFullServerPreview(e)
              ? d.A.isOptInEnabled(e)
              : a.Lt(this.getGuildFlags(e), I.n3.OPT_IN_CHANNELS_ON))
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
          if (n && null != P[e]) return P[e].has(t);
          let i = this.getChannelOverrides(e)[t]?.flags ?? 0;
          return a.Lt(i, I.vv.OPT_IN_ENABLED);
        }
        getOptedInChannels(e) {
          return d.A.isFullServerPreview(e)
            ? (d.A.getViewingChannels(e) ?? U)
            : (v[e] ?? U);
        }
        getOptedInChannelsWithPendingUpdates(e) {
          return P[e];
        }
        getPendingChannelUpdates(e) {
          return M[e];
        }
        getGuildFavorites(e) {
          if (d.A.isFullServerPreview(e)) return null;
          if (null == T[e]) {
            let t = r().filter(
              this.getChannelOverrides(e),
              (t) =>
                a.Lt(t.flags ?? 0, I.vv.FAVORITED) &&
                E.A.getChannel(t.channel_id)?.guild_id === e,
            );
            T[e] = t.map((e) => e.channel_id);
          }
          return T[e];
        }
        isFavorite(e, t) {
          return (
            !d.A.isFullServerPreview(e) &&
            this.getGuildFavorites(e)?.includes(t) === !0
          );
        }
        isMessagesFavorite(e) {
          let t = this.getChannelOverrides(null)[e]?.flags ?? 0;
          return a.Lt(t, I.vv.FAVORITED);
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
          return a.Lt(t, I.n3.UNREADS_ALL_MESSAGES)
            ? g.e.ALL_MESSAGES
            : a.Lt(t, I.n3.UNREADS_ONLY_MENTIONS)
              ? g.e.ONLY_MENTIONS
              : g.e.UNSET;
        }
        resolveGuildUnreadSetting(e) {
          let t = this.getGuildFlags(e.id);
          return !m || a.Lt(t, I.n3.UNREADS_ALL_MESSAGES)
            ? g.e.ALL_MESSAGES
            : a.Lt(t, I.n3.UNREADS_ONLY_MENTIONS)
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
          return a.Lt(n, I.vv.UNREADS_ALL_MESSAGES)
            ? g.e.ALL_MESSAGES
            : a.Lt(n, I.vv.UNREADS_ONLY_MENTIONS)
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
          V(t, n);
        },
        USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: function (e) {
          let { guildId: t, settings: n } = e;
          V(t, n), k(t, n.channel_overrides);
        },
        USER_GUILD_SETTINGS_CHANNEL_UPDATE: function (e) {
          let { guildId: t, channelId: n, settings: i } = e;
          null != t &&
            null != i.flags &&
            (M[t] = { ...M[t], [n]: { flags: i.flags } }),
            F(t, n, i);
        },
        USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: function (e) {
          let { guildId: t, overrides: n } = e;
          return !(null == t || d.A.isFullServerPreview(t)) && (k(t, n), !0);
        },
        CONNECTION_OPEN: function (e) {
          W(e.notificationSettings),
            N.reset(),
            y.reset(),
            e.userGuildSettings.partial || ((S = {}), (D = {}), (v = {}));
          let t = new Set();
          for (let n in (e.userGuildSettings.entries.forEach((e) => {
            "channel_overrides" in e || (e.channel_overrides = {}),
              w(e.guild_id, e),
              null != e.guild_id && t.add(e.guild_id);
          }),
          S))
            t.has(n) || G(n, S[n]);
        },
        CACHE_LOADED: function (e) {
          null != e.userGuildSettings &&
            0 !== e.userGuildSettings.length &&
            ((S = {}),
            (D = {}),
            (v = {}),
            e.userGuildSettings.forEach((e) => {
              let t = e.guild_id;
              S[t] = e;
              let n = new Set(),
                i = new Set();
              for (let t in e.channel_overrides) {
                let r = e.channel_overrides[t];
                (0, o.tG)(r) && n.add(t),
                  a.Lt(r.flags ?? 0, I.vv.OPT_IN_ENABLED) && i.add(t);
              }
              (D[t] = n), (v[t] = i);
            }));
        },
        OVERLAY_INITIALIZE: function (e) {
          let { allUserGuildSettings: t } = e,
            {
              userGuildSettings: n,
              mutedChannels: i,
              optedInChannelsByGuild: r,
            } = t;
          (S = { ...n }),
            (D = {}),
            (v = {}),
            h.default.keys(i).forEach((e) => {
              D[e] = new Set(i[e]);
            }),
            h.default.keys(r).forEach((e) => {
              v[e] = new Set(r[e]);
            });
        },
        GUILD_CREATE: $,
        GUILD_UPDATE: $,
        GUILD_TOGGLE_COLLAPSE_MUTED: function (e) {
          let { guildId: t } = e,
            n = null == S[t] ? B(t) : S[t];
          S[t] = {
            ...n,
            guild_id: t,
            hide_muted_channels: !0 !== n.hide_muted_channels,
          };
        },
        IMPERSONATE_UPDATE: $,
        IMPERSONATE_STOP: $,
        USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES: function (e) {
          let { guildId: t, updates: n } = e;
          if (null == t) return !1;
          let i = M[t];
          if (null == i) return !1;
          for (let e in n) r().isEqual(n[e], i[e]) && delete i[e];
        },
        CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function (e) {
          let { guildId: t } = e;
          if (null == t) return !1;
          delete M[t], delete P[t];
        },
        NOTIFICATION_SETTINGS_UPDATE: function (e) {
          let { settings: t } = e;
          W(t);
        },
        GUILD_MUTE_EXPIRED: () => !0,
        CHANNEL_MUTE_EXPIRED: () => !0,
      });
    },
    870570(e, t, n) {
      n.d(t, { A: () => o });
      var i = n(17928),
        r = n(228366);
      let a = null;
      class l extends i.Ay.Store {
        static displayName = "UserRequiredActionStore";
        hasAction() {
          return null != a;
        }
        getAction() {
          return a;
        }
      }
      function s(e) {
        a = e.requiredAction;
      }
      let o = new l(r.h, {
        CONNECTION_OPEN: s,
        USER_REQUIRED_ACTION_UPDATE: s,
      });
    },
    803301(e, t, n) {
      n.d(t, { A: () => _ });
      var i = n(17928),
        r = n(228366),
        a = n(652215),
        l = n(731854);
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
        let r = i[t ?? a.eGj];
        if (null != r) {
          for (let t of Object.values(l.x))
            (n === t || null == n) && (delete r[t], delete u[c(n ?? t, e)]);
          d[e][t ?? a.eGj] = r;
        }
      }
      class E extends i.Ay.Store {
        static displayName = "VideoStreamStore";
        getStreamId(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : l.x.DEFAULT;
          return d[e]?.[t ?? a.eGj]?.[n]?.streamId;
        }
        getUserStreamData(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : l.x.DEFAULT;
          return d[e]?.[t ?? a.eGj]?.[n];
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
              (e = d[t][n ?? a.eGj] ?? {}),
              (d[t][n ?? a.eGj] = { ...e, [r]: { streamId: i } }),
              delete u[c(r, t)];
          } else h(t, n, r);
        },
        VOICE_STATE_UPDATES: function (e) {
          let { voiceStates: t } = e;
          return t.reduce((e, t) => {
            let { userId: n, sessionId: i, channelId: r, guildId: l } = t;
            if (null == r && n === s)
              if (i !== o) return e;
              else (d = {}), (u = {});
            else {
              if (null != r || d[n]?.[l ?? a.eGj] == null) return e;
              h(n, l);
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
        a = n(17928),
        l = n(451988),
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
      let S = new Set(),
        T = {},
        m = new Set(),
        O = {},
        C = new Set(),
        N = {},
        y = 10 * f.A.Millis.MINUTE,
        R = 6 * f.A.Millis.HOUR,
        L = 10 * f.A.Millis.MINUTE,
        D = new l.Ep();
      function v(e) {
        D.start(e + Math.random() * y, o.r);
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
        if (null != T[t] && A.A.shouldBeInstalled(e, t)) {
          let n = T[t],
            i = n.manifestIds,
            a = p.A.getState(e, t);
          null != a &&
            a.shouldPatch &&
            (a.buildId !== n.id || !r().isEqual(a.manifestIds, i)) &&
            s.h.wait(() => {
              let r = c.A.getApplication(e);
              null != r
                ? (C.delete((0, g.gW)(e, t)), (0, u.K3)(r, t, n.id, i, !0))
                : C.add((0, g.gW)(e, t));
            });
        }
      }
      function M() {
        D.stop();
      }
      class P extends a.Ay.Store {
        static displayName = "ApplicationBuildStore";
        initialize() {
          this.syncWith([_.A], b), this.waitFor(c.A, p.A, A.A, _.A, E.A);
        }
        getTargetBuildId(e, t) {
          return null == T[t] ? null : T[t].id;
        }
        getTargetManifests(e, t) {
          return null == T[t] ? null : T[t].manifestIds;
        }
        hasNoBuild(e, t) {
          return m.has(t);
        }
        isFetching(e, t) {
          return S.has(t);
        }
        needsToFetchBuildSize(e) {
          return !O.hasOwnProperty(e);
        }
        getBuildSize(e) {
          return O[e];
        }
      }
      let w = new P(s.h, {
        CONNECTION_OPEN: function () {
          return !h.l_.getSetting() && (v(R), b());
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
          S.add(t);
        },
        APPLICATION_BUILD_FETCH_SUCCESS: function (e) {
          let { applicationId: t, branchId: n, locale: i, build: r } = e;
          S.delete(n);
          let a = r.manifests.map((e) => {
              let { id: t } = e;
              return t;
            }),
            l = r.id;
          m.delete(n),
            (T[n] = {
              id: l,
              applicationId: t,
              branchId: n,
              locale: i,
              manifestIds: a,
            }),
            U(t, n);
        },
        APPLICATION_BUILD_NOT_FOUND: function (e) {
          let { branchId: t } = e;
          S.delete(t), m.add(t);
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
          v(R);
        },
        APPLICATION_BRANCHES_FETCH_FAIL: function () {
          v(L);
        },
        CONNECTION_CLOSED: M,
        LOGOUT: M,
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
        a = n(17928),
        l = n(506774),
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
        S = [],
        T = [],
        m = !1,
        O = null,
        C = null,
        N = !1,
        y = new Map(),
        R = !1,
        L = null;
      function D() {
        let e = { queue: S, paused: m, userActions: Array.from(y) };
        l.w.set(I, e);
      }
      function v() {
        let e = S[0];
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
        return S.findIndex((e) => e.comboId === n);
      }
      function U(e, t, n, i) {
        let r = (0, h.gW)(e, t),
          a = { comboId: r, action: i },
          l = T.indexOf(r);
        -1 !== l && T.splice(l, 1);
        let s = b(e, t);
        0 !== s &&
          (n
            ? -1 === s && (S.push(a), v())
            : (s > 0 && S.splice(s, 1), S.unshift(a), v())),
          !n && m && E.A.resume(),
          D();
      }
      function M(e, t) {
        let n = (0, h.gW)(e, t),
          i = T.indexOf(n);
        -1 !== i && T.splice(i, 1);
        let r = b(e, t);
        -1 !== r && (S.splice(r, 1), D()), v();
      }
      function P(e) {
        let { applicationId: t, branchId: n } = e;
        M(t, n);
      }
      function w(e) {
        let { applicationId: t, branchId: n } = e,
          i = (0, h.gW)(t, n),
          r = T.indexOf(i);
        -1 !== r && T.splice(r, 1);
      }
      function G() {
        let e = u.default.getToken(),
          t = u.default.getId();
        null != e && E.A.setCredentials(t, e);
      }
      function V() {
        for (let e of d.Ay.getRunningDiscordApplicationIds()) o.ZT(e, e);
        let e = d.Ay.getVisibleGame();
        return (
          m || null == e || e.pid === L || o.v7(),
          (L = null == e ? null : e.pid),
          !1
        );
      }
      class F extends a.Ay.Store {
        static displayName = "DispatchManagerStore";
        initialize() {
          let e = l.w.get(I) ?? {
            queue: null,
            paused: null,
            userActions: null,
          };
          null != e.queue &&
            (S = e.queue.map((e) =>
              "string" == typeof e ? { comboId: e, action: "Patch" } : e,
            )),
            null != e.paused && (m = e.paused),
            null != e.userActions && (y = new Map(Array.from(e.userActions))),
            this.waitFor(p.A, d.Ay),
            this.syncWith([d.Ay], V),
            this.waitFor(c.A, u.default, p.A);
        }
        get activeItems() {
          return S.map((e) => {
            let { comboId: t } = e;
            return (0, h.r0)(t);
          });
        }
        get finishedItems() {
          return T.map(h.r0);
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
      let k = new F(s.h, {
        DISPATCH_APPLICATION_INSTALL: function (e) {
          let { applicationId: t, branchId: n } = e;
          y.set((0, h.gW)(t, n), "Install"), U(t, n, !1, "Patch");
        },
        DISPATCH_APPLICATION_UPDATE: function (e) {
          let { applicationId: t, branchId: n, automatic: i } = e;
          U(t, n, i, "Patch");
        },
        DISPATCH_APPLICATION_UNINSTALL: function (e) {
          P(e), w(e);
        },
        DISPATCH_APPLICATION_CANCEL: P,
        DISPATCH_APPLICATION_REPAIR: function (e) {
          let { applicationId: t, branchId: n } = e;
          y.set((0, h.gW)(t, n), "Repair"), U(t, n, !1, "Repair");
        },
        DISPATCH_APPLICATION_MOVE_UP: function (e) {
          let { applicationId: t, branchId: n } = e,
            i = b(t, n);
          if (i < 1) return !1;
          S.splice(0, 0, S.splice(i, 1)[0]), v(), m && E.A.resume(), D();
        },
        DISPATCH_APPLICATION_REMOVE_FINISHED: w,
        DISPATCH_APPLICATION_STATE_UPDATE: function (e) {
          let { state: t } = e;
          !N && ((N = !0), v(), m || E.A.resume());
          let n = m;
          (m = t.paused), (O = t.currentTask), (C = t.nextTask);
          let i = !1;
          (S = S.filter((e) => {
            let { comboId: t } = e,
              { applicationId: n, branchId: a } = (0, h.r0)(t),
              l = p.A.getState(n, a),
              s = c.A.getTargetBuildId(n, a),
              d = c.A.getTargetManifests(n, a);
            if (
              null != l &&
              l.type === A.WTw.UP_TO_DATE &&
              l.buildId === l.targetBuildId &&
              l.buildId === s &&
              r().isEqual(l.manifestIds, l.targetManifestIds) &&
              r().isEqual(l.manifestIds, d)
            ) {
              if ((T.push(t), y.has(t))) {
                switch (y.get(t)) {
                  case "Install":
                    o.BK(n, l);
                    break;
                  case "Repair":
                    o.jU(n, l);
                }
                y.delete(t);
              }
              return (i = !0), !1;
            }
            return !0;
          })),
            v(),
            (i || n !== m) && D();
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
                M(t, n);
              }
            }
          }
        },
        CONNECTION_OPEN: function () {
          (0, _.isDesktop)() && G();
        },
        LOGOUT: function () {
          l.w.remove(I), (0, _.isDesktop)() && E.A.pause();
        },
      });
    },
    532624(e, t, n) {
      n.d(t, { Ay: () => X, DV: () => y, aS: () => L }), n(321073);
      var i = n(812729),
        r = n.n(i),
        a = n(735438),
        l = n.n(a),
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
        S = n(696016);
      n(980504);
      var T = n(650583),
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
            a = (0, A.Ze)(!0).get("Backquote");
          O.log(e, {
            tags: {
              backquoteKey: r ?? "unknown",
              nativeBackquoteKey: a ?? "unknown",
              backquoteCode: `${(0, A.Q_)(r ?? "`")?.keyCode}`,
              nativeBackquoteCode: `${(0, A.Q_)(a ?? "`")?.keyCode}`,
            },
            extra: {
              keyCombo: t,
              combo: n,
              layoutMapBacktick: r,
              env: T.g$[(0, f._$)()],
              backtickEventShape: (0, A.Q_)("`"),
              backquoteKeyShape: (0, A.Q_)(r ?? "`"),
              nativeBackquoteKeyShape: (0, A.Q_)(a ?? "`"),
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
          let a =
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
                  [...t, [T.zY.KEYBOARD_KEY, i, (0, f._$)()]]));
          if (null == a) return N([], !1);
          if (y(a)) return N(a, !0);
          let l = (0, f.Z0)("shift"),
            s = (0, A.Q_)("`");
          return (
            0 === a.length
              ? R("Default overlay keybind combo is empty", r, a)
              : null == l
                ? R("Unable to get shift code", r, a, { shiftCode: l })
                : null == s && R("Unable to get backtick code", r, a),
            N(a, !1)
          );
        },
        D = {},
        v = {},
        b = 0,
        U = !0,
        M = {},
        P = !1,
        w = [
          I.hCu.PUSH_TO_TALK,
          I.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
          I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
        ],
        G = [];
      function V(e) {
        return e === L().id ? L() : v[e];
      }
      function F(e, t, n) {
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
          l().find(
            v,
            (t) => e.action === t.action && t.enabled && t.shortcut.length > 0,
          ) &&
          U &&
          !P &&
          (B(e), (P = !0));
      }
      function H() {
        let e = L();
        P && (x(e.id), (P = !1));
      }
      function x(e) {
        if (_.isPlatformEmbedded) p.Ay.inputEventUnregister(parseInt(e, 10));
        else {
          let t = D[e];
          if (null != t) {
            let n = v[e];
            if (null != n) {
              let e = M[n.action];
              e?.isPressed === !0 && m.nextTick(() => F(!1, e, n));
            }
            t.reset(), (D[e] = null);
          }
        }
      }
      function B(e) {
        if (!U || __OVERLAY__) return;
        let { shortcut: t, action: n, enabled: i } = e;
        if (0 === t.length || null == t || n === I.hCu.UNASSIGNED || !i) return;
        if (null == M[n])
          return void O.error(
            `[kb store] KeybindStore: Looking for callback action ${n} but it doesn't exist in this version. Skipping`,
          );
        let r = e.id,
          a = parseInt(r, 10);
        if (isNaN(a))
          return void O.error(
            "[kb store] KeybindStore: Keybind id is not a number. Skipping registration.",
            { keybind: e },
          );
        let l = M[n].keyEvents;
        e.action === I.hCu.TOGGLE_OVERLAY_INPUT_LOCK && H(),
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
              x(e.toString());
              let r = (0, c.I)(document);
              i.keyup && r.bindGlobal((0, f.dI)(t), () => n(!1), "keyup"),
                i.keydown && r.bindGlobal((0, f.dI)(t), () => n(!0), "keydown"),
                (D[e] = r);
            }
          })(
            a,
            t,
            (e) =>
              (function (e, t) {
                let n = V(e);
                if (null == n) return;
                let i = M[n.action]?.keyEvents;
                if (null == i) return;
                let r = M[n.action];
                if (i.keydown && i.keyup) {
                  null != r && F(t, M[n.action], n);
                  return;
                }
                G.push(e),
                  setTimeout(() => {
                    for (let t of G) {
                      if (t === e) continue;
                      let i = V(t);
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
                      null != r && F(t, r, n);
                    } finally {
                      setTimeout(() => {
                        G.includes(e) && G.splice(G.indexOf(e), 1);
                      }, 10);
                    }
                  }, 10);
              })(r, e),
            { focused: !0, blurred: !0, keydown: !1, keyup: !1, ...l },
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
        return (v = { ...v, [t.id]: t }), (b += 1), t;
      }
      function z(e) {
        x(e.id),
          (v = { ...v }),
          delete v[e.id],
          e.action === I.hCu.TOGGLE_OVERLAY_INPUT_LOCK && k();
      }
      function W(e) {
        let { keybind: t } = e;
        (v = { ...v, [t.id]: t }),
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
      function K(e, t) {
        let n =
          !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return (
          null ==
            l().find(v, (t) => t.action === e && (!n || t.managed === n)) &&
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
      let $ = [
        function () {
          let e = h.Ay.getShortcuts();
          return (
            l().each(v, (t) => {
              t.action === I.hCu.PUSH_TO_TALK &&
                !0 === t.managed &&
                (null == t.context || null == e[t.context]) &&
                z(t);
            }),
            l().reduce(
              h.Ay.getShortcuts(),
              (e, t, n) => {
                let i = l().find(
                  v,
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
                  W({
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
            K(I.hCu.TOGGLE_OVERLAY_INPUT_LOCK, C())
          );
        },
        function () {
          return (
            !!g.default.getAnyGlobalEnabledOverlay() &&
            K(I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, "]`")
          );
        },
        function () {
          var e;
          let t,
            n =
              ((e = I.hCu.SOUNDBOARD_HOLD),
              (t = !1),
              l().each(v, (n) => {
                n.action === e && !0 === n.managed && (z(n), (t = !0));
              }),
              t);
          return K(I.hCu.SOUNDBOARD_HOLD, "ctrl+`", !1) || n;
        },
        function () {
          return K(I.hCu.SAVE_CLIP, S.Ot);
        },
        function () {
          return K(I.hCu.SAVE_SCREENSHOT, S.sz);
        },
      ];
      function j() {
        return k(), $.reduce((e, t) => t() || e, !1);
      }
      d.A.setGetKeybindList(() => {
        let e = [];
        for (let t in v)
          v.hasOwnProperty(t) && e.push((0, f.dI)(v[t].shortcut));
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
            return l().reduce(
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
            return l().reduce(
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
            l().reduce(
              e,
              (e, t, n) =>
                t.action === I.hCu.TOGGLE_GO_LIVE_STREAMING && t.managed
                  ? e
                  : { ...e, [n]: t },
              {},
            ),
        ];
        initialize(e) {
          __OVERLAY__ || this.waitFor(h.Ay, g.default), (v = e ?? {});
        }
        getUserAgnosticState() {
          return v;
        }
        hasKeybind(e, t, n) {
          for (let i in v)
            for (let r of v[i].shortcut)
              if (r[0] === e && r[1] === t && (void 0 === n || n === r[2]))
                return !0;
          return !1;
        }
        hasExactKeybind(e) {
          for (let t in v) {
            let n = v[t];
            if (l().isEqual(n.shortcut, e)) return !0;
          }
          return !1;
        }
        getKeybindForAction(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return (
            l().find(
              v,
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
              n = v[t];
            __OVERLAY__ ||
              E.default.track(I.HAw.USER_SETTINGS_KEYBIND_UPDATED, {
                keybind_action: n.action,
                keybind_is_bound: !1,
                keybind_has_shortcut: !1,
              }),
              null != n && z(n);
          },
          KEYBINDS_SET_KEYBIND: W,
          KEYBINDS_ENABLE_ALL_KEYBINDS: function (e) {
            let { enable: t } = e;
            (U = t),
              t
                ? (d.A.enable(), l().forEach(v, B), k())
                : (d.A.disable(), l().forEach(v, (e) => x(e.id)), H());
          },
          KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: function (e) {
            let { keybinds: t } = e;
            (M = t),
              (D = {}),
              (b = 0),
              Object.values(v).filter((e) => w.includes(e.action) && e.managed)
                .length !== w.length && j(),
              l().forEach(v, (e) => {
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
        X = Z;
    },
    256415(e, t, n) {
      n.r(t), n.d(t, { default: () => H });
      var i = n(17928),
        r = n(506774),
        a = n(228366),
        l = n(350723),
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
        S = n(672396);
      let T = Object.freeze({
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
          textWidgetOpacity: S.Li.LOWER,
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
        D = new Set(),
        v = !1;
      function b(e) {
        let t = O[e];
        return null == t && (t = O[e] = { ...T }), t;
      }
      __OVERLAY__ && (0, d.u)((0, f.getRPCAuthToken)());
      let U = { ...T },
        M = new Set([
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
        P = new Set([
          ...M.values(),
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
          t = N.has((0, f.getPID)()) || D.size > 0;
        e && t ? (0, l.XC)(window, !0) : (0, l.XC)(window, !1);
      }
      function G() {
        if (m !== (0, f.getPID)()) return !1;
        D.clear();
      }
      function V(e) {
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
                          (a.h.dispatch({ type: "OVERLAY_INCOMPATIBLE_APP" }),
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
                          a.h.dispatch({ type: e.type, channel: t });
                          break;
                        case "CHANNEL_UPDATES":
                          a.h.dispatch({
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
                            a.h.dispatch(e);
                          break;
                        case "THREAD_LIST_SYNC":
                          a.h.dispatch({
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
                          a.h.dispatch({ type: "GUILD_CREATE", guild: i });
                          break;
                        case "USER_SETTINGS_PROTO_UPDATE":
                          a.h.dispatch({
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
                          a.h.dispatch(e);
                      }
                  })(e),
                ),
                (R = !1));
          }
      }
      let F = new Map();
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
              ...a
            } = { ...r.w.get("OverlayStore") };
            return { ...T, ...(5 === i ? a : null) };
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
              U = null != e ? b(e) : { ...T };
            }),
            __OVERLAY__ && N.delete((0, f.getPID)()),
            null != e)
          ) {
            O = e;
            let t = h.default.getId();
            null != t &&
              (null == (U = b(t)).textChatNotifications &&
                (U.textChatNotifications = T.textChatNotifications),
              null == U.textWidgetOpacity &&
                (U.textWidgetOpacity = T.textWidgetOpacity),
              null == U.disableClickableRegions &&
                (U.disableClickableRegions = T.disableClickableRegions));
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
          return D;
        }
        getTextWidgetOpacity() {
          return U.textWidgetOpacity;
        }
        isPreviewingInGame() {
          return v;
        }
        getTrackedGame(e) {
          return F.get(e) ?? null;
        }
      }
      let H = new k(a.h, {
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
          a.h.addInterceptor((e) => {
            if (R || !P.has(e.type)) return !1;
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
              !M.has(e.type)
            );
          }),
            (0, s.QZ)(V, (0, f.getRPCAuthToken)()),
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
                F.set(e.pid, e);
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
          t ? N.delete(n) : N.add(n), G(), w(), (v = !1);
        },
        OVERLAY_ACTIVATE_REGION: function (e) {
          let { region: t } = e;
          if (m !== (0, f.getPID)() || D.has(t)) return !1;
          D.add(t);
        },
        OVERLAY_DEACTIVATE_ALL_REGIONS: G,
        OVERLAY_SET_PREVIEW_IN_GAME_MODE: function (e) {
          v = e.isPreviewingInGame;
        },
        WINDOW_RESIZED: function () {
          if (__OVERLAY__) {
            let e = g.A.windowSize();
            (0, f.validResolution)(e) || (v = !1);
          }
        },
        OVERLAY_SET_ASSOCIATED_GAME: function (e) {
          N.delete(e.previousAssociatedGamePID);
        },
        OVERLAY_TRACKED_GAME_UPDATE: function (e) {
          __OVERLAY__ &&
            (null != e.trackedGame
              ? F.set(e.pid, e.trackedGame)
              : F.delete(e.pid));
        },
      });
    },
    836480(e, t, n) {
      n.d(t, { Q: () => s });
      var i = n(627968);
      n(64700);
      var r = n(661531),
        a = n(996682),
        l = n(27989);
      let s = (e) => {
        let {
            size: t = "md",
            width: n,
            height: s,
            color: o = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...u
          } = e,
          c = (0, l.J)(t),
          h = c?.width ?? n,
          E = c?.height ?? s;
        return (0, i.jsxs)("svg", {
          ...(0, a.A)(u),
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
    106451(e, t, n) {
      e.exports = {
        Xn: "shaker_e5f3a9",
        Ot: "premiumBrandRefreshBackground_e5f3a9",
      };
    },
    669414(e, t, n) {
      e.exports = {
        Uw: "staticGlow__1bd8a",
        j: "videoContainer__1bd8a",
        Ki: "video__1bd8a",
        R: "hidden__1bd8a",
        RK: "visible__1bd8a",
        ws: "entryAnimationContainer__1bd8a",
        j1: "wowMomentScaleIn__1bd8a",
        Dh: "wowMomentScaleSettle__1bd8a",
        aO: "exitAnimationContainer__1bd8a",
        El: "wowMomentExit__1bd8a",
        Gv: "staticWumpusWithTrinkets__1bd8a",
        Sh: "wowAnimation__1bd8a",
      };
    },
    653307(e, t, n) {
      e.exports = {
        Uu: "flex_abf706",
        CT: "alignStart_abf706",
        ZT: "alignEnd_abf706",
        Hu: "alignCenter_abf706",
        hx: "alignStretch_abf706",
        Ju: "alignBaseline_abf706",
        LF: "justifyStart_abf706",
        Ub: "justifyEnd_abf706",
        wq: "justifyCenter_abf706",
        aD: "justifyAround_abf706",
        LT: "justifyBetween_abf706",
        oA: "noWrap_abf706",
        LV: "wrap_abf706",
        Tt: "wrapReverse_abf706",
        Vd: "vertical_abf706",
        xM: "horizontal_abf706",
        tR: "flexCenter_abf706",
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
    409341(e, t, n) {
      e.exports = { i: "wrapper_a35ace" };
    },
    967744(e, t, n) {
      n.r(
        (e.exports = {
          outerContainer: "outerContainer__8a031",
          container: "container__8a031",
          "padding-size-sm": "padding-size-sm__8a031",
          "padding-size-lg": "padding-size-lg__8a031",
          "size-sm": "size-sm__8a031",
          "size-md": "size-md__8a031",
          maxHeightViewport: "maxHeightViewport__8a031",
          "size-lg": "size-lg__8a031",
          "size-xl": "size-xl__8a031",
          "size-xxl": "size-xxl__8a031",
          fullScreenOnMobile: "fullScreenOnMobile__8a031",
          section: "section__8a031",
          sectionHidden: "sectionHidden__8a031 section__8a031",
          header: "header__8a031",
          headerCentered: "headerCentered__8a031",
          headerLayout: "headerLayout__8a031",
          headerStepIndicator: "headerStepIndicator__8a031",
          headerGradient: "headerGradient__8a031",
          headerGraphic: "headerGraphic__8a031",
          headerGraphicContainer: "headerGraphicContainer__8a031",
          headerGraphicAnimated: "headerGraphicAnimated__8a031",
          headerLeading: "headerLeading__8a031",
          headerLeadingSpacer: "headerLeadingSpacer__8a031",
          headerTrailing: "headerTrailing__8a031",
          headerTrailingSpacer: "headerTrailingSpacer__8a031",
          headerLeadingAbsolute: "headerLeadingAbsolute__8a031",
          headerTrailingAbsolute: "headerTrailingAbsolute__8a031",
          headerMain: "headerMain__8a031",
          headerSubtitleWrapper: "headerSubtitleWrapper__8a031",
          headerSubtitleIcon: "headerSubtitleIcon__8a031",
          headerSubtitle: "headerSubtitle__8a031",
          headerTitle: "headerTitle__8a031",
          headerBadge: "headerBadge__8a031",
          body: "body__8a031",
          bodyList: "bodyList__8a031",
          bodySpacerTop: "bodySpacerTop__8a031",
          bodySpacerTopBorder: "bodySpacerTopBorder__8a031",
          bodySpacerBottom: "bodySpacerBottom__8a031",
          bodySpacerBottomBorder: "bodySpacerBottomBorder__8a031",
          bodyControls: "bodyControls__8a031",
          bodyControlsWithFade: "bodyControlsWithFade__8a031",
          bodyInner: "bodyInner__8a031",
          bodyInnerShouldScroll: "bodyInnerShouldScroll__8a031",
          footer: "footer__8a031",
          actionBar: "actionBar__8a031",
          actionBarLeading: "actionBarLeading__8a031",
          actionBarTrailing: "actionBarTrailing__8a031",
          actionButtonWrapper: "actionButtonWrapper__8a031",
          actionBarTrailingFullWidth: "actionBarTrailingFullWidth__8a031",
          actionBarCheckbox: "actionBarCheckbox__8a031",
          actionBarLayoutChatInput: "actionBarLayoutChatInput__8a031",
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
//# sourceMappingURL=10868.d6e04b7e4b312165.js.map
