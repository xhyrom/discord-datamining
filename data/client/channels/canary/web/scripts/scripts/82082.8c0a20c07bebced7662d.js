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
                    ...d
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: t,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M3.3 11.3a1 1 0 0 0 0 1.4l5 5a1 1 0 0 0 1.4-1.4L6.42 13H20a1 1 0 1 0 0-2H6.41l3.3-3.3a1 1 0 0 0-1.42-1.4l-5 5Z",
                        className: a
                    })
                })
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
                    return L
                }
            }), t("424973"), t("222007");
            var l = t("917351"),
                u = t.n(l),
                i = t("693566"),
                o = t.n(i),
                a = t("446674"),
                d = t("913144"),
                r = t("80507"),
                s = t("374363"),
                c = t("697218"),
                f = t("880342"),
                _ = t("235004"),
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
                    lookupKey: e => _.default.getSoundById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: S.NUM_FREQUENTLY_USED_SOUNDS
                });

            function g() {
                var e, n;
                if (!I()) return;
                let t = null === (e = s.default.frecencyWithoutFetchingLatest.playedSoundFrecency) || void 0 === e ? void 0 : e.playedSounds;
                A.overwriteHistory((n = null != t ? t : {}, u.mapValues(n, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                }))), y)
            }

            function I() {
                return (0, f.recentlyHeardExperiment)({
                    location: "soundboard_event_store",
                    autoTrackExposure: !1
                }).canSeeFrequentlyPlayed
            }
            class U extends a.default.PersistedStore {
                initialize(e) {
                    this.waitFor(c.default, _.default), (null == e ? void 0 : e.recentlyHeardCache) != null && m.load(e.recentlyHeardCache), (null == e ? void 0 : e.playedEventsPendingFlush) != null && (y = e.playedEventsPendingFlush), this.syncWith([s.default], g)
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
            U.displayName = "SoundboardEventStore", U.persistKey = "SoundboardEventStore";
            var L = new U(d.default, {
                GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY: function(e) {
                    let {
                        sound: n,
                        trigger: t
                    } = e;
                    if (!I()) return;
                    let l = n.soundId.toString();
                    t === E.LocalSoundTrigger.SOUNDBOARD && function(e) {
                        A.track(e), y.push({
                            key: e,
                            timestamp: Date.now()
                        }), A.compute()
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
                        m.set(e, e)
                    }(u)
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: n
                        },
                        wasSaved: t
                    } = e;
                    I() && n === C.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS && t && (y = [])
                }
            })
        },
        78581: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                getAmplitudinalSoundboardVolume: function() {
                    return L
                },
                canUseSoundboardSound: function() {
                    return N
                },
                playSound: function() {
                    return D
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
            var l = t("65597"),
                u = t("151426"),
                i = t("880553"),
                o = t("845579"),
                a = t("872173"),
                d = t("374363"),
                r = t("229502"),
                s = t("233069"),
                c = t("957255"),
                f = t("697218"),
                _ = t("599110"),
                E = t("719923"),
                S = t("158998"),
                C = t("305122"),
                y = t("235004"),
                m = t("389480"),
                A = t("245463"),
                g = t("675961"),
                I = t("846325"),
                U = t("49111");

            function L() {
                var e;
                let n = o.SoundboardSettings.getSetting();
                return null !== (e = null == n ? void 0 : n.volume) && void 0 !== e ? e : 100
            }

            function T(e, n) {
                return (null == n ? void 0 : n.guild_id) == null || c.default.can(U.Permissions.USE_EXTERNAL_SOUNDS, n) || e.guildId === I.DEFAULT_SOUND_GUILD_ID || e.guildId === (null == n ? void 0 : n.guild_id)
            }

            function N(e, n, t) {
                let l = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                return (E.default.canUseSoundboardEverywhere(e) || n.guildId === (null == t ? void 0 : t.guild_id) || n.guildId === I.DEFAULT_SOUND_GUILD_ID) && T(n, t) && (!l || n.available)
            }

            function D(e, n, t) {
                (0, C.playSoundLocally)(n, e, m.LocalSoundTrigger.SOUNDBOARD), (0, r.sendVoiceChannelSoundboardEffect)(n, e, __OVERLAY__, t)
            }
            async function p(e) {
                let n = f.default.getCurrentUser(),
                    t = (0, i.default)(),
                    l = (0, g.getCustomJoinSound)(e);
                if (null == t || s.SILENT_JOIN_LEAVE_CHANNEL_TYPES.has(t.type) || null == l || !E.default.canUseCustomCallSounds(n) || !(0, A.canSelectedVoiceChannelUseSoundboard)()) return;
                await (0, C.maybeFetchSoundboardSounds)();
                let u = l.guildId === I.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID ? I.DEFAULT_SOUND_GUILD_ID : l.guildId,
                    o = y.default.getSound(u, l.soundId);
                if (null != o) {
                    var a, d;
                    if (!T(o, t) || !N(n, o, t, !0)) return null;
                    a = o, d = t.id, (0, C.playSoundLocally)(d, a, m.LocalSoundTrigger.JOINED_VOICE_CHANNEL), (0, r.sendVoiceChannelCustomCallSoundEffect)(d, a, __OVERLAY__)
                }
            }

            function O(e) {
                let {
                    isSoundboardButtonDisabled: n = !1
                } = e, t = (0, l.default)([f.default], () => f.default.getCurrentUser()), i = [u.DismissibleContent.SOUNDBOARD_EDUCATION];
                if (!n && ! function() {
                        var e, n;
                        let t = null !== (n = null === (e = d.default.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== n ? n : {};
                        return Object.values(t).some(e => null != e.joinSound)
                    }()) {
                    i.push(u.DismissibleContent.CUSTOM_CALL_SOUNDS_SPARKLES);
                    let e = (0, S.ageEligibleForPremiumUpsell)(t);
                    (E.default.canUseCustomCallSounds(t) || e) && i.push(u.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL)
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
                (0, a.updateUserGuildSettings)(e, l => {
                    let u = n.guildId === I.DEFAULT_SOUND_GUILD_ID,
                        i = u ? m.AnalyticsSoundSource.DEFAULT : m.AnalyticsSoundSource.CUSTOM,
                        o = null != l.joinSound ? m.AnalyticsChangeType.UPDATED : m.AnalyticsChangeType.ADDED;
                    l.joinSound = {
                        soundId: n.soundId,
                        guildId: u ? I.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID : n.guildId
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
                    soundType: l,
                    soundSource: u,
                    location: i
                } = e;
                _.default.track(U.AnalyticEvents.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
                    location_stack: i,
                    guild_id: "" === n ? 0 : Number(n),
                    change_type: t,
                    sound_type: l,
                    sound_source: u
                })
            }

            function R(e) {
                let {
                    location: n
                } = e;
                _.default.track(U.AnalyticEvents.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, {
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
            var l = t("42203"),
                u = t("957255"),
                i = t("18494"),
                o = t("49111");

            function a() {
                let e = i.default.getVoiceChannelId(),
                    n = l.default.getChannel(e);
                return d(n)
            }

            function d(e) {
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
                d = t("846325"),
                r = t("49111"),
                s = t("646718");

            function c(e, n, t, c) {
                var f, _, E;
                let S = l.default.getChannel(o.default.getVoiceChannelId()),
                    C = null == S ? void 0 : S.getGuildId(),
                    y = u.default.getMediaSessionId(),
                    m = u.default.getRTCConnectionId(),
                    A = null === (f = i.default.getCurrentGameForAnalytics()) || void 0 === f ? void 0 : f.name,
                    g = C !== t.guildId && t.guildId !== d.DEFAULT_SOUND_GUILD_ID;
                let I = (_ = t, E = g, _.guildId === d.DEFAULT_SOUND_GUILD_ID ? "default" : E ? "custom-external" : "custom");
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
                    return d
                },
                getCustomJoinSound: function() {
                    return r
                }
            });
            var l, u, i = t("446674"),
                o = t("374363"),
                a = t("846325");

            function d(e) {
                return (0, i.useStateFromStores)([o.default], () => {
                    var n, t;
                    let l = null !== (t = null === (n = o.default.settings.guilds) || void 0 === n ? void 0 : n.guilds) && void 0 !== t ? t : {};
                    return s(e, l)
                })
            }

            function r(e) {
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
                    return U
                },
                sendVoiceChannelSoundboardEffect: function() {
                    return L
                },
                sendVoiceChannelEffect: function() {
                    return T
                }
            });
            var l, u, i = t("917351"),
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
                y = t("397485"),
                m = t("626334"),
                A = t("49111"),
                g = t("846325");

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

            function U(e, n, t) {
                var l;
                let {
                    abortController: u,
                    onRequestProgress: i
                } = I(e), a = null !== (l = S.default.getState().animationType) && void 0 !== l ? l : m.VoiceChannelEffectAnimationType.BASIC, r = {
                    animation_type: a,
                    animation_id: (0, y.sampleAnimationId)(a, y.CUSTOM_CALL_SOUND_ANIMATION_RANGE)
                };
                o.default.post({
                    url: A.Endpoints.CUSTOM_CALL_SOUNDS(e),
                    body: r,
                    signal: u.signal,
                    onRequestProgress: i
                }).then(A.NOOP_NULL, () => {
                    if (u.signal.aborted) return
                }), (0, f.default)([d.default.CHANNEL_CALL], t, n, c.AnalyticsSoundType.ENTRY)
            }

            function L(e, n, t, l) {
                var u, i;
                let a = s.default.getCustomEmojiById(null !== (u = n.emojiId) && void 0 !== u ? u : ""),
                    {
                        abortController: d,
                        onRequestProgress: r
                    } = I(e),
                    _ = {
                        sound_id: n.soundId,
                        emoji_id: n.emojiId,
                        emoji_name: null !== (i = n.emojiName) && void 0 !== i ? i : null == a ? void 0 : a.name
                    };
                n.guildId !== g.DEFAULT_SOUND_GUILD_ID && (_.source_guild_id = n.guildId), o.default.post({
                    url: A.Endpoints.SEND_SOUNDBOARD_SOUND(e),
                    body: _,
                    signal: d.signal,
                    onRequestProgress: r
                }).then(A.NOOP_NULL, () => {
                    if (d.signal.aborted) return
                }), (0, f.default)(null != l ? l : [], t, n, c.AnalyticsSoundType.DEFAULT)
            }(l = u || (u = {})).EMOJI_PICKER = "emoji_picker", l.EFFECT_BAR = "effect_bar";
            let T = async e => {
                let {
                    channel: n,
                    emoji: t,
                    location: l,
                    animationType: u,
                    animationId: i,
                    isPremium: d
                } = e;
                if (null == t || C.default.isOnCooldown) return;
                let r = d && null != u ? u : m.VoiceChannelEffectAnimationType.BASIC;
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
                    }), D(n, t, l, r), a.default.dispatch({
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
            }, N = {
                [m.VoiceChannelEffectAnimationType.BASIC]: "Basic",
                [m.VoiceChannelEffectAnimationType.PREMIUM]: "Premium"
            }, D = (e, n, t, l) => {
                let {
                    unicode: u,
                    custom: i,
                    customExternal: o,
                    managed: a,
                    managedExternal: d,
                    animated: s
                } = (0, E.countEmoji)([n], e.getGuildId()), c = N[l];
                r.default.trackWithMetadata(A.AnalyticEvents.VOICE_CHANNEL_EFFECT_SENT, {
                    channel_id: e.id,
                    guild_id: e.getGuildId(),
                    location: t,
                    emoji_unicode: u,
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
            let l;
            t.r(n), t.d(n, {
                default: function() {
                    return d
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
            var d = new a(i.default, {
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
                    return y
                }
            }), t("222007"), t("843762");
            var u = t("917351"),
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
                S = (0, u.debounce)(() => {
                    let e = (0, d.getEffectAnnouncement)(f);
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
            var y = new C(a.default, {
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
                    null != n && (s.unshift(n), (s = (0, u.uniqBy)(s, "name")).length > r.EMOJI_PICKER_EMOJI_TO_SHOW_COUNT + 1 && s.pop())
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
//# sourceMappingURL=82082.8c0a20c07bebced7662d.js.map