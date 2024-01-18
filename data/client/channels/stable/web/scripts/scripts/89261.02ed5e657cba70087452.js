(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["89261"], {
        880553: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return o
                }
            });
            var u = t("271938"),
                l = t("42203"),
                i = t("800762");

            function o() {
                let e = i.default.getVoiceStateForSession(u.default.getId(), u.default.getSessionId()),
                    n = null == e ? void 0 : e.channelId;
                return l.default.getChannel(n)
            }
        },
        880342: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                recentlyHeardExperiment: function() {
                    return i
                },
                useRecentlyHeardExperiment: function() {
                    return o
                }
            });
            var u = t("862205");
            let l = (0, u.createExperiment)({
                kind: "user",
                id: "2023-11_soundboard_recently_heard_frequently_played",
                label: "Soundboard Recently Heard & Frequently Played",
                defaultConfig: {
                    canSeeRecentlyHeard: !1,
                    canSeeFrequentlyPlayed: !1
                },
                treatments: [{
                    id: 1,
                    label: "User can see Recently Heard soundboard section",
                    config: {
                        canSeeRecentlyHeard: !0,
                        canSeeFrequentlyPlayed: !1
                    }
                }, {
                    id: 2,
                    label: "User can see Frequently Played soundboard section",
                    config: {
                        canSeeRecentlyHeard: !1,
                        canSeeFrequentlyPlayed: !0
                    }
                }, {
                    id: 3,
                    label: "User can see Frequently Played & Recently Heard soundboard sections",
                    config: {
                        canSeeRecentlyHeard: !0,
                        canSeeFrequentlyPlayed: !0
                    }
                }]
            });

            function i(e) {
                let {
                    location: n,
                    autoTrackExposure: t
                } = e;
                return l.getCurrentConfig({
                    location: n
                }, {
                    autoTrackExposure: t
                })
            }

            function o(e) {
                let {
                    autoTrackExposure: n,
                    location: t
                } = e;
                return l.useExperiment({
                    location: t
                }, {
                    autoTrackExposure: n
                })
            }
        },
        469607: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return T
                }
            }), t("424973"), t("222007");
            var u = t("917351"),
                l = t.n(u),
                i = t("693566"),
                o = t.n(i),
                a = t("446674"),
                d = t("913144"),
                r = t("80507"),
                s = t("374363"),
                c = t("697218"),
                _ = t("880342"),
                f = t("235004"),
                E = t("389480"),
                S = t("846325"),
                C = t("397336");
            let y = [],
                m = new o({
                    max: S.NUM_RECENTLY_HEARD_SOUNDS
                }),
                A = new r.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let n = 0;
                        return e <= 3 ? n = 100 : e <= 15 ? n = 70 : e <= 30 ? n = 50 : e <= 45 ? n = 30 : e <= 80 && (n = 10), n
                    },
                    lookupKey: e => f.default.getSoundById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: S.NUM_FREQUENTLY_USED_SOUNDS
                });

            function g() {
                var e, n;
                if (!U()) return;
                let t = null === (e = s.default.frecencyWithoutFetchingLatest.playedSoundFrecency) || void 0 === e ? void 0 : e.playedSounds;
                A.overwriteHistory((n = null != t ? t : {}, l.mapValues(n, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                }))), y)
            }

            function U() {
                return (0, _.recentlyHeardExperiment)({
                    location: "soundboard_event_store",
                    autoTrackExposure: !1
                }).canSeeFrequentlyPlayed
            }
            class I extends a.default.PersistedStore {
                initialize(e) {
                    this.waitFor(c.default, f.default), (null == e ? void 0 : e.recentlyHeardCache) != null && m.load(e.recentlyHeardCache), (null == e ? void 0 : e.playedEventsPendingFlush) != null && (y = e.playedEventsPendingFlush), this.syncWith([s.default], g)
                }
                getState() {
                    return {
                        recentlyHeardCache: m.dump(),
                        playedEventsPendingFlush: y
                    }
                }
                hasPendingUsage() {
                    return y.length > 0
                }
                get playedSoundHistory() {
                    return A.usageHistory
                }
                get recentlyHeardSoundIds() {
                    return m.values()
                }
                get frecentlyPlayedSounds() {
                    return A.frequently
                }
            }
            I.displayName = "SoundboardEventStore", I.persistKey = "SoundboardEventStore";
            var T = new I(d.default, {
                GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY: function(e) {
                    let {
                        sound: n,
                        trigger: t
                    } = e;
                    if (!U()) return;
                    let u = n.soundId.toString();
                    t === E.LocalSoundTrigger.SOUNDBOARD && function(e) {
                        A.track(e), y.push({
                            key: e,
                            timestamp: Date.now()
                        }), A.compute()
                    }(u)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var n;
                    let {
                        soundId: t,
                        userId: u
                    } = e;
                    if (! function() {
                            return (0, _.recentlyHeardExperiment)({
                                location: "soundboard_event_store",
                                autoTrackExposure: !1
                            }).canSeeRecentlyHeard
                        }()) return;
                    let l = t.toString(),
                        i = null === (n = c.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                    u !== i && function(e) {
                        let n = f.default.getSounds();
                        for (let t of n.values()) {
                            let n = t.find(n => n.soundId.toString() === e);
                            if (null != n) return !0
                        }
                        return !1
                    }(l) && function(e) {
                        m.set(e, e)
                    }(l)
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: n
                        },
                        wasSaved: t
                    } = e;
                    U() && n === C.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS && t && (y = [])
                }
            })
        },
        78581: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                getAmplitudinalSoundboardVolume: function() {
                    return T
                },
                canUseSoundboardSound: function() {
                    return N
                },
                playSound: function() {
                    return L
                },
                maybePlayCustomJoinSound: function() {
                    return p
                },
                useSoundBoardDismissContentTypes: function() {
                    return O
                },
                removeCustomJoinSound: function() {
                    return v
                },
                updateCustomJoinSound: function() {
                    return h
                },
                trackCustomCallSoundExternallyDeleted: function() {
                    return R
                }
            }), t("424973");
            var u = t("65597"),
                l = t("151426"),
                i = t("880553"),
                o = t("845579"),
                a = t("872173"),
                d = t("374363"),
                r = t("229502"),
                s = t("233069"),
                c = t("957255"),
                _ = t("697218"),
                f = t("599110"),
                E = t("719923"),
                S = t("158998"),
                C = t("305122"),
                y = t("235004"),
                m = t("389480"),
                A = t("245463"),
                g = t("675961"),
                U = t("846325"),
                I = t("49111");

            function T() {
                var e;
                let n = o.SoundboardSettings.getSetting();
                return null !== (e = null == n ? void 0 : n.volume) && void 0 !== e ? e : 100
            }

            function D(e, n) {
                return (null == n ? void 0 : n.guild_id) == null || c.default.can(I.Permissions.USE_EXTERNAL_SOUNDS, n) || e.guildId === U.DEFAULT_SOUND_GUILD_ID || e.guildId === (null == n ? void 0 : n.guild_id)
            }

            function N(e, n, t) {
                let u = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                return (E.default.canUseSoundboardEverywhere(e) || n.guildId === (null == t ? void 0 : t.guild_id) || n.guildId === U.DEFAULT_SOUND_GUILD_ID) && D(n, t) && (!u || n.available)
            }

            function L(e, n, t) {
                (0, C.playSoundLocally)(n, e, m.LocalSoundTrigger.SOUNDBOARD), (0, r.sendVoiceChannelSoundboardEffect)(n, e, __OVERLAY__, t)
            }
            async function p(e) {
                let n = _.default.getCurrentUser(),
                    t = (0, i.default)(),
                    u = (0, g.getCustomJoinSound)(e);
                if (null == t || s.SILENT_JOIN_LEAVE_CHANNEL_TYPES.has(t.type) || null == u || !E.default.canUseCustomCallSounds(n) || !(0, A.canSelectedVoiceChannelUseSoundboard)()) return;
                await (0, C.maybeFetchSoundboardSounds)();
                let l = u.guildId === U.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID ? U.DEFAULT_SOUND_GUILD_ID : u.guildId,
                    o = y.default.getSound(l, u.soundId);
                if (null != o) {
                    var a, d;
                    if (!D(o, t) || !N(n, o, t, !0)) return null;
                    a = o, d = t.id, (0, C.playSoundLocally)(d, a, m.LocalSoundTrigger.JOINED_VOICE_CHANNEL), (0, r.sendVoiceChannelCustomCallSoundEffect)(d, a, __OVERLAY__)
                }
            }

            function O(e) {
                let {
                    isSoundboardButtonDisabled: n = !1
                } = e, t = (0, u.default)([_.default], () => _.default.getCurrentUser()), i = [l.DismissibleContent.SOUNDBOARD_EDUCATION];
                if (!n && ! function() {
                        var e, n;
                        let t = null !== (n = null === (e = d.default.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== n ? n : {};
                        return Object.values(t).some(e => null != e.joinSound)
                    }()) {
                    i.push(l.DismissibleContent.CUSTOM_CALL_SOUNDS_SPARKLES);
                    let e = (0, S.ageEligibleForPremiumUpsell)(t);
                    (E.default.canUseCustomCallSounds(t) || e) && i.push(l.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL)
                }
                return i
            }

            function v(e, n) {
                (0, a.updateUserGuildSettings)(e, t => {
                    t.joinSound = void 0, F({
                        guildId: e,
                        changeType: m.AnalyticsChangeType.REMOVED,
                        soundType: m.AnalyticsSoundType.ENTRY,
                        location: n
                    })
                }, a.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function h(e, n, t) {
                (0, a.updateUserGuildSettings)(e, u => {
                    let l = n.guildId === U.DEFAULT_SOUND_GUILD_ID,
                        i = l ? m.AnalyticsSoundSource.DEFAULT : m.AnalyticsSoundSource.CUSTOM,
                        o = null != u.joinSound ? m.AnalyticsChangeType.UPDATED : m.AnalyticsChangeType.ADDED;
                    u.joinSound = {
                        soundId: n.soundId,
                        guildId: l ? U.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID : n.guildId
                    }, F({
                        guildId: e,
                        changeType: o,
                        soundSource: i,
                        soundType: m.AnalyticsSoundType.ENTRY,
                        location: t
                    })
                }, a.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function F(e) {
                let {
                    guildId: n,
                    changeType: t,
                    soundType: u,
                    soundSource: l,
                    location: i
                } = e;
                f.default.track(I.AnalyticEvents.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
                    location_stack: i,
                    guild_id: "" === n ? 0 : Number(n),
                    change_type: t,
                    sound_type: u,
                    sound_source: l
                })
            }

            function R(e) {
                let {
                    location: n
                } = e;
                f.default.track(I.AnalyticEvents.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, {
                    location_stack: n
                })
            }
        },
        245463: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                canSelectedVoiceChannelUseSoundboard: function() {
                    return a
                },
                default: function() {
                    return d
                }
            });
            var u = t("42203"),
                l = t("957255"),
                i = t("18494"),
                o = t("49111");

            function a() {
                let e = i.default.getVoiceChannelId(),
                    n = u.default.getChannel(e);
                return d(n)
            }

            function d(e) {
                if (null == e) return !1;
                if (o.ChannelTypesSets.CALLABLE.has(e.type)) return !0;
                let n = l.default.can(o.Permissions.USE_SOUNDBOARD, e),
                    t = l.default.can(o.Permissions.SPEAK, e);
                return e.type === o.ChannelTypes.GUILD_VOICE && n && t
            }
        },
        454614: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return c
                }
            });
            var u = t("42203"),
                l = t("945956"),
                i = t("568307"),
                o = t("18494"),
                a = t("599110"),
                d = t("846325"),
                r = t("49111"),
                s = t("646718");

            function c(e, n, t, c) {
                var _, f, E;
                let S = u.default.getChannel(o.default.getVoiceChannelId()),
                    C = null == S ? void 0 : S.getGuildId(),
                    y = l.default.getMediaSessionId(),
                    m = l.default.getRTCConnectionId(),
                    A = null === (_ = i.default.getCurrentGameForAnalytics()) || void 0 === _ ? void 0 : _.name,
                    g = C !== t.guildId && t.guildId !== d.DEFAULT_SOUND_GUILD_ID;
                let U = (f = t, E = g, f.guildId === d.DEFAULT_SOUND_GUILD_ID ? "default" : E ? "custom-external" : "custom");
                a.default.track(r.AnalyticEvents.PREMIUM_FEATURE_USAGE, {
                    feature_name: s.AnalyticsPremiumFeatureNames.SOUNDBOARD_PLAY,
                    feature_tier: g ? s.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD : s.AnalyticsPremiumFeatureTiers.FREE,
                    guild_id: C,
                    location_stack: e,
                    rtc_connection_id: m,
                    media_session_id: y,
                    in_overlay: n,
                    application_name: A,
                    emoji_count: null != t.emojiId || null != t.emojiName ? 1 : 0,
                    feature_selection: U,
                    feature_selection_id: t.soundId,
                    sound_type: c,
                    is_broadcast: null != S && S.isBroadcastChannel()
                })
            }
        },
        675961: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                CustomSoundType: function() {
                    return l
                },
                useCustomJoinSound: function() {
                    return d
                },
                getCustomJoinSound: function() {
                    return r
                }
            });
            var u, l, i = t("446674"),
                o = t("374363"),
                a = t("846325");

            function d(e) {
                return (0, i.useStateFromStores)([o.default], () => {
                    var n, t;
                    let u = null !== (t = null === (n = o.default.settings.guilds) || void 0 === n ? void 0 : n.guilds) && void 0 !== t ? t : {};
                    return s(e, u)
                })
            }

            function r(e) {
                var n, t;
                let u = null !== (t = null === (n = o.default.settings.guilds) || void 0 === n ? void 0 : n.guilds) && void 0 !== t ? t : {};
                return s(e, u)
            }

            function s(e, n) {
                var t, u;
                let l = null === (t = n[e]) || void 0 === t ? void 0 : t.joinSound,
                    i = null === (u = n[a.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID]) || void 0 === u ? void 0 : u.joinSound,
                    o = null != l ? l : i;
                return null != o ? {
                    ...o,
                    type: null != l ? 1 : 0
                } : void 0
            }(u = l || (l = {}))[u.GLOBAL = 0] = "GLOBAL", u[u.GUILD = 1] = "GUILD"
        },
        229502: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                VoiceChannelEffectSentLocation: function() {
                    return l
                },
                sendVoiceChannelCustomCallSoundEffect: function() {
                    return T
                },
                sendVoiceChannelSoundboardEffect: function() {
                    return D
                },
                sendVoiceChannelEffect: function() {
                    return N
                }
            });
            var u, l, i = t("917351"),
                o = t("872717"),
                a = t("913144"),
                d = t("812204"),
                r = t("716241"),
                s = t("385976"),
                c = t("389480"),
                _ = t("454614"),
                f = t("18494"),
                E = t("718517"),
                S = t("402671"),
                C = t("82230"),
                y = t("568088"),
                m = t("397485"),
                A = t("626334"),
                g = t("49111"),
                U = t("846325");

            function I(e) {
                let n = new AbortController,
                    t = (0, i.throttle)(t => {
                        f.default.getVoiceChannelId() !== e && n.abort()
                    }, 1e3);
                return {
                    abortController: n,
                    onRequestProgress: t
                }
            }

            function T(e, n, t) {
                var u;
                let {
                    abortController: l,
                    onRequestProgress: i
                } = I(e), a = null !== (u = C.default.getState().animationType) && void 0 !== u ? u : A.VoiceChannelEffectAnimationType.BASIC, r = {
                    animation_type: a,
                    animation_id: (0, m.sampleAnimationId)(a, m.CUSTOM_CALL_SOUND_ANIMATION_RANGE)
                };
                o.default.post({
                    url: g.Endpoints.CUSTOM_CALL_SOUNDS(e),
                    body: r,
                    signal: l.signal,
                    onRequestProgress: i
                }).then(g.NOOP_NULL, () => {
                    if (l.signal.aborted) return
                }), (0, _.default)([d.default.CHANNEL_CALL], t, n, c.AnalyticsSoundType.ENTRY)
            }

            function D(e, n, t, u) {
                var l, i;
                let a = s.default.getCustomEmojiById(null !== (l = n.emojiId) && void 0 !== l ? l : ""),
                    {
                        abortController: d,
                        onRequestProgress: r
                    } = I(e),
                    f = {
                        sound_id: n.soundId,
                        emoji_id: n.emojiId,
                        emoji_name: null !== (i = n.emojiName) && void 0 !== i ? i : null == a ? void 0 : a.name
                    };
                n.guildId !== U.DEFAULT_SOUND_GUILD_ID && (f.source_guild_id = n.guildId), o.default.post({
                    url: g.Endpoints.SEND_SOUNDBOARD_SOUND(e),
                    body: f,
                    signal: d.signal,
                    onRequestProgress: r
                }).then(g.NOOP_NULL, () => {
                    if (d.signal.aborted) return
                }), (0, _.default)(null != u ? u : [], t, n, c.AnalyticsSoundType.DEFAULT)
            }(u = l || (l = {})).EMOJI_PICKER = "emoji_picker", u.EFFECT_BAR = "effect_bar";
            let N = async e => {
                let {
                    channel: n,
                    emoji: t,
                    location: u,
                    animationType: l,
                    animationId: i,
                    isPremium: d
                } = e;
                if (null == t || y.default.isOnCooldown) return;
                let r = d && null != l ? l : A.VoiceChannelEffectAnimationType.BASIC;
                try {
                    let e = null != t.id ? {
                        emoji_id: t.id,
                        emoji_name: t.name,
                        animation_type: r,
                        animation_id: i
                    } : {
                        emoji_id: null,
                        emoji_name: t.optionallyDiverseSequence,
                        animation_type: r,
                        animation_id: i
                    };
                    await o.default.post({
                        url: g.Endpoints.VOICE_CHANNEL_EFFECTS(n.id),
                        body: e
                    }), p(n, t, u, r), a.default.dispatch({
                        type: "VOICE_CHANNEL_EFFECT_SENT_LOCAL"
                    })
                } catch (e) {
                    if (429 === e.status && null != e.body.retry_after) {
                        let n = e.body.retry_after * E.default.Millis.SECOND;
                        a.default.dispatch({
                            type: "VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP",
                            cooldownEndsAtMs: n
                        })
                    }
                }
            }, L = {
                [A.VoiceChannelEffectAnimationType.BASIC]: "Basic",
                [A.VoiceChannelEffectAnimationType.PREMIUM]: "Premium"
            }, p = (e, n, t, u) => {
                let {
                    unicode: l,
                    custom: i,
                    customExternal: o,
                    managed: a,
                    managedExternal: d,
                    animated: s
                } = (0, S.countEmoji)([n], e.getGuildId()), c = L[u];
                r.default.trackWithMetadata(g.AnalyticEvents.VOICE_CHANNEL_EFFECT_SENT, {
                    channel_id: e.id,
                    guild_id: e.getGuildId(),
                    location: t,
                    emoji_unicode: l,
                    emoji_custom: i,
                    emoji_custom_external: o,
                    emoji_managed: a,
                    emoji_managed_external: d,
                    emoji_animated: s,
                    animation_type: c,
                    is_broadcast: e.isBroadcastChannel()
                })
            }
        },
        82230: function(e, n, t) {
            "use strict";
            let u;
            t.r(n), t.d(n, {
                default: function() {
                    return d
                }
            });
            var l = t("446674"),
                i = t("913144"),
                o = t("626334");
            class a extends l.default.PersistedStore {
                initialize(e) {
                    var n;
                    u = null !== (n = null == e ? void 0 : e.animationType) && void 0 !== n ? n : o.VoiceChannelEffectAnimationType.PREMIUM
                }
                getState() {
                    return {
                        animationType: u
                    }
                }
            }
            a.displayName = "VoiceChannelEffectsPersistedStore", a.persistKey = "VoiceChannelEffectsPersistedStore";
            var d = new a(i.default, {
                VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: () => {
                    u = u === o.VoiceChannelEffectAnimationType.BASIC ? o.VoiceChannelEffectAnimationType.PREMIUM : o.VoiceChannelEffectAnimationType.BASIC
                }
            })
        },
        568088: function(e, n, t) {
            "use strict";
            let u;
            t.r(n), t.d(n, {
                clearVoiceChannelEffectForUser: function() {
                    return E
                },
                default: function() {
                    return A
                }
            }), t("222007"), t("843762");
            var l = t("917351"),
                i = t("446674"),
                o = t("819855"),
                a = t("913144"),
                d = t("718517"),
                r = t("397485"),
                s = t("99795");
            let c = [],
                _ = {},
                f = [],
                E = e => {
                    null != e && a.default.dispatch({
                        type: "VOICE_CHANNEL_EFFECT_CLEAR",
                        userId: e
                    })
                },
                S = [],
                C = 10 * d.default.Millis.SECOND,
                y = (0, l.debounce)(() => {
                    let e = (0, r.getEffectAnnouncement)(f);
                    o.AccessibilityAnnouncer.announce(e, "polite"), f = []
                }, 500);
            class m extends i.default.Store {
                get recentlyUsedEmojis() {
                    return c
                }
                get isOnCooldown() {
                    return null != u && new Date < u
                }
                get effectCooldownEndTime() {
                    return u
                }
                getEffectForUserId(e) {
                    return _[e]
                }
            }
            m.displayName = "VoiceChannelEffectsStore";
            var A = new m(a.default, {
                VOICE_CHANNEL_EFFECT_CLEAR: e => {
                    let {
                        userId: n
                    } = e;
                    null != _[n] && delete _[n]
                },
                VOICE_CHANNEL_EFFECT_RECENT_EMOJI: e => {
                    let {
                        emoji: n
                    } = e;
                    null != n && (c.unshift(n), (c = (0, l.uniqBy)(c, "name")).length > s.EMOJI_PICKER_EMOJI_TO_SHOW_COUNT + 1 && c.pop())
                },
                VOICE_CHANNEL_EFFECT_SEND: e => {
                    let {
                        emoji: n,
                        userId: t,
                        animationType: u
                    } = e;
                    null != n && null != u && (_[t] = {
                        emoji: n,
                        sentAt: Date.now(),
                        animationType: u
                    }, f = [...f, {
                        emojiName: n.name,
                        userId: t
                    }], y())
                },
                VOICE_CHANNEL_EFFECT_SENT_LOCAL: () => {
                    let e = new Date;
                    if ((S = [e, ...S].slice(0, 20)).length >= 20) {
                        let n = S[S.length - 1],
                            t = e.getTime() - n.getTime();
                        t < C && (u = new Date(e.getTime() + C - t))
                    }
                },
                VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: e => {
                    let {
                        cooldownEndsAtMs: n
                    } = e;
                    u = new Date(Date.now() + n)
                }
            })
        }
    }
]);
//# sourceMappingURL=89261.02ed5e657cba70087452.js.map