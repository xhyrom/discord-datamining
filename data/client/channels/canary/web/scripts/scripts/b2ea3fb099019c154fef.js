(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["53984"], {
        458960: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("122717"),
                r = n("52296"),
                o = n.n(r),
                s = n("773179"),
                a = n.n(s),
                l = n("512298"),
                _ = n.n(l);

            function u(e) {
                let t = Object.keys(e)[0];
                return "".concat(t, "(").concat(e[t], ")")
            }
            let d = /rgba\(([\d.]+), ([\d.]+), ([\d.]+), ([\d.]+)\)/;

            function c(e) {
                let t = e.match(d);
                return null != t && (e = "rgba(".concat(0 | t[1], ", ").concat(0 | t[2], ", ").concat(0 | t[3], ", ").concat(t[4], ")")), e
            }
            i.inject.ApplyAnimatedValues(function(e, t, n) {
                if (e.setNativeProps) e.setNativeProps(t);
                else {
                    if (!e.nodeType || void 0 === e.setAttribute) return !1;
                    var i;
                    _.setValueForStyles(e, ((i = t.style) && (i.transform && (i.transform = i.WebkitTransform = i.MozTransform = i.transform.map(u).join(" ")), i.color && (i.color = c(i.color)), i.backgroundColor && (i.backgroundColor = c(i.backgroundColor))), i), n._reactInternalInstance)
                }
            }, e => e);

            function S(e, t, n) {
                return void 0 !== t && void 0 != n ? a.random(t, n) : e
            }
            var E = {
                ...i,
                Easing: o,
                accelerate: function(e) {
                    return e.transform = e.transform || [], e.transform.push({
                        translateZ: 0
                    }), e
                },
                animate: function e(t, n) {
                    let r;
                    let {
                        toValueMin: o,
                        toValueMax: s,
                        tension: a = 0,
                        friction: l = 0,
                        loop: _,
                        reverse: u,
                        invert: d,
                        callback: c,
                        type: E = "spring",
                        shouldLoop: I,
                        durationMin: f,
                        durationMax: g,
                        ...T
                    } = n, m = t._value, A = S(n.duration, f, g), p = S(n.toValue, o, s), N = i[E](t, {
                        ...T,
                        toValue: p,
                        tension: a,
                        friction: l,
                        duration: A
                    }), O = N;
                    if (u || d) {
                        let e = S(n.duration, f, g);
                        r = i[E](t, {
                            ...T,
                            toValue: u ? m : -p,
                            tension: a,
                            friction: l,
                            duration: e
                        }), O = i.sequence([N, r])
                    }
                    _ ? O.start(() => {
                        (!I || I && I()) && (c ? c(e.bind(null, t, n)) : e(t, n))
                    }) : O.start(c)
                },
                interpolate: function(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                    return e.interpolate({
                        inputRange: [0, 1],
                        outputRange: n
                    })
                },
                Extrapolate: {
                    CLAMP: "clamp"
                },
                div: i.createAnimatedComponent("div"),
                span: i.createAnimatedComponent("span"),
                img: i.createAnimatedComponent("img"),
                a: i.createAnimatedComponent("a"),
                form: i.createAnimatedComponent("form"),
                ul: i.createAnimatedComponent("ul"),
                li: i.createAnimatedComponent("li"),
                g: i.createAnimatedComponent("g"),
                use: i.createAnimatedComponent("use"),
                path: i.createAnimatedComponent("path"),
                section: i.createAnimatedComponent("section"),
                video: i.createAnimatedComponent("video")
            }
        },
        206230: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var i = n("446674"),
                r = n("95410"),
                o = n("819855"),
                s = n("913144"),
                a = n("845579"),
                l = n("374363"),
                _ = n("922932"),
                u = n("49111"),
                d = n("894488");
            let c = {
                    fontSize: u.Accessibility.FONT_SIZE_DEFAULT,
                    zoom: u.Accessibility.ZOOM_DEFAULT,
                    keyboardModeEnabled: !1,
                    colorblindMode: !1,
                    lowContrastMode: !1,
                    saturation: 1,
                    desaturateUserColors: !1,
                    forcedColorsModalSeen: !1,
                    keyboardNavigationExplainerModalSeen: !1,
                    messageGroupSpacing: null,
                    systemPrefersReducedMotion: "no-preference",
                    systemPrefersCrossfades: !1,
                    prefersReducedMotion: "auto",
                    systemForcedColors: "none",
                    syncForcedColors: !0,
                    systemPrefersContrast: "no-preference",
                    alwaysShowLinkDecorations: !1,
                    roleStyle: "username",
                    submitButtonEnabled: !1,
                    syncProfileThemeWithUserTheme: !1
                },
                S = c,
                E = {
                    12: "font-size-12",
                    14: "font-size-14",
                    15: "font-size-15",
                    16: "font-size-16",
                    18: "font-size-18",
                    20: "font-size-20",
                    24: "font-size-24"
                };
            class I extends i.default.DeviceSettingsStore {
                initialize(e) {
                    this.waitFor(l.default), isNaN((S = {
                        ...c,
                        ...null != e ? e : null
                    }).fontSize) && (S.fontSize = u.Accessibility.FONT_SIZE_DEFAULT), 0 > d.MESSAGE_GROUP_SPACING.indexOf(null != S.messageGroupSpacing ? S.messageGroupSpacing : -1) && (S.messageGroupSpacing = null)
                }
                get fontScale() {
                    return S.fontSize / u.Accessibility.FONT_SIZE_DEFAULT * 100
                }
                get fontSize() {
                    return S.fontSize
                }
                get isFontScaledUp() {
                    return S.fontSize > u.Accessibility.FONT_SIZE_DEFAULT
                }
                get isFontScaledDown() {
                    return S.fontSize < u.Accessibility.FONT_SIZE_DEFAULT
                }
                get fontScaleClass() {
                    var e;
                    let t = null !== (e = E[this.fontSize]) && void 0 !== e ? e : "";
                    return this.isFontScaledUp ? "a11y-font-scaled-up ".concat(t) : this.isFontScaledDown ? "a11y-font-scaled-down ".concat(t) : "".concat(t)
                }
                get zoom() {
                    return S.zoom
                }
                get isZoomedIn() {
                    return S.zoom > u.Accessibility.ZOOM_DEFAULT
                }
                get isZoomedOut() {
                    return S.zoom < u.Accessibility.ZOOM_DEFAULT
                }
                get keyboardModeEnabled() {
                    return S.keyboardModeEnabled
                }
                get colorblindMode() {
                    return S.colorblindMode
                }
                get lowContrastMode() {
                    return S.lowContrastMode
                }
                get saturation() {
                    return S.saturation
                }
                get desaturateUserColors() {
                    return S.desaturateUserColors
                }
                get forcedColorsModalSeen() {
                    return S.forcedColorsModalSeen
                }
                get keyboardNavigationExplainerModalSeen() {
                    return S.keyboardNavigationExplainerModalSeen
                }
                get messageGroupSpacing() {
                    return null != S.messageGroupSpacing ? S.messageGroupSpacing : a.MessageDisplayCompact.getSetting() ? d.DEFAULT_COMPACT_SPACING : d.DEFAULT_COZY_SPACING
                }
                get isMessageGroupSpacingIncreased() {
                    let e = a.MessageDisplayCompact.getSetting() ? d.DEFAULT_COMPACT_SPACING : d.DEFAULT_COZY_SPACING;
                    return this.messageGroupSpacing > e
                }
                get isMessageGroupSpacingDecreased() {
                    let e = a.MessageDisplayCompact.getSetting() ? d.DEFAULT_COMPACT_SPACING : d.DEFAULT_COZY_SPACING;
                    return this.messageGroupSpacing < e
                }
                get isSubmitButtonEnabled() {
                    return S.submitButtonEnabled
                }
                get syncProfileThemeWithUserTheme() {
                    return S.syncProfileThemeWithUserTheme
                }
                get systemPrefersReducedMotion() {
                    return S.systemPrefersReducedMotion
                }
                get rawPrefersReducedMotion() {
                    return S.prefersReducedMotion
                }
                get useReducedMotion() {
                    switch (S.prefersReducedMotion) {
                        case "no-preference":
                            return !1;
                        case "reduce":
                            return !0;
                        default:
                            return "reduce" === S.systemPrefersReducedMotion
                    }
                }
                get systemForcedColors() {
                    return S.systemForcedColors
                }
                get syncForcedColors() {
                    return S.syncForcedColors
                }
                get useForcedColors() {
                    return !!S.syncForcedColors && "active" === S.systemForcedColors || !1
                }
                get systemPrefersContrast() {
                    return S.systemPrefersContrast
                }
                get systemPrefersCrossfades() {
                    return S.systemPrefersCrossfades
                }
                get alwaysShowLinkDecorations() {
                    return S.alwaysShowLinkDecorations
                }
                get roleStyle() {
                    return S.roleStyle
                }
                getUserAgnosticState() {
                    return S
                }
            }
            I.displayName = "AccessibilityStore", I.persistKey = "AccessibilityStore", I.migrations = [() => {
                let e = {
                        FONT_SCALE: "a11yFontScale",
                        ZOOM: "a11yZoom",
                        COLORBLIND_MODE: "a11yColorblindMode"
                    },
                    t = r.default.get(e.FONT_SCALE) || 100,
                    n = r.default.get(e.ZOOM) || u.Accessibility.ZOOM_DEFAULT,
                    i = r.default.get(e.COLORBLIND_MODE) || !1;
                return r.default.remove(e.FONT_SCALE), r.default.remove(e.ZOOM), r.default.remove(e.COLORBLIND_MODE), {
                    fontScale: t,
                    zoom: n,
                    colorblindMode: i,
                    keyboardModeEnabled: !1
                }
            }, e => {
                let {
                    fontScale: t,
                    ...n
                } = e, i = 16;
                switch (t) {
                    case 82:
                        i = 12;
                        break;
                    case 92:
                        i = 15;
                        break;
                    case 100:
                        i = 16;
                        break;
                    case 110:
                        i = 18;
                        break;
                    case 125:
                        i = 20;
                        break;
                    case 150:
                        i = 24
                }
                return {
                    ...n,
                    fontSize: i
                }
            }, e => ({
                ...e,
                darkSidebar: !1
            }), e => ({
                ...e,
                messageGroupSpacing: null
            }), e => ({
                ...e,
                systemPrefersReducedMotion: "no-preference",
                prefersReducedMotion: "auto"
            }), e => ({
                ...e,
                alwaysShowLinkDecorations: e.saturation <= o.LOW_SATURATION_THRESHOLD
            })];
            let f = new I(s.default, {
                ACCESSIBILITY_SET_FONT_SIZE: function(e) {
                    var t;
                    let n = (t = e.fontSize, u.Accessibility.FONT_SIZES.indexOf(t) >= 0 ? t : u.Accessibility.FONT_SIZE_DEFAULT);
                    if (n > u.Accessibility.FONT_SIZE_MAX || n < u.Accessibility.FONT_SIZE_MIN || S.fontSize === n) return !1;
                    (S = {
                        ...S
                    }).fontSize = n
                },
                ACCESSIBILITY_SET_ZOOM: function(e) {
                    if (e.zoom < u.Accessibility.ZOOM_MIN || e.zoom > u.Accessibility.ZOOM_MAX || S.zoom === e.zoom) return !1;
                    (S = {
                        ...S
                    }).zoom = e.zoom, _.default.setZoomFactor(S.zoom)
                },
                ACCESSIBILITY_RESET_TO_DEFAULT: function() {
                    let e = S.fontSize !== u.Accessibility.FONT_SIZE_DEFAULT,
                        t = S.zoom !== u.Accessibility.ZOOM_DEFAULT;
                    if (!e && !t) return !1;
                    (S = {
                        ...S
                    }).fontSize !== u.Accessibility.FONT_SIZE_DEFAULT && (S.fontSize = u.Accessibility.FONT_SIZE_DEFAULT), S.zoom !== u.Accessibility.ZOOM_DEFAULT && (S.zoom = u.Accessibility.ZOOM_DEFAULT, _.default.setZoomFactor(S.zoom))
                },
                ACCESSIBILITY_KEYBOARD_MODE_ENABLE: function() {
                    if (S.keyboardModeEnabled) return !1;
                    (S = {
                        ...S
                    }).keyboardModeEnabled = !0
                },
                ACCESSIBILITY_KEYBOARD_MODE_DISABLE: function() {
                    if (!S.keyboardModeEnabled) return !1;
                    (S = {
                        ...S
                    }).keyboardModeEnabled = !1
                },
                ACCESSIBILITY_COLORBLIND_TOGGLE: function() {
                    (S = {
                        ...S
                    }).colorblindMode = !S.colorblindMode
                },
                ACCESSIBILITY_LOW_CONTRAST_TOGGLE: function() {
                    (S = {
                        ...S
                    }).lowContrastMode = !S.lowContrastMode
                },
                ACCESSIBILITY_SET_SATURATION: function(e) {
                    (S = {
                        ...S
                    }).saturation = e.saturation
                },
                ACCESSIBILITY_DESATURATE_ROLES_TOGGLE: function() {
                    (S = {
                        ...S
                    }).desaturateUserColors = !S.desaturateUserColors
                },
                ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: function(e) {
                    var t;
                    return S = {
                        ...S,
                        systemForcedColors: null !== (t = e.systemForcedColors) && void 0 !== t ? t : "none"
                    }, !0
                },
                ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED: function(e) {
                    if (S.systemPrefersContrast === e.systemPrefersContrast) return !1;
                    S = {
                        ...S,
                        systemPrefersContrast: e.systemPrefersContrast
                    }
                },
                ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: function(e) {
                    if (S.systemPrefersReducedMotion === e.systemPrefersReducedMotion) return !1;
                    S = {
                        ...S,
                        systemPrefersReducedMotion: e.systemPrefersReducedMotion
                    }
                },
                ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: function(e) {
                    if (S.systemPrefersCrossfades === e.systemPrefersCrossfades) return !1;
                    S = {
                        ...S,
                        systemPrefersCrossfades: e.systemPrefersCrossfades
                    }
                },
                ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: function(e) {
                    if (S.prefersReducedMotion === e.prefersReducedMotion) return !1;
                    S = {
                        ...S,
                        prefersReducedMotion: e.prefersReducedMotion
                    }
                },
                ACCESSIBILITY_SET_SYNC_FORCED_COLORS: function(e) {
                    S.syncForcedColors = e.syncForcedColors
                },
                ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS: function(e) {
                    S = {
                        ...S,
                        alwaysShowLinkDecorations: e.alwaysShowLinkDecorations
                    }
                },
                ACCESSIBILITY_SET_ROLE_STYLE: function(e) {
                    S.roleStyle = e.roleStyle
                },
                ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN: function() {
                    S.forcedColorsModalSeen = !0
                },
                KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN: function() {
                    S = {
                        ...S,
                        keyboardNavigationExplainerModalSeen: !0
                    }
                },
                ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING: function(e) {
                    let {
                        messageGroupSpacing: t
                    } = e;
                    S = {
                        ...S,
                        messageGroupSpacing: t
                    }
                },
                ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE: function() {
                    (S = {
                        ...S
                    }).submitButtonEnabled = !S.submitButtonEnabled
                },
                ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE: function() {
                    (S = {
                        ...S
                    }).syncProfileThemeWithUserTheme = !S.syncProfileThemeWithUserTheme
                }
            });
            var g = f
        },
        357626: function(e, t, n) {
            "use strict";
            var i, r, o, s, a, l, _, u;
            n.r(t), n.d(t, {
                ChannelListLayoutSettings: function() {
                    return r
                },
                MessagePreviewSettings: function() {
                    return s
                }
            }), (a = i || (i = {})).COZY = "cozy", a.COMPACT = "compact", a.MINIMAL = "minimal", (l = r || (r = {})).HYBRID = "hybrid", l.COZY = "cozy", l.COMPACT = "compact", l.MINIMAL = "minimal", (_ = o || (o = {})).UNREADS = "unreads", _.ALL = "all", _.NONE = "none", (u = s || (s = {})).DEFAULT = "default", u.ALL = "all", u.UNREADS = "unreads", u.NONE = "none"
        },
        894488: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MESSAGE_GROUP_SPACING: function() {
                    return l
                },
                DEFAULT_COZY_SPACING: function() {
                    return _
                },
                DEFAULT_COMPACT_SPACING: function() {
                    return u
                },
                DEFAULT_POPOUTS: function() {
                    return d
                },
                MESSAGE_PADDING: function() {
                    return c
                },
                PLACEHOLDER_BUFFER: function() {
                    return S
                },
                NEW_MESSAGE_BAR_BUFFER: function() {
                    return E
                },
                NEW_MESSAGE_BAR_BUFFER_LARGE: function() {
                    return I
                },
                NEW_MESSAGE_BAR_ID: function() {
                    return f
                },
                SPOILER_ATTACHMENT_PREFIX: function() {
                    return g
                },
                FileUploadErrorTypes: function() {
                    return o
                },
                DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE: function() {
                    return T
                },
                isChannelStreamMessage: function() {
                    return m
                }
            });
            var i, r, o, s, a = n("49111");
            let l = [0, 4, 8, 16, 24],
                _ = 16,
                u = 0,
                d = Object.freeze({
                    referencedAvatarProfile: !1,
                    referencedUsernameProfile: !1,
                    interactionAvatarProfile: !1,
                    interactionUsernameProfile: !1,
                    interactionData: !1,
                    avatarProfile: !1,
                    usernameProfile: !1,
                    emojiPicker: !1,
                    emojiBurstPicker: !1,
                    moreUtilities: !1,
                    contextMenu: !1
                }),
                c = 16,
                S = 16,
                E = 32,
                I = 64,
                f = "---new-messages-bar",
                g = "SPOILER_";
            (i = o || (o = {})).ERROR_SOURCE_UNKNOWN = "ERROR_SOURCE_UNKNOWN", i.PRECOMPRESSION_SUM_TOO_LARGE = "PRECOMPRESSION_SUM_TOO_LARGE", i.PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE = "PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE", i.POSTCOMPRESSION_SUM_TOO_LARGE = "POSTCOMPRESSION_SUM_TOO_LARGE", i.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE = "POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE", i.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR = "UPLOAD_MESSAGE_ATTACHMENT_MAX_SIZE_ERROR", (r = s || (s = {})).SYSTEM_DM_TAG_SYSTEM_TYPE = "a", r.BOT_TAG_SERVER_TYPE = "b", r.AI_TAG_TYPE = "c", r.BOT_TAG_BOT_TYPE = "d", r.REMIXING_TYPE = "e";
            let T = 209715200;

            function m(e) {
                return e.type === a.ChannelStreamTypes.MESSAGE
            }
        },
        560241: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                STICKER_PICKER_TAB_PANEL_ID: function() {
                    return o
                },
                STICKER_PICKER_TAB_ID: function() {
                    return s
                },
                GRID_NAVIGATOR_ID: function() {
                    return a
                },
                INACTIVE_CATEGORY_INDEX: function() {
                    return l
                },
                DEFAULT_STICKER_DIMENSIONS: function() {
                    return _
                },
                STICKER_APPLICATION_ID: function() {
                    return u
                },
                EMPTY_STATE_STICKERS: function() {
                    return d
                },
                MAX_STICKER_FILE_SIZE: function() {
                    return c
                },
                STAFF_MAX_STICKER_FILE_SIZE: function() {
                    return S
                },
                StickerAnimationSettings: function() {
                    return i
                }
            });
            let o = "sticker-picker-tab-panel",
                s = "sticker-picker-tab",
                a = "sticker-picker-grid",
                l = -1,
                _ = 160,
                u = "710982414301790216",
                d = ["781323769960202280", "809209266556764241", "818597810047680532", "819129296374595614"],
                c = 524288,
                S = 1572864;
            (r = i || (i = {}))[r.ALWAYS_ANIMATE = 0] = "ALWAYS_ANIMATE", r[r.ANIMATE_ON_INTERACTION = 1] = "ANIMATE_ON_INTERACTION", r[r.NEVER_ANIMATE = 2] = "NEVER_ANIMATE"
        },
        568456: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DMSafetyCoachmarkActions: function() {
                    return s
                },
                DmSpamFilterTypes: function() {
                    return a
                },
                ExplicitContentFilterTypes: function() {
                    return l
                },
                ExplicitContentFilterToDmSpamFilterV2: function() {
                    return u
                }
            });
            var i, r, o, s, a, l, _ = n("151426");
            (i = s || (s = {}))[i.VIEW = 0] = "VIEW", i[i.DISMISS = 1] = "DISMISS", i[i.CHANGE_SETTING = 2] = "CHANGE_SETTING", (r = a || (a = {}))[r.DISABLED = 0] = "DISABLED", r[r.NON_FRIENDS = 1] = "NON_FRIENDS", r[r.FRIENDS_AND_NON_FRIENDS = 2] = "FRIENDS_AND_NON_FRIENDS", (o = l || (l = {}))[o.DISABLED = 0] = "DISABLED", o[o.NON_FRIENDS = 1] = "NON_FRIENDS", o[o.FRIENDS_AND_NON_FRIENDS = 2] = "FRIENDS_AND_NON_FRIENDS";
            let u = new Map([
                [l.DISABLED, _.DmSpamFilterV2.DISABLED],
                [l.NON_FRIENDS, _.DmSpamFilterV2.NON_FRIENDS],
                [l.FRIENDS_AND_NON_FRIENDS, _.DmSpamFilterV2.FRIENDS_AND_NON_FRIENDS]
            ])
        },
        737292: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("917351"),
                r = n.n(i),
                o = n("446674"),
                s = n("95410"),
                a = n("913144"),
                l = n("49111");
            let _ = {};
            class u extends o.default.PersistedStore {
                initialize(e) {
                    _ = null != e ? e : {}
                }
                getState() {
                    return _
                }
                shouldSync(e) {
                    var t;
                    return (null === (t = _[e]) || void 0 === t ? void 0 : t.shouldSync) !== !1
                }
                getTextSettings() {
                    var e;
                    return null === (e = _.text) || void 0 === e ? void 0 : e.settings
                }
                getAppearanceSettings() {
                    var e;
                    return null === (e = _.appearance) || void 0 === e ? void 0 : e.settings
                }
            }
            u.displayName = "SelectivelySyncedUserSettingsStore", u.persistKey = "SelectivelySyncedUserSettingsStore", u.migrations = [() => {
                var e, t;
                let n = null !== (e = s.default.get("UserSettingsSync")) && void 0 !== e ? e : {},
                    i = null !== (t = s.default.get("UserSettingsStore")) && void 0 !== t ? t : {};
                s.default.remove("UserSettingsSync");
                let o = {};
                return !1 === n[l.UserSettingsSections.TEXT] && (o.text = {
                    shouldSync: !1,
                    settings: r.pick(i, ["inlineAttachmentMedia", "inlineEmbedMedia", "renderEmbeds", "renderReactions", "animateEmoji", "animateStickers", "gifAutoPlay"])
                }), !1 === n[l.UserSettingsSections.APPEARANCE] && (o.appearance = {
                    shouldSync: !1,
                    settings: r.pick(i, ["theme", "clientThemeSettings", "developerMode"])
                }), o
            }];
            var d = new u(a.default, {
                SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: function(e) {
                    let {
                        changes: t
                    } = e;
                    for (let e in t) {
                        var n;
                        let {
                            shouldSync: i,
                            settings: r
                        } = t[e];
                        if (!0 === i) {
                            delete _[e];
                            continue
                        }!1 === i && (_[e] = {
                            shouldSync: i,
                            settings: {}
                        });
                        if ((null === (n = _[e]) || void 0 === n ? void 0 : n.shouldSync) === !1)
                            for (let t in r) _[e].settings[t] = r[t]
                    }
                },
                LOGOUT: function() {
                    _ = {}
                }
            })
        },
        281473: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                defineProtoSetting: function() {
                    return _
                },
                wrapSettingWithSelectiveSyncing: function() {
                    return u
                },
                wrapSettingWithOverride: function() {
                    return d
                }
            });
            var i = n("446674"),
                r = n("913144"),
                o = n("737292"),
                s = n("872173"),
                a = n("374363"),
                l = n("397336");

            function _(e, t, n, r) {
                let o = () => {
                    var i;
                    return n(null === (i = a.default.settings[e]) || void 0 === i ? void 0 : i[t])
                };
                return {
                    getSetting: o,
                    updateSetting: c(o, n => s.PreloadedUserSettingsActionCreators.updateAsync(e, e => {
                        e[t] = r(n, e[t])
                    }, l.UserSettingsDelay.INFREQUENT_USER_ACTION)),
                    useSetting: () => (0, i.useStateFromStores)([a.default], o)
                }
            }

            function u(e, t, n) {
                let s = () => {
                    var i;
                    let r = o.default.getState()[t];
                    return null !== (i = null == r ? void 0 : r.settings[n]) && void 0 !== i ? i : e.getSetting()
                };
                return {
                    getSetting: s,
                    useSetting: () => {
                        let r = e.useSetting(),
                            s = (0, i.useStateFromStores)([o.default], () => {
                                let e = o.default.getState()[t];
                                return null == e ? void 0 : e.settings[n]
                            });
                        return null != s ? s : r
                    },
                    updateSetting: c(s, i => o.default.shouldSync(t) ? e.updateSetting(i) : (r.default.dispatch({
                        type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
                        changes: {
                            [t]: {
                                settings: {
                                    [n]: i
                                }
                            }
                        }
                    }), Promise.resolve()))
                }
            }

            function d(e, t, n, i) {
                var o;
                let s = () => null !== (o = n()) && void 0 !== o ? o : e.getSetting();
                return {
                    getSetting: s,
                    useSetting: () => {
                        let t = e.useSetting(),
                            n = i();
                        return null != n ? n : t
                    },
                    updateSetting: c(s, n => (r.default.dispatch({
                        type: "USER_SETTINGS_OVERRIDE_CLEAR",
                        settings: [t]
                    }), e.updateSetting(n)))
                }
            }

            function c(e, t) {
                return function(n) {
                    return "function" == typeof n ? t(n(e())) : t(n)
                }
            }
        },
        845579: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UseLegacyChatInput: function() {
                    return er
                },
                UseRichChatInput: function() {
                    return eo
                },
                ExpressionSuggestionsEnabled: function() {
                    return es
                },
                IncludeStickersInAutocomplete: function() {
                    return ea
                },
                RenderSpoilers: function() {
                    return el
                },
                UseThreadSidebar: function() {
                    return e_
                },
                EmojiPickerCollapsedSections: function() {
                    return ed
                },
                StickerPickerCollapsedSections: function() {
                    return ec
                },
                SoundboardPickerCollapsedSections: function() {
                    return eS
                },
                ViewImageDescriptions: function() {
                    return eE
                },
                ShowCommandSuggestions: function() {
                    return eI
                },
                AlwaysPreviewVideo: function() {
                    return ef
                },
                NotifyFriendsOnGoLive: function() {
                    return eg
                },
                NOTIFICATION_CENTER_ACKED_BEFORE_ID_UNSET: function() {
                    return eT
                },
                NotificationCenterAckedBeforeId: function() {
                    return em
                },
                EnableBurstReactionNotifications: function() {
                    return eA
                },
                InstallShortcutDesktop: function() {
                    return ep
                },
                InstallShortcutStartMenu: function() {
                    return eN
                },
                AllowActivityPartyPrivacyFriends: function() {
                    return eO
                },
                AllowActivityPartyPrivacyVoiceChannel: function() {
                    return eC
                },
                MessageRequestRestrictedGuildIds: function() {
                    return eR
                },
                MessageRequestRestrictedDefault: function() {
                    return eD
                },
                NonSpamRetrainingOptIn: function() {
                    return eL
                },
                DefaultGuildsRestricted: function() {
                    return eP
                },
                RestrictedGuildIds: function() {
                    return eh
                },
                FriendSourceFlagsSetting: function() {
                    return ey
                },
                RtcPanelShowVoiceStates: function() {
                    return eU
                },
                ConvertEmoticons: function() {
                    return eG
                },
                MessageDisplayCompact: function() {
                    return eM
                },
                SoundboardSettings: function() {
                    return ew
                },
                DropsOptedOut: function() {
                    return eF
                },
                AfkTimeout: function() {
                    return eb
                },
                ViewNsfwGuilds: function() {
                    return ek
                },
                ViewNsfwCommands: function() {
                    return eB
                },
                DisableGamesTab: function() {
                    return eV
                },
                EnableTTSCommand: function() {
                    return eY
                },
                ExplicitContentFilter: function() {
                    return eH
                },
                DmSpamFilterV2: function() {
                    return eW
                },
                ShowCurrentGame: function() {
                    return ex
                },
                StatusSetting: function() {
                    return eZ
                },
                CustomStatusSetting: function() {
                    return eK
                },
                BroadcastAllowFriends: function() {
                    return eX
                },
                BroadcastAllowedGuildIds: function() {
                    return eq
                },
                BroadcastAllowedUserIds: function() {
                    return eJ
                },
                BroadcastAutoBroadcast: function() {
                    return eQ
                },
                ClipsAllowVoiceRecording: function() {
                    return e$
                },
                InlineAttachmentMedia: function() {
                    return e0
                },
                InlineEmbedMedia: function() {
                    return e1
                },
                RenderEmbeds: function() {
                    return e4
                },
                RenderReactions: function() {
                    return e2
                },
                TimezoneOffset: function() {
                    return e6
                },
                DeveloperMode: function() {
                    return e9
                },
                ClientThemeSettings: function() {
                    return e7
                },
                GifAutoPlay: function() {
                    return e8
                },
                AnimateEmoji: function() {
                    return te
                },
                AnimateStickers: function() {
                    return tt
                },
                ActivityRestrictedGuilds: function() {
                    return ti
                },
                ActivityJoiningRestrictedGuilds: function() {
                    return to
                },
                DefaultGuildsActivityRestricted: function() {
                    return ts
                },
                DisableHomeAutoNav: function() {
                    return ta
                },
                FamilyCenterEnabled: function() {
                    return tl
                },
                LegacyUsernameDisabled: function() {
                    return t_
                },
                ExplicitContentSettings: function() {
                    return tu
                }
            });
            var i, r, o, s, a, l, _, u, d, c, S, E, I, f, g, T, m, A, p, N, O, C, v, R, D, L, P, h, y, U, G, M, w, F, b, k, B, V, Y, H, W, x, z, Z, K, j, X = n("446674"),
                q = n("151426"),
                J = n("750028"),
                Q = n("357626"),
                $ = n("281473"),
                ee = n("186709"),
                et = n("568456"),
                en = n("49111"),
                ei = n("560241");
            let er = (0, $.defineProtoSetting)("textAndImages", "useLegacyChatInput", e => null !== (i = null == e ? void 0 : e.value) && void 0 !== i && i, e => J.BoolValue.create({
                    value: e
                })),
                eo = (0, $.defineProtoSetting)("textAndImages", "useRichChatInput", e => null === (r = null == e ? void 0 : e.value) || void 0 === r || r, e => J.BoolValue.create({
                    value: e
                })),
                es = (0, $.defineProtoSetting)("textAndImages", "expressionSuggestionsEnabled", e => null === (o = null == e ? void 0 : e.value) || void 0 === o || o, e => J.BoolValue.create({
                    value: e
                })),
                ea = (0, $.defineProtoSetting)("textAndImages", "includeStickersInAutocomplete", e => null !== (s = null == e ? void 0 : e.value) && void 0 !== s && s, e => J.BoolValue.create({
                    value: e
                })),
                el = (0, $.defineProtoSetting)("textAndImages", "renderSpoilers", e => null !== (a = null == e ? void 0 : e.value) && void 0 !== a ? a : en.SpoilerRenderSetting.ON_CLICK, e => J.StringValue.create({
                    value: e
                })),
                e_ = (0, $.defineProtoSetting)("textAndImages", "useThreadSidebar", e => null === (l = null == e ? void 0 : e.value) || void 0 === l || l, e => J.BoolValue.create({
                    value: e
                }));
            (0, $.defineProtoSetting)("notifications", "showInAppNotifications", e => null === (_ = null == e ? void 0 : e.value) || void 0 === _ || _, e => J.BoolValue.create({
                value: e
            }));
            let eu = [],
                ed = (0, $.defineProtoSetting)("textAndImages", "emojiPickerCollapsedSections", e => null != e ? e : eu, e => e),
                ec = (0, $.defineProtoSetting)("textAndImages", "stickerPickerCollapsedSections", e => null != e ? e : eu, e => e),
                eS = (0, $.defineProtoSetting)("textAndImages", "soundboardPickerCollapsedSections", e => null != e ? e : eu, e => e),
                eE = (0, $.defineProtoSetting)("textAndImages", "viewImageDescriptions", e => null !== (u = null == e ? void 0 : e.value) && void 0 !== u && u, e => J.BoolValue.create({
                    value: e
                })),
                eI = (0, $.defineProtoSetting)("textAndImages", "showCommandSuggestions", e => null === (d = null == e ? void 0 : e.value) || void 0 === d || d, e => J.BoolValue.create({
                    value: e
                })),
                ef = (0, $.defineProtoSetting)("voiceAndVideo", "alwaysPreviewVideo", e => null !== (c = null == e ? void 0 : e.value) && void 0 !== c && c, e => J.BoolValue.create({
                    value: e
                })),
                eg = (0, $.defineProtoSetting)("notifications", "notifyFriendsOnGoLive", e => null == e ? void 0 : e.value, e => J.BoolValue.create({
                    value: e
                })),
                eT = "0",
                em = (0, $.defineProtoSetting)("notifications", "notificationCenterAckedBeforeId", e => null != e ? e : eT, e => e),
                eA = (0, $.defineProtoSetting)("notifications", "enableBurstReactionNotifications", e => null === (S = null == e ? void 0 : e.value) || void 0 === S || S, e => J.BoolValue.create({
                    value: e
                })),
                ep = (0, $.defineProtoSetting)("gameLibrary", "installShortcutDesktop", e => null !== (E = null == e ? void 0 : e.value) && void 0 !== E && E, e => J.BoolValue.create({
                    value: e
                })),
                eN = (0, $.defineProtoSetting)("gameLibrary", "installShortcutStartMenu", e => null === (I = null == e ? void 0 : e.value) || void 0 === I || I, e => J.BoolValue.create({
                    value: e
                })),
                eO = (0, $.defineProtoSetting)("privacy", "allowActivityPartyPrivacyFriends", e => null === (f = null == e ? void 0 : e.value) || void 0 === f || f, e => J.BoolValue.create({
                    value: e
                })),
                eC = (0, $.defineProtoSetting)("privacy", "allowActivityPartyPrivacyVoiceChannel", e => null === (g = null == e ? void 0 : e.value) || void 0 === g || g, e => J.BoolValue.create({
                    value: e
                })),
                ev = [],
                eR = (0, $.defineProtoSetting)("privacy", "messageRequestRestrictedGuildIds", e => null != e ? e : ev, e => e),
                eD = (0, $.defineProtoSetting)("privacy", "defaultMessageRequestRestricted", e => null !== (T = null == e ? void 0 : e.value) && void 0 !== T && T, e => J.BoolValue.create({
                    value: e
                })),
                eL = (0, $.defineProtoSetting)("privacy", "nonSpamRetrainingOptIn", e => null == e ? void 0 : e.value, e => null == e ? void 0 : J.BoolValue.create({
                    value: e
                }));
            (0, $.defineProtoSetting)("privacy", "contactSyncEnabled", e => null !== (m = null == e ? void 0 : e.value) && void 0 !== m && m, e => J.BoolValue.create({
                value: e
            }));
            let eP = (0, $.defineProtoSetting)("privacy", "defaultGuildsRestricted", e => null != e && e, e => e),
                eh = (0, $.defineProtoSetting)("privacy", "restrictedGuildIds", e => null != e ? e : [], e => e);
            (0, $.defineProtoSetting)("privacy", "friendDiscoveryFlags", e => null !== (A = null == e ? void 0 : e.value) && void 0 !== A ? A : 0, e => J.UInt32Value.create({
                value: e
            }));
            let ey = (0, $.defineProtoSetting)("privacy", "friendSourceFlags", e => null !== (p = null == e ? void 0 : e.value) && void 0 !== p ? p : en.AllFriendSourceFlags, e => J.UInt32Value.create({
                    value: e
                })),
                eU = (0, $.defineProtoSetting)("debug", "rtcPanelShowVoiceStates", e => null !== (N = null == e ? void 0 : e.value) && void 0 !== N && N, e => J.BoolValue.create({
                    value: e
                })),
                eG = (0, $.defineProtoSetting)("textAndImages", "convertEmoticons", e => null === (O = null == e ? void 0 : e.value) || void 0 === O || O, e => J.BoolValue.create({
                    value: e
                })),
                eM = (0, $.defineProtoSetting)("textAndImages", "messageDisplayCompact", e => null !== (C = null == e ? void 0 : e.value) && void 0 !== C && C, e => J.BoolValue.create({
                    value: e
                })),
                ew = (0, $.defineProtoSetting)("voiceAndVideo", "soundboardSettings", e => e, e => e);
            (0, $.defineProtoSetting)("voiceAndVideo", "streamNotificationsEnabled", e => null === (v = null == e ? void 0 : e.value) || void 0 === v || v, e => J.BoolValue.create({
                value: e
            }));
            let eF = (0, $.defineProtoSetting)("privacy", "dropsOptedOut", e => null !== (R = null == e ? void 0 : e.value) && void 0 !== R && R, e => J.BoolValue.create({
                value: e
            }));
            (0, $.defineProtoSetting)("voiceAndVideo", "nativePhoneIntegrationEnabled", e => null === (D = null == e ? void 0 : e.value) || void 0 === D || D, e => J.BoolValue.create({
                value: e
            }));
            let eb = (0, $.defineProtoSetting)("voiceAndVideo", "afkTimeout", e => null !== (L = null == e ? void 0 : e.value) && void 0 !== L ? L : 600, e => J.UInt32Value.create({
                    value: e
                })),
                ek = (0, $.defineProtoSetting)("textAndImages", "viewNsfwGuilds", e => null !== (P = null == e ? void 0 : e.value) && void 0 !== P && P, e => J.BoolValue.create({
                    value: e
                })),
                eB = (0, $.defineProtoSetting)("textAndImages", "viewNsfwCommands", e => null !== (h = null == e ? void 0 : e.value) && void 0 !== h && h, e => J.BoolValue.create({
                    value: e
                }));
            (0, $.defineProtoSetting)("privacy", "detectPlatformAccounts", e => null === (y = null == e ? void 0 : e.value) || void 0 === y || y, e => J.BoolValue.create({
                value: e
            }));
            let eV = (0, $.defineProtoSetting)("gameLibrary", "disableGamesTab", e => null !== (U = null == e ? void 0 : e.value) && void 0 !== U && U, e => J.BoolValue.create({
                    value: e
                })),
                eY = (0, $.defineProtoSetting)("textAndImages", "enableTtsCommand", e => null === (G = null == e ? void 0 : e.value) || void 0 === G || G, e => J.BoolValue.create({
                    value: e
                })),
                eH = (0, $.defineProtoSetting)("textAndImages", "explicitContentFilter", e => null !== (M = null == e ? void 0 : e.value) && void 0 !== M ? M : et.ExplicitContentFilterTypes.NON_FRIENDS, e => J.UInt32Value.create({
                    value: e
                }));
            (0, $.defineProtoSetting)("textAndImages", "dmSpamFilter", e => null !== (w = null == e ? void 0 : e.value) && void 0 !== w ? w : et.DmSpamFilterTypes.NON_FRIENDS, e => J.UInt32Value.create({
                value: e
            }));
            let eW = (0, $.defineProtoSetting)("textAndImages", "dmSpamFilterV2", e => null != e ? e : q.DmSpamFilterV2.DEFAULT_UNSET, e => e),
                ex = (0, $.defineProtoSetting)("status", "showCurrentGame", e => null === (F = null == e ? void 0 : e.value) || void 0 === F || F, e => J.BoolValue.create({
                    value: e
                })),
                ez = new Set(Object.values(en.StatusTypes)),
                eZ = (0, $.defineProtoSetting)("status", "status", e => null != e && ez.has(e.value) ? e.value : en.StatusTypes.UNKNOWN, e => J.StringValue.create({
                    value: e
                })),
                eK = (0, $.defineProtoSetting)("status", "customStatus", e => e, e => e),
                ej = [],
                eX = (0, $.defineProtoSetting)("broadcast", "allowFriends", e => null == e ? void 0 : e.value, e => J.BoolValue.create({
                    value: e
                })),
                eq = (0, $.defineProtoSetting)("broadcast", "allowedGuildIds", e => null != e ? e : ej, e => e),
                eJ = (0, $.defineProtoSetting)("broadcast", "allowedUserIds", e => null != e ? e : ej, e => e),
                eQ = (0, $.defineProtoSetting)("broadcast", "autoBroadcast", e => null !== (b = null == e ? void 0 : e.value) && void 0 !== b && b, e => J.BoolValue.create({
                    value: e
                })),
                e$ = (0, $.defineProtoSetting)("clips", "allowVoiceRecording", e => null === (k = null == e ? void 0 : e.value) || void 0 === k || k, e => J.BoolValue.create({
                    value: e
                })),
                e0 = (0, $.wrapSettingWithSelectiveSyncing)((0, $.defineProtoSetting)("textAndImages", "inlineAttachmentMedia", e => null === (B = null == e ? void 0 : e.value) || void 0 === B || B, e => J.BoolValue.create({
                    value: e
                })), "text", "inlineAttachmentMedia"),
                e1 = (0, $.wrapSettingWithSelectiveSyncing)((0, $.defineProtoSetting)("textAndImages", "inlineEmbedMedia", e => null === (V = null == e ? void 0 : e.value) || void 0 === V || V, e => J.BoolValue.create({
                    value: e
                })), "text", "inlineEmbedMedia"),
                e4 = (0, $.wrapSettingWithSelectiveSyncing)((0, $.defineProtoSetting)("textAndImages", "renderEmbeds", e => null === (Y = null == e ? void 0 : e.value) || void 0 === Y || Y, e => J.BoolValue.create({
                    value: e
                })), "text", "renderEmbeds"),
                e2 = (0, $.wrapSettingWithSelectiveSyncing)((0, $.defineProtoSetting)("textAndImages", "renderReactions", e => null === (H = null == e ? void 0 : e.value) || void 0 === H || H, e => J.BoolValue.create({
                    value: e
                })), "text", "renderReactions"),
                e6 = (0, $.defineProtoSetting)("localization", "timezoneOffset", e => null !== (W = null == e ? void 0 : e.value) && void 0 !== W ? W : null, e => J.Int32Value.create({
                    value: null != e ? e : 0
                }));
            (0, $.defineProtoSetting)("appearance", "mobileRedesignDisabled", e => null != e && e, e => e);
            let e3 = new Set([Q.ChannelListLayoutSettings.HYBRID, Q.ChannelListLayoutSettings.COZY, Q.ChannelListLayoutSettings.COMPACT, Q.ChannelListLayoutSettings.MINIMAL]);
            (0, $.defineProtoSetting)("appearance", "channelListLayout", e => null != e && e3.has(e.value) ? e.value : Q.ChannelListLayoutSettings.HYBRID, e => J.StringValue.create({
                value: e
            }));
            let e5 = new Set([Q.MessagePreviewSettings.DEFAULT, Q.MessagePreviewSettings.ALL, Q.MessagePreviewSettings.UNREADS, Q.MessagePreviewSettings.NONE]);
            (0, $.defineProtoSetting)("appearance", "messagePreviews", e => null != e && e5.has(e.value) ? e.value : Q.MessagePreviewSettings.DEFAULT, e => J.StringValue.create({
                value: e
            }));
            let e9 = (0, $.wrapSettingWithSelectiveSyncing)((0, $.defineProtoSetting)("appearance", "developerMode", e => null != e && e, e => e), "appearance", "developerMode"),
                e7 = (0, $.defineProtoSetting)("appearance", "clientThemeSettings", e => {
                    let {
                        backgroundGradientPresetId: t,
                        backgroundGradientAngle: n
                    } = null != e ? e : {};
                    return {
                        backgroundGradientPresetId: null == t ? void 0 : t.value,
                        backgroundGradientAngle: null == n ? void 0 : n.value
                    }
                }, e => {
                    let {
                        backgroundGradientPresetId: t,
                        backgroundGradientAngle: n
                    } = e;
                    return {
                        backgroundGradientPresetId: null != t ? J.UInt32Value.create({
                            value: t
                        }) : void 0,
                        backgroundGradientAngle: null != n ? J.FloatValue.create({
                            value: n
                        }) : void 0
                    }
                }),
                e8 = (0, $.wrapSettingWithOverride)((0, $.wrapSettingWithSelectiveSyncing)((0, $.defineProtoSetting)("textAndImages", "gifAutoPlay", e => null === (x = null == e ? void 0 : e.value) || void 0 === x || x, e => J.BoolValue.create({
                    value: e
                })), "text", "gifAutoPlay"), "gifAutoPlay", () => {
                    var e;
                    return null === (e = ee.default.getOverride("gifAutoPlay")) || void 0 === e ? void 0 : e.value
                }, () => (0, X.useStateFromStores)([ee.default], () => {
                    var e;
                    return null === (e = ee.default.getOverride("gifAutoPlay")) || void 0 === e ? void 0 : e.value
                })),
                te = (0, $.wrapSettingWithOverride)((0, $.wrapSettingWithSelectiveSyncing)((0, $.defineProtoSetting)("textAndImages", "animateEmoji", e => null === (z = null == e ? void 0 : e.value) || void 0 === z || z, e => J.BoolValue.create({
                    value: e
                })), "text", "animateEmoji"), "animateEmoji", () => {
                    var e;
                    return null === (e = ee.default.getOverride("animateEmoji")) || void 0 === e ? void 0 : e.value
                }, () => (0, X.useStateFromStores)([ee.default], () => {
                    var e;
                    return null === (e = ee.default.getOverride("animateEmoji")) || void 0 === e ? void 0 : e.value
                })),
                tt = (0, $.wrapSettingWithOverride)((0, $.wrapSettingWithSelectiveSyncing)((0, $.defineProtoSetting)("textAndImages", "animateStickers", e => null !== (Z = null == e ? void 0 : e.value) && void 0 !== Z ? Z : ei.StickerAnimationSettings.ALWAYS_ANIMATE, e => J.UInt32Value.create({
                    value: e
                })), "text", "animateStickers"), "animateStickers", () => {
                    var e;
                    return null === (e = ee.default.getOverride("animateStickers")) || void 0 === e ? void 0 : e.value
                }, () => (0, X.useStateFromStores)([ee.default], () => {
                    var e;
                    return null === (e = ee.default.getOverride("animateStickers")) || void 0 === e ? void 0 : e.value
                })),
                tn = [],
                ti = (0, $.defineProtoSetting)("privacy", "activityRestrictedGuildIds", e => null != e ? e : tn, e => e),
                tr = [],
                to = (0, $.defineProtoSetting)("privacy", "activityJoiningRestrictedGuildIds", e => null != e ? e : tr, e => e),
                ts = (0, $.defineProtoSetting)("privacy", "defaultGuildsActivityRestricted", e => e === q.GuildActivityStatusRestrictionDefault.ON_FOR_LARGE_GUILDS, e => !0 === e ? q.GuildActivityStatusRestrictionDefault.ON_FOR_LARGE_GUILDS : q.GuildActivityStatusRestrictionDefault.OFF),
                ta = (0, $.defineProtoSetting)("communities", "disableHomeAutoNav", e => null !== (K = null == e ? void 0 : e.value) && void 0 !== K && K, e => J.BoolValue.create({
                    value: e
                })),
                tl = (0, $.defineProtoSetting)("privacy", "familyCenterEnabledV2", e => null == e ? void 0 : e.value, e => J.BoolValue.create({
                    value: e
                })),
                t_ = (0, $.defineProtoSetting)("privacy", "hideLegacyUsername", e => null !== (j = null == e ? void 0 : e.value) && void 0 !== j && j, e => J.BoolValue.create({
                    value: e
                })),
                tu = (0, $.defineProtoSetting)("textAndImages", "explicitContentSettings", e => {
                    let {
                        explicitContentGuilds: t,
                        explicitContentFriendDm: n,
                        explicitContentNonFriendDm: i
                    } = null != e ? e : {};
                    return {
                        explicitContentGuilds: null != t ? t : q.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION,
                        explicitContentFriendDm: null != n ? n : q.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION,
                        explicitContentNonFriendDm: null != i ? i : q.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION
                    }
                }, e => {
                    let {
                        explicitContentGuilds: t,
                        explicitContentFriendDm: n,
                        explicitContentNonFriendDm: i
                    } = e;
                    return {
                        explicitContentGuilds: null != t ? t : void 0,
                        explicitContentFriendDm: null != n ? n : void 0,
                        explicitContentNonFriendDm: null != i ? i : void 0
                    }
                })
        },
        186709: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("446674"),
                r = n("95410"),
                o = n("913144"),
                s = n("374363");
            let a = {},
                l = {};

            function _() {
                var e, t, n, i, r, o;
                let a = s.default.settings;
                return {
                    gifAutoPlay: null === (t = a.textAndImages) || void 0 === t ? void 0 : null === (e = t.gifAutoPlay) || void 0 === e ? void 0 : e.value,
                    animateEmoji: null === (i = a.textAndImages) || void 0 === i ? void 0 : null === (n = i.animateEmoji) || void 0 === n ? void 0 : n.value,
                    animateStickers: null === (o = a.textAndImages) || void 0 === o ? void 0 : null === (r = o.animateStickers) || void 0 === r ? void 0 : r.value
                }
            }

            function u() {
                return l = _(), !1
            }
            class d extends i.default.PersistedStore {
                initialize(e) {
                    a = null != e ? e : {}, this.syncWith([s.default], u)
                }
                getState() {
                    return a
                }
                getAppliedOverrideReasonKey(e) {
                    var t;
                    return null === (t = a[e]) || void 0 === t ? void 0 : t.reasonKey
                }
                getOverride(e) {
                    return a[e]
                }
            }
            d.displayName = "UserSettingsOverridesStore", d.persistKey = "UserSettingsOverridesStore", d.migrations = [() => {
                var e;
                let t = null !== (e = r.default.get("UserSettingsStoreOverrides")) && void 0 !== e ? e : {};
                return r.default.remove("UserSettingsStoreOverrides"), t
            }];
            var c = new d(o.default, {
                USER_SETTINGS_PROTO_UPDATE: function() {
                    let e = _(),
                        t = !1;
                    for (let n in e) e[n] !== l[n] && (delete a[n], t = !0);
                    return t
                },
                USER_SETTINGS_OVERRIDE_APPLY: function(e) {
                    let {
                        settings: t
                    } = e;
                    a = {
                        ...a,
                        ...t
                    }
                },
                USER_SETTINGS_OVERRIDE_CLEAR: function(e) {
                    let {
                        settings: t
                    } = e;
                    for (let e of t) delete a[e]
                },
                LOGOUT: function() {
                    a = {}
                },
                LOGIN_SUCCESS: function() {
                    a = {}
                }
            })
        },
        872173: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UserSettingsDelay: function() {
                    return I.UserSettingsDelay
                },
                PreloadedUserSettingsActionCreators: function() {
                    return A
                },
                FrecencyUserSettingsActionCreators: function() {
                    return p
                },
                UserSettingsActionCreatorsByType: function() {
                    return N
                },
                updateUserGuildSettings: function() {
                    return O
                },
                updateUserChannelSettings: function() {
                    return C
                },
                addDismissedContent: function() {
                    return v
                },
                removeDismissedContent: function() {
                    return R
                },
                clearDismissedContents: function() {
                    return D
                },
                checkAllDismissedContents: function() {
                    return L
                }
            });
            var i = n("627445"),
                r = n.n(i),
                o = n("811022"),
                s = n("872717"),
                a = n("713349"),
                l = n("151426"),
                _ = n("95410"),
                u = n("913144"),
                d = n("674268"),
                c = n("275877"),
                S = n("374363"),
                E = n("116949"),
                I = n("397336"),
                f = n("49111");
            let g = "UserSettingsProtoLastWriteTimes",
                T = Date.now();
            u.default.subscribe("CONNECTION_OPEN", () => {
                Date.now()
            }), u.default.subscribe("CONNECTION_CLOSED", () => {
                Date.now()
            }), "undefined" != typeof document && (document.addEventListener("mousedown", () => {}), document.addEventListener("keydown", () => {}));
            class m {
                getEditInfo() {
                    return S.default.getFullState()[this.type]
                }
                getCurrentValue() {
                    return this.getEditInfo().proto
                }
                async updateAsync(e, t, n) {
                    await this.loadIfNecessary();
                    let i = this.ProtoClass.fields.find(t => t.localName === e);
                    if (null == i) throw Error("Unknown proto field name ".concat(String(e)));
                    let r = i.T(),
                        o = this.getCurrentValue()[e],
                        s = null != o ? r.fromBinary(r.toBinary(o), E.BINARY_READ_OPTIONS) : r.create(),
                        a = t(s);
                    if (!1 === a) return;
                    let l = this.ProtoClass.create();
                    l[e] = s, __OVERLAY__ ? u.default.dispatch({
                        type: "USER_SETTINGS_PROTO_ENQUEUE_UPDATE",
                        settings: {
                            type: this.type,
                            proto: l
                        },
                        delaySeconds: n,
                        jitter: n === I.UserSettingsDelay.AUTOMATED || n === I.UserSettingsDelay.DAILY,
                        partial: !0,
                        resetEditInfo: !1,
                        local: !0
                    }) : (this.logger.log("Updating ".concat(String(e), " with delay ").concat(n)), this.markDirty(l, {
                        delaySeconds: n,
                        jitter: n === I.UserSettingsDelay.AUTOMATED || n === I.UserSettingsDelay.DAILY
                    }))
                }
                markDirty(e, t) {
                    var n;
                    r(!__OVERLAY__, "this cannot run in the overlay");
                    let {
                        editInfo: i
                    } = this.getEditInfo(), o = {
                        timeout: i.timeout
                    };
                    if (!i.loaded) throw Error("Cannot edit user settings proto because we have not yet loaded the stored version from the DB");
                    !1 !== t.dispatch && u.default.dispatch({
                        type: "USER_SETTINGS_PROTO_UPDATE",
                        settings: {
                            type: this.type,
                            proto: e
                        },
                        partial: !0,
                        local: !0
                    });
                    let s = null !== (n = t.delaySeconds) && void 0 !== n ? n : 0;
                    if (null != o.timeout && s < i.timeoutDelay && !i.rateLimited && (clearTimeout(o.timeout), o.timeout = void 0), null == o.timeout) {
                        let e = 1e3 * s;
                        t.jitter && (e += Math.floor(Math.random() * Math.min(e, 3e4))), this.logger.log("Scheduling save from markDirty"), o.timeout = setTimeout(this.persistChanges, e), o.timeoutDelay = s
                    }
                    null != t.cleanup && (o.cleanupFuncs = [...i.cleanupFuncs, ...t.cleanup]), null == i.protoToSave ? o.protoToSave = e : o.protoToSave = (0, E.mergeTopLevelFields)(this.ProtoClass, i.protoToSave, e), this.dispatchChanges(o)
                }
                dispatchChanges(e) {
                    u.default.dispatch({
                        type: "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO",
                        settings: {
                            changes: e,
                            type: this.type
                        }
                    })
                }
                saveLastSendTime() {
                    var e;
                    let t = null !== (e = _.default.get(g)) && void 0 !== e ? e : {};
                    t[this.type] = Date.now(), _.default.set(g, t)
                }
                async loadIfNecessary(e) {
                    if (__OVERLAY__) {
                        u.default.dispatch({
                            type: "USER_SETTINGS_PROTO_LOAD_IF_NECESSARY",
                            settingsType: this.type
                        });
                        return
                    }
                    let {
                        editInfo: t
                    } = this.getEditInfo();
                    if (e || !t.loaded && !t.loading) {
                        this.logger.log("Loading proto"), this.dispatchChanges({
                            loading: !0
                        });
                        try {
                            let {
                                body: {
                                    settings: t
                                }
                            } = await s.default.get({
                                url: f.Endpoints.USER_SETTINGS_PROTO(this.type)
                            }), n = (0, E.b64ToProto)(this.ProtoClass, t);
                            if (null == n) {
                                this.dispatchChanges({
                                    loading: !1,
                                    loaded: !0
                                });
                                return
                            }
                            let i = c.default[this.type],
                                {
                                    proto: r,
                                    isDirty: o,
                                    cleanupFuncs: a
                                } = (0, E.runMigrations)(n, i);
                            return u.default.dispatch({
                                type: "USER_SETTINGS_PROTO_UPDATE",
                                settings: {
                                    type: this.type,
                                    proto: n
                                },
                                resetEditInfo: o || e,
                                local: !1
                            }), o && this.markDirtyFromMigration(r, a), n
                        } catch (e) {
                            throw this.dispatchChanges({
                                loading: !1
                            }), e
                        }
                    }
                }
                markDirtyFromMigration(e, t) {
                    r(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Marking dirty due to migrates"), r(null == this.getEditInfo().editInfo.offlineEditDataVersion, "offline changes are not supported with migrations"), this.markDirty(e, {
                        cleanup: t,
                        dispatch: !1,
                        delaySeconds: I.UserSettingsDelay.AUTOMATED,
                        jitter: !0
                    })
                }
                markDirtyIfHasPendingChange(e) {
                    let t = this.beforeSendCallbacks.some(e => {
                        let {
                            hasChanges: t
                        } = e;
                        return t()
                    });
                    t && this.markDirty(this.ProtoClass.create(), {
                        dispatch: !1,
                        delaySeconds: 0,
                        cleanup: e
                    })
                }
                scheduleSaveFromOfflineEdit() {
                    r(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Scheduling save from offline edit");
                    let {
                        editInfo: e
                    } = this.getEditInfo();
                    r(null != e.protoToSave, "protoToSave cannot be null"), r(null != e.offlineEditDataVersion, "offlineEditDataVersion cannot be null"), r(null == e.timeout, "timeout must not be set already");
                    let t = 5e3 + Math.floor(5e3 * Math.random()),
                        n = setTimeout(this.persistChanges, t);
                    this.dispatchChanges({
                        timeout: n,
                        timeoutDelay: t
                    })
                }
                constructor(e, t) {
                    this.ProtoClass = e, this.type = t, this.beforeSendCallbacks = [], this.lastSendTime = 0, this.persistChanges = async () => {
                        r(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Persisting proto");
                        let {
                            editInfo: e
                        } = this.getEditInfo();
                        if (null == e.protoToSave) {
                            this.logger.log("Not persisting proto because the proto was null");
                            return
                        }
                        this.beforeSendCallbacks.forEach(t => {
                            let {
                                processProto: n
                            } = t;
                            return n(e.protoToSave)
                        });
                        let t = (0, E.protoToB64)(this.ProtoClass, e.protoToSave);
                        if (null == t || "" === t) {
                            this.logger.log("Not persisting proto because there is nothing to change");
                            return
                        }
                        try {
                            this.saveLastSendTime();
                            let {
                                body: n
                            } = await s.default.patch({
                                url: f.Endpoints.USER_SETTINGS_PROTO(this.type),
                                body: {
                                    settings: t,
                                    required_data_version: e.offlineEditDataVersion
                                }
                            });
                            n.out_of_date && this.logger.log("Proto was out of date, discarding changes"), this.getEditInfo().editInfo.cleanupFuncs.forEach(e => e());
                            let i = (0, E.b64ToProto)(this.ProtoClass, n.settings);
                            if (null == i) return;
                            u.default.dispatch({
                                type: "USER_SETTINGS_PROTO_UPDATE",
                                settings: {
                                    proto: i,
                                    type: this.type
                                },
                                resetEditInfo: !0,
                                wasSaved: !0,
                                local: !1
                            })
                        } catch (e) {
                            var n, i;
                            if (429 === e.status) {
                                this.logger.log("Rate limited, scheduling retry");
                                let t = setTimeout(this.persistChanges, Math.min(3e4, (null !== (i = e.body.retry_after) && void 0 !== i ? i : 60) * 1e3));
                                this.dispatchChanges({
                                    rateLimited: !0,
                                    timeout: t
                                })
                            } else if (400 === e.status && (null === (n = e.body) || void 0 === n ? void 0 : n.code) === f.AbortCodes.INVALID_USER_SETTINGS_DATA) throw this.logger.log("Reloading do to invalid data"), this.loadIfNecessary(!0), e;
                            else throw this.logger.log("Unknown user settings error"), e
                        }
                    }, this.logger = new o.default(this.ProtoClass.typeName)
                }
            }
            let A = new m(l.PreloadedUserSettings, I.UserSettingsTypes.PRELOADED_USER_SETTINGS),
                p = new m(a.FrecencyUserSettings, I.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS),
                N = {
                    [I.UserSettingsTypes.PRELOADED_USER_SETTINGS]: A,
                    [I.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: p
                };

            function O(e, t, n) {
                return A.updateAsync("guilds", n => (0, E.mutateUserGuildSettingsInternal)(n, e, t), n)
            }

            function C(e, t, n, i) {
                return O(e, e => (0, E.mutateUserChannelSettingsInternal)(e, t, n), i)
            }

            function v(e) {
                return A.updateAsync("userContent", t => {
                    if ((0, d.hasBit)(t.dismissedContents, e)) return !1;
                    t.dismissedContents = (0, d.addBit)(t.dismissedContents, e)
                }, I.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function R(e) {
                return A.updateAsync("userContent", t => {
                    if (!(0, d.hasBit)(t.dismissedContents, e)) return !1;
                    t.dismissedContents = (0, d.removeBit)(t.dismissedContents, e)
                }, I.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function D() {
                return A.updateAsync("userContent", e => {
                    e.dismissedContents = new Uint8Array
                }, I.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function L() {
                return A.updateAsync("userContent", e => {
                    let t = new Uint8Array;
                    for (let e of Object.keys(l.DismissibleContent)) t = (0, d.addBit)(t, l.DismissibleContent[e]);
                    e.dismissedContents = t
                }, I.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        },
        922932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("50885"),
                r = {
                    flushDNSCache() {
                        i.default.flushDNSCache()
                    },
                    flushCookies: () => i.default.flushCookies(),
                    setApplicationBackgroundColor(e) {
                        i.default.setApplicationBackgroundColor(e)
                    },
                    setZoomFactor: e => i.default.setZoomFactor(e),
                    focus(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        i.default.focus(e, t)
                    },
                    submitLiveCrashReport: e => i.default.submitLiveCrashReport(e),
                    getPidFromDesktopSource: e => i.default.getPidFromDesktopSource(e),
                    getAudioPid: e => i.default.getAudioPid(e),
                    generateSessionFromPid: e => i.default.generateSessionFromPid(e)
                }
        },
        674268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hasBit: function() {
                    return i
                },
                addBit: function() {
                    return r
                },
                removeBit: function() {
                    return o
                }
            });

            function i(e, t) {
                if (0 === e.length) return !1;
                let n = e[Math.floor(t / 8)];
                return (n & 1 << t % 8) != 0
            }

            function r(e, t) {
                let n = Math.floor(t / 8);
                if (e.length <= n) {
                    let t = new Uint8Array(n + 1);
                    t.set(e, 0), e = t
                }
                return e[n] |= 1 << t % 8, e
            }

            function o(e, t) {
                if (i(e, t)) {
                    let n = Math.floor(t / 8),
                        i = t % 8;
                    e[n] &= ~(1 << i)
                }
                return e
            }
        },
        33112: function(e, t, n) {
            "use strict";
            var i, r, o, s;
            n.r(t), n.d(t, {
                ImpressionNames: function() {
                    return i
                },
                NetworkActionNames: function() {
                    return r
                }
            }), (o = i || (i = {})).ACTIVITIES = "impression_activities", o.ACTIVITIES_HAPPENING_NOW = "impression_activities_happening_now", o.ACTIVITY_BOOKMARK_SHARE_MODAL = "impression_activity_bookmark_share_modal", o.ACTIVITY_BOOSTING_UPSELL = "impression_activity_boosting_upsell", o.ACTIVITY_DETAILS = "impression_activity_details", o.ACTIVITY_NITRO_UPSELL = "impression_activity_nitro_upsell", o.ACTIVITY_SHARE_MOMENT_MODAL = "impression_activity_share_moment_modal", o.ACTIVITY_SHELF = "impression_activity_shelf", o.ACTIVITY_SHELF_SELECT_CHANNEL = "impression_activity_shelf_select_channel", o.APPLICATION_LIBRARY = "impression_application_library", o.APPLICATION_STORE = "impression_application_store", o.AVATAR_UPLOAD = "impression_avatar_upload", o.CHANNEL_ADD_INFO = "impression_channel_add_info", o.CHANNEL_ADD_MEMBERS = "impression_channel_add_members", o.CHANNEL_CALL_VIDEO_GRID = "impression_channel_call_video_grid", o.CHANNEL_CALL_VIDEO_GRID_VIEW = "impression_channel_call_video_grid_view", o.CHANNEL_VIEWED = "impression_channel_viewed", o.CLIP_EDITOR_VIEWED = "impression_clip_editor_viewed", o.CLIP_GALLERY_VIEWED = "impression_clip_gallery_viewed", o.CLYDE_AI_PROFILE_EMBED_VIEWED = "impression_clyde_ai_profile_embed_viewed", o.CONTACT_SYNC_INPUT_NAME = "impression_contact_sync_input_name", o.CONTACT_SYNC_START = "impression_contact_sync_start", o.CONTACT_SYNC_SUGGESTIONS = "impression_contact_sync_suggestions", o.CREATOR_PROMO_PAGE_GUILD_HEADER_UPSELL = "impression_creator_promo_page_guild_header_upsell", o.DIRECTORY_ADD_GUILD_CONFIRMATION = "impression_directory_add_guild_confirmation", o.DISCOVERABILITY = "impression_discoverability", o.DROPS_QUEST_COMPLETION = "impression_drops_quest_completion", o.DROPS_QUEST_ENROLLMENT = "impression_drops_quest_enrollment", o.EMBEDDED_ACTIVITY_HAPPENING_NOW = "impression_embedded_activity_happening_now", o.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING = "impression_enable_creator_monetization_accept_terms_landing", o.ENABLE_CREATOR_MONETIZATION_CREATE_REQUEST_LANDING = "impression_enable_creator_monetization_create_request_landing", o.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL = "impression_enable_creator_monetization_guild_header_upsell", o.ENABLE_CREATOR_MONETIZATION_WAITLIST_LANDING = "impression_enable_creator_monetization_waitlist_landing", o.FRIENDS = "impression_friends", o.GAME_CONSOLE_DEVICE_LIST = "impression_game_console_device_list", o.GDM_SETTINGS_INVITES = "impression_gdm_settings_invites", o.GUILD_ADD_ACCEPT_INVITE = "impression_guild_add_accept_invite", o.GUILD_ADD_CHANNEL_PROMPT = "impression_guild_add_channel_prompt", o.GUILD_ADD_CUSTOMIZE = "impression_guild_add_customize", o.GUILD_ADD_GUILD_INVITE = "impression_guild_add_guild_invite", o.GUILD_ADD_INTENT_SELECTION = "impression_guild_add_intent_selection", o.GUILD_ADD_JOIN = "impression_guild_add_join", o.GUILD_CREATE_MODAL_JOIN = "impression_guild_create_modal_join", o.GUILD_ADD_LANDING = "impression_guild_add_landing", o.GUILD_CHANNEL = "impression_guild_channel", o.GUILD_DISCOVERY = "impression_guild_discovery", o.GUILD_INVITE = "impression_guild_invite", o.GUILD_INVITE_LINK_SETTINGS = "impression_guild_invite_link_settings", o.GUILD_INVITE_SEARCH = "impression_guild_invite_search", o.GUILD_MEMBER_VERIFICATION = "impression_guild_member_verification", o.GUILD_PERMANENT_LINKS_UPSELL = "impression_guild_permanent_links_upsell", o.GUILD_PRODUCT_LISTING_EMBED = "impression_guild_product_listing_embed", o.GUILD_PRODUCT_LISTING_INFO_MODAL = "impression_guild_product_listing_info_modal", o.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS = "impression_guild_role_subscription_store_page_guild_settings", o.GUILD_SETTINGS_ANALYTICS = "impression_guild_settings_analytics", o.GUILD_SETTINGS_AUDIT_LOG = "impression_guild_settings_audit_log", o.GUILD_SETTINGS_AUDIT_LOG_V2 = "impression_guild_settings_audit_log_v2", o.GUILD_SETTINGS_BANS = "impression_guild_settings_bans", o.GUILD_SETTINGS_BOOST_STATUS = "impression_guild_settings_boost_status", o.GUILD_SETTINGS_CHANNELS = "impression_guild_settings_channels", o.GUILD_SETTINGS_CLYDE = "impression_guild_settings_clyde", o.GUILD_SETTINGS_COMMUNITY_OVERVIEW = "impression_guild_settings_community_overview", o.GUILD_SETTINGS_COMMUNITY_WELCOME = "impression_guild_settings_community_welcome", o.GUILD_SETTINGS_DISCOVERY = "impression_guild_settings_discovery", o.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE = "impression_guild_settings_discovery_landing_page", o.GUILD_SETTINGS_EMOJI = "impression_guild_settings_emoji", o.GUILD_SETTINGS_ENABLE_COMMUNITY = "impression_guild_settings_enable_community", o.GUILD_SETTINGS_INTEGRATION = "impression_guild_settings_integration", o.GUILD_SETTINGS_INVITES = "impression_guild_settings_invites", o.GUILD_SETTINGS_LANDING = "impression_guild_settings_landing", o.GUILD_SETTINGS_MEMBER_VERIFICATION = "impression_guild_settings_member_verification", o.GUILD_SETTINGS_MEMBERS = "impression_guild_settings_members", o.GUILD_SETTINGS_MODERATION = "impression_guild_settings_moderation", o.GUILD_SETTINGS_OVERVIEW = "impression_guild_settings_overview", o.GUILD_SETTINGS_PARTNER = "impression_guild_settings_partner", o.GUILD_SETTINGS_ROLES = "impression_guild_settings_roles", o.GUILD_SETTINGS_SAFETY = "impression_guild_settings_safety", o.GUILD_SETTINGS_SECURITY = "impression_guild_settings_security", o.GUILD_SETTINGS_SOUNDBOARD = "impression_guild_settings_soundboard", o.GUILD_SETTINGS_STICKERS = "impression_guild_settings_stickers", o.GUILD_SETTINGS_TEMPLATE = "impression_guild_settings_template", o.GUILD_SETTINGS_VANITY_URL = "impression_guild_settings_vanity_url", o.GUILD_SETTINGS_WEBHOOKS = "impression_guild_settings_webhooks", o.GUILD_SETTINGS_WIDGET = "impression_guild_settings_widget", o.GUILD_SHOP_EMBED = "impression_guild_shop_embed", o.GUILD_SHOP_PAGE = "impression_guild_shop_page", o.GUILD_SHOP_UPSELL = "impression_guild_shop_upsell", o.GUILD_TRANSFER_OWNERSHIP = "impression_guild_transfer_ownership", o.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE = "impression_guild_transfer_ownership_confirm_email_code", o.GUILD_TRANSFER_OWNERSHIP_CONFIRM_SMS_CODE = "impression_guild_transfer_ownership_confirm_sms_code", o.HOTSPOT = "impression_hotspot", o.HUB_CREATE_GUILD_CUSTOMIZE = "impression_hub_create_guild_customize", o.HUB_CREATE_GUILD_TEMPLATE = "impression_hub_create_guild_template", o.HUB_EMAIL_SIGNUP = "impression_hub_email_signup", o.HUB_EMAIL_VERIFICATION_PAGE = "impression_hub_email_verification_page", o.HUB_EXISTING_GUILD_CHOOSE = "impression_hub_existing_guild_choose", o.HUB_EXISTING_GUILD_CUSTOMIZE = "impression_hub_existing_guild_customize", o.HUB_WAITLIST_SIGNUP = "impression_hub_waitlist_signup", o.INVITE_ACCEPT = "impression_invite_accept", o.LOCALIZED_PRICING_UPSELL_VIEWED = "impression_localized_pricing_upsell_viewed", o.MULTI_ACCOUNT_SWITCH_LANDING = "impression_multi_account_switch_landing", o.NEW_USER_INTENT_START = "impression_new_user_intent_start", o.NOTIFICATION_CENTER_LANDING = "impression_notification_center_landing", o.POMELO_LANDING = "impression_pomelo_landing", o.PREMIUM_GUILD_SUBSCRIPTION_MARKETING_PAGE = "impression_premium_guild_subscription_marketing_page", o.PREMIUM_MARKETING_SURFACE = "impression_premium_marketing_surface", o.PUSH_NOTIFICATION_PREPROMPT = "impression_push_notification_preprompt", o.PUSH_NOTIFICATION_REACTIVATION_PROMPT = "impression_push_notification_reactivation_prompt", o.REQUEST_REVIEW_MODAL = "impression_request_review_modal", o.ROLE_CREATE_ADD_MEMBERS = "impression_role_create_add_members", o.ROLE_CREATE_DISPLAY = "impression_role_create_display", o.ROLE_CREATE_PERMISSIONS = "impression_role_create_permissions", o.ROLE_SUBSCRIPTION_EMOJI_UPSELL = "impression_role_subscription_emoji_upsell", o.ROLE_SUBSCRIPTION_INITIAL_SETUP_MODAL_LANDING = "impression_role_subscription_initial_setup_modal_landing", o.ROLE_SUBSCRIPTION_INITIAL_SETUP_MODAL_TIER_STEP = "impression_role_subscription_initial_setup_modal_tier_step", o.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR = "impression_role_subscription_listing_template_selector", o.ROLE_SUBSCRIPTION_LISTING_UPSELL_ERROR_PAGE = "impression_role_subscription_listing_upsell_error_page", o.SHELF_ACTIVITY_DETAILS = "impression_shelf_activity_details", o.SNOWSGIVING = "impression_snowsgiving", o.SOUNDBOARD_POPOUT = "impression_soundboard_popout", o.STAGE_DISCOVERY = "impression_stage_discovery", o.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL = "impression_user_account_email_change_enter_email", o.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE = "impression_user_account_email_change_send_code", o.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE = "impression_user_account_email_change_verify_code", o.USER_ACCOUNT_EMAIL_RESEND_VERIFICATION_EMAIL = "impression_user_account_email_resend_verification_email", o.USER_ACCOUNT_PASSWORD_VERIFY = "impression_user_account_password_verify", o.USER_ACTION_REQUIRED = "impression_user_action_required", o.USER_ADD_PHONE = "impression_user_add_phone", o.USER_AGE_GATE = "impression_user_age_gate", o.USER_AGE_GATE_UNDERAGE = "impression_user_age_gate_underage", o.USER_CLYDE_AI_CONSENT_MODAL = "impression_user_clyde_ai_consent_modal", o.USER_LOGIN = "impression_user_login", o.USER_PASSWORDLESS_CODE_ENTRY = "impression_user_passwordless_code_entry", o.USER_PASSWORDLESS_INTRO = "impression_user_passwordless_intro", o.USER_REGISTER_ACCOUNT_INFORMATION = "impression_user_register_account_information", o.USER_REGISTER_IDENTITY = "impression_user_register_identity", o.USER_REGISTRATION = "impression_user_registration", o.USER_SETTINGS_CONNECTIONS = "impression_user_settings_connections", o.USER_VERIFICATION_MODAL = "impression_user_verification_modal", o.USER_VERIFY_PASSWORD = "impression_user_verify_password", o.USER_VERIFY_PHONE = "impression_user_verify_phone", o.USER_WELCOME = "impression_user_welcome", o.VIEW_PANEL_DEVTOOLS = "impression_view_panel_devtools", (s = r || (r = {})).APPLE_JWT_TOKEN_CREATE = "network_action_apple_jwt_token_create", s.AUTH_SESSIONS_LOGGED_OUT = "network_action_auth_sessions_logged_out", s.AUTHORIZE_IP = "network_action_authorize_ip", s.AUTHORIZE_PAYMENT = "network_action_authorize_payment", s.BUG_REPORT_SUBMIT = "network_action_bug_report_submit", s.CHANNEL_CREATE = "network_action_channel_create", s.DIRECTORY_GUILD_ENTRY_CREATE = "network_action_directory_guild_entry_create", s.DIRECTORY_GUILD_ENTRY_DELETE = "network_action_directory_guild_entry_delete", s.EMAIL_SETTINGS_FETCH = "network_action_email_settings_fetch", s.EMAIL_SETTINGS_UPDATE = "network_action_email_settings_update", s.EMBEDDED_ACTIVITIES_FETCH_SHELF = "network_action_embedded_activities_fetch_shelf", s.EMBEDDED_ACTIVITIES_LAUNCH = "network_action_embedded_activities_launch", s.FORGOT_PASSWORD = "network_action_forgot_password", s.GUILD_CREATE = "network_action_guild_create", s.GUILD_TRANSFER_OWNERSHIP = "network_action_guild_transfer_ownership", s.GUILD_TRANSFER_OWNERSHIP_SEND_CODE = "network_action_guild_transfer_ownership_send_code", s.HUB_EMAIL_VERIFY = "network_action_hub_email_verify", s.HUB_EMAIL_VERIFY_SEND = "network_action_hub_email_verify_send", s.HUB_WAITLIST_SIGNUP = "network_action_hub_waitlist_signup", s.INVITE_RESOLVE = "network_action_invite_resolve", s.INVITE_REVOKE = "network_action_invite_revoke", s.LOGIN_REQUEST_SMS_TOKEN = "network_action_login_request_sms_token", s.NCMEC_REPORT_CLOSE = "network_action_ncmec_report_close", s.NCMEC_REPORTABLE_CONTENT_CREATE = "network_action_ncmec_reportable_content_create", s.NOTIFICATION_CENTER_ITEM_DELETE = "network_action_notification_center_item_delete", s.NOTIFICATION_CENTER_PAGE_FETCH = "network_action_notification_center_page_fetch", s.POMELO_ATTEMPT = "network_action_pomelo_attempt", s.POMELO_CREATE = "network_action_pomelo_create", s.STREAM_NOTIFY = "network_action_stream_notify", s.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE = "network_action_user_account_email_change_send_code", s.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE = "network_action_user_account_email_change_verify_code", s.USER_BULK_RELATIONSHIPS_UPDATE = "network_action_user_bulk_relationships_update", s.USER_CLYDE_AI_CONSENT_UPDATED = "network_action_user_clyde_ai_consent_updated", s.USER_COMMUNICATION_DISABLED_UPDATE = "network_action_user_communication_disabled_update", s.USER_CONNECTIONS_UPDATE = "network_action_user_connections_update", s.USER_CONTACTS_SYNC = "network_action_user_contacts_sync", s.USER_LOGIN = "network_action_user_login", s.USER_LOGIN_MFA = "network_action_user_login_mfa", s.USER_LOGIN_MFA_SMS = "network_action_user_login_mfa_sms", s.USER_LOGOUT = "network_action_user_logout", s.USER_PASSWORDLESS_INFO_FETCH = "network_action_user_passwordless_info_fetch", s.USER_PASSWORDLESS_LOGIN_CODE = "network_action_user_passwordless_login_code", s.USER_REGISTER = "network_action_user_register", s.USER_REGISTER_DEVICE_TOKEN = "network_action_user_register_device_token", s.USER_REGISTER_PHONE = "network_action_user_register_phone", s.USER_RESET_PASSWORD = "network_action_user_reset_password", s.USER_SETTINGS_UPDATE = "network_action_user_settings_update", s.USER_SURVEY_FETCH = "network_action_user_survey_fetch", s.USER_UNREGISTER_DEVICE_TOKEN = "network_action_user_unregister_device_token", s.USER_VERIFY = "network_action_user_verify", s.USER_VERIFY_PHONE = "network_action_user_verify_phone", s.USER_VERIFY_RESEND = "network_action_user_verify_resend"
        },
        375492: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = (e, t) => function(n, i, r) {
                return new Promise(o => {
                    var s;
                    e.dispatch({
                        type: t,
                        event: n,
                        properties: i,
                        flush: null !== (s = null == r ? void 0 : r.flush) && void 0 !== s && s,
                        fingerprint: null == r ? void 0 : r.fingerprint,
                        resolve: o
                    })
                })
            }
        },
        615582: function(e, t, n) {
            "use strict";
            let i, r, o;
            n.r(t), n.d(t, {
                AnalyticsActionHandlers: function() {
                    return I
                },
                analyticsTrackingStoreMaker: function() {
                    return g
                }
            }), n("704744");
            var s, a = n("391679"),
                l = n("446674"),
                _ = n("872717"),
                u = n("166745"),
                d = n("976255");
            let c = 1500,
                S = null !== (s = window.requestIdleCallback) && void 0 !== s ? s : e => setImmediate(() => e()),
                E = new u.default,
                I = {
                    handleConnectionOpen: () => {},
                    handleConnectionClosed: () => {},
                    handleFingerprint: () => {},
                    handleTrack: () => {}
                },
                f = [],
                g = e => {
                    let {
                        dispatcher: t,
                        actionHandler: n,
                        getFingerprint: s,
                        TRACKING_URL: u,
                        drainTimeoutOverride: g,
                        waitFor: T
                    } = e;
                    c = null != g ? g : 1500;

                    function m() {
                        return 0 !== f.length && (null != r ? null != i : null != s())
                    }

                    function A() {
                        null == o && m() && (o = S(p, {
                            timeout: c
                        }))
                    }

                    function p() {
                        if (o = null, !m()) return;
                        let e = f.slice();
                        f = [];
                        let t = N(e);
                        t.then(() => {
                            e.forEach(e => {
                                var t;
                                null === (t = e.resolve) || void 0 === t || t.call(e)
                            })
                        }, t => {
                            f.unshift(...e);
                            let {
                                message: n
                            } = t.body || t;
                            console.warn("[AnalyticsTrackingStore] Track:", n)
                        })
                    }

                    function N(e) {
                        let t = Date.now(),
                            n = e.map(e => ({
                                ...e,
                                properties: {
                                    ...e.properties,
                                    client_send_timestamp: t
                                }
                            }));
                        return _.default.post({
                            url: u,
                            body: {
                                token: i,
                                events: n
                            },
                            retries: 3
                        })
                    }
                    I.handleConnectionOpen = function(e) {
                        let {
                            analyticsToken: t,
                            user: n
                        } = e;
                        return null != t && (i = t), null != n.id && (r = n.id), A(), !1
                    }, I.handleConnectionClosed = function() {
                        return p(), i = null, r = null, !1
                    }, I.handleFingerprint = function() {
                        return p(), !1
                    }, I.handleTrack = function(e) {
                        let {
                            event: t,
                            properties: n,
                            flush: i,
                            fingerprint: o,
                            resolve: l
                        } = e;
                        return (0, d.getSession)().then(e => {
                            let _ = {
                                    type: t,
                                    fingerprint: o,
                                    properties: {
                                        client_track_timestamp: Date.now(),
                                        client_heartbeat_session_id: null == e ? void 0 : e.uuid,
                                        ...n
                                    },
                                    resolve: l
                                },
                                u = function(e) {
                                    if (null != r) return r;
                                    let t = e.fingerprint || s();
                                    return null != t ? (0, a.extractId)(t) : null
                                }(_);
                            null != u && (_.properties.client_uuid = E.generate(u)), f.push(_), f.length > 1e4 && (f = f.slice(-1e4)), i ? p() : A()
                        }), !1
                    };
                    class O extends l.default.Store {
                        initialize() {
                            null != T && this.waitFor(...T)
                        }
                        constructor(...e) {
                            super(...e), this.submitEventsImmediately = N
                        }
                    }
                    return O.displayName = "AnalyticsTrackingStore", new O(t, n)
                }
        },
        759843: function(e, t, n) {
            "use strict";
            let i, r;
            n.r(t), n.d(t, {
                analyticsTrackingStoreMaker: function() {
                    return T.analyticsTrackingStoreMaker
                },
                AnalyticsActionHandlers: function() {
                    return T.AnalyticsActionHandlers
                },
                ImpressionTypes: function() {
                    return m.ImpressionTypes
                },
                ImpressionGroups: function() {
                    return m.ImpressionGroups
                },
                ImpressionNames: function() {
                    return I.ImpressionNames
                },
                NetworkActionNames: function() {
                    return I.NetworkActionNames
                },
                getCampaignParams: function() {
                    return D
                },
                trackMaker: function() {
                    return y
                },
                default: function() {
                    return U
                }
            });
            var o, s = n("714617"),
                a = n.n(s),
                l = n("627445"),
                _ = n.n(l),
                u = n("383536"),
                d = n.n(u),
                c = n("429030"),
                S = n("95410"),
                E = n("444095"),
                I = n("33112"),
                f = n("375492"),
                g = n("612481"),
                T = n("615582"),
                m = n("660516");
            let A = "deviceProperties",
                p = "referralProperties",
                N = {},
                O = {},
                C = window.DiscordNative;
            if (null != C) {
                let e;
                let t = C.remoteApp.getVersion(),
                    n = C.process.platform,
                    r = C.os.release,
                    s = C.os.arch,
                    a = C.os.appArch,
                    l = C.remoteApp.getReleaseChannel(),
                    _ = (0, c.getSystemLocale)();
                switch (n) {
                    case "win32":
                        e = "Windows";
                        break;
                    case "darwin":
                        e = "Mac OS X";
                        break;
                    case "linux":
                        e = "Linux";
                        break;
                    default:
                        e = n
                }
                if (i = {
                        os: e,
                        browser: "Discord Client",
                        release_channel: l || "unknown",
                        client_version: t,
                        os_version: r,
                        os_arch: s,
                        app_arch: a,
                        system_locale: _
                    }, (null === (o = d.name) || void 0 === o ? void 0 : o.toLocaleLowerCase()) === "electron" && (i.browser_user_agent = d.ua || "", i.browser_version = d.version || ""), "linux" === n) {
                    let e = C.crashReporter.getMetadata();
                    i.window_manager = e.wm, i.distro = e.distro
                }
            }
            let v = "utm_source utm_medium utm_campaign utm_content utm_term".split(" ");

            function R(e, t) {
                if (null == e) return "";
                t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
                let n = new RegExp("[\\?&]".concat(t, "=([^&#]*)")),
                    i = n.exec(e);
                return null === i || "string" != typeof i[1] && i[1].length ? "" : decodeURIComponent(i[1]).replace(/\+/g, " ")
            }

            function D(e) {
                let t = {};
                return v.forEach(n => {
                    let i = R(e, n);
                    i.length > 0 && (t[n] = i)
                }), t
            }

            function L() {
                let e = {};
                return e.referrer = document.referrer, e.referring_domain = function() {
                    let e = document.referrer.split("/");
                    return e.length >= 3 ? e[2] : ""
                }(), e = {
                    ...e,
                    ...D(window.location.href),
                    ... function() {
                        let e = {},
                            t = document.referrer,
                            n = function() {
                                let e = document.referrer;
                                if (0 === e.search("https?://(.*)google.([^/?]*)")) return "google";
                                if (0 === e.search("https?://(.*)bing.com")) return "bing";
                                if (0 === e.search("https?://(.*)yahoo.com")) return "yahoo";
                                else if (0 === e.search("https?://(.*)duckduckgo.com")) return "duckduckgo";
                                else return null
                            }(),
                            i = "yahoo" !== n ? "q" : "p";
                        if (null != n) {
                            e.search_engine = n;
                            let r = R(t, i);
                            r.length > 0 && (e.mp_keyword = r)
                        }
                        return e
                    }()
                }
            }

            function P(e) {
                return null != N[e] && N[e] > Date.now()
            }
            if (null == i) try {
                let e, t, n;
                e = S.default.get(A), null == e && (e = function() {
                    let e = {},
                        t = function() {
                            let {
                                userAgent: e
                            } = window.navigator;
                            if (/Windows/i.test(e)) return /Phone/.test(e) ? "Windows Mobile" : "Windows";
                            if (/(iPhone|iPad|iPod)/.test(e)) return "iOS";
                            if (/Android/.test(e)) return "Android";
                            else if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
                            else if (/Mac/i.test(e)) return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? "iOS" : "Mac OS X";
                            else if (/Linux/i.test(e)) return "Linux";
                            else return ""
                        }();
                    return e.os = t, e.browser = function() {
                        let {
                            userAgent: e,
                            vendor: t = ""
                        } = window.navigator, {
                            opera: n
                        } = window;
                        if (n) return /Mini/.test(e) ? "Opera Mini" : "Opera";
                        if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
                        if (/FBIOS/.test(e)) return "Facebook Mobile";
                        else if (/CriOS/.test(e)) return "Chrome iOS";
                        else if (/Apple/.test(t)) return /Mobile/.test(e) || null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? "Mobile Safari" : "Safari";
                        else if (/Android/.test(e)) return /Chrome/.test(e) ? "Android Chrome" : "Android Mobile";
                        else if (/Edge/.test(e)) return "Edge";
                        else if (/Chrome/.test(e)) return "Chrome";
                        else if (/Konqueror/.test(e)) return "Konqueror";
                        else if (/Firefox/.test(e)) return "Firefox";
                        else if (/MSIE|Trident\//.test(e)) return "Internet Explorer";
                        else if (/Gecko/.test(e)) return "Mozilla";
                        else return ""
                    }(), e.device = function() {
                        let {
                            userAgent: e
                        } = window.navigator;
                        if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
                        if (/Windows Phone/i.test(e)) return "Windows Phone";
                        if (/Android/.test(e)) return "Android";
                        else if (/iPhone/.test(e)) return "iPhone";
                        else if (/iPad/.test(e)) return "iPad";
                        else return ""
                    }(), e.system_locale = (0, c.getSystemLocale)(), e
                }(), S.default.set(A, e)), t = S.default.get(p), null == t && (t = L(), S.default.set(p, t)), n = E.default.get(p), null == n && (n = function(e, t) {
                    let n = {};
                    return Object.keys(e).map(i => n["".concat(i).concat(t)] = e[i]), n
                }(L(), "_current"), E.default.set(p, n)), i = {
                    ...e,
                    ... function() {
                        var e, t;
                        let n = {
                            browser_user_agent: window.navigator.userAgent || "",
                            browser_version: d.version || ""
                        };
                        return {
                            ...n,
                            os_version: null !== (t = null == d ? void 0 : null === (e = d.os) || void 0 === e ? void 0 : e.version) && void 0 !== t ? t : ""
                        }
                    }(),
                    ...t,
                    ...n
                }
            } catch (e) {
                i = {}
            }

            function h(e) {
                i = {
                    ...i,
                    ...e
                }, r = (0, g.default)(i)
            }
            h(function() {
                var e, t, n;
                let i = {},
                    r = window.GLOBAL_ENV.RELEASE_CHANNEL;
                r && (i.release_channel = r.split("-")[0]);
                let o = parseInt((n = "242591", "242591"), 10);
                !isNaN(o) && (i.client_build_number = o);
                let s = null == C ? void 0 : null === (e = (t = C.remoteApp).getBuildNumber) || void 0 === e ? void 0 : e.call(t);
                return !isNaN(s) && (i.native_build_number = s), i.client_event_source = function() {
                    try {
                        if (__OVERLAY__) return "OVERLAY"
                    } catch (e) {}
                    return null
                }(), i
            }());
            let y = e => {
                let {
                    analyticEventConfigs: t,
                    dispatcher: i,
                    TRACK_ACTION_NAME: r
                } = e, o = (0, f.default)(i, r);
                return function(e, i) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (null != n.g.isServerRendering && !0 === n.g.isServerRendering) return Promise.resolve();
                    let s = null != i ? i : {},
                        l = t[e];
                    if (null != l) {
                        if ("throttlePeriod" in l) {
                            let t = [e, ...l.throttleKeys(s)].join("_");
                            if (P(t)) return Promise.resolve();
                            if (l.deduplicate) {
                                let e = O[t];
                                if (a(e, s)) return Promise.resolve();
                                O[t] = s
                            }
                            N[t] = Date.now() + l.throttlePeriod
                        } else if ("throttlePercent" in l) {
                            if (Math.random() > l.throttlePercent) return Promise.resolve()
                        } else _(!1, "Unsupported analytics event config: ".concat(l))
                    }
                    return o(e, i, r)
                }
            };
            var U = {
                isThrottled: P,
                encodeProperties: g.default,
                getSuperProperties: () => i,
                getSuperPropertiesBase64: () => r,
                extendSuperProperties: h
            }
        },
        660516: function(e, t, n) {
            "use strict";
            var i, r, o, s;
            n.r(t), n.d(t, {
                ImpressionGroups: function() {
                    return i
                },
                ImpressionTypes: function() {
                    return r
                }
            }), (o = i || (i = {})).CHANNEL_ADD_FLOW = "channel_add_flow", o.CONTACT_SYNC_FLOW = "contact_sync_flow", o.DIRECTORY_GUILD_ADD_FLOW = "directory_guild_add_flow", o.GUILD_ADD_FLOW = "guild_add_flow", o.GUILD_ADD_NUF = "guild_add_nuf", o.USER_VERIFICATION_MODAL_FLOW = "user_verification_modal_flow", o.GUILD_TRANSFER_OWNERSHIP_FLOW = "guild_transfer_ownership_flow", o.ROLE_ADD_FLOW = "role_add_flow", o.USER_ACCOUNT_EMAIL_CHANGE_FLOW = "user_account_email_change_flow", o.USER_LOGIN_FLOW = "user_login_flow", o.USER_REGISTRATION_FLOW = "user_registration_flow", o.ACTIVITY_SHELF_FLOW = "activity_shelf_flow", o.POMELO_FLOW = "pomelo_flow", (s = r || (r = {})).PAGE = "page", s.MODAL = "modal", s.POPOUT = "popout", s.MENU = "menu", s.PANE = "pane", s.VIEW = "view", s.HALFSHEET = "halfsheet"
        },
        612481: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("446825").Buffer;

            function r(e) {
                try {
                    return i.from(JSON.stringify(e)).toString("base64")
                } catch (e) {
                    return null
                }
            }
        },
        391679: function(e, t, n) {
            "use strict";

            function i(e) {
                return e.split(".")[0]
            }

            function r(e) {
                return null == e ? null : i(e)
            }
            n.r(t), n.d(t, {
                extractId: function() {
                    return i
                },
                maybeExtractId: function() {
                    return r
                }
            })
        },
        166745: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("552442"),
                r = n.n(i),
                o = n("446825");

            function s(e) {
                return 0 | e.mod(4294967296).toJSNumber()
            }

            function a(e) {
                return 0 | e.shiftRight(32).toJSNumber()
            }
            class l {
                generate(e) {
                    let t = r(e),
                        n = 0 | this._sequenceNumber++,
                        i = new o.Buffer(24);
                    return i.writeInt32LE(s(t), 0, !0), i.writeInt32LE(a(t), 4, !0), i.writeInt32LE(this._randomPrefix, 8, !0), i.writeInt32LE(s(this._creationTime), 12, !0), i.writeInt32LE(a(this._creationTime), 16, !0), i.writeInt32LE(n, 20, !0), i.toString("base64")
                }
                constructor() {
                    this._randomPrefix = 0 | Math.floor(4294967296 * Math.random()), this._creationTime = r(Date.now()), this._sequenceNumber = 0
                }
            }
        },
        976255: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setSessionExtendingEnabled: function() {
                    return u
                },
                getSession: function() {
                    return d
                },
                timestampOrZero: function() {
                    return S
                }
            });
            var i = n("748820"),
                r = n("95410");
            let o = "LATEST_SESSION_TIMESTAMP",
                s = "LATEST_SESSION_UUID",
                a = "LATEST_SESSION_INITIALIZED_TIMESTAMP",
                l = Promise.resolve(),
                _ = !1;

            function u(e) {
                _ = e
            }

            function d() {
                let e = l.then(async () => {
                    let e = await c();
                    if (null == e || function(e) {
                            let t = 18e5 + e.lastUsed - Date.now();
                            return t <= 0
                        }(e)) {
                        if (!_) return null;
                        let t = {
                            uuid: (0, i.v4)(),
                            initialized: Date.now(),
                            lastUsed: Date.now()
                        };
                        r.default.set(s, t.uuid), r.default.set(a, t.initialized.toString()), r.default.set(o, Date.now().toString()), e = t
                    } else _ && r.default.set(o, Date.now().toString());
                    return e
                });
                return l = e
            }
            async function c() {
                let e = await r.default.getAfterRefresh(s),
                    t = await r.default.getAfterRefresh(a).then(S),
                    n = await r.default.getAfterRefresh(o).then(S);
                return null != e && null != t ? {
                    uuid: e,
                    initialized: t,
                    lastUsed: n
                } : null
            }

            function S(e) {
                return null != e ? Number(e) : 0
            }
        },
        444095: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = n("434596").impl
        },
        434596: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                sessionStorageTest: function() {
                    return o
                },
                impl: function() {
                    return s
                }
            });
            var r = n("419243");
            try {
                i = window.sessionStorage
            } catch (e) {}
            try {
                delete window.sessionStorage
            } catch (e) {}

            function o() {
                let e = "test";
                try {
                    return i.setItem(e, e), i.removeItem(e), !0
                } catch (e) {
                    return !1
                }
            }
            let s = o() ? new class e {
                get(e, t) {
                    let n = i.getItem(e);
                    if (null != n) try {
                        n = JSON.parse(n)
                    } catch (e) {
                        n = t
                    } else n = t;
                    return n
                }
                set(e, t) {
                    i.setItem(e, JSON.stringify(t))
                }
                remove(e) {
                    i.removeItem(e)
                }
                clear() {
                    i.clear()
                }
            } : new r.ObjectStorage
        }
    }
]);
//# sourceMappingURL=b2ea3fb099019c154fef.js.map