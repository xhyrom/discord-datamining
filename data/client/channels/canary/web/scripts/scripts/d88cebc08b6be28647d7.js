(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["10357"], {
        898085: function(e, t, n) {},
        495873: function(e, t, n) {},
        778583: function(e, t, n) {},
        482803: function(e, t, n) {},
        503745: function(e, t, n) {},
        555919: function(e, t, n) {
            "use strict";
            e.exports = ["7z", "ade", "adp", "arj", "apk", "application", "appx", "appxbundle", "asx", "bas", "bat", "cab", "cer", "chm", "cmd", "cnt", "cpl", "crt", "csh", "deb", "der", "diagcab", "dll", "dmg", "docm", "dotm", "ex", "ex_", "exe", "fxp", "gadget", "grp", "gz", "hlp", "hpj", "hta", "htc", "inf", "ins", "ipa", "iso", "isp", "its", "jar", "jnlp", "jse", "ksh", "lib", "lnk", "mad", "maf", "mag", "mam", "maq", "mar", "mas", "mat", "mau", "mav", "maw", "mcf", "mda", "mdb", "mde", "mdt", "mdw", "mdz", "msc", "msh", "msh1", "msh1xml", "msh2", "msh2xml", "mshxml", "msi", "msix", "msixbundle", "msp", "mst", "msu", "nsh", "ops", "osd", "pcd", "pif", "pkg", "pl", "plg", "potm", "ppam", "ppsm", "pptm", "prf", "prg", "printerexport", "ps1", "ps1xml", "ps2", "ps2xml", "psc1", "psc2", "psd1", "psdm1", "pst", "py", "pyc", "pyo", "pyw", "pyz", "pyzw", "rar", "reg", "rpm", "scf", "scr", "sct", "shb", "shs", "sldm", "sys", "theme", "tmp", "url", "vb", "vbe", "vbp", "vbs", "vhd", "vhdx", "vsmacros", "vsw", "vxd", "webpnp", "ws", "wsc", "wsf", "wsh", "xbap", "xlam", "xll", "xlsm", "xltm", "xnk", "z", "zip"]
        },
        145292: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trustDomain: function() {
                    return l
                },
                trustProtocol: function() {
                    return i
                }
            });
            var r = n("913144");

            function l(e) {
                r.default.dispatch({
                    type: "MASKED_LINK_ADD_TRUSTED_DOMAIN",
                    url: e
                })
            }

            function i(e) {
                r.default.dispatch({
                    type: "MASKED_LINK_ADD_TRUSTED_PROTOCOL",
                    url: e
                })
            }
        },
        225664: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                },
                useBurstReactionsExperiment: function() {
                    return s
                },
                BurstReactionsUserExperiment: function() {
                    return u
                },
                useBurstReactionsUserExperiment: function() {
                    return o
                }
            });
            var r = n("862205"),
                l = n("162771");
            let i = (0, r.createExperiment)({
                kind: "guild",
                id: "2023-02_burst_reaction_guild_experiment",
                label: "Burst Reactions",
                defaultConfig: {
                    enabled: !1,
                    hasTabUI: !1,
                    hasInfinite: !1,
                    hasFreeBursts: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0,
                        hasTabUI: !1,
                        hasInfinite: !1,
                        hasFreeBursts: !0
                    }
                }, {
                    id: 2,
                    label: "Tab UI",
                    config: {
                        enabled: !0,
                        hasTabUI: !0,
                        hasInfinite: !1,
                        hasFreeBursts: !1
                    }
                }, {
                    id: 4,
                    label: "Free Bursts",
                    config: {
                        enabled: !0,
                        hasTabUI: !0,
                        hasInfinite: !1,
                        hasFreeBursts: !0
                    }
                }]
            });
            var a = i;
            let s = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = null != e ? e : l.default.getGuildId(),
                        r = i.useExperiment({
                            guildId: null != n ? n : "",
                            location: "169958_1"
                        }, {
                            autoTrackExposure: t
                        }),
                        a = u.useExperiment({
                            location: "169958_2"
                        }, {
                            autoTrackExposure: !0
                        });
                    return {
                        enabled: r.enabled || a.enabled,
                        guildEnabled: r.enabled,
                        userEnabled: a.enabled,
                        hasTwoButtonEntryPoint: !!a.enabled && a.hasTwoButtonEntryPoint,
                        hasTabUI: a.enabled ? a.hasTabUI : r.hasTabUI,
                        hasFreeBursts: a.enabled ? a.hasFreeBursts : r.hasFreeBursts,
                        hasBurstShake: a.hasBurstShake,
                        hasPlayRandomAnimations: a.hasPlayRandomAnimations,
                        hasBurstGlow: a.hasBurstGlow,
                        hasSendAnimation: a.hasSendAnimation,
                        hasUnlimited: a.hasUnlimited,
                        hasBurstToggle: a.hasBurstToggle
                    }
                },
                u = (0, r.createExperiment)({
                    kind: "user",
                    id: "2022-09_burst_reactions",
                    label: "Burst Reactions User Experiment",
                    defaultConfig: {
                        enabled: !1,
                        hasTabUI: !1,
                        hasTwoButtonEntryPoint: !1,
                        hasFreeBursts: !1,
                        hasUnlimited: !1,
                        hasBurstToggle: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "User two entry points",
                        config: {
                            enabled: !0,
                            hasTabUI: !1,
                            hasTwoButtonEntryPoint: !0,
                            hasFreeBursts: !0
                        }
                    }, {
                        id: 2,
                        label: "User Tab UI",
                        config: {
                            enabled: !0,
                            hasTabUI: !0,
                            hasTwoButtonEntryPoint: !1,
                            hasFreeBursts: !1
                        }
                    }, {
                        id: 4,
                        label: "User Free Bursts",
                        config: {
                            enabled: !0,
                            hasTabUI: !0,
                            hasTwoButtonEntryPoint: !1,
                            hasFreeBursts: !0
                        }
                    }, {
                        id: 5,
                        label: "User Free Bursts",
                        config: {
                            enabled: !0,
                            hasTabUI: !0,
                            hasTwoButtonEntryPoint: !1,
                            hasFreeBursts: !0
                        }
                    }, {
                        id: 6,
                        label: "Combined entry point and tabs",
                        config: {
                            enabled: !0,
                            hasTabUI: !0,
                            hasTwoButtonEntryPoint: !0,
                            hasFreeBursts: !0
                        }
                    }, {
                        id: 7,
                        label: "Combined entry point and tabs + double weekly refills",
                        config: {
                            enabled: !0,
                            hasTabUI: !0,
                            hasTwoButtonEntryPoint: !0,
                            hasFreeBursts: !0
                        }
                    }, {
                        id: 8,
                        label: "All additional polish",
                        config: {
                            enabled: !0,
                            hasTabUI: !0,
                            hasTwoButtonEntryPoint: !0,
                            hasFreeBursts: !0,
                            hasBurstShake: !0,
                            hasDesktopNotifications: !0,
                            hasPlayRandomAnimations: !0,
                            hasBurstGlow: !0,
                            hasSendAnimation: !0
                        }
                    }, {
                        id: 9,
                        label: "All additional polish except notifications",
                        config: {
                            enabled: !0,
                            hasTabUI: !0,
                            hasTwoButtonEntryPoint: !0,
                            hasFreeBursts: !0,
                            hasBurstShake: !0,
                            hasDesktopNotifications: !1,
                            hasPlayRandomAnimations: !0,
                            hasBurstGlow: !0,
                            hasSendAnimation: !0
                        }
                    }, {
                        id: 10,
                        label: "The exact same as bucket six, just with a different label",
                        config: {
                            enabled: !0,
                            hasTabUI: !0,
                            hasTwoButtonEntryPoint: !0,
                            hasFreeBursts: !0
                        }
                    }, {
                        id: 11,
                        label: "New send experience",
                        config: {
                            enabled: !0,
                            hasTabUI: !1,
                            hasTwoButtonEntryPoint: !1,
                            hasFreeBursts: !1,
                            hasBurstShake: !0,
                            hasDesktopNotifications: !1,
                            hasPlayRandomAnimations: !0,
                            hasBurstGlow: !0,
                            hasSendAnimation: !0,
                            hasUnlimited: !0,
                            hasBurstToggle: !0
                        }
                    }]
                }),
                o = () => {
                    let e = u.useExperiment({
                        location: "169958_3"
                    }, {
                        autoTrackExposure: !0
                    }).enabled;
                    return e
                }
        },
        57999: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2022-10_context_menu_and_new_media_picker",
                label: "Context Menu and New Media Picker",
                defaultConfig: {
                    enabled: !1,
                    persistentGiftButton: !0
                },
                treatments: [{
                    id: 1,
                    label: "New media picker is enabled. Gift button is visible alongside Create Chread",
                    config: {
                        enabled: !0,
                        persistentGiftButton: !0
                    }
                }, {
                    id: 2,
                    label: "New media picker is enabled. Gift button is NOT visible alongside Create Chread",
                    config: {
                        enabled: !0,
                        persistentGiftButton: !1
                    }
                }]
            })
        },
        389806: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("862205");
            let l = (0, r.createExperiment)({
                kind: "user",
                id: "2023-03_store_latest_message_data",
                label: "Store latest message data",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use latest data from api/gateway",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var i = l
        },
        408062: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var r = n("917351"),
                l = n.n(r),
                i = n("389806"),
                a = n("115718"),
                s = n("280468"),
                u = n("692038"),
                o = n("299039"),
                d = n("35013"),
                c = n("49111");

            function f(e, t) {
                let n = e.get(t.id);
                return null == n || function(e, t) {
                    var n, r;
                    let l = null != e.editedTimestamp ? +e.editedTimestamp.toDate() : 0,
                        i = null != t.edited_timestamp ? +new Date(t.edited_timestamp) : 0;
                    return !!(i > l) || !!(e.embeds.length < (null !== (r = null === (n = t.embeds) || void 0 === n ? void 0 : n.length) && void 0 !== r ? r : 0)) || e.content !== t.content
                }(n, t) || e.cached ? (0, u.createMessageRecord)(t) : n
            }
            class h {
                clone() {
                    let e = new h(this._isCacheBefore);
                    return e._map = {
                        ...this._map
                    }, e._messages = [...this._messages], e._wasAtEdge = this._wasAtEdge, e
                }
                get wasAtEdge() {
                    return this._wasAtEdge
                }
                set wasAtEdge(e) {
                    this._wasAtEdge = e
                }
                get length() {
                    return this._messages.length
                }
                clear() {
                    this._map = {}, this._messages = [], this._wasAtEdge = !1
                }
                remove(e) {
                    this._messages = l.filter(this._messages, t => {
                        let {
                            id: n
                        } = t;
                        return n !== e
                    }), delete this._map[e]
                }
                removeMany(e) {
                    l.each(e, e => {
                        delete this._map[e]
                    }), this._messages = this._messages.filter(t => -1 === e.indexOf(t.id))
                }
                replace(e, t) {
                    let n = this._map[e];
                    null != n && (delete this._map[e], this._map[t.id] = t, this._messages[this._messages.indexOf(n)] = t)
                }
                update(e, t) {
                    let n = this._map[e];
                    if (null == n) return;
                    let r = t(n);
                    this._map[n.id] = r, this._messages[this._messages.indexOf(n)] = r
                }
                has(e) {
                    return null != this._map[e]
                }
                get(e) {
                    return this._map[e]
                }
                forEach(e, t) {
                    this._messages.forEach(e, t)
                }
                cache(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    0 === this.length && (this._wasAtEdge = t);
                    let n = this._messages.length + e.length;
                    if (n > c.MAX_MESSAGE_CACHE_SIZE) {
                        if (this._wasAtEdge = !1, e.length > c.MAX_MESSAGE_CACHE_SIZE) {
                            this._isCacheBefore ? this._messages = e.slice(e.length - c.MAX_MESSAGE_CACHE_SIZE) : this._messages = e.slice(0, c.MAX_MESSAGE_CACHE_SIZE), this._map = {}, this._messages.forEach(e => this._map[e.id] = e);
                            return
                        }
                        let t = c.MAX_MESSAGE_CACHE_SIZE - e.length;
                        this._isCacheBefore ? this._messages = this._messages.slice(Math.max(this._messages.length - t, 0)) : this._messages = this._messages.slice(0, t)
                    }
                    this._messages = this._isCacheBefore ? [...this._messages, ...e] : [...e, ...this._messages], this._map = {}, this._messages.forEach(e => this._map[e.id] = e)
                }
                extractAll() {
                    let e = this._messages;
                    return this._messages = [], this._map = {}, e
                }
                extract(e) {
                    let t;
                    if (this._isCacheBefore) {
                        let n = Math.max(this.length - e, 0),
                            r = this.length;
                        t = this._messages.slice(n, r), this._messages.splice(n)
                    } else {
                        let n = Math.min(e, this.length);
                        t = this._messages.slice(0, n), this._messages.splice(0, e)
                    }
                    return t.forEach(e => delete this._map[e.id]), t
                }
                constructor(e) {
                    this._messages = [], this._map = {}, this._wasAtEdge = !1, this._isCacheBefore = e
                }
            }
            class E {
                static forEach(e) {
                    l.forEach(E._channelMessages, e)
                }
                static get(e) {
                    return E._channelMessages[e]
                }
                static hasPresent(e) {
                    let t = E.get(e);
                    return null != t && t.hasPresent()
                }
                static getOrCreate(e) {
                    let t = E._channelMessages[e];
                    return null == t && (t = new E(e), E._channelMessages[e] = t), t
                }
                static clear(e) {
                    delete E._channelMessages[e]
                }
                static clearCache(e) {
                    let t = E._channelMessages[e];
                    null != t && (t._before.clear(), t._after.clear(), this.commit(t))
                }
                static commit(e) {
                    E._channelMessages[e.channelId] = e
                }
                mutate(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = new E(this.channelId);
                    return n._array = t ? [...this._array] : this._array, n._map = t ? {
                        ...this._map
                    } : this._map, n._after = t ? this._after.clone() : this._after, n._before = t ? this._before.clone() : this._before, e instanceof Function ? (n.ready = this.ready, n.jumpType = this.jumpType, n.jumpTargetId = this.jumpTargetId, n.jumpTargetOffset = this.jumpTargetOffset, n.jumpSequenceId = this.jumpSequenceId, n.jumped = this.jumped, n.jumpedToPresent = this.jumpedToPresent, n.jumpFlash = this.jumpFlash, n.jumpReturnTargetId = this.jumpReturnTargetId, n.focusTargetId = this.focusTargetId, n.hasMoreBefore = this.hasMoreBefore, n.hasMoreAfter = this.hasMoreAfter, n.loadingMore = this.loadingMore, n.revealedMessageId = this.revealedMessageId, n.cached = this.cached, n.hasFetched = this.hasFetched, n.error = this.error, e(n)) : "object" == typeof e && (n.ready = void 0 !== e.ready ? !0 === e.ready : this.ready, n.jumpType = void 0 !== e.jumpType ? e.jumpType : this.jumpType, n.jumpTargetId = void 0 !== e.jumpTargetId ? e.jumpTargetId : this.jumpTargetId, n.jumpTargetOffset = void 0 !== e.jumpTargetOffset ? e.jumpTargetOffset : this.jumpTargetOffset, n.jumpSequenceId = void 0 !== e.jumpSequenceId ? e.jumpSequenceId : this.jumpSequenceId, n.jumped = void 0 !== e.jumped ? !0 === e.jumped : this.jumped, n.jumpedToPresent = void 0 !== e.jumpedToPresent ? !0 === e.jumpedToPresent : this.jumpedToPresent, n.jumpFlash = void 0 !== e.jumpFlash ? !0 === e.jumpFlash : this.jumpFlash, n.jumpReturnTargetId = void 0 !== e.jumpReturnTargetId ? e.jumpReturnTargetId : this.jumpReturnTargetId, n.focusTargetId = void 0 !== e.focusTargetId ? e.focusTargetId : this.focusTargetId, n.hasMoreBefore = void 0 !== e.hasMoreBefore ? !0 === e.hasMoreBefore : this.hasMoreBefore, n.hasMoreAfter = void 0 !== e.hasMoreAfter ? !0 === e.hasMoreAfter : this.hasMoreAfter, n.loadingMore = void 0 !== e.loadingMore ? e.loadingMore : this.loadingMore, n.revealedMessageId = void 0 !== e.revealedMessageId ? e.revealedMessageId : this.revealedMessageId, n.cached = void 0 !== e.cached ? e.cached : this.cached, n.hasFetched = void 0 !== e.hasFetched ? e.hasFetched : this.hasFetched, n.error = void 0 !== e.error ? e.error : this.error), n
                }
                get length() {
                    return this._array.length
                }
                toArray() {
                    return [...this._array]
                }
                forEach(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (n) {
                        let n = this._array;
                        for (let r = n.length - 1; r >= 0 && !1 !== e.call(t, n[r], r); r--);
                    } else this._array.forEach(e, t)
                }
                reduce(e, t) {
                    return this._array.reduce(e, t)
                }
                some(e, t) {
                    return this._array.some(e, t)
                }
                forAll(e, t) {
                    this._before.forEach(e, t), this._array.forEach(e, t), this._after.forEach(e, t)
                }
                findOldest(e) {
                    var t, n;
                    return null !== (n = null !== (t = l.find(this._before._messages, e)) && void 0 !== t ? t : l.find(this._array, e)) && void 0 !== n ? n : l.find(this._after._messages, e)
                }
                findNewest(e) {
                    var t, n;
                    return null !== (n = null !== (t = l.findLast(this._after._messages, e)) && void 0 !== t ? t : l.findLast(this._array, e)) && void 0 !== n ? n : l.findLast(this._before._messages, e)
                }
                map(e, t) {
                    return this._array.map(e, t)
                }
                first() {
                    return this._array[0]
                }
                last() {
                    return this._array[this._array.length - 1]
                }
                get(e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = this._map[e];
                    return null == r && n ? null !== (t = this._before.get(e)) && void 0 !== t ? t : this._after.get(e) : r
                }
                getByIndex(e) {
                    return this._array[e]
                }
                getAfter(e) {
                    let t = this.get(e);
                    if (null == t) return null;
                    let n = this._array.indexOf(t);
                    return -1 === n || n === this.length - 1 ? null : this._array[n + 1]
                }
                getManyAfter(e, t, n) {
                    let r = this.get(e);
                    if (null == r) return null;
                    let l = this._array.indexOf(r);
                    if (-1 === l) return null;
                    let i = [];
                    for (let e = l + 1; e < this.length && (-1 === t || i.length < t); e++)(null == n || n(this._array[e])) && i.push(this._array[e]);
                    return i
                }
                getManyBefore(e, t, n) {
                    let r = this.get(e);
                    if (null == r) return null;
                    let l = this._array.indexOf(r);
                    if (-1 === l) return null;
                    let i = [];
                    for (let e = l - 1; e >= 0 && (-1 === t || i.length < t); e--)(null == n || n(this._array[e])) && i.unshift(this._array[e]);
                    return i
                }
                has(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return null != this._map[e] || t && (this._before.has(e) || this._after.has(e))
                }
                indexOf(e) {
                    let t = -1;
                    return this._array.find((n, r) => n.id === e && (t = r, !0)), t
                }
                hasPresent() {
                    return this._after.length > 0 && this._after.wasAtEdge || !this.hasMoreAfter
                }
                hasBeforeCached(e) {
                    if (this.length > 0 && this._before.length > 0) {
                        let t = this.first();
                        return null != t && t.id === e
                    }
                    return !1
                }
                hasAfterCached(e) {
                    if (this.length > 0 && this._after.length > 0) {
                        let t = this.last();
                        return null != t && t.id === e
                    }
                    return !1
                }
                update(e, t) {
                    let n = this._map[e];
                    if (null == n) return this._before.has(e) ? this.mutate(n => n._before.update(e, t), !0) : this._after.has(e) ? this.mutate(n => n._after.update(e, t), !0) : this;
                    let r = t(n);
                    return this.mutate(e => {
                        e._map[n.id] = r, e._array[e._array.indexOf(n)] = r
                    }, !0)
                }
                replace(e, t) {
                    let n = this._map[e];
                    if (null == n) return this._before.has(e) ? this.mutate(n => n._before.replace(e, t), !0) : this._after.has(e) ? this.mutate(n => n._after.replace(e, t), !0) : this;
                    return this.mutate(r => {
                        delete r._map[e], r._map[t.id] = t, r._array[r._array.indexOf(n)] = t
                    }, !0)
                }
                remove(e) {
                    return this.mutate(t => {
                        delete t._map[e], t._array = t._array.filter(t => t.id !== e), t._before.remove(e), t._after.remove(e)
                    }, !0)
                }
                removeMany(e) {
                    return e.some(e => this.has(e)) ? this.mutate(t => {
                        l.each(e, e => {
                            delete t._map[e]
                        }), t._array = t._array.filter(t => -1 === e.indexOf(t.id)), t._before.removeMany(e), t._after.removeMany(e)
                    }, !0) : this
                }
                merge(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return this.mutate(r => {
                        r._merge(e, t, n)
                    }, !0)
                }
                _merge(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (e = e.filter(e => {
                            let t = this._map[e.id];
                            return this._map[e.id] = e, null == t || (this._array[this._array.indexOf(t)] = e, !1)
                        }), n) {
                        let e = t ? this._before : this._after;
                        e.clear()
                    }
                    this._array = t ? [...e, ...this._array] : [...this._array, ...e]
                }
                mergeDelta() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    return this.mutate(r => {
                        r._before.clear(), r._after.clear();
                        let l = new Set(n);
                        e.forEach(e => l.add(e.id)), t.forEach(e => l.add(e.id)), r._array = r._array.filter(e => !l.has(e.id)).concat(e.map(e => (0, u.createMessageRecord)(e)), t.map(e => (0, u.createMessageRecord)(e))).sort((e, t) => o.default.compare(e.id, t.id))
                    })
                }
                _clearMessages() {
                    this._array = [], this._map = {}
                }
                reset(e) {
                    return this.mutate(t => {
                        t._array = e, t._map = {}, e.forEach(e => t._map[e.id] = e), t._before.clear(), t._after.clear()
                    })
                }
                truncateTop(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = this._array.length - e;
                    return n <= 0 ? this : this.mutate(e => {
                        for (let t = 0; t < n; t++) delete e._map[e._array[t].id];
                        e._before.cache(e._array.slice(0, n), !e.hasMoreBefore), e._array = e._array.slice(n), e.hasMoreBefore = !0
                    }, t)
                }
                truncateBottom(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return this._array.length <= e ? this : this.mutate(t => {
                        for (let n = e; n < this._array.length; n++) delete t._map[t._array[n].id];
                        t._after.cache(t._array.slice(e, this._array.length), !t.hasMoreAfter), t._array = t._array.slice(0, e), t.hasMoreAfter = !0
                    }, t)
                }
                jumpToPresent(e) {
                    return this.mutate(t => {
                        let n = t._after.extractAll();
                        t.hasMoreAfter = !1;
                        let r = Math.max(n.length - e, 0),
                            l = n.slice(r);
                        n.splice(r), t._before.cache(t._array), t._before.cache(n), t._clearMessages(), t._merge(l), t.hasMoreBefore = t._before.length > 0, t.jumped = !0, t.jumpTargetId = null, t.jumpTargetOffset = 0, t.jumpedToPresent = !0, t.jumpFlash = !1, t.jumpReturnTargetId = null, t.jumpSequenceId = t.jumpSequenceId + 1, t.ready = !0, t.loadingMore = !1
                    }, !0)
                }
                jumpToMessage(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        l = arguments.length > 4 ? arguments[4] : void 0;
                    return this.mutate(i => {
                        i.jumped = !0, i.jumpedToPresent = !1, i.jumpType = null != l ? l : a.JumpTypes.ANIMATED, i.jumpTargetId = e, i.jumpTargetOffset = null != e && null != n ? n : 0, i.jumpSequenceId = i.jumpSequenceId + 1, i.jumpFlash = t, i.jumpReturnTargetId = r, i.ready = !0, i.loadingMore = !1
                    }, !1)
                }
                focusOnMessage(e) {
                    return this.mutate(t => {
                        t.focusTargetId = e, t.ready = !0, t.loadingMore = !1
                    }, !1)
                }
                loadFromCache(e, t) {
                    return this.mutate(n => {
                        let r = e ? n._before : n._after;
                        n._merge(r.extract(t), e);
                        let l = r.length > 0 || !r.wasAtEdge;
                        e ? n.hasMoreBefore = l : n.hasMoreAfter = l, n.ready = !0, n.loadingMore = !1
                    }, !0)
                }
                truncate(e, t) {
                    return this.length <= c.MAX_LOADED_MESSAGES ? this : e ? this.truncateBottom(c.TRUNCATED_MESSAGE_VIEW_SIZE) : t ? this.truncateTop(c.TRUNCATED_MESSAGE_VIEW_SIZE) : this
                }
                receiveMessage(e) {
                    var t, n;
                    let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        l = null == e.nonce ? null : this.get(e.nonce, !0);
                    if (null != l && ((null === (t = e.author) || void 0 === t ? void 0 : t.id) === (null === (n = l.author) || void 0 === n ? void 0 : n.id) || null != e.interaction && e.interaction.user.id === l.author.id) && null != e.nonce && l.id === e.nonce) {
                        let t = (0, u.createMessageRecord)(e);
                        return null != l.interactionData && (t.interactionData = l.interactionData), this.replace(e.nonce, t)
                    }
                    if (this.hasMoreAfter) this._after.wasAtEdge && (this._after.wasAtEdge = !1);
                    else {
                        let t = i.default.getCurrentConfig({
                                location: "2ecb25_1"
                            }, {
                                autoTrackExposure: !1
                            }).enabled ? (0, u.createMessageRecord)(e) : f(this, e),
                            n = this.merge([t]);
                        return r ? n.truncateTop(c.TRUNCATED_MESSAGE_VIEW_SIZE, !1) : this.length > c.MAX_LOADED_MESSAGES ? n.truncateBottom(c.TRUNCATED_MESSAGE_VIEW_SIZE, !1) : n
                    }
                    return this
                }
                receivePushNotification(e) {
                    let t = null == e.nonce ? null : this.get(e.nonce, !0);
                    return null != t ? this : this.mutate({
                        ready: !0,
                        cached: !0
                    }).merge([f(this, e)])
                }
                loadStart(e) {
                    var t, n, r, l;
                    return this.mutate({
                        loadingMore: !0,
                        jumped: null != e,
                        jumpedToPresent: null !== (t = null == e ? void 0 : e.present) && void 0 !== t && t,
                        jumpTargetId: null !== (n = null == e ? void 0 : e.messageId) && void 0 !== n ? n : null,
                        jumpTargetOffset: null !== (r = null == e ? void 0 : e.offset) && void 0 !== r ? r : 0,
                        jumpReturnTargetId: null !== (l = null == e ? void 0 : e.returnMessageId) && void 0 !== l ? l : null,
                        ready: null == e && this.ready
                    })
                }
                loadComplete(e) {
                    var t, n, r, s, o, d, c, h, E, _, m;
                    let p = [...e.newMessages],
                        g = null !== (t = e.isBefore) && void 0 !== t && t,
                        T = null !== (n = e.isAfter) && void 0 !== n && n,
                        I = null !== (r = e.jump) && void 0 !== r ? r : null,
                        S = null !== (s = e.hasMoreBefore) && void 0 !== s && s,
                        A = null !== (o = e.hasMoreAfter) && void 0 !== o && o,
                        C = null !== (d = e.cached) && void 0 !== d && d,
                        v = l(p).reverse().map(i.default.getCurrentConfig({
                            location: "2ecb25_2"
                        }, {
                            autoTrackExposure: !1
                        }).enabled ? e => (0, u.createMessageRecord)(e) : e => f(this, e)).value(),
                        M = null;
                    return M = (M = (g || T) && null == I && this.ready ? this.merge(v, g, !0) : this.reset(v)).mutate({
                        ready: !0,
                        loadingMore: !1,
                        jumpType: null !== (c = null == I ? void 0 : I.jumpType) && void 0 !== c ? c : a.JumpTypes.ANIMATED,
                        jumpFlash: null !== (h = null == I ? void 0 : I.flash) && void 0 !== h && h,
                        jumped: null != I,
                        jumpedToPresent: null !== (E = null == I ? void 0 : I.present) && void 0 !== E && E,
                        jumpTargetId: null !== (_ = null == I ? void 0 : I.messageId) && void 0 !== _ ? _ : null,
                        jumpTargetOffset: null != I && null != I.messageId && null != I.offset ? I.offset : 0,
                        jumpSequenceId: null != I ? M.jumpSequenceId + 1 : M.jumpSequenceId,
                        jumpReturnTargetId: null !== (m = null == I ? void 0 : I.returnMessageId) && void 0 !== m ? m : null,
                        hasMoreBefore: null == I && T ? M.hasMoreBefore : S,
                        hasMoreAfter: null == I && g ? M.hasMoreAfter : A,
                        cached: C,
                        hasFetched: e.hasFetched,
                        error: !1
                    })
                }
                addCachedMessages(e, t) {
                    (0, s.requireSortedDescending)(e);
                    let n = e.map(e => f(this, e)).reverse();
                    return this._array.filter(e => !n.some(t => t.id === e.id)).forEach(e => d.insert(n, e, (e, t) => o.default.compare(e.id, t.id))), this.reset(n).mutate({
                        ready: !0,
                        cached: t,
                        error: !1
                    })
                }
                constructor(e) {
                    this._array = [], this._map = {}, this.channelId = e, this.ready = !1, this.jumpTargetId = null, this.jumpTargetOffset = 0, this.jumpSequenceId = 1, this.jumped = !1, this.jumpedToPresent = !1, this.jumpType = a.JumpTypes.ANIMATED, this.jumpFlash = !0, this.jumpReturnTargetId = null, this.hasMoreBefore = !0, this.hasMoreAfter = !1, this.loadingMore = !1, this.revealedMessageId = null, this._clearMessages(), this._before = new h(!0), this._after = new h(!1), this.cached = !1, this.hasFetched = !1, this.error = !1
                }
            }
            E._channelMessages = {};
            var _ = E
        },
        979911: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MessageDataType: function() {
                    return a
                },
                isMessageDataEdit: function() {
                    return M
                },
                getFailedMessageId: function() {
                    return N
                },
                default: function() {
                    return y
                }
            });
            var r, l, i, a, s = n("627445"),
                u = n.n(s),
                o = n("981980"),
                d = n("872717"),
                c = n("798609"),
                f = n("716241"),
                h = n("605250"),
                E = n("676574"),
                _ = n("618421"),
                m = n("271938"),
                p = n("985365"),
                g = n("254490"),
                T = n("231987"),
                I = n("980134"),
                S = n("282928"),
                A = n("49111");
            let C = null;
            __OVERLAY__ && (C = n("901165").default), (r = i || (i = {})).OVERLAY_UNLOCKED = "overlay_unlocked", r.OVERLAY_UNLOCKED_PINNED = "overlay_unlocked_pinned", r.OVERLAY_LOCKED_ACTIVATED = "overlay_locked_activated", (l = a || (a = {}))[l.SEND = 0] = "SEND", l[l.EDIT = 1] = "EDIT", l[l.COMMAND = 2] = "COMMAND";
            let v = e => e.type === a.SEND,
                M = e => e.type === a.EDIT,
                N = e => v(e) ? e.message.nonce : M(e) ? e.message.messageId : e.message.data.id,
                R = [6e4, 3e5];
            class O extends T.default {
                isFull() {
                    return this.queue.length >= this.maxSize
                }
                drain(e, t) {
                    switch (this.logger.log("Draining Message Queue with: ", e), e.type) {
                        case a.SEND:
                            this.handleSend(e.message, t);
                            break;
                        case a.EDIT:
                            this.handleEdit(e.message, t);
                            break;
                        case a.COMMAND:
                            this.handleCommand(e.message, t)
                    }
                }
                cancelRequest(e) {
                    var t;
                    null === (t = this.requests.get(e)) || void 0 === t || t.abort(), this.requests.delete(e), this.cancelQueueMetricTimers(e)
                }
                startQueueMetricTimers(e) {
                    let t = R.map(e => setTimeout(() => {
                        (0, f.trackWithMetadata)(A.AnalyticEvents.SEND_MESSAGE_QUEUED, {
                            queued_duration_ms: e
                        })
                    }, e));
                    this.analyticsTimeouts.set(e, t)
                }
                cancelQueueMetricTimers(e) {
                    var t;
                    null === (t = this.analyticsTimeouts.get(e)) || void 0 === t || t.forEach(clearTimeout), this.analyticsTimeouts.delete(e)
                }
                createResponseHandler(e, t) {
                    return n => {
                        if (null != e && (this.requests.delete(e), this.cancelQueueMetricTimers(e)), n.hasErr) return t(null, n);
                        null != n.body && (n.body.code === A.AbortCodes.SLOWMODE_RATE_LIMITED || n.body.code === A.AbortCodes.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) ? t(null, n) : 429 === n.status ? t({
                            retryAfter: 1e3 * n.body.retry_after
                        }) : t(null, n)
                    }
                }
                handleSend(e, t) {
                    let n;
                    let {
                        channelId: r,
                        file: l,
                        filename: a,
                        ...s
                    } = e, u = (0, _.getSignalStrength)(), c = {
                        mobile_network_type: p.default.getType(),
                        ...s,
                        ...null != u && {
                            signal_strength: u
                        }
                    };
                    if (E.default.get("send_fail_100")) {
                        this.logger.log("Skipping message sened because send_fail_100 is enabled"), t(null, {
                            ok: !1,
                            hasErr: !1,
                            status: 500,
                            headers: {},
                            body: "{}",
                            text: "Simulated failure"
                        });
                        return
                    }
                    null != C && (C.isInstanceUILocked() ? n = {
                        location: i.OVERLAY_LOCKED_ACTIVATED
                    } : !C.isInstanceUILocked() && (n = C.isPinned(A.OverlayWidgets.TEXT) ? {
                        location: i.OVERLAY_UNLOCKED_PINNED
                    } : {
                        location: i.OVERLAY_UNLOCKED
                    }));
                    let f = this.createResponseHandler(e.nonce, t),
                        h = new AbortController;
                    if (this.startQueueMetricTimers(e.nonce), null != l && null != a && "" !== a) d.default.post({
                        url: A.Endpoints.MESSAGES(r),
                        fields: Object.entries(c).map(e => {
                            let [t, n] = e;
                            return {
                                name: t,
                                value: n
                            }
                        }),
                        attachments: [{
                            name: "file",
                            file: l,
                            filename: a
                        }],
                        context: n,
                        oldFormErrors: !0,
                        signal: h.signal,
                        onRequestCreated: () => {
                            null != e.nonce && this.requests.set(e.nonce, h)
                        }
                    }, f);
                    else {
                        let t = {
                            timeout: 6e4,
                            retries: 3,
                            backoff: new o.default
                        };
                        d.default.post({
                            url: A.Endpoints.MESSAGES(r),
                            body: c,
                            context: n,
                            oldFormErrors: !0,
                            ...t,
                            signal: h.signal,
                            onRequestCreated: () => {
                                null != e.nonce && this.requests.set(e.nonce, h)
                            }
                        }, f)
                    }
                }
                handleEdit(e, t) {
                    let {
                        channelId: n,
                        messageId: r,
                        ...l
                    } = e, i = new AbortController;
                    d.default.patch({
                        url: A.Endpoints.MESSAGE(n, r),
                        body: l,
                        retries: 1,
                        oldFormErrors: !0,
                        signal: i.signal,
                        onRequestCreated: () => {
                            this.requests.set(r, i)
                        }
                    }, this.createResponseHandler(r, t))
                }
                handleCommand(e, t) {
                    let n, {
                            applicationId: r,
                            guildId: l,
                            channelId: i,
                            data: a,
                            nonce: s,
                            attachments: o,
                            maxSizeCallback: f
                        } = e,
                        h = {
                            type: c.InteractionTypes.APPLICATION_COMMAND,
                            application_id: r,
                            guild_id: l,
                            channel_id: i,
                            session_id: m.default.getSessionId(),
                            data: a,
                            nonce: s
                        };
                    if (null != o) {
                        h.data.attachments = [], n = [];
                        h.data.attachments = o.map((e, t) => (u(e.status === S.CloudUploadStatus.COMPLETED, "Uploads must be staged before trying to send a message"), (0, I.getAttachmentPayload)(e, t)))
                    }
                    let E = new AbortController;
                    d.default.post({
                        url: A.Endpoints.INTERACTIONS,
                        fields: [{
                            name: "payload_json",
                            value: JSON.stringify(h)
                        }],
                        attachments: n,
                        signal: E.signal,
                        onRequestCreated: e => {
                            this.requests.set(s, E), e.on("progress", e => {
                                let {
                                    total: t
                                } = e, n = (0, g.maxFileSize)(l);
                                if (null != t && t > n) this.cancelRequest(s), null == f || f(n)
                            })
                        }
                    }, this.createResponseHandler(s, t))
                }
                constructor(e = 5) {
                    super(new h.default("MessageQueue")), this.maxSize = e, this.requests = new Map, this.analyticsTimeouts = new Map
                }
            }
            var y = new O
        },
        282928: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CloudUploadStatus: function() {
                    return l
                },
                CloudUpload: function() {
                    return T
                }
            });
            var r, l, i = n("917351"),
                a = n.n(i),
                s = n("981980"),
                u = n("872717"),
                o = n("605250"),
                d = n("676574"),
                c = n("994440"),
                f = n("286235"),
                h = n("980134"),
                E = n("966724"),
                _ = n("142852"),
                m = n("49111");
            let p = new o.default("CloudUpload.tsx"),
                g = n("123010").default;
            (r = l || (l = {})).NOT_STARTED = "NOT_STARTED", r.STARTED = "STARTED", r.UPLOADING = "UPLOADING", r.ERROR = "ERROR", r.COMPLETED = "COMPLETED", r.CANCELED = "CANCELED";
            class T extends E.default {
                static fromJson(e) {
                    let {
                        item: t,
                        channelId: n,
                        showLargeMessageDialog: r,
                        reactNativeFileIndex: i
                    } = e, a = new T(t, n, r, i);
                    return a.status !== l.COMPLETED && (a.status = l.NOT_STARTED), Object.entries(e).forEach(e => {
                        let [t, n] = e;
                        !t.startsWith("_") && (a[t] = n)
                    }), a
                }
                retryOpts() {
                    return this.item.platform === E.UploadPlatform.REACT_NATIVE ? {
                        timeout: 36e5,
                        backoff: new s.default(500, 2048e3),
                        retries: 12
                    } : {
                        timeout: 36e5,
                        retries: 12,
                        backoff: new s.default
                    }
                }
                uploadFileToCloud() {
                    let e, t;
                    if (null == this.responseUrl) throw Error("_uploadFileToCloud - responseUrl is not set");
                    p.log("Uploading ".concat(this.id)), this.item.platform === E.UploadPlatform.REACT_NATIVE ? t = null != (e = {
                        type: this.item.mimeType,
                        uri: this.item.uri,
                        name: this.item.filename
                    }).type && "application/json" !== e.type ? e.type : "application/octet-stream" : (e = this.item.file, t = "application/octet-stream");
                    let n = a.throttle(e => {
                            this.emit("progress", e.loaded, e.total, e.loaded - this.loaded), this.loaded = e.loaded
                        }, 50),
                        r = {
                            "Content-Type": t
                        };
                    return u.default.put({
                        url: this.responseUrl,
                        body: e,
                        headers: r,
                        signal: this._abortController.signal,
                        onRequestProgress: n,
                        ...this.retryOpts()
                    })
                }
                async getSize() {
                    var e;
                    return null !== (e = this.currentSize) && void 0 !== e ? e : 0
                }
                async upload() {
                    var e, t, n;
                    if (this.status === l.COMPLETED) return;
                    if (this.setStatus(l.STARTED), this.status === l.CANCELED) {
                        this.handleComplete(this.id);
                        return
                    }
                    let r = await g.getUploadPayload(this),
                        i = (0, _.getUploadTarget)(this.item.target);
                    if (null == r.filename || "" === r.filename || 0 === this.currentSize) {
                        p.error("File does not have a filename or size is 0.", JSON.stringify(r)), this.handleError(m.AbortCodes.INVALID_FILE_ASSET);
                        return
                    }
                    if ((null !== (e = this.currentSize) && void 0 !== e ? e : 0) > i.getMaxFileSize(this.channelId)) {
                        this.handleError(m.AbortCodes.ENTITY_TOO_LARGE);
                        return
                    }
                    if (d.default.get("upload_fail_50") && .5 > Math.random()) {
                        setTimeout(() => {
                            this.handleError(500)
                        }, 1e3);
                        return
                    }
                    try {
                        p.log("Requesting upload url for ".concat(this.id));
                        let e = await u.default.post({
                            url: i.getCreateAttachmentURL(this.channelId),
                            body: {
                                files: [r]
                            },
                            ...this.retryOpts()
                        });
                        this.setResponseUrl(e.body.attachments[0].upload_url), this.setUploadedFilename(e.body.attachments[0].upload_filename)
                    } catch (r) {
                        let e = null !== (n = null == r ? void 0 : null === (t = r.body) || void 0 === t ? void 0 : t.code) && void 0 !== n ? n : r.status;
                        e !== m.AbortCodes.ENTITY_TOO_LARGE && (p.error("Requesting upload url failed with code ".concat(null != e ? e : JSON.stringify(r.body), " for ").concat(this.id)), f.default.captureException(r)), this.handleError(e);
                        return
                    }
                    try {
                        let e = await this.uploadFileToCloud();
                        this.handleComplete(e)
                    } catch (e) {
                        this.status === l.CANCELED ? this.handleComplete(e) : (p.info("Error: status ".concat(e.status, " for ").concat(this.id)), this.handleError(e))
                    }
                }
                async reactNativeCompressAndExtractData() {
                    var e, t;
                    if (!(0, _.getUploadTarget)(this.item.target).shouldReactNativeCompressUploads) {
                        p.log("reactNativeCompressAndExtractData() disabled by upload target");
                        return
                    }
                    if (!0 === this.reactNativeFilePrepped) {
                        p.log("reactNativeCompressAndExtractData() file already prepped - ".concat(this.id));
                        return
                    }
                    p.log("Starting compression/conversion for ".concat(this.id));
                    let n = await (0, c.getAttachmentFile)(this, null !== (e = this.reactNativeFileIndex) && void 0 !== e ? e : 0);
                    if (null == n || null == n.file) return;
                    let r = n.uri,
                        l = n.file.name,
                        i = n.file.type;
                    if (this.filename = l, null == l || null == r || null == i) throw p.error("Insufficient file data: ".concat({
                        filename: l,
                        uri: r,
                        mimeType: i
                    }, " for ").concat(this.id)), Error("Insufficient file data: ".concat({
                        filename: l,
                        uri: r,
                        mimeType: i
                    }));
                    let a = null !== (t = n.fileSize) && void 0 !== t ? t : (await (0, h.getFileData)(r)).size;
                    if (this.postCompressionSize = a, this.currentSize = a, null == a) throw p.error("Size missing from file data for ".concat(this.id)), Error("Size missing from file data");
                    p.log("Completed compression and conversion. Output size=".concat(a, " bytes; filename=").concat(l, " for ").concat(this.id));
                    this.item = {
                        ...this.item,
                        uri: r,
                        filename: l,
                        mimeType: i
                    }, this.reactNativeFilePrepped = !0
                }
                handleError(e) {
                    this.setStatus(l.ERROR), this.error = e;
                    try {
                        this.emit("error", e)
                    } catch {}
                    this.removeAllListeners()
                }
                handleComplete(e) {
                    this.setStatus(l.COMPLETED), p.log("Upload complete for ".concat(this.id)), this.emit("complete", e), this.removeAllListeners()
                }
                cancel() {
                    p.log("Cancelled called for ".concat(this.id)), this._abortController.abort(), this.status === l.COMPLETED && this.delete(), this.setStatus(l.CANCELED), this.emit("complete"), this.removeAllListeners()
                }
                resetState() {
                    return this.status = l.NOT_STARTED, this.uploadedFilename = void 0, this.responseUrl = void 0, this.error = void 0, this._abortController = new AbortController, super.resetState()
                }
                async delete() {
                    if (null == this.uploadedFilename) return;
                    let e = (0, _.getUploadTarget)(this.item.target).getDeleteUploadURL(this.uploadedFilename);
                    try {
                        await u.default.delete(e)
                    } catch {}
                }
                setResponseUrl(e) {
                    this.responseUrl = e
                }
                setStatus(e) {
                    this.status = e
                }
                setFilename(e) {
                    this.filename = e
                }
                setUploadedFilename(e) {
                    this.uploadedFilename = e
                }
                constructor(e, t, n, r) {
                    var i, a, s, u, o;
                    super(e, n), this.status = l.NOT_STARTED, this.loaded = 0, this.reactNativeFilePrepped = !1, this._aborted = !1, this.channelId = t, this.preCompressionSize = null !== (s = null === (i = e.file) || void 0 === i ? void 0 : i.size) && void 0 !== s ? s : 0, this.currentSize = null !== (u = null === (a = e.file) || void 0 === a ? void 0 : a.size) && void 0 !== u ? u : 0, this.reactNativeFileIndex = r, this._abortController = new AbortController, this.isClip = null !== (o = e.isClip) && void 0 !== o && o
                }
            }
        },
        966724: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UploadPlatform: function() {
                    return i
                },
                default: function() {
                    return h
                }
            });
            var r, l, i, a, s = n("44170"),
                u = n("917351"),
                o = n.n(u),
                d = n("748820"),
                c = n("254490"),
                f = n("980134");
            (r = i || (i = {}))[r.REACT_NATIVE = 0] = "REACT_NATIVE", r[r.WEB = 1] = "WEB", (l = a || (a = {}))[l.FILE_ATTACHMENT = 0] = "FILE_ATTACHMENT", l[l.IMAGE_PICKER = 1] = "IMAGE_PICKER";
            class h extends s.EventEmitter {
                cancel() {}
                resetState() {
                    return this
                }
                constructor(e, t) {
                    var n, r;
                    if (super(), this.item = e, e.platform === i.REACT_NATIVE) {
                        this.id = null !== (n = e.id) && void 0 !== n ? n : e.uri;
                        let t = (0, f.getFile)({
                            uri: e.uri,
                            overrideFilename: e.filename,
                            overrideType: e.mimeType
                        });
                        this.filename = t.filename, this.isImage = t.isImage, this.isVideo = t.isVideo, this.mimeType = t.type, this.origin = e.origin, this.durationSecs = e.durationSecs, this.waveform = e.waveform, this.isRemix = e.isRemix, this.isThumbnail = e.isThumbnail
                    } else this.id = null !== (r = e.id) && void 0 !== r ? r : o.uniqueId("upload"), this.classification = c.classifyFile(e.file), this.isImage = "image" === this.classification, this.isVideo = "video" === this.classification, this.filename = e.file.name, this.mimeType = e.file.type, this.isThumbnail = e.isThumbnail;
                    this.isClip = e.isClip, this.uniqueId = (0, d.v4)(), this.showLargeMessageDialog = t, this.spoiler = !1, this.description = null
                }
            }
        },
        142852: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UploadTargets: function() {
                    return l
                },
                getUploadTarget: function() {
                    return c
                }
            });
            var r, l, i = n("572679"),
                a = n("42203"),
                s = n("254490"),
                u = n("980134"),
                o = n("49111");
            class d {
                getCreateAttachmentURL(e) {
                    return o.Endpoints.MESSAGE_CREATE_ATTACHMENT_UPLOAD(e)
                }
                getDeleteUploadURL(e) {
                    return o.Endpoints.MESSAGE_DELETE_UPLOAD(e)
                }
                getMaxFileSize(e) {
                    let t = a.default.getBasicChannel(e);
                    return s.maxFileSize(null == t ? void 0 : t.guild_id)
                }
                getMaxAttachmentsCount() {
                    return o.MAX_UPLOAD_COUNT
                }
                getMaxTotalAttachmentSize() {
                    return u.MAX_TOTAL_ATTACHMENT_SIZE
                }
                get shouldReactNativeCompressUploads() {
                    return !0
                }
            }

            function c(e) {
                switch (e) {
                    case l.GUILD_PRODUCT_ATTACHMENT:
                        return new i.default;
                    default:
                    case l.MESSAGE_ATTACHMENT:
                        return new d
                }
            }(r = l || (l = {}))[r.MESSAGE_ATTACHMENT = 0] = "MESSAGE_ATTACHMENT", r[r.GUILD_PRODUCT_ATTACHMENT = 1] = "GUILD_PRODUCT_ATTACHMENT"
        },
        402752: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                doesImageMatchUpload: function() {
                    return l
                },
                calculateProgress: function() {
                    return i
                }
            });
            var r = n("966724");

            function l(e, t) {
                if (t.id === e.uri || null != t.id && t.id === e.id) return !0;
                if (t.item.platform === r.UploadPlatform.REACT_NATIVE) {
                    let {
                        item: r
                    } = t, {
                        filename: l
                    } = e;
                    if (r.originalUri === e.uri) return !0;
                    if (null != l) {
                        var n;
                        if (null === (n = r.originalUri) || void 0 === n ? void 0 : n.includes(l)) return !0
                    }
                }
                return !1
            }

            function i(e, t) {
                return 0 === t ? 0 : Math.min(Math.floor(e / t * 100), 100)
            }
        },
        123010: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getUploadPayload: function() {
                    return s
                },
                default: function() {
                    return u
                }
            });
            var r = n("627445"),
                l = n.n(r),
                i = n("917351"),
                a = n.n(i);

            function s(e) {
                let t = e.item.file;
                return l(null != t, "file data must not be empty"), {
                    filename: t.name,
                    file_size: t.size,
                    id: a.uniqueId(),
                    is_clip: e.isClip
                }
            }
            var u = {
                getUploadPayload: s
            }
        },
        810793: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ActivityBookmarkEmbedExperiment: function() {
                    return l
                }
            });
            var r = n("862205");
            let l = (0, r.createExperiment)({
                kind: "user",
                id: "2023-04_activity_launcher_embed",
                label: "Activity Launcher Embed",
                defaultConfig: {
                    activityBookmarkEmbedEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable the Activity Launcher Embed in chat",
                    config: {
                        activityBookmarkEmbedEnabled: !0
                    }
                }]
            })
        },
        280468: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                requireSortedDescending: function() {
                    return a
                }
            });
            var r = n("627445"),
                l = n.n(r),
                i = n("249654");

            function a(e) {
                l(e.length <= 2 || i.default.compare(e[0].id, e[e.length - 1].id) >= 0, "messages must be sorted in descending order.")
            }
        },
        195052: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("77078"),
                i = {
                    show(e) {
                        (0, l.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("745705").then(n.bind(n, "745705"));
                            return n => (0, r.jsx)(t, {
                                ...n,
                                url: e
                            })
                        })
                    }
                }
        },
        352266: function(e, t, n) {
            "use strict";
            let r;
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("446674"),
                i = n("95410"),
                a = n("913144"),
                s = n("48703"),
                u = n("599110"),
                o = n("49111");
            let d = null;
            class c extends l.default.Store {
                initialize() {
                    r = null
                }
                getCurrentRevision() {
                    if (null == r) {
                        var e;
                        r = null !== (e = i.default.get("BlockedDomainRevision")) && void 0 !== e ? e : null
                    }
                    return r
                }
                getBlockedDomainList() {
                    if (null == d) {
                        var e, t;
                        d = new Set(null !== (t = null === (e = i.default.get("BlockedDomainStore")) || void 0 === e ? void 0 : e._state) && void 0 !== t ? t : [])
                    }
                    return d
                }
                isBlockedDomain(e) {
                    let t = n("874749");
                    this.getBlockedDomainList();
                    let r = (0, s.getHostname)(e),
                        l = new t.hash.sha256,
                        i = t.codec.hex.fromBits(l.update(r).finalize()),
                        a = "";
                    d.has(i) && (a = r);
                    let c = r.indexOf(".");
                    for (; - 1 !== c && "" === a;) r = r.substring(c + 1), l.reset(), i = t.codec.hex.fromBits(l.update(r).finalize()), d.has(i) && (a = r), c = r.indexOf(".");
                    return "" !== a ? (u.default.track(o.AnalyticEvents.LINK_SECURITY_CHECK_BLOCKED, {
                        blocked_domain: a
                    }), a) : null
                }
            }
            c.displayName = "BlockedDomainStore", c.persistKey = "BlockedDomainStore";
            var f = new c(a.default, {
                BLOCKED_DOMAIN_LIST_FETCHED: function(e) {
                    let {
                        list: t,
                        revision: n
                    } = e;
                    d = null, r = null, i.default.set("BlockedDomainStore", {
                        _state: t
                    }), i.default.set("BlockedDomainRevision", n)
                }
            })
        },
        139514: function(e, t, n) {
            "use strict";
            var r, l;
            n.r(t), n.d(t, {
                CodedLinkType: function() {
                    return r
                }
            }), (l = r || (r = {})).INVITE = "INVITE", l.TEMPLATE = "TEMPLATE", l.BUILD_OVERRIDE = "BUILD_OVERRIDE", l.EVENT = "EVENT", l.CHANNEL_LINK = "CHANNEL_LINK", l.APP_DIRECTORY_PROFILE = "APP_DIRECTORY_PROFILE", l.ACTIVITY_BOOKMARK = "ACTIVITY_BOOKMARK", l.EMBEDDED_ACTIVITY_INVITE = "EMBEDDED_ACTIVITY_INVITE", l.GUILD_PRODUCT = "GUILD_PRODUCT", l.SERVER_SHOP = "SERVER_SHOP", l.CLYDE_PROFILE = "CLYDE_PROFILE"
        },
        312016: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                remainingPathFromDiscordHostMatch: function() {
                    return w
                },
                default: function() {
                    return k
                },
                parseURLSafely: function() {
                    return B
                },
                findCodedLink: function() {
                    return x
                }
            });
            var r, l, i, a, s, u, o = n("746379"),
                d = n("810793");
            n("355025");
            var c = n("9294");
            n("42793");
            var f = n("337543"),
                h = n("655518"),
                E = n("253981"),
                _ = n("139514"),
                m = n("49111");
            let p = /^\/([a-zA-Z0-9-]+)$/,
                g = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
                T = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?$/,
                I = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
                S = /^\/application-directory\/([0-9-]+)\/?$/,
                A = /^\/activities\/([0-9-]+)\/?$/,
                C = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
                v = /^\/channels\/([0-9]+)\/shop$/,
                M = /^\/clyde-profiles\/([0-9-]+)\/?$/,
                N = F(window.GLOBAL_ENV.INVITE_HOST),
                R = F(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
                O = F(null !== (r = window.GLOBAL_ENV.WEBAPP_ENDPOINT) && void 0 !== r ? r : "//canary.".concat(m.PRIMARY_DOMAIN)),
                y = F("//canary.".concat(m.PRIMARY_DOMAIN)),
                L = F("//ptb.".concat(m.PRIMARY_DOMAIN)),
                D = F("discordapp.com"),
                U = F("discord.com"),
                b = [h.default.escape(null !== (l = N.host) && void 0 !== l ? l : ""), h.default.escape(null !== (i = R.host) && void 0 !== i ? i : ""), h.default.escape(null !== (a = O.host) && void 0 !== a ? a : ""), h.default.escape(null !== (s = D.host) && void 0 !== s ? s : ""), h.default.escape(null !== (u = U.host) && void 0 !== u ? u : "")].filter(Boolean),
                P = RegExp("((https?://[^ ]*)|^|[^/][^/.])(".concat(b.join("|"), ")"), "g");

            function F(e) {
                if (null == e) return {
                    host: null,
                    pathPrefix: null
                };
                if (e.indexOf("/") >= 0) {
                    let t = (0, o.parse)(e, void 0, !0);
                    return {
                        host: t.host,
                        pathPrefix: t.pathname
                    }
                }
                return {
                    host: e,
                    pathPrefix: null
                }
            }

            function G(e, t) {
                var n, r, l;
                if ((null === (n = t.host) || void 0 === n ? void 0 : n.replace(/^www[.]/i, "")) !== e.host) return null;
                let i = null !== (r = t.pathname) && void 0 !== r ? r : "",
                    a = null !== (l = e.pathPrefix) && void 0 !== l ? l : "";
                if (!i.startsWith(a)) return null;
                let s = i.substring(a.length);
                return "" === s ? null : s
            }

            function w(e) {
                var t, n, r, l;
                return null !== (l = null !== (r = null !== (n = null !== (t = G(O, e)) && void 0 !== t ? t : G(y, e)) && void 0 !== n ? n : G(L, e)) && void 0 !== r ? r : G(D, e)) && void 0 !== l ? l : G(U, e)
            }

            function k(e) {
                if (null == e) return [];
                let t = new Set,
                    n = [];
                e = e.replace(P, (e, t, n, r) => null == n ? "".concat(t, "http://").concat(r) : e);
                let r = e.match(E.default.URL_REGEX);
                if (null == r) return [];
                for (let e of r) {
                    var l, i, a, s;
                    if (n.length >= 10) break;
                    let r = B(e);
                    if (null == r || null == r.pathname) continue;
                    let u = G(N, r),
                        o = G(R, r),
                        h = null !== (s = null !== (a = null !== (i = null !== (l = G(O, r)) && void 0 !== l ? l : G(y, r)) && void 0 !== i ? i : G(L, r)) && void 0 !== a ? a : G(D, r)) && void 0 !== s ? s : G(U, r),
                        E = (e, r) => {
                            !t.has(r) && (t.add(r), n.push({
                                type: e,
                                code: r
                            }))
                        };
                    if ((null == u ? void 0 : u.match(p)) != null) {
                        let e = (0, c.generateInviteKeyFromUrlParams)(u.substring(1), r.search);
                        f.default.getInvite(e), E(_.CodedLinkType.INVITE, e)
                    }(null == o ? void 0 : o.match(p)) != null && E(_.CodedLinkType.TEMPLATE, o.substring(1));
                    let m = null == h ? void 0 : h.match(T);
                    if (null != m) {
                        let e = m[1].toUpperCase();
                        if (e === _.CodedLinkType.INVITE) {
                            let e = (0, c.generateInviteKeyFromUrlParams)(m[2], r.search);
                            E(_.CodedLinkType.INVITE, e)
                        } else E(e, m[2])
                    }(null == h ? void 0 : h.match(g)) != null && E(_.CodedLinkType.CHANNEL_LINK, h.replace("/channels/", ""));
                    let b = function(e) {
                        if (null == e) return null;
                        let t = e.match(I);
                        return null != t && t.length >= 4 ? {
                            guildId: t[1],
                            guildEventId: t[2],
                            recurrenceId: t[4]
                        } : null
                    }(r.pathname);
                    null != b && E(_.CodedLinkType.EVENT, "".concat(b.guildId, "-").concat(b.guildEventId) + (null != b.recurrenceId ? "-".concat(b.recurrenceId) : ""));
                    let P = null == h ? void 0 : h.match(S);
                    if (null != P) {
                        let e = P[1];
                        E(_.CodedLinkType.APP_DIRECTORY_PROFILE, e)
                    }
                    let F = null == h ? void 0 : h.match(M);
                    if (null != F) {
                        let e = F[1];
                        E(_.CodedLinkType.CLYDE_PROFILE, e)
                    }
                    let w = null == h ? void 0 : h.match(A),
                        {
                            activityBookmarkEmbedEnabled: k
                        } = d.ActivityBookmarkEmbedExperiment.getCurrentConfig({
                            location: "78afcf_1"
                        }, {
                            autoTrackExposure: !1
                        });
                    if (null != w && k) {
                        let e = w[1];
                        E(_.CodedLinkType.ACTIVITY_BOOKMARK, e)
                    }
                    let x = null == h ? void 0 : h.match(C);
                    null != x && E(_.CodedLinkType.GUILD_PRODUCT, "".concat(x[1], "-").concat(x[2]));
                    let H = null == h ? void 0 : h.match(v);
                    null != H && E(_.CodedLinkType.SERVER_SHOP, H[1])
                }
                return n
            }

            function B(e) {
                try {
                    return (0, o.parse)(e)
                } catch (e) {
                    return null
                }
            }

            function x(e) {
                return k(e)[0]
            }
        },
        676574: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DevSettingsCategory: function() {
                    return l
                },
                default: function() {
                    return d
                }
            });
            var r, l, i = n("446674"),
                a = n("913144");
            (r = l || (l = {}))[r.MESSAGING = 0] = "MESSAGING", r[r.OVERLAYS = 1] = "OVERLAYS";
            let s = {
                    visual_effect_view_overrides: {
                        label: "Blur view overrides for designers to test with",
                        category: l.OVERLAYS
                    },
                    obscure_blur_effect_enabled: {
                        label: "Force obscure blur effect on for message media and embeds",
                        category: l.OVERLAYS
                    },
                    explicit_media_redaction_ignore_pending_scan: {
                        label: "Ignore pending scan on explicit media",
                        category: l.OVERLAYS
                    },
                    upload_fail_50: {
                        label: "Uploads: Fail 50% of uploads with 500 status after a 1 second delay",
                        category: l.MESSAGING
                    },
                    send_fail_100: {
                        label: "Send: Fail with 500 status",
                        category: l.MESSAGING
                    }
                },
                u = {};
            class o extends i.default.DeviceSettingsStore {
                getUserAgnosticState() {
                    return {
                        toggleStates: u
                    }
                }
                initialize(e) {
                    for (var t in s) {
                        var n, r;
                        let l = null !== (r = null == e ? void 0 : null === (n = e.toggleStates) || void 0 === n ? void 0 : n[t]) && void 0 !== r && r;
                        u[t] = l
                    }
                }
                get(e) {
                    var t;
                    return null !== (t = u[e]) && void 0 !== t && t
                }
                set(e, t) {
                    return u[e] = t, t
                }
                all() {
                    return u
                }
                allByCategory(e) {
                    return Object.entries(s).filter(t => {
                        let [n, r] = t;
                        return r.category === e
                    }).map(e => {
                        let [t, n] = e;
                        return [t, u[t], n]
                    })
                }
            }
            o.displayName = "DevToolsDevSettingsStore", o.persistKey = "DevToolsDevSettingsStore";
            var d = new o(a.default, {
                DEV_TOOLS_DEV_SETTING_SET: function(e) {
                    u[e.toggle] = e.value
                }
            })
        },
        721423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MAX_NUM_SUGGESTED_STICKERS: function() {
                    return a
                },
                MAX_NUM_USER_INPUT_WORDS: function() {
                    return s
                },
                DELAY_BEFORE_SUGGESTIONS_MS: function() {
                    return u
                },
                SUGGESTIONS_SHOWED_INSTRUMENTATION_RATE_LIMIT_MS: function() {
                    return o
                },
                REQUEST_THROTTLE_DURATION_MS: function() {
                    return d
                }
            });
            var r, l, i = n("49111");
            let a = 4,
                s = 5,
                u = 350,
                o = 1e3 * i.Durations.MINUTE,
                d = 1e3 * i.Durations.MINUTE * 2;
            (r = l || (l = {}))[r.STICKER = 0] = "STICKER"
        },
        171209: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                removePunctuation: function() {
                    return d
                },
                getQueriesFromUserInput: function() {
                    return c
                },
                throttledTrackExpressionSuggestionDisplayed: function() {
                    return f
                }
            });
            var r = n("369470"),
                l = n.n(r),
                i = n("599110"),
                a = n("721423"),
                s = n("49111");
            let u = /(!|\.|;|,|-|—|–|\?|"|')/g,
                o = /(\n|\t|\s)/g,
                d = e => e.replace(u, "").replace(o, " "),
                c = e => null == e ? [] : d(e).trim().split(" "),
                f = l(e => {
                    i.default.track(s.AnalyticEvents.AUTO_SUGGEST_DISPLAYED, {
                        suggestion_trigger: e
                    })
                }, a.SUGGESTIONS_SHOWED_INSTRUMENTATION_RATE_LIMIT_MS, {
                    leading: !0,
                    trailing: !1
                })
        },
        791160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("546463"),
                l = n("49111");

            function i(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    i = r.default.getGame(e.applicationId),
                    a = e.getPrice(),
                    s = e.getPrice(null, !1),
                    u = {
                        sku_id: e.id,
                        sku_type: e.type,
                        application_id: e.applicationId,
                        application_name: null != i ? i.name : null,
                        store_title: e.name,
                        distribution_type: e.premium ? "premium" : "distribution"
                    },
                    o = null;
                n && (o = {
                    price: null != a ? a.amount : null,
                    regular_price: null != s ? s.amount : null,
                    currency: null != a ? a.currency : null
                });
                let d = null;
                return t && (d = {
                    has_single_player: e.hasFeature(l.SKUFeatureTypes.SINGLE_PLAYER),
                    has_online_multiplayer: e.hasFeature(l.SKUFeatureTypes.ONLINE_MULTIPLAYER),
                    has_local_multiplayer: e.hasFeature(l.SKUFeatureTypes.LOCAL_MULTIPLAYER),
                    has_pvp_features: e.hasFeature(l.SKUFeatureTypes.PVP),
                    has_local_coop: e.hasFeature(l.SKUFeatureTypes.LOCAL_COOP),
                    has_online_coop: e.hasFeature(l.SKUFeatureTypes.ONLINE_COOP),
                    has_cross_platform: e.hasFeature(l.SKUFeatureTypes.CROSS_PLATFORM),
                    has_rich_presence: e.hasFeature(l.SKUFeatureTypes.RICH_PRESENCE),
                    has_game_invites: e.hasFeature(l.SKUFeatureTypes.DISCORD_GAME_INVITES),
                    has_spectator_mode: e.hasFeature(l.SKUFeatureTypes.SPECTATOR_MODE),
                    has_controller_support: e.hasFeature(l.SKUFeatureTypes.CONTROLLER_SUPPORT),
                    has_cloud_saves: e.hasFeature(l.SKUFeatureTypes.CLOUD_SAVES),
                    has_secure_networking: e.hasFeature(l.SKUFeatureTypes.SECURE_NETWORKING)
                }), {
                    ...u,
                    ...o,
                    ...d
                }
            }
        },
        10853: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isNotAutomodEmbed: function() {
                    return l
                }
            });
            var r = n("246111");
            let l = e => {
                let {
                    type: t
                } = e;
                return t !== r.MessageEmbedTypes.AUTO_MODERATION_MESSAGE && t !== r.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
            }
        },
        572679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("307785"),
                l = n("49111");
            class i {
                getCreateAttachmentURL(e) {
                    return l.Endpoints.GUILD_PRODUCT_CREATE_ATTACHMENT_UPLOAD(e)
                }
                getDeleteUploadURL(e) {
                    return l.Endpoints.MESSAGE_DELETE_UPLOAD(e)
                }
                getMaxFileSize(e) {
                    return r.MAX_ATTACHMENT_UPLOAD_FILESIZE_BYTES
                }
                getMaxAttachmentsCount() {
                    return r.MAX_ATTACHMENT_UPLOAD_COUNT
                }
                getMaxTotalAttachmentSize() {
                    return r.MAX_ATTACHMENT_UPLOAD_TOTAL_FILESIZE_BYTES
                }
                get shouldReactNativeCompressUploads() {
                    return !1
                }
            }
        },
        307785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GUILD_PRODUCT_EDIT_MODAL_KEY: function() {
                    return r
                },
                MAX_ATTACHMENT_UPLOAD_FILESIZE_BYTES: function() {
                    return l
                },
                MAX_ATTACHMENT_UPLOAD_TOTAL_FILESIZE_BYTES: function() {
                    return i
                },
                MAX_ATTACHMENT_UPLOAD_COUNT: function() {
                    return a
                }
            });
            let r = "guild-product-edit-modal",
                l = 1073741824,
                i = 1073741824,
                a = 10
        },
        398604: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StaticGuildEventIndexes: function() {
                    return h
                },
                scheduledEventSort: function() {
                    return E
                },
                isGuildScheduledEventActive: function() {
                    return L
                },
                isEventUpcoming: function() {
                    return D
                },
                isGuildEventEnded: function() {
                    return U
                },
                default: function() {
                    return P
                }
            });
            var r = n("917351"),
                l = n.n(r),
                i = n("446674"),
                a = n("407846"),
                s = n("913144"),
                u = n("766274"),
                o = n("271938"),
                d = n("26989"),
                c = n("697218"),
                f = n("745049");
            let h = {
                EVENT: "event",
                EVENT_ACTIVE: "active",
                EVENT_UPCOMING: "event-upcoming",
                GUILD_EVENT: e => "".concat(e, "-").concat(h.EVENT),
                GUILD_EVENT_ACTIVE: e => "".concat(e, "-").concat(h.EVENT_ACTIVE),
                GUILD_EVENT_UPCOMING: e => "".concat(e, "-").concat(h.EVENT_UPCOMING),
                CHANNEL_EVENT: e => "".concat(e, "-").concat(h.EVENT),
                CHANNEL_EVENT_ACTIVE: e => "".concat(e, "-").concat(h.EVENT_ACTIVE),
                CHANNEL_EVENT_UPCOMING: e => "".concat(e, "-").concat(h.EVENT_UPCOMING)
            };

            function E(e) {
                let {
                    id: t,
                    scheduled_start_time: n
                } = e, r = L(e) ? "\x00" : "\x01";
                return "".concat(r, "-").concat(new Date(n).getTime(), "-").concat(t)
            }
            let _ = new a.default(e => {
                let {
                    guild_id: t,
                    entity_id: n,
                    channel_id: r
                } = e, l = [t];
                return null != n && l.push(n), l.push(h.GUILD_EVENT(t)), null != r && l.push(h.CHANNEL_EVENT(r)), L(e) && (l.push(h.EVENT_ACTIVE), l.push(h.GUILD_EVENT_ACTIVE(t)), null != r && l.push(h.CHANNEL_EVENT_ACTIVE(r))), D(e) && (l.push(h.EVENT_UPCOMING), l.push(h.GUILD_EVENT_UPCOMING(t)), null != r && l.push(h.CHANNEL_EVENT_UPCOMING(r))), l
            }, E);

            function m(e) {
                var t;
                let n = _.get(e.id),
                    r = null !== (t = e.user_count) && void 0 !== t ? t : null == n ? void 0 : n.user_count,
                    l = A(e.id, e.guild_id) ? 1 : 0;
                e.user_count = Math.max(l, null != r ? r : 0), _.set(e.id, e), T += 1
            }

            function p(e, t) {
                _.delete(e), v(e, t), T += 1
            }
            let g = "orphaned",
                T = 0,
                I = {},
                S = [];

            function A(e) {
                var t, n;
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g;
                return r !== g && (null === (t = I[g]) || void 0 === t ? void 0 : t.has(e)) && (C(e, r), v(e, g)), !!(null === (n = I[r]) || void 0 === n ? void 0 : n.has(e))
            }

            function C(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g;
                null == I[t] && (I[t] = new Set), I[t].add(e), T += 1
            }

            function v(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g;
                null === (t = I[n]) || void 0 === t || t.delete(e), T += 1
            }
            let M = {};

            function N(e, t) {
                var n;
                return !!(null === (n = M[e]) || void 0 === n ? void 0 : n[t])
            }

            function R(e) {
                _.values(h.GUILD_EVENT(e)).forEach(t => p(t.id, e))
            }

            function O(e) {
                let {
                    guildScheduledEvent: t
                } = e;
                return m(t), !0
            }

            function y(e) {
                let {
                    eventException: t
                } = e, n = _.get(t.event_id);
                if (null == n) return !1;
                let r = n.guild_scheduled_event_exceptions.findIndex(e => e.event_exception_id === t.event_exception_id),
                    l = [...n.guild_scheduled_event_exceptions];
                return r < 0 ? l.push(t) : l[r] = t, m({
                    ...n,
                    guild_scheduled_event_exceptions: l
                }), !0
            }

            function L(e) {
                var t;
                return null != e && (t = (null == e ? void 0 : e.status) === f.GuildScheduledEventStatus.ACTIVE, t)
            }

            function D(e) {
                return !f.GuildScheduledEventStatusDone.has(e.status)
            }

            function U(e) {
                return null != e && f.GuildScheduledEventStatusDone.has(e.status)
            }
            class b extends i.default.Store {
                getGuildScheduledEvent(e) {
                    var t;
                    return null == e ? null : null !== (t = _.get(e)) && void 0 !== t ? t : null
                }
                getGuildEventCountByIndex(e) {
                    return _.size(e)
                }
                getGuildScheduledEventsForGuild(e) {
                    return null == e ? [] : _.values(e)
                }
                getGuildScheduledEventsByIndex(e) {
                    return _.values(e)
                }
                getRsvpVersion() {
                    return T
                }
                hasRsvp(e, t) {
                    return null != e && null != t && A(e, t)
                }
                isActive(e) {
                    return null != e && L(_.get(e))
                }
                getActiveEventByChannel(e) {
                    if (null == e) return;
                    let t = this.getGuildScheduledEventsByIndex(h.CHANNEL_EVENT_ACTIVE(e));
                    return t[0]
                }
                getUsersForGuildEvent(e) {
                    var t;
                    return null == e ? {} : null !== (t = M[e]) && void 0 !== t ? t : {}
                }
            }
            b.displayName = "GuildScheduledEventStore";
            var P = new b(s.default, {
                CONNECTION_OPEN: function(e) {
                    let {
                        guilds: t
                    } = e;
                    return _.clear(), I = {}, T = 0, M = {}, S.forEach(m), t.forEach(e => e.guild_scheduled_events.forEach(m)), !0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    return R(t.id), t.guild_scheduled_events.forEach(e => m(e)), !0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    return R(t.id), !0
                },
                FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
                    let {
                        guildId: t,
                        guildScheduledEvents: n
                    } = e, r = _.values(h.GUILD_EVENT(t), !0).map(e => e.id), i = n.map(e => e.id);
                    for (let e of (l.difference(r, i).forEach(e => {
                            p(e, t)
                        }), n)) m(e);
                    return !0
                },
                GUILD_SCHEDULED_EVENT_CREATE: O,
                GUILD_SCHEDULED_EVENT_UPDATE: O,
                GUILD_SCHEDULED_EVENT_DELETE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e;
                    return p(t.id, t.guild_id), !0
                },
                GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
                    var t, n, r;
                    let {
                        userId: l,
                        guildEventId: i,
                        guildId: a
                    } = e, s = _.get(i), u = o.default.getId(), f = A(i, a), h = u === l;
                    if (null != s && (!f || !h)) {
                        ;
                        let e = null !== (t = s.user_count) && void 0 !== t ? t : 0;
                        m({
                            ...s,
                            user_count: e + 1
                        })
                    }
                    if (h && !f && C(i, a), null != l && !N(i, l)) {
                        let e = c.default.getUser(l),
                            t = d.default.getMember(a, l);
                        if (null != e) {
                            ;
                            n = i, r = {
                                user: e,
                                guild_member: null != t ? t : {
                                    guildId: a
                                }
                            }, null == M[n] && (M[n] = {}), M[n][r.user.id] = r, T += 1
                        }
                    }
                    return !0
                },
                GUILD_SCHEDULED_EVENT_USER_REMOVE: function(e) {
                    var t, n, r, l;
                    let {
                        userId: i,
                        guildEventId: a,
                        guildId: s
                    } = e, u = _.get(a), d = o.default.getId(), c = A(a, s), f = d === i;
                    if (f && c && v(a, s), null != i && N(a, i)) {
                        ;
                        t = a, n = i, null === (r = M[t]) || void 0 === r || delete r[n], T += 1
                    }
                    if (null != u && (c || !f)) {
                        ;
                        let e = null !== (l = u.user_count) && void 0 !== l ? l : 0;
                        m({
                            ...u,
                            user_count: Math.max(0, e - 1)
                        })
                    }
                    return !0
                },
                GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS: function(e) {
                    let {
                        guildId: t,
                        guildScheduledEventUsers: n
                    } = e;
                    return I[t] = new Set, n.forEach(e => {
                        e.user_id === o.default.getId() && C(e.guild_scheduled_event_id, t)
                    }), !0
                },
                GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: function(e) {
                    let {
                        guildEventId: t,
                        rsvpUsers: n,
                        guildId: r
                    } = e;
                    return M = {
                        ...M,
                        [t]: n.reduce((e, t) => {
                            let {
                                guild_member: n,
                                ...l
                            } = t, i = {
                                user: new u.default({
                                    ...l,
                                    guildMemberAvatars: (null == n ? void 0 : n.avatar) != null ? {
                                        [r]: n.avatar
                                    } : null
                                }),
                                guild_member: {
                                    ...null != n ? n : {},
                                    guildId: r
                                }
                            };
                            return e[l.id] = i, e
                        }, {})
                    }, !0
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    let {
                        invite: t
                    } = e, n = t.guild_scheduled_event;
                    return null != n && (m(n), !0)
                },
                EVENT_DIRECTORY_FETCH_SUCCESS: function(e) {
                    let {
                        entries: t
                    } = e, n = l.map(t, "guild_scheduled_event");
                    for (let e of n) m(e), null != e.user_rsvp ? C(e.id, e.guild_id) : v(e.id, e.guild_id);
                    return S = n, !0
                },
                GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE: y,
                GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE: y,
                GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE: function(e) {
                    let {
                        eventException: t
                    } = e, n = _.get(t.event_id);
                    if (null == n) return !1;
                    let r = n.guild_scheduled_event_exceptions.filter(e => e.event_exception_id !== t.event_exception_id);
                    return m({
                        ...n,
                        guild_scheduled_event_exceptions: r
                    }), !0
                },
                LOGOUT: function() {
                    return _.clear(), !0
                }
            })
        },
        91366: function(e, t, n) {
            "use strict";
            var r, l, i, a, s, u, o, d;
            n.r(t), n.d(t, {
                InviteTypes: function() {
                    return l
                },
                InviteTargetTypes: function() {
                    return i
                },
                InstantInviteModalPages: function() {
                    return a
                }
            }), (s = r || (r = {})).SENDING = "sending", s.SENT = "sent", s.ERROR = "error", (u = l || (l = {}))[u.GUILD = 0] = "GUILD", u[u.GROUP_DM = 1] = "GROUP_DM", u[u.FRIEND = 2] = "FRIEND", (o = i || (i = {}))[o.STREAM = 1] = "STREAM", o[o.EMBEDDED_APPLICATION = 2] = "EMBEDDED_APPLICATION", o[o.ROLE_SUBSCRIPTIONS_PURCHASE = 3] = "ROLE_SUBSCRIPTIONS_PURCHASE", (d = a || (a = {})).MAIN = "main", d.SETTINGS = "settings", d.GUEST = "guest"
        },
        42793: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                InviteTypes: function() {
                    return i.InviteTypes
                },
                isGuildScheduledEventInviteEmbed: function() {
                    return a
                },
                isRoleSubscriptionInvite: function() {
                    return s
                },
                isStageInviteEmbed: function() {
                    return u
                },
                isStreamInvite: function() {
                    return o
                },
                isEmbeddedApplicationInvite: function() {
                    return d
                },
                getInviteType: function() {
                    return c
                }
            });
            var r = n("398604"),
                l = n("233069"),
                i = n("91366");

            function a(e) {
                let t = e.guild_scheduled_event;
                return null != t && (0, r.isEventUpcoming)(t)
            }

            function s(e) {
                return e.target_type === i.InviteTargetTypes.ROLE_SUBSCRIPTIONS_PURCHASE
            }

            function u(e) {
                return null != e.channel && null != e.stage_instance
            }

            function o(e) {
                return e.target_type === i.InviteTargetTypes.STREAM && null != e.target_user
            }

            function d(e) {
                return e.target_type === i.InviteTargetTypes.EMBEDDED_APPLICATION
            }

            function c(e) {
                var t, n;
                if ("number" == typeof e.type) return e.type;
                if ((t = e).type === i.InviteTypes.GROUP_DM || null != t.channel && (0, l.isMultiUserDM)(t.channel.type)) return i.InviteTypes.GROUP_DM;
                return (n = e).type === i.InviteTypes.FRIEND || null == n.guild && null != n.inviter ? i.InviteTypes.FRIEND : i.InviteTypes.GUILD
            }
        },
        630869: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("77078"),
                i = {
                    show(e) {
                        (0, l.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("851172").then(n.bind(n, "851172"));
                            return n => (0, r.jsx)(t, {
                                ...n,
                                url: e
                            })
                        })
                    }
                }
        },
        537025: function(e, t, n) {
            "use strict";

            function r(e) {
                return !1
            }
            n.r(t), n.d(t, {
                shouldShowLinkNotDiscordWarning: function() {
                    return r
                }
            })
        },
        765089: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r, l, i = n("599110"),
                a = n("253981"),
                s = n("340454"),
                u = n("361572"),
                o = n("49111");
            (r = l || (l = {})).MESSAGE = "Discord Message Link", r.CHANNEL = "Discord Channel Link", r.SERVER_INVITE = "Discord Server Invite", r.GIFT = "Discord Gift Link", r.UNKNOWN = "Unknown";
            let d = [e => s.default.isInvite(e) ? l.SERVER_INVITE : null, e => {
                let t = a.default.safeParseWithQuery(e);
                if (null == t) return null;
                let n = (0, u.tryParseChannelPath)(t.path);
                return null == n ? null : c({
                    guildId: n.guildId,
                    channelId: n.channelId,
                    messageId: n.messageId
                })
            }];

            function c(e) {
                return null != e.guildId && null != e.channelId && null != e.messageId ? l.MESSAGE : null != e.guildId && null != e.channelId ? l.CHANNEL : l.UNKNOWN
            }
            var f = {
                trackDiscordLinkClicked: function(e) {
                    i.default.track(o.AnalyticEvents.LINK_CLICKED, {
                        is_discord_link: !0,
                        discord_link_type: c(e)
                    })
                },
                trackLinkClicked: function(e, t) {
                    var n, r;
                    if (null == e && null == t) return;
                    let s = a.default.isDiscordUrl(e, !0) || null != t;
                    i.default.track(o.AnalyticEvents.LINK_CLICKED, {
                        is_discord_link: s,
                        discord_link_type: s ? (n = e, null == (r = t) && null == n ? l.UNKNOWN : null == r ? function(e) {
                            for (let t of d) {
                                let n = t(e);
                                if (null != n) return n
                            }
                            return l.UNKNOWN
                        }(n) : c(r)) : null
                    })
                },
                trackAnnouncementMessageLinkClicked: function(e) {
                    let {
                        messageId: t,
                        channelId: n,
                        guildId: r,
                        sourceChannelId: l,
                        sourceGuildId: a
                    } = e;
                    i.default.track(o.AnalyticEvents.ANNOUNCEMENT_MESSAGE_LINK_CLICKED, {
                        message_id: t,
                        channel_id: n,
                        guild_id: r,
                        source_channel_id: l,
                        source_guild_id: a
                    })
                }
            }
        },
        361572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CHANNEL_OR_MESSAGES_URL_RE: function() {
                    return _
                },
                MEDIA_POST_URL_RE: function() {
                    return m
                },
                tryParseChannelPath: function() {
                    return p
                },
                tryParseEventDetailsPath: function() {
                    return g
                },
                canViewChannel: function() {
                    return T
                },
                isAccessibleChannelPath: function() {
                    return I
                }
            });
            var r = n("42203"),
                l = n("305961"),
                i = n("957255"),
                a = n("655518"),
                s = n("49111"),
                u = n("724210");
            let o = Array.from(u.StaticChannelRoutes).map(e => a.default.escape(e)).join("|"),
                d = new RegExp("^/channels/(\\d+|".concat(s.ME, ")(?:/)?(\\d+|").concat(o, ")?")),
                c = new RegExp("^/channels/(\\d+|".concat(s.ME, ")(?:/)(\\d+|").concat(o, ")(?:/)(\\d+)")),
                f = RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)"),
                h = RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?"),
                E = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
                _ = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+|".concat(s.ME, ")(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?")),
                m = RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)");

            function p(e) {
                if (null == e) return null;
                let t = e.match(c);
                if (null != t && t.length > 3) return {
                    guildId: t[1],
                    channelId: t[2],
                    messageId: t[3]
                };
                let n = e.match(f);
                if (null != n && n.length > 4) return {
                    guildId: n[1],
                    channelId: n[2],
                    threadId: n[3],
                    messageId: n[4]
                };
                let r = e.match(d);
                if (null != r && r.length > 1) {
                    var l;
                    return {
                        guildId: r[1],
                        channelId: null !== (l = r[2]) && void 0 !== l ? l : void 0
                    }
                }
                let i = e.match(h);
                return null != i && i.length > 1 ? {
                    guildId: i[1]
                } : null
            }

            function g(e) {
                if (null == e) return null;
                let t = e.match(E);
                return null != t && t.length > 1 ? {
                    guildId: t[1],
                    guildEventId: t[2],
                    recurrenceId: t[3]
                } : null
            }

            function T(e) {
                return !!e.isPrivate() || i.default.can(s.Permissions.VIEW_CHANNEL, e)
            }

            function I(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                if (null == l.default.getGuild(t) && t !== s.ME) return !1;
                if (null == n) return !0;
                let i = r.default.getChannel(n);
                return null != i && T(i)
            }
        },
        647374: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                punycodeLink: function() {
                    return g
                },
                default: function() {
                    return T
                }
            });
            var r = n("693566"),
                l = n.n(r);
            n("125601");
            var i = n("132710"),
                a = n.n(i),
                s = n("312016"),
                u = n("449008"),
                o = n("891137"),
                d = n("76216");
            let c = new l({
                max: 50
            });

            function f(e) {
                let t = c.get(e);
                if (null != t) return t;
                let n = (0, d.sanitizeWhitespace)(e),
                    r = (0, d.sanitizeUnicodeConfusables)(n),
                    l = {
                        whitespaceSanitized: n,
                        fullySanitized: r
                    };
                return c.set(e, l), l
            }
            let h = ["http:", "https:", "discord:"],
                E = [o.AST_KEY.TEXT, o.AST_KEY.UNDERLINE, o.AST_KEY.STRONG, o.AST_KEY.ITALICS, o.AST_KEY.STRIKETHROUGH, o.AST_KEY.INLINE_CODE, o.AST_KEY.SPOILER, o.AST_KEY.LINE_BREAK, o.AST_KEY.TIMESTAMP],
                _ = [...E, o.AST_KEY.EMOJI, o.AST_KEY.CUSTOM_EMOJI],
                m = [o.AST_KEY.TEXT];

            function p(e, t) {
                for (let n of (!Array.isArray(e) && (e = [e]), e))
                    if (!t.includes(n.type) || n.type === o.AST_KEY.INLINE_CODE && null == p(n.validationChildContent, t) || Array.isArray(n.content) && null == p(n.content, t)) return null;
                return e
            }

            function g(e) {
                try {
                    var t;
                    let n = new URL(e),
                        r = null !== (t = n.protocol) && void 0 !== t ? t : "";
                    if (!h.includes(r.toLowerCase())) throw Error("Provided protocol is not allowed: " + r);
                    if (("http:" === r || "https:" === r) && (null == n.hostname || 0 === n.hostname.length)) throw Error("no hostname");
                    let l = (0, d.safelyMakeUrlHumanReadable)(n);
                    n.username = "", n.password = "";
                    let i = (0, d.safelyMakeUrlHumanReadable)(n);
                    return {
                        target: l,
                        displayTarget: i
                    }
                } catch (e) {
                    return null
                }
            }
            var T = {
                ...a.defaultRules.link,
                match: (e, t, n) => t.allowLinks ? a.defaultRules.link.match(e, t, n) : null,
                parse(e, t, n) {
                    let [r, l, i, d] = e, c = () => ({
                        type: o.AST_KEY.TEXT,
                        content: r
                    }), h = f(i), T = f(l), I = f(null != d ? d : ""), S = h.whitespaceSanitized, A = T.fullySanitized, C = I.fullySanitized, v = A.trim(), M = S.trim();
                    if (0 === M.length || 0 === v.length) return c();
                    let N = a.unescapeUrl(i),
                        R = g(N),
                        O = (0, s.default)(l).length > 0 || (0, s.default)(d).length > 0;
                    if (null == R || O) return c();
                    let y = {
                            ...n,
                            allowEscape: !1,
                            parseInlineCodeChildContent: !0
                        },
                        L = t(A, y),
                        D = t(C, y),
                        U = p(L, n.allowEmojiLinks ? _ : E),
                        b = p(D, m);
                    if (null == U || null == b) return c();
                    let P = function e(t) {
                            let n = "";
                            for (let r of t) switch (r.type) {
                                case o.AST_KEY.TEXT:
                                case o.AST_KEY.INLINE_CODE:
                                    n += r.content;
                                    break;
                                case o.AST_KEY.CUSTOM_EMOJI:
                                    n += r.name;
                                    break;
                                case o.AST_KEY.EMOJI:
                                    n += r.surrogate;
                                    break;
                                case o.AST_KEY.LINE_BREAK:
                                    n += "\n";
                                    break;
                                case o.AST_KEY.TIMESTAMP:
                                    n += "<timestamp>";
                                    break;
                                case o.AST_KEY.STRONG:
                                case o.AST_KEY.ITALICS:
                                case o.AST_KEY.UNDERLINE:
                                case o.AST_KEY.STRIKETHROUGH:
                                case o.AST_KEY.SPOILER:
                                    n += e(r.content);
                                    break;
                                default:
                                    (0, u.assertNever)(r.type)
                            }
                            return n
                        }(U),
                        F = 0 === P.trim().length;
                    if (F) return c();
                    let G = t(T.whitespaceSanitized, y),
                        w = I.whitespaceSanitized,
                        {
                            target: k
                        } = R;
                    return {
                        content: G,
                        target: k,
                        title: w
                    }
                }
            }
        },
        891137: function(e, t, n) {
            "use strict";
            var r, l;
            n.r(t), n.d(t, {
                AST_KEY: function() {
                    return r
                }
            }), (l = r || (r = {})).TEXT = "text", l.STRIKETHROUGH = "s", l.UNDERLINE = "u", l.STRONG = "strong", l.ITALICS = "em", l.IMAGE = "image", l.EMOJI = "emoji", l.CUSTOM_EMOJI = "customEmoji", l.LINK = "link", l.URL = "url", l.AUTOLINK = "autolink", l.HIGHLIGHT = "highlight", l.PARAGRAPH = "paragraph", l.LINE_BREAK = "br", l.NEWLINE = "newline", l.ESCAPE = "escape", l.SPOILER = "spoiler", l.BLOCK_QUOTE = "blockQuote", l.INLINE_CODE = "inlineCode", l.CODE_BLOCK = "codeBlock", l.MENTION = "mention", l.CHANNEL_MENTION = "channelMention", l.CHANNEL = "channel", l.GUILD = "guild", l.SOUNDBOARD = "soundboard", l.STATIC_ROUTE_LINK = "staticRouteLink", l.ROLE_MENTION = "roleMention", l.COMMAND_MENTION = "commandMention", l.TIMESTAMP = "timestamp", l.LIST = "list", l.HEADING = "heading"
        },
        76216: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                sanitizeWhitespace: function() {
                    return l
                },
                sanitizeUnicodeConfusables: function() {
                    return s
                },
                safelyMakeUrlHumanReadable: function() {
                    return o
                }
            });
            let r = RegExp("".concat(/\p{Cf}|\p{Zl}|\p{Zp}|[^\P{Cc}\n]|[^\P{Zs} ]/gu.source, "|").concat("͏|឴|឵|ᅠ|ㅤ|ﾠ"), "gu");

            function l(e) {
                return e.replace(r, "")
            }
            let i = [{
                character: "h",
                matcher: a(["H", "һ", "հ", "Ꮒ", "ℎ", "\uD835\uDC21", "\uD835\uDC89", "\uD835\uDCBD", "\uD835\uDCF1", "\uD835\uDD25", "\uD835\uDD59", "\uD835\uDD8D", "\uD835\uDDC1", "\uD835\uDDF5", "\uD835\uDE29", "\uD835\uDE5D", "\uD835\uDE91", "ｈ"])
            }, {
                character: "t",
                matcher: a(["T", "\uD835\uDC2D", "\uD835\uDC61", "\uD835\uDC95", "\uD835\uDCC9", "\uD835\uDCFD", "\uD835\uDD31", "\uD835\uDD65", "\uD835\uDD99", "\uD835\uDDCD", "\uD835\uDE01", "\uD835\uDE35", "\uD835\uDE69", "\uD835\uDE9D"])
            }, {
                character: "p",
                matcher: a(["P", "ρ", "ϱ", "р", "⍴", "ⲣ", "\uD835\uDC29", "\uD835\uDC5D", "\uD835\uDC91", "\uD835\uDCC5", "\uD835\uDCF9", "\uD835\uDD2D", "\uD835\uDD61", "\uD835\uDD95", "\uD835\uDDC9", "\uD835\uDDFD", "\uD835\uDE31", "\uD835\uDE65", "\uD835\uDE99", "\uD835\uDED2", "\uD835\uDEE0", "\uD835\uDF0C", "\uD835\uDF1A", "\uD835\uDF46", "\uD835\uDF54", "\uD835\uDF80", "\uD835\uDF8E", "\uD835\uDFBA", "\uD835\uDFC8", "ｐ", "ҏ"])
            }, {
                character: "s",
                matcher: a(["S", "ƽ", "ѕ", "ꜱ", "ꮪ", "\uD801\uDC48", "\uD806\uDCC1", "\uD835\uDC2C", "\uD835\uDC60", "\uD835\uDC94", "\uD835\uDCC8", "\uD835\uDCFC", "\uD835\uDD30", "\uD835\uDD64", "\uD835\uDD98", "\uD835\uDDCC", "\uD835\uDE00", "\uD835\uDE34", "\uD835\uDE68", "\uD835\uDE9C", "ｓ"])
            }, {
                character: ":",
                matcher: a(["ː", "˸", "։", "׃", "܃", "܄", "ः", "ઃ", "᛬", "᠃", "᠉", "⁚", "∶", "ꓽ", "꞉", "︰", "：", ";", ";"])
            }, {
                character: "/",
                matcher: a(["᜵", "⁁", "⁄", "∕", "╱", "⟋", "⧸", "Ⳇ", "⼃", "〳", "ノ", "㇓", "丿", "\uD834\uDE3A"])
            }];

            function a(e) {
                return RegExp(e.join("|"), "gu")
            }

            function s(e) {
                let t = e;
                return i.forEach(e => {
                    t = t.replace(e.matcher, e.character)
                }), t
            }
            let u = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0];

            function o(e) {
                let t = function(e) {
                    let t = "null" === e.origin,
                        n = t && e.pathname.startsWith("//");
                    if (n) return e.protocol;
                    let r = "";
                    return "" !== e.username && (r += e.username), "" !== e.password && (r += ":" + e.password), "" !== r && (r += "@"), "".concat(e.protocol, "//").concat(r).concat(e.host)
                }(e);
                return t += d(e.pathname) + d(e.search) + d(e.hash)
            }

            function d(e) {
                let t;
                try {
                    t = decodeURIComponent(e)
                } catch {
                    return e
                }
                let n = "",
                    r = e,
                    l = t;
                for (; r.length > 0;) {
                    var i;
                    let e = r.codePointAt(0),
                        t = l.codePointAt(0);
                    if (e === t) {
                        let t = String.fromCodePoint(e);
                        n += t, r = r.substring(t.length), l = l.substring(t.length);
                        continue
                    }
                    let a = String.fromCodePoint(t),
                        s = encodeURIComponent(a),
                        o = s === a ? 3 : s.length;
                    n += ((i = t) >= 0 && i < 128 ? 1 !== u[i] : 8206 === i || 8207 === i || 8234 === i || 8235 === i || 8236 === i || 8237 === i || 8238 === i || 1564 === i || 8294 === i || 8295 === i || 8296 === i || 8297 === i || 128271 === i || 128272 === i || 128274 === i || 128275 === i || 133 === i || 160 === i || 5760 === i || 8192 === i || 8193 === i || 8194 === i || 8195 === i || 8196 === i || 8197 === i || 8198 === i || 8199 === i || 8200 === i || 8201 === i || 8202 === i || 8232 === i || 8233 === i || 8239 === i || 8287 === i || 12288 === i || 10240 === i || 173 === i || 847 === i || i >= 1536 && i <= 1541 || 1757 === i || 1807 === i || 2274 === i || 4447 === i || 4448 === i || 6068 === i || 6069 === i || 6155 === i || 6156 === i || 6157 === i || 6158 === i || 8203 === i || 8204 === i || 8205 === i || 8288 === i || 8289 === i || 8290 === i || 8291 === i || 8292 === i || 8293 === i || i >= 8298 && i <= 8303 || 12644 === i || i >= 65520 && i <= 65528 || i >= 65024 && i <= 65039 || 65279 === i || 65440 === i || 65529 === i || 65530 === i || 65531 === i || 69821 === i || 69837 === i || i >= 78896 && i <= 78904 || i >= 113824 && i <= 113827 || i >= 119155 && i <= 119162 || i >= 917504 && i <= 921599) ? s : a, r = r.substring(o), l = l.substring(a.length)
                }
                return n
            }
        },
        91984: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("77078"),
                i = {
                    show(e) {
                        let {
                            url: t,
                            trustUrl: i,
                            onConfirm: a,
                            isProtocol: s
                        } = e;
                        (0, l.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("153128").then(n.bind(n, "153128"));
                            return n => (0, r.jsx)(e, {
                                ...n,
                                url: t,
                                isProtocol: s,
                                trustUrl: i,
                                onConfirm: a
                            })
                        })
                    }
                }
        },
        692038: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                createMessageRecord: function() {
                    return A
                },
                updateServerMessage: function() {
                    return C
                },
                updateMessageRecord: function() {
                    return v
                },
                canEditMessageWithStickers: function() {
                    return y
                }
            });
            var r = n("866227"),
                l = n.n(r),
                i = n("225664"),
                a = n("312016"),
                s = n("552310"),
                u = n("24373"),
                o = n("459018"),
                d = n("719926"),
                c = n("766274"),
                f = n("271938"),
                h = n("42203"),
                E = n("27618"),
                _ = n("697218"),
                m = n("240873");
            n("61069");
            var p = n("659632");
            n("773336"), n("158998");
            var g = n("406297");
            n("574073");
            var T = n("894488"),
                I = n("49111");
            n("782340");
            let S = new c.default({
                id: "???",
                username: "???"
            });

            function A(e) {
                var t, n, r, i, u, h, m, T, A;
                let {
                    reactions: C,
                    interactionData: v
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, y = null !== (i = null === (t = e.mentions) || void 0 === t ? void 0 : t.map(e => e.id)) && void 0 !== i ? i : [], L = null !== (u = e.mention_roles) && void 0 !== u ? u : [], D = null !== (h = e.mention_channels) && void 0 !== h ? h : [], U = e.message_reference, b = l(new Date(e.timestamp)), P = e.type === I.MessageTypes.THREAD_CREATED ? [] : (0, a.default)(e.content);
                let F = null == (T = e).author ? S : null != T.webhook_id ? new c.default(T.author) : null !== (A = _.default.getUser(T.author.id)) && void 0 !== A ? A : new c.default(T.author),
                    G = null == e ? void 0 : e.gift_info,
                    w = null != e.interaction ? o.default.createFromServer(e.interaction) : null,
                    k = e.type === I.MessageTypes.THREAD_STARTER_MESSAGE ? null === (r = e.referenced_message) || void 0 === r ? void 0 : null === (n = r.author) || void 0 === n ? void 0 : n.id : void 0,
                    B = e.type === I.MessageTypes.PREMIUM_REFERRAL ? e.content : void 0,
                    x = e.content;
                return e.type === I.MessageTypes.PREMIUM_REFERRAL && (x = ""), new d.default({
                    ...e,
                    author: F,
                    webhookId: e.webhook_id,
                    blocked: E.default.isBlocked(F.id) || null != k && E.default.isBlocked(k),
                    timestamp: b,
                    editedTimestamp: null != e.edited_timestamp ? l(new Date(e.edited_timestamp)) : null,
                    mentionEveryone: e.mention_everyone,
                    mentions: y,
                    mentionRoles: L,
                    mentionChannels: D,
                    messageReference: U,
                    mentioned: (0, g.isMentioned)({
                        userId: f.default.getId(),
                        channelId: e.channel_id,
                        mentionEveryone: null !== (m = e.mention_everyone) && void 0 !== m && m,
                        mentionUsers: y,
                        mentionRoles: L
                    }),
                    attachments: M(e),
                    embeds: R(e),
                    codedLinks: P,
                    giftCodes: (0, p.isGiftCodeEmbed)(e) ? (0, p.findGiftCodes)(null == e ? void 0 : e.embeds[0].url) : (0, p.findGiftCodes)(e.content),
                    content: x,
                    referralTrialOfferId: B,
                    call: N(e.call, b),
                    reactions: O(e.channel_id, null != C ? C : e.reactions),
                    interaction: w,
                    interactionData: null != v ? v : e.interaction_data,
                    roleSubscriptionData: e.role_subscription_data,
                    purchaseNotification: e.purchase_notification,
                    poll: null == e.poll ? void 0 : (0, s.default)(e.poll),
                    giftInfo: null == G ? void 0 : G
                })
            }

            function C(e, t) {
                return null != t.edited_timestamp ? {
                    ...t,
                    reactions: e.reactions,
                    interaction_data: e.interaction_data
                } : {
                    ...e,
                    ...t
                }
            }

            function v(e, t) {
                if (null != t.edited_timestamp) return A(t, {
                    reactions: e.reactions,
                    interactionData: e.interactionData
                });
                let n = e;
                if (null != t.call && (n = n.set("call", N(t.call, e.timestamp))), null != t.attachments && (n = n.set("attachments", M(t))), null != t.content && "" !== t.content && (n = n.set("content", t.content)), null != t.embeds && (n = n.set("embeds", R(t))), t.pinned !== n.pinned && (n = n.set("pinned", t.pinned)), null != n.webhookId && null != t.author && (n = n.set("author", new c.default(t.author))), null != t.flags && t.flags !== n.flags && (n = n.set("flags", t.flags)), null != t.components && (n = n.set("components", t.components)), null != t.role_subscription_data && (n = n.set("roleSubscriptionData", t.role_subscription_data)), null != t.reactions) {
                    var r;
                    n = n.set("reactions", O(e.channel_id, null !== (r = e.reactions) && void 0 !== r ? r : t.reactions))
                }
                return n
            }

            function M(e) {
                return null == e.attachments ? [] : e.attachments.map(e => ({
                    ...e,
                    spoiler: e.filename.startsWith(T.SPOILER_ATTACHMENT_PREFIX)
                }))
            }

            function N(e, t) {
                if (null != e) {
                    let n = null != e.ended_timestamp ? l(new Date(e.ended_timestamp)) : null,
                        r = null != n ? l.duration(n.diff(t)) : null;
                    return {
                        participants: e.participants,
                        endedTimestamp: n,
                        duration: r
                    }
                }
                return null
            }

            function R(e) {
                if (null == e.embeds) return [];
                let t = e.embeds.map(t => (0, m.sanitizeEmbed)(e.channel_id, e.id, t));
                return (0, m.mergeEmbedsOnURL)(t)
            }

            function O(e, t) {
                var n;
                if (null == t) return [];
                let r = h.default.getChannel(e),
                    {
                        enabled: l
                    } = i.default.getCurrentConfig({
                        guildId: null !== (n = null == r ? void 0 : r.getGuildId()) && void 0 !== n ? n : "",
                        location: "812691_1"
                    }),
                    {
                        enabled: a
                    } = i.BurstReactionsUserExperiment.getCurrentConfig({
                        location: "812691_2"
                    }, {
                        autoTrackExposure: !1
                    }),
                    s = l || a;
                return t.filter(e => {
                    var t, n;
                    let r = {
                        ...e
                    };
                    return (null == r ? void 0 : r.count_details) != null && (r.burst_count = null !== (t = r.count_details.burst) && void 0 !== t ? t : 0, r.count = null !== (n = r.count_details.normal) && void 0 !== n ? n : 0), (!(r.burst_count > 0) || !(r.count < 1) || !!s) && !0
                }).map(e => {
                    var t, n;
                    let r = {
                        ...e
                    };
                    return (null == r ? void 0 : r.count_details) != null && (r.burst_count = null !== (t = r.count_details.burst) && void 0 !== t ? t : 0, r.count = null !== (n = r.count_details.normal) && void 0 !== n ? n : 0), r.count < 0 && (r.count = 0), (r.burst_count < 0 || !l && !a) && (r.burst_count = 0), r
                })
            }
            let y = e => {
                let t = (0, u.getMessageStickers)(e);
                return 0 === t.length || "" !== e.content
            }
        },
        61400: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("692038"),
                l = n("913491"),
                i = n("49111");

            function a(e, t) {
                return !(null == t || e.author.id !== t || e.state !== i.MessageStates.SENT || (0, l.default)(e) || !(0, r.canEditMessageWithStickers)(e) || e.hasFlag(i.MessageFlags.IS_VOICE_MESSAGE) || null != e.referralTrialOfferId || e.isPoll()) && !0
            }
        },
        406297: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                },
                isRawMessageMentioned: function() {
                    return s
                },
                isMentioned: function() {
                    return u
                }
            });
            var r = n("42203"),
                l = n("26989"),
                i = n("305961");

            function a(e) {
                let {
                    message: t,
                    userId: n,
                    suppressEveryone: r = !1,
                    suppressRoles: l = !1
                } = e;
                return u({
                    userId: n,
                    channelId: t.channel_id,
                    mentionEveryone: t.mentionEveryone,
                    mentionUsers: t.mentions,
                    mentionRoles: t.mentionRoles,
                    suppressEveryone: r,
                    suppressRoles: l
                })
            }

            function s(e) {
                var t, n, r, l;
                let {
                    rawMessage: i,
                    userId: a,
                    suppressEveryone: s = !1,
                    suppressRoles: o = !1
                } = e;
                return u({
                    userId: a,
                    channelId: i.channel_id,
                    mentionEveryone: null !== (n = i.mention_everyone) && void 0 !== n && n,
                    mentionUsers: null !== (r = null === (t = i.mentions) || void 0 === t ? void 0 : t.map(e => e.id)) && void 0 !== r ? r : [],
                    mentionRoles: null !== (l = i.mention_roles) && void 0 !== l ? l : [],
                    suppressEveryone: s,
                    suppressRoles: o
                })
            }

            function u(e) {
                let {
                    userId: t,
                    channelId: n,
                    mentionEveryone: a,
                    mentionUsers: s,
                    mentionRoles: u,
                    suppressEveryone: o = !1,
                    suppressRoles: d = !1
                } = e;
                if (a && !o || s.includes(t)) return !0;
                if (d || null == u || 0 === u.length) return !1;
                let c = r.default.getChannel(n);
                if (null == c) return !1;
                let f = c.getGuildId();
                if (null == f) return !1;
                let h = i.default.getGuild(f);
                if (null == h) return !1;
                let E = l.default.getMember(f, t);
                return null != E && u.some(e => E.roles.includes(e))
            }
        },
        913491: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("637612");

            function l(e) {
                return !r.MessageTypesSets.USER_MESSAGE.has(e.type)
            }
        },
        574073: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                },
                useNullableMessageAuthor: function() {
                    return h
                },
                getMessageAuthor: function() {
                    return E
                },
                useNullableUserAuthor: function() {
                    return _
                },
                getUserAuthor: function() {
                    return m
                }
            });
            var r = n("627445"),
                l = n.n(r),
                i = n("446674"),
                a = n("42203"),
                s = n("26989"),
                u = n("305961"),
                o = n("27618"),
                d = n("697218"),
                c = n("158998");

            function f(e) {
                let t = h(e);
                return l(null != t, "Result cannot be null because the message is not null"), t
            }

            function h(e) {
                var t;
                let n = (0, i.useStateFromStores)([a.default], () => null == e ? null : a.default.getChannel(e.channel_id)),
                    r = null == e ? void 0 : null === (t = e.author) || void 0 === t ? void 0 : t.id,
                    l = null == n ? void 0 : n.guild_id,
                    f = (0, i.useStateFromStores)([s.default], () => null == l || null == r ? null : s.default.getMember(l, r)),
                    h = (0, i.useStateFromStores)([d.default], () => d.default.getUser(r), [r]),
                    E = c.default.useName((null == e ? void 0 : e.author.bot) ? null == e ? void 0 : e.author : h),
                    _ = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(l)),
                    m = (0, i.useStateFromStores)([o.default], () => null != r && (null == n ? void 0 : n.isPrivate()) ? o.default.getNickname(r) : null);
                return null == e ? null : p({
                    user: e.author,
                    channel: n,
                    guild: _,
                    userName: E,
                    member: f,
                    friendNickname: m
                })
            }

            function E(e) {
                let t = a.default.getChannel(e.channel_id);
                return m(e.author, t)
            }

            function _(e, t) {
                let n = null == e ? void 0 : e.id,
                    r = null == t ? void 0 : t.guild_id,
                    l = (0, i.useStateFromStores)([s.default], () => null == r || null == n ? null : s.default.getMember(r, n)),
                    a = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(r)),
                    d = (0, i.useStateFromStores)([o.default], () => null != n && (null == t ? void 0 : t.isPrivate()) ? o.default.getNickname(n) : null),
                    f = c.default.useName(e);
                return p({
                    user: e,
                    channel: t,
                    guild: a,
                    member: l,
                    userName: f,
                    friendNickname: d
                })
            }

            function m(e, t) {
                let n = null == e ? void 0 : e.id,
                    r = null == t ? void 0 : t.guild_id,
                    l = u.default.getGuild(r),
                    i = null == r || null == n ? null : s.default.getMember(r, n),
                    a = null != n && null != t && t.isPrivate() ? o.default.getNickname(n) : null;
                return p({
                    user: e,
                    channel: t,
                    guild: l,
                    member: i,
                    friendNickname: a
                })
            }

            function p(e) {
                var t, n, r;
                let {
                    user: l,
                    channel: i,
                    guild: a,
                    member: s,
                    userName: u,
                    friendNickname: o
                } = e, d = null == l ? "???" : null != u ? u : c.default.getName(l);
                return (null == l ? void 0 : l.id) == null || null == i ? {
                    nick: d,
                    colorString: void 0
                } : (null == a ? void 0 : a.id) == null ? {
                    nick: null != o ? o : d,
                    colorString: void 0
                } : null == s ? {
                    nick: d,
                    colorString: void 0
                } : {
                    nick: null !== (n = s.nick) && void 0 !== n ? n : d,
                    colorString: null !== (r = s.colorString) && void 0 !== r ? r : void 0,
                    colorRoleName: null != s.colorRoleId ? null == a ? void 0 : null === (t = a.roles[s.colorRoleId]) || void 0 === t ? void 0 : t.name : void 0,
                    iconRoleId: s.iconRoleId,
                    guildMemberAvatar: s.avatar
                }
            }
        },
        618421: function(e, t, n) {
            "use strict";

            function r() {
                return !1
            }

            function l() {
                return null
            }
            n.r(t), n.d(t, {
                isSlowNetwork: function() {
                    return r
                },
                getSignalStrength: function() {
                    return l
                }
            })
        },
        552310: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("866227"),
                l = n.n(r);

            function i(e) {
                return {
                    ...e,
                    expiry: l(e.expiry)
                }
            }
        },
        677156: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CustomGiftExperiment: function() {
                    return l
                }
            });
            var r = n("862205");
            let l = (0, r.createExperiment)({
                kind: "user",
                id: "2023-08_custom_gift",
                label: "Custom Gift Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show gift purchaser custom gift flow",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        432173: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getReactionEmojiName: function() {
                    return _
                },
                getAccessibleEmojiDisplayName: function() {
                    return m
                },
                toReactionEmoji: function() {
                    return p
                },
                emojiEquals: function() {
                    return g
                },
                BurstRefillTierAmounts: function() {
                    return l
                },
                getBurstRefillAmount: function() {
                    return I
                },
                getBurstAnalyticsSection: function() {
                    return S
                },
                useNextReplenishmentMessage: function() {
                    return A
                },
                useTooltipReplenishmentMessage: function() {
                    return C
                },
                shouldApplyReaction: function() {
                    return v
                }
            });
            var r, l, i = n("866227"),
                a = n.n(i),
                s = n("65597");
            n("225664");
            var u = n("867805"),
                o = n("692171"),
                d = n("271938");
            n("697218");
            var c = n("764364"),
                f = n("49111"),
                h = n("646718"),
                E = n("782340");

            function _(e) {
                return null == e.id ? u.default.convertSurrogateToName(e.name) : ":".concat(e.name, ":")
            }

            function m(e, t, n, r) {
                var l, i, a;
                let s;
                s = r ? e ? E.default.Messages.SUPER_REACT_REMOVE_WITH_COUNT_A11Y_LABEL : E.default.Messages.SUPER_REACT_WITH_COUNT_A11Y_LABEL : e ? E.default.Messages.REACT_REMOVE_WITH_COUNT_A11Y_LABEL : E.default.Messages.REACT_WITH_COUNT_A11Y_LABEL;
                let u = s.format({
                    reactions: t,
                    emojiName: null !== (a = null === (i = _(n)) || void 0 === i ? void 0 : null === (l = i.replace(/[:_]/g, " ")) || void 0 === l ? void 0 : l.trim()) && void 0 !== a ? a : ""
                });
                return u
            }

            function p(e) {
                var t, n, r;
                return {
                    id: null !== (t = e.id) && void 0 !== t ? t : null,
                    name: null !== (r = null !== (n = null != e.id ? e.name : e.optionallyDiverseSequence) && void 0 !== n ? n : e.name) && void 0 !== r ? r : "",
                    animated: !!e.animated
                }
            }

            function g(e, t) {
                return null != t.id ? t.id === e.id : null == e.id && t.name === e.name
            }

            function T() {
                let e = (0, s.default)([o.default], () => o.default.nextReplenishAt);
                return null == e ? 7 : Math.max(0, Math.ceil(a(e).diff(a().utc(), "days", !0)))
            }

            function I(e) {
                if (null == e || !(0, c.isPremium)(e)) return 0;
                switch (e.premiumType) {
                    case h.PremiumTypes.TIER_0:
                        return l.TIER_0;
                    case h.PremiumTypes.TIER_1:
                        return l.TIER_1;
                    case h.PremiumTypes.TIER_2:
                        return l.TIER_2;
                    default:
                        return 0
                }
            }

            function S(e) {
                if (e.isThread()) return f.AnalyticsSections.THREAD_TEXT_AREA;
                if (e.isForumPost()) return f.AnalyticsSections.FORUM_CHANNEL_TEXT_AREA;
                if (e.isGuildVocal()) return f.AnalyticsSections.TEXT_IN_VOICE;
                return f.AnalyticsSections.CHANNEL_TEXT_AREA
            }

            function A() {
                let e = T();
                return 0 === e ? E.default.Messages.SUPER_REACTIONS_OUT_OF_BURSTS_SIMPLE_SOON : E.default.Messages.SUPER_REACTIONS_OUT_OF_BURSTS_SIMPLE.format({
                    n: e
                })
            }

            function C() {
                let e = T();
                return 0 === e ? E.default.Messages.SUPER_REACTIONS_TAB_TOOLTIP_SOON : E.default.Messages.SUPER_REACTIONS_TAB_TOOLTIP.format({
                    n: e
                })
            }

            function v(e) {
                let {
                    userId: t,
                    optimistic: n
                } = e, r = d.default.getId() === t;
                return (!n || !!r) && !0
            }(r = l || (l = {}))[r.TIER_0 = 2] = "TIER_0", r[r.TIER_1 = 2] = "TIER_1", r[r.TIER_2 = 5] = "TIER_2"
        },
        450484: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SPOTIFY_APP_PROTOCOL: function() {
                    return d
                },
                SPOTIFY_PARTY_PREFIX: function() {
                    return c
                },
                SPOTIFY_PLATFORM_NAME: function() {
                    return f
                },
                isSpotifyParty: function() {
                    return h
                },
                SpotifyResourceTypes: function() {
                    return i
                },
                SpotifyActionTypes: function() {
                    return a
                },
                SPOTIFY_HOSTNAMES: function() {
                    return E
                },
                SpotifyEndpoints: function() {
                    return p
                }
            });
            var r, l, i, a, s = n("376556"),
                u = n("773336"),
                o = n("49111");
            let d = "spotify",
                c = "spotify:",
                f = s.default.get(o.PlatformTypes.SPOTIFY).name;

            function h(e) {
                return null != e && e.startsWith(c)
            }(r = i || (i = {})).TRACK = "track", r.ARTIST = "artist", r.ALBUM = "album", r.PLAYLIST = "playlist", (l = a || (a = {})).USER_ACTIVITY_PLAY = "user_activity_play", l.USER_ACTIVITY_SYNC = "user_activity_sync", l.EMBED_SYNC = "embed_sync";
            let E = ["open.spotify.com", "www.spotify.com"],
                _ = "https://api.spotify.com/v1",
                m = e => "?utm_source=discord&utm_medium=".concat(e),
                p = Object.freeze({
                    PROFILE: "".concat(_, "/me"),
                    NOTIFICATIONS_PLAYER: "".concat(_, "/me/notifications/player"),
                    PLAYER: "".concat(_, "/me/player"),
                    PLAYER_DEVICES: "".concat(_, "/me/player/devices"),
                    PLAYER_PLAY: "".concat(_, "/me/player/play"),
                    PLAYER_PAUSE: "".concat(_, "/me/player/pause"),
                    PLAYER_REPEAT: "".concat(_, "/me/player/repeat"),
                    WEB_OPEN: function(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "desktop";
                        return "https://open.spotify.com/".concat(encodeURIComponent(e), "/").concat(encodeURIComponent(t)).concat(m(n))
                    },
                    EMBED: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "desktop";
                        return "https://open.spotify.com/embed".concat(e).concat(m(t))
                    },
                    PLAYER_OPEN: function(e, t) {
                        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "desktop";
                        return "".concat(d, ":").concat(encodeURIComponent(e), ":").concat(encodeURIComponent(t)).concat(n ? m(r) : "")
                    },
                    PREMIUM_SITE: "https://www.spotify.com/premium/".concat(m("desktop")),
                    INSTALL_ATTRIBUTION: e => "https://app.adjust.com/bdyga9?campaign=".concat(e),
                    APP_STORE: (0, u.isAndroid)() ? "https://play.google.com/store/apps/details?id=com.spotify.music&hl=en_US&gl=US" : "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8",
                    IOS_APP_STORE: "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8"
                })
        },
        328511: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("35092"),
                l = n("913144"),
                i = n("474643");
            let a = {},
                s = {};
            class u extends r.default.Store {
                getStickerPreview(e, t) {
                    let n = t === i.DraftType.FirstThreadMessage ? s : a;
                    return n[e]
                }
            }
            u.displayName = "StickerMessagePreviewStore";
            let o = new u(l.default, {
                ADD_STICKER_PREVIEW: function(e) {
                    let {
                        channelId: t,
                        sticker: n,
                        draftType: r
                    } = e, l = r === i.DraftType.FirstThreadMessage ? s : a;
                    l[t] = [n]
                },
                CLEAR_STICKER_PREVIEW: function(e) {
                    let {
                        channelId: t,
                        draftType: n
                    } = e, r = n === i.DraftType.FirstThreadMessage ? s : a;
                    null != r[t] && delete r[t]
                },
                LOGOUT: function() {
                    a = {}, s = {}
                }
            });
            var d = o
        },
        161585: function(e, t, n) {
            "use strict";
            var r, l, i, a, s, u, o, d, c, f, h, E, _, m;
            n.r(t), n.d(t, {
                StickerFormat: function() {
                    return r
                },
                MetaStickerType: function() {
                    return l
                },
                StickerExtensions: function() {
                    return i
                },
                isAnimatedSticker: function() {
                    return p
                },
                isCustomSticker: function() {
                    return g
                },
                StickerGridItemTypes: function() {
                    return a
                },
                StickerCategoryTypes: function() {
                    return s
                },
                StickerMetadataTypes: function() {
                    return u
                },
                StickerSelectLocation: function() {
                    return o
                }
            }), (d = r || (r = {}))[d.PNG = 1] = "PNG", d[d.APNG = 2] = "APNG", d[d.LOTTIE = 3] = "LOTTIE", d[d.GIF = 4] = "GIF", (c = l || (l = {}))[c.STANDARD = 1] = "STANDARD", c[c.GUILD = 2] = "GUILD", (f = i || (i = {})).PNG = "png", f.APNG = "png", f.LOTTIE = "json", f.WEBP = "webp", f.GIF = "gif";
            let p = e => e !== r.PNG,
                g = e => e !== l.STANDARD;
            (h = a || (a = {}))[h.STICKER = 0] = "STICKER", h[h.CREATE_STICKER = 1] = "CREATE_STICKER", (E = s || (s = {})).PACK = "PACK", E.FAVORITE = "FAVORITE", E.RECENT = "RECENT", E.SEARCH_RESULTS = "SEARCH_RESULTS", E.SEARCH_SUGGESTIONS = "SEARCH_SUGGESTIONS", E.GUILD = "GUILD", E.EMPTY_GUILD_UPSELL = "EMPTY_GUILD_UPSELL", E.CREATE_STICKER = "CREATE_STICKER", (_ = u || (u = {}))[_.STICKER_NAME = 0] = "STICKER_NAME", _[_.TAG = 1] = "TAG", _[_.CORRELATED_EMOJI = 2] = "CORRELATED_EMOJI", _[_.GUILD_NAME = 3] = "GUILD_NAME", _[_.PACK_NAME = 4] = "PACK_NAME", (m = o || (o = {}))[m.STICKER_PICKER = 0] = "STICKER_PICKER", m[m.EXPRESSION_SUGGESTIONS = 1] = "EXPRESSION_SUGGESTIONS", m[m.AUTOCOMPLETE = 2] = "AUTOCOMPLETE"
        },
        24373: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getStickerPackPreviewSticker: function() {
                    return A
                },
                getStickerFormatTypeFromFileType: function() {
                    return v
                },
                getFilenameForSticker: function() {
                    return M
                },
                getStickerAssetUrl: function() {
                    return N
                },
                getStickerPackBannerAssetUrl: function() {
                    return R
                },
                isStickerAssetUrl: function() {
                    return O
                },
                isStickerPackAnimated: function() {
                    return y
                },
                createStickerPackCategory: function() {
                    return L
                },
                shouldAnimateSticker: function() {
                    return D
                },
                shouldAttachSticker: function() {
                    return U
                },
                isGuildSticker: function() {
                    return b
                },
                isStandardSticker: function() {
                    return P
                },
                getMessageStickers: function() {
                    return F
                },
                isAvailableGuildSticker: function() {
                    return G
                }
            });
            var r = n("171209"),
                l = n("407063"),
                i = n("305961"),
                a = n("585722"),
                s = n("315102"),
                u = n("773336"),
                o = n("328511"),
                d = n("161585"),
                c = n("560241"),
                f = n("49111");
            let {
                API_ENDPOINT: h,
                MEDIA_PROXY_ENDPOINT: E,
                PROJECT_ENV: _,
                ASSET_ENDPOINT: m,
                CDN_HOST: p
            } = window.GLOBAL_ENV, g = Object.values(d.StickerExtensions), T = decodeURIComponent(f.Endpoints.STICKER_ASSET("[\\d]+", "(".concat(g.join("|"), ")"))), I = RegExp("(".concat(location.protocol).concat(m, "|").concat(location.protocol).concat(E, ")(").concat(T, ")"), "ig"), S = RegExp("".concat(location.protocol).concat(h, "(").concat(T, ")"), "ig"), A = e => {
                if (null != e.cover_sticker_id) {
                    let t = e.stickers.find(t => t.id === e.cover_sticker_id);
                    if (null != t) return t
                }
                return e.stickers[0]
            }, C = e => {
                switch (e) {
                    case d.StickerFormat.PNG:
                        return s.SUPPORTS_WEBP ? d.StickerExtensions.WEBP : d.StickerExtensions.PNG;
                    case d.StickerFormat.APNG:
                        return d.StickerExtensions.APNG;
                    case d.StickerFormat.LOTTIE:
                        return d.StickerExtensions.LOTTIE;
                    case d.StickerFormat.GIF:
                        return d.StickerExtensions.GIF;
                    default:
                        throw Error("Unexpected format type: ".concat(e))
                }
            }, v = e => {
                switch (e) {
                    case "application/json":
                        return d.StickerFormat.LOTTIE;
                    case "image/apng":
                        return d.StickerFormat.APNG;
                    case "image/png":
                    case "image/webp":
                        return d.StickerFormat.PNG;
                    case "image/gif":
                        return d.StickerFormat.GIF;
                    default:
                        throw Error("Unexpected file type: ".concat(e))
                }
            }, M = e => null == e ? null : "".concat(e.name, ".").concat(C(e.format_type)), N = function(e) {
                let {
                    isPreview: t = !1,
                    size: n = c.DEFAULT_STICKER_DIMENSIONS
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null == e.format_type) return null;
                let r = f.Endpoints.STICKER_ASSET(e.id, C(e.format_type));
                if ("development" !== _) {
                    if (e.format_type === d.StickerFormat.LOTTIE) return "".concat(location.protocol).concat(m).concat(r);
                    let i = e.format_type === d.StickerFormat.APNG && t && !(0, u.isAndroid)() ? "&passthrough=false" : "",
                        a = Math.min(2, (0, l.getDevicePixelRatio)());
                    return "".concat(location.protocol).concat(E).concat(r, "?size=").concat((0, l.getBestMediaProxySize)(n * a)).concat(i)
                }
                return "".concat(location.protocol).concat(h).concat(r)
            }, R = (e, t) => {
                let n;
                let r = e.banner_asset_id;
                if (null == r) return null;
                let i = s.SUPPORTS_WEBP ? "webp" : "png";
                return n = null != p ? "".concat(location.protocol, "//").concat(p, "/app-assets/").concat(c.STICKER_APPLICATION_ID, "/store/").concat(r, ".").concat(i) : "".concat(location.protocol).concat(h).concat(f.Endpoints.STORE_ASSET(c.STICKER_APPLICATION_ID, r, i)), null != t && (n += "?size=".concat((0, l.getBestMediaProxySize)(t))), n
            }, O = e => e.match("development" !== _ ? I : S), y = e => e.stickers.some(e => {
                let {
                    format_type: t
                } = e;
                return t === d.StickerFormat.APNG || t === d.StickerFormat.LOTTIE || t === d.StickerFormat.GIF
            }), L = e => ({
                type: d.StickerCategoryTypes.PACK,
                id: e.id,
                name: e.name,
                stickers: e.stickers,
                previewSticker: A(e)
            }), D = (e, t) => e === c.StickerAnimationSettings.ANIMATE_ON_INTERACTION ? t : e !== c.StickerAnimationSettings.NEVER_ANIMATE, U = (e, t, n, l) => {
                let i = a.default.getUploadCount(n, l);
                if (i > 0) return !0;
                let s = o.default.getStickerPreview(n, l),
                    u = null != s && s.length > 0;
                if (u) return !0;
                switch (e) {
                    case d.StickerSelectLocation.STICKER_PICKER:
                        return "" !== t.trim();
                    case d.StickerSelectLocation.AUTOCOMPLETE:
                    case d.StickerSelectLocation.EXPRESSION_SUGGESTIONS:
                        return (0, r.getQueriesFromUserInput)(t).length > 1;
                    default:
                        return !1
                }
            }, b = e => e.type === d.MetaStickerType.GUILD, P = e => e.type === d.MetaStickerType.STANDARD, F = e => e.stickerItems.length > 0 ? e.stickerItems : e.stickers.length > 0 ? e.stickers : [], G = e => {
                if (null === e) return !1;
                let t = e.guild_id;
                return void 0 !== i.default.getGuild(t)
            }
        },
        835174: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("551042"),
                i = {
                    show(e) {
                        (0, l.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("536071").then(n.bind(n, "536071"));
                            return n => (0, r.jsx)(t, {
                                ...n,
                                href: e
                            })
                        })
                    }
                }
        },
        566271: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isSuspiciousDownload: function() {
                    return s
                }
            });
            var r = n("746379"),
                l = n("555919");
            let i = new Set(l),
                a = {
                    "github.com": RegExp("\\/releases\\S*\\/download"),
                    "bitbucket.org": RegExp("\\/downloads\\S*\\/[^\\/]*"),
                    "gitlab.com": RegExp("\\/downloads\\S*\\/[^\\/]*")
                };

            function s(e) {
                var t;
                let {
                    pathname: n,
                    hostname: l
                } = r.parse(e);
                if (null == l) return null;
                let s = a[l];
                if (null != s && null != n && !s.test(n) || null == n) return null;
                let u = n;
                try {
                    u = decodeURIComponent(n)
                } catch (e) {}
                let o = u.split("/"),
                    d = null,
                    c = 0;
                for (let e = o.length - 1; e >= 0; e--) {
                    let t = o[e];
                    if ("" !== t && "." !== t) {
                        if (".." === t) {
                            c++;
                            continue
                        }
                        if (c > e) break;
                        d = o[e - c];
                        break
                    }
                }
                if (null == d) return null;
                let f = d.split(".");
                if (f.length < 2) return null;
                let h = null === (t = f.pop()) || void 0 === t ? void 0 : t.toLowerCase();
                return null != h && i.has(h) ? h : null
            }
        },
        459018: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("666038"),
                l = n("766274");
            class i extends r.default {
                static createFromServer(e) {
                    return new i({
                        ...e,
                        user: new l.default(e.user)
                    })
                }
                constructor(e) {
                    var t;
                    super(), this.id = e.id, this.name = e.name, this.type = e.type, this.user = e.user, this.displayName = null !== (t = e.name_localized) && void 0 !== t ? t : e.name
                }
            }
        },
        719926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("866227"),
                l = n.n(r),
                i = n("666038"),
                a = n("432173"),
                s = n("61069"),
                u = n("568734"),
                o = n("773336"),
                d = n("49111");
            class c extends i.default {
                isEdited() {
                    return null != this.editedTimestamp
                }
                getChannelId() {
                    return this.channel_id
                }
                getReaction(e) {
                    return this.reactions.find(t => (0, a.emojiEquals)(t.emoji, e))
                }
                userHasReactedWithEmoji(e, t) {
                    return this.reactions.some(n => {
                        if ((0, a.emojiEquals)(n.emoji, e)) return t && n.me || !t && n.me_burst
                    })
                }
                addReaction(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = (arguments.length > 2 && arguments[2], arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : []),
                        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                        l = -1,
                        i = this.reactions.map((i, u) => {
                            if ((0, a.emojiEquals)(i.emoji, e)) {
                                if (l = u, r) {
                                    if (t && i.me) return i;
                                    let e = t && i.me_burst ? i.burst_count : i.burst_count + 1,
                                        r = null != i.burst_colors && i.burst_colors.length > 0 ? i.burst_colors : n;
                                    i = {
                                        ...i,
                                        me_burst: !!t || i.me_burst,
                                        burst_count: e,
                                        count_details: {
                                            ...i.count_details,
                                            burst: e
                                        },
                                        burst_colors: r,
                                        themedBurstColors: s.default.buildEmojiReactionColorsPlatformed({
                                            colors: r,
                                            shouldProcessMobileColors: (0, o.isIOS)()
                                        })
                                    }
                                } else {
                                    if (t && i.me_burst) return i;
                                    let e = t && i.me ? i.count : i.count + 1;
                                    i = {
                                        ...i,
                                        count: e,
                                        count_details: {
                                            ...i.count_details,
                                            normal: e
                                        },
                                        me: !!t || i.me
                                    }
                                }
                            }
                            return i
                        });
                    return -1 === l && (r ? i.push({
                        emoji: e,
                        me: !1,
                        me_burst: t,
                        count: 0,
                        count_details: {
                            burst: 1,
                            normal: 0
                        },
                        burst_count: 1,
                        burst_colors: n,
                        themedBurstColors: s.default.buildEmojiReactionColorsPlatformed({
                            colors: null != n ? n : [],
                            shouldProcessMobileColors: (0, o.isIOS)()
                        })
                    }) : i.push({
                        emoji: e,
                        me: t,
                        me_burst: !1,
                        count: 1,
                        count_details: {
                            burst: 0,
                            normal: 1
                        },
                        burst_count: 0,
                        burst_colors: []
                    })), this.set("reactions", i)
                }
                addReactionBatch(e, t) {
                    return e.reduce((e, n) => {
                        let {
                            users: r,
                            emoji: l
                        } = n;
                        return r.reduce((e, n) => e.addReaction(l, n === t, n), e)
                    }, this)
                }
                removeReaction(e) {
                    var t, n, r;
                    let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        s = -1,
                        u = this.reactions.map((t, n) => {
                            if ((0, a.emojiEquals)(t.emoji, e)) {
                                if (i) {
                                    let e = l && !t.me_burst ? t.burst_count : t.burst_count - 1;
                                    t = {
                                        ...t,
                                        burst_count: e,
                                        me_burst: !l && t.me_burst,
                                        count_details: {
                                            ...t.count_details,
                                            burst: e
                                        }
                                    }
                                } else {
                                    let e = l && !t.me ? t.count : t.count - 1;
                                    t = {
                                        ...t,
                                        count: e,
                                        me: !l && t.me,
                                        count_details: {
                                            ...t.count_details,
                                            normal: e
                                        }
                                    }
                                }
                                s = n
                            }
                            return t
                        }),
                        {
                            count: o,
                            burst_count: d,
                            count_details: c
                        } = null !== (t = u[s]) && void 0 !== t ? t : {},
                        f = null !== (n = null == c ? void 0 : c.normal) && void 0 !== n ? n : 0,
                        h = null !== (r = null == c ? void 0 : c.burst) && void 0 !== r ? r : 0;
                    return -1 !== s && o <= 0 && d <= 0 && f <= 0 && h <= 0 && u.splice(s, 1), this.set("reactions", u)
                }
                removeReactionsForEmoji(e) {
                    return this.set("reactions", this.reactions.filter(t => !(0, a.emojiEquals)(t.emoji, e)))
                }
                isSystemDM() {
                    return this.author.isSystemUser()
                }
                hasFlag(e) {
                    return (0, u.hasFlag)(this.flags, e)
                }
                isCommandType() {
                    return this.type === d.MessageTypes.CHAT_INPUT_COMMAND || this.type === d.MessageTypes.CONTEXT_MENU_COMMAND
                }
                isPoll() {
                    return null != this.poll || this.type === d.MessageTypes.POLL
                }
                toJS() {
                    return {
                        ...this,
                        webkhook_id: this.webhookId,
                        edited_timestamp: this.editedTimestamp,
                        mention_everyone: this.mentionEveryone
                    }
                }
                isFirstMessageInForumPost(e) {
                    return this.id === this.channel_id && e.isForumPost()
                }
                constructor(e) {
                    var t, n, r;
                    super(), this.id = e.id, this.type = e.type || d.MessageTypes.DEFAULT, this.channel_id = e.channel_id, this.author = e.author, this.content = e.content || "", this.customRenderedContent = e.customRenderedContent, this.attachments = e.attachments || [], this.embeds = e.embeds || [], this.mentions = e.mentions || [], this.mentionRoles = e.mentionRoles || [], this.mentionChannels = e.mentionChannels || [], this.mentioned = e.mentioned || !1, this.pinned = e.pinned || !1, this.mentionEveryone = e.mentionEveryone || !1, this.tts = e.tts || !1, this.codedLinks = e.codedLinks || [], this.giftCodes = e.giftCodes || [], this.timestamp = e.timestamp || l(), this.editedTimestamp = e.editedTimestamp || null, this.state = e.state || d.MessageStates.SENT, this.nonce = e.nonce || null, this.blocked = e.blocked || !1, this.call = e.call || null, this.bot = e.bot || !1, this.webhookId = e.webhookId || null, this.reactions = e.reactions || [], this.applicationId = e.application_id || e.applicationId || null, this.application = e.application || null, this.activity = e.activity || null, this.messageReference = e.messageReference || null, this.flags = e.flags || 0, this.isSearchHit = e.hit || e.isSearchHit || !1, this.stickers = e.stickers || [], this.stickerItems = null !== (n = null !== (t = e.sticker_items) && void 0 !== t ? t : e.stickerItems) && void 0 !== n ? n : [], this.components = e.components, this.loggingName = e.loggingName || null, this.colorString = e.colorString, this.nick = e.nick, this.interaction = e.interaction || null, this.interactionData = e.interactionData || null, this.interactionError = e.interactionError || null, this.roleSubscriptionData = e.roleSubscriptionData, this.purchaseNotification = e.purchaseNotification, this.poll = e.poll, this.referralTrialOfferId = e.referralTrialOfferId || null, this.giftInfo = null !== (r = e.gift_info) && void 0 !== r ? r : e.giftInfo
                }
            }
            var f = c
        },
        162805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("446674"),
                l = n("233736"),
                i = n("913144");
            let a = {},
                s = {},
                u = {
                    scrollTop: 0
                };

            function o(e) {
                return {
                    guildId: e,
                    scrollTop: null,
                    scrollTo: null
                }
            }

            function d(e) {
                if (null != a[e]) {
                    let {
                        scrollTop: t,
                        scrollHeight: n,
                        offsetHeight: r
                    } = a[e];
                    return t === n - r
                }
                return !0
            }
            class c extends r.default.Store {
                percentageScrolled(e) {
                    if (null != a[e]) {
                        let {
                            scrollTop: t,
                            scrollHeight: n
                        } = a[e];
                        return t / n
                    }
                    return 1
                }
                getChannelDimensions(e) {
                    return a[e]
                }
                getGuildDimensions(e) {
                    var t;
                    return null !== (t = s[e]) && void 0 !== t ? t : o(e)
                }
                getGuildListDimensions() {
                    return u
                }
                isAtBottom(e) {
                    return d(e)
                }
            }
            c.displayName = "DimensionStore";
            var f = new c(i.default, {
                UPDATE_CHANNEL_DIMENSIONS: function(e) {
                    let {
                        channelId: t,
                        scrollTop: n,
                        scrollHeight: r,
                        offsetHeight: i
                    } = e, s = a[t];
                    if (null == n || null == r || null == i) {
                        if (null == s) return !1;
                        delete a[t]
                    } else {
                        let e = {
                            channelId: t,
                            scrollTop: n,
                            scrollHeight: r,
                            offsetHeight: i
                        };
                        if (null != s && (0, l.default)(s, e)) return !1;
                        a[t] = e
                    }
                },
                UPDATE_CHANNEL_LIST_DIMENSIONS: function(e) {
                    let {
                        guildId: t,
                        scrollTop: n,
                        scrollTo: r
                    } = e;
                    null == s[t] && (s[t] = o(t)), void 0 !== n && (s[t].scrollTop = n);
                    let l = !1;
                    return void 0 !== r && (l = s[t].scrollTo !== r, s[t].scrollTo = r), null != r || l
                },
                UPDATE_GUILD_LIST_DIMENSIONS: function(e) {
                    let {
                        scrollTop: t
                    } = e;
                    u.scrollTop = t
                },
                CALL_CREATE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    d(t) && delete a[t]
                }
            })
        },
        474643: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DraftType: function() {
                    return l
                },
                default: function() {
                    return A
                }
            });
            var r, l, i = n("917351"),
                a = n.n(i),
                s = n("446674"),
                u = n("913144"),
                o = n("449008"),
                d = n("271938"),
                c = n("42203"),
                f = n("341542"),
                h = n("49111");
            let E = h.MAX_MESSAGE_LENGTH_PREMIUM + 500;
            (r = l || (l = {}))[r.ChannelMessage = 0] = "ChannelMessage", r[r.ThreadSettings = 1] = "ThreadSettings", r[r.FirstThreadMessage = 2] = "FirstThreadMessage", r[r.ApplicationLauncherCommand = 3] = "ApplicationLauncherCommand";
            let _ = {};

            function m(e) {
                let t = _[e];
                return null == t && (t = _[e] = {}), t
            }

            function p(e) {
                var t, n;
                let {
                    type: r,
                    channelId: l,
                    draft: i,
                    draftType: a
                } = e, s = c.default.getChannel(l);
                i === (null == s ? void 0 : s.template) && (i = "");
                let u = d.default.getId();
                if (null != u && null != i && "" !== i) {
                    ;
                    let e = m(u),
                        r = e[l];
                    if (null == r && (r = e[l] = {}), (n = i).length > E && (n = n.substr(0, E)), (i = n) === (null === (t = r[a]) || void 0 === t ? void 0 : t.draft)) return !1;
                    r[a] = {
                        timestamp: Date.now(),
                        draft: i
                    }
                } else g(l, a);
                return "DRAFT_SAVE" === r
            }

            function g(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.default.getId();
                if (null == n) return !1;
                let r = m(n),
                    l = r[e];
                if (null == l) return !1;
                delete l[t], a.isEmpty(l) && delete r[e]
            }

            function T() {
                let e = d.default.getId();
                if (null == e || f.default.totalUnavailableGuilds > 0) return;
                let t = m(e);
                for (let e in t) null == c.default.getChannel(e) && delete t[e]
            }

            function I(e) {
                let {
                    channel: {
                        id: t
                    }
                } = e, n = d.default.getId();
                if (null == n) return !1;
                let r = m(n);
                return delete r[t], !1
            }
            class S extends s.default.PersistedStore {
                initialize(e) {
                    _ = null != e ? e : {}, ! function() {
                        for (let [e, t] of Object.entries(_))
                            for (let [n, r] of Object.entries(t)) {
                                let t = r[l.ChannelMessage];
                                null != t && ("" === t.draft || "" === t.draft.trim()) && g(n, l.ChannelMessage, e)
                            }
                    }(), this.waitFor(d.default, c.default, f.default)
                }
                getState() {
                    return _
                }
                getThreadDraftWithParentMessageId(e) {
                    let t = d.default.getId();
                    if (null == t) return;
                    let n = m(t),
                        r = Object.keys(n).find(t => {
                            let n = this.getThreadSettings(t);
                            return (null == n ? void 0 : n.parentMessageId) === e
                        });
                    return null != r ? this.getThreadSettings(r) : void 0
                }
                getRecentlyEditedDrafts(e) {
                    let t = d.default.getId();
                    if (null == t) return [];
                    let n = m(t);
                    return a(n).mapValues(t => null == t ? void 0 : t[e]).pickBy(o.isNotNullish).toPairs().map(e => {
                        let [t, {
                            timestamp: n,
                            draft: r
                        }] = e;
                        return {
                            channelId: t,
                            timestamp: n,
                            draft: r
                        }
                    }).sortBy(e => {
                        let {
                            timestamp: t
                        } = e;
                        return -t
                    }).value()
                }
                getDraft(e, t) {
                    let n = d.default.getId();
                    if (null == n) return "";
                    let r = m(n),
                        l = r[e];
                    if (null != l) {
                        let e = l[t];
                        if (null != e) return e.draft
                    }
                    return ""
                }
                getThreadSettings(e) {
                    let t = d.default.getId();
                    if (null == t) return null;
                    let n = m(t),
                        r = n[e];
                    return null == r ? null : r[l.ThreadSettings]
                }
            }
            S.displayName = "DraftStore", S.persistKey = "DraftStore", S.migrations = [e => {
                if (null == e) return {};
                for (let t in e) "timestamp" in e[t] && (e[t] = {
                    [l.ChannelMessage]: e[t]
                });
                return e
            }, e => {
                let t = d.default.getId();
                if (null == e || null == t) return {};
                let n = {},
                    r = n[t] = {};
                for (let t in e) r[t] = e[t];
                return n
            }];
            var A = new S(u.default, {
                CONNECTION_OPEN: function() {
                    let e = d.default.getId();
                    return !(e in _) && (_[e] = {}), T(), !1
                },
                LOGOUT: function(e) {
                    !e.isSwitchingAccount && (_ = {})
                },
                MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
                    e.userId in _ && delete _[e.userId]
                },
                GUILD_DELETE: function() {
                    return T(), !1
                },
                CHANNEL_DELETE: I,
                THREAD_DELETE: I,
                THREAD_CREATE: function(e) {
                    let {
                        channel: t
                    } = e, n = d.default.getId();
                    if (null == n || t.ownerId === n) return !1;
                    let r = m(n),
                        i = r[t.parent_id];
                    if (null == i) return !1;
                    let a = i[l.ThreadSettings];
                    if (null == a) return !1;
                    if (a.parentMessageId !== t.id) return !1;
                    {
                        var s, u;
                        let e = r[t.parent_id];
                        if (null == e) return !1;
                        let n = null !== (u = null === (s = e[l.FirstThreadMessage]) || void 0 === s ? void 0 : s.draft) && void 0 !== u ? u : "";
                        "" !== n && (r[t.id] = {
                            [l.ChannelMessage]: {
                                timestamp: Date.now(),
                                draft: n
                            }
                        }), g(t.parent_id, l.ThreadSettings), g(t.parent_id, l.FirstThreadMessage)
                    }
                },
                DRAFT_SAVE: p,
                DRAFT_CHANGE: p,
                DRAFT_CLEAR: function(e) {
                    let {
                        channelId: t,
                        draftType: n
                    } = e;
                    return g(t, n)
                },
                THREAD_SETTINGS_DRAFT_CHANGE: function(e) {
                    let {
                        channelId: t,
                        draft: n
                    } = e, r = d.default.getId();
                    if (null == r) return;
                    let i = m(r),
                        a = i[t];
                    null == a && (a = i[t] = {}), a[l.ThreadSettings] = {
                        timestamp: Date.now(),
                        ...a[l.ThreadSettings],
                        ...n,
                        parentChannelId: t
                    }
                }
            })
        },
        569983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var r, l = n("446674"),
                i = n("95410"),
                a = n("913144"),
                s = n("253981"),
                u = n("48703"),
                o = n("450484");
            let d = "MaskedLinkStore",
                c = new Set,
                f = new Set,
                h = null === (r = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === r ? void 0 : r.replace("//", "");

            function E(e) {
                let t = (0, u.getHostname)(e);
                switch (t) {
                    case window.GLOBAL_ENV.CDN_HOST:
                    case window.GLOBAL_ENV.INVITE_HOST:
                    case window.GLOBAL_ENV.GIFT_CODE_HOST:
                    case window.GLOBAL_ENV.GUILD_TEMPLATE_HOST:
                    case h:
                    case location.hostname:
                        return !0;
                    default:
                        return o.SPOTIFY_HOSTNAMES.includes(t) || s.default.isDiscordHostname(t) || c.has(t)
                }
            }

            function _(e) {
                let t = (0, u.getProtocol)(e);
                return f.has(t)
            }
            class m extends l.default.Store {
                initialize() {
                    var e;
                    let t = null !== (e = i.default.get(d)) && void 0 !== e ? e : {};
                    if (Array.isArray(t)) c = new Set(null != t ? Array.from(t) : null), f = new Set;
                    else {
                        let {
                            trustedDomains: e,
                            trustedProtocols: n
                        } = t;
                        c = new Set(null != e ? Array.from(e) : null), f = new Set(null != n ? Array.from(n) : null)
                    }
                }
                isTrustedDomain(e) {
                    return E(e)
                }
                isTrustedProtocol(e) {
                    return _(e)
                }
            }
            m.displayName = "MaskedLinkStore";
            var p = new m(a.default, {
                MASKED_LINK_ADD_TRUSTED_DOMAIN: function(e) {
                    let {
                        url: t
                    } = e;
                    if (E(t)) return !1;
                    c.add((0, u.getHostname)(t)), i.default.set(d, {
                        trustedDomains: c,
                        trustedProtocols: f
                    })
                },
                MASKED_LINK_ADD_TRUSTED_PROTOCOL: function(e) {
                    let {
                        url: t
                    } = e;
                    if (_(t)) return !1;
                    f.add((0, u.getProtocol)(t)), i.default.set(d, {
                        trustedDomains: c,
                        trustedProtocols: f
                    })
                }
            })
        },
        48703: function(e, t, n) {
            "use strict";

            function r(e) {
                let t = document.createElement("a");
                return t.href = e, t.hostname
            }

            function l(e) {
                let t = document.createElement("a");
                return t.href = e, t.protocol
            }
            n.r(t), n.d(t, {
                getHostname: function() {
                    return r
                },
                getProtocol: function() {
                    return l
                }
            })
        },
        377253: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return B
                }
            });
            var r = n("917351"),
                l = n.n(r),
                i = n("446674"),
                a = n("913144"),
                s = n("408062"),
                u = n("979911"),
                o = n("605250"),
                d = n("10853"),
                c = n("38654"),
                f = n("692038"),
                h = n("61400");
            n("574073");
            var E = n("432173"),
                _ = n("915639"),
                m = n("568734"),
                p = n("271938"),
                g = n("42203"),
                T = n("162805"),
                I = n("923959"),
                S = n("26989"),
                A = n("305961"),
                C = n("957255"),
                v = n("27618"),
                M = n("18494"),
                N = n("162771"),
                R = n("697218"),
                O = n("49111");
            let y = new Set,
                L = new o.default("MessageStore");

            function D() {
                s.default.forEach(e => {
                    s.default.commit(e.mutate({
                        ready: !1,
                        loadingMore: !1
                    }))
                }), y.clear()
            }

            function U() {
                s.default.forEach(e => {
                    e.forAll(e => {
                        e.timestamp.locale(_.default.locale)
                    })
                })
            }

            function b() {
                s.default.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    null == g.default.getChannel(t) && s.default.clear(t)
                })
            }

            function P() {
                s.default.forEach(e => {
                    s.default.commit(e.reset(e.map(e => e.set("blocked", v.default.isBlocked(e.author.id)))))
                })
            }

            function F(e) {}

            function G(e) {
                let {
                    type: t,
                    channelId: n,
                    messageId: r,
                    userId: l,
                    emoji: i,
                    burst: a
                } = e, u = s.default.get(n);
                if (null == u || !(0, E.shouldApplyReaction)(e)) return !1;
                let o = p.default.getId() === l;
                u = u.update(r, n => {
                    if ("MESSAGE_REACTION_ADD" !== t) return n.removeReaction(i, o, a);
                    {
                        let {
                            colors: t
                        } = e;
                        return n.addReaction(i, o, l, t, a)
                    }
                }), s.default.commit(u)
            }

            function w(e) {
                let {
                    type: t,
                    messageData: n
                } = e, {
                    message: r
                } = n, l = (0, u.getFailedMessageId)(n), i = r.channelId, a = s.default.getOrCreate(i);
                if (!a.has(l)) return !1;
                a = a.update(l, e => {
                    var n;
                    return (null === (n = e.embeds) || void 0 === n ? void 0 : n.filter(d.isNotAutomodEmbed).length) > 0 && (e = e.set("embeds", [])), "MESSAGE_SEND_FAILED_AUTOMOD" === t && (e = e.set("flags", (0, m.addFlag)(e.flags, O.MessageFlags.EPHEMERAL))), e
                }), s.default.commit(a)
            }
            class k extends i.default.Store {
                initialize() {
                    this.waitFor(R.default, g.default, T.default, S.default, _.default, M.default, N.default, A.default, v.default, I.default), this.syncWith([c.default], () => {})
                }
                getMessages(e) {
                    if (c.default.hasViewingRoles()) {
                        let t = g.default.getChannel(e),
                            n = null == t ? void 0 : t.getGuildId();
                        if (c.default.isViewingRoles(n) && !C.default.can(O.Permissions.VIEW_CHANNEL, t)) return new s.default(e)
                    }
                    return s.default.getOrCreate(e)
                }
                getMessage(e, t) {
                    return s.default.getOrCreate(e).get(t)
                }
                getLastEditableMessage(e) {
                    let t = R.default.getCurrentUser();
                    return l(this.getMessages(e).toArray()).reverse().find(e => (0, h.default)(e, null == t ? void 0 : t.id))
                }
                getLastCommandMessage(e) {
                    let t = R.default.getCurrentUser();
                    return this.getMessages(e).toArray().reverse().find(e => null != e.interaction && e.interaction.user.id === (null == t ? void 0 : t.id))
                }
                jumpedMessageId(e) {
                    let t = s.default.get(e);
                    return null == t ? void 0 : t.jumpTargetId
                }
                focusedMessageId(e) {
                    let t = s.default.get(e);
                    return null == t ? void 0 : t.focusTargetId
                }
                hasPresent(e) {
                    let t = s.default.get(e);
                    return null != t && t.ready && t.hasPresent()
                }
                whenReady(e, t) {
                    this.addConditionalChangeListener(() => {
                        let n = s.default.getOrCreate(e);
                        if (n.ready) return setImmediate(t), !1
                    })
                }
                isLoadingMessages(e) {
                    let t = s.default.getOrCreate(e);
                    return t.loadingMore
                }
                hasCurrentUserSentMessage(e) {
                    let t = R.default.getCurrentUser();
                    return null != this.getMessages(e).findNewest(e => e.author.id === (null == t ? void 0 : t.id))
                }
            }
            k.displayName = "MessageStore";
            var B = new k(a.default, {
                BACKGROUND_SYNC_CHANNEL_MESSAGES: function(e) {
                    let {
                        changesByChannelId: t
                    } = e;
                    for (let e in t) {
                        let n = s.default.get(e);
                        if (null == n) continue;
                        let r = n.cached || true;
                        if (!r) {
                            L.log("Skipping background message sync for ".concat(e, " cached:").concat(n.cached, " ") + "ready:".concat(n.ready, " hasMoreAfter:").concat(n.hasMoreAfter, " ") + "isConnected:".concat(!1));
                            continue
                        }
                        n.mergeDelta(t[e].new_messages, t[e].modified_messages, t[e].deleted_message_ids)
                    }
                },
                CONNECTION_OPEN: D,
                OVERLAY_INITIALIZE: D,
                CACHE_LOADED: function(e) {
                    for (let [t, n] of Object.entries(e.messages)) {
                        let e = s.default.getOrCreate(t).addCachedMessages(n, !0);
                        s.default.commit(e)
                    }
                },
                LOAD_MESSAGES: function() {
                    return !0
                },
                LOAD_MESSAGES_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        isBefore: n,
                        isAfter: r,
                        jump: l,
                        hasMoreBefore: i,
                        hasMoreAfter: a,
                        messages: u,
                        isStale: o,
                        truncate: d
                    } = e, c = s.default.getOrCreate(t);
                    c = c.loadComplete({
                        newMessages: u,
                        isBefore: n,
                        isAfter: r,
                        jump: l,
                        hasMoreBefore: i,
                        hasMoreAfter: a,
                        cached: o,
                        hasFetched: !0
                    }), null != d && (n || r) && (!n || !r) && (c = c.truncate(n, r)), s.default.commit(c)
                },
                LOAD_MESSAGES_FAILURE: function(e) {
                    let {
                        channelId: t
                    } = e, n = s.default.getOrCreate(t);
                    s.default.commit(n.mutate({
                        loadingMore: !1,
                        error: !0
                    }))
                },
                LOAD_MESSAGES_SUCCESS_CACHED: function(e) {
                    let {
                        channelId: t,
                        jump: n,
                        focus: r,
                        before: l,
                        after: i,
                        limit: a,
                        truncate: u
                    } = e, o = s.default.getOrCreate(t);
                    (null == n ? void 0 : n.present) ? o = o.jumpToPresent(a): (null == r ? void 0 : r.messageId) != null ? o = o.focusOnMessage(r.messageId) : (null == n ? void 0 : n.messageId) != null ? o = o.jumpToMessage(n.messageId, n.flash, n.offset, n.returnMessageId, n.jumpType) : (null != l || null != i) && (o = o.loadFromCache(null != l, a)), null != u && (null != l || null != i) && (null == l || null == i) && (o = o.truncate(null != l, null != i)), s.default.commit(o)
                },
                LOCAL_MESSAGES_LOADED: function(e) {
                    let t = s.default.getOrCreate(e.channelId);
                    (t.cached || !t.ready) && s.default.commit(t.addCachedMessages(e.messages, e.stale))
                },
                LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: function(e) {
                    let t = e.messageId,
                        n = e.channelId,
                        r = s.default.get(n);
                    if (null == r || !r.has(t)) return !1;
                    r = r.update(t, t => t.set("interactionData", e.interactionData)), s.default.commit(r)
                },
                TRUNCATE_MESSAGES: function(e) {
                    let {
                        channelId: t,
                        truncateBottom: n,
                        truncateTop: r
                    } = e;
                    L.log("Truncating messages for ".concat(t, " bottom:").concat(n, " top:").concat(r));
                    let l = s.default.getOrCreate(t);
                    l = l.truncate(n, r), s.default.commit(l)
                },
                CLEAR_MESSAGES: function(e) {
                    let {
                        channelId: t
                    } = e;
                    L.log("Clearing messages for ".concat(t)), s.default.clear(t), y.clear()
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: n,
                        isPushNotification: r
                    } = e, l = s.default.getOrCreate(t);
                    if (r) {
                        L.log("Inserting message tapped on from a push notification", n), s.default.commit(l.receivePushNotification(n));
                        return
                    }
                    if (!l.ready) return !1;
                    null != n.nonce && n.state !== O.MessageStates.SENDING && y.has(n.nonce) && (l = l.remove(n.nonce), y.delete(n.nonce)), l = l.receiveMessage(n, T.default.isAtBottom(t)), s.default.commit(l)
                },
                MESSAGE_SEND_FAILED: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        reason: r
                    } = e, l = s.default.getOrCreate(t);
                    if (null == l || !l.has(n)) return !1;
                    l = l.update(n, e => ((e = e.set("state", O.MessageStates.SEND_FAILED)).isCommandType() && (e = (e = e.set("interactionError", null != r ? r : "")).set("flags", (0, m.addFlag)(e.flags, O.MessageFlags.EPHEMERAL))), e)), s.default.commit(l)
                },
                MESSAGE_SEND_FAILED_AUTOMOD: w,
                MESSAGE_EDIT_FAILED_AUTOMOD: w,
                MESSAGE_UPDATE: function(e) {
                    let t = e.message.id,
                        n = e.message.channel_id,
                        r = s.default.getOrCreate(n);
                    if (null == r || !r.has(t)) return !1;
                    r = r.update(t, t => (0, f.updateMessageRecord)(t, e.message)), s.default.commit(r)
                },
                MESSAGE_DELETE: function(e) {
                    let {
                        id: t,
                        channelId: n
                    } = e, r = s.default.getOrCreate(n);
                    if (null == r || !r.has(t)) return !1;
                    if (r.revealedMessageId === t) {
                        let e = r.getAfter(t);
                        r = null != e && e.blocked ? r.mutate({
                            revealedMessageId: e.id
                        }) : r.mutate({
                            revealedMessageId: null
                        })
                    }
                    r = r.remove(t), s.default.commit(r), y.delete(t)
                },
                MESSAGE_DELETE_BULK: function(e) {
                    let {
                        ids: t,
                        channelId: n
                    } = e, r = s.default.getOrCreate(n);
                    if (null == r) return !1;
                    let i = r.removeMany(t);
                    if (r === i) return !1;
                    if (null != i.revealedMessageId && l.some(t, e => i.revealedMessageId === e)) {
                        let e = i.getAfter(i.revealedMessageId);
                        i = null != e && e.blocked ? i.mutate({
                            revealedMessageId: e.id
                        }) : i.mutate({
                            revealedMessageId: null
                        })
                    }
                    s.default.commit(i), t.forEach(e => {
                        y.delete(e)
                    })
                },
                MESSAGE_REVEAL: function(e) {
                    let {
                        channelId: t,
                        messageId: n
                    } = e, r = s.default.getOrCreate(t);
                    s.default.commit(r.mutate({
                        revealedMessageId: n
                    }))
                },
                USER_SETTINGS_PROTO_UPDATE: U,
                I18N_LOAD_SUCCESS: U,
                THREAD_CREATE_LOCAL: function(e) {
                    let {
                        channelId: t
                    } = e, n = s.default.getOrCreate(t);
                    n = n.loadComplete({
                        newMessages: [],
                        hasMoreAfter: !1,
                        hasMoreBefore: !1
                    }), s.default.commit(n)
                },
                CHANNEL_DELETE: b,
                THREAD_DELETE: b,
                GUILD_DELETE: b,
                RELATIONSHIP_ADD: P,
                RELATIONSHIP_REMOVE: P,
                GUILD_MEMBERS_CHUNK: F,
                THREAD_MEMBER_LIST_UPDATE: F,
                MESSAGE_REACTION_ADD: G,
                MESSAGE_REACTION_ADD_MANY: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        reactions: r
                    } = e, l = s.default.get(t);
                    if (null == l) return !1;
                    l = l.update(n, e => {
                        var t;
                        return e.addReactionBatch(r, null === (t = R.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)
                    }), s.default.commit(l)
                },
                MESSAGE_REACTION_REMOVE: G,
                MESSAGE_REACTION_REMOVE_ALL: function(e) {
                    let {
                        channelId: t,
                        messageId: n
                    } = e, r = s.default.get(t);
                    if (null == r) return !1;
                    r = r.update(n, e => e.set("reactions", [])), s.default.commit(r)
                },
                MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        emoji: r
                    } = e, l = s.default.get(t);
                    if (null == l) return !1;
                    l = l.update(n, e => e.removeReactionsForEmoji(r)), s.default.commit(l)
                },
                LOGOUT: function() {
                    s.default.forEach(e => {
                        s.default.clear(e.channelId)
                    }), y.clear()
                },
                UPLOAD_START: function(e) {
                    let {
                        message: t
                    } = e;
                    null != t.nonce && y.add(t.nonce)
                },
                UPLOAD_FAIL: function(e) {
                    let {
                        channelId: t,
                        messageRecord: n
                    } = e, r = null == n ? void 0 : n.nonce;
                    if (null != r && y.has(r)) {
                        let e = s.default.getOrCreate(t),
                            n = e.get(r);
                        if (null == n) return;
                        e = (e = e.remove(r)).merge([n]), y.delete(r), s.default.commit(e)
                    }
                }
            })
        },
        353365: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("446674"),
                l = n("913144"),
                i = n("448993");
            let a = null,
                s = null,
                u = null;

            function o(e) {
                let {
                    error: t
                } = e;
                a = t
            }

            function d() {
                a = null
            }
            class c extends r.default.Store {
                get paymentError() {
                    return a
                }
                getGiftCode(e) {
                    return e === u ? s : null
                }
            }
            c.displayName = "PremiumPaymentModalStore";
            var f = new c(l.default, {
                PREMIUM_PAYMENT_SUBSCRIBE_FAIL: o,
                PREMIUM_PAYMENT_UPDATE_FAIL: o,
                PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function() {
                    d()
                },
                PREMIUM_PAYMENT_UPDATE_SUCCESS: d,
                PREMIUM_PAYMENT_ERROR_CLEAR: d,
                BRAINTREE_TOKENIZE_PAYPAL_FAIL: function(e) {
                    let {
                        message: t,
                        code: n
                    } = e;
                    a = new i.BillingError(t, n)
                },
                BRAINTREE_TOKENIZE_VENMO_FAIL: function(e) {
                    let {
                        message: t,
                        code: n
                    } = e;
                    a = new i.BillingError(t, n)
                },
                SKU_PURCHASE_SUCCESS: function(e) {
                    s = e.giftCode, u = e.skuId
                },
                SKU_PURCHASE_FAIL: function(e) {
                    a = e.error
                },
                SKU_PURCHASE_AWAIT_CONFIRMATION: function(e) {
                    e.isGift && (u = e.skuId)
                },
                GIFT_CODE_CREATE: function(e) {
                    let {
                        giftCode: t
                    } = e;
                    if (0 !== t.uses || t.sku_id !== u) return !1;
                    s = t.code
                }
            })
        },
        585722: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var r = n("917351"),
                l = n.n(r),
                i = n("446674"),
                a = n("913144"),
                s = n("404118"),
                u = n("57999"),
                o = n("282928"),
                d = n("402752"),
                c = n("474643"),
                f = n("49111"),
                h = n("782340");
            let E = new Map,
                _ = [];

            function m(e, t) {
                var n, r;
                return null !== (r = null === (n = p(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== r ? r : _
            }

            function p(e) {
                var t;
                return null !== (t = E.get(e)) && void 0 !== t ? t : new Map
            }

            function g(e, t, n) {
                let r = p(e);
                r.set(t, n), E.set(e, r)
            }
            class T extends i.default.Store {
                getFirstUpload(e, t) {
                    let n = m(e, t);
                    return n.length > 0 ? n[0] : null
                }
                hasAdditionalUploads(e, t) {
                    var n;
                    return (null !== (n = m(e, t).length) && void 0 !== n ? n : 0) > 1
                }
                getUploads(e, t) {
                    return m(e, t)
                }
                getUploadCount(e, t) {
                    var n;
                    return null !== (n = m(e, t).length) && void 0 !== n ? n : 0
                }
                getUpload(e, t, n) {
                    return m(e, n).find(e => e.id === t)
                }
                findUpload(e, t, n) {
                    return m(e, t).find(n)
                }
            }
            T.displayName = "UploadAttachmentStore";
            var I = new T(a.default, {
                UPLOAD_ATTACHMENT_POP_FILE: function(e) {
                    let {
                        channelId: t
                    } = e, n = [...m(t, c.DraftType.ChannelMessage)];
                    n.shift(), g(t, c.DraftType.ChannelMessage, n)
                },
                UPLOAD_ATTACHMENT_ADD_FILES: e => {
                    var t;
                    let {
                        files: n,
                        channelId: r,
                        showLargeMessageDialog: i,
                        draftType: a
                    } = e, d = [...m(r, a)], c = (null === (t = u.default.getCurrentConfig({
                        location: "373489_1"
                    }, {
                        autoTrackExposure: !1
                    })) || void 0 === t ? void 0 : t.enabled) === !0;
                    if (c && d.length + n.length > f.MAX_UPLOAD_COUNT) {
                        s.default.show({
                            title: h.default.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
                            body: h.default.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
                                limit: f.MAX_UPLOAD_COUNT
                            })
                        });
                        return
                    }
                    l.forEach(n, e => {
                        let t = new o.CloudUpload(e, r, i, d.length);
                        t.upload(), d.push(t)
                    }), g(r, a, d)
                },
                UPLOAD_ATTACHMENT_UPDATE_FILE: function(e) {
                    let {
                        channelId: t,
                        id: n,
                        filename: r,
                        description: l,
                        spoiler: i,
                        thumbnail: a,
                        draftType: s
                    } = e, u = [...m(t, s)], o = u.map(e => (e.id === n && (void 0 !== r && (e.filename = r), void 0 !== i && (e.spoiler = i), void 0 !== l && (e.description = l), void 0 !== a && (e.isThumbnail = a)), e));
                    g(t, s, o)
                },
                UPLOAD_ATTACHMENT_REMOVE_FILE: function(e) {
                    var t;
                    let n, {
                            channelId: r,
                            id: l,
                            draftType: i
                        } = e,
                        a = (null === (t = u.default.getCurrentConfig({
                            location: "373489_2"
                        }, {
                            autoTrackExposure: !1
                        })) || void 0 === t ? void 0 : t.enabled) === !0,
                        s = [...m(r, i)];
                    if ((n = a ? s.findIndex(e => (0, d.doesImageMatchUpload)({
                            uri: l,
                            filename: l
                        }, e)) : s.findIndex(e => l === e.id)) > -1) {
                        let e = s.splice(n, 1)[0];
                        e.cancel(), g(r, i, s)
                    }
                },
                UPLOAD_ATTACHMENT_REMOVE_FILES: function(e) {
                    let {
                        channelId: t,
                        attachmentIds: n,
                        draftType: r
                    } = e, l = [...m(t, r)];
                    n.forEach(e => {
                        let t = l.findIndex(t => e === t.id);
                        if (t > -1) {
                            let e = l.splice(t, 1)[0];
                            e.cancel()
                        }
                    }), g(t, r, l)
                },
                UPLOAD_ATTACHMENT_CLEAR_ALL_FILES: function(e) {
                    let {
                        channelId: t,
                        draftType: n
                    } = e;
                    g(t, n, [])
                },
                UPLOAD_ATTACHMENT_SET_UPLOADS: function(e) {
                    let {
                        channelId: t,
                        uploads: n,
                        draftType: r
                    } = e;
                    g(t, r, n)
                },
                UPLOAD_ATTACHMENT_SET_FILE: function(e) {
                    let {
                        channelId: t,
                        id: n,
                        file: r,
                        draftType: l
                    } = e, i = [...m(t, l)], a = i.filter(e => e.id !== n), s = new o.CloudUpload(r, t);
                    s.upload(), a.push(s), g(t, l, a)
                },
                SIDEBAR_CLOSE: function(e) {
                    let {
                        baseChannelId: t
                    } = e;
                    g(t, c.DraftType.FirstThreadMessage, [])
                }
            })
        },
        994440: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getAttachmentFile: function() {
                    return s
                },
                cancelGetAttachmentFile: function() {
                    return u
                }
            });
            var r = n("627445"),
                l = n.n(r),
                i = n("966724"),
                a = n("980134");

            function s(e, t) {
                var n;
                l(e.item.platform === i.UploadPlatform.WEB, "Upload must be in the Web format");
                let r = (0, a.getAttachmentPayload)(e, t);
                return Promise.resolve({
                    file: e.item.file,
                    name: null !== (n = r.filename) && void 0 !== n ? n : ""
                })
            }
            async function u(e) {}
        },
        240873: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                sanitizeEmbed: function() {
                    return T
                },
                mergeEmbedsOnURL: function() {
                    return I
                },
                isEmbedInline: function() {
                    return S
                },
                hasClydeAiThoughtsEmbed: function() {
                    return A
                },
                isClydeAiThoughtsEmbed: function() {
                    return C
                },
                isServerShopArticleEmbed: function() {
                    return v
                }
            });
            var r = n("917351"),
                l = n.n(r),
                i = n("866227"),
                a = n.n(i),
                s = n("509043"),
                u = n("299039"),
                o = n("49111"),
                d = n("108067");
            let c = /sketchfab/i,
                f = /^https:\/\/sketchfab\.com/i,
                h = /youtube|steam|imgur|vimeo|sketchfab|soundcloud|streamable|twitch|vid\.me|twitter/i,
                E = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop$/,
                _ = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
                m = new Set([o.MessageEmbedTypes.AUTO_MODERATION_MESSAGE, o.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION, o.MessageEmbedTypes.RICH, o.MessageEmbedTypes.SAFETY_POLICY_NOTICE]);

            function p(e) {
                let {
                    width: t,
                    height: n
                } = e;
                return t > 0 && n > 0
            }

            function g(e) {
                let {
                    url: t,
                    proxy_url: n,
                    width: r,
                    height: l
                } = e;
                return {
                    url: t,
                    proxyURL: n,
                    width: r,
                    height: l
                }
            }

            function T(e, t, n) {
                let r = {
                    id: l.uniqueId("embed_"),
                    url: n.url,
                    type: n.type,
                    rawTitle: n.title,
                    rawDescription: n.description,
                    referenceId: n.reference_id,
                    flags: n.flags,
                    contentScanVersion: n.content_scan_version
                };
                if (null != n.footer && (r.footer = {
                        text: n.footer.text,
                        iconURL: n.footer.icon_url,
                        iconProxyURL: n.footer.proxy_icon_url
                    }), null != n.author && null != n.author.name && (r.author = {
                        name: n.author.name,
                        url: n.author.url,
                        iconURL: n.author.icon_url,
                        iconProxyURL: n.author.proxy_icon_url
                    }), null != n.provider && null != n.provider.name && (r.provider = {
                        name: n.provider.name,
                        url: n.provider.url
                    }), null != n.timestamp && (r.timestamp = a(new Date(n.timestamp))), null != n.color && (r.color = (0, s.int2hsl)(n.color, !0)), null != n.thumbnail && p(n.thumbnail)) switch (r.type) {
                    case o.MessageEmbedTypes.ARTICLE:
                    case o.MessageEmbedTypes.IMAGE:
                        r.image = g(n.thumbnail);
                        break;
                    default:
                        r.thumbnail = g(n.thumbnail)
                }
                if (null != n.image && p(n.image) && (r.image = g(n.image)), null != n.video && (null == r.thumbnail && null != n.video.proxy_url && p(n.video) && (r.thumbnail = {
                        width: n.video.width,
                        height: n.video.height,
                        url: "".concat(n.video.proxy_url, "?format=jpeg")
                    }), null != r.thumbnail && p(n.video) && function(e, t, n) {
                        if (null != t && c.test(t.name) || f.test(n.url)) return !1;
                        let r = null != n.proxy_url || /^https:/i.test(n.url);
                        return 1492472454139 > u.default.extractTimestamp(e) && (r = r && null != t && h.test(t.name)), r
                    }(t, n.provider, n.video) && (r.video = g(n.video))), m.has(r.type)) {
                    var i;
                    let e = null !== (i = n.fields) && void 0 !== i ? i : [];
                    r.fields = e.map(e => {
                        let {
                            name: t,
                            value: n,
                            inline: r
                        } = e;
                        return {
                            rawName: t,
                            rawValue: n,
                            inline: r
                        }
                    })
                } else r.fields = [];
                return r
            }

            function I(e) {
                let t = new Map,
                    n = [];
                return e.forEach(e => {
                    if (null == e.url) {
                        n.push(e);
                        return
                    }
                    let r = t.get(e.url);
                    if (null == r) {
                        n.push(e), t.set(e.url, e);
                        return
                    }
                    null != e.image && (null == r.images && (r.images = [], null != r.image && r.images.push(r.image)), r.images.push(e.image))
                }), n
            }

            function S(e) {
                let {
                    image: t,
                    video: n,
                    type: r,
                    author: l,
                    rawTitle: i
                } = e;
                return (null != t || null != n) && (r === o.MessageEmbedTypes.GIFV || r !== o.MessageEmbedTypes.RICH && null == l && null == i)
            }

            function A(e) {
                if (!e.author.isClyde() || 0 === e.embeds.length) return !1;
                for (let t of e.embeds)
                    if (C(t)) return !0;
                return !1
            }

            function C(e) {
                let t = null != e.fields && 3 === e.fields.length && "Thought" === e.fields[0].rawName && "Tool" === e.fields[1].rawName && "Result" === e.fields[2].rawName;
                return e.type === o.MessageEmbedTypes.RICH && (e.rawTitle === d.ClydeAIConstants.THOUGHT_EMBED_TITLE || t)
            }

            function v(e) {
                return e.type === o.MessageEmbedTypes.ARTICLE && null != e.url && (_.test(e.url) || E.test(e.url))
            }
        },
        659632: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isCustomGiftEnabled: function() {
                    return D
                },
                makeComboId: function() {
                    return U
                },
                parseComboId: function() {
                    return b
                },
                isGiftCodeEmbed: function() {
                    return F
                },
                findGiftCodes: function() {
                    return G
                },
                getGiftCodeURL: function() {
                    return w
                },
                resolveGiftCode: function() {
                    return k
                },
                trackGiftCodeCopy: function() {
                    return B
                },
                getStep: function() {
                    return x
                },
                getHeaderText: function() {
                    return H
                },
                getButtonText: function() {
                    return V
                },
                getBodyText: function() {
                    return j
                },
                getErrorMessage: function() {
                    return Y
                },
                firstLibraryApplicationForGiftCode: function() {
                    return K
                },
                processGiftCodeInput: function() {
                    return z
                },
                useGetGiftCode: function() {
                    return W
                }
            });
            var r = n("446674"),
                l = n("333805"),
                i = n("791160"),
                a = n("677156"),
                s = n("353365"),
                u = n("697218"),
                o = n("599110"),
                d = n("449008"),
                c = n("773336"),
                f = n("719923"),
                h = n("655518"),
                E = n("271560"),
                _ = n("49111"),
                m = n("646718"),
                p = n("782340");
            let g = h.default.escape(window.GLOBAL_ENV.GIFT_CODE_HOST),
                T = ["discordapp.com/gifts", "discord.com/gifts"].map(e => h.default.escape(e)),
                I = [g, ...T].join("|"),
                S = RegExp("(?: |^|https?://)(?:".concat(I, ")/([a-z0-9-]+)"), "gi"),
                A = ["discord.com/billing/promotions", "promos.discord.gg"].map(e => h.default.escape(e)),
                C = [...A].join("|"),
                v = RegExp("(?: |^|https?://)(?:".concat(C, ")/([a-z0-9-]+)"), "gi"),
                M = (e, t) => Array(t).fill(void 0).map(() => "[".concat("abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789", "]{").concat(e, "}")).join("-?"),
                N = M(4, 4),
                R = M(4, 6),
                O = M(5, 3),
                y = [N, R, O, "[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}"].join("|"),
                L = new RegExp("^(".concat("WUMP-?", ")?(").concat(y, ")$")),
                D = e => null != e && a.CustomGiftExperiment.getCurrentConfig({
                    location: "isCustomGiftEnabled"
                }, {
                    autoTrackExposure: !1
                }).enabled;

            function U(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return "".concat(e, ":").concat(null != t ? t : "", ":").concat(null != n ? n : "")
            }

            function b(e) {
                let [t, n, r] = e.split(":");
                return {
                    skuId: t,
                    subscriptionPlanId: "" === n ? null : n,
                    giftStyle: "" !== r && null != r ? Number.parseInt(r) : void 0
                }
            }

            function P(e) {
                return e.replace(/[^A-Za-z0-9]/g, "")
            }
            let F = e => (null == e ? void 0 : e.type) === _.MessageTypes.CUSTOM_GIFT && (null == e ? void 0 : e.embeds.length) === 1 && (null == e ? void 0 : e.embeds[0].type) === _.MessageEmbedTypes.GIFT,
                G = e => {
                    let t;
                    if (null == e) return [];
                    let n = new Set;
                    for (; null != (t = S.exec(e)) && n.size < 3;) n.add(P(t[1]));
                    for (; null != (t = v.exec(e)) && n.size < 3;) n.add(P(t[1]));
                    return Array.from(n)
                };

            function w() {
                let e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    n = window.GLOBAL_ENV.GIFT_CODE_HOST;
                return null == n || (0, c.isAndroid)() ? (n = location.host, e = "/gifts/".concat(t)) : e = "/".concat(t), "".concat(location.protocol, "//").concat(n).concat(e)
            }
            async function k(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                try {
                    let r = await (0, E.httpGetWithCountryCodeQuery)({
                            url: _.Endpoints.GIFT_CODE_RESOLVE(e),
                            query: {
                                with_application: t,
                                with_subscription_plan: n
                            },
                            oldFormErrors: !0
                        }),
                        l = r.body;
                    return o.default.track(_.AnalyticEvents.GIFT_CODE_RESOLVED, {
                        resolved: !0,
                        gift_code: l.code,
                        gift_code_max_uses: l.max_uses,
                        sku_id: l.store_listing.sku.id,
                        sku_type: l.store_listing.sku.type,
                        application_id: l.store_listing.sku.application_id,
                        store_title: l.store_listing.sku.name
                    }, {
                        flush: !0
                    }), l
                } catch (t) {
                    throw o.default.track(_.AnalyticEvents.GIFT_CODE_RESOLVED, {
                        resolved: !1,
                        gift_code: e
                    }), new l.default(t)
                }
            }

            function B(e, t) {
                o.default.track(_.AnalyticEvents.GIFT_CODE_COPIED, {
                    ...(0, i.default)(t, !1, !1),
                    ...e.analyticsData
                })
            }

            function x(e, t, n, r, l, i, a) {
                return null == n && (r || l || null == e) ? !a || i || r || l ? r && (t.isSubscription || null != e) ? _.GiftCodeModalStates.SUCCESS : _.GiftCodeModalStates.CONFIRM : _.GiftCodeModalStates.OPEN : _.GiftCodeModalStates.ERROR
            }

            function H(e, t, n) {
                switch (e) {
                    case _.GiftCodeModalStates.ERROR:
                        return p.default.Messages.GIFT_CONFIRMATION_HEADER_FAIL;
                    case _.GiftCodeModalStates.SUCCESS:
                        return t.isSubscription ? p.default.Messages.GIFT_CONFIRMATION_HEADER_SUCCESS_NITRO.format({
                            skuName: n.name
                        }) : p.default.Messages.GIFT_CONFIRMATION_HEADER_SUCCESS;
                    case _.GiftCodeModalStates.CONFIRM:
                    default:
                        return t.isSubscription ? p.default.Messages.GIFT_CONFIRMATION_HEADER_CONFIRM_NITRO.format({
                            skuName: n.name
                        }) : p.default.Messages.GIFT_CONFIRMATION_HEADER_CONFIRM
                }
            }

            function V(e, t, n) {
                switch (e) {
                    case _.GiftCodeModalStates.ERROR:
                        return p.default.Messages.GIFT_CONFIRMATION_BUTTON_FAIL;
                    case _.GiftCodeModalStates.SUCCESS:
                        if (__OVERLAY__) return p.default.Messages.GIFT_CONFIRMATION_BUTTON_NOICE;
                        if (t.isSubscription) return p.default.Messages.GIFT_CONFIRMATION_BUTTON_SUBSCRIPTION_SUCCESS;
                        return p.default.Messages.GIFT_CONFIRMATION_BUTTON_GO_TO_LIBRARY;
                    case _.GiftCodeModalStates.OPEN:
                        return p.default.Messages.GIFT_OPEN_PROMPT;
                    case _.GiftCodeModalStates.CONFIRM:
                    default:
                        if (null != n && n) return p.default.Messages.GIFT_CODE_AUTH_ACCEPT;
                        if (null != t.giftStyle) return t.isClaimed ? p.default.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM : p.default.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM_MOBILE;
                        return t.isSubscription ? p.default.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM_SUBSCRIPTION : p.default.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM
                }
            }

            function j(e) {
                let {
                    step: t,
                    sku: n,
                    libraryApplication: r,
                    error: l,
                    accepted: i,
                    accepting: a,
                    onGoToLibrary: s,
                    subscriptionPlan: u = null
                } = e;
                switch (t) {
                    case _.GiftCodeModalStates.ERROR:
                        return Y(r, l, i, a, s);
                    case _.GiftCodeModalStates.SUCCESS:
                        if (null != u) {
                            if (null != u.premiumSubscriptionType) {
                                if (u.premiumSubscriptionType === m.PremiumTypes.TIER_2) {
                                    let e = u.interval === m.SubscriptionIntervalTypes.MONTH ? p.default.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_PREMIUM_TIER_2_MONTHLY : p.default.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_PREMIUM_TIER_2_YEARLY;
                                    return e.format({
                                        intervalCount: u.intervalCount
                                    })
                                }
                                let e = u.interval === m.SubscriptionIntervalTypes.MONTH ? p.default.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_PREMIUM_TIER_1_MONTHLY : p.default.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_PREMIUM_TIER_1_YEARLY;
                                return e.format({
                                    intervalCount: u.intervalCount
                                })
                            }
                            let e = u.interval === m.SubscriptionIntervalTypes.MONTH ? p.default.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_GENERIC_SUBSCRIPTION_MONTHLY : p.default.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_GENERIC_SUBSCRIPTION_YEARLY;
                            return e.format({
                                skuName: n.name,
                                intervalCount: u.intervalCount
                            })
                        }
                        return p.default.Messages.GIFT_CONFIRMATION_BODY_SUCCESS.format({
                            skuName: n.name
                        });
                    case _.GiftCodeModalStates.CONFIRM:
                    default:
                        if (null != u) {
                            let e = u.interval === m.SubscriptionIntervalTypes.MONTH ? p.default.Messages.GIFT_CONFIRMATION_BODY_SUBSCRIPTION_MONTHLY_CONFIRM : p.default.Messages.GIFT_CONFIRMATION_BODY_SUBSCRIPTION_YEARLY_CONFIRM;
                            return e.format({
                                skuName: n.name,
                                intervalCount: u.intervalCount
                            })
                        }
                        return p.default.Messages.GIFT_CONFIRMATION_BODY_CONFIRM.format({
                            skuName: n.name
                        })
                }
            }

            function Y(e, t, n, r, l) {
                let i = p.default.Messages.GIFT_CONFIRMATION_BODY_OWNED.format({
                    onGoToLibrary: l
                });
                if (null != (n || r ? void 0 : e)) return i;
                if (null == t) return null;
                switch (t.code) {
                    case _.AbortCodes.INVALID_GIFT_SELF_REDEMPTION:
                        return p.default.Messages.GIFT_CONFIRMATION_BODY_SELF_GIFT_NO_PAYMENT;
                    case _.AbortCodes.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                        return p.default.Messages.GIFT_CONFIRMATION_BODY_CLAIMED;
                    case _.AbortCodes.INVALID_GIFT_REDEMPTION_OWNED:
                        return i;
                    case _.AbortCodes.UNKNOWN_GIFT_CODE:
                        return p.default.Messages.GIFT_CONFIRMATION_BODY_INVALID;
                    case _.AbortCodes.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE:
                        let a = u.default.getCurrentUser();
                        return p.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_MISMATCH.format({
                            planName: (0, f.isPremiumExactly)(a, m.PremiumTypes.TIER_2) ? p.default.Messages.PREMIUM_TIER_2 : p.default.Messages.PREMIUM_TIER_1
                        });
                    case _.AbortCodes.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED:
                        return p.default.Messages.GIFT_CONFIRMATION_BODY_ERROR_SUBSCRIPTION_MANAGED;
                    case _.AbortCodes.INVALID_GIFT_REDEMPTION_INVOICE_OPEN:
                        return p.default.Messages.GIFT_CONFIRMATION_BODY_ERROR_INVOICE_OPEN;
                    case _.AbortCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED:
                        return p.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT;
                    case _.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE:
                        return p.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID;
                    default:
                        return p.default.Messages.GIFT_CONFIRMATION_BODY_UNKNOWN_ERROR
                }
            }

            function K(e, t, n) {
                let r = t.applicationId,
                    l = null != e.entitlementBranches && e.entitlementBranches.length > 0 ? e.entitlementBranches : [r],
                    i = l.map(e => n.getLibraryApplication(r, e, !0)).filter(d.isNotNullish);
                return i.length === l.length ? i[0] : null
            }

            function z(e) {
                let t = e.trim().split("/").pop(),
                    n = t.match(L);
                if (null == n) return null;
                let [r, l, i] = n;
                return null == i ? null : i.replace(/-/g, "")
            }
            let W = (e, t) => (0, r.useStateFromStores)([s.default], () => {
                if (null == e || !t) return null;
                let n = s.default.getGiftCode(e);
                return null == n || "" === n ? null : n
            })
        },
        128259: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isLinkTrusted: function() {
                    return R
                },
                handleClick: function() {
                    return O
                }
            });
            var r = n("132710"),
                l = n.n(r),
                i = n("404118"),
                a = n("145292"),
                s = n("545158"),
                u = n("195052"),
                o = n("352266"),
                d = n("630869"),
                c = n("537025"),
                f = n("765089"),
                h = n("647374"),
                E = n("91984"),
                _ = n("835174"),
                m = n("566271"),
                p = n("42203"),
                g = n("305961"),
                T = n("569983"),
                I = n("48703"),
                S = n("377253"),
                A = n("27618"),
                C = n("18494"),
                v = n("599110"),
                M = n("49111"),
                N = n("782340");

            function R(e, t) {
                var n;
                let r = p.default.getChannel(C.default.getChannelId());
                return !!(null == r || r.type !== M.ChannelTypes.DM || A.default.isFriend(null !== (n = r.getRecipientId()) && void 0 !== n ? n : "")) && e === t
            }
            async function O(e, t) {
                var r, A, R;
                let O = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                    {
                        trusted: y,
                        onClick: L,
                        onConfirm: D,
                        shouldConfirm: U,
                        messageId: b,
                        channelId: P
                    } = e,
                    F = l.sanitizeUrl(e.href);
                if (null == F) {
                    null != t && t.preventDefault(), i.default.show({
                        title: N.default.Messages.HOLD_UP,
                        body: N.default.Messages.MALFORMED_LINK_BODY.format({
                            url: e.href
                        }),
                        isDismissable: !0
                    });
                    return
                }
                let G = null,
                    w = !1,
                    k = b,
                    B = P,
                    x = null;
                if (null != b && null != P) {
                    let e = S.default.getMessage(P, b),
                        t = p.default.getBasicChannel(P);
                    G = null !== (R = null == t ? void 0 : t.guild_id) && void 0 !== R ? R : null;
                    let n = g.default.getGuild(G),
                        l = (null == e ? void 0 : null === (r = e.messageReference) || void 0 === r ? void 0 : r.guild_id) != null && (null == e ? void 0 : e.webhookId) != null && (null == e ? void 0 : e.hasFlag(M.MessageFlags.IS_CROSSPOST)) && null != G;
                    l && (null == e ? void 0 : null === (A = e.messageReference) || void 0 === A ? void 0 : A.guild_id) != null ? (k = e.messageReference.message_id, B = e.messageReference.channel_id, x = e.messageReference.guild_id) : x = G;
                    let i = (null == t ? void 0 : t.type) === M.ChannelTypes.GUILD_ANNOUNCEMENT && (null == n ? void 0 : n.hasFeature(M.GuildFeatures.COMMUNITY)) === !0,
                        a = (null == e ? void 0 : e.hasFlag(M.MessageFlags.EPHEMERAL)) === !0;
                    w = null != e && !a && (l || i)
                }
                let H = p.default.getChannel(C.default.getChannelId()),
                    V = g.default.getGuild(null == H ? void 0 : H.getGuildId());
                if (null != H && null != V && V.hasFeature(M.GuildFeatures.DISCOVERABLE) && v.default.track(M.AnalyticEvents.URL_CLICKED, {
                        url_domain: (0, I.getHostname)(F),
                        guild_id: V.id,
                        channel_id: H.id
                    }), f.default.trackLinkClicked(F), null != L) {
                    if (L(t)) return
                } else {
                    let {
                        default: e
                    } = await n.el("572544").then(n.bind(n, "572544")), r = e(F, {
                        skipExtensionCheck: void 0,
                        analyticsLocations: O
                    });
                    if (null != r && r(t)) return
                }
                let j = () => {
                        if (w && f.default.trackAnnouncementMessageLinkClicked({
                                messageId: k,
                                channelId: P,
                                guildId: G,
                                sourceChannelId: B,
                                sourceGuildId: x
                            }), null != D) {
                            D();
                            return
                        }(0, s.default)(F)
                    },
                    Y = o.default.isBlockedDomain(F);
                if (null !== Y) {
                    null == t || t.preventDefault(), u.default.show(F);
                    return
                }
                if (null != (0, m.isSuspiciousDownload)(F)) {
                    null == t || t.preventDefault(), _.default.show(F);
                    return
                }
                if ((0, c.shouldShowLinkNotDiscordWarning)(F)) {
                    null == t || t.preventDefault(), d.default.show(F);
                    return
                }
                let K = "function" == typeof y ? y() : y,
                    z = (0, I.getProtocol)(F),
                    W = !("http:" === z || "https:" === z);
                if (!W && (K || T.default.isTrustedDomain(F)) || W && T.default.isTrustedProtocol(F)) {
                    null == t || null != U && U ? j() : w && f.default.trackAnnouncementMessageLinkClicked({
                        messageId: k,
                        channelId: P,
                        guildId: G,
                        sourceChannelId: B,
                        sourceGuildId: x
                    });
                    return
                }
                if (null != t && t.preventDefault(), W) E.default.show({
                    url: F,
                    trustUrl: a.trustProtocol,
                    onConfirm: j,
                    isProtocol: !0
                });
                else {
                    let e = (0, h.punycodeLink)(F),
                        t = null != e ? e.displayTarget : F;
                    E.default.show({
                        url: t,
                        trustUrl: a.trustDomain,
                        onConfirm: j,
                        isProtocol: !1
                    })
                }
            }
        },
        231987: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("485828"),
                l = n.n(r),
                i = n("605250");
            let a = new i.default("Queue");
            class s {
                enqueue(e, t) {
                    this.queue.push({
                        message: e,
                        success: t
                    }), this._drainIfNecessary()
                }
                get length() {
                    return this.queue.length
                }
                _drainIfNecessary() {
                    if (null !== this.timeout || 0 === this.queue.length || !0 === this.draining) return;
                    this.draining = !0;
                    let e = this.queue.shift(),
                        {
                            message: t,
                            success: n
                        } = e;
                    this.drain(t, (t, r) => {
                        if (this.draining = !1, null == t) {
                            setImmediate(() => this._drainIfNecessary());
                            try {
                                n(r)
                            } catch (e) {
                                this.logger.error("", e)
                            }
                        } else {
                            var l;
                            let n = null !== (l = t.retryAfter) && void 0 !== l ? l : this.defaultRetryAfter;
                            this.logger.info("Rate limited. Delaying draining of queue for ".concat(n, " ms.")), this.timeout = setTimeout(() => {
                                this.queue.unshift(e), this.timeout = null, this._drainIfNecessary()
                            }, n)
                        }
                    })
                }
                constructor(e = a, t = 100) {
                    this.logger = e, this.defaultRetryAfter = t, this.queue = new l, this.timeout = null, this.draining = !1
                }
            }
        },
        35013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                insert: function() {
                    return r
                }
            });

            function r(e, t, n) {
                let r = function(e, t, n) {
                    let r = 0,
                        l = e.length;
                    for (; r < l;) {
                        let i = r + l >>> 1;
                        0 > n(e[i], t) ? r = i + 1 : l = i
                    }
                    return r
                }(e, t, n);
                e.splice(r, 0, t)
            }
        },
        271560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getStoreListingLocation: function() {
                    return C
                },
                getApplicationStoreListingLocation: function() {
                    return v
                },
                getAssetURL: function() {
                    return M
                },
                httpGetWithCountryCodeQuery: function() {
                    return N
                },
                nativePlatformTypeToSKUOperatingSystem: function() {
                    return R
                },
                skuOperatingSystemToText: function() {
                    return O
                },
                getPrimarySKUForApplication: function() {
                    return y
                },
                getSocialRecommendationReasons: function() {
                    return D
                },
                getNonSocialRecommendationReasons: function() {
                    return b
                }
            });
            var r = n("917351"),
                l = n.n(r),
                i = n("866227"),
                a = n.n(i),
                s = n("642852"),
                u = n.n(s),
                o = n("394846"),
                d = n("872717"),
                c = n("850068"),
                f = n("407063"),
                h = n("160299"),
                E = n("357957"),
                _ = n("521012"),
                m = n("560528"),
                p = n("568734"),
                g = n("449008"),
                T = n("773336"),
                I = n("49111"),
                S = n("782340");
            u.shim();
            let A = !o.isMobile && !o.isTablet && -1 !== (0, m.getChromeVersion)();

            function C(e, t) {
                let {
                    analyticsSource: n,
                    analyticsProperties: r,
                    storeListingId: l,
                    slug: i,
                    channelId: a,
                    guildId: s
                } = t;
                return {
                    pathname: null != a && null != s ? I.Routes.CHANNEL(s, a, e) : I.Routes.APPLICATION_STORE_LISTING_SKU(e, i),
                    state: {
                        analyticsSource: n,
                        analyticsProperties: r
                    },
                    search: null != l ? "?store_listing_id=".concat(l) : ""
                }
            }

            function v(e, t) {
                let {
                    analyticsSource: n,
                    analyticsProperties: r,
                    slug: l
                } = t;
                return {
                    pathname: I.Routes.APPLICATION_STORE_LISTING_APPLICATION(e, l),
                    state: {
                        analyticsSource: n,
                        analyticsProperties: r
                    }
                }
            }

            function M(e, t, n, r) {
                var l;
                let i;
                let a = window.GLOBAL_ENV.CDN_HOST;
                if (null == r) switch (t.mimeType || t.mime_type) {
                    case "video/quicktime":
                    case "video/mp4":
                        r = "mp4";
                        break;
                    case "image/gif":
                        r = "gif";
                        break;
                    default:
                        r = "webp"
                }
                "webp" === r && !A && (r = "png");
                let s = (l = "https:", "https:");
                return i = null != a ? "".concat(s, "//").concat(a, "/app-assets/").concat(e, "/store/").concat(t.id, ".").concat(r) : "".concat(s).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(I.Endpoints.STORE_ASSET(e, t.id, r)), null != n && (i += "?size=".concat((0, f.getBestMediaProxySize)(n * (0, f.getDevicePixelRatio)()))), i
            }
            async function N(e) {
                var t, n, r, l;
                let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (i) {
                    let e = [];
                    !E.default.hasFetchedPaymentSources && e.push(null !== (n = h.default.paymentSourcesFetchRequest) && void 0 !== n ? n : (0, c.fetchPaymentSources)()), !h.default.ipCountryCodeLoaded && e.push((0, c.fetchIpCountryCode)()), e.push(new Promise(async e => {
                        if (_.default.hasFetchedSubscriptions()) e();
                        else if (h.default.isSubscriptionFetching) {
                            let t = () => {
                                h.default.isSubscriptionFetching ? setTimeout(t, 50) : e()
                            };
                            t()
                        } else await (0, c.fetchSubscriptions)(), e()
                    })), await Promise.allSettled(e)
                }
                let a = E.default.getDefaultBillingCountryCode(),
                    s = null !== (r = null === (t = E.default.defaultPaymentSource) || void 0 === t ? void 0 : t.id) && void 0 !== r ? r : null,
                    u = _.default.getPremiumTypeSubscription();
                null != u && null != u.paymentSourceId && (s = u.paymentSourceId), null === a && (a = null !== (l = h.default.ipCountryCode) && void 0 !== l ? l : null);
                let o = {};
                if (null != a && (o.country_code = a), null != s && (o.payment_source_id = s), null != a || null != s) {
                    if ("string" == typeof e) {
                        let t = {
                            url: e,
                            oldFormErrors: !0
                        };
                        e = t
                    }
                    if ("string" == typeof e.query) throw Error("string query not supported");
                    e.query = {
                        ...o,
                        ...e.query
                    }
                }
                return d.default.get(e)
            }

            function R(e) {
                switch (e) {
                    case T.PlatformTypes.WINDOWS:
                        return I.OperatingSystems.WINDOWS;
                    case T.PlatformTypes.OSX:
                        return I.OperatingSystems.MACOS;
                    case T.PlatformTypes.LINUX:
                        return I.OperatingSystems.LINUX;
                    default:
                        return null
                }
            }

            function O(e) {
                switch (e) {
                    case I.OperatingSystems.WINDOWS:
                        return S.default.Messages.WINDOWS;
                    case I.OperatingSystems.MACOS:
                        return S.default.Messages.MACOS;
                    case I.OperatingSystems.LINUX:
                        return S.default.Messages.LINUX
                }
                throw Error("Unknown operating system value: ".concat(e))
            }

            function y(e, t, n) {
                let r = t.getGame(e);
                return null == r || null == r.primarySkuId ? null : n.get(r.primarySkuId)
            }
            let L = [];

            function D(e, t, n, r, i) {
                let a = t.get(e);
                if (null == a) return L;
                let s = a.applicationId,
                    u = [],
                    o = [],
                    d = function(e, t, n) {
                        var r;
                        let l = null !== (r = n.getNowPlaying(e)) && void 0 !== r ? r : {},
                            i = Object.keys(l),
                            a = i.map(e => {
                                let n = t.getUser(e);
                                return null == n ? null : {
                                    user: n,
                                    startTime: l[n.id].startedPlaying
                                }
                            }).filter(g.isNotNullish).sort((e, t) => t.startTime - e.startTime);
                        return 0 === a.length ? null : {
                            type: I.StoreRecommendationTypes.NOW_PLAYING,
                            userInfo: a
                        }
                    }(s, n, r);
                null != d && (u.push(d), o = d.userInfo.map(e => {
                    let {
                        user: t
                    } = e;
                    return t.id
                }));
                let c = i.getStatisticsForApplication(s);
                if (null != c) {
                    let e = c.map(e => e.user_id);
                    if (l.difference(e, o).length > 0) {
                        let e = function(e, t, n) {
                            let r = n.getStatisticsForApplication(e);
                            if (null == r) return null;
                            let l = r.map(e => {
                                let n = t.getUser(e.user_id);
                                return null == n ? null : {
                                    user: n,
                                    endTime: Date.parse(e.last_played_at)
                                }
                            }).filter(g.isNotNullish).sort((e, t) => t.endTime - e.endTime);
                            return 0 === l.length ? null : {
                                type: I.StoreRecommendationTypes.EVER_PLAYED,
                                userInfo: l
                            }
                        }(s, n, i);
                        null != e && u.push(e)
                    }
                }
                return u
            }
            let U = [];

            function b(e, t, n) {
                let r = t.get(e),
                    l = n.getForSKU(e);
                if (null == r || null == l) return U;
                let i = [];
                (0, p.hasFlag)(r.flags, I.SKUFlags.HAS_FREE_PREMIUM_CONTENT) && i.push({
                    type: I.StoreRecommendationTypes.HAS_FREE_PREMIUM_CONTENT
                });
                let s = r.releaseDate;
                return null != s && 3 > a().diff(s, "months") && (r.accessType === I.SKUAccessTypes.EARLY_ACCESS ? i.push({
                    type: I.StoreRecommendationTypes.EARLY_ACCESS,
                    releaseDate: s
                }) : i.push({
                    type: I.StoreRecommendationTypes.RECENT_RELEASE_DATE,
                    releaseDate: s
                })), null != l.flavorText && i.push({
                    type: I.StoreRecommendationTypes.FLAVOR_TEXT,
                    flavorText: l.flavorText
                }), i
            }
        },
        340454: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            let r = /^([\w-+]+(?:\.[\w-+]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i,
                l = /^((https:\/\/)?(discord\.gg\/)|(discord\.com\/)(invite\/)?)?[A-Za-z0-9]{8,8}$/,
                i = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                a = /^(.*)#[0-9]{1,5}$/,
                s = ["@", "#", ":", "```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage"],
                u = ["discordtag", "everyone", "here", "discord nitro", "discord"];
            var o = {
                isEmail: function(e) {
                    return r.test(e)
                },
                isInvite: function(e) {
                    return l.test(e)
                },
                isPhoneNumber: function(e) {
                    return i.test(e)
                },
                isUserTagLike: function(e) {
                    let t = a.exec(e);
                    if (null != t && t.length > 1) {
                        let e = t[1],
                            n = s.some(t => e.includes(t)),
                            r = u.includes(e);
                        return !n && !r
                    }
                    return !1
                }
            }
        }
    }
]);
//# sourceMappingURL=d88cebc08b6be28647d7.js.map