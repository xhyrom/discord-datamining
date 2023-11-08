(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["23824"], {
        891722: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                ArrowSmallLeftIcon: function() {
                    return o
                }
            });
            var i = t("37983");
            t("884691");
            var l = t("669491"),
                u = t("75196");
            let o = e => {
                let {
                    width: n = 24,
                    height: t = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...d
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, u.default)(d),
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
                    return u
                },
                useCustomCallSoundsExperiment: function() {
                    return o
                }
            });
            var i = t("862205");
            let l = (0, i.createExperiment)({
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
            var u = l;
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
            var i = t("271938"),
                l = t("42203"),
                u = t("800762");

            function o() {
                let e = u.default.getVoiceStateForSession(i.default.getId(), i.default.getSessionId()),
                    n = null == e ? void 0 : e.channelId;
                return l.default.getChannel(n)
            }
        },
        78581: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                getAmplitudinalSoundboardVolume: function() {
                    return N
                },
                canUseSoundboardSound: function() {
                    return p
                },
                canUseCustomCallSounds: function() {
                    return O
                },
                playSound: function() {
                    return h
                },
                maybePlayCustomJoinSound: function() {
                    return y
                },
                useSoundBoardDismissContentTypes: function() {
                    return v
                },
                removeCustomJoinSound: function() {
                    return V
                },
                updateCustomJoinSound: function() {
                    return F
                },
                trackCustomCallSoundExternallyDeleted: function() {
                    return M
                }
            }), t("424973");
            var i = t("65597"),
                l = t("151426"),
                u = t("299147"),
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
                L = t("245463"),
                T = t("675961"),
                g = t("846325"),
                U = t("49111");

            function N() {
                var e;
                let n = a.SoundboardSettings.getSetting();
                return null !== (e = null == n ? void 0 : n.volume) && void 0 !== e ? e : 100
            }

            function D(e, n) {
                return (null == n ? void 0 : n.guild_id) == null || _.default.can(U.Permissions.USE_EXTERNAL_SOUNDS, n) || e.guildId === g.DEFAULT_SOUND_GUILD_ID || e.guildId === (null == n ? void 0 : n.guild_id)
            }

            function p(e, n, t) {
                let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                return (C.default.canUseSoundboardEverywhere(e) || n.guildId === (null == t ? void 0 : t.guild_id) || n.guildId === g.DEFAULT_SOUND_GUILD_ID) && D(n, t) && (!i || n.available)
            }

            function O(e) {
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    t = u.default.getCurrentConfig({
                        location: "65e71d_1"
                    }, {
                        autoTrackExposure: n
                    }).enabled;
                return C.default.canUseCustomCallSounds(e) && t
            }

            function h(e, n, t) {
                (0, m.playSoundLocally)(n, e), (0, s.sendVoiceChannelSoundboardEffect)(n, e, __OVERLAY__, t)
            }
            async function y(e) {
                let n = f.default.getCurrentUser(),
                    t = (0, o.default)(),
                    i = (0, T.getCustomJoinSound)(e);
                if (null == t || c.SILENT_JOIN_LEAVE_CHANNEL_TYPES.has(t.type) || null == i || !O(n) || !(0, L.canSelectedVoiceChannelUseSoundboard)()) return;
                await (0, m.maybeFetchSoundboardSounds)();
                let l = i.guildId === g.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID ? g.DEFAULT_SOUND_GUILD_ID : i.guildId,
                    u = A.default.getSound(l, i.soundId);
                if (null != u) {
                    var a, d;
                    if (!D(u, t) || !p(n, u, t, !0)) return null;
                    a = u, d = t.id, (0, m.playSoundLocally)(d, a), (0, s.sendVoiceChannelCustomCallSoundEffect)(d, a, __OVERLAY__)
                }
            }

            function v(e) {
                let {
                    isSoundboardButtonDisabled: n = !1
                } = e, t = (0, i.default)([f.default], () => f.default.getCurrentUser()), o = [l.DismissibleContent.SOUNDBOARD_EDUCATION], {
                    enabled: a,
                    showVoiceChannelCoachmark: d
                } = u.default.useExperiment({
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
                    let e = C.default.canUseCustomCallSounds(t),
                        n = (0, S.ageEligibleForPremiumUpsell)(t);
                    d && !C.default.isPremium(t) && n && o.push(l.DismissibleContent.CUSTOM_CALL_SOUNDS_VOICE_COACHMARK), (e || n) && o.push(l.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL)
                }
                return o
            }

            function V(e, n) {
                (0, d.updateUserGuildSettings)(e, t => {
                    t.joinSound = void 0, b({
                        guildId: e,
                        changeType: I.AnalyticsChangeType.REMOVED,
                        soundType: I.AnalyticsSoundType.ENTRY,
                        location: n
                    })
                }, d.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function F(e, n, t) {
                (0, d.updateUserGuildSettings)(e, i => {
                    let l = n.guildId === g.DEFAULT_SOUND_GUILD_ID,
                        u = l ? I.AnalyticsSoundSource.DEFAULT : I.AnalyticsSoundSource.CUSTOM,
                        o = null != i.joinSound ? I.AnalyticsChangeType.UPDATED : I.AnalyticsChangeType.ADDED;
                    i.joinSound = {
                        soundId: n.soundId,
                        guildId: l ? g.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID : n.guildId
                    }, b({
                        guildId: e,
                        changeType: o,
                        soundSource: u,
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
                    soundSource: l,
                    location: u
                } = e;
                E.default.track(U.AnalyticEvents.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
                    location_stack: u,
                    guild_id: "" === n ? 0 : Number(n),
                    change_type: t,
                    sound_type: i,
                    sound_source: l
                })
            }

            function M(e) {
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
                    return d
                }
            });
            var i = t("42203"),
                l = t("957255"),
                u = t("18494"),
                o = t("49111");

            function a() {
                let e = u.default.getVoiceChannelId(),
                    n = i.default.getChannel(e);
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
            var i = t("42203"),
                l = t("945956"),
                u = t("568307"),
                o = t("18494"),
                a = t("599110"),
                d = t("846325"),
                r = t("49111"),
                s = t("646718");

            function c(e, n, t, c) {
                var _, f, E;
                let C = i.default.getChannel(o.default.getVoiceChannelId()),
                    S = null == C ? void 0 : C.getGuildId(),
                    m = l.default.getMediaSessionId(),
                    A = l.default.getRTCConnectionId(),
                    I = null === (_ = u.default.getCurrentGameForAnalytics()) || void 0 === _ ? void 0 : _.name,
                    L = S !== t.guildId && t.guildId !== d.DEFAULT_SOUND_GUILD_ID;
                let T = (f = t, E = L, f.guildId === d.DEFAULT_SOUND_GUILD_ID ? "default" : E ? "custom-external" : "custom");
                a.default.track(r.AnalyticEvents.PREMIUM_FEATURE_USAGE, {
                    feature_name: s.AnalyticsPremiumFeatureNames.SOUNDBOARD_PLAY,
                    feature_tier: L ? s.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD : s.AnalyticsPremiumFeatureTiers.FREE,
                    guild_id: S,
                    location_stack: e,
                    rtc_connection_id: A,
                    media_session_id: m,
                    in_overlay: n,
                    application_name: I,
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
                    return l
                },
                useCustomJoinSound: function() {
                    return d
                },
                getCustomJoinSound: function() {
                    return r
                }
            });
            var i, l, u = t("446674"),
                o = t("374363"),
                a = t("846325");

            function d(e) {
                return (0, u.useStateFromStores)([o.default], () => {
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
                    u = null === (i = n[a.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID]) || void 0 === i ? void 0 : i.joinSound,
                    o = null != l ? l : u;
                return null != o ? {
                    ...o,
                    type: null != l ? 1 : 0
                } : void 0
            }(i = l || (l = {}))[i.GLOBAL = 0] = "GLOBAL", i[i.GUILD = 1] = "GUILD"
        },
        229502: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                VoiceChannelEffectSentLocation: function() {
                    return l
                },
                sendVoiceChannelCustomCallSoundEffect: function() {
                    return g
                },
                sendVoiceChannelSoundboardEffect: function() {
                    return U
                },
                sendVoiceChannelEffect: function() {
                    return N
                }
            });
            var i, l, u = t("917351"),
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
                L = t("846325");

            function T(e) {
                let n = new AbortController,
                    t = (0, u.throttle)(t => {
                        f.default.getVoiceChannelId() !== e && n.abort()
                    }, 1e3);
                return {
                    abortController: n,
                    onRequestProgress: t
                }
            }

            function g(e, n, t) {
                var i;
                let {
                    abortController: l,
                    onRequestProgress: u
                } = T(e), a = null !== (i = C.default.getState().animationType) && void 0 !== i ? i : A.VoiceChannelEffectAnimationType.BASIC, r = {
                    animation_type: a,
                    animation_id: (0, m.sampleAnimationId)(a, m.CUSTOM_CALL_SOUND_ANIMATION_RANGE)
                };
                o.default.post({
                    url: I.Endpoints.CUSTOM_CALL_SOUNDS(e),
                    body: r,
                    signal: l.signal,
                    onRequestProgress: u
                }).then(I.NOOP_NULL, () => {
                    if (l.signal.aborted) return
                }), (0, _.default)([d.default.CHANNEL_CALL], t, n, c.AnalyticsSoundType.ENTRY)
            }

            function U(e, n, t, i) {
                var l, u;
                let a = s.default.getCustomEmojiById(null !== (l = n.emojiId) && void 0 !== l ? l : ""),
                    {
                        abortController: d,
                        onRequestProgress: r
                    } = T(e),
                    f = {
                        sound_id: n.soundId,
                        emoji_id: n.emojiId,
                        emoji_name: null !== (u = n.emojiName) && void 0 !== u ? u : null == a ? void 0 : a.name
                    };
                n.guildId !== L.DEFAULT_SOUND_GUILD_ID && (f.source_guild_id = n.guildId), o.default.post({
                    url: I.Endpoints.SEND_SOUNDBOARD_SOUND(e),
                    body: f,
                    signal: d.signal,
                    onRequestProgress: r
                }).then(I.NOOP_NULL, () => {
                    if (d.signal.aborted) return
                }), (0, _.default)(null != i ? i : [], t, n, c.AnalyticsSoundType.DEFAULT)
            }(i = l || (l = {})).EMOJI_PICKER = "emoji_picker", i.EFFECT_BAR = "effect_bar";
            let N = async e => {
                let {
                    channel: n,
                    emoji: t,
                    location: i,
                    animationType: l,
                    animationId: u,
                    isPremium: d
                } = e;
                if (null == t || S.default.isOnCooldown) return;
                let r = d && null != l ? l : A.VoiceChannelEffectAnimationType.BASIC;
                try {
                    let e = null != t.id ? {
                        emoji_id: t.id,
                        emoji_name: t.name,
                        animation_type: r,
                        animation_id: u
                    } : {
                        emoji_id: null,
                        emoji_name: t.optionallyDiverseSequence,
                        animation_type: r,
                        animation_id: u
                    };
                    await o.default.post({
                        url: I.Endpoints.VOICE_CHANNEL_EFFECTS(n.id),
                        body: e
                    }), p(n, t, i, r), a.default.dispatch({
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
            }, D = {
                [A.VoiceChannelEffectAnimationType.BASIC]: "Basic",
                [A.VoiceChannelEffectAnimationType.PREMIUM]: "Premium"
            }, p = (e, n, t, i) => {
                let {
                    unicode: l,
                    custom: u,
                    customExternal: o,
                    managed: a,
                    managedExternal: d,
                    animated: s
                } = (0, E.countEmoji)([n], e.getGuildId()), c = D[i];
                r.default.trackWithMetadata(I.AnalyticEvents.VOICE_CHANNEL_EFFECT_SENT, {
                    channel_id: e.id,
                    guild_id: e.getGuildId(),
                    location: t,
                    emoji_unicode: l,
                    emoji_custom: u,
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
            var l = t("446674"),
                u = t("913144"),
                o = t("626334");
            class a extends l.default.PersistedStore {
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
            var d = new a(u.default, {
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
            }), t("222007"), t("843762");
            var l = t("917351"),
                u = t("446674"),
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
                C = (0, l.debounce)(() => {
                    let e = (0, d.getEffectAnnouncement)(_);
                    o.AccessibilityAnnouncer.announce(e, "polite"), _ = []
                }, 500);
            class S extends u.default.Store {
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
                    null != n && (s.unshift(n), (s = (0, l.uniqBy)(s, "name")).length > r.EMOJI_PICKER_EMOJI_TO_SHOW_COUNT + 1 && s.pop())
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
            var l = t("469563"),
                u = t("891722"),
                o = t("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: n = 24,
                        height: t = 24,
                        color: l = "currentColor",
                        foreground: u,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(a),
                        width: n,
                        height: t,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            className: u,
                            fill: l,
                            d: "M20 10.9378H14.2199H8.06628L10.502 8.50202L9 7L4 12L9 17L10.502 15.498L8.06628 13.0622H20V10.9378Z"
                        })
                    })
                }, u.ArrowSmallLeftIcon)
        }
    }
]);
//# sourceMappingURL=478ecc39ad990d3c0169.js.map