(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["65381"], {
        354087: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DoorExitIcon: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M9 12a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z",
                        className: s
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M2.75 3.015A2.995 2.995 0 0 1 5 2h10a3 3 0 0 1 3 3v7.645c0 .432-.547.694-.952.543a3 3 0 0 0-3.17 4.933l.026.025a.5.5 0 0 1-.354.854h-.05a.5.5 0 0 0-.5.5c0 1.887-2.011 3.094-3.677 2.206L3.53 18.614A3 3 0 0 1 2 16V5c.001-.76.285-1.456.751-1.985Zm1.301 1.951A.037.037 0 0 0 4 5v11a1 1 0 0 0 .488.86l5.777 3.08A.5.5 0 0 0 11 19.5V8.024a.5.5 0 0 0-.318-.466L4.051 4.966Z",
                        clipRule: "evenodd",
                        className: s
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M15.293 16.708a1 1 0 0 1 1.414-1.415L21 19.586V16a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1h-6a1 1 0 1 1 0-2h3.586l-4.293-4.292Z",
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
            var a = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(o),
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
                        className: s
                    })
                })
            }
        },
        789394: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChannelEmojisExperiment: function() {
                    return a
                }
            });
            var r = n("862205");
            let a = (0, r.createExperiment)({
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
                    return a
                },
                Token: function() {
                    return o
                },
                default: function() {
                    return i
                }
            });
            let r = /.+/g,
                a = "NON_TOKEN";

            function l(e, t, n) {
                if (null == t) return null;
                for (let r = 0; r < t.length; r++) {
                    let a;
                    let l = t[r],
                        s = u(e.match(l.regex), n);
                    if (null != s) {
                        let {
                            cache: e
                        } = l;
                        if (null != e && null != (a = e.get(s[0])) && ((a = new o(a)).start = s.index), null == a) {
                            if (a = new o(s, l.type), null != l.validator && !l.validator(a)) continue;
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
                        follows: r,
                        validator: a
                    } = e, {
                        regex: l
                    } = e;
                    if ("^" !== l.source.charAt(0) && (l = new RegExp("^".concat(l.source), l.flags)), null != a && (t = new Map), null == r) {
                        this._rules.push({
                            regex: l,
                            type: n,
                            validator: a,
                            cache: t
                        });
                        return
                    }
                    r.forEach(e => {
                        null == this._followers[e] && (this._followers[e] = []), this._followers[e].push({
                            regex: l,
                            type: n,
                            validator: a,
                            cache: t
                        })
                    })
                }
                tokenize(e) {
                    let t, n = e,
                        a = "",
                        l = 0,
                        s = [];
                    for (; n.length > 0;) {
                        let e = this._getMatch(n, t, l + a.length);
                        null != e ? (null != a && "" !== a && s.push(new o(u(a.match(r), l), this._nonTokenType)), t = e, s.push(e), l += t.length + a.length, n = n.substring(t.length), a = "") : (a += n[0], n = n.substring(1))
                    }
                    return null != a && "" !== a && s.push(new o(u(a.match(r), l), this._nonTokenType)), s
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
                    let a = null != t ? t.type : null;
                    return (null == t ? void 0 : t.end) === n && (r = l(e, this._followers[String(a)], n)), null == r && (r = l(e, this._rules, n)), r
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
                    return P
                },
                ComponentTypes: function() {
                    return a
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
            var r, a, l = n("448105"),
                u = n.n(l),
                s = n("917351"),
                o = n.n(s),
                i = n("866227"),
                c = n.n(i),
                d = n("923959"),
                E = n("27618"),
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
                return new Set(o.range(2015, e + 1).map(e => e.toString()))
            }

            function m(e, t) {
                return [e, e.clone().add(1, t)]
            }

            function L(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = c().startOf(e).add(t, e);
                return m(n, e)
            }

            function H(e, t, n) {
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
            let F = RegExp("(?:\\s*(".concat("([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})", "|").concat("([0-9]{4})-([0-9]{1,2})", "|").concat("\\d{4}", "|").concat("([^\\d\\s]+)", "))"), "i"),
                v = RegExp("\\s*(true|false)", "i");

            function k(e) {
                return "".concat(e, ":")
            }

            function D(e) {
                return RegExp(k(e), "i")
            }

            function O(e) {
                let t;
                let n = e.getMatch(1),
                    r = e => null != e ? null == e ? void 0 : e.id : null;
                return null != (t = g.ID_REGEX.test(n) ? n : n === g.ME ? r(h.default.getCurrentUser()) : null != e.getMatch(4) ? r(h.default.findByTag(e.getMatch(4))) : r(h.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData("userId", t), !0)
            }

            function w(e, t) {
                let n, r;
                let a = e.getFullMatch().trim().toLowerCase(),
                    l = M()[a];
                null != l ? [n, r] = l() : y().has(a) ? [n, r] = H(a, "MMMM", "month") : I().has(a) ? [n, r] = H(a, "dddd", "day") : C().has(a) ? [n, r] = H(a, "YYYY", "year") : [n, r] = H(a, g.SEARCH_DATE_FORMAT, "day");
                let u = n.isValid() && r.isValid();
                return !!u && ("before" === t ? (r = n, n = null) : "after" === t && (n = r, r = null), e.setData("start", n), e.setData("end", r), !0)
            }

            function U(e) {
                var t;
                let n = e.getMatch(1),
                    r = T.default.getGuildId(),
                    a = d.default.getChannels(r)[d.GUILD_SELECTABLE_CHANNELS_KEY].concat(d.default.getChannels(r)[d.GUILD_VOCAL_CHANNELS_KEY]),
                    l = d.default.getTextChannelNameDisambiguations(r),
                    u = o.chain(a).map(e => {
                        let {
                            channel: t
                        } = e;
                        return t
                    }).find(e => {
                        var r;
                        return n === (null !== (t = null === (r = l[e.id]) || void 0 === r ? void 0 : r.name) && void 0 !== t ? t : e.name)
                    }).value();
                return null != u && (e.setData("channel", u), !0)
            }

            function b(e) {
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
                return [...Array.from(y()), ...Array.from(I()), ...Array.from(C()), ...Object.keys(M())]
            }

            function P() {
                return o.sample(G())
            }

            function x(e, t, n) {
                return K(e, t, G()).map(e => ({
                    ...e,
                    group: n,
                    key: "".concat(n, "-").concat(e.text)
                }))
            }

            function K(e, t, n) {
                let r = e.toLocaleLowerCase();
                return o(n).filter(e => u(r, e.toLocaleLowerCase())).take(t).map(e => ({
                    text: e
                })).value()
            }

            function W(e, t) {
                let n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                    a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    l = _.default.getSearchType(t);
                e = e.split("#")[0];
                let u = {
                    query: e,
                    limit: r,
                    request: a
                };
                switch (l) {
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
                        n = R.default.queryUsers(e, r, !0, a, () => !0);
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
            (r = a || (a = {})).FILTER = "FILTER", r.ANSWER = "ANSWER";
            let j = {};

            function V() {
                Object.assign(j, function() {
                    let e = [N.default.Messages.SEARCH_ANSWER_HAS_LINK, N.default.Messages.SEARCH_ANSWER_HAS_EMBED, N.default.Messages.SEARCH_ANSWER_HAS_ATTACHMENT, N.default.Messages.SEARCH_ANSWER_HAS_VIDEO, N.default.Messages.SEARCH_ANSWER_HAS_IMAGE, N.default.Messages.SEARCH_ANSWER_HAS_SOUND, N.default.Messages.SEARCH_ANSWER_HAS_STICKER];
                    return {
                        [g.SearchTokenTypes.FILTER_FROM]: {
                            regex: D(N.default.Messages.SEARCH_FILTER_FROM),
                            componentType: a.FILTER,
                            key: k(N.default.Messages.SEARCH_FILTER_FROM),
                            validator: Y,
                            getAutocompletions: W
                        },
                        [g.SearchTokenTypes.ANSWER_USERNAME_FROM]: {
                            follows: [g.SearchTokenTypes.FILTER_FROM],
                            regex: B,
                            validator: O,
                            mutable: !0,
                            componentType: a.ANSWER,
                            queryKey: "author_id"
                        },
                        [g.SearchTokenTypes.FILTER_MENTIONS]: {
                            regex: D(N.default.Messages.SEARCH_FILTER_MENTIONS),
                            componentType: a.FILTER,
                            key: k(N.default.Messages.SEARCH_FILTER_MENTIONS),
                            validator: Y,
                            getAutocompletions: W
                        },
                        [g.SearchTokenTypes.ANSWER_USERNAME_MENTIONS]: {
                            follows: [g.SearchTokenTypes.FILTER_MENTIONS],
                            regex: B,
                            validator: O,
                            mutable: !0,
                            componentType: a.ANSWER,
                            queryKey: "mentions"
                        },
                        [g.SearchTokenTypes.FILTER_HAS]: {
                            regex: D(N.default.Messages.SEARCH_FILTER_HAS),
                            componentType: a.FILTER,
                            key: k(N.default.Messages.SEARCH_FILTER_HAS),
                            getAutocompletions: (t, n, r) => K(t, r, e)
                        },
                        [g.SearchTokenTypes.ANSWER_HAS]: {
                            regex: RegExp("(?:\\s*-?(".concat(e.map(e => p.default.escape(e)).join("|"), "))"), "i"),
                            follows: [g.SearchTokenTypes.FILTER_HAS],
                            validator: b,
                            componentType: a.ANSWER,
                            queryKey: "has"
                        },
                        [g.SearchTokenTypes.FILTER_FILE_TYPE]: {
                            regex: D(N.default.Messages.SEARCH_FILTER_FILE_TYPE),
                            key: k(N.default.Messages.SEARCH_FILTER_FILE_TYPE),
                            componentType: a.FILTER
                        },
                        [g.SearchTokenTypes.ANSWER_FILE_TYPE]: {
                            regex: /(?:\s*([^\s]+))/,
                            follows: [g.SearchTokenTypes.FILTER_FILE_TYPE],
                            mutable: !0,
                            componentType: a.ANSWER,
                            queryKey: "attachment_extensions"
                        },
                        [g.SearchTokenTypes.FILTER_FILE_NAME]: {
                            regex: D(N.default.Messages.SEARCH_FILTER_FILE_NAME),
                            key: k(N.default.Messages.SEARCH_FILTER_FILE_NAME),
                            componentType: a.FILTER
                        },
                        [g.SearchTokenTypes.ANSWER_FILE_NAME]: {
                            regex: /(?:\s*([^\s]+)(?=\s))/,
                            follows: [g.SearchTokenTypes.FILTER_FILE_NAME],
                            mutable: !0,
                            componentType: a.ANSWER,
                            queryKey: "attachment_filename"
                        },
                        [g.SearchTokenTypes.FILTER_BEFORE]: {
                            regex: D(N.default.Messages.SEARCH_FILTER_BEFORE),
                            componentType: a.FILTER,
                            key: k(N.default.Messages.SEARCH_FILTER_BEFORE),
                            getAutocompletions: (e, t, n) => x(e, n, g.SearchTokenTypes.FILTER_BEFORE)
                        },
                        [g.SearchTokenTypes.FILTER_ON]: {
                            regex: D("(".concat(N.default.Messages.SEARCH_FILTER_ON, "|").concat(N.default.Messages.SEARCH_FILTER_DURING, ")")),
                            componentType: a.FILTER,
                            key: k(N.default.Messages.SEARCH_FILTER_DURING),
                            getAutocompletions: (e, t, n) => x(e, n, g.SearchTokenTypes.FILTER_ON)
                        },
                        [g.SearchTokenTypes.FILTER_AFTER]: {
                            regex: D(N.default.Messages.SEARCH_FILTER_AFTER),
                            componentType: a.FILTER,
                            key: k(N.default.Messages.SEARCH_FILTER_AFTER),
                            getAutocompletions: (e, t, n) => x(e, n, g.SearchTokenTypes.FILTER_AFTER)
                        },
                        [g.SearchTokenTypes.ANSWER_BEFORE]: {
                            regex: F,
                            follows: [g.SearchTokenTypes.FILTER_BEFORE],
                            componentType: a.ANSWER,
                            mutable: !0,
                            validator: e => w(e, "before")
                        },
                        [g.SearchTokenTypes.ANSWER_ON]: {
                            regex: F,
                            follows: [g.SearchTokenTypes.FILTER_ON],
                            componentType: a.ANSWER,
                            mutable: !0,
                            validator: e => w(e, "on")
                        },
                        [g.SearchTokenTypes.ANSWER_AFTER]: {
                            regex: F,
                            follows: [g.SearchTokenTypes.FILTER_AFTER],
                            componentType: a.ANSWER,
                            mutable: !0,
                            validator: e => w(e, "after")
                        },
                        [g.SearchTokenTypes.FILTER_IN]: {
                            regex: D(N.default.Messages.SEARCH_FILTER_IN),
                            componentType: a.FILTER,
                            key: k(N.default.Messages.SEARCH_FILTER_IN),
                            validator: q,
                            getAutocompletions(e, t, n) {
                                var r;
                                "#" === e[0] && (e = e.substring(1));
                                let a = R.default.queryChannels({
                                    query: e,
                                    type: d.GUILD_SELECTABLE_CHANNELS_KEY,
                                    guildId: t,
                                    limit: 1 / 0
                                }).concat(R.default.queryChannels({
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
                                        n = a.find(t => t.id === e);
                                    null != n && (a.splice(a.indexOf(n), 1), a.unshift(n))
                                }
                                let l = d.default.getTextChannelNameDisambiguations(t);
                                return o(a).take(n).map(e => {
                                    var t;
                                    return {
                                        text: "".concat(null !== (r = null === (t = l[e.id]) || void 0 === t ? void 0 : t.name) && void 0 !== r ? r : e.name),
                                        channel: e
                                    }
                                }).value()
                            }
                        },
                        [g.SearchTokenTypes.ANSWER_IN]: {
                            regex: /(?:\s*#?([^ ]+))/i,
                            mutable: !0,
                            follows: [g.SearchTokenTypes.FILTER_IN],
                            componentType: a.ANSWER,
                            validator: U,
                            queryKey: "channel_id"
                        },
                        [g.SearchTokenTypes.FILTER_PINNED]: {
                            regex: D(N.default.Messages.SEARCH_FILTER_PINNED),
                            componentType: a.FILTER,
                            key: k(N.default.Messages.SEARCH_FILTER_PINNED),
                            getAutocompletions: () => [{
                                text: "true"
                            }, {
                                text: "false"
                            }]
                        },
                        [g.SearchTokenTypes.ANSWER_PINNED]: {
                            regex: v,
                            componentType: a.ANSWER,
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
                return o(j).keys().filter(e => g.IS_SEARCH_FILTER_TOKEN.test(e)).filter(e => null != j[e].key).map(e => ({
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
        884422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchChannelHighlights: function() {
                    return c
                },
                jumpToHighlight: function() {
                    return d
                }
            });
            var r = n("872717"),
                a = n("913144"),
                l = n("819689"),
                u = n("267363"),
                s = n("716241"),
                o = n("599110"),
                i = n("49111");
            async function c(e) {
                a.default.dispatch({
                    type: "CHANNEL_HIGHLIGHTS_FETCH_START",
                    guildId: e
                });
                let t = await r.default.get({
                        url: i.Endpoints.CHANNEL_HIGHLIGHTS(e)
                    }),
                    n = t.body;
                await a.default.dispatch({
                    type: "CHANNEL_HIGHLIGHTS_FETCH_SUCCESS",
                    guildId: e,
                    data: n
                })
            }
            async function d(e) {
                let {
                    guildId: t,
                    channelId: n,
                    targetMessageId: r,
                    highlightedMessageIds: a,
                    numHighlightsVisited: c
                } = e;
                await l.default.jumpToMessage({
                    channelId: n,
                    messageId: r,
                    flash: !0
                }), o.default.track(i.AnalyticEvents.CHANNEL_HIGHLIGHTS_ACKED, {
                    ...(0, s.collectGuildAnalyticsMetadata)(t),
                    ...(0, s.collectChannelAnalyticsMetadataFromId)(n),
                    message_id: r,
                    index: c,
                    ack_type: "navigator"
                });
                let d = a[c - 1];
                return null != d && u.ack(n, !0, !1, d), Promise.resolve()
            }
        },
        200029: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var r = n("689988"),
                a = n("44574"),
                l = n("512395"),
                u = n("305961"),
                s = n("162771"),
                o = n("718517"),
                i = n("884422"),
                c = n("483038"),
                d = n("49111");
            class E extends r.default {
                maybeLoadFeedForGuild(e) {
                    if (null == e) return !1;
                    let t = (0, l.isChannelHighlightsEnabledForGuild)(e);
                    (function(e) {
                        let t = c.default.getLastFetchedMillis(e);
                        if (null != t && Date.now() - t < 3 * o.default.Millis.HOUR || c.default.isLoading(e)) return !1;
                        let n = u.default.getGuild(e);
                        return null != n && !n.hasFeature(d.GuildFeatures.CHANNEL_HIGHLIGHTS_DISABLED)
                    })(e) && (t || (0, a.isGuildUnreadsExperimentEnabled)()) && (0, i.fetchChannelHighlights)(e)
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
                        let e = s.default.getGuildId();
                        this.maybeLoadFeedForGuild(e)
                    }
                }
            }
            var _ = new E
        },
        578899: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SimpleDeadchatPromptExperiment: function() {
                    return a
                }
            });
            var r = n("862205");
            let a = (0, r.createExperiment)({
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
                a = n("872717"),
                l = n("913144"),
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
                    var _;
                    let u = await a.default.post({
                        url: o.Endpoints.GUILD_MEMBER_SEARCH(e),
                        body: t,
                        signal: E
                    });
                    if (i.info("JANK searchAllGuildMembers", {
                            response: u
                        }), u.status === s.INDEXING_RESPONSE_CODE) {
                        if (null == u.body.retry_after) throw Error("Indexing response did not include retry_after");
                        if (!d) throw Error("Indexing response received but autoRetry is disabled");
                        return await l.default.dispatch({
                            type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING",
                            guildId: e
                        }), await new Promise(e => setTimeout(e, 1e3 * u.body.retry_after)), c(e, t, n, r + 1)
                    }
                    return {
                        type: s.GuildMemberSearchResponseType.SUCCESSFUL_QUERY,
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
                        type: s.GuildMemberSearchResponseType.ERROR,
                        body: e
                    }
                }
            }
        },
        828434: function(e, t, n) {
            "use strict";
            var r, a;
            n.r(t), n.d(t, {
                INDEXING_RESPONSE_CODE: function() {
                    return l
                },
                GuildMemberSearchResponseType: function() {
                    return r
                }
            });
            let l = 202;
            (a = r || (r = {}))[a.SUCCESSFUL_QUERY = 1] = "SUCCESSFUL_QUERY", a[a.ERROR = 2] = "ERROR"
        },
        225982: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                searchGuildMembers: function() {
                    return o
                }
            });
            var r = n("811022"),
                a = n("913144"),
                l = n("127421"),
                u = n("828434");
            let s = new r.default("MemberSafetyGuildMemberSearchActionCreators");
            async function o(e, t, n) {
                let r = await (0, l.searchAllGuildMembers)(e, t, n);
                if (r.type === u.GuildMemberSearchResponseType.ERROR) throw r.body;
                let {
                    body: o
                } = r;
                s.info("JANK searchGuildMembers success", {
                    body: o
                }), a.default.dispatch({
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
                    return M
                },
                useIsStillIndexingV2: function() {
                    return F
                },
                handleInitializeV2: function() {
                    return v
                },
                handleGuildDeleteV2: function() {
                    return k
                },
                handleSearchStateUpdateV2: function() {
                    return D
                },
                handlePaginationUpdateV2: function() {
                    return O
                },
                handleGuildMemberSearchSuccessV2: function() {
                    return w
                },
                handleGuildMemberSearchStillIndexingV2: function() {
                    return U
                }
            });
            var r, a, l, u, s = n("714617"),
                o = n.n(s),
                i = n("917351"),
                c = n("308503"),
                d = n("811022"),
                E = n("249654"),
                _ = n("449008"),
                f = n("691386"),
                T = n("770115"),
                S = n("490931"),
                h = n("225982"),
                R = n("178406");
            let p = new d.default("MemberSafetySearchManagerV2");

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
            }(r = l || (l = {}))[r.FAILED = 0] = "FAILED", r[r.UNFETCHED = 1] = "UNFETCHED", r[r.PENDING = 2] = "PENDING", r[r.SUCCEEDED = 3] = "SUCCEEDED", r[r.STILL_INDEXING = 4] = "STILL_INDEXING";
            let N = (0, c.default)(e => ({}));

            function y(e, t) {
                let n = N.getState()[e];
                return null == n && (n = g(l.UNFETCHED)), n = {
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
                return null == t && y(e, t = g(l.UNFETCHED)), t
            }

            function m(e) {
                let t = I(e);
                null != t && y(e, {
                    requestState: l.SUCCEEDED,
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
            }(a = u || (u = {}))[a.FIRST_PAGE_CHUNK = 0] = "FIRST_PAGE_CHUNK", a[a.CURRENT_SEARCH_CHUNK = 1] = "CURRENT_SEARCH_CHUNK", a[a.NEXT_SEARCH_CHUNK = 2] = "NEXT_SEARCH_CHUNK", a[a.PREVIOUS_SEARCH_CHUNK = 3] = "PREVIOUS_SEARCH_CHUNK";
            async function H(e) {
                var t, n, r, a;
                let s = R.default.getSearchStateByGuildId(e),
                    c = R.default.getPaginationStateByGuildId(e),
                    d = A(e),
                    g = C(d),
                    [N, L] = function(e, t, n) {
                        var r, a, l, s, o, i;
                        let c = function(e, t) {
                                var n;
                                let {
                                    currentPageChunkNumber: r,
                                    previousPageChunkNumber: a,
                                    nextPageChunkNumber: l
                                } = function(e) {
                                    let t = e.pageSize * e.currentPage,
                                        n = Math.floor(t / f.DEFAULT_SEARCH_CHUNK_LIMIT),
                                        r = Math.floor(e.pageSize * (e.currentPage - 1) / f.DEFAULT_SEARCH_CHUNK_LIMIT),
                                        a = Math.floor(e.pageSize * (e.currentPage + 1) / f.DEFAULT_SEARCH_CHUNK_LIMIT);
                                    return {
                                        currentPageChunkNumber: n,
                                        previousPageChunkNumber: r,
                                        nextPageChunkNumber: a
                                    }
                                }(t), {
                                    previousPagination: s
                                } = C(A(e)), o = t.currentPage, i = null !== (n = null == s ? void 0 : s.currentPage) && void 0 !== n ? n : 0, c = R.default.getElasticSearchPaginationByGuildId(e);
                                switch (!0) {
                                    case null == c:
                                    case r === l && 0 === r:
                                        return u.FIRST_PAGE_CHUNK;
                                    case r === l && r === a:
                                        return u.CURRENT_SEARCH_CHUNK;
                                    case i < o && r < l:
                                        return u.NEXT_SEARCH_CHUNK;
                                    case i > o && r >= a:
                                        if (0 < r) return u.PREVIOUS_SEARCH_CHUNK;
                                        return u.FIRST_PAGE_CHUNK;
                                    default:
                                        return u.CURRENT_SEARCH_CHUNK
                                }
                            }(e, n),
                            d = R.default.getElasticSearchPaginationByGuildId(e);
                        switch (c) {
                            case u.FIRST_PAGE_CHUNK: {
                                let t = R.default.getLastCursorTimestamp(e);
                                return [null, {
                                    limit: f.DEFAULT_SEARCH_CHUNK_LIMIT,
                                    after: {
                                        guild_joined_at: t,
                                        user_id: E.default.fromTimestamp(t)
                                    }
                                }]
                            }
                            case u.CURRENT_SEARCH_CHUNK:
                                return [null !== (r = t.cursor) && void 0 !== r ? r : null, {
                                    limit: f.DEFAULT_SEARCH_CHUNK_LIMIT,
                                    after: null !== (a = t.cursor) && void 0 !== a ? a : void 0
                                }];
                            case u.NEXT_SEARCH_CHUNK:
                                return [null !== (l = null == d ? void 0 : d.after) && void 0 !== l ? l : null, {
                                    limit: f.DEFAULT_SEARCH_CHUNK_LIMIT,
                                    after: null !== (s = null == d ? void 0 : d.after) && void 0 !== s ? s : void 0
                                }];
                            case u.PREVIOUS_SEARCH_CHUNK:
                                return [null !== (o = null == d ? void 0 : d.before) && void 0 !== o ? o : null, {
                                    limit: f.DEFAULT_SEARCH_CHUNK_LIMIT,
                                    before: null !== (i = null == d ? void 0 : d.before) && void 0 !== i ? i : void 0
                                }];
                            default:
                                (0, _.assertNever)(c)
                        }
                    }(e, g, c);
                let H = (t = function(e) {
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
                        requireUnusualDmActivity: a,
                        requireCommunicationDisabled: l
                    } = e, u = {};
                    a && (u.unusual_dm_activity_until = {
                        range: {
                            gte: Date.now() - S.UNUSUAL_DM_COMPARISON_DELTA
                        }
                    }), l && (u.communication_disabled_until = {
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
                }(s), null == (n = L) ? t : {
                    ...t,
                    ...n
                });
                if (function(e, t) {
                        let n = C(e);
                        return o(n.query, t)
                    }(d, H) && (0, i.isEqual)(N, g.cursor)) return;
                let M = function(e, t, n, r) {
                    var a;
                    let u = I(e);
                    return (null == u ? void 0 : u.requestState) === l.PENDING && (null === (a = u.abortController) || void 0 === a || a.abort()), y(e, {
                        requestState: l.PENDING,
                        abortController: new AbortController,
                        lastUpdated: Date.now(),
                        query: t,
                        cursor: n,
                        previousPagination: r
                    })
                }(d, H, N, c);
                try {
                    ;
                    if (p.info("Making member search request", {
                            query: M.query,
                            guildId: e
                        }), null == M.query) throw Error("Query is null");
                    await (0, h.searchGuildMembers)(e, M.query, {
                        signal: null !== (a = null === (r = M.abortController) || void 0 === r ? void 0 : r.signal) && void 0 !== a ? a : void 0
                    })
                } catch (e) {
                    if (-1 === e.code) return;
                    ! function(e) {
                        let t = I(e);
                        null != t && y(e, {
                            requestState: l.FAILED,
                            abortController: null,
                            lastUpdated: Date.now()
                        })
                    }(d);
                    return
                }
                m(d)
            }

            function M(e) {
                return N(t => {
                    var n;
                    let r = A(e);
                    return (null === (n = t[r]) || void 0 === n ? void 0 : n.requestState) === l.PENDING
                })
            }

            function F(e) {
                return N(t => {
                    var n;
                    let r = A(e);
                    return (null === (n = t[r]) || void 0 === n ? void 0 : n.requestState) === l.STILL_INDEXING
                })
            }

            function v(e) {
                let {
                    guildId: t
                } = e;
                L(t), H(t)
            }

            function k(e) {
                let {
                    guild: t
                } = e;
                L(t.id)
            }

            function D(e) {
                let {
                    guildId: t
                } = e;
                H(t)
            }

            function O(e) {
                let {
                    guildId: t
                } = e;
                H(t)
            }

            function w(e) {
                let {
                    guildId: t
                } = e, n = A(t);
                m(n)
            }

            function U(e) {
                let {
                    guildId: t
                } = e, n = A(t);
                y(n, {
                    requestState: l.STILL_INDEXING,
                    abortController: null,
                    lastUpdated: Date.now()
                })
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
            var a = n("469563"),
                l = n("304983"),
                u = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, u.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: a,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"
                        })
                    })
                }, l.MoreHorizontalIcon)
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
            });
            var r = n("917351"),
                a = n.n(r),
                l = n("605250");
            let u = new l.default("DragAndDropUtils");

            function s(e) {
                let {
                    oldOrdering: t,
                    newOrdering: n,
                    idGetter: r,
                    existingPositionGetter: a,
                    ascending: l = !0
                } = e, s = n.length;
                if (t.length !== s) return u.warn("Arrays are not of the same length!", t, n), [];
                let o = t.map(r).sort().join(":"),
                    i = n.map(r).sort().join(":");
                if (o !== i) return u.warn("Object IDs in the old ordering and the new ordering are not the same.", o, i), [];
                let c = {};
                for (let e = 0; e < s; e++) c[r(t[e])] = a(t[e]);
                let d = [];
                for (let e = 0; e < s; e++) {
                    let t = r(n[e]),
                        u = c[t],
                        o = l ? e : s - 1 - e;
                    (u !== o || a(n[e]) !== o) && d.push({
                        id: t,
                        position: o
                    })
                }
                return !l && d.reverse(), d
            }

            function o(e, t, n) {
                let r = e[t],
                    a = [...e];
                return a.splice(t, 1), a.splice(n, 0, r), a
            }
            var i = {
                moveItemFromTo: o,
                calculatePositionDeltas: s,
                getPositionUpdates: function(e) {
                    let {
                        objectArray: t,
                        fromPosition: n,
                        toPosition: r,
                        idGetter: l,
                        existingPositionGetter: u,
                        ascending: i = !0
                    } = e;
                    !Array.isArray(t) && (t = a.values(t));
                    let c = o(t, n, r);
                    return s({
                        oldOrdering: t,
                        newOrdering: c,
                        idGetter: l,
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
                a = n.n(r),
                l = n("76385"),
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
            let _ = {
                [c.SearchTokenTypes.FILTER_BEFORE]: !0,
                [c.SearchTokenTypes.FILTER_AFTER]: !0,
                [c.SearchTokenTypes.FILTER_ON]: !0
            };

            function f(e, t) {
                if (s.default.didAgree(t)) {
                    let t = o.default.getCurrentUser();
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
                                    a = e.getData("end");
                                r && (t.min_id = i.default.fromTimestamp(r)), a && (t.max_id = i.default.fromTimestamp(a));
                                return
                        }
                        let l = function(e) {
                            let t = u.default[e],
                                n = null != t ? t.queryKey : null;
                            return null == n && (n = "content"), n
                        }(n);
                        null == t[l] && (t[l] = new Set);
                        let s = t[l];
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
                let r, a;
                let l = e.find((l, u) => t >= l.start && t <= l.end && n >= l.start && n <= l.end ? (null != e[u + 1] && (a = e[u + 1]), !0) : (r = l, !1));
                return null == l ? null : {
                    previousToken: r,
                    currentToken: l,
                    nextToken: a,
                    focusOffset: t,
                    anchorOffset: n
                }
            }

            function h(e, t) {
                let n;
                e = null != e ? e : {};
                let {
                    currentToken: r,
                    nextToken: a,
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
                    if (null == a || a.type === l.default.NON_TOKEN_TYPE) return {
                        type: c.SearchPopoutModes.FILTER,
                        filter: r.type,
                        token: a
                    };
                    if (null != a && !c.IS_SEARCH_ANSWER_TOKEN.test(a.type)) return {
                        type: c.SearchPopoutModes.FILTER,
                        filter: r.type,
                        token: null
                    }
                }
                return r.type === l.default.NON_TOKEN_TYPE && null != u && c.IS_SEARCH_FILTER_TOKEN.test(u.type) ? {
                    type: c.SearchPopoutModes.FILTER,
                    filter: u.type,
                    token: r
                } : (r.type === l.default.NON_TOKEN_TYPE && (n = r), {
                    type: c.SearchPopoutModes.FILTER_ALL,
                    filter: null,
                    token: n
                })
            }

            function R(e, t) {
                let n = [];
                return a(e).forEach(e => {
                    if (null == e || 0 === e.results.length) return;
                    let r = e.group;
                    n = n.concat(e.results.map(e => {
                        let n = e.text;
                        if (t === c.SearchPopoutModes.FILTER_ALL) {
                            var a;
                            r = null !== (a = e.group) && void 0 !== a ? a : r;
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
            let g = new l.default;

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
                (0, u.refreshSearchTokens)(), g.reset(), a(u.default).forOwn((e, t) => g.addRule({
                    type: t,
                    ...e
                }))
            }
        }
    }
]);
//# sourceMappingURL=049c79ec47ba9f23bcc4.js.map