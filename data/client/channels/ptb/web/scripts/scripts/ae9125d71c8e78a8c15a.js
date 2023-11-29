(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["45346"], {
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
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, a.default)(o),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, r.jsx)("path", {
                        d: "M14.5 8C16.1569 8 17.5 6.65685 17.5 5C17.5 3.34315 16.1569 2 14.5 2C13.3114 2 12.2843 2.69119 11.7986 3.69355C11.5972 4.10932 11.8557 4.56448 12.2419 4.81816C13.3081 5.51868 14.0904 6.61601 14.3786 7.90013C14.3915 7.95754 14.4412 8 14.5 8Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: s
                    }), (0, r.jsx)("path", {
                        d: "M18.4373 17.2714C18.5906 17.6957 18.9807 18 19.4319 18H20.5C21.3284 18 22 17.3284 22 16.5C22 12.6961 19.1681 9.55362 15.4976 9.06577C14.9501 8.993 14.5104 9.45209 14.4013 9.99348C14.3406 10.2944 14.253 10.5855 14.1409 10.8641C13.9082 11.4429 14.0871 12.1554 14.6125 12.4916C16.3621 13.6108 17.7205 15.2876 18.4373 17.2714Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: s
                    }), (0, r.jsx)("path", {
                        d: "M12.5 9C12.5 10.6569 11.1569 12 9.5 12C7.84315 12 6.5 10.6569 6.5 9C6.5 7.34315 7.84315 6 9.5 6C11.1569 6 12.5 7.34315 12.5 9Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: s
                    }), (0, r.jsx)("path", {
                        d: "M2 20.5C2 16.3579 5.35786 13 9.5 13C13.6421 13 17 16.3579 17 20.5C17 21.3284 16.3284 22 15.5 22C15.4055 22 15.3242 21.9334 15.3038 21.841C15.0908 20.8768 14.7383 19.9711 14.42 19.2977C14.3117 19.0685 14 19.149 14 19.4026V21.5C14 21.7761 13.7761 22 13.5 22H5.5C5.22386 22 5 21.7761 5 21.5V19.4026C5 19.149 4.6883 19.0685 4.57996 19.2977C4.26174 19.9711 3.90923 20.8768 3.69619 21.841C3.6758 21.9334 3.59454 22 3.5 22C2.67157 22 2 21.3284 2 20.5Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: s
                    })]
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
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(o),
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
                        className: s
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
                    return o
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
                        s = u(e.match(a.regex), n);
                    if (null != s) {
                        let {
                            cache: e
                        } = a;
                        if (null != e && null != (l = e.get(s[0])) && ((l = new o(l)).start = s.index), null == l) {
                            if (l = new o(s, a.type), null != a.validator && !a.validator(l)) continue;
                            null != e && !(null == e ? void 0 : e.has(s[0])) && e.set(s[0], l)
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
            class s {
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
                        s = [];
                    for (; n.length > 0;) {
                        let e = this._getMatch(n, t, a + l.length);
                        null != e ? (null != l && "" !== l && s.push(new o(u(l.match(r), a), this._nonTokenType)), t = e, s.push(e), a += t.length + l.length, n = n.substring(t.length), l = "") : (l += n[0], n = n.substring(1))
                    }
                    return null != l && "" !== l && s.push(new o(u(l.match(r), a), this._nonTokenType)), s
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
            s.NON_TOKEN_TYPE = l, s.Token = o;
            var i = s
        },
        955513: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRandomDateShortcut: function() {
                    return G
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
                s = n("917351"),
                o = n.n(s),
                i = n("866227"),
                c = n.n(i),
                d = n("923959"),
                E = n("27618"),
                f = n("744983"),
                _ = n("18494"),
                h = n("162771"),
                S = n("102985"),
                T = n("697218"),
                p = n("25292"),
                R = n("655518"),
                g = n("158998"),
                C = n("49111"),
                m = n("782340");

            function A() {
                return new Set(c.months().map(e => e.toLowerCase()))
            }

            function I() {
                return new Set(c.weekdays().map(e => e.toLowerCase()))
            }

            function N() {
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
                let r = c(e, t).local();
                return y(r, n)
            }

            function L() {
                return {
                    [m.default.Messages.SEARCH_SHORTCUT_TODAY]: () => M("day"),
                    [m.default.Messages.SEARCH_SHORTCUT_YESTERDAY]: () => M("day", -1),
                    [m.default.Messages.SEARCH_SHORTCUT_WEEK]: () => M("week"),
                    [m.default.Messages.SEARCH_SHORTCUT_MONTH]: () => M("month"),
                    [m.default.Messages.SEARCH_SHORTCUT_YEAR]: () => M("year")
                }
            }
            let F = RegExp("(?:\\s*(".concat("([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})", "|").concat("([0-9]{4})-([0-9]{1,2})", "|").concat("\\d{4}", "|").concat("([^\\d\\s]+)", "))"), "i"),
                H = RegExp("\\s*(true|false)", "i");

            function O(e) {
                return "".concat(e, ":")
            }

            function w(e) {
                return RegExp(O(e), "i")
            }

            function k(e) {
                let t;
                let n = e.getMatch(1),
                    r = e => null != e ? null == e ? void 0 : e.id : null;
                return null != (t = C.ID_REGEX.test(n) ? n : n === C.ME ? r(T.default.getCurrentUser()) : null != e.getMatch(4) ? r(T.default.findByTag(e.getMatch(4))) : r(T.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData("userId", t), !0)
            }

            function D(e, t) {
                let n, r;
                let l = e.getFullMatch().trim().toLowerCase(),
                    a = L()[l];
                null != a ? [n, r] = a() : A().has(l) ? [n, r] = v(l, "MMMM", "month") : I().has(l) ? [n, r] = v(l, "dddd", "day") : N().has(l) ? [n, r] = v(l, "YYYY", "year") : [n, r] = v(l, C.SEARCH_DATE_FORMAT, "day");
                let u = n.isValid() && r.isValid();
                return !!u && ("before" === t ? (r = n, n = null) : "after" === t && (n = r, r = null), e.setData("start", n), e.setData("end", r), !0)
            }

            function U(e) {
                let t = e.getMatch(1),
                    n = h.default.getGuildId(),
                    r = d.default.getChannels(n)[d.GUILD_SELECTABLE_CHANNELS_KEY].concat(d.default.getChannels(n)[d.GUILD_VOCAL_CHANNELS_KEY]),
                    l = d.default.getTextChannelNameDisambiguations(n),
                    a = o.chain(r).map(e => {
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
                    [m.default.Messages.SEARCH_ANSWER_HAS_LINK]: "link",
                    [m.default.Messages.SEARCH_ANSWER_HAS_EMBED]: "embed",
                    [m.default.Messages.SEARCH_ANSWER_HAS_ATTACHMENT]: "file",
                    [m.default.Messages.SEARCH_ANSWER_HAS_VIDEO]: "video",
                    [m.default.Messages.SEARCH_ANSWER_HAS_IMAGE]: "image",
                    [m.default.Messages.SEARCH_ANSWER_HAS_SOUND]: "sound",
                    [m.default.Messages.SEARCH_ANSWER_HAS_STICKER]: "sticker"
                } [e.getMatch(1)];
                return null != t && "" !== t && (e.setData("has", t), !0)
            }

            function x() {
                return [...Array.from(A()), ...Array.from(I()), ...Array.from(N()), ...Object.keys(L())]
            }

            function G() {
                return o.sample(x())
            }

            function P(e, t, n) {
                return W(e, t, x()).map(e => ({
                    ...e,
                    group: n,
                    key: "".concat(n, "-").concat(e.text)
                }))
            }

            function W(e, t, n) {
                let r = e.toLocaleLowerCase();
                return o(n).filter(e => u(r, e.toLocaleLowerCase())).take(t).map(e => ({
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
                    case C.SearchTypes.GUILD:
                        n = p.default.queryGuildUsers({
                            ...u,
                            guildId: t
                        });
                        break;
                    case C.SearchTypes.CHANNEL:
                        n = p.default.queryChannelUsers({
                            ...u,
                            channelId: t
                        });
                        break;
                    case C.SearchTypes.DMS:
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

            function B() {
                return f.default.getSearchType() === C.SearchTypes.GUILD
            }

            function V() {
                return !S.default.hidePersonalInformation
            }
            let q = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
            (l = r || (r = {})).FILTER = "FILTER", l.ANSWER = "ANSWER";
            let K = {};

            function Z() {
                Object.assign(K, function() {
                    let e = [m.default.Messages.SEARCH_ANSWER_HAS_LINK, m.default.Messages.SEARCH_ANSWER_HAS_EMBED, m.default.Messages.SEARCH_ANSWER_HAS_ATTACHMENT, m.default.Messages.SEARCH_ANSWER_HAS_VIDEO, m.default.Messages.SEARCH_ANSWER_HAS_IMAGE, m.default.Messages.SEARCH_ANSWER_HAS_SOUND, m.default.Messages.SEARCH_ANSWER_HAS_STICKER];
                    return {
                        [C.SearchTokenTypes.FILTER_FROM]: {
                            regex: w(m.default.Messages.SEARCH_FILTER_FROM),
                            componentType: "FILTER",
                            key: O(m.default.Messages.SEARCH_FILTER_FROM),
                            validator: V,
                            getAutocompletions: j
                        },
                        [C.SearchTokenTypes.ANSWER_USERNAME_FROM]: {
                            follows: [C.SearchTokenTypes.FILTER_FROM],
                            regex: q,
                            validator: k,
                            mutable: !0,
                            componentType: "ANSWER",
                            queryKey: "author_id"
                        },
                        [C.SearchTokenTypes.FILTER_MENTIONS]: {
                            regex: w(m.default.Messages.SEARCH_FILTER_MENTIONS),
                            componentType: "FILTER",
                            key: O(m.default.Messages.SEARCH_FILTER_MENTIONS),
                            validator: V,
                            getAutocompletions: j
                        },
                        [C.SearchTokenTypes.ANSWER_USERNAME_MENTIONS]: {
                            follows: [C.SearchTokenTypes.FILTER_MENTIONS],
                            regex: q,
                            validator: k,
                            mutable: !0,
                            componentType: "ANSWER",
                            queryKey: "mentions"
                        },
                        [C.SearchTokenTypes.FILTER_HAS]: {
                            regex: w(m.default.Messages.SEARCH_FILTER_HAS),
                            componentType: "FILTER",
                            key: O(m.default.Messages.SEARCH_FILTER_HAS),
                            getAutocompletions: (t, n, r) => W(t, r, e)
                        },
                        [C.SearchTokenTypes.ANSWER_HAS]: {
                            regex: RegExp("(?:\\s*-?(".concat(e.map(e => R.default.escape(e)).join("|"), "))"), "i"),
                            follows: [C.SearchTokenTypes.FILTER_HAS],
                            validator: b,
                            componentType: "ANSWER",
                            queryKey: "has"
                        },
                        [C.SearchTokenTypes.FILTER_FILE_TYPE]: {
                            regex: w(m.default.Messages.SEARCH_FILTER_FILE_TYPE),
                            key: O(m.default.Messages.SEARCH_FILTER_FILE_TYPE),
                            componentType: "FILTER"
                        },
                        [C.SearchTokenTypes.ANSWER_FILE_TYPE]: {
                            regex: /(?:\s*([^\s]+))/,
                            follows: [C.SearchTokenTypes.FILTER_FILE_TYPE],
                            mutable: !0,
                            componentType: "ANSWER",
                            queryKey: "attachment_extensions"
                        },
                        [C.SearchTokenTypes.FILTER_FILE_NAME]: {
                            regex: w(m.default.Messages.SEARCH_FILTER_FILE_NAME),
                            key: O(m.default.Messages.SEARCH_FILTER_FILE_NAME),
                            componentType: "FILTER"
                        },
                        [C.SearchTokenTypes.ANSWER_FILE_NAME]: {
                            regex: /(?:\s*([^\s]+)(?=\s))/,
                            follows: [C.SearchTokenTypes.FILTER_FILE_NAME],
                            mutable: !0,
                            componentType: "ANSWER",
                            queryKey: "attachment_filename"
                        },
                        [C.SearchTokenTypes.FILTER_BEFORE]: {
                            regex: w(m.default.Messages.SEARCH_FILTER_BEFORE),
                            componentType: "FILTER",
                            key: O(m.default.Messages.SEARCH_FILTER_BEFORE),
                            getAutocompletions: (e, t, n) => P(e, n, C.SearchTokenTypes.FILTER_BEFORE)
                        },
                        [C.SearchTokenTypes.FILTER_ON]: {
                            regex: w("(".concat(m.default.Messages.SEARCH_FILTER_ON, "|").concat(m.default.Messages.SEARCH_FILTER_DURING, ")")),
                            componentType: "FILTER",
                            key: O(m.default.Messages.SEARCH_FILTER_DURING),
                            getAutocompletions: (e, t, n) => P(e, n, C.SearchTokenTypes.FILTER_ON)
                        },
                        [C.SearchTokenTypes.FILTER_AFTER]: {
                            regex: w(m.default.Messages.SEARCH_FILTER_AFTER),
                            componentType: "FILTER",
                            key: O(m.default.Messages.SEARCH_FILTER_AFTER),
                            getAutocompletions: (e, t, n) => P(e, n, C.SearchTokenTypes.FILTER_AFTER)
                        },
                        [C.SearchTokenTypes.ANSWER_BEFORE]: {
                            regex: F,
                            follows: [C.SearchTokenTypes.FILTER_BEFORE],
                            componentType: "ANSWER",
                            mutable: !0,
                            validator: e => D(e, "before")
                        },
                        [C.SearchTokenTypes.ANSWER_ON]: {
                            regex: F,
                            follows: [C.SearchTokenTypes.FILTER_ON],
                            componentType: "ANSWER",
                            mutable: !0,
                            validator: e => D(e, "on")
                        },
                        [C.SearchTokenTypes.ANSWER_AFTER]: {
                            regex: F,
                            follows: [C.SearchTokenTypes.FILTER_AFTER],
                            componentType: "ANSWER",
                            mutable: !0,
                            validator: e => D(e, "after")
                        },
                        [C.SearchTokenTypes.FILTER_IN]: {
                            regex: w(m.default.Messages.SEARCH_FILTER_IN),
                            componentType: "FILTER",
                            key: O(m.default.Messages.SEARCH_FILTER_IN),
                            validator: B,
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
                                return o(r).take(n).map(e => {
                                    var t, n;
                                    return {
                                        text: "".concat(null !== (n = null === (t = l[e.id]) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : e.name),
                                        channel: e
                                    }
                                }).value()
                            }
                        },
                        [C.SearchTokenTypes.ANSWER_IN]: {
                            regex: /(?:\s*#?([^ ]+))/i,
                            mutable: !0,
                            follows: [C.SearchTokenTypes.FILTER_IN],
                            componentType: "ANSWER",
                            validator: U,
                            queryKey: "channel_id"
                        },
                        [C.SearchTokenTypes.FILTER_PINNED]: {
                            regex: w(m.default.Messages.SEARCH_FILTER_PINNED),
                            componentType: "FILTER",
                            key: O(m.default.Messages.SEARCH_FILTER_PINNED),
                            getAutocompletions: () => [{
                                text: "true"
                            }, {
                                text: "false"
                            }]
                        },
                        [C.SearchTokenTypes.ANSWER_PINNED]: {
                            regex: H,
                            componentType: "ANSWER",
                            follows: [C.SearchTokenTypes.FILTER_PINNED],
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
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(K).length;
                return o(K).keys().filter(e => C.IS_SEARCH_FILTER_TOKEN.test(e)).filter(e => null != K[e].key).map(e => ({
                    token: e,
                    text: K[e].key
                })).filter(t => {
                    let {
                        text: n
                    } = t;
                    return u(e.toLowerCase(), n)
                }).take(t).value()
            }
            var z = K
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
                s = n("828434"),
                o = n("49111");
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
                        url: o.Endpoints.GUILD_MEMBER_SEARCH(e),
                        body: t,
                        signal: E
                    });
                    if (i.info("JANK searchAllGuildMembers", {
                            response: u
                        }), u.status === s.INDEXING_RESPONSE_CODE) {
                        if (null == u.body.retry_after) throw Error("Indexing response did not include retry_after");
                        if (!d) throw Error("Indexing response received but autoRetry is disabled");
                        return await a.default.dispatch({
                            type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING",
                            guildId: e
                        }), await new Promise(e => setTimeout(e, 1e3 * u.body.retry_after)), c(e, t, n, r + 1)
                    }
                    return {
                        type: s.GuildMemberSearchResponseType.SUCCESSFUL_QUERY,
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
                        type: s.GuildMemberSearchResponseType.ERROR,
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
                    return o
                }
            });
            var r = n("811022"),
                l = n("913144"),
                a = n("127421"),
                u = n("828434");
            let s = new r.default("MemberSafetyGuildMemberSearchActionCreators");
            async function o(e, t, n) {
                let r = await (0, a.searchAllGuildMembers)(e, t, n);
                if (r.type === u.GuildMemberSearchResponseType.ERROR) throw r.body;
                let {
                    body: o
                } = r;
                s.info("JANK searchGuildMembers success", {
                    body: o
                }), l.default.dispatch({
                    type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS",
                    guildId: e,
                    members: o.members,
                    page_result_count: o.page_result_count,
                    total_result_count: o.total_result_count
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
                    return w
                },
                handleSearchStateUpdateV2: function() {
                    return k
                },
                handlePaginationUpdateV2: function() {
                    return D
                },
                handleGuildMemberSearchSuccessV2: function() {
                    return U
                },
                handleGuildMemberSearchStillIndexingV2: function() {
                    return b
                }
            }), n("222007"), n("70102");
            var r, l, a, u, s = n("714617"),
                o = n.n(s),
                i = n("917351"),
                c = n("308503"),
                d = n("811022"),
                E = n("249654"),
                f = n("449008"),
                _ = n("691386"),
                h = n("770115"),
                S = n("490931"),
                T = n("225982"),
                p = n("178406");
            let R = new d.default("MemberSafetySearchManagerV2");

            function g(e) {
                return "guild_".concat(e)
            }

            function C(e) {
                return {
                    requestState: e,
                    abortController: null,
                    lastUpdated: Date.now(),
                    query: null,
                    cursor: null,
                    previousPagination: null
                }
            }(a = r || (r = {}))[a.FAILED = 0] = "FAILED", a[a.UNFETCHED = 1] = "UNFETCHED", a[a.PENDING = 2] = "PENDING", a[a.SUCCEEDED = 3] = "SUCCEEDED", a[a.STILL_INDEXING = 4] = "STILL_INDEXING";
            let m = (0, c.default)(e => ({}));

            function A(e, t) {
                let n = m.getState()[e];
                return null == n && (n = C(1)), n = {
                    ...n,
                    ...t
                }, m.setState(t => ({
                    ...t,
                    [e]: n
                })), n
            }

            function I(e) {
                return m.getState()[e]
            }

            function N(e) {
                let t = I(e);
                return null == t && A(e, t = C(1)), t
            }

            function y(e) {
                let t = I(e);
                null != t && A(e, {
                    requestState: 3,
                    abortController: null,
                    lastUpdated: Date.now()
                })
            }

            function M(e) {
                var t;
                let n = g(e);
                t = n, m.setState(e => {
                    let n = {
                        ...e
                    };
                    return delete n[t], n
                })
            }

            function v(e, t) {
                return Math.floor(Math.max(e - 1, 0) / t)
            }(u = l || (l = {}))[u.FIRST_PAGE_CHUNK = 0] = "FIRST_PAGE_CHUNK", u[u.CURRENT_SEARCH_CHUNK = 1] = "CURRENT_SEARCH_CHUNK", u[u.NEXT_SEARCH_CHUNK = 2] = "NEXT_SEARCH_CHUNK", u[u.PREVIOUS_SEARCH_CHUNK = 3] = "PREVIOUS_SEARCH_CHUNK";
            async function L(e) {
                var t, n, r, l;
                let a = p.default.getSearchStateByGuildId(e),
                    u = p.default.getPaginationStateByGuildId(e),
                    s = g(e),
                    c = N(s),
                    [d, C] = function(e, t, n) {
                        var r, l, a, u, s, o;
                        let i = function(e, t) {
                                var n;
                                let {
                                    currentPageChunkNumber: r,
                                    previousPageChunkNumber: l,
                                    nextPageChunkNumber: a
                                } = function(e) {
                                    let t = (0, _.getSearchChunkLimit)(e),
                                        n = e.pageSize * (e.currentPage - 1),
                                        r = e.pageSize * e.currentPage,
                                        l = e.pageSize * (e.currentPage + 1);
                                    return {
                                        previousPageChunkNumber: v(n, t),
                                        currentPageChunkNumber: v(r, t),
                                        nextPageChunkNumber: v(l, t)
                                    }
                                }(t), {
                                    previousPagination: u
                                } = N(g(e)), s = t.currentPage, o = null !== (n = null == u ? void 0 : u.currentPage) && void 0 !== n ? n : 0, i = p.default.getElasticSearchPaginationByGuildId(e);
                                switch (!0) {
                                    case null == i:
                                    case r === a && 0 === r:
                                        return 0;
                                    case r === a && r === l:
                                        return 1;
                                    case o < s && r < a:
                                        return 2;
                                    case o > s && r >= l:
                                        if (0 < r) return 3;
                                        return 0;
                                    default:
                                        return 1
                                }
                            }(e, n),
                            c = p.default.getElasticSearchPaginationByGuildId(e),
                            d = (0, _.getSearchChunkLimit)(n);
                        switch (i) {
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
                                return [null !== (s = null == c ? void 0 : c.before) && void 0 !== s ? s : null, {
                                    limit: d,
                                    before: null !== (o = null == c ? void 0 : c.before) && void 0 !== o ? o : void 0
                                }];
                            default:
                                (0, f.assertNever)(i)
                        }
                    }(e, c, u);
                let m = (t = function(e) {
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
                            gte: Date.now() - S.UNUSUAL_DM_COMPARISON_DELTA
                        }
                    }), a && (u.communication_disabled_until = {
                        range: {
                            gte: Date.now()
                        }
                    }), Object.keys(u).length > 0 && (n.or_query.safety_signals = u);
                    let {
                        selectedRoleIds: s
                    } = e;
                    return s.size > 0 && (n.and_query.role_ids = {
                        and_query: Array.from(s)
                    }), n
                }(a), null == (n = C) ? t : {
                    ...t,
                    ...n
                });
                if (function(e, t) {
                        let n = N(e);
                        return o(n.query, t)
                    }(s, m) && (0, i.isEqual)(d, c.cursor)) return;
                let M = function(e, t, n, r) {
                    let l = I(e);
                    if ((null == l ? void 0 : l.requestState) === 2) {
                        var a;
                        null === (a = l.abortController) || void 0 === a || a.abort()
                    }
                    return A(e, {
                        requestState: 2,
                        abortController: new AbortController,
                        lastUpdated: Date.now(),
                        query: t,
                        cursor: n,
                        previousPagination: r
                    })
                }(s, m, d, u);
                try {
                    ;
                    if (R.info("Making member search request", {
                            query: M.query,
                            guildId: e
                        }), null == M.query) throw Error("Query is null");
                    await (0, T.searchGuildMembers)(e, M.query, {
                        signal: null !== (l = null === (r = M.abortController) || void 0 === r ? void 0 : r.signal) && void 0 !== l ? l : void 0
                    })
                } catch (e) {
                    if (-1 === e.code) return;
                    ! function(e) {
                        let t = I(e);
                        null != t && A(e, {
                            requestState: 0,
                            abortController: null,
                            lastUpdated: Date.now()
                        })
                    }(s);
                    return
                }
                y(s)
            }

            function F(e) {
                return m(t => {
                    var n;
                    let r = g(e);
                    return (null === (n = t[r]) || void 0 === n ? void 0 : n.requestState) === 2
                })
            }

            function H(e) {
                return m(t => {
                    var n;
                    let r = g(e);
                    return (null === (n = t[r]) || void 0 === n ? void 0 : n.requestState) === 4
                })
            }

            function O(e) {
                let {
                    guildId: t
                } = e;
                M(t), L(t)
            }

            function w(e) {
                let {
                    guild: t
                } = e;
                M(t.id)
            }

            function k(e) {
                let {
                    guildId: t
                } = e;
                L(t)
            }

            function D(e) {
                let {
                    guildId: t
                } = e;
                L(t)
            }

            function U(e) {
                let {
                    guildId: t
                } = e, n = g(t);
                y(n)
            }

            function b(e) {
                let {
                    guildId: t
                } = e, n = g(t);
                A(n, {
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
                    return T
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
                    return C
                }
            }), n("808653");
            var r = n("872717"),
                l = n("913144"),
                a = n("819689"),
                u = n("115718"),
                s = n("38654"),
                o = n("144491"),
                i = n("42203"),
                c = n("599110"),
                d = n("698882"),
                E = n("129092"),
                f = n("675305"),
                _ = n("290886"),
                h = n("49111");
            let S = async e => {
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
            }, T = async e => {
                if (!s.default.isFullServerPreview(e)) {
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
                null != e && !s.default.isFullServerPreview(e) && null != r && null != E && c.default.track(h.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
                    guild_id: e,
                    channel_id: r.id,
                    server_guide_channel_type: "resource",
                    channel_action_type: -1
                }), n && (0, o.transitionToChannel)(t), a.default.jumpToMessage({
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
                null != e && !s.default.isFullServerPreview(e) && null != n && null != r && c.default.track(h.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
                    guild_id: e,
                    channel_id: n.id,
                    server_guide_channel_type: "member action",
                    channel_action_type: r.actionType
                }), (0, o.transitionToChannel)(t)
            }, g = (e, t) => {
                if (l.default.dispatch({
                        type: "COMPLETE_NEW_MEMBER_ACTION",
                        guildId: e,
                        channelId: t
                    }), s.default.isFullServerPreview(e)) return;
                let n = i.default.getChannel(t),
                    a = d.default.getActionForChannel(e, t);
                if (null != n && null != a) {
                    var u, o;
                    let t = Object.keys(null !== (u = f.default.getCompletedActions(e)) && void 0 !== u ? u : {}),
                        r = null !== (o = d.default.getNewMemberActions(e)) && void 0 !== o ? o : [];
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
            async function C(e, t) {
                if (null == e) return !1;
                let n = (0, _.canSeeOnboardingHome)(e);
                if (!n) return !1;
                let r = d.default.getSettings(e);
                return r === d.NO_SETTINGS && (await S(e), r = d.default.getSettings(e)), r !== d.NO_SETTINGS && null != r && (null != r.newMemberActions && null != r.newMemberActions.find(e => e.channelId === t) ? "todo" : null != r.resourceChannels && null != r.resourceChannels.find(e => e.channelId === t) && "resource")
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
                    return S
                },
                RESOURCE_CHANNEL_MAX: function() {
                    return T
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
                    return C
                },
                actionsFromServer: function() {
                    return m
                },
                isWelcomeMessageEmpty: function() {
                    return A
                },
                isSettingsEmpty: function() {
                    return I
                },
                isSettingsValid: function() {
                    return N
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
                s = n("991170"),
                o = n("49111");
            let i = 7,
                c = 300,
                d = 7,
                E = 60,
                f = 5,
                _ = 1,
                h = 30,
                S = 200,
                T = 7;

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
                } = e, s = {
                    authorIds: t.author_ids,
                    message: t.message
                }, o = n.filter(e => (0, u.isNotNullish)(a.default.getChannel(e.channel_id))).map(p), i = r.filter(e => (0, u.isNotNullish)(a.default.getChannel(e.channel_id))).map(R);
                return {
                    welcomeMessage: s,
                    newMemberActions: o,
                    resourceChannels: i,
                    enabled: l
                }
            }

            function C(e, t) {
                var n, r;
                if (null == t) return null;
                let {
                    welcomeMessage: l,
                    newMemberActions: s,
                    resourceChannels: o,
                    enabled: i
                } = t, c = {
                    author_ids: null !== (n = null == l ? void 0 : l.authorIds) && void 0 !== n ? n : [],
                    message: null !== (r = null == l ? void 0 : l.message) && void 0 !== r ? r : ""
                }, d = (null != s ? s : []).filter(e => (0, u.isNotNullish)(a.default.getChannel(e.channelId))).map(e => {
                    var t, n, r, l, a, u, s;
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
                        icon: null !== (s = e.icon) && void 0 !== s ? s : void 0
                    }
                }), E = (null != o ? o : []).filter(e => (0, u.isNotNullish)(a.default.getChannel(e.channelId))).map(e => {
                    var t, n, r, l, a, u, s;
                    return {
                        channel_id: e.channelId,
                        title: e.title,
                        description: e.description,
                        emoji: {
                            id: null !== (l = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== l ? l : void 0,
                            name: null !== (a = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== a ? a : void 0,
                            animated: null !== (u = null === (r = e.emoji) || void 0 === r ? void 0 : r.animated) && void 0 !== u ? u : void 0
                        },
                        icon: null !== (s = e.icon) && void 0 !== s ? s : void 0
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
            let m = e => {
                if (null == e) return null;
                let t = {};
                for (let n in e.channel_actions) t[n] = e.channel_actions[n].completed;
                return t
            };

            function A(e) {
                return null == e || (null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)) && !0
            }

            function I(e) {
                return null == e || !!A(e.welcomeMessage) && (null == e.newMemberActions || !(e.newMemberActions.length > 0)) && (null == e.resourceChannels || !(e.resourceChannels.length > 0)) && !0
            }

            function N(e) {
                var t, n;
                return null != e && (!!I(e) || (null === (t = e.welcomeMessage) || void 0 === t ? void 0 : t.message) != null && !(e.welcomeMessage.message.length < i) && (null === (n = e.welcomeMessage) || void 0 === n ? void 0 : n.authorIds) != null && 0 !== e.welcomeMessage.authorIds.length && null != e.newMemberActions && !(e.newMemberActions.length < 3) && !0)
            }

            function y(e) {
                return e.type === o.ChannelTypes.GUILD_TEXT && !s.default.canEveryoneRole(o.Permissions.SEND_MESSAGES, e) && s.default.canEveryoneRole(o.Permissions.VIEW_CHANNEL, e)
            }

            function M(e) {
                switch (e.type) {
                    case o.ChannelTypes.GUILD_TEXT:
                    case o.ChannelTypes.GUILD_ANNOUNCEMENT:
                    case o.ChannelTypes.GUILD_FORUM:
                    case o.ChannelTypes.GUILD_MEDIA:
                        return s.default.canEveryoneRole(o.Permissions.VIEW_CHANNEL, e);
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
                s = new Set;
            class o extends r.default.Store {
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
                        loading: s.has(e)
                    }
                }
            }
            o.displayName = "GuildOnboardingMemberActionStore";
            var i = new o(l.default, {
                GUILD_NEW_MEMBER_ACTIONS_FETCH_START: function(e) {
                    let {
                        guildId: t
                    } = e;
                    s.add(t)
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
                    u[n] = t, s.delete(n)
                },
                GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    s.delete(t)
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
                    return s
                },
                clearHotspotOverride: function() {
                    return o
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

            function s(e, t) {
                r.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function o(e) {
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
            let s = new Set,
                o = {};
            class i extends r.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (s = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (o = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && o[e];
                    return !(u.CONFERENCE_MODE_ENABLED || a.ProcessArgs.isDisallowPopupsSet()) && (n || !s.has(e))
                }
                hasHiddenHotspot(e) {
                    return s.has(e)
                }
                getHotspotOverride(e) {
                    return o[e]
                }
                getState() {
                    return {
                        hiddenHotspots: s,
                        hotspotOverrides: o
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
                    s = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (s.has(t)) return !1;
                    s.add(t)
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
            var r = n("533613");
            n.es(r, t);
            var l = n("597517");
            n.es(l, t);
            var a = n("269596")
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
            var r = n("697218"),
                l = n("49111");

            function a(e) {
                return void 0 !== e && e.type !== l.ChannelTypes.DM
            }

            function u(e) {
                var t, n;
                return null !== (n = null === (t = r.default.getUser(e)) || void 0 === t ? void 0 : t.hasFlag(l.UserFlags.SPAMMER)) && void 0 !== n && n
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
            var r = n("37983");
            n("884691");
            var l = n("469563"),
                a = n("304983"),
                u = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, u.default)(s),
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
        155207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("469563"),
                a = n("811513"),
                u = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...s
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, u.default)(s),
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
            var r = n("37983");
            n("884691");
            var l = n("414456"),
                a = n.n(l),
                u = n("77078"),
                s = n("254686"),
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
                        className: l = s.wrapper,
                        size: o = i.SIZE_14,
                        selectable: c = !1,
                        children: d,
                        color: E,
                        onClick: f,
                        onContextMenu: _,
                        style: h,
                        title: S,
                        uppercase: T
                    } = e;
                    return (0, r.jsx)(u.H, {
                        role: null != f ? "button" : void 0,
                        onClick: f,
                        onContextMenu: _,
                        id: t,
                        className: a(l, {
                            [s.base]: !0,
                            [o]: !0,
                            [s.selectable]: c,
                            [s.muted]: n,
                            [s.uppercase]: T
                        }),
                        title: S,
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
                    return C
                }
            }), n("424973"), n("222007");
            var r = n("37983"),
                l = n("884691"),
                a = n("414456"),
                u = n.n(a),
                s = n("627445"),
                o = n.n(s),
                i = n("77078"),
                c = n("506885"),
                d = n("981601"),
                E = n("766274"),
                f = n("697218"),
                _ = n("368121"),
                h = n("523096"),
                S = n("587974"),
                T = n("494101");
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
                    } = this.props, u = [], s = e.length === t ? e.length : t - 1, o = this.renderMoreUsers(s), i = 0;
                    for (; i < s && i < e.length;) {
                        var c;
                        let t = null == o && null == a && i === e.length - 1,
                            s = n(e[i], t, i);
                        u.push(t ? (0, r.jsx)("div", {
                            className: T.avatarContainer,
                            children: s
                        }, R(null !== (c = e[i]) && void 0 !== c ? c : null, i)) : (0, r.jsx)(S.default, {
                            className: T.avatarContainerMasked,
                            height: l,
                            width: l,
                            mask: S.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: s
                        }, R(e[i], i))), i++
                    }
                    return null != a ? u.push(a) : null != o && u.push(o), u
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: n,
                        hideMoreUsers: a,
                        renderMoreUsers: u,
                        users: s
                    } = this.props, o = Math.min(e, s.length);
                    if (!a) {
                        if (null != n) {
                            if (n >= t) return (0, r.jsx)(l.Fragment, {
                                children: u("".concat(t, "+"), t)
                            }, "more-users");
                            if (n > s.length) {
                                let e = n - s.length;
                                return (0, r.jsx)(l.Fragment, {
                                    children: u("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (o < s.length) {
                            let e = Math.min(s.length - o, 99);
                            return (0, r.jsx)(l.Fragment, {
                                children: u("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, r.jsx)(_.default, {
                        foreground: T.foreground,
                        className: T.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: n,
                        guildId: l,
                        showUserPopout: a,
                        useFallbackUserForPopout: s
                    } = this.props, {
                        popoutUserId: E
                    } = this.state, _ = n.find(e => null != e && e.id === E), h = s && null == f.default.getUser(E);
                    return (0, r.jsx)(i.Popout, {
                        position: "right",
                        preload: null == _ ? void 0 : () => (0, c.default)(_.id, _.getAvatarURL(l, 80), {
                            guildId: l
                        }),
                        shouldShow: !0 === a && null != E,
                        fixed: !0,
                        renderPopout: e => (o(null != E, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, r.jsx)(d.default, {
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
                            className: u(e, T.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.SIZE_24;
                                switch (e) {
                                    case p.SIZE_16:
                                        return T.size16;
                                    case p.SIZE_24:
                                        return T.size24;
                                    case p.SIZE_32:
                                        return T.size32;
                                    case p.SIZE_56:
                                        return T.size56;
                                    default:
                                        return T.size24
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
                                className: T.emptyUser
                            });
                            {
                                let e = (null != n ? n : 0) % h.default.DEFAULT_AVATARS.length,
                                    t = h.default.DEFAULT_AVATARS[e];
                                return (0, r.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: T.avatar
                                })
                            }
                        }
                        let s = (0, r.jsx)("img", {
                            src: e.getAvatarURL(a, u),
                            alt: e.username,
                            className: T.avatar
                        }, e.id);
                        return l ? (0, r.jsx)(i.Clickable, {
                            className: T.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: s
                        }, e.id) : s
                    }
                }
            }
            g.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, r.jsx)("div", {
                        className: T.moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: p.SIZE_24
            };
            var C = g
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
            var r = n("917351"),
                l = n.n(r),
                a = n("605250");
            let u = new a.default("DragAndDropUtils");

            function s(e) {
                let {
                    oldOrdering: t,
                    newOrdering: n,
                    idGetter: r,
                    existingPositionGetter: l,
                    ascending: a = !0
                } = e, s = n.length;
                if (t.length !== s) return u.warn("Arrays are not of the same length!", t, n), [];
                let o = t.map(r).sort().join(":"),
                    i = n.map(r).sort().join(":");
                if (o !== i) return u.warn("Object IDs in the old ordering and the new ordering are not the same.", o, i), [];
                let c = {};
                for (let e = 0; e < s; e++) c[r(t[e])] = l(t[e]);
                let d = [];
                for (let e = 0; e < s; e++) {
                    let t = r(n[e]),
                        u = c[t],
                        o = a ? e : s - 1 - e;
                    (u !== o || l(n[e]) !== o) && d.push({
                        id: t,
                        position: o
                    })
                }
                return !a && d.reverse(), d
            }

            function o(e, t, n) {
                let r = e[t],
                    l = [...e];
                return l.splice(t, 1), l.splice(n, 0, r), l
            }
            var i = {
                moveItemFromTo: o,
                calculatePositionDeltas: s,
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
                    let c = o(t, n, r);
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
                    return E
                },
                setIncludeNSFW: function() {
                    return _
                },
                getSearchQueryFromTokens: function() {
                    return h
                },
                getSelectionScope: function() {
                    return S
                },
                getAutocompleteMode: function() {
                    return T
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
                    return m
                },
                clearTokenCache: function() {
                    return A
                },
                showDatePicker: function() {
                    return I
                },
                filterHasAnswer: function() {
                    return N
                },
                refreshSearchTokens: function() {
                    return y
                }
            }), n("222007"), n("808653");
            var r = n("917351"),
                l = n.n(r),
                a = n("76385"),
                u = n("955513"),
                s = n("247013"),
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
                if (s.default.didAgree(t)) {
                    let t = o.default.getCurrentUser();
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

            function T(e, t) {
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
            let C = new a.default;

            function m(e) {
                return C.tokenize(e)
            }

            function A() {
                return C.clearCache()
            }

            function I(e) {
                return null != e ? f[e] : null
            }

            function N(e, t) {
                let n = c.IS_SEARCH_FILTER_TOKEN.test(e.type);
                return (null != t || !n) && (null == t || !n || !!c.IS_SEARCH_ANSWER_TOKEN.test(t.type)) && !0
            }

            function y() {
                (0, u.refreshSearchTokens)(), C.reset(), l(u.default).forOwn((e, t) => C.addRule({
                    type: t,
                    ...e
                }))
            }
        }
    }
]);
//# sourceMappingURL=ae9125d71c8e78a8c15a.js.map