(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["19642"], {
        501617: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f9421475665f33dc5794.jpg"
        },
        324241: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4b32630453d18bff5506.png"
        },
        307757: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5d6a5e9d7d77ac29116e.png"
        },
        548520: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1697e65656e69f0dbdbd.png"
        },
        445724: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1aba1e971aefb18a265e.png"
        },
        170382: function(e, t, n) {
            "use strict";
            e.exports = n.p + "529459de1dc4c2424a03.png"
        },
        593285: function(e, t, n) {
            "use strict";
            e.exports = n.p + "edda5bb474d4135b4296.png"
        },
        575603: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c722e74f644b4a758b11.png"
        },
        181815: function(e, t, n) {
            "use strict";
            e.exports = n.p + "71ceda6839bdcb3deff6.png"
        },
        521089: function(e, t, n) {
            "use strict";
            e.exports = n.p + "68f4ea933bd6e83f5d5a.png"
        },
        366942: function(e, t, n) {
            "use strict";
            e.exports = n.p + "118ab41237408c505a1b.png"
        },
        125707: function(e, t, n) {
            "use strict";
            e.exports = n.p + "641edf794e368d5e8180.png"
        },
        785744: function(e, t, n) {
            "use strict";
            e.exports = n.p + "17cfee7f5b1fe33ae18d.png"
        },
        297384: function(e, t, n) {
            "use strict";
            e.exports = n.p + "77db8e6b075e88104713.png"
        },
        573220: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4e42f7235fc2b50c0d85.png"
        },
        265284: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7b3659653253c3f9fcbd.png"
        },
        320436: function(e, t, n) {
            "use strict";
            e.exports = n.p + "2a71729f81632051029f.svg"
        },
        363577: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a94c2d78167f553a17f7.png"
        },
        348044: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e4f93ded986b1edf0780.png"
        },
        36409: function(e, t, n) {
            "use strict";
            e.exports = n.p + "07e45cb4391af2b29544.gif"
        },
        697796: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                handoffBegin: function() {
                    return i
                },
                handoffEnd: function() {
                    return o
                },
                handoffFromApp: function() {
                    return l
                },
                handoffUnavailable: function() {
                    return u
                },
                handoffSetUser: function() {
                    return a
                }
            });
            var r = n("913144");

            function i() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
                r.default.dispatch({
                    type: "BROWSER_HANDOFF_BEGIN",
                    timeout: e
                })
            }

            function o(e, t) {
                r.default.dispatch({
                    type: "BROWSER_HANDOFF_END",
                    handoffToken: e,
                    fingerprint: t
                })
            }

            function l(e) {
                let {
                    handoffKey: t,
                    handoffToken: n,
                    handoffSource: i,
                    timeout: o = 1e4
                } = e;
                r.default.dispatch({
                    type: "BROWSER_HANDOFF_FROM_APP",
                    handoffKey: t,
                    handoffToken: n,
                    handoffSource: i,
                    timeout: o
                })
            }

            function u() {
                r.default.dispatch({
                    type: "BROWSER_HANDOFF_UNAVAILABLE"
                })
            }

            function a(e) {
                r.default.dispatch({
                    type: "BROWSER_HANDOFF_SET_USER",
                    user: e
                })
            }
        },
        527015: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setDeveloperOptionSettings: function() {
                    return i
                }
            });
            var r = n("913144");

            function i(e) {
                r.default.dispatch({
                    type: "DEVELOPER_OPTIONS_UPDATE_SETTINGS",
                    settings: e
                })
            }
        },
        798609: function(e, t, n) {
            "use strict";
            var r, i, o, l, u, a, s, E, _, c, d, T, A, I, S, f, O, R, N, L, p, C, m, P, h, D, g, U;
            n.r(t), n.d(t, {
                PermissionOverwriteType: function() {
                    return r
                },
                EmbeddedActivitySupportedPlatforms: function() {
                    return i
                },
                EmbeddedActivityLabelTypes: function() {
                    return o
                },
                ApplicationDirectoryEntryCarouselItemType: function() {
                    return l
                },
                ApplicationCommandContextType: function() {
                    return u
                },
                ApplicationCommandOptionType: function() {
                    return a
                },
                ApplicationCommandType: function() {
                    return s
                },
                InteractionTypes: function() {
                    return E
                },
                ComponentType: function() {
                    return _
                },
                ButtonStyle: function() {
                    return c
                },
                TextComponentStyle: function() {
                    return d
                },
                InvoiceDiscountTypes: function() {
                    return T
                },
                PurchaseNotificationType: function() {
                    return A
                },
                AuthenticatorType: function() {
                    return I
                }
            }), (S = r || (r = {}))[S.ROLE = 0] = "ROLE", S[S.MEMBER = 1] = "MEMBER", (f = i || (i = {})).IOS = "ios", f.ANDROID = "android", f.WEB = "web", (O = o || (o = {}))[O.NONE = 0] = "NONE", O[O.NEW = 1] = "NEW", O[O.UPDATED = 2] = "UPDATED", (R = l || (l = {}))[R.MEDIA_PROXY = 1] = "MEDIA_PROXY", R[R.YOUTUBE = 2] = "YOUTUBE", (N = u || (u = {}))[N.GUILD = 0] = "GUILD", N[N.BOT_DM = 1] = "BOT_DM", N[N.PRIVATE_CHANNEL = 2] = "PRIVATE_CHANNEL", (L = a || (a = {}))[L.SUB_COMMAND = 1] = "SUB_COMMAND", L[L.SUB_COMMAND_GROUP = 2] = "SUB_COMMAND_GROUP", L[L.STRING = 3] = "STRING", L[L.INTEGER = 4] = "INTEGER", L[L.BOOLEAN = 5] = "BOOLEAN", L[L.USER = 6] = "USER", L[L.CHANNEL = 7] = "CHANNEL", L[L.ROLE = 8] = "ROLE", L[L.MENTIONABLE = 9] = "MENTIONABLE", L[L.NUMBER = 10] = "NUMBER", L[L.ATTACHMENT = 11] = "ATTACHMENT", (p = s || (s = {}))[p.CHAT = 1] = "CHAT", p[p.USER = 2] = "USER", p[p.MESSAGE = 3] = "MESSAGE", p[p.PRIMARY_ENTRY_POINT = 4] = "PRIMARY_ENTRY_POINT", (C = E || (E = {}))[C.APPLICATION_COMMAND = 2] = "APPLICATION_COMMAND", C[C.MESSAGE_COMPONENT = 3] = "MESSAGE_COMPONENT", C[C.APPLICATION_COMMAND_AUTOCOMPLETE = 4] = "APPLICATION_COMMAND_AUTOCOMPLETE", C[C.MODAL_SUBMIT = 5] = "MODAL_SUBMIT", (m = _ || (_ = {}))[m.ACTION_ROW = 1] = "ACTION_ROW", m[m.BUTTON = 2] = "BUTTON", m[m.STRING_SELECT = 3] = "STRING_SELECT", m[m.INPUT_TEXT = 4] = "INPUT_TEXT", m[m.USER_SELECT = 5] = "USER_SELECT", m[m.ROLE_SELECT = 6] = "ROLE_SELECT", m[m.MENTIONABLE_SELECT = 7] = "MENTIONABLE_SELECT", m[m.CHANNEL_SELECT = 8] = "CHANNEL_SELECT", (P = c || (c = {}))[P.PRIMARY = 1] = "PRIMARY", P[P.SECONDARY = 2] = "SECONDARY", P[P.SUCCESS = 3] = "SUCCESS", P[P.DESTRUCTIVE = 4] = "DESTRUCTIVE", P[P.LINK = 5] = "LINK", (h = d || (d = {}))[h.SMALL = 1] = "SMALL", h[h.PARAGRAPH = 2] = "PARAGRAPH", (D = T || (T = {}))[D.SUBSCRIPTION_PLAN = 1] = "SUBSCRIPTION_PLAN", D[D.ENTITLEMENT = 2] = "ENTITLEMENT", D[D.PREMIUM_LEGACY_UPGRADE_PROMOTION = 3] = "PREMIUM_LEGACY_UPGRADE_PROMOTION", D[D.PREMIUM_TRIAL = 4] = "PREMIUM_TRIAL", (g = A || (A = {}))[g.GUILD_PRODUCT = 0] = "GUILD_PRODUCT", (U = I || (I = {}))[U.WEBAUTHN = 1] = "WEBAUTHN", U[U.TOTP = 2] = "TOTP", U[U.SMS = 3] = "SMS"
        },
        666038: function(e, t, n) {
            "use strict";
            var r;
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007"), r = class e {
                toJS() {
                    return {
                        ...this
                    }
                }
                set(e, t) {
                    return this[e] !== t ? new this.constructor({
                        ...this,
                        [e]: t
                    }) : this
                }
                merge(e) {
                    let t = null;
                    for (let n in e) {
                        if (!e.hasOwnProperty(n)) continue;
                        let r = e[n];
                        this[n] !== r && (null == t && (t = {
                            ...this
                        }), t[n] = e[n])
                    }
                    return null != t ? new this.constructor(t) : this
                }
                update(t, n, r) {
                    null == r && (r = n, n = void 0);
                    let i = this[t];
                    return i instanceof e || (i instanceof Array ? i = [...i] : i instanceof Object && (i = {
                        ...i
                    })), void 0 === i && (i = n), this.set(t, r(i))
                }
            }
        },
        727538: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                AccessibilityFeatureFlags: function() {
                    return r
                }
            }), (i = r || (r = {}))[i.NONE = 0] = "NONE", i[i.SCREENREADER = 1] = "SCREENREADER", i[i.REDUCED_MOTION = 2] = "REDUCED_MOTION", i[i.REDUCED_MOTION_PREFERS_CROSSFADES = 4194304] = "REDUCED_MOTION_PREFERS_CROSSFADES", i[i.REDUCED_TRANSPARENCY = 4] = "REDUCED_TRANSPARENCY", i[i.HIGH_CONTRAST = 8] = "HIGH_CONTRAST", i[i.BOLD_TEXT = 16] = "BOLD_TEXT", i[i.GRAYSCALE = 32] = "GRAYSCALE", i[i.INVERT_COLORS = 64] = "INVERT_COLORS", i[i.PREFERS_COLOR_SCHEME_LIGHT = 128] = "PREFERS_COLOR_SCHEME_LIGHT", i[i.PREFERS_COLOR_SCHEME_DARK = 256] = "PREFERS_COLOR_SCHEME_DARK", i[i.CHAT_FONT_SCALE_INCREASED = 512] = "CHAT_FONT_SCALE_INCREASED", i[i.CHAT_FONT_SCALE_DECREASED = 1024] = "CHAT_FONT_SCALE_DECREASED", i[i.ZOOM_LEVEL_INCREASED = 2048] = "ZOOM_LEVEL_INCREASED", i[i.ZOOM_LEVEL_DECREASED = 4096] = "ZOOM_LEVEL_DECREASED", i[i.MESSAGE_GROUP_SPACING_INCREASED = 8192] = "MESSAGE_GROUP_SPACING_INCREASED", i[i.MESSAGE_GROUP_SPACING_DECREASED = 16384] = "MESSAGE_GROUP_SPACING_DECREASED", i[i.DARK_SIDEBAR = 32768] = "DARK_SIDEBAR", i[i.REDUCED_MOTION_FROM_USER_SETTINGS = 65536] = "REDUCED_MOTION_FROM_USER_SETTINGS", i[i.SATURATION_LEVEL_DECREASED = 131072] = "SATURATION_LEVEL_DECREASED", i[i.FORCED_COLORS = 262144] = "FORCED_COLORS", i[i.FORCED_COLORS_FROM_USER_SETTINGS = 524288] = "FORCED_COLORS_FROM_USER_SETTINGS", i[i.ROLE_STYLE_ADJUSTED = 1048576] = "ROLE_STYLE_ADJUSTED", i[i.SYNC_PROFILE_THEME_WITH_USER_THEME = 2097152] = "SYNC_PROFILE_THEME_WITH_USER_THEME", i[i.CONTRAST_LEVEL_INCREASED = 8388608] = "CONTRAST_LEVEL_INCREASED", i[i.CONTRAST_LEVEL_DECREASED = 16777216] = "CONTRAST_LEVEL_DECREASED"
        },
        954016: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ACTIVITY_INVITE_COVER_IMAGE_SIZE: function() {
                    return h
                },
                validStreamURL: function() {
                    return D
                },
                XBOX_ACTIVITY_APPLICATION_ID: function() {
                    return g
                },
                END_GAME_APPLICATION_ID: function() {
                    return U
                },
                JAM_SPACE_APPLICATION_ID: function() {
                    return G
                },
                GARTIC_PHONE_APPLICATION_ID: function() {
                    return y
                },
                COLOR_TOGETHER_APPLICATION_ID: function() {
                    return F
                },
                SPELL_CAST_APPLICATION_ID: function() {
                    return b
                },
                LAND_IO_APPLICATION_ID: function() {
                    return B
                },
                WATCH_YOUTUBE_PROD_APP_ID: function() {
                    return H
                },
                KWIM_APPLICATION_ID: function() {
                    return V
                },
                BOBBLE_LEAGUE_APPLICATION_ID: function() {
                    return w
                },
                CHECKERS_IN_THE_PARK_APP_ID: function() {
                    return k
                },
                CHESS_IN_THE_PARK_APP_ID: function() {
                    return K
                },
                BLAZIN_8S_APPLICATION_ID: function() {
                    return Y
                },
                POKER_NIGHT_APPLICATION_ID: function() {
                    return W
                },
                BYS_LETTER_APP_ID: function() {
                    return x
                },
                BYS_TWOODLE_APP_ID: function() {
                    return j
                },
                CHEF_SHOWDOWN_APPLICATION_ID: function() {
                    return X
                },
                PUTT_PARTY_APPLICATION_ID: function() {
                    return J
                },
                KRUNKER_STRIKE_APPLICATION_ID: function() {
                    return z
                },
                COLONIST_APPLICATION_ID: function() {
                    return Z
                },
                EMBEDDED_ACTIVITY_SURVEY_URL: function() {
                    return Q
                },
                ImageSizes: function() {
                    return q
                },
                STAFF_RELEASE_PHASES: function() {
                    return $
                },
                ActivityFeedbackReasons: function() {
                    return r
                },
                ActivityIntent: function() {
                    return i
                },
                ActivityPlatform: function() {
                    return o
                },
                ActivityAccessStatus: function() {
                    return u
                },
                EmbeddedActivityUpdateCodes: function() {
                    return a
                },
                OrientationLockState: function() {
                    return s
                },
                ActivityShelfSlides: function() {
                    return E
                },
                ACTIVITY_SHELF_WEB_MODAL_KEY: function() {
                    return ee
                },
                APPLICATIONS_WITH_ALLOWED_POPUPS: function() {
                    return et
                },
                APPLICATIONS_WITH_NO_REFFERER: function() {
                    return en
                },
                WhatsNewSection: function() {
                    return _
                },
                ActivityScreenOrientation: function() {
                    return c
                },
                ActivityLayoutMode: function() {
                    return d
                },
                DEFAULT_EMBEDDED_ACTIVITY_CONFIG: function() {
                    return ei
                },
                SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES: function() {
                    return eo
                }
            }), n("222007");
            var r, i, o, l, u, a, s, E, _, c, d, T, A, I, S, f, O, R, N, L, p, C, m = n("798609"),
                P = n("49111");
            let h = 160,
                D = /^https?:\/\/(?:www\.)?(twitch\.tv\/(.+)|youtube.com\/watch\?v=)/,
                g = "438122941302046720",
                U = "773336526917861400",
                M = "880218832743055411",
                v = "1050941315912835122",
                G = "1070087967294631976",
                y = "1007373802981822582",
                F = "1039835161136746497",
                b = "852509694341283871",
                B = "903769130790969345",
                H = "880218394199220334",
                V = "1078728822972764312",
                w = "947957217959759964",
                k = "832013003968348200",
                K = "832012774040141894",
                Y = "832025144389533716",
                W = "755827207812677713",
                x = "879863686565621790",
                j = "902271654783242291",
                X = "1037680572660727838",
                J = "945737671223947305",
                z = "1011683823555199066",
                Z = "1106787098452832296",
                Q = "https://discord.sjc1.qualtrics.com/jfe/form/SV_6SvWAOxlcSRWiEu",
                q = {
                    SMALL: 64,
                    LARGE: 160
                },
                $ = ["in_development", "activities_team", "employee_release"];
            (T = r || (r = {})).FAILED_LOAD = "FAILED_LOAD", T.LAGGING = "LAGGING", T.CONFUSING = "CONFUSING", T.NOT_FUN = "NOT_FUN", T.OTHER = "OTHER", (A = i || (i = {}))[A.PLAY = 0] = "PLAY", A[A.SPECTATE = 1] = "SPECTATE", (I = o || (o = {})).DESKTOP = "desktop", I.MOBILE = "mobile", (S = l || (l = {})).BETRAYAL_MARKETING_TOOLTIP = "BETRAYAL_MARKETING_TOOLTIP", S.FISHINGTON_MARKETING_TOOLTIP = "FISHINGTON_MARKETING_TOOLTIP", S.POKER_MARKETING_TOOLTIP = "POKER_MARKETING_TOOLTIP", S.YOUTUBE_MARKETING_TOOLTIP = "YOUTUBE_MARKETING_TOOLTIP", (f = u || (u = {}))[f.UNLOCKED = 0] = "UNLOCKED", f[f.NEEDS_NITRO = 1] = "NEEDS_NITRO", (O = a || (a = {}))[O.NO_UPDATE = 0] = "NO_UPDATE", O[O.ACTIVITY_STATE_UPDATE = 1] = "ACTIVITY_STATE_UPDATE", O[O.ACTIVITY_STARTED = 2] = "ACTIVITY_STARTED", O[O.ACTIVITY_ENDED = 3] = "ACTIVITY_ENDED", O[O.USER_JOINED = 4] = "USER_JOINED", O[O.USER_LEFT = 5] = "USER_LEFT", O[O.ACTIVITY_TERMINATED_NO_ELIGIBLE_HOST = 6] = "ACTIVITY_TERMINATED_NO_ELIGIBLE_HOST", (R = s || (s = {}))[R.UNLOCKED = 1] = "UNLOCKED", R[R.PORTRAIT = 2] = "PORTRAIT", R[R.LANDSCAPE = 3] = "LANDSCAPE", (N = E || (E = {}))[N.DIRECTORY = 0] = "DIRECTORY", N[N.SELECT_CHANNEL = 1] = "SELECT_CHANNEL", N[N.DETAIL_PAGE = 2] = "DETAIL_PAGE";
            let ee = "activity-shelf",
                et = new Set(["755600276941176913", M, v, H, "1010174316991762534", z]),
                en = new Set([M, v, H]);
            (L = _ || (_ = {})).DISCORD_TURNS_8 = "DISCORD_TURNS_8", L.GDM_ACTIVITIES = "GDM_ACTIVITIES", L.PUTT_PARTY = "PUTT_PARTY", L.JAMSPACE_OLD = "JAMSPACE", L.JAMSPACE = "JAMSPACE2", L.POKER = "POKER", L.FREE = "FREE", (p = c || (c = {}))[p.PORTRAIT = 0] = "PORTRAIT", p[p.LANDSCAPE = 1] = "LANDSCAPE", (C = d || (d = {}))[C.FOCUSED = 0] = "FOCUSED", C[C.PIP = 1] = "PIP", C[C.GRID = 2] = "GRID";
            let er = {
                    label_type: m.EmbeddedActivityLabelTypes.NONE,
                    release_phase: "",
                    label_until: null
                },
                ei = {
                    application_id: "",
                    requires_age_gate: !1,
                    default_orientation_lock_state: 1,
                    tablet_default_orientation_lock_state: 1,
                    supported_platforms: [m.EmbeddedActivitySupportedPlatforms.WEB],
                    client_platform_config: {
                        [m.EmbeddedActivitySupportedPlatforms.WEB]: er,
                        [m.EmbeddedActivitySupportedPlatforms.IOS]: er,
                        [m.EmbeddedActivitySupportedPlatforms.ANDROID]: er
                    },
                    has_csp_exception: !1,
                    displays_advertisements: !1
                },
                eo = [P.ChannelTypes.GUILD_TEXT, P.ChannelTypes.DM, P.ChannelTypes.GROUP_DM]
        },
        586391: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AGE_GATE_REGISTER_TIMEOUT_MS: function() {
                    return a
                },
                NEW_USER_AGE_GATE_MODAL_KEY: function() {
                    return s
                },
                EXISTING_USER_AGE_GATE_MODAL_KEY: function() {
                    return E
                },
                AgeGateSource: function() {
                    return o
                },
                AgeGateAnalyticAction: function() {
                    return l
                }
            });
            var r, i, o, l, u = n("718517");
            let a = 2 * u.default.Millis.HOUR,
                s = "new-user-age-gate-modal",
                E = "existing-user-age-gate-modal";
            (r = o || (o = {})).AUTH = "Register Age Gate", r.NEW_USER_FLOW = "NUF", r.CLAIM_ACCOUNT = "Claim Age Gate", r.NSFW_CHANNEL = "NSFW Channel", r.NSFW_SERVER = "NSFW Server", r.NSFW_SERVER_INVITE = "NSFW Server Invite", r.NSFW_VOICE_CHANNEL = "NSFW Voice Channel", r.FAMILY_CENTER = "Family Center", r.REGISTER = "Register", r.DEEP_LINK_PROMPT = "Deep Link Prompt", r.UNSPECIFIED = "Unspecified", (i = l || (l = {})).AGE_GATE_OPEN = "AGE_GATE_OPEN", i.AGE_GATE_CLOSE = "AGE_GATE_CLOSE", i.AGE_GATE_SUBMITTED = "AGE_GATE_SUBMITTED", i.AGE_GATE_SUCCESS = "AGE_GATE_SUCCESS", i.AGE_GATE_FAILURE = "AGE_GATE_FAILURE", i.AGE_GATE_UNDERAGE = "AGE_GATE_UNDERAGE", i.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION = "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION", i.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER = "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER"
        },
        939011: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setCurrentImpression: function() {
                    return u
                },
                cleanupImpression: function() {
                    return a
                },
                setDebugTrackedData: function() {
                    return s
                },
                useImpressionStore: function() {
                    return E
                },
                getLocation: function() {
                    return _
                },
                getImpressionStack: function() {
                    return c
                }
            }), n("222007");
            var r = n("308503"),
                i = n("759843");
            let o = Object.freeze({
                    debugTrackedData: null,
                    impressions: []
                }),
                l = (0, r.default)(e => o),
                u = e => {
                    l.setState(t => ({
                        impressions: [...t.impressions, e]
                    }))
                },
                a = e => {
                    l.setState(t => ({
                        impressions: t.impressions.filter(t => t.sequenceId !== e.sequenceId)
                    }))
                },
                s = (e, t) => {
                    l.setState(() => ({
                        debugTrackedData: {
                            name: e,
                            ...t
                        }
                    }))
                },
                E = l;

            function _() {
                let e = {};
                return l.getState().impressions.forEach(t => {
                    t.type === i.ImpressionTypes.PAGE ? e.page = t.name : e.section = t.name
                }), e
            }

            function c() {
                return l.getState().impressions
            }
        },
        234251: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isAnimatedAvatarDecoration: function() {
                    return r
                },
                isEqualAvatarDecoration: function() {
                    return i
                },
                parseAvatarDecorationData: function() {
                    return o
                }
            });
            let r = e => e.split("_", 2).includes("a"),
                i = (e, t) => null == e || null == t ? e === t : e.asset === t.asset && e.skuId === t.skuId,
                o = e => "object" == typeof e && null != e && "asset" in e && "string" == typeof e.asset ? "sku_id" in e && "string" == typeof e.sku_id ? {
                    asset: e.asset,
                    skuId: e.sku_id
                } : "skuId" in e && "string" == typeof e.skuId ? {
                    asset: e.asset,
                    skuId: e.skuId
                } : {
                    asset: e.asset
                } : null
        },
        680894: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CLYDE_AI_USER_ID: function() {
                    return r
                },
                CLYDE_AI_MENTION_COLOR: function() {
                    return i
                }
            });
            let r = "1081004946872352958",
                i = 3000177
        },
        958706: function(e, t, n) {
            "use strict";
            var r, i, o, l, u, a, s, E;
            n.r(t), n.d(t, {
                EMOJI_MAX_SLOTS: function() {
                    return _
                },
                EMOJI_MAX_LENGTH: function() {
                    return c
                },
                EMOJI_RE: function() {
                    return d
                },
                EMOJI_MAX_FILESIZE_KB: function() {
                    return T
                },
                EMOJI_MAX_FILESIZE: function() {
                    return A
                },
                EmojiSprites: function() {
                    return r
                },
                EmojiDisabledReasons: function() {
                    return i
                },
                EmojiIntention: function() {
                    return o
                },
                EmojiInteractionPoint: function() {
                    return l
                },
                isExternalEmojiAllowedForIntention: function() {
                    return S
                }
            }), n("222007");
            let _ = 50,
                c = 32,
                d = /[^a-zA-Z0-9_]/g,
                T = 256,
                A = 1024 * T;
            (u = r || (r = {}))[u.NonDiversityPerRow = 42] = "NonDiversityPerRow", u[u.DiversityPerRow = 10] = "DiversityPerRow", u[u.PickerPerRow = 11] = "PickerPerRow", u[u.PickerCount = 50] = "PickerCount", (a = i || (i = {}))[a.DISALLOW_EXTERNAL = 0] = "DISALLOW_EXTERNAL", a[a.GUILD_SUBSCRIPTION_UNAVAILABLE = 1] = "GUILD_SUBSCRIPTION_UNAVAILABLE", a[a.PREMIUM_LOCKED = 2] = "PREMIUM_LOCKED", a[a.ONLY_GUILD_EMOJIS_ALLOWED = 3] = "ONLY_GUILD_EMOJIS_ALLOWED", a[a.ROLE_SUBSCRIPTION_LOCKED = 4] = "ROLE_SUBSCRIPTION_LOCKED", a[a.ROLE_SUBSCRIPTION_UNAVAILABLE = 5] = "ROLE_SUBSCRIPTION_UNAVAILABLE", (s = o || (o = {}))[s.REACTION = 0] = "REACTION", s[s.STATUS = 1] = "STATUS", s[s.COMMUNITY_CONTENT = 2] = "COMMUNITY_CONTENT", s[s.CHAT = 3] = "CHAT", s[s.GUILD_STICKER_RELATED_EMOJI = 4] = "GUILD_STICKER_RELATED_EMOJI", s[s.GUILD_ROLE_BENEFIT_EMOJI = 5] = "GUILD_ROLE_BENEFIT_EMOJI", s[s.COMMUNITY_CONTENT_ONLY = 6] = "COMMUNITY_CONTENT_ONLY", s[s.SOUNDBOARD = 7] = "SOUNDBOARD", s[s.VOICE_CHANNEL_TOPIC = 8] = "VOICE_CHANNEL_TOPIC", s[s.GIFT = 9] = "GIFT", s[s.AUTO_SUGGESTION = 10] = "AUTO_SUGGESTION";
            let I = new Set([2, 6, 4, 5, 7, 9]);

            function S(e) {
                return !I.has(e)
            }(E = l || (l = {})).EmojiButtonMouseEntered = "EMOJI_BUTTON_MOUSE_ENTERED", E.EmojiButtonFocused = "EMOJI_BUTTON_FOCUSED", E.ChatInputExpressionPressed = "CHAT_INPUT_EXPRESSION_PRESSED", E.ChatInputSuggestionsShown = "CHAT_INPUT_SUGGESTIONS_SHOWN", E.SearchEmojiKeybindPressed = "SEARCH_EMOJI_KEYBIND_PRESSED", E.AutocompleteTyped = "AUTOCOMPLETE_TYPED", E.AutocompleteWrapperShown = "AUTOCOMPLETE_WRAPPER_SHOWN", E.GuildLeaveModalShown = "GUILD_LEAVE_MODAL_SHOWN", E.AddReactionPopoutMouseEntered = "ADD_REACTION_POPOUT_MOUSE_ENTERED", E.AddReactionPopoutFocused = "ADD_REACTION_POPOUT_FOCUSED", E.MessageContextMenuMouseEntered = "MESSAGE_CONTEXT_MENU_MOUSE_ENTERED", E.EmojiPickerActionSheetOpened = "EMOJI_PICKER_ACTION_SHEET_OPENED", E.TrackOpenPopoutUsed = "TRACK_OPEN_POPOUT_USED", E.CustomEmojiTooltipShown = "CUSTOM_EMOJI_TOOLTIP_SHOWN"
        },
        316217: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IGNORE_ANALYTICS_BREADCRUMB_EVENTS: function() {
                    return i
                },
                filterThrottle: function() {
                    return o
                }
            });
            var r = n("49111");
            let i = [r.AnalyticEvents.START_SPEAKING, r.AnalyticEvents.START_LISTENING, r.AnalyticEvents.APP_OPENED, r.AnalyticEvents.NOTIFICATION_CLICKED, r.AnalyticEvents.EXPERIMENT_USER_TRIGGERED, r.AnalyticEvents.EXPERIMENT_DM_TRIGGERED, r.AnalyticEvents.EXPERIMENT_GUILD_TRIGGERED];

            function o(e) {
                let {
                    maxBudgetMinute: t,
                    maxBudgetHour: n
                } = e, r = {
                    minute: {
                        slot: 0,
                        budgetUsed: 0
                    },
                    hour: {
                        slot: 0,
                        budgetUsed: 0
                    }
                };
                return () => {
                    let e = Date.now(),
                        i = Math.round(e / 1e3 / 60),
                        o = Math.round(e / 1e3 / 60 / 60);
                    return r.minute.slot !== i && (r.minute.slot = i, r.minute.budgetUsed = 0), r.hour.slot !== o && (r.hour.slot = o, r.hour.budgetUsed = 0), !!(r.minute.budgetUsed < t) && (r.minute.budgetUsed++, !!(r.hour.budgetUsed < n)) && (r.hour.budgetUsed++, !0)
                }
            }
        },
        560208: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMessagesFromGuildFeedFetch: function() {
                    return l
                },
                getThreadsFromGuildFeedFetch: function() {
                    return u
                }
            }), n("222007"), n("834022"), n("881410"), n("424973");
            var r = n("611221"),
                i = n("449008");

            function o(e) {
                let t = e.children.map(e => o(e));
                return [e.messages.map(e => e.message), ...t].flat()
            }

            function l(e) {
                return e.results.items.flatMap(e => {
                    switch (e.type) {
                        case r.GuildFeedItemTypes.MESSAGE:
                        case r.GuildFeedItemTypes.FORUM_POST:
                            return [e.message];
                        case r.GuildFeedItemTypes.MESSAGE_BUNDLE:
                            return e.messages.map(e => e.message);
                        case r.GuildFeedItemTypes.CONVERSATION:
                            return o(e.root);
                        default:
                            (0, i.assertNever)(e)
                    }
                }).filter(i.isNotNullish)
            }

            function u(e) {
                return e.results.items.flatMap(e => {
                    let t = [];
                    switch (e.type) {
                        case r.GuildFeedItemTypes.MESSAGE:
                            t.push(e.message.thread);
                            break;
                        case r.GuildFeedItemTypes.FORUM_POST:
                            t.push(e.message.thread, e.thread);
                            break;
                        case r.GuildFeedItemTypes.MESSAGE_BUNDLE:
                            t.push(...e.messages.map(e => e.message.thread));
                            break;
                        case r.GuildFeedItemTypes.CONVERSATION:
                            t.push(...o(e.root).map(e => e.thread));
                            break;
                        default:
                            (0, i.assertNever)(e)
                    }
                    return t
                }).filter(i.isNotNullish)
            }
        },
        407063: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getDevicePixelRatio: function() {
                    return E.default
                },
                isImageLoaded: function() {
                    return I
                },
                loadImage: function() {
                    return S
                },
                getBestMediaProxySize: function() {
                    return f
                },
                getImageSrc: function() {
                    return O
                }
            }), n("222007");
            var r = n("917351"),
                i = n.n(r),
                o = n("693566"),
                l = n.n(o),
                u = n("522632"),
                a = n("981980"),
                s = n("35468"),
                E = n("547630"),
                _ = n("49111");
            let c = [16, 20, 22, 24, 28, 32, 40, 44, 48, 56, 60, 64, 80, 96, 100, 128, 160, 240, 256, 300, 320, 480, 512, 600, 640, 1024, 1280, 1536, 2048, 3072, 4096],
                d = new l({
                    max: 1e3
                });

            function T(e) {
                let t = new Image;
                t.onerror = function(e, t) {
                    null == e.backoff && (e.backoff = new a.default);
                    let {
                        backoff: n
                    } = e;
                    return async () => {
                        await s.default.isOnline(), n.fails < 5 ? n.fail(() => {
                            T(e)
                        }) : A(!0, e, t)
                    }
                }(e, t), t.onload = () => {
                    let {
                        backoff: n
                    } = e;
                    null != n && n.succeed(), A(!1, e, t)
                }, t.src = e.url
            }

            function A(e, t, n) {
                let {
                    callbacks: r,
                    url: i
                } = t;
                if (e) d.del(i);
                else {
                    let {
                        width: e,
                        height: r
                    } = n;
                    t = {
                        url: i,
                        loaded: !0,
                        width: e,
                        height: r
                    }, d.set(i, t)
                }
                null != r && r.forEach(n => n(e, t))
            }

            function I(e) {
                let t = d.get(e);
                return null != t && t.loaded
            }

            function S(e, t) {
                let n = d.get(e);
                if (null != n && n.loaded) return null != t && s.default.awaitOnline().then(() => {
                    null != n && null != n.callbacks && n.callbacks.forEach(t => {
                        null != n ? t(!1, n) : t(!0, {
                            url: e,
                            loaded: !0
                        })
                    })
                }), _.NOOP;
                {
                    let r;
                    return null == n && (n = {
                        url: e,
                        loaded: !1
                    }, d.set(e, n), T(n)), null != t && (r = t.bind(null), null == n.callbacks && (n.callbacks = new Set), n.callbacks.add(r)), () => {
                        null != r && null != n && (null != n.callbacks && n.callbacks.delete(r), null != n.backoff && n.backoff.cancel())
                    }
                }
            }

            function f(e) {
                var t;
                return null !== (t = c.find(t => e <= t)) && void 0 !== t ? t : c[c.length - 1]
            }

            function O(e) {
                let {
                    src: t,
                    width: n,
                    height: r,
                    maxWidth: o,
                    maxHeight: l,
                    ratio: a = 1,
                    format: s = null,
                    quality: _ = null
                } = e, c = n, d = r;
                a < 1 && (c = Math.round(n * a), d = Math.round(r * a)), null != o && (c = Math.min(c, o)), null != l && (d = Math.min(d, l));
                let T = (0, E.default)();
                return c *= T,
                    function(e) {
                        let {
                            src: t,
                            sourceWidth: n,
                            sourceHeight: r,
                            targetWidth: o,
                            targetHeight: l,
                            format: a = null,
                            quality: s = null
                        } = e, [E, _] = function(e) {
                            let [t, n] = e.split("?");
                            return [t, u.parse(n)]
                        }(t);
                        return null != a && (_.format = a), null != s && (_.quality = s), (o !== n || l !== r) && (_.width = 0 | o, _.height = 0 | l), !i.isEmpty(_) && (E += "?" + u.stringify(_)), E
                    }({
                        src: t,
                        sourceWidth: n,
                        sourceHeight: r,
                        targetWidth: c,
                        targetHeight: d *= T,
                        format: s,
                        quality: _
                    })
            }
        },
        827032: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addGlobalTag: function() {
                    return i
                },
                getGlobalTagsArray: function() {
                    return o
                }
            });
            let r = {};

            function i(e, t) {
                r[e] = t
            }

            function o() {
                return Object.keys(r).map(e => "".concat(e, ":").concat(r[e]))
            }
        },
        400205: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var r = n("446674"),
                i = n("913144"),
                o = n("517001"),
                l = n("646718");
            let u = "OverridePremiumTypeStore",
                a = {
                    premiumTypeOverride: l.UNSELECTED_PREMIUM_TYPE_OVERRIDE,
                    premiumTypeActual: l.UNSELECTED_PREMIUM_TYPE_OVERRIDE
                };

            function s(e) {
                let {
                    user: t
                } = e;
                a.premiumTypeActual = (0, o.getPremiumTypeFromRawValue)(t.premium_type)
            }
            class E extends r.default.PersistedStore {
                initialize(e) {
                    if (null != e) {
                        a = e;
                        return
                    }
                    a.premiumTypeOverride = l.UNSELECTED_PREMIUM_TYPE_OVERRIDE
                }
                getPremiumTypeOverride() {
                    return a.premiumTypeOverride
                }
                getPremiumTypeActual() {
                    return a.premiumTypeActual
                }
                getState() {
                    return a
                }
                get premiumType() {
                    return a.premiumTypeOverride
                }
            }
            E.displayName = u, E.persistKey = u;
            var _ = new E(i.default, {
                SET_PREMIUM_TYPE_OVERRIDE: function(e) {
                    let {
                        premiumType: t
                    } = e;
                    a.premiumTypeOverride = t
                },
                CURRENT_USER_UPDATE: s,
                CONNECTION_OPEN: s
            })
        },
        646718: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumTypes: function() {
                    return r
                },
                UNSELECTED_PREMIUM_TYPE_OVERRIDE: function() {
                    return k
                },
                PREMIUM_TYPE_OVERRIDE_OPTIONS: function() {
                    return K
                },
                PremiumTypeOrder: function() {
                    return Y
                },
                PREMIUM_SUBSCRIPTION_APPLICATION: function() {
                    return W
                },
                PremiumSubscriptionSKUs: function() {
                    return i
                },
                ACTIVE_PREMIUM_SKUS: function() {
                    return x
                },
                PremiumSubscriptionSKUToPremiumType: function() {
                    return j
                },
                SubscriptionPlans: function() {
                    return o
                },
                PREMIUM_PLANS: function() {
                    return X
                },
                PREMIUM_TIER_2_PLANS: function() {
                    return J
                },
                PREMIUM_GUILD_SUBSCRIPTION_PLANS: function() {
                    return z
                },
                MULTI_MONTH_PLANS: function() {
                    return Z
                },
                PREMIUM_MONTHLY_PLANS: function() {
                    return Q
                },
                PREMIUM_SKU_TO_MONTHLY_PLAN: function() {
                    return q
                },
                PREMIUM_SKU_TO_YEARLY_PLAN: function() {
                    return $
                },
                SubscriptionIntervalTypes: function() {
                    return l
                },
                DiscountUserUsageLimitIntervalTypes: function() {
                    return u
                },
                SubscriptionPlanInfo: function() {
                    return ee
                },
                GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT: function() {
                    return et
                },
                NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: function() {
                    return en
                },
                DEFAULT_MAX_GRACE_PERIOD_DAYS: function() {
                    return er
                },
                PAID_SUBSCRIPTION_MAX_GRACE_PERIOD_DAYS: function() {
                    return ei
                },
                MAX_ACCOUNT_HOLD_DAYS: function() {
                    return eo
                },
                BLACK_FRIDAY_2020_GIFT_CODE_BATCH_ID: function() {
                    return el
                },
                STICKERS_GIFT_CODE_BATCH_ID: function() {
                    return eu
                },
                USER_PREMIUM_SUBSCRIPTION_TRIAL_EXPIRES_APPROACHING_5_DAY_THRESHOLD: function() {
                    return ea
                },
                MAX_PAYMENT_PROCESSING_TIME_DAYS: function() {
                    return es
                },
                PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID: function() {
                    return eE
                },
                PREMIUM_TIER_2_REACTIVATION_TRIAL_ID: function() {
                    return e_
                },
                PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID: function() {
                    return ec
                },
                PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID: function() {
                    return ed
                },
                PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID: function() {
                    return eT
                },
                PREMIUM_TIER_2_AUTH3_TRIAL_ID: function() {
                    return eA
                },
                PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID: function() {
                    return eS
                },
                PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID: function() {
                    return ef
                },
                PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID: function() {
                    return eO
                },
                SubscriptionTrials: function() {
                    return eR
                },
                PremiumUpsellTypes: function() {
                    return a
                },
                PurchasedFlags: function() {
                    return s
                },
                SKU_ID_PURCHASED_FLAGS: function() {
                    return eN
                },
                MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE: function() {
                    return eL
                },
                IncrementalStickerCountsByTier: function() {
                    return ep
                },
                TotalStickerCountsByTier: function() {
                    return eC
                },
                TotalSoundboardSoundCountsByTier: function() {
                    return em
                },
                BoostedGuildFeatures: function() {
                    return eP
                },
                ORDERED_PREMIUM_SUBSCRIPTION_PLANS: function() {
                    return eh
                },
                AnalyticsPremiumFeatureNames: function() {
                    return E
                },
                AnalyticsPremiumFeatureTiers: function() {
                    return _
                },
                DISCOUNTS: function() {
                    return eD
                },
                StreamQualities: function() {
                    return c
                },
                StreamQualitiesToPremiumType: function() {
                    return eg
                },
                PremiumMarketingEntrypoints: function() {
                    return d
                },
                PremiumHeaderThemes: function() {
                    return T
                },
                PremiumGiftStyles: function() {
                    return A
                },
                InboundPromotionErrorCodes: function() {
                    return I
                },
                PromotionFlags: function() {
                    return eU
                },
                PremiumUserLimits: function() {
                    return eM
                },
                BoostingUpsellAction: function() {
                    return O
                },
                ReferralTrialsAnalyticSteps: function() {
                    return R
                },
                LegacyPricingCountries: function() {
                    return ev
                },
                LegacySeasonalGiftStyles: function() {
                    return eG
                },
                SeasonalGiftStyles2023: function() {
                    return ey
                },
                AllSeasonalGiftStyles: function() {
                    return eF
                }
            }), n("222007");
            var r, i, o, l, u, a, s, E, _, c, d, T, A, I, S, f, O, R, N, L, p, C, m, P, h, D, g, U, M, v, G, y, F, b, B, H, V = n("49111"),
                w = n("958706");
            (N = r || (r = {}))[N.TIER_1 = 1] = "TIER_1", N[N.TIER_2 = 2] = "TIER_2", N[N.TIER_0 = 3] = "TIER_0";
            let k = void 0,
                K = [{
                    value: null,
                    label: "Non-Nitro"
                }, {
                    value: 3,
                    label: "Basic"
                }, {
                    value: 1,
                    label: "Classic"
                }, {
                    value: 2,
                    label: "Standard"
                }],
                Y = Object.freeze({
                    3: 0,
                    1: 1,
                    2: 2
                }),
                W = "521842831262875670";
            (L = i || (i = {})).NONE = "628379670982688768", L.TIER_0 = "978380684370378762", L.TIER_1 = "521846918637420545", L.TIER_2 = "521847234246082599", L.GUILD = "590663762298667008", L.LEGACY = "521842865731534868";
            let x = ["628379670982688768", "978380684370378762", "521846918637420545", "521847234246082599", "590663762298667008"],
                j = Object.freeze({
                    "978380684370378762": 3,
                    "521846918637420545": 1,
                    "521847234246082599": 2,
                    "521842865731534868": 2
                });
            (p = o || (o = {})).NONE_MONTH = "628379151761408000", p.NONE_YEAR = "628381571568631808", p.PREMIUM_MONTH_TIER_0 = "978380692553465866", p.PREMIUM_YEAR_TIER_0 = "1024422698568122368", p.PREMIUM_MONTH_TIER_1 = "511651871736201216", p.PREMIUM_YEAR_TIER_1 = "511651876987469824", p.PREMIUM_MONTH_TIER_2 = "511651880837840896", p.PREMIUM_YEAR_TIER_2 = "511651885459963904", p.PREMIUM_MONTH_GUILD = "590665532894740483", p.PREMIUM_YEAR_GUILD = "590665538238152709", p.NONE_3_MONTH = "944265614527037440", p.NONE_6_MONTH = "944265636643602432", p.PREMIUM_3_MONTH_TIER_2 = "642251038925127690", p.PREMIUM_6_MONTH_TIER_2 = "944037208325619722", p.PREMIUM_3_MONTH_GUILD = "944037355453415424", p.PREMIUM_6_MONTH_GUILD = "944037391444738048", p.PREMIUM_MONTH_LEGACY = "511651856145973248", p.PREMIUM_YEAR_LEGACY = "511651860671627264";
            let X = new Set(["978380692553465866", "1024422698568122368", "511651871736201216", "511651876987469824", "511651880837840896", "642251038925127690", "944037208325619722", "511651885459963904", "511651856145973248", "511651860671627264"]),
                J = new Set(["511651880837840896", "642251038925127690", "944037208325619722", "511651885459963904"]),
                z = new Set(["590665532894740483", "944037355453415424", "944037391444738048", "590665538238152709"]),
                Z = new Set(["642251038925127690", "944037208325619722", "944037355453415424", "944037391444738048"]),
                Q = new Set(["978380692553465866", "511651871736201216", "511651880837840896"]),
                q = Object.freeze({
                    "978380684370378762": "978380692553465866",
                    "521846918637420545": "511651871736201216",
                    "521847234246082599": "511651880837840896",
                    "628379670982688768": void 0,
                    "590663762298667008": void 0,
                    "521842865731534868": void 0
                }),
                $ = Object.freeze({
                    "978380684370378762": "1024422698568122368",
                    "521846918637420545": "511651876987469824",
                    "521847234246082599": "511651885459963904",
                    "628379670982688768": void 0,
                    "590663762298667008": void 0,
                    "521842865731534868": void 0
                });
            (C = l || (l = {}))[C.MONTH = 1] = "MONTH", C[C.YEAR = 2] = "YEAR", C[C.DAY = 3] = "DAY", (m = u || (u = {}))[m.DAY = 1] = "DAY", m[m.WEEK = 2] = "WEEK", m[m.MONTH = 3] = "MONTH", m[m.YEAR = 4] = "YEAR";
            let ee = Object.freeze({
                    "628379151761408000": {
                        id: "628379151761408000",
                        name: "None Monthly",
                        skuId: "628379670982688768",
                        interval: 1,
                        intervalCount: 1
                    },
                    "628381571568631808": {
                        id: "628381571568631808",
                        name: "None Yearly",
                        skuId: "628379670982688768",
                        interval: 2,
                        intervalCount: 1
                    },
                    "978380692553465866": {
                        id: "978380692553465866",
                        name: "Nitro Basic Monthly",
                        premiumType: 3,
                        skuId: "978380684370378762",
                        interval: 1,
                        intervalCount: 1
                    },
                    "1024422698568122368": {
                        id: "1024422698568122368",
                        name: "Nitro Basic Yearly",
                        premiumType: 3,
                        skuId: "978380684370378762",
                        interval: 2,
                        intervalCount: 1
                    },
                    "511651871736201216": {
                        id: "511651871736201216",
                        name: "Nitro Classic Monthly",
                        premiumType: 1,
                        skuId: "521846918637420545",
                        interval: 1,
                        intervalCount: 1
                    },
                    "511651876987469824": {
                        id: "511651876987469824",
                        name: "Nitro Classic Yearly",
                        premiumType: 1,
                        skuId: "521846918637420545",
                        interval: 2,
                        intervalCount: 1
                    },
                    "511651880837840896": {
                        id: "511651880837840896",
                        name: "Nitro Monthly",
                        premiumType: 2,
                        skuId: "521847234246082599",
                        interval: 1,
                        intervalCount: 1
                    },
                    "511651885459963904": {
                        id: "511651885459963904",
                        name: "Nitro Yearly",
                        premiumType: 2,
                        skuId: "521847234246082599",
                        interval: 2,
                        intervalCount: 1
                    },
                    "590665532894740483": {
                        id: "590665532894740483",
                        name: "Nitro Server Boost Monthly",
                        skuId: "590663762298667008",
                        interval: 1,
                        intervalCount: 1
                    },
                    "590665538238152709": {
                        id: "590665538238152709",
                        name: "Nitro Server Boost Yearly",
                        skuId: "590663762298667008",
                        interval: 2,
                        intervalCount: 1
                    },
                    "642251038925127690": {
                        id: "642251038925127690",
                        name: "Nitro Three Month",
                        premiumType: 2,
                        skuId: "521847234246082599",
                        interval: 1,
                        intervalCount: 3
                    },
                    "944037208325619722": {
                        id: "944037208325619722",
                        name: "Nitro Six Month",
                        premiumType: 2,
                        skuId: "521847234246082599",
                        interval: 1,
                        intervalCount: 6
                    },
                    "944037355453415424": {
                        id: "944037355453415424",
                        name: "Nitro Server Boost Three Month",
                        skuId: "590663762298667008",
                        interval: 1,
                        intervalCount: 3
                    },
                    "944037391444738048": {
                        id: "944037391444738048",
                        name: "Nitro Server Boost Six Month",
                        skuId: "590663762298667008",
                        interval: 1,
                        intervalCount: 6
                    },
                    "944265614527037440": {
                        id: "944265614527037440",
                        name: "None Three Month",
                        skuId: "628379670982688768",
                        interval: 1,
                        intervalCount: 3
                    },
                    "944265636643602432": {
                        id: "944265636643602432",
                        name: "None Six Month",
                        skuId: "628379670982688768",
                        interval: 1,
                        intervalCount: 6
                    },
                    "511651856145973248": {
                        id: "511651856145973248",
                        name: "Nitro Monthly (Legacy)",
                        premiumType: 2,
                        skuId: "521842865731534868",
                        interval: 1,
                        intervalCount: 1
                    },
                    "511651860671627264": {
                        id: "511651860671627264",
                        name: "Nitro Classic Yearly (Legacy)",
                        premiumType: 2,
                        skuId: "521842865731534868",
                        interval: 2,
                        intervalCount: 1
                    }
                }),
                et = 30,
                en = 2,
                er = 3,
                ei = 7,
                eo = 30,
                el = "775514091874680832",
                eu = "845031178288889946",
                ea = 432e6,
                es = 14,
                eE = "520373071933079552",
                e_ = "902329034132684800",
                ec = "983601860436819968",
                ed = "983601860436819969",
                eT = "984244797441048577",
                eA = "1004850445463584768",
                eI = "1073698058383917056",
                eS = "1070132870233980928",
                ef = "1150904354090532864",
                eO = "1199128659810582528",
                eR = Object.freeze({
                    [eE]: {
                        id: eE,
                        skus: ["521847234246082599"]
                    },
                    [e_]: {
                        id: e_,
                        skus: ["521847234246082599"]
                    },
                    [ec]: {
                        id: ec,
                        skus: ["521847234246082599"]
                    },
                    [ed]: {
                        id: ed,
                        skus: ["521847234246082599"]
                    },
                    [eT]: {
                        id: eT,
                        skus: ["521847234246082599"]
                    },
                    [eA]: {
                        id: eA,
                        skus: ["521847234246082599"]
                    },
                    [eS]: {
                        id: eS,
                        skus: ["978380684370378762"]
                    },
                    [eI]: {
                        id: eI,
                        skus: ["521847234246082599"]
                    }
                });
            (P = a || (a = {})).ANIMATED_GUILD_BANNER_TOOLTIP = "animated_guild_banner_tooltip", P.EMOJI_PICKER_SEARCH = "emoji_picker_search", P.EMOJI_PICKER_EMOJI_CLICKED = "emoji_picker_emoji_clicked", P.EMOJI_PICKER_STICKER_CLICKED = "emoji_picker_sticker_clicked", P.EMOJI_PICKER_REACTION_EMOJI_CLICKED = "emoji_picker_reaction_emoji_clicked", P.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED = "emoji_picker_super_reaction_emoji_clicked", P.EMOJI_PICKER_STATUS_EMOJI_CLICKED = "emoji_picker_status_emoji_clicked", P.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED = "emoji_picker_top_server_emoji_clicked", P.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED = "emoji_picker_newly_added_emoji_clicked", P.EMOJI_AUTOSUGGEST_CLICKED = "emoji_autosuggest_clicked", P.EMOJI_AUTOCOMPLETE_INLINE = "emoji_autocomplete_inline", P.EMOJI_AUTOCOMPLETE_MODAL = "emoji_autocomplete_modal", P.EMOJI_IN_MESSAGE_HOVER = "emoji_in_message_hover", P.EMOJI_IN_REACTION_HOVER = "emoji_in_reaction_hover", P.EMOJI_IN_BURST_REACTION_HOVER = "emoji_in_burst_reaction_hover", P.EMOJI_IN_BURST_REACTION_HOVER_UPSELL = "emoji_in_burst_reaction_hover_upsell", P.EMOJI_PICKER_FLOATING_UPSELL = "emoji_picker_floating_upsell", P.STICKER_IN_MESSAGE_HOVER = "sticker_in_message_hover", P.EMPTY_STICKER_PICKER_UPSELL = "empty_sticker_picker_upsell", P.STREAM_QUALITY_INDICATOR = "stream_quality_indicator", P.GIFT_STREAM_QUALITY_INDICATOR = "gift_stream_quality_indicator", P.STREAM_QUALITY_UPSELL = "stream_quality_upsell", P.MESSAGE_LENGTH_UPSELL = "message_length_upsell", P.MESSAGE_LENGTH_IN_EDITOR_UPSELL = "message_length_in_editor_upsell", P.CUSTOM_PROFILE_UPSELL = "custom profiles upsell modal", P.CUSTOM_PROFILE_TRY_OUT_UPSELL = "try out custom profile in settings upsell", P.VIDEO_BACKGROUNDS_MODAL = "video backgrounds modal", P.VIDEO_BACKGROUNDS_INLINE = "video backgrounds inline", P.GUILD_CAP_INLINE_SERVER_LIST = "guild_cap_inline_server_list", P.GUILD_PREMIUM_UPSELL_MODAL = "premium guild premium upsell modal", P.GUILD_CAP_INLINE_INVITE_MODAL = "guild_cap_inline_invite_modal", P.GUILD_CAP_MODAL_UPSELL = "guild_cap_modal_upsell", P.PREMIUM_GUILD_IDENTITY_MODAL = "premium guild identity upsell alert", P.CUSTOM_PROFILE_SETTINGS_BANNER_BUTTON = "custom profiles settings banner upsell", P.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL = "custom profiles profile banner social upsell", P.STICKER_PICKER_UPSELL = "sticker_picker_upsell", P.ANIMATED_AVATAR_PREVIEW_GIF_MODAL = "animated avatar preview gif modal", P.PREMIUM_PROGRESS_BAR = "premium_progress_bar_tooltip", P.INVITE_SPLASH_UPSELL = "premium_invite_splash_upsell", P.ANIMATED_USER_AVATAR_MODAL = "animated user avatar upsell modal", P.UPLOAD_ERROR_UPSELL = "upload error upsell", P.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE = "premium guild member profile upsell inline", P.CONCURRENT_ACTIVITIES = "Concurrent Activities", P.PREMIUM_UNCANCEL_WINBACK_MODAL_VIEWED = "premium_uncancel_winback_modal_viewed", P.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET = "animated_video_background_new_preset", P.LOW_PRICE_EXPERIMENT_TOOLTIP = "low_price_experiment_tooltip", P.PREMIUM_PROFILE_BADGE_UPSELL = "premium_profile_badge_upsell", P.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "emoji", P.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "profile customization", P.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "hd streaming", P.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "larger file uploads", P.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "bogo", P.VOICE_CHANNEL_EFFECTS_UPSELL = "voice_channel_effects_upsell", P.VOICE_CHANNEL_EFFECTS_BAR_EMOJI_UPSELL = "Voice Channel Effect Bar Emoji Upsell", P.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED = "voice_channel_effects_toggle_clicked", P.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED = "voice_channel_effects_toggle_clicked_expanded", P.PROFILE_THEME_UPSELL_MODAL = "profile_theme_upsell_modal", P.PROFILE_EFFECTS_INLINE_SETTINGS = "profile_effects_inline_settings", P.PROFILE_EFFECTS_INLINE_SETTINGS_MOBILE = "profile_effects_inline_settings_mobile", P.HIGH_VIDEO_QUALITY_UPSELL = "high_video_quality_upsell", P.PREMIUM_PROFILE_TRY_IT_OUT = "premium_profile_try_it_out", P.BURST_REACTION_RAIL_UPSELL = "burst_reaction_rail_upsell", P.BURST_REACTION_UPSELL = "burst_reaction_upsell", P.BURST_REACTION_QUICK_ACTION_UPSELL = "burst_reaction_quick_action_upsell", P.BURST_REACTION_CONTEXT_MENU_UPSELL = "burst_reaction_context_menu_upsell", P.PREMIUM_CLIENT_THEME_TRY_IT_OUT = "premium_client_theme_try_it_out", P.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL = "premium_client_theme_settings_upsell", P.VIDEO_STAGE_LIMIT = "video_stage_limit", P.SOUND_PICKER_SOUND_CLICKED = "sound_picker_sound_clicked", P.APP_ICON_UPSELL = "app_icon_upsell", P.COLLECTIBLES_SHOP = "collectibles_shop", P.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles_profile_settings_upsell", P.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles_premium_marketing_page_upsell", P.CLIPS_GUILD_SIDEBAR_COACHMARK_PREMIUM_EARLY_ACCESS_UPSELL = "clips_guild_sidebar_coachmark_premium_early_access_upsell", P.CLIPS_GO_LIVE_PREMIUM_EARLY_ACCESS_ROADBLOCK_UPSELL = "clips_go_live_premium_early_access_roadblock_upsell", (h = s || (s = {}))[h.PREMIUM_TIER_1 = 1] = "PREMIUM_TIER_1", h[h.PREMIUM_TIER_2 = 2] = "PREMIUM_TIER_2", h[h.GUILD_BOOST = 4] = "GUILD_BOOST", h[h.PREMIUM_TIER_0 = 8] = "PREMIUM_TIER_0";
            let eN = Object.freeze({
                    "978380684370378762": 8,
                    "521846918637420545": 1,
                    "521847234246082599": 2,
                    "590663762298667008": 4
                }),
                eL = 52428800,
                ep = {
                    [V.BoostedGuildTiers.NONE]: 5,
                    [V.BoostedGuildTiers.TIER_1]: 10,
                    [V.BoostedGuildTiers.TIER_2]: 15,
                    [V.BoostedGuildTiers.TIER_3]: 30
                },
                eC = {
                    [V.BoostedGuildTiers.NONE]: ep[V.BoostedGuildTiers.NONE],
                    [V.BoostedGuildTiers.TIER_1]: ep[V.BoostedGuildTiers.NONE] + ep[V.BoostedGuildTiers.TIER_1],
                    [V.BoostedGuildTiers.TIER_2]: ep[V.BoostedGuildTiers.NONE] + ep[V.BoostedGuildTiers.TIER_1] + ep[V.BoostedGuildTiers.TIER_2],
                    [V.BoostedGuildTiers.TIER_3]: ep[V.BoostedGuildTiers.NONE] + ep[V.BoostedGuildTiers.TIER_1] + ep[V.BoostedGuildTiers.TIER_2] + ep[V.BoostedGuildTiers.TIER_3]
                },
                em = {
                    [V.BoostedGuildTiers.NONE]: 8,
                    [V.BoostedGuildTiers.TIER_1]: 24,
                    [V.BoostedGuildTiers.TIER_2]: 36,
                    [V.BoostedGuildTiers.TIER_3]: 48
                },
                eP = Object.freeze({
                    [V.BoostedGuildTiers.NONE]: {
                        features: [],
                        limits: {
                            emoji: w.EMOJI_MAX_SLOTS,
                            bitrate: V.BITRATE_MAX,
                            fileSize: V.MAX_ATTACHMENT_SIZE,
                            screenShareQualityFramerate: 30,
                            screenShareQualityResolution: "720p",
                            soundboardSounds: em[V.BoostedGuildTiers.NONE],
                            maxConcurrentActivities: 2,
                            stickers: eC[V.BoostedGuildTiers.NONE],
                            stageVideoUsers: V.MAX_STAGE_VIDEO_USER_LIMIT_TIER01
                        }
                    },
                    [V.BoostedGuildTiers.TIER_1]: {
                        features: [V.GuildFeatures.INVITE_SPLASH, V.GuildFeatures.ANIMATED_ICON],
                        limits: {
                            emoji: 100,
                            bitrate: 128e3,
                            fileSize: V.MAX_ATTACHMENT_SIZE,
                            screenShareQualityFramerate: 60,
                            screenShareQualityResolution: "720p",
                            soundboardSounds: em[V.BoostedGuildTiers.TIER_1],
                            maxConcurrentActivities: 3,
                            stickers: eC[V.BoostedGuildTiers.TIER_1],
                            stageVideoUsers: V.MAX_STAGE_VIDEO_USER_LIMIT_TIER01
                        }
                    },
                    [V.BoostedGuildTiers.TIER_2]: {
                        features: [V.GuildFeatures.INVITE_SPLASH, V.GuildFeatures.ANIMATED_ICON, V.GuildFeatures.BANNER, V.GuildFeatures.ROLE_ICONS],
                        limits: {
                            emoji: 150,
                            bitrate: 256e3,
                            fileSize: 52428800,
                            screenShareQualityFramerate: 60,
                            screenShareQualityResolution: "1080p",
                            soundboardSounds: em[V.BoostedGuildTiers.TIER_2],
                            maxConcurrentActivities: 5,
                            stickers: eC[V.BoostedGuildTiers.TIER_2],
                            stageVideoUsers: V.MAX_STAGE_VIDEO_USER_LIMIT_TIER2
                        }
                    },
                    [V.BoostedGuildTiers.TIER_3]: {
                        features: [V.GuildFeatures.INVITE_SPLASH, V.GuildFeatures.ANIMATED_ICON, V.GuildFeatures.BANNER, V.GuildFeatures.ANIMATED_BANNER, V.GuildFeatures.VANITY_URL, V.GuildFeatures.ROLE_ICONS],
                        limits: {
                            emoji: 250,
                            bitrate: 384e3,
                            fileSize: 104857600,
                            screenShareQualityFramerate: 60,
                            screenShareQualityResolution: "1080p",
                            soundboardSounds: em[V.BoostedGuildTiers.TIER_3],
                            maxConcurrentActivities: Number.MAX_SAFE_INTEGER,
                            stickers: eC[V.BoostedGuildTiers.TIER_3],
                            stageVideoUsers: V.MAX_STAGE_VIDEO_USER_LIMIT_TIER3
                        }
                    }
                }),
                eh = ["978380692553465866", "1024422698568122368", "511651871736201216", "511651876987469824", "511651880837840896", "642251038925127690", "944037208325619722", "511651885459963904"];
            (D = E || (E = {})).SOUNDBOARD_PLAY = "soundboard play", D.PROFILE_THEME_COLOR = "profile_theme_color", D.PROFILE_BANNER = "profile_banner", D.ANIMATED_AVATAR = "animated_avatar", D.AVATAR_DECORATION = "avatar_decoration", D.CLIENT_THEME = "client_theme", D.SHARED_CANVAS = "shared_canvas", D.PROFILE_EFFECT = "profile_effect", (g = _ || (_ = {})).FREE = "free", g.PREMIUM_STANDARD = "premium-standard";
            let eD = {
                "1024422698568122368": 16,
                "511651876987469824": 16,
                "511651885459963904": 16,
                "944037208325619722": 8,
                "642251038925127690": 5
            };
            (U = c || (c = {})).HIGH_STREAMING_QUALITY = "high_streaming_quality", U.MID_STREAMING_QUALITY = "mid_streaming_quality";
            let eg = Object.freeze({
                high_streaming_quality: 2,
                mid_streaming_quality: 1
            });
            (M = d || (d = {}))[M.UserSettings = 0] = "UserSettings", M[M.ApplicationStoreHome = 1] = "ApplicationStoreHome", (v = T || (T = {}))[v.DEFAULT = 0] = "DEFAULT", v[v.WINTER = 1] = "WINTER", (G = A || (A = {}))[G.SNOWGLOBE = 1] = "SNOWGLOBE", G[G.BOX = 2] = "BOX", G[G.CUP = 3] = "CUP", G[G.STANDARD_BOX = 4] = "STANDARD_BOX", G[G.CAKE = 5] = "CAKE", G[G.CHEST = 6] = "CHEST", G[G.COFFEE = 7] = "COFFEE", G[G.SEASONAL_STANDARD_BOX = 8] = "SEASONAL_STANDARD_BOX", G[G.SEASONAL_CAKE = 9] = "SEASONAL_CAKE", G[G.SEASONAL_CHEST = 10] = "SEASONAL_CHEST", G[G.SEASONAL_COFFEE = 11] = "SEASONAL_COFFEE", (y = I || (I = {})).USER_NOT_VERIFIED = "user_not_verified", y.NO_CODE_BODY = "no_code_body", y.NO_PROMOTION = "no_promotion", y.CODE_CLAIMED = "code_claimed", y.EXISTING_SUBSCRIBER = "existing_subscriber", y.PREVIOUS_SUBSCRIBER = "previous_subscriber", y.BLOCKED_PAYMENT = "blocked_payment";
            let eU = Object.freeze({
                    IS_BLOCKED_IOS: 32,
                    IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS: 64,
                    SUPPRESS_NOTIFICATION: 128
                }),
                eM = Object.freeze({
                    3: {
                        fileSize: eL
                    },
                    1: {
                        fileSize: 52428800
                    },
                    2: {
                        fileSize: 524288e3
                    }
                });
            (F = S || (S = {})).EXPLORE_ALL_PERKS_CLICKED = "explore_all_perks_clicked", F.HELPER_COLLAPSED = "helper_collapsed", F.HELPER_UNCOLLAPSED = "helper_uncollapsed", F.UNLOCK_EMOJI_CLICKED = "unlock_emoji_clicked", F.CUSTOM_PROFILES_CLICKED = "custom_profiles_clicked", F.SERVER_BOOSTS_CLICKED = "server_boosts_clicked", F.HELPER_DISMISSED = "premium_feature_helper_dismissed", F.HELPER_RENDERED = "premium_feature_helper_rendered", (b = f || (f = {})).EMOJI_TUTORIAL_STARTED = "emoji_tutorial_started", b.EMOJI_INTRO_VIEWED = "emoji_intro_viewed", b.EMOJI_PROMPT_VIEWED = "emoji_prompt_viewed", b.CUSTOM_PROFILE_TUTORIAL_STARTED = "custom_profile_tutorial_started", b.CUSTOM_PROFILE_AVATAR_INTRO_VIEWED = "custom_profile_avatar_intro_viewed", b.CUSTOM_PROFILE_AVATAR_DECORATIONS_VIEWED = "custom_profile_avatar_decorations_viewed", b.CUSTOM_PROFILE_BANNER_INTRO_VIEWED = "custom_profile_banner_intro_viewed", b.CUSTOM_PROFILE_THEME_INTRO_VIEWED = "custom_profile_theme_intro_viewed", b.SERVER_PROFILE_INTRO_VIEWED = "server_profile_intro_viewed", b.SERVER_BOOST_TUTORIAL_STARTED = "server_boost_tutorial_started", b.BOOST_INTRO_VIEWED = "boost_intro_viewed", b.BOOST_PROMPT_VIEWED = "boost_prompt_viewed", (B = O || (O = {})).BOOST = "boost", B.DISMISS = "dismiss", (H = R || (R = {})).BADGE_TOOLTIP_VIEWED = "share_nitro_bagde_tooltip_viewed", H.BADGE_CLICKED = "share_nitro_badge_clicked", H.FLOW_STARTED = "share_nitro_flow_started", H.FLOW_COMPLETED = "share_nitro_flow_completed";
            let ev = new Set(["PL", "TR"]),
                eG = [1, 2, 3],
                ey = [8, 9, 11, 10],
                eF = ey.concat(eG)
        },
        946028: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                createPrivateChannelIntegration: function() {
                    return i
                }
            });
            var r = n("653047");

            function i(e) {
                return {
                    ...e,
                    application: r.default.createFromServer(e.application)
                }
            }
        },
        877275: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                },
                ChannelBackNavigationSources: function() {
                    return l
                }
            }), n("222007");
            var r, i = n("648564");
            (r || (r = {})).INVITE_ACCEPT = "invite_accept";
            var o = r;
            let l = new Set([i.OpenThreadAnalyticsLocations.EMBED, i.OpenThreadAnalyticsLocations.FORUM])
        },
        393414: function(e, t, n) {
            "use strict";
            let r, i, o;
            n.r(t), n.d(t, {
                transitionTo: function() {
                    return S
                },
                transitionToGuild: function() {
                    return f
                },
                currentRouteHasBackNavigation: function() {
                    return O
                },
                replaceWith: function() {
                    return R
                },
                getHistory: function() {
                    return N
                },
                getLastRouteChangeSource: function() {
                    return L
                },
                getLastRouteChangeSourceLocationStack: function() {
                    return p
                },
                isValidFingerprintRoute: function() {
                    return C
                },
                getFingerprintLocation: function() {
                    return m
                },
                hasNavigated: function() {
                    return P
                },
                back: function() {
                    return h
                },
                forward: function() {
                    return D
                }
            }), n("424973"), n("781738");
            var l = n("294094"),
                u = n("605250"),
                a = n("659500"),
                s = n("877275"),
                E = n("49111");
            let _ = new u.default("Routing/Utils"),
                c = [E.RelativeMarketingURLs.DEVELOPER_PORTAL];
            r = __OVERLAY__ ? (0, l.createMemoryHistory)() : (0, l.createBrowserHistory)();
            let d = !1,
                T = r.listen((e, t) => {
                    "REPLACE" !== t && (d = !0, T())
                });

            function A() {
                return !a.ComponentDispatch.hasSubscribers(E.ComponentActions.MODAL_CLOSE) && (n("144747").default.close(), !0)
            }

            function I(e, t) {
                return !!("string" == typeof e && c.some(t => e.startsWith(t))) && (_.log("".concat(t, " - route to external path ").concat(e)), window.dispatchEvent(new Event("beforeunload")), window.location[t](e), !0)
            }

            function S(e, t, n, l) {
                !I(e, "assign") && (_.log("transitionTo - Transitioning to ".concat(e)), null != n && (null == t ? t = {
                    source: n
                } : t.source = n), null == t ? r.push(e) : r.push({
                    pathname: e,
                    ...t
                }), i = n, o = l)
            }

            function f(e, t, n, r, i) {
                _.log("transitionToGuild - Transitioning to ".concat(JSON.stringify({
                    guildId: e,
                    channelId: t,
                    messageId: n
                }))), S(E.Routes.CHANNEL(e, t, n), null != i ? i : null, r)
            }

            function O() {
                return null != i && s.ChannelBackNavigationSources.has(i)
            }

            function R(e, t, n) {
                !I(e, "replace") && (_.log("Replacing route with ".concat(e)), "string" == typeof e ? r.replace(e, t) : r.replace(e), i = n)
            }

            function N() {
                return r
            }

            function L() {
                return i
            }

            function p() {
                return o
            }

            function C(e) {
                if (null == e) {
                    var t;
                    e = null !== (t = r.location.pathname) && void 0 !== t ? t : ""
                }
                return !e.startsWith(E.Routes.HANDOFF) && !0
            }

            function m(e) {
                if (null == e) {
                    var t;
                    e = null !== (t = r.location.pathname) && void 0 !== t ? t : ""
                }
                if (e.startsWith(E.Routes.LOGIN)) return E.PageAnalyticsLocations.LOGIN;
                if (e.startsWith(E.Routes.REGISTER)) return E.PageAnalyticsLocations.REGISTER;
                if (e.startsWith(E.Routes.INVITE(""))) return E.PageAnalyticsLocations.INVITE;
                else if (e.startsWith(E.Routes.VERIFY)) return E.PageAnalyticsLocations.VERIFY;
                else if (e.startsWith(E.Routes.DISABLE_EMAIL_NOTIFICATIONS)) return E.PageAnalyticsLocations.DISABLE_EMAIL_NOTIFICATIONS;
                else if (e.startsWith(E.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS)) return E.PageAnalyticsLocations.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS;
                else if (e.startsWith(E.Routes.REJECT_IP)) return E.PageAnalyticsLocations.REJECT_IP;
                else if (e.startsWith(E.Routes.REJECT_MFA)) return E.PageAnalyticsLocations.REJECT_MFA;
                else if (e.startsWith(E.Routes.AUTHORIZE_IP)) return E.PageAnalyticsLocations.AUTHORIZE_IP;
                else if (e.startsWith(E.Routes.AUTHORIZE_PAYMENT)) return E.PageAnalyticsLocations.AUTHORIZE_PAYMENT;
                else if (e.startsWith(E.Routes.RESET)) return E.PageAnalyticsLocations.RESET;
                else if (e.startsWith(E.Routes.REPORT)) return E.PageAnalyticsLocations.REPORT;
                else if (e.startsWith(E.Routes.REPORT_SECOND_LOOK)) return E.PageAnalyticsLocations.REPORT_SECOND_LOOK;
                return e
            }

            function P() {
                return d
            }

            function h() {
                A() && (i = null, r.goBack())
            }

            function D() {
                A() && (i = null, r.goForward())
            }
        },
        648564: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEFAULT_AUTO_ARCHIVE_DURATION: function() {
                    return s
                },
                MAX_THREAD_MESSAGE_COUNT_OLD: function() {
                    return E
                },
                MAX_THREAD_MESSAGE_COUNT: function() {
                    return _
                },
                MAX_THREAD_MEMBERS_PREVIEW: function() {
                    return c
                },
                MAX_THREAD_UNREAD_MESSAGE_COUNT: function() {
                    return d
                },
                ThreadMemberFlags: function() {
                    return T
                },
                OpenThreadAnalyticsLocations: function() {
                    return r
                },
                getThreadNotificationOptions: function() {
                    return A
                },
                ThreadSortOrderReadableForAnalytics: function() {
                    return i
                },
                FORUM_POST_CREATION_UPLOAD_ERRORS: function() {
                    return I
                },
                FORUM_POST_CREATION_AUTOMOD_ERRORS: function() {
                    return S
                }
            }), n("222007");
            var r, i, o, l, u = n("49111"),
                a = n("782340");
            let s = 4320,
                E = 50,
                _ = 1e5,
                c = 50,
                d = 25,
                T = {
                    HAS_INTERACTED: 1,
                    ALL_MESSAGES: 2,
                    ONLY_MENTIONS: 4,
                    NO_MESSAGES: 8
                };

            function A() {
                return [{
                    setting: T.ALL_MESSAGES,
                    label: a.default.Messages.FORM_LABEL_ALL_MESSAGES
                }, {
                    setting: T.ONLY_MENTIONS,
                    label: a.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                }, {
                    setting: T.NO_MESSAGES,
                    label: a.default.Messages.FORM_LABEL_NOTHING
                }]
            }(o = r || (r = {})).EMBED = "Embed", o.BROWSER = "Thread Browser", o.POPOUT = "Active Threads Popout", o.CHANNEL_LIST = "Channel List", o.GUILD_ACTIVE_THREADS_MODAL = "Guild Active Threads Modal", o.INBOX = "Inbox", o.FORUM = "Forum", o.VOICE_AUTO_OPEN = "Voice Auto Open", (l = i || (i = {})).LATEST_ACTIVITY = "Last Message", l.CREATION_DATE = "Creation";
            let I = new Set([u.AbortCodes.TOO_MANY_ATTACHMENTS, u.AbortCodes.EXPLICIT_CONTENT, u.AbortCodes.ENTITY_TOO_LARGE]),
                S = new Set([u.AbortCodes.AUTOMOD_MESSAGE_BLOCKED, u.AbortCodes.AUTOMOD_TITLE_BLOCKED])
        },
        963903: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                Environments: function() {
                    return r
                }
            }), (i = r || (r = {})).STAGING = "staging", i.DEVELOPMENT = "development", i.PRODUCTION = "production", i.TEST = "test"
        },
        517001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                validatePremiumType: function() {
                    return a
                },
                isStaffEnv: function() {
                    return E
                },
                isStaffEnvRawData: function() {
                    return _
                },
                getPremiumTypeFromRawValue: function() {
                    return c
                }
            }), n("702976");
            var r = n("627445"),
                i = n.n(r),
                o = n("568734"),
                l = n("963903"),
                u = n("49111");

            function a(e, t, n) {
                !e && void 0 !== t && i(n === t, "Premium type should not change for non-staff users")
            }

            function s(e) {
                return "production" === l.Environments.TEST && null != e ? e : "production"
            }

            function E(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    n = s(t) === l.Environments.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === l.Environments.STAGING;
                if (n) return !0;
                if (null == e) return !1;
                let r = e.isStaff() || e.isStaffPersonal();
                return r
            }

            function _(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    n = s(t) === l.Environments.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === l.Environments.STAGING;
                return !!n || null != e && (!!(null != e.flags && (0, o.hasFlag)(e.flags, u.UserFlags.STAFF)) || null != e.personal_connection_id)
            }

            function c(e) {
                return void 0 !== e ? e === u.PREMIUM_TYPE_NONE ? null : e : e
            }
        },
        705873: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("702976");
            var r = n("49111");

            function i(e) {
                var t;
                return ((null !== (t = e.flags) && void 0 !== t ? t : 0) & r.UserFlags.STAFF) === r.UserFlags.STAFF || (null == e ? void 0 : e.personal_connection_id) != null
            }
        },
        653047: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                createExecutable: function() {
                    return _
                },
                default: function() {
                    return r
                }
            }), n("702976");
            var r, i = n("266088"),
                o = n("666038"),
                l = n("315102"),
                u = n("331082"),
                a = n("766274"),
                s = n("954016");
            let E = {
                [s.POKER_NIGHT_APPLICATION_ID]: 7,
                [s.END_GAME_APPLICATION_ID]: 12
            };

            function _(e) {
                let t = {
                    os: e.os,
                    name: e.name
                };
                return null != e.arguments && (t.arguments = e.arguments), null != e.is_launcher && (t.isLauncher = e.is_launcher), t
            }
            r = class e extends o.default {
                static createFromServer(t) {
                    var n, r;
                    return new e({
                        ...t,
                        thirdPartySkus: t.third_party_skus,
                        overlayWarn: t.overlay_warn,
                        overlayCompatibilityHook: t.overlay_compatibility_hook,
                        overlayMethods: null !== (n = t.overlay_methods) && void 0 !== n ? n : i.ApplicationOverlayMethodFlags.DEFAULT,
                        hook: t.hook,
                        primarySkuId: t.primary_sku_id,
                        storeListingSkuId: t.store_listing_sku_id,
                        guildId: t.guild_id,
                        guild: t.guild,
                        publishers: null != t.publishers ? t.publishers.map(u.default.createFromServer) : [],
                        developers: null != t.developers ? t.developers.map(u.default.createFromServer) : [],
                        eulaId: t.eula_id,
                        slug: t.slug,
                        coverImage: t.cover_image,
                        bot: null != t.bot ? new a.default(t.bot) : null,
                        flags: null !== (r = t.flags) && void 0 !== r ? r : 0,
                        maxParticipants: t.max_participants,
                        tags: t.tags,
                        embeddedActivityConfig: t.embedded_activity_config,
                        roleConnectionsVerificationUrl: t.role_connections_verification_url
                    })
                }
                getIconURL(e) {
                    return null != this.icon ? l.default.getGameAssetURL({
                        id: this.id,
                        hash: this.icon,
                        size: e
                    }) : null
                }
                getIconSource(e) {
                    return null != this.icon ? l.default.getGameAssetSource({
                        id: this.id,
                        hash: this.icon,
                        size: e
                    }) : null
                }
                getSplashURL(e) {
                    return null != this.splash ? l.default.getGameAssetURL({
                        id: this.id,
                        hash: this.splash,
                        size: e,
                        keepAspectRatio: !0
                    }) : null
                }
                getCoverImageURL(e) {
                    return null != this.coverImage ? l.default.getApplicationIconURL({
                        id: this.id,
                        icon: this.coverImage,
                        size: e
                    }) : null
                }
                getMaxParticipants() {
                    var e, t;
                    return null !== (t = null !== (e = this.maxParticipants) && void 0 !== e ? e : E[this.id]) && void 0 !== t ? t : 0
                }
                get destinationSkuId() {
                    return null != this.storeListingSkuId ? this.storeListingSkuId : this.primarySkuId
                }
                get supportsOutOfProcessOverlay() {
                    return e.supportsOutOfProcessOverlay(this.overlayMethods)
                }
                static supportsOutOfProcessOverlay(e) {
                    let t = i.ApplicationOverlayMethodFlags.OUT_OF_PROCESS;
                    return null != e && (e & t) === t
                }
                constructor(e) {
                    var t, n, r, o;
                    super(), this.id = e.id, this.name = e.name, this.icon = e.icon || null, this.splash = e.splash || null, this.overlay = e.overlay || !1, this.overlayWarn = e.overlayWarn || !1, this.overlayCompatibilityHook = e.overlayCompatibilityHook || !1, this.overlayMethods = null !== (t = e.overlayMethods) && void 0 !== t ? t : i.ApplicationOverlayMethodFlags.DEFAULT, this.hook = null === (n = e.hook) || void 0 === n || n, this.aliases = e.aliases || [], this.publishers = e.publishers || [], this.developers = e.developers || [], this.primarySkuId = e.primarySkuId, this.storeListingSkuId = e.storeListingSkuId, this.guildId = e.guildId || null, this.guild = e.guild || null, this.thirdPartySkus = e.thirdPartySkus || [], this.executables = (e.executables || []).map(_), this.hashes = e.hashes || [], this.description = e.description || null, this.eulaId = e.eulaId || null, this.slug = e.slug || null, this.bot = e.bot || null, this.coverImage = e.coverImage || null, this.flags = null !== (r = e.flags) && void 0 !== r ? r : 0, this.tags = null !== (o = e.tags) && void 0 !== o ? o : [], this.maxParticipants = e.maxParticipants, this.embeddedActivityConfig = e.embedded_activity_config, this.type = e.type, this.team = e.team, this.roleConnectionsVerificationUrl = e.roleConnectionsVerificationUrl
                }
            }
        },
        331082: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r, i = n("666038");
            r = class e extends i.default {
                static createFromServer(t) {
                    return new e(t)
                }
                constructor(e) {
                    super(), this.id = e.id, this.name = e.name
                }
            }
        },
        766274: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("70102"), n("702976");
            var r, i = n("316693"),
                o = n("666038"),
                l = n("234251"),
                u = n("315102"),
                a = n("299039"),
                s = n("49111"),
                E = n("680894"),
                _ = n("646718");
            new(r = class extends o.default {
                get createdAt() {
                    return new Date(a.default.extractTimestamp(this.id))
                }
                hasVerifiedEmailOrPhone() {
                    return !0 === this.verified || null != this.phone
                }
                getAvatarURL(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = null != e ? this.guildMemberAvatars[e] : void 0;
                    return null != r && null != e ? u.default.getGuildMemberAvatarURLSimple({
                        guildId: e,
                        avatar: r,
                        userId: this.id,
                        canAnimate: n
                    }) : u.default.getUserAvatarURL(this, n, t)
                }
                addGuildAvatarHash(e, t) {
                    if (this.guildMemberAvatars[e] === t) return this;
                    let n = {
                        ...this.guildMemberAvatars,
                        [e]: t
                    };
                    return this.merge({
                        guildMemberAvatars: n
                    })
                }
                removeGuildAvatarHash(e) {
                    if (void 0 === this.guildMemberAvatars[e]) return this;
                    let t = {
                        ...this.guildMemberAvatars,
                        [e]: void 0
                    };
                    return this.merge({
                        guildMemberAvatars: t
                    })
                }
                getAvatarSource(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    if (null != e) {
                        let r = this.guildMemberAvatars[e];
                        if (null != r) return u.default.getAnimatableSourceWithFallback(t, t => u.default.makeSource(u.default.getGuildMemberAvatarURLSimple({
                            guildId: e,
                            avatar: r,
                            userId: this.id,
                            canAnimate: t,
                            size: n
                        })))
                    }
                    return u.default.getAnimatableSourceWithFallback(t, e => u.default.getUserAvatarSource({
                        id: this.id,
                        avatar: this.avatar,
                        discriminator: this.discriminator,
                        bot: this.bot
                    }, e, n))
                }
                isClaimed() {
                    return null != this.email || null != this.phone
                }
                isPhoneVerified() {
                    return null != this.phone
                }
                toString() {
                    return "" !== this.username ? this.username : "???"
                }
                get tag() {
                    return "".concat(this.username, "#").concat("".concat(this.discriminator).padStart(4, "0"))
                }
                hasPurchasedFlag(e) {
                    return (this.purchasedFlags & e) === e
                }
                hasPremiumUsageFlag(e) {
                    return (this.premiumUsageFlags & e) === e
                }
                hasHadSKU(e) {
                    let t = _.SKU_ID_PURCHASED_FLAGS[e];
                    return null != t && this.hasPurchasedFlag(t)
                }
                hasHadPremium() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = this.hasHadSKU(_.PremiumSubscriptionSKUs.TIER_0),
                        n = this.hasHadSKU(_.PremiumSubscriptionSKUs.TIER_1),
                        r = this.hasHadSKU(_.PremiumSubscriptionSKUs.TIER_2);
                    if (e === _.PremiumTypes.TIER_1) return n;
                    if (e === _.PremiumTypes.TIER_2) return r;
                    if (e === _.PremiumTypes.TIER_0) return t;
                    else return t || n || r
                }
                hasFreePremium() {
                    return this.isStaff() || this.hasFlag(s.UserFlags.PARTNER) || this.isStaffPersonal()
                }
                hasUrgentMessages() {
                    return this.hasFlag(s.UserFlags.HAS_UNREAD_URGENT_MESSAGES)
                }
                isNonUserBot() {
                    return this.isSystemUser() || this.bot && this.discriminator === s.NON_USER_BOT_DISCRIMINATOR
                }
                isLocalBot() {
                    return this.bot && this.id === s.LOCAL_BOT_ID
                }
                isVerifiedBot() {
                    return this.isSystemUser() || this.isLocalBot() || this.hasFlag(s.UserFlags.VERIFIED_BOT)
                }
                isSystemUser() {
                    return !0 === this.system
                }
                isClyde() {
                    return this.id === E.CLYDE_AI_USER_ID
                }
                hasAvatarForGuild(e) {
                    return null != e && null != this.guildMemberAvatars[e]
                }
                isPomelo() {
                    return "0" === this.discriminator
                }
                get avatarDecoration() {
                    return this.avatarDecorationData
                }
                set avatarDecoration(e) {
                    this.avatarDecorationData = (0, l.parseAvatarDecorationData)(e)
                }
                constructor(e) {
                    var t, n, r, o, l, u, a, E, _, c, d, T, A, I, S, f, O, R, N, L, p, C, m, P, h, D, g, U, M;
                    super(), this.hasFlag = e => !1, this.isStaff = () => !1, this.isStaffPersonal = () => !1, this.hasAnyStaffLevel = () => !1;
                    let v = null !== (n = e.premium_type) && void 0 !== n ? n : e.premiumType;
                    this.id = e.id, this.username = null !== (r = e.username) && void 0 !== r ? r : "", this.discriminator = null !== (o = e.discriminator) && void 0 !== o ? o : s.NON_USER_BOT_DISCRIMINATOR, this.avatar = null !== (l = e.avatar) && void 0 !== l ? l : null, this.avatarDecoration = null !== (u = e.avatar_decoration_data) && void 0 !== u ? u : e.avatarDecorationData, this.email = null !== (a = e.email) && void 0 !== a ? a : null, this.verified = null !== (E = e.verified) && void 0 !== E && E, this.bot = null !== (_ = e.bot) && void 0 !== _ && _, this.system = null !== (c = e.system) && void 0 !== c && c, this.mfaEnabled = null !== (T = null !== (d = e.mfa_enabled) && void 0 !== d ? d : e.mfaEnabled) && void 0 !== T && T, this.mobile = null !== (A = e.mobile) && void 0 !== A && A, this.desktop = null !== (I = e.desktop) && void 0 !== I && I, this.premiumType = v === s.PREMIUM_TYPE_NONE ? null : v, this.flags = null !== (S = e.flags) && void 0 !== S ? S : 0, this.publicFlags = null !== (O = null !== (f = e.public_flags) && void 0 !== f ? f : e.publicFlags) && void 0 !== O ? O : 0, this.purchasedFlags = null !== (N = null !== (R = e.purchased_flags) && void 0 !== R ? R : e.purchasedFlags) && void 0 !== N ? N : 0, this.premiumUsageFlags = null !== (p = null !== (L = e.premium_usage_flags) && void 0 !== L ? L : e.premiumUsageFlags) && void 0 !== p ? p : 0, this.phone = null !== (C = e.phone) && void 0 !== C ? C : null, this.nsfwAllowed = null !== (m = e.nsfw_allowed) && void 0 !== m ? m : e.nsfwAllowed, this.guildMemberAvatars = null !== (P = e.guildMemberAvatars) && void 0 !== P ? P : {}, this.hasBouncedEmail = null !== (D = null !== (h = e.has_bounced_email) && void 0 !== h ? h : e.hasBouncedEmail) && void 0 !== D && D, this.personalConnectionId = null !== (U = null !== (g = e.personal_connection_id) && void 0 !== g ? g : e.personalConnectionId) && void 0 !== U ? U : null, this.globalName = null !== (M = e.global_name) && void 0 !== M ? M : e.globalName, Object.defineProperties(this, {
                        hasFlag: {
                            writable: !1,
                            configurable: !1,
                            value: e => {
                                if (e <= 1073741824) return ((this.flags | this.publicFlags) & e) === e;
                                let t = i.default.deserialize(this.flags),
                                    n = i.default.deserialize(this.publicFlags),
                                    r = i.default.deserialize(e);
                                return i.default.has(i.default.combine(t, n), r)
                            }
                        },
                        isStaff: {
                            writable: !1,
                            configurable: !1,
                            value: () => this.hasFlag(s.UserFlags.STAFF)
                        },
                        isStaffPersonal: {
                            writable: !1,
                            configurable: !1,
                            value: () => !this.hasFlag(s.UserFlags.STAFF) && null != this.personalConnectionId
                        },
                        hasAnyStaffLevel: {
                            writable: !1,
                            configurable: !1,
                            value: () => this.hasFlag(s.UserFlags.STAFF) || this.hasFlag(s.UserFlags.COLLABORATOR) || this.hasFlag(s.UserFlags.RESTRICTED_COLLABORATOR)
                        }
                    }), (null === (t = this.globalName) || void 0 === t ? void 0 : t.length) === 0 && (this.globalName = null)
                }
            })({
                id: "0"
            })
        },
        271938: function(e, t, n) {
            "use strict";
            let r, i;
            n.r(t), n.d(t, {
                default: function() {
                    return eE
                }
            }), n("222007"), n("860677"), n("424973"), n("70102");
            var o = n("627445"),
                l = n.n(o),
                u = n("171718"),
                a = n("391679"),
                s = n("446674"),
                E = n("872717"),
                _ = n("95410"),
                c = n("913144"),
                d = n("798609"),
                T = n("821316"),
                A = n("605250"),
                I = n("393414"),
                S = n("705873"),
                f = n("599110"),
                O = n("831588"),
                R = n("286235"),
                N = n("72177"),
                L = n("455079"),
                p = n("49111"),
                C = n("586391");
            let m = n("551042").hasModalOpen,
                P = new A.default("AuthenticationStore"),
                h = "fingerprint",
                D = "email_cache",
                g = "user_id_cache",
                U = null,
                M = null,
                v = null,
                G = null,
                y = null,
                F = null,
                b = null,
                B = p.LoginStates.NONE,
                H = p.RegistrationStates.NONE,
                V = !1,
                w = [],
                k = "",
                K = !1,
                Y = null,
                W = !1,
                x = !1,
                j = "",
                X = !1,
                J = !1,
                z = {},
                Z = {},
                Q = null,
                q = null,
                $ = null,
                ee = null;

            function et(e) {
                let t = null != u.default.getToken(),
                    n = null != _.default.get(p.TOKEN_KEY);
                P.verbose(e, {
                    tokenManagerHasToken: t,
                    storageHasToken: n
                })
            }

            function en() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                if (y = _.default.get(h), null != q) return q;
                let t = null != y ? y : u.default.getToken();
                !(!(0, I.isValidFingerprintRoute)() || !e && null != t || N.default.isHandoffAvailable()) && er({
                    withGuildExperiments: !0
                })
            }

            function er(e) {
                let {
                    withGuildExperiments: t
                } = e, n = {}, r = f.default.getSuperPropertiesBase64();
                null != r && (n["X-Super-Properties"] = r), null != y && (n["X-Fingerprint"] = y), q = E.default.get({
                    url: p.Endpoints.EXPERIMENTS,
                    query: {
                        with_guild_experiments: t
                    },
                    headers: n,
                    context: {
                        location: (0, I.getFingerprintLocation)()
                    },
                    retries: 3,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        fingerprint: t,
                        assignments: n,
                        guild_experiments: r
                    } = e.body;
                    t && c.default.dispatch({
                        type: "FINGERPRINT",
                        fingerprint: t
                    }), c.default.dispatch({
                        type: "EXPERIMENTS_FETCH_SUCCESS",
                        fingerprint: t,
                        experiments: n,
                        guildExperiments: r
                    }), q = null
                }, () => {
                    q = null, c.default.dispatch({
                        type: "EXPERIMENTS_FETCH_FAILURE"
                    })
                })
            }

            function ei() {
                F = y, y = null, _.default.remove(h)
            }

            function eo(e, t) {
                et("setAuthToken called."), u.default.setToken(e, t)
            }

            function el() {
                et("removeAuthToken called."), u.default.removeToken()
            }

            function eu() {
                V = !0, ea(), c.default.wait(() => {
                    (0, I.transitionTo)(p.Routes.REGISTER)
                })
            }

            function ea(e) {
                et("handleLogout called."), el(), ei(), !(null == e ? void 0 : e.isSwitchingAccount) && en(), s.default.PersistedStore.clearAll({
                    omit: ["InstallationManagerStore", "AgeGateStore", "NativePermissionsStore", "MultiAccountStore", "DraftStore", "OverlayStoreV2", "StreamerModeStore", "LoginRequiredActionStore"],
                    type: (null == e ? void 0 : e.isSwitchingAccount) ? "user-data-only" : "all"
                }), L.default.clearAll(), T.clear(), R.default.clearUser(), _.default.remove(g), U = null, B = (null == e ? void 0 : e.isSwitchingAccount) ? p.LoginStates.LOGGING_IN : p.LoginStates.NONE, H = p.RegistrationStates.NONE, k = "", j = "", Y = null, K = !1, X = !1, J = !1, z = {}, Z = {}
            }
            class es extends s.default.Store {
                initialize() {
                    U = _.default.get(g), M = _.default.get(D), $ = _.default.get("login_cache"), null == u.default.getToken() && en()
                }
                getEmail() {
                    return M
                }
                getLogin() {
                    return $
                }
                didVerifyFail() {
                    return X
                }
                getVerifyErrors() {
                    return z
                }
                didVerifySucceed() {
                    return J
                }
                getLoginStatus() {
                    return B
                }
                getRegisterStatus() {
                    return H
                }
                getId() {
                    return U
                }
                getSessionId() {
                    return v
                }
                getAuthSessionIdHash() {
                    return G
                }
                getToken() {
                    return (0, O.getToken)()
                }
                isAuthenticated() {
                    return (0, O.isAuthenticated)()
                }
                getFingerprint() {
                    return y
                }
                getAnalyticsToken() {
                    return b
                }
                getErrors() {
                    return Z
                }
                getMFATicket() {
                    return k
                }
                getMFASMS() {
                    return K
                }
                getMFATotp() {
                    return W
                }
                getMFABackup() {
                    return x
                }
                getMFAWebAuthn() {
                    return Y
                }
                getMFAMethods() {
                    let e = [];
                    return null != Y && e.push({
                        type: "webauthn",
                        challenge: Y
                    }), W && e.push({
                        type: "totp",
                        backup_codes_allowed: x
                    }), x && e.push({
                        type: "backup"
                    }), K && e.push({
                        type: "sms"
                    }), e
                }
                hasTOTPEnabled() {
                    return w.includes(d.AuthenticatorType.TOTP)
                }
                hasSMSEnabled() {
                    return w.includes(d.AuthenticatorType.SMS)
                }
                hasWebAuthnEnabled() {
                    return w.includes(d.AuthenticatorType.WEBAUTHN)
                }
                getMaskedPhone() {
                    return j
                }
                getCredentials() {
                    if (null == r) throw Error("no credentials");
                    return r
                }
                getVerifyingUserId() {
                    return Q
                }
                getCurrentRegistrationOptions() {
                    return i
                }
                allowLogoutRedirect() {
                    return !V
                }
                getWebAuthnChallenge() {
                    return Y
                }
                getSuspendedUserToken() {
                    return ee
                }
            }
            es.displayName = "AuthenticationStore";
            var eE = new es(c.default, {
                CONNECTION_OPEN: function(e) {
                    var t;
                    let {
                        user: n,
                        sessionId: r,
                        authSessionIdHash: i,
                        analyticsToken: o,
                        auth: l
                    } = e;
                    et("handleConnectionOpen called"), R.default.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, S.default)(n)), v = r, G = i, b = o, U = n.id, M = n.email, void 0 !== l && (w = l.authenticator_types), _.default.set(D, n.email), _.default.set(g, n.id)
                },
                OVERLAY_INITIALIZE: function(e) {
                    var t;
                    let {
                        user: n,
                        sessionId: r,
                        analyticsToken: i,
                        token: o
                    } = e;
                    R.default.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, S.default)(n)), v = r, b = i, eo(o), ei(), U = n.id, _.default.set(g, n.id)
                },
                CONNECTION_CLOSED: function(e) {
                    let {
                        code: t
                    } = e;
                    if (et("handleConnectionClosed called with code ".concat(t, ".")), 4004 === t) {
                        if (V || m(C.NEW_USER_AGE_GATE_MODAL_KEY) || m(C.EXISTING_USER_AGE_GATE_MODAL_KEY)) {
                            eu();
                            return
                        }
                        f.default.track(p.AnalyticEvents.APP_USER_DEAUTHENTICATED, {
                            user_id: _.default.get(g)
                        }), ea(), setImmediate(() => (0, I.transitionTo)(p.Routes.DEFAULT_LOGGED_OUT))
                    }
                },
                AUTH_SESSION_CHANGE: function(e) {
                    let {
                        authSessionIdHash: t
                    } = e;
                    null != t && (G = t)
                },
                LOGIN: function(e) {
                    Z = {}, B = p.LoginStates.LOGGING_IN, j = "", i = null, null != e.login && ($ = e.login)
                },
                LOGIN_SUCCESS: function(e) {
                    let {
                        token: t
                    } = e;
                    B = p.LoginStates.NONE, eo(t), ei(), k = "", K = !1, Y = null, j = ""
                },
                LOGIN_FAILURE: function(e) {
                    let {
                        error: t
                    } = e;
                    k = "", K = !1, Y = null, B = null != (Z = function(e) {
                        if (Object.keys(e.fields).length > 0) return e.fields;
                        let t = {
                            message: e.message
                        };
                        return null != e.retryAfter && (t.retry_after = e.retryAfter), t
                    }(t)).date_of_birth ? p.LoginStates.LOGIN_AGE_GATE : p.LoginStates.NONE
                },
                LOGIN_MFA_STEP: function(e) {
                    let {
                        ticket: t,
                        sms: n,
                        webauthn: r,
                        backup: i,
                        totp: o
                    } = e;
                    null != t && (k = t, K = n, j = "", Y = null != r ? r : null, x = i, W = o), Z = {}, B = p.LoginStates.MFA_STEP
                },
                LOGIN_MFA: function() {
                    B = p.LoginStates.LOGGING_IN_MFA
                },
                LOGIN_MFA_FAILURE: function(e) {
                    let {
                        message: t
                    } = e;
                    B = p.LoginStates.MFA_STEP, Z = {
                        code: t
                    }
                },
                LOGIN_MFA_SMS: function() {
                    B = p.LoginStates.LOGGING_IN_MFA_SMS
                },
                LOGIN_MFA_SMS_REQUEST_SUCCESS: function(e) {
                    let {
                        phone: t
                    } = e;
                    B = p.LoginStates.MFA_SMS_STEP, j = t
                },
                LOGIN_MFA_SMS_FAILURE: function(e) {
                    let {
                        message: t
                    } = e;
                    B = p.LoginStates.MFA_SMS_STEP, Z = {
                        code: t
                    }
                },
                LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: function(e) {
                    B = p.LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION, r = e.credentials
                },
                LOGIN_ACCOUNT_DISABLED: function(e) {
                    B = p.LoginStates.ACCOUNT_DISABLED, r = e.credentials
                },
                LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function() {
                    B = p.LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION
                },
                LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function() {
                    B = p.LoginStates.PHONE_IP_AUTHORIZATION
                },
                LOGIN_RESET: function(e) {
                    let {
                        isMultiAccount: t
                    } = e;
                    Z = {}, B = p.LoginStates.NONE, k = "", K = !1, Y = null, i = null, r = null, !t && (el(), en(!1))
                },
                LOGIN_STATUS_RESET: function() {
                    B = p.LoginStates.NONE
                },
                LOGIN_SUSPENDED_USER: function(e) {
                    let {
                        suspendedUserToken: t
                    } = e;
                    ee = t, setImmediate(() => (0, I.transitionTo)(p.Routes.ACCOUNT_STANDING))
                },
                SET_LOGIN_CREDENTIALS: function(e) {
                    let {
                        login: t,
                        password: n
                    } = e;
                    r = {
                        login: t,
                        password: n
                    }
                },
                LOGOUT: ea,
                FINGERPRINT: function(e) {
                    let t = e.fingerprint;
                    null == y ? null != t ? (f.default.track(p.AnalyticEvents.USER_FINGERPRINT_CHANGED, {
                        old_fingerprint: null != F ? (0, a.extractId)(F) : null,
                        new_fingerprint: (0, a.extractId)(t)
                    }), y = t, F = t, _.default.set(h, y)) : en() : null != t && y !== t && f.default.track(p.AnalyticEvents.EXTERNAL_FINGERPRINT_DROPPED, {
                        fingerprint: (0, a.extractId)(y),
                        dropped_fingerprint: (0, a.extractId)(t)
                    })
                },
                REGISTER_SAVE_FORM: function(e) {
                    let {
                        form: t
                    } = e;
                    i = t, H = p.RegistrationStates.REGISTER_AGE_GATE
                },
                REGISTER: function(e) {
                    let {
                        birthday: t
                    } = e;
                    Z = {}, null != t && (l(null != i, "Got birthday in multistep registration without existing form"), i = {
                        ...i,
                        birthday: t
                    }), H = p.RegistrationStates.REGISTERING
                },
                REGISTER_SUCCESS: function(e) {
                    let {
                        token: t
                    } = e;
                    H = p.RegistrationStates.NONE, i = null, eo(t), ei()
                },
                REGISTER_FAILURE: function(e) {
                    let {
                        error: t
                    } = e;
                    Z = function(e) {
                        let t = {};
                        if (t.error_code = e.code, null != e.errors) {
                            for (let n of Object.keys(e.errors)) t[n] = [e.getFirstFieldErrorMessage(n)];
                            return t
                        }
                        return t.message = e.message, null != e.retryAfter && (t.retry_after = e.retryAfter), t
                    }(t), H = null != t.getFieldErrors("date_of_birth") ? p.RegistrationStates.REGISTER_AGE_GATE : p.RegistrationStates.REGISTER_WITH_ERROR
                },
                VERIFY_FAILURE: function(e) {
                    let {
                        errors: t
                    } = e;
                    X = !0, J = !1, z = null != t ? t : {}
                },
                VERIFY_SUCCESS: function(e) {
                    J = !0, X = !1, z = {}, Q = e.verifyingUserId
                },
                START_SESSION: function() {
                    if (0 === Object.keys(Z).length) return !1;
                    Z = {}
                },
                FORGOT_PASSWORD_REQUEST: function() {
                    B = p.LoginStates.FORGOT_PASSWORD, Z = {}
                },
                FORGOT_PASSWORD_SENT: function() {
                    B = p.LoginStates.NONE, Z = {}
                },
                UPDATE_TOKEN: function(e) {
                    let {
                        token: t,
                        userId: n
                    } = e;
                    et("handleUpdateToken called"), eo(t, n), ei()
                },
                EXPERIMENTS_FETCH: er,
                CURRENT_USER_UPDATE: function(e) {
                    let {
                        user: t
                    } = e;
                    U = t.id, M = t.email, void 0 !== t.authenticator_types && (w = t.authenticator_types), _.default.set(D, t.email), _.default.set(g, t.id)
                },
                AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eu,
                CLEAR_AUTHENTICATION_ERRORS: function() {
                    Z = {}
                },
                CLOSE_SUSPENDED_USER: function() {
                    ee = null, B = p.LoginStates.NONE, ea(), setImmediate(() => (0, I.transitionTo)(p.Routes.DEFAULT_LOGGED_OUT))
                }
            }, c.DispatchBand.Early)
        },
        72177: function(e, t, n) {
            "use strict";
            let r, i, o;
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var l = n("748820"),
                u = n("446674"),
                a = n("95410"),
                s = n("862337"),
                E = n("913144"),
                _ = n("697796"),
                c = n("766274"),
                d = n("922932"),
                T = n("773336"),
                A = n("197881");
            let I = "BrowserHandoffStore",
                S = !1,
                f = new s.Timeout;

            function O() {
                null != r && null != i && (window.open("".concat(r, "&key=").concat(i)), d.default.focus(null, !0))
            }

            function R() {
                i = null, f.stop(), S = !1, a.default.set(I, S)
            }

            function N() {
                R()
            }
            class L extends u.default.Store {
                initialize() {
                    !1 !== a.default.get(I) && (S = T.isPlatformEmbedded && "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                }
                isHandoffAvailable() {
                    return !A.ProcessArgs.isDisallowPopupsSet() && S
                }
                get user() {
                    return o
                }
                get key() {
                    return i
                }
            }
            L.displayName = "BrowserHandoffStore";
            var p = new L(E.default, {
                RPC_SERVER_READY: function(e) {
                    r = "".concat(location.protocol, "//").concat(location.host, "/handoff?rpc=").concat(e.port), O()
                },
                BROWSER_HANDOFF_BEGIN: function(e) {
                    if (null != i) return !1;
                    i = (0, l.v4)(), f.start(e.timeout, () => (0, _.handoffEnd)()), O()
                },
                BROWSER_HANDOFF_FROM_APP: function(e) {
                    let {
                        handoffKey: t,
                        handoffToken: n,
                        timeout: r
                    } = e;
                    if (null == t || null == n) return !1;
                    S = !0, f.start(r, () => (0, _.handoffEnd)())
                },
                BROWSER_HANDOFF_UNAVAILABLE: R,
                BROWSER_HANDOFF_SET_USER: function(e) {
                    o = new c.default(e.user)
                },
                LOGIN: N,
                LOGIN_SUCCESS: N,
                LOGOUT: N,
                REGISTER: N
            })
        },
        313915: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            }), n("702976");
            var r = n("981980"),
                i = n("171718"),
                o = n("446674"),
                l = n("872717"),
                u = n("95410"),
                a = n("913144"),
                s = n("527015"),
                E = n("718517"),
                _ = n("286235"),
                c = n("49111");
            let d = (() => {
                    let e = "".concat(location.protocol, "//").concat(location.host, "/__development/source_maps"),
                        t = null,
                        n = new r.default(5 * E.default.Millis.SECOND, 1 * E.default.Millis.MINUTE, !0),
                        o = () => {
                            l.default.put({
                                url: e,
                                headers: {
                                    Authorization: i.default.getToken()
                                },
                                oldFormErrors: !0
                            }).then(e => {
                                401 === e.status || 403 === e.status ? (t = null, (0, s.setDeveloperOptionSettings)({
                                    sourceMapsEnabled: !1
                                })) : 200 !== e.status ? t = setTimeout(o, n.fail()) : (n.succeed(), t = setTimeout(o, e.body.sourceMapCookieTTLSeconds * E.default.Millis.SECOND * .75))
                            }, () => {
                                t = setTimeout(o, n.fail())
                            })
                        };
                    return {
                        set: n => {
                            let r = null != t;
                            n !== r && (n ? t = setTimeout(o, 0) : (clearTimeout(t), t = null, l.default.delete({
                                url: e,
                                headers: {
                                    Authorization: i.default.getToken()
                                },
                                oldFormErrors: !0
                            })))
                        }
                    }
                })(),
                T = "DeveloperOptionsStore",
                A = {
                    trace: !1,
                    canary: !1,
                    logGatewayEvents: !1,
                    logOverlayEvents: !1,
                    logAnalyticsEvents: !1,
                    sourceMapsEnabled: !1,
                    axeEnabled: !1,
                    analyticsDebuggerEnabled: !1,
                    bugReporterEnabled: !0,
                    idleStatusIndicatorEnabled: !1,
                    appDirectoryIncludesInactiveCollections: !1
                },
                I = {
                    ...A
                };

            function S(e) {
                I = {
                    ...A,
                    ...I,
                    ...e
                }, d.set(I.sourceMapsEnabled), u.default.set(T, I)
            }
            class f extends o.default.Store {
                initialize() {
                    let e = u.default.get(T);
                    null != e && (I = {
                        ...A,
                        ...e
                    })
                }
                get isTracingRequests() {
                    return I.trace
                }
                get isForcedCanary() {
                    return I.canary
                }
                get isLoggingGatewayEvents() {
                    return I.logGatewayEvents
                }
                get isLoggingOverlayEvents() {
                    return I.logOverlayEvents
                }
                get isLoggingAnalyticsEvents() {
                    return I.logAnalyticsEvents
                }
                get isAxeEnabled() {
                    return I.axeEnabled
                }
                get sourceMapsEnabled() {
                    return I.sourceMapsEnabled
                }
                get isAnalyticsDebuggerEnabled() {
                    return I.analyticsDebuggerEnabled
                }
                get isBugReporterEnabled() {
                    return I.bugReporterEnabled
                }
                get isIdleStatusIndicatorEnabled() {
                    return I.idleStatusIndicatorEnabled
                }
                get appDirectoryIncludesInactiveCollections() {
                    return I.appDirectoryIncludesInactiveCollections
                }
                getDebugOptionsHeaderValue() {
                    Object.keys(I).map(e => I[e]);
                    let e = Object.keys(I).filter(e => I[e]);
                    return e.join(",")
                }
            }
            f.displayName = "DeveloperOptionsStore";
            var O = new f(a.default, {
                LOGOUT: function(e) {
                    S(A)
                },
                CONNECTION_OPEN: function(e) {
                    var t;
                    let n = ((null !== (t = e.user.flags) && void 0 !== t ? t : 0) & c.UserFlags.STAFF) === c.UserFlags.STAFF,
                        r = n || null != e.user.personal_connection_id;
                    n && d.set(I.sourceMapsEnabled), _.default.setTags({
                        isStaff: r.toString()
                    })
                },
                DEVELOPER_OPTIONS_UPDATE_SETTINGS: function(e) {
                    let {
                        settings: t
                    } = e;
                    S(t)
                }
            })
        },
        455079: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("424973");
            var r, i, o = n("627445"),
                l = n.n(o),
                u = n("446674"),
                a = n("95410"),
                s = n("913144");
            (r = class e extends u.default.Store {
                static clearAll() {
                    e.allStores.forEach(e => e.clear())
                }
                registerActionHandlers(e) {
                    return l(!("CLEAR_CACHES" in e), "SnapshotStores cannot use the 'CLEAR_CACHES' action"), l(!("WRITE_CACHES" in e), "SnapshotStores cannot use the 'WRITE_CACHES' action"), super.registerActionHandlers({
                        ...e,
                        CLEAR_CACHES: () => this.clear(),
                        WRITE_CACHES: () => this.save()
                    })
                }
                get persistKey() {
                    return "".concat(this.getClass().displayName, "-snapshot")
                }
                clear() {
                    a.default.remove(this.persistKey)
                }
                save() {
                    a.default.set(this.persistKey, this.takeSnapshot())
                }
                readSnapshot(e) {
                    let t = a.default.get(this.persistKey);
                    return null == t || t.version !== e ? null : t.data
                }
                getClass() {
                    return this.constructor
                }
                constructor() {
                    super(s.default, null), l(null != this.getClass().displayName, "Snapshot stores need a display name"), e.allStores.push(this)
                }
            }).allStores = [], i = r
        },
        697218: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                users: function() {
                    return I
                },
                ASSISTANT_WUMPUS_VOICE_USER: function() {
                    return f
                },
                transformUser: function() {
                    return R
                },
                mergeUser: function() {
                    return L
                },
                default: function() {
                    return V
                }
            }), n("222007"), n("702976"), n("808653"), n("581081"), n("424973");
            var r = n("917351"),
                i = n("446674"),
                o = n("913144"),
                l = n("234251"),
                u = n("560208"),
                a = n("400205"),
                s = n("946028"),
                E = n("517001"),
                _ = n("766274"),
                c = n("568734"),
                d = n("271938"),
                T = n("49111"),
                A = n("646718");
            let I = {},
                S = 0,
                f = "47835198259242069";

            function O(e, t, n) {
                let r = e;
                r = null == n ? e.removeGuildAvatarHash(t) : e.addGuildAvatarHash(t, n), I[e.id] = r;
                let i = e !== r;
                return i && S++, i
            }

            function R(e) {
                let t = e.mfa_enabled;
                null != t && (e.mfaEnabled = t, delete e.mfa_enabled);
                let n = (0, E.getPremiumTypeFromRawValue)(e.premium_type);
                void 0 !== n && (e.premiumType = n, delete e.premium_type);
                let r = e.nsfw_allowed;
                null != r && (e.nsfwAllowed = r, delete e.nsfw_allowed);
                let i = e.public_flags;
                null != i && (e.publicFlags = i, delete e.public_flags);
                let o = e.purchased_flags;
                void 0 !== o && (e.purchasedFlags = o, delete e.purchased_flags);
                let u = e.premium_usage_flags;
                void 0 !== u && (e.premiumUsageFlags = u, delete e.premium_usage_flags), null === e.banner_color && delete e.banner_color;
                let a = e.avatar_decoration_data;
                void 0 !== a && (e.avatarDecorationData = (0, l.parseAvatarDecorationData)(a), delete e.avatar_decoration_data);
                let s = e.global_name;
                return void 0 !== s && (e.globalName = s, delete e.global_name), e
            }

            function N(e) {
                return e.id !== d.default.getId()
            }

            function L(e) {
                let t, n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    r = I[e.id],
                    i = void 0 !== e.id && e.id === d.default.getId();
                if (null == r) void 0 !== (t = (r = new _.default(e)).premiumType) && i && (r.premiumType = p((0, E.isStaffEnv)(r), r.premiumType));
                else if (n) {
                    var o;
                    let n = R(e);
                    void 0 !== (t = null !== (o = n.premium_type) && void 0 !== o ? o : n.premiumType) && i && (0, E.isStaffEnvRawData)(n) && (n = function(e) {
                        var t;
                        let n = null !== (t = e.premium_type) && void 0 !== t ? t : e.premiumType,
                            r = p((0, E.isStaffEnvRawData)(e), n);
                        return void 0 !== e.premiumType ? e.premiumType = r : void 0 !== e.premium_type && (e.premium_type = r), e
                    }(n)), r = r.merge(n)
                }(0, E.validatePremiumType)((0, E.isStaffEnv)(r), t, r.premiumType);
                let l = I[e.id] !== r;
                return I[e.id] = r, l && S++, l
            }

            function p(e, t) {
                if (!e) return t;
                let n = a.default.getPremiumTypeOverride(),
                    r = a.default.getPremiumTypeActual();
                return n === A.UNSELECTED_PREMIUM_TYPE_OVERRIDE ? r : n
            }

            function C(e, t) {
                var n, r, i, o, l;
                if (null != e.author && "SENDING" !== e.state && N(e.author) && L(e.author, t), null === (n = e.mentions) || void 0 === n || n.forEach(e => {
                        N(e) && L(e, t)
                    }), (null === (r = e.interaction) || void 0 === r ? void 0 : r.user) != null && N(null === (i = e.interaction) || void 0 === i ? void 0 : i.user) && L(e.interaction.user, t), null === (o = e.attachments) || void 0 === o || o.forEach(e => {
                        var n;
                        null === (n = e.clip_participants) || void 0 === n || n.forEach(e => {
                            N(e) && L(e, t)
                        })
                    }), (null === (l = e.resolved) || void 0 === l ? void 0 : l.users) != null)
                    for (let n in e.resolved.users) {
                        let r = e.resolved.users[n];
                        N(r) && L(r, t)
                    }
            }

            function m(e) {
                null != e.application.bot && L(e.application.bot)
            }

            function P(e) {
                if (null != e.users) {
                    for (let t of e.users)
                        if (!(t.id in I && !("incomplete" in t))) I[t.id] = new _.default(t)
                }
            }

            function h(e) {
                let {
                    messages: t
                } = e;
                return t.forEach(e => C(e, !0)), !1
            }

            function D(e) {
                let {
                    messages: t
                } = e;
                return t.forEach(e => h({
                    messages: e
                })), !1
            }

            function g(e) {
                let {
                    firstMessages: t,
                    owners: n
                } = e;
                null != t && t.forEach(e => C(e, !0)), null != n && n.forEach(e => L(e.user, !0))
            }

            function U(e) {
                let {
                    message: t
                } = e;
                if (C(t, !0), null != t.flags && c.hasFlag(t.flags, T.MessageFlags.URGENT)) {
                    let e = I[d.default.getId()];
                    return null != e && (I[d.default.getId()] = e.set("flags", c.setFlag(e.flags, T.UserFlags.HAS_UNREAD_URGENT_MESSAGES, !0)), !0)
                }
                return !1
            }
            let M = ["username", "avatar", "global_name", "discriminator", "bot"];

            function v(e) {
                return L(e.user)
            }

            function G(e) {
                return !!e.isMember && L(e.user)
            }

            function y(e) {
                let t = L(e.user),
                    n = I[e.user.id];
                if (null == n) return t;
                let {
                    avatar: r,
                    guildId: i
                } = e;
                return O(n, i, r) || t
            }

            function F(e) {
                let {
                    users: t
                } = e;
                t.forEach(e => {
                    null == I[e.id] && (I[e.id] = new _.default(e))
                })
            }

            function b(e) {
                return L(e.member.user)
            }

            function B(e) {
                let {
                    request: t
                } = e, {
                    user: n,
                    actioned_by_user: r
                } = t, i = !1;
                return null != n && (i = i || L(n)), null != r && (i = i || L(r)), i
            }
            class H extends i.default.Store {
                initialize() {
                    this.waitFor(d.default)
                }
                getUserStoreVersion() {
                    return S
                }
                getUser(e) {
                    if (null != e) return I[e]
                }
                getUsers() {
                    return I
                }
                forEach(e) {
                    for (let t in I)
                        if (!1 === e(I[t])) break
                }
                findByTag(e, t) {
                    for (let n in I) {
                        let r = I[n];
                        if (null != t && r.username === e && r.discriminator === t) return r;
                        if (null == t && r.username === e && r.isPomelo()) return r
                    }
                }
                filter(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = [];
                    for (let t in I) {
                        let r = I[t];
                        e(r) && n.push(r)
                    }
                    return t && n.sort((e, t) => e.username > t.username ? 1 : e.username < t.username ? -1 : 0), n
                }
                getCurrentUser() {
                    return I[d.default.getId()]
                }
            }
            H.displayName = "UserStore";
            var V = new H(o.default, {
                CONNECTION_OPEN: function(e) {
                    let {
                        user: t,
                        users: n,
                        guilds: r
                    } = e;
                    delete t.premium, delete t.banner_color, L(t), n.forEach(e => {
                        L(e)
                    }), r.forEach(e => {
                        e.members.forEach(t => {
                            let n = I[t.user.id];
                            null != n && O(n, e.id, t.avatar)
                        })
                    });
                    let i = I[d.default.getId()];
                    null != i && (I[f] = new _.default({
                        id: f,
                        username: "Wumpus",
                        discriminator: "0",
                        globalName: "Wumpus",
                        avatar: "c1f86b313385cb97985f1b118851c28c"
                    }))
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    let {
                        guilds: t,
                        lazyPrivateChannels: n
                    } = e;
                    t.forEach(e => {
                        e.members.forEach(t => {
                            let n = I[t.user.id];
                            null != n && O(n, e.id, t.avatar)
                        })
                    }), null == n || n.forEach(e => {
                        var t;
                        null === (t = e.rawRecipients) || void 0 === t || t.forEach(e => {
                            L(e)
                        })
                    })
                },
                UPDATE_CLIENT_PREMIUM_TYPE: function(e) {
                    let {
                        user: t
                    } = e;
                    L(t)
                },
                OVERLAY_INITIALIZE: P,
                CACHE_LOADED: P,
                CACHE_LOADED_LAZY: P,
                USER_UPDATE: function(e) {
                    let {
                        user: t
                    } = e;
                    t.id !== d.default.getId() && L(t)
                },
                CURRENT_USER_UPDATE: function(e) {
                    let {
                        user: t
                    } = e;
                    L(t)
                },
                PRESENCE_UPDATES: function(e) {
                    let {
                        updates: t
                    } = e;
                    return t.map(e => {
                        let t = I[e.user.id];
                        if (null == t) return !1;
                        let n = M.reduce((n, i) => {
                            if (e.user.hasOwnProperty(i)) {
                                let o = t.set((0, r.camelCase)(i), e.user[i]);
                                n = n || o !== t, t = o
                            }
                            return n
                        }, !1);
                        return !!n && (I[t.id] = t, n)
                    }).some(e => e)
                },
                SEARCH_FINISH: D,
                MOD_VIEW_SEARCH_FINISH: D,
                LOAD_MESSAGES_SUCCESS: h,
                LOAD_MESSAGES_AROUND_SUCCESS: h,
                LOAD_PINNED_MESSAGES_SUCCESS: h,
                LOAD_RECENT_MENTIONS_SUCCESS: h,
                THREAD_LIST_SYNC: function(e) {
                    let {
                        mostRecentMessages: t
                    } = e;
                    return null == t || t.forEach(e => C(e, !1)), !1
                },
                MESSAGE_CREATE: U,
                MESSAGE_UPDATE: U,
                GUILD_SETTINGS_LOADED_BANS: function(e) {
                    let {
                        bans: t
                    } = e;
                    t.forEach(e => L(e.user))
                },
                GUILD_SETTINGS_LOADED_BANS_BATCH: function(e) {
                    let {
                        bans: t
                    } = e;
                    t.forEach(e => L(e.user))
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    t.members.forEach(e => {
                        let {
                            user: {
                                id: n,
                                username: r,
                                avatar: i,
                                discriminator: o,
                                bot: l
                            },
                            avatar: u
                        } = e;
                        n !== d.default.getId() && L({
                            id: n,
                            username: r,
                            avatar: i,
                            discriminator: o,
                            bot: l
                        });
                        let a = I[n];
                        null != a && O(a, t.id, u)
                    })
                },
                GUILD_BAN_ADD: v,
                GUILD_BAN_REMOVE: v,
                CHANNEL_RECIPIENT_ADD: G,
                CHANNEL_RECIPIENT_REMOVE: G,
                GUILD_JOIN_REQUEST_CREATE: B,
                GUILD_JOIN_REQUEST_UPDATE: B,
                GUILD_MEMBER_ADD: y,
                GUILD_MEMBER_UPDATE: y,
                GUILD_MEMBERS_CHUNK: function(e) {
                    let {
                        members: t,
                        guildId: n
                    } = e;
                    return t.reduce((e, t) => {
                        let r = L(t.user),
                            i = I[t.user.id];
                        if (null == i) return r || e;
                        let {
                            avatar: o
                        } = t;
                        return O(i, n, o) || r || e
                    }, !1)
                },
                THREAD_MEMBER_LIST_UPDATE: function(e) {
                    let {
                        members: t
                    } = e, n = !1;
                    return t.forEach(e => {
                        null != e.member && L(e.member.user) && (n = !0), null != e.presence && L(e.presence.user) && (n = !0)
                    }), n
                },
                THREAD_MEMBERS_UPDATE: function(e) {
                    let {
                        addedMembers: t
                    } = e, n = !1;
                    return null == t || t.forEach(e => {
                        null != e.member && L(e.member.user) && (n = !0), null != e.presence && L(e.presence.user) && (n = !0)
                    }), n
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: {
                            rawRecipients: t
                        }
                    } = e;
                    return null != t && t.forEach(e => L(e)), !1
                },
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    for (let {
                            rawRecipients: e
                        }
                        of t) null != e && e.forEach(e => L(e));
                    return !1
                },
                RELATIONSHIP_ADD: function(e) {
                    return L(e.relationship.user)
                },
                LOAD_RELATIONSHIPS_SUCCESS: function(e) {
                    let {
                        relationships: t
                    } = e;
                    return t.reduce((e, t) => L(t.user) || e, !1)
                },
                FRIEND_SUGGESTION_CREATE: function(e) {
                    return L(e.suggestion.suggested_user)
                },
                LOAD_FRIEND_SUGGESTIONS_SUCCESS: function(e) {
                    let {
                        suggestions: t
                    } = e;
                    return t.reduce((e, t) => L(t.suggested_user) || e, !1)
                },
                AUDIT_LOG_FETCH_SUCCESS: F,
                AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: F,
                LOBBY_CREATE: function(e) {
                    let {
                        lobby: t
                    } = e;
                    return t.members.reduce((e, t) => L(t.user) || e, !1)
                },
                LOBBY_MEMBER_CONNECT: b,
                LOBBY_MEMBER_UPDATE: b,
                GIFT_CODE_RESOLVE_SUCCESS: function(e) {
                    let {
                        giftCode: t
                    } = e;
                    return null != t.user && L(t.user)
                },
                GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
                    let {
                        appliedBoosts: t
                    } = e;
                    t.forEach(e => {
                        let {
                            user: t
                        } = e;
                        null != t && L(t)
                    })
                },
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    let {
                        data: t
                    } = e;
                    (0, u.getMessagesFromGuildFeedFetch)(t).forEach(e => C(e, !0))
                },
                LOAD_THREADS_SUCCESS: g,
                LOAD_ARCHIVED_THREADS_SUCCESS: g,
                LOAD_FORUM_POSTS: function(e) {
                    let {
                        threads: t
                    } = e;
                    Object.values(t).forEach(e => {
                        let {
                            first_message: t,
                            most_recent_message: n,
                            owner: r
                        } = e;
                        null != t && C(t, !0), null != n && C(n, !0), null != r && null != r.user && L(r.user, !0)
                    })
                },
                GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: function(e) {
                    let {
                        guildScheduledEventUsers: t,
                        guildId: n
                    } = e;
                    t.forEach(e => {
                        let {
                            user: t,
                            member: r
                        } = e;
                        if (null == t) return;
                        L(t);
                        let i = I[t.id],
                            o = null == r ? void 0 : r.avatar;
                        null != i && null != o && O(i, n, o)
                    })
                },
                LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: function(e) {
                    let {
                        items: t
                    } = e;
                    t.forEach(e => {
                        null != e.other_user && L(e.other_user)
                    })
                },
                NOTIFICATION_CENTER_ITEM_CREATE: function(e) {
                    let {
                        item: t
                    } = e;
                    null != t.other_user && L(t.other_user)
                },
                LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: function(e) {
                    let {
                        supplementalData: t
                    } = e;
                    Object.values(t).forEach(e => {
                        let {
                            message_preview: t
                        } = e;
                        null != t && C(t, !0)
                    })
                },
                STORE_APPLICATION_INTERACTION_FAKE_USER: function(e) {
                    let {
                        user: t
                    } = e;
                    L(t)
                },
                PASSIVE_UPDATE_V1: function(e) {
                    var t;
                    let n = !1;
                    for (let r of null !== (t = e.members) && void 0 !== t ? t : []) L(r.user) && (n = !0), null != I[r.user.id] && O(I[r.user.id], e.guildId, r.avatar) && (n = !0);
                    return n
                },
                LOCAL_MESSAGES_LOADED: function(e) {
                    var t;
                    let n = !1;
                    for (let r of null !== (t = e.users) && void 0 !== t ? t : []) !Object.hasOwn(I, r.id) && (n = L(r) || n);
                    return n
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS: function(e) {
                    let {
                        integrations: t
                    } = e;
                    t.forEach(e => m((0, s.createPrivateChannelIntegration)(e)))
                },
                PRIVATE_CHANNEL_INTEGRATION_CREATE: function(e) {
                    let {
                        integration: t
                    } = e;
                    m((0, s.createPrivateChannelIntegration)(t))
                },
                PRIVATE_CHANNEL_INTEGRATION_UPDATE: function(e) {
                    let {
                        integration: t
                    } = e;
                    m((0, s.createPrivateChannelIntegration)(t))
                },
                FAMILY_CENTER_INITIAL_LOAD: function(e) {
                    let {
                        users: t,
                        familyCenterTeenActivity: n
                    } = e, {
                        users: r
                    } = n, i = [...t, ...r];
                    return i.reduce((e, t) => L(t) || e, !1)
                },
                FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: function(e) {
                    let {
                        users: t
                    } = e;
                    return t.reduce((e, t) => L(t) || e, !1)
                },
                FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: function(e) {
                    let {
                        familyCenterTeenActivity: t
                    } = e;
                    if (void 0 === t) return;
                    let {
                        users: n
                    } = t;
                    return n.reduce((e, t) => L(t) || e, !1)
                },
                FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: function(e) {
                    let {
                        familyCenterTeenActivity: t
                    } = e, {
                        users: n
                    } = t;
                    return n.reduce((e, t) => L(t) || e, !1)
                },
                FAMILY_CENTER_REQUEST_LINK_SUCCESS: function(e) {
                    let {
                        users: t
                    } = e;
                    return t.reduce((e, t) => L(t) || e, !1)
                },
                FRIEND_FINDER_PYMK_LOADED: function(e) {
                    let {
                        users: t
                    } = e;
                    return t.reduce((e, t) => L(t) || e, !1)
                },
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function(e) {
                    let {
                        members: t
                    } = e, n = d.default.getId();
                    return t.reduce((e, t) => {
                        if (t.member.user.id === n) return e;
                        let r = L(t.member.user);
                        return r || e
                    }, !1)
                }
            })
        },
        144747: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var r = n("446674"),
                i = n("913144"),
                o = n("659500"),
                l = n("49111");
            let u = null,
                a = 0;

            function s() {
                u = null
            }
            class E extends r.default.Store {
                isOpen() {
                    return null != u
                }
                get version() {
                    return a
                }
                getContextMenu() {
                    return u
                }
                close() {
                    return !!this.isOpen() && (o.ComponentDispatch.dispatch(l.ComponentActions.CONTEXT_MENU_CLOSE), !0)
                }
            }
            E.displayName = "ContextMenuStore";
            var _ = new E(i.default, {
                CONTEXT_MENU_OPEN: function(e) {
                    let {
                        contextMenu: t
                    } = e;
                    a++, u = t
                },
                LAYER_PUSH: s,
                CONTEXT_MENU_CLOSE: s,
                OVERLAY_SET_UI_LOCKED: s,
                OVERLAY_DEACTIVATE_ALL_REGIONS: s
            })
        },
        870623: function(e, t, n) {
            "use strict";
            n.r(t)
        },
        599110: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnalyticsContext: function() {
                    return I
                },
                addExtraAnalyticsDecorator: function() {
                    return R
                },
                AnalyticEventConfigs: function() {
                    return N
                },
                expandLocation: function() {
                    return L
                },
                setUTMContext: function() {
                    return m
                },
                expandEventProperties: function() {
                    return P
                },
                debugLogEvent: function() {
                    return h
                },
                trackNetworkAction: function() {
                    return g
                },
                AnalyticsSchema: function() {
                    return E
                },
                default: function() {
                    return U
                }
            }), n("424973"), n("222007");
            var r = n("884691"),
                i = n("759843"),
                o = n("913144"),
                l = n("939011"),
                u = n("821316"),
                a = n("316217"),
                s = n("313915"),
                E = n("870623"),
                _ = n("872507"),
                c = n("286235"),
                d = n("49111"),
                T = n("727538"),
                A = n("782340");
            let I = r.createContext({
                    location: {}
                }),
                S = {},
                f = performance.now(),
                O = [];

            function R(e) {
                O.push(e)
            }
            let N = {
                [d.AnalyticEvents.APP_OPENED]: {
                    throttlePeriod: 3e5,
                    throttleKeys: () => []
                },
                [d.AnalyticEvents.APP_BACKGROUND]: {
                    throttlePeriod: 12e4,
                    throttleKeys: () => []
                },
                [d.AnalyticEvents.ACK_MESSAGES]: {
                    throttlePeriod: 9e5,
                    throttleKeys: e => [e.guild_id, e.channel_id, e.location_section]
                },
                [d.AnalyticEvents.GUILD_VIEWED]: {
                    throttlePeriod: 9e5,
                    throttleKeys: e => [e.guild_id, e.is_pending]
                },
                [d.AnalyticEvents.FRIENDS_LIST_VIEWED]: {
                    throttlePeriod: 9e5,
                    throttleKeys: e => [e.tab_opened]
                },
                [d.AnalyticEvents.NOW_PLAYING_CARD_HOVERED]: {
                    throttlePeriod: 9e5,
                    throttleKeys: e => [e.tab_opened]
                },
                [d.AnalyticEvents.START_SPEAKING]: {
                    throttlePeriod: 9e5,
                    throttleKeys: e => [e.server]
                },
                [d.AnalyticEvents.START_LISTENING]: {
                    throttlePeriod: 9e5,
                    throttleKeys: e => [e.server]
                },
                [d.AnalyticEvents.ACTIVITY_UPDATED]: {
                    throttlePeriod: 6e4,
                    throttleKeys: e => [e.application_id],
                    deduplicate: !0
                },
                [d.AnalyticEvents.CHANNEL_OPENED]: {
                    throttlePeriod: 9e5,
                    throttleKeys: e => null != e.channel_static_route ? [e.guild_id, e.channel_static_route, e.channel_view] : [e.channel_id, e.channel_view]
                },
                [d.AnalyticEvents.TEXT_IN_VOICE_OPENED]: {
                    throttlePeriod: 864e5,
                    throttleKeys: e => [e.channel_id]
                },
                [d.AnalyticEvents.NOTIFICATION_VIEWED]: {
                    throttlePeriod: 9e5,
                    throttleKeys: e => [e.notif_type]
                },
                [d.AnalyticEvents.MEMBER_LIST_VIEWED]: {
                    throttlePeriod: 9e5,
                    throttleKeys: e => [e.channel_id]
                },
                [d.AnalyticEvents.DM_LIST_VIEWED]: {
                    throttlePeriod: 9e5,
                    throttleKeys: e => [e.channel_id]
                },
                [d.AnalyticEvents.NAV_DRAWER_OPENED]: {
                    throttlePeriod: 9e5,
                    throttleKeys: () => []
                },
                [d.AnalyticEvents.KEYBOARD_SHORTCUT_USED]: {
                    throttlePeriod: 12e4,
                    throttleKeys: e => {
                        var t;
                        return [e.shortcut_name, e.location_object, ...null !== (t = e.source_class_list) && void 0 !== t ? t : []]
                    }
                },
                [d.AnalyticEvents.QUICKSWITCHER_OPENED]: {
                    throttlePeriod: 1e4,
                    throttleKeys: () => []
                },
                [d.AnalyticEvents.CHAT_INPUT_COMPONENT_VIEWED]: {
                    throttlePeriod: 9e5,
                    throttleKeys: e => [e.type]
                },
                [d.AnalyticEvents.ROLE_PAGE_VIEWED]: {
                    throttlePeriod: 12e4,
                    throttleKeys: e => [e.role_id, e.tab_opened]
                },
                [d.AnalyticEvents.VIDEO_INPUT_INITIALIZED]: {
                    throttlePeriod: 3e5,
                    throttleKeys: () => []
                },
                [d.AnalyticEvents.HUB_ONBOARDING_CAROUSEL_SCROLLED]: {
                    throttlePeriod: 9e5,
                    throttleKeys: () => []
                },
                [d.AnalyticEvents.HUB_STUDENT_PROMPT_CLICKED]: {
                    throttlePeriod: 9e5,
                    throttleKeys: () => []
                },
                [d.AnalyticEvents.RPC_SERVER_ERROR_CAUGHT]: {
                    throttlePeriod: 864e5,
                    throttleKeys: () => []
                },
                [d.AnalyticEvents.RPC_COMMAND_SENT]: {
                    throttlePeriod: 864e5,
                    throttleKeys: e => [e.application_id, e.command],
                    throttlePercent: .001
                },
                [d.AnalyticEvents.RPC_SUBSCRIPTION_REQUESTED]: {
                    throttlePeriod: 864e5,
                    throttleKeys: e => [e.application_id, e.event],
                    throttlePercent: .001
                },
                [d.AnalyticEvents.CHANNEL_BANNER_VIEWED]: {
                    throttlePeriod: 864e5,
                    throttleKeys: e => [e.banner_type, e.channel_id]
                },
                [d.AnalyticEvents.PREMIUM_UPSELL_VIEWED]: {
                    throttlePeriod: 6e4,
                    throttleKeys: e => [e.type]
                },
                [d.AnalyticEvents.CHANNEL_HIGHLIGHTS_VIEWED]: {
                    throttlePeriod: 36e5,
                    throttleKeys: e => [e.guild_id, e.channel_id]
                },
                [d.AnalyticEvents.GUILD_CHANNEL_HIGHLIGHTS_LOADED]: {
                    throttlePeriod: 36e5,
                    throttleKeys: e => [e.guild_id]
                },
                [d.AnalyticEvents.FORUM_CHANNEL_SEARCHED]: {
                    throttlePeriod: 6e4,
                    throttleKeys: e => [e.guild_id, e.channel_id]
                },
                [d.AnalyticEvents.FORUM_CHANNEL_SCROLLED]: {
                    throttlePeriod: 9e5,
                    throttleKeys: e => [e.guild_id, e.channel_id]
                },
                [d.AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED]: {
                    throttlePeriod: 6e4,
                    throttleKeys: e => [e.user_id]
                },
                [d.AnalyticEvents.DM_PROFILE_VIEWED]: {
                    throttlePeriod: 36e5,
                    throttleKeys: e => [e.viewed_profile_user_id]
                },
                [d.AnalyticEvents.MEDIA_VIEWER_SESSION_COMPLETED]: {
                    throttlePercent: .01
                },
                [d.AnalyticEvents.SUMMARIES_UNREAD_BAR_VIEWED]: {
                    throttlePeriod: 3e5,
                    throttleKeys: e => [e.channel_id]
                },
                [d.AnalyticEvents.ACTIVITY_CARDS_VIEWED]: {
                    throttlePeriod: 9e5,
                    throttleKeys: e => [e.context, e.guild_id]
                },
                [d.AnalyticEvents.ACK_COMMUNITY_MESSAGES]: {
                    throttlePeriod: 9e5,
                    throttleKeys: e => [e.channel_id]
                },
                [d.AnalyticEvents.REDESIGN_NAV_BAR_CLICKED]: {
                    throttlePeriod: 9e5,
                    throttleKeys: e => [e.tab]
                },
                [d.AnalyticEvents.BROADCAST_START_BUTTON_HOVERED]: {
                    throttlePeriod: 6e4,
                    throttleKeys: () => []
                },
                [d.AnalyticEvents.BROADCAST_LIST_VISITED]: {
                    throttlePeriod: 3e5,
                    throttleKeys: () => []
                },
                [d.AnalyticEvents.CHANNEL_LIST_END_REACHED]: {
                    throttlePeriod: 9e5,
                    throttleKeys: e => [e.guild_id]
                },
                [d.AnalyticEvents.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED]: {
                    throttlePeriod: 6e4,
                    throttleKeys: e => [e.guild_id, e.channel_id]
                },
                [d.AnalyticEvents.LIVE_ACTIVITY_SETTINGS_UPDATED]: {
                    throttlePeriod: 36e5,
                    throttleKeys: () => []
                }
            };

            function L(e) {
                return "string" == typeof e ? {
                    location: e
                } : {
                    location: e.page,
                    location_page: e.page,
                    location_section: e.section,
                    location_object: e.object,
                    location_object_type: e.objectType
                }
            }
            let p = () => T.AccessibilityFeatureFlags.NONE,
                C = (0, i.trackMaker)({
                    analyticEventConfigs: N,
                    dispatcher: o.default,
                    TRACK_ACTION_NAME: "TRACK"
                });

            function m(e) {
                return S = e
            }

            function P(e) {
                var t, n, r, i, o;
                let l = e;
                if (!l && (l = {}), null != l.location) {
                    let {
                        location: e,
                        ...t
                    } = l;
                    l = {
                        ...t,
                        ...L(e)
                    }
                }
                if (null != l.source) {
                    ;
                    let {
                        source: e,
                        ...t
                    } = l;
                    l = {
                        ...t,
                        ..."string" == typeof(o = e) ? {
                            source: o
                        } : {
                            source_page: o.page,
                            source_section: o.section,
                            source_object: o.object,
                            source_object_type: o.objectType,
                            source_promotion_id: o.promotionId
                        }
                    }
                }
                l.client_performance_cpu = _.default.getCurrentCPUUsagePercent(), l.client_performance_memory = _.default.getCurrentMemoryUsageKB(), l.cpu_core_count = _.default.getCPUCoreCount(), l.accessibility_features = p(), l.rendered_locale = A.default.getLocale(), l.uptime_app = Math.floor((performance.now() - f) / 1e3);
                let u = _.default.getProcessUptime();
                null != u && (l.uptime_process_renderer = Math.floor(u));
                let {
                    utmSource: a,
                    utmMedium: s,
                    utmCampaign: E,
                    utmContent: c
                } = S;
                return l.utm_source = null !== (t = l.utm_source) && void 0 !== t ? t : a, l.utm_medium = null !== (n = l.utm_medium) && void 0 !== n ? n : s, l.utm_campaign = null !== (r = l.utm_campaign) && void 0 !== r ? r : E, l.utm_content = null !== (i = l.utm_content) && void 0 !== i ? i : c, O.forEach(e => e(l)), l
            }

            function h(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                s.default.isLoggingAnalyticsEvents && console.info("AnalyticsUtils.track(...):", e, t), n ? u.report("Analytics", e, t) : u.report("Analytics", e)
            }
            let D = (0, i.trackMaker)({
                analyticEventConfigs: N,
                dispatcher: o.default,
                TRACK_ACTION_NAME: "TRACK"
            });

            function g(e, t) {
                let n = (0, l.getLocation)(),
                    r = P({
                        location: n,
                        ...t
                    });
                (0, l.setDebugTrackedData)(e, {
                    type: "action",
                    ...t
                }), h(e, r), D(e, r)
            }
            var U = {
                ...i.default,
                getCampaignParams: i.getCampaignParams,
                setSystemAccessibilityFeatures: function(e) {
                    p = e
                },
                expandEventProperties: P,
                track: function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (!a.IGNORE_ANALYTICS_BREADCRUMB_EVENTS.includes(e) && c.default.addBreadcrumb({
                            category: "analytics",
                            message: "".concat(e)
                        }), null != n.throttlePercent && Math.random() > n.throttlePercent) return Promise.resolve();
                    let r = P(t);
                    return h(e, r, n.logEventProperties), C(e, r, {
                        flush: n.flush,
                        fingerprint: n.fingerprint
                    })
                }
            }
        },
        831588: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getToken: function() {
                    return i
                },
                isAuthenticated: function() {
                    return o
                },
                getArtForPath: function() {
                    return l
                }
            });
            var r = n("171718");

            function i() {
                return r.default.getToken()
            }

            function o() {
                return null != i()
            }
            let l = e => null != e && /^\/developers/.test(e) ? n("501617") : null
        },
        315102: function(e, t, n) {
            "use strict";
            let r;
            n.r(t), n.d(t, {
                DEFAULT_AVATARS: function() {
                    return A
                },
                SUPPORTS_WEBP: function() {
                    return I
                },
                getEmojiURL: function() {
                    return O
                },
                getUserAvatarURL: function() {
                    return L
                },
                getGuildMemberAvatarURLSimple: function() {
                    return p
                },
                getGuildMemberAvatarURL: function() {
                    return C
                },
                getUserBannerURL: function() {
                    return m
                },
                getAvatarDecorationURL: function() {
                    return P
                },
                getGuildMemberBannerURL: function() {
                    return h
                },
                getVideoFilterAssetURL: function() {
                    return b
                },
                isAnimatedIconHash: function() {
                    return H
                },
                isVideoAssetHash: function() {
                    return V
                },
                isAnimatedImageURL: function() {
                    return w
                },
                default: function() {
                    return K
                }
            }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var i = n("552442"),
                o = n.n(i),
                l = n("522632"),
                u = n("249654"),
                a = n("234251"),
                s = n("407063"),
                E = n("240481"),
                _ = n("773336"),
                c = n("49111"),
                d = n("680894"),
                T = n("363577");
            r = n("523096").default;
            let A = r.DEFAULT_AVATARS;
            r.DEFAULT_GROUP_DM_AVATARS;
            let I = r.canUseWebp(),
                S = (0, _.isAndroid)();

            function f(e) {
                let t, {
                    endpoint: n,
                    path: r,
                    id: i,
                    hash: o,
                    size: u,
                    canAnimate: a = !1,
                    keepAspectRatio: E,
                    format: _ = null
                } = e;
                if (null == i || null == o) return;
                let c = null != _ ? _ : a && H(o) ? "gif" : "jpg";
                a && V(o) && (c = "mp4");
                let d = window.GLOBAL_ENV.CDN_HOST;
                if (null != d ? ("jpg" === c && (c = I ? "webp" : "png"), t = "".concat(location.protocol, "//").concat(d, "/").concat(r, "/").concat(i, "/").concat(o, ".").concat(c)) : t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + n(i, o, c), "mp4" === c) return t;
                let T = {};
                return null != u && (T.size = (0, s.getBestMediaProxySize)(u * (0, s.getDevicePixelRatio)())), null != E && (T.keep_aspect_ratio = E), t + "?".concat(l.stringify(T))
            }

            function O(e) {
                let {
                    id: t,
                    animated: n,
                    size: r,
                    forcePNG: i = !1
                } = e, o = I && !i ? "webp" : "png", l = I && !S ? "&quality=lossless" : "";
                return null != window.GLOBAL_ENV.CDN_HOST ? "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/emojis/").concat(t, ".").concat(n ? "gif" : o, "?size=").concat((0, s.getBestMediaProxySize)(r * (0, s.getDevicePixelRatio)())).concat(l) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.Endpoints.EMOJI(t, n ? "gif" : o)
            }

            function R(e, t) {
                if (null == e && null == t) return A[0];
                let n = (0, E.parseInteger)(t, 0);
                return n > 0 ? A[n % 5] : null != e ? A[o(e).shiftRight(22).mod(6).toJSNumber()] : A[0]
            }

            function N(e) {
                let {
                    id: t,
                    avatar: n,
                    discriminator: i,
                    bot: o
                } = e, l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.AVATAR_SIZE, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                if (o && t !== d.CLYDE_AI_USER_ID) {
                    let e = r.BOT_AVATARS[n];
                    if (e) return e;
                    if (null == n && "0000" === i) return A[0]
                }
                return f({
                    endpoint: c.Endpoints.AVATAR,
                    path: "avatars",
                    id: t,
                    hash: n,
                    size: u,
                    canAnimate: l,
                    format: a
                })
            }

            function L(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.AVATAR_SIZE,
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return null !== (t = N(e, n, r, i)) && void 0 !== t ? t : R(e.id, e.discriminator)
            }

            function p(e) {
                let t, {
                        guildId: n,
                        userId: r,
                        avatar: i,
                        canAnimate: o = !1,
                        size: u = c.AVATAR_SIZE
                    } = e,
                    a = o && H(i) ? "gif" : "jpg",
                    {
                        CDN_HOST: E
                    } = window.GLOBAL_ENV;
                return null != E ? ("jpg" === a && (a = I ? "webp" : "png"), t = "".concat(location.protocol, "//").concat(E).concat(c.Endpoints.GUILD_MEMBER_AVATAR(n, r, i, a))) : t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.Endpoints.GUILD_MEMBER_AVATAR(n, r, i, a), t + "?".concat(l.stringify({
                    size: (0, s.getBestMediaProxySize)(u * (0, s.getDevicePixelRatio)())
                }))
            }

            function C(e) {
                let {
                    userId: t,
                    avatar: n,
                    guildId: r
                } = e, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return null == n ? null : p({
                    userId: t,
                    avatar: n,
                    guildId: r,
                    canAnimate: i
                })
            }

            function m(e) {
                let t, {
                    id: n,
                    banner: r,
                    canAnimate: i,
                    size: o
                } = e;
                if (null == r) return;
                let l = window.GLOBAL_ENV.CDN_HOST,
                    u = i && H(r) ? "gif" : "png";
                return t = (null != l ? "".concat(location.protocol, "//").concat(l, "/banners/").concat(n, "/").concat(r, ".").concat(u) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.Endpoints.USER_BANNER(n, r, u)) + "?size=".concat((0, s.getBestMediaProxySize)(o * (0, s.getDevicePixelRatio)()))
            }

            function P(e) {
                let {
                    avatarDecoration: t,
                    size: n,
                    canAnimate: r = !1
                } = e;
                if (null == t) return;
                let {
                    CDN_HOST: i,
                    API_ENDPOINT: o
                } = window.GLOBAL_ENV, l = c.Endpoints.AVATAR_DECORATION_PRESETS(t.asset), u = new URL(null != i ? "".concat(location.protocol, "//").concat(i).concat(l) : "".concat(location.protocol).concat(o).concat(l));
                return u.searchParams.set("size", "".concat((0, s.getBestMediaProxySize)(n * (0, s.getDevicePixelRatio)()))), u.searchParams.set("passthrough", "".concat(r && (0, a.isAnimatedAvatarDecoration)(t.asset))), u.toString()
            }

            function h(e) {
                let t, {
                    id: n,
                    guildId: r,
                    banner: i,
                    canAnimate: o,
                    size: l
                } = e;
                if (null == i || null == r) return;
                let u = window.GLOBAL_ENV.CDN_HOST,
                    a = o && H(i) ? "gif" : "png",
                    E = c.Endpoints.GUILD_MEMBER_BANNER(r, n, i, a);
                return t = (null != u ? "".concat(location.protocol, "//").concat(u).concat(E) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + E) + "?size=".concat((0, s.getBestMediaProxySize)(l * (0, s.getDevicePixelRatio)()))
            }

            function D(e) {
                let t, {
                    id: n,
                    splash: r,
                    size: i
                } = e;
                if (null == r) return null;
                null == i && (i = window.screen.width * (0, s.getDevicePixelRatio)()), i = (0, s.getBestMediaProxySize)(i);
                let o = window.GLOBAL_ENV.CDN_HOST;
                return t = (null != o ? "".concat(location.protocol, "//").concat(o, "/splashes/").concat(n, "/").concat(r, ".jpg") : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.Endpoints.GUILD_SPLASH(n, r)) + "?size=".concat(i)
            }

            function g(e) {
                let t, {
                        id: n,
                        banner: r
                    } = e,
                    i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (null == r) return null;
                let o = (0, s.getBestMediaProxySize)(240 * (0, s.getDevicePixelRatio)()),
                    l = I ? "webp" : "jpg",
                    u = i && H(r) ? "gif" : l,
                    a = window.GLOBAL_ENV.CDN_HOST;
                return t = (null != a ? "".concat(location.protocol, "//").concat(a, "/banners/").concat(n, "/").concat(r, ".").concat(u) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.Endpoints.GUILD_BANNER(n, r, u)) + "?size=".concat(o), "jpg" === u && (t += "&quality=lossless"), t
            }

            function U(e) {
                let t, {
                    id: n,
                    homeHeader: r
                } = e;
                if (null == r) return null;
                let i = (0, s.getBestMediaProxySize)(1096 * (0, s.getDevicePixelRatio)()),
                    o = window.GLOBAL_ENV.CDN_HOST;
                return t = (null != o ? "".concat(location.protocol, "//").concat(o, "/home-headers/").concat(n, "/").concat(r, ".png") : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.Endpoints.GUILD_HOME_HEADER(n, r)) + "?size=".concat(i)
            }

            function M(e) {
                let t, {
                    id: n,
                    splash: r,
                    size: i
                } = e;
                if (null == r) return null;
                null == i && (i = window.screen.width * (0, s.getDevicePixelRatio)()), i = (0, s.getBestMediaProxySize)(i);
                let o = window.GLOBAL_ENV.CDN_HOST;
                return t = (null != o ? "".concat(location.protocol, "//").concat(o, "/discovery-splashes/").concat(n, "/").concat(r, ".jpg") : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.Endpoints.GUILD_DISCOVERY_SPLASH(n, r)) + "?size=".concat(i)
            }

            function v(e) {
                let {
                    id: t,
                    icon: n,
                    size: r,
                    canAnimate: i = !1
                } = e;
                return f({
                    endpoint: c.Endpoints.GUILD_ICON,
                    path: "icons",
                    id: t,
                    hash: n,
                    size: r,
                    canAnimate: i
                })
            }

            function G(e) {
                let {
                    id: t,
                    icon: n,
                    size: r = c.AVATAR_SIZE,
                    canAnimate: i = !1
                } = e;
                return f({
                    endpoint: c.Endpoints.GUILD_TEMPLATE_ICON,
                    path: "guild-templates",
                    id: t,
                    hash: n,
                    size: r,
                    canAnimate: i
                })
            }

            function y(e) {
                let {
                    id: t,
                    icon: n,
                    size: r = c.AVATAR_SIZE,
                    bot: i,
                    botIconFirst: o,
                    fallbackAvatar: l = !0
                } = e;
                if (null != i && o) {
                    let e = N(i, !1, r);
                    if (null != e) return e
                }
                if (null != n) return f({
                    endpoint: c.Endpoints.APPLICATION_ICON,
                    path: "app-icons",
                    id: t,
                    hash: n,
                    size: r,
                    canAnimate: !1
                });
                if (null != i) {
                    let e = N(i, !1, r);
                    if (null != e) return e
                }
                if (l) return T
            }

            function F(e) {
                let {
                    id: t,
                    hash: n,
                    size: r = c.AVATAR_SIZE,
                    keepAspectRatio: i = !1
                } = e;
                return f({
                    endpoint: c.Endpoints.APPLICATION_ICON,
                    path: "app-icons",
                    id: t,
                    hash: n,
                    size: r,
                    canAnimate: !1,
                    keepAspectRatio: i
                })
            }

            function b(e) {
                let {
                    userId: t,
                    assetId: n,
                    assetHash: r,
                    size: i,
                    canAnimate: o = !0
                } = e;
                return f({
                    endpoint: (e, i, o) => c.Endpoints.VIDEO_FILTER_ASSET_STORAGE(t, n, r, o),
                    path: "video-filter-assets/".concat(t),
                    id: n,
                    hash: r,
                    size: i,
                    canAnimate: o
                })
            }

            function B(e) {
                var t, n, i;
                let {
                    id: o,
                    icon: l,
                    applicationId: a,
                    size: s
                } = e;
                if (null != a) return null !== (t = y({
                    id: a,
                    icon: l,
                    size: s
                })) && void 0 !== t ? t : r.DEFAULT_CHANNEL_ICON;
                return null !== (n = f({
                    endpoint: c.Endpoints.CHANNEL_ICON,
                    path: "channel-icons",
                    id: o,
                    hash: l,
                    canAnimate: !1,
                    size: s
                })) && void 0 !== n ? n : (i = o, r.DEFAULT_GROUP_DM_AVATARS[u.default.extractTimestamp(i) % r.DEFAULT_GROUP_DM_AVATARS.length])
            }

            function H(e) {
                return null != e && e.startsWith("a_")
            }

            function V(e) {
                return null != e && e.startsWith("v_")
            }

            function w(e) {
                return null != e && H(function(e) {
                    let t;
                    try {
                        {
                            let n = new URL(e);
                            t = n.pathname
                        }
                        let n = t.split("/");
                        return n.pop()
                    } catch (e) {
                        return null
                    }
                }(e))
            }

            function k(e) {
                return "number" == typeof e ? e : {
                    uri: null != e ? e : void 0
                }
            }
            var K = {
                getUserAvatarURL: L,
                getDefaultAvatarURL: R,
                getGuildMemberAvatarURL: C,
                getGuildMemberAvatarURLSimple: p,
                getGuildMemberAvatarSource: function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = C(e, n);
                    return null != r ? k(r) : t.getAvatarSource(e.guildId, n)
                },
                getGuildMemberBannerURL: h,
                getUserBannerURL: m,
                getAvatarDecorationURL: P,
                hasAnimatedGuildIcon: function(e) {
                    return H(null == e ? void 0 : e.icon)
                },
                isAnimatedIconHash: H,
                getUserAvatarSource(e, t, n) {
                    let r = L(e, t, n);
                    return k(r)
                },
                getGuildIconURL: v,
                getGuildSplashURL: D,
                getGuildSplashSource: function(e) {
                    return k(D(e))
                },
                getGuildDiscoverySplashURL: M,
                getGuildDiscoverySplashSource: function(e) {
                    return k(M(e))
                },
                getGuildBannerURL: g,
                getGuildHomeHeaderURL: U,
                getResourceChannelIconURL: function(e) {
                    let {
                        channelId: t,
                        icon: n
                    } = e;
                    return null == n ? null : f({
                        endpoint: c.Endpoints.GUILD_RESOURCE_CHANNELS_ICON,
                        path: "resource-channels",
                        id: t,
                        hash: n,
                        size: c.AVATAR_SIZE,
                        canAnimate: !0
                    })
                },
                getNewMemberActionIconURL: function(e) {
                    let {
                        channelId: t,
                        icon: n
                    } = e;
                    return null == n ? null : f({
                        endpoint: c.Endpoints.GUILD_NEW_MEMBER_ACTIONS_ICON,
                        path: "new-member-actions",
                        id: t,
                        hash: n,
                        size: c.AVATAR_SIZE,
                        canAnimate: !0
                    })
                },
                getGuildTemplateIconURL: G,
                getChannelIconURL: B,
                getEmojiURL: O,
                getApplicationIconURL: y,
                getGameAssetURL: F,
                getVideoFilterAssetURL: b,
                getGameAssetSource(e) {
                    let t = F(e);
                    return k(t)
                },
                getGuildIconSource(e) {
                    let t = v(e);
                    return k(t)
                },
                getGuildTemplateIconSource(e) {
                    let t = G(e);
                    return k(t)
                },
                getGuildBannerSource(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = g(e, t);
                    return k(n)
                },
                getGuildHomeHeaderSource(e) {
                    let t = U(e);
                    return k(t)
                },
                getChannelIconSource(e) {
                    let t = B(e);
                    return k(t)
                },
                getApplicationIconSource(e) {
                    let t = y(e);
                    return k(t)
                },
                makeSource: k,
                getAnimatableSourceWithFallback(e, t) {
                    let n = t(e);
                    if (!(0, _.isAndroid)() || !e || "number" == typeof n) return n;
                    {
                        let e = t(!1);
                        return "number" != typeof e && e.uri === n.uri ? e : [n, {
                            ...e,
                            isForceCached: !0
                        }]
                    }
                }
            }
        },
        560528: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getChromeVersion: function() {
                    return c
                },
                getFirefoxVersion: function() {
                    return A
                },
                canUseWebp: function() {
                    return S
                },
                supportsHEVCAlpha: function() {
                    return f
                }
            });
            var r, i, o, l, u, a = n("597755"),
                s = n.n(a);
            let E = (null !== (r = s.name) && void 0 !== r ? r : "unknown").toLowerCase(),
                _ = "chrome" === E.toLowerCase() ? parseInt(null !== (i = s.version) && void 0 !== i ? i : "", 10) : -1;

            function c() {
                return _
            }
            let d = "electron" === E.toLowerCase() ? parseInt(null !== (o = s.version) && void 0 !== o ? o : "", 10) : -1,
                T = "firefox" === E.toLowerCase() ? parseInt(null !== (l = s.version) && void 0 !== l ? l : "", 10) : -1;

            function A() {
                return T
            }
            let I = "edge" === E.toLowerCase() ? parseInt(null !== (u = s.version) && void 0 !== u ? u : "", 10) : -1;

            function S() {
                return -1 !== _ || -1 !== d || -1 !== T || -1 !== I
            }

            function f() {
                var e;
                let t = window.navigator,
                    n = t.userAgent.toLowerCase(),
                    r = (null === (e = t.mediaCapabilities) || void 0 === e ? void 0 : e.decodingInfo) != null,
                    i = -1 !== n.indexOf("safari") && !(-1 !== n.indexOf("chrome")) && -1 !== n.indexOf("version/");
                return i && r
            }
        },
        568734: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return (e & t) === t
            }

            function i(e, t) {
                return e | t
            }

            function o(e, t) {
                return e & ~t
            }

            function l(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return n.reduce((e, t) => e & ~t, e)
            }

            function u(e, t, n) {
                if (n) return e | t;
                return e & ~t
            }

            function a(e, t) {
                if (r(e, t)) return e & ~t;
                return e | t
            }
            n.r(t), n.d(t, {
                hasFlag: function() {
                    return r
                },
                addFlag: function() {
                    return i
                },
                removeFlag: function() {
                    return o
                },
                removeFlags: function() {
                    return l
                },
                setFlag: function() {
                    return u
                },
                toggleFlag: function() {
                    return a
                }
            }), n("808653")
        },
        35468: function(e, t, n) {
            "use strict";
            let r;
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("424973"), r = n("788235").default;
            let i = [],
                o = !1;
            var l = {
                ...r,
                awaitOnline: () => new Promise(e => {
                    if (r.isOnline()) return e();
                    {
                        if (i.push(e), o) return;
                        o = !0;
                        let t = () => {
                            i.forEach(e => e()), i.length = 0, o = !1, r.removeOnlineCallback(t)
                        };
                        r.addOnlineCallback(t)
                    }
                })
            }
        },
        240481: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                shortenAndLocalizeNumber: function() {
                    return i
                },
                parseInteger: function() {
                    return o
                },
                formatPercent: function() {
                    return l
                }
            });
            var r = n("782340");

            function i(e) {
                if (e < 1e6) return r.default.Messages.NUMBER_ABBREVIATION_FULL.format({
                    value: e
                });
                let t = (e / 1e6).toFixed(1);
                return r.default.Messages.NUMBER_ABBREVIATION_MILLIONS.format({
                    value: t
                })
            }

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NaN;
                if (null == e) return t;
                let n = parseInt(e);
                return Number.isNaN(n) ? t : n
            }

            function l(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return Intl.NumberFormat(e, {
                    style: "percent",
                    minimumFractionDigits: 0,
                    ...n
                }).format(t)
            }
        },
        197881: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ProcessArgs: function() {
                    return i
                }
            });
            var r = n("49671");
            class i {
                static get() {
                    if (null == i.cached) {
                        var e, t;
                        let n = null === r.default || void 0 === r.default ? void 0 : null === (t = r.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t);
                        null != n && n.length > 1 && n.shift(), i.cached = null != n ? n : []
                    }
                    return i.cached
                }
                static contains(e) {
                    return i.get().includes(e)
                }
                static isEnvVariableTrue(e) {
                    var t, n;
                    if (void 0 === r.default) return !1;
                    switch (null === r.default || void 0 === r.default ? void 0 : null === (n = r.default.process) || void 0 === n ? void 0 : null === (t = n.env) || void 0 === t ? void 0 : t[e]) {
                        case "1":
                        case "true":
                            return !0
                    }
                    return !1
                }
                static isDisallowPopupsSet() {
                    return i.contains("--disallow-popups") || i.isEnvVariableTrue("DISCORD_DISALLOW_POPUPS")
                }
                static isDiscordTestSet() {
                    return i.isEnvVariableTrue("DISCORD_TEST")
                }
                static isDiscordGatewayPlaintextSet() {
                    return !1
                }
            }
        },
        872507: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("808653");
            var r = n("811022"),
                i = n("49671"),
                o = n("921278"),
                l = n("50885");
            let u = new r.default("ProcessUtilsElectron");
            class a extends o.ProcessUtils {
                setupReportingTimer() {
                    var e, t;
                    let n = null === i.default || void 0 === i.default ? void 0 : null === (e = i.default.processUtils) || void 0 === e ? void 0 : e.setMemoryInformation;
                    if (null == n) {
                        u.log("setMemoryInformation not available.");
                        return
                    }(null === (t = performance.memory) || void 0 === t ? void 0 : t.usedJSHeapSize) == null && u.error("usedJSHeapSize is not available.");
                    setInterval(() => {
                        var e, t, r;
                        let i = null !== (t = null === (e = performance.memory) || void 0 === e ? void 0 : e.usedJSHeapSize) && void 0 !== t ? t : 0;
                        n({
                            memoryUsageKB: null !== (r = this.lastMemoryUsageKB) && void 0 !== r ? r : 0,
                            usedJSHeapSizeKB: Math.ceil(i / 1024)
                        })
                    }, 1e4)
                }
                getProcessUptime() {
                    var e, t;
                    return null === i.default || void 0 === i.default ? void 0 : null === (t = i.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getProcessUptime) || void 0 === e ? void 0 : e.call(t)
                }
                getCurrentCPUUsagePercent() {
                    var e, t;
                    return null === i.default || void 0 === i.default ? void 0 : null === (t = i.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getCurrentCPUUsagePercent) || void 0 === e ? void 0 : e.call(t)
                }
                getCurrentMemoryUsageKB() {
                    let e = a.getCurrentMemoryUsageKBCore();
                    return this.lastMemoryUsageKB = e, e
                }
                static getCurrentMemoryUsageKBCore() {
                    try {
                        let e = l.default.getDiscordMemoryUsage();
                        if (null == e) return 0;
                        let t = Object.values(e).reduce((e, t) => e + t, 0);
                        return Math.ceil(t / 1024)
                    } catch (e) {
                        return 0
                    }
                }
                getMemoryUsageDetails() {
                    return l.default.getDiscordMemoryUsage()
                }
                getMemoryUsageElectronRenderer() {
                    try {
                        return l.default.getDiscordMemoryUsageElectronRenderer()
                    } catch (e) {
                        return null
                    }
                }
                getMemoryUsageElectronRendererUsedHeapSize() {
                    var e, t;
                    return null === i.default || void 0 === i.default ? void 0 : null === (t = i.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getUsedHeapSize) || void 0 === e ? void 0 : e.call(t)
                }
                constructor() {
                    var e, t;
                    super(), this.lastMemoryUsageKB = void 0, this.cpuCoreCount = null === i.default || void 0 === i.default ? void 0 : null === (t = i.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getCPUCoreCount) || void 0 === e ? void 0 : e.call(t), this.setupReportingTimer()
                }
            }
            var s = new a
        },
        921278: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ProcessUtils: function() {
                    return r
                }
            });
            class r {
                getCPUCoreCount() {
                    return this.cpuCoreCount
                }
            }
        },
        299039: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DISCORD_EPOCH: function() {
                    return r.DISCORD_EPOCH
                },
                default: function() {
                    return i
                }
            });
            var r = n("249654"),
                i = {
                    age: r.default.age,
                    extractTimestamp: r.default.extractTimestamp,
                    fromTimestamp: r.default.fromTimestamp,
                    atPreviousMillisecond: r.default.atPreviousMillisecond,
                    compare: r.default.compare,
                    keys: function(e) {
                        return Object.keys(e)
                    },
                    forEachKey: function(e, t) {
                        for (let n in e) t(n)
                    },
                    entries: function(e) {
                        return Object.entries(e)
                    }
                }
        },
        547630: function(e, t, n) {
            "use strict";

            function r() {
                var e;
                return null !== (e = window.devicePixelRatio) && void 0 !== e ? e : 1
            }
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            })
        },
        523096: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getAutomodAvatarURL: function() {
                    return L
                },
                default: function() {
                    return p
                }
            });
            var r = n("560528"),
                i = n("324241"),
                o = n("307757"),
                l = n("548520"),
                u = n("445724"),
                a = n("170382"),
                s = n("593285"),
                E = n("575603"),
                _ = n("181815"),
                c = n("521089"),
                d = n("366942"),
                T = n("125707"),
                A = n("785744"),
                I = n("297384"),
                S = n("573220"),
                f = n("265284"),
                O = n("320436"),
                R = n("348044"),
                N = n("36409");

            function L() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return e ? N : i
            }
            var p = {
                DEFAULT_AVATARS: [o, l, u, a, s, E],
                DEFAULT_GROUP_DM_AVATARS: [_, c, d, T, A, I, S, f],
                BOT_AVATARS: {
                    clyde: R
                },
                DEFAULT_CHANNEL_ICON: O,
                canUseWebp: function() {
                    return r.canUseWebp()
                }
            }
        },
        788235: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("424973");
            var r = n("49111");
            let i = [],
                o = !1;

            function l() {
                let e = window.navigator.connection;
                return null == e ? {
                    type: r.NetworkConnectionTypes.UNKNOWN,
                    effectiveSpeed: r.NetworkConnectionSpeeds.UNKNOWN
                } : {
                    type: null != e.type ? e.type : r.NetworkConnectionTypes.UNKNOWN,
                    effectiveSpeed: e.effectiveType
                }
            }

            function u() {
                let e = l();
                i.forEach(t => t(e))
            }
            var a = {
                addOnlineCallback(e) {
                    window.addEventListener("online", e)
                },
                removeOnlineCallback(e) {
                    window.removeEventListener("online", e)
                },
                addOfflineCallback(e) {
                    window.addEventListener("offline", e)
                },
                removeOfflineCallback(e) {
                    window.removeEventListener("offline", e)
                },
                addChangeCallback(e) {
                    var t;
                    t = e, i.push(t),
                        function() {
                            if (!0 === o) return;
                            let e = window.navigator.connection;
                            null != e && (o = !0, e.addEventListener("change", u))
                        }()
                },
                removeChangeCallback(e) {
                    ! function(e) {
                        let t = i.indexOf(e); - 1 !== t && (i.splice(t, 1), ! function() {
                            if (!1 === o) return;
                            let e = window.navigator.connection;
                            null != e && 0 === i.length && null != e && (e.removeEventListener("change", u), o = !1)
                        }())
                    }(e)
                },
                getNetworkInformation: () => Promise.resolve(l()),
                isOnline() {
                    let e = navigator.onLine;
                    return void 0 === e || e
                }
            }
        },
        862337: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Timeout: function() {
                    return r
                },
                DelayedCall: function() {
                    return i
                },
                Interval: function() {
                    return o
                },
                timeoutPromise: function() {
                    return l
                }
            });
            class r {
                start(e, t) {
                    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                    (!this.isStarted() || n) && (this.stop(), this._ref = window.setTimeout(() => {
                        this._ref = null, t()
                    }, e))
                }
                stop() {
                    null != this._ref && (clearTimeout(this._ref), this._ref = null)
                }
                isStarted() {
                    return null != this._ref
                }
            }
            class i {
                set(e) {
                    return this._delay = e, this
                }
                delay() {
                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    this._timeout.start(this._delay, this._handler, e)
                }
                cancel() {
                    this._timeout.stop()
                }
                isDelayed() {
                    return this._timeout.isStarted()
                }
                constructor(e, t) {
                    this._delay = e, this._handler = t, this._timeout = new r
                }
            }
            class o {
                start(e, t) {
                    this.stop(), this._ref = window.setInterval(t, e)
                }
                stop() {
                    null != this._ref && (clearInterval(this._ref), this._ref = null)
                }
            }

            function l(e) {
                return new Promise(t => {
                    setTimeout(() => t(), e)
                })
            }
        },
        171718: function(e, t, n) {
            "use strict";
            let r, i;
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            }), n("222007"), n("808653");
            var o = n("95410"),
                l = n("843455");
            let u = "dQw4w9WgXcQ:";

            function a(e) {
                return [...e].reduce((e, t) => {
                    let [n, r] = t;
                    return e[n] = r, e
                }, {})
            }
            let s = null,
                E = window.DiscordNative;
            null != E && (s = E.safeStorage);
            let _ = !1,
                c = {},
                d = {},
                T = !1,
                A = !1;

            function I() {
                if (T) {
                    o.default.remove(l.TOKEN_KEY), o.default.remove(l.TOKENS_KEY);
                    return
                }
                null != i ? o.default.set(l.TOKEN_KEY, i) : o.default.remove(l.TOKEN_KEY), o.default.set(l.TOKENS_KEY, d)
            }

            function S(e) {
                return null == e || 0 === e.length ? {
                    decryptedToken: null,
                    wasEncrypted: !1
                } : (null == s ? void 0 : s.isEncryptionAvailable()) && e.startsWith(u) ? {
                    decryptedToken: s.decryptString(e.substring(u.length)),
                    wasEncrypted: !0
                } : {
                    decryptedToken: e,
                    wasEncrypted: !1
                }
            }

            function f(e) {
                return (null == s ? void 0 : s.isEncryptionAvailable()) && !e.startsWith(u) ? "".concat(u).concat(s.encryptString(e)) : e
            }
            var O = {
                init() {
                    if (A) return;
                    i = o.default.get(l.TOKEN_KEY), d = o.default.get(l.TOKENS_KEY) || {};
                    let {
                        decryptedToken: e,
                        wasEncrypted: t
                    } = S(i);
                    _ = t, r = e, c = a(Object.entries(d).map(e => {
                        let [t, n] = e, {
                            decryptedToken: r,
                            wasEncrypted: i
                        } = S(n);
                        return _ = i || _, [t, r]
                    }).filter(e => {
                        let [t, n] = e;
                        return null != n
                    })), A = !0
                },
                getToken(e) {
                    return (this.init(), null != e) ? c[e] : r
                },
                setToken(e, t) {
                    if (null == e) {
                        this.removeToken(t);
                        return
                    }
                    r = e, null != t && (c[t] = e), _ ? this.encryptAndStoreTokens() : (i = r, d = c, I())
                },
                hideToken() {
                    !T && (T = !0, I())
                },
                showToken() {
                    T && (T = !1, I())
                },
                removeToken(e) {
                    let t = r;
                    null != e && (t = c[e], delete c[e], delete d[e]), t === r && (r = null, i = null), I()
                },
                encryptAndStoreTokens() {
                    (null == s ? void 0 : s.isEncryptionAvailable()) ? (null != r && (i = f(r)), d = a(Object.entries(c).map(e => {
                        let [t, n] = e;
                        return [t, f(n)]
                    })), _ = !0) : (i = r, d = c), I()
                }
            }
        },
        266088: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                ApplicationOverlayMethodFlags: function() {
                    return r
                }
            }), (i = r || (r = {}))[i.DEFAULT = 0] = "DEFAULT", i[i.OUT_OF_PROCESS = 1] = "OUT_OF_PROCESS"
        },
        611221: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                GuildFeedItemTypes: function() {
                    return r
                }
            }), n("222007"), (i = r || (r = {})).MESSAGE = "message", i.FORUM_POST = "forum_post", i.MESSAGE_BUNDLE = "message_bundle", i.CONVERSATION = "conversation"
        },
        249654: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DISCORD_EPOCH: function() {
                    return o
                },
                default: function() {
                    return a
                }
            });
            var r = n("552442"),
                i = n.n(r);
            let o = 14200704e5;

            function l(e) {
                return Math.floor(Number(e) / 4194304) + o
            }

            function u(e) {
                let t = e - o;
                return t <= 0 ? "0" : i(t).shiftLeft(22).toString()
            }
            var a = {
                age: function(e) {
                    return Date.now() - l(e)
                },
                extractTimestamp: l,
                fromTimestamp: u,
                atPreviousMillisecond: function(e) {
                    return u(l(e) - 1)
                },
                compare: function(e, t) {
                    return e === t ? 0 : null == t ? 1 : null == e ? -1 : e.length > t.length ? 1 : e.length < t.length ? -1 : e > t ? 1 : -1
                }
            }
        }
    }
]);
//# sourceMappingURL=19642.92996447493dfe76319b.js.map