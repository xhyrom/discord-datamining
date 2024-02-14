(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["18788"], {
        666020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                subscribeMembers: function() {
                    return u
                },
                unsubscribeMembers: function() {
                    return l
                },
                subscribeToMemberUpdates: function() {
                    return s
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

            function l(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function s(e) {
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
                    rowHeight: l
                } = e;

                function s(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / l)) + t)
                }
                let a = [];

                function d(e) {
                    let t = e + (r.MINIMUM_RANGE - 1);
                    return a.push([e, t]), t + 1
                }
                let c = s(.5 * u),
                    E = s(i, -c),
                    _ = s(i + u, c);
                for (E > 0 && (E = Math.max(d(0), E)), E = Math.floor(E / r.MINIMUM_RANGE) * r.MINIMUM_RANGE; E <= _;) E = d(E);
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
        504318: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("58975");
            n.es(i, t)
        },
        424823: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("632874");
            n.es(i, t)
        },
        197801: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("469062");
            n.es(i, t)
        },
        750560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return s
                }
            }), n("37983");
            var i = n("884691"),
                r = n("917351"),
                u = n.n(r);
            n("233736");
            var l = n("666020");

            function s(e) {
                i.useEffect(() => (u.forEach(e, (e, t) => (0, l.subscribeMembers)(t, e)), () => {
                    u.forEach(e, (e, t) => (0, l.unsubscribeMembers)(t, e))
                }), [e])
            }
        },
        610174: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildAlertModeEnabled: function() {
                    return c
                },
                getGuildAlertModeEnabled: function() {
                    return E
                }
            });
            var i = n("316693"),
                r = n("446674"),
                u = n("862205"),
                l = n("305961"),
                s = n("957255"),
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

            function c(e) {
                let t = (0, r.useStateFromStores)([l.default], () => l.default.getGuild(e)),
                    n = (0, r.useStateFromStores)([s.default], () => null != t && i.default.hasAny(s.default.computePermissions(t), a.IncidentAlertModeratorPermissions)),
                    u = o.useExperiment({
                        guildId: e,
                        location: "c3fae3_1"
                    }, {
                        disable: !n,
                        autoTrackExposure: !0
                    }),
                    c = d.useExperiment({
                        guildId: e,
                        location: "c3fae3_2"
                    }, {
                        disable: !n,
                        autoTrackExposure: !0
                    });
                return {
                    showAlertMode: u.showAlertMode || c.showAlertMode,
                    alsoShowMemberSafety: u.alsoShowMemberSafety || c.alsoShowMemberSafety
                }
            }

            function E(e) {
                let t = l.default.getGuild(e),
                    n = null != t && i.default.hasAny(s.default.computePermissions(t), a.IncidentAlertModeratorPermissions),
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
                    return l
                },
                DEFAULT_LOCKDOWN_DURATION: function() {
                    return s
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
            let l = 2,
                s = 2,
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
            var i, r, u, l, s, a;
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
            }), (l = i || (i = {})).MESSAGE = "message", l.NAGBAR = "nagbar", l.GUILD_SETTINGS = "guild_settings", l.CONTEXT_MENU = "context_menu", l.GUILD_PROFILE = "guild_profile", l.MEMBER_SAFETY_PAGE = "member_safety_page", (s = r || (r = {})).JOIN_RAID = "join_raid", s.DM_RAID = "dm_raid", (a = u || (u = {})).INVITES_DISABLED = "invites_disabled", a.DMS_DISABLED = "dms_disabled"
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
                    return c
                },
                getIncidentAlertType: function() {
                    return E
                },
                getEnabledInterventions: function() {
                    return _
                },
                getDisabledInterventions: function() {
                    return I
                },
                isUnderLockdown: function() {
                    return f
                },
                hasDMsDisabled: function() {
                    return S
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
                l = n("421127"),
                s = n("782340");
            let a = {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
            };

            function o(e) {
                return null != e.dmSpamDetectedAt && r(e.dmSpamDetectedAt).add(l.NAGBAR_DISPLAY_MAX_HOURS, "hours") > r() || null != e.raidDetectedAt && r(e.raidDetectedAt).add(l.NAGBAR_DISPLAY_MAX_HOURS, "hours") > r()
            }

            function d(e) {
                return null != e.raidDetectedAt && r(e.raidDetectedAt).add(l.NAGBAR_DISPLAY_MAX_HOURS, "hours") > r()
            }

            function c(e) {
                return null != e.dmSpamDetectedAt && r(e.dmSpamDetectedAt).add(l.NAGBAR_DISPLAY_MAX_HOURS, "hours") > r()
            }

            function E(e) {
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

            function f(e) {
                return null != e.dmsDisabledUntil && new Date(e.dmsDisabledUntil) > new Date || null != e.invitesDisabledUntil && new Date(e.invitesDisabledUntil) > new Date
            }

            function S(e) {
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
                        return s.default.Messages.GUILD_ANTIRAID_PAUSE_DMS_AND_JOINS_NAGBAR_MESSAGE_NEW.format({
                            guildName: t,
                            time: new Date(i).toLocaleString(s.default.getLocale(), a)
                        });
                    case r:
                        return s.default.Messages.GUILD_ANTIRAID_PAUSE_DMS_NAGBAR_MESSAGE_NEW.format({
                            guildName: t,
                            time: new Date(i).toLocaleString(s.default.getLocale(), a)
                        });
                    case u:
                        return s.default.Messages.GUILD_ANTIRAID_PAUSE_JOINS_NAGBAR_MESSAGE_NEW.format({
                            guildName: t,
                            time: new Date(i).toLocaleString(s.default.getLocale(), a)
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
                    return T
                }
            }), n("222007");
            var i = n("446674"),
                r = n("913144"),
                u = n("374363"),
                l = n("305961"),
                s = n("957255"),
                a = n("607620"),
                o = n("299039"),
                d = n("610174"),
                c = n("311161");
            let E = {},
                _ = {};

            function I() {
                var e;
                let t = null !== (e = u.default.getGuildsProto()) && void 0 !== e ? e : {},
                    n = l.default.getGuilds(),
                    i = o.default.keys(n);
                for (let e of (_ = {}, i))(0, d.getGuildAlertModeEnabled)(e).showAlertMode && (_[e] = {
                    guildId: e,
                    guildName: n[e].name,
                    ...t[e]
                })
            }

            function f(e) {
                return null != e && Object.keys(e).length > 0 ? {
                    raidDetectedAt: e.raid_detected_at,
                    dmSpamDetectedAt: e.dm_spam_detected_at,
                    dmsDisabledUntil: e.dms_disabled_until,
                    invitesDisabledUntil: e.invites_disabled_until
                } : null
            }
            class S extends i.default.Store {
                initialize() {
                    this.waitFor(u.default, l.default, s.default, a.default), this.syncWith([u.default, l.default, s.default, a.default], I)
                }
                getGuildIncident(e) {
                    return E[e]
                }
                getIncidentsByGuild() {
                    return E
                }
                getGuildAlertSettings() {
                    return _
                }
            }
            S.displayName = "GuildIncidentsStore";
            var T = new S(r.default, {
                CONNECTION_OPEN: function(e) {
                    for (let t of (E = {}, e.guilds)) {
                        let e = f(t.properties.incidents_data);
                        null != e && ((0, c.hasDetectedActivity)(e) || (0, c.isUnderLockdown)(e)) && (E[t.id] = e)
                    }
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e, n = f(t.properties.incidents_data);
                    null != n && ((0, c.hasDetectedActivity)(n) || (0, c.isUnderLockdown)(n)) && (E[t.id] = n)
                },
                GUILD_UPDATE: function(e) {
                    let {
                        guild: t
                    } = e, n = f(t.incidents_data);
                    null != n && ((0, c.hasDetectedActivity)(n) || (0, c.isUnderLockdown)(n)) ? E[t.id] = n : delete E[t.id]
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
                    return s
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
                    return c
                },
                setPendingAvatar: function() {
                    return E
                },
                setPendingBanner: function() {
                    return _
                },
                setPendingBio: function() {
                    return I
                },
                setPendingPronouns: function() {
                    return f
                },
                setPendingNickname: function() {
                    return S
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
                    return L
                }
            }), n("70102");
            var i = n("872717"),
                r = n("913144"),
                u = n("54239"),
                l = n("49111");
            async function s(e, t) {
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
                        url: l.Endpoints.SET_GUILD_MEMBER(e),
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

            function c() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function E(e) {
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

            function f(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function S(e) {
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

            function L(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let i, r, u, l, s, a, o, d, c;
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var E = n("446674"),
                _ = n("913144"),
                I = n("49111");
            let f = I.FormStates.CLOSED,
                S = {},
                T = !1;

            function N() {
                f = I.FormStates.CLOSED, S = {}, o = null, d = void 0, c = []
            }

            function D() {
                A(), G(), S = {}, f = I.FormStates.OPEN
            }

            function A() {
                i = void 0, s = void 0
            }

            function G() {
                r = void 0, u = void 0, l = void 0, a = void 0
            }
            class L extends E.default.Store {
                getFormState() {
                    return f
                }
                getErrors() {
                    return S
                }
                showNotice() {
                    return void 0 !== i || void 0 !== r || void 0 !== u || void 0 !== l || void 0 !== s || void 0 !== a
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
                    return s
                }
                getPendingPronouns() {
                    return l
                }
                getPendingAccentColor() {
                    return s
                }
                getPendingThemeColors() {
                    return a
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: r,
                        pendingBio: u,
                        pendingPronouns: l,
                        pendingNickname: s,
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
                    return c
                }
                getIsDisableSubmit() {
                    return T
                }
            }
            L.displayName = "GuildIdentitySettingsStore";
            var M = new L(_.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    o = e.guild, f = I.FormStates.OPEN, S = {}, d = e.source, c = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: N,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    D(), N()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    o = e.guild, S = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    f = I.FormStates.SUBMITTING, S = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (f !== I.FormStates.SUBMITTING) return !1;
                    f = I.FormStates.OPEN, S = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    f = I.FormStates.OPEN, S = e.errors
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
                    l = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
                    let {
                        nickname: t
                    } = e;
                    s = t
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
                    S = {}
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
                    return l
                },
                CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function() {
                    return s
                },
                CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function() {
                    return a
                }
            });
            var i = n("316693"),
                r = n("923510"),
                u = n("49111");
            let l = u.Permissions.VIEW_CHANNEL,
                s = i.default.combine(l, u.Permissions.CONNECT),
                a = i.default.combine(l, r.MODERATE_STAGE_CHANNEL_PERMISSIONS)
        },
        817963: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useManageResourcePermissions: function() {
                    return I
                },
                getManageResourcePermissions: function() {
                    return f
                }
            }), n("222007");
            var i = n("884691"),
                r = n("316693"),
                u = n("446674"),
                l = n("813006");
            n("923959");
            var s = n("957255"),
                a = n("697218");
            n("991170");
            var o = n("270161"),
                d = n("843455");
            let c = {
                    canCreateExpressions: !1,
                    canCreateGuildEvent: !1,
                    canManageAllExpressions: !1,
                    canManageAllEvents: !1,
                    canManageGuildExpression: () => !1,
                    canManageGuildEvent: () => !1
                },
                E = (e, t, n, i) => {
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
                    let [t, n] = e instanceof l.default ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS] : _(e), [r, o, I, f] = (0, u.useStateFromStoresArray)([s.default], () => [s.default.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e), s.default.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e), s.default.can(t, e), s.default.can(n, e)]), S = (0, u.useStateFromStores)([a.default], () => a.default.getCurrentUser()), T = i.useCallback(e => E(e, S, o, r), [r, o, S]), N = i.useCallback(e => E(e, S, f, I), [f, I, S]);
                    return null == e ? c : {
                        canCreateExpressions: r,
                        canCreateGuildEvent: I,
                        canManageAllExpressions: o,
                        canManageAllEvents: f,
                        canManageGuildExpression: T,
                        canManageGuildEvent: N
                    }
                },
                f = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.default,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.default,
                        [i, r] = e instanceof l.default ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS] : _(e),
                        u = t.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                        o = t.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                        I = t.can(i, e),
                        f = t.can(r, e),
                        S = n.getCurrentUser();
                    return null == e ? c : {
                        canCreateExpressions: u,
                        canCreateGuildEvent: I,
                        canManageAllExpressions: o,
                        canManageAllEvents: f,
                        canManageGuildExpression: e => E(e, S, o, u),
                        canManageGuildEvent: e => E(e, S, f, I)
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
                l = n("929423");
            n("424562");
            var s = n("49111"),
                a = n("397336");

            function o(e) {
                let {
                    guild: t,
                    scrollPosition: n,
                    analyticsLocation: o,
                    analyticsLocations: d,
                    openWithoutBackstack: c = !1
                } = e, {
                    analyticsLocations: E
                } = (0, u.default)(), _ = (0, i.useCallback)(() => {
                    null != t && (0, l.initGuildIdentitySettings)(t, null != d ? d : E), r.default.open(s.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? a.ProfileCustomizationSubsection.GUILD : a.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: o,
                        analyticsLocations: d,
                        openWithoutBackstack: c
                    })
                }, [t, n, o, d, c, E]);
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

            function l() {
                return !0
            }
            class s extends i.default.Store {
                initialize() {
                    this.waitFor(u.default)
                }
                getExperimentAssignment(e, t) {
                    return u.default.getGuildExperimentDescriptor(t, e)
                }
            }
            s.displayName = "GuildExperimentStore";
            var a = new s(r.default, {
                LOGOUT: l,
                LOGIN_SUCCESS: l,
                CONNECTION_OPEN: l,
                EXPERIMENTS_FETCH_SUCCESS: l,
                OVERLAY_INITIALIZE: l,
                CACHE_LOADED: l,
                EXPERIMENTS_FETCH_FAILURE: l,
                EXPERIMENT_REGISTER_LEGACY: l,
                EXPERIMENT_OVERRIDE_BUCKET: l
            })
        },
        474571: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                u = n("197801"),
                l = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: u,
                        ...s
                    } = e;
                    return 16 === t || 16 === n ? (0, i.jsx)("svg", {
                        ...(0, l.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: u,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                        })
                    }) : (0, i.jsx)("svg", {
                        ...(0, l.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: u,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        })
                    })
                }, u.SettingsIcon, void 0, {
                    size: 24
                })
        },
        987772: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                u = n("504318"),
                l = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: u,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            className: u,
                            fill: r
                        })
                    })
                }, u.PencilIcon, void 0, {
                    size: 16
                })
        },
        151185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                u = n("424823"),
                l = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: u,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(s),
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
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                u = n("31745"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        className: u,
                        foreground: l
                    } = e;
                    return (0, i.jsx)("svg", {
                        className: u,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: l,
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
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                u = n("82169");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: l = "transparent",
                    secondaryColorClass: s = "",
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
                        fill: "string" == typeof l ? l : l.css,
                        className: s
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
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                u = n("82169");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
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
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87a2.9 2.9 0 0 1-1.66-.49 3.18 3.18 0 0 1-1.12-1.35A4.88 4.88 0 0 1 4 12c0-.75.14-1.42.42-2 .29-.59.7-1.04 1.24-1.37a3.7 3.7 0 0 1 1.95-.5c.64 0 1.21.14 1.72.4.5.28.89.67 1.15 1.16l-1.22.88a1.76 1.76 0 0 0-1.64-1.02c-.66 0-1.17.22-1.52.65a2.74 2.74 0 0 0-.53 1.8c0 .78.18 1.39.53 1.81.35.42.86.64 1.52.64.3 0 .57-.06.81-.16.25-.12.45-.27.58-.47v-.93H7.3v-1.4h3.24v4.23H9.27l-.2-.71c-.43.57-1.06.86-1.89.86Zm6.34-.15h-1.57V8.28h1.57v7.44Zm1.51 0h1.57v-2.83h2.76v-1.42H16.6V9.7H20V8.28h-4.97v7.44Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        58975: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PencilIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                u = n("82169");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
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
                        fill: "string" == typeof l ? l : l.css,
                        d: "m13.96 5.46 4.58 4.58a1 1 0 0 0 1.42 0l1.38-1.38a2 2 0 0 0 0-2.82l-3.18-3.18a2 2 0 0 0-2.82 0l-1.38 1.38a1 1 0 0 0 0 1.42ZM2.11 20.16l.73-4.22a3 3 0 0 1 .83-1.61l7.87-7.87a1 1 0 0 1 1.42 0l4.58 4.58a1 1 0 0 1 0 1.42l-7.87 7.87a3 3 0 0 1-1.6.83l-4.23.73a1.5 1.5 0 0 1-1.73-1.73Z",
                        className: s
                    })
                })
            }
        },
        632874: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlusSmallIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                u = n("82169");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
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
                        fill: "string" == typeof l ? l : l.css,
                        d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                        className: s
                    })
                })
            }
        },
        469062: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SettingsIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                u = n("82169");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
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
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M10.56 1.1c-.46.05-.7.53-.64.98.18 1.16-.19 2.2-.98 2.53-.8.33-1.79-.15-2.49-1.1-.27-.36-.78-.52-1.14-.24-.77.59-1.45 1.27-2.04 2.04-.28.36-.12.87.24 1.14.96.7 1.43 1.7 1.1 2.49-.33.8-1.37 1.16-2.53.98-.45-.07-.93.18-.99.64a11.1 11.1 0 0 0 0 2.88c.06.46.54.7.99.64 1.16-.18 2.2.19 2.53.98.33.8-.14 1.79-1.1 2.49-.36.27-.52.78-.24 1.14.59.77 1.27 1.45 2.04 2.04.36.28.87.12 1.14-.24.7-.95 1.7-1.43 2.49-1.1.8.33 1.16 1.37.98 2.53-.07.45.18.93.64.99a11.1 11.1 0 0 0 2.88 0c.46-.06.7-.54.64-.99-.18-1.16.19-2.2.98-2.53.8-.33 1.79.14 2.49 1.1.27.36.78.52 1.14.24.77-.59 1.45-1.27 2.04-2.04.28-.36.12-.87-.24-1.14-.96-.7-1.43-1.7-1.1-2.49.33-.8 1.37-1.16 2.53-.98.45.07.93-.18.99-.64a11.1 11.1 0 0 0 0-2.88c-.06-.46-.54-.7-.99-.64-1.16.18-2.2-.19-2.53-.98-.33-.8.14-1.79 1.1-2.49.36-.27.52-.78.24-1.14a11.07 11.07 0 0 0-2.04-2.04c-.36-.28-.87-.12-1.14.24-.7.96-1.7 1.43-2.49 1.1-.8-.33-1.16-1.37-.98-2.53.07-.45-.18-.93-.64-.99a11.1 11.1 0 0 0-2.88 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=18788.a7561c504f326881e816.js.map