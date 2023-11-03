(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["57789"], {
        304983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MoreHorizontalIcon: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("669491"),
                a = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        789394: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChannelEmojisExperiment: function() {
                    return l
                }
            });
            var r = n("862205");
            let l = (0, r.createExperiment)({
                kind: "user",
                id: "2023-03_channel_name_emojis",
                label: "Channel Emojis",
                defaultConfig: {
                    enabled: !1,
                    left: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable channel name emojis",
                    config: {
                        enabled: !0,
                        left: !1
                    }
                }, {
                    id: 2,
                    label: "Emojis to left of channel icon",
                    config: {
                        enabled: !0,
                        left: !0
                    }
                }]
            })
        },
        76385: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_TOKEN_TYPE: function() {
                    return l
                },
                Token: function() {
                    return s
                },
                default: function() {
                    return i
                }
            });
            let r = /.+/g,
                l = "NON_TOKEN";

            function a(e, t, n) {
                if (null == t) return null;
                for (let r = 0; r < t.length; r++) {
                    let l;
                    let a = t[r],
                        o = u(e.match(a.regex), n);
                    if (null != o) {
                        let {
                            cache: e
                        } = a;
                        if (null != e && null != (l = e.get(o[0])) && ((l = new s(l)).start = o.index), null == l) {
                            if (l = new s(o, a.type), null != a.validator && !a.validator(l)) continue;
                            null != e && !(null == e ? void 0 : e.has(o[0])) && e.set(o[0], l)
                        }
                        return l
                    }
                }
                return null
            }

            function u(e, t) {
                if (null == e) return null;
                let n = [...e];
                return n.index = t, n
            }
            class o {
                reset(e) {
                    this._rules = [], this._followers = {}, this._nonTokenType = null != e ? e : l
                }
                addRule(e) {
                    let t;
                    let {
                        type: n,
                        follows: r,
                        validator: l
                    } = e, {
                        regex: a
                    } = e;
                    if ("^" !== a.source.charAt(0) && (a = new RegExp("^".concat(a.source), a.flags)), null != l && (t = new Map), null == r) {
                        this._rules.push({
                            regex: a,
                            type: n,
                            validator: l,
                            cache: t
                        });
                        return
                    }
                    r.forEach(e => {
                        null == this._followers[e] && (this._followers[e] = []), this._followers[e].push({
                            regex: a,
                            type: n,
                            validator: l,
                            cache: t
                        })
                    })
                }
                tokenize(e) {
                    let t, n = e,
                        l = "",
                        a = 0,
                        o = [];
                    for (; n.length > 0;) {
                        let e = this._getMatch(n, t, a + l.length);
                        null != e ? (null != l && "" !== l && o.push(new s(u(l.match(r), a), this._nonTokenType)), t = e, o.push(e), a += t.length + l.length, n = n.substring(t.length), l = "") : (l += n[0], n = n.substring(1))
                    }
                    return null != l && "" !== l && o.push(new s(u(l.match(r), a), this._nonTokenType)), o
                }
                clearCache() {
                    for (let e in this._rules.forEach(e => {
                            var t;
                            return null === (t = e.cache) || void 0 === t ? void 0 : t.clear()
                        }), this._followers) {
                        let t = this._followers[e];
                        t.forEach(e => {
                            var t;
                            return null === (t = e.cache) || void 0 === t ? void 0 : t.clear()
                        })
                    }
                }
                _getMatch(e, t, n) {
                    let r;
                    let l = null != t ? t.type : null;
                    return (null == t ? void 0 : t.end) === n && (r = a(e, this._followers[String(l)], n)), null == r && (r = a(e, this._rules, n)), r
                }
                constructor(e = [], t) {
                    this._rules = [], this._followers = {}, this._nonTokenType = l, this.reset(t), e.forEach(e => this.addRule(e))
                }
            }
            class s {
                get end() {
                    return this.start + this.length
                }
                get length() {
                    return this.match[0].length
                }
                valueOf() {
                    return this.match[0]
                }
                getFullMatch() {
                    return this.match[0]
                }
                getMatch() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return this.match[e]
                }
                setData(e, t) {
                    null == this._data && (this._data = new Map), this._data.set(e, t)
                }
                getData(e) {
                    if (null != this._data) return this._data.get(e)
                }
                constructor(e, t) {
                    if (e instanceof s) this.match = [...e.match], this.start = e.start, this.type = e.type, null != e._data && (this._data = e._data);
                    else if (null != e) {
                        var n;
                        this.match = [...e], this.start = "string" == typeof e ? 0 : null !== (n = e.index) && void 0 !== n ? n : 0, this.type = t
                    } else this.match = [], this.start = 0, this.type = t
                }
            }
            o.NON_TOKEN_TYPE = l, o.Token = s;
            var i = o
        },
        955513: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRandomDateShortcut: function() {
                    return G
                },
                ComponentTypes: function() {
                    return l
                },
                refreshSearchTokens: function() {
                    return V
                },
                getFilterAutocompletions: function() {
                    return X
                },
                default: function() {
                    return z
                }
            });
            var r, l, a = n("448105"),
                u = n.n(a),
                o = n("917351"),
                s = n.n(o),
                i = n("866227"),
                c = n.n(i),
                E = n("923959"),
                d = n("27618"),
                _ = n("744983"),
                f = n("18494"),
                T = n("162771"),
                S = n("102985"),
                h = n("697218"),
                R = n("25292"),
                p = n("655518"),
                A = n("158998"),
                g = n("49111"),
                N = n("782340");

            function y() {
                return new Set(c.months().map(e => e.toLowerCase()))
            }

            function I() {
                return new Set(c.weekdays().map(e => e.toLowerCase()))
            }

            function C() {
                let e = new Date().getFullYear();
                return new Set(s.range(2015, e + 1).map(e => e.toString()))
            }

            function m(e, t) {
                return [e, e.clone().add(1, t)]
            }

            function L(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = c().startOf(e).add(t, e);
                return m(n, e)
            }

            function F(e, t, n) {
                let r = c(e, t).local();
                return m(r, n)
            }

            function M() {
                return {
                    [N.default.Messages.SEARCH_SHORTCUT_TODAY]: () => L("day"),
                    [N.default.Messages.SEARCH_SHORTCUT_YESTERDAY]: () => L("day", -1),
                    [N.default.Messages.SEARCH_SHORTCUT_WEEK]: () => L("week"),
                    [N.default.Messages.SEARCH_SHORTCUT_MONTH]: () => L("month"),
                    [N.default.Messages.SEARCH_SHORTCUT_YEAR]: () => L("year")
                }
            }
            let H = RegExp("(?:\\s*(".concat("([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})", "|").concat("([0-9]{4})-([0-9]{1,2})", "|").concat("\\d{4}", "|").concat("([^\\d\\s]+)", "))"), "i"),
                k = RegExp("\\s*(true|false)", "i");

            function v(e) {
                return "".concat(e, ":")
            }

            function D(e) {
                return RegExp(v(e), "i")
            }

            function O(e) {
                let t;
                let n = e.getMatch(1),
                    r = e => null != e ? null == e ? void 0 : e.id : null;
                return null != (t = g.ID_REGEX.test(n) ? n : n === g.ME ? r(h.default.getCurrentUser()) : null != e.getMatch(4) ? r(h.default.findByTag(e.getMatch(4))) : r(h.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData("userId", t), !0)
            }

            function U(e, t) {
                let n, r;
                let l = e.getFullMatch().trim().toLowerCase(),
                    a = M()[l];
                null != a ? [n, r] = a() : y().has(l) ? [n, r] = F(l, "MMMM", "month") : I().has(l) ? [n, r] = F(l, "dddd", "day") : C().has(l) ? [n, r] = F(l, "YYYY", "year") : [n, r] = F(l, g.SEARCH_DATE_FORMAT, "day");
                let u = n.isValid() && r.isValid();
                return !!u && ("before" === t ? (r = n, n = null) : "after" === t && (n = r, r = null), e.setData("start", n), e.setData("end", r), !0)
            }

            function b(e) {
                var t;
                let n = e.getMatch(1),
                    r = T.default.getGuildId(),
                    l = E.default.getChannels(r)[E.GUILD_SELECTABLE_CHANNELS_KEY].concat(E.default.getChannels(r)[E.GUILD_VOCAL_CHANNELS_KEY]),
                    a = E.default.getTextChannelNameDisambiguations(r),
                    u = s.chain(l).map(e => {
                        let {
                            channel: t
                        } = e;
                        return t
                    }).find(e => {
                        var r;
                        return n === (null !== (t = null === (r = a[e.id]) || void 0 === r ? void 0 : r.name) && void 0 !== t ? t : e.name)
                    }).value();
                return null != u && (e.setData("channel", u), !0)
            }

            function w(e) {
                let t = {
                    [N.default.Messages.SEARCH_ANSWER_HAS_LINK]: "link",
                    [N.default.Messages.SEARCH_ANSWER_HAS_EMBED]: "embed",
                    [N.default.Messages.SEARCH_ANSWER_HAS_ATTACHMENT]: "file",
                    [N.default.Messages.SEARCH_ANSWER_HAS_VIDEO]: "video",
                    [N.default.Messages.SEARCH_ANSWER_HAS_IMAGE]: "image",
                    [N.default.Messages.SEARCH_ANSWER_HAS_SOUND]: "sound",
                    [N.default.Messages.SEARCH_ANSWER_HAS_STICKER]: "sticker"
                } [e.getMatch(1)];
                return null != t && "" !== t && (e.setData("has", t), !0)
            }

            function P() {
                return [...Array.from(y()), ...Array.from(I()), ...Array.from(C()), ...Object.keys(M())]
            }

            function G() {
                return s.sample(P())
            }

            function x(e, t, n) {
                return K(e, t, P()).map(e => ({
                    ...e,
                    group: n,
                    key: "".concat(n, "-").concat(e.text)
                }))
            }

            function K(e, t, n) {
                let r = e.toLocaleLowerCase();
                return s(n).filter(e => u(r, e.toLocaleLowerCase())).take(t).map(e => ({
                    text: e
                })).value()
            }

            function W(e, t) {
                let n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                    l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    a = _.default.getSearchType(t);
                e = e.split("#")[0];
                let u = {
                    query: e,
                    limit: r,
                    request: l
                };
                switch (a) {
                    case g.SearchTypes.GUILD:
                        n = R.default.queryGuildUsers({
                            ...u,
                            guildId: t
                        });
                        break;
                    case g.SearchTypes.CHANNEL:
                        n = R.default.queryChannelUsers({
                            ...u,
                            channelId: t
                        });
                        break;
                    case g.SearchTypes.DMS:
                        n = R.default.queryUsers(e, r, !0, l, () => !0);
                        break;
                    default:
                        return []
                }
                return n.filter(e => {
                    let {
                        record: t
                    } = e;
                    return !d.default.isBlocked(t.id)
                }).map(e => {
                    let {
                        record: t
                    } = e;
                    return {
                        text: A.default.getUserTag(t),
                        user: t
                    }
                })
            }

            function q() {
                return _.default.getSearchType() === g.SearchTypes.GUILD
            }

            function Y() {
                return !S.default.hidePersonalInformation
            }
            let B = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
            (r = l || (l = {})).FILTER = "FILTER", r.ANSWER = "ANSWER";
            let j = {};

            function V() {
                Object.assign(j, function() {
                    let e = [N.default.Messages.SEARCH_ANSWER_HAS_LINK, N.default.Messages.SEARCH_ANSWER_HAS_EMBED, N.default.Messages.SEARCH_ANSWER_HAS_ATTACHMENT, N.default.Messages.SEARCH_ANSWER_HAS_VIDEO, N.default.Messages.SEARCH_ANSWER_HAS_IMAGE, N.default.Messages.SEARCH_ANSWER_HAS_SOUND, N.default.Messages.SEARCH_ANSWER_HAS_STICKER];
                    return {
                        [g.SearchTokenTypes.FILTER_FROM]: {
                            regex: D(N.default.Messages.SEARCH_FILTER_FROM),
                            componentType: l.FILTER,
                            key: v(N.default.Messages.SEARCH_FILTER_FROM),
                            validator: Y,
                            getAutocompletions: W
                        },
                        [g.SearchTokenTypes.ANSWER_USERNAME_FROM]: {
                            follows: [g.SearchTokenTypes.FILTER_FROM],
                            regex: B,
                            validator: O,
                            mutable: !0,
                            componentType: l.ANSWER,
                            queryKey: "author_id"
                        },
                        [g.SearchTokenTypes.FILTER_MENTIONS]: {
                            regex: D(N.default.Messages.SEARCH_FILTER_MENTIONS),
                            componentType: l.FILTER,
                            key: v(N.default.Messages.SEARCH_FILTER_MENTIONS),
                            validator: Y,
                            getAutocompletions: W
                        },
                        [g.SearchTokenTypes.ANSWER_USERNAME_MENTIONS]: {
                            follows: [g.SearchTokenTypes.FILTER_MENTIONS],
                            regex: B,
                            validator: O,
                            mutable: !0,
                            componentType: l.ANSWER,
                            queryKey: "mentions"
                        },
                        [g.SearchTokenTypes.FILTER_HAS]: {
                            regex: D(N.default.Messages.SEARCH_FILTER_HAS),
                            componentType: l.FILTER,
                            key: v(N.default.Messages.SEARCH_FILTER_HAS),
                            getAutocompletions: (t, n, r) => K(t, r, e)
                        },
                        [g.SearchTokenTypes.ANSWER_HAS]: {
                            regex: RegExp("(?:\\s*-?(".concat(e.map(e => p.default.escape(e)).join("|"), "))"), "i"),
                            follows: [g.SearchTokenTypes.FILTER_HAS],
                            validator: w,
                            componentType: l.ANSWER,
                            queryKey: "has"
                        },
                        [g.SearchTokenTypes.FILTER_FILE_TYPE]: {
                            regex: D(N.default.Messages.SEARCH_FILTER_FILE_TYPE),
                            key: v(N.default.Messages.SEARCH_FILTER_FILE_TYPE),
                            componentType: l.FILTER
                        },
                        [g.SearchTokenTypes.ANSWER_FILE_TYPE]: {
                            regex: /(?:\s*([^\s]+))/,
                            follows: [g.SearchTokenTypes.FILTER_FILE_TYPE],
                            mutable: !0,
                            componentType: l.ANSWER,
                            queryKey: "attachment_extensions"
                        },
                        [g.SearchTokenTypes.FILTER_FILE_NAME]: {
                            regex: D(N.default.Messages.SEARCH_FILTER_FILE_NAME),
                            key: v(N.default.Messages.SEARCH_FILTER_FILE_NAME),
                            componentType: l.FILTER
                        },
                        [g.SearchTokenTypes.ANSWER_FILE_NAME]: {
                            regex: /(?:\s*([^\s]+)(?=\s))/,
                            follows: [g.SearchTokenTypes.FILTER_FILE_NAME],
                            mutable: !0,
                            componentType: l.ANSWER,
                            queryKey: "attachment_filename"
                        },
                        [g.SearchTokenTypes.FILTER_BEFORE]: {
                            regex: D(N.default.Messages.SEARCH_FILTER_BEFORE),
                            componentType: l.FILTER,
                            key: v(N.default.Messages.SEARCH_FILTER_BEFORE),
                            getAutocompletions: (e, t, n) => x(e, n, g.SearchTokenTypes.FILTER_BEFORE)
                        },
                        [g.SearchTokenTypes.FILTER_ON]: {
                            regex: D("(".concat(N.default.Messages.SEARCH_FILTER_ON, "|").concat(N.default.Messages.SEARCH_FILTER_DURING, ")")),
                            componentType: l.FILTER,
                            key: v(N.default.Messages.SEARCH_FILTER_DURING),
                            getAutocompletions: (e, t, n) => x(e, n, g.SearchTokenTypes.FILTER_ON)
                        },
                        [g.SearchTokenTypes.FILTER_AFTER]: {
                            regex: D(N.default.Messages.SEARCH_FILTER_AFTER),
                            componentType: l.FILTER,
                            key: v(N.default.Messages.SEARCH_FILTER_AFTER),
                            getAutocompletions: (e, t, n) => x(e, n, g.SearchTokenTypes.FILTER_AFTER)
                        },
                        [g.SearchTokenTypes.ANSWER_BEFORE]: {
                            regex: H,
                            follows: [g.SearchTokenTypes.FILTER_BEFORE],
                            componentType: l.ANSWER,
                            mutable: !0,
                            validator: e => U(e, "before")
                        },
                        [g.SearchTokenTypes.ANSWER_ON]: {
                            regex: H,
                            follows: [g.SearchTokenTypes.FILTER_ON],
                            componentType: l.ANSWER,
                            mutable: !0,
                            validator: e => U(e, "on")
                        },
                        [g.SearchTokenTypes.ANSWER_AFTER]: {
                            regex: H,
                            follows: [g.SearchTokenTypes.FILTER_AFTER],
                            componentType: l.ANSWER,
                            mutable: !0,
                            validator: e => U(e, "after")
                        },
                        [g.SearchTokenTypes.FILTER_IN]: {
                            regex: D(N.default.Messages.SEARCH_FILTER_IN),
                            componentType: l.FILTER,
                            key: v(N.default.Messages.SEARCH_FILTER_IN),
                            validator: q,
                            getAutocompletions(e, t, n) {
                                var r;
                                "#" === e[0] && (e = e.substring(1));
                                let l = R.default.queryChannels({
                                    query: e,
                                    type: E.GUILD_SELECTABLE_CHANNELS_KEY,
                                    guildId: t,
                                    limit: 1 / 0
                                }).concat(R.default.queryChannels({
                                    query: e,
                                    type: E.GUILD_VOCAL_CHANNELS_KEY,
                                    guildId: t,
                                    limit: 1 / 0
                                })).map(e => {
                                    let {
                                        record: t
                                    } = e;
                                    return t
                                }).filter(e => !e.isThread());
                                if ("" === e.trim()) {
                                    let e = f.default.getChannelId(t),
                                        n = l.find(t => t.id === e);
                                    null != n && (l.splice(l.indexOf(n), 1), l.unshift(n))
                                }
                                let a = E.default.getTextChannelNameDisambiguations(t);
                                return s(l).take(n).map(e => {
                                    var t;
                                    return {
                                        text: "".concat(null !== (r = null === (t = a[e.id]) || void 0 === t ? void 0 : t.name) && void 0 !== r ? r : e.name),
                                        channel: e
                                    }
                                }).value()
                            }
                        },
                        [g.SearchTokenTypes.ANSWER_IN]: {
                            regex: /(?:\s*#?([^ ]+))/i,
                            mutable: !0,
                            follows: [g.SearchTokenTypes.FILTER_IN],
                            componentType: l.ANSWER,
                            validator: b,
                            queryKey: "channel_id"
                        },
                        [g.SearchTokenTypes.FILTER_PINNED]: {
                            regex: D(N.default.Messages.SEARCH_FILTER_PINNED),
                            componentType: l.FILTER,
                            key: v(N.default.Messages.SEARCH_FILTER_PINNED),
                            getAutocompletions: () => [{
                                text: "true"
                            }, {
                                text: "false"
                            }]
                        },
                        [g.SearchTokenTypes.ANSWER_PINNED]: {
                            regex: k,
                            componentType: l.ANSWER,
                            follows: [g.SearchTokenTypes.FILTER_PINNED],
                            queryKey: "pinned",
                            validator: e => {
                                let t = e.getMatch(1);
                                return "true" === t ? (e.setData("pinned", !0), !0) : "false" === t && (e.setData("pinned", !1), !0)
                            }
                        }
                    }
                }())
            }

            function X(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(j).length;
                return s(j).keys().filter(e => g.IS_SEARCH_FILTER_TOKEN.test(e)).filter(e => null != j[e].key).map(e => ({
                    token: e,
                    text: j[e].key
                })).filter(t => {
                    let {
                        text: n
                    } = t;
                    return u(e.toLowerCase(), n)
                }).take(t).value()
            }
            var z = j
        },
        200029: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var r = n("689988"),
                l = n("44574"),
                a = n("512395"),
                u = n("305961"),
                o = n("162771"),
                s = n("718517"),
                i = n("884422"),
                c = n("483038"),
                E = n("49111");
            class d extends r.default {
                maybeLoadFeedForGuild(e) {
                    if (null == e) return !1;
                    let t = (0, a.isChannelHighlightsEnabledForGuild)(e);
                    (function(e) {
                        let t = c.default.getLastFetchedMillis(e);
                        if (null != t && Date.now() - t < 3 * s.default.Millis.HOUR || c.default.isLoading(e)) return !1;
                        let n = u.default.getGuild(e);
                        return null != n && !n.hasFeature(E.GuildFeatures.CHANNEL_HIGHLIGHTS_DISABLED)
                    })(e) && (t || (0, l.isGuildUnreadsExperimentEnabled)()) && (0, i.fetchChannelHighlights)(e)
                }
                constructor(...e) {
                    super(...e), this.actions = {
                        CHANNEL_PRELOAD: e => this.handleChannelPreload(e),
                        CHANNEL_SELECT: e => this.handleChannelSelect(e),
                        POST_CONNECTION_OPEN: () => this.handleConnectionOpen()
                    }, this.handleChannelPreload = e => {
                        let {
                            guildId: t
                        } = e;
                        this.maybeLoadFeedForGuild(t)
                    }, this.handleChannelSelect = e => {
                        let {
                            guildId: t
                        } = e;
                        this.maybeLoadFeedForGuild(t)
                    }, this.handleConnectionOpen = () => {
                        let e = o.default.getGuildId();
                        this.maybeLoadFeedForGuild(e)
                    }
                }
            }
            var _ = new d
        },
        578899: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SimpleDeadchatPromptExperiment: function() {
                    return l
                }
            });
            var r = n("862205");
            let l = (0, r.createExperiment)({
                kind: "guild",
                id: "2023-08_deadchat_simple_prompt_guild",
                label: "Simple deadchat prompt",
                defaultConfig: {
                    triggerDeadchat: !1,
                    enableDeadchat: !1
                },
                treatments: [{
                    id: 0,
                    label: "Control",
                    config: {
                        triggerDeadchat: !0,
                        enableDeadchat: !1
                    }
                }, {
                    id: 1,
                    label: "trigger deadchat upon connection open",
                    config: {
                        triggerDeadchat: !0,
                        enableDeadchat: !0
                    }
                }]
            })
        },
        127421: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                searchAllGuildMembers: function() {
                    return c
                }
            });
            var r = n("811022"),
                l = n("872717"),
                a = n("913144"),
                u = n("448993"),
                o = n("828434"),
                s = n("49111");
            let i = new r.default("MemberSafetyElasticSearch");
            async function c(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                if (r > 3) throw Error("Unable to search guild members after max retries");
                let {
                    autoRetry: E = !0,
                    signal: d
                } = n;
                try {
                    var _;
                    let u = await l.default.post({
                        url: s.Endpoints.GUILD_MEMBER_SEARCH(e),
                        body: t,
                        signal: d
                    });
                    if (i.info("JANK searchAllGuildMembers", {
                            response: u
                        }), u.status === o.INDEXING_RESPONSE_CODE) {
                        if (null == u.body.retry_after) throw Error("Indexing response did not include retry_after");
                        if (!E) throw Error("Indexing response received but autoRetry is disabled");
                        return await a.default.dispatch({
                            type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING",
                            guildId: e
                        }), await new Promise(e => setTimeout(e, 1e3 * u.body.retry_after)), c(e, t, n, r + 1)
                    }
                    return {
                        type: o.GuildMemberSearchResponseType.SUCCESSFUL_QUERY,
                        body: {
                            guild_id: (_ = u.body).guild_id,
                            members: _.members,
                            page_result_count: _.page_result_count,
                            total_result_count: _.total_result_count
                        }
                    }
                } catch (t) {
                    let e = new u.APIError(t);
                    return i.info("JANK searchAllGuildMembers error", {
                        error: e
                    }), {
                        type: o.GuildMemberSearchResponseType.ERROR,
                        body: e
                    }
                }
            }
        },
        828434: function(e, t, n) {
            "use strict";
            var r, l;
            n.r(t), n.d(t, {
                INDEXING_RESPONSE_CODE: function() {
                    return a
                },
                GuildMemberSearchResponseType: function() {
                    return r
                }
            });
            let a = 202;
            (l = r || (r = {}))[l.SUCCESSFUL_QUERY = 1] = "SUCCESSFUL_QUERY", l[l.ERROR = 2] = "ERROR"
        },
        225982: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                searchGuildMembers: function() {
                    return s
                }
            });
            var r = n("811022"),
                l = n("913144"),
                a = n("127421"),
                u = n("828434");
            let o = new r.default("MemberSafetyGuildMemberSearchActionCreators");
            async function s(e, t, n) {
                let r = await (0, a.searchAllGuildMembers)(e, t, n);
                if (r.type === u.GuildMemberSearchResponseType.ERROR) throw r.body;
                let {
                    body: s
                } = r;
                o.info("JANK searchGuildMembers success", {
                    body: s
                }), l.default.dispatch({
                    type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS",
                    guildId: e,
                    members: s.members,
                    page_result_count: s.page_result_count,
                    total_result_count: s.total_result_count
                })
            }
        },
        219115: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsMakingRequestV2: function() {
                    return M
                },
                useIsStillIndexingV2: function() {
                    return H
                },
                handleInitializeV2: function() {
                    return k
                },
                handleGuildDeleteV2: function() {
                    return v
                },
                handleSearchStateUpdateV2: function() {
                    return D
                },
                handlePaginationUpdateV2: function() {
                    return O
                },
                handleGuildMemberSearchSuccessV2: function() {
                    return U
                },
                handleGuildMemberSearchStillIndexingV2: function() {
                    return b
                }
            });
            var r, l, a, u, o = n("714617"),
                s = n.n(o),
                i = n("917351"),
                c = n("308503"),
                E = n("811022"),
                d = n("249654"),
                _ = n("449008"),
                f = n("691386"),
                T = n("770115"),
                S = n("490931"),
                h = n("225982"),
                R = n("178406");
            let p = new E.default("MemberSafetySearchManagerV2");

            function A(e) {
                return "guild_".concat(e)
            }

            function g(e) {
                return {
                    requestState: e,
                    abortController: null,
                    lastUpdated: Date.now(),
                    query: null,
                    cursor: null,
                    previousPagination: null
                }
            }(r = a || (a = {}))[r.FAILED = 0] = "FAILED", r[r.UNFETCHED = 1] = "UNFETCHED", r[r.PENDING = 2] = "PENDING", r[r.SUCCEEDED = 3] = "SUCCEEDED", r[r.STILL_INDEXING = 4] = "STILL_INDEXING";
            let N = (0, c.default)(e => ({}));

            function y(e, t) {
                let n = N.getState()[e];
                return null == n && (n = g(a.UNFETCHED)), n = {
                    ...n,
                    ...t
                }, N.setState(t => ({
                    ...t,
                    [e]: n
                })), n
            }

            function I(e) {
                return N.getState()[e]
            }

            function C(e) {
                let t = I(e);
                return null == t && y(e, t = g(a.UNFETCHED)), t
            }

            function m(e) {
                let t = I(e);
                null != t && y(e, {
                    requestState: a.SUCCEEDED,
                    abortController: null,
                    lastUpdated: Date.now()
                })
            }

            function L(e) {
                var t;
                let n = A(e);
                t = n, N.setState(e => {
                    let n = {
                        ...e
                    };
                    return delete n[t], n
                })
            }(l = u || (u = {}))[l.FIRST_PAGE_CHUNK = 0] = "FIRST_PAGE_CHUNK", l[l.CURRENT_SEARCH_CHUNK = 1] = "CURRENT_SEARCH_CHUNK", l[l.NEXT_SEARCH_CHUNK = 2] = "NEXT_SEARCH_CHUNK", l[l.PREVIOUS_SEARCH_CHUNK = 3] = "PREVIOUS_SEARCH_CHUNK";
            async function F(e) {
                var t, n, r, l;
                let o = R.default.getSearchStateByGuildId(e),
                    c = R.default.getPaginationStateByGuildId(e),
                    E = A(e),
                    g = C(E),
                    [N, L] = function(e, t, n) {
                        var r, l, a, o, s, i;
                        let c = function(e, t) {
                                var n;
                                let {
                                    currentPageChunkNumber: r,
                                    previousPageChunkNumber: l,
                                    nextPageChunkNumber: a
                                } = function(e) {
                                    let t = e.pageSize * e.currentPage,
                                        n = Math.floor(t / f.DEFAULT_SEARCH_CHUNK_LIMIT),
                                        r = Math.floor(e.pageSize * (e.currentPage - 1) / f.DEFAULT_SEARCH_CHUNK_LIMIT),
                                        l = Math.floor(e.pageSize * (e.currentPage + 1) / f.DEFAULT_SEARCH_CHUNK_LIMIT);
                                    return {
                                        currentPageChunkNumber: n,
                                        previousPageChunkNumber: r,
                                        nextPageChunkNumber: l
                                    }
                                }(t), {
                                    previousPagination: o
                                } = C(A(e)), s = t.currentPage, i = null !== (n = null == o ? void 0 : o.currentPage) && void 0 !== n ? n : 0, c = R.default.getElasticSearchPaginationByGuildId(e);
                                switch (!0) {
                                    case null == c:
                                    case r === a && 0 === r:
                                        return u.FIRST_PAGE_CHUNK;
                                    case r === a && r === l:
                                        return u.CURRENT_SEARCH_CHUNK;
                                    case i < s && r < a:
                                        return u.NEXT_SEARCH_CHUNK;
                                    case i > s && r >= l:
                                        if (0 < r) return u.PREVIOUS_SEARCH_CHUNK;
                                        return u.FIRST_PAGE_CHUNK;
                                    default:
                                        return u.CURRENT_SEARCH_CHUNK
                                }
                            }(e, n),
                            E = R.default.getElasticSearchPaginationByGuildId(e);
                        switch (c) {
                            case u.FIRST_PAGE_CHUNK: {
                                let t = R.default.getLastCursorTimestamp(e);
                                return [null, {
                                    limit: f.DEFAULT_SEARCH_CHUNK_LIMIT,
                                    after: {
                                        guild_joined_at: t,
                                        user_id: d.default.fromTimestamp(t)
                                    }
                                }]
                            }
                            case u.CURRENT_SEARCH_CHUNK:
                                return [null !== (r = t.cursor) && void 0 !== r ? r : null, {
                                    limit: f.DEFAULT_SEARCH_CHUNK_LIMIT,
                                    after: null !== (l = t.cursor) && void 0 !== l ? l : void 0
                                }];
                            case u.NEXT_SEARCH_CHUNK:
                                return [null !== (a = null == E ? void 0 : E.after) && void 0 !== a ? a : null, {
                                    limit: f.DEFAULT_SEARCH_CHUNK_LIMIT,
                                    after: null !== (o = null == E ? void 0 : E.after) && void 0 !== o ? o : void 0
                                }];
                            case u.PREVIOUS_SEARCH_CHUNK:
                                return [null !== (s = null == E ? void 0 : E.before) && void 0 !== s ? s : null, {
                                    limit: f.DEFAULT_SEARCH_CHUNK_LIMIT,
                                    before: null !== (i = null == E ? void 0 : E.before) && void 0 !== i ? i : void 0
                                }];
                            default:
                                (0, _.assertNever)(c)
                        }
                    }(e, g, c);
                let F = (t = function(e) {
                    var t;
                    let n = {
                            or_query: {},
                            and_query: {}
                        },
                        {
                            query: r
                        } = e;
                    if (null != (t = r) && t.length > 1) {
                        let [e, t] = (0, T.splitQuery)(r);
                        e.length > 0 && (n.and_query.usernames = {
                            or_query: e
                        }), t.length > 0 && (n.and_query.user_id = {
                            or_query: t
                        })
                    }
                    let {
                        requireUnusualDmActivity: l,
                        requireCommunicationDisabled: a
                    } = e, u = {};
                    l && (u.unusual_dm_activity_until = {
                        range: {
                            gte: Date.now() - S.UNUSUAL_DM_COMPARISON_DELTA
                        }
                    }), a && (u.communication_disabled_until = {
                        range: {
                            gte: Date.now()
                        }
                    }), Object.keys(u).length > 0 && (n.or_query.safety_signals = u);
                    let {
                        selectedRoleIds: o
                    } = e;
                    return o.size > 0 && (n.and_query.role_ids = {
                        and_query: Array.from(o)
                    }), n
                }(o), null == (n = L) ? t : {
                    ...t,
                    ...n
                });
                if (function(e, t) {
                        let n = C(e);
                        return s(n.query, t)
                    }(E, F) && (0, i.isEqual)(N, g.cursor)) return;
                let M = function(e, t, n, r) {
                    var l;
                    let u = I(e);
                    return (null == u ? void 0 : u.requestState) === a.PENDING && (null === (l = u.abortController) || void 0 === l || l.abort()), y(e, {
                        requestState: a.PENDING,
                        abortController: new AbortController,
                        lastUpdated: Date.now(),
                        query: t,
                        cursor: n,
                        previousPagination: r
                    })
                }(E, F, N, c);
                try {
                    ;
                    if (p.info("Making member search request", {
                            query: M.query,
                            guildId: e
                        }), null == M.query) throw Error("Query is null");
                    await (0, h.searchGuildMembers)(e, M.query, {
                        signal: null !== (l = null === (r = M.abortController) || void 0 === r ? void 0 : r.signal) && void 0 !== l ? l : void 0
                    })
                } catch (e) {
                    if (-1 === e.code) return;
                    ! function(e) {
                        let t = I(e);
                        null != t && y(e, {
                            requestState: a.FAILED,
                            abortController: null,
                            lastUpdated: Date.now()
                        })
                    }(E);
                    return
                }
                m(E)
            }

            function M(e) {
                return N(t => {
                    var n;
                    let r = A(e);
                    return (null === (n = t[r]) || void 0 === n ? void 0 : n.requestState) === a.PENDING
                })
            }

            function H(e) {
                return N(t => {
                    var n;
                    let r = A(e);
                    return (null === (n = t[r]) || void 0 === n ? void 0 : n.requestState) === a.STILL_INDEXING
                })
            }

            function k(e) {
                let {
                    guildId: t
                } = e;
                L(t), F(t)
            }

            function v(e) {
                let {
                    guild: t
                } = e;
                L(t.id)
            }

            function D(e) {
                let {
                    guildId: t
                } = e;
                F(t)
            }

            function O(e) {
                let {
                    guildId: t
                } = e;
                F(t)
            }

            function U(e) {
                let {
                    guildId: t
                } = e, n = A(t);
                m(n)
            }

            function b(e) {
                let {
                    guildId: t
                } = e, n = A(t);
                y(n, {
                    requestState: a.STILL_INDEXING,
                    abortController: null,
                    lastUpdated: Date.now()
                })
            }
        },
        433487: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("469563"),
                a = n("304983"),
                u = n("75196"),
                o = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, u.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: l,
                            className: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"
                        })
                    })
                }, a.MoreHorizontalIcon)
        },
        746574: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                moveItemFromTo: function() {
                    return s
                },
                default: function() {
                    return i
                }
            });
            var r = n("917351"),
                l = n.n(r),
                a = n("605250");
            let u = new a.default("DragAndDropUtils");

            function o(e) {
                let {
                    oldOrdering: t,
                    newOrdering: n,
                    idGetter: r,
                    existingPositionGetter: l,
                    ascending: a = !0
                } = e, o = n.length;
                if (t.length !== o) return u.warn("Arrays are not of the same length!", t, n), [];
                let s = t.map(r).sort().join(":"),
                    i = n.map(r).sort().join(":");
                if (s !== i) return u.warn("Object IDs in the old ordering and the new ordering are not the same.", s, i), [];
                let c = {};
                for (let e = 0; e < o; e++) c[r(t[e])] = l(t[e]);
                let E = [];
                for (let e = 0; e < o; e++) {
                    let t = r(n[e]),
                        u = c[t],
                        s = a ? e : o - 1 - e;
                    (u !== s || l(n[e]) !== s) && E.push({
                        id: t,
                        position: s
                    })
                }
                return !a && E.reverse(), E
            }

            function s(e, t, n) {
                let r = e[t],
                    l = [...e];
                return l.splice(t, 1), l.splice(n, 0, r), l
            }
            var i = {
                moveItemFromTo: s,
                calculatePositionDeltas: o,
                getPositionUpdates: function(e) {
                    let {
                        objectArray: t,
                        fromPosition: n,
                        toPosition: r,
                        idGetter: a,
                        existingPositionGetter: u,
                        ascending: i = !0
                    } = e;
                    !Array.isArray(t) && (t = l.values(t));
                    let c = s(t, n, r);
                    return o({
                        oldOrdering: t,
                        newOrdering: c,
                        idGetter: a,
                        existingPositionGetter: u,
                        ascending: i
                    })
                }
            }
        },
        751520: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getSearchOptionAnswer: function() {
                    return d
                },
                setIncludeNSFW: function() {
                    return f
                },
                getSearchQueryFromTokens: function() {
                    return T
                },
                getSelectionScope: function() {
                    return S
                },
                getAutocompleteMode: function() {
                    return h
                },
                getFlattenedStringArray: function() {
                    return R
                },
                getTotalResults: function() {
                    return p
                },
                getQueryFromTokens: function() {
                    return A
                },
                tokenizeQuery: function() {
                    return N
                },
                clearTokenCache: function() {
                    return y
                },
                showDatePicker: function() {
                    return I
                },
                filterHasAnswer: function() {
                    return C
                },
                refreshSearchTokens: function() {
                    return m
                }
            });
            var r = n("917351"),
                l = n.n(r),
                a = n("76385"),
                u = n("955513"),
                o = n("247013"),
                s = n("697218"),
                i = n("299039"),
                c = n("49111"),
                E = n("782340");

            function d(e) {
                switch (e) {
                    case c.SearchTokenTypes.FILTER_FROM:
                        return E.default.Messages.SEARCH_ANSWER_FROM;
                    case c.SearchTokenTypes.FILTER_MENTIONS:
                        return E.default.Messages.SEARCH_ANSWER_MENTIONS;
                    case c.SearchTokenTypes.FILTER_HAS:
                        return E.default.Messages.SEARCH_ANSWER_HAS;
                    case c.SearchTokenTypes.FILTER_BEFORE:
                    case c.SearchTokenTypes.FILTER_ON:
                    case c.SearchTokenTypes.FILTER_AFTER:
                        return E.default.Messages.SEARCH_ANSWER_DATE;
                    case c.SearchTokenTypes.FILTER_IN:
                        return E.default.Messages.SEARCH_ANSWER_IN;
                    case c.SearchTokenTypes.FILTER_FILE_TYPE:
                        return E.default.Messages.SEARCH_ANSWER_FILE_TYPE;
                    case c.SearchTokenTypes.FILTER_FILE_NAME:
                        return E.default.Messages.SEARCH_ANSWER_FILE_NAME;
                    case c.SearchTokenTypes.FILTER_PINNED:
                        return E.default.Messages.SEARCH_ANSWER_BOOLEAN
                }
            }
            let _ = {
                [c.SearchTokenTypes.FILTER_BEFORE]: !0,
                [c.SearchTokenTypes.FILTER_AFTER]: !0,
                [c.SearchTokenTypes.FILTER_ON]: !0
            };

            function f(e, t) {
                if (o.default.didAgree(t)) {
                    let t = s.default.getCurrentUser();
                    null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed)
                }
            }

            function T(e) {
                let t = {};
                for (let [n, r] of(e.forEach(e => {
                        let {
                            type: n
                        } = e;
                        if (c.IS_SEARCH_FILTER_TOKEN.test(n)) return;
                        switch (n) {
                            case c.SearchTokenTypes.ANSWER_BEFORE:
                            case c.SearchTokenTypes.ANSWER_ON:
                            case c.SearchTokenTypes.ANSWER_AFTER:
                                let r = e.getData("start"),
                                    l = e.getData("end");
                                r && (t.min_id = i.default.fromTimestamp(r)), l && (t.max_id = i.default.fromTimestamp(l));
                                return
                        }
                        let a = function(e) {
                            let t = u.default[e],
                                n = null != t ? t.queryKey : null;
                            return null == n && (n = "content"), n
                        }(n);
                        null == t[a] && (t[a] = new Set);
                        let o = t[a];
                        switch (n) {
                            case c.SearchTokenTypes.ANSWER_USERNAME_FROM:
                            case c.SearchTokenTypes.ANSWER_USERNAME_MENTIONS:
                                o.add(e.getData("userId"));
                                break;
                            case c.SearchTokenTypes.ANSWER_FILE_TYPE:
                            case c.SearchTokenTypes.ANSWER_FILE_NAME:
                                o.add(e.getMatch(1));
                                break;
                            case c.SearchTokenTypes.ANSWER_IN:
                                o.add(e.getData("channel").id);
                                break;
                            case c.SearchTokenTypes.ANSWER_HAS:
                                o.add(e.getData("has"));
                                break;
                            case c.SearchTokenTypes.ANSWER_PINNED:
                                o.add(e.getData("pinned"));
                                break;
                            default:
                                o.add(e.getFullMatch().trim())
                        }
                    }), Object.entries(t))) r instanceof Set && (t[n] = Array.from(r));
                return t.content && (t.content = t.content.join(" ").trim(), !t.content && delete t.content), t
            }

            function S(e, t, n) {
                let r, l;
                let a = e.find((a, u) => t >= a.start && t <= a.end && n >= a.start && n <= a.end ? (null != e[u + 1] && (l = e[u + 1]), !0) : (r = a, !1));
                return null == a ? null : {
                    previousToken: r,
                    currentToken: a,
                    nextToken: l,
                    focusOffset: t,
                    anchorOffset: n
                }
            }

            function h(e, t) {
                let n;
                e = null != e ? e : {};
                let {
                    currentToken: r,
                    nextToken: l,
                    previousToken: u
                } = e;
                if (0 === t.length) return {
                    type: c.SearchPopoutModes.EMPTY,
                    filter: null,
                    token: null
                };
                if (null == r) return {
                    type: c.SearchPopoutModes.FILTER_ALL,
                    filter: null,
                    token: null
                };
                if (c.IS_SEARCH_FILTER_TOKEN.test(r.type)) {
                    if (null == l || l.type === a.default.NON_TOKEN_TYPE) return {
                        type: c.SearchPopoutModes.FILTER,
                        filter: r.type,
                        token: l
                    };
                    if (null != l && !c.IS_SEARCH_ANSWER_TOKEN.test(l.type)) return {
                        type: c.SearchPopoutModes.FILTER,
                        filter: r.type,
                        token: null
                    }
                }
                return r.type === a.default.NON_TOKEN_TYPE && null != u && c.IS_SEARCH_FILTER_TOKEN.test(u.type) ? {
                    type: c.SearchPopoutModes.FILTER,
                    filter: u.type,
                    token: r
                } : (r.type === a.default.NON_TOKEN_TYPE && (n = r), {
                    type: c.SearchPopoutModes.FILTER_ALL,
                    filter: null,
                    token: n
                })
            }

            function R(e, t) {
                let n = [];
                return l(e).forEach(e => {
                    if (null == e || 0 === e.results.length) return;
                    let r = e.group;
                    n = n.concat(e.results.map(e => {
                        let n = e.text;
                        if (t === c.SearchPopoutModes.FILTER_ALL) {
                            var l;
                            r = null !== (l = e.group) && void 0 !== l ? l : r;
                            let t = u.default[r];
                            (null == t ? void 0 : t.key) != null && (null == t ? void 0 : t.key) !== "" && (n = "".concat(t.key, " ").concat(n))
                        }
                        return n
                    }))
                }), n.filter(e => e)
            }

            function p(e) {
                return e.reduce((e, t) => null == t ? e : t.results.length + e, 0)
            }

            function A(e) {
                return null == e ? "" : e.map(e => e.getFullMatch()).join("")
            }
            let g = new a.default;

            function N(e) {
                return g.tokenize(e)
            }

            function y() {
                return g.clearCache()
            }

            function I(e) {
                return null != e ? _[e] : null
            }

            function C(e, t) {
                let n = c.IS_SEARCH_FILTER_TOKEN.test(e.type);
                return (null != t || !n) && (null == t || !n || !!c.IS_SEARCH_ANSWER_TOKEN.test(t.type)) && !0
            }

            function m() {
                (0, u.refreshSearchTokens)(), g.reset(), l(u.default).forOwn((e, t) => g.addRule({
                    type: t,
                    ...e
                }))
            }
        }
    }
]);
//# sourceMappingURL=25e26463a6646854e034.js.map