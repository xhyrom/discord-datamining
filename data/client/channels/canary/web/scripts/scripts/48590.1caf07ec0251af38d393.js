(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["48590"], {
        375822: function(e, t, n) {
            "use strict";
            var l, r, a, i, u, o;
            n.r(t), n.d(t, {
                HeaderRecord: function() {
                    return s
                },
                FindResultDirections: function() {
                    return l
                },
                AutocompleterResultTypes: function() {
                    return r
                },
                AutocompleterQuerySymbols: function() {
                    return a
                }
            });
            class s {
                constructor(e) {
                    this.id = e, this.text = e
                }
            }(i = l || (l = {})).UP = "UP", i.DOWN = "DOWN", (u = r || (r = {})).GUILD = "GUILD", u.TEXT_CHANNEL = "TEXT_CHANNEL", u.GROUP_DM = "GROUP_DM", u.VOICE_CHANNEL = "VOICE_CHANNEL", u.USER = "USER", u.HEADER = "HEADER", u.APPLICATION = "APPLICATION", u.SKU = "SKU", u.LINK = "LINK", (o = a || (a = {})).USER = "@", o.TEXT_CHANNEL = "#", o.VOICE_CHANNEL = "!", o.GUILD = "*", o.APPLICATION = "$"
        },
        195547: function(e, t, n) {
            "use strict";

            function l(e, t) {
                if (e.score === t.score) {
                    var n, l, r, a, i, u;
                    let o = null !== (a = null !== (r = e.sortable) && void 0 !== r ? r : null === (n = e.comparator) || void 0 === n ? void 0 : n.toLocaleLowerCase()) && void 0 !== a ? a : "",
                        s = null !== (u = null !== (i = e.sortable) && void 0 !== i ? i : null === (l = t.comparator) || void 0 === l ? void 0 : l.toLocaleLowerCase()) && void 0 !== u ? u : "";
                    if (o < s) return -1;
                    if (o > s) return 1
                }
                return t.score - e.score
            }
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            })
        },
        966506: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("42203"),
                r = n("49111");

            function a(e) {
                if (null == e.parent_id) return e.type === r.ChannelTypes.GUILD_CATEGORY ? (e.position + 1) * 1e3 : e.position;
                {
                    var t, n;
                    let r = ((null !== (n = null === (t = l.default.getChannel(e.parent_id)) || void 0 === t ? void 0 : t.position) && void 0 !== n ? n : 0) + 1) * 1e3;
                    return e.isGuildVocal() ? r + e.position + 500 : r + e.position
                }
            }

            function i(e, t) {
                var n, l, r, i, u, o;
                if (e.score !== t.score) return t.score - e.score;
                let s = a(e.record),
                    c = a(t.record);
                if (s !== c) return s - c;
                let d = null !== (i = null !== (r = e.sortable) && void 0 !== r ? r : null === (n = e.comparator) || void 0 === n ? void 0 : n.toLocaleLowerCase()) && void 0 !== i ? i : "",
                    f = null !== (o = null !== (u = e.sortable) && void 0 !== u ? u : null === (l = t.comparator) || void 0 === l ? void 0 : l.toLocaleLowerCase()) && void 0 !== o ? o : "";
                return d < f ? -1 : d > f ? 1 : 0
            }
        },
        772051: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ClydeExperimentState: function() {
                    return r
                },
                default: function() {
                    return u
                }
            });
            var l, r, a = n("862205");
            (l = r || (r = {}))[l.None = 0] = "None", l[l.DefaultOn = 1] = "DefaultOn", l[l.DefaultOff = 2] = "DefaultOff", l[l.ComingSoon = 3] = "ComingSoon", l[l.ClydeProfiles = 4] = "ClydeProfiles";
            let i = (0, a.createExperiment)({
                kind: "guild",
                id: "2023-03_clyde_ai",
                label: "ClydeAI",
                defaultConfig: {
                    experimentState: 0
                },
                treatments: [{
                    id: 1,
                    label: "Enabled (Default Off)",
                    config: {
                        experimentState: 2
                    }
                }, {
                    id: 3,
                    label: "Enabled (Default On)",
                    config: {
                        experimentState: 1
                    }
                }, {
                    id: 4,
                    label: "Coming Soon",
                    config: {
                        experimentState: 3
                    }
                }, {
                    id: 5,
                    label: "Clyde Profiles",
                    config: {
                        experimentState: 4
                    }
                }]
            });
            var u = i
        },
        980215: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useClydeProfilesEnabled: function() {
                    return s
                },
                useClydeEnabled: function() {
                    return c
                },
                getClydeEnabled: function() {
                    return f
                },
                getClydeExperimentEnabled: function() {
                    return p
                },
                canUseCustomClydeProfiles: function() {
                    return h
                }
            }), n("884691"), n("446674");
            var l = n("305961"),
                r = n("957255"),
                a = n("772051"),
                i = n("49111"),
                u = n("724210");

            function o(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "1e9ccc_1",
                    r = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
                    i = a.default.useExperiment({
                        guildId: r,
                        location: l
                    }, {
                        autoTrackExposure: n
                    }).experimentState;
                return i
            }

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    l = o(e, t, n);
                return l === a.ClydeExperimentState.ClydeProfiles
            }

            function c(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = o(e, n);
                return d(l, e, t)
            }

            function d(e, t, n) {
                if (null == t) {
                    if (null != n && n.isPrivate()) {
                        if (n.hasFlag(u.ChannelFlags.CLYDE_AI)) return !0;
                        let e = l.default.getGuildIds().some(e => p(l.default.getGuild(e)));
                        return e
                    }
                    return !1
                }
                return null != e && e !== a.ClydeExperimentState.None && r.default.can(i.Permissions.USE_CLYDE_AI, n)
            }

            function f(e, t) {
                var n;
                let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : "",
                    i = a.default.getCurrentConfig({
                        guildId: r,
                        location: "1e9ccc_2"
                    }, {
                        autoTrackExposure: l
                    }).experimentState;
                return d(i, e, t)
            }

            function p(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = m(e, t);
                return n !== a.ClydeExperimentState.None
            }

            function h(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return m(e, t) === a.ClydeExperimentState.ClydeProfiles
            }

            function m(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (null == e) return !1;
                let n = e.id;
                return a.default.getCurrentConfig({
                    guildId: n,
                    location: "1e9ccc_4"
                }, {
                    autoTrackExposure: t
                }).experimentState
            }
        },
        860285: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var l = n("446674"),
                r = n("913144");
            let a = new Set,
                i = {};

            function u(e) {
                let {
                    applicationId: t
                } = e;
                a.add(t)
            }

            function o(e) {
                let {
                    applicationId: t
                } = e;
                a.delete(t)
            }
            class s extends l.default.Store {
                get launchingGames() {
                    return a
                }
                get launchableGames() {
                    return i
                }
                isLaunchable(e) {
                    return null != i[e] ? i[e] : (i[e] = !1, r.default.dispatch({
                        type: "CHECK_LAUNCHABLE_GAME",
                        gameId: e
                    }), !1)
                }
            }
            s.displayName = "LaunchableGameStore";
            var c = new s(r.default, {
                GAME_LAUNCHABLE_UPDATE: function(e) {
                    let {
                        gameId: t,
                        isLaunchable: n
                    } = e;
                    i[t] = n
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
        361776: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                },
                isGuildOnboardingAvailable: function() {
                    return u
                }
            });
            var l = n("446674"),
                r = n("38654"),
                a = n("49111");

            function i(e) {
                let t = (0, l.useStateFromStores)([r.default], () => {
                    if ((null == e ? void 0 : e.id) == null) return !1;
                    let t = r.default.isFullServerPreview(e.id),
                        n = r.default.isOnboardingEnabled(e.id);
                    return t && n
                });
                return t || (null == e ? void 0 : e.hasFeature(a.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS))
            }

            function u(e) {
                if (null == e) return !1;
                let t = r.default.isFullServerPreview(e.id),
                    n = r.default.isOnboardingEnabled(e.id);
                return t && n || e.hasFeature(a.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS)
            }
        },
        848848: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                },
                getChannelRoleSubscriptionStatus: function() {
                    return c
                }
            });
            var l = n("446674"),
                r = n("203288"),
                a = n("42203"),
                i = n("957255"),
                u = n("49111");
            let o = {
                needSubscriptionToAccess: !1,
                isSubscriptionGated: !1
            };

            function s(e) {
                return (0, l.useStateFromStoresObject)([a.default, r.default, i.default], () => c(e, a.default, r.default, i.default), [e])
            }

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.default,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.default,
                    l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.default,
                    s = t.getChannel(e);
                if (null == s ? void 0 : s.isRoleSubscriptionTemplatePreviewChannel()) return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: !0
                };
                if (null == s || !n.isChannelGated(s.guild_id, s.id)) return o;
                let c = s.isGuildVocal() ? !l.can(u.Permissions.CONNECT, s) : !l.can(u.Permissions.VIEW_CHANNEL, s);
                return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: c
                }
            }
        },
        82300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isChannelTypeMentionable: function() {
                    return r
                }
            });
            var l = n("233069");

            function r(e) {
                return (0, l.isGuildSelectableChannelType)(e) || (0, l.isGuildVocalChannelType)(e)
            }
        },
        946897: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("404828"),
                r = n.n(l),
                a = n("862205");
            let i = /^https:\/\/(?:(?:media|images)\.discordapp\.net|(?:cdn\.discordapp\.com))\/(?:attachments|ephemeral-attachments)\/\d+\/\d+\/([A-Za-z0-9._-]*[A-Za-z0-9_-])(?:[?][a-zA-Z0-9?&=_-]*)?/,
                u = (0, a.createExperiment)({
                    kind: "user",
                    id: "2023-11_attachment_link_markup",
                    label: "Attachment Link Config User Experiment",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Shows links to attachments as regular links",
                        config: {
                            enabled: !1
                        }
                    }, {
                        id: 2,
                        label: 'Shows links to attachments as "mentions" of the filename',
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                o = {
                    order: r.defaultRules.url.order - .5,
                    requiredFirstCharacters: ["h"],
                    match(e) {
                        let t = i.exec(e);
                        if (null !== t) {
                            let {
                                enabled: e
                            } = u.getCurrentConfig({
                                location: "markup"
                            });
                            if (!e) return null
                        }
                        return t
                    },
                    parse(e, t, n) {
                        var l;
                        let r = e[0],
                            a = e[1];
                        return {
                            type: "attachmentLink",
                            content: [{
                                type: "text",
                                content: l = a
                            }],
                            attachmentUrl: r,
                            attachmentName: l
                        }
                    }
                };
            var s = {
                attachmentLink: o
            }
        },
        632886: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var l = n("404828"),
                r = n.n(l),
                a = n("203288"),
                i = n("679653"),
                u = n("848848"),
                o = n("361572"),
                s = n("42203"),
                c = n("305961"),
                d = n("957255"),
                f = n("27618"),
                p = n("697218"),
                h = n("315102"),
                m = n("404008"),
                g = n("159885"),
                E = n("82300"),
                C = n("290689"),
                y = n("49111"),
                L = n("782340");
            let A = e => {
                let t = s.default.getChannel(e);
                return null == t ? void 0 : t.getGuildId()
            };

            function S(e) {
                return {
                    type: "guild",
                    guildId: e.id,
                    content: (0, g.truncateText)(e.name, 32),
                    icon: h.default.getGuildIconURL({
                        id: e.id,
                        icon: e.icon,
                        size: 40
                    })
                }
            }

            function _(e, t) {
                let n;
                let l = N((0, g.truncateText)(e.name, 32));
                return {
                    type: "channel",
                    content: [n = "italics" === t ? {
                        type: "em",
                        content: [l]
                    } : l],
                    channelType: e.type,
                    iconType: e.iconType
                }
            }

            function T(e) {
                return {
                    type: "channel",
                    content: [N("")],
                    iconType: e ? "post" : "message"
                }
            }

            function I(e, t) {
                var n;
                let l = s.default.getChannel(e),
                    r = (0, u.getChannelRoleSubscriptionStatus)(e, s.default, a.default, d.default).isSubscriptionGated,
                    c = null !== (n = (0, m.getMentionIconType)(l)) && void 0 !== n ? n : "text";
                if (null != t) {
                    let n = t.find(t => t.id === e);
                    if (null != n) return {
                        type: n.type,
                        id: n.id,
                        guildId: n.guild_id,
                        name: n.name,
                        isDm: null != l && l.isPrivate(),
                        isForumPost: null != l && l.isForumPost(),
                        isMentionable: !0,
                        canViewChannel: !0,
                        roleSubscriptionGated: r,
                        iconType: c,
                        parentId: null == l ? void 0 : l.parent_id
                    }
                }
                return null != l ? {
                    type: l.type,
                    id: l.id,
                    guildId: l.guild_id,
                    name: (0, i.computeChannelName)(l, p.default, f.default),
                    isDm: l.isPrivate(),
                    isForumPost: l.isForumPost(),
                    isMentionable: (0, E.isChannelTypeMentionable)(l.type),
                    canViewChannel: (0, o.canViewChannel)(l),
                    roleSubscriptionGated: r,
                    iconType: c,
                    parentId: l.parent_id
                } : null
            }

            function v(e) {
                return {
                    type: "link",
                    content: [{
                        type: "text",
                        content: e
                    }],
                    target: e,
                    title: void 0
                }
            }

            function N(e) {
                return {
                    type: "text",
                    content: e
                }
            }

            function R(e, t, n, l, r) {
                let a = c.default.getGuild(e),
                    i = (null == a ? void 0 : a.id) === l;
                return {
                    type: "channelMention",
                    guildId: e,
                    channelId: t,
                    messageId: n,
                    originalLink: r,
                    inContent: null == a || i ? null : [S(a)],
                    content: [_({
                        name: L.default.Messages.UNKNOWN_CHANNEL,
                        type: y.ChannelTypes.UNKNOWN,
                        iconType: "text"
                    }, "italics")]
                }
            }

            function b(e, t, n, l) {
                if (!e.canViewChannel) return function(e, t) {
                    let n = {
                        type: "channel",
                        content: [N(e.roleSubscriptionGated ? e.name : L.default.Messages.NO_ACCESS)],
                        channelType: e.roleSubscriptionGated ? e.type : y.ChannelTypes.UNKNOWN,
                        iconType: "locked"
                    };
                    return {
                        type: "channelMention",
                        guildId: e.guildId,
                        channelId: e.id,
                        messageId: t,
                        inContent: null,
                        content: [n]
                    }
                }(e, t);
                if (!e.isMentionable) return N("#".concat(e.name));
                let r = {
                        type: "channelMention",
                        channelId: e.id,
                        guildId: e.guildId,
                        messageId: t,
                        originalLink: l
                    },
                    a = c.default.getGuild(e.guildId);
                if (null == a) {
                    var i;
                    if (e.isDm) return {
                        ...r,
                        guildId: y.ME,
                        inContent: [_(e)],
                        content: [T(!1)]
                    };
                    return null != (i = l) ? v(i) : N("#".concat(L.default.Messages.UNKNOWN_CHANNEL_PLACEHOLDER))
                }
                let u = e.guildId === n;
                return {
                    ...r,
                    ... function(e, t, n, l) {
                        let r = S(e),
                            a = _(t),
                            i = T(t.isForumPost);
                        if (n && l) {
                            if (t.isForumPost) {
                                let e = s.default.getChannel(t.parentId);
                                if (null != e) {
                                    var u;
                                    return {
                                        inContent: [_({
                                            name: e.name,
                                            type: e.type,
                                            iconType: null !== (u = (0, m.getMentionIconType)(e)) && void 0 !== u ? u : "forum"
                                        })],
                                        content: [a]
                                    }
                                }
                            }
                            return {
                                inContent: [a],
                                content: [i]
                            }
                        }
                        if (n && !l) return {
                            inContent: null,
                            content: [a]
                        };
                        if (!n && l) return {
                            inContent: [r],
                            content: [t.isForumPost ? a : i]
                        };
                        else if (!n && !l) return {
                            inContent: [r],
                            content: [a]
                        }
                    }(a, e, u, null != t)
                }
            }
            let M = {
                    order: C.default.order,
                    requiredFirstCharacters: ["<"],
                    match: e => /^<#(\d+)>/.exec(e),
                    parse(e, t, n) {
                        let l = e[1];
                        if (n.returnMentionIds) return {
                            type: "channelMention",
                            id: l
                        };
                        let r = I(l, n.mentionChannels);
                        return null == r ? R(null, l, null, A(n.channelId)) : b(r, null, A(n.channelId))
                    }
                },
                x = {
                    order: r.defaultRules.url.order - .5,
                    requiredFirstCharacters: ["h"],
                    match(e) {
                        let t = o.CHANNEL_OR_MESSAGES_URL_RE.exec(e);
                        return null != t && (null != t[2] && /\D/.test(t[2]) || null != t[3] && /\D/.test(t[3])) ? null : t
                    },
                    parse(e, t, n) {
                        let l = e[0],
                            r = e[1],
                            a = e[2],
                            i = e[3];
                        if (null == a) return v(l);
                        let u = I(a, null);
                        return null == u ? R(r, a, i, A(n.channelId), l) : b(u, i, A(n.channelId), l)
                    }
                },
                U = {
                    order: r.defaultRules.url.order - .5,
                    requiredFirstCharacters: ["h"],
                    match: e => o.MEDIA_POST_URL_RE.exec(e),
                    parse(e, t, n) {
                        let l = e[0],
                            r = e[1],
                            a = e[2],
                            i = e[3],
                            u = e[4];
                        if (null == a || null == i) return v(l);
                        let o = I(i, null);
                        if (null != o) return b(o, u, A(n.channelId), l);
                        let s = I(a, null);
                        return null != s ? b(s, u, A(n.channelId), l) : R(r, a, u, A(n.channelId), l)
                    }
                };
            var O = {
                channelMention: M,
                channelOrMessageUrl: x,
                mediaPostLink: U
            }
        },
        270926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("404828"),
                r = n.n(l);
            let a = /\n$/,
                i = {
                    ...r.defaultRules.heading,
                    requiredFirstCharacters: [" ", "#"],
                    match: (e, t, n) => t.allowHeading ? null == n || "" === n || null != n.match(a) ? (0, l.anyScopeRegex)(/^ *(#{1,3})(?:\s+)((?![#]+)[^\n]+?)#*\s*(?:\n|$)/)(e, t, n) : null : null
                };
            var u = i
        },
        693078: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("781738");
            var l = n("627445"),
                r = n.n(l),
                a = n("404828"),
                i = n.n(a);
            let u = /\n{2,}$/,
                o = /(?:^|\n)( *)$/,
                s = "(?:[*-]|\\d+\\.)",
                c = "( *)(" + s + ") +",
                d = RegExp("^" + c),
                f = RegExp(c + "[^\\n]*(?:\\n(?!\\1" + s + " )[^\\n]*)*(\n|$)", "gm"),
                p = / *\n$/,
                h = RegExp("^( *)(" + s + ") [\\s\\S]+?(?:\\n(?! )(?!\\1" + s + " )|$)"),
                m = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/,
                g = e => e.map(e => ("text" === e.type && null != e.content && (e.content = e.content.replace(/\n+\s*$/, "")), e)),
                E = {
                    ...i.defaultRules.list,
                    requiredFirstCharacters: " *-0123456789".split(""),
                    match: (e, t) => {
                        if (!t.allowList || t._listLevel >= 11) return null;
                        let n = null == t.prevCapture ? "" : t.prevCapture[0],
                            l = o.exec(n);
                        return null == l || m.test(l[0]) ? null : h.exec(e)
                    },
                    parse: (e, t, n) => {
                        let l = e[2],
                            a = l.length > 1,
                            i = e[0].replace(u, "\n").match(f);
                        r(null != i, "markup list items can not be parsed.");
                        let o = !1,
                            s = i.map((e, l) => {
                                let r;
                                let a = d.exec(e),
                                    u = null != a ? a[0].length : 0,
                                    s = RegExp("^ {1," + u + "}", "gm"),
                                    c = e.replace(s, "").replace(d, ""),
                                    f = l === i.length - 1,
                                    h = -1 !== c.indexOf("\n\n"),
                                    m = h || f && o;
                                o = m;
                                let E = n.inline,
                                    C = n._list,
                                    y = n._listLevel;
                                n._list = !0, n._listLevel = (null != y ? y : 0) + 1, m ? (n.inline = !1, r = c.replace(p, "\n\n")) : (n.inline = !0, r = c.replace(p, ""));
                                let L = g(t(r, {
                                    ...n,
                                    allowHeading: !1
                                }));
                                return n.inline = E, n._list = C, n._listLevel = y, L
                            });
                        return {
                            ordered: a,
                            start: a ? Math.min(1e9, Math.max(1, +l)) : void 0,
                            items: s
                        }
                    }
                };
            var C = E
        },
        888198: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return Q
                }
            }), n("781738"), n("424973"), n("222007");
            var l = n("917351"),
                r = n.n(l),
                a = n("404828"),
                i = n.n(a),
                u = n("980215"),
                o = n("867805"),
                s = n("235004"),
                c = n("42203"),
                d = n("305961"),
                f = n("697218"),
                p = n("387111"),
                h = n("158998"),
                m = n("946897"),
                g = n("632886"),
                E = n("270926"),
                C = n("647374"),
                y = n("693078"),
                L = n("290689"),
                A = n("839462"),
                S = n("646630"),
                _ = n("788554"),
                T = n("49111"),
                I = n("317041"),
                v = n("680894"),
                N = n("782340");
            let R = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
                b = /^$|\n *$/,
                M = /^ *>>> ?/,
                x = /^ *> ?/gm;

            function U(e) {
                let t = (0, C.punycodeLink)(e[1]);
                if (null == t) return {
                    type: "text",
                    content: e[1]
                };
                let {
                    displayTarget: n,
                    target: l
                } = t;
                return {
                    type: "link",
                    content: [{
                        type: "text",
                        content: n
                    }],
                    target: l,
                    title: void 0
                }
            }
            let O = e => {
                    let t = c.default.getChannel(e);
                    return null == t ? void 0 : t.getGuildId()
                },
                D = e => null != e.guildId ? d.default.getGuild(e.guildId) : null != e.channelId ? d.default.getGuild(O(e.channelId)) : null,
                G = {
                    newline: i.defaultRules.newline,
                    paragraph: i.defaultRules.paragraph,
                    escape: {
                        ...i.defaultRules.escape,
                        match: (e, t, n) => !1 === t.allowEscape ? null : i.defaultRules.escape.match(e, t, n)
                    },
                    blockQuote: {
                        ...i.defaultRules.blockQuote,
                        requiredFirstCharacters: [" ", ">"],
                        match(e, t) {
                            let {
                                prevCapture: n,
                                inQuote: l,
                                nested: r
                            } = t;
                            if (l || r) return null;
                            if (null == n) return R.exec(e);
                            let a = n[0];
                            return b.test(a) ? R.exec(e) : null
                        },
                        parse(e, t, n) {
                            let l = e[0],
                                r = !!M.exec(l),
                                a = l.replace(r ? M : x, ""),
                                i = n.inQuote || !1,
                                u = n.inline || !1;
                            n.inQuote = !0, !r && (n.inline = !0);
                            let o = t(a, n);
                            return n.inQuote = i, n.inline = u, 0 === o.length && o.push({
                                type: "text",
                                content: " "
                            }), {
                                content: o,
                                type: "blockQuote"
                            }
                        }
                    },
                    link: C.default,
                    autolink: {
                        ...i.defaultRules.autolink,
                        parse: U
                    },
                    url: {
                        ...i.defaultRules.url,
                        requiredFirstCharacters: ["h", "s"],
                        match(e, t) {
                            if (!t.inline) return null;
                            let n = /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])/.exec(e);
                            if (null != n) {
                                let e = 0,
                                    t = n[0];
                                for (let n = t.length - 1; n >= 0 && ")" === t[n]; n--) {
                                    let n = t.indexOf("(", e);
                                    if (-1 === n) {
                                        t = t.slice(0, t.length - 1);
                                        break
                                    }
                                    e = n + 1
                                }
                                n[0] = n[1] = t
                            }
                            return n
                        },
                        parse: U
                    },
                    strong: i.defaultRules.strong,
                    em: i.defaultRules.em,
                    u: i.defaultRules.u,
                    br: i.defaultRules.br,
                    text: L.default,
                    inlineCode: {
                        ...i.defaultRules.inlineCode,
                        parse(e, t, n) {
                            let l = i.defaultRules.inlineCode.parse(e, t, n);
                            return !0 === n.parseInlineCodeChildContent ? {
                                ...l,
                                validationChildContent: t(l.content, n)
                            } : l
                        }
                    },
                    emoticon: {
                        order: L.default.order,
                        requiredFirstCharacters: ["\xaf"],
                        match: e => /^(¯\\_\(ツ\)_\/¯)/.exec(e),
                        parse: e => ({
                            type: "text",
                            content: e[1]
                        })
                    },
                    codeBlock: {
                        order: i.defaultRules.codeBlock.order,
                        requiredFirstCharacters: ["`"],
                        match: e => /^```(?:([a-z0-9_+\-.#]+?)\n)?\n*([^\n][^]*?)\n*```/i.exec(e),
                        parse(e, t, n) {
                            var l, r;
                            return {
                                lang: null !== (l = e[1]) && void 0 !== l ? l : "",
                                content: null !== (r = e[2]) && void 0 !== r ? r : "",
                                inQuote: n.inQuote || !1
                            }
                        }
                    },
                    roleMention: {
                        order: L.default.order,
                        requiredFirstCharacters: ["<"],
                        match: e => /^<@&(\d+)>/.exec(e),
                        parse(e, t, n) {
                            let [l, r] = e;
                            if (n.returnMentionIds) return {
                                type: "roleMention",
                                id: r
                            };
                            let a = D(n),
                                i = null != a ? a.roles[r] : null;
                            return null == i ? {
                                type: "text",
                                content: "@".concat(N.default.Messages.DELETED_ROLE_PLACEHOLDER)
                            } : {
                                type: "mention",
                                channelId: n.channelId,
                                guildId: null != a ? a.id : null,
                                roleId: r,
                                roleColor: i.color,
                                color: i.color,
                                colorString: i.colorString,
                                content: [{
                                    type: "text",
                                    content: "@".concat(i.name)
                                }]
                            }
                        }
                    },
                    mention: {
                        order: L.default.order,
                        requiredFirstCharacters: ["<", "@"],
                        match(e, t) {
                            let n = /^<@!?(\d+)>|^(@(?:everyone|here|Clyde))/.exec(e);
                            return null != n && ("@Clyde" !== n[0] || (0, u.getClydeEnabled)(D(t), c.default.getChannel(t.channelId))) ? n : null
                        },
                        parse(e, t, n) {
                            let l, r;
                            if (n.returnMentionIds) return null == e[1] ? {
                                type: "mention",
                                text: e[0]
                            } : {
                                type: "mention",
                                id: e[1]
                            };
                            let a = f.default.getUser(e[1]),
                                i = c.default.getChannel(n.channelId);
                            if (null != a && (r = a.id, l = a.toString(), null != i)) {
                                var o;
                                l = null !== (o = p.default.getNickname(i.getGuildId(), n.channelId, a)) && void 0 !== o ? o : h.default.getName(a)
                            }
                            null == a && "@Clyde" === e[0] && (0, u.getClydeEnabled)(D(n), i) && (r = v.CLYDE_AI_USER_ID);
                            let s = e[1],
                                d = null != s && T.ID_REGEX.test(s.trim()),
                                m = d && n.unknownUserMentionPlaceholder ? "@".concat(N.default.Messages.UNKNOWN_USER_MENTION_PLACEHOLDER) : e[0];
                            return {
                                userId: r,
                                channelId: n.channelId,
                                guildId: null == i ? void 0 : i.getGuildId(),
                                roleName: e[2],
                                content: [{
                                    type: "text",
                                    content: null != l ? "@".concat(l) : m
                                }]
                            }
                        }
                    },
                    channelMention: g.default.channelMention,
                    channelOrMessageUrl: g.default.channelOrMessageUrl,
                    mediaPostLink: g.default.mediaPostLink,
                    attachmentLink: m.default.attachmentLink,
                    commandMention: {
                        order: i.defaultRules.text.order,
                        requiredFirstCharacters: ["<"],
                        match: e => /^<\/((?:[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?):(\d+)>/u.exec(e),
                        parse(e, t, n) {
                            if (n.returnMentionIds) return {
                                type: "commandMention",
                                id: e[2]
                            };
                            let [, ...l] = e[1].split(" "), r = "".concat(e[2]).concat([...l].map(e => "".concat(I.SUB_COMMAND_KEY_SEPARATOR).concat(e)).join(""));
                            return {
                                channelId: n.channelId,
                                commandId: e[2],
                                commandName: e[1],
                                commandKey: r,
                                content: [{
                                    type: "text",
                                    content: "".concat(e[1])
                                }]
                            }
                        }
                    },
                    emoji: {
                        order: L.default.order,
                        requiredFirstCharacters: [":"],
                        match(e) {
                            let t = o.default.EMOJI_NAME_RE.exec(e);
                            return null != t && "" !== o.default.convertNameToSurrogate(t[1]) ? t : null
                        },
                        parse(e) {
                            let t = o.default.convertNameToSurrogate(e[1]);
                            return {
                                type: "text",
                                content: null == t || "" === t ? ":".concat(e[1], ":") : t
                            }
                        }
                    },
                    soundboard: {
                        order: L.default.order,
                        requiredFirstCharacters: ["<"],
                        match: e => /^<sound:(\d+)>/.exec(e),
                        parse(e, t, n) {
                            var l;
                            let r = e[1],
                                a = s.default.getSoundById(r),
                                i = null !== (l = null == a ? void 0 : a.name) && void 0 !== l ? l : r;
                            return {
                                type: "soundboard",
                                id: r,
                                soundId: r,
                                channelId: n.channelId,
                                content: i
                            }
                        }
                    },
                    customEmoji: {
                        order: L.default.order,
                        requiredFirstCharacters: ["<"],
                        match: e => /^<a?:(\w+):(\d+)>/.exec(e),
                        parse: e => ({
                            type: "text",
                            content: ":".concat(e[1], ":")
                        })
                    },
                    timestamp: {
                        order: L.default.order - 1,
                        requiredFirstCharacters: ["<"],
                        match: e => S.TIMESTAMP_REGEX.exec(e),
                        parse(e) {
                            let [t, n, l] = e, r = (0, S.parseTimestamp)(n, l);
                            return null == r ? {
                                type: "text",
                                content: t
                            } : r
                        }
                    },
                    s: {
                        order: i.defaultRules.u.order,
                        requiredFirstCharacters: ["~"],
                        match: i.inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
                        parse: i.defaultRules.u.parse
                    },
                    spoiler: {
                        order: L.default.order,
                        requiredFirstCharacters: ["|"],
                        match: e => T.MARKDOWN_SPOILER_REGEXP.exec(e),
                        parse: (e, t, n) => ({
                            content: t(e[1], n),
                            channelId: n.channelId
                        })
                    },
                    staticRouteLink: {
                        order: L.default.order,
                        requiredFirstCharacters: ["<"],
                        match: e => T.MARKDOWN_STATIC_ROUTE_NAME_REGEXP.exec(e),
                        parse(e, t, n) {
                            let l = {
                                home: N.default.Messages.SERVER_GUIDE,
                                guide: N.default.Messages.SERVER_GUIDE,
                                browse: N.default.Messages.CHANNEL_BROWSER_TITLE,
                                customize: N.default.Messages.CHANNELS_AND_ROLES
                            };
                            return {
                                content: [{
                                    type: "text",
                                    content: l[e[1]]
                                }],
                                channelId: e[1],
                                guildId: O(n.channelId),
                                id: e[1]
                            }
                        }
                    },
                    heading: E.default,
                    list: y.default
                },
                P = (0, _.default)([G, A.default]),
                w = r.omit(P, ["inlineCode", "codeBlock", "br", "blockQuote"]),
                k = r.omit(P, ["inlineCode", "codeBlock", "br", "blockQuote", "url", "attachmentLink", "mention", "roleMention", "channelMention", "channelOrMessageUrl", "mediaPostLink"]),
                F = r.omit(P, ["codeBlock", "br", "mention", "channel", "roleMention", "attachmentLink"]),
                q = r.omit((0, _.default)([P, {
                    inlineCode: {
                        match(e, t, n) {
                            let l = P.codeBlock.match(e, t, n);
                            if (null != l) return l;
                            let r = P.inlineCode.match(e, t, n);
                            if (null != r) return r
                        }
                    }
                }]), ["blockQuote", "codeBlock", "br"]),
                B = r.omit(P, ["codeBlock", "br", "blockQuote"]),
                H = r.omit(P, ["codeBlock", "br", "attachmentLink", "mention", "roleMention", "channel", "paragraph", "newline"]),
                V = r.omit(P, ["codeBlock", "blockQuote", "br"]),
                K = r.omit(P, ["codeBlock", "br", "inlineCode"]);

            function j(e, t) {
                return 0 === e.length || 0 === t || "" === e.charAt(t - 1).trim()
            }
            let Y = (0, _.default)([{
                highlightWord: {
                    order: -1,
                    match(e, t) {
                        if (null == t.highlightWord || 0 === t.highlightWord.length) return null;
                        let n = e.indexOf(t.highlightWord);
                        if (-1 === n) return null;
                        let l = !j(e, n);
                        if (l)
                            do n = e.indexOf(t.highlightWord, n + 1), l = !j(e, n); while (l && -1 !== n);
                        if (-1 === n) return null;
                        let r = e.substring(0, n),
                            a = e.substring(n + t.highlightWord.length);
                        return [e, t.highlightWord, r, a]
                    },
                    parse(e, t, n) {
                        let l = t(e[2], n),
                            r = t(e[3], n);
                        return [...l, {
                            type: "highlight",
                            content: e[1]
                        }, ...r]
                    }
                }
            }, r.omit(P, ["url"])]);
            r.omit((0, _.default)([P, {
                mention: {
                    match(e, t, n) {
                        let l = P.codeBlock.match(e, t, n);
                        if (null != l) return l;
                        let r = P.inlineCode.match(e, t, n);
                        if (null != r) return r
                    }
                }
            }]), ["inlineCode", "codeBlock", "br", "blockQuote", "url", "attachmentLink", "roleMention", "channelMention", "channelOrMessageUrl", "mediaPostLink"]);
            var Q = {
                RULES: P,
                CHANNEL_TOPIC_RULES: w,
                VOICE_CHANNEL_STATUS_RULES: k,
                EMBED_TITLE_RULES: F,
                INLINE_REPLY_RULES: q,
                GUILD_VERIFICATION_FORM_RULES: B,
                GUILD_EVENT_RULES: V,
                PROFILE_BIO_RULES: H,
                AUTO_MODERATION_SYSTEM_MESSAGE_RULES: Y,
                NATIVE_SEARCH_RESULT_LINK_RULES: K
            }
        },
        290689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                textMarkupPatternWithExclusions: function() {
                    return a
                },
                default: function() {
                    return u
                }
            });
            var l = n("404828"),
                r = n.n(l);
            let a = e => new RegExp("^[\\s\\S]+?(?=".concat(e, "|[^0-9A-Za-z\\s\\u00ff-\\uffff]|\\n\\n| {2,}\\n|\\w+:\\S|[0-9]+\\.|$)")),
                i = {
                    ...r.defaultRules.text,
                    match: (0, l.anyScopeRegex)(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/)
                };
            var u = i
        },
        839462: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var l = n("404828"),
                r = n.n(l),
                a = n("385976"),
                i = n("867805"),
                u = n("402671"),
                o = n("290689");
            let s = {
                s: {
                    requiredFirstCharacters: ["~"],
                    match: r.inlineRegex(/^~~([\s\S]+?)~~(?!_)/)
                },
                highlight: {
                    order: o.default.order,
                    match: () => null
                },
                emoji: {
                    order: o.default.order,
                    requiredFirstCharacters: [":"],
                    match(e) {
                        let t = i.default.EMOJI_NAME_AND_DIVERSITY_RE.exec(e);
                        return null != t && "" !== i.default.convertNameToSurrogate(t[1]) ? t : null
                    },
                    parse(e) {
                        let [t, n] = e, l = i.default.convertNameToSurrogate(n);
                        return null == l || "" === l ? {
                            type: "text",
                            content: t
                        } : {
                            name: ":".concat(n, ":"),
                            surrogate: l,
                            src: u.default.getURL(l)
                        }
                    }
                },
                customEmoji: {
                    order: r.defaultRules.codeBlock.order,
                    requiredFirstCharacters: ["<"],
                    match: e => /^<(a)?:(\w+):(\d+)>/.exec(e),
                    parse(e, t, n) {
                        let [l, r, i, u] = e, {
                            guildId: o
                        } = n, s = a.default.getDisambiguatedEmojiContext(o).getById(u), c = null == s || s.require_colons;
                        return null != s && (i = s.name), {
                            emojiId: u,
                            name: c ? ":".concat(i, ":") : i,
                            animated: "a" === r
                        }
                    }
                },
                text: {
                    parse(e) {
                        let t = i.default.findInlineEmojisFromSurrogates(e[0]),
                            n = 0;
                        return t.map(e => {
                            if ("text" === e.type) {
                                let t = {
                                    index: n,
                                    0: e.text
                                };
                                return n += e.text.length, {
                                    type: "text",
                                    content: e.text,
                                    originalMatch: t
                                }
                            } {
                                let t = {
                                    index: n,
                                    0: e.surrogate
                                };
                                return n += e.surrogate.length, {
                                    type: "emoji",
                                    name: e.emojiName,
                                    surrogate: e.surrogate,
                                    src: u.default.getURL(e.surrogate),
                                    originalMatch: t
                                }
                            }
                        })
                    }
                },
                looseEm: {
                    ...r.defaultRules.em,
                    match: r.inlineRegex(RegExp("^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?) {1,2}\\*(?!\\*)")),
                    parse: (e, t, n) => ({
                        type: "em",
                        content: t(e[1], n),
                        originalMatch: e
                    })
                }
            };
            var c = s
        },
        646630: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TIMESTAMP_FORMATS: function() {
                    return u
                },
                DEFAULT_TIMESTAMP_FORMAT: function() {
                    return o
                },
                TIMESTAMP_REGEX: function() {
                    return c
                },
                parseTimestamp: function() {
                    return d
                },
                unparseTimestamp: function() {
                    return f
                }
            });
            var l = n("866227"),
                r = n.n(l),
                a = n("888400"),
                i = n("718517");
            let u = {
                    t: e => (0, a.dateFormat)(e, "LT"),
                    T: e => (0, a.dateFormat)(e, "LTS"),
                    d: e => (0, a.dateFormat)(e, "L"),
                    D: e => (0, a.dateFormat)(e, "LL"),
                    f: e => (0, a.dateFormat)(e, "LLL"),
                    F: e => (0, a.dateFormat)(e, "LLLL"),
                    R: e => {
                        let t = r.relativeTimeThreshold("s");
                        r.relativeTimeThreshold("s", 60);
                        let n = r.relativeTimeThreshold("ss");
                        r.relativeTimeThreshold("ss", -1);
                        let l = r.relativeTimeThreshold("m");
                        r.relativeTimeThreshold("m", 60);
                        let a = null;
                        try {
                            a = r(e.toDate()).fromNow()
                        } catch (e) {}
                        return r.relativeTimeThreshold("s", t), r.relativeTimeThreshold("ss", n), r.relativeTimeThreshold("m", l), null != a ? a : r(e.toDate()).fromNow()
                    }
                },
                o = "f";
            Object.setPrototypeOf(u, null);
            let s = Object.keys(u).join("|"),
                c = new RegExp("^<t:(-?\\d{1,17})(?::(".concat(s, "))?>"));

            function d(e, t) {
                let n = r(Number(e) * i.default.Millis.SECOND);
                if (!n.isValid()) return null;
                let l = null != t ? u[t] : void 0;
                return null == l && (l = u[o]), {
                    timestamp: e,
                    format: t,
                    parsed: n,
                    full: u.F(n),
                    formatted: l(n)
                }
            }

            function f(e, t) {
                return null != t ? "<t:".concat(e, ":").concat(t, ">") : "<t:".concat(e, ">")
            }
        },
        788554: function(e, t, n) {
            "use strict";

            function l(e) {
                let t = {};
                for (let n of e)
                    for (let e in n) e in t ? t[e] = {
                        ...t[e],
                        ...n[e]
                    } : t[e] = {
                        ...n[e]
                    };
                return t
            }
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("222007")
        },
        884351: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return Y
                }
            }), n("222007"), n("808653"), n("424973"), n("881410");
            var l = n("917351"),
                r = n.n(l),
                a = n("404828"),
                i = n.n(a),
                u = n("679653"),
                o = n("385976"),
                s = n("867805"),
                c = n("888198"),
                d = n("290689"),
                f = n("804888"),
                p = n("401690"),
                h = n("845579"),
                m = n("42203"),
                g = n("923959"),
                E = n("26989"),
                C = n("305961"),
                y = n("957255"),
                L = n("27618"),
                A = n("102985"),
                S = n("697218"),
                _ = n("25292"),
                T = n("402671"),
                I = n("158998"),
                v = n("49111"),
                N = n("958706"),
                R = n("782340");

            function b(e, t, n) {
                let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                if (t[0] !== e) return null;
                let r = t.substr(e.length);
                return n.sortBy(e => {
                    let {
                        text: t
                    } = e;
                    return -t.length
                }).filter(e => {
                    let {
                        text: n
                    } = e;
                    return 1 === t.toLowerCase().indexOf(n.toLowerCase())
                }).sortBy(e => {
                    let {
                        text: t
                    } = e;
                    return t === r ? 0 : 1
                }).map(t => {
                    let {
                        id: n,
                        text: r
                    } = t;
                    return [e + r, n, l]
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

            function x(e) {
                return {
                    match: i.anyScopeRegex(e),
                    parse: e => ({
                        type: "text",
                        content: e[0]
                    })
                }
            }
            let U = c.default.RULES,
                O = d.default,
                D = /^<@!?(\d+)>/,
                G = /^<@&(\d+)>/,
                P = /^<#(\d+)>/,
                w = /^<a?:(\w+):(\d+)>/,
                k = /(@everyone|@here|@Clyde)\b/,
                F = {
                    link: M(i.defaultRules.link),
                    autolink: M(i.defaultRules.autolink),
                    url: M(i.defaultRules.url),
                    inlineCode: M(U.inlineCode),
                    codeBlock: M(U.codeBlock),
                    rawUserMention: x(D),
                    rawRoleMention: x(G),
                    rawChannelMention: x(P),
                    rawEmoji: x(w),
                    mention: {
                        match(e, t, n) {
                            let l = n.split(" ").pop() + e;
                            if (/^[^ ]+@[^ ]+\.[^ .]+/.test(l)) return null;
                            let r = b("@", e, t.users, "mention");
                            if (r || (r = b("@", e, t.mentionableRoles, "roleMention"))) return r;
                            let a = t.users.map(e => ({
                                ...e,
                                text: e.text.split("#")[0]
                            }));
                            if (!(r = b("@", e, a, "mention"))) return null;
                            let i = k.exec(e);
                            if (null != i && r[0].length <= i[0].length) return null;
                            if ("" === n && (0, f.canSuppressNotifications)()) {
                                let t = f.SILENT_RE.exec(e);
                                if (null != t && r[0].length <= t[0].length) return null
                            }
                            return r
                        },
                        parse(e) {
                            let [, t, n] = e, l = "@";
                            return "roleMention" === n && (l += "&"), {
                                type: n,
                                content: "<".concat(l).concat(t, ">")
                            }
                        }
                    },
                    channel: {
                        match: (e, t) => (function(e, t, n) {
                            let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                            if (t[0] !== e) return null;
                            if ('"' !== t[1]) return b(e, t, n, l);
                            let r = 2;
                            for (; r < t.length; r++) {
                                if ("\\" === t[r]) {
                                    r++;
                                    continue
                                }
                                if ('"' === t[r]) break
                            }
                            let a = t.substring(0, r + 1),
                                i = (0, u.unescapeChannelName)(t.substring(2, r));
                            return n.sortBy(e => {
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
                                return [a, t, l]
                            }).first()
                        })("#", e, t.channels),
                        parse: e => ({
                            type: "text",
                            content: "<#".concat(e[1], ">")
                        })
                    },
                    emoticon: {
                        match(e, t, n) {
                            if (!h.ConvertEmoticons.getSetting() || 0 !== n.length && !/\s$/.test(n)) return null;
                            let l = s.default.EMOJI_SHORTCUT_RE.exec(e);
                            return null == l || l[0].length !== e.length && " " !== e[l[0].length] && "\n" !== e[l[0].length] ? null : l
                        },
                        parse: e => ({
                            type: "emoticon",
                            content: s.default.convertShortcutToName(e[1]),
                            isShortcut: !0
                        })
                    },
                    emoji: {
                        order: U.emoji.order,
                        match: e => s.default.EMOJI_NAME_RE.exec(e),
                        parse(e, t, n) {
                            let [l, r] = e, {
                                customEmoji: a
                            } = n, i = Object.prototype.hasOwnProperty.call(a, r) ? a[r] : null;
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
                                content: l
                            }
                        }
                    },
                    customEmoticons: {
                        match(e, t) {
                            var n, l;
                            return null !== (l = null === (n = t.customEmoticonsRegex) || void 0 === n ? void 0 : n.exec(e)) && void 0 !== l ? l : null
                        },
                        parse(e, t, n) {
                            let [l, r] = e, {
                                emojiContext: a
                            } = n, i = a.getEmoticonByName(r);
                            return null != i ? {
                                type: "customEmoticon",
                                content: "<".concat(!0 === i.animated ? "a" : "", ":").concat(i.name, ":").concat(i.id, ">"),
                                emoji: i
                            } : {
                                type: "text",
                                content: l
                            }
                        }
                    },
                    text: {
                        ...O,
                        match: (e, t) => "string" == typeof t.textExclusions && "" !== t.textExclusions ? (0, d.textMarkupPatternWithExclusions)(t.textExclusions).exec(e) : null != O.match ? O.match(e, t, "") : null
                    }
                },
                q = {
                    inlineCode: M(U.inlineCode),
                    codeBlock: M(U.codeBlock),
                    mention: {
                        match: i.anyScopeRegex(D),
                        parse(e, t, n) {
                            let {
                                isNotification: l
                            } = n, r = S.default.getUser(e[1]);
                            if (null == r) return {
                                content: e[0]
                            };
                            let a = I.default.getUserTag(r, {
                                identifiable: l && A.default.enabled ? "never" : "always"
                            });
                            if (!l) return {
                                content: "@".concat(a)
                            };
                            {
                                let e = I.default.getGlobalName(r);
                                return {
                                    content: null != e ? "@".concat(e) : "@".concat(a)
                                }
                            }
                        }
                    },
                    roleMention: {
                        match: i.anyScopeRegex(G),
                        parse(e, t, n) {
                            let {
                                guild: l
                            } = n;
                            if (null != l) {
                                let t = l.roles[e[1]];
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
                        match: i.anyScopeRegex(P),
                        parse(e) {
                            let t = m.default.getChannel(e[1]);
                            return {
                                content: null == t ? e[0] : (0, u.computeChannelName)(t, S.default, L.default, !0, !0)
                            }
                        }
                    },
                    emoji: {
                        match: i.anyScopeRegex(w),
                        parse(e, t, n) {
                            let [l, r, a] = e, {
                                guild: i
                            } = n, u = o.default.getDisambiguatedEmojiContext(i ? i.id : null).getById(a), s = null != u ? u.name : r;
                            return {
                                content: ":".concat(s, ":")
                            }
                        }
                    },
                    soundboard: {
                        match: i.anyScopeRegex(/^<sound:(\d+)>/),
                        parse(e) {
                            let [t, n] = e;
                            return {
                                content: "<sound:".concat(n, ">")
                            }
                        }
                    },
                    spoiler: {
                        match: i.anyScopeRegex(v.MARKDOWN_SPOILER_REGEXP),
                        parse: () => ({
                            content: "<".concat(R.default.Messages.SPOILER.toLowerCase(), ">")
                        })
                    },
                    staticRouteLink: {
                        match: i.anyScopeRegex(v.MARKDOWN_STATIC_ROUTE_NAME_REGEXP),
                        parse: e => ({
                            content: "<id:".concat(e[1], ">")
                        })
                    },
                    timestamp: {
                        ...U.timestamp,
                        parse() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            let l = U.timestamp.parse(...t);
                            return {
                                content: l.formatted
                            }
                        }
                    },
                    text: {
                        ...O
                    }
                };
            [F, q].forEach(e => {
                Object.keys(e).forEach((t, n) => {
                    e[t].order = n
                })
            });
            let B = i.parserFor(F),
                H = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;

            function V(e, t, n, l) {
                let r = "";
                return e.forEach(e => {
                    if (! function(e, t, n) {
                            if (null != n && ("customEmoticon" === t.type && n(t.emoji, !1), "emoticon" === t.type || "text" === t.type)) {
                                let l;
                                let r = s.default.translateSurrogatesToInlineEmoji(t.content);
                                for (; null !== (l = H.exec(r));) {
                                    let r;
                                    null != l[1] && "" !== l[1] ? e.emojiContext && (r = e.emojiContext.getById(l[1])) : r = s.default.getByName(l[2]), r && n(r, t.isShortcut || !1)
                                }
                            }
                        }(t, e, l), "string" == typeof e.content) switch (e.type) {
                        case "codeBlock":
                        case "inlineCode":
                        case "mention":
                        case "roleMention":
                        case "channel":
                        case "emoji":
                            r += e.content;
                            break;
                        default:
                            r += n(e.content)
                    } else e.content.constructor === Array ? r += V(e.content, t, n, l) : console.warn("Unknown message item type: ", e)
                }), r
            }

            function K(e) {
                let t;
                let n = null == e ? void 0 : e.getGuildId(),
                    l = null != n ? C.default.getGuild(n) : null,
                    a = y.default.can(v.Permissions.MENTION_EVERYONE, e);
                t = (null == e ? void 0 : e.isPrivate()) ? e.recipients.map(e => ({
                    userId: e,
                    nick: null
                })) : null != n ? E.default.getMembers(n).map(e => {
                    let {
                        userId: t,
                        nick: n
                    } = e;
                    return {
                        userId: t,
                        nick: n
                    }
                }) : [];
                let i = r(t.reduce((e, t) => {
                        let {
                            userId: n
                        } = t, l = S.default.getUser(n);
                        return null == l ? e : (e.push({
                            id: n,
                            text: l.tag
                        }), e)
                    }, [])),
                    u = r(null != l ? l.roles : {}).values().filter(e => {
                        let {
                            mentionable: t
                        } = e;
                        return a || t
                    }).map(e => {
                        let {
                            id: t,
                            name: n
                        } = e;
                        return {
                            id: t,
                            text: n
                        }
                    }),
                    s = r(g.default.getTextChannelNameDisambiguations(n)).map(e => {
                        let {
                            id: t,
                            name: n
                        } = e;
                        return {
                            id: t,
                            text: n
                        }
                    }),
                    c = null != n ? r(_.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS).filter(e => e !== g.GUILD_SELECTABLE_CHANNELS_KEY).flatMap(e => g.default.getChannels(n)[e].map(e => ({
                        id: e.channel.id,
                        text: e.channel.name
                    }))).value() : [],
                    d = p.default.computeAllActiveJoinedThreads(n).map(e => ({
                        id: e.id,
                        text: e.name
                    })),
                    f = o.default.getDisambiguatedEmojiContext(n),
                    h = f.getEscapedCustomEmoticonNames(),
                    m = f.getCustomEmoji(),
                    L = f.getCustomEmoticonRegex(),
                    A = {
                        inline: !0,
                        mentionableRoles: u,
                        guild: l,
                        users: i,
                        channels: s.concat(c).concat(d),
                        emojiContext: f,
                        customEmoticonsRegex: L,
                        customEmoji: m,
                        textExclusions: h,
                        disableErrorGuards: !0
                    };
                return A
            }

            function j(e) {
                return e
            }
            var Y = {
                parse(e, t) {
                    var n, l, r;
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                        i = null != a ? a : K(e),
                        u = {
                            content: t,
                            tts: !1,
                            invalidEmojis: [],
                            validNonShortcutEmojis: []
                        };
                    return u.content = (n = u.content, l = i, r = (t, n) => {
                        T.default.isEmojiPremiumLocked({
                            emoji: t,
                            channel: e,
                            intention: N.EmojiIntention.CHAT
                        }) ? u.invalidEmojis.push(t) : !n && u.validNonShortcutEmojis.push(t)
                    }, V(B(n, l), l, s.default.translateInlineEmojiToSurrogates, r)), u
                },
                parsePreprocessor(e, t) {
                    let n = K(e);
                    return B(t, n)
                },
                unparse(e, t, n) {
                    let l = m.default.getChannel(t),
                        a = null != l ? l.getGuildId() : null,
                        u = null != a ? C.default.getGuild(a) : null,
                        o = n ? q : r.omit(q, ["spoiler", "timestamp"]),
                        c = n ? j : s.default.translateSurrogatesToInlineEmoji,
                        d = i.parserFor(o),
                        f = {
                            inline: !0,
                            guild: u,
                            isNotification: n
                        };
                    return V(d(e, f), f, c)
                }
            }
        },
        729912: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SilentMessagesExperiment: function() {
                    return r
                }
            });
            var l = n("862205");
            let r = (0, l.createExperiment)({
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
        804888: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SILENT_RE: function() {
                    return a
                },
                canSuppressNotifications: function() {
                    return i
                },
                default: function() {
                    return u
                }
            });
            var l = n("729912");
            let r = "@silent",
                a = new RegExp("^".concat(r, "(\\s|$)"));

            function i() {
                let e = l.SilentMessagesExperiment.getCurrentConfig({
                    location: "456bd9_1"
                }, {
                    autoTrackExposure: !1
                });
                return e.allowSending
            }

            function u(e) {
                return i() && null != e.match(a) ? [!0, e.substring(r.length).trim()] : [!1, e]
            }
        },
        577427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return Y
                }
            }), n("222007");
            var l = n("448105"),
                r = n.n(l),
                a = n("917351"),
                i = n.n(a),
                u = n("866227"),
                o = n.n(u),
                s = n("446674"),
                c = n("913144"),
                d = n("299285"),
                f = n("860285"),
                p = n("915639"),
                h = n("86878"),
                m = n("546463"),
                g = n("686470"),
                E = n("568307"),
                C = n("102985"),
                y = n("251013"),
                L = n("946749"),
                A = n("535974"),
                S = n("352326"),
                _ = n("718517"),
                T = n("117362"),
                I = n("449008"),
                v = n("964889"),
                N = n("773336"),
                R = n("50885"),
                b = n("602043"),
                M = n("9377"),
                x = n("49111");
            let U = o().subtract(1, "week"),
                O = [],
                D = "",
                G = !1;

            function P(e, t) {
                return e.application.name.localeCompare(t.application.name, p.default.locale, {
                    sensitivity: "base"
                })
            }
            let w = {
                    [x.GameTableListKeys.NAME]: P,
                    [x.GameTableListKeys.PLATFORM]: (e, t, n) => {
                        let l = e.libraryApplication.getDistributor(),
                            r = t.libraryApplication.getDistributor();
                        return l === r ? (n === x.TableSortDirections.DESCENDING ? -1 : 1) * P(e, t) : null == l ? 1 : null == r ? -1 : l.localeCompare(r)
                    },
                    [x.GameTableListKeys.LAST_PLAYED]: (e, t) => e.isNew && !t.isNew ? -1 : !e.isNew && t.isNew ? 1 : e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1,
                    [x.GameTableListKeys.ACTIONS]: null
                },
                k = (0, T.cachedFunction)(e => e.filter(e => null != e.libraryApplication && e.shouldShowInLibrary)),
                F = (0, T.cachedFunction)(e => e.filter(e => null != e.libraryApplication && A.default.isLaunchable(e.libraryApplication.id, e.libraryApplication.branchId))),
                q = (0, T.cachedFunction)((e, t) => e.filter(e => r(t.toLowerCase(), e.application.name.toLowerCase()))),
                B = (0, T.cachedFunction)((e, t, n, l) => {
                    let r = w[t];
                    if (null == r) return e;
                    let a = [...e],
                        i = a.sort(r);
                    return n === x.TableSortDirections.DESCENDING ? i.reverse() : i
                }),
                H = (0, T.cachedFunction)(e => e.filter(e => null != e.libraryApplication && e.libraryApplication.isHidden()));

            function V(e, t) {
                let n = y.default.getCurrentUserStatisticsForApplication(e.id);
                if (null != n) return new Date(n.last_played_at).getTime();
                let l = t[e.id];
                return null != l ? l : 0
            }

            function K() {
                let e = new Set(E.default.getRunningVerifiedApplicationIds()),
                    t = {},
                    n = new Set,
                    l = E.default.getGamesSeen(!1, !1).map(e => {
                        let n = m.default.getGameByGameData(e);
                        return null != n ? (t[n.id] = e.lastFocused * _.default.Millis.SECOND, n.id) : null
                    }),
                    r = Object.values(g.default.getAllLibraryApplications()),
                    a = r.map(l => (function(e, t, n, l, r) {
                        var a, i;
                        if (!r && t.has(e.id)) return null;
                        let u = d.default.getApplication(e.id);
                        if (null == u) return null;
                        let s = V(u, n);
                        if (t.add(e.id), !(0, v.isUserEntitledToLibraryApplication)(e) && !A.default.isInstalled(e.id, e.branchId)) return null;
                        return {
                            key: "".concat(e.id, "-").concat(e.branchId),
                            application: u,
                            libraryApplication: e,
                            lastPlayed: s,
                            supportsCloudSync: null != e && A.default.supportsCloudSync(e.id, e.branchId),
                            isNew: (a = e, i = s, null != a && o(a.createdAt).isAfter(U) && 0 === i),
                            isLaunching: f.default.launchingGames.has(e.id),
                            isRunning: l.has(e.id),
                            isLaunchable: (0, b.isLaunchable)({
                                LibraryApplicationStore: g.default,
                                LaunchableGameStore: f.default,
                                DispatchApplicationStore: A.default,
                                ConnectedAppsStore: h.default,
                                applicationId: e.id,
                                branchId: e.branchId
                            }),
                            isUpdatingFlags: g.default.isUpdatingFlags(e.id, e.branchId),
                            shouldShowInLibrary: (0, v.shouldShowGameInLibrary)(u, e, C.default),
                            defaultAction: (0, M.getDefaultLibraryApplicationAction)(e, A.default, S.default)
                        }
                    })(l, n, t, e, !0)).filter(I.isNotNullish),
                    u = l.map(l => (function(e, t, n, l) {
                        let r = null != e ? d.default.getApplication(e) : null;
                        if (null == r || null == e || t.has(e)) return null;
                        let a = V(r, n);
                        return t.add(e), {
                            key: e,
                            application: r,
                            lastPlayed: a,
                            supportsCloudSync: !1,
                            isNew: !1,
                            isLaunching: f.default.launchingGames.has(e),
                            isRunning: l.has(e),
                            isLaunchable: (0, b.isLaunchable)({
                                LibraryApplicationStore: g.default,
                                LaunchableGameStore: f.default,
                                DispatchApplicationStore: A.default,
                                ConnectedAppsStore: h.default,
                                applicationId: e,
                                branchId: null
                            }),
                            isUpdatingFlags: !1,
                            shouldShowInLibrary: !1,
                            libraryApplication: null,
                            defaultAction: null
                        }
                    })(l, n, t, e)).filter(I.isNotNullish),
                    s = [...u, ...a].sort((e, t) => e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1);
                return G = null != m.default.lastFetched && g.default.fetched, !i.isEqual(s, O) && (O = s, N.isPlatformEmbedded && R.default.setSystemTrayApplications(F(O).map(e => e.application).slice(0, 5)), !0)
            }
            class j extends s.default.Store {
                initialize() {
                    this.syncWith([d.default, m.default, f.default, E.default, A.default, S.default, g.default, y.default, C.default, h.default], K, 200), this.syncWith([L.default, p.default], () => !0)
                }
                get applicationFilterQuery() {
                    return D
                }
                get applicationViewItems() {
                    return O
                }
                get launchableApplicationViewItems() {
                    return F(O)
                }
                get libraryApplicationViewItems() {
                    return k(O)
                }
                get filteredLibraryApplicationViewItems() {
                    return q(this.libraryApplicationViewItems, D)
                }
                get sortedFilteredLibraryApplicationViewItems() {
                    return B(this.filteredLibraryApplicationViewItems, L.default.sortKey, L.default.sortDirection, p.default.locale)
                }
                get hiddenLibraryApplicationViewItems() {
                    return H(O)
                }
                get hasFetchedApplications() {
                    return G
                }
            }
            j.displayName = "ApplicationViewStore";
            var Y = new j(c.default, {
                LIBRARY_APPLICATION_FILTER_UPDATE: function(e) {
                    let {
                        query: t
                    } = e;
                    D = t
                }
            })
        },
        9377: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getDefaultLibraryApplicationAction: function() {
                    return a
                }
            });
            var l = n("602043"),
                r = n("49111");

            function a(e, t, n) {
                let a = t.getState(e.id, e.branchId),
                    i = n.getQueuePosition(e.id, e.branchId),
                    u = n.paused;
                if (null != a) {
                    if (null == i || -1 === i) switch (a.type) {
                        case r.LocalDispatchApplicationStates.INSTALLING:
                            return r.LibraryApplicationActions.INSTALL;
                        case r.LocalDispatchApplicationStates.UPDATING:
                        case r.LocalDispatchApplicationStates.UPDATE_REQUIRED:
                            return r.LibraryApplicationActions.UPDATE
                    }
                    switch (a.type) {
                        case r.LocalDispatchApplicationStates.INSTALLING:
                        case r.LocalDispatchApplicationStates.UPDATING:
                        case r.LocalDispatchApplicationStates.UPDATE_REQUIRED:
                        case r.LocalDispatchApplicationStates.REPAIRING:
                            if (i > 0) return r.LibraryApplicationActions.MOVE_UP;
                            if (u) return r.LibraryApplicationActions.RESUME;
                            return r.LibraryApplicationActions.PAUSE;
                        case r.LocalDispatchApplicationStates.UP_TO_DATE:
                            return r.LibraryApplicationActions.PLAY;
                        case r.LocalDispatchApplicationStates.UNINSTALLING:
                            return null
                    }
                }
                return null != i && i > 0 ? r.LibraryApplicationActions.MOVE_UP : (0, l.isSupportedPlatform)() ? r.LibraryApplicationActions.INSTALL : null
            }
        },
        946749: function(e, t, n) {
            "use strict";
            let l;
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var r = n("917351"),
                a = n.n(r),
                i = n("446674"),
                u = n("95410"),
                o = n("913144"),
                s = n("49111");
            let c = "GameLibraryViewStore",
                d = s.TableSortDirections.ASCENDING,
                f = s.GameTableListKeys.LAST_PLAYED,
                p = !1,
                h = a.debounce(() => {
                    p = !1, g.emitChange()
                }, 200);
            class m extends i.default.Store {
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
                    return l
                }
                get isNavigatingByKeyboard() {
                    return p
                }
            }
            m.displayName = "GameLibraryViewStore";
            let g = new m(o.default, {
                LIBRARY_TABLE_SORT_UPDATE: function(e) {
                    let {
                        direction: t,
                        key: n
                    } = e;
                    d = t, f = n, u.default.set(c, {
                        sortDirection: d,
                        sortKey: f
                    })
                },
                LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE: function(e) {
                    let {
                        key: t,
                        isKeyboardEvent: n
                    } = e;
                    n && (p = !0, h()), l = t
                }
            });
            var E = g
        },
        25292: function(e, t, n) {
            "use strict";
            let l;
            n.r(t), n.d(t, {
                COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS: function() {
                    return ee
                },
                default: function() {
                    return ei
                }
            }), n("424973"), n("843762"), n("781738"), n("222007");
            var r = n("448105"),
                a = n.n(r),
                i = n("917351"),
                u = n.n(i),
                o = n("195547"),
                s = n("679653"),
                c = n("966506"),
                d = n("605250"),
                f = n("385976"),
                p = n("677315"),
                h = n("361776"),
                m = n("290886"),
                g = n("866353"),
                E = n("865372"),
                C = n("364685"),
                y = n("161585"),
                L = n("401690"),
                A = n("872173"),
                S = n("233069"),
                _ = n("766274"),
                T = n("42203"),
                I = n("923959"),
                v = n("26989"),
                N = n("305961"),
                R = n("377253"),
                b = n("957255"),
                M = n("824563"),
                x = n("27618"),
                U = n("18494"),
                O = n("162771"),
                D = n("697218"),
                G = n("552712"),
                P = n("449008"),
                w = n("651879"),
                k = n("991170"),
                F = n("655518"),
                q = n("159885"),
                B = n("158998"),
                H = n("49111"),
                V = n("375822"),
                K = n("724210"),
                j = n("782340");
            let Y = new d.default("AutocompleteUtils"),
                Q = () => !0,
                W = /(\t|\s)/,
                z = [];
            l = n("905571").default;
            let X = l.MENTION_EVERYONE,
                $ = l.MENTION_HERE,
                J = l.LAUNCHABLE_APPLICATIONS;

            function Z() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                return 1e3 * e * (null != t ? t : 1)
            }
            let ee = [I.GUILD_SELECTABLE_CHANNELS_KEY, I.GUILD_VOCAL_CHANNELS_KEY, H.ChannelTypes.GUILD_CATEGORY];

            function et(e, t) {
                let {
                    exactQuery: n,
                    containQuery: l,
                    queryLower: r
                } = t, i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                try {
                    if (n.test(e)) {
                        if (e.toLocaleLowerCase() === r) return 10;
                        return 7
                    }
                    if (l.test(e)) return 5;
                    if (function(e, t) {
                            let n = e.split(/(?:,| )+/);
                            return n.every(e => {
                                let n = RegExp(F.default.escape(e), "i");
                                return n.test(t)
                            })
                        }(r, e)) return 3;
                    if (i && a(r, e)) return 1
                } catch (e) {
                    Y.error(e)
                }
                return 0
            }

            function en(e) {
                return (null == e ? void 0 : e.joinedAt) != null && !e.isPending
            }

            function el(e) {
                let {
                    query: t,
                    members: n,
                    limit: l,
                    filter: r,
                    allowSnowflake: i
                } = e, u = D.default.getUsers(), s = O.default.getGuildId(), c = t.toLocaleLowerCase(), d = (0, q.normalize)(c), f = [], p = [], h = n.length, m = 0, g = 0;
                for (; m < h;) {
                    var E, C, y, L, A, S, T, I, N;
                    let e, l;
                    let o = n[m];
                    o instanceof _.default ? (l = o, e = null === (C = v.default.getNick(s, l.id)) || void 0 === C ? void 0 : C.toLocaleLowerCase()) : (e = null === (y = o.nick) || void 0 === y ? void 0 : y.toLocaleLowerCase(), l = u[o.userId]);
                    let h = null === (E = B.default.getGlobalName(l)) || void 0 === E ? void 0 : E.toLocaleLowerCase();
                    if (null == r || r(l)) {
                        let n = l.username.toLocaleLowerCase(),
                            r = (0, q.stripDiacritics)(n),
                            u = (0, q.normalize)(r),
                            o = null != e ? (0, q.stripDiacritics)(e) : null,
                            s = null != o ? (0, q.normalize)(o) : null,
                            m = null != h ? (0, q.stripDiacritics)(h) : null,
                            E = null != m ? (0, q.normalize)(m) : null;
                        i && t === l.id || n.substring(0, c.length) === c || r.substring(0, c.length) === c || (null == e ? void 0 : e.substring(0, c.length)) === c || (null == o ? void 0 : o.substring(0, c.length)) === c || (null == h ? void 0 : h.substring(0, c.length)) === c || (null == m ? void 0 : m.substring(0, c.length)) === c ? f.push({
                            type: V.AutocompleterResultTypes.USER,
                            record: l,
                            score: 10,
                            comparator: null !== (L = null != h ? h : e) && void 0 !== L ? L : n,
                            sortable: null !== (A = null != m ? m : o) && void 0 !== A ? A : r
                        }) : u.substring(0, d.length) === d || (null == s ? void 0 : s.substring(0, d.length)) === d || (null == E ? void 0 : E.substring(0, d.length)) === d ? f.push({
                            type: V.AutocompleterResultTypes.USER,
                            record: l,
                            score: 1,
                            comparator: null !== (S = null != h ? h : e) && void 0 !== S ? S : n,
                            sortable: null !== (T = null != m ? m : o) && void 0 !== T ? T : r
                        }) : g < 50 && (a(c, r) || a(d, u) || null != o && a(c, o) || null != s && a(d, s) || null != m && a(c, m) || null != E && a(d, E)) && (p.push({
                            type: V.AutocompleterResultTypes.USER,
                            record: l,
                            score: 1,
                            comparator: null !== (I = null != h ? h : e) && void 0 !== I ? I : n,
                            sortable: null !== (N = null != m ? m : o) && void 0 !== N ? N : r
                        }), g += 1)
                    }
                    m += 1
                }
                return f.sort(o.default), f.length < l && (p.sort(o.default), f = f.concat(p.slice(0, Math.max(0, l - f.length)))), f.length > l && (f.length = l), f
            }

            function er(e, t, n) {
                let l = 0,
                    r = null;
                for (let a of t) {
                    let t = et(e, a, n);
                    t > l && (l = t, r = a)
                }
                return null != r && (r.isFullMatch ? t.length = 0 : t.splice(t.indexOf(r), 1)), l
            }

            function ea(e, t) {
                let n = T.default.getChannel(e);
                return null == e || null == n ? [] : u(R.default.getMessages(e).toArray()).reverse().uniqBy(e => e.author.id).map(e => D.default.getUser(e.author.id)).filter(e => {
                    if (null == e || e.isNonUserBot()) return !1;
                    let t = n.getGuildId();
                    if (null == t) return !0;
                    let l = v.default.getMember(t, e.id);
                    return en(l)
                }).map(e => {
                    var t;
                    let l = n.getGuildId(),
                        r = null != l ? v.default.getMember(l, e.id) : null;
                    return {
                        type: V.AutocompleterResultTypes.USER,
                        record: e,
                        score: 0,
                        comparator: null !== (t = null == r ? void 0 : r.nick) && void 0 !== t ? t : B.default.getName(e)
                    }
                }).take(t).value()
            }
            var ei = {
                queryFriends(e) {
                    let {
                        query: t,
                        limit: n = 10,
                        _fuzzy: l = !0,
                        filter: r
                    } = e;
                    return el({
                        query: t,
                        members: x.default.getFriendIDs().map(e => D.default.getUser(e)).filter(P.isNotNullish),
                        limit: n,
                        filter: r
                    })
                },
                queryDMUsers(e) {
                    let {
                        query: t,
                        limit: n = 10,
                        filter: l
                    } = e;
                    return el({
                        query: t,
                        members: T.default.getDMUserIds().map(e => D.default.getUser(e)).filter(P.isNotNullish),
                        limit: n,
                        filter: l
                    })
                },
                queryChannelUsers(e) {
                    let t, {
                            channelId: n,
                            query: l,
                            limit: r = 10,
                            request: a = !0,
                            checkRecentlyTalkedOnEmptyQuery: i = !0,
                            allowSnowflake: u = !1
                        } = e,
                        o = T.default.getChannel(n);
                    if (null == o) return [];
                    let s = o.isThread() ? T.default.getChannel(o.parent_id) : null,
                        c = null != s ? s : o;
                    if (null == c) return [];
                    if (c.isPrivate()) {
                        t = c.recipients.map(e => {
                            var t;
                            return {
                                userId: e,
                                nick: null !== (t = x.default.getNickname(e)) && void 0 !== t ? t : null
                            }
                        });
                        let e = D.default.getCurrentUser();
                        null != e && t.push({
                            userId: e.id,
                            nick: null
                        })
                    } else {
                        if (0 === l.length && i) {
                            let e = ea(o.id, r);
                            if (e.length > 0) return e
                        }
                        t = v.default.getMembers(c.guild_id).filter(en), a && w.default.requestMembers(c.guild_id, l, r)
                    }
                    return el({
                        query: l,
                        members: t,
                        limit: r,
                        filter: e => c.isPrivate() || k.default.can({
                            permission: H.Permissions.VIEW_CHANNEL,
                            user: e,
                            context: c
                        }),
                        allowSnowflake: u
                    })
                },
                queryGuildUsers(e) {
                    let {
                        guildId: t,
                        query: n,
                        limit: l = 10,
                        request: r = !0,
                        checkRecentlyTalkedOnEmptyQuery: a = !0,
                        filter: i,
                        allowSnowflake: u
                    } = e;
                    if (null == N.default.getGuild(t)) return [];
                    if (0 === n.length && a) {
                        let e = ea(U.default.getChannelId(t), l);
                        if (e.length > 0) return e
                    }
                    let o = v.default.getMembers(t).filter(en);
                    return r && n.length > 0 && w.default.requestMembers(t, n, l), el({
                        query: n,
                        members: o,
                        limit: l,
                        filter: i,
                        allowSnowflake: u
                    })
                },
                queryUsers(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                        n = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], !(arguments.length > 3) || void 0 === arguments[3] || arguments[3]),
                        l = arguments.length > 4 ? arguments[4] : void 0;
                    return n && e.length > 0 && w.default.requestMembers(null, e, t), el({
                        query: e,
                        members: u(D.default.getUsers()).values().value(),
                        limit: t,
                        filter: l
                    })
                },
                queryChannels(e) {
                    let t, {
                            query: n,
                            guildId: l,
                            limit: r = H.MAX_AUTOCOMPLETE_RESULTS,
                            fuzzy: a = !0,
                            filter: i = Q,
                            type: c = I.GUILD_SELECTABLE_CHANNELS_KEY,
                            allowEmptyQueries: d = !1,
                            requireVocalConnectAccess: f = !0,
                            boosters: p = {},
                            allowSnowflake: h
                        } = e,
                        m = function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                n = e.split(" ").filter(e => "" !== e || t).map(e => {
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
                                n.unshift({
                                    queryLower: t,
                                    exactQuery: RegExp("^".concat(F.default.escape(t).replace(" ", "( |-)")), "i"),
                                    containQuery: RegExp(F.default.escape(t).replace(" ", "( |-)"), "i"),
                                    isFullMatch: !0
                                })
                            }
                            return n
                        }(n, d);
                    t = null != l ? u(I.default.getChannels(l)[c]).map(e => e.channel).concat(L.default.computeAllActiveJoinedThreads(l)).value() : u(T.default.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(L.default.computeAllActiveJoinedThreads()).value();
                    let g = {},
                        E = [];
                    for (let e of t) {
                        var C, y, A, _, v;
                        if (C = c, y = e.type, A = null != l, !(C === y || (A || (0, S.isGuildChannelType)(y)) && (C === I.GUILD_SELECTABLE_CHANNELS_KEY ? (0, S.isGuildSelectableChannelType)(y) || (0, S.isGuildVocalChannelType)(y) : C === I.GUILD_VOCAL_CHANNELS_KEY && (0, S.isGuildVocalChannelType)(y))) || (0, S.isGuildChannelType)(e.type) && !b.default.can(f ? e.accessPermissions : H.Permissions.VIEW_CHANNEL, e) || !i(e)) continue;
                        let t = [...m],
                            r = e.name.toLocaleLowerCase(),
                            u = h && n === e.id,
                            o = u ? 10 : er(r, t, a);
                        if (0 !== o) {
                            if (t.length > 0) {
                                for (let n of [function(e, t) {
                                        if (null == e.guild_id) return;
                                        let n = t[e.guild_id];
                                        if (null == n) {
                                            var l;
                                            n = t[e.guild_id] = null === (l = N.default.getGuild(e.guild_id)) || void 0 === l ? void 0 : l.toString().toLocaleLowerCase()
                                        }
                                        return n
                                    }(e, g), function(e, t) {
                                        if (null == e.parent_id) return;
                                        let n = t[e.parent_id];
                                        if (null == n) {
                                            var l;
                                            n = t[e.parent_id] = null === (l = T.default.getChannel(e.parent_id)) || void 0 === l ? void 0 : l.name.toLocaleLowerCase()
                                        }
                                        return n
                                    }(e, g)]) {
                                    if (null == n || "" === n) continue;
                                    let e = er(n, t, !1);
                                    0 !== e && (o += .5 * e)
                                }
                                o = Math.min(9, o)
                            }
                            if (0 !== o && !(t.length > 1) && (1 !== t.length || t[0].isFullMatch || u)) {
                                ;
                                if (_ = c, v = e.type, _ === I.GUILD_SELECTABLE_CHANNELS_KEY && (0, S.isGuildVocalChannelType)(v)) o = Math.max(o - 1, .5);
                                E.push({
                                    type: (0, S.isGuildVocalChannelType)(e.type) ? V.AutocompleterResultTypes.VOICE_CHANNEL : V.AutocompleterResultTypes.TEXT_CHANNEL,
                                    record: e,
                                    score: Z(o, p[e.id]),
                                    comparator: (0, s.computeChannelName)(e, D.default, x.default),
                                    sortable: r
                                })
                            }
                        }
                    }
                    return E.sort(o.default), null != r && E.length > r && (E.length = r), E
                },
                queryGuilds(e) {
                    let {
                        query: t,
                        limit: n = 10,
                        fuzzy: l = !0,
                        filter: r = Q,
                        boosters: a = {}
                    } = e, i = "" === t ? "" : t.toLocaleLowerCase(), s = {
                        exactQuery: RegExp("^".concat(F.default.escape(i)), "i"),
                        containQuery: RegExp(F.default.escape(i), "i"),
                        queryLower: i
                    }, c = [], d = u(N.default.getGuilds()).values().value();
                    for (let e of d) {
                        if (!r(e)) continue;
                        let t = e.name.toLocaleLowerCase(),
                            n = et(t, s, l);
                        n > 0 && c.push({
                            type: V.AutocompleterResultTypes.GUILD,
                            record: e,
                            score: Z(n, a[e.id]),
                            comparator: e.toString(),
                            sortable: t
                        })
                    }
                    return c.sort(o.default), c.length > n && (c.length = n), c
                },
                queryGroupDMs(e) {
                    let {
                        query: t,
                        limit: n = 10,
                        fuzzy: l = !0,
                        filter: r = Q,
                        boosters: a = {}
                    } = e, i = (0, q.stripDiacritics)((0, q.normalize)(t.toLocaleLowerCase())), c = {
                        exactQuery: RegExp("^".concat(F.default.escape(i)), "i"),
                        containQuery: RegExp(F.default.escape(i), "i"),
                        queryLower: i
                    }, d = u(T.default.getMutablePrivateChannels()).values().value(), f = [];
                    for (let e of d) {
                        if (!e.isMultiUserDM() || !r(e)) continue;
                        let t = (0, s.computeChannelName)(e, D.default, x.default).toLocaleLowerCase(),
                            n = (0, q.stripDiacritics)((0, q.normalize)(t)),
                            i = et(n, c, l);
                        i > 0 && f.push({
                            type: V.AutocompleterResultTypes.GROUP_DM,
                            record: e,
                            score: Z(i, a[e.id]),
                            comparator: (0, s.computeChannelName)(e, D.default, x.default),
                            sortable: n
                        })
                    }
                    return f.sort(o.default), f.length > n && (f.length = n), f
                },
                queryApplications(e) {
                    let {
                        query: t,
                        limit: n = 10,
                        fuzzy: l = !0,
                        filter: r = Q
                    } = e, a = t.toLocaleLowerCase(), i = {
                        exactQuery: RegExp("^".concat(F.default.escape(a)), "i"),
                        containQuery: RegExp(F.default.escape(a), "i"),
                        queryLower: a
                    }, u = J(), s = [];
                    for (let {
                            application: e
                        }
                        of u) {
                        if (!r(e)) continue;
                        let t = e.name.toLocaleLowerCase(),
                            n = et(t, i, l);
                        n > 0 && s.push({
                            type: V.AutocompleterResultTypes.APPLICATION,
                            record: e,
                            score: n,
                            comparator: e.name,
                            sortable: t
                        })
                    }
                    return s.sort(o.default), s.length > n && (s.length = n), s
                },
                querySKUs(e) {
                    let {
                        query: t,
                        limit: n = 10,
                        fuzzy: l = !0,
                        filter: r = Q
                    } = e, a = t.toLocaleLowerCase(), i = {
                        exactQuery: RegExp("^".concat(F.default.escape(a)), "i"),
                        containQuery: RegExp(F.default.escape(a), "i"),
                        queryLower: a
                    }, s = u(G.default.getSKUs()).values().value(), c = [];
                    for (let e of s)
                        if (e.type === H.SKUTypes.DURABLE_PRIMARY && r(e)) {
                            let t = e.name.toLocaleLowerCase(),
                                n = et(t, i, l);
                            n > 0 && c.push({
                                type: V.AutocompleterResultTypes.SKU,
                                record: e,
                                score: n,
                                comparator: e.name,
                                sortable: t
                            })
                        } return c.sort(o.default), c.length > n && (c.length = n), c
                },
                getRecentlyTalked: ea,
                queryMentionResults(e) {
                    let {
                        query: t,
                        channel: n,
                        canMentionEveryone: l = !1,
                        canMentionHere: r = !0,
                        canMentionUsers: i = !0,
                        canMentionRoles: o = !0,
                        includeAllGuildUsers: s = !1,
                        includeNonMentionableRoles: c = !1,
                        checkRecentlyTalkedOnEmptyQuery: d = !0,
                        limit: f = H.MAX_AUTOCOMPLETE_RESULTS,
                        request: p,
                        allowSnowflake: h = !1
                    } = e, m = i ? (s && null != n.guild_id ? this.queryGuildUsers({
                        guildId: n.guild_id,
                        query: t,
                        limit: f,
                        checkRecentlyTalkedOnEmptyQuery: d,
                        request: p,
                        allowSnowflake: h
                    }) : this.queryChannelUsers({
                        channelId: n.id,
                        query: t,
                        limit: f,
                        checkRecentlyTalkedOnEmptyQuery: d,
                        allowSnowflake: h
                    })).map(e => {
                        let {
                            record: t,
                            score: l,
                            comparator: r
                        } = e;
                        return {
                            user: t,
                            score: l,
                            comparator: r,
                            nick: v.default.getNick(n.guild_id, t.id),
                            status: M.default.getStatus(t.id)
                        }
                    }) : [], g = m.length, E = t.toLowerCase(), C = [];
                    if (g < f && o) {
                        let e = n.getGuildId(),
                            t = N.default.getGuild(e);
                        null != t && (u(t.roles).filter(t => {
                            let {
                                mentionable: n,
                                name: r,
                                id: i
                            } = t;
                            return (n || l || c) && (a(E, r.toLowerCase()) || h && E === i) && i !== e
                        }).take(f - g).forEach(e => {
                            C.push(e)
                        }), g += C.length)
                    }
                    let y = [];
                    return !n.isPrivate() && l && o && (g < f && a(E, X().test) && (y.push(X()), g += 1), r && g < f && a(E, $().test) && y.push($())), {
                        users: m,
                        globals: y,
                        roles: C
                    }
                },
                queryGuildMentionResults(e) {
                    let {
                        query: t,
                        guildId: n,
                        canMentionEveryone: l = !1,
                        canMentionUsers: r = !0,
                        canMentionRoles: i = !0,
                        canMentionNonMentionableRoles: o = !1
                    } = e, s = r ? this.queryGuildUsers({
                        guildId: n,
                        query: t
                    }).map(e => ({
                        ...e,
                        status: M.default.getStatus(e.record.id)
                    })) : [], c = s.length, d = t.toLowerCase(), f = [];
                    if (c < H.MAX_AUTOCOMPLETE_RESULTS && i) {
                        let e = N.default.getGuild(n);
                        null != e && (u(e.roles).filter(e => {
                            let {
                                mentionable: t,
                                name: r,
                                id: i
                            } = e;
                            return (t || l || o) && a(d, r.toLowerCase()) && i !== n
                        }).take(H.MAX_AUTOCOMPLETE_RESULTS - c).forEach(e => {
                            f.push(e)
                        }), c += f.length)
                    }
                    let p = [];
                    return l && i && (c < H.MAX_AUTOCOMPLETE_RESULTS && a(d, X().test) && (p.push(X()), c += 1), c < H.MAX_AUTOCOMPLETE_RESULTS && a(d, $().test) && p.push($())), {
                        users: s,
                        globals: p,
                        roles: f
                    }
                },
                queryChoice(e) {
                    let {
                        query: t,
                        choices: n,
                        limit: l = 10,
                        fuzzy: r = !0
                    } = e, a = t.toLocaleLowerCase(), i = RegExp("^".concat(F.default.escape(a)), "i"), o = RegExp(F.default.escape(a), "i"), s = u(n).map((e, t) => {
                        let n = et(e.displayName.toLocaleLowerCase(), {
                            exactQuery: i,
                            containQuery: o,
                            queryLower: a
                        }, r);
                        return n > 0 ? {
                            choice: e,
                            score: n,
                            originalIndex: t
                        } : null
                    }).filter(P.isNotNullish).sortBy(e => -1 * e.score);
                    return null !== l && (s = s.take(l)), s.value()
                },
                queryStaticRouteChannels(e) {
                    let {
                        query: t,
                        guild: n
                    } = e, l = t.toLocaleLowerCase(), r = {
                        exactQuery: RegExp("^".concat(F.default.escape(l)), "i"),
                        containQuery: RegExp(F.default.escape(l), "i"),
                        queryLower: l
                    }, a = ((0, p.canSeeGuildHome)(n.id) || (0, m.canSeeOnboardingHome)(n.id)) && !n.hasFeature(H.GuildFeatures.HUB), i = n.hasFeature(H.GuildFeatures.COMMUNITY), u = (0, h.isGuildOnboardingAvailable)(n) && n.hasFeature(H.GuildFeatures.COMMUNITY), o = [{
                        id: K.StaticChannelId.SERVER_GUIDE,
                        name: j.default.Messages.SERVER_GUIDE
                    }, {
                        id: K.StaticChannelId.CHANNEL_BROWSER,
                        name: j.default.Messages.CHANNEL_BROWSER_TITLE
                    }, {
                        id: K.StaticChannelId.CUSTOMIZE_COMMUNITY,
                        name: j.default.Messages.CHANNELS_AND_ROLES
                    }], s = [];
                    for (let e of o) {
                        if (e.id === K.StaticChannelId.SERVER_GUIDE && !a || e.id === K.StaticChannelId.CHANNEL_BROWSER && !i || e.id === K.StaticChannelId.CUSTOMIZE_COMMUNITY && !u) continue;
                        let t = e.name.toLocaleLowerCase(),
                            l = et(t, r, !1);
                        l > 0 && s.push(new S.UnknownChannelRecord({
                            id: e.id,
                            name: e.name,
                            type: H.ChannelTypes.UNKNOWN,
                            guild_id: n.id
                        }))
                    }
                    return s
                },
                queryChannelResults(e) {
                    let {
                        query: t,
                        channel: n,
                        type: l = I.GUILD_SELECTABLE_CHANNELS_KEY,
                        channelTypes: r
                    } = e, a = this.queryChannels({
                        query: t,
                        guildId: n.getGuildId(),
                        limit: void 0,
                        fuzzy: void 0,
                        filter: e => null == r || r.includes(e.type),
                        type: l,
                        allowEmptyQueries: !0
                    }).map(e => e.record);
                    return {
                        channels: a
                    }
                },
                queryApplicationCommandChannelResults(e) {
                    let {
                        query: t,
                        channel: n,
                        channelTypes: l,
                        limit: r = H.MAX_AUTOCOMPLETE_RESULTS,
                        allowSnowflake: a
                    } = e;
                    if (null == n.guild_id) {
                        let e = [];
                        return (null == l || l.includes(n.type)) && e.push(n), {
                            channels: e
                        }
                    }
                    let i = [];
                    for (let e of ee) i = i.concat(this.queryChannels({
                        query: t,
                        guildId: n.guild_id,
                        limit: r,
                        fuzzy: !0,
                        filter: e => null == l || l.includes(e.type),
                        type: e,
                        allowEmptyQueries: !0,
                        requireVocalConnectAccess: !1,
                        allowSnowflake: a
                    }));
                    return i = i.filter(e => {
                        let {
                            record: t
                        } = e;
                        return "null" !== t.id
                    }).sort(c.default), null != r && i.length > r && (i = i.slice(0, r)), {
                        channels: i.map(e => e.record)
                    }
                },
                queryChoiceResults(e) {
                    let {
                        query: t,
                        choices: n
                    } = e, l = this.queryChoice({
                        query: t,
                        choices: n,
                        limit: null
                    }).map(e => e.choice);
                    return {
                        choices: l
                    }
                },
                queryEmojiResults(e) {
                    let {
                        query: t,
                        channel: n,
                        intention: l,
                        maxCount: r = H.MAX_AUTOCOMPLETE_RESULTS,
                        matchComparator: a
                    } = e;
                    A.FrecencyUserSettingsActionCreators.loadIfNecessary();
                    let i = f.default.searchWithoutFetchingLatest({
                        channel: n,
                        query: t,
                        count: r,
                        intention: l,
                        matchComparator: a
                    });
                    return {
                        emojis: i
                    }
                },
                queryStickers(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        [n, l] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, Q],
                        {
                            stickerMetadata: r
                        } = C.default,
                        a = D.default.getCurrentUser(),
                        i = new Set,
                        o = [];
                    for (let u of (A.FrecencyUserSettingsActionCreators.loadIfNecessary(), e)) {
                        if ("" === u) continue;
                        let e = u.toLocaleLowerCase(),
                            s = (0, q.stripDiacritics)(e),
                            c = RegExp("^".concat(F.default.escape(s)), "i"),
                            d = RegExp("".concat(F.default.escape(s)), "i");
                        r.forEach((r, u) => {
                            let s = 0,
                                f = null,
                                p = C.default.getStickerById(u);
                            if (null == p || !l(p, (0, g.getStickerSendability)(p, a, n))) return;
                            for (let n of r) {
                                let {
                                    type: l,
                                    value: r
                                } = n, a = function(e) {
                                    switch (e) {
                                        case y.StickerMetadataTypes.STICKER_NAME:
                                            return 11;
                                        case y.StickerMetadataTypes.CORRELATED_EMOJI:
                                            return 6;
                                        case y.StickerMetadataTypes.TAG:
                                            return 1;
                                        case y.StickerMetadataTypes.GUILD_NAME:
                                        case y.StickerMetadataTypes.PACK_NAME:
                                            return 8;
                                        default:
                                            return 1
                                    }
                                }(l), i = 0;
                                t ? r === e ? i = 10 * a : c.test(r) ? i = 7 * a : (l === y.StickerMetadataTypes.GUILD_NAME || l === y.StickerMetadataTypes.PACK_NAME || l === y.StickerMetadataTypes.STICKER_NAME) && d.test(r) && (i = 5 * a) : r === e && (i = 10 * a, f = r), i > s && (s = i, f = r)
                            }
                            let h = E.default.stickerFrecencyWithoutFetchingLatest.getScore(u);
                            null != h && (s *= h / 100), s > 0 && null != f && !i.has(p.id) && (i.add(p.id), o.push({
                                sticker: p,
                                comparator: f,
                                score: s
                            }))
                        })
                    }
                    return 0 === (o = u(o).sortBy(e => -1 * e.score).value()).length && (o = z), o
                },
                matchSentinel(e, t, n) {
                    let l = W.test(t);
                    return !l && e === n
                },
                hasSameRoleAsUsername(e, t) {
                    var n;
                    if (!t.isPomelo()) return !1;
                    let l = N.default.getGuild(e.getGuildId()),
                        r = null !== (n = null == l ? void 0 : l.roles) && void 0 !== n ? n : {};
                    for (let {
                            name: e
                        }
                        of Object.values(r))
                        if (t.username.startsWith(e.toLowerCase())) return !0;
                    return !1
                }
            }
        },
        651879: function(e, t, n) {
            "use strict";
            let l;
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("424973");
            var r = n("917351"),
                a = n.n(r),
                i = n("693566"),
                u = n.n(i),
                o = n("851387"),
                s = n("305961"),
                c = n("697218"),
                d = n("718517"),
                f = n("158998"),
                p = n("782340");
            let h = new u({
                maxAge: 1 * d.default.Millis.MINUTE
            });

            function m(e, t, n) {
                null != l && clearTimeout(l), l = setTimeout(() => {
                    let l = [],
                        r = e => {
                            l.push(e.id)
                        };
                    if (null == e) a.forEach(s.default.getGuilds(), r);
                    else if (Array.isArray(e)) e.forEach(e => {
                        let t = s.default.getGuild(e);
                        null != t && r(t)
                    });
                    else {
                        let t = s.default.getGuild(e);
                        null != t && r(t)
                    }
                    l.length > 0 && o.default.requestMembers(l, t.toLocaleLowerCase(), n)
                }, 200)
            }

            function g(e, t) {
                let n = "".concat(null != e ? e : "", ":").concat(t),
                    l = h.get(n);
                if (null != l) return l;
                h.set(n, !0)
            }
            var E = {
                getGuildNameSuggestion: function(e) {
                    let t = c.default.getCurrentUser(),
                        n = f.getName(t);
                    return null == n || 0 === n.length ? "" : p.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT.format({
                        username: (null == e ? void 0 : e.truncateUsername) ? n.slice(0, 20) : n
                    })
                },
                requestMembers(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                        l = Array.isArray(e),
                        r = [],
                        a = !1;
                    if (l) e.forEach(e => {
                        let n = g(e, t);
                        null == n && r.push(e)
                    });
                    else {
                        let n = g(e, t);
                        null == n && (a = !0)
                    }
                    r.length > 0 && l ? m(r, t, n) : a && m(e, t, n)
                }
            }
        },
        905571: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("577427"),
                r = n("782340"),
                a = {
                    MENTION_EVERYONE: () => ({
                        test: "everyone",
                        text: "@everyone",
                        description: r.default.Messages.MENTION_EVERYONE_AUTOCOMPLETE_DESCRIPTION
                    }),
                    MENTION_HERE: () => ({
                        test: "here",
                        text: "@here",
                        description: r.default.Messages.MENTION_HERE_AUTOCOMPLETE_DESCRIPTION
                    }),
                    LAUNCHABLE_APPLICATIONS: () => l.default.launchableApplicationViewItems
                }
        }
    }
]);
//# sourceMappingURL=48590.1caf07ec0251af38d393.js.map