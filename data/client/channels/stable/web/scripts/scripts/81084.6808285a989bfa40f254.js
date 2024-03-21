(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["81084"], {
        811513: function(e, t, n) {
            "use strict";
            n.r(t);
            var l = n("430143");
            n.es(l, t)
        },
        304983: function(e, t, n) {
            "use strict";
            n.r(t);
            var l = n("541742");
            n.es(l, t)
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
                    return i
                }
            }), n("222007"), n("702976"), n("424973");
            let l = /.+/g,
                r = "NON_TOKEN";

            function a(e, t, n) {
                if (null == t) return null;
                for (let l = 0; l < t.length; l++) {
                    let r;
                    let a = t[l],
                        s = u(e.match(a.regex), n);
                    if (null != s) {
                        let {
                            cache: e
                        } = a;
                        if (null != e && null != (r = e.get(s[0])) && ((r = new o(r)).start = s.index), null == r) {
                            if (r = new o(s, a.type), null != a.validator && !a.validator(r)) continue;
                            null != e && !(null == e ? void 0 : e.has(s[0])) && e.set(s[0], r)
                        }
                        return r
                    }
                }
                return null
            }

            function u(e, t) {
                if (null == e) return null;
                let n = [...e];
                return n.index = t, n
            }
            class s {
                reset(e) {
                    this._rules = [], this._followers = {}, this._nonTokenType = null != e ? e : r
                }
                addRule(e) {
                    let t;
                    let {
                        type: n,
                        follows: l,
                        validator: r
                    } = e, {
                        regex: a
                    } = e;
                    if ("^" !== a.source.charAt(0) && (a = new RegExp("^".concat(a.source), a.flags)), null != r && (t = new Map), null == l) {
                        this._rules.push({
                            regex: a,
                            type: n,
                            validator: r,
                            cache: t
                        });
                        return
                    }
                    l.forEach(e => {
                        null == this._followers[e] && (this._followers[e] = []), this._followers[e].push({
                            regex: a,
                            type: n,
                            validator: r,
                            cache: t
                        })
                    })
                }
                tokenize(e) {
                    let t, n = e,
                        r = "",
                        a = 0,
                        s = [];
                    for (; n.length > 0;) {
                        let e = this._getMatch(n, t, a + r.length);
                        null != e ? (null != r && "" !== r && s.push(new o(u(r.match(l), a), this._nonTokenType)), t = e, s.push(e), a += t.length + r.length, n = n.substring(t.length), r = "") : (r += n[0], n = n.substring(1))
                    }
                    return null != r && "" !== r && s.push(new o(u(r.match(l), a), this._nonTokenType)), s
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
                    let l;
                    let r = null != t ? t.type : null;
                    return (null == t ? void 0 : t.end) === n && (l = a(e, this._followers[String(r)], n)), null == l && (l = a(e, this._rules, n)), l
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
            s.NON_TOKEN_TYPE = r, s.Token = o;
            var i = s
        },
        955513: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRandomDateShortcut: function() {
                    return P
                },
                ComponentTypes: function() {
                    return l
                },
                refreshSearchTokens: function() {
                    return Z
                },
                getFilterAutocompletions: function() {
                    return z
                },
                default: function() {
                    return q
                }
            }), n("222007"), n("843762");
            var l, r, a = n("448105"),
                u = n.n(a),
                s = n("917351"),
                o = n.n(s),
                i = n("866227"),
                c = n.n(i),
                E = n("923959"),
                d = n("27618"),
                _ = n("744983"),
                T = n("18494"),
                f = n("162771"),
                S = n("102985"),
                h = n("697218"),
                R = n("25292"),
                p = n("655518"),
                A = n("158998"),
                I = n("49111"),
                g = n("782340");

            function N() {
                return new Set(c.months().map(e => e.toLowerCase()))
            }

            function M() {
                return new Set(c.weekdays().map(e => e.toLowerCase()))
            }

            function y() {
                let e = new Date().getFullYear();
                return new Set(o.range(2015, e + 1).map(e => e.toString()))
            }

            function m(e, t) {
                return [e, e.clone().add(1, t)]
            }

            function C(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = c().startOf(e).add(t, e);
                return m(n, e)
            }

            function L(e, t, n) {
                let l = c(e, t).local();
                return m(l, n)
            }

            function F() {
                return {
                    [g.default.Messages.SEARCH_SHORTCUT_TODAY]: () => C("day"),
                    [g.default.Messages.SEARCH_SHORTCUT_YESTERDAY]: () => C("day", -1),
                    [g.default.Messages.SEARCH_SHORTCUT_WEEK]: () => C("week"),
                    [g.default.Messages.SEARCH_SHORTCUT_MONTH]: () => C("month"),
                    [g.default.Messages.SEARCH_SHORTCUT_YEAR]: () => C("year")
                }
            }
            let v = RegExp("(?:\\s*(".concat("([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})", "|").concat("([0-9]{4})-([0-9]{1,2})", "|").concat("\\d{4}", "|").concat("([^\\d\\s]+)", "))"), "i"),
                H = RegExp("\\s*(true|false)", "i");

            function O(e) {
                return "".concat(e, ":")
            }

            function k(e) {
                return RegExp(O(e), "i")
            }

            function w(e) {
                let t;
                let n = e.getMatch(1),
                    l = e => null != e ? null == e ? void 0 : e.id : null;
                return null != (t = I.ID_REGEX.test(n) ? n : n === I.ME ? l(h.default.getCurrentUser()) : null != e.getMatch(4) ? l(h.default.findByTag(e.getMatch(4))) : l(h.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData("userId", t), !0)
            }

            function D(e, t) {
                let n, l;
                let r = e.getFullMatch().trim().toLowerCase(),
                    a = F()[r];
                null != a ? [n, l] = a() : N().has(r) ? [n, l] = L(r, "MMMM", "month") : M().has(r) ? [n, l] = L(r, "dddd", "day") : y().has(r) ? [n, l] = L(r, "YYYY", "year") : [n, l] = L(r, I.SEARCH_DATE_FORMAT, "day");
                let u = n.isValid() && l.isValid();
                return !!u && ("before" === t ? (l = n, n = null) : "after" === t && (n = l, l = null), e.setData("start", n), e.setData("end", l), !0)
            }

            function U(e) {
                let t = e.getMatch(1),
                    n = f.default.getGuildId(),
                    l = E.default.getChannels(n)[E.GUILD_SELECTABLE_CHANNELS_KEY].concat(E.default.getChannels(n)[E.GUILD_VOCAL_CHANNELS_KEY]),
                    r = E.default.getTextChannelNameDisambiguations(n),
                    a = o.chain(l).map(e => {
                        let {
                            channel: t
                        } = e;
                        return t
                    }).find(e => {
                        var n, l;
                        return t === (null !== (l = null === (n = r[e.id]) || void 0 === n ? void 0 : n.name) && void 0 !== l ? l : e.name)
                    }).value();
                return null != a && (e.setData("channel", a), !0)
            }

            function W(e) {
                let t = {
                    [g.default.Messages.SEARCH_ANSWER_HAS_LINK]: "link",
                    [g.default.Messages.SEARCH_ANSWER_HAS_EMBED]: "embed",
                    [g.default.Messages.SEARCH_ANSWER_HAS_ATTACHMENT]: "file",
                    [g.default.Messages.SEARCH_ANSWER_HAS_VIDEO]: "video",
                    [g.default.Messages.SEARCH_ANSWER_HAS_IMAGE]: "image",
                    [g.default.Messages.SEARCH_ANSWER_HAS_SOUND]: "sound",
                    [g.default.Messages.SEARCH_ANSWER_HAS_STICKER]: "sticker"
                } [e.getMatch(1)];
                return null != t && "" !== t && (e.setData("has", t), !0)
            }

            function x() {
                return [...Array.from(N()), ...Array.from(M()), ...Array.from(y()), ...Object.keys(F())]
            }

            function P() {
                return o.sample(x())
            }

            function b(e, t, n) {
                return G(e, t, x()).map(e => ({
                    ...e,
                    group: n,
                    key: "".concat(n, "-").concat(e.text)
                }))
            }

            function G(e, t, n) {
                let l = e.toLocaleLowerCase();
                return o(n).filter(e => u(l, e.toLocaleLowerCase())).take(t).map(e => ({
                    text: e
                })).value()
            }

            function Y(e, t) {
                let n, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    a = _.default.getSearchType(t);
                e = e.split("#")[0];
                let u = {
                    query: e,
                    limit: l,
                    request: r
                };
                switch (a) {
                    case I.SearchTypes.GUILD:
                        n = R.default.queryGuildUsers({
                            ...u,
                            guildId: t
                        });
                        break;
                    case I.SearchTypes.CHANNEL:
                        n = R.default.queryChannelUsers({
                            ...u,
                            channelId: t
                        });
                        break;
                    case I.SearchTypes.DMS:
                        n = R.default.queryUsers(e, l, !0, r, () => !0);
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

            function B() {
                return _.default.getSearchType() === I.SearchTypes.GUILD
            }

            function j() {
                return !S.default.hidePersonalInformation
            }
            let V = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
            (r = l || (l = {})).FILTER = "FILTER", r.ANSWER = "ANSWER";
            let K = {};

            function Z() {
                Object.assign(K, function() {
                    let e = [g.default.Messages.SEARCH_ANSWER_HAS_LINK, g.default.Messages.SEARCH_ANSWER_HAS_EMBED, g.default.Messages.SEARCH_ANSWER_HAS_ATTACHMENT, g.default.Messages.SEARCH_ANSWER_HAS_VIDEO, g.default.Messages.SEARCH_ANSWER_HAS_IMAGE, g.default.Messages.SEARCH_ANSWER_HAS_SOUND, g.default.Messages.SEARCH_ANSWER_HAS_STICKER];
                    return {
                        [I.SearchTokenTypes.FILTER_FROM]: {
                            regex: k(g.default.Messages.SEARCH_FILTER_FROM),
                            componentType: "FILTER",
                            key: O(g.default.Messages.SEARCH_FILTER_FROM),
                            plainText: g.default.Messages.SEARCH_FILTER_FROM,
                            validator: j,
                            getAutocompletions: Y
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
                            regex: k(g.default.Messages.SEARCH_FILTER_MENTIONS),
                            componentType: "FILTER",
                            key: O(g.default.Messages.SEARCH_FILTER_MENTIONS),
                            plainText: g.default.Messages.SEARCH_FILTER_MENTIONS,
                            validator: j,
                            getAutocompletions: Y
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
                            regex: k(g.default.Messages.SEARCH_FILTER_HAS),
                            componentType: "FILTER",
                            key: O(g.default.Messages.SEARCH_FILTER_HAS),
                            plainText: g.default.Messages.SEARCH_FILTER_HAS,
                            getAutocompletions: (t, n, l) => G(t, l, e)
                        },
                        [I.SearchTokenTypes.ANSWER_HAS]: {
                            regex: RegExp("(?:\\s*-?(".concat(e.map(e => p.default.escape(e)).join("|"), "))"), "i"),
                            follows: [I.SearchTokenTypes.FILTER_HAS],
                            validator: W,
                            componentType: "ANSWER",
                            queryKey: "has"
                        },
                        [I.SearchTokenTypes.FILTER_FILE_TYPE]: {
                            regex: k(g.default.Messages.SEARCH_FILTER_FILE_TYPE),
                            key: O(g.default.Messages.SEARCH_FILTER_FILE_TYPE),
                            plainText: g.default.Messages.SEARCH_FILTER_FILE_TYPE,
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
                            regex: k(g.default.Messages.SEARCH_FILTER_FILE_NAME),
                            key: O(g.default.Messages.SEARCH_FILTER_FILE_NAME),
                            plainText: g.default.Messages.SEARCH_FILTER_FILE_NAME,
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
                            regex: k(g.default.Messages.SEARCH_FILTER_BEFORE),
                            componentType: "FILTER",
                            key: O(g.default.Messages.SEARCH_FILTER_BEFORE),
                            plainText: g.default.Messages.SEARCH_FILTER_BEFORE,
                            getAutocompletions: (e, t, n) => b(e, n, I.SearchTokenTypes.FILTER_BEFORE)
                        },
                        [I.SearchTokenTypes.FILTER_ON]: {
                            regex: k("(".concat(g.default.Messages.SEARCH_FILTER_ON, "|").concat(g.default.Messages.SEARCH_FILTER_DURING, ")")),
                            componentType: "FILTER",
                            key: O(g.default.Messages.SEARCH_FILTER_DURING),
                            plainText: g.default.Messages.SEARCH_FILTER_DURING,
                            getAutocompletions: (e, t, n) => b(e, n, I.SearchTokenTypes.FILTER_ON)
                        },
                        [I.SearchTokenTypes.FILTER_AFTER]: {
                            regex: k(g.default.Messages.SEARCH_FILTER_AFTER),
                            componentType: "FILTER",
                            key: O(g.default.Messages.SEARCH_FILTER_AFTER),
                            plainText: g.default.Messages.SEARCH_FILTER_AFTER,
                            getAutocompletions: (e, t, n) => b(e, n, I.SearchTokenTypes.FILTER_AFTER)
                        },
                        [I.SearchTokenTypes.ANSWER_BEFORE]: {
                            regex: v,
                            follows: [I.SearchTokenTypes.FILTER_BEFORE],
                            componentType: "ANSWER",
                            mutable: !0,
                            validator: e => D(e, "before")
                        },
                        [I.SearchTokenTypes.ANSWER_ON]: {
                            regex: v,
                            follows: [I.SearchTokenTypes.FILTER_ON],
                            componentType: "ANSWER",
                            mutable: !0,
                            validator: e => D(e, "on")
                        },
                        [I.SearchTokenTypes.ANSWER_AFTER]: {
                            regex: v,
                            follows: [I.SearchTokenTypes.FILTER_AFTER],
                            componentType: "ANSWER",
                            mutable: !0,
                            validator: e => D(e, "after")
                        },
                        [I.SearchTokenTypes.FILTER_IN]: {
                            regex: k(g.default.Messages.SEARCH_FILTER_IN),
                            componentType: "FILTER",
                            key: O(g.default.Messages.SEARCH_FILTER_IN),
                            plainText: g.default.Messages.SEARCH_FILTER_IN,
                            validator: B,
                            getAutocompletions(e, t, n) {
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
                                    let e = T.default.getChannelId(t),
                                        n = l.find(t => t.id === e);
                                    null != n && (l.splice(l.indexOf(n), 1), l.unshift(n))
                                }
                                let r = E.default.getTextChannelNameDisambiguations(t);
                                return o(l).take(n).map(e => {
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
                            validator: U,
                            queryKey: "channel_id"
                        },
                        [I.SearchTokenTypes.FILTER_PINNED]: {
                            regex: k(g.default.Messages.SEARCH_FILTER_PINNED),
                            componentType: "FILTER",
                            key: O(g.default.Messages.SEARCH_FILTER_PINNED),
                            plainText: g.default.Messages.SEARCH_FILTER_PINNED,
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
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(K).length;
                return o(K).keys().filter(e => I.IS_SEARCH_FILTER_TOKEN.test(e)).filter(e => null != K[e].key).map(e => ({
                    token: e,
                    text: K[e].key
                })).filter(t => {
                    let {
                        text: n
                    } = t;
                    return u(e.toLowerCase(), n)
                }).take(t).value()
            }
            var q = K
        },
        578899: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SimpleDeadchatPromptExperiment: function() {
                    return r
                }
            });
            var l = n("862205");
            let r = (0, l.createExperiment)({
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
                    return g
                },
                getIntegrationLabel: function() {
                    return N
                },
                useGetIntegrationIconString: function() {
                    return M
                },
                fetchMemberSupplemental: function() {
                    return m
                }
            }), n("424973");
            var l, r, a, u, s, o, i = n("872717"),
                c = n("819855"),
                E = n("841098"),
                d = n("376556"),
                _ = n("572943"),
                T = n("49111"),
                f = n("782340");
            let S = {};

            function h(e, t) {
                return e + t
            }

            function R(e, t) {
                return t.map(t => e + t)
            }

            function p(e) {
                return e.split("-")[1]
            }(u = l || (l = {}))[u.FAILED = 0] = "FAILED", u[u.UNFETCHED = 1] = "UNFETCHED", u[u.PENDING = 2] = "PENDING", u[u.SUCCEEDED = 3] = "SUCCEEDED", u[u.FAILED_NO_RETRY = 4] = "FAILED_NO_RETRY";

            function A(e, t) {
                e.forEach(e => {
                    S[e] = t
                })
            }

            function I(e, t) {
                t.forEach(t => (function(e, t, n) {
                    S[e + t] = 3
                })(e, t, 3))
            }(s = r || (r = {}))[s.UNSPECIFIED = 0] = "UNSPECIFIED", s[s.BOT = 1] = "BOT", s[s.INTEGRATION = 2] = "INTEGRATION", s[s.DISCOVERY = 3] = "DISCOVERY", s[s.HUB = 4] = "HUB", s[s.INVITE = 5] = "INVITE", s[s.VANITY_URL = 6] = "VANITY_URL";
            let g = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                switch (e) {
                    case 1:
                        return f.default.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT;
                    case 2:
                        return f.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION;
                    case 3:
                        return f.default.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY;
                    case 4:
                        return f.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB;
                    case 5:
                        return f.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INVITE;
                    case 6:
                        if (null != t && !n) return f.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL_LABEL_NAME.format({
                            vanityUrl: t
                        });
                        return f.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL;
                    default:
                        return f.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN
                }
            };
            (o = a || (a = {})).DISCORD = "discord", o.TWITCH = "twitch", o.YOUTUBE = "youtube", o.GUILD_SUBSCRIPTION = "guild_subscription";
            let N = e => {
                    switch (e) {
                        case "twitch":
                            return f.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_TWITCH;
                        case "youtube":
                            return f.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_YOUTUBE;
                        default:
                            return f.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION
                    }
                },
                M = e => {
                    let t = d.default.get((0, _.useLegacyPlatformType)(e)),
                        n = (0, E.default)();
                    return null != t && ["twitch", "youtube"].includes(e) ? "url('".concat((0, c.isThemeDark)(n) ? t.icon.darkSVG : t.icon.lightSVG, "')") : null
                };

            function y(e) {
                return {
                    userId: e.user_id,
                    sourceInviteCode: e.source_invite_code,
                    joinSourceType: e.join_source_type,
                    inviterId: e.inviter_id,
                    integrationType: e.integration_type
                }
            }
            async function m(e, t) {
                let n = R(e, t),
                    l = n.filter(e => S[e] <= 1).map(p);
                if (0 === l.length) return [];
                A(n, 2);
                try {
                    let t = await i.HTTP.post({
                        url: T.Endpoints.MEMBER_SAFETY_SUPPLEMENTAL(e),
                        body: {
                            user_ids: l
                        }
                    });
                    if (!Array.isArray(t.body)) return A(n, 0), [];
                    let r = t.body.map(y),
                        a = [];
                    r.forEach(e => {
                        let {
                            userId: t
                        } = e;
                        return a.push(t)
                    });
                    let u = R(e, a),
                        s = l.filter(e => !a.includes(e)),
                        o = R(e, s);
                    return A(u, 3), A(o, 0), r
                } catch (e) {
                    A(n, 0)
                }
                return []
            }
        },
        347895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchGuildHomeSettings: function() {
                    return h
                },
                fetchNewMemberActions: function() {
                    return R
                },
                selectHomeResourceChannel: function() {
                    return p
                },
                selectNewMemberActionChannel: function() {
                    return A
                },
                completeNewMemberAction: function() {
                    return I
                },
                getBlockForChannelDeletion: function() {
                    return g
                }
            }), n("222007"), n("808653");
            var l = n("872717"),
                r = n("913144"),
                a = n("819689"),
                u = n("115718"),
                s = n("38654"),
                o = n("144491"),
                i = n("42203"),
                c = n("599110"),
                E = n("299039"),
                d = n("698882"),
                _ = n("129092"),
                T = n("675305"),
                f = n("290886"),
                S = n("49111");
            let h = async e => {
                r.default.dispatch({
                    type: "GUILD_HOME_SETTINGS_FETCH_START",
                    guildId: e
                });
                try {
                    let t = await l.HTTP.get({
                            url: S.Endpoints.GUILD_HOME_SETTINGS(e),
                            oldFormErrors: !0
                        }),
                        n = (0, _.settingsFromServer)(t.body);
                    return r.default.dispatch({
                        type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS",
                        guildId: e,
                        homeSettings: n
                    }), n
                } catch (t) {
                    r.default.dispatch({
                        type: "GUILD_HOME_SETTINGS_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, R = async e => {
                if (!s.default.isFullServerPreview(e)) {
                    r.default.dispatch({
                        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START",
                        guildId: e
                    });
                    try {
                        let t = await l.HTTP.get({
                                url: S.Endpoints.GUILD_MEMBER_ACTIONS(e),
                                oldFormErrors: !0
                            }),
                            n = (0, _.actionsFromServer)(t.body);
                        return r.default.dispatch({
                            type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS",
                            guildId: e,
                            memberActions: n
                        }), n
                    } catch (t) {
                        r.default.dispatch({
                            type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL",
                            guildId: e
                        })
                    }
                }
            }, p = function(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                if (r.default.dispatch({
                        type: "SELECT_HOME_RESOURCE_CHANNEL",
                        guildId: e,
                        channelId: t
                    }), null == t) return;
                let l = i.default.getChannel(t),
                    _ = d.default.getResourceForChannel(e, t);
                null != e && !s.default.isFullServerPreview(e) && null != l && null != _ && c.default.track(S.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
                    guild_id: e,
                    channel_id: l.id,
                    server_guide_channel_type: "resource",
                    channel_action_type: -1
                }), n && (0, o.transitionToChannel)(t), a.default.jumpToMessage({
                    channelId: t,
                    messageId: E.default.castChannelIdAsMessageId(t),
                    flash: !1,
                    jumpType: u.JumpTypes.INSTANT
                })
            }, A = (e, t) => {
                r.default.dispatch({
                    type: "SELECT_NEW_MEMBER_ACTION_CHANNEL",
                    guildId: e,
                    channelId: t
                });
                let n = i.default.getChannel(t),
                    l = d.default.getActionForChannel(e, t);
                null != e && !s.default.isFullServerPreview(e) && null != n && null != l && c.default.track(S.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
                    guild_id: e,
                    channel_id: n.id,
                    server_guide_channel_type: "member action",
                    channel_action_type: l.actionType
                }), (0, o.transitionToChannel)(t)
            }, I = (e, t) => {
                if (r.default.dispatch({
                        type: "COMPLETE_NEW_MEMBER_ACTION",
                        guildId: e,
                        channelId: t
                    }), s.default.isFullServerPreview(e)) return;
                let n = i.default.getChannel(t),
                    a = d.default.getActionForChannel(e, t);
                if (null != n && null != a) {
                    var u, o;
                    let t = E.default.keys(null !== (u = T.default.getCompletedActions(e)) && void 0 !== u ? u : {}),
                        l = null !== (o = d.default.getNewMemberActions(e)) && void 0 !== o ? o : [];
                    c.default.track(S.AnalyticEvents.SERVER_GUIDE_ACTION_COMPLETED, {
                        guild_id: n.guild_id,
                        channel_id: n.id,
                        channel_action_type: a.actionType,
                        has_completed_all: l.reduce((e, n) => e && t.includes(n.channelId), !0)
                    })
                }
                l.HTTP.post({
                    url: S.Endpoints.GUILD_MEMBER_ACTION_UPDATE(e, t)
                })
            };
            async function g(e, t) {
                if (null == e) return !1;
                let n = (0, f.canSeeOnboardingHome)(e);
                if (!n) return !1;
                let l = d.default.getSettings(e);
                return l === d.NO_SETTINGS && (await h(e), l = d.default.getSettings(e)), l !== d.NO_SETTINGS && null != l && (null != l.newMemberActions && null != l.newMemberActions.find(e => e.channelId === t) ? "todo" : null != l.resourceChannels && null != l.resourceChannels.find(e => e.channelId === t) && "resource")
            }
        },
        129092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                WELCOME_MESSAGE_MIN_LENGTH: function() {
                    return i
                },
                WELCOME_MESSAGE_MAX_LENGTH: function() {
                    return c
                },
                NEW_MEMBER_ACTION_TITLE_MIN_LENGTH: function() {
                    return E
                },
                NEW_MEMBER_ACTION_TITLE_MAX_LENGTH: function() {
                    return d
                },
                NEW_MEMBER_ACTION_MAX: function() {
                    return _
                },
                RESOURCE_CHANNEL_TITLE_MIN_LENGTH: function() {
                    return T
                },
                RESOURCE_CHANNEL_TITLE_MAX_LENGTH: function() {
                    return f
                },
                RESOURCE_CHANNEL_DESCRIPTION_MAX_LENGTH: function() {
                    return S
                },
                RESOURCE_CHANNEL_MAX: function() {
                    return h
                },
                NewMemberActionTypes: function() {
                    return r
                },
                newMemberActionFromServer: function() {
                    return R
                },
                resourceChannelFromServer: function() {
                    return p
                },
                settingsFromServer: function() {
                    return A
                },
                settingsToServer: function() {
                    return I
                },
                actionsFromServer: function() {
                    return g
                },
                isWelcomeMessageEmpty: function() {
                    return N
                },
                isSettingsEmpty: function() {
                    return M
                },
                isSettingsValid: function() {
                    return y
                },
                isChannelValidForResourceChannel: function() {
                    return m
                },
                isChannelValidForNewMemberAction: function() {
                    return C
                }
            });
            var l, r, a = n("42203"),
                u = n("449008"),
                s = n("991170"),
                o = n("49111");
            let i = 7,
                c = 300,
                E = 7,
                d = 60,
                _ = 5,
                T = 1,
                f = 30,
                S = 200,
                h = 7;

            function R(e) {
                var t;
                return {
                    channelId: e.channel_id,
                    actionType: e.action_type,
                    title: e.title,
                    description: e.description,
                    emoji: null == e.emoji ? null : {
                        id: e.emoji.id,
                        name: e.emoji.name,
                        animated: e.emoji.animated
                    },
                    icon: null !== (t = e.icon) && void 0 !== t ? t : null
                }
            }

            function p(e) {
                var t, n;
                return {
                    channelId: e.channel_id,
                    title: e.title,
                    description: null !== (t = e.description) && void 0 !== t ? t : "",
                    emoji: null == e.emoji ? null : {
                        id: e.emoji.id,
                        name: e.emoji.name,
                        animated: e.emoji.animated
                    },
                    icon: null !== (n = e.icon) && void 0 !== n ? n : null
                }
            }

            function A(e) {
                if (null == e) return null;
                let {
                    welcome_message: t,
                    new_member_actions: n,
                    resource_channels: l,
                    enabled: r
                } = e, s = {
                    authorIds: t.author_ids,
                    message: t.message
                }, o = n.filter(e => (0, u.isNotNullish)(a.default.getChannel(e.channel_id))).map(R), i = l.filter(e => (0, u.isNotNullish)(a.default.getChannel(e.channel_id))).map(p);
                return {
                    welcomeMessage: s,
                    newMemberActions: o,
                    resourceChannels: i,
                    enabled: r
                }
            }

            function I(e, t) {
                var n, l;
                if (null == t) return null;
                let {
                    welcomeMessage: r,
                    newMemberActions: s,
                    resourceChannels: o,
                    enabled: i
                } = t, c = {
                    author_ids: null !== (n = null == r ? void 0 : r.authorIds) && void 0 !== n ? n : [],
                    message: null !== (l = null == r ? void 0 : r.message) && void 0 !== l ? l : ""
                }, E = (null != s ? s : []).filter(e => (0, u.isNotNullish)(a.default.getChannel(e.channelId))).map(e => {
                    var t, n, l, r, a, u, s;
                    return {
                        channel_id: e.channelId,
                        action_type: e.actionType,
                        title: e.title,
                        description: e.description,
                        emoji: {
                            id: null !== (r = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== r ? r : void 0,
                            name: null !== (a = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== a ? a : void 0,
                            animated: null !== (u = null === (l = e.emoji) || void 0 === l ? void 0 : l.animated) && void 0 !== u ? u : void 0
                        },
                        icon: null !== (s = e.icon) && void 0 !== s ? s : void 0
                    }
                }), d = (null != o ? o : []).filter(e => (0, u.isNotNullish)(a.default.getChannel(e.channelId))).map(e => {
                    var t, n, l, r, a, u, s;
                    return {
                        channel_id: e.channelId,
                        title: e.title,
                        description: e.description,
                        emoji: {
                            id: null !== (r = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== r ? r : void 0,
                            name: null !== (a = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== a ? a : void 0,
                            animated: null !== (u = null === (l = e.emoji) || void 0 === l ? void 0 : l.animated) && void 0 !== u ? u : void 0
                        },
                        icon: null !== (s = e.icon) && void 0 !== s ? s : void 0
                    }
                });
                return {
                    guild_id: e,
                    welcome_message: c,
                    new_member_actions: E,
                    resource_channels: d,
                    enabled: i
                }
            }(l = r || (r = {}))[l.VIEW = 0] = "VIEW", l[l.CHAT = 1] = "CHAT";
            let g = e => {
                if (null == e) return null;
                let t = {};
                for (let n in e.channel_actions) t[n] = e.channel_actions[n].completed;
                return t
            };

            function N(e) {
                return null == e || (null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)) && !0
            }

            function M(e) {
                return null == e || !!N(e.welcomeMessage) && (null == e.newMemberActions || !(e.newMemberActions.length > 0)) && (null == e.resourceChannels || !(e.resourceChannels.length > 0)) && !0
            }

            function y(e) {
                var t, n;
                return null != e && (!!M(e) || (null === (t = e.welcomeMessage) || void 0 === t ? void 0 : t.message) != null && !(e.welcomeMessage.message.length < i) && (null === (n = e.welcomeMessage) || void 0 === n ? void 0 : n.authorIds) != null && 0 !== e.welcomeMessage.authorIds.length && null != e.newMemberActions && !(e.newMemberActions.length < 3) && !0)
            }

            function m(e) {
                return e.type === o.ChannelTypes.GUILD_TEXT && !s.canEveryoneRole(o.Permissions.SEND_MESSAGES, e) && s.canEveryoneRole(o.Permissions.VIEW_CHANNEL, e)
            }

            function C(e) {
                switch (e.type) {
                    case o.ChannelTypes.GUILD_TEXT:
                    case o.ChannelTypes.GUILD_ANNOUNCEMENT:
                    case o.ChannelTypes.GUILD_FORUM:
                    case o.ChannelTypes.GUILD_MEDIA:
                        return s.canEveryoneRole(o.Permissions.VIEW_CHANNEL, e);
                    default:
                        return !1
                }
            }
        },
        654017: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isSpamSupported: function() {
                    return a
                },
                isSpammer: function() {
                    return u
                },
                isSpam: function() {
                    return s
                }
            });
            var l = n("697218"),
                r = n("49111");

            function a(e) {
                return void 0 !== e && e.type !== r.ChannelTypes.DM
            }

            function u(e) {
                var t, n;
                return null !== (n = null === (t = l.default.getUser(e)) || void 0 === t ? void 0 : t.hasFlag(r.UserFlags.SPAMMER)) && void 0 !== n && n
            }

            function s(e) {
                return u(e.author.id)
            }
        },
        433487: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                a = n("304983"),
                u = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, u.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: r,
                            className: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"
                        })
                    })
                }, a.MoreHorizontalIcon, void 0, {
                    size: 24
                })
        },
        155207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                a = n("811513"),
                u = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...s
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, u.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            className: a,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, l.jsx)("path", {
                            className: a,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, l.jsx)("path", {
                            className: a,
                            fill: r,
                            d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                        }), (0, l.jsx)("path", {
                            className: a,
                            fill: r,
                            d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                        })]
                    })
                }, a.GroupIcon, void 0, {
                    size: 24
                })
        },
        713573: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("414456"),
                a = n.n(r),
                u = n("77078"),
                s = n("451914"),
                o = n("548122");
            let i = Object.freeze({
                    SIZE_10: o.size10,
                    SIZE_12: o.size12,
                    SIZE_14: o.size14,
                    SIZE_16: o.size16,
                    SIZE_20: o.size20,
                    SIZE_24: o.size24,
                    SIZE_32: o.size32
                }),
                c = e => {
                    let {
                        id: t,
                        muted: n = !1,
                        className: r = s.wrapper,
                        size: o = i.SIZE_14,
                        selectable: c = !1,
                        children: E,
                        color: d,
                        onClick: _,
                        onContextMenu: T,
                        style: f,
                        title: S,
                        uppercase: h
                    } = e;
                    return (0, l.jsx)(u.H, {
                        role: null != _ ? "button" : void 0,
                        onClick: _,
                        onContextMenu: T,
                        id: t,
                        className: a(r, {
                            [s.base]: !0,
                            [o]: !0,
                            [s.selectable]: c,
                            [s.muted]: n,
                            [s.uppercase]: h
                        }),
                        title: S,
                        style: null != d ? {
                            ...f,
                            color: d
                        } : f,
                        children: E
                    })
                };
            c.Sizes = i;
            var E = c
        },
        746574: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                moveItemFromTo: function() {
                    return o
                },
                default: function() {
                    return i
                }
            }), n("424973"), n("222007");
            var l = n("917351"),
                r = n.n(l),
                a = n("605250");
            let u = new a.default("DragAndDropUtils");

            function s(e) {
                let {
                    oldOrdering: t,
                    newOrdering: n,
                    idGetter: l,
                    existingPositionGetter: r,
                    ascending: a = !0
                } = e, s = n.length;
                if (t.length !== s) return u.warn("Arrays are not of the same length!", t, n), [];
                let o = t.map(l).sort().join(":"),
                    i = n.map(l).sort().join(":");
                if (o !== i) return u.warn("Object IDs in the old ordering and the new ordering are not the same.", o, i), [];
                let c = {};
                for (let e = 0; e < s; e++) c[l(t[e])] = r(t[e]);
                let E = [];
                for (let e = 0; e < s; e++) {
                    let t = l(n[e]),
                        u = c[t],
                        o = a ? e : s - 1 - e;
                    (u !== o || r(n[e]) !== o) && E.push({
                        id: t,
                        position: o
                    })
                }
                return !a && E.reverse(), E
            }

            function o(e, t, n) {
                let l = e[t],
                    r = [...e];
                return r.splice(t, 1), r.splice(n, 0, l), r
            }
            var i = {
                moveItemFromTo: o,
                calculatePositionDeltas: s,
                getPositionUpdates: function(e) {
                    let {
                        objectArray: t,
                        fromPosition: n,
                        toPosition: l,
                        idGetter: a,
                        existingPositionGetter: u,
                        ascending: i = !0
                    } = e;
                    !Array.isArray(t) && (t = r.values(t));
                    let c = o(t, n, l);
                    return s({
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
                    return T
                },
                getSearchQueryFromTokens: function() {
                    return f
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
                    return g
                },
                clearTokenCache: function() {
                    return N
                },
                showDatePicker: function() {
                    return M
                },
                filterHasAnswer: function() {
                    return y
                },
                refreshSearchTokens: function() {
                    return m
                }
            }), n("222007"), n("808653");
            var l = n("917351"),
                r = n.n(l),
                a = n("76385"),
                u = n("955513"),
                s = n("247013"),
                o = n("697218"),
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

            function T(e, t) {
                if (s.default.didAgree(t)) {
                    let t = o.default.getCurrentUser();
                    null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed)
                }
            }

            function f(e) {
                let t = {};
                for (let [n, l] of(e.forEach(e => {
                        let {
                            type: n
                        } = e;
                        if (c.IS_SEARCH_FILTER_TOKEN.test(n)) return;
                        switch (n) {
                            case c.SearchTokenTypes.ANSWER_BEFORE:
                            case c.SearchTokenTypes.ANSWER_ON:
                            case c.SearchTokenTypes.ANSWER_AFTER:
                                let l = e.getData("start"),
                                    r = e.getData("end");
                                l && (t.min_id = i.default.fromTimestamp(l)), r && (t.max_id = i.default.fromTimestamp(r));
                                return
                        }
                        let a = function(e) {
                            let t = u.default[e],
                                n = null != t ? t.queryKey : null;
                            return null == n && (n = "content"), n
                        }(n);
                        null == t[a] && (t[a] = new Set);
                        let s = t[a];
                        switch (n) {
                            case c.SearchTokenTypes.ANSWER_USERNAME_FROM:
                            case c.SearchTokenTypes.ANSWER_USERNAME_MENTIONS:
                                s.add(e.getData("userId"));
                                break;
                            case c.SearchTokenTypes.ANSWER_FILE_TYPE:
                            case c.SearchTokenTypes.ANSWER_FILE_NAME:
                                s.add(e.getMatch(1));
                                break;
                            case c.SearchTokenTypes.ANSWER_IN:
                                s.add(e.getData("channel").id);
                                break;
                            case c.SearchTokenTypes.ANSWER_HAS:
                                s.add(e.getData("has"));
                                break;
                            case c.SearchTokenTypes.ANSWER_PINNED:
                                s.add(e.getData("pinned"));
                                break;
                            default:
                                s.add(e.getFullMatch().trim())
                        }
                    }), Object.entries(t))) l instanceof Set && (t[n] = Array.from(l));
                return t.content && (t.content = t.content.join(" ").trim(), !t.content && delete t.content), t
            }

            function S(e, t, n) {
                let l, r;
                let a = e.find((a, u) => t >= a.start && t <= a.end && n >= a.start && n <= a.end ? (null != e[u + 1] && (r = e[u + 1]), !0) : (l = a, !1));
                return null == a ? null : {
                    previousToken: l,
                    currentToken: a,
                    nextToken: r,
                    focusOffset: t,
                    anchorOffset: n
                }
            }

            function h(e, t) {
                let n;
                e = null != e ? e : {};
                let {
                    currentToken: l,
                    nextToken: r,
                    previousToken: u
                } = e;
                if (0 === t.length) return {
                    type: c.SearchPopoutModes.EMPTY,
                    filter: null,
                    token: null
                };
                if (null == l) return {
                    type: c.SearchPopoutModes.FILTER_ALL,
                    filter: null,
                    token: null
                };
                if (c.IS_SEARCH_FILTER_TOKEN.test(l.type)) {
                    if (null == r || r.type === a.default.NON_TOKEN_TYPE) return {
                        type: c.SearchPopoutModes.FILTER,
                        filter: l.type,
                        token: r
                    };
                    if (null != r && !c.IS_SEARCH_ANSWER_TOKEN.test(r.type)) return {
                        type: c.SearchPopoutModes.FILTER,
                        filter: l.type,
                        token: null
                    }
                }
                return l.type === a.default.NON_TOKEN_TYPE && null != u && c.IS_SEARCH_FILTER_TOKEN.test(u.type) ? {
                    type: c.SearchPopoutModes.FILTER,
                    filter: u.type,
                    token: l
                } : (l.type === a.default.NON_TOKEN_TYPE && (n = l), {
                    type: c.SearchPopoutModes.FILTER_ALL,
                    filter: null,
                    token: n
                })
            }

            function R(e, t) {
                let n = [];
                return r(e).forEach(e => {
                    if (null == e || 0 === e.results.length) return;
                    let l = e.group;
                    n = n.concat(e.results.map(e => {
                        let n = e.text;
                        if (t === c.SearchPopoutModes.FILTER_ALL) {
                            var r;
                            l = null !== (r = e.group) && void 0 !== r ? r : l;
                            let t = u.default[l];
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
            let I = new a.default;

            function g(e) {
                return I.tokenize(e)
            }

            function N() {
                return I.clearCache()
            }

            function M(e) {
                return null != e ? _[e] : null
            }

            function y(e, t) {
                let n = c.IS_SEARCH_FILTER_TOKEN.test(e.type);
                return (null != t || !n) && (null == t || !n || !!c.IS_SEARCH_ANSWER_TOKEN.test(t.type)) && !0
            }

            function m() {
                (0, u.refreshSearchTokens)(), I.reset(), r(u.default).forOwn((e, t) => I.addRule({
                    type: t,
                    ...e
                }))
            }
        },
        430143: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GroupIcon: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                a = n("82169");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M14.5 8a3 3 0 1 0-2.7-4.3c-.2.4.06.86.44 1.12a5 5 0 0 1 2.14 3.08c.01.06.06.1.12.1ZM18.44 17.27c.15.43.54.73 1 .73h1.06c.83 0 1.5-.67 1.5-1.5a7.5 7.5 0 0 0-6.5-7.43c-.55-.08-.99.38-1.1.92-.06.3-.15.6-.26.87-.23.58-.05 1.3.47 1.63a9.53 9.53 0 0 1 3.83 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0c0 .83-.67 1.5-1.5 1.5a.2.2 0 0 1-.2-.16c-.2-.96-.56-1.87-.88-2.54-.1-.23-.42-.15-.42.1v2.1a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.32.67-.67 1.58-.88 2.54a.2.2 0 0 1-.2.16A1.5 1.5 0 0 1 2 20.5Z",
                        className: s
                    })
                })
            }
        },
        541742: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MoreHorizontalIcon: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                a = n("82169");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=81084.6808285a989bfa40f254.js.map