(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["13931"], {
        427388: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("789020");
            var a = n("454836"),
                i = n("24135"),
                l = n("312916"),
                d = n("778492"),
                s = n("301309"),
                r = n("984362"),
                o = n("514363"),
                u = n("84819"),
                f = n("467006"),
                g = n("746835"),
                c = n("30175"),
                _ = {
                    open(e) {
                        l.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
                            guildId: e
                        })
                    },
                    close() {
                        l.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                        })
                    },
                    updateGuildNotificationSettings(e, t, n, a) {
                        let i = (0, o.getCurrentGuildSettings)(e);
                        d.default.saveUserGuildSettings(e, t), l.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, o.trackGuildNotificationSettingsUpdate)(e, t, i, n, a)
                    },
                    updateGuildAndChannelNotificationSettings(e, t, n, a) {
                        let i = u.default.keys(t.channel_overrides),
                            s = (0, o.getCurrentGuildSettings)(e),
                            r = (0, o.getManyCurrentChannelSettings)(e, i);
                        d.default.saveUserGuildSettings(e, t), l.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, o.trackGuildNotificationSettingsUpdate)(e, t, s, n, a), u.default.keys(t.channel_overrides).forEach(i => {
                            let l = r.get(i);
                            (0, o.trackChannelNotificationSettingsUpdate)(e, i, t.channel_overrides[i], l, n, a)
                        })
                    },
                    updateGuildNotificationSettingsBulk(e, t, n) {
                        let a = u.default.keys(e),
                            i = (0, o.getManyCurrentGuildSettings)(a);
                        d.default.saveUserGuildSettingsBulk(e), u.default.entries(e).forEach(e => {
                            let [a, d] = e, s = i.get(a);
                            l.default.dispatch({
                                type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                                guildId: a,
                                settings: d
                            }), (0, o.trackGuildNotificationSettingsUpdate)(a, d, s, t, n)
                        })
                    },
                    updateChannelOverrideSettings(e, t, n, a, s) {
                        let r = (0, o.getCurrentChannelSettings)(e, t);
                        d.default.saveUserGuildSettings(e, {
                            channel_overrides: {
                                [t]: n
                            }
                        }), l.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                            guildId: e,
                            channelId: t,
                            settings: n
                        }), i.AccessibilityAnnouncer.announce(c.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED), (0, o.trackChannelNotificationSettingsUpdate)(e, t, n, r, a, s)
                    },
                    updateChannelOverrideSettingsBulk(e, t, n, a) {
                        let i = u.default.keys(t),
                            s = (0, o.getManyCurrentChannelSettings)(e, i);
                        d.default.saveUserGuildSettings(e, {
                            channel_overrides: t
                        }), l.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                            guildId: e,
                            overrides: t
                        }), u.default.keys(t).forEach(i => (0, o.trackChannelNotificationSettingsUpdate)(e, i, t[i], s.get(i), n, a))
                    },
                    setForumThreadsCreated(e, t) {
                        let n = t ? g.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON : g.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
                            a = t ? g.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF : g.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
                            i = s.default.getChannelFlags(e);
                        this.updateChannelOverrideSettings(e.guild_id, e.id, {
                            flags: i & ~a | n
                        }, o.NotificationLabel.forumThreadsCreated(t))
                    },
                    async setAccountFlag(e, t) {
                        let n = s.default.accountNotificationSettings.flags,
                            i = (0, r.setFlag)(n, e, t);
                        await a.default.patch({
                            url: f.Endpoints.ACCOUNT_NOTIFICATION_SETTINGS,
                            body: {
                                flags: i
                            }
                        }), await l.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_UPDATE",
                            settings: {
                                flags: i
                            }
                        })
                    }
                }
        },
        740841: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateGuildSelfMember: function() {
                    return r
                }
            }), n("789020");
            var a = n("454836"),
                i = n("312916"),
                l = n("243393"),
                d = n("911533"),
                s = n("467006");

            function r(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (d.default.isFullServerPreview(e)) {
                    (0, l.updateImpersonatedData)(e, {
                        memberOptions: t
                    });
                    return
                }
                return i.default.dispatch({
                    type: "GUILD_MEMBER_UPDATE_LOCAL",
                    guildId: e,
                    roles: t.roles,
                    flags: t.flags
                }), a.default.patch({
                    url: s.Endpoints.SET_GUILD_MEMBER(e),
                    body: t,
                    oldFormErrors: !!n || void 0
                })
            }
        },
        523989: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            }), n("789020");
            var a = n("392711"),
                i = n.n(a),
                l = n("454836"),
                d = n("312916"),
                s = n("297483"),
                r = n("244180"),
                o = n("740841"),
                u = n("243393"),
                f = n("911533"),
                g = n("229986"),
                c = n("731865"),
                _ = n("361733"),
                p = n("871831"),
                E = n("328470"),
                N = n("984362"),
                S = n("370275"),
                h = n("281925"),
                C = n("84819"),
                O = n("343720"),
                I = n("23650"),
                A = n("246739"),
                G = n("467006"),
                T = n("551748"),
                D = n("587361");

            function L(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (f.default.isFullServerPreview(e)) return;
                let n = t ? O.default.getOnboardingPromptsForOnboarding(e) : O.default.getOnboardingPrompts(e),
                    a = O.default.getOnboardingResponses(e),
                    i = n.map(e => e.options.filter(e => a.includes(e.id))).flat(),
                    s = {},
                    r = {};
                return (n.forEach(e => {
                    s[e.id] = Date.now(), e.options.forEach(e => r[e.id] = Date.now())
                }), t) ? l.default.post({
                    url: G.Endpoints.GUILD_ONBOARDING_RESPONSES(e),
                    body: {
                        onboarding_responses: i.map(e => e.id),
                        onboarding_prompts_seen: s,
                        onboarding_responses_seen: r
                    }
                }).then(t => {
                    null != t.body && d.default.dispatch({
                        type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
                        guildId: e,
                        options: t.body.onboarding_responses,
                        prompts_seen: t.body.onboarding_prompts_seen,
                        options_seen: t.body.onboarding_responses_seen
                    })
                }).catch(e => h.default.captureException(e)) : l.default.put({
                    url: G.Endpoints.GUILD_ONBOARDING_RESPONSES(e),
                    body: {
                        onboarding_responses: i.map(e => e.id),
                        onboarding_prompts_seen: s,
                        onboarding_responses_seen: r
                    }
                }).then(t => {
                    null != t.body && d.default.dispatch({
                        type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
                        guildId: e,
                        options: t.body.onboarding_responses,
                        prompts_seen: t.body.onboarding_prompts_seen,
                        options_seen: t.body.onboarding_responses_seen
                    })
                }).catch(e => h.default.captureException(e))
            }
            var U = {
                selectOption(e, t, n, a) {
                    let l = O.default.getOnboardingPrompt(t);
                    if (null == l) return;
                    let s = l.singleSelect ? i().without(i().map(l.options, "id"), n) : [];
                    d.default.dispatch({
                        type: "GUILD_ONBOARDING_SELECT_OPTION",
                        guildId: e,
                        promptId: t,
                        optionId: n,
                        selected: a,
                        removedOptionIds: s
                    })
                },
                updateOnboardingResponses: i().debounce(L, 1e3),
                updateRolesLocal: function(e, t, n) {
                    let a = _.default.getSelfMember(e)?.roles ?? [];
                    if (f.default.isViewingRoles(e)) {
                        (0, u.updateImpersonatedRoles)(e, i().difference(i().union(a, t), n));
                        return
                    }(t.length > 0 || n.length > 0) && d.default.dispatch({
                        type: "GUILD_MEMBER_UPDATE_LOCAL",
                        guildId: e,
                        roles: i().difference(i().union(a, t), n),
                        addedRoleIds: t,
                        removedRoleIds: n
                    })
                },
                completeOnboarding(e, t) {
                    let n = t.length > 0 ? t[t.length - 1] : null,
                        a = O.default.getSelectedOptions(e),
                        i = (0, I.getSelectedRoleIds)(a),
                        l = (0, I.getSelectedChannelIds)(a),
                        d = O.default.getEnabled(e) ? O.default.getDefaultChannelIds(e) : [],
                        [o, g] = (0, I.getChannelCoverageForOnboarding)(e, t, d),
                        h = [...l, ...d],
                        U = h.map(e => c.default.getChannel(e)).filter(S.isNotNullish),
                        b = (0, A.getFlattenedChannels)(e, new Set(h), U, !0).length,
                        F = null == n ? [] : n.options.map(e => e.id);
                    if (E.default.track(G.AnalyticEvents.GUILD_ONBOARDING_STEP_COMPLETED, {
                            ...(0, r.collectGuildAnalyticsMetadata)(e),
                            step: t.length - 1,
                            options_selected: null == n ? 0 : a.filter(e => F.includes(e.id)).length,
                            skipped: F.length > 0,
                            back: !1,
                            in_onboarding: !0,
                            is_final_step: !0,
                            roles_granted: i.size,
                            channels_granted: b,
                            guild_onboarding_covered_channel_ids: o.map(e => e.id),
                            guild_onboarding_uncovered_channel_ids: g.map(e => e.id)
                        }), (0, s.ackGuildFeature)(e, D.ReadStateTypes.GUILD_ONBOARDING_QUESTION, C.default.fromTimestamp(Date.now())), L(e, !0), f.default.isFullServerPreview(e)) {
                        (0, u.updateImpersonatedChannels)(e, h, []), (0, u.updateImpersonatedData)(e, {
                            optInEnabled: !0
                        }), (0, u.updateImpersonatedRoles)(e, Array.from(i));
                        let t = p.default.getCurrentUser();
                        if (null != t) {
                            let n = _.default.getMember(e, t.id)?.flags ?? 0;
                            (0, u.updateImpersonatedData)(e, {
                                memberOptions: {
                                    flags: (0, N.setFlag)(n, T.GuildMemberFlags.COMPLETED_ONBOARDING, !0)
                                }
                            })
                        }
                    }
                },
                onboardExistingMember(e, t) {
                    let n = new Set(t);
                    (O.default.getEnabled(e) ? O.default.getDefaultChannelIds(e) : []).forEach(e => n.add(e)), n.size > 0 && (0, g.bulkOptInChannels)(e, Array.from(n), !0, {
                        page: G.AnalyticsPages.GUILD_ONBOARDING
                    })
                },
                finishOnboarding(e) {
                    d.default.dispatch({
                        type: "GUILD_ONBOARDING_COMPLETE",
                        guildId: e
                    })
                },
                setUserOnboardingStep(e, t) {
                    d.default.dispatch({
                        type: "GUILD_ONBOARDING_SET_STEP",
                        guildId: e,
                        step: t
                    })
                },
                async resetOnboarding(e) {
                    let t = p.default.getCurrentUser();
                    if (null != t) {
                        let n = _.default.getMember(e, t.id)?.flags ?? 0;
                        await (0, o.updateGuildSelfMember)(e, {
                            flags: (0, N.setFlag)(n, T.GuildMemberFlags.COMPLETED_ONBOARDING, !1)
                        })
                    }
                }
            }
        },
        329547: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                },
                discardOnboardingPromise: function() {
                    return p
                },
                isOnboardingActiveForGuild: function() {
                    return S
                },
                openAndWaitForOnboarding: function() {
                    return N
                }
            });
            var a = n("512722"),
                i = n.n(a),
                l = n("974328"),
                d = n("181123"),
                s = n("521588"),
                r = n("523989"),
                o = n("953131"),
                u = n("347069"),
                f = n("837354"),
                g = n("467006"),
                c = n("551835");
            let _ = {};

            function p(e) {
                _[e] = null
            }
            async function E(e) {
                let {
                    guildId: t,
                    returnChannelId: n,
                    isPreview: a = !1
                } = e;
                (0, l.closeAllModals)(), i()(null == _[t], "should not double-join guilds");
                let r = await (0, d.waitForGuild)(t);
                if (r.hasFeature(g.GuildFeatures.COMMUNITY)) {
                    if (a)(0, o.startOnboarding)(t);
                    else {
                        if (!r.hasFeature(g.GuildFeatures.GUILD_ONBOARDING)) return;
                        await (0, o.maybeFetchOnboardingPrompts)(t)
                    }
                    u.default.shouldShowOnboarding(t) && (await N(t), null != n && (0, s.transitionTo)(g.Routes.CHANNEL(t, n)))
                }
            }

            function N(e) {
                return new Promise(t => {
                    _[e] = t, (0, f.waitForOnboardingCompletion)(e).then(() => {
                        var t;
                        t = e, _[t]?.(), _[t] = null, r.default.finishOnboarding(e)
                    }), (0, s.transitionTo)(g.Routes.CHANNEL(e, c.StaticChannelRoute.GUILD_ONBOARDING))
                })
            }

            function S(e) {
                return null != _[e]
            }
        },
        837354: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                waitForOnboardingCompletion: function() {
                    return s
                }
            }), n("789020");
            var a = n("361733"),
                i = n("984362"),
                l = n("523989"),
                d = n("551748");

            function s(e) {
                return new Promise(t => {
                    a.default.addConditionalChangeListener(() => {
                        let n = a.default.getSelfMember(e);
                        return !(0, i.hasFlag)(n?.flags ?? 0, d.GuildMemberFlags.COMPLETED_ONBOARDING) || (l.default.finishOnboarding(e), t(), !1)
                    })
                })
            }
        },
        246739: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getFlattenedChannels: function() {
                    return r
                },
                useFlattenedChannels: function() {
                    return o
                }
            }), n("653041");
            var a = n("392711"),
                i = n.n(a),
                l = n("661223"),
                d = n("731865"),
                s = n("370275");

            function r(e, t, n) {
                let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    l = i()(d.default.getMutableGuildChannelsForGuild(e)).values().groupBy("parent_id").value(),
                    r = i()(n).map(e => e.isCategory() ? e.id : e.parent_id).filter(s.isNotNullish).uniq().map(e => d.default.getChannel(e)).filter(s.isNotNullish).sortBy("position").value(),
                    o = new Set(r.map(e => e.id)),
                    u = n.filter(e => !e.isCategory() && (null == e.parent_id || !o.has(e.parent_id)));
                for (let e of (u = i().sortBy(u, e => e.isGuildVocal() ? e.position + 1e4 : e.position), r)) {
                    !a && u.push(e);
                    let d = t.has(e.id) ? l[e.id] : n.filter(t => t.parent_id === e.id);
                    d = i().sortBy(d ?? [], e => e.isGuildVocal() ? e.position + 1e4 : e.position), u.push(...d)
                }
                return u
            }

            function o(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return (0, l.useStateFromStoresArray)([d.default], () => {
                    let a = Array.from(t).map(e => d.default.getChannel(e)).filter(s.isNotNullish);
                    return r(e, t, a, n)
                })
            }
        },
        229986: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                bulkOptInChannels: function() {
                    return A
                },
                dimissFavoriteSuggestion: function() {
                    return L
                },
                setGuildOptIn: function() {
                    return G
                },
                setIsFavorite: function() {
                    return T
                },
                setOptInChannel: function() {
                    return h
                },
                updateOptInChannelsBatched: function() {
                    return I
                },
                updateOptInChannelsImmediate: function() {
                    return C
                }
            });
            var a = n("392711"),
                i = n("310057"),
                l = n("312916"),
                d = n("427388"),
                s = n("244180"),
                r = n("243393"),
                o = n("911533"),
                u = n("778492"),
                f = n("259537"),
                g = n("731865"),
                c = n("301309"),
                _ = n("328470"),
                p = n("984362"),
                E = n("514363"),
                N = n("467006"),
                S = n("746835");

            function h(e, t, n, a) {
                if (null == e) return;
                if (o.default.isFullServerPreview(e)) {
                    (0, r.updateImpersonatedChannels)(e, n ? [t] : [], n ? [] : [t]);
                    return
                }
                let i = c.default.getChannelIdFlags(e, t);
                !n && (i = (0, p.setFlag)(i, S.ChannelNotificationSettingsFlags.FAVORITED, !1));
                let d = (0, E.getCurrentChannelSettings)(e, t),
                    f = {
                        flags: (0, p.setFlag)(i, S.ChannelNotificationSettingsFlags.OPT_IN_ENABLED, n)
                    };
                u.default.saveUserGuildSettingsBulk({
                    [e]: {
                        channel_overrides: {
                            [t]: f
                        }
                    }
                }), l.default.dispatch({
                    type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                    guildId: e,
                    channelId: t,
                    settings: f
                }), (0, E.trackChannelNotificationSettingsUpdate)(e, t, f, d, E.NotificationLabel.optedIn(n), a), D(e), _.default.track(N.AnalyticEvents.CHANNEL_LIST_UPDATED, {
                    ...(0, s.collectGuildAnalyticsMetadata)(e),
                    ...(0, s.collectChannelAnalyticsMetadata)(g.default.getChannel(t)),
                    action_type: n ? "add" : "remove",
                    location: a
                })
            }

            function C(e, t, n, a) {
                if (null == e) return;
                if (o.default.isFullServerPreview(e)) {
                    (0, r.updateImpersonatedChannels)(e, n ? [t] : [], n ? [] : [t]), (0, r.updateImpersonatedData)(e, {
                        optInEnabled: !0
                    });
                    return
                }
                let i = c.default.getChannelIdFlags(e, t);
                !n && (i = (0, p.setFlag)(i, S.ChannelNotificationSettingsFlags.FAVORITED, !1));
                let d = (0, E.getCurrentChannelSettings)(e, t),
                    f = {
                        flags: (0, p.setFlag)(i, S.ChannelNotificationSettingsFlags.OPT_IN_ENABLED, n)
                    };
                if (!c.default.isOptInEnabled(e)) {
                    let n = (0, p.setFlag)(c.default.getGuildFlags(e), S.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON, !0);
                    u.default.saveUserGuildSettingsBulk({
                        [e]: {
                            channel_overrides: {
                                [t]: f
                            },
                            flags: n
                        }
                    })
                }
                l.default.dispatch({
                    type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                    guildId: e,
                    channelId: t,
                    settings: f
                }), (0, E.trackChannelNotificationSettingsUpdate)(e, t, f, d, E.NotificationLabel.optedIn(n), a), D(e), _.default.track(N.AnalyticEvents.CHANNEL_LIST_UPDATED, {
                    ...(0, s.collectGuildAnalyticsMetadata)(e),
                    ...(0, s.collectChannelAnalyticsMetadata)(g.default.getChannel(t)),
                    action_type: n ? "add" : "remove",
                    location: a
                })
            }
            async function O(e, t) {
                if (!(null == e || o.default.isFullServerPreview(e))) await u.default.saveUserGuildSettingsBulk({
                    [e]: {
                        channel_overrides: t
                    }
                }), l.default.dispatch({
                    type: "USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES",
                    guildId: e,
                    updates: t
                })
            }
            let I = (0, a.debounce)((e, t) => O(e, t), 1e3);

            function A(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = arguments.length > 3 ? arguments[3] : void 0;
                if (null == e) return;
                if (o.default.isFullServerPreview(e)) {
                    (0, r.updateImpersonatedChannels)(e, t, []), n && (0, r.updateImpersonatedData)(e, {
                        optInEnabled: !0
                    });
                    return
                }
                let i = {};
                if (t.forEach(t => {
                        let n = c.default.getChannelIdFlags(e, t);
                        i[t] = {
                            flags: (0, p.setFlag)(n, S.ChannelNotificationSettingsFlags.OPT_IN_ENABLED, !0)
                        }
                    }), n) {
                    let t = (0, p.setFlag)(c.default.getGuildFlags(e), S.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON, !0);
                    d.default.updateGuildAndChannelNotificationSettings(e, {
                        flags: t,
                        channel_overrides: i
                    }, E.NotificationLabels.OptedIn), _.default.track(N.AnalyticEvents.CHANNEL_LIST_UPDATED, {
                        ...(0, s.collectGuildAnalyticsMetadata)(e),
                        action_type: "add_many_and_enable_guild",
                        location: a
                    })
                } else d.default.updateChannelOverrideSettingsBulk(e, i, E.NotificationLabels.OptedIn), _.default.track(N.AnalyticEvents.CHANNEL_LIST_UPDATED, {
                    ...(0, s.collectGuildAnalyticsMetadata)(e),
                    action_type: "add_many",
                    location: a
                })
            }

            function G(e, t, n) {
                if (o.default.isFullServerPreview(e)) {
                    (0, r.updateImpersonatedData)(e, {
                        optInEnabled: t
                    });
                    return
                }
                let a = c.default.getGuildFlags(e);
                d.default.updateGuildNotificationSettings(e, {
                    flags: (0, p.setFlag)(a, S.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON, t)
                }, E.NotificationLabel.optedIn(t)), _.default.track(N.AnalyticEvents.CHANNEL_LIST_UPDATED, {
                    ...(0, s.collectGuildAnalyticsMetadata)(e),
                    action_type: t ? "guild_enabled" : "guild_disabled",
                    location: n
                })
            }

            function T(e, t, n, a) {
                if (null == e || o.default.isFullServerPreview(e)) return;
                let i = c.default.getChannelIdFlags(e, t);
                !(0, p.hasFlag)(i, S.ChannelNotificationSettingsFlags.OPT_IN_ENABLED) && n && (i = (0, p.setFlag)(i, S.ChannelNotificationSettingsFlags.OPT_IN_ENABLED, !0)), d.default.updateChannelOverrideSettings(e, t, {
                    flags: (0, p.setFlag)(i, S.ChannelNotificationSettingsFlags.FAVORITED, n)
                }, E.NotificationLabel.favorited(n)), _.default.track(N.AnalyticEvents.CHANNEL_LIST_UPDATED, {
                    ...(0, s.collectGuildAnalyticsMetadata)(e),
                    action_type: n ? "favorited" : "unfavorited",
                    location: a
                })
            }

            function D(e) {
                (0, f.updateUserGuildSettings)(e, e => (!(0, p.hasFlag)(e.guildOnboardingProgress, i.GuildOnboardingProgress.GUILD_NOTICE_CLEARED) || !!(0, p.hasFlag)(e.guildOnboardingProgress, i.GuildOnboardingProgress.GUILD_NOTICE_SHOWN)) && (e.guildOnboardingProgress = (0, p.addFlag)(e.guildOnboardingProgress, i.GuildOnboardingProgress.GUILD_NOTICE_CLEARED), e.guildOnboardingProgress = (0, p.setFlag)(e.guildOnboardingProgress, i.GuildOnboardingProgress.GUILD_NOTICE_SHOWN, !1), !0), f.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function L(e, t) {
                l.default.dispatch({
                    type: "DISMISS_FAVORITE_SUGGESTION",
                    guildId: e,
                    channelId: t
                })
            }
        },
        778492: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a = n("454836"),
                i = n("963694"),
                l = n("823940"),
                d = n("731865"),
                s = n("152551"),
                r = n("467006");
            let o = {},
                u = 0,
                f = 15 * s.default.Millis.SECOND;

            function g() {
                o = {
                    ...l.default.getCollapsedCategories()
                }
            }

            function c() {
                !__OVERLAY__ && (clearTimeout(u), u = setTimeout(() => p({}), f))
            }
            async function _(e, t) {
                null == e || e === r.ME ? await a.default.patch({
                    url: r.Endpoints.USER_GUILD_SETTINGS(r.ME),
                    body: t
                }) : await p(null != t ? {
                    [e ?? r.ME]: t
                } : {})
            }
            async function p(e) {
                clearTimeout(u);
                let t = 0 !== Object.keys(e).length,
                    n = l.default.getCollapsedCategories(),
                    i = function() {
                        let e = {},
                            t = l.default.getCollapsedCategories();
                        for (let n in t) t[n] !== o[n] && (e[n] = !0);
                        for (let n in o) t[n] !== o[n] && (e[n] = !0);
                        return e
                    }();
                for (let a in i) {
                    let i = d.default.getChannel(a);
                    null != i && null != i.guild_id && (!(i.guild_id in e) && (e[i.guild_id] = {}), null == e[i.guild_id].channel_overrides && (e[i.guild_id].channel_overrides = {}), e[i.guild_id].channel_overrides[i.id] = {
                        ...e[i.guild_id].channel_overrides[i.id],
                        collapsed: i.id in n
                    }, t = !0)
                }
                return t ? (o = {
                    ...n
                }, delete e[r.FAVORITES], (await a.default.patch({
                    url: r.Endpoints.USER_GUILD_SETTINGS_BULK,
                    body: {
                        guilds: e
                    }
                })).body) : []
            }

            function E() {
                o = {
                    ...l.default.getCollapsedCategories()
                }
            }
            class N extends i.default {
                constructor(...e) {
                    super(...e), this.actions = {
                        CATEGORY_COLLAPSE: c,
                        CATEGORY_EXPAND: c,
                        CATEGORY_COLLAPSE_ALL: c,
                        CATEGORY_EXPAND_ALL: c,
                        POST_CONNECTION_OPEN: g,
                        USER_GUILD_SETTINGS_FULL_UPDATE: E
                    }, this.saveUserGuildSettings = _, this.saveUserGuildSettingsBulk = p
                }
            }
            var S = new N
        },
        823940: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("661223"),
                i = n("312916"),
                l = n("370275"),
                d = n("731865"),
                s = n("917175"),
                r = n("610043"),
                o = n("467006");
            let u = {},
                f = 0;

            function g() {
                f += 1
            }

            function c(e) {
                if (null == u[e]) return !1;
                delete u[e]
            }
            class _ extends a.default.PersistedStore {
                static #e = this.displayName = "CategoryCollapseStore";
                static #t = this.persistKey = "collapsedCategories";
                initialize(e) {
                    this.waitFor(d.default, s.default), this.removeChangeListener(g), this.addChangeListener(g), u = e ?? {}
                }
                getState() {
                    return u
                }
                isCollapsed(e) {
                    return null != e && "null" !== e && !!u[e] && u[e]
                }
                getCollapsedCategories() {
                    return u
                }
                get version() {
                    return f
                }
            }
            var p = new _(i.default, {
                CONNECTION_OPEN: function(e) {
                    for (let t of (!e.userGuildSettings.partial && (u = {}), e.userGuildSettings.entries))
                        if (null != t.channel_overrides)
                            for (let e of t.channel_overrides) e.collapsed ? u[e.channel_id] = !0 : delete u[e.channel_id]
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    let {
                        userGuildSettings: t
                    } = e, n = new Set(t.map(e => e.guild_id).filter(l.isNotNullish));
                    for (let e in u) {
                        let t = d.default.getChannel(e);
                        null != t && null != t.guild_id && n.has(t.guild_id) && delete u[t.id]
                    }
                    for (let e of t)
                        for (let t of e.channel_overrides) t.collapsed && (u[t.channel_id] = !0)
                },
                CATEGORY_COLLAPSE: function(e) {
                    let {
                        id: t
                    } = e;
                    if (u[t]) return !1;
                    u[t] = !0
                },
                CATEGORY_EXPAND: function(e) {
                    let {
                        id: t
                    } = e;
                    return c(t)
                },
                CATEGORY_COLLAPSE_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    r.default.getChannels(t)[o.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        "null" !== t.id && (u[t.id] = !0)
                    })
                },
                CATEGORY_EXPAND_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    r.default.getChannels(t)[o.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        delete u[t.id]
                    })
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: {
                            id: t
                        }
                    } = e;
                    return c(t)
                }
            })
        }
    }
]);
//# sourceMappingURL=13931.6019ae51f0cb7ba51b6b.js.map