(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["96897"], {
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
                    return d
                }
            }), n("506083");
            var i = n("913144"),
                l = n("244201"),
                s = n("773336"),
                a = n("749866"),
                r = n("49111");

            function u(e) {
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
                var o, c, d;
                if (e.stopPropagation(), null != e.currentTarget.contains && !e.currentTarget.contains(e.target)) return;
                let g = 0,
                    h = 0;
                if ("pageX" in e && (g = e.pageX, h = e.pageY), 0 === g && 0 === h) {
                    let t = null === (o = e.target) || void 0 === o ? void 0 : o.getBoundingClientRect(),
                        {
                            left: n = 0,
                            top: i = 0,
                            width: l = 0,
                            height: s = 0
                        } = null != t ? t : {};
                    g = n + l / 2, h = i + s / 2
                }
                let f = {
                    render: t,
                    renderLazy: i,
                    target: null !== (c = e.target) && void 0 !== c ? c : e.currentTarget,
                    rect: new DOMRect(g, h, 0, 0),
                    config: {
                        context: __OVERLAY__ ? r.AppContext.OVERLAY : null !== (d = (0, l.getCurrentlyInteractingAppContext)()) && void 0 !== d ? d : r.AppContext.APP,
                        ...n
                    }
                };
                if ((null == n ? void 0 : n.enableSpellCheck) && (0, s.isDesktop)()) {
                    let e = (0, a.addResultListener)(() => {
                        e(), u(f)
                    })
                } else e.preventDefault(), u(f)
            }

            function d(e, t, n) {
                c(e, void 0, n, t)
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
                        let s = t.timeRemaining();
                        if (s <= this._minimumTimeRemaining) {
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
                    return b
                }
            }), n("781738"), n("222007");
            var i = n("78349"),
                l = n("917351"),
                s = n.n(l),
                a = n("118810"),
                r = n("49671"),
                u = n("605250"),
                o = n("915639"),
                c = n("449008"),
                d = n("851234"),
                g = n("648610");
            let h = new u.default("Spellchecker"),
                f = null === r.default || void 0 === r.default ? void 0 : r.default.spellCheck;

            function p(e) {
                var t;
                e = null !== (t = g.default[e]) && void 0 !== t ? t : e;
                let n = (0, i.parse)(e.replace(/[_-]/g, "-"));
                if (null == n || null == n.langtag.language || null == n.langtag.region) {
                    h.error("".concat(e, " is not a valid locale."));
                    return
                }
                let {
                    language: l,
                    region: s
                } = n.langtag;
                return "".concat(l.language.toLowerCase(), "-").concat(s.toUpperCase())
            }
            class m {
                get enabled() {
                    return this._enabled
                }
                set enabled(e) {
                    this._enabled = e
                }
                setLearnedWords(e) {
                    f.setLearnedWords(e)
                }
                setLocale(e) {
                    var t;
                    null === (t = f.setLocale(e)) || void 0 === t || t.then(t => {
                        h.info("Switching to ".concat(e), t ? "(available)" : "(unavailable)")
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
                    f.replaceMisspelling(e)
                }
                constructor(e) {
                    this._enabled = !0, this.misspelledWord = "", this.corrections = [];
                    let [t, n] = o.default.locale.split("-");
                    this.regionPreference = n;
                    let i = this.getAvailableLanguages(e);
                    this.languageDetector = new d.default(t, n => {
                        let l = "".concat(n, "-").concat(this.regionPreference);
                        if (-1 !== e.indexOf(l)) this.setLocale(l);
                        else {
                            var s;
                            let e = null !== (s = i[n]) && void 0 !== s ? s : g.default[t];
                            null != e && this.setLocale(e)
                        }
                    }), f.on("spellcheck-result", (e, t) => {
                        this.misspelledWord = null != e ? e : "", this.corrections = null != t ? t : []
                    })
                }
            }
            let v = s.debounce((e, t) => {
                let n = function(e) {
                    return null == e ? null : (0, a.isElement)(e, HTMLInputElement) || (0, a.isElement)(e, HTMLTextAreaElement) ? e.value : (0, a.isElement)(e) && e.hasAttribute("contenteditable") ? e.textContent : void 0
                }(t);
                null != n && e.detectLanguage(n)
            }, 250);
            async function b() {
                var e, t;
                let n = null !== (e = await f.getAvailableDictionaries()) && void 0 !== e ? e : [],
                    i = n.map(p).filter(c.isNotNullish),
                    l = new m(i);
                return t = l, null != document.body && document.body.addEventListener("beforeinput", e => v(t, e.target), !0), l
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
        616265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = {
                openCreateGuildModal: e => {
                    n.el("297267").then(n.bind(n, "297267")).then(t => {
                        let {
                            openCreateGuildModal: n
                        } = t;
                        return n(e)
                    })
                },
                updateCreateGuildModal: e => {
                    n.el("297267").then(n.bind(n, "297267")).then(t => {
                        let {
                            updateCreateGuildModal: n
                        } = t;
                        return n(e)
                    })
                }
            }
        },
        749866: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isSupported: function() {
                    return r
                },
                setEnabled: function() {
                    return o
                },
                setLearnedWords: function() {
                    return c
                },
                isMisspelled: function() {
                    return d
                },
                getCorrections: function() {
                    return g
                },
                replaceWithCorrection: function() {
                    return h
                },
                setAppLocale: function() {
                    return f
                },
                addResultListener: function() {
                    return p
                }
            });
            var i = n("49671"),
                l = n("852046"),
                s = n("773336");

            function a() {
                return (null === i.default || void 0 === i.default ? void 0 : i.default.spellCheck) != null
            }

            function r() {
                return (0, s.isDesktop)() && a()
            }
            let u = r() ? (0, l.install)() : null;
            async function o(e) {
                let t = await u;
                null != t && (t.enabled = e)
            }
            async function c(e) {
                let t = await u;
                null != t && t.setLearnedWords(e)
            }
            async function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = await u;
                return null != n && n.isMisspelled(e, t)
            }
            async function g(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
                    i = await u;
                return null == i ? [] : i.getCorrectionsForMisspelling(e, t).slice(0, n)
            }
            async function h(e) {
                let t = await u;
                null != t && t.replaceMisspelling(e)
            }
            async function f(e) {
                let t = await u;
                null != t && t.setAppLocale(e)
            }

            function p(e) {
                if (!a()) return () => {};
                let t = i.default.spellCheck.on("spellcheck-result", e);
                return null != t ? t : () => {}
            }
        }
    }
]);
//# sourceMappingURL=96897.008f2a416a4c547f02a7.js.map