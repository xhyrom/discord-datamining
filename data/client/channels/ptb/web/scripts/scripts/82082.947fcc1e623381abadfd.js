(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["82082"], {
        891722: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                ArrowSmallLeftIcon: function() {
                    return o
                }
            });
            var l = t("37983");
            t("884691");
            var u = t("669491"),
                i = t("75196");
            let o = e => {
                let {
                    width: n = 24,
                    height: t = 24,
                    color: o = u.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...r
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(r),
                    width: n,
                    height: t,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, l.jsx)("path", {
                        d: "M3.29289 11.2929C2.90237 11.6834 2.90237 12.3166 3.29289 12.7071L8.29289 17.7071C8.68342 18.0976 9.31658 18.0976 9.70711 17.7071C10.0976 17.3166 10.0976 16.6834 9.70711 16.2929L6.41421 13L20 13C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11L6.41421 11L9.70711 7.70711C10.0976 7.31658 10.0976 6.68342 9.70711 6.29289C9.31658 5.90237 8.68342 5.90237 8.29289 6.29289L3.29289 11.2929Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: a
                    })
                })
            }
        },
        299147: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return i
                },
                useCustomCallSoundsExperiment: function() {
                    return o
                }
            });
            var l = t("862205");
            let u = (0, l.createExperiment)({
                kind: "user",
                id: "2023-06_custom_call_sounds",
                label: "Custom Call Sounds",
                defaultConfig: {
                    enabled: !1,
                    showVoiceChannelCoachmark: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0,
                        showVoiceChannelCoachmark: !1
                    }
                }, {
                    id: 2,
                    label: "Enabled w/VC Coachmark",
                    config: {
                        enabled: !0,
                        showVoiceChannelCoachmark: !0
                    }
                }]
            });
            var i = u;
            let o = () => {
                let e = u.useExperiment({
                    location: "bba779_1"
                }, {
                    autoTrackExposure: !0
                });
                return e.enabled
            }
        },
        880553: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return o
                }
            });
            var l = t("271938"),
                u = t("42203"),
                i = t("800762");

            function o() {
                let e = i.default.getVoiceStateForSession(l.default.getId(), l.default.getSessionId()),
                    n = null == e ? void 0 : e.channelId;
                return u.default.getChannel(n)
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
            var l = t("862205");
            let u = (0, l.createExperiment)({
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
                return u.getCurrentConfig({
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
                return u.useExperiment({
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
                    return U
                }
            }), t("424973"), t("222007");
            var l = t("917351"),
                u = t.n(l),
                i = t("693566"),
                o = t.n(i),
                a = t("446674"),
                r = t("913144"),
                d = t("80507"),
                s = t("374363"),
                c = t("697218"),
                f = t("880342"),
                _ = t("235004"),
                E = t("389480"),
                S = t("846325"),
                C = t("397336");
            let m = [],
                y = new o({
                    max: S.NUM_RECENTLY_HEARD_SOUNDS
                }),
                g = new d.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let n = 0;
                        return e <= 3 ? n = 100 : e <= 15 ? n = 70 : e <= 30 ? n = 50 : e <= 45 ? n = 30 : e <= 80 && (n = 10), n
                    },
                    lookupKey: e => _.default.getSoundById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: S.NUM_FREQUENTLY_USED_SOUNDS
                });

            function A() {
                var e, n;
                if (!I()) return;
                let t = null === (e = s.default.frecencyWithoutFetchingLatest.playedSoundFrecency) || void 0 === e ? void 0 : e.playedSounds;
                g.overwriteHistory((n = null != t ? t : {}, u.mapValues(n, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                }))), m)
            }

            function I() {
                return (0, f.recentlyHeardExperiment)({
                    location: "soundboard_event_store",
                    autoTrackExposure: !1
                }).canSeeFrequentlyPlayed
            }
            class L extends a.default.PersistedStore {
                initialize(e) {
                    this.waitFor(c.default, _.default), (null == e ? void 0 : e.recentlyHeardCache) != null && y.load(e.recentlyHeardCache), (null == e ? void 0 : e.playedEventsPendingFlush) != null && (m = e.playedEventsPendingFlush), this.syncWith([s.default], A)
                }
                getState() {
                    return {
                        recentlyHeardCache: y.dump(),
                        playedEventsPendingFlush: m
                    }
                }
                hasPendingUsage() {
                    return m.length > 0
                }
                get playedSoundHistory() {
                    return g.usageHistory
                }
                get recentlyHeardSoundIds() {
                    return y.values()
                }
                get frecentlyPlayedSounds() {
                    return g.frequently
                }
            }
            L.displayName = "SoundboardEventStore", L.persistKey = "SoundboardEventStore";
            var U = new L(r.default, {
                GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY: function(e) {
                    let {
                        sound: n,
                        trigger: t
                    } = e;
                    if (!I()) return;
                    let l = n.soundId.toString();
                    t === E.LocalSoundTrigger.SOUNDBOARD && function(e) {
                        g.track(e), m.push({
                            key: e,
                            timestamp: Date.now()
                        }), g.compute()
                    }(l)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var n;
                    let {
                        soundId: t,
                        userId: l
                    } = e;
                    if (! function() {
                            return (0, f.recentlyHeardExperiment)({
                                location: "soundboard_event_store",
                                autoTrackExposure: !1
                            }).canSeeRecentlyHeard
                        }()) return;
                    let u = t.toString(),
                        i = null === (n = c.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                    l !== i && function(e) {
                        let n = _.default.getSounds();
                        for (let t of n.values()) {
                            let n = t.find(n => n.soundId.toString() === e);
                            if (null != n) return !0
                        }
                        return !1
                    }(u) && function(e) {
                        y.set(e, e)
                    }(u)
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: n
                        },
                        wasSaved: t
                    } = e;
                    I() && n === C.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS && t && (m = [])
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
                canUseCustomCallSounds: function() {
                    return D
                },
                playSound: function() {
                    return O
                },
                maybePlayCustomJoinSound: function() {
                    return h
                },
                useSoundBoardDismissContentTypes: function() {
                    return v
                },
                removeCustomJoinSound: function() {
                    return F
                },
                updateCustomJoinSound: function() {
                    return R
                },
                trackCustomCallSoundExternallyDeleted: function() {
                    return P
                }
            }), t("424973");
            var l = t("65597"),
                u = t("151426"),
                i = t("299147"),
                o = t("880553"),
                a = t("845579"),
                r = t("872173"),
                d = t("374363"),
                s = t("229502"),
                c = t("233069"),
                f = t("957255"),
                _ = t("697218"),
                E = t("599110"),
                S = t("719923"),
                C = t("158998"),
                m = t("305122"),
                y = t("235004"),
                g = t("389480"),
                A = t("245463"),
                I = t("675961"),
                L = t("846325"),
                U = t("49111");

            function T() {
                var e;
                let n = a.SoundboardSettings.getSetting();
                return null !== (e = null == n ? void 0 : n.volume) && void 0 !== e ? e : 100
            }

            function p(e, n) {
                return (null == n ? void 0 : n.guild_id) == null || f.default.can(U.Permissions.USE_EXTERNAL_SOUNDS, n) || e.guildId === L.DEFAULT_SOUND_GUILD_ID || e.guildId === (null == n ? void 0 : n.guild_id)
            }

            function N(e, n, t) {
                let l = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                return (S.default.canUseSoundboardEverywhere(e) || n.guildId === (null == t ? void 0 : t.guild_id) || n.guildId === L.DEFAULT_SOUND_GUILD_ID) && p(n, t) && (!l || n.available)
            }

            function D(e) {
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    t = i.default.getCurrentConfig({
                        location: "65e71d_1"
                    }, {
                        autoTrackExposure: n
                    }).enabled;
                return S.default.canUseCustomCallSounds(e) && t
            }

            function O(e, n, t) {
                (0, m.playSoundLocally)(n, e, g.LocalSoundTrigger.SOUNDBOARD), (0, s.sendVoiceChannelSoundboardEffect)(n, e, __OVERLAY__, t)
            }
            async function h(e) {
                let n = _.default.getCurrentUser(),
                    t = (0, o.default)(),
                    l = (0, I.getCustomJoinSound)(e);
                if (null == t || c.SILENT_JOIN_LEAVE_CHANNEL_TYPES.has(t.type) || null == l || !D(n) || !(0, A.canSelectedVoiceChannelUseSoundboard)()) return;
                await (0, m.maybeFetchSoundboardSounds)();
                let u = l.guildId === L.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID ? L.DEFAULT_SOUND_GUILD_ID : l.guildId,
                    i = y.default.getSound(u, l.soundId);
                if (null != i) {
                    var a, r;
                    if (!p(i, t) || !N(n, i, t, !0)) return null;
                    a = i, r = t.id, (0, m.playSoundLocally)(r, a, g.LocalSoundTrigger.JOINED_VOICE_CHANNEL), (0, s.sendVoiceChannelCustomCallSoundEffect)(r, a, __OVERLAY__)
                }
            }

            function v(e) {
                let {
                    isSoundboardButtonDisabled: n = !1
                } = e, t = (0, l.default)([_.default], () => _.default.getCurrentUser()), o = [u.DismissibleContent.SOUNDBOARD_EDUCATION], {
                    enabled: a,
                    showVoiceChannelCoachmark: r
                } = i.default.useExperiment({
                    location: "65e71d_2"
                }, {
                    autoTrackExposure: !1
                });
                if (a && !n && ! function() {
                        var e, n;
                        let t = null !== (n = null === (e = d.default.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== n ? n : {};
                        return Object.values(t).some(e => null != e.joinSound)
                    }()) {
                    o.push(u.DismissibleContent.CUSTOM_CALL_SOUNDS_SPARKLES);
                    let e = S.default.canUseCustomCallSounds(t),
                        n = (0, C.ageEligibleForPremiumUpsell)(t);
                    r && !S.default.isPremium(t) && n && o.push(u.DismissibleContent.CUSTOM_CALL_SOUNDS_VOICE_COACHMARK), (e || n) && o.push(u.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL)
                }
                return o
            }

            function F(e, n) {
                (0, r.updateUserGuildSettings)(e, t => {
                    t.joinSound = void 0, b({
                        guildId: e,
                        changeType: g.AnalyticsChangeType.REMOVED,
                        soundType: g.AnalyticsSoundType.ENTRY,
                        location: n
                    })
                }, r.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function R(e, n, t) {
                (0, r.updateUserGuildSettings)(e, l => {
                    let u = n.guildId === L.DEFAULT_SOUND_GUILD_ID,
                        i = u ? g.AnalyticsSoundSource.DEFAULT : g.AnalyticsSoundSource.CUSTOM,
                        o = null != l.joinSound ? g.AnalyticsChangeType.UPDATED : g.AnalyticsChangeType.ADDED;
                    l.joinSound = {
                        soundId: n.soundId,
                        guildId: u ? L.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID : n.guildId
                    }, b({
                        guildId: e,
                        changeType: o,
                        soundSource: i,
                        soundType: g.AnalyticsSoundType.ENTRY,
                        location: t
                    })
                }, r.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function b(e) {
                let {
                    guildId: n,
                    changeType: t,
                    soundType: l,
                    soundSource: u,
                    location: i
                } = e;
                E.default.track(U.AnalyticEvents.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
                    location_stack: i,
                    guild_id: "" === n ? 0 : Number(n),
                    change_type: t,
                    sound_type: l,
                    sound_source: u
                })
            }

            function P(e) {
                let {
                    location: n
                } = e;
                E.default.track(U.AnalyticEvents.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, {
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
                    return r
                }
            });
            var l = t("42203"),
                u = t("957255"),
                i = t("18494"),
                o = t("49111");

            function a() {
                let e = i.default.getVoiceChannelId(),
                    n = l.default.getChannel(e);
                return r(n)
            }

            function r(e) {
                if (null == e) return !1;
                if (o.ChannelTypesSets.CALLABLE.has(e.type)) return !0;
                let n = u.default.can(o.Permissions.USE_SOUNDBOARD, e),
                    t = u.default.can(o.Permissions.SPEAK, e);
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
            var l = t("42203"),
                u = t("945956"),
                i = t("568307"),
                o = t("18494"),
                a = t("599110"),
                r = t("846325"),
                d = t("49111"),
                s = t("646718");

            function c(e, n, t, c) {
                var f, _, E;
                let S = l.default.getChannel(o.default.getVoiceChannelId()),
                    C = null == S ? void 0 : S.getGuildId(),
                    m = u.default.getMediaSessionId(),
                    y = u.default.getRTCConnectionId(),
                    g = null === (f = i.default.getCurrentGameForAnalytics()) || void 0 === f ? void 0 : f.name,
                    A = C !== t.guildId && t.guildId !== r.DEFAULT_SOUND_GUILD_ID;
                let I = (_ = t, E = A, _.guildId === r.DEFAULT_SOUND_GUILD_ID ? "default" : E ? "custom-external" : "custom");
                a.default.track(d.AnalyticEvents.PREMIUM_FEATURE_USAGE, {
                    feature_name: s.AnalyticsPremiumFeatureNames.SOUNDBOARD_PLAY,
                    feature_tier: A ? s.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD : s.AnalyticsPremiumFeatureTiers.FREE,
                    guild_id: C,
                    location_stack: e,
                    rtc_connection_id: y,
                    media_session_id: m,
                    in_overlay: n,
                    application_name: g,
                    emoji_count: null != t.emojiId || null != t.emojiName ? 1 : 0,
                    feature_selection: I,
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
                    return u
                },
                useCustomJoinSound: function() {
                    return r
                },
                getCustomJoinSound: function() {
                    return d
                }
            });
            var l, u, i = t("446674"),
                o = t("374363"),
                a = t("846325");

            function r(e) {
                return (0, i.useStateFromStores)([o.default], () => {
                    var n, t;
                    let l = null !== (t = null === (n = o.default.settings.guilds) || void 0 === n ? void 0 : n.guilds) && void 0 !== t ? t : {};
                    return s(e, l)
                })
            }

            function d(e) {
                var n, t;
                let l = null !== (t = null === (n = o.default.settings.guilds) || void 0 === n ? void 0 : n.guilds) && void 0 !== t ? t : {};
                return s(e, l)
            }

            function s(e, n) {
                var t, l;
                let u = null === (t = n[e]) || void 0 === t ? void 0 : t.joinSound,
                    i = null === (l = n[a.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID]) || void 0 === l ? void 0 : l.joinSound,
                    o = null != u ? u : i;
                return null != o ? {
                    ...o,
                    type: null != u ? 1 : 0
                } : void 0
            }(l = u || (u = {}))[l.GLOBAL = 0] = "GLOBAL", l[l.GUILD = 1] = "GUILD"
        },
        229502: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                VoiceChannelEffectSentLocation: function() {
                    return u
                },
                sendVoiceChannelCustomCallSoundEffect: function() {
                    return L
                },
                sendVoiceChannelSoundboardEffect: function() {
                    return U
                },
                sendVoiceChannelEffect: function() {
                    return T
                }
            });
            var l, u, i = t("917351"),
                o = t("872717"),
                a = t("913144"),
                r = t("812204"),
                d = t("716241"),
                s = t("385976"),
                c = t("389480"),
                f = t("454614"),
                _ = t("18494"),
                E = t("402671"),
                S = t("82230"),
                C = t("568088"),
                m = t("397485"),
                y = t("626334"),
                g = t("49111"),
                A = t("846325");

            function I(e) {
                let n = new AbortController,
                    t = (0, i.throttle)(t => {
                        _.default.getVoiceChannelId() !== e && n.abort()
                    }, 1e3);
                return {
                    abortController: n,
                    onRequestProgress: t
                }
            }

            function L(e, n, t) {
                var l;
                let {
                    abortController: u,
                    onRequestProgress: i
                } = I(e), a = null !== (l = S.default.getState().animationType) && void 0 !== l ? l : y.VoiceChannelEffectAnimationType.BASIC, d = {
                    animation_type: a,
                    animation_id: (0, m.sampleAnimationId)(a, m.CUSTOM_CALL_SOUND_ANIMATION_RANGE)
                };
                o.default.post({
                    url: g.Endpoints.CUSTOM_CALL_SOUNDS(e),
                    body: d,
                    signal: u.signal,
                    onRequestProgress: i
                }).then(g.NOOP_NULL, () => {
                    if (u.signal.aborted) return
                }), (0, f.default)([r.default.CHANNEL_CALL], t, n, c.AnalyticsSoundType.ENTRY)
            }

            function U(e, n, t, l) {
                var u, i;
                let a = s.default.getCustomEmojiById(null !== (u = n.emojiId) && void 0 !== u ? u : ""),
                    {
                        abortController: r,
                        onRequestProgress: d
                    } = I(e),
                    _ = {
                        sound_id: n.soundId,
                        emoji_id: n.emojiId,
                        emoji_name: null !== (i = n.emojiName) && void 0 !== i ? i : null == a ? void 0 : a.name
                    };
                n.guildId !== A.DEFAULT_SOUND_GUILD_ID && (_.source_guild_id = n.guildId), o.default.post({
                    url: g.Endpoints.SEND_SOUNDBOARD_SOUND(e),
                    body: _,
                    signal: r.signal,
                    onRequestProgress: d
                }).then(g.NOOP_NULL, () => {
                    if (r.signal.aborted) return
                }), (0, f.default)(null != l ? l : [], t, n, c.AnalyticsSoundType.DEFAULT)
            }(l = u || (u = {})).EMOJI_PICKER = "emoji_picker", l.EFFECT_BAR = "effect_bar";
            let T = async e => {
                let {
                    channel: n,
                    emoji: t,
                    location: l,
                    animationType: u,
                    animationId: i,
                    isPremium: r
                } = e;
                if (null == t || C.default.isOnCooldown) return;
                let d = r && null != u ? u : y.VoiceChannelEffectAnimationType.BASIC;
                try {
                    let e = null != t.id ? {
                        emoji_id: t.id,
                        emoji_name: t.name,
                        animation_type: d,
                        animation_id: i
                    } : {
                        emoji_id: null,
                        emoji_name: t.optionallyDiverseSequence,
                        animation_type: d,
                        animation_id: i
                    };
                    await o.default.post({
                        url: g.Endpoints.VOICE_CHANNEL_EFFECTS(n.id),
                        body: e
                    }), N(n, t, l, d), a.default.dispatch({
                        type: "VOICE_CHANNEL_EFFECT_SENT_LOCAL"
                    })
                } catch (e) {
                    if (429 === e.status && null != e.body.retry_after) {
                        let n = 1e3 * e.body.retry_after;
                        a.default.dispatch({
                            type: "VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP",
                            cooldownEndsAtMs: n
                        })
                    }
                }
            }, p = {
                [y.VoiceChannelEffectAnimationType.BASIC]: "Basic",
                [y.VoiceChannelEffectAnimationType.PREMIUM]: "Premium"
            }, N = (e, n, t, l) => {
                let {
                    unicode: u,
                    custom: i,
                    customExternal: o,
                    managed: a,
                    managedExternal: r,
                    animated: s
                } = (0, E.countEmoji)([n], e.getGuildId()), c = p[l];
                d.default.trackWithMetadata(g.AnalyticEvents.VOICE_CHANNEL_EFFECT_SENT, {
                    channel_id: e.id,
                    guild_id: e.getGuildId(),
                    location: t,
                    emoji_unicode: u,
                    emoji_custom: i,
                    emoji_custom_external: o,
                    emoji_managed: a,
                    emoji_managed_external: r,
                    emoji_animated: s,
                    animation_type: c,
                    is_broadcast: e.isBroadcastChannel()
                })
            }
        },
        82230: function(e, n, t) {
            "use strict";
            let l;
            t.r(n), t.d(n, {
                default: function() {
                    return r
                }
            });
            var u = t("446674"),
                i = t("913144"),
                o = t("626334");
            class a extends u.default.PersistedStore {
                initialize(e) {
                    var n;
                    l = null !== (n = null == e ? void 0 : e.animationType) && void 0 !== n ? n : o.VoiceChannelEffectAnimationType.PREMIUM
                }
                getState() {
                    return {
                        animationType: l
                    }
                }
            }
            a.displayName = "VoiceChannelEffectsPersistedStore", a.persistKey = "VoiceChannelEffectsPersistedStore";
            var r = new a(i.default, {
                VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: () => {
                    l = l === o.VoiceChannelEffectAnimationType.BASIC ? o.VoiceChannelEffectAnimationType.PREMIUM : o.VoiceChannelEffectAnimationType.BASIC
                }
            })
        },
        568088: function(e, n, t) {
            "use strict";
            let l;
            t.r(n), t.d(n, {
                clearVoiceChannelEffectForUser: function() {
                    return _
                },
                default: function() {
                    return m
                }
            }), t("222007"), t("843762");
            var u = t("917351"),
                i = t("446674"),
                o = t("819855"),
                a = t("913144"),
                r = t("397485"),
                d = t("99795");
            let s = [],
                c = {},
                f = [],
                _ = e => {
                    null != e && a.default.dispatch({
                        type: "VOICE_CHANNEL_EFFECT_CLEAR",
                        userId: e
                    })
                },
                E = [],
                S = (0, u.debounce)(() => {
                    let e = (0, r.getEffectAnnouncement)(f);
                    o.AccessibilityAnnouncer.announce(e, "polite"), f = []
                }, 500);
            class C extends i.default.Store {
                get recentlyUsedEmojis() {
                    return s
                }
                get isOnCooldown() {
                    return null != l && new Date < l
                }
                get effectCooldownEndTime() {
                    return l
                }
                getEffectForUserId(e) {
                    return c[e]
                }
            }
            C.displayName = "VoiceChannelEffectsStore";
            var m = new C(a.default, {
                VOICE_CHANNEL_EFFECT_CLEAR: e => {
                    let {
                        userId: n
                    } = e;
                    null != c[n] && delete c[n]
                },
                VOICE_CHANNEL_EFFECT_RECENT_EMOJI: e => {
                    let {
                        emoji: n
                    } = e;
                    null != n && (s.unshift(n), (s = (0, u.uniqBy)(s, "name")).length > d.EMOJI_PICKER_EMOJI_TO_SHOW_COUNT + 1 && s.pop())
                },
                VOICE_CHANNEL_EFFECT_SEND: e => {
                    let {
                        emoji: n,
                        userId: t,
                        animationType: l
                    } = e;
                    null != n && null != l && (c[t] = {
                        emoji: n,
                        sentAt: Date.now(),
                        animationType: l
                    }, f = [...f, {
                        emojiName: n.name,
                        userId: t
                    }], S())
                },
                VOICE_CHANNEL_EFFECT_SENT_LOCAL: () => {
                    let e = new Date;
                    if ((E = [e, ...E].slice(0, 20)).length >= 20) {
                        let n = E[E.length - 1],
                            t = e.getTime() - n.getTime();
                        t < 1e4 && (l = new Date(e.getTime() + 1e4 - t))
                    }
                },
                VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: e => {
                    let {
                        cooldownEndsAtMs: n
                    } = e;
                    l = new Date(Date.now() + n)
                }
            })
        },
        531470: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return a
                }
            });
            var l = t("37983");
            t("884691");
            var u = t("469563"),
                i = t("891722"),
                o = t("75196"),
                a = (0, u.replaceIcon)(function(e) {
                    let {
                        width: n = 24,
                        height: t = 24,
                        color: u = "currentColor",
                        foreground: i,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, o.default)(a),
                        width: n,
                        height: t,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            className: i,
                            fill: u,
                            d: "M20 10.9378H14.2199H8.06628L10.502 8.50202L9 7L4 12L9 17L10.502 15.498L8.06628 13.0622H20V10.9378Z"
                        })
                    })
                }, i.ArrowSmallLeftIcon, void 0, {
                    size: 24
                })
        }
    }
]);
//# sourceMappingURL=82082.947fcc1e623381abadfd.js.map