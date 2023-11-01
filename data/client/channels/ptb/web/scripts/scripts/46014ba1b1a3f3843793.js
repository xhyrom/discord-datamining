(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["48590"], {
        317041: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TRUE_OPTION_NAME: function() {
                    return u
                },
                FALSE_OPTION_NAME: function() {
                    return o
                },
                BOOLEAN_CHOICES: function() {
                    return s
                },
                BuiltInSectionId: function() {
                    return r
                },
                DISCOVERY_COMMANDS_QUERY_LIMIT: function() {
                    return c
                },
                DISCOVERY_COMMANDS_FRECENCY_LIMIT: function() {
                    return d
                },
                DISCOVERY_COMMAND_FRECENCY_GATEWAY_LIMIT: function() {
                    return f
                },
                SUB_COMMAND_KEY_SEPARATOR: function() {
                    return p
                },
                APPLICATION_COMMAND_PERMISSIONS_LIMIT: function() {
                    return h
                },
                MAX_SUBCOMMAND_LEVEL: function() {
                    return m
                },
                CONTEXT_MENU_COMMANDS_QUERY_LIMIT: function() {
                    return g
                },
                CONTEXT_MENU_PLACEHOLDER_COUNT: function() {
                    return E
                },
                AUTOCOMPLETE_OPTION_DEBOUNCE_TIME: function() {
                    return C
                },
                getValidationErrorText: function() {
                    return A
                }
            });
            var l, r, a = n("798609"),
                i = n("782340");
            let u = "True",
                o = "False",
                s = [{
                    name: u,
                    displayName: u,
                    value: "true"
                }, {
                    name: o,
                    displayName: o,
                    value: "false"
                }];
            (l = r || (r = {})).BUILT_IN = "-1", l.FRECENCY = "-2";
            let c = 10,
                d = 5,
                f = 25,
                p = "\x00",
                h = 100,
                m = 3,
                g = 10,
                E = 1,
                C = 500;

            function A(e) {
                if (null != e.choices) return i.default.Messages.COMMAND_VALIDATION_CHOICE_ERROR;
                switch (e.type) {
                    case a.ApplicationCommandOptionType.BOOLEAN:
                        return i.default.Messages.COMMAND_VALIDATION_BOOLEAN_ERROR;
                    case a.ApplicationCommandOptionType.CHANNEL:
                        return i.default.Messages.COMMAND_VALIDATION_CHANNEL_ERROR;
                    case a.ApplicationCommandOptionType.INTEGER:
                        return i.default.Messages.COMMAND_VALIDATION_INTEGER_ERROR;
                    case a.ApplicationCommandOptionType.NUMBER:
                        return i.default.Messages.COMMAND_VALIDATION_NUMBER_ERROR;
                    case a.ApplicationCommandOptionType.ROLE:
                        return i.default.Messages.COMMAND_VALIDATION_ROLE_ERROR;
                    case a.ApplicationCommandOptionType.USER:
                        return i.default.Messages.COMMAND_VALIDATION_USER_ERROR;
                    case a.ApplicationCommandOptionType.MENTIONABLE:
                        return i.default.Messages.COMMAND_VALIDATION_MENTIONABLE_ERROR;
                    default:
                        return i.default.Messages.COMMAND_VALIDATION_GENERAL_ERROR
                }
            }
        },
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
                    experimentState: r.None
                },
                treatments: [{
                    id: 1,
                    label: "Enabled (Default Off)",
                    config: {
                        experimentState: r.DefaultOff
                    }
                }, {
                    id: 3,
                    label: "Enabled (Default On)",
                    config: {
                        experimentState: r.DefaultOn
                    }
                }, {
                    id: 4,
                    label: "Coming Soon",
                    config: {
                        experimentState: r.ComingSoon
                    }
                }, {
                    id: 5,
                    label: "Clyde Profiles",
                    config: {
                        experimentState: r.ClydeProfiles
                    }
                }]
            });
            var u = i
        },
        254927: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isClydeEnabledinGdms: function() {
                    return a
                }
            });
            var l = n("862205");
            let r = (0, l.createExperiment)({
                kind: "user",
                id: "2023-06_clyde_ai_gdm",
                label: "Clyde in DMs/GDMs",
                defaultConfig: {
                    isClydeEnabledinGdms: !1
                },
                treatments: [{
                    id: 1,
                    label: "enable clyde in gdms",
                    config: {
                        isClydeEnabledinGdms: !0
                    }
                }]
            });

            function a() {
                let {
                    isClydeEnabledinGdms: e
                } = r.getCurrentConfig({
                    location: "38acdb_1"
                }, {
                    autoTrackExposure: !1
                });
                return e
            }
        },
        980215: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useClydeExperiment: function() {
                    return s
                },
                useClydeProfilesEnabled: function() {
                    return c
                },
                useClydeEnabled: function() {
                    return d
                },
                getClydeEnabled: function() {
                    return p
                },
                getClydeExperimentEnabled: function() {
                    return h
                },
                canUseCustomClydeProfiles: function() {
                    return m
                }
            }), n("884691"), n("446674");
            var l = n("305961"),
                r = n("957255"),
                a = n("772051"),
                i = n("254927"),
                u = n("49111"),
                o = n("724210");

            function s(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    l = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
                    r = a.default.useExperiment({
                        guildId: l,
                        location: "1e9ccc_1"
                    }, {
                        autoTrackExposure: n
                    }).experimentState;
                return r
            }

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = s(e, t);
                return n === a.ClydeExperimentState.ClydeProfiles
            }

            function d(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = s(e, n);
                return f(l, e, t)
            }

            function f(e, t, n) {
                if (null == t) {
                    if (null != n && n.isPrivate()) {
                        if (n.hasFlag(o.ChannelFlags.CLYDE_AI)) return !0;
                        let e = (0, i.isClydeEnabledinGdms)();
                        if (!e) return !1;
                        let t = l.default.getGuildIds().some(e => h(l.default.getGuild(e)));
                        return t
                    }
                    return !1
                }
                return null != e && e !== a.ClydeExperimentState.None && r.default.can(u.Permissions.USE_CLYDE_AI, n)
            }

            function p(e, t) {
                var n;
                let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : "",
                    i = a.default.getCurrentConfig({
                        guildId: r,
                        location: "1e9ccc_2"
                    }, {
                        autoTrackExposure: l
                    }).experimentState;
                return f(i, e, t)
            }

            function h(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = g(e, t);
                return n !== a.ClydeExperimentState.None
            }

            function m(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return g(e, t) === a.ClydeExperimentState.ClydeProfiles
            }

            function g(e) {
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
            });
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
        632886: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            });
            var l = n("132710"),
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
                A = n("49111"),
                y = n("782340");
            let L = e => {
                let t = s.default.getChannel(e);
                return null == t ? void 0 : t.getGuildId()
            };

            function _(e) {
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

            function N(e, t) {
                let n;
                let l = R((0, g.truncateText)(e.name, 32));
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

            function I(e) {
                return {
                    type: "channel",
                    content: [R("")],
                    iconType: e ? "post" : "message"
                }
            }

            function S(e, t) {
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

            function T(e) {
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

            function R(e) {
                return {
                    type: "text",
                    content: e
                }
            }

            function M(e, t, n, l, r) {
                let a = c.default.getGuild(e),
                    i = (null == a ? void 0 : a.id) === l;
                return {
                    type: "channelMention",
                    guildId: e,
                    channelId: t,
                    messageId: n,
                    originalLink: r,
                    inContent: null == a || i ? null : [_(a)],
                    content: [N({
                        name: y.default.Messages.UNKNOWN_CHANNEL,
                        type: A.ChannelTypes.UNKNOWN,
                        iconType: "text"
                    }, "italics")]
                }
            }

            function v(e, t, n, l) {
                if (!e.canViewChannel) return function(e, t) {
                    let n = {
                        type: "channel",
                        content: [R(e.roleSubscriptionGated ? e.name : y.default.Messages.NO_ACCESS)],
                        channelType: e.roleSubscriptionGated ? e.type : A.ChannelTypes.UNKNOWN,
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
                if (!e.isMentionable) return R("#".concat(e.name));
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
                        guildId: A.ME,
                        inContent: [N(e)],
                        content: [I(!1)]
                    };
                    return null != (i = l) ? T(i) : R("#".concat(y.default.Messages.UNKNOWN_CHANNEL_PLACEHOLDER))
                }
                let u = e.guildId === n,
                    o = null != t;
                return {
                    ...r,
                    ... function(e, t, n, l) {
                        let r = _(e),
                            a = N(t),
                            i = I(t.isForumPost);
                        if (n && l) {
                            if (t.isForumPost) {
                                let e = s.default.getChannel(t.parentId);
                                if (null != e) {
                                    var u;
                                    return {
                                        inContent: [N({
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
                    }(a, e, u, o)
                }
            }
            let O = {
                    order: C.default.order,
                    requiredFirstCharacters: ["<"],
                    match: e => /^<#(\d+)>/.exec(e),
                    parse(e, t, n) {
                        let l = e[1];
                        if (n.returnMentionIds) return {
                            type: "channelMention",
                            id: l
                        };
                        let r = S(l, n.mentionChannels);
                        return null == r ? M(null, l, null, L(n.channelId)) : v(r, null, L(n.channelId))
                    }
                },
                b = {
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
                        if (null == a) return T(l);
                        let u = S(a, null);
                        return null == u ? M(r, a, i, L(n.channelId), l) : v(u, i, L(n.channelId), l)
                    }
                },
                x = {
                    order: r.defaultRules.url.order - .5,
                    requiredFirstCharacters: ["h"],
                    match: e => o.MEDIA_POST_URL_RE.exec(e),
                    parse(e, t, n) {
                        let l = e[0],
                            r = e[1],
                            a = e[2],
                            i = e[3],
                            u = e[4];
                        if (null == a || null == i) return T(l);
                        let o = S(i, null);
                        if (null != o) return v(o, u, L(n.channelId), l);
                        let s = S(a, null);
                        return null != s ? v(s, u, L(n.channelId), l) : M(r, a, u, L(n.channelId), l)
                    }
                };
            var U = {
                channelMention: O,
                channelOrMessageUrl: b,
                mediaPostLink: x
            }
        },
        270926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("132710"),
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
            });
            var l = n("627445"),
                r = n.n(l),
                a = n("132710"),
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
                                    A = n._listLevel;
                                n._list = !0, n._listLevel = (null != A ? A : 0) + 1, m ? (n.inline = !1, r = c.replace(p, "\n\n")) : (n.inline = !0, r = c.replace(p, ""));
                                let y = g(t(r, {
                                    ...n,
                                    allowHeading: !1
                                }));
                                return n.inline = E, n._list = C, n._listLevel = A, y
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
                    return K
                }
            });
            var l = n("917351"),
                r = n.n(l),
                a = n("132710"),
                i = n.n(a),
                u = n("980215"),
                o = n("867805"),
                s = n("235004"),
                c = n("42203"),
                d = n("305961"),
                f = n("697218"),
                p = n("387111"),
                h = n("158998"),
                m = n("632886"),
                g = n("270926"),
                E = n("647374"),
                C = n("693078"),
                A = n("290689"),
                y = n("839462"),
                L = n("646630"),
                _ = n("788554"),
                N = n("49111"),
                I = n("317041"),
                S = n("680894"),
                T = n("782340");
            let R = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
                M = /^$|\n *$/,
                v = /^ *>>> ?/,
                O = /^ *> ?/gm;

            function b(e) {
                let t = (0, E.punycodeLink)(e[1]);
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
            let x = e => {
                    let t = c.default.getChannel(e);
                    return null == t ? void 0 : t.getGuildId()
                },
                U = e => null != e.guildId ? d.default.getGuild(e.guildId) : null != e.channelId ? d.default.getGuild(x(e.channelId)) : null,
                D = {
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
                            return M.test(a) ? R.exec(e) : null
                        },
                        parse(e, t, n) {
                            let l = e[0],
                                r = !!v.exec(l),
                                a = r ? v : O,
                                i = l.replace(a, ""),
                                u = n.inQuote || !1,
                                o = n.inline || !1;
                            n.inQuote = !0, !r && (n.inline = !0);
                            let s = t(i, n);
                            return n.inQuote = u, n.inline = o, 0 === s.length && s.push({
                                type: "text",
                                content: " "
                            }), {
                                content: s,
                                type: "blockQuote"
                            }
                        }
                    },
                    link: E.default,
                    autolink: {
                        ...i.defaultRules.autolink,
                        parse: b
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
                        parse: b
                    },
                    strong: i.defaultRules.strong,
                    em: i.defaultRules.em,
                    u: i.defaultRules.u,
                    br: i.defaultRules.br,
                    text: A.default,
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
                        order: A.default.order,
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
                        order: A.default.order,
                        requiredFirstCharacters: ["<"],
                        match: e => /^<@&(\d+)>/.exec(e),
                        parse(e, t, n) {
                            let [l, r] = e;
                            if (n.returnMentionIds) return {
                                type: "roleMention",
                                id: r
                            };
                            let a = U(n),
                                i = null != a ? a.roles[r] : null;
                            return null == i ? {
                                type: "text",
                                content: "@".concat(T.default.Messages.DELETED_ROLE_PLACEHOLDER)
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
                        order: A.default.order,
                        requiredFirstCharacters: ["<", "@"],
                        match(e, t) {
                            let n = /^<@!?(\d+)>|^(@(?:everyone|here|Clyde))/.exec(e);
                            return null != n && ("@Clyde" !== n[0] || (0, u.getClydeEnabled)(U(t), c.default.getChannel(t.channelId))) ? n : null
                        },
                        parse(e, t, n) {
                            var l;
                            let r, a;
                            if (n.returnMentionIds) return null == e[1] ? {
                                type: "mention",
                                text: e[0]
                            } : {
                                type: "mention",
                                id: e[1]
                            };
                            let i = f.default.getUser(e[1]),
                                o = c.default.getChannel(n.channelId);
                            null != i && (a = i.id, r = i.toString(), null != o && (r = null !== (l = p.default.getNickname(o.getGuildId(), n.channelId, i)) && void 0 !== l ? l : h.default.getName(i))), null == i && "@Clyde" === e[0] && (0, u.getClydeEnabled)(U(n), o) && (a = S.CLYDE_AI_USER_ID);
                            let s = e[1],
                                d = null != s && N.ID_REGEX.test(s.trim()),
                                m = d && n.unknownUserMentionPlaceholder ? "@".concat(T.default.Messages.UNKNOWN_USER_MENTION_PLACEHOLDER) : e[0];
                            return {
                                userId: a,
                                channelId: n.channelId,
                                guildId: null == o ? void 0 : o.getGuildId(),
                                roleName: e[2],
                                content: [{
                                    type: "text",
                                    content: null != r ? "@".concat(r) : m
                                }]
                            }
                        }
                    },
                    channelMention: m.default.channelMention,
                    channelOrMessageUrl: m.default.channelOrMessageUrl,
                    mediaPostLink: m.default.mediaPostLink,
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
                        order: A.default.order,
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
                        order: A.default.order,
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
                        order: A.default.order,
                        requiredFirstCharacters: ["<"],
                        match: e => /^<a?:(\w+):(\d+)>/.exec(e),
                        parse: e => ({
                            type: "text",
                            content: ":".concat(e[1], ":")
                        })
                    },
                    timestamp: {
                        order: A.default.order - 1,
                        requiredFirstCharacters: ["<"],
                        match: e => L.TIMESTAMP_REGEX.exec(e),
                        parse(e) {
                            let [t, n, l] = e, r = (0, L.parseTimestamp)(n, l);
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
                        order: A.default.order,
                        requiredFirstCharacters: ["|"],
                        match: e => N.MARKDOWN_SPOILER_REGEXP.exec(e),
                        parse: (e, t, n) => ({
                            content: t(e[1], n),
                            channelId: n.channelId
                        })
                    },
                    staticRouteLink: {
                        order: A.default.order,
                        requiredFirstCharacters: ["<"],
                        match: e => N.MARKDOWN_STATIC_ROUTE_NAME_REGEXP.exec(e),
                        parse(e, t, n) {
                            let l = {
                                home: T.default.Messages.SERVER_GUIDE,
                                guide: T.default.Messages.SERVER_GUIDE,
                                browse: T.default.Messages.CHANNEL_BROWSER_TITLE,
                                customize: T.default.Messages.CHANNELS_AND_ROLES
                            };
                            return {
                                content: [{
                                    type: "text",
                                    content: l[e[1]]
                                }],
                                channelId: e[1],
                                guildId: x(n.channelId),
                                id: e[1]
                            }
                        }
                    },
                    heading: g.default,
                    list: C.default
                },
                G = (0, _.default)([D, y.default]),
                P = r.omit(G, ["inlineCode", "codeBlock", "br", "blockQuote"]),
                w = r.omit(G, ["inlineCode", "codeBlock", "br", "blockQuote", "url", "mention", "roleMention", "channelMention", "channelOrMessageUrl", "mediaPostLink"]),
                k = r.omit(G, ["codeBlock", "br", "mention", "channel", "roleMention"]),
                F = r.omit((0, _.default)([G, {
                    inlineCode: {
                        match(e, t, n) {
                            let l = G.codeBlock.match(e, t, n);
                            if (null != l) return l;
                            let r = G.inlineCode.match(e, t, n);
                            if (null != r) return r
                        }
                    }
                }]), ["blockQuote", "codeBlock", "br"]),
                B = r.omit(G, ["codeBlock", "br", "blockQuote"]),
                q = r.omit(G, ["codeBlock", "br", "mention", "roleMention", "channel", "paragraph", "newline"]),
                V = r.omit(G, ["codeBlock", "blockQuote", "br"]);

            function H(e, t) {
                return 0 === e.length || 0 === t || "" === e.charAt(t - 1).trim()
            }
            let Y = (0, _.default)([{
                highlightWord: {
                    order: -1,
                    match(e, t) {
                        if (null == t.highlightWord || 0 === t.highlightWord.length) return null;
                        let n = e.indexOf(t.highlightWord);
                        if (-1 === n) return null;
                        let l = !H(e, n);
                        if (l)
                            do n = e.indexOf(t.highlightWord, n + 1), l = !H(e, n); while (l && -1 !== n);
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
            }, r.omit(G, ["url"])]);
            var K = {
                RULES: G,
                CHANNEL_TOPIC_RULES: P,
                VOICE_CHANNEL_STATUS_RULES: w,
                EMBED_TITLE_RULES: k,
                INLINE_REPLY_RULES: F,
                GUILD_VERIFICATION_FORM_RULES: B,
                GUILD_EVENT_RULES: V,
                PROFILE_BIO_RULES: q,
                AUTO_MODERATION_SYSTEM_MESSAGE_RULES: Y
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
            var l = n("132710"),
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
            });
            var l = n("132710"),
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
                    return i
                },
                DEFAULT_TIMESTAMP_FORMAT: function() {
                    return u
                },
                TIMESTAMP_REGEX: function() {
                    return s
                },
                parseTimestamp: function() {
                    return c
                },
                unparseTimestamp: function() {
                    return d
                }
            });
            var l = n("866227"),
                r = n.n(l),
                a = n("888400");
            let i = {
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
                        let a = r(e.toDate()).fromNow();
                        return r.relativeTimeThreshold("s", t), r.relativeTimeThreshold("ss", n), r.relativeTimeThreshold("m", l), a
                    }
                },
                u = "f";
            Object.setPrototypeOf(i, null);
            let o = Object.keys(i).join("|"),
                s = new RegExp("^<t:(-?\\d{1,17})(?::(".concat(o, "))?>"));

            function c(e, t) {
                let n = r(1e3 * Number(e));
                if (!n.isValid()) return null;
                let l = null != t ? i[t] : void 0;
                return null == l && (l = i[u]), {
                    timestamp: e,
                    format: t,
                    parsed: n,
                    full: i.F(n),
                    formatted: l(n)
                }
            }

            function d(e, t) {
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
            })
        },
        884351: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return Q
                }
            });
            var l = n("917351"),
                r = n.n(l),
                a = n("132710"),
                i = n.n(a),
                u = n("679653"),
                o = n("385976"),
                s = n("867805"),
                c = n("252931"),
                d = n("888198"),
                f = n("290689"),
                p = n("804888"),
                h = n("401690"),
                m = n("845579"),
                g = n("42203"),
                E = n("923959"),
                C = n("26989"),
                A = n("305961"),
                y = n("957255"),
                L = n("27618"),
                _ = n("102985"),
                N = n("697218"),
                I = n("25292"),
                S = n("402671"),
                T = n("158998"),
                R = n("49111"),
                M = n("958706"),
                v = n("782340");

            function O(e, t, n) {
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

            function b(e) {
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
            let U = d.default.RULES,
                D = f.default,
                G = /^<@!?(\d+)>/,
                P = /^<@&(\d+)>/,
                w = /^<#(\d+)>/,
                k = /^<a?:(\w+):(\d+)>/,
                F = /(@everyone|@here|@Clyde)\b/,
                B = {
                    link: b(i.defaultRules.link),
                    autolink: b(i.defaultRules.autolink),
                    url: b(i.defaultRules.url),
                    inlineCode: b(U.inlineCode),
                    codeBlock: b(U.codeBlock),
                    rawUserMention: x(G),
                    rawRoleMention: x(P),
                    rawChannelMention: x(w),
                    rawEmoji: x(k),
                    mention: {
                        match(e, t, n) {
                            let l = n.split(" ").pop() + e;
                            if (/^[^ ]+@[^ ]+\.[^ .]+/.test(l)) return null;
                            let r = O("@", e, t.users, "mention");
                            if (r || (r = O("@", e, t.mentionableRoles, "roleMention"))) return r;
                            let a = t.users.map(e => ({
                                ...e,
                                text: e.text.split("#")[0]
                            }));
                            if (!(r = O("@", e, a, "mention"))) return null;
                            let i = F.exec(e);
                            if (null != i && r[0].length <= i[0].length) return null;
                            if ("" === n && (0, p.canSuppressNotifications)()) {
                                let t = p.SILENT_RE.exec(e);
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
                            if ('"' !== t[1]) return O(e, t, n, l);
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
                            if (!m.ConvertEmoticons.getSetting() || 0 !== n.length && !/\s$/.test(n)) return null;
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
                        ...D,
                        match: (e, t) => "string" == typeof t.textExclusions && "" !== t.textExclusions ? (0, f.textMarkupPatternWithExclusions)(t.textExclusions).exec(e) : null != D.match ? D.match(e, t, "") : null
                    }
                },
                q = {
                    inlineCode: b(U.inlineCode),
                    codeBlock: b(U.codeBlock),
                    mention: {
                        match: i.anyScopeRegex(G),
                        parse(e, t, n) {
                            let {
                                isNotification: l
                            } = n, r = N.default.getUser(e[1]);
                            if (null == r) return {
                                content: e[0]
                            };
                            let a = T.default.getUserTag(r, {
                                identifiable: l && _.default.enabled ? "never" : "always"
                            });
                            if (!l) return {
                                content: "@".concat(a)
                            };
                            {
                                let e = T.default.getGlobalName(r);
                                return {
                                    content: null != e ? "@".concat(e) : "@".concat(a)
                                }
                            }
                        }
                    },
                    roleMention: {
                        match: i.anyScopeRegex(P),
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
                        match: i.anyScopeRegex(w),
                        parse(e) {
                            let t = g.default.getChannel(e[1]);
                            return {
                                content: null == t ? e[0] : (0, u.computeChannelName)(t, N.default, L.default, !0, !0)
                            }
                        }
                    },
                    emoji: {
                        match: i.anyScopeRegex(k),
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
                        match: i.anyScopeRegex(R.MARKDOWN_SPOILER_REGEXP),
                        parse: () => ({
                            content: "<".concat(v.default.Messages.SPOILER.toLowerCase(), ">")
                        })
                    },
                    staticRouteLink: {
                        match: i.anyScopeRegex(R.MARKDOWN_STATIC_ROUTE_NAME_REGEXP),
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
                        ...D
                    }
                };
            [B, q].forEach(e => {
                Object.keys(e).forEach((t, n) => {
                    e[t].order = n
                })
            });
            let V = i.parserFor(B),
                H = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;

            function Y(e, t, n, l) {
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
                    } else e.content.constructor === Array ? r += Y(e.content, t, n, l) : console.warn("Unknown message item type: ", e)
                }), r
            }

            function K(e) {
                let t;
                let n = null == e ? void 0 : e.getGuildId(),
                    l = null != n ? A.default.getGuild(n) : null,
                    a = y.default.can(R.Permissions.MENTION_EVERYONE, e);
                t = (null == e ? void 0 : e.isPrivate()) ? e.recipients.map(e => ({
                    userId: e,
                    nick: null
                })) : null != n ? C.default.getMembers(n).map(e => {
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
                        } = t, l = N.default.getUser(n);
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
                    s = r(E.default.getTextChannelNameDisambiguations(n)).map(e => {
                        let {
                            id: t,
                            name: n
                        } = e;
                        return {
                            id: t,
                            text: n
                        }
                    }),
                    d = null != n ? r(I.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS).filter(e => e !== E.GUILD_SELECTABLE_CHANNELS_KEY).flatMap(e => E.default.getChannels(n)[e].map(e => ({
                        id: e.channel.id,
                        text: e.channel.name
                    }))).value() : [],
                    f = h.default.computeAllActiveJoinedThreads(n).map(e => ({
                        id: e.id,
                        text: e.name
                    })),
                    p = o.default.getDisambiguatedEmojiContext(n),
                    m = p.getEscapedCustomEmoticonNames(),
                    g = p.getCustomEmoji(),
                    L = p.getCustomEmoticonRegex(),
                    _ = N.default.getCurrentUser(),
                    S = (0, c.getInventoryGuildPacksUserExperimentConfig)({
                        user: _,
                        autoTrackExposure: !1
                    }).viewAndUseEnabled,
                    T = {
                        inline: !0,
                        mentionableRoles: u,
                        guild: l,
                        users: i,
                        channels: s.concat(d).concat(f),
                        emojiContext: p,
                        customEmoticonsRegex: L,
                        canViewAndUsePackEmoji: S,
                        customEmoji: g,
                        textExclusions: m,
                        disableErrorGuards: !0
                    };
                return T
            }

            function j(e) {
                return e
            }
            var Q = {
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
                        S.default.isEmojiPremiumLocked({
                            emoji: t,
                            channel: e,
                            intention: M.EmojiIntention.CHAT,
                            canViewAndUsePackEmoji: i.canViewAndUsePackEmoji
                        }) ? u.invalidEmojis.push(t) : !n && u.validNonShortcutEmojis.push(t)
                    }, Y(V(n, l), l, s.default.translateInlineEmojiToSurrogates, r)), u
                },
                parsePreprocessor(e, t) {
                    let n = K(e);
                    return V(t, n)
                },
                unparse(e, t, n) {
                    let l = g.default.getChannel(t),
                        a = null != l ? l.getGuildId() : null,
                        u = null != a ? A.default.getGuild(a) : null,
                        o = n ? q : r.omit(q, ["spoiler", "timestamp"]),
                        c = n ? j : s.default.translateSurrogatesToInlineEmoji,
                        d = i.parserFor(o),
                        f = {
                            inline: !0,
                            guild: u,
                            isNotification: n
                        };
                    return Y(d(e, f), f, c)
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
            });
            var l = n("448105"),
                r = n.n(l),
                a = n("917351"),
                i = n.n(a),
                u = n("866227"),
                o = n.n(u),
                s = n("446674"),
                c = n("913144"),
                d = n("860285"),
                f = n("915639"),
                p = n("86878"),
                h = n("546463"),
                m = n("686470"),
                g = n("568307"),
                E = n("102985"),
                C = n("251013"),
                A = n("946749"),
                y = n("535974"),
                L = n("352326"),
                _ = n("117362"),
                N = n("449008"),
                I = n("964889"),
                S = n("773336"),
                T = n("50885"),
                R = n("602043"),
                M = n("9377"),
                v = n("49111");
            let O = o().subtract(1, "week"),
                b = [],
                x = "",
                U = !1;

            function D(e, t) {
                return e.application.name.localeCompare(t.application.name, f.default.locale, {
                    sensitivity: "base"
                })
            }
            let G = {
                    [v.GameTableListKeys.NAME]: D,
                    [v.GameTableListKeys.PLATFORM]: (e, t, n) => {
                        let l = e.libraryApplication.getDistributor(),
                            r = t.libraryApplication.getDistributor();
                        return l === r ? (n === v.TableSortDirections.DESCENDING ? -1 : 1) * D(e, t) : null == l ? 1 : null == r ? -1 : l.localeCompare(r)
                    },
                    [v.GameTableListKeys.LAST_PLAYED]: (e, t) => e.isNew && !t.isNew ? -1 : !e.isNew && t.isNew ? 1 : e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1,
                    [v.GameTableListKeys.ACTIONS]: null
                },
                P = (0, _.cachedFunction)(e => e.filter(e => null != e.libraryApplication && e.shouldShowInLibrary)),
                w = (0, _.cachedFunction)(e => e.filter(e => null != e.libraryApplication && y.default.isLaunchable(e.libraryApplication.id, e.libraryApplication.branchId))),
                k = (0, _.cachedFunction)((e, t) => e.filter(e => r(t.toLowerCase(), e.application.name.toLowerCase()))),
                F = (0, _.cachedFunction)((e, t, n, l) => {
                    let r = G[t];
                    if (null == r) return e;
                    let a = [...e],
                        i = a.sort(r);
                    return n === v.TableSortDirections.DESCENDING ? i.reverse() : i
                }),
                B = (0, _.cachedFunction)(e => e.filter(e => null != e.libraryApplication && e.libraryApplication.isHidden()));

            function q(e, t) {
                let n = C.default.getCurrentUserStatisticsForApplication(e.id);
                if (null != n) return new Date(n.last_played_at).getTime();
                let l = t[e.id];
                return null != l ? l : 0
            }

            function V() {
                let e = new Set(g.default.getRunningVerifiedApplicationIds()),
                    t = {},
                    n = new Set,
                    l = g.default.getGamesSeen(!1, !1).map(e => {
                        let n = h.default.getGameByGameData(e);
                        return null != n ? (t[n.id] = 1e3 * e.lastFocused, n.id) : null
                    }),
                    r = Object.values(m.default.getAllLibraryApplications()),
                    a = r.map(l => (function(e, t, n, l, r) {
                        var a, i;
                        if (!r && t.has(e.id)) return null;
                        let u = h.default.getGame(e.id);
                        if (null == u) return null;
                        let s = q(u, n);
                        if (t.add(e.id), !(0, I.isUserEntitledToLibraryApplication)(e) && !y.default.isInstalled(e.id, e.branchId)) return null;
                        return {
                            key: "".concat(e.id, "-").concat(e.branchId),
                            application: u,
                            libraryApplication: e,
                            lastPlayed: s,
                            supportsCloudSync: null != e && y.default.supportsCloudSync(e.id, e.branchId),
                            isNew: (a = e, i = s, null != a && o(a.createdAt).isAfter(O) && 0 === i),
                            isLaunching: d.default.launchingGames.has(e.id),
                            isRunning: l.has(e.id),
                            isLaunchable: (0, R.isLaunchable)({
                                LibraryApplicationStore: m.default,
                                LaunchableGameStore: d.default,
                                DispatchApplicationStore: y.default,
                                ConnectedAppsStore: p.default,
                                applicationId: e.id,
                                branchId: e.branchId
                            }),
                            isUpdatingFlags: m.default.isUpdatingFlags(e.id, e.branchId),
                            shouldShowInLibrary: (0, I.shouldShowGameInLibrary)(u, e, E.default),
                            defaultAction: (0, M.getDefaultLibraryApplicationAction)(e, y.default, L.default)
                        }
                    })(l, n, t, e, !0)).filter(N.isNotNullish),
                    u = l.map(l => (function(e, t, n, l) {
                        let r = null != e ? h.default.getGame(e) : null;
                        if (null == r || null == e || t.has(e)) return null;
                        let a = q(r, n);
                        return t.add(e), {
                            key: e,
                            application: r,
                            lastPlayed: a,
                            supportsCloudSync: !1,
                            isNew: !1,
                            isLaunching: d.default.launchingGames.has(e),
                            isRunning: l.has(e),
                            isLaunchable: (0, R.isLaunchable)({
                                LibraryApplicationStore: m.default,
                                LaunchableGameStore: d.default,
                                DispatchApplicationStore: y.default,
                                ConnectedAppsStore: p.default,
                                applicationId: e,
                                branchId: null
                            }),
                            isUpdatingFlags: !1,
                            shouldShowInLibrary: !1,
                            libraryApplication: null,
                            defaultAction: null
                        }
                    })(l, n, t, e)).filter(N.isNotNullish),
                    s = [...u, ...a].sort((e, t) => e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1);
                return U = null != h.default.lastFetched && m.default.fetched, !i.isEqual(s, b) && (b = s, S.isPlatformEmbedded && T.default.setSystemTrayApplications(w(b).map(e => e.application).slice(0, 5)), !0)
            }
            class H extends s.default.Store {
                initialize() {
                    this.syncWith([h.default, d.default, g.default, y.default, L.default, m.default, C.default, E.default, p.default], V, 200), this.syncWith([A.default, f.default], () => !0)
                }
                get applicationFilterQuery() {
                    return x
                }
                get applicationViewItems() {
                    return b
                }
                get launchableApplicationViewItems() {
                    return w(b)
                }
                get libraryApplicationViewItems() {
                    return P(b)
                }
                get filteredLibraryApplicationViewItems() {
                    return k(this.libraryApplicationViewItems, x)
                }
                get sortedFilteredLibraryApplicationViewItems() {
                    return F(this.filteredLibraryApplicationViewItems, A.default.sortKey, A.default.sortDirection, f.default.locale)
                }
                get hiddenLibraryApplicationViewItems() {
                    return B(b)
                }
                get hasFetchedApplications() {
                    return U
                }
            }
            H.displayName = "ApplicationViewStore";
            var Y = new H(c.default, {
                LIBRARY_APPLICATION_FILTER_UPDATE: function(e) {
                    let {
                        query: t
                    } = e;
                    x = t
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
                    return et
                },
                default: function() {
                    return eu
                }
            });
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
                A = n("161585"),
                y = n("401690"),
                L = n("872173"),
                _ = n("233069"),
                N = n("766274"),
                I = n("42203"),
                S = n("923959"),
                T = n("26989"),
                R = n("305961"),
                M = n("377253"),
                v = n("957255"),
                O = n("824563"),
                b = n("27618"),
                x = n("18494"),
                U = n("162771"),
                D = n("697218"),
                G = n("552712"),
                P = n("449008"),
                w = n("651879"),
                k = n("991170"),
                F = n("655518"),
                B = n("159885"),
                q = n("158998"),
                V = n("49111"),
                H = n("375822"),
                Y = n("724210"),
                K = n("782340");
            let j = new d.default("AutocompleteUtils"),
                Q = () => !0,
                W = /(\t|\s)/,
                X = [];
            l = n("905571").default;
            let $ = l.MENTION_EVERYONE,
                z = l.MENTION_HERE,
                J = l.MENTION_CLYDE,
                Z = l.LAUNCHABLE_APPLICATIONS;

            function ee() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                return 1e3 * e * (null != t ? t : 1)
            }
            let et = [S.GUILD_SELECTABLE_CHANNELS_KEY, S.GUILD_VOCAL_CHANNELS_KEY, V.ChannelTypes.GUILD_CATEGORY];

            function en(e, t) {
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
                    j.error(e)
                }
                return 0
            }

            function el(e) {
                return (null == e ? void 0 : e.joinedAt) != null && !e.isPending
            }

            function er(e) {
                let {
                    query: t,
                    members: n,
                    limit: l,
                    filter: r,
                    allowSnowflake: i
                } = e, u = D.default.getUsers(), s = U.default.getGuildId(), c = t.toLocaleLowerCase(), d = (0, B.normalize)(c), f = [], p = [], h = n.length, m = 0, g = 0;
                for (; m < h;) {
                    var E, C, A, y, L, _, I, S, R, M;
                    let e, l;
                    let o = n[m];
                    o instanceof N.default ? (l = o, e = null === (C = T.default.getNick(s, l.id)) || void 0 === C ? void 0 : C.toLocaleLowerCase()) : (e = null === (A = o.nick) || void 0 === A ? void 0 : A.toLocaleLowerCase(), l = u[o.userId]);
                    let h = null === (E = q.default.getGlobalName(l)) || void 0 === E ? void 0 : E.toLocaleLowerCase();
                    if (null == r || r(l)) {
                        let n = l.username.toLocaleLowerCase(),
                            r = (0, B.stripDiacritics)(n),
                            u = (0, B.normalize)(r),
                            o = null != e ? (0, B.stripDiacritics)(e) : null,
                            s = null != o ? (0, B.normalize)(o) : null,
                            m = null != h ? (0, B.stripDiacritics)(h) : null,
                            E = null != m ? (0, B.normalize)(m) : null;
                        i && t === l.id || n.substring(0, c.length) === c || r.substring(0, c.length) === c || (null === (y = e) || void 0 === y ? void 0 : y.substring(0, c.length)) === c || (null == o ? void 0 : o.substring(0, c.length)) === c || (null == h ? void 0 : h.substring(0, c.length)) === c || (null == m ? void 0 : m.substring(0, c.length)) === c ? f.push({
                            type: H.AutocompleterResultTypes.USER,
                            record: l,
                            score: 10,
                            comparator: null !== (L = null != h ? h : e) && void 0 !== L ? L : n,
                            sortable: null !== (_ = null != m ? m : o) && void 0 !== _ ? _ : r
                        }) : u.substring(0, d.length) === d || (null == s ? void 0 : s.substring(0, d.length)) === d || (null == E ? void 0 : E.substring(0, d.length)) === d ? f.push({
                            type: H.AutocompleterResultTypes.USER,
                            record: l,
                            score: 1,
                            comparator: null !== (I = null != h ? h : e) && void 0 !== I ? I : n,
                            sortable: null !== (S = null != m ? m : o) && void 0 !== S ? S : r
                        }) : g < 50 && (a(c, r) || a(d, u) || null != o && a(c, o) || null != s && a(d, s) || null != m && a(c, m) || null != E && a(d, E)) && (p.push({
                            type: H.AutocompleterResultTypes.USER,
                            record: l,
                            score: 1,
                            comparator: null !== (R = null != h ? h : e) && void 0 !== R ? R : n,
                            sortable: null !== (M = null != m ? m : o) && void 0 !== M ? M : r
                        }), g += 1)
                    }
                    m += 1
                }
                return f.sort(o.default), f.length < l && (p.sort(o.default), f = f.concat(p.slice(0, Math.max(0, l - f.length)))), f.length > l && (f.length = l), f
            }

            function ea(e, t, n) {
                let l = 0,
                    r = null;
                for (let a of t) {
                    let t = en(e, a, n);
                    t > l && (l = t, r = a)
                }
                return null != r && (r.isFullMatch ? t.length = 0 : t.splice(t.indexOf(r), 1)), l
            }

            function ei(e, t) {
                let n = I.default.getChannel(e);
                return null == e || null == n ? [] : u(M.default.getMessages(e).toArray()).reverse().uniqBy(e => e.author.id).map(e => D.default.getUser(e.author.id)).filter(e => {
                    if (null == e || e.isNonUserBot() && !e.isClyde()) return !1;
                    let t = n.getGuildId();
                    if (null == t) return !0;
                    let l = T.default.getMember(t, e.id);
                    return el(l)
                }).map(e => {
                    var t;
                    let l = n.getGuildId(),
                        r = null != l ? T.default.getMember(l, e.id) : null;
                    return {
                        type: H.AutocompleterResultTypes.USER,
                        record: e,
                        score: 0,
                        comparator: null !== (t = null == r ? void 0 : r.nick) && void 0 !== t ? t : q.default.getName(e)
                    }
                }).take(t).value()
            }
            var eu = {
                queryFriends(e) {
                    let {
                        query: t,
                        limit: n = 10,
                        _fuzzy: l = !0,
                        filter: r
                    } = e;
                    return er({
                        query: t,
                        members: b.default.getFriendIDs().map(e => D.default.getUser(e)).filter(P.isNotNullish),
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
                    return er({
                        query: t,
                        members: I.default.getDMUserIds().map(e => D.default.getUser(e)).filter(P.isNotNullish),
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
                        o = I.default.getChannel(n);
                    if (null == o) return [];
                    let s = o.isThread() ? I.default.getChannel(o.parent_id) : null,
                        c = null != s ? s : o;
                    if (null == c) return [];
                    if (c.isPrivate()) {
                        var d;
                        t = c.recipients.map(e => ({
                            userId: e,
                            nick: null !== (d = b.default.getNickname(e)) && void 0 !== d ? d : null
                        }));
                        let e = D.default.getCurrentUser();
                        null != e && t.push({
                            userId: e.id,
                            nick: null
                        })
                    } else {
                        if (0 === l.length && i) {
                            let e = ei(o.id, r);
                            if (e.length > 0) return e
                        }
                        t = T.default.getMembers(c.guild_id).filter(el), a && w.default.requestMembers(c.guild_id, l, r)
                    }
                    return er({
                        query: l,
                        members: t,
                        limit: r,
                        filter: e => c.isPrivate() || k.default.can({
                            permission: V.Permissions.VIEW_CHANNEL,
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
                    if (null == R.default.getGuild(t)) return [];
                    if (0 === n.length && a) {
                        let e = ei(x.default.getChannelId(t), l);
                        if (e.length > 0) return e
                    }
                    let o = T.default.getMembers(t).filter(el);
                    return r && n.length > 0 && w.default.requestMembers(t, n, l), er({
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
                    return n && e.length > 0 && w.default.requestMembers(null, e, t), er({
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
                            limit: r = V.MAX_AUTOCOMPLETE_RESULTS,
                            fuzzy: a = !0,
                            filter: i = Q,
                            type: c = S.GUILD_SELECTABLE_CHANNELS_KEY,
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
                    t = null != l ? u(S.default.getChannels(l)[c]).map(e => e.channel).concat(y.default.computeAllActiveJoinedThreads(l)).value() : u(I.default.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(y.default.computeAllActiveJoinedThreads()).value();
                    let g = {},
                        E = [];
                    for (let e of t) {
                        var C, A, L;
                        if (C = c, A = e.type, L = null != l, !(C === A || (L || (0, _.isGuildChannelType)(A)) && (C === S.GUILD_SELECTABLE_CHANNELS_KEY ? (0, _.isGuildSelectableChannelType)(A) : C === S.GUILD_VOCAL_CHANNELS_KEY && (0, _.isGuildVocalChannelType)(A))) || (0, _.isGuildChannelType)(e.type) && !v.default.can(f ? e.accessPermissions : V.Permissions.VIEW_CHANNEL, e) || !i(e)) continue;
                        let t = [...m],
                            r = e.name.toLocaleLowerCase(),
                            u = h && n === e.id,
                            o = u ? 10 : ea(r, t, a);
                        if (0 !== o) {
                            if (t.length > 0) {
                                for (let n of [function(e, t) {
                                        if (null == e.guild_id) return;
                                        let n = t[e.guild_id];
                                        if (null == n) {
                                            var l;
                                            n = t[e.guild_id] = null === (l = R.default.getGuild(e.guild_id)) || void 0 === l ? void 0 : l.toString().toLocaleLowerCase()
                                        }
                                        return n
                                    }(e, g), function(e, t) {
                                        if (null == e.parent_id) return;
                                        let n = t[e.parent_id];
                                        if (null == n) {
                                            var l;
                                            n = t[e.parent_id] = null === (l = I.default.getChannel(e.parent_id)) || void 0 === l ? void 0 : l.name.toLocaleLowerCase()
                                        }
                                        return n
                                    }(e, g)]) {
                                    if (null == n || "" === n) continue;
                                    let e = ea(n, t, !1);
                                    0 !== e && (o += .5 * e)
                                }
                                o = Math.min(9, o)
                            }
                            0 !== o && !(t.length > 1) && (1 !== t.length || t[0].isFullMatch || u) && E.push({
                                type: (0, _.isGuildVocalChannelType)(e.type) ? H.AutocompleterResultTypes.VOICE_CHANNEL : H.AutocompleterResultTypes.TEXT_CHANNEL,
                                record: e,
                                score: ee(o, p[e.id]),
                                comparator: (0, s.computeChannelName)(e, D.default, b.default),
                                sortable: r
                            })
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
                    }, c = [], d = u(R.default.getGuilds()).values().value();
                    for (let e of d) {
                        if (!r(e)) continue;
                        let t = e.name.toLocaleLowerCase(),
                            n = en(t, s, l);
                        n > 0 && c.push({
                            type: H.AutocompleterResultTypes.GUILD,
                            record: e,
                            score: ee(n, a[e.id]),
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
                    } = e, i = t.toLocaleLowerCase(), c = {
                        exactQuery: RegExp("^".concat(F.default.escape(i)), "i"),
                        containQuery: RegExp(F.default.escape(i), "i"),
                        queryLower: i
                    }, d = u(I.default.getMutablePrivateChannels()).values().value(), f = [];
                    for (let e of d) {
                        if (!e.isMultiUserDM() || !r(e)) continue;
                        let t = (0, s.computeChannelName)(e, D.default, b.default).toLocaleLowerCase(),
                            n = en(t, c, l);
                        n > 0 && f.push({
                            type: H.AutocompleterResultTypes.GROUP_DM,
                            record: e,
                            score: ee(n, a[e.id]),
                            comparator: (0, s.computeChannelName)(e, D.default, b.default),
                            sortable: t
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
                    }, u = Z(), s = [];
                    for (let {
                            application: e
                        }
                        of u) {
                        if (!r(e)) continue;
                        let t = e.name.toLocaleLowerCase(),
                            n = en(t, i, l);
                        n > 0 && s.push({
                            type: H.AutocompleterResultTypes.APPLICATION,
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
                        if (e.type === V.SKUTypes.DURABLE_PRIMARY && r(e)) {
                            let t = e.name.toLocaleLowerCase(),
                                n = en(t, i, l);
                            n > 0 && c.push({
                                type: H.AutocompleterResultTypes.SKU,
                                record: e,
                                score: n,
                                comparator: e.name,
                                sortable: t
                            })
                        } return c.sort(o.default), c.length > n && (c.length = n), c
                },
                getRecentlyTalked: ei,
                queryMentionResults(e) {
                    let {
                        query: t,
                        channel: n,
                        canMentionEveryone: l = !1,
                        canMentionHere: r = !0,
                        canMentionUsers: i = !0,
                        canMentionRoles: o = !0,
                        canMentionClyde: s = !1,
                        includeAllGuildUsers: c = !1,
                        includeNonMentionableRoles: d = !1,
                        checkRecentlyTalkedOnEmptyQuery: f = !0,
                        limit: p = V.MAX_AUTOCOMPLETE_RESULTS,
                        request: h,
                        allowSnowflake: m = !1
                    } = e, g = i ? (c && null != n.guild_id ? this.queryGuildUsers({
                        guildId: n.guild_id,
                        query: t,
                        limit: p,
                        checkRecentlyTalkedOnEmptyQuery: f,
                        request: h,
                        allowSnowflake: m
                    }) : this.queryChannelUsers({
                        channelId: n.id,
                        query: t,
                        limit: p,
                        checkRecentlyTalkedOnEmptyQuery: f,
                        allowSnowflake: m
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
                            nick: T.default.getNick(n.guild_id, t.id),
                            status: O.default.getStatus(t.id)
                        }
                    }) : [], E = g.length, C = t.toLowerCase(), A = [];
                    if (E < p && o) {
                        let e = n.getGuildId(),
                            t = R.default.getGuild(e);
                        null != t && (u(t.roles).filter(t => {
                            let {
                                mentionable: n,
                                name: r,
                                id: i
                            } = t;
                            return (n || l || d) && (a(C, r.toLowerCase()) || m && C === i) && i !== e
                        }).take(p - E).forEach(e => {
                            A.push(e)
                        }), E += A.length)
                    }
                    let y = [];
                    return !n.isPrivate() && l && o && (E < p && a(C, $().test) && (y.push($()), E += 1), r && E < p && a(C, z().test) && y.push(z())), s && a(C, J().test) && y.push(J()), {
                        users: g,
                        globals: y,
                        roles: A
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
                        status: O.default.getStatus(e.record.id)
                    })) : [], c = s.length, d = t.toLowerCase(), f = [];
                    if (c < V.MAX_AUTOCOMPLETE_RESULTS && i) {
                        let e = R.default.getGuild(n);
                        null != e && (u(e.roles).filter(e => {
                            let {
                                mentionable: t,
                                name: r,
                                id: i
                            } = e;
                            return (t || l || o) && a(d, r.toLowerCase()) && i !== n
                        }).take(V.MAX_AUTOCOMPLETE_RESULTS - c).forEach(e => {
                            f.push(e)
                        }), c += f.length)
                    }
                    let p = [];
                    return l && i && (c < V.MAX_AUTOCOMPLETE_RESULTS && a(d, $().test) && (p.push($()), c += 1), c < V.MAX_AUTOCOMPLETE_RESULTS && a(d, z().test) && p.push(z()), p.push(J())), {
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
                        let n = en(e.displayName.toLocaleLowerCase(), {
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
                    }, a = ((0, p.canSeeGuildHome)(n.id) || (0, m.canSeeOnboardingHome)(n.id)) && !n.hasFeature(V.GuildFeatures.HUB), i = n.hasFeature(V.GuildFeatures.COMMUNITY), u = (0, h.isGuildOnboardingAvailable)(n) && n.hasFeature(V.GuildFeatures.COMMUNITY), o = [{
                        id: Y.StaticChannelId.SERVER_GUIDE,
                        name: K.default.Messages.SERVER_GUIDE
                    }, {
                        id: Y.StaticChannelId.CHANNEL_BROWSER,
                        name: K.default.Messages.CHANNEL_BROWSER_TITLE
                    }, {
                        id: Y.StaticChannelId.CUSTOMIZE_COMMUNITY,
                        name: K.default.Messages.CHANNELS_AND_ROLES
                    }], s = [];
                    for (let e of o) {
                        if (e.id === Y.StaticChannelId.SERVER_GUIDE && !a || e.id === Y.StaticChannelId.CHANNEL_BROWSER && !i || e.id === Y.StaticChannelId.CUSTOMIZE_COMMUNITY && !u) continue;
                        let t = e.name.toLocaleLowerCase(),
                            l = en(t, r, !1);
                        l > 0 && s.push(new _.UnknownChannelRecord({
                            id: e.id,
                            name: e.name,
                            type: V.ChannelTypes.UNKNOWN,
                            guild_id: n.id
                        }))
                    }
                    return s
                },
                queryChannelResults(e) {
                    let {
                        query: t,
                        channel: n,
                        type: l = S.GUILD_SELECTABLE_CHANNELS_KEY,
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
                        limit: r = V.MAX_AUTOCOMPLETE_RESULTS,
                        allowSnowflake: a
                    } = e;
                    if (null == n.guild_id) {
                        let e = [];
                        return (null == l || l.includes(n.type)) && e.push(n), {
                            channels: e
                        }
                    }
                    let i = [];
                    for (let e of et) i = i.concat(this.queryChannels({
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
                        canViewAndUsePackEmoji: r,
                        maxCount: a = V.MAX_AUTOCOMPLETE_RESULTS,
                        matchComparator: i
                    } = e;
                    L.FrecencyUserSettingsActionCreators.loadIfNecessary();
                    let u = f.default.searchWithoutFetchingLatest({
                        channel: n,
                        query: t,
                        count: a,
                        intention: l,
                        canViewAndUsePackEmoji: r,
                        matchComparator: i
                    });
                    return {
                        emojis: u
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
                    for (let u of (L.FrecencyUserSettingsActionCreators.loadIfNecessary(), e)) {
                        if ("" === u) continue;
                        let e = u.toLocaleLowerCase(),
                            s = (0, B.stripDiacritics)(e),
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
                                        case A.StickerMetadataTypes.STICKER_NAME:
                                            return 11;
                                        case A.StickerMetadataTypes.CORRELATED_EMOJI:
                                            return 6;
                                        case A.StickerMetadataTypes.TAG:
                                            return 1;
                                        case A.StickerMetadataTypes.GUILD_NAME:
                                        case A.StickerMetadataTypes.PACK_NAME:
                                            return 8;
                                        default:
                                            return 1
                                    }
                                }(l), i = 0;
                                t ? r === e ? i = 10 * a : c.test(r) ? i = 7 * a : (l === A.StickerMetadataTypes.GUILD_NAME || l === A.StickerMetadataTypes.PACK_NAME || l === A.StickerMetadataTypes.STICKER_NAME) && d.test(r) && (i = 5 * a) : r === e && (i = 10 * a, f = r), i > s && (s = i, f = r)
                            }
                            let h = E.default.stickerFrecencyWithoutFetchingLatest.getScore(u);
                            null != h && (s *= h / 100), s > 0 && null != f && !i.has(p.id) && (i.add(p.id), o.push({
                                sticker: p,
                                comparator: f,
                                score: s
                            }))
                        })
                    }
                    return 0 === (o = u(o).sortBy(e => -1 * e.score).value()).length && (o = X), o
                },
                matchSentinel(e, t, n) {
                    let l = W.test(t);
                    return !l && e === n
                },
                hasSameRoleAsUsername(e, t) {
                    var n;
                    if (!t.isPomelo()) return !1;
                    let l = R.default.getGuild(e.getGuildId()),
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
                    return g
                }
            });
            var r = n("917351"),
                a = n.n(r),
                i = n("693566"),
                u = n.n(i),
                o = n("851387"),
                s = n("305961"),
                c = n("697218"),
                d = n("158998"),
                f = n("782340");
            let p = new u({
                maxAge: 6e4
            });

            function h(e, t, n) {
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

            function m(e, t) {
                let n = "".concat(null != e ? e : "", ":").concat(t),
                    l = p.get(n);
                if (null != l) return l;
                p.set(n, !0)
            }
            var g = {
                getGuildNameSuggestion: function(e) {
                    let t = c.default.getCurrentUser(),
                        n = d.getName(t);
                    return null == n || 0 === n.length ? "" : f.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT.format({
                        username: (null == e ? void 0 : e.truncateUsername) ? n.slice(0, 20) : n
                    })
                },
                requestMembers(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                        l = Array.isArray(e),
                        r = [],
                        a = !1;
                    if (l) e.forEach(e => {
                        let n = m(e, t);
                        null == n && r.push(e)
                    });
                    else {
                        let n = m(e, t);
                        null == n && (a = !0)
                    }
                    r.length > 0 && l ? h(r, t, n) : a && h(e, t, n)
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
                    MENTION_CLYDE: () => ({
                        test: "clyde",
                        text: "@Clyde",
                        description: r.default.Messages.CLYDE_MENTION_DESCRIPTION
                    }),
                    LAUNCHABLE_APPLICATIONS: () => l.default.launchableApplicationViewItems
                }
        }
    }
]);
//# sourceMappingURL=46014ba1b1a3f3843793.js.map