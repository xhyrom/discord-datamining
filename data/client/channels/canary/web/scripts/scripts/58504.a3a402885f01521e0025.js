(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["58504"], {
        489312: function(e, t, n) {
            "use strict";
            n.r(t);
            var s = n("548788");
            n.es(s, t)
        },
        472660: function(e, t, n) {
            "use strict";
            n.r(t);
            var s = n("986423");
            n.es(s, t)
        },
        739949: function(e, t, n) {
            "use strict";
            n.r(t);
            var s = n("531963");
            n.es(s, t)
        },
        572505: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_TOKEN_TYPE: function() {
                    return a
                },
                Token: function() {
                    return i
                },
                default: function() {
                    return o
                }
            }), n("789020"), n("653041");
            let s = /.+/g,
                a = "NON_TOKEN";

            function r(e, t, n) {
                if (null == t) return null;
                for (let s = 0; s < t.length; s++) {
                    let a;
                    let r = t[s],
                        u = l(e.match(r.regex), n);
                    if (null != u) {
                        let {
                            cache: e
                        } = r;
                        if (null != e && null != (a = e.get(u[0])) && ((a = new i(a)).start = u.index), null == a) {
                            if (a = new i(u, r.type), null != r.validator && !r.validator(a)) continue;
                            null != e && !e?.has(u[0]) && e.set(u[0], a)
                        }
                        return a
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
                constructor(e = [], t) {
                    this._rules = [], this._followers = {}, this._nonTokenType = a, this.reset(t), e.forEach(e => this.addRule(e))
                }
                reset(e) {
                    this._rules = [], this._followers = {}, this._nonTokenType = e ?? a
                }
                addRule(e) {
                    let t;
                    let {
                        type: n,
                        follows: s,
                        validator: a
                    } = e, {
                        regex: r
                    } = e;
                    if ("^" !== r.source.charAt(0) && (r = RegExp(`^${r.source}`, r.flags)), null != a && (t = new Map), null == s) {
                        this._rules.push({
                            regex: r,
                            type: n,
                            validator: a,
                            cache: t
                        });
                        return
                    }
                    s.forEach(e => {
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
                        u = [];
                    for (; n.length > 0;) {
                        let e = this._getMatch(n, t, r + a.length);
                        null != e ? (null != a && "" !== a && u.push(new i(l(a.match(s), r), this._nonTokenType)), t = e, u.push(e), r += t.length + a.length, n = n.substring(t.length), a = "") : (a += n[0], n = n.substring(1))
                    }
                    return null != a && "" !== a && u.push(new i(l(a.match(s), r), this._nonTokenType)), u
                }
                clearCache() {
                    for (let e in this._rules.forEach(e => e.cache?.clear()), this._followers) this._followers[e].forEach(e => e.cache?.clear())
                }
                _getMatch(e, t, n) {
                    let s;
                    let a = null != t ? t.type : null;
                    return t?.end === n && (s = r(e, this._followers[String(a)], n)), null == s && (s = r(e, this._rules, n)), s
                }
            }
            class i {
                constructor(e, t) {
                    e instanceof i ? (this.match = [...e.match], this.start = e.start, this.type = e.type, null != e._data && (this._data = e._data)) : (null != e ? (this.match = [...e], this.start = "string" == typeof e ? 0 : e.index ?? 0) : (this.match = [], this.start = 0), this.type = t)
                }
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
            }
            u.NON_TOKEN_TYPE = a, u.Token = i;
            var o = u
        },
        668557: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ComponentTypes: function() {
                    return s
                },
                default: function() {
                    return q
                },
                getFilterAutocompletions: function() {
                    return z
                },
                getRandomDateShortcut: function() {
                    return P
                },
                refreshSearchTokens: function() {
                    return Z
                }
            }), n("733860");
            var s, a, r = n("658722"),
                l = n.n(r),
                u = n("392711"),
                i = n.n(u),
                o = n("913527"),
                d = n.n(o),
                c = n("610043"),
                E = n("606929"),
                _ = n("995441"),
                T = n("232733"),
                h = n("632706"),
                f = n("532858"),
                I = n("871831"),
                S = n("604293"),
                R = n("930771"),
                p = n("439823"),
                A = n("467006"),
                m = n("30175");

            function F() {
                return new Set(d().months().map(e => e.toLowerCase()))
            }

            function g() {
                return new Set(d().weekdays().map(e => e.toLowerCase()))
            }

            function N() {
                let e = new Date().getFullYear();
                return new Set(i().range(2015, e + 1).map(e => e.toString()))
            }

            function M(e, t) {
                return [e, e.clone().add(1, t)]
            }

            function y(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return M(d()().startOf(e).add(t, e), e)
            }

            function C(e, t, n) {
                return M(d()(e, t).local(), n)
            }

            function L() {
                return {
                    [m.default.Messages.SEARCH_SHORTCUT_TODAY]: () => y("day"),
                    [m.default.Messages.SEARCH_SHORTCUT_YESTERDAY]: () => y("day", -1),
                    [m.default.Messages.SEARCH_SHORTCUT_WEEK]: () => y("week"),
                    [m.default.Messages.SEARCH_SHORTCUT_MONTH]: () => y("month"),
                    [m.default.Messages.SEARCH_SHORTCUT_YEAR]: () => y("year")
                }
            }
            let O = RegExp("(?:\\s*(([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})|([0-9]{4})-([0-9]{1,2})|\\\\d{4}|([^\\\\d\\\\s]+)))", "i"),
                k = RegExp("\\s*(true|false)", "i");

            function D(e) {
                return `${e}:`
            }

            function H(e) {
                return RegExp(D(e), "i")
            }

            function v(e) {
                let t;
                let n = e.getMatch(1),
                    s = e => null != e ? e?.id : null;
                return null != (t = A.ID_REGEX.test(n) ? n : n === A.ME ? s(I.default.getCurrentUser()) : null != e.getMatch(4) ? s(I.default.findByTag(e.getMatch(4))) : s(I.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData("userId", t), !0)
            }

            function w(e, t) {
                let n, s;
                let a = e.getFullMatch().trim().toLowerCase(),
                    r = L()[a];
                return null != r ? [n, s] = r() : F().has(a) ? [n, s] = C(a, "MMMM", "month") : g().has(a) ? [n, s] = C(a, "dddd", "day") : N().has(a) ? [n, s] = C(a, "YYYY", "year") : [n, s] = C(a, A.SEARCH_DATE_FORMAT, "day"), !!(n.isValid() && s.isValid()) && ("before" === t ? (s = n, n = null) : "after" === t && (n = s, s = null), e.setData("start", n), e.setData("end", s), !0)
            }

            function b(e) {
                let t = e.getMatch(1),
                    n = h.default.getGuildId(),
                    s = c.default.getChannels(n)[c.GUILD_SELECTABLE_CHANNELS_KEY].concat(c.default.getChannels(n)[c.GUILD_VOCAL_CHANNELS_KEY]),
                    a = c.default.getTextChannelNameDisambiguations(n),
                    r = i().chain(s).map(e => {
                        let {
                            channel: t
                        } = e;
                        return t
                    }).find(e => t === (a[e.id]?.name ?? e.name)).value();
                return null != r && (e.setData("channel", r), !0)
            }

            function U(e) {
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
                return [...Array.from(F()), ...Array.from(g()), ...Array.from(N()), ...Object.keys(L())]
            }

            function P() {
                return i().sample(x())
            }

            function W(e, t, n) {
                return Y(e, t, x()).map(e => ({
                    ...e,
                    group: n,
                    key: `${n}-${e.text}`
                }))
            }

            function Y(e, t, n) {
                let s = e.toLocaleLowerCase();
                return i()(n).filter(e => l()(s, e.toLocaleLowerCase())).take(t).map(e => ({
                    text: e
                })).value()
            }

            function B(e, t) {
                let n, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                    a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    r = _.default.getSearchType(t),
                    l = {
                        query: e = e.split("#")[0],
                        limit: s,
                        request: a
                    };
                switch (r) {
                    case A.SearchTypes.GUILD:
                        n = S.default.queryGuildUsers({
                            ...l,
                            guildId: t
                        });
                        break;
                    case A.SearchTypes.CHANNEL:
                        n = S.default.queryChannelUsers({
                            ...l,
                            channelId: t
                        });
                        break;
                    case A.SearchTypes.DMS:
                        n = S.default.queryUsers(e, s, !0, a, () => !0);
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
                        text: p.default.getUserTag(t),
                        user: t
                    }
                })
            }

            function G() {
                return _.default.getSearchType() === A.SearchTypes.GUILD
            }

            function j() {
                return !f.default.hidePersonalInformation
            }
            let V = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
            (a = s || (s = {})).FILTER = "FILTER", a.ANSWER = "ANSWER";
            let K = {};

            function Z() {
                Object.assign(K, function() {
                    let e = [m.default.Messages.SEARCH_ANSWER_HAS_LINK, m.default.Messages.SEARCH_ANSWER_HAS_EMBED, m.default.Messages.SEARCH_ANSWER_HAS_ATTACHMENT, m.default.Messages.SEARCH_ANSWER_HAS_VIDEO, m.default.Messages.SEARCH_ANSWER_HAS_IMAGE, m.default.Messages.SEARCH_ANSWER_HAS_SOUND, m.default.Messages.SEARCH_ANSWER_HAS_STICKER];
                    return {
                        [A.SearchTokenTypes.FILTER_FROM]: {
                            regex: H(m.default.Messages.SEARCH_FILTER_FROM),
                            componentType: "FILTER",
                            key: D(m.default.Messages.SEARCH_FILTER_FROM),
                            plainText: m.default.Messages.SEARCH_FILTER_FROM,
                            validator: j,
                            getAutocompletions: B
                        },
                        [A.SearchTokenTypes.ANSWER_USERNAME_FROM]: {
                            follows: [A.SearchTokenTypes.FILTER_FROM],
                            regex: V,
                            validator: v,
                            mutable: !0,
                            componentType: "ANSWER",
                            queryKey: "author_id"
                        },
                        [A.SearchTokenTypes.FILTER_MENTIONS]: {
                            regex: H(m.default.Messages.SEARCH_FILTER_MENTIONS),
                            componentType: "FILTER",
                            key: D(m.default.Messages.SEARCH_FILTER_MENTIONS),
                            plainText: m.default.Messages.SEARCH_FILTER_MENTIONS,
                            validator: j,
                            getAutocompletions: B
                        },
                        [A.SearchTokenTypes.ANSWER_USERNAME_MENTIONS]: {
                            follows: [A.SearchTokenTypes.FILTER_MENTIONS],
                            regex: V,
                            validator: v,
                            mutable: !0,
                            componentType: "ANSWER",
                            queryKey: "mentions"
                        },
                        [A.SearchTokenTypes.FILTER_HAS]: {
                            regex: H(m.default.Messages.SEARCH_FILTER_HAS),
                            componentType: "FILTER",
                            key: D(m.default.Messages.SEARCH_FILTER_HAS),
                            plainText: m.default.Messages.SEARCH_FILTER_HAS,
                            getAutocompletions: (t, n, s) => Y(t, s, e)
                        },
                        [A.SearchTokenTypes.ANSWER_HAS]: {
                            regex: RegExp(`(?:\\s*-?(${e.map(e=>R.default.escape(e)).join("|")}))`, "i"),
                            follows: [A.SearchTokenTypes.FILTER_HAS],
                            validator: U,
                            componentType: "ANSWER",
                            queryKey: "has"
                        },
                        [A.SearchTokenTypes.FILTER_FILE_TYPE]: {
                            regex: H(m.default.Messages.SEARCH_FILTER_FILE_TYPE),
                            key: D(m.default.Messages.SEARCH_FILTER_FILE_TYPE),
                            plainText: m.default.Messages.SEARCH_FILTER_FILE_TYPE,
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
                            regex: H(m.default.Messages.SEARCH_FILTER_FILE_NAME),
                            key: D(m.default.Messages.SEARCH_FILTER_FILE_NAME),
                            plainText: m.default.Messages.SEARCH_FILTER_FILE_NAME,
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
                            regex: H(m.default.Messages.SEARCH_FILTER_BEFORE),
                            componentType: "FILTER",
                            key: D(m.default.Messages.SEARCH_FILTER_BEFORE),
                            plainText: m.default.Messages.SEARCH_FILTER_BEFORE,
                            getAutocompletions: (e, t, n) => W(e, n, A.SearchTokenTypes.FILTER_BEFORE)
                        },
                        [A.SearchTokenTypes.FILTER_ON]: {
                            regex: H(`(${m.default.Messages.SEARCH_FILTER_ON}|${m.default.Messages.SEARCH_FILTER_DURING})`),
                            componentType: "FILTER",
                            key: D(m.default.Messages.SEARCH_FILTER_DURING),
                            plainText: m.default.Messages.SEARCH_FILTER_DURING,
                            getAutocompletions: (e, t, n) => W(e, n, A.SearchTokenTypes.FILTER_ON)
                        },
                        [A.SearchTokenTypes.FILTER_AFTER]: {
                            regex: H(m.default.Messages.SEARCH_FILTER_AFTER),
                            componentType: "FILTER",
                            key: D(m.default.Messages.SEARCH_FILTER_AFTER),
                            plainText: m.default.Messages.SEARCH_FILTER_AFTER,
                            getAutocompletions: (e, t, n) => W(e, n, A.SearchTokenTypes.FILTER_AFTER)
                        },
                        [A.SearchTokenTypes.ANSWER_BEFORE]: {
                            regex: O,
                            follows: [A.SearchTokenTypes.FILTER_BEFORE],
                            componentType: "ANSWER",
                            mutable: !0,
                            validator: e => w(e, "before")
                        },
                        [A.SearchTokenTypes.ANSWER_ON]: {
                            regex: O,
                            follows: [A.SearchTokenTypes.FILTER_ON],
                            componentType: "ANSWER",
                            mutable: !0,
                            validator: e => w(e, "on")
                        },
                        [A.SearchTokenTypes.ANSWER_AFTER]: {
                            regex: O,
                            follows: [A.SearchTokenTypes.FILTER_AFTER],
                            componentType: "ANSWER",
                            mutable: !0,
                            validator: e => w(e, "after")
                        },
                        [A.SearchTokenTypes.FILTER_IN]: {
                            regex: H(m.default.Messages.SEARCH_FILTER_IN),
                            componentType: "FILTER",
                            key: D(m.default.Messages.SEARCH_FILTER_IN),
                            plainText: m.default.Messages.SEARCH_FILTER_IN,
                            validator: G,
                            getAutocompletions(e, t, n) {
                                "#" === e[0] && (e = e.substring(1));
                                let s = S.default.queryChannels({
                                    query: e,
                                    type: c.GUILD_SELECTABLE_CHANNELS_KEY,
                                    guildId: t,
                                    limit: 1 / 0
                                }).concat(S.default.queryChannels({
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
                                    let e = T.default.getChannelId(t),
                                        n = s.find(t => t.id === e);
                                    null != n && (s.splice(s.indexOf(n), 1), s.unshift(n))
                                }
                                let a = c.default.getTextChannelNameDisambiguations(t);
                                return i()(s).take(n).map(e => ({
                                    text: `${a[e.id]?.name??e.name}`,
                                    channel: e
                                })).value()
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
                            regex: H(m.default.Messages.SEARCH_FILTER_PINNED),
                            componentType: "FILTER",
                            key: D(m.default.Messages.SEARCH_FILTER_PINNED),
                            plainText: m.default.Messages.SEARCH_FILTER_PINNED,
                            getAutocompletions: () => [{
                                text: "true"
                            }, {
                                text: "false"
                            }]
                        },
                        [A.SearchTokenTypes.ANSWER_PINNED]: {
                            regex: k,
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
                return i()(K).keys().filter(e => A.IS_SEARCH_FILTER_TOKEN.test(e)).filter(e => null != K[e].key).map(e => ({
                    token: e,
                    text: K[e].key
                })).filter(t => {
                    let {
                        text: n
                    } = t;
                    return l()(e.toLowerCase(), n)
                }).take(t).value()
            }
            var q = K
        },
        266254: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var s = n("454836"),
                a = n("312916"),
                r = n("992888"),
                l = n("267951"),
                u = n("96206"),
                i = n("113647"),
                o = n("423917"),
                d = n("613085"),
                c = n("467006"),
                E = n("30175");
            async function _(e, t, n) {
                try {
                    return await e()
                } catch (e) {
                    e.body?.code === c.AbortCodes.NON_MODERATED_TAG_REQUIRED && r.default.show({
                        title: t,
                        body: n
                    })
                }
            }
            var T = {
                resort(e) {
                    a.default.dispatch({
                        type: "RESORT_THREADS",
                        channelId: e
                    })
                },
                createForumTag: (e, t) => s.default.post({
                    url: c.Endpoints.FORUM_TAGS(t),
                    body: {
                        name: e.name,
                        emoji_id: e.emojiId,
                        emoji_name: null != e.emojiId ? void 0 : e.emojiName,
                        moderated: e.moderated
                    }
                }),
                updateForumTag(e, t) {
                    let n = s.default.put({
                        url: c.Endpoints.FORUM_TAG(t, e.id),
                        body: {
                            name: e.name,
                            emoji_id: e.emojiId,
                            emoji_name: null == e.emojiId ? e.emojiName : void 0,
                            moderated: e.moderated
                        }
                    });
                    _(() => n, E.default.Messages.FORUM_TAG_EDIT_ERROR, E.default.Messages.FORUM_POST_NON_MODERATED_TAG_REQUIRED)
                },
                deleteForumTag(e, t) {
                    let n = s.default.delete({
                        url: c.Endpoints.FORUM_TAG(e, t)
                    });
                    _(() => n, E.default.Messages.FORUM_TAG_REMOVE_ERROR, E.default.Messages.FORUM_POST_NON_MODERATED_TAG_REQUIRED)
                },
                updateForumPostTags: async (e, t) => (await l.default.unarchiveThreadIfNecessary(e), s.default.patch({
                    url: c.Endpoints.CHANNEL(e),
                    body: {
                        applied_tags: t
                    }
                })),
                hideAdminOnboarding(e, t) {
                    a.default.dispatch({
                        type: "ADMIN_ONBOARDING_GUIDE_HIDE",
                        channelId: e,
                        hide: t
                    })
                },
                markPostAsSeen(e, t, n) {
                    (0, u.markAnalyticsFeedItemSeen)((0, o.getForumPostSeenManagerId)(e), t, n)
                },
                markPostAsUnseen(e, t, n) {
                    (0, u.markAnalyticsFeedItemUnseen)((0, o.getForumPostSeenManagerId)(e), t, n)
                },
                flushSeenItems(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.ForceFlushType.IMMEDIATE_WITH_COOLDOWN;
                    (0, u.flushAnalyticsFeedItems)((0, o.getForumPostSeenManagerId)(e), t)
                },
                async searchForumPosts(e, t, n, s) {
                    a.default.dispatch({
                        type: "FORUM_SEARCH_START",
                        channelId: t
                    });
                    try {
                        let r = await l.default.searchThreads(e, t, n, s);
                        (0, d.trackForumSearched)({
                            guildId: e,
                            channelId: t,
                            numSearchResults: r.length
                        }), a.default.dispatch({
                            type: "FORUM_SEARCH_SUCCESS",
                            channelId: t,
                            threadIds: r
                        })
                    } catch {
                        a.default.dispatch({
                            type: "FORUM_SEARCH_FAILURE",
                            channelId: t
                        })
                    }
                },
                updateForumSearchQuery(e, t) {
                    a.default.dispatch({
                        type: "FORUM_SEARCH_QUERY_UPDATED",
                        channelId: e,
                        query: t
                    })
                },
                clearForumSearch(e) {
                    a.default.dispatch({
                        type: "FORUM_SEARCH_CLEAR",
                        channelId: e
                    })
                }
            }
        },
        423917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                },
                getForumPostSeenManagerId: function() {
                    return u
                },
                markForumPostItemAsSeen: function() {
                    return i
                },
                markForumPostItemAsUnseen: function() {
                    return o
                }
            }), n("653041");
            var s = n("96206"),
                a = n("113647"),
                r = n("613085"),
                l = n("181103");

            function u(e) {
                return `${a.AnalyticsFeedTypes.FORUM_CHANNEL}_${e}`
            }

            function i(e, t, n) {
                (0, s.markAnalyticsFeedItemSeen)(u(e), t, n)
            }

            function o(e, t, n) {
                (0, s.markAnalyticsFeedItemUnseen)(u(e), t, n)
            }
            class d extends a.AnalyticsFeedItemSeenManager {
                constructor({
                    guildId: e,
                    channelId: t,
                    windowId: n,
                    isPaused: s
                }) {
                    super({
                        windowId: n,
                        isPaused: s,
                        id: u(t)
                    }), this.createFlushSeenItemsFunction = e => {
                        let t = this.trackedFeedItems,
                            n = this.channelId,
                            s = this.guildId,
                            a = {
                                guildId: s,
                                channelId: n,
                                sessionId: this.sessionId,
                                trackedFeedItems: t,
                                isForcedFlush: null != e
                            };
                        return () => (function(e) {
                            let {
                                guildId: t,
                                channelId: n,
                                sessionId: s,
                                trackedFeedItems: a,
                                isForcedFlush: l
                            } = e, u = [], i = [];
                            for (let e of Object.keys(a)) {
                                let t = a[e].computeSeenTimeDestructive(l);
                                t > 0 && (u.push(e), i.push(t))
                            }
                            0 !== u.length && (0, r.trackForumChannelSeenBatch)({
                                guildId: t,
                                channelId: n,
                                sessionId: s,
                                postIds: u,
                                additionalTimes: i
                            })
                        })(a)
                    }, this.guildId = e, this.channelId = t, this.sessionId = (0, l.getForumChannelSessionId)(t)
                }
            }
        },
        661395: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                JoinSourceType: function() {
                    return a
                },
                fetchMemberSupplemental: function() {
                    return M
                },
                getIntegrationLabel: function() {
                    return F
                },
                getJoinSourceTypeLabel: function() {
                    return m
                },
                registerFetchedSupplementals: function() {
                    return A
                },
                useGetIntegrationIconString: function() {
                    return g
                }
            }), n("653041");
            var s, a, r, l, u, i, o = n("454836"),
                d = n("24135"),
                c = n("960099"),
                E = n("763301"),
                _ = n("573575"),
                T = n("467006"),
                h = n("30175");
            let f = {};

            function I(e, t) {
                return e + t
            }

            function S(e, t) {
                return t.map(t => e + t)
            }

            function R(e) {
                return e.split("-")[1]
            }(l = s || (s = {}))[l.FAILED = 0] = "FAILED", l[l.UNFETCHED = 1] = "UNFETCHED", l[l.PENDING = 2] = "PENDING", l[l.SUCCEEDED = 3] = "SUCCEEDED", l[l.FAILED_NO_RETRY = 4] = "FAILED_NO_RETRY";

            function p(e, t) {
                e.forEach(e => {
                    f[e] = t
                })
            }

            function A(e, t) {
                t.forEach(t => (function(e, t, n) {
                    f[e + t] = 3
                })(e, t, 3))
            }(u = a || (a = {}))[u.UNSPECIFIED = 0] = "UNSPECIFIED", u[u.BOT = 1] = "BOT", u[u.INTEGRATION = 2] = "INTEGRATION", u[u.DISCOVERY = 3] = "DISCOVERY", u[u.HUB = 4] = "HUB", u[u.INVITE = 5] = "INVITE", u[u.VANITY_URL = 6] = "VANITY_URL";
            let m = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                switch (e) {
                    case 1:
                        return h.default.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT;
                    case 2:
                        return h.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION;
                    case 3:
                        return h.default.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY;
                    case 4:
                        return h.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB;
                    case 5:
                        return h.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INVITE;
                    case 6:
                        if (null != t) return h.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL_LABEL_NAME.format({
                            vanityUrl: t
                        });
                        return h.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL;
                    default:
                        return h.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN
                }
            };
            (i = r || (r = {})).DISCORD = "discord", i.TWITCH = "twitch", i.YOUTUBE = "youtube", i.GUILD_SUBSCRIPTION = "guild_subscription";
            let F = e => {
                    switch (e) {
                        case "twitch":
                            return h.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_TWITCH;
                        case "youtube":
                            return h.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_YOUTUBE;
                        default:
                            return h.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION
                    }
                },
                g = e => {
                    let t = E.default.get((0, _.useLegacyPlatformType)(e)),
                        n = (0, c.default)();
                    return null != t && ["twitch", "youtube"].includes(e) ? `url('${(0,d.isThemeDark)(n)?t.icon.darkSVG:t.icon.lightSVG}')` : null
                };

            function N(e) {
                return {
                    userId: e.user_id,
                    sourceInviteCode: e.source_invite_code,
                    joinSourceType: e.join_source_type,
                    inviterId: e.inviter_id,
                    integrationType: e.integration_type
                }
            }
            async function M(e, t) {
                let n = S(e, t),
                    s = n.filter(e => f[e] <= 1).map(R);
                if (0 === s.length) return [];
                p(n, 2);
                try {
                    let t = await o.default.post({
                        url: T.Endpoints.MEMBER_SAFETY_SUPPLEMENTAL(e),
                        body: {
                            user_ids: s
                        }
                    });
                    if (!Array.isArray(t.body)) return p(n, 0), [];
                    let a = t.body.map(N),
                        r = [];
                    a.forEach(e => {
                        let {
                            userId: t
                        } = e;
                        return r.push(t)
                    });
                    let l = S(e, r),
                        u = s.filter(e => !r.includes(e)),
                        i = S(e, u);
                    return p(l, 3), p(i, 0), a
                } catch (e) {
                    p(n, 0)
                }
                return []
            }
        },
        661675: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isIFrameModalUserEnabled: function() {
                    return a
                }
            });
            let s = (0, n("516086").createExperiment)({
                kind: "user",
                id: "2023-07_iframe_modal",
                label: "iFrame Modal",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable iFrameModal",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function a() {
                return s.getCurrentConfig({
                    location: "5c0a70_1"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        202939: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isIFrameModalForGuildEnabled: function() {
                    return l
                }
            });
            var s = n("516086"),
                a = n("467006");
            let r = (0, s.createExperiment)({
                kind: "guild",
                id: "2023-08_iframe_modal_guild",
                label: "iFrame Modal guild experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable iFrame Modal Guild",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function l(e) {
                return r.getCurrentConfig({
                    guildId: e ?? a.EMPTY_STRING_GUILD_ID,
                    location: "2d360b_1"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        34387: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("661675"),
                a = n("202939");

            function r(e) {
                return (0, s.isIFrameModalUserEnabled)() || (0, a.isIFrameModalForGuildEnabled)(e)
            }
        },
        598778: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isSpam: function() {
                    return u
                },
                isSpamSupported: function() {
                    return r
                },
                isSpammer: function() {
                    return l
                }
            });
            var s = n("871831"),
                a = n("467006");

            function r(e) {
                return void 0 !== e && e.type !== a.ChannelTypes.DM
            }

            function l(e) {
                return s.default.getUser(e)?.hasFlag(a.UserFlags.SPAMMER) ?? !1
            }

            function u(e) {
                return l(e.author.id)
            }
        },
        339530: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var s = n("735250");
            n("470079");
            var a = n("336328"),
                r = n("739949"),
                l = n("262113"),
                u = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: r,
                        ...u
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, l.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, s.jsx)("path", {
                                d: "M24 0v24H0V0z"
                            }), (0, s.jsx)("path", {
                                className: r,
                                fill: a,
                                d: "M12 16c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2z"
                            })]
                        })
                    })
                }, r.MoreVerticalIcon, void 0, {
                    size: 24
                })
        },
        717446: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var s = n("735250");
            n("470079");
            var a = n("336328"),
                r = n("472660"),
                l = n("262113"),
                u = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: r,
                        ...u
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, l.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            fill: a,
                            className: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"
                        })
                    })
                }, r.MoreHorizontalIcon, void 0, {
                    size: 24
                })
        },
        688894: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var s = n("735250");
            n("470079");
            var a = n("336328"),
                r = n("489312"),
                l = n("262113"),
                u = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: r,
                        ...u
                    } = e;
                    return (0, s.jsxs)("svg", {
                        ...(0, l.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, s.jsx)("path", {
                            className: r,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, s.jsx)("path", {
                            className: r,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, s.jsx)("path", {
                            className: r,
                            fill: a,
                            d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                        }), (0, s.jsx)("path", {
                            className: r,
                            fill: a,
                            d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                        })]
                    })
                }, r.GroupIcon, void 0, {
                    size: 24
                })
        },
        772817: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("735250");
            n("470079");
            var a = n("803997"),
                r = n.n(a),
                l = n("974328"),
                u = n("365104"),
                i = n("617825");
            let o = Object.freeze({
                    SIZE_10: i.size10,
                    SIZE_12: i.size12,
                    SIZE_14: i.size14,
                    SIZE_16: i.size16,
                    SIZE_20: i.size20,
                    SIZE_24: i.size24,
                    SIZE_32: i.size32
                }),
                d = e => {
                    let {
                        id: t,
                        muted: n = !1,
                        className: a = u.wrapper,
                        size: i = o.SIZE_14,
                        selectable: d = !1,
                        children: c,
                        color: E,
                        onClick: _,
                        onContextMenu: T,
                        style: h,
                        title: f,
                        uppercase: I
                    } = e;
                    return (0, s.jsx)(l.H, {
                        role: null != _ ? "button" : void 0,
                        onClick: _,
                        onContextMenu: T,
                        id: t,
                        className: r()(a, {
                            [u.base]: !0,
                            [i]: !0,
                            [u.selectable]: d,
                            [u.muted]: n,
                            [u.uppercase]: I
                        }),
                        title: f,
                        style: null != E ? {
                            ...h,
                            color: E
                        } : h,
                        children: c
                    })
                };
            d.Sizes = o;
            var c = d
        },
        96206: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                flushAnalyticsFeedItems: function() {
                    return l
                },
                markAnalyticsFeedItemSeen: function() {
                    return a
                },
                markAnalyticsFeedItemUnseen: function() {
                    return r
                }
            });
            var s = n("312916");

            function a(e, t, n) {
                s.default.dispatch({
                    type: "ANALYTICS_FEED_ITEM_SEEN",
                    id: e,
                    feedItemId: t,
                    timestampMillis: n
                })
            }

            function r(e, t, n) {
                s.default.dispatch({
                    type: "ANALYTICS_FEED_ITEM_UNSEEN",
                    id: e,
                    feedItemId: t,
                    timestampMillis: n
                })
            }

            function l(e, t) {
                s.default.dispatch({
                    type: "ANALYTICS_FEED_FLUSH",
                    id: e,
                    force: t
                })
            }
        },
        113647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnalyticsFeedItemSeenManager: function() {
                    return c
                },
                AnalyticsFeedTypes: function() {
                    return s
                },
                ForceFlushType: function() {
                    return a
                }
            }), n("653041");
            var s, a, r, l, u = n("512722"),
                i = n.n(u),
                o = n("312916");
            (r = s || (s = {})).GUILD_HOME = "guild_home", r.FORUM_CHANNEL = "forum_channel", (l = a || (a = {}))[l.IMMEDIATE = 0] = "IMMEDIATE", l[l.IMMEDIATE_WITH_COOLDOWN = 1] = "IMMEDIATE_WITH_COOLDOWN", l[l.IMMEDIATE_WITH_DELAY = 2] = "IMMEDIATE_WITH_DELAY";
            class d {
                constructor() {
                    this.seenIntervals = []
                }
                maybeMarkSeen(e) {
                    let t = this.seenIntervals[this.seenIntervals.length - 1];
                    return (null == t || null != t.endTimeMillis) && (this.seenIntervals.push({
                        startTimeMillis: e
                    }), !0)
                }
                maybeMarkUnseen(e) {
                    let t = this.seenIntervals[this.seenIntervals.length - 1];
                    return null != t && null == t.endTimeMillis && (t.endTimeMillis = e, !0)
                }
                isVisible() {
                    let e = this.seenIntervals[this.seenIntervals.length - 1];
                    return e?.startTimeMillis != null && e?.endTimeMillis == null
                }
                computeSeenTimeDestructive(e) {
                    let t = 0,
                        n = [];
                    for (let s of this.seenIntervals) {
                        if (null != s.endTimeMillis) {
                            t += s.endTimeMillis - s.startTimeMillis;
                            continue
                        }
                        if (e) {
                            let e = Date.now();
                            t += e - s.startTimeMillis, n.push({
                                startTimeMillis: e
                            });
                            continue
                        }
                        n.push(s)
                    }
                    return i()(n.length < 2, "there should only be a single left over data"), this.seenIntervals = n, Math.round(t)
                }
            }
            class c {
                constructor({
                    id: e,
                    windowId: t,
                    isPaused: n
                }) {
                    this.initialize = () => {
                        o.default.subscribe("ANALYTICS_FEED_ITEM_SEEN", this.handleFeedItemSeen), o.default.subscribe("ANALYTICS_FEED_ITEM_UNSEEN", this.handleFeedItemUnseen), o.default.subscribe("ANALYTICS_FEED_FLUSH", this.handleFeedItemFlush), o.default.subscribe("APP_STATE_UPDATE", this.handleAppStateUpdate), o.default.subscribe("DRAWER_OPEN", this.handleDrawerOpen), o.default.subscribe("DRAWER_CLOSE", this.handleDrawerClose), o.default.subscribe("WINDOW_FOCUS", this.handleWindowFocus), this.onInitialize?.()
                    }, this.terminate = () => {
                        o.default.unsubscribe("ANALYTICS_FEED_ITEM_SEEN", this.handleFeedItemSeen), o.default.unsubscribe("ANALYTICS_FEED_ITEM_UNSEEN", this.handleFeedItemUnseen), o.default.unsubscribe("ANALYTICS_FEED_FLUSH", this.handleFeedItemFlush), o.default.unsubscribe("APP_STATE_UPDATE", this.handleAppStateUpdate), o.default.unsubscribe("DRAWER_OPEN", this.handleDrawerOpen), o.default.unsubscribe("DRAWER_CLOSE", this.handleDrawerClose), o.default.unsubscribe("WINDOW_FOCUS", this.handleWindowFocus), this.onTerminate?.(), this.maybeFlushSeenItems(0)
                    }, this.handleFeedItemFlush = e => {
                        let {
                            id: t,
                            force: n
                        } = e;
                        this._id === t && this.maybeFlushSeenItems(n)
                    }, this.handleFeedItemSeen = e => {
                        let t = e.id,
                            n = e.timestampMillis,
                            s = e.feedItemId;
                        if (t !== this._id) return;
                        if (this._paused) {
                            this._pausedFeedItemIds.add(s);
                            return
                        }
                        let a = this.getTrackedFeedItem(s).maybeMarkSeen(n);
                        this.onFeedItemSeen?.(s, a)
                    }, this.handleFeedItemUnseen = e => {
                        let t = e.id,
                            n = e.timestampMillis,
                            s = e.feedItemId;
                        if (t !== this._id) return;
                        this._paused && this._pausedFeedItemIds.delete(s);
                        let a = this.getTrackedFeedItem(s).maybeMarkUnseen(n);
                        this.onFeedItemUnseen?.(s, a), this.maybeFlushSeenItems()
                    }, this.getTrackedFeedItem = e => (null == this.trackedFeedItems[e] && (this.trackedFeedItems[e] = new d), this.trackedFeedItems[e]), this.getVisibleFeedItemIds = () => {
                        let e = Object.keys(this.trackedFeedItems);
                        return new Set(e.filter(e => this.trackedFeedItems[e]?.isVisible()))
                    }, this.handleDrawerClose = () => {
                        this._isReactNavigationFocused && this.resume()
                    }, this.handleDrawerOpen = () => {
                        this._isReactNavigationFocused && this.pause()
                    }, this.handleAppStateUpdate = e => {
                        let {
                            state: t
                        } = e;
                        "active" === t && this._isReactNavigationFocused && this.resume(), "background" === t && (this._isReactNavigationFocused && this.pause(), this.maybeFlushSeenItems(0))
                    }, this.clearPausedFeedItemIds = () => {
                        this._pausedFeedItemIds = new Set, this._paused = !1
                    }, this.pause = () => {
                        if (this._paused) return;
                        let e = this.getVisibleFeedItemIds();
                        e.forEach(e => {
                            this.handleFeedItemUnseen({
                                id: this._id,
                                feedItemId: e,
                                timestampMillis: Date.now(),
                                type: "ANALYTICS_FEED_ITEM_UNSEEN"
                            })
                        }), this._paused = !0, this._pausedFeedItemIds = e
                    }, this.resume = () => {
                        this._paused && (this._paused = !1, this._pausedFeedItemIds.forEach(e => {
                            this.handleFeedItemSeen({
                                id: this._id,
                                feedItemId: e,
                                timestampMillis: Date.now(),
                                type: "ANALYTICS_FEED_ITEM_SEEN"
                            })
                        }), this.clearPausedFeedItemIds())
                    }, this.handleReactNavigationFocus = (e, t) => {
                        this._isReactNavigationFocused = e, this._isReactNavigationFocused && !t ? this.resume() : this.pause()
                    }, this.handleWindowFocus = e => {
                        this._windowId === e.windowId && (e.focused ? this.resume() : this.pause())
                    }, this.trackedFeedItems = {}, this._id = e, this._windowId = t, this._pausedFeedItemIds = new Set, this._paused = n ?? !1, this._isReactNavigationFocused = !0, this._lastFlushTimeMillis = Date.now()
                }
                maybeFlushSeenItems(e) {
                    if (null == e && Date.now() - this._lastFlushTimeMillis < 6e4 || 1 === e && Date.now() - this._lastFlushTimeMillis < 3e3) return Promise.resolve();
                    let t = this.createFlushSeenItemsFunction(e);
                    return null == t ? Promise.resolve() : (this._lastFlushTimeMillis = Date.now(), 0 === e || 1 === e) ? new Promise(async e => {
                        await t(), e()
                    }) : new Promise(e => {
                        setTimeout(async () => {
                            await t(), e()
                        }, 100)
                    })
                }
            }
        },
        111405: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearTokenCache: function() {
                    return F
                },
                filterHasAnswer: function() {
                    return N
                },
                getAutocompleteMode: function() {
                    return I
                },
                getFlattenedStringArray: function() {
                    return S
                },
                getQueryFromTokens: function() {
                    return p
                },
                getSearchOptionAnswer: function() {
                    return E
                },
                getSearchQueryFromTokens: function() {
                    return h
                },
                getSelectionScope: function() {
                    return f
                },
                getTotalResults: function() {
                    return R
                },
                refreshSearchTokens: function() {
                    return M
                },
                setIncludeNSFW: function() {
                    return T
                },
                showDatePicker: function() {
                    return g
                },
                tokenizeQuery: function() {
                    return m
                }
            });
            var s = n("392711"),
                a = n.n(s),
                r = n("572505"),
                l = n("668557"),
                u = n("371728"),
                i = n("871831"),
                o = n("84819"),
                d = n("467006"),
                c = n("30175");

            function E(e) {
                switch (e) {
                    case d.SearchTokenTypes.FILTER_FROM:
                        return c.default.Messages.SEARCH_ANSWER_FROM;
                    case d.SearchTokenTypes.FILTER_MENTIONS:
                        return c.default.Messages.SEARCH_ANSWER_MENTIONS;
                    case d.SearchTokenTypes.FILTER_HAS:
                        return c.default.Messages.SEARCH_ANSWER_HAS;
                    case d.SearchTokenTypes.FILTER_BEFORE:
                    case d.SearchTokenTypes.FILTER_ON:
                    case d.SearchTokenTypes.FILTER_AFTER:
                        return c.default.Messages.SEARCH_ANSWER_DATE;
                    case d.SearchTokenTypes.FILTER_IN:
                        return c.default.Messages.SEARCH_ANSWER_IN;
                    case d.SearchTokenTypes.FILTER_FILE_TYPE:
                        return c.default.Messages.SEARCH_ANSWER_FILE_TYPE;
                    case d.SearchTokenTypes.FILTER_FILE_NAME:
                        return c.default.Messages.SEARCH_ANSWER_FILE_NAME;
                    case d.SearchTokenTypes.FILTER_PINNED:
                        return c.default.Messages.SEARCH_ANSWER_BOOLEAN
                }
            }
            let _ = {
                [d.SearchTokenTypes.FILTER_BEFORE]: !0,
                [d.SearchTokenTypes.FILTER_AFTER]: !0,
                [d.SearchTokenTypes.FILTER_ON]: !0
            };

            function T(e, t) {
                if (u.default.didAgree(t)) {
                    let t = i.default.getCurrentUser();
                    null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed)
                }
            }

            function h(e) {
                let t = {};
                for (let [n, s] of(e.forEach(e => {
                        let {
                            type: n
                        } = e;
                        if (d.IS_SEARCH_FILTER_TOKEN.test(n)) return;
                        switch (n) {
                            case d.SearchTokenTypes.ANSWER_BEFORE:
                            case d.SearchTokenTypes.ANSWER_ON:
                            case d.SearchTokenTypes.ANSWER_AFTER:
                                let s = e.getData("start"),
                                    a = e.getData("end");
                                s && (t.min_id = o.default.fromTimestamp(s)), a && (t.max_id = o.default.fromTimestamp(a));
                                return
                        }
                        let r = function(e) {
                            let t = l.default[e],
                                n = null != t ? t.queryKey : null;
                            return null == n && (n = "content"), n
                        }(n);
                        null == t[r] && (t[r] = new Set);
                        let u = t[r];
                        switch (n) {
                            case d.SearchTokenTypes.ANSWER_USERNAME_FROM:
                            case d.SearchTokenTypes.ANSWER_USERNAME_MENTIONS:
                                u.add(e.getData("userId"));
                                break;
                            case d.SearchTokenTypes.ANSWER_FILE_TYPE:
                            case d.SearchTokenTypes.ANSWER_FILE_NAME:
                                u.add(e.getMatch(1));
                                break;
                            case d.SearchTokenTypes.ANSWER_IN:
                                u.add(e.getData("channel").id);
                                break;
                            case d.SearchTokenTypes.ANSWER_HAS:
                                u.add(e.getData("has"));
                                break;
                            case d.SearchTokenTypes.ANSWER_PINNED:
                                u.add(e.getData("pinned"));
                                break;
                            default:
                                u.add(e.getFullMatch().trim())
                        }
                    }), Object.entries(t))) s instanceof Set && (t[n] = Array.from(s));
                return t.content && (t.content = t.content.join(" ").trim(), !t.content && delete t.content), t
            }

            function f(e, t, n) {
                let s, a;
                let r = e.find((r, l) => t >= r.start && t <= r.end && n >= r.start && n <= r.end ? (null != e[l + 1] && (a = e[l + 1]), !0) : (s = r, !1));
                return null == r ? null : {
                    previousToken: s,
                    currentToken: r,
                    nextToken: a,
                    focusOffset: t,
                    anchorOffset: n
                }
            }

            function I(e, t) {
                let n;
                let {
                    currentToken: s,
                    nextToken: a,
                    previousToken: l
                } = e = e ?? {};
                if (0 === t.length) return {
                    type: d.SearchPopoutModes.EMPTY,
                    filter: null,
                    token: null
                };
                if (null == s) return {
                    type: d.SearchPopoutModes.FILTER_ALL,
                    filter: null,
                    token: null
                };
                if (d.IS_SEARCH_FILTER_TOKEN.test(s.type)) {
                    if (null == a || a.type === r.default.NON_TOKEN_TYPE) return {
                        type: d.SearchPopoutModes.FILTER,
                        filter: s.type,
                        token: a
                    };
                    if (null != a && !d.IS_SEARCH_ANSWER_TOKEN.test(a.type)) return {
                        type: d.SearchPopoutModes.FILTER,
                        filter: s.type,
                        token: null
                    }
                }
                return s.type === r.default.NON_TOKEN_TYPE && null != l && d.IS_SEARCH_FILTER_TOKEN.test(l.type) ? {
                    type: d.SearchPopoutModes.FILTER,
                    filter: l.type,
                    token: s
                } : (s.type === r.default.NON_TOKEN_TYPE && (n = s), {
                    type: d.SearchPopoutModes.FILTER_ALL,
                    filter: null,
                    token: n
                })
            }

            function S(e, t) {
                let n = [];
                return a()(e).forEach(e => {
                    if (null == e || 0 === e.results.length) return;
                    let s = e.group;
                    n = n.concat(e.results.map(e => {
                        let n = e.text;
                        if (t === d.SearchPopoutModes.FILTER_ALL) {
                            s = e.group ?? s;
                            let t = l.default[s];
                            t?.key != null && t?.key !== "" && (n = `${t.key} ${n}`)
                        }
                        return n
                    }))
                }), n.filter(e => e)
            }

            function R(e) {
                return e.reduce((e, t) => null == t ? e : t.results.length + e, 0)
            }

            function p(e) {
                return null == e ? "" : e.map(e => e.getFullMatch()).join("")
            }
            let A = new r.default;

            function m(e) {
                return A.tokenize(e)
            }

            function F() {
                return A.clearCache()
            }

            function g(e) {
                return null != e ? _[e] : null
            }

            function N(e, t) {
                let n = d.IS_SEARCH_FILTER_TOKEN.test(e.type);
                return (null != t || !n) && (null == t || !n || !!d.IS_SEARCH_ANSWER_TOKEN.test(t.type)) && !0
            }

            function M() {
                (0, l.refreshSearchTokens)(), A.reset(), a()(l.default).forOwn((e, t) => A.addRule({
                    type: t,
                    ...e
                }))
            }
        },
        548788: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GroupIcon: function() {
                    return l
                }
            });
            var s = n("735250");
            n("470079");
            var a = n("600186"),
                r = n("11768");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...i
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, r.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M14.5 8a3 3 0 1 0-2.7-4.3c-.2.4.06.86.44 1.12a5 5 0 0 1 2.14 3.08c.01.06.06.1.12.1ZM18.44 17.27c.15.43.54.73 1 .73h1.06c.83 0 1.5-.67 1.5-1.5a7.5 7.5 0 0 0-6.5-7.43c-.55-.08-.99.38-1.1.92-.06.3-.15.6-.26.87-.23.58-.05 1.3.47 1.63a9.53 9.53 0 0 1 3.83 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0c0 .83-.67 1.5-1.5 1.5a.2.2 0 0 1-.2-.16c-.2-.96-.56-1.87-.88-2.54-.1-.23-.42-.15-.42.1v2.1a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.32.67-.67 1.58-.88 2.54a.2.2 0 0 1-.2.16A1.5 1.5 0 0 1 2 20.5Z",
                        className: u
                    })
                })
            }
        },
        986423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MoreHorizontalIcon: function() {
                    return l
                }
            });
            var s = n("735250");
            n("470079");
            var a = n("600186"),
                r = n("11768");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...i
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, r.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        531963: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MoreVerticalIcon: function() {
                    return l
                }
            });
            var s = n("735250");
            n("470079");
            var a = n("600186"),
                r = n("11768");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...i
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, r.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M10 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=58504.a3a402885f01521e0025.js.map