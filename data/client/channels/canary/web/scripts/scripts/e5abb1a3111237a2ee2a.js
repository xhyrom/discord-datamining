(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["82082"], {
        891722: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                ArrowSmallLeftIcon: function() {
                    return o
                }
            });
            var u = t("37983");
            t("884691");
            var l = t("669491"),
                i = t("75196");
            let o = e => {
                let {
                    width: n = 24,
                    height: t = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...d
                } = e;
                return (0, u.jsx)("svg", {
                    ...(0, i.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: t,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, u.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M3.293 11.293a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414-1.414L6.414 13H20a1 1 0 1 0 0-2H6.414l3.293-3.293a1 1 0 0 0-1.414-1.414l-5 5Z",
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
            var u = t("862205");
            let l = (0, u.createExperiment)({
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
            var i = l;
            let o = () => {
                let e = l.useExperiment({
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
            var u = t("271938"),
                l = t("42203"),
                i = t("800762");

            function o() {
                let e = i.default.getVoiceStateForSession(u.default.getId(), u.default.getSessionId()),
                    n = null == e ? void 0 : e.channelId;
                return l.default.getChannel(n)
            }
        },
        469607: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return A
                }
            }), t("424973"), t("222007");
            var u = t("917351"),
                l = t.n(u),
                i = t("446674"),
                o = t("913144"),
                a = t("80507"),
                d = t("374363"),
                r = t("697218"),
                s = t("235004"),
                c = t("846325"),
                f = t("397336");
            let _ = {
                    heardEventsPendingFlush: [],
                    playedEventsPendingFlush: []
                },
                E = new a.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let n = 0;
                        return e <= 3 ? n = 100 : e <= 15 ? n = 70 : e <= 30 ? n = 50 : e <= 45 ? n = 30 : e <= 80 && (n = 10), n
                    },
                    lookupKey: e => s.default.getSoundById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: c.NUM_RECENTLY_HEARD_SOUNDS
                }),
                S = new a.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let n = 0;
                        return e <= 3 ? n = 100 : e <= 15 ? n = 70 : e <= 30 ? n = 50 : e <= 45 ? n = 30 : e <= 80 && (n = 10), n
                    },
                    lookupKey: e => s.default.getSoundById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: c.NUM_FREQUENTLY_PLAYED_SOUNDS
                });

            function C(e) {
                return l.mapValues(e, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                }))
            }

            function m() {
                var e, n;
                let t = null === (e = d.default.frecencyWithoutFetchingLatest.heardSoundFrecency) || void 0 === e ? void 0 : e.heardSounds,
                    u = null === (n = d.default.frecencyWithoutFetchingLatest.playedSoundFrecency) || void 0 === n ? void 0 : n.playedSounds;
                null != t && E.overwriteHistory(C(t), _.heardEventsPendingFlush), null != u && S.overwriteHistory(C(u), _.playedEventsPendingFlush)
            }
            class g extends i.default.PersistedStore {
                initialize(e) {
                    this.waitFor(r.default, s.default), null != e && (_ = e), this.syncWith([d.default], m)
                }
                getState() {
                    return _
                }
                hasPendingUsage() {
                    return _.heardEventsPendingFlush.length > 0 || _.playedEventsPendingFlush.length > 0
                }
                get heardSoundHistory() {
                    return E.usageHistory
                }
                get playedSoundHistory() {
                    return S.usageHistory
                }
                get frecentlyHeardSounds() {
                    return E.frequently
                }
                get frecentlyPlayedSounds() {
                    return E.frequently
                }
            }
            g.displayName = "SoundboardEventStore", g.persistKey = "SoundboardEventStore";
            var A = new g(o.default, {
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var n;
                    let {
                        soundId: t,
                        userId: u
                    } = e, l = t.toString(), i = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                    u === i ? function(e) {
                        S.track(e), _.playedEventsPendingFlush.push({
                            key: e,
                            timestamp: Date.now()
                        }), S.compute()
                    }(l) : function(e) {
                        let n = s.default.getSounds();
                        for (let t of n.values()) {
                            let n = t.find(n => n.soundId.toString() === e);
                            if (null != n) return !0
                        }
                        return !1
                    }(l) && function(e) {
                        E.track(e), _.heardEventsPendingFlush.push({
                            key: e,
                            timestamp: Date.now()
                        }), E.compute()
                    }(l)
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: n
                        },
                        wasSaved: t
                    } = e;
                    n === f.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS && t && (_.heardEventsPendingFlush = [], _.playedEventsPendingFlush = [])
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
                    return L
                },
                canUseCustomCallSounds: function() {
                    return N
                },
                playSound: function() {
                    return D
                },
                maybePlayCustomJoinSound: function() {
                    return v
                },
                useSoundBoardDismissContentTypes: function() {
                    return O
                },
                removeCustomJoinSound: function() {
                    return F
                },
                updateCustomJoinSound: function() {
                    return P
                },
                trackCustomCallSoundExternallyDeleted: function() {
                    return b
                }
            }), t("424973");
            var u = t("65597"),
                l = t("151426"),
                i = t("299147"),
                o = t("880553"),
                a = t("845579"),
                d = t("872173"),
                r = t("374363"),
                s = t("229502"),
                c = t("233069"),
                f = t("957255"),
                _ = t("697218"),
                E = t("599110"),
                S = t("719923"),
                C = t("158998"),
                m = t("305122"),
                g = t("235004"),
                A = t("389480"),
                I = t("245463"),
                y = t("675961"),
                h = t("846325"),
                p = t("49111");

            function T() {
                var e;
                let n = a.SoundboardSettings.getSetting();
                return null !== (e = null == n ? void 0 : n.volume) && void 0 !== e ? e : 100
            }

            function U(e, n) {
                return (null == n ? void 0 : n.guild_id) == null || f.default.can(p.Permissions.USE_EXTERNAL_SOUNDS, n) || e.guildId === h.DEFAULT_SOUND_GUILD_ID || e.guildId === (null == n ? void 0 : n.guild_id)
            }

            function L(e, n, t) {
                let u = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                return (S.default.canUseSoundboardEverywhere(e) || n.guildId === (null == t ? void 0 : t.guild_id) || n.guildId === h.DEFAULT_SOUND_GUILD_ID) && U(n, t) && (!u || n.available)
            }

            function N(e) {
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    t = i.default.getCurrentConfig({
                        location: "65e71d_1"
                    }, {
                        autoTrackExposure: n
                    }).enabled;
                return S.default.canUseCustomCallSounds(e) && t
            }

            function D(e, n, t) {
                (0, m.playSoundLocally)(n, e), (0, s.sendVoiceChannelSoundboardEffect)(n, e, __OVERLAY__, t)
            }
            async function v(e) {
                let n = _.default.getCurrentUser(),
                    t = (0, o.default)(),
                    u = (0, y.getCustomJoinSound)(e);
                if (null == t || c.SILENT_JOIN_LEAVE_CHANNEL_TYPES.has(t.type) || null == u || !N(n) || !(0, I.canSelectedVoiceChannelUseSoundboard)()) return;
                await (0, m.maybeFetchSoundboardSounds)();
                let l = u.guildId === h.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID ? h.DEFAULT_SOUND_GUILD_ID : u.guildId,
                    i = g.default.getSound(l, u.soundId);
                if (null != i) {
                    var a, d;
                    if (!U(i, t) || !L(n, i, t, !0)) return null;
                    a = i, d = t.id, (0, m.playSoundLocally)(d, a), (0, s.sendVoiceChannelCustomCallSoundEffect)(d, a, __OVERLAY__)
                }
            }

            function O(e) {
                let {
                    isSoundboardButtonDisabled: n = !1
                } = e, t = (0, u.default)([_.default], () => _.default.getCurrentUser()), o = [l.DismissibleContent.SOUNDBOARD_EDUCATION], {
                    enabled: a,
                    showVoiceChannelCoachmark: d
                } = i.default.useExperiment({
                    location: "65e71d_2"
                }, {
                    autoTrackExposure: !1
                });
                if (a && !n && ! function() {
                        var e, n;
                        let t = null !== (n = null === (e = r.default.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== n ? n : {};
                        return Object.values(t).some(e => null != e.joinSound)
                    }()) {
                    o.push(l.DismissibleContent.CUSTOM_CALL_SOUNDS_SPARKLES);
                    let e = S.default.canUseCustomCallSounds(t),
                        n = (0, C.ageEligibleForPremiumUpsell)(t);
                    d && !S.default.isPremium(t) && n && o.push(l.DismissibleContent.CUSTOM_CALL_SOUNDS_VOICE_COACHMARK), (e || n) && o.push(l.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL)
                }
                return o
            }

            function F(e, n) {
                (0, d.updateUserGuildSettings)(e, t => {
                    t.joinSound = void 0, V({
                        guildId: e,
                        changeType: A.AnalyticsChangeType.REMOVED,
                        soundType: A.AnalyticsSoundType.ENTRY,
                        location: n
                    })
                }, d.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function P(e, n, t) {
                (0, d.updateUserGuildSettings)(e, u => {
                    let l = n.guildId === h.DEFAULT_SOUND_GUILD_ID,
                        i = l ? A.AnalyticsSoundSource.DEFAULT : A.AnalyticsSoundSource.CUSTOM,
                        o = null != u.joinSound ? A.AnalyticsChangeType.UPDATED : A.AnalyticsChangeType.ADDED;
                    u.joinSound = {
                        soundId: n.soundId,
                        guildId: l ? h.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID : n.guildId
                    }, V({
                        guildId: e,
                        changeType: o,
                        soundSource: i,
                        soundType: A.AnalyticsSoundType.ENTRY,
                        location: t
                    })
                }, d.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function V(e) {
                let {
                    guildId: n,
                    changeType: t,
                    soundType: u,
                    soundSource: l,
                    location: i
                } = e;
                E.default.track(p.AnalyticEvents.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
                    location_stack: i,
                    guild_id: "" === n ? 0 : Number(n),
                    change_type: t,
                    sound_type: u,
                    sound_source: l
                })
            }

            function b(e) {
                let {
                    location: n
                } = e;
                E.default.track(p.AnalyticEvents.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, {
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
                var f, _, E;
                let S = u.default.getChannel(o.default.getVoiceChannelId()),
                    C = null == S ? void 0 : S.getGuildId(),
                    m = l.default.getMediaSessionId(),
                    g = l.default.getRTCConnectionId(),
                    A = null === (f = i.default.getCurrentGameForAnalytics()) || void 0 === f ? void 0 : f.name,
                    I = C !== t.guildId && t.guildId !== d.DEFAULT_SOUND_GUILD_ID;
                let y = (_ = t, E = I, _.guildId === d.DEFAULT_SOUND_GUILD_ID ? "default" : E ? "custom-external" : "custom");
                a.default.track(r.AnalyticEvents.PREMIUM_FEATURE_USAGE, {
                    feature_name: s.AnalyticsPremiumFeatureNames.SOUNDBOARD_PLAY,
                    feature_tier: I ? s.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD : s.AnalyticsPremiumFeatureTiers.FREE,
                    guild_id: C,
                    location_stack: e,
                    rtc_connection_id: g,
                    media_session_id: m,
                    in_overlay: n,
                    application_name: A,
                    emoji_count: null != t.emojiId || null != t.emojiName ? 1 : 0,
                    feature_selection: y,
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
                    return h
                },
                sendVoiceChannelSoundboardEffect: function() {
                    return p
                },
                sendVoiceChannelEffect: function() {
                    return T
                }
            });
            var u, l, i = t("917351"),
                o = t("872717"),
                a = t("913144"),
                d = t("812204"),
                r = t("716241"),
                s = t("385976"),
                c = t("389480"),
                f = t("454614"),
                _ = t("18494"),
                E = t("402671"),
                S = t("82230"),
                C = t("568088"),
                m = t("397485"),
                g = t("626334"),
                A = t("49111"),
                I = t("846325");

            function y(e) {
                let n = new AbortController,
                    t = (0, i.throttle)(t => {
                        _.default.getVoiceChannelId() !== e && n.abort()
                    }, 1e3);
                return {
                    abortController: n,
                    onRequestProgress: t
                }
            }

            function h(e, n, t) {
                var u;
                let {
                    abortController: l,
                    onRequestProgress: i
                } = y(e), a = null !== (u = S.default.getState().animationType) && void 0 !== u ? u : g.VoiceChannelEffectAnimationType.BASIC, r = {
                    animation_type: a,
                    animation_id: (0, m.sampleAnimationId)(a, m.CUSTOM_CALL_SOUND_ANIMATION_RANGE)
                };
                o.default.post({
                    url: A.Endpoints.CUSTOM_CALL_SOUNDS(e),
                    body: r,
                    signal: l.signal,
                    onRequestProgress: i
                }).then(A.NOOP_NULL, () => {
                    if (l.signal.aborted) return
                }), (0, f.default)([d.default.CHANNEL_CALL], t, n, c.AnalyticsSoundType.ENTRY)
            }

            function p(e, n, t, u) {
                var l, i;
                let a = s.default.getCustomEmojiById(null !== (l = n.emojiId) && void 0 !== l ? l : ""),
                    {
                        abortController: d,
                        onRequestProgress: r
                    } = y(e),
                    _ = {
                        sound_id: n.soundId,
                        emoji_id: n.emojiId,
                        emoji_name: null !== (i = n.emojiName) && void 0 !== i ? i : null == a ? void 0 : a.name
                    };
                n.guildId !== I.DEFAULT_SOUND_GUILD_ID && (_.source_guild_id = n.guildId), o.default.post({
                    url: A.Endpoints.SEND_SOUNDBOARD_SOUND(e),
                    body: _,
                    signal: d.signal,
                    onRequestProgress: r
                }).then(A.NOOP_NULL, () => {
                    if (d.signal.aborted) return
                }), (0, f.default)(null != u ? u : [], t, n, c.AnalyticsSoundType.DEFAULT)
            }(u = l || (l = {})).EMOJI_PICKER = "emoji_picker", u.EFFECT_BAR = "effect_bar";
            let T = async e => {
                let {
                    channel: n,
                    emoji: t,
                    location: u,
                    animationType: l,
                    animationId: i,
                    isPremium: d
                } = e;
                if (null == t || C.default.isOnCooldown) return;
                let r = d && null != l ? l : g.VoiceChannelEffectAnimationType.BASIC;
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
                        url: A.Endpoints.VOICE_CHANNEL_EFFECTS(n.id),
                        body: e
                    }), L(n, t, u, r), a.default.dispatch({
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
            }, U = {
                [g.VoiceChannelEffectAnimationType.BASIC]: "Basic",
                [g.VoiceChannelEffectAnimationType.PREMIUM]: "Premium"
            }, L = (e, n, t, u) => {
                let {
                    unicode: l,
                    custom: i,
                    customExternal: o,
                    managed: a,
                    managedExternal: d,
                    animated: s
                } = (0, E.countEmoji)([n], e.getGuildId()), c = U[u];
                r.default.trackWithMetadata(A.AnalyticEvents.VOICE_CHANNEL_EFFECT_SENT, {
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
                    return _
                },
                default: function() {
                    return m
                }
            }), t("222007"), t("843762");
            var l = t("917351"),
                i = t("446674"),
                o = t("819855"),
                a = t("913144"),
                d = t("397485"),
                r = t("99795");
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
                S = (0, l.debounce)(() => {
                    let e = (0, d.getEffectAnnouncement)(f);
                    o.AccessibilityAnnouncer.announce(e, "polite"), f = []
                }, 500);
            class C extends i.default.Store {
                get recentlyUsedEmojis() {
                    return s
                }
                get isOnCooldown() {
                    return null != u && new Date < u
                }
                get effectCooldownEndTime() {
                    return u
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
                    null != n && (s.unshift(n), (s = (0, l.uniqBy)(s, "name")).length > r.EMOJI_PICKER_EMOJI_TO_SHOW_COUNT + 1 && s.pop())
                },
                VOICE_CHANNEL_EFFECT_SEND: e => {
                    let {
                        emoji: n,
                        userId: t,
                        animationType: u
                    } = e;
                    null != n && null != u && (c[t] = {
                        emoji: n,
                        sentAt: Date.now(),
                        animationType: u
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
                        t < 1e4 && (u = new Date(e.getTime() + 1e4 - t))
                    }
                },
                VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: e => {
                    let {
                        cooldownEndsAtMs: n
                    } = e;
                    u = new Date(Date.now() + n)
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
            var u = t("37983");
            t("884691");
            var l = t("469563"),
                i = t("891722"),
                o = t("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: n = 24,
                        height: t = 24,
                        color: l = "currentColor",
                        foreground: i,
                        ...a
                    } = e;
                    return (0, u.jsx)("svg", {
                        ...(0, o.default)(a),
                        width: n,
                        height: t,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, u.jsx)("path", {
                            className: i,
                            fill: l,
                            d: "M20 10.9378H14.2199H8.06628L10.502 8.50202L9 7L4 12L9 17L10.502 15.498L8.06628 13.0622H20V10.9378Z"
                        })
                    })
                }, i.ArrowSmallLeftIcon)
        }
    }
]);
//# sourceMappingURL=e5abb1a3111237a2ee2a.js.map