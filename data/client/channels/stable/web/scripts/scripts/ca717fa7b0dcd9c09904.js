(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["4327"], {
        272030: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                closeContextMenu: function() {
                    return s
                },
                openContextMenu: function() {
                    return o
                },
                openContextMenuLazy: function() {
                    return a
                }
            });
            var l = n("913144"),
                i = n("244201"),
                u = n("773336"),
                _ = n("749866"),
                r = n("49111");

            function E(e) {
                l.default.dispatch({
                    type: "CONTEXT_MENU_OPEN",
                    contextMenu: e
                })
            }

            function s(e) {
                {
                    let {
                        flushSync: t
                    } = n("817736");
                    t(() => {
                        l.default.wait(() => {
                            l.default.dispatch({
                                type: "CONTEXT_MENU_CLOSE"
                            }).finally(e)
                        })
                    })
                }
            }

            function o(e, t, n, l) {
                var s, o, a;
                if (e.stopPropagation(), null != e.currentTarget.contains && !e.currentTarget.contains(e.target)) return;
                let d = 0,
                    T = 0;
                if ("pageX" in e && (d = e.pageX, T = e.pageY), 0 === d && 0 === T) {
                    let t = null === (s = e.target) || void 0 === s ? void 0 : s.getBoundingClientRect(),
                        {
                            left: n = 0,
                            top: l = 0,
                            width: i = 0,
                            height: u = 0
                        } = null != t ? t : {};
                    d = n + i / 2, T = l + u / 2
                }
                let I = {
                    render: t,
                    renderLazy: l,
                    target: null !== (o = e.target) && void 0 !== o ? o : e.currentTarget,
                    rect: new DOMRect(d, T, 0, 0),
                    config: {
                        context: __OVERLAY__ ? r.AppContext.OVERLAY : null !== (a = (0, i.getCurrentlyInteractingAppContext)()) && void 0 !== a ? a : r.AppContext.APP,
                        ...n
                    }
                };
                if ((null == n ? void 0 : n.enableSpellCheck) && (0, u.isDesktop)()) {
                    let e = (0, _.addResultListener)(() => {
                        e(), E(I)
                    })
                } else e.preventDefault(), E(I)
            }

            function a(e, t, n) {
                o(e, void 0, n, t)
            }
        },
        851234: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("50885");
            class i {
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
                    return L
                }
            });
            var l, i = n("78349"),
                u = n("917351"),
                _ = n.n(u),
                r = n("118810"),
                E = n("49671"),
                s = n("605250"),
                o = n("915639"),
                a = n("449008"),
                d = n("851234"),
                T = n("648610");
            let I = new s.default("Spellchecker"),
                N = null === (l = E.default) || void 0 === l ? void 0 : l.spellCheck;

            function c(e) {
                var t;
                e = null !== (t = T.default[e]) && void 0 !== t ? t : e;
                let n = (0, i.parse)(e.replace(/[_-]/g, "-"));
                if (null == n || null == n.langtag.language || null == n.langtag.region) {
                    I.error("".concat(e, " is not a valid locale."));
                    return
                }
                let {
                    language: l,
                    region: u
                } = n.langtag;
                return "".concat(l.language.toLowerCase(), "-").concat(u.toUpperCase())
            }
            class A {
                get enabled() {
                    return this._enabled
                }
                set enabled(e) {
                    this._enabled = e
                }
                setLearnedWords(e) {
                    N.setLearnedWords(e)
                }
                setLocale(e) {
                    var t;
                    null === (t = N.setLocale(e)) || void 0 === t || t.then(t => {
                        I.info("Switching to ".concat(e), t ? "(available)" : "(unavailable)")
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
                        let [l] = e.split("-");
                        t[l] = null !== (n = t[l]) && void 0 !== n ? n : e
                    }), t
                }
                isMisspelled(e, t) {
                    return "" !== this.misspelledWord && e === this.misspelledWord
                }
                getCorrectionsForMisspelling(e, t) {
                    return this.isMisspelled(e, t) ? this.corrections : []
                }
                replaceMisspelling(e) {
                    N.replaceMisspelling(e)
                }
                constructor(e) {
                    this._enabled = !0, this.misspelledWord = "", this.corrections = [];
                    let [t, n] = o.default.locale.split("-");
                    this.regionPreference = n;
                    let l = this.getAvailableLanguages(e);
                    this.languageDetector = new d.default(t, n => {
                        let i = "".concat(n, "-").concat(this.regionPreference);
                        if (-1 !== e.indexOf(i)) this.setLocale(i);
                        else {
                            var u;
                            let e = null !== (u = l[n]) && void 0 !== u ? u : T.default[t];
                            null != e && this.setLocale(e)
                        }
                    }), N.on("spellcheck-result", (e, t) => {
                        this.misspelledWord = null != e ? e : "", this.corrections = null != t ? t : []
                    })
                }
            }
            let D = _.debounce((e, t) => {
                let n = function(e) {
                    return null == e ? null : (0, r.isElement)(e, HTMLInputElement) || (0, r.isElement)(e, HTMLTextAreaElement) ? e.value : (0, r.isElement)(e) && e.hasAttribute("contenteditable") ? e.textContent : void 0
                }(t);
                null != n && e.detectLanguage(n)
            }, 250);
            async function L() {
                var e, t;
                let n = null !== (e = await N.getAvailableDictionaries()) && void 0 !== e ? e : [],
                    l = n.map(c).filter(a.isNotNullish),
                    i = new A(l);
                return t = i, null != document.body && document.body.addEventListener("beforeinput", e => D(t, e.target), !0), i
            }
        },
        648610: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var l = {
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
            var l, i;
            n.r(t), n.d(t, {
                HotspotLocations: function() {
                    return l
                }
            }), (i = l || (l = {})).REPORT_PROBLEM_POST_STREAM = "REPORT_PROBLEM_POST_STREAM", i.VIDEO_BACKGROUND_FEEDBACK = "VIDEO_BACKGROUND_FEEDBACK", i.VOICE_CALL_FEEDBACK = "VOICE_CALL_FEEDBACK", i.GUILD_ANALYTICS_GUILD_SETTINGS_MENU = "GUILD_ANALYTICS_GUILD_SETTINGS_MENU", i.NOW_PLAYING_CONSENT_CARD = "NOW_PLAYING_CONSENT_CARD", i.IOS_GUILD_NAV_EDUCATION = "IOS_GUILD_NAV_EDUCATION", i.VOICE_PANEL_INTRODUCTION = "VOICE_PANEL_INTRODUCTION", i.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL = "GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL", i.FAVORITE_EMOJI_TOOLTIP = "FAVORITE_EMOJI_TOOLTIP", i.POST_ACTIVITY_FEEDBACK = "POST_ACTIVITY_FEEDBACK", i.GUILD_DELETE_FEEDBACK = "GUILD_DELETE_FEEDBACK", i.GUILD_LEAVE_FEEDBACK = "GUILD_LEAVE_FEEDBACK", i.APPLICATION_COMMAND_TOOLTIP = "APPLICATION_COMMAND_TOOLTIP", i.GUILD_CAP_INLINE_UPSELL = "GUILD_CAP_INLINE_UPSELL", i.STAGE_CHANNEL_UPSELL = "STAGE_CHANNEL_UPSELL", i.HUB_WAITLIST_UPSELL = "HUB_WAITLIST_UPSELL", i.HUB_NEW = "HUB_NEW", i.HUB_SECOND_EMAIL_CONNECTION_UPSELL = "HUB_SECOND_EMAIL_CONNECTION_UPSELL", i.LIVE_STAGE_NOTIFICATION_BADGE = "LIVE_STAGE_NOTIFICATION_BADGE", i.GUILD_EVENT_UPSELL = "GUILD_EVENT_UPSELL", i.HUB_LINK_CHANNEL_NOTICE = "HUB_LINK_CHANNEL_NOTICE", i.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP = "PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP", i.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP = "ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP", i.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL = "ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL", i.MULTI_ACCOUNT_TOOLTIP = "MULTI_ACCOUNT_TOOLTIP", i.HUB_STUDY_ROOM_NOTICE = "HUB_STUDY_ROOM_NOTICE", i.CHANNEL_BANNER_MEMBER_LIST_NOTICE = "CHANNEL_BANNER_MEMBER_LIST_NOTICE", i.CHANGE_LANGUAGE_MODAL = "CHANGE_LANGUAGE_MODAL", i.ACTIVITY_BEB_TUTORIAL = "ACTIVITY_BEB_TUTORIAL", i.APP_DIRECTORY_SETTINGS_NEW_PILL = "APP_DIRECTORY_SETTINGS_NEW_PILL", i.INVITE_SPLASH_GUILD_HEADER_TOOLTIP = "INVITE_SPLASH_GUILD_HEADER_TOOLTIP", i.ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW", i.ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW", i.ANIMATED_VIDEO_BG_HACKER_DEN_NEW = "ANIMATED_VIDEO_BG_HACKER_DEN_NEW", i.ANIMATED_VIDEO_BG_WUMPICE_NEW = "ANIMATED_VIDEO_BG_WUMPICE_NEW", i.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW = "ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW", i.ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW = "ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW", i.SOUNDBOARD_WHEEL_EDUCATION_MODAL = "SOUNDBOARD_WHEEL_EDUCATION_MODAL", i.IN_APP_REPORTS_FEEDBACK = "IN_APP_REPORTS_FEEDBACK", i.CLIPS_CHANNEL_ATTACH_REMINDER = "CLIPS_CHANNEL_ATTACH_REMINDER"
        },
        846325: function(e, t, n) {
            "use strict";
            var l, i;
            n.r(t), n.d(t, {
                MAX_LENGTH_SOUND_NAME: function() {
                    return u
                },
                MAX_SOUND_LENGTH_SECONDS: function() {
                    return _
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return r
                },
                SoundboardWheelSize: function() {
                    return E
                },
                DEFAULT_KEYBIND: function() {
                    return s
                },
                EMPTY_SOUND_LIST: function() {
                    return o
                },
                CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: function() {
                    return a
                }
            });
            let u = 32,
                _ = 5,
                r = "DEFAULT";
            (i = l || (l = {}))[i.SUCCESS = 0] = "SUCCESS", i[i.INTERRUPTED = 1] = "INTERRUPTED", l.SUCCESS, l.INTERRUPTED;
            let E = {
                    width: 424,
                    height: 424,
                    padding: 100
                },
                s = "ctrl+`",
                o = [],
                a = "0"
        },
        235004: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return G
                }
            });
            var l, i, u = n("917351"),
                _ = n.n(u),
                r = n("446674"),
                E = n("913144"),
                s = n("845579"),
                o = n("374363"),
                a = n("697218"),
                d = n("599110"),
                T = n("829536"),
                I = n("846325"),
                N = n("49111"),
                c = n("397336");
            (l = i || (i = {}))[l.NOT_FETCHED = 0] = "NOT_FETCHED", l[l.FETCHING = 1] = "FETCHING", l[l.FETCHED = 2] = "FETCHED";
            let A = new Map,
                D = new Map,
                L = new Set,
                O = i.NOT_FETCHED,
                S = i.NOT_FETCHED,
                C = new Set,
                U = new Map,
                g = !1;

            function f(e) {
                let {
                    sound: t
                } = e, n = A.get(t.guildId), l = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != l && -1 !== l ? (n[l] = t, A.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), A.set(t.guildId, [...n]))
            }
            let h = _.debounce(e => {
                d.default.track(N.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, T.amplitudeToPerceptual)(e))
                }), s.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function R(e) {
                var t, n;
                let l = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(l)) t.soundboardMuted ? L.add(e) : L.delete(e);
                for (let e of L.keys()) null == l[e] && L.delete(e)
            }
            class p extends r.default.Store {
                initialize() {
                    this.waitFor(o.default), R(o.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(A),
                        favoritedSoundIds: Array.from(C),
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
                    let l = null !== (n = A.get(e)) && void 0 !== n ? n : [];
                    return l.find(e => e.soundId === t)
                }
                getSoundById(e) {
                    let t = Array.from(A.values()).flat();
                    return t.find(t => t.soundId === e)
                }
                isFetchingSounds() {
                    return S === i.FETCHING
                }
                isFetchingDefaultSounds() {
                    return O === i.FETCHING
                }
                isFetching() {
                    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
                }
                shouldFetchDefaultSounds() {
                    return O === i.NOT_FETCHED
                }
                hasFetchedDefaultSounds() {
                    return O === i.FETCHED
                }
                isUserPlayingSounds(e) {
                    let t = U.get(e);
                    return null != t && t > 0
                }
                isPlayingSound(e) {
                    return null != D.get(e)
                }
                isFavoriteSound(e) {
                    return C.has(e)
                }
                getFavorites() {
                    return C
                }
                isLocalSoundboardMuted(e) {
                    return L.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return g
                }
                hasFetchedAllSounds() {
                    return S === i.FETCHED && O === i.FETCHED
                }
            }
            p.displayName = "SoundboardStore";
            var G = new p(E.default, {
                LOGOUT: function() {
                    A.clear(), D.clear(), U.clear(), g = !1, S = i.NOT_FETCHED, O = i.NOT_FETCHED
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    S = i.FETCHING
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: f,
                GUILD_SOUNDBOARD_SOUND_UPDATE: f,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    let {
                        soundId: t,
                        guildId: n
                    } = e;
                    A.delete(t);
                    let l = A.get(n),
                        i = null == l ? void 0 : l.findIndex(e => e.soundId === t);
                    null != l && null != i && !(i < 0) && (l.splice(i, 1), A.set(n, [...l]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, l;
                    let {
                        soundId: i,
                        userId: u
                    } = e, _ = (null !== (n = D.get(i)) && void 0 !== n ? n : 0) + 1, r = (null !== (l = U.get(u)) && void 0 !== l ? l : 0) + 1;
                    D.set(i, _), U.set(u, r), u !== (null === (t = a.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (g = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: l,
                        userId: i
                    } = e, u = (null !== (t = D.get(l)) && void 0 !== t ? t : 0) - 1, _ = (null !== (n = U.get(i)) && void 0 !== n ? n : 0) - 1;
                    u <= 0 ? D.delete(l) : D.set(l, u), _ <= 0 ? U.delete(i) : U.set(i, _)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    h(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    D.clear(), U.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e, {
                        type: n,
                        proto: l
                    } = t;
                    if (n === c.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var i, u;
                        C = new Set(null !== (u = null == l ? void 0 : null === (i = l.favoriteSoundboardSounds) || void 0 === i ? void 0 : i.soundIds) && void 0 !== u ? u : [])
                    } else n === c.UserSettingsTypes.PRELOADED_USER_SETTINGS && R(l)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    O = i.FETCHING
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    A.set(I.DEFAULT_SOUND_GUILD_ID, t), O = i.FETCHED
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
                    }), S = i.FETCHED
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
                    A = new Map(Object.entries(t.soundboardSounds)), C = new Set(t.favoritedSoundIds), L = new Set(t.localSoundboardMutes)
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
                    return l
                },
                amplitudeToPerceptual: function() {
                    return i
                }
            });

            function l(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                return 0 === e ? 0 : (t = e > n ? (e - n) / n * 6 : e / n * 50 - 50, n * Math.pow(10, t / 20))
            }

            function i(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                if (0 === e) return 0;
                let l = 20 * Math.log10(e / n);
                return n * (t = l > 0 ? l / 6 + 1 : (50 + l) / 50)
            }
        },
        749866: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isSupported: function() {
                    return r
                },
                setEnabled: function() {
                    return s
                },
                setLearnedWords: function() {
                    return o
                },
                isMisspelled: function() {
                    return a
                },
                getCorrections: function() {
                    return d
                },
                replaceWithCorrection: function() {
                    return T
                },
                setAppLocale: function() {
                    return I
                },
                addResultListener: function() {
                    return N
                }
            });
            var l = n("49671"),
                i = n("852046"),
                u = n("773336");

            function _() {
                var e;
                return (null === (e = l.default) || void 0 === e ? void 0 : e.spellCheck) != null
            }

            function r() {
                return (0, u.isDesktop)() && _()
            }
            let E = r() ? (0, i.install)() : null;
            async function s(e) {
                let t = await E;
                null != t && (t.enabled = e)
            }
            async function o(e) {
                let t = await E;
                null != t && t.setLearnedWords(e)
            }
            async function a(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = await E;
                return null != n && n.isMisspelled(e, t)
            }
            async function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
                    l = await E;
                return null == l ? [] : l.getCorrectionsForMisspelling(e, t).slice(0, n)
            }
            async function T(e) {
                let t = await E;
                null != t && t.replaceMisspelling(e)
            }
            async function I(e) {
                let t = await E;
                null != t && t.setAppLocale(e)
            }

            function N(e) {
                if (!_()) return () => {};
                let t = l.default.spellCheck.on("spellcheck-result", e);
                return null != t ? t : () => {}
            }
        }
    }
]);
//# sourceMappingURL=ca717fa7b0dcd9c09904.js.map