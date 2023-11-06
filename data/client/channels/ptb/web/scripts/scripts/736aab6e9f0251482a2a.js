(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["6086"], {
        519705: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var i = n("866227"),
                a = n.n(i),
                l = n("819855"),
                d = n("913144"),
                s = n("679428"),
                r = n("282109"),
                u = n("34676"),
                o = n("397336"),
                g = n("782340"),
                f = {
                    open(e) {
                        d.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
                            guildId: e
                        })
                    },
                    close() {
                        d.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                        })
                    },
                    updateGuildNotificationSettings(e, t, n) {
                        let i = (0, u.getCurrentGuildSettings)(e);
                        s.default.saveUserGuildSettings(e, t), d.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, u.trackGuildNotificationSettingsUpdate)(e, t, i, n)
                    },
                    updateGuildAndChannelNotificationSettings(e, t, n) {
                        let i = Object.keys(t.channel_overrides),
                            a = (0, u.getCurrentGuildSettings)(e),
                            l = (0, u.getManyCurrentChannelSettings)(e, i);
                        s.default.saveUserGuildSettings(e, t), d.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, u.trackGuildNotificationSettingsUpdate)(e, t, a, n), Object.keys(t.channel_overrides).forEach(i => {
                            let a = l.get(i);
                            (0, u.trackChannelNotificationSettingsUpdate)(e, i, t.channel_overrides[i], a, n)
                        })
                    },
                    updateGuildNotificationSettingsBulk(e, t) {
                        let n = Object.keys(e),
                            i = (0, u.getManyCurrentGuildSettings)(n);
                        s.default.saveUserGuildSettingsBulk(e), Object.entries(e).forEach(e => {
                            let [n, a] = e, l = i.get(n);
                            d.default.dispatch({
                                type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                                guildId: n,
                                settings: a
                            }), (0, u.trackGuildNotificationSettingsUpdate)(n, a, l, t)
                        })
                    },
                    updateChannelOverrideSettings(e, t, n, i) {
                        let a = (0, u.getCurrentChannelSettings)(e, t);
                        s.default.saveUserGuildSettings(e, {
                            channel_overrides: {
                                [t]: n
                            }
                        }), d.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                            guildId: e,
                            channelId: t,
                            settings: n
                        }), l.AccessibilityAnnouncer.announce(g.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED), (0, u.trackChannelNotificationSettingsUpdate)(e, t, n, a, i)
                    },
                    updateChannelOverrideSettingsBulk(e, t, n) {
                        let i = Object.keys(t),
                            a = (0, u.getManyCurrentChannelSettings)(e, i);
                        s.default.saveUserGuildSettings(e, {
                            channel_overrides: t
                        }), d.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                            guildId: e,
                            overrides: t
                        }), Object.keys(t).forEach(i => (0, u.trackChannelNotificationSettingsUpdate)(e, i, t[i], a.get(i), n))
                    },
                    setForumThreadsCreated(e, t) {
                        let n = t ? o.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON : o.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
                            i = t ? o.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF : o.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
                            a = r.default.getChannelFlags(e);
                        this.updateChannelOverrideSettings(e.guild_id, e.id, {
                            flags: a & ~i | n
                        })
                    },
                    handleCheckboxChange: function(e, t, n, i) {
                        d.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: i.id,
                            profile: e,
                            updatedSettings: {
                                [t]: n
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleSelectChange: function(e, t, n, i) {
                        d.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: i.id,
                            profile: e,
                            updatedSettings: {
                                [t]: n
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleMuteConfigChange: function(e, t, n) {
                        let i = t > 0 ? a().add(t, "second").toISOString() : null;
                        d.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: n.id,
                            profile: "MUTED",
                            updatedSettings: {
                                [e]: {
                                    selected_time_window: t,
                                    end_time: i
                                }
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleHighlightsChange: function(e, t, n) {
                        d.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: n.id,
                            profile: e,
                            updatedSettings: {
                                notifyHighlights: t
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleProfileChange: function(e, t) {
                        d.default.dispatch({
                            type: "GUILD_SET_NOTIFICATION_PROFILE",
                            guildId: t.id,
                            profile: e.value,
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    }
                }
        },
        412355: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateGuildSelfMember: function() {
                    return r
                }
            }), n("702976");
            var i = n("872717"),
                a = n("913144"),
                l = n("479756"),
                d = n("38654"),
                s = n("49111");

            function r(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (d.default.isFullServerPreview(e)) {
                    (0, l.updateImpersonatedData)(e, {
                        memberOptions: t
                    });
                    return
                }
                return a.default.dispatch({
                    type: "GUILD_MEMBER_UPDATE_LOCAL",
                    guildId: e,
                    roles: t.roles,
                    flags: t.flags
                }), i.default.patch({
                    url: s.Endpoints.SET_GUILD_MEMBER(e),
                    body: t,
                    oldFormErrors: !!n || void 0
                })
            }
        },
        921031: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            }), n("834022"), n("222007"), n("702976");
            var i = n("917351"),
                a = n.n(i),
                l = n("249654"),
                d = n("872717"),
                s = n("913144"),
                r = n("267363"),
                u = n("716241"),
                o = n("412355"),
                g = n("479756"),
                f = n("38654"),
                c = n("629220"),
                _ = n("42203"),
                p = n("26989"),
                h = n("697218"),
                E = n("599110"),
                N = n("568734"),
                S = n("449008"),
                O = n("286235"),
                C = n("863636"),
                I = n("380710"),
                G = n("843323"),
                A = n("49111"),
                T = n("657944"),
                D = n("133335");

            function U(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (f.default.isFullServerPreview(e)) return;
                let n = t ? C.default.getOnboardingPromptsForOnboarding(e) : C.default.getOnboardingPrompts(e),
                    i = C.default.getOnboardingResponses(e),
                    a = n.map(e => e.options.filter(e => i.includes(e.id))).flat(),
                    l = {},
                    r = {};
                return (n.forEach(e => {
                    l[e.id] = Date.now(), e.options.forEach(e => r[e.id] = Date.now())
                }), t) ? d.default.post({
                    url: A.Endpoints.GUILD_ONBOARDING_RESPONSES(e),
                    body: {
                        onboarding_responses: a.map(e => e.id),
                        onboarding_prompts_seen: l,
                        onboarding_responses_seen: r
                    }
                }).then(t => {
                    null != t.body && s.default.dispatch({
                        type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
                        guildId: e,
                        options: t.body.onboarding_responses,
                        prompts_seen: t.body.onboarding_prompts_seen,
                        options_seen: t.body.onboarding_responses_seen
                    })
                }).catch(e => O.default.captureException(e)) : d.default.put({
                    url: A.Endpoints.GUILD_ONBOARDING_RESPONSES(e),
                    body: {
                        onboarding_responses: a.map(e => e.id),
                        onboarding_prompts_seen: l,
                        onboarding_responses_seen: r
                    }
                }).then(t => {
                    null != t.body && s.default.dispatch({
                        type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
                        guildId: e,
                        options: t.body.onboarding_responses,
                        prompts_seen: t.body.onboarding_prompts_seen,
                        options_seen: t.body.onboarding_responses_seen
                    })
                }).catch(e => O.default.captureException(e))
            }
            var L = {
                selectOption(e, t, n, i) {
                    let l = C.default.getOnboardingPrompt(t);
                    if (null == l) return;
                    let d = l.singleSelect ? a.without(a.map(l.options, "id"), n) : [];
                    s.default.dispatch({
                        type: "GUILD_ONBOARDING_SELECT_OPTION",
                        guildId: e,
                        promptId: t,
                        optionId: n,
                        selected: i,
                        removedOptionIds: d
                    })
                },
                updateOnboardingResponses: a.debounce(U, 1e3),
                updateRolesLocal: function(e, t, n) {
                    var i, l;
                    let d = null !== (l = null === (i = p.default.getSelfMember(e)) || void 0 === i ? void 0 : i.roles) && void 0 !== l ? l : [];
                    if (f.default.isViewingRoles(e)) {
                        (0, g.updateImpersonatedRoles)(e, a.difference(a.union(d, t), n));
                        return
                    }(t.length > 0 || n.length > 0) && s.default.dispatch({
                        type: "GUILD_MEMBER_UPDATE_LOCAL",
                        guildId: e,
                        roles: a.difference(a.union(d, t), n),
                        addedRoleIds: t,
                        removedRoleIds: n
                    })
                },
                completeOnboarding(e, t) {
                    let n = t.length > 0 ? t[t.length - 1] : null,
                        i = C.default.getSelectedOptions(e),
                        a = (0, I.getSelectedRoleIds)(i),
                        d = (0, I.getSelectedChannelIds)(i),
                        s = C.default.getEnabled(e) ? C.default.getDefaultChannelIds(e) : [],
                        [o, c] = (0, I.getChannelCoverageForOnboarding)(e, t, s),
                        O = [...d, ...s],
                        L = O.map(e => _.default.getChannel(e)).filter(S.isNotNullish),
                        v = (0, G.getFlattenedChannels)(e, new Set(O), L, !0).length,
                        F = null == n ? [] : n.options.map(e => e.id);
                    if (E.default.track(A.AnalyticEvents.GUILD_ONBOARDING_STEP_COMPLETED, {
                            ...(0, u.collectGuildAnalyticsMetadata)(e),
                            step: t.length - 1,
                            options_selected: null == n ? 0 : i.filter(e => F.includes(e.id)).length,
                            skipped: F.length > 0,
                            back: !1,
                            in_onboarding: !0,
                            is_final_step: !0,
                            roles_granted: a.size,
                            channels_granted: v,
                            guild_onboarding_covered_channel_ids: o.map(e => e.id),
                            guild_onboarding_uncovered_channel_ids: c.map(e => e.id)
                        }), (0, r.ackGuildFeature)(e, D.ReadStateTypes.GUILD_ONBOARDING_QUESTION, l.default.fromTimestamp(Date.now())), U(e, !0), f.default.isFullServerPreview(e)) {
                        (0, g.updateImpersonatedChannels)(e, O, []), (0, g.updateImpersonatedData)(e, {
                            optInEnabled: !0
                        }), (0, g.updateImpersonatedRoles)(e, Array.from(a));
                        let t = h.default.getCurrentUser();
                        if (null != t) {
                            var b, y;
                            let n = null !== (y = null === (b = p.default.getMember(e, t.id)) || void 0 === b ? void 0 : b.flags) && void 0 !== y ? y : 0;
                            (0, g.updateImpersonatedData)(e, {
                                memberOptions: {
                                    flags: (0, N.setFlag)(n, T.GuildMemberFlags.COMPLETED_ONBOARDING, !0)
                                }
                            })
                        }
                    }
                },
                onboardExistingMember(e, t) {
                    let n = new Set(t),
                        i = C.default.getEnabled(e) ? C.default.getDefaultChannelIds(e) : [];
                    i.forEach(e => n.add(e)), n.size > 0 && (0, c.bulkOptInChannels)(e, Array.from(n), !0, {
                        page: A.AnalyticsPages.GUILD_ONBOARDING
                    })
                },
                finishOnboarding(e) {
                    s.default.dispatch({
                        type: "GUILD_ONBOARDING_COMPLETE",
                        guildId: e
                    })
                },
                setUserOnboardingStep(e, t) {
                    s.default.dispatch({
                        type: "GUILD_ONBOARDING_SET_STEP",
                        guildId: e,
                        step: t
                    })
                },
                async resetOnboarding(e) {
                    let t = h.default.getCurrentUser();
                    if (null != t) {
                        var n, i;
                        let a = null !== (i = null === (n = p.default.getMember(e, t.id)) || void 0 === n ? void 0 : n.flags) && void 0 !== i ? i : 0;
                        await (0, o.updateGuildSelfMember)(e, {
                            flags: (0, N.setFlag)(a, T.GuildMemberFlags.COMPLETED_ONBOARDING, !1)
                        })
                    }
                }
            }
        },
        937692: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                discardOnboardingPromise: function() {
                    return p
                },
                default: function() {
                    return h
                },
                openAndWaitForOnboarding: function() {
                    return E
                },
                isOnboardingActiveForGuild: function() {
                    return N
                }
            });
            var i = n("627445"),
                a = n.n(i),
                l = n("77078"),
                d = n("851387"),
                s = n("393414"),
                r = n("921031"),
                u = n("685829"),
                o = n("471706"),
                g = n("843035"),
                f = n("49111"),
                c = n("724210");
            let _ = {};

            function p(e) {
                _[e] = null
            }
            async function h(e) {
                let {
                    guildId: t,
                    returnChannelId: n,
                    isPreview: i = !1
                } = e;
                (0, l.closeAllModals)(), a(null == _[t], "should not double-join guilds");
                let r = await (0, d.waitForGuild)(t);
                if (r.hasFeature(f.GuildFeatures.COMMUNITY)) {
                    if (i)(0, u.startOnboarding)(t);
                    else {
                        if (!r.hasFeature(f.GuildFeatures.GUILD_ONBOARDING)) return;
                        await (0, u.maybeFetchOnboardingPrompts)(t)
                    }
                    o.default.shouldShowOnboarding(t) && (await E(t), null != n && (0, s.transitionTo)(f.Routes.CHANNEL(t, n)))
                }
            }

            function E(e) {
                return new Promise(t => {
                    _[e] = t, (0, g.waitForOnboardingCompletion)(e).then(() => {
                        var t, n;
                        null === (n = _[t = e]) || void 0 === n || n.call(_), _[t] = null, r.default.finishOnboarding(e)
                    }), (0, s.transitionTo)(f.Routes.CHANNEL(e, c.StaticChannelRoute.GUILD_ONBOARDING))
                })
            }

            function N(e) {
                return null != _[e]
            }
        },
        843035: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                waitForOnboardingCompletion: function() {
                    return s
                }
            }), n("702976");
            var i = n("26989"),
                a = n("568734"),
                l = n("921031"),
                d = n("657944");

            function s(e) {
                return new Promise(t => {
                    i.default.addConditionalChangeListener(() => {
                        var n;
                        let s = i.default.getSelfMember(e);
                        return !(0, a.hasFlag)(null !== (n = null == s ? void 0 : s.flags) && void 0 !== n ? n : 0, d.GuildMemberFlags.COMPLETED_ONBOARDING) || (l.default.finishOnboarding(e), t(), !1)
                    })
                })
            }
        },
        843323: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getFlattenedChannels: function() {
                    return r
                },
                useFlattenedChannels: function() {
                    return u
                }
            }), n("222007"), n("424973");
            var i = n("917351"),
                a = n.n(i),
                l = n("446674"),
                d = n("42203"),
                s = n("449008");

            function r(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    l = a(d.default.getMutableGuildChannelsForGuild(e)).values().groupBy("parent_id").value(),
                    r = a(n).map(e => e.isCategory() ? e.id : e.parent_id).filter(s.isNotNullish).uniq().map(e => d.default.getChannel(e)).filter(s.isNotNullish).sortBy("position").value(),
                    u = new Set(r.map(e => e.id)),
                    o = n.filter(e => !e.isCategory() && (null == e.parent_id || !u.has(e.parent_id)));
                for (let e of (o = a.sortBy(o, e => e.isGuildVocal() ? e.position + 1e4 : e.position), r)) {
                    !i && o.push(e);
                    let d = t.has(e.id) ? l[e.id] : n.filter(t => t.parent_id === e.id);
                    d = a.sortBy(null != d ? d : [], e => e.isGuildVocal() ? e.position + 1e4 : e.position), o.push(...d)
                }
                return o
            }

            function u(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = (0, l.useStateFromStoresArray)([d.default], () => {
                        let i = Array.from(t).map(e => d.default.getChannel(e)).filter(s.isNotNullish);
                        return r(e, t, i, n)
                    });
                return i
            }
        },
        629220: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setOptInChannel: function() {
                    return S
                },
                updateOptInChannelsImmediate: function() {
                    return O
                },
                updateOptInChannelsBatched: function() {
                    return I
                },
                bulkOptInChannels: function() {
                    return G
                },
                setGuildOptIn: function() {
                    return A
                },
                setIsFavorite: function() {
                    return T
                },
                dimissFavoriteSuggestion: function() {
                    return U
                }
            }), n("222007");
            var i = n("917351"),
                a = n("151426"),
                l = n("913144"),
                d = n("519705"),
                s = n("716241"),
                r = n("479756"),
                u = n("38654"),
                o = n("679428"),
                g = n("872173"),
                f = n("42203"),
                c = n("282109"),
                _ = n("599110"),
                p = n("568734"),
                h = n("34676"),
                E = n("49111"),
                N = n("397336");

            function S(e, t, n, i) {
                if (null == e) return;
                if (u.default.isFullServerPreview(e)) {
                    (0, r.updateImpersonatedChannels)(e, n ? [t] : [], n ? [] : [t]);
                    return
                }
                let a = c.default.getGuildChannelFlags(e, t);
                !n && (a = (0, p.setFlag)(a, N.ChannelNotificationSettingsFlags.FAVORITED, !1));
                let d = (0, h.getCurrentChannelSettings)(e, t),
                    g = {
                        flags: (0, p.setFlag)(a, N.ChannelNotificationSettingsFlags.OPT_IN_ENABLED, n)
                    };
                o.default.saveUserGuildSettingsBulk({
                    [e]: {
                        channel_overrides: {
                            [t]: g
                        }
                    }
                }), l.default.dispatch({
                    type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                    guildId: e,
                    channelId: t,
                    settings: g
                }), (0, h.trackChannelNotificationSettingsUpdate)(e, t, g, d, i), D(e), _.default.track(E.AnalyticEvents.CHANNEL_LIST_UPDATED, {
                    ...(0, s.collectGuildAnalyticsMetadata)(e),
                    ...(0, s.collectChannelAnalyticsMetadata)(f.default.getChannel(t)),
                    action_type: n ? "add" : "remove",
                    location: i
                })
            }

            function O(e, t, n, i) {
                if (null == e) return;
                if (u.default.isFullServerPreview(e)) {
                    (0, r.updateImpersonatedChannels)(e, n ? [t] : [], n ? [] : [t]), (0, r.updateImpersonatedData)(e, {
                        optInEnabled: !0
                    });
                    return
                }
                let a = c.default.getGuildChannelFlags(e, t);
                !n && (a = (0, p.setFlag)(a, N.ChannelNotificationSettingsFlags.FAVORITED, !1));
                let d = (0, h.getCurrentChannelSettings)(e, t),
                    g = {
                        flags: (0, p.setFlag)(a, N.ChannelNotificationSettingsFlags.OPT_IN_ENABLED, n)
                    };
                if (!c.default.isOptInEnabled(e)) {
                    let n = (0, p.setFlag)(c.default.getGuildFlags(e), N.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON, !0);
                    o.default.saveUserGuildSettingsBulk({
                        [e]: {
                            channel_overrides: {
                                [t]: g
                            },
                            flags: n
                        }
                    })
                }
                l.default.dispatch({
                    type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                    guildId: e,
                    channelId: t,
                    settings: g
                }), (0, h.trackChannelNotificationSettingsUpdate)(e, t, g, d, i), D(e), _.default.track(E.AnalyticEvents.CHANNEL_LIST_UPDATED, {
                    ...(0, s.collectGuildAnalyticsMetadata)(e),
                    ...(0, s.collectChannelAnalyticsMetadata)(f.default.getChannel(t)),
                    action_type: n ? "add" : "remove",
                    location: i
                })
            }
            async function C(e, t) {
                if (!(null == e || u.default.isFullServerPreview(e))) await o.default.saveUserGuildSettingsBulk({
                    [e]: {
                        channel_overrides: t
                    }
                }), l.default.dispatch({
                    type: "USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES",
                    guildId: e,
                    updates: t
                })
            }
            let I = (0, i.debounce)((e, t) => C(e, t), 1e3);

            function G(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = arguments.length > 3 ? arguments[3] : void 0;
                if (null == e) return;
                if (u.default.isFullServerPreview(e)) {
                    (0, r.updateImpersonatedChannels)(e, t, []), n && (0, r.updateImpersonatedData)(e, {
                        optInEnabled: !0
                    });
                    return
                }
                let a = {};
                if (t.forEach(t => {
                        let n = c.default.getGuildChannelFlags(e, t);
                        a[t] = {
                            flags: (0, p.setFlag)(n, N.ChannelNotificationSettingsFlags.OPT_IN_ENABLED, !0)
                        }
                    }), n) {
                    let t = (0, p.setFlag)(c.default.getGuildFlags(e), N.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON, !0);
                    d.default.updateGuildAndChannelNotificationSettings(e, {
                        flags: t,
                        channel_overrides: a
                    }), _.default.track(E.AnalyticEvents.CHANNEL_LIST_UPDATED, {
                        ...(0, s.collectGuildAnalyticsMetadata)(e),
                        action_type: "add_many_and_enable_guild",
                        location: i
                    })
                } else d.default.updateChannelOverrideSettingsBulk(e, a), _.default.track(E.AnalyticEvents.CHANNEL_LIST_UPDATED, {
                    ...(0, s.collectGuildAnalyticsMetadata)(e),
                    action_type: "add_many",
                    location: i
                })
            }

            function A(e, t, n) {
                if (u.default.isFullServerPreview(e)) {
                    (0, r.updateImpersonatedData)(e, {
                        optInEnabled: t
                    });
                    return
                }
                let i = c.default.getGuildFlags(e);
                d.default.updateGuildNotificationSettings(e, {
                    flags: (0, p.setFlag)(i, N.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON, t)
                }), _.default.track(E.AnalyticEvents.CHANNEL_LIST_UPDATED, {
                    ...(0, s.collectGuildAnalyticsMetadata)(e),
                    action_type: t ? "guild_enabled" : "guild_disabled",
                    location: n
                })
            }

            function T(e, t, n, i) {
                if (null == e || u.default.isFullServerPreview(e)) return;
                let a = c.default.getGuildChannelFlags(e, t);
                !(0, p.hasFlag)(a, N.ChannelNotificationSettingsFlags.OPT_IN_ENABLED) && n && (a = (0, p.setFlag)(a, N.ChannelNotificationSettingsFlags.OPT_IN_ENABLED, !0)), d.default.updateChannelOverrideSettings(e, t, {
                    flags: (0, p.setFlag)(a, N.ChannelNotificationSettingsFlags.FAVORITED, n)
                }), _.default.track(E.AnalyticEvents.CHANNEL_LIST_UPDATED, {
                    ...(0, s.collectGuildAnalyticsMetadata)(e),
                    action_type: n ? "favorited" : "unfavorited",
                    location: i
                })
            }

            function D(e) {
                (0, g.updateUserGuildSettings)(e, e => (!(0, p.hasFlag)(e.guildOnboardingProgress, a.GuildOnboardingProgress.GUILD_NOTICE_CLEARED) || !!(0, p.hasFlag)(e.guildOnboardingProgress, a.GuildOnboardingProgress.GUILD_NOTICE_SHOWN)) && (e.guildOnboardingProgress = (0, p.addFlag)(e.guildOnboardingProgress, a.GuildOnboardingProgress.GUILD_NOTICE_CLEARED), e.guildOnboardingProgress = (0, p.setFlag)(e.guildOnboardingProgress, a.GuildOnboardingProgress.GUILD_NOTICE_SHOWN, !1), !0), g.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function U(e, t) {
                l.default.dispatch({
                    type: "DISMISS_FAVORITE_SUGGESTION",
                    guildId: e,
                    channelId: t
                })
            }
        },
        679428: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("424973"), n("222007");
            var i = n("917351"),
                a = n.n(i),
                l = n("872717"),
                d = n("689988"),
                s = n("605250"),
                r = n("870691"),
                u = n("42203"),
                o = n("49111");
            let g = {},
                f = new s.default("UserGuildSettingsManager"),
                c = 0;

            function _() {
                g = {
                    ...r.default.getCollapsedCategories()
                }
            }

            function p() {
                !__OVERLAY__ && (clearTimeout(c), c = setTimeout(() => h(), 15e3))
            }
            async function h(e, t) {
                await E(null != t ? {
                    [null != e ? e : o.ME]: t
                } : {})
            }
            async function E(e) {
                clearTimeout(c);
                let t = 0 !== Object.keys(e).length,
                    n = r.default.getCollapsedCategories(),
                    i = function() {
                        let e = {},
                            t = r.default.getCollapsedCategories();
                        for (let n in t) t[n] !== g[n] && (e[n] = !0);
                        for (let n in g) t[n] !== g[n] && (e[n] = !0);
                        return e
                    }();
                for (let a in i) {
                    let i = u.default.getChannel(a);
                    null != i && null != i.guild_id && (!(i.guild_id in e) && (e[i.guild_id] = {}), null == e[i.guild_id].channel_overrides && (e[i.guild_id].channel_overrides = {}), e[i.guild_id].channel_overrides[i.id] = {
                        ...e[i.guild_id].channel_overrides[i.id],
                        collapsed: i.id in n
                    }, t = !0)
                }
                if (!t) return;
                g = {
                    ...n
                };
                let d = a.map(e, (e, t) => ({
                    guildId: t,
                    updates: e,
                    attempts: 0
                }));
                for (; d.length > 0;) {
                    let e = d.shift();
                    if (e.guildId !== o.FAVORITES) try {
                        await l.default.patch({
                            url: o.Endpoints.USER_GUILD_SETTINGS(e.guildId),
                            body: e.updates
                        }), await N(1e3)
                    } catch (t) {
                        f.error(t), e.attempts += 1, e.attempts < 3 && d.push(e), await N(5e3)
                    }
                }
            }

            function N(e) {
                return new Promise(t => setTimeout(t, e + Math.ceil(e * Math.random())))
            }

            function S() {
                g = {
                    ...r.default.getCollapsedCategories()
                }
            }
            class O extends d.default {
                constructor(...e) {
                    super(...e), this.actions = {
                        CATEGORY_COLLAPSE: p,
                        CATEGORY_EXPAND: p,
                        CATEGORY_COLLAPSE_ALL: p,
                        CATEGORY_EXPAND_ALL: p,
                        POST_CONNECTION_OPEN: _,
                        USER_GUILD_SETTINGS_FULL_UPDATE: S
                    }, this.saveUserGuildSettings = h, this.saveUserGuildSettingsBulk = E
                }
            }
            var C = new O
        },
        870691: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var i = n("446674"),
                a = n("913144"),
                l = n("449008"),
                d = n("42203"),
                s = n("341542"),
                r = n("923959"),
                u = n("49111");
            let o = {},
                g = 0;

            function f() {
                g += 1
            }

            function c(e) {
                if (null == o[e]) return !1;
                delete o[e]
            }
            class _ extends i.default.PersistedStore {
                initialize(e) {
                    this.waitFor(d.default, s.default), this.removeChangeListener(f), this.addChangeListener(f), o = null != e ? e : {}
                }
                getState() {
                    return o
                }
                isCollapsed(e) {
                    return null != e && "null" !== e && !!o[e] && o[e]
                }
                getCollapsedCategories() {
                    return o
                }
                get version() {
                    return g
                }
            }
            _.displayName = "CategoryCollapseStore", _.persistKey = "collapsedCategories";
            var p = new _(a.default, {
                CONNECTION_OPEN: function(e) {
                    for (let t of (!e.userGuildSettings.partial && (o = {}), e.userGuildSettings.entries))
                        if (null != t.channel_overrides)
                            for (let e of t.channel_overrides) e.collapsed ? o[e.channel_id] = !0 : delete o[e.channel_id]
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    let {
                        userGuildSettings: t
                    } = e, n = new Set(t.map(e => e.guild_id).filter(l.isNotNullish));
                    for (let e in o) {
                        let t = d.default.getChannel(e);
                        null != t && null != t.guild_id && n.has(t.guild_id) && delete o[t.id]
                    }
                    for (let e of t)
                        for (let t of e.channel_overrides) t.collapsed && (o[t.channel_id] = !0)
                },
                CATEGORY_COLLAPSE: function(e) {
                    let {
                        id: t
                    } = e;
                    if (o[t]) return !1;
                    o[t] = !0
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
                    r.default.getChannels(t)[u.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        "null" !== t.id && (o[t.id] = !0)
                    })
                },
                CATEGORY_EXPAND_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    r.default.getChannels(t)[u.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        delete o[t.id]
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
//# sourceMappingURL=736aab6e9f0251482a2a.js.map