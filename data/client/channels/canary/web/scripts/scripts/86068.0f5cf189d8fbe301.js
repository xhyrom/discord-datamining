"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86068"],
  {
    949189(e, t, E) {
      E.d(t, { O: () => r });
      function r(e) {
        let { useChannelObfuscation: t } = e;
        return t ? 1767421 : 1734653;
      }
    },
    353198(e, t, E) {
      E.d(t, { p: () => S });
      var r,
        S =
          (((r = {})[(r.DISPATCH = 0)] = "DISPATCH"),
          (r[(r.HEARTBEAT = 1)] = "HEARTBEAT"),
          (r[(r.IDENTIFY = 2)] = "IDENTIFY"),
          (r[(r.PRESENCE_UPDATE = 3)] = "PRESENCE_UPDATE"),
          (r[(r.VOICE_STATE_UPDATE = 4)] = "VOICE_STATE_UPDATE"),
          (r[(r.VOICE_SERVER_PING = 5)] = "VOICE_SERVER_PING"),
          (r[(r.RESUME = 6)] = "RESUME"),
          (r[(r.RECONNECT = 7)] = "RECONNECT"),
          (r[(r.REQUEST_GUILD_MEMBERS = 8)] = "REQUEST_GUILD_MEMBERS"),
          (r[(r.INVALID_SESSION = 9)] = "INVALID_SESSION"),
          (r[(r.HELLO = 10)] = "HELLO"),
          (r[(r.HEARTBEAT_ACK = 11)] = "HEARTBEAT_ACK"),
          (r[(r.CALL_CONNECT = 13)] = "CALL_CONNECT"),
          (r[(r.GUILD_SUBSCRIPTIONS = 14)] = "GUILD_SUBSCRIPTIONS"),
          (r[(r.STREAM_CREATE = 18)] = "STREAM_CREATE"),
          (r[(r.STREAM_DELETE = 19)] = "STREAM_DELETE"),
          (r[(r.STREAM_WATCH = 20)] = "STREAM_WATCH"),
          (r[(r.STREAM_PING = 21)] = "STREAM_PING"),
          (r[(r.STREAM_SET_PAUSED = 22)] = "STREAM_SET_PAUSED"),
          (r[(r.REQUEST_GUILD_APPLICATION_COMMANDS = 24)] =
            "REQUEST_GUILD_APPLICATION_COMMANDS"),
          (r[(r.REQUEST_FORUM_UNREADS = 28)] = "REQUEST_FORUM_UNREADS"),
          (r[(r.REMOTE_COMMAND = 29)] = "REMOTE_COMMAND"),
          (r[(r.GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH = 30)] =
            "GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH"),
          (r[(r.REQUEST_SOUNDBOARD_SOUNDS = 31)] = "REQUEST_SOUNDBOARD_SOUNDS"),
          (r[(r.REQUEST_LAST_MESSAGES = 34)] = "REQUEST_LAST_MESSAGES"),
          (r[(r.SEARCH_RECENT_MEMBERS = 35)] = "SEARCH_RECENT_MEMBERS"),
          (r[(r.GUILD_SUBSCRIPTIONS_BULK = 37)] = "GUILD_SUBSCRIPTIONS_BULK"),
          (r[(r.GUILD_CHANNELS_RESYNC = 38)] = "GUILD_CHANNELS_RESYNC"),
          (r[(r.REQUEST_CHANNEL_MEMBER_COUNT = 39)] =
            "REQUEST_CHANNEL_MEMBER_COUNT"),
          (r[(r.QOS_HEARTBEAT = 40)] = "QOS_HEARTBEAT"),
          (r[(r.UPDATE_TIME_SPENT_SESSION_ID = 41)] =
            "UPDATE_TIME_SPENT_SESSION_ID"),
          (r[(r.REQUEST_CHANNEL_INFO = 43)] = "REQUEST_CHANNEL_INFO"),
          r);
    },
    302495(e, t, E) {
      E.d(t, { p: () => a });
      var r = E(418781),
        S = E.n(r),
        _ = E(323125),
        T = E(901123),
        n = E(746080);
      function s(e, t) {
        let { optional: E = !1 } =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return new _.x(`:${S()(e)}(${t})${E ? "?" : ""}`);
      }
      let a = {
        guildId() {
          let { name: e = "guildId", optional: t = !1 } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            E = T.Cr.map(S()).join("|");
          return s(e, `${E}|\\d+`, { optional: t });
        },
        channelId() {
          let { name: e = "channelId", optional: t = !1 } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            E = [...n.qW].map(S()).join("|");
          return s(e, `${E}|\\d+`, { optional: t });
        },
      };
    },
    71931(e, t, E) {
      E.d(t, { C: () => r });
      let r = (0, E(132500).A)();
    },
    175259(e, t, E) {
      E.d(t, { c: () => r });
      function r() {
        return (
          ((Array.isArray(navigator.languages)
            ? navigator.languages[0]
            : null) ||
            navigator.language ||
            navigator.browserLanguage ||
            navigator.userLanguage) ??
          ""
        );
      }
    },
    362474(e, t, E) {
      let r;
      E.d(t, { u: () => r }), (r = E(28967).n);
    },
    28967(e, t, E) {
      let r;
      E.d(t, { n: () => _ });
      var S = E(973117);
      try {
        r = window.sessionStorage;
      } catch (e) {}
      try {
        delete window.sessionStorage;
      } catch (e) {}
      let _ = !(function () {
        let e = "test";
        try {
          return r.setItem(e, e), r.removeItem(e), !0;
        } catch (e) {
          return !1;
        }
      })()
        ? new S.J()
        : new (class {
            get(e, t) {
              let E = r.getItem(e);
              if (null != E)
                try {
                  E = JSON.parse(E);
                } catch (e) {
                  E = t;
                }
              else E = t;
              return E;
            }
            set(e, t) {
              r.setItem(e, JSON.stringify(t));
            }
            remove(e) {
              r.removeItem(e);
            }
            clear() {
              r.clear();
            }
          })();
    },
    973117(e, t, E) {
      let r;
      E.d(t, { J: () => _, n: () => T });
      let S = "__d6gp33cibjs";
      try {
        (r = window.localStorage),
          null == r && ((r = window[S]), delete window[S]);
      } catch (e) {}
      try {
        null != window.localStorage && (window[S] = window.localStorage),
          delete window.localStorage;
      } catch (e) {}
      class _ {
        storage;
        constructor() {
          this.storage = {};
        }
        get(e, t) {
          return this.storage.hasOwnProperty(e) ? this.storage[e] : t;
        }
        set(e, t) {
          this.storage[e] = t;
        }
        remove(e) {
          delete this.storage[e];
        }
        clear() {
          this.storage = {};
        }
        stringify() {
          return JSON.stringify(this.storage);
        }
        asyncGetRaw(e, t) {
          return Promise.resolve(this.getRaw(e));
        }
        getRaw(e) {
          return this.storage.hasOwnProperty(e) ? this.storage[e] : null;
        }
        setRaw(e, t) {
          this.storage[e] = t;
        }
        getAfterRefresh(e) {
          return Promise.resolve(this.get(e));
        }
      }
      let T = !(function () {
        let e = "test";
        try {
          return r.setItem(e, e), r.removeItem(e), !0;
        } catch (e) {
          return !1;
        }
      })()
        ? new _()
        : new (class {
            get(e, t) {
              let E = r.getItem(e);
              if (null != E)
                try {
                  E = JSON.parse(E);
                } catch (e) {
                  E = t;
                }
              else E = t;
              return E;
            }
            set(e, t) {
              r.setItem(e, JSON.stringify(t));
            }
            remove(e) {
              r.removeItem(e);
            }
            clear() {
              r.clear();
            }
            stringify() {
              return JSON.stringify(r || {});
            }
            asyncGetRaw(e, t) {
              return Promise.resolve(r.getItem(e));
            }
            getRaw(e) {
              return r.getItem(e);
            }
            setRaw(e, t) {
              r.setItem(e, t);
            }
            getAfterRefresh(e) {
              return Promise.resolve(this.get(e));
            }
          })();
    },
  },
]);
//# sourceMappingURL=86068.0f5cf189d8fbe301.js.map
