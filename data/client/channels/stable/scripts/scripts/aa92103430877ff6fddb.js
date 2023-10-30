(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["39377"], {
        272030: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                closeContextMenu: function() {
                    return o
                },
                openContextMenu: function() {
                    return c
                },
                openContextMenuLazy: function() {
                    return S
                }
            });
            var i = n("913144"),
                l = n("244201"),
                s = n("773336"),
                r = n("749866"),
                u = n("49111");

            function a(e) {
                i.default.dispatch({
                    type: "CONTEXT_MENU_OPEN",
                    contextMenu: e
                })
            }

            function o(e) {
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

            function c(e, t, n, i) {
                var o, c, S;
                if (e.stopPropagation(), null != e.currentTarget.contains && !e.currentTarget.contains(e.target)) return;
                let _ = 0,
                    E = 0;
                if ("pageX" in e && (_ = e.pageX, E = e.pageY), 0 === _ && 0 === E) {
                    let t = null === (o = e.target) || void 0 === o ? void 0 : o.getBoundingClientRect(),
                        {
                            left: n = 0,
                            top: i = 0,
                            width: l = 0,
                            height: s = 0
                        } = null != t ? t : {};
                    _ = n + l / 2, E = i + s / 2
                }
                let O = {
                    render: t,
                    renderLazy: i,
                    target: null !== (c = e.target) && void 0 !== c ? c : e.currentTarget,
                    rect: new DOMRect(_, E, 0, 0),
                    config: {
                        context: __OVERLAY__ ? u.AppContext.OVERLAY : null !== (S = (0, l.getCurrentlyInteractingAppContext)()) && void 0 !== S ? S : u.AppContext.APP,
                        ...n
                    }
                };
                if ((null == n ? void 0 : n.enableSpellCheck) && (0, s.isDesktop)()) {
                    let e = (0, r.addResultListener)(() => {
                        e(), a(O)
                    })
                } else e.preventDefault(), a(O)
            }

            function S(e, t, n) {
                c(e, void 0, n, t)
            }
        },
        851234: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("50885");
            class l {
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
                        var n, l;
                        let s = t.timeRemaining();
                        if (s <= this._minimumTimeRemaining) {
                            this._processEnd();
                            return
                        }
                        e.length > 256 && (e = e.slice(0, 256)), (n = e, l = this._languageHint, i.default.ensureModule("discord_spellcheck").then(() => {
                            let {
                                cld: e
                            } = i.default.requireModule("discord_spellcheck");
                            return new Promise((t, i) => {
                                e.detect(n, {
                                    httpHint: l,
                                    encodingHint: "UTF8"
                                }, (e, n) => {
                                    null != e ? i(Error(e.message)) : !n.reliable || n.languages[0].percent < 90 || n.languages[0].score < 500 ? i(Error("Not enough reliable text.")) : t(n.languages[0].code)
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
                    return f
                }
            });
            var i, l = n("78349"),
                s = n("917351"),
                r = n.n(s),
                u = n("118810"),
                a = n("49671"),
                o = n("605250"),
                c = n("915639"),
                S = n("449008"),
                _ = n("851234"),
                E = n("648610");
            let O = new o.default("Spellchecker"),
                T = null === (i = a.default) || void 0 === i ? void 0 : i.spellCheck;

            function d(e) {
                var t;
                e = null !== (t = E.default[e]) && void 0 !== t ? t : e;
                let n = (0, l.parse)(e.replace(/[_-]/g, "-"));
                if (null == n || null == n.langtag.language || null == n.langtag.region) {
                    O.error("".concat(e, " is not a valid locale."));
                    return
                }
                let {
                    language: i,
                    region: s
                } = n.langtag;
                return "".concat(i.language.toLowerCase(), "-").concat(s.toUpperCase())
            }
            class g {
                get enabled() {
                    return this._enabled
                }
                set enabled(e) {
                    this._enabled = e
                }
                setLearnedWords(e) {
                    T.setLearnedWords(e)
                }
                setLocale(e) {
                    var t;
                    null === (t = T.setLocale(e)) || void 0 === t || t.then(t => {
                        O.info("Switching to ".concat(e), t ? "(available)" : "(unavailable)")
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
                    T.replaceMisspelling(e)
                }
                constructor(e) {
                    this._enabled = !0, this.misspelledWord = "", this.corrections = [];
                    let [t, n] = c.default.locale.split("-");
                    this.regionPreference = n;
                    let i = this.getAvailableLanguages(e);
                    this.languageDetector = new _.default(t, n => {
                        let l = "".concat(n, "-").concat(this.regionPreference);
                        if (-1 !== e.indexOf(l)) this.setLocale(l);
                        else {
                            var s;
                            let e = null !== (s = i[n]) && void 0 !== s ? s : E.default[t];
                            null != e && this.setLocale(e)
                        }
                    }), T.on("spellcheck-result", (e, t) => {
                        this.misspelledWord = null != e ? e : "", this.corrections = null != t ? t : []
                    })
                }
            }
            let R = r.debounce((e, t) => {
                let n = function(e) {
                    return null == e ? null : (0, u.isElement)(e, HTMLInputElement) || (0, u.isElement)(e, HTMLTextAreaElement) ? e.value : (0, u.isElement)(e) && e.hasAttribute("contenteditable") ? e.textContent : void 0
                }(t);
                null != n && e.detectLanguage(n)
            }, 250);
            async function f() {
                var e, t;
                let n = null !== (e = await T.getAvailableDictionaries()) && void 0 !== e ? e : [],
                    i = n.map(d).filter(S.isNotNullish),
                    l = new g(i);
                return t = l, null != document.body && document.body.addEventListener("beforeinput", e => R(t, e.target), !0), l
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
        686298: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ApplicationStreamResolutions: function() {
                    return r
                },
                getApplicationResolution: function() {
                    return _
                },
                ApplicationStreamFPS: function() {
                    return u
                },
                ApplicationStreamPresets: function() {
                    return a
                },
                getApplicationFramerate: function() {
                    return E
                },
                ApplicationStreamPresetValues: function() {
                    return O
                },
                ApplicationStreamSettingRequirements: function() {
                    return T
                },
                ApplicationStreamResolutionButtons: function() {
                    return g
                },
                GoLiveDeviceResolutionButtons: function() {
                    return R
                },
                ApplicationStreamResolutionButtonsWithSuffixLabel: function() {
                    return p
                },
                ApplicationStreamFPSButtons: function() {
                    return I
                },
                ApplicationStreamFPSButtonsWithSuffixLabel: function() {
                    return N
                }
            });
            var i, l, s, r, u, a, o = n("49111"),
                c = n("646718"),
                S = n("782340");

            function _(e) {
                switch (e) {
                    case r.RESOLUTION_480:
                        return r.RESOLUTION_480;
                    case r.RESOLUTION_720:
                        return r.RESOLUTION_720;
                    case r.RESOLUTION_1080:
                        return r.RESOLUTION_1080;
                    case r.RESOLUTION_SOURCE:
                        return r.RESOLUTION_SOURCE;
                    default:
                        throw Error("Unknown resolution: ".concat(e))
                }
            }

            function E(e) {
                switch (e) {
                    case u.FPS_5:
                        return u.FPS_5;
                    case u.FPS_15:
                        return u.FPS_15;
                    case u.FPS_30:
                        return u.FPS_30;
                    case u.FPS_60:
                        return u.FPS_60;
                    default:
                        throw Error("Unknown frame rate: ".concat(e))
                }
            }(i = r || (r = {}))[i.RESOLUTION_480 = 480] = "RESOLUTION_480", i[i.RESOLUTION_720 = 720] = "RESOLUTION_720", i[i.RESOLUTION_1080 = 1080] = "RESOLUTION_1080", i[i.RESOLUTION_1440 = 1440] = "RESOLUTION_1440", i[i.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE", (l = u || (u = {}))[l.FPS_5 = 5] = "FPS_5", l[l.FPS_15 = 15] = "FPS_15", l[l.FPS_30 = 30] = "FPS_30", l[l.FPS_60 = 60] = "FPS_60", (s = a || (a = {}))[s.PRESET_VIDEO = 1] = "PRESET_VIDEO", s[s.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS", s[s.PRESET_CUSTOM = 3] = "PRESET_CUSTOM";
            let O = {
                    [a.PRESET_DOCUMENTS]: [{
                        resolution: r.RESOLUTION_SOURCE,
                        fps: u.FPS_15
                    }, {
                        resolution: r.RESOLUTION_SOURCE,
                        fps: u.FPS_5
                    }],
                    [a.PRESET_VIDEO]: [{
                        resolution: r.RESOLUTION_1440,
                        fps: u.FPS_60
                    }, {
                        resolution: r.RESOLUTION_1080,
                        fps: u.FPS_60
                    }, {
                        resolution: r.RESOLUTION_720,
                        fps: u.FPS_60
                    }, {
                        resolution: r.RESOLUTION_720,
                        fps: u.FPS_30
                    }],
                    [a.PRESET_CUSTOM]: []
                },
                T = [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: u.FPS_60,
                    quality: c.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: u.FPS_30,
                    quality: c.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: u.FPS_15,
                    quality: c.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: u.FPS_5,
                    preset: a.PRESET_DOCUMENTS
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: u.FPS_60,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: c.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: u.FPS_30,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: c.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: u.FPS_15,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: c.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: u.FPS_60,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: c.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: u.FPS_30,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: c.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: u.FPS_15,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: c.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: u.FPS_60,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_1,
                    quality: c.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: u.FPS_30
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: u.FPS_15
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: u.FPS_5
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: u.FPS_60,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_1,
                    quality: c.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: u.FPS_30
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: u.FPS_15
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: u.FPS_5
                }];

            function d(e, t) {
                return {
                    value: e,
                    get label() {
                        return null != t ? t() : e
                    }
                }
            }
            let g = [d(r.RESOLUTION_720), d(r.RESOLUTION_1080), d(r.RESOLUTION_1440), d(r.RESOLUTION_SOURCE, () => S.default.Messages.SCREENSHARE_SOURCE)],
                R = [d(r.RESOLUTION_720), d(r.RESOLUTION_1080), d(r.RESOLUTION_1440)],
                f = e => "".concat(e, "p"),
                p = [d(r.RESOLUTION_480, () => f(r.RESOLUTION_480)), d(r.RESOLUTION_720, () => f(r.RESOLUTION_720)), d(r.RESOLUTION_1080, () => f(r.RESOLUTION_1080)), d(r.RESOLUTION_1440, () => f(r.RESOLUTION_1440)), d(r.RESOLUTION_SOURCE, () => S.default.Messages.SCREENSHARE_SOURCE)],
                I = [d(u.FPS_15), d(u.FPS_30), d(u.FPS_60)],
                N = [d(u.FPS_15, () => S.default.Messages.STREAM_FPS_OPTION.format({
                    value: u.FPS_15
                })), d(u.FPS_30, () => S.default.Messages.STREAM_FPS_OPTION.format({
                    value: u.FPS_30
                })), d(u.FPS_60, () => S.default.Messages.STREAM_FPS_OPTION.format({
                    value: u.FPS_60
                }))]
        },
        749866: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isSupported: function() {
                    return u
                },
                setEnabled: function() {
                    return o
                },
                setLearnedWords: function() {
                    return c
                },
                isMisspelled: function() {
                    return S
                },
                getCorrections: function() {
                    return _
                },
                replaceWithCorrection: function() {
                    return E
                },
                setAppLocale: function() {
                    return O
                },
                addResultListener: function() {
                    return T
                }
            });
            var i = n("49671"),
                l = n("852046"),
                s = n("773336");

            function r() {
                var e;
                return (null === (e = i.default) || void 0 === e ? void 0 : e.spellCheck) != null
            }

            function u() {
                return (0, s.isDesktop)() && r()
            }
            let a = u() ? (0, l.install)() : null;
            async function o(e) {
                let t = await a;
                null != t && (t.enabled = e)
            }
            async function c(e) {
                let t = await a;
                null != t && t.setLearnedWords(e)
            }
            async function S(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = await a;
                return null != n && n.isMisspelled(e, t)
            }
            async function _(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
                    i = await a;
                return null == i ? [] : i.getCorrectionsForMisspelling(e, t).slice(0, n)
            }
            async function E(e) {
                let t = await a;
                null != t && t.replaceMisspelling(e)
            }
            async function O(e) {
                let t = await a;
                null != t && t.setAppLocale(e)
            }

            function T(e) {
                if (!r()) return () => {};
                let t = i.default.spellCheck.on("spellcheck-result", e);
                return null != t ? t : () => {}
            }
        }
    }
]);
//# sourceMappingURL=aa92103430877ff6fddb.js.map