(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["65656"], {
        568131: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchLibrary: function() {
                    return u
                },
                createTestModeLibraryApplications: function() {
                    return o
                },
                setActiveLaunchOptionId: function() {
                    return d
                }
            });
            var s = n("872717"),
                i = n("913144"),
                r = n("370999"),
                a = n("271560"),
                l = n("49111");
            async function u() {
                try {
                    let e = await (0, a.httpGetWithCountryCodeQuery)({
                        url: l.Endpoints.LIBRARY,
                        oldFormErrors: !0
                    }, !1);
                    i.default.dispatch({
                        type: "LIBRARY_FETCH_SUCCESS",
                        libraryApplications: e.body
                    })
                } catch (e) {
                    i.default.dispatch({
                        type: "LIBRARY_FETCH_FAIL",
                        error: e
                    })
                }
            }
            async function o(e) {
                let t = e.primarySkuId;
                if (null == t) return;
                let n = await s.default.get({
                        url: l.Endpoints.APPLICATION_BRANCH_LIST(e.id),
                        oldFormErrors: !0
                    }).then(e => e.body),
                    a = n.map(n => r.default.createForTestMode({
                        id: e.id,
                        skuId: t,
                        branch: n
                    }));
                i.default.dispatch({
                    type: "LIBRARY_APPLICATIONS_TEST_MODE_ENABLED",
                    libraryApplications: a
                })
            }

            function d(e, t, n) {
                i.default.dispatch({
                    type: "LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE",
                    applicationId: e,
                    branchId: t,
                    launchOptionId: n
                })
            }
        },
        671306: function(e, t, n) {
            "use strict";
            n.r(t);
            var s = n("55897");
            n.es(s, t)
        },
        388142: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                initiateChannelPrompts: function() {
                    return E
                },
                forcePrompt: function() {
                    return S
                },
                sendGamingStatsMessage: function() {
                    return f
                },
                updateGamingStats: function() {
                    return _
                }
            });
            var s = n("872717"),
                i = n("295426"),
                r = n("819689"),
                a = n("529805"),
                l = n("42203"),
                u = n("474643"),
                o = n("377253"),
                d = n("659500"),
                c = n("49111");

            function E(e) {
                s.default.post({
                    url: c.Endpoints.INITIATE_CHANNEL_PROMPTS,
                    body: {
                        guild_ids: e
                    }
                })
            }

            function S(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT;
                s.default.post({
                    url: c.Endpoints.FORCE_SEND_PROMPT(e),
                    body: {
                        prompt_type: t
                    }
                })
            }
            async function f(e, t, n) {
                await s.default.post({
                    url: c.Endpoints.SEND_GAMING_STATS(t),
                    body: {
                        message_reference: {
                            guild_id: e,
                            channel_id: t,
                            message_id: n
                        }
                    }
                }), T(t)
            }
            async function _(e) {
                let t = await s.default.patch({
                    url: c.Endpoints.UPDATE_GAMING_STATS(e.channel_id, e.id)
                });
                if (null != t.text && "" !== t.text) {
                    let n = l.default.getChannel(e.channel_id);
                    null != n && ((0, a.createPendingReply)({
                        channel: n,
                        message: e,
                        shouldMention: !1,
                        showMentionToggle: !1
                    }), T(n.id)), i.default.saveDraft(e.channel_id, t.text, u.DraftType.ChannelMessage)
                }
            }

            function T(e) {
                let t = o.default.getMessages(e);
                t.hasMoreAfter ? r.default.jumpToPresent(e, c.MAX_MESSAGES_PER_CHANNEL) : d.ComponentDispatch.dispatch(c.ComponentActions.SCROLLTO_PRESENT)
            }
        },
        696326: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("862205");
            let i = (0, s.createExperiment)({
                kind: "guild",
                id: "2023-03_onboarding_upsell_lifecycle",
                label: "Onboarding Upsell Lifecycle",
                defaultConfig: {
                    showLifecycleUpsells: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show new lifecycle upsells",
                    config: {
                        showLifecycleUpsells: !0
                    }
                }]
            });
            var r = i
        },
        179803: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                shouldShowGuildOnboardingUpsell: function() {
                    return p
                },
                dismissedGuildOnboardingUpsell: function() {
                    return g
                }
            }), n("222007");
            var s = n("866227"),
                i = n.n(s),
                r = n("151426"),
                a = n("801340"),
                l = n("10641"),
                u = n("872173"),
                o = n("374363"),
                d = n("305961"),
                c = n("299039"),
                E = n("696326"),
                S = n("380710"),
                f = n("49111"),
                _ = n("994428");
            let T = [r.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2, r.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE, r.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR],
                C = [0, 1, 7];

            function p(e, t) {
                var n;
                let s = d.default.getGuilds(),
                    r = c.default.entries(s).some(e => {
                        let [t, n] = e, s = (0, S.isGuildOnboardingSettingsAvailable)(t), i = n.hasFeature(f.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
                        return s && i
                    });
                if (r || !(0, S.isGuildOnboardingSettingsAvailable)(e)) return !1;
                let u = null === (n = o.default.settings.userContent) || void 0 === n ? void 0 : n.guildOnboardingUpsellDismissedAt,
                    _ = null != u ? a.Timestamp.toDate(u) : void 0,
                    p = null != _ ? i().diff(_, "days") : null,
                    g = T.indexOf(t);
                if (-1 === g) return !1;
                let A = null == p || p > C[g];
                if (!A) return !1;
                let h = T.find(e => !(0, l.isDismissibleContentDismissed)(e)) === t;
                if (!h) return !1;
                let {
                    showLifecycleUpsells: I
                } = E.default.getCurrentConfig({
                    guildId: e,
                    location: "7f5b67_1"
                }, {
                    disable: r || !(0, S.isGuildOnboardingSettingsAvailable)(e),
                    autoTrackExposure: !0
                });
                return I
            }

            function g(e, t) {
                let n = a.Timestamp.now();
                u.PreloadedUserSettingsActionCreators.updateAsync("userContent", e => {
                    e.guildOnboardingUpsellDismissedAt = n
                }, u.UserSettingsDelay.INFREQUENT_USER_ACTION), null != t && (0, l.markDismissibleContentAsDismissed)(t, {
                    forceTrack: !0,
                    dismissAction: _.ContentDismissActionType.AUTO,
                    guildId: e
                })
            }
        },
        933326: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var s = n("689988"),
                i = n("21121"),
                r = n("162771"),
                a = n("398604"),
                l = n("322224");
            let u = {},
                o = new Set,
                d = async e => {
                    let t = a.default.getGuildScheduledEventsForGuild(e);
                    if (0 !== t.length) {
                        if (!o.has(e)) try {
                            await l.default.getGuildEventsForCurrentUser(e), o.add(e)
                        } catch (e) {}
                    }
                };
            class c extends s.default {
                async getGuildEventUserCounts(e, t, n) {
                    let s = n.filter(n => null == u["".concat(e, "-").concat(t, "-").concat(n)] || Date.now() - u["".concat(e, "-").concat(t, "-").concat(n)] > 18e5);
                    if (!(Date.now() - u["".concat(e, "-").concat(t)] < 18e5) || 0 !== s.length) {
                        u["".concat(e, "-").concat(t)] = Date.now(), s.forEach(n => u["".concat(e, "-").concat(t, "-").concat(n)] = Date.now());
                        try {
                            await l.default.fetchGuildEventUserCounts(e, t, s)
                        } catch (e) {}
                    }
                }
                getGuildEventUsers(e, t, n) {
                    return l.default.fetchUsersForGuildEvent(e, t, n)
                }
                getGuildEventsForCurrentUser(e) {
                    return d(e)
                }
                handleConnectionOpen() {
                    o.clear(), u = {};
                    let e = (0, i.isInMainTabsExperiment)(),
                        t = r.default.getLastSelectedGuildId();
                    if (e && null != t) {
                        let e = a.default.getGuildScheduledEventsForGuild(t);
                        e.forEach(e => this.getGuildEventUserCounts(t, e.id, []))
                    }
                }
                handleGuildUnavailable(e) {
                    let {
                        guildId: t
                    } = e;
                    o.delete(t), delete u[t]
                }
                handleGuildDelete(e) {
                    let {
                        guild: t
                    } = e, n = t.id;
                    o.delete(n), delete u[n]
                }
                handleInviteResolveSuccess(e) {
                    var t;
                    let {
                        invite: n
                    } = e, s = n.guild_scheduled_event, i = null === (t = n.guild) || void 0 === t ? void 0 : t.id;
                    null != s && null != i && d(i)
                }
                handleChannelSelect(e) {
                    let {
                        guildId: t
                    } = e;
                    if (null == t) return;
                    let n = a.default.getGuildScheduledEventsForGuild(t);
                    n.forEach(e => this.getGuildEventUserCounts(t, e.id, []))
                }
                constructor(...e) {
                    super(...e), this.actions = {
                        POST_CONNECTION_OPEN: () => this.handleConnectionOpen(),
                        GUILD_DELETE: e => this.handleGuildDelete(e),
                        GUILD_UNAVAILABLE: e => this.handleGuildUnavailable(e),
                        INVITE_RESOLVE_SUCCESS: e => this.handleInviteResolveSuccess(e),
                        CHANNEL_SELECT: e => this.handleChannelSelect(e)
                    }
                }
            }
            var E = new c
        },
        596512: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007"), n("424973");
            var s = n("693566"),
                i = n.n(s),
                r = n("689988"),
                a = n("599110"),
                l = n("49111");
            class u extends r.default {
                handleMessageBecameVisible(e) {
                    let {
                        messageId: t
                    } = e;
                    if (null != this.currentlyVisibleMessageTimers[t] || this.viewsInCurrentChannel.has(t)) return;
                    let n = this.recentViewTimes.get(t);
                    if (null != n && Date.now() - n < 6e4) return;
                    let s = setTimeout(() => {
                        delete this.currentlyVisibleMessageTimers[t], this.viewsInCurrentChannel.add(t), this.recentViewTimes.set(t, Date.now()), this.bufferViewTrack(e)
                    }, 1e3);
                    this.currentlyVisibleMessageTimers[t] = s
                }
                handleMessageLostVisibility(e) {
                    let t = this.currentlyVisibleMessageTimers[e];
                    null != t && (clearTimeout(t), delete this.currentlyVisibleMessageTimers[e])
                }
                handleMessageListVisibilityChange(e) {
                    for (let t of e) this.handleMessageBecameVisible(t);
                    let t = new Set(e.map(e => e.messageId));
                    for (let e of Object.keys(this.currentlyVisibleMessageTimers)) !t.has(e) && this.handleMessageLostVisibility(e)
                }
                handleChannelSelect() {
                    for (let e of Object.values(this.currentlyVisibleMessageTimers)) clearTimeout(e);
                    this.currentlyVisibleMessageTimers = {}, this.viewsInCurrentChannel.clear(), this.drainBuffer()
                }
                drainBuffer() {
                    for (let e of this.batchBuffer) a.default.track(l.AnalyticEvents.ANNOUNCEMENT_MESSAGE_VIEWED, {
                        message_id: e.messageId,
                        channel_id: e.channelId,
                        guild_id: e.guildId,
                        source_channel_id: e.sourceChannelId,
                        source_guild_id: e.sourceGuildId
                    });
                    this.batchBuffer = [], null != this.batchTimerId && (clearTimeout(this.batchTimerId), this.batchTimerId = null)
                }
                bufferViewTrack(e) {
                    this.batchBuffer.length >= 10 && this.drainBuffer(), this.batchBuffer.push(e), null == this.batchTimerId && (this.batchTimerId = setTimeout(() => this.drainBuffer(), 2e3))
                }
                constructor(...e) {
                    super(...e), this.currentlyVisibleMessageTimers = {}, this.viewsInCurrentChannel = new Set, this.recentViewTimes = new i({
                        max: 500,
                        maxAge: 6e4
                    }), this.batchBuffer = [], this.batchTimerId = null, this.actions = {
                        CHANNEL_SELECT: () => this.handleChannelSelect()
                    }
                }
            }
            var o = new u
        },
        935583: function(e, t, n) {
            "use strict";
            var s, i, r, a;
            n.r(t), n.d(t, {
                dirtyChars: function() {
                    return l
                },
                coalescePeriods: function() {
                    return u
                },
                EditState: function() {
                    return s
                },
                PomeloEntrypoints: function() {
                    return i
                },
                MAX_DISPLAY_NAME_LENGTH: function() {
                    return o
                },
                POMELO_KEYWORD: function() {
                    return d
                },
                CONTROL_CHARACTERS_CODE: function() {
                    return c
                },
                TIMEOUT_TIME: function() {
                    return E
                }
            });
            let l = /([^A-Za-z0-9_.]+)/g,
                u = /\.+/g;
            (r = s || (s = {})).NONE = "none", r.EDIT_DISPLAY_NAME = "display-name", r.EDIT_USERNAME = "username", r.PREVIEW = "preview", r.SUGGESTION = "suggestion", (a = i || (i = {})).APP_START = "app start", a.NOTICE = "notice", a.USER_SETTINGS = "user settings", a.USER_SETTINGS_EDIT = "user settings edit", a.YOU_TAB = "you tab";
            let o = 32,
                d = "pomelo",
                c = [1564, 917505, 12644, 65279, 173, 6068, 10240, 4447, 847, 4448, 65440],
                E = 2e3
        },
        553257: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                experiment: function() {
                    return i
                },
                usePomeloEligibility: function() {
                    return r
                },
                getPomeloEligibility: function() {
                    return a
                }
            });
            var s = n("862205");
            let i = (0, s.createExperiment)({
                    kind: "user",
                    label: "Pomelo",
                    id: "2023-03_pomelo",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                r = () => {
                    let {
                        enabled: e
                    } = i.useExperiment({
                        location: "faf26d_1"
                    }, {
                        autoTrackExposure: !1
                    });
                    return e
                },
                a = () => {
                    let {
                        enabled: e
                    } = i.getCurrentConfig({
                        location: "faf26d_2"
                    }, {
                        autoTrackExposure: !1
                    });
                    return e
                }
        },
        42060: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceMigration: function() {
                    return r
                },
                getForceMigration: function() {
                    return a
                }
            });
            var s = n("862205");
            let i = (0, s.createExperiment)({
                    kind: "user",
                    id: "2024-01_uu_forced_migration",
                    label: "Unique Username Forced Migration UI",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable Forced Migration UI",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                r = () => {
                    let {
                        enabled: e
                    } = i.useExperiment({
                        location: "force_migration"
                    }, {
                        autoTrackExposure: !1
                    });
                    return e
                },
                a = () => {
                    let {
                        enabled: e
                    } = i.getCurrentConfig({
                        location: "force_migration"
                    }, {
                        autoTrackExposure: !1
                    });
                    return e
                }
        },
        363861: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("77078");
            async function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                await (0, i.openModalLazy)(async () => {
                    let {
                        default: i
                    } = await n.el("892845").then(n.bind(n, "892845"));
                    return n => (0, s.jsx)(i, {
                        source: e,
                        oneClickFlow: t,
                        ...n
                    })
                })
            }
        },
        448881: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchCurrentQuests: function() {
                    return o
                },
                sendHeartbeat: function() {
                    return d
                },
                enrollInQuest: function() {
                    return c
                },
                claimQuestRewardCode: function() {
                    return E
                },
                fetchQuestRewardCode: function() {
                    return S
                },
                dismissQuestContent: function() {
                    return f
                }
            });
            var s = n("872717"),
                i = n("913144"),
                r = n("599417"),
                a = n("2973"),
                l = n("227231"),
                u = n("49111");
            async function o() {
                if (!a.default.isFetchingCurrentQuests) {
                    i.default.dispatch({
                        type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN"
                    });
                    try {
                        let e = await s.default.get({
                                url: u.Endpoints.QUESTS_CURRENT_QUESTS
                            }),
                            t = e.body.quests.map(e => (0, l.questWithUserStatusFromServer)(e)),
                            n = t.filter(e => {
                                var t;
                                return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || e.config.rewardCodePlatforms.length > 0
                            });
                        i.default.dispatch({
                            type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
                            quests: n
                        })
                    } catch (e) {
                        i.default.dispatch({
                            type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE",
                            error: new r.default(e)
                        })
                    }
                }
            }
            async function d(e) {
                let {
                    questId: t,
                    streamKey: n,
                    applicationId: a
                } = e;
                try {
                    let e = await s.default.post({
                        url: u.Endpoints.QUESTS_HEARTBEAT(t),
                        body: {
                            stream_key: n,
                            application_id: a
                        }
                    });
                    i.default.dispatch({
                        type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
                        userStatus: (0, l.questUserStatusFromServer)(e.body),
                        applicationId: a,
                        questId: t,
                        streamKey: n
                    })
                } catch (e) {
                    i.default.dispatch({
                        type: "QUESTS_SEND_HEARTBEAT_FAILURE",
                        error: new r.default(e),
                        questId: t,
                        streamKey: n
                    })
                }
            }
            async function c(e) {
                let t = a.default.isEnrolling(e);
                if (!t) {
                    i.default.dispatch({
                        type: "QUESTS_ENROLL_BEGIN",
                        questId: e
                    });
                    try {
                        let t = await s.default.post({
                            url: u.Endpoints.QUESTS_ENROLL(e)
                        });
                        i.default.dispatch({
                            type: "QUESTS_ENROLL_SUCCESS",
                            enrolledQuestUserStatus: (0, l.questUserStatusFromServer)(t.body)
                        })
                    } catch (t) {
                        i.default.dispatch({
                            type: "QUESTS_ENROLL_FAILURE",
                            questId: e
                        })
                    }
                }
            }
            async function E(e, t) {
                let n = a.default.isClaimingRewardCode(e);
                if (!n) {
                    i.default.dispatch({
                        type: "QUESTS_CLAIM_REWARD_CODE_BEGIN",
                        questId: e
                    });
                    try {
                        let n = await s.default.post({
                            url: u.Endpoints.QUESTS_REWARD_CODE(e),
                            body: {
                                platform: t
                            }
                        });
                        i.default.dispatch({
                            type: "QUESTS_CLAIM_REWARD_CODE_SUCCESS",
                            questId: e,
                            rewardCode: (0, l.questsRewardCodeFromServer)(n.body)
                        })
                    } catch (t) {
                        throw i.default.dispatch({
                            type: "QUESTS_CLAIM_REWARD_CODE_FAILURE",
                            error: new r.default(t),
                            questId: e
                        }), t
                    }
                }
            }
            async function S(e) {
                let t = a.default.isFetchingRewardCode(e);
                if (!t) {
                    i.default.dispatch({
                        type: "QUESTS_FETCH_REWARD_CODE_BEGIN",
                        questId: e
                    });
                    try {
                        let t = await s.default.get({
                            url: u.Endpoints.QUESTS_REWARD_CODE(e)
                        });
                        i.default.dispatch({
                            type: "QUESTS_FETCH_REWARD_CODE_SUCCESS",
                            questId: e,
                            rewardCode: (0, l.questsRewardCodeFromServer)(t.body)
                        })
                    } catch (t) {
                        throw i.default.dispatch({
                            type: "QUESTS_FETCH_REWARD_CODE_FAILURE",
                            error: new r.default(t),
                            questId: e
                        }), t
                    }
                }
            }
            async function f(e, t) {
                let n = a.default.isDismissingContent(e);
                if (!n) {
                    i.default.dispatch({
                        type: "QUESTS_DISMISS_CONTENT_BEGIN",
                        questId: e,
                        content: t
                    });
                    try {
                        let n = await s.default.post({
                            url: u.Endpoints.QUESTS_DISMISS_CONTENT(e, t),
                            body: {}
                        });
                        i.default.dispatch({
                            type: "QUESTS_DISMISS_CONTENT_SUCCESS",
                            dismissedQuestUserStatus: (0, l.questUserStatusFromServer)(n.body)
                        })
                    } catch (t) {
                        i.default.dispatch({
                            type: "QUESTS_DISMISS_CONTENT_FAILURE",
                            error: new r.default(t),
                            questId: e
                        })
                    }
                }
            }
        },
        166604: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                QuestsExperimentLocations: function() {
                    return i
                },
                DismissibleQuestContentFlags: function() {
                    return a
                }
            });
            var s, i, r = n("588025");
            (s = i || (i = {})).ACTIVITY_PANEL = "quests_bar_activity_panel", s.QUESTS_MANAGER = "quests_manager", s.USER_SETTINGS_GIFT_INVENTORY = "user_settings_gift_inventory", s.USE_QUESTS = "use_quests";
            let a = {
                [r.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE]: 1,
                [r.QuestContent.QUEST_BAR]: 2
            }
        },
        374023: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getIsEligibleForQuests: function() {
                    return a
                },
                useIsEligibleForQuests: function() {
                    return l
                }
            });
            var s = n("619935"),
                i = n("862205");
            let r = (0, i.createExperiment)({
                    id: "2023-12_quests",
                    kind: "user",
                    label: "Quests",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 0,
                        label: "Control",
                        config: {
                            enabled: !1
                        }
                    }, {
                        id: 1,
                        label: "Quests enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                a = e => {
                    let {
                        location: t,
                        autoTrackExposure: n
                    } = e, i = r.getCurrentConfig({
                        location: t
                    }, {
                        autoTrackExposure: n
                    }), a = s.default.getCurrentConfig({
                        location: t
                    }, {
                        autoTrackExposure: n
                    });
                    return i.enabled && !a.paymentsBlocked
                },
                l = e => {
                    let {
                        location: t,
                        autoTrackExposure: n
                    } = e, i = r.useExperiment({
                        location: t
                    }, {
                        autoTrackExposure: n
                    }), a = s.default.useExperiment({
                        location: t
                    }, {
                        autoTrackExposure: n
                    });
                    return i.enabled && !a.paymentsBlocked
                }
        },
        2973: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var s = n("446674"),
                i = n("913144");
            let r = !1,
                a = new Map,
                l = 0,
                u = new Set,
                o = new Set,
                d = new Set,
                c = new Set,
                E = new Map;

            function S(e, t) {
                a = new Map(a);
                let n = a.get(e);
                null != n && a.set(e, {
                    ...n,
                    ...t
                })
            }

            function f(e, t) {
                let n = new Map(E);
                n.set(e, t), E = n;
                let s = a.get(e),
                    i = null == s ? void 0 : s.userStatus;
                if (null != i && null == i.claimedAt) {
                    let n = {
                        userStatus: {
                            ...i,
                            claimedAt: t.claimedAt
                        }
                    };
                    S(e, n)
                }
            }

            function _(e) {
                let t = new Set(u);
                t.delete(e), u = t
            }

            function T(e) {
                let t = new Set(c);
                t.delete(e), c = t
            }
            class C extends s.default.Store {
                get quests() {
                    return a
                }
                get isFetchingCurrentQuests() {
                    return r
                }
                get lastFetchedCurrentQuests() {
                    return l
                }
                isEnrolling(e) {
                    return u.has(e)
                }
                isClaimingRewardCode(e) {
                    return o.has(e)
                }
                isFetchingRewardCode(e) {
                    return d.has(e)
                }
                isDismissingContent(e) {
                    return c.has(e)
                }
                getRewardCode(e) {
                    return E.get(e)
                }
            }
            C.displayName = "QuestsStore";
            var p = new C(i.default, {
                LOGOUT: function() {
                    r = !1, a = new Map, l = 0, u = new Set
                },
                QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function() {
                    l = Date.now(), r = !0
                },
                QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function(e) {
                    let {
                        quests: t
                    } = e;
                    for (let e of (r = !1, a = new Map, t)) a.set(e.id, e)
                },
                QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function() {
                    l = 0, r = !1
                },
                QUESTS_SEND_HEARTBEAT_SUCCESS: function(e) {
                    let {
                        questId: t,
                        userStatus: n
                    } = e;
                    S(t, {
                        userStatus: n
                    })
                },
                QUESTS_ENROLL_BEGIN: function(e) {
                    let {
                        questId: t
                    } = e, n = new Set(u);
                    n.add(t), u = n
                },
                QUESTS_ENROLL_SUCCESS: function(e) {
                    let {
                        enrolledQuestUserStatus: t
                    } = e;
                    S(t.questId, {
                        userStatus: t
                    }), _(t.questId)
                },
                QUESTS_ENROLL_FAILURE: function(e) {
                    let {
                        questId: t
                    } = e;
                    _(t)
                },
                QUESTS_FETCH_REWARD_CODE_BEGIN: function(e) {
                    let {
                        questId: t
                    } = e, n = new Set(d);
                    n.add(t), d = n
                },
                QUESTS_FETCH_REWARD_CODE_SUCCESS: function(e) {
                    let {
                        questId: t,
                        rewardCode: n
                    } = e, s = new Set(d);
                    s.delete(t), d = s, f(t, n)
                },
                QUESTS_FETCH_REWARD_CODE_FAILURE: function(e) {
                    let {
                        questId: t
                    } = e, n = new Set(d);
                    n.delete(t), d = n
                },
                QUESTS_CLAIM_REWARD_CODE_BEGIN: function(e) {
                    let {
                        questId: t
                    } = e, n = new Set(o);
                    n.add(t), o = n
                },
                QUESTS_CLAIM_REWARD_CODE_SUCCESS: function(e) {
                    let {
                        questId: t,
                        rewardCode: n
                    } = e, s = new Set(o);
                    s.delete(t), o = s, f(t, n)
                },
                QUESTS_CLAIM_REWARD_CODE_FAILURE: function(e) {
                    let {
                        questId: t
                    } = e, n = new Set(o);
                    n.delete(t), o = n
                },
                QUESTS_DISMISS_CONTENT_BEGIN: function(e) {
                    let {
                        questId: t
                    } = e, n = new Set(c);
                    n.add(t), c = n
                },
                QUESTS_DISMISS_CONTENT_SUCCESS: function(e) {
                    let {
                        dismissedQuestUserStatus: t
                    } = e;
                    S(t.questId, {
                        userStatus: t
                    }), T(t.questId)
                },
                QUESTS_DISMISS_CONTENT_FAILURE: function(e) {
                    let {
                        questId: t
                    } = e;
                    T(t)
                }
            })
        },
        588025: function(e, t, n) {
            "use strict";
            var s, i, r, a;
            n.r(t), n.d(t, {
                QuestRewardCodePlatforms: function() {
                    return s
                },
                QUEST_REWARD_CODE_PLATFORMS_SET: function() {
                    return l
                },
                QuestContent: function() {
                    return i
                }
            }), n("222007"), (r = s || (s = {}))[r.CROSS_PLATFORM = 0] = "CROSS_PLATFORM", r[r.XBOX = 1] = "XBOX", r[r.PLAYSTATION = 2] = "PLAYSTATION", r[r.SWITCH = 3] = "SWITCH", r[r.PC = 4] = "PC";
            let l = new Set(Object.values(s).filter(e => "number" == typeof e));
            (a = i || (i = {}))[a.GIFT_INVENTORY_SETTINGS_BADGE = 0] = "GIFT_INVENTORY_SETTINGS_BADGE", a[a.QUEST_BAR = 1] = "QUEST_BAR", a[a.QUEST_INVENTORY_CARD = 2] = "QUEST_INVENTORY_CARD", a[a.QUESTS_EMBED = 3] = "QUESTS_EMBED"
        },
        227231: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getQuestByApplicationId: function() {
                    return u
                },
                questUserStatusFromServer: function() {
                    return d
                },
                questWithUserStatusFromServer: function() {
                    return c
                },
                questsRewardCodeFromServer: function() {
                    return E
                },
                getRewardAssetUrl: function() {
                    return S
                },
                getHeroStaticAssetUrl: function() {
                    return f
                },
                getHeroAnimatedAssetUrl: function() {
                    return _
                },
                getQuestBarStaticHeroAssetUrl: function() {
                    return T
                },
                getQuestBarAnimatedHeroAssetUrl: function() {
                    return C
                },
                getGameTileAssetUrl: function() {
                    return p
                },
                getGameLogotypeAssetUrl: function() {
                    return g
                },
                getQuestForTargetedContent: function() {
                    return A
                },
                getPlatformString: function() {
                    return h
                },
                calculatePercentComplete: function() {
                    return I
                },
                getContextualEntrypointHeading: function() {
                    return m
                },
                isDismissible: function() {
                    return R
                },
                isDismissed: function() {
                    return N
                }
            }), n("222007");
            var s = n("568734"),
                i = n("588025"),
                r = n("166604"),
                a = n("782340");
            let l = "https://cdn.discordapp.com/assets/quests/";

            function u(e, t) {
                let n;
                for (let [s, i] of e)
                    if (i.config.applicationId === t && !o(i)) {
                        n = i;
                        break
                    } return n
            }

            function o(e) {
                let t = new Date(e.config.expiresAt);
                return t.valueOf() <= Date.now()
            }

            function d(e) {
                return {
                    userId: e.user_id,
                    questId: e.quest_id,
                    enrolledAt: e.enrolled_at,
                    completedAt: e.completed_at,
                    claimedAt: e.claimed_at,
                    lastStreamHeartbeatAt: e.last_stream_heartbeat_at,
                    streamProgressSeconds: e.stream_progress_seconds,
                    dismissedQuestContent: e.dismissed_quest_content
                }
            }

            function c(e) {
                var t, n, s;
                return {
                    id: e.id,
                    config: {
                        expiresAt: (t = e.config).expires_at,
                        streamDurationRequirementMinutes: t.stream_duration_requirement_minutes,
                        gameTitle: t.game_title,
                        getGameLink: t.get_game_link,
                        applicationId: t.application_id,
                        messages: {
                            questName: (n = t.messages).quest_name,
                            rewardName: n.reward_name,
                            rewardNameWithArticle: n.reward_name_with_article,
                            rewardRedemptionInstructionsByPlatform: function(e) {
                                let t = {};
                                for (let n in e) {
                                    let s = parseInt(n);
                                    i.QUEST_REWARD_CODE_PLATFORMS_SET.has(s) && (t[s] = e[n])
                                }
                                return t
                            }(n.reward_redemption_instructions_by_platform),
                            gameTitle: n.game_title,
                            gamePublisher: n.game_publisher
                        },
                        colors: {
                            primary: (s = t.colors).primary,
                            secondary: s.secondary
                        },
                        rewardCodePlatforms: t.reward_code_platforms.filter(e => i.QUEST_REWARD_CODE_PLATFORMS_SET.has(e)),
                        videoAssets: t.video_assets
                    },
                    userStatus: null == e.user_status ? null : d(e.user_status),
                    targetedContent: e.targeted_content
                }
            }

            function E(e) {
                return {
                    userId: e.user_id,
                    questId: e.quest_id,
                    code: e.code,
                    platform: e.platform,
                    claimedAt: e.claimed_at
                }
            }
            let S = e => "".concat(l).concat(e).concat("/reward.png"),
                f = e => "".concat(l).concat(e).concat("/hero.png"),
                _ = e => "".concat(l).concat(e).concat("/hero.webm"),
                T = e => "".concat(l).concat(e).concat("/quests_bar_hero.png"),
                C = e => "".concat(l).concat(e).concat("/quests_bar_hero.webm"),
                p = e => "".concat(l).concat(e).concat("/game_tile.png"),
                g = (e, t) => "".concat(l).concat(e, "/").concat(t).concat("/game_logotype.png");

            function A(e, t) {
                for (let [n, s] of e)
                    if (!o(s) && s.targetedContent.includes(t)) return s;
                return null
            }
            let h = e => {
                switch (e) {
                    case i.QuestRewardCodePlatforms.XBOX:
                        return a.default.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
                    case i.QuestRewardCodePlatforms.PLAYSTATION:
                        return a.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
                    case i.QuestRewardCodePlatforms.SWITCH:
                        return a.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
                    case i.QuestRewardCodePlatforms.PC:
                        return a.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
                    case i.QuestRewardCodePlatforms.CROSS_PLATFORM:
                        return a.default.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM
                }
            };

            function I(e) {
                if (null == e.userStatus) return 0;
                let {
                    streamProgressSeconds: t,
                    completedAt: n
                } = e.userStatus;
                if (null != n) return 1;
                let {
                    streamDurationRequirementMinutes: s
                } = e.config;
                return Math.min(t / 60 / s, 1)
            }

            function m(e) {
                var t, n;
                if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return a.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
                if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
                    let t = I(e);
                    return t >= .75 ? a.default.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : t >= .45 && t <= .55 ? a.default.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : t > 0 ? a.default.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : a.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
                }
                return a.default.Messages.QUESTS_TITLE.format({
                    questName: e.config.messages.questName
                })
            }

            function R(e) {
                return e in r.DismissibleQuestContentFlags
            }

            function N(e, t) {
                return (0, s.hasFlag)(e.dismissedQuestContent, r.DismissibleQuestContentFlags[t])
            }
        },
        385649: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var s = n("446674"),
                i = n("913144"),
                r = n("599110"),
                a = n("773336"),
                l = n("49111");
            let u = {
                    desktopType: a.isPlatformEmbedded ? l.DesktopNotificationTypes.ALL : l.DesktopNotificationTypes.NEVER,
                    disableAllSounds: !1,
                    disabledSounds: [],
                    ttsType: l.TTSNotificationTypes.NEVER,
                    disableUnreadBadge: !1,
                    taskbarFlash: !0,
                    notifyMessagesInSelectedChannel: !1
                },
                o = u;

            function d(e, t) {
                !__OVERLAY__ && r.default.track(e, t)
            }

            function c(e) {
                let {
                    desktopType: t
                } = e;
                o.desktopType = t, d(l.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
                    notifications_enabled: t === l.DesktopNotificationTypes.ALL
                })
            }
            class E extends s.default.DeviceSettingsStore {
                initialize(e) {
                    o = {
                        ...u,
                        ...e
                    }
                }
                getUserAgnosticState() {
                    return o
                }
                getDesktopType() {
                    return o.desktopType
                }
                getTTSType() {
                    return o.ttsType
                }
                getDisabledSounds() {
                    return o.disabledSounds
                }
                getDisableAllSounds() {
                    return o.disableAllSounds
                }
                getDisableUnreadBadge() {
                    return o.disableUnreadBadge
                }
                getNotifyMessagesInSelectedChannel() {
                    return o.notifyMessagesInSelectedChannel
                }
                get taskbarFlash() {
                    return o.taskbarFlash
                }
                isSoundDisabled(e) {
                    return o.disableAllSounds || -1 !== o.disabledSounds.indexOf(e)
                }
            }
            E.displayName = "NotificationSettingsStore", E.persistKey = "notifications", E.migrations = [e => {
                let t = {
                    ...e
                };
                return t.disabledSounds = t.disabledSounds || [], t.disableUnreadBadge = t.disableUnreadBadge || !1, t.taskbarFlash = null == t.taskbarFlash || t.taskbarFlash, t.ttsType = t.ttsType || l.TTSNotificationTypes.NEVER, null == t.desktopType && (t.desktopType = a.isPlatformEmbedded ? l.DesktopNotificationTypes.ALL : l.DesktopNotificationTypes.NEVER), t
            }];
            var S = new E(i.default, {
                NOTIFICATIONS_SET_DESKTOP_TYPE: c,
                NOTIFICATIONS_SET_TTS_TYPE: function(e) {
                    let {
                        ttsType: t
                    } = e;
                    o.ttsType = t
                },
                NOTIFICATIONS_SET_DISABLED_SOUNDS: function(e) {
                    let {
                        sounds: t
                    } = e;
                    o.disabledSounds = t
                },
                NOTIFICATIONS_TOGGLE_ALL_DISABLED: function() {
                    o.disableAllSounds = !o.disableAllSounds
                },
                NOTIFICATIONS_SET_PERMISSION_STATE: function(e) {
                    let {
                        enabled: t,
                        source: n
                    } = e;
                    d(l.AnalyticEvents.ENABLE_NOTIFICATIONS, {
                        enabled: t === l.NotificationPermissionTypes.ENABLED,
                        source: n
                    }), t === l.NotificationPermissionTypes.BLOCKED ? c({
                        desktopType: l.DesktopNotificationTypes.NEVER
                    }) : t === l.NotificationPermissionTypes.ENABLED && c({
                        desktopType: l.DesktopNotificationTypes.ALL
                    })
                },
                NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE: function(e) {
                    let {
                        disableUnreadBadge: t
                    } = e;
                    o.disableUnreadBadge = t
                },
                NOTIFICATIONS_SET_TASKBAR_FLASH: function(e) {
                    let {
                        taskbarFlash: t
                    } = e;
                    o.taskbarFlash = t
                },
                NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL: function(e) {
                    let {
                        notify: t
                    } = e;
                    o.notifyMessagesInSelectedChannel = t
                }
            })
        },
        985622: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("671306"),
                a = n("75196"),
                l = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...l
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            className: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M4 2.5C2.897 2.5 2 3.397 2 4.5V15.5C2 16.604 2.897 17.5 4 17.5H11V19.5H7V21.5H17V19.5H13V17.5H20C21.103 17.5 22 16.604 22 15.5V4.5C22 3.397 21.103 2.5 20 2.5H4ZM14.5483 6L16 7.45174L13.4466 9.99485L16 12.5483L14.5483 14L12.0051 11.4466L9.45174 14L8 12.5483L10.5534 9.99485L8 7.45174L9.45174 6L12.0051 8.55341L14.5483 6Z",
                            fill: i
                        })
                    })
                }, r.ScreenXIcon, void 0, {
                    size: 24
                })
        },
        55897: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ScreenXIcon: function() {
                    return a
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("82169");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, s.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm6.3.3a1 1 0 0 1 1.4 0L12 7.58l2.3-2.3a1 1 0 1 1 1.4 1.42L13.42 9l2.3 2.3a1 1 0 0 1-1.42 1.4L12 10.42l-2.3 2.3a1 1 0 0 1-1.4-1.42L10.58 9l-2.3-2.3a1 1 0 0 1 0-1.4Z",
                        clipRule: "evenodd",
                        className: l
                    }), (0, s.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
                        className: l
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=65656.df5466c1fe7d0b8e94e8.js.map