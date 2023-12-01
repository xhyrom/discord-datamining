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
                    return h
                },
                canUseCustomClydeProfiles: function() {
                    return p
                }
            }), n("884691"), n("446674");
            var l = n("305961"),
                r = n("957255"),
                a = n("772051"),
                i = n("254927"),
                u = n("49111"),
                o = n("724210");

            function c(e) {
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

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    l = c(e, t, n);
                return l === a.ClydeExperimentState.ClydeProfiles
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
                        let e = (0, i.isClydeEnabledinGdms)();
                        if (!e) return !1;
                        let t = l.default.getGuildIds().some(e => h(l.default.getGuild(e)));
                        return t
                    }
                    return !1
                }
                return null != e && e !== a.ClydeExperimentState.None && r.default.can(u.Permissions.USE_CLYDE_AI, n)
            }

            function m(e, t) {
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

            function p(e) {
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
                a = n("42203"),
                i = n("957255"),
                u = n("49111");
            let o = {
                needSubscriptionToAccess: !1,
                isSubscriptionGated: !1
            };

            function c(e) {
                return (0, l.useStateFromStoresObject)([a.default, r.default, i.default], () => d(e, a.default, r.default, i.default), [e])
            }

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.default,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.default,
                    l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.default,
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
        946897: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("132710"),
                r = n.n(l),
                a = n("862205");
            let i = /^https:\/\/(?:(?:media|images)\.discordapp\.net|(?:cdn\.discordapp\.com))\/attachments\/\d+\/\d+\/([A-Za-z0-9._-]*[A-Za-z0-9_-])(?:[?][a-zA-Z0-9?&=_-]*)?/,
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
            var c = {
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
            var l = n("132710"),
                r = n.n(l),
                a = n("203288"),
                i = n("679653"),
                u = n("848848"),
                o = n("361572"),
                c = n("42203"),
                d = n("305961"),
                s = n("957255"),
                f = n("27618"),
                m = n("697218"),
                h = n("315102"),
                p = n("404008"),
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
                    icon: h.default.getGuildIconURL({
                        id: e.id,
                        icon: e.icon,
                        size: 40
                    })
                }
            }

            function R(e, t) {
                let n;
                let l = T((0, g.truncateText)(e.name, 32));
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

            function _(e) {
                return {
                    type: "channel",
                    content: [T("")],
                    iconType: e ? "post" : "message"
                }
            }

            function I(e, t) {
                var n;
                let l = c.default.getChannel(e),
                    r = (0, u.getChannelRoleSubscriptionStatus)(e, c.default, a.default, s.default).isSubscriptionGated,
                    d = null !== (n = (0, p.getMentionIconType)(l)) && void 0 !== n ? n : "text";
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
                    name: (0, i.computeChannelName)(l, m.default, f.default),
                    isDm: l.isPrivate(),
                    isForumPost: l.isForumPost(),
                    isMentionable: (0, E.isChannelTypeMentionable)(l.type),
                    canViewChannel: (0, o.canViewChannel)(l),
                    roleSubscriptionGated: r,
                    iconType: d,
                    parentId: l.parent_id
                } : null
            }

            function b(e) {
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

            function T(e) {
                return {
                    type: "text",
                    content: e
                }
            }

            function M(e, t, n, l, r) {
                let a = d.default.getGuild(e),
                    i = (null == a ? void 0 : a.id) === l;
                return {
                    type: "channelMention",
                    guildId: e,
                    channelId: t,
                    messageId: n,
                    originalLink: r,
                    inContent: null == a || i ? null : [S(a)],
                    content: [R({
                        name: y.default.Messages.UNKNOWN_CHANNEL,
                        type: x.ChannelTypes.UNKNOWN,
                        iconType: "text"
                    }, "italics")]
                }
            }

            function k(e, t, n, l) {
                if (!e.canViewChannel) return function(e, t) {
                    let n = {
                        type: "channel",
                        content: [T(e.roleSubscriptionGated ? e.name : y.default.Messages.NO_ACCESS)],
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
                if (!e.isMentionable) return T("#".concat(e.name));
                let r = {
                        type: "channelMention",
                        channelId: e.id,
                        guildId: e.guildId,
                        messageId: t,
                        originalLink: l
                    },
                    a = d.default.getGuild(e.guildId);
                if (null == a) {
                    var i;
                    if (e.isDm) return {
                        ...r,
                        guildId: x.ME,
                        inContent: [R(e)],
                        content: [_(!1)]
                    };
                    return null != (i = l) ? b(i) : T("#".concat(y.default.Messages.UNKNOWN_CHANNEL_PLACEHOLDER))
                }
                let u = e.guildId === n;
                return {
                    ...r,
                    ... function(e, t, n, l) {
                        let r = S(e),
                            a = R(t),
                            i = _(t.isForumPost);
                        if (n && l) {
                            if (t.isForumPost) {
                                let e = c.default.getChannel(t.parentId);
                                if (null != e) {
                                    var u;
                                    return {
                                        inContent: [R({
                                            name: e.name,
                                            type: e.type,
                                            iconType: null !== (u = (0, p.getMentionIconType)(e)) && void 0 !== u ? u : "forum"
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
            let N = {
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
                        return null == r ? M(null, l, null, v(n.channelId)) : k(r, null, v(n.channelId))
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
                            a = e[2],
                            i = e[3];
                        if (null == a) return b(l);
                        let u = I(a, null);
                        return null == u ? M(r, a, i, v(n.channelId), l) : k(u, i, v(n.channelId), l)
                    }
                },
                A = {
                    order: r.defaultRules.url.order - .5,
                    requiredFirstCharacters: ["h"],
                    match: e => o.MEDIA_POST_URL_RE.exec(e),
                    parse(e, t, n) {
                        let l = e[0],
                            r = e[1],
                            a = e[2],
                            i = e[3],
                            u = e[4];
                        if (null == a || null == i) return b(l);
                        let o = I(i, null);
                        if (null != o) return k(o, u, v(n.channelId), l);
                        let c = I(a, null);
                        return null != c ? k(c, u, v(n.channelId), l) : M(r, a, u, v(n.channelId), l)
                    }
                };
            var O = {
                channelMention: N,
                channelOrMessageUrl: L,
                mediaPostLink: A
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
            }), n("781738");
            var l = n("627445"),
                r = n.n(l),
                a = n("132710"),
                i = n.n(a);
            let u = /\n{2,}$/,
                o = /(?:^|\n)( *)$/,
                c = "(?:[*-]|\\d+\\.)",
                d = "( *)(" + c + ") +",
                s = RegExp("^" + d),
                f = RegExp(d + "[^\\n]*(?:\\n(?!\\1" + c + " )[^\\n]*)*(\n|$)", "gm"),
                m = / *\n$/,
                h = RegExp("^( *)(" + c + ") [\\s\\S]+?(?:\\n(?! )(?!\\1" + c + " )|$)"),
                p = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/,
                g = e => e.map(e => ("text" === e.type && null != e.content && (e.content = e.content.replace(/\n+\s*$/, "")), e)),
                E = {
                    ...i.defaultRules.list,
                    requiredFirstCharacters: " *-0123456789".split(""),
                    match: (e, t) => {
                        if (!t.allowList || t._listLevel >= 11) return null;
                        let n = null == t.prevCapture ? "" : t.prevCapture[0],
                            l = o.exec(n);
                        return null == l || p.test(l[0]) ? null : h.exec(e)
                    },
                    parse: (e, t, n) => {
                        let l = e[2],
                            a = l.length > 1,
                            i = e[0].replace(u, "\n").match(f);
                        r(null != i, "markup list items can not be parsed.");
                        let o = !1,
                            c = i.map((e, l) => {
                                let r;
                                let a = s.exec(e),
                                    u = null != a ? a[0].length : 0,
                                    c = RegExp("^ {1," + u + "}", "gm"),
                                    d = e.replace(c, "").replace(s, ""),
                                    f = l === i.length - 1,
                                    h = -1 !== d.indexOf("\n\n"),
                                    p = h || f && o;
                                o = p;
                                let E = n.inline,
                                    C = n._list,
                                    x = n._listLevel;
                                n._list = !0, n._listLevel = (null != x ? x : 0) + 1, p ? (n.inline = !1, r = d.replace(m, "\n\n")) : (n.inline = !0, r = d.replace(m, ""));
                                let y = g(t(r, {
                                    ...n,
                                    allowHeading: !1
                                }));
                                return n.inline = E, n._list = C, n._listLevel = x, y
                            });
                        return {
                            ordered: a,
                            start: a ? Math.min(1e9, Math.max(1, +l)) : void 0,
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
                    return Q
                }
            }), n("781738"), n("424973"), n("222007");
            var l = n("917351"),
                r = n.n(l),
                a = n("132710"),
                i = n.n(a),
                u = n("980215"),
                o = n("867805"),
                c = n("235004"),
                d = n("42203"),
                s = n("305961"),
                f = n("697218"),
                m = n("387111"),
                h = n("158998"),
                p = n("946897"),
                g = n("632886"),
                E = n("270926"),
                C = n("647374"),
                x = n("693078"),
                y = n("290689"),
                v = n("839462"),
                S = n("646630"),
                R = n("788554"),
                _ = n("49111"),
                I = n("317041"),
                b = n("680894"),
                T = n("782340");
            let M = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
                k = /^$|\n *$/,
                N = /^ *>>> ?/,
                L = /^ *> ?/gm;

            function A(e) {
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
                    let t = d.default.getChannel(e);
                    return null == t ? void 0 : t.getGuildId()
                },
                P = e => null != e.guildId ? s.default.getGuild(e.guildId) : null != e.channelId ? s.default.getGuild(O(e.channelId)) : null,
                w = {
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
                            if (null == n) return M.exec(e);
                            let a = n[0];
                            return k.test(a) ? M.exec(e) : null
                        },
                        parse(e, t, n) {
                            let l = e[0],
                                r = !!N.exec(l),
                                a = l.replace(r ? N : L, ""),
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
                        parse: A
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
                        parse: A
                    },
                    strong: i.defaultRules.strong,
                    em: i.defaultRules.em,
                    u: i.defaultRules.u,
                    br: i.defaultRules.br,
                    text: y.default,
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
                        order: y.default.order,
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
                        order: y.default.order,
                        requiredFirstCharacters: ["<"],
                        match: e => /^<@&(\d+)>/.exec(e),
                        parse(e, t, n) {
                            let [l, r] = e;
                            if (n.returnMentionIds) return {
                                type: "roleMention",
                                id: r
                            };
                            let a = P(n),
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
                        order: y.default.order,
                        requiredFirstCharacters: ["<", "@"],
                        match(e, t) {
                            let n = /^<@!?(\d+)>|^(@(?:everyone|here|Clyde))/.exec(e);
                            return null != n && ("@Clyde" !== n[0] || (0, u.getClydeEnabled)(P(t), d.default.getChannel(t.channelId))) ? n : null
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
                                i = d.default.getChannel(n.channelId);
                            if (null != a && (r = a.id, l = a.toString(), null != i)) {
                                var o;
                                l = null !== (o = m.default.getNickname(i.getGuildId(), n.channelId, a)) && void 0 !== o ? o : h.default.getName(a)
                            }
                            null == a && "@Clyde" === e[0] && (0, u.getClydeEnabled)(P(n), i) && (r = b.CLYDE_AI_USER_ID);
                            let c = e[1],
                                s = null != c && _.ID_REGEX.test(c.trim()),
                                p = s && n.unknownUserMentionPlaceholder ? "@".concat(T.default.Messages.UNKNOWN_USER_MENTION_PLACEHOLDER) : e[0];
                            return {
                                userId: r,
                                channelId: n.channelId,
                                guildId: null == i ? void 0 : i.getGuildId(),
                                roleName: e[2],
                                content: [{
                                    type: "text",
                                    content: null != l ? "@".concat(l) : p
                                }]
                            }
                        }
                    },
                    channelMention: g.default.channelMention,
                    channelOrMessageUrl: g.default.channelOrMessageUrl,
                    mediaPostLink: g.default.mediaPostLink,
                    attachmentLink: p.default.attachmentLink,
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
                        order: y.default.order,
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
                        order: y.default.order,
                        requiredFirstCharacters: ["<"],
                        match: e => /^<sound:(\d+)>/.exec(e),
                        parse(e, t, n) {
                            var l;
                            let r = e[1],
                                a = c.default.getSoundById(r),
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
                        order: y.default.order,
                        requiredFirstCharacters: ["<"],
                        match: e => /^<a?:(\w+):(\d+)>/.exec(e),
                        parse: e => ({
                            type: "text",
                            content: ":".concat(e[1], ":")
                        })
                    },
                    timestamp: {
                        order: y.default.order - 1,
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
                        order: y.default.order,
                        requiredFirstCharacters: ["|"],
                        match: e => _.MARKDOWN_SPOILER_REGEXP.exec(e),
                        parse: (e, t, n) => ({
                            content: t(e[1], n),
                            channelId: n.channelId
                        })
                    },
                    staticRouteLink: {
                        order: y.default.order,
                        requiredFirstCharacters: ["<"],
                        match: e => _.MARKDOWN_STATIC_ROUTE_NAME_REGEXP.exec(e),
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
                    heading: E.default,
                    list: x.default
                },
                D = (0, R.default)([w, v.default]),
                F = r.omit(D, ["inlineCode", "codeBlock", "br", "blockQuote"]),
                G = r.omit(D, ["inlineCode", "codeBlock", "br", "blockQuote", "url", "attachmentLink", "mention", "roleMention", "channelMention", "channelOrMessageUrl", "mediaPostLink"]),
                U = r.omit(D, ["codeBlock", "br", "mention", "channel", "roleMention", "attachmentLink"]),
                j = r.omit((0, R.default)([D, {
                    inlineCode: {
                        match(e, t, n) {
                            let l = D.codeBlock.match(e, t, n);
                            if (null != l) return l;
                            let r = D.inlineCode.match(e, t, n);
                            if (null != r) return r
                        }
                    }
                }]), ["blockQuote", "codeBlock", "br"]),
                B = r.omit(D, ["codeBlock", "br", "blockQuote"]),
                q = r.omit(D, ["codeBlock", "br", "attachmentLink", "mention", "roleMention", "channel", "paragraph", "newline"]),
                W = r.omit(D, ["codeBlock", "blockQuote", "br"]),
                H = r.omit(D, ["codeBlock", "br", "inlineCode"]);

            function $(e, t) {
                return 0 === e.length || 0 === t || "" === e.charAt(t - 1).trim()
            }
            let V = (0, R.default)([{
                highlightWord: {
                    order: -1,
                    match(e, t) {
                        if (null == t.highlightWord || 0 === t.highlightWord.length) return null;
                        let n = e.indexOf(t.highlightWord);
                        if (-1 === n) return null;
                        let l = !$(e, n);
                        if (l)
                            do n = e.indexOf(t.highlightWord, n + 1), l = !$(e, n); while (l && -1 !== n);
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
            }, r.omit(D, ["url"])]);
            var Q = {
                RULES: D,
                CHANNEL_TOPIC_RULES: F,
                VOICE_CHANNEL_STATUS_RULES: G,
                EMBED_TITLE_RULES: U,
                INLINE_REPLY_RULES: j,
                GUILD_VERIFICATION_FORM_RULES: B,
                GUILD_EVENT_RULES: W,
                PROFILE_BIO_RULES: q,
                AUTO_MODERATION_SYSTEM_MESSAGE_RULES: V,
                NATIVE_SEARCH_RESULT_LINK_RULES: H
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
                    return d
                }
            }), n("222007");
            var l = n("132710"),
                r = n.n(l),
                a = n("385976"),
                i = n("867805"),
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
                        } = n, c = a.default.getDisambiguatedEmojiContext(o).getById(u), d = null == c || c.require_colons;
                        return null != c && (i = c.name), {
                            emojiId: u,
                            name: d ? ":".concat(i, ":") : i,
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
            var d = c
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
                c = new RegExp("^<t:(-?\\d{1,17})(?::(".concat(o, "))?>"));

            function d(e, t) {
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
                a = n("132710"),
                i = n.n(a),
                u = n("679653"),
                o = n("385976"),
                c = n("867805"),
                d = n("252931"),
                s = n("888198"),
                f = n("290689"),
                m = n("804888"),
                h = n("401690"),
                p = n("845579"),
                g = n("42203"),
                E = n("923959"),
                C = n("26989"),
                x = n("305961"),
                y = n("957255"),
                v = n("27618"),
                S = n("102985"),
                R = n("697218"),
                _ = n("25292"),
                I = n("402671"),
                b = n("158998"),
                T = n("49111"),
                M = n("958706"),
                k = n("782340");

            function N(e, t, n) {
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

            function A(e) {
                return {
                    match: i.anyScopeRegex(e),
                    parse: e => ({
                        type: "text",
                        content: e[0]
                    })
                }
            }
            let O = s.default.RULES,
                P = f.default,
                w = /^<@!?(\d+)>/,
                D = /^<@&(\d+)>/,
                F = /^<#(\d+)>/,
                G = /^<a?:(\w+):(\d+)>/,
                U = /(@everyone|@here|@Clyde)\b/,
                j = {
                    link: L(i.defaultRules.link),
                    autolink: L(i.defaultRules.autolink),
                    url: L(i.defaultRules.url),
                    inlineCode: L(O.inlineCode),
                    codeBlock: L(O.codeBlock),
                    rawUserMention: A(w),
                    rawRoleMention: A(D),
                    rawChannelMention: A(F),
                    rawEmoji: A(G),
                    mention: {
                        match(e, t, n) {
                            let l = n.split(" ").pop() + e;
                            if (/^[^ ]+@[^ ]+\.[^ .]+/.test(l)) return null;
                            let r = N("@", e, t.users, "mention");
                            if (r || (r = N("@", e, t.mentionableRoles, "roleMention"))) return r;
                            let a = t.users.map(e => ({
                                ...e,
                                text: e.text.split("#")[0]
                            }));
                            if (!(r = N("@", e, a, "mention"))) return null;
                            let i = U.exec(e);
                            if (null != i && r[0].length <= i[0].length) return null;
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
                            if ('"' !== t[1]) return N(e, t, n, l);
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
                            if (!p.ConvertEmoticons.getSetting() || 0 !== n.length && !/\s$/.test(n)) return null;
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
                        order: O.emoji.order,
                        match: e => c.default.EMOJI_NAME_RE.exec(e),
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
                        ...P,
                        match: (e, t) => "string" == typeof t.textExclusions && "" !== t.textExclusions ? (0, f.textMarkupPatternWithExclusions)(t.textExclusions).exec(e) : null != P.match ? P.match(e, t, "") : null
                    }
                },
                B = {
                    inlineCode: L(O.inlineCode),
                    codeBlock: L(O.codeBlock),
                    mention: {
                        match: i.anyScopeRegex(w),
                        parse(e, t, n) {
                            let {
                                isNotification: l
                            } = n, r = R.default.getUser(e[1]);
                            if (null == r) return {
                                content: e[0]
                            };
                            let a = b.default.getUserTag(r, {
                                identifiable: l && S.default.enabled ? "never" : "always"
                            });
                            if (!l) return {
                                content: "@".concat(a)
                            };
                            {
                                let e = b.default.getGlobalName(r);
                                return {
                                    content: null != e ? "@".concat(e) : "@".concat(a)
                                }
                            }
                        }
                    },
                    roleMention: {
                        match: i.anyScopeRegex(D),
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
                        match: i.anyScopeRegex(F),
                        parse(e) {
                            let t = g.default.getChannel(e[1]);
                            return {
                                content: null == t ? e[0] : (0, u.computeChannelName)(t, R.default, v.default, !0, !0)
                            }
                        }
                    },
                    emoji: {
                        match: i.anyScopeRegex(G),
                        parse(e, t, n) {
                            let [l, r, a] = e, {
                                guild: i
                            } = n, u = o.default.getDisambiguatedEmojiContext(i ? i.id : null).getById(a), c = null != u ? u.name : r;
                            return {
                                content: ":".concat(c, ":")
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
                        match: i.anyScopeRegex(T.MARKDOWN_SPOILER_REGEXP),
                        parse: () => ({
                            content: "<".concat(k.default.Messages.SPOILER.toLowerCase(), ">")
                        })
                    },
                    staticRouteLink: {
                        match: i.anyScopeRegex(T.MARKDOWN_STATIC_ROUTE_NAME_REGEXP),
                        parse: e => ({
                            content: "<id:".concat(e[1], ">")
                        })
                    },
                    timestamp: {
                        ...O.timestamp,
                        parse() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            let l = O.timestamp.parse(...t);
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
            let q = i.parserFor(j),
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
                    a = y.default.can(T.Permissions.MENTION_EVERYONE, e);
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
                    s = null != n ? r(_.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS).filter(e => e !== E.GUILD_SELECTABLE_CHANNELS_KEY).flatMap(e => E.default.getChannels(n)[e].map(e => ({
                        id: e.channel.id,
                        text: e.channel.name
                    }))).value() : [],
                    f = h.default.computeAllActiveJoinedThreads(n).map(e => ({
                        id: e.id,
                        text: e.name
                    })),
                    m = o.default.getDisambiguatedEmojiContext(n),
                    p = m.getEscapedCustomEmoticonNames(),
                    g = m.getCustomEmoji(),
                    v = m.getCustomEmoticonRegex(),
                    S = R.default.getCurrentUser(),
                    I = (0, d.getInventoryGuildPacksUserExperimentConfig)({
                        user: S,
                        autoTrackExposure: !1
                    }).viewAndUseEnabled,
                    b = {
                        inline: !0,
                        mentionableRoles: u,
                        guild: l,
                        users: i,
                        channels: c.concat(s).concat(f),
                        emojiContext: m,
                        customEmoticonsRegex: v,
                        canViewAndUsePackEmoji: I,
                        customEmoji: g,
                        textExclusions: p,
                        disableErrorGuards: !0
                    };
                return b
            }

            function V(e) {
                return e
            }
            var Q = {
                parse(e, t) {
                    var n, l, r;
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                        i = null != a ? a : $(e),
                        u = {
                            content: t,
                            tts: !1,
                            invalidEmojis: [],
                            validNonShortcutEmojis: []
                        };
                    return u.content = (n = u.content, l = i, r = (t, n) => {
                        I.default.isEmojiPremiumLocked({
                            emoji: t,
                            channel: e,
                            intention: M.EmojiIntention.CHAT,
                            canViewAndUsePackEmoji: i.canViewAndUsePackEmoji
                        }) ? u.invalidEmojis.push(t) : !n && u.validNonShortcutEmojis.push(t)
                    }, H(q(n, l), l, c.default.translateInlineEmojiToSurrogates, r)), u
                },
                parsePreprocessor(e, t) {
                    let n = $(e);
                    return q(t, n)
                },
                unparse(e, t, n) {
                    let l = g.default.getChannel(t),
                        a = null != l ? l.getGuildId() : null,
                        u = null != a ? x.default.getGuild(a) : null,
                        o = n ? B : r.omit(B, ["spoiler", "timestamp"]),
                        d = n ? V : c.default.translateSurrogatesToInlineEmoji,
                        s = i.parserFor(o),
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
        }
    }
]);
//# sourceMappingURL=48590.91e049a0d7e2ba0511cf.js.map