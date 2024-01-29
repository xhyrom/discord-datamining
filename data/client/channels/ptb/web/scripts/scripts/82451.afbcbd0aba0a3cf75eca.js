(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["82451"], {
        658536: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            }), l("222007");
            var n = l("913144"),
                a = l("689988"),
                i = l("26989"),
                u = l("697218"),
                d = l("509");
            let s = null,
                r = () => {
                    let e = i.default.getCommunicationDisabledUserMap();
                    Object.keys(e).forEach(t => {
                        let l = (0, i.getGuildIdFromCommunicationDisabledUserKey)(t),
                            n = (0, i.getUserIdFromCommunicationDisabledUserKey)(t),
                            a = e[t];
                        !(0, d.isCommunicationDisabled)(a) && o(l, n)
                    })
                },
                o = (e, t) => {
                    var l, a, s, r, o, c;
                    let f = i.default.getMember(e, t),
                        E = u.default.getUser(t);
                    if (null == f || null == E || (0, d.isMemberCommunicationDisabled)(f)) return;
                    let C = {
                        ...f,
                        guildId: e,
                        nick: null !== (l = f.nick) && void 0 !== l ? l : E.username,
                        avatar: null !== (a = f.avatar) && void 0 !== a ? a : void 0,
                        premiumSince: null !== (s = f.premiumSince) && void 0 !== s ? s : void 0,
                        isPending: null !== (r = f.isPending) && void 0 !== r && r,
                        user: {
                            ...E,
                            email: null !== (o = E.email) && void 0 !== o ? o : void 0,
                            phone: null !== (c = E.phone) && void 0 !== c ? c : void 0
                        },
                        communicationDisabledUntil: null
                    };
                    n.default.dispatch({
                        type: "GUILD_MEMBER_UPDATE",
                        ...C
                    })
                };
            class c extends a.default {
                _initialize() {
                    s = setInterval(() => r(), 1e4)
                }
                _terminate() {
                    clearInterval(s)
                }
                constructor(...e) {
                    super(...e), this.clearGuildMemberTimeout = o
                }
            }
            var f = new c
        },
        341329: function(e, t, l) {
            "use strict";
            let n;
            l.r(t), l.d(t, {
                default: function() {
                    return J
                }
            }), l("222007");
            var a = l("803182"),
                i = l("811022"),
                u = l("95410"),
                d = l("913144"),
                s = l("404118"),
                r = l("819689"),
                o = l("115718"),
                c = l("689988"),
                f = l("408062"),
                E = l("619443"),
                C = l("582713"),
                h = l("233069"),
                g = l("982108"),
                N = l("42203"),
                _ = l("305961"),
                A = l("660478"),
                m = l("18494"),
                I = l("162771"),
                T = l("718517"),
                S = l("519841"),
                p = l("787336"),
                L = l("49111"),
                M = l("724210"),
                R = l("782340");
            let v = new i.default("MessageManager");

            function O(e) {
                let {
                    guildId: t,
                    channelId: l,
                    messageId: a,
                    forceFetch: i,
                    isPreload: d,
                    jumpType: s,
                    skipLocalFetch: c,
                    logFailures: C
                } = e;
                if (null == l) {
                    C && v.log("Skipping fetch because channelId is null");
                    return
                }
                if ((0, M.isStaticChannelRoute)(l)) {
                    C && v.log("Skipping fetch because channelId is a static route");
                    return
                }
                let h = N.default.getChannel(l);
                if ((null == h ? void 0 : h.type) === L.ChannelTypes.GUILD_STORE || (null == h ? void 0 : h.type) != null && L.ChannelTypesSets.GUILD_THREADS_ONLY.has(h.type)) {
                    C && v.log("Skipping fetch because channel is a forum/store");
                    return
                }
                let g = f.default.getOrCreate(l);
                S.AttachmentLinkRefreshExperiment.getCurrentConfig({
                    location: "fetch_messages"
                }).enabled && g.some(p.messageHasExpiredAttachmentUrl) && (v.log("Found expired attachment link, clearing messages"), f.default.clear(l), g = f.default.getOrCreate(l)), null != g.jumpTargetId && null == a && (g = g.mutate({
                    jumpTargetId: null,
                    jumped: !1,
                    jumpType: o.JumpTypes.ANIMATED
                }), f.default.commit(g)), null != g.focusTargetId && null == a && (g = g.mutate({
                    focusTargetId: null
                }), f.default.commit(g));
                let m = i;
                if (!d || E.default.isConnected() || g.loadingMore ? g.loadingMore || g.ready && !g.cached ? null != a ? m = !0 : C && v.log("Skipping fetch because no other conditions matched") : null == t || null != _.default.getGuild(t) ? m = !0 : C && v.log("Skipping fetch we are connected and have loaded messages") : m = !0, m) {
                    if (f.default.commit(g.mutate({
                            loadingMore: !0
                        })), null != a) r.default.jumpToMessage({
                        channelId: l,
                        messageId: a,
                        flash: !0,
                        isPreload: d,
                        skipLocalFetch: c,
                        jumpType: s
                    });
                    else if ((null == h ? void 0 : h.isThread()) && function(e) {
                            if (A.default.hasOpenedThread(e)) return !1;
                            if (null == n) {
                                var t;
                                n = null !== (t = u.default.get(P, {})) && void 0 !== t ? t : {}
                            }
                            if (e in n) return !1;
                            n[e] = Date.now();
                            let l = Date.now() - D;
                            for (let e in n) n[e] < l && delete n[e];
                            return u.default.set(P, n), !0
                        }(l)) v.log("Jumping to start of thread ".concat(h.id)), r.default.fetchMessages({
                        channelId: l,
                        limit: L.MAX_MESSAGES_PER_CHANNEL,
                        jump: {
                            messageId: l,
                            flash: !1
                        },
                        isPreload: d,
                        skipLocalFetch: c
                    });
                    else if ((null == h ? void 0 : h.isThread()) && A.default.hasTrackedUnread(h.id) && !g.ready) {
                        let e = A.default.getTrackedAckMessageId(h.id);
                        v.log("Jumping to most recent message in thread ".concat(h.id, " - ").concat(e)), r.default.fetchMessages({
                            channelId: l,
                            limit: L.MAX_MESSAGES_PER_CHANNEL,
                            jump: {
                                messageId: e,
                                flash: !1,
                                offset: 1
                            },
                            isPreload: d,
                            skipLocalFetch: c
                        })
                    } else r.default.fetchMessages({
                        channelId: l,
                        limit: L.MAX_MESSAGES_PER_CHANNEL,
                        isPreload: d,
                        skipLocalFetch: c,
                        jump: {
                            jumpType: o.JumpTypes.ANIMATED
                        }
                    })
                }
            }
            let D = 90 * T.default.Millis.DAY,
                P = "viewedThreadIds";

            function b() {
                let e = m.default.getChannelId();
                if (null != e) {
                    let l = N.default.getChannel(e);
                    if (null != l) {
                        var t;
                        let e = (0, a.matchPath)(location.pathname, {
                            path: L.Routes.CHANNEL(":guild", ":channel", ":message"),
                            exact: !0
                        });
                        O({
                            guildId: l.getGuildId(),
                            channelId: l.id,
                            messageId: null == e ? void 0 : null === (t = e.params) || void 0 === t ? void 0 : t.message
                        }), k(l.getGuildId(), l.id)
                    }
                }
            }

            function y() {
                let {
                    isPreload: e,
                    skipLocalFetch: t,
                    logFailures: l
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = m.default.getChannelId();
                if (null != n) {
                    let a = N.default.getChannel(n);
                    null != a ? ((0, h.isTextChannel)(a.type) ? O({
                        guildId: a.getGuildId(),
                        channelId: a.id,
                        isPreload: e,
                        skipLocalFetch: t,
                        logFailures: l
                    }) : l && v.log("Skipping fetch because the selected channel is not a text channel"), k(a.getGuildId(), a.id)) : l && v.log("Skipping fetch because channel is null")
                } else l && v.log("Skipping fetch because there is no selected channel")
            }

            function G(e) {
                let {
                    guildId: t,
                    channelId: l,
                    messageId: n,
                    jumpType: a
                } = e;
                O({
                    guildId: t,
                    channelId: l,
                    messageId: n,
                    jumpType: a
                }), k(t, l)
            }

            function H(e) {
                let {
                    guildId: t,
                    channelId: l
                } = e;
                O({
                    guildId: t,
                    channelId: l
                })
            }

            function k(e, t) {
                let l = g.default.getCurrentSidebarChannelId(t);
                if (null == l) return;
                let n = g.default.getCurrentSidebarMessageId(t);
                O({
                    guildId: e,
                    channelId: l,
                    messageId: n
                })
            }

            function U() {
                let e = m.default.getChannelId(),
                    t = I.default.getGuildId();
                if (null == t || null == e) return;
                let l = g.default.getSidebarState(e);
                (null == l ? void 0 : l.type) !== C.SidebarType.VIEW_CHANNEL && k(t, e)
            }

            function w(e) {
                let {
                    guildId: t,
                    channelId: l,
                    context: n
                } = e;
                n === L.CURRENT_APP_CONTEXT && (O({
                    guildId: t,
                    channelId: l
                }), k(t, l))
            }

            function V(e) {
                let {
                    channel: t,
                    messageId: l
                } = e, n = t.guild_id;
                null != n && m.default.getChannelId(n) === t.id && O({
                    guildId: n,
                    channelId: t.id,
                    messageId: l
                })
            }

            function j(e) {
                let {
                    channelId: t
                } = e;
                r.default.fetchMessages({
                    channelId: t,
                    limit: L.MAX_MESSAGES_PER_CHANNEL
                })
            }

            function x(e) {
                let {
                    response: t
                } = e;
                if (null == t || null == t.body) return null;
                if (t.body.code === L.AbortCodes.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
                    let e = t.body.retry_after;
                    null != e && s.default.show({
                        title: R.default.Messages.RATE_LIMITED,
                        body: R.default.Messages.ANNOUNCEMENT_EDIT_RATE_LIMIT.format({
                            retryAfterMinutes: Math.ceil(e / 60)
                        })
                    })
                }
            }
            let F = {};

            function W(e) {
                var t;
                let {
                    channelId: l,
                    jump: n,
                    isStale: a,
                    isPreview: i = !1
                } = e;
                if (i) return;
                let u = null !== (t = F[l]) && void 0 !== t ? t : 0;
                if (Date.now() - u < 10 * T.default.Millis.SECOND) return;
                F[l] = Date.now();
                let d = m.default.getChannelId(),
                    s = g.default.getCurrentSidebarChannelId(d),
                    o = l === d || l === s;
                a && E.default.isConnected() && o && r.default.fetchMessages({
                    channelId: l,
                    limit: L.MAX_MESSAGES_PER_CHANNEL,
                    jump: n
                })
            }

            function X(e) {
                let {
                    channelId: t,
                    messageRecord: l
                } = e;
                null != l && d.default.dispatch({
                    type: "MESSAGE_SEND_FAILED",
                    channelId: t,
                    messageId: l.id
                })
            }

            function Y(e) {
                let {
                    state: t
                } = e;
                if ("active" !== t) return !1;
                let l = m.default.getChannelId();
                if (null == l) return !1;
                r.default.fetchNewLocalMessages(l, L.MAX_MESSAGES_PER_CHANNEL)
            }
            class Z extends c.default {
                _initialize() {
                    d.default.subscribe("CONNECTION_OPEN", b)
                }
                _terminate() {
                    d.default.unsubscribe("CONNECTION_OPEN", b)
                }
                constructor(...e) {
                    super(...e), this.fetchMessages = O, this.loadSelectedChannelIfNecessary = y, this.stores = new Map().set(g.default, U), this.actions = {
                        APP_STATE_UPDATE: Y,
                        OVERLAY_INITIALIZE: b,
                        CHANNEL_SELECT: G,
                        VOICE_CHANNEL_SELECT: H,
                        THREAD_CREATE: V,
                        THREAD_LIST_SYNC: () => y(),
                        CHANNEL_CREATE: V,
                        CHANNEL_PRELOAD: w,
                        THREAD_CREATE_LOCAL: j,
                        GUILD_CREATE: () => y(),
                        MESSAGE_END_EDIT: x,
                        LOAD_MESSAGES_SUCCESS: W,
                        UPLOAD_FAIL: X,
                        CHANNEL_DELETE: () => y(),
                        THREAD_DELETE: () => y()
                    }
                }
            }
            var J = new Z
        },
        764828: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                SafetyWarningTypes: function() {
                    return i
                },
                SafetyWarningFeedbackTypes: function() {
                    return u
                },
                default: function() {
                    return h
                }
            });
            var n, a, i, u, d = l("446674"),
                s = l("913144"),
                r = l("42203");
            (n = i || (i = {}))[n.STRANGER_DANGER = 1] = "STRANGER_DANGER", n[n.INAPPROPRIATE_CONVERSATION_TIER_1 = 2] = "INAPPROPRIATE_CONVERSATION_TIER_1", n[n.INAPPROPRIATE_CONVERSATION_TIER_2 = 3] = "INAPPROPRIATE_CONVERSATION_TIER_2", (a = u || (u = {}))[a.UPVOTE = 0] = "UPVOTE", a[a.DOWNVOTE = 1] = "DOWNVOTE";
            let o = [],
                c = {};

            function f(e) {
                let {
                    safetyWarnings: t
                } = e;
                null != t && (c[e.id] = t), null == t && null != c[e.id] && delete c[e.id]
            }

            function E() {
                c = {}, Object.values(r.default.getMutablePrivateChannels()).forEach(e => {
                    f(e)
                })
            }
            class C extends d.default.Store {
                initialize() {
                    this.waitFor(r.default)
                }
                getChannelSafetyWarning(e, t) {
                    var l;
                    return null === (l = c[e]) || void 0 === l ? void 0 : l.find(e => e.id === t)
                }
                getChannelSafetyWarnings(e) {
                    var t;
                    return null !== (t = c[e]) && void 0 !== t ? t : o
                }
            }
            var h = new C(s.default, {
                CHANNEL_CREATE: function(e) {
                    f(e.channel)
                },
                CHANNEL_DELETE: function(e) {
                    null != c[e.channel.id] && delete c[e.channel.id]
                },
                CHANNEL_UPDATES: function(e) {
                    e.channels.forEach(e => {
                        f(e)
                    })
                },
                CONNECTION_OPEN: E,
                CONNECTION_OPEN_SUPPLEMENTAL: E,
                CHANNEL_SAFETY_WARNING_FEEDBACK: function(e) {
                    let {
                        channelId: t,
                        warningId: l,
                        feedbackType: n
                    } = e, a = c[t];
                    null != a && (c[t] = a.map(e => e.id === l ? {
                        ...e,
                        feedback_type: n
                    } : e))
                },
                CLEAR_CHANNEL_SAFETY_WARNINGS: function(e) {
                    let {
                        channelId: t
                    } = e, l = c[t];
                    null != l && (c[t] = l.map(e => ({
                        ...e,
                        dismiss_timestamp: void 0
                    })))
                },
                DISMISS_CHANNEL_SAFETY_WARNINGS: function(e) {
                    let {
                        channelId: t,
                        warningIds: l
                    } = e, n = c[t];
                    if (null == n) return;
                    let a = Date.now().toString();
                    c[t] = n.map(e => l.includes(e.id) ? {
                        ...e,
                        dismiss_timestamp: a
                    } : e)
                }
            })
        },
        774223: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("75196");

            function i(e) {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: i = "currentColor",
                    className: u,
                    foreground: d,
                    ...s
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, a.default)(s),
                    className: u,
                    width: t,
                    height: l,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        className: d,
                        fill: i,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 11C2 6.02944 6.02944 2 11 2H13C17.9706 2 22 6.02944 22 11V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V11ZM5.88 5.82497C4.71048 6.55593 4 7.83781 4 9.21697V18.7192C4 19.3698 4.61139 19.8471 5.24254 19.6893L10.9558 18.261C11.5695 18.1076 12 17.5562 12 16.9236V9.21697C12 6.07522 8.5442 4.15985 5.88 5.82497ZM10 12C10 11.4477 9.55228 11 9 11C8.44772 11 8 11.4477 8 12V14C8 14.5523 8.44772 15 9 15C9.55228 15 10 14.5523 10 14V12ZM17.6832 9.47564C17.4485 8.84145 16.5515 8.84145 16.3168 9.47564L16.1387 9.95707C15.9361 10.5045 15.5045 10.9361 14.9571 11.1387L14.4756 11.3168C13.8415 11.5515 13.8415 12.4485 14.4756 12.6832L14.9571 12.8613C15.5045 13.0639 15.9361 13.4955 16.1387 14.0429L16.3168 14.5244C16.5515 15.1585 17.4485 15.1585 17.6832 14.5244L17.8613 14.0429C18.0639 13.4955 18.4955 13.0639 19.0429 12.8613L19.5244 12.6832C20.1585 12.4485 20.1585 11.5515 19.5244 11.3168L19.0429 11.1387C18.4955 10.9361 18.0639 10.5045 17.8613 9.95707L17.6832 9.47564ZM14.1584 5.23782C14.2758 4.92073 14.7242 4.92073 14.8416 5.23782C14.9994 5.66433 15.3357 6.0006 15.7622 6.15842C16.0793 6.27576 16.0793 6.72424 15.7622 6.84158C15.3357 6.9994 14.9994 7.33567 14.8416 7.76218C14.7242 8.07927 14.2758 8.07927 14.1584 7.76218C14.0006 7.33567 13.6643 6.9994 13.2378 6.84158C12.9207 6.72424 12.9207 6.27576 13.2378 6.15842C13.6643 6.0006 14.0006 5.66433 14.1584 5.23782ZM18.8416 16.2378C18.7242 15.9207 18.2758 15.9207 18.1584 16.2378C18.0006 16.6643 17.6643 17.0006 17.2378 17.1584C16.9207 17.2758 16.9207 17.7242 17.2378 17.8416C17.6643 17.9994 18.0006 18.3357 18.1584 18.7622C18.2758 19.0793 18.7242 19.0793 18.8416 18.7622C18.9994 18.3357 19.3357 17.9994 19.7622 17.8416C20.0793 17.7242 20.0793 17.2758 19.7622 17.1584C19.3357 17.0006 18.9994 16.6643 18.8416 16.2378Z"
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=82451.afbcbd0aba0a3cf75eca.js.map