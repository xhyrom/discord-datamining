"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["28078"],
  {
    349445: function (e, t, n) {
      n.d(t, {
        SV: function () {
          return s;
        },
      });
      var i = n(470079);
      let r = (0, i.createContext)(null),
        o = { didCatch: !1, error: null };
      class s extends i.Component {
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
              var t, n, i = arguments.length, r = Array(i), s = 0;
              s < i;
              s++
            )
              r[s] = arguments[s];
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
            var r, s;
            null === (r = (s = this.props).onReset) ||
              void 0 === r ||
              r.call(s, { next: i, prev: e.resetKeys, reason: "keys" }),
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
            { didCatch: s, error: a } = this.state,
            l = e;
          if (s) {
            let e = { error: a, resetErrorBoundary: this.resetErrorBoundary };
            if ((0, i.isValidElement)(o)) l = o;
            else if ("function" == typeof t) l = t(e);
            else if (n) l = (0, i.createElement)(n, e);
            else throw a;
          }
          return (0, i.createElement)(
            r.Provider,
            {
              value: {
                didCatch: s,
                error: a,
                resetErrorBoundary: this.resetErrorBoundary,
              },
            },
            l,
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
    88658: function (e, t, n) {
      n.d(t, {
        $6: function () {
          return v;
        },
        YK: function () {
          return d;
        },
        _o: function () {
          return S;
        },
        ac: function () {
          return g;
        },
        bL: function () {
          return E;
        },
        g0: function () {
          return r;
        },
        gl: function () {
          return _;
        },
        rr: function () {
          return f;
        },
        xH: function () {
          return I;
        },
      });
      var i,
        r,
        o = n(695346),
        s = n(486472),
        a = n(430824);
      n(626135);
      var l = n(981631),
        c = n(689938);
      let u = 864e5 * l.eBq;
      function d() {
        let e = o.h2.getSetting();
        return (
          0 === s.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != a.Z.getGuild(e))),
          e
        );
      }
      function _() {
        let e = o.zA.getSetting();
        return (
          0 === s.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != a.Z.getGuild(e))),
          e
        );
      }
      function S() {
        let e = o.SE.getSetting();
        return (
          0 === s.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != a.Z.getGuild(e))),
          e
        );
      }
      function f() {
        let e = o.iH.getSetting();
        return (
          0 === s.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != a.Z.getGuild(e))),
          e
        );
      }
      function E(e) {
        return (e & l.HGf) === l.HGf
          ? { all: !0, mutualFriends: !0, mutualGuilds: !0 }
          : {
              all: !1,
              mutualFriends:
                (e & l.SOq.MUTUAL_FRIENDS) === l.SOq.MUTUAL_FRIENDS,
              mutualGuilds: (e & l.SOq.MUTUAL_GUILDS) === l.SOq.MUTUAL_GUILDS,
            };
      }
      function v(e, t) {
        return (
          !t.verified ||
          (null != e && u > Date.now() - new Date(e.created_at).getTime())
        );
      }
      ((i = r || (r = {}))[(i.UNDECIDED = 0)] = "UNDECIDED"),
        (i[(i.OPTIN = 1)] = "OPTIN"),
        (i[(i.OPTOUT = 2)] = "OPTOUT");
      let g = { 0: void 0, 1: !0, 2: !1 };
      function I() {
        return [
          {
            name: c.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_HEADER,
            desc: c.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_DESC,
            value: 1,
          },
          {
            name: c.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_HEADER,
            desc: c.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_DESC,
            value: 2,
          },
          {
            name: c.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_HEADER,
            desc: c.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_DESC,
            value: 0,
          },
        ];
      }
    },
    122967: function (e, t, n) {
      e.exports = {
        hoverRoll: "hoverRoll_e07331",
        forceHover: "forceHover_e07331",
        disabled: "disabled_e07331",
        default: "default_e07331",
        hovered: "hovered_e07331",
      };
    },
    900601: function (e, t, n) {
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
          return G;
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
        s = "([^aeiou][^aeiouy]*)",
        a = "(" + o + "[aeiou]*)",
        l = RegExp("^" + s + "?" + a + s),
        c = RegExp("^" + s + "?" + a + s + a + "?$"),
        u = RegExp("^" + s + "?(" + a + s + "){2,}"),
        d = RegExp("^" + s + "?" + o),
        _ = RegExp("^" + s + o + "[^aeiouwxy]$"),
        S = /ll$/,
        f = /^(.+?)e$/,
        E = /^(.+?)y$/,
        v = /^(.+?(s|t))(ion)$/,
        g = /^(.+?)(ed|ing)$/,
        I = /(at|bl|iz)$/,
        T = /^(.+?)eed$/,
        N = /^.+?[^s]s$/,
        h = /^.+?(ss|i)es$/,
        m = /([^aeiouylsz])\1$/,
        p =
          /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
        R = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
        C =
          /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
      function G(e) {
        let t,
          n = String(e).toLowerCase();
        if (n.length < 3) return n;
        let o = !1;
        return (
          121 === n.codePointAt(0) && ((o = !0), (n = "Y" + n.slice(1))),
          h.test(n) ? (n = n.slice(0, -2)) : N.test(n) && (n = n.slice(0, -1)),
          (t = T.exec(n))
            ? l.test(t[1]) && (n = n.slice(0, -1))
            : (t = g.exec(n)) &&
              d.test(t[1]) &&
              ((n = t[1]),
              I.test(n)
                ? (n += "e")
                : m.test(n)
                  ? (n = n.slice(0, -1))
                  : _.test(n) && (n += "e")),
          (t = E.exec(n)) && d.test(t[1]) && (n = t[1] + "i"),
          (t = p.exec(n)) && l.test(t[1]) && (n = t[1] + i[t[2]]),
          (t = R.exec(n)) && l.test(t[1]) && (n = t[1] + r[t[2]]),
          (t = C.exec(n))
            ? u.test(t[1]) && (n = t[1])
            : (t = v.exec(n)) && u.test(t[1]) && (n = t[1]),
          (t = f.exec(n)) &&
            (u.test(t[1]) || (c.test(t[1]) && !_.test(t[1]))) &&
            (n = t[1]),
          S.test(n) && u.test(n) && (n = n.slice(0, -1)),
          o && (n = "y" + n.slice(1)),
          n
        );
      }
    },
  },
]);
//# sourceMappingURL=8f786f50c0608fba9566.js.map
