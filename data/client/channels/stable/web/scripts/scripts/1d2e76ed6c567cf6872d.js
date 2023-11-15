(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["82082"], {
        891722: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                ArrowSmallLeftIcon: function() {
                    return o
                }
            });
            var i = t("37983");
            t("884691");
            var u = t("669491"),
                l = t("75196");
            let o = e => {
                let {
                    width: n = 24,
                    height: t = 24,
                    color: o = u.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...d
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: t,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
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
                    return l
                },
                useCustomCallSoundsExperiment: function() {
                    return o
                }
            });
            var i = t("862205");
            let u = (0, i.createExperiment)({
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
            var l = u;
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
            var i = t("271938"),
                u = t("42203"),
                l = t("800762");

            function o() {
                let e = l.default.getVoiceStateForSession(i.default.getId(), i.default.getSessionId()),
                    n = null == e ? void 0 : e.channelId;
                return u.default.getChannel(n)
            }
        },
        469607: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return m
                }
            }), t("222007"), t("424973");
            var i = t("917351"),
                u = t.n(i),
                l = t("446674"),
                o = t("913144"),
                a = t("80507"),
                d = t("374363"),
                r = t("697218"),
                s = t("235004"),
                c = t("846325"),
                f = t("397336");
            let _ = {
                    heardEventsPendingFlush: []
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
                });

            function C() {
                var e, n;
                let t = null === (e = d.default.frecencyWithoutFetchingLatest.heardSoundFrecency) || void 0 === e ? void 0 : e.heardSounds;
                if (null != t) {
                    ;
                    E.overwriteHistory((n = t, u.mapValues(n, e => ({
                        ...e,
                        recentUses: e.recentUses.map(Number).filter(e => e > 0)
                    }))), _.heardEventsPendingFlush)
                }
            }
            class S extends l.default.PersistedStore {
                initialize(e) {
                    this.waitFor(r.default, s.default), null != e && (_ = e), this.syncWith([d.default], C)
                }
                getState() {
                    return _
                }
                hasPendingUsage() {
                    return _.heardEventsPendingFlush.length > 0
                }
                get heardSoundHistory() {
                    return E.usageHistory
                }
                get frecentlyHeardSounds() {
                    return E.frequently
                }
            }
            S.displayName = "SoundboardEventStore", S.persistKey = "SoundboardEventStore";
            var m = new S(o.default, {
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var n;
                    let {
                        soundId: t,
                        userId: i
                    } = e, u = t.toString(), l = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.id, o = s.default.getSounds(), a = !1;
                    for (let e of o.values()) {
                        let n = e.find(e => e.soundId.toString() === u.toString());
                        if (null != n) {
                            a = !0;
                            break
                        }
                    }
                    i !== l && a && (E.track(u), _.heardEventsPendingFlush.push({
                        key: u,
                        timestamp: Date.now()
                    }), E.compute())
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: n
                        },
                        wasSaved: t
                    } = e;
                    n === f.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS && t && (_.heardEventsPendingFlush = [])
                }
            })
        },
        78581: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                getAmplitudinalSoundboardVolume: function() {
                    return h
                },
                canUseSoundboardSound: function() {
                    return D
                },
                canUseCustomCallSounds: function() {
                    return p
                },
                playSound: function() {
                    return y
                },
                maybePlayCustomJoinSound: function() {
                    return O
                },
                useSoundBoardDismissContentTypes: function() {
                    return v
                },
                removeCustomJoinSound: function() {
                    return F
                },
                updateCustomJoinSound: function() {
                    return V
                },
                trackCustomCallSoundExternallyDeleted: function() {
                    return R
                }
            }), t("424973");
            var i = t("65597"),
                u = t("151426"),
                l = t("299147"),
                o = t("880553"),
                a = t("845579"),
                d = t("872173"),
                r = t("374363"),
                s = t("229502"),
                c = t("233069"),
                f = t("957255"),
                _ = t("697218"),
                E = t("599110"),
                C = t("719923"),
                S = t("158998"),
                m = t("305122"),
                A = t("235004"),
                g = t("389480"),
                I = t("245463"),
                T = t("675961"),
                U = t("846325"),
                L = t("49111");

            function h() {
                var e;
                let n = a.SoundboardSettings.getSetting();
                return null !== (e = null == n ? void 0 : n.volume) && void 0 !== e ? e : 100
            }

            function N(e, n) {
                return (null == n ? void 0 : n.guild_id) == null || f.default.can(L.Permissions.USE_EXTERNAL_SOUNDS, n) || e.guildId === U.DEFAULT_SOUND_GUILD_ID || e.guildId === (null == n ? void 0 : n.guild_id)
            }

            function D(e, n, t) {
                let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                return (C.default.canUseSoundboardEverywhere(e) || n.guildId === (null == t ? void 0 : t.guild_id) || n.guildId === U.DEFAULT_SOUND_GUILD_ID) && N(n, t) && (!i || n.available)
            }

            function p(e) {
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    t = l.default.getCurrentConfig({
                        location: "65e71d_1"
                    }, {
                        autoTrackExposure: n
                    }).enabled;
                return C.default.canUseCustomCallSounds(e) && t
            }

            function y(e, n, t) {
                (0, m.playSoundLocally)(n, e), (0, s.sendVoiceChannelSoundboardEffect)(n, e, __OVERLAY__, t)
            }
            async function O(e) {
                let n = _.default.getCurrentUser(),
                    t = (0, o.default)(),
                    i = (0, T.getCustomJoinSound)(e);
                if (null == t || c.SILENT_JOIN_LEAVE_CHANNEL_TYPES.has(t.type) || null == i || !p(n) || !(0, I.canSelectedVoiceChannelUseSoundboard)()) return;
                await (0, m.maybeFetchSoundboardSounds)();
                let u = i.guildId === U.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID ? U.DEFAULT_SOUND_GUILD_ID : i.guildId,
                    l = A.default.getSound(u, i.soundId);
                if (null != l) {
                    var a, d;
                    if (!N(l, t) || !D(n, l, t, !0)) return null;
                    a = l, d = t.id, (0, m.playSoundLocally)(d, a), (0, s.sendVoiceChannelCustomCallSoundEffect)(d, a, __OVERLAY__)
                }
            }

            function v(e) {
                let {
                    isSoundboardButtonDisabled: n = !1
                } = e, t = (0, i.default)([_.default], () => _.default.getCurrentUser()), o = [u.DismissibleContent.SOUNDBOARD_EDUCATION], {
                    enabled: a,
                    showVoiceChannelCoachmark: d
                } = l.default.useExperiment({
                    location: "65e71d_2"
                }, {
                    autoTrackExposure: !1
                });
                if (a && !n && ! function() {
                        var e, n;
                        let t = null !== (n = null === (e = r.default.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== n ? n : {};
                        return Object.values(t).some(e => null != e.joinSound)
                    }()) {
                    o.push(u.DismissibleContent.CUSTOM_CALL_SOUNDS_SPARKLES);
                    let e = C.default.canUseCustomCallSounds(t),
                        n = (0, S.ageEligibleForPremiumUpsell)(t);
                    d && !C.default.isPremium(t) && n && o.push(u.DismissibleContent.CUSTOM_CALL_SOUNDS_VOICE_COACHMARK), (e || n) && o.push(u.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL)
                }
                return o
            }

            function F(e, n) {
                (0, d.updateUserGuildSettings)(e, t => {
                    t.joinSound = void 0, b({
                        guildId: e,
                        changeType: g.AnalyticsChangeType.REMOVED,
                        soundType: g.AnalyticsSoundType.ENTRY,
                        location: n
                    })
                }, d.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function V(e, n, t) {
                (0, d.updateUserGuildSettings)(e, i => {
                    let u = n.guildId === U.DEFAULT_SOUND_GUILD_ID,
                        l = u ? g.AnalyticsSoundSource.DEFAULT : g.AnalyticsSoundSource.CUSTOM,
                        o = null != i.joinSound ? g.AnalyticsChangeType.UPDATED : g.AnalyticsChangeType.ADDED;
                    i.joinSound = {
                        soundId: n.soundId,
                        guildId: u ? U.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID : n.guildId
                    }, b({
                        guildId: e,
                        changeType: o,
                        soundSource: l,
                        soundType: g.AnalyticsSoundType.ENTRY,
                        location: t
                    })
                }, d.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function b(e) {
                let {
                    guildId: n,
                    changeType: t,
                    soundType: i,
                    soundSource: u,
                    location: l
                } = e;
                E.default.track(L.AnalyticEvents.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
                    location_stack: l,
                    guild_id: "" === n ? 0 : Number(n),
                    change_type: t,
                    sound_type: i,
                    sound_source: u
                })
            }

            function R(e) {
                let {
                    location: n
                } = e;
                E.default.track(L.AnalyticEvents.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, {
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
            var i = t("42203"),
                u = t("957255"),
                l = t("18494"),
                o = t("49111");

            function a() {
                let e = l.default.getVoiceChannelId(),
                    n = i.default.getChannel(e);
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
            var i = t("42203"),
                u = t("945956"),
                l = t("568307"),
                o = t("18494"),
                a = t("599110"),
                d = t("846325"),
                r = t("49111"),
                s = t("646718");

            function c(e, n, t, c) {
                var f, _, E;
                let C = i.default.getChannel(o.default.getVoiceChannelId()),
                    S = null == C ? void 0 : C.getGuildId(),
                    m = u.default.getMediaSessionId(),
                    A = u.default.getRTCConnectionId(),
                    g = null === (f = l.default.getCurrentGameForAnalytics()) || void 0 === f ? void 0 : f.name,
                    I = S !== t.guildId && t.guildId !== d.DEFAULT_SOUND_GUILD_ID;
                let T = (_ = t, E = I, _.guildId === d.DEFAULT_SOUND_GUILD_ID ? "default" : E ? "custom-external" : "custom");
                a.default.track(r.AnalyticEvents.PREMIUM_FEATURE_USAGE, {
                    feature_name: s.AnalyticsPremiumFeatureNames.SOUNDBOARD_PLAY,
                    feature_tier: I ? s.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD : s.AnalyticsPremiumFeatureTiers.FREE,
                    guild_id: S,
                    location_stack: e,
                    rtc_connection_id: A,
                    media_session_id: m,
                    in_overlay: n,
                    application_name: g,
                    emoji_count: null != t.emojiId || null != t.emojiName ? 1 : 0,
                    feature_selection: T,
                    feature_selection_id: t.soundId,
                    sound_type: c,
                    is_broadcast: null != C && C.isBroadcastChannel()
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
            var i, u, l = t("446674"),
                o = t("374363"),
                a = t("846325");

            function d(e) {
                return (0, l.useStateFromStores)([o.default], () => {
                    var n, t;
                    let i = null !== (t = null === (n = o.default.settings.guilds) || void 0 === n ? void 0 : n.guilds) && void 0 !== t ? t : {};
                    return s(e, i)
                })
            }

            function r(e) {
                var n, t;
                let i = null !== (t = null === (n = o.default.settings.guilds) || void 0 === n ? void 0 : n.guilds) && void 0 !== t ? t : {};
                return s(e, i)
            }

            function s(e, n) {
                var t, i;
                let u = null === (t = n[e]) || void 0 === t ? void 0 : t.joinSound,
                    l = null === (i = n[a.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID]) || void 0 === i ? void 0 : i.joinSound,
                    o = null != u ? u : l;
                return null != o ? {
                    ...o,
                    type: null != u ? 1 : 0
                } : void 0
            }(i = u || (u = {}))[i.GLOBAL = 0] = "GLOBAL", i[i.GUILD = 1] = "GUILD"
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
                    return h
                }
            });
            var i, u, l = t("917351"),
                o = t("872717"),
                a = t("913144"),
                d = t("812204"),
                r = t("716241"),
                s = t("385976"),
                c = t("389480"),
                f = t("454614"),
                _ = t("18494"),
                E = t("402671"),
                C = t("82230"),
                S = t("568088"),
                m = t("397485"),
                A = t("626334"),
                g = t("49111"),
                I = t("846325");

            function T(e) {
                let n = new AbortController,
                    t = (0, l.throttle)(t => {
                        _.default.getVoiceChannelId() !== e && n.abort()
                    }, 1e3);
                return {
                    abortController: n,
                    onRequestProgress: t
                }
            }

            function U(e, n, t) {
                var i;
                let {
                    abortController: u,
                    onRequestProgress: l
                } = T(e), a = null !== (i = C.default.getState().animationType) && void 0 !== i ? i : A.VoiceChannelEffectAnimationType.BASIC, r = {
                    animation_type: a,
                    animation_id: (0, m.sampleAnimationId)(a, m.CUSTOM_CALL_SOUND_ANIMATION_RANGE)
                };
                o.default.post({
                    url: g.Endpoints.CUSTOM_CALL_SOUNDS(e),
                    body: r,
                    signal: u.signal,
                    onRequestProgress: l
                }).then(g.NOOP_NULL, () => {
                    if (u.signal.aborted) return
                }), (0, f.default)([d.default.CHANNEL_CALL], t, n, c.AnalyticsSoundType.ENTRY)
            }

            function L(e, n, t, i) {
                var u, l;
                let a = s.default.getCustomEmojiById(null !== (u = n.emojiId) && void 0 !== u ? u : ""),
                    {
                        abortController: d,
                        onRequestProgress: r
                    } = T(e),
                    _ = {
                        sound_id: n.soundId,
                        emoji_id: n.emojiId,
                        emoji_name: null !== (l = n.emojiName) && void 0 !== l ? l : null == a ? void 0 : a.name
                    };
                n.guildId !== I.DEFAULT_SOUND_GUILD_ID && (_.source_guild_id = n.guildId), o.default.post({
                    url: g.Endpoints.SEND_SOUNDBOARD_SOUND(e),
                    body: _,
                    signal: d.signal,
                    onRequestProgress: r
                }).then(g.NOOP_NULL, () => {
                    if (d.signal.aborted) return
                }), (0, f.default)(null != i ? i : [], t, n, c.AnalyticsSoundType.DEFAULT)
            }(i = u || (u = {})).EMOJI_PICKER = "emoji_picker", i.EFFECT_BAR = "effect_bar";
            let h = async e => {
                let {
                    channel: n,
                    emoji: t,
                    location: i,
                    animationType: u,
                    animationId: l,
                    isPremium: d
                } = e;
                if (null == t || S.default.isOnCooldown) return;
                let r = d && null != u ? u : A.VoiceChannelEffectAnimationType.BASIC;
                try {
                    let e = null != t.id ? {
                        emoji_id: t.id,
                        emoji_name: t.name,
                        animation_type: r,
                        animation_id: l
                    } : {
                        emoji_id: null,
                        emoji_name: t.optionallyDiverseSequence,
                        animation_type: r,
                        animation_id: l
                    };
                    await o.default.post({
                        url: g.Endpoints.VOICE_CHANNEL_EFFECTS(n.id),
                        body: e
                    }), D(n, t, i, r), a.default.dispatch({
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
                [A.VoiceChannelEffectAnimationType.BASIC]: "Basic",
                [A.VoiceChannelEffectAnimationType.PREMIUM]: "Premium"
            }, D = (e, n, t, i) => {
                let {
                    unicode: u,
                    custom: l,
                    customExternal: o,
                    managed: a,
                    managedExternal: d,
                    animated: s
                } = (0, E.countEmoji)([n], e.getGuildId()), c = N[i];
                r.default.trackWithMetadata(g.AnalyticEvents.VOICE_CHANNEL_EFFECT_SENT, {
                    channel_id: e.id,
                    guild_id: e.getGuildId(),
                    location: t,
                    emoji_unicode: u,
                    emoji_custom: l,
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
            let i;
            t.r(n), t.d(n, {
                default: function() {
                    return d
                }
            });
            var u = t("446674"),
                l = t("913144"),
                o = t("626334");
            class a extends u.default.PersistedStore {
                initialize(e) {
                    var n;
                    i = null !== (n = null == e ? void 0 : e.animationType) && void 0 !== n ? n : o.VoiceChannelEffectAnimationType.PREMIUM
                }
                getState() {
                    return {
                        animationType: i
                    }
                }
            }
            a.displayName = "VoiceChannelEffectsPersistedStore", a.persistKey = "VoiceChannelEffectsPersistedStore";
            var d = new a(l.default, {
                VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: () => {
                    i = i === o.VoiceChannelEffectAnimationType.BASIC ? o.VoiceChannelEffectAnimationType.PREMIUM : o.VoiceChannelEffectAnimationType.BASIC
                }
            })
        },
        568088: function(e, n, t) {
            "use strict";
            let i;
            t.r(n), t.d(n, {
                clearVoiceChannelEffectForUser: function() {
                    return _
                },
                default: function() {
                    return m
                }
            }), t("222007"), t("843762");
            var u = t("917351"),
                l = t("446674"),
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
                C = (0, u.debounce)(() => {
                    let e = (0, d.getEffectAnnouncement)(f);
                    o.AccessibilityAnnouncer.announce(e, "polite"), f = []
                }, 500);
            class S extends l.default.Store {
                get recentlyUsedEmojis() {
                    return s
                }
                get isOnCooldown() {
                    return null != i && new Date < i
                }
                get effectCooldownEndTime() {
                    return i
                }
                getEffectForUserId(e) {
                    return c[e]
                }
            }
            S.displayName = "VoiceChannelEffectsStore";
            var m = new S(a.default, {
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
                        animationType: i
                    } = e;
                    null != n && null != i && (c[t] = {
                        emoji: n,
                        sentAt: Date.now(),
                        animationType: i
                    }, f = [...f, {
                        emojiName: n.name,
                        userId: t
                    }], C())
                },
                VOICE_CHANNEL_EFFECT_SENT_LOCAL: () => {
                    let e = new Date;
                    if ((E = [e, ...E].slice(0, 20)).length >= 20) {
                        let n = E[E.length - 1],
                            t = e.getTime() - n.getTime();
                        t < 1e4 && (i = new Date(e.getTime() + 1e4 - t))
                    }
                },
                VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: e => {
                    let {
                        cooldownEndsAtMs: n
                    } = e;
                    i = new Date(Date.now() + n)
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
            var i = t("37983");
            t("884691");
            var u = t("469563"),
                l = t("891722"),
                o = t("75196"),
                a = (0, u.replaceIcon)(function(e) {
                    let {
                        width: n = 24,
                        height: t = 24,
                        color: u = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(a),
                        width: n,
                        height: t,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fill: u,
                            d: "M20 10.9378H14.2199H8.06628L10.502 8.50202L9 7L4 12L9 17L10.502 15.498L8.06628 13.0622H20V10.9378Z"
                        })
                    })
                }, l.ArrowSmallLeftIcon)
        }
    }
]);
//# sourceMappingURL=1d2e76ed6c567cf6872d.js.map