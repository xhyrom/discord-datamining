(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["88567"], {
        811513: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("430143");
            n.es(a, t)
        },
        304983: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("541742");
            n.es(a, t)
        },
        76385: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_TOKEN_TYPE: function() {
                    return r
                },
                Token: function() {
                    return o
                },
                default: function() {
                    return E
                }
            }), n("222007"), n("702976"), n("424973");
            let a = /.+/g,
                r = "NON_TOKEN";

            function s(e, t, n) {
                if (null == t) return null;
                for (let a = 0; a < t.length; a++) {
                    let r;
                    let s = t[a],
                        u = l(e.match(s.regex), n);
                    if (null != u) {
                        let {
                            cache: e
                        } = s;
                        if (null != e && null != (r = e.get(u[0])) && ((r = new o(r)).start = u.index), null == r) {
                            if (r = new o(u, s.type), null != s.validator && !s.validator(r)) continue;
                            null != e && !(null == e ? void 0 : e.has(u[0])) && e.set(u[0], r)
                        }
                        return r
                    }
                }
                return null
            }

            function l(e, t) {
                if (null == e) return null;
                let n = [...e];
                return n.index = t, n
            }
            class u {
                reset(e) {
                    this._rules = [], this._followers = {}, this._nonTokenType = null != e ? e : r
                }
                addRule(e) {
                    let t;
                    let {
                        type: n,
                        follows: a,
                        validator: r
                    } = e, {
                        regex: s
                    } = e;
                    if ("^" !== s.source.charAt(0) && (s = new RegExp("^".concat(s.source), s.flags)), null != r && (t = new Map), null == a) {
                        this._rules.push({
                            regex: s,
                            type: n,
                            validator: r,
                            cache: t
                        });
                        return
                    }
                    a.forEach(e => {
                        null == this._followers[e] && (this._followers[e] = []), this._followers[e].push({
                            regex: s,
                            type: n,
                            validator: r,
                            cache: t
                        })
                    })
                }
                tokenize(e) {
                    let t, n = e,
                        r = "",
                        s = 0,
                        u = [];
                    for (; n.length > 0;) {
                        let e = this._getMatch(n, t, s + r.length);
                        null != e ? (null != r && "" !== r && u.push(new o(l(r.match(a), s), this._nonTokenType)), t = e, u.push(e), s += t.length + r.length, n = n.substring(t.length), r = "") : (r += n[0], n = n.substring(1))
                    }
                    return null != r && "" !== r && u.push(new o(l(r.match(a), s), this._nonTokenType)), u
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
                    let a;
                    let r = null != t ? t.type : null;
                    return (null == t ? void 0 : t.end) === n && (a = s(e, this._followers[String(r)], n)), null == a && (a = s(e, this._rules, n)), a
                }
                constructor(e = [], t) {
                    this._rules = [], this._followers = {}, this._nonTokenType = r, this.reset(t), e.forEach(e => this.addRule(e))
                }
            }
            class o {
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
                    if (e instanceof o) this.match = [...e.match], this.start = e.start, this.type = e.type, null != e._data && (this._data = e._data);
                    else if (null != e) {
                        var n;
                        this.match = [...e], this.start = "string" == typeof e ? 0 : null !== (n = e.index) && void 0 !== n ? n : 0, this.type = t
                    } else this.match = [], this.start = 0, this.type = t
                }
            }
            u.NON_TOKEN_TYPE = r, u.Token = o;
            var E = u
        },
        955513: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRandomDateShortcut: function() {
                    return P
                },
                ComponentTypes: function() {
                    return a
                },
                refreshSearchTokens: function() {
                    return j
                },
                getFilterAutocompletions: function() {
                    return z
                },
                default: function() {
                    return q
                }
            }), n("222007"), n("843762");
            var a, r, s = n("448105"),
                l = n.n(s),
                u = n("917351"),
                o = n.n(u),
                E = n("866227"),
                i = n.n(E),
                c = n("923959"),
                T = n("27618"),
                _ = n("744983"),
                f = n("18494"),
                d = n("162771"),
                R = n("102985"),
                S = n("697218"),
                h = n("25292"),
                p = n("655518"),
                A = n("158998"),
                I = n("49111"),
                N = n("782340");

            function g() {
                return new Set(i.months().map(e => e.toLowerCase()))
            }

            function y() {
                return new Set(i.weekdays().map(e => e.toLowerCase()))
            }

            function M() {
                let e = new Date().getFullYear();
                return new Set(o.range(2015, e + 1).map(e => e.toString()))
            }

            function F(e, t) {
                return [e, e.clone().add(1, t)]
            }

            function C(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = i().startOf(e).add(t, e);
                return F(n, e)
            }

            function L(e, t, n) {
                let a = i(e, t).local();
                return F(a, n)
            }

            function m() {
                return {
                    [N.default.Messages.SEARCH_SHORTCUT_TODAY]: () => C("day"),
                    [N.default.Messages.SEARCH_SHORTCUT_YESTERDAY]: () => C("day", -1),
                    [N.default.Messages.SEARCH_SHORTCUT_WEEK]: () => C("week"),
                    [N.default.Messages.SEARCH_SHORTCUT_MONTH]: () => C("month"),
                    [N.default.Messages.SEARCH_SHORTCUT_YEAR]: () => C("year")
                }
            }
            let k = RegExp("(?:\\s*(".concat("([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})", "|").concat("([0-9]{4})-([0-9]{1,2})", "|").concat("\\d{4}", "|").concat("([^\\d\\s]+)", "))"), "i"),
                H = RegExp("\\s*(true|false)", "i");

            function O(e) {
                return "".concat(e, ":")
            }

            function v(e) {
                return RegExp(O(e), "i")
            }

            function w(e) {
                let t;
                let n = e.getMatch(1),
                    a = e => null != e ? null == e ? void 0 : e.id : null;
                return null != (t = I.ID_REGEX.test(n) ? n : n === I.ME ? a(S.default.getCurrentUser()) : null != e.getMatch(4) ? a(S.default.findByTag(e.getMatch(4))) : a(S.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData("userId", t), !0)
            }

            function D(e, t) {
                let n, a;
                let r = e.getFullMatch().trim().toLowerCase(),
                    s = m()[r];
                null != s ? [n, a] = s() : g().has(r) ? [n, a] = L(r, "MMMM", "month") : y().has(r) ? [n, a] = L(r, "dddd", "day") : M().has(r) ? [n, a] = L(r, "YYYY", "year") : [n, a] = L(r, I.SEARCH_DATE_FORMAT, "day");
                let l = n.isValid() && a.isValid();
                return !!l && ("before" === t ? (a = n, n = null) : "after" === t && (n = a, a = null), e.setData("start", n), e.setData("end", a), !0)
            }

            function x(e) {
                let t = e.getMatch(1),
                    n = d.default.getGuildId(),
                    a = c.default.getChannels(n)[c.GUILD_SELECTABLE_CHANNELS_KEY].concat(c.default.getChannels(n)[c.GUILD_VOCAL_CHANNELS_KEY]),
                    r = c.default.getTextChannelNameDisambiguations(n),
                    s = o.chain(a).map(e => {
                        let {
                            channel: t
                        } = e;
                        return t
                    }).find(e => {
                        var n, a;
                        return t === (null !== (a = null === (n = r[e.id]) || void 0 === n ? void 0 : n.name) && void 0 !== a ? a : e.name)
                    }).value();
                return null != s && (e.setData("channel", s), !0)
            }

            function Y(e) {
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

            function W() {
                return [...Array.from(g()), ...Array.from(y()), ...Array.from(M()), ...Object.keys(m())]
            }

            function P() {
                return o.sample(W())
            }

            function U(e, t, n) {
                return b(e, t, W()).map(e => ({
                    ...e,
                    group: n,
                    key: "".concat(n, "-").concat(e.text)
                }))
            }

            function b(e, t, n) {
                let a = e.toLocaleLowerCase();
                return o(n).filter(e => l(a, e.toLocaleLowerCase())).take(t).map(e => ({
                    text: e
                })).value()
            }

            function B(e, t) {
                let n, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    s = _.default.getSearchType(t);
                e = e.split("#")[0];
                let l = {
                    query: e,
                    limit: a,
                    request: r
                };
                switch (s) {
                    case I.SearchTypes.GUILD:
                        n = h.default.queryGuildUsers({
                            ...l,
                            guildId: t
                        });
                        break;
                    case I.SearchTypes.CHANNEL:
                        n = h.default.queryChannelUsers({
                            ...l,
                            channelId: t
                        });
                        break;
                    case I.SearchTypes.DMS:
                        n = h.default.queryUsers(e, a, !0, r, () => !0);
                        break;
                    default:
                        return []
                }
                return n.filter(e => {
                    let {
                        record: t
                    } = e;
                    return !T.default.isBlocked(t.id)
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

            function K() {
                return _.default.getSearchType() === I.SearchTypes.GUILD
            }

            function G() {
                return !R.default.hidePersonalInformation
            }
            let V = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
            (r = a || (a = {})).FILTER = "FILTER", r.ANSWER = "ANSWER";
            let Z = {};

            function j() {
                Object.assign(Z, function() {
                    let e = [N.default.Messages.SEARCH_ANSWER_HAS_LINK, N.default.Messages.SEARCH_ANSWER_HAS_EMBED, N.default.Messages.SEARCH_ANSWER_HAS_ATTACHMENT, N.default.Messages.SEARCH_ANSWER_HAS_VIDEO, N.default.Messages.SEARCH_ANSWER_HAS_IMAGE, N.default.Messages.SEARCH_ANSWER_HAS_SOUND, N.default.Messages.SEARCH_ANSWER_HAS_STICKER];
                    return {
                        [I.SearchTokenTypes.FILTER_FROM]: {
                            regex: v(N.default.Messages.SEARCH_FILTER_FROM),
                            componentType: "FILTER",
                            key: O(N.default.Messages.SEARCH_FILTER_FROM),
                            plainText: N.default.Messages.SEARCH_FILTER_FROM,
                            validator: G,
                            getAutocompletions: B
                        },
                        [I.SearchTokenTypes.ANSWER_USERNAME_FROM]: {
                            follows: [I.SearchTokenTypes.FILTER_FROM],
                            regex: V,
                            validator: w,
                            mutable: !0,
                            componentType: "ANSWER",
                            queryKey: "author_id"
                        },
                        [I.SearchTokenTypes.FILTER_MENTIONS]: {
                            regex: v(N.default.Messages.SEARCH_FILTER_MENTIONS),
                            componentType: "FILTER",
                            key: O(N.default.Messages.SEARCH_FILTER_MENTIONS),
                            plainText: N.default.Messages.SEARCH_FILTER_MENTIONS,
                            validator: G,
                            getAutocompletions: B
                        },
                        [I.SearchTokenTypes.ANSWER_USERNAME_MENTIONS]: {
                            follows: [I.SearchTokenTypes.FILTER_MENTIONS],
                            regex: V,
                            validator: w,
                            mutable: !0,
                            componentType: "ANSWER",
                            queryKey: "mentions"
                        },
                        [I.SearchTokenTypes.FILTER_HAS]: {
                            regex: v(N.default.Messages.SEARCH_FILTER_HAS),
                            componentType: "FILTER",
                            key: O(N.default.Messages.SEARCH_FILTER_HAS),
                            plainText: N.default.Messages.SEARCH_FILTER_HAS,
                            getAutocompletions: (t, n, a) => b(t, a, e)
                        },
                        [I.SearchTokenTypes.ANSWER_HAS]: {
                            regex: RegExp("(?:\\s*-?(".concat(e.map(e => p.default.escape(e)).join("|"), "))"), "i"),
                            follows: [I.SearchTokenTypes.FILTER_HAS],
                            validator: Y,
                            componentType: "ANSWER",
                            queryKey: "has"
                        },
                        [I.SearchTokenTypes.FILTER_FILE_TYPE]: {
                            regex: v(N.default.Messages.SEARCH_FILTER_FILE_TYPE),
                            key: O(N.default.Messages.SEARCH_FILTER_FILE_TYPE),
                            plainText: N.default.Messages.SEARCH_FILTER_FILE_TYPE,
                            componentType: "FILTER"
                        },
                        [I.SearchTokenTypes.ANSWER_FILE_TYPE]: {
                            regex: /(?:\s*([^\s]+))/,
                            follows: [I.SearchTokenTypes.FILTER_FILE_TYPE],
                            mutable: !0,
                            componentType: "ANSWER",
                            queryKey: "attachment_extensions"
                        },
                        [I.SearchTokenTypes.FILTER_FILE_NAME]: {
                            regex: v(N.default.Messages.SEARCH_FILTER_FILE_NAME),
                            key: O(N.default.Messages.SEARCH_FILTER_FILE_NAME),
                            plainText: N.default.Messages.SEARCH_FILTER_FILE_NAME,
                            componentType: "FILTER"
                        },
                        [I.SearchTokenTypes.ANSWER_FILE_NAME]: {
                            regex: /(?:\s*([^\s]+)(?=\s))/,
                            follows: [I.SearchTokenTypes.FILTER_FILE_NAME],
                            mutable: !0,
                            componentType: "ANSWER",
                            queryKey: "attachment_filename"
                        },
                        [I.SearchTokenTypes.FILTER_BEFORE]: {
                            regex: v(N.default.Messages.SEARCH_FILTER_BEFORE),
                            componentType: "FILTER",
                            key: O(N.default.Messages.SEARCH_FILTER_BEFORE),
                            plainText: N.default.Messages.SEARCH_FILTER_BEFORE,
                            getAutocompletions: (e, t, n) => U(e, n, I.SearchTokenTypes.FILTER_BEFORE)
                        },
                        [I.SearchTokenTypes.FILTER_ON]: {
                            regex: v("(".concat(N.default.Messages.SEARCH_FILTER_ON, "|").concat(N.default.Messages.SEARCH_FILTER_DURING, ")")),
                            componentType: "FILTER",
                            key: O(N.default.Messages.SEARCH_FILTER_DURING),
                            plainText: N.default.Messages.SEARCH_FILTER_DURING,
                            getAutocompletions: (e, t, n) => U(e, n, I.SearchTokenTypes.FILTER_ON)
                        },
                        [I.SearchTokenTypes.FILTER_AFTER]: {
                            regex: v(N.default.Messages.SEARCH_FILTER_AFTER),
                            componentType: "FILTER",
                            key: O(N.default.Messages.SEARCH_FILTER_AFTER),
                            plainText: N.default.Messages.SEARCH_FILTER_AFTER,
                            getAutocompletions: (e, t, n) => U(e, n, I.SearchTokenTypes.FILTER_AFTER)
                        },
                        [I.SearchTokenTypes.ANSWER_BEFORE]: {
                            regex: k,
                            follows: [I.SearchTokenTypes.FILTER_BEFORE],
                            componentType: "ANSWER",
                            mutable: !0,
                            validator: e => D(e, "before")
                        },
                        [I.SearchTokenTypes.ANSWER_ON]: {
                            regex: k,
                            follows: [I.SearchTokenTypes.FILTER_ON],
                            componentType: "ANSWER",
                            mutable: !0,
                            validator: e => D(e, "on")
                        },
                        [I.SearchTokenTypes.ANSWER_AFTER]: {
                            regex: k,
                            follows: [I.SearchTokenTypes.FILTER_AFTER],
                            componentType: "ANSWER",
                            mutable: !0,
                            validator: e => D(e, "after")
                        },
                        [I.SearchTokenTypes.FILTER_IN]: {
                            regex: v(N.default.Messages.SEARCH_FILTER_IN),
                            componentType: "FILTER",
                            key: O(N.default.Messages.SEARCH_FILTER_IN),
                            plainText: N.default.Messages.SEARCH_FILTER_IN,
                            validator: K,
                            getAutocompletions(e, t, n) {
                                "#" === e[0] && (e = e.substring(1));
                                let a = h.default.queryChannels({
                                    query: e,
                                    type: c.GUILD_SELECTABLE_CHANNELS_KEY,
                                    guildId: t,
                                    limit: 1 / 0
                                }).concat(h.default.queryChannels({
                                    query: e,
                                    type: c.GUILD_VOCAL_CHANNELS_KEY,
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
                                        n = a.find(t => t.id === e);
                                    null != n && (a.splice(a.indexOf(n), 1), a.unshift(n))
                                }
                                let r = c.default.getTextChannelNameDisambiguations(t);
                                return o(a).take(n).map(e => {
                                    var t, n;
                                    return {
                                        text: "".concat(null !== (n = null === (t = r[e.id]) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : e.name),
                                        channel: e
                                    }
                                }).value()
                            }
                        },
                        [I.SearchTokenTypes.ANSWER_IN]: {
                            regex: /(?:\s*#?([^ ]+))/i,
                            mutable: !0,
                            follows: [I.SearchTokenTypes.FILTER_IN],
                            componentType: "ANSWER",
                            validator: x,
                            queryKey: "channel_id"
                        },
                        [I.SearchTokenTypes.FILTER_PINNED]: {
                            regex: v(N.default.Messages.SEARCH_FILTER_PINNED),
                            componentType: "FILTER",
                            key: O(N.default.Messages.SEARCH_FILTER_PINNED),
                            plainText: N.default.Messages.SEARCH_FILTER_PINNED,
                            getAutocompletions: () => [{
                                text: "true"
                            }, {
                                text: "false"
                            }]
                        },
                        [I.SearchTokenTypes.ANSWER_PINNED]: {
                            regex: H,
                            componentType: "ANSWER",
                            follows: [I.SearchTokenTypes.FILTER_PINNED],
                            queryKey: "pinned",
                            validator: e => {
                                let t = e.getMatch(1);
                                return "true" === t ? (e.setData("pinned", !0), !0) : "false" === t && (e.setData("pinned", !1), !0)
                            }
                        }
                    }
                }())
            }

            function z(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(Z).length;
                return o(Z).keys().filter(e => I.IS_SEARCH_FILTER_TOKEN.test(e)).filter(e => null != Z[e].key).map(e => ({
                    token: e,
                    text: Z[e].key
                })).filter(t => {
                    let {
                        text: n
                    } = t;
                    return l(e.toLowerCase(), n)
                }).take(t).value()
            }
            var q = Z
        },
        835257: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                registerFetchedSupplementals: function() {
                    return I
                },
                JoinSourceType: function() {
                    return r
                },
                getJoinSourceTypeLabel: function() {
                    return N
                },
                getIntegrationLabel: function() {
                    return g
                },
                useGetIntegrationIconString: function() {
                    return y
                },
                fetchMemberSupplemental: function() {
                    return F
                }
            }), n("424973");
            var a, r, s, l, u, o, E = n("872717"),
                i = n("819855"),
                c = n("841098"),
                T = n("376556"),
                _ = n("572943"),
                f = n("49111"),
                d = n("782340");
            let R = {};

            function S(e, t) {
                return e + t
            }

            function h(e, t) {
                return t.map(t => e + t)
            }

            function p(e) {
                return e.split("-")[1]
            }(l = a || (a = {}))[l.FAILED = 0] = "FAILED", l[l.UNFETCHED = 1] = "UNFETCHED", l[l.PENDING = 2] = "PENDING", l[l.SUCCEEDED = 3] = "SUCCEEDED", l[l.FAILED_NO_RETRY = 4] = "FAILED_NO_RETRY";

            function A(e, t) {
                e.forEach(e => {
                    R[e] = t
                })
            }

            function I(e, t) {
                t.forEach(t => (function(e, t, n) {
                    R[e + t] = 3
                })(e, t, 3))
            }(u = r || (r = {}))[u.UNSPECIFIED = 0] = "UNSPECIFIED", u[u.BOT = 1] = "BOT", u[u.INTEGRATION = 2] = "INTEGRATION", u[u.DISCOVERY = 3] = "DISCOVERY", u[u.HUB = 4] = "HUB", u[u.INVITE = 5] = "INVITE", u[u.VANITY_URL = 6] = "VANITY_URL";
            let N = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                switch (e) {
                    case 1:
                        return d.default.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT;
                    case 2:
                        return d.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION;
                    case 3:
                        return d.default.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY;
                    case 4:
                        return d.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB;
                    case 5:
                        return d.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INVITE;
                    case 6:
                        if (null != t) return d.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL_LABEL_NAME.format({
                            vanityUrl: t
                        });
                        return d.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL;
                    default:
                        return d.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN
                }
            };
            (o = s || (s = {})).DISCORD = "discord", o.TWITCH = "twitch", o.YOUTUBE = "youtube", o.GUILD_SUBSCRIPTION = "guild_subscription";
            let g = e => {
                    switch (e) {
                        case "twitch":
                            return d.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_TWITCH;
                        case "youtube":
                            return d.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_YOUTUBE;
                        default:
                            return d.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION
                    }
                },
                y = e => {
                    let t = T.default.get((0, _.useLegacyPlatformType)(e)),
                        n = (0, c.default)();
                    return null != t && ["twitch", "youtube"].includes(e) ? "url('".concat((0, i.isThemeDark)(n) ? t.icon.darkSVG : t.icon.lightSVG, "')") : null
                };

            function M(e) {
                return {
                    userId: e.user_id,
                    sourceInviteCode: e.source_invite_code,
                    joinSourceType: e.join_source_type,
                    inviterId: e.inviter_id,
                    integrationType: e.integration_type
                }
            }
            async function F(e, t) {
                let n = h(e, t),
                    a = n.filter(e => R[e] <= 1).map(p);
                if (0 === a.length) return [];
                A(n, 2);
                try {
                    let t = await E.default.post({
                        url: f.Endpoints.MEMBER_SAFETY_SUPPLEMENTAL(e),
                        body: {
                            user_ids: a
                        }
                    });
                    if (!Array.isArray(t.body)) return A(n, 0), [];
                    let r = t.body.map(M),
                        s = [];
                    r.forEach(e => {
                        let {
                            userId: t
                        } = e;
                        return s.push(t)
                    });
                    let l = h(e, s),
                        u = a.filter(e => !s.includes(e)),
                        o = h(e, u);
                    return A(l, 3), A(o, 0), r
                } catch (e) {
                    A(n, 0)
                }
                return []
            }
        },
        654017: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isSpamSupported: function() {
                    return s
                },
                isSpammer: function() {
                    return l
                },
                isSpam: function() {
                    return u
                }
            });
            var a = n("697218"),
                r = n("49111");

            function s(e) {
                return void 0 !== e && e.type !== r.ChannelTypes.DM
            }

            function l(e) {
                var t, n;
                return null !== (n = null === (t = a.default.getUser(e)) || void 0 === t ? void 0 : t.hasFlag(r.UserFlags.SPAMMER)) && void 0 !== n && n
            }

            function u(e) {
                return l(e.author.id)
            }
        },
        433487: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("469563"),
                s = n("304983"),
                l = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: s,
                        ...u
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, l.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            fill: r,
                            className: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"
                        })
                    })
                }, s.MoreHorizontalIcon, void 0, {
                    size: 24
                })
        },
        155207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("469563"),
                s = n("811513"),
                l = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: s,
                        ...u
                    } = e;
                    return (0, a.jsxs)("svg", {
                        ...(0, l.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, a.jsx)("path", {
                            className: s,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, a.jsx)("path", {
                            className: s,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, a.jsx)("path", {
                            className: s,
                            fill: r,
                            d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                        }), (0, a.jsx)("path", {
                            className: s,
                            fill: r,
                            d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                        })]
                    })
                }, s.GroupIcon, void 0, {
                    size: 24
                })
        },
        713573: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                l = n("77078"),
                u = n("254686"),
                o = n("851706");
            let E = Object.freeze({
                    SIZE_10: o.size10,
                    SIZE_12: o.size12,
                    SIZE_14: o.size14,
                    SIZE_16: o.size16,
                    SIZE_20: o.size20,
                    SIZE_24: o.size24,
                    SIZE_32: o.size32
                }),
                i = e => {
                    let {
                        id: t,
                        muted: n = !1,
                        className: r = u.wrapper,
                        size: o = E.SIZE_14,
                        selectable: i = !1,
                        children: c,
                        color: T,
                        onClick: _,
                        onContextMenu: f,
                        style: d,
                        title: R,
                        uppercase: S
                    } = e;
                    return (0, a.jsx)(l.H, {
                        role: null != _ ? "button" : void 0,
                        onClick: _,
                        onContextMenu: f,
                        id: t,
                        className: s(r, {
                            [u.base]: !0,
                            [o]: !0,
                            [u.selectable]: i,
                            [u.muted]: n,
                            [u.uppercase]: S
                        }),
                        title: R,
                        style: null != T ? {
                            ...d,
                            color: T
                        } : d,
                        children: c
                    })
                };
            i.Sizes = E;
            var c = i
        },
        751520: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getSearchOptionAnswer: function() {
                    return T
                },
                setIncludeNSFW: function() {
                    return f
                },
                getSearchQueryFromTokens: function() {
                    return d
                },
                getSelectionScope: function() {
                    return R
                },
                getAutocompleteMode: function() {
                    return S
                },
                getFlattenedStringArray: function() {
                    return h
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
                    return g
                },
                showDatePicker: function() {
                    return y
                },
                filterHasAnswer: function() {
                    return M
                },
                refreshSearchTokens: function() {
                    return F
                }
            }), n("222007"), n("808653");
            var a = n("917351"),
                r = n.n(a),
                s = n("76385"),
                l = n("955513"),
                u = n("247013"),
                o = n("697218"),
                E = n("299039"),
                i = n("49111"),
                c = n("782340");

            function T(e) {
                switch (e) {
                    case i.SearchTokenTypes.FILTER_FROM:
                        return c.default.Messages.SEARCH_ANSWER_FROM;
                    case i.SearchTokenTypes.FILTER_MENTIONS:
                        return c.default.Messages.SEARCH_ANSWER_MENTIONS;
                    case i.SearchTokenTypes.FILTER_HAS:
                        return c.default.Messages.SEARCH_ANSWER_HAS;
                    case i.SearchTokenTypes.FILTER_BEFORE:
                    case i.SearchTokenTypes.FILTER_ON:
                    case i.SearchTokenTypes.FILTER_AFTER:
                        return c.default.Messages.SEARCH_ANSWER_DATE;
                    case i.SearchTokenTypes.FILTER_IN:
                        return c.default.Messages.SEARCH_ANSWER_IN;
                    case i.SearchTokenTypes.FILTER_FILE_TYPE:
                        return c.default.Messages.SEARCH_ANSWER_FILE_TYPE;
                    case i.SearchTokenTypes.FILTER_FILE_NAME:
                        return c.default.Messages.SEARCH_ANSWER_FILE_NAME;
                    case i.SearchTokenTypes.FILTER_PINNED:
                        return c.default.Messages.SEARCH_ANSWER_BOOLEAN
                }
            }
            let _ = {
                [i.SearchTokenTypes.FILTER_BEFORE]: !0,
                [i.SearchTokenTypes.FILTER_AFTER]: !0,
                [i.SearchTokenTypes.FILTER_ON]: !0
            };

            function f(e, t) {
                if (u.default.didAgree(t)) {
                    let t = o.default.getCurrentUser();
                    null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed)
                }
            }

            function d(e) {
                let t = {};
                for (let [n, a] of(e.forEach(e => {
                        let {
                            type: n
                        } = e;
                        if (i.IS_SEARCH_FILTER_TOKEN.test(n)) return;
                        switch (n) {
                            case i.SearchTokenTypes.ANSWER_BEFORE:
                            case i.SearchTokenTypes.ANSWER_ON:
                            case i.SearchTokenTypes.ANSWER_AFTER:
                                let a = e.getData("start"),
                                    r = e.getData("end");
                                a && (t.min_id = E.default.fromTimestamp(a)), r && (t.max_id = E.default.fromTimestamp(r));
                                return
                        }
                        let s = function(e) {
                            let t = l.default[e],
                                n = null != t ? t.queryKey : null;
                            return null == n && (n = "content"), n
                        }(n);
                        null == t[s] && (t[s] = new Set);
                        let u = t[s];
                        switch (n) {
                            case i.SearchTokenTypes.ANSWER_USERNAME_FROM:
                            case i.SearchTokenTypes.ANSWER_USERNAME_MENTIONS:
                                u.add(e.getData("userId"));
                                break;
                            case i.SearchTokenTypes.ANSWER_FILE_TYPE:
                            case i.SearchTokenTypes.ANSWER_FILE_NAME:
                                u.add(e.getMatch(1));
                                break;
                            case i.SearchTokenTypes.ANSWER_IN:
                                u.add(e.getData("channel").id);
                                break;
                            case i.SearchTokenTypes.ANSWER_HAS:
                                u.add(e.getData("has"));
                                break;
                            case i.SearchTokenTypes.ANSWER_PINNED:
                                u.add(e.getData("pinned"));
                                break;
                            default:
                                u.add(e.getFullMatch().trim())
                        }
                    }), Object.entries(t))) a instanceof Set && (t[n] = Array.from(a));
                return t.content && (t.content = t.content.join(" ").trim(), !t.content && delete t.content), t
            }

            function R(e, t, n) {
                let a, r;
                let s = e.find((s, l) => t >= s.start && t <= s.end && n >= s.start && n <= s.end ? (null != e[l + 1] && (r = e[l + 1]), !0) : (a = s, !1));
                return null == s ? null : {
                    previousToken: a,
                    currentToken: s,
                    nextToken: r,
                    focusOffset: t,
                    anchorOffset: n
                }
            }

            function S(e, t) {
                let n;
                e = null != e ? e : {};
                let {
                    currentToken: a,
                    nextToken: r,
                    previousToken: l
                } = e;
                if (0 === t.length) return {
                    type: i.SearchPopoutModes.EMPTY,
                    filter: null,
                    token: null
                };
                if (null == a) return {
                    type: i.SearchPopoutModes.FILTER_ALL,
                    filter: null,
                    token: null
                };
                if (i.IS_SEARCH_FILTER_TOKEN.test(a.type)) {
                    if (null == r || r.type === s.default.NON_TOKEN_TYPE) return {
                        type: i.SearchPopoutModes.FILTER,
                        filter: a.type,
                        token: r
                    };
                    if (null != r && !i.IS_SEARCH_ANSWER_TOKEN.test(r.type)) return {
                        type: i.SearchPopoutModes.FILTER,
                        filter: a.type,
                        token: null
                    }
                }
                return a.type === s.default.NON_TOKEN_TYPE && null != l && i.IS_SEARCH_FILTER_TOKEN.test(l.type) ? {
                    type: i.SearchPopoutModes.FILTER,
                    filter: l.type,
                    token: a
                } : (a.type === s.default.NON_TOKEN_TYPE && (n = a), {
                    type: i.SearchPopoutModes.FILTER_ALL,
                    filter: null,
                    token: n
                })
            }

            function h(e, t) {
                let n = [];
                return r(e).forEach(e => {
                    if (null == e || 0 === e.results.length) return;
                    let a = e.group;
                    n = n.concat(e.results.map(e => {
                        let n = e.text;
                        if (t === i.SearchPopoutModes.FILTER_ALL) {
                            var r;
                            a = null !== (r = e.group) && void 0 !== r ? r : a;
                            let t = l.default[a];
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
            let I = new s.default;

            function N(e) {
                return I.tokenize(e)
            }

            function g() {
                return I.clearCache()
            }

            function y(e) {
                return null != e ? _[e] : null
            }

            function M(e, t) {
                let n = i.IS_SEARCH_FILTER_TOKEN.test(e.type);
                return (null != t || !n) && (null == t || !n || !!i.IS_SEARCH_ANSWER_TOKEN.test(t.type)) && !0
            }

            function F() {
                (0, l.refreshSearchTokens)(), I.reset(), r(l.default).forOwn((e, t) => I.addRule({
                    type: t,
                    ...e
                }))
            }
        },
        430143: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GroupIcon: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("669491"),
                s = n("82169");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M14.5 8a3 3 0 1 0-2.7-4.3c-.2.4.06.86.44 1.12a5 5 0 0 1 2.14 3.08c.01.06.06.1.12.1ZM18.44 17.27c.15.43.54.73 1 .73h1.06c.83 0 1.5-.67 1.5-1.5a7.5 7.5 0 0 0-6.5-7.43c-.55-.08-.99.38-1.1.92-.06.3-.15.6-.26.87-.23.58-.05 1.3.47 1.63a9.53 9.53 0 0 1 3.83 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0c0 .83-.67 1.5-1.5 1.5a.2.2 0 0 1-.2-.16c-.2-.96-.56-1.87-.88-2.54-.1-.23-.42-.15-.42.1v2.1a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.32.67-.67 1.58-.88 2.54a.2.2 0 0 1-.2.16A1.5 1.5 0 0 1 2 20.5Z",
                        className: u
                    })
                })
            }
        },
        541742: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MoreHorizontalIcon: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("669491"),
                s = n("82169");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=88567.6e84dfaddfb3291ef55d.js.map