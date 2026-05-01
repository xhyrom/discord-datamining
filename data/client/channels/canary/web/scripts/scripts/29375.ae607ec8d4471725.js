"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["29375"],
  {
    414798(e, t, n) {
      n.d(t, { A: () => i });
      var r = n(228366);
      let i = {
        startTyping(e) {
          r.h.dispatch({ type: "TYPING_START_LOCAL", channelId: e });
        },
        stopTyping(e) {
          r.h.dispatch({ type: "TYPING_STOP_LOCAL", channelId: e });
        },
      };
    },
    609136(e, t, n) {
      n.d(t, { A: () => x });
      var r = n(284009),
        i = n.n(r),
        l = n(155718),
        s = n(224868),
        u = n(773669),
        a = n(522602),
        c = n(360161),
        o = n(258363),
        m = n(168186),
        d = n(985018);
      let f = {
          [l.n4.SUB_COMMAND]: () => ({ success: !1 }),
          [l.n4.SUB_COMMAND_GROUP]: () => ({ success: !1 }),
          [l.n4.BOOLEAN]: (e) => {
            if ("text" !== e.type) return { success: !1 };
            let t = e.text.trim();
            return { success: null != (0, c.a5)(t) };
          },
          [l.n4.STRING]: (e, t, n) => {
            let r;
            switch (
              (i()(
                t.type === l.n4.STRING,
                "option type must match validator type",
              ),
              e.type)
            ) {
              case "emoji":
                r = e.surrogate;
                break;
              case "text":
                r = e.text.trim();
                break;
              default:
                return { success: !1 };
            }
            if (null != t.choices)
              return { success: null != (0, c.$7)(t.choices, r) };
            if (t.autocomplete && null != (0, c.Xf)(n, t.name, r))
              return { success: !0 };
            let s = r;
            if (void 0 !== t.minLength || void 0 !== t.maxLength) {
              if (null == s) return { success: !1 };
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
                      error: d.intl.formatToPlainString(
                        n.exactRangeErrorMessage,
                        { value: h(t.minLength) },
                      ),
                    };
                  else if (void 0 !== t.maxLength && void 0 !== t.minLength)
                    return {
                      success: !1,
                      error: d.intl.formatToPlainString(n.rangeErrorMessage, {
                        minimum: h(t.minLength),
                        maximum: h(t.maxLength),
                      }),
                    };
                  else if (void 0 !== t.minLength)
                    return {
                      success: !1,
                      error: d.intl.formatToPlainString(n.minErrorMessage, {
                        minimum: h(t.minLength),
                      }),
                    };
                  else if (void 0 !== t.maxLength)
                    return {
                      success: !1,
                      error: d.intl.formatToPlainString(n.maxErrorMessage, {
                        maximum: h(t.maxLength),
                      }),
                    };
                }
                return { success: !0 };
              })(s, t, {
                exactRangeErrorMessage: d.t["e+9/SY"],
                rangeErrorMessage: d.t.IE1sTh,
                minErrorMessage: d.t.rXAFQD,
                maxErrorMessage: d.t["ycEPx/"],
              });
              if (!e.success) return e;
            }
            return { success: !0 };
          },
          [l.n4.INTEGER]: (e, t, n) => {
            i()(
              t.type === l.n4.INTEGER,
              "option type must match validator type",
            );
            let r = "text" === e.type ? e.text.trim() : null;
            if (null == r || 0 === r.length) return { success: !1 };
            if (null != t.choices)
              return { success: null != (0, c.Bk)(t.choices, r) };
            if (t.autocomplete && null != (0, c.lM)(n, t.name, r))
              return { success: !0 };
            let s = Number(o.normalizeNumericString(u.default.locale, r));
            return null == s ||
              isNaN(s) ||
              !Number.isInteger(s) ||
              !Number.isSafeInteger(s)
              ? { success: !1 }
              : g(s, t, d.t["8Y5zsp"], d.t.CyRLmH, d.t["VD3Q+S"]);
          },
          [l.n4.NUMBER]: (e, t, n) => {
            i()(
              t.type === l.n4.NUMBER,
              "option type must match validator type",
            );
            let r = "text" === e.type ? e.text.trim() : null;
            if (null == r || 0 === r.length) return { success: !1 };
            if (null != t.choices)
              return { success: null != (0, c.Bk)(t.choices, r) };
            if (t.autocomplete && null != (0, c.lM)(n, t.name, r))
              return { success: !0 };
            let s = Number(o.normalizeNumericString(u.default.locale, r));
            return isNaN(s) ||
              s > Number.MAX_SAFE_INTEGER ||
              s < Number.MIN_SAFE_INTEGER
              ? { success: !1 }
              : g(s, t, d.t["8Y5zsp"], d.t.CyRLmH, d.t["VD3Q+S"]);
          },
          [l.n4.USER]: (e, t, n, r) => {
            if ("text" !== e.type) return { success: "userMention" === e.type };
            {
              if ((0, m.hT)(e.text)) return { success: !0 };
              let t = (0, s.f)(e.text, r, n, { allowRoles: !1 });
              return { success: t?.type === "userMention" };
            }
          },
          [l.n4.CHANNEL]: (e, t, n, r) => {
            if ("text" !== e.type)
              return { success: "channelMention" === e.type };
            {
              if ((0, m.hT)(e.text)) return { success: !0 };
              let t = (0, s.f)(e.text, r, n);
              return { success: t?.type === "channelMention" };
            }
          },
          [l.n4.ROLE]: (e, t, n, r) => {
            if ("text" !== e.type) return { success: p(e) };
            {
              if ((0, m.hT)(e.text)) return { success: !0 };
              let t = (0, s.f)(e.text, r, n, { allowUsers: !1 });
              return { success: t?.type === "roleMention" };
            }
          },
          [l.n4.MENTIONABLE]: (e, t, n, r) => {
            if ("text" !== e.type)
              return { success: "userMention" === e.type || p(e) };
            {
              if ((0, m.hT)(e.text)) return { success: !0 };
              let t = (0, s.f)(e.text, r, n);
              return {
                success: null != t && ("userMention" === t.type || p(t)),
              };
            }
          },
          [l.n4.ATTACHMENT]: (e, t, n, r, i) => {
            if ("text" !== e.type) return { success: !1 };
            let l = a.A.getUpload(n, t.name, (0, m.Qr)(i));
            return { success: null != l && l.filename === e.text };
          },
        },
        p = (e) =>
          "roleMention" === e.type ||
          ("textMention" === e.type && "@everyone" === e.text);
      function g(e, t, n, r, i) {
        if (
          (null != t.minValue && e < t.minValue) ||
          (null != t.maxValue && e > t.maxValue)
        ) {
          if (null != t.maxValue && null != t.minValue)
            return {
              success: !1,
              error: d.intl.formatToPlainString(n, {
                minimum: h(t.minValue),
                maximum: h(t.maxValue),
              }),
            };
          else if (null != t.minValue)
            return {
              success: !1,
              error: d.intl.formatToPlainString(r, { minimum: h(t.minValue) }),
            };
          else if (null != t.maxValue)
            return {
              success: !1,
              error: d.intl.formatToPlainString(i, { maximum: h(t.maxValue) }),
            };
        }
        return { success: !0 };
      }
      function h(e) {
        return e.toLocaleString(d.intl.currentLocale, { useGrouping: !1 });
      }
      let x = f;
    },
    323350(e, t, n) {
      n.d(t, { IQ: () => x, WO: () => g }), n(321073);
      var r = n(284009),
        i = n.n(r),
        l = n(47167),
        s = n(379418),
        u = n(209932),
        a = n(734057),
        c = n(317525),
        o = n(994500),
        m = n(967198),
        d = n(287809),
        f = n(427262),
        p = n(820066);
      function g(e, t) {
        let {
            mode: n,
            ignoreTrailingEmptyNodes: r,
            preventEmojiSurrogates: i,
          } = t ?? {},
          [l, s] = t?.range != null ? p.ZF.edges(t.range) : [void 0, void 0];
        return h(e, {
          mode: n,
          start: l,
          end: s,
          ignoreTrailingEmptyNodes: r,
          preventEmojiSurrogates: i,
        });
      }
      function h(e, t) {
        let {
            mode: n,
            start: r,
            end: i,
            separator: l,
            ignoreEmptyNodes: s,
            ignoreTrailingEmptyNodes: u,
            preventEmojiSurrogates: a,
          } = t ?? {},
          c = e.length > 0 && !p.l5.isText(e[0]);
        null == l && (l = c ? "\n" : "");
        let o = r?.path[0] ?? 0,
          m = i?.path[0] ?? e.length - 1;
        if (u)
          for (let t = m; t >= o; t--) {
            let n = e[t];
            if (p.l5.isText(n)) {
              if (n.text.length > 0) {
                m = t;
                break;
              }
            } else if (!p.cv.isEmpty(n)) {
              m = t;
              break;
            }
            if (t === o) return "";
          }
        let d = o > 0 && p.AS.isType(e[o - 1], "blockQuote"),
          f = p.AS.isType(e[o], "blockQuote"),
          g = p.AS.isType(e[m], "blockQuote"),
          h = [];
        for (let t = o; t <= m; t++) {
          let l = e[t];
          if (s && p.l5.isText(l) && 0 === l.text.length) continue;
          let u = x(l, {
            mode: n,
            start:
              null != r && t === o
                ? { path: r.path.slice(1), offset: r.offset }
                : void 0,
            end:
              null != i && t === m
                ? { path: i.path.slice(1), offset: i.offset }
                : void 0,
            allowBlockQuotePrefix: null == r || null == i || (!d && (!f || g)),
            preventEmojiSurrogates: a,
          });
          (!s || u.length > 0) && h.push(u);
        }
        return h.join(l);
      }
      function x(e, t) {
        let {
          mode: n,
          start: r,
          allowBlockQuotePrefix: g = !1,
          preventEmojiSurrogates: x = !1,
        } = t ?? {};
        if (p.l5.isText(e))
          return (function (e, t) {
            let { start: n, end: r } = t ?? {};
            return (
              i()(
                null == n || 0 === n.path.length,
                "Invalid start provided to serializeText",
              ),
              i()(
                null == r || 0 === r.path.length,
                "Invalid end provided to serializeText",
              ),
              e.substring(n?.offset ?? 0, r?.offset ?? e.length)
            );
          })(e.text, t);
        switch (e.type) {
          case "line":
          case "testInline":
            return h(e.children, t);
          case "testInlineVoid":
            return "";
          case "blockQuote": {
            let n = h(e.children, t),
              i =
                null != r &&
                1 === r.path.length &&
                0 === r.path[0] &&
                0 === r.offset;
            if (g && (null == r || i)) return `> ${n}`;
            return n;
          }
          case "emoji": {
            let t = e.emoji;
            if (!x && null != t.surrogate) return t.surrogate;
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
            let r = a.A.getChannel(e.channelId);
            if (null == r) return t;
            return (0, l.m1)(r, d.default, o.A, !0, !0);
          }
          case "soundboard": {
            let t = `<sound:${e.guildId}:${e.soundId}>`;
            if ("raw" === n) return t;
            let r = u.A.getSoundById(e.soundId);
            if (null == r) return t;
            return r.name;
          }
          case "staticRouteLink":
            return null != e.itemId
              ? `<id:${e.id}:${e.itemId}>`
              : `<id:${e.id}>`;
          case "roleMention": {
            let t = `<@&${e.roleId}>`;
            if ("raw" === n) return t;
            let r = m.A.getGuildId(),
              i = null != r ? c.A.getRole(r, e.roleId) : void 0;
            if (null == i) return t;
            return `@${i.name}`;
          }
          case "userMention": {
            let t = `<@${e.userId}>`;
            if ("raw" === n) return t;
            let r = d.default.getUser(e.userId);
            if (null == r) return t;
            return `@${f.Ay.getUserTag(r, { decoration: "never" })}`;
          }
          case "commandMention":
            return `</${e.commandName}:${e.commandId}>`;
          case "timestamp":
            return (0, s.tf)(e.parsed.timestamp, e.parsed.format);
          case "timestampMentionInput": {
            let n = h(e.children, t);
            if (null == r) return `<@time:${n}>`;
            return n;
          }
          case "applicationCommand":
            return h(e.children, {
              ...t,
              separator: " ",
              ignoreEmptyNodes: !0,
            });
          case "applicationCommandOption": {
            let n = h(e.children, t);
            if (null == r) return `${e.optionDisplayName}:${n}`;
            return n;
          }
        }
      }
    },
    121780(e, t, n) {
      n.d(t, { A: () => c });
      var r = n(17928),
        i = n(228366),
        l = n(518977);
      let s = null;
      function u(e) {
        let { countryCode: t } = e;
        null != t && (s = (0, l.XF)(t) ?? (0, l.rE)());
      }
      class a extends r.Ay.Store {
        static displayName = "LocationMetadataStore";
        getCountryCode() {
          return s;
        }
      }
      let c = new a(i.h, { CONNECTION_OPEN: u, SET_LOCATION_METADATA: u });
    },
    565688(e, t, n) {
      n.d(t, { m: () => i, w: () => l });
      let r = (0, n(945810).mj)({
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
      function i(e) {
        let { location: t } = e;
        return r.useConfig({ location: t }).voiceChannelActivitiesEnabled;
      }
      function l(e) {
        let { location: t } = e;
        return r.useConfig({ location: t }).guildActivitiesEnabled;
      }
    },
  },
]);
//# sourceMappingURL=29375.ae607ec8d4471725.js.map
