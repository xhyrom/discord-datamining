(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["7039"], {
        419830: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getChannelIconTooltipText: function() {
                    return q
                },
                getChannelIconComponent: function() {
                    return J
                },
                getSimpleChannelIconComponent: function() {
                    return Q
                }
            });
            var l = s("677315"),
                u = s("157186"),
                n = s("26989"),
                a = s("305961"),
                r = s("88093"),
                i = s("697218"),
                d = s("290182"),
                f = s("116320"),
                E = s("437825"),
                T = s("972894"),
                I = s("446685"),
                h = s("978499"),
                c = s("617559"),
                o = s("213523"),
                N = s("593195"),
                _ = s("361777"),
                C = s("497757"),
                L = s("109264"),
                O = s("991497"),
                M = s("393621"),
                p = s("905999"),
                g = s("660074"),
                A = s("223383"),
                D = s("45029"),
                U = s("990745"),
                S = s("190986"),
                y = s("721618"),
                R = s("733160"),
                G = s("990864"),
                m = s("274652"),
                P = s("357077"),
                w = s("922744"),
                H = s("841307"),
                b = s("745183"),
                F = s("620193"),
                v = s("368121"),
                W = s("944633"),
                V = s("468507"),
                B = s("228427"),
                k = s("697468"),
                Y = s("547896"),
                X = s("619911"),
                x = s("959097"),
                K = s("656038"),
                j = s("724210"),
                Z = s("49111"),
                z = s("782340");

            function q(e, t, s, l) {
                if (null == e) return null;
                if (e.id === (null == t ? void 0 : t.rulesChannelId)) return z.default.Messages.CHANNEL_TOOLTIP_RULES;
                switch (e.type) {
                    case Z.ChannelTypes.GUILD_TEXT:
                        if (l) return z.default.Messages.CHANNEL_TOOLTIP_TEXT_ACTIVE_THREADS;
                        if (e.isNSFW()) return z.default.Messages.CHANNEL_TOOLTIP_TEXT_NSFW;
                        if ((0, K.default)(e)) return z.default.Messages.CHANNEL_TOOLTIP_TEXT_LIMITED;
                        return z.default.Messages.CHANNEL_TOOLTIP_TEXT;
                    case Z.ChannelTypes.GUILD_FORUM:
                        let u = e.isMediaChannel();
                        if (e.isNSFW()) return u ? z.default.Messages.CHANNEL_TOOLTIP_MEDIA_NSFW : z.default.Messages.CHANNEL_TOOLTIP_FORUM_NSFW;
                        if ((0, K.default)(e)) return u ? z.default.Messages.CHANNEL_TOOLTIP_MEDIA_LIMITED : z.default.Messages.CHANNEL_TOOLTIP_FORUM_LIMITED;
                        return u ? z.default.Messages.MEDIA_CHANNEL : z.default.Messages.FORUM;
                    case Z.ChannelTypes.GUILD_MEDIA:
                        if (e.isNSFW()) return z.default.Messages.CHANNEL_TOOLTIP_MEDIA_NSFW;
                        if ((0, K.default)(e)) return z.default.Messages.CHANNEL_TOOLTIP_MEDIA_LIMITED;
                        return z.default.Messages.MEDIA_CHANNEL;
                    case Z.ChannelTypes.GUILD_STAGE_VOICE:
                        if (s) return z.default.Messages.CHANNEL_TOOLTIP_STAGE_LOCKED;
                        if ((0, K.default)(e)) return z.default.Messages.CHANNEL_TOOLTIP_STAGE_LIMITED;
                        return z.default.Messages.CHANNEL_TOOLTIP_STAGE;
                    case Z.ChannelTypes.GUILD_VOICE:
                        if (s) return z.default.Messages.CHANNEL_TOOLTIP_VOICE_LOCKED;
                        if ((0, K.default)(e)) return z.default.Messages.CHANNEL_TOOLTIP_VOICE_LIMITED;
                        return z.default.Messages.CHANNEL_TOOLTIP_VOICE;
                    case Z.ChannelTypes.GUILD_ANNOUNCEMENT:
                        if (e.isNSFW()) return z.default.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS_NSFW;
                        if ((0, K.default)(e)) return z.default.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS_LIMITED;
                        return z.default.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS;
                    case Z.ChannelTypes.GUILD_STORE:
                        return z.default.Messages.CHANNEL_TOOLTIP_STORE;
                    case Z.ChannelTypes.DM:
                        return z.default.Messages.DM;
                    case Z.ChannelTypes.GROUP_DM:
                        return z.default.Messages.GROUP_DM;
                    case Z.ChannelTypes.GUILD_DIRECTORY:
                        return z.default.Messages.CHANNEL_TOOLTIP_DIRECTORY;
                    case Z.ChannelTypes.PUBLIC_THREAD:
                        return z.default.Messages.THREAD;
                    case Z.ChannelTypes.PRIVATE_THREAD:
                        return z.default.Messages.PRIVATE_THREAD;
                    default:
                        return null
                }
            }

            function J(e, t) {
                var s, z, q;
                let J = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        locked: Q = !1,
                        video: $ = !1,
                        stream: ee = !1,
                        hasActiveThreads: et = !1,
                        textFocused: es = !1
                    } = J;
                if (null == e) return null;
                null == t && (t = a.default.getGuild(e.getGuildId()));
                let el = (0, u.shouldShowMembershipVerificationGate)(null === (s = t) || void 0 === s ? void 0 : s.id, [a.default, r.default, i.default, n.default]),
                    eu = null != t && (0, l.canSeeGuildHome)(null === (z = t) || void 0 === z ? void 0 : z.id);
                if ((null == e ? void 0 : e.id) === (null === (q = t) || void 0 === q ? void 0 : q.rulesChannelId)) return o.default;
                switch (e.type) {
                    case Z.ChannelTypes.GUILD_ANNOUNCEMENT:
                        if (et) {
                            if (e.isNSFW()) return P.default;
                            if ((0, K.default)(e)) return H.default;
                            else return d.default
                        }
                        if (e.isNSFW()) return m.default;
                        if ((0, K.default)(e)) return G.default;
                        return R.default;
                    case Z.ChannelTypes.GUILD_STORE:
                        return Y.default;
                    case Z.ChannelTypes.DM:
                    case Z.ChannelTypes.GROUP_DM:
                        return f.default;
                    case Z.ChannelTypes.PRIVATE_THREAD:
                        return b.default;
                    case Z.ChannelTypes.ANNOUNCEMENT_THREAD:
                    case Z.ChannelTypes.PUBLIC_THREAD:
                        if (e.isNSFW()) return w.default;
                        if (e.isForumPost()) return g.default;
                        else return x.default;
                    case Z.ChannelTypes.GUILD_TEXT:
                        if (et) {
                            if (e.isNSFW()) return w.default;
                            if ((0, K.default)(e)) return b.default;
                            else return x.default
                        }
                        if (e.isNSFW()) return C.default;
                        if ((0, K.default)(e)) return _.default;
                        return N.default;
                    case Z.ChannelTypes.GUILD_FORUM:
                        let en = e.isMediaChannel();
                        if (e.isNSFW()) return en ? y.default : p.default;
                        if ((0, K.default)(e)) return en ? S.default : M.default;
                        else return en ? U.default : O.default;
                    case Z.ChannelTypes.GUILD_MEDIA:
                        if (e.isNSFW()) return y.default;
                        if ((0, K.default)(e)) return S.default;
                        else return U.default;
                    case Z.ChannelTypes.GUILD_STAGE_VOICE:
                        if (el) return (0, K.default)(e) ? D.default : k.default;
                        if (Q) return D.default;
                        if ((0, K.default)(e)) return k.default;
                        else return B.default;
                    case Z.ChannelTypes.GUILD_VOICE:
                        if (es) return L.default;
                        if (e.isNSFW()) return V.default;
                        if (ee) return X.default;
                        if (el) {
                            if ((0, K.default)(e)) return D.default;
                            return $ ? T.default : W.default
                        }
                        if (Q) return D.default;
                        if ((0, K.default)(e)) return $ ? T.default : W.default;
                        else return $ ? E.default : v.default;
                    case Z.ChannelTypes.GUILD_DIRECTORY:
                        return c.default;
                    case Z.ChannelTypes.GUILD_CATEGORY:
                        return h.default;
                    default:
                        if (j.StaticChannelIds.has(e.id)) {
                            if (e.id === j.StaticChannelId.GUILD_HOME || e.id === j.StaticChannelId.SERVER_GUIDE) {
                                if (eu) return A.default;
                                return F.default
                            }
                            if (e.id === j.StaticChannelId.CHANNEL_BROWSER || e.id === j.StaticChannelId.CUSTOMIZE_COMMUNITY) return I.default
                        }
                        return null
                }
            }

            function Q(e) {
                switch (e) {
                    case Z.ChannelTypes.GUILD_ANNOUNCEMENT:
                        return R.default;
                    case Z.ChannelTypes.GUILD_STORE:
                        return Y.default;
                    case Z.ChannelTypes.DM:
                    case Z.ChannelTypes.GROUP_DM:
                        return f.default;
                    case Z.ChannelTypes.PRIVATE_THREAD:
                        return b.default;
                    case Z.ChannelTypes.ANNOUNCEMENT_THREAD:
                    case Z.ChannelTypes.PUBLIC_THREAD:
                        return x.default;
                    case Z.ChannelTypes.GUILD_TEXT:
                    case Z.ChannelTypes.GUILD_FORUM:
                    case Z.ChannelTypes.GUILD_MEDIA:
                        return N.default;
                    case Z.ChannelTypes.GUILD_STAGE_VOICE:
                        return B.default;
                    case Z.ChannelTypes.GUILD_VOICE:
                        return v.default;
                    case Z.ChannelTypes.GUILD_CATEGORY:
                        return h.default;
                    default:
                        return null
                }
            }
        },
        19766: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                EVERYONE_ID: function() {
                    return g
                },
                MemberListRowTypes: function() {
                    return u
                },
                default: function() {
                    return H
                }
            });
            var l, u, n = s("917351"),
                a = s.n(n),
                r = s("210696"),
                i = s.n(r),
                d = s("316693"),
                f = s("446674"),
                E = s("913144"),
                T = s("991170"),
                I = s("373469"),
                h = s("271938"),
                c = s("42203"),
                o = s("525065"),
                N = s("26989"),
                _ = s("305961"),
                C = s("824563"),
                L = s("101125"),
                O = s("697218"),
                M = s("49111"),
                p = s("782340");
            let g = "everyone";

            function A(e, t, s, l) {
                switch (t) {
                    case M.StatusTypes.ONLINE:
                    case M.StatusTypes.OFFLINE:
                    case M.StatusTypes.UNKNOWN:
                        return {
                            type: u.GROUP, key: t, id: t, get title() {
                                switch (t) {
                                    case M.StatusTypes.ONLINE:
                                        return p.default.Messages.STATUS_ONLINE;
                                    case M.StatusTypes.OFFLINE:
                                        return p.default.Messages.STATUS_OFFLINE;
                                    default:
                                        return p.default.Messages.STATUS_UNKNOWN
                                }
                            }, count: s, index: l
                        };
                    default:
                        let n = _.default.getGuild(e),
                            a = null != n ? n.getRole(t) : null;
                        return {
                            type: u.GROUP, key: t, id: t, title: null != a ? a.name : "", count: s, index: l
                        }
                }
            }

            function D(e, t, s) {
                let l = s === h.default.getId(),
                    n = C.default.isMobileOnline(s),
                    a = l ? L.default.getStatus() : C.default.getStatus(s, e),
                    r = l ? L.default.getActivities() : C.default.getActivities(s, e),
                    i = I.default.getStreamForUser(s, e),
                    d = O.default.getUser(s);
                return null == d ? null : {
                    type: u.MEMBER,
                    ...N.default.getMember(e, s),
                    user: d,
                    status: a,
                    activities: r,
                    applicationStream: i,
                    isOwner: t === s,
                    isMobileOnline: n
                }
            }

            function U(e) {
                let t = c.default.getChannel(e);
                return null == t ? g : null == t.memberListId ? function(e) {
                    return T.default.canEveryone(M.Permissions.VIEW_CHANNEL, e) ? g : i.v3(a(e.permissionOverwrites).reduce((e, t) => {
                        let {
                            id: s,
                            allow: l,
                            deny: u
                        } = t;
                        return d.default.has(l, M.Permissions.VIEW_CHANNEL) ? e.push("allow:".concat(s)) : d.default.has(u, M.Permissions.VIEW_CHANNEL) && e.push("deny:".concat(s)), e
                    }, []).sort().join(",")).toString()
                }(t) : t.memberListId
            }(l = u || (u = {})).GROUP = "GROUP", l.MEMBER = "MEMBER";
            class S {
                updateOwnerId() {
                    let e = _.default.getGuild(this.guildId);
                    if (null == e) return !1;
                    let t = T.default.getGuildVisualOwnerId(e);
                    return this.ownerId !== t && (this.ownerId = t, !0)
                }
                setGroups(e) {
                    let t = 0;
                    this.groups = e.map(e => {
                        var s;
                        let l = t,
                            u = Math.max(0, null !== (s = e.count) && void 0 !== s ? s : 0);
                        return t += u + 1, A(this.guildId, e.id, u, l)
                    }), this.rows.length = t
                }
                sync(e, t) {
                    let [s] = e;
                    t.forEach((e, t) => this.update(s + t, e))
                }
                invalidate(e) {
                    let [t, s] = e;
                    for (let e = t; e <= s; e++) {
                        let t = this.rows[e];
                        if (null == t) break;
                        delete this.rows[e], t.type === u.MEMBER && delete this.members[t.user.id]
                    }
                    this.version++
                }
                insert(e, t) {
                    let {
                        group: s,
                        member: l
                    } = t;
                    if (null != s) this.rows.splice(e, 0, A(this.guildId, s.id, s.count));
                    else if (null != l) {
                        let t = D(this.guildId, this.ownerId, l.user.id);
                        if (null == t) return;
                        this.rows.splice(e, 0, t), this.members[l.user.id] = t
                    }
                    this.version++
                }
                update(e, t) {
                    let {
                        group: s,
                        member: l
                    } = t, n = this.rows[e];
                    if (null != n && n.type === u.MEMBER && delete this.members[n.user.id], null != s) this.rows[e] = A(this.guildId, s.id, s.count);
                    else if (null != l) {
                        let t = D(this.guildId, this.ownerId, l.user.id);
                        if (null == t) return;
                        this.rows[e] = t, this.members[l.user.id] = t
                    }
                    this.version++
                }
                delete(e) {
                    let t = this.rows[e];
                    null != t && (t.type === u.MEMBER && delete this.members[t.user.id], this.rows.splice(e, 1), this.version++)
                }
                rebuildMember(e) {
                    let t = this.members[e];
                    null != t && (Object.assign(t, D(this.guildId, this.ownerId, e)), this.version++)
                }
                rebuildMembers() {
                    a.forEach(this.members, (e, t) => {
                        this.rebuildMember(t)
                    })
                }
                constructor(e, t) {
                    this.rows = [], this.groups = [], this.members = {}, this.version = 0, this.guildId = e, this.listId = t, this.updateOwnerId()
                }
            }
            let y = new class e {
                get(e, t) {
                    let s = this._guildLists[e];
                    null == s && (s = this._guildLists[e] = {});
                    let l = s[t];
                    return null == l && ((l = new S(e, t)).setGroups([{
                        id: M.StatusTypes.UNKNOWN,
                        count: 0
                    }]), s[t] = l), l
                }
                forEach(e, t) {
                    if (null == e) a.forEach(this._guildLists, e => {
                        a.forEach(e, t)
                    });
                    else {
                        let s = this._guildLists[e];
                        null != s && a.forEach(s, t)
                    }
                }
                delete(e) {
                    delete this._guildLists[e]
                }
                reset() {
                    this._guildLists = {}
                }
                constructor() {
                    this._guildLists = {}
                }
            };

            function R() {
                y.reset()
            }
            let G = [];

            function m() {
                let e = I.default.getAllApplicationStreams(),
                    t = G.concat(e);
                G = e, t.forEach(e => {
                    y.forEach(null, t => t.rebuildMember(e.ownerId))
                })
            }

            function P() {
                let e = h.default.getId();
                y.forEach(null, t => t.rebuildMember(e))
            }
            class w extends f.default.Store {
                initialize() {
                    this.waitFor(O.default, _.default, c.default, N.default, C.default, L.default, h.default, o.default, I.default), this.syncWith([L.default], P), this.syncWith([I.default], m)
                }
                getProps(e, t) {
                    let s = y.get(e, U(t));
                    return {
                        listId: "".concat(s.guildId, ":").concat(s.listId),
                        groups: s.groups,
                        rows: s.rows,
                        version: s.version
                    }
                }
                getRows(e, t) {
                    let s = y.get(e, U(t));
                    return s.rows
                }
            }
            w.displayName = "ChannelMemberStore";
            var H = new w(E.default, {
                CONNECTION_OPEN: R,
                OVERLAY_INITIALIZE: R,
                GUILD_MEMBER_LIST_UPDATE: function(e) {
                    let t = y.get(e.guildId, e.id);
                    e.ops.forEach(e => {
                        switch (e.op) {
                            case "SYNC":
                                t.sync(e.range, e.items);
                                break;
                            case "INVALIDATE":
                                t.invalidate(e.range);
                                break;
                            case "INSERT":
                                t.insert(e.index, e.item);
                                break;
                            case "UPDATE":
                                t.update(e.index, e.item);
                                break;
                            case "DELETE":
                                t.delete(e.index)
                        }
                    }), t.setGroups(e.groups)
                },
                GUILD_UPDATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    y.forEach(t.id, e => {
                        e.updateOwnerId() && e.rebuildMembers()
                    })
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    y.delete(t.id)
                },
                GUILD_ROLE_UPDATE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    y.forEach(t, e => e.rebuildMembers())
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: t,
                        user: s
                    } = e;
                    y.forEach(t, e => e.rebuildMember(s.id))
                },
                CHANNEL_UPDATES: function() {
                    return !0
                }
            })
        }
    }
]);
//# sourceMappingURL=9e6691a17b995d749083.js.map