(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["45310"], {
        427388: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return S
                }
            });
            var i = n("356056"),
                a = n("154005"),
                r = n("324415");
            n("357629"), n("151809"), n("789020");
            var l = n("454836"),
                u = n("24135"),
                s = n("312916"),
                d = n("778492"),
                o = n("301309"),
                c = n("984362"),
                _ = n("514363"),
                f = n("467006"),
                g = n("746835"),
                h = n("30175"),
                S = {
                    open(t) {
                        s.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
                            guildId: t
                        })
                    },
                    close() {
                        s.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                        })
                    },
                    updateGuildNotificationSettings(t, e, n) {
                        var i = (0, _.getCurrentGuildSettings)(t);
                        d.default.saveUserGuildSettings(t, e), s.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                            guildId: t,
                            settings: e
                        }), (0, _.trackGuildNotificationSettingsUpdate)(t, e, i, n)
                    },
                    updateGuildAndChannelNotificationSettings(t, e, n) {
                        var i = Object.keys(e.channel_overrides),
                            a = (0, _.getCurrentGuildSettings)(t),
                            r = (0, _.getManyCurrentChannelSettings)(t, i);
                        d.default.saveUserGuildSettings(t, e), s.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                            guildId: t,
                            settings: e
                        }), (0, _.trackGuildNotificationSettingsUpdate)(t, e, a, n), Object.keys(e.channel_overrides).forEach(function(i) {
                            var a = r.get(i);
                            (0, _.trackChannelNotificationSettingsUpdate)(t, i, e.channel_overrides[i], a, n)
                        })
                    },
                    updateGuildNotificationSettingsBulk(t, e) {
                        var n = Object.keys(t),
                            i = (0, _.getManyCurrentGuildSettings)(n);
                        d.default.saveUserGuildSettingsBulk(t), Object.entries(t).forEach(function(t) {
                            var n = (0, a._)(t, 2),
                                r = n[0],
                                l = n[1],
                                u = i.get(r);
                            s.default.dispatch({
                                type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                                guildId: r,
                                settings: l
                            }), (0, _.trackGuildNotificationSettingsUpdate)(r, l, u, e)
                        })
                    },
                    updateChannelOverrideSettings(t, e, n, i) {
                        var a = (0, _.getCurrentChannelSettings)(t, e);
                        d.default.saveUserGuildSettings(t, {
                            channel_overrides: {
                                [e]: n
                            }
                        }), s.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                            guildId: t,
                            channelId: e,
                            settings: n
                        }), u.AccessibilityAnnouncer.announce(h.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED), (0, _.trackChannelNotificationSettingsUpdate)(t, e, n, a, i)
                    },
                    updateChannelOverrideSettingsBulk(t, e, n) {
                        var i = Object.keys(e),
                            a = (0, _.getManyCurrentChannelSettings)(t, i);
                        d.default.saveUserGuildSettings(t, {
                            channel_overrides: e
                        }), s.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                            guildId: t,
                            overrides: e
                        }), Object.keys(e).forEach(function(i) {
                            return (0, _.trackChannelNotificationSettingsUpdate)(t, i, e[i], a.get(i), n)
                        })
                    },
                    setForumThreadsCreated(t, e) {
                        var n = e ? g.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON : g.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
                            i = e ? g.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF : g.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
                            a = o.default.getChannelFlags(t);
                        this.updateChannelOverrideSettings(t.guild_id, t.id, {
                            flags: a & ~i | n
                        })
                    },
                    setAccountFlag: (t, e) => (0, i._)(function() {
                        var n, i;
                        return (0, r._)(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return n = o.default.accountNotificationSettings.flags, i = (0, c.setFlag)(n, t, e), [4, l.default.patch({
                                        url: f.Endpoints.ACCOUNT_NOTIFICATION_SETTINGS,
                                        body: {
                                            flags: i
                                        }
                                    })];
                                case 1:
                                    return a.sent(), [4, s.default.dispatch({
                                        type: "NOTIFICATION_SETTINGS_UPDATE",
                                        settings: {
                                            flags: i
                                        }
                                    })];
                                case 2:
                                    return a.sent(), [2]
                            }
                        })
                    })()
                }
        },
        778492: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return A
                }
            });
            var i = n("356056"),
                a = n("87627"),
                r = n("29713"),
                l = n("21189"),
                u = n("227094"),
                s = n("778455"),
                d = n("324415"),
                o = n("454836"),
                c = n("963694"),
                _ = n("823940"),
                f = n("731865"),
                g = n("467006"),
                h = {},
                S = 0;

            function E() {
                h = (0, l._)({}, _.default.getCollapsedCategories())
            }

            function v() {
                !__OVERLAY__ && (clearTimeout(S), S = setTimeout(function() {
                    return C()
                }, 15e3))
            }

            function C(t, e) {
                return N.apply(this, arguments)
            }

            function N() {
                return (N = (0, i._)(function(t, e) {
                    return (0, d._)(this, function(n) {
                        switch (n.label) {
                            case 0:
                                if (!(null == t || t === g.ME)) return [3, 2];
                                return [4, o.default.patch({
                                    url: g.Endpoints.USER_GUILD_SETTINGS(g.ME),
                                    body: e
                                })];
                            case 1:
                                return n.sent(), [3, 4];
                            case 2:
                                return [4, p(null != e ? {
                                    [null != t ? t : g.ME]: e
                                } : {})];
                            case 3:
                                n.sent(), n.label = 4;
                            case 4:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function p(t) {
                return T.apply(this, arguments)
            }

            function T() {
                return (T = (0, i._)(function(t) {
                    var e, n, i, a;
                    return (0, d._)(this, function(r) {
                        switch (r.label) {
                            case 0:
                                for (var s in clearTimeout(S), e = 0 !== Object.keys(t).length, n = _.default.getCollapsedCategories(), i = function() {
                                        var t = {},
                                            e = _.default.getCollapsedCategories();
                                        for (var n in e) e[n] !== h[n] && (t[n] = !0);
                                        for (var i in h) e[i] !== h[i] && (t[i] = !0);
                                        return t
                                    }()) null != (a = f.default.getChannel(s)) && null != a.guild_id && (!(a.guild_id in t) && (t[a.guild_id] = {}), null == t[a.guild_id].channel_overrides && (t[a.guild_id].channel_overrides = {}), t[a.guild_id].channel_overrides[a.id] = (0, u._)((0, l._)({}, t[a.guild_id].channel_overrides[a.id]), {
                                    collapsed: a.id in n
                                }), e = !0);
                                if (!e) return [2, []];
                                return h = (0, l._)({}, n), delete t[g.FAVORITES], [4, o.default.patch({
                                    url: g.Endpoints.USER_GUILD_SETTINGS_BULK,
                                    body: {
                                        guilds: t
                                    }
                                })];
                            case 1:
                                return [2, r.sent().body]
                        }
                    })
                })).apply(this, arguments)
            }

            function G() {
                h = (0, l._)({}, _.default.getCollapsedCategories())
            }
            var A = new(function(t) {
                (0, r._)(n, t);
                var e = (0, s._)(n);

                function n() {
                    var t;
                    return (0, a._)(this, n), t = e.apply(this, arguments), t.actions = {
                        CATEGORY_COLLAPSE: v,
                        CATEGORY_EXPAND: v,
                        CATEGORY_COLLAPSE_ALL: v,
                        CATEGORY_EXPAND_ALL: v,
                        POST_CONNECTION_OPEN: E,
                        USER_GUILD_SETTINGS_FULL_UPDATE: G
                    }, t.saveUserGuildSettings = C, t.saveUserGuildSettingsBulk = p, t
                }
                return n
            }(c.default))
        },
        823940: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return C
                }
            });
            var i = n("87627"),
                a = n("200344"),
                r = n("29713"),
                l = n("778455");
            n("996173"), n("47120"), n("357629"), n("633702"), n("266796"), n("330740"), n("363505"), n("462848");
            var u = n("661223"),
                s = n("312916"),
                d = n("370275"),
                o = n("731865"),
                c = n("917175"),
                _ = n("610043"),
                f = n("467006"),
                g = {},
                h = 0;

            function S() {
                h += 1
            }

            function E(t) {
                if (null == g[t]) return !1;
                delete g[t]
            }
            var v = function(t) {
                (0, r._)(n, t);
                var e = (0, l._)(n);

                function n() {
                    return (0, i._)(this, n), e.apply(this, arguments)
                }
                var u = n.prototype;
                return u.initialize = function(t) {
                    this.waitFor(o.default, c.default), this.removeChangeListener(S), this.addChangeListener(S), g = null != t ? t : {}
                }, u.getState = function() {
                    return g
                }, u.isCollapsed = function(t) {
                    return null != t && "null" !== t && !!g[t] && g[t]
                }, u.getCollapsedCategories = function() {
                    return g
                }, (0, a._)(n, [{
                    key: "version",
                    get: function() {
                        return h
                    }
                }]), n
            }(u.default.PersistedStore);
            v.displayName = "CategoryCollapseStore", v.persistKey = "collapsedCategories";
            var C = new v(s.default, {
                CONNECTION_OPEN: function(t) {
                    !t.userGuildSettings.partial && (g = {});
                    var e = !0,
                        n = !1,
                        i = void 0;
                    try {
                        for (var a, r = t.userGuildSettings.entries[Symbol.iterator](); !(e = (a = r.next()).done); e = !0) {
                            var l = a.value;
                            if (null != l.channel_overrides) {
                                var u = !0,
                                    s = !1,
                                    d = void 0;
                                try {
                                    for (var o, c = l.channel_overrides[Symbol.iterator](); !(u = (o = c.next()).done); u = !0) {
                                        var _ = o.value;
                                        _.collapsed ? g[_.channel_id] = !0 : delete g[_.channel_id]
                                    }
                                } catch (t) {
                                    s = !0, d = t
                                } finally {
                                    try {
                                        !u && null != c.return && c.return()
                                    } finally {
                                        if (s) throw d
                                    }
                                }
                            }
                        }
                    } catch (t) {
                        n = !0, i = t
                    } finally {
                        try {
                            !e && null != r.return && r.return()
                        } finally {
                            if (n) throw i
                        }
                    }
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(t) {
                    var e = t.userGuildSettings,
                        n = new Set(e.map(function(t) {
                            return t.guild_id
                        }).filter(d.isNotNullish));
                    for (var i in g) {
                        var a = o.default.getChannel(i);
                        null != a && null != a.guild_id && n.has(a.guild_id) && delete g[a.id]
                    }
                    var r = !0,
                        l = !1,
                        u = void 0;
                    try {
                        for (var s, c = e[Symbol.iterator](); !(r = (s = c.next()).done); r = !0) {
                            var _ = s.value,
                                f = !0,
                                h = !1,
                                S = void 0;
                            try {
                                for (var E, v = _.channel_overrides[Symbol.iterator](); !(f = (E = v.next()).done); f = !0) {
                                    var C = E.value;
                                    C.collapsed && (g[C.channel_id] = !0)
                                }
                            } catch (t) {
                                h = !0, S = t
                            } finally {
                                try {
                                    !f && null != v.return && v.return()
                                } finally {
                                    if (h) throw S
                                }
                            }
                        }
                    } catch (t) {
                        l = !0, u = t
                    } finally {
                        try {
                            !r && null != c.return && c.return()
                        } finally {
                            if (l) throw u
                        }
                    }
                },
                CATEGORY_COLLAPSE: function(t) {
                    var e = t.id;
                    if (g[e]) return !1;
                    g[e] = !0
                },
                CATEGORY_EXPAND: function(t) {
                    return E(t.id)
                },
                CATEGORY_COLLAPSE_ALL: function(t) {
                    var e = t.guildId;
                    _.default.getChannels(e)[f.ChannelTypes.GUILD_CATEGORY].forEach(function(t) {
                        var e = t.channel;
                        "null" !== e.id && (g[e.id] = !0)
                    })
                },
                CATEGORY_EXPAND_ALL: function(t) {
                    var e = t.guildId;
                    _.default.getChannels(e)[f.ChannelTypes.GUILD_CATEGORY].forEach(function(t) {
                        var e = t.channel;
                        delete g[e.id]
                    })
                },
                CHANNEL_DELETE: function(t) {
                    return E(t.channel.id)
                }
            })
        }
    }
]);
//# sourceMappingURL=45310.3d803e558a35859d0479.js.map