"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54374"],
  {
    349445: function (e, t, n) {
      n.d(t, {
        SV: function () {
          return l;
        },
      });
      var i = n(470079);
      let r = (0, i.createContext)(null),
        o = { didCatch: !1, error: null };
      class l extends i.Component {
        constructor(e) {
          super(e),
            (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)),
            (this.state = o);
        }
        static getDerivedStateFromError(e) {
          return { didCatch: !0, error: e };
        }
        resetErrorBoundary() {
          let { error: e } = this.state;
          if (null !== e) {
            for (
              var t, n, i = arguments.length, r = Array(i), l = 0;
              l < i;
              l++
            )
              r[l] = arguments[l];
            null === (t = (n = this.props).onReset) ||
              void 0 === t ||
              t.call(n, { args: r, reason: "imperative-api" }),
              this.setState(o);
          }
        }
        componentDidCatch(e, t) {
          var n, i;
          null === (n = (i = this.props).onError) ||
            void 0 === n ||
            n.call(i, e, t);
        }
        componentDidUpdate(e, t) {
          let { didCatch: n } = this.state,
            { resetKeys: i } = this.props;
          if (
            n &&
            null !== t.error &&
            (function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [];
              return (
                e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]))
              );
            })(e.resetKeys, i)
          ) {
            var r, l;
            null === (r = (l = this.props).onReset) ||
              void 0 === r ||
              r.call(l, { next: i, prev: e.resetKeys, reason: "keys" }),
              this.setState(o);
          }
        }
        render() {
          let {
              children: e,
              fallbackRender: t,
              FallbackComponent: n,
              fallback: o,
            } = this.props,
            { didCatch: l, error: a } = this.state,
            s = e;
          if (l) {
            let e = { error: a, resetErrorBoundary: this.resetErrorBoundary };
            if ((0, i.isValidElement)(o)) s = o;
            else if ("function" == typeof t) s = t(e);
            else if (n) s = (0, i.createElement)(n, e);
            else throw a;
          }
          return (0, i.createElement)(
            r.Provider,
            {
              value: {
                didCatch: l,
                error: a,
                resetErrorBoundary: this.resetErrorBoundary,
              },
            },
            s,
          );
        }
      }
    },
    781402: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = n(470079);
      function r() {
        let e = (0, i.createContext)(void 0);
        return {
          Provider: ({ initialStore: t, createStore: n, children: r }) => {
            let o = (0, i.useRef)();
            return (
              !o.current &&
                (t &&
                  (console.warn(
                    "Provider initialStore is deprecated and will be removed in the next version.",
                  ),
                  !n && (n = () => t)),
                (o.current = n())),
              (0, i.createElement)(e.Provider, { value: o.current }, r)
            );
          },
          useStore: (t, n = Object.is) => {
            let r = (0, i.useContext)(e);
            if (!r)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor.",
              );
            return r(t, n);
          },
          useStoreApi: () => {
            let t = (0, i.useContext)(e);
            if (!t)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor.",
              );
            return (0, i.useMemo)(
              () => ({
                getState: t.getState,
                setState: t.setState,
                subscribe: t.subscribe,
                destroy: t.destroy,
              }),
              [t],
            );
          },
        };
      }
    },
    905423: function (e, t, n) {
      var i = n(266067),
        r = n(652874),
        o = n(731965),
        l = n(981631);
      function a(e) {
        let t = (0, i.LX)(null != e ? e : "", {
          path: l.Z5c.CHANNEL(":guildId", ":channelId?", ":messageId?"),
        });
        if (null != t) {
          let { guildId: e, channelId: n } = t.params;
          return {
            guildId: e === l.ME ? null : e,
            channelId: null != n ? n : null,
          };
        }
        let n = (0, i.LX)(null != e ? e : "", {
          path: l.Z5c.GUILD_BOOSTING_MARKETING(":guildId"),
        });
        return null != n
          ? { guildId: n.params.guildId, channelId: null }
          : { guildId: null, channelId: null };
      }
      t.Z = (0, r.Z)((e) => ({
        path: null,
        basePath: "/",
        guildId: null,
        channelId: null,
        updatePath(t) {
          let { guildId: n, channelId: i } = a(t);
          (0, o.j)(() => e({ path: t, guildId: n, channelId: i }));
        },
        resetPath(t) {
          let { guildId: n, channelId: i } = a(t);
          (0, o.j)(() =>
            e({ path: null, guildId: n, channelId: i, basePath: t }),
          );
        },
      }));
    },
    304445: function (e, t, n) {
      n(47120), n(411104);
      var i = n(572299),
        r = n(38618),
        o = n(905423),
        l = n(622143),
        a = n(703656);
      function s(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      t.Z = new (class e {
        initialize() {
          this.cleanup(),
            (this.unlistenHistory = (0, a.s1)().listen(this.handleRouteChange));
          let { pathname: e } = (0, a.s1)().location;
          o.Z.getState().resetPath(e),
            (this.unlistenKeyboardChange = o.Z.subscribe(
              this.handleKeybindRouteChange,
            )),
            r.Z.addChangeListener(this.handleConnectionChange);
        }
        executeRouteRewrites(e, t) {
          if (((this.routeChangeCount += 1), this.routeChangeCount < 10))
            for (let n of this.rewrites) {
              let r = (0, a.s1)().location.pathname,
                o = n(e, t);
              if (null != o)
                return (
                  (0, i.n)({
                    message:
                      "RouteManager.handleRouteChange: A route rewrite is replacing the current route",
                    data: { replacePath: o.path, previousPath: r },
                  }),
                  (0, a.dL)(o.path, o.state),
                  !0
                );
            }
          else
            throw Error(
              "RouteManager: Something has gone horribly wrong with rewrites",
            );
          return !1;
        }
        cleanup() {
          var e, t;
          null === (e = this.unlistenHistory) || void 0 === e || e.call(this),
            (this.unlistenHistory = void 0),
            null === (t = this.unlistenKeyboardChange) ||
              void 0 === t ||
              t.call(this),
            (this.unlistenKeyboardChange = void 0),
            r.Z.removeChangeListener(this.handleConnectionChange);
        }
        addRouteChangeListener(e) {
          return (
            null != this.unlistenHistory && e((0, a.s1)().location, "REPLACE"),
            this.listeners.add(e),
            () => this.removeRouteChangeListener(e)
          );
        }
        addRouteRewriter(e) {
          if (null != this.unlistenHistory) {
            let t = e((0, a.s1)().location, (0, a.s1)().action);
            null != t && (0, a.dL)(t.path, t.state);
          }
          return this.rewrites.add(e), () => this.removeRouteRewriter(e);
        }
        removeRouteChangeListener(e) {
          this.listeners.delete(e);
        }
        removeRouteRewriter(e) {
          this.rewrites.delete(e);
        }
        getHistory() {
          return (0, a.s1)();
        }
        constructor() {
          s(this, "unlistenHistory", void 0),
            s(this, "unlistenKeyboardChange", void 0),
            s(this, "rewrites", new Set()),
            s(this, "listeners", new Set()),
            s(this, "routeChangeCount", 0),
            s(this, "timer", -1),
            s(this, "connected", !1),
            s(this, "handleConnectionChange", () => {
              let e = r.Z.isConnected(),
                t = e && !this.connected;
              (this.connected = e),
                t &&
                  ((this.routeChangeCount = 0),
                  this.executeRouteRewrites((0, a.s1)().location, "REPLACE"));
            }),
            s(this, "handleRouteChange", (e, t) => {
              if (this.executeRouteRewrites(e, t)) return;
              let n = o.Z.getState();
              for (let i of (n.basePath !== e.pathname &&
                n.resetPath(e.pathname),
              this.listeners))
                try {
                  i(e, t);
                } catch (e) {
                  console.warn(
                    "RouteManager.listen: A route listener has caused an error",
                    e.message,
                  );
                }
              (0, l.r)(e), (this.routeChangeCount = 0);
            }),
            s(this, "handleKeybindRouteChange", (e) => {
              let { path: t } = e;
              null != t
                ? (clearTimeout(this.timer),
                  (this.timer = setTimeout(this.flushRoute, 200)))
                : null == t && clearTimeout(this.timer);
            }),
            s(this, "flushRoute", () => {
              clearTimeout(this.timer);
              let e = o.Z.getState();
              null != e.path && (0, a.uL)(e.path);
            });
        }
      })();
    },
    622143: function (e, t, n) {
      n.d(t, {
        r: function () {
          return i;
        },
      });
      function i(e) {}
    },
    977059: function (e, t, n) {
      n.d(t, {
        R: function () {
          return o;
        },
        S: function () {
          return r;
        },
      });
      let i = (0, n(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
      function r(e) {
        let { location: t } = e;
        return i.useExperiment({ location: t }, { autoTrackExposure: !0 });
      }
      function o(e) {
        let { location: t } = e;
        return i.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
      }
    },
    361207: function (e, t, n) {
      n.d(t, {
        DW: function () {
          return d;
        },
        Gn: function () {
          return f;
        },
        t3: function () {
          return h;
        },
        w4: function () {
          return u;
        },
      });
      var i = n(525654),
        r = n.n(i),
        o = n(271579),
        l = n(314897),
        a = n(981631);
      let s = "linux";
      function u(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 ? arguments[2] : void 0;
        return ""
          .concat(a.fzT.DESKTOP)
          .concat(t ? "/ptb" : "", "?platform=")
          .concat(e)
          .concat(null != n ? "&format=".concat(n) : "");
      }
      function c() {
        var e;
        let t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : null === (e = r().os) || void 0 === e
              ? void 0
              : e.family;
        return null == t
          ? "win"
          : -1 !== t.indexOf("Ubuntu") ||
              -1 !== t.indexOf("Debian") ||
              -1 !== t.indexOf("Fedora") ||
              -1 !== t.indexOf("Red Hat") ||
              -1 !== t.indexOf("SuSE") ||
              -1 !== t.indexOf("Linux")
            ? s
            : -1 !== t.indexOf("OS X")
              ? "osx"
              : "win";
      }
      function d(e) {
        return { win: "Windows", osx: "Mac", [s]: "Linux" }[c(e)];
      }
      function h() {
        let e = c();
        return u(e, !1, e === s ? "tar.gz" : null);
      }
      function f(e, t, n) {
        let i = null != n ? n.toString() : null;
        switch (t) {
          case "iOS":
            return (0, o.ZP)(
              null != i
                ? i
                : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746",
              {
                utmSource: e,
                fingerprint: l.default.getFingerprint(),
                attemptId: (0, o.WS)(),
              },
            );
          case "Android":
            return (0, o.ZP)(
              null != i ? i : "https://play.google.com/store/apps/details",
              {
                utmSource: e,
                id: "com.discord",
                fingerprint: l.default.getFingerprint(),
                attemptId: (0, o.WS)(),
              },
            );
          default:
            return null != i ? i : "https://www.discord.com";
        }
      }
    },
    88658: function (e, t, n) {
      n.d(t, {
        $6: function () {
          return m;
        },
        YK: function () {
          return d;
        },
        _o: function () {
          return f;
        },
        ac: function () {
          return S;
        },
        bL: function () {
          return _;
        },
        g0: function () {
          return r;
        },
        gl: function () {
          return h;
        },
        rr: function () {
          return g;
        },
        xH: function () {
          return p;
        },
      });
      var i,
        r,
        o = n(695346),
        l = n(486472),
        a = n(430824);
      n(626135);
      var s = n(981631),
        u = n(689938);
      let c = 864e5 * s.eBq;
      function d() {
        let e = o.h2.getSetting();
        return (
          0 === l.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != a.Z.getGuild(e))),
          e
        );
      }
      function h() {
        let e = o.zA.getSetting();
        return (
          0 === l.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != a.Z.getGuild(e))),
          e
        );
      }
      function f() {
        let e = o.SE.getSetting();
        return (
          0 === l.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != a.Z.getGuild(e))),
          e
        );
      }
      function g() {
        let e = o.iH.getSetting();
        return (
          0 === l.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != a.Z.getGuild(e))),
          e
        );
      }
      function _(e) {
        return (e & s.HGf) === s.HGf
          ? { all: !0, mutualFriends: !0, mutualGuilds: !0 }
          : {
              all: !1,
              mutualFriends:
                (e & s.SOq.MUTUAL_FRIENDS) === s.SOq.MUTUAL_FRIENDS,
              mutualGuilds: (e & s.SOq.MUTUAL_GUILDS) === s.SOq.MUTUAL_GUILDS,
            };
      }
      function m(e, t) {
        return (
          !t.verified ||
          (null != e && c > Date.now() - new Date(e.created_at).getTime())
        );
      }
      ((i = r || (r = {}))[(i.UNDECIDED = 0)] = "UNDECIDED"),
        (i[(i.OPTIN = 1)] = "OPTIN"),
        (i[(i.OPTOUT = 2)] = "OPTOUT");
      let S = { 0: void 0, 1: !0, 2: !1 };
      function p() {
        return [
          {
            name: u.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_HEADER,
            desc: u.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_DESC,
            value: 1,
          },
          {
            name: u.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_HEADER,
            desc: u.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_DESC,
            value: 2,
          },
          {
            name: u.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_HEADER,
            desc: u.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_DESC,
            value: 0,
          },
        ];
      }
    },
    207341: function (e, t, n) {
      e.exports = {
        hoverRoll: "hoverRoll_e07331",
        forceHover: "forceHover_e07331",
        disabled: "disabled_e07331",
        default: "default_e07331",
        hovered: "hovered_e07331",
      };
    },
    30352: function (e, t, n) {
      e.exports = {
        result: "result_e3c1c6",
        contentUnread: "contentUnread_e3c1c6 content_e3c1c6",
        contentDefault: "contentDefault_e3c1c6 content_e3c1c6",
        voiceSummaryContainer: "voiceSummaryContainer_e3c1c6",
        iconContainer: "iconContainer_e3c1c6",
        gameIcon: "gameIcon_e3c1c6",
        gameIconSize: "gameIconSize_e3c1c6",
        icon: "icon_e3c1c6",
        name: "name_e3c1c6",
        misc: "misc_e3c1c6",
        match: "match_e3c1c6",
        badge: "badge_e3c1c6",
        note: "note_e3c1c6",
        username: "username_e3c1c6",
        header: "header_e3c1c6",
        guildIconContainer: "guildIconContainer_e3c1c6 iconContainer_e3c1c6",
        guildIcon: "guildIcon_e3c1c6",
        dmIconContainer: "dmIconContainer_e3c1c6 iconContainer_e3c1c6",
        score: "score_e3c1c6",
      };
    },
    697741: function (e, t, n) {
      n.d(t, {
        $: function () {
          return N;
        },
      });
      let i = {
          ational: "ate",
          tional: "tion",
          enci: "ence",
          anci: "ance",
          izer: "ize",
          bli: "ble",
          alli: "al",
          entli: "ent",
          eli: "e",
          ousli: "ous",
          ization: "ize",
          ation: "ate",
          ator: "ate",
          alism: "al",
          iveness: "ive",
          fulness: "ful",
          ousness: "ous",
          aliti: "al",
          iviti: "ive",
          biliti: "ble",
          logi: "log",
        },
        r = {
          icate: "ic",
          ative: "",
          alize: "al",
          iciti: "ic",
          ical: "ic",
          ful: "",
          ness: "",
        },
        o = "[aeiouy]",
        l = "([^aeiou][^aeiouy]*)",
        a = "(" + o + "[aeiou]*)",
        s = RegExp("^" + l + "?" + a + l),
        u = RegExp("^" + l + "?" + a + l + a + "?$"),
        c = RegExp("^" + l + "?(" + a + l + "){2,}"),
        d = RegExp("^" + l + "?" + o),
        h = RegExp("^" + l + o + "[^aeiouwxy]$"),
        f = /ll$/,
        g = /^(.+?)e$/,
        _ = /^(.+?)y$/,
        m = /^(.+?(s|t))(ion)$/,
        S = /^(.+?)(ed|ing)$/,
        p = /(at|bl|iz)$/,
        v = /^(.+?)eed$/,
        E = /^.+?[^s]s$/,
        C = /^.+?(ss|i)es$/,
        I = /([^aeiouylsz])\1$/,
        R =
          /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
        T = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
        b =
          /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
      function N(e) {
        let t,
          n = String(e).toLowerCase();
        if (n.length < 3) return n;
        let o = !1;
        return (
          121 === n.codePointAt(0) && ((o = !0), (n = "Y" + n.slice(1))),
          C.test(n) ? (n = n.slice(0, -2)) : E.test(n) && (n = n.slice(0, -1)),
          (t = v.exec(n))
            ? s.test(t[1]) && (n = n.slice(0, -1))
            : (t = S.exec(n)) &&
              d.test(t[1]) &&
              ((n = t[1]),
              p.test(n)
                ? (n += "e")
                : I.test(n)
                  ? (n = n.slice(0, -1))
                  : h.test(n) && (n += "e")),
          (t = _.exec(n)) && d.test(t[1]) && (n = t[1] + "i"),
          (t = R.exec(n)) && s.test(t[1]) && (n = t[1] + i[t[2]]),
          (t = T.exec(n)) && s.test(t[1]) && (n = t[1] + r[t[2]]),
          (t = b.exec(n))
            ? c.test(t[1]) && (n = t[1])
            : (t = m.exec(n)) && c.test(t[1]) && (n = t[1]),
          (t = g.exec(n)) &&
            (c.test(t[1]) || (u.test(t[1]) && !h.test(t[1]))) &&
            (n = t[1]),
          f.test(n) && c.test(n) && (n = n.slice(0, -1)),
          o && (n = "y" + n.slice(1)),
          n
        );
      }
    },
  },
]);
//# sourceMappingURL=446f1f3fa5acf119bf3f.js.map
