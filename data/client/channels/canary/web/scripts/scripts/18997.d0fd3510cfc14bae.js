"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18997"],
  {
    465364(n, e, t) {
      t.d(e, {
        Ay: () => p,
        Le: () => c,
        Tz: () => y,
        jp: () => m,
        ko: () => d,
      }),
        t(380610);
      var o = t(833291);
      t(100392);
      var i = t(46054),
        l = t(659674),
        a = t(38405),
        r = t(652215);
      let s = new Set([r.Auw.IMAGE, r.Auw.GIFV]),
        u = new Set([
          "strong",
          "em",
          "u",
          "text",
          "inlineCode",
          "s",
          "spoiler",
        ]);
      function d(n, e) {
        let t = c({
            channelId: n.channel_id,
            messageId: n.id,
            renderOptions: e,
          }),
          o = null != n.webhookId;
        return {
          ...t,
          allowLinks: o || t.allowLinks,
          allowEmojiLinks: o,
          mentionChannels: n.mentionChannels,
          soundboardSounds: n.soundboardSounds ?? [],
        };
      }
      function c(n) {
        let { channelId: e, messageId: t, renderOptions: o } = n;
        return {
          channelId: e,
          messageId: t,
          allowLinks: !!o.allowLinks,
          allowDevLinks: !!o.allowDevLinks,
          allowTimeMentionInput: !!o.allowTimeMentionInput,
          formatInline: !!o.formatInline,
          noStyleAndInteraction: !!o.noStyleAndInteraction,
          allowHeading: !!o.allowHeading,
          allowList: !!o.allowList,
          previewLinkTarget: !!o.previewLinkTarget,
          disableAnimatedEmoji: !!o.disableAnimatedEmoji,
          allowEmojiLinks: !1,
          disableAutoBlockNewlines: !0,
          mentionChannels: [],
          soundboardSounds: [],
          muted: !1,
          unknownUserMentionPlaceholder: !0,
          viewingChannelId: o.viewingChannelId,
          forceWhite: !!o.forceWhite,
          textColor: o.textColor,
        };
      }
      function p(n) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (function (n, e, t) {
          let {
              toAST: i = !1,
              hideSimpleEmbedContent: r = !0,
              formatInline: c = !1,
              postProcessor: p,
              contentMessage: m,
            } = t,
            y = !1,
            h = !1,
            k = (m ?? e).content,
            A = n(k, !0, d(e, t), (n, t, i) => {
              var d, A, g;
              let b;
              return (
                (h = i ?? !1),
                Array.isArray(n) || (n = [n]),
                h &&
                  (n = [
                    {
                      type: "text",
                      content: k,
                      originalMatch: { index: 0, 0: k },
                    },
                  ]),
                r &&
                  (n = (function (n, e) {
                    if (1 !== n.length || 1 !== e.length) return n;
                    let t = n[0],
                      o = e[0];
                    return ("link" === t.type || "attachmentLink" === t.type) &&
                      s.has(o.type) &&
                      (0, l.NV)(o)
                      ? []
                      : n;
                  })(n, (m ?? e).embeds)),
                c ||
                  ((d = n),
                  (n = t
                    ? w(d)
                    : ("paragraph" === d[0].type &&
                        d[0].content instanceof Array &&
                        (d[0].content = w(d[0].content)),
                      d))),
                (b = (A = n).some((n) => "link" !== n.type)),
                (n = A.filter((n) => {
                  let e = "link" === n.type,
                    t = null != n.target ? (0, o.ts)(n.target) : null;
                  return !(e && null != t && !b);
                })),
                e.embeds.length > 0 &&
                  ((g = n),
                  (y = t
                    ? f(g)
                    : "paragraph" === g[0].type &&
                      g[0].content instanceof Array &&
                      f(g[0].content))),
                c &&
                  (n = (function n(e) {
                    return (
                      e.forEach((e) => {
                        u.has(e.type) &&
                          null != e.content &&
                          (Array.isArray(e.content)
                            ? n(e.content)
                            : "string" == typeof e.content
                              ? (e.content = e.content.replace(/\n/g, " "))
                              : a.A.captureMessage(
                                  `AST node type:${e.type} with content typeof ${typeof e.content}. Keys ${Object.keys(e)}`,
                                ));
                      }),
                      e
                    );
                  })(n)),
                null != p && (n = p(n, t)),
                n
              );
            });
          return { hasSpoilerEmbeds: y, hasBailedAst: h, content: A };
        })(e.formatInline ? i.A.parseInlineReply : i.A.parse, n, e);
      }
      function m(n, e) {
        let t =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return (function (n, e) {
          arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          let { content: t, guildId: o, channelId: i } = e;
          return n(
            t,
            !0,
            {
              allowLinks: !1,
              allowDevLinks: !1,
              allowEmojiLinks: !1,
              mentionChannels: [],
              soundboardSounds: [],
              formatInline: !0,
              noStyleAndInteraction: !1,
              allowHeading: !1,
              allowList: !1,
              disableAutoBlockNewlines: !0,
              previewLinkTarget: !1,
              disableAnimatedEmoji: !0,
              guildId: o,
              channelId: i,
              muted: !1,
              disablePressableChannelMention: !0,
            },
            (n) => (Array.isArray(n) || (n = [n]), n),
          );
        })(n, e, t);
      }
      function y(n, e, t) {
        return (0, i.A.parseAutoModerationSystemMessage)(
          n,
          !0,
          {
            allowLinks: !1,
            allowDevLinks: !1,
            allowEmojiLinks: !1,
            mentionChannels: [],
            soundboardSounds: [],
            formatInline: !1,
            noStyleAndInteraction: !1,
            allowHeading: !1,
            allowList: !1,
            disableAutoBlockNewlines: !0,
            highlightWord: e,
            disableAnimatedEmoji: !1,
            channelId: t,
            muted: !1,
          },
          (n) => (Array.isArray(n) || (n = [n]), n),
        );
      }
      function w(n) {
        if (
          n.some(
            (n) =>
              "emoji" !== n.type &&
              "customEmoji" !== n.type &&
              "soundboard" !== n.type &&
              ("string" != typeof n.content || "" !== n.content.trim()),
          )
        )
          return n;
        let e = 0;
        return (
          n.forEach((n) => {
            if (
              (("emoji" === n.type ||
                "customEmoji" === n.type ||
                "soundboard" === n.type) &&
                (e += 1),
              e > 30)
            )
              return !1;
          }),
          e > 30 ||
            n.forEach((n) => {
              n.jumboable = !0;
            }),
          n
        );
      }
      function h(n, e) {
        if (n instanceof Array) return n.some((n) => h(n, e));
        let t = e(n);
        return null != t
          ? t
          : n.content instanceof Array
            ? h(n.content, e)
            : n.items instanceof Array && n.items.some((n) => h(n, e));
      }
      function f(n) {
        return h(n, (n) =>
          "spoiler" === n.type
            ? h(
                n,
                (n) => "link" === n.type || "attachmentLink" === n.type || null,
              )
            : null,
        );
      }
    },
  },
]);
//# sourceMappingURL=18997.d0fd3510cfc14bae.js.map
