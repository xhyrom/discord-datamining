(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["48590"], {
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
            var l, r, i = n("862205");
            (l = r || (r = {}))[l.None = 0] = "None", l[l.DefaultOn = 1] = "DefaultOn", l[l.DefaultOff = 2] = "DefaultOff", l[l.ComingSoon = 3] = "ComingSoon", l[l.ClydeProfiles = 4] = "ClydeProfiles";
            let a = (0, i.createExperiment)({
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
            var u = a
        },
        254927: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isClydeEnabledinGdms: function() {
                    return i
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

            function i() {
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
                    return c
                },
                useClydeProfilesEnabled: function() {
                    return d
                },
                useClydeEnabled: function() {
                    return s
                },
                getClydeEnabled: function() {
                    return m
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
                i = n("772051"),
                a = n("254927"),
                u = n("49111"),
                o = n("724210");

            function c(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "1e9ccc_1",
                    r = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
                    a = i.default.useExperiment({
                        guildId: r,
                        location: l
                    }, {
                        autoTrackExposure: n
                    }).experimentState;
                return a
            }

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    l = c(e, t, n);
                return l === i.ClydeExperimentState.ClydeProfiles
            }

            function s(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = c(e, n);
                return f(l, e, t)
            }

            function f(e, t, n) {
                if (null == t) {
                    if (null != n && n.isPrivate()) {
                        if (n.hasFlag(o.ChannelFlags.CLYDE_AI)) return !0;
                        let e = (0, a.isClydeEnabledinGdms)();
                        if (!e) return !1;
                        let t = l.default.getGuildIds().some(e => p(l.default.getGuild(e)));
                        return t
                    }
                    return !1
                }
                return null != e && e !== i.ClydeExperimentState.None && r.default.can(u.Permissions.USE_CLYDE_AI, n)
            }

            function m(e, t) {
                var n;
                let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : "",
                    a = i.default.getCurrentConfig({
                        guildId: r,
                        location: "1e9ccc_2"
                    }, {
                        autoTrackExposure: l
                    }).experimentState;
                return f(a, e, t)
            }

            function p(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = g(e, t);
                return n !== i.ClydeExperimentState.None
            }

            function h(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return g(e, t) === i.ClydeExperimentState.ClydeProfiles
            }

            function g(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (null == e) return !1;
                let n = e.id;
                return i.default.getCurrentConfig({
                    guildId: n,
                    location: "1e9ccc_4"
                }, {
                    autoTrackExposure: t
                }).experimentState
            }
        },
        848848: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                },
                getChannelRoleSubscriptionStatus: function() {
                    return d
                }
            });
            var l = n("446674"),
                r = n("203288"),
                i = n("42203"),
                a = n("957255"),
                u = n("49111");
            let o = {
                needSubscriptionToAccess: !1,
                isSubscriptionGated: !1
            };

            function c(e) {
                return (0, l.useStateFromStoresObject)([i.default, r.default, a.default], () => d(e, i.default, r.default, a.default), [e])
            }

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.default,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.default,
                    l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.default,
                    c = t.getChannel(e);
                if (null == c ? void 0 : c.isRoleSubscriptionTemplatePreviewChannel()) return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: !0
                };
                if (null == c || !n.isChannelGated(c.guild_id, c.id)) return o;
                let d = c.isGuildVocal() ? !l.can(u.Permissions.CONNECT, c) : !l.can(u.Permissions.VIEW_CHANNEL, c);
                return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: d
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
                    return A
                }
            });
            var l = n("132710"),
                r = n.n(l),
                i = n("203288"),
                a = n("679653"),
                u = n("848848"),
                o = n("361572"),
                c = n("42203"),
                d = n("305961"),
                s = n("957255"),
                f = n("27618"),
                m = n("697218"),
                p = n("315102"),
                h = n("404008"),
                g = n("159885"),
                E = n("82300"),
                C = n("290689"),
                x = n("49111"),
                y = n("782340");
            let v = e => {
                let t = c.default.getChannel(e);
                return null == t ? void 0 : t.getGuildId()
            };

            function S(e) {
                return {
                    type: "guild",
                    guildId: e.id,
                    content: (0, g.truncateText)(e.name, 32),
                    icon: p.default.getGuildIconURL({
                        id: e.id,
                        icon: e.icon,
                        size: 40
                    })
                }
            }

            function R(e, t) {
                let n;
                let l = b((0, g.truncateText)(e.name, 32));
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
                    content: [b("")],
                    iconType: e ? "post" : "message"
                }
            }

            function _(e, t) {
                var n;
                let l = c.default.getChannel(e),
                    r = (0, u.getChannelRoleSubscriptionStatus)(e, c.default, i.default, s.default).isSubscriptionGated,
                    d = null !== (n = (0, h.getMentionIconType)(l)) && void 0 !== n ? n : "text";
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
                        iconType: d,
                        parentId: null == l ? void 0 : l.parent_id
                    }
                }
                return null != l ? {
                    type: l.type,
                    id: l.id,
                    guildId: l.guild_id,
                    name: (0, a.computeChannelName)(l, m.default, f.default),
                    isDm: l.isPrivate(),
                    isForumPost: l.isForumPost(),
                    isMentionable: (0, E.isChannelTypeMentionable)(l.type),
                    canViewChannel: (0, o.canViewChannel)(l),
                    roleSubscriptionGated: r,
                    iconType: d,
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

            function b(e) {
                return {
                    type: "text",
                    content: e
                }
            }

            function M(e, t, n, l, r) {
                let i = d.default.getGuild(e),
                    a = (null == i ? void 0 : i.id) === l;
                return {
                    type: "channelMention",
                    guildId: e,
                    channelId: t,
                    messageId: n,
                    originalLink: r,
                    inContent: null == i || a ? null : [S(i)],
                    content: [R({
                        name: y.default.Messages.UNKNOWN_CHANNEL,
                        type: x.ChannelTypes.UNKNOWN,
                        iconType: "text"
                    }, "italics")]
                }
            }

            function N(e, t, n, l) {
                if (!e.canViewChannel) return function(e, t) {
                    let n = {
                        type: "channel",
                        content: [b(e.roleSubscriptionGated ? e.name : y.default.Messages.NO_ACCESS)],
                        channelType: e.roleSubscriptionGated ? e.type : x.ChannelTypes.UNKNOWN,
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
                if (!e.isMentionable) return b("#".concat(e.name));
                let r = {
                        type: "channelMention",
                        channelId: e.id,
                        guildId: e.guildId,
                        messageId: t,
                        originalLink: l
                    },
                    i = d.default.getGuild(e.guildId);
                if (null == i) {
                    var a;
                    if (e.isDm) return {
                        ...r,
                        guildId: x.ME,
                        inContent: [R(e)],
                        content: [I(!1)]
                    };
                    return null != (a = l) ? T(a) : b("#".concat(y.default.Messages.UNKNOWN_CHANNEL_PLACEHOLDER))
                }
                let u = e.guildId === n;
                return {
                    ...r,
                    ... function(e, t, n, l) {
                        let r = S(e),
                            i = R(t),
                            a = I(t.isForumPost);
                        if (n && l) {
                            if (t.isForumPost) {
                                let e = c.default.getChannel(t.parentId);
                                if (null != e) {
                                    var u;
                                    return {
                                        inContent: [R({
                                            name: e.name,
                                            type: e.type,
                                            iconType: null !== (u = (0, h.getMentionIconType)(e)) && void 0 !== u ? u : "forum"
                                        })],
                                        content: [i]
                                    }
                                }
                            }
                            return {
                                inContent: [i],
                                content: [a]
                            }
                        }
                        if (n && !l) return {
                            inContent: null,
                            content: [i]
                        };
                        if (!n && l) return {
                            inContent: [r],
                            content: [t.isForumPost ? i : a]
                        };
                        else if (!n && !l) return {
                            inContent: [r],
                            content: [i]
                        }
                    }(i, e, u, null != t)
                }
            }
            let k = {
                    order: C.default.order,
                    requiredFirstCharacters: ["<"],
                    match: e => /^<#(\d+)>/.exec(e),
                    parse(e, t, n) {
                        let l = e[1];
                        if (n.returnMentionIds) return {
                            type: "channelMention",
                            id: l
                        };
                        let r = _(l, n.mentionChannels);
                        return null == r ? M(null, l, null, v(n.channelId)) : N(r, null, v(n.channelId))
                    }
                },
                L = {
                    order: r.defaultRules.url.order - .5,
                    requiredFirstCharacters: ["h"],
                    match(e) {
                        let t = o.CHANNEL_OR_MESSAGES_URL_RE.exec(e);
                        return null != t && (null != t[2] && /\D/.test(t[2]) || null != t[3] && /\D/.test(t[3])) ? null : t
                    },
                    parse(e, t, n) {
                        let l = e[0],
                            r = e[1],
                            i = e[2],
                            a = e[3];
                        if (null == i) return T(l);
                        let u = _(i, null);
                        return null == u ? M(r, i, a, v(n.channelId), l) : N(u, a, v(n.channelId), l)
                    }
                },
                O = {
                    order: r.defaultRules.url.order - .5,
                    requiredFirstCharacters: ["h"],
                    match: e => o.MEDIA_POST_URL_RE.exec(e),
                    parse(e, t, n) {
                        let l = e[0],
                            r = e[1],
                            i = e[2],
                            a = e[3],
                            u = e[4];
                        if (null == i || null == a) return T(l);
                        let o = _(a, null);
                        if (null != o) return N(o, u, v(n.channelId), l);
                        let c = _(i, null);
                        return null != c ? N(c, u, v(n.channelId), l) : M(r, i, u, v(n.channelId), l)
                    }
                };
            var A = {
                channelMention: k,
                channelOrMessageUrl: L,
                mediaPostLink: O
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
            let i = /\n$/,
                a = {
                    ...r.defaultRules.heading,
                    requiredFirstCharacters: [" ", "#"],
                    match: (e, t, n) => t.allowHeading ? null == n || "" === n || null != n.match(i) ? (0, l.anyScopeRegex)(/^ *(#{1,3})(?:\s+)((?![#]+)[^\n]+?)#*\s*(?:\n|$)/)(e, t, n) : null : null
                };
            var u = a
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
                i = n("132710"),
                a = n.n(i);
            let u = /\n{2,}$/,
                o = /(?:^|\n)( *)$/,
                c = "(?:[*-]|\\d+\\.)",
                d = "( *)(" + c + ") +",
                s = RegExp("^" + d),
                f = RegExp(d + "[^\\n]*(?:\\n(?!\\1" + c + " )[^\\n]*)*(\n|$)", "gm"),
                m = / *\n$/,
                p = RegExp("^( *)(" + c + ") [\\s\\S]+?(?:\\n(?! )(?!\\1" + c + " )|$)"),
                h = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/,
                g = e => e.map(e => ("text" === e.type && null != e.content && (e.content = e.content.replace(/\n+\s*$/, "")), e)),
                E = {
                    ...a.defaultRules.list,
                    requiredFirstCharacters: " *-0123456789".split(""),
                    match: (e, t) => {
                        if (!t.allowList || t._listLevel >= 11) return null;
                        let n = null == t.prevCapture ? "" : t.prevCapture[0],
                            l = o.exec(n);
                        return null == l || h.test(l[0]) ? null : p.exec(e)
                    },
                    parse: (e, t, n) => {
                        let l = e[2],
                            i = l.length > 1,
                            a = e[0].replace(u, "\n").match(f);
                        r(null != a, "markup list items can not be parsed.");
                        let o = !1,
                            c = a.map((e, l) => {
                                let r;
                                let i = s.exec(e),
                                    u = null != i ? i[0].length : 0,
                                    c = RegExp("^ {1," + u + "}", "gm"),
                                    d = e.replace(c, "").replace(s, ""),
                                    f = l === a.length - 1,
                                    p = -1 !== d.indexOf("\n\n"),
                                    h = p || f && o;
                                o = h;
                                let E = n.inline,
                                    C = n._list,
                                    x = n._listLevel;
                                n._list = !0, n._listLevel = (null != x ? x : 0) + 1, h ? (n.inline = !1, r = d.replace(m, "\n\n")) : (n.inline = !0, r = d.replace(m, ""));
                                let y = g(t(r, {
                                    ...n,
                                    allowHeading: !1
                                }));
                                return n.inline = E, n._list = C, n._listLevel = x, y
                            });
                        return {
                            ordered: i,
                            start: i ? Math.min(1e9, Math.max(1, +l)) : void 0,
                            items: c
                        }
                    }
                };
            var C = E
        },
        888198: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return V
                }
            }), n("781738"), n("424973"), n("222007");
            var l = n("917351"),
                r = n.n(l),
                i = n("132710"),
                a = n.n(i),
                u = n("980215"),
                o = n("867805"),
                c = n("235004"),
                d = n("42203"),
                s = n("305961"),
                f = n("697218"),
                m = n("387111"),
                p = n("158998"),
                h = n("632886"),
                g = n("270926"),
                E = n("647374"),
                C = n("693078"),
                x = n("290689"),
                y = n("839462"),
                v = n("646630"),
                S = n("788554"),
                R = n("49111"),
                I = n("317041"),
                _ = n("680894"),
                T = n("782340");
            let b = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
                M = /^$|\n *$/,
                N = /^ *>>> ?/,
                k = /^ *> ?/gm;

            function L(e) {
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
            let O = e => {
                    let t = d.default.getChannel(e);
                    return null == t ? void 0 : t.getGuildId()
                },
                A = e => null != e.guildId ? s.default.getGuild(e.guildId) : null != e.channelId ? s.default.getGuild(O(e.channelId)) : null,
                P = {
                    newline: a.defaultRules.newline,
                    paragraph: a.defaultRules.paragraph,
                    escape: {
                        ...a.defaultRules.escape,
                        match: (e, t, n) => !1 === t.allowEscape ? null : a.defaultRules.escape.match(e, t, n)
                    },
                    blockQuote: {
                        ...a.defaultRules.blockQuote,
                        requiredFirstCharacters: [" ", ">"],
                        match(e, t) {
                            let {
                                prevCapture: n,
                                inQuote: l,
                                nested: r
                            } = t;
                            if (l || r) return null;
                            if (null == n) return b.exec(e);
                            let i = n[0];
                            return M.test(i) ? b.exec(e) : null
                        },
                        parse(e, t, n) {
                            let l = e[0],
                                r = !!N.exec(l),
                                i = l.replace(r ? N : k, ""),
                                a = n.inQuote || !1,
                                u = n.inline || !1;
                            n.inQuote = !0, !r && (n.inline = !0);
                            let o = t(i, n);
                            return n.inQuote = a, n.inline = u, 0 === o.length && o.push({
                                type: "text",
                                content: " "
                            }), {
                                content: o,
                                type: "blockQuote"
                            }
                        }
                    },
                    link: E.default,
                    autolink: {
                        ...a.defaultRules.autolink,
                        parse: L
                    },
                    url: {
                        ...a.defaultRules.url,
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
                        parse: L
                    },
                    strong: a.defaultRules.strong,
                    em: a.defaultRules.em,
                    u: a.defaultRules.u,
                    br: a.defaultRules.br,
                    text: x.default,
                    inlineCode: {
                        ...a.defaultRules.inlineCode,
                        parse(e, t, n) {
                            let l = a.defaultRules.inlineCode.parse(e, t, n);
                            return !0 === n.parseInlineCodeChildContent ? {
                                ...l,
                                validationChildContent: t(l.content, n)
                            } : l
                        }
                    },
                    emoticon: {
                        order: x.default.order,
                        requiredFirstCharacters: ["\xaf"],
                        match: e => /^(¯\\_\(ツ\)_\/¯)/.exec(e),
                        parse: e => ({
                            type: "text",
                            content: e[1]
                        })
                    },
                    codeBlock: {
                        order: a.defaultRules.codeBlock.order,
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
                        order: x.default.order,
                        requiredFirstCharacters: ["<"],
                        match: e => /^<@&(\d+)>/.exec(e),
                        parse(e, t, n) {
                            let [l, r] = e;
                            if (n.returnMentionIds) return {
                                type: "roleMention",
                                id: r
                            };
                            let i = A(n),
                                a = null != i ? i.roles[r] : null;
                            return null == a ? {
                                type: "text",
                                content: "@".concat(T.default.Messages.DELETED_ROLE_PLACEHOLDER)
                            } : {
                                type: "mention",
                                channelId: n.channelId,
                                guildId: null != i ? i.id : null,
                                roleId: r,
                                roleColor: a.color,
                                color: a.color,
                                colorString: a.colorString,
                                content: [{
                                    type: "text",
                                    content: "@".concat(a.name)
                                }]
                            }
                        }
                    },
                    mention: {
                        order: x.default.order,
                        requiredFirstCharacters: ["<", "@"],
                        match(e, t) {
                            let n = /^<@!?(\d+)>|^(@(?:everyone|here|Clyde))/.exec(e);
                            return null != n && ("@Clyde" !== n[0] || (0, u.getClydeEnabled)(A(t), d.default.getChannel(t.channelId))) ? n : null
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
                            let i = f.default.getUser(e[1]),
                                a = d.default.getChannel(n.channelId);
                            if (null != i && (r = i.id, l = i.toString(), null != a)) {
                                var o;
                                l = null !== (o = m.default.getNickname(a.getGuildId(), n.channelId, i)) && void 0 !== o ? o : p.default.getName(i)
                            }
                            null == i && "@Clyde" === e[0] && (0, u.getClydeEnabled)(A(n), a) && (r = _.CLYDE_AI_USER_ID);
                            let c = e[1],
                                s = null != c && R.ID_REGEX.test(c.trim()),
                                h = s && n.unknownUserMentionPlaceholder ? "@".concat(T.default.Messages.UNKNOWN_USER_MENTION_PLACEHOLDER) : e[0];
                            return {
                                userId: r,
                                channelId: n.channelId,
                                guildId: null == a ? void 0 : a.getGuildId(),
                                roleName: e[2],
                                content: [{
                                    type: "text",
                                    content: null != l ? "@".concat(l) : h
                                }]
                            }
                        }
                    },
                    channelMention: h.default.channelMention,
                    channelOrMessageUrl: h.default.channelOrMessageUrl,
                    mediaPostLink: h.default.mediaPostLink,
                    commandMention: {
                        order: a.defaultRules.text.order,
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
                        order: x.default.order,
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
                        order: x.default.order,
                        requiredFirstCharacters: ["<"],
                        match: e => /^<sound:(\d+)>/.exec(e),
                        parse(e, t, n) {
                            var l;
                            let r = e[1],
                                i = c.default.getSoundById(r),
                                a = null !== (l = null == i ? void 0 : i.name) && void 0 !== l ? l : r;
                            return {
                                type: "soundboard",
                                id: r,
                                soundId: r,
                                channelId: n.channelId,
                                content: a
                            }
                        }
                    },
                    customEmoji: {
                        order: x.default.order,
                        requiredFirstCharacters: ["<"],
                        match: e => /^<a?:(\w+):(\d+)>/.exec(e),
                        parse: e => ({
                            type: "text",
                            content: ":".concat(e[1], ":")
                        })
                    },
                    timestamp: {
                        order: x.default.order - 1,
                        requiredFirstCharacters: ["<"],
                        match: e => v.TIMESTAMP_REGEX.exec(e),
                        parse(e) {
                            let [t, n, l] = e, r = (0, v.parseTimestamp)(n, l);
                            return null == r ? {
                                type: "text",
                                content: t
                            } : r
                        }
                    },
                    s: {
                        order: a.defaultRules.u.order,
                        requiredFirstCharacters: ["~"],
                        match: a.inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
                        parse: a.defaultRules.u.parse
                    },
                    spoiler: {
                        order: x.default.order,
                        requiredFirstCharacters: ["|"],
                        match: e => R.MARKDOWN_SPOILER_REGEXP.exec(e),
                        parse: (e, t, n) => ({
                            content: t(e[1], n),
                            channelId: n.channelId
                        })
                    },
                    staticRouteLink: {
                        order: x.default.order,
                        requiredFirstCharacters: ["<"],
                        match: e => R.MARKDOWN_STATIC_ROUTE_NAME_REGEXP.exec(e),
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
                                guildId: O(n.channelId),
                                id: e[1]
                            }
                        }
                    },
                    heading: g.default,
                    list: C.default
                },
                D = (0, S.default)([P, y.default]),
                w = r.omit(D, ["inlineCode", "codeBlock", "br", "blockQuote"]),
                F = r.omit(D, ["inlineCode", "codeBlock", "br", "blockQuote", "url", "mention", "roleMention", "channelMention", "channelOrMessageUrl", "mediaPostLink"]),
                G = r.omit(D, ["codeBlock", "br", "mention", "channel", "roleMention"]),
                U = r.omit((0, S.default)([D, {
                    inlineCode: {
                        match(e, t, n) {
                            let l = D.codeBlock.match(e, t, n);
                            if (null != l) return l;
                            let r = D.inlineCode.match(e, t, n);
                            if (null != r) return r
                        }
                    }
                }]), ["blockQuote", "codeBlock", "br"]),
                j = r.omit(D, ["codeBlock", "br", "blockQuote"]),
                B = r.omit(D, ["codeBlock", "br", "mention", "roleMention", "channel", "paragraph", "newline"]),
                q = r.omit(D, ["codeBlock", "blockQuote", "br"]),
                W = r.omit(D, ["channelOrMessageUrl", "codeBlock", "inlineCode"]);

            function H(e, t) {
                return 0 === e.length || 0 === t || "" === e.charAt(t - 1).trim()
            }
            let $ = (0, S.default)([{
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
                            i = e.substring(n + t.highlightWord.length);
                        return [e, t.highlightWord, r, i]
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
            }, r.omit(D, ["url"])]);
            var V = {
                RULES: D,
                CHANNEL_TOPIC_RULES: w,
                VOICE_CHANNEL_STATUS_RULES: F,
                EMBED_TITLE_RULES: G,
                INLINE_REPLY_RULES: U,
                GUILD_VERIFICATION_FORM_RULES: j,
                GUILD_EVENT_RULES: q,
                PROFILE_BIO_RULES: B,
                AUTO_MODERATION_SYSTEM_MESSAGE_RULES: $,
                NATIVE_SEARCH_RESULT_LINK_RULES: W
            }
        },
        290689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                textMarkupPatternWithExclusions: function() {
                    return i
                },
                default: function() {
                    return u
                }
            });
            var l = n("132710"),
                r = n.n(l);
            let i = e => new RegExp("^[\\s\\S]+?(?=".concat(e, "|[^0-9A-Za-z\\s\\u00ff-\\uffff]|\\n\\n| {2,}\\n|\\w+:\\S|[0-9]+\\.|$)")),
                a = {
                    ...r.defaultRules.text,
                    match: (0, l.anyScopeRegex)(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/)
                };
            var u = a
        },
        839462: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var l = n("132710"),
                r = n.n(l),
                i = n("385976"),
                a = n("867805"),
                u = n("402671"),
                o = n("290689");
            let c = {
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
                        let t = a.default.EMOJI_NAME_AND_DIVERSITY_RE.exec(e);
                        return null != t && "" !== a.default.convertNameToSurrogate(t[1]) ? t : null
                    },
                    parse(e) {
                        let [t, n] = e, l = a.default.convertNameToSurrogate(n);
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
                        let [l, r, a, u] = e, {
                            guildId: o
                        } = n, c = i.default.getDisambiguatedEmojiContext(o).getById(u), d = null == c || c.require_colons;
                        return null != c && (a = c.name), {
                            emojiId: u,
                            name: d ? ":".concat(a, ":") : a,
                            animated: "a" === r
                        }
                    }
                },
                text: {
                    parse(e) {
                        let t = a.default.findInlineEmojisFromSurrogates(e[0]),
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
            var d = c
        },
        646630: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TIMESTAMP_FORMATS: function() {
                    return a
                },
                DEFAULT_TIMESTAMP_FORMAT: function() {
                    return u
                },
                TIMESTAMP_REGEX: function() {
                    return c
                },
                parseTimestamp: function() {
                    return d
                },
                unparseTimestamp: function() {
                    return s
                }
            });
            var l = n("866227"),
                r = n.n(l),
                i = n("888400");
            let a = {
                    t: e => (0, i.dateFormat)(e, "LT"),
                    T: e => (0, i.dateFormat)(e, "LTS"),
                    d: e => (0, i.dateFormat)(e, "L"),
                    D: e => (0, i.dateFormat)(e, "LL"),
                    f: e => (0, i.dateFormat)(e, "LLL"),
                    F: e => (0, i.dateFormat)(e, "LLLL"),
                    R: e => {
                        let t = r.relativeTimeThreshold("s");
                        r.relativeTimeThreshold("s", 60);
                        let n = r.relativeTimeThreshold("ss");
                        r.relativeTimeThreshold("ss", -1);
                        let l = r.relativeTimeThreshold("m");
                        r.relativeTimeThreshold("m", 60);
                        let i = r(e.toDate()).fromNow();
                        return r.relativeTimeThreshold("s", t), r.relativeTimeThreshold("ss", n), r.relativeTimeThreshold("m", l), i
                    }
                },
                u = "f";
            Object.setPrototypeOf(a, null);
            let o = Object.keys(a).join("|"),
                c = new RegExp("^<t:(-?\\d{1,17})(?::(".concat(o, "))?>"));

            function d(e, t) {
                let n = r(1e3 * Number(e));
                if (!n.isValid()) return null;
                let l = null != t ? a[t] : void 0;
                return null == l && (l = a[u]), {
                    timestamp: e,
                    format: t,
                    parsed: n,
                    full: a.F(n),
                    formatted: l(n)
                }
            }

            function s(e, t) {
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
                    return Q
                }
            }), n("222007"), n("808653"), n("424973"), n("881410");
            var l = n("917351"),
                r = n.n(l),
                i = n("132710"),
                a = n.n(i),
                u = n("679653"),
                o = n("385976"),
                c = n("867805"),
                d = n("252931"),
                s = n("888198"),
                f = n("290689"),
                m = n("804888"),
                p = n("401690"),
                h = n("845579"),
                g = n("42203"),
                E = n("923959"),
                C = n("26989"),
                x = n("305961"),
                y = n("957255"),
                v = n("27618"),
                S = n("102985"),
                R = n("697218"),
                I = n("25292"),
                _ = n("402671"),
                T = n("158998"),
                b = n("49111"),
                M = n("958706"),
                N = n("782340");

            function k(e, t, n) {
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

            function L(e) {
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
                    match: a.anyScopeRegex(e),
                    parse: e => ({
                        type: "text",
                        content: e[0]
                    })
                }
            }
            let A = s.default.RULES,
                P = f.default,
                D = /^<@!?(\d+)>/,
                w = /^<@&(\d+)>/,
                F = /^<#(\d+)>/,
                G = /^<a?:(\w+):(\d+)>/,
                U = /(@everyone|@here|@Clyde)\b/,
                j = {
                    link: L(a.defaultRules.link),
                    autolink: L(a.defaultRules.autolink),
                    url: L(a.defaultRules.url),
                    inlineCode: L(A.inlineCode),
                    codeBlock: L(A.codeBlock),
                    rawUserMention: O(D),
                    rawRoleMention: O(w),
                    rawChannelMention: O(F),
                    rawEmoji: O(G),
                    mention: {
                        match(e, t, n) {
                            let l = n.split(" ").pop() + e;
                            if (/^[^ ]+@[^ ]+\.[^ .]+/.test(l)) return null;
                            let r = k("@", e, t.users, "mention");
                            if (r || (r = k("@", e, t.mentionableRoles, "roleMention"))) return r;
                            let i = t.users.map(e => ({
                                ...e,
                                text: e.text.split("#")[0]
                            }));
                            if (!(r = k("@", e, i, "mention"))) return null;
                            let a = U.exec(e);
                            if (null != a && r[0].length <= a[0].length) return null;
                            if ("" === n && (0, m.canSuppressNotifications)()) {
                                let t = m.SILENT_RE.exec(e);
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
                            if ('"' !== t[1]) return k(e, t, n, l);
                            let r = 2;
                            for (; r < t.length; r++) {
                                if ("\\" === t[r]) {
                                    r++;
                                    continue
                                }
                                if ('"' === t[r]) break
                            }
                            let i = t.substring(0, r + 1),
                                a = (0, u.unescapeChannelName)(t.substring(2, r));
                            return n.sortBy(e => {
                                let {
                                    text: t
                                } = e;
                                return -t.length
                            }).filter(e => {
                                let {
                                    text: t
                                } = e;
                                return a === t
                            }).map(e => {
                                let {
                                    id: t
                                } = e;
                                return [i, t, l]
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
                            let l = c.default.EMOJI_SHORTCUT_RE.exec(e);
                            return null == l || l[0].length !== e.length && " " !== e[l[0].length] && "\n" !== e[l[0].length] ? null : l
                        },
                        parse: e => ({
                            type: "emoticon",
                            content: c.default.convertShortcutToName(e[1]),
                            isShortcut: !0
                        })
                    },
                    emoji: {
                        order: A.emoji.order,
                        match: e => c.default.EMOJI_NAME_RE.exec(e),
                        parse(e, t, n) {
                            let [l, r] = e, {
                                customEmoji: i
                            } = n, a = Object.prototype.hasOwnProperty.call(i, r) ? i[r] : null;
                            if (null != a) {
                                var u;
                                return {
                                    type: "customEmoticon",
                                    content: "<".concat(!0 === a.animated ? "a" : "", ":").concat(null !== (u = a.originalName) && void 0 !== u ? u : a.name, ":").concat(a.id, ">"),
                                    emoji: a
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
                                emojiContext: i
                            } = n, a = i.getEmoticonByName(r);
                            return null != a ? {
                                type: "customEmoticon",
                                content: "<".concat(!0 === a.animated ? "a" : "", ":").concat(a.name, ":").concat(a.id, ">"),
                                emoji: a
                            } : {
                                type: "text",
                                content: l
                            }
                        }
                    },
                    text: {
                        ...P,
                        match: (e, t) => "string" == typeof t.textExclusions && "" !== t.textExclusions ? (0, f.textMarkupPatternWithExclusions)(t.textExclusions).exec(e) : null != P.match ? P.match(e, t, "") : null
                    }
                },
                B = {
                    inlineCode: L(A.inlineCode),
                    codeBlock: L(A.codeBlock),
                    mention: {
                        match: a.anyScopeRegex(D),
                        parse(e, t, n) {
                            let {
                                isNotification: l
                            } = n, r = R.default.getUser(e[1]);
                            if (null == r) return {
                                content: e[0]
                            };
                            let i = T.default.getUserTag(r, {
                                identifiable: l && S.default.enabled ? "never" : "always"
                            });
                            if (!l) return {
                                content: "@".concat(i)
                            };
                            {
                                let e = T.default.getGlobalName(r);
                                return {
                                    content: null != e ? "@".concat(e) : "@".concat(i)
                                }
                            }
                        }
                    },
                    roleMention: {
                        match: a.anyScopeRegex(w),
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
                        match: a.anyScopeRegex(F),
                        parse(e) {
                            let t = g.default.getChannel(e[1]);
                            return {
                                content: null == t ? e[0] : (0, u.computeChannelName)(t, R.default, v.default, !0, !0)
                            }
                        }
                    },
                    emoji: {
                        match: a.anyScopeRegex(G),
                        parse(e, t, n) {
                            let [l, r, i] = e, {
                                guild: a
                            } = n, u = o.default.getDisambiguatedEmojiContext(a ? a.id : null).getById(i), c = null != u ? u.name : r;
                            return {
                                content: ":".concat(c, ":")
                            }
                        }
                    },
                    soundboard: {
                        match: a.anyScopeRegex(/^<sound:(\d+)>/),
                        parse(e) {
                            let [t, n] = e;
                            return {
                                content: "<sound:".concat(n, ">")
                            }
                        }
                    },
                    spoiler: {
                        match: a.anyScopeRegex(b.MARKDOWN_SPOILER_REGEXP),
                        parse: () => ({
                            content: "<".concat(N.default.Messages.SPOILER.toLowerCase(), ">")
                        })
                    },
                    staticRouteLink: {
                        match: a.anyScopeRegex(b.MARKDOWN_STATIC_ROUTE_NAME_REGEXP),
                        parse: e => ({
                            content: "<id:".concat(e[1], ">")
                        })
                    },
                    timestamp: {
                        ...A.timestamp,
                        parse() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            let l = A.timestamp.parse(...t);
                            return {
                                content: l.formatted
                            }
                        }
                    },
                    text: {
                        ...P
                    }
                };
            [j, B].forEach(e => {
                Object.keys(e).forEach((t, n) => {
                    e[t].order = n
                })
            });
            let q = a.parserFor(j),
                W = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;

            function H(e, t, n, l) {
                let r = "";
                return e.forEach(e => {
                    if (! function(e, t, n) {
                            if (null != n && ("customEmoticon" === t.type && n(t.emoji, !1), "emoticon" === t.type || "text" === t.type)) {
                                let l;
                                let r = c.default.translateSurrogatesToInlineEmoji(t.content);
                                for (; null !== (l = W.exec(r));) {
                                    let r;
                                    null != l[1] && "" !== l[1] ? e.emojiContext && (r = e.emojiContext.getById(l[1])) : r = c.default.getByName(l[2]), r && n(r, t.isShortcut || !1)
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
                    } else e.content.constructor === Array ? r += H(e.content, t, n, l) : console.warn("Unknown message item type: ", e)
                }), r
            }

            function $(e) {
                let t;
                let n = null == e ? void 0 : e.getGuildId(),
                    l = null != n ? x.default.getGuild(n) : null,
                    i = y.default.can(b.Permissions.MENTION_EVERYONE, e);
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
                let a = r(t.reduce((e, t) => {
                        let {
                            userId: n
                        } = t, l = R.default.getUser(n);
                        return null == l ? e : (e.push({
                            id: n,
                            text: l.tag
                        }), e)
                    }, [])),
                    u = r(null != l ? l.roles : {}).values().filter(e => {
                        let {
                            mentionable: t
                        } = e;
                        return i || t
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
                    c = r(E.default.getTextChannelNameDisambiguations(n)).map(e => {
                        let {
                            id: t,
                            name: n
                        } = e;
                        return {
                            id: t,
                            text: n
                        }
                    }),
                    s = null != n ? r(I.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS).filter(e => e !== E.GUILD_SELECTABLE_CHANNELS_KEY).flatMap(e => E.default.getChannels(n)[e].map(e => ({
                        id: e.channel.id,
                        text: e.channel.name
                    }))).value() : [],
                    f = p.default.computeAllActiveJoinedThreads(n).map(e => ({
                        id: e.id,
                        text: e.name
                    })),
                    m = o.default.getDisambiguatedEmojiContext(n),
                    h = m.getEscapedCustomEmoticonNames(),
                    g = m.getCustomEmoji(),
                    v = m.getCustomEmoticonRegex(),
                    S = R.default.getCurrentUser(),
                    _ = (0, d.getInventoryGuildPacksUserExperimentConfig)({
                        user: S,
                        autoTrackExposure: !1
                    }).viewAndUseEnabled,
                    T = {
                        inline: !0,
                        mentionableRoles: u,
                        guild: l,
                        users: a,
                        channels: c.concat(s).concat(f),
                        emojiContext: m,
                        customEmoticonsRegex: v,
                        canViewAndUsePackEmoji: _,
                        customEmoji: g,
                        textExclusions: h,
                        disableErrorGuards: !0
                    };
                return T
            }

            function V(e) {
                return e
            }
            var Q = {
                parse(e, t) {
                    var n, l, r;
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                        a = null != i ? i : $(e),
                        u = {
                            content: t,
                            tts: !1,
                            invalidEmojis: [],
                            validNonShortcutEmojis: []
                        };
                    return u.content = (n = u.content, l = a, r = (t, n) => {
                        _.default.isEmojiPremiumLocked({
                            emoji: t,
                            channel: e,
                            intention: M.EmojiIntention.CHAT,
                            canViewAndUsePackEmoji: a.canViewAndUsePackEmoji
                        }) ? u.invalidEmojis.push(t) : !n && u.validNonShortcutEmojis.push(t)
                    }, H(q(n, l), l, c.default.translateInlineEmojiToSurrogates, r)), u
                },
                parsePreprocessor(e, t) {
                    let n = $(e);
                    return q(t, n)
                },
                unparse(e, t, n) {
                    let l = g.default.getChannel(t),
                        i = null != l ? l.getGuildId() : null,
                        u = null != i ? x.default.getGuild(i) : null,
                        o = n ? B : r.omit(B, ["spoiler", "timestamp"]),
                        d = n ? V : c.default.translateSurrogatesToInlineEmoji,
                        s = a.parserFor(o),
                        f = {
                            inline: !0,
                            guild: u,
                            isNotification: n
                        };
                    return H(s(e, f), f, d)
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
                    return i
                },
                canSuppressNotifications: function() {
                    return a
                },
                default: function() {
                    return u
                }
            });
            var l = n("729912");
            let r = "@silent",
                i = new RegExp("^".concat(r, "(\\s|$)"));

            function a() {
                let e = l.SilentMessagesExperiment.getCurrentConfig({
                    location: "456bd9_1"
                }, {
                    autoTrackExposure: !1
                });
                return e.allowSending
            }

            function u(e) {
                return a() && null != e.match(i) ? [!0, e.substring(r.length).trim()] : [!1, e]
            }
        }
    }
]);
//# sourceMappingURL=1cfd804a60fb4b49cd37.js.map