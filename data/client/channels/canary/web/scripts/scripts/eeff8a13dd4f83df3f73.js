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
                    return i
                },
                getApplicationResolution: function() {
                    return c
                },
                ApplicationStreamFPS: function() {
                    return u
                },
                ApplicationStreamPresets: function() {
                    return r
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
            }), n("70102");
            var i, u, r, o, a, s, l = n("49111"),
                d = n("646718"),
                _ = n("782340");

            function c(t) {
                switch (t) {
                    case i.RESOLUTION_480:
                        return i.RESOLUTION_480;
                    case i.RESOLUTION_720:
                        return i.RESOLUTION_720;
                    case i.RESOLUTION_1080:
                        return i.RESOLUTION_1080;
                    case i.RESOLUTION_SOURCE:
                        return i.RESOLUTION_SOURCE;
                    default:
                        throw Error("Unknown resolution: ".concat(t))
                }
            }

            function E(t) {
                switch (t) {
                    case u.FPS_5:
                        return u.FPS_5;
                    case u.FPS_15:
                        return u.FPS_15;
                    case u.FPS_30:
                        return u.FPS_30;
                    case u.FPS_60:
                        return u.FPS_60;
                    default:
                        throw Error("Unknown frame rate: ".concat(t))
                }
            }(o = i || (i = {}))[o.RESOLUTION_480 = 480] = "RESOLUTION_480", o[o.RESOLUTION_720 = 720] = "RESOLUTION_720", o[o.RESOLUTION_1080 = 1080] = "RESOLUTION_1080", o[o.RESOLUTION_1440 = 1440] = "RESOLUTION_1440", o[o.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE", (a = u || (u = {}))[a.FPS_5 = 5] = "FPS_5", a[a.FPS_15 = 15] = "FPS_15", a[a.FPS_30 = 30] = "FPS_30", a[a.FPS_60 = 60] = "FPS_60", (s = r || (r = {}))[s.PRESET_VIDEO = 1] = "PRESET_VIDEO", s[s.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS", s[s.PRESET_CUSTOM = 3] = "PRESET_CUSTOM";
            let S = {
                    [r.PRESET_DOCUMENTS]: [{
                        resolution: i.RESOLUTION_SOURCE,
                        fps: u.FPS_15
                    }, {
                        resolution: i.RESOLUTION_SOURCE,
                        fps: u.FPS_5
                    }],
                    [r.PRESET_VIDEO]: [{
                        resolution: i.RESOLUTION_1440,
                        fps: u.FPS_60
                    }, {
                        resolution: i.RESOLUTION_1080,
                        fps: u.FPS_60
                    }, {
                        resolution: i.RESOLUTION_720,
                        fps: u.FPS_60
                    }, {
                        resolution: i.RESOLUTION_720,
                        fps: u.FPS_30
                    }],
                    [r.PRESET_CUSTOM]: []
                },
                O = [{
                    resolution: i.RESOLUTION_SOURCE,
                    fps: u.FPS_60,
                    quality: d.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: i.RESOLUTION_SOURCE,
                    fps: u.FPS_30,
                    quality: d.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: i.RESOLUTION_SOURCE,
                    fps: u.FPS_15,
                    quality: d.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: i.RESOLUTION_SOURCE,
                    fps: u.FPS_5,
                    preset: r.PRESET_DOCUMENTS
                }, {
                    resolution: i.RESOLUTION_1440,
                    fps: u.FPS_60,
                    guildPremiumTier: l.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: i.RESOLUTION_1440,
                    fps: u.FPS_30,
                    guildPremiumTier: l.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: i.RESOLUTION_1440,
                    fps: u.FPS_15,
                    guildPremiumTier: l.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: i.RESOLUTION_1080,
                    fps: u.FPS_60,
                    guildPremiumTier: l.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: i.RESOLUTION_1080,
                    fps: u.FPS_30,
                    guildPremiumTier: l.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: i.RESOLUTION_1080,
                    fps: u.FPS_15,
                    guildPremiumTier: l.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: i.RESOLUTION_720,
                    fps: u.FPS_60,
                    guildPremiumTier: l.BoostedGuildTiers.TIER_1,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: i.RESOLUTION_720,
                    fps: u.FPS_30
                }, {
                    resolution: i.RESOLUTION_720,
                    fps: u.FPS_15
                }, {
                    resolution: i.RESOLUTION_720,
                    fps: u.FPS_5
                }, {
                    resolution: i.RESOLUTION_480,
                    fps: u.FPS_60,
                    guildPremiumTier: l.BoostedGuildTiers.TIER_1,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: i.RESOLUTION_480,
                    fps: u.FPS_30
                }, {
                    resolution: i.RESOLUTION_480,
                    fps: u.FPS_15
                }, {
                    resolution: i.RESOLUTION_480,
                    fps: u.FPS_5
                }];

            function f(t, e) {
                return {
                    value: t,
                    get label() {
                        return null != e ? e() : t
                    }
                }
            }
            let T = [f(i.RESOLUTION_720), f(i.RESOLUTION_1080), f(i.RESOLUTION_1440), f(i.RESOLUTION_SOURCE, () => _.default.Messages.SCREENSHARE_SOURCE)],
                p = [f(i.RESOLUTION_720), f(i.RESOLUTION_1080), f(i.RESOLUTION_1440)],
                I = t => "".concat(t, "p"),
                R = [f(i.RESOLUTION_480, () => I(i.RESOLUTION_480)), f(i.RESOLUTION_720, () => I(i.RESOLUTION_720)), f(i.RESOLUTION_1080, () => I(i.RESOLUTION_1080)), f(i.RESOLUTION_1440, () => I(i.RESOLUTION_1440)), f(i.RESOLUTION_SOURCE, () => _.default.Messages.SCREENSHARE_SOURCE)],
                A = [f(u.FPS_15), f(u.FPS_30), f(u.FPS_60)],
                N = [f(u.FPS_15, () => _.default.Messages.STREAM_FPS_OPTION.format({
                    value: u.FPS_15
                })), f(u.FPS_30, () => _.default.Messages.STREAM_FPS_OPTION.format({
                    value: u.FPS_30
                })), f(u.FPS_60, () => _.default.Messages.STREAM_FPS_OPTION.format({
                    value: u.FPS_60
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
                d = n("407756"),
                _ = n("49111");
            async function c() {
                let t = await i.default.get(_.Endpoints.VIDEO_FILTER_ASSETS);
                return u.default.dispatch({
                    type: "VIDEO_FILTER_ASSETS_FETCH_SUCCESS",
                    assets: t.body
                }), t
            }
            async function E(t, e, n) {
                try {
                    let r = await i.default.post({
                        url: _.Endpoints.VIDEO_FILTER_ASSETS,
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
                    throw new d.default(t)
                }
            }
            async function S(t) {
                await i.default.delete(_.Endpoints.VIDEO_FILTER_ASSET(t.id));
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
                    let e = await i.default.post(_.Endpoints.VIDEO_FILTER_ASSET_LAST_USED(t.id));
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
            }), n("808653");
            var i = n("446674"),
                u = n("773364"),
                r = n("913144"),
                o = n("374363"),
                a = n("42887"),
                s = n("18494"),
                l = n("697218"),
                d = n("239448");
            let _ = !1,
                c = null,
                E = !1,
                S = {};

            function O(t) {
                var e;
                let n = l.default.getCurrentUser();
                if (null == n) return !1;
                let i = null != t ? t : (0, d.getVideoBackgroundOptionFromProto)(null === (e = o.default.settings.voiceAndVideo) || void 0 === e ? void 0 : e.videoBackgroundFilterDesktop, n.id);
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
                    return _
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
                    u.FilterSettingsKey.CAMERA_BACKGROUND_LIVE in e && (_ = !0)
                }
            })
        },
        239448: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                isCustomBackgroundOption: function() {
                    return d
                },
                isDefaultBackgroundOption: function() {
                    return _
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

            function d(t) {
                return null != t && "object" == typeof t && "id" in t && t.type === s.VideoFilterType.BACKGROUND
            }

            function _(t) {
                return "number" == typeof t && t in s.DefaultVideoBackground
            }

            function c(t) {
                return _(t) ? s.ANIMATED_DEFAULT_VIDEO_BACKGROUNDS.includes(t) : !!d(t) && ((0, a.isAnimatedIconHash)(t.asset) || (0, a.isVideoAssetHash)(t.asset))
            }

            function E(t) {
                return null != t ? "Video Background" : "None"
            }

            function S(t) {
                if (null == t) return "None";
                if (d(t)) return "Custom";
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
                    d = u.default.getChannel(s),
                    _ = (0, i.getVoiceStateMetadata)(a, s, !0);
                o.default.track(l.AnalyticEvents.VIDEO_EFFECT_UPDATED, {
                    location: e,
                    effect_type: E(t),
                    effect_detail: S(t),
                    effect_state: n,
                    channel_id: s,
                    channel_type: null == d ? void 0 : d.type,
                    guild_id: a,
                    voice_state_count: _.voice_state_count,
                    video_stream_count: _.video_stream_count,
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
                if (d(t)) return {
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
            }), n("332822"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
            var i = n("627445"),
                u = n.n(i),
                r = n("773364"),
                o = n("697218"),
                a = n("315102"),
                s = n("659558"),
                l = n("154867"),
                d = n("870879"),
                _ = n("239448"),
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
                let s, d = !1;
                if (null == n) return T(t, e, r.FilterSettingsGraph.NONE);
                if (n === S.BLUR_BACKGROUND_OPTION) return T(t, e, r.FilterSettingsGraph.BACKGROUND_BLUR);
                if ("string" == typeof n || "number" == typeof n) {
                    ;
                    let t = (0, c.default)()[n];
                    d = null !== (i = t.isVideo) && void 0 !== i && i, s = t.source
                } else {
                    let t = n.asset;
                    d = (0, a.isAnimatedIconHash)(t) || (0, a.isVideoAssetHash)(t), s = (0, a.getVideoFilterAssetURL)({
                        userId: n.user_id,
                        assetId: n.id,
                        assetHash: t,
                        size: S.BACKGROUND_REPLACEMENT_SIZE.width
                    })
                }
                if (null != s) try {
                    ;
                    let n = d ? void 0 : await (o = s, new Promise((t, e) => {
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
                                let d = i.getImageData(0, 0, e.width, e.height);
                                t({
                                    data: d.data,
                                    width: d.width,
                                    height: d.height,
                                    pixelFormat: "rgba"
                                })
                            }, n.onerror = t => e(t), n.src = o
                        })),
                        i = d ? await f(s) : void 0;
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
                }, t), n && (0, _.trackBackgroundOptionUpdated)(t, i, "Enabled")
            }
            async function R(t, e, n) {
                let {
                    track: i = !0,
                    location: u
                } = n;
                (0, l.startApplyMediaFilterSettings)(), await p(r.FilterSettingsKey.CAMERA_BACKGROUND_PREVIEW, {
                    type: r.FilterTargetType.STREAM,
                    streamId: e
                }, t), i && (0, _.trackBackgroundOptionUpdated)(t, u, "Preview")
            }

            function A() {
                let t = o.default.getCurrentUser();
                if (null == t) return;
                let e = (0, s.getLastUsedVideoBackgroundOption)(t);
                (0, E.default)() && !d.default.hasBeenApplied && null != e && I(e, {
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
                d = n("595726"),
                _ = n("462641"),
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
                        source: d,
                        name: r.default.Messages.VIDEO_BACKGROUND_DEFAULT_BACKGROUND_NAME_2
                    },
                    [i.DefaultVideoBackground.OPTION_3]: {
                        id: i.DefaultVideoBackground.OPTION_3,
                        source: _,
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
                d = n("353927"),
                _ = n("782340");

            function c(t) {
                if (null == t) return;
                let e = t.maxResolution.type === d.ResolutionTypes.SOURCE ? s.ApplicationStreamResolutions.RESOLUTION_SOURCE : t.maxResolution.height,
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
                return t.type === d.ResolutionTypes.SOURCE ? _.default.Messages.SCREENSHARE_SOURCE : _.default.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
                    resolution: t.height
                })
            }

            function f(t) {
                return _.default.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
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
                var d, _, c;
                let E = (d = t, _ = e, c = n, s.ApplicationStreamSettingRequirements.find(t => (null == t.preset || t.preset === d) && t.resolution === _ && t.fps === c)),
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
        },
        938850: function(t, e, n) {
            "use strict";
            var i, u;
            n.r(e), n.d(e, {
                AudioSettingsDefaultVolumes: function() {
                    return i
                }
            }), (u = i || (i = {}))[u.USER = 100] = "USER", u[u.STREAM = 18] = "STREAM"
        }
    }
]);
//# sourceMappingURL=eeff8a13dd4f83df3f73.js.map