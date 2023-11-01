(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["31717"], {
        819689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return eM
                }
            });
            var a = n("394846"),
                s = n("872717"),
                l = n("819855"),
                i = n("913144"),
                r = n("408062"),
                d = n("979911"),
                u = n("716241"),
                o = n("802493"),
                c = n("595525"),
                E = n("219788"),
                f = n("679653"),
                _ = n("358269"),
                g = n("893694"),
                h = n("139514"),
                m = n("312016"),
                S = n("605250"),
                M = n("619443"),
                p = n("582415"),
                T = n("600798"),
                A = n("569808"),
                C = n("9294"),
                I = n("52393"),
                L = n("143291"),
                D = n("379534"),
                O = n("40566"),
                v = n("994918"),
                y = n("815297"),
                R = n("168730"),
                N = n("129953"),
                b = n("512395"),
                G = n("28007"),
                U = n("880731"),
                P = n("793277"),
                w = n("256572"),
                k = n("364685"),
                B = n("804888"),
                F = n("263024"),
                V = n("410912"),
                H = n("373469"),
                x = n("271938"),
                K = n("42203"),
                W = n("305961"),
                Y = n("337543"),
                j = n("377253"),
                X = n("957255"),
                J = n("824563"),
                z = n("660478"),
                q = n("27618"),
                Q = n("18494"),
                Z = n("162771"),
                $ = n("401848"),
                ee = n("697218"),
                et = n("599110"),
                en = n("568734"),
                ea = n("659632"),
                es = n("701909"),
                el = n("719923"),
                ei = n("299039"),
                er = n("404118"),
                ed = n("49111"),
                eu = n("724210"),
                eo = n("579033"),
                ec = n("782340");
            let eE = new S.default("MessageActionCreators"),
                ef = new S.default("MessageQueue"),
                e_ = !1;
            class eg {
                markComplete() {
                    this.completed = !0
                }
                constructor() {
                    this.completed = !1
                }
            }

            function eh(e) {
                let {
                    inviteKey: t,
                    channelId: n,
                    messageId: a,
                    location: s,
                    suggested: l = null,
                    overrideProperties: i = {}
                } = e, r = (0, C.parseExtraDataFromInviteKey)(t), d = K.default.getChannel(n);
                if (null != d) {
                    let e = null;
                    d.isMultiUserDM() ? e = ed.LoggingInviteTypes.GDM_INVITE : !d.isPrivate() && (e = ed.LoggingInviteTypes.SERVER_INVITE);
                    let n = {},
                        c = Y.default.getInvite(t);
                    if (null != c && c.state === ed.InviteStates.RESOLVED && null != c.channel) {
                        var o;
                        let t = c.channel;
                        n.invite_channel_id = t.id, n.invite_guild_id = null === (o = c.guild) || void 0 === o ? void 0 : o.id, n.invite_channel_type = t.type, null != c.inviter && (n.invite_inviter_id = c.inviter.id);
                        let a = H.default.getLastActiveStream();
                        if (null != a && a.channelId === t.id) {
                            e = ed.LoggingInviteTypes.STREAM, n.destination_user_id = a.ownerId;
                            let t = (0, p.getStreamerApplication)(a, J.default);
                            n.application_id = null != t ? t.id : null
                        }
                    }
                    null != l && (n.is_suggested = l.isAffinitySuggestion, n.row_num = l.rowNum, n.num_total = l.numTotal, n.num_affinity_connections = l.numAffinityConnections, n.is_filtered = l.isFiltered), n = {
                        ...n,
                        location: s,
                        invite_type: e,
                        invite_code: r.baseCode,
                        guild_id: d.getGuildId(),
                        channel_id: d.id,
                        message_id: a,
                        send_type: ed.SendTypes.DIRECT_MESSAGE,
                        invite_guild_scheduled_event_id: r.guildScheduledEventId,
                        ...i
                    }, u.default.trackWithMetadata(ed.AnalyticEvents.INVITE_SENT, n)
                } else {
                    let e = {},
                        n = Y.default.getInvite(t);
                    null != n && n.state === ed.InviteStates.RESOLVED && null != n.inviter && (e.invite_inviter_id = n.inviter.id, e = {
                        ...e,
                        location: s,
                        invite_type: ed.LoggingInviteTypes.FRIEND_INVITE,
                        invite_code: r.baseCode,
                        message_id: a,
                        send_type: ed.SendTypes.DIRECT_MESSAGE,
                        invite_guild_scheduled_event_id: r.guildScheduledEventId,
                        ...i
                    }, u.default.trackWithMetadata(ed.AnalyticEvents.INVITE_SENT, e))
                }
            }
            let em = {
                    [ed.AbortCodes.EMAIL_VERIFICATION_REQUIRED]: {
                        messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
                        messageGetter: () => ec.default.Messages.BOT_REQUIRES_EMAIL_VERIFICATION
                    },
                    [ed.AbortCodes.INVALID_MESSAGE_SEND_USER]: {
                        messageName: "BOT_DM_SEND_FAILED_WITH_HELP_LINK",
                        messageGetter: () => ec.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                            helpUrl: es.default.getArticleURL(ed.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
                        })
                    },
                    [ed.AbortCodes.RATE_LIMIT_DM_OPEN]: {
                        messageName: "BOT_DM_RATE_LIMITED",
                        messageGetter: () => ec.default.Messages.BOT_DM_RATE_LIMITED
                    },
                    [ed.AbortCodes.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
                        messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
                        messageGetter: () => ec.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
                    },
                    [ed.AbortCodes.SLOWMODE_RATE_LIMITED]: {
                        messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
                        messageGetter: () => ec.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
                    }
                },
                eS = {
                    receiveMessage(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        i.default.dispatch({
                            type: "MESSAGE_CREATE",
                            channelId: e,
                            message: t,
                            optimistic: n,
                            sendMessageOptions: a,
                            isPushNotification: !1
                        })
                    },
                    sendBotMessage(e, t, n) {
                        null != n && u.default.trackWithMetadata(ed.AnalyticEvents.AUTOMATED_MESSAGE_RECEIVED, {
                            message_author: "Clyde",
                            message_name: n
                        }), eS.receiveMessage(e, (0, y.createBotMessage)({
                            channelId: e,
                            content: t,
                            loggingName: n
                        }))
                    },
                    sendClydeError(e) {
                        let t, n, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            s = K.default.getChannel(e);
                        if (null != s) {
                            if (a === ed.AbortCodes.EXPLICIT_CONTENT) {
                                if (s.isDM()) t = ec.default.Messages.BOT_DM_EXPLICIT_CONTENT.format({
                                    name: (0, f.computeChannelName)(s, ee.default, q.default)
                                }), n = "BOT_DM_EXPLICIT_CONTENT";
                                else if (s.isMultiUserDM()) t = ec.default.Messages.BOT_GDM_EXPLICIT_CONTENT.format({
                                    name: (0, f.computeChannelName)(s, ee.default, q.default)
                                }), n = "BOT_GDM_EXPLICIT_CONTENT";
                                else {
                                    let e = W.default.getGuild(s.getGuildId());
                                    if (null == e) return;
                                    t = ec.default.Messages.BOT_GUILD_EXPLICIT_CONTENT.format({
                                        name: e.toString()
                                    }), n = "BOT_GUILD_EXPLICIT_CONTENT"
                                }
                            } else if (a === ed.AbortCodes.SLOWMODE_RATE_LIMITED) t = ec.default.Messages.CHANNEL_SLOWMODE_DESC.format({
                                seconds: s.rateLimitPerUser
                            }), n = "SLOWMODE_RATE_LIMITED";
                            else if (a === ed.AbortCodes.INVALID_MESSAGE_SEND_USER) t = ec.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                                helpUrl: es.default.getArticleURL(ed.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
                            }), n = "INVALID_MESSAGE_SEND_USER";
                            else if (a === ed.AbortCodes.TOO_MANY_THREADS) {
                                let e = s.isForumLikeChannel() || s.isForumPost();
                                t = e ? ec.default.Messages.BOT_DM_TOO_MANY_POSTS : ec.default.Messages.BOT_DM_TOO_MANY_THREADS, n = "TOO_MANY_THREADS"
                            } else a === ed.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS ? (t = ec.default.Messages.BOT_DM_TOO_MANY_ANNOUNCEMENT_THREADS, n = "TOO_MANY_ANNOUNCEMENT_THREADS") : a === ed.AbortCodes.HARMFUL_LINK_MESSAGE_BLOCKED ? (t = ec.default.Messages.HARMFUL_LINK_MESSAGE_BLOCKED_ERROR.format({
                                helpUrl: ed.MarketingURLs.HARMFUL_LINKS
                            }), n = "HARMFUL_LINK_MESSAGE_BLOCKED") : a in em ? (n = em[a].messageName, t = em[a].messageGetter()) : (t = ec.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                                helpUrl: es.default.getArticleURL(ed.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
                            }), n = "SEND_FAILED (".concat(a, ")"));
                            eS.sendBotMessage(e, t, n)
                        }
                    },
                    truncateMessages(e, t, n) {
                        i.default.dispatch({
                            type: "TRUNCATE_MESSAGES",
                            channelId: e,
                            truncateBottom: t,
                            truncateTop: n
                        })
                    },
                    clearChannel(e) {
                        i.default.dispatch({
                            type: "CLEAR_MESSAGES",
                            channelId: e
                        })
                    },
                    jumpToPresent(e, t) {
                        eS.trackJump(e, null, "Present");
                        let n = {
                            present: !0
                        };
                        j.default.hasPresent(e) ? i.default.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            jump: n,
                            channelId: e,
                            limit: t
                        }) : eS.fetchMessages({
                            channelId: e,
                            limit: t,
                            jump: n
                        })
                    },
                    trackJump(e, t, n, a) {
                        u.default.trackWithMetadata(ed.AnalyticEvents.JUMP, {
                            context: n,
                            channel_id: e,
                            message_id: t,
                            ...a
                        })
                    },
                    jumpToMessage(e) {
                        let {
                            channelId: t,
                            messageId: n,
                            flash: a = !1,
                            offset: s,
                            context: l,
                            extraProperties: i = null,
                            isPreload: r,
                            returnMessageId: d,
                            skipLocalFetch: u,
                            jumpType: o
                        } = e;
                        return "string" == typeof l && eS.trackJump(t, n, l, i), eS.fetchMessages({
                            channelId: t,
                            limit: ed.MAX_MESSAGES_FOR_JUMP,
                            jump: {
                                messageId: n,
                                flash: a,
                                offset: s,
                                returnMessageId: d,
                                jumpType: o
                            },
                            isPreload: r,
                            skipLocalFetch: u
                        })
                    },
                    focusMessage(e) {
                        let {
                            channelId: t,
                            messageId: n
                        } = e;
                        eS.fetchMessages({
                            channelId: t,
                            limit: ed.MAX_MESSAGES_FOR_JUMP,
                            focus: {
                                messageId: n
                            }
                        })
                    },
                    fetchMessages(e) {
                        var t;
                        let {
                            channelId: n,
                            before: a,
                            after: l,
                            limit: d,
                            jump: u,
                            focus: o,
                            isPreload: c,
                            skipLocalFetch: E,
                            truncate: f
                        } = e, g = K.default.getChannel(n), h = M.default.isConnectedOrOverlay(), m = Date.now();
                        if (null != g && g.type === ed.ChannelTypes.GUILD_STORE) return !1;
                        if (n === eu.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return;
                        if (eE.log("Fetching messages for ".concat(n, " between ").concat(a, " and ").concat(l, ". jump=").concat(JSON.stringify(u))), eS._tryFetchMessagesCached({
                                channelId: n,
                                before: a,
                                after: l,
                                limit: d,
                                jump: u,
                                focus: o,
                                truncate: f
                            })) return;
                        V.default.fetchMessages.recordStart();
                        let S = null != u ? u : void 0;
                        null == S && null != o && (S = {
                            ...o
                        });
                        let p = r.default.getOrCreate(n),
                            T = p.loadStart(S);
                        r.default.commit(T), i.default.dispatch({
                            type: "LOAD_MESSAGES"
                        });
                        let A = null === (t = S) || void 0 === t ? void 0 : t.messageId,
                            C = new eg;
                        return !E && this.fetchLocalMessages(n, a, l, d, C), s.default.get({
                            url: ed.Endpoints.MESSAGES(n),
                            query: {
                                before: a,
                                after: l,
                                limit: d,
                                around: A,
                                preload: c
                            },
                            retries: 2,
                            oldFormErrors: !0
                        }).then(e => (V.default.fetchMessages.recordEnd(), V.default.dispatchMessages.measure(() => {
                            var t;
                            let s = e.body,
                                r = null != a,
                                o = null != l,
                                c = null == a && null == l,
                                E = null != A || s.length === d && (r || c),
                                S = null != A || o && s.length === d;
                            if (null != A) {
                                let e = Math.floor(d / 2),
                                    t = [A, ...s.map(e => {
                                        let {
                                            id: t
                                        } = e;
                                        return t
                                    })].filter((e, t, n) => n.indexOf(e) === t).sort(ei.default.compare),
                                    a = t.indexOf(A);
                                if (a < e && (E = !1), s.length - a < e && (S = !1), S && s.length > 0) {
                                    let e = z.default.lastMessageId(n);
                                    s[0].id === e && (S = !1)
                                }
                            }
                            eE.log("Fetched ".concat(s.length, " messages for ").concat(n, " isBefore:").concat(r, " isAfter:").concat(o)), C.markComplete();
                            let p = (0, b.isChannelHighlightsEnabledForGuild)(null !== (t = null == g ? void 0 : g.guild_id) && void 0 !== t ? t : "");
                            if (p && (null == u ? void 0 : u.isHighlight)) {
                                let e = (0, _.getUnreadChannelHighlights)(n, z.default.ackMessageId(n));
                                if (e.length >= 0) {
                                    let t = e[0];
                                    if (null == s.find(e => e.id === t)) return eS.jumpToMessage({
                                        channelId: n,
                                        messageId: t,
                                        flash: null == u ? void 0 : u.flash,
                                        jumpType: null == u ? void 0 : u.jumpType
                                    }), !0
                                }
                            }
                            i.default.dispatch({
                                type: "LOAD_MESSAGES_SUCCESS",
                                channelId: n,
                                messages: s,
                                isBefore: r,
                                isAfter: o,
                                hasMoreBefore: E,
                                hasMoreAfter: S,
                                limit: d,
                                jump: u,
                                isStale: !h || M.default.lastTimeConnectedChanged() >= m,
                                truncate: f
                            })
                        }), !0), () => (eE.log("Failed to fetch messages for ".concat(n)), i.default.dispatch({
                            type: "LOAD_MESSAGES_FAILURE",
                            channelId: n
                        }), !1))
                    },
                    async fetchLocalMessages(e, t, n, a, s) {
                        let l = K.default.getBasicChannel(e),
                            d = r.default.getOrCreate(e),
                            u = o.default.database();
                        if (null == u || null == l || null != t || null != n) {
                            V.default.addLocalMessages(e, -1);
                            return
                        }
                        if (d.ready && !d.cached) {
                            V.default.addLocalMessages(e, -2);
                            return
                        }
                        let f = await (0, c.tryLoadAsync)(() => E.default.load(u, e, a));
                        if (null == f) {
                            V.default.addLocalMessages(e, -3);
                            return
                        }
                        if (eE.log("fetched ".concat(f.messages.length, " messages from local database (channel_id: ").concat(e, ", remote_fetch_completed: ").concat(s.completed, ")")), V.default.addLocalMessages(e, f.messages.length), !s.completed && f.messages.length > 0) {
                            let t = f.messages.length >= a && f.connectionId === M.default.lastTimeConnectedChanged();
                            i.default.dispatch({
                                type: "LOCAL_MESSAGES_LOADED",
                                guildId: l.guild_id,
                                channelId: e,
                                users: f.users,
                                members: f.members,
                                messages: f.messages,
                                stale: !t
                            })
                        }
                    },
                    async fetchNewLocalMessages(e, t) {
                        var n;
                        let a = K.default.getBasicChannel(e),
                            s = o.default.database();
                        if (null == s || null == a) return;
                        let l = r.default.getOrCreate(e);
                        if (l.hasMoreAfter) return;
                        let d = await (0, c.tryLoadAsync)(() => E.default.load(s, e, t));
                        if (null == d) return;
                        l = r.default.getOrCreate(e);
                        let u = null === (n = l.last()) || void 0 === n ? void 0 : n.id,
                            f = null == u ? d.messages : d.messages.filter(e => ei.default.compare(e.id, u) > 0);
                        eE.log("Fetched ".concat(d.messages.length, " messages from the cache after foregrounding. ").concat(f.length, " are new")), 0 !== f.length && i.default.dispatch({
                            type: "LOCAL_MESSAGES_LOADED",
                            guildId: a.guild_id,
                            channelId: e,
                            users: d.users,
                            members: d.members,
                            messages: f,
                            stale: !0
                        })
                    },
                    _tryFetchMessagesCached(e) {
                        var t, n, a, s;
                        let {
                            channelId: l,
                            before: r,
                            after: d,
                            limit: u,
                            jump: o,
                            focus: c,
                            truncate: E
                        } = e, f = j.default.getMessages(l);
                        if (f.cached || !f.ready) return !1;
                        if ((null === (t = o) || void 0 === t ? void 0 : t.messageId) != null || (null == c ? void 0 : c.messageId) != null) {
                            if ((null === (n = o) || void 0 === n ? void 0 : n.messageId) != null && f.has(o.messageId, !1)) return i.default.dispatch({
                                type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                channelId: l,
                                jump: o,
                                limit: u,
                                truncate: E
                            }), !0;
                            if ((null == c ? void 0 : c.messageId) != null) {
                                if (f.has(c.messageId, !1)) return i.default.dispatch({
                                    type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                    channelId: l,
                                    focus: c,
                                    limit: u,
                                    truncate: E
                                }), !0;
                                o = {
                                    ...c
                                }
                            }
                            let e = (null === (a = o) || void 0 === a ? void 0 : a.messageId) != null ? ei.default.extractTimestamp(null === (s = o) || void 0 === s ? void 0 : s.messageId) : 0,
                                t = f.first(),
                                r = f.last();
                            if (!f.hasMoreBefore && null != t && ei.default.extractTimestamp(t.id) >= e || !f.hasMoreAfter && null != r && ei.default.extractTimestamp(r.id) <= e || null != t && null != r && ei.default.extractTimestamp(t.id) < e && ei.default.extractTimestamp(r.id) > e) return i.default.dispatch({
                                type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                channelId: l,
                                jump: o,
                                limit: ed.MAX_MESSAGES_FOR_JUMP
                            }), !0
                        } else if (null != r && f.hasBeforeCached(r)) return i.default.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            channelId: l,
                            before: r,
                            limit: u,
                            truncate: E
                        }), !0;
                        else if (null != d && f.hasAfterCached(d)) return i.default.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            channelId: l,
                            after: d,
                            limit: u,
                            truncate: E
                        }), !0;
                        return !1
                    },
                    async sendMessage(e, t) {
                        var n;
                        let a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        if (t.reaction) return Promise.resolve();
                        let l = await (0, P.default)(e);
                        if (null != l) return eS.sendMessage(l, t, a, s);
                        let i = () => eS._sendMessage(e, t, s),
                            r = L.LocalMessageBackgroundSendingExperiment.getCurrentConfig({
                                location: "8e1e29_1"
                            }).enableBackgroundSending ? D.default.backgroundify(i, void 0) : i,
                            d = null !== (n = s.nonce) && void 0 !== n ? n : (0, y.createNonce)();
                        return (s = {
                            ...s,
                            nonce: d
                        }, O.default.recordMessageSendAttempt(e, d), j.default.isReady(e)) ? r() : a && e !== eu.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID ? (ef.info("Waiting for channel ".concat(e, " to be ready before sending.")), new Promise((t, n) => {
                            j.default.whenReady(e, () => {
                                ef.info("Channel ".concat(e, " is ready for sending now.")), r().then(t, n)
                            })
                        })) : r()
                    },
                    getSendMessageOptionsForReply(e) {
                        var t;
                        if (null == e) return {};
                        let n = {
                                guild_id: null !== (t = e.channel.getGuildId()) && void 0 !== t ? t : void 0,
                                channel_id: e.channel.id,
                                message_id: e.message.id
                            },
                            a = e.shouldMention ? void 0 : {
                                parse: Object.values(ed.AllowedMentionTypes),
                                replied_user: !1
                            };
                        return {
                            messageReference: n,
                            allowedMentions: a
                        }
                    },
                    sendInvite: (e, t, n, a) => eS._sendMessage(e, {
                        content: (0, I.default)(t),
                        tts: !1,
                        validNonShortcutEmojis: [],
                        invalidEmojis: []
                    }, {
                        location: n,
                        suggestedInvite: null != a ? a : void 0
                    }),
                    sendActivityBookmark: (e, t, n, a) => eS._sendMessage(e, {
                        content: t,
                        tts: !1,
                        validNonShortcutEmojis: [],
                        invalidEmojis: []
                    }, {
                        location: n,
                        suggestedInvite: null != a ? a : void 0
                    }),
                    sendClydeProfileOverride: (e, t, n, a) => eS._sendMessage(e, {
                        content: t,
                        tts: !1,
                        validNonShortcutEmojis: [],
                        invalidEmojis: []
                    }, {
                        location: n,
                        suggestedInvite: null != a ? a : void 0
                    }),
                    sendStickers(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                            s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                        return eS._sendMessage(e, {
                            content: n,
                            invalidEmojis: [],
                            validNonShortcutEmojis: [],
                            tts: s
                        }, {
                            ...a,
                            stickerIds: t
                        })
                    },
                    sendGreetMessage(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                messageReference: a,
                                allowedMentions: l
                            } = n;
                        return s.default.post({
                            url: ed.Endpoints.MESSAGES_GREET(e),
                            body: {
                                sticker_ids: [t],
                                allowed_mentions: l,
                                message_reference: a
                            },
                            oldFormErrors: !0
                        }).then(n => (v.default.donateSentMessage(n.body.content, e), eS.receiveMessage(e, n.body), i.default.dispatch({
                            type: "STICKER_TRACK_USAGE",
                            stickerIds: [t]
                        }), n), t => {
                            throw eE.log("Failed to send greeting"), 429 !== t.status && eS.sendClydeError(e, t.body.code), i.default.dispatch({
                                type: "MESSAGE_SEND_FAILED",
                                messageId: t.body.id,
                                channelId: e
                            }), t
                        })
                    },
                    _sendMessage(e, t, n) {
                        var s, l;
                        let r = (0, P.default)(e);
                        if (null != r) return ef.info("Converting channel to a private channel"), r.then(e => {
                            ef.info("Finished converting channel to a private channel"), eS._sendMessage(e, t, n)
                        });
                        let o = t.content,
                            {
                                invalidEmojis: c,
                                validNonShortcutEmojis: E,
                                tts: f = !1
                            } = t,
                            {
                                activityAction: _,
                                location: S,
                                suggestedInvite: M,
                                stickerIds: p,
                                messageReference: C,
                                allowedMentions: I
                            } = n,
                            L = null !== (s = n.flags) && void 0 !== s ? s : 0,
                            [D, N] = (0, B.default)(o);
                        if (D && (o = N, L = (0, en.addFlag)(L, ed.MessageFlags.SUPPRESS_NOTIFICATIONS)), "" === o && null == _ && null == p) return Promise.reject(Error("not sending empty message"));
                        let b = null != C ? ed.MessageTypes.REPLY : ed.MessageTypes.DEFAULT,
                            w = null !== (l = n.nonce) && void 0 !== l ? l : (0, y.createNonce)();
                        if (!1 !== n.eagerDispatch) {
                            let t = (0, y.default)({
                                channelId: e,
                                content: o,
                                tts: f,
                                type: b,
                                messageReference: C,
                                allowedMentions: I,
                                flags: 0 !== L ? L : void 0,
                                nonce: w
                            });
                            (0, G.updateComboOnMessageSend)(e, t.id), null != p && (t.sticker_items = p.map(e => k.default.getStickerById(e)).filter(e => null != e)), eS.receiveMessage(e, t, !0, n)
                        }
                        if (!e_ && null != c && c.length > 0) {
                            let t, n;
                            e_ = !0;
                            let a = ee.default.getCurrentUser();
                            c.some(e => e.animated) && !el.default.canUseAnimatedEmojis(a) ? (t = ec.default.Messages.INVALID_ANIMATED_EMOJI_BODY_UPGRADE, n = "INVALID_ANIMATED_EMOJI_BODY") : X.default.canWithPartialContext(ed.Permissions.USE_EXTERNAL_EMOJIS, {
                                channelId: e
                            }) ? (t = ec.default.Messages.INVALID_EXTERNAL_EMOJI_BODY_UPGRADE, n = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE") : (t = ec.default.Messages.INVALID_EXTERNAL_EMOJI_BODY, n = "INVALID_EXTERNAL_EMOJI_BODY"), eS.sendBotMessage(e, t, n)
                        }
                        let F = {
                            type: d.MessageDataType.SEND,
                            message: {
                                channelId: e,
                                content: o,
                                nonce: w,
                                tts: f,
                                message_reference: C,
                                allowed_mentions: I,
                                flags: L
                            }
                        };
                        if (null != _) {
                            let e = _.type === ed.ActivityActionTypes.JOIN_REQUEST ? null == _ ? void 0 : _.activity.session_id : x.default.getSessionId();
                            if (null != e) {
                                let t = {
                                        type: _.type,
                                        session_id: e
                                    },
                                    {
                                        activity: n
                                    } = _;
                                null != n.party && null != n.party.id && (t.party_id = n.party.id), F.message.application_id = n.application_id, F.message.activity = t
                            }
                        }
                        return null != p && (F.message.sticker_ids = p), U.default.isEnabled() && (F.message.has_poggermode_enabled = !0), (0, g.default)(e) && (F.message.allow_proactive_clyde_reply = !0), new Promise((t, s) => {
                            let l = Date.now(),
                                r = d.default.length,
                                c = Math.floor(1e4 * Math.random());
                            ef.info("Queueing message to be sent LogId:".concat(c)), d.default.enqueue(F, d => {
                                let c = Date.now() - l;
                                if (d.ok) v.default.donateSentMessage(o, e), eS.receiveMessage(e, d.body, !0, {
                                    sendAnalytics: {
                                        duration: c,
                                        queueSize: r
                                    }
                                }), O.default.recordMessageSendApiResponse(w), i.default.dispatch({
                                    type: "SLOWMODE_RESET_COOLDOWN",
                                    slowmodeType: $.SlowmodeType.SendMessage,
                                    channelId: e
                                }), i.default.dispatch({
                                    type: "EMOJI_TRACK_USAGE",
                                    emojiUsed: E
                                }), i.default.dispatch({
                                    type: "STICKER_TRACK_USAGE",
                                    stickerIds: p
                                }), ! function(e) {
                                    let {
                                        content: t,
                                        channelId: n,
                                        messageId: s,
                                        location: l,
                                        suggested: i = null,
                                        overrideProperties: r = {}
                                    } = e;
                                    (0, m.default)(t).forEach(e => {
                                        let {
                                            type: t,
                                            code: d
                                        } = e;
                                        if (t === h.CodedLinkType.INVITE) eh({
                                            inviteKey: d,
                                            channelId: n,
                                            messageId: s,
                                            location: l,
                                            suggested: i,
                                            overrideProperties: r
                                        });
                                        else if (t === h.CodedLinkType.TEMPLATE) {
                                            let e = A.default.getGuildTemplate(d);
                                            if (null == e || e.state === eo.GuildTemplateStates.RESOLVING) return;
                                            u.default.trackWithMetadata(ed.AnalyticEvents.GUILD_TEMPLATE_LINK_SENT, {
                                                guild_template_code: d,
                                                guild_template_name: e.name,
                                                guild_template_description: e.description,
                                                guild_template_guild_id: e.sourceGuildId
                                            })
                                        } else if (t === h.CodedLinkType.BUILD_OVERRIDE);
                                        else if (t === h.CodedLinkType.EVENT);
                                        else if (t === h.CodedLinkType.CHANNEL_LINK);
                                        else if (t === h.CodedLinkType.APP_DIRECTORY_PROFILE) et.default.track(ed.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, {
                                            application_id: d,
                                            device_platform: a.isMobile ? "mobile_web" : "desktop_web",
                                            guild_id: Z.default.getGuildId(),
                                            channel_id: Q.default.getChannelId()
                                        });
                                        else if (t === h.CodedLinkType.ACTIVITY_BOOKMARK);
                                        else if (t === h.CodedLinkType.EMBEDDED_ACTIVITY_INVITE);
                                        else if (t === h.CodedLinkType.GUILD_PRODUCT);
                                        else if (t === h.CodedLinkType.SERVER_SHOP);
                                        else if (t === h.CodedLinkType.CLYDE_PROFILE);
                                        else throw Error("Unknown coded link type: ".concat(t))
                                    })
                                }({
                                    content: o,
                                    channelId: e,
                                    messageId: d.body.id,
                                    location: null != S ? S : "chat_input",
                                    suggested: M
                                }), ! function(e, t, n, a, s) {
                                    (0, ea.findGiftCodes)(e).forEach(e => {
                                        let l = K.default.getChannel(t);
                                        null != l && u.default.trackWithMetadata(ed.AnalyticEvents.GIFT_CODE_SENT, {
                                            location: a,
                                            gift_code: e,
                                            guild_id: l.getGuildId(),
                                            channel_id: l.id,
                                            channel_type: l.type,
                                            message_id: n,
                                            automatic_send: s
                                        })
                                    })
                                }(o, e, d.body.id, null != S ? S : "chat_input", !!n.isGiftLinkSentOnBehalfOfUser), t(d);
                                else {
                                    var f;
                                    eE.log("Failed to send message", {
                                        hasErr: d.hasErr,
                                        status: d.status,
                                        code: null === (f = d.body) || void 0 === f ? void 0 : f.code,
                                        error: d.err
                                    });
                                    let t = !1;
                                    if (d.hasErr) "ABORTED" === d.err.code && (t = !0);
                                    else if (d.status >= 400 && d.status < 500 && d.body) {
                                        if (d.body.code === ed.AbortCodes.SLOWMODE_RATE_LIMITED) {
                                            let t = d.body.retry_after;
                                            null != t && t > 0 && i.default.dispatch({
                                                type: "SLOWMODE_SET_COOLDOWN",
                                                channelId: e,
                                                slowmodeType: $.SlowmodeType.SendMessage,
                                                cooldownMs: 1e3 * t
                                            })
                                        } else T.AUTOMOD_ERROR_CODES.has(d.body.code) ? i.default.dispatch({
                                            type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                            messageData: F,
                                            errorResponseBody: {
                                                code: d.body.code,
                                                message: d.body.message
                                            }
                                        }) : d.body.code === ed.AbortCodes.POGGERMODE_TEMPORARILY_DISABLED ? i.default.dispatch({
                                            type: "POGGERMODE_TEMPORARILY_DISABLED"
                                        }) : d.body.code === ed.AbortCodes.CLYDE_CONSENT_REQUIRED ? i.default.dispatch({
                                            type: "MESSAGE_FAILED_CLYDE_CONSENT",
                                            messageId: w,
                                            channelId: e
                                        }) : eS.sendClydeError(e, d.body.code)
                                    }
                                    t ? eS.deleteMessage(e, w, !0) : (i.default.dispatch({
                                        type: "MESSAGE_SEND_FAILED",
                                        messageId: w,
                                        channelId: e
                                    }), (0, R.logMessageSendFailure)({
                                        failureCode: d.hasErr ? void 0 : d.status,
                                        errorMessage: d.hasErr ? d.err.message : void 0
                                    })), s(d)
                                }
                            }, c)
                        })
                    },
                    startEditMessage(e, t, n) {
                        i.default.dispatch({
                            type: "MESSAGE_START_EDIT",
                            channelId: e,
                            messageId: t,
                            content: n
                        })
                    },
                    updateEditMessage(e, t, n) {
                        i.default.dispatch({
                            type: "MESSAGE_UPDATE_EDIT",
                            channelId: e,
                            textValue: t,
                            richValue: n
                        })
                    },
                    endEditMessage(e, t) {
                        i.default.dispatch({
                            type: "MESSAGE_END_EDIT",
                            channelId: e,
                            response: t
                        })
                    },
                    async editMessage(e, t, n) {
                        let {
                            content: a
                        } = n;
                        await F.default.unarchiveThreadIfNecessary(e);
                        let s = function(e, t) {
                                let n = j.default.getMessage(e, t);
                                if (null == n || n.type !== ed.MessageTypes.REPLY) return;
                                let a = w.default.getMessageByReference(n.messageReference);
                                if (a.state === w.ReferencedMessageState.LOADED) {
                                    if (!n.mentions.includes(a.message.author.id)) return {
                                        parse: Object.values(ed.AllowedMentionTypes),
                                        replied_user: !1
                                    }
                                }
                            }(e, t),
                            r = {
                                channelId: e,
                                messageId: t,
                                content: a,
                                allowed_mentions: s
                            };
                        d.default.enqueue({
                            type: d.MessageDataType.EDIT,
                            message: r
                        }, n => {
                            let a = !n.hasErr && T.AUTOMOD_ERROR_CODES.has(n.body.code);
                            if (a) {
                                let e = {
                                    type: d.MessageDataType.EDIT,
                                    message: r
                                };
                                i.default.dispatch({
                                    type: "MESSAGE_EDIT_FAILED_AUTOMOD",
                                    messageData: e,
                                    errorResponseBody: {
                                        code: n.body.code,
                                        message: n.body.message
                                    }
                                })
                            }
                            n.hasErr ? l.AccessibilityAnnouncer.announce(ec.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_FAILED) : a ? l.AccessibilityAnnouncer.announce(ec.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_AUTOMOD_BLOCKED) : l.AccessibilityAnnouncer.announce(ec.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED), eS.endEditMessage(e, n.hasErr ? void 0 : n), eS.focusMessage({
                                channelId: e,
                                messageId: t
                            })
                        })
                    },
                    async suppressEmbeds(e, t) {
                        await F.default.unarchiveThreadIfNecessary(e), s.default.patch({
                            url: ed.Endpoints.MESSAGE(e, t),
                            body: {
                                flags: ed.MessageFlags.SUPPRESS_EMBEDS
                            },
                            oldFormErrors: !0
                        })
                    },
                    async patchMessageAttachments(e, t, n) {
                        await F.default.unarchiveThreadIfNecessary(e), s.default.patch({
                            url: ed.Endpoints.MESSAGE(e, t),
                            body: {
                                attachments: n
                            },
                            oldFormErrors: !0
                        })
                    },
                    async deleteMessage(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            a = () => {
                                i.default.dispatch({
                                    type: "MESSAGE_DELETE",
                                    id: t,
                                    channelId: e
                                }).then(() => {
                                    l.AccessibilityAnnouncer.announce(ec.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_DELETED)
                                })
                            };
                        n ? a() : (await F.default.unarchiveThreadIfNecessary(e), s.default.delete({
                            url: ed.Endpoints.MESSAGE(e, t),
                            oldFormErrors: !0
                        }).then(() => {
                            a()
                        }));
                        let r = j.default.getMessage(e, t);
                        (null == r ? void 0 : r.type) === ed.MessageTypes.GUILD_INVITE_REMINDER && (0, N.trackGuildInviteNotificationDismissed)()
                    },
                    dismissAutomatedMessage(e) {
                        null != e.loggingName && u.default.trackWithMetadata(ed.AnalyticEvents.AUTOMATED_MESSAGE_DISMISSED, {
                            message_name: e.loggingName,
                            message_author: e.author.username
                        }), this.deleteMessage(e.channel_id, e.id, !0)
                    },
                    revealMessage(e, t) {
                        i.default.dispatch({
                            type: "MESSAGE_REVEAL",
                            channelId: e,
                            messageId: t
                        })
                    },
                    crosspostMessage: (e, t) => s.default.post({
                        url: ed.Endpoints.MESSAGE_CROSSPOST(e, t),
                        oldFormErrors: !0
                    }).catch(e => {
                        let t;
                        t = 429 === e.status ? ec.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_BODY.format({
                            retryAfter: Math.floor(e.body.retry_after / 60)
                        }) : ec.default.Messages.PUBLISH_FOLLOWED_NEWS_GENERIC_BODY, er.default.show({
                            title: ec.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_TITLE,
                            body: t,
                            confirmText: ec.default.Messages.OKAY
                        })
                    }),
                    trackInvite: eh
                };
            var eM = eS
        },
        219788: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var a = n("705909"),
                s = n("605250"),
                l = n("619443"),
                i = n("42203"),
                r = n("286235"),
                d = n("802493"),
                u = n("883062"),
                o = n("794897"),
                c = n("818697"),
                E = n("280468");
            let f = new s.default("Messages");
            class _ {
                static computeUsersAndMembers(e) {
                    (0, E.requireSortedDescending)(e);
                    let t = new Map,
                        n = new Map;
                    for (let a of e) this.addIntoMap(t, a.users, e => e.id), this.addIntoMap(n, a.members, e => e.userId);
                    return [Array.from(t.values()), Array.from(n.values())]
                }
                static addIntoMap(e, t, n) {
                    for (let a of t) {
                        let t = n(a),
                            s = e.get(t);
                        (null == s || s.incomplete && !a.incomplete) && e.set(t, a)
                    }
                }
                constructor(e) {
                    if (this.connectionId = null, this.users = [], this.members = [], this.messages = [], e.length > 0) {
                        var t;
                        let n = null === (t = e[0]) || void 0 === t ? void 0 : t.connectionId,
                            [a, s] = _.computeUsersAndMembers(e);
                        e.length > 0 && e.every(e => e.connectionId === n) && (this.connectionId = n), this.users = a, this.members = s, this.messages = e.map(e => e.message)
                    }
                }
            }
            var g = new class e {
                async startupLoad(e, t, n, a) {
                    let s = d.default.messages(e),
                        l = await s.getLatest(t, n, a);
                    return new _(l)
                }
                async load(e, t, n) {
                    let a = i.default.getBasicChannel(t);
                    if (null == t || null == a || !(0, c.isReadableChannel)(a)) return new _([]);
                    {
                        let s = d.default.messages(e),
                            l = await s.getLatest(a.guild_id, t, n);
                        return new _(l)
                    }
                }
                handleMessageCreate(e, t) {
                    !e.optimistic && !e.isPushNotification && null == e.sendMessageOptions && (0, c.isReadableChannelId)(e.channelId) && this.upsertOne(e.guildId, e.channelId, e.message, t)
                }
                handleMessageUpdate(e, t) {
                    if (null != e.message.id && null != e.message.channel_id)(0, c.isReadableChannelId)(e.message.channel_id) && (function(e) {
                        return null != e.author && null != e.content && null != e.mentions && null != e.timestamp
                    }(e.message) ? this.upsertOne(e.guildId, e.message.channel_id, e.message, t) : this.updateOne(e.guildId, e.message.channel_id, e.message, t))
                }
                handleMessagePreviewsLoaded(e, t) {
                    for (let n of e.messages)(0, c.isReadableChannelId)(n.channel_id) && this.insertStale(e.guildId, n.channel_id, n, t)
                }
                handleLoadMessagesSuccess(e, t) {
                    let n = i.default.getBasicChannel(e.channelId);
                    null != n && (0, c.isReadableChannelId)(e.channelId) && this.upsertMany(n.guild_id, e.channelId, e.messages, t)
                }
                handleMessageDelete(e, t) {
                    if (null == e.id) {
                        r.default.captureException(Error("MESSAGE_DELETE with a null id (guild_id: ".concat(e.guildId, ", channel_id: ").concat(e.channelId, ").")));
                        return
                    }
                    this.deleteOne(e.guildId, e.channelId, e.id, t)
                }
                handleMessageDeleteBulk(e, t) {
                    for (let n of e.ids) this.deleteOne(e.guildId, e.channelId, n, t)
                }
                handleChannelDelete(e, t) {
                    this.deleteChannel(e.channel.guild_id, e.channel.id, t)
                }
                handleGuildDelete(e, t) {
                    !e.guild.unavailable && this.deleteGuild(e.guild.id, t)
                }
                handleReset() {}
                insertStale(e, t, n, s) {
                    let i = d.default.messagesTransaction(s),
                        r = l.default.lastTimeConnectedChanged();
                    i.put(e, t, u.KvMessage.fromMessage(e, t, n, r), a.ConflictOptions.Skip)
                }
                upsertOne(e, t, n, s) {
                    let i = d.default.messagesTransaction(s),
                        r = l.default.lastTimeConnectedChanged();
                    i.put(e, t, u.KvMessage.fromMessage(e, t, n, r), a.ConflictOptions.Replace), i.trimChannel(e, t, o.default.saveLimit(t))
                }
                upsertMany(e, t, n, a) {
                    let s = d.default.messagesTransaction(a),
                        i = l.default.lastTimeConnectedChanged();
                    for (let a of n) s.put(e, t, u.KvMessage.fromMessage(e, t, a, i));
                    s.trimChannel(e, t, o.default.saveLimit(t))
                }
                async updateOne(e, t, n, a) {
                    if (null == n.id) {
                        f.warn("updateOne: message.id is null; cannot update a message if we do not know its id.");
                        return
                    }
                    let s = d.default.messages(a.database),
                        i = await s.get(e, t, n.id),
                        r = l.default.lastTimeConnectedChanged();
                    null != i && s.put(e, t, u.KvMessage.fromMessage(e, t, {
                        ...i.message,
                        ...n
                    }, r))
                }
                deleteOne(e, t, n, a) {
                    d.default.messagesTransaction(a).deleteMessage(e, t, n)
                }
                deleteChannel(e, t, n) {
                    d.default.messagesTransaction(n).deleteChannel(e, t)
                }
                deleteGuild(e, t) {
                    d.default.messagesTransaction(t).deleteGuild(e)
                }
                constructor() {
                    this.actions = {
                        CHANNEL_DELETE: (e, t) => this.handleChannelDelete(e, t),
                        GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                        LOAD_MESSAGES_SUCCESS: (e, t) => this.handleLoadMessagesSuccess(e, t),
                        MESSAGE_CREATE: (e, t) => this.handleMessageCreate(e, t),
                        MESSAGE_DELETE_BULK: (e, t) => this.handleMessageDeleteBulk(e, t),
                        MESSAGE_DELETE: (e, t) => this.handleMessageDelete(e, t),
                        MESSAGE_PREVIEWS_LOADED: (e, t) => this.handleMessagePreviewsLoaded(e, t),
                        MESSAGE_UPDATE: (e, t) => this.handleMessageUpdate(e, t)
                    }
                }
            }
        },
        883062: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                KvMessage: function() {
                    return l
                }
            });
            var a = n("26989"),
                s = n("697218");
            class l {
                static fromMessage(e, t, n, a) {
                    let [s, i] = l.deriveMemberUsers(e, n);
                    return {
                        id: n.id,
                        channelId: t,
                        message: n,
                        members: s,
                        users: i,
                        connectionId: a
                    }
                }
                static deriveMemberUsers(e, t) {
                    var n, l, i, r;
                    let d = new Set([null === (n = t.author) || void 0 === n ? void 0 : n.id, null === (l = t.interaction) || void 0 === l ? void 0 : l.user.id, ...null !== (r = null === (i = t.mentions) || void 0 === i ? void 0 : i.map(e => e.id)) && void 0 !== r ? r : []]),
                        u = [],
                        o = [];
                    for (let t of d) {
                        if (null == t) continue;
                        let n = s.default.getUser(t),
                            l = a.default.getTrueMember(null != e ? e : "", t);
                        null != n && o.push(n), null != l && u.push(l)
                    }
                    return [u, o]
                }
            }
        },
        794897: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var a = n("446674"),
                s = n("913144"),
                l = n("42203"),
                i = n("525065"),
                r = n("18494"),
                d = n("8001"),
                u = n("625483"),
                o = n("185496"),
                c = n("689257"),
                E = n("753848"),
                f = n("818697"),
                _ = n("875081");
            let g = null,
                h = new u.ExtendedMemoryLru(750, 500),
                m = new o.Lru(15),
                S = !1;
            class M extends a.default.Store {
                initialize() {
                    this.waitFor(l.default), this.waitFor(r.default), this.waitFor(i.default), this.syncWith([d.default], () => !0), this.syncWith([r.default], p)
                }
                canEvictOrphans() {
                    return S
                }
                saveLimit(e) {
                    let t = l.default.getBasicChannel(e);
                    return null != t && (0, E.isPrivateChannel)(t) || null != t && h.has(e) ? 25 : 1
                }
                getSaveableChannels() {
                    let e = l.default.getChannelIds(null),
                        t = e.map(e => ({
                            guildId: null,
                            channelId: e
                        }));
                    return d.default.isLowDisk ? null != g ? [...t, g] : t : [...t, ...h.values()]
                }
                toSnapshot() {
                    return {
                        v: 1,
                        channels: [...h.allValues()].filter(e => !e.fallback),
                        penalized: [...m.keys()],
                        lastChannel: g
                    }
                }
                static mergeSnapshot(e) {
                    let t = h,
                        n = m;
                    for (let n of (h = new u.ExtendedMemoryLru(h.primaryCapacity, h.extendedCapacity), m = new o.Lru(m.capacity), g = null != g ? g : e.lastChannel, [e.channels, t.values()]))
                        for (let e of n) !e.fallback && h.put(e.channelId, e);
                    for (let t of [e.penalized, n.keys()])
                        for (let e of t) m.put(e, null)
                }
                static recordChannel(e) {
                    let t = l.default.getBasicChannel(e);
                    if (null != t && (0, f.isReadableChannel)(t)) {
                        var n;
                        let a = {
                            guildId: null !== (n = t.guild_id) && void 0 !== n ? n : null,
                            channelId: e,
                            channelType: t.type
                        };
                        if (g = a, h.put(e, a), (0, c.isLimitedChannel)(t)) {
                            let t = m.put(e, null);
                            null != t && h.delete(e)
                        }
                    }
                }
                static deleteChannel(e) {
                    h.delete(e)
                }
                static deleteGuild(e) {
                    for (let t of h.allValues()) t.guildId === e && h.delete(t.channelId)
                }
                static dropUnreachableChannels() {
                    for (let e of h.keys()) {
                        let t = l.default.getBasicChannel(e);
                        !(0, f.isReadableChannel)(t) && M.deleteChannel(e)
                    }
                }
                static deleteUnreadableGuildChannels(e) {
                    for (let t of h.values()) e === t.guildId && !(0, f.isReadableChannelId)(t.channelId) && M.deleteChannel(t.channelId)
                }
                static replaceLru(e) {
                    h = e
                }
            }

            function p() {
                let e = r.default.getChannelId();
                null != e && M.recordChannel(e)
            }

            function T(e) {
                let t = e.id,
                    n = (0, f.isReadableChannel)(e),
                    a = r.default.getChannelId();
                n && t === a && M.recordChannel(t), !n && M.deleteChannel(t)
            }
            var A = new M(s.default, {
                CACHE_LOADED_LAZY_NO_CACHE: function(e) {
                    S = !0
                },
                CACHE_LOADED_LAZY: function(e) {
                    S = !0, null != e.saveableChannels && M.mergeSnapshot(e.saveableChannels)
                },
                CHANNEL_DELETE: function(e) {
                    M.deleteChannel(e.channel.id)
                },
                CHANNEL_UPDATES: function(e) {
                    for (let t of e.channels) T(t)
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function() {
                    M.dropUnreachableChannels(), M.replaceLru((0, _.withFallbacks)(h, 1250))
                },
                GUILD_DELETE: function(e) {
                    return !e.guild.unavailable && (M.deleteGuild(e.guild.id), !0)
                },
                LOGIN_SUCCESS: function(e) {
                    h.clear(), m.clear(), S = !1
                },
                THREAD_DELETE: function(e) {
                    M.deleteChannel(e.channel.id)
                },
                THREAD_UPDATE: function(e) {
                    T(e.channel)
                }
            })
        },
        689257: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isLimitedChannel: function() {
                    return l
                }
            }), n("42203");
            var a = n("525065"),
                s = n("49111");

            function l(e) {
                var t;
                let n = null !== (t = a.default.getMemberCount(null == e ? void 0 : e.guild_id)) && void 0 !== t ? t : 0;
                return null != e && e.type !== s.ChannelTypes.DM && e.type !== s.ChannelTypes.GROUP_DM && n >= 1e4
            }
        },
        753848: function(e, t, n) {
            "use strict";

            function a(e) {
                return null == e.guild_id
            }
            n.r(t), n.d(t, {
                isPrivateChannel: function() {
                    return a
                }
            })
        },
        818697: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isReadableChannel: function() {
                    return d
                },
                isReadableChannelId: function() {
                    return u
                }
            });
            var a = n("233069"),
                s = n("42203"),
                l = n("957255"),
                i = n("49111");
            let r = i.BasicPermissions.VIEW_CHANNEL | i.BasicPermissions.READ_MESSAGE_HISTORY;

            function d(e) {
                return null != e && (e.type === i.ChannelTypes.DM || e.type === i.ChannelTypes.GROUP_DM || (0, a.isTextChannel)(e.type) && l.default.canBasicChannel(r, e))
            }

            function u(e) {
                return null != e && d(s.default.getBasicChannel(e))
            }
        },
        875081: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                withFallbacks: function() {
                    return u
                }
            });
            var a = n("42203"),
                s = n("677099"),
                l = n("625483"),
                i = n("689257"),
                r = n("818697"),
                d = n("49111");

            function u(e, t) {
                if (e.totalLength >= t) return e;
                let n = new l.ExtendedMemoryLru(e.primaryCapacity, e.extendedCapacity),
                    u = t - e.totalLength;
                for (let t of s.default.getGuildFolders())
                    for (let s of t.guildIds)
                        for (let t of Object.values(a.default.getMutableBasicGuildChannelsForGuild(s)))
                            if (function(e) {
                                    return e.type === d.ChannelTypes.DM || e.type === d.ChannelTypes.GROUP_DM || e.type === d.ChannelTypes.GUILD_TEXT
                                }(t) && (0, r.isReadableChannel)(t) && !(0, i.isLimitedChannel)(t) && function(e, t, n) {
                                    !n.hasExtended(t.id) && n.put(t.id, {
                                        guildId: e,
                                        channelId: t.id,
                                        channelType: t.type,
                                        fallback: !0
                                    })
                                }(s, t, n), n.totalLength >= u) return o(n, e);
                return o(n, e)
            }

            function o(e, t) {
                for (let [n, a] of t.allEntries()) e.put(n, a);
                return e
            }
        },
        8001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("75247"),
                s = n("913144"),
                l = n("605250"),
                i = n("802493");
            let r = new l.default("FileSystemStore"),
                d = 6e5;
            class u extends a.default {
                handlePostConnectionOpen() {
                    return this.refresh(), !1
                }
                handleAppStateUpdate(e) {
                    return "active" !== e.state && this.refresh(), !1
                }
                async refresh() {
                    var e, t;
                    let n = await (null === (t = i.default.database()) || void 0 === t ? void 0 : null === (e = t.fsInfo()) || void 0 === e ? void 0 : e.catch(e => r.warn("couldn't get fs info", e)));
                    if (null != n) {
                        let e = n.fs.available < 268435456 || n.fs.available < 3 * n.database.used || n.fs.available < 2 * n.database.total,
                            t = n.fs.available > 805306368 && n.fs.available > 4 * n.database.used && n.fs.available > 4 * n.database.total,
                            a = !!e || !t && null;
                        null != a && this.isLowDisk !== a && (this.isLowDisk = a, this.emitChange())
                    }
                }
                constructor() {
                    super(s.default, {
                        APP_STATE_UPDATE: e => this.handleAppStateUpdate(e),
                        POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
                    }), this.isLowDisk = !1, this.refresh(), this.waitFor(i.default), setInterval(() => this.refresh(), d)
                }
            }
            var o = new u
        },
        625483: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ExtendedMemoryLru: function() {
                    return l
                }
            });
            var a = n("475838"),
                s = n("185496");
            class l {
                get totalLength() {
                    return this.primary.length + this.extended.length
                }
                get primaryCapacity() {
                    return this.primary.capacity
                }
                get extendedCapacity() {
                    return this.extended.capacity
                }
                clear() {
                    this.primary.clear(), this.extended.clear()
                }
                has(e) {
                    return this.primary.has(e)
                }
                hasExtended(e) {
                    return this.primary.has(e) || this.extended.has(e)
                }
                get(e) {
                    return this.primary.get(e)
                }
                put(e, t) {
                    let n = this.primary.put(e, t);
                    void 0 !== n && this.extended.put(n[0], n[1])
                }
                delete(e) {
                    let t = this.primary.delete(e),
                        n = this.extended.delete(e);
                    return this.upstreamItems(), t || n
                }
                upstreamItems() {
                    if (this.canUpstreamItems()) {
                        for (let [e, t] of this.extended.entries())
                            if (this.primary.put(e, t), this.extended.delete(e), !this.canUpstreamItems()) break
                    }
                }
                canUpstreamItems() {
                    return this.primary.length < this.primary.capacity && this.extended.length > 0
                }
                entries() {
                    return this.primary.entries()
                }
                keys() {
                    return this.primary.keys()
                }
                values() {
                    return this.primary.values()
                }
                allEntries() {
                    return a.chain(this.extended.entries(), this.primary.entries())
                }
                allKeys() {
                    return a.chain(this.extended.keys(), this.primary.keys())
                }
                allValues() {
                    return a.chain(this.extended.values(), this.primary.values())
                }
                constructor(e, t) {
                    this.primary = new s.Lru(e), this.extended = new s.Lru(t)
                }
            }
        },
        475838: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                chain: function() {
                    return s
                }
            });
            class a {
                [Symbol.iterator]() {
                    return this
                }
                next() {
                    for (; this.index < this.items.length;) {
                        let e = this.items[this.index].next();
                        if (!e.done) return e;
                        this.index += 1
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                }
                constructor(e) {
                    this.index = 0, this.items = e
                }
            }

            function s() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return new a(t)
            }
        },
        185496: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Lru: function() {
                    return a
                }
            });
            class a {
                get length() {
                    return this.items.size
                }
                get capacity() {
                    return this.limit
                } [Symbol.iterator]() {
                    return this.items.entries()
                }
                entries() {
                    return this.items.entries()
                }
                keys() {
                    return this.items.keys()
                }
                values() {
                    return this.items.values()
                }
                ordered() {
                    return [...this.items.values()].reverse()
                }
                clear() {
                    this.items.clear()
                }
                has(e) {
                    return this.items.has(e)
                }
                get(e) {
                    return this.items.get(e)
                }
                put(e, t) {
                    if (this.items.delete(e), this.items.set(e, t), !!(this.items.size > this.limit)) {
                        let e = this.oldestKey(),
                            t = this.items.get(e);
                        return this.items.delete(e), [e, t]
                    }
                }
                delete(e) {
                    return this.items.delete(e)
                }
                oldestKey() {
                    let e = this.items.keys(),
                        t = e.next();
                    return t.value
                }
                constructor(e) {
                    this.items = new Map, this.limit = e
                }
            }
        },
        374648: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isProactiveClydeV2Enabled: function() {
                    return l
                }
            });
            var a = n("862205");
            let s = (0, a.createExperiment)({
                kind: "guild",
                id: "2023-10_clyde_ai_proactive_guilds_v2",
                label: "Proactive Clyde V2",
                defaultConfig: {
                    isProactiveClydeV2Enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "enable proactive clyde v2",
                    config: {
                        isProactiveClydeV2Enabled: !0
                    }
                }]
            });

            function l(e, t) {
                let {
                    isProactiveClydeV2Enabled: n
                } = s.getCurrentConfig({
                    guildId: e,
                    location: t
                }, {
                    autoTrackExposure: !1
                });
                return n
            }
        },
        893694: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("271938"),
                s = n("42203"),
                l = n("377253"),
                i = n("374648");

            function r(e) {
                var t, n, r;
                let d = null !== (n = null === (t = s.default.getBasicChannel(e)) || void 0 === t ? void 0 : t.guild_id) && void 0 !== n ? n : "",
                    u = l.default.getMessages(e),
                    o = u.last();
                if (null == o) return !1;
                let c = null !== (r = u.getManyBefore(o.id, 10)) && void 0 !== r ? r : [],
                    E = a.default.getId();
                return c.some(t => {
                    var n;
                    let a = t.author.isClyde();
                    if (!a || null == t.messageReference) return !1;
                    let s = l.default.getMessage(e, t.messageReference.message_id);
                    if (null != s && (0, i.isProactiveClydeV2Enabled)(d, "allowProactiveClydeV2")) return !0;
                    return (null == s ? void 0 : null === (n = s.author) || void 0 === n ? void 0 : n.id) === E
                })
            }
        },
        125273: function(e, t, n) {
            "use strict";

            function a() {
                return {}
            }
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            })
        },
        600798: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                InvalidKeywordError: function() {
                    return r
                },
                InvalidRegexPatternError: function() {
                    return d
                },
                AUTOMOD_ERROR_CODES: function() {
                    return u
                },
                getAutomodErrorMessageFromErrorResponse: function() {
                    return o
                },
                getAutomodErrorMessage: function() {
                    return c
                }
            });
            var a = n("979911"),
                s = n("42203"),
                l = n("49111"),
                i = n("782340");
            class r extends Error {}
            class d extends Error {}
            let u = new Set([l.AbortCodes.AUTOMOD_MESSAGE_BLOCKED, l.AbortCodes.AUTOMOD_TITLE_BLOCKED, l.AbortCodes.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE]);

            function o(e, t) {
                if (null == e) return null;
                let {
                    code: n,
                    message: a
                } = e;
                if (!u.has(n)) return null;
                if (null != a) return a;
                if (null == t) return null;
                let r = s.default.getChannel(t);
                return (null == r ? void 0 : r.isThread()) ? i.default.Messages.THREAD_AUTOMOD_ERROR : ((null == r ? void 0 : r.isForumPost()) || (null == r ? void 0 : r.isForumLikeChannel())) && (n === l.AbortCodes.AUTOMOD_TITLE_BLOCKED || n === l.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) ? i.default.Messages.FORUM_POST_AUTOMOD_ERROR : null
            }

            function c(e, t) {
                let n = o(t);
                return null != n ? n : null == e ? i.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE : function(e) {
                    let t = s.default.getChannel(e.message.channelId);
                    return (0, a.isMessageDataEdit)(e) ? i.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_EDIT_NOTICE : (null == t ? void 0 : t.isThread()) ? i.default.Messages.THREAD_AUTOMOD_ERROR : (null == t ? void 0 : t.isForumPost()) || (null == t ? void 0 : t.isForumLikeChannel()) ? i.default.Messages.FORUM_POST_AUTOMOD_ERROR : i.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE
                }(e)
            }
        },
        569808: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("446674"),
                s = n("913144"),
                l = n("82339"),
                i = n("579033");
            let r = {},
                d = null;

            function u(e, t) {
                var n;
                let a = null !== (n = r[e]) && void 0 !== n ? n : {
                    code: e,
                    state: i.GuildTemplateStates.RESOLVING
                };
                t(a = {
                    ...a
                }), r = {
                    ...r,
                    [e]: a
                }
            }

            function o(e) {
                c(e.guildTemplate)
            }

            function c(e) {
                return u(e.code, t => {
                    let n = (0, l.default)(e);
                    for (let e in n) t[e] = n[e]
                })
            }

            function E(e) {
                return u(e.code, e => {
                    e.state = i.GuildTemplateStates.EXPIRED
                })
            }
            class f extends a.default.Store {
                getGuildTemplate(e) {
                    return null != e ? r[e] : null
                }
                getGuildTemplates() {
                    return r
                }
                getForGuild(e) {
                    for (let t in r) {
                        let n = r[t];
                        if ("sourceGuildId" in n && n.sourceGuildId === e && n.state !== i.GuildTemplateStates.EXPIRED) return n
                    }
                }
                getDisplayedGuildTemplateCode() {
                    return d
                }
            }
            f.displayName = "GuildTemplateStore";
            var _ = new f(s.default, {
                GUILD_TEMPLATE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e;
                    r = {
                        ...r,
                        [t]: {
                            code: t,
                            state: i.GuildTemplateStates.RESOLVING
                        }
                    }
                },
                GUILD_TEMPLATE_CREATE_SUCCESS: o,
                GUILD_TEMPLATE_SYNC_SUCCESS: o,
                GUILD_TEMPLATE_RESOLVE_SUCCESS: o,
                GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS: function(e) {
                    let {
                        guildTemplates: t
                    } = e;
                    t.forEach(e => c(e))
                },
                GUILD_TEMPLATE_RESOLVE_FAILURE: E,
                GUILD_TEMPLATE_DELETE_SUCCESS: E,
                GUILD_TEMPLATE_ACCEPT: function(e) {
                    return u(e.code, e => {
                        e.state = i.GuildTemplateStates.ACCEPTING
                    })
                },
                GUILD_TEMPLATE_ACCEPT_SUCCESS: function(e) {
                    return u(e.code, e => {
                        var t;
                        e.state = i.GuildTemplateStates.ACCEPTED, e.usageCount = (null !== (t = e.usageCount) && void 0 !== t ? t : 0) + 1
                    })
                },
                GUILD_TEMPLATE_ACCEPT_FAILURE: function(e) {
                    return u(e.code, e => {
                        e.state = i.GuildTemplateStates.RESOLVED
                    })
                },
                GUILD_TEMPLATE_MODAL_SHOW: function(e) {
                    d = e.code
                },
                GUILD_TEMPLATE_MODAL_HIDE: function(e) {
                    d = null
                }
            })
        },
        52393: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("773336");

            function s() {
                let e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    s = window.GLOBAL_ENV.INVITE_HOST;
                return (0, a.isAndroid)() ? (s = location.host, e = "/invite/".concat(t)) : e = "/".concat(t), "".concat(n ? "".concat(location.protocol, "//") : "").concat(s).concat(e)
            }
        },
        143291: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LocalMessageBackgroundSendingExperiment: function() {
                    return s
                }
            });
            var a = n("862205");
            let s = (0, a.createExperiment)({
                kind: "user",
                id: "2023-08_local_message_background_sending",
                label: "Send Messages In The Backgrounded",
                defaultConfig: {
                    enableBackgroundSending: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Background Sending",
                    config: {
                        enableBackgroundSending: !0
                    }
                }]
            })
        },
        379534: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var a = {
                backgroundTaskIdentifierInvalid: -1,
                backgroundify: function(e, t) {
                    return e
                },
                startBackgroundTask: e => new Promise(e => e(-1)),
                endBackgroundTask: e => {}
            }
        },
        40566: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a = n("811022"),
                s = n("446674"),
                l = n("913144"),
                i = n("125273"),
                r = n("618421"),
                d = n("42203"),
                u = n("525065"),
                o = n("985365"),
                c = n("599110"),
                E = n("49111");
            let f = new a.default("MessageRoundtripTrackerStore");

            function _(e) {
                return null != e.apiResponseTimestamp && null != e.gatewaySeenTimestamp
            }

            function g(e) {
                let t = d.default.getBasicChannel(e.channelId);
                if (null == t) {
                    f.warn("Ignoring a messageData for channel ".concat(e.channelId, " because we can't find that channel."));
                    return
                }
                if (Math.random() > .1) return;
                let n = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
                    a = null == e.gatewaySeenTimestamp ? null : e.gatewaySeenTimestamp - e.initialSendTimestamp,
                    s = (0, r.getSignalStrength)();
                c.default.track(E.AnalyticEvents.SEND_MESSAGE_ROUNDTRIP, {
                    ...(0, i.default)(),
                    api_latency_ms: n,
                    gateway_latency_ms: a,
                    channel_id: t.id,
                    channel_type: t.type,
                    guild_id: t.guild_id,
                    guild_size: u.default.getMemberCount(t.guild_id),
                    mobile_network_type: o.default.getType(),
                    ...null != s && {
                        mobile_signal_strength_level: s
                    }
                })
            }
            class h extends s.default.Store {
                recordMessageSendAttempt(e, t) {
                    let n = {
                        initialSendTimestamp: Date.now(),
                        apiResponseTimestamp: null,
                        gatewaySeenTimestamp: null,
                        channelId: e
                    };
                    this.pendingMessages.set(t, n), setTimeout(() => {
                        let e = this.pendingMessages.get(t);
                        null != e && (g(e), this.pendingMessages.delete(t))
                    }, 3e4)
                }
                recordMessageSendApiResponse(e) {
                    let t = this.pendingMessages.get(e);
                    if (null != t) {
                        let n = {
                            ...t,
                            apiResponseTimestamp: Date.now()
                        };
                        _(n) ? (g(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n)
                    }
                }
                recordGatewayResponse(e) {
                    let t = this.pendingMessages.get(e);
                    if (null != t) {
                        let n = {
                            ...t,
                            gatewaySeenTimestamp: Date.now()
                        };
                        _(n) ? (g(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n)
                    }
                }
                constructor(...e) {
                    super(...e), this.pendingMessages = new Map
                }
            }
            let m = new h(l.default, {
                MESSAGE_CREATE: function(e) {
                    let {
                        optimistic: t,
                        message: n
                    } = e, a = n.nonce;
                    !t && null != a && m.recordGatewayResponse(a)
                }
            });
            var S = m
        },
        994918: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var a = {
                init() {},
                donateSentMessage(e, t) {},
                deleteAllInteractions() {}
            }
        },
        815297: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                createNonce: function() {
                    return o
                },
                userRecordToServer: function() {
                    return c
                },
                default: function() {
                    return E
                },
                createBotMessage: function() {
                    return f
                }
            });
            var a = n("627445"),
                s = n.n(a),
                l = n("256572"),
                i = n("766274"),
                r = n("697218"),
                d = n("299039"),
                u = n("49111");

            function o() {
                return d.default.fromTimestamp(Date.now())
            }

            function c(e) {
                let {
                    id: t,
                    username: n,
                    avatar: a,
                    discriminator: s,
                    bot: l,
                    globalName: i
                } = e;
                return {
                    id: t,
                    username: n,
                    avatar: a,
                    discriminator: s,
                    bot: l,
                    global_name: i
                }
            }

            function E(e) {
                let {
                    channelId: t,
                    content: n,
                    tts: a = !1,
                    type: d = u.MessageTypes.DEFAULT,
                    messageReference: E,
                    allowedMentions: f,
                    author: _,
                    flags: g,
                    nonce: h
                } = e, m = [];
                if (d === u.MessageTypes.REPLY && (s(null != E, "Replies must have a message reference"), null == f || f.replied_user)) {
                    let e = l.default.getMessageByReference(E);
                    (null == e ? void 0 : e.state) === l.ReferencedMessageState.LOADED && m.push(c(e.message.author))
                }
                return null == _ && (_ = r.default.getCurrentUser()), _ instanceof i.default && (_ = c(_)), s(null != _, "createMessage: author cannot be undefined"), {
                    id: null != h ? h : o(),
                    type: d,
                    content: n,
                    channel_id: t,
                    author: _,
                    attachments: [],
                    embeds: [],
                    pinned: !1,
                    mentions: m,
                    mention_channels: [],
                    mention_roles: [],
                    mention_everyone: !1,
                    timestamp: new Date().toISOString(),
                    state: u.MessageStates.SENDING,
                    tts: a,
                    message_reference: E,
                    flags: g,
                    nonce: h
                }
            }

            function f(e) {
                let {
                    channelId: t,
                    content: n,
                    embeds: a,
                    loggingName: s
                } = e;
                return {
                    id: o(),
                    type: u.MessageTypes.DEFAULT,
                    flags: u.MessageFlags.EPHEMERAL,
                    content: n,
                    channel_id: t,
                    author: {
                        id: u.LOCAL_BOT_ID,
                        username: "Clyde",
                        discriminator: u.NON_USER_BOT_DISCRIMINATOR,
                        avatar: "clyde",
                        bot: !0
                    },
                    attachments: [],
                    embeds: null != a ? a : [],
                    pinned: !1,
                    mentions: [],
                    mention_channels: [],
                    mention_roles: [],
                    mention_everyone: !1,
                    timestamp: new Date().toISOString(),
                    state: u.MessageStates.SENT,
                    tts: !1,
                    loggingName: s
                }
            }
        },
        168730: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                logMessageSendFailure: function() {
                    return l
                }
            });
            var a = n("716241"),
                s = n("49111");

            function l(e) {
                var t, n;
                let l = null != e.fileItems ? function(e) {
                        var t;
                        return e.map(e => null !== (t = e.mimeType) && void 0 !== t ? t : "unknown")
                    }(e.fileItems) : [],
                    i = null !== (t = e.errorMessage) && void 0 !== t ? t : void 0,
                    r = null !== (n = e.failureCode) && void 0 !== n ? n : void 0;
                (0, a.trackWithMetadata)(s.AnalyticEvents.SEND_MESSAGE_FAILURE, {
                    failure_code: r,
                    error_message: i,
                    attachment_mimetypes: l
                })
            }
        },
        129953: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackGuildInviteNotificationAction: function() {
                    return r
                },
                trackGuildInviteNotificationDismissed: function() {
                    return d
                }
            });
            var a, s, l = n("716241"),
                i = n("49111");

            function r() {
                l.default.trackWithMetadata(i.AnalyticEvents.NOTIFICATION_CTA_CLICKED, {
                    notification_type: a.REMINDER_NOTIFICATION,
                    action: s.GUILD_INVITE,
                    dismissed: !1
                })
            }

            function d() {
                l.default.trackWithMetadata(i.AnalyticEvents.NOTIFICATION_CTA_CLICKED, {
                    notification_type: a.REMINDER_NOTIFICATION,
                    action: s.GUILD_INVITE,
                    dismissed: !0
                })
            }(a || (a = {})).REMINDER_NOTIFICATION = "Reminder Notification", (s || (s = {})).GUILD_INVITE = "Guild Invite"
        },
        28007: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updatePoggermodeSettings: function() {
                    return d
                },
                updateCombo: function() {
                    return u
                },
                clearMessageCombo: function() {
                    return o
                },
                updateComboOnMessageSend: function() {
                    return c
                }
            });
            var a = n("913144"),
                s = n("271938"),
                l = n("880731"),
                i = n("943551"),
                r = n("767189");

            function d(e) {
                a.default.dispatch({
                    type: "POGGERMODE_SETTINGS_UPDATE",
                    settings: e
                });
                let t = {
                    ...l.default.getState(),
                    ...e
                };
                (0, r.default)(t)
            }

            function u(e) {
                a.default.dispatch({
                    type: "POGGERMODE_UPDATE_COMBO",
                    ...e
                })
            }

            function o(e) {
                a.default.dispatch({
                    type: "POGGERMODE_UPDATE_MESSAGE_COMBO",
                    comboMessage: {
                        ...e,
                        displayed: !0
                    }
                })
            }

            function c(e, t) {
                var n;
                let l = s.default.getId(),
                    r = i.default.getUserCombo(l, e);
                null != r && a.default.dispatch({
                    type: "POGGERMODE_UPDATE_MESSAGE_COMBO",
                    comboMessage: {
                        combo: r,
                        channelId: e,
                        messageId: t,
                        displayed: !1
                    }
                });
                let d = null != r && (null == r ? void 0 : r.value) > 0 ? (null !== (n = null == r ? void 0 : r.multiplier) && void 0 !== n ? n : 0) + 1 : 1;
                a.default.dispatch({
                    type: "POGGERMODE_UPDATE_COMBO",
                    channelId: e,
                    userId: l,
                    multiplier: d,
                    value: 0
                })
            }
        },
        39141: function(e, t, n) {
            "use strict";
            var a, s, l, i, r, d;
            n.r(t), n.d(t, {
                ConfettiLocation: function() {
                    return a
                },
                ShakeLocation: function() {
                    return s
                },
                ShakeLevel: function() {
                    return l
                },
                SHAKE_STEPS: function() {
                    return o
                },
                SHAKE_STEP_DIVIDER: function() {
                    return c
                }
            }), (i = a || (a = {}))[i.CHAT_INPUT = 0] = "CHAT_INPUT", i[i.REACTION = 1] = "REACTION", i[i.MEMBER_USER = 2] = "MEMBER_USER", i[i.CALL_TILE = 3] = "CALL_TILE", (r = s || (s = {}))[r.CHAT_INPUT = 0] = "CHAT_INPUT", r[r.VOICE_USER = 1] = "VOICE_USER", r[r.MENTION = 2] = "MENTION", (d = l || (l = {}))[d.LEVEL_1 = 0] = "LEVEL_1", d[d.LEVEL_2 = 1] = "LEVEL_2", d[d.LEVEL_3 = 2] = "LEVEL_3", d[d.LEVEL_4 = 3] = "LEVEL_4", d[d.LEVEL_5 = 4] = "LEVEL_5";
            let u = {
                    [l.LEVEL_1]: [
                        [1, 1e-4],
                        [25, .05],
                        [50, .1],
                        [100, .5],
                        [250, 1],
                        [500, 2],
                        [1e3, 3],
                        [9001, 4]
                    ],
                    [l.LEVEL_2]: [
                        [1, 1e-4],
                        [25, .25],
                        [50, .5],
                        [100, 1],
                        [250, 2.5],
                        [500, 5],
                        [1e3, 7.5],
                        [9001, 10]
                    ],
                    [l.LEVEL_3]: [
                        [1, .001],
                        [25, .5],
                        [50, 1],
                        [100, 2],
                        [250, 4],
                        [500, 8],
                        [1e3, 12],
                        [9001, 16]
                    ],
                    [l.LEVEL_4]: [
                        [1, .25],
                        [25, .75],
                        [50, 1],
                        [100, 2],
                        [250, 4],
                        [500, 8],
                        [1e3, 20],
                        [9001, 50]
                    ],
                    [l.LEVEL_5]: [
                        [1, .001],
                        [25, .5],
                        [50, 1],
                        [100, 2],
                        [250, 5],
                        [500, 10],
                        [1e3, 100],
                        [9001, 1e4]
                    ]
                },
                o = Object.keys(u).reduce((e, t) => ({
                    ...e,
                    [t]: u[t].map(e => {
                        let [t] = e;
                        return t
                    })
                }), {
                    [l.LEVEL_1]: [],
                    [l.LEVEL_2]: [],
                    [l.LEVEL_3]: [],
                    [l.LEVEL_4]: [],
                    [l.LEVEL_5]: []
                }),
                c = Object.keys(u).reduce((e, t) => ({
                    ...e,
                    [t]: u[t].map(e => {
                        let [t, n] = e;
                        return n
                    })
                }), {
                    [l.LEVEL_1]: [],
                    [l.LEVEL_2]: [],
                    [l.LEVEL_3]: [],
                    [l.LEVEL_4]: [],
                    [l.LEVEL_5]: []
                })
        },
        880731: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("917351"),
                s = n("446674"),
                l = n("913144"),
                i = n("39141");
            let r = !1,
                d = {
                    settingsVisible: !1,
                    enabled: !1,
                    combosEnabled: !0,
                    combosRequiredCount: 5,
                    comboSoundsEnabled: !0,
                    screenshakeEnabled: !0,
                    screenshakeEnabledLocations: {
                        [i.ShakeLocation.CHAT_INPUT]: !0,
                        [i.ShakeLocation.VOICE_USER]: !1,
                        [i.ShakeLocation.MENTION]: !1
                    },
                    shakeIntensity: 1,
                    confettiEnabled: !0,
                    confettiEnabledLocations: {
                        [i.ConfettiLocation.CHAT_INPUT]: !0,
                        [i.ConfettiLocation.REACTION]: !0,
                        [i.ConfettiLocation.MEMBER_USER]: !0,
                        [i.ConfettiLocation.CALL_TILE]: !0
                    },
                    confettiSize: 16,
                    confettiCount: 5,
                    warningSeen: !1
                },
                u = (0, a.cloneDeep)(d);
            class o extends s.default.DeviceSettingsStore {
                initialize(e) {
                    u = {
                        ...u,
                        ...e
                    }
                }
                getUserAgnosticState() {
                    return u
                }
                get settingsVisible() {
                    return u.settingsVisible
                }
                isEnabled() {
                    let {
                        confettiLocation: e,
                        shakeLocation: t
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = null == e || u.confettiEnabled && u.confettiEnabledLocations[e], a = null == t || u.screenshakeEnabled && u.screenshakeEnabledLocations[t];
                    return this.settingsVisible && !r && u.enabled && n && a
                }
                get shakeIntensity() {
                    return this.isEnabled() ? u.shakeIntensity : 0
                }
                get combosRequiredCount() {
                    return this.isEnabled() ? u.combosRequiredCount : 0
                }
                get screenshakeEnabled() {
                    return u.screenshakeEnabled
                }
                get screenshakeEnabledLocations() {
                    return u.screenshakeEnabledLocations
                }
                get combosEnabled() {
                    return u.combosEnabled
                }
                get comboSoundsEnabled() {
                    return u.comboSoundsEnabled
                }
            }
            o.displayName = "PoggermodeSettingsStore", o.persistKey = "PoggermodeSettingsStore";
            var c = new o(l.default, {
                POGGERMODE_SETTINGS_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e;
                    u = {
                        ...u,
                        ...t
                    }
                },
                POGGERMODE_TEMPORARILY_DISABLED: function() {
                    r = !0
                }
            })
        },
        943551: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                shouldTrackMessage: function() {
                    return S
                },
                default: function() {
                    return T
                }
            });
            var a = n("446674"),
                s = n("407846"),
                l = n("862337"),
                i = n("913144"),
                r = n("271938"),
                d = n("18494"),
                u = n("659500"),
                o = n("880731"),
                c = n("119035"),
                E = n("39141"),
                f = n("49111");
            let _ = new Set,
                g = new s.default(function(e) {
                    let {
                        userId: t,
                        channelId: n
                    } = e;
                    return [t, n]
                }, function(e) {
                    let {
                        userId: t,
                        channelId: n
                    } = e;
                    return "".concat(n, "-").concat(t)
                }),
                h = new s.default(function(e) {
                    let {
                        messageId: t,
                        channelId: n,
                        combo: {
                            userId: a
                        }
                    } = e;
                    return [t, n, a]
                }, function(e) {
                    let {
                        messageId: t,
                        channelId: n,
                        combo: {
                            userId: a
                        }
                    } = e;
                    return "".concat(n, "-").concat(a, "-").concat(t)
                }),
                m = e => {
                    let {
                        userId: t,
                        channelId: n
                    } = e;
                    return "".concat(t, "-").concat(n)
                };

            function S(e, t, n, a) {
                if (e !== t) return !1;
                let s = null == n;
                return !(s || a.has(n)) && (a.add(n), !0)
            }
            class M extends a.default.Store {
                initialize() {
                    this.waitFor(r.default, d.default)
                }
                getComboScore(e, t) {
                    let n = g.get(m({
                        userId: e,
                        channelId: t
                    }));
                    return null == n ? 0 : (0, c.getComboScore)(n)
                }
                getUserCombo(e, t) {
                    return g.get(m({
                        userId: e,
                        channelId: t
                    }))
                }
                isComboing(e, t) {
                    let n = this.getUserCombo(e, t);
                    return null != n && n.value >= o.default.combosRequiredCount && function(e) {
                        return null != e && (e.value > 0 || (null == e ? void 0 : e.multiplier) > 1)
                    }(n)
                }
                getMessageCombo(e) {
                    var t;
                    let n = h.get(e);
                    return null !== (t = null == n ? void 0 : n.combo) && void 0 !== t ? t : void 0
                }
                getMostRecentMessageCombo(e) {
                    let t = h.values(e);
                    return t[t.length - 1]
                }
                getUserComboShakeIntensity(e, t, n, a) {
                    let s = this.getUserCombo(e, t);
                    return null != s ? (0, c.getComboShakeIntensity)(s, a) * n : 0
                }
            }
            M.displayName = "PoggermodeStore";
            let p = new M(i.default, {
                POGGERMODE_UPDATE_COMBO: function(e) {
                    let {
                        type: t,
                        ...n
                    } = e;
                    if (!o.default.isEnabled()) return !1;
                    ! function e(t) {
                        var n, a, s, i, r, d;
                        let u = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            o = g.get(m(t)),
                            c = {
                                ...o,
                                ...t,
                                value: null !== (a = null !== (n = t.value) && void 0 !== n ? n : null == o ? void 0 : o.value) && void 0 !== a ? a : 0,
                                multiplier: Math.min(null !== (i = null !== (s = t.multiplier) && void 0 !== s ? s : null == o ? void 0 : o.multiplier) && void 0 !== i ? i : 1, 7),
                                decayInterval: null !== (r = null == o ? void 0 : o.decayInterval) && void 0 !== r ? r : new l.Interval
                            };
                        g.set(m(t), c), u && (null === (d = c.decayInterval) || void 0 === d || d.start(1e3, () => {
                            let t = g.get(m(c));
                            if (null != t) {
                                let a = c.multiplier !== t.multiplier && c.value !== t.value;
                                if (t.value <= 0 || a) {
                                    var n;
                                    null === (n = t.decayInterval) || void 0 === n || n.stop(), t.value <= 0 && (e({
                                        ...t,
                                        value: 0,
                                        multiplier: 1
                                    }), p.emitChange())
                                } else e({
                                    ...t,
                                    value: t.value - 1
                                }), p.emitChange()
                            }
                        }))
                    }(n)
                },
                POGGERMODE_UPDATE_MESSAGE_COMBO: function(e) {
                    var t;
                    let {
                        comboMessage: n
                    } = e;
                    if (!o.default.isEnabled()) return !1;
                    t = n, h.set(t.messageId, t)
                },
                MESSAGE_CREATE: function(e) {
                    var t, n;
                    let {
                        channelId: a,
                        message: {
                            mentions: s,
                            author: l,
                            nonce: i
                        }
                    } = e;
                    if (!o.default.isEnabled()) return !1;
                    let d = r.default.getId();
                    if (!S(null == l ? void 0 : l.id, d, i, _)) return !1;
                    let h = g.get(m({
                        userId: null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : "???",
                        channelId: a
                    }));
                    if (o.default.screenshakeEnabled && o.default.screenshakeEnabledLocations[E.ShakeLocation.MENTION] && null != s && null != s.find(e => e.id === d)) {
                        let e = null != h ? null !== (n = (0, c.getComboShakeIntensity)(h, E.ShakeLevel.LEVEL_4)) && void 0 !== n ? n : .001 : 4 * Math.random();
                        return u.ComponentDispatch.dispatch(f.ComponentActions.SHAKE_APP, {
                            duration: 1e3,
                            intensity: e
                        }), !0
                    }
                    return !1
                }
            });
            var T = p
        },
        119035: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getComboShakeIntensity: function() {
                    return i
                },
                getComboPercentage: function() {
                    return o
                },
                getComboStyles: function() {
                    return c
                },
                getComboScore: function() {
                    return E
                }
            });
            var a = n("39141"),
                s = n("49111");
            let l = function(e, t) {
                    let {
                        multiplier: n,
                        value: a
                    } = e, [s, l] = t, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, r = a * n;
                    if (r <= 0) return 0;
                    let d = s.reduce((e, t, n) => {
                        if (r > t) {
                            let e = l[n];
                            if (n + 1 === s.length) return l[n];
                            let a = s[n + 1],
                                i = l[n + 1];
                            return (r - t) / (a - t) * (i - e) + e
                        }
                        return r === t ? l[n] : e
                    }, 0);
                    return Math.min(i, d)
                },
                i = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.ShakeLevel.LEVEL_3;
                    return l(e, [a.SHAKE_STEPS[t], a.SHAKE_STEP_DIVIDER[t]], 1e5)
                },
                r = [
                    [1, .001],
                    [25, .3],
                    [100, .5],
                    [250, .8],
                    [500, .9],
                    [2500, .95],
                    [9001, 1]
                ],
                d = r.map(e => {
                    let [t] = e;
                    return t
                }),
                u = r.map(e => {
                    let [t, n] = e;
                    return n
                }),
                o = e => l(e, [d, u], 1),
                c = e => 1 === e ? {
                    color: s.Color.BRAND_500
                } : 2 === e || 3 === e ? {
                    color: s.Color.GREEN_360
                } : 4 === e || 5 === e ? {
                    color: s.Color.YELLOW_300,
                    square: !0
                } : 6 === e ? {
                    color: s.Color.RED_400,
                    square: !0
                } : {
                    color: s.Color.ORANGE_345,
                    flair: !0
                };

            function E(e) {
                var t;
                return e.value * (null !== (t = e.multiplier) && void 0 !== t ? t : 1)
            }
        },
        767189: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("917351"),
                s = n.n(a),
                l = n("599110"),
                i = n("39141"),
                r = n("49111");

            function d(e) {
                switch (e) {
                    case i.ShakeLocation.CHAT_INPUT:
                        return "chat_input";
                    case i.ShakeLocation.MENTION:
                        return "mention";
                    case i.ShakeLocation.VOICE_USER:
                        return "voice_user"
                }
            }

            function u(e) {
                switch (e) {
                    case i.ConfettiLocation.CHAT_INPUT:
                        return "chat_input";
                    case i.ConfettiLocation.MEMBER_USER:
                        return "member_user";
                    case i.ConfettiLocation.REACTION:
                        return "reaction";
                    case i.ConfettiLocation.CALL_TILE:
                        return "call_tile"
                }
            }

            function o(e, t) {
                return Object.entries(e).filter(e => {
                    let [t, n] = e;
                    return n
                }).map(e => {
                    let [n] = e;
                    return t(Number.parseInt(n))
                })
            }
            let c = s.throttle(e => {
                let {
                    enabled: t,
                    combosEnabled: n,
                    combosRequiredCount: a,
                    screenshakeEnabled: s,
                    shakeIntensity: i,
                    screenshakeEnabledLocations: c,
                    confettiEnabled: E,
                    confettiSize: f,
                    confettiCount: _,
                    confettiEnabledLocations: g
                } = e;
                l.default.track(r.AnalyticEvents.POGGERMODE_SETTINGS_UPDATED, {
                    enabled: t,
                    combos_enabled: n,
                    combos_required_count: a,
                    screenshake_enabled: s,
                    shake_intensity: i,
                    screenshake_enabled_locations: o(c, d),
                    confetti_enabled: E,
                    confetti_size: f,
                    confetti_count: _,
                    confetti_enabled_locations: o(g, u)
                })
            }, 5e3);
            var E = c
        },
        793277: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("450911"),
                s = n("42203"),
                l = n("724210");

            function i(e) {
                if (e !== l.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return null;
                let t = s.default.getChannel(e);
                return null == t ? null : a.default.ensurePrivateChannel(t.recipients)
            }
        },
        256572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ReferencedMessageState: function() {
                    return s
                },
                default: function() {
                    return O
                }
            });
            var a, s, l = n("693566"),
                i = n.n(l),
                r = n("446674"),
                d = n("913144"),
                u = n("560208"),
                o = n("692038"),
                c = n("42203"),
                E = n("377253"),
                f = n("49111");
            (a = s || (s = {}))[a.LOADED = 0] = "LOADED", a[a.NOT_LOADED = 1] = "NOT_LOADED", a[a.DELETED = 2] = "DELETED";
            let _ = Object.freeze({
                    state: s.NOT_LOADED
                }),
                g = new Set;
            class h {
                handleCacheDisposed(e, t) {
                    this._cachedMessageIds.has(e) && (this._cachedMessageIds = new Set(this._cachedMessageIds), this._cachedMessageIds.delete(e))
                }
                set(e, t) {
                    this._cachedMessages.set(e, t), !this._cachedMessageIds.has(e) && (this._cachedMessageIds = new Set(this._cachedMessageIds), this._cachedMessageIds.add(e))
                }
                has(e) {
                    return this._cachedMessageIds.has(e)
                }
                get(e) {
                    return this._cachedMessages.get(e)
                }
                getCachedMessageIds() {
                    return this._cachedMessageIds
                }
                constructor() {
                    this._cachedMessages = new i({
                        max: 100,
                        dispose: (e, t) => this.handleCacheDisposed(e, t)
                    }), this._cachedMessageIds = new Set
                }
            }
            let m = new class e {
                has(e, t) {
                    var n, a;
                    return null !== (a = null === (n = this._channelCaches.get(e)) || void 0 === n ? void 0 : n.has(t)) && void 0 !== a && a
                }
                get(e, t) {
                    var n;
                    return null === (n = this._channelCaches.get(e)) || void 0 === n ? void 0 : n.get(t)
                }
                set(e, t, n) {
                    let a = this._channelCaches.get(e);
                    null == a && (a = new h, this._channelCaches.set(e, a)), a.set(t, n)
                }
                updateExistingMessageIfCached(e) {
                    let t = this._channelCaches.get(e.channel_id);
                    return !!(null != t && t.has(e.id)) && (t.set(e.id, {
                        state: s.LOADED,
                        message: (0, o.createMessageRecord)(e)
                    }), !0)
                }
                deleteChannelCache(e) {
                    return this._channelCaches.delete(e)
                }
                retainWhere(e) {
                    let t = [];
                    for (let [n] of this._channelCaches) !e(n) && t.push(n);
                    for (let e of t) this.deleteChannelCache(e);
                    return t.length
                }
                getCachedMessageIdsForChannel(e) {
                    let t = this._channelCaches.get(e);
                    return null == t ? null : t.getCachedMessageIds()
                }
                clear() {
                    this._channelCaches.clear()
                }
                constructor() {
                    this._channelCaches = new Map
                }
            };

            function S(e) {
                let t = !1;
                if (m.updateExistingMessageIfCached(e) && (t = !0), f.MessageTypesWithLazyLoadedReferences.has(e.type)) {
                    let n = e.message_reference;
                    if (null == n) return t;
                    let a = n.message_id;
                    if (null == a) return t;
                    if ("referenced_message" in e) {
                        let t = e.referenced_message;
                        null != t ? (m.set(t.channel_id, t.id, {
                            state: s.LOADED,
                            message: (0, o.createMessageRecord)(t)
                        }), e.type === f.MessageTypes.THREAD_STARTER_MESSAGE && S(t)) : m.set(e.channel_id, a, {
                            state: s.DELETED
                        })
                    } else {
                        let e = E.default.getMessage(n.channel_id, a);
                        null != e ? m.set(n.channel_id, a, {
                            state: s.LOADED,
                            message: e
                        }) : m.set(n.channel_id, a, _)
                    }
                    t = !0
                }
                return t
            }

            function M(e, t) {
                let n = !1;
                for (let a of e) n = !1 !== t(a) || n;
                return n
            }

            function p(e) {
                let {
                    messages: t
                } = e;
                return M(t, e => S(e))
            }

            function T(e) {
                return m.deleteChannelCache(e.channel.id)
            }

            function A(e, t) {
                if (!m.has(e, t)) return !1;
                m.set(e, t, {
                    state: s.DELETED
                })
            }

            function C() {
                m.clear()
            }

            function I(e) {
                let {
                    firstMessages: t
                } = e;
                return null != t && M(t, e => S(e))
            }
            class L extends r.default.Store {
                initialize() {
                    this.waitFor(E.default, c.default)
                }
                getMessageByReference(e) {
                    let t;
                    return null != e && (t = m.get(e.channel_id, e.message_id)), null != t ? t : _
                }
                getMessage(e, t) {
                    var n;
                    return null !== (n = m.get(e, t)) && void 0 !== n ? n : _
                }
                getReplyIdsForChannel(e) {
                    let t;
                    return null != e && (t = m.getCachedMessageIdsForChannel(e)), null != t ? t : g
                }
            }
            L.displayName = "ReferencedMessageStore";
            let D = new L(d.default, {
                CACHE_LOADED: function(e) {
                    let {
                        messages: t
                    } = e;
                    return M(Object.values(t), e => M(Object.values(e), e => S(e)))
                },
                LOCAL_MESSAGES_LOADED: p,
                LOAD_MESSAGES_SUCCESS: p,
                LOAD_MESSAGES_AROUND_SUCCESS: p,
                SEARCH_FINISH: function(e) {
                    let {
                        messages: t
                    } = e;
                    return M(t, e => M(e, e => S(e)))
                },
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    let {
                        data: t
                    } = e, n = (0, u.getMessagesFromGuildFeedFetch)(t);
                    return M(n, e => S(e))
                },
                LOAD_THREADS_SUCCESS: I,
                LOAD_ARCHIVED_THREADS_SUCCESS: I,
                LOAD_FORUM_POSTS: function(e) {
                    let {
                        threads: t
                    } = e;
                    return M(Object.values(t), e => {
                        let {
                            first_message: t
                        } = e;
                        return null != t && S(t)
                    })
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    return !!E.default.getMessages(t.channel_id).ready && S(t)
                },
                MESSAGE_UPDATE: function(e) {
                    let {
                        message: t
                    } = e, n = t.id, a = t.channel_id;
                    if (!m.has(a, n)) return !1;
                    let l = m.get(a, n);
                    if (null == l || l.state !== s.LOADED) return !1;
                    m.set(a, n, {
                        state: s.LOADED,
                        message: (0, o.updateMessageRecord)(l.message, t)
                    })
                },
                MESSAGE_DELETE: function(e) {
                    let {
                        id: t,
                        channelId: n
                    } = e;
                    return A(n, t)
                },
                MESSAGE_DELETE_BULK: function(e) {
                    let {
                        ids: t,
                        channelId: n
                    } = e;
                    return M(t, e => A(n, e))
                },
                CREATE_PENDING_REPLY: function(e) {
                    let {
                        message: t
                    } = e;
                    m.set(t.channel_id, t.id, {
                        state: s.LOADED,
                        message: t
                    })
                },
                CHANNEL_DELETE: T,
                THREAD_DELETE: T,
                GUILD_DELETE: function() {
                    let e = m.retainWhere(e => null != c.default.getChannel(e));
                    if (0 === e) return !1
                },
                CONNECTION_OPEN: C,
                LOGOUT: C
            });
            var O = D
        },
        401848: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlowmodeType: function() {
                    return s
                },
                default: function() {
                    return h
                }
            });
            var a, s, l = n("446674"),
                i = n("862337"),
                r = n("913144"),
                d = n("42203"),
                u = n("957255"),
                o = n("49111");
            (a = s || (s = {}))[a.SendMessage = 0] = "SendMessage", a[a.CreateThread = 1] = "CreateThread";
            let c = {
                [s.SendMessage]: {},
                [s.CreateThread]: {}
            };

            function E(e, t, n) {
                if (function(e, t) {
                        null != c[t][e.id] && (c[t][e.id].timer.stop(), delete c[t][e.id])
                    }(e, t), function(e, t) {
                        return t === s.SendMessage ? u.default.can(o.Permissions.MANAGE_CHANNELS, e) || u.default.can(o.Permissions.MANAGE_MESSAGES, e) : u.default.can(o.Permissions.MANAGE_THREADS, e)
                    }(e, t) || n <= 0) return;
                let a = n + Date.now();
                c[t][e.id] = {
                    rateLimitPerUser: e.rateLimitPerUser,
                    cooldownMs: n,
                    cooldownEndTimestamp: a,
                    timer: new i.Timeout
                }, c[t][e.id].timer.start(1e3, () => {
                    r.default.dispatch({
                        type: "SLOWMODE_SET_COOLDOWN",
                        channelId: e.id,
                        slowmodeType: t,
                        cooldownMs: Math.max(a - Date.now(), 0)
                    })
                }, !0)
            }

            function f(e, t) {
                let n = d.default.getChannel(e);
                if (null == n) return !1;
                E(n, t, 0 === n.rateLimitPerUser ? 0 : 1e3 * n.rateLimitPerUser + 100)
            }

            function _(e) {
                let {
                    file: t
                } = e, n = d.default.getChannel(t.channelId);
                return null != n && E(n, s.SendMessage, 0)
            }
            class g extends l.default.Store {
                initialize() {
                    this.waitFor(d.default)
                }
                getSlowmodeCooldownGuess(e, t) {
                    let n = c[null != t ? t : s.SendMessage][e];
                    return null != n ? n.cooldownMs : 0
                }
            }
            g.displayName = "SlowmodeStore";
            var h = new g(r.default, {
                SLOWMODE_RESET_COOLDOWN: function(e) {
                    let {
                        channelId: t,
                        slowmodeType: n
                    } = e;
                    return f(t, n)
                },
                SLOWMODE_SET_COOLDOWN: function(e) {
                    let {
                        channelId: t,
                        slowmodeType: n,
                        cooldownMs: a
                    } = e, s = d.default.getChannel(t);
                    if (null == s) return !1;
                    E(s, n, 0 === a ? 0 : a + 100)
                },
                UPLOAD_START: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return f(t, s.SendMessage)
                },
                UPLOAD_FAIL: _,
                UPLOAD_CANCEL_REQUEST: _,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    [s.SendMessage, s.CreateThread].forEach(e => {
                        for (let a of t) {
                            var n;
                            let t = c[e][a.id],
                                s = a.rateLimitPerUser;
                            if (null == t || t.rateLimitPerUser === s) continue;
                            let l = Math.min(null !== (n = null == t ? void 0 : t.cooldownMs) && void 0 !== n ? n : 0, 1e3 * s);
                            E(a, e, l)
                        }
                    })
                },
                LOGOUT: function() {
                    [s.SendMessage, s.CreateThread].forEach(e => {
                        Object.keys(c[e]).forEach(t => c[e][t].timer.stop()), c[e] = {}
                    })
                }
            })
        }
    }
]);
//# sourceMappingURL=82c816e241ac31d29c34.js.map