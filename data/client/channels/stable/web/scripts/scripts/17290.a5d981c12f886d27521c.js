(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["17290"], {
        953131: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchOnboardingPrompts: function() {
                    return m
                },
                loadOnboardingPrompts: function() {
                    return p
                },
                maybeFetchOnboardingPrompts: function() {
                    return O
                },
                startOnboarding: function() {
                    return h
                }
            }), n("789020");
            var i = n("454836"),
                s = n("312916"),
                l = n("244180"),
                o = n("262047"),
                u = n("361733"),
                r = n("327271"),
                a = n("328470"),
                d = n("984362"),
                _ = n("343720"),
                c = n("745590"),
                f = n("467006"),
                g = n("551748");

            function p(e) {
                a.default.track(f.AnalyticEvents.GUILD_ONBOARDING_LOADED, {
                    ...(0, l.collectGuildAnalyticsMetadata)(e),
                    has_new_prompts: !1,
                    number_of_prompts: 0
                })
            }

            function m(e) {
                return s.default.dispatch({
                    type: "GUILD_ONBOARDING_PROMPTS_FETCH_START",
                    guildId: e
                }), i.default.get({
                    url: f.Endpoints.GUILD_ONBOARDING(e)
                }).then(t => {
                    let {
                        body: n
                    } = t, i = (0, c.serverApiResponseToClientState)(n);
                    return s.default.dispatch({
                        type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS",
                        guildId: e,
                        ...i
                    }).then(() => i.prompts)
                }, t => (s.default.dispatch({
                    type: "GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE",
                    guildId: e
                }), t))
            }
            async function O(e) {
                let t = o.default.getId(),
                    n = (0, d.hasFlag)(u.default.getMember(e, t)?.flags ?? 0, g.GuildMemberFlags.COMPLETED_ONBOARDING),
                    i = r.default.getGuild(e);
                if (null == i || !i.hasFeature(f.GuildFeatures.GUILD_ONBOARDING)) return Promise.resolve();
                let s = _.default.shouldFetchPrompts(e),
                    l = _.default.getOnboardingPrompts(e);
                if (!s && l.length > 0) return l.every(e => !e.inOnboarding) ? (N(e), Promise.resolve()) : (!n && h(e), Promise.resolve());
                let a = await m(e);
                return Array.isArray(a) && a.every(e => !e.inOnboarding) ? (N(e), Promise.resolve()) : (!n && h(e), a)
            }

            function h(e) {
                s.default.dispatch({
                    type: "GUILD_ONBOARDING_START",
                    guildId: e
                })
            }

            function N(e) {
                a.default.track(f.AnalyticEvents.GUILD_ONBOARDING_STEP_VIEWED, {
                    ...(0, l.collectGuildAnalyticsMetadata)(e),
                    step: -2,
                    required: !0
                }), a.default.track(f.AnalyticEvents.GUILD_ONBOARDING_STEP_COMPLETED, {
                    ...(0, l.collectGuildAnalyticsMetadata)(e),
                    step: -2,
                    skipped: !1,
                    is_final_step: !0,
                    in_onboarding: !0
                })
            }
        },
        745590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DROPDOWN_MAX_NUM_OPTIONS: function() {
                    return O
                },
                GuildOnboardingMode: function() {
                    return r
                },
                GuildOnboardingTab: function() {
                    return o
                },
                MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING: function() {
                    return h
                },
                MAX_NUM_PROMPTS: function() {
                    return p
                },
                MAX_PROMPT_OPTION_DESCRIPTION_LENGTH: function() {
                    return g
                },
                MAX_PROMPT_OPTION_TITLE_LENGTH: function() {
                    return f
                },
                MAX_PROMPT_TITLE_LENGTH: function() {
                    return c
                },
                MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING: function() {
                    return N
                },
                MULTIPLE_CHOICE_MAX_NUM_OPTIONS: function() {
                    return m
                },
                NUM_DEFAULT_CHATTABLE_CHANNELS_MIN: function() {
                    return S
                },
                ONBOARDING_PROMPT_TYPE_SWITCH_THRESHOLD: function() {
                    return E
                },
                OnboardingPromptType: function() {
                    return u
                },
                clientPromptToServerPrompt: function() {
                    return A
                },
                getDefaultPrompt: function() {
                    return T
                },
                getEmptyPrompt: function() {
                    return b
                },
                isDefaultPrompt: function() {
                    return I
                },
                isEmojiEmpty: function() {
                    return v
                },
                serverApiResponseToClientState: function() {
                    return P
                }
            });
            var i, s, l, o, u, r, a = n("348327"),
                d = n.n(a),
                _ = n("30175");
            let c = 100,
                f = 50,
                g = 100,
                p = 15,
                m = 12,
                O = 50,
                h = 4,
                N = 7,
                S = 5,
                E = 13;

            function I(e) {
                if (e.options.length > 0) return !1;
                let {
                    id: t,
                    ...n
                } = T(), {
                    id: i,
                    ...s
                } = e;
                return d()(n, s)
            }

            function T() {
                return {
                    id: String(Date.now()),
                    title: _.default.Messages.ONBOARDING_PROMPT_DEFAULT_TITLE,
                    options: [],
                    singleSelect: !1,
                    required: !1,
                    inOnboarding: !0,
                    type: 0
                }
            }

            function b(e) {
                return {
                    id: String(Date.now()),
                    title: "",
                    options: [],
                    singleSelect: !1,
                    required: !1,
                    inOnboarding: e,
                    type: 0
                }
            }

            function A(e) {
                return {
                    id: e.id,
                    options: e.options.map(e => ({
                        id: e.id,
                        channel_ids: e.channelIds,
                        role_ids: e.roleIds,
                        emoji: e.emoji,
                        emoji_id: e.emoji?.id,
                        emoji_name: e.emoji?.name,
                        emoji_animated: e.emoji?.animated,
                        title: e.title,
                        description: e.description
                    })),
                    title: e.title,
                    single_select: e.singleSelect,
                    disabled: e.disabled,
                    required: e.required,
                    in_onboarding: e.inOnboarding,
                    type: e.type
                }
            }

            function D(e) {
                return {
                    id: e.id,
                    options: e.options.map(e => ({
                        id: e.id,
                        channelIds: e.channel_ids,
                        roleIds: e.role_ids,
                        emoji: e.emoji,
                        title: e.title,
                        description: e.description ?? ""
                    })),
                    title: e.title,
                    singleSelect: e.single_select,
                    disabled: e.disabled,
                    required: e.required,
                    inOnboarding: e.in_onboarding,
                    type: e.type
                }
            }

            function P(e) {
                return {
                    prompts: e.prompts.map(D),
                    defaultChannelIds: e.default_channel_ids,
                    responses: e.responses ?? [],
                    mode: e.mode,
                    enabled: e.enabled,
                    onboardingPromptsSeen: e.onboarding_prompts_seen ?? {},
                    onboardingResponsesSeen: e.onboarding_responses_seen ?? {},
                    belowRequirements: e.below_requirements
                }
            }

            function v(e) {
                return null == e || null == e.id && null == e.name
            }(i = o || (o = {}))[i.CUSTOMIZE = 0] = "CUSTOMIZE", i[i.BROWSE = 1] = "BROWSE", (s = u || (u = {}))[s.MULTIPLE_CHOICE = 0] = "MULTIPLE_CHOICE", s[s.DROPDOWN = 1] = "DROPDOWN", (l = r || (r = {}))[l.ONBOARDING_DEFAULT = 0] = "ONBOARDING_DEFAULT", l[l.ONBOARDING_ADVANCED = 1] = "ONBOARDING_ADVANCED"
        },
        343720: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            }), n("653041");
            var i = n("392711"),
                s = n.n(i),
                l = n("661223"),
                o = n("312916"),
                u = n("911533"),
                r = n("731865"),
                a = n("152551"),
                d = n("84819"),
                _ = n("919512"),
                c = n("347069"),
                f = n("745590");
            let g = {},
                p = {},
                m = {},
                O = !1;

            function h(e, t, n) {
                return e.map(e => (function(e, t, n) {
                    let i = !1,
                        s = [];
                    for (let t = 0; t < e.options.length; t++) {
                        let l = e.options[t],
                            o = null == n[l.id];
                        o && (i = !0), s.push({
                            ...l,
                            isUnseen: o
                        })
                    }
                    return {
                        ...e,
                        options: s,
                        hasNewAnswers: i,
                        isNew: null == t[e.id]
                    }
                })(e, t, n))
            }

            function N(e) {
                let {
                    guildId: t,
                    updates: n
                } = e, i = n.onboardingPromptsSeen ?? g[t]?.onboardingPromptsSeen ?? {}, s = n.onboardingResponsesSeen ?? g[t]?.onboardingResponsesSeen ?? {}, l = h(n.prompts ?? g[t]?.prompts ?? [], i, s);
                g[t] = {
                    ...g[t],
                    ...n,
                    prompts: l
                }
            }

            function S(e, t) {
                if (null == p[e]) return;
                let n = {};
                Object.keys(p[e]).forEach(i => {
                    !t.includes(i) && p[e][i] ? n[i] = !0 : t.includes(i) && !1 === p[e][i] && (n[i] = !1)
                }), p[e] = n;
                let i = t.filter(e => null == n[e] || !0 === n[e]);
                Object.keys(n).forEach(e => {
                    !0 === n[e] && !t.includes(e) && i.push(e)
                }), g[e] = {
                    ...g[e],
                    responses: i
                }
            }
            let E = [],
                I = [],
                T = [];
            class b extends l.default.Store {
                static #e = this.displayName = "GuildOnboardingPromptsStore";
                initialize() {
                    this.waitFor(r.default, c.default, u.default)
                }
                getOnboardingPromptsForOnboarding(e) {
                    return g[e]?.onboardingPrompts ?? E
                }
                getOnboardingPrompts(e) {
                    return g[e]?.prompts ?? E
                }
                getOnboardingResponses(e) {
                    return u.default.isFullServerPreview(e) ? Array.from(u.default.getOnboardingResponses(e) ?? I) : g[e]?.responses ?? I
                }
                getSelectedOptions(e) {
                    let t = this.getOnboardingResponses(e);
                    return this.getOnboardingPrompts(e).map(e => e.options).flat().filter(e => t.includes(e.id))
                }
                getOnboardingResponsesForPrompt(e, t) {
                    let n = g[e];
                    if (null == n) return I;
                    let i = n.prompts.find(e => e.id === t);
                    return null == i ? I : s().intersection(i.options.map(e => e.id), this.getOnboardingResponses(e))
                }
                getEnabledOnboardingPrompts(e) {
                    let t = g[e];
                    return u.default.isFullServerPreview(e) ? t?.prompts ?? E : null != t && t.enabled ? t.prompts ?? E : E
                }
                getDefaultChannelIds(e) {
                    return g[e]?.defaultChannelIds ?? T
                }
                getEnabled(e) {
                    return u.default.isFullServerPreview(e) ? null != g[e] : g[e]?.enabled ?? !1
                }
                getOnboardingPrompt(e) {
                    return Object.values(g).map(e => e.prompts).flat().find(t => t.id === e)
                }
                isLoading() {
                    return O
                }
                shouldFetchPrompts(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.default.Millis.HOUR;
                    if (O) return !1;
                    let n = m[e];
                    return null == n || Date.now() - n > t
                }
                getPendingResponseOptions(e) {
                    return p[e]
                }
                ackIdForGuild(e) {
                    let t = this.getEnabledOnboardingPrompts(e),
                        n = "0";
                    return t.forEach(e => {
                        e.options.forEach(e => {
                            d.default.compare(e.id, n) > 0 && (n = e.id)
                        }), d.default.compare(e.id, n) > 0 && (n = e.id)
                    }), n
                }
                lastFetchedAt(e) {
                    return m[e]
                }
                isAdvancedMode(e) {
                    return null != e && g[e]?.mode === f.GuildOnboardingMode.ONBOARDING_ADVANCED
                }
            }
            var A = new b(o.default, {
                CONNECTION_OPEN: function() {
                    O = !1, g = {}
                },
                GUILD_ONBOARDING_PROMPTS_FETCH_START: function() {
                    O = !0
                },
                GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        prompts: n,
                        defaultChannelIds: i,
                        enabled: s,
                        responses: l,
                        onboardingPromptsSeen: o,
                        onboardingResponsesSeen: u,
                        mode: r,
                        belowRequirements: a
                    } = e;
                    O = !1;
                    let d = c.default.getOnboardingStatus(t) === c.GuildOnboardingStatus.READY,
                        f = h(n, o, u);
                    g[t] = {
                        enabled: s,
                        mode: r,
                        belowRequirements: a,
                        prompts: f,
                        onboardingPrompts: f.filter(e => e.inOnboarding),
                        defaultChannelIds: i.filter(e => (0, _.canChannelBeDefault)(t, e)),
                        responses: d ? [] : l,
                        onboardingPromptsSeen: o,
                        onboardingResponsesSeen: u
                    }, !d && S(t, l), m[t] = Date.now()
                },
                GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function() {
                    O = !1
                },
                GUILD_ONBOARDING_SELECT_OPTION: function(e) {
                    let {
                        guildId: t,
                        optionId: n,
                        selected: i,
                        removedOptionIds: l
                    } = e;
                    return !!u.default.isFullServerPreview(t) || null != g[t] && (null != l && l.length > 0 && s().pullAll(g[t].responses, l), i ? g[t].responses.push(n) : s().pull(g[t].responses, n), null == p[t] && (p[t] = {}), p[t][n] = i, null != l && l.forEach(e => p[t][e] = !1), p[t] = {
                        ...p[t]
                    }, !0)
                },
                GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        options: n,
                        prompts_seen: i,
                        options_seen: s
                    } = e;
                    S(t, n);
                    let l = g[t];
                    if (null == l) return !1;
                    let o = h(l.prompts, i, s);
                    g[t] = {
                        ...l,
                        prompts: o,
                        onboardingPrompts: o.filter(e => e.inOnboarding),
                        onboardingPromptsSeen: i,
                        onboardingResponsesSeen: s
                    }
                },
                GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: N,
                GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: N,
                GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        channelIds: n
                    } = e;
                    g[t] = {
                        ...g[t],
                        defaultChannelIds: n
                    }
                },
                GUILD_SETTINGS_ONBOARDING_SET_MODE: function(e) {
                    let {
                        guildId: t,
                        mode: n
                    } = e, i = g[t];
                    null != i && (i.mode = n)
                }
            })
        },
        602595: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                },
                trackMessageNotificationTimestamps: function() {
                    return r
                }
            });
            var i = n("661223"),
                s = n("312916"),
                l = n("361733"),
                o = n("301309"),
                u = n("871831");

            function r(e, t) {
                let n = u.default.getCurrentUser()?.id,
                    i = o.default.isSuppressEveryoneEnabled(t),
                    r = o.default.isSuppressRolesEnabled(t),
                    a = null != e.mentions && e.mentions.some(e => e.id === n),
                    d = null == t || null == n ? null : l.default.getMember(t, n),
                    _ = null != e.mention_roles && null != d && null != d.roles && e.mention_roles.some(e => d.roles.includes(e));
                s.default.dispatch({
                    type: "MESSAGE_NOTIFICATION_SHOWN",
                    guildId: t,
                    mentioned: a,
                    roleMentioned: _ && !r,
                    everyoneMentioned: !0 === e.mention_everyone && !i
                })
            }
            let a = null,
                d = null,
                _ = null,
                c = null,
                f = {},
                g = {},
                p = {},
                m = {};
            class O extends i.default.Store {
                getGlobalStats() {
                    let e = e => null == e ? null : Math.floor((Date.now() - e) / 1e3);
                    return {
                        approx_seconds_since_last_notification: e(a),
                        approx_seconds_since_last_mention: e(d),
                        approx_seconds_since_last_role_mention: e(_),
                        approx_seconds_since_last_everyone_mention: e(c)
                    }
                }
                getStats(e) {
                    let t = e => null == e ? null : Math.floor((Date.now() - e) / 1e3);
                    return {
                        approx_seconds_since_last_notification: t(a),
                        approx_seconds_since_last_mention: t(d),
                        approx_seconds_since_last_role_mention: t(_),
                        approx_seconds_since_last_everyone_mention: t(c),
                        approx_seconds_since_last_guild_notification: null == e ? null : t(f[e]),
                        approx_seconds_since_last_guild_mention: null == e ? null : t(g[e]),
                        approx_seconds_since_last_guild_role_mention: null == e ? null : t(m[e]),
                        approx_seconds_since_last_guild_everyone_mention: null == e ? null : t(p[e])
                    }
                }
            }
            var h = new O(s.default, {
                CONNECTION_OPEN: function() {
                    let e = e => null != e && Date.now() - e < 6e4;
                    for (let t in !e(a) && (a = null), !e(d) && (d = null), !e(_) && (_ = null), !e(c) && (c = null), f) !e(f[t]) && delete f[t];
                    for (let t in g) !e(g[t]) && delete g[t];
                    for (let t in m) !e(m[t]) && delete m[t];
                    for (let t in p) !e(p[t]) && delete p[t]
                },
                MESSAGE_NOTIFICATION_SHOWN: function(e) {
                    let {
                        guildId: t,
                        mentioned: n,
                        roleMentioned: i,
                        everyoneMentioned: s
                    } = e, l = Date.now();
                    a = l, null != t && (f[t] = l), n && (d = l, null != t && (g[t] = l)), i && (_ = l, null != t && (m[t] = l)), s && (c = l, null != t && (p[t] = l))
                }
            })
        },
        514363: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MessageNotificationSettings: function() {
                    return O
                },
                NotificationLabel: function() {
                    return m
                },
                NotificationLabels: function() {
                    return s
                },
                getCurrentChannelSettings: function() {
                    return b
                },
                getCurrentGuildSettings: function() {
                    return I
                },
                getManyCurrentChannelSettings: function() {
                    return A
                },
                getManyCurrentGuildSettings: function() {
                    return T
                },
                muteConfigToTimestamp: function() {
                    return S
                },
                trackAccountNotificationSettingUpdated: function() {
                    return D
                },
                trackChannelNotificationSettingsUpdate: function() {
                    return E
                },
                trackGuildNotificationSettingsUpdate: function() {
                    return h
                }
            }), n("789020");
            var i, s, l, o, u = n("244180"),
                r = n("602595"),
                a = n("731865"),
                d = n("301309"),
                _ = n("328470"),
                c = n("984362"),
                f = n("467006"),
                g = n("587361"),
                p = n("746835");
            (l = i || (i = {})).GUILD = "guild", l.CHANNEL = "channel", l.ACCOUNT = "account", (o = s || (s = {})).ForumThreadsCreatedOn = "enabled forum thread created notifs", o.ForumThreadsCreatedOff = "disabled forum thread created notifs", o.SuppressEveryoneOn = "enabled suppress everyone", o.SuppressEveryoneOff = "disabled suppress everyone", o.SuppressRolesOn = "enabled suppress roles", o.SuppressRolesOff = "disabled suppress roles", o.HighlightsOn = "enabled highlights", o.HighlightsOff = "disabled highlights", o.MobilePushOn = "enabled mobile push notifications", o.MobilePushOff = "disabled mobile push notifications", o.UnreadsAll = "unreads set to all messages", o.UnreadsMentions = "unreads set to mentions", o.UnreadsDefault = "unreads set to the default", o.NotificationsAll = "notifications set to all messages", o.NotificationsMentions = "notifications set to mentions", o.NotificationsNothing = "notifications set to nothing", o.NotificationsDefault = "notifications set to the default", o.PresetAll = "notification preset set to all messages", o.PresetMentions = "notification preset set to mentions", o.PresetNothing = "notification preset set to nothing", o.PresetDefault = "notification preset set to the default", o.OptedIn = "opted in to entity", o.OptedOut = "opted out from entity", o.Favorited = "favorited", o.UnFavorited = "unfavorited", o.Muted = "muted", o.Unmuted = "unmuted", o.MutedScheduledEvents = "muted scheduled events", o.UnmutedScheduledEvents = "unmuted scheduled events", o.OverrideCreated = "channel override created", o.OverrideDeleted = "channel override deleted";
            let m = {
                    forumThreadsCreated: e => e ? "enabled forum thread created notifs" : "disabled forum thread created notifs",
                    suppressEveryone: e => e ? "enabled suppress everyone" : "disabled suppress everyone",
                    suppressRoles: e => e ? "enabled suppress roles" : "disabled suppress roles",
                    highlights: e => e ? "enabled highlights" : "disabled highlights",
                    mobilePush: e => e ? "enabled mobile push notifications" : "disabled mobile push notifications",
                    optedIn: e => e ? "opted in to entity" : "opted out from entity",
                    favorited: e => e ? "favorited" : "unfavorited",
                    muted: e => e ? "muted" : "unmuted",
                    mutedEvents: e => e ? "muted scheduled events" : "unmuted scheduled events",
                    unreads: e => e === g.UnreadSetting.ALL_MESSAGES ? "unreads set to all messages" : e === g.UnreadSetting.ONLY_MENTIONS ? "unreads set to mentions" : "unreads set to the default",
                    notifications: e => e === f.UserNotificationSettings.ALL_MESSAGES ? "notifications set to all messages" : e === f.UserNotificationSettings.ONLY_MENTIONS ? "notifications set to mentions" : e === f.UserNotificationSettings.NO_MESSAGES ? "notifications set to nothing" : "notifications set to the default"
                },
                O = Object.freeze({
                    [f.UserNotificationSettings.ALL_MESSAGES]: "All",
                    [f.UserNotificationSettings.ONLY_MENTIONS]: "Mentions",
                    [f.UserNotificationSettings.NO_MESSAGES]: "Nothing",
                    [f.UserNotificationSettings.NULL]: null
                });

            function h(e, t, n, i, s) {
                let l = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = null != t.mute_config && null != t.mute_config.end_time ? new Date(t.mute_config.end_time).getTime() : e.guild_muted_until,
                            i = null != t.message_notifications ? O[t.message_notifications] : e.guild_message_notification_settings;
                        return {
                            guild_muted_until: n,
                            guild_flags: t.flags ?? e.guild_flags,
                            guild_is_muted: t.muted ?? e.guild_is_muted,
                            guild_message_notification_settings: i,
                            guild_suppress_roles: t.suppress_roles ?? e.guild_suppress_roles,
                            guild_receive_mobile_push: t.mobile_push ?? e.guild_receive_mobile_push,
                            guild_notify_highlights: t.notify_highlights ?? e.guild_notify_highlights,
                            guild_suppress_everyone: t.suppress_everyone ?? e.guild_suppress_everyone,
                            guild_scheduled_events_muted: t.mute_scheduled_events ?? e.guild_scheduled_events_muted
                        }
                    },
                    o = l(n),
                    a = l(I(e), t),
                    d = N(o, a, "RETURN_PREVIOUS_WHEN_CHANGED"),
                    _ = d("guild_flags") ?? 0,
                    g = (a.guild_flags ?? 0) ^ _,
                    m = 0 === (0, c.removeFlags)(g, p.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_OFF, p.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON);
                u.default.trackWithMetadata(f.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
                    ...a,
                    ...r.default.getStats(e),
                    location: s,
                    guild_id: e,
                    update_type: "guild",
                    label: i,
                    guild_flags_old: d("guild_flags"),
                    guild_is_muted_old: d("guild_is_muted"),
                    guild_suppress_roles_old: d("guild_suppress_roles"),
                    guild_notify_highlights_old: d("guild_notify_highlights"),
                    guild_suppress_everyone_old: d("guild_suppress_everyone"),
                    guild_receive_mobile_push_old: d("guild_receive_mobile_push"),
                    guild_scheduled_events_muted_old: d("guild_scheduled_events_muted"),
                    guild_message_notification_settings_old: d("guild_message_notification_settings"),
                    is_opt_in_only_change: m
                })
            }

            function N(e, t, n) {
                return i => {
                    if ("RETURN_PREVIOUS_WHEN_CHANGED" === n) return e[i] !== t[i] ? e[i] : void 0
                }
            }

            function S(e) {
                return null != e && null != e.end_time ? new Date(e.end_time).getTime() : null
            }

            function E(e, t, n, i, s, l) {
                let o = function(t) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            i = n.muted ?? t?.channel_is_muted,
                            s = null != n.message_notifications ? O[n.message_notifications] : t?.channel_message_notification_settings,
                            l = null == e ? null : !0 === i || null != s;
                        return {
                            channel_is_muted: i,
                            channel_is_overridden: l,
                            channel_flags: n.flags ?? t?.channel_flags,
                            channel_message_notification_settings: s,
                            channel_muted_until: S(n.mute_config)
                        }
                    },
                    d = o(i),
                    _ = o(b(e, t), n),
                    g = N(d, _, "RETURN_PREVIOUS_WHEN_CHANGED"),
                    m = a.default.getChannel(t),
                    h = g("channel_flags") ?? 0,
                    E = (_.channel_flags ?? 0) ^ h,
                    I = 0 === (0, c.removeFlags)(E, p.ChannelNotificationSettingsFlags.FAVORITED, p.ChannelNotificationSettingsFlags.OPT_IN_ENABLED);
                u.default.trackWithMetadata(f.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
                    ..._,
                    ...r.default.getStats(e),
                    location: l,
                    guild_id: e,
                    channel_id: t,
                    update_type: "channel",
                    label: s,
                    parent_id: null != m ? m.parent_id : null,
                    channel_flags_old: g("channel_flags"),
                    channel_is_muted_old: g("channel_is_muted"),
                    channel_muted_until_old: g("channel_muted_until"),
                    channel_is_overridden_old: g("channel_is_overridden"),
                    channel_message_notification_settings_old: g("channel_message_notification_settings"),
                    is_opt_in_only_change: I
                })
            }

            function I(e) {
                let t = d.default.isMuted(e),
                    n = d.default.getMuteConfig(e);
                return {
                    guild_suppress_everyone: d.default.isSuppressEveryoneEnabled(e),
                    guild_suppress_roles: d.default.isSuppressRolesEnabled(e),
                    guild_scheduled_events_muted: d.default.isMuteScheduledEventsEnabled(e),
                    guild_is_muted: t,
                    guild_muted_until: null != n && null != n.end_time ? new Date(n.end_time).getTime() : null,
                    guild_receive_mobile_push: d.default.isMobilePushEnabled(e),
                    guild_message_notification_settings: O[d.default.getMessageNotifications(e)],
                    guild_notify_highlights: d.default.getNotifyHighlights(e),
                    guild_flags: d.default.getGuildFlags(e)
                }
            }

            function T(e) {
                let t = new Map;
                return e.forEach(e => t.set(e, I(e))), t
            }

            function b(e, t) {
                let n = d.default.isChannelMuted(e, t),
                    i = d.default.getChannelMuteConfig(e, t);
                return {
                    channel_is_muted: n,
                    channel_muted_until: null != i && null != i.end_time ? new Date(i.end_time).getTime() : null,
                    channel_message_notification_settings: O[d.default.getChannelMessageNotifications(e, t)],
                    channel_flags: d.default.getChannelIdFlags(e, t)
                }
            }

            function A(e, t) {
                let n = new Map;
                return t.forEach(t => n.set(t, b(e, t))), n
            }

            function D(e, t) {
                _.default.track(f.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: "account",
                    quiet_mode_enabled: e.quietMode,
                    quiet_mode_enabled_old: t.quietMode
                })
            }
        }
    }
]);
//# sourceMappingURL=17290.a5d981c12f886d27521c.js.map