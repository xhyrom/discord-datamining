(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["59459"], {
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
                    ...i
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(i),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12ZM22 12C22 13.1046 21.1046 14 20 14C18.8954 14 18 13.1046 18 12C18 10.8954 18.8954 10 20 10C21.1046 10 22 10.8954 22 12Z",
                        fill: "string" == typeof u ? u : u.css,
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
                    return i
                },
                default: function() {
                    return s
                }
            }), n("222007"), n("702976"), n("424973");
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
                        if (null != e && null != (l = e.get(o[0])) && ((l = new i(l)).start = o.index), null == l) {
                            if (l = new i(o, a.type), null != a.validator && !a.validator(l)) continue;
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
                        null != e ? (null != l && "" !== l && o.push(new i(u(l.match(r), a), this._nonTokenType)), t = e, o.push(e), a += t.length + l.length, n = n.substring(t.length), l = "") : (l += n[0], n = n.substring(1))
                    }
                    return null != l && "" !== l && o.push(new i(u(l.match(r), a), this._nonTokenType)), o
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
            class i {
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
                    if (e instanceof i) this.match = [...e.match], this.start = e.start, this.type = e.type, null != e._data && (this._data = e._data);
                    else if (null != e) {
                        var n;
                        this.match = [...e], this.start = "string" == typeof e ? 0 : null !== (n = e.index) && void 0 !== n ? n : 0, this.type = t
                    } else this.match = [], this.start = 0, this.type = t
                }
            }
            o.NON_TOKEN_TYPE = l, o.Token = i;
            var s = o
        },
        955513: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRandomDateShortcut: function() {
                    return W
                },
                ComponentTypes: function() {
                    return r
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
            }), n("222007"), n("843762");
            var r, l, a = n("448105"),
                u = n.n(a),
                o = n("917351"),
                i = n.n(o),
                s = n("866227"),
                c = n.n(s),
                d = n("923959"),
                E = n("27618"),
                _ = n("744983"),
                f = n("18494"),
                T = n("162771"),
                S = n("102985"),
                h = n("697218"),
                p = n("25292"),
                R = n("655518"),
                g = n("158998"),
                A = n("49111"),
                N = n("782340");

            function m() {
                return new Set(c.months().map(e => e.toLowerCase()))
            }

            function y() {
                return new Set(c.weekdays().map(e => e.toLowerCase()))
            }

            function I() {
                let e = new Date().getFullYear();
                return new Set(i.range(2015, e + 1).map(e => e.toString()))
            }

            function C(e, t) {
                return [e, e.clone().add(1, t)]
            }

            function M(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = c().startOf(e).add(t, e);
                return C(n, e)
            }

            function L(e, t, n) {
                let r = c(e, t).local();
                return C(r, n)
            }

            function v() {
                return {
                    [N.default.Messages.SEARCH_SHORTCUT_TODAY]: () => M("day"),
                    [N.default.Messages.SEARCH_SHORTCUT_YESTERDAY]: () => M("day", -1),
                    [N.default.Messages.SEARCH_SHORTCUT_WEEK]: () => M("week"),
                    [N.default.Messages.SEARCH_SHORTCUT_MONTH]: () => M("month"),
                    [N.default.Messages.SEARCH_SHORTCUT_YEAR]: () => M("year")
                }
            }
            let F = RegExp("(?:\\s*(".concat("([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})", "|").concat("([0-9]{4})-([0-9]{1,2})", "|").concat("\\d{4}", "|").concat("([^\\d\\s]+)", "))"), "i"),
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
                    r = e => null != e ? null == e ? void 0 : e.id : null;
                return null != (t = A.ID_REGEX.test(n) ? n : n === A.ME ? r(h.default.getCurrentUser()) : null != e.getMatch(4) ? r(h.default.findByTag(e.getMatch(4))) : r(h.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData("userId", t), !0)
            }

            function D(e, t) {
                let n, r;
                let l = e.getFullMatch().trim().toLowerCase(),
                    a = v()[l];
                null != a ? [n, r] = a() : m().has(l) ? [n, r] = L(l, "MMMM", "month") : y().has(l) ? [n, r] = L(l, "dddd", "day") : I().has(l) ? [n, r] = L(l, "YYYY", "year") : [n, r] = L(l, A.SEARCH_DATE_FORMAT, "day");
                let u = n.isValid() && r.isValid();
                return !!u && ("before" === t ? (r = n, n = null) : "after" === t && (n = r, r = null), e.setData("start", n), e.setData("end", r), !0)
            }

            function b(e) {
                let t = e.getMatch(1),
                    n = T.default.getGuildId(),
                    r = d.default.getChannels(n)[d.GUILD_SELECTABLE_CHANNELS_KEY].concat(d.default.getChannels(n)[d.GUILD_VOCAL_CHANNELS_KEY]),
                    l = d.default.getTextChannelNameDisambiguations(n),
                    a = i.chain(r).map(e => {
                        let {
                            channel: t
                        } = e;
                        return t
                    }).find(e => {
                        var n, r;
                        return t === (null !== (r = null === (n = l[e.id]) || void 0 === n ? void 0 : n.name) && void 0 !== r ? r : e.name)
                    }).value();
                return null != a && (e.setData("channel", a), !0)
            }

            function U(e) {
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

            function G() {
                return [...Array.from(m()), ...Array.from(y()), ...Array.from(I()), ...Object.keys(v())]
            }

            function W() {
                return i.sample(G())
            }

            function P(e, t, n) {
                return x(e, t, G()).map(e => ({
                    ...e,
                    group: n,
                    key: "".concat(n, "-").concat(e.text)
                }))
            }

            function x(e, t, n) {
                let r = e.toLocaleLowerCase();
                return i(n).filter(e => u(r, e.toLocaleLowerCase())).take(t).map(e => ({
                    text: e
                })).value()
            }

            function B(e, t) {
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
                    case A.SearchTypes.GUILD:
                        n = p.default.queryGuildUsers({
                            ...u,
                            guildId: t
                        });
                        break;
                    case A.SearchTypes.CHANNEL:
                        n = p.default.queryChannelUsers({
                            ...u,
                            channelId: t
                        });
                        break;
                    case A.SearchTypes.DMS:
                        n = p.default.queryUsers(e, r, !0, l, () => !0);
                        break;
                    default:
                        return []
                }
                return n.filter(e => {
                    let {
                        record: t
                    } = e;
                    return !E.default.isBlocked(t.id)
                }).map(e => {
                    let {
                        record: t
                    } = e;
                    return {
                        text: g.default.getUserTag(t),
                        user: t
                    }
                })
            }

            function j() {
                return _.default.getSearchType() === A.SearchTypes.GUILD
            }

            function q() {
                return !S.default.hidePersonalInformation
            }
            let K = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
            (l = r || (r = {})).FILTER = "FILTER", l.ANSWER = "ANSWER";
            let Y = {};

            function V() {
                Object.assign(Y, function() {
                    let e = [N.default.Messages.SEARCH_ANSWER_HAS_LINK, N.default.Messages.SEARCH_ANSWER_HAS_EMBED, N.default.Messages.SEARCH_ANSWER_HAS_ATTACHMENT, N.default.Messages.SEARCH_ANSWER_HAS_VIDEO, N.default.Messages.SEARCH_ANSWER_HAS_IMAGE, N.default.Messages.SEARCH_ANSWER_HAS_SOUND, N.default.Messages.SEARCH_ANSWER_HAS_STICKER];
                    return {
                        [A.SearchTokenTypes.FILTER_FROM]: {
                            regex: k(N.default.Messages.SEARCH_FILTER_FROM),
                            componentType: "FILTER",
                            key: O(N.default.Messages.SEARCH_FILTER_FROM),
                            validator: q,
                            getAutocompletions: B
                        },
                        [A.SearchTokenTypes.ANSWER_USERNAME_FROM]: {
                            follows: [A.SearchTokenTypes.FILTER_FROM],
                            regex: K,
                            validator: w,
                            mutable: !0,
                            componentType: "ANSWER",
                            queryKey: "author_id"
                        },
                        [A.SearchTokenTypes.FILTER_MENTIONS]: {
                            regex: k(N.default.Messages.SEARCH_FILTER_MENTIONS),
                            componentType: "FILTER",
                            key: O(N.default.Messages.SEARCH_FILTER_MENTIONS),
                            validator: q,
                            getAutocompletions: B
                        },
                        [A.SearchTokenTypes.ANSWER_USERNAME_MENTIONS]: {
                            follows: [A.SearchTokenTypes.FILTER_MENTIONS],
                            regex: K,
                            validator: w,
                            mutable: !0,
                            componentType: "ANSWER",
                            queryKey: "mentions"
                        },
                        [A.SearchTokenTypes.FILTER_HAS]: {
                            regex: k(N.default.Messages.SEARCH_FILTER_HAS),
                            componentType: "FILTER",
                            key: O(N.default.Messages.SEARCH_FILTER_HAS),
                            getAutocompletions: (t, n, r) => x(t, r, e)
                        },
                        [A.SearchTokenTypes.ANSWER_HAS]: {
                            regex: RegExp("(?:\\s*-?(".concat(e.map(e => R.default.escape(e)).join("|"), "))"), "i"),
                            follows: [A.SearchTokenTypes.FILTER_HAS],
                            validator: U,
                            componentType: "ANSWER",
                            queryKey: "has"
                        },
                        [A.SearchTokenTypes.FILTER_FILE_TYPE]: {
                            regex: k(N.default.Messages.SEARCH_FILTER_FILE_TYPE),
                            key: O(N.default.Messages.SEARCH_FILTER_FILE_TYPE),
                            componentType: "FILTER"
                        },
                        [A.SearchTokenTypes.ANSWER_FILE_TYPE]: {
                            regex: /(?:\s*([^\s]+))/,
                            follows: [A.SearchTokenTypes.FILTER_FILE_TYPE],
                            mutable: !0,
                            componentType: "ANSWER",
                            queryKey: "attachment_extensions"
                        },
                        [A.SearchTokenTypes.FILTER_FILE_NAME]: {
                            regex: k(N.default.Messages.SEARCH_FILTER_FILE_NAME),
                            key: O(N.default.Messages.SEARCH_FILTER_FILE_NAME),
                            componentType: "FILTER"
                        },
                        [A.SearchTokenTypes.ANSWER_FILE_NAME]: {
                            regex: /(?:\s*([^\s]+)(?=\s))/,
                            follows: [A.SearchTokenTypes.FILTER_FILE_NAME],
                            mutable: !0,
                            componentType: "ANSWER",
                            queryKey: "attachment_filename"
                        },
                        [A.SearchTokenTypes.FILTER_BEFORE]: {
                            regex: k(N.default.Messages.SEARCH_FILTER_BEFORE),
                            componentType: "FILTER",
                            key: O(N.default.Messages.SEARCH_FILTER_BEFORE),
                            getAutocompletions: (e, t, n) => P(e, n, A.SearchTokenTypes.FILTER_BEFORE)
                        },
                        [A.SearchTokenTypes.FILTER_ON]: {
                            regex: k("(".concat(N.default.Messages.SEARCH_FILTER_ON, "|").concat(N.default.Messages.SEARCH_FILTER_DURING, ")")),
                            componentType: "FILTER",
                            key: O(N.default.Messages.SEARCH_FILTER_DURING),
                            getAutocompletions: (e, t, n) => P(e, n, A.SearchTokenTypes.FILTER_ON)
                        },
                        [A.SearchTokenTypes.FILTER_AFTER]: {
                            regex: k(N.default.Messages.SEARCH_FILTER_AFTER),
                            componentType: "FILTER",
                            key: O(N.default.Messages.SEARCH_FILTER_AFTER),
                            getAutocompletions: (e, t, n) => P(e, n, A.SearchTokenTypes.FILTER_AFTER)
                        },
                        [A.SearchTokenTypes.ANSWER_BEFORE]: {
                            regex: F,
                            follows: [A.SearchTokenTypes.FILTER_BEFORE],
                            componentType: "ANSWER",
                            mutable: !0,
                            validator: e => D(e, "before")
                        },
                        [A.SearchTokenTypes.ANSWER_ON]: {
                            regex: F,
                            follows: [A.SearchTokenTypes.FILTER_ON],
                            componentType: "ANSWER",
                            mutable: !0,
                            validator: e => D(e, "on")
                        },
                        [A.SearchTokenTypes.ANSWER_AFTER]: {
                            regex: F,
                            follows: [A.SearchTokenTypes.FILTER_AFTER],
                            componentType: "ANSWER",
                            mutable: !0,
                            validator: e => D(e, "after")
                        },
                        [A.SearchTokenTypes.FILTER_IN]: {
                            regex: k(N.default.Messages.SEARCH_FILTER_IN),
                            componentType: "FILTER",
                            key: O(N.default.Messages.SEARCH_FILTER_IN),
                            validator: j,
                            getAutocompletions(e, t, n) {
                                "#" === e[0] && (e = e.substring(1));
                                let r = p.default.queryChannels({
                                    query: e,
                                    type: d.GUILD_SELECTABLE_CHANNELS_KEY,
                                    guildId: t,
                                    limit: 1 / 0
                                }).concat(p.default.queryChannels({
                                    query: e,
                                    type: d.GUILD_VOCAL_CHANNELS_KEY,
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
                                        n = r.find(t => t.id === e);
                                    null != n && (r.splice(r.indexOf(n), 1), r.unshift(n))
                                }
                                let l = d.default.getTextChannelNameDisambiguations(t);
                                return i(r).take(n).map(e => {
                                    var t, n;
                                    return {
                                        text: "".concat(null !== (n = null === (t = l[e.id]) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : e.name),
                                        channel: e
                                    }
                                }).value()
                            }
                        },
                        [A.SearchTokenTypes.ANSWER_IN]: {
                            regex: /(?:\s*#?([^ ]+))/i,
                            mutable: !0,
                            follows: [A.SearchTokenTypes.FILTER_IN],
                            componentType: "ANSWER",
                            validator: b,
                            queryKey: "channel_id"
                        },
                        [A.SearchTokenTypes.FILTER_PINNED]: {
                            regex: k(N.default.Messages.SEARCH_FILTER_PINNED),
                            componentType: "FILTER",
                            key: O(N.default.Messages.SEARCH_FILTER_PINNED),
                            getAutocompletions: () => [{
                                text: "true"
                            }, {
                                text: "false"
                            }]
                        },
                        [A.SearchTokenTypes.ANSWER_PINNED]: {
                            regex: H,
                            componentType: "ANSWER",
                            follows: [A.SearchTokenTypes.FILTER_PINNED],
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
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(Y).length;
                return i(Y).keys().filter(e => A.IS_SEARCH_FILTER_TOKEN.test(e)).filter(e => null != Y[e].key).map(e => ({
                    token: e,
                    text: Y[e].key
                })).filter(t => {
                    let {
                        text: n
                    } = t;
                    return u(e.toLowerCase(), n)
                }).take(t).value()
            }
            var z = Y
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
            }), n("70102");
            var r = n("811022"),
                l = n("872717"),
                a = n("913144"),
                u = n("448993"),
                o = n("828434"),
                i = n("49111");
            let s = new r.default("MemberSafetyElasticSearch");
            async function c(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                if (r > 3) throw Error("Unable to search guild members after max retries");
                let {
                    autoRetry: d = !0,
                    signal: E
                } = n;
                try {
                    var _;
                    let u = await l.default.post({
                        url: i.Endpoints.GUILD_MEMBER_SEARCH(e),
                        body: t,
                        signal: E
                    });
                    if (s.info("JANK searchAllGuildMembers", {
                            response: u
                        }), u.status === o.INDEXING_RESPONSE_CODE) {
                        if (null == u.body.retry_after) throw Error("Indexing response did not include retry_after");
                        if (!d) throw Error("Indexing response received but autoRetry is disabled");
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
                    return s.info("JANK searchAllGuildMembers error", {
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
                    return i
                }
            });
            var r = n("811022"),
                l = n("913144"),
                a = n("127421"),
                u = n("828434");
            let o = new r.default("MemberSafetyGuildMemberSearchActionCreators");
            async function i(e, t, n) {
                let r = await (0, a.searchAllGuildMembers)(e, t, n);
                if (r.type === u.GuildMemberSearchResponseType.ERROR) throw r.body;
                let {
                    body: i
                } = r;
                o.info("JANK searchGuildMembers success", {
                    body: i
                }), l.default.dispatch({
                    type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS",
                    guildId: e,
                    members: i.members,
                    page_result_count: i.page_result_count,
                    total_result_count: i.total_result_count
                })
            }
        },
        219115: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsMakingRequestV2: function() {
                    return F
                },
                useIsStillIndexingV2: function() {
                    return H
                },
                handleInitializeV2: function() {
                    return O
                },
                handleGuildDeleteV2: function() {
                    return k
                },
                handleSearchStateUpdateV2: function() {
                    return w
                },
                handlePaginationUpdateV2: function() {
                    return D
                },
                handleGuildMemberSearchSuccessV2: function() {
                    return b
                },
                handleGuildMemberSearchStillIndexingV2: function() {
                    return U
                }
            }), n("222007"), n("70102");
            var r, l, a, u, o = n("714617"),
                i = n.n(o),
                s = n("917351"),
                c = n("308503"),
                d = n("811022"),
                E = n("249654"),
                _ = n("449008"),
                f = n("691386"),
                T = n("770115"),
                S = n("490931"),
                h = n("225982"),
                p = n("178406");
            let R = new d.default("MemberSafetySearchManagerV2");

            function g(e) {
                return "guild_".concat(e)
            }

            function A(e) {
                return {
                    requestState: e,
                    abortController: null,
                    lastUpdated: Date.now(),
                    query: null,
                    cursor: null,
                    previousPagination: null
                }
            }(a = r || (r = {}))[a.FAILED = 0] = "FAILED", a[a.UNFETCHED = 1] = "UNFETCHED", a[a.PENDING = 2] = "PENDING", a[a.SUCCEEDED = 3] = "SUCCEEDED", a[a.STILL_INDEXING = 4] = "STILL_INDEXING";
            let N = (0, c.default)(e => ({}));

            function m(e, t) {
                let n = N.getState()[e];
                return null == n && (n = A(1)), n = {
                    ...n,
                    ...t
                }, N.setState(t => ({
                    ...t,
                    [e]: n
                })), n
            }

            function y(e) {
                return N.getState()[e]
            }

            function I(e) {
                let t = y(e);
                return null == t && m(e, t = A(1)), t
            }

            function C(e) {
                let t = y(e);
                null != t && m(e, {
                    requestState: 3,
                    abortController: null,
                    lastUpdated: Date.now()
                })
            }

            function M(e) {
                var t;
                let n = g(e);
                t = n, N.setState(e => {
                    let n = {
                        ...e
                    };
                    return delete n[t], n
                })
            }

            function L(e, t) {
                return Math.floor(Math.max(e - 1, 0) / t)
            }(u = l || (l = {}))[u.FIRST_PAGE_CHUNK = 0] = "FIRST_PAGE_CHUNK", u[u.CURRENT_SEARCH_CHUNK = 1] = "CURRENT_SEARCH_CHUNK", u[u.NEXT_SEARCH_CHUNK = 2] = "NEXT_SEARCH_CHUNK", u[u.PREVIOUS_SEARCH_CHUNK = 3] = "PREVIOUS_SEARCH_CHUNK";
            async function v(e) {
                var t, n, r, l;
                let a = p.default.getSearchStateByGuildId(e),
                    u = p.default.getPaginationStateByGuildId(e),
                    o = g(e),
                    c = I(o),
                    [d, A] = function(e, t, n) {
                        var r, l, a, u, o, i;
                        let s = function(e, t) {
                                var n;
                                let {
                                    currentPageChunkNumber: r,
                                    previousPageChunkNumber: l,
                                    nextPageChunkNumber: a
                                } = function(e) {
                                    let t = (0, f.getSearchChunkLimit)(e),
                                        n = e.pageSize * (e.currentPage - 1),
                                        r = e.pageSize * e.currentPage,
                                        l = e.pageSize * (e.currentPage + 1);
                                    return {
                                        previousPageChunkNumber: L(n, t),
                                        currentPageChunkNumber: L(r, t),
                                        nextPageChunkNumber: L(l, t)
                                    }
                                }(t), {
                                    previousPagination: u
                                } = I(g(e)), o = t.currentPage, i = null !== (n = null == u ? void 0 : u.currentPage) && void 0 !== n ? n : 0, s = p.default.getElasticSearchPaginationByGuildId(e);
                                switch (!0) {
                                    case null == s:
                                    case r === a && 0 === r:
                                        return 0;
                                    case r === a && r === l:
                                        return 1;
                                    case i < o && r < a:
                                        return 2;
                                    case i > o && r >= l:
                                        if (0 < r) return 3;
                                        return 0;
                                    default:
                                        return 1
                                }
                            }(e, n),
                            c = p.default.getElasticSearchPaginationByGuildId(e),
                            d = (0, f.getSearchChunkLimit)(n);
                        switch (s) {
                            case 0: {
                                let t = p.default.getLastCursorTimestamp(e);
                                return [null, {
                                    limit: d,
                                    after: {
                                        guild_joined_at: t,
                                        user_id: E.default.fromTimestamp(t)
                                    }
                                }]
                            }
                            case 1:
                                return [null !== (r = t.cursor) && void 0 !== r ? r : null, {
                                    limit: d,
                                    after: null !== (l = t.cursor) && void 0 !== l ? l : void 0
                                }];
                            case 2:
                                return [null !== (a = null == c ? void 0 : c.after) && void 0 !== a ? a : null, {
                                    limit: d,
                                    after: null !== (u = null == c ? void 0 : c.after) && void 0 !== u ? u : void 0
                                }];
                            case 3:
                                return [null !== (o = null == c ? void 0 : c.before) && void 0 !== o ? o : null, {
                                    limit: d,
                                    before: null !== (i = null == c ? void 0 : c.before) && void 0 !== i ? i : void 0
                                }];
                            default:
                                (0, _.assertNever)(s)
                        }
                    }(e, c, u);
                let N = (t = function(e) {
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
                }(a), null == (n = A) ? t : {
                    ...t,
                    ...n
                });
                if (function(e, t) {
                        let n = I(e);
                        return i(n.query, t)
                    }(o, N) && (0, s.isEqual)(d, c.cursor)) return;
                let M = function(e, t, n, r) {
                    let l = y(e);
                    if ((null == l ? void 0 : l.requestState) === 2) {
                        var a;
                        null === (a = l.abortController) || void 0 === a || a.abort()
                    }
                    return m(e, {
                        requestState: 2,
                        abortController: new AbortController,
                        lastUpdated: Date.now(),
                        query: t,
                        cursor: n,
                        previousPagination: r
                    })
                }(o, N, d, u);
                try {
                    ;
                    if (R.info("Making member search request", {
                            query: M.query,
                            guildId: e
                        }), null == M.query) throw Error("Query is null");
                    await (0, h.searchGuildMembers)(e, M.query, {
                        signal: null !== (l = null === (r = M.abortController) || void 0 === r ? void 0 : r.signal) && void 0 !== l ? l : void 0
                    })
                } catch (e) {
                    if (-1 === e.code) return;
                    ! function(e) {
                        let t = y(e);
                        null != t && m(e, {
                            requestState: 0,
                            abortController: null,
                            lastUpdated: Date.now()
                        })
                    }(o);
                    return
                }
                C(o)
            }

            function F(e) {
                return N(t => {
                    var n;
                    let r = g(e);
                    return (null === (n = t[r]) || void 0 === n ? void 0 : n.requestState) === 2
                })
            }

            function H(e) {
                return N(t => {
                    var n;
                    let r = g(e);
                    return (null === (n = t[r]) || void 0 === n ? void 0 : n.requestState) === 4
                })
            }

            function O(e) {
                let {
                    guildId: t
                } = e;
                M(t), v(t)
            }

            function k(e) {
                let {
                    guild: t
                } = e;
                M(t.id)
            }

            function w(e) {
                let {
                    guildId: t
                } = e;
                v(t)
            }

            function D(e) {
                let {
                    guildId: t
                } = e;
                v(t)
            }

            function b(e) {
                let {
                    guildId: t
                } = e, n = g(t);
                C(n)
            }

            function U(e) {
                let {
                    guildId: t
                } = e, n = g(t);
                m(n, {
                    requestState: 4,
                    abortController: null,
                    lastUpdated: Date.now()
                })
            }
        },
        347895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchGuildHomeSettings: function() {
                    return S
                },
                fetchNewMemberActions: function() {
                    return h
                },
                selectHomeResourceChannel: function() {
                    return p
                },
                selectNewMemberActionChannel: function() {
                    return R
                },
                completeNewMemberAction: function() {
                    return g
                },
                getBlockForChannelDeletion: function() {
                    return A
                }
            }), n("808653");
            var r = n("872717"),
                l = n("913144"),
                a = n("819689"),
                u = n("115718"),
                o = n("38654"),
                i = n("144491"),
                s = n("42203"),
                c = n("599110"),
                d = n("698882"),
                E = n("129092"),
                _ = n("675305"),
                f = n("290886"),
                T = n("49111");
            let S = async e => {
                l.default.dispatch({
                    type: "GUILD_HOME_SETTINGS_FETCH_START",
                    guildId: e
                });
                try {
                    let t = await r.default.get({
                            url: T.Endpoints.GUILD_HOME_SETTINGS(e),
                            oldFormErrors: !0
                        }),
                        n = (0, E.settingsFromServer)(t.body);
                    return l.default.dispatch({
                        type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS",
                        guildId: e,
                        homeSettings: n
                    }), n
                } catch (t) {
                    l.default.dispatch({
                        type: "GUILD_HOME_SETTINGS_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, h = async e => {
                if (!o.default.isFullServerPreview(e)) {
                    l.default.dispatch({
                        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START",
                        guildId: e
                    });
                    try {
                        let t = await r.default.get({
                                url: T.Endpoints.GUILD_MEMBER_ACTIONS(e),
                                oldFormErrors: !0
                            }),
                            n = (0, E.actionsFromServer)(t.body);
                        return l.default.dispatch({
                            type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS",
                            guildId: e,
                            memberActions: n
                        }), n
                    } catch (t) {
                        l.default.dispatch({
                            type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL",
                            guildId: e
                        })
                    }
                }
            }, p = function(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                if (l.default.dispatch({
                        type: "SELECT_HOME_RESOURCE_CHANNEL",
                        guildId: e,
                        channelId: t
                    }), null == t) return;
                let r = s.default.getChannel(t),
                    E = d.default.getResourceForChannel(e, t);
                null != e && !o.default.isFullServerPreview(e) && null != r && null != E && c.default.track(T.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
                    guild_id: e,
                    channel_id: r.id,
                    server_guide_channel_type: "resource",
                    channel_action_type: -1
                }), n && (0, i.transitionToChannel)(t), a.default.jumpToMessage({
                    channelId: t,
                    messageId: t,
                    flash: !1,
                    jumpType: u.JumpTypes.INSTANT
                })
            }, R = (e, t) => {
                l.default.dispatch({
                    type: "SELECT_NEW_MEMBER_ACTION_CHANNEL",
                    guildId: e,
                    channelId: t
                });
                let n = s.default.getChannel(t),
                    r = d.default.getActionForChannel(e, t);
                null != e && !o.default.isFullServerPreview(e) && null != n && null != r && c.default.track(T.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
                    guild_id: e,
                    channel_id: n.id,
                    server_guide_channel_type: "member action",
                    channel_action_type: r.actionType
                }), (0, i.transitionToChannel)(t)
            }, g = (e, t) => {
                if (l.default.dispatch({
                        type: "COMPLETE_NEW_MEMBER_ACTION",
                        guildId: e,
                        channelId: t
                    }), o.default.isFullServerPreview(e)) return;
                let n = s.default.getChannel(t),
                    a = d.default.getActionForChannel(e, t);
                if (null != n && null != a) {
                    var u, i;
                    let t = Object.keys(null !== (u = _.default.getCompletedActions(e)) && void 0 !== u ? u : {}),
                        r = null !== (i = d.default.getNewMemberActions(e)) && void 0 !== i ? i : [];
                    c.default.track(T.AnalyticEvents.SERVER_GUIDE_ACTION_COMPLETED, {
                        guild_id: n.guild_id,
                        channel_id: n.id,
                        channel_action_type: a.actionType,
                        has_completed_all: r.reduce((e, n) => e && t.includes(n.channelId), !0)
                    })
                }
                r.default.post({
                    url: T.Endpoints.GUILD_MEMBER_ACTION_UPDATE(e, t)
                })
            };
            async function A(e, t) {
                if (null == e) return !1;
                let n = (0, f.canSeeOnboardingHome)(e);
                if (!n) return !1;
                let r = d.default.getSettings(e);
                return r === d.NO_SETTINGS && (await S(e), r = d.default.getSettings(e)), r !== d.NO_SETTINGS && null != r && (null != r.newMemberActions && null != r.newMemberActions.find(e => e.channelId === t) ? "todo" : null != r.resourceChannels && null != r.resourceChannels.find(e => e.channelId === t) && "resource")
            }
        },
        129092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                WELCOME_MESSAGE_MIN_LENGTH: function() {
                    return s
                },
                WELCOME_MESSAGE_MAX_LENGTH: function() {
                    return c
                },
                NEW_MEMBER_ACTION_TITLE_MIN_LENGTH: function() {
                    return d
                },
                NEW_MEMBER_ACTION_TITLE_MAX_LENGTH: function() {
                    return E
                },
                NEW_MEMBER_ACTION_MAX: function() {
                    return _
                },
                RESOURCE_CHANNEL_TITLE_MIN_LENGTH: function() {
                    return f
                },
                RESOURCE_CHANNEL_TITLE_MAX_LENGTH: function() {
                    return T
                },
                RESOURCE_CHANNEL_DESCRIPTION_MAX_LENGTH: function() {
                    return S
                },
                RESOURCE_CHANNEL_MAX: function() {
                    return h
                },
                NewMemberActionTypes: function() {
                    return l
                },
                newMemberActionFromServer: function() {
                    return p
                },
                resourceChannelFromServer: function() {
                    return R
                },
                settingsFromServer: function() {
                    return g
                },
                settingsToServer: function() {
                    return A
                },
                actionsFromServer: function() {
                    return N
                },
                isWelcomeMessageEmpty: function() {
                    return m
                },
                isSettingsEmpty: function() {
                    return y
                },
                isSettingsValid: function() {
                    return I
                },
                isChannelValidForResourceChannel: function() {
                    return C
                },
                isChannelValidForNewMemberAction: function() {
                    return M
                }
            });
            var r, l, a = n("42203"),
                u = n("449008"),
                o = n("991170"),
                i = n("49111");
            let s = 7,
                c = 300,
                d = 7,
                E = 60,
                _ = 5,
                f = 1,
                T = 30,
                S = 200,
                h = 7;

            function p(e) {
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

            function R(e) {
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

            function g(e) {
                if (null == e) return null;
                let {
                    welcome_message: t,
                    new_member_actions: n,
                    resource_channels: r,
                    enabled: l
                } = e, o = {
                    authorIds: t.author_ids,
                    message: t.message
                }, i = n.filter(e => (0, u.isNotNullish)(a.default.getChannel(e.channel_id))).map(p), s = r.filter(e => (0, u.isNotNullish)(a.default.getChannel(e.channel_id))).map(R);
                return {
                    welcomeMessage: o,
                    newMemberActions: i,
                    resourceChannels: s,
                    enabled: l
                }
            }

            function A(e, t) {
                var n, r;
                if (null == t) return null;
                let {
                    welcomeMessage: l,
                    newMemberActions: o,
                    resourceChannels: i,
                    enabled: s
                } = t, c = {
                    author_ids: null !== (n = null == l ? void 0 : l.authorIds) && void 0 !== n ? n : [],
                    message: null !== (r = null == l ? void 0 : l.message) && void 0 !== r ? r : ""
                }, d = (null != o ? o : []).filter(e => (0, u.isNotNullish)(a.default.getChannel(e.channelId))).map(e => {
                    var t, n, r, l, a, u, o;
                    return {
                        channel_id: e.channelId,
                        action_type: e.actionType,
                        title: e.title,
                        description: e.description,
                        emoji: {
                            id: null !== (l = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== l ? l : void 0,
                            name: null !== (a = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== a ? a : void 0,
                            animated: null !== (u = null === (r = e.emoji) || void 0 === r ? void 0 : r.animated) && void 0 !== u ? u : void 0
                        },
                        icon: null !== (o = e.icon) && void 0 !== o ? o : void 0
                    }
                }), E = (null != i ? i : []).filter(e => (0, u.isNotNullish)(a.default.getChannel(e.channelId))).map(e => {
                    var t, n, r, l, a, u, o;
                    return {
                        channel_id: e.channelId,
                        title: e.title,
                        description: e.description,
                        emoji: {
                            id: null !== (l = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== l ? l : void 0,
                            name: null !== (a = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== a ? a : void 0,
                            animated: null !== (u = null === (r = e.emoji) || void 0 === r ? void 0 : r.animated) && void 0 !== u ? u : void 0
                        },
                        icon: null !== (o = e.icon) && void 0 !== o ? o : void 0
                    }
                });
                return {
                    guild_id: e,
                    welcome_message: c,
                    new_member_actions: d,
                    resource_channels: E,
                    enabled: s
                }
            }(r = l || (l = {}))[r.VIEW = 0] = "VIEW", r[r.CHAT = 1] = "CHAT";
            let N = e => {
                if (null == e) return null;
                let t = {};
                for (let n in e.channel_actions) t[n] = e.channel_actions[n].completed;
                return t
            };

            function m(e) {
                return null == e || (null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)) && !0
            }

            function y(e) {
                return null == e || !!m(e.welcomeMessage) && (null == e.newMemberActions || !(e.newMemberActions.length > 0)) && (null == e.resourceChannels || !(e.resourceChannels.length > 0)) && !0
            }

            function I(e) {
                var t, n;
                return null != e && (!!y(e) || (null === (t = e.welcomeMessage) || void 0 === t ? void 0 : t.message) != null && !(e.welcomeMessage.message.length < s) && (null === (n = e.welcomeMessage) || void 0 === n ? void 0 : n.authorIds) != null && 0 !== e.welcomeMessage.authorIds.length && null != e.newMemberActions && !(e.newMemberActions.length < 3) && !0)
            }

            function C(e) {
                return e.type === i.ChannelTypes.GUILD_TEXT && !o.default.canEveryoneRole(i.Permissions.SEND_MESSAGES, e) && o.default.canEveryoneRole(i.Permissions.VIEW_CHANNEL, e)
            }

            function M(e) {
                switch (e.type) {
                    case i.ChannelTypes.GUILD_TEXT:
                    case i.ChannelTypes.GUILD_ANNOUNCEMENT:
                    case i.ChannelTypes.GUILD_FORUM:
                    case i.ChannelTypes.GUILD_MEDIA:
                        return o.default.canEveryoneRole(i.Permissions.VIEW_CHANNEL, e);
                    default:
                        return !1
                }
            }
        },
        675305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("222007");
            var r = n("446674"),
                l = n("913144");
            let a = {},
                u = {},
                o = new Set;
            class i extends r.default.Store {
                getCompletedActions(e) {
                    return null == e ? null : u[e]
                }
                hasCompletedActionForChannel(e, t) {
                    let n = this.getCompletedActions(e);
                    return null != n && null != n[t]
                }
                getState(e) {
                    return null == e ? {} : {
                        completedActions: u[e],
                        loading: o.has(e)
                    }
                }
            }
            i.displayName = "GuildOnboardingMemberActionStore";
            var s = new i(l.default, {
                GUILD_NEW_MEMBER_ACTIONS_FETCH_START: function(e) {
                    let {
                        guildId: t
                    } = e;
                    o.add(t)
                },
                GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS: function(e) {
                    let {
                        memberActions: t,
                        guildId: n
                    } = e;
                    if (null == t) {
                        u[n] = a;
                        return
                    }
                    u[n] = t, o.delete(n)
                },
                GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    o.delete(t)
                },
                GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (null == u[t]) return !1;
                    delete u[t]
                },
                COMPLETE_NEW_MEMBER_ACTION: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    u = {
                        ...u,
                        [t]: {
                            ...u[t],
                            [n]: !0
                        }
                    }
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    if (null == u[t.id]) return !1;
                    delete u[t.id]
                }
            })
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
                    return o
                }
            });
            var r = n("697218"),
                l = n("49111");

            function a(e) {
                return void 0 !== e && e.type !== l.ChannelTypes.DM
            }

            function u(e) {
                var t, n;
                return null !== (n = null === (t = r.default.getUser(e)) || void 0 === t ? void 0 : t.hasFlag(l.UserFlags.SPAMMER)) && void 0 !== n && n
            }

            function o(e) {
                return u(e.author.id)
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
                }, a.MoreHorizontalIcon, void 0, {
                    size: 24
                })
        },
        746574: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                moveItemFromTo: function() {
                    return i
                },
                default: function() {
                    return s
                }
            }), n("424973"), n("222007");
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
                let i = t.map(r).sort().join(":"),
                    s = n.map(r).sort().join(":");
                if (i !== s) return u.warn("Object IDs in the old ordering and the new ordering are not the same.", i, s), [];
                let c = {};
                for (let e = 0; e < o; e++) c[r(t[e])] = l(t[e]);
                let d = [];
                for (let e = 0; e < o; e++) {
                    let t = r(n[e]),
                        u = c[t],
                        i = a ? e : o - 1 - e;
                    (u !== i || l(n[e]) !== i) && d.push({
                        id: t,
                        position: i
                    })
                }
                return !a && d.reverse(), d
            }

            function i(e, t, n) {
                let r = e[t],
                    l = [...e];
                return l.splice(t, 1), l.splice(n, 0, r), l
            }
            var s = {
                moveItemFromTo: i,
                calculatePositionDeltas: o,
                getPositionUpdates: function(e) {
                    let {
                        objectArray: t,
                        fromPosition: n,
                        toPosition: r,
                        idGetter: a,
                        existingPositionGetter: u,
                        ascending: s = !0
                    } = e;
                    !Array.isArray(t) && (t = l.values(t));
                    let c = i(t, n, r);
                    return o({
                        oldOrdering: t,
                        newOrdering: c,
                        idGetter: a,
                        existingPositionGetter: u,
                        ascending: s
                    })
                }
            }
        },
        751520: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getSearchOptionAnswer: function() {
                    return E
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
                    return p
                },
                getTotalResults: function() {
                    return R
                },
                getQueryFromTokens: function() {
                    return g
                },
                tokenizeQuery: function() {
                    return N
                },
                clearTokenCache: function() {
                    return m
                },
                showDatePicker: function() {
                    return y
                },
                filterHasAnswer: function() {
                    return I
                },
                refreshSearchTokens: function() {
                    return C
                }
            }), n("222007"), n("808653");
            var r = n("917351"),
                l = n.n(r),
                a = n("76385"),
                u = n("955513"),
                o = n("247013"),
                i = n("697218"),
                s = n("299039"),
                c = n("49111"),
                d = n("782340");

            function E(e) {
                switch (e) {
                    case c.SearchTokenTypes.FILTER_FROM:
                        return d.default.Messages.SEARCH_ANSWER_FROM;
                    case c.SearchTokenTypes.FILTER_MENTIONS:
                        return d.default.Messages.SEARCH_ANSWER_MENTIONS;
                    case c.SearchTokenTypes.FILTER_HAS:
                        return d.default.Messages.SEARCH_ANSWER_HAS;
                    case c.SearchTokenTypes.FILTER_BEFORE:
                    case c.SearchTokenTypes.FILTER_ON:
                    case c.SearchTokenTypes.FILTER_AFTER:
                        return d.default.Messages.SEARCH_ANSWER_DATE;
                    case c.SearchTokenTypes.FILTER_IN:
                        return d.default.Messages.SEARCH_ANSWER_IN;
                    case c.SearchTokenTypes.FILTER_FILE_TYPE:
                        return d.default.Messages.SEARCH_ANSWER_FILE_TYPE;
                    case c.SearchTokenTypes.FILTER_FILE_NAME:
                        return d.default.Messages.SEARCH_ANSWER_FILE_NAME;
                    case c.SearchTokenTypes.FILTER_PINNED:
                        return d.default.Messages.SEARCH_ANSWER_BOOLEAN
                }
            }
            let _ = {
                [c.SearchTokenTypes.FILTER_BEFORE]: !0,
                [c.SearchTokenTypes.FILTER_AFTER]: !0,
                [c.SearchTokenTypes.FILTER_ON]: !0
            };

            function f(e, t) {
                if (o.default.didAgree(t)) {
                    let t = i.default.getCurrentUser();
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
                                r && (t.min_id = s.default.fromTimestamp(r)), l && (t.max_id = s.default.fromTimestamp(l));
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

            function p(e, t) {
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

            function R(e) {
                return e.reduce((e, t) => null == t ? e : t.results.length + e, 0)
            }

            function g(e) {
                return null == e ? "" : e.map(e => e.getFullMatch()).join("")
            }
            let A = new a.default;

            function N(e) {
                return A.tokenize(e)
            }

            function m() {
                return A.clearCache()
            }

            function y(e) {
                return null != e ? _[e] : null
            }

            function I(e, t) {
                let n = c.IS_SEARCH_FILTER_TOKEN.test(e.type);
                return (null != t || !n) && (null == t || !n || !!c.IS_SEARCH_ANSWER_TOKEN.test(t.type)) && !0
            }

            function C() {
                (0, u.refreshSearchTokens)(), A.reset(), l(u.default).forOwn((e, t) => A.addRule({
                    type: t,
                    ...e
                }))
            }
        }
    }
]);
//# sourceMappingURL=59459.f0458a563c6692b50b6e.js.map