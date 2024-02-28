(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["23360"], {
        578899: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                SimpleDeadchatPromptExperiment: function() {
                    return i
                }
            });
            var l = t("862205");
            let i = (0, l.createExperiment)({
                kind: "guild",
                id: "2023-08_deadchat_simple_prompt_guild",
                label: "Simple deadchat prompt",
                defaultConfig: {
                    triggerDeadchat: !1,
                    enableDeadchat: !1
                },
                treatments: [{
                    id: 0,
                    label: "Control",
                    config: {
                        triggerDeadchat: !0,
                        enableDeadchat: !1
                    }
                }, {
                    id: 1,
                    label: "trigger deadchat upon connection open",
                    config: {
                        triggerDeadchat: !0,
                        enableDeadchat: !0
                    }
                }]
            })
        },
        347895: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                fetchGuildHomeSettings: function() {
                    return C
                },
                fetchNewMemberActions: function() {
                    return p
                },
                selectHomeResourceChannel: function() {
                    return T
                },
                selectNewMemberActionChannel: function() {
                    return N
                },
                completeNewMemberAction: function() {
                    return g
                },
                getBlockForChannelDeletion: function() {
                    return v
                }
            }), t("222007"), t("808653");
            var l = t("872717"),
                i = t("913144"),
                r = t("819689"),
                o = t("115718"),
                u = t("38654"),
                a = t("144491"),
                d = t("42203"),
                c = t("599110"),
                s = t("299039"),
                E = t("698882"),
                _ = t("129092"),
                f = t("675305"),
                h = t("290886"),
                m = t("49111");
            let C = async e => {
                i.default.dispatch({
                    type: "GUILD_HOME_SETTINGS_FETCH_START",
                    guildId: e
                });
                try {
                    let n = await l.default.get({
                            url: m.Endpoints.GUILD_HOME_SETTINGS(e),
                            oldFormErrors: !0
                        }),
                        t = (0, _.settingsFromServer)(n.body);
                    return i.default.dispatch({
                        type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS",
                        guildId: e,
                        homeSettings: t
                    }), t
                } catch (n) {
                    i.default.dispatch({
                        type: "GUILD_HOME_SETTINGS_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, p = async e => {
                if (!u.default.isFullServerPreview(e)) {
                    i.default.dispatch({
                        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START",
                        guildId: e
                    });
                    try {
                        let n = await l.default.get({
                                url: m.Endpoints.GUILD_MEMBER_ACTIONS(e),
                                oldFormErrors: !0
                            }),
                            t = (0, _.actionsFromServer)(n.body);
                        return i.default.dispatch({
                            type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS",
                            guildId: e,
                            memberActions: t
                        }), t
                    } catch (n) {
                        i.default.dispatch({
                            type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL",
                            guildId: e
                        })
                    }
                }
            }, T = function(e, n) {
                let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                if (i.default.dispatch({
                        type: "SELECT_HOME_RESOURCE_CHANNEL",
                        guildId: e,
                        channelId: n
                    }), null == n) return;
                let l = d.default.getChannel(n),
                    _ = E.default.getResourceForChannel(e, n);
                null != e && !u.default.isFullServerPreview(e) && null != l && null != _ && c.default.track(m.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
                    guild_id: e,
                    channel_id: l.id,
                    server_guide_channel_type: "resource",
                    channel_action_type: -1
                }), t && (0, a.transitionToChannel)(n), r.default.jumpToMessage({
                    channelId: n,
                    messageId: s.default.castChannelIdAsMessageId(n),
                    flash: !1,
                    jumpType: o.JumpTypes.INSTANT
                })
            }, N = (e, n) => {
                i.default.dispatch({
                    type: "SELECT_NEW_MEMBER_ACTION_CHANNEL",
                    guildId: e,
                    channelId: n
                });
                let t = d.default.getChannel(n),
                    l = E.default.getActionForChannel(e, n);
                null != e && !u.default.isFullServerPreview(e) && null != t && null != l && c.default.track(m.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
                    guild_id: e,
                    channel_id: t.id,
                    server_guide_channel_type: "member action",
                    channel_action_type: l.actionType
                }), (0, a.transitionToChannel)(n)
            }, g = (e, n) => {
                if (i.default.dispatch({
                        type: "COMPLETE_NEW_MEMBER_ACTION",
                        guildId: e,
                        channelId: n
                    }), u.default.isFullServerPreview(e)) return;
                let t = d.default.getChannel(n),
                    r = E.default.getActionForChannel(e, n);
                if (null != t && null != r) {
                    var o, a;
                    let n = s.default.keys(null !== (o = f.default.getCompletedActions(e)) && void 0 !== o ? o : {}),
                        l = null !== (a = E.default.getNewMemberActions(e)) && void 0 !== a ? a : [];
                    c.default.track(m.AnalyticEvents.SERVER_GUIDE_ACTION_COMPLETED, {
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_action_type: r.actionType,
                        has_completed_all: l.reduce((e, t) => e && n.includes(t.channelId), !0)
                    })
                }
                l.default.post({
                    url: m.Endpoints.GUILD_MEMBER_ACTION_UPDATE(e, n)
                })
            };
            async function v(e, n) {
                if (null == e) return !1;
                let t = (0, h.canSeeOnboardingHome)(e);
                if (!t) return !1;
                let l = E.default.getSettings(e);
                return l === E.NO_SETTINGS && (await C(e), l = E.default.getSettings(e)), l !== E.NO_SETTINGS && null != l && (null != l.newMemberActions && null != l.newMemberActions.find(e => e.channelId === n) ? "todo" : null != l.resourceChannels && null != l.resourceChannels.find(e => e.channelId === n) && "resource")
            }
        },
        129092: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                WELCOME_MESSAGE_MIN_LENGTH: function() {
                    return d
                },
                WELCOME_MESSAGE_MAX_LENGTH: function() {
                    return c
                },
                NEW_MEMBER_ACTION_TITLE_MIN_LENGTH: function() {
                    return s
                },
                NEW_MEMBER_ACTION_TITLE_MAX_LENGTH: function() {
                    return E
                },
                NEW_MEMBER_ACTION_MAX: function() {
                    return _
                },
                RESOURCE_CHANNEL_TITLE_MIN_LENGTH: function() {
                    return f
                },
                RESOURCE_CHANNEL_TITLE_MAX_LENGTH: function() {
                    return h
                },
                RESOURCE_CHANNEL_DESCRIPTION_MAX_LENGTH: function() {
                    return m
                },
                RESOURCE_CHANNEL_MAX: function() {
                    return C
                },
                NewMemberActionTypes: function() {
                    return i
                },
                newMemberActionFromServer: function() {
                    return p
                },
                resourceChannelFromServer: function() {
                    return T
                },
                settingsFromServer: function() {
                    return N
                },
                settingsToServer: function() {
                    return g
                },
                actionsFromServer: function() {
                    return v
                },
                isWelcomeMessageEmpty: function() {
                    return I
                },
                isSettingsEmpty: function() {
                    return S
                },
                isSettingsValid: function() {
                    return A
                },
                isChannelValidForResourceChannel: function() {
                    return M
                },
                isChannelValidForNewMemberAction: function() {
                    return L
                }
            });
            var l, i, r = t("42203"),
                o = t("449008"),
                u = t("991170"),
                a = t("49111");
            let d = 7,
                c = 300,
                s = 7,
                E = 60,
                _ = 5,
                f = 1,
                h = 30,
                m = 200,
                C = 7;

            function p(e) {
                var n;
                return {
                    channelId: e.channel_id,
                    actionType: e.action_type,
                    title: e.title,
                    description: e.description,
                    emoji: null == e.emoji ? null : {
                        id: e.emoji.id,
                        name: e.emoji.name,
                        animated: e.emoji.animated
                    },
                    icon: null !== (n = e.icon) && void 0 !== n ? n : null
                }
            }

            function T(e) {
                var n, t;
                return {
                    channelId: e.channel_id,
                    title: e.title,
                    description: null !== (n = e.description) && void 0 !== n ? n : "",
                    emoji: null == e.emoji ? null : {
                        id: e.emoji.id,
                        name: e.emoji.name,
                        animated: e.emoji.animated
                    },
                    icon: null !== (t = e.icon) && void 0 !== t ? t : null
                }
            }

            function N(e) {
                if (null == e) return null;
                let {
                    welcome_message: n,
                    new_member_actions: t,
                    resource_channels: l,
                    enabled: i
                } = e, u = {
                    authorIds: n.author_ids,
                    message: n.message
                }, a = t.filter(e => (0, o.isNotNullish)(r.default.getChannel(e.channel_id))).map(p), d = l.filter(e => (0, o.isNotNullish)(r.default.getChannel(e.channel_id))).map(T);
                return {
                    welcomeMessage: u,
                    newMemberActions: a,
                    resourceChannels: d,
                    enabled: i
                }
            }

            function g(e, n) {
                var t, l;
                if (null == n) return null;
                let {
                    welcomeMessage: i,
                    newMemberActions: u,
                    resourceChannels: a,
                    enabled: d
                } = n, c = {
                    author_ids: null !== (t = null == i ? void 0 : i.authorIds) && void 0 !== t ? t : [],
                    message: null !== (l = null == i ? void 0 : i.message) && void 0 !== l ? l : ""
                }, s = (null != u ? u : []).filter(e => (0, o.isNotNullish)(r.default.getChannel(e.channelId))).map(e => {
                    var n, t, l, i, r, o, u;
                    return {
                        channel_id: e.channelId,
                        action_type: e.actionType,
                        title: e.title,
                        description: e.description,
                        emoji: {
                            id: null !== (i = null === (n = e.emoji) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : void 0,
                            name: null !== (r = null === (t = e.emoji) || void 0 === t ? void 0 : t.name) && void 0 !== r ? r : void 0,
                            animated: null !== (o = null === (l = e.emoji) || void 0 === l ? void 0 : l.animated) && void 0 !== o ? o : void 0
                        },
                        icon: null !== (u = e.icon) && void 0 !== u ? u : void 0
                    }
                }), E = (null != a ? a : []).filter(e => (0, o.isNotNullish)(r.default.getChannel(e.channelId))).map(e => {
                    var n, t, l, i, r, o, u;
                    return {
                        channel_id: e.channelId,
                        title: e.title,
                        description: e.description,
                        emoji: {
                            id: null !== (i = null === (n = e.emoji) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : void 0,
                            name: null !== (r = null === (t = e.emoji) || void 0 === t ? void 0 : t.name) && void 0 !== r ? r : void 0,
                            animated: null !== (o = null === (l = e.emoji) || void 0 === l ? void 0 : l.animated) && void 0 !== o ? o : void 0
                        },
                        icon: null !== (u = e.icon) && void 0 !== u ? u : void 0
                    }
                });
                return {
                    guild_id: e,
                    welcome_message: c,
                    new_member_actions: s,
                    resource_channels: E,
                    enabled: d
                }
            }(l = i || (i = {}))[l.VIEW = 0] = "VIEW", l[l.CHAT = 1] = "CHAT";
            let v = e => {
                if (null == e) return null;
                let n = {};
                for (let t in e.channel_actions) n[t] = e.channel_actions[t].completed;
                return n
            };

            function I(e) {
                return null == e || (null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)) && !0
            }

            function S(e) {
                return null == e || !!I(e.welcomeMessage) && (null == e.newMemberActions || !(e.newMemberActions.length > 0)) && (null == e.resourceChannels || !(e.resourceChannels.length > 0)) && !0
            }

            function A(e) {
                var n, t;
                return null != e && (!!S(e) || (null === (n = e.welcomeMessage) || void 0 === n ? void 0 : n.message) != null && !(e.welcomeMessage.message.length < d) && (null === (t = e.welcomeMessage) || void 0 === t ? void 0 : t.authorIds) != null && 0 !== e.welcomeMessage.authorIds.length && null != e.newMemberActions && !(e.newMemberActions.length < 3) && !0)
            }

            function M(e) {
                return e.type === a.ChannelTypes.GUILD_TEXT && !u.default.canEveryoneRole(a.Permissions.SEND_MESSAGES, e) && u.default.canEveryoneRole(a.Permissions.VIEW_CHANNEL, e)
            }

            function L(e) {
                switch (e.type) {
                    case a.ChannelTypes.GUILD_TEXT:
                    case a.ChannelTypes.GUILD_ANNOUNCEMENT:
                    case a.ChannelTypes.GUILD_FORUM:
                    case a.ChannelTypes.GUILD_MEDIA:
                        return u.default.canEveryoneRole(a.Permissions.VIEW_CHANNEL, e);
                    default:
                        return !1
                }
            }
        },
        675305: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return d
                }
            }), t("222007");
            var l = t("446674"),
                i = t("913144");
            let r = {},
                o = {},
                u = new Set;
            class a extends l.default.Store {
                getCompletedActions(e) {
                    return null == e ? null : o[e]
                }
                hasCompletedActionForChannel(e, n) {
                    let t = this.getCompletedActions(e);
                    return null != t && null != t[n]
                }
                getState(e) {
                    return null == e ? {} : {
                        completedActions: o[e],
                        loading: u.has(e)
                    }
                }
            }
            a.displayName = "GuildOnboardingMemberActionStore";
            var d = new a(i.default, {
                GUILD_NEW_MEMBER_ACTIONS_FETCH_START: function(e) {
                    let {
                        guildId: n
                    } = e;
                    u.add(n)
                },
                GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS: function(e) {
                    let {
                        memberActions: n,
                        guildId: t
                    } = e;
                    if (null == n) {
                        o[t] = r;
                        return
                    }
                    o[t] = n, u.delete(t)
                },
                GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL: function(e) {
                    let {
                        guildId: n
                    } = e;
                    u.delete(n)
                },
                GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS: function(e) {
                    let {
                        guildId: n
                    } = e;
                    if (null == o[n]) return !1;
                    delete o[n]
                },
                COMPLETE_NEW_MEMBER_ACTION: function(e) {
                    let {
                        guildId: n,
                        channelId: t
                    } = e;
                    o = {
                        ...o,
                        [n]: {
                            ...o[n],
                            [t]: !0
                        }
                    }
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: n
                    } = e;
                    if (null == o[n.id]) return !1;
                    delete o[n.id]
                }
            })
        },
        746574: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                moveItemFromTo: function() {
                    return a
                },
                default: function() {
                    return d
                }
            }), t("424973"), t("222007");
            var l = t("917351"),
                i = t.n(l),
                r = t("605250");
            let o = new r.default("DragAndDropUtils");

            function u(e) {
                let {
                    oldOrdering: n,
                    newOrdering: t,
                    idGetter: l,
                    existingPositionGetter: i,
                    ascending: r = !0
                } = e, u = t.length;
                if (n.length !== u) return o.warn("Arrays are not of the same length!", n, t), [];
                let a = n.map(l).sort().join(":"),
                    d = t.map(l).sort().join(":");
                if (a !== d) return o.warn("Object IDs in the old ordering and the new ordering are not the same.", a, d), [];
                let c = {};
                for (let e = 0; e < u; e++) c[l(n[e])] = i(n[e]);
                let s = [];
                for (let e = 0; e < u; e++) {
                    let n = l(t[e]),
                        o = c[n],
                        a = r ? e : u - 1 - e;
                    (o !== a || i(t[e]) !== a) && s.push({
                        id: n,
                        position: a
                    })
                }
                return !r && s.reverse(), s
            }

            function a(e, n, t) {
                let l = e[n],
                    i = [...e];
                return i.splice(n, 1), i.splice(t, 0, l), i
            }
            var d = {
                moveItemFromTo: a,
                calculatePositionDeltas: u,
                getPositionUpdates: function(e) {
                    let {
                        objectArray: n,
                        fromPosition: t,
                        toPosition: l,
                        idGetter: r,
                        existingPositionGetter: o,
                        ascending: d = !0
                    } = e;
                    !Array.isArray(n) && (n = i.values(n));
                    let c = a(n, t, l);
                    return u({
                        oldOrdering: n,
                        newOrdering: c,
                        idGetter: r,
                        existingPositionGetter: o,
                        ascending: d
                    })
                }
            }
        }
    }
]);
//# sourceMappingURL=23360.8d943b1704a9e3ccf72e.js.map