(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["62093"], {
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
        504385: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                snapVolumeToDefault: function() {
                    return r
                },
                coerceAudioContextForProto: function() {
                    return d
                }
            });
            var i = n("938850"),
                o = n("773364"),
                u = n("829536"),
                a = n("397336");

            function r(t, e) {
                let n = e === o.MediaEngineContextTypes.STREAM ? i.AudioSettingsDefaultVolumes.STREAM : i.AudioSettingsDefaultVolumes.USER;
                return 1 > Math.abs((0, u.amplitudeToPerceptual)(n) - (0, u.amplitudeToPerceptual)(t)) ? n : t
            }

            function d(t) {
                switch (t) {
                    case o.MediaEngineContextTypes.DEFAULT:
                        return a.ProtoAudioSettingsContextTypes.USER;
                    case o.MediaEngineContextTypes.STREAM:
                        return a.ProtoAudioSettingsContextTypes.STREAM;
                    default:
                        return
                }
            }
        },
        659558: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getLastUsedVideoBackgroundOption: function() {
                    return a
                }
            }), n("884691"), n("446674");
            var i = n("374363");
            n("697218");
            var o = n("719923"),
                u = n("239448");

            function a(t) {
                var e;
                let n = i.default.settings;
                return function(t, e) {
                    let n = (0, u.getVideoBackgroundOptionFromProto)(t, e.id);
                    return (0, u.isCustomBackgroundOption)(n) && !o.default.canUseCustomBackgrounds(e) ? null : "number" != typeof n || (0, u.isDefaultBackgroundOption)(n) ? n : null
                }(null === (e = n.voiceAndVideo) || void 0 === e ? void 0 : e.videoBackgroundFilterDesktop, t)
            }
        },
        154867: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                fetchVideoFilterAssets: function() {
                    return _
                },
                uploadVideoFilterAsset: function() {
                    return f
                },
                deleteVideoFilterAsset: function() {
                    return E
                },
                saveLastUsedBackgroundOption: function() {
                    return A
                },
                applyMediaFilterSettings: function() {
                    return p
                },
                startApplyMediaFilterSettings: function() {
                    return O
                },
                errorApplyingMediaFilterSettings: function() {
                    return D
                }
            });
            var i = n("872717"),
                o = n("913144"),
                u = n("872173"),
                a = n("42887"),
                r = n("697218"),
                d = n("659558"),
                s = n("239448"),
                c = n("407756"),
                l = n("49111");
            async function _() {
                let t = await i.default.get(l.Endpoints.VIDEO_FILTER_ASSETS);
                return o.default.dispatch({
                    type: "VIDEO_FILTER_ASSETS_FETCH_SUCCESS",
                    assets: t.body
                }), t
            }
            async function f(t, e, n) {
                try {
                    let u = await i.default.post({
                        url: l.Endpoints.VIDEO_FILTER_ASSETS,
                        body: {
                            type: e,
                            asset: t,
                            last_used: null == n ? void 0 : n.toISOString()
                        }
                    });
                    return o.default.dispatch({
                        type: "VIDEO_FILTER_ASSET_UPLOAD_SUCCESS",
                        videoFilterAsset: u.body
                    }), u.body
                } catch (t) {
                    throw new c.default(t)
                }
            }
            async function E(t) {
                await i.default.delete(l.Endpoints.VIDEO_FILTER_ASSET(t.id));
                let e = (0, d.getLastUsedVideoBackgroundOption)(r.default.getCurrentUser());
                (0, s.isCustomBackgroundOption)(e) && e.id === t.id && A(null), o.default.dispatch({
                    type: "VIDEO_FILTER_ASSET_DELETE_SUCCESS",
                    videoFilterAsset: t
                })
            }
            async function A(t) {
                if (await u.PreloadedUserSettingsActionCreators.updateAsync("voiceAndVideo", e => {
                        e.videoBackgroundFilterDesktop = (0, s.getVideoBackgroundProtoFromOption)(t)
                    }, u.UserSettingsDelay.FREQUENT_USER_ACTION), (0, s.isCustomBackgroundOption)(t)) {
                    let e = await i.default.post(l.Endpoints.VIDEO_FILTER_ASSET_LAST_USED(t.id));
                    o.default.dispatch({
                        type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION",
                        backgroundOption: e.body
                    })
                } else o.default.dispatch({
                    type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION",
                    backgroundOption: t
                })
            }

            function p(t) {
                a.default.isSupported() && o.default.dispatch({
                    type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS",
                    settings: t
                })
            }

            function O() {
                a.default.isSupported() && o.default.dispatch({
                    type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START"
                })
            }

            function D() {
                o.default.dispatch({
                    type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR"
                })
            }
        },
        870879: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return D
                }
            });
            var i = n("446674"),
                o = n("773364"),
                u = n("913144"),
                a = n("374363"),
                r = n("42887"),
                d = n("18494"),
                s = n("697218"),
                c = n("239448");
            let l = !1,
                _ = null,
                f = !1,
                E = {};

            function A(t) {
                var e;
                let n = s.default.getCurrentUser();
                if (null == n) return !1;
                let i = null != t ? t : (0, c.getVideoBackgroundOptionFromProto)(null === (e = a.default.settings.voiceAndVideo) || void 0 === e ? void 0 : e.videoBackgroundFilterDesktop, n.id);
                return null != d.default.getVoiceChannelId() && r.default.isVideoEnabled() && null != i
            }

            function p() {
                _ !== d.default.getVoiceChannelId() && (f = !1), A() && (f = !0), _ = d.default.getVoiceChannelId()
            }
            class O extends i.default.Store {
                initialize() {
                    this.waitFor(a.default, d.default, r.default), this.syncWith([d.default, r.default], p)
                }
                get videoFilterAssets() {
                    return E
                }
                get hasBeenApplied() {
                    return l
                }
                get hasUsedBackgroundInCall() {
                    return f
                }
            }
            O.displayName = "VideoBackgroundStore";
            var D = new O(u.default, {
                VIDEO_FILTER_ASSETS_FETCH_SUCCESS: function(t) {
                    let {
                        assets: e
                    } = t;
                    E = e.reduce((t, e) => ({
                        ...t,
                        [e.id]: e
                    }), {})
                },
                VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: function(t) {
                    let {
                        videoFilterAsset: e
                    } = t;
                    E = {
                        ...E,
                        [e.id]: e
                    }
                },
                VIDEO_FILTER_ASSET_DELETE_SUCCESS: function(t) {
                    let {
                        videoFilterAsset: e
                    } = t;
                    E = {
                        ...E
                    }, delete E[e.id]
                },
                VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: function(t) {
                    let {
                        backgroundOption: e
                    } = t;
                    A(e) && (f = !0)
                },
                MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(t) {
                    let {
                        settings: e
                    } = t;
                    o.FilterSettingsKey.CAMERA_BACKGROUND_LIVE in e && (l = !0)
                }
            })
        },
        239448: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                isCustomBackgroundOption: function() {
                    return c
                },
                isDefaultBackgroundOption: function() {
                    return l
                },
                getEffectAnalyticsType: function() {
                    return f
                },
                getEffectDetailAnalyticsName: function() {
                    return E
                },
                trackBackgroundOptionUpdated: function() {
                    return A
                },
                trackBackgroundOptionAdded: function() {
                    return p
                },
                trackBackgroundOptionDeleted: function() {
                    return O
                },
                getVideoBackgroundProtoFromOption: function() {
                    return D
                },
                getVideoBackgroundOptionFromProto: function() {
                    return g
                }
            });
            var i = n("716241"),
                o = n("42203"),
                u = n("945956"),
                a = n("599110"),
                r = n("315102"),
                d = n("917219"),
                s = n("49111");

            function c(t) {
                return null != t && "object" == typeof t && "id" in t && t.type === d.VideoFilterType.BACKGROUND
            }

            function l(t) {
                return "number" == typeof t && t in d.DefaultVideoBackground
            }

            function _(t) {
                return l(t) ? d.ANIMATED_DEFAULT_VIDEO_BACKGROUNDS.includes(t) : !!c(t) && ((0, r.isAnimatedIconHash)(t.asset) || (0, r.isVideoAssetHash)(t.asset))
            }

            function f(t) {
                return null != t ? "Video Background" : "None"
            }

            function E(t) {
                if (null == t) return "None";
                if (c(t)) return "Custom";
                if ("blur" === t) return "Blur";
                else return "Preset - ".concat(function(t) {
                    switch (t) {
                        case d.DefaultVideoBackground.OPTION_1:
                            return "Cybercity";
                        case d.DefaultVideoBackground.OPTION_2:
                            return "Discord the Movie";
                        case d.DefaultVideoBackground.OPTION_3:
                            return "Wumpus Vacation";
                        case d.DefaultVideoBackground.OPTION_4:
                            return "Vaporwave";
                        case d.DefaultVideoBackground.OPTION_7:
                            return "Capernite Day";
                        case d.DefaultVideoBackground.OPTION_8:
                            return "Capernite Night";
                        case d.DefaultVideoBackground.OPTION_9:
                            return "Hacker Den";
                        case d.DefaultVideoBackground.OPTION_10:
                            return "Wumpice"
                    }
                }(t))
            }

            function A(t, e, n) {
                let r = u.default.getGuildId(),
                    d = u.default.getChannelId(),
                    c = o.default.getChannel(d),
                    l = (0, i.getVoiceStateMetadata)(r, d, !0);
                a.default.track(s.AnalyticEvents.VIDEO_EFFECT_UPDATED, {
                    location: e,
                    effect_type: f(t),
                    effect_detail: E(t),
                    effect_state: n,
                    channel_id: d,
                    channel_type: null == c ? void 0 : c.type,
                    guild_id: r,
                    voice_state_count: l.voice_state_count,
                    video_stream_count: l.video_stream_count,
                    media_session_id: u.default.getMediaSessionId(),
                    rtc_connection_id: u.default.getRTCConnectionId(),
                    is_animated: _(t)
                })
            }

            function p(t, e, n) {
                a.default.track(s.AnalyticEvents.VIDEO_BACKGROUND_ADDED, {
                    is_animated: _(t),
                    is_video: e,
                    is_from_tenor: n
                })
            }

            function O(t) {
                a.default.track(s.AnalyticEvents.VIDEO_BACKGROUND_DELETED, {
                    is_animated: _(t)
                })
            }

            function D(t) {
                if (null == t) return {
                    oneofKind: void 0
                };
                if (c(t)) return {
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

            function g(t, e) {
                if (null == t || void 0 === t.oneofKind) return null;
                switch (t.oneofKind) {
                    case "customAsset":
                        return {
                            type: d.VideoFilterType.BACKGROUND, id: t.customAsset.id, user_id: e, asset: t.customAsset.assetHash
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
                    return d
                }
            });
            var i, o, u = n("872717"),
                a = n("782340");
            (i || (i = {})).ASSET_SIZE = "BINARY_TYPE_MAX_SIZE", (o || (o = {})).ASSET = "asset";
            class r extends u.default.V8APIError {
                constructor(t, e) {
                    var n;
                    super(t, e, a.default.Messages.VIDEO_BACKGROUND_ERROR_UPLOAD);
                    let u = this.getFieldErrors(o.ASSET);
                    null != u && (null === (n = u[0]) || void 0 === n ? void 0 : n.code) === i.ASSET_SIZE && (this.message = a.default.Messages.VIDEO_BACKGROUND_ERROR_UPLOAD_FILE_SIZE)
                }
            }
            var d = r
        },
        439141: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                applyBackgroundOptionLive: function() {
                    return g
                },
                applyBackgroundOptionPreview: function() {
                    return I
                },
                applyInitialVideoBackgroundOption: function() {
                    return T
                }
            });
            var i = n("627445"),
                o = n.n(i),
                u = n("773364"),
                a = n("697218"),
                r = n("315102"),
                d = n("659558"),
                s = n("154867"),
                c = n("870879"),
                l = n("239448"),
                _ = n("977801"),
                f = n("512244"),
                E = n("917219"),
                A = n("49111");
            async function p(t) {
                let e = await fetch(t),
                    n = await e.blob();
                return new Uint8ClampedArray(await n.arrayBuffer())
            }

            function O(t, e, n, i, o) {
                (0, s.applyMediaFilterSettings)({
                    [t]: {
                        graph: n,
                        target: e,
                        image: i,
                        blob: o
                    }
                })
            }
            async function D(t, e, n) {
                var i, a;
                let d, c = !1;
                if (null == n) return O(t, e, u.FilterSettingsGraph.NONE);
                if (n === E.BLUR_BACKGROUND_OPTION) return O(t, e, u.FilterSettingsGraph.BACKGROUND_BLUR);
                if ("string" == typeof n || "number" == typeof n) {
                    ;
                    let t = (0, _.default)()[n];
                    c = null !== (i = t.isVideo) && void 0 !== i && i, d = t.source
                } else {
                    let t = n.asset;
                    c = (0, r.isAnimatedIconHash)(t) || (0, r.isVideoAssetHash)(t), d = (0, r.getVideoFilterAssetURL)({
                        userId: n.user_id,
                        assetId: n.id,
                        assetHash: t,
                        size: E.BACKGROUND_REPLACEMENT_SIZE.width
                    })
                }
                if (null != d) try {
                    ;
                    let n = c ? void 0 : await (a = d, new Promise((t, e) => {
                            let n = new Image;
                            n.crossOrigin = "anonymous", n.onload = () => {
                                let e = document.createElement("canvas");
                                e.width = E.BACKGROUND_REPLACEMENT_SIZE.width, e.height = E.BACKGROUND_REPLACEMENT_SIZE.height;
                                let i = e.getContext("2d");
                                o(null != i, "Canvas context is missing");
                                let u = n.height / n.width,
                                    a = E.BACKGROUND_REPLACEMENT_SIZE.height,
                                    r = E.BACKGROUND_REPLACEMENT_SIZE.height / u,
                                    d = (e.width - r) / 2,
                                    s = (e.height - a) / 2;
                                i.drawImage(n, d, s, r, a);
                                let c = i.getImageData(0, 0, e.width, e.height);
                                t({
                                    data: c.data,
                                    width: c.width,
                                    height: c.height,
                                    pixelFormat: "rgba"
                                })
                            }, n.onerror = t => e(t), n.src = a
                        })),
                        i = c ? await p(d) : void 0;
                    O(t, e, u.FilterSettingsGraph.BACKGROUND_REPLACEMENT, n, i)
                } catch (t) {
                    (0, s.errorApplyingMediaFilterSettings)()
                }
            }
            async function g(t, e) {
                let {
                    track: n = !0,
                    location: i
                } = e;
                await D(u.FilterSettingsKey.CAMERA_BACKGROUND_LIVE, {
                    type: u.FilterTargetType.INPUT_DEVICE
                }, t), n && (0, l.trackBackgroundOptionUpdated)(t, i, "Enabled")
            }
            async function I(t, e, n) {
                let {
                    track: i = !0,
                    location: o
                } = n;
                (0, s.startApplyMediaFilterSettings)(), await D(u.FilterSettingsKey.CAMERA_BACKGROUND_PREVIEW, {
                    type: u.FilterTargetType.STREAM,
                    streamId: e
                }, t), i && (0, l.trackBackgroundOptionUpdated)(t, o, "Preview")
            }

            function T() {
                let t = a.default.getCurrentUser();
                if (null == t) return;
                let e = (0, d.getLastUsedVideoBackgroundOption)(t);
                (0, f.default)() && !c.default.hasBeenApplied && null != e && g(e, {
                    track: !1
                }).catch(A.NOOP)
            }
        },
        977801: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return E
                }
            });
            var i = n("917219"),
                o = n("533613"),
                u = n("782340"),
                a = n("27562"),
                r = n("851703"),
                d = n("902577"),
                s = n("351288"),
                c = n("595726"),
                l = n("462641"),
                _ = n("95937"),
                f = n("929461"),
                E = () => ({
                    [i.DefaultVideoBackground.OPTION_1]: {
                        id: i.DefaultVideoBackground.OPTION_1,
                        source: d,
                        name: u.default.Messages.VIDEO_BACKGROUND_DEFAULT_BACKGROUND_NAME_1
                    },
                    [i.DefaultVideoBackground.OPTION_2]: {
                        id: i.DefaultVideoBackground.OPTION_2,
                        source: c,
                        name: u.default.Messages.VIDEO_BACKGROUND_DEFAULT_BACKGROUND_NAME_2
                    },
                    [i.DefaultVideoBackground.OPTION_3]: {
                        id: i.DefaultVideoBackground.OPTION_3,
                        source: l,
                        name: u.default.Messages.VIDEO_BACKGROUND_DEFAULT_BACKGROUND_NAME_3
                    },
                    [i.DefaultVideoBackground.OPTION_4]: {
                        id: i.DefaultVideoBackground.OPTION_4,
                        source: _,
                        name: u.default.Messages.VIDEO_BACKGROUND_DEFAULT_BACKGROUND_NAME_4
                    },
                    [i.DefaultVideoBackground.OPTION_7]: {
                        id: i.DefaultVideoBackground.OPTION_7,
                        source: a,
                        name: u.default.Messages.VIDEO_BACKGROUND_DEFAULT_BACKGROUND_NAME_7,
                        isVideo: !0,
                        hotspotLocation: o.HotspotLocations.ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW
                    },
                    [i.DefaultVideoBackground.OPTION_8]: {
                        id: i.DefaultVideoBackground.OPTION_8,
                        source: r,
                        name: u.default.Messages.VIDEO_BACKGROUND_DEFAULT_BACKGROUND_NAME_8,
                        isVideo: !0,
                        hotspotLocation: o.HotspotLocations.ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW
                    },
                    [i.DefaultVideoBackground.OPTION_9]: {
                        id: i.DefaultVideoBackground.OPTION_9,
                        source: s,
                        name: u.default.Messages.VIDEO_BACKGROUND_DEFAULT_BACKGROUND_NAME_9,
                        isVideo: !0,
                        hotspotLocation: o.HotspotLocations.ANIMATED_VIDEO_BG_HACKER_DEN_NEW
                    },
                    [i.DefaultVideoBackground.OPTION_10]: {
                        id: i.DefaultVideoBackground.OPTION_10,
                        source: f,
                        name: u.default.Messages.VIDEO_BACKGROUND_DEFAULT_BACKGROUND_NAME_10,
                        isVideo: !0,
                        hotspotLocation: o.HotspotLocations.ANIMATED_VIDEO_BG_WUMPICE_NEW
                    }
                })
        },
        512244: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("42887"),
                o = n("353927");

            function u() {
                var t;
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.default;
                return (t = e).supports(o.Features.MEDIAPIPE) && Object.values(t.getVideoDevices()).length > 0
            }
        },
        938850: function(t, e, n) {
            "use strict";
            var i, o;
            n.r(e), n.d(e, {
                AudioSettingsDefaultVolumes: function() {
                    return i
                }
            }), (o = i || (i = {}))[o.USER = 100] = "USER", o[o.STREAM = 18] = "STREAM"
        }
    }
]);
//# sourceMappingURL=c406fa9df8761f79d2d1.js.map