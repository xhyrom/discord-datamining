(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["31717"], {
        819689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return eS
                }
            }), n("70102"), n("222007"), n("702976");
            var a = n("394846"),
                l = n("872717"),
                s = n("819855"),
                i = n("913144"),
                r = n("408062"),
                d = n("979911"),
                u = n("716241"),
                o = n("802493"),
                c = n("595525"),
                E = n("219788"),
                f = n("679653"),
                _ = n("893694"),
                g = n("139514"),
                h = n("312016"),
                m = n("605250"),
                S = n("619443"),
                p = n("582415"),
                M = n("600798"),
                T = n("569808"),
                I = n("9294"),
                A = n("52393"),
                C = n("143291"),
                L = n("379534"),
                v = n("40566"),
                D = n("994918"),
                O = n("815297"),
                y = n("168730"),
                N = n("129953"),
                R = n("28007"),
                b = n("880731"),
                G = n("562228"),
                P = n("793277");
            n("685841");
            var U = n("256572"),
                w = n("364685"),
                k = n("804888"),
                B = n("263024"),
                F = n("410912"),
                V = n("373469"),
                x = n("271938"),
                H = n("42203");
            n("836417");
            var K = n("305961"),
                Y = n("337543"),
                W = n("377253"),
                j = n("957255"),
                X = n("824563"),
                J = n("660478"),
                z = n("27618"),
                q = n("18494"),
                Q = n("162771"),
                Z = n("401848"),
                $ = n("697218"),
                ee = n("599110"),
                et = n("568734"),
                en = n("659632"),
                ea = n("701909"),
                el = n("719923"),
                es = n("299039"),
                ei = n("404118"),
                er = n("49111"),
                ed = n("724210"),
                eu = n("579033"),
                eo = n("782340");
            let ec = new m.default("MessageActionCreators"),
                eE = new m.default("MessageQueue"),
                ef = !1;
            class e_ {
                markComplete() {
                    this.completed = !0
                }
                constructor() {
                    this.completed = !1
                }
            }

            function eg(e) {
                let {
                    inviteKey: t,
                    channelId: n,
                    messageId: a,
                    location: l,
                    suggested: s = null,
                    overrideProperties: i = {}
                } = e, r = (0, I.parseExtraDataFromInviteKey)(t), d = H.default.getChannel(n);
                if (null != d) {
                    let e = null;
                    d.isMultiUserDM() ? e = er.LoggingInviteTypes.GDM_INVITE : !d.isPrivate() && (e = er.LoggingInviteTypes.SERVER_INVITE);
                    let n = {},
                        c = Y.default.getInvite(t);
                    if (null != c && c.state === er.InviteStates.RESOLVED && null != c.channel) {
                        var o;
                        let t = c.channel;
                        n.invite_channel_id = t.id, n.invite_guild_id = null === (o = c.guild) || void 0 === o ? void 0 : o.id, n.invite_channel_type = t.type, null != c.inviter && (n.invite_inviter_id = c.inviter.id);
                        let a = V.default.getLastActiveStream();
                        if (null != a && a.channelId === t.id) {
                            e = er.LoggingInviteTypes.STREAM, n.destination_user_id = a.ownerId;
                            let t = (0, p.getStreamerApplication)(a, X.default);
                            n.application_id = null != t ? t.id : null
                        }
                    }
                    null != s && (n.is_suggested = s.isAffinitySuggestion, n.row_num = s.rowNum, n.num_total = s.numTotal, n.num_affinity_connections = s.numAffinityConnections, n.is_filtered = s.isFiltered), n = {
                        ...n,
                        location: l,
                        invite_type: e,
                        invite_code: r.baseCode,
                        guild_id: d.getGuildId(),
                        channel_id: d.id,
                        message_id: a,
                        send_type: er.SendTypes.DIRECT_MESSAGE,
                        invite_guild_scheduled_event_id: r.guildScheduledEventId,
                        ...i
                    }, u.default.trackWithMetadata(er.AnalyticEvents.INVITE_SENT, n)
                } else {
                    let e = {},
                        n = Y.default.getInvite(t);
                    null != n && n.state === er.InviteStates.RESOLVED && null != n.inviter && (e.invite_inviter_id = n.inviter.id, e = {
                        ...e,
                        location: l,
                        invite_type: er.LoggingInviteTypes.FRIEND_INVITE,
                        invite_code: r.baseCode,
                        message_id: a,
                        send_type: er.SendTypes.DIRECT_MESSAGE,
                        invite_guild_scheduled_event_id: r.guildScheduledEventId,
                        ...i
                    }, u.default.trackWithMetadata(er.AnalyticEvents.INVITE_SENT, e))
                }
            }
            let eh = {
                    [er.AbortCodes.EMAIL_VERIFICATION_REQUIRED]: {
                        messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
                        messageGetter: () => eo.default.Messages.BOT_REQUIRES_EMAIL_VERIFICATION
                    },
                    [er.AbortCodes.INVALID_MESSAGE_SEND_USER]: {
                        messageName: "BOT_DM_SEND_FAILED_WITH_HELP_LINK",
                        messageGetter: () => eo.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                            helpUrl: ea.default.getArticleURL(er.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
                        })
                    },
                    [er.AbortCodes.RATE_LIMIT_DM_OPEN]: {
                        messageName: "BOT_DM_RATE_LIMITED",
                        messageGetter: () => eo.default.Messages.BOT_DM_RATE_LIMITED
                    },
                    [er.AbortCodes.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
                        messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
                        messageGetter: () => eo.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
                    },
                    [er.AbortCodes.SLOWMODE_RATE_LIMITED]: {
                        messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
                        messageGetter: () => eo.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
                    }
                },
                em = {
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
                        null != n && u.default.trackWithMetadata(er.AnalyticEvents.AUTOMATED_MESSAGE_RECEIVED, {
                            message_author: "Clyde",
                            message_name: n
                        }), em.receiveMessage(e, (0, O.createBotMessage)({
                            channelId: e,
                            content: t,
                            loggingName: n
                        }))
                    },
                    sendClydeError(e) {
                        let t, n, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            l = H.default.getChannel(e);
                        if (null != l) {
                            if (a === er.AbortCodes.EXPLICIT_CONTENT) {
                                if (l.isDM()) t = eo.default.Messages.BOT_DM_EXPLICIT_CONTENT.format({
                                    name: (0, f.computeChannelName)(l, $.default, z.default)
                                }), n = "BOT_DM_EXPLICIT_CONTENT";
                                else if (l.isMultiUserDM()) t = eo.default.Messages.BOT_GDM_EXPLICIT_CONTENT.format({
                                    name: (0, f.computeChannelName)(l, $.default, z.default)
                                }), n = "BOT_GDM_EXPLICIT_CONTENT";
                                else {
                                    let e = K.default.getGuild(l.getGuildId());
                                    if (null == e) return;
                                    t = eo.default.Messages.BOT_GUILD_EXPLICIT_CONTENT.format({
                                        name: e.toString()
                                    }), n = "BOT_GUILD_EXPLICIT_CONTENT"
                                }
                            } else if (a === er.AbortCodes.SLOWMODE_RATE_LIMITED) t = eo.default.Messages.CHANNEL_SLOWMODE_DESC.format({
                                seconds: l.rateLimitPerUser
                            }), n = "SLOWMODE_RATE_LIMITED";
                            else if (a === er.AbortCodes.INVALID_MESSAGE_SEND_USER) t = eo.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                                helpUrl: ea.default.getArticleURL(er.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
                            }), n = "INVALID_MESSAGE_SEND_USER";
                            else if (a === er.AbortCodes.TOO_MANY_THREADS) {
                                let e = l.isForumLikeChannel() || l.isForumPost();
                                t = e ? eo.default.Messages.BOT_DM_TOO_MANY_POSTS : eo.default.Messages.BOT_DM_TOO_MANY_THREADS, n = "TOO_MANY_THREADS"
                            } else a === er.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS ? (t = eo.default.Messages.BOT_DM_TOO_MANY_ANNOUNCEMENT_THREADS, n = "TOO_MANY_ANNOUNCEMENT_THREADS") : a === er.AbortCodes.HARMFUL_LINK_MESSAGE_BLOCKED ? (t = eo.default.Messages.HARMFUL_LINK_MESSAGE_BLOCKED_ERROR.format({
                                helpUrl: er.MarketingURLs.HARMFUL_LINKS
                            }), n = "HARMFUL_LINK_MESSAGE_BLOCKED") : a in eh ? (n = eh[a].messageName, t = eh[a].messageGetter()) : (t = eo.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                                helpUrl: ea.default.getArticleURL(er.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
                            }), n = "SEND_FAILED (".concat(a, ")"));
                            em.sendBotMessage(e, t, n)
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
                        em.trackJump(e, null, "Present");
                        let n = {
                            present: !0
                        };
                        W.default.hasPresent(e) ? i.default.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            jump: n,
                            channelId: e,
                            limit: t
                        }) : em.fetchMessages({
                            channelId: e,
                            limit: t,
                            jump: n
                        })
                    },
                    trackJump(e, t, n, a) {
                        u.default.trackWithMetadata(er.AnalyticEvents.JUMP, {
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
                            offset: l,
                            context: s,
                            extraProperties: i = null,
                            isPreload: r,
                            returnMessageId: d,
                            skipLocalFetch: u,
                            jumpType: o
                        } = e;
                        return "string" == typeof s && em.trackJump(t, n, s, i), em.fetchMessages({
                            channelId: t,
                            limit: er.MAX_MESSAGES_FOR_JUMP,
                            jump: {
                                messageId: n,
                                flash: a,
                                offset: l,
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
                        em.fetchMessages({
                            channelId: t,
                            limit: er.MAX_MESSAGES_FOR_JUMP,
                            focus: {
                                messageId: n
                            }
                        })
                    },
                    fetchMessages(e) {
                        let {
                            channelId: t,
                            before: n,
                            after: a,
                            limit: s,
                            jump: d,
                            focus: u,
                            isPreload: o,
                            skipLocalFetch: c,
                            truncate: E
                        } = e, f = H.default.getChannel(t), _ = S.default.isConnectedOrOverlay(), g = Date.now();
                        if (null != f && f.type === er.ChannelTypes.GUILD_STORE) return !1;
                        if (t === ed.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return;
                        if (ec.log("Fetching messages for ".concat(t, " between ").concat(n, " and ").concat(a, ". jump=").concat(JSON.stringify(d))), em._tryFetchMessagesCached({
                                channelId: t,
                                before: n,
                                after: a,
                                limit: s,
                                jump: d,
                                focus: u,
                                truncate: E
                            })) return;
                        F.default.fetchMessages.recordStart();
                        let h = null != d ? d : void 0;
                        null == h && null != u && (h = {
                            ...u
                        });
                        let m = r.default.getOrCreate(t),
                            p = m.loadStart(h);
                        r.default.commit(p), i.default.dispatch({
                            type: "LOAD_MESSAGES"
                        });
                        let M = null == h ? void 0 : h.messageId,
                            T = new e_;
                        return !c && this.fetchLocalMessages(t, n, a, s, T), l.default.get({
                            url: er.Endpoints.MESSAGES(t),
                            query: {
                                before: n,
                                after: a,
                                limit: s,
                                around: M,
                                preload: o
                            },
                            retries: 2,
                            oldFormErrors: !0
                        }).then(e => (F.default.fetchMessages.recordEnd(), F.default.dispatchMessages.measure(() => {
                            let l = e.body,
                                r = null != n,
                                u = null != a,
                                o = null == n && null == a,
                                c = null != M || l.length === s && (r || o),
                                f = null != M || u && l.length === s;
                            if (null != M) {
                                let e = Math.floor(s / 2),
                                    n = [M, ...l.map(e => {
                                        let {
                                            id: t
                                        } = e;
                                        return t
                                    })].filter((e, t, n) => n.indexOf(e) === t).sort(es.default.compare),
                                    a = n.indexOf(M);
                                if (a < e && (c = !1), l.length - a < e && (f = !1), f && l.length > 0) {
                                    let e = J.default.lastMessageId(t);
                                    l[0].id === e && (f = !1)
                                }
                            }
                            ec.log("Fetched ".concat(l.length, " messages for ").concat(t, " isBefore:").concat(r, " isAfter:").concat(u)), T.markComplete(), i.default.dispatch({
                                type: "LOAD_MESSAGES_SUCCESS",
                                channelId: t,
                                messages: l,
                                isBefore: r,
                                isAfter: u,
                                hasMoreBefore: c,
                                hasMoreAfter: f,
                                limit: s,
                                jump: d,
                                isStale: !_ || S.default.lastTimeConnectedChanged() >= g,
                                truncate: E
                            })
                        }), !0), () => (ec.log("Failed to fetch messages for ".concat(t)), i.default.dispatch({
                            type: "LOAD_MESSAGES_FAILURE",
                            channelId: t
                        }), !1))
                    },
                    async fetchLocalMessages(e, t, n, a, l) {
                        let s = H.default.getBasicChannel(e),
                            d = r.default.getOrCreate(e),
                            u = o.default.database();
                        if (null == u || null == s || null != t || null != n) {
                            F.default.addLocalMessages(e, -1);
                            return
                        }
                        if (d.ready && !d.cached) {
                            F.default.addLocalMessages(e, -2);
                            return
                        }
                        let f = await (0, c.tryLoadAsync)(() => E.default.load(u, e, a));
                        if (null == f) {
                            F.default.addLocalMessages(e, -3);
                            return
                        }
                        if (ec.log("fetched ".concat(f.messages.length, " messages from local database (channel_id: ").concat(e, ", remote_fetch_completed: ").concat(l.completed, ")")), F.default.addLocalMessages(e, f.messages.length), !l.completed && f.messages.length > 0) {
                            let t = f.messages.length >= a && f.connectionId === S.default.lastTimeConnectedChanged();
                            i.default.dispatch({
                                type: "LOCAL_MESSAGES_LOADED",
                                guildId: s.guild_id,
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
                        let a = H.default.getBasicChannel(e),
                            l = o.default.database();
                        if (null == l || null == a) return;
                        let s = r.default.getOrCreate(e);
                        if (s.hasMoreAfter) return;
                        let d = await (0, c.tryLoadAsync)(() => E.default.load(l, e, t));
                        if (null == d) return;
                        s = r.default.getOrCreate(e);
                        let u = null === (n = s.last()) || void 0 === n ? void 0 : n.id,
                            f = null == u ? d.messages : d.messages.filter(e => es.default.compare(e.id, u) > 0);
                        ec.log("Fetched ".concat(d.messages.length, " messages from the cache after foregrounding. ").concat(f.length, " are new")), 0 !== f.length && i.default.dispatch({
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
                        let {
                            channelId: t,
                            before: n,
                            after: a,
                            limit: l,
                            jump: s,
                            focus: r,
                            truncate: d
                        } = e, u = W.default.getMessages(t);
                        if (u.cached || !u.ready) return !1;
                        if ((null == s ? void 0 : s.messageId) != null || (null == r ? void 0 : r.messageId) != null) {
                            if ((null == s ? void 0 : s.messageId) != null && u.has(s.messageId, !1)) return i.default.dispatch({
                                type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                channelId: t,
                                jump: s,
                                limit: l,
                                truncate: d
                            }), !0;
                            if ((null == r ? void 0 : r.messageId) != null) {
                                if (u.has(r.messageId, !1)) return i.default.dispatch({
                                    type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                    channelId: t,
                                    focus: r,
                                    limit: l,
                                    truncate: d
                                }), !0;
                                s = {
                                    ...r
                                }
                            }
                            let e = (null == s ? void 0 : s.messageId) != null ? es.default.extractTimestamp(null == s ? void 0 : s.messageId) : 0,
                                n = u.first(),
                                a = u.last();
                            if (!u.hasMoreBefore && null != n && es.default.extractTimestamp(n.id) >= e || !u.hasMoreAfter && null != a && es.default.extractTimestamp(a.id) <= e || null != n && null != a && es.default.extractTimestamp(n.id) < e && es.default.extractTimestamp(a.id) > e) return i.default.dispatch({
                                type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                channelId: t,
                                jump: s,
                                limit: er.MAX_MESSAGES_FOR_JUMP
                            }), !0
                        } else if (null != n && u.hasBeforeCached(n)) return i.default.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            channelId: t,
                            before: n,
                            limit: l,
                            truncate: d
                        }), !0;
                        else if (null != a && u.hasAfterCached(a)) return i.default.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            channelId: t,
                            after: a,
                            limit: l,
                            truncate: d
                        }), !0;
                        return !1
                    },
                    async sendMessage(e, t) {
                        var n;
                        let a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                            l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        if (t.reaction) return Promise.resolve();
                        let s = await (0, P.default)(e);
                        if (null != s) return em.sendMessage(s, t, a, l);
                        let i = () => em._sendMessage(e, t, l),
                            r = C.LocalMessageBackgroundSendingExperiment.getCurrentConfig({
                                location: "8e1e29_1"
                            }).enableBackgroundSending ? L.default.backgroundify(i, void 0) : i,
                            d = null !== (n = l.nonce) && void 0 !== n ? n : (0, O.createNonce)();
                        return (l = {
                            ...l,
                            nonce: d
                        }, v.default.recordMessageSendAttempt(e, d), W.default.isReady(e)) ? r() : a && e !== ed.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID ? (eE.info("Waiting for channel ".concat(e, " to be ready before sending.")), new Promise((t, n) => {
                            W.default.whenReady(e, () => {
                                eE.info("Channel ".concat(e, " is ready for sending now.")), r().then(t, n)
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
                                parse: Object.values(er.AllowedMentionTypes),
                                replied_user: !1
                            };
                        return {
                            messageReference: n,
                            allowedMentions: a
                        }
                    },
                    sendInvite: (e, t, n, a) => em._sendMessage(e, {
                        content: (0, A.default)(t),
                        tts: !1,
                        validNonShortcutEmojis: [],
                        invalidEmojis: []
                    }, {
                        location: n,
                        suggestedInvite: null != a ? a : void 0
                    }),
                    sendActivityBookmark: (e, t, n, a) => em._sendMessage(e, {
                        content: t,
                        tts: !1,
                        validNonShortcutEmojis: [],
                        invalidEmojis: []
                    }, {
                        location: n,
                        suggestedInvite: null != a ? a : void 0
                    }),
                    sendClydeProfileOverride: (e, t, n, a) => em._sendMessage(e, {
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
                            l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                        return em._sendMessage(e, {
                            content: n,
                            invalidEmojis: [],
                            validNonShortcutEmojis: [],
                            tts: l
                        }, {
                            ...a,
                            stickerIds: t
                        })
                    },
                    sendGreetMessage(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                messageReference: a,
                                allowedMentions: s
                            } = n;
                        return l.default.post({
                            url: er.Endpoints.MESSAGES_GREET(e),
                            body: {
                                sticker_ids: [t],
                                allowed_mentions: s,
                                message_reference: a
                            },
                            oldFormErrors: !0
                        }).then(n => (D.default.donateSentMessage(n.body.content, e), em.receiveMessage(e, n.body), i.default.dispatch({
                            type: "STICKER_TRACK_USAGE",
                            stickerIds: [t]
                        }), n), t => {
                            throw ec.log("Failed to send greeting"), 429 !== t.status && em.sendClydeError(e, t.body.code), i.default.dispatch({
                                type: "MESSAGE_SEND_FAILED",
                                messageId: t.body.id,
                                channelId: e
                            }), t
                        })
                    },
                    sendPollMessage(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return em._sendMessage(e, {
                            content: "",
                            tts: !1,
                            validNonShortcutEmojis: [],
                            invalidEmojis: []
                        }, {
                            ...n,
                            poll: t
                        })
                    },
                    _sendMessage(e, t, n) {
                        var l, s;
                        let r = (0, P.default)(e);
                        if (null != r) return eE.info("Converting channel to a private channel"), r.then(e => {
                            eE.info("Finished converting channel to a private channel"), em._sendMessage(e, t, n)
                        });
                        let o = t.content,
                            {
                                invalidEmojis: c,
                                validNonShortcutEmojis: E,
                                tts: f = !1
                            } = t,
                            {
                                activityAction: m,
                                location: S,
                                suggestedInvite: p,
                                stickerIds: I,
                                messageReference: A,
                                allowedMentions: C,
                                poll: L
                            } = n,
                            N = null !== (l = n.flags) && void 0 !== l ? l : 0,
                            [U, B] = (0, k.default)(o);
                        if (U && (o = B, N = (0, et.addFlag)(N, er.MessageFlags.SUPPRESS_NOTIFICATIONS)), "" === o && null == m && null == I && null == L) return Promise.reject(Error("not sending empty message"));
                        let F = null != A ? er.MessageTypes.REPLY : er.MessageTypes.DEFAULT,
                            V = null !== (s = n.nonce) && void 0 !== s ? s : (0, O.createNonce)();
                        if (!1 !== n.eagerDispatch) {
                            let t = (0, O.default)({
                                channelId: e,
                                content: o,
                                tts: f,
                                type: F,
                                messageReference: A,
                                allowedMentions: C,
                                flags: 0 !== N ? N : void 0,
                                nonce: V,
                                poll: (0, G.createPollServerDataFromCreateRequest)(L)
                            });
                            (0, R.updateComboOnMessageSend)(e, t.id), null != I && (t.sticker_items = I.map(e => w.default.getStickerById(e)).filter(e => null != e)), em.receiveMessage(e, t, !0, n)
                        }
                        if (!ef && null != c && c.length > 0) {
                            let t, n;
                            ef = !0;
                            let a = $.default.getCurrentUser();
                            c.some(e => e.animated) && !el.default.canUseAnimatedEmojis(a) ? (t = eo.default.Messages.INVALID_ANIMATED_EMOJI_BODY_UPGRADE, n = "INVALID_ANIMATED_EMOJI_BODY") : j.default.canWithPartialContext(er.Permissions.USE_EXTERNAL_EMOJIS, {
                                channelId: e
                            }) ? (t = eo.default.Messages.INVALID_EXTERNAL_EMOJI_BODY_UPGRADE, n = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE") : (t = eo.default.Messages.INVALID_EXTERNAL_EMOJI_BODY, n = "INVALID_EXTERNAL_EMOJI_BODY"), em.sendBotMessage(e, t, n)
                        }
                        let K = {
                            type: d.MessageDataType.SEND,
                            message: {
                                channelId: e,
                                content: o,
                                nonce: V,
                                tts: f,
                                message_reference: A,
                                allowed_mentions: C,
                                flags: N
                            }
                        };
                        if (null != m) {
                            let e = m.type === er.ActivityActionTypes.JOIN_REQUEST ? null == m ? void 0 : m.activity.session_id : x.default.getSessionId();
                            if (null != e) {
                                let t = {
                                        type: m.type,
                                        session_id: e
                                    },
                                    {
                                        activity: n
                                    } = m;
                                null != n.party && null != n.party.id && (t.party_id = n.party.id), K.message.application_id = n.application_id, K.message.activity = t
                            }
                        }
                        return null != L && (K.message.poll = L), null != I && (K.message.sticker_ids = I), b.default.isEnabled() && (K.message.has_poggermode_enabled = !0), (0, _.default)(e) && (K.message.allow_proactive_clyde_reply = !0), new Promise((t, l) => {
                            let s = Date.now(),
                                r = d.default.length,
                                c = Math.floor(1e4 * Math.random());
                            eE.info("Queueing message to be sent LogId:".concat(c)), d.default.enqueue(K, d => {
                                let c = Date.now() - s;
                                if (d.ok) D.default.donateSentMessage(o, e), em.receiveMessage(e, d.body, !0, {
                                    sendAnalytics: {
                                        duration: c,
                                        queueSize: r
                                    },
                                    poll: L
                                }), v.default.recordMessageSendApiResponse(V), i.default.dispatch({
                                    type: "SLOWMODE_RESET_COOLDOWN",
                                    slowmodeType: Z.SlowmodeType.SendMessage,
                                    channelId: e
                                }), i.default.dispatch({
                                    type: "EMOJI_TRACK_USAGE",
                                    emojiUsed: E
                                }), i.default.dispatch({
                                    type: "STICKER_TRACK_USAGE",
                                    stickerIds: I
                                }), ! function(e) {
                                    let {
                                        content: t,
                                        channelId: n,
                                        messageId: l,
                                        location: s,
                                        suggested: i = null,
                                        overrideProperties: r = {}
                                    } = e;
                                    (0, h.default)(t).forEach(e => {
                                        let {
                                            type: t,
                                            code: d
                                        } = e;
                                        if (t === g.CodedLinkType.INVITE) eg({
                                            inviteKey: d,
                                            channelId: n,
                                            messageId: l,
                                            location: s,
                                            suggested: i,
                                            overrideProperties: r
                                        });
                                        else if (t === g.CodedLinkType.TEMPLATE) {
                                            let e = T.default.getGuildTemplate(d);
                                            if (null == e || e.state === eu.GuildTemplateStates.RESOLVING) return;
                                            u.default.trackWithMetadata(er.AnalyticEvents.GUILD_TEMPLATE_LINK_SENT, {
                                                guild_template_code: d,
                                                guild_template_name: e.name,
                                                guild_template_description: e.description,
                                                guild_template_guild_id: e.sourceGuildId
                                            })
                                        } else if (t === g.CodedLinkType.BUILD_OVERRIDE);
                                        else if (t === g.CodedLinkType.EVENT);
                                        else if (t === g.CodedLinkType.CHANNEL_LINK);
                                        else if (t === g.CodedLinkType.APP_DIRECTORY_PROFILE) ee.default.track(er.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, {
                                            application_id: d,
                                            device_platform: a.isMobile ? "mobile_web" : "desktop_web",
                                            guild_id: Q.default.getGuildId(),
                                            channel_id: q.default.getChannelId()
                                        });
                                        else if (t === g.CodedLinkType.ACTIVITY_BOOKMARK);
                                        else if (t === g.CodedLinkType.EMBEDDED_ACTIVITY_INVITE);
                                        else if (t === g.CodedLinkType.GUILD_PRODUCT);
                                        else if (t === g.CodedLinkType.SERVER_SHOP);
                                        else if (t === g.CodedLinkType.CLYDE_PROFILE);
                                        else throw Error("Unknown coded link type: ".concat(t))
                                    })
                                }({
                                    content: o,
                                    channelId: e,
                                    messageId: d.body.id,
                                    location: null != S ? S : "chat_input",
                                    suggested: p
                                }), ! function(e, t, n, a, l) {
                                    (0, en.findGiftCodes)(e).forEach(e => {
                                        let s = H.default.getChannel(t);
                                        null != s && u.default.trackWithMetadata(er.AnalyticEvents.GIFT_CODE_SENT, {
                                            location: a,
                                            gift_code: e,
                                            guild_id: s.getGuildId(),
                                            channel_id: s.id,
                                            channel_type: s.type,
                                            message_id: n,
                                            automatic_send: l
                                        })
                                    })
                                }(o, e, d.body.id, null != S ? S : "chat_input", !!n.isGiftLinkSentOnBehalfOfUser), t(d);
                                else {
                                    var f;
                                    ec.log("Failed to send message", {
                                        hasErr: d.hasErr,
                                        status: d.status,
                                        code: null === (f = d.body) || void 0 === f ? void 0 : f.code,
                                        error: d.err
                                    });
                                    let t = !1;
                                    if (d.hasErr) "ABORTED" === d.err.code && (t = !0);
                                    else if (d.status >= 400 && d.status < 500 && d.body) {
                                        if (d.body.code === er.AbortCodes.SLOWMODE_RATE_LIMITED) {
                                            let t = d.body.retry_after;
                                            null != t && t > 0 && i.default.dispatch({
                                                type: "SLOWMODE_SET_COOLDOWN",
                                                channelId: e,
                                                slowmodeType: Z.SlowmodeType.SendMessage,
                                                cooldownMs: 1e3 * t
                                            })
                                        } else M.AUTOMOD_ERROR_CODES.has(d.body.code) ? i.default.dispatch({
                                            type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                            messageData: K,
                                            errorResponseBody: {
                                                code: d.body.code,
                                                message: d.body.message
                                            }
                                        }) : d.body.code === er.AbortCodes.POGGERMODE_TEMPORARILY_DISABLED ? i.default.dispatch({
                                            type: "POGGERMODE_TEMPORARILY_DISABLED"
                                        }) : d.body.code === er.AbortCodes.CLYDE_CONSENT_REQUIRED ? i.default.dispatch({
                                            type: "MESSAGE_FAILED_CLYDE_CONSENT",
                                            messageId: V,
                                            channelId: e
                                        }) : null != L || em.sendClydeError(e, d.body.code)
                                    }
                                    t ? em.deleteMessage(e, V, !0) : (i.default.dispatch({
                                        type: "MESSAGE_SEND_FAILED",
                                        messageId: V,
                                        channelId: e
                                    }), (0, y.logMessageSendFailure)({
                                        failureCode: d.hasErr ? void 0 : d.status,
                                        errorMessage: d.hasErr ? d.err.message : void 0
                                    })), l(d)
                                }
                            }, c)
                        })
                    },
                    startEditMessage(e, t, n, a) {
                        i.default.dispatch({
                            type: "MESSAGE_START_EDIT",
                            channelId: e,
                            messageId: t,
                            content: n,
                            source: a
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
                        await B.default.unarchiveThreadIfNecessary(e);
                        let l = function(e, t) {
                                let n = W.default.getMessage(e, t);
                                if (null == n || n.type !== er.MessageTypes.REPLY) return;
                                let a = U.default.getMessageByReference(n.messageReference);
                                if (a.state === U.ReferencedMessageState.LOADED) {
                                    if (!n.mentions.includes(a.message.author.id)) return {
                                        parse: Object.values(er.AllowedMentionTypes),
                                        replied_user: !1
                                    }
                                }
                            }(e, t),
                            r = {
                                channelId: e,
                                messageId: t,
                                content: a,
                                allowed_mentions: l
                            };
                        d.default.enqueue({
                            type: d.MessageDataType.EDIT,
                            message: r
                        }, n => {
                            let a = !n.hasErr && M.AUTOMOD_ERROR_CODES.has(n.body.code);
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
                            n.hasErr ? s.AccessibilityAnnouncer.announce(eo.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_FAILED) : a ? s.AccessibilityAnnouncer.announce(eo.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_AUTOMOD_BLOCKED) : s.AccessibilityAnnouncer.announce(eo.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED), em.endEditMessage(e, n.hasErr ? void 0 : n), em.focusMessage({
                                channelId: e,
                                messageId: t
                            })
                        })
                    },
                    async suppressEmbeds(e, t) {
                        await B.default.unarchiveThreadIfNecessary(e), l.default.patch({
                            url: er.Endpoints.MESSAGE(e, t),
                            body: {
                                flags: er.MessageFlags.SUPPRESS_EMBEDS
                            },
                            oldFormErrors: !0
                        })
                    },
                    async patchMessageAttachments(e, t, n) {
                        await B.default.unarchiveThreadIfNecessary(e), l.default.patch({
                            url: er.Endpoints.MESSAGE(e, t),
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
                                    s.AccessibilityAnnouncer.announce(eo.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_DELETED)
                                })
                            };
                        n ? a() : (await B.default.unarchiveThreadIfNecessary(e), l.default.delete({
                            url: er.Endpoints.MESSAGE(e, t),
                            oldFormErrors: !0
                        }).then(() => {
                            a()
                        }));
                        let r = W.default.getMessage(e, t);
                        (null == r ? void 0 : r.type) === er.MessageTypes.GUILD_INVITE_REMINDER && (0, N.trackGuildInviteNotificationDismissed)()
                    },
                    dismissAutomatedMessage(e) {
                        null != e.loggingName && u.default.trackWithMetadata(er.AnalyticEvents.AUTOMATED_MESSAGE_DISMISSED, {
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
                    crosspostMessage: (e, t) => l.default.post({
                        url: er.Endpoints.MESSAGE_CROSSPOST(e, t),
                        oldFormErrors: !0
                    }).catch(e => {
                        let t;
                        t = 429 === e.status ? eo.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_BODY.format({
                            retryAfter: Math.floor(e.body.retry_after / 60)
                        }) : eo.default.Messages.PUBLISH_FOLLOWED_NEWS_GENERIC_BODY, ei.default.show({
                            title: eo.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_TITLE,
                            body: t,
                            confirmText: eo.default.Messages.OKAY
                        })
                    }),
                    trackInvite: eg
                };
            var eS = em
        },
        219788: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("222007"), n("70102");
            var a = n("705909"),
                l = n("605250"),
                s = n("619443"),
                i = n("42203"),
                r = n("286235"),
                d = n("802493"),
                u = n("883062"),
                o = n("794897"),
                c = n("818697"),
                E = n("280468");
            let f = new l.default("Messages");
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
                            l = e.get(t);
                        (null == l || l.incomplete && !a.incomplete) && e.set(t, a)
                    }
                }
                constructor(e) {
                    if (this.connectionId = null, this.users = [], this.members = [], this.messages = [], e.length > 0) {
                        var t;
                        let n = null === (t = e[0]) || void 0 === t ? void 0 : t.connectionId,
                            [a, l] = _.computeUsersAndMembers(e);
                        e.length > 0 && e.every(e => e.connectionId === n) && (this.connectionId = n), this.users = a, this.members = l, this.messages = e.map(e => e.message)
                    }
                }
            }
            var g = new class e {
                async startupLoad(e, t, n, a) {
                    let l = d.default.messages(e),
                        s = await l.getLatest(t, n, a);
                    return new _(s)
                }
                async load(e, t, n) {
                    let a = i.default.getBasicChannel(t);
                    if (null == t || null == a || !(0, c.isReadableChannel)(a)) return new _([]);
                    {
                        let l = d.default.messages(e),
                            s = await l.getLatest(a.guild_id, t, n);
                        return new _(s)
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
                insertStale(e, t, n, l) {
                    let i = d.default.messagesTransaction(l),
                        r = s.default.lastTimeConnectedChanged();
                    i.put(e, t, u.KvMessage.fromMessage(e, t, n, r), a.ConflictOptions.Skip)
                }
                upsertOne(e, t, n, l) {
                    let i = d.default.messagesTransaction(l),
                        r = s.default.lastTimeConnectedChanged();
                    i.put(e, t, u.KvMessage.fromMessage(e, t, n, r), a.ConflictOptions.Replace), i.trimChannel(e, t, o.default.saveLimit(t))
                }
                upsertMany(e, t, n, a) {
                    let l = d.default.messagesTransaction(a),
                        i = s.default.lastTimeConnectedChanged();
                    for (let a of n) l.put(e, t, u.KvMessage.fromMessage(e, t, a, i));
                    l.trimChannel(e, t, o.default.saveLimit(t))
                }
                async updateOne(e, t, n, a) {
                    if (null == n.id) {
                        f.warn("updateOne: message.id is null; cannot update a message if we do not know its id.");
                        return
                    }
                    let l = d.default.messages(a.database),
                        i = await l.get(e, t, n.id),
                        r = s.default.lastTimeConnectedChanged();
                    null != i && l.put(e, t, u.KvMessage.fromMessage(e, t, {
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
                    return s
                }
            }), n("222007"), n("424973");
            var a = n("26989"),
                l = n("697218");
            class s {
                static fromMessage(e, t, n, a) {
                    let [l, i] = s.deriveMemberUsers(e, n);
                    return {
                        id: n.id,
                        channelId: t,
                        message: n,
                        members: l,
                        users: i,
                        connectionId: a
                    }
                }
                static deriveMemberUsers(e, t) {
                    var n, s, i, r;
                    let d = new Set([null === (n = t.author) || void 0 === n ? void 0 : n.id, null === (s = t.interaction) || void 0 === s ? void 0 : s.user.id, ...null !== (r = null === (i = t.mentions) || void 0 === i ? void 0 : i.map(e => e.id)) && void 0 !== r ? r : []]),
                        u = [],
                        o = [];
                    for (let t of d) {
                        if (null == t) continue;
                        let n = l.default.getUser(t),
                            s = a.default.getTrueMember(null != e ? e : "", t);
                        null != n && o.push(n), null != s && u.push(s)
                    }
                    return [u, o]
                }
            }
        },
        794897: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007");
            var a = n("446674"),
                l = n("913144"),
                s = n("42203"),
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
            class p extends a.default.Store {
                initialize() {
                    this.waitFor(s.default), this.waitFor(r.default), this.waitFor(i.default), this.syncWith([d.default], () => !0), this.syncWith([r.default], M)
                }
                canEvictOrphans() {
                    return S
                }
                saveLimit(e) {
                    let t = s.default.getBasicChannel(e);
                    return null != t && (0, E.isPrivateChannel)(t) || null != t && h.has(e) ? 25 : 1
                }
                getSaveableChannels() {
                    let e = s.default.getChannelIds(null),
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
                    let t = s.default.getBasicChannel(e);
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
                        let t = s.default.getBasicChannel(e);
                        !(0, f.isReadableChannel)(t) && p.deleteChannel(e)
                    }
                }
                static deleteUnreadableGuildChannels(e) {
                    for (let t of h.values()) e === t.guildId && !(0, f.isReadableChannelId)(t.channelId) && p.deleteChannel(t.channelId)
                }
                static replaceLru(e) {
                    h = e
                }
            }

            function M() {
                let e = r.default.getChannelId();
                null != e && p.recordChannel(e)
            }

            function T(e) {
                let t = e.id,
                    n = (0, f.isReadableChannel)(e),
                    a = r.default.getChannelId();
                n && t === a && p.recordChannel(t), !n && p.deleteChannel(t)
            }
            var I = new p(l.default, {
                CACHE_LOADED_LAZY_NO_CACHE: function(e) {
                    S = !0
                },
                CACHE_LOADED_LAZY: function(e) {
                    S = !0, null != e.saveableChannels && p.mergeSnapshot(e.saveableChannels)
                },
                CHANNEL_DELETE: function(e) {
                    p.deleteChannel(e.channel.id)
                },
                CHANNEL_UPDATES: function(e) {
                    for (let t of e.channels) T(t)
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function() {
                    p.dropUnreachableChannels(), p.replaceLru((0, _.withFallbacks)(h, 1250))
                },
                GUILD_DELETE: function(e) {
                    return !e.guild.unavailable && (p.deleteGuild(e.guild.id), !0)
                },
                LOGIN_SUCCESS: function(e) {
                    h.clear(), m.clear(), S = !1
                },
                THREAD_DELETE: function(e) {
                    p.deleteChannel(e.channel.id)
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
                    return s
                }
            }), n("42203");
            var a = n("525065"),
                l = n("49111");

            function s(e) {
                var t;
                let n = null !== (t = a.default.getMemberCount(null == e ? void 0 : e.guild_id)) && void 0 !== t ? t : 0;
                return null != e && e.type !== l.ChannelTypes.DM && e.type !== l.ChannelTypes.GROUP_DM && n >= 1e4
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
                l = n("42203"),
                s = n("957255"),
                i = n("49111");
            let r = i.BasicPermissions.VIEW_CHANNEL | i.BasicPermissions.READ_MESSAGE_HISTORY;

            function d(e) {
                return null != e && (e.type === i.ChannelTypes.DM || e.type === i.ChannelTypes.GROUP_DM || (0, a.isTextChannel)(e.type) && s.default.canBasicChannel(r, e))
            }

            function u(e) {
                return null != e && d(l.default.getBasicChannel(e))
            }
        },
        875081: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                withFallbacks: function() {
                    return u
                }
            }), n("222007");
            var a = n("42203"),
                l = n("677099"),
                s = n("625483"),
                i = n("689257"),
                r = n("818697"),
                d = n("49111");

            function u(e, t) {
                if (e.totalLength >= t) return e;
                let n = new s.ExtendedMemoryLru(e.primaryCapacity, e.extendedCapacity),
                    u = t - e.totalLength;
                for (let t of l.default.getGuildFolders())
                    for (let l of t.guildIds)
                        for (let t of Object.values(a.default.getMutableBasicGuildChannelsForGuild(l)))
                            if (function(e) {
                                    return e.type === d.ChannelTypes.DM || e.type === d.ChannelTypes.GROUP_DM || e.type === d.ChannelTypes.GUILD_TEXT
                                }(t) && (0, r.isReadableChannel)(t) && !(0, i.isLimitedChannel)(t) && function(e, t, n) {
                                    !n.hasExtended(t.id) && n.put(t.id, {
                                        guildId: e,
                                        channelId: t.id,
                                        channelType: t.type,
                                        fallback: !0
                                    })
                                }(l, t, n), n.totalLength >= u) return o(n, e);
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
                l = n("913144"),
                s = n("605250"),
                i = n("802493");
            let r = new s.default("FileSystemStore"),
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
                    super(l.default, {
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
                    return s
                }
            }), n("222007");
            var a = n("475838"),
                l = n("185496");
            class s {
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
                    this.primary = new l.Lru(e), this.extended = new l.Lru(t)
                }
            }
        },
        475838: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                chain: function() {
                    return l
                }
            }), n("222007");
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

            function l() {
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
            }), n("222007");
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
        149022: function(e, t, n) {
            "use strict";

            function a() {
                return {
                    textValue: "",
                    richValue: [{
                        type: "line",
                        children: [{
                            text: ""
                        }]
                    }]
                }
            }

            function l(e) {
                return {
                    textValue: e,
                    richValue: i(e)
                }
            }
            n.r(t), n.d(t, {
                createEmptyState: function() {
                    return a
                },
                createState: function() {
                    return l
                },
                toRichValue: function() {
                    return i
                },
                voidToOptionValue: function() {
                    return r
                }
            }), n("70102");
            let s = Object.freeze([Object.freeze({
                type: "line",
                children: Object.freeze([Object.freeze({
                    text: ""
                })])
            })]);

            function i(e) {
                return "" !== e ? e.split("\n").map(e => ({
                    type: "line",
                    children: [{
                        text: e
                    }]
                })) : s
            }

            function r(e) {
                switch (e.type) {
                    case "userMention":
                        return {
                            type: "userMention", userId: e.userId
                        };
                    case "channelMention":
                        return {
                            type: "channelMention", channelId: e.channelId
                        };
                    case "staticRouteLink":
                        return {
                            type: "staticRouteLink", channelId: e.channelId
                        };
                    case "soundboard":
                        return {
                            type: "soundboard", soundId: e.soundId
                        };
                    case "roleMention":
                        return {
                            type: "roleMention", roleId: e.roleId
                        };
                    case "textMention":
                        return {
                            type: "textMention", text: e.name
                        };
                    case "emoji":
                        return {
                            type: "emoji", name: e.emoji.name, surrogate: e.emoji.surrogate
                        };
                    case "customEmoji":
                        return {
                            type: "customEmoji", emojiId: e.emoji.emojiId, name: e.emoji.name, animated: e.emoji.animated
                        };
                    case "testInlineVoid":
                        throw Error("Unable to convert test types")
                }
                return null
            }
        },
        374648: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isProactiveClydeV2Enabled: function() {
                    return s
                }
            });
            var a = n("862205");
            let l = (0, a.createExperiment)({
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

            function s(e, t) {
                let {
                    isProactiveClydeV2Enabled: n
                } = l.getCurrentConfig({
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
                l = n("42203"),
                s = n("377253"),
                i = n("374648");

            function r(e) {
                var t, n, r;
                let d = null !== (n = null === (t = l.default.getBasicChannel(e)) || void 0 === t ? void 0 : t.guild_id) && void 0 !== n ? n : "",
                    u = s.default.getMessages(e),
                    o = u.last();
                if (null == o) return !1;
                let c = null !== (r = u.getManyBefore(o.id, 10)) && void 0 !== r ? r : [],
                    E = a.default.getId();
                return c.some(t => {
                    var n;
                    let a = t.author.isClyde();
                    if (!a || null == t.messageReference) return !1;
                    let l = s.default.getMessage(e, t.messageReference.message_id);
                    if (null != l && (0, i.isProactiveClydeV2Enabled)(d, "allowProactiveClydeV2")) return !0;
                    return (null == l ? void 0 : null === (n = l.author) || void 0 === n ? void 0 : n.id) === E
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
            }), n("70102"), n("222007");
            var a = n("979911"),
                l = n("42203"),
                s = n("49111"),
                i = n("782340");
            class r extends Error {}
            class d extends Error {}
            let u = new Set([s.AbortCodes.AUTOMOD_MESSAGE_BLOCKED, s.AbortCodes.AUTOMOD_TITLE_BLOCKED, s.AbortCodes.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE]);

            function o(e, t) {
                if (null == e) return null;
                let {
                    code: n,
                    message: a
                } = e;
                if (!u.has(n)) return null;
                if (null != a) return a;
                if (null == t) return null;
                let r = l.default.getChannel(t);
                return (null == r ? void 0 : r.isThread()) ? i.default.Messages.THREAD_AUTOMOD_ERROR : ((null == r ? void 0 : r.isForumPost()) || (null == r ? void 0 : r.isForumLikeChannel())) && (n === s.AbortCodes.AUTOMOD_TITLE_BLOCKED || n === s.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) ? i.default.Messages.FORUM_POST_AUTOMOD_ERROR : null
            }

            function c(e, t) {
                let n = o(t);
                return null != n ? n : null == e ? i.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE : function(e) {
                    let t = l.default.getChannel(e.message.channelId);
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
                l = n("913144"),
                s = n("82339"),
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
                    let n = (0, s.default)(e);
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
            var _ = new f(l.default, {
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
                    return l
                }
            });
            var a = n("773336");

            function l() {
                let e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    l = window.GLOBAL_ENV.INVITE_HOST;
                return (0, a.isAndroid)() ? (l = location.host, e = "/invite/".concat(t)) : e = "/".concat(t), "".concat(n ? "".concat(location.protocol, "//") : "").concat(l).concat(e)
            }
        },
        143291: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LocalMessageBackgroundSendingExperiment: function() {
                    return l
                }
            });
            var a = n("862205");
            let l = (0, a.createExperiment)({
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
            }), n("222007");
            var a = n("811022"),
                l = n("446674"),
                s = n("913144"),
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
                    l = (0, r.getSignalStrength)();
                c.default.track(E.AnalyticEvents.SEND_MESSAGE_ROUNDTRIP, {
                    ...(0, i.default)(),
                    api_latency_ms: n,
                    gateway_latency_ms: a,
                    channel_id: t.id,
                    channel_type: t.type,
                    guild_id: t.guild_id,
                    guild_size: u.default.getMemberCount(t.guild_id),
                    mobile_network_type: o.default.getType(),
                    ...null != l && {
                        mobile_signal_strength_level: l
                    }
                })
            }
            class h extends l.default.Store {
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
            let m = new h(s.default, {
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
            }), n("702976"), n("424973");
            var a = n("627445"),
                l = n.n(a),
                s = n("256572"),
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
                    discriminator: l,
                    bot: s,
                    globalName: i
                } = e;
                return {
                    id: t,
                    username: n,
                    avatar: a,
                    discriminator: l,
                    bot: s,
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
                    nonce: h,
                    poll: m
                } = e, S = [];
                if (d === u.MessageTypes.REPLY && (l(null != E, "Replies must have a message reference"), null == f || f.replied_user)) {
                    let e = s.default.getMessageByReference(E);
                    (null == e ? void 0 : e.state) === s.ReferencedMessageState.LOADED && S.push(c(e.message.author))
                }
                return null == _ && (_ = r.default.getCurrentUser()), _ instanceof i.default && (_ = c(_)), l(null != _, "createMessage: author cannot be undefined"), {
                    id: null != h ? h : o(),
                    type: d,
                    content: n,
                    channel_id: t,
                    author: _,
                    attachments: [],
                    embeds: [],
                    pinned: !1,
                    mentions: S,
                    mention_channels: [],
                    mention_roles: [],
                    mention_everyone: !1,
                    timestamp: new Date().toISOString(),
                    state: u.MessageStates.SENDING,
                    tts: a,
                    message_reference: E,
                    flags: g,
                    nonce: h,
                    poll: m
                }
            }

            function f(e) {
                let {
                    channelId: t,
                    content: n,
                    embeds: a,
                    loggingName: l
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
                    loggingName: l
                }
            }
        },
        168730: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                logMessageSendFailure: function() {
                    return s
                }
            });
            var a = n("716241"),
                l = n("49111");

            function s(e) {
                var t, n;
                let s = null != e.fileItems ? function(e) {
                        return e.map(e => {
                            var t;
                            return null !== (t = e.mimeType) && void 0 !== t ? t : "unknown"
                        })
                    }(e.fileItems) : [],
                    i = null !== (t = e.errorMessage) && void 0 !== t ? t : void 0,
                    r = null !== (n = e.failureCode) && void 0 !== n ? n : void 0;
                (0, a.trackWithMetadata)(l.AnalyticEvents.SEND_MESSAGE_FAILURE, {
                    failure_code: r,
                    error_message: i,
                    attachment_mimetypes: s
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
            var a, l, s = n("716241"),
                i = n("49111");

            function r() {
                s.default.trackWithMetadata(i.AnalyticEvents.NOTIFICATION_CTA_CLICKED, {
                    notification_type: "Reminder Notification",
                    action: "Guild Invite",
                    dismissed: !1
                })
            }

            function d() {
                s.default.trackWithMetadata(i.AnalyticEvents.NOTIFICATION_CTA_CLICKED, {
                    notification_type: "Reminder Notification",
                    action: "Guild Invite",
                    dismissed: !0
                })
            }(a || (a = {})).REMINDER_NOTIFICATION = "Reminder Notification", (l || (l = {})).GUILD_INVITE = "Guild Invite"
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
                l = n("271938"),
                s = n("880731"),
                i = n("943551"),
                r = n("767189");

            function d(e) {
                a.default.dispatch({
                    type: "POGGERMODE_SETTINGS_UPDATE",
                    settings: e
                });
                let t = {
                    ...s.default.getState(),
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
                let s = l.default.getId(),
                    r = i.default.getUserCombo(s, e);
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
                    userId: s,
                    multiplier: d,
                    value: 0
                })
            }
        },
        39141: function(e, t, n) {
            "use strict";
            var a, l, s, i, r, d;
            n.r(t), n.d(t, {
                ConfettiLocation: function() {
                    return a
                },
                ShakeLocation: function() {
                    return l
                },
                ShakeLevel: function() {
                    return s
                },
                SHAKE_STEPS: function() {
                    return o
                },
                SHAKE_STEP_DIVIDER: function() {
                    return c
                }
            }), n("808653"), n("222007"), (i = a || (a = {}))[i.CHAT_INPUT = 0] = "CHAT_INPUT", i[i.REACTION = 1] = "REACTION", i[i.MEMBER_USER = 2] = "MEMBER_USER", i[i.CALL_TILE = 3] = "CALL_TILE", (r = l || (l = {}))[r.CHAT_INPUT = 0] = "CHAT_INPUT", r[r.VOICE_USER = 1] = "VOICE_USER", r[r.MENTION = 2] = "MENTION", (d = s || (s = {}))[d.LEVEL_1 = 0] = "LEVEL_1", d[d.LEVEL_2 = 1] = "LEVEL_2", d[d.LEVEL_3 = 2] = "LEVEL_3", d[d.LEVEL_4 = 3] = "LEVEL_4", d[d.LEVEL_5 = 4] = "LEVEL_5";
            let u = {
                    0: [
                        [1, 1e-4],
                        [25, .05],
                        [50, .1],
                        [100, .5],
                        [250, 1],
                        [500, 2],
                        [1e3, 3],
                        [9001, 4]
                    ],
                    1: [
                        [1, 1e-4],
                        [25, .25],
                        [50, .5],
                        [100, 1],
                        [250, 2.5],
                        [500, 5],
                        [1e3, 7.5],
                        [9001, 10]
                    ],
                    2: [
                        [1, .001],
                        [25, .5],
                        [50, 1],
                        [100, 2],
                        [250, 4],
                        [500, 8],
                        [1e3, 12],
                        [9001, 16]
                    ],
                    3: [
                        [1, .25],
                        [25, .75],
                        [50, 1],
                        [100, 2],
                        [250, 4],
                        [500, 8],
                        [1e3, 20],
                        [9001, 50]
                    ],
                    4: [
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
                    0: [],
                    1: [],
                    2: [],
                    3: [],
                    4: []
                }),
                c = Object.keys(u).reduce((e, t) => ({
                    ...e,
                    [t]: u[t].map(e => {
                        let [t, n] = e;
                        return n
                    })
                }), {
                    0: [],
                    1: [],
                    2: [],
                    3: [],
                    4: []
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
                l = n("446674"),
                s = n("913144"),
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
            class o extends l.default.DeviceSettingsStore {
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
            var c = new o(s.default, {
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
            }), n("222007");
            var a = n("446674"),
                l = n("407846"),
                s = n("862337"),
                i = n("913144"),
                r = n("271938"),
                d = n("18494"),
                u = n("659500"),
                o = n("880731"),
                c = n("119035"),
                E = n("39141"),
                f = n("49111");
            let _ = new Set,
                g = new l.default(function(e) {
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
                h = new l.default(function(e) {
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
                let l = null == n;
                return !(l || a.has(n)) && (a.add(n), !0)
            }
            class p extends a.default.Store {
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
                    var n;
                    let a = this.getUserCombo(e, t);
                    return null != a && a.value >= o.default.combosRequiredCount && null != (n = a) && (n.value > 0 || (null == n ? void 0 : n.multiplier) > 1)
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
                    let l = this.getUserCombo(e, t);
                    return null != l ? (0, c.getComboShakeIntensity)(l, a) * n : 0
                }
            }
            p.displayName = "PoggermodeStore";
            let M = new p(i.default, {
                POGGERMODE_UPDATE_COMBO: function(e) {
                    let {
                        type: t,
                        ...n
                    } = e;
                    if (!o.default.isEnabled()) return !1;
                    ! function e(t) {
                        var n, a, l, i, r, d;
                        let u = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            o = g.get(m(t)),
                            c = {
                                ...o,
                                ...t,
                                value: null !== (a = null !== (n = t.value) && void 0 !== n ? n : null == o ? void 0 : o.value) && void 0 !== a ? a : 0,
                                multiplier: Math.min(null !== (i = null !== (l = t.multiplier) && void 0 !== l ? l : null == o ? void 0 : o.multiplier) && void 0 !== i ? i : 1, 7),
                                decayInterval: null !== (r = null == o ? void 0 : o.decayInterval) && void 0 !== r ? r : new s.Interval
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
                                    }), M.emitChange())
                                } else e({
                                    ...t,
                                    value: t.value - 1
                                }), M.emitChange()
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
                            mentions: l,
                            author: s,
                            nonce: i
                        }
                    } = e;
                    if (!o.default.isEnabled()) return !1;
                    let d = r.default.getId();
                    if (!S(null == s ? void 0 : s.id, d, i, _)) return !1;
                    let h = g.get(m({
                        userId: null !== (t = null == s ? void 0 : s.id) && void 0 !== t ? t : "???",
                        channelId: a
                    }));
                    if (o.default.screenshakeEnabled && o.default.screenshakeEnabledLocations[E.ShakeLocation.MENTION] && null != l && null != l.find(e => e.id === d)) {
                        let e = null != h ? null !== (n = (0, c.getComboShakeIntensity)(h, E.ShakeLevel.LEVEL_4)) && void 0 !== n ? n : .001 : 4 * Math.random();
                        return u.ComponentDispatch.dispatch(f.ComponentActions.SHAKE_APP, {
                            duration: 1e3,
                            intensity: e
                        }), !0
                    }
                    return !1
                }
            });
            var T = M
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
            }), n("222007"), n("808653");
            var a = n("39141"),
                l = n("49111");
            let s = function(e, t) {
                    let {
                        multiplier: n,
                        value: a
                    } = e, [l, s] = t, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, r = a * n;
                    if (r <= 0) return 0;
                    let d = l.reduce((e, t, n) => {
                        if (r > t) {
                            let e = s[n];
                            if (n + 1 === l.length) return s[n];
                            let a = l[n + 1],
                                i = s[n + 1];
                            return (r - t) / (a - t) * (i - e) + e
                        }
                        return r === t ? s[n] : e
                    }, 0);
                    return Math.min(i, d)
                },
                i = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.ShakeLevel.LEVEL_3;
                    return s(e, [a.SHAKE_STEPS[t], a.SHAKE_STEP_DIVIDER[t]], 1e5)
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
                o = e => s(e, [d, u], 1),
                c = e => 1 === e ? {
                    color: l.Color.BRAND_500
                } : 2 === e || 3 === e ? {
                    color: l.Color.GREEN_360
                } : 4 === e || 5 === e ? {
                    color: l.Color.YELLOW_300,
                    square: !0
                } : 6 === e ? {
                    color: l.Color.RED_400,
                    square: !0
                } : {
                    color: l.Color.ORANGE_345,
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
            }), n("222007");
            var a = n("917351"),
                l = n.n(a),
                s = n("599110"),
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
            let c = l.throttle(e => {
                let {
                    enabled: t,
                    combosEnabled: n,
                    combosRequiredCount: a,
                    screenshakeEnabled: l,
                    shakeIntensity: i,
                    screenshakeEnabledLocations: c,
                    confettiEnabled: E,
                    confettiSize: f,
                    confettiCount: _,
                    confettiEnabledLocations: g
                } = e;
                s.default.track(r.AnalyticEvents.POGGERMODE_SETTINGS_UPDATED, {
                    enabled: t,
                    combos_enabled: n,
                    combos_required_count: a,
                    screenshake_enabled: l,
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
        83995: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PollsExperiment: function() {
                    return l
                },
                PollsUserExperiment: function() {
                    return s
                }
            });
            var a = n("862205");
            let l = (0, a.createExperiment)({
                    kind: "guild",
                    id: "2023-09_guild_polls",
                    label: "Polls",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enables creation of polls within a guild",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                s = (0, a.createExperiment)({
                    kind: "user",
                    id: "2023-10_poll_users",
                    label: "Polls User Experiment",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enables poll messages",
                        config: {
                            enabled: !0
                        }
                    }]
                })
        },
        562228: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateEmptyPollAnswer: function() {
                    return u
                },
                generateUploadId: function() {
                    return o
                },
                filterOutUUID: function() {
                    return c
                },
                useCanPostPollsInChannel: function() {
                    return E
                },
                isAnswerFilled: function() {
                    return f
                },
                isIncompleteAnswer: function() {
                    return _
                },
                createPollServerDataFromCreateRequest: function() {
                    return g
                }
            }), n("781738");
            var a = n("748820"),
                l = n("418009"),
                s = n("957255"),
                i = n("697218"),
                r = n("83995"),
                d = n("49111");

            function u() {
                return {
                    text: void 0,
                    image: void 0,
                    uploadId: o()
                }
            }

            function o() {
                return (0, a.v4)()
            }

            function c(e) {
                return e.replace(/\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i, "")
            }

            function E(e) {
                let {
                    enabled: t
                } = r.PollsExperiment.useExperiment({
                    guildId: e.guild_id,
                    location: "useCanPostPollsInChannel"
                });
                return !!d.ChannelTypesSets.POLLS.has(e.type) && (e.isPrivate() ? e.recipients.every(e => {
                    let t = i.default.getUser(e);
                    return (null == t ? void 0 : t.isStaff()) === !0
                }) : t && s.default.can(d.Permissions.SEND_MESSAGES, e))
            }

            function f(e, t) {
                return t === l.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? null != e.image : null != e.text && e.text.length > 0
            }

            function _(e, t) {
                return t === l.PollLayoutTypes.DEFAULT && null != e.image && (null == e.text || 0 === e.text.length)
            }

            function g(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0";
                if (null == e) return;
                let a = null == e ? void 0 : null === (t = e.answers) || void 0 === t ? void 0 : t.map((e, t) => {
                    var n, a, l;
                    let s = null === (n = e.poll_media) || void 0 === n ? void 0 : n.emoji,
                        i = {
                            ...e.poll_media,
                            emoji: null != s ? {
                                id: null !== (a = s.id) && void 0 !== a ? a : null,
                                name: null !== (l = s.name) && void 0 !== l ? l : ""
                            } : void 0
                        };
                    return {
                        ...e,
                        answer_id: t + 1,
                        poll_media: i
                    }
                });
                return {
                    ...e,
                    expiry: n,
                    answers: a
                }
            }
        },
        793277: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("450911"),
                l = n("42203"),
                s = n("724210");

            function i(e) {
                if (e !== s.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return null;
                let t = l.default.getChannel(e);
                return null == t ? null : a.default.ensurePrivateChannel(t.recipients)
            }
        },
        685841: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("446674"),
                l = n("913144"),
                s = n("377253");
            let i = {},
                r = {},
                d = {};

            function u(e) {
                if (null == e) return !1;
                let t = r[e];
                if (null == t) return !1;
                let n = s.default.getMessage(e, t.messageId);
                if (null == n) return !1;
                i[e] = {
                    channel: t.channel,
                    message: n,
                    shouldMention: t.shouldMention,
                    showMentionToggle: t.showMentionToggle
                }, delete r[e]
            }

            function o() {
                i = {}, r = {}, d = {}
            }
            class c extends a.default.Store {
                initialize() {
                    this.waitFor(s.default)
                }
                getPendingReply(e) {
                    return i[e]
                }
                getPendingReplyActionSource(e) {
                    return d[e]
                }
            }
            c.displayName = "PendingReplyStore";
            var E = new c(l.default, {
                CREATE_PENDING_REPLY: function(e) {
                    let {
                        channel: t,
                        message: n,
                        shouldMention: a = !0,
                        showMentionToggle: l = !0,
                        source: s
                    } = e;
                    i[t.id] = {
                        channel: t,
                        message: n,
                        shouldMention: a,
                        showMentionToggle: l
                    }, d[t.id] = s
                },
                CREATE_SHALLOW_PENDING_REPLY: function(e) {
                    let {
                        channel: t,
                        messageId: n,
                        shouldMention: a = !0,
                        showMentionToggle: l = !0
                    } = e;
                    r[t.id] = {
                        channel: t,
                        messageId: n,
                        shouldMention: a,
                        showMentionToggle: l
                    }
                },
                SET_PENDING_REPLY_SHOULD_MENTION: function(e) {
                    let {
                        channelId: t,
                        shouldMention: n
                    } = e;
                    t in i && (i[t] = {
                        ...i[t],
                        shouldMention: n
                    }), t in r && (r[t] = {
                        ...r[t],
                        shouldMention: n
                    })
                },
                DELETE_PENDING_REPLY: function(e) {
                    let {
                        channelId: t
                    } = e;
                    delete i[t], delete r[t]
                },
                CONNECTION_OPEN: o,
                LOGOUT: o,
                MESSAGE_DELETE: function(e) {
                    var t, n, a;
                    let {
                        id: l,
                        channelId: s
                    } = e;
                    if ((null === (n = i[s]) || void 0 === n ? void 0 : null === (t = n.message) || void 0 === t ? void 0 : t.id) === l) delete i[s], delete d[s];
                    else {
                        if ((null === (a = r[s]) || void 0 === a ? void 0 : a.messageId) !== l) return !1;
                        delete r[s], delete d[s]
                    }
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    u(t)
                },
                LOAD_MESSAGES_SUCCESS: function(e) {
                    let {
                        channelId: t
                    } = e;
                    u(t)
                }
            })
        },
        836417: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("446674"),
                l = n("913144"),
                s = n("149022"),
                i = n("884351"),
                r = n("845579"),
                d = n("377253");
            let u = {},
                o = {};
            class c extends a.default.Store {
                isEditing(e, t) {
                    var n;
                    return (null === (n = u[e]) || void 0 === n ? void 0 : n.messageId) === t
                }
                isEditingAny(e) {
                    return null != u[e]
                }
                getEditingTextValue(e) {
                    var t;
                    return null === (t = u[e]) || void 0 === t ? void 0 : t.textValue
                }
                getEditingRichValue(e) {
                    var t;
                    return null === (t = u[e]) || void 0 === t ? void 0 : t.richValue
                }
                getEditingMessageId(e) {
                    var t;
                    return null === (t = u[e]) || void 0 === t ? void 0 : t.messageId
                }
                getEditingMessage(e) {
                    let t = u[e];
                    return null != t && null != t.messageId ? d.default.getMessage(e, t.messageId) : null
                }
                getEditActionSource(e) {
                    return o[e]
                }
            }
            c.displayName = "EditMessageStore";
            var E = new c(l.default, {
                MESSAGE_START_EDIT: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        content: a,
                        source: l
                    } = e, d = r.UseLegacyChatInput.getSetting(), c = i.default.unparse(a, t);
                    u[t] = {
                        channelId: t,
                        messageId: n,
                        textValue: c,
                        richValue: (0, s.toRichValue)(d ? c : a)
                    }, o[t] = l
                },
                MESSAGE_UPDATE_EDIT: function(e) {
                    let {
                        channelId: t,
                        textValue: n,
                        richValue: a
                    } = e, l = u[t];
                    if (null == l) return !1;
                    u[t] = {
                        ...l,
                        textValue: n,
                        richValue: a
                    }
                },
                MESSAGE_END_EDIT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == t || null == u[t]) return !1;
                    delete u[t], delete o[t]
                }
            })
        },
        401848: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlowmodeType: function() {
                    return a
                },
                default: function() {
                    return h
                }
            }), n("222007");
            var a, l, s = n("446674"),
                i = n("862337"),
                r = n("913144"),
                d = n("42203"),
                u = n("957255"),
                o = n("49111");
            (l = a || (a = {}))[l.SendMessage = 0] = "SendMessage", l[l.CreateThread = 1] = "CreateThread";
            let c = {
                0: {},
                1: {}
            };

            function E(e, t, n) {
                if (function(e, t) {
                        null != c[t][e.id] && (c[t][e.id].timer.stop(), delete c[t][e.id])
                    }(e, t), function(e, t) {
                        return 0 === t ? u.default.can(o.Permissions.MANAGE_CHANNELS, e) || u.default.can(o.Permissions.MANAGE_MESSAGES, e) : u.default.can(o.Permissions.MANAGE_THREADS, e)
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
                return null != n && E(n, 0, 0)
            }
            class g extends s.default.Store {
                initialize() {
                    this.waitFor(d.default)
                }
                getSlowmodeCooldownGuess(e, t) {
                    let n = c[null != t ? t : 0][e];
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
                    } = e, l = d.default.getChannel(t);
                    if (null == l) return !1;
                    E(l, n, 0 === a ? 0 : a + 100)
                },
                UPLOAD_START: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return f(t, 0)
                },
                UPLOAD_FAIL: _,
                UPLOAD_CANCEL_REQUEST: _,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    [0, 1].forEach(e => {
                        for (let a of t) {
                            var n;
                            let t = c[e][a.id],
                                l = a.rateLimitPerUser;
                            if (null == t || t.rateLimitPerUser === l) continue;
                            let s = Math.min(null !== (n = null == t ? void 0 : t.cooldownMs) && void 0 !== n ? n : 0, 1e3 * l);
                            E(a, e, s)
                        }
                    })
                },
                LOGOUT: function() {
                    [0, 1].forEach(e => {
                        Object.keys(c[e]).forEach(t => c[e][t].timer.stop()), c[e] = {}
                    })
                }
            })
        },
        418009: function(e, t, n) {
            "use strict";
            var a, l;
            n.r(t), n.d(t, {
                PollLayoutTypes: function() {
                    return a
                }
            }), (l = a || (a = {}))[l.UNKNOWN = 0] = "UNKNOWN", l[l.DEFAULT = 1] = "DEFAULT", l[l.IMAGE_ONLY_ANSWERS = 2] = "IMAGE_ONLY_ANSWERS"
        }
    }
]);
//# sourceMappingURL=31717.adea2dfab001015340df.js.map