(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["56895"], {
        666020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                subscribeMembers: function() {
                    return u
                },
                unsubscribeMembers: function() {
                    return s
                },
                subscribeToMemberUpdates: function() {
                    return l
                },
                unsubscribeFromMemberUpdates: function() {
                    return a
                },
                subscribeChannel: function() {
                    return o
                },
                subscribeChannelDimensions: function() {
                    return d
                }
            }), n("424973");
            var i = n("913144"),
                r = n("696605");

            function u(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function s(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function l(e) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES",
                    guildId: e
                })
            }

            function a(e) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES",
                    guildId: e
                })
            }

            function o(e, t, n) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: e,
                    channelId: t,
                    ranges: n
                })
            }

            function d(e) {
                let {
                    guildId: t,
                    channelId: n,
                    y: i,
                    height: u,
                    rowHeight: s
                } = e;

                function l(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / s)) + t)
                }
                let a = [];

                function d(e) {
                    let t = e + (r.MINIMUM_RANGE - 1);
                    return a.push([e, t]), t + 1
                }
                let E = l(.5 * u),
                    c = l(i, -E),
                    _ = l(i + u, E);
                for (c > 0 && (c = Math.max(d(0), c)), c = Math.floor(c / r.MINIMUM_RANGE) * r.MINIMUM_RANGE; c <= _;) c = d(c);
                o(t, n, a)
            }
        },
        31745: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("383465");
            n.es(i, t)
        },
        666031: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("392861");
            n.es(i, t)
        },
        424823: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("632874");
            n.es(i, t)
        },
        750560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return l
                }
            }), n("37983");
            var i = n("884691"),
                r = n("917351"),
                u = n.n(r);
            n("233736");
            var s = n("666020");

            function l(e) {
                i.useEffect(() => (u.forEach(e, (e, t) => (0, s.subscribeMembers)(t, e)), () => {
                    u.forEach(e, (e, t) => (0, s.unsubscribeMembers)(t, e))
                }), [e])
            }
        },
        610174: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildAlertModeEnabled: function() {
                    return E
                },
                getGuildAlertModeEnabled: function() {
                    return c
                }
            });
            var i = n("316693"),
                r = n("446674"),
                u = n("862205"),
                s = n("305961"),
                l = n("957255"),
                a = n("421127");
            let o = (0, u.createExperiment)({
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
                d = (0, u.createExperiment)({
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

            function E(e) {
                let t = (0, r.useStateFromStores)([s.default], () => s.default.getGuild(e)),
                    n = (0, r.useStateFromStores)([l.default], () => null != t && i.default.hasAny(l.default.computePermissions(t), a.IncidentAlertModeratorPermissions)),
                    u = o.useExperiment({
                        guildId: e,
                        location: "c3fae3_1"
                    }, {
                        disable: !n,
                        autoTrackExposure: !0
                    }),
                    E = d.useExperiment({
                        guildId: e,
                        location: "c3fae3_2"
                    }, {
                        disable: !n,
                        autoTrackExposure: !0
                    });
                return {
                    showAlertMode: u.showAlertMode || E.showAlertMode,
                    alsoShowMemberSafety: u.alsoShowMemberSafety || E.alsoShowMemberSafety
                }
            }

            function c(e) {
                let t = s.default.getGuild(e),
                    n = null != t && i.default.hasAny(l.default.computePermissions(t), a.IncidentAlertModeratorPermissions),
                    r = o.getCurrentConfig({
                        guildId: e,
                        location: "c3fae3_3"
                    }, {
                        disable: !n,
                        autoTrackExposure: !0
                    }),
                    u = d.getCurrentConfig({
                        guildId: e,
                        location: "c3fae3_4"
                    }, {
                        disable: !n,
                        autoTrackExposure: !0
                    });
                return {
                    showAlertMode: r.showAlertMode || u.showAlertMode,
                    alsoShowMemberSafety: r.alsoShowMemberSafety || u.alsoShowMemberSafety
                }
            }
        },
        421127: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NAGBAR_DISPLAY_MAX_HOURS: function() {
                    return s
                },
                DEFAULT_LOCKDOWN_DURATION: function() {
                    return l
                },
                getTimeframes: function() {
                    return a
                },
                IncidentAlertModeratorPermissions: function() {
                    return o
                }
            });
            var i = n("316693"),
                r = n("843455"),
                u = n("782340");
            let s = 2,
                l = 2,
                a = () => [{
                    value: 1,
                    label: u.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_1_HOUR
                }, {
                    value: 2,
                    label: u.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_2_HOURS
                }, {
                    value: 4,
                    label: u.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_4_HOURS
                }, {
                    value: 6,
                    label: u.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_6_HOURS
                }, {
                    value: 12,
                    label: u.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_12_HOURS
                }, {
                    value: 24,
                    label: u.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_24_HOURS
                }],
                o = i.default.combine(r.Permissions.ADMINISTRATOR, r.Permissions.MANAGE_GUILD, r.Permissions.BAN_MEMBERS, r.Permissions.KICK_MEMBERS, r.Permissions.MODERATE_MEMBERS)
        },
        712125: function(e, t, n) {
            "use strict";
            var i, r, u, s, l, a;
            n.r(t), n.d(t, {
                GuildIncidentActionSources: function() {
                    return i
                },
                GuildIncidentAlertTypes: function() {
                    return r
                },
                GuildIncidentActionTypes: function() {
                    return u
                }
            }), (s = i || (i = {})).MESSAGE = "message", s.NAGBAR = "nagbar", s.GUILD_SETTINGS = "guild_settings", s.CONTEXT_MENU = "context_menu", s.GUILD_PROFILE = "guild_profile", s.MEMBER_SAFETY_PAGE = "member_safety_page", (l = r || (r = {})).JOIN_RAID = "join_raid", l.DM_RAID = "dm_raid", (a = u || (u = {})).INVITES_DISABLED = "invites_disabled", a.DMS_DISABLED = "dms_disabled"
        },
        311161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DATE_CONFIG: function() {
                    return a
                },
                hasDetectedActivity: function() {
                    return o
                },
                hasDetectedRaid: function() {
                    return d
                },
                hasDetectedDMRaid: function() {
                    return E
                },
                getIncidentAlertType: function() {
                    return c
                },
                getEnabledInterventions: function() {
                    return _
                },
                getDisabledInterventions: function() {
                    return I
                },
                isUnderLockdown: function() {
                    return S
                },
                hasDMsDisabled: function() {
                    return f
                },
                hasInvitesDisabled: function() {
                    return T
                },
                getSecurityActionDetailsString: function() {
                    return N
                }
            }), n("424973");
            var i = n("866227"),
                r = n.n(i),
                u = n("712125"),
                s = n("421127"),
                l = n("782340");
            let a = {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
            };

            function o(e) {
                return null != e.dmSpamDetectedAt && r(e.dmSpamDetectedAt).add(s.NAGBAR_DISPLAY_MAX_HOURS, "hours") > r() || null != e.raidDetectedAt && r(e.raidDetectedAt).add(s.NAGBAR_DISPLAY_MAX_HOURS, "hours") > r()
            }

            function d(e) {
                return null != e.raidDetectedAt && r(e.raidDetectedAt).add(s.NAGBAR_DISPLAY_MAX_HOURS, "hours") > r()
            }

            function E(e) {
                return null != e.dmSpamDetectedAt && r(e.dmSpamDetectedAt).add(s.NAGBAR_DISPLAY_MAX_HOURS, "hours") > r()
            }

            function c(e) {
                return null == e ? void 0 : d(e) ? u.GuildIncidentAlertTypes.JOIN_RAID : u.GuildIncidentAlertTypes.DM_RAID
            }

            function _(e, t) {
                let n = [];
                return e && n.push(u.GuildIncidentActionTypes.INVITES_DISABLED), t && n.push(u.GuildIncidentActionTypes.DMS_DISABLED), n
            }

            function I(e, t) {
                let n = [];
                return !e && n.push(u.GuildIncidentActionTypes.INVITES_DISABLED), !t && n.push(u.GuildIncidentActionTypes.DMS_DISABLED), n
            }

            function S(e) {
                return null != e.dmsDisabledUntil && new Date(e.dmsDisabledUntil) > new Date || null != e.invitesDisabledUntil && new Date(e.invitesDisabledUntil) > new Date
            }

            function f(e) {
                return (null == e ? void 0 : e.dmsDisabledUntil) != null && new Date(e.dmsDisabledUntil) > new Date
            }

            function T(e) {
                return (null == e ? void 0 : e.invitesDisabledUntil) != null && new Date(e.invitesDisabledUntil) > new Date
            }

            function N(e, t) {
                var n;
                let i = null !== (n = e.dmsDisabledUntil) && void 0 !== n ? n : e.invitesDisabledUntil;
                if (null == i) return "";
                let r = null != e.dmsDisabledUntil,
                    u = null != e.invitesDisabledUntil;
                switch (!0) {
                    case r && u:
                        return l.default.Messages.GUILD_ANTIRAID_PAUSE_DMS_AND_JOINS_NAGBAR_MESSAGE_NEW.format({
                            guildName: t,
                            time: new Date(i).toLocaleString(l.default.getLocale(), a)
                        });
                    case r:
                        return l.default.Messages.GUILD_ANTIRAID_PAUSE_DMS_NAGBAR_MESSAGE_NEW.format({
                            guildName: t,
                            time: new Date(i).toLocaleString(l.default.getLocale(), a)
                        });
                    case u:
                        return l.default.Messages.GUILD_ANTIRAID_PAUSE_JOINS_NAGBAR_MESSAGE_NEW.format({
                            guildName: t,
                            time: new Date(i).toLocaleString(l.default.getLocale(), a)
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
                    return f
                }
            }), n("222007");
            var i = n("446674"),
                r = n("913144"),
                u = n("374363"),
                s = n("305961"),
                l = n("957255"),
                a = n("607620"),
                o = n("610174"),
                d = n("311161");
            let E = {},
                c = {};

            function _() {
                var e;
                let t = null !== (e = u.default.getGuildsProto()) && void 0 !== e ? e : {},
                    n = s.default.getGuilds(),
                    i = Object.keys(n);
                for (let e of (c = {}, i))(0, o.getGuildAlertModeEnabled)(e).showAlertMode && (c[e] = {
                    guildId: e,
                    guildName: n[e].name,
                    ...t[e]
                })
            }

            function I(e) {
                return null != e && Object.keys(e).length > 0 ? {
                    raidDetectedAt: e.raid_detected_at,
                    dmSpamDetectedAt: e.dm_spam_detected_at,
                    dmsDisabledUntil: e.dms_disabled_until,
                    invitesDisabledUntil: e.invites_disabled_until
                } : null
            }
            class S extends i.default.Store {
                initialize() {
                    this.waitFor(u.default, s.default, l.default, a.default), this.syncWith([u.default, s.default, l.default, a.default], _)
                }
                getGuildIncident(e) {
                    return E[e]
                }
                getIncidentsByGuild() {
                    return E
                }
                getGuildAlertSettings() {
                    return c
                }
            }
            S.displayName = "GuildIncidentsStore";
            var f = new S(r.default, {
                CONNECTION_OPEN: function(e) {
                    for (let t of (E = {}, e.guilds)) {
                        let e = I(t.properties.incidents_data);
                        null != e && ((0, d.hasDetectedActivity)(e) || (0, d.isUnderLockdown)(e)) && (E[t.id] = e)
                    }
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e, n = I(t.properties.incidents_data);
                    null != n && ((0, d.hasDetectedActivity)(n) || (0, d.isUnderLockdown)(n)) && (E[t.id] = n)
                },
                GUILD_UPDATE: function(e) {
                    let {
                        guild: t
                    } = e, n = I(t.incidents_data);
                    null != n && ((0, d.hasDetectedActivity)(n) || (0, d.isUnderLockdown)(n)) ? E[t.id] = n : delete E[t.id]
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete E[t.id]
                },
                LOGOUT: function(e) {
                    E = {}
                }
            })
        },
        929423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveGuildIdentityChanges: function() {
                    return l
                },
                setCurrentGuild: function() {
                    return a
                },
                initGuildIdentitySettings: function() {
                    return o
                },
                closeGuildIdentitySettings: function() {
                    return d
                },
                resetAndCloseGuildIdentityForm: function() {
                    return E
                },
                setPendingAvatar: function() {
                    return c
                },
                setPendingBanner: function() {
                    return _
                },
                setPendingBio: function() {
                    return I
                },
                setPendingPronouns: function() {
                    return S
                },
                setPendingNickname: function() {
                    return f
                },
                setPendingThemeColors: function() {
                    return T
                },
                resetPendingMemberChanges: function() {
                    return N
                },
                resetPendingProfileChanges: function() {
                    return D
                },
                resetAllPending: function() {
                    return A
                },
                clearErrors: function() {
                    return G
                },
                setDisableSubmit: function() {
                    return m
                }
            }), n("70102");
            var i = n("872717"),
                r = n("913144"),
                u = n("54239"),
                s = n("49111");
            async function l(e, t) {
                let {
                    nick: n,
                    avatar: u
                } = t;
                if (null == e) throw Error("Need guildId");
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await i.default.patch({
                        url: s.Endpoints.SET_GUILD_MEMBER(e),
                        body: {
                            nick: n,
                            avatar: u
                        },
                        oldFormErrors: !0
                    });
                    return r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), r.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: t.body,
                        guildId: e
                    }), t
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: t.body
                    })
                }
            }

            function a(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function o(e, t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function d() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, u.popLayer)()
            }

            function E() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function c(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function _(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function I(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function S(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function f(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function T(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function N() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function D() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function A() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function G() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function m(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let i, r, u, s, l, a, o, d, E;
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var c = n("446674"),
                _ = n("913144"),
                I = n("49111");
            let S = I.FormStates.CLOSED,
                f = {},
                T = !1;

            function N() {
                S = I.FormStates.CLOSED, f = {}, o = null, d = void 0, E = []
            }

            function D() {
                A(), G(), f = {}, S = I.FormStates.OPEN
            }

            function A() {
                i = void 0, l = void 0
            }

            function G() {
                r = void 0, u = void 0, s = void 0, a = void 0
            }
            class m extends c.default.Store {
                getFormState() {
                    return S
                }
                getErrors() {
                    return f
                }
                showNotice() {
                    return void 0 !== i || void 0 !== r || void 0 !== u || void 0 !== s || void 0 !== l || void 0 !== a
                }
                getPendingAvatar() {
                    return i
                }
                getPendingBanner() {
                    return r
                }
                getPendingBio() {
                    return u
                }
                getPendingNickname() {
                    return l
                }
                getPendingPronouns() {
                    return s
                }
                getPendingAccentColor() {
                    return l
                }
                getPendingThemeColors() {
                    return a
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: r,
                        pendingBio: u,
                        pendingPronouns: s,
                        pendingNickname: l,
                        pendingThemeColors: a
                    }
                }
                getGuild() {
                    return o
                }
                getSource() {
                    return d
                }
                getAnalyticsLocations() {
                    return E
                }
                getIsDisableSubmit() {
                    return T
                }
            }
            m.displayName = "GuildIdentitySettingsStore";
            var M = new m(_.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    o = e.guild, S = I.FormStates.OPEN, f = {}, d = e.source, E = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: N,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    D(), N()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    o = e.guild, f = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    S = I.FormStates.SUBMITTING, f = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (S !== I.FormStates.SUBMITTING) return !1;
                    S = I.FormStates.OPEN, f = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    S = I.FormStates.OPEN, f = e.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    i = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    r = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
                    let {
                        bio: t
                    } = e;
                    u = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    s = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
                    let {
                        nickname: t
                    } = e;
                    l = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    a = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: A,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: G,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: D,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: D,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    f = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    T = t
                }
            })
        },
        270161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CREATE_GUILD_EVENT_CORE_PERMISSIONS: function() {
                    return s
                },
                CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function() {
                    return l
                },
                CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function() {
                    return a
                }
            });
            var i = n("316693"),
                r = n("923510"),
                u = n("49111");
            let s = u.Permissions.VIEW_CHANNEL,
                l = i.default.combine(s, u.Permissions.CONNECT),
                a = i.default.combine(s, r.MODERATE_STAGE_CHANNEL_PERMISSIONS)
        },
        817963: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useManageResourcePermissions: function() {
                    return I
                },
                getManageResourcePermissions: function() {
                    return S
                }
            }), n("222007");
            var i = n("884691"),
                r = n("316693"),
                u = n("446674"),
                s = n("813006");
            n("923959");
            var l = n("957255"),
                a = n("697218");
            n("991170");
            var o = n("270161"),
                d = n("843455");
            let E = {
                    canCreateExpressions: !1,
                    canCreateGuildEvent: !1,
                    canManageAllExpressions: !1,
                    canManageAllEvents: !1,
                    canManageGuildExpression: () => !1,
                    canManageGuildEvent: () => !1
                },
                c = (e, t, n, i) => {
                    if (null == e) return !1;
                    if (n) return !0;
                    if ("creator_id" in e) return i && null != t && e.creator_id === t.id;
                    if ("userId" in e) return i && null != t && e.userId === t.id;
                    if ("user" in e) {
                        var r;
                        return i && null != t && (null === (r = e.user) || void 0 === r ? void 0 : r.id) === t.id
                    }
                    return !1
                },
                _ = e => {
                    if (null == e) return [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS];
                    let t = o.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
                    return e.isGuildStageVoice() ? t = o.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (t = o.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [r.default.combine(t, d.Permissions.CREATE_EVENTS), r.default.combine(t, d.Permissions.MANAGE_EVENTS)]
                },
                I = e => {
                    let [t, n] = e instanceof s.default ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS] : _(e), [r, o, I, S] = (0, u.useStateFromStoresArray)([l.default], () => [l.default.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e), l.default.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e), l.default.can(t, e), l.default.can(n, e)]), f = (0, u.useStateFromStores)([a.default], () => a.default.getCurrentUser()), T = i.useCallback(e => c(e, f, o, r), [r, o, f]), N = i.useCallback(e => c(e, f, S, I), [S, I, f]);
                    return null == e ? E : {
                        canCreateExpressions: r,
                        canCreateGuildEvent: I,
                        canManageAllExpressions: o,
                        canManageAllEvents: S,
                        canManageGuildExpression: T,
                        canManageGuildEvent: N
                    }
                },
                S = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.default,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.default,
                        [i, r] = e instanceof s.default ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS] : _(e),
                        u = t.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                        o = t.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                        I = t.can(i, e),
                        S = t.can(r, e),
                        f = n.getCurrentUser();
                    return null == e ? E : {
                        canCreateExpressions: u,
                        canCreateGuildEvent: I,
                        canManageAllExpressions: o,
                        canManageAllEvents: S,
                        canManageGuildExpression: e => c(e, f, o, u),
                        canManageGuildEvent: e => c(e, f, S, I)
                    }
                }
        },
        38766: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("884691"),
                r = n("79112"),
                u = n("685665"),
                s = n("929423");
            n("424562");
            var l = n("49111"),
                a = n("397336");

            function o(e) {
                let {
                    guild: t,
                    scrollPosition: n,
                    analyticsLocation: o,
                    analyticsLocations: d,
                    openWithoutBackstack: E = !1
                } = e, {
                    analyticsLocations: c
                } = (0, u.default)(), _ = (0, i.useCallback)(() => {
                    null != t && (0, s.initGuildIdentitySettings)(t, null != d ? d : c), r.default.open(l.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? a.ProfileCustomizationSubsection.GUILD : a.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: o,
                        analyticsLocations: d,
                        openWithoutBackstack: E
                    })
                }, [t, n, o, d, E, c]);
                return _
            }
        },
        607620: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("446674"),
                r = n("913144"),
                u = n("789563");

            function s() {
                return !0
            }
            class l extends i.default.Store {
                initialize() {
                    this.waitFor(u.default)
                }
                getExperimentAssignment(e, t) {
                    return u.default.getGuildExperimentDescriptor(t, e)
                }
            }
            l.displayName = "GuildExperimentStore";
            var a = new l(r.default, {
                LOGOUT: s,
                LOGIN_SUCCESS: s,
                CONNECTION_OPEN: s,
                EXPERIMENTS_FETCH_SUCCESS: s,
                OVERLAY_INITIALIZE: s,
                CACHE_LOADED: s,
                EXPERIMENTS_FETCH_FAILURE: s,
                EXPERIMENT_REGISTER_LEGACY: s,
                EXPERIMENT_OVERRIDE_BUCKET: s
            })
        },
        151185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                u = n("424823"),
                s = n("75196"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: u,
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: u,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, u.PlusSmallIcon, void 0, {
                    size: 24
                })
        },
        351825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                u = n("31745"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        className: u,
                        foreground: s
                    } = e;
                    return (0, i.jsx)("svg", {
                        className: u,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: s,
                            fill: r,
                            d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                        })
                    })
                }, u.CirclePlusIcon, void 0, {
                    size: 16
                })
        },
        383465: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CirclePlusIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                u = n("82169");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: s = "transparent",
                    secondaryColorClass: l = "",
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...d
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, u.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof s ? s : s.css,
                        className: l
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: o
                    })]
                })
            }
        },
        392861: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GifIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                u = n("82169");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, u.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87a2.9 2.9 0 0 1-1.66-.49 3.18 3.18 0 0 1-1.12-1.35A4.88 4.88 0 0 1 4 12c0-.75.14-1.42.42-2 .29-.59.7-1.04 1.24-1.37a3.7 3.7 0 0 1 1.95-.5c.64 0 1.21.14 1.72.4.5.28.89.67 1.15 1.16l-1.22.88a1.76 1.76 0 0 0-1.64-1.02c-.66 0-1.17.22-1.52.65a2.74 2.74 0 0 0-.53 1.8c0 .78.18 1.39.53 1.81.35.42.86.64 1.52.64.3 0 .57-.06.81-.16.25-.12.45-.27.58-.47v-.93H7.3v-1.4h3.24v4.23H9.27l-.2-.71c-.43.57-1.06.86-1.89.86Zm6.34-.15h-1.57V8.28h1.57v7.44Zm1.51 0h1.57v-2.83h2.76v-1.42H16.6V9.7H20V8.28h-4.97v7.44Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        632874: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlusSmallIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                u = n("82169");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, u.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                        className: l
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=56895.2d9277a63ac82f4c7793.js.map