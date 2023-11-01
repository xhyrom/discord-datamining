(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["21413"], {
        27562: function(t, e, n) {
            "use strict";
            t.exports = n.p + "6adc630fe0534895ff0f.mp4"
        },
        851703: function(t, e, n) {
            "use strict";
            t.exports = n.p + "f3c9e56752e6e7dae615.mp4"
        },
        902577: function(t, e, n) {
            "use strict";
            t.exports = n.p + "61220d00e627e7f4a440.png"
        },
        351288: function(t, e, n) {
            "use strict";
            t.exports = n.p + "c3f841e9edf0f8c90ca2.mp4"
        },
        595726: function(t, e, n) {
            "use strict";
            t.exports = n.p + "c694675351be2cd8923b.png"
        },
        462641: function(t, e, n) {
            "use strict";
            t.exports = n.p + "0a10740d903f2a7e3f1e.png"
        },
        95937: function(t, e, n) {
            "use strict";
            t.exports = n.p + "4c6d753b661bdac6ed49.png"
        },
        929461: function(t, e, n) {
            "use strict";
            t.exports = n.p + "a1aa5e5cf3f255bb84cd.mp4"
        },
        686298: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ApplicationStreamResolutions: function() {
                    return o
                },
                getApplicationResolution: function() {
                    return c
                },
                ApplicationStreamFPS: function() {
                    return a
                },
                ApplicationStreamPresets: function() {
                    return s
                },
                getApplicationFramerate: function() {
                    return E
                },
                ApplicationStreamPresetValues: function() {
                    return S
                },
                ApplicationStreamSettingRequirements: function() {
                    return O
                },
                ApplicationStreamResolutionButtons: function() {
                    return T
                },
                GoLiveDeviceResolutionButtons: function() {
                    return p
                },
                ApplicationStreamResolutionButtonsWithSuffixLabel: function() {
                    return R
                },
                ApplicationStreamFPSButtons: function() {
                    return A
                },
                ApplicationStreamFPSButtonsWithSuffixLabel: function() {
                    return N
                }
            });
            var i, u, r, o, a, s, l = n("49111"),
                _ = n("646718"),
                d = n("782340");

            function c(t) {
                switch (t) {
                    case o.RESOLUTION_480:
                        return o.RESOLUTION_480;
                    case o.RESOLUTION_720:
                        return o.RESOLUTION_720;
                    case o.RESOLUTION_1080:
                        return o.RESOLUTION_1080;
                    case o.RESOLUTION_SOURCE:
                        return o.RESOLUTION_SOURCE;
                    default:
                        throw Error("Unknown resolution: ".concat(t))
                }
            }

            function E(t) {
                switch (t) {
                    case a.FPS_5:
                        return a.FPS_5;
                    case a.FPS_15:
                        return a.FPS_15;
                    case a.FPS_30:
                        return a.FPS_30;
                    case a.FPS_60:
                        return a.FPS_60;
                    default:
                        throw Error("Unknown frame rate: ".concat(t))
                }
            }(i = o || (o = {}))[i.RESOLUTION_480 = 480] = "RESOLUTION_480", i[i.RESOLUTION_720 = 720] = "RESOLUTION_720", i[i.RESOLUTION_1080 = 1080] = "RESOLUTION_1080", i[i.RESOLUTION_1440 = 1440] = "RESOLUTION_1440", i[i.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE", (u = a || (a = {}))[u.FPS_5 = 5] = "FPS_5", u[u.FPS_15 = 15] = "FPS_15", u[u.FPS_30 = 30] = "FPS_30", u[u.FPS_60 = 60] = "FPS_60", (r = s || (s = {}))[r.PRESET_VIDEO = 1] = "PRESET_VIDEO", r[r.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS", r[r.PRESET_CUSTOM = 3] = "PRESET_CUSTOM";
            let S = {
                    [s.PRESET_DOCUMENTS]: [{
                        resolution: o.RESOLUTION_SOURCE,
                        fps: a.FPS_15
                    }, {
                        resolution: o.RESOLUTION_SOURCE,
                        fps: a.FPS_5
                    }],
                    [s.PRESET_VIDEO]: [{
                        resolution: o.RESOLUTION_1440,
                        fps: a.FPS_60
                    }, {
                        resolution: o.RESOLUTION_1080,
                        fps: a.FPS_60
                    }, {
                        resolution: o.RESOLUTION_720,
                        fps: a.FPS_60
                    }, {
                        resolution: o.RESOLUTION_720,
                        fps: a.FPS_30
                    }],
                    [s.PRESET_CUSTOM]: []
                },
                O = [{
                    resolution: o.RESOLUTION_SOURCE,
                    fps: a.FPS_60,
                    quality: _.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: o.RESOLUTION_SOURCE,
                    fps: a.FPS_30,
                    quality: _.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: o.RESOLUTION_SOURCE,
                    fps: a.FPS_15,
                    quality: _.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: o.RESOLUTION_SOURCE,
                    fps: a.FPS_5,
                    preset: s.PRESET_DOCUMENTS
                }, {
                    resolution: o.RESOLUTION_1440,
                    fps: a.FPS_60,
                    guildPremiumTier: l.BoostedGuildTiers.TIER_2,
                    quality: _.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: o.RESOLUTION_1440,
                    fps: a.FPS_30,
                    guildPremiumTier: l.BoostedGuildTiers.TIER_2,
                    quality: _.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: o.RESOLUTION_1440,
                    fps: a.FPS_15,
                    guildPremiumTier: l.BoostedGuildTiers.TIER_2,
                    quality: _.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: o.RESOLUTION_1080,
                    fps: a.FPS_60,
                    guildPremiumTier: l.BoostedGuildTiers.TIER_2,
                    quality: _.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: o.RESOLUTION_1080,
                    fps: a.FPS_30,
                    guildPremiumTier: l.BoostedGuildTiers.TIER_2,
                    quality: _.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: o.RESOLUTION_1080,
                    fps: a.FPS_15,
                    guildPremiumTier: l.BoostedGuildTiers.TIER_2,
                    quality: _.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: o.RESOLUTION_720,
                    fps: a.FPS_60,
                    guildPremiumTier: l.BoostedGuildTiers.TIER_1,
                    quality: _.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: o.RESOLUTION_720,
                    fps: a.FPS_30
                }, {
                    resolution: o.RESOLUTION_720,
                    fps: a.FPS_15
                }, {
                    resolution: o.RESOLUTION_720,
                    fps: a.FPS_5
                }, {
                    resolution: o.RESOLUTION_480,
                    fps: a.FPS_60,
                    guildPremiumTier: l.BoostedGuildTiers.TIER_1,
                    quality: _.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: o.RESOLUTION_480,
                    fps: a.FPS_30
                }, {
                    resolution: o.RESOLUTION_480,
                    fps: a.FPS_15
                }, {
                    resolution: o.RESOLUTION_480,
                    fps: a.FPS_5
                }];

            function f(t, e) {
                return {
                    value: t,
                    get label() {
                        return null != e ? e() : t
                    }
                }
            }
            let T = [f(o.RESOLUTION_720), f(o.RESOLUTION_1080), f(o.RESOLUTION_1440), f(o.RESOLUTION_SOURCE, () => d.default.Messages.SCREENSHARE_SOURCE)],
                p = [f(o.RESOLUTION_720), f(o.RESOLUTION_1080), f(o.RESOLUTION_1440)],
                I = t => "".concat(t, "p"),
                R = [f(o.RESOLUTION_480, () => I(o.RESOLUTION_480)), f(o.RESOLUTION_720, () => I(o.RESOLUTION_720)), f(o.RESOLUTION_1080, () => I(o.RESOLUTION_1080)), f(o.RESOLUTION_1440, () => I(o.RESOLUTION_1440)), f(o.RESOLUTION_SOURCE, () => d.default.Messages.SCREENSHARE_SOURCE)],
                A = [f(a.FPS_15), f(a.FPS_30), f(a.FPS_60)],
                N = [f(a.FPS_15, () => d.default.Messages.STREAM_FPS_OPTION.format({
                    value: a.FPS_15
                })), f(a.FPS_30, () => d.default.Messages.STREAM_FPS_OPTION.format({
                    value: a.FPS_30
                })), f(a.FPS_60, () => d.default.Messages.STREAM_FPS_OPTION.format({
                    value: a.FPS_60
                }))]
        },
        504385: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                snapVolumeToDefault: function() {
                    return a
                },
                coerceAudioContextForProto: function() {
                    return s
                }
            });
            var i = n("938850"),
                u = n("773364"),
                r = n("829536"),
                o = n("397336");

            function a(t, e) {
                let n = e === u.MediaEngineContextTypes.STREAM ? i.AudioSettingsDefaultVolumes.STREAM : i.AudioSettingsDefaultVolumes.USER;
                return 1 > Math.abs((0, r.amplitudeToPerceptual)(n) - (0, r.amplitudeToPerceptual)(t)) ? n : t
            }

            function s(t) {
                switch (t) {
                    case u.MediaEngineContextTypes.DEFAULT:
                        return o.ProtoAudioSettingsContextTypes.USER;
                    case u.MediaEngineContextTypes.STREAM:
                        return o.ProtoAudioSettingsContextTypes.STREAM;
                    default:
                        return
                }
            }
        },
        659558: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getLastUsedVideoBackgroundOption: function() {
                    return o
                }
            }), n("884691"), n("446674");
            var i = n("374363");
            n("697218");
            var u = n("719923"),
                r = n("239448");

            function o(t) {
                var e;
                let n = i.default.settings;
                return function(t, e) {
                    let n = (0, r.getVideoBackgroundOptionFromProto)(t, e.id);
                    return (0, r.isCustomBackgroundOption)(n) && !u.default.canUseCustomBackgrounds(e) ? null : "number" != typeof n || (0, r.isDefaultBackgroundOption)(n) ? n : null
                }(null === (e = n.voiceAndVideo) || void 0 === e ? void 0 : e.videoBackgroundFilterDesktop, t)
            }
        },
        154867: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                fetchVideoFilterAssets: function() {
                    return c
                },
                uploadVideoFilterAsset: function() {
                    return E
                },
                deleteVideoFilterAsset: function() {
                    return S
                },
                saveLastUsedBackgroundOption: function() {
                    return O
                },
                applyMediaFilterSettings: function() {
                    return f
                },
                startApplyMediaFilterSettings: function() {
                    return T
                },
                errorApplyingMediaFilterSettings: function() {
                    return p
                }
            });
            var i = n("872717"),
                u = n("913144"),
                r = n("872173"),
                o = n("42887"),
                a = n("697218"),
                s = n("659558"),
                l = n("239448"),
                _ = n("407756"),
                d = n("49111");
            async function c() {
                let t = await i.default.get(d.Endpoints.VIDEO_FILTER_ASSETS);
                return u.default.dispatch({
                    type: "VIDEO_FILTER_ASSETS_FETCH_SUCCESS",
                    assets: t.body
                }), t
            }
            async function E(t, e, n) {
                try {
                    let r = await i.default.post({
                        url: d.Endpoints.VIDEO_FILTER_ASSETS,
                        body: {
                            type: e,
                            asset: t,
                            last_used: null == n ? void 0 : n.toISOString()
                        }
                    });
                    return u.default.dispatch({
                        type: "VIDEO_FILTER_ASSET_UPLOAD_SUCCESS",
                        videoFilterAsset: r.body
                    }), r.body
                } catch (t) {
                    throw new _.default(t)
                }
            }
            async function S(t) {
                await i.default.delete(d.Endpoints.VIDEO_FILTER_ASSET(t.id));
                let e = (0, s.getLastUsedVideoBackgroundOption)(a.default.getCurrentUser());
                (0, l.isCustomBackgroundOption)(e) && e.id === t.id && O(null), u.default.dispatch({
                    type: "VIDEO_FILTER_ASSET_DELETE_SUCCESS",
                    videoFilterAsset: t
                })
            }
            async function O(t) {
                if (await r.PreloadedUserSettingsActionCreators.updateAsync("voiceAndVideo", e => {
                        e.videoBackgroundFilterDesktop = (0, l.getVideoBackgroundProtoFromOption)(t)
                    }, r.UserSettingsDelay.FREQUENT_USER_ACTION), (0, l.isCustomBackgroundOption)(t)) {
                    let e = await i.default.post(d.Endpoints.VIDEO_FILTER_ASSET_LAST_USED(t.id));
                    u.default.dispatch({
                        type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION",
                        backgroundOption: e.body
                    })
                } else u.default.dispatch({
                    type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION",
                    backgroundOption: t
                })
            }

            function f(t) {
                o.default.isSupported() && u.default.dispatch({
                    type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS",
                    settings: t
                })
            }

            function T() {
                o.default.isSupported() && u.default.dispatch({
                    type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START"
                })
            }

            function p() {
                u.default.dispatch({
                    type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR"
                })
            }
        },
        870879: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return p
                }
            });
            var i = n("446674"),
                u = n("773364"),
                r = n("913144"),
                o = n("374363"),
                a = n("42887"),
                s = n("18494"),
                l = n("697218"),
                _ = n("239448");
            let d = !1,
                c = null,
                E = !1,
                S = {};

            function O(t) {
                var e;
                let n = l.default.getCurrentUser();
                if (null == n) return !1;
                let i = null != t ? t : (0, _.getVideoBackgroundOptionFromProto)(null === (e = o.default.settings.voiceAndVideo) || void 0 === e ? void 0 : e.videoBackgroundFilterDesktop, n.id);
                return null != s.default.getVoiceChannelId() && a.default.isVideoEnabled() && null != i
            }

            function f() {
                c !== s.default.getVoiceChannelId() && (E = !1), O() && (E = !0), c = s.default.getVoiceChannelId()
            }
            class T extends i.default.Store {
                initialize() {
                    this.waitFor(o.default, s.default, a.default), this.syncWith([s.default, a.default], f)
                }
                get videoFilterAssets() {
                    return S
                }
                get hasBeenApplied() {
                    return d
                }
                get hasUsedBackgroundInCall() {
                    return E
                }
            }
            T.displayName = "VideoBackgroundStore";
            var p = new T(r.default, {
                VIDEO_FILTER_ASSETS_FETCH_SUCCESS: function(t) {
                    let {
                        assets: e
                    } = t;
                    S = e.reduce((t, e) => ({
                        ...t,
                        [e.id]: e
                    }), {})
                },
                VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: function(t) {
                    let {
                        videoFilterAsset: e
                    } = t;
                    S = {
                        ...S,
                        [e.id]: e
                    }
                },
                VIDEO_FILTER_ASSET_DELETE_SUCCESS: function(t) {
                    let {
                        videoFilterAsset: e
                    } = t;
                    S = {
                        ...S
                    }, delete S[e.id]
                },
                VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: function(t) {
                    let {
                        backgroundOption: e
                    } = t;
                    O(e) && (E = !0)
                },
                MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(t) {
                    let {
                        settings: e
                    } = t;
                    u.FilterSettingsKey.CAMERA_BACKGROUND_LIVE in e && (d = !0)
                }
            })
        },
        239448: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                isCustomBackgroundOption: function() {
                    return _
                },
                isDefaultBackgroundOption: function() {
                    return d
                },
                getEffectAnalyticsType: function() {
                    return E
                },
                getEffectDetailAnalyticsName: function() {
                    return S
                },
                trackBackgroundOptionUpdated: function() {
                    return O
                },
                trackBackgroundOptionAdded: function() {
                    return f
                },
                trackBackgroundOptionDeleted: function() {
                    return T
                },
                getVideoBackgroundProtoFromOption: function() {
                    return p
                },
                getVideoBackgroundOptionFromProto: function() {
                    return I
                }
            });
            var i = n("716241"),
                u = n("42203"),
                r = n("945956"),
                o = n("599110"),
                a = n("315102"),
                s = n("917219"),
                l = n("49111");

            function _(t) {
                return null != t && "object" == typeof t && "id" in t && t.type === s.VideoFilterType.BACKGROUND
            }

            function d(t) {
                return "number" == typeof t && t in s.DefaultVideoBackground
            }

            function c(t) {
                return d(t) ? s.ANIMATED_DEFAULT_VIDEO_BACKGROUNDS.includes(t) : !!_(t) && ((0, a.isAnimatedIconHash)(t.asset) || (0, a.isVideoAssetHash)(t.asset))
            }

            function E(t) {
                return null != t ? "Video Background" : "None"
            }

            function S(t) {
                if (null == t) return "None";
                if (_(t)) return "Custom";
                if ("blur" === t) return "Blur";
                else return "Preset - ".concat(function(t) {
                    switch (t) {
                        case s.DefaultVideoBackground.OPTION_1:
                            return "Cybercity";
                        case s.DefaultVideoBackground.OPTION_2:
                            return "Discord the Movie";
                        case s.DefaultVideoBackground.OPTION_3:
                            return "Wumpus Vacation";
                        case s.DefaultVideoBackground.OPTION_4:
                            return "Vaporwave";
                        case s.DefaultVideoBackground.OPTION_7:
                            return "Capernite Day";
                        case s.DefaultVideoBackground.OPTION_8:
                            return "Capernite Night";
                        case s.DefaultVideoBackground.OPTION_9:
                            return "Hacker Den";
                        case s.DefaultVideoBackground.OPTION_10:
                            return "Wumpice"
                    }
                }(t))
            }

            function O(t, e, n) {
                let a = r.default.getGuildId(),
                    s = r.default.getChannelId(),
                    _ = u.default.getChannel(s),
                    d = (0, i.getVoiceStateMetadata)(a, s, !0);
                o.default.track(l.AnalyticEvents.VIDEO_EFFECT_UPDATED, {
                    location: e,
                    effect_type: E(t),
                    effect_detail: S(t),
                    effect_state: n,
                    channel_id: s,
                    channel_type: null == _ ? void 0 : _.type,
                    guild_id: a,
                    voice_state_count: d.voice_state_count,
                    video_stream_count: d.video_stream_count,
                    media_session_id: r.default.getMediaSessionId(),
                    rtc_connection_id: r.default.getRTCConnectionId(),
                    is_animated: c(t)
                })
            }

            function f(t, e, n) {
                o.default.track(l.AnalyticEvents.VIDEO_BACKGROUND_ADDED, {
                    is_animated: c(t),
                    is_video: e,
                    is_from_tenor: n
                })
            }

            function T(t) {
                o.default.track(l.AnalyticEvents.VIDEO_BACKGROUND_DELETED, {
                    is_animated: c(t)
                })
            }

            function p(t) {
                if (null == t) return {
                    oneofKind: void 0
                };
                if (_(t)) return {
                    oneofKind: "customAsset",
                    customAsset: {
                        id: t.id,
                        assetHash: t.asset
                    }
                };
                if ("blur" === t) return {
                    oneofKind: "blur",
                    blur: {
                        useBlur: !0
                    }
                };
                else return {
                    oneofKind: "presetOption",
                    presetOption: t
                }
            }

            function I(t, e) {
                if (null == t || void 0 === t.oneofKind) return null;
                switch (t.oneofKind) {
                    case "customAsset":
                        return {
                            type: s.VideoFilterType.BACKGROUND, id: t.customAsset.id, user_id: e, asset: t.customAsset.assetHash
                        };
                    case "blur":
                        return t.blur.useBlur ? "blur" : null;
                    case "presetOption":
                        return t.presetOption
                }
            }
        },
        407756: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var i, u, r = n("872717"),
                o = n("782340");
            (i || (i = {})).ASSET_SIZE = "BINARY_TYPE_MAX_SIZE", (u || (u = {})).ASSET = "asset";
            class a extends r.default.V8APIError {
                constructor(t, e) {
                    var n;
                    super(t, e, o.default.Messages.VIDEO_BACKGROUND_ERROR_UPLOAD);
                    let r = this.getFieldErrors(u.ASSET);
                    null != r && (null === (n = r[0]) || void 0 === n ? void 0 : n.code) === i.ASSET_SIZE && (this.message = o.default.Messages.VIDEO_BACKGROUND_ERROR_UPLOAD_FILE_SIZE)
                }
            }
            var s = a
        },
        439141: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                applyBackgroundOptionLive: function() {
                    return I
                },
                applyBackgroundOptionPreview: function() {
                    return R
                },
                applyInitialVideoBackgroundOption: function() {
                    return A
                }
            });
            var i = n("627445"),
                u = n.n(i),
                r = n("773364"),
                o = n("697218"),
                a = n("315102"),
                s = n("659558"),
                l = n("154867"),
                _ = n("870879"),
                d = n("239448"),
                c = n("977801"),
                E = n("512244"),
                S = n("917219"),
                O = n("49111");
            async function f(t) {
                let e = await fetch(t),
                    n = await e.blob();
                return new Uint8ClampedArray(await n.arrayBuffer())
            }

            function T(t, e, n, i, u) {
                (0, l.applyMediaFilterSettings)({
                    [t]: {
                        graph: n,
                        target: e,
                        image: i,
                        blob: u
                    }
                })
            }
            async function p(t, e, n) {
                var i, o;
                let s, _ = !1;
                if (null == n) return T(t, e, r.FilterSettingsGraph.NONE);
                if (n === S.BLUR_BACKGROUND_OPTION) return T(t, e, r.FilterSettingsGraph.BACKGROUND_BLUR);
                if ("string" == typeof n || "number" == typeof n) {
                    ;
                    let t = (0, c.default)()[n];
                    _ = null !== (i = t.isVideo) && void 0 !== i && i, s = t.source
                } else {
                    let t = n.asset;
                    _ = (0, a.isAnimatedIconHash)(t) || (0, a.isVideoAssetHash)(t), s = (0, a.getVideoFilterAssetURL)({
                        userId: n.user_id,
                        assetId: n.id,
                        assetHash: t,
                        size: S.BACKGROUND_REPLACEMENT_SIZE.width
                    })
                }
                if (null != s) try {
                    ;
                    let n = _ ? void 0 : await (o = s, new Promise((t, e) => {
                            let n = new Image;
                            n.crossOrigin = "anonymous", n.onload = () => {
                                let e = document.createElement("canvas");
                                e.width = S.BACKGROUND_REPLACEMENT_SIZE.width, e.height = S.BACKGROUND_REPLACEMENT_SIZE.height;
                                let i = e.getContext("2d");
                                u(null != i, "Canvas context is missing");
                                let r = n.height / n.width,
                                    o = S.BACKGROUND_REPLACEMENT_SIZE.height,
                                    a = S.BACKGROUND_REPLACEMENT_SIZE.height / r,
                                    s = (e.width - a) / 2,
                                    l = (e.height - o) / 2;
                                i.drawImage(n, s, l, a, o);
                                let _ = i.getImageData(0, 0, e.width, e.height);
                                t({
                                    data: _.data,
                                    width: _.width,
                                    height: _.height,
                                    pixelFormat: "rgba"
                                })
                            }, n.onerror = t => e(t), n.src = o
                        })),
                        i = _ ? await f(s) : void 0;
                    T(t, e, r.FilterSettingsGraph.BACKGROUND_REPLACEMENT, n, i)
                } catch (t) {
                    (0, l.errorApplyingMediaFilterSettings)()
                }
            }
            async function I(t, e) {
                let {
                    track: n = !0,
                    location: i
                } = e;
                await p(r.FilterSettingsKey.CAMERA_BACKGROUND_LIVE, {
                    type: r.FilterTargetType.INPUT_DEVICE
                }, t), n && (0, d.trackBackgroundOptionUpdated)(t, i, "Enabled")
            }
            async function R(t, e, n) {
                let {
                    track: i = !0,
                    location: u
                } = n;
                (0, l.startApplyMediaFilterSettings)(), await p(r.FilterSettingsKey.CAMERA_BACKGROUND_PREVIEW, {
                    type: r.FilterTargetType.STREAM,
                    streamId: e
                }, t), i && (0, d.trackBackgroundOptionUpdated)(t, u, "Preview")
            }

            function A() {
                let t = o.default.getCurrentUser();
                if (null == t) return;
                let e = (0, s.getLastUsedVideoBackgroundOption)(t);
                (0, E.default)() && !_.default.hasBeenApplied && null != e && I(e, {
                    track: !1
                }).catch(O.NOOP)
            }
        },
        977801: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return S
                }
            });
            var i = n("917219"),
                u = n("533613"),
                r = n("782340"),
                o = n("27562"),
                a = n("851703"),
                s = n("902577"),
                l = n("351288"),
                _ = n("595726"),
                d = n("462641"),
                c = n("95937"),
                E = n("929461"),
                S = () => ({
                    [i.DefaultVideoBackground.OPTION_1]: {
                        id: i.DefaultVideoBackground.OPTION_1,
                        source: s,
                        name: r.default.Messages.VIDEO_BACKGROUND_DEFAULT_BACKGROUND_NAME_1
                    },
                    [i.DefaultVideoBackground.OPTION_2]: {
                        id: i.DefaultVideoBackground.OPTION_2,
                        source: _,
                        name: r.default.Messages.VIDEO_BACKGROUND_DEFAULT_BACKGROUND_NAME_2
                    },
                    [i.DefaultVideoBackground.OPTION_3]: {
                        id: i.DefaultVideoBackground.OPTION_3,
                        source: d,
                        name: r.default.Messages.VIDEO_BACKGROUND_DEFAULT_BACKGROUND_NAME_3
                    },
                    [i.DefaultVideoBackground.OPTION_4]: {
                        id: i.DefaultVideoBackground.OPTION_4,
                        source: c,
                        name: r.default.Messages.VIDEO_BACKGROUND_DEFAULT_BACKGROUND_NAME_4
                    },
                    [i.DefaultVideoBackground.OPTION_7]: {
                        id: i.DefaultVideoBackground.OPTION_7,
                        source: o,
                        name: r.default.Messages.VIDEO_BACKGROUND_DEFAULT_BACKGROUND_NAME_7,
                        isVideo: !0,
                        hotspotLocation: u.HotspotLocations.ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW
                    },
                    [i.DefaultVideoBackground.OPTION_8]: {
                        id: i.DefaultVideoBackground.OPTION_8,
                        source: a,
                        name: r.default.Messages.VIDEO_BACKGROUND_DEFAULT_BACKGROUND_NAME_8,
                        isVideo: !0,
                        hotspotLocation: u.HotspotLocations.ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW
                    },
                    [i.DefaultVideoBackground.OPTION_9]: {
                        id: i.DefaultVideoBackground.OPTION_9,
                        source: l,
                        name: r.default.Messages.VIDEO_BACKGROUND_DEFAULT_BACKGROUND_NAME_9,
                        isVideo: !0,
                        hotspotLocation: u.HotspotLocations.ANIMATED_VIDEO_BG_HACKER_DEN_NEW
                    },
                    [i.DefaultVideoBackground.OPTION_10]: {
                        id: i.DefaultVideoBackground.OPTION_10,
                        source: E,
                        name: r.default.Messages.VIDEO_BACKGROUND_DEFAULT_BACKGROUND_NAME_10,
                        isVideo: !0,
                        hotspotLocation: u.HotspotLocations.ANIMATED_VIDEO_BG_WUMPICE_NEW
                    }
                })
        },
        512244: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var i = n("42887"),
                u = n("353927");

            function r() {
                var t;
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.default;
                return (t = e).supports(u.Features.MEDIAPIPE) && Object.values(t.getVideoDevices()).length > 0
            }
        },
        12307: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                isPremiumResolution: function() {
                    return c
                },
                isPremiumFPS: function() {
                    return E
                },
                getResolutionText: function() {
                    return O
                },
                getFPSText: function() {
                    return f
                },
                getMaxQuality: function() {
                    return T
                },
                trackStreamSettingsUpdate: function() {
                    return p
                }
            });
            var i = n("305961"),
                u = n("945956"),
                r = n("697218"),
                o = n("599110"),
                a = n("49111"),
                s = n("686298"),
                l = n("646718"),
                _ = n("353927"),
                d = n("782340");

            function c(t) {
                if (null == t) return;
                let e = t.maxResolution.type === _.ResolutionTypes.SOURCE ? s.ApplicationStreamResolutions.RESOLUTION_SOURCE : t.maxResolution.height,
                    n = (0, s.getApplicationResolution)(e),
                    i = (0, s.getApplicationFramerate)(t.maxFrameRate);
                return i !== s.ApplicationStreamFPS.FPS_5 && null == s.ApplicationStreamSettingRequirements.find(t => t.resolution === n && t.fps !== s.ApplicationStreamFPS.FPS_5 && !S(t))
            }

            function E(t) {
                if (null == t) return;
                let e = (0, s.getApplicationFramerate)(t.maxFrameRate);
                return null == s.ApplicationStreamSettingRequirements.find(t => t.fps === e && !S(t))
            }

            function S(t) {
                return null != t.quality || null != t.guildPremiumTier
            }

            function O(t) {
                return t.type === _.ResolutionTypes.SOURCE ? d.default.Messages.SCREENSHARE_SOURCE : d.default.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
                    resolution: t.height
                })
            }

            function f(t) {
                return d.default.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
                    fps: t
                })
            }

            function T(t) {
                return null == t.maxResolution || null == t.maxFrameRate ? null : {
                    maxFrameRate: t.maxFrameRate,
                    maxResolution: t.maxResolution
                }
            }

            function p(t, e, n) {
                var _, d, c;
                let E = (_ = t, d = e, c = n, s.ApplicationStreamSettingRequirements.find(t => (null == t.preset || t.preset === _) && t.resolution === d && t.fps === c)),
                    S = r.default.getCurrentUser(),
                    O = u.default.getGuildId(),
                    f = null != O ? i.default.getGuild(O) : null;
                o.default.track(a.AnalyticEvents.STREAM_SETTINGS_UPDATE, {
                    user_premium_tier: null == S ? void 0 : S.premiumType,
                    guild_premium_tier: null == f ? void 0 : f.premiumTier,
                    stream_quality_user_premium_tier: (null == E ? void 0 : E.quality) != null ? l.StreamQualitiesToPremiumType[E.quality] : null,
                    stream_quality_guild_premium_tier: null == E ? void 0 : E.guildPremiumTier,
                    stream_quality_preset: t,
                    stream_quality_resolution: e,
                    stream_quality_frame_rate: n
                })
            }
        }
    }
]);
//# sourceMappingURL=38d5de1e1d36d8c0f8f1.js.map