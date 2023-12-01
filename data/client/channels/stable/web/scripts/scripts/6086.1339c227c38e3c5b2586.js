(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["6086"], {
        519705: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007"), n("702976");
            var a = n("872717"),
                l = n("819855"),
                i = n("913144"),
                d = n("679428"),
                s = n("282109"),
                r = n("568734"),
                o = n("34676"),
                u = n("49111"),
                f = n("397336"),
                g = n("782340"),
                c = {
                    open(e) {
                        i.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
                            guildId: e
                        })
                    },
                    close() {
                        i.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                        })
                    },
                    updateGuildNotificationSettings(e, t, n) {
                        let a = (0, o.getCurrentGuildSettings)(e);
                        d.default.saveUserGuildSettings(e, t), i.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, o.trackGuildNotificationSettingsUpdate)(e, t, a, n)
                    },
                    updateGuildAndChannelNotificationSettings(e, t, n) {
                        let a = Object.keys(t.channel_overrides),
                            l = (0, o.getCurrentGuildSettings)(e),
                            s = (0, o.getManyCurrentChannelSettings)(e, a);
                        d.default.saveUserGuildSettings(e, t), i.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, o.trackGuildNotificationSettingsUpdate)(e, t, l, n), Object.keys(t.channel_overrides).forEach(a => {
                            let l = s.get(a);
                            (0, o.trackChannelNotificationSettingsUpdate)(e, a, t.channel_overrides[a], l, n)
                        })
                    },
                    updateGuildNotificationSettingsBulk(e, t) {
                        let n = Object.keys(e),
                            a = (0, o.getManyCurrentGuildSettings)(n);
                        d.default.saveUserGuildSettingsBulk(e), Object.entries(e).forEach(e => {
                            let [n, l] = e, d = a.get(n);
                            i.default.dispatch({
                                type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                                guildId: n,
                                settings: l
                            }), (0, o.trackGuildNotificationSettingsUpdate)(n, l, d, t)
                        })
                    },
                    updateChannelOverrideSettings(e, t, n, a) {
                        let s = (0, o.getCurrentChannelSettings)(e, t);
                        d.default.saveUserGuildSettings(e, {
                            channel_overrides: {
                                [t]: n
                            }
                        }), i.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                            guildId: e,
                            channelId: t,
                            settings: n
                        }), l.AccessibilityAnnouncer.announce(g.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED), (0, o.trackChannelNotificationSettingsUpdate)(e, t, n, s, a)
                    },
                    updateChannelOverrideSettingsBulk(e, t, n) {
                        let a = Object.keys(t),
                            l = (0, o.getManyCurrentChannelSettings)(e, a);
                        d.default.saveUserGuildSettings(e, {
                            channel_overrides: t
                        }), i.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                            guildId: e,
                            overrides: t
                        }), Object.keys(t).forEach(a => (0, o.trackChannelNotificationSettingsUpdate)(e, a, t[a], l.get(a), n))
                    },
                    setForumThreadsCreated(e, t) {
                        let n = t ? f.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON : f.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
                            a = t ? f.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF : f.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
                            l = s.default.getChannelFlags(e);
                        this.updateChannelOverrideSettings(e.guild_id, e.id, {
                            flags: l & ~a | n
                        })
                    },
                    setAccountFlag(e, t) {
                        let n = s.default.accountNotificationSettings.flags,
                            l = (0, r.setFlag)(n, e, t);
                        a.default.patch({
                            url: u.Endpoints.ACCOUNT_NOTIFICATION_SETTINGS,
                            body: {
                                flags: l
                            }
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
            var a = n("872717"),
                l = n("913144"),
                i = n("479756"),
                d = n("38654"),
                s = n("49111");

            function r(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (d.default.isFullServerPreview(e)) {
                    (0, i.updateImpersonatedData)(e, {
                        memberOptions: t
                    });
                    return
                }
                return l.default.dispatch({
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
        921031: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            }), n("834022"), n("222007"), n("702976");
            var a = n("917351"),
                l = n.n(a),
                i = n("249654"),
                d = n("872717"),
                s = n("913144"),
                r = n("267363"),
                o = n("716241"),
                u = n("412355"),
                f = n("479756"),
                g = n("38654"),
                c = n("629220"),
                _ = n("42203"),
                p = n("26989"),
                E = n("697218"),
                N = n("599110"),
                h = n("568734"),
                S = n("449008"),
                O = n("286235"),
                C = n("863636"),
                I = n("380710"),
                A = n("843323"),
                G = n("49111"),
                T = n("657944"),
                D = n("133335");

            function v(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (g.default.isFullServerPreview(e)) return;
                let n = t ? C.default.getOnboardingPromptsForOnboarding(e) : C.default.getOnboardingPrompts(e),
                    a = C.default.getOnboardingResponses(e),
                    l = n.map(e => e.options.filter(e => a.includes(e.id))).flat(),
                    i = {},
                    r = {};
                return (n.forEach(e => {
                    i[e.id] = Date.now(), e.options.forEach(e => r[e.id] = Date.now())
                }), t) ? d.default.post({
                    url: G.Endpoints.GUILD_ONBOARDING_RESPONSES(e),
                    body: {
                        onboarding_responses: l.map(e => e.id),
                        onboarding_prompts_seen: i,
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
                    url: G.Endpoints.GUILD_ONBOARDING_RESPONSES(e),
                    body: {
                        onboarding_responses: l.map(e => e.id),
                        onboarding_prompts_seen: i,
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
                selectOption(e, t, n, a) {
                    let i = C.default.getOnboardingPrompt(t);
                    if (null == i) return;
                    let d = i.singleSelect ? l.without(l.map(i.options, "id"), n) : [];
                    s.default.dispatch({
                        type: "GUILD_ONBOARDING_SELECT_OPTION",
                        guildId: e,
                        promptId: t,
                        optionId: n,
                        selected: a,
                        removedOptionIds: d
                    })
                },
                updateOnboardingResponses: l.debounce(v, 1e3),
                updateRolesLocal: function(e, t, n) {
                    var a, i;
                    let d = null !== (i = null === (a = p.default.getSelfMember(e)) || void 0 === a ? void 0 : a.roles) && void 0 !== i ? i : [];
                    if (g.default.isViewingRoles(e)) {
                        (0, f.updateImpersonatedRoles)(e, l.difference(l.union(d, t), n));
                        return
                    }(t.length > 0 || n.length > 0) && s.default.dispatch({
                        type: "GUILD_MEMBER_UPDATE_LOCAL",
                        guildId: e,
                        roles: l.difference(l.union(d, t), n),
                        addedRoleIds: t,
                        removedRoleIds: n
                    })
                },
                completeOnboarding(e, t) {
                    let n = t.length > 0 ? t[t.length - 1] : null,
                        a = C.default.getSelectedOptions(e),
                        l = (0, I.getSelectedRoleIds)(a),
                        d = (0, I.getSelectedChannelIds)(a),
                        s = C.default.getEnabled(e) ? C.default.getDefaultChannelIds(e) : [],
                        [u, c] = (0, I.getChannelCoverageForOnboarding)(e, t, s),
                        O = [...d, ...s],
                        L = O.map(e => _.default.getChannel(e)).filter(S.isNotNullish),
                        U = (0, A.getFlattenedChannels)(e, new Set(O), L, !0).length,
                        b = null == n ? [] : n.options.map(e => e.id);
                    if (N.default.track(G.AnalyticEvents.GUILD_ONBOARDING_STEP_COMPLETED, {
                            ...(0, o.collectGuildAnalyticsMetadata)(e),
                            step: t.length - 1,
                            options_selected: null == n ? 0 : a.filter(e => b.includes(e.id)).length,
                            skipped: b.length > 0,
                            back: !1,
                            in_onboarding: !0,
                            is_final_step: !0,
                            roles_granted: l.size,
                            channels_granted: U,
                            guild_onboarding_covered_channel_ids: u.map(e => e.id),
                            guild_onboarding_uncovered_channel_ids: c.map(e => e.id)
                        }), (0, r.ackGuildFeature)(e, D.ReadStateTypes.GUILD_ONBOARDING_QUESTION, i.default.fromTimestamp(Date.now())), v(e, !0), g.default.isFullServerPreview(e)) {
                        (0, f.updateImpersonatedChannels)(e, O, []), (0, f.updateImpersonatedData)(e, {
                            optInEnabled: !0
                        }), (0, f.updateImpersonatedRoles)(e, Array.from(l));
                        let t = E.default.getCurrentUser();
                        if (null != t) {
                            var F, y;
                            let n = null !== (y = null === (F = p.default.getMember(e, t.id)) || void 0 === F ? void 0 : F.flags) && void 0 !== y ? y : 0;
                            (0, f.updateImpersonatedData)(e, {
                                memberOptions: {
                                    flags: (0, h.setFlag)(n, T.GuildMemberFlags.COMPLETED_ONBOARDING, !0)
                                }
                            })
                        }
                    }
                },
                onboardExistingMember(e, t) {
                    let n = new Set(t),
                        a = C.default.getEnabled(e) ? C.default.getDefaultChannelIds(e) : [];
                    a.forEach(e => n.add(e)), n.size > 0 && (0, c.bulkOptInChannels)(e, Array.from(n), !0, {
                        page: G.AnalyticsPages.GUILD_ONBOARDING
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
                    let t = E.default.getCurrentUser();
                    if (null != t) {
                        var n, a;
                        let l = null !== (a = null === (n = p.default.getMember(e, t.id)) || void 0 === n ? void 0 : n.flags) && void 0 !== a ? a : 0;
                        await (0, u.updateGuildSelfMember)(e, {
                            flags: (0, h.setFlag)(l, T.GuildMemberFlags.COMPLETED_ONBOARDING, !1)
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
                    return E
                },
                openAndWaitForOnboarding: function() {
                    return N
                },
                isOnboardingActiveForGuild: function() {
                    return h
                }
            });
            var a = n("627445"),
                l = n.n(a),
                i = n("77078"),
                d = n("851387"),
                s = n("393414"),
                r = n("921031"),
                o = n("685829"),
                u = n("471706"),
                f = n("843035"),
                g = n("49111"),
                c = n("724210");
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
                (0, i.closeAllModals)(), l(null == _[t], "should not double-join guilds");
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
                        var t, n;
                        null === (n = _[t = e]) || void 0 === n || n.call(_), _[t] = null, r.default.finishOnboarding(e)
                    }), (0, s.transitionTo)(g.Routes.CHANNEL(e, c.StaticChannelRoute.GUILD_ONBOARDING))
                })
            }

            function h(e) {
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
            var a = n("26989"),
                l = n("568734"),
                i = n("921031"),
                d = n("657944");

            function s(e) {
                return new Promise(t => {
                    a.default.addConditionalChangeListener(() => {
                        var n;
                        let s = a.default.getSelfMember(e);
                        return !(0, l.hasFlag)(null !== (n = null == s ? void 0 : s.flags) && void 0 !== n ? n : 0, d.GuildMemberFlags.COMPLETED_ONBOARDING) || (i.default.finishOnboarding(e), t(), !1)
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
                    return o
                }
            }), n("222007"), n("424973");
            var a = n("917351"),
                l = n.n(a),
                i = n("446674"),
                d = n("42203"),
                s = n("449008");

            function r(e, t, n) {
                let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    i = l(d.default.getMutableGuildChannelsForGuild(e)).values().groupBy("parent_id").value(),
                    r = l(n).map(e => e.isCategory() ? e.id : e.parent_id).filter(s.isNotNullish).uniq().map(e => d.default.getChannel(e)).filter(s.isNotNullish).sortBy("position").value(),
                    o = new Set(r.map(e => e.id)),
                    u = n.filter(e => !e.isCategory() && (null == e.parent_id || !o.has(e.parent_id)));
                for (let e of (u = l.sortBy(u, e => e.isGuildVocal() ? e.position + 1e4 : e.position), r)) {
                    !a && u.push(e);
                    let d = t.has(e.id) ? i[e.id] : n.filter(t => t.parent_id === e.id);
                    d = l.sortBy(null != d ? d : [], e => e.isGuildVocal() ? e.position + 1e4 : e.position), u.push(...d)
                }
                return u
            }

            function o(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = (0, i.useStateFromStoresArray)([d.default], () => {
                        let a = Array.from(t).map(e => d.default.getChannel(e)).filter(s.isNotNullish);
                        return r(e, t, a, n)
                    });
                return a
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
                    return A
                },
                setGuildOptIn: function() {
                    return G
                },
                setIsFavorite: function() {
                    return T
                },
                dimissFavoriteSuggestion: function() {
                    return v
                }
            }), n("222007");
            var a = n("917351"),
                l = n("151426"),
                i = n("913144"),
                d = n("519705"),
                s = n("716241"),
                r = n("479756"),
                o = n("38654"),
                u = n("679428"),
                f = n("872173"),
                g = n("42203"),
                c = n("282109"),
                _ = n("599110"),
                p = n("568734"),
                E = n("34676"),
                N = n("49111"),
                h = n("397336");

            function S(e, t, n, a) {
                if (null == e) return;
                if (o.default.isFullServerPreview(e)) {
                    (0, r.updateImpersonatedChannels)(e, n ? [t] : [], n ? [] : [t]);
                    return
                }
                let l = c.default.getChannelIdFlags(e, t);
                !n && (l = (0, p.setFlag)(l, h.ChannelNotificationSettingsFlags.FAVORITED, !1));
                let d = (0, E.getCurrentChannelSettings)(e, t),
                    f = {
                        flags: (0, p.setFlag)(l, h.ChannelNotificationSettingsFlags.OPT_IN_ENABLED, n)
                    };
                u.default.saveUserGuildSettingsBulk({
                    [e]: {
                        channel_overrides: {
                            [t]: f
                        }
                    }
                }), i.default.dispatch({
                    type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                    guildId: e,
                    channelId: t,
                    settings: f
                }), (0, E.trackChannelNotificationSettingsUpdate)(e, t, f, d, a), D(e), _.default.track(N.AnalyticEvents.CHANNEL_LIST_UPDATED, {
                    ...(0, s.collectGuildAnalyticsMetadata)(e),
                    ...(0, s.collectChannelAnalyticsMetadata)(g.default.getChannel(t)),
                    action_type: n ? "add" : "remove",
                    location: a
                })
            }

            function O(e, t, n, a) {
                if (null == e) return;
                if (o.default.isFullServerPreview(e)) {
                    (0, r.updateImpersonatedChannels)(e, n ? [t] : [], n ? [] : [t]), (0, r.updateImpersonatedData)(e, {
                        optInEnabled: !0
                    });
                    return
                }
                let l = c.default.getChannelIdFlags(e, t);
                !n && (l = (0, p.setFlag)(l, h.ChannelNotificationSettingsFlags.FAVORITED, !1));
                let d = (0, E.getCurrentChannelSettings)(e, t),
                    f = {
                        flags: (0, p.setFlag)(l, h.ChannelNotificationSettingsFlags.OPT_IN_ENABLED, n)
                    };
                if (!c.default.isOptInEnabled(e)) {
                    let n = (0, p.setFlag)(c.default.getGuildFlags(e), h.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON, !0);
                    u.default.saveUserGuildSettingsBulk({
                        [e]: {
                            channel_overrides: {
                                [t]: f
                            },
                            flags: n
                        }
                    })
                }
                i.default.dispatch({
                    type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                    guildId: e,
                    channelId: t,
                    settings: f
                }), (0, E.trackChannelNotificationSettingsUpdate)(e, t, f, d, a), D(e), _.default.track(N.AnalyticEvents.CHANNEL_LIST_UPDATED, {
                    ...(0, s.collectGuildAnalyticsMetadata)(e),
                    ...(0, s.collectChannelAnalyticsMetadata)(g.default.getChannel(t)),
                    action_type: n ? "add" : "remove",
                    location: a
                })
            }
            async function C(e, t) {
                if (!(null == e || o.default.isFullServerPreview(e))) await u.default.saveUserGuildSettingsBulk({
                    [e]: {
                        channel_overrides: t
                    }
                }), i.default.dispatch({
                    type: "USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES",
                    guildId: e,
                    updates: t
                })
            }
            let I = (0, a.debounce)((e, t) => C(e, t), 1e3);

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
                let l = {};
                if (t.forEach(t => {
                        let n = c.default.getChannelIdFlags(e, t);
                        l[t] = {
                            flags: (0, p.setFlag)(n, h.ChannelNotificationSettingsFlags.OPT_IN_ENABLED, !0)
                        }
                    }), n) {
                    let t = (0, p.setFlag)(c.default.getGuildFlags(e), h.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON, !0);
                    d.default.updateGuildAndChannelNotificationSettings(e, {
                        flags: t,
                        channel_overrides: l
                    }), _.default.track(N.AnalyticEvents.CHANNEL_LIST_UPDATED, {
                        ...(0, s.collectGuildAnalyticsMetadata)(e),
                        action_type: "add_many_and_enable_guild",
                        location: a
                    })
                } else d.default.updateChannelOverrideSettingsBulk(e, l), _.default.track(N.AnalyticEvents.CHANNEL_LIST_UPDATED, {
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
                    flags: (0, p.setFlag)(a, h.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON, t)
                }), _.default.track(N.AnalyticEvents.CHANNEL_LIST_UPDATED, {
                    ...(0, s.collectGuildAnalyticsMetadata)(e),
                    action_type: t ? "guild_enabled" : "guild_disabled",
                    location: n
                })
            }

            function T(e, t, n, a) {
                if (null == e || o.default.isFullServerPreview(e)) return;
                let l = c.default.getChannelIdFlags(e, t);
                !(0, p.hasFlag)(l, h.ChannelNotificationSettingsFlags.OPT_IN_ENABLED) && n && (l = (0, p.setFlag)(l, h.ChannelNotificationSettingsFlags.OPT_IN_ENABLED, !0)), d.default.updateChannelOverrideSettings(e, t, {
                    flags: (0, p.setFlag)(l, h.ChannelNotificationSettingsFlags.FAVORITED, n)
                }), _.default.track(N.AnalyticEvents.CHANNEL_LIST_UPDATED, {
                    ...(0, s.collectGuildAnalyticsMetadata)(e),
                    action_type: n ? "favorited" : "unfavorited",
                    location: a
                })
            }

            function D(e) {
                (0, f.updateUserGuildSettings)(e, e => (!(0, p.hasFlag)(e.guildOnboardingProgress, l.GuildOnboardingProgress.GUILD_NOTICE_CLEARED) || !!(0, p.hasFlag)(e.guildOnboardingProgress, l.GuildOnboardingProgress.GUILD_NOTICE_SHOWN)) && (e.guildOnboardingProgress = (0, p.addFlag)(e.guildOnboardingProgress, l.GuildOnboardingProgress.GUILD_NOTICE_CLEARED), e.guildOnboardingProgress = (0, p.setFlag)(e.guildOnboardingProgress, l.GuildOnboardingProgress.GUILD_NOTICE_SHOWN, !1), !0), f.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function v(e, t) {
                i.default.dispatch({
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
            var a = n("917351"),
                l = n.n(a),
                i = n("872717"),
                d = n("689988"),
                s = n("605250"),
                r = n("870691"),
                o = n("42203"),
                u = n("49111");
            let f = {},
                g = new s.default("UserGuildSettingsManager"),
                c = 0;

            function _() {
                f = {
                    ...r.default.getCollapsedCategories()
                }
            }

            function p() {
                !__OVERLAY__ && (clearTimeout(c), c = setTimeout(() => E(), 15e3))
            }
            async function E(e, t) {
                await N(null != t ? {
                    [null != e ? e : u.ME]: t
                } : {})
            }
            async function N(e) {
                clearTimeout(c);
                let t = 0 !== Object.keys(e).length,
                    n = r.default.getCollapsedCategories(),
                    a = function() {
                        let e = {},
                            t = r.default.getCollapsedCategories();
                        for (let n in t) t[n] !== f[n] && (e[n] = !0);
                        for (let n in f) t[n] !== f[n] && (e[n] = !0);
                        return e
                    }();
                for (let l in a) {
                    let a = o.default.getChannel(l);
                    null != a && null != a.guild_id && (!(a.guild_id in e) && (e[a.guild_id] = {}), null == e[a.guild_id].channel_overrides && (e[a.guild_id].channel_overrides = {}), e[a.guild_id].channel_overrides[a.id] = {
                        ...e[a.guild_id].channel_overrides[a.id],
                        collapsed: a.id in n
                    }, t = !0)
                }
                if (!t) return;
                f = {
                    ...n
                };
                let d = l.map(e, (e, t) => ({
                    guildId: t,
                    updates: e,
                    attempts: 0
                }));
                for (; d.length > 0;) {
                    let e = d.shift();
                    if (e.guildId !== u.FAVORITES) try {
                        await i.default.patch({
                            url: u.Endpoints.USER_GUILD_SETTINGS(e.guildId),
                            body: e.updates
                        }), await h(1e3)
                    } catch (t) {
                        g.error(t), e.attempts += 1, e.attempts < 3 && d.push(e), await h(5e3)
                    }
                }
            }

            function h(e) {
                return new Promise(t => setTimeout(t, e + Math.ceil(e * Math.random())))
            }

            function S() {
                f = {
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
                    }, this.saveUserGuildSettings = E, this.saveUserGuildSettingsBulk = N
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
            var a = n("446674"),
                l = n("913144"),
                i = n("449008"),
                d = n("42203"),
                s = n("341542"),
                r = n("923959"),
                o = n("49111");
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
                initialize(e) {
                    this.waitFor(d.default, s.default), this.removeChangeListener(g), this.addChangeListener(g), u = null != e ? e : {}
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
            _.displayName = "CategoryCollapseStore", _.persistKey = "collapsedCategories";
            var p = new _(l.default, {
                CONNECTION_OPEN: function(e) {
                    for (let t of (!e.userGuildSettings.partial && (u = {}), e.userGuildSettings.entries))
                        if (null != t.channel_overrides)
                            for (let e of t.channel_overrides) e.collapsed ? u[e.channel_id] = !0 : delete u[e.channel_id]
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    let {
                        userGuildSettings: t
                    } = e, n = new Set(t.map(e => e.guild_id).filter(i.isNotNullish));
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
//# sourceMappingURL=6086.1339c227c38e3c5b2586.js.map