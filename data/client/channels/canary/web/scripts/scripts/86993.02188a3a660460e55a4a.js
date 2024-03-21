(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["86993"], {
        76385: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_TOKEN_TYPE: function() {
                    return a
                },
                Token: function() {
                    return o
                },
                default: function() {
                    return i
                }
            }), n("222007"), n("702976"), n("424973");
            let l = /.+/g,
                a = "NON_TOKEN";

            function r(e, t, n) {
                if (null == t) return null;
                for (let l = 0; l < t.length; l++) {
                    let a;
                    let r = t[l],
                        s = u(e.match(r.regex), n);
                    if (null != s) {
                        let {
                            cache: e
                        } = r;
                        if (null != e && null != (a = e.get(s[0])) && ((a = new o(a)).start = s.index), null == a) {
                            if (a = new o(s, r.type), null != r.validator && !r.validator(a)) continue;
                            null != e && !(null == e ? void 0 : e.has(s[0])) && e.set(s[0], a)
                        }
                        return a
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
                    this._rules = [], this._followers = {}, this._nonTokenType = null != e ? e : a
                }
                addRule(e) {
                    let t;
                    let {
                        type: n,
                        follows: l,
                        validator: a
                    } = e, {
                        regex: r
                    } = e;
                    if ("^" !== r.source.charAt(0) && (r = new RegExp("^".concat(r.source), r.flags)), null != a && (t = new Map), null == l) {
                        this._rules.push({
                            regex: r,
                            type: n,
                            validator: a,
                            cache: t
                        });
                        return
                    }
                    l.forEach(e => {
                        null == this._followers[e] && (this._followers[e] = []), this._followers[e].push({
                            regex: r,
                            type: n,
                            validator: a,
                            cache: t
                        })
                    })
                }
                tokenize(e) {
                    let t, n = e,
                        a = "",
                        r = 0,
                        s = [];
                    for (; n.length > 0;) {
                        let e = this._getMatch(n, t, r + a.length);
                        null != e ? (null != a && "" !== a && s.push(new o(u(a.match(l), r), this._nonTokenType)), t = e, s.push(e), r += t.length + a.length, n = n.substring(t.length), a = "") : (a += n[0], n = n.substring(1))
                    }
                    return null != a && "" !== a && s.push(new o(u(a.match(l), r), this._nonTokenType)), s
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
                    let a = null != t ? t.type : null;
                    return (null == t ? void 0 : t.end) === n && (l = r(e, this._followers[String(a)], n)), null == l && (l = r(e, this._rules, n)), l
                }
                constructor(e = [], t) {
                    this._rules = [], this._followers = {}, this._nonTokenType = a, this.reset(t), e.forEach(e => this.addRule(e))
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
            s.NON_TOKEN_TYPE = a, s.Token = o;
            var i = s
        },
        955513: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRandomDateShortcut: function() {
                    return x
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
            }), n("222007"), n("843762");
            var l, a, r = n("448105"),
                u = n.n(r),
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
                g = n("49111"),
                N = n("782340");

            function I() {
                return new Set(c.months().map(e => e.toLowerCase()))
            }

            function y() {
                return new Set(c.weekdays().map(e => e.toLowerCase()))
            }

            function m() {
                let e = new Date().getFullYear();
                return new Set(o.range(2015, e + 1).map(e => e.toString()))
            }

            function M(e, t) {
                return [e, e.clone().add(1, t)]
            }

            function C(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = c().startOf(e).add(t, e);
                return M(n, e)
            }

            function L(e, t, n) {
                let l = c(e, t).local();
                return M(l, n)
            }

            function F() {
                return {
                    [N.default.Messages.SEARCH_SHORTCUT_TODAY]: () => C("day"),
                    [N.default.Messages.SEARCH_SHORTCUT_YESTERDAY]: () => C("day", -1),
                    [N.default.Messages.SEARCH_SHORTCUT_WEEK]: () => C("week"),
                    [N.default.Messages.SEARCH_SHORTCUT_MONTH]: () => C("month"),
                    [N.default.Messages.SEARCH_SHORTCUT_YEAR]: () => C("year")
                }
            }
            let v = RegExp("(?:\\s*(".concat("([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})", "|").concat("([0-9]{4})-([0-9]{1,2})", "|").concat("\\d{4}", "|").concat("([^\\d\\s]+)", "))"), "i"),
                H = RegExp("\\s*(true|false)", "i");

            function k(e) {
                return "".concat(e, ":")
            }

            function O(e) {
                return RegExp(k(e), "i")
            }

            function w(e) {
                let t;
                let n = e.getMatch(1),
                    l = e => null != e ? null == e ? void 0 : e.id : null;
                return null != (t = g.ID_REGEX.test(n) ? n : n === g.ME ? l(h.default.getCurrentUser()) : null != e.getMatch(4) ? l(h.default.findByTag(e.getMatch(4))) : l(h.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData("userId", t), !0)
            }

            function D(e, t) {
                let n, l;
                let a = e.getFullMatch().trim().toLowerCase(),
                    r = F()[a];
                null != r ? [n, l] = r() : I().has(a) ? [n, l] = L(a, "MMMM", "month") : y().has(a) ? [n, l] = L(a, "dddd", "day") : m().has(a) ? [n, l] = L(a, "YYYY", "year") : [n, l] = L(a, g.SEARCH_DATE_FORMAT, "day");
                let u = n.isValid() && l.isValid();
                return !!u && ("before" === t ? (l = n, n = null) : "after" === t && (n = l, l = null), e.setData("start", n), e.setData("end", l), !0)
            }

            function W(e) {
                let t = e.getMatch(1),
                    n = f.default.getGuildId(),
                    l = E.default.getChannels(n)[E.GUILD_SELECTABLE_CHANNELS_KEY].concat(E.default.getChannels(n)[E.GUILD_VOCAL_CHANNELS_KEY]),
                    a = E.default.getTextChannelNameDisambiguations(n),
                    r = o.chain(l).map(e => {
                        let {
                            channel: t
                        } = e;
                        return t
                    }).find(e => {
                        var n, l;
                        return t === (null !== (l = null === (n = a[e.id]) || void 0 === n ? void 0 : n.name) && void 0 !== l ? l : e.name)
                    }).value();
                return null != r && (e.setData("channel", r), !0)
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

            function b() {
                return [...Array.from(I()), ...Array.from(y()), ...Array.from(m()), ...Object.keys(F())]
            }

            function x() {
                return o.sample(b())
            }

            function G(e, t, n) {
                return P(e, t, b()).map(e => ({
                    ...e,
                    group: n,
                    key: "".concat(n, "-").concat(e.text)
                }))
            }

            function P(e, t, n) {
                let l = e.toLocaleLowerCase();
                return o(n).filter(e => u(l, e.toLocaleLowerCase())).take(t).map(e => ({
                    text: e
                })).value()
            }

            function j(e, t) {
                let n, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                    a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    r = _.default.getSearchType(t);
                e = e.split("#")[0];
                let u = {
                    query: e,
                    limit: l,
                    request: a
                };
                switch (r) {
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
                        n = R.default.queryUsers(e, l, !0, a, () => !0);
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

            function K() {
                return _.default.getSearchType() === g.SearchTypes.GUILD
            }

            function B() {
                return !S.default.hidePersonalInformation
            }
            let Y = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
            (a = l || (l = {})).FILTER = "FILTER", a.ANSWER = "ANSWER";
            let q = {};

            function V() {
                Object.assign(q, function() {
                    let e = [N.default.Messages.SEARCH_ANSWER_HAS_LINK, N.default.Messages.SEARCH_ANSWER_HAS_EMBED, N.default.Messages.SEARCH_ANSWER_HAS_ATTACHMENT, N.default.Messages.SEARCH_ANSWER_HAS_VIDEO, N.default.Messages.SEARCH_ANSWER_HAS_IMAGE, N.default.Messages.SEARCH_ANSWER_HAS_SOUND, N.default.Messages.SEARCH_ANSWER_HAS_STICKER];
                    return {
                        [g.SearchTokenTypes.FILTER_FROM]: {
                            regex: O(N.default.Messages.SEARCH_FILTER_FROM),
                            componentType: "FILTER",
                            key: k(N.default.Messages.SEARCH_FILTER_FROM),
                            plainText: N.default.Messages.SEARCH_FILTER_FROM,
                            validator: B,
                            getAutocompletions: j
                        },
                        [g.SearchTokenTypes.ANSWER_USERNAME_FROM]: {
                            follows: [g.SearchTokenTypes.FILTER_FROM],
                            regex: Y,
                            validator: w,
                            mutable: !0,
                            componentType: "ANSWER",
                            queryKey: "author_id"
                        },
                        [g.SearchTokenTypes.FILTER_MENTIONS]: {
                            regex: O(N.default.Messages.SEARCH_FILTER_MENTIONS),
                            componentType: "FILTER",
                            key: k(N.default.Messages.SEARCH_FILTER_MENTIONS),
                            plainText: N.default.Messages.SEARCH_FILTER_MENTIONS,
                            validator: B,
                            getAutocompletions: j
                        },
                        [g.SearchTokenTypes.ANSWER_USERNAME_MENTIONS]: {
                            follows: [g.SearchTokenTypes.FILTER_MENTIONS],
                            regex: Y,
                            validator: w,
                            mutable: !0,
                            componentType: "ANSWER",
                            queryKey: "mentions"
                        },
                        [g.SearchTokenTypes.FILTER_HAS]: {
                            regex: O(N.default.Messages.SEARCH_FILTER_HAS),
                            componentType: "FILTER",
                            key: k(N.default.Messages.SEARCH_FILTER_HAS),
                            plainText: N.default.Messages.SEARCH_FILTER_HAS,
                            getAutocompletions: (t, n, l) => P(t, l, e)
                        },
                        [g.SearchTokenTypes.ANSWER_HAS]: {
                            regex: RegExp("(?:\\s*-?(".concat(e.map(e => p.default.escape(e)).join("|"), "))"), "i"),
                            follows: [g.SearchTokenTypes.FILTER_HAS],
                            validator: U,
                            componentType: "ANSWER",
                            queryKey: "has"
                        },
                        [g.SearchTokenTypes.FILTER_FILE_TYPE]: {
                            regex: O(N.default.Messages.SEARCH_FILTER_FILE_TYPE),
                            key: k(N.default.Messages.SEARCH_FILTER_FILE_TYPE),
                            plainText: N.default.Messages.SEARCH_FILTER_FILE_TYPE,
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
                            regex: O(N.default.Messages.SEARCH_FILTER_FILE_NAME),
                            key: k(N.default.Messages.SEARCH_FILTER_FILE_NAME),
                            plainText: N.default.Messages.SEARCH_FILTER_FILE_NAME,
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
                            regex: O(N.default.Messages.SEARCH_FILTER_BEFORE),
                            componentType: "FILTER",
                            key: k(N.default.Messages.SEARCH_FILTER_BEFORE),
                            plainText: N.default.Messages.SEARCH_FILTER_BEFORE,
                            getAutocompletions: (e, t, n) => G(e, n, g.SearchTokenTypes.FILTER_BEFORE)
                        },
                        [g.SearchTokenTypes.FILTER_ON]: {
                            regex: O("(".concat(N.default.Messages.SEARCH_FILTER_ON, "|").concat(N.default.Messages.SEARCH_FILTER_DURING, ")")),
                            componentType: "FILTER",
                            key: k(N.default.Messages.SEARCH_FILTER_DURING),
                            plainText: N.default.Messages.SEARCH_FILTER_DURING,
                            getAutocompletions: (e, t, n) => G(e, n, g.SearchTokenTypes.FILTER_ON)
                        },
                        [g.SearchTokenTypes.FILTER_AFTER]: {
                            regex: O(N.default.Messages.SEARCH_FILTER_AFTER),
                            componentType: "FILTER",
                            key: k(N.default.Messages.SEARCH_FILTER_AFTER),
                            plainText: N.default.Messages.SEARCH_FILTER_AFTER,
                            getAutocompletions: (e, t, n) => G(e, n, g.SearchTokenTypes.FILTER_AFTER)
                        },
                        [g.SearchTokenTypes.ANSWER_BEFORE]: {
                            regex: v,
                            follows: [g.SearchTokenTypes.FILTER_BEFORE],
                            componentType: "ANSWER",
                            mutable: !0,
                            validator: e => D(e, "before")
                        },
                        [g.SearchTokenTypes.ANSWER_ON]: {
                            regex: v,
                            follows: [g.SearchTokenTypes.FILTER_ON],
                            componentType: "ANSWER",
                            mutable: !0,
                            validator: e => D(e, "on")
                        },
                        [g.SearchTokenTypes.ANSWER_AFTER]: {
                            regex: v,
                            follows: [g.SearchTokenTypes.FILTER_AFTER],
                            componentType: "ANSWER",
                            mutable: !0,
                            validator: e => D(e, "after")
                        },
                        [g.SearchTokenTypes.FILTER_IN]: {
                            regex: O(N.default.Messages.SEARCH_FILTER_IN),
                            componentType: "FILTER",
                            key: k(N.default.Messages.SEARCH_FILTER_IN),
                            plainText: N.default.Messages.SEARCH_FILTER_IN,
                            validator: K,
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
                                let a = E.default.getTextChannelNameDisambiguations(t);
                                return o(l).take(n).map(e => {
                                    var t, n;
                                    return {
                                        text: "".concat(null !== (n = null === (t = a[e.id]) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : e.name),
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
                            regex: O(N.default.Messages.SEARCH_FILTER_PINNED),
                            componentType: "FILTER",
                            key: k(N.default.Messages.SEARCH_FILTER_PINNED),
                            plainText: N.default.Messages.SEARCH_FILTER_PINNED,
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

            function X(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(q).length;
                return o(q).keys().filter(e => g.IS_SEARCH_FILTER_TOKEN.test(e)).filter(e => null != q[e].key).map(e => ({
                    token: e,
                    text: q[e].key
                })).filter(t => {
                    let {
                        text: n
                    } = t;
                    return u(e.toLowerCase(), n)
                }).take(t).value()
            }
            var z = q
        },
        578899: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SimpleDeadchatPromptExperiment: function() {
                    return a
                }
            });
            var l = n("862205");
            let a = (0, l.createExperiment)({
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
                    return g
                },
                getBlockForChannelDeletion: function() {
                    return N
                }
            }), n("222007"), n("808653");
            var l = n("872717"),
                a = n("913144"),
                r = n("819689"),
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
                a.default.dispatch({
                    type: "GUILD_HOME_SETTINGS_FETCH_START",
                    guildId: e
                });
                try {
                    let t = await l.default.get({
                            url: S.Endpoints.GUILD_HOME_SETTINGS(e),
                            oldFormErrors: !0
                        }),
                        n = (0, _.settingsFromServer)(t.body);
                    return a.default.dispatch({
                        type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS",
                        guildId: e,
                        homeSettings: n
                    }), n
                } catch (t) {
                    a.default.dispatch({
                        type: "GUILD_HOME_SETTINGS_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, R = async e => {
                if (!s.default.isFullServerPreview(e)) {
                    a.default.dispatch({
                        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START",
                        guildId: e
                    });
                    try {
                        let t = await l.default.get({
                                url: S.Endpoints.GUILD_MEMBER_ACTIONS(e),
                                oldFormErrors: !0
                            }),
                            n = (0, _.actionsFromServer)(t.body);
                        return a.default.dispatch({
                            type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS",
                            guildId: e,
                            memberActions: n
                        }), n
                    } catch (t) {
                        a.default.dispatch({
                            type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL",
                            guildId: e
                        })
                    }
                }
            }, p = function(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                if (a.default.dispatch({
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
                }), n && (0, o.transitionToChannel)(t), r.default.jumpToMessage({
                    channelId: t,
                    messageId: E.default.castChannelIdAsMessageId(t),
                    flash: !1,
                    jumpType: u.JumpTypes.INSTANT
                })
            }, A = (e, t) => {
                a.default.dispatch({
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
            }, g = (e, t) => {
                if (a.default.dispatch({
                        type: "COMPLETE_NEW_MEMBER_ACTION",
                        guildId: e,
                        channelId: t
                    }), s.default.isFullServerPreview(e)) return;
                let n = i.default.getChannel(t),
                    r = d.default.getActionForChannel(e, t);
                if (null != n && null != r) {
                    var u, o;
                    let t = E.default.keys(null !== (u = T.default.getCompletedActions(e)) && void 0 !== u ? u : {}),
                        l = null !== (o = d.default.getNewMemberActions(e)) && void 0 !== o ? o : [];
                    c.default.track(S.AnalyticEvents.SERVER_GUIDE_ACTION_COMPLETED, {
                        guild_id: n.guild_id,
                        channel_id: n.id,
                        channel_action_type: r.actionType,
                        has_completed_all: l.reduce((e, n) => e && t.includes(n.channelId), !0)
                    })
                }
                l.default.post({
                    url: S.Endpoints.GUILD_MEMBER_ACTION_UPDATE(e, t)
                })
            };
            async function N(e, t) {
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
                    return a
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
                    return g
                },
                actionsFromServer: function() {
                    return N
                },
                isWelcomeMessageEmpty: function() {
                    return I
                },
                isSettingsEmpty: function() {
                    return y
                },
                isSettingsValid: function() {
                    return m
                },
                isChannelValidForResourceChannel: function() {
                    return M
                },
                isChannelValidForNewMemberAction: function() {
                    return C
                }
            });
            var l, a, r = n("42203"),
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
                    enabled: a
                } = e, s = {
                    authorIds: t.author_ids,
                    message: t.message
                }, o = n.filter(e => (0, u.isNotNullish)(r.default.getChannel(e.channel_id))).map(R), i = l.filter(e => (0, u.isNotNullish)(r.default.getChannel(e.channel_id))).map(p);
                return {
                    welcomeMessage: s,
                    newMemberActions: o,
                    resourceChannels: i,
                    enabled: a
                }
            }

            function g(e, t) {
                var n, l;
                if (null == t) return null;
                let {
                    welcomeMessage: a,
                    newMemberActions: s,
                    resourceChannels: o,
                    enabled: i
                } = t, c = {
                    author_ids: null !== (n = null == a ? void 0 : a.authorIds) && void 0 !== n ? n : [],
                    message: null !== (l = null == a ? void 0 : a.message) && void 0 !== l ? l : ""
                }, E = (null != s ? s : []).filter(e => (0, u.isNotNullish)(r.default.getChannel(e.channelId))).map(e => {
                    var t, n, l, a, r, u, s;
                    return {
                        channel_id: e.channelId,
                        action_type: e.actionType,
                        title: e.title,
                        description: e.description,
                        emoji: {
                            id: null !== (a = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== a ? a : void 0,
                            name: null !== (r = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== r ? r : void 0,
                            animated: null !== (u = null === (l = e.emoji) || void 0 === l ? void 0 : l.animated) && void 0 !== u ? u : void 0
                        },
                        icon: null !== (s = e.icon) && void 0 !== s ? s : void 0
                    }
                }), d = (null != o ? o : []).filter(e => (0, u.isNotNullish)(r.default.getChannel(e.channelId))).map(e => {
                    var t, n, l, a, r, u, s;
                    return {
                        channel_id: e.channelId,
                        title: e.title,
                        description: e.description,
                        emoji: {
                            id: null !== (a = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== a ? a : void 0,
                            name: null !== (r = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== r ? r : void 0,
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
            }(l = a || (a = {}))[l.VIEW = 0] = "VIEW", l[l.CHAT = 1] = "CHAT";
            let N = e => {
                if (null == e) return null;
                let t = {};
                for (let n in e.channel_actions) t[n] = e.channel_actions[n].completed;
                return t
            };

            function I(e) {
                return null == e || (null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)) && !0
            }

            function y(e) {
                return null == e || !!I(e.welcomeMessage) && (null == e.newMemberActions || !(e.newMemberActions.length > 0)) && (null == e.resourceChannels || !(e.resourceChannels.length > 0)) && !0
            }

            function m(e) {
                var t, n;
                return null != e && (!!y(e) || (null === (t = e.welcomeMessage) || void 0 === t ? void 0 : t.message) != null && !(e.welcomeMessage.message.length < i) && (null === (n = e.welcomeMessage) || void 0 === n ? void 0 : n.authorIds) != null && 0 !== e.welcomeMessage.authorIds.length && null != e.newMemberActions && !(e.newMemberActions.length < 3) && !0)
            }

            function M(e) {
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
                    return r
                },
                isSpammer: function() {
                    return u
                },
                isSpam: function() {
                    return s
                }
            });
            var l = n("697218"),
                a = n("49111");

            function r(e) {
                return void 0 !== e && e.type !== a.ChannelTypes.DM
            }

            function u(e) {
                var t, n;
                return null !== (n = null === (t = l.default.getUser(e)) || void 0 === t ? void 0 : t.hasFlag(a.UserFlags.SPAMMER)) && void 0 !== n && n
            }

            function s(e) {
                return u(e.author.id)
            }
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
                a = n.n(l),
                r = n("605250");
            let u = new r.default("DragAndDropUtils");

            function s(e) {
                let {
                    oldOrdering: t,
                    newOrdering: n,
                    idGetter: l,
                    existingPositionGetter: a,
                    ascending: r = !0
                } = e, s = n.length;
                if (t.length !== s) return u.warn("Arrays are not of the same length!", t, n), [];
                let o = t.map(l).sort().join(":"),
                    i = n.map(l).sort().join(":");
                if (o !== i) return u.warn("Object IDs in the old ordering and the new ordering are not the same.", o, i), [];
                let c = {};
                for (let e = 0; e < s; e++) c[l(t[e])] = a(t[e]);
                let E = [];
                for (let e = 0; e < s; e++) {
                    let t = l(n[e]),
                        u = c[t],
                        o = r ? e : s - 1 - e;
                    (u !== o || a(n[e]) !== o) && E.push({
                        id: t,
                        position: o
                    })
                }
                return !r && E.reverse(), E
            }

            function o(e, t, n) {
                let l = e[t],
                    a = [...e];
                return a.splice(t, 1), a.splice(n, 0, l), a
            }
            var i = {
                moveItemFromTo: o,
                calculatePositionDeltas: s,
                getPositionUpdates: function(e) {
                    let {
                        objectArray: t,
                        fromPosition: n,
                        toPosition: l,
                        idGetter: r,
                        existingPositionGetter: u,
                        ascending: i = !0
                    } = e;
                    !Array.isArray(t) && (t = a.values(t));
                    let c = o(t, n, l);
                    return s({
                        oldOrdering: t,
                        newOrdering: c,
                        idGetter: r,
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
                    return N
                },
                clearTokenCache: function() {
                    return I
                },
                showDatePicker: function() {
                    return y
                },
                filterHasAnswer: function() {
                    return m
                },
                refreshSearchTokens: function() {
                    return M
                }
            }), n("222007"), n("808653");
            var l = n("917351"),
                a = n.n(l),
                r = n("76385"),
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
                                    a = e.getData("end");
                                l && (t.min_id = i.default.fromTimestamp(l)), a && (t.max_id = i.default.fromTimestamp(a));
                                return
                        }
                        let r = function(e) {
                            let t = u.default[e],
                                n = null != t ? t.queryKey : null;
                            return null == n && (n = "content"), n
                        }(n);
                        null == t[r] && (t[r] = new Set);
                        let s = t[r];
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
                let l, a;
                let r = e.find((r, u) => t >= r.start && t <= r.end && n >= r.start && n <= r.end ? (null != e[u + 1] && (a = e[u + 1]), !0) : (l = r, !1));
                return null == r ? null : {
                    previousToken: l,
                    currentToken: r,
                    nextToken: a,
                    focusOffset: t,
                    anchorOffset: n
                }
            }

            function h(e, t) {
                let n;
                e = null != e ? e : {};
                let {
                    currentToken: l,
                    nextToken: a,
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
                    if (null == a || a.type === r.default.NON_TOKEN_TYPE) return {
                        type: c.SearchPopoutModes.FILTER,
                        filter: l.type,
                        token: a
                    };
                    if (null != a && !c.IS_SEARCH_ANSWER_TOKEN.test(a.type)) return {
                        type: c.SearchPopoutModes.FILTER,
                        filter: l.type,
                        token: null
                    }
                }
                return l.type === r.default.NON_TOKEN_TYPE && null != u && c.IS_SEARCH_FILTER_TOKEN.test(u.type) ? {
                    type: c.SearchPopoutModes.FILTER,
                    filter: u.type,
                    token: l
                } : (l.type === r.default.NON_TOKEN_TYPE && (n = l), {
                    type: c.SearchPopoutModes.FILTER_ALL,
                    filter: null,
                    token: n
                })
            }

            function R(e, t) {
                let n = [];
                return a(e).forEach(e => {
                    if (null == e || 0 === e.results.length) return;
                    let l = e.group;
                    n = n.concat(e.results.map(e => {
                        let n = e.text;
                        if (t === c.SearchPopoutModes.FILTER_ALL) {
                            var a;
                            l = null !== (a = e.group) && void 0 !== a ? a : l;
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
            let g = new r.default;

            function N(e) {
                return g.tokenize(e)
            }

            function I() {
                return g.clearCache()
            }

            function y(e) {
                return null != e ? _[e] : null
            }

            function m(e, t) {
                let n = c.IS_SEARCH_FILTER_TOKEN.test(e.type);
                return (null != t || !n) && (null == t || !n || !!c.IS_SEARCH_ANSWER_TOKEN.test(t.type)) && !0
            }

            function M() {
                (0, u.refreshSearchTokens)(), g.reset(), a(u.default).forOwn((e, t) => g.addRule({
                    type: t,
                    ...e
                }))
            }
        }
    }
]);
//# sourceMappingURL=86993.02188a3a660460e55a4a.js.map