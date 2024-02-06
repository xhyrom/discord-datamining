(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["8608"], {
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

            function l(e, t, n) {
                if (null == t) return null;
                for (let a = 0; a < t.length; a++) {
                    let r;
                    let l = t[a],
                        u = s(e.match(l.regex), n);
                    if (null != u) {
                        let {
                            cache: e
                        } = l;
                        if (null != e && null != (r = e.get(u[0])) && ((r = new o(r)).start = u.index), null == r) {
                            if (r = new o(u, l.type), null != l.validator && !l.validator(r)) continue;
                            null != e && !(null == e ? void 0 : e.has(u[0])) && e.set(u[0], r)
                        }
                        return r
                    }
                }
                return null
            }

            function s(e, t) {
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
                        regex: l
                    } = e;
                    if ("^" !== l.source.charAt(0) && (l = new RegExp("^".concat(l.source), l.flags)), null != r && (t = new Map), null == a) {
                        this._rules.push({
                            regex: l,
                            type: n,
                            validator: r,
                            cache: t
                        });
                        return
                    }
                    a.forEach(e => {
                        null == this._followers[e] && (this._followers[e] = []), this._followers[e].push({
                            regex: l,
                            type: n,
                            validator: r,
                            cache: t
                        })
                    })
                }
                tokenize(e) {
                    let t, n = e,
                        r = "",
                        l = 0,
                        u = [];
                    for (; n.length > 0;) {
                        let e = this._getMatch(n, t, l + r.length);
                        null != e ? (null != r && "" !== r && u.push(new o(s(r.match(a), l), this._nonTokenType)), t = e, u.push(e), l += t.length + r.length, n = n.substring(t.length), r = "") : (r += n[0], n = n.substring(1))
                    }
                    return null != r && "" !== r && u.push(new o(s(r.match(a), l), this._nonTokenType)), u
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
                    return (null == t ? void 0 : t.end) === n && (a = l(e, this._followers[String(r)], n)), null == a && (a = l(e, this._rules, n)), a
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
                    return b
                },
                ComponentTypes: function() {
                    return a
                },
                refreshSearchTokens: function() {
                    return z
                },
                getFilterAutocompletions: function() {
                    return V
                },
                default: function() {
                    return Z
                }
            }), n("222007"), n("843762");
            var a, r, l = n("448105"),
                s = n.n(l),
                u = n("917351"),
                o = n.n(u),
                E = n("866227"),
                c = n.n(E),
                i = n("923959"),
                T = n("27618"),
                _ = n("744983"),
                f = n("18494"),
                d = n("162771"),
                R = n("102985"),
                S = n("697218"),
                h = n("25292"),
                p = n("655518"),
                A = n("158998"),
                g = n("49111"),
                y = n("782340");

            function I() {
                return new Set(c.months().map(e => e.toLowerCase()))
            }

            function N() {
                return new Set(c.weekdays().map(e => e.toLowerCase()))
            }

            function F() {
                let e = new Date().getFullYear();
                return new Set(o.range(2015, e + 1).map(e => e.toString()))
            }

            function L(e, t) {
                return [e, e.clone().add(1, t)]
            }

            function M(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = c().startOf(e).add(t, e);
                return L(n, e)
            }

            function C(e, t, n) {
                let a = c(e, t).local();
                return L(a, n)
            }

            function k() {
                return {
                    [y.default.Messages.SEARCH_SHORTCUT_TODAY]: () => M("day"),
                    [y.default.Messages.SEARCH_SHORTCUT_YESTERDAY]: () => M("day", -1),
                    [y.default.Messages.SEARCH_SHORTCUT_WEEK]: () => M("week"),
                    [y.default.Messages.SEARCH_SHORTCUT_MONTH]: () => M("month"),
                    [y.default.Messages.SEARCH_SHORTCUT_YEAR]: () => M("year")
                }
            }
            let m = RegExp("(?:\\s*(".concat("([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})", "|").concat("([0-9]{4})-([0-9]{1,2})", "|").concat("\\d{4}", "|").concat("([^\\d\\s]+)", "))"), "i"),
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
                return null != (t = g.ID_REGEX.test(n) ? n : n === g.ME ? a(S.default.getCurrentUser()) : null != e.getMatch(4) ? a(S.default.findByTag(e.getMatch(4))) : a(S.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData("userId", t), !0)
            }

            function x(e, t) {
                let n, a;
                let r = e.getFullMatch().trim().toLowerCase(),
                    l = k()[r];
                null != l ? [n, a] = l() : I().has(r) ? [n, a] = C(r, "MMMM", "month") : N().has(r) ? [n, a] = C(r, "dddd", "day") : F().has(r) ? [n, a] = C(r, "YYYY", "year") : [n, a] = C(r, g.SEARCH_DATE_FORMAT, "day");
                let s = n.isValid() && a.isValid();
                return !!s && ("before" === t ? (a = n, n = null) : "after" === t && (n = a, a = null), e.setData("start", n), e.setData("end", a), !0)
            }

            function W(e) {
                let t = e.getMatch(1),
                    n = d.default.getGuildId(),
                    a = i.default.getChannels(n)[i.GUILD_SELECTABLE_CHANNELS_KEY].concat(i.default.getChannels(n)[i.GUILD_VOCAL_CHANNELS_KEY]),
                    r = i.default.getTextChannelNameDisambiguations(n),
                    l = o.chain(a).map(e => {
                        let {
                            channel: t
                        } = e;
                        return t
                    }).find(e => {
                        var n, a;
                        return t === (null !== (a = null === (n = r[e.id]) || void 0 === n ? void 0 : n.name) && void 0 !== a ? a : e.name)
                    }).value();
                return null != l && (e.setData("channel", l), !0)
            }

            function D(e) {
                let t = {
                    [y.default.Messages.SEARCH_ANSWER_HAS_LINK]: "link",
                    [y.default.Messages.SEARCH_ANSWER_HAS_EMBED]: "embed",
                    [y.default.Messages.SEARCH_ANSWER_HAS_ATTACHMENT]: "file",
                    [y.default.Messages.SEARCH_ANSWER_HAS_VIDEO]: "video",
                    [y.default.Messages.SEARCH_ANSWER_HAS_IMAGE]: "image",
                    [y.default.Messages.SEARCH_ANSWER_HAS_SOUND]: "sound",
                    [y.default.Messages.SEARCH_ANSWER_HAS_STICKER]: "sticker"
                } [e.getMatch(1)];
                return null != t && "" !== t && (e.setData("has", t), !0)
            }

            function P() {
                return [...Array.from(I()), ...Array.from(N()), ...Array.from(F()), ...Object.keys(k())]
            }

            function b() {
                return o.sample(P())
            }

            function K(e, t, n) {
                return U(e, t, P()).map(e => ({
                    ...e,
                    group: n,
                    key: "".concat(n, "-").concat(e.text)
                }))
            }

            function U(e, t, n) {
                let a = e.toLocaleLowerCase();
                return o(n).filter(e => s(a, e.toLocaleLowerCase())).take(t).map(e => ({
                    text: e
                })).value()
            }

            function Y(e, t) {
                let n, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    l = _.default.getSearchType(t);
                e = e.split("#")[0];
                let s = {
                    query: e,
                    limit: a,
                    request: r
                };
                switch (l) {
                    case g.SearchTypes.GUILD:
                        n = h.default.queryGuildUsers({
                            ...s,
                            guildId: t
                        });
                        break;
                    case g.SearchTypes.CHANNEL:
                        n = h.default.queryChannelUsers({
                            ...s,
                            channelId: t
                        });
                        break;
                    case g.SearchTypes.DMS:
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

            function B() {
                return _.default.getSearchType() === g.SearchTypes.GUILD
            }

            function q() {
                return !R.default.hidePersonalInformation
            }
            let G = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
            (r = a || (a = {})).FILTER = "FILTER", r.ANSWER = "ANSWER";
            let j = {};

            function z() {
                Object.assign(j, function() {
                    let e = [y.default.Messages.SEARCH_ANSWER_HAS_LINK, y.default.Messages.SEARCH_ANSWER_HAS_EMBED, y.default.Messages.SEARCH_ANSWER_HAS_ATTACHMENT, y.default.Messages.SEARCH_ANSWER_HAS_VIDEO, y.default.Messages.SEARCH_ANSWER_HAS_IMAGE, y.default.Messages.SEARCH_ANSWER_HAS_SOUND, y.default.Messages.SEARCH_ANSWER_HAS_STICKER];
                    return {
                        [g.SearchTokenTypes.FILTER_FROM]: {
                            regex: v(y.default.Messages.SEARCH_FILTER_FROM),
                            componentType: "FILTER",
                            key: O(y.default.Messages.SEARCH_FILTER_FROM),
                            plainText: y.default.Messages.SEARCH_FILTER_FROM,
                            validator: q,
                            getAutocompletions: Y
                        },
                        [g.SearchTokenTypes.ANSWER_USERNAME_FROM]: {
                            follows: [g.SearchTokenTypes.FILTER_FROM],
                            regex: G,
                            validator: w,
                            mutable: !0,
                            componentType: "ANSWER",
                            queryKey: "author_id"
                        },
                        [g.SearchTokenTypes.FILTER_MENTIONS]: {
                            regex: v(y.default.Messages.SEARCH_FILTER_MENTIONS),
                            componentType: "FILTER",
                            key: O(y.default.Messages.SEARCH_FILTER_MENTIONS),
                            plainText: y.default.Messages.SEARCH_FILTER_MENTIONS,
                            validator: q,
                            getAutocompletions: Y
                        },
                        [g.SearchTokenTypes.ANSWER_USERNAME_MENTIONS]: {
                            follows: [g.SearchTokenTypes.FILTER_MENTIONS],
                            regex: G,
                            validator: w,
                            mutable: !0,
                            componentType: "ANSWER",
                            queryKey: "mentions"
                        },
                        [g.SearchTokenTypes.FILTER_HAS]: {
                            regex: v(y.default.Messages.SEARCH_FILTER_HAS),
                            componentType: "FILTER",
                            key: O(y.default.Messages.SEARCH_FILTER_HAS),
                            plainText: y.default.Messages.SEARCH_FILTER_HAS,
                            getAutocompletions: (t, n, a) => U(t, a, e)
                        },
                        [g.SearchTokenTypes.ANSWER_HAS]: {
                            regex: RegExp("(?:\\s*-?(".concat(e.map(e => p.default.escape(e)).join("|"), "))"), "i"),
                            follows: [g.SearchTokenTypes.FILTER_HAS],
                            validator: D,
                            componentType: "ANSWER",
                            queryKey: "has"
                        },
                        [g.SearchTokenTypes.FILTER_FILE_TYPE]: {
                            regex: v(y.default.Messages.SEARCH_FILTER_FILE_TYPE),
                            key: O(y.default.Messages.SEARCH_FILTER_FILE_TYPE),
                            plainText: y.default.Messages.SEARCH_FILTER_FILE_TYPE,
                            componentType: "FILTER"
                        },
                        [g.SearchTokenTypes.ANSWER_FILE_TYPE]: {
                            regex: /(?:\s*([^\s]+))/,
                            follows: [g.SearchTokenTypes.FILTER_FILE_TYPE],
                            mutable: !0,
                            componentType: "ANSWER",
                            queryKey: "attachment_extensions"
                        },
                        [g.SearchTokenTypes.FILTER_FILE_NAME]: {
                            regex: v(y.default.Messages.SEARCH_FILTER_FILE_NAME),
                            key: O(y.default.Messages.SEARCH_FILTER_FILE_NAME),
                            plainText: y.default.Messages.SEARCH_FILTER_FILE_NAME,
                            componentType: "FILTER"
                        },
                        [g.SearchTokenTypes.ANSWER_FILE_NAME]: {
                            regex: /(?:\s*([^\s]+)(?=\s))/,
                            follows: [g.SearchTokenTypes.FILTER_FILE_NAME],
                            mutable: !0,
                            componentType: "ANSWER",
                            queryKey: "attachment_filename"
                        },
                        [g.SearchTokenTypes.FILTER_BEFORE]: {
                            regex: v(y.default.Messages.SEARCH_FILTER_BEFORE),
                            componentType: "FILTER",
                            key: O(y.default.Messages.SEARCH_FILTER_BEFORE),
                            plainText: y.default.Messages.SEARCH_FILTER_BEFORE,
                            getAutocompletions: (e, t, n) => K(e, n, g.SearchTokenTypes.FILTER_BEFORE)
                        },
                        [g.SearchTokenTypes.FILTER_ON]: {
                            regex: v("(".concat(y.default.Messages.SEARCH_FILTER_ON, "|").concat(y.default.Messages.SEARCH_FILTER_DURING, ")")),
                            componentType: "FILTER",
                            key: O(y.default.Messages.SEARCH_FILTER_DURING),
                            plainText: y.default.Messages.SEARCH_FILTER_DURING,
                            getAutocompletions: (e, t, n) => K(e, n, g.SearchTokenTypes.FILTER_ON)
                        },
                        [g.SearchTokenTypes.FILTER_AFTER]: {
                            regex: v(y.default.Messages.SEARCH_FILTER_AFTER),
                            componentType: "FILTER",
                            key: O(y.default.Messages.SEARCH_FILTER_AFTER),
                            plainText: y.default.Messages.SEARCH_FILTER_AFTER,
                            getAutocompletions: (e, t, n) => K(e, n, g.SearchTokenTypes.FILTER_AFTER)
                        },
                        [g.SearchTokenTypes.ANSWER_BEFORE]: {
                            regex: m,
                            follows: [g.SearchTokenTypes.FILTER_BEFORE],
                            componentType: "ANSWER",
                            mutable: !0,
                            validator: e => x(e, "before")
                        },
                        [g.SearchTokenTypes.ANSWER_ON]: {
                            regex: m,
                            follows: [g.SearchTokenTypes.FILTER_ON],
                            componentType: "ANSWER",
                            mutable: !0,
                            validator: e => x(e, "on")
                        },
                        [g.SearchTokenTypes.ANSWER_AFTER]: {
                            regex: m,
                            follows: [g.SearchTokenTypes.FILTER_AFTER],
                            componentType: "ANSWER",
                            mutable: !0,
                            validator: e => x(e, "after")
                        },
                        [g.SearchTokenTypes.FILTER_IN]: {
                            regex: v(y.default.Messages.SEARCH_FILTER_IN),
                            componentType: "FILTER",
                            key: O(y.default.Messages.SEARCH_FILTER_IN),
                            plainText: y.default.Messages.SEARCH_FILTER_IN,
                            validator: B,
                            getAutocompletions(e, t, n) {
                                "#" === e[0] && (e = e.substring(1));
                                let a = h.default.queryChannels({
                                    query: e,
                                    type: i.GUILD_SELECTABLE_CHANNELS_KEY,
                                    guildId: t,
                                    limit: 1 / 0
                                }).concat(h.default.queryChannels({
                                    query: e,
                                    type: i.GUILD_VOCAL_CHANNELS_KEY,
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
                                let r = i.default.getTextChannelNameDisambiguations(t);
                                return o(a).take(n).map(e => {
                                    var t, n;
                                    return {
                                        text: "".concat(null !== (n = null === (t = r[e.id]) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : e.name),
                                        channel: e
                                    }
                                }).value()
                            }
                        },
                        [g.SearchTokenTypes.ANSWER_IN]: {
                            regex: /(?:\s*#?([^ ]+))/i,
                            mutable: !0,
                            follows: [g.SearchTokenTypes.FILTER_IN],
                            componentType: "ANSWER",
                            validator: W,
                            queryKey: "channel_id"
                        },
                        [g.SearchTokenTypes.FILTER_PINNED]: {
                            regex: v(y.default.Messages.SEARCH_FILTER_PINNED),
                            componentType: "FILTER",
                            key: O(y.default.Messages.SEARCH_FILTER_PINNED),
                            plainText: y.default.Messages.SEARCH_FILTER_PINNED,
                            getAutocompletions: () => [{
                                text: "true"
                            }, {
                                text: "false"
                            }]
                        },
                        [g.SearchTokenTypes.ANSWER_PINNED]: {
                            regex: H,
                            componentType: "ANSWER",
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

            function V(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(j).length;
                return o(j).keys().filter(e => g.IS_SEARCH_FILTER_TOKEN.test(e)).filter(e => null != j[e].key).map(e => ({
                    token: e,
                    text: j[e].key
                })).filter(t => {
                    let {
                        text: n
                    } = t;
                    return s(e.toLowerCase(), n)
                }).take(t).value()
            }
            var Z = j
        },
        654017: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isSpamSupported: function() {
                    return l
                },
                isSpammer: function() {
                    return s
                },
                isSpam: function() {
                    return u
                }
            });
            var a = n("697218"),
                r = n("49111");

            function l(e) {
                return void 0 !== e && e.type !== r.ChannelTypes.DM
            }

            function s(e) {
                var t, n;
                return null !== (n = null === (t = a.default.getUser(e)) || void 0 === t ? void 0 : t.hasFlag(r.UserFlags.SPAMMER)) && void 0 !== n && n
            }

            function u(e) {
                return s(e.author.id)
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
                l = n("304983"),
                s = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...u
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, s.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            fill: r,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"
                        })
                    })
                }, l.MoreHorizontalIcon, void 0, {
                    size: 24
                })
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
                    return y
                },
                clearTokenCache: function() {
                    return I
                },
                showDatePicker: function() {
                    return N
                },
                filterHasAnswer: function() {
                    return F
                },
                refreshSearchTokens: function() {
                    return L
                }
            }), n("222007"), n("808653");
            var a = n("917351"),
                r = n.n(a),
                l = n("76385"),
                s = n("955513"),
                u = n("247013"),
                o = n("697218"),
                E = n("299039"),
                c = n("49111"),
                i = n("782340");

            function T(e) {
                switch (e) {
                    case c.SearchTokenTypes.FILTER_FROM:
                        return i.default.Messages.SEARCH_ANSWER_FROM;
                    case c.SearchTokenTypes.FILTER_MENTIONS:
                        return i.default.Messages.SEARCH_ANSWER_MENTIONS;
                    case c.SearchTokenTypes.FILTER_HAS:
                        return i.default.Messages.SEARCH_ANSWER_HAS;
                    case c.SearchTokenTypes.FILTER_BEFORE:
                    case c.SearchTokenTypes.FILTER_ON:
                    case c.SearchTokenTypes.FILTER_AFTER:
                        return i.default.Messages.SEARCH_ANSWER_DATE;
                    case c.SearchTokenTypes.FILTER_IN:
                        return i.default.Messages.SEARCH_ANSWER_IN;
                    case c.SearchTokenTypes.FILTER_FILE_TYPE:
                        return i.default.Messages.SEARCH_ANSWER_FILE_TYPE;
                    case c.SearchTokenTypes.FILTER_FILE_NAME:
                        return i.default.Messages.SEARCH_ANSWER_FILE_NAME;
                    case c.SearchTokenTypes.FILTER_PINNED:
                        return i.default.Messages.SEARCH_ANSWER_BOOLEAN
                }
            }
            let _ = {
                [c.SearchTokenTypes.FILTER_BEFORE]: !0,
                [c.SearchTokenTypes.FILTER_AFTER]: !0,
                [c.SearchTokenTypes.FILTER_ON]: !0
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
                        if (c.IS_SEARCH_FILTER_TOKEN.test(n)) return;
                        switch (n) {
                            case c.SearchTokenTypes.ANSWER_BEFORE:
                            case c.SearchTokenTypes.ANSWER_ON:
                            case c.SearchTokenTypes.ANSWER_AFTER:
                                let a = e.getData("start"),
                                    r = e.getData("end");
                                a && (t.min_id = E.default.fromTimestamp(a)), r && (t.max_id = E.default.fromTimestamp(r));
                                return
                        }
                        let l = function(e) {
                            let t = s.default[e],
                                n = null != t ? t.queryKey : null;
                            return null == n && (n = "content"), n
                        }(n);
                        null == t[l] && (t[l] = new Set);
                        let u = t[l];
                        switch (n) {
                            case c.SearchTokenTypes.ANSWER_USERNAME_FROM:
                            case c.SearchTokenTypes.ANSWER_USERNAME_MENTIONS:
                                u.add(e.getData("userId"));
                                break;
                            case c.SearchTokenTypes.ANSWER_FILE_TYPE:
                            case c.SearchTokenTypes.ANSWER_FILE_NAME:
                                u.add(e.getMatch(1));
                                break;
                            case c.SearchTokenTypes.ANSWER_IN:
                                u.add(e.getData("channel").id);
                                break;
                            case c.SearchTokenTypes.ANSWER_HAS:
                                u.add(e.getData("has"));
                                break;
                            case c.SearchTokenTypes.ANSWER_PINNED:
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
                let l = e.find((l, s) => t >= l.start && t <= l.end && n >= l.start && n <= l.end ? (null != e[s + 1] && (r = e[s + 1]), !0) : (a = l, !1));
                return null == l ? null : {
                    previousToken: a,
                    currentToken: l,
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
                    previousToken: s
                } = e;
                if (0 === t.length) return {
                    type: c.SearchPopoutModes.EMPTY,
                    filter: null,
                    token: null
                };
                if (null == a) return {
                    type: c.SearchPopoutModes.FILTER_ALL,
                    filter: null,
                    token: null
                };
                if (c.IS_SEARCH_FILTER_TOKEN.test(a.type)) {
                    if (null == r || r.type === l.default.NON_TOKEN_TYPE) return {
                        type: c.SearchPopoutModes.FILTER,
                        filter: a.type,
                        token: r
                    };
                    if (null != r && !c.IS_SEARCH_ANSWER_TOKEN.test(r.type)) return {
                        type: c.SearchPopoutModes.FILTER,
                        filter: a.type,
                        token: null
                    }
                }
                return a.type === l.default.NON_TOKEN_TYPE && null != s && c.IS_SEARCH_FILTER_TOKEN.test(s.type) ? {
                    type: c.SearchPopoutModes.FILTER,
                    filter: s.type,
                    token: a
                } : (a.type === l.default.NON_TOKEN_TYPE && (n = a), {
                    type: c.SearchPopoutModes.FILTER_ALL,
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
                        if (t === c.SearchPopoutModes.FILTER_ALL) {
                            var r;
                            a = null !== (r = e.group) && void 0 !== r ? r : a;
                            let t = s.default[a];
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
            let g = new l.default;

            function y(e) {
                return g.tokenize(e)
            }

            function I() {
                return g.clearCache()
            }

            function N(e) {
                return null != e ? _[e] : null
            }

            function F(e, t) {
                let n = c.IS_SEARCH_FILTER_TOKEN.test(e.type);
                return (null != t || !n) && (null == t || !n || !!c.IS_SEARCH_ANSWER_TOKEN.test(t.type)) && !0
            }

            function L() {
                (0, s.refreshSearchTokens)(), g.reset(), r(s.default).forOwn((e, t) => g.addRule({
                    type: t,
                    ...e
                }))
            }
        },
        541742: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MoreHorizontalIcon: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("82169");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
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
//# sourceMappingURL=8608.ecaad83be944bb9e69c9.js.map