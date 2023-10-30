(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["40235"], {
        952110: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                emojiTermsImporter: function() {
                    return l
                }
            });
            let l = {
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
                    return u
                }
            });
            var l = i("917351"),
                s = i.n(l),
                n = i("866227"),
                o = i.n(n),
                u = class e {
                    overwriteHistory(e, t) {
                        this.usageHistory = s.mapValues(null != e ? e : {}, e => ({
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
                        s.forEach(this.usageHistory, (t, i) => {
                            let {
                                totalUses: l,
                                recentUses: n,
                                frecency: u
                            } = t;
                            if (-1 !== u) return;
                            let r = this.computeBonus(i) / 100;
                            t.score = 0, s.forEach(n, (i, l) => {
                                if (l >= this.maxSamples) return !1;
                                let s = this.computeWeight(e.diff(o(i), "days"));
                                t.score += r * s
                            }), t.score > 0 ? (t.recentUses.length > 0 && (t.frecency = Math.ceil(l * (t.score / n.length))), this.usageHistory[i] = t) : delete this.usageHistory[i]
                        }), this.frequently = s(this.usageHistory).map((e, t) => {
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
                        afterCompute: l,
                        numFrequentlyItems: s = 32,
                        maxSamples: n = 10
                    }) {
                        this.computeBonus = e, this.computeWeight = t, this.afterCompute = l, this.lookupKey = i, this.usageHistory = {}, this.frequently = [], this.maxSamples = n, this.numFrequentlyItems = s, this.dirty = !1
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
            var l = i("605250"),
                s = i("802493");
            let n = new l.default("GuildEmojis");
            var o = new class e {
                getSync(e) {
                    let t = performance.now(),
                        i = s.default.emojis(e).getMapEntriesSyncUnsafe(),
                        l = performance.now();
                    return n.log("synchronously loaded in ".concat(l - t, "ms (guilds: ").concat(i.length, ")")), i
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
                        "full" === e.dataMode ? (n.verbose("Replacing ".concat(e.entities.length, " emojis for ").concat(e.guildId)), this.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (n.verbose("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " emojis for ").concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t))
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
                    s.default.emojisTransaction(i).replaceAll(e, t)
                }
                delete(e, t) {
                    s.default.emojisTransaction(t).delete(e)
                }
                clear(e) {
                    s.default.emojisTransaction(e).delete()
                }
                update(e, t, i, l) {
                    let n = s.default.emojisTransaction(l);
                    for (let l of (n.putAll(e, t), i)) n.delete(e, l)
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
                    return n
                }
            });
            var l = i("862205");
            let s = (0, l.createExperiment)({
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
            var n = s
        },
        61559: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getEmojiPickerDiscoveryExperimentConfig: function() {
                    return o
                },
                useEmojiPickerDiscoveryExperiment: function() {
                    return u
                }
            });
            var l = i("862205"),
                s = i("477430");
            let n = (0, l.createExperiment)({
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
                        } = s.default.getCurrentConfig({
                            location: "e1b056_1"
                        }, {
                            autoTrackExposure: e
                        }),
                        i = !t,
                        {
                            shouldSeeBiggerPicker: l,
                            shouldSeeNewlyAddedEmoji: o,
                            shouldSeeTopEmojiBar: u
                        } = n.getCurrentConfig({
                            location: "e1b056_2"
                        }, {
                            autoTrackExposure: i && e
                        });
                    return {
                        shouldSeeBiggerPicker: i && l,
                        shouldSeeNewlyAddedEmoji: i && o,
                        shouldSeeTopEmojiBar: i && u
                    }
                },
                u = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        {
                            inEmojiHoldout: t
                        } = s.default.useExperiment({
                            location: "e1b056_3"
                        }, {
                            autoTrackExposure: e
                        }),
                        i = !t,
                        {
                            shouldSeeBiggerPicker: l,
                            shouldSeeNewlyAddedEmoji: o,
                            shouldSeeTopEmojiBar: u
                        } = n.useExperiment({
                            location: "e1b056_4"
                        }, {
                            autoTrackExposure: i && e
                        });
                    return {
                        shouldSeeBiggerPicker: i && l,
                        shouldSeeNewlyAddedEmoji: i && o,
                        shouldSeeTopEmojiBar: i && u
                    }
                }
        },
        39616: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return n
                }
            });
            var l = i("484026");
            let s = new l.default(function(e) {
                {
                    let t = i("952110").emojiTermsImporter[e];
                    return void 0 !== t ? t() : Promise.resolve({})
                }
            });
            var n = {
                setEmojiLocale: function(e) {
                    s.setParams(e)
                },
                getTermsForEmoji: function(e) {
                    let t = s.get();
                    return void 0 !== t ? t[e] : []
                }
            }
        },
        484026: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            class l {
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
                    return eg
                }
            });
            var l, s, n, o = i("917351"),
                u = i.n(o),
                r = i("866227"),
                a = i.n(r),
                d = i("102053"),
                m = i("446674"),
                c = i("913144"),
                h = i("80507"),
                g = i("802493"),
                f = i("595525"),
                E = i("629538"),
                j = i("61559"),
                p = i("39616"),
                y = i("828674"),
                b = i("153043"),
                v = i("256941"),
                I = i("505985"),
                _ = i("166465"),
                S = i("915639"),
                C = i("374363"),
                T = i("26989"),
                U = i("778689"),
                N = i("305961"),
                O = i("677099"),
                A = i("697218"),
                B = i("315102"),
                k = i("402671"),
                w = i("449008"),
                D = i("655518"),
                P = i("299039"),
                F = i("858619"),
                L = i("867805"),
                G = i("802461"),
                R = i("26430"),
                M = i("958706"),
                x = i("115279"),
                H = i("397336");
            let W = [x.EmojiCategories.TOP_GUILD_EMOJI.toString(), x.EmojiCategories.FAVORITES.toString(), x.EmojiCategories.RECENT.toString(), x.EmojiCategories.CUSTOM.toString()].concat(L.default.getCategories()),
                q = {
                    pendingUsages: []
                };
            class K {
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
                    return !!(i || (0, b.isPurchasableRoleSubscriptionEmoji)(e)) || !1
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
                        e.url = B.default.getEmojiURL({
                            id: e.id,
                            animated: e.animated,
                            size: 48
                        }), e.allNamesString = ":".concat(e.name, ":"), e.guildId = this.id, e.type = F.EmojiTypes.GUILD, this._emojiMap[e.id] = e
                    }), this._usableEmojis = u.sortBy(this._emojis.filter(e => this.isUsable(e)), e => e.name), this._emoticons = this._usableEmojis.filter(e => !e.require_colons))
                }
                constructor(e, t, i, l = !1) {
                    this._dirty = !0, this._emojiMap = {}, this._emoticons = [], this._usableEmojis = [], this._canSeeServerSubIAP = !1, this._totalUsable = 0, this.id = e, this._userId = t, this._emojis = i, this._canSeeServerSubIAP = l
                }
            }
            let V = P.default.fromTimestamp(Date.now() - 5184e6),
                J = [];
            (l = s || (s = {}))[l.Unloaded = 0] = "Unloaded", l[l.MaybeLoaded = 1] = "MaybeLoaded", l[l.Loaded = 2] = "Loaded";
            let Y = 2,
                z = W.slice(0),
                Z = {},
                $ = new Map,
                Q = {},
                X = new Map;

            function ee(e) {
                var t, i, l;
                let s = et()[e];
                return null != s ? null !== (l = null === (t = Z[s]) || void 0 === t ? void 0 : t.getUsableEmoji(e)) && void 0 !== l ? l : null === (i = $.get(s)) || void 0 === i ? void 0 : i.emojiById[e] : null
            }

            function et() {
                if (ei(), null == Q) {
                    for (let e in Q = {}, Z) {
                        let t = Z[e];
                        for (let i of t.rawEmojis) Q[i.id] = e
                    }
                    for (let [t, i] of $) {
                        var e;
                        for (let l of null !== (e = null == i ? void 0 : i.content.emojis) && void 0 !== e ? e : []) Q[l.id] = t
                    }
                }
                return Q
            }

            function ei() {
                if (0 !== Y) return;
                let e = g.default.database();
                if (null == e) return;
                Y = 2;
                let t = (0, f.tryLoadOrResetCacheGateway)("EmojiStore.loadSavedEmojis", () => d.default.time("\uD83D\uDCBE", "loadSavedEmojis", () => E.default.getSync(e)));
                if (null != t) {
                    for (let [e, i] of t) !Object.hasOwn(Z, e) && U.default.isMember(e) && er(e, i);
                    eu()
                }
            }
            class el {
                static get(e) {
                    return void 0 === e && (e = null), (null == el._lastInstance || el._lastInstance.guildId !== e) && (el._lastInstance = new el(e)), el._lastInstance
                }
                static reset() {
                    el._lastInstance = null
                }
                static resetFrequentlyUsed() {
                    null != el._lastInstance && (el._lastInstance.frequentlyUsed = null)
                }
                static resetFavorites() {
                    null != el._lastInstance && (el._lastInstance.favorites = null, el._lastInstance.favoriteNamesAndIds = null)
                }
                static clear(e) {
                    null != el._lastInstance && el._lastInstance.guildId === e && (el._lastInstance = null)
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
                    return this.ensureDisambiguated(), null == this.frequentlyUsed && (this.frequentlyUsed = es.frequently.map(e => null != e.id ? this.getById(e.id) : null != e.name ? L.default.getByName(e.name) : void 0).filter(w.isNotNullish)), this.frequentlyUsed
                }
                rebuildFavoriteEmojisWithoutFetchingLatest() {
                    if (this.ensureDisambiguated(), null == this.favorites || null == this.favoriteNamesAndIds) {
                        var e, t;
                        this.favoriteNamesAndIds = new Set, this.favorites = (null !== (t = null === (e = C.default.frecencyWithoutFetchingLatest.favoriteEmojis) || void 0 === e ? void 0 : e.emojis) && void 0 !== t ? t : []).map(e => {
                            var t;
                            null === (t = this.favoriteNamesAndIds) || void 0 === t || t.add(e);
                            let i = this.getById(e);
                            return null == i && (i = L.default.getByName(e)), i
                        }).filter(w.isNotNullish)
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
                    } = (0, j.getEmojiPickerDiscoveryExperimentConfig)();
                    if (!t) return J;
                    if (this.ensureDisambiguated(), null == this.topEmojis) {
                        var i;
                        let t = X.get(e),
                            l = R.default.getTopEmojiIdsByGuildId(e);
                        if (null == t && null == l) return J;
                        let s = null !== (i = null == t ? void 0 : t.emojiIds) && void 0 !== i ? i : l,
                            n = s.map(e => {
                                var t;
                                return null !== (t = this.getById(e)) && void 0 !== t ? t : L.default.getByName(L.default.convertSurrogateToName(e, !1))
                            }),
                            o = [];
                        n.forEach(e => {
                            null != e && o.push(e)
                        });
                        let u = this.getNewlyAddedEmojiForGuild(e).map(e => e.id);
                        this.topEmojis = o.filter(e => !u.includes(e.id))
                    }
                    return this.topEmojis
                }
                getNewlyAddedEmojiForGuild(e) {
                    let {
                        shouldSeeNewlyAddedEmoji: t
                    } = (0, j.getEmojiPickerDiscoveryExperimentConfig)();
                    if (!t) return J;
                    if (this.ensureDisambiguated(), null == this.newlyAddedEmoji) return J;
                    let i = this.newlyAddedEmoji[e];
                    return null == i ? J : i
                }
                getBackfillTopEmojis(e) {
                    let t = this.getGroupedCustomEmoji();
                    if (null == t) return J;
                    if (null == this.backfillTopEmojis[e]) {
                        let i = this.getNewlyAddedEmojiForGuild(e).map(e => e.id),
                            l = this.getTopEmojiWithoutFetchingLatest(e).map(e => e.id);
                        if (null != t[e]) {
                            let s = t[e].filter(e => !i.includes(e.id) && !l.includes(e.id)),
                                n = i.length + l.length;
                            this.backfillTopEmojis[e] = s.sort((e, t) => P.default.compare(e.id, t.id)).slice(0, n < 9 ? 9 - n : 0)
                        } else this.backfillTopEmojis[e] = J
                    }
                    return this.backfillTopEmojis[e]
                }
                getEscapedCustomEmoticonNames() {
                    return null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), this.escapedEmoticonNames
                }
                nameMatchesChain(e) {
                    return u(this.getDisambiguatedEmoji()).filter(t => {
                        let {
                            id: i,
                            names: l,
                            name: s
                        } = t, n = null != l && u.some(l, e), o = null != s && e(s), r = null != s && u.some(p.default.getTermsForEmoji(s), e), a = null != i && u.some(G.default.getCaptionsForEmojiById({
                            emojiId: i
                        }), e);
                        return n || o || r || a
                    })
                }
                _buildDisambiguatedCustomEmoji() {
                    let e = {},
                        t = [];
                    this.emoticonRegex = null, this.frequentlyUsed = null, this.disambiguatedEmoji = [], this.unicodeAliases = Object.create(null), this.customEmojis = Object.create(null), this.groupedCustomEmojis = Object.create(null), this.emoticonsByName = Object.create(null), this.emojisByName = Object.create(null), this.emojisById = Object.create(null), this.newlyAddedEmoji = Object.create(null);
                    let i = t => {
                            var i, l;
                            let s = t.name,
                                n = null !== (i = e[s]) && void 0 !== i ? i : 0;
                            if (e[s] = n + 1, n > 0) {
                                let e = "".concat(s, "~").concat(n);
                                t = {
                                    ...t,
                                    name: e,
                                    originalName: s,
                                    allNamesString: ":".concat(e, ":")
                                }
                            }
                            if (this.emojisByName[t.name] = t, "names" in t && (null === (l = t.names) || void 0 === l || l.slice(1).forEach(e => this.unicodeAliases[e] = t.name)), null != t.id) {
                                let e, i;
                                switch (this.emojisById[t.id] = t, this.customEmojis[t.name] = t, t.type) {
                                    case F.EmojiTypes.GUILD:
                                        e = t.guildId, i = !0;
                                        break;
                                    case F.EmojiTypes.PACK:
                                        e = t.packId
                                }
                                null != e && (null != this.groupedCustomEmojis[e] ? this.groupedCustomEmojis[e].push(t) : this.groupedCustomEmojis[e] = [t], i && P.default.compare(t.id, V) >= 0 && (null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e].push(t) : this.newlyAddedEmoji[e] = [t]))
                            }
                            null == this.disambiguatedEmoji && (this.disambiguatedEmoji = []), this.disambiguatedEmoji.push(t)
                        },
                        l = e => {
                            !Object.prototype.hasOwnProperty.call(this.emoticonsByName, e.name) && (t.push(D.default.escape(e.name)), this.emoticonsByName[e.name] = e)
                        };
                    L.default.forEach(i);
                    let s = e => {
                        let t = Z[null == e ? "null" : e];
                        null != t && (u.each(t.usableEmojis, i), u.each(t.emoticons, l))
                    };
                    s(this.guildId);
                    for (let e in this.newlyAddedEmoji) null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e] = this.newlyAddedEmoji[e].sort((e, t) => P.default.compare(t.id, e.id)).slice(0, 3) : this.newlyAddedEmoji[e] = [];
                    O.default.getFlattenedGuildIds().forEach(e => {
                        e !== this.guildId && s(e)
                    }), _.default.getPacksForUser().map(e => {
                        null != e.content.emojis && u.each(e.content.emojis, i)
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
            el._lastInstance = null;
            let es = new h.default({
                computeBonus: () => 100,
                computeWeight: e => {
                    let t = 0;
                    return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                },
                lookupKey: e => null !== (n = L.default.getByName(e)) && void 0 !== n ? n : ee(e),
                afterCompute: () => {
                    el.resetFrequentlyUsed(), z = W.slice(0), !u.some(Z, e => e.usableEmojis.length > 0) && z.splice(W.indexOf(x.EmojiCategories.CUSTOM), 1)
                },
                numFrequentlyItems: 42
            });

            function en() {
                Z = {}, $.clear(), Q = {}, el.reset(), X.clear(), Y = 2
            }

            function eo(e) {
                let t = Z[e];
                null != t && delete Z[e]
            }

            function eu() {
                Q = null, el.reset(), 0 !== Y && es.compute()
            }

            function er(e, t) {
                if (eo(e), el.clear(e), null == t) return;
                let i = A.default.getCurrentUser();
                if (null == i) return;
                let l = (0, I.canUseRoleSubscriptionIAP)(e);
                Z[e] = new K(e, i.id, t, l)
            }

            function ea() {
                var e, t, i, l;
                let s = C.default.settings,
                    n = null === (t = s.textAndImages) || void 0 === t ? void 0 : null === (e = t.diversitySurrogate) || void 0 === e ? void 0 : e.value;
                null != n && L.default.setDefaultDiversitySurrogate(n), el.reset();
                let o = C.default.frecencyWithoutFetchingLatest,
                    r = null !== (l = null === (i = o.emojiFrecency) || void 0 === i ? void 0 : i.emojis) && void 0 !== l ? l : {};
                es.overwriteHistory(u.mapValues(r, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), q.pendingUsages), u.isEmpty(r) && u.isEmpty(q.pendingUsages) && C.default.hasLoaded(H.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (es.track("thumbsup"), es.track("thumbsup"), es.track("eyes"), es.track("eyes"), es.track("laughing"), es.track("laughing"), es.track("watermelon"), es.track("fork_and_knife"), es.track("yum"), es.track("weary"), es.track("tired_face"), es.track("poop"), es.track("100"))
            }

            function ed(e) {
                for (let l of e) {
                    var t, i;
                    let e = null !== (i = null !== (t = l.id) && void 0 !== t ? t : l.uniqueName) && void 0 !== i ? i : l.name;
                    null != e && (es.track(e), q.pendingUsages.push({
                        key: e,
                        timestamp: Date.now()
                    }))
                }
                let l = e.length > 0;
                return l && 0 !== Y && es.compute(), l
            }

            function em(e) {
                let {
                    guildId: t,
                    role: i
                } = e;
                if (!(0, y.isSubscriptionRole)(i)) return !1;
                {
                    let e = Z[t];
                    er(t, null == e ? void 0 : e.emojis), eu()
                }
            }

            function ec() {
                $ = _.default.getPacksById(), eu()
            }
            class eh extends m.default.PersistedStore {
                initialize(e) {
                    this.waitFor(g.default, U.default, T.default, N.default, _.default, S.default, v.default, R.default, A.default), null != e && (q = e), this.syncWith([C.default], ea), this.syncWith([_.default], ec)
                }
                getState() {
                    return q
                }
                hasPendingUsage() {
                    return q.pendingUsages.length > 0
                }
                get categories() {
                    return z
                }
                get diversitySurrogate() {
                    var e;
                    return null !== (e = L.default.getDefaultDiversitySurrogate()) && void 0 !== e ? e : ""
                }
                get emojiFrecencyWithoutFetchingLatest() {
                    return es
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
                    return ei(), el.get(e)
                }
                getSearchResultsOrder(e, t, i) {
                    let l = t.toLowerCase(),
                        s = D.default.escape(l);
                    if (e.length > 0) {
                        let t = RegExp("^".concat(s), "i"),
                            i = new RegExp("(^|_|[A-Z])".concat(s, "s?([A-Z]|_|$)")),
                            n = i.test.bind(i),
                            o = t.test.bind(t),
                            r = function(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
                                if (null == e || null == t) return 0;
                                let i = e.toLowerCase(),
                                    s = 1 + (i === l ? 4 : 0) + (n(i) || n(e) ? 2 : 0) + (o(e) ? 1 : 0),
                                    u = es.getScore(t);
                                return null != u && (s *= u / 100), s
                            };
                        e = u.orderBy(e, [e => null != e.names ? r(e.names[0]) : r(e.name, e.id), e => null != e.names ? e.names[0] : e.name], ["desc", "asc"])
                    }
                    return i > 0 && (e = e.slice(0, i)), e
                }
                searchWithoutFetchingLatest(e) {
                    let t, {
                        channel: i,
                        query: l,
                        count: s = 0,
                        intention: n,
                        includeExternalGuilds: o = !0,
                        canViewAndUsePackEmoji: u,
                        matchComparator: r
                    } = e;
                    ei();
                    let a = l.toLowerCase(),
                        d = D.default.escape(a);
                    if (null == r) {
                        let e = RegExp("".concat(d), "i");
                        t = e.test.bind(e)
                    } else t = r;
                    let m = null != i ? i.getGuildId() : null,
                        c = el.get(m).nameMatchesChain(t).reduce((e, t) => {
                            let l = k.default.getEmojiUnavailableReason({
                                emoji: t,
                                channel: i,
                                intention: n,
                                canViewAndUsePackEmoji: u
                            });
                            if (l === M.EmojiDisabledReasons.PREMIUM_LOCKED) e.locked.push(t);
                            else if (null == l) {
                                let l = !o && !k.default.isInternalEmojiForGuildId(t, null == i ? void 0 : i.getGuildId());
                                !l && e.unlocked.push(t)
                            }
                            return e
                        }, {
                            unlocked: [],
                            locked: []
                        });
                    return {
                        unlocked: this.getSearchResultsOrder(c.unlocked, l, s),
                        locked: this.getSearchResultsOrder(c.locked, l, 0)
                    }
                }
                getUsableCustomEmojiById(e) {
                    return ei(), ee(e)
                }
                getCustomEmojiById(e) {
                    return ei(),
                        function(e) {
                            var t, i, l;
                            let s = et()[e];
                            return null != s ? null !== (l = null === (t = Z[s]) || void 0 === t ? void 0 : t.getEmoji(e)) && void 0 !== l ? l : null === (i = $.get(s)) || void 0 === i ? void 0 : i.emojiById[e] : null
                        }(e)
                }
                getTopEmoji(e) {
                    return null == e ? J : (ei(), el.get(e).getTopEmojiWithoutFetchingLatest(e))
                }
                getNewlyAddedEmoji(e) {
                    return null == e ? J : (ei(), el.get(e).getNewlyAddedEmojiForGuild(e))
                }
                getBackfillTopEmojis(e) {
                    return null == e ? J : (ei(), el.get(e).getBackfillTopEmojis(e))
                }
                getTopEmojisMetadata(e) {
                    return X.get(e)
                }
                hasUsableEmojiInAnyGuild() {
                    ei();
                    let e = Object.keys(Z);
                    return e.some(e => Z[e].usableEmojis.length > 0)
                }
                hasFavoriteEmojis(e) {
                    let t = el.get(e);
                    return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0
                }
            }
            eh.displayName = "EmojiStore", eh.persistKey = "EmojiStoreV2";
            var eg = new eh(c.default, {
                BACKGROUND_SYNC: function() {
                    en()
                },
                CONNECTION_OPEN: function(e) {
                    for (let t of (en(), e.guilds)) er(t.id, t.emojis);
                    Y = e.guilds.every(e => null != e.emojis) ? 1 : 0, eu()
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    var t;
                    let {
                        guildId: i,
                        user: l
                    } = e;
                    if (l.id !== (null === (t = A.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return;
                    let s = Z[i];
                    er(i, null == s ? void 0 : s.usableEmojis), eu()
                },
                GUILD_CREATE: function(e) {
                    0 !== Y && null == e.guild.emojis && null != e.guild.emojiUpdates && (Y = 0), er(e.guild.id, e.guild.emojis), eu()
                },
                GUILD_UPDATE: function(e) {
                    er(e.guild.id, e.guild.emojis), eu()
                },
                GUILD_EMOJIS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        emojis: i
                    } = e;
                    er(t, i), eu()
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    eo(t.id), X.delete(t.id), eu()
                },
                MESSAGE_REACTION_ADD: function(e) {
                    if (!e.optimistic) return !1;
                    let t = null != e.emoji.id && "0" !== e.emoji.id ? e.emoji : L.default.getByName(L.default.convertSurrogateToName(e.emoji.name, !1));
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
                    if (p.default.setEmojiLocale(S.default.locale), t !== H.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !i) return !1;
                    q.pendingUsages = []
                },
                GUILD_ROLE_CREATE: em,
                GUILD_ROLE_UPDATE: em,
                TOP_EMOJIS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        topEmojisMetadata: i
                    } = e;
                    X.set(t, {
                        emojiIds: i.map(e => e.emojiId),
                        topEmojisTTL: a(a()).add(1, "days").valueOf()
                    })
                },
                INVENTORY_FETCH_SUCCESS: function(e) {
                    let {} = e;
                    ec()
                },
                INVENTORY_COLLECT_PACK_SUCCESS: function(e) {
                    let {} = e;
                    eu()
                },
                INVENTORY_REMOVE_PACK_SUCCESS: function(e) {
                    let {} = e;
                    eu()
                },
                LOGOUT: function(e) {
                    en()
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
            var l = i("446674"),
                s = i("913144");
            let n = {
                    captionsById: new Map
                },
                o = n,
                u = !1,
                r = null;
            class a extends l.default.PersistedStore {
                initialize(e) {
                    o = null != e ? {
                        captionsById: new Map(e.captionsById)
                    } : n
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
                    return u
                }
                getEmojiCaptionsTTL() {
                    return r
                }
                clear() {
                    o = n, u = !1, r = null
                }
            }
            a.displayName = "EmojiCaptionsStore", a.persistKey = "EmojiCaptionsStore";
            var d = new a(s.default, {
                LOGOUT: function() {
                    o = n, u = !1, r = null
                },
                EMOJI_CAPTIONS_FETCH: function(e) {
                    let {} = e;
                    !u && (u = !0)
                },
                EMOJI_CAPTIONS_FETCH_SUCCESS: function(e) {
                    let {
                        emojiCaptions: t
                    } = e;
                    o.captionsById = new Map(Object.entries(t)), u = !1, r = Date.now() + 216e5
                },
                EMOJI_CAPTIONS_FETCH_ERROR: function(e) {
                    let {
                        is4XXError: t
                    } = e;
                    u = !1;
                    r = Date.now() + 6e4 * (t ? 10 : 1)
                },
                POST_CONNECTION_OPEN: function(e) {
                    let {} = e;
                    u = !1
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
            var l = i("446674"),
                s = i("913144");
            let n = {
                    topEmojisByGuildId: {}
                },
                o = n,
                u = {};
            class r extends l.default.PersistedStore {
                initialize(e) {
                    o = null != e ? e : n
                }
                getState() {
                    return o
                }
                getTopEmojiIdsByGuildId(e) {
                    return o.topEmojisByGuildId[e]
                }
                getIsFetching(e) {
                    return u[e]
                }
            }
            r.displayName = "TopEmojiStore", r.persistKey = "TopEmojiStore";
            var a = new r(s.default, {
                LOGOUT: function() {
                    o = n, u = {}
                },
                TOP_EMOJIS_FETCH: function(e) {
                    let {
                        guildId: t
                    } = e;
                    u[t] = !0
                },
                TOP_EMOJIS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        topEmojisMetadata: i
                    } = e;
                    o.topEmojisByGuildId[t] = i.map(e => e.emojiId), u[t] = !1
                }
            })
        },
        505985: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                canUseRoleSubscriptionIAP: function() {
                    return r
                }
            }), i("884691"), i("65597");
            var l = i("305961"),
                s = i("773336"),
                n = i("954224"),
                o = i("49111");
            let u = [o.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE];

            function r(e) {
                if (!(0, s.isIOS)()) return !1;
                let t = (0, n.getSystemVersion)();
                if (null == t || -1 === function(e, t) {
                        let i = e.split(".").map(Number),
                            l = t.split(".").map(Number),
                            s = Math.max(i.length, l.length);
                        for (let e = 0; e < s; e++) {
                            var n, o;
                            let t = null !== (n = i[e]) && void 0 !== n ? n : 0,
                                s = null !== (o = l[e]) && void 0 !== o ? o : 0;
                            if (t < s) return -1;
                            if (t > s) return 1
                        }
                        return 0
                    }(t, "13.2")) return !1;
                let i = l.default.getGuild(e);
                if (null == i) return !1;
                let o = u.every(e => i.hasFeature(e));
                return !!o || !1
            }
        },
        954224: function(e, t, i) {
            "use strict";

            function l() {
                return null
            }
            i.r(t), i.d(t, {
                getSystemVersion: function() {
                    return l
                }
            })
        }
    }
]);
//# sourceMappingURL=df9c1357bd32e8a7f4dd.js.map