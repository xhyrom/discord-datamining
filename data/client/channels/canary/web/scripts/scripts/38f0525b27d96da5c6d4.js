(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["27258"], {
        811513: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GroupIcon: function() {
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
                        d: "M14.5 8a3 3 0 1 0-2.701-4.306c-.202.415.057.87.443 1.124A5.006 5.006 0 0 1 14.379 7.9c.013.058.062.1.121.1ZM18.437 17.271c.154.425.544.729.995.729H20.5a1.5 1.5 0 0 0 1.5-1.5 7.502 7.502 0 0 0-6.502-7.434c-.548-.073-.988.386-1.097.927-.06.301-.148.592-.26.871-.233.579-.054 1.291.472 1.628a9.529 9.529 0 0 1 3.824 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0 1.5 1.5 0 0 1-1.5 1.5.202.202 0 0 1-.196-.159 12.379 12.379 0 0 0-.884-2.543c-.108-.23-.42-.149-.42.105V21.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.097c0-.254-.312-.334-.42-.105-.318.673-.67 1.579-.884 2.543A.202.202 0 0 1 3.5 22 1.5 1.5 0 0 1 2 20.5Z",
                        className: o
                    })
                })
            }
        },
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
        206625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("884691");

            function l(e, t) {
                let n = r.useRef(e);
                return r.useEffect(() => {
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
                    return l
                },
                Token: function() {
                    return s
                },
                default: function() {
                    return i
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
                    return x
                },
                ComponentTypes: function() {
                    return r
                },
                refreshSearchTokens: function() {
                    return Z
                },
                getFilterAutocompletions: function() {
                    return Y
                },
                default: function() {
                    return z
                }
            }), n("222007"), n("843762");
            var r, l, a = n("448105"),
                u = n.n(a),
                o = n("917351"),
                s = n.n(o),
                i = n("866227"),
                c = n.n(i),
                d = n("923959"),
                E = n("27618"),
                f = n("744983"),
                _ = n("18494"),
                h = n("162771"),
                T = n("102985"),
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
                return new Set(s.range(2015, e + 1).map(e => e.toString()))
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
                let r = c(e, t).local();
                return y(r, n)
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

            function D(e) {
                return RegExp(O(e), "i")
            }

            function w(e) {
                let t;
                let n = e.getMatch(1),
                    r = e => null != e ? null == e ? void 0 : e.id : null;
                return null != (t = A.ID_REGEX.test(n) ? n : n === A.ME ? r(S.default.getCurrentUser()) : null != e.getMatch(4) ? r(S.default.findByTag(e.getMatch(4))) : r(S.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData("userId", t), !0)
            }

            function U(e, t) {
                let n, r;
                let l = e.getFullMatch().trim().toLowerCase(),
                    a = L()[l];
                null != a ? [n, r] = a() : N().has(l) ? [n, r] = v(l, "MMMM", "month") : m().has(l) ? [n, r] = v(l, "dddd", "day") : C().has(l) ? [n, r] = v(l, "YYYY", "year") : [n, r] = v(l, A.SEARCH_DATE_FORMAT, "day");
                let u = n.isValid() && r.isValid();
                return !!u && ("before" === t ? (r = n, n = null) : "after" === t && (n = r, r = null), e.setData("start", n), e.setData("end", r), !0)
            }

            function k(e) {
                let t = e.getMatch(1),
                    n = h.default.getGuildId(),
                    r = d.default.getChannels(n)[d.GUILD_SELECTABLE_CHANNELS_KEY].concat(d.default.getChannels(n)[d.GUILD_VOCAL_CHANNELS_KEY]),
                    l = d.default.getTextChannelNameDisambiguations(n),
                    a = s.chain(r).map(e => {
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

            function b(e) {
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

            function G() {
                return [...Array.from(N()), ...Array.from(m()), ...Array.from(C()), ...Object.keys(L())]
            }

            function x() {
                return s.sample(G())
            }

            function P(e, t, n) {
                return W(e, t, G()).map(e => ({
                    ...e,
                    group: n,
                    key: "".concat(n, "-").concat(e.text)
                }))
            }

            function W(e, t, n) {
                let r = e.toLocaleLowerCase();
                return s(n).filter(e => u(r, e.toLocaleLowerCase())).take(t).map(e => ({
                    text: e
                })).value()
            }

            function j(e, t) {
                let n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                    l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    a = f.default.getSearchType(t);
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

            function K() {
                return f.default.getSearchType() === A.SearchTypes.GUILD
            }

            function B() {
                return !T.default.hidePersonalInformation
            }
            let V = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
            (l = r || (r = {})).FILTER = "FILTER", l.ANSWER = "ANSWER";
            let q = {};

            function Z() {
                Object.assign(q, function() {
                    let e = [I.default.Messages.SEARCH_ANSWER_HAS_LINK, I.default.Messages.SEARCH_ANSWER_HAS_EMBED, I.default.Messages.SEARCH_ANSWER_HAS_ATTACHMENT, I.default.Messages.SEARCH_ANSWER_HAS_VIDEO, I.default.Messages.SEARCH_ANSWER_HAS_IMAGE, I.default.Messages.SEARCH_ANSWER_HAS_SOUND, I.default.Messages.SEARCH_ANSWER_HAS_STICKER];
                    return {
                        [A.SearchTokenTypes.FILTER_FROM]: {
                            regex: D(I.default.Messages.SEARCH_FILTER_FROM),
                            componentType: "FILTER",
                            key: O(I.default.Messages.SEARCH_FILTER_FROM),
                            validator: B,
                            getAutocompletions: j
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
                            regex: D(I.default.Messages.SEARCH_FILTER_MENTIONS),
                            componentType: "FILTER",
                            key: O(I.default.Messages.SEARCH_FILTER_MENTIONS),
                            validator: B,
                            getAutocompletions: j
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
                            regex: D(I.default.Messages.SEARCH_FILTER_HAS),
                            componentType: "FILTER",
                            key: O(I.default.Messages.SEARCH_FILTER_HAS),
                            getAutocompletions: (t, n, r) => W(t, r, e)
                        },
                        [A.SearchTokenTypes.ANSWER_HAS]: {
                            regex: RegExp("(?:\\s*-?(".concat(e.map(e => R.default.escape(e)).join("|"), "))"), "i"),
                            follows: [A.SearchTokenTypes.FILTER_HAS],
                            validator: b,
                            componentType: "ANSWER",
                            queryKey: "has"
                        },
                        [A.SearchTokenTypes.FILTER_FILE_TYPE]: {
                            regex: D(I.default.Messages.SEARCH_FILTER_FILE_TYPE),
                            key: O(I.default.Messages.SEARCH_FILTER_FILE_TYPE),
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
                            regex: D(I.default.Messages.SEARCH_FILTER_FILE_NAME),
                            key: O(I.default.Messages.SEARCH_FILTER_FILE_NAME),
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
                            regex: D(I.default.Messages.SEARCH_FILTER_BEFORE),
                            componentType: "FILTER",
                            key: O(I.default.Messages.SEARCH_FILTER_BEFORE),
                            getAutocompletions: (e, t, n) => P(e, n, A.SearchTokenTypes.FILTER_BEFORE)
                        },
                        [A.SearchTokenTypes.FILTER_ON]: {
                            regex: D("(".concat(I.default.Messages.SEARCH_FILTER_ON, "|").concat(I.default.Messages.SEARCH_FILTER_DURING, ")")),
                            componentType: "FILTER",
                            key: O(I.default.Messages.SEARCH_FILTER_DURING),
                            getAutocompletions: (e, t, n) => P(e, n, A.SearchTokenTypes.FILTER_ON)
                        },
                        [A.SearchTokenTypes.FILTER_AFTER]: {
                            regex: D(I.default.Messages.SEARCH_FILTER_AFTER),
                            componentType: "FILTER",
                            key: O(I.default.Messages.SEARCH_FILTER_AFTER),
                            getAutocompletions: (e, t, n) => P(e, n, A.SearchTokenTypes.FILTER_AFTER)
                        },
                        [A.SearchTokenTypes.ANSWER_BEFORE]: {
                            regex: F,
                            follows: [A.SearchTokenTypes.FILTER_BEFORE],
                            componentType: "ANSWER",
                            mutable: !0,
                            validator: e => U(e, "before")
                        },
                        [A.SearchTokenTypes.ANSWER_ON]: {
                            regex: F,
                            follows: [A.SearchTokenTypes.FILTER_ON],
                            componentType: "ANSWER",
                            mutable: !0,
                            validator: e => U(e, "on")
                        },
                        [A.SearchTokenTypes.ANSWER_AFTER]: {
                            regex: F,
                            follows: [A.SearchTokenTypes.FILTER_AFTER],
                            componentType: "ANSWER",
                            mutable: !0,
                            validator: e => U(e, "after")
                        },
                        [A.SearchTokenTypes.FILTER_IN]: {
                            regex: D(I.default.Messages.SEARCH_FILTER_IN),
                            componentType: "FILTER",
                            key: O(I.default.Messages.SEARCH_FILTER_IN),
                            validator: K,
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
                                    let e = _.default.getChannelId(t),
                                        n = r.find(t => t.id === e);
                                    null != n && (r.splice(r.indexOf(n), 1), r.unshift(n))
                                }
                                let l = d.default.getTextChannelNameDisambiguations(t);
                                return s(r).take(n).map(e => {
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
                            validator: k,
                            queryKey: "channel_id"
                        },
                        [A.SearchTokenTypes.FILTER_PINNED]: {
                            regex: D(I.default.Messages.SEARCH_FILTER_PINNED),
                            componentType: "FILTER",
                            key: O(I.default.Messages.SEARCH_FILTER_PINNED),
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

            function Y(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(q).length;
                return s(q).keys().filter(e => A.IS_SEARCH_FILTER_TOKEN.test(e)).filter(e => null != q[e].key).map(e => ({
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
        200029: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var r = n("689988"),
                l = n("44574"),
                a = n("512395"),
                u = n("305961"),
                o = n("162771"),
                s = n("718517"),
                i = n("884422"),
                c = n("483038"),
                d = n("49111");
            class E extends r.default {
                maybeLoadFeedForGuild(e) {
                    if (null == e) return !1;
                    let t = (0, a.isChannelHighlightsEnabledForGuild)(e);
                    (function(e) {
                        let t = c.default.getLastFetchedMillis(e);
                        if (null != t && Date.now() - t < 3 * s.default.Millis.HOUR || c.default.isLoading(e)) return !1;
                        let n = u.default.getGuild(e);
                        return null != n && !n.hasFeature(d.GuildFeatures.CHANNEL_HIGHLIGHTS_DISABLED)
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
            var f = new E
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
                s = n("49111");
            let i = new r.default("MemberSafetyElasticSearch");
            async function c(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                if (r > 3) throw Error("Unable to search guild members after max retries");
                let {
                    autoRetry: d = !0,
                    signal: E
                } = n;
                try {
                    var f;
                    let u = await l.default.post({
                        url: s.Endpoints.GUILD_MEMBER_SEARCH(e),
                        body: t,
                        signal: E
                    });
                    if (i.info("JANK searchAllGuildMembers", {
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
                            guild_id: (f = u.body).guild_id,
                            members: f.members,
                            page_result_count: f.page_result_count,
                            total_result_count: f.total_result_count
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
                    return L
                },
                useIsStillIndexingV2: function() {
                    return F
                },
                handleInitializeV2: function() {
                    return H
                },
                handleGuildDeleteV2: function() {
                    return O
                },
                handleSearchStateUpdateV2: function() {
                    return D
                },
                handlePaginationUpdateV2: function() {
                    return w
                },
                handleGuildMemberSearchSuccessV2: function() {
                    return U
                },
                handleGuildMemberSearchStillIndexingV2: function() {
                    return k
                }
            }), n("222007"), n("70102");
            var r, l, a, u, o = n("714617"),
                s = n.n(o),
                i = n("917351"),
                c = n("308503"),
                d = n("811022"),
                E = n("249654"),
                f = n("449008"),
                _ = n("691386"),
                h = n("770115"),
                T = n("490931"),
                S = n("225982"),
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
            let I = (0, c.default)(e => ({}));

            function N(e, t) {
                let n = I.getState()[e];
                return null == n && (n = A(1)), n = {
                    ...n,
                    ...t
                }, I.setState(t => ({
                    ...t,
                    [e]: n
                })), n
            }

            function m(e) {
                return I.getState()[e]
            }

            function C(e) {
                let t = m(e);
                return null == t && N(e, t = A(1)), t
            }

            function y(e) {
                let t = m(e);
                null != t && N(e, {
                    requestState: 3,
                    abortController: null,
                    lastUpdated: Date.now()
                })
            }

            function M(e) {
                var t;
                let n = g(e);
                t = n, I.setState(e => {
                    let n = {
                        ...e
                    };
                    return delete n[t], n
                })
            }(u = l || (l = {}))[u.FIRST_PAGE_CHUNK = 0] = "FIRST_PAGE_CHUNK", u[u.CURRENT_SEARCH_CHUNK = 1] = "CURRENT_SEARCH_CHUNK", u[u.NEXT_SEARCH_CHUNK = 2] = "NEXT_SEARCH_CHUNK", u[u.PREVIOUS_SEARCH_CHUNK = 3] = "PREVIOUS_SEARCH_CHUNK";
            async function v(e) {
                var t, n, r, l;
                let a = p.default.getSearchStateByGuildId(e),
                    u = p.default.getPaginationStateByGuildId(e),
                    o = g(e),
                    c = C(o),
                    [d, A] = function(e, t, n) {
                        var r, l, a, u, o, s;
                        let i = function(e, t) {
                                var n;
                                let {
                                    currentPageChunkNumber: r,
                                    previousPageChunkNumber: l,
                                    nextPageChunkNumber: a
                                } = function(e) {
                                    let t = e.pageSize * e.currentPage,
                                        n = Math.floor(t / _.DEFAULT_SEARCH_CHUNK_LIMIT),
                                        r = Math.floor(e.pageSize * (e.currentPage - 1) / _.DEFAULT_SEARCH_CHUNK_LIMIT),
                                        l = Math.floor(e.pageSize * (e.currentPage + 1) / _.DEFAULT_SEARCH_CHUNK_LIMIT);
                                    return {
                                        currentPageChunkNumber: n,
                                        previousPageChunkNumber: r,
                                        nextPageChunkNumber: l
                                    }
                                }(t), {
                                    previousPagination: u
                                } = C(g(e)), o = t.currentPage, s = null !== (n = null == u ? void 0 : u.currentPage) && void 0 !== n ? n : 0, i = p.default.getElasticSearchPaginationByGuildId(e);
                                switch (!0) {
                                    case null == i:
                                    case r === a && 0 === r:
                                        return 0;
                                    case r === a && r === l:
                                        return 1;
                                    case s < o && r < a:
                                        return 2;
                                    case s > o && r >= l:
                                        if (0 < r) return 3;
                                        return 0;
                                    default:
                                        return 1
                                }
                            }(e, n),
                            c = p.default.getElasticSearchPaginationByGuildId(e);
                        switch (i) {
                            case 0: {
                                let t = p.default.getLastCursorTimestamp(e);
                                return [null, {
                                    limit: _.DEFAULT_SEARCH_CHUNK_LIMIT,
                                    after: {
                                        guild_joined_at: t,
                                        user_id: E.default.fromTimestamp(t)
                                    }
                                }]
                            }
                            case 1:
                                return [null !== (r = t.cursor) && void 0 !== r ? r : null, {
                                    limit: _.DEFAULT_SEARCH_CHUNK_LIMIT,
                                    after: null !== (l = t.cursor) && void 0 !== l ? l : void 0
                                }];
                            case 2:
                                return [null !== (a = null == c ? void 0 : c.after) && void 0 !== a ? a : null, {
                                    limit: _.DEFAULT_SEARCH_CHUNK_LIMIT,
                                    after: null !== (u = null == c ? void 0 : c.after) && void 0 !== u ? u : void 0
                                }];
                            case 3:
                                return [null !== (o = null == c ? void 0 : c.before) && void 0 !== o ? o : null, {
                                    limit: _.DEFAULT_SEARCH_CHUNK_LIMIT,
                                    before: null !== (s = null == c ? void 0 : c.before) && void 0 !== s ? s : void 0
                                }];
                            default:
                                (0, f.assertNever)(i)
                        }
                    }(e, c, u);
                let I = (t = function(e) {
                    var t;
                    let n = {
                            or_query: {},
                            and_query: {}
                        },
                        {
                            query: r
                        } = e;
                    if (null != (t = r) && t.length > 1) {
                        let [e, t] = (0, h.splitQuery)(r);
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
                            gte: Date.now() - T.UNUSUAL_DM_COMPARISON_DELTA
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
                        let n = C(e);
                        return s(n.query, t)
                    }(o, I) && (0, i.isEqual)(d, c.cursor)) return;
                let M = function(e, t, n, r) {
                    let l = m(e);
                    if ((null == l ? void 0 : l.requestState) === 2) {
                        var a;
                        null === (a = l.abortController) || void 0 === a || a.abort()
                    }
                    return N(e, {
                        requestState: 2,
                        abortController: new AbortController,
                        lastUpdated: Date.now(),
                        query: t,
                        cursor: n,
                        previousPagination: r
                    })
                }(o, I, d, u);
                try {
                    ;
                    if (R.info("Making member search request", {
                            query: M.query,
                            guildId: e
                        }), null == M.query) throw Error("Query is null");
                    await (0, S.searchGuildMembers)(e, M.query, {
                        signal: null !== (l = null === (r = M.abortController) || void 0 === r ? void 0 : r.signal) && void 0 !== l ? l : void 0
                    })
                } catch (e) {
                    if (-1 === e.code) return;
                    ! function(e) {
                        let t = m(e);
                        null != t && N(e, {
                            requestState: 0,
                            abortController: null,
                            lastUpdated: Date.now()
                        })
                    }(o);
                    return
                }
                y(o)
            }

            function L(e) {
                return I(t => {
                    var n;
                    let r = g(e);
                    return (null === (n = t[r]) || void 0 === n ? void 0 : n.requestState) === 2
                })
            }

            function F(e) {
                return I(t => {
                    var n;
                    let r = g(e);
                    return (null === (n = t[r]) || void 0 === n ? void 0 : n.requestState) === 4
                })
            }

            function H(e) {
                let {
                    guildId: t
                } = e;
                M(t), v(t)
            }

            function O(e) {
                let {
                    guild: t
                } = e;
                M(t.id)
            }

            function D(e) {
                let {
                    guildId: t
                } = e;
                v(t)
            }

            function w(e) {
                let {
                    guildId: t
                } = e;
                v(t)
            }

            function U(e) {
                let {
                    guildId: t
                } = e, n = g(t);
                y(n)
            }

            function k(e) {
                let {
                    guildId: t
                } = e, n = g(t);
                N(n, {
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
                    return T
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
            var r = n("872717"),
                l = n("913144"),
                a = n("819689"),
                u = n("115718"),
                o = n("38654"),
                s = n("144491"),
                i = n("42203"),
                c = n("599110"),
                d = n("698882"),
                E = n("129092"),
                f = n("675305"),
                _ = n("290886"),
                h = n("49111");
            let T = async e => {
                l.default.dispatch({
                    type: "GUILD_HOME_SETTINGS_FETCH_START",
                    guildId: e
                });
                try {
                    let t = await r.default.get({
                            url: h.Endpoints.GUILD_HOME_SETTINGS(e),
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
            }, S = async e => {
                if (!o.default.isFullServerPreview(e)) {
                    l.default.dispatch({
                        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START",
                        guildId: e
                    });
                    try {
                        let t = await r.default.get({
                                url: h.Endpoints.GUILD_MEMBER_ACTIONS(e),
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
                let r = i.default.getChannel(t),
                    E = d.default.getResourceForChannel(e, t);
                null != e && !o.default.isFullServerPreview(e) && null != r && null != E && c.default.track(h.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
                    guild_id: e,
                    channel_id: r.id,
                    server_guide_channel_type: "resource",
                    channel_action_type: -1
                }), n && (0, s.transitionToChannel)(t), a.default.jumpToMessage({
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
                let n = i.default.getChannel(t),
                    r = d.default.getActionForChannel(e, t);
                null != e && !o.default.isFullServerPreview(e) && null != n && null != r && c.default.track(h.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
                    guild_id: e,
                    channel_id: n.id,
                    server_guide_channel_type: "member action",
                    channel_action_type: r.actionType
                }), (0, s.transitionToChannel)(t)
            }, g = (e, t) => {
                if (l.default.dispatch({
                        type: "COMPLETE_NEW_MEMBER_ACTION",
                        guildId: e,
                        channelId: t
                    }), o.default.isFullServerPreview(e)) return;
                let n = i.default.getChannel(t),
                    a = d.default.getActionForChannel(e, t);
                if (null != n && null != a) {
                    var u, s;
                    let t = Object.keys(null !== (u = f.default.getCompletedActions(e)) && void 0 !== u ? u : {}),
                        r = null !== (s = d.default.getNewMemberActions(e)) && void 0 !== s ? s : [];
                    c.default.track(h.AnalyticEvents.SERVER_GUIDE_ACTION_COMPLETED, {
                        guild_id: n.guild_id,
                        channel_id: n.id,
                        channel_action_type: a.actionType,
                        has_completed_all: r.reduce((e, n) => e && t.includes(n.channelId), !0)
                    })
                }
                r.default.post({
                    url: h.Endpoints.GUILD_MEMBER_ACTION_UPDATE(e, t)
                })
            };
            async function A(e, t) {
                if (null == e) return !1;
                let n = (0, _.canSeeOnboardingHome)(e);
                if (!n) return !1;
                let r = d.default.getSettings(e);
                return r === d.NO_SETTINGS && (await T(e), r = d.default.getSettings(e)), r !== d.NO_SETTINGS && null != r && (null != r.newMemberActions && null != r.newMemberActions.find(e => e.channelId === t) ? "todo" : null != r.resourceChannels && null != r.resourceChannels.find(e => e.channelId === t) && "resource")
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
                    return h
                },
                RESOURCE_CHANNEL_DESCRIPTION_MAX_LENGTH: function() {
                    return T
                },
                RESOURCE_CHANNEL_MAX: function() {
                    return S
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
            var r, l, a = n("42203"),
                u = n("449008"),
                o = n("991170"),
                s = n("49111");
            let i = 7,
                c = 300,
                d = 7,
                E = 60,
                f = 5,
                _ = 1,
                h = 30,
                T = 200,
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
                    resource_channels: r,
                    enabled: l
                } = e, o = {
                    authorIds: t.author_ids,
                    message: t.message
                }, s = n.filter(e => (0, u.isNotNullish)(a.default.getChannel(e.channel_id))).map(p), i = r.filter(e => (0, u.isNotNullish)(a.default.getChannel(e.channel_id))).map(R);
                return {
                    welcomeMessage: o,
                    newMemberActions: s,
                    resourceChannels: i,
                    enabled: l
                }
            }

            function A(e, t) {
                var n, r;
                if (null == t) return null;
                let {
                    welcomeMessage: l,
                    newMemberActions: o,
                    resourceChannels: s,
                    enabled: i
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
                }), E = (null != s ? s : []).filter(e => (0, u.isNotNullish)(a.default.getChannel(e.channelId))).map(e => {
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
                    enabled: i
                }
            }(r = l || (l = {}))[r.VIEW = 0] = "VIEW", r[r.CHAT = 1] = "CHAT";
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
                return e.type === s.ChannelTypes.GUILD_TEXT && !o.default.canEveryoneRole(s.Permissions.SEND_MESSAGES, e) && o.default.canEveryoneRole(s.Permissions.VIEW_CHANNEL, e)
            }

            function M(e) {
                switch (e.type) {
                    case s.ChannelTypes.GUILD_TEXT:
                    case s.ChannelTypes.GUILD_ANNOUNCEMENT:
                    case s.ChannelTypes.GUILD_FORUM:
                    case s.ChannelTypes.GUILD_MEDIA:
                        return o.default.canEveryoneRole(s.Permissions.VIEW_CHANNEL, e);
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
            var r = n("446674"),
                l = n("913144");
            let a = {},
                u = {},
                o = new Set;
            class s extends r.default.Store {
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
            s.displayName = "GuildOnboardingMemberActionStore";
            var i = new s(l.default, {
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
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return u
                },
                setHotspotOverride: function() {
                    return o
                },
                clearHotspotOverride: function() {
                    return s
                }
            });
            var r = n("913144"),
                l = n("599110"),
                a = n("49111");

            function u(e) {
                l.default.track(a.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), r.default.wait(() => {
                    r.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function o(e, t) {
                r.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function s(e) {
                r.default.dispatch({
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
            var r = n("446674"),
                l = n("913144"),
                a = n("197881"),
                u = n("492397");
            let o = new Set,
                s = {};
            class i extends r.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (o = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (s = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && s[e];
                    return !(u.CONFERENCE_MODE_ENABLED || a.ProcessArgs.isDisallowPopupsSet()) && (n || !o.has(e))
                }
                hasHiddenHotspot(e) {
                    return o.has(e)
                }
                getHotspotOverride(e) {
                    return s[e]
                }
                getState() {
                    return {
                        hiddenHotspots: o,
                        hotspotOverrides: s
                    }
                }
            }
            i.displayName = "HotspotStore", i.persistKey = "hotspots", i.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var c = new i(l.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    o = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (o.has(t)) return !1;
                    o.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: n
                    } = e;
                    s[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == s[t]) return !1;
                    delete s[t]
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
            var r = n("533613");
            n.es(r, t);
            var l = n("597517");
            n.es(l, t);
            var a = n("269596")
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
        155207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("469563"),
                a = n("811513"),
                u = n("75196"),
                o = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, u.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, r.jsx)("path", {
                            className: a,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, r.jsx)("path", {
                            className: a,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, r.jsx)("path", {
                            className: a,
                            fill: l,
                            d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                        }), (0, r.jsx)("path", {
                            className: a,
                            fill: l,
                            d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                        })]
                    })
                }, a.GroupIcon)
        },
        713573: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("414456"),
                a = n.n(l),
                u = n("77078"),
                o = n("254686"),
                s = n("851706");
            let i = Object.freeze({
                    SIZE_10: s.size10,
                    SIZE_12: s.size12,
                    SIZE_14: s.size14,
                    SIZE_16: s.size16,
                    SIZE_20: s.size20,
                    SIZE_24: s.size24,
                    SIZE_32: s.size32
                }),
                c = e => {
                    let {
                        id: t,
                        muted: n = !1,
                        className: l = o.wrapper,
                        size: s = i.SIZE_14,
                        selectable: c = !1,
                        children: d,
                        color: E,
                        onClick: f,
                        onContextMenu: _,
                        style: h,
                        title: T,
                        uppercase: S
                    } = e;
                    return (0, r.jsx)(u.H, {
                        role: null != f ? "button" : void 0,
                        onClick: f,
                        onContextMenu: _,
                        id: t,
                        className: a(l, {
                            [o.base]: !0,
                            [s]: !0,
                            [o.selectable]: c,
                            [o.muted]: n,
                            [o.uppercase]: S
                        }),
                        title: T,
                        style: null != E ? {
                            ...h,
                            color: E
                        } : h,
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
            var r = n("37983"),
                l = n("884691"),
                a = n("414456"),
                u = n.n(a),
                o = n("627445"),
                s = n.n(o),
                i = n("77078"),
                c = n("506885"),
                d = n("981601"),
                E = n("766274"),
                f = n("697218"),
                _ = n("368121"),
                h = n("523096"),
                T = n("587974"),
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
            class g extends l.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: n = this.defaultRenderUser,
                        size: l,
                        extraDetail: a
                    } = this.props, u = [], o = e.length === t ? e.length : t - 1, s = this.renderMoreUsers(o), i = 0;
                    for (; i < o && i < e.length;) {
                        var c;
                        let t = null == s && null == a && i === e.length - 1,
                            o = n(e[i], t, i);
                        u.push(t ? (0, r.jsx)("div", {
                            className: S.avatarContainer,
                            children: o
                        }, R(null !== (c = e[i]) && void 0 !== c ? c : null, i)) : (0, r.jsx)(T.default, {
                            className: S.avatarContainerMasked,
                            height: l,
                            width: l,
                            mask: T.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: o
                        }, R(e[i], i))), i++
                    }
                    return null != a ? u.push(a) : null != s && u.push(s), u
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: n,
                        hideMoreUsers: a,
                        renderMoreUsers: u,
                        users: o
                    } = this.props, s = Math.min(e, o.length);
                    if (!a) {
                        if (null != n) {
                            if (n >= t) return (0, r.jsx)(l.Fragment, {
                                children: u("".concat(t, "+"), t)
                            }, "more-users");
                            if (n > o.length) {
                                let e = n - o.length;
                                return (0, r.jsx)(l.Fragment, {
                                    children: u("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (s < o.length) {
                            let e = Math.min(o.length - s, 99);
                            return (0, r.jsx)(l.Fragment, {
                                children: u("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, r.jsx)(_.default, {
                        foreground: S.foreground,
                        className: S.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: n,
                        guildId: l,
                        showUserPopout: a,
                        useFallbackUserForPopout: o
                    } = this.props, {
                        popoutUserId: E
                    } = this.state, _ = n.find(e => null != e && e.id === E), h = o && null == f.default.getUser(E);
                    return (0, r.jsx)(i.Popout, {
                        position: "right",
                        preload: null == _ ? void 0 : () => (0, c.default)(_.id, _.getAvatarURL(l, 80), {
                            guildId: l
                        }),
                        shouldShow: !0 === a && null != E,
                        fixed: !0,
                        renderPopout: e => (s(null != E, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, r.jsx)(d.default, {
                            ...this.props,
                            user: h && null != _ ? _ : void 0,
                            ...e,
                            userId: E,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: n => (0, r.jsxs)("div", {
                            className: u(e, S.container, function() {
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
                    }, this._ref = l.createRef(), this.defaultRenderUser = (e, t, n) => {
                        let {
                            showUserPopout: l,
                            guildId: a,
                            size: u
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, r.jsx)("div", {
                                className: S.emptyUser
                            });
                            {
                                let e = (null != n ? n : 0) % h.default.DEFAULT_AVATARS.length,
                                    t = h.default.DEFAULT_AVATARS[e];
                                return (0, r.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: S.avatar
                                })
                            }
                        }
                        let o = (0, r.jsx)("img", {
                            src: e.getAvatarURL(a, u),
                            alt: e.username,
                            className: S.avatar
                        }, e.id);
                        return l ? (0, r.jsx)(i.Clickable, {
                            className: S.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: o
                        }, e.id) : o
                    }
                }
            }
            g.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, r.jsx)("div", {
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
                    return s
                },
                default: function() {
                    return i
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
                let s = t.map(r).sort().join(":"),
                    i = n.map(r).sort().join(":");
                if (s !== i) return u.warn("Object IDs in the old ordering and the new ordering are not the same.", s, i), [];
                let c = {};
                for (let e = 0; e < o; e++) c[r(t[e])] = l(t[e]);
                let d = [];
                for (let e = 0; e < o; e++) {
                    let t = r(n[e]),
                        u = c[t],
                        s = a ? e : o - 1 - e;
                    (u !== s || l(n[e]) !== s) && d.push({
                        id: t,
                        position: s
                    })
                }
                return !a && d.reverse(), d
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
                    return E
                },
                setIncludeNSFW: function() {
                    return _
                },
                getSearchQueryFromTokens: function() {
                    return h
                },
                getSelectionScope: function() {
                    return T
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
            var r = n("917351"),
                l = n.n(r),
                a = n("76385"),
                u = n("955513"),
                o = n("247013"),
                s = n("697218"),
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
                if (o.default.didAgree(t)) {
                    let t = s.default.getCurrentUser();
                    null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed)
                }
            }

            function h(e) {
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

            function T(e, t, n) {
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

            function S(e, t) {
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
                (0, u.refreshSearchTokens)(), A.reset(), l(u.default).forOwn((e, t) => A.addRule({
                    type: t,
                    ...e
                }))
            }
        }
    }
]);
//# sourceMappingURL=38f0525b27d96da5c6d4.js.map