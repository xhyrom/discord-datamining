(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["12108"], {
        267363: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ack: function() {
                    return c
                },
                ackChannel: function() {
                    return f
                },
                bulkAck: function() {
                    return _
                },
                localAck: function() {
                    return E
                },
                enableAutomaticAck: function() {
                    return A
                },
                disableAutomaticAck: function() {
                    return h
                },
                ackGuildFeature: function() {
                    return v
                },
                ackUserFeature: function() {
                    return I
                }
            }), n("222007"), n("424973");
            var l = n("913144"),
                i = n("401690"),
                r = n("233069"),
                u = n("42203"),
                a = n("245997"),
                d = n("697218"),
                o = n("299039"),
                s = n("49111");

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = arguments.length > 3 ? arguments[3] : void 0,
                    r = arguments.length > 4 ? arguments[4] : void 0;
                l.default.dispatch({
                    type: "CHANNEL_ACK",
                    channelId: e,
                    messageId: i,
                    immediate: t,
                    force: n,
                    context: s.CURRENT_APP_CONTEXT,
                    location: r
                })
            }

            function f(e) {
                e.isCategory() ? ! function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        l = u.default.getChannel(e);
                    if (null == l || null == l.guild_id) return;
                    let d = a.default.getCategories(l.guild_id);
                    if (null == d[e]) return;
                    let o = d[e].filter(e => {
                            let {
                                channel: t
                            } = e;
                            return (0, r.isGuildReadableType)(t.type)
                        }).map(e => {
                            let {
                                channel: t
                            } = e;
                            return t.id
                        }),
                        s = [...o];
                    for (let e of (o.forEach(e => {
                            let t = i.default.getActiveJoinedThreadsForParent(l.guild_id, e);
                            for (let e in t) s.push(e)
                        }), s)) c(e, t, n)
                }(e.id, !0, !0) : e.isForumLikeChannel() ? c(e.id, !0, !0, o.default.fromTimestamp(Date.now())) : c(e.id, !0, !0)
            }

            function _(e, t) {
                l.default.dispatch({
                    type: "BULK_ACK",
                    channels: e,
                    context: s.CURRENT_APP_CONTEXT,
                    onFinished: t
                })
            }

            function E(e) {
                l.default.dispatch({
                    type: "CHANNEL_LOCAL_ACK",
                    channelId: e
                })
            }

            function A(e, t) {
                l.default.dispatch({
                    type: "ENABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: t
                })
            }

            function h(e, t) {
                l.default.dispatch({
                    type: "DISABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: t
                })
            }

            function v(e, t, n) {
                l.default.dispatch({
                    type: "GUILD_FEATURE_ACK",
                    id: e,
                    ackType: t,
                    ackedId: n,
                    local: !1
                })
            }

            function I(e, t) {
                var n;
                let i = null === (n = d.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                null != i && l.default.dispatch({
                    type: "USER_NON_CHANNEL_ACK",
                    ackType: e,
                    ackedId: t,
                    local: !1
                })
            }
        },
        308472: function(e, t, n) {
            "use strict";
            n.r(t);
            var l = n("879018");
            n.es(l, t)
        },
        253980: function(e, t, n) {
            "use strict";
            n.r(t);
            var l = n("341869");
            n.es(l, t)
        },
        31745: function(e, t, n) {
            "use strict";
            n.r(t);
            var l = n("383465");
            n.es(l, t)
        },
        823527: function(e, t, n) {
            "use strict";
            n.r(t);
            var l = n("116788");
            n.es(l, t)
        },
        666031: function(e, t, n) {
            "use strict";
            n.r(t);
            var l = n("392861");
            n.es(l, t)
        },
        504318: function(e, t, n) {
            "use strict";
            n.r(t);
            var l = n("58975");
            n.es(l, t)
        },
        197801: function(e, t, n) {
            "use strict";
            n.r(t);
            var l = n("469062");
            n.es(l, t)
        },
        320954: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("917351"),
                i = n.n(l);

            function r(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
                return i(e).map(e => "null" === e.channel.id ? t[e.channel.id] : [e, t[e.channel.id]]).flattenDeep().filter(n).value()
            }
        },
        610174: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildAlertModeEnabled: function() {
                    return c
                },
                getGuildAlertModeEnabled: function() {
                    return f
                }
            });
            var l = n("316693"),
                i = n("446674"),
                r = n("862205"),
                u = n("305961"),
                a = n("957255"),
                d = n("421127");
            let o = (0, r.createExperiment)({
                    kind: "guild",
                    id: "2023-04_guild_alert_mode",
                    label: "Guild Alert Mode",
                    defaultConfig: {
                        showAlertMode: !1,
                        alsoShowMemberSafety: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show alert mode experience",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !1
                        }
                    }, {
                        id: 2,
                        label: "Show alert mode experience with member safety",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !0
                        }
                    }]
                }),
                s = (0, r.createExperiment)({
                    kind: "guild",
                    id: "2023-08_guild_alert_mode_friend_server",
                    label: "Guild Alert Mode (friend servers only)",
                    defaultConfig: {
                        showAlertMode: !1,
                        alsoShowMemberSafety: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show alert mode experience",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !1
                        }
                    }, {
                        id: 2,
                        label: "Show alert mode experience with member safety",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !1
                        }
                    }]
                });

            function c(e) {
                let t = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(e)),
                    n = (0, i.useStateFromStores)([a.default], () => null != t && l.default.hasAny(a.default.computePermissions(t), d.IncidentAlertModeratorPermissions)),
                    r = o.useExperiment({
                        guildId: e,
                        location: "c3fae3_1"
                    }, {
                        disable: !n,
                        autoTrackExposure: !0
                    }),
                    c = s.useExperiment({
                        guildId: e,
                        location: "c3fae3_2"
                    }, {
                        disable: !n,
                        autoTrackExposure: !0
                    });
                return {
                    showAlertMode: r.showAlertMode || c.showAlertMode,
                    alsoShowMemberSafety: r.alsoShowMemberSafety || c.alsoShowMemberSafety
                }
            }

            function f(e) {
                let t = u.default.getGuild(e),
                    n = null != t && l.default.hasAny(a.default.computePermissions(t), d.IncidentAlertModeratorPermissions),
                    i = o.getCurrentConfig({
                        guildId: e,
                        location: "c3fae3_3"
                    }, {
                        disable: !n,
                        autoTrackExposure: !0
                    }),
                    r = s.getCurrentConfig({
                        guildId: e,
                        location: "c3fae3_4"
                    }, {
                        disable: !n,
                        autoTrackExposure: !0
                    });
                return {
                    showAlertMode: i.showAlertMode || r.showAlertMode,
                    alsoShowMemberSafety: i.alsoShowMemberSafety || r.alsoShowMemberSafety
                }
            }
        },
        421127: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NAGBAR_DISPLAY_MAX_HOURS: function() {
                    return u
                },
                DEFAULT_LOCKDOWN_DURATION: function() {
                    return a
                },
                getTimeframes: function() {
                    return d
                },
                IncidentAlertModeratorPermissions: function() {
                    return o
                }
            });
            var l = n("316693"),
                i = n("843455"),
                r = n("782340");
            let u = 2,
                a = 2,
                d = () => [{
                    value: 1,
                    label: r.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_1_HOUR
                }, {
                    value: 2,
                    label: r.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_2_HOURS
                }, {
                    value: 4,
                    label: r.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_4_HOURS
                }, {
                    value: 6,
                    label: r.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_6_HOURS
                }, {
                    value: 12,
                    label: r.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_12_HOURS
                }, {
                    value: 24,
                    label: r.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_24_HOURS
                }],
                o = l.default.combine(i.Permissions.ADMINISTRATOR, i.Permissions.MANAGE_GUILD, i.Permissions.BAN_MEMBERS, i.Permissions.KICK_MEMBERS, i.Permissions.MODERATE_MEMBERS)
        },
        712125: function(e, t, n) {
            "use strict";
            var l, i, r, u, a, d;
            n.r(t), n.d(t, {
                GuildIncidentActionSources: function() {
                    return l
                },
                GuildIncidentAlertTypes: function() {
                    return i
                },
                GuildIncidentActionTypes: function() {
                    return r
                }
            }), (u = l || (l = {})).MESSAGE = "message", u.NAGBAR = "nagbar", u.GUILD_SETTINGS = "guild_settings", u.CONTEXT_MENU = "context_menu", u.GUILD_PROFILE = "guild_profile", u.MEMBER_SAFETY_PAGE = "member_safety_page", (a = i || (i = {})).JOIN_RAID = "join_raid", a.DM_RAID = "dm_raid", (d = r || (r = {})).INVITES_DISABLED = "invites_disabled", d.DMS_DISABLED = "dms_disabled"
        },
        311161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DATE_CONFIG: function() {
                    return d
                },
                hasDetectedActivity: function() {
                    return o
                },
                hasDetectedRaid: function() {
                    return s
                },
                hasDetectedDMRaid: function() {
                    return c
                },
                getIncidentAlertType: function() {
                    return f
                },
                getEnabledInterventions: function() {
                    return _
                },
                getDisabledInterventions: function() {
                    return E
                },
                isUnderLockdown: function() {
                    return A
                },
                hasDMsDisabled: function() {
                    return h
                },
                hasInvitesDisabled: function() {
                    return v
                },
                getSecurityActionDetailsString: function() {
                    return I
                }
            }), n("424973");
            var l = n("866227"),
                i = n.n(l),
                r = n("712125"),
                u = n("421127"),
                a = n("782340");
            let d = {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
            };

            function o(e) {
                return null != e.dmSpamDetectedAt && i(e.dmSpamDetectedAt).add(u.NAGBAR_DISPLAY_MAX_HOURS, "hours") > i() || null != e.raidDetectedAt && i(e.raidDetectedAt).add(u.NAGBAR_DISPLAY_MAX_HOURS, "hours") > i()
            }

            function s(e) {
                return null != e.raidDetectedAt && i(e.raidDetectedAt).add(u.NAGBAR_DISPLAY_MAX_HOURS, "hours") > i()
            }

            function c(e) {
                return null != e.dmSpamDetectedAt && i(e.dmSpamDetectedAt).add(u.NAGBAR_DISPLAY_MAX_HOURS, "hours") > i()
            }

            function f(e) {
                return null == e ? void 0 : s(e) ? r.GuildIncidentAlertTypes.JOIN_RAID : r.GuildIncidentAlertTypes.DM_RAID
            }

            function _(e, t) {
                let n = [];
                return e && n.push(r.GuildIncidentActionTypes.INVITES_DISABLED), t && n.push(r.GuildIncidentActionTypes.DMS_DISABLED), n
            }

            function E(e, t) {
                let n = [];
                return !e && n.push(r.GuildIncidentActionTypes.INVITES_DISABLED), !t && n.push(r.GuildIncidentActionTypes.DMS_DISABLED), n
            }

            function A(e) {
                return null != e.dmsDisabledUntil && new Date(e.dmsDisabledUntil) > new Date || null != e.invitesDisabledUntil && new Date(e.invitesDisabledUntil) > new Date
            }

            function h(e) {
                return (null == e ? void 0 : e.dmsDisabledUntil) != null && new Date(e.dmsDisabledUntil) > new Date
            }

            function v(e) {
                return (null == e ? void 0 : e.invitesDisabledUntil) != null && new Date(e.invitesDisabledUntil) > new Date
            }

            function I(e, t) {
                var n;
                let l = null !== (n = e.dmsDisabledUntil) && void 0 !== n ? n : e.invitesDisabledUntil;
                if (null == l) return "";
                let i = null != e.dmsDisabledUntil,
                    r = null != e.invitesDisabledUntil;
                switch (!0) {
                    case i && r:
                        return a.default.Messages.GUILD_ANTIRAID_PAUSE_DMS_AND_JOINS_NAGBAR_MESSAGE_NEW.format({
                            guildName: t,
                            time: new Date(l).toLocaleString(a.default.getLocale(), d)
                        });
                    case i:
                        return a.default.Messages.GUILD_ANTIRAID_PAUSE_DMS_NAGBAR_MESSAGE_NEW.format({
                            guildName: t,
                            time: new Date(l).toLocaleString(a.default.getLocale(), d)
                        });
                    case r:
                        return a.default.Messages.GUILD_ANTIRAID_PAUSE_JOINS_NAGBAR_MESSAGE_NEW.format({
                            guildName: t,
                            time: new Date(l).toLocaleString(a.default.getLocale(), d)
                        });
                    default:
                        return ""
                }
            }
        },
        54346: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("222007");
            var l = n("446674"),
                i = n("913144"),
                r = n("374363"),
                u = n("305961"),
                a = n("957255"),
                d = n("607620"),
                o = n("299039"),
                s = n("610174"),
                c = n("311161");
            let f = {},
                _ = {};

            function E() {
                var e;
                let t = null !== (e = r.default.getGuildsProto()) && void 0 !== e ? e : {},
                    n = u.default.getGuilds(),
                    l = o.default.keys(n);
                for (let e of (_ = {}, l))(0, s.getGuildAlertModeEnabled)(e).showAlertMode && (_[e] = {
                    guildId: e,
                    guildName: n[e].name,
                    ...t[e]
                })
            }

            function A(e) {
                return null != e && Object.keys(e).length > 0 ? {
                    raidDetectedAt: e.raid_detected_at,
                    dmSpamDetectedAt: e.dm_spam_detected_at,
                    dmsDisabledUntil: e.dms_disabled_until,
                    invitesDisabledUntil: e.invites_disabled_until
                } : null
            }
            class h extends l.default.Store {
                initialize() {
                    this.waitFor(r.default, u.default, a.default, d.default), this.syncWith([r.default, u.default, a.default, d.default], E)
                }
                getGuildIncident(e) {
                    return f[e]
                }
                getIncidentsByGuild() {
                    return f
                }
                getGuildAlertSettings() {
                    return _
                }
            }
            h.displayName = "GuildIncidentsStore";
            var v = new h(i.default, {
                CONNECTION_OPEN: function(e) {
                    for (let n of (f = {}, e.guilds)) {
                        var t;
                        let e = A(null === (t = n.properties) || void 0 === t ? void 0 : t.incidents_data);
                        null != e && ((0, c.hasDetectedActivity)(e) || (0, c.isUnderLockdown)(e)) && (f[n.id] = e)
                    }
                },
                GUILD_CREATE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, l = A(null === (t = n.properties) || void 0 === t ? void 0 : t.incidents_data);
                    null != l && ((0, c.hasDetectedActivity)(l) || (0, c.isUnderLockdown)(l)) && (f[n.id] = l)
                },
                GUILD_UPDATE: function(e) {
                    let {
                        guild: t
                    } = e, n = A(t.incidents_data);
                    null != n && ((0, c.hasDetectedActivity)(n) || (0, c.isUnderLockdown)(n)) ? f[t.id] = n : delete f[t.id]
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete f[t.id]
                },
                LOGOUT: function(e) {
                    f = {}
                }
            })
        },
        529805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                createPendingReply: function() {
                    return i
                },
                setPendingReplyShouldMention: function() {
                    return r
                },
                deletePendingReply: function() {
                    return u
                }
            });
            var l = n("913144");

            function i(e) {
                let {
                    message: t,
                    channel: n,
                    shouldMention: i,
                    showMentionToggle: r,
                    source: u
                } = e;
                l.default.dispatch({
                    type: "CREATE_PENDING_REPLY",
                    message: t,
                    channel: n,
                    shouldMention: i,
                    showMentionToggle: r,
                    source: u
                })
            }

            function r(e, t) {
                l.default.dispatch({
                    type: "SET_PENDING_REPLY_SHOULD_MENTION",
                    channelId: e,
                    shouldMention: t
                })
            }

            function u(e) {
                l.default.dispatch({
                    type: "DELETE_PENDING_REPLY",
                    channelId: e
                })
            }
        },
        245997: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("424973"), n("222007"), n("808653");
            var l = n("446674"),
                i = n("913144"),
                r = n("320954"),
                u = n("379881"),
                a = n("271938"),
                d = n("42203"),
                o = n("923959"),
                s = n("305961"),
                c = n("49111");
            let f = null,
                _ = {},
                E = null;

            function A() {
                return {
                    _categories: [],
                    null: []
                }
            }
            let h = A();

            function v(e, t) {
                e.index = t
            }

            function I(e) {
                let t = o.default.getChannels(e),
                    n = A(),
                    l = e => {
                        var t;
                        let {
                            channel: l
                        } = e, i = null !== (t = n[null != l.parent_id ? l.parent_id : "null"]) && void 0 !== t ? t : n.null;
                        i.push({
                            channel: l,
                            index: -1
                        })
                    };
                return t[c.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                    let {
                        channel: t
                    } = e;
                    n._categories.push({
                        channel: t,
                        index: -1
                    }), n[t.id] = []
                }), t[0, o.GUILD_SELECTABLE_CHANNELS_KEY].forEach(l), t[0, o.GUILD_VOCAL_CHANNELS_KEY].forEach(l), (0, r.default)(n._categories, n).forEach(v), _[e] = n, n
            }

            function L() {
                _ = {}, null != f && I(f)
            }

            function D(e) {
                let {
                    guild: {
                        id: t
                    }
                } = e;
                _[t] = void 0, f === t && I(t)
            }

            function g(e) {
                let {
                    channel: {
                        guild_id: t
                    }
                } = e;
                if (null == t) return !1;
                _[t] = void 0, f === t && I(t)
            }

            function C(e) {
                let {
                    guildId: t
                } = e;
                _[t] = void 0, t === f && I(t)
            }

            function N(e, t) {
                if (E = t, null == e || null == e.getGuildId()) return !1;
                let n = e.getGuildId();
                return null != n && (_[n] = void 0, n === f && I(n), !0)
            }

            function S() {
                I(c.FAVORITES)
            }
            class m extends l.default.Store {
                initialize() {
                    this.waitFor(o.default, s.default, a.default, d.default, u.default), this.syncWith([u.default], S)
                }
                getCategories(e) {
                    return null != e ? function(e) {
                        let t = _[e];
                        return null != t ? t : I(e)
                    }(e) : h
                }
            }
            m.displayName = "GuildCategoryStore";
            var p = new m(i.default, {
                CHANNEL_SELECT: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (f = null != t ? t : null, null == t || null != _[t]) return !1;
                    I(t)
                },
                CONNECTION_OPEN: L,
                OVERLAY_INITIALIZE: L,
                CACHE_LOADED_LAZY: L,
                GUILD_CREATE: D,
                GUILD_UPDATE: D,
                GUILD_DELETE: function(e) {
                    let {
                        guild: {
                            id: t
                        }
                    } = e;
                    delete _[t]
                },
                CHANNEL_CREATE: g,
                CHANNEL_DELETE: g,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e, n = !1;
                    for (let {
                            guild_id: e
                        }
                        of t) null != e && (_[e] = void 0, n = !0, f === e && I(e));
                    return n
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: t,
                        user: n
                    } = e;
                    if (a.default.getId() !== n.id) return !1;
                    _[t] = void 0, t === f && I(t)
                },
                CURRENT_USER_UPDATE: function() {
                    if (null == f) return !1;
                    I(f)
                },
                GUILD_ROLE_CREATE: C,
                GUILD_ROLE_UPDATE: C,
                GUILD_ROLE_DELETE: C,
                IMPERSONATE_UPDATE: C,
                IMPERSONATE_STOP: C,
                VOICE_CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return null == t && null != E ? N(d.default.getChannel(E), null) : N(d.default.getChannel(t), t)
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return t.reduce((e, t) => {
                        let {
                            channelId: n,
                            sessionId: l
                        } = t;
                        return a.default.getSessionId() !== l ? e : N(d.default.getChannel(n), n) || e
                    }, !1)
                }
            })
        },
        607620: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("446674"),
                i = n("913144"),
                r = n("789563");

            function u() {
                return !0
            }
            class a extends l.default.Store {
                initialize() {
                    this.waitFor(r.default)
                }
                getExperimentAssignment(e, t) {
                    return r.default.getGuildExperimentDescriptor(t, e)
                }
            }
            a.displayName = "GuildExperimentStore";
            var d = new a(i.default, {
                LOGOUT: u,
                LOGIN_SUCCESS: u,
                CONNECTION_OPEN: u,
                EXPERIMENTS_FETCH_SUCCESS: u,
                OVERLAY_INITIALIZE: u,
                CACHE_LOADED: u,
                EXPERIMENTS_FETCH_FAILURE: u,
                EXPERIMENT_REGISTER_LEGACY: u,
                EXPERIMENT_OVERRIDE_BUCKET: u
            })
        },
        171710: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("253980"),
                u = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, u.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: r,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12.291 5.70697L15.998 9.41397L21.705 3.70697L20.291 2.29297L15.998 6.58597L13.705 4.29297L12.291 5.70697ZM1.99805 7H11.088C11.564 9.837 14.025 12 16.998 12V18C16.998 19.103 16.102 20 14.998 20H8.33205L2.99805 24V20H1.99805C0.894047 20 -0.00195312 19.103 -0.00195312 18V9C-0.00195312 7.897 0.894047 7 1.99805 7Z"
                        })
                    })
                }, r.ChatCheckIcon, void 0, {
                    size: 24
                })
        },
        474571: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("197801"),
                u = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return 16 === t || 16 === n ? (0, l.jsx)("svg", {
                        ...(0, u.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, l.jsx)("path", {
                            fill: i,
                            className: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                        })
                    }) : (0, l.jsx)("svg", {
                        ...(0, u.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: i,
                            className: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        })
                    })
                }, r.SettingsIcon, void 0, {
                    size: 24
                })
        },
        987772: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("504318"),
                u = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, u.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            className: r,
                            fill: i
                        })
                    })
                }, r.PencilIcon, void 0, {
                    size: 16
                })
        },
        351825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("31745"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        className: r,
                        foreground: u
                    } = e;
                    return (0, l.jsx)("svg", {
                        className: r,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: u,
                            fill: i,
                            d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                        })
                    })
                }, r.CirclePlusIcon, void 0, {
                    size: 16
                })
        },
        879018: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnalyticsIcon: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("82169");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...d
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M2 19V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm16-9.59V13a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1h-6a1 1 0 1 0 0 2h3.59l-5.09 5.09-1.8-1.8a1 1 0 0 0-1.4 0l-4 4a1 1 0 1 0 1.4 1.42L9 13.4l1.8 1.8a1 1 0 0 0 1.4 0L18 9.4Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        341869: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatCheckIcon: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("82169");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...d
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M12.66 21.98c.4-.03.56-.51.28-.8l-.06-.06a3 3 0 1 1 4.24-4.24l.53.52c.2.2.5.2.7 0l2.53-2.52a3 3 0 0 1 .64-.5c.14-.07.24-.2.27-.34a10 10 0 1 0-18.24 3.32c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12c.22 0 .44 0 .66-.02Z",
                        className: a
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M23.7 17.7a1 1 0 0 0-1.4-1.4L18 20.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l5-5Z",
                        className: a
                    })]
                })
            }
        },
        383465: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CirclePlusIcon: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("82169");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: u = "transparent",
                    secondaryColorClass: a = "",
                    color: d = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof u ? u : u.css,
                        className: a
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: o
                    })]
                })
            }
        },
        116788: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GameControllerIcon: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("82169");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...d
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M20.97 4.06c0 .18.08.35.24.43.55.28.9.82 1.04 1.42.3 1.24.75 3.7.75 7.09v4.91a3.09 3.09 0 0 1-5.85 1.38l-1.76-3.51a1.09 1.09 0 0 0-1.23-.55c-.57.13-1.36.27-2.16.27s-1.6-.14-2.16-.27c-.49-.11-1 .1-1.23.55l-1.76 3.51A3.09 3.09 0 0 1 1 17.91V13c0-3.38.46-5.85.75-7.1.15-.6.49-1.13 1.04-1.4a.47.47 0 0 0 .24-.44c0-.7.48-1.32 1.2-1.47l2.93-.62c.5-.1 1 .06 1.36.4.35.34.78.71 1.28.68a42.4 42.4 0 0 1 4.4 0c.5.03.93-.34 1.28-.69.35-.33.86-.5 1.36-.39l2.94.62c.7.15 1.19.78 1.19 1.47ZM20 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 7a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2H7v1a1 1 0 1 1-2 0v-1H4a1 1 0 1 1 0-2h1V7Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        392861: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GifIcon: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("82169");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...d
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87a2.9 2.9 0 0 1-1.66-.49 3.18 3.18 0 0 1-1.12-1.35A4.88 4.88 0 0 1 4 12c0-.75.14-1.42.42-2 .29-.59.7-1.04 1.24-1.37a3.7 3.7 0 0 1 1.95-.5c.64 0 1.21.14 1.72.4.5.28.89.67 1.15 1.16l-1.22.88a1.76 1.76 0 0 0-1.64-1.02c-.66 0-1.17.22-1.52.65a2.74 2.74 0 0 0-.53 1.8c0 .78.18 1.39.53 1.81.35.42.86.64 1.52.64.3 0 .57-.06.81-.16.25-.12.45-.27.58-.47v-.93H7.3v-1.4h3.24v4.23H9.27l-.2-.71c-.43.57-1.06.86-1.89.86Zm6.34-.15h-1.57V8.28h1.57v7.44Zm1.51 0h1.57v-2.83h2.76v-1.42H16.6V9.7H20V8.28h-4.97v7.44Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        58975: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PencilIcon: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("82169");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...d
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "m13.96 5.46 4.58 4.58a1 1 0 0 0 1.42 0l1.38-1.38a2 2 0 0 0 0-2.82l-3.18-3.18a2 2 0 0 0-2.82 0l-1.38 1.38a1 1 0 0 0 0 1.42ZM2.11 20.16l.73-4.22a3 3 0 0 1 .83-1.61l7.87-7.87a1 1 0 0 1 1.42 0l4.58 4.58a1 1 0 0 1 0 1.42l-7.87 7.87a3 3 0 0 1-1.6.83l-4.23.73a1.5 1.5 0 0 1-1.73-1.73Z",
                        className: a
                    })
                })
            }
        },
        469062: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SettingsIcon: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("82169");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...d
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M10.56 1.1c-.46.05-.7.53-.64.98.18 1.16-.19 2.2-.98 2.53-.8.33-1.79-.15-2.49-1.1-.27-.36-.78-.52-1.14-.24-.77.59-1.45 1.27-2.04 2.04-.28.36-.12.87.24 1.14.96.7 1.43 1.7 1.1 2.49-.33.8-1.37 1.16-2.53.98-.45-.07-.93.18-.99.64a11.1 11.1 0 0 0 0 2.88c.06.46.54.7.99.64 1.16-.18 2.2.19 2.53.98.33.8-.14 1.79-1.1 2.49-.36.27-.52.78-.24 1.14.59.77 1.27 1.45 2.04 2.04.36.28.87.12 1.14-.24.7-.95 1.7-1.43 2.49-1.1.8.33 1.16 1.37.98 2.53-.07.45.18.93.64.99a11.1 11.1 0 0 0 2.88 0c.46-.06.7-.54.64-.99-.18-1.16.19-2.2.98-2.53.8-.33 1.79.14 2.49 1.1.27.36.78.52 1.14.24.77-.59 1.45-1.27 2.04-2.04.28-.36.12-.87-.24-1.14-.96-.7-1.43-1.7-1.1-2.49.33-.8 1.37-1.16 2.53-.98.45.07.93-.18.99-.64a11.1 11.1 0 0 0 0-2.88c-.06-.46-.54-.7-.99-.64-1.16.18-2.2-.19-2.53-.98-.33-.8.14-1.79 1.1-2.49.36-.27.52-.78.24-1.14a11.07 11.07 0 0 0-2.04-2.04c-.36-.28-.87-.12-1.14.24-.7.96-1.7 1.43-2.49 1.1-.8-.33-1.16-1.37-.98-2.53.07-.45-.18-.93-.64-.99a11.1 11.1 0 0 0-2.88 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=12108.2ffc303b04df908b5b3b.js.map