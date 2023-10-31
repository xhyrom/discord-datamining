(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["40235"], {
        952110: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                emojiTermsImporter: function() {
                    return n
                }
            });
            let n = {
                bg: () => i.el("326778").then(i.t.bind(i, "326778", 19)),
                cs: () => i.el("838264").then(i.t.bind(i, "838264", 19)),
                da: () => i.el("573975").then(i.t.bind(i, "573975", 19)),
                de: () => i.el("4282").then(i.t.bind(i, "4282", 19)),
                el: () => i.el("16046").then(i.t.bind(i, "16046", 19)),
                "en-US": () => i.el("240419").then(i.t.bind(i, "240419", 19)),
                "es-ES": () => i.el("613364").then(i.t.bind(i, "613364", 19)),
                fi: () => i.el("641819").then(i.t.bind(i, "641819", 19)),
                fr: () => i.el("396103").then(i.t.bind(i, "396103", 19)),
                hr: () => i.el("611523").then(i.t.bind(i, "611523", 19)),
                hu: () => i.el("799904").then(i.t.bind(i, "799904", 19)),
                it: () => i.el("66179").then(i.t.bind(i, "66179", 19)),
                ja: () => i.el("634557").then(i.t.bind(i, "634557", 19)),
                ko: () => i.el("970725").then(i.t.bind(i, "970725", 19)),
                lt: () => i.el("699836").then(i.t.bind(i, "699836", 19)),
                nl: () => i.el("534178").then(i.t.bind(i, "534178", 19)),
                no: () => i.el("290600").then(i.t.bind(i, "290600", 19)),
                pl: () => i.el("363481").then(i.t.bind(i, "363481", 19)),
                "pt-BR": () => i.el("869317").then(i.t.bind(i, "869317", 19)),
                ro: () => i.el("820013").then(i.t.bind(i, "820013", 19)),
                ru: () => i.el("720728").then(i.t.bind(i, "720728", 19)),
                "sv-SE": () => i.el("25750").then(i.t.bind(i, "25750", 19)),
                th: () => i.el("104023").then(i.t.bind(i, "104023", 19)),
                tr: () => i.el("859047").then(i.t.bind(i, "859047", 19)),
                uk: () => i.el("66271").then(i.t.bind(i, "66271", 19)),
                vi: () => i.el("984210").then(i.t.bind(i, "984210", 19)),
                "zh-CN": () => i.el("923933").then(i.t.bind(i, "923933", 19)),
                "zh-TW": () => Promise.resolve({}),
                hi: () => i.el("479160").then(i.t.bind(i, "479160", 19))
            }
        },
        80507: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return r
                }
            });
            var n = i("917351"),
                l = i.n(n),
                s = i("866227"),
                o = i.n(s),
                r = class e {
                    overwriteHistory(e, t) {
                        this.usageHistory = l.mapValues(null != e ? e : {}, e => ({
                            ...e,
                            frecency: -1
                        })), null == t || t.forEach(e => {
                            let {
                                key: t,
                                timestamp: i
                            } = e;
                            return this.track(t, i)
                        }), this.markDirty()
                    }
                    markDirty() {
                        this.dirty = !0
                    }
                    isDirty() {
                        return this.dirty
                    }
                    track(e, t) {
                        if (null == e) return;
                        let i = Object.prototype.hasOwnProperty.call(this.usageHistory, e) ? this.usageHistory[e] : void 0;
                        if (null == i) i = {
                            totalUses: 1,
                            recentUses: [null != t ? t : Date.now()],
                            frecency: -1,
                            score: 0
                        };
                        else
                            for (i.frecency = -1, i.totalUses += 1, null == t ? i.recentUses.push(Date.now()) : (i.recentUses.push(t), i.recentUses.sort()); i.recentUses.length > this.maxSamples;) i.recentUses.shift();
                        this.usageHistory[e] = i, this.markDirty()
                    }
                    getEntry(e) {
                        if (null == e) return null;
                        this.dirty && this.compute();
                        let t = Object.prototype.hasOwnProperty.call(this.usageHistory, e) ? this.usageHistory[e] : void 0;
                        return t
                    }
                    getScore(e) {
                        let t = this.getEntry(e);
                        return null != t ? t.score : null
                    }
                    getFrecency(e) {
                        let t = this.getEntry(e);
                        return null != t ? t.frecency : null
                    }
                    compute() {
                        let e = o();
                        l.forEach(this.usageHistory, (t, i) => {
                            let {
                                totalUses: n,
                                recentUses: s,
                                frecency: r
                            } = t;
                            if (-1 !== r) return;
                            let u = this.computeBonus(i) / 100;
                            t.score = 0, l.forEach(s, (i, n) => {
                                if (n >= this.maxSamples) return !1;
                                let l = this.computeWeight(e.diff(o(i), "days"));
                                t.score += u * l
                            }), t.score > 0 ? (t.recentUses.length > 0 && (t.frecency = Math.ceil(n * (t.score / s.length))), this.usageHistory[i] = t) : delete this.usageHistory[i]
                        }), this.frequently = l(this.usageHistory).map((e, t) => {
                            let i = this.lookupKey(t);
                            return null == i ? null : [i, e.frecency]
                        }).filter(e => null !== e).sortBy(e => {
                            let [t, i] = e;
                            return -i
                        }).map(e => {
                            let [t] = e;
                            return t
                        }).take(this.numFrequentlyItems).value(), this.dirty = !1, this.afterCompute(this.usageHistory, this._frequently)
                    }
                    get frequently() {
                        return this.dirty && this.compute(), this._frequently
                    }
                    set frequently(e) {
                        this._frequently = e
                    }
                    constructor({
                        computeBonus: e,
                        computeWeight: t,
                        lookupKey: i,
                        afterCompute: n,
                        numFrequentlyItems: l = 32,
                        maxSamples: s = 10
                    }) {
                        this.computeBonus = e, this.computeWeight = t, this.afterCompute = n, this.lookupKey = i, this.usageHistory = {}, this.frequently = [], this.maxSamples = s, this.numFrequentlyItems = l, this.dirty = !1
                    }
                }
        },
        629538: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var n = i("605250"),
                l = i("802493");
            let s = new n.default("GuildEmojis");
            var o = new class e {
                getSync(e) {
                    let t = performance.now(),
                        i = l.default.emojis(e).getMapEntriesSyncUnsafe(),
                        n = performance.now();
                    return s.log("synchronously loaded in ".concat(n - t, "ms (guilds: ").concat(i.length, ")")), i
                }
                handleConnectionOpen(e, t) {
                    for (let i of e.guilds) this.handleOneGuildCreate(i, t)
                }
                handleGuildCreate(e, t) {
                    this.handleOneGuildCreate(e.guild, t)
                }
                handleGuildUpdate(e, t) {
                    this.replace(e.guild.id, e.guild.emojis, t)
                }
                handleGuildDelete(e, t) {
                    this.delete(e.guild.id, t)
                }
                handleGuildEmojisUpdate(e, t) {
                    this.replace(e.guildId, e.emojis, t)
                }
                handleBackgroundSync(e, t) {
                    e.promisesForBackgroundSyncToWaitOn.push(Promise.all(e.emojis.map(e => {
                        if ("unavailable" === e.dataMode) return Promise.resolve();
                        "full" === e.dataMode ? (s.verbose("Replacing ".concat(e.entities.length, " emojis for ").concat(e.guildId)), this.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (s.verbose("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " emojis for ").concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t))
                    })))
                }
                handleOneGuildCreate(e, t) {
                    null != e.emojiUpdates ? this.update(e.id, e.emojiUpdates.writes, e.emojiUpdates.deletes, t) : null != e.emojis && this.replace(e.id, e.emojis, t)
                }
                handleClearGuildCache(e) {
                    this.clear(e)
                }
                handleReset() {}
                replace(e, t, i) {
                    l.default.emojisTransaction(i).replaceAll(e, t)
                }
                delete(e, t) {
                    l.default.emojisTransaction(t).delete(e)
                }
                clear(e) {
                    l.default.emojisTransaction(e).delete()
                }
                update(e, t, i, n) {
                    let s = l.default.emojisTransaction(n);
                    for (let n of (s.putAll(e, t), i)) s.delete(e, n)
                }
                constructor() {
                    this.actions = {
                        BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
                        CLEAR_GUILD_CACHE: (e, t) => this.handleClearGuildCache(t),
                        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                        GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
                        GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                        GUILD_EMOJIS_UPDATE: (e, t) => this.handleGuildEmojisUpdate(e, t),
                        GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
                    }
                }
            }
        },
        477430: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return s
                }
            });
            var n = i("862205");
            let l = (0, n.createExperiment)({
                kind: "user",
                id: "2022-09_emoji_ecosystem_holdout",
                label: "Emoji Ecosystem Holdout Experiment",
                defaultConfig: {
                    inEmojiHoldout: !1
                },
                treatments: [{
                    id: 1,
                    label: "In the Emoji Ecosystem Holdout",
                    config: {
                        inEmojiHoldout: !0
                    }
                }]
            });
            var s = l
        },
        115279: function(e, t, i) {
            "use strict";
            var n, l, s, o, r, u, a, d, c, m, h;
            i.r(t), i.d(t, {
                EmojiCategoryTypes: function() {
                    return n
                },
                GRID_NAVIGATOR_ID: function() {
                    return E
                },
                EmojiCategories: function() {
                    return l
                },
                EmojiSubCategory: function() {
                    return s
                },
                INACTIVE_CATEGORY_INDEX: function() {
                    return f
                },
                EmojiSize: function() {
                    return r
                },
                EMOJI_PICKER_TAB_PANEL_ID: function() {
                    return g
                },
                EMOJI_PICKER_TAB_ID: function() {
                    return p
                },
                SOUNDBOARD_PICKER_TAB_PANEL_ID: function() {
                    return j
                },
                SOUNDBOARD_PICKER_TAB_ID: function() {
                    return y
                },
                REACTION_PICKER_TAB_PANEL_ID: function() {
                    return I
                },
                REACTION_PICKER_TAB_ID: function() {
                    return _
                },
                SUPER_REACTION_PICKER_TAB_ID: function() {
                    return b
                },
                SuperReactionBalanceLocations: function() {
                    return u
                },
                GIF_PICKER_TAB_PANEL_ID: function() {
                    return S
                },
                GIF_PICKER_TAB_ID: function() {
                    return C
                },
                EMOJI_SIZE_MAP: function() {
                    return v
                },
                EMOJI_ROW_SIZE: function() {
                    return T
                }
            }), (a = n || (n = {})).GUILD = "GUILD", a.PACK = "PACK", a.UNICODE = "UNICODE", a.RECENT = "RECENT", a.CUSTOM = "CUSTOM", a.SEARCH_RESULTS = "SEARCH_RESULTS", a.FAVORITES = "FAVORITES", a.TOP_GUILD_EMOJI = "TOP_GUILD_EMOJI", a.PREMIUM_UPSELL = "PREMIUM_UPSELL";
            let E = "emoji-picker-grid";
            (d = l || (l = {})).RECENT = "recent", d.FAVORITES = "favorites", d.TOP_GUILD_EMOJI = "top guild emoji", d.CUSTOM = "custom", d.PEOPLE = "people", d.NATURE = "nature", d.FOOD = "food", d.ACTIVITY = "activity", d.TRAVEL = "travel", d.OBJECTS = "objects", d.SYMBOLS = "symbols", d.FLAGS = "flags", d.PREMIUM_UPSELL = "premium emoji", (c = s || (s = {})).NONE = "", c.TOP_GUILD_EMOJI = "top_server", c.NEWLY_ADDED_EMOJI = "newly_added", (m = o || (o = {}))[m.EMOJI = 0] = "EMOJI", m[m.NSFW = 1] = "NSFW";
            let f = -1;
            (h = r || (r = {}))[h.MEDIUM = 40] = "MEDIUM", h[h.LARGE = 48] = "LARGE";
            let g = "emoji-picker-tab-panel",
                p = "emoji-picker-tab",
                j = "soundboard-picker-tab-panel",
                y = "soundboard-picker-tab",
                I = "reaction-picker-tab-panel",
                _ = "reaction-picker-tab",
                b = "super-reaction-picker-tab";
            (u || (u = {})).TOOLTIP = "tooltip";
            let S = "gif-picker-tab-panel",
                C = "gif-picker-tab",
                v = {
                    reaction: 32,
                    default: 44,
                    jumbo: 96
                },
                T = 9
        },
        61559: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getEmojiPickerDiscoveryExperimentConfig: function() {
                    return o
                },
                useEmojiPickerDiscoveryExperiment: function() {
                    return r
                }
            });
            var n = i("862205"),
                l = i("477430");
            let s = (0, n.createExperiment)({
                    kind: "user",
                    id: "2022-09_emoji_picker_discovery",
                    label: "Emoji Picker Improved Discovery",
                    defaultConfig: {
                        shouldSeeBiggerPicker: !1,
                        shouldSeeTopEmojiBar: !1,
                        shouldSeeNewlyAddedEmoji: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Bigger Picker",
                        config: {
                            shouldSeeBiggerPicker: !0,
                            shouldSeeTopEmojiBar: !1,
                            shouldSeeNewlyAddedEmoji: !1
                        }
                    }, {
                        id: 2,
                        label: "Bigger Picker + Popular Server Emojis",
                        config: {
                            shouldSeeBiggerPicker: !0,
                            shouldSeeTopEmojiBar: !0,
                            shouldSeeNewlyAddedEmoji: !1
                        }
                    }, {
                        id: 3,
                        label: "Bigger Picker + Newly Added Emojis",
                        config: {
                            shouldSeeBiggerPicker: !0,
                            shouldSeeTopEmojiBar: !0,
                            shouldSeeNewlyAddedEmoji: !0
                        }
                    }]
                }),
                o = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        {
                            inEmojiHoldout: t
                        } = l.default.getCurrentConfig({
                            location: "e1b056_1"
                        }, {
                            autoTrackExposure: e
                        }),
                        i = !t,
                        {
                            shouldSeeBiggerPicker: n,
                            shouldSeeNewlyAddedEmoji: o,
                            shouldSeeTopEmojiBar: r
                        } = s.getCurrentConfig({
                            location: "e1b056_2"
                        }, {
                            autoTrackExposure: i && e
                        });
                    return {
                        shouldSeeBiggerPicker: i && n,
                        shouldSeeNewlyAddedEmoji: i && o,
                        shouldSeeTopEmojiBar: i && r
                    }
                },
                r = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        {
                            inEmojiHoldout: t
                        } = l.default.useExperiment({
                            location: "e1b056_3"
                        }, {
                            autoTrackExposure: e
                        }),
                        i = !t,
                        {
                            shouldSeeBiggerPicker: n,
                            shouldSeeNewlyAddedEmoji: o,
                            shouldSeeTopEmojiBar: r
                        } = s.useExperiment({
                            location: "e1b056_4"
                        }, {
                            autoTrackExposure: i && e
                        });
                    return {
                        shouldSeeBiggerPicker: i && n,
                        shouldSeeNewlyAddedEmoji: i && o,
                        shouldSeeTopEmojiBar: i && r
                    }
                }
        },
        39616: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return s
                }
            });
            var n = i("484026");
            let l = new n.default(function(e) {
                {
                    let t = i("952110").emojiTermsImporter[e];
                    return void 0 !== t ? t() : Promise.resolve({})
                }
            });
            var s = {
                setEmojiLocale: function(e) {
                    l.setParams(e)
                },
                getTermsForEmoji: function(e) {
                    let t = l.get();
                    return void 0 !== t ? t[e] : []
                }
            }
        },
        484026: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return n
                }
            });
            class n {
                setParams(e) {
                    this.param !== e && (this.param = e, this.loading = !1, this.loaded = !1)
                }
                get() {
                    return this.ensureLoaded(), this.val
                }
                ensureLoaded() {
                    if (this.loaded || this.loading || void 0 === this.param) return;
                    let e = this.param;
                    this.loading = !0, this.loader(e).then(t => {
                        e === this.param && (this.val = t, this.loading = !1, this.loaded = !0)
                    })
                }
                constructor(e) {
                    this.loading = !1, this.loaded = !1, this.loader = e
                }
            }
        },
        385976: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return eE
                }
            });
            var n, l, s, o = i("917351"),
                r = i.n(o),
                u = i("866227"),
                a = i.n(u),
                d = i("102053"),
                c = i("446674"),
                m = i("913144"),
                h = i("80507"),
                E = i("802493"),
                f = i("595525"),
                g = i("629538"),
                p = i("61559"),
                j = i("39616"),
                y = i("828674"),
                I = i("153043"),
                _ = i("256941"),
                b = i("505985"),
                S = i("166465"),
                C = i("915639"),
                v = i("374363"),
                T = i("26989"),
                O = i("778689"),
                U = i("305961"),
                N = i("677099"),
                A = i("697218"),
                D = i("315102"),
                P = i("402671"),
                B = i("449008"),
                R = i("655518"),
                L = i("299039"),
                k = i("858619"),
                w = i("867805"),
                G = i("802461"),
                F = i("26430"),
                M = i("958706"),
                x = i("115279"),
                H = i("397336");
            let W = [x.EmojiCategories.TOP_GUILD_EMOJI.toString(), x.EmojiCategories.FAVORITES.toString(), x.EmojiCategories.RECENT.toString(), x.EmojiCategories.CUSTOM.toString()].concat(w.default.getCategories()),
                K = {
                    pendingUsages: []
                };
            class q {
                getEmoji(e) {
                    return this.build(), this._emojiMap[e]
                }
                getUsableEmoji(e) {
                    let t = this.getEmoji(e);
                    return null != t && this.isUsable(t) ? t : null
                }
                isUsable(e) {
                    if (0 === e.roles.length) return !0;
                    let t = T.default.getMember(this.id, this._userId);
                    if (null == t) return !1;
                    let i = t.roles.some(t => e.roles.includes(t));
                    return !!(i || (0, I.isPurchasableRoleSubscriptionEmoji)(e)) || !1
                }
                get rawEmojis() {
                    return this._emojis
                }
                get emojis() {
                    return this.build(), this._emojis
                }
                get emoticons() {
                    return this.build(), this._emoticons
                }
                get usableEmojis() {
                    return this.build(), this._usableEmojis
                }
                build() {
                    this._dirty && (this._dirty = !1, this._emojis.forEach(e => {
                        e.url = D.default.getEmojiURL({
                            id: e.id,
                            animated: e.animated,
                            size: 48
                        }), e.allNamesString = ":".concat(e.name, ":"), e.guildId = this.id, e.type = k.EmojiTypes.GUILD, this._emojiMap[e.id] = e
                    }), this._usableEmojis = r.sortBy(this._emojis.filter(e => this.isUsable(e)), e => e.name), this._emoticons = this._usableEmojis.filter(e => !e.require_colons))
                }
                constructor(e, t, i, n = !1) {
                    this._dirty = !0, this._emojiMap = {}, this._emoticons = [], this._usableEmojis = [], this._canSeeServerSubIAP = !1, this._totalUsable = 0, this.id = e, this._userId = t, this._emojis = i, this._canSeeServerSubIAP = n
                }
            }
            let J = L.default.fromTimestamp(Date.now() - 5184e6),
                V = [];
            (n = l || (l = {}))[n.Unloaded = 0] = "Unloaded", n[n.MaybeLoaded = 1] = "MaybeLoaded", n[n.Loaded = 2] = "Loaded";
            let Y = 2,
                z = W.slice(0),
                Z = {},
                X = new Map,
                $ = {},
                Q = new Map;

            function ee(e) {
                var t, i, n;
                let l = et()[e];
                return null != l ? null !== (n = null === (t = Z[l]) || void 0 === t ? void 0 : t.getUsableEmoji(e)) && void 0 !== n ? n : null === (i = X.get(l)) || void 0 === i ? void 0 : i.emojiById[e] : null
            }

            function et() {
                if (ei(), null == $) {
                    for (let e in $ = {}, Z) {
                        let t = Z[e];
                        for (let i of t.rawEmojis) $[i.id] = e
                    }
                    for (let [t, i] of X) {
                        var e;
                        for (let n of null !== (e = null == i ? void 0 : i.content.emojis) && void 0 !== e ? e : []) $[n.id] = t
                    }
                }
                return $
            }

            function ei() {
                if (0 !== Y) return;
                let e = E.default.database();
                if (null == e) return;
                Y = 2;
                let t = (0, f.tryLoadOrResetCacheGateway)("EmojiStore.loadSavedEmojis", () => d.default.time("\uD83D\uDCBE", "loadSavedEmojis", () => g.default.getSync(e)));
                if (null != t) {
                    for (let [e, i] of t) !Object.hasOwn(Z, e) && O.default.isMember(e) && eu(e, i);
                    er()
                }
            }
            class en {
                static get(e) {
                    return void 0 === e && (e = null), (null == en._lastInstance || en._lastInstance.guildId !== e) && (en._lastInstance = new en(e)), en._lastInstance
                }
                static reset() {
                    en._lastInstance = null
                }
                static resetFrequentlyUsed() {
                    null != en._lastInstance && (en._lastInstance.frequentlyUsed = null)
                }
                static resetFavorites() {
                    null != en._lastInstance && (en._lastInstance.favorites = null, en._lastInstance.favoriteNamesAndIds = null)
                }
                static clear(e) {
                    null != en._lastInstance && en._lastInstance.guildId === e && (en._lastInstance = null)
                }
                ensureDisambiguated() {
                    null == this.disambiguatedEmoji && this._buildDisambiguatedCustomEmoji()
                }
                getDisambiguatedEmoji() {
                    return null == this.disambiguatedEmoji && this._buildDisambiguatedCustomEmoji(), this.disambiguatedEmoji
                }
                getCustomEmoji() {
                    return null == this.customEmojis && this._buildDisambiguatedCustomEmoji(), this.customEmojis
                }
                getGroupedCustomEmoji() {
                    return null == this.groupedCustomEmojis && this._buildDisambiguatedCustomEmoji(), this.groupedCustomEmojis
                }
                getByName(e) {
                    if ((null == this.emojisByName || null == this.unicodeAliases) && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emojisByName, e)) return this.emojisByName[e];
                    if (Object.prototype.hasOwnProperty.call(this.unicodeAliases, e)) {
                        let t = this.unicodeAliases[e];
                        if (Object.prototype.hasOwnProperty.call(this.emojisByName, t)) return this.emojisByName[t]
                    }
                }
                getEmoticonByName(e) {
                    if (null == this.emoticonsByName && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emoticonsByName, e)) return this.emoticonsByName[e]
                }
                getById(e) {
                    if (null == this.emojisById && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emojisById, e)) return this.emojisById[e]
                }
                getCustomEmoticonRegex() {
                    return null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), null == this.emoticonRegex && null != this.escapedEmoticonNames && "" !== this.escapedEmoticonNames && (this.emoticonRegex = new RegExp("^\\b(".concat(this.escapedEmoticonNames, ")\\b"))), this.emoticonRegex
                }
                getFrequentlyUsedEmojisWithoutFetchingLatest() {
                    return this.ensureDisambiguated(), null == this.frequentlyUsed && (this.frequentlyUsed = el.frequently.map(e => null != e.id ? this.getById(e.id) : null != e.name ? w.default.getByName(e.name) : void 0).filter(B.isNotNullish)), this.frequentlyUsed
                }
                rebuildFavoriteEmojisWithoutFetchingLatest() {
                    if (this.ensureDisambiguated(), null == this.favorites || null == this.favoriteNamesAndIds) {
                        var e, t;
                        this.favoriteNamesAndIds = new Set, this.favorites = (null !== (t = null === (e = v.default.frecencyWithoutFetchingLatest.favoriteEmojis) || void 0 === e ? void 0 : e.emojis) && void 0 !== t ? t : []).map(e => {
                            var t;
                            null === (t = this.favoriteNamesAndIds) || void 0 === t || t.add(e);
                            let i = this.getById(e);
                            return null == i && (i = w.default.getByName(e)), i
                        }).filter(B.isNotNullish)
                    }
                    return [this.favorites, this.favoriteNamesAndIds]
                }
                get favoriteEmojisWithoutFetchingLatest() {
                    return this.rebuildFavoriteEmojisWithoutFetchingLatest()[0]
                }
                getEmojiInPriorityOrderWithoutFetchingLatest() {
                    let e = new Set;
                    return this.favoriteEmojisWithoutFetchingLatest.concat(this.getFrequentlyUsedEmojisWithoutFetchingLatest()).filter(t => !e.has(t) && (e.add(t), !0))
                }
                getTopEmojiWithoutFetchingLatest(e) {
                    let {
                        shouldSeeTopEmojiBar: t
                    } = (0, p.getEmojiPickerDiscoveryExperimentConfig)();
                    if (!t) return V;
                    if (this.ensureDisambiguated(), null == this.topEmojis) {
                        var i;
                        let t = Q.get(e),
                            n = F.default.getTopEmojiIdsByGuildId(e);
                        if (null == t && null == n) return V;
                        let l = null !== (i = null == t ? void 0 : t.emojiIds) && void 0 !== i ? i : n,
                            s = l.map(e => {
                                var t;
                                return null !== (t = this.getById(e)) && void 0 !== t ? t : w.default.getByName(w.default.convertSurrogateToName(e, !1))
                            }),
                            o = [];
                        s.forEach(e => {
                            null != e && o.push(e)
                        });
                        let r = this.getNewlyAddedEmojiForGuild(e).map(e => e.id);
                        this.topEmojis = o.filter(e => !r.includes(e.id))
                    }
                    return this.topEmojis
                }
                getNewlyAddedEmojiForGuild(e) {
                    let {
                        shouldSeeNewlyAddedEmoji: t
                    } = (0, p.getEmojiPickerDiscoveryExperimentConfig)();
                    if (!t) return V;
                    if (this.ensureDisambiguated(), null == this.newlyAddedEmoji) return V;
                    let i = this.newlyAddedEmoji[e];
                    return null == i ? V : i
                }
                getBackfillTopEmojis(e) {
                    let t = this.getGroupedCustomEmoji();
                    if (null == t) return V;
                    if (null == this.backfillTopEmojis[e]) {
                        let i = this.getNewlyAddedEmojiForGuild(e).map(e => e.id),
                            n = this.getTopEmojiWithoutFetchingLatest(e).map(e => e.id);
                        if (null != t[e]) {
                            let l = t[e].filter(e => !i.includes(e.id) && !n.includes(e.id)),
                                s = i.length + n.length;
                            this.backfillTopEmojis[e] = l.sort((e, t) => L.default.compare(e.id, t.id)).slice(0, s < 9 ? 9 - s : 0)
                        } else this.backfillTopEmojis[e] = V
                    }
                    return this.backfillTopEmojis[e]
                }
                getEscapedCustomEmoticonNames() {
                    return null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), this.escapedEmoticonNames
                }
                nameMatchesChain(e) {
                    return r(this.getDisambiguatedEmoji()).filter(t => {
                        let {
                            id: i,
                            names: n,
                            name: l
                        } = t, s = null != n && r.some(n, e), o = null != l && e(l), u = null != l && r.some(j.default.getTermsForEmoji(l), e), a = null != i && r.some(G.default.getCaptionsForEmojiById({
                            emojiId: i
                        }), e);
                        return s || o || u || a
                    })
                }
                _buildDisambiguatedCustomEmoji() {
                    let e = {},
                        t = [];
                    this.emoticonRegex = null, this.frequentlyUsed = null, this.disambiguatedEmoji = [], this.unicodeAliases = Object.create(null), this.customEmojis = Object.create(null), this.groupedCustomEmojis = Object.create(null), this.emoticonsByName = Object.create(null), this.emojisByName = Object.create(null), this.emojisById = Object.create(null), this.newlyAddedEmoji = Object.create(null);
                    let i = t => {
                            var i, n;
                            let l = t.name,
                                s = null !== (i = e[l]) && void 0 !== i ? i : 0;
                            if (e[l] = s + 1, s > 0) {
                                let e = "".concat(l, "~").concat(s);
                                t = {
                                    ...t,
                                    name: e,
                                    originalName: l,
                                    allNamesString: ":".concat(e, ":")
                                }
                            }
                            if (this.emojisByName[t.name] = t, "names" in t && (null === (n = t.names) || void 0 === n || n.slice(1).forEach(e => this.unicodeAliases[e] = t.name)), null != t.id) {
                                let e, i;
                                switch (this.emojisById[t.id] = t, this.customEmojis[t.name] = t, t.type) {
                                    case k.EmojiTypes.GUILD:
                                        e = t.guildId, i = !0;
                                        break;
                                    case k.EmojiTypes.PACK:
                                        e = t.packId
                                }
                                null != e && (null != this.groupedCustomEmojis[e] ? this.groupedCustomEmojis[e].push(t) : this.groupedCustomEmojis[e] = [t], i && L.default.compare(t.id, J) >= 0 && (null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e].push(t) : this.newlyAddedEmoji[e] = [t]))
                            }
                            null == this.disambiguatedEmoji && (this.disambiguatedEmoji = []), this.disambiguatedEmoji.push(t)
                        },
                        n = e => {
                            !Object.prototype.hasOwnProperty.call(this.emoticonsByName, e.name) && (t.push(R.default.escape(e.name)), this.emoticonsByName[e.name] = e)
                        };
                    w.default.forEach(i);
                    let l = e => {
                        let t = Z[null == e ? "null" : e];
                        null != t && (r.each(t.usableEmojis, i), r.each(t.emoticons, n))
                    };
                    l(this.guildId);
                    for (let e in this.newlyAddedEmoji) null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e] = this.newlyAddedEmoji[e].sort((e, t) => L.default.compare(t.id, e.id)).slice(0, 3) : this.newlyAddedEmoji[e] = [];
                    N.default.getFlattenedGuildIds().forEach(e => {
                        e !== this.guildId && l(e)
                    }), S.default.getPacksForUser().map(e => {
                        null != e.content.emojis && r.each(e.content.emojis, i)
                    }), this.escapedEmoticonNames = t.join("|")
                }
                constructor(e) {
                    this.emoticonRegex = null, this.frequentlyUsed = null, this.favorites = null, this.favoriteNamesAndIds = null, this.topEmojis = null, this.escapedEmoticonNames = null, this.disambiguatedEmoji = null, this.newlyAddedEmoji = null, this.backfillTopEmojis = {}, this.isFavoriteEmojiWithoutFetchingLatest = e => {
                        var t;
                        if (null == e) return !1;
                        let i = this.rebuildFavoriteEmojisWithoutFetchingLatest()[1];
                        return null != e.id ? i.has(e.id) : i.has(null !== (t = e.name) && void 0 !== t ? t : "")
                    }, this.guildId = e
                }
            }
            en._lastInstance = null;
            let el = new h.default({
                computeBonus: () => 100,
                computeWeight: e => {
                    let t = 0;
                    return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                },
                lookupKey: e => null !== (s = w.default.getByName(e)) && void 0 !== s ? s : ee(e),
                afterCompute: () => {
                    en.resetFrequentlyUsed(), z = W.slice(0), !r.some(Z, e => e.usableEmojis.length > 0) && z.splice(W.indexOf(x.EmojiCategories.CUSTOM), 1)
                },
                numFrequentlyItems: 42
            });

            function es() {
                Z = {}, X.clear(), $ = {}, en.reset(), Q.clear(), Y = 2
            }

            function eo(e) {
                let t = Z[e];
                null != t && delete Z[e]
            }

            function er() {
                $ = null, en.reset(), 0 !== Y && el.compute()
            }

            function eu(e, t) {
                if (eo(e), en.clear(e), null == t) return;
                let i = A.default.getCurrentUser();
                if (null == i) return;
                let n = (0, b.canUseRoleSubscriptionIAP)(e);
                Z[e] = new q(e, i.id, t, n)
            }

            function ea() {
                var e, t, i, n;
                let l = v.default.settings,
                    s = null === (t = l.textAndImages) || void 0 === t ? void 0 : null === (e = t.diversitySurrogate) || void 0 === e ? void 0 : e.value;
                null != s && w.default.setDefaultDiversitySurrogate(s), en.reset();
                let o = v.default.frecencyWithoutFetchingLatest,
                    u = null !== (n = null === (i = o.emojiFrecency) || void 0 === i ? void 0 : i.emojis) && void 0 !== n ? n : {};
                el.overwriteHistory(r.mapValues(u, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), K.pendingUsages), r.isEmpty(u) && r.isEmpty(K.pendingUsages) && v.default.hasLoaded(H.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (el.track("thumbsup"), el.track("thumbsup"), el.track("eyes"), el.track("eyes"), el.track("laughing"), el.track("laughing"), el.track("watermelon"), el.track("fork_and_knife"), el.track("yum"), el.track("weary"), el.track("tired_face"), el.track("poop"), el.track("100"))
            }

            function ed(e) {
                for (let n of e) {
                    var t, i;
                    let e = null !== (i = null !== (t = n.id) && void 0 !== t ? t : n.uniqueName) && void 0 !== i ? i : n.name;
                    null != e && (el.track(e), K.pendingUsages.push({
                        key: e,
                        timestamp: Date.now()
                    }))
                }
                let n = e.length > 0;
                return n && 0 !== Y && el.compute(), n
            }

            function ec(e) {
                let {
                    guildId: t,
                    role: i
                } = e;
                if (!(0, y.isSubscriptionRole)(i)) return !1;
                {
                    let e = Z[t];
                    eu(t, null == e ? void 0 : e.emojis), er()
                }
            }

            function em() {
                X = S.default.getPacksById(), er()
            }
            class eh extends c.default.PersistedStore {
                initialize(e) {
                    this.waitFor(E.default, O.default, T.default, U.default, S.default, C.default, _.default, F.default, A.default), null != e && (K = e), this.syncWith([v.default], ea), this.syncWith([S.default], em)
                }
                getState() {
                    return K
                }
                hasPendingUsage() {
                    return K.pendingUsages.length > 0
                }
                get categories() {
                    return z
                }
                get diversitySurrogate() {
                    var e;
                    return null !== (e = w.default.getDefaultDiversitySurrogate()) && void 0 !== e ? e : ""
                }
                get emojiFrecencyWithoutFetchingLatest() {
                    return el
                }
                getGuildEmoji(e) {
                    var t;
                    ei();
                    let i = Z[e];
                    return null !== (t = null == i ? void 0 : i.emojis) && void 0 !== t ? t : []
                }
                getUsableGuildEmoji(e) {
                    var t;
                    ei();
                    let i = Z[e];
                    return null !== (t = null == i ? void 0 : i.usableEmojis) && void 0 !== t ? t : []
                }
                getGuilds() {
                    return Z
                }
                getDisambiguatedEmojiContext(e) {
                    return ei(), en.get(e)
                }
                getSearchResultsOrder(e, t, i) {
                    let n = t.toLowerCase(),
                        l = R.default.escape(n);
                    if (e.length > 0) {
                        let t = RegExp("^".concat(l), "i"),
                            i = new RegExp("(^|_|[A-Z])".concat(l, "s?([A-Z]|_|$)")),
                            s = i.test.bind(i),
                            o = t.test.bind(t),
                            u = function(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
                                if (null == e || null == t) return 0;
                                let i = e.toLowerCase(),
                                    l = 1 + (i === n ? 4 : 0) + (s(i) || s(e) ? 2 : 0) + (o(e) ? 1 : 0),
                                    r = el.getScore(t);
                                return null != r && (l *= r / 100), l
                            };
                        e = r.orderBy(e, [e => null != e.names ? u(e.names[0]) : u(e.name, e.id), e => null != e.names ? e.names[0] : e.name], ["desc", "asc"])
                    }
                    return i > 0 && (e = e.slice(0, i)), e
                }
                searchWithoutFetchingLatest(e) {
                    let t, {
                        channel: i,
                        query: n,
                        count: l = 0,
                        intention: s,
                        includeExternalGuilds: o = !0,
                        canViewAndUsePackEmoji: r,
                        matchComparator: u
                    } = e;
                    ei();
                    let a = n.toLowerCase(),
                        d = R.default.escape(a);
                    if (null == u) {
                        let e = RegExp("".concat(d), "i");
                        t = e.test.bind(e)
                    } else t = u;
                    let c = null != i ? i.getGuildId() : null,
                        m = en.get(c).nameMatchesChain(t).reduce((e, t) => {
                            let n = P.default.getEmojiUnavailableReason({
                                emoji: t,
                                channel: i,
                                intention: s,
                                canViewAndUsePackEmoji: r
                            });
                            if (n === M.EmojiDisabledReasons.PREMIUM_LOCKED) e.locked.push(t);
                            else if (null == n) {
                                let n = !o && !P.default.isInternalEmojiForGuildId(t, null == i ? void 0 : i.getGuildId());
                                !n && e.unlocked.push(t)
                            }
                            return e
                        }, {
                            unlocked: [],
                            locked: []
                        });
                    return {
                        unlocked: this.getSearchResultsOrder(m.unlocked, n, l),
                        locked: this.getSearchResultsOrder(m.locked, n, 0)
                    }
                }
                getUsableCustomEmojiById(e) {
                    return ei(), ee(e)
                }
                getCustomEmojiById(e) {
                    return ei(),
                        function(e) {
                            var t, i, n;
                            let l = et()[e];
                            return null != l ? null !== (n = null === (t = Z[l]) || void 0 === t ? void 0 : t.getEmoji(e)) && void 0 !== n ? n : null === (i = X.get(l)) || void 0 === i ? void 0 : i.emojiById[e] : null
                        }(e)
                }
                getTopEmoji(e) {
                    return null == e ? V : (ei(), en.get(e).getTopEmojiWithoutFetchingLatest(e))
                }
                getNewlyAddedEmoji(e) {
                    return null == e ? V : (ei(), en.get(e).getNewlyAddedEmojiForGuild(e))
                }
                getBackfillTopEmojis(e) {
                    return null == e ? V : (ei(), en.get(e).getBackfillTopEmojis(e))
                }
                getTopEmojisMetadata(e) {
                    return Q.get(e)
                }
                hasUsableEmojiInAnyGuild() {
                    ei();
                    let e = Object.keys(Z);
                    return e.some(e => Z[e].usableEmojis.length > 0)
                }
                hasFavoriteEmojis(e) {
                    let t = en.get(e);
                    return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0
                }
            }
            eh.displayName = "EmojiStore", eh.persistKey = "EmojiStoreV2";
            var eE = new eh(m.default, {
                BACKGROUND_SYNC: function() {
                    es()
                },
                CONNECTION_OPEN: function(e) {
                    for (let t of (es(), e.guilds)) eu(t.id, t.emojis);
                    Y = e.guilds.every(e => null != e.emojis) ? 1 : 0, er()
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    var t;
                    let {
                        guildId: i,
                        user: n
                    } = e;
                    if (n.id !== (null === (t = A.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return;
                    let l = Z[i];
                    eu(i, null == l ? void 0 : l.usableEmojis), er()
                },
                GUILD_CREATE: function(e) {
                    0 !== Y && null == e.guild.emojis && null != e.guild.emojiUpdates && (Y = 0), eu(e.guild.id, e.guild.emojis), er()
                },
                GUILD_UPDATE: function(e) {
                    eu(e.guild.id, e.guild.emojis), er()
                },
                GUILD_EMOJIS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        emojis: i
                    } = e;
                    eu(t, i), er()
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    eo(t.id), Q.delete(t.id), er()
                },
                MESSAGE_REACTION_ADD: function(e) {
                    if (!e.optimistic) return !1;
                    let t = null != e.emoji.id && "0" !== e.emoji.id ? e.emoji : w.default.getByName(w.default.convertSurrogateToName(e.emoji.name, !1));
                    if (null == t) return !1;
                    ed([t])
                },
                EMOJI_TRACK_USAGE: function(e) {
                    let {
                        emojiUsed: t
                    } = e;
                    ed(t)
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: i
                    } = e;
                    if (j.default.setEmojiLocale(C.default.locale), t !== H.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !i) return !1;
                    K.pendingUsages = []
                },
                GUILD_ROLE_CREATE: ec,
                GUILD_ROLE_UPDATE: ec,
                TOP_EMOJIS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        topEmojisMetadata: i
                    } = e;
                    Q.set(t, {
                        emojiIds: i.map(e => e.emojiId),
                        topEmojisTTL: a(a()).add(1, "days").valueOf()
                    })
                },
                INVENTORY_FETCH_SUCCESS: function(e) {
                    let {} = e;
                    em()
                },
                INVENTORY_COLLECT_PACK_SUCCESS: function(e) {
                    let {} = e;
                    er()
                },
                INVENTORY_REMOVE_PACK_SUCCESS: function(e) {
                    let {} = e;
                    er()
                },
                LOGOUT: function(e) {
                    es()
                }
            })
        },
        802461: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return d
                }
            });
            var n = i("446674"),
                l = i("913144");
            let s = {
                    captionsById: new Map
                },
                o = s,
                r = !1,
                u = null;
            class a extends n.default.PersistedStore {
                initialize(e) {
                    o = null != e ? {
                        captionsById: new Map(e.captionsById)
                    } : s
                }
                getState() {
                    return o
                }
                getCaptionsForEmojiById(e) {
                    var t;
                    let {
                        emojiId: i
                    } = e;
                    return null !== (t = o.captionsById.get(i)) && void 0 !== t ? t : []
                }
                getIsFetching() {
                    return r
                }
                getEmojiCaptionsTTL() {
                    return u
                }
                clear() {
                    o = s, r = !1, u = null
                }
            }
            a.displayName = "EmojiCaptionsStore", a.persistKey = "EmojiCaptionsStore";
            var d = new a(l.default, {
                LOGOUT: function() {
                    o = s, r = !1, u = null
                },
                EMOJI_CAPTIONS_FETCH: function(e) {
                    let {} = e;
                    !r && (r = !0)
                },
                EMOJI_CAPTIONS_FETCH_SUCCESS: function(e) {
                    let {
                        emojiCaptions: t
                    } = e;
                    o.captionsById = new Map(Object.entries(t)), r = !1, u = Date.now() + 216e5
                },
                EMOJI_CAPTIONS_FETCH_ERROR: function(e) {
                    let {
                        is4XXError: t
                    } = e;
                    r = !1;
                    u = Date.now() + 6e4 * (t ? 10 : 1)
                },
                POST_CONNECTION_OPEN: function(e) {
                    let {} = e;
                    r = !1
                }
            })
        },
        26430: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var n = i("446674"),
                l = i("913144");
            let s = {
                    topEmojisByGuildId: {}
                },
                o = s,
                r = {};
            class u extends n.default.PersistedStore {
                initialize(e) {
                    o = null != e ? e : s
                }
                getState() {
                    return o
                }
                getTopEmojiIdsByGuildId(e) {
                    return o.topEmojisByGuildId[e]
                }
                getIsFetching(e) {
                    return r[e]
                }
            }
            u.displayName = "TopEmojiStore", u.persistKey = "TopEmojiStore";
            var a = new u(l.default, {
                LOGOUT: function() {
                    o = s, r = {}
                },
                TOP_EMOJIS_FETCH: function(e) {
                    let {
                        guildId: t
                    } = e;
                    r[t] = !0
                },
                TOP_EMOJIS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        topEmojisMetadata: i
                    } = e;
                    o.topEmojisByGuildId[t] = i.map(e => e.emojiId), r[t] = !1
                }
            })
        },
        505985: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                canUseRoleSubscriptionIAP: function() {
                    return u
                }
            }), i("884691"), i("65597");
            var n = i("305961"),
                l = i("773336"),
                s = i("954224"),
                o = i("49111");
            let r = [o.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE];

            function u(e) {
                if (!(0, l.isIOS)()) return !1;
                let t = (0, s.getSystemVersion)();
                if (null == t || -1 === function(e, t) {
                        let i = e.split(".").map(Number),
                            n = t.split(".").map(Number),
                            l = Math.max(i.length, n.length);
                        for (let e = 0; e < l; e++) {
                            var s, o;
                            let t = null !== (s = i[e]) && void 0 !== s ? s : 0,
                                l = null !== (o = n[e]) && void 0 !== o ? o : 0;
                            if (t < l) return -1;
                            if (t > l) return 1
                        }
                        return 0
                    }(t, "13.2")) return !1;
                let i = n.default.getGuild(e);
                if (null == i) return !1;
                let o = r.every(e => i.hasFeature(e));
                return !!o || !1
            }
        },
        954224: function(e, t, i) {
            "use strict";

            function n() {
                return null
            }
            i.r(t), i.d(t, {
                getSystemVersion: function() {
                    return n
                }
            })
        }
    }
]);
//# sourceMappingURL=f808f0d0fd4d8ae50090.js.map