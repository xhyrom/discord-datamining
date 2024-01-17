(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["27075"], {
        811513: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GroupIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                a = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
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
                        fill: "string" == typeof s ? s : s.css,
                        d: "M14.5 8a3 3 0 1 0-2.7-4.3c-.2.4.06.86.44 1.12a5 5 0 0 1 2.14 3.08c.01.06.06.1.12.1ZM18.44 17.27c.15.43.54.73 1 .73h1.06c.83 0 1.5-.67 1.5-1.5a7.5 7.5 0 0 0-6.5-7.43c-.55-.08-.99.38-1.1.92-.06.3-.15.6-.26.87-.23.58-.05 1.3.47 1.63a9.53 9.53 0 0 1 3.83 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0c0 .83-.67 1.5-1.5 1.5a.2.2 0 0 1-.2-.16c-.2-.96-.56-1.87-.88-2.54-.1-.23-.42-.15-.42.1v2.1a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.32.67-.67 1.58-.88 2.54a.2.2 0 0 1-.2.16A1.5 1.5 0 0 1 2 20.5Z",
                        className: u
                    })
                })
            }
        },
        304983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MoreHorizontalIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                a = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
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
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        789394: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChannelEmojisExperiment: function() {
                    return r
                }
            });
            var l = n("862205");
            let r = (0, l.createExperiment)({
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
        206625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("884691");

            function r(e, t) {
                let n = l.useRef(e);
                return l.useEffect(() => {
                    function e(e) {
                        null != n.current && !n.current.contains(e.target) && t()
                    }
                    return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, [n, t]), n
            }
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
                        u = s(e.match(a.regex), n);
                    if (null != u) {
                        let {
                            cache: e
                        } = a;
                        if (null != e && null != (r = e.get(u[0])) && ((r = new o(r)).start = u.index), null == r) {
                            if (r = new o(u, a.type), null != a.validator && !a.validator(r)) continue;
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
                        u = [];
                    for (; n.length > 0;) {
                        let e = this._getMatch(n, t, a + r.length);
                        null != e ? (null != r && "" !== r && u.push(new o(s(r.match(l), a), this._nonTokenType)), t = e, u.push(e), a += t.length + r.length, n = n.substring(t.length), r = "") : (r += n[0], n = n.substring(1))
                    }
                    return null != r && "" !== r && u.push(new o(s(r.match(l), a), this._nonTokenType)), u
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
            u.NON_TOKEN_TYPE = r, u.Token = o;
            var i = u
        },
        955513: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRandomDateShortcut: function() {
                    return b
                },
                ComponentTypes: function() {
                    return l
                },
                refreshSearchTokens: function() {
                    return Y
                },
                getFilterAutocompletions: function() {
                    return z
                },
                default: function() {
                    return q
                }
            }), n("222007"), n("843762");
            var l, r, a = n("448105"),
                s = n.n(a),
                u = n("917351"),
                o = n.n(u),
                i = n("866227"),
                c = n.n(i),
                d = n("923959"),
                E = n("27618"),
                f = n("744983"),
                _ = n("18494"),
                T = n("162771"),
                h = n("102985"),
                S = n("697218"),
                p = n("25292"),
                R = n("655518"),
                g = n("158998"),
                A = n("49111"),
                I = n("782340");

            function N() {
                return new Set(c.months().map(e => e.toLowerCase()))
            }

            function m() {
                return new Set(c.weekdays().map(e => e.toLowerCase()))
            }

            function C() {
                let e = new Date().getFullYear();
                return new Set(o.range(2015, e + 1).map(e => e.toString()))
            }

            function y(e, t) {
                return [e, e.clone().add(1, t)]
            }

            function M(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = c().startOf(e).add(t, e);
                return y(n, e)
            }

            function v(e, t, n) {
                let l = c(e, t).local();
                return y(l, n)
            }

            function L() {
                return {
                    [I.default.Messages.SEARCH_SHORTCUT_TODAY]: () => M("day"),
                    [I.default.Messages.SEARCH_SHORTCUT_YESTERDAY]: () => M("day", -1),
                    [I.default.Messages.SEARCH_SHORTCUT_WEEK]: () => M("week"),
                    [I.default.Messages.SEARCH_SHORTCUT_MONTH]: () => M("month"),
                    [I.default.Messages.SEARCH_SHORTCUT_YEAR]: () => M("year")
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
                    l = e => null != e ? null == e ? void 0 : e.id : null;
                return null != (t = A.ID_REGEX.test(n) ? n : n === A.ME ? l(S.default.getCurrentUser()) : null != e.getMatch(4) ? l(S.default.findByTag(e.getMatch(4))) : l(S.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData("userId", t), !0)
            }

            function D(e, t) {
                let n, l;
                let r = e.getFullMatch().trim().toLowerCase(),
                    a = L()[r];
                null != a ? [n, l] = a() : N().has(r) ? [n, l] = v(r, "MMMM", "month") : m().has(r) ? [n, l] = v(r, "dddd", "day") : C().has(r) ? [n, l] = v(r, "YYYY", "year") : [n, l] = v(r, A.SEARCH_DATE_FORMAT, "day");
                let s = n.isValid() && l.isValid();
                return !!s && ("before" === t ? (l = n, n = null) : "after" === t && (n = l, l = null), e.setData("start", n), e.setData("end", l), !0)
            }

            function x(e) {
                let t = e.getMatch(1),
                    n = T.default.getGuildId(),
                    l = d.default.getChannels(n)[d.GUILD_SELECTABLE_CHANNELS_KEY].concat(d.default.getChannels(n)[d.GUILD_VOCAL_CHANNELS_KEY]),
                    r = d.default.getTextChannelNameDisambiguations(n),
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

            function U(e) {
                let t = {
                    [I.default.Messages.SEARCH_ANSWER_HAS_LINK]: "link",
                    [I.default.Messages.SEARCH_ANSWER_HAS_EMBED]: "embed",
                    [I.default.Messages.SEARCH_ANSWER_HAS_ATTACHMENT]: "file",
                    [I.default.Messages.SEARCH_ANSWER_HAS_VIDEO]: "video",
                    [I.default.Messages.SEARCH_ANSWER_HAS_IMAGE]: "image",
                    [I.default.Messages.SEARCH_ANSWER_HAS_SOUND]: "sound",
                    [I.default.Messages.SEARCH_ANSWER_HAS_STICKER]: "sticker"
                } [e.getMatch(1)];
                return null != t && "" !== t && (e.setData("has", t), !0)
            }

            function W() {
                return [...Array.from(N()), ...Array.from(m()), ...Array.from(C()), ...Object.keys(L())]
            }

            function b() {
                return o.sample(W())
            }

            function j(e, t, n) {
                return P(e, t, W()).map(e => ({
                    ...e,
                    group: n,
                    key: "".concat(n, "-").concat(e.text)
                }))
            }

            function P(e, t, n) {
                let l = e.toLocaleLowerCase();
                return o(n).filter(e => s(l, e.toLocaleLowerCase())).take(t).map(e => ({
                    text: e
                })).value()
            }

            function G(e, t) {
                let n, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    a = f.default.getSearchType(t);
                e = e.split("#")[0];
                let s = {
                    query: e,
                    limit: l,
                    request: r
                };
                switch (a) {
                    case A.SearchTypes.GUILD:
                        n = p.default.queryGuildUsers({
                            ...s,
                            guildId: t
                        });
                        break;
                    case A.SearchTypes.CHANNEL:
                        n = p.default.queryChannelUsers({
                            ...s,
                            channelId: t
                        });
                        break;
                    case A.SearchTypes.DMS:
                        n = p.default.queryUsers(e, l, !0, r, () => !0);
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

            function B() {
                return f.default.getSearchType() === A.SearchTypes.GUILD
            }

            function Z() {
                return !h.default.hidePersonalInformation
            }
            let V = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
            (r = l || (l = {})).FILTER = "FILTER", r.ANSWER = "ANSWER";
            let K = {};

            function Y() {
                Object.assign(K, function() {
                    let e = [I.default.Messages.SEARCH_ANSWER_HAS_LINK, I.default.Messages.SEARCH_ANSWER_HAS_EMBED, I.default.Messages.SEARCH_ANSWER_HAS_ATTACHMENT, I.default.Messages.SEARCH_ANSWER_HAS_VIDEO, I.default.Messages.SEARCH_ANSWER_HAS_IMAGE, I.default.Messages.SEARCH_ANSWER_HAS_SOUND, I.default.Messages.SEARCH_ANSWER_HAS_STICKER];
                    return {
                        [A.SearchTokenTypes.FILTER_FROM]: {
                            regex: k(I.default.Messages.SEARCH_FILTER_FROM),
                            componentType: "FILTER",
                            key: O(I.default.Messages.SEARCH_FILTER_FROM),
                            plainText: I.default.Messages.SEARCH_FILTER_FROM,
                            validator: Z,
                            getAutocompletions: G
                        },
                        [A.SearchTokenTypes.ANSWER_USERNAME_FROM]: {
                            follows: [A.SearchTokenTypes.FILTER_FROM],
                            regex: V,
                            validator: w,
                            mutable: !0,
                            componentType: "ANSWER",
                            queryKey: "author_id"
                        },
                        [A.SearchTokenTypes.FILTER_MENTIONS]: {
                            regex: k(I.default.Messages.SEARCH_FILTER_MENTIONS),
                            componentType: "FILTER",
                            key: O(I.default.Messages.SEARCH_FILTER_MENTIONS),
                            plainText: I.default.Messages.SEARCH_FILTER_MENTIONS,
                            validator: Z,
                            getAutocompletions: G
                        },
                        [A.SearchTokenTypes.ANSWER_USERNAME_MENTIONS]: {
                            follows: [A.SearchTokenTypes.FILTER_MENTIONS],
                            regex: V,
                            validator: w,
                            mutable: !0,
                            componentType: "ANSWER",
                            queryKey: "mentions"
                        },
                        [A.SearchTokenTypes.FILTER_HAS]: {
                            regex: k(I.default.Messages.SEARCH_FILTER_HAS),
                            componentType: "FILTER",
                            key: O(I.default.Messages.SEARCH_FILTER_HAS),
                            plainText: I.default.Messages.SEARCH_FILTER_HAS,
                            getAutocompletions: (t, n, l) => P(t, l, e)
                        },
                        [A.SearchTokenTypes.ANSWER_HAS]: {
                            regex: RegExp("(?:\\s*-?(".concat(e.map(e => R.default.escape(e)).join("|"), "))"), "i"),
                            follows: [A.SearchTokenTypes.FILTER_HAS],
                            validator: U,
                            componentType: "ANSWER",
                            queryKey: "has"
                        },
                        [A.SearchTokenTypes.FILTER_FILE_TYPE]: {
                            regex: k(I.default.Messages.SEARCH_FILTER_FILE_TYPE),
                            key: O(I.default.Messages.SEARCH_FILTER_FILE_TYPE),
                            plainText: I.default.Messages.SEARCH_FILTER_FILE_TYPE,
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
                            regex: k(I.default.Messages.SEARCH_FILTER_FILE_NAME),
                            key: O(I.default.Messages.SEARCH_FILTER_FILE_NAME),
                            plainText: I.default.Messages.SEARCH_FILTER_FILE_NAME,
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
                            regex: k(I.default.Messages.SEARCH_FILTER_BEFORE),
                            componentType: "FILTER",
                            key: O(I.default.Messages.SEARCH_FILTER_BEFORE),
                            plainText: I.default.Messages.SEARCH_FILTER_BEFORE,
                            getAutocompletions: (e, t, n) => j(e, n, A.SearchTokenTypes.FILTER_BEFORE)
                        },
                        [A.SearchTokenTypes.FILTER_ON]: {
                            regex: k("(".concat(I.default.Messages.SEARCH_FILTER_ON, "|").concat(I.default.Messages.SEARCH_FILTER_DURING, ")")),
                            componentType: "FILTER",
                            key: O(I.default.Messages.SEARCH_FILTER_DURING),
                            plainText: I.default.Messages.SEARCH_FILTER_DURING,
                            getAutocompletions: (e, t, n) => j(e, n, A.SearchTokenTypes.FILTER_ON)
                        },
                        [A.SearchTokenTypes.FILTER_AFTER]: {
                            regex: k(I.default.Messages.SEARCH_FILTER_AFTER),
                            componentType: "FILTER",
                            key: O(I.default.Messages.SEARCH_FILTER_AFTER),
                            plainText: I.default.Messages.SEARCH_FILTER_AFTER,
                            getAutocompletions: (e, t, n) => j(e, n, A.SearchTokenTypes.FILTER_AFTER)
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
                            regex: k(I.default.Messages.SEARCH_FILTER_IN),
                            componentType: "FILTER",
                            key: O(I.default.Messages.SEARCH_FILTER_IN),
                            plainText: I.default.Messages.SEARCH_FILTER_IN,
                            validator: B,
                            getAutocompletions(e, t, n) {
                                "#" === e[0] && (e = e.substring(1));
                                let l = p.default.queryChannels({
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
                                    let e = _.default.getChannelId(t),
                                        n = l.find(t => t.id === e);
                                    null != n && (l.splice(l.indexOf(n), 1), l.unshift(n))
                                }
                                let r = d.default.getTextChannelNameDisambiguations(t);
                                return o(l).take(n).map(e => {
                                    var t, n;
                                    return {
                                        text: "".concat(null !== (n = null === (t = r[e.id]) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : e.name),
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
                            validator: x,
                            queryKey: "channel_id"
                        },
                        [A.SearchTokenTypes.FILTER_PINNED]: {
                            regex: k(I.default.Messages.SEARCH_FILTER_PINNED),
                            componentType: "FILTER",
                            key: O(I.default.Messages.SEARCH_FILTER_PINNED),
                            plainText: I.default.Messages.SEARCH_FILTER_PINNED,
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

            function z(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(K).length;
                return o(K).keys().filter(e => A.IS_SEARCH_FILTER_TOKEN.test(e)).filter(e => null != K[e].key).map(e => ({
                    token: e,
                    text: K[e].key
                })).filter(t => {
                    let {
                        text: n
                    } = t;
                    return s(e.toLowerCase(), n)
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
        347895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchGuildHomeSettings: function() {
                    return h
                },
                fetchNewMemberActions: function() {
                    return S
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
            var l = n("872717"),
                r = n("913144"),
                a = n("819689"),
                s = n("115718"),
                u = n("38654"),
                o = n("144491"),
                i = n("42203"),
                c = n("599110"),
                d = n("698882"),
                E = n("129092"),
                f = n("675305"),
                _ = n("290886"),
                T = n("49111");
            let h = async e => {
                r.default.dispatch({
                    type: "GUILD_HOME_SETTINGS_FETCH_START",
                    guildId: e
                });
                try {
                    let t = await l.default.get({
                            url: T.Endpoints.GUILD_HOME_SETTINGS(e),
                            oldFormErrors: !0
                        }),
                        n = (0, E.settingsFromServer)(t.body);
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
            }, S = async e => {
                if (!u.default.isFullServerPreview(e)) {
                    r.default.dispatch({
                        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START",
                        guildId: e
                    });
                    try {
                        let t = await l.default.get({
                                url: T.Endpoints.GUILD_MEMBER_ACTIONS(e),
                                oldFormErrors: !0
                            }),
                            n = (0, E.actionsFromServer)(t.body);
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
                    E = d.default.getResourceForChannel(e, t);
                null != e && !u.default.isFullServerPreview(e) && null != l && null != E && c.default.track(T.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
                    guild_id: e,
                    channel_id: l.id,
                    server_guide_channel_type: "resource",
                    channel_action_type: -1
                }), n && (0, o.transitionToChannel)(t), a.default.jumpToMessage({
                    channelId: t,
                    messageId: t,
                    flash: !1,
                    jumpType: s.JumpTypes.INSTANT
                })
            }, R = (e, t) => {
                r.default.dispatch({
                    type: "SELECT_NEW_MEMBER_ACTION_CHANNEL",
                    guildId: e,
                    channelId: t
                });
                let n = i.default.getChannel(t),
                    l = d.default.getActionForChannel(e, t);
                null != e && !u.default.isFullServerPreview(e) && null != n && null != l && c.default.track(T.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
                    guild_id: e,
                    channel_id: n.id,
                    server_guide_channel_type: "member action",
                    channel_action_type: l.actionType
                }), (0, o.transitionToChannel)(t)
            }, g = (e, t) => {
                if (r.default.dispatch({
                        type: "COMPLETE_NEW_MEMBER_ACTION",
                        guildId: e,
                        channelId: t
                    }), u.default.isFullServerPreview(e)) return;
                let n = i.default.getChannel(t),
                    a = d.default.getActionForChannel(e, t);
                if (null != n && null != a) {
                    var s, o;
                    let t = Object.keys(null !== (s = f.default.getCompletedActions(e)) && void 0 !== s ? s : {}),
                        l = null !== (o = d.default.getNewMemberActions(e)) && void 0 !== o ? o : [];
                    c.default.track(T.AnalyticEvents.SERVER_GUIDE_ACTION_COMPLETED, {
                        guild_id: n.guild_id,
                        channel_id: n.id,
                        channel_action_type: a.actionType,
                        has_completed_all: l.reduce((e, n) => e && t.includes(n.channelId), !0)
                    })
                }
                l.default.post({
                    url: T.Endpoints.GUILD_MEMBER_ACTION_UPDATE(e, t)
                })
            };
            async function A(e, t) {
                if (null == e) return !1;
                let n = (0, _.canSeeOnboardingHome)(e);
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
                    return d
                },
                NEW_MEMBER_ACTION_TITLE_MAX_LENGTH: function() {
                    return E
                },
                NEW_MEMBER_ACTION_MAX: function() {
                    return f
                },
                RESOURCE_CHANNEL_TITLE_MIN_LENGTH: function() {
                    return _
                },
                RESOURCE_CHANNEL_TITLE_MAX_LENGTH: function() {
                    return T
                },
                RESOURCE_CHANNEL_DESCRIPTION_MAX_LENGTH: function() {
                    return h
                },
                RESOURCE_CHANNEL_MAX: function() {
                    return S
                },
                NewMemberActionTypes: function() {
                    return r
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
                    return I
                },
                isWelcomeMessageEmpty: function() {
                    return N
                },
                isSettingsEmpty: function() {
                    return m
                },
                isSettingsValid: function() {
                    return C
                },
                isChannelValidForResourceChannel: function() {
                    return y
                },
                isChannelValidForNewMemberAction: function() {
                    return M
                }
            });
            var l, r, a = n("42203"),
                s = n("449008"),
                u = n("991170"),
                o = n("49111");
            let i = 7,
                c = 300,
                d = 7,
                E = 60,
                f = 5,
                _ = 1,
                T = 30,
                h = 200,
                S = 7;

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
                    resource_channels: l,
                    enabled: r
                } = e, u = {
                    authorIds: t.author_ids,
                    message: t.message
                }, o = n.filter(e => (0, s.isNotNullish)(a.default.getChannel(e.channel_id))).map(p), i = l.filter(e => (0, s.isNotNullish)(a.default.getChannel(e.channel_id))).map(R);
                return {
                    welcomeMessage: u,
                    newMemberActions: o,
                    resourceChannels: i,
                    enabled: r
                }
            }

            function A(e, t) {
                var n, l;
                if (null == t) return null;
                let {
                    welcomeMessage: r,
                    newMemberActions: u,
                    resourceChannels: o,
                    enabled: i
                } = t, c = {
                    author_ids: null !== (n = null == r ? void 0 : r.authorIds) && void 0 !== n ? n : [],
                    message: null !== (l = null == r ? void 0 : r.message) && void 0 !== l ? l : ""
                }, d = (null != u ? u : []).filter(e => (0, s.isNotNullish)(a.default.getChannel(e.channelId))).map(e => {
                    var t, n, l, r, a, s, u;
                    return {
                        channel_id: e.channelId,
                        action_type: e.actionType,
                        title: e.title,
                        description: e.description,
                        emoji: {
                            id: null !== (r = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== r ? r : void 0,
                            name: null !== (a = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== a ? a : void 0,
                            animated: null !== (s = null === (l = e.emoji) || void 0 === l ? void 0 : l.animated) && void 0 !== s ? s : void 0
                        },
                        icon: null !== (u = e.icon) && void 0 !== u ? u : void 0
                    }
                }), E = (null != o ? o : []).filter(e => (0, s.isNotNullish)(a.default.getChannel(e.channelId))).map(e => {
                    var t, n, l, r, a, s, u;
                    return {
                        channel_id: e.channelId,
                        title: e.title,
                        description: e.description,
                        emoji: {
                            id: null !== (r = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== r ? r : void 0,
                            name: null !== (a = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== a ? a : void 0,
                            animated: null !== (s = null === (l = e.emoji) || void 0 === l ? void 0 : l.animated) && void 0 !== s ? s : void 0
                        },
                        icon: null !== (u = e.icon) && void 0 !== u ? u : void 0
                    }
                });
                return {
                    guild_id: e,
                    welcome_message: c,
                    new_member_actions: d,
                    resource_channels: E,
                    enabled: i
                }
            }(l = r || (r = {}))[l.VIEW = 0] = "VIEW", l[l.CHAT = 1] = "CHAT";
            let I = e => {
                if (null == e) return null;
                let t = {};
                for (let n in e.channel_actions) t[n] = e.channel_actions[n].completed;
                return t
            };

            function N(e) {
                return null == e || (null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)) && !0
            }

            function m(e) {
                return null == e || !!N(e.welcomeMessage) && (null == e.newMemberActions || !(e.newMemberActions.length > 0)) && (null == e.resourceChannels || !(e.resourceChannels.length > 0)) && !0
            }

            function C(e) {
                var t, n;
                return null != e && (!!m(e) || (null === (t = e.welcomeMessage) || void 0 === t ? void 0 : t.message) != null && !(e.welcomeMessage.message.length < i) && (null === (n = e.welcomeMessage) || void 0 === n ? void 0 : n.authorIds) != null && 0 !== e.welcomeMessage.authorIds.length && null != e.newMemberActions && !(e.newMemberActions.length < 3) && !0)
            }

            function y(e) {
                return e.type === o.ChannelTypes.GUILD_TEXT && !u.default.canEveryoneRole(o.Permissions.SEND_MESSAGES, e) && u.default.canEveryoneRole(o.Permissions.VIEW_CHANNEL, e)
            }

            function M(e) {
                switch (e.type) {
                    case o.ChannelTypes.GUILD_TEXT:
                    case o.ChannelTypes.GUILD_ANNOUNCEMENT:
                    case o.ChannelTypes.GUILD_FORUM:
                    case o.ChannelTypes.GUILD_MEDIA:
                        return u.default.canEveryoneRole(o.Permissions.VIEW_CHANNEL, e);
                    default:
                        return !1
                }
            }
        },
        675305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007");
            var l = n("446674"),
                r = n("913144");
            let a = {},
                s = {},
                u = new Set;
            class o extends l.default.Store {
                getCompletedActions(e) {
                    return null == e ? null : s[e]
                }
                hasCompletedActionForChannel(e, t) {
                    let n = this.getCompletedActions(e);
                    return null != n && null != n[t]
                }
                getState(e) {
                    return null == e ? {} : {
                        completedActions: s[e],
                        loading: u.has(e)
                    }
                }
            }
            o.displayName = "GuildOnboardingMemberActionStore";
            var i = new o(r.default, {
                GUILD_NEW_MEMBER_ACTIONS_FETCH_START: function(e) {
                    let {
                        guildId: t
                    } = e;
                    u.add(t)
                },
                GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS: function(e) {
                    let {
                        memberActions: t,
                        guildId: n
                    } = e;
                    if (null == t) {
                        s[n] = a;
                        return
                    }
                    s[n] = t, u.delete(n)
                },
                GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    u.delete(t)
                },
                GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (null == s[t]) return !1;
                    delete s[t]
                },
                COMPLETE_NEW_MEMBER_ACTION: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    s = {
                        ...s,
                        [t]: {
                            ...s[t],
                            [n]: !0
                        }
                    }
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    if (null == s[t.id]) return !1;
                    delete s[t.id]
                }
            })
        },
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return s
                },
                setHotspotOverride: function() {
                    return u
                },
                clearHotspotOverride: function() {
                    return o
                }
            });
            var l = n("913144"),
                r = n("599110"),
                a = n("49111");

            function s(e) {
                r.default.track(a.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), l.default.wait(() => {
                    l.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function u(e, t) {
                l.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function o(e) {
                l.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var l = n("446674"),
                r = n("913144"),
                a = n("197881"),
                s = n("492397");
            let u = new Set,
                o = {};
            class i extends l.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (u = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (o = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && o[e];
                    return !(s.CONFERENCE_MODE_ENABLED || a.ProcessArgs.isDisallowPopupsSet()) && (n || !u.has(e))
                }
                hasHiddenHotspot(e) {
                    return u.has(e)
                }
                getHotspotOverride(e) {
                    return o[e]
                }
                getState() {
                    return {
                        hiddenHotspots: u,
                        hotspotOverrides: o
                    }
                }
            }
            i.displayName = "HotspotStore", i.persistKey = "hotspots", i.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var c = new i(r.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    u = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (u.has(t)) return !1;
                    u.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: n
                    } = e;
                    o[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == o[t]) return !1;
                    delete o[t]
                }
            })
        },
        139321: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HotspotStore: function() {
                    return a.default
                }
            });
            var l = n("533613");
            n.es(l, t);
            var r = n("597517");
            n.es(r, t);
            var a = n("269596")
        },
        654017: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isSpamSupported: function() {
                    return a
                },
                isSpammer: function() {
                    return s
                },
                isSpam: function() {
                    return u
                }
            });
            var l = n("697218"),
                r = n("49111");

            function a(e) {
                return void 0 !== e && e.type !== r.ChannelTypes.DM
            }

            function s(e) {
                var t, n;
                return null !== (n = null === (t = l.default.getUser(e)) || void 0 === t ? void 0 : t.hasFlag(r.UserFlags.SPAMMER)) && void 0 !== n && n
            }

            function u(e) {
                return s(e.author.id)
            }
        },
        42507: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFrecencySettings: function() {
                    return u
                }
            });
            var l = n("884691"),
                r = n("446674"),
                a = n("872173"),
                s = n("374363");

            function u() {
                return l.useEffect(() => {
                    a.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, r.useStateFromStores)([s.default], () => s.default.frecencyWithoutFetchingLatest)
            }
        },
        433487: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                a = n("304983"),
                s = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(u),
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
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                a = n("811513"),
                s = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, s.default)(u),
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
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("414456"),
                a = n.n(r),
                s = n("77078"),
                u = n("254686"),
                o = n("851706");
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
                        className: r = u.wrapper,
                        size: o = i.SIZE_14,
                        selectable: c = !1,
                        children: d,
                        color: E,
                        onClick: f,
                        onContextMenu: _,
                        style: T,
                        title: h,
                        uppercase: S
                    } = e;
                    return (0, l.jsx)(s.H, {
                        role: null != f ? "button" : void 0,
                        onClick: f,
                        onContextMenu: _,
                        id: t,
                        className: a(r, {
                            [u.base]: !0,
                            [o]: !0,
                            [u.selectable]: c,
                            [u.muted]: n,
                            [u.uppercase]: S
                        }),
                        title: h,
                        style: null != E ? {
                            ...T,
                            color: E
                        } : T,
                        children: d
                    })
                };
            c.Sizes = i;
            var d = c
        },
        811305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Sizes: function() {
                    return p
                },
                default: function() {
                    return A
                }
            }), n("424973"), n("222007");
            var l = n("37983"),
                r = n("884691"),
                a = n("414456"),
                s = n.n(a),
                u = n("627445"),
                o = n.n(u),
                i = n("77078"),
                c = n("506885"),
                d = n("981601"),
                E = n("766274"),
                f = n("697218"),
                _ = n("368121"),
                T = n("523096"),
                h = n("587974"),
                S = n("494101");
            let p = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function R(e, t) {
                let n = e instanceof E.default ? e : null != e ? e.user : null;
                return null != n ? n.id : "user-".concat(t)
            }
            class g extends r.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: n = this.defaultRenderUser,
                        size: r,
                        extraDetail: a
                    } = this.props, s = [], u = e.length === t ? e.length : t - 1, o = this.renderMoreUsers(u), i = 0;
                    for (; i < u && i < e.length;) {
                        var c;
                        let t = null == o && null == a && i === e.length - 1,
                            u = n(e[i], t, i);
                        s.push(t ? (0, l.jsx)("div", {
                            className: S.avatarContainer,
                            children: u
                        }, R(null !== (c = e[i]) && void 0 !== c ? c : null, i)) : (0, l.jsx)(h.default, {
                            className: S.avatarContainerMasked,
                            height: r,
                            width: r,
                            mask: h.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: u
                        }, R(e[i], i))), i++
                    }
                    return null != a ? s.push(a) : null != o && s.push(o), s
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: n,
                        hideMoreUsers: a,
                        renderMoreUsers: s,
                        users: u
                    } = this.props, o = Math.min(e, u.length);
                    if (!a) {
                        if (null != n) {
                            if (n >= t) return (0, l.jsx)(r.Fragment, {
                                children: s("".concat(t, "+"), t)
                            }, "more-users");
                            if (n > u.length) {
                                let e = n - u.length;
                                return (0, l.jsx)(r.Fragment, {
                                    children: s("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (o < u.length) {
                            let e = Math.min(u.length - o, 99);
                            return (0, l.jsx)(r.Fragment, {
                                children: s("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, l.jsx)(_.default, {
                        foreground: S.foreground,
                        className: S.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: n,
                        guildId: r,
                        showUserPopout: a,
                        useFallbackUserForPopout: u
                    } = this.props, {
                        popoutUserId: E
                    } = this.state, _ = n.find(e => null != e && e.id === E), T = u && null == f.default.getUser(E);
                    return (0, l.jsx)(i.Popout, {
                        position: "right",
                        preload: null == _ ? void 0 : () => (0, c.default)(_.id, _.getAvatarURL(r, 80), {
                            guildId: r
                        }),
                        shouldShow: !0 === a && null != E,
                        fixed: !0,
                        renderPopout: e => (o(null != E, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, l.jsx)(d.default, {
                            ...this.props,
                            user: T && null != _ ? _ : void 0,
                            ...e,
                            userId: E,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: n => (0, l.jsxs)("div", {
                            className: s(e, S.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.SIZE_24;
                                switch (e) {
                                    case p.SIZE_16:
                                        return S.size16;
                                    case p.SIZE_24:
                                        return S.size24;
                                    case p.SIZE_32:
                                        return S.size32;
                                    case p.SIZE_56:
                                        return S.size56;
                                    default:
                                        return S.size24
                                }
                            }(t)),
                            ref: this._ref,
                            ...n,
                            children: [this.renderIcon(), this.renderUsers()]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        popoutUserId: null
                    }, this._ref = r.createRef(), this.defaultRenderUser = (e, t, n) => {
                        let {
                            showUserPopout: r,
                            guildId: a,
                            size: s
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, l.jsx)("div", {
                                className: S.emptyUser
                            });
                            {
                                let e = (null != n ? n : 0) % T.default.DEFAULT_AVATARS.length,
                                    t = T.default.DEFAULT_AVATARS[e];
                                return (0, l.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: S.avatar
                                })
                            }
                        }
                        let u = (0, l.jsx)("img", {
                            src: e.getAvatarURL(a, s),
                            alt: e.username,
                            className: S.avatar
                        }, e.id);
                        return r ? (0, l.jsx)(i.Clickable, {
                            className: S.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: u
                        }, e.id) : u
                    }
                }
            }
            g.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, l.jsx)("div", {
                        className: S.moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: p.SIZE_24
            };
            var A = g
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
            let s = new a.default("DragAndDropUtils");

            function u(e) {
                let {
                    oldOrdering: t,
                    newOrdering: n,
                    idGetter: l,
                    existingPositionGetter: r,
                    ascending: a = !0
                } = e, u = n.length;
                if (t.length !== u) return s.warn("Arrays are not of the same length!", t, n), [];
                let o = t.map(l).sort().join(":"),
                    i = n.map(l).sort().join(":");
                if (o !== i) return s.warn("Object IDs in the old ordering and the new ordering are not the same.", o, i), [];
                let c = {};
                for (let e = 0; e < u; e++) c[l(t[e])] = r(t[e]);
                let d = [];
                for (let e = 0; e < u; e++) {
                    let t = l(n[e]),
                        s = c[t],
                        o = a ? e : u - 1 - e;
                    (s !== o || r(n[e]) !== o) && d.push({
                        id: t,
                        position: o
                    })
                }
                return !a && d.reverse(), d
            }

            function o(e, t, n) {
                let l = e[t],
                    r = [...e];
                return r.splice(t, 1), r.splice(n, 0, l), r
            }
            var i = {
                moveItemFromTo: o,
                calculatePositionDeltas: u,
                getPositionUpdates: function(e) {
                    let {
                        objectArray: t,
                        fromPosition: n,
                        toPosition: l,
                        idGetter: a,
                        existingPositionGetter: s,
                        ascending: i = !0
                    } = e;
                    !Array.isArray(t) && (t = r.values(t));
                    let c = o(t, n, l);
                    return u({
                        oldOrdering: t,
                        newOrdering: c,
                        idGetter: a,
                        existingPositionGetter: s,
                        ascending: i
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
                    return _
                },
                getSearchQueryFromTokens: function() {
                    return T
                },
                getSelectionScope: function() {
                    return h
                },
                getAutocompleteMode: function() {
                    return S
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
                    return I
                },
                clearTokenCache: function() {
                    return N
                },
                showDatePicker: function() {
                    return m
                },
                filterHasAnswer: function() {
                    return C
                },
                refreshSearchTokens: function() {
                    return y
                }
            }), n("222007"), n("808653");
            var l = n("917351"),
                r = n.n(l),
                a = n("76385"),
                s = n("955513"),
                u = n("247013"),
                o = n("697218"),
                i = n("299039"),
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
            let f = {
                [c.SearchTokenTypes.FILTER_BEFORE]: !0,
                [c.SearchTokenTypes.FILTER_AFTER]: !0,
                [c.SearchTokenTypes.FILTER_ON]: !0
            };

            function _(e, t) {
                if (u.default.didAgree(t)) {
                    let t = o.default.getCurrentUser();
                    null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed)
                }
            }

            function T(e) {
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
                            let t = s.default[e],
                                n = null != t ? t.queryKey : null;
                            return null == n && (n = "content"), n
                        }(n);
                        null == t[a] && (t[a] = new Set);
                        let u = t[a];
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
                    }), Object.entries(t))) l instanceof Set && (t[n] = Array.from(l));
                return t.content && (t.content = t.content.join(" ").trim(), !t.content && delete t.content), t
            }

            function h(e, t, n) {
                let l, r;
                let a = e.find((a, s) => t >= a.start && t <= a.end && n >= a.start && n <= a.end ? (null != e[s + 1] && (r = e[s + 1]), !0) : (l = a, !1));
                return null == a ? null : {
                    previousToken: l,
                    currentToken: a,
                    nextToken: r,
                    focusOffset: t,
                    anchorOffset: n
                }
            }

            function S(e, t) {
                let n;
                e = null != e ? e : {};
                let {
                    currentToken: l,
                    nextToken: r,
                    previousToken: s
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
                return l.type === a.default.NON_TOKEN_TYPE && null != s && c.IS_SEARCH_FILTER_TOKEN.test(s.type) ? {
                    type: c.SearchPopoutModes.FILTER,
                    filter: s.type,
                    token: l
                } : (l.type === a.default.NON_TOKEN_TYPE && (n = l), {
                    type: c.SearchPopoutModes.FILTER_ALL,
                    filter: null,
                    token: n
                })
            }

            function p(e, t) {
                let n = [];
                return r(e).forEach(e => {
                    if (null == e || 0 === e.results.length) return;
                    let l = e.group;
                    n = n.concat(e.results.map(e => {
                        let n = e.text;
                        if (t === c.SearchPopoutModes.FILTER_ALL) {
                            var r;
                            l = null !== (r = e.group) && void 0 !== r ? r : l;
                            let t = s.default[l];
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

            function I(e) {
                return A.tokenize(e)
            }

            function N() {
                return A.clearCache()
            }

            function m(e) {
                return null != e ? f[e] : null
            }

            function C(e, t) {
                let n = c.IS_SEARCH_FILTER_TOKEN.test(e.type);
                return (null != t || !n) && (null == t || !n || !!c.IS_SEARCH_ANSWER_TOKEN.test(t.type)) && !0
            }

            function y() {
                (0, s.refreshSearchTokens)(), A.reset(), r(s.default).forOwn((e, t) => A.addRule({
                    type: t,
                    ...e
                }))
            }
        }
    }
]);
//# sourceMappingURL=27075.fe5dab8c879a0ea889e4.js.map