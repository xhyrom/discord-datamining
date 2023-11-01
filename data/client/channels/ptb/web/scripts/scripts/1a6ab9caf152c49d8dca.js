(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["71827"], {
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
        78581: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                getAmplitudinalSoundboardVolume: function() {
                    return D
                },
                canUseSoundboardSound: function() {
                    return O
                },
                canUseCustomCallSounds: function() {
                    return y
                },
                playSound: function() {
                    return p
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
                    return V
                },
                trackCustomCallSoundExternallyDeleted: function() {
                    return R
                }
            });
            var i = t("65597"),
                u = t("151426"),
                l = t("299147"),
                o = t("880553"),
                a = t("845579"),
                d = t("872173"),
                r = t("374363"),
                s = t("229502"),
                c = t("233069"),
                _ = t("957255"),
                f = t("697218"),
                E = t("599110"),
                C = t("719923"),
                S = t("158998"),
                m = t("305122"),
                A = t("235004"),
                I = t("389480"),
                T = t("245463"),
                U = t("675961"),
                L = t("846325"),
                g = t("49111");

            function D() {
                var e;
                let n = a.SoundboardSettings.getSetting();
                return null !== (e = null == n ? void 0 : n.volume) && void 0 !== e ? e : 100
            }

            function N(e, n) {
                return (null == n ? void 0 : n.guild_id) == null || _.default.can(g.Permissions.USE_EXTERNAL_SOUNDS, n) || e.guildId === L.DEFAULT_SOUND_GUILD_ID || e.guildId === (null == n ? void 0 : n.guild_id)
            }

            function O(e, n, t) {
                let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                return (C.default.canUseSoundboardEverywhere(e) || n.guildId === (null == t ? void 0 : t.guild_id) || n.guildId === L.DEFAULT_SOUND_GUILD_ID) && N(n, t) && (!i || n.available)
            }

            function y(e) {
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    t = l.default.getCurrentConfig({
                        location: "65e71d_1"
                    }, {
                        autoTrackExposure: n
                    }).enabled;
                return C.default.canUseCustomCallSounds(e) && t
            }

            function p(e, n, t) {
                (0, m.playSoundLocally)(n, e), (0, s.sendVoiceChannelSoundboardEffect)(n, e, __OVERLAY__, t)
            }
            async function h(e) {
                let n = f.default.getCurrentUser(),
                    t = (0, o.default)(),
                    i = (0, U.getCustomJoinSound)(e);
                if (null == t || c.SILENT_JOIN_LEAVE_CHANNEL_TYPES.has(t.type) || null == i || !y(n) || !(0, T.canSelectedVoiceChannelUseSoundboard)()) return;
                await (0, m.maybeFetchSoundboardSounds)();
                let u = i.guildId === L.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID ? L.DEFAULT_SOUND_GUILD_ID : i.guildId,
                    l = A.default.getSound(u, i.soundId);
                if (null != l) {
                    var a, d;
                    if (!N(l, t) || !O(n, l, t, !0)) return null;
                    a = l, d = t.id, (0, m.playSoundLocally)(d, a), (0, s.sendVoiceChannelCustomCallSoundEffect)(d, a, __OVERLAY__)
                }
            }

            function v(e) {
                let {
                    isSoundboardButtonDisabled: n = !1
                } = e, t = (0, i.default)([f.default], () => f.default.getCurrentUser()), o = [u.DismissibleContent.SOUNDBOARD_EDUCATION], {
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
                        changeType: I.AnalyticsChangeType.REMOVED,
                        soundType: I.AnalyticsSoundType.ENTRY,
                        location: n
                    })
                }, d.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function V(e, n, t) {
                (0, d.updateUserGuildSettings)(e, i => {
                    let u = n.guildId === L.DEFAULT_SOUND_GUILD_ID,
                        l = u ? I.AnalyticsSoundSource.DEFAULT : I.AnalyticsSoundSource.CUSTOM,
                        o = null != i.joinSound ? I.AnalyticsChangeType.UPDATED : I.AnalyticsChangeType.ADDED;
                    i.joinSound = {
                        soundId: n.soundId,
                        guildId: u ? L.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID : n.guildId
                    }, b({
                        guildId: e,
                        changeType: o,
                        soundSource: l,
                        soundType: I.AnalyticsSoundType.ENTRY,
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
                E.default.track(g.AnalyticEvents.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
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
                E.default.track(g.AnalyticEvents.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, {
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
                var _, f, E;
                let C = i.default.getChannel(o.default.getVoiceChannelId()),
                    S = null == C ? void 0 : C.getGuildId(),
                    m = u.default.getMediaSessionId(),
                    A = u.default.getRTCConnectionId(),
                    I = null === (_ = l.default.getCurrentGameForAnalytics()) || void 0 === _ ? void 0 : _.name,
                    T = S !== t.guildId && t.guildId !== d.DEFAULT_SOUND_GUILD_ID;
                let U = (f = t, E = T, f.guildId === d.DEFAULT_SOUND_GUILD_ID ? "default" : E ? "custom-external" : "custom");
                a.default.track(r.AnalyticEvents.PREMIUM_FEATURE_USAGE, {
                    feature_name: s.AnalyticsPremiumFeatureNames.SOUNDBOARD_PLAY,
                    feature_tier: T ? s.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD : s.AnalyticsPremiumFeatureTiers.FREE,
                    guild_id: S,
                    location_stack: e,
                    rtc_connection_id: A,
                    media_session_id: m,
                    in_overlay: n,
                    application_name: I,
                    emoji_count: null != t.emojiId || null != t.emojiName ? 1 : 0,
                    feature_selection: U,
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
                let l = null === (t = n[e]) || void 0 === t ? void 0 : t.joinSound,
                    o = null === (i = n[a.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID]) || void 0 === i ? void 0 : i.joinSound,
                    d = null != l ? l : o;
                return null != d ? {
                    ...d,
                    type: null != l ? u.GUILD : u.GLOBAL
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
                    return L
                },
                sendVoiceChannelSoundboardEffect: function() {
                    return g
                },
                sendVoiceChannelEffect: function() {
                    return D
                }
            });
            var i, u, l = t("917351"),
                o = t("872717"),
                a = t("913144"),
                d = t("812204"),
                r = t("716241"),
                s = t("385976"),
                c = t("389480"),
                _ = t("454614"),
                f = t("18494"),
                E = t("402671"),
                C = t("82230"),
                S = t("568088"),
                m = t("397485"),
                A = t("626334"),
                I = t("49111"),
                T = t("846325");

            function U(e) {
                let n = new AbortController,
                    t = (0, l.throttle)(t => {
                        f.default.getVoiceChannelId() !== e && n.abort()
                    }, 1e3);
                return {
                    abortController: n,
                    onRequestProgress: t
                }
            }

            function L(e, n, t) {
                var i;
                let {
                    abortController: u,
                    onRequestProgress: l
                } = U(e), a = null !== (i = C.default.getState().animationType) && void 0 !== i ? i : A.VoiceChannelEffectAnimationType.BASIC, r = {
                    animation_type: a,
                    animation_id: (0, m.sampleAnimationId)(a, m.CUSTOM_CALL_SOUND_ANIMATION_RANGE)
                };
                o.default.post({
                    url: I.Endpoints.CUSTOM_CALL_SOUNDS(e),
                    body: r,
                    signal: u.signal,
                    onRequestProgress: l
                }).then(I.NOOP_NULL, () => {
                    if (u.signal.aborted) return
                }), (0, _.default)([d.default.CHANNEL_CALL], t, n, c.AnalyticsSoundType.ENTRY)
            }

            function g(e, n, t, i) {
                var u, l;
                let a = s.default.getCustomEmojiById(null !== (u = n.emojiId) && void 0 !== u ? u : ""),
                    {
                        abortController: d,
                        onRequestProgress: r
                    } = U(e),
                    f = {
                        sound_id: n.soundId,
                        emoji_id: n.emojiId,
                        emoji_name: null !== (l = n.emojiName) && void 0 !== l ? l : null == a ? void 0 : a.name
                    };
                n.guildId !== T.DEFAULT_SOUND_GUILD_ID && (f.source_guild_id = n.guildId), o.default.post({
                    url: I.Endpoints.SEND_SOUNDBOARD_SOUND(e),
                    body: f,
                    signal: d.signal,
                    onRequestProgress: r
                }).then(I.NOOP_NULL, () => {
                    if (d.signal.aborted) return
                }), (0, _.default)(null != i ? i : [], t, n, c.AnalyticsSoundType.DEFAULT)
            }(i = u || (u = {})).EMOJI_PICKER = "emoji_picker", i.EFFECT_BAR = "effect_bar";
            let D = async e => {
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
                        url: I.Endpoints.VOICE_CHANNEL_EFFECTS(n.id),
                        body: e
                    }), O(n, t, i, r), a.default.dispatch({
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
            }, O = (e, n, t, i) => {
                let {
                    unicode: u,
                    custom: l,
                    customExternal: o,
                    managed: a,
                    managedExternal: d,
                    animated: s
                } = (0, E.countEmoji)([n], e.getGuildId()), c = N[i];
                r.default.trackWithMetadata(I.AnalyticEvents.VOICE_CHANNEL_EFFECT_SENT, {
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
                    return f
                },
                default: function() {
                    return m
                }
            });
            var u = t("917351"),
                l = t("446674"),
                o = t("819855"),
                a = t("913144"),
                d = t("397485"),
                r = t("99795");
            let s = [],
                c = {},
                _ = [],
                f = e => {
                    null != e && a.default.dispatch({
                        type: "VOICE_CHANNEL_EFFECT_CLEAR",
                        userId: e
                    })
                },
                E = [],
                C = (0, u.debounce)(() => {
                    let e = (0, d.getEffectAnnouncement)(_);
                    o.AccessibilityAnnouncer.announce(e, "polite"), _ = []
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
                    }, _ = [..._, {
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
        }
    }
]);
//# sourceMappingURL=1a6ab9caf152c49d8dca.js.map