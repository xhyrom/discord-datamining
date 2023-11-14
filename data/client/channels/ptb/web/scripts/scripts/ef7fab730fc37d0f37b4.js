(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["7105"], {
        272030: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                closeContextMenu: function() {
                    return a
                },
                openContextMenu: function() {
                    return o
                },
                openContextMenuLazy: function() {
                    return E
                }
            }), n("506083");
            var i = n("913144"),
                l = n("244201"),
                u = n("773336"),
                r = n("749866"),
                s = n("49111");

            function _(e) {
                i.default.dispatch({
                    type: "CONTEXT_MENU_OPEN",
                    contextMenu: e
                })
            }

            function a(e) {
                {
                    let {
                        flushSync: t
                    } = n("817736");
                    t(() => {
                        i.default.wait(() => {
                            i.default.dispatch({
                                type: "CONTEXT_MENU_CLOSE"
                            }).finally(e)
                        })
                    })
                }
            }

            function o(e, t, n, i) {
                var a, o, E;
                if (e.stopPropagation(), null != e.currentTarget.contains && !e.currentTarget.contains(e.target)) return;
                let d = 0,
                    c = 0;
                if ("pageX" in e && (d = e.pageX, c = e.pageY), 0 === d && 0 === c) {
                    let t = null === (a = e.target) || void 0 === a ? void 0 : a.getBoundingClientRect(),
                        {
                            left: n = 0,
                            top: i = 0,
                            width: l = 0,
                            height: u = 0
                        } = null != t ? t : {};
                    d = n + l / 2, c = i + u / 2
                }
                let I = {
                    render: t,
                    renderLazy: i,
                    target: null !== (o = e.target) && void 0 !== o ? o : e.currentTarget,
                    rect: new DOMRect(d, c, 0, 0),
                    config: {
                        context: __OVERLAY__ ? s.AppContext.OVERLAY : null !== (E = (0, l.getCurrentlyInteractingAppContext)()) && void 0 !== E ? E : s.AppContext.APP,
                        ...n
                    }
                };
                if ((null == n ? void 0 : n.enableSpellCheck) && (0, u.isDesktop)()) {
                    let e = (0, r.addResultListener)(() => {
                        e(), _(I)
                    })
                } else e.preventDefault(), _(I)
            }

            function E(e, t, n) {
                o(e, void 0, n, t)
            }
        },
        689988: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("70102"), n("222007"), n("704744");
            var i, l = n("913144");
            i = class {
                initialize() {
                    this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        l.default.subscribe(t, "function" == typeof n ? n : n.callback)
                    }), this.stores.forEach((e, t) => {
                        t.addChangeListener(e), e()
                    }))
                }
                terminate(e) {
                    !(this.initializedCount <= 0) && (e ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        l.default.unsubscribe(t, "function" == typeof n ? n : n.callback)
                    })))
                }
                _initialize() {}
                _terminate() {}
                constructor() {
                    this.initializedCount = 0, this.actions = {}, this.stores = new Map
                }
            }
        },
        851234: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("70102");
            var i, l = n("50885");
            i = class {
                get language() {
                    return this._language
                }
                set language(e) {
                    this._language !== e && (this._language = e, this._onChange(e))
                }
                set languageHint(e) {
                    this._languageHint = e
                }
                process(e) {
                    !this._processing && (this._processing = !0, requestIdleCallback(t => {
                        var n, i;
                        let u = t.timeRemaining();
                        if (u <= this._minimumTimeRemaining) {
                            this._processEnd();
                            return
                        }
                        e.length > 256 && (e = e.slice(0, 256)), (n = e, i = this._languageHint, l.default.ensureModule("discord_spellcheck").then(() => {
                            let {
                                cld: e
                            } = l.default.requireModule("discord_spellcheck");
                            return new Promise((t, l) => {
                                e.detect(n, {
                                    httpHint: i,
                                    encodingHint: "UTF8"
                                }, (e, n) => {
                                    null != e ? l(Error(e.message)) : !n.reliable || n.languages[0].percent < 90 || n.languages[0].score < 500 ? l(Error("Not enough reliable text.")) : t(n.languages[0].code)
                                })
                            })
                        })).then(e => {
                            this.language = e, this._processEnd(t.didTimeout)
                        }, () => {
                            this._processEnd(t.didTimeout)
                        })
                    }))
                }
                _processEnd() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this._processing = !1, e && this._minimumTimeRemaining++
                }
                constructor(e, t) {
                    this._shouldProcess = !1, this._processing = !1, this._minimumTimeRemaining = 5, this._language = e, this._languageHint = e, this._onChange = t, t(e)
                }
            }
        },
        852046: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                install: function() {
                    return D
                }
            }), n("781738"), n("222007");
            var i = n("78349"),
                l = n("917351"),
                u = n.n(l),
                r = n("118810"),
                s = n("49671"),
                _ = n("605250"),
                a = n("915639"),
                o = n("449008"),
                E = n("851234"),
                d = n("648610");
            let c = new _.default("Spellchecker"),
                I = null === s.default || void 0 === s.default ? void 0 : s.default.spellCheck;

            function N(e) {
                var t;
                e = null !== (t = d.default[e]) && void 0 !== t ? t : e;
                let n = (0, i.parse)(e.replace(/[_-]/g, "-"));
                if (null == n || null == n.langtag.language || null == n.langtag.region) {
                    c.error("".concat(e, " is not a valid locale."));
                    return
                }
                let {
                    language: l,
                    region: u
                } = n.langtag;
                return "".concat(l.language.toLowerCase(), "-").concat(u.toUpperCase())
            }
            class T {
                get enabled() {
                    return this._enabled
                }
                set enabled(e) {
                    this._enabled = e
                }
                setLearnedWords(e) {
                    I.setLearnedWords(e)
                }
                setLocale(e) {
                    var t;
                    null === (t = I.setLocale(e)) || void 0 === t || t.then(t => {
                        c.info("Switching to ".concat(e), t ? "(available)" : "(unavailable)")
                    })
                }
                setAppLocale(e) {
                    this.regionPreference = e.split("-")[1]
                }
                detectLanguage(e) {
                    this.enabled && this.languageDetector.process(e)
                }
                getAvailableLanguages(e) {
                    let t = {};
                    return e.forEach(e => {
                        var n;
                        let [i] = e.split("-");
                        t[i] = null !== (n = t[i]) && void 0 !== n ? n : e
                    }), t
                }
                isMisspelled(e, t) {
                    return "" !== this.misspelledWord && e === this.misspelledWord
                }
                getCorrectionsForMisspelling(e, t) {
                    return this.isMisspelled(e, t) ? this.corrections : []
                }
                replaceMisspelling(e) {
                    I.replaceMisspelling(e)
                }
                constructor(e) {
                    this._enabled = !0, this.misspelledWord = "", this.corrections = [];
                    let [t, n] = a.default.locale.split("-");
                    this.regionPreference = n;
                    let i = this.getAvailableLanguages(e);
                    this.languageDetector = new E.default(t, n => {
                        let l = "".concat(n, "-").concat(this.regionPreference);
                        if (-1 !== e.indexOf(l)) this.setLocale(l);
                        else {
                            var u;
                            let e = null !== (u = i[n]) && void 0 !== u ? u : d.default[t];
                            null != e && this.setLocale(e)
                        }
                    }), I.on("spellcheck-result", (e, t) => {
                        this.misspelledWord = null != e ? e : "", this.corrections = null != t ? t : []
                    })
                }
            }
            let A = u.debounce((e, t) => {
                let n = function(e) {
                    return null == e ? null : (0, r.isElement)(e, HTMLInputElement) || (0, r.isElement)(e, HTMLTextAreaElement) ? e.value : (0, r.isElement)(e) && e.hasAttribute("contenteditable") ? e.textContent : void 0
                }(t);
                null != n && e.detectLanguage(n)
            }, 250);
            async function D() {
                var e, t;
                let n = null !== (e = await I.getAvailableDictionaries()) && void 0 !== e ? e : [],
                    i = n.map(N).filter(o.isNotNullish),
                    l = new T(i);
                return t = l, null != document.body && document.body.addEventListener("beforeinput", e => A(t, e.target), !0), l
            }
        },
        648610: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = {
                aa: "aa-ET",
                af: "af-ZA",
                ak: "ak-GH",
                am: "am-ET",
                an: "an-ES",
                ar: "ar-MA",
                as: "as-IN",
                ay: "ay-PE",
                az: "az-AZ",
                be: "be-BY",
                bg: "bg-BG",
                bi: "bi-TV",
                bn: "bn-BD",
                bo: "bo-CN",
                br: "br-FR",
                bs: "bs-BA",
                ca: "ca-ES",
                ce: "ce-RU",
                cs: "cs-CZ",
                cv: "cv-RU",
                cy: "cy-GB",
                da: "da-DK",
                de: "de-DE",
                dv: "dv-MV",
                dz: "dz-BT",
                el: "el-GR",
                en: "en-US",
                es: "es-ES",
                et: "et-EE",
                eu: "eu-ES",
                fa: "fa-IR",
                ff: "ff-SN",
                fi: "fi-FI",
                fo: "fo-FO",
                fr: "fr-FR",
                fy: "fy-DE",
                ga: "ga-IE",
                gd: "gd-GB",
                gl: "gl-ES",
                gu: "gu-IN",
                gv: "gv-GB",
                ha: "ha-NG",
                he: "he-IL",
                hi: "hi-IN",
                hr: "hr-HR",
                ht: "ht-HT",
                hu: "hu-HU",
                hy: "hy-AM",
                ia: "ia-FR",
                id: "id-ID",
                ig: "ig-NG",
                ik: "ik-CA",
                is: "is-IS",
                it: "it-IT",
                iu: "iu-CA",
                ja: "ja-JP",
                ka: "ka-GE",
                kk: "kk-KZ",
                kl: "kl-GL",
                km: "km-KH",
                kn: "kn-IN",
                ko: "ko-KR",
                ks: "ks-IN",
                ku: "ku-TR",
                kw: "kw-GB",
                ky: "ky-KG",
                lb: "lb-LU",
                lg: "lg-UG",
                li: "li-BE",
                ln: "ln-CD",
                lo: "lo-LA",
                lt: "lt-LT",
                lv: "lv-LV",
                mg: "mg-MG",
                mh: "mh-MH",
                mi: "mi-NZ",
                mk: "mk-MK",
                ml: "ml-IN",
                mn: "mn-MN",
                mr: "mr-IN",
                ms: "ms-MY",
                mt: "mt-MT",
                my: "my-MM",
                nb: "nb-NO",
                ne: "ne-NP",
                nl: "nl-NL",
                nn: "nn-NO",
                nr: "nr-ZA",
                oc: "oc-FR",
                om: "om-KE",
                or: "or-IN",
                os: "os-RU",
                pa: "pa-PK",
                pl: "pl-PL",
                ps: "ps-AF",
                pt: "pt-PT",
                ro: "ro-RO",
                ru: "ru-RU",
                rw: "rw-RW",
                sa: "sa-IN",
                sc: "sc-IT",
                sd: "sd-IN",
                se: "se-NO",
                si: "si-LK",
                sk: "sk-SK",
                sl: "sl-SI",
                so: "so-SO",
                sq: "sq-AL",
                sr: "sr-RS",
                ss: "ss-ZA",
                st: "st-ZA",
                sv: "sv-SE",
                sw: "sw-KE",
                ta: "ta-IN",
                te: "te-IN",
                tg: "tg-TJ",
                th: "th-TH",
                ti: "ti-ER",
                tk: "tk-TM",
                tl: "tl-PH",
                tn: "tn-ZA",
                tr: "tr-TR",
                ts: "ts-ZA",
                tt: "tt-RU",
                ug: "ug-CN",
                uk: "uk-UA",
                ur: "ur-PK",
                uz: "uz-UZ",
                ve: "ve-ZA",
                vi: "vi-VN",
                wa: "wa-BE",
                wo: "wo-SN",
                xh: "xh-ZA",
                yi: "yi-US",
                yo: "yo-NG",
                zh: "zh-CN",
                zu: "zu-ZA"
            }
        },
        533613: function(e, t, n) {
            "use strict";
            var i, l;
            n.r(t), n.d(t, {
                HotspotLocations: function() {
                    return i
                }
            }), (l = i || (i = {})).REPORT_PROBLEM_POST_STREAM = "REPORT_PROBLEM_POST_STREAM", l.VIDEO_BACKGROUND_FEEDBACK = "VIDEO_BACKGROUND_FEEDBACK", l.VOICE_CALL_FEEDBACK = "VOICE_CALL_FEEDBACK", l.GUILD_ANALYTICS_GUILD_SETTINGS_MENU = "GUILD_ANALYTICS_GUILD_SETTINGS_MENU", l.NOW_PLAYING_CONSENT_CARD = "NOW_PLAYING_CONSENT_CARD", l.IOS_GUILD_NAV_EDUCATION = "IOS_GUILD_NAV_EDUCATION", l.VOICE_PANEL_INTRODUCTION = "VOICE_PANEL_INTRODUCTION", l.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL = "GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL", l.FAVORITE_EMOJI_TOOLTIP = "FAVORITE_EMOJI_TOOLTIP", l.POST_ACTIVITY_FEEDBACK = "POST_ACTIVITY_FEEDBACK", l.GUILD_DELETE_FEEDBACK = "GUILD_DELETE_FEEDBACK", l.GUILD_LEAVE_FEEDBACK = "GUILD_LEAVE_FEEDBACK", l.APPLICATION_COMMAND_TOOLTIP = "APPLICATION_COMMAND_TOOLTIP", l.GUILD_CAP_INLINE_UPSELL = "GUILD_CAP_INLINE_UPSELL", l.STAGE_CHANNEL_UPSELL = "STAGE_CHANNEL_UPSELL", l.HUB_WAITLIST_UPSELL = "HUB_WAITLIST_UPSELL", l.HUB_NEW = "HUB_NEW", l.HUB_SECOND_EMAIL_CONNECTION_UPSELL = "HUB_SECOND_EMAIL_CONNECTION_UPSELL", l.LIVE_STAGE_NOTIFICATION_BADGE = "LIVE_STAGE_NOTIFICATION_BADGE", l.GUILD_EVENT_UPSELL = "GUILD_EVENT_UPSELL", l.HUB_LINK_CHANNEL_NOTICE = "HUB_LINK_CHANNEL_NOTICE", l.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP = "PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP", l.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP = "ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP", l.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL = "ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL", l.MULTI_ACCOUNT_TOOLTIP = "MULTI_ACCOUNT_TOOLTIP", l.HUB_STUDY_ROOM_NOTICE = "HUB_STUDY_ROOM_NOTICE", l.CHANNEL_BANNER_MEMBER_LIST_NOTICE = "CHANNEL_BANNER_MEMBER_LIST_NOTICE", l.CHANGE_LANGUAGE_MODAL = "CHANGE_LANGUAGE_MODAL", l.ACTIVITY_BEB_TUTORIAL = "ACTIVITY_BEB_TUTORIAL", l.APP_DIRECTORY_SETTINGS_NEW_PILL = "APP_DIRECTORY_SETTINGS_NEW_PILL", l.INVITE_SPLASH_GUILD_HEADER_TOOLTIP = "INVITE_SPLASH_GUILD_HEADER_TOOLTIP", l.ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW", l.ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW", l.ANIMATED_VIDEO_BG_HACKER_DEN_NEW = "ANIMATED_VIDEO_BG_HACKER_DEN_NEW", l.ANIMATED_VIDEO_BG_WUMPICE_NEW = "ANIMATED_VIDEO_BG_WUMPICE_NEW", l.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW = "ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW", l.ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW = "ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW", l.SOUNDBOARD_WHEEL_EDUCATION_MODAL = "SOUNDBOARD_WHEEL_EDUCATION_MODAL", l.IN_APP_REPORTS_FEEDBACK = "IN_APP_REPORTS_FEEDBACK", l.CLIPS_CHANNEL_ATTACH_REMINDER = "CLIPS_CHANNEL_ATTACH_REMINDER"
        },
        846325: function(e, t, n) {
            "use strict";
            var i, l;
            n.r(t), n.d(t, {
                MAX_LENGTH_SOUND_NAME: function() {
                    return u
                },
                MAX_SOUND_LENGTH_SECONDS: function() {
                    return r
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return s
                },
                SoundboardWheelSize: function() {
                    return _
                },
                DEFAULT_KEYBIND: function() {
                    return a
                },
                EMPTY_SOUND_LIST: function() {
                    return o
                },
                CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: function() {
                    return E
                },
                NUM_RECENTLY_HEARD_SOUNDS: function() {
                    return d
                }
            }), n("222007");
            let u = 32,
                r = 5,
                s = "DEFAULT";
            (l = i || (i = {}))[l.SUCCESS = 0] = "SUCCESS", l[l.INTERRUPTED = 1] = "INTERRUPTED";
            let _ = {
                    width: 424,
                    height: 424,
                    padding: 100
                },
                a = "ctrl+`",
                o = [],
                E = "0",
                d = 6
        },
        235004: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return G
                }
            }), n("222007"), n("424973"), n("834022");
            var i, l, u = n("917351"),
                r = n.n(u),
                s = n("446674"),
                _ = n("913144"),
                a = n("845579"),
                o = n("374363"),
                E = n("697218"),
                d = n("599110"),
                c = n("829536"),
                I = n("846325"),
                N = n("49111"),
                T = n("397336");
            (l = i || (i = {}))[l.NOT_FETCHED = 0] = "NOT_FETCHED", l[l.FETCHING = 1] = "FETCHING", l[l.FETCHED = 2] = "FETCHED";
            let A = new Map,
                D = new Map,
                L = new Set,
                O = 0,
                S = 0,
                f = new Set,
                g = new Map,
                U = !1;

            function C(e) {
                let {
                    sound: t
                } = e, n = A.get(t.guildId), i = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != i && -1 !== i ? (n[i] = t, A.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), A.set(t.guildId, [...n]))
            }
            let h = r.debounce(e => {
                d.default.track(N.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, c.amplitudeToPerceptual)(e))
                }), a.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function R(e) {
                var t, n;
                let i = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(i)) t.soundboardMuted ? L.add(e) : L.delete(e);
                for (let e of L.keys()) null == i[e] && L.delete(e)
            }
            class p extends s.default.Store {
                initialize() {
                    this.waitFor(o.default), R(o.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(A),
                        favoritedSoundIds: Array.from(f),
                        localSoundboardMutes: Array.from(L)
                    }
                }
                getSounds() {
                    return A
                }
                getSoundsForGuild(e) {
                    return A.get(e)
                }
                getSound(e, t) {
                    var n;
                    let i = null !== (n = A.get(e)) && void 0 !== n ? n : [];
                    return i.find(e => e.soundId === t)
                }
                getSoundById(e) {
                    let t = Array.from(A.values()).flat();
                    return t.find(t => t.soundId === e)
                }
                isFetchingSounds() {
                    return 1 === S
                }
                isFetchingDefaultSounds() {
                    return 1 === O
                }
                isFetching() {
                    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
                }
                shouldFetchDefaultSounds() {
                    return 0 === O
                }
                hasFetchedDefaultSounds() {
                    return 2 === O
                }
                isUserPlayingSounds(e) {
                    let t = g.get(e);
                    return null != t && t > 0
                }
                isPlayingSound(e) {
                    return null != D.get(e)
                }
                isFavoriteSound(e) {
                    return f.has(e)
                }
                getFavorites() {
                    return f
                }
                isLocalSoundboardMuted(e) {
                    return L.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return U
                }
                hasFetchedAllSounds() {
                    return 2 === S && 2 === O
                }
            }
            p.displayName = "SoundboardStore";
            var G = new p(_.default, {
                LOGOUT: function() {
                    A.clear(), D.clear(), g.clear(), U = !1, S = 0, O = 0
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    S = 1
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: C,
                GUILD_SOUNDBOARD_SOUND_UPDATE: C,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    let {
                        soundId: t,
                        guildId: n
                    } = e;
                    A.delete(t);
                    let i = A.get(n),
                        l = null == i ? void 0 : i.findIndex(e => e.soundId === t);
                    null != i && null != l && !(l < 0) && (i.splice(l, 1), A.set(n, [...i]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, i;
                    let {
                        soundId: l,
                        userId: u
                    } = e, r = (null !== (n = D.get(l)) && void 0 !== n ? n : 0) + 1, s = (null !== (i = g.get(u)) && void 0 !== i ? i : 0) + 1;
                    D.set(l, r), g.set(u, s), u !== (null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (U = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: i,
                        userId: l
                    } = e, u = (null !== (t = D.get(i)) && void 0 !== t ? t : 0) - 1, r = (null !== (n = g.get(l)) && void 0 !== n ? n : 0) - 1;
                    u <= 0 ? D.delete(i) : D.set(i, u), r <= 0 ? g.delete(l) : g.set(l, r)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    h(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    D.clear(), g.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e, {
                        type: n,
                        proto: i
                    } = t;
                    if (n === T.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var l, u;
                        f = new Set(null !== (u = null == i ? void 0 : null === (l = i.favoriteSoundboardSounds) || void 0 === l ? void 0 : l.soundIds) && void 0 !== u ? u : [])
                    } else n === T.UserSettingsTypes.PRELOADED_USER_SETTINGS && R(i)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    O = 1
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    A.set(I.DEFAULT_SOUND_GUILD_ID, t), O = 2
                },
                SOUNDBOARD_SOUNDS_RECEIVED: function(e) {
                    let {
                        updates: t
                    } = e;
                    t.forEach(e => {
                        let {
                            guildId: t,
                            sounds: n
                        } = e;
                        A.set(t, n)
                    }), S = 2
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    A.delete(t.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
                    let {
                        userId: t
                    } = e;
                    L.has(t) ? L.delete(t) : L.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        soundboardStoreState: t
                    } = e;
                    A = new Map(Object.entries(t.soundboardSounds)), f = new Set(t.favoritedSoundIds), L = new Set(t.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        soundboardSounds: n
                    } = e;
                    A.set(t, n)
                }
            })
        },
        829536: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                perceptualToAmplitude: function() {
                    return i
                },
                amplitudeToPerceptual: function() {
                    return l
                }
            });

            function i(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                return 0 === e ? 0 : (t = e > n ? (e - n) / n * 6 : e / n * 50 - 50, n * Math.pow(10, t / 20))
            }

            function l(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                if (0 === e) return 0;
                let i = 20 * Math.log10(e / n);
                return n * (t = i > 0 ? i / 6 + 1 : (50 + i) / 50)
            }
        },
        749866: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isSupported: function() {
                    return s
                },
                setEnabled: function() {
                    return a
                },
                setLearnedWords: function() {
                    return o
                },
                isMisspelled: function() {
                    return E
                },
                getCorrections: function() {
                    return d
                },
                replaceWithCorrection: function() {
                    return c
                },
                setAppLocale: function() {
                    return I
                },
                addResultListener: function() {
                    return N
                }
            });
            var i = n("49671"),
                l = n("852046"),
                u = n("773336");

            function r() {
                return (null === i.default || void 0 === i.default ? void 0 : i.default.spellCheck) != null
            }

            function s() {
                return (0, u.isDesktop)() && r()
            }
            let _ = s() ? (0, l.install)() : null;
            async function a(e) {
                let t = await _;
                null != t && (t.enabled = e)
            }
            async function o(e) {
                let t = await _;
                null != t && t.setLearnedWords(e)
            }
            async function E(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = await _;
                return null != n && n.isMisspelled(e, t)
            }
            async function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
                    i = await _;
                return null == i ? [] : i.getCorrectionsForMisspelling(e, t).slice(0, n)
            }
            async function c(e) {
                let t = await _;
                null != t && t.replaceMisspelling(e)
            }
            async function I(e) {
                let t = await _;
                null != t && t.setAppLocale(e)
            }

            function N(e) {
                if (!r()) return () => {};
                let t = i.default.spellCheck.on("spellcheck-result", e);
                return null != t ? t : () => {}
            }
        }
    }
]);
//# sourceMappingURL=ef7fab730fc37d0f37b4.js.map