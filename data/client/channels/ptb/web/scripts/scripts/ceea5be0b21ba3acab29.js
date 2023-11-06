(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["96041"], {
        347895: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                fetchGuildHomeSettings: function() {
                    return h
                },
                fetchNewMemberActions: function() {
                    return C
                },
                selectHomeResourceChannel: function() {
                    return T
                },
                selectNewMemberActionChannel: function() {
                    return N
                },
                completeNewMemberAction: function() {
                    return S
                },
                getBlockForChannelDeletion: function() {
                    return I
                }
            }), t("808653");
            var l = t("872717"),
                i = t("913144"),
                u = t("819689"),
                r = t("115718"),
                o = t("38654"),
                a = t("144491"),
                d = t("42203"),
                c = t("599110"),
                s = t("698882"),
                E = t("129092"),
                _ = t("675305"),
                f = t("290886"),
                m = t("49111");
            let h = async e => {
                i.default.dispatch({
                    type: "GUILD_HOME_SETTINGS_FETCH_START",
                    guildId: e
                });
                try {
                    let n = await l.default.get({
                            url: m.Endpoints.GUILD_HOME_SETTINGS(e),
                            oldFormErrors: !0
                        }),
                        t = (0, E.settingsFromServer)(n.body);
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
            }, C = async e => {
                if (!o.default.isFullServerPreview(e)) {
                    i.default.dispatch({
                        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START",
                        guildId: e
                    });
                    try {
                        let n = await l.default.get({
                                url: m.Endpoints.GUILD_MEMBER_ACTIONS(e),
                                oldFormErrors: !0
                            }),
                            t = (0, E.actionsFromServer)(n.body);
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
                    E = s.default.getResourceForChannel(e, n);
                null != e && !o.default.isFullServerPreview(e) && null != l && null != E && c.default.track(m.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
                    guild_id: e,
                    channel_id: l.id,
                    server_guide_channel_type: "resource",
                    channel_action_type: -1
                }), t && (0, a.transitionToChannel)(n), u.default.jumpToMessage({
                    channelId: n,
                    messageId: n,
                    flash: !1,
                    jumpType: r.JumpTypes.INSTANT
                })
            }, N = (e, n) => {
                i.default.dispatch({
                    type: "SELECT_NEW_MEMBER_ACTION_CHANNEL",
                    guildId: e,
                    channelId: n
                });
                let t = d.default.getChannel(n),
                    l = s.default.getActionForChannel(e, n);
                null != e && !o.default.isFullServerPreview(e) && null != t && null != l && c.default.track(m.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
                    guild_id: e,
                    channel_id: t.id,
                    server_guide_channel_type: "member action",
                    channel_action_type: l.actionType
                }), (0, a.transitionToChannel)(n)
            }, S = (e, n) => {
                if (i.default.dispatch({
                        type: "COMPLETE_NEW_MEMBER_ACTION",
                        guildId: e,
                        channelId: n
                    }), o.default.isFullServerPreview(e)) return;
                let t = d.default.getChannel(n),
                    u = s.default.getActionForChannel(e, n);
                if (null != t && null != u) {
                    var r, a;
                    let n = Object.keys(null !== (r = _.default.getCompletedActions(e)) && void 0 !== r ? r : {}),
                        l = null !== (a = s.default.getNewMemberActions(e)) && void 0 !== a ? a : [];
                    c.default.track(m.AnalyticEvents.SERVER_GUIDE_ACTION_COMPLETED, {
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_action_type: u.actionType,
                        has_completed_all: l.reduce((e, t) => e && n.includes(t.channelId), !0)
                    })
                }
                l.default.post({
                    url: m.Endpoints.GUILD_MEMBER_ACTION_UPDATE(e, n)
                })
            };
            async function I(e, n) {
                if (null == e) return !1;
                let t = (0, f.canSeeOnboardingHome)(e);
                if (!t) return !1;
                let l = s.default.getSettings(e);
                return l === s.NO_SETTINGS && (await h(e), l = s.default.getSettings(e)), l !== s.NO_SETTINGS && null != l && (null != l.newMemberActions && null != l.newMemberActions.find(e => e.channelId === n) ? "todo" : null != l.resourceChannels && null != l.resourceChannels.find(e => e.channelId === n) && "resource")
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
                    return m
                },
                RESOURCE_CHANNEL_DESCRIPTION_MAX_LENGTH: function() {
                    return h
                },
                RESOURCE_CHANNEL_MAX: function() {
                    return C
                },
                NewMemberActionTypes: function() {
                    return i
                },
                newMemberActionFromServer: function() {
                    return T
                },
                resourceChannelFromServer: function() {
                    return N
                },
                settingsFromServer: function() {
                    return S
                },
                settingsToServer: function() {
                    return I
                },
                actionsFromServer: function() {
                    return p
                },
                isWelcomeMessageEmpty: function() {
                    return v
                },
                isSettingsEmpty: function() {
                    return M
                },
                isSettingsValid: function() {
                    return A
                },
                isChannelValidForResourceChannel: function() {
                    return g
                },
                isChannelValidForNewMemberAction: function() {
                    return L
                }
            });
            var l, i, u = t("42203"),
                r = t("449008"),
                o = t("991170"),
                a = t("49111");
            let d = 7,
                c = 300,
                s = 7,
                E = 60,
                _ = 5,
                f = 1,
                m = 30,
                h = 200,
                C = 7;

            function T(e) {
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

            function N(e) {
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

            function S(e) {
                if (null == e) return null;
                let {
                    welcome_message: n,
                    new_member_actions: t,
                    resource_channels: l,
                    enabled: i
                } = e, o = {
                    authorIds: n.author_ids,
                    message: n.message
                }, a = t.filter(e => (0, r.isNotNullish)(u.default.getChannel(e.channel_id))).map(T), d = l.filter(e => (0, r.isNotNullish)(u.default.getChannel(e.channel_id))).map(N);
                return {
                    welcomeMessage: o,
                    newMemberActions: a,
                    resourceChannels: d,
                    enabled: i
                }
            }

            function I(e, n) {
                var t, l, i, o, a, d, c, s, E, _;
                if (null == n) return null;
                let {
                    welcomeMessage: f,
                    newMemberActions: m,
                    resourceChannels: h,
                    enabled: C
                } = n, T = {
                    author_ids: null !== (t = null == f ? void 0 : f.authorIds) && void 0 !== t ? t : [],
                    message: null !== (l = null == f ? void 0 : f.message) && void 0 !== l ? l : ""
                }, N = (null != m ? m : []).filter(e => (0, r.isNotNullish)(u.default.getChannel(e.channelId))).map(e => {
                    var n, t, l;
                    return {
                        channel_id: e.channelId,
                        action_type: e.actionType,
                        title: e.title,
                        description: e.description,
                        emoji: {
                            id: null !== (i = null === (n = e.emoji) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : void 0,
                            name: null !== (o = null === (t = e.emoji) || void 0 === t ? void 0 : t.name) && void 0 !== o ? o : void 0,
                            animated: null !== (a = null === (l = e.emoji) || void 0 === l ? void 0 : l.animated) && void 0 !== a ? a : void 0
                        },
                        icon: null !== (d = e.icon) && void 0 !== d ? d : void 0
                    }
                }), S = (null != h ? h : []).filter(e => (0, r.isNotNullish)(u.default.getChannel(e.channelId))).map(e => {
                    var n, t, l;
                    return {
                        channel_id: e.channelId,
                        title: e.title,
                        description: e.description,
                        emoji: {
                            id: null !== (c = null === (n = e.emoji) || void 0 === n ? void 0 : n.id) && void 0 !== c ? c : void 0,
                            name: null !== (s = null === (t = e.emoji) || void 0 === t ? void 0 : t.name) && void 0 !== s ? s : void 0,
                            animated: null !== (E = null === (l = e.emoji) || void 0 === l ? void 0 : l.animated) && void 0 !== E ? E : void 0
                        },
                        icon: null !== (_ = e.icon) && void 0 !== _ ? _ : void 0
                    }
                });
                return {
                    guild_id: e,
                    welcome_message: T,
                    new_member_actions: N,
                    resource_channels: S,
                    enabled: C
                }
            }(l = i || (i = {}))[l.VIEW = 0] = "VIEW", l[l.CHAT = 1] = "CHAT";
            let p = e => {
                if (null == e) return null;
                let n = {};
                for (let t in e.channel_actions) n[t] = e.channel_actions[t].completed;
                return n
            };

            function v(e) {
                return null == e || (null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)) && !0
            }

            function M(e) {
                return null == e || !!v(e.welcomeMessage) && (null == e.newMemberActions || !(e.newMemberActions.length > 0)) && (null == e.resourceChannels || !(e.resourceChannels.length > 0)) && !0
            }

            function A(e) {
                var n, t;
                return null != e && (!!M(e) || (null === (n = e.welcomeMessage) || void 0 === n ? void 0 : n.message) != null && !(e.welcomeMessage.message.length < d) && (null === (t = e.welcomeMessage) || void 0 === t ? void 0 : t.authorIds) != null && 0 !== e.welcomeMessage.authorIds.length && null != e.newMemberActions && !(e.newMemberActions.length < 3) && !0)
            }

            function g(e) {
                return e.type === a.ChannelTypes.GUILD_TEXT && !o.default.canEveryoneRole(a.Permissions.SEND_MESSAGES, e) && o.default.canEveryoneRole(a.Permissions.VIEW_CHANNEL, e)
            }

            function L(e) {
                switch (e.type) {
                    case a.ChannelTypes.GUILD_TEXT:
                    case a.ChannelTypes.GUILD_ANNOUNCEMENT:
                    case a.ChannelTypes.GUILD_FORUM:
                    case a.ChannelTypes.GUILD_MEDIA:
                        return o.default.canEveryoneRole(a.Permissions.VIEW_CHANNEL, e);
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
            let u = {},
                r = {},
                o = new Set;
            class a extends l.default.Store {
                getCompletedActions(e) {
                    return null == e ? null : r[e]
                }
                hasCompletedActionForChannel(e, n) {
                    let t = this.getCompletedActions(e);
                    return null != t && null != t[n]
                }
                getState(e) {
                    return null == e ? {} : {
                        completedActions: r[e],
                        loading: o.has(e)
                    }
                }
            }
            a.displayName = "GuildOnboardingMemberActionStore";
            var d = new a(i.default, {
                GUILD_NEW_MEMBER_ACTIONS_FETCH_START: function(e) {
                    let {
                        guildId: n
                    } = e;
                    o.add(n)
                },
                GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS: function(e) {
                    let {
                        memberActions: n,
                        guildId: t
                    } = e;
                    if (null == n) {
                        r[t] = u;
                        return
                    }
                    r[t] = n, o.delete(t)
                },
                GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL: function(e) {
                    let {
                        guildId: n
                    } = e;
                    o.delete(n)
                },
                GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS: function(e) {
                    let {
                        guildId: n
                    } = e;
                    if (null == r[n]) return !1;
                    delete r[n]
                },
                COMPLETE_NEW_MEMBER_ACTION: function(e) {
                    let {
                        guildId: n,
                        channelId: t
                    } = e;
                    r = {
                        ...r,
                        [n]: {
                            ...r[n],
                            [t]: !0
                        }
                    }
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: n
                    } = e;
                    if (null == r[n.id]) return !1;
                    delete r[n.id]
                }
            })
        }
    }
]);
//# sourceMappingURL=ceea5be0b21ba3acab29.js.map