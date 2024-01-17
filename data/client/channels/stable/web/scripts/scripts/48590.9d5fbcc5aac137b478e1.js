(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["48590"], {
        375822: function(e, t, l) {
            "use strict";
            var n, a, r, i, u, o;
            l.r(t), l.d(t, {
                HeaderRecord: function() {
                    return s
                },
                FindResultDirections: function() {
                    return n
                },
                AutocompleterResultTypes: function() {
                    return a
                },
                AutocompleterQuerySymbols: function() {
                    return r
                }
            });
            class s {
                constructor(e) {
                    this.id = e, this.text = e
                }
            }(i = n || (n = {})).UP = "UP", i.DOWN = "DOWN", (u = a || (a = {})).GUILD = "GUILD", u.TEXT_CHANNEL = "TEXT_CHANNEL", u.GROUP_DM = "GROUP_DM", u.VOICE_CHANNEL = "VOICE_CHANNEL", u.USER = "USER", u.HEADER = "HEADER", u.APPLICATION = "APPLICATION", u.SKU = "SKU", u.LINK = "LINK", (o = r || (r = {})).USER = "@", o.TEXT_CHANNEL = "#", o.VOICE_CHANNEL = "!", o.GUILD = "*", o.APPLICATION = "$"
        },
        195547: function(e, t, l) {
            "use strict";

            function n(e, t) {
                if (e.score === t.score) {
                    var l, n, a, r, i, u;
                    let o = null !== (r = null !== (a = e.sortable) && void 0 !== a ? a : null === (l = e.comparator) || void 0 === l ? void 0 : l.toLocaleLowerCase()) && void 0 !== r ? r : "",
                        s = null !== (u = null !== (i = e.sortable) && void 0 !== i ? i : null === (n = t.comparator) || void 0 === n ? void 0 : n.toLocaleLowerCase()) && void 0 !== u ? u : "";
                    if (o < s) return -1;
                    if (o > s) return 1
                }
                return t.score - e.score
            }
            l.r(t), l.d(t, {
                default: function() {
                    return n
                }
            })
        },
        966506: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("42203"),
                a = l("49111");

            function r(e) {
                if (null == e.parent_id) return e.type === a.ChannelTypes.GUILD_CATEGORY ? (e.position + 1) * 1e3 : e.position;
                {
                    var t, l;
                    let a = ((null !== (l = null === (t = n.default.getChannel(e.parent_id)) || void 0 === t ? void 0 : t.position) && void 0 !== l ? l : 0) + 1) * 1e3;
                    return e.isGuildVocal() ? a + e.position + 500 : a + e.position
                }
            }

            function i(e, t) {
                var l, n, a, i, u, o;
                if (e.score !== t.score) return t.score - e.score;
                let s = r(e.record),
                    c = r(t.record);
                if (s !== c) return s - c;
                let d = null !== (i = null !== (a = e.sortable) && void 0 !== a ? a : null === (l = e.comparator) || void 0 === l ? void 0 : l.toLocaleLowerCase()) && void 0 !== i ? i : "",
                    f = null !== (o = null !== (u = e.sortable) && void 0 !== u ? u : null === (n = t.comparator) || void 0 === n ? void 0 : n.toLocaleLowerCase()) && void 0 !== o ? o : "";
                return d < f ? -1 : d > f ? 1 : 0
            }
        },
        860285: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            }), l("222007");
            var n = l("446674"),
                a = l("913144");
            let r = new Set,
                i = {};

            function u(e) {
                let {
                    applicationId: t
                } = e;
                r.add(t)
            }

            function o(e) {
                let {
                    applicationId: t
                } = e;
                r.delete(t)
            }
            class s extends n.default.Store {
                get launchingGames() {
                    return r
                }
                get launchableGames() {
                    return i
                }
                isLaunchable(e) {
                    return null != i[e] ? i[e] : (i[e] = !1, a.default.dispatch({
                        type: "CHECK_LAUNCHABLE_GAME",
                        gameId: e
                    }), !1)
                }
            }
            s.displayName = "LaunchableGameStore";
            var c = new s(a.default, {
                GAME_LAUNCHABLE_UPDATE: function(e) {
                    let {
                        gameId: t,
                        isLaunchable: l
                    } = e;
                    i[t] = l
                },
                GAME_CLOUD_SYNC_START: u,
                GAME_LAUNCH_START: u,
                GAME_LAUNCH_SUCCESS: o,
                GAME_LAUNCH_FAIL: o,
                GAME_CLOUD_SYNC_CONFLICT: o,
                GAME_CLOUD_SYNC_ERROR: o,
                GAME_CLOUD_SYNC_COMPLETE: o
            })
        },
        361776: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                },
                isGuildOnboardingAvailable: function() {
                    return u
                }
            });
            var n = l("446674"),
                a = l("38654"),
                r = l("49111");

            function i(e) {
                let t = (0, n.useStateFromStores)([a.default], () => {
                    if ((null == e ? void 0 : e.id) == null) return !1;
                    let t = a.default.isFullServerPreview(e.id),
                        l = a.default.isOnboardingEnabled(e.id);
                    return t && l
                });
                return t || (null == e ? void 0 : e.hasFeature(r.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS))
            }

            function u(e) {
                if (null == e) return !1;
                let t = a.default.isFullServerPreview(e.id),
                    l = a.default.isOnboardingEnabled(e.id);
                return t && l || e.hasFeature(r.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS)
            }
        },
        884351: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return Q
                }
            }), l("222007"), l("808653"), l("424973"), l("881410");
            var n = l("917351"),
                a = l.n(n),
                r = l("132710"),
                i = l.n(r),
                u = l("679653"),
                o = l("385976"),
                s = l("867805"),
                c = l("252931"),
                d = l("888198"),
                f = l("290689"),
                p = l("804888"),
                E = l("401690"),
                h = l("845579"),
                g = l("42203"),
                m = l("923959"),
                A = l("26989"),
                L = l("305961"),
                y = l("957255"),
                C = l("27618"),
                S = l("102985"),
                N = l("697218"),
                _ = l("25292"),
                T = l("402671"),
                I = l("158998"),
                R = l("49111"),
                v = l("958706"),
                b = l("782340");

            function U(e, t, l) {
                let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                if (t[0] !== e) return null;
                let a = t.substr(e.length);
                return l.sortBy(e => {
                    let {
                        text: t
                    } = e;
                    return -t.length
                }).filter(e => {
                    let {
                        text: l
                    } = e;
                    return 1 === t.toLowerCase().indexOf(l.toLowerCase())
                }).sortBy(e => {
                    let {
                        text: t
                    } = e;
                    return t === a ? 0 : 1
                }).map(t => {
                    let {
                        id: l,
                        text: a
                    } = t;
                    return [e + a, l, n]
                }).first()
            }

            function M(e) {
                return {
                    order: e.order,
                    match: e.match,
                    parse: t => ({
                        type: e.type,
                        content: t[0]
                    })
                }
            }

            function O(e) {
                return {
                    match: i.anyScopeRegex(e),
                    parse: e => ({
                        type: "text",
                        content: e[0]
                    })
                }
            }
            let G = d.default.RULES,
                D = f.default,
                w = /^<@!?(\d+)>/,
                P = /^<@&(\d+)>/,
                x = /^<#(\d+)>/,
                k = /^<a?:(\w+):(\d+)>/,
                F = /(@everyone|@here|@Clyde)\b/,
                H = {
                    link: M(i.defaultRules.link),
                    autolink: M(i.defaultRules.autolink),
                    url: M(i.defaultRules.url),
                    inlineCode: M(G.inlineCode),
                    codeBlock: M(G.codeBlock),
                    rawUserMention: O(w),
                    rawRoleMention: O(P),
                    rawChannelMention: O(x),
                    rawEmoji: O(k),
                    mention: {
                        match(e, t, l) {
                            let n = l.split(" ").pop() + e;
                            if (/^[^ ]+@[^ ]+\.[^ .]+/.test(n)) return null;
                            let a = U("@", e, t.users, "mention");
                            if (a || (a = U("@", e, t.mentionableRoles, "roleMention"))) return a;
                            let r = t.users.map(e => ({
                                ...e,
                                text: e.text.split("#")[0]
                            }));
                            if (!(a = U("@", e, r, "mention"))) return null;
                            let i = F.exec(e);
                            if (null != i && a[0].length <= i[0].length) return null;
                            if ("" === l && (0, p.canSuppressNotifications)()) {
                                let t = p.SILENT_RE.exec(e);
                                if (null != t && a[0].length <= t[0].length) return null
                            }
                            return a
                        },
                        parse(e) {
                            let [, t, l] = e, n = "@";
                            return "roleMention" === l && (n += "&"), {
                                type: l,
                                content: "<".concat(n).concat(t, ">")
                            }
                        }
                    },
                    channel: {
                        match: (e, t) => (function(e, t, l) {
                            let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                            if (t[0] !== e) return null;
                            if ('"' !== t[1]) return U(e, t, l, n);
                            let a = 2;
                            for (; a < t.length; a++) {
                                if ("\\" === t[a]) {
                                    a++;
                                    continue
                                }
                                if ('"' === t[a]) break
                            }
                            let r = t.substring(0, a + 1),
                                i = (0, u.unescapeChannelName)(t.substring(2, a));
                            return l.sortBy(e => {
                                let {
                                    text: t
                                } = e;
                                return -t.length
                            }).filter(e => {
                                let {
                                    text: t
                                } = e;
                                return i === t
                            }).map(e => {
                                let {
                                    id: t
                                } = e;
                                return [r, t, n]
                            }).first()
                        })("#", e, t.channels),
                        parse: e => ({
                            type: "text",
                            content: "<#".concat(e[1], ">")
                        })
                    },
                    emoticon: {
                        match(e, t, l) {
                            if (!h.ConvertEmoticons.getSetting() || 0 !== l.length && !/\s$/.test(l)) return null;
                            let n = s.default.EMOJI_SHORTCUT_RE.exec(e);
                            return null == n || n[0].length !== e.length && " " !== e[n[0].length] && "\n" !== e[n[0].length] ? null : n
                        },
                        parse: e => ({
                            type: "emoticon",
                            content: s.default.convertShortcutToName(e[1]),
                            isShortcut: !0
                        })
                    },
                    emoji: {
                        order: G.emoji.order,
                        match: e => s.default.EMOJI_NAME_RE.exec(e),
                        parse(e, t, l) {
                            let [n, a] = e, {
                                customEmoji: r
                            } = l, i = Object.prototype.hasOwnProperty.call(r, a) ? r[a] : null;
                            if (null != i) {
                                var u;
                                return {
                                    type: "customEmoticon",
                                    content: "<".concat(!0 === i.animated ? "a" : "", ":").concat(null !== (u = i.originalName) && void 0 !== u ? u : i.name, ":").concat(i.id, ">"),
                                    emoji: i
                                }
                            }
                            return {
                                type: "text",
                                content: n
                            }
                        }
                    },
                    customEmoticons: {
                        match(e, t) {
                            var l, n;
                            return null !== (n = null === (l = t.customEmoticonsRegex) || void 0 === l ? void 0 : l.exec(e)) && void 0 !== n ? n : null
                        },
                        parse(e, t, l) {
                            let [n, a] = e, {
                                emojiContext: r
                            } = l, i = r.getEmoticonByName(a);
                            return null != i ? {
                                type: "customEmoticon",
                                content: "<".concat(!0 === i.animated ? "a" : "", ":").concat(i.name, ":").concat(i.id, ">"),
                                emoji: i
                            } : {
                                type: "text",
                                content: n
                            }
                        }
                    },
                    text: {
                        ...D,
                        match: (e, t) => "string" == typeof t.textExclusions && "" !== t.textExclusions ? (0, f.textMarkupPatternWithExclusions)(t.textExclusions).exec(e) : null != D.match ? D.match(e, t, "") : null
                    }
                },
                q = {
                    inlineCode: M(G.inlineCode),
                    codeBlock: M(G.codeBlock),
                    mention: {
                        match: i.anyScopeRegex(w),
                        parse(e, t, l) {
                            let {
                                isNotification: n
                            } = l, a = N.default.getUser(e[1]);
                            if (null == a) return {
                                content: e[0]
                            };
                            let r = I.default.getUserTag(a, {
                                identifiable: n && S.default.enabled ? "never" : "always"
                            });
                            if (!n) return {
                                content: "@".concat(r)
                            };
                            {
                                let e = I.default.getGlobalName(a);
                                return {
                                    content: null != e ? "@".concat(e) : "@".concat(r)
                                }
                            }
                        }
                    },
                    roleMention: {
                        match: i.anyScopeRegex(P),
                        parse(e, t, l) {
                            let {
                                guild: n
                            } = l;
                            if (null != n) {
                                let t = n.roles[e[1]];
                                if (null != t) return {
                                    content: "@".concat(t.name)
                                }
                            }
                            return {
                                content: e[0]
                            }
                        }
                    },
                    channel: {
                        match: i.anyScopeRegex(x),
                        parse(e) {
                            let t = g.default.getChannel(e[1]);
                            return {
                                content: null == t ? e[0] : (0, u.computeChannelName)(t, N.default, C.default, !0, !0)
                            }
                        }
                    },
                    emoji: {
                        match: i.anyScopeRegex(k),
                        parse(e, t, l) {
                            let [n, a, r] = e, {
                                guild: i
                            } = l, u = o.default.getDisambiguatedEmojiContext(i ? i.id : null).getById(r), s = null != u ? u.name : a;
                            return {
                                content: ":".concat(s, ":")
                            }
                        }
                    },
                    soundboard: {
                        match: i.anyScopeRegex(/^<sound:(\d+)>/),
                        parse(e) {
                            let [t, l] = e;
                            return {
                                content: "<sound:".concat(l, ">")
                            }
                        }
                    },
                    spoiler: {
                        match: i.anyScopeRegex(R.MARKDOWN_SPOILER_REGEXP),
                        parse: () => ({
                            content: "<".concat(b.default.Messages.SPOILER.toLowerCase(), ">")
                        })
                    },
                    staticRouteLink: {
                        match: i.anyScopeRegex(R.MARKDOWN_STATIC_ROUTE_NAME_REGEXP),
                        parse: e => ({
                            content: "<id:".concat(e[1], ">")
                        })
                    },
                    timestamp: {
                        ...G.timestamp,
                        parse() {
                            for (var e = arguments.length, t = Array(e), l = 0; l < e; l++) t[l] = arguments[l];
                            let n = G.timestamp.parse(...t);
                            return {
                                content: n.formatted
                            }
                        }
                    },
                    text: {
                        ...D
                    }
                };
            [H, q].forEach(e => {
                Object.keys(e).forEach((t, l) => {
                    e[t].order = l
                })
            });
            let B = i.parserFor(H),
                V = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;

            function K(e, t, l, n) {
                let a = "";
                return e.forEach(e => {
                    if (! function(e, t, l) {
                            if (null != l && ("customEmoticon" === t.type && l(t.emoji, !1), "emoticon" === t.type || "text" === t.type)) {
                                let n;
                                let a = s.default.translateSurrogatesToInlineEmoji(t.content);
                                for (; null !== (n = V.exec(a));) {
                                    let a;
                                    null != n[1] && "" !== n[1] ? e.emojiContext && (a = e.emojiContext.getById(n[1])) : a = s.default.getByName(n[2]), a && l(a, t.isShortcut || !1)
                                }
                            }
                        }(t, e, n), "string" == typeof e.content) switch (e.type) {
                        case "codeBlock":
                        case "inlineCode":
                        case "mention":
                        case "roleMention":
                        case "channel":
                        case "emoji":
                            a += e.content;
                            break;
                        default:
                            a += l(e.content)
                    } else e.content.constructor === Array ? a += K(e.content, t, l, n) : console.warn("Unknown message item type: ", e)
                }), a
            }

            function Y(e) {
                let t;
                let l = null == e ? void 0 : e.getGuildId(),
                    n = null != l ? L.default.getGuild(l) : null,
                    r = y.default.can(R.Permissions.MENTION_EVERYONE, e);
                t = (null == e ? void 0 : e.isPrivate()) ? e.recipients.map(e => ({
                    userId: e,
                    nick: null
                })) : null != l ? A.default.getMembers(l).map(e => {
                    let {
                        userId: t,
                        nick: l
                    } = e;
                    return {
                        userId: t,
                        nick: l
                    }
                }) : [];
                let i = a(t.reduce((e, t) => {
                        let {
                            userId: l
                        } = t, n = N.default.getUser(l);
                        return null == n ? e : (e.push({
                            id: l,
                            text: n.tag
                        }), e)
                    }, [])),
                    u = a(null != n ? n.roles : {}).values().filter(e => {
                        let {
                            mentionable: t
                        } = e;
                        return r || t
                    }).map(e => {
                        let {
                            id: t,
                            name: l
                        } = e;
                        return {
                            id: t,
                            text: l
                        }
                    }),
                    s = a(m.default.getTextChannelNameDisambiguations(l)).map(e => {
                        let {
                            id: t,
                            name: l
                        } = e;
                        return {
                            id: t,
                            text: l
                        }
                    }),
                    d = null != l ? a(_.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS).filter(e => e !== m.GUILD_SELECTABLE_CHANNELS_KEY).flatMap(e => m.default.getChannels(l)[e].map(e => ({
                        id: e.channel.id,
                        text: e.channel.name
                    }))).value() : [],
                    f = E.default.computeAllActiveJoinedThreads(l).map(e => ({
                        id: e.id,
                        text: e.name
                    })),
                    p = o.default.getDisambiguatedEmojiContext(l),
                    h = p.getEscapedCustomEmoticonNames(),
                    g = p.getCustomEmoji(),
                    C = p.getCustomEmoticonRegex(),
                    S = N.default.getCurrentUser(),
                    T = (0, c.getInventoryGuildPacksUserExperimentConfig)({
                        user: S,
                        autoTrackExposure: !1
                    }).viewAndUseEnabled,
                    I = {
                        inline: !0,
                        mentionableRoles: u,
                        guild: n,
                        users: i,
                        channels: s.concat(d).concat(f),
                        emojiContext: p,
                        customEmoticonsRegex: C,
                        canViewAndUsePackEmoji: T,
                        customEmoji: g,
                        textExclusions: h,
                        disableErrorGuards: !0
                    };
                return I
            }

            function j(e) {
                return e
            }
            var Q = {
                parse(e, t) {
                    var l, n, a;
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                        i = null != r ? r : Y(e),
                        u = {
                            content: t,
                            tts: !1,
                            invalidEmojis: [],
                            validNonShortcutEmojis: []
                        };
                    return u.content = (l = u.content, n = i, a = (t, l) => {
                        T.default.isEmojiPremiumLocked({
                            emoji: t,
                            channel: e,
                            intention: v.EmojiIntention.CHAT,
                            canViewAndUsePackEmoji: i.canViewAndUsePackEmoji
                        }) ? u.invalidEmojis.push(t) : !l && u.validNonShortcutEmojis.push(t)
                    }, K(B(l, n), n, s.default.translateInlineEmojiToSurrogates, a)), u
                },
                parsePreprocessor(e, t) {
                    let l = Y(e);
                    return B(t, l)
                },
                unparse(e, t, l) {
                    let n = g.default.getChannel(t),
                        r = null != n ? n.getGuildId() : null,
                        u = null != r ? L.default.getGuild(r) : null,
                        o = l ? q : a.omit(q, ["spoiler", "timestamp"]),
                        c = l ? j : s.default.translateSurrogatesToInlineEmoji,
                        d = i.parserFor(o),
                        f = {
                            inline: !0,
                            guild: u,
                            isNotification: l
                        };
                    return K(d(e, f), f, c)
                }
            }
        },
        729912: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                SilentMessagesExperiment: function() {
                    return a
                }
            });
            var n = l("862205");
            let a = (0, n.createExperiment)({
                kind: "user",
                id: "2023-01_silent_messages",
                label: "Silent Messages",
                defaultConfig: {
                    allowSending: !1
                },
                treatments: [{
                    id: 1,
                    label: "Allow sending @silent messages",
                    config: {
                        allowSending: !0
                    }
                }]
            })
        },
        804888: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                SILENT_RE: function() {
                    return r
                },
                canSuppressNotifications: function() {
                    return i
                },
                default: function() {
                    return u
                }
            });
            var n = l("729912");
            let a = "@silent",
                r = new RegExp("^".concat(a, "(\\s|$)"));

            function i() {
                let e = n.SilentMessagesExperiment.getCurrentConfig({
                    location: "456bd9_1"
                }, {
                    autoTrackExposure: !1
                });
                return e.allowSending
            }

            function u(e) {
                return i() && null != e.match(r) ? [!0, e.substring(a.length).trim()] : [!1, e]
            }
        },
        577427: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return j
                }
            }), l("222007");
            var n = l("448105"),
                a = l.n(n),
                r = l("917351"),
                i = l.n(r),
                u = l("866227"),
                o = l.n(u),
                s = l("446674"),
                c = l("913144"),
                d = l("299285"),
                f = l("860285"),
                p = l("915639"),
                E = l("86878"),
                h = l("546463"),
                g = l("686470"),
                m = l("568307"),
                A = l("102985"),
                L = l("251013"),
                y = l("946749"),
                C = l("535974"),
                S = l("352326"),
                N = l("718517"),
                _ = l("117362"),
                T = l("449008"),
                I = l("964889"),
                R = l("773336"),
                v = l("50885"),
                b = l("602043"),
                U = l("9377"),
                M = l("49111");
            let O = o().subtract(1, "week"),
                G = [],
                D = "",
                w = !1;

            function P(e, t) {
                return e.application.name.localeCompare(t.application.name, p.default.locale, {
                    sensitivity: "base"
                })
            }
            let x = {
                    [M.GameTableListKeys.NAME]: P,
                    [M.GameTableListKeys.PLATFORM]: (e, t, l) => {
                        let n = e.libraryApplication.getDistributor(),
                            a = t.libraryApplication.getDistributor();
                        return n === a ? (l === M.TableSortDirections.DESCENDING ? -1 : 1) * P(e, t) : null == n ? 1 : null == a ? -1 : n.localeCompare(a)
                    },
                    [M.GameTableListKeys.LAST_PLAYED]: (e, t) => e.isNew && !t.isNew ? -1 : !e.isNew && t.isNew ? 1 : e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1,
                    [M.GameTableListKeys.ACTIONS]: null
                },
                k = (0, _.cachedFunction)(e => e.filter(e => null != e.libraryApplication && e.shouldShowInLibrary)),
                F = (0, _.cachedFunction)(e => e.filter(e => null != e.libraryApplication && C.default.isLaunchable(e.libraryApplication.id, e.libraryApplication.branchId))),
                H = (0, _.cachedFunction)((e, t) => e.filter(e => a(t.toLowerCase(), e.application.name.toLowerCase()))),
                q = (0, _.cachedFunction)((e, t, l, n) => {
                    let a = x[t];
                    if (null == a) return e;
                    let r = [...e],
                        i = r.sort(a);
                    return l === M.TableSortDirections.DESCENDING ? i.reverse() : i
                }),
                B = (0, _.cachedFunction)(e => e.filter(e => null != e.libraryApplication && e.libraryApplication.isHidden()));

            function V(e, t) {
                let l = L.default.getCurrentUserStatisticsForApplication(e.id);
                if (null != l) return new Date(l.last_played_at).getTime();
                let n = t[e.id];
                return null != n ? n : 0
            }

            function K() {
                let e = new Set(m.default.getRunningVerifiedApplicationIds()),
                    t = {},
                    l = new Set,
                    n = m.default.getGamesSeen(!1, !1).map(e => {
                        let l = h.default.getGameByGameData(e);
                        return null != l ? (t[l.id] = e.lastFocused * N.default.Millis.SECOND, l.id) : null
                    }),
                    a = Object.values(g.default.getAllLibraryApplications()),
                    r = a.map(n => (function(e, t, l, n, a) {
                        var r, i;
                        if (!a && t.has(e.id)) return null;
                        let u = d.default.getApplication(e.id);
                        if (null == u) return null;
                        let s = V(u, l);
                        if (t.add(e.id), !(0, I.isUserEntitledToLibraryApplication)(e) && !C.default.isInstalled(e.id, e.branchId)) return null;
                        return {
                            key: "".concat(e.id, "-").concat(e.branchId),
                            application: u,
                            libraryApplication: e,
                            lastPlayed: s,
                            supportsCloudSync: null != e && C.default.supportsCloudSync(e.id, e.branchId),
                            isNew: (r = e, i = s, null != r && o(r.createdAt).isAfter(O) && 0 === i),
                            isLaunching: f.default.launchingGames.has(e.id),
                            isRunning: n.has(e.id),
                            isLaunchable: (0, b.isLaunchable)({
                                LibraryApplicationStore: g.default,
                                LaunchableGameStore: f.default,
                                DispatchApplicationStore: C.default,
                                ConnectedAppsStore: E.default,
                                applicationId: e.id,
                                branchId: e.branchId
                            }),
                            isUpdatingFlags: g.default.isUpdatingFlags(e.id, e.branchId),
                            shouldShowInLibrary: (0, I.shouldShowGameInLibrary)(u, e, A.default),
                            defaultAction: (0, U.getDefaultLibraryApplicationAction)(e, C.default, S.default)
                        }
                    })(n, l, t, e, !0)).filter(T.isNotNullish),
                    u = n.map(n => (function(e, t, l, n) {
                        let a = null != e ? d.default.getApplication(e) : null;
                        if (null == a || null == e || t.has(e)) return null;
                        let r = V(a, l);
                        return t.add(e), {
                            key: e,
                            application: a,
                            lastPlayed: r,
                            supportsCloudSync: !1,
                            isNew: !1,
                            isLaunching: f.default.launchingGames.has(e),
                            isRunning: n.has(e),
                            isLaunchable: (0, b.isLaunchable)({
                                LibraryApplicationStore: g.default,
                                LaunchableGameStore: f.default,
                                DispatchApplicationStore: C.default,
                                ConnectedAppsStore: E.default,
                                applicationId: e,
                                branchId: null
                            }),
                            isUpdatingFlags: !1,
                            shouldShowInLibrary: !1,
                            libraryApplication: null,
                            defaultAction: null
                        }
                    })(n, l, t, e)).filter(T.isNotNullish),
                    s = [...u, ...r].sort((e, t) => e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1);
                return w = null != h.default.lastFetched && g.default.fetched, !i.isEqual(s, G) && (G = s, R.isPlatformEmbedded && v.default.setSystemTrayApplications(F(G).map(e => e.application).slice(0, 5)), !0)
            }
            class Y extends s.default.Store {
                initialize() {
                    this.syncWith([d.default, h.default, f.default, m.default, C.default, S.default, g.default, L.default, A.default, E.default], K, 200), this.syncWith([y.default, p.default], () => !0)
                }
                get applicationFilterQuery() {
                    return D
                }
                get applicationViewItems() {
                    return G
                }
                get launchableApplicationViewItems() {
                    return F(G)
                }
                get libraryApplicationViewItems() {
                    return k(G)
                }
                get filteredLibraryApplicationViewItems() {
                    return H(this.libraryApplicationViewItems, D)
                }
                get sortedFilteredLibraryApplicationViewItems() {
                    return q(this.filteredLibraryApplicationViewItems, y.default.sortKey, y.default.sortDirection, p.default.locale)
                }
                get hiddenLibraryApplicationViewItems() {
                    return B(G)
                }
                get hasFetchedApplications() {
                    return w
                }
            }
            Y.displayName = "ApplicationViewStore";
            var j = new Y(c.default, {
                LIBRARY_APPLICATION_FILTER_UPDATE: function(e) {
                    let {
                        query: t
                    } = e;
                    D = t
                }
            })
        },
        9377: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                getDefaultLibraryApplicationAction: function() {
                    return r
                }
            });
            var n = l("602043"),
                a = l("49111");

            function r(e, t, l) {
                let r = t.getState(e.id, e.branchId),
                    i = l.getQueuePosition(e.id, e.branchId),
                    u = l.paused;
                if (null != r) {
                    if (null == i || -1 === i) switch (r.type) {
                        case a.LocalDispatchApplicationStates.INSTALLING:
                            return a.LibraryApplicationActions.INSTALL;
                        case a.LocalDispatchApplicationStates.UPDATING:
                        case a.LocalDispatchApplicationStates.UPDATE_REQUIRED:
                            return a.LibraryApplicationActions.UPDATE
                    }
                    switch (r.type) {
                        case a.LocalDispatchApplicationStates.INSTALLING:
                        case a.LocalDispatchApplicationStates.UPDATING:
                        case a.LocalDispatchApplicationStates.UPDATE_REQUIRED:
                        case a.LocalDispatchApplicationStates.REPAIRING:
                            if (i > 0) return a.LibraryApplicationActions.MOVE_UP;
                            if (u) return a.LibraryApplicationActions.RESUME;
                            return a.LibraryApplicationActions.PAUSE;
                        case a.LocalDispatchApplicationStates.UP_TO_DATE:
                            return a.LibraryApplicationActions.PLAY;
                        case a.LocalDispatchApplicationStates.UNINSTALLING:
                            return null
                    }
                }
                return null != i && i > 0 ? a.LibraryApplicationActions.MOVE_UP : (0, n.isSupportedPlatform)() ? a.LibraryApplicationActions.INSTALL : null
            }
        },
        946749: function(e, t, l) {
            "use strict";
            let n;
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            });
            var a = l("917351"),
                r = l.n(a),
                i = l("446674"),
                u = l("95410"),
                o = l("913144"),
                s = l("49111");
            let c = "GameLibraryViewStore",
                d = s.TableSortDirections.ASCENDING,
                f = s.GameTableListKeys.LAST_PLAYED,
                p = !1,
                E = r.debounce(() => {
                    p = !1, g.emitChange()
                }, 200);
            class h extends i.default.Store {
                initialize() {
                    var e;
                    let t = null !== (e = u.default.get(c)) && void 0 !== e ? e : {};
                    null != t.sortDirection && null != t.sortKey && (d = t.sortDirection, f = t.sortKey)
                }
                get sortDirection() {
                    return d
                }
                get sortKey() {
                    return f
                }
                get activeRowKey() {
                    return n
                }
                get isNavigatingByKeyboard() {
                    return p
                }
            }
            h.displayName = "GameLibraryViewStore";
            let g = new h(o.default, {
                LIBRARY_TABLE_SORT_UPDATE: function(e) {
                    let {
                        direction: t,
                        key: l
                    } = e;
                    d = t, f = l, u.default.set(c, {
                        sortDirection: d,
                        sortKey: f
                    })
                },
                LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE: function(e) {
                    let {
                        key: t,
                        isKeyboardEvent: l
                    } = e;
                    l && (p = !0, E()), n = t
                }
            });
            var m = g
        },
        25292: function(e, t, l) {
            "use strict";
            let n;
            l.r(t), l.d(t, {
                COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS: function() {
                    return et
                },
                default: function() {
                    return eu
                }
            }), l("424973"), l("843762"), l("781738"), l("222007");
            var a = l("448105"),
                r = l.n(a),
                i = l("917351"),
                u = l.n(i),
                o = l("195547"),
                s = l("679653"),
                c = l("966506"),
                d = l("605250"),
                f = l("385976"),
                p = l("677315"),
                E = l("361776"),
                h = l("290886"),
                g = l("866353"),
                m = l("865372"),
                A = l("364685"),
                L = l("161585"),
                y = l("401690"),
                C = l("872173"),
                S = l("233069"),
                N = l("766274"),
                _ = l("42203"),
                T = l("923959"),
                I = l("26989"),
                R = l("305961"),
                v = l("377253"),
                b = l("957255"),
                U = l("824563"),
                M = l("27618"),
                O = l("18494"),
                G = l("162771"),
                D = l("697218"),
                w = l("552712"),
                P = l("449008"),
                x = l("651879"),
                k = l("991170"),
                F = l("655518"),
                H = l("159885"),
                q = l("158998"),
                B = l("49111"),
                V = l("375822"),
                K = l("724210"),
                Y = l("782340");
            let j = new d.default("AutocompleteUtils"),
                Q = () => !0,
                W = /(\t|\s)/,
                X = [];
            n = l("905571").default;
            let z = n.MENTION_EVERYONE,
                J = n.MENTION_HERE,
                $ = n.MENTION_CLYDE,
                Z = n.LAUNCHABLE_APPLICATIONS;

            function ee() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                return 1e3 * e * (null != t ? t : 1)
            }
            let et = [T.GUILD_SELECTABLE_CHANNELS_KEY, T.GUILD_VOCAL_CHANNELS_KEY, B.ChannelTypes.GUILD_CATEGORY];

            function el(e, t) {
                let {
                    exactQuery: l,
                    containQuery: n,
                    queryLower: a
                } = t, i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                try {
                    if (l.test(e)) {
                        if (e.toLocaleLowerCase() === a) return 10;
                        return 7
                    }
                    if (n.test(e)) return 5;
                    if (function(e, t) {
                            let l = e.split(/(?:,| )+/);
                            return l.every(e => {
                                let l = RegExp(F.default.escape(e), "i");
                                return l.test(t)
                            })
                        }(a, e)) return 3;
                    if (i && r(a, e)) return 1
                } catch (e) {
                    j.error(e)
                }
                return 0
            }

            function en(e) {
                return (null == e ? void 0 : e.joinedAt) != null && !e.isPending
            }

            function ea(e) {
                let {
                    query: t,
                    members: l,
                    limit: n,
                    filter: a,
                    allowSnowflake: i
                } = e, u = D.default.getUsers(), s = G.default.getGuildId(), c = t.toLocaleLowerCase(), d = (0, H.normalize)(c), f = [], p = [], E = l.length, h = 0, g = 0;
                for (; h < E;) {
                    var m, A, L, y, C, S, _, T, R;
                    let e, n;
                    let o = l[h];
                    o instanceof N.default ? (n = o, e = null === (A = I.default.getNick(s, n.id)) || void 0 === A ? void 0 : A.toLocaleLowerCase()) : (e = null === (L = o.nick) || void 0 === L ? void 0 : L.toLocaleLowerCase(), n = u[o.userId]);
                    let E = null === (m = q.default.getGlobalName(n)) || void 0 === m ? void 0 : m.toLocaleLowerCase();
                    if (null == a || a(n)) {
                        let l = n.username.toLocaleLowerCase(),
                            a = (0, H.stripDiacritics)(l),
                            u = (0, H.normalize)(a),
                            o = null != e ? (0, H.stripDiacritics)(e) : null,
                            s = null != o ? (0, H.normalize)(o) : null,
                            h = null != E ? (0, H.stripDiacritics)(E) : null,
                            m = null != h ? (0, H.normalize)(h) : null;
                        i && t === n.id || l.substring(0, c.length) === c || a.substring(0, c.length) === c || (null == e ? void 0 : e.substring(0, c.length)) === c || (null == o ? void 0 : o.substring(0, c.length)) === c || (null == E ? void 0 : E.substring(0, c.length)) === c || (null == h ? void 0 : h.substring(0, c.length)) === c ? f.push({
                            type: V.AutocompleterResultTypes.USER,
                            record: n,
                            score: 10,
                            comparator: null !== (y = null != E ? E : e) && void 0 !== y ? y : l,
                            sortable: null !== (C = null != h ? h : o) && void 0 !== C ? C : a
                        }) : u.substring(0, d.length) === d || (null == s ? void 0 : s.substring(0, d.length)) === d || (null == m ? void 0 : m.substring(0, d.length)) === d ? f.push({
                            type: V.AutocompleterResultTypes.USER,
                            record: n,
                            score: 1,
                            comparator: null !== (S = null != E ? E : e) && void 0 !== S ? S : l,
                            sortable: null !== (_ = null != h ? h : o) && void 0 !== _ ? _ : a
                        }) : g < 50 && (r(c, a) || r(d, u) || null != o && r(c, o) || null != s && r(d, s) || null != h && r(c, h) || null != m && r(d, m)) && (p.push({
                            type: V.AutocompleterResultTypes.USER,
                            record: n,
                            score: 1,
                            comparator: null !== (T = null != E ? E : e) && void 0 !== T ? T : l,
                            sortable: null !== (R = null != h ? h : o) && void 0 !== R ? R : a
                        }), g += 1)
                    }
                    h += 1
                }
                return f.sort(o.default), f.length < n && (p.sort(o.default), f = f.concat(p.slice(0, Math.max(0, n - f.length)))), f.length > n && (f.length = n), f
            }

            function er(e, t, l) {
                let n = 0,
                    a = null;
                for (let r of t) {
                    let t = el(e, r, l);
                    t > n && (n = t, a = r)
                }
                return null != a && (a.isFullMatch ? t.length = 0 : t.splice(t.indexOf(a), 1)), n
            }

            function ei(e, t) {
                let l = _.default.getChannel(e);
                return null == e || null == l ? [] : u(v.default.getMessages(e).toArray()).reverse().uniqBy(e => e.author.id).map(e => D.default.getUser(e.author.id)).filter(e => {
                    if (null == e || e.isNonUserBot() && !e.isClyde()) return !1;
                    let t = l.getGuildId();
                    if (null == t) return !0;
                    let n = I.default.getMember(t, e.id);
                    return en(n)
                }).map(e => {
                    var t;
                    let n = l.getGuildId(),
                        a = null != n ? I.default.getMember(n, e.id) : null;
                    return {
                        type: V.AutocompleterResultTypes.USER,
                        record: e,
                        score: 0,
                        comparator: null !== (t = null == a ? void 0 : a.nick) && void 0 !== t ? t : q.default.getName(e)
                    }
                }).take(t).value()
            }
            var eu = {
                queryFriends(e) {
                    let {
                        query: t,
                        limit: l = 10,
                        _fuzzy: n = !0,
                        filter: a
                    } = e;
                    return ea({
                        query: t,
                        members: M.default.getFriendIDs().map(e => D.default.getUser(e)).filter(P.isNotNullish),
                        limit: l,
                        filter: a
                    })
                },
                queryDMUsers(e) {
                    let {
                        query: t,
                        limit: l = 10,
                        filter: n
                    } = e;
                    return ea({
                        query: t,
                        members: _.default.getDMUserIds().map(e => D.default.getUser(e)).filter(P.isNotNullish),
                        limit: l,
                        filter: n
                    })
                },
                queryChannelUsers(e) {
                    let t, {
                            channelId: l,
                            query: n,
                            limit: a = 10,
                            request: r = !0,
                            checkRecentlyTalkedOnEmptyQuery: i = !0,
                            allowSnowflake: u = !1
                        } = e,
                        o = _.default.getChannel(l);
                    if (null == o) return [];
                    let s = o.isThread() ? _.default.getChannel(o.parent_id) : null,
                        c = null != s ? s : o;
                    if (null == c) return [];
                    if (c.isPrivate()) {
                        t = c.recipients.map(e => {
                            var t;
                            return {
                                userId: e,
                                nick: null !== (t = M.default.getNickname(e)) && void 0 !== t ? t : null
                            }
                        });
                        let e = D.default.getCurrentUser();
                        null != e && t.push({
                            userId: e.id,
                            nick: null
                        })
                    } else {
                        if (0 === n.length && i) {
                            let e = ei(o.id, a);
                            if (e.length > 0) return e
                        }
                        t = I.default.getMembers(c.guild_id).filter(en), r && x.default.requestMembers(c.guild_id, n, a)
                    }
                    return ea({
                        query: n,
                        members: t,
                        limit: a,
                        filter: e => c.isPrivate() || k.default.can({
                            permission: B.Permissions.VIEW_CHANNEL,
                            user: e,
                            context: c
                        }),
                        allowSnowflake: u
                    })
                },
                queryGuildUsers(e) {
                    let {
                        guildId: t,
                        query: l,
                        limit: n = 10,
                        request: a = !0,
                        checkRecentlyTalkedOnEmptyQuery: r = !0,
                        filter: i,
                        allowSnowflake: u
                    } = e;
                    if (null == R.default.getGuild(t)) return [];
                    if (0 === l.length && r) {
                        let e = ei(O.default.getChannelId(t), n);
                        if (e.length > 0) return e
                    }
                    let o = I.default.getMembers(t).filter(en);
                    return a && l.length > 0 && x.default.requestMembers(t, l, n), ea({
                        query: l,
                        members: o,
                        limit: n,
                        filter: i,
                        allowSnowflake: u
                    })
                },
                queryUsers(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                        l = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], !(arguments.length > 3) || void 0 === arguments[3] || arguments[3]),
                        n = arguments.length > 4 ? arguments[4] : void 0;
                    return l && e.length > 0 && x.default.requestMembers(null, e, t), ea({
                        query: e,
                        members: u(D.default.getUsers()).values().value(),
                        limit: t,
                        filter: n
                    })
                },
                queryChannels(e) {
                    let t, {
                            query: l,
                            guildId: n,
                            limit: a = B.MAX_AUTOCOMPLETE_RESULTS,
                            fuzzy: r = !0,
                            filter: i = Q,
                            type: c = T.GUILD_SELECTABLE_CHANNELS_KEY,
                            allowEmptyQueries: d = !1,
                            requireVocalConnectAccess: f = !0,
                            boosters: p = {},
                            allowSnowflake: E
                        } = e,
                        h = function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                l = e.split(" ").filter(e => "" !== e || t).map(e => {
                                    let t = e.toLocaleLowerCase();
                                    return {
                                        queryLower: t,
                                        exactQuery: RegExp("^".concat(F.default.escape(t)), "i"),
                                        containQuery: RegExp(F.default.escape(t), "i"),
                                        isFullMatch: !1
                                    }
                                });
                            if (e.includes(" ")) {
                                let t = e.toLocaleLowerCase();
                                l.unshift({
                                    queryLower: t,
                                    exactQuery: RegExp("^".concat(F.default.escape(t).replace(" ", "( |-)")), "i"),
                                    containQuery: RegExp(F.default.escape(t).replace(" ", "( |-)"), "i"),
                                    isFullMatch: !0
                                })
                            }
                            return l
                        }(l, d);
                    t = null != n ? u(T.default.getChannels(n)[c]).map(e => e.channel).concat(y.default.computeAllActiveJoinedThreads(n)).value() : u(_.default.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(y.default.computeAllActiveJoinedThreads()).value();
                    let g = {},
                        m = [];
                    for (let e of t) {
                        var A, L, C, N, I;
                        if (A = c, L = e.type, C = null != n, !(A === L || (C || (0, S.isGuildChannelType)(L)) && (A === T.GUILD_SELECTABLE_CHANNELS_KEY ? (0, S.isGuildSelectableChannelType)(L) || (0, S.isGuildVocalChannelType)(L) : A === T.GUILD_VOCAL_CHANNELS_KEY && (0, S.isGuildVocalChannelType)(L))) || (0, S.isGuildChannelType)(e.type) && !b.default.can(f ? e.accessPermissions : B.Permissions.VIEW_CHANNEL, e) || !i(e)) continue;
                        let t = [...h],
                            a = e.name.toLocaleLowerCase(),
                            u = E && l === e.id,
                            o = u ? 10 : er(a, t, r);
                        if (0 !== o) {
                            if (t.length > 0) {
                                for (let l of [function(e, t) {
                                        if (null == e.guild_id) return;
                                        let l = t[e.guild_id];
                                        if (null == l) {
                                            var n;
                                            l = t[e.guild_id] = null === (n = R.default.getGuild(e.guild_id)) || void 0 === n ? void 0 : n.toString().toLocaleLowerCase()
                                        }
                                        return l
                                    }(e, g), function(e, t) {
                                        if (null == e.parent_id) return;
                                        let l = t[e.parent_id];
                                        if (null == l) {
                                            var n;
                                            l = t[e.parent_id] = null === (n = _.default.getChannel(e.parent_id)) || void 0 === n ? void 0 : n.name.toLocaleLowerCase()
                                        }
                                        return l
                                    }(e, g)]) {
                                    if (null == l || "" === l) continue;
                                    let e = er(l, t, !1);
                                    0 !== e && (o += .5 * e)
                                }
                                o = Math.min(9, o)
                            }
                            if (0 !== o && !(t.length > 1) && (1 !== t.length || t[0].isFullMatch || u)) {
                                ;
                                if (N = c, I = e.type, N === T.GUILD_SELECTABLE_CHANNELS_KEY && (0, S.isGuildVocalChannelType)(I)) o = Math.max(o - 1, .5);
                                m.push({
                                    type: (0, S.isGuildVocalChannelType)(e.type) ? V.AutocompleterResultTypes.VOICE_CHANNEL : V.AutocompleterResultTypes.TEXT_CHANNEL,
                                    record: e,
                                    score: ee(o, p[e.id]),
                                    comparator: (0, s.computeChannelName)(e, D.default, M.default),
                                    sortable: a
                                })
                            }
                        }
                    }
                    return m.sort(o.default), null != a && m.length > a && (m.length = a), m
                },
                queryGuilds(e) {
                    let {
                        query: t,
                        limit: l = 10,
                        fuzzy: n = !0,
                        filter: a = Q,
                        boosters: r = {}
                    } = e, i = "" === t ? "" : t.toLocaleLowerCase(), s = {
                        exactQuery: RegExp("^".concat(F.default.escape(i)), "i"),
                        containQuery: RegExp(F.default.escape(i), "i"),
                        queryLower: i
                    }, c = [], d = u(R.default.getGuilds()).values().value();
                    for (let e of d) {
                        if (!a(e)) continue;
                        let t = e.name.toLocaleLowerCase(),
                            l = el(t, s, n);
                        l > 0 && c.push({
                            type: V.AutocompleterResultTypes.GUILD,
                            record: e,
                            score: ee(l, r[e.id]),
                            comparator: e.toString(),
                            sortable: t
                        })
                    }
                    return c.sort(o.default), c.length > l && (c.length = l), c
                },
                queryGroupDMs(e) {
                    let {
                        query: t,
                        limit: l = 10,
                        fuzzy: n = !0,
                        filter: a = Q,
                        boosters: r = {}
                    } = e, i = (0, H.stripDiacritics)((0, H.normalize)(t.toLocaleLowerCase())), c = {
                        exactQuery: RegExp("^".concat(F.default.escape(i)), "i"),
                        containQuery: RegExp(F.default.escape(i), "i"),
                        queryLower: i
                    }, d = u(_.default.getMutablePrivateChannels()).values().value(), f = [];
                    for (let e of d) {
                        if (!e.isMultiUserDM() || !a(e)) continue;
                        let t = (0, s.computeChannelName)(e, D.default, M.default).toLocaleLowerCase(),
                            l = (0, H.stripDiacritics)(t),
                            i = el(l, c, n);
                        i > 0 && f.push({
                            type: V.AutocompleterResultTypes.GROUP_DM,
                            record: e,
                            score: ee(i, r[e.id]),
                            comparator: (0, s.computeChannelName)(e, D.default, M.default),
                            sortable: l
                        })
                    }
                    return f.sort(o.default), f.length > l && (f.length = l), f
                },
                queryApplications(e) {
                    let {
                        query: t,
                        limit: l = 10,
                        fuzzy: n = !0,
                        filter: a = Q
                    } = e, r = t.toLocaleLowerCase(), i = {
                        exactQuery: RegExp("^".concat(F.default.escape(r)), "i"),
                        containQuery: RegExp(F.default.escape(r), "i"),
                        queryLower: r
                    }, u = Z(), s = [];
                    for (let {
                            application: e
                        }
                        of u) {
                        if (!a(e)) continue;
                        let t = e.name.toLocaleLowerCase(),
                            l = el(t, i, n);
                        l > 0 && s.push({
                            type: V.AutocompleterResultTypes.APPLICATION,
                            record: e,
                            score: l,
                            comparator: e.name,
                            sortable: t
                        })
                    }
                    return s.sort(o.default), s.length > l && (s.length = l), s
                },
                querySKUs(e) {
                    let {
                        query: t,
                        limit: l = 10,
                        fuzzy: n = !0,
                        filter: a = Q
                    } = e, r = t.toLocaleLowerCase(), i = {
                        exactQuery: RegExp("^".concat(F.default.escape(r)), "i"),
                        containQuery: RegExp(F.default.escape(r), "i"),
                        queryLower: r
                    }, s = u(w.default.getSKUs()).values().value(), c = [];
                    for (let e of s)
                        if (e.type === B.SKUTypes.DURABLE_PRIMARY && a(e)) {
                            let t = e.name.toLocaleLowerCase(),
                                l = el(t, i, n);
                            l > 0 && c.push({
                                type: V.AutocompleterResultTypes.SKU,
                                record: e,
                                score: l,
                                comparator: e.name,
                                sortable: t
                            })
                        } return c.sort(o.default), c.length > l && (c.length = l), c
                },
                getRecentlyTalked: ei,
                queryMentionResults(e) {
                    let {
                        query: t,
                        channel: l,
                        canMentionEveryone: n = !1,
                        canMentionHere: a = !0,
                        canMentionUsers: i = !0,
                        canMentionRoles: o = !0,
                        canMentionClyde: s = !1,
                        includeAllGuildUsers: c = !1,
                        includeNonMentionableRoles: d = !1,
                        checkRecentlyTalkedOnEmptyQuery: f = !0,
                        limit: p = B.MAX_AUTOCOMPLETE_RESULTS,
                        request: E,
                        allowSnowflake: h = !1
                    } = e, g = i ? (c && null != l.guild_id ? this.queryGuildUsers({
                        guildId: l.guild_id,
                        query: t,
                        limit: p,
                        checkRecentlyTalkedOnEmptyQuery: f,
                        request: E,
                        allowSnowflake: h
                    }) : this.queryChannelUsers({
                        channelId: l.id,
                        query: t,
                        limit: p,
                        checkRecentlyTalkedOnEmptyQuery: f,
                        allowSnowflake: h
                    })).map(e => {
                        let {
                            record: t,
                            score: n,
                            comparator: a
                        } = e;
                        return {
                            user: t,
                            score: n,
                            comparator: a,
                            nick: I.default.getNick(l.guild_id, t.id),
                            status: U.default.getStatus(t.id)
                        }
                    }) : [], m = g.length, A = t.toLowerCase(), L = [];
                    if (m < p && o) {
                        let e = l.getGuildId(),
                            t = R.default.getGuild(e);
                        null != t && (u(t.roles).filter(t => {
                            let {
                                mentionable: l,
                                name: a,
                                id: i
                            } = t;
                            return (l || n || d) && (r(A, a.toLowerCase()) || h && A === i) && i !== e
                        }).take(p - m).forEach(e => {
                            L.push(e)
                        }), m += L.length)
                    }
                    let y = [];
                    return !l.isPrivate() && n && o && (m < p && r(A, z().test) && (y.push(z()), m += 1), a && m < p && r(A, J().test) && y.push(J())), s && r(A, $().test) && y.push($()), {
                        users: g,
                        globals: y,
                        roles: L
                    }
                },
                queryGuildMentionResults(e) {
                    let {
                        query: t,
                        guildId: l,
                        canMentionEveryone: n = !1,
                        canMentionUsers: a = !0,
                        canMentionRoles: i = !0,
                        canMentionNonMentionableRoles: o = !1
                    } = e, s = a ? this.queryGuildUsers({
                        guildId: l,
                        query: t
                    }).map(e => ({
                        ...e,
                        status: U.default.getStatus(e.record.id)
                    })) : [], c = s.length, d = t.toLowerCase(), f = [];
                    if (c < B.MAX_AUTOCOMPLETE_RESULTS && i) {
                        let e = R.default.getGuild(l);
                        null != e && (u(e.roles).filter(e => {
                            let {
                                mentionable: t,
                                name: a,
                                id: i
                            } = e;
                            return (t || n || o) && r(d, a.toLowerCase()) && i !== l
                        }).take(B.MAX_AUTOCOMPLETE_RESULTS - c).forEach(e => {
                            f.push(e)
                        }), c += f.length)
                    }
                    let p = [];
                    return n && i && (c < B.MAX_AUTOCOMPLETE_RESULTS && r(d, z().test) && (p.push(z()), c += 1), c < B.MAX_AUTOCOMPLETE_RESULTS && r(d, J().test) && p.push(J()), p.push($())), {
                        users: s,
                        globals: p,
                        roles: f
                    }
                },
                queryChoice(e) {
                    let {
                        query: t,
                        choices: l,
                        limit: n = 10,
                        fuzzy: a = !0
                    } = e, r = t.toLocaleLowerCase(), i = RegExp("^".concat(F.default.escape(r)), "i"), o = RegExp(F.default.escape(r), "i"), s = u(l).map((e, t) => {
                        let l = el(e.displayName.toLocaleLowerCase(), {
                            exactQuery: i,
                            containQuery: o,
                            queryLower: r
                        }, a);
                        return l > 0 ? {
                            choice: e,
                            score: l,
                            originalIndex: t
                        } : null
                    }).filter(P.isNotNullish).sortBy(e => -1 * e.score);
                    return null !== n && (s = s.take(n)), s.value()
                },
                queryStaticRouteChannels(e) {
                    let {
                        query: t,
                        guild: l
                    } = e, n = t.toLocaleLowerCase(), a = {
                        exactQuery: RegExp("^".concat(F.default.escape(n)), "i"),
                        containQuery: RegExp(F.default.escape(n), "i"),
                        queryLower: n
                    }, r = ((0, p.canSeeGuildHome)(l.id) || (0, h.canSeeOnboardingHome)(l.id)) && !l.hasFeature(B.GuildFeatures.HUB), i = l.hasFeature(B.GuildFeatures.COMMUNITY), u = (0, E.isGuildOnboardingAvailable)(l) && l.hasFeature(B.GuildFeatures.COMMUNITY), o = [{
                        id: K.StaticChannelId.SERVER_GUIDE,
                        name: Y.default.Messages.SERVER_GUIDE
                    }, {
                        id: K.StaticChannelId.CHANNEL_BROWSER,
                        name: Y.default.Messages.CHANNEL_BROWSER_TITLE
                    }, {
                        id: K.StaticChannelId.CUSTOMIZE_COMMUNITY,
                        name: Y.default.Messages.CHANNELS_AND_ROLES
                    }], s = [];
                    for (let e of o) {
                        if (e.id === K.StaticChannelId.SERVER_GUIDE && !r || e.id === K.StaticChannelId.CHANNEL_BROWSER && !i || e.id === K.StaticChannelId.CUSTOMIZE_COMMUNITY && !u) continue;
                        let t = e.name.toLocaleLowerCase(),
                            n = el(t, a, !1);
                        n > 0 && s.push(new S.UnknownChannelRecord({
                            id: e.id,
                            name: e.name,
                            type: B.ChannelTypes.UNKNOWN,
                            guild_id: l.id
                        }))
                    }
                    return s
                },
                queryChannelResults(e) {
                    let {
                        query: t,
                        channel: l,
                        type: n = T.GUILD_SELECTABLE_CHANNELS_KEY,
                        channelTypes: a
                    } = e, r = this.queryChannels({
                        query: t,
                        guildId: l.getGuildId(),
                        limit: void 0,
                        fuzzy: void 0,
                        filter: e => null == a || a.includes(e.type),
                        type: n,
                        allowEmptyQueries: !0
                    }).map(e => e.record);
                    return {
                        channels: r
                    }
                },
                queryApplicationCommandChannelResults(e) {
                    let {
                        query: t,
                        channel: l,
                        channelTypes: n,
                        limit: a = B.MAX_AUTOCOMPLETE_RESULTS,
                        allowSnowflake: r
                    } = e;
                    if (null == l.guild_id) {
                        let e = [];
                        return (null == n || n.includes(l.type)) && e.push(l), {
                            channels: e
                        }
                    }
                    let i = [];
                    for (let e of et) i = i.concat(this.queryChannels({
                        query: t,
                        guildId: l.guild_id,
                        limit: a,
                        fuzzy: !0,
                        filter: e => null == n || n.includes(e.type),
                        type: e,
                        allowEmptyQueries: !0,
                        requireVocalConnectAccess: !1,
                        allowSnowflake: r
                    }));
                    return i = i.filter(e => {
                        let {
                            record: t
                        } = e;
                        return "null" !== t.id
                    }).sort(c.default), null != a && i.length > a && (i = i.slice(0, a)), {
                        channels: i.map(e => e.record)
                    }
                },
                queryChoiceResults(e) {
                    let {
                        query: t,
                        choices: l
                    } = e, n = this.queryChoice({
                        query: t,
                        choices: l,
                        limit: null
                    }).map(e => e.choice);
                    return {
                        choices: n
                    }
                },
                queryEmojiResults(e) {
                    let {
                        query: t,
                        channel: l,
                        intention: n,
                        canViewAndUsePackEmoji: a,
                        maxCount: r = B.MAX_AUTOCOMPLETE_RESULTS,
                        matchComparator: i
                    } = e;
                    C.FrecencyUserSettingsActionCreators.loadIfNecessary();
                    let u = f.default.searchWithoutFetchingLatest({
                        channel: l,
                        query: t,
                        count: r,
                        intention: n,
                        canViewAndUsePackEmoji: a,
                        matchComparator: i
                    });
                    return {
                        emojis: u
                    }
                },
                queryStickers(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        [l, n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, Q],
                        {
                            stickerMetadata: a
                        } = A.default,
                        r = D.default.getCurrentUser(),
                        i = new Set,
                        o = [];
                    for (let u of (C.FrecencyUserSettingsActionCreators.loadIfNecessary(), e)) {
                        if ("" === u) continue;
                        let e = u.toLocaleLowerCase(),
                            s = (0, H.stripDiacritics)(e),
                            c = RegExp("^".concat(F.default.escape(s)), "i"),
                            d = RegExp("".concat(F.default.escape(s)), "i");
                        a.forEach((a, u) => {
                            let s = 0,
                                f = null,
                                p = A.default.getStickerById(u);
                            if (null == p || !n(p, (0, g.getStickerSendability)(p, r, l))) return;
                            for (let l of a) {
                                let {
                                    type: n,
                                    value: a
                                } = l, r = function(e) {
                                    switch (e) {
                                        case L.StickerMetadataTypes.STICKER_NAME:
                                            return 11;
                                        case L.StickerMetadataTypes.CORRELATED_EMOJI:
                                            return 6;
                                        case L.StickerMetadataTypes.TAG:
                                            return 1;
                                        case L.StickerMetadataTypes.GUILD_NAME:
                                        case L.StickerMetadataTypes.PACK_NAME:
                                            return 8;
                                        default:
                                            return 1
                                    }
                                }(n), i = 0;
                                t ? a === e ? i = 10 * r : c.test(a) ? i = 7 * r : (n === L.StickerMetadataTypes.GUILD_NAME || n === L.StickerMetadataTypes.PACK_NAME || n === L.StickerMetadataTypes.STICKER_NAME) && d.test(a) && (i = 5 * r) : a === e && (i = 10 * r, f = a), i > s && (s = i, f = a)
                            }
                            let E = m.default.stickerFrecencyWithoutFetchingLatest.getScore(u);
                            null != E && (s *= E / 100), s > 0 && null != f && !i.has(p.id) && (i.add(p.id), o.push({
                                sticker: p,
                                comparator: f,
                                score: s
                            }))
                        })
                    }
                    return 0 === (o = u(o).sortBy(e => -1 * e.score).value()).length && (o = X), o
                },
                matchSentinel(e, t, l) {
                    let n = W.test(t);
                    return !n && e === l
                },
                hasSameRoleAsUsername(e, t) {
                    var l;
                    if (!t.isPomelo()) return !1;
                    let n = R.default.getGuild(e.getGuildId()),
                        a = null !== (l = null == n ? void 0 : n.roles) && void 0 !== l ? l : {};
                    for (let {
                            name: e
                        }
                        of Object.values(a))
                        if (t.username.startsWith(e.toLowerCase())) return !0;
                    return !1
                }
            }
        },
        651879: function(e, t, l) {
            "use strict";
            let n;
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            }), l("424973");
            var a = l("917351"),
                r = l.n(a),
                i = l("693566"),
                u = l.n(i),
                o = l("851387"),
                s = l("305961"),
                c = l("697218"),
                d = l("718517"),
                f = l("158998"),
                p = l("782340");
            let E = new u({
                maxAge: 1 * d.default.Millis.MINUTE
            });

            function h(e, t, l) {
                null != n && clearTimeout(n), n = setTimeout(() => {
                    let n = [],
                        a = e => {
                            n.push(e.id)
                        };
                    if (null == e) r.forEach(s.default.getGuilds(), a);
                    else if (Array.isArray(e)) e.forEach(e => {
                        let t = s.default.getGuild(e);
                        null != t && a(t)
                    });
                    else {
                        let t = s.default.getGuild(e);
                        null != t && a(t)
                    }
                    n.length > 0 && o.default.requestMembers(n, t.toLocaleLowerCase(), l)
                }, 200)
            }

            function g(e, t) {
                let l = "".concat(null != e ? e : "", ":").concat(t),
                    n = E.get(l);
                if (null != n) return n;
                E.set(l, !0)
            }
            var m = {
                getGuildNameSuggestion: function(e) {
                    let t = c.default.getCurrentUser(),
                        l = f.getName(t);
                    return null == l || 0 === l.length ? "" : p.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT.format({
                        username: (null == e ? void 0 : e.truncateUsername) ? l.slice(0, 20) : l
                    })
                },
                requestMembers(e, t) {
                    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                        n = Array.isArray(e),
                        a = [],
                        r = !1;
                    if (n) e.forEach(e => {
                        let l = g(e, t);
                        null == l && a.push(e)
                    });
                    else {
                        let l = g(e, t);
                        null == l && (r = !0)
                    }
                    a.length > 0 && n ? h(a, t, l) : r && h(e, t, l)
                }
            }
        },
        905571: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l("577427"),
                a = l("782340"),
                r = {
                    MENTION_EVERYONE: () => ({
                        test: "everyone",
                        text: "@everyone",
                        description: a.default.Messages.MENTION_EVERYONE_AUTOCOMPLETE_DESCRIPTION
                    }),
                    MENTION_HERE: () => ({
                        test: "here",
                        text: "@here",
                        description: a.default.Messages.MENTION_HERE_AUTOCOMPLETE_DESCRIPTION
                    }),
                    MENTION_CLYDE: () => ({
                        test: "clyde",
                        text: "@Clyde",
                        description: a.default.Messages.CLYDE_MENTION_DESCRIPTION
                    }),
                    LAUNCHABLE_APPLICATIONS: () => n.default.launchableApplicationViewItems
                }
        }
    }
]);
//# sourceMappingURL=48590.9d5fbcc5aac137b478e1.js.map